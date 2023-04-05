import{N as I,r,j as e}from"./index-b83ad5a6.js";import{D as N,C as i}from"./datatable.esm-5200311d.js";import{a as R}from"./index-37df7b3b.js";import{s as o}from"./styled-components.browser.esm-5984686f.js";import"./portal.esm-9e148423.js";import"./axios-69c48f3a.js";import"./overlayservice.esm-528c6c98.js";const L=o.div`
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
`,B=o(I)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,O=()=>{const[d,m]=r.useState([]),[u,h]=r.useState(0),[g,p]=r.useState(!0),[l,f]=r.useState(1),[x,y]=r.useState(0),c=20,v="https://avatars.dicebear.com/v2/initials/",b=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];r.useEffect(()=>{C()},[l]);const S=t=>t.length?t.map(a=>({...a,contactAvatar:j(a.contactName)})):[],j=t=>{const a=encodeURIComponent(t);return`${v}${a}.svg`},C=async()=>{p(!0);try{const a=await R({page:l,limit:c}),{supplies:s,totalElementsFromDB:n}=a.data,A=S(s);return m(A),h(n),Promise.resolve()}catch(t){return Promise.reject(t)}finally{p(!1)}},P=t=>e.jsx(k,{children:e.jsx(z,{src:t.contactAvatar,alt:"avatar"})}),T=t=>e.jsx(B,{to:`/supplier/${t.supplierId}`,children:t.companyName}),w=t=>{const{first:a,page:s}=t,n=s!==void 0?s+1:1;f(n),y(a)};return e.jsxs(L,{children:[e.jsx(E,{children:"Suppliers"}),e.jsxs(N,{first:x,value:d,rows:c,totalRecords:u,loading:g,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:w,children:[e.jsx(i,{body:P}),e.jsx(i,{body:T,field:"companyName",header:"Company"}),b.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})};export{O as default};
