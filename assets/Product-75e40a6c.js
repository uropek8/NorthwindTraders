import{N,r as i,L as B,u as k,a as M,j as e}from"./index-2b51ce5e.js";import{s as o}from"./styled-components.browser.esm-21c048a6.js";import{B as _}from"./button.esm-16c5dd9d.js";import{g as A}from"./index-ce4af1c9.js";import{c as d}from"./string-service-2a9b7982.js";import"./portal.esm-43ba1eb8.js";import"./axios-51d3c6c4.js";const F=o.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,T=o.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,Y=o.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,z=o.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,g=o.div`
  flex: 1 0 50%;
  max-width: 50%;
`,j=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,a=o.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,l=o.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,D=o.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,K=o(_)`
  .p-button-label {
    font-weight: 400;
  }
`,$=o(N)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,X=()=>{const[s,P]=i.useState({}),[L,u]=i.useState(!1),[p,b]=i.useState({}),[x,w]=i.useState({}),{metrics:h,updateLogMetrics:S}=i.useContext(B),{id:m}=k(),v=M(),y=["productName","supplier","quantityPerUnit","unitPrice"],C=["unitsInStock","unitsOnOrder","reorderLevel","discontinued"];i.useEffect(()=>{R()},[]),i.useEffect(()=>{q()},[s]);const R=async()=>{if(m){u(!0);try{const t=await A(m),{product:n,sqlLog:r}=t.data,c=O(r,1);return P(n),I(c),Promise.resolve()}catch(t){return Promise.reject(t)}finally{u(!1)}}},q=()=>{if(!s)return;const t=f(y),n=f(C);b(t),w(n)},f=t=>t.reduce((n,r)=>(s[r]&&(n={...n,[r]:s[r]}),n),{}),E=()=>{v(-1)},I=t=>{if(!t.length)return;const r=(h.length?[...t,...h]:[...t]).slice(0,5);S(r)},O=(t,n)=>t.length?t.map(r=>{const c=(r==null?void 0:r.querySqlLog)||"";return{...r,resultsCount:c.includes("select count")?1:n}}):[];return e.jsx(e.Fragment,{children:L?e.jsx("p",{children:"Loading..."}):e.jsxs(F,{children:[e.jsx(T,{children:e.jsxs(Y,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Product information"]})}),e.jsx(z,{children:Object.keys(s).length>0?e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(j,{children:Object.keys(p).length>0&&Object.keys(p).map(t=>t==="supplier"?e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),e.jsx($,{to:`/supplier/${s.supplierId}`,children:s[t]})]},t):e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),t==="unitPrice"?"$":"",s[t]]},t))})}),e.jsx(g,{children:e.jsx(j,{children:Object.keys(x).length>0&&Object.keys(x).map(t=>e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),s[t]]},t))})})]}):e.jsx("p",{children:"Empty data"})}),e.jsx(D,{children:e.jsx(K,{severity:"danger",label:"Go back",onClick:E})})]})})};export{X as default};
