(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),i=t(280),o=t(28),s=t(27),l=(t(283),t(44));function Page(n){var t=n.title,r=n.children;return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(o.pageScrollTo)({"scrollTop":0})})),Object(l.jsxs)(i.m,{"className":"demo-page","children":[Object(l.jsxs)(i.m,{"className":"demo-nav","children":[Object(l.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return o.default.navigateBack()}}),Object(l.jsxs)(i.m,{"className":"demo-nav__title","children":[t," "]})]}),r]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var c=t(3),i=t.n(c),o=t(6),s=t.n(o),l=t(16),r=t.n(l),a=t(17),d=t.n(a),u=t(280),m=t(27),f=(t(285),t(44)),h=function(e){r()(Index,e);var n=d()(Index);function Index(){return i()(this,Index),n.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(f.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(f.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(f.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.Component)},"285":function(e,n,t){},"697":function(e,n,t){},"749":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var c=t(3),i=t.n(c),o=t(6),s=t.n(o),l=t(24),r=t.n(l),a=t(16),d=t.n(a),u=t(17),m=t.n(u),f=t(9),h=t.n(f),j=(t(123),t(126),t(27)),b=t(281),k=t(282),x=t(284),C=(t(697),t(44)),g="代码是写出来给人看的，附带能在机器上运行",p=function(e){d()(Index,e);var n=m()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),h()(r()(e),"state",{"show":!1}),h()(r()(e),"showCustomDialog",(function(){e.setState({"show":!0})})),h()(r()(e),"getUserInfo",(function(e){console.log(e.detail)})),h()(r()(e),"onClickThemeAlert",(function(){b.mb.alert({"title":"标题","theme":"round-button","message":g})})),h()(r()(e),"onClickThemeAlert2",(function(){b.mb.alert({"theme":"round-button","message":g})})),h()(r()(e),"onClickAlert",(function(){b.mb.alert({"title":"标题","message":g})})),h()(r()(e),"onClickAlert2",(function(){b.mb.alert({"message":g})})),h()(r()(e),"onClickConfirm",(function(){b.mb.confirm({"title":"标题","message":g})})),h()(r()(e),"onClickAsyncClose",(function(){b.mb.confirm({"title":"标题","message":g,"beforeClose":function beforeClose(e){return new Promise((function(n){setTimeout((function(){n("confirm"===e)}),1e3)}))}}).catch((function(e){console.log(e)}))})),h()(r()(e),"onClose",(function(){e.setState({"show":!1})})),e}return s()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(C.jsx)(k.a,{"title":"Dialog 弹出框","children":Object(C.jsxs)(C.Fragment,{"children":[Object(C.jsxs)(x.a,{"card":!0,"title":"提示弹窗","padding":!0,"children":[Object(C.jsx)(b.f,{"title":"提示弹窗","onClick":this.onClickAlert,"isLink":!0}),Object(C.jsx)(b.f,{"title":"提示弹窗（无标题）","onClick":this.onClickAlert2,"isLink":!0}),Object(C.jsx)(b.f,{"title":"确认弹窗","onClick":this.onClickConfirm,"isLink":!0})]}),Object(C.jsxs)(x.a,{"card":!0,"title":"圆角按钮样式","padding":!0,"children":[Object(C.jsx)(b.f,{"title":"提示弹窗","onClick":this.onClickThemeAlert,"isLink":!0}),Object(C.jsx)(b.f,{"title":"提示弹窗（无标题）","onClick":this.onClickThemeAlert2,"isLink":!0})]}),Object(C.jsx)(x.a,{"card":!0,"title":"异步关闭","padding":!0,"children":Object(C.jsx)(b.f,{"title":"异步关闭","onClick":this.onClickAsyncClose})}),Object(C.jsx)(x.a,{"card":!0,"title":"组件调用","padding":!0,"children":Object(C.jsx)(b.f,{"title":"组件调用","onClick":this.showCustomDialog})}),Object(C.jsx)(b.q,{"title":"标题","show":e,"showCancelButton":!0,"onClose":this.onClose,"confirmButtonOpenType":"getUserInfo","onGetuserinfo":this.getUserInfo,"children":Object(C.jsx)(b.C,{"className":"demo-image","src":"https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"})}),Object(C.jsx)(b.q,{"id":"van-dialog"})]})})}}]),Index}(j.Component)}}]);