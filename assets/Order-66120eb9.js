import{N as X,r as i,L as G,e as H,f as Q,j as t}from"./index-ec8740ca.js";import{D as U,C as b}from"./datatable.esm-dd89799d.js";import{s as o}from"./styled-components.browser.esm-220c6c9f.js";import{B as V}from"./button.esm-ee13bd22.js";import{g as k,f as J}from"./dayjs-service-49d94ffc.js";import{c as l}from"./string-service-2a9b7982.js";import"./inputtext.esm-a8d54d50.js";import"./overlayservice.esm-00e1c1e9.js";import"./axios-33dc75a8.js";const Z=o.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,ee=o.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,te=o.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,re=o.div`
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
`,se=o.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,oe=o(V)`
  .p-button-label {
    font-weight: 400;
  }
`,S=o(X)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,ne=o.div`
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
`,ie=o.h5`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
`,fe=()=>{const[n,C]=i.useState({}),[a,y]=i.useState([]),[w,h]=i.useState(!1),[x,D]=i.useState({}),[m,P]=i.useState({}),{metrics:f,updateLogMetrics:I,updateErrorMsg:R}=i.useContext(G),{id:g}=H(),v=Q(),E=["customerId","shipName","products","quantity","totalPrice","shipVia","freight"],T=["orderDate","requiredDate","shippedDate","shipCity","shipRegion","shipPostalCode","shipCountry"],q=["quantity","products"],N=["totalPrice","freight"],_=["orderDate","shippedDate","requiredDate"],B=[{field:"productName",header:"Product"},{field:"quantity",header:"Quantity"},{field:"unitPrice",header:"Order Price"},{field:"totalPrice",header:"Total Price"},{field:"discount",header:"Discount"}];i.useEffect(()=>{Y()},[]),i.useEffect(()=>{M()},[n]);const Y=async()=>{if(g){h(!0);try{const e=await k(g),{order:r,products:s,sqlLog:d}=e.data,c=F(r),W=A(d,1);return C(c),y(s),z(W),Promise.resolve()}catch(e){const r=e instanceof Error?e.message:String(e);return R(r),Promise.reject(e)}finally{h(!1)}}},M=()=>{if(!n)return;const e=j(E),r=j(T);D(e),P(r)},j=e=>e.reduce((r,s)=>(n[s]&&(r={...r,[s]:n[s]}),r),{}),z=e=>{if(!e.length)return;const s=(f.length?[...e,...f]:[...e]).slice(0,5);I(s)},A=(e,r)=>e.length?e.map(s=>{const d=(s==null?void 0:s.querySqlLog)||"";return{...s,resultsCount:d.includes("select count")?1:r}}):[],F=e=>Object.keys(e).reduce((r,s)=>{const c=_.includes(s)?J(e[s],"YYYY-MM-DD"):e[s];return r={...r,[s]:c},r},{}),K=e=>t.jsx(S,{to:`/product/${e.productId}`,children:e.productName}),$=()=>{v(-1)};return t.jsx(t.Fragment,{children:w?t.jsx("p",{children:"Loading..."}):t.jsxs(Z,{children:[t.jsx(ee,{children:t.jsxs(te,{children:[t.jsx("i",{className:"pi pi-id-card"}),"Order information"]})}),t.jsx(re,{children:Object.keys(n).length>0&&t.jsxs(t.Fragment,{children:[t.jsx(O,{children:t.jsx(L,{children:Object.keys(x).length>0&&Object.keys(x).map(e=>e==="customerId"?t.jsxs(p,{children:[t.jsx(u,{children:l(e)}),t.jsx(S,{to:`/customer/${n[e]}`,children:n[e]})]},e):t.jsxs(p,{children:[t.jsxs(u,{children:[q.includes(e)?"Total ":"",l(e)]}),N.includes(e)?"$":"",n[e]]},e))})}),t.jsx(O,{children:t.jsx(L,{children:Object.keys(m).length>0&&Object.keys(m).map(e=>t.jsxs(p,{children:[t.jsx(u,{children:l(e)}),n[e]]},e))})})]})}),a.length>0&&t.jsxs(ne,{children:[t.jsx(ie,{children:"Products in Order"}),t.jsxs(U,{value:a,rows:a.length,size:"small",lazy:!0,stripedRows:!0,children:[t.jsx(b,{body:K,header:"Id",field:"orderId"}),B.map(e=>t.jsx(b,{field:e.field,header:e.header},e.field))]})]}),t.jsx(se,{children:t.jsx(oe,{severity:"danger",label:"Go back",onClick:$})})]})})};export{fe as default};
