"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[230],{6132:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(7294),r=n(5444),o=n(7532),s=n(7617),i=n(5697),l=n.n(i);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g(this,n)}}var b={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};b.keyCodes=Object.keys(b).reduce((function(e,t){return e[b[t]]=t,e}),{});var E={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var k=function(e){w(n,a.PureComponent);var t=h(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return m(v(e=t.call.apply(t,[this].concat(o))),"state",{isExpanded:!1,ref:a.createRef(),rowRef:a.createRef(),height:0,rowClassName:"closed"}),m(v(e),"finishTransition",(function(){var t=e.state.isExpanded;e.setState({rowClassName:t?"expanded":"closed"})})),m(v(e),"toggle",(function(t){e.setState((function(){return{isExpanded:t}}))})),m(v(e),"expand",(function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))})),m(v(e),"keyPress",(function(t){var n=t.keyCode?t.keyCode:t.which;switch(b.keyCodes[n]){case"space":case"return":t.preventDefault(),t.stopPropagation(),e.expand()}})),m(v(e),"setHeight",(function(){var t=e.state,n=t.ref,a=t.isExpanded,r=n.current.scrollHeight;e.setState({height:a?r:0})})),e}return d(n,[{key:"getSnapshotBeforeUpdate",value:function(e,t){var n=t.isExpanded,a=this.state.isExpanded,r=this.props.config,o=(r=void 0===r?{}:r).animate,s=void 0===o||o;return a!==n?{rowClassName:a?s?"expanding":"expanded":s?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props.config,r=(a=void 0===a?{}:a).animate,o=void 0===r||r;null!==n&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),o?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.rowRef;if(this.props.getRowOptions){var n={expand:function(){e.toggle(!0)},close:function(){e.toggle(!1)},scrollIntoView:function(e){e?t.current.scrollIntoView(e):t.current.scrollIntoView()}};this.props.getRowOptions(n)}}},{key:"render",value:function(){var e=this.props,t=e.data,n=t.title,r=t.content,o=e.config,s=(o=void 0===o?{}:o).animate,i=void 0===s||s,l=o.arrowIcon,c=o.tabFocus,_=void 0!==c&&c,d=this.state,m=d.isExpanded,u=d.ref,w=d.height,y=d.rowClassName,f=d.rowRef,v={onClick:this.expand,role:"button","aria-expanded":m,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};_&&(v.tabIndex=0);var g={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":m,"aria-hidden":!m,onTransitionEnd:this.finishTransition};i&&(g.style={height:w});var h=["row-title",y,E["row-title"],E[y],_?"":E["no-tabfocus"]].filter(Boolean).join(" "),b=l||a.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(E["arrow-image"]),alt:"Expand arrow"}),k=[E["row-content"],"row-content",i?E.animate:E.static].join(" "),x=[E["row-content-text"],"row-content-text"].join(" "),N=r&&"string"==typeof r?a.createElement("div",{className:x,dangerouslySetInnerHTML:{__html:r}}):a.createElement("div",{className:x},r);return a.createElement("section",{className:"faq-row ".concat(E["faq-row"]),role:"listitem",ref:f},a.createElement("div",p({className:h},v),a.createElement("div",{className:"row-title-text ".concat(E["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},n),a.createElement("span",{className:"icon-wrapper ".concat(E["icon-wrapper"]),"aria-hidden":"true"},b)),a.createElement("div",p({className:k},g,{ref:u}),N))}}]),n}();m(k,"propTypes",{config:l().object,data:l().object,rowid:l().number,getRowOptions:l().func});var x=function(e){w(n,a.PureComponent);var t=h(n);function n(){var e;c(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return m(v(e=t.call.apply(t,[this].concat(r))),"state",{rowsOption:[]}),e}return d(n,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var e=this,t=this.props.data||{},n=t.title,r=t.rows,o=void 0===r?[]:r,s=this.props,i=s.styles,l=void 0===i?{}:i,c=s.config,_=((c=void 0===c?{}:c).animate,{"--faq-bg-color":l.bgColor,"--title-text-color":l.titleTextColor,"--title-text-size":l.titleTextSize,"--row-title-color":l.rowTitleColor,"--row-title-text-size":l.rowTitleTextSize,"--row-content-color":l.rowContentColor,"--row-content-text-size":l.rowContentTextSize,"--row-content-padding-top":l.rowContentPaddingTop,"--row-content-padding-bottom":l.rowContentPaddingBottom,"--row-content-padding-right":l.rowContentPaddingRight,"--row-content-padding-left":l.rowContentPaddingLeft,"--arrow-color":l.arrowColor,"--transition-duration":l.transitionDuration,"--timing-function":l.timingFunc}),d="faq-row-wrapper ".concat(E["faq-row-wrapper"]),m="faq-title ".concat(E["faq-row"]),p="faq-body ".concat(E["row-body"]);return a.createElement("div",{className:d,style:_},n?a.createElement("section",{className:m},a.createElement("h2",null,n)):null,o.length?a.createElement("section",{className:p,role:"list"},o.map((function(t,n){return a.createElement(k,{data:t,key:n,rowid:n+1,config:e.props.config,getRowOptions:function(t){return e.state.rowsOption[n]=t}})}))):null)}}]),n}();m(x,"propTypes",{data:l().object,styles:l().object,config:l().object,getRowOptions:l().func});var N=function(){return a.createElement(o.Z,null,a.createElement("div",{className:"home"},a.createElement("div",{className:"containerinhome"},a.createElement("h2",null," Asah Skillmu sadasda & Raih Mimpimu bersama Kami "),a.createElement("p",null,"segera belajar tentang bahasa inggris dan teknologi untuk dapat skill baru."),a.createElement("a",{href:"https://wa.wizard.id/2993f5"}," Hubungi ")),a.createElement(s.Z,{embedId:"rokGy0huYEA"})),a.createElement("div",{className:"home2"},a.createElement("h2",null,"Benefits"),a.createElement("div",{className:"BenefitsContainer"},a.createElement("div",{className:"left"},a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon1"}),a.createElement("div",null,a.createElement("h3",null,"Rencana pembelajaran yang pas untuk bisnismu"),a.createElement("p",null,"Pembelajaran yang kami berikan sesuai dengan apa yang dibutuhkan bisnis sekarang"))),a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon2"}),a.createElement("div",null,a.createElement("h3",null,"Kenalan dengan pemilik bisnis lain"),a.createElement("p",null,"Berkenalan dengan orang-orang yang memiliki tujuan yang sama, yaitu bekerja dan membuat bisnis"))),a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon3"}),a.createElement("div",null,a.createElement("h3",null,"fasilitas yang nyaman dan keren"),a.createElement("p",null,"Fasilitas yang kami sediakan sangat nyaman dan desainnya juga modern")))),a.createElement("div",{className:"right"},a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon4"}),a.createElement("div",null,a.createElement("h3",null,"Sesi mentoring pribadi eksklusif"),a.createElement("p",null,"Sesi tanya jawab dengan guru yang di sediakan "))),a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon5"}),a.createElement("div",null,a.createElement("h3",null,"Belajar langsung dari ahlinya"),a.createElement("p",null,"Guru yang kami sediakan ahli dalam bidangnya. "))),a.createElement("div",{className:"home2container"},a.createElement("div",{className:"manfaatIcon6"}),a.createElement("div",null,a.createElement("h3",null,"Komunitas Ekslusif"),a.createElement("p",null,"Anda berkesempatan masuk kedalam komunitas alumni kami."))))),a.createElement("div",{className:"pembelajaranKami"},a.createElement("h2",null,"Our Program"),a.createElement("p",null,"Berikut pembelajaran yang kami tawarkan "),a.createElement("div",{className:"pembelajaranKamiDiv"},a.createElement("div",{className:"pembelajaranKamiContainer"},a.createElement("h2",null,"English"),a.createElement("p",null,"bahasa adalah salah satu skill utama untuk bertahan di era sekarang. "),a.createElement(r.Link,{to:"english"}," Selengkapnya ")),a.createElement("div",{className:"pembelajaranKamiContainer"},a.createElement("h2",null,"Technology"),a.createElement("p",null,"Semua skill yang bisa  membawamu bertahan di era sekarang seperti : digital marketing, video editing, dll."),a.createElement(r.Link,{to:"teknologi"}," Selengkapnya ")))),a.createElement("div",{className:"ProsesContainer"},a.createElement("h2",null,"Proses mendaftar"),a.createElement("div",{className:"ProsesContainerChild"},a.createElement("div",{className:"ProsesContainerItem"},a.createElement("div",{className:"circleIcon"}),a.createElement("h3",null,"Hubungi CS"),a.createElement("p",null,"Tekan Tombol Hubungi, yang akan membawa Anda ke nomor CS ")),a.createElement("div",{className:"ProsesContainerItem"},a.createElement("div",{className:"circleIcon"}),a.createElement("h3",null,"Masukkan Data"),a.createElement("p",null,"Masukkan data di form yang di berikan CS")),a.createElement("div",{className:"ProsesContainerItem"},a.createElement("div",{className:"circleIcon"}),a.createElement("h3",null,"Tunggu Konfirmasi"),a.createElement("p",null,"Tunggu Konfirmasi Tim kami untuk mengecek data Anda")),a.createElement("div",{className:"ProsesContainerItem"},a.createElement("div",{className:"circleIcon"}),a.createElement("h3",null,"Datang ke Lokasi"),a.createElement("p",null,"Selanjutnya Anda hanya perlu datang ke kantor")))),a.createElement("div",{className:"testimonyContainer"},a.createElement("div",{className:"profile"},a.createElement("div",{className:"profilePic"}),a.createElement("div",{className:"text"},a.createElement("h4",null,"Jenny Wilson"),a.createElement("p",null,"Vice President"))),a.createElement("div",{className:"testimonyText"},a.createElement("div",{className:"komaAtas"}),a.createElement("p",null,"We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.")))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-afe02e5e0111557cac6a.js.map