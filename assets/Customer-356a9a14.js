import{r as n,u as k,a as L,j as t}from"./index-93a83de2.js";import{s}from"./styled-components.browser.esm-ebb0caae.js";import{B as O}from"./axios-1b1c957c.js";import{g as B}from"./index-a2e1b799.js";import{c as u}from"./string-service-2a9b7982.js";import"./portal.esm-91b13259.js";const I=s.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,N=s.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,T=s.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,_=s.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,x=s.div`
  flex: 1 0 0%;
  max-width: 50%;
`,p=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,f=s.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,h=s.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,A=s.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,F=s(O)`
  .p-button-label {
    font-weight: 400;
  }
`,G=()=>{const[r,g]=n.useState({}),[i,C]=n.useState({}),[a,j]=n.useState({}),[b,l]=n.useState(!1),{id:d}=k(),y=L(),w=["companyName","contactName","contactTitle","address","city"],v=["postalCode","region","country","phone","fax"];n.useEffect(()=>{S()},[]),n.useEffect(()=>{R()},[r]);const R=()=>{if(!r)return;const e=m(w),o=m(v);C(e),j(o)},m=e=>!r||!Object.keys(r).length?{}:e.reduce((o,c)=>(r[c]&&(o={...o,[c]:r[c]}),o),{}),S=async()=>{if(d){l(!0);try{const e=await B(d),{customer:o}=e.data;return g(o),Promise.resolve()}catch(e){return Promise.reject(e)}finally{l(!1)}}},E=()=>{y(-1)};return t.jsx(t.Fragment,{children:b?t.jsx("p",{children:"Loading..."}):t.jsxs(I,{children:[t.jsx(N,{children:t.jsxs(T,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Customer information"]})}),t.jsx(_,{children:Object.keys(r).length>0?t.jsxs(t.Fragment,{children:[t.jsx(x,{children:t.jsx(p,{children:Object.keys(i).length>0&&Object.keys(i).map(e=>t.jsxs(f,{children:[t.jsx(h,{children:u(e)}),i[e]]},e))})}),t.jsx(x,{children:Object.keys(a).length>0&&t.jsx(p,{children:Object.keys(a).map(e=>t.jsxs(f,{children:[t.jsx(h,{children:u(e)}),a[e]]},e))})})]}):t.jsx("p",{children:"Empty data"})}),t.jsx(A,{children:t.jsx(F,{severity:"danger",label:"Go back",onClick:E})})]})})};export{G as default};
