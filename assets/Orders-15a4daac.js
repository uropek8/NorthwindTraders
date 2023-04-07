import{N as w,r as a,L as M,j as s}from"./index-67b73d2d.js";import{D as N,C as g}from"./datatable.esm-d82f5ade.js";import{a as E,f as R}from"./dayjs-service-b7770826.js";import{s as n}from"./styled-components.browser.esm-1ad48312.js";import"./portal.esm-2d4d4803.js";import"./button.esm-71fee8cd.js";import"./inputtext.esm-c233a954.js";import"./overlayservice.esm-d9eb83b1.js";import"./axios-51d3c6c4.js";const Y=n.div`
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
`,k=n.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,z=n(w)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,J=()=>{const[i,m]=a.useState([]),[f,x]=a.useState(0),[d,p]=a.useState(!0),[c,L]=a.useState(1),[y,C]=a.useState(0),{metrics:l,updateLogMetrics:O}=a.useContext(M),h=20,b=[{field:"totalPrice",header:"Total Price"},{field:"products",header:"Products"},{field:"quantity",header:"Quantity"},{field:"shippedDate",header:"Shipped"},{field:"shipName",header:"Ship Name"},{field:"shipCountry",header:"City"},{field:"shipCity",header:"Country"}];a.useEffect(()=>{j()},[c]);const j=async()=>{p(!0);try{const r=await E({page:c,limit:h}),{orders:t,totalElementsFromDB:o,sqlLog:v}=r.data,u=P(t),T=D(v,u.length);return x(o),m(u),S(T),Promise.resolve()}catch(e){return Promise.reject(e)}finally{p(!1)}},P=e=>e.length?e.map(r=>({...r,shippedDate:R(r.shippedDate,"YYYY-MM-DD")})):[],S=e=>{if(!e.length)return;const t=(l.length?[...e,...l]:[...e]).slice(0,5);O(t)},D=(e,r)=>e.length?e.map(t=>{const o=(t==null?void 0:t.querySqlLog)||"";return{...t,resultsCount:o.includes("select count")?1:r}}):[],q=e=>s.jsx(z,{to:`/order/${e.orderId}`,children:e.orderId}),I=e=>{const{first:r,page:t}=e,o=t!==void 0?t+1:1;L(o),C(r)};return s.jsx(Y,{children:d?s.jsx("p",{children:"Loading..."}):s.jsxs(s.Fragment,{children:[s.jsx(k,{children:"Orders"}),s.jsxs(N,{first:y,value:i,rows:h,totalRecords:f,loading:d,paginator:i.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:I,children:[s.jsx(g,{body:q,header:"Id",field:"orderId"}),b.map(e=>s.jsx(g,{field:e.field,header:e.header},e.field))]})]})})};export{J as default};
