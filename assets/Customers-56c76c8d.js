import{N,r,j as e}from"./index-be2f80e1.js";import{D as L,C as i}from"./datatable.esm-88ec022d.js";import{s as o}from"./styled-components.browser.esm-ba6426bd.js";import{a as R}from"./index-9ef98717.js";import"./portal.esm-1d4f48d1.js";import"./button.esm-19018f20.js";import"./inputtext.esm-3fec787d.js";import"./overlayservice.esm-d7dc5664.js";import"./axios-33dc75a8.js";const S=o.div`
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

    .p-datatable-emptymessage {
      td {
        text-align: center;
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
`,B=o(N)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,W=()=>{const[c,u]=r.useState([]),[g,h]=r.useState(0),[p,m]=r.useState(!0),[d,x]=r.useState(1),[f,C]=r.useState(0),l=20,y="https://avatars.dicebear.com/v2/initials/",b=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];r.useEffect(()=>{P()},[d]);const v=t=>t.length?t.map(a=>({...a,contactAvatar:j(a.contactName)})):[],j=t=>{const a=encodeURIComponent(t);return`${y}${a}.svg`},P=async()=>{m(!0);try{const a=await R({page:d,limit:l}),{customers:s,totalElementsFromDB:n}=a.data,I=v(s);return u(I),h(n),Promise.resolve()}catch(t){return Promise.reject(t)}finally{m(!1)}},T=t=>e.jsx(k,{children:e.jsx(z,{src:t.contactAvatar,alt:"avatar"})}),w=t=>e.jsx(B,{to:`/customer/${t.customerId}`,children:t.companyName}),A=t=>{const{first:a,page:s}=t,n=s!==void 0?s+1:1;x(n),C(a)};return e.jsx(S,{children:p?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:"Customers"}),e.jsxs(L,{first:f,value:c,rows:l,totalRecords:g,loading:p,paginator:c.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:A,children:[e.jsx(i,{body:T}),e.jsx(i,{body:w,field:"companyName",header:"Company"}),b.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})})};export{W as default};
