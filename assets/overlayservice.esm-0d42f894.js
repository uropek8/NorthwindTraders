import{R as g,b as N,r as w}from"./index-6329a751.js";import{b as X,e as K,O as P,E as V}from"./portal.esm-5692bc9d.js";function _(){return _=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},_.apply(this,arguments)}function M(n,r){if(n==null)return{};var e={},t=Object.keys(n),s,i;for(i=0;i<t.length;i++)s=t[i],!(r.indexOf(s)>=0)&&(e[s]=n[s]);return e}function R(n,r){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},R(n,r)}function U(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,R(n,r)}function W(n,r){return n.classList?!!r&&n.classList.contains(r):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+r+" ")!==-1}function B(n,r){n.classList?n.classList.add(r):W(n,r)||(typeof n.className=="string"?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r))}function L(n,r){return n.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function F(n,r){n.classList?n.classList.remove(r):typeof n.className=="string"?n.className=L(n.className,r):n.setAttribute("class",L(n.className&&n.className.baseVal||"",r))}const k={disabled:!1},I=g.createContext(null);var G=function(r){return r.scrollTop},O="unmounted",x="exited",m="entering",b="entered",D="exiting",v=function(n){U(r,n);function r(t,s){var i;i=n.call(this,t,s)||this;var a=s,o=a&&!a.isMounting?t.enter:t.appear,p;return i.appearStatus=null,t.in?o?(p=x,i.appearStatus=m):p=b:t.unmountOnExit||t.mountOnEnter?p=O:p=x,i.state={status:p},i.nextCallback=null,i}r.getDerivedStateFromProps=function(s,i){var a=s.in;return a&&i.status===O?{status:x}:null};var e=r.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(s){var i=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==m&&a!==b&&(i=m):(a===m||a===b)&&(i=D)}this.updateStatus(!1,i)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var s=this.props.timeout,i,a,o;return i=a=o=s,s!=null&&typeof s!="number"&&(i=s.exit,a=s.enter,o=s.appear!==void 0?s.appear:a),{exit:i,enter:a,appear:o}},e.updateStatus=function(s,i){if(s===void 0&&(s=!1),i!==null)if(this.cancelNextCallback(),i===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);a&&G(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:O})},e.performEnter=function(s){var i=this,a=this.props.enter,o=this.context?this.context.isMounting:s,p=this.props.nodeRef?[o]:[N.findDOMNode(this),o],u=p[0],l=p[1],c=this.getTimeouts(),E=o?c.appear:c.enter;if(!s&&!a||k.disabled){this.safeSetState({status:b},function(){i.props.onEntered(u)});return}this.props.onEnter(u,l),this.safeSetState({status:m},function(){i.props.onEntering(u,l),i.onTransitionEnd(E,function(){i.safeSetState({status:b},function(){i.props.onEntered(u,l)})})})},e.performExit=function(){var s=this,i=this.props.exit,a=this.getTimeouts(),o=this.props.nodeRef?void 0:N.findDOMNode(this);if(!i||k.disabled){this.safeSetState({status:x},function(){s.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:D},function(){s.props.onExiting(o),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:x},function(){s.props.onExited(o)})})})},e.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(s,i){i=this.setNextCallback(i),this.setState(s,i)},e.setNextCallback=function(s){var i=this,a=!0;return this.nextCallback=function(o){a&&(a=!1,i.nextCallback=null,s(o))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},e.onTransitionEnd=function(s,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),o=s==null&&!this.props.addEndListener;if(!a||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var p=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=p[0],l=p[1];this.props.addEndListener(u,l)}s!=null&&setTimeout(this.nextCallback,s)},e.render=function(){var s=this.state.status;if(s===O)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var o=M(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return g.createElement(I.Provider,{value:null},typeof a=="function"?a(s,o):g.cloneElement(g.Children.only(a),o))},r}(g.Component);v.contextType=I;v.propTypes={};function C(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};v.UNMOUNTED=O;v.EXITED=x;v.ENTERING=m;v.ENTERED=b;v.EXITING=D;const H=v;var Y=function(r,e){return r&&e&&e.split(" ").forEach(function(t){return B(r,t)})},y=function(r,e){return r&&e&&e.split(" ").forEach(function(t){return F(r,t)})},j=function(n){U(r,n);function r(){for(var t,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(o,p){var u=t.resolveArguments(o,p),l=u[0],c=u[1];t.removeClasses(l,"exit"),t.addClass(l,c?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(o,p)},t.onEntering=function(o,p){var u=t.resolveArguments(o,p),l=u[0],c=u[1],E=c?"appear":"enter";t.addClass(l,E,"active"),t.props.onEntering&&t.props.onEntering(o,p)},t.onEntered=function(o,p){var u=t.resolveArguments(o,p),l=u[0],c=u[1],E=c?"appear":"enter";t.removeClasses(l,E),t.addClass(l,E,"done"),t.props.onEntered&&t.props.onEntered(o,p)},t.onExit=function(o){var p=t.resolveArguments(o),u=p[0];t.removeClasses(u,"appear"),t.removeClasses(u,"enter"),t.addClass(u,"exit","base"),t.props.onExit&&t.props.onExit(o)},t.onExiting=function(o){var p=t.resolveArguments(o),u=p[0];t.addClass(u,"exit","active"),t.props.onExiting&&t.props.onExiting(o)},t.onExited=function(o){var p=t.resolveArguments(o),u=p[0];t.removeClasses(u,"exit"),t.addClass(u,"exit","done"),t.props.onExited&&t.props.onExited(o)},t.resolveArguments=function(o,p){return t.props.nodeRef?[t.props.nodeRef.current,o]:[o,p]},t.getClassNames=function(o){var p=t.props.classNames,u=typeof p=="string",l=u&&p?p+"-":"",c=u?""+l+o:p[o],E=u?c+"-active":p[o+"Active"],d=u?c+"-done":p[o+"Done"];return{baseClassName:c,activeClassName:E,doneClassName:d}},t}var e=r.prototype;return e.addClass=function(s,i,a){var o=this.getClassNames(i)[a+"ClassName"],p=this.getClassNames("enter"),u=p.doneClassName;i==="appear"&&a==="done"&&u&&(o+=" "+u),a==="active"&&s&&G(s),o&&(this.appliedClasses[i][a]=o,Y(s,o))},e.removeClasses=function(s,i){var a=this.appliedClasses[i],o=a.base,p=a.active,u=a.done;this.appliedClasses[i]={},o&&y(s,o),p&&y(s,p),u&&y(s,u)},e.render=function(){var s=this.props;s.classNames;var i=M(s,["classNames"]);return g.createElement(H,_({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(g.Component);j.defaultProps={classNames:""};j.propTypes={};const q=j;function S(n){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(n)}function z(n,r){if(S(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,r||"default");if(S(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function J(n){var r=z(n,"string");return S(r)==="symbol"?r:String(r)}function Q(n,r,e){return r=J(r),r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var $={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(r){return P.getMergedProps(r,$.defaultProps)},getOtherProps:function(r){return P.getDiffProps(r,$.defaultProps)}};function A(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,t)}return e}function T(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?A(Object(e),!0).forEach(function(t){Q(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var Z=w.forwardRef(function(n,r){var e=$.getProps(n),t=e.disabled||e.options&&e.options.disabled||!X.cssTransition,s=function(f,h){e.onEnter&&e.onEnter(f,h),e.options&&e.options.onEnter&&e.options.onEnter(f,h)},i=function(f,h){e.onEntering&&e.onEntering(f,h),e.options&&e.options.onEntering&&e.options.onEntering(f,h)},a=function(f,h){e.onEntered&&e.onEntered(f,h),e.options&&e.options.onEntered&&e.options.onEntered(f,h)},o=function(f){e.onExit&&e.onExit(f),e.options&&e.options.onExit&&e.options.onExit(f)},p=function(f){e.onExiting&&e.onExiting(f),e.options&&e.options.onExiting&&e.options.onExiting(f)},u=function(f){e.onExited&&e.onExited(f),e.options&&e.options.onExited&&e.options.onExited(f)};if(K(function(){if(t){var d=P.getRefElement(e.nodeRef);e.in?(s(d,!0),i(d,!0),a(d,!0)):(o(d),p(d),u(d))}},[e.in]),t)return e.in?e.children:null;var l={nodeRef:e.nodeRef,in:e.in,onEnter:s,onEntering:i,onEntered:a,onExit:o,onExiting:p,onExited:u},c={classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit},E=T(T(T({},c),e.options||{}),l);return w.createElement(q,E,e.children)});Z.displayName="CSSTransition";var nt=V();export{Z as C,nt as O};
