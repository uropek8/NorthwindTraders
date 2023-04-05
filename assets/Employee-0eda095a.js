import{N as T,r,u as I,a as B,b as N,j as e}from"./index-93a83de2.js";import{s}from"./styled-components.browser.esm-ebb0caae.js";import{B as D}from"./axios-1b1c957c.js";import{g as P}from"./index-4e02d69c.js";import{c}from"./string-service-2a9b7982.js";import"./portal.esm-91b13259.js";const _=s.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,A=s.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,Y=s.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,z=s.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,E=s.div`
  flex: 1 0 0%;
  max-width: 50%;
`,g=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,d=s.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,p=s.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,F=s.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,K=s(D)`
  .p-button-label {
    font-weight: 400;
  }
`,M=s(T)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,U=()=>{var y,u;const[t,j]=r.useState({}),[i,b]=r.useState({}),[l,w]=r.useState({}),[v,m]=r.useState(!1),{id:x}=I(),R=B(),L=N(),S=["name","title","titleOfCourtesy","birthDate","hireDate","address","city"],k=["postalCode","country","homePhone","extension","notes"];r.useEffect(()=>{f()},[]),r.useEffect(()=>{f()},[L]),r.useEffect(()=>{C()},[t]);const C=()=>{if(!t)return;const o=h(S),n=h(k);b(o),w(n)},h=o=>!t||!Object.keys(t).length?{}:o.reduce((n,a)=>(t[a]&&(n={...n,[a]:t[a]}),n),{}),f=async()=>{if(x){m(!0);try{const o=await P(x),{employee:n}=o.data;return j(n),Promise.resolve()}catch(o){return Promise.reject(o)}finally{m(!1)}}},O=()=>{R(-1)};return e.jsxs(_,{children:[e.jsx(A,{children:e.jsxs(Y,{children:[e.jsx("i",{className:"pi pi-id-card"}),"Employee information"]})}),e.jsx(z,{children:v?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(g,{children:Object.keys(i).length>0&&Object.keys(i).map(o=>e.jsxs(d,{children:[e.jsx(p,{children:c(o)}),i[o]]},o))})}),e.jsx(E,{children:Object.keys(l).length>0&&e.jsxs(g,{children:[Object.keys(l).map(o=>e.jsxs(d,{children:[e.jsx(p,{children:c(o)}),l[o]]},o)),(t==null?void 0:t.reportsTo)&&Object.keys(t==null?void 0:t.reportsTo).length>0&&e.jsxs(d,{children:[e.jsx(p,{children:c("reportsTo")}),e.jsx(M,{to:`/employee/${(y=t==null?void 0:t.reportsTo)==null?void 0:y.employeeId}`,children:(u=t==null?void 0:t.reportsTo)==null?void 0:u.name})]})]})})]})}),e.jsx(F,{children:e.jsx(K,{severity:"danger",label:"Go back",onClick:O})})]})};export{U as default};
