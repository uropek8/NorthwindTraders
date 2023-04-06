import{N as b,r as e,u as v,a as L,j as r}from"./index-1a7734d5.js";import{s as o}from"./styled-components.browser.esm-2626aca1.js";import{B as w}from"./axios-0e14d0dd.js";import{g as I}from"./index-b17d7d8c.js";import{c as n}from"./string-service-2a9b7982.js";import"./portal.esm-3ee05401.js";const S=o.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,N=o.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,B=o.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,C=o.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,l=o.div`
  flex: 1 0 50%;
  max-width: 50%;
`,u=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,s=o.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,c=o.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,E=o.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,O=o(w)`
  .p-button-label {
    font-weight: 400;
  }
`,_=o(b)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,D=()=>{const[i,p]=e.useState(null),[x,d]=e.useState(!1),{id:a}=v(),f=L(),h=["supplier","unitPrice","productName","quantityPerUnit"],m=["unitsInStock","unitsOnOrder","reorderLevel","discontinued"];e.useEffect(()=>{g()},[]);const g=async()=>{if(a){d(!0);try{const t=await I(a),{product:P}=t.data;return p(P),Promise.resolve()}catch(t){return Promise.reject(t)}finally{d(!1)}}},j=()=>{f(-1)};return r.jsxs(S,{children:[r.jsx(N,{children:r.jsxs(B,{children:[r.jsx("i",{className:"pi pi-id-card"}),"Product information"]})}),r.jsxs(C,{children:[x&&r.jsx("p",{children:"Loading..."}),r.jsx(l,{children:r.jsx(u,{children:i&&Object.keys(i).map(t=>!h.includes(t)||i[t]===void 0?null:t==="supplier"?r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),r.jsx(_,{to:`/supplier/${i.supplierId}`,children:i[t]})]},t):r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),i[t]]},t))})}),r.jsx(l,{children:r.jsx(u,{children:i&&Object.keys(i).map(t=>!m.includes(t)||i[t]===void 0?null:r.jsxs(s,{children:[r.jsx(c,{children:n(t)}),i[t]]},t))})})]}),r.jsx(E,{children:r.jsx(O,{severity:"danger",label:"Go back",onClick:j})})]})};export{D as default};
