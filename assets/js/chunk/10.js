(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"282":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));var a=n(281),c=n(280),r=n(28),o=n(27),s=(n(283),n(44));function Page(t){var n=t.title,i=t.children;return Object(o.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(r.pageScrollTo)({"scrollTop":0})})),Object(s.jsxs)(c.m,{"className":"demo-page","children":[Object(s.jsxs)(c.m,{"className":"demo-nav","children":[Object(s.jsx)(a.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(s.jsxs)(c.m,{"className":"demo-nav__title","children":[n," "]})]}),i]})}}).call(this,n(121))},"283":function(e,t,n){},"284":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(3),c=n.n(a),r=n(6),o=n.n(r),s=n(16),i=n.n(s),l=n(17),d=n.n(l),h=n(280),u=n(27),b=(n(285),n(44)),x=function(e){i()(Index,e);var t=d()(Index);function Index(){return c()(this,Index),t.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,a=e.card;return Object(b.jsxs)(h.m,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(b.jsx)(h.m,{"className":"demo-block__title","children":n}),a?Object(b.jsx)(h.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.Component)},"285":function(e,t,n){},"288":function(e,t,n){var a=n(18),c=n(15),r=n(76),o=c("species");e.exports=function(e){return r>=51||!a((function(){var t=[];return(t.constructor={})[o]=function(){return{"foo":1}},1!==t[e](Boolean).foo}))}},"291":function(e,t,n){"use strict";var a=n(35),c=n(301).map;a({"target":"Array","proto":!0,"forced":!n(288)("map")},{"map":function map(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"722":function(e,t,n){},"774":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(3),c=n.n(a),r=n(6),o=n.n(r),s=n(24),i=n.n(s),l=n(16),d=n.n(l),h=n(17),u=n.n(h),b=n(9),x=n.n(b),j=(n(291),n(27)),m=n(281),g=n(282),k=n(284),f=(n(722),n(44)),v=function(e){d()(Index,e);var t=u()(Index);function Index(){var e;return c()(this,Index),e=t.call(this),x()(i()(e),"state",{"checkbox1":!0,"checkbox2":!0,"checkbox3":!0,"checkboxLabel":!0,"checkboxSize":!0,"checkboxShape":!0,"list":["a","b","c"],"result":["a","b"],"result2":[],"result3":[],"result4":[],"activeIcon":"https://img.yzcdn.cn/vant/user-active.png","inactiveIcon":"https://img.yzcdn.cn/vant/user-inactive.png"}),x()(i()(e),"onChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(x()({},n,t.detail))})),x()(i()(e),"onClick",(function(t){var n=t.currentTarget.dataset.value;e.setState({"radio3":n})})),x()(i()(e),"toggle",(function(t){var n=t.currentTarget.dataset,a=n.index,c=n.name,r=e.state[c];r[a]=!r[a],e.setState(x()({},c,r))})),x()(i()(e),"noop",(function(){})),e}return o()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.checkbox1,a=t.checkboxShape,c=t.checkbox2,r=t.checkboxSize,o=t.checkbox3,s=t.activeIcon,i=t.inactiveIcon,l=t.checkboxLabel,d=t.result,h=t.list,u=t.result4,b=t.result2,x=t.result3;return Object(f.jsx)(g.a,{"title":"Checkbox 复选框","children":Object(f.jsxs)(f.Fragment,{"children":[Object(f.jsx)(k.a,{"title":"基本用法","children":Object(f.jsx)(m.h,{"value":n,"className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkbox1"}},"target":{"dataset":{"key":"checkbox1"}}})},"children":"复选框"})}),Object(f.jsxs)(k.a,{"title":"禁用状态","children":[Object(f.jsx)(m.h,{"disabled":!0,"value":!1,"className":"demo-checkbox","children":"复选框"}),Object(f.jsx)(m.h,{"disabled":!0,"value":!0,"className":"demo-checkbox","children":"复选框"})]}),Object(f.jsx)(k.a,{"title":"自定义形状","children":Object(f.jsx)(m.h,{"value":a,"shape":"square","className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkboxShape"}},"target":{"dataset":{"key":"checkboxShape"}}})},"children":"复选框"})}),Object(f.jsx)(k.a,{"title":"自定义颜色","children":Object(f.jsx)(m.h,{"value":c,"checkedColor":"#07c160","className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkbox2"}},"target":{"dataset":{"key":"checkbox2"}}})},"children":"复选框"})}),Object(f.jsx)(k.a,{"title":"自定义大小","children":Object(f.jsx)(m.h,{"iconSize":"25px","value":r,"className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkboxSize"}},"target":{"dataset":{"key":"checkboxSize"}}})},"children":"复选框"})}),Object(f.jsx)(k.a,{"title":"自定义图标","children":Object(f.jsx)(m.h,{"value":o,"className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkbox3"}},"target":{"dataset":{"key":"checkbox3"}}})},"renderIcon":Object(f.jsx)(f.Fragment,{"children":Object(f.jsx)(m.C,{"className":"icon","mode":"widthFix","src":o?s:i})}),"children":"自定义图标"})}),Object(f.jsx)(k.a,{"title":"禁用文本点击","children":Object(f.jsx)(m.h,{"labelDisabled":!0,"value":l,"className":"demo-checkbox","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"checkboxLabel"}},"target":{"dataset":{"key":"checkboxLabel"}}})},"children":"复选框"})}),Object(f.jsx)(k.a,{"title":"复选框组","children":Object(f.jsx)(m.i,{"value":d,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"result"}},"target":{"dataset":{"key":"result"}}})},"children":h.map((function(e){return Object(f.jsx)(m.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(f.jsx)(k.a,{"title":"水平排列","children":Object(f.jsx)(m.i,{"direction":"horizontal","value":u,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"result4"}},"target":{"dataset":{"key":"result4"}}})},"children":h.map((function(e){return Object(f.jsx)(m.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(f.jsx)(k.a,{"title":"限制最大可选数","children":Object(f.jsx)(m.i,{"value":b,"max":"2","onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"result2"}},"target":{"dataset":{"key":"result2"}}})},"children":h.map((function(e){return Object(f.jsx)(m.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(f.jsx)(k.a,{"title":"搭配单元格组件使用","children":Object(f.jsx)(m.i,{"value":x,"data-key":"result3","children":Object(f.jsx)(m.g,{"children":h.map((function(t,n){return Object(f.jsx)(m.f,{"title":"复选框 "+t,"valueClass":"value-class","clickable":!0,"data-index":n,"data-name":"result3","children":Object(f.jsx)(m.h,{"value":x[n],"onChange":function onChange(t){e.toggle({"detail":t.detail,"currentTarget":{"dataset":{"index":n,"name":"result3"}},"target":{"dataset":{"index":n,"name":"result3"}}})},"className":"checkboxes-"+n,"name":t})},t)}))})})})]})})}}]),Index}(j.Component)}}]);