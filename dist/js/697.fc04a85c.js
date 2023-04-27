(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[697],{373:function(t,e,n){var s,i;(function(r){s=[n(7387)],i=function(t){return function(){var e,n,s,i=0,r={error:"error",info:"info",success:"success",warning:"warning"},o={clear:f,remove:p,error:a,getContainer:u,info:c,options:{},subscribe:l,success:h,version:"2.1.4",warning:d};return o;function a(t,e,n){return E({type:r.error,iconClass:T().iconClasses.error,message:t,optionsOverride:n,title:e})}function u(n,s){return n||(n=T()),e=t("#"+n.containerId),e.length||s&&(e=y(n)),e}function c(t,e,n){return E({type:r.info,iconClass:T().iconClasses.info,message:t,optionsOverride:n,title:e})}function l(t){n=t}function h(t,e,n){return E({type:r.success,iconClass:T().iconClasses.success,message:t,optionsOverride:n,title:e})}function d(t,e,n){return E({type:r.warning,iconClass:T().iconClasses.warning,message:t,optionsOverride:n,title:e})}function f(t,n){var s=T();e||u(s),m(t,s,n)||g(s)}function p(n){var s=T();e||u(s),n&&0===t(":focus",n).length?b(n):e.children().length&&e.remove()}function g(n){for(var s=e.children(),i=s.length-1;i>=0;i--)m(t(s[i]),n)}function m(e,n,s){var i=!(!s||!s.force)&&s.force;return!(!e||!i&&0!==t(":focus",e).length)&&(e[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){b(e)}}),!0)}function y(n){return e=t("<div/>").attr("id",n.containerId).addClass(n.positionClass),e.appendTo(t(n.target)),e}function v(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function w(t){n&&n(t)}function E(n){var r=T(),o=n.iconClass||r.iconClass;if("undefined"!==typeof n.optionsOverride&&(r=t.extend(r,n.optionsOverride),o=n.optionsOverride.iconClass||o),!N(r,n)){i++,e=u(r,!0);var a=null,c=t("<div/>"),l=t("<div/>"),h=t("<div/>"),d=t("<div/>"),f=t(r.closeHtml),p={intervalId:null,hideEta:null,maxHideTime:null},g={toastId:i,state:"visible",startTime:new Date,options:r,map:n};return y(),_(),E(),w(g),r.debug&&console&&console.log(g),c}function m(t){return null==t&&(t=""),t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y(){C(),k(),S(),D(),A(),R(),I(),v()}function v(){var t="";switch(n.iconClass){case"toast-success":case"toast-info":t="polite";break;default:t="assertive"}c.attr("aria-live",t)}function E(){r.closeOnHover&&c.hover(O,L),!r.onclick&&r.tapToDismiss&&c.click(x),r.closeButton&&f&&f.click((function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),r.onCloseClick&&r.onCloseClick(t),x(!0)})),r.onclick&&c.click((function(t){r.onclick(t),x()}))}function _(){c.hide(),c[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(a=setTimeout(x,r.timeOut),p.maxHideTime=parseFloat(r.timeOut),p.hideEta=(new Date).getTime()+p.maxHideTime,r.progressBar&&(p.intervalId=setInterval(U,10)))}function C(){n.iconClass&&c.addClass(r.toastClass).addClass(o)}function I(){r.newestOnTop?e.prepend(c):e.append(c)}function k(){if(n.title){var t=n.title;r.escapeHtml&&(t=m(n.title)),l.append(t).addClass(r.titleClass),c.append(l)}}function S(){if(n.message){var t=n.message;r.escapeHtml&&(t=m(n.message)),h.append(t).addClass(r.messageClass),c.append(h)}}function D(){r.closeButton&&(f.addClass(r.closeClass).attr("role","button"),c.prepend(f))}function A(){r.progressBar&&(d.addClass(r.progressClass),c.prepend(d))}function R(){r.rtl&&c.addClass("rtl")}function N(t,e){if(t.preventDuplicates){if(e.message===s)return!0;s=e.message}return!1}function x(e){var n=e&&!1!==r.closeMethod?r.closeMethod:r.hideMethod,s=e&&!1!==r.closeDuration?r.closeDuration:r.hideDuration,i=e&&!1!==r.closeEasing?r.closeEasing:r.hideEasing;if(!t(":focus",c).length||e)return clearTimeout(p.intervalId),c[n]({duration:s,easing:i,complete:function(){b(c),clearTimeout(a),r.onHidden&&"hidden"!==g.state&&r.onHidden(),g.state="hidden",g.endTime=new Date,w(g)}})}function L(){(r.timeOut>0||r.extendedTimeOut>0)&&(a=setTimeout(x,r.extendedTimeOut),p.maxHideTime=parseFloat(r.extendedTimeOut),p.hideEta=(new Date).getTime()+p.maxHideTime)}function O(){clearTimeout(a),p.hideEta=0,c.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function U(){var t=(p.hideEta-(new Date).getTime())/p.maxHideTime*100;d.width(t+"%")}}function T(){return t.extend({},v(),o.options)}function b(t){e||(e=u()),t.is(":visible")||(t.remove(),t=null,0===e.children().length&&(e.remove(),s=void 0))}}()}.apply(e,s),void 0===i||(t.exports=i)})(n.amdD)},1697:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Pg}});var s=n(3396);function i(t,e,n,i,r,o){const a=(0,s.up)("on-main-top"),u=(0,s.up)("banner-in-background");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a,{title:"На головній верх (1000 х 190)",eTime:"",eText:"",eUrls:"",eFunctionality:""}),(0,s.Wm)(u)],64)}const r={key:0,class:"form-control"},o=(0,s._)("option",null,"5с",-1),a=(0,s._)("option",null,"10с",-1),u=(0,s._)("option",null,"15с",-1),c=(0,s._)("option",null,"20с",-1),l=(0,s._)("option",null,"25с",-1),h=[o,a,u,c,l],d={key:1,class:"custom-control custom-switch custom-switch-on-success custom-switch-off-danger"},f=["checked"],p=(0,s._)("label",{class:"custom-control-label",for:"customSwitch3"},null,-1),g=(0,s._)("i",{class:"fas fa-sync-alt"},null,-1),m=[g],y={class:"grid-cards"},v={class:"custom-file position-absolute w-0 h-0"},w=(0,s._)("span",null,"Зберегти",-1),E=[w];function T(t,e){const n=(0,s.up)("img-card"),i=(0,s.up)("card");return(0,s.wg)(),(0,s.j4)(i,{title:t.title,isLoading:t.isLoading},{tools:(0,s.w5)((()=>[t.eTime?((0,s.wg)(),(0,s.iD)("select",r,h)):(0,s.kq)("",!0),t.eFunctionality?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch3",checked:t.functionality},null,8,f),p])):(0,s.kq)("",!0),(0,s._)("button",{type:"button",class:"btn",onClick:e[0]||(e[0]=(...e)=>t.UpdateLIst&&t.UpdateLIst(...e))},m)])),body:(0,s.w5)((()=>[(0,s._)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.itemsList,(e=>((0,s.wg)(),(0,s.j4)(n,{text:t.eText,urls:t.eUrls,elementData:e,key:e.id,onSelectFiles:t.SelectFiles,onDeleteElement:t.DeleteElement,onChangeURL:t.ChangeURL,onChangeText:t.ChangeText},null,8,["text","urls","elementData","onSelectFiles","onDeleteElement","onChangeURL","onChangeText"])))),128))]),(0,s._)("div",v,[(0,s._)("input",{type:"file",class:"custom-file-input",ref:"inputGroupFile",multiple:"",onChange:e[1]||(e[1]=(...e)=>t.CreateData&&t.CreateData(...e))},null,544)])])),footer:(0,s.w5)((()=>[(0,s._)("span",{class:"btn btn-xs btn-success col fileinput-button",onClick:e[2]||(e[2]=e=>t.UpdateDataBase())},E)])),_:1},8,["title","isLoading"])}const b=t=>((0,s.dD)("data-v-760f3960"),t=t(),(0,s.Cn)(),t),_={class:"card card-gray-dark shadow img-card-block d-flex"},C={class:"card-header"},I=b((()=>(0,s._)("h3",{class:"card-title"},null,-1))),k={class:"card-tools"},S={key:0,type:"button",class:"btn btn-tool"},D={class:"card-body d-flex flex-column"},A={class:"img-block mb-1"},R=["src"],N=["src"],x=["src"],L={key:0},O={key:1},U={key:0,class:"input-group mb-1"},M=b((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-link"})])],-1))),P=["value","disabled"],F={key:1,class:"input-group mb-1"},V=b((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-comment"})])],-1))),B=["value","disabled"];function q(t,e,n,i,r,o){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",C,[I,(0,s._)("div",k,[null!=n.elementImgCard.id?((0,s.wg)(),(0,s.iD)("button",S,[(0,s._)("i",{class:"fas fa-times",onClick:e[0]||(e[0]=e=>t.$emit("RemoveImg",n.elementImgCard.id))})])):(0,s.kq)("",!0)])]),(0,s._)("div",D,[(0,s._)("div",A,[null!=n.elementImgCard.id&&null!=n.elementImgCard.src?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"img-car",src:n.elementImgCard.src,alt:"altText"},null,8,R)):(0,s.kq)("",!0),null!=n.elementImgCard.id&&null==n.elementImgCard.src?((0,s.wg)(),(0,s.iD)("img",{key:1,class:"img-car",src:n.elementImgCard.link,alt:"altText"},null,8,N)):((0,s.wg)(),(0,s.iD)("img",{key:2,class:"img-car",src:r.defaultImg,alt:"altText"},null,8,x)),(0,s._)("button",{class:"btn",onClick:e[1]||(e[1]=e=>t.$emit("chooseFiles",n.elementImgCard.id)),type:"button"},[null!=n.elementImgCard.id?((0,s.wg)(),(0,s.iD)("span",L,"Змінити")):((0,s.wg)(),(0,s.iD)("span",O,"Добавити"))])]),(0,s._)("div",null,[null!=n.elementImgCard.id?((0,s.wg)(),(0,s.iD)("div",U,[M,(0,s._)("input",{type:"text",class:"form-control",value:n.elementImgCard.urls,disabled:null==n.elementImgCard.src&&null==n.elementImgCard.link,onInput:e[2]||(e[2]=e=>t.$emit("setUrl",e.target.value,n.elementImgCard.id)),placeholder:"URL"},null,40,P)])):(0,s.kq)("",!0),null!=n.elementImgCard.id?((0,s.wg)(),(0,s.iD)("div",F,[V,(0,s._)("input",{type:"text",class:"form-control",value:n.elementImgCard.text,disabled:null==n.elementImgCard.src&&null==n.elementImgCard.link,onInput:e[3]||(e[3]=e=>t.$emit("setText",e.target.value,n.elementImgCard.id)),placeholder:"Text"},null,40,B)])):(0,s.kq)("",!0)])])])}var j={name:"addImgCard",data(){return{defaultImg:"https://via.placeholder.com/1000x190",text:"",url:""}},props:{elementImgCard:{type:Object}},methods:{setImageDefault(t){t.target.src=this.defaultImg}}},$=n(89);const z=(0,$.Z)(j,[["render",q],["__scopeId","data-v-760f3960"]]);var K=z,G=(n(2801),n(7658),n(3767),n(8585),n(8696),n(7077)),H=n(223),Q=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W="firebasestorage.googleapis.com",X="storageBucket",Y=12e4,J=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z extends H.ZR{constructor(t,e,n=0){super(nt(t),`Firebase Storage: ${e} (${nt(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return nt(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt,et;function nt(t){return"storage/"+t}function st(){const t="An unknown error occurred, please check the error payload for server response.";return new Z(tt.UNKNOWN,t)}function it(t){return new Z(tt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function rt(t){return new Z(tt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ot(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(tt.UNAUTHENTICATED,t)}function at(){return new Z(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ut(t){return new Z(tt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ct(){return new Z(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lt(){return new Z(tt.CANCELED,"User canceled the upload/download.")}function ht(t){return new Z(tt.INVALID_URL,"Invalid URL '"+t+"'.")}function dt(t){return new Z(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ft(){return new Z(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+X+"' property when initializing the app?")}function pt(){return new Z(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gt(){return new Z(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mt(t){return new Z(tt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yt(t){return new Z(tt.INVALID_ARGUMENT,t)}function vt(){return new Z(tt.APP_DELETED,"The Firebase app was deleted.")}function wt(t){return new Z(tt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Et(t,e){return new Z(tt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Tt(t){throw new Z(tt.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(tt||(tt={}));class bt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=bt.makeFromUrl(t,e)}catch(s){return new bt(t,"")}if(""===n.path)return n;throw dt(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",o=new RegExp("^gs://"+s+r,"i"),a={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const c="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${c}/b/${s}/o${h}`,"i"),f={bucket:1,path:3},p=e===W?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${s}/${g}`,"i"),y={bucket:1,path:2},v=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:u},{regex:m,indices:y,postModify:u}];for(let w=0;w<v.length;w++){const e=v[w],s=e.regex.exec(t);if(s){const t=s[e.indices.bucket];let i=s[e.indices.path];i||(i=""),n=new bt(t,i),e.postModify(n);break}}if(null==n)throw ht(t);return n}}class _t{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,u())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(c)return void d();if(t)return d(),void l.call(null,t,...e);const n=u()||o;if(n)return d(),void l.call(null,t,...e);let i;s<64&&(s*=2),1===a?(a=2,i=0):i=1e3*(s+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,g(!0)}),n),g}function It(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return void 0!==t}function St(t){return"object"===typeof t&&!Array.isArray(t)}function Dt(t){return"string"===typeof t||t instanceof String}function At(t){return Rt()&&t instanceof Blob}function Rt(){return"undefined"!==typeof Blob&&!(0,H.UG)()}function Nt(t,e,n,s){if(s<e)throw yt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw yt(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e,n){let s=e;return null==n&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Lt(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(t,e){const n=t>=500&&t<600,s=[408,429],i=-1!==s.indexOf(t),r=-1!==e.indexOf(t);return n||i||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(et||(et={}));class Ut{constructor(t,e,n,s,i,r,o,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Mt(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const e=n.getErrorCode()===et.NO_ERROR,i=n.getStatus();if(!e||Ot(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===et.ABORT;return void t(!1,new Mt(!1,null,e))}const r=-1!==this.successCodes_.indexOf(i);t(!0,new Mt(r,n))}))},e=(t,e)=>{const n=this.resolve_,s=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());kt(t)?n(t):n()}catch(r){s(r)}else if(null!==i){const t=st();t.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,t)):s(t)}else if(e.canceled){const t=this.appDelete_?vt():lt();s(t)}else{const t=ct();s(t)}};this.canceled_?e(!1,new Mt(!1,null,!0)):this.backoffId_=Ct(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&It(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Mt{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Pt(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Ft(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Vt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Bt(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function qt(t,e,n,s,i,r,o=!0){const a=Lt(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return Vt(c,e),Pt(c,n),Ft(c,r),Bt(c,s),new Ut(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function $t(...t){const e=jt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Rt())return new Blob(t);throw new Z(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function zt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){if("undefined"===typeof atob)throw mt("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ht{constructor(t,e){this.data=t,this.contentType=e||null}}function Qt(t,e){switch(t){case Gt.RAW:return new Ht(Wt(e));case Gt.BASE64:case Gt.BASE64URL:return new Ht(Yt(t,e));case Gt.DATA_URL:return new Ht(Zt(e),te(e))}throw st()}function Wt(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|63&s);else if(55296===(64512&s)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=s,r=t.charCodeAt(++n);s=65536|(1023&i)<<10|1023&r,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else e.push(239,191,189)}else 56320===(64512&s)?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(e)}function Xt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw Et(Gt.DATA_URL,"Malformed data URL.")}return Wt(e)}function Yt(t,e){switch(t){case Gt.BASE64:{const n=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(n||s){const e=n?"-":"_";throw Et(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case Gt.BASE64URL:{const n=-1!==e.indexOf("+"),s=-1!==e.indexOf("/");if(n||s){const e=n?"+":"/";throw Et(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Kt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw Et(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Jt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw Et(Gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ee(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Zt(t){const e=new Jt(t);return e.base64?Yt(Gt.BASE64,e.rest):Xt(e.rest)}function te(t){const e=new Jt(t);return e.contentType}function ee(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){let n=0,s="";At(t)?(this.data_=t,n=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(At(this.data_)){const n=this.data_,s=zt(n,t,e);return null===s?null:new ne(s)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ne(n,!0)}}static getBlob(...t){if(Rt()){const e=t.map((t=>t instanceof ne?t.data_:t));return new ne($t.apply(null,e))}{const e=t.map((t=>Dt(t)?Qt(Gt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const s=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)s[i++]=t[e]})),new ne(s,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){let e;try{e=JSON.parse(t)}catch(n){return null}return St(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function re(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function oe(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e){return e}class ue{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||ae}}let ce=null;function le(t){return!Dt(t)||t.length<2?t:oe(t)}function he(){if(ce)return ce;const t=[];function e(t,e){return le(e)}t.push(new ue("bucket")),t.push(new ue("generation")),t.push(new ue("metageneration")),t.push(new ue("name","fullPath",!0));const n=new ue("name");function s(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new ue("size");return i.xform=s,t.push(i),t.push(new ue("timeCreated")),t.push(new ue("updated")),t.push(new ue("md5Hash",null,!0)),t.push(new ue("cacheControl",null,!0)),t.push(new ue("contentDisposition",null,!0)),t.push(new ue("contentEncoding",null,!0)),t.push(new ue("contentLanguage",null,!0)),t.push(new ue("contentType",null,!0)),t.push(new ue("metadata","customMetadata",!0)),ce=t,ce}function de(t,e){function n(){const n=t["bucket"],s=t["fullPath"],i=new bt(n,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fe(t,e,n){const s={type:"file"},i=n.length;for(let r=0;r<i;r++){const t=n[r];s[t.local]=t.xform(s,e[t.server])}return de(s,t),s}function pe(t,e,n){const s=se(e);if(null===s)return null;const i=s;return fe(t,i,n)}function ge(t,e,n,s){const i=se(e);if(null===i)return null;if(!Dt(i["downloadTokens"]))return null;const r=i["downloadTokens"];if(0===r.length)return null;const o=encodeURIComponent,a=r.split(","),u=a.map((e=>{const i=t["bucket"],r=t["fullPath"],a="/b/"+o(i)+"/o/"+o(r),u=xt(a,n,s),c=Lt({alt:"media",token:e});return u+c}));return u[0]}function me(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){if(!t)throw st()}function we(t,e){function n(n,s){const i=pe(t,s,e);return ve(null!==i),i}return n}function Ee(t,e){function n(n,s){const i=pe(t,s,e);return ve(null!==i),ge(i,s,t.host,t._protocol)}return n}function Te(t){function e(e,n){let s;return s=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?at():ot():402===e.getStatus()?rt(t.bucket):403===e.getStatus()?ut(t.path):n,s.status=e.getStatus(),s.serverResponse=n.serverResponse,s}return e}function be(t){const e=Te(t);function n(n,s){let i=e(n,s);return 404===n.getStatus()&&(i=it(t.path)),i.serverResponse=s.serverResponse,i}return n}function _e(t,e,n){const s=e.fullServerUrl(),i=xt(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ye(i,r,Ee(t,n),o);return a.errorHandler=be(e),a}function Ce(t,e){const n=e.fullServerUrl(),s=xt(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(t,e){}const a=new ye(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=be(e),a}function Ie(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function ke(t,e,n){const s=Object.assign({},n);return s["fullPath"]=t.path,s["size"]=e.size(),s["contentType"]||(s["contentType"]=Ie(null,e)),s}function Se(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=ke(e,s,i),l=me(c,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+u+"--",f=ne.getBlob(h,s,d);if(null===f)throw pt();const p={name:c["fullPath"]},g=xt(r,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new ye(g,m,we(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Te(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let De=null;class Ae{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=et.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=et.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=et.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,s){if(this.sent_)throw Tt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tt("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Tt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Re extends Ae{initXhr(){this.xhr_.responseType="text"}}function Ne(){return De?De():new Re}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(t,e){this._service=t,this._location=e instanceof bt?e:bt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new xe(t,e)}get root(){const t=new bt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oe(this._location.path)}get storage(){return this._service}get parent(){const t=ie(this._location.path);if(null===t)return null;const e=new bt(this._location.bucket,t);return new xe(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw wt(t)}}function Le(t,e,n){t._throwIfRoot("uploadBytes");const s=Se(t.storage,t._location,he(),new ne(e,!0),n);return t.storage.makeRequestWithTokens(s,Ne).then((e=>({metadata:e,ref:t})))}function Oe(t){t._throwIfRoot("getDownloadURL");const e=_e(t.storage,t._location,he());return t.storage.makeRequestWithTokens(e,Ne).then((t=>{if(null===t)throw gt();return t}))}function Ue(t){t._throwIfRoot("deleteObject");const e=Ce(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ne)}function Me(t,e){const n=re(t._location.path,e),s=new bt(t._location.bucket,n);return new xe(t.storage,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return/^[A-Za-z]+:\/\//.test(t)}function Fe(t,e){return new xe(t,e)}function Ve(t,e){if(t instanceof $e){const n=t;if(null==n._bucket)throw ft();const s=new xe(n,n._bucket);return null!=e?Ve(s,e):s}return void 0!==e?Me(t,e):t}function Be(t,e){if(e&&Pe(e)){if(t instanceof $e)return Fe(t,e);throw yt("To use ref(service, url), the first argument must be a Storage instance.")}return Ve(t,e)}function qe(t,e){const n=null===e||void 0===e?void 0:e[X];return null==n?null:bt.makeFromBucketSpec(n,t)}function je(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken="string"===typeof i?i:(0,H.Sg)(i,t.app.options.projectId))}class $e{constructor(t,e,n,s,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=W,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Y,this._maxUploadRetryTime=J,this._requests=new Set,this._bucket=null!=s?bt.makeFromBucketSpec(s,this._host):qe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=bt.makeFromBucketSpec(this._url,t):this._bucket=qe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Nt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Nt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new xe(this,t)}_makeRequest(t,e,n,s,i=!0){if(this._deleted)return new _t(vt());{const r=qt(t,this._appId,n,s,e,this._firebaseVersion,i);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const ze="@firebase/storage",Ke="0.11.2",Ge="storage";function He(t,e,n){return t=(0,H.m9)(t),Le(t,e,n)}function Qe(t){return t=(0,H.m9)(t),Oe(t)}function We(t){return t=(0,H.m9)(t),Ue(t)}function Xe(t,e){return t=(0,H.m9)(t),Be(t,e)}function Ye(t=(0,G.getApp)(),e){t=(0,H.m9)(t);const n=(0,G._getProvider)(t,Ge),s=n.getImmediate({identifier:e}),i=(0,H.P0)("storage");return i&&Je(s,...i),s}function Je(t,e,n,s={}){je(t,e,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $e(n,s,i,e,G.SDK_VERSION)}function tn(){(0,G._registerComponent)(new Q.wA(Ge,Ze,"PUBLIC").setMultipleInstances(!0)),(0,G.registerVersion)(ze,Ke,""),(0,G.registerVersion)(ze,Ke,"esm2017")}tn();var en=n(3185),nn=n(373),sn=n.n(nn);const rn=Ye(en.w);async function on(t,e){try{const n=Xe(rn,`${t}/${e.id}`),s=await fetch(e.src),i=await s.blob();await He(n,i);const r=await Qe(n);return sn().success("Файл загружено!"),r}catch(n){console.error(n);const t={"storage/unauthorized":"Користувач не має права доступу до об'єкта.","storage/canceled":"Користувач скасував завантаження.","storage/unknown":"Сталася невідома помилка під час завантаження."},e=t[n.code]||"Не вдалося завантажити файл.";throw new Error(e)}}async function an(t,e){try{const n=Xe(rn,`${t}/${e}`);await We(n),sn().success("Файл видалено!")}catch(n){const t={"storage/object-not-found":"Цей файл не знайдено. Можливо він вже був видалений.","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію видалення скасовано.","storage/unknown":"Сталася невідома помилка при видаленні файлу."},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw sn().error(e),new Error(e)}}var un,cn=n(5168),ln=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),hn={},dn=dn||{},fn=ln||self;function pn(){}function gn(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function mn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function yn(t){return Object.prototype.hasOwnProperty.call(t,vn)&&t[vn]||(t[vn]=++wn)}var vn="closure_uid_"+(1e9*Math.random()>>>0),wn=0;function En(t,e,n){return t.call.apply(t.bind,arguments)}function Tn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function bn(t,e,n){return bn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?En:Tn,bn.apply(null,arguments)}function _n(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Cn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function In(){this.s=this.s,this.o=this.o}var kn=0;In.prototype.s=!1,In.prototype.na=function(){this.s||(this.s=!0,this.M(),0==kn)||yn(this)},In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function An(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(gn(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let i=0;i<s;i++)t[n+i]=e[i]}else t.push(e)}}function Rn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Rn.prototype.h=function(){this.defaultPrevented=!0};var Nn=function(){if(!fn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fn.addEventListener("test",pn,e),fn.removeEventListener("test",pn,e)}catch(n){}return t}();function xn(t){return/^[\s\xa0]*$/.test(t)}var Ln=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function On(t,e){return t<e?-1:t>e?1:0}function Un(){var t=fn.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return-1!=Un().indexOf(t)}function Pn(t){return Pn[" "](t),t}function Fn(t){var e=Yn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Pn[" "]=pn;var Vn,Bn=Mn("Opera"),qn=Mn("Trident")||Mn("MSIE"),jn=Mn("Edge"),$n=jn||qn,zn=Mn("Gecko")&&!(-1!=Un().toLowerCase().indexOf("webkit")&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),Kn=-1!=Un().toLowerCase().indexOf("webkit")&&!Mn("Edge");function Gn(){var t=fn.document;return t?t.documentMode:void 0}t:{var Hn="",Qn=function(){var t=Un();return zn?/rv:([^\);]+)(\)|;)/.exec(t):jn?/Edge\/([\d\.]+)/.exec(t):qn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Kn?/WebKit\/(\S+)/.exec(t):Bn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Qn&&(Hn=Qn?Qn[1]:""),qn){var Wn=Gn();if(null!=Wn&&Wn>parseFloat(Hn)){Vn=String(Wn);break t}}Vn=Hn}var Xn,Yn={};function Jn(){return Fn((function(){let t=0;const e=Ln(String(Vn)).split("."),n=Ln("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=On(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||On(0==i[2].length,0==r[2].length)||On(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(fn.document&&qn){var Zn=Gn();Xn=Zn||(parseInt(Vn,10)||void 0)}else Xn=void 0;var ts=Xn;function es(t,e){if(Rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zn){t:{try{Pn(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ns[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&es.X.h.call(this)}}Cn(es,Rn);var ns={2:"touch",3:"pen",4:"mouse"};es.prototype.h=function(){es.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ss="closure_listenable_"+(1e6*Math.random()|0),is=0;function rs(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++is,this.ba=this.ea=!1}function os(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function as(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function us(t){const e={};for(const n in t)e[n]=t[n];return e}const cs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ls(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<cs.length;e++)n=cs[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function hs(t){this.src=t,this.g={},this.h=0}function ds(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Sn(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(os(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function fs(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}hs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=fs(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rs(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};var ps="closure_lm_"+(1e6*Math.random()|0),gs={};function ms(t,e,n,s,i){if(s&&s.once)return ws(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ms(t,e[r],n,s,i);return null}return n=ks(n),t&&t[ss]?t.N(e,n,mn(s)?!!s.capture:!!s,i):ys(t,e,n,!1,s,i)}function ys(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=mn(i)?!!i.capture:!!i,a=Cs(t);if(a||(t[ps]=a=new hs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=vs(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Nn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(bs(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function vs(){function t(n){return e.call(t.src,t.listener,n)}const e=_s;return t}function ws(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ws(t,e[r],n,s,i);return null}return n=ks(n),t&&t[ss]?t.O(e,n,mn(s)?!!s.capture:!!s,i):ys(t,e,n,!0,s,i)}function Es(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Es(t,e[r],n,s,i);else s=mn(s)?!!s.capture:!!s,n=ks(n),t&&t[ss]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=fs(r,n,s,i),-1<n&&(os(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Cs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fs(e,n,s,i)),(n=-1<t?e[t]:null)&&Ts(n))}function Ts(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[ss])ds(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bs(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Cs(e))?(ds(n,t),0==n.h&&(n.src=null,e[ps]=null)):os(t)}}}function bs(t){return t in gs?gs[t]:gs[t]="on"+t}function _s(t,e){if(t.ba)t=!0;else{e=new es(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ts(t),t=n.call(s,e)}return t}function Cs(t){return t=t[ps],t instanceof hs?t:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function ks(t){return"function"===typeof t?t:(t[Is]||(t[Is]=function(e){return t.handleEvent(e)}),t[Is])}function Ss(){In.call(this),this.i=new hs(this),this.P=this,this.I=null}function Ds(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new Rn(e,t);else if(e instanceof Rn)e.target=e.target||t;else{var i=e;e=new Rn(s,t),ls(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=As(o,s,!0,e)&&i}if(o=e.g=t,i=As(o,s,!0,e)&&i,i=As(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=As(o,s,!1,e)&&i}function As(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&ds(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}Cn(Ss,In),Ss.prototype[ss]=!0,Ss.prototype.removeEventListener=function(t,e,n,s){Es(this,t,e,n,s)},Ss.prototype.M=function(){if(Ss.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)os(n[s]);delete e.g[t],e.h--}}this.I=null},Ss.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ss.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Rs=fn.JSON.stringify;function Ns(){var t=Bs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xs{constructor(){this.h=this.g=null}add(t,e){const n=Os.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ls,Os=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Us),(t=>t.reset()));class Us{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ms(t){fn.setTimeout((()=>{throw t}),0)}function Ps(t,e){Ls||Fs(),Vs||(Ls(),Vs=!0),Bs.add(t,e)}function Fs(){var t=fn.Promise.resolve(void 0);Ls=function(){t.then(qs)}}var Vs=!1,Bs=new xs;function qs(){for(var t;t=Ns();){try{t.h.call(t.g)}catch(n){Ms(n)}var e=Os;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vs=!1}function js(t,e){Ss.call(this),this.h=t||1,this.g=e||fn,this.j=bn(this.lb,this),this.l=Date.now()}function $s(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function zs(t,e,n){if("function"===typeof t)n&&(t=bn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=bn(t.handleEvent,t)}return 2147483647<Number(e)?-1:fn.setTimeout(t,e||0)}function Ks(t){t.g=zs((()=>{t.g=null,t.i&&(t.i=!1,Ks(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Cn(js,Ss),un=js.prototype,un.ca=!1,un.R=null,un.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ds(this,"tick"),this.ca&&($s(this),this.start()))}},un.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},un.M=function(){js.X.M.call(this),$s(this),delete this.g};class Gs extends In{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ks(this)}M(){super.M(),this.g&&(fn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(t){In.call(this),this.h=t,this.g={}}Cn(Hs,In);var Qs=[];function Ws(t,e,n,s){Array.isArray(n)||(n&&(Qs[0]=n.toString()),n=Qs);for(var i=0;i<n.length;i++){var r=ms(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Xs(t){as(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ts(t)}),t),t.g={}}function Ys(){this.g=!0}function Js(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Zs(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ti(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ni(t,n)+(s?" "+s:"")}))}function ei(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ni(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Rs(n)}catch(a){return e}}Hs.prototype.M=function(){Hs.X.M.call(this),Xs(this)},Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ys.prototype.Aa=function(){this.g=!1},Ys.prototype.info=function(){};var si={},ii=null;function ri(){return ii=ii||new Ss}function oi(t){Rn.call(this,si.Pa,t)}function ai(t){const e=ri();Ds(e,new oi(e))}function ui(t,e){Rn.call(this,si.STAT_EVENT,t),this.stat=e}function ci(t){const e=ri();Ds(e,new ui(e,t))}function li(t,e){Rn.call(this,si.Qa,t),this.size=e}function hi(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return fn.setTimeout((function(){t()}),e)}si.Pa="serverreachability",Cn(oi,Rn),si.STAT_EVENT="statevent",Cn(ui,Rn),si.Qa="timingevent",Cn(li,Rn);var di={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fi={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function pi(){}function gi(t){return t.h||(t.h=t.i())}function mi(){}pi.prototype.h=null;var yi,vi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wi(){Rn.call(this,"d")}function Ei(){Rn.call(this,"c")}function Ti(){}function bi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Hs(this),this.O=Ci,t=$n?125:void 0,this.T=new js(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _i}function _i(){this.i=null,this.g="",this.h=!1}Cn(wi,Rn),Cn(Ei,Rn),Cn(Ti,pi),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},yi=new Ti;var Ci=45e3,Ii={},ki={};function Si(t,e,n){t.K=1,t.v=Wi(zi(e)),t.s=n,t.P=!0,Di(t,null)}function Di(t,e){t.F=Date.now(),xi(t),t.A=zi(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ur(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _i,t.g=fo(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gs(bn(t.La,t,t.g),t.N)),Ws(t.S,t.g,"readystatechange",t.ib),e=t.H?us(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ai(),Js(t.j,t.u,t.A,t.m,t.U,t.s)}function Ai(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ri(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Ni(t,n),s==ki){4==e&&(t.o=4,ci(14),i=!1),ti(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ii){t.o=4,ci(15),ti(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ti(t.j,t.m,s,null),Pi(t,s)}Ai(t)&&s!=ki&&s!=Ii&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ci(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),io(e),e.K=!0,ci(11))):(ti(t.j,t.m,n,"[Invalid Chunked Response]"),Mi(t),Ui(t))}function Ni(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ki:(n=Number(e.substring(n,s)),isNaN(n)?Ii:(s+=1,s+n>e.length?ki:(e=e.substr(s,n),t.C=s+n,e)))}function xi(t){t.V=Date.now()+t.O,Li(t,t.O)}function Li(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=hi(bn(t.gb,t),e)}function Oi(t){t.B&&(fn.clearTimeout(t.B),t.B=null)}function Ui(t){0==t.l.G||t.I||ao(t.l,t)}function Mi(t){Oi(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$s(t.T),Xs(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mr(n.h,t)))if(!t.J&&mr(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;oo(n),Wr(n)}so(n),ci(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=hi(bn(n.cb,n),6e3));if(1>=gr(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else co(n,11)}else if((t.J||n.g==t)&&oo(n),!xn(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(s=1.5*l,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(yr(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Qi(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ho(s,s.H?s.ka:null,s.V),o.J){vr(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Oi(a),xi(a)),s.g=o}else no(s);0<n.i.length&&Yr(n)}else"stop"!=c[0]&&"close"!=c[0]||co(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?co(n,7):Qr(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}ai(4)}catch(c){}}function Fi(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(gn(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Vi(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(gn(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Bi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(gn(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Vi(t),s=Fi(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}un=bi.prototype,un.setTimeout=function(t){this.O=t},un.ib=function(t){t=t.target;const e=this.L;e&&3==jr(t)?e.l():this.La(t)},un.La=function(t){try{if(t==this.g)t:{const l=jr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||$n||this.g&&(this.h.h||this.g.fa()||$r(this.g)))){this.I||4!=l||7==e||ai(8==e||0>=h?3:2),Oi(this);var n=this.g.aa();this.Y=n;e:if(Ai(this)){var s=$r(this.g);t="";var i=s.length,r=4==jr(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Mi(this),Ui(this);var o="";break e}this.h.i=new fn.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Zs(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ci(12),Mi(this),Ui(this);break t}ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pi(this,n)}this.P?(Ri(this,l,o),$n&&this.i&&3==l&&(Ws(this.S,this.T,"tick",this.hb),this.T.start())):(ti(this.j,this.m,o,null),Pi(this,o)),4==l&&Mi(this),this.i&&!this.I&&(4==l?ao(this.l,this):(this.i=!1,xi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ci(12)):(this.o=0,ci(13)),Mi(this),Ui(this)}}}catch(l){}},un.hb=function(){if(this.g){var t=jr(this.g),e=this.g.fa();this.C<e.length&&(Oi(this),Ri(this,t,e),this.i&&4!=t&&xi(this))}},un.cancel=function(){this.I=!0,Mi(this)},un.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ei(this.j,this.A),2!=this.K&&(ai(),ci(17)),Mi(this),this.o=2,Ui(this)):Li(this,this.V-t)};var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ji(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $i(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $i){this.h=void 0!==e?e:t.h,Ki(this,t.j),this.s=t.s,this.g=t.g,Gi(this,t.m),this.l=t.l,e=t.i;var n=new ir;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hi(this,n),this.o=t.o}else t&&(n=String(t).match(qi))?(this.h=!!e,Ki(this,n[1]||"",!0),this.s=Xi(n[2]||""),this.g=Xi(n[3]||"",!0),Gi(this,n[4]),this.l=Xi(n[5]||"",!0),Hi(this,n[6]||"",!0),this.o=Xi(n[7]||"")):(this.h=!!e,this.i=new ir(null,this.h))}function zi(t){return new $i(t)}function Ki(t,e,n){t.j=n?Xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hi(t,e,n){e instanceof ir?(t.i=e,lr(t.i,t.h)):(n||(e=Yi(e,nr)),t.i=new ir(e,t.h))}function Qi(t,e,n){t.i.set(e,n)}function Wi(t){return Qi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Yi(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ji),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ji(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Yi(e,Zi,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Yi(e,Zi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Yi(n,"/"==n.charAt(0)?er:tr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Yi(n,sr)),t.join("")};var Zi=/[#\/\?@]/g,tr=/[#\?:]/g,er=/[#\?]/g,nr=/[#\?@]/g,sr=/#/g;function ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rr(t){t.g||(t.g=new Map,t.h=0,t.i&&ji(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function or(t,e){rr(t),e=cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ar(t,e){return rr(t),e=cr(t,e),t.g.has(e)}function ur(t,e,n){or(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),Dn(n)),t.h+=n.length)}function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lr(t,e){e&&!t.j&&(rr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(or(this,e),ur(this,n,t))}),t)),t.j=e}un=ir.prototype,un.add=function(t,e){rr(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},un.forEach=function(t,e){rr(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},un.oa=function(){rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},un.W=function(t){rr(this);let e=[];if("string"===typeof t)ar(this,t)&&(e=e.concat(this.g.get(cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},un.set=function(t,e){return rr(this),this.i=null,t=cr(this,t),ar(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},un.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},un.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var hr=class{constructor(t,e){this.h=t,this.g=e}};function dr(t){this.l=t||fr,fn.PerformanceNavigationTiming?(t=fn.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(fn.g&&fn.g.Ga&&fn.g.Ga()&&fn.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fr=10;function pr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gr(t){return t.h?1:t.g?t.g.size:0}function mr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yr(t,e){t.g?t.g.add(e):t.h=e}function vr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dn(t.i)}function Er(){}function Tr(){this.g=new Er}function br(t,e,n){const s=n||"";try{Bi(t,(function(t,n){let i=t;mn(t)&&(i=Rs(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function _r(t,e){const n=new Ys;if(fn.Image){const s=new Image;s.onload=_n(Cr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=_n(Cr,n,s,"TestLoadImage: error",!1,e),s.onabort=_n(Cr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=_n(Cr,n,s,"TestLoadImage: timeout",!1,e),fn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Cr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Ir(t){this.l=t.ac||null,this.j=t.jb||!1}function kr(t,e){Ss.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dr.prototype.cancel=function(){if(this.i=wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Er.prototype.stringify=function(t){return fn.JSON.stringify(t,void 0)},Er.prototype.parse=function(t){return fn.JSON.parse(t,void 0)},Cn(Ir,pi),Ir.prototype.g=function(){return new kr(this.l,this.j)},Ir.prototype.i=function(t){return function(){return t}}({}),Cn(kr,Ss);var Sr=0;function Dr(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Ar(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rr(t)}function Rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}un=kr.prototype,un.open=function(t,e){if(this.readyState!=Sr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rr(this)},un.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||fn).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},un.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ar(this)),this.readyState=Sr},un.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof fn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dr(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},un.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ar(this):Rr(this),3==this.readyState&&Dr(this)}},un.Va=function(t){this.g&&(this.response=this.responseText=t,Ar(this))},un.Ua=function(t){this.g&&(this.response=t,Ar(this))},un.ga=function(){this.g&&Ar(this)},un.setRequestHeader=function(t,e){this.v.append(t,e)},un.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},un.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Nr=fn.JSON.parse;function xr(t){Ss.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lr,this.K=this.L=!1}Cn(xr,Ss);var Lr="",Or=/^https?$/i,Ur=["POST","PUT"];function Mr(t){return qn&&Jn()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fr(t),Br(t)}function Fr(t){t.D||(t.D=!0,Ds(t,"complete"),Ds(t,"error"))}function Vr(t){if(t.h&&"undefined"!=typeof dn&&(!t.C[1]||4!=jr(t)||2!=t.aa()))if(t.v&&4==jr(t))zs(t.Ha,0,t);else if(Ds(t,"readystatechange"),4==jr(t)){t.h=!1;try{const u=t.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var i=String(t.H).match(qi)[1]||null;if(!i&&fn.self&&fn.self.location){var r=fn.self.location.protocol;i=r.substr(0,r.length-1)}s=!Or.test(i?i.toLowerCase():"")}n=s}if(n)Ds(t,"complete"),Ds(t,"success");else{t.m=6;try{var o=2<jr(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fr(t)}}finally{Br(t)}}}function Br(t,e){if(t.g){qr(t);const s=t.g,i=t.C[0]?pn:null;t.g=null,t.C=null,e||Ds(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function qr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(fn.clearTimeout(t.A),t.A=null)}function jr(t){return t.g?t.g.readyState:0}function $r(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ro){return null}}function zr(t){let e="";return as(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Kr(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=zr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qi(t,e,n))}function Gr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hr(t){this.Ca=0,this.i=[],this.j=new Ys,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gr("baseRetryDelayMs",5e3,t),this.bb=Gr("retryDelaySeedMs",1e4,t),this.$a=Gr("forwardChannelMaxRetries",2,t),this.ta=Gr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new dr(t&&t.concurrentRequestLimit),this.Fa=new Tr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qr(t){if(Xr(t),3==t.G){var e=t.U++,n=zi(t.F);Qi(n,"SID",t.I),Qi(n,"RID",e),Qi(n,"TYPE","terminate"),to(t,n),e=new bi(t,t.j,e,void 0),e.K=2,e.v=Wi(zi(n)),n=!1,fn.navigator&&fn.navigator.sendBeacon&&(n=fn.navigator.sendBeacon(e.v.toString(),"")),!n&&fn.Image&&((new Image).src=e.v,n=!0),n||(e.g=fo(e.l,null),e.g.da(e.v)),e.F=Date.now(),xi(e)}lo(t)}function Wr(t){t.g&&(io(t),t.g.cancel(),t.g=null)}function Xr(t){Wr(t),t.u&&(fn.clearTimeout(t.u),t.u=null),oo(t),t.h.cancel(),t.m&&("number"===typeof t.m&&fn.clearTimeout(t.m),t.m=null)}function Yr(t){pr(t.h)||t.m||(t.m=!0,Ps(t.Ja,t),t.C=0)}function Jr(t,e){return!(gr(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=hi(bn(t.Ja,t,e),uo(t,t.C)),t.C++,!0))}function Zr(t,e){var n;n=e?e.m:t.U++;const s=zi(t.F);Qi(s,"SID",t.I),Qi(s,"RID",n),Qi(s,"AID",t.T),to(t,s),t.o&&t.s&&Kr(s,t.o,t.s),n=new bi(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=eo(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yr(t.h,n),Si(n,s,e)}function to(t,e){t.ia&&as(t.ia,(function(t,n){Qi(e,n,t)})),t.l&&Bi({},(function(t,n){Qi(e,n,t)}))}function eo(t,e,n){n=Math.min(t.i.length,n);var s=t.l?bn(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{br(a,t,"req"+n+"_")}catch(Bo){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function no(t){t.g||t.u||(t.Z=1,Ps(t.Ia,t),t.A=0)}function so(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=hi(bn(t.Ia,t),uo(t,t.A)),t.A++,!0)}function io(t){null!=t.B&&(fn.clearTimeout(t.B),t.B=null)}function ro(t){t.g=new bi(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=zi(t.sa);Qi(e,"RID","rpc"),Qi(e,"SID",t.I),Qi(e,"CI",t.L?"0":"1"),Qi(e,"AID",t.T),Qi(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&Kr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wi(zi(e)),n.s=null,n.P=!0,Di(n,t)}function oo(t){null!=t.v&&(fn.clearTimeout(t.v),t.v=null)}function ao(t,e){var n=null;if(t.g==e){oo(t),io(t),t.g=null;var s=2}else{if(!mr(t.h,e))return;n=e.D,vr(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ri(),Ds(s,new li(s,n)),Yr(t)}else no(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==s&&Jr(t,e)||2==s&&so(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:co(t,5);break;case 4:co(t,10);break;case 3:co(t,6);break;default:co(t,2)}}function uo(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function co(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=bn(t.kb,t);n||(n=new $i("//www.google.com/images/cleardot.gif"),fn.location&&"http"==fn.location.protocol||Ki(n,"https"),Wi(n)),_r(n.toString(),s)}else ci(2);t.G=0,t.l&&t.l.va(e),lo(t),Xr(t)}function lo(t){if(t.G=0,t.la=[],t.l){const e=wr(t.h);0==e.length&&0==t.i.length||(An(t.la,e),An(t.la,t.i),t.h.i.length=0,Dn(t.i),t.i.length=0),t.l.ua()}}function ho(t,e,n){var s=n instanceof $i?zi(n):new $i(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Gi(s,s.m);else{var i=fn.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $i(null,void 0);s&&Ki(r,s),e&&(r.g=e),i&&Gi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Qi(s,n,e),Qi(s,"VER",t.ma),to(t,s),s}function fo(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new xr(new Ir({jb:!0})):new xr(t.ra),e.Ka(t.H),e}function po(){}function go(){if(qn&&!(10<=Number(ts)))throw Error("Environmental error: no available transport.")}function mo(t,e){Ss.call(this),this.g=new Hr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xn(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wo(this)}function yo(t){wi.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function vo(){Ei.call(this),this.status=1}function wo(t){this.g=t}un=xr.prototype,un.Ka=function(t){this.L=t},un.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yi.g(),this.C=this.u?gi(this.u):gi(yi),this.g.onreadystatechange=bn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Pr(this,r)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=fn.FormData&&t instanceof fn.FormData,!(0<=Sn(Ur,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qr(this),0<this.B&&((this.K=Mr(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bn(this.qa,this)):this.A=zs(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Pr(this,r)}},un.qa=function(){"undefined"!=typeof dn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ds(this,"timeout"),this.abort(8))},un.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ds(this,"complete"),Ds(this,"abort"),Br(this))},un.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Br(this,!0)),xr.X.M.call(this)},un.Ha=function(){this.s||(this.F||this.v||this.l?Vr(this):this.fb())},un.fb=function(){Vr(this)},un.aa=function(){try{return 2<jr(this)?this.g.status:-1}catch(t){return-1}},un.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},un.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Nr(e)}},un.Ea=function(){return this.m},un.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},un=Hr.prototype,un.ma=8,un.G=1,un.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new bi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=us(r),ls(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=eo(this,i,e),n=zi(this.F),Qi(n,"RID",t),Qi(n,"CVER",22),this.D&&Qi(n,"X-HTTP-Session-Id",this.D),to(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(zr(r)))+"&"+e:this.o&&Kr(n,this.o,r)),yr(this.h,i),this.Ya&&Qi(n,"TYPE","init"),this.O?(Qi(n,"$req",e),Qi(n,"SID","null"),i.Z=!0,Si(i,n,null)):Si(i,n,e),this.G=2}}else 3==this.G&&(t?Zr(this,t):0==this.i.length||pr(this.h)||Zr(this))},un.Ia=function(){if(this.u=null,ro(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=hi(bn(this.eb,this),t)}},un.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ci(10),Wr(this),ro(this))},un.cb=function(){null!=this.v&&(this.v=null,Wr(this),so(this),ci(19))},un.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ci(2)):(this.j.info("Failed to ping google.com"),ci(1))},un=po.prototype,un.xa=function(){},un.wa=function(){},un.va=function(){},un.ua=function(){},un.Ra=function(){},go.prototype.g=function(t,e){return new mo(t,e)},Cn(mo,Ss),mo.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ci(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ho(t,null,t.V),Yr(t)},mo.prototype.close=function(){Qr(this.g)},mo.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rs(t),t=n);e.i.push(new hr(e.ab++,t)),3==e.G&&Yr(e)},mo.prototype.M=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,mo.X.M.call(this)},Cn(yo,wi),Cn(vo,Ei),Cn(wo,po),wo.prototype.xa=function(){Ds(this.g,"a")},wo.prototype.wa=function(t){Ds(this.g,new yo(t))},wo.prototype.va=function(t){Ds(this.g,new vo)},wo.prototype.ua=function(){Ds(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,mo.prototype.send=mo.prototype.u,mo.prototype.open=mo.prototype.m,mo.prototype.close=mo.prototype.close,di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,fi.COMPLETE="complete",mi.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",Ss.prototype.listen=Ss.prototype.N,xr.prototype.listenOnce=xr.prototype.O,xr.prototype.getLastError=xr.prototype.Oa,xr.prototype.getLastErrorCode=xr.prototype.Ea,xr.prototype.getStatus=xr.prototype.aa,xr.prototype.getResponseJson=xr.prototype.Sa,xr.prototype.getResponseText=xr.prototype.fa,xr.prototype.send=xr.prototype.da,xr.prototype.setWithCredentials=xr.prototype.Ka;var Eo=hn.createWebChannelTransport=function(){return new go},To=hn.getStatEventTarget=function(){return ri()},bo=hn.ErrorCode=di,_o=hn.EventType=fi,Co=hn.Event=si,Io=hn.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ko=hn.FetchXmlHttpFactory=Ir,So=hn.WebChannel=mi,Do=hn.XhrIo=xr;const Ao="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ro.UNAUTHENTICATED=new Ro(null),Ro.GOOGLE_CREDENTIALS=new Ro("google-credentials-uid"),Ro.FIRST_PARTY=new Ro("first-party-uid"),Ro.MOCK_USER=new Ro("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let No="9.20.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new cn.Yd("@firebase/firestore");function Lo(){return xo.logLevel}function Oo(t,...e){if(xo.logLevel<=cn["in"].DEBUG){const n=e.map(Po);xo.debug(`Firestore (${No}): ${t}`,...n)}}function Uo(t,...e){if(xo.logLevel<=cn["in"].ERROR){const n=e.map(Po);xo.error(`Firestore (${No}): ${t}`,...n)}}function Mo(t,...e){if(xo.logLevel<=cn["in"].WARN){const n=e.map(Po);xo.warn(`Firestore (${No}): ${t}`,...n)}}function Po(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+t;throw Uo(e),new Error(e)}function Vo(t,e){t||Fo()}function Bo(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jo extends H.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ko{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ro.UNAUTHENTICATED)))}shutdown(){}}class Go{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ho{constructor(t){this.t=t,this.currentUser=Ro.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new $o;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $o,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Oo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Oo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $o)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Oo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Vo("string"==typeof e.accessToken),new zo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vo(null===t||"string"==typeof t),new Ro(t)}}class Qo{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Ro.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Wo{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Qo(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ro.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yo{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Oo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Oo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Oo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):Oo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Vo("string"==typeof t.token),this.T=t.token,new Xo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Jo(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function ta(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return na.fromMillis(Date.now())}static fromDate(t){return na.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new na(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ta(this.nanoseconds,t.nanoseconds):ta(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new sa(t)}static min(){return new sa(new na(0,0))}static max(){return new sa(new na(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e,n){void 0===e?e=0:e>t.length&&Fo(),void 0===n?n=t.length-e:n>t.length-e&&Fo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ia.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ia?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ra extends ia{construct(t,e,n){return new ra(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jo(qo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ra(e)}static emptyPath(){return new ra([])}}const oa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class aa extends ia{construct(t,e,n){return new aa(t,e,n)}static isValidIdentifier(t){return oa.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),aa.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new aa(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new jo(qo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new jo(qo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new jo(qo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new jo(qo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new aa(e)}static emptyPath(){return new aa([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t){this.path=t}static fromPath(t){return new ua(ra.fromString(t))}static fromName(t){return new ua(ra.fromString(t).popFirst(5))}static empty(){return new ua(ra.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ra.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ra.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ua(new ra(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ca.UNKNOWN_ID=-1;function la(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=sa.fromTimestamp(1e9===s?new na(n+1,0):new na(n,s));return new da(i,ua.empty(),e)}function ha(t){return new da(t.readTime,t.key,-1)}class da{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new da(sa.min(),ua.empty(),-1)}static max(){return new da(sa.max(),ua.empty(),-1)}}function fa(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ua.comparator(t.documentKey,e.documentKey),0!==n?n:ta(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ga{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){if(t.code!==qo.FAILED_PRECONDITION||t.message!==pa)throw t;Oo("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Fo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ya(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ya?e:ya.resolve(e)}catch(t){return ya.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ya.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ya.reject(e)}static resolve(t){return new ya(((e,n)=>{e(t)}))}static reject(t){return new ya(((e,n)=>{n(t)}))}static waitFor(t){return new ya(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=ya.resolve(!1);for(const n of t)e=e.next((t=>t?ya.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new ya(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{r[u]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new ya(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Ea(t){return null==t}function Ta(t){return 0===t&&1/t==-1/0}function ba(t){return"number"==typeof t&&Number.isInteger(t)&&!Ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wa.ct=-1;const _a=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ca=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ia=Ca;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ka(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Da(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.comparator=t,this.root=e||Na.EMPTY}insert(t,e){return new Aa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Na.BLACK,null,null))}remove(t){return new Aa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Na.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ra(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ra(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ra(this.root,t,this.comparator,!0)}}class Ra{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Na{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Na.RED,this.left=null!=s?s:Na.EMPTY,this.right=null!=i?i:Na.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Na(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Na.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Na.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Na.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fo();if(this.right.isRed())throw Fo();const t=this.left.check();if(t!==this.right.check())throw Fo();return t+(this.isRed()?0:1)}}Na.EMPTY=null,Na.RED=!0,Na.BLACK=!1,Na.EMPTY=new class{constructor(){this.size=0}get key(){throw Fo()}get value(){throw Fo()}get color(){throw Fo()}get left(){throw Fo()}get right(){throw Fo()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Na(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{constructor(t){this.comparator=t,this.data=new Aa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(t){return new La(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xa(this.comparator);return e.data=t,e}}class La{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(t){this.fields=t,t.sort(aa.comparator)}static empty(){return new Oa([])}unionWith(t){let e=new xa(aa.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Oa(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ea(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ua("Invalid base64 string: "+t):t}}(t);return new Ma(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ma(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ta(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ma.EMPTY_BYTE_STRING=new Ma("");const Pa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fa(t){if(Vo(!!t),"string"==typeof t){let e=0;const n=Pa.exec(t);if(Vo(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Va(t.seconds),nanos:Va(t.nanos)}}function Va(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ba(t){return"string"==typeof t?Ma.fromBase64String(t):Ma.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ja(t){const e=t.mapValue.fields.__previous_value__;return qa(e)?ja(e):e}function $a(t){const e=Fa(t.mapValue.fields.__local_write_time__.timestampValue);return new na(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ka{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ka("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ka&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ha(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qa(t)?4:ou(t)?9007199254740991:10:Fo()}function Qa(t,e){if(t===e)return!0;const n=Ha(t);if(n!==Ha(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $a(t).isEqual($a(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fa(t.timestampValue),s=Fa(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ba(t.bytesValue).isEqual(Ba(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Va(t.geoPointValue.latitude)===Va(e.geoPointValue.latitude)&&Va(t.geoPointValue.longitude)===Va(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Va(t.integerValue)===Va(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Va(t.doubleValue),s=Va(e.doubleValue);return n===s?Ta(n)===Ta(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],Qa);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ka(n)!==ka(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Qa(n[i],s[i])))return!1;return!0}(t,e);default:return Fo()}}function Wa(t,e){return void 0!==(t.values||[]).find((t=>Qa(t,e)))}function Xa(t,e){if(t===e)return 0;const n=Ha(t),s=Ha(e);if(n!==s)return ta(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ta(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Va(t.integerValue||t.doubleValue),s=Va(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Ya(t.timestampValue,e.timestampValue);case 4:return Ya($a(t),$a(e));case 5:return ta(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ba(t),s=Ba(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=ta(n[i],s[i]);if(0!==t)return t}return ta(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ta(Va(t.latitude),Va(e.latitude));return 0!==n?n:ta(Va(t.longitude),Va(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Xa(n[i],s[i]);if(t)return t}return ta(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ga.mapValue&&e===Ga.mapValue)return 0;if(t===Ga.mapValue)return 1;if(e===Ga.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=ta(s[o],r[o]);if(0!==t)return t;const e=Xa(n[s[o]],i[r[o]]);if(0!==e)return e}return ta(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Fo()}}function Ya(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ta(t,e);const n=Fa(t),s=Fa(e),i=ta(n.seconds,s.seconds);return 0!==i?i:ta(n.nanos,s.nanos)}function Ja(t){return Za(t)}function Za(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fa(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ba(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ua.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Za(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Za(t.fields[i])}`;return n+"}"}(t.mapValue):Fo();var e,n}function tu(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function nu(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function ru(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sa(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ru(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ru(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ou(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(t){this.value=t}static empty(){return new au({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!iu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ru(e)}setAll(t){let e=aa.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=ru(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());iu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qa(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];iu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Sa(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new au(ru(this.value))}}function uu(t){const e=[];return Sa(t.fields,((t,n)=>{const s=new aa([t]);if(iu(n)){const t=uu(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Oa(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cu{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new cu(t,0,sa.min(),sa.min(),sa.min(),au.empty(),0)}static newFoundDocument(t,e,n,s){return new cu(t,1,e,sa.min(),n,s,0)}static newNoDocument(t,e){return new cu(t,2,e,sa.min(),sa.min(),au.empty(),0)}static newUnknownDocument(t,e){return new cu(t,3,e,sa.min(),sa.min(),au.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(sa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=au.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=au.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof cu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new cu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e){this.position=t,this.inclusive=e}}function hu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ua.comparator(ua.fromName(o.referenceValue),n.key):Xa(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function du(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qa(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e="asc"){this.field=t,this.dir=e}}function pu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{}class mu extends gu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Cu(t,e,n):"array-contains"===e?new Du(t,n):"in"===e?new Au(t,n):"not-in"===e?new Ru(t,n):"array-contains-any"===e?new Nu(t,n):new mu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Iu(t,n):new ku(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Xa(e,this.value)):null!==e&&Ha(this.value)===Ha(e)&&this.matchesComparison(Xa(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Fo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yu extends gu{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new yu(t,e)}matches(t){return vu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function vu(t){return"and"===t.op}function wu(t){return Eu(t)&&vu(t)}function Eu(t){for(const e of t.filters)if(e instanceof yu)return!1;return!0}function Tu(t){if(t instanceof mu)return t.field.canonicalString()+t.op.toString()+Ja(t.value);if(wu(t))return t.filters.map((t=>Tu(t))).join(",");{const e=t.filters.map((t=>Tu(t))).join(",");return`${t.op}(${e})`}}function bu(t,e){return t instanceof mu?function(t,e){return e instanceof mu&&t.op===e.op&&t.field.isEqual(e.field)&&Qa(t.value,e.value)}(t,e):t instanceof yu?function(t,e){return e instanceof yu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&bu(n,e.filters[s])),!0)}(t,e):void Fo()}function _u(t){return t instanceof mu?function(t){return`${t.field.canonicalString()} ${t.op} ${Ja(t.value)}`}(t):t instanceof yu?function(t){return t.op.toString()+" {"+t.getFilters().map(_u).join(" ,")+"}"}(t):"Filter"}class Cu extends mu{constructor(t,e,n){super(t,e,n),this.key=ua.fromName(n.referenceValue)}matches(t){const e=ua.comparator(t.key,this.key);return this.matchesComparison(e)}}class Iu extends mu{constructor(t,e){super(t,"in",e),this.keys=Su("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ku extends mu{constructor(t,e){super(t,"not-in",e),this.keys=Su("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Su(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ua.fromName(t.referenceValue)))}class Du extends mu{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return eu(e)&&Wa(e.arrayValue,this.value)}}class Au extends mu{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Wa(this.value.arrayValue,e)}}class Ru extends mu{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Wa(this.value.arrayValue,e)}}class Nu extends mu{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!eu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Wa(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ft=null}}function Lu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new xu(t,e,n,s,i,r,o)}function Ou(t){const e=Bo(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Tu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ea(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ja(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ja(t))).join(",")),e.ft=t}return e.ft}function Uu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!du(t.startAt,e.startAt)&&du(t.endAt,e.endAt)}function Mu(t){return ua.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Fu(t,e,n,s,i,r,o,a){return new Pu(t,e,n,s,i,r,o,a)}function Vu(t){return new Pu(t)}function Bu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function qu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ju(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function $u(t){return null!==t.collectionGroup}function zu(t){const e=Bo(t);if(null===e.dt){e.dt=[];const t=ju(e),n=qu(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new fu(t)),e.dt.push(new fu(aa.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new fu(aa.keyField(),t))}}}return e.dt}function Ku(t){const e=Bo(t);if(!e.wt)if("F"===e.limitType)e.wt=Lu(e.path,e.collectionGroup,zu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of zu(e)){const e="desc"===i.dir?"asc":"desc";t.push(new fu(i.field,e))}const n=e.endAt?new lu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new lu(e.startAt.position,e.startAt.inclusive):null;e.wt=Lu(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Gu(t,e,n){return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Uu(Ku(t),Ku(e))&&t.limitType===e.limitType}function Qu(t){return`${Ou(Ku(t))}|lt:${t.limitType}`}function Wu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_u(t))).join(", ")}]`),Ea(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ja(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ja(t))).join(",")),`Target(${e})`}(Ku(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ua.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of zu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=hu(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,zu(t),e))&&!(t.endAt&&!function(t,e,n){const s=hu(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,zu(t),e))}(t,e)}function Yu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ju(t){return(e,n)=>{let s=!1;for(const i of zu(t)){const t=Zu(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Zu(t,e,n){const s=t.field.isKeyField()?ua.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Xa(s,i):Fo()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Fo()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Sa(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Da(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Aa(ua.comparator);function nc(){return ec}const sc=new Aa(ua.comparator);function ic(...t){let e=sc;for(const n of t)e=e.insert(n.key,n);return e}function rc(t){let e=sc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function oc(){return uc()}function ac(){return uc()}function uc(){return new tc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cc=new Aa(ua.comparator),lc=new xa(ua.comparator);function hc(...t){let e=lc;for(const n of t)e=e.add(n);return e}const dc=new xa(ta);function fc(){return dc}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(e)?"-0":e}}function gc(t){return{integerValue:""+t}}function mc(t,e){return ba(e)?gc(e):pc(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function vc(t,e,n){return t instanceof Tc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof bc?_c(t,e):t instanceof Cc?Ic(t,e):function(t,e){const n=Ec(t,e),s=Sc(n)+Sc(t._t);return tu(n)&&tu(t._t)?gc(s):pc(t.serializer,s)}(t,e)}function wc(t,e,n){return t instanceof bc?_c(t,e):t instanceof Cc?Ic(t,e):n}function Ec(t,e){return t instanceof kc?tu(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Tc extends yc{}class bc extends yc{constructor(t){super(),this.elements=t}}function _c(t,e){const n=Dc(e);for(const s of t.elements)n.some((t=>Qa(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Cc extends yc{constructor(t){super(),this.elements=t}}function Ic(t,e){let n=Dc(e);for(const s of t.elements)n=n.filter((t=>!Qa(t,s)));return{arrayValue:{values:n}}}class kc extends yc{constructor(t,e){super(),this.serializer=t,this._t=e}}function Sc(t){return Va(t.integerValue||t.doubleValue)}function Dc(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof bc&&e instanceof bc||t instanceof Cc&&e instanceof Cc?ea(t.elements,e.elements,Qa):t instanceof kc&&e instanceof kc?Qa(t._t,e._t):t instanceof Tc&&e instanceof Tc}(t.transform,e.transform)}class Rc{constructor(t,e){this.version=t,this.transformResults=e}}class Nc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nc}static exists(t){return new Nc(void 0,t)}static updateTime(t){return new Nc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Lc{}function Oc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zc(t.key,Nc.none()):new Vc(t.key,t.data,Nc.none());{const n=t.data,s=au.empty();let i=new xa(aa.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Bc(t.key,s,new Oa(i.toArray()),Nc.none())}}function Uc(t,e,n){t instanceof Vc?function(t,e,n){const s=t.value.clone(),i=jc(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Bc?function(t,e,n){if(!xc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=jc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(qc(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Mc(t,e,n,s){return t instanceof Vc?function(t,e,n,s){if(!xc(t.precondition,e))return n;const i=t.value.clone(),r=$c(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bc?function(t,e,n,s){if(!xc(t.precondition,e))return n;const i=$c(t.fieldTransforms,s,e),r=e.data;return r.setAll(qc(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return xc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Pc(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Ec(s.transform,t||null);null!=i&&(null===n&&(n=au.empty()),n.set(s.field,i))}return n||null}function Fc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ea(t,e,((t,e)=>Ac(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vc extends Lc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bc extends Lc{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function jc(t,e,n){const s=new Map;Vo(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,wc(o,a,n[i]))}return s}function $c(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,vc(t,r,e))}return s}class zc extends Lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kc extends Lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Uc(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ac();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Oc(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(sa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),hc())}isEqual(t){return this.batchId===t.batchId&&ea(this.mutations,t.mutations,((t,e)=>Fc(t,e)))&&ea(this.baseMutations,t.baseMutations,((t,e)=>Fc(t,e)))}}class Hc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Vo(t.mutations.length===n.length);let s=cc;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Hc(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wc{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xc,Yc;function Jc(t){switch(t){default:return Fo();case qo.CANCELLED:case qo.UNKNOWN:case qo.DEADLINE_EXCEEDED:case qo.RESOURCE_EXHAUSTED:case qo.INTERNAL:case qo.UNAVAILABLE:case qo.UNAUTHENTICATED:return!1;case qo.INVALID_ARGUMENT:case qo.NOT_FOUND:case qo.ALREADY_EXISTS:case qo.PERMISSION_DENIED:case qo.FAILED_PRECONDITION:case qo.ABORTED:case qo.OUT_OF_RANGE:case qo.UNIMPLEMENTED:case qo.DATA_LOSS:return!0}}function Zc(t){if(void 0===t)return Uo("GRPC error has no .code"),qo.UNKNOWN;switch(t){case Xc.OK:return qo.OK;case Xc.CANCELLED:return qo.CANCELLED;case Xc.UNKNOWN:return qo.UNKNOWN;case Xc.DEADLINE_EXCEEDED:return qo.DEADLINE_EXCEEDED;case Xc.RESOURCE_EXHAUSTED:return qo.RESOURCE_EXHAUSTED;case Xc.INTERNAL:return qo.INTERNAL;case Xc.UNAVAILABLE:return qo.UNAVAILABLE;case Xc.UNAUTHENTICATED:return qo.UNAUTHENTICATED;case Xc.INVALID_ARGUMENT:return qo.INVALID_ARGUMENT;case Xc.NOT_FOUND:return qo.NOT_FOUND;case Xc.ALREADY_EXISTS:return qo.ALREADY_EXISTS;case Xc.PERMISSION_DENIED:return qo.PERMISSION_DENIED;case Xc.FAILED_PRECONDITION:return qo.FAILED_PRECONDITION;case Xc.ABORTED:return qo.ABORTED;case Xc.OUT_OF_RANGE:return qo.OUT_OF_RANGE;case Xc.UNIMPLEMENTED:return qo.UNIMPLEMENTED;case Xc.DATA_LOSS:return qo.DATA_LOSS;default:return Fo()}}(Yc=Xc||(Xc={}))[Yc.OK=0]="OK",Yc[Yc.CANCELLED=1]="CANCELLED",Yc[Yc.UNKNOWN=2]="UNKNOWN",Yc[Yc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yc[Yc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yc[Yc.NOT_FOUND=5]="NOT_FOUND",Yc[Yc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yc[Yc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yc[Yc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yc[Yc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yc[Yc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yc[Yc.ABORTED=10]="ABORTED",Yc[Yc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yc[Yc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yc[Yc.INTERNAL=13]="INTERNAL",Yc[Yc.UNAVAILABLE=14]="UNAVAILABLE",Yc[Yc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return el}static getOrCreateInstance(){return null===el&&(el=new tl),el}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let el=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,sl.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new nl(sa.min(),s,fc(),nc(),hc())}}class sl{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sl(n,e,hc(),hc(),hc())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class rl{constructor(t,e){this.targetId=t,this.Et=e}}class ol{constructor(t,e,n=Ma.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class al{constructor(){this.At=0,this.Rt=ll(),this.vt=Ma.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=hc(),e=hc(),n=hc();return this.Rt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Fo()}})),new sl(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=ll()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ul{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=nc(),this.qt=cl(),this.Ut=new xa(ta)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Fo()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Mu(r))if(0===s){const t=new ua(r.path);this.Qt(n,t,cu.newNoDocument(t,sa.min()))}else Vo(1===s);else{const i=this.Zt(n);i!==s&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=tl.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const i=this.Yt(s);if(i){if(n.current&&Mu(i.target)){const e=new ua(i.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,cu.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=hc();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new nl(t,e,this.Ut,this.Lt,n);return this.Lt=nc(),this.qt=cl(),this.Ut=new xa(ta),s}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const s=this.jt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new al,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new xa(ta),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||Oo("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new al),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function cl(){return new Aa(ua.comparator)}function ll(){return new Aa(ua.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),dl=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),fl=(()=>{const t={and:"AND",or:"OR"};return t})();class pl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ml(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yl(t,e){return gl(t,e.toTimestamp())}function vl(t){return Vo(!!t),sa.fromTimestamp(function(t){const e=Fa(t);return new na(e.seconds,e.nanos)}(t))}function wl(t,e){return function(t){return new ra(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function El(t){const e=ra.fromString(t);return Vo($l(e)),e}function Tl(t,e){return wl(t.databaseId,e.path)}function bl(t,e){const n=El(e);if(n.get(1)!==t.databaseId.projectId)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ua(kl(n))}function _l(t,e){return wl(t.databaseId,e)}function Cl(t){const e=El(t);return 4===e.length?ra.emptyPath():kl(e)}function Il(t){return new ra(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kl(t){return Vo(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Sl(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function Dl(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Fo()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(Vo(void 0===e||"string"==typeof e),Ma.fromBase64String(e||"")):(Vo(void 0===e||e instanceof Uint8Array),Ma.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?qo.UNKNOWN:Zc(t.code);return new jo(e,t.message||"")}(o);n=new ol(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=bl(t,s.document.name),r=vl(s.document.updateTime),o=s.document.createTime?vl(s.document.createTime):sa.min(),a=new au({mapValue:{fields:s.document.fields}}),u=cu.newFoundDocument(i,r,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];n=new il(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=bl(t,s.document),r=s.readTime?vl(s.readTime):sa.min(),o=cu.newNoDocument(i,r),a=s.removedTargetIds||[];n=new il([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=bl(t,s.document),r=s.removedTargetIds||[];n=new il([],r,i,null)}else{if(!("filter"in e))return Fo();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Wc(s),r=t.targetId;n=new rl(r,i)}}return n}function Al(t,e){let n;if(e instanceof Vc)n={update:Sl(t,e.key,e.value)};else if(e instanceof zc)n={delete:Tl(t,e.key)};else if(e instanceof Bc)n={update:Sl(t,e.key,e.data),updateMask:jl(e.fieldMask)};else{if(!(e instanceof Kc))return Fo();n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Tc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Cc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kc)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Fo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:yl(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Fo()}(t,e.precondition)),n}function Rl(t,e){return t&&t.length>0?(Vo(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?vl(t.updateTime):vl(e);return n.isEqual(sa.min())&&(n=vl(e)),new Rc(n,t.transformResults||[])}(t,e)))):[]}function Nl(t,e){return{documents:[_l(t,e.path)]}}function xl(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=_l(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_l(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return ql(yu.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Vl(t.field),direction:Ml(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.useProto3Json||Ea(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ll(t){let e=Cl(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Vo(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Ul(t);return e instanceof yu&&wu(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new fu(Bl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ea(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new lu(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new lu(n,e)}(n.endAt)),Fu(e,i,o,r,a,"F",u,c)}function Ol(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fo()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ul(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bl(t.unaryFilter.field);return mu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bl(t.unaryFilter.field);return mu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bl(t.unaryFilter.field);return mu.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bl(t.unaryFilter.field);return mu.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fo()}}(t):void 0!==t.fieldFilter?function(t){return mu.create(Bl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return yu.create(t.compositeFilter.filters.map((t=>Ul(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Fo()}}(t.compositeFilter.op))}(t):Fo()}function Ml(t){return hl[t]}function Pl(t){return dl[t]}function Fl(t){return fl[t]}function Vl(t){return{fieldPath:t.canonicalString()}}function Bl(t){return aa.fromServerFormat(t.fieldPath)}function ql(t){return t instanceof mu?function(t){if("=="===t.op){if(su(t.value))return{unaryFilter:{field:Vl(t.field),op:"IS_NAN"}};if(nu(t.value))return{unaryFilter:{field:Vl(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(su(t.value))return{unaryFilter:{field:Vl(t.field),op:"IS_NOT_NAN"}};if(nu(t.value))return{unaryFilter:{field:Vl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vl(t.field),op:Pl(t.op),value:t.value}}}(t):t instanceof yu?function(t){const e=t.getFilters().map((t=>ql(t)));return 1===e.length?e[0]:{compositeFilter:{op:Fl(t.op),filters:e}}}(t):Fo()}function jl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $l(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n,s,i=sa.min(),r=sa.min(),o=Ma.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new zl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new zl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new zl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.se=t}}function Gl(t){const e=Ll({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Gu(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Va(t.integerValue));else if("doubleValue"in t){const n=Va(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),Ta(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Ba(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?ou(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Fo()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const s of Object.keys(n))this.fe(s,e),this.ue(n[s],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const s of n)this.ue(s,e)}_e(t,e){this.ae(e,37),ua.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Hl.pe=new Hl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{constructor(){this.He=new Wl}addToCollectionParentIndex(t,e){return this.He.add(e),ya.resolve()}getCollectionParents(t,e){return ya.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return ya.resolve()}deleteFieldIndex(t,e){return ya.resolve()}getDocumentsMatchingTarget(t,e){return ya.resolve(null)}getIndexType(t,e){return ya.resolve(0)}getFieldIndexes(t,e){return ya.resolve([])}getNextCollectionGroupToUpdate(t){return ya.resolve(null)}getMinOffset(t,e){return ya.resolve(da.min())}getMinOffsetFromCollectionGroup(t,e){return ya.resolve(da.min())}updateCollectionGroup(t,e,n){return ya.resolve()}updateIndexEntries(t,e){return ya.resolve()}}class Wl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new xa(ra.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new xa(ra.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Xl{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Xl(t,Xl.DEFAULT_COLLECTION_PERCENTILE,Xl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xl.DEFAULT_COLLECTION_PERCENTILE=10,Xl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xl.DEFAULT=new Xl(41943040,Xl.DEFAULT_COLLECTION_PERCENTILE,Xl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xl.DISABLED=new Xl(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yl{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Yl(0)}static bn(){return new Yl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jl{constructor(){this.changes=new tc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,cu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ya.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mc(n.mutation,t,Oa.empty(),na.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,hc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=hc()){const s=oc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ic();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=oc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,hc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=nc();const r=uc(),o=uc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Bc)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Mc(o.mutation,e,o.mutation.getFieldMask(),na.now())):r.set(e.key,Oa.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Zl(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=uc();let s=new Aa(((t,e)=>t-e)),i=hc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Oa.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||hc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=ac();u.forEach((t=>{if(!i.has(t)){const s=Oc(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ya.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ua.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$u(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):ya.resolve(oc());let o=-1,a=i;return r.next((e=>ya.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ya.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,hc()))).next((t=>({batchId:o,changes:rc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ua(e)).next((t=>{let e=ic();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=ic();return this.indexManager.getCollectionParents(t,s).next((r=>ya.forEach(r,(r=>{const o=function(t,e){return new Pu(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,cu.newInvalidDocument(s)))}));let n=ic();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&Mc(r.mutation,i,Oa.empty(),na.now()),Xu(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ya.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:vl(n.createTime)}),ya.resolve()}getNamedQuery(t,e){return ya.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Gl(t.bundledQuery),readTime:vl(t.readTime)}}(e)),ya.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.overlays=new Aa(ua.comparator),this.ts=new Map}getOverlay(t,e){return ya.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oc();return ya.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.re(t,e,s)})),ya.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ts.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),ya.resolve()}getOverlaysForCollection(t,e,n){const s=oc(),i=e.length+1,r=new ua(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return ya.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Aa(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=oc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=oc(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return ya.resolve(o)}re(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ts.get(s.largestBatchId).delete(n.key);this.ts.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Qc(e,n));let i=this.ts.get(e);void 0===i&&(i=hc(),this.ts.set(e,i)),this.ts.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.es=new xa(ih.ns),this.ss=new xa(ih.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new ih(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new ih(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new ua(new ra([])),n=new ih(e,t),s=new ih(e,t+1),i=[];return this.ss.forEachInRange([n,s],(t=>{this.us(t),i.push(t.key)})),i}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new ua(new ra([])),n=new ih(e,t),s=new ih(e,t+1);let i=hc();return this.ss.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ih(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ih{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return ua.comparator(t.key,e.key)||ta(t.ds,e.ds)}static rs(t,e){return ta(t.ds,e.ds)||ua.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new xa(ih.ns)}checkEmpty(t){return ya.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Gc(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this._s=this._s.add(new ih(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ya.resolve(r)}lookupMutationBatch(t,e){return ya.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ys(n),i=s<0?0:s;return ya.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ya.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ya.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ih(e,0),s=new ih(e,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,s],(t=>{const e=this.gs(t.ds);i.push(e)})),ya.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xa(ta);return e.forEach((t=>{const e=new ih(t,0),s=new ih(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,s],(t=>{n=n.add(t.ds)}))})),ya.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ua.isDocumentKey(i)||(i=i.child(""));const r=new ih(new ua(i),0);let o=new xa(ta);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ds)),!0)}),r),ya.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Vo(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return ya.forEach(e.mutations,(s=>{const i=new ih(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new ih(e,0),s=this._s.firstAfterOrEqual(n);return ya.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,ya.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.Ts=t,this.docs=new Aa(ua.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ya.resolve(n?n.document.mutableCopy():cu.newInvalidDocument(e))}getEntries(t,e){let n=nc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():cu.newInvalidDocument(t))})),ya.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=nc();const r=e.path,o=new ua(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||fa(ha(o),n)<=0||(s.has(o.key)||Xu(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ya.resolve(i)}getAllFromCollectionGroup(t,e,n,s){Fo()}Es(t,e){return ya.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ah(this)}getSize(t){return ya.resolve(this.size)}}class ah extends Jl{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Jn.addEntry(t,s)):this.Jn.removeEntry(n)})),ya.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.persistence=t,this.As=new tc((t=>Ou(t)),Uu),this.lastRemoteSnapshotVersion=sa.min(),this.highestTargetId=0,this.Rs=0,this.vs=new sh,this.targetCount=0,this.bs=Yl.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),ya.resolve()}getLastRemoteSnapshotVersion(t){return ya.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ya.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),ya.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),ya.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Yl(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,ya.resolve()}updateTargetData(t,e){return this.Sn(e),ya.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,ya.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),ya.waitFor(i).next((()=>s))}getTargetCount(t){return ya.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return ya.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),ya.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),ya.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),ya.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return ya.resolve(n)}containsKey(t,e){return ya.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new wa(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new uh(this),this.indexManager=new Ql,this.remoteDocumentCache=function(t){return new oh(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Kl(e),this.xs=new eh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new rh(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){Oo("MemoryPersistence","Starting transaction:",t);const s=new lh(this.Vs.next());return this.referenceDelegate.Ns(),n(s).next((t=>this.referenceDelegate.ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return ya.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class lh extends ga{constructor(t){super(),this.currentSequenceNumber=t}}class hh{constructor(t){this.persistence=t,this.$s=new sh,this.Ms=null}static Fs(t){return new hh(t)}get Bs(){if(this.Ms)return this.Ms;throw Fo()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),ya.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),ya.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),ya.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ya.forEach(this.Bs,(n=>{const s=ua.fromPath(n);return this.Ls(t,s).next((t=>{t||e.removeEntry(s,sa.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return ya.or([()=>ya.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=s}static Di(t,e){let n=hc(),s=hc();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dh(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ni(t,e).next((i=>i||this.ki(t,e,s,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Bu(e))return ya.resolve(null);let n=Ku(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Gu(e,null,"F"),n=Ku(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=hc(...s);return this.xi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.$i(e,s);return this.Mi(e,r,i,n.readTime)?this.Ni(t,Gu(e,null,"F")):this.Fi(t,r,e,n)}))))})))))}ki(t,e,n,s){return Bu(e)||s.isEqual(sa.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((i=>{const r=this.$i(e,i);return this.Mi(e,r,n,s)?this.Oi(t,e):(Lo()<=cn["in"].DEBUG&&Oo("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wu(e)),this.Fi(t,r,e,la(s,-1)))}))}$i(t,e){let n=new xa(Ju(t));return e.forEach(((e,s)=>{Xu(t,s)&&(n=n.add(s))})),n}Mi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return Lo()<=cn["in"].DEBUG&&Oo("QueryEngine","Using full collection scan to execute query:",Wu(e)),this.xi.getDocumentsMatchingQuery(t,e,da.min())}Fi(t,e,n,s){return this.xi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,e,n,s){this.persistence=t,this.Bi=e,this.serializer=s,this.Li=new Aa(ta),this.qi=new tc((t=>Ou(t)),Uu),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new th(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function gh(t,e,n,s){return new ph(t,e,n,s)}async function mh(t,e){const n=Bo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=hc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function yh(t,e){const n=Bo(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=ya.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Vo(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=hc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function vh(t){const e=Bo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function wh(t,e){const n=Bo(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.Ds.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,r.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Ma.EMPTY_BYTE_STRING,sa.min()).withLastLimboFreeSnapshotVersion(sa.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.Ds.updateTargetData(t,c))}));let a=nc(),u=hc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Eh(t,r,e.documentUpdates).next((t=>{a=t.zi,u=t.ji}))),!s.isEqual(sa.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return ya.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Li=i,t)))}function Eh(t,e,n){let s=hc(),i=hc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=nc();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(sa.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Oo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{zi:s,ji:i}}))}function Th(t,e){const n=Bo(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bh(t,e){const n=Bo(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ds.getTargetData(t,e).next((i=>i?(s=i,ya.resolve(s)):n.Ds.allocateTargetId(t).next((i=>(s=new zl(e,i,0,t.currentSequenceNumber),n.Ds.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Li.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function _h(t,e,n){const s=Bo(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!va(t))throw t;Oo("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Ch(t,e,n){const s=Bo(t);let i=sa.min(),r=hc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Bo(t),i=s.qi.get(n);return void 0!==i?ya.resolve(s.Li.get(i)):s.Ds.getTargetData(e,n)}(s,t,Ku(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Bi.getDocumentsMatchingQuery(t,e,n?i:sa.min(),n?r:hc()))).next((t=>(Ih(s,Yu(e),t),{documents:t,Wi:r})))))}function Ih(t,e,n){let s=t.Ui.get(e)||sa.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ui.set(e,s)}class kh{constructor(){this.activeTargetIds=fc()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sh{constructor(){this.Br=new kh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new kh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Oo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){Oo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh=null;function Nh(){return null===Rh?Rh=268435456+Math.round(2147483648*Math.random()):Rh++,"0x"+Rh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const xh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="WebChannelConnection";class Uh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,s,i){const r=Nh(),o=this.ao(t,e);Oo("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.ho(a,s,i),this.lo(t,o,a,n).then((e=>(Oo("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Mo("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+No,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=xh[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){const i=Nh();return new Promise(((r,o)=>{const a=new Do;a.setWithCredentials(!0),a.listenOnce(_o.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bo.NO_ERROR:const e=a.getResponseJson();Oo(Oh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case bo.TIMEOUT:Oo(Oh,`RPC '${t}' ${i} timed out`),o(new jo(qo.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const n=a.getStatus();if(Oo(Oh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(qo).indexOf(e)>=0?e:qo.UNKNOWN}(e.status);o(new jo(t,e.message))}else o(new jo(qo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new jo(qo.UNAVAILABLE,"Connection failed."));break;default:Fo()}}finally{Oo(Oh,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(s);Oo(Oh,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",u,n,15)}))}wo(t,e,n){const s=Nh(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Eo(),o=To(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ko({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Oo(Oh,`Creating RPC '${t}' stream ${s}: ${u}`,a);const c=r.createWebChannel(u,a);let l=!1,h=!1;const d=new Lh({Wr:e=>{h?Oo(Oh,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(Oo(Oh,`Opening RPC '${t}' stream ${s} transport.`),c.open(),l=!0),Oo(Oh,`RPC '${t}' stream ${s} sending:`,e),c.send(e))},Hr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,So.EventType.OPEN,(()=>{h||Oo(Oh,`RPC '${t}' stream ${s} transport opened.`)})),f(c,So.EventType.CLOSE,(()=>{h||(h=!0,Oo(Oh,`RPC '${t}' stream ${s} transport closed`),d.so())})),f(c,So.EventType.ERROR,(e=>{h||(h=!0,Mo(Oh,`RPC '${t}' stream ${s} transport errored:`,e),d.so(new jo(qo.UNAVAILABLE,"The operation could not be completed")))})),f(c,So.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];Vo(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Oo(Oh,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Xc[t];if(void 0!==e)return Zc(e)}(e),i=o.message;void 0===n&&(n=qo.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new jo(n,i)),c.close()}else Oo(Oh,`RPC '${t}' stream ${s} received:`,i),d.io(i)}})),f(o,Co.STAT_EVENT,(e=>{e.stat===Io.PROXY?Oo(Oh,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===Io.NOPROXY&&Oo(Oh,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){return new pl(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&Oo("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,s,i,r,o,a){this.Ws=t,this.bo=n,this.Po=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Fh(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===qo.RESOURCE_EXHAUSTED?(Uo(e.toString()),Uo("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===qo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new jo(qo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return Oo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(Oo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bh extends Vh{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=Dl(this.serializer,t),n=function(t){if(!("targetChange"in t))return sa.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?sa.min():e.readTime?vl(e.readTime):sa.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Il(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;return n=Mu(s)?{documents:Nl(t,s)}:{query:xl(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ml(t,e.resumeToken):e.snapshotVersion.compareTo(sa.min())>0&&(n.readTime=gl(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=Ol(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Il(this.serializer),e.removeTarget=t,this.Fo(e)}}class qh extends Vh{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Vo(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=Rl(t.writeResults,t.commitTime),n=vl(t.commitTime);return this.listener.Zo(n,e)}return Vo(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Il(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Al(this.serializer,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jo(qo.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jo(qo.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class $h{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Uo(e),this.ru=!1):Oo("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((t=>{n.enqueueAndForget((async()=>{Zh(this)&&(Oo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Bo(t);e.du.add(4),await Gh(e),e.mu.set("Unknown"),e.du.delete(4),await Kh(e)}(this))}))})),this.mu=new $h(n,s)}}async function Kh(t){if(Zh(t))for(const e of t.wu)await e(!0)}async function Gh(t){for(const e of t.wu)await e(!1)}function Hh(t,e){const n=Bo(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Jh(n)?Yh(n):yd(n).No()&&Wh(n,e))}function Qh(t,e){const n=Bo(t),s=yd(n);n.fu.delete(e),s.No()&&Xh(n,e),0===n.fu.size&&(s.No()?s.$o():Zh(n)&&n.mu.set("Unknown"))}function Wh(t,e){t.gu.Ot(e.targetId),yd(t).jo(e)}function Xh(t,e){t.gu.Ot(e),yd(t).Wo(e)}function Yh(t){t.gu=new ul({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),yd(t).start(),t.mu.ou()}function Jh(t){return Zh(t)&&!yd(t).xo()&&t.fu.size>0}function Zh(t){return 0===Bo(t).du.size}function td(t){t.gu=void 0}async function ed(t){t.fu.forEach(((e,n)=>{Wh(t,e)}))}async function nd(t,e){td(t),Jh(t)?(t.mu.au(e),Yh(t)):t.mu.set("Unknown")}async function sd(t,e,n){if(t.mu.set("Online"),e instanceof ol&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.fu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.fu.delete(s),t.gu.removeTarget(s))}(t,e)}catch(n){Oo("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await id(t,n)}else if(e instanceof il?t.gu.Kt(e):e instanceof rl?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(sa.min()))try{const e=await vh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.fu.get(s);i&&t.fu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Ma.EMPTY_BYTE_STRING,n.snapshotVersion)),Xh(t,e);const s=new zl(n.target,e,1,n.sequenceNumber);Wh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Oo("RemoteStore","Failed to raise snapshot:",e),await id(t,e)}}async function id(t,e,n){if(!va(e))throw e;t.du.add(1),await Gh(t),t.mu.set("Offline"),n||(n=()=>vh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Oo("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Kh(t)}))}function rd(t,e){return e().catch((n=>id(t,n,e)))}async function od(t){const e=Bo(t),n=vd(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ad(e);)try{const t=await Th(e.localStore,s);if(null===t){0===e.lu.length&&n.$o();break}s=t.batchId,ud(e,t)}catch(t){await id(e,t)}cd(e)&&ld(e)}function ad(t){return Zh(t)&&t.lu.length<10}function ud(t,e){t.lu.push(e);const n=vd(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function cd(t){return Zh(t)&&!vd(t).xo()&&t.lu.length>0}function ld(t){vd(t).start()}async function hd(t){vd(t).tu()}async function dd(t){const e=vd(t);for(const n of t.lu)e.Yo(n.mutations)}async function fd(t,e,n){const s=t.lu.shift(),i=Hc.from(s,e,n);await rd(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await od(t)}async function pd(t,e){e&&vd(t).Jo&&await async function(t,e){if(n=e.code,Jc(n)&&n!==qo.ABORTED){const n=t.lu.shift();vd(t).Oo(),await rd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await od(t)}var n}(t,e),cd(t)&&ld(t)}async function gd(t,e){const n=Bo(t);n.asyncQueue.verifyOperationInProgress(),Oo("RemoteStore","RemoteStore received new credentials");const s=Zh(n);n.du.add(3),await Gh(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Kh(n)}async function md(t,e){const n=Bo(t);e?(n.du.delete(2),await Kh(n)):e||(n.du.add(2),await Gh(n),n.mu.set("Unknown"))}function yd(t){return t.yu||(t.yu=function(t,e,n){const s=Bo(t);return s.nu(),new Bh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Jr:ed.bind(null,t),Zr:nd.bind(null,t),zo:sd.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Jh(t)?Yh(t):t.mu.set("Unknown")):(await t.yu.stop(),td(t))}))),t.yu}function vd(t){return t.pu||(t.pu=function(t,e,n){const s=Bo(t);return s.nu(),new qh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Jr:hd.bind(null,t),Zr:pd.bind(null,t),Xo:dd.bind(null,t),Zo:fd.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await od(t)):(await t.pu.stop(),t.lu.length>0&&(Oo("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wd{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new $o,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new wd(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jo(qo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ed(t,e){if(Uo("AsyncQueue",`${e}: ${t}`),va(t))return new jo(qo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ua.comparator(e.key,n.key):(t,e)=>ua.comparator(t.key,e.key),this.keyedMap=ic(),this.sortedSet=new Aa(this.comparator)}static emptySet(t){return new Td(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Td))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Td;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.Iu=new Aa(ua.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Fo():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class _d{constructor(t,e,n,s,i,r,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new _d(t,e,Td.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Eu=void 0,this.listeners=[]}}class Id{constructor(){this.queries=new tc((t=>Qu(t)),Hu),this.onlineState="Unknown",this.Au=new Set}}async function kd(t,e){const n=Bo(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Cd),i)try{r.Eu=await n.onListen(s)}catch(t){const n=Ed(t,`Initialization of query '${Wu(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Rd(n)}async function Sd(t,e){const n=Bo(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Dd(t,e){const n=Bo(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(s=!0);e.Eu=i}}s&&Rd(n)}function Ad(t,e,n){const s=Bo(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Rd(t){t.Au.forEach((t=>{t.next()}))}class Nd{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new _d(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=_d.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{constructor(t){this.key=t}}class Ld{constructor(t){this.key=t}}class Od{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=hc(),this.mutatedKeys=hc(),this.Ku=Ju(t),this.Gu=new Td(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new bd,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),l=Xu(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||u&&this.Ku(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(r=r.add(l),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,ju:n,Mi:o,mutatedKeys:i}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fo()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new _d(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:r}:{Yu:r}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new bd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=hc(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Ld(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new xd(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=hc();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return _d.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Ud{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Md{constructor(t){this.key=t,this.ec=!1}}class Pd{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new tc((t=>Qu(t)),Hu),this.ic=new Map,this.rc=new Set,this.oc=new Aa(ua.comparator),this.uc=new Map,this.cc=new sh,this.ac={},this.hc=new Map,this.lc=Yl.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Fd(t,e){const n=sf(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await bh(n.localStore,Ku(e));n.isPrimaryClient&&Hh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Vd(n,e,s,"current"===r,t.resumeToken)}return i}async function Vd(t,e,n,s,i){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.zu(n);i.Mi&&(i=await Ch(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Yd(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const r=await Ch(t.localStore,e,!0),o=new Od(e,r.Wi),a=o.zu(r.documents),u=sl.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);Yd(t,n,c.Yu);const l=new Ud(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Bd(t,e){const n=Bo(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!Hu(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _h(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Qh(n.remoteStore,s.targetId),Wd(n,s.targetId)})).catch(ma)):(Wd(n,s.targetId),await _h(n.localStore,s.targetId,!0))}async function qd(t,e,n){const s=rf(t);try{const t=await function(t,e){const n=Bo(t),s=na.now(),i=e.reduce(((t,e)=>t.add(e.key)),hc());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=nc(),u=hc();return n.Ki.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Pc(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Bc(t.key,e,uu(e.value.mapValue),Nc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:rc(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new Aa(ta)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await tf(s,t.changes),await od(s.remoteStore)}catch(t){const e=Ed(t,"Failed to persist write");n.reject(e)}}async function jd(t,e){const n=Bo(t);try{const t=await wh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(Vo(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?Vo(s.ec):t.removedDocuments.size>0&&(Vo(s.ec),s.ec=!1))})),await tf(n,t,e)}catch(t){await ma(t)}}function $d(t,e,n){const s=Bo(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.Ru(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Bo(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Ru(e)&&(s=!0)})),s&&Rd(n)}(s.eventManager,e),t.length&&s.nc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zd(t,e,n){const s=Bo(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new Aa(ua.comparator);t=t.insert(r,cu.newNoDocument(r,sa.min()));const n=hc().add(r),i=new nl(sa.min(),new Map,new xa(ta),t,n);await jd(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),Zd(s)}else await _h(s.localStore,e,!1).then((()=>Wd(s,e,n))).catch(ma)}async function Kd(t,e){const n=Bo(t),s=e.batch.batchId;try{const t=await yh(n.localStore,e);Qd(n,s,null),Hd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tf(n,t)}catch(t){await ma(t)}}async function Gd(t,e,n){const s=Bo(t);try{const t=await function(t,e){const n=Bo(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Vo(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Qd(s,e,n),Hd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await tf(s,t)}catch(n){await ma(n)}}function Hd(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Qd(t,e,n){const s=Bo(t);let i=s.ac[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Wd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||Xd(t,e)}))}function Xd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Qh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Zd(t))}function Yd(t,e,n){for(const s of n)s instanceof xd?(t.cc.addReference(s.key,e),Jd(t,s)):s instanceof Ld?(Oo("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Xd(t,s.key)):Fo()}function Jd(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Oo("SyncEngine","New document in limbo: "+n),t.rc.add(s),Zd(t))}function Zd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ua(ra.fromString(e)),s=t.lc.next();t.uc.set(s,new Md(n)),t.oc=t.oc.insert(n,s),Hh(t.remoteStore,new zl(Ku(Vu(n.path)),s,2,wa.ct))}}async function tf(t,e,n){const s=Bo(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=dh.Di(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.zo(i),await async function(t,e){const n=Bo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ya.forEach(e,(e=>ya.forEach(e.Vi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>ya.forEach(e.Si,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!va(t))throw t;Oo("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Li.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Li=n.Li.insert(t,i)}}}(s.localStore,r))}async function ef(t,e){const n=Bo(t);if(!n.currentUser.isEqual(e)){Oo("SyncEngine","User change. New user:",e.toKey());const t=await mh(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new jo(qo.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await tf(n,t.Qi)}}function nf(t,e){const n=Bo(t),s=n.uc.get(e);if(s&&s.ec)return hc().add(s.key);{let t=hc();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function sf(t){const e=Bo(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zd.bind(null,e),e.nc.zo=Dd.bind(null,e.eventManager),e.nc.wc=Ad.bind(null,e.eventManager),e}function rf(t){const e=Bo(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gd.bind(null,e),e}class of{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ph(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return gh(this.persistence,new fh,t.initialUser,this.serializer)}createPersistence(t){return new ch(hh.Fs,this.serializer)}createSharedClientState(t){return new Sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class af{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>$d(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ef.bind(null,this.syncEngine),await md(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Id}createDatastore(t){const e=Ph(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Uh(s));var s;return function(t,e,n,s){return new jh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>$d(this.syncEngine,t,0),r=Ah.D()?new Ah:new Dh,new zh(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Pd(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Bo(t);Oo("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Gh(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Uo("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cf{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ro.UNAUTHENTICATED,this.clientId=Zo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Oo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Oo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $o;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ed(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function lf(t,e){t.asyncQueue.verifyOperationInProgress(),Oo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await mh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function hf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ff(t);Oo("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>gd(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>gd(e.remoteStore,n))),t._onlineComponents=e}function df(t){return"FirebaseError"===t.name?t.code===qo.FAILED_PRECONDITION||t.code===qo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function ff(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Oo("FirestoreClient","Using user provided OfflineComponentProvider");try{await lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!df(n))throw n;Mo("Error using user provided cache. Falling back to memory cache: "+n),await lf(t,new of)}}else Oo("FirestoreClient","Using default OfflineComponentProvider"),await lf(t,new of);return t._offlineComponents}async function pf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Oo("FirestoreClient","Using user provided OnlineComponentProvider"),await hf(t,t._uninitializedComponentsProvider._online)):(Oo("FirestoreClient","Using default OnlineComponentProvider"),await hf(t,new af))),t._onlineComponents}function gf(t){return pf(t).then((t=>t.syncEngine))}async function mf(t){const e=await pf(t),n=e.eventManager;return n.onListen=Fd.bind(null,e.syncEngine),n.onUnlisten=Bd.bind(null,e.syncEngine),n}function yf(t,e,n={}){const s=new $o;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new uf({next:n=>{e.enqueueAndForget((()=>Sd(t,o))),n.fromCache&&"server"===s.source?i.reject(new jo(qo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Nd(n,r,{includeMetadataChanges:!0,xu:!0});return kd(t,o)}(await mf(t),t.asyncQueue,e,n,s))),s.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e,n){if(!n)throw new jo(qo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ef(t,e,n,s){if(!0===e&&!0===s)throw new jo(qo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!ua.isDocumentKey(t))throw new jo(qo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bf(t){if(ua.isDocumentKey(t))throw new jo(qo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _f(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Fo()}function Cf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new jo(qo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_f(t);throw new jo(qo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new jo(qo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new jo(qo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ef("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jo(qo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new jo(qo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ko;switch(t.type){case"firstParty":return new Wo(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new jo(qo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=vf.get(t);e&&(Oo("ComponentProvider","Removing Datastore"),vf.delete(t),e.terminate())}(this),Promise.resolve()}}function Sf(t,e,n,s={}){var i;const r=(t=Cf(t,kf))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ro.MOCK_USER;else{e=(0,H.Sg)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new jo(qo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ro(r)}t._authCredentials=new Go(new zo(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Df(this.firestore,t,this._key)}}class Af{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Af(this.firestore,t,this._query)}}class Rf extends Af{constructor(t,e,n){super(t,e,Vu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Df(this.firestore,null,new ua(t))}withConverter(t){return new Rf(this.firestore,t,this._path)}}function Nf(t,e,...n){if(t=(0,H.m9)(t),wf("collection","path",e),t instanceof kf){const s=ra.fromString(e,...n);return bf(s),new Rf(t,null,s)}{if(!(t instanceof Df||t instanceof Rf))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ra.fromString(e,...n));return bf(s),new Rf(t.firestore,null,s)}}function xf(t,e,...n){if(t=(0,H.m9)(t),1===arguments.length&&(e=Zo.A()),wf("doc","path",e),t instanceof kf){const s=ra.fromString(e,...n);return Tf(s),new Df(t,null,new ua(s))}{if(!(t instanceof Df||t instanceof Rf))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ra.fromString(e,...n));return Tf(s),new Df(t.firestore,t instanceof Rf?t.converter:null,new ua(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lf{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Fh(this,"async_queue_retry"),this.qc=()=>{const t=Mh();t&&Oo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Mh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Mh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new $o;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(Cn){if(!va(Cn))throw Cn;Oo("AsyncQueue","Operation failed with retryable error: "+Cn)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Uo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const s=wd.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(s),s}Uc(){this.Mc&&Fo()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Of extends kf{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Lf,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pf(this),this._firestoreClient.terminate()}}function Uf(t,e){const n="object"==typeof t?t:(0,G.getApp)(),s="string"==typeof t?t:e||"(default)",i=(0,G._getProvider)(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=(0,H.P0)("firestore");t&&Sf(i,...t)}return i}function Mf(t){return t._firestoreClient||Pf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pf(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new za(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cf(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ff{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ff(Ma.fromBase64String(t))}catch(t){throw new jo(qo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ff(Ma.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new jo(qo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new aa(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jo(qo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jo(qo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ta(this._lat,t._lat)||ta(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=/^__.*__$/;class $f{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Bc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vc(t,this.data,e,this.fieldTransforms)}}function zf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fo()}}class Kf{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Kf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.ea(t),s}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.Jc(),s}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return np(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(zf(this.Yc)&&jf.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Gf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ph(t)}ua(t,e,n,s=!1){return new Kf({Yc:t,methodName:e,oa:n,path:aa.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hf(t){const e=t._freezeSettings(),n=Ph(t._databaseId);return new Gf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qf(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);Jf("Data must be an object, but it was:",o,s);const a=Xf(s,o);let u,c;if(r.merge)u=new Oa(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Zf(e,s,n);if(!o.contains(i))throw new jo(qo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sp(t,i)||t.push(i)}u=new Oa(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new $f(new au(a),u,c)}function Wf(t,e){if(Yf(t=(0,H.m9)(t)))return Jf("Unsupported field value:",e,t),Xf(t,e);if(t instanceof Bf)return function(t,e){if(!zf(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Wf(i,e.sa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,H.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mc(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=na.fromDate(t);return{timestampValue:gl(e.serializer,n)}}if(t instanceof na){const n=new na(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gl(e.serializer,n)}}if(t instanceof qf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ff)return{bytesValue:ml(e.serializer,t._byteString)};if(t instanceof Df){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wl(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${_f(t)}`)}(t,e)}function Xf(t,e){const n={};return Da(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sa(t,((t,s)=>{const i=Wf(s,e.Xc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Yf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof na||t instanceof qf||t instanceof Ff||t instanceof Df||t instanceof Bf)}function Jf(t,e,n){if(!Yf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=_f(n);throw"an object"===s?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Zf(t,e,n){if((e=(0,H.m9)(e))instanceof Vf)return e._internalPath;if("string"==typeof e)return ep(t,e);throw np("Field path arguments must be of type string or ",t,!1,void 0,n)}const tp=new RegExp("[~\\*/\\[\\]]");function ep(t,e,n){if(e.search(tp)>=0)throw np(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vf(...e.split("."))._internalPath}catch(s){throw np(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function np(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new jo(qo.INVALID_ARGUMENT,a+t+u)}function sp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Df(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new rp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(op("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class rp extends ip{data(){return super.data()}}function op(t,e){return"string"==typeof e?ep(t,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new jo(qo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{convertValue(t,e="none"){switch(Ha(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Va(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ba(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Fo()}}convertObject(t,e){const n={};return Sa(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new qf(Va(t.latitude),Va(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ja(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp($a(t));default:return null}}convertTimestamp(t){const e=Fa(t);return new na(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ra.fromString(t);Vo($l(n));const s=new Ka(n.get(1),n.get(3)),i=new ua(n.popFirst(5));return s.isEqual(e)||Uo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hp extends ip{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(op("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class dp extends hp{data(t={}){return super.data(t)}}class fp{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new lp(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new dp(this._firestore,this._userDataWriter,n.key,n,new lp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new jo(qo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new dp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new dp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new lp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:pp(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function pp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fo()}}class gp extends up{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ff(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Df(this.firestore,null,e)}}function mp(t){t=Cf(t,Af);const e=Cf(t.firestore,Of),n=Mf(e),s=new gp(e);return ap(t._query),yf(n,t._query).then((n=>new fp(e,s,t,n)))}function yp(t,e,n){t=Cf(t,Df);const s=Cf(t.firestore,Of),i=cp(t.converter,e,n);return wp(s,[Qf(Hf(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Nc.none())])}function vp(t){return wp(Cf(t.firestore,Of),[new zc(t._key,Nc.none())])}function wp(t,e){return function(t,e){const n=new $o;return t.asyncQueue.enqueueAndForget((async()=>qd(await gf(t),e,n))),n.promise}(Mf(t),e)}async function Ep(t,e){for(let n=0;n<t.length;n++){const s=t[n];null!=s.id&&await yp(xf(e,t[n].id),{link:s.link?s.link:"",urls:s.urls?s.urls:"",text:s.text?s.text:"",name:s.name?s.name:"",size:s.size?s.size:""})}}async function Tp(t,e){try{console.log(e),await vp(xf(t,e)),console.log(t)}catch(n){const t={},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(e)}}!function(t,e=!0){!function(t){No=t}(G.SDK_VERSION),(0,G._registerComponent)(new Q.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Of(new Ho(t.getProvider("auth-internal")),new Yo(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new jo(qo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,G.registerVersion)(Ao,"3.10.1",t),(0,G.registerVersion)(Ao,"3.10.1","esm2017")}();var bp=n(1609);const _p=Uf(en.w),Cp=(0,bp.v0)(en.w),Ip=Nf(_p,"users"),kp=xf(Ip,Cp.currentUser.uid),Sp=Nf(kp,"banners"),Dp=xf(Sp,"banner"),Ap=Nf(Dp,"MainTop");async function Rp(t){if(t.length)for(let e=0;e<t.length;e++)an("banner/MainTop",t[e]),Tp(Ap,t[e])}async function Np(t){for(let e=0;e<t.length;e++){const n=t[e];null!=n.id&&null!=n.src&&(n.link=await on("banner/MainTop/",n))}Ep(t,Ap)}function xp(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),i=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return`${e}${n}${s}${i}${r}${o}`}const Lp=Uf(en.w),Op=(0,bp.v0)(en.w),Up=Nf(Lp,"users"),Mp=xf(Up,Op.currentUser.uid),Pp=Nf(Mp,"banners"),Fp=xf(Pp,"banner"),Vp=Nf(Fp,"MainTop");var Bp=n(7139);const qp={class:"card"},jp={class:"card-header"},$p={class:"card-title"},zp={class:"card-tools"},Kp={class:"card-body"},Gp={key:0,class:"card-footer"},Hp={key:1,class:"overlay"},Qp=(0,s._)("i",{class:"fas fa-2x fa-sync-alt fa-spin"},null,-1),Wp=[Qp];function Xp(t,e,n,i,r,o){return(0,s.wg)(),(0,s.iD)("div",qp,[(0,s._)("div",jp,[(0,s._)("h3",$p,(0,Bp.zw)(n.title),1),(0,s._)("div",zp,[(0,s.WI)(t.$slots,"tools")])]),(0,s._)("div",Kp,[(0,s.WI)(t.$slots,"body")]),n.footer?((0,s.wg)(),(0,s.iD)("div",Gp,[(0,s.WI)(t.$slots,"footer")])):(0,s.kq)("",!0),n.isLoading?((0,s.wg)(),(0,s.iD)("div",Hp,Wp)):(0,s.kq)("",!0)])}var Yp={props:{title:{type:String,default:""},isLoading:{type:Boolean,default:!1},footer:{type:Boolean,default:!0}}};const Jp=(0,$.Z)(Yp,[["render",Xp]]);var Zp=Jp;const tg=t=>((0,s.dD)("data-v-70a89d59"),t=t(),(0,s.Cn)(),t),eg=["disabled"],ng=tg((()=>(0,s._)("i",{class:"fas fa-times"},null,-1))),sg=[ng],ig={class:"content-block"},rg={class:"img-block mb-1"},og={class:"image-wrapper"},ag={key:0},ug={key:1},cg={class:"inputs-block"},lg={key:0,class:"input-group mb-1"},hg=tg((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-link"})])],-1))),dg=["value"],fg={key:1,class:"input-group mb-1"},pg=tg((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-comment"})])],-1))),gg=["value"];function mg(t,e,n,i,r,o){const a=(0,s.up)("card"),u=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.j4)(a,{class:"card-dark",footer:!1},{tools:(0,s.w5)((()=>[(0,s._)("button",{type:"button",class:(0,Bp.C_)(["btn btn-tool",{opacity:null===n.elementData.id}]),onClick:e[0]||(e[0]=(...t)=>o.DeleteElement&&o.DeleteElement(...t)),disabled:null===n.elementData.id},sg,10,eg)])),body:(0,s.w5)((()=>[(0,s._)("div",ig,[(0,s._)("div",rg,[(0,s._)("div",og,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("img",{class:"img",key:o.currentImage,alt:"altText",onError:e[1]||(e[1]=(...t)=>o.handleImageError&&o.handleImageError(...t))},null,32)),[[u,o.currentImage]])]),(0,s._)("button",{class:"btn btn-absolute",onClick:e[2]||(e[2]=(...t)=>o.SelectFiles&&o.SelectFiles(...t)),type:"button"},[n.elementData.link||n.elementData.src?((0,s.wg)(),(0,s.iD)("span",ug,"Змінити")):((0,s.wg)(),(0,s.iD)("span",ag,"Добавити"))])]),(0,s._)("div",cg,[n.urls&&n.elementData.id?((0,s.wg)(),(0,s.iD)("div",lg,[hg,(0,s._)("input",{type:"text",class:"form-control",value:n.elementData.urls,onInput:e[3]||(e[3]=(...t)=>o.ChangeURL&&o.ChangeURL(...t)),placeholder:"URL"},null,40,dg)])):(0,s.kq)("",!0),n.text&&n.elementData.id?((0,s.wg)(),(0,s.iD)("div",fg,[pg,(0,s._)("input",{type:"text",class:"form-control",value:n.elementData.text,onInput:e[4]||(e[4]=(...t)=>o.ChangeText&&o.ChangeText(...t)),placeholder:"Text"},null,40,gg)])):(0,s.kq)("",!0)])])])),footer:(0,s.w5)((()=>[])),_:1})}var yg={data(){return{error:!1}},props:{elementData:Object,text:{type:Boolean,default:!1},urls:{type:Boolean,default:!1}},components:{card:Zp},computed:{currentImage(){return!this.error&&this.elementData.link?this.elementData.link:!this.error&&this.elementData.src?this.elementData.src:"https://via.placeholder.com/1000x190"}},methods:{handleImageError(){this.error=!0},DeleteElement(){this.$emit("DeleteElement",this.elementData.id)},SelectFiles(){this.$emit("SelectFiles",this.elementData.id)},ChangeURL(t){this.$emit("ChangeURL",t.target.value,this.elementData.id)},ChangeText(t){this.$emit("ChangeText",t.target.value,this.elementData.id)}}};const vg=(0,$.Z)(yg,[["render",mg],["__scopeId","data-v-70a89d59"]]);var wg=vg;function Eg(t,e,n){if(e>0&&t.length>1){const s=t.findIndex((t=>t.id===e));-1!==s&&(null!==t[s].link&&n.push(e),t.splice(s,1))}}function Tg(t,e,n){const s=t.target.files,i=e.length-1;if(null===n&&s.length>0)for(let r=s.length-1;r>=0;r--){const t=s[r];e.splice(i,0,{id:`${xp()}${r}`,src:URL.createObjectURL(t)})}else if(1===s.length){const t=e.findIndex((t=>t.id===n));-1!==t&&t!==e.length&&(e.find((t=>t.name===s[0].name&&t.size===s[0].size))||e.splice(t,1,{src:URL.createObjectURL(s[0]),id:n}))}}var bg={data(){return{itemsList:[{id:null}],removeList:[],isLoading:!1,id:0,functionality:!0,time:0}},components:{addImgCard:K,OnMainTop:Cg,card:Zp,ImgCard:wg},props:{title:{type:String},eText:{type:Boolean,default:!1},eUrls:{type:Boolean,default:!1},eTime:{type:Boolean,default:!1},eFunctionality:{type:Boolean,default:!1}},created(){this.UpdateLIst()},methods:{SelectFiles(t){this.$refs.inputGroupFile.click(),this.id=t},CreateData(t){Tg(t,this.itemsList,this.id),this.$refs.inputGroupFile.value=""},ChangeText(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].text=t},ChangeURL(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].urls=t},DeleteElement(t){Eg(this.itemsList,t,this.removeList)},UpdateDataBase(){Rp(this.removeList),Np(this.itemsList),this.removeList=[]},async UpdateLIst(){this.isLoading=!0;try{this.itemsList=[{src:null,urls:null,text:null,id:null}];const t=await mp(Vp);t.forEach((t=>{const e={text:t.data().text?t.data().text:null,urls:t.data().urls?t.data().urls:null,link:t.data().link,id:t.id},n=this.itemsList.findIndex((t=>t.id===e.id));-1===n?this.itemsList.splice(this.itemsList.length-1,0,e):this.itemsList[n]=e})),this.itemsList.sort(((t,e)=>null!==t.id&&null!==e.id?t.id-e.id:null===t.id&&null!==e.id?1:null!==t.id&&null===e.id?-1:0))}catch(t){console.log(t)}this.isLoading=!1}}};const _g=(0,$.Z)(bg,[["render",T]]);var Cg=_g;const Ig=(0,s._)("i",{class:"fas fa-sync-alt"},null,-1),kg=[Ig],Sg={class:"grid-cards"},Dg={class:"custom-file position-absolute w-0 h-0"},Ag=(0,s._)("span",null,"Зберегти",-1),Rg=[Ag];function Ng(t,e){const n=(0,s.up)("img-card"),i=(0,s.up)("card");return(0,s.wg)(),(0,s.j4)(i,{title:t.title,isLoading:t.isLoading},{tools:(0,s.w5)((()=>[(0,s._)("button",{type:"button",class:"btn btn-tool",onClick:e[0]||(e[0]=(...e)=>t.UpdateLIst&&t.UpdateLIst(...e))},kg)])),body:(0,s.w5)((()=>[(0,s._)("div",Sg,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.itemsList,(e=>((0,s.wg)(),(0,s.j4)(n,{elementData:e,key:e.id,onSelectFiles:t.SelectFiles,onDeleteElement:t.DeleteElement,onChangeURL:t.ChangeURL,onChangeText:t.ChangeText},null,8,["elementData","onSelectFiles","onDeleteElement","onChangeURL","onChangeText"])))),128))]),(0,s._)("div",Dg,[(0,s._)("input",{type:"file",class:"custom-file-input",ref:"inputGroupFile",multiple:"",onChange:e[1]||(e[1]=(...e)=>t.CreateData&&t.CreateData(...e))},null,544)])])),footer:(0,s.w5)((()=>[(0,s._)("span",{class:"btn btn-xs btn-success col fileinput-button",onClick:e[2]||(e[2]=e=>t.UpdateDataBase())},Rg)])),_:1},8,["title","isLoading"])}var xg={data(){return{itemsList:[{id:null}],removeList:[],isLoading:!1,id:0}},components:{addImgCard:K,OnMainTop:Cg,card:Zp,ImgCard:wg},props:{title:{type:String}},created(){this.UpdateLIst()},methods:{SelectFiles(t){this.$refs.inputGroupFile.click(),this.id=t},CreateData(t){const e=t.target.files,n=this.itemsList.length-1;if(null===this.id&&e.length>0)for(let s=e.length-1;s>=0;s--){const t=e[s];this.itemsList.find((e=>e.name===t.name&&e.size===t.size))||(console.log(t),this.itemsList.splice(n,0,{id:`${xp()}${s}`,src:URL.createObjectURL(t),name:t.name,size:t.size}))}else if(1===e.length){const t=this.itemsList.findIndex((t=>t.id===this.id));-1!==t&&t!==this.itemsList.length-1&&(this.itemsList.find((t=>t.name===e[0].name&&t.size===e[0].size))||this.itemsList.splice(t,1,{src:URL.createObjectURL(e[0]),urls:null,text:null,id:this.id,name:e[0].name,size:e[0].size}))}this.$refs.inputGroupFile.value=""},ChangeText(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].text=t},ChangeURL(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].urls=t},DeleteElement(t){Eg(this.itemsList,t,this.removeList)},UpdateDataBase(){Rp(this.removeList),Np(this.itemsList),this.removeList=[]},async UpdateLIst(){this.isLoading=!0;try{this.itemsList=[{src:null,urls:null,text:null,id:null}];const t=await mp(Vp);t.forEach((t=>{const e={text:t.data().text,urls:t.data().urls,link:t.data().link,name:t.data().name,size:t.data().size,src:null,id:t.id},n=this.itemsList.findIndex((t=>t.id===e.id));-1===n?this.itemsList.splice(this.itemsList.length-1,0,e):this.itemsList[n]=e})),this.itemsList.sort(((t,e)=>null!==t.id&&null!==e.id?t.id-e.id:null===t.id&&null!==e.id?1:null!==t.id&&null===e.id?-1:0))}catch(t){console.log(t)}this.isLoading=!1}}};const Lg=(0,$.Z)(xg,[["render",Ng]]);var Og=Lg,Ug={components:{onMainTop:Cg,bannerInBackground:Og}};const Mg=(0,$.Z)(Ug,[["render",i],["__scopeId","data-v-4ff93b0e"]]);var Pg=Mg}}]);
//# sourceMappingURL=697.fc04a85c.js.map