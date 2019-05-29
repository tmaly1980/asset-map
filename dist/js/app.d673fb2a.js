(function(e){function t(t){for(var n,l,s=t[0],i=t[1],c=t[2],d=0,h=[];d<s.length;d++)l=s[d],a[l]&&h.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={app:0},r=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ac4b0521"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e),r=function(t){i.onerror=i.onload=null,clearTimeout(c);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");l.type=n,l.request=r,o[1](l)}a[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}}),o("router-view")],1)},r=[],l=(o("5c0b"),o("0c7c")),s={},i=Object(l["a"])(s,a,r,!1,null,null,null),c=i.exports,d=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("b-row",[o("b-col",[o("div",{staticClass:"px-4"},[e.creating_watershed?o("div",[o("h3",[e._v("Defining Watershed "+e._s(e.watershed_name))]),e.polygon?o("p",[e._v("Drag the points around to define the watershed")]):o("p",[e._v("Click near the watershed to start drawing boundaries")])]):e._e(),o("GmapMap",{staticStyle:{width:"100%",height:"500px"},attrs:{options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1},center:e.location,zoom:e.zoom},on:{click:e.mapClick}},[e._l(e.watersheds,function(e,t){return o("gmap-polygon",{key:t,attrs:{paths:[e.points],options:{fillColor:e.fillColor}}})}),e.polygon?o("gmap-polygon",{attrs:{paths:[e.polygon],options:{fillColor:e.fillColor},editable:!0},on:{paths_changed:function(t){return e.updateEdited(t)}}}):e._e(),e.place?o("GmapMarker",{attrs:{position:e.place.geometry.location,clickable:!1,draggable:!1},on:{click:function(t){e.center=e.m.position}}}):e._e()],2)],1)]),o("b-col",{staticClass:"mr-3"},[o("h3",[e._v("Watersheds:")]),o("table",{staticClass:"table"},[o("tbody",e._l(e.watersheds,function(t,n){return o("tr",{key:n},[o("td",{style:"background-color: "+t.fillColor},[e._v(e._s(t.name))]),o("td",[o("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.watersheds.splice(n,1)}}},[o("fa-icon",{attrs:{icon:"trash"}})],1)],1)])}),0),o("tfoot",[o("tr",[o("td",[o("b-form-input",{attrs:{placeholder:"Add a watershed"},model:{value:e.watershed_name,callback:function(t){e.watershed_name=t},expression:"watershed_name"}})],1),o("td",[e.watershed_name?o("verte",{attrs:{picker:"square",model:"rgb"},model:{value:e.fillColor,callback:function(t){e.fillColor=t},expression:"fillColor"}}):e._e()],1),o("td",{attrs:{width:"25%"}},[e.creating_watershed?o("div",[o("b-button",{attrs:{variant:"outline-info"},on:{click:e.cancelWatershed}},[e._v("Cancel")]),e.polygon?o("b-button",{staticClass:"mx-2",attrs:{variant:"info",disabled:!e.polygon},on:{click:e.saveWatershed}},[e._v("Save")]):e._e()],1):e._e(),!e.creating_watershed&&e.watershed_name?o("div",[o("b-button",{attrs:{variant:e.watershed_name?"info":null,disabled:!e.watershed_name},on:{click:function(t){e.creating_watershed=!0,e.polygon=null}}},[e._v("Create")])],1):e._e()])])])]),e.watersheds.length>0?o("div",[o("h3",[e._v("Locate Asset:")]),o("gmap-autocomplete",{staticClass:"form-control",attrs:{placeholder:"What's the address?",value:e.address},on:{place_changed:e.setPlace}}),e.locating?o("div",{staticClass:"text-center pt-3"},[o("fa-icon",{attrs:{icon:"spinner",size:"3x",spin:""}})],1):e._e(),e.located?o("div",[e._v("\n          Your watershed is: "+e._s(e.locatedWatershed?e.locatedWatershed.name:"Unknown")+" \n        ")]):e._e()],1):e._e()])],1)],1)},h=[],p=(o("ac6a"),"#CCCCCC"),f={name:"home",components:{},mounted:function(){localStorage.getItem("watersheds")&&(this.watersheds=JSON.parse(localStorage.getItem("watersheds"))),console.log("WS=",this.watersheds)},data:function(){return{location:{lat:35.5951,lng:-82.5515},zoom:9,markers:[],watersheds:[],watershed_name:"",creating_watershed:!1,polygon:null,fillColor:p,address:"",place:null,locating:!1,located:!1,locatedWatershed:null}},computed:{watershedPaths:function(){return this.watersheds.map(function(e){return e.points})}},watch:{},methods:{mapClick:function(e){if(this.creating_watershed&&!this.polygon){var t={lat:e.latLng.lat(),lng:e.latLng.lng()};console.log("CLICK MAP=",t);var o=.1;this.polygon=[{lat:t.lat+o,lng:t.lng+o},{lat:t.lat+o,lng:t.lng-o},{lat:t.lat-o,lng:t.lng-o},{lat:t.lat-o,lng:t.lng+o}],console.log(this.polygon)}},saveWatershed:function(){this.watersheds.push({name:this.watershed_name,points:this.polygon,fillColor:this.fillColor}),console.log(this.watersheds);var e=JSON.stringify(this.watersheds);localStorage.setItem("watersheds",e),this.cancelWatershed()},cancelWatershed:function(){this.polygon=null,this.creating_watershed=!1,this.watershed_name="",this.fillColor=p},updateEdited:function(e){console.log("MVC=",e);for(var t=[],o=0;o<e.getLength();o++){for(var n=[],a=0;a<e.getAt(o).getLength();a++){var r=e.getAt(o).getAt(a);n.push({lat:r.lat(),lng:r.lng()})}t.push(n)}console.log("paths=",t[0]),this.polygon=t[0]},setPlace:function(e){e&&(console.log(e),this.locateWatershed(e))},locateWatershed:function(e){this.place=e,this.address=e.formatted_address;var t=this.place.geometry.location.lat(),o=this.place.geometry.location.lng(),n=new google.maps.LatLng(t,o);console.log("LL=",n),this.located=!1,this.locating=!0,this.locatedWatershed=null;var a=this;this.watersheds.forEach(function(e){var t=new google.maps.Polygon({paths:e.points});console.log("CHECKING",t),google.maps.geometry.poly.containsLocation(n,t)&&(a.locatedWatershed=e)}),this.locating=!1,this.located=!0}}},g=f,m=Object(l["a"])(g,u,h,!1,null,null,null),v=m.exports;n["default"].use(d["a"]);var w=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),b=o("2f62");n["default"].use(b["a"]);var _=new b["a"].Store({state:{},mutations:{},actions:{}}),y=o("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C=o("9f7b"),k=o("ecee"),S=o("ad3d"),j=o("c074"),W=o("f2d1"),x=o("36fc"),O=(o("bbb4"),o("755e"));n["default"].use(C["a"]),k["c"].add(j["a"],W["a"]),n["default"].component("fa-icon",S["a"]),n["default"].component("verte",x["a"]),n["default"].use(O,{load:{key:"AIzaSyBXF7j4I0CI4FPOzI6uZKB6eKjP6Lw1SM8",libraries:"places"}}),n["default"].config.productionTip=!1,window.vueapp=new n["default"]({router:w,store:_,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("eecd"),a=o.n(n);a.a},eecd:function(e,t,o){}});
//# sourceMappingURL=app.d673fb2a.js.map