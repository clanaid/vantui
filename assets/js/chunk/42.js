(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),a=t(280),r=t(31),i=t(27),s=(t(283),t(44));function Page(n){var t=n.title,l=n.children,o=r.default.useRouter();return Object(i.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(r.pageScrollTo)({"scrollTop":0})}),[o.path]),Object(s.jsxs)(a.View,{"className":"demo-page","children":[Object(s.jsxs)(a.View,{"className":"demo-nav","children":[Object(s.jsx)(c.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(s.jsxs)(a.View,{"className":"demo-nav__title","children":[t," "]})]}),l]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var c=t(3),a=t.n(c),r=t(6),i=t.n(r),s=t(16),l=t.n(s),o=t(17),d=t.n(o),u=t(280),j=t(27),h=(t(285),t(44)),x=function(e){l()(Index,e);var n=d()(Index);function Index(){return a()(this,Index),n.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(h.jsxs)(u.View,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.View,{"className":"demo-block__title","children":t}),c?Object(h.jsx)(u.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"285":function(e,n,t){},"710":function(e,n,t){},"764":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return N}));var c=t(3),a=t.n(c),r=t(6),i=t.n(r),s=t(24),l=t.n(s),o=t(16),d=t.n(o),u=t(17),j=t.n(u),h=t(9),x=t.n(h),b=t(27),m=t(31),f=t(280),O=t(281),v=t(282),g=t(284),p=(t(710),t(44)),N=function(e){d()(Index,e);var n=j()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),x()(l()(e),"state",{"currentValue":50}),x()(l()(e),"onChange",(function(e){Object(m.showToast)({"icon":"none","title":"当前值：".concat(e.detail)})})),x()(l()(e),"onDrag",(function(n){e.setState({"currentValue":n.detail.value})})),e}return i()(Index,[{"key":"render","value":function render(){var e=this.state.currentValue;return Object(p.jsx)(v.a,{"title":"Slider 滑块","children":Object(p.jsxs)(p.Fragment,{"children":[Object(p.jsx)(g.a,{"title":"基础用法","children":Object(p.jsx)(O.Slider,{"value":"50","className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"双滑块","children":Object(p.jsx)(O.Slider,{"range":!0,"value":[20,60],"className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"指定选择范围","children":Object(p.jsx)(O.Slider,{"className":"slider","min":-50,"max":50,"onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"禁用","children":Object(p.jsx)(O.Slider,{"className":"slider","value":"50","disabled":!0})}),Object(p.jsx)(g.a,{"title":"指定步长","children":Object(p.jsx)(O.Slider,{"className":"slider","value":"50","step":"10","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"自定义样式","children":Object(p.jsx)(O.Slider,{"value":"50","className":"slider","barHeight":"4px","activeColor":"#ee0a24"})}),Object(p.jsx)(g.a,{"title":"自定义按钮","children":Object(p.jsx)(O.Slider,{"value":e,"className":"slider","activeColor":"#ee0a24","onDrag":this.onDrag,"renderButton":function renderButton(){return Object(p.jsx)(p.Fragment,{"children":Object(p.jsx)(f.View,{"className":"custom-button","children":e})})}})})]})})}}]),Index}(b.Component)}}]);