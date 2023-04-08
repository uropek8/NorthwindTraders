import{r as l,L as R,j as t}from"./index-ec8740ca.js";import{s as n}from"./styled-components.browser.esm-220c6c9f.js";import{i as E}from"./axios-33dc75a8.js";const w=n.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`,O=n.div`
  display: flex;
  column-gap: 20px;
`,m=n.div`
  flex: 1 0 0%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`,h=n.h5`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`,a=n.p`
  margin: 0;
`,P=n.span`
  font-size: 14px;
`,Y=n.label`
  color: #9ca3af;
  font-size: 12px;
`,q=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,G=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`,W=n.li`
  display: flex;
  flex-direction: column;
`,B=n.p`
  margin: 0;
  font-family: 'Space Mono', monospace;
`,M="https://airlabs.co/api/v9/nearby";function k(d){return E.get(M,{params:d})}const z="https://ip-geolocation.whoisxmlapi.com/api/v1";function $(d){return E.get(z,{params:d})}const Q=()=>{const[d,g]=l.useState(""),[y,j]=l.useState(""),[u,L]=l.useState({}),{metrics:c,updateErrorMsg:p}=l.useContext(R),C=200,S=["select"],I=["select","where"],b=["select","left","join"],T="9947a4f1-b70a-4c7a-a8d0-8cf912f10c78",_="at_KRfqWAaENYwd6xi6CicVsAG7tX0W7";l.useEffect(()=>{D()},[]),l.useEffect(()=>{Object.keys(u).length&&A(u)},[u]);const D=async()=>{try{const s=await $({apiKey:_}),{location:r}=s.data,{lat:o,lng:i}=r;return g(r.country),L({lat:o,lng:i}),Promise.resolve()}catch(e){const s=e instanceof Error?e.message:String(e);return p(s),Promise.reject(e)}},A=async e=>{const{lat:s,lng:r}=e;if(!(!s||!r))try{const i=await k({lat:s,lng:r,api_key:T,distance:C}),{response:{airports:x}}=i.data,{iata_code:N}=x[0];return j(N),Promise.resolve()}catch(o){const i=o instanceof Error?o.message:String(o);return p(i),Promise.reject(o)}},f=e=>c.length?c.reduce((s,r)=>{const o=(r==null?void 0:r.querySqlLog)||"";return e.filter(x=>o.includes(x)).length<e.length||(s=s+1),s},0):0,v=e=>e?`${e.startTime}, ${e.executionTimeToSecond}ms`:"",K=()=>c.length?c.reduce((e,s)=>(s!=null&&s.resultsCount&&(e=e+s.resultsCount),e),0):0;return t.jsxs(w,{children:[t.jsxs(O,{children:[t.jsxs(m,{children:[t.jsx(h,{children:"Worker"}),t.jsxs(a,{children:["Colo: ",y]}),t.jsxs(a,{children:["Country: ",d]})]}),t.jsxs(m,{children:[t.jsx(h,{children:"SQL Metrics"}),t.jsxs(a,{children:["Query count: ",c.length]}),t.jsxs(a,{children:["Results count: ",K()]}),t.jsxs(a,{children:["# SELECT: ",f(S)]}),t.jsxs(a,{children:["# SELECT WHERE: ",f(I)]}),t.jsxs(a,{children:["# SELECT LEFT JOIN: ",f(b)]})]})]}),t.jsxs(q,{children:[t.jsx(h,{children:"Activity log"}),t.jsx(P,{children:"Explore the app and see metrics here"}),c.length>0&&t.jsx(G,{children:c.map((e,s)=>t.jsxs(W,{children:[t.jsx(Y,{children:v(e)}),t.jsx(B,{children:e==null?void 0:e.querySqlLog})]},s))})]})]})};export{Q as default};
