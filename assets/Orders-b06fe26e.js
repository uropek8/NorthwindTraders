import{c as tt,r as I,j as V}from"./index-92dcf44b.js";import{i as et,D as rt,C as nt}from"./axios-1508d7d0.js";import{s as K}from"./styled-components.browser.esm-7641b0ea.js";import"./portal.esm-ab572a2e.js";const it="/api/orders";function st(m){return et.get(it,{params:m})}const at=K.div`
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
`,ot=K.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`;var Q={},ut={get exports(){return Q},set exports(m){Q=m}};(function(m,U){(function(P,b){m.exports=b()})(tt,function(){var P=1e3,b=6e4,z=36e5,C="millisecond",M="second",D="minute",S="hour",g="day",T="week",$="month",E="quarter",y="year",O="date",l="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var r=["th","st","nd","rd"],t=n%100;return"["+n+(r[(t-20)%10]||r[t]||r[0])+"]"}},W=function(n,r,t){var i=String(n);return!i||i.length>=r?n:""+Array(r+1-i.length).join(t)+n},X={s:W,z:function(n){var r=-n.utcOffset(),t=Math.abs(r),i=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+W(i,2,"0")+":"+W(e,2,"0")},m:function n(r,t){if(r.date()<t.date())return-n(t,r);var i=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(i,$),a=t-e<0,s=r.clone().add(i+(a?-1:1),$);return+(-(i+(t-e)/(a?e-s:s-e))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:$,y,w:T,d:g,D:O,h:S,m:D,s:M,ms:C,Q:E}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return n===void 0}},A="en",Y={};Y[A]=H;var Z=function(n){return n instanceof J},F=function n(r,t,i){var e;if(!r)return A;if(typeof r=="string"){var a=r.toLowerCase();Y[a]&&(e=a),t&&(Y[a]=t,e=a);var s=r.split("-");if(!e&&s.length>1)return n(s[0])}else{var o=r.name;Y[o]=r,e=o}return!i&&e&&(A=e),e||!i&&A},c=function(n,r){if(Z(n))return n.clone();var t=typeof r=="object"?r:{};return t.date=n,t.args=arguments,new J(t)},u=X;u.l=F,u.i=Z,u.w=function(n,r){return c(n,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var J=function(){function n(t){this.$L=F(t.locale,null,!0),this.parse(t)}var r=n.prototype;return r.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(w);if(s){var o=s[2]-1||0,h=(s[7]||"0").substring(0,3);return a?new Date(Date.UTC(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)):new Date(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==l},r.isSame=function(t,i){var e=c(t);return this.startOf(i)<=e&&e<=this.endOf(i)},r.isAfter=function(t,i){return c(t)<this.startOf(i)},r.isBefore=function(t,i){return this.endOf(i)<c(t)},r.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,i){var e=this,a=!!u.u(i)||i,s=u.p(t),o=function(L,p){var _=u.w(e.$u?Date.UTC(e.$y,p,L):new Date(e.$y,p,L),e);return a?_:_.endOf(g)},h=function(L,p){return u.w(e.toDate()[L].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(p)),e)},d=this.$W,f=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(s){case y:return a?o(1,0):o(31,11);case $:return a?o(1,f):o(0,f+1);case T:var N=this.$locale().weekStart||0,k=(d<N?d+7:d)-N;return o(a?x-k:x+(6-k),f);case g:case O:return h(v+"Hours",0);case S:return h(v+"Minutes",1);case D:return h(v+"Seconds",2);case M:return h(v+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,i){var e,a=u.p(t),s="set"+(this.$u?"UTC":""),o=(e={},e[g]=s+"Date",e[O]=s+"Date",e[$]=s+"Month",e[y]=s+"FullYear",e[S]=s+"Hours",e[D]=s+"Minutes",e[M]=s+"Seconds",e[C]=s+"Milliseconds",e)[a],h=a===g?this.$D+(i-this.$W):i;if(a===$||a===y){var d=this.clone().set(O,1);d.$d[o](h),d.init(),this.$d=d.set(O,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](h);return this.init(),this},r.set=function(t,i){return this.clone().$set(t,i)},r.get=function(t){return this[u.p(t)]()},r.add=function(t,i){var e,a=this;t=Number(t);var s=u.p(i),o=function(f){var x=c(a);return u.w(x.date(x.date()+Math.round(f*t)),a)};if(s===$)return this.set($,this.$M+t);if(s===y)return this.set(y,this.$y+t);if(s===g)return o(1);if(s===T)return o(7);var h=(e={},e[D]=b,e[S]=z,e[M]=P,e)[s]||1,d=this.$d.getTime()+t*h;return u.w(d,this)},r.subtract=function(t,i){return this.add(-1*t,i)},r.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var a=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),o=this.$H,h=this.$m,d=this.$M,f=e.weekdays,x=e.months,v=function(p,_,q,R){return p&&(p[_]||p(i,a))||q[_].slice(0,R)},N=function(p){return u.s(o%12||12,p,"0")},k=e.meridiem||function(p,_,q){var R=p<12?"AM":"PM";return q?R.toLowerCase():R},L={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:u.s(d+1,2,"0"),MMM:v(e.monthsShort,d,x,3),MMMM:v(x,d),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:v(e.weekdaysMin,this.$W,f,2),ddd:v(e.weekdaysShort,this.$W,f,3),dddd:f[this.$W],H:String(o),HH:u.s(o,2,"0"),h:N(1),hh:N(2),a:k(o,h,!0),A:k(o,h,!1),m:String(h),mm:u.s(h,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:s};return a.replace(j,function(p,_){return _||L[p]||s.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,i,e){var a,s=u.p(i),o=c(t),h=(o.utcOffset()-this.utcOffset())*b,d=this-o,f=u.m(this,o);return f=(a={},a[y]=f/12,a[$]=f,a[E]=f/3,a[T]=(d-h)/6048e5,a[g]=(d-h)/864e5,a[S]=d/z,a[D]=d/b,a[M]=d/P,a)[s]||d,e?f:u.a(f)},r.daysInMonth=function(){return this.endOf($).$D},r.$locale=function(){return Y[this.$L]},r.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=F(t,i,!0);return a&&(e.$L=a),e},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},n}(),G=J.prototype;return c.prototype=G,[["$ms",C],["$s",M],["$m",D],["$H",S],["$W",g],["$M",$],["$y",y],["$D",O]].forEach(function(n){G[n[1]]=function(r){return this.$g(r,n[0],n[1])}}),c.extend=function(n,r){return n.$i||(n(r,J,c),n.$i=!0),c},c.locale=F,c.isDayjs=Z,c.unix=function(n){return c(1e3*n)},c.en=Y[A],c.Ls=Y,c.p={},c})})(ut);const dt=Q,B=dt;function ht(m){return B(m).isValid()?B(m):B()}function ct(m,U){return ht(m).format(U)}const mt=()=>{const[m,U]=I.useState([]),[P,b]=I.useState(0),[z,C]=I.useState(!0),[M,D]=I.useState(1),[S,g]=I.useState(0),T=20,$=[{field:"orderId",header:"Id"},{field:"totalPrice",header:"Total Price"},{field:"products",header:"Products"},{field:"quantity",header:"Quantity"},{field:"shippedDate",header:"Shipped"},{field:"shipName",header:"Ship Name"},{field:"shipCountry",header:"City"},{field:"shipCity",header:"Country"}],E=l=>l.length?l.map(w=>({...w,shippedDate:ct(w.shippedDate,"YYYY-MM-DD")})):[],y=async()=>{C(!0);try{const w=await st({page:M,limit:T}),{orders:j,totalElementsFromDB:H}=w.data,W=E(j);return U(W),b(H),Promise.resolve()}catch(l){return Promise.reject(l)}finally{C(!1)}};I.useEffect(()=>{y()},[M]);const O=l=>{const{first:w,page:j}=l,H=j!==void 0?j+1:1;D(H),g(w)};return V.jsxs(at,{children:[V.jsx(ot,{children:"Orders"}),V.jsx(rt,{first:S,value:m,rows:T,totalRecords:P,loading:z,size:"small",lazy:!0,paginator:!0,stripedRows:!0,onPage:O,children:$.map(l=>V.jsx(nt,{field:l.field,header:l.header},l.field))})]})};export{mt as default};
