import{d as g,i as c,j as b,l as u,o as x,b as w,e as i,t as k,m as v,v as q,n as d,u as t}from"./index.f3b3d667.js";const B="TALON",E={a:"air",b:"bat",c:"cap",d:"drum",e:"each",f:"fine",g:"gust",h:"harp",i:"sit",j:"jury",k:"crunch",l:"look",m:"made",n:"near",o:"odd",p:"pit",q:"quench",r:"red",s:"sun",t:"trap",u:"urge",v:"vest",w:"whale",x:"plex",y:"yank",z:"zip",".":"dot",",":"comma","?":"question mark","!":"bang",":":"colon",";":"semicolon","`":"backtick","'":"quote",'"':"double quote","{":"left brace","}":"right brace","(":"left paren",")":"right paren","[":"left square","]":"right square","<":"left angle",">":"right angle","=":"equals",_:"underscore","-":"minus","+":"plus","*":"star","#":"hash","/":"slash","\\":"backslash",$:"dollar","%":"percent","^":"caret","&":"and sign","|":"pipe","@":"at sign","~":"tilde"},_={class:"text-9xl text-slate-700"},y=["disabled"],C=g({__name:"QuestionBox",props:{character:null,disabled:{type:Boolean}},emits:["correctAnswer"],setup(a,{expose:p,emit:h}){const r=a,o=c(),e=c(""),s=b(()=>t(e)===r.character);u(s,n=>{n&&h("correctAnswer")}),u(()=>r.character,()=>{e.value=""});function f(){e.value="",t(o).focus()}return p({reset:f}),(n,l)=>(x(),w("div",{class:d(["flex items-center flex-col p-8 pt-4 border-4 rounded-2xl shadow-2xl",[t(s)?"border-green-600 bg-green-50 shadow-green-300":"border-slate-200 bg-white shadow-slate-300"]])},[i("h2",_,k(a.character),1),v(i("input",{ref_key:"inputEl",ref:o,class:d(["text-7xl text-center font-medium text-slate-800 bg-slate-200 max-w-[10rem] p-2 mt-8 rounded-xl focus:outline-8",[t(s)?"focus:bg-green-300 focus:outline-green-500":"focus:bg-purple-200 focus:outline-purple-500"]]),autofocus:"","onUpdate:modelValue":l[0]||(l[0]=m=>e.value=m),disabled:a.disabled},null,10,y),[[q,e.value]])],2))}});export{E as D,B as S,C as _};
