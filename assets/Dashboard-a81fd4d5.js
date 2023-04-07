import{r as a,L as N,j as t}from"./index-1679cfed.js";import{s as n}from"./styled-components.browser.esm-2e2d5112.js";import{i as E}from"./axios-51d3c6c4.js";const K=n.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`,R=n.div`
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
`,Y=n.span`
  font-size: 14px;
`,v=n.label`
  color: #9ca3af;
  font-size: 12px;
`,w=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,B=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`,G=n.li`
  display: flex;
  flex-direction: column;
`,q=n.p`
  margin: 0;
  font-family: 'Space Mono', monospace;
`,H={}.VITE_API_GEOLOCATION_PATH;function V(l){return E.get(H,{params:l})}const k={}.VITE_API_NEAR_BY_PATH;function z(l){return E.get(k,{params:l})}const F=()=>{const[l,m]=a.useState(""),[_,I]=a.useState(""),[u,y]=a.useState({}),{metrics:o}=a.useContext(N),j=200,T=["select"],L=["select","where"],g=["select","left","join"],C={}.VITE_API_NEAR_BY_KEY,A={}.VITE_API_GEOLOCATION_KEY;a.useEffect(()=>{S()},[]),a.useEffect(()=>{Object.keys(u).length&&b(u)},[u]);const S=async()=>{try{const s=await V({apiKey:A}),{location:r}=s.data,{lat:i,lng:d}=r;return m(r.country),y({lat:i,lng:d}),Promise.resolve()}catch(e){return Promise.reject(e)}},b=async e=>{const{lat:s,lng:r}=e;if(!(!s||!r))try{const d=await z({lat:s,lng:r,api_key:C,distance:j}),{response:{airports:f}}=d.data,{iata_code:P}=f[0];return I(P),Promise.resolve()}catch(i){return Promise.reject(i)}},x=e=>o.length?o.reduce((s,r)=>{const i=(r==null?void 0:r.querySqlLog)||"";return e.filter(f=>i.includes(f)).length<e.length||(s=s+1),s},0):0,D=e=>e?`${e.startTime}, ${e.executionTimeToSecond}ms`:"",O=()=>o.length?o.reduce((e,s)=>(s!=null&&s.resultsCount&&(e=e+s.resultsCount),e),0):0;return t.jsxs(K,{children:[t.jsxs(R,{children:[t.jsxs(p,{children:[t.jsx(h,{children:"Worker"}),t.jsxs(c,{children:["Colo: ",_]}),t.jsxs(c,{children:["Country: ",l]})]}),t.jsxs(p,{children:[t.jsx(h,{children:"SQL Metrics"}),t.jsxs(c,{children:["Query count: ",o.length]}),t.jsxs(c,{children:["Results count: ",O()]}),t.jsxs(c,{children:["# SELECT: ",x(T)]}),t.jsxs(c,{children:["# SELECT WHERE: ",x(L)]}),t.jsxs(c,{children:["# SELECT LEFT JOIN: ",x(g)]})]})]}),t.jsxs(w,{children:[t.jsx(h,{children:"Activity log"}),t.jsx(Y,{children:"Explore the app and see metrics here"}),o.length>0&&t.jsx(B,{children:o.map((e,s)=>t.jsxs(G,{children:[t.jsx(v,{children:D(e)}),t.jsx(q,{children:e==null?void 0:e.querySqlLog})]},s))})]})]})};export{F as default};
