import{N,r as n,u as E,a as Y,j as r}from"./index-fcfa5190.js";import{D as B,C as x}from"./datatable.esm-70b45ae5.js";import{s as t}from"./styled-components.browser.esm-e493d7d8.js";import{B as _}from"./axios-3b96f80d.js";import{g as q,f as z}from"./dayjs-service-346fc9fe.js";import{c as l}from"./string-service-2a9b7982.js";import"./portal.esm-e4fd173d.js";import"./overlayservice.esm-e35ff7f2.js";const K=t.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`,R=t.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`,A=t.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`,M=t.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`,f=t.div`
  flex: 1 0 0%;
  max-width: 50%;
`,m=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`,c=t.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`,p=t.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`,W=t.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`,$=t(_)`
  .p-button-label {
    font-weight: 400;
  }
`,g=t(N)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,F=t.div`
  width: 100%;
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;

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
`,G=t.h5`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
`,re=()=>{const[i,b]=n.useState(null),[a,j]=n.useState([]),[O,u]=n.useState(!1),{id:h}=E(),v=Y(),D=["freight","shipVia","shipName","quantity","products","customerId","totalPrice"],P=["shipCity","orderDate","shipRegion","shippedDate","shipCountry","requiredDate","shipPostalCode"],y=["orderDate","shippedDate","requiredDate"],I=[{field:"productName",header:"Product"},{field:"quantity",header:"Quantity"},{field:"unitPrice",header:"Order Price"},{field:"totalPrice",header:"Total Price"},{field:"discount",header:"Discount"}];n.useEffect(()=>{S()},[]);const S=async()=>{if(h){u(!0);try{const e=await q(h),{order:s,products:o}=e.data,d=T(s);return b(d),j(o),Promise.resolve()}catch(e){return Promise.reject(e)}finally{u(!1)}}},T=e=>{const s=Object.keys(e).reduce((o,d)=>{const L=y.includes(d)?z(e[d],"YYYY-MM-DD"):e[d];return o={...o,[d]:L},o},{});return Object.keys(s).length?s:null},C=e=>r.jsx(g,{to:`/product/${e.productId}`,children:e.productName}),w=()=>{v(-1)};return r.jsxs(K,{children:[r.jsx(R,{children:r.jsxs(A,{children:[r.jsx("i",{className:"pi pi-id-card"}),"Supplier information"]})}),r.jsxs(M,{children:[O&&r.jsx("p",{children:"Loading..."}),r.jsx(f,{children:r.jsx(m,{children:i&&Object.keys(i).map(e=>{if(!D.includes(e)||i[e]===void 0)return null;if(e==="supplier")return r.jsxs(c,{children:[r.jsx(p,{children:l(e)}),r.jsx(g,{to:`/customer/${i.customerId}`,children:i[e]})]},e);const s=["quantity","products"].includes(e)?"Total ":"";return r.jsxs(c,{children:[r.jsxs(p,{children:[s,l(e)]}),i[e]]},e)})})}),r.jsx(f,{children:r.jsx(m,{children:i&&Object.keys(i).map(e=>!P.includes(e)||i[e]===void 0?null:r.jsxs(c,{children:[r.jsx(p,{children:l(e)}),i[e]]},e))})})]}),a.length>0&&r.jsxs(F,{children:[r.jsx(G,{children:"Products in Order"}),r.jsxs(B,{value:a,rows:a.length,size:"small",lazy:!0,stripedRows:!0,children:[r.jsx(x,{body:C,header:"Id",field:"orderId"}),I.map(e=>r.jsx(x,{field:e.field,header:e.header},e.field))]})]}),r.jsx(W,{children:r.jsx($,{severity:"danger",label:"Go back",onClick:w})})]})};export{re as default};
