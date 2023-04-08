import{r as i,j as a,u as je,a as he,Z as j,P as ve,O as T,c as N,b as S,C as xe,D as w,I as we,L as ge,d as ce,e as Ie,f as le,l as Ce,R as Ne,N as ye,g as Pe}from"./index-f53f517b.js";import{s as m}from"./styled-components.browser.esm-f73fadf9.js";import{B as Te}from"./button.esm-cd71c3ca.js";import{O as Oe}from"./overlayservice.esm-cc75bfa7.js";const Le=m.div`
  height: 100%;
  padding: 25px;
`,De=m.div`
  color: #1f2937;
  line-height: 21px;

  @media (max-width: 1024px) {
    display: none;
  }
`,Re=()=>{const[n,r]=i.useState(new Date),e=()=>{r(new Date)};return i.useEffect(()=>(setInterval(e,1e3),function(){}),[]),a.jsx(De,{children:n.toLocaleTimeString("en-GB")})},Ae=m.nav`
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

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`,Me=m.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`,$e=m(Te)`
  &.p-button {
    display: none;
    width: 40px;
    height: 40px;
    border-color: #111827;
    background-color: #111827;

    @media (max-width: 1024px) {
      display: inline-flex;
    }
  }
`;function se(){return se=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c])}return n},se.apply(this,arguments)}function Be(n){if(Array.isArray(n))return n}function _e(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var c,b,l,h,f=[],p=!0,v=!1;try{if(l=(e=e.call(n)).next,r===0){if(Object(e)!==e)return;p=!1}else for(;!(p=(c=l.call(e)).done)&&(f.push(c.value),f.length!==r);p=!0);}catch(k){v=!0,b=k}finally{try{if(!p&&e.return!=null&&(h=e.return(),Object(h)!==h))return}finally{if(v)throw b}}return f}}function ue(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,c=new Array(r);e<r;e++)c[e]=n[e];return c}function He(n,r){if(n){if(typeof n=="string")return ue(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ue(n,r)}}function Ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(n,r){return Be(n)||_e(n,r)||He(n,r)||Ze()}var V={defaultProps:{__TYPE:"Menu",id:null,model:null,popup:!1,style:null,className:null,autoZIndex:!0,baseZIndex:0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},getProps:function(r){return T.getMergedProps(r,V.defaultProps)},getOtherProps:function(r){return T.getDiffProps(r,V.defaultProps)}},ke=i.memo(i.forwardRef(function(n,r){var e=V.getProps(n),c=i.useState(!e.popup),b=de(c,2),l=b[0],h=b[1],f=i.useRef(null),p=i.useRef(null),v=je({target:p,overlay:f,listener:function(t,s){var x=s.valid;x&&I(t)},when:l}),k=de(v,2),y=k[0],g=k[1],O=function(t){e.popup&&Oe.emit("overlay-click",{originalEvent:t,target:p.current})},$=function(t,s){if(s.disabled){t.preventDefault();return}s.url||t.preventDefault(),s.command&&s.command({originalEvent:t,item:s}),e.popup&&I(t)},L=function(t,s){var x=t.currentTarget.parentElement;switch(t.which){case 40:var u=G(x);u&&u.children[0].focus(),t.preventDefault();break;case 38:var o=J(x);o&&o.children[0].focus(),t.preventDefault();break}},G=function d(t){var s=t.nextElementSibling;return s?w.hasClass(s,"p-disabled")||!w.hasClass(s,"p-menuitem")?d(s):s:null},J=function d(t){var s=t.previousElementSibling;return s?w.hasClass(s,"p-disabled")||!w.hasClass(s,"p-menuitem")?d(s):s:null},Q=function(t){e.popup&&(l?I(t):D(t))},D=function(t){p.current=t.currentTarget,h(!0),e.onShow&&e.onShow(t)},I=function(t){p.current=t.currentTarget,h(!1),e.onHide&&e.onHide(t)},B=function(){j.set("menu",f.current,S.autoZIndex,e.baseZIndex||S.zIndex.menu),w.absolutePosition(f.current,p.current)},X=function(){y()},Y=function(){p.current=null,g()},q=function(){j.clear(f.current)};he(function(){j.clear(f.current)}),i.useImperativeHandle(r,function(){return{props:e,toggle:Q,show:D,hide:I,getElement:function(){return f.current},getTarget:function(){return p.current}}});var ee=function(t,s){var x=t.label+"_"+s,u=N("p-submenu-header",{"p-disabled":t.disabled},t.className),o=t.items.map(_);return i.createElement(i.Fragment,{key:x},i.createElement("li",{className:u,style:t.style,role:"presentation"},t.label),o)},P=function(t){var s="separator_"+t;return i.createElement("li",{key:s,className:"p-menu-separator",role:"separator"})},_=function(t,s){if(t.visible===!1)return null;var x=N("p-menuitem",t.className),u=N("p-menuitem-link",{"p-disabled":t.disabled}),o=N("p-menuitem-icon",t.icon),E=we.getJSXIcon(t.icon,{className:"p-menuitem-icon"},{props:e}),A=t.label&&i.createElement("span",{className:"p-menuitem-text"},t.label),H=t.disabled?null:0,ae=t.label+"_"+s,M=i.createElement("a",{href:t.url||"#",className:u,role:"menuitem",target:t.target,onClick:function(C){return $(C,t)},onKeyDown:function(C){return L(C)},tabIndex:H,"aria-disabled":t.disabled},E,A);if(t.template){var Ee={onClick:function(C){return $(C,t)},onKeyDown:function(C){return L(C)},className:u,tabIndex:H,labelClassName:"p-menuitem-text",iconClassName:o,element:M,props:e};M=T.getJSXElement(t.template,t,Ee)}return i.createElement("li",{key:ae,className:x,style:t.style,role:"none"},M)},ne=function(t,s){return t.separator?P(s):t.items?ee(t,s):_(t,s)},te=function(){return e.model.map(ne)},re=function(){if(e.model){var t=V.getOtherProps(e),s=N("p-menu p-component",{"p-menu-overlay":e.popup,"p-input-filled":S.inputStyle==="filled","p-ripple-disabled":S.ripple===!1},e.className),x=te();return i.createElement(xe,{nodeRef:f,classNames:"p-connected-overlay",in:l,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:B,onEntered:X,onExit:Y,onExited:q},i.createElement("div",se({ref:f,id:e.id,className:s,style:e.style},t,{onClick:O}),i.createElement("ul",{className:"p-menu-list p-reset",role:"menu"},x)))}return null},R=re();return e.popup?i.createElement(ve,{element:R,appendTo:e.appendTo}):R}));ke.displayName="Menu";const Ue=m.div`
  display: flex;
  align-items: center;
