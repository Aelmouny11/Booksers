(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{1690:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header",function(){return n(687)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),l=n(387),i=n(7190);var c={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var t=r(u.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=r(i.useIntersection({rootMargin:"200px"}),2),x=w[0],E=w[1],_=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=E&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,E,b,n,o]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:l}))}(e,o,d,p,h,y,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:o&&o.locale,L=o&&o.isLocaleDomain&&u.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);j.href=L||u.addBasePath(u.addLocale(p,N,o&&o.defaultLocale))}return a.default.cloneElement(t,j)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,i=o.useRef(),c=r(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},687:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1664),a=n(5670),u=["Home","Catgories","About","Support"];t.default=function(){return(0,r.jsxs)("div",{className:"bg-indigo-700 pb-0 grid gap-5",children:[(0,r.jsxs)("div",{className:"p-4",children:[" ",(0,r.jsx)(o.default,{href:"#",children:(0,r.jsx)("h1",{className:"text-white font-bold",children:"Booksers"})})]}),(0,r.jsxs)("div",{className:"bg-teal-200 flex items-center gap-4 p-2 pl-10 w-full",children:[u.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(o.default,{href:"#",children:e})})})),(0,r.jsx)(a.default,{})]})]})}},5670:function(e,t,n){"use strict";n.r(t);var r=n(5893);t.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{action:"",className:"w-full h-8 p-2",children:[(0,r.jsx)("input",{type:"text",className:"w-1/2 rounded-full pl-3 pt-1",placeholder:"Search Here ..."}),(0,r.jsx)("button",{className:"bg-purple-500 ",children:"Search"})]})})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=1690,e(e.s=t);var t}));var t=e.O();_N_E=t}]);