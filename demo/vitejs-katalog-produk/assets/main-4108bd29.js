(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();async function C(e,l,t="html"){e&&(t=="html"?e.innerHTML=await l:e.innerText=await l)}var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var V={exports:{}};(function(e,l){(function(t,o){e.exports=o()})(typeof self<"u"?self:G,function(){return function(t){function o(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var i={};return o.m=t,o.c=i,o.d=function(r,n,f){o.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:f})},o.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(n,"a",n),n},o.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},o.p="",o(o.s=0)}([function(t,o,i){function r(c,s){if(!(c instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},f=function(){function c(s,a){for(var d=0;d<a.length;d++){var u=a[d];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}return function(s,a,d){return a&&c(s.prototype,a),d&&c(s,d),s}}(),h=function(){function c(s){var a=this;if(r(this,c),this.config=c.mergeSettings(s),this.selector=typeof this.config.selector=="string"?document.querySelector(this.config.selector):this.config.selector,this.selector===null)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=c.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(d){a[d]=a[d].bind(a)}),this.init()}return f(c,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var s=this.selectorWidth/this.perPage,a=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=s*a+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var d=document.createDocumentFragment();if(this.config.loop)for(var u=this.innerElements.length-this.perPage;u<this.innerElements.length;u++){var m=this.buildSliderFrameItem(this.innerElements[u].cloneNode(!0));d.appendChild(m)}for(var b=0;b<this.innerElements.length;b++){var p=this.buildSliderFrameItem(this.innerElements[b]);d.appendChild(p)}if(this.config.loop)for(var x=0;x<this.perPage;x++){var B=this.buildSliderFrameItem(this.innerElements[x].cloneNode(!0));d.appendChild(B)}this.sliderFrame.appendChild(d),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(s){var a=document.createElement("div");return a.style.cssFloat=this.config.rtl?"right":"left",a.style.float=this.config.rtl?"right":"left",a.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",a.appendChild(s),a}},{key:"resolveSlidesNumber",value:function(){if(typeof this.config.perPage=="number")this.perPage=this.config.perPage;else if(n(this.config.perPage)==="object"){this.perPage=1;for(var s in this.config.perPage)window.innerWidth>=s&&(this.perPage=this.config.perPage[s])}}},{key:"prev",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,a=arguments[1];if(!(this.innerElements.length<=this.perPage)){var d=this.currentSlide;if(this.config.loop)if(this.currentSlide-s<0){this.disableTransition();var u=this.currentSlide+this.innerElements.length,m=this.perPage,b=u+m,p=(this.config.rtl?1:-1)*b*(this.selectorWidth/this.perPage),x=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(p+x)+"px, 0, 0)",this.currentSlide=u-s}else this.currentSlide=this.currentSlide-s;else this.currentSlide=Math.max(this.currentSlide-s,0);d!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),a&&a.call(this))}}},{key:"next",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,a=arguments[1];if(!(this.innerElements.length<=this.perPage)){var d=this.currentSlide;if(this.config.loop)if(this.currentSlide+s>this.innerElements.length-this.perPage){this.disableTransition();var u=this.currentSlide-this.innerElements.length,m=this.perPage,b=u+m,p=(this.config.rtl?1:-1)*b*(this.selectorWidth/this.perPage),x=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(p+x)+"px, 0, 0)",this.currentSlide=u+s}else this.currentSlide=this.currentSlide+s;else this.currentSlide=Math.min(this.currentSlide+s,this.innerElements.length-this.perPage);d!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),a&&a.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(s,a){if(!(this.innerElements.length<=this.perPage)){var d=this.currentSlide;this.currentSlide=this.config.loop?s%this.innerElements.length:Math.min(Math.max(s,0),this.innerElements.length-this.perPage),d!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),a&&a.call(this))}}},{key:"slideToCurrent",value:function(s){var a=this,d=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,u=(this.config.rtl?1:-1)*d*(this.selectorWidth/this.perPage);s?requestAnimationFrame(function(){requestAnimationFrame(function(){a.enableTransition(),a.sliderFrame.style[a.transformProperty]="translate3d("+u+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+u+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var s=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),a=Math.abs(s),d=this.config.multipleDrag?Math.ceil(a/(this.selectorWidth/this.perPage)):1,u=s>0&&this.currentSlide-d<0,m=s<0&&this.currentSlide+d>this.innerElements.length-this.perPage;s>0&&a>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(d):s<0&&a>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(d),this.slideToCurrent(u||m)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(s){["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(s.target.nodeName)!==-1||(s.stopPropagation(),this.pointerDown=!0,this.drag.startX=s.touches[0].pageX,this.drag.startY=s.touches[0].pageY)}},{key:"touchendHandler",value:function(s){s.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(s){if(s.stopPropagation(),this.drag.letItGo===null&&(this.drag.letItGo=Math.abs(this.drag.startY-s.touches[0].pageY)<Math.abs(this.drag.startX-s.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){s.preventDefault(),this.drag.endX=s.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var a=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,d=a*(this.selectorWidth/this.perPage),u=this.drag.endX-this.drag.startX,m=this.config.rtl?d+u:d-u;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*m+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(s){["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(s.target.nodeName)!==-1||(s.preventDefault(),s.stopPropagation(),this.pointerDown=!0,this.drag.startX=s.pageX)}},{key:"mouseupHandler",value:function(s){s.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(s){if(s.preventDefault(),this.pointerDown){s.target.nodeName==="A"&&(this.drag.preventClick=!0),this.drag.endX=s.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var a=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,d=a*(this.selectorWidth/this.perPage),u=this.drag.endX-this.drag.startX,m=this.config.rtl?d+u:d-u;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*m+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(s){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=s.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(s){this.drag.preventClick&&s.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(s,a){if(s<0||s>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var d=s<this.currentSlide,u=this.currentSlide+this.perPage-1===s;(d||u)&&this.currentSlide--,this.innerElements.splice(s,1),this.buildSliderFrame(),a&&a.call(this)}},{key:"insert",value:function(s,a,d){if(a<0||a>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(this.innerElements.indexOf(s)!==-1)throw new Error("The same item in a carousel? Really? Nope 😭");var u=a<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=u?this.currentSlide+1:this.currentSlide,this.innerElements.splice(a,0,s),this.buildSliderFrame(),d&&d.call(this)}},{key:"prepend",value:function(s,a){this.insert(s,0),a&&a.call(this)}},{key:"append",value:function(s,a){this.insert(s,this.innerElements.length+1),a&&a.call(this)}},{key:"destroy",value:function(){var s=arguments.length>0&&arguments[0]!==void 0&&arguments[0],a=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",s){for(var d=document.createDocumentFragment(),u=0;u<this.innerElements.length;u++)d.appendChild(this.innerElements[u]);this.selector.innerHTML="",this.selector.appendChild(d),this.selector.removeAttribute("style")}a&&a.call(this)}}],[{key:"mergeSettings",value:function(s){var a={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},d=s;for(var u in d)a[u]=d[u];return a}},{key:"webkitOrNot",value:function(){return typeof document.documentElement.style.transform=="string"?"transform":"WebkitTransform"}}]),c}();o.default=h,t.exports=o.default}])})})(V);var Y=V.exports;const R=J(Y);function v(e,l="GET",t=null){const o={method:l,headers:{"Content-Type":"application/json"},mode:"no-cors"};return t&&(o.body=JSON.stringify(t)),fetch(e,o).then(i=>{if(!i.ok)throw new Error(`Network response was not ok: ${i.status}`);return i.json()}).catch(i=>{throw i})}function y(){const e=window.location.href,l=e.lastIndexOf("/");return e.substring(0,l)}const K=async()=>{const e="/config/data/imageSlider.json";try{return{imageSlider:await v(y()+e)}}catch(l){console.log(l)}};async function ee(){let e=await K();if(!e)return;const l=e.imageSlider,t=l.data;if(l.status){const o=document.querySelector("#slider");let i=`
    <div class="p-5 w-full overflow-hidden">
      <div class="siema w-full">
      `;if(t.forEach(r=>{i+=`<img src="${r.url}" class="rounded-md w-max" />`}),i+=`
      </div>
    </div>
  `,o){o.innerHTML=i;const r=new R({selector:".siema",duration:200,easing:"ease-in",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});setInterval(()=>r.next(),l.delay*1e3)}}}const te=async()=>{const e="/config/data/navbar.json";try{return await v(y()+e)}catch(l){console.log(l)}},w=async()=>{const e="/config/style/themes.json";try{return await v(y()+e)}catch(l){console.log(l)}};async function le(e){let l=await te(),t=await w();if(!l)return;let i=t[0].navbar;const r=l.logo,n=l.name,f=l.slogan;if(l.status){let h="justify-start";r.position=="center"&&(h="justify-center"),r.position=="right"&&(h="justify-end");let c=`background-image: linear-gradient(${i.bg.rotate}deg, ${i.bg.bgColor.join()});`;return i.bg.backDropBlur&&(c=""),`
    <div id="childNavbar" style="${c}" class="fixed top-0 z-10 backdrop-blur-lg px-5 py-2 flex w-full md:w-[50%] xl:w-[35%]">
        <div class="w-full flex justify-start items-center ">
            <div id="position" class="w-full flex ${h} ${n.status||f.status?"space-x-3":""} items-center text-slate-800">
                ${r.status?`<img src="${r.url}" alt="avatar" style="width: ${r.width}; height: ${r.height}" class="">`:""}
                <div>
                    ${n.status?`<p style="color: ${i.title}" class="text-xl font-semibold">${n.text}</p>`:""}
                    ${f.status?`<p style="color: ${i.slogan}">${f.text}</p>`:""}
                </div>
            </div>
        </div>
    </div>`}else e.remove(),document.getElementById("app").classList.remove("pt-16")}function oe(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
        <path d="M10.8693 21.5102L11.5147 21.8922L10.8693 21.5102ZM11.1288 21.0719L10.4833 20.6899L11.1288 21.0719ZM8.87121 21.0719L9.51663 20.6899L9.51662 20.6899L8.87121 21.0719ZM9.13064 21.5102L8.48523 21.8922L9.13064 21.5102ZM2.30448 17.1308L2.99739 16.8438H2.99739L2.30448 17.1308ZM6.28931 19.585L6.31328 18.8354L6.28931 19.585ZM4.46927 19.2956L4.18225 19.9885H4.18225L4.46927 19.2956ZM17.6955 17.1308L18.3884 17.4178L18.3884 17.4178L17.6955 17.1308ZM13.7107 19.585L13.6867 18.8354L13.7107 19.585ZM15.5307 19.2956L15.8177 19.9885L15.5307 19.2956ZM16.09 6.58944L16.4819 5.94996V5.94996L16.09 6.58944ZM17.4106 7.91001L18.05 7.51814V7.51814L17.4106 7.91001ZM3.91001 6.58944L3.51813 5.94996V5.94996L3.91001 6.58944ZM2.58944 7.91001L1.94996 7.51814H1.94996L2.58944 7.91001ZM7.91637 19.8223L7.53453 20.4679H7.53453L7.91637 19.8223ZM11.5147 21.8922L11.7742 21.4539L10.4833 20.6899L10.2239 21.1282L11.5147 21.8922ZM8.22579 21.4539L8.48523 21.8922L9.77606 21.1282L9.51663 20.6899L8.22579 21.4539ZM10.2239 21.1282C10.1785 21.2049 10.0992 21.25 9.99998 21.25C9.90074 21.25 9.82147 21.2049 9.77606 21.1282L8.48523 21.8922C9.16217 23.0359 10.8378 23.0359 11.5147 21.8922L10.2239 21.1282ZM8.8 6.75H11.2V5.25H8.8V6.75ZM17.25 12.8V13.6H18.75V12.8H17.25ZM2.75 13.6V12.8H1.25V13.6H2.75ZM1.25 13.6C1.25 14.5217 1.24959 15.2504 1.2898 15.8397C1.33047 16.4357 1.41517 16.9436 1.61157 17.4178L2.99739 16.8438C2.88931 16.5828 2.82178 16.2573 2.78632 15.7376C2.75041 15.2112 2.75 14.5422 2.75 13.6H1.25ZM6.31328 18.8354C5.52102 18.81 5.09046 18.7411 4.75628 18.6027L4.18225 19.9885C4.77912 20.2357 5.43744 20.3081 6.26533 20.3346L6.31328 18.8354ZM1.61157 17.4178C2.09367 18.5817 3.01837 19.5064 4.18225 19.9885L4.75628 18.6027C3.95994 18.2728 3.32725 17.6401 2.99739 16.8438L1.61157 17.4178ZM17.25 13.6C17.25 14.5422 17.2496 15.2112 17.2137 15.7376C17.1782 16.2573 17.1107 16.5828 17.0026 16.8438L18.3884 17.4178C18.5848 16.9436 18.6695 16.4357 18.7102 15.8397C18.7504 15.2504 18.75 14.5217 18.75 13.6H17.25ZM13.7346 20.3346C14.5625 20.3081 15.2209 20.2357 15.8177 19.9885L15.2437 18.6027C14.9095 18.7411 14.479 18.81 13.6867 18.8354L13.7346 20.3346ZM17.0026 16.8438C16.6728 17.6401 16.0401 18.2728 15.2437 18.6027L15.8177 19.9885C16.9816 19.5064 17.9063 18.5817 18.3884 17.4178L17.0026 16.8438ZM11.2 6.75C12.5239 6.75 13.4641 6.75079 14.1953 6.82031C14.9154 6.88877 15.3548 7.01855 15.6981 7.22892L16.4819 5.94996C15.8633 5.57089 15.1671 5.40595 14.3373 5.32705C13.5187 5.24921 12.4949 5.25 11.2 5.25V6.75ZM18.75 12.8C18.75 11.5052 18.7508 10.4814 18.673 9.6627C18.5941 8.83288 18.4291 8.13673 18.05 7.51814L16.7711 8.30189C16.9814 8.64518 17.1112 9.08466 17.1797 9.80468C17.2492 10.5359 17.25 11.4761 17.25 12.8H18.75ZM15.6981 7.22892C16.1354 7.4969 16.5031 7.86458 16.7711 8.30189L18.05 7.51814C17.6584 6.879 17.121 6.34163 16.4819 5.94996L15.6981 7.22892ZM8.8 5.25C7.50515 5.25 6.48135 5.24921 5.66269 5.32705C4.83287 5.40595 4.13672 5.57089 3.51813 5.94996L4.30188 7.22892C4.64517 7.01855 5.08465 6.88877 5.80467 6.82031C6.53585 6.75079 7.47611 6.75 8.8 6.75V5.25ZM2.75 12.8C2.75 11.4761 2.75079 10.5359 2.82031 9.80468C2.88877 9.08466 3.01855 8.64518 3.22892 8.30189L1.94996 7.51814C1.57089 8.13673 1.40595 8.83288 1.32705 9.6627C1.24921 10.4814 1.25 11.5052 1.25 12.8H2.75ZM3.51813 5.94996C2.87899 6.34163 2.34162 6.879 1.94996 7.51814L3.22892 8.30189C3.4969 7.86458 3.86458 7.4969 4.30188 7.22892L3.51813 5.94996ZM9.51662 20.6899C9.31582 20.3506 9.13969 20.0516 8.96888 19.8164C8.78917 19.569 8.58327 19.3454 8.29822 19.1768L7.53453 20.4679C7.58064 20.4951 7.64427 20.5451 7.75524 20.6979C7.87511 20.863 8.01082 21.0907 8.2258 21.4539L9.51662 20.6899ZM6.26533 20.3346C6.71078 20.3489 6.99552 20.3587 7.21182 20.3851C7.41631 20.41 7.49305 20.4433 7.53453 20.4679L8.29822 19.1768C8.00853 19.0055 7.70371 18.9339 7.39344 18.8961C7.09498 18.8597 6.73177 18.8488 6.31328 18.8354L6.26533 20.3346ZM11.7742 21.4539C11.9891 21.0907 12.1249 20.863 12.2447 20.6979C12.3557 20.5451 12.4193 20.4951 12.4654 20.4679L11.7018 19.1768C11.4167 19.3454 11.2108 19.569 11.0311 19.8164C10.8603 20.0516 10.6841 20.3506 10.4833 20.6899L11.7742 21.4539ZM13.6867 18.8354C13.2682 18.8488 12.905 18.8597 12.6065 18.8961C12.2963 18.9339 11.9914 19.0055 11.7018 19.1768L12.4654 20.4679C12.5069 20.4433 12.5837 20.41 12.7881 20.3851C13.0044 20.3587 13.2892 20.3489 13.7346 20.3346L13.6867 18.8354Z" fill="${t}"/>
        <path opacity="0.5" d="M21.7145 12.4351L22.4074 12.7221V12.7221L21.7145 12.4351ZM19.685 14.4646L19.972 15.1575H19.972L19.685 14.4646ZM20.2093 2.5526L19.8174 3.19208V3.19208L20.2093 2.5526ZM21.4473 3.79064L22.0868 3.39876V3.39876L21.4473 3.79064ZM8.79058 2.5526L8.3987 1.91312V1.91312L8.79058 2.5526ZM7.55255 3.79064L6.91307 3.39876H6.91307L7.55255 3.79064ZM13.3749 2.75H15.6249V1.25H13.3749V2.75ZM21.2499 8.37503V9.12503H22.7499V8.37503H21.2499ZM21.2499 9.12503C21.2499 10.0089 21.2495 10.6343 21.216 11.1258C21.1829 11.6106 21.1201 11.9101 21.0216 12.1481L22.4074 12.7221C22.5943 12.2709 22.6742 11.7891 22.7125 11.2279C22.7504 10.6735 22.7499 9.98841 22.7499 9.12503H21.2499ZM21.0216 12.1481C20.7171 12.8832 20.1331 13.4672 19.398 13.7717L19.972 15.1575C21.0747 14.7008 21.9507 13.8247 22.4074 12.7221L21.0216 12.1481ZM15.6249 2.75C16.867 2.75 17.7459 2.75079 18.4286 2.81571C19.1002 2.87956 19.5042 3.00013 19.8174 3.19208L20.6012 1.91312C20.0127 1.55247 19.352 1.39674 18.5706 1.32244C17.8004 1.24921 16.838 1.25 15.6249 1.25V2.75ZM22.7499 8.37503C22.7499 7.16201 22.7507 6.19958 22.6775 5.42935C22.6032 4.64796 22.4475 3.98729 22.0868 3.39876L20.8079 4.18251C20.9998 4.49574 21.1204 4.89973 21.1842 5.57133C21.2492 6.25408 21.2499 7.13296 21.2499 8.37503H22.7499ZM19.8174 3.19208C20.2211 3.43945 20.5605 3.77884 20.8079 4.18251L22.0868 3.39876C21.7158 2.79326 21.2067 2.28417 20.6012 1.91312L19.8174 3.19208ZM13.3749 1.25C12.1619 1.25 11.1995 1.24921 10.4293 1.32244C9.64789 1.39674 8.98723 1.55247 8.3987 1.91312L9.18245 3.19208C9.49568 3.00013 9.89967 2.87956 10.5713 2.81571C11.254 2.75079 12.1329 2.75 13.3749 2.75V1.25ZM8.3987 1.91312C7.7932 2.28417 7.28412 2.79326 6.91307 3.39876L8.19203 4.18251C8.43939 3.77884 8.77879 3.43945 9.18245 3.19208L8.3987 1.91312ZM7.78219 6.03896C7.83215 5.07858 7.95706 4.56594 8.19203 4.18251L6.91307 3.39876C6.47594 4.11209 6.33747 4.93717 6.28422 5.96104L7.78219 6.03896ZM18.0249 15.4848C18.7916 15.4593 19.4094 15.3906 19.972 15.1575L19.398 13.7717C19.096 13.8968 18.7039 13.9614 17.9751 13.9857L18.0249 15.4848Z" fill="${t}"/>
        <path opacity="0.5" d="M6.50928 13H6.51828M10 13H10.009M13.491 13H13.5" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}const q=async()=>{const e="/config/data/dataPackage.json";try{return await v(y()+e)}catch(l){console.log(l)}},se=async()=>{const e="/config/data/scanVoucher.json";try{return await v(y()+e)}catch(l){console.log(l)}},ie=async()=>{const e="/config/data/intergram.js";try{const l=await fetch(y()+e);if(!l.ok)throw new Error(`Network response was not ok: ${l.status}`);const t=await l.text();return intergram}catch(l){console.log(l)}};function E(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M10 16.5H6" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M8 13.5H6" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M2 10L22 10" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="${t}" stroke-width="1.5"/>
    </svg>`}function F(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path opacity="0.5" d="M2 12H22M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z" stroke="${t}" stroke-width="1.5"/>
    </svg>`}const re=async()=>{const e="/config/data/currencyFormat.json";try{return await v(y()+e)}catch(l){console.log(l)}};async function $(e=0){const l=await re();return l?new Intl.NumberFormat(l.localeCode,{style:"currency",currency:l.currencyCode,minimumFractionDigits:l.minimumFractionDigits}).format(e):void 0}async function ne(){let e=await q(),l=await w();if(!e)return;let t=0,o=l[t].card,i=l[t].horizontalLine,r=l[t].button,n=l[t].dataPackage,f=`background-image: linear-gradient(${o.rotate}deg, ${o.bg.join()}); color: ${o.color}`,h=`background-image: linear-gradient(${r.rotate}deg, ${r.bg.join()}); color: ${r.color}`,c=`border-bottom: 1px solid ${i.color}`;if(e.status)return`
    <div style="${f}" class="w-full flex flex-col p-3 rounded-2xl">
        <div class="w-full flex flex-col space-y-3">
            <div class="w-full flex space-x-1 justify-start items-center">
                ${E(n.title,"w-5 h-5")}
                <p style="color: ${n.title}">${e.label.title}</p>
            </div>
            <div style="${c}" class="w-full flex"></div>

            <div class="w-full xbg-red-500 flex flex-col space-y-3">
                
            ${(await Promise.all(e.data.map(async(s,a)=>`<div style="background-color: ${s.bgColor}; color: ${s.color};" class="w-full rounded-md shadow-md p-3 flex flex-col space-y-2">
                    <div class="text-sm w-full flex justify-between items-center">
                        <div class="w-full flex space-x-1 justify-start items-center">
                            ${F(s.color,"w-5 h-5")}
                            <p class="">${s.name} ${s.description}</p>
                        </div>
                        <div class="w-max"><p class="font-semibold w-max">${await $(s.price)}</p></div>
                    </div>
                </div>`))).join("")}
            
                
            </div>

            ${e.buttonOrder.status?`<div style="${c}" class="w-full flex"></div>

            <div>
                <a href="${e.buttonOrder.url}" class="w-full font-semibold text-center">
                <button style="${h}" type="button" class="flex p-3 rounded-full shadow-md w-full">
                <p class="w-full text-center">${e.buttonOrder.text}</p>
              </button>
                </a>
            </div>`:""}
            
            
        </div>
    </div>`}function ae(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path opacity="0.5" d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 18.7712 2 15" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M22 15C22 18.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 5.22876 22 9" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 5.22876 2 9" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M2 12H22" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}const O=async()=>{const e="/config/data/pulsa.json";try{return await v(y()+e)}catch(l){console.log(l)}};async function ce(){let e=await O(),l=await w();if(!e)return;let t=0,o=l[t].card,i=l[t].horizontalLine,r=l[t].button,n=l[t].pulsa,f=`background-image: linear-gradient(${o.rotate}deg, ${o.bg.join()}); color: ${o.color}`,h=`background-image: linear-gradient(${r.rotate}deg, ${r.bg.join()}); color: ${r.color}`,c=`border-bottom: 1px solid ${i.color}`;if(e.status)return`
    <div style="${f}" class="w-full flex flex-col p-3 rounded-2xl">
        <div class="w-full flex flex-col space-y-3">
            <div class="w-full flex space-x-1 justify-start items-center">
                ${E(n.title,"w-5 h-5")}
                <p style="color: ${n.title}">${e.label.title}</p>
            </div>
            <div style="${c}" class="w-full flex"></div>

            <div class="w-full xbg-red-500 flex flex-col space-y-3">
                
            ${(await Promise.all(e.data.map(async(s,a)=>`<div style="background-color: ${s.bgColor}; color: ${s.color};" class="w-full rounded-md shadow-md p-3 flex flex-col space-y-2">
                    <div class="text-sm w-full flex justify-between items-center">
                        <div class="w-full flex space-x-1 justify-start items-center">
                            ${F(s.color,"w-5 h-5")}
                            <p class="">${s.name} ${s.description}</p>
                        </div>
                        <div class="w-max"><p class="font-semibold w-max">${await $(s.price)}</p></div>
                    </div>
                </div>`))).join("")}
            
                
            </div>

            ${e.buttonOrder.status?`<div style="${c}" class="w-full flex"></div>

            <div>
                <a href="${e.buttonOrder.url}" class="w-full font-semibold text-center">
                <button style="${h}" type="button" class="flex p-3 rounded-full shadow-md w-full">
                <p class="w-full text-center">${e.buttonOrder.text}</p>
              </button>
                </a>
            </div>`:""}
            
            
        </div>
    </div>`}function de(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg class="${l}"">
      <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M15 19H9" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M16.7481 2.37793L16.664 2.5041C15.908 3.63818 15.5299 4.20525 14.9778 4.54836C14.868 4.61658 14.7539 4.67764 14.6362 4.73115C14.0444 5.00025 13.3629 5.00025 11.9999 5.00025C10.6369 5.00025 9.95539 5.00025 9.36363 4.73115C9.24596 4.67764 9.13187 4.61658 9.02207 4.54836C8.46992 4.20524 8.09189 3.6382 7.33582 2.5041L7.25171 2.37793" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function ue(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M12 12H11.5C10.0955 12 9.39331 12 8.88886 12.3371C8.67048 12.483 8.48298 12.6705 8.33706 12.8889C8 13.3933 8 14.0955 8 15.5C8 16.9045 8 17.6067 8.33706 18.1111C8.48298 18.3295 8.67048 18.517 8.88886 18.6629C9.39331 19 10.0955 19 11.5 19H12M12 12H12.5C13.9045 12 14.6067 12 15.1111 12.3371C15.3295 12.483 15.517 12.6705 15.6629 12.8889C16 13.3933 16 14.0955 16 15.5M12 12V15.5M12 19H12.5C13.9045 19 14.6067 19 15.1111 18.6629C15.3295 18.517 15.517 18.3295 15.6629 18.1111C16 17.6067 16 16.9045 16 15.5M12 19V15.5M12 15.5H16" stroke="${t}" stroke-width="1.5"/>
    </svg>`}globalThis.showDataPackagePage=()=>{C(document.querySelector("#paketData"),ne())};globalThis.showPulsaPage=()=>{C(document.querySelector("#paketData"),ce())};globalThis.openChat=()=>{document.dispatchEvent(new CustomEvent("chatToggled",{detail:!0}));const e=document.getElementById("childNavbar");var l=window.innerWidth;l<=499&&e&&(e.classList.remove("fixed"),e.classList.remove("top-0"),e.classList.remove("z-10"))};async function he(){let e=await O(),l=await q(),t=await se(),o=await ie(),i=await w();if(!l)return;let n=i[0].quickMenu,f=`background-image: linear-gradient(${n.rotate}deg, ${n.bgIcon.join()});`,h=`color: ${n.color}`;return`
    <div class="w-full flex flex-col px-5 space-y-3">
          <div class="w-full flex flex-col space-y-3">
            <div class="w-full grid grid-cols-4 gap-3">
    
            ${e.status?`<div onclick="openTab('tab6'); showPulsaPage()" class="w-full flex flex-col space-y-3 justify-center items-center text-center cursor-pointer">
            <div style="${f}" class="flex justify-center items-center w-16 h-16 p-3 rounded-full">
              ${ue(n.iconColor,"w-12 h-12")}
            </div>
            <p style="${h}" class="w-max text-sm text-center">${e.label.menu}</p>
        </div>`:""}
            
            ${l.status?`<div onclick="openTab('tab6'); showDataPackagePage()" class="w-full flex flex-col space-y-3 justify-center items-center text-center cursor-pointer">
            <div style="${f}" class="flex justify-center items-center w-16 h-16 p-3 rounded-full">
              ${de(n.iconColor,"w-12 h-12")}
            </div>
            <p style="${h}" class="w-max text-sm text-center">${l.label.menu}</p>
        </div>`:""}

            
            

                ${t.status?`<a href="${t.url}"><div class="w-full flex flex-col space-y-3 justify-center items-center text-center">
                <div style="${f}" class="flex justify-center items-center w-16 h-16 p-3 rounded-full">
                  ${ae(n.iconColor,"w-12 h-12")}
                  </div>
               <p style="${h}" class="w-max text-sm text-center">${t.label.menu}</p>
            </div></a>`:""}
    
                ${o.status?`<div id="openChated" onclick="openChat()" class="w-full flex flex-col space-y-3 justify-center items-center text-center cursor-pointer">
                <div style="${f}" class="flex justify-center items-center w-16 h-16 p-3 rounded-full">
                  ${oe(n.iconColor,"w-12 h-12")}
                </div>
                <p style="${h}" class="w-max text-sm text-center">${o.label.menu}</p>
            </div>`:""}
            </div>
          </div>
      </div>`}function fe(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M12 6V10" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function L(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4" stroke="${t}" stroke-width="1.5"/>
      <path d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M8 13V17" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.5" d="M16 13V17" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.5" d="M12 13V17" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}function pe(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M15 18H9" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function me(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M9.50004 2H14.5L15.1518 8.51737C15.3382 10.382 13.874 12 12 12C10.1261 12 8.66184 10.382 8.8483 8.51737L9.50004 2Z" stroke="${t}" stroke-width="1.5"/>
      <path d="M3.32975 5.35133C3.50783 4.46093 3.59687 4.01573 3.77791 3.65484C4.15938 2.89439 4.84579 2.33168 5.66628 2.10675C6.05567 2 6.50969 2 7.41771 2H9.50002L8.77549 9.24527C8.61911 10.8091 7.30318 12 5.73155 12C3.8011 12 2.35324 10.2339 2.73183 8.34093L3.32975 5.35133Z" stroke="${t}" stroke-width="1.5"/>
      <path d="M20.6703 5.35133C20.4922 4.46093 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.5L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M8.75 21.5C8.75 21.9142 9.08579 22.25 9.5 22.25C9.91421 22.25 10.25 21.9142 10.25 21.5H8.75ZM13.75 21.5C13.75 21.9142 14.0858 22.25 14.5 22.25C14.9142 22.25 15.25 21.9142 15.25 21.5H13.75ZM13.75 16.201L14.125 15.5514L13.75 16.201ZM14.299 16.75L13.6495 17.125V17.125L14.299 16.75ZM9.70096 16.75L10.3505 17.125L9.70096 16.75ZM10.25 16.201L10.625 16.8505L10.25 16.201ZM12.5 21.25H11.5V22.75H12.5V21.25ZM4.25 14V11H2.75V14H4.25ZM19.75 11V14H21.25V11H19.75ZM11.5 21.25C9.59318 21.25 8.23851 21.2484 7.21085 21.1102C6.20476 20.975 5.62511 20.7213 5.2019 20.2981L4.14124 21.3588C4.88961 22.1071 5.83855 22.4392 7.01098 22.5969C8.16182 22.7516 9.63558 22.75 11.5 22.75V21.25ZM2.75 14C2.75 15.8644 2.74841 17.3382 2.90313 18.489C3.06076 19.6614 3.39288 20.6104 4.14124 21.3588L5.2019 20.2981C4.77869 19.8749 4.52502 19.2952 4.38976 18.2892C4.25159 17.2615 4.25 15.9068 4.25 14H2.75ZM12.5 22.75C14.3644 22.75 15.8382 22.7516 16.989 22.5969C18.1614 22.4392 19.1104 22.1071 19.8588 21.3588L18.7981 20.2981C18.3749 20.7213 17.7952 20.975 16.7892 21.1102C15.7615 21.2484 14.4068 21.25 12.5 21.25V22.75ZM19.75 14C19.75 15.9068 19.7484 17.2615 19.6102 18.2892C19.475 19.2952 19.2213 19.8749 18.7981 20.2981L19.8588 21.3588C20.6071 20.6104 20.9392 19.6614 21.0969 18.489C21.2516 17.3382 21.25 15.8644 21.25 14H19.75ZM10.25 21.5V18.5H8.75V21.5H10.25ZM13.75 18.5V21.5H15.25V18.5H13.75ZM12 16.75C12.4811 16.75 12.7918 16.7507 13.0273 16.7721C13.2524 16.7925 13.3341 16.8269 13.375 16.8505L14.125 15.5514C13.8178 15.3741 13.4918 15.308 13.1627 15.2782C12.8438 15.2493 12.4535 15.25 12 15.25V16.75ZM15.25 18.5C15.25 18.0465 15.2507 17.6562 15.2218 17.3373C15.192 17.0082 15.1259 16.6822 14.9486 16.375L13.6495 17.125C13.6731 17.1659 13.7075 17.2476 13.7279 17.4727C13.7493 17.7082 13.75 18.0189 13.75 18.5H15.25ZM13.375 16.8505C13.489 16.9163 13.5837 17.011 13.6495 17.125L14.9486 16.375C14.7511 16.033 14.467 15.7489 14.125 15.5514L13.375 16.8505ZM10.25 18.5C10.25 18.0189 10.2507 17.7082 10.2721 17.4727C10.2925 17.2476 10.3269 17.1659 10.3505 17.125L9.05144 16.375C8.87407 16.6822 8.80802 17.0082 8.77818 17.3373C8.74928 17.6562 8.75 18.0465 8.75 18.5H10.25ZM12 15.25C11.5465 15.25 11.1562 15.2493 10.8373 15.2782C10.5082 15.308 10.1822 15.3741 9.875 15.5514L10.625 16.8505C10.6659 16.8269 10.7476 16.7925 10.9727 16.7721C11.2082 16.7507 11.5189 16.75 12 16.75V15.25ZM10.3505 17.125C10.4163 17.011 10.511 16.9163 10.625 16.8505L9.875 15.5514C9.53296 15.7489 9.24892 16.033 9.05144 16.375L10.3505 17.125Z" fill="${t}"/>
    </svg>`}function ge(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <circle opacity="0.5" cx="12" cy="9" r="3" stroke="${t}" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="10" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}const j=async()=>{const e="/config/data/cart.json";try{return await v(y()+e)}catch(l){console.log(l)}},Ce=async()=>{const e="/config/data/home.json";try{return await v(y()+e)}catch(l){console.log(l)}},N=async()=>{const e="/config/data/info.json";try{return await v(y()+e)}catch(l){console.log(l)}},A=async()=>{const e="/config/data/profile.json";try{return await v(y()+e)}catch(l){console.log(l)}},S=async()=>{const e="/config/data/store.json";try{return await v(y()+e)}catch(l){console.log(l)}};function P(e,l,t=30){const o=new Date;o.setDate(o.getDate()+t);const i=`${e}=${l}; expires=${o.toUTCString()}`;document.cookie=i}function k(e){const l=document.cookie.split("; ");for(const t of l){const[o,i]=t.split("=");if(o===e)return i}return null}function M(){const e=k("cart");return e?JSON.parse(e):[]}function I(e){P("cart",JSON.stringify(e))}function H(e,l){const t=M(),o=t.find(i=>i.index===e);o?o.qty+=l:t.push({index:e,qty:l}),I(t)}function X(e,l){const t=M(),o=t.find(i=>i.index===e);o&&(o.qty-=l,o.qty<1&&(o.qty=1),I(t))}function _(e){const l=M(),t=l.findIndex(o=>o.index===e);t!==-1&&(l.splice(t,1),I(l))}function ye(){const e=M();let l=0;return e.forEach(t=>{l+=t.qty}),l}function ve(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path opacity="0.5" d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z" stroke="${t}" stroke-width="1.5"/>
      <path d="M12 8V12" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="15" r="1" fill="${t}"/>
    </svg>`}function we(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path opacity="0.5" d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20.5001 6H3.5" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M9.5 11L10 16" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M14.5 11L14 16" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function be(){const e=k("cart");return e?JSON.parse(e):[]}async function W(){const e=await S(),l=be(),t=l.map(i=>i.index);return e.data.filter((i,r)=>{if(t.includes(r)){const n=l.find(f=>f.index===r);return n?(i.qty=n.qty,i.index=r):i.qty=0,!0}return!1})}const T=()=>{C(document.querySelector("#cart"),Z(document.querySelector("#cart")))};globalThis.remove_cart=e=>{_(e),T()};globalThis.add_cart=(e,l)=>{H(e,l),T()};globalThis.subtract_cart=(e,l)=>{X(e,l),T()};globalThis.calculateTotalPrice=e=>{let l=0;for(const t of e){const o=parseFloat(t.price),i=t.qty;l+=o*i}return l};globalThis.handleSubmit=async()=>{let e=await j();const l=document.getElementById("alert"),t=document.getElementById("nama"),o=document.getElementById("catatan");if(t.value=="")return l.classList.remove("hidden"),l.classList.add("flex"),l.innerHTML=`${ve()} <p>${e.label.alert.name}</p>`,t.focus(),!1;l.classList.remove("flex"),l.classList.add("hidden"),o.value==""&&(o.value="-"),P("buyer_name",t.value),P("buyer_catatan",o.value);const i=await W().then(h=>h),r=calculateTotalPrice(i);let n=`*Data Pembeli:*
Nama: ${t.value}
Catatan: ${o.value}

*Data Order:*
`;const f=await Promise.all(i.map(async(h,c)=>{const s=await $(h.price);return`${h.name}
  ${h.qty} x ${s}
`}));n+=f.join(""),n+=`
Total Harga:
*${await $(r)}*`,window.open(`${e.buttonOrder.url}/?text=${encodeURIComponent(n)}`,"_blank")};globalThis.changeStyle=(e,l,t)=>{e.style.color=l,e.style.border=t};async function Z(e){let l=M(),t=await j(),o=await w();if(!l)return;document.title=t.label.title;const i=await W().then(g=>g),r=calculateTotalPrice(i);let n=k("buyer_name")!=null?k("buyer_name"):"",f=k("buyer_catatan")!=null?k("buyer_catatan"):"",h=0,c=o[h].card,s=o[h].horizontalLine,a=o[h].button,d=o[h].cart,u=`background-image: linear-gradient(${c.rotate}deg, ${c.bg.join()}); color: ${c.color}`,m=`border-bottom: 1px solid ${s.color}`,b=`background-image: linear-gradient(${a.rotate}deg, ${a.bg.join()}); color: ${a.color}`,p=o[h].input,x=`color: ${p.color};`;return document.querySelectorAll(".inputLogin").forEach(g=>{g.style.color=p.color,g.style.border=`1px solid ${p.border}`,g.addEventListener("click",()=>{g.style.color=p.activeColor,g.style.border=`1px solid ${p.activeBorder}`}),g.addEventListener("mouseleave",()=>{g.style.border=`1px solid ${p.border}`})}),l.length?`
  <div style="${u}" class="w-full flex flex-col p-3 bg-white rounded-2xl">
    <div class="w-full flex flex-col space-y-3">
        <div class="w-full flex space-x-1 justify-start items-center">
            ${L(d.title,"w-5 h-5")}
            <p style="color: ${d.title}">${t.label.title}</p>
        </div>
        <div style="${m}" class="w-full flex"></div>

        <div class="w-full flex flex-col space-y-3">
        
          <div class="w-full flex flex-col space-y-2">

          ${(await Promise.all(i.map(async(g,De)=>{const Q=await $(g.price);return`
                <div class="w-full flex space-x-3">
                  <img src="${g.imageUrl}" alt="icon" class="w-16 h-16 rounded-t-md rounded-b-md shadow-xl shadow-slate-700/50" />
                  <div class="p-3 w-full">
                    <div class="w-full flex flex-col h-full justify-start">
                      <div class="w-full justify-start h-min flex flex-col text-left">
                        <p class="font-semibold">${g.name}</p>
                        <p class="w-full flex text-left">${g.qty} x ${Q}</p>
                      </div>
          
                      <div class="w-full flex space-x-3 justify-end items-center">
                        <button class="" onclick="remove_cart(${g.index})">
                          ${we(d.icon.trash)}
                        </button>
                        <div style="border: 1px solid ${p.border}" class="w-max flex justify-start items-center rounded-md px-3">
                          <button style="color: ${d.button.subtract}" onclick="subtract_cart(${g.index}, 1)" class="text-xl">-</button>
                          <input type="text" value="${g.qty}" class="flex w-8 text-center outline-none readonly bg-transparent" readonly>
                          <button style="color: ${d.button.add}" onclick="add_cart(${g.index}, 1)" class="text-xl">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="${m}" class="w-full flex"></div>
              `}))).join("")}

            <div>
              <p>${t.label.totalPrice}</p>
              <p class="font-semibold">${await $(r)}</p>
            </div>

            <div style="${m}" class="w-full flex"></div>
            
            <div class="w-full flex flex-col space-y-1">
              <p>${t.label.buyyerData.title}</p>
              <div class="w-full flex flex-col space-y-3">
                <div class="space-y-1">
                  <label for="nama" class="capitalize text-primary">${t.label.buyyerData.name}</label>
                  <input 
                  style="${x}; border: 1px solid ${p.border}" 
                  onclick="changeStyle(this, '${p.color}', '1px solid ${p.activeBorder}');"
                  onmouseout="changeStyle(this, '${p.color}', '1px solid ${p.border}');"
                  type="text" id="nama" name="nama" value="${n}" placeholder="${t.label.buyyerData.name}" autocomplete="off" class="inputs autofill:bg-transparent p-3 rounded-md bg-transparent outline-none w-full">
                </div>

                <div class="space-y-1">
                  <label for="catatan" class="capitalize text-primary">${t.label.buyyerData.note}</label>
                  <textarea 
                  style="${x}; border: 1px solid ${p.border}" 
                  onclick="changeStyle(this, '${p.color}', '1px solid ${p.activeBorder}');"
                  onmouseout="changeStyle(this, '${p.color}', '1px solid ${p.border}');"
                  id="catatan" name="catatan" placeholder="${t.label.buyyerData.note}" autocomplete="off" class="inputs autofill:bg-transparent p-3 rounded-md bg-transparent outline-none w-full">${f}</textarea>
                </div>

                <div id="alert" class="hidden w-full justify-start items-center space-x-3 text-slate-700 space-y-1 p-3 rounded-md shadow-md bg-amber-400"></div>

                <button style="${b}" type="button" onclick="handleSubmit()" class="bg-blue-900 flex p-3 rounded-full shadow-md w-full">
                  <p class="w-full font-semibold text-center">${t.buttonOrder.text}</p>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`:`<div style="${u}" class="w-full flex flex-col p-3 rounded-2xl">
    <div class="w-full flex flex-col space-y-3">
        <div class="w-full flex space-x-1 justify-start items-center">
        ${L(d.title,"w-5 h-5")}
        <p style="color: ${d.title}">${t.label.title}</p>
        </div>
        <div style="${m}" class="w-full flex"></div>

        <div class="w-full flex flex-col space-y-3 min-h-[20rem]">
        
          <div class="w-full flex flex-col space-y-2">
          </div>
          </div>
          </div>
          </div>
          `}function xe(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="${t}"/>
    </svg>`}async function $e(){let e=await N(),l=await w();if(!e)return;document.title=e.label.title;let t=0,o=l[t].avatar,i=l[t].card,r=l[t].info,n=`background-image: linear-gradient(${i.rotate}deg, ${i.bg.join()}); color: ${i.color}`,f=`border: 3px solid ${o.ring}`;return e.status?`
    <div class="w-full flex flex-col space-y-3">
        <div style="color: ${r.title}" class="font-semibold">${e.label.title}</div>
        <div class="w-full flex flex-col space-y-3">

            ${e.data.map((h,c)=>`<div class="w-full flex flex-col space-y-3">
                <div style="${n}" class="w-full flex flex-col p-3 space-y-3 rounded-md">
                <div class="w-full flex space-x-3 justify-start items-center">
                    <img src="${h.imageUrl}" alt="avatar" style="${f}" class="w-10 h-10 md:w-12 md:h-12 rounded-full">
                    <div class="w-full flex space-x-1 justify-start items-center font-semibold"><p>${h.name}</p> ${xe("#3b82f6","w-4 h-4")}</div>
                </div>
                <div>
                    <p>${h.description}</p>
                </div>
                </div>
            </div>`).join("")}

        
        </div>
    </div>`:'<div class="h-[20rem]"></div>'}function ke(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path opacity="0.5" d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="${t}" stroke-width="1.5"/>
      <path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function Le(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M5.5 8.75732C5.5 6.95835 7.067 5.5 9 5.5C10.933 5.5 12.5 6.95835 12.5 8.75732C12.5 10.5422 11.3829 12.625 9.64003 13.3698C9.23374 13.5434 8.76626 13.5434 8.35997 13.3698C6.61708 12.625 5.5 10.5422 5.5 8.75732Z" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M14.0004 13.9993L20.5004 20.4993M14.0004 13.9993L6.39453 21.6053M14.0004 13.9993L21.6072 6.39258" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="${t}"/>
    </svg>`}function Me(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <path d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651M4.00289 5.74561C3.96765 5.12559 4.25823 4.56668 4.69185 4.13552L6.26145 2.57483C7.13596 1.70529 8.61028 1.83992 9.37326 2.85908L10.6342 4.54348C11.2507 5.36691 11.1841 6.49484 10.4775 7.19738L10.1907 7.48257" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M18.6763 18.9651C17.0469 19.117 13.0622 18.9492 8.8154 14.7266C4.81076 10.7447 4.09308 7.33182 4.00293 5.74561" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M16.1007 13.3589C16.1007 13.3589 15.0181 14.4353 12.0631 11.4971C9.10807 8.55886 10.1907 7.48242 10.1907 7.48242" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function Se(e=null,l="w-6 h-6"){let t="#1C274C";return e&&(t=e),`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${l}">
      <circle opacity="0.5" cx="12" cy="9" r="3" stroke="${t}" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="10" stroke="${t}" stroke-width="1.5"/>
      <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}function He(){return"version 1.0.0"}async function Pe(){let e=await A(),l=await w();if(!e)return;document.title=e.label.title;let t=0,o=l[t].card,i=l[t].profile,r=l[t].horizontalLine,n=`background-image: linear-gradient(${o.rotate}deg, ${o.bg.join()}); color: ${o.color}`,f=`border-bottom: 1px solid ${r.color}`;return`
    <div style="${n}" class="w-full flex flex-col p-3 rounded-2xl">
      <div class="w-full flex flex-col space-y-3">
        <div class="w-full flex space-x-1 justify-start items-center">
            ${Se(i.title,"w-5 h-5")}
            <p style="color: ${i.title}">${e.label.title}</p>
        </div>

        <div style="${f}" class="w-full flex"></div>

        <div class="flex flex-col space-y-3 text-base w-full rounded-2xl">
          <div class="flex flex-col space-y-3">


            ${e.logo.status?`<div class="w-full flex justify-center items-center">
                <img src="${e.logo.url}" alt="logo" class="hover:scale-105" style="width: ${e.logo.width}; height: ${e.logo.height}">
              </div>`:""}
            
            <div class="text-secondary space-y-3">

              <p>${e.description}</p>

              ${e.telp.status?`<div class="flex space-x-3 items-center">
                ${Me(o.color,"w-5 h-5 text-secondary")}
                <p>${e.telp.value}</p>
              </div>`:""}
              

              ${e.email.status?`<div class="flex space-x-3 items-center">
                ${ke(o.color,"w-5 h-5 text-secondary")}
                <p>${e.email.value}</p>
              </div>`:""}

              ${e.address.status?`<div class="flex space-x-3 items-center">
                ${Le(o.color,"w-5 h-5 text-secondary")}
                <p>${e.address.value}</p>
              </div>`:""}
              
            </div>
          </div>
        </div>
        
        <div class="w-full flex flex-col justify-center items-end">
          <p class="text-xs px-3 py-1 rounded-xl shadow-xl shadow-amber-400/50 capitalize bg-amber-400 text-slate-800">${He()}</p>
        </div>
      </div>
    </div>`}globalThis.add=(e,l)=>{H(e,l)};async function z(){let e=await S(),l=await w();if(!e)return;document.title=e.label.title;let t=0,o=l[t].card,i=l[t].store,r=l[t].button,n=`background-image: linear-gradient(${o.rotate}deg, ${o.bg.join()}); color: ${o.color}`,f=`background-image: linear-gradient(${r.rotate}deg, ${r.bg.join()}); color: ${r.color}`;if(e.status)return`
      <div class="w-full flex flex-col space-y-3">
        <div style="color: ${i.title}" class="font-semibold">${e.label.title}</div>
        <div class="w-full grid grid-cols-2 gap-3">

        ${(await Promise.all(e.data.map(async(h,c)=>`<div style="${n}" class="w-full flex flex-col rounded-md shadow-md xbg-white h-full justify-between">
            <img src="${h.imageUrl}" alt="icon" class="w-full rounded-t-md rounded-b-xl shadow-xl mb-1 shadow-slate-700/50">
            <div class="p-3 h-full">
              <div class="w-full flex flex-col space-y-3 h-full justify-between items-center">
                <div class="w-full justify-start h-min flex flex-col text-left">
                  <p class="">${h.name}</p>
                  <p class="w-full font-semibold flex text-left">${await $(h.price)}</p>
                </div>
                <button style="${f}" onclick="add(
                  ${c},
                  1
                )" class="px-3 py-1 flex space-x-1 rounded-md shadow-md">
                  <div class="w-full flex space-x-1 justify-center items-center">
                    ${L(r.color,"w-5 h-5")}
                    <p class="text-sm">${e.label.button.addToCart}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>`))).join("")}

        </div>
      </div>`}globalThis.showHome=e=>{document.title=e};globalThis.showCartPage=()=>{C(document.querySelector("#cart"),Z(document.querySelector("#cart")))};globalThis.showProfilePage=()=>{C(document.querySelector("#profile"),Pe())};globalThis.showStorePage=()=>{C(document.querySelector("#store"),z())};globalThis.showInfoPage=()=>{C(document.querySelector("#info"),$e(document.querySelector("#info")))};globalThis.handleMenu=(e,l,t=[],o=null)=>{o&&(document.title=o),document.querySelectorAll(".menu-button").forEach(r=>{r.id===l?(r.classList.add("font-semibold"),r.style.color=t[0]):(r.classList.remove("font-semibold"),r.style.color=t[1])})};function U(){const e=ye();if(e){const l=document.getElementById("totalQtyDisplay");l&&(l.classList.remove("hidden"),l.innerText=e.toString())}else{const l=document.getElementById("totalQtyDisplay");l&&l.classList.add("hidden")}}U();setInterval(()=>{U()},1e3);async function Ee(){let e=5;const l=await Ce(),t=await N(),o=await S(),i=await j(),r=await A();let n=await w();t.status||(e-=1),o.status||(e-=1),o.status||(e-=1),r.status||(e-=1);const f=o.menu.position=="up"?"-mt-6 rounded-full h-20 w-20":"";let c=n[0].menuBottom,s=`background-color: ${c.bg}; color: ${c.color}`,a="";return o.menu.position=="up"&&(a=`background-color: ${c.bg}; border: 3px solid ${c.activeColor}`),`
  <div class="fixed bottom-0 flex w-full md:w-[50%] xl:w-[35%]">
  <div style="${s}" class="w-full h-20 grid grid-cols-${e}">
    <button style="color: ${c.activeColor}" id="tab1" onclick="openTab('tab1', '${l.label.menu}'); handleMenu(event, 'tab1', ['${c.activeColor}', '${c.color}'], '${l.label.title}'); showHome('${l.label.title}');" class="menu-button font-semibold relative w-full flex flex-col justify-center items-center space-y-1">
      <p id="" class="absolute"></p>
      ${pe(c.iconColor)}
    <p class="text-sm">${l.label.menu}</p>
    </button>

    ${t.status?`<button id="tab2" onclick="openTab('tab2'); handleMenu(event, 'tab2', ['${c.activeColor}', '${c.color}']); showInfoPage()" class="menu-button relative w-full flex flex-col justify-center items-center space-y-1">
    <p id="" class="absolute"></p>
    ${fe(c.iconColor)}
    <p class="text-sm">${t.label.menu}</p>
  </button>`:""}
    

    ${o.status?`<button style="${a}" id="tab3" onclick="openTab('tab3'); handleMenu(event, 'tab3', ['${c.activeColor}', '${c.color}']); showStorePage()" class="menu-button relative flex flex-col justify-center items-center ${f} space-y-1">
        <p id="" class="absolute"></p>
        ${me(c.iconColor)}
    <p class="text-sm">${o.label.menu}</p>
      </button>`:""}
    
    ${o.status?`<button id="tab4" onclick="openTab('tab4'); handleMenu(event, 'tab4', ['${c.activeColor}', '${c.color}']); showCartPage()" class="menu-button relative w-full flex flex-col justify-center items-center space-y-1">
    <div style="background-color: ${c.badge.bg}; color: ${c.badge.color}; font-weight: bold;" id="totalQtyDisplay" class="absolute top-2 right-3 lg:right-7 xl:right-5 2xl:right-7 w-4 h-4 rounded-full text-xs text-center"></div>
    ${L(c.iconColor)}
    <p class="text-sm">${i.label.menu}</p>
  </button>`:""}
    
    
    ${r.status?`<button id="tab5" onclick="openTab('tab5'); handleMenu(event, 'tab5', ['${c.activeColor}', '${c.color}']); showProfilePage()" class="menu-button relative w-full flex flex-col justify-center items-center space-y-1">
    <p id="" class="absolute"></p>
    ${ge(c.iconColor)}
    <p class="text-sm">${r.label.menu}</p>
  </button>`:""}
    
  </div>
</div>
    `}const D=()=>{C(document.querySelector("#cart"),Z(document.querySelector("#cart")))};globalThis.showStorePage=()=>{C(document.querySelector("#store"),z())};globalThis.remove_cart=e=>{_(e),D()};globalThis.add_cart=(e,l)=>{H(e,l),D()};globalThis.subtract_cart=(e,l)=>{X(e,l),D()};globalThis.calculateTotalPrice=e=>{let l=0;for(const t of e){const o=parseFloat(t.price),i=t.qty;l+=o*i}return l};globalThis.handleMenu=(e,l,t)=>{t&&(document.title=t),document.querySelectorAll(".menu-button").forEach(i=>{i.id===l?i.classList.add("font-semibold"):i.classList.remove("font-semibold")})};globalThis.changeStyle=(e,l,t)=>{e.style.color=l,e.style.border=t};globalThis.add=(e,l)=>{H(e,l)};async function je(e){let l=await S(),t=await w();if(!l)return;let o=0,i=t[o].card,r=t[o].button,n=`background-image: linear-gradient(${i.rotate}deg, ${i.bg.join()}); color: ${i.color}`,f=`background-image: linear-gradient(${r.rotate}deg, ${r.bg.join()}); color: ${r.color}`;return`
  <div  style="${n}" class="w-full flex flex-col p-3 space-y-2 rounded-2xl">
  <div class="w-full flex justify-between  items-end">
  <div>
    <p class="font-semibold">Kejar Diskon Spesial</p>
    <div class="w-full flex space-x-3">
      <p class="text-sm">Berakhir dalam</p>
      <div id="countdownDiskon" class="px-2 text-white text-xs flex items-center bg-rose-600 rounded-full">00 : 00 : 23</div>
    </div>
  </div>
  <button type="button" onclick="openTab('tab3'); handleMenu(event, 'tab3'); showStorePage()" class="cursor-pointer text-xs text-green-500 font-semibold">Lihat Semua</button>
</div>

<div class="flex w-full">
  <div class="p-3 w-full bg-slate-200 rounded-md flex space-x-3 overflow-x-scroll">

    ${(await Promise.all(l.data.map(async(h,c)=>`<div class="flex flex-col rounded-md shadow-md bg-white">
      <img src="${h.imageUrl}" alt="icon" class="w-full p-3 rounded-2xl">
      <div class="px-3 pb-3">
        <div class="w-full flex flex-col space-y-3 justify-between items-center">
          <div class="w-full justify-start h-min flex flex-col text-left">
            <p class="w-full font-semibold flex text-left">${await $(h.price)}</p>
            <div class="w-full flex space-x-1">
              <p class="w-max font-semibold flex text-left text-slate-500 text-xs line-through">Rp&nbsp;120.000</p>
              <p class="text-xs text-red-500 font-semibold">33%</p>
            </div>
            <div class="pt-3 space-y-1">
              <div class="w-full bg-slate-300 rounded-full">
                <div class="w-[80%] p-[0.11rem] bg-rose-500 rounded-full"></div>
              </div>
              <p class="text-xs text-rose-500">Segera habis</p>
              <button style="${f}" onclick="add(
                ${c},
                1
              )" class="px-3 py-1 flex space-x-1 rounded-md shadow-md">
                <div class="w-full flex space-x-1 justify-center items-center">
                  ${L(r.color,"w-5 h-5")}
                  <p class="text-sm w-max">${l.label.button.addToCart}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`))).join("")}
    
  </div>
</div>
  </div>`}globalThis.handleBuy=()=>{window.location.href="https://eriksanjaya.mayar.link/catalog/source-code-katalog-produk-dengan-vitejs-html-vanilla-js-dan-tailwind-css"};async function Ie(){let e=await w();if(!e)return;let l=0,t=e[l].card,o=e[l].profile,i=e[l].horizontalLine,r=`background-image: linear-gradient(${t.rotate}deg, ${t.bg.join()}); color: ${t.color}`,n=`border-bottom: 1px solid ${i.color}`,f=e[l].button,h=`background-image: linear-gradient(${f.rotate}deg, ${f.bg.join()}); color: ${f.color}`;return`
    <div style="${r}" class="w-full flex flex-col p-3 rounded-2xl">
      <div class="w-full flex flex-col space-y-3">
        <div class="w-full flex space-x-1 justify-start items-center">
            ${E(o.title,"w-5 h-5")}
            <p style="color: ${o.title}">Beli Source Code</p>
        </div>

        <div style="${n}" class="w-full flex"></div>

        <div class="flex flex-col space-y-3 text-base w-full rounded-2xl">
          <div class="flex flex-col space-y-3">

            <p>Ingin beli source code ini?</p>

            <button style="${h}" type="button" onclick="handleBuy()" class="bg-blue-900 flex p-3 rounded-full shadow-md w-full">
              <p class="w-full font-semibold text-center">Beli sekarang!</p>
            </button>


          </div>
        </div>
        
      </div>
    </div>`}C(document.querySelector("#menuBottom"),Ee());C(document.querySelector("#quickMenu"),he());C(document.querySelector("#navbar"),le(document.querySelector("#navbar")));C(document.querySelector("#diskon"),je());C(document.querySelector("#buySourceCode"),Ie());ee();globalThis.openTab=(e,l="")=>{l&&(document.title=l);for(var t=document.getElementsByClassName("tab"),o=0;o<t.length;o++)t[o].style.display="none";document.getElementById(e).style.display="block"};openTab("tab1");const Te=async()=>{let e=await w(),l=0,t=e[l].background;const o=document.body;o.style.backgroundImage=`linear-gradient(${t.rotate}deg, ${t.body.join()})`;const i=document.getElementById("app");i&&(i.style.backgroundImage=`linear-gradient(${t.rotate}deg, ${t.container.join()})`);let r=e[l].card;const n=document.getElementById("formCard");n&&(n.style.backgroundImage=`linear-gradient(${r.rotate}deg, ${r.bg.join()})`,n.style.color=`${r.color}`);const f=document.getElementById("globalCard");f&&(f.style.backgroundImage=`linear-gradient(${r.rotate}deg, ${r.bg.join()})`,f.style.color=`${r.color}`);let h=e[l].login;const c=document.getElementById("optionsLogin");c&&(c.style.backgroundImage=`linear-gradient(${h.option.rotate}deg, ${h.option.bg.join()})`,c.style.color=`${h.option.color}`);let s=e[l].input;document.querySelectorAll(".inputLogin").forEach(p=>{p.style.color=s.color,p.style.border=`1px solid ${s.border}`,p.addEventListener("click",()=>{p.style.border=`1px solid ${s.activeBorder}`}),p.addEventListener("mouseleave",()=>{p.style.border=`1px solid ${s.border}`})});let d=e[l].button;const u=document.getElementById("btnLogin");u&&(u.style.backgroundImage=`linear-gradient(${d.rotate}deg, ${d.bg.join()})`,u.style.color=d.color);const m=document.getElementById("btnLogout");m&&(m.style.backgroundImage=`linear-gradient(${d.rotate}deg, ${d.bg.join()})`,m.style.color=d.color),document.querySelectorAll(".hr").forEach(p=>{p.style.borderBottom=`1px solid ${s.border}`})};Te();const Ze=()=>{var e=new Date,l=new Date(e.getTime()+60*60*1e3),t=l-e,e=new Date,l=new Date(e.getTime()+60*60*1e3),t=l-e;setInterval(()=>{var o=Math.floor(t/36e5),i=Math.floor(t%(1e3*60*60)/(1e3*60)),r=Math.floor(t%(1e3*60)/1e3);const n=document.getElementById("countdownDiskon");n?n.innerHTML=`${o} : ${i} : ${r}`:console.log("no dom"),t-=1e3,t<0&&n&&(n.innerHTML="Waktu habis!")},1e3)};Ze();
