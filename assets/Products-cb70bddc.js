import{N as T,r as o,L as k,j as r}from"./index-ec8740ca.js";import{D as I,C as g}from"./datatable.esm-dd89799d.js";import{a as M}from"./index-3c45a12b.js";import{s as n}from"./styled-components.browser.esm-220c6c9f.js";import"./inputtext.esm-a8d54d50.js";import"./button.esm-ee13bd22.js";import"./overlayservice.esm-00e1c1e9.js";import"./axios-33dc75a8.js";const O=n.div`
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
`,G=()=>{const[i,m]=o.useState([]),[h,f]=o.useState(0),[d,c]=o.useState(!0),[p,x]=o.useState(1),[P,L]=o.useState(0),{metrics:u,updateLogMetrics:y,updateErrorMsg:S}=o.useContext(k),l=20,b=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}];o.useEffect(()=>{j()},[p]);const j=async()=>{c(!0);try{const s=await M({page:p,limit:l}),{products:e,totalElementsFromDB:a,sqlLog:w}=s.data,E=C(w,e.length);return f(a),m(e),q(E),Promise.resolve()}catch(t){const s=t instanceof Error?t.message:String(t);return S(s),Promise.reject(t)}finally{c(!1)}},q=t=>{if(!t.length)return;const e=(u.length?[...t,...u]:[...t]).slice(0,5);y(e)},C=(t,s)=>t.length?t.map(e=>{const a=(e==null?void 0:e.querySqlLog)||"";return{...e,resultsCount:a.includes("select count")?1:s}}):[],N=t=>r.jsx(z,{to:`/product/${t.productId}`,children:t.productName}),v=t=>{const{first:s,page:e}=t,a=e!==void 0?e+1:1;x(a),L(s)};return r.jsx(O,{children:d?r.jsx("p",{children:"Loading..."}):r.jsxs(r.Fragment,{children:[r.jsx(R,{children:"Products"}),r.jsxs(I,{first:P,value:i,rows:l,totalRecords:h,loading:d,paginator:i.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:v,children:[r.jsx(g,{body:N,field:"productName",header:"Name"}),b.map(t=>r.jsx(g,{field:t.field,header:t.header},t.field))]})]})})};export{G as default};
