import{N as P,r as i,L as D,u as M,a as _,b as A,j as t}from"./index-67b73d2d.js";import{s as r}from"./styled-components.browser.esm-1ad48312.js";import{B as Y}from"./button.esm-71fee8cd.js";import{g as z}from"./index-36dfa09e.js";import{c as d}from"./string-service-2a9b7982.js";import"./portal.esm-2d4d4803.js";import"./axios-51d3c6c4.js";const F=r.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,K=r.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,G=r.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,H=r.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,E=r.div`
  flex: 1 0 0%;
  max-width: 50%;
`,b=r.div`
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
`,$=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,J=r(Y)`
  .p-button-label {
    font-weight: 400;
  }
`,Q=r(P)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,oe=()=>{var y,j;const[o,L]=i.useState({}),[a,w]=i.useState({}),[c,C]=i.useState({}),[S,u]=i.useState(!1),{metrics:x,updateLogMetrics:v}=i.useContext(D),{id:h}=M(),R=_(),k=A(),T=["name","title","titleOfCourtesy","birthDate","hireDate","address","city"],q=["postalCode","country","homePhone","extension","notes"];i.useEffect(()=>{f()},[]),i.useEffect(()=>{f()},[k]),i.useEffect(()=>{I()},[o]);const f=async()=>{if(h){u(!0);try{const e=await z(h),{employee:n,sqlLog:s}=e.data,l=B(s,1);return L(n),O(l),Promise.resolve()}catch(e){return Promise.reject(e)}finally{u(!1)}}},I=()=>{if(!o)return;const e=g(T),n=g(q);w(e),C(n)},O=e=>{if(!e.length)return;const s=(x.length?[...e,...x]:[...e]).slice(0,5);v(s)},B=(e,n)=>e.length?e.map(s=>{const l=(s==null?void 0:s.querySqlLog)||"";return{...s,resultsCount:l.includes("select count")?1:n}}):[],g=e=>e.reduce((n,s)=>(o[s]&&(n={...n,[s]:o[s]}),n),{}),N=()=>{R(-1)};return t.jsxs(F,{children:[t.jsx(K,{children:t.jsxs(G,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Employee information"]})}),t.jsx(H,{children:S?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(E,{children:t.jsx(b,{children:Object.keys(a).length>0&&Object.keys(a).map(e=>t.jsxs(p,{children:[t.jsx(m,{children:d(e)}),a[e]]},e))})}),t.jsx(E,{children:Object.keys(c).length>0&&t.jsxs(b,{children:[Object.keys(c).map(e=>t.jsxs(p,{children:[t.jsx(m,{children:d(e)}),c[e]]},e)),(o==null?void 0:o.reportsTo)&&Object.keys(o==null?void 0:o.reportsTo).length>0&&t.jsxs(p,{children:[t.jsx(m,{children:d("reportsTo")}),t.jsx(Q,{to:`/employee/${(y=o==null?void 0:o.reportsTo)==null?void 0:y.employeeId}`,children:(j=o==null?void 0:o.reportsTo)==null?void 0:j.name})]})]})})]})}),t.jsx($,{children:t.jsx(J,{severity:"danger",label:"Go back",onClick:N})})]})};export{oe as default};
