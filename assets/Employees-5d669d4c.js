import{N as R,r as o,L as k,j as t}from"./index-67b73d2d.js";import{D as z,C as i}from"./datatable.esm-d82f5ade.js";import{s as n}from"./styled-components.browser.esm-1ad48312.js";import{a as A}from"./index-36dfa09e.js";import{g as B}from"./utils-dca7bea6.js";import"./portal.esm-2d4d4803.js";import"./button.esm-71fee8cd.js";import"./inputtext.esm-c233a954.js";import"./overlayservice.esm-d9eb83b1.js";import"./axios-51d3c6c4.js";const D=n.div`
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
`,Y=()=>{const[p,u]=o.useState([]),[y,x]=o.useState(0),[l,d]=o.useState(!0),[c,f]=o.useState(1),[L,b]=o.useState(0),{metrics:m,updateLogMetrics:E}=o.useContext(k),g=20,j=[{field:"title",header:"Title"},{field:"city",header:"City"},{field:"homePhone",header:"Phone"},{field:"country",header:"Country"}];o.useEffect(()=>{v()},[c]);const v=async()=>{d(!0);try{const r=await A({page:c,limit:g}),{employees:a,totalElementsFromDB:s,sqlLog:I}=r.data,h=C(a),N=S(I,h.length);return x(s),u(h),P(N),Promise.resolve()}catch(e){return Promise.reject(e)}finally{d(!1)}},C=e=>e.length?e.map(r=>({...r,contactAvatar:B(r.name)})):[],P=e=>{if(!e.length)return;const a=(m.length?[...e,...m]:[...e]).slice(0,5);E(a)},S=(e,r)=>e.length?e.map(a=>{const s=(a==null?void 0:a.querySqlLog)||"";return{...a,resultsCount:s.includes("select count")?1:r}}):[],w=e=>t.jsx(M,{children:t.jsx(O,{src:e.contactAvatar,alt:"avatar"})}),T=e=>t.jsx(U,{to:`/employee/${e.employeeId}`,children:e.name}),q=e=>{const{first:r,page:a}=e,s=a!==void 0?a+1:1;f(s),b(r)};return t.jsx(D,{children:l?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Employees"}),t.jsxs(z,{first:L,value:p,rows:g,totalRecords:y,loading:l,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:q,children:[t.jsx(i,{body:w}),t.jsx(i,{body:T,field:"name",header:"Name"}),j.map(e=>t.jsx(i,{field:e.field,header:e.header},e.field))]})]})})};export{Y as default};
