import{N as R,r as s,L as k,j as e}from"./index-ec8740ca.js";import{D as z,C as i}from"./datatable.esm-dd89799d.js";import{s as n}from"./styled-components.browser.esm-220c6c9f.js";import{a as A}from"./index-9ef98717.js";import{g as B}from"./utils-31ec2c7c.js";import"./inputtext.esm-a8d54d50.js";import"./button.esm-ee13bd22.js";import"./overlayservice.esm-00e1c1e9.js";import"./axios-33dc75a8.js";const D=n.div`
  width: 100%;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        white-space: nowrap;
        background-color: #d9e2eb;
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
`,Y=()=>{const[c,h]=s.useState([]),[x,f]=s.useState(0),[p,d]=s.useState(!0),[m,C]=s.useState(1),[y,L]=s.useState(0),{metrics:l,updateLogMetrics:b,updateErrorMsg:j}=s.useContext(k),u=20,v=[{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];s.useEffect(()=>{w()},[m]);const w=async()=>{d(!0);try{const r=await A({page:m,limit:u}),{customers:a,totalElementsFromDB:o,sqlLog:I}=r.data,g=S(a),M=T(I,g.length);return f(o),h(g),P(M),Promise.resolve()}catch(t){const r=t instanceof Error?t.message:String(t);return j(r),Promise.reject(t)}finally{d(!1)}},S=t=>t.length?t.map(r=>({...r,contactAvatar:B(r.contactName)})):[],P=t=>{if(!t.length)return;const a=(l.length?[...t,...l]:[...t]).slice(0,5);b(a)},T=(t,r)=>t.length?t.map(a=>{const o=(a==null?void 0:a.querySqlLog)||"";return{...a,resultsCount:o.includes("select count")?1:r}}):[],q=t=>e.jsx(O,{children:e.jsx(U,{src:t.contactAvatar,alt:"avatar"})}),N=t=>e.jsx(W,{to:`/customer/${t.customerId}`,children:t.companyName}),E=t=>{const{first:r,page:a}=t,o=a!==void 0?a+1:1;C(o),L(r)};return e.jsx(D,{children:p?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Customers"}),e.jsxs(z,{first:y,value:c,rows:u,totalRecords:x,loading:p,paginator:c.length>0,size:"small",lazy:!0,scrollable:!0,stripedRows:!0,onPage:E,children:[e.jsx(i,{body:q}),e.jsx(i,{body:N,field:"companyName",header:"Company"}),v.map(t=>e.jsx(i,{field:t.field,header:t.header},t.field))]})]})})};export{Y as default};
