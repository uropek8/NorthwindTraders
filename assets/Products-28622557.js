import{r as e,j as s}from"./index-92dcf44b.js";import{i as w,D as y,C as S}from"./axios-1508d7d0.js";import{s as p}from"./styled-components.browser.esm-7641b0ea.js";import"./portal.esm-ab572a2e.js";const v="/api/products";function I(a){return w.get(v,{params:a})}const L=p.div`
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
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,k=()=>{const[a,u]=e.useState([]),[l,g]=e.useState(0),[h,n]=e.useState(!0),[d,m]=e.useState(1),[f,P]=e.useState(0),c=20,x=[{field:"productName",header:"Name"},{field:"quantityPerUnit",header:"Qt per unit"},{field:"unitPrice",header:"Price"},{field:"unitsInStock",header:"Stock"},{field:"unitsOnOrder",header:"Orders"}],b=async()=>{n(!0);try{const o=await I({page:d,limit:c}),{products:r,totalElementsFromDB:i}=o.data;return u(r),g(i),Promise.resolve()}catch(t){return Promise.reject(t)}finally{n(!1)}};e.useEffect(()=>{b()},[d]);const j=t=>{const{first:o,page:r}=t,i=r!==void 0?r+1:1;m(i),P(o)};return s.jsxs(L,{children:[s.jsx(R,{children:"Products"}),s.jsx(y,{first:f,value:a,rows:c,totalRecords:l,loading:h,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:j,children:x.map(t=>s.jsx(S,{field:t.field,header:t.header},t.field))})]})};export{k as default};
