import{N as E,r as a,L as M,j as s}from"./index-ec8740ca.js";import{D as N,C as g}from"./datatable.esm-dd89799d.js";import{a as R,f as Y}from"./dayjs-service-49d94ffc.js";import{s as n}from"./styled-components.browser.esm-220c6c9f.js";import"./inputtext.esm-a8d54d50.js";import"./button.esm-ee13bd22.js";import"./overlayservice.esm-00e1c1e9.js";import"./axios-33dc75a8.js";const k=n.div`
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
`,z=n.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,F=n(E)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,J=()=>{const[i,m]=a.useState([]),[f,x]=a.useState(0),[d,p]=a.useState(!0),[c,L]=a.useState(1),[y,C]=a.useState(0),{metrics:l,updateLogMetrics:O,updateErrorMsg:S}=a.useContext(M),h=20,b=[{field:"totalPrice",header:"Total Price"},{field:"products",header:"Products"},{field:"quantity",header:"Quantity"},{field:"shippedDate",header:"Shipped"},{field:"shipName",header:"Ship Name"},{field:"shipCountry",header:"City"},{field:"shipCity",header:"Country"}];a.useEffect(()=>{j()},[c]);const j=async()=>{p(!0);try{const t=await R({page:c,limit:h}),{orders:r,totalElementsFromDB:o,sqlLog:T}=t.data,u=P(r),w=q(T,u.length);return x(o),m(u),D(w),Promise.resolve()}catch(e){const t=e instanceof Error?e.message:String(e);return S(t),Promise.reject(e)}finally{p(!1)}},P=e=>e.length?e.map(t=>({...t,shippedDate:Y(t.shippedDate,"YYYY-MM-DD")})):[],D=e=>{if(!e.length)return;const r=(l.length?[...e,...l]:[...e]).slice(0,5);O(r)},q=(e,t)=>e.length?e.map(r=>{const o=(r==null?void 0:r.querySqlLog)||"";return{...r,resultsCount:o.includes("select count")?1:t}}):[],I=e=>s.jsx(F,{to:`/order/${e.orderId}`,children:e.orderId}),v=e=>{const{first:t,page:r}=e,o=r!==void 0?r+1:1;L(o),C(t)};return s.jsx(k,{children:d?s.jsx("p",{children:"Loading..."}):s.jsxs(s.Fragment,{children:[s.jsx(z,{children:"Orders"}),s.jsxs(N,{first:y,value:i,rows:h,totalRecords:f,loading:d,paginator:i.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:v,children:[s.jsx(g,{body:I,header:"Id",field:"orderId"}),b.map(e=>s.jsx(g,{field:e.field,header:e.header},e.field))]})]})})};export{J as default};
