(function(t){function n(n){for(var a,c,i=n[0],s=n[1],r=n[2],m=0,u=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);g&&g(n);while(u.length)u.shift()();return l.push.apply(l,r||[]),e()}function e(){for(var t,n=0;n<l.length;n++){for(var e=l[n],a=!0,i=1;i<e.length;i++){var s=e[i];0!==o[s]&&(a=!1)}a&&(l.splice(n--,1),t=c(c.s=e[0]))}return t}var a={},o={app:0},l=[];function c(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)c.d(e,a,function(n){return t[n]}.bind(null,a));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var r=0;r<i.length;r++)n(i[r]);var g=s;l.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[e("div",{staticClass:"app-Inner"},[t._m(0),e("div",{staticClass:"mainValues"}),e("div",{staticClass:"Form"},[e("div",{staticClass:"Form-InputField"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cityPick,expression:"cityPick"}],staticClass:"Form-Input",attrs:{type:"text",placeholder:"check golden hour in other places"},domProps:{value:t.cityPick},on:{input:function(n){n.target.composing||(t.cityPick=n.target.value)}}})]),e("div",{staticClass:"Form-Results Result"})]),e("div")]),e("div",{staticClass:"map"}),e("div",{staticClass:"app-after",on:{click:function(n){return t.removeResults()}}})])},l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("h2",{staticClass:"title"},[t._v("GOLDEN HOUR")])])}],c=(e("99af"),e("4160"),e("caad"),e("b0c0"),e("ac1f"),e("2532"),e("1276"),e("159b"),e("bc3a")),i=e.n(c),s=e("83b6"),r={name:"App",data:function(){return{myCityDB:s,newMyCityDB:[],width:0,height:0,cityPick:""}},mounted:function(){this.goldenHours(),this.cityConfirm()},methods:{getLocation:function(){var t=navigator.geolocation;if(t)t.getCurrentPosition(e);else{var n=document.querySelector(".location");n.innerHTML="CHUJ"}function e(t){var n=document.querySelector(".location"),e=document.querySelector(".btn-location");e.classList.add("btn-location_out"),i.a.get("https://api.sunrise-sunset.org/json?lat=".concat(t.coords.latitude,"&lng=").concat(t.coords.longitude)).then((function(t){n.classList.add("location_animate"),e.innerHTML="",n.innerHTML="Sunrise: ".concat(t.data.results.sunrise," Sunset: ").concat(t.data.results.sunset)})).catch((function(t){console.log(t)}))}},goldenHours:function(){var t=navigator.geolocation;if(t)t.getCurrentPosition(e);else{var n=document.querySelector(".location");n.innerHTML="CHUJ"}function e(t){var n=document.querySelector(".mainValues");setTimeout((function(){i.a.get("https://api.sunrise-sunset.org/json?lat=".concat(t.coords.latitude,"&lng=").concat(t.coords.longitude)).then((function(t){function e(t,e){var a=null,o=null,l=null,c=null,i=null,s=null,r=null,g=null,m=null,u=null;a=t.split(":"),o=e.split(":"),l=a[2].split(" "),c=o[2].split(" "),i=parseInt(a[0],10),s=parseInt(o[0],10),m=parseInt(a[1],10),u=parseInt(o[1],10),r=i+1,g=s-1;var d=new Date,p=d.getTimezoneOffset();p=-1*p/60,i+=p,s+=p,r+=p,g+=p,i>12&&(i-=12,l[1]="AM"),r>12&&(r-=12,l[1]="AM"),s>12&&(s-=12,c[1]="PM"),g>12&&(g-=12,c[1]="PM"),m>59?(m-=60,i+=1,r+=1):m<0&&(m+=60,i-=1,r-=1),u>59?(u-=60,s+=1,g+=1):u<0&&(u+=60,s-=1,g-=1),n.innerHTML="Morning: ".concat(i,":").concat(m," ").concat(l[1]," - ").concat(r,":").concat(m," ").concat(l[1]," <br />\n                Evening: ").concat(g,":").concat(u," ").concat(c[1]," - ").concat(s,":").concat(u," ").concat(c[1])}e(t.data.results.sunrise,t.data.results.sunset)})).catch((function(t){console.log(t)}))}),500)}},cityConfirm:function(){this.newMyCityDB=this.myCityDB.cities},clickcoordsResult:function(t,n,e,a,o,l){setTimeout((function(){i.a.get("https://api.sunrise-sunset.org/json?lat=".concat(t,"&lng=").concat(n)).then((function(t){function n(t,n){var c=null,i=null,s=null,r=null,g=null,m=null,u=null,d=null,p=null,f=null;c=t.split(":"),i=n.split(":"),s=c[2].split(" "),r=i[2].split(" "),g=parseInt(c[0],10),m=parseInt(i[0],10),p=parseInt(c[1],10),f=parseInt(i[1],10),u=g+1,d=m-1,g+=o,m+=o,u+=o,d+=o,p+=l,f+=l,console.log(m),g>12?(g-=12,s[1]="AM"):g<0&&(g+=12,r[1]="AM"),u>12?(u-=12,s[1]="AM"):u<0&&(u+=12,r[1]="AM"),m>12?(m-=12,r[1]="PM"):m<0&&(m+=12,r[1]="PM"),d>12?(d-=12,r[1]="PM"):d<0&&(d+=12,r[1]="PM"),p>59?(p-=60,g+=1,u+=1):p<0&&(p+=60,g-=1,u-=1),f>59?(f-=60,m+=1,d+=1):f<0&&(f+=60,m-=1,d-=1),e.innerHTML="".concat(a," <br /> ").concat(g,":").concat(p," ").concat(s[1]," - ").concat(u,":").concat(p," ").concat(s[1]," <br />\n                ").concat(d,":").concat(f," ").concat(r[1]," - ").concat(m,":").concat(f," ").concat(r[1])}n(t.data.results.sunrise,t.data.results.sunset)})).catch((function(t){console.log(t)}))}),10)},coordsResult:function(t,n,e,a,o,l){var c=this;e.innerHTML="".concat(a),e.addEventListener("click",(function(){c.clickcoordsResult(t,n,e,a,o,l)}))}},watch:{cityPick:function(){var t=this,n=document.querySelector(".home"),e=document.querySelector(".Form-Results"),a=document.querySelector(".mainValues"),o=document.querySelector(".app-after"),l=document.querySelector(".app-Inner"),c=e.lastElementChild;while(c)e.removeChild(c),c=e.lastElementChild;if(""===this.cityPick)setTimeout((function(){l.style.cssText="justify-content: center;",a.style.cssText="display: flex",o.style.cssText="opacity: 0;",e.style.cssText="",n.style.cssText="";while(c)e.removeChild(c),c=e.lastElementChild}),10);else{var i=0,s=window.innerWidth;e.style.cssText="height: 80vh",n.style.cssText="height: 10vh",l.style.cssText="height: 100vh;",a.style.cssText="opacity: 0; height: 0px; margin-bottom: 0px;",o.style.cssText="opacity: 0.7;",setTimeout((function(){a.style.cssText="display: none; opacity: 0; height: 0px;"}),200),this.myCityDB.cities.forEach((function(n){var a=n.name.toUpperCase(),o=a.includes(t.cityPick.toUpperCase());if(console.log(s),!0===o)if(i<10&&s>=1440){console.log(s);var l=document.createElement("div");l.classList.add("Result-City"),t.coordsResult(n.lat,n.long,l,n.name,n.gmtH,n.gmtM),e.appendChild(l),i+=1}else if(i<3&&s<1440&&s>769){console.log(s);var c=document.createElement("div");c.classList.add("Result-City"),t.coordsResult(n.lat,n.long,c,n.name,n.gmtH,n.gmtM),e.appendChild(c),i+=1}else if(i<1&&s<768){console.log(s);var r=document.createElement("div");r.classList.add("Result-City"),t.coordsResult(n.lat,n.long,r,n.name,n.gmtH,n.gmtM),e.appendChild(r),i+=1}}))}}}},g=r,m=(e("5c0b"),e("2877")),u=Object(m["a"])(g,o,l,!1,null,null,null),d=u.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var a=e("9c0c"),o=e.n(a);o.a},"83b6":function(t){t.exports=JSON.parse('{"cities":[{"name":"Shanghai","lat":31.23,"long":121.47,"gmtH":8,"gmtM":0},{"name":"Bombay","lat":18.96,"long":72.82,"gmtH":5,"gmtM":30},{"name":"Karachi","lat":24.86,"long":67.01,"gmtH":5,"gmtM":0},{"name":"Buenos Aires","lat":-34.61,"long":-58.37,"gmtH":-3,"gmtM":0},{"name":"Delhi","lat":28.67,"long":77.21,"gmtH":5,"gmtM":30},{"name":"Istanbul","lat":41.1,"long":29,"gmtH":3,"gmtM":0},{"name":"Manila","lat":14.62,"long":120.97,"gmtH":8,"gmtM":0},{"name":"Sao Paulo","lat":-23.53,"long":-46.63,"gmtH":-3,"gmtM":0},{"name":"Moscow","lat":55.75,"long":37.62,"gmtH":3,"gmtM":0},{"name":"Dhaka","lat":23.7,"long":90.39,"gmtH":6,"gmtM":0},{"name":"Soul","lat":37.56,"long":126.99,"gmtH":9,"gmtM":0},{"name":"Lagos","lat":6.5,"long":3.35,"gmtH":1,"gmtM":0},{"name":"Kinshasa","lat":-4.31,"long":15.32,"gmtH":1,"gmtM":0},{"name":"Tokyo","lat":35.67,"long":139.77,"gmtH":9,"gmtM":0},{"name":"Mexico City","lat":19.43,"long":-99.14,"gmtH":-5,"gmtM":0},{"name":"Jakarta","lat":-6.18,"long":106.83,"gmtH":7,"gmtM":0},{"name":"New York","lat":40.67,"long":-73.94,"gmtH":-4,"gmtM":0},{"name":"Tehran","lat":35.67,"long":51.43,"gmtH":4,"gmtM":30},{"name":"Cairo","lat":30.06,"long":31.25,"gmtH":2,"gmtM":0},{"name":"Lima","lat":-12.07,"long":-77.05,"gmtH":-5,"gmtM":0},{"name":"Peking","lat":39.93,"long":116.4,"gmtH":8,"gmtM":0},{"name":"London","lat":51.52,"long":-0.1,"gmtH":1,"gmtM":0},{"name":"Bogota","lat":4.63,"long":-74.09,"gmtH":-5,"gmtM":0},{"name":"Lahore","lat":31.56,"long":74.35,"gmtH":5,"gmtM":0},{"name":"Rio de Janeiro","lat":-22.91,"long":-43.2,"gmtH":-3,"gmtM":0},{"name":"Bangkok","lat":13.73,"long":100.5,"gmtH":7,"gmtM":0},{"name":"Bagdad","lat":33.33,"long":44.44,"gmtH":3,"gmtM":0},{"name":"Bangalore","lat":12.97,"long":77.56,"gmtH":5,"gmtM":30},{"name":"Santiago","lat":-33.46,"long":-70.64,"gmtH":-4,"gmtM":0},{"name":"Calcutta","lat":22.57,"long":88.36,"gmtH":5,"gmtM":30},{"name":"Singapore","lat":1.3,"long":103.85,"gmtH":8,"gmtM":0},{"name":"Toronto","lat":43.65,"long":-79.38,"gmtH":-4,"gmtM":0},{"name":"Rangoon","lat":16.79,"long":96.15,"gmtH":6,"gmtM":30},{"name":"Ibadan","lat":7.38,"long":3.93,"gmtH":1,"gmtM":0},{"name":"Riyadh","lat":24.65,"long":46.77,"gmtH":3,"gmtM":0},{"name":"Madras","lat":13.09,"long":80.27,"gmtH":5,"gmtM":30},{"name":"Chongqing","lat":29.57,"long":106.58,"gmtH":8,"gmtM":0},{"name":"Ho Chi Minh City","lat":10.78,"long":106.69,"gmtH":7,"gmtM":0},{"name":"Xian","lat":34.27,"long":108.9,"gmtH":8,"gmtM":0},{"name":"Wuhan","lat":30.58,"long":114.27,"gmtH":8,"gmtM":0},{"name":"Alexandria","lat":31.22,"long":29.95,"gmtH":2,"gmtM":0},{"name":"Saint Petersburg","lat":59.93,"long":30.32,"gmtH":3,"gmtM":0},{"name":"Hyderabad","lat":17.4,"long":78.48,"gmtH":5,"gmtM":30},{"name":"Chengdu","lat":30.67,"long":104.07,"gmtH":8,"gmtM":0},{"name":"Abidjan","lat":5.33,"long":-4.03,"gmtH":0,"gmtM":0},{"name":"Ankara","lat":39.93,"long":32.85,"gmtH":3,"gmtM":0},{"name":"Ahmadabad","lat":23.03,"long":72.58,"gmtH":5,"gmtM":30},{"name":"Los Angeles","lat":34.11,"long":-118.41,"gmtH":-7,"gmtM":0},{"name":"Osaka","lat":34.68,"long":135.5,"gmtH":9,"gmtM":0}]}')},"9c0c":function(t,n,e){}});
//# sourceMappingURL=app.274c9a02.js.map