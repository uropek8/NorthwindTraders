import{N as T,r as o,L as k,j as r}from"./index-f53f517b.js";import{D as I,C as g}from"./datatable.esm-acb6857c.js";import{a as M}from"./index-3c45a12b.js";import{s as n}from"./styled-components.browser.esm-f73fadf9.js";import"./inputtext.esm-76e24d6b.js";import"./button.esm-cd71c3ca.js";import"./overlayservice.esm-cc75bfa7.js";import"./axios-33dc75a8.js";const O=n.div`
  width: 100%;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        background-color: #d9e2eb;
        white-space: nowrap;
      }
    }

    .p-datatable-tbody {
      tr {
        color: #000;

        td {
          line-height: 24px;
          border: none;
          white-space: nowrap;
        }
      }
    }
  }

  .p-paginator {
    .p-paginator-pages {
      .p-paginator-page {
        min-width: 40px;
        height: 40px;
      }
    }

    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-next,
    .p-paginator-last {
      min-width: 40px;
      height: 40px;
    }
  }
`,R=n.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,z=n(T)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,G=()=>{const[i,h]=o.useState([]),[m,f]=o.useState(0),[c,d]=o.useState(!0),[p,x]=o.useState(1),[P,L]=o.useState(0),{metrics:u,updateLogMetrics:y,updateErrorMsg:S}=o.useContext(k),l=20,b=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}];o.useEffect(()=>{j()},[p]);const j=async()=>{d(!0);try{const s=await M({page:p,limit:l}),{products:e,totalElementsFromDB:a,sqlLog:v}=s.data,E=q(v,e.length);return f(a),h(e),w(E),Promise.resolve()}catch(t){const s=t instanceof Error?t.message:String(t);return S(s),Promise.reject(t)}finally{d(!1)}},w=t=>{if(!t.length)return;const e=(u.length?[...t,...u]:[...t]).slice(0,5);y(e)},q=(t,s)=>t.length?t.map(e=>{const a=(e==null?void 0:e.querySqlLog)||"";return{...e,resultsCount:a.includes("select count")?1:s}}):[],C=t=>r.jsx(z,{to:`/product/${t.productId}`,children:t.productName}),N=t=>{const{first:s,page:e}=t,a=e!==void 0?e+1:1;x(a),L(s)};return r.jsx(O,{children:c?r.jsx("p",{children:"Loading..."}):r.jsxs(r.Fragment,{children:[r.jsx(R,{children:"Products"}),r.jsxs(I,{first:P,value:i,rows:l,totalRecords:m,loading:c,paginator:i.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:N,children:[r.jsx(g,{body:C,field:"productName",header:"Name"}),b.map(t=>r.jsx(g,{field:t.field,header:t.header},t.field))]})]})})};export{G as default};
