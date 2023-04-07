import{r as i,L as N,j as t}from"./index-be2f80e1.js";import{s as n}from"./styled-components.browser.esm-ba6426bd.js";import{i as m}from"./axios-33dc75a8.js";const R=n.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`,w=n.div`
  display: flex;
  column-gap: 20px;
`,p=n.div`
  flex: 1 0 0%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`,h=n.h5`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`,c=n.p`
  margin: 0;
`,O=n.span`
  font-size: 14px;
`,P=n.label`
  color: #9ca3af;
  font-size: 12px;
`,Y=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,q=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`,G=n.li`
  display: flex;
  flex-direction: column;
`,W=n.p`
  margin: 0;
  font-family: 'Space Mono', monospace;
`,B="https://ip-geolocation.whoisxmlapi.com/api/v1";function k(l){return m.get(B,{params:l})}const z="https://airlabs.co/api/v9/nearby";function M(l){return m.get(z,{params:l})}const J=()=>{const[l,E]=i.useState(""),[y,j]=i.useState(""),[u,g]=i.useState({}),{metrics:o}=i.useContext(N),L=200,C=["select"],b=["select","where"],I=["select","left","join"],S="39c7b782-e507-473a-af2f-0aba7de6c3a1",T="at_KRfqWAaENYwd6xi6CicVsAG7tX0W7";i.useEffect(()=>{_()},[]),i.useEffect(()=>{Object.keys(u).length&&D(u)},[u]);const _=async()=>{try{const s=await k({apiKey:T}),{location:r}=s.data,{lat:a,lng:d}=r;return E(r.country),g({lat:a,lng:d}),Promise.resolve()}catch(e){return Promise.reject(e)}},D=async e=>{const{lat:s,lng:r}=e;if(!(!s||!r))try{const d=await M({lat:s,lng:r,api_key:S,distance:L}),{response:{airports:f}}=d.data,{iata_code:K}=f[0];return j(K),Promise.resolve()}catch(a){return Promise.reject(a)}},x=e=>o.length?o.reduce((s,r)=>{const a=(r==null?void 0:r.querySqlLog)||"";return e.filter(f=>a.includes(f)).length<e.length||(s=s+1),s},0):0,A=e=>e?`${e.startTime}, ${e.executionTimeToSecond}ms`:"",v=()=>o.length?o.reduce((e,s)=>(s!=null&&s.resultsCount&&(e=e+s.resultsCount),e),0):0;return t.jsxs(R,{children:[t.jsxs(w,{children:[t.jsxs(p,{children:[t.jsx(h,{children:"Worker"}),t.jsxs(c,{children:["Colo: ",y]}),t.jsxs(c,{children:["Country: ",l]})]}),t.jsxs(p,{children:[t.jsx(h,{children:"SQL Metrics"}),t.jsxs(c,{children:["Query count: ",o.length]}),t.jsxs(c,{children:["Results count: ",v()]}),t.jsxs(c,{children:["# SELECT: ",x(C)]}),t.jsxs(c,{children:["# SELECT WHERE: ",x(b)]}),t.jsxs(c,{children:["# SELECT LEFT JOIN: ",x(I)]})]})]}),t.jsxs(Y,{children:[t.jsx(h,{children:"Activity log"}),t.jsx(O,{children:"Explore the app and see metrics here"}),o.length>0&&t.jsx(q,{children:o.map((e,s)=>t.jsxs(G,{children:[t.jsx(P,{children:A(e)}),t.jsx(W,{children:e==null?void 0:e.querySqlLog})]},s))})]})]})};export{J as default};
