import{r as s,u as b,a as v,j as e}from"./index-b83ad5a6.js";import{s as t}from"./styled-components.browser.esm-5984686f.js";import{B as y}from"./axios-69c48f3a.js";import{g as w}from"./index-37df7b3b.js";import{c as l}from"./string-service-2a9b7982.js";import"./portal.esm-9e148423.js";const C=t.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,L=t.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,B=t.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,E=t.div`
  display: flex;
  padding: 20px;
`,p=t.div`
  flex: 1 0 50%;
  max-width: 50%;
`,a=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,c=t.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,d=t.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,I=t.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,N=t(y)`
  .p-button-label {
    font-weight: 400;
  }
`,Y=()=>{const[r,u]=s.useState(null),[x,n]=s.useState(!1),{id:o}=b(),f=v(),m=["city","address","companyName","contactName","contactTitle"],h=["phone","region","country","homePage","postalCode"];s.useEffect(()=>{g()},[]);const g=async()=>{if(o){n(!0);try{const i=await w(o),{supplier:j}=i.data;return u(j),Promise.resolve()}catch(i){return Promise.reject(i)}finally{n(!1)}}},S=()=>{f(-1)};return e.jsxs(C,{children:[e.jsx(L,{children:e.jsxs(B,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),e.jsxs(E,{children:[x&&e.jsx("p",{children:"Loading..."}),e.jsx(p,{children:e.jsx(a,{children:r&&Object.keys(r).map(i=>!m.includes(i)||!r[i]?null:e.jsxs(c,{children:[e.jsx(d,{children:l(i)}),r[i]]},i))})}),e.jsx(p,{children:e.jsx(a,{children:r&&Object.keys(r).map(i=>!h.includes(i)||!r[i]?null:e.jsxs(c,{children:[e.jsx(d,{children:l(i)}),r[i]]},i))})})]}),e.jsx(I,{children:e.jsx(N,{severity:"danger",label:"Go back",onClick:S})})]})};export{Y as default};
