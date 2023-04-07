import{N as k,r as s,L as z,j as e}from"./index-2b51ce5e.js";import{D as B,C as i}from"./datatable.esm-e5b4003a.js";import{s as n}from"./styled-components.browser.esm-21c048a6.js";import{a as D}from"./index-2ec1eb56.js";import"./portal.esm-43ba1eb8.js";import"./button.esm-16c5dd9d.js";import"./inputtext.esm-34d2ec30.js";import"./overlayservice.esm-d2cdb68a.js";import"./axios-51d3c6c4.js";const F=n.div`
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
`,M=n.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,_=n.div`
  display: flex;
`,$=n.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,U=n(k)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`,Y=()=>{const[p,h]=s.useState([]),[x,f]=s.useState(0),[c,l]=s.useState(!0),[d,y]=s.useState(1),[S,v]=s.useState(0),{metrics:u,updateLogMetrics:L}=s.useContext(z),m=20,b="https://avatars.dicebear.com/v2/initials/",C=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];s.useEffect(()=>{A()},[d]);const j=t=>t.length?t.map(r=>({...r,contactAvatar:P(r.contactName)})):[],P=t=>{const r=encodeURIComponent(t);return`${b}${r}.svg`},T=t=>{if(!t.length)return;const a=(u.length?[...t,...u]:[...t]).slice(0,5);L(a)},w=(t,r)=>t.length?t.map(a=>{const o=(a==null?void 0:a.querySqlLog)||"";return{...a,resultsCount:o.includes("select count")?1:r}}):[],A=async()=>{l(!0);try{const r=await D({page:d,limit:m}),{supplies:a,totalElementsFromDB:o,sqlLog:R}=r.data,g=j(a),E=w(R,g.length);return f(o),h(g),T(E),Promise.resolve()}catch(t){return Promise.reject(t)}finally{l(!1)}},I=t=>e.jsx(_,{children:e.jsx($,{src:t.contactAvatar,alt:"avatar"})}),q=t=>e.jsx(U,{to:`/supplier/${t.supplierId}`,children:t.companyName}),N=t=>{const{first:r,page:a}=t,o=a!==void 0?a+1:1;y(o),v(r)};return e.jsx(F,{children:c?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:"Suppliers"}),e.jsxs(B,{first:S,value:p,rows:m,totalRecords:x,loading:c,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:N,children:[e.jsx(i,{body:I}),e.jsx(i,{body:q,field:"companyName",header:"Company"}),C.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})})};export{Y as default};
