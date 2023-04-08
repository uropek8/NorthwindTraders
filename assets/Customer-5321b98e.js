import{r as n,L as O,e as M,f as P,j as e}from"./index-ec8740ca.js";import{s as r}from"./styled-components.browser.esm-220c6c9f.js";import{B as T}from"./button.esm-ee13bd22.js";import{g as _}from"./index-9ef98717.js";import{c as x}from"./string-service-2a9b7982.js";import"./axios-33dc75a8.js";const A=r.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,F=r.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,Y=r.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,z=r.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,f=r.div`
  flex: 1 0 0%;
  max-width: 50%;
`,g=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,h=r.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,C=r.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,D=r.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,K=r(T)`
  .p-button-label {
    font-weight: 400;
  }
`,W=()=>{const[i,j]=n.useState({}),[c,y]=n.useState({}),[a,b]=n.useState({}),[L,l]=n.useState(!1),{metrics:u,updateLogMetrics:w,updateErrorMsg:S}=n.useContext(O),{id:m}=M(),v=P(),R=["companyName","contactName","contactTitle","address","city"],E=["postalCode","region","country","phone","fax"];n.useEffect(()=>{q()},[]),n.useEffect(()=>{k()},[i]);const q=async()=>{if(m){l(!0);try{const t=await _(m),{customer:s,sqlLog:o}=t.data,d=I(o,1);return j(s),B(d),Promise.resolve()}catch(t){const s=t instanceof Error?t.message:String(t);return S(s),Promise.reject(t)}finally{l(!1)}}},k=()=>{if(!i)return;const t=p(R),s=p(E);y(t),b(s)},B=t=>{if(!t.length)return;const o=(u.length?[...t,...u]:[...t]).slice(0,5);w(o)},I=(t,s)=>t.length?t.map(o=>{const d=(o==null?void 0:o.querySqlLog)||"";return{...o,resultsCount:d.includes("select count")?1:s}}):[],p=t=>t.reduce((s,o)=>(i[o]&&(s={...s,[o]:i[o]}),s),{}),N=()=>{v(-1)};return e.jsx(e.Fragment,{children:L?e.jsx("p",{children:"Loading..."}):e.jsxs(A,{children:[e.jsx(F,{children:e.jsxs(Y,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Customer information"]})}),e.jsx(z,{children:Object.keys(i).length>0?e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx(g,{children:Object.keys(c).length>0&&Object.keys(c).map(t=>e.jsxs(h,{children:[e.jsx(C,{children:x(t)}),c[t]]},t))})}),e.jsx(f,{children:Object.keys(a).length>0&&e.jsx(g,{children:Object.keys(a).map(t=>e.jsxs(h,{children:[e.jsx(C,{children:x(t)}),a[t]]},t))})})]}):e.jsx("p",{children:"Empty data"})}),e.jsx(D,{children:e.jsx(K,{severity:"danger",label:"Go back",onClick:N})})]})})};export{W as default};