`,ze=m.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
  }

  .pi-ellipsis-v {
    display: none;

    @media (max-width: 1024px) {
      display: inline-block;
    }
  }

  .pi-bars,
  .pi-angle-down {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`,Ke=m.span`
  padding: 0 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`,We=()=>{const n=i.useRef(null),r=[{label:"Introducing D1",icon:"pi pi-link",className:"menu-item",url:"https://blog.cloudflare.com/introducing-d1"},{label:"SQLite SQL Flavour",icon:"pi pi-link",className:"menu-item",url:"https://www.sqlite.org/lang.html"},{label:"Durable Objects",icon:"pi pi-link",className:"menu-item",url:"https://developers.cloudflare.com/workers/learning/using-durable-objects/"}],e=c=>{n.current&&n.current.toggle(c)};return a.jsxs(Ue,{children:[a.jsx(ke,{ref:n,model:r,popup:!0,style:{fontSize:"14px"}}),a.jsxs(ze,{onClick:e,children:[a.jsx("i",{className:"pi pi-bars"}),a.jsx(Ke,{children:"SQLite Links"}),a.jsx("i",{className:"pi pi-angle-down"}),a.jsx("i",{className:"pi pi-ellipsis-v"})]})]})},Ve=()=>{const{isShowSidebar:n,toggleSidebar:r}=i.useContext(ge),e=()=>{r(!n)};return a.jsx(Ae,{children:a.jsxs(Me,{children:[a.jsx(Re,{}),a.jsx($e,{severity:"secondary",icon:"pi pi-bars",onClick:e}),a.jsx(We,{})]})})};function oe(){return oe=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c])}return n},oe.apply(this,arguments)}function Fe(n){if(Array.isArray(n))return n}function Ge(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var c,b,l,h,f=[],p=!0,v=!1;try{if(l=(e=e.call(n)).next,r===0){if(Object(e)!==e)return;p=!1}else for(;!(p=(c=l.call(e)).done)&&(f.push(c.value),f.length!==r);p=!0);}catch(k){v=!0,b=k}finally{try{if(!p&&e.return!=null&&(h=e.return(),Object(h)!==h))return}finally{if(v)throw b}}return f}}function pe(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,c=new Array(r);e<r;e++)c[e]=n[e];return c}function Je(n,r){if(n){if(typeof n=="string")return pe(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return pe(n,r)}}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(n,r){return Fe(n)||Ge(n,r)||Je(n,r)||Qe()}var F={defaultProps:{__TYPE:"Sidebar",id:null,style:null,className:null,maskStyle:null,maskClassName:null,visible:!1,position:"left",fullScreen:!1,blockScroll:!1,baseZIndex:0,dismissable:!0,showCloseIcon:!0,ariaCloseLabel:null,closeOnEscape:!0,icons:null,modal:!0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},getProps:function(r){return T.getMergedProps(r,F.defaultProps)},getOtherProps:function(r){return T.getDiffProps(r,F.defaultProps)}},Se=i.forwardRef(function(n,r){var e=F.getProps(n),c=i.useState(!1),b=Z(c,2),l=b[0],h=b[1],f=i.useState(!1),p=Z(f,2),v=p[0],k=p[1],y=i.useRef(null),g=i.useRef(null),O=i.useRef(null),$=ce({type:"keydown",listener:function(o){o.which===27&&j.get(g.current)===j.getCurrent("modal",S.autoZIndex)&&P(o)}}),L=Z($,2),G=L[0],J=L[1],Q=ce({type:"click",listener:function(o){o.which!==2&&X(o)&&P(o)}}),D=Z(Q,2),I=D[0],B=D[1],X=function(o){return y&&y.current&&!y.current.contains(o.target)},Y=function(){var o=["left","right","top","bottom"],E=o.find(function(A){return A===e.position});return E?"p-sidebar-".concat(E):""},q=function(){var o=document.activeElement,E=o&&y&&y.current.contains(o);!E&&e.showCloseIcon&&O.current.focus()},ee=function(o){e.dismissable&&e.modal&&g.current===o.target&&P(o)},P=function(o){e.onHide(),o.preventDefault()},_=function(){e.onShow&&e.onShow(),q(),re()},ne=function(){e.modal&&w.addClass(g.current,"p-component-overlay-leave")},te=function(){j.clear(g.current),h(!1),R()},re=function(){e.closeOnEscape&&G(),e.dismissable&&!e.modal&&I(),e.blockScroll&&w.addClass(document.body,"p-overflow-hidden")},R=function(){J(),B(),e.blockScroll&&w.removeClass(document.body,"p-overflow-hidden")};i.useImperativeHandle(r,function(){return{props:e,getElement:function(){return y.current},gteMask:function(){return g.current},getCloseIcon:function(){return O.current}}}),Ie(function(){e.visible&&h(!0)}),le(function(){e.visible&&!l&&h(!0),e.visible!==v&&l&&k(e.visible)}),le(function(){l&&(j.set("modal",g.current,S.autoZIndex,e.baseZIndex||S.zIndex.modal),k(!0))},[l]),le(function(){v&&(B(),e.dismissable&&!e.modal&&I())},[e.dismissable,e.modal,v]),he(function(){R(),g.current&&j.clear(g.current)});var d=function(){if(e.showCloseIcon){var o=e.ariaCloseLabel||Ce("close");return i.createElement("button",{type:"button",ref:O,className:"p-sidebar-close p-sidebar-icon p-link",onClick:P,"aria-label":o},i.createElement("span",{className:"p-sidebar-close-icon pi pi-times","aria-hidden":"true"}),i.createElement(Ne,null))}return null},t=function(){return e.icons?T.getJSXElement(e.icons,e):null},s=function(){var o=F.getOtherProps(e),E=N("p-sidebar p-component",e.className,{"p-input-filled":S.inputStyle==="filled","p-ripple-disabled":S.ripple===!1}),A=N("p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":l,"p-sidebar-full":e.fullScreen},Y(),e.maskClassName),H=d(),ae=t(),M={enter:e.fullScreen?150:300,exit:e.fullScreen?150:300};return i.createElement("div",{ref:g,style:e.maskStyle,className:A,onMouseDown:ee},i.createElement(xe,{nodeRef:y,classNames:"p-sidebar",in:v,timeout:M,options:e.transitionOptions,unmountOnExit:!0,onEntered:_,onExiting:ne,onExited:te},i.createElement("div",oe({ref:y,id:e.id,className:E,style:e.style},o,{role:"complementary"}),i.createElement("div",{className:"p-sidebar-header"},ae,H),i.createElement("div",{className:"p-sidebar-content"},e.children))))},x=function(){var o=s();return i.createElement(ve,{element:o,appendTo:e.appendTo,visible:!0})};return l&&x()});Se.displayName="Sidebar";const Xe=m.div`
  aside {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`,Ye=m.aside`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(31, 41, 55);
  z-index: 40;
`,fe=m.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #111827;
`,me=m(ye)`
  color: #ffffff;
  line-height: 24px;
