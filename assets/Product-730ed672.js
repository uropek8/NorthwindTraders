import{N as w,r as i,L as I,u as y,a as E,j as e}from"./index-be2f80e1.js";import{s as n}from"./styled-components.browser.esm-ba6426bd.js";import{B as N}from"./button.esm-19018f20.js";import{g as B}from"./index-3c45a12b.js";import{c as d}from"./string-service-2a9b7982.js";import"./portal.esm-1d4f48d1.js";import"./axios-33dc75a8.js";const O=n.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,_=n.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,A=n.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,F=n.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,h=n.div`
  flex: 1 0 50%;
  max-width: 50%;
`,m=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,a=n.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,l=n.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,M=n.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,R=n(N)`
  .p-button-label {
    font-weight: 400;
  }
`,T=n(w)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,U=()=>{const[r,f]=i.useState({}),[g,u]=i.useState(!1),{metrics:p,updateLogMetrics:j}=i.useContext(I),{id:x}=y(),P=E(),L=["supplier","unitPrice","productName","quantityPerUnit"],b=["unitsInStock","unitsOnOrder","reorderLevel","discontinued"];i.useEffect(()=>{v()},[]);const v=async()=>{if(x){u(!0);try{const t=await B(x),{product:o,sqlLog:s}=t.data,c=q(s,1);return f(o),C(c),Promise.resolve()}catch(t){return Promise.reject(t)}finally{u(!1)}}},S=()=>{P(-1)},C=t=>{if(!t.length)return;const s=(p.length?[...t,...p]:[...t]).slice(0,5);j(s)},q=(t,o)=>t.length?t.map(s=>{const c=(s==null?void 0:s.querySqlLog)||"";return{...s,resultsCount:c.includes("select count")?1:o}}):[];return e.jsx(e.Fragment,{children:g?e.jsx("p",{children:"Loading..."}):e.jsxs(O,{children:[e.jsx(_,{children:e.jsxs(A,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Product information"]})}),e.jsx(F,{children:Object.keys(r).length>0?e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsx(m,{children:r&&Object.keys(r).map(t=>!L.includes(t)||r[t]===void 0?null:t==="supplier"?e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),e.jsx(T,{to:`/supplier/${r.supplierId}`,children:r[t]})]},t):e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),r[t]]},t))})}),e.jsx(h,{children:e.jsx(m,{children:r&&Object.keys(r).map(t=>!b.includes(t)||r[t]===void 0?null:e.jsxs(a,{children:[e.jsx(l,{children:d(t)}),r[t]]},t))})})]}):e.jsx("p",{children:"Empty data"})}),e.jsx(M,{children:e.jsx(R,{severity:"danger",label:"Go back",onClick:S})})]})})};export{U as default};
