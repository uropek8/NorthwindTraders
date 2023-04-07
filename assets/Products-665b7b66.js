import{N as T,r as o,L as k,j as r}from"./index-2b51ce5e.js";import{D as I,C as m}from"./datatable.esm-e5b4003a.js";import{a as E}from"./index-ce4af1c9.js";import{s as n}from"./styled-components.browser.esm-21c048a6.js";import"./portal.esm-43ba1eb8.js";import"./button.esm-16c5dd9d.js";import"./inputtext.esm-34d2ec30.js";import"./overlayservice.esm-d2cdb68a.js";import"./axios-51d3c6c4.js";const O=n.div`
  width: 100%;

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
`,G=()=>{const[i,g]=o.useState([]),[h,f]=o.useState(0),[d,c]=o.useState(!0),[p,x]=o.useState(1),[P,L]=o.useState(0),{metrics:u,updateLogMetrics:y}=o.useContext(k),l=20,b=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}];o.useEffect(()=>{j()},[p]);const j=async()=>{c(!0);try{const s=await E({page:p,limit:l}),{products:e,totalElementsFromDB:a,sqlLog:v}=s.data,w=q(v,e.length);return f(a),g(e),S(w),Promise.resolve()}catch(t){return Promise.reject(t)}finally{c(!1)}},S=t=>{if(!t.length)return;const e=(u.length?[...t,...u]:[...t]).slice(0,5);y(e)},q=(t,s)=>t.length?t.map(e=>{const a=(e==null?void 0:e.querySqlLog)||"";return{...e,resultsCount:a.includes("select count")?1:s}}):[],C=t=>r.jsx(z,{to:`/product/${t.productId}`,children:t.productName}),N=t=>{const{first:s,page:e}=t,a=e!==void 0?e+1:1;x(a),L(s)};return r.jsx(O,{children:d?r.jsx("p",{children:"Loading..."}):r.jsxs(r.Fragment,{children:[r.jsx(R,{children:"Products"}),r.jsxs(I,{first:P,value:i,rows:l,totalRecords:h,loading:d,paginator:i.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:N,children:[r.jsx(m,{body:C,field:"productName",header:"Name"}),b.map(t=>r.jsx(m,{field:t.field,header:t.header},t.field))]})]})})};export{G as default};
