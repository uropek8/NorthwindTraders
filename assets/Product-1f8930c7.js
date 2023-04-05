import{N as b,r as e,u as v,a as L,j as r}from"./index-93a83de2.js";import{s as i}from"./styled-components.browser.esm-ebb0caae.js";import{B as S}from"./axios-1b1c957c.js";import{g as w}from"./index-4bf0dc89.js";import{c as n}from"./string-service-2a9b7982.js";import"./portal.esm-91b13259.js";const I=i.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,N=i.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,B=i.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,C=i.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,a=i.div`
  flex: 1 0 50%;
  max-width: 50%;
`,u=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,s=i.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,c=i.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,E=i.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,O=i(S)`
  .p-button-label {
    font-weight: 400;
  }
`,_=i(b)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,D=()=>{const[o,p]=e.useState(null),[x,d]=e.useState(!1),{id:l}=v(),f=L(),h=["supplier","unitPrice","productName","quantityPerUnit"],m=["unitsInStock","unitsOnOrder","reorderLevel","discontinued"];e.useEffect(()=>{g()},[]);const g=async()=>{if(l){d(!0);try{const t=await w(l),{product:P}=t.data;return p(P),Promise.resolve()}catch(t){return Promise.reject(t)}finally{d(!1)}}},j=()=>{f(-1)};return r.jsxs(I,{children:[r.jsx(N,{children:r.jsxs(B,{children:[r.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),r.jsxs(C,{children:[x&&r.jsx("p",{children:"Loading..."}),r.jsx(a,{children:r.jsx(u,{children:o&&Object.keys(o).map(t=>!h.includes(t)||o[t]===void 0?null:t==="supplier"?r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),r.jsx(_,{to:`/supplier/${o.supplierId}`,children:o[t]})]},t):r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),o[t]]},t))})}),r.jsx(a,{children:r.jsx(u,{children:o&&Object.keys(o).map(t=>!m.includes(t)||o[t]===void 0?null:r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),o[t]]},t))})})]}),r.jsx(E,{children:r.jsx(O,{severity:"danger",label:"Go back",onClick:j})})]})};export{D as default};
