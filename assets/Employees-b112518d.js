import{N as I,r as o,j as t}from"./index-2b51ce5e.js";import{D as R,C as i}from"./datatable.esm-e5b4003a.js";import{s as r}from"./styled-components.browser.esm-21c048a6.js";import{a as L}from"./index-36dfa09e.js";import"./portal.esm-43ba1eb8.js";import"./button.esm-16c5dd9d.js";import"./inputtext.esm-34d2ec30.js";import"./overlayservice.esm-d2cdb68a.js";import"./axios-51d3c6c4.js";const S=r.div`
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
`,N=r.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,k=r.div`
  display: flex;
`,z=r.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,B=r(I)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,W=()=>{const[p,c]=o.useState([]),[h,g]=o.useState(0),[u,l]=o.useState(!0),[d,y]=o.useState(1),[x,f]=o.useState(0),m=20,b="https://avatars.dicebear.com/v2/initials/",v=[{field:"title",header:"Title"},{field:"city",header:"City"},{field:"homePhone",header:"Phone"},{field:"country",header:"Country"}];o.useEffect(()=>{j()},[d]);const E=e=>e.length?e.map(a=>({...a,contactAvatar:P(a.name)})):[],P=e=>{const a=encodeURIComponent(e);return`${b}${a}.svg`},j=async()=>{l(!0);try{const a=await L({page:d,limit:m}),{employees:s,totalElementsFromDB:n}=a.data,A=E(s);return c(A),g(n),Promise.resolve()}catch(e){return Promise.reject(e)}finally{l(!1)}},C=e=>t.jsx(k,{children:t.jsx(z,{src:e.contactAvatar,alt:"avatar"})}),T=e=>t.jsx(B,{to:`/employee/${e.employeeId}`,children:e.name}),w=e=>{const{first:a,page:s}=e,n=s!==void 0?s+1:1;y(n),f(a)};return t.jsxs(S,{children:[t.jsx(N,{children:"Employees"}),t.jsxs(R,{first:x,value:p,rows:m,totalRecords:h,loading:u,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:w,children:[t.jsx(i,{body:C}),t.jsx(i,{body:T,field:"name",header:"Name"}),v.map(e=>t.jsx(i,{field:e.field,header:e.header},e.field))]})]})};export{W as default};
