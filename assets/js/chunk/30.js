(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"282":function(t,o,n){"use strict";(function(t){n.d(o,"a",(function(){return Page}));var e=n(281),c=n(280),s=n(31),i=n(27),a=(n(283),n(44));function Page(o){var n=o.title,d=o.children,r=s.default.useRouter();return Object(i.useEffect)((function(){"react"===t.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(s.pageScrollTo)({"scrollTop":0})}),[r.path]),Object(a.jsxs)(c.View,{"className":"demo-page","children":[Object(a.jsxs)(c.View,{"className":"demo-nav","children":[Object(a.jsx)(e.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(a.jsxs)(c.View,{"className":"demo-nav__title","children":[n," "]})]}),d]})}}).call(this,n(121))},"283":function(t,o,n){},"284":function(t,o,n){"use strict";n.d(o,"a",(function(){return b}));var e=n(3),c=n.n(e),s=n(6),i=n.n(s),a=n(16),d=n.n(a),r=n(17),l=n.n(r),j=n(280),x=n(27),u=(n(285),n(44)),b=function(t){d()(Index,t);var o=l()(Index);function Index(){return c()(this,Index),o.call(this)}return i()(Index,[{"key":"render","value":function render(){var t=this.props,o=t.padding,n=t.title,e=t.card;return Object(u.jsxs)(j.View,{"className":"custom-class demo-block van-clearfix "+(o?"demo-block--padding":""),"children":[n&&Object(u.jsx)(j.View,{"className":"demo-block__title","children":n}),e?Object(u.jsx)(j.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(x.Component)},"285":function(t,o,n){},"723":function(t,o,n){},"775":function(t,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return I}));var e=n(3),c=n.n(e),s=n(6),i=n.n(s),a=n(24),d=n.n(a),r=n(16),l=n.n(r),j=n(17),x=n.n(j),u=n(9),b=n.n(u),h=n(27),O=n(281),p=n(282),f=n(284),m=(n(723),n(44)),I=function(t){l()(Index,t);var o=x()(Index);function Index(){var t;return c()(this,Index),t=o.call(this),b()(d()(t),"onClickIcon",(function(){Object(O.toast)("点击图标")})),b()(d()(t),"onClickButton",(function(){Object(O.toast)("点击按钮")})),t}return i()(Index,[{"key":"render","value":function render(){return Object(m.jsx)(p.a,{"title":"GoodsAction 商品导航","children":Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(f.a,{"title":"基础用法","children":Object(m.jsxs)(O.GoodsAction,{"className":"goods-action-position","safeAreaInsetBottom":!1,"children":[Object(m.jsx)(O.GoodsActionIcon,{"icon":"chat-o","text":"客服","openType":"contact"}),Object(m.jsx)(O.GoodsActionIcon,{"icon":"cart-o","text":"购物车","onClick":this.onClickIcon}),Object(m.jsx)(O.GoodsActionButton,{"text":"加入购物车","type":"warning","onClick":this.onClickButton}),Object(m.jsx)(O.GoodsActionButton,{"text":"立即购买","onClick":this.onClickButton})]})}),Object(m.jsx)(f.a,{"title":"提示信息","children":Object(m.jsxs)(O.GoodsAction,{"className":"goods-action-position","safeAreaInsetBottom":!1,"children":[Object(m.jsx)(O.GoodsActionIcon,{"icon":"chat-o","text":"客服","dot":!0}),Object(m.jsx)(O.GoodsActionIcon,{"icon":"cart-o","text":"购物车","info":"5"}),Object(m.jsx)(O.GoodsActionIcon,{"icon":"shop-o","text":"店铺"}),Object(m.jsx)(O.GoodsActionButton,{"text":"加入购物车","type":"warning"}),Object(m.jsx)(O.GoodsActionButton,{"text":"立即购买"})]})}),Object(m.jsx)(f.a,{"title":"自定义按钮颜色","children":Object(m.jsxs)(O.GoodsAction,{"className":"goods-action-position","safeAreaInsetBottom":!1,"children":[Object(m.jsx)(O.GoodsActionIcon,{"icon":"chat-o","text":"客服"}),Object(m.jsx)(O.GoodsActionIcon,{"icon":"shop-o","text":"店铺"}),Object(m.jsx)(O.GoodsActionButton,{"color":"#be99ff","type":"warning","text":"加入购物车"}),Object(m.jsx)(O.GoodsActionButton,{"color":"#7232dd","text":"立即购买"})]})}),Object(m.jsx)(f.a,{"title":"朴素按钮","children":Object(m.jsxs)(O.GoodsAction,{"className":"goods-action-position","safeAreaInsetBottom":!1,"children":[Object(m.jsx)(O.GoodsActionIcon,{"icon":"chat-o","text":"客服"}),Object(m.jsx)(O.GoodsActionIcon,{"icon":"shop-o","text":"店铺"}),Object(m.jsx)(O.GoodsActionButton,{"color":"#7232dd","text":"加入购物车","type":"warning"}),Object(m.jsx)(O.GoodsActionButton,{"type":"primary","plain":!0,"color":"#7232dd","text":"立即购买"})]})}),Object(m.jsx)(O.Toast,{"id":"van-toast"})]})})}}]),Index}(h.Component)}}]);