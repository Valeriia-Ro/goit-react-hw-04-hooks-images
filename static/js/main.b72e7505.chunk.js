(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3_rsu",Modal:"Modal_Modal__2_z7i"}},22:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1GlZQ"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30gG0"}},25:function(e,t,a){e.exports={body:"Button_body__2AGb0",Button:"Button_Button__qJM_J"}},6:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__2kUWA",SearchForm_button:"SearchForm_SearchForm_button__2Q9X6","SearchForm_button-label":"SearchForm_SearchForm_button-label__XD7B0",SearchForm_input:"SearchForm_SearchForm_input__3HKqq"}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),i=a(12),l=a(4),s=a(11),u=a.n(s),m=a(1);function b(e){var t=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&(console.log("close modal"),t())};return Object(m.jsx)("div",{className:u.a.Overlay,onClick:function(e){console.log("bkdr ckick"),e.currentTarget===e.target&&t()},children:Object(m.jsx)("div",{className:u.a.Modal,children:""})})}var j=function(e){var t=e.children;return Object(m.jsx)("div",{children:t})},h=a(22),d=a.n(h),f=a(6),_=a.n(f);function O(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],r=c[1];return Object(m.jsx)("header",{className:d.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o?t(o):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443")},className:_.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:_.a.SearchForm_button,children:Object(m.jsx)("span",{className:_.a.SearchForm_button_label})}),Object(m.jsx)("input",{className:_.a.SearchForm_input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.currentTarget.value.trim();r(t)},value:o})]})})}var g=a(23),p=a.n(g),S=a(8),x=a.n(S),v=function(e){var t=e.url,a=e.alt;return Object(m.jsx)("img",{src:t,alt:a,className:x.a.ImageGalleryItem_image})},y=function(e){var t=e.images,a=e.openModal;return Object(m.jsx)("ul",{className:p.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.tags,o=e.largeImageURL;return Object(m.jsx)("li",{className:x.a.ImageGalleryItem,onClick:function(){a(o,c)},children:Object(m.jsx)(v,{url:n,alt:c})},t)}))})},I=a(24),w=a.n(I),F=function(e){var t=e.searchImage,a=void 0===t?"":t,n=e.currentPage,c=void 0===n?1:n;return w.a.get("".concat("https://pixabay.com/api","/?q=").concat(a,"&page=").concat(c,"&key=").concat("21418455-02afedd09f38bf37a8407aa32","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},k=a(25),G=a.n(k),M=function(e){var t=e.onClick;return Object(m.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:"Load more"})},N=a(26),B=a.n(N),C=function(){return Object(m.jsx)("div",{className:"spinner-conteiner",children:Object(m.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})};a(71);function E(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(l.a)(o,2),s=r[0],u=r[1],h=Object(n.useState)([]),d=Object(l.a)(h,2),f=d[0],_=d[1],g=Object(n.useState)(!1),p=Object(l.a)(g,2),S=p[0],x=p[1],v=Object(n.useState)(""),I=Object(l.a)(v,2),w=I[0],k=(I[1],Object(n.useState)("")),G=Object(l.a)(k,2),N=G[0],B=(G[1],Object(n.useState)(1)),E=Object(l.a)(B,2),L=E[0],q=E[1],J=Object(n.useState)(null),A=Object(l.a)(J,2),T=A[0],U=(A[1],function(){z(),q(L+1)}),z=function(){x((function(e){return!e}))};Object(n.useEffect)((function(){if(s){var e=F(s);U(),_(e)}}),[U,s]),Object(n.useEffect)((function(){if(D(),s)try{F(s,L).then((function(e){_((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),U()}))}catch(T){}}),[L,U,s]);var D=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(m.jsxs)(j,{children:[Object(m.jsx)(O,{onSubmit:function(e){U(),u(e)}}),T&&Object(m.jsx)("h1",{children:" Something went wrong"}),Object(m.jsx)(y,{images:f,openModal:function(e,t){c((function(a){return{showModal:!a.showModal,modalImg:e,modalAlt:t}}))}}),S&&Object(m.jsx)(C,{}),z&&Object(m.jsx)(M,{onClick:U}),a&&Object(m.jsx)(b,{onClose:function(){c((function(e){return{showModal:!e.showModal}}))},children:Object(m.jsx)("img",{src:w,alt:N})})]})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Z3sw5",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1Nw2W"}}},[[72,1,2]]]);
//# sourceMappingURL=main.b72e7505.chunk.js.map