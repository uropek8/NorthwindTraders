import{r as o,j as i,N as K,O as le}from"./index-93a83de2.js";import{s}from"./styled-components.browser.esm-ebb0caae.js";import{u as oe,a as se,Z as P,P as ce,O as C,c as v,b as j,D as k,I as ue}from"./portal.esm-91b13259.js";import{C as pe,O as de}from"./overlayservice.esm-b2e42028.js";const fe=s.div`
  height: 100%;
  padding: 25px;
`,me=s.nav`
  width: auto;
  padding-left: 240px;
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f3f4f6;
  background-color: #ffffff;
  z-index: 30;
`,he=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`,xe=s.div`
  color: #1f2937;
  line-height: 21px;
`,ge=()=>{const[t,r]=o.useState(new Date),n=()=>{r(new Date)};return o.useEffect(()=>(setInterval(n,1e3),function(){}),[]),i.jsx(xe,{children:t.toLocaleTimeString("en-GB")})};function T(){return T=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},T.apply(this,arguments)}function be(t){if(Array.isArray(t))return t}function ve(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c,b,h,x,u=[],p=!0,y=!1;try{if(h=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(c=h.call(n)).done)&&(u.push(c.value),u.length!==r);p=!0);}catch(I){y=!0,b=I}finally{try{if(!p&&n.return!=null&&(x=n.return(),Object(x)!==x))return}finally{if(y)throw b}}return u}}function B(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,c=new Array(r);n<r;n++)c[n]=t[n];return c}function ke(t,r){if(t){if(typeof t=="string")return B(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(t,r)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(t,r){return be(t)||ve(t,r)||ke(t,r)||ye()}var E={defaultProps:{__TYPE:"Menu",id:null,model:null,popup:!1,style:null,className:null,autoZIndex:!0,baseZIndex:0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},getProps:function(r){return C.getMergedProps(r,E.defaultProps)},getOtherProps:function(r){return C.getDiffProps(r,E.defaultProps)}},Z=o.memo(o.forwardRef(function(t,r){var n=E.getProps(t),c=o.useState(!n.popup),b=H(c,2),h=b[0],x=b[1],u=o.useRef(null),p=o.useRef(null),y=oe({target:p,overlay:u,listener:function(e,a){var d=a.valid;d&&S(e)},when:h}),I=H(y,2),_=I[0],z=I[1],U=function(e){n.popup&&de.emit("overlay-click",{originalEvent:e,target:p.current})},O=function(e,a){if(a.disabled){e.preventDefault();return}a.url||e.preventDefault(),a.command&&a.command({originalEvent:e,item:a}),n.popup&&S(e)},D=function(e,a){var d=e.currentTarget.parentElement;switch(e.which){case 40:var f=$(d);f&&f.children[0].focus(),e.preventDefault();break;case 38:var g=F(d);g&&g.children[0].focus(),e.preventDefault();break}},$=function l(e){var a=e.nextElementSibling;return a?k.hasClass(a,"p-disabled")||!k.hasClass(a,"p-menuitem")?l(a):a:null},F=function l(e){var a=e.previousElementSibling;return a?k.hasClass(a,"p-disabled")||!k.hasClass(a,"p-menuitem")?l(a):a:null},Q=function(e){n.popup&&(h?S(e):L(e))},L=function(e){p.current=e.currentTarget,x(!0),n.onShow&&n.onShow(e)},S=function(e){p.current=e.currentTarget,x(!1),n.onHide&&n.onHide(e)},W=function(){P.set("menu",u.current,j.autoZIndex,n.baseZIndex||j.zIndex.menu),k.absolutePosition(u.current,p.current)},G=function(){_()},J=function(){p.current=null,z()},X=function(){P.clear(u.current)};se(function(){P.clear(u.current)}),o.useImperativeHandle(r,function(){return{props:n,toggle:Q,show:L,hide:S,getElement:function(){return u.current},getTarget:function(){return p.current}}});var q=function(e,a){var d=e.label+"_"+a,f=v("p-submenu-header",{"p-disabled":e.disabled},e.className),g=e.items.map(R);return o.createElement(o.Fragment,{key:d},o.createElement("li",{className:f,style:e.style,role:"presentation"},e.label),g)},V=function(e){var a="separator_"+e;return o.createElement("li",{key:a,className:"p-menu-separator",role:"separator"})},R=function(e,a){if(e.visible===!1)return null;var d=v("p-menuitem",e.className),f=v("p-menuitem-link",{"p-disabled":e.disabled}),g=v("p-menuitem-icon",e.icon),te=ue.getJSXIcon(e.icon,{className:"p-menuitem-icon"},{props:n}),re=e.label&&o.createElement("span",{className:"p-menuitem-text"},e.label),A=e.disabled?null:0,ae=e.label+"_"+a,w=o.createElement("a",{href:e.url||"#",className:f,role:"menuitem",target:e.target,onClick:function(m){return O(m,e)},onKeyDown:function(m){return D(m)},tabIndex:A,"aria-disabled":e.disabled},te,re);if(e.template){var ie={onClick:function(m){return O(m,e)},onKeyDown:function(m){return D(m)},className:f,tabIndex:A,labelClassName:"p-menuitem-text",iconClassName:g,element:w,props:n};w=C.getJSXElement(e.template,e,ie)}return o.createElement("li",{key:ae,className:d,style:e.style,role:"none"},w)},Y=function(e,a){return e.separator?V(a):e.items?q(e,a):R(e,a)},ee=function(){return n.model.map(Y)},ne=function(){if(n.model){var e=E.getOtherProps(n),a=v("p-menu p-component",{"p-menu-overlay":n.popup,"p-input-filled":j.inputStyle==="filled","p-ripple-disabled":j.ripple===!1},n.className),d=ee();return o.createElement(pe,{nodeRef:u,classNames:"p-connected-overlay",in:h,timeout:{enter:120,exit:100},options:n.transitionOptions,unmountOnExit:!0,onEnter:W,onEntered:G,onExit:J,onExited:X},o.createElement("div",T({ref:u,id:n.id,className:a,style:n.style},e,{onClick:U}),o.createElement("ul",{className:"p-menu-list p-reset",role:"menu"},d)))}return null},M=ne();return n.popup?o.createElement(ce,{element:M,appendTo:n.appendTo}):M}));Z.displayName="Menu";const Ie=s.div`
  display: flex;
  align-items: center;
