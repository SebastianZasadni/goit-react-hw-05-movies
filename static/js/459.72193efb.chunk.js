"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{530:function(t,r,e){e.d(r,{IV:function(){return v},LI:function(){return s},Mc:function(){return p},wH:function(){return f},wr:function(){return i}});var n=e(861),a=e(757),c=e.n(a),u=e(243),o="1c8f6b064eb2a1f6bd306bc5a0f759ec",s=function(){var t=(0,n.Z)(c().mark((function t(r,e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&language=en-US&page=").concat(e,"&api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},459:function(t,r,e){e.r(r),e.d(r,{Cast:function(){return h},default:function(){return l}});var n=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),s=e(689),i=e(530),p="Cast_castCard__QBNdO",f="Cast_castCardImage__p5rzt",v=e(184),h=function(){var t=(0,o.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],h=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.IV)(h);case 3:r=t.sent,e=r.data,c(e.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,t.finish(11);case 13:case"end":return t.stop()}}),t,null,[[0,8,11,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]),(0,v.jsx)("ul",{className:p,children:e.map((function(t){var r=t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):null;return(0,v.jsxs)("li",{children:[t.name,(0,v.jsx)("br",{})," ",(0,v.jsx)("img",{src:r,alt:t.character,className:f})]},t.id)}))})},l=h}}]);
//# sourceMappingURL=459.72193efb.chunk.js.map