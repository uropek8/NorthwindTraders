import{r as o,u as w,a as E,L as B,j as t}from"./index-1679cfed.js";import{s as r}from"./styled-components.browser.esm-2e2d5112.js";import{B as I}from"./button.esm-3cd24c1c.js";import{g as N}from"./index-2ec1eb56.js";import{c as d}from"./string-service-2a9b7982.js";import"./portal.esm-7e59b28a.js";import"./axios-51d3c6c4.js";const P=r.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,O=r.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,T=r.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,_=r.div`
  display: flex;
  padding: 20px;
`,u=r.div`
  flex: 1 0 50%;
  max-width: 50%;
`,x=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,m=r.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,h=r.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,A=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,F=r(I)`
  .p-button-label {
    font-weight: 400;
  }
`,G=()=>{const[i,f]=o.useState({}),[g,c]=o.useState(!1),{id:p}=w(),S=E(),{metrics:a,updateLogMetrics:j}=o.useContext(B),L=["city","address","companyName","contactName","contactTitle"],b=["phone","region","country","homePage","postalCode"];o.useEffect(()=>{y()},[]);const y=async()=>{if(p){c(!0);try{const e=await N(p),{supplier:n,sqlLog:s}=e.data,l=q(s,1);return f(n),C(l),Promise.resolve()}catch(e){return Promise.reject(e)}finally{c(!1)}}},v=()=>{S(-1)},C=e=>{if(!e.length)return;const s=(a.length?[...e,...a]:[...e]).slice(0,5);j(s)},q=(e,n)=>e.length?e.map(s=>{const l=(s==null?void 0:s.querySqlLog)||"";return{...s,resultsCount:l.includes("select count")?1:n}}):[];return t.jsx(t.Fragment,{children:g?t.jsx("p",{children:"Loading..."}):t.jsxs(P,{children:[t.jsx(O,{children:t.jsxs(T,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),t.jsx(_,{children:Object.keys(i).length>0?t.jsxs(t.Fragment,{children:[t.jsx(u,{children:t.jsx(x,{children:i&&Object.keys(i).map(e=>!L.includes(e)||!i[e]?null:t.jsxs(m,{children:[t.jsx(h,{children:d(e)}),i[e]]},e))})}),t.jsx(u,{children:t.jsx(x,{children:i&&Object.keys(i).map(e=>!b.includes(e)||!i[e]?null:t.jsxs(m,{children:[t.jsx(h,{children:d(e)}),i[e]]},e))})})]}):t.jsx("p",{children:"Empty data"})}),t.jsx(A,{children:t.jsx(F,{severity:"danger",label:"Go back",onClick:v})})]})})};export{G as default};
