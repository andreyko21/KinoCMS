"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[721],{4494:function(t,e,n){n.d(e,{r:function(){return i}});var s=n(36);class i{async AddImgDocument(t,e,n,i){for(let r=0;r<t.length;r++){const o=t[r];if(null!=o.id){const a={link:o.link?o.link:""};n&&(a.text=o.text?o.text:""),i&&(a.urls=o.urls?o.urls:""),await(0,s.pl)((0,s.JU)(e,t[r].id),a)}}}async AddDocument(t,e,n){await(0,s.pl)((0,s.JU)(t,e),n)}async DeleteDocument(t,e){try{await(0,s.oe)((0,s.JU)(t,e))}catch(n){const t={},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(e)}}async DeleteFieldFromDocument(t){try{await(0,s.r7)(t,{capital:(0,s.AK)()})}catch(e){const t={unknown:"Сталася невідома помилка при видаленні поля з документа."},n=t[e.code]||"Не вдалося видалити поле з документа.";throw new Error(n)}}async GetDocument(t,e){const n=(0,s.JU)(t,e),i=await(0,s.QT)(n);return i.data()}async GetFilteredDocuments(t,e){const n=(0,s.IO)(t,e);try{const t=await(0,s.PL)(n);return t}catch(i){const t={"permission-denied":"Відмовлено в доступі до колекції.","invalid-argument":"Переданий недійсний аргумент.",unknown:"Сталася невідома помилка під час отримання даних з колекції."},e=t[i.code]||"Не вдалося отримати документи з колекції.";throw new Error(e)}}async GetAllDocuments(t){try{const e=await(0,s.PL)(t);e.forEach((t=>{console.log(t.id," => ",t.data())}))}catch(e){const t={"permission-denied":"Відмовлено в доступі до колекції.","invalid-argument":"Переданий недійсний аргумент.",unknown:"Сталася невідома помилка під час отримання даних з колекції."},n=t[e.code]||"Не вдалося отримати документи з колекції.";throw new Error(n)}}}},4592:function(t,e,n){n.d(e,{Pe:function(){return p},Qc:function(){return y},d$:function(){return f},j5:function(){return v},kt:function(){return d}});var s=n(1609),i=n(36),r=n(3185);const o=(0,i.ad)(r.w),a=(0,s.v0)(r.w),u=(0,i.hJ)(o,"users"),c=(0,i.JU)(u,a.currentUser.uid),l=(0,i.hJ)(c,"banners"),h=(0,i.JU)(l,"banner"),d=(0,i.hJ)(h,"MainTop"),f=(0,i.hJ)(h,"MainNewsPromotions"),p=(0,i.hJ)(h,"BackgroundBanner"),g=(0,i.hJ)(c,"films"),m=(0,i.JU)(g,"film"),y=(0,i.hJ)(m,"filmsRef"),v=(0,i.hJ)(m,"filmsGallary")},8634:function(t,e,n){n.d(e,{L:function(){return Be}});n(7658);var s=n(36),i=n(1609),r=n(3185);function o(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),i=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return`${e}${n}${s}${i}${r}${o}`}const a=(0,s.ad)(r.w),u=(0,i.v0)(r.w),c=(0,s.hJ)(a,"users"),l=(0,s.JU)(c,u.currentUser.uid),h=(0,s.hJ)(l,"banners"),d=(0,s.JU)(h,"banner");(0,s.hJ)(d,"MainTop");var f=n(4494),p=(n(2801),n(3767),n(8585),n(8696),n(7077)),g=n(223),m=n(7142);
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
const y="firebasestorage.googleapis.com",v="storageBucket",w=12e4,E=6e5;
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
class T extends g.ZR{constructor(t,e,n=0){super(I(t),`Firebase Storage: ${e} (${I(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return I(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var _,b;function I(t){return"storage/"+t}function C(){const t="An unknown error occurred, please check the error payload for server response.";return new T(_.UNKNOWN,t)}function A(t){return new T(_.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function S(t){return new T(_.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function k(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T(_.UNAUTHENTICATED,t)}function D(){return new T(_.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function R(t){return new T(_.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function N(){return new T(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function x(){return new T(_.CANCELED,"User canceled the upload/download.")}function L(t){return new T(_.INVALID_URL,"Invalid URL '"+t+"'.")}function O(t){return new T(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function U(){return new T(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+v+"' property when initializing the app?")}function M(){return new T(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function F(){return new T(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function P(t){return new T(_.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function V(t){return new T(_.INVALID_ARGUMENT,t)}function B(){return new T(_.APP_DELETED,"The Firebase app was deleted.")}function q(t){return new T(_.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $(t,e){return new T(_.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function j(t){throw new T(_.INTERNAL_ERROR,"Internal error: "+t)}
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(_||(_={}));class z{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=z.makeFromUrl(t,e)}catch(s){return new z(t,"")}if(""===n.path)return n;throw O(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",o=new RegExp("^gs://"+s+r,"i"),a={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const c="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${c}/b/${s}/o${h}`,"i"),f={bucket:1,path:3},p=e===y?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${s}/${g}`,"i"),v={bucket:1,path:2},w=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:u},{regex:m,indices:v,postModify:u}];for(let y=0;y<w.length;y++){const e=w[y],s=e.regex.exec(t);if(s){const t=s[e.indices.bucket];let i=s[e.indices.path];i||(i=""),n=new z(t,i),e.postModify(n);break}}if(null==n)throw L(t);return n}}class G{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function K(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,u())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(c)return void d();if(t)return d(),void l.call(null,t,...e);const n=u()||o;if(n)return d(),void l.call(null,t,...e);let i;s<64&&(s*=2),1===a?(a=2,i=0):i=1e3*(s+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,g(!0)}),n),g}function Q(t){t(!1)}
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
 */function H(t){return void 0!==t}function W(t){return"object"===typeof t&&!Array.isArray(t)}function X(t){return"string"===typeof t||t instanceof String}function Y(t){return J()&&t instanceof Blob}function J(){return"undefined"!==typeof Blob&&!(0,g.UG)()}function Z(t,e,n,s){if(s<e)throw V(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw V(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function tt(t,e,n){let s=e;return null==n&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function et(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
function nt(t,e){const n=t>=500&&t<600,s=[408,429],i=-1!==s.indexOf(t),r=-1!==e.indexOf(t);return n||i||r}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(b||(b={}));class st{constructor(t,e,n,s,i,r,o,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new it(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const e=n.getErrorCode()===b.NO_ERROR,i=n.getStatus();if(!e||nt(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===b.ABORT;return void t(!1,new it(!1,null,e))}const r=-1!==this.successCodes_.indexOf(i);t(!0,new it(r,n))}))},e=(t,e)=>{const n=this.resolve_,s=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());H(t)?n(t):n()}catch(r){s(r)}else if(null!==i){const t=C();t.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,t)):s(t)}else if(e.canceled){const t=this.appDelete_?B():x();s(t)}else{const t=N();s(t)}};this.canceled_?e(!1,new it(!1,null,!0)):this.backoffId_=K(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Q(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class it{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function rt(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function ot(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function at(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ut(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function ct(t,e,n,s,i,r,o=!0){const a=et(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return at(c,e),rt(c,n),ot(c,r),ut(c,s),new st(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
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
 */function lt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ht(...t){const e=lt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(J())return new Blob(t);throw new T(_.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function dt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function ft(t){if("undefined"===typeof atob)throw P("base-64");return atob(t)}
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
 */const pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gt{constructor(t,e){this.data=t,this.contentType=e||null}}function mt(t,e){switch(t){case pt.RAW:return new gt(yt(e));case pt.BASE64:case pt.BASE64URL:return new gt(wt(t,e));case pt.DATA_URL:return new gt(Tt(e),_t(e))}throw C()}function yt(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|63&s);else if(55296===(64512&s)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=s,r=t.charCodeAt(++n);s=65536|(1023&i)<<10|1023&r,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else e.push(239,191,189)}else 56320===(64512&s)?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(e)}function vt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw $(pt.DATA_URL,"Malformed data URL.")}return yt(e)}function wt(t,e){switch(t){case pt.BASE64:{const n=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(n||s){const e=n?"-":"_";throw $(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case pt.BASE64URL:{const n=-1!==e.indexOf("+"),s=-1!==e.indexOf("/");if(n||s){const e=n?"+":"/";throw $(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ft(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw $(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Et{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw $(pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=bt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Tt(t){const e=new Et(t);return e.base64?wt(pt.BASE64,e.rest):vt(e.rest)}function _t(t){const e=new Et(t);return e.contentType}function bt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class It{constructor(t,e){let n=0,s="";Y(t)?(this.data_=t,n=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(Y(this.data_)){const n=this.data_,s=dt(n,t,e);return null===s?null:new It(s)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new It(n,!0)}}static getBlob(...t){if(J()){const e=t.map((t=>t instanceof It?t.data_:t));return new It(ht.apply(null,e))}{const e=t.map((t=>X(t)?mt(pt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const s=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)s[i++]=t[e]})),new It(s,!0)}}uploadData(){return this.data_}}
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
 */function Ct(t){let e;try{e=JSON.parse(t)}catch(n){return null}return W(e)?e:null}
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
 */function At(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function St(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function kt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function Dt(t,e){return e}class Rt{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||Dt}}let Nt=null;function xt(t){return!X(t)||t.length<2?t:kt(t)}function Lt(){if(Nt)return Nt;const t=[];function e(t,e){return xt(e)}t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));const n=new Rt("name");function s(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Rt("size");return i.xform=s,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Nt=t,Nt}function Ot(t,e){function n(){const n=t["bucket"],s=t["fullPath"],i=new z(n,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Ut(t,e,n){const s={type:"file"},i=n.length;for(let r=0;r<i;r++){const t=n[r];s[t.local]=t.xform(s,e[t.server])}return Ot(s,t),s}function Mt(t,e,n){const s=Ct(e);if(null===s)return null;const i=s;return Ut(t,i,n)}function Ft(t,e,n,s){const i=Ct(e);if(null===i)return null;if(!X(i["downloadTokens"]))return null;const r=i["downloadTokens"];if(0===r.length)return null;const o=encodeURIComponent,a=r.split(","),u=a.map((e=>{const i=t["bucket"],r=t["fullPath"],a="/b/"+o(i)+"/o/"+o(r),u=tt(a,n,s),c=et({alt:"media",token:e});return u+c}));return u[0]}function Pt(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}
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
 */const Vt="prefixes",Bt="items";function qt(t,e,n){const s={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Vt])for(const i of n[Vt]){const n=i.replace(/\/$/,""),r=t._makeStorageReference(new z(e,n));s.prefixes.push(r)}if(n[Bt])for(const i of n[Bt]){const n=t._makeStorageReference(new z(e,i["name"]));s.items.push(n)}return s}function $t(t,e,n){const s=Ct(n);if(null===s)return null;const i=s;return qt(t,e,i)}class jt{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function zt(t){if(!t)throw C()}function Gt(t,e){function n(n,s){const i=Mt(t,s,e);return zt(null!==i),i}return n}function Kt(t,e){function n(n,s){const i=$t(t,e,s);return zt(null!==i),i}return n}function Qt(t,e){function n(n,s){const i=Mt(t,s,e);return zt(null!==i),Ft(i,s,t.host,t._protocol)}return n}function Ht(t){function e(e,n){let s;return s=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?D():k():402===e.getStatus()?S(t.bucket):403===e.getStatus()?R(t.path):n,s.status=e.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Wt(t){const e=Ht(t);function n(n,s){let i=e(n,s);return 404===n.getStatus()&&(i=A(t.path)),i.serverResponse=s.serverResponse,i}return n}function Xt(t,e,n){const s=e.fullServerUrl(),i=tt(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new jt(i,r,Gt(t,n),o);return a.errorHandler=Wt(e),a}function Yt(t,e,n,s,i){const r={};e.isRoot?r["prefix"]="":r["prefix"]=e.path+"/",n&&n.length>0&&(r["delimiter"]=n),s&&(r["pageToken"]=s),i&&(r["maxResults"]=i);const o=e.bucketOnlyServerUrl(),a=tt(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,l=new jt(a,u,Kt(t,e.bucket),c);return l.urlParams=r,l.errorHandler=Ht(e),l}function Jt(t,e,n){const s=e.fullServerUrl(),i=tt(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new jt(i,r,Qt(t,n),o);return a.errorHandler=Wt(e),a}function Zt(t,e){const n=e.fullServerUrl(),s=tt(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(t,e){}const a=new jt(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=Wt(e),a}function te(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function ee(t,e,n){const s=Object.assign({},n);return s["fullPath"]=t.path,s["size"]=e.size(),s["contentType"]||(s["contentType"]=te(null,e)),s}function ne(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=ee(e,s,i),l=Pt(c,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+u+"--",f=It.getBlob(h,s,d);if(null===f)throw M();const p={name:c["fullPath"]},g=tt(r,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new jt(g,m,Gt(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Ht(e),v}
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
let se=null;class ie{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=b.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=b.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=b.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,s){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class re extends ie{initXhr(){this.xhr_.responseType="text"}}function oe(){return se?se():new re}
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
class ae{constructor(t,e){this._service=t,this._location=e instanceof z?e:z.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ae(t,e)}get root(){const t=new z(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kt(this._location.path)}get storage(){return this._service}get parent(){const t=At(this._location.path);if(null===t)return null;const e=new z(this._location.bucket,t);return new ae(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw q(t)}}function ue(t,e,n){t._throwIfRoot("uploadBytes");const s=ne(t.storage,t._location,Lt(),new It(e,!0),n);return t.storage.makeRequestWithTokens(s,oe).then((e=>({metadata:e,ref:t})))}function ce(t){const e={prefixes:[],items:[]};return le(t,e).then((()=>e))}async function le(t,e,n){const s={pageToken:n},i=await he(t,s);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await le(t,e,i.nextPageToken)}function he(t,e){null!=e&&"number"===typeof e.maxResults&&Z("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=Yt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,oe)}function de(t){t._throwIfRoot("getMetadata");const e=Xt(t.storage,t._location,Lt());return t.storage.makeRequestWithTokens(e,oe)}function fe(t){t._throwIfRoot("getDownloadURL");const e=Jt(t.storage,t._location,Lt());return t.storage.makeRequestWithTokens(e,oe).then((t=>{if(null===t)throw F();return t}))}function pe(t){t._throwIfRoot("deleteObject");const e=Zt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,oe)}function ge(t,e){const n=St(t._location.path,e),s=new z(t._location.bucket,n);return new ae(t.storage,s)}
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
 */function me(t){return/^[A-Za-z]+:\/\//.test(t)}function ye(t,e){return new ae(t,e)}function ve(t,e){if(t instanceof _e){const n=t;if(null==n._bucket)throw U();const s=new ae(n,n._bucket);return null!=e?ve(s,e):s}return void 0!==e?ge(t,e):t}function we(t,e){if(e&&me(e)){if(t instanceof _e)return ye(t,e);throw V("To use ref(service, url), the first argument must be a Storage instance.")}return ve(t,e)}function Ee(t,e){const n=null===e||void 0===e?void 0:e[v];return null==n?null:z.makeFromBucketSpec(n,t)}function Te(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken="string"===typeof i?i:(0,g.Sg)(i,t.app.options.projectId))}class _e{constructor(t,e,n,s,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=y,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w,this._maxUploadRetryTime=E,this._requests=new Set,this._bucket=null!=s?z.makeFromBucketSpec(s,this._host):Ee(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=z.makeFromBucketSpec(this._url,t):this._bucket=Ee(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ae(this,t)}_makeRequest(t,e,n,s,i=!0){if(this._deleted)return new G(B());{const r=ct(t,this._appId,n,s,e,this._firebaseVersion,i);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const be="@firebase/storage",Ie="0.11.2",Ce="storage";function Ae(t,e,n){return t=(0,g.m9)(t),ue(t,e,n)}function Se(t){return t=(0,g.m9)(t),de(t)}function ke(t){return t=(0,g.m9)(t),ce(t)}function De(t){return t=(0,g.m9)(t),fe(t)}function Re(t){return t=(0,g.m9)(t),pe(t)}function Ne(t,e){return t=(0,g.m9)(t),we(t,e)}function xe(t=(0,p.getApp)(),e){t=(0,g.m9)(t);const n=(0,p._getProvider)(t,Ce),s=n.getImmediate({identifier:e}),i=(0,g.P0)("storage");return i&&Le(s,...i),s}function Le(t,e,n,s={}){Te(t,e,n,s)}
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
 */function Oe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _e(n,s,i,e,p.SDK_VERSION)}function Ue(){(0,p._registerComponent)(new m.wA(Ce,Oe,"PUBLIC").setMultipleInstances(!0)),(0,p.registerVersion)(be,Ie,""),(0,p.registerVersion)(be,Ie,"esm2017")}Ue();const Me=xe(r.w);class Fe{async UploadFile(t,e){try{const n=Ne(Me,`${t}/${e.id}`),s=await fetch(e.src),i=await s.blob();await Ae(n,i);const r=await De(n);return r}catch(n){console.error(n);const t={"storage/unauthorized":"Користувач не має права доступу до об'єкта.","storage/canceled":"Користувач скасував завантаження.","storage/unknown":"Сталася невідома помилка під час завантаження."},e=t[n.code]||"Не вдалося завантажити файл.";throw new Error(e)}}async DeleteFileInFirebaseStorage(t,e){try{const n=Ne(Me,`${t}/${e}`);await Re(n)}catch(n){const t={"storage/object-not-found":"Цей файл не знайдено. Можливо він вже був видалений.","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію видалення скасовано.","storage/unknown":"Сталася невідома помилка при видаленні файлу."},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(e)}}async GetMetadataFile(t,e){try{const n=Ne(Me,`${t}/${e}`);Se(n).then((t=>{}))}catch(n){const t={"storage/object-not-found":"Файл не знайдено. Метадані","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію скасовано.","storage/unknown":"Сталася невідома помилка при виклику метаданих файла."},e=t[n.code]||"Не вдалося викликати метадані файла.";throw new Error(e)}}async GetListAll(t){try{const e=Ne(Me,t),n=await ke(e);return n.prefixes.forEach((t=>{})),n.items.forEach((t=>{})),n}catch(e){console.error(e);const t={"storage/object-not-found":"Об`єкт не знайдено","storage/unauthorized":"Користувач не має права доступу до об`єкта","storage/canceled":"Користувач скасував операцію","storage/unknown":"Сталася невідома помилка"},n=t[e.code]||"Сталася помилка при завантаженні списку";throw new Error(n)}}}const Pe=new f.r,Ve=new Fe;class Be{Delete(t,e,n,s){if(!0===s)n.push(e),t.splice(0,1,{id:null});else if(e>0&&t.length>1){const s=t.findIndex((t=>t.id===e));-1!==s&&(null!==t[s].link&&n.push(e),t.splice(s,1))}}AddImageFile(t,e,n,s){const i=t.target.files,r=e.length-1;if(null===n&&i.length>0)if(!0===s){const t=i[i.length-1];e.splice(r,1,{id:`${o()}0`,src:URL.createObjectURL(t)})}else for(let a=i.length-1;a>=0;a--){const t=i[a];e.splice(r,0,{id:`${o()}${a}`,src:URL.createObjectURL(t)})}else if(1===i.length){const t=e.findIndex((t=>t.id===n));-1!==t&&t!==e.length&&e.splice(t,1,{src:URL.createObjectURL(i[0]),id:n})}}async UpdateData(t,e,n){try{t=[{id:null}];const n=await(0,s.PL)(e);n.forEach((e=>{const n={link:e.data().link,id:e.id,urls:e.data().urls,text:e.data().text},s=t.findIndex((t=>t.id===n.id));-1===s?t.splice(t.length-1,0,n):t[s]=n})),t.sort(((t,e)=>null!==t.id&&null!==e.id?t.id-e.id:null===t.id&&null!==e.id?1:null!==t.id&&null===e.id?-1:0))}catch(i){console.log(i)}}async SetParameters(t,e){if(e){const n={};for(const t in e)n[t]=e[t];Pe.AddDocument(t,"params",n)}}async AddImg(t,e,n,s){for(let i=0;i<t.length;i++){const r=t[i];if(null!=r.id){const o={link:r.link?r.link:""};n&&(o.text=r.text?r.text:""),s&&(o.urls=r.urls?r.urls:""),await Pe.AddDocument(e,t[i],o)}}}async DeleteFilesToDataBase(t,e,n){if(t.length)for(let s=0;s<t.length;s++)Ve.DeleteFileInFirebaseStorage(e,t[s]),Pe.DeleteDocument(n,t[s])}async AddFilesToDataBase(t,e,n,s,i){for(let r=0;r<t.length;r++){const n=t[r];null!=n.id&&null!=n.src&&(n.link=await Ve.UploadFile(e,n))}Pe.AddImgDocument(t,n,s,i)}}},5372:function(t,e,n){n.d(e,{Z:function(){return v}});var s=n(3396),i=n(7139);const r={class:"card"},o={class:"card-header"},a={class:"card-title"},u={class:"card-tools"},c={class:"card-body"},l={key:0,class:"card-footer"},h={key:1,class:"overlay"},d=(0,s._)("i",{class:"fas fa-2x fa-sync-alt fa-spin"},null,-1),f=[d];function p(t,e,n,d,p,g){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s._)("h3",a,(0,i.zw)(n.title),1),(0,s._)("div",u,[(0,s.WI)(t.$slots,"tools")])]),(0,s._)("div",c,[(0,s.WI)(t.$slots,"body")]),n.footer?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.WI)(t.$slots,"footer")])):(0,s.kq)("",!0),n.isLoading?((0,s.wg)(),(0,s.iD)("div",h,f)):(0,s.kq)("",!0)])}var g={props:{title:{type:String,default:""},isLoading:{type:Boolean,default:!1},footer:{type:Boolean,default:!0}}},m=n(89);const y=(0,m.Z)(g,[["render",p]]);var v=y},2288:function(t,e,n){n.d(e,{Z:function(){return q}});var s=n(3396);const i={class:"grid-cards"},r={class:"custom-file position-absolute w-0 h-0"};function o(t,e,n,o,a,u){const c=(0,s.up)("img-card");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.itemsList,(t=>((0,s.wg)(),(0,s.j4)(c,{text:n.eText,urls:n.eUrls,elementData:t,sizeImg:n.sizeImg,key:t.id,onSelectFiles:u.SelectFiles,onDeleteElement:u.DeleteElement,onChangeURL:u.ChangeURL,onChangeText:u.ChangeText},null,8,["text","urls","elementData","sizeImg","onSelectFiles","onDeleteElement","onChangeURL","onChangeText"])))),128))]),(0,s._)("div",r,[(0,s._)("input",{type:"file",class:"custom-file-input",ref:"inputGroupFile",multiple:"",onChange:e[0]||(e[0]=(...t)=>u.CreateData&&u.CreateData(...t))},null,544)])],64)}var a=n(8634),u=n(7139);const c=t=>((0,s.dD)("data-v-7e21bf47"),t=t(),(0,s.Cn)(),t),l=["disabled"],h=c((()=>(0,s._)("i",{class:"fas fa-times"},null,-1))),d=[h],f={class:"content-block"},p={class:"img-block mb-1"},g={class:"image-wrapper"},m={key:0},y={key:1},v={class:"inputs-block"},w={key:0,class:"input-group mb-1"},E=c((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-link"})])],-1))),T=["value"],_={key:1,class:"input-group mb-1"},b=c((()=>(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},[(0,s._)("i",{class:"fas fa-comment"})])],-1))),I=["value"];function C(t,e,n,i,r,o){const a=(0,s.up)("card"),c=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.j4)(a,{class:"card-dark",footer:!1},{tools:(0,s.w5)((()=>[(0,s._)("button",{type:"button",class:(0,u.C_)(["btn btn-tool",{opacity:null===n.elementData.id}]),onClick:e[0]||(e[0]=(...t)=>o.DeleteElement&&o.DeleteElement(...t)),disabled:null===n.elementData.id},d,10,l)])),body:(0,s.w5)((()=>[(0,s._)("div",f,[(0,s._)("div",p,[(0,s._)("div",g,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("img",{class:"img",key:o.currentImage,alt:"altText",onError:e[1]||(e[1]=(...t)=>o.handleImageError&&o.handleImageError(...t))},null,32)),[[c,o.currentImage]])]),(0,s._)("button",{class:"btn btn-absolute",onClick:e[2]||(e[2]=(...t)=>o.SelectFiles&&o.SelectFiles(...t)),type:"button"},[n.elementData.link||n.elementData.src?((0,s.wg)(),(0,s.iD)("span",y,"Змінити "+(0,u.zw)(this.sizeImg),1)):((0,s.wg)(),(0,s.iD)("span",m,"Добавити "+(0,u.zw)(this.sizeImg),1))])]),(0,s._)("div",v,[n.urls&&n.elementData.id?((0,s.wg)(),(0,s.iD)("div",w,[E,(0,s._)("input",{type:"text",class:"form-control",value:n.elementData.urls,onInput:e[3]||(e[3]=(...t)=>o.ChangeURL&&o.ChangeURL(...t)),placeholder:"URL"},null,40,T)])):(0,s.kq)("",!0),n.text&&n.elementData.id?((0,s.wg)(),(0,s.iD)("div",_,[b,(0,s._)("input",{type:"text",class:"form-control",value:n.elementData.text,onInput:e[4]||(e[4]=(...t)=>o.ChangeText&&o.ChangeText(...t)),placeholder:"Text"},null,40,I)])):(0,s.kq)("",!0)])])])),footer:(0,s.w5)((()=>[])),_:1})}var A=n(5372),S=n(9242);const k={data(){return{error:!1,width:"2000px",height:""+2e3/3e3}},props:{elementData:Object,text:{type:Boolean,default:!1},urls:{type:Boolean,default:!1},sizeImg:{type:String,default:"1000x190"}},components:{card:A.Z},computed:{currentImage(){return!this.error&&this.elementData.src?this.elementData.src:!this.error&&this.elementData.link?this.elementData.link:n(6637)},widthImg(){return this.sizeImg.split("x")[0]+"px"},heightImg(){return this.sizeImg.split("x")[1]/this.sizeImg.split("x")[0]*100+"%"}},methods:{handleImageError(){this.error=!0},DeleteElement(){this.$emit("DeleteElement",this.elementData.id)},SelectFiles(){this.$emit("SelectFiles",this.elementData.id)},ChangeURL(t){this.$emit("ChangeURL",t.target.value,this.elementData.id)},ChangeText(t){this.$emit("ChangeText",t.target.value,this.elementData.id)}}},D=()=>{(0,S.sj)((t=>({ee6b75b2:t.widthImg,"335a5952":t.heightImg})))},R=k.setup;k.setup=R?(t,e)=>(D(),R(t,e)):D;var N=k,x=n(89);const L=(0,x.Z)(N,[["render",C],["__scopeId","data-v-7e21bf47"]]);var O=L,U=n(36);const M={data(){return{removeList:[],id:0,itemsList:[],functionality:!0,time:0,firebase:new a.L}},components:{imgCard:O},emits:["isLoading"],props:{eOne:{type:Boolean,default:!1},eText:{type:Boolean,default:!1},eUrls:{type:Boolean,default:!1},eTime:{type:Boolean,default:!1},eFunctionality:{type:Boolean,default:!1},fileFolderPath:{type:String},collectionRef:{type:Object},saveListImgTriger:{type:Boolean},updateListImgTriger:{type:Boolean},sizeImg:{type:String,default:"1000x190"}},created(){this.UpdateList()},methods:{SelectFiles(t){this.$refs.inputGroupFile.click(),this.id=t},CreateData(t){this.firebase.AddImageFile(t,this.itemsList,this.id,this.eOne),this.$refs.inputGroupFile.value=""},ChangeText(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].text=t},ChangeURL(t,e){const n=this.itemsList.findIndex((t=>t.id===e));this.itemsList[n].urls=t},DeleteElement(t){this.firebase.Delete(this.itemsList,t,this.removeList,this.eOne)},async UpdateDataBase(){this.$emit("isLoading",!0);try{await this.firebase.DeleteFilesToDataBase(this.removeList,this.fileFolderPath,this.collectionRef),await this.firebase.AddFilesToDataBase(this.itemsList,this.fileFolderPath,this.collectionRef,this.eText,this.eUrls),this.removeList=[]}catch(t){console.log(t)}this.$emit("isLoading",!1)},async UpdateList(){this.$emit("isLoading",!0);try{this.eOne||(this.itemsList=[{src:null,urls:null,text:null,id:null}]);const t=await(0,U.PL)(this.collectionRef);t.forEach((t=>{if("params"!==t.id){const e={text:t.data().text?t.data().text:null,urls:t.data().urls?t.data().urls:null,link:t.data().link,id:t.id},n=this.itemsList.findIndex((t=>t.id===e.id));-1===n?this.itemsList.splice(this.itemsList.length-1,0,e):this.itemsList[n]=e}})),this.eOne&&0===this.itemsList.length&&(this.itemsList=[{src:null,urls:null,text:null,id:null}]),this.itemsList.sort(((t,e)=>null!==t.id&&null!==e.id?t.id-e.id:null===t.id&&null!==e.id?1:null!==t.id&&null===e.id?-1:0))}catch(t){console.log(t)}this.$emit("isLoading",!1)}},computed:{gridRows(){return this.eOne,4}},watch:{updateListImgTriger:function(){this.UpdateList()},saveListImgTriger:function(){this.UpdateDataBase()}}},F=()=>{(0,S.sj)((t=>({37164446:t.gridRows})))},P=M.setup;M.setup=P?(t,e)=>(F(),P(t,e)):F;var V=M;const B=(0,x.Z)(V,[["render",o],["__scopeId","data-v-34c8c5ee"]]);var q=B},36:function(t,e,n){n.d(e,{hJ:function(){return xl},oe:function(){return Uh},AK:function(){return Ph},JU:function(){return Ll},QT:function(){return Rh},PL:function(){return xh},ad:function(){return Ml},IO:function(){return mh},pl:function(){return Lh},r7:function(){return Oh}});n(3767),n(8585),n(8696),n(7658),n(2801);var s,i=n(7077),r=n(7142),o=n(5168),a=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},l=l||{},h=u||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var I=0;b.prototype.s=!1,b.prototype.na=function(){this.s||(this.s=!0,this.M(),0==I)||g(this)},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function S(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let i=0;i<s;i++)t[n+i]=e[i]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return-1!=L().indexOf(t)}function U(t){return U[" "](t),t}function M(t){var e=W;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=d;var F,P=O("Opera"),V=O("Trident")||O("MSIE"),B=O("Edge"),q=B||V,$=O("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),j=-1!=L().toLowerCase().indexOf("webkit")&&!O("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var G="",K=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):P?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(G=K?K[1]:""),V){var Q=z();if(null!=Q&&Q>parseFloat(G)){F=String(Q);break t}}F=G}var H,W={};function X(){return M((function(){let t=0;const e=N(String(F)).split("."),n=N("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=x(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||x(0==i[2].length,0==r[2].length)||x(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(h.document&&V){var Y=z();H=Y||(parseInt(F,10)||void 0)}else H=void 0;var J=H;function Z(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{U(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}_(Z,k);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function st(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++nt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ct(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=C(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}ct.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ht(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new st(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,s,i){if(s&&s.once)return yt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,s,i);return null}return n=It(n),t&&t[et]?t.N(e,n,p(s)?!!s.capture:!!s,i):gt(t,e,n,!1,s,i)}function gt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=_t(t);if(a||(t[dt]=a=new ct(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=mt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)D||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=Tt;return t}function yt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)yt(t,e[r],n,s,i);return null}return n=It(n),t&&t[et]?t.O(e,n,p(s)?!!s.capture:!!s,i):gt(t,e,n,!0,s,i)}function vt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)vt(t,e[r],n,s,i);else s=p(s)?!!s.capture:!!s,n=It(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ht(r,n,s,i),-1<n&&(it(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=_t(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,s,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Et(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_t(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function Et(t){return t in ft?ft[t]:ft[t]="on"+t}function Tt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wt(t),t=n.call(s,e)}return t}function _t(t){return t=t[dt],t instanceof ct?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Ct(){b.call(this),this.i=new ct(this),this.P=this,this.I=null}function At(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var i=e;e=new k(s,t),ut(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=St(o,s,!0,e)&&i}if(o=e.g=t,i=St(o,s,!0,e)&&i,i=St(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=St(o,s,!1,e)&&i}function St(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&lt(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}_(Ct,b),Ct.prototype[et]=!0,Ct.prototype.removeEventListener=function(t,e,n,s){vt(this,t,e,n,s)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)it(n[s]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ct.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var kt=h.JSON.stringify;function Dt(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){h.setTimeout((()=>{throw t}),0)}function Ut(t,e){Nt||Mt(),Ft||(Nt(),Ft=!0),Pt.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(Vt)}}var Ft=!1,Pt=new Rt;function Vt(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=E(this.lb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Bt,Ct),s=Bt.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(qt(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Bt.X.M.call(this),qt(this),delete this.g};class zt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){b.call(this),this.h=t,this.g={}}_(Gt,b);var Kt=[];function Qt(t,e,n,s){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var r=pt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ht(t){rt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Wt(){this.g=!0}function Xt(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Jt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(s?" "+s:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return kt(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Ht(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Aa=function(){this.g=!1},Wt.prototype.info=function(){};var ee={},ne=null;function se(){return ne=ne||new Ct}function ie(t){k.call(this,ee.Pa,t)}function re(t){const e=se();At(e,new ie(e))}function oe(t,e){k.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=se();At(e,new oe(e,t))}function ue(t,e){k.call(this,ee.Qa,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",_(ie,k),ee.STAT_EVENT="statevent",_(oe,k),ee.Qa="timingevent",_(ue,k);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ye(){k.call(this,"d")}function ve(){k.call(this,"c")}function we(){}function Ee(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Gt(this),this.O=_e,t=q?125:void 0,this.T=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}_(ye,k),_(ve,k),_(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var _e=45e3,be={},Ie={};function Ce(t,e,n){t.K=1,t.v=Qe($e(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Re(t),t.A=$e(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),an(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Te,t.g=hs(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zt(E(t.La,t,t.g),t.N)),Qt(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),re(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ke(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=De(t,n),s==Ie){4==e&&(t.o=4,ae(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(s==be){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,s,null),Ue(t,s)}Se(t)&&s!=Ie&&s!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ss(e),e.K=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),Le(t))}function De(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ie:(n=Number(e.substring(n,s)),isNaN(n)?be:(s+=1,s+n>e.length?Ie:(e=e.substr(s,n),t.C=s+n,e)))}function Re(t){t.V=Date.now()+t.O,Ne(t,t.O)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(E(t.gb,t),e)}function xe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||os(t.l,t)}function Oe(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Ht(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ue(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;rs(n),Hn(n)}ns(n),ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ce(E(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else us(n,11)}else if((t.J||n.g==t)&&rs(n),!R(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(s=1.5*l,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(mn(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Ke(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ls(s,s.H?s.ka:null,s.V),o.J){yn(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(xe(a),Re(a)),s.g=o}else es(s);0<n.i.length&&Xn(n)}else"stop"!=c[0]&&"close"!=c[0]||us(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?us(n,7):Qn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}re(4)}catch(c){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),s=Me(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}s=Ee.prototype,s.setTimeout=function(t){this.O=t},s.ib=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.La(t)},s.La=function(t){try{if(t==this.g)t:{const l=qn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==e||re(8==e||0>=d?3:2),xe(this);var n=this.g.aa();this.Y=n;e:if(Se(this)){var s=$n(this.g);t="";var i=s.length,r=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ae(12),Oe(this),Le(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ue(this,n)}this.P?(ke(this,l,o),q&&this.i&&3==l&&(Qt(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,o,null),Ue(this,o)),4==l&&Oe(this),this.i&&!this.I&&(4==l?os(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Oe(this),Le(this)}}}catch(l){}},s.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(xe(this),ke(this,t,e),this.i&&4!=t&&Re(this))}},s.cancel=function(){this.I=!0,Oe(this)},s.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(re(),ae(17)),Oe(this),this.o=2,Le(this)):Ne(this,this.V-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,je(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,je(this,n[1]||"",!0),this.s=He(n[2]||""),this.g=He(n[3]||"",!0),ze(this,n[4]),this.l=He(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=He(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function $e(t){return new qe(t)}function je(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof nn?(t.i=e,cn(t.i,t.h)):(n||(e=We(e,tn)),t.i=new nn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function Qe(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(We(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Ze:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,en)),t.join("")};var Ye=/[#\/\?@]/g,Je=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function rn(t,e){sn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return sn(t),e=un(t,e),t.g.has(e)}function an(t,e,n){rn(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),A(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cn(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(rn(this,e),an(this,n,t))}),t)),t.j=e}s=nn.prototype,s.add=function(t,e){sn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){sn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},s.W=function(t){sn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return sn(this),this.i=null,t=un(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function wn(){}function En(){this.g=new wn}function Tn(t,e,n){const s=n||"";try{Pe(t,(function(t,n){let i=t;p(t)&&(i=kt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function _n(t,e){const n=new Wt;if(h.Image){const s=new Image;s.onload=T(bn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=T(bn,n,s,"TestLoadImage: error",!1,e),s.onabort=T(bn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=T(bn,n,s,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function bn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function In(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(In,de),In.prototype.g=function(){return new Cn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),_(Cn,Ct);var An=0;function Sn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Cn.prototype,s.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=An},s.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kn(this):Dn(this),3==this.readyState&&Sn(this)}},s.Va=function(t){this.g&&(this.response=this.responseText=t,kn(this))},s.Ua=function(t){this.g&&(this.response=t,kn(this))},s.ga=function(){this.g&&kn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=h.JSON.parse;function Nn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xn,this.K=this.L=!1}_(Nn,Ct);var xn="",Ln=/^https?$/i,On=["POST","PUT"];function Un(t){return V&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Vn(t)}function Fn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Pn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))$t(t.Ha,0,t);else if(At(t,"readystatechange"),4==qn(t)){t.h=!1;try{const u=t.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var i=String(t.H).match(Ve)[1]||null;if(!i&&h.self&&h.self.location){var r=h.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ln.test(i?i.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){Bn(t);const s=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||At(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(ks){return null}}function jn(t){let e="";return rt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ca=0,this.i=[],this.j=new Wt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qn(t){if(Wn(t),3==t.G){var e=t.U++,n=$e(t.F);Ke(n,"SID",t.I),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Zn(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=Qe($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hs(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}cs(t)}function Hn(t){t.g&&(ss(t),t.g.cancel(),t.g=null)}function Wn(t){Hn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rs(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){fn(t.h)||t.m||(t.m=!0,Ut(t.Ja,t),t.C=0)}function Yn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ce(E(t.Ja,t,e),as(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.U++;const s=$e(t.F);Ke(s,"SID",t.I),Ke(s,"RID",n),Ke(s,"AID",t.T),Zn(t,s),t.o&&t.s&&zn(s,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ts(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Ce(n,s,e)}function Zn(t,e){t.ia&&rt(t.ia,(function(t,n){Ke(e,n,t)})),t.l&&Pe({},(function(t,n){Ke(e,n,t)}))}function ts(t,e,n){n=Math.min(t.i.length,n);var s=t.l?E(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Tn(a,t,"req"+n+"_")}catch(Ps){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function es(t){t.g||t.u||(t.Z=1,Ut(t.Ia,t),t.A=0)}function ns(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ce(E(t.Ia,t),as(t,t.A)),t.A++,!0)}function ss(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function is(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);Ke(e,"RID","rpc"),Ke(e,"SID",t.I),Ke(e,"CI",t.L?"0":"1"),Ke(e,"AID",t.T),Ke(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qe($e(e)),n.s=null,n.P=!0,Ae(n,t)}function rs(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function os(t,e){var n=null;if(t.g==e){rs(t),ss(t),t.g=null;var s=2}else{if(!gn(t.h,e))return;n=e.D,yn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=se(),At(s,new ue(s,n)),Xn(t)}else es(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==s&&Yn(t,e)||2==s&&ns(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}function as(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=E(t.kb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),Qe(n)),_n(n.toString(),s)}else ae(2);t.G=0,t.l&&t.l.va(e),cs(t),Wn(t)}function cs(t){if(t.G=0,t.la=[],t.l){const e=vn(t.h);0==e.length&&0==t.i.length||(S(t.la,e),S(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function ls(t,e,n){var s=n instanceof qe?$e(n):new qe(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ze(s,s.m);else{var i=h.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new qe(null,void 0);s&&je(r,s),e&&(r.g=e),i&&ze(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ke(s,n,e),Ke(s,"VER",t.ma),Zn(t,s),s}function hs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Nn(new In({jb:!0})):new Nn(t.ra),e.Ka(t.H),e}function ds(){}function fs(){if(V&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function ps(t,e){Ct.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}function gs(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ms(){ve.call(this),this.status=1}function ys(t){this.g=t}s=Nn.prototype,s.Ka=function(t){this.L=t},s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?fe(this.u):fe(ge),this.g.onreadystatechange=E(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Mn(this,r)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(On,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Un(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Mn(this,r)}},s.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Vn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Nn.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Pn(this):this.fb())},s.fb=function(){Pn(this)},s.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Kn.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ee(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ot(r),ut(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ts(this,i,e),n=$e(this.F),Ke(n,"RID",t),Ke(n,"CVER",22),this.D&&Ke(n,"X-HTTP-Session-Id",this.D),Zn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(jn(r)))+"&"+e:this.o&&zn(n,this.o,r)),mn(this.h,i),this.Ya&&Ke(n,"TYPE","init"),this.O?(Ke(n,"$req",e),Ke(n,"SID","null"),i.Z=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?Jn(this,t):0==this.i.length||fn(this.h)||Jn(this))},s.Ia=function(){if(this.u=null,is(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ce(E(this.eb,this),t)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Hn(this),is(this))},s.cb=function(){null!=this.v&&(this.v=null,Hn(this),ns(this),ae(19))},s.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},s=ds.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},fs.prototype.g=function(t,e){return new ps(t,e)},_(ps,Ct),ps.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ls(t,null,t.V),Xn(t)},ps.prototype.close=function(){Qn(this.g)},ps.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kt(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Xn(e)},ps.prototype.M=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,ps.X.M.call(this)},_(gs,ye),_(ms,ve),_(ys,ds),ys.prototype.xa=function(){At(this.g,"a")},ys.prototype.wa=function(t){At(this.g,new gs(t))},ys.prototype.va=function(t){At(this.g,new ms)},ys.prototype.ua=function(){At(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,ps.prototype.send=ps.prototype.u,ps.prototype.open=ps.prototype.m,ps.prototype.close=ps.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var vs=c.createWebChannelTransport=function(){return new fs},ws=c.getStatEventTarget=function(){return se()},Es=c.ErrorCode=le,Ts=c.EventType=he,_s=c.Event=ee,bs=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Is=c.FetchXmlHttpFactory=In,Cs=c.WebChannel=pe,As=c.XhrIo=Nn;const Ss="@firebase/firestore";
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
 */class ks{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ks.UNAUTHENTICATED=new ks(null),ks.GOOGLE_CREDENTIALS=new ks("google-credentials-uid"),ks.FIRST_PARTY=new ks("first-party-uid"),ks.MOCK_USER=new ks("mock-user");
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
let Ds="9.20.0";
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
 */const Rs=new o.Yd("@firebase/firestore");function Ns(){return Rs.logLevel}function xs(t,...e){if(Rs.logLevel<=o["in"].DEBUG){const n=e.map(Us);Rs.debug(`Firestore (${Ds}): ${t}`,...n)}}function Ls(t,...e){if(Rs.logLevel<=o["in"].ERROR){const n=e.map(Us);Rs.error(`Firestore (${Ds}): ${t}`,...n)}}function Os(t,...e){if(Rs.logLevel<=o["in"].WARN){const n=e.map(Us);Rs.warn(`Firestore (${Ds}): ${t}`,...n)}}function Us(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Ms(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Ls(e),new Error(e)}function Fs(t,e){t||Ms()}function Ps(t,e){return t}
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
 */const Vs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Bs extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class $s{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class js{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ks.UNAUTHENTICATED)))}shutdown(){}}class zs{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gs{constructor(t){this.t=t,this.currentUser=ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qs,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{xs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(xs("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qs)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(xs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fs("string"==typeof e.accessToken),new $s(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fs(null===t||"string"==typeof t),new ks(t)}}class Ks{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ks.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ks(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ks.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ws{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&xs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,xs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{xs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):xs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fs("string"==typeof t.token),this.T=t.token,new Hs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Xs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */class Ys{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Xs(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Js(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Bs(Vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Bs(Vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Bs(Vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Bs(Vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ti.fromMillis(Date.now())}static fromDate(t){return ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Js(this.nanoseconds,t.nanoseconds):Js(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ei(t)}static min(){return new ei(new ti(0,0))}static max(){return new ei(new ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ni{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ms(),void 0===n?n=t.length-e:n>t.length-e&&Ms(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ni.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class si extends ni{construct(t,e,n){return new si(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Bs(Vs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new si(e)}static emptyPath(){return new si([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ri extends ni{construct(t,e,n){return new ri(t,e,n)}static isValidIdentifier(t){return ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ri.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ri(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Bs(Vs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Bs(Vs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Bs(Vs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Bs(Vs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ri(e)}static emptyPath(){return new ri([])}}
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
 */class oi{constructor(t){this.path=t}static fromPath(t){return new oi(si.fromString(t))}static fromName(t){return new oi(si.fromString(t).popFirst(5))}static empty(){return new oi(si.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===si.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return si.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new oi(new si(t.slice()))}}
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
 */class ai{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ai.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ei.fromTimestamp(1e9===s?new ti(n+1,0):new ti(n,s));return new li(i,oi.empty(),e)}function ci(t){return new li(t.readTime,t.key,-1)}class li{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new li(ei.min(),oi.empty(),-1)}static max(){return new li(ei.max(),oi.empty(),-1)}}function hi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=oi.comparator(t.documentKey,e.documentKey),0!==n?n:Js(t.largestBatchId,e.largestBatchId))}
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
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function pi(t){if(t.code!==Vs.FAILED_PRECONDITION||t.message!==di)throw t;xs("LocalStore","Unexpectedly lost primary lease")}
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
 */class gi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ms(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gi(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gi?e:gi.resolve(e)}catch(t){return gi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.reject(e)}static resolve(t){return new gi(((e,n)=>{e(t)}))}static reject(t){return new gi(((e,n)=>{n(t)}))}static waitFor(t){return new gi(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=gi.resolve(!1);for(const n of t)e=e.next((t=>t?gi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new gi(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{r[u]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new gi(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
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
 */function mi(t){return"IndexedDbTransactionError"===t.name}
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
class yi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function vi(t){return null==t}function wi(t){return 0===t&&1/t==-1/0}function Ei(t){return"number"==typeof t&&Number.isInteger(t)&&!wi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */yi.ct=-1;const Ti=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_i=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bi=_i;
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
function Ii(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ai(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Si{constructor(t,e){this.comparator=t,this.root=e||Di.EMPTY}insert(t,e){return new Si(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Di.BLACK,null,null))}remove(t){return new Si(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Di.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ki(this.root,t,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ki(this.root,t,this.comparator,!0)}}class ki{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Di{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Di.RED,this.left=null!=s?s:Di.EMPTY,this.right=null!=i?i:Di.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Di(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Di.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Di.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Di.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Di.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ms();if(this.right.isRed())throw Ms();const t=this.left.check();if(t!==this.right.check())throw Ms();return t+(this.isRed()?0:1)}}Di.EMPTY=null,Di.RED=!0,Di.BLACK=!1,Di.EMPTY=new class{constructor(){this.size=0}get key(){throw Ms()}get value(){throw Ms()}get color(){throw Ms()}get left(){throw Ms()}get right(){throw Ms()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Di(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ri{constructor(t){this.comparator=t,this.data=new Si(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ni(this.data.getIterator())}getIteratorFrom(t){return new Ni(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ri))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ri(this.comparator);return e.data=t,e}}class Ni{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class xi{constructor(t){this.fields=t,t.sort(ri.comparator)}static empty(){return new xi([])}unionWith(t){let e=new Ri(ri.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Li extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Oi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Li("Invalid base64 string: "+t):t}}(t);return new Oi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Oi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Js(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Oi.EMPTY_BYTE_STRING=new Oi("");const Ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(t){if(Fs(!!t),"string"==typeof t){let e=0;const n=Ui.exec(t);if(Fs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fi(t.seconds),nanos:Fi(t.nanos)}}function Fi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Pi(t){return"string"==typeof t?Oi.fromBase64String(t):Oi.fromUint8Array(t)}
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
 */function Vi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Bi(t){const e=t.mapValue.fields.__previous_value__;return Vi(e)?Bi(e):e}function qi(t){const e=Mi(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}
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
 */class $i{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ji{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ji("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ji&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vi(t)?4:rr(t)?9007199254740991:10:Ms()}function Ki(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qi(t).isEqual(qi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mi(t.timestampValue),s=Mi(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Pi(t.bytesValue).isEqual(Pi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fi(t.geoPointValue.latitude)===Fi(e.geoPointValue.latitude)&&Fi(t.geoPointValue.longitude)===Fi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fi(t.integerValue)===Fi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fi(t.doubleValue),s=Fi(e.doubleValue);return n===s?wi(n)===wi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Ki);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ii(n)!==Ii(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Ki(n[i],s[i])))return!1;return!0}(t,e);default:return Ms()}}function Qi(t,e){return void 0!==(t.values||[]).find((t=>Ki(t,e)))}function Hi(t,e){if(t===e)return 0;const n=Gi(t),s=Gi(e);if(n!==s)return Js(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Js(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fi(t.integerValue||t.doubleValue),s=Fi(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Wi(t.timestampValue,e.timestampValue);case 4:return Wi(qi(t),qi(e));case 5:return Js(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Pi(t),s=Pi(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=Js(n[i],s[i]);if(0!==t)return t}return Js(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Js(Fi(t.latitude),Fi(e.latitude));return 0!==n?n:Js(Fi(t.longitude),Fi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Hi(n[i],s[i]);if(t)return t}return Js(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===zi.mapValue&&e===zi.mapValue)return 0;if(t===zi.mapValue)return 1;if(e===zi.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=Js(s[o],r[o]);if(0!==t)return t;const e=Hi(n[s[o]],i[r[o]]);if(0!==e)return e}return Js(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Ms()}}function Wi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Js(t,e);const n=Mi(t),s=Mi(e),i=Js(n.seconds,s.seconds);return 0!==i?i:Js(n.nanos,s.nanos)}function Xi(t){return Yi(t)}function Yi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Mi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Yi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Yi(t.fields[i])}`;return n+"}"}(t.mapValue):Ms();var e,n}function Ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zi(t){return!!t&&"integerValue"in t}function tr(t){return!!t&&"arrayValue"in t}function er(t){return!!t&&"nullValue"in t}function nr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sr(t){return!!t&&"mapValue"in t}function ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ir(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class or{constructor(t){this.value=t}static empty(){return new or({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ir(e)}setAll(t){let e=ri.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=ir(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ki(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];sr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ci(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new or(ir(this.value))}}function ar(t){const e=[];return Ci(t.fields,((t,n)=>{const s=new ri([t]);if(sr(n)){const t=ar(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new xi(e)
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
 */}class ur{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new ur(t,0,ei.min(),ei.min(),ei.min(),or.empty(),0)}static newFoundDocument(t,e,n,s){return new ur(t,1,e,ei.min(),n,s,0)}static newNoDocument(t,e){return new ur(t,2,e,ei.min(),ei.min(),or.empty(),0)}static newUnknownDocument(t,e){return new ur(t,3,e,ei.min(),ei.min(),or.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=or.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=or.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ur&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ur(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class cr{constructor(t,e){this.position=t,this.inclusive=e}}function lr(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Hi(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function hr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ki(t.position[n],e.position[n]))return!1;return!0}
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
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function fr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class pr{}class gr extends pr{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new br(t,e,n):"array-contains"===e?new Sr(t,n):"in"===e?new kr(t,n):"not-in"===e?new Dr(t,n):"array-contains-any"===e?new Rr(t,n):new gr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ir(t,n):new Cr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Hi(e,this.value)):null!==e&&Gi(this.value)===Gi(e)&&this.matchesComparison(Hi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ms()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mr extends pr{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new mr(t,e)}matches(t){return yr(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function yr(t){return"and"===t.op}function vr(t){return wr(t)&&yr(t)}function wr(t){for(const e of t.filters)if(e instanceof mr)return!1;return!0}function Er(t){if(t instanceof gr)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(vr(t))return t.filters.map((t=>Er(t))).join(",");{const e=t.filters.map((t=>Er(t))).join(",");return`${t.op}(${e})`}}function Tr(t,e){return t instanceof gr?function(t,e){return e instanceof gr&&t.op===e.op&&t.field.isEqual(e.field)&&Ki(t.value,e.value)}(t,e):t instanceof mr?function(t,e){return e instanceof mr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Tr(n,e.filters[s])),!0)}(t,e):void Ms()}function _r(t){return t instanceof gr?function(t){return`${t.field.canonicalString()} ${t.op} ${Xi(t.value)}`}(t):t instanceof mr?function(t){return t.op.toString()+" {"+t.getFilters().map(_r).join(" ,")+"}"}(t):"Filter"}class br extends gr{constructor(t,e,n){super(t,e,n),this.key=oi.fromName(n.referenceValue)}matches(t){const e=oi.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ir extends gr{constructor(t,e){super(t,"in",e),this.keys=Ar("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Cr extends gr{constructor(t,e){super(t,"not-in",e),this.keys=Ar("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ar(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>oi.fromName(t.referenceValue)))}class Sr extends gr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return tr(e)&&Qi(e.arrayValue,this.value)}}class kr extends gr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Qi(this.value.arrayValue,e)}}class Dr extends gr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Qi(this.value.arrayValue,e)}}class Rr extends gr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!tr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Qi(this.value.arrayValue,t)))}}
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
 */class Nr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ft=null}}function xr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Nr(t,e,n,s,i,r,o)}function Lr(t){const e=Ps(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Er(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xi(t))).join(",")),e.ft=t}return e.ft}function Or(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tr(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hr(t.startAt,e.startAt)&&hr(t.endAt,e.endAt)}function Ur(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Mr{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Fr(t,e,n,s,i,r,o,a){return new Mr(t,e,n,s,i,r,o,a)}function Pr(t){return new Mr(t)}function Vr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Br(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qr(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function $r(t){return null!==t.collectionGroup}function jr(t){const e=Ps(t);if(null===e.dt){e.dt=[];const t=qr(e),n=Br(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new dr(t)),e.dt.push(new dr(ri.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new dr(ri.keyField(),t))}}}return e.dt}function zr(t){const e=Ps(t);if(!e.wt)if("F"===e.limitType)e.wt=xr(e.path,e.collectionGroup,jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of jr(e)){const e="desc"===i.dir?"asc":"desc";t.push(new dr(i.field,e))}const n=e.endAt?new cr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new cr(e.startAt.position,e.startAt.inclusive):null;e.wt=xr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Gr(t,e){e.getFirstInequalityField(),qr(t);const n=t.filters.concat([e]);return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kr(t,e,n){return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qr(t,e){return Or(zr(t),zr(e))&&t.limitType===e.limitType}function Hr(t){return`${Lr(zr(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_r(t))).join(", ")}]`),vi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xi(t))).join(",")),`Target(${e})`}(zr(t))}; limitType=${t.limitType})`}function Xr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):oi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of jr(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=lr(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,jr(t),e))&&!(t.endAt&&!function(t,e,n){const s=lr(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,jr(t),e))}(t,e)}function Yr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jr(t){return(e,n)=>{let s=!1;for(const i of jr(t)){const t=Zr(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Zr(t,e,n){const s=t.field.isKeyField()?oi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Hi(s,i):Ms()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ms()}}
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
 */class to{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ci(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Ai(this.inner)}size(){return this.innerSize}}
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
 */const eo=new Si(oi.comparator);function no(){return eo}const so=new Si(oi.comparator);function io(...t){let e=so;for(const n of t)e=e.insert(n.key,n);return e}function ro(t){let e=so;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function oo(){return uo()}function ao(){return uo()}function uo(){return new to((t=>t.toString()),((t,e)=>t.isEqual(e)))}const co=new Si(oi.comparator),lo=new Ri(oi.comparator);function ho(...t){let e=lo;for(const n of t)e=e.add(n);return e}const fo=new Ri(Js);function po(){return fo}
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
 */function go(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function mo(t){return{integerValue:""+t}}function yo(t,e){return Ei(e)?mo(e):go(t,e)}
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
 */class vo{constructor(){this._=void 0}}function wo(t,e,n){return t instanceof _o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof bo?Io(t,e):t instanceof Co?Ao(t,e):function(t,e){const n=To(t,e),s=ko(n)+ko(t._t);return Zi(n)&&Zi(t._t)?mo(s):go(t.serializer,s)}(t,e)}function Eo(t,e,n){return t instanceof bo?Io(t,e):t instanceof Co?Ao(t,e):n}function To(t,e){return t instanceof So?Zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class _o extends vo{}class bo extends vo{constructor(t){super(),this.elements=t}}function Io(t,e){const n=Do(e);for(const s of t.elements)n.some((t=>Ki(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Co extends vo{constructor(t){super(),this.elements=t}}function Ao(t,e){let n=Do(e);for(const s of t.elements)n=n.filter((t=>!Ki(t,s)));return{arrayValue:{values:n}}}class So extends vo{constructor(t,e){super(),this.serializer=t,this._t=e}}function ko(t){return Fi(t.integerValue||t.doubleValue)}function Do(t){return tr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function Ro(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof bo&&e instanceof bo||t instanceof Co&&e instanceof Co?Zs(t.elements,e.elements,Ki):t instanceof So&&e instanceof So?Ki(t._t,e._t):t instanceof _o&&e instanceof _o}(t.transform,e.transform)}class No{constructor(t,e){this.version=t,this.transformResults=e}}class xo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xo}static exists(t){return new xo(void 0,t)}static updateTime(t){return new xo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Lo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oo{}function Uo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Go(t.key,xo.none()):new Bo(t.key,t.data,xo.none());{const n=t.data,s=or.empty();let i=new Ri(ri.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new qo(t.key,s,new xi(i.toArray()),xo.none())}}function Mo(t,e,n){t instanceof Bo?function(t,e,n){const s=t.value.clone(),i=jo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof qo?function(t,e,n){if(!Lo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=jo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll($o(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,s){return t instanceof Bo?function(t,e,n,s){if(!Lo(t.precondition,e))return n;const i=t.value.clone(),r=zo(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof qo?function(t,e,n,s){if(!Lo(t.precondition,e))return n;const i=zo(t.fieldTransforms,s,e),r=e.data;return r.setAll($o(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Lo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Po(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=To(s.transform,t||null);null!=i&&(null===n&&(n=or.empty()),n.set(s.field,i))}return n||null}function Vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zs(t,e,((t,e)=>Ro(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends Oo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qo extends Oo{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $o(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function jo(t,e,n){const s=new Map;Fs(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Eo(o,a,n[i]))}return s}function zo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,wo(t,r,e))}return s}class Go extends Oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ko extends Oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Qo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Mo(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Fo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Fo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ao();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Uo(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ho())}isEqual(t){return this.batchId===t.batchId&&Zs(this.mutations,t.mutations,((t,e)=>Vo(t,e)))&&Zs(this.baseMutations,t.baseMutations,((t,e)=>Vo(t,e)))}}class Ho{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Fs(t.mutations.length===n.length);let s=co;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Ho(t,e,n,s)}}
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
 */class Wo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Xo{constructor(t){this.count=t}}
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
 */var Yo,Jo;function Zo(t){switch(t){default:return Ms();case Vs.CANCELLED:case Vs.UNKNOWN:case Vs.DEADLINE_EXCEEDED:case Vs.RESOURCE_EXHAUSTED:case Vs.INTERNAL:case Vs.UNAVAILABLE:case Vs.UNAUTHENTICATED:return!1;case Vs.INVALID_ARGUMENT:case Vs.NOT_FOUND:case Vs.ALREADY_EXISTS:case Vs.PERMISSION_DENIED:case Vs.FAILED_PRECONDITION:case Vs.ABORTED:case Vs.OUT_OF_RANGE:case Vs.UNIMPLEMENTED:case Vs.DATA_LOSS:return!0}}function ta(t){if(void 0===t)return Ls("GRPC error has no .code"),Vs.UNKNOWN;switch(t){case Yo.OK:return Vs.OK;case Yo.CANCELLED:return Vs.CANCELLED;case Yo.UNKNOWN:return Vs.UNKNOWN;case Yo.DEADLINE_EXCEEDED:return Vs.DEADLINE_EXCEEDED;case Yo.RESOURCE_EXHAUSTED:return Vs.RESOURCE_EXHAUSTED;case Yo.INTERNAL:return Vs.INTERNAL;case Yo.UNAVAILABLE:return Vs.UNAVAILABLE;case Yo.UNAUTHENTICATED:return Vs.UNAUTHENTICATED;case Yo.INVALID_ARGUMENT:return Vs.INVALID_ARGUMENT;case Yo.NOT_FOUND:return Vs.NOT_FOUND;case Yo.ALREADY_EXISTS:return Vs.ALREADY_EXISTS;case Yo.PERMISSION_DENIED:return Vs.PERMISSION_DENIED;case Yo.FAILED_PRECONDITION:return Vs.FAILED_PRECONDITION;case Yo.ABORTED:return Vs.ABORTED;case Yo.OUT_OF_RANGE:return Vs.OUT_OF_RANGE;case Yo.UNIMPLEMENTED:return Vs.UNIMPLEMENTED;case Yo.DATA_LOSS:return Vs.DATA_LOSS;default:return Ms()}}(Jo=Yo||(Yo={}))[Jo.OK=0]="OK",Jo[Jo.CANCELLED=1]="CANCELLED",Jo[Jo.UNKNOWN=2]="UNKNOWN",Jo[Jo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jo[Jo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jo[Jo.NOT_FOUND=5]="NOT_FOUND",Jo[Jo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jo[Jo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jo[Jo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jo[Jo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jo[Jo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jo[Jo.ABORTED=10]="ABORTED",Jo[Jo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jo[Jo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jo[Jo.INTERNAL=13]="INTERNAL",Jo[Jo.UNAVAILABLE=14]="UNAVAILABLE",Jo[Jo.DATA_LOSS=15]="DATA_LOSS";
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
class ea{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return na}static getOrCreateInstance(){return null===na&&(na=new ea),na}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let na=null;
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
 */class sa{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,ia.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new sa(ei.min(),s,po(),no(),ho())}}class ia{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ia(n,e,ho(),ho(),ho())}}
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
 */class ra{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class oa{constructor(t,e){this.targetId=t,this.Et=e}}class aa{constructor(t,e,n=Oi.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ua{constructor(){this.At=0,this.Rt=ha(),this.vt=Oi.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=ho(),e=ho(),n=ho();return this.Rt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ms()}})),new ia(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=ha()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ca{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=no(),this.qt=la(),this.Ut=new Ri(Js)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Ms()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ur(r))if(0===s){const t=new oi(r.path);this.Qt(n,t,ur.newNoDocument(t,ei.min()))}else Fs(1===s);else{const i=this.Zt(n);i!==s&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=ea.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const i=this.Yt(s);if(i){if(n.current&&Ur(i.target)){const e=new oi(i.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,ur.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=ho();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new sa(t,e,this.Ut,this.Lt,n);return this.Lt=no(),this.qt=la(),this.Ut=new Ri(Js),s}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const s=this.jt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new ua,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Ri(Js),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||xs("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new ua),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function la(){return new Si(oi.comparator)}function ha(){return new Si(oi.comparator)}
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
 */const da=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),pa=(()=>{const t={and:"AND",or:"OR"};return t})();class ga{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ya(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function va(t,e){return ma(t,e.toTimestamp())}function wa(t){return Fs(!!t),ei.fromTimestamp(function(t){const e=Mi(t);return new ti(e.seconds,e.nanos)}(t))}function Ea(t,e){return function(t){return new si(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ta(t){const e=si.fromString(t);return Fs(za(e)),e}function _a(t,e){return Ea(t.databaseId,e.path)}function ba(t,e){const n=Ta(e);if(n.get(1)!==t.databaseId.projectId)throw new Bs(Vs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Bs(Vs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oi(Sa(n))}function Ia(t,e){return Ea(t.databaseId,e)}function Ca(t){const e=Ta(t);return 4===e.length?si.emptyPath():Sa(e)}function Aa(t){return new si(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sa(t){return Fs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ka(t,e,n){return{name:_a(t,e),fields:n.value.mapValue.fields}}function Da(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ms()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(Fs(void 0===e||"string"==typeof e),Oi.fromBase64String(e||"")):(Fs(void 0===e||e instanceof Uint8Array),Oi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vs.UNKNOWN:ta(t.code);return new Bs(e,t.message||"")}(o);n=new aa(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ba(t,s.document.name),r=wa(s.document.updateTime),o=s.document.createTime?wa(s.document.createTime):ei.min(),a=new or({mapValue:{fields:s.document.fields}}),u=ur.newFoundDocument(i,r,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ra(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ba(t,s.document),r=s.readTime?wa(s.readTime):ei.min(),o=ur.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ba(t,s.document),r=s.removedTargetIds||[];n=new ra([],r,i,null)}else{if(!("filter"in e))return Ms();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Xo(s),r=t.targetId;n=new oa(r,i)}}return n}function Ra(t,e){let n;if(e instanceof Bo)n={update:ka(t,e.key,e.value)};else if(e instanceof Go)n={delete:_a(t,e.key)};else if(e instanceof qo)n={update:ka(t,e.key,e.data),updateMask:ja(e.fieldMask)};else{if(!(e instanceof Ko))return Ms();n={verify:_a(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _o)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Co)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof So)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Ms()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:va(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ms()}(t,e.precondition)),n}function Na(t,e){return t&&t.length>0?(Fs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wa(t.updateTime):wa(e);return n.isEqual(ei.min())&&(n=wa(e)),new No(n,t.transformResults||[])}(t,e)))):[]}function xa(t,e){return{documents:[Ia(t,e.path)]}}function La(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ia(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ia(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return $a(mr.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ba(t.field),direction:Fa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.useProto3Json||vi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Oa(t){let e=Ca(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Fs(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Ma(t);return e instanceof mr&&vr(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new dr(qa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new cr(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new cr(n,e)}(n.endAt)),Fr(e,i,o,r,a,"F",u,c)}function Ua(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ms()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ma(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qa(t.unaryFilter.field);return gr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qa(t.unaryFilter.field);return gr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qa(t.unaryFilter.field);return gr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qa(t.unaryFilter.field);return gr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ms()}}(t):void 0!==t.fieldFilter?function(t){return gr.create(qa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ms()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return mr.create(t.compositeFilter.filters.map((t=>Ma(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ms()}}(t.compositeFilter.op))}(t):Ms()}function Fa(t){return da[t]}function Pa(t){return fa[t]}function Va(t){return pa[t]}function Ba(t){return{fieldPath:t.canonicalString()}}function qa(t){return ri.fromServerFormat(t.fieldPath)}function $a(t){return t instanceof gr?function(t){if("=="===t.op){if(nr(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NAN"}};if(er(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(nr(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NAN"}};if(er(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(t.field),op:Pa(t.op),value:t.value}}}(t):t instanceof mr?function(t){const e=t.getFilters().map((t=>$a(t)));return 1===e.length?e[0]:{compositeFilter:{op:Va(t.op),filters:e}}}(t):Ms()}function ja(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function za(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Ga{constructor(t,e,n,s,i=ei.min(),r=ei.min(),o=Oi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ga(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ka{constructor(t){this.se=t}}function Qa(t){const e=Oa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Kr(e,e.limit,"L"):e}
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
 */class Ha{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Fi(t.integerValue));else if("doubleValue"in t){const n=Fi(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),wi(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Pi(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?rr(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Ms()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const s of Object.keys(n))this.fe(s,e),this.ue(n[s],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const s of n)this.ue(s,e)}_e(t,e){this.ae(e,37),oi.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Ha.pe=new Ha;
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
class Wa{constructor(){this.He=new Xa}addToCollectionParentIndex(t,e){return this.He.add(e),gi.resolve()}getCollectionParents(t,e){return gi.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return gi.resolve()}deleteFieldIndex(t,e){return gi.resolve()}getDocumentsMatchingTarget(t,e){return gi.resolve(null)}getIndexType(t,e){return gi.resolve(0)}getFieldIndexes(t,e){return gi.resolve([])}getNextCollectionGroupToUpdate(t){return gi.resolve(null)}getMinOffset(t,e){return gi.resolve(li.min())}getMinOffsetFromCollectionGroup(t,e){return gi.resolve(li.min())}updateCollectionGroup(t,e,n){return gi.resolve()}updateIndexEntries(t,e){return gi.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ri(si.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ri(si.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ya{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ya(t,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ya.DEFAULT_COLLECTION_PERCENTILE=10,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ya.DEFAULT=new Ya(41943040,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ya.DISABLED=new Ya(-1,0,0);
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
class Ja{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Ja(0)}static bn(){return new Ja(-1)}}
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
class Za{constructor(){this.changes=new to((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ur.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class tu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class eu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Fo(n.mutation,t,xi.empty(),ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ho()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ho()){const s=oo();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=io();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=oo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ho())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=no();const r=uo(),o=uo();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof qo)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Fo(o.mutation,e,o.mutation.getFieldMask(),ti.now())):r.set(e.key,xi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new tu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=uo();let s=new Si(((t,e)=>t-e)),i=ho();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||xi.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ho()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=ao();u.forEach((t=>{if(!i.has(t)){const s=Uo(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return gi.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$r(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):gi.resolve(oo());let o=-1,a=i;return r.next((e=>gi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?gi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ho()))).next((t=>({batchId:o,changes:ro(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new oi(e)).next((t=>{let e=io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=io();return this.indexManager.getCollectionParents(t,s).next((r=>gi.forEach(r,(r=>{const o=function(t,e){return new Mr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,ur.newInvalidDocument(s)))}));let n=io();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&Fo(r.mutation,i,xi.empty(),ti.now()),Xr(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class nu{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return gi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:wa(n.createTime)}),gi.resolve()}getNamedQuery(t,e){return gi.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Qa(t.bundledQuery),readTime:wa(t.readTime)}}(e)),gi.resolve()}}
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
 */class su{constructor(){this.overlays=new Si(oi.comparator),this.ts=new Map}getOverlay(t,e){return gi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oo();return gi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.re(t,e,s)})),gi.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ts.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),gi.resolve()}getOverlaysForCollection(t,e,n){const s=oo(),i=e.length+1,r=new oi(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return gi.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Si(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=oo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=oo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return gi.resolve(o)}re(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ts.get(s.largestBatchId).delete(n.key);this.ts.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wo(e,n));let i=this.ts.get(e);void 0===i&&(i=ho(),this.ts.set(e,i)),this.ts.set(e,i.add(n.key))}}
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
 */class iu{constructor(){this.es=new Ri(ru.ns),this.ss=new Ri(ru.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new ru(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new ru(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new oi(new si([])),n=new ru(e,t),s=new ru(e,t+1),i=[];return this.ss.forEachInRange([n,s],(t=>{this.us(t),i.push(t.key)})),i}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new oi(new si([])),n=new ru(e,t),s=new ru(e,t+1);let i=ho();return this.ss.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ru(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ru{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return oi.comparator(t.key,e.key)||Js(t.ds,e.ds)}static rs(t,e){return Js(t.ds,e.ds)||oi.comparator(t.key,e.key)}}
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
 */class ou{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Ri(ru.ns)}checkEmpty(t){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Qo(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this._s=this._s.add(new ru(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gi.resolve(r)}lookupMutationBatch(t,e){return gi.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ys(n),i=s<0?0:s;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ru(e,0),s=new ru(e,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,s],(t=>{const e=this.gs(t.ds);i.push(e)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ri(Js);return e.forEach((t=>{const e=new ru(t,0),s=new ru(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,s],(t=>{n=n.add(t.ds)}))})),gi.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const r=new ru(new oi(i),0);let o=new Ri(Js);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ds)),!0)}),r),gi.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fs(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return gi.forEach(e.mutations,(s=>{const i=new ru(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new ru(e,0),s=this._s.firstAfterOrEqual(n);return gi.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,gi.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class au{constructor(t){this.Ts=t,this.docs=new Si(oi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gi.resolve(n?n.document.mutableCopy():ur.newInvalidDocument(e))}getEntries(t,e){let n=no();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ur.newInvalidDocument(t))})),gi.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=no();const r=e.path,o=new oi(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||hi(ci(o),n)<=0||(s.has(o.key)||Xr(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return gi.resolve(i)}getAllFromCollectionGroup(t,e,n,s){Ms()}Es(t,e){return gi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new uu(this)}getSize(t){return gi.resolve(this.size)}}class uu extends Za{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Jn.addEntry(t,s)):this.Jn.removeEntry(n)})),gi.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
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
 */class cu{constructor(t){this.persistence=t,this.As=new to((t=>Lr(t)),Or),this.lastRemoteSnapshotVersion=ei.min(),this.highestTargetId=0,this.Rs=0,this.vs=new iu,this.targetCount=0,this.bs=Ja.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),gi.resolve()}getLastRemoteSnapshotVersion(t){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gi.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),gi.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Ja(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,gi.resolve()}updateTargetData(t,e){return this.Sn(e),gi.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,gi.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),gi.waitFor(i).next((()=>s))}getTargetCount(t){return gi.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return gi.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),gi.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),gi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),gi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return gi.resolve(n)}containsKey(t,e){return gi.resolve(this.vs.containsKey(e))}}
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
 */class lu{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new yi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new cu(this),this.indexManager=new Wa,this.remoteDocumentCache=function(t){return new au(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Ka(e),this.xs=new nu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new su,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new ou(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){xs("MemoryPersistence","Starting transaction:",t);const s=new hu(this.Vs.next());return this.referenceDelegate.Ns(),n(s).next((t=>this.referenceDelegate.ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return gi.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class hu extends fi{constructor(t){super(),this.currentSequenceNumber=t}}class du{constructor(t){this.persistence=t,this.$s=new iu,this.Ms=null}static Fs(t){return new du(t)}get Bs(){if(this.Ms)return this.Ms;throw Ms()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),gi.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),gi.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Bs,(n=>{const s=oi.fromPath(n);return this.Ls(t,s).next((t=>{t||e.removeEntry(s,ei.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return gi.or([()=>gi.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
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
class fu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=s}static Di(t,e){let n=ho(),s=ho();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fu(t,e.fromCache,n,s)}}
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
 */class pu{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ni(t,e).next((i=>i||this.ki(t,e,s,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Vr(e))return gi.resolve(null);let n=zr(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Kr(e,null,"F"),n=zr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ho(...s);return this.xi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.$i(e,s);return this.Mi(e,r,i,n.readTime)?this.Ni(t,Kr(e,null,"F")):this.Fi(t,r,e,n)}))))})))))}ki(t,e,n,s){return Vr(e)||s.isEqual(ei.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((i=>{const r=this.$i(e,i);return this.Mi(e,r,n,s)?this.Oi(t,e):(Ns()<=o["in"].DEBUG&&xs("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wr(e)),this.Fi(t,r,e,ui(s,-1)))}))}$i(t,e){let n=new Ri(Jr(t));return e.forEach(((e,s)=>{Xr(t,s)&&(n=n.add(s))})),n}Mi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return Ns()<=o["in"].DEBUG&&xs("QueryEngine","Using full collection scan to execute query:",Wr(e)),this.xi.getDocumentsMatchingQuery(t,e,li.min())}Fi(t,e,n,s){return this.xi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class gu{constructor(t,e,n,s){this.persistence=t,this.Bi=e,this.serializer=s,this.Li=new Si(Js),this.qi=new to((t=>Lr(t)),Or),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eu(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function mu(t,e,n,s){return new gu(t,e,n,s)}async function yu(t,e){const n=Ps(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ho();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function vu(t,e){const n=Ps(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=gi.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Fs(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ho();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function wu(t){const e=Ps(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function Eu(t,e){const n=Ps(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.Ds.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,r.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Oi.EMPTY_BYTE_STRING,ei.min()).withLastLimboFreeSnapshotVersion(ei.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.Ds.updateTargetData(t,c))}));let a=no(),u=ho();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Tu(t,r,e.documentUpdates).next((t=>{a=t.zi,u=t.ji}))),!s.isEqual(ei.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return gi.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Li=i,t)))}function Tu(t,e,n){let s=ho(),i=ho();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=no();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(ei.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):xs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{zi:s,ji:i}}))}function _u(t,e){const n=Ps(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bu(t,e){const n=Ps(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ds.getTargetData(t,e).next((i=>i?(s=i,gi.resolve(s)):n.Ds.allocateTargetId(t).next((i=>(s=new Ga(e,i,0,t.currentSequenceNumber),n.Ds.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Li.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Iu(t,e,n){const s=Ps(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!mi(t))throw t;xs("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Cu(t,e,n){const s=Ps(t);let i=ei.min(),r=ho();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Ps(t),i=s.qi.get(n);return void 0!==i?gi.resolve(s.Li.get(i)):s.Ds.getTargetData(e,n)}(s,t,zr(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Bi.getDocumentsMatchingQuery(t,e,n?i:ei.min(),n?r:ho()))).next((t=>(Au(s,Yr(e),t),{documents:t,Wi:r})))))}function Au(t,e,n){let s=t.Ui.get(e)||ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ui.set(e,s)}class Su{constructor(){this.activeTargetIds=po()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ku{constructor(){this.Br=new Su,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Su,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Du{qr(t){}shutdown(){}}
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
 */class Ru{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){xs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){xs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Nu=null;function xu(){return null===Nu?Nu=268435456+Math.round(2147483648*Math.random()):Nu++,"0x"+Nu.toString(16)
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
 */}const Lu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Ou{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
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
 */const Uu="WebChannelConnection";class Mu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,s,i){const r=xu(),o=this.ao(t,e);xs("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.ho(a,s,i),this.lo(t,o,a,n).then((e=>(xs("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Os("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Lu[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){const i=xu();return new Promise(((r,o)=>{const a=new As;a.setWithCredentials(!0),a.listenOnce(Ts.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Es.NO_ERROR:const e=a.getResponseJson();xs(Uu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Es.TIMEOUT:xs(Uu,`RPC '${t}' ${i} timed out`),o(new Bs(Vs.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const n=a.getStatus();if(xs(Uu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vs).indexOf(e)>=0?e:Vs.UNKNOWN}(e.status);o(new Bs(t,e.message))}else o(new Bs(Vs.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Bs(Vs.UNAVAILABLE,"Connection failed."));break;default:Ms()}}finally{xs(Uu,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(s);xs(Uu,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",u,n,15)}))}wo(t,e,n){const s=xu(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=vs(),o=ws(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Is({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");xs(Uu,`Creating RPC '${t}' stream ${s}: ${u}`,a);const c=r.createWebChannel(u,a);let l=!1,h=!1;const d=new Ou({Wr:e=>{h?xs(Uu,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(xs(Uu,`Opening RPC '${t}' stream ${s} transport.`),c.open(),l=!0),xs(Uu,`RPC '${t}' stream ${s} sending:`,e),c.send(e))},Hr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Cs.EventType.OPEN,(()=>{h||xs(Uu,`RPC '${t}' stream ${s} transport opened.`)})),f(c,Cs.EventType.CLOSE,(()=>{h||(h=!0,xs(Uu,`RPC '${t}' stream ${s} transport closed`),d.so())})),f(c,Cs.EventType.ERROR,(e=>{h||(h=!0,Os(Uu,`RPC '${t}' stream ${s} transport errored:`,e),d.so(new Bs(Vs.UNAVAILABLE,"The operation could not be completed")))})),f(c,Cs.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];Fs(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){xs(Uu,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Yo[t];if(void 0!==e)return ta(e)}(e),i=o.message;void 0===n&&(n=Vs.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new Bs(n,i)),c.close()}else xs(Uu,`RPC '${t}' stream ${s} received:`,i),d.io(i)}})),f(o,_s.STAT_EVENT,(e=>{e.stat===bs.PROXY?xs(Uu,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===bs.NOPROXY&&xs(Uu,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
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
 */function Fu(){return"undefined"!=typeof document?document:null}
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
 */function Pu(t){return new ga(t,!0)}
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
 */class Vu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&xs("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class Bu{constructor(t,e,n,s,i,r,o,a){this.Ws=t,this.bo=n,this.Po=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Vu(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Vs.RESOURCE_EXHAUSTED?(Ls(e.toString()),Ls("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Vs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new Bs(Vs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return xs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(xs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qu extends Bu{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=Da(this.serializer,t),n=function(t){if(!("targetChange"in t))return ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ei.min():e.readTime?wa(e.readTime):ei.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Aa(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;return n=Ur(s)?{documents:xa(t,s)}:{query:La(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ya(t,e.resumeToken):e.snapshotVersion.compareTo(ei.min())>0&&(n.readTime=ma(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=Ua(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Aa(this.serializer),e.removeTarget=t,this.Fo(e)}}class $u extends Bu{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Fs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=Na(t.writeResults,t.commitTime),n=wa(t.commitTime);return this.listener.Zo(n,e)}return Fs(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Aa(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ra(this.serializer,t)))};this.Fo(e)}}
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
 */class ju extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new Bs(Vs.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Bs(Vs.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Bs(Vs.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class zu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ls(e),this.ru=!1):xs("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
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
 */class Gu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((t=>{n.enqueueAndForget((async()=>{tc(this)&&(xs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ps(t);e.du.add(4),await Qu(e),e.mu.set("Unknown"),e.du.delete(4),await Ku(e)}(this))}))})),this.mu=new zu(n,s)}}async function Ku(t){if(tc(t))for(const e of t.wu)await e(!0)}async function Qu(t){for(const e of t.wu)await e(!1)}function Hu(t,e){const n=Ps(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Zu(n)?Ju(n):vc(n).No()&&Xu(n,e))}function Wu(t,e){const n=Ps(t),s=vc(n);n.fu.delete(e),s.No()&&Yu(n,e),0===n.fu.size&&(s.No()?s.$o():tc(n)&&n.mu.set("Unknown"))}function Xu(t,e){t.gu.Ot(e.targetId),vc(t).jo(e)}function Yu(t,e){t.gu.Ot(e),vc(t).Wo(e)}function Ju(t){t.gu=new ca({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),vc(t).start(),t.mu.ou()}function Zu(t){return tc(t)&&!vc(t).xo()&&t.fu.size>0}function tc(t){return 0===Ps(t).du.size}function ec(t){t.gu=void 0}async function nc(t){t.fu.forEach(((e,n)=>{Xu(t,e)}))}async function sc(t,e){ec(t),Zu(t)?(t.mu.au(e),Ju(t)):t.mu.set("Unknown")}async function ic(t,e,n){if(t.mu.set("Online"),e instanceof aa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.fu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.fu.delete(s),t.gu.removeTarget(s))}(t,e)}catch(n){xs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rc(t,n)}else if(e instanceof ra?t.gu.Kt(e):e instanceof oa?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ei.min()))try{const e=await wu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.fu.get(s);i&&t.fu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Oi.EMPTY_BYTE_STRING,n.snapshotVersion)),Yu(t,e);const s=new Ga(n.target,e,1,n.sequenceNumber);Xu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){xs("RemoteStore","Failed to raise snapshot:",e),await rc(t,e)}}async function rc(t,e,n){if(!mi(e))throw e;t.du.add(1),await Qu(t),t.mu.set("Offline"),n||(n=()=>wu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{xs("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ku(t)}))}function oc(t,e){return e().catch((n=>rc(t,n,e)))}async function ac(t){const e=Ps(t),n=wc(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;uc(e);)try{const t=await _u(e.localStore,s);if(null===t){0===e.lu.length&&n.$o();break}s=t.batchId,cc(e,t)}catch(t){await rc(e,t)}lc(e)&&hc(e)}function uc(t){return tc(t)&&t.lu.length<10}function cc(t,e){t.lu.push(e);const n=wc(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function lc(t){return tc(t)&&!wc(t).xo()&&t.lu.length>0}function hc(t){wc(t).start()}async function dc(t){wc(t).tu()}async function fc(t){const e=wc(t);for(const n of t.lu)e.Yo(n.mutations)}async function pc(t,e,n){const s=t.lu.shift(),i=Ho.from(s,e,n);await oc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ac(t)}async function gc(t,e){e&&wc(t).Jo&&await async function(t,e){if(n=e.code,Zo(n)&&n!==Vs.ABORTED){const n=t.lu.shift();wc(t).Oo(),await oc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ac(t)}var n}(t,e),lc(t)&&hc(t)}async function mc(t,e){const n=Ps(t);n.asyncQueue.verifyOperationInProgress(),xs("RemoteStore","RemoteStore received new credentials");const s=tc(n);n.du.add(3),await Qu(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ku(n)}async function yc(t,e){const n=Ps(t);e?(n.du.delete(2),await Ku(n)):e||(n.du.add(2),await Qu(n),n.mu.set("Unknown"))}function vc(t){return t.yu||(t.yu=function(t,e,n){const s=Ps(t);return s.nu(),new qu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Jr:nc.bind(null,t),Zr:sc.bind(null,t),zo:ic.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Zu(t)?Ju(t):t.mu.set("Unknown")):(await t.yu.stop(),ec(t))}))),t.yu}function wc(t){return t.pu||(t.pu=function(t,e,n){const s=Ps(t);return s.nu(),new $u(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Jr:dc.bind(null,t),Zr:gc.bind(null,t),Xo:fc.bind(null,t),Zo:pc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await ac(t)):(await t.pu.stop(),t.lu.length>0&&(xs("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
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
 */}class Ec{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Ec(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Bs(Vs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(t,e){if(Ls("AsyncQueue",`${e}: ${t}`),mi(t))return new Bs(Vs.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class _c{constructor(t){this.comparator=t?(e,n)=>t(e,n)||oi.comparator(e.key,n.key):(t,e)=>oi.comparator(t.key,e.key),this.keyedMap=io(),this.sortedSet=new Si(this.comparator)}static emptySet(t){return new _c(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _c))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _c;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class bc{constructor(){this.Iu=new Si(oi.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Ms():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ic{constructor(t,e,n,s,i,r,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Ic(t,e,_c.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class Cc{constructor(){this.Eu=void 0,this.listeners=[]}}class Ac{constructor(){this.queries=new to((t=>Hr(t)),Qr),this.onlineState="Unknown",this.Au=new Set}}async function Sc(t,e){const n=Ps(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Cc),i)try{r.Eu=await n.onListen(s)}catch(t){const n=Tc(t,`Initialization of query '${Wr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Nc(n)}async function kc(t,e){const n=Ps(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Dc(t,e){const n=Ps(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(s=!0);e.Eu=i}}s&&Nc(n)}function Rc(t,e,n){const s=Ps(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Nc(t){t.Au.forEach((t=>{t.next()}))}class xc{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ic(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=Ic.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
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
class Lc{constructor(t){this.key=t}}class Oc{constructor(t){this.key=t}}class Uc{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ho(),this.mutatedKeys=ho(),this.Ku=Jr(t),this.Gu=new _c(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new bc,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),l=Xr(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||u&&this.Ku(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(r=r.add(l),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,ju:n,Mi:o,mutatedKeys:i}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ms()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Ic(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:r}:{Yu:r}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new bc,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=ho(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Oc(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new Lc(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=ho();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return Ic.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Mc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Fc{constructor(t){this.key=t,this.ec=!1}}class Pc{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new to((t=>Hr(t)),Qr),this.ic=new Map,this.rc=new Set,this.oc=new Si(oi.comparator),this.uc=new Map,this.cc=new iu,this.ac={},this.hc=new Map,this.lc=Ja.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Vc(t,e){const n=il(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await bu(n.localStore,zr(e));n.isPrimaryClient&&Hu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Bc(n,e,s,"current"===r,t.resumeToken)}return i}async function Bc(t,e,n,s,i){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.zu(n);i.Mi&&(i=await Cu(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Jc(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const r=await Cu(t.localStore,e,!0),o=new Uc(e,r.Wi),a=o.zu(r.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);Jc(t,n,c.Yu);const l=new Mc(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function qc(t,e){const n=Ps(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!Qr(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Iu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Wu(n.remoteStore,s.targetId),Xc(n,s.targetId)})).catch(pi)):(Xc(n,s.targetId),await Iu(n.localStore,s.targetId,!0))}async function $c(t,e,n){const s=rl(t);try{const t=await function(t,e){const n=Ps(t),s=ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),ho());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=no(),u=ho();return n.Ki.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Po(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new qo(t.key,e,ar(e.value.mapValue),xo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:ro(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new Si(Js)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await el(s,t.changes),await ac(s.remoteStore)}catch(t){const e=Tc(t,"Failed to persist write");n.reject(e)}}async function jc(t,e){const n=Ps(t);try{const t=await Eu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(Fs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?Fs(s.ec):t.removedDocuments.size>0&&(Fs(s.ec),s.ec=!1))})),await el(n,t,e)}catch(t){await pi(t)}}function zc(t,e,n){const s=Ps(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.Ru(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ps(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Ru(e)&&(s=!0)})),s&&Nc(n)}(s.eventManager,e),t.length&&s.nc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Gc(t,e,n){const s=Ps(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new Si(oi.comparator);t=t.insert(r,ur.newNoDocument(r,ei.min()));const n=ho().add(r),i=new sa(ei.min(),new Map,new Ri(Js),t,n);await jc(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),tl(s)}else await Iu(s.localStore,e,!1).then((()=>Xc(s,e,n))).catch(pi)}async function Kc(t,e){const n=Ps(t),s=e.batch.batchId;try{const t=await vu(n.localStore,e);Wc(n,s,null),Hc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await el(n,t)}catch(t){await pi(t)}}async function Qc(t,e,n){const s=Ps(t);try{const t=await function(t,e){const n=Ps(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fs(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Wc(s,e,n),Hc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await el(s,t)}catch(n){await pi(n)}}function Hc(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Wc(t,e,n){const s=Ps(t);let i=s.ac[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||Yc(t,e)}))}function Yc(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Wu(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),tl(t))}function Jc(t,e,n){for(const s of n)s instanceof Lc?(t.cc.addReference(s.key,e),Zc(t,s)):s instanceof Oc?(xs("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Yc(t,s.key)):Ms()}function Zc(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(xs("SyncEngine","New document in limbo: "+n),t.rc.add(s),tl(t))}function tl(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new oi(si.fromString(e)),s=t.lc.next();t.uc.set(s,new Fc(n)),t.oc=t.oc.insert(n,s),Hu(t.remoteStore,new Ga(zr(Pr(n.path)),s,2,yi.ct))}}async function el(t,e,n){const s=Ps(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=fu.Di(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.zo(i),await async function(t,e){const n=Ps(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gi.forEach(e,(e=>gi.forEach(e.Vi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>gi.forEach(e.Si,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!mi(t))throw t;xs("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Li.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Li=n.Li.insert(t,i)}}}(s.localStore,r))}async function nl(t,e){const n=Ps(t);if(!n.currentUser.isEqual(e)){xs("SyncEngine","User change. New user:",e.toKey());const t=await yu(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Bs(Vs.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await el(n,t.Qi)}}function sl(t,e){const n=Ps(t),s=n.uc.get(e);if(s&&s.ec)return ho().add(s.key);{let t=ho();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function il(t){const e=Ps(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gc.bind(null,e),e.nc.zo=Dc.bind(null,e.eventManager),e.nc.wc=Rc.bind(null,e.eventManager),e}function rl(t){const e=Ps(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qc.bind(null,e),e}class ol{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Pu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return mu(this.persistence,new pu,t.initialUser,this.serializer)}createPersistence(t){return new lu(du.Fs,this.serializer)}createSharedClientState(t){return new ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class al{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nl.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ac}createDatastore(t){const e=Pu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Mu(s));var s;return function(t,e,n,s){return new ju(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>zc(this.syncEngine,t,0),r=Ru.D()?new Ru:new Du,new Gu(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Pc(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ps(t);xs("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Qu(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
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
class ul{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Ls("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class cl{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ks.UNAUTHENTICATED,this.clientId=Ys.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{xs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(xs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Bs(Vs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Tc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),xs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await yu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function hl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fl(t);xs("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>mc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mc(e.remoteStore,n))),t._onlineComponents=e}function dl(t){return"FirebaseError"===t.name?t.code===Vs.FAILED_PRECONDITION||t.code===Vs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function fl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){xs("FirestoreClient","Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dl(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new ol)}}else xs("FirestoreClient","Using default OfflineComponentProvider"),await ll(t,new ol);return t._offlineComponents}async function pl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(xs("FirestoreClient","Using user provided OnlineComponentProvider"),await hl(t,t._uninitializedComponentsProvider._online)):(xs("FirestoreClient","Using default OnlineComponentProvider"),await hl(t,new al))),t._onlineComponents}function gl(t){return pl(t).then((t=>t.syncEngine))}async function ml(t){const e=await pl(t),n=e.eventManager;return n.onListen=Vc.bind(null,e.syncEngine),n.onUnlisten=qc.bind(null,e.syncEngine),n}function yl(t,e,n={}){const s=new qs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new ul({next:r=>{e.enqueueAndForget((()=>kc(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Bs(Vs.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Bs(Vs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new xc(Pr(n.path),r,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await ml(t),t.asyncQueue,e,n,s))),s.promise}function vl(t,e,n={}){const s=new qs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new ul({next:n=>{e.enqueueAndForget((()=>kc(t,o))),n.fromCache&&"server"===s.source?i.reject(new Bs(Vs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new xc(n,r,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await ml(t),t.asyncQueue,e,n,s))),s.promise}
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
const wl=new Map;
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
 */function El(t,e,n){if(!n)throw new Bs(Vs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tl(t,e,n,s){if(!0===e&&!0===s)throw new Bs(Vs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _l(t){if(!oi.isDocumentKey(t))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bl(t){if(oi.isDocumentKey(t))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Il(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ms()}function Cl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Bs(Vs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Il(t);throw new Bs(Vs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Al{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Bs(Vs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Bs(Vs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Sl{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Bs(Vs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Bs(Vs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Al(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new js;switch(t.type){case"firstParty":return new Qs(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Bs(Vs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=wl.get(t);e&&(xs("ComponentProvider","Removing Datastore"),wl.delete(t),e.terminate())}(this),Promise.resolve()}}function kl(t,e,n,s={}){var i;const r=(t=Cl(t,Sl))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Os("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ks.MOCK_USER;else{e=(0,a.Sg)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Bs(Vs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ks(r)}t._authCredentials=new zs(new $s(e,n))}}
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
 */class Dl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dl(this.firestore,t,this._key)}}class Rl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rl(this.firestore,t,this._query)}}class Nl extends Rl{constructor(t,e,n){super(t,e,Pr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dl(this.firestore,null,new oi(t))}withConverter(t){return new Nl(this.firestore,t,this._path)}}function xl(t,e,...n){if(t=(0,a.m9)(t),El("collection","path",e),t instanceof Sl){const s=si.fromString(e,...n);return bl(s),new Nl(t,null,s)}{if(!(t instanceof Dl||t instanceof Nl))throw new Bs(Vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(si.fromString(e,...n));return bl(s),new Nl(t.firestore,null,s)}}function Ll(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Ys.A()),El("doc","path",e),t instanceof Sl){const s=si.fromString(e,...n);return _l(s),new Dl(t,null,new oi(s))}{if(!(t instanceof Dl||t instanceof Nl))throw new Bs(Vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(si.fromString(e,...n));return _l(s),new Dl(t.firestore,t instanceof Nl?t.converter:null,new oi(s))}}
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
class Ol{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Vu(this,"async_queue_retry"),this.qc=()=>{const t=Fu();t&&xs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Fu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Fu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new qs;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(_){if(!mi(_))throw _;xs("AsyncQueue","Operation failed with retryable error: "+_)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Ls("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const s=Ec.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(s),s}Uc(){this.Mc&&Ms()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Ul extends Sl{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ol,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pl(this),this._firestoreClient.terminate()}}function Ml(t,e){const n="object"==typeof t?t:(0,i.getApp)(),s="string"==typeof t?t:e||"(default)",r=(0,i._getProvider)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=(0,a.P0)("firestore");t&&kl(r,...t)}return r}function Fl(t){return t._firestoreClient||Pl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pl(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new $i(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cl(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class Vl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vl(Oi.fromBase64String(t))}catch(t){throw new Bs(Vs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Vl(Oi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Bl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Bs(Vs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ri(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class ql{constructor(t){this._methodName=t}}
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
 */class $l{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Bs(Vs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Bs(Vs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Js(this._lat,t._lat)||Js(this._long,t._long)}}
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
 */const jl=/^__.*__$/;class zl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new qo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bo(t,this.data,e,this.fieldTransforms)}}class Gl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new qo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Kl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ms()}}class Ql{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Ql(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.ea(t),s}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.Jc(),s}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return uh(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(Kl(this.Yc)&&jl.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Hl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Pu(t)}ua(t,e,n,s=!1){return new Ql({Yc:t,methodName:e,oa:n,path:ri.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wl(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new Hl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xl(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);ih("Data must be an object, but it was:",o,s);const a=nh(s,o);let u,c;if(r.merge)u=new xi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=rh(e,s,n);if(!o.contains(i))throw new Bs(Vs.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ch(t,i)||t.push(i)}u=new xi(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new zl(new or(a),u,c)}class Yl extends ql{_toFieldTransform(t){if(2!==t.Yc)throw 1===t.Yc?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yl}}function Jl(t,e,n,s){const i=t.ua(1,e,n);ih("Data must be an object, but it was:",i,s);const r=[],o=or.empty();Ci(s,((t,s)=>{const u=ah(e,t,n);s=(0,a.m9)(s);const c=i.na(u);if(s instanceof Yl)r.push(u);else{const t=eh(s,c);null!=t&&(r.push(u),o.set(u,t))}}));const u=new xi(r);return new Gl(o,u,i.fieldTransforms)}function Zl(t,e,n,s,i,r){const o=t.ua(1,e,n),u=[rh(e,s,n)],c=[i];if(r.length%2!=0)throw new Bs(Vs.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)u.push(rh(e,r[a])),c.push(r[a+1]);const l=[],h=or.empty();for(let f=u.length-1;f>=0;--f)if(!ch(l,u[f])){const t=u[f];let e=c[f];e=(0,a.m9)(e);const n=o.na(t);if(e instanceof Yl)l.push(t);else{const s=eh(e,n);null!=s&&(l.push(t),h.set(t,s))}}const d=new xi(l);return new Gl(h,d,o.fieldTransforms)}function th(t,e,n,s=!1){return eh(n,t.ua(s?4:3,e))}function eh(t,e){if(sh(t=(0,a.m9)(t)))return ih("Unsupported field value:",e,t),nh(t,e);if(t instanceof ql)return function(t,e){if(!Kl(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=eh(i,e.sa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return yo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ti.fromDate(t);return{timestampValue:ma(e.serializer,n)}}if(t instanceof ti){const n=new ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ma(e.serializer,n)}}if(t instanceof $l)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Vl)return{bytesValue:ya(e.serializer,t._byteString)};if(t instanceof Dl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${Il(t)}`)}(t,e)}function nh(t,e){const n={};return Ai(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,((t,s)=>{const i=eh(s,e.Xc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function sh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ti||t instanceof $l||t instanceof Vl||t instanceof Dl||t instanceof ql)}function ih(t,e,n){if(!sh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Il(n);throw"an object"===s?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function rh(t,e,n){if((e=(0,a.m9)(e))instanceof Bl)return e._internalPath;if("string"==typeof e)return ah(t,e);throw uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const oh=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search(oh)>=0)throw uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch(s){throw uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uh(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new Bs(Vs.INVALID_ARGUMENT,a+t+u)}function ch(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class lh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new hh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class hh extends lh{data(){return super.data()}}function dh(t,e){return"string"==typeof e?ah(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}
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
 */function fh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Bs(Vs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ph{}class gh extends ph{}function mh(t,e,...n){let s=[];e instanceof ph&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof vh)).length,n=t.filter((t=>t instanceof yh)).length;if(e>1||e>0&&n>0)throw new Bs(Vs.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(s);for(const i of s)t=i._apply(t);return t}class yh extends gh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new yh(t,e,n)}_apply(t){const e=this._parse(t);return Th(t._query,e),new Rl(t.firestore,t.converter,Gr(t._query,e))}_parse(t){const e=Wl(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Bs(Vs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Eh(o,r);const e=[];for(const n of o)e.push(wh(s,t,n));a={arrayValue:{values:e}}}else a=wh(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Eh(o,r),a=th(n,e,o,"in"===r||"not-in"===r);return gr.create(i,r,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class vh extends ph{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new vh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:mr.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const i of s)Th(n,i),n=Gr(n,i)}(t._query,e),new Rl(t.firestore,t.converter,Gr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function wh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Bs(Vs.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$r(e)&&-1!==n.indexOf("/"))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(si.fromString(n));if(!oi.isDocumentKey(s))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ji(t,new oi(s))}if(n instanceof Dl)return Ji(t,n._key);throw new Bs(Vs.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Il(n)}.`)}function Eh(t,e){if(!Array.isArray(t)||0===t.length)throw new Bs(Vs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Th(t,e){if(e.isInequality()){const n=qr(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=Br(t);null!==i&&_h(t,s,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Bs(Vs.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Bs(Vs.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _h(t,e,n){if(!n.isEqual(e))throw new Bs(Vs.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bh{convertValue(t,e="none"){switch(Gi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ms()}}convertObject(t,e){const n={};return Ci(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new $l(Fi(t.latitude),Fi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Bi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(qi(t));default:return null}}convertTimestamp(t){const e=Mi(t);return new ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=si.fromString(t);Fs(za(n));const s=new ji(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return s.isEqual(e)||Ls(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function Ih(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
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
class Ch{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ah extends lh{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Sh extends Ah{data(t={}){return super.data(t)}}class kh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ch(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Sh(this._firestore,this._userDataWriter,n.key,n,new Ch(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Bs(Vs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Sh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ch(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Sh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ch(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Dh(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Dh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ms()}}
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
function Rh(t){t=Cl(t,Dl);const e=Cl(t.firestore,Ul);return yl(Fl(e),t._key).then((n=>Fh(e,t,n)))}class Nh extends bh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dl(this.firestore,null,e)}}function xh(t){t=Cl(t,Rl);const e=Cl(t.firestore,Ul),n=Fl(e),s=new Nh(e);return fh(t._query),vl(n,t._query).then((n=>new kh(e,s,t,n)))}function Lh(t,e,n){t=Cl(t,Dl);const s=Cl(t.firestore,Ul),i=Ih(t.converter,e,n);return Mh(s,[Xl(Wl(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,xo.none())])}function Oh(t,e,n,...s){t=Cl(t,Dl);const i=Cl(t.firestore,Ul),r=Wl(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Bl?Zl(r,"updateDoc",t._key,e,n,s):Jl(r,"updateDoc",t._key,e),Mh(i,[o.toMutation(t._key,xo.exists(!0))])}function Uh(t){return Mh(Cl(t.firestore,Ul),[new Go(t._key,xo.none())])}function Mh(t,e){return function(t,e){const n=new qs;return t.asyncQueue.enqueueAndForget((async()=>$c(await gl(t),e,n))),n.promise}(Fl(t),e)}function Fh(t,e,n){const s=n.docs.get(e._key),i=new Nh(t);return new Ah(t,i,e._key,s,new Ch(n.hasPendingWrites,n.fromCache),e.converter)}
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
function Ph(){return new Yl("deleteField")}!function(t,e=!0){!function(t){Ds=t}(i.SDK_VERSION),(0,i._registerComponent)(new r.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Ul(new Gs(t.getProvider("auth-internal")),new Ws(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Bs(Vs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(Ss,"3.10.1",t),(0,i.registerVersion)(Ss,"3.10.1","esm2017")}()}}]);
//# sourceMappingURL=721.2e2f54d3.js.map