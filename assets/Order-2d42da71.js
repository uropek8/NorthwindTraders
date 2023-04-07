import{N as W,r as i,L as X,u as G,a as H,j as t}from"./index-67b73d2d.js";import{D as Q,C as b}from"./datatable.esm-d82f5ade.js";import{s as o}from"./styled-components.browser.esm-1ad48312.js";import{B as U}from"./button.esm-71fee8cd.js";import{g as V,f as k}from"./dayjs-service-b7770826.js";import{c as l}from"./string-service-2a9b7982.js";import"./portal.esm-2d4d4803.js";import"./inputtext.esm-c233a954.js";import"./overlayservice.esm-d9eb83b1.js";import"./axios-51d3c6c4.js";const J=o.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,Z=o.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,ee=o.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,te=o.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,O=o.div`
  flex: 1 0 0%;
  max-width: 50%;
`,L=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,p=o.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,u=o.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,re=o.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,se=o(U)`
  .p-button-label {
    font-weight: 400;
  }
`,S=o(W)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,oe=o.div`
  width: 100%;
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        background-color: #d9e2eb;
      }
    }

    .p-datatable-tbody {
      tr {
        color: #000;

        td {
          line-height: 24px;
          border: none;
        }
      }
    }
  }
`,ne=o.h5`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
`,fe=()=>{const[n,C]=i.useState({}),[a,y]=i.useState([]),[w,h]=i.useState(!1),[x,D]=i.useState({}),[m,P]=i.useState({}),{metrics:f,updateLogMetrics:I}=i.useContext(X),{id:g}=G(),R=H(),v=["customerId","shipName","products","quantity","totalPrice","shipVia","freight"],E=["orderDate","requiredDate","shippedDate","shipCity","shipRegion","shipPostalCode","shipCountry"],T=["quantity","products"],q=["totalPrice","freight"],N=["orderDate","shippedDate","requiredDate"],_=[{field:"productName",header:"Product"},{field:"quantity",header:"Quantity"},{field:"unitPrice",header:"Order Price"},{field:"totalPrice",header:"Total Price"},{field:"discount",header:"Discount"}];i.useEffect(()=>{B()},[]),i.useEffect(()=>{Y()},[n]);const B=async()=>{if(g){h(!0);try{const e=await V(g),{order:s,products:r,sqlLog:d}=e.data,c=A(s),$=z(d,1);return C(c),y(r),M($),Promise.resolve()}catch(e){return Promise.reject(e)}finally{h(!1)}}},Y=()=>{if(!n)return;const e=j(v),s=j(E);D(e),P(s)},j=e=>e.reduce((s,r)=>(n[r]&&(s={...s,[r]:n[r]}),s),{}),M=e=>{if(!e.length)return;const r=(f.length?[...e,...f]:[...e]).slice(0,5);I(r)},z=(e,s)=>e.length?e.map(r=>{const d=(r==null?void 0:r.querySqlLog)||"";return{...r,resultsCount:d.includes("select count")?1:s}}):[],A=e=>Object.keys(e).reduce((s,r)=>{const c=N.includes(r)?k(e[r],"YYYY-MM-DD"):e[r];return s={...s,[r]:c},s},{}),F=e=>t.jsx(S,{to:`/product/${e.productId}`,children:e.productName}),K=()=>{R(-1)};return t.jsx(t.Fragment,{children:w?t.jsx("p",{children:"Loading..."}):t.jsxs(J,{children:[t.jsx(Z,{children:t.jsxs(ee,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Order information"]})}),t.jsx(te,{children:Object.keys(n).length>0&&t.jsxs(t.Fragment,{children:[t.jsx(O,{children:t.jsx(L,{children:Object.keys(x).length>0&&Object.keys(x).map(e=>e==="customerId"?t.jsxs(p,{children:[t.jsx(u,{children:l(e)}),t.jsx(S,{to:`/customer/${n[e]}`,children:n[e]})]},e):t.jsxs(p,{children:[t.jsxs(u,{children:[T.includes(e)?"Total ":"",l(e)]}),q.includes(e)?"$":"",n[e]]},e))})}),t.jsx(O,{children:t.jsx(L,{children:Object.keys(m).length>0&&Object.keys(m).map(e=>t.jsxs(p,{children:[t.jsx(u,{children:l(e)}),n[e]]},e))})})]})}),a.length>0&&t.jsxs(oe,{children:[t.jsx(ne,{children:"Products in Order"}),t.jsxs(Q,{value:a,rows:a.length,size:"small",lazy:!0,stripedRows:!0,children:[t.jsx(b,{body:F,header:"Id",field:"orderId"}),_.map(e=>t.jsx(b,{field:e.field,header:e.header},e.field))]})]}),t.jsx(re,{children:t.jsx(se,{severity:"danger",label:"Go back",onClick:K})})]})})};export{fe as default};
