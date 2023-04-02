import{r as n,u as b,a as v,j as e}from"./index-6329a751.js";import{s as r}from"./styled-components.browser.esm-cbd7876a.js";import{B as y}from"./axios-7917a497.js";import{g as C}from"./index-18485a54.js";import"./portal.esm-5692bc9d.js";const w=r.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,L=r.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,B=r.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,E=r.div`
  display: flex;
  padding: 20px;
`,p=r.div`
  flex: 1 0 50%;
  max-width: 50%;
`,a=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,c=r.div`
  display: flex;
  flex-direction: column;
`,d=r.label`
  display: block;
  font-weight: 700;
`,I=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,N=r(y)`
  .p-button-label {
    font-weight: 400;
  }
`;function u(s=""){return s.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase())}const R=()=>{const[s,t]=n.useState(null),[x,o]=n.useState(!1),{id:l}=b(),f=v(),m=["city","address","companyName","contactName","contactTitle"],h=["phone","region","country","homePage","postalCode"];n.useEffect(()=>{g()},[]);const g=async()=>{if(l){o(!0);try{const i=await C(l),{supplier:j}=i.data;return t(j),Promise.resolve()}catch(i){return Promise.reject(i)}finally{o(!1)}}},S=()=>{f(-1)};return e.jsxs(w,{children:[e.jsx(L,{children:e.jsxs(B,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),e.jsxs(E,{children:[x&&e.jsx("p",{children:"Loading..."}),e.jsx(p,{children:e.jsx(a,{children:s&&Object.keys(s).map(i=>!m.includes(i)||!s[i]?null:e.jsxs(c,{children:[e.jsx(d,{children:u(i)}),s[i]]},i))})}),e.jsx(p,{children:e.jsx(a,{children:s&&Object.keys(s).map(i=>!h.includes(i)||!s[i]?null:e.jsxs(c,{children:[e.jsx(d,{children:u(i)}),s[i]]},i))})})]}),e.jsx(I,{children:e.jsx(N,{severity:"danger",label:"Go back",onClick:S})})]})};export{R as default};
