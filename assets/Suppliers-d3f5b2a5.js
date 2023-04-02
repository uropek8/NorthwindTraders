import{N as A,r,j as a}from"./index-6329a751.js";import{D as R,C as i}from"./datatable.esm-d3c050ec.js";import{a as L}from"./index-18485a54.js";import{s as o}from"./styled-components.browser.esm-cbd7876a.js";import"./portal.esm-5692bc9d.js";import"./axios-7917a497.js";import"./overlayservice.esm-0d42f894.js";const B=o.div`
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

    &.p-paginator-bottom {
      border-width: 0;
    }
  }
`,E=o.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,k=o.div`
  display: flex;
`,z=o.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,D=o(A)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,V=()=>{const[p,m]=r.useState([]),[u,h]=r.useState(0),[g,c]=r.useState(!0),[l,x]=r.useState(1),[f,y]=r.useState(0),d=20,v="https://avatars.dicebear.com/v2/initials/",b=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];r.useEffect(()=>{j()},[l]);const S=t=>t.length?t.map(e=>({...e,contactAvatar:C(e.contactName)})):[],C=t=>{const e=encodeURIComponent(t);return`${v}${e}.svg`},j=async()=>{c(!0);try{const e=await L({page:l,limit:d}),{supplies:s,totalElementsFromDB:n}=e.data,N=S(s);return m(N),h(n),Promise.resolve()}catch(t){return Promise.reject(t)}finally{c(!1)}},P=t=>a.jsx(k,{children:a.jsx(z,{src:t.contactAvatar,alt:"avatar"})}),T=t=>{const e=w(t.companyName)+1;return a.jsx(D,{to:`/supplier/${e}`,children:t.companyName})},w=t=>p.findIndex(e=>e.companyName===t),I=t=>{const{first:e,page:s}=t,n=s!==void 0?s+1:1;x(n),y(e)};return a.jsxs(B,{children:[a.jsx(E,{children:"Suppliers"}),a.jsxs(R,{first:f,value:p,rows:d,totalRecords:u,loading:g,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:I,children:[a.jsx(i,{body:P}),a.jsx(i,{body:T,field:"companyName",header:"Company"}),b.map(t=>a.jsx(i,{field:t.field,header:t.header},t.field))]})]})};export{V as default};
