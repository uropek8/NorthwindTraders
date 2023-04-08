import{N as B,r as i,L as M,h as k,i as _,j as e}from"./index-f53f517b.js";import{s}from"./styled-components.browser.esm-f73fadf9.js";import{B as A}from"./button.esm-cd71c3ca.js";import{g as F}from"./index-3c45a12b.js";import{c as d}from"./string-service-2a9b7982.js";import"./axios-33dc75a8.js";const T=s.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,Y=s.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,z=s.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,D=s.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,g=s.div`
  flex: 1 0 50%;
  max-width: 50%;
`,j=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,a=s.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,l=s.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,K=s.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,$=s(A)`
  .p-button-label {
    font-weight: 400;
  }
`,G=s(B)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,X=()=>{const[o,P]=i.useState({}),[L,u]=i.useState(!1),[p,b]=i.useState({}),[x,w]=i.useState({}),{metrics:h,updateLogMetrics:S,updateErrorMsg:v}=i.useContext(M),{id:m}=k(),y=_(),C=["productName","supplier","quantityPerUnit","unitPrice"],R=["unitsInStock","unitsOnOrder","reorderLevel","discontinued"];i.useEffect(()=>{E()},[]),i.useEffect(()=>{q()},[o]);const E=async()=>{if(m){u(!0);try{const t=await F(m),{product:r,sqlLog:n}=t.data,c=N(n,1);return P(r),O(c),Promise.resolve()}catch(t){const r=t instanceof Error?t.message:String(t);return v(r),Promise.reject(t)}finally{u(!1)}}},q=()=>{if(!o)return;const t=f(C),r=f(R);b(t),w(r)},f=t=>t.reduce((r,n)=>(o[n]&&(r={...r,[n]:o[n]}),r),{}),I=()=>{y(-1)},O=t=>{if(!t.length)return;const n=(h.length?[...t,...h]:[...t]).slice(0,5);S(n)},N=(t,r)=>t.length?t.map(n=>{const c=(n==null?void 0:n.querySqlLog)||"";return{...n,resultsCount:c.includes("select count")?1:r}}):[];return e.jsx(e.Fragment,{children:L?e.jsx("p",{children:"Loading..."}):e.jsxs(T,{children:[e.jsx(Y,{children:e.jsxs(z,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Product information"]})}),e.jsx(D,{children:Object.keys(o).length>0?e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(j,{children:Object.keys(p).length>0&&Object.keys(p).map(t=>t==="supplier"?e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),e.jsx(G,{to:`/supplier/${o.supplierId}`,children:o[t]})]},t):e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),t==="unitPrice"?"$":"",o[t]]},t))})}),e.jsx(g,{children:e.jsx(j,{children:Object.keys(x).length>0&&Object.keys(x).map(t=>e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),o[t]]},t))})})]}):e.jsx("p",{children:"Empty data"})}),e.jsx(K,{children:e.jsx($,{severity:"danger",label:"Go back",onClick:I})})]})})};export{X as default};
