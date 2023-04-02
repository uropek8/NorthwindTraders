import{r,j as a}from"./index-92dcf44b.js";import{i as w,D as I,C as d}from"./axios-1508d7d0.js";import{s as o}from"./styled-components.browser.esm-7641b0ea.js";import"./portal.esm-ab572a2e.js";const R="/api/supplies";function E(n){return w.get(R,{params:n})}const L=o.div`
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
  }
`,N=o.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`,_=o.div`
  display: flex;
`,z=o.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,$=()=>{const[n,u]=r.useState([]),[g,m]=r.useState(0),[h,p]=r.useState(!0),[c,f]=r.useState(1),[x,S]=r.useState(0),l=20,v="https://avatars.dicebear.com/v2/initials/",y=[{field:"companyName",header:"Company"},{field:"contactName",header:"Contact"},{field:"contactTitle",header:"Title"},{field:"city",header:"City"},{field:"country",header:"Country"}];r.useEffect(()=>{C()},[c]);const P=t=>t.length?t.map(e=>({...e,contactAvatar:b(e.contactName)})):[],b=t=>{const e=encodeURIComponent(t);return`${v}${e}.svg`},C=async()=>{p(!0);try{const e=await E({page:c,limit:l}),{supplies:s,totalElementsFromDB:i}=e.data,A=P(s);return u(A),m(i),Promise.resolve()}catch(t){return Promise.reject(t)}finally{p(!1)}},j=t=>a.jsx(_,{children:a.jsx(z,{src:t.contactAvatar,alt:"avatar"})}),T=t=>{const{first:e,page:s}=t,i=s!==void 0?s+1:1;f(i),S(e)};return a.jsxs(L,{children:[a.jsx(N,{children:"Suppliers"}),a.jsxs(I,{first:x,value:n,rows:l,totalRecords:g,loading:h,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:T,children:[a.jsx(d,{body:j}),y.map(t=>a.jsx(d,{field:t.field,header:t.header},t.field))]})]})};export{$ as default};
