import{N as P,r as i,L as D,h as _,i as A,m as Y,j as t}from"./index-f53f517b.js";import{s as r}from"./styled-components.browser.esm-f73fadf9.js";import{B as z}from"./button.esm-cd71c3ca.js";import{g as F}from"./index-86cad9a2.js";import{c as d}from"./string-service-2a9b7982.js";import"./axios-33dc75a8.js";const K=r.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,G=r.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,H=r.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,$=r.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,E=r.div`
  flex: 1 0 0%;
  max-width: 50%;
`,L=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,p=r.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,m=r.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,J=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,Q=r(z)`
  .p-button-label {
    font-weight: 400;
  }
`,U=r(P)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,oe=()=>{var y,j;const[o,b]=i.useState({}),[a,w]=i.useState({}),[c,C]=i.useState({}),[S,u]=i.useState(!1),{metrics:x,updateLogMetrics:v,updateErrorMsg:R}=i.useContext(D),{id:h}=_(),k=A(),T=Y(),q=["name","title","titleOfCourtesy","birthDate","hireDate","address","city"],I=["postalCode","country","homePhone","extension","notes"];i.useEffect(()=>{f()},[]),i.useEffect(()=>{f()},[T]),i.useEffect(()=>{O()},[o]);const f=async()=>{if(h){u(!0);try{const e=await F(h),{employee:s,sqlLog:n}=e.data,l=N(n,1);return b(s),B(l),Promise.resolve()}catch(e){const s=e instanceof Error?e.message:String(e);return R(s),Promise.reject(e)}finally{u(!1)}}},O=()=>{if(!o)return;const e=g(q),s=g(I);w(e),C(s)},B=e=>{if(!e.length)return;const n=(x.length?[...e,...x]:[...e]).slice(0,5);v(n)},N=(e,s)=>e.length?e.map(n=>{const l=(n==null?void 0:n.querySqlLog)||"";return{...n,resultsCount:l.includes("select count")?1:s}}):[],g=e=>e.reduce((s,n)=>(o[n]&&(s={...s,[n]:o[n]}),s),{}),M=()=>{k(-1)};return t.jsxs(K,{children:[t.jsx(G,{children:t.jsxs(H,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Employee information"]})}),t.jsx($,{children:S?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(E,{children:t.jsx(L,{children:Object.keys(a).length>0&&Object.keys(a).map(e=>t.jsxs(p,{children:[t.jsx(m,{children:d(e)}),a[e]]},e))})}),t.jsx(E,{children:Object.keys(c).length>0&&t.jsxs(L,{children:[Object.keys(c).map(e=>t.jsxs(p,{children:[t.jsx(m,{children:d(e)}),c[e]]},e)),(o==null?void 0:o.reportsTo)&&Object.keys(o==null?void 0:o.reportsTo).length>0&&t.jsxs(p,{children:[t.jsx(m,{children:d("reportsTo")}),t.jsx(U,{to:`/employee/${(y=o==null?void 0:o.reportsTo)==null?void 0:y.employeeId}`,children:(j=o==null?void 0:o.reportsTo)==null?void 0:j.name})]})]})})]})}),t.jsx(J,{children:t.jsx(Q,{severity:"danger",label:"Go back",onClick:M})})]})};export{oe as default};
