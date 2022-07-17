import { useStorage } from '@vueuse/core'
import { unref, shallowRef, computed } from 'vue'

export type EntryState = {
  shown: number
  errors: number
}

export type ResultItem<DictionaryType> = EntryState & {
  key: keyof DictionaryType
  accuracy: number
}

type SessionState<DictionaryType> = Record<keyof DictionaryType, EntryState>

function getWeight(entry: EntryState): number {
  return Math.max(10 + entry.errors - entry.shown, 1)
}

export function useSession<DictionaryType extends Record<string, string>>(
  sessionKey: string,
  dictionary: DictionaryType
) {
  const emptyState: SessionState<DictionaryType> = Object.keys(
    dictionary
  ).reduce((state: SessionState<DictionaryType>, key: keyof DictionaryType) => {
    state[key] = {
      shown: 0,
      errors: 0,
    }
    return state
  }, {} as SessionState<DictionaryType>)

  const state = useStorage(sessionKey, emptyState)

  function getRandom(): keyof DictionaryType {
    const weightedList: Array<keyof DictionaryType> = []
    Object.entries(state.value).forEach(([key, entryState]) => {
      const weight = getWeight(entryState)
      weightedList.push(...Array(weight).fill(key))
    })

    const result = weightedList[Math.floor(Math.random() * weightedList.length)]
    state.value[result].shown++
    return result
  }

  const current = shallowRef<keyof DictionaryType>(getRandom())

  function next() {
    let next = getRandom()
    while (next === unref(current)) {
      next = getRandom()
    }
    current.value = next
  }

  function addError() {
    state.value[unref(current)].errors++
  }

  const results = computed<ResultItem<DictionaryType>[]>(() =>
    Object.entries(state.value).map(([key, entryState]) => ({
      key,
      accuracy:
        entryState.shown === 0
          ? 0
          : (entryState.shown - entryState.errors) / entryState.shown,
      ...entryState,
    }))
  )

  return {
    current,
    next,
    addError,
    results,
  }
}
