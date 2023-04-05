import{N as v,r as e,j as r}from"./index-93a83de2.js";import{D as S,C as p}from"./datatable.esm-1fea457c.js";import{a as w}from"./index-4bf0dc89.js";import{s as i}from"./styled-components.browser.esm-ebb0caae.js";import"./portal.esm-91b13259.js";import"./axios-1b1c957c.js";import"./overlayservice.esm-b2e42028.js";const L=i.div`
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
`,B=()=>{const[l,u]=e.useState([]),[m,h]=e.useState(0),[g,n]=e.useState(!0),[d,f]=e.useState(1),[x,P]=e.useState(0),c=20,b=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}];e.useEffect(()=>{y()},[d]);const y=async()=>{n(!0);try{const a=await w({page:d,limit:c}),{products:o,totalElementsFromDB:s}=a.data;return u(o),h(s),Promise.resolve()}catch(t){return Promise.reject(t)}finally{n(!1)}},j=t=>r.jsx(k,{to:`/product/${t.productId}`,children:t.productName}),N=t=>{const{first:a,page:o}=t,s=o!==void 0?o+1:1;f(s),P(a)};return r.jsxs(L,{children:[r.jsx(T,{children:"Products"}),r.jsxs(S,{first:x,value:l,rows:c,totalRecords:m,loading:g,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:N,children:[r.jsx(p,{body:j,field:"productName",header:"Name"}),b.map(t=>r.jsx(p,{field:t.field,header:t.header},t.field))]})]})};export{B as default};
