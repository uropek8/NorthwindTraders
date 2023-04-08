import{r as o,h as w,i as B,L as I,j as t}from"./index-f53f517b.js";import{s as r}from"./styled-components.browser.esm-f73fadf9.js";import{B as N}from"./button.esm-cd71c3ca.js";import{g as P}from"./index-febb613b.js";import{c as d}from"./string-service-2a9b7982.js";import"./axios-33dc75a8.js";const M=r.div`
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
`,g=r.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,A=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,F=r(N)`
  .p-button-label {
    font-weight: 400;
  }
`,G=()=>{const[s,h]=o.useState({}),[f,c]=o.useState(!1),{id:a}=w(),S=B(),{metrics:p,updateLogMetrics:j,updateErrorMsg:L}=o.useContext(I),b=["city","address","companyName","contactName","contactTitle"],y=["phone","region","country","homePage","postalCode"];o.useEffect(()=>{v()},[]);const v=async()=>{if(a){c(!0);try{const e=await P(a),{supplier:n,sqlLog:i}=e.data,l=q(i,1);return h(n),E(l),Promise.resolve()}catch(e){const n=e instanceof Error?e.message:String(e);return L(n),Promise.reject(e)}finally{c(!1)}}},C=()=>{S(-1)},E=e=>{if(!e.length)return;const i=(p.length?[...e,...p]:[...e]).slice(0,5);j(i)},q=(e,n)=>e.length?e.map(i=>{const l=(i==null?void 0:i.querySqlLog)||"";return{...i,resultsCount:l.includes("select count")?1:n}}):[];return t.jsx(t.Fragment,{children:f?t.jsx("p",{children:"Loading..."}):t.jsxs(M,{children:[t.jsx(O,{children:t.jsxs(T,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),t.jsx(_,{children:Object.keys(s).length>0?t.jsxs(t.Fragment,{children:[t.jsx(u,{children:t.jsx(x,{children:s&&Object.keys(s).map(e=>!b.includes(e)||!s[e]?null:t.jsxs(m,{children:[t.jsx(g,{children:d(e)}),s[e]]},e))})}),t.jsx(u,{children:t.jsx(x,{children:s&&Object.keys(s).map(e=>!y.includes(e)||!s[e]?null:t.jsxs(m,{children:[t.jsx(g,{children:d(e)}),s[e]]},e))})})]}):t.jsx("p",{children:"Empty data"})}),t.jsx(A,{children:t.jsx(F,{severity:"danger",label:"Go back",onClick:C})})]})})};export{G as default};
