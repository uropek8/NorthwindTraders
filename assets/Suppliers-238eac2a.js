import{N as R,r as s,L as k,j as e}from"./index-67b73d2d.js";import{D as z,C as i}from"./datatable.esm-d82f5ade.js";import{s as n}from"./styled-components.browser.esm-1ad48312.js";import{a as A}from"./index-2ec1eb56.js";import{g as B}from"./utils-dca7bea6.js";import"./portal.esm-2d4d4803.js";import"./button.esm-71fee8cd.js";import"./inputtext.esm-c233a954.js";import"./overlayservice.esm-d9eb83b1.js";import"./axios-51d3c6c4.js";const D=n.div`
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
`,F=n.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,M=n.div`
  display: flex;
`,O=n.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,U=n(R)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,Y=()=>{const[p,h]=s.useState([]),[x,f]=s.useState(0),[c,l]=s.useState(!0),[d,y]=s.useState(1),[S,L]=s.useState(0),{metrics:u,updateLogMetrics:b}=s.useContext(k),m=20,j=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];s.useEffect(()=>{C()},[d]);const C=async()=>{l(!0);try{const a=await A({page:d,limit:m}),{supplies:r,totalElementsFromDB:o,sqlLog:I}=a.data,g=v(r),E=T(I,g.length);return f(o),h(g),P(E),Promise.resolve()}catch(t){return Promise.reject(t)}finally{l(!1)}},v=t=>t.length?t.map(a=>({...a,contactAvatar:B(a.contactName)})):[],P=t=>{if(!t.length)return;const r=(u.length?[...t,...u]:[...t]).slice(0,5);b(r)},T=(t,a)=>t.length?t.map(r=>{const o=(r==null?void 0:r.querySqlLog)||"";return{...r,resultsCount:o.includes("select count")?1:a}}):[],w=t=>e.jsx(M,{children:e.jsx(O,{src:t.contactAvatar,alt:"avatar"})}),q=t=>e.jsx(U,{to:`/supplier/${t.supplierId}`,children:t.companyName}),N=t=>{const{first:a,page:r}=t,o=r!==void 0?r+1:1;y(o),L(a)};return e.jsx(D,{children:c?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Suppliers"}),e.jsxs(z,{first:S,value:p,rows:m,totalRecords:x,loading:c,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:N,children:[e.jsx(i,{body:w}),e.jsx(i,{body:q,field:"companyName",header:"Company"}),j.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})})};export{Y as default};