`,Se=s.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`,je=s.span`
  padding: 0 10px;
`,Ee=()=>{const t=o.useRef(null),r=[{label:"Introducing D1",icon:"pi pi-link",className:"menu-item",url:"https://blog.cloudflare.com/introducing-d1"},{label:"SQLite SQL Flavour",icon:"pi pi-link",className:"menu-item",url:"https://www.sqlite.org/lang.html"},{label:"Durable Objects",icon:"pi pi-link",className:"menu-item",url:"https://developers.cloudflare.com/workers/learning/using-durable-objects/"}],n=c=>{t.current&&t.current.toggle(c)};return i.jsxs(Ie,{children:[i.jsx(Z,{ref:t,model:r,popup:!0,style:{fontSize:"14px"}}),i.jsxs(Se,{onClick:n,children:[i.jsx("i",{className:"pi pi-bars"}),i.jsx(je,{children:"SQLite Links"}),i.jsx("i",{className:"pi pi-angle-down"})]})]})},we=()=>i.jsx(me,{children:i.jsxs(he,{children:[i.jsx(ge,{}),i.jsx(Ee,{})]})}),Ne=s.aside`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(31, 41, 55);
  z-index: 40;
`,Pe=s.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #111827;
`,Ce=s(K)`
  color: #ffffff;
  line-height: 24px;
`,Te=s.div`
  display: flex;
  flex-direction: column;
`,Oe=s.p`
  color: rgb(229, 231, 235);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 10px;
  opacity: 0.6;
`,De=s.ul`
  display: flex;
  flex-direction: column;
`,Le=s.li`
  width: 100%;
`,Re=s(K)`
  display: flex;
  align-items: center;
  color: rgb(209, 213, 219);
  line-height: 24px;
  padding: 8px 15px;
  background-color: transparent;
  transition: all 0.3s ease;

  &.active {
    background-color: rgb(55, 65, 81);
  }

  &:hover {
    background-color: rgb(55, 65, 81);
  }

  i {
    margin-top: -2px;
    margin-right: 10px;
  }
`,Me=()=>{const t=[{linkPath:"/",linkIcon:"pi-home",linkText:"Home"},{linkPath:"/dashboard",linkIcon:"pi-desktop",linkText:"Dashboard"},{linkPath:"/suppliers",linkIcon:"pi-truck",linkText:"Suppliers"},{linkPath:"/products",linkIcon:"pi-shopping-bag",linkText:"Products"},{linkPath:"/orders",linkIcon:"pi-shopping-cart",linkText:"Orders"},{linkPath:"/employees",linkIcon:"pi-credit-card",linkText:"Employees"},{linkPath:"/customers",linkIcon:"pi-users",linkText:"Customers"},{linkPath:"/search",linkIcon:"pi-search",linkText:"Search"}];return i.jsxs(Ne,{children:[i.jsx(Pe,{children:i.jsxs(Ce,{to:"/",children:[i.jsx("b",{children:"Northwind"})," Traders"]})}),i.jsxs(Te,{children:[i.jsx(Oe,{children:"General"}),i.jsx(De,{children:t.map(r=>i.jsx(Le,{children:i.jsxs(Re,{to:r.linkPath,children:[i.jsx("i",{className:`pi ${r.linkIcon}`}),r.linkText]})},r.linkText))})]})]})},Ze=()=>i.jsxs(i.Fragment,{children:[i.jsx(we,{}),i.jsx(Me,{}),i.jsx(fe,{children:i.jsx(le,{})})]});export{Ze as default};
