(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),i=t(280),o=t(31),s=t(27),d=(t(283),t(44));function Page(n){var t=n.title,r=n.children,a=o.default.useRouter();return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(o.pageScrollTo)({"scrollTop":0})}),[a.path]),Object(d.jsxs)(i.View,{"className":"demo-page","children":[Object(d.jsxs)(i.View,{"className":"demo-nav","children":[Object(d.jsx)(c.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return o.default.navigateBack()}}),Object(d.jsxs)(i.View,{"className":"demo-nav__title","children":[t," "]})]}),r]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(3),i=t.n(c),o=t(6),s=t.n(o),d=t(16),r=t.n(d),a=t(17),l=t.n(a),u=t(280),h=t(27),b=(t(285),t(44)),j=function(e){r()(Index,e);var n=l()(Index);function Index(){return i()(this,Index),n.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(b.jsxs)(u.View,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(b.jsx)(u.View,{"className":"demo-block__title","children":t}),c?Object(b.jsx)(u.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"285":function(e,n,t){},"730":function(e,n,t){},"782":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var c=t(3),i=t.n(c),o=t(6),s=t.n(o),d=t(24),r=t.n(d),a=t(16),l=t.n(a),u=t(17),h=t.n(u),b=t(9),j=t.n(b),m=t(27),f=t(280),p=t(281),w=t(282),x=t(284),k=(t(730),t(44)),O=function(e){l()(Index,e);var n=h()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),j()(r()(e),"state",{"show":!1,"showEmbedded":!1}),j()(r()(e),"onClickShow",(function(){e.setState({"show":!0})})),j()(r()(e),"onClickHide",(function(){e.setState({"show":!1})})),j()(r()(e),"onClickShowEmbedded",(function(){e.setState({"showEmbedded":!0})})),j()(r()(e),"onClickHideEmbedded",(function(){e.setState({"showEmbedded":!1})})),j()(r()(e),"noop",(function(){})),e}return s()(Index,[{"key":"render","value":function render(){var e=this.state,n=e.show,t=e.showEmbedded;return Object(k.jsx)(w.a,{"title":"Overlay 遮罩层","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsxs)(x.a,{"title":"基础用法","padding":!0,"children":[Object(k.jsx)(p.Button,{"type":"primary","onClick":this.onClickShow,"children":"显示遮罩层"}),Object(k.jsx)(p.Overlay,{"show":n,"onClick":this.onClickHide})]}),Object(k.jsxs)(x.a,{"title":"嵌入内容","padding":!0,"children":[Object(k.jsx)(p.Button,{"type":"primary","onClick":this.onClickShowEmbedded,"children":"嵌入内容"}),Object(k.jsx)(p.Overlay,{"show":t,"onClick":this.onClickHideEmbedded,"children":Object(k.jsx)(f.View,{"className":"wrapper","children":Object(k.jsx)(f.View,{"className":"block","onClick":this.noop})})})]})]})})}}]),Index}(m.Component)}}]);