import{N as R,r as o,L as k,j as t}from"./index-ec8740ca.js";import{D as z,C as i}from"./datatable.esm-dd89799d.js";import{s as n}from"./styled-components.browser.esm-220c6c9f.js";import{a as A}from"./index-86cad9a2.js";import{g as B}from"./utils-31ec2c7c.js";import"./inputtext.esm-a8d54d50.js";import"./button.esm-ee13bd22.js";import"./overlayservice.esm-00e1c1e9.js";import"./axios-33dc75a8.js";const D=n.div`
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
`,Y=()=>{const[p,u]=o.useState([]),[y,x]=o.useState(0),[l,d]=o.useState(!0),[c,f]=o.useState(1),[L,E]=o.useState(0),{metrics:m,updateLogMetrics:b,updateErrorMsg:j}=o.useContext(k),g=20,v=[{field:"title",header:"Title"},{field:"city",header:"City"},{field:"homePhone",header:"Phone"},{field:"country",header:"Country"}];o.useEffect(()=>{C()},[c]);const C=async()=>{d(!0);try{const r=await A({page:c,limit:g}),{employees:a,totalElementsFromDB:s,sqlLog:M}=r.data,h=P(a),N=w(M,h.length);return x(s),u(h),S(N),Promise.resolve()}catch(e){const r=e instanceof Error?e.message:String(e);return j(r),Promise.reject(e)}finally{d(!1)}},P=e=>e.length?e.map(r=>({...r,contactAvatar:B(r.name)})):[],S=e=>{if(!e.length)return;const a=(m.length?[...e,...m]:[...e]).slice(0,5);b(a)},w=(e,r)=>e.length?e.map(a=>{const s=(a==null?void 0:a.querySqlLog)||"";return{...a,resultsCount:s.includes("select count")?1:r}}):[],T=e=>t.jsx(O,{children:t.jsx(U,{src:e.contactAvatar,alt:"avatar"})}),q=e=>t.jsx(W,{to:`/employee/${e.employeeId}`,children:e.name}),I=e=>{const{first:r,page:a}=e,s=a!==void 0?a+1:1;f(s),E(r)};return t.jsx(D,{children:l?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Employees"}),t.jsxs(z,{first:L,value:p,rows:g,totalRecords:y,loading:l,paginator:p.length>0,size:"small",lazy:!0,stripedRows:!0,onPage:I,children:[t.jsx(i,{body:T}),t.jsx(i,{body:q,field:"name",header:"Name"}),v.map(e=>t.jsx(i,{field:e.field,header:e.header},e.field))]})]})})};export{Y as default};
