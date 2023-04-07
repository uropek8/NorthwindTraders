import{r,L as N,u as O,a as M,j as e}from"./index-67b73d2d.js";import{s as n}from"./styled-components.browser.esm-1ad48312.js";import{B as P}from"./button.esm-71fee8cd.js";import{g as T}from"./index-c4005c5f.js";import{c as x}from"./string-service-2a9b7982.js";import"./portal.esm-2d4d4803.js";import"./axios-51d3c6c4.js";const _=n.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,A=n.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,F=n.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,Y=n.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,f=n.div`
  flex: 1 0 0%;
  max-width: 50%;
`,h=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,g=n.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,C=n.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,z=n.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,D=n(P)`
  .p-button-label {
    font-weight: 400;
  }
`,W=()=>{const[i,j]=r.useState({}),[c,y]=r.useState({}),[a,b]=r.useState({}),[L,l]=r.useState(!1),{metrics:u,updateLogMetrics:w}=r.useContext(N),{id:m}=O(),S=M(),v=["companyName","contactName","contactTitle","address","city"],R=["postalCode","region","country","phone","fax"];r.useEffect(()=>{E()},[]),r.useEffect(()=>{q()},[i]);const E=async()=>{if(m){l(!0);try{const t=await T(m),{customer:o,sqlLog:s}=t.data,d=B(s,1);return j(o),k(d),Promise.resolve()}catch(t){return Promise.reject(t)}finally{l(!1)}}},q=()=>{if(!i)return;const t=p(v),o=p(R);y(t),b(o)},k=t=>{if(!t.length)return;const s=(u.length?[...t,...u]:[...t]).slice(0,5);w(s)},B=(t,o)=>t.length?t.map(s=>{const d=(s==null?void 0:s.querySqlLog)||"";return{...s,resultsCount:d.includes("select count")?1:o}}):[],p=t=>t.reduce((o,s)=>(i[s]&&(o={...o,[s]:i[s]}),o),{}),I=()=>{S(-1)};return e.jsx(e.Fragment,{children:L?e.jsx("p",{children:"Loading..."}):e.jsxs(_,{children:[e.jsx(A,{children:e.jsxs(F,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Customer information"]})}),e.jsx(Y,{children:Object.keys(i).length>0?e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx(h,{children:Object.keys(c).length>0&&Object.keys(c).map(t=>e.jsxs(g,{children:[e.jsx(C,{children:x(t)}),c[t]]},t))})}),e.jsx(f,{children:Object.keys(a).length>0&&e.jsx(h,{children:Object.keys(a).map(t=>e.jsxs(g,{children:[e.jsx(C,{children:x(t)}),a[t]]},t))})})]}):e.jsx("p",{children:"Empty data"})}),e.jsx(z,{children:e.jsx(D,{severity:"danger",label:"Go back",onClick:I})})]})})};export{W as default};
