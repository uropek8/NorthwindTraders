import{r as e,j as o}from"./index-2d9188f0.js";import{D as w,C as y}from"./datatable.esm-09b0dce5.js";import{i as S}from"./axios-23b5252b.js";import{s as p}from"./styled-components.browser.esm-b106199d.js";import"./portal.esm-e964cdb6.js";import"./overlayservice.esm-e70e1c8d.js";const v="/api/products";function I(s){return S.get(v,{params:s})}const L=p.div`
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
`,R=p.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,D=()=>{const[s,u]=e.useState([]),[l,g]=e.useState(0),[h,n]=e.useState(!0),[d,m]=e.useState(1),[f,P]=e.useState(0),c=20,x=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}],b=async()=>{n(!0);try{const a=await I({page:d,limit:c}),{products:r,totalElementsFromDB:i}=a.data;return u(r),g(i),Promise.resolve()}catch(t){return Promise.reject(t)}finally{n(!1)}};e.useEffect(()=>{b()},[d]);const j=t=>{const{first:a,page:r}=t,i=r!==void 0?r+1:1;m(i),P(a)};return o.jsxs(L,{children:[o.jsx(R,{children:"Products"}),o.jsx(w,{first:f,value:s,rows:c,totalRecords:l,loading:h,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:j,children:x.map(t=>o.jsx(y,{field:t.field,header:t.header},t.field))})]})};export{D as default};