`,be=m.div`
  display: flex;
  flex-direction: column;
`,U=m.p`
  color: rgb(229, 231, 235);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 10px;
  opacity: 0.6;
`,z=m.ul`
  display: flex;
  flex-direction: column;
`,K=m.li`
  width: 100%;
`,W=m(ye)`
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
`,qe=()=>{const{isShowSidebar:n,toggleSidebar:r}=i.useContext(ge),e=[{linkPath:"/",linkIcon:"pi-home",linkText:"Home"},{linkPath:"/dashboard",linkIcon:"pi-desktop",linkText:"Dashboard"}],c=[{linkPath:"/suppliers",linkIcon:"pi-truck",linkText:"Suppliers"},{linkPath:"/products",linkIcon:"pi-shopping-bag",linkText:"Products"},{linkPath:"/orders",linkIcon:"pi-shopping-cart",linkText:"Orders"},{linkPath:"/employees",linkIcon:"pi-credit-card",linkText:"Employees"},{linkPath:"/customers",linkIcon:"pi-users",linkText:"Customers"},{linkPath:"/search",linkIcon:"pi-search",linkText:"Search"}],b=()=>{n&&r(!1)};return a.jsxs(Xe,{children:[a.jsxs(Se,{visible:n,showCloseIcon:!1,className:"mobile-sibebar",blockScroll:!0,onHide:()=>r(!1),children:[a.jsx(fe,{children:a.jsxs(me,{to:"/",children:[a.jsx("b",{children:"Northwind"})," Traders"]})}),a.jsxs(be,{children:[a.jsx(U,{children:"General"}),a.jsx(z,{children:e.map(l=>a.jsx(K,{children:a.jsxs(W,{to:l.linkPath,onClick:b,children:[a.jsx("i",{className:`pi ${l.linkIcon}`}),l.linkText]})},l.linkText))}),a.jsx(U,{children:"Backoffice"}),a.jsx(z,{children:c.map(l=>a.jsx(K,{children:a.jsxs(W,{to:l.linkPath,onClick:b,children:[a.jsx("i",{className:`pi ${l.linkIcon}`}),l.linkText]})},l.linkText))})]})]}),a.jsxs(Ye,{children:[a.jsx(fe,{children:a.jsxs(me,{to:"/",children:[a.jsx("b",{children:"Northwind"})," Traders"]})}),a.jsxs(be,{children:[a.jsx(U,{children:"General"}),a.jsx(z,{children:e.map(l=>a.jsx(K,{children:a.jsxs(W,{to:l.linkPath,children:[a.jsx("i",{className:`pi ${l.linkIcon}`}),l.linkText]})},l.linkText))}),a.jsx(U,{children:"Backoffice"}),a.jsx(z,{children:c.map(l=>a.jsx(K,{children:a.jsxs(W,{to:l.linkPath,onClick:b,children:[a.jsx("i",{className:`pi ${l.linkIcon}`}),l.linkText]})},l.linkText))})]})]})]})},an=()=>a.jsxs(a.Fragment,{children:[a.jsx(Ve,{}),a.jsx(qe,{}),a.jsx(Le,{children:a.jsx(Pe,{})})]});export{an as default};
