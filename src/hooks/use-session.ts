import { useStorage } from '@vueuse/core'
import { unref, shallowRef, computed } from 'vue'

type EntryState = {
  shown: number
  errors: number
}

type SessionState<DictionaryType> = Record<keyof DictionaryType, EntryState>

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
      const weight = Math.max(10 + entryState.errors - entryState.shown, 1)
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

  const rankedList = computed(() => {
    const list: Array<[keyof DictionaryType, number]> = Object.entries(
      state.value
    ).map(([key, entryState]) => {
      const weight = Math.max(10 + entryState.errors - entryState.shown, 1)
      return [key, weight]
    })
    return list.sort((a, b) => b[1] - a[1])
  })

  return {
    current,
    next,
    addError,
    rankedList,
  }
}
