(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),a=t(280),l=t(28),o=t(27),r=(t(283),t(44));function Page(n){var t=n.title,i=n.children;return Object(o.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(l.pageScrollTo)({"scrollTop":0})})),Object(r.jsxs)(a.m,{"className":"demo-page","children":[Object(r.jsxs)(a.m,{"className":"demo-nav","children":[Object(r.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return l.default.navigateBack()}}),Object(r.jsxs)(a.m,{"className":"demo-nav__title","children":[t," "]})]}),i]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c=t(3),a=t.n(c),l=t(6),o=t.n(l),r=t(16),i=t.n(r),s=t(17),d=t.n(s),u=t(280),h=t(27),j=(t(285),t(44)),b=function(e){i()(Index,e);var n=d()(Index);function Index(){return a()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(j.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(j.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(j.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"285":function(e,n,t){},"763":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var c=t(3),a=t.n(c),l=t(6),o=t.n(l),r=t(24),i=t.n(r),s=t(16),d=t.n(s),u=t(17),h=t.n(u),j=t(9),b=t.n(j),x=t(27),f=t(28),m=t(280),p=t(281),O=t(282),v=t(284),k=t(44),C=function(e){d()(Index,e);var n=h()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),b()(i()(e),"state",{"value":""}),b()(i()(e),"onChange",(function(n){e.setState({"value":n.detail})})),b()(i()(e),"onSearch",(function(){e.state.value&&Object(f.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),b()(i()(e),"onClick",(function(){e.state.value&&Object(f.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),b()(i()(e),"onCancel",(function(){Object(f.showToast)({"title":"取消","icon":"none"})})),b()(i()(e),"onClear",(function(){Object(f.showToast)({"title":"清空","icon":"none"})})),e}return o()(Index,[{"key":"render","value":function render(){var e=this.state.value;return Object(k.jsx)(O.a,{"title":"Search 搜索","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsx)(v.a,{"title":"基本用法","children":Object(k.jsx)(p.R,{"defaultValue":e,"placeholder":"请输入搜索关键词","onSearch":this.onSearch})}),Object(k.jsx)(v.a,{"title":"事件监听","children":Object(k.jsx)(p.R,{"defaultValue":e,"showAction":!0,"placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onCancel":this.onCancel,"onClear":this.onClear})}),Object(k.jsx)(v.a,{"title":"搜索框内容对齐","children":Object(k.jsx)(p.R,{"defaultValue":e,"inputAlign":"center","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(v.a,{"title":"禁用搜索框","children":Object(k.jsx)(p.R,{"disabled":!0,"defaultValue":e,"placeholder":"请输入搜索关键词"})}),Object(k.jsx)(v.a,{"title":"自定义背景色","children":Object(k.jsx)(p.R,{"defaultValue":e,"shape":"round","background":"#4fc08d","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(v.a,{"title":"自定义按钮","children":Object(k.jsx)(p.R,{"value":e,"label":"地址","shape":"round","placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onChange":this.onChange,"renderAction":Object(k.jsx)(k.Fragment,{"children":Object(k.jsx)(m.m,{"onClick":this.onClick,"children":"搜索"})})})})]})})}}]),Index}(x.Component)}}]);