import{N as R,r as s,L as k,j as e}from"./index-f53f517b.js";import{D as z,C as i}from"./datatable.esm-acb6857c.js";import{s as n}from"./styled-components.browser.esm-f73fadf9.js";import{a as A}from"./index-febb613b.js";import{g as B}from"./utils-31ec2c7c.js";import"./inputtext.esm-76e24d6b.js";import"./button.esm-cd71c3ca.js";import"./overlayservice.esm-cc75bfa7.js";import"./axios-33dc75a8.js";const D=n.div`
  width: 100%;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        background-color: #d9e2eb;
        white-space: nowrap;
      }
    }

    .p-datatable-tbody {
      tr {
        color: #000;

        td {
          line-height: 24px;
          border: none;
          white-space: nowrap;
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
`,O=n.div`
  display: flex;
`,U=n.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,W=n(R)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,Y=()=>{const[p,h]=s.useState([]),[f,x]=s.useState(0),[c,l]=s.useState(!0),[d,y]=s.useState(1),[S,L]=s.useState(0),{metrics:u,updateLogMetrics:b,updateErrorMsg:j}=s.useContext(k),m=20,C=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];s.useEffect(()=>{v()},[d]);const v=async()=>{l(!0);try{const r=await A({page:d,limit:m}),{supplies:a,totalElementsFromDB:o,sqlLog:I}=r.data,g=w(a),M=T(I,g.length);return x(o),h(g),P(M),Promise.resolve()}catch(t){const r=t instanceof Error?t.message:String(t);return j(r),Promise.reject(t)}finally{l(!1)}},w=t=>t.length?t.map(r=>({...r,contactAvatar:B(r.contactName)})):[],P=t=>{if(!t.length)return;const a=(u.length?[...t,...u]:[...t]).slice(0,5);b(a)},T=(t,r)=>t.length?t.map(a=>{const o=(a==null?void 0:a.querySqlLog)||"";return{...a,resultsCount:o.includes("select count")?1:r}}):[],q=t=>e.jsx(O,{children:e.jsx(U,{src:t.contactAvatar,alt:"avatar"})}),N=t=>e.jsx(W,{to:`/supplier/${t.supplierId}`,children:t.companyName}),E=t=>{const{first:r,page:a}=t,o=a!==void 0?a+1:1;y(o),L(r)};return e.jsx(D,{children:c?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Suppliers"}),e.jsxs(z,{first:S,value:p,rows:m,totalRecords:f,loading:c,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:E,children:[e.jsx(i,{body:q}),e.jsx(i,{body:N,field:"companyName",header:"Company"}),C.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})})};export{Y as default};
