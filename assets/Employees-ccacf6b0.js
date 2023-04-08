import{N as R,r as o,L as k,j as t}from"./index-f53f517b.js";import{D as z,C as i}from"./datatable.esm-acb6857c.js";import{s as n}from"./styled-components.browser.esm-f73fadf9.js";import{a as A}from"./index-86cad9a2.js";import{g as B}from"./utils-31ec2c7c.js";import"./inputtext.esm-76e24d6b.js";import"./button.esm-cd71c3ca.js";import"./overlayservice.esm-cc75bfa7.js";import"./axios-33dc75a8.js";const D=n.div`
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
`,Y=()=>{const[p,u]=o.useState([]),[y,x]=o.useState(0),[l,c]=o.useState(!0),[d,f]=o.useState(1),[L,E]=o.useState(0),{metrics:m,updateLogMetrics:b,updateErrorMsg:j}=o.useContext(k),g=20,v=[{field:"title",header:"Title"},{field:"city",header:"City"},{field:"homePhone",header:"Phone"},{field:"country",header:"Country"}];o.useEffect(()=>{w()},[d]);const w=async()=>{c(!0);try{const a=await A({page:d,limit:g}),{employees:r,totalElementsFromDB:s,sqlLog:M}=a.data,h=C(r),N=S(M,h.length);return x(s),u(h),P(N),Promise.resolve()}catch(e){const a=e instanceof Error?e.message:String(e);return j(a),Promise.reject(e)}finally{c(!1)}},C=e=>e.length?e.map(a=>({...a,contactAvatar:B(a.name)})):[],P=e=>{if(!e.length)return;const r=(m.length?[...e,...m]:[...e]).slice(0,5);b(r)},S=(e,a)=>e.length?e.map(r=>{const s=(r==null?void 0:r.querySqlLog)||"";return{...r,resultsCount:s.includes("select count")?1:a}}):[],T=e=>t.jsx(O,{children:t.jsx(U,{src:e.contactAvatar,alt:"avatar"})}),q=e=>t.jsx(W,{to:`/employee/${e.employeeId}`,children:e.name}),I=e=>{const{first:a,page:r}=e,s=r!==void 0?r+1:1;f(s),E(a)};return t.jsx(D,{children:l?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Employees"}),t.jsxs(z,{first:L,value:p,rows:g,totalRecords:y,loading:l,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:I,children:[t.jsx(i,{body:T}),t.jsx(i,{body:q,field:"name",header:"Name"}),v.map(e=>t.jsx(i,{field:e.field,header:e.header},e.field))]})]})})};export{Y as default};
