import{N as I,r,j as a}from"./index-93a83de2.js";import{D as v,C as l}from"./datatable.esm-1fea457c.js";import{a as S,f as T}from"./dayjs-service-197eeca9.js";import{s as i}from"./styled-components.browser.esm-ebb0caae.js";import"./portal.esm-91b13259.js";import"./axios-1b1c957c.js";import"./overlayservice.esm-b2e42028.js";const w=i.div`
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
`,L=i.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,N=i(I)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,F=()=>{const[c,h]=r.useState([]),[m,u]=r.useState(0),[g,d]=r.useState(!0),[n,f]=r.useState(1),[x,y]=r.useState(0),p=20,O=[{field:"totalPrice",header:"Total Price"},{field:"products",header:"Products"},{field:"quantity",header:"Quantity"},{field:"shippedDate",header:"Shipped"},{field:"shipName",header:"Ship Name"},{field:"shipCountry",header:"City"},{field:"shipCity",header:"Country"}];r.useEffect(()=>{P()},[n]);const b=e=>e.length?e.map(t=>({...t,shippedDate:T(t.shippedDate,"YYYY-MM-DD")})):[],P=async()=>{d(!0);try{const t=await S({page:n,limit:p}),{orders:s,totalElementsFromDB:o}=t.data,D=b(s);return h(D),u(o),Promise.resolve()}catch(e){return Promise.reject(e)}finally{d(!1)}},j=e=>a.jsx(N,{to:`/order/${e.orderId}`,children:e.orderId}),C=e=>{const{first:t,page:s}=e,o=s!==void 0?s+1:1;f(o),y(t)};return a.jsxs(w,{children:[a.jsx(L,{children:"Orders"}),a.jsxs(v,{first:x,value:c,rows:p,totalRecords:m,loading:g,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:C,children:[a.jsx(l,{body:j,header:"Id",field:"orderId"}),O.map(e=>a.jsx(l,{field:e.field,header:e.header},e.field))]})]})};export{F as default};
