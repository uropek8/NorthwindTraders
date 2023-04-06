import{N as v,r,j as e}from"./index-1a7734d5.js";import{D as L,C as l}from"./datatable.esm-38466a7d.js";import{a as S}from"./index-b17d7d8c.js";import{s as i}from"./styled-components.browser.esm-2626aca1.js";import"./portal.esm-3ee05401.js";import"./axios-0e14d0dd.js";import"./inputtext.esm-f0efeb12.js";import"./overlayservice.esm-bdc69529.js";const w=i.div`
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
`,T=i.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,k=i(v)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,B=()=>{const[u,m]=r.useState([]),[h,g]=r.useState(0),[n,d]=r.useState(!0),[c,f]=r.useState(1),[x,P]=r.useState(0),p=20,b=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}];r.useEffect(()=>{j()},[c]);const j=async()=>{d(!0);try{const a=await S({page:c,limit:p}),{products:o,totalElementsFromDB:s}=a.data;return m(o),g(s),Promise.resolve()}catch(t){return Promise.reject(t)}finally{d(!1)}},y=t=>e.jsx(k,{to:`/product/${t.productId}`,children:t.productName}),N=t=>{const{first:a,page:o}=t,s=o!==void 0?o+1:1;f(s),P(a)};return e.jsx(w,{children:n?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Products"}),e.jsxs(L,{first:x,value:u,rows:p,totalRecords:h,loading:n,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:N,children:[e.jsx(l,{body:y,field:"productName",header:"Name"}),b.map(t=>e.jsx(l,{field:t.field,header:t.header},t.field))]})]})})};export{B as default};
