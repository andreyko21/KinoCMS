"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[830],{4494:function(t,e,n){n.d(e,{r:function(){return r}});var s=n(36);class r{async AddImgDocument(t,e,n,r){for(let i=0;i<t.length;i++){const o=t[i];if(null!=o.id){const a={link:o.link?o.link:""};n&&(a.text=o.text?o.text:""),r&&(a.urls=o.urls?o.urls:""),await(0,s.pl)((0,s.JU)(e,t[i].id),a)}}}async AddDocument(t,e,n){await(0,s.pl)((0,s.JU)(t,e),n)}async DeleteDocument(t,e){try{await(0,s.oe)((0,s.JU)(t,e))}catch(n){const t={},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(e)}}async DeleteFieldFromDocument(t){try{await(0,s.r7)(t,{capital:(0,s.AK)()})}catch(e){const t={unknown:"Сталася невідома помилка при видаленні поля з документа."},n=t[e.code]||"Не вдалося видалити поле з документа.";throw new Error(n)}}async getDocument(t,e){try{const n=(0,s.JU)(t,e),r=await(0,s.QT)(n);return r.exists()?r.data():null}catch(n){console.error("Error getting document:",n)}}async GetFilteredDocuments(t,e){const n=(0,s.IO)(t,e);try{const t=await(0,s.PL)(n);return t}catch(r){const t={"permission-denied":"Відмовлено в доступі до колекції.","invalid-argument":"Переданий недійсний аргумент.",unknown:"Сталася невідома помилка під час отримання даних з колекції."},e=t[r.code]||"Не вдалося отримати документи з колекції.";throw new Error(e)}}async GetAllDocuments(t){try{const e=await(0,s.PL)(t);return e}catch(e){const t={"permission-denied":"Відмовлено в доступі до колекції.","invalid-argument":"Переданий недійсний аргумент.",unknown:"Сталася невідома помилка під час отримання даних з колекції."},n=t[e.code]||"Не вдалося отримати документи з колекції.";throw new Error(n)}}}},151:function(t,e,n){n.d(e,{o:function(){return Se}});n(2801),n(7658),n(3767),n(8585),n(8696);var s=n(7077),r=n(223),i=n(7142);
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
const o="firebasestorage.googleapis.com",a="storageBucket",u=12e4,c=6e5;
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
class h extends r.ZR{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var l,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,t)}function g(t){return new h(l.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,t)}function v(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(t){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function E(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T(){return new h(l.CANCELED,"User canceled the upload/download.")}function _(t){return new h(l.INVALID_URL,"Invalid URL '"+t+"'.")}function b(t){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new h(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(t){return new h(l.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function k(t){return new h(l.INVALID_ARGUMENT,t)}function D(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function N(t){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t,e){return new h(l.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function x(t){throw new h(l.INTERNAL_ERROR,"Internal error: "+t)}
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(l||(l={}));class L{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=L.makeFromUrl(t,e)}catch(s){return new L(t,"")}if(""===n.path)return n;throw b(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const h="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${l}/${h}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${s}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:u,postModify:r},{regex:f,indices:p,postModify:c},{regex:y,indices:v,postModify:c}];for(let o=0;o<w.length;o++){const e=w[o],s=e.regex.exec(t);if(s){const t=s[e.indices.bucket];let r=s[e.indices.path];r||(r=""),n=new L(t,r),e.postModify(n);break}}if(null==n)throw _(t);return n}}class O{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function M(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function u(){return 2===a}let c=!1;function h(...t){c||(c=!0,e.apply(null,t))}function l(e){r=setTimeout((()=>{r=null,t(f,u())}),e)}function d(){i&&clearTimeout(i)}function f(t,...e){if(c)return void d();if(t)return d(),void h.call(null,t,...e);const n=u()||o;if(n)return d(),void h.call(null,t,...e);let r;s<64&&(s*=2),1===a?(a=2,r=0):r=1e3*(s+Math.random()),l(r)}let p=!1;function g(t){p||(p=!0,d(),c||(null!==r?(t||(a=2),clearTimeout(r),l(0)):t||(a=1)))}return l(0),i=setTimeout((()=>{o=!0,g(!0)}),n),g}function U(t){t(!1)}
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
 */function P(t){return void 0!==t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function V(t){return"string"===typeof t||t instanceof String}function q(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob&&!(0,r.UG)()}function $(t,e,n,s){if(s<e)throw k(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw k(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function j(t,e,n){let s=e;return null==n&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function K(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}
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
function G(t,e){const n=t>=500&&t<600,s=[408,429],r=-1!==s.indexOf(t),i=-1!==e.indexOf(t);return n||r||i}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class z{constructor(t,e,n,s,r,i,o,a,u,c,h,l=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,r=n.getStatus();if(!e||G(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new Q(!1,null,e))}const i=-1!==this.successCodes_.indexOf(r);t(!0,new Q(i,n))}))},e=(t,e)=>{const n=this.resolve_,s=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());P(t)?n(t):n()}catch(i){s(i)}else if(null!==r){const t=p();t.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,t)):s(t)}else if(e.canceled){const t=this.appDelete_?D():T();s(t)}else{const t=E();s(t)}};this.canceled_?e(!1,new Q(!1,null,!0)):this.backoffId_=M(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&U(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function H(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function J(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,s,r,i,o=!0){const a=K(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return X(c,e),H(c,n),W(c,i),J(c,s),new z(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new h(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function nt(t){if("undefined"===typeof atob)throw S("base-64");return atob(t)}
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
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case st.RAW:return new rt(ot(e));case st.BASE64:case st.BASE64URL:return new rt(ut(t,e));case st.DATA_URL:return new rt(ht(e),lt(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|63&s);else if(55296===(64512&s)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=s,i=t.charCodeAt(++n);s=65536|(1023&r)<<10|1023&i,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else e.push(239,191,189)}else 56320===(64512&s)?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw R(st.DATA_URL,"Malformed data URL.")}return ot(e)}function ut(t,e){switch(t){case st.BASE64:{const n=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(n||s){const e=n?"-":"_";throw R(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case st.BASE64URL:{const n=-1!==e.indexOf("+"),s=-1!==e.indexOf("/");if(n||s){const e=n?"+":"/";throw R(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(r){if(r.message.includes("polyfill"))throw r;throw R(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class ct{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw R(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ht(t){const e=new ct(t);return e.base64?ut(st.BASE64,e.rest):at(e.rest)}function lt(t){const e=new ct(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ft{constructor(t,e){let n=0,s="";q(t)?(this.data_=t,n=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(q(this.data_)){const n=this.data_,s=et(n,t,e);return null===s?null:new ft(s)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(tt.apply(null,e))}{const e=t.map((t=>V(t)?it(st.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const s=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)s[r++]=t[e]})),new ft(s,!0)}}uploadData(){return this.data_}}
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
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
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
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t,e){return e}class wt{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||vt}}let Et=null;function Tt(t){return!V(t)||t.length<2?t:yt(t)}function _t(){if(Et)return Et;const t=[];function e(t,e){return Tt(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function s(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new wt("size");return r.xform=s,t.push(r),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Et=t,Et}function bt(t,e){function n(){const n=t["bucket"],s=t["fullPath"],r=new L(n,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const s={type:"file"},r=n.length;for(let i=0;i<r;i++){const t=n[i];s[t.local]=t.xform(s,e[t.server])}return bt(s,t),s}function Ct(t,e,n){const s=pt(e);if(null===s)return null;const r=s;return It(t,r,n)}function At(t,e,n,s){const r=pt(e);if(null===r)return null;if(!V(r["downloadTokens"]))return null;const i=r["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),u=a.map((e=>{const r=t["bucket"],i=t["fullPath"],a="/b/"+o(r)+"/o/"+o(i),u=j(a,n,s),c=K({alt:"media",token:e});return u+c}));return u[0]}function St(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}
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
 */const kt="prefixes",Dt="items";function Nt(t,e,n){const s={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[kt])for(const r of n[kt]){const n=r.replace(/\/$/,""),i=t._makeStorageReference(new L(e,n));s.prefixes.push(i)}if(n[Dt])for(const r of n[Dt]){const n=t._makeStorageReference(new L(e,r["name"]));s.items.push(n)}return s}function Rt(t,e,n){const s=pt(n);if(null===s)return null;const r=s;return Nt(t,e,r)}class xt{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Lt(t){if(!t)throw p()}function Ot(t,e){function n(n,s){const r=Ct(t,s,e);return Lt(null!==r),r}return n}function Mt(t,e){function n(n,s){const r=Rt(t,e,s);return Lt(null!==r),r}return n}function Ut(t,e){function n(n,s){const r=Ct(t,s,e);return Lt(null!==r),At(r,s,t.host,t._protocol)}return n}function Pt(t){function e(e,n){let s;return s=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?m(t.bucket):403===e.getStatus()?w(t.path):n,s.status=e.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Ft(t){const e=Pt(t);function n(n,s){let r=e(n,s);return 404===n.getStatus()&&(r=g(t.path)),r.serverResponse=s.serverResponse,r}return n}function Vt(t,e,n){const s=e.fullServerUrl(),r=j(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new xt(r,i,Ot(t,n),o);return a.errorHandler=Ft(e),a}function qt(t,e,n,s,r){const i={};e.isRoot?i["prefix"]="":i["prefix"]=e.path+"/",n&&n.length>0&&(i["delimiter"]=n),s&&(i["pageToken"]=s),r&&(i["maxResults"]=r);const o=e.bucketOnlyServerUrl(),a=j(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,h=new xt(a,u,Mt(t,e.bucket),c);return h.urlParams=i,h.errorHandler=Pt(e),h}function Bt(t,e,n){const s=e.fullServerUrl(),r=j(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new xt(r,i,Ut(t,n),o);return a.errorHandler=Ft(e),a}function $t(t,e){const n=e.fullServerUrl(),s=j(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(t,e){}const a=new xt(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=Ft(e),a}function jt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Kt(t,e,n){const s=Object.assign({},n);return s["fullPath"]=t.path,s["size"]=e.size(),s["contentType"]||(s["contentType"]=jt(null,e)),s}function Gt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=Kt(e,s,r),h=St(c,n),l="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+u+"--",f=ft.getBlob(l,s,d);if(null===f)throw C();const p={name:c["fullPath"]},g=j(i,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new xt(g,m,Ot(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Pt(e),v}
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
let zt=null;class Qt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,s){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Ht extends Qt{initXhr(){this.xhr_.responseType="text"}}function Wt(){return zt?zt():new Ht}
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
class Xt{constructor(t,e){this._service=t,this._location=e instanceof L?e:L.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Xt(t,e)}get root(){const t=new L(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new L(this._location.bucket,t);return new Xt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw N(t)}}function Jt(t,e,n){t._throwIfRoot("uploadBytes");const s=Gt(t.storage,t._location,_t(),new ft(e,!0),n);return t.storage.makeRequestWithTokens(s,Wt).then((e=>({metadata:e,ref:t})))}function Yt(t){const e={prefixes:[],items:[]};return Zt(t,e).then((()=>e))}async function Zt(t,e,n){const s={pageToken:n},r=await te(t,s);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await Zt(t,e,r.nextPageToken)}function te(t,e){null!=e&&"number"===typeof e.maxResults&&$("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=qt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,Wt)}function ee(t){t._throwIfRoot("getMetadata");const e=Vt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,Wt)}function ne(t){t._throwIfRoot("getDownloadURL");const e=Bt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,Wt).then((t=>{if(null===t)throw A();return t}))}function se(t){t._throwIfRoot("deleteObject");const e=$t(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Wt)}function re(t,e){const n=mt(t._location.path,e),s=new L(t._location.bucket,n);return new Xt(t.storage,s)}
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
 */function ie(t){return/^[A-Za-z]+:\/\//.test(t)}function oe(t,e){return new Xt(t,e)}function ae(t,e){if(t instanceof le){const n=t;if(null==n._bucket)throw I();const s=new Xt(n,n._bucket);return null!=e?ae(s,e):s}return void 0!==e?re(t,e):t}function ue(t,e){if(e&&ie(e)){if(t instanceof le)return oe(t,e);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return ae(t,e)}function ce(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:L.makeFromBucketSpec(n,t)}function he(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken="string"===typeof i?i:(0,r.Sg)(i,t.app.options.projectId))}class le{constructor(t,e,n,s,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=s?L.makeFromBucketSpec(s,this._host):ce(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=L.makeFromBucketSpec(this._url,t):this._bucket=ce(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Xt(this,t)}_makeRequest(t,e,n,s,r=!0){if(this._deleted)return new O(D());{const i=Y(t,this._appId,n,s,e,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const de="@firebase/storage",fe="0.11.2",pe="storage";function ge(t,e,n){return t=(0,r.m9)(t),Jt(t,e,n)}function me(t){return t=(0,r.m9)(t),ee(t)}function ye(t){return t=(0,r.m9)(t),Yt(t)}function ve(t){return t=(0,r.m9)(t),ne(t)}function we(t){return t=(0,r.m9)(t),se(t)}function Ee(t,e){return t=(0,r.m9)(t),ue(t,e)}function Te(t=(0,s.getApp)(),e){t=(0,r.m9)(t);const n=(0,s._getProvider)(t,pe),i=n.getImmediate({identifier:e}),o=(0,r.P0)("storage");return o&&_e(i,...o),i}function _e(t,e,n,s={}){he(t,e,n,s)}
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
 */function be(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new le(n,r,i,e,s.SDK_VERSION)}function Ie(){(0,s._registerComponent)(new i.wA(pe,be,"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(de,fe,""),(0,s.registerVersion)(de,fe,"esm2017")}Ie();var Ce=n(1614);const Ae=Te(Ce.w);class Se{async UploadFile(t,e){try{const n=Ee(Ae,`${t}/${e.id}`),s=await fetch(e.src),r=await s.blob();await ge(n,r);const i=await ve(n);return i}catch(n){console.error(n);const t={"storage/unauthorized":"Користувач не має права доступу до об'єкта.","storage/canceled":"Користувач скасував завантаження.","storage/unknown":"Сталася невідома помилка під час завантаження."},e=t[n.code]||"Не вдалося завантажити файл.";throw new Error(e)}}async DeleteFileInFirebaseStorage(t,e){try{const n=Ee(Ae,`${t}/${e}`);await we(n)}catch(n){const t={"storage/object-not-found":"Цей файл не знайдено. Можливо він вже був видалений.","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію видалення скасовано.","storage/unknown":"Сталася невідома помилка при видаленні файлу."},e=t[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(e)}}async DeleteFolderInFirebaseStorage(t){const e={"storage/object-not-found":"Цей файл не знайдено. Можливо він вже був видалений.","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію видалення скасовано.","storage/unknown":"Сталася невідома помилка при видаленні файлу."};try{const n=Ee(Ae,t),s=await ye(n),r=s.items.map((async t=>{try{await we(t)}catch(n){console.error("Error deleting file:",n);const t=e[n.code]||"Не вдалося видалити файл зі сховища.";throw new Error(t)}})),i=s.prefixes.map((async t=>{try{await this.DeleteFolderInFirebaseStorage(t.fullPath)}catch(n){console.error("Error deleting subdirectory:",n);const t=e[n.code]||"Сталася невідома помилка при видаленні папки.";throw new Error(t)}}));await Promise.all([...r,...i])}catch(n){const t=e[n.code]||"Сталася невідома помилка при видаленні папки.";throw new Error(t)}}async GetMetadataFile(t,e){try{const n=Ee(Ae,`${t}/${e}`);me(n).then((t=>{}))}catch(n){const t={"storage/object-not-found":"Файл не знайдено. Метадані","storage/unauthorized":"Ви не маєте доступу до цього файлу.","storage/canceled":"Операцію скасовано.","storage/unknown":"Сталася невідома помилка при виклику метаданих файла."},e=t[n.code]||"Не вдалося викликати метадані файла.";throw new Error(e)}}async GetListAll(t){try{const e=Ee(Ae,t),n=await ye(e);return n.prefixes.forEach((t=>{})),n.items.forEach((t=>{})),n}catch(e){console.error(e);const t={"storage/object-not-found":"Об`єкт не знайдено","storage/unauthorized":"Користувач не має права доступу до об`єкта","storage/canceled":"Користувач скасував операцію","storage/unknown":"Сталася невідома помилка"},n=t[e.code]||"Сталася помилка при завантаженні списку";throw new Error(n)}}}},4592:function(t,e,n){n.d(e,{DV:function(){return v},EB:function(){return k},It:function(){return b},Kd:function(){return L},LS:function(){return x},Pe:function(){return p},d$:function(){return f},fh:function(){return I},hN:function(){return N},hS:function(){return g},kt:function(){return d},mV:function(){return w},nK:function(){return D},qo:function(){return R}});var s=n(1609),r=n(36),i=n(1614);const o=(0,r.ad)(i.w),a=(0,s.v0)(i.w),u=(0,r.hJ)(o,"users"),c=(0,r.JU)(u,a.currentUser.uid),h=(0,r.hJ)(c,"banners"),l=(0,r.JU)(h,"banner"),d=(0,r.hJ)(l,"MainTop"),f=(0,r.hJ)(l,"MainNewsPromotions"),p=(0,r.hJ)(l,"BackgroundBanner"),g=(0,r.hJ)(c,"films"),m=(0,r.JU)(g,"En"),y=(0,r.JU)(g,"Ua"),v=(0,r.hJ)(y,"films"),w=(0,r.hJ)(m,"films"),E=(0,r.hJ)(c,"cinemas"),T=(0,r.JU)(E,"Ua"),_=(0,r.JU)(E,"En"),b=(0,r.hJ)(T,"cinemas"),I=(0,r.hJ)(_,"cinemas"),C=(0,r.hJ)(c,"admin-panel"),A=(0,r.JU)(C,"Ua"),S=(0,r.JU)(C,"En"),k=(0,r.hJ)(A,"News"),D=(0,r.hJ)(S,"News"),N=(0,r.hJ)(A,"Promotions"),R=(0,r.hJ)(S,"Promotions"),x=(0,r.hJ)(A,"Pages"),L=(0,r.hJ)(S,"Pages")},1994:function(t,e,n){n.d(e,{Z:function(){return y}});var s=n(3396),r=n(7139);const i={class:"card"},o={class:"card-header"},a={class:"card-title"},u={class:"card-tools"},c={class:"card-body"},h={key:1,class:"overlay"},l=(0,s._)("i",{class:"fas fa-3x fa-sync-alt fa-spin"},null,-1),d=[l];function f(t,e,n,l,f,p){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",o,[(0,s._)("h3",a,(0,r.zw)(n.title),1),(0,s._)("div",u,[(0,s.WI)(t.$slots,"tools")])]),(0,s._)("div",c,[(0,s.WI)(t.$slots,"body")]),n.footer?(0,s.WI)(t.$slots,"footer",{key:0}):(0,s.kq)("",!0),n.isLoading?((0,s.wg)(),(0,s.iD)("div",h,d)):(0,s.kq)("",!0)])}var p={props:{title:{type:String,default:""},isLoading:{type:Boolean,default:!1},footer:{type:Boolean,default:!1}}},g=n(89);const m=(0,g.Z)(p,[["render",f]]);var y=m},36:function(t,e,n){n.d(e,{hJ:function(){return xh},oe:function(){return Ul},AK:function(){return Vl},JU:function(){return Lh},QT:function(){return Rl},PL:function(){return Ll},ad:function(){return Uh},IO:function(){return ml},pl:function(){return Ol},r7:function(){return Ml},ar:function(){return vl}});n(3767),n(8585),n(8696),n(7658),n(2801);var s,r=n(7077),i=n(7142),o=n(5168),a=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},h=h||{},l=u||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function b(){this.s=this.s,this.o=this.o}var I=0;b.prototype.s=!1,b.prototype.na=function(){this.s||(this.s=!0,this.M(),0==I)||g(this)},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function S(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function N(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return t<e?-1:t>e?1:0}function L(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return-1!=L().indexOf(t)}function M(t){return M[" "](t),t}function U(t){var e=W;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}M[" "]=d;var P,F=O("Opera"),V=O("Trident")||O("MSIE"),q=O("Edge"),B=q||V,$=O("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),j=-1!=L().toLowerCase().indexOf("webkit")&&!O("Edge");function K(){var t=l.document;return t?t.documentMode:void 0}t:{var G="",z=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):q?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(G=z?z[1]:""),V){var Q=K();if(null!=Q&&Q>parseFloat(G)){P=String(Q);break t}}P=G}var H,W={};function X(){return U((function(){let t=0;const e=R(String(P)).split("."),n=R("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=x(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||x(0==r[2].length,0==i[2].length)||x(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(l.document&&V){var J=K();H=J||(parseInt(P,10)||void 0)}else H=void 0;var Y=H;function Z(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{M(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}_(Z,k);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function st(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++nt,this.ba=this.ea=!1}function rt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function it(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ct(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=C(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}ct.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lt(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new st(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,s,r){if(s&&s.once)return yt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pt(t,e[i],n,s,r);return null}return n=It(n),t&&t[et]?t.N(e,n,p(s)?!!s.capture:!!s,r):gt(t,e,n,!1,s,r)}function gt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=_t(t);if(a||(t[dt]=a=new ct(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=mt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)D||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Et(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=Tt;return t}function yt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)yt(t,e[i],n,s,r);return null}return n=It(n),t&&t[et]?t.O(e,n,p(s)?!!s.capture:!!s,r):gt(t,e,n,!0,s,r)}function vt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vt(t,e[i],n,s,r);else s=p(s)?!!s.capture:!!s,n=It(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lt(i,n,s,r),-1<n&&(rt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=_t(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,n,s,r)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])ht(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Et(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_t(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):rt(t)}}}function Et(t){return t in ft?ft[t]:ft[t]="on"+t}function Tt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wt(t),t=n.call(s,e)}return t}function _t(t){return t=t[dt],t instanceof ct?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Ct(){b.call(this),this.i=new ct(this),this.P=this,this.I=null}function At(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var r=e;e=new k(s,t),ut(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=St(o,s,!0,e)&&r}if(o=e.g=t,r=St(o,s,!0,e)&&r,r=St(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=St(o,s,!1,e)&&r}function St(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&ht(t.i,o),r=!1!==a.call(u,s)&&r}}return r&&!s.defaultPrevented}_(Ct,b),Ct.prototype[et]=!0,Ct.prototype.removeEventListener=function(t,e,n,s){vt(this,t,e,n,s)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rt(n[s]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ct.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var kt=l.JSON.stringify;function Dt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){l.setTimeout((()=>{throw t}),0)}function Mt(t,e){Rt||Ut(),Pt||(Rt(),Pt=!0),Ft.add(t,e)}function Ut(){var t=l.Promise.resolve(void 0);Rt=function(){t.then(Vt)}}var Pt=!1,Ft=new Nt;function Vt(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1}function qt(t,e){Ct.call(this),this.h=t||1,this.g=e||l,this.j=E(this.lb,this),this.l=Date.now()}function Bt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function jt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(qt,Ct),s=qt.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(Bt(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){qt.X.M.call(this),Bt(this),delete this.g};class Kt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){b.call(this),this.h=t,this.g={}}_(Gt,b);var zt=[];function Qt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var r=0;r<n.length;r++){var i=pt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ht(t){it(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Wt(){this.g=!0}function Xt(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Yt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(s?" "+s:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return kt(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Ht(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Aa=function(){this.g=!1},Wt.prototype.info=function(){};var ee={},ne=null;function se(){return ne=ne||new Ct}function re(t){k.call(this,ee.Pa,t)}function ie(t){const e=se();At(e,new re(e))}function oe(t,e){k.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=se();At(e,new oe(e,t))}function ue(t,e){k.call(this,ee.Qa,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",_(re,k),ee.STAT_EVENT="statevent",_(oe,k),ee.Qa="timingevent",_(ue,k);var he={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},le={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ye(){k.call(this,"d")}function ve(){k.call(this,"c")}function we(){}function Ee(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Gt(this),this.O=_e,t=B?125:void 0,this.T=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}_(ye,k),_(ve,k),_(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var _e=45e3,be={},Ie={};function Ce(t,e,n){t.K=1,t.v=Qe($e(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Ne(t),t.A=$e(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),an(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Te,t.g=ls(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Kt(E(t.La,t,t.g),t.N)),Qt(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ie(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ke(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=De(t,n),s==Ie){4==e&&(t.o=4,ae(14),r=!1),Yt(t.j,t.m,null,"[Incomplete Response]");break}if(s==be){t.o=4,ae(15),Yt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Yt(t.j,t.m,s,null),Me(t,s)}Se(t)&&s!=Ie&&s!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ss(e),e.K=!0,ae(11))):(Yt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),Le(t))}function De(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ie:(n=Number(e.substring(n,s)),isNaN(n)?be:(s+=1,s+n>e.length?Ie:(e=e.substr(s,n),t.C=s+n,e)))}function Ne(t){t.V=Date.now()+t.O,Re(t,t.O)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(E(t.gb,t),e)}function xe(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||os(t.l,t)}function Oe(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.T),Ht(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;is(n),Hn(n)}ns(n),ae(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ce(E(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else us(n,11)}else if((t.J||n.g==t)&&is(n),!N(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(mn(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,ze(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=hs(s,s.H?s.ka:null,s.V),o.J){yn(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(xe(a),Ne(a)),s.g=o}else es(s);0<n.i.length&&Xn(n)}else"stop"!=c[0]&&"close"!=c[0]||us(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?us(n,7):Qn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}ie(4)}catch(c){}}function Ue(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Pe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),s=Ue(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}s=Ee.prototype,s.setTimeout=function(t){this.O=t},s.ib=function(t){t=t.target;const e=this.L;e&&3==Bn(t)?e.l():this.La(t)},s.La=function(t){try{if(t==this.g)t:{const h=Bn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(3!=h||B||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=h||7==e||ie(8==e||0>=d?3:2),xe(this);var n=this.g.aa();this.Y=n;e:if(Se(this)){var s=$n(this.g);t="";var r=s.length,i=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),Le(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ae(12),Oe(this),Le(this);break t}Yt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.P?(ke(this,h,o),B&&this.i&&3==h&&(Qt(this.S,this.T,"tick",this.hb),this.T.start())):(Yt(this.j,this.m,o,null),Me(this,o)),4==h&&Oe(this),this.i&&!this.I&&(4==h?os(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Oe(this),Le(this)}}}catch(h){}},s.hb=function(){if(this.g){var t=Bn(this.g),e=this.g.fa();this.C<e.length&&(xe(this),ke(this,t,e),this.i&&4!=t&&Ne(this))}},s.cancel=function(){this.I=!0,Oe(this)},s.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(ie(),ae(17)),Oe(this),this.o=2,Le(this)):Re(this,this.V-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=void 0!==e?e:t.h,je(this,t.j),this.s=t.s,this.g=t.g,Ke(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,je(this,n[1]||"",!0),this.s=He(n[2]||""),this.g=He(n[3]||"",!0),Ke(this,n[4]),this.l=He(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=He(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function $e(t){return new Be(t)}function je(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof nn?(t.i=e,cn(t.i,t.h)):(n||(e=We(e,tn)),t.i=new nn(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function Qe(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(We(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Ze:Ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,en)),t.join("")};var Je=/[#\/\?@]/g,Ye=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&qe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function rn(t,e){sn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return sn(t),e=un(t,e),t.g.has(e)}function an(t,e,n){rn(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),A(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cn(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(rn(this,e),an(this,n,t))}),t)),t.j=e}s=nn.prototype,s.add=function(t,e){sn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){sn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},s.W=function(t){sn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return sn(this),this.i=null,t=un(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function ln(t){this.l=t||dn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function wn(){}function En(){this.g=new wn}function Tn(t,e,n){const s=n||"";try{Fe(t,(function(t,n){let r=t;p(t)&&(r=kt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function _n(t,e){const n=new Wt;if(l.Image){const s=new Image;s.onload=T(bn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=T(bn,n,s,"TestLoadImage: error",!1,e),s.onabort=T(bn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=T(bn,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function bn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function In(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ln.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return l.JSON.parse(t,void 0)},_(In,de),In.prototype.g=function(){return new Cn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),_(Cn,Ct);var An=0;function Sn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Cn.prototype,s.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=An},s.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kn(this):Dn(this),3==this.readyState&&Sn(this)}},s.Va=function(t){this.g&&(this.response=this.responseText=t,kn(this))},s.Ua=function(t){this.g&&(this.response=t,kn(this))},s.ga=function(){this.g&&kn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Nn=l.JSON.parse;function Rn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xn,this.K=this.L=!1}_(Rn,Ct);var xn="",Ln=/^https?$/i,On=["POST","PUT"];function Mn(t){return V&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Un(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Vn(t)}function Pn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Fn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Bn(t)||2!=t.aa()))if(t.v&&4==Bn(t))$t(t.Ha,0,t);else if(At(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const u=t.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var r=String(t.H).match(Ve)[1]||null;if(!r&&l.self&&l.self.location){var i=l.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ln.test(r?r.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<Bn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Pn(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){qn(t);const s=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||At(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(ks){return null}}function jn(t){let e="";return it(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Kn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ca=0,this.i=[],this.j=new Wt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ln(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qn(t){if(Wn(t),3==t.G){var e=t.U++,n=$e(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),Zn(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=Qe($e(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=ls(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ne(e)}cs(t)}function Hn(t){t.g&&(ss(t),t.g.cancel(),t.g=null)}function Wn(t){Hn(t),t.u&&(l.clearTimeout(t.u),t.u=null),is(t),t.h.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Xn(t){fn(t.h)||t.m||(t.m=!0,Mt(t.Ja,t),t.C=0)}function Jn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ce(E(t.Ja,t,e),as(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.U++;const s=$e(t.F);ze(s,"SID",t.I),ze(s,"RID",n),ze(s,"AID",t.T),Zn(t,s),t.o&&t.s&&Kn(s,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ts(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Ce(n,s,e)}function Zn(t,e){t.ia&&it(t.ia,(function(t,n){ze(e,n,t)})),t.l&&Fe({},(function(t,n){ze(e,n,t)}))}function ts(t,e,n){n=Math.min(t.i.length,n);var s=t.l?E(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Tn(a,t,"req"+n+"_")}catch(Fs){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function es(t){t.g||t.u||(t.Z=1,Mt(t.Ia,t),t.A=0)}function ns(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ce(E(t.Ia,t),as(t,t.A)),t.A++,!0)}function ss(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function rs(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Kn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qe($e(e)),n.s=null,n.P=!0,Ae(n,t)}function is(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function os(t,e){var n=null;if(t.g==e){is(t),ss(t),t.g=null;var s=2}else{if(!gn(t.h,e))return;n=e.D,yn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=se(),At(s,new ue(s,n)),Xn(t)}else es(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==s&&Jn(t,e)||2==s&&ns(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}function as(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=E(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||je(n,"https"),Qe(n)),_n(n.toString(),s)}else ae(2);t.G=0,t.l&&t.l.va(e),cs(t),Wn(t)}function cs(t){if(t.G=0,t.la=[],t.l){const e=vn(t.h);0==e.length&&0==t.i.length||(S(t.la,e),S(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function hs(t,e,n){var s=n instanceof Be?$e(n):new Be(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Ke(s,s.m);else{var r=l.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Be(null,void 0);s&&je(i,s),e&&(i.g=e),r&&Ke(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ze(s,n,e),ze(s,"VER",t.ma),Zn(t,s),s}function ls(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rn(new In({jb:!0})):new Rn(t.ra),e.Ka(t.H),e}function ds(){}function fs(){if(V&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function ps(t,e){Ct.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}function gs(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ms(){ve.call(this),this.status=1}function ys(t){this.g=t}s=Rn.prototype,s.Ka=function(t){this.L=t},s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?fe(this.u):fe(ge),this.g.onreadystatechange=E(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Un(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=l.FormData&&t instanceof l.FormData,!(0<=C(On,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qn(this),0<this.B&&((this.K=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Un(this,i)}},s.qa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Vn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Rn.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.fb())},s.fb=function(){Fn(this)},s.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Nn(e)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=zn.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ee(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ot(i),ut(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ts(this,r,e),n=$e(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),Zn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jn(i)))+"&"+e:this.o&&Kn(n,this.o,i)),mn(this.h,r),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),r.Z=!0,Ce(r,n,null)):Ce(r,n,e),this.G=2}}else 3==this.G&&(t?Yn(this,t):0==this.i.length||fn(this.h)||Yn(this))},s.Ia=function(){if(this.u=null,rs(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ce(E(this.eb,this),t)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Hn(this),rs(this))},s.cb=function(){null!=this.v&&(this.v=null,Hn(this),ns(this),ae(19))},s.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},s=ds.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},fs.prototype.g=function(t,e){return new ps(t,e)},_(ps,Ct),ps.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hs(t,null,t.V),Xn(t)},ps.prototype.close=function(){Qn(this.g)},ps.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kt(t),t=n);e.i.push(new hn(e.ab++,t)),3==e.G&&Xn(e)},ps.prototype.M=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,ps.X.M.call(this)},_(gs,ye),_(ms,ve),_(ys,ds),ys.prototype.xa=function(){At(this.g,"a")},ys.prototype.wa=function(t){At(this.g,new gs(t))},ys.prototype.va=function(t){At(this.g,new ms)},ys.prototype.ua=function(){At(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,ps.prototype.send=ps.prototype.u,ps.prototype.open=ps.prototype.m,ps.prototype.close=ps.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,le.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var vs=c.createWebChannelTransport=function(){return new fs},ws=c.getStatEventTarget=function(){return se()},Es=c.ErrorCode=he,Ts=c.EventType=le,_s=c.Event=ee,bs=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Is=c.FetchXmlHttpFactory=In,Cs=c.WebChannel=pe,As=c.XhrIo=Rn;const Ss="@firebase/firestore";
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
 */const Ns=new o.Yd("@firebase/firestore");function Rs(){return Ns.logLevel}function xs(t,...e){if(Ns.logLevel<=o["in"].DEBUG){const n=e.map(Ms);Ns.debug(`Firestore (${Ds}): ${t}`,...n)}}function Ls(t,...e){if(Ns.logLevel<=o["in"].ERROR){const n=e.map(Ms);Ns.error(`Firestore (${Ds}): ${t}`,...n)}}function Os(t,...e){if(Ns.logLevel<=o["in"].WARN){const n=e.map(Ms);Ns.warn(`Firestore (${Ds}): ${t}`,...n)}}function Ms(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Us(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Ls(e),new Error(e)}function Ps(t,e){t||Us()}function Fs(t,e){return t}
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
 */const Vs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qs extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Bs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class $s{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class js{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ks.UNAUTHENTICATED)))}shutdown(){}}class Ks{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gs{constructor(t){this.t=t,this.currentUser=ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Bs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bs,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{xs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(xs("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bs)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(xs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ps("string"==typeof e.accessToken),new $s(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ps(null===t||"string"==typeof t),new ks(t)}}class zs{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ks.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new zs(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ks.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ws{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&xs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,xs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{xs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):xs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ps("string"==typeof t.token),this.T=t.token,new Hs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */class Js{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Xs(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function Ys(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class tr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new qs(Vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new qs(Vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new qs(Vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new qs(Vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new tr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ys(this.nanoseconds,t.nanoseconds):Ys(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class er{constructor(t){this.timestamp=t}static fromTimestamp(t){return new er(t)}static min(){return new er(new tr(0,0))}static max(){return new er(new tr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Us(),void 0===n?n=t.length-e:n>t.length-e&&Us(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class sr extends nr{construct(t,e,n){return new sr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new qs(Vs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new sr(e)}static emptyPath(){return new sr([])}}const rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ir extends nr{construct(t,e,n){return new ir(t,e,n)}static isValidIdentifier(t){return rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ir.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ir(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new qs(Vs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new qs(Vs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new qs(Vs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new qs(Vs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ir(e)}static emptyPath(){return new ir([])}}
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
 */class or{constructor(t){this.path=t}static fromPath(t){return new or(sr.fromString(t))}static fromName(t){return new or(sr.fromString(t).popFirst(5))}static empty(){return new or(sr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===sr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return sr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new or(new sr(t.slice()))}}
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
 */class ar{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ar.UNKNOWN_ID=-1;function ur(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=er.fromTimestamp(1e9===s?new tr(n+1,0):new tr(n,s));return new hr(r,or.empty(),e)}function cr(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new hr(er.min(),or.empty(),-1)}static max(){return new hr(er.max(),or.empty(),-1)}}function lr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=or.comparator(t.documentKey,e.documentKey),0!==n?n:Ys(t.largestBatchId,e.largestBatchId))}
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
 */const dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function pr(t){if(t.code!==Vs.FAILED_PRECONDITION||t.message!==dr)throw t;xs("LocalStore","Unexpectedly lost primary lease")}
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
 */class gr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Us(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gr?e:gr.resolve(e)}catch(t){return gr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.reject(e)}static resolve(t){return new gr(((e,n)=>{e(t)}))}static reject(t){return new gr(((e,n)=>{n(t)}))}static waitFor(t){return new gr(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=gr.resolve(!1);for(const n of t)e=e.next((t=>t?gr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new gr(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const u=a;e(t[u]).next((t=>{i[u]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new gr(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
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
 */function mr(t){return"IndexedDbTransactionError"===t.name}
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
class yr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function vr(t){return null==t}function wr(t){return 0===t&&1/t==-1/0}function Er(t){return"number"==typeof t&&Number.isInteger(t)&&!wr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */yr.ct=-1;const Tr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_r=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],br=_r;
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
function Ir(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ar(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Sr{constructor(t,e){this.comparator=t,this.root=e||Dr.EMPTY}insert(t,e){return new Sr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Dr.BLACK,null,null))}remove(t){return new Sr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Dr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kr(this.root,t,this.comparator,!0)}}class kr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Dr{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Dr.RED,this.left=null!=s?s:Dr.EMPTY,this.right=null!=r?r:Dr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Dr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Dr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Dr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Dr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Us();if(this.right.isRed())throw Us();const t=this.left.check();if(t!==this.right.check())throw Us();return t+(this.isRed()?0:1)}}Dr.EMPTY=null,Dr.RED=!0,Dr.BLACK=!1,Dr.EMPTY=new class{constructor(){this.size=0}get key(){throw Us()}get value(){throw Us()}get color(){throw Us()}get left(){throw Us()}get right(){throw Us()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Dr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Nr{constructor(t){this.comparator=t,this.data=new Sr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rr(this.data.getIterator())}getIteratorFrom(t){return new Rr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Nr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Nr(this.comparator);return e.data=t,e}}class Rr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class xr{constructor(t){this.fields=t,t.sort(ir.comparator)}static empty(){return new xr([])}unionWith(t){let e=new Nr(ir.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Lr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Or{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Lr("Invalid base64 string: "+t):t}}(t);return new Or(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Or(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ys(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Or.EMPTY_BYTE_STRING=new Or("");const Mr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(Ps(!!t),"string"==typeof t){let e=0;const n=Mr.exec(t);if(Ps(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pr(t.seconds),nanos:Pr(t.nanos)}}function Pr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Fr(t){return"string"==typeof t?Or.fromBase64String(t):Or.fromUint8Array(t)}
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
 */function Vr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function qr(t){const e=t.mapValue.fields.__previous_value__;return Vr(e)?qr(e):e}function Br(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new tr(e.seconds,e.nanos)}
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
 */class $r{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vr(t)?4:ii(t)?9007199254740991:10:Us()}function zr(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Br(t).isEqual(Br(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ur(t.timestampValue),s=Ur(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Fr(t.bytesValue).isEqual(Fr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pr(t.geoPointValue.latitude)===Pr(e.geoPointValue.latitude)&&Pr(t.geoPointValue.longitude)===Pr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pr(t.integerValue)===Pr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pr(t.doubleValue),s=Pr(e.doubleValue);return n===s?wr(n)===wr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ir(n)!==Ir(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!zr(n[r],s[r])))return!1;return!0}(t,e);default:return Us()}}function Qr(t,e){return void 0!==(t.values||[]).find((t=>zr(t,e)))}function Hr(t,e){if(t===e)return 0;const n=Gr(t),s=Gr(e);if(n!==s)return Ys(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ys(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pr(t.integerValue||t.doubleValue),s=Pr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Wr(t.timestampValue,e.timestampValue);case 4:return Wr(Br(t),Br(e));case 5:return Ys(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Fr(t),s=Fr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=Ys(n[r],s[r]);if(0!==t)return t}return Ys(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ys(Pr(t.latitude),Pr(e.latitude));return 0!==n?n:Ys(Pr(t.longitude),Pr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=Hr(n[r],s[r]);if(t)return t}return Ys(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Kr.mapValue&&e===Kr.mapValue)return 0;if(t===Kr.mapValue)return 1;if(e===Kr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=Ys(s[o],i[o]);if(0!==t)return t;const e=Hr(n[s[o]],r[i[o]]);if(0!==e)return e}return Ys(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Us()}}function Wr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ys(t,e);const n=Ur(t),s=Ur(e),r=Ys(n.seconds,s.seconds);return 0!==r?r:Ys(n.nanos,s.nanos)}function Xr(t){return Jr(t)}function Jr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ur(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,or.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Jr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Jr(t.fields[r])}`;return n+"}"}(t.mapValue):Us();var e,n}function Yr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zr(t){return!!t&&"integerValue"in t}function ti(t){return!!t&&"arrayValue"in t}function ei(t){return!!t&&"nullValue"in t}function ni(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function si(t){return!!t&&"mapValue"in t}function ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ri(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ii(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class oi{constructor(t){this.value=t}static empty(){return new oi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!si(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ri(e)}setAll(t){let e=ir.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=ri(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());si(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];si(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Cr(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new oi(ri(this.value))}}function ai(t){const e=[];return Cr(t.fields,((t,n)=>{const s=new ir([t]);if(si(n)){const t=ai(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new xr(e)
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
 */}class ui{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new ui(t,0,er.min(),er.min(),er.min(),oi.empty(),0)}static newFoundDocument(t,e,n,s){return new ui(t,1,e,er.min(),n,s,0)}static newNoDocument(t,e){return new ui(t,2,e,er.min(),er.min(),oi.empty(),0)}static newUnknownDocument(t,e){return new ui(t,3,e,er.min(),er.min(),oi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(er.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=er.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ui&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ui(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ci{constructor(t,e){this.position=t,this.inclusive=e}}function hi(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?or.comparator(or.fromName(o.referenceValue),n.key):Hr(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function li(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zr(t.position[n],e.position[n]))return!1;return!0}
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
 */class di{constructor(t,e="asc"){this.field=t,this.dir=e}}function fi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class pi{}class gi extends pi{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new bi(t,e,n):"array-contains"===e?new Si(t,n):"in"===e?new ki(t,n):"not-in"===e?new Di(t,n):"array-contains-any"===e?new Ni(t,n):new gi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ii(t,n):new Ci(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Hr(e,this.value)):null!==e&&Gr(this.value)===Gr(e)&&this.matchesComparison(Hr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Us()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mi extends pi{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new mi(t,e)}matches(t){return yi(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function yi(t){return"and"===t.op}function vi(t){return wi(t)&&yi(t)}function wi(t){for(const e of t.filters)if(e instanceof mi)return!1;return!0}function Ei(t){if(t instanceof gi)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(vi(t))return t.filters.map((t=>Ei(t))).join(",");{const e=t.filters.map((t=>Ei(t))).join(",");return`${t.op}(${e})`}}function Ti(t,e){return t instanceof gi?function(t,e){return e instanceof gi&&t.op===e.op&&t.field.isEqual(e.field)&&zr(t.value,e.value)}(t,e):t instanceof mi?function(t,e){return e instanceof mi&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Ti(n,e.filters[s])),!0)}(t,e):void Us()}function _i(t){return t instanceof gi?function(t){return`${t.field.canonicalString()} ${t.op} ${Xr(t.value)}`}(t):t instanceof mi?function(t){return t.op.toString()+" {"+t.getFilters().map(_i).join(" ,")+"}"}(t):"Filter"}class bi extends gi{constructor(t,e,n){super(t,e,n),this.key=or.fromName(n.referenceValue)}matches(t){const e=or.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ii extends gi{constructor(t,e){super(t,"in",e),this.keys=Ai("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ci extends gi{constructor(t,e){super(t,"not-in",e),this.keys=Ai("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ai(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>or.fromName(t.referenceValue)))}class Si extends gi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ti(e)&&Qr(e.arrayValue,this.value)}}class ki extends gi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Qr(this.value.arrayValue,e)}}class Di extends gi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Qr(this.value.arrayValue,e)}}class Ni extends gi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ti(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Qr(this.value.arrayValue,t)))}}
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
 */class Ri{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ft=null}}function xi(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ri(t,e,n,s,r,i,o)}function Li(t){const e=Fs(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ei(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xr(t))).join(",")),e.ft=t}return e.ft}function Oi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ti(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!li(t.startAt,e.startAt)&&li(t.endAt,e.endAt)}function Mi(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Ui{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Pi(t,e,n,s,r,i,o,a){return new Ui(t,e,n,s,r,i,o,a)}function Fi(t){return new Ui(t)}function Vi(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function qi(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bi(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function $i(t){return null!==t.collectionGroup}function ji(t){const e=Fs(t);if(null===e.dt){e.dt=[];const t=Bi(e),n=qi(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new di(t)),e.dt.push(new di(ir.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new di(ir.keyField(),t))}}}return e.dt}function Ki(t){const e=Fs(t);if(!e.wt)if("F"===e.limitType)e.wt=xi(e.path,e.collectionGroup,ji(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of ji(e)){const e="desc"===r.dir?"asc":"desc";t.push(new di(r.field,e))}const n=e.endAt?new ci(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ci(e.startAt.position,e.startAt.inclusive):null;e.wt=xi(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Gi(t,e){e.getFirstInequalityField(),Bi(t);const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zi(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qi(t,e){return Oi(Ki(t),Ki(e))&&t.limitType===e.limitType}function Hi(t){return`${Li(Ki(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_i(t))).join(", ")}]`),vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xr(t))).join(",")),`Target(${e})`}(Ki(t))}; limitType=${t.limitType})`}function Xi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):or.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ji(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=hi(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ji(t),e))&&!(t.endAt&&!function(t,e,n){const s=hi(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ji(t),e))}(t,e)}function Ji(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yi(t){return(e,n)=>{let s=!1;for(const r of ji(t)){const t=Zi(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Zi(t,e,n){const s=t.field.isKeyField()?or.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?Hr(s,r):Us()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Us()}}
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
 */class to{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Cr(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Ar(this.inner)}size(){return this.innerSize}}
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
 */const eo=new Sr(or.comparator);function no(){return eo}const so=new Sr(or.comparator);function ro(...t){let e=so;for(const n of t)e=e.insert(n.key,n);return e}function io(t){let e=so;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function oo(){return uo()}function ao(){return uo()}function uo(){return new to((t=>t.toString()),((t,e)=>t.isEqual(e)))}const co=new Sr(or.comparator),ho=new Nr(or.comparator);function lo(...t){let e=ho;for(const n of t)e=e.add(n);return e}const fo=new Nr(Ys);function po(){return fo}
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
 */function go(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wr(e)?"-0":e}}function mo(t){return{integerValue:""+t}}function yo(t,e){return Er(e)?mo(e):go(t,e)}
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
 */class vo{constructor(){this._=void 0}}function wo(t,e,n){return t instanceof _o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof bo?Io(t,e):t instanceof Co?Ao(t,e):function(t,e){const n=To(t,e),s=ko(n)+ko(t._t);return Zr(n)&&Zr(t._t)?mo(s):go(t.serializer,s)}(t,e)}function Eo(t,e,n){return t instanceof bo?Io(t,e):t instanceof Co?Ao(t,e):n}function To(t,e){return t instanceof So?Zr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class _o extends vo{}class bo extends vo{constructor(t){super(),this.elements=t}}function Io(t,e){const n=Do(e);for(const s of t.elements)n.some((t=>zr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Co extends vo{constructor(t){super(),this.elements=t}}function Ao(t,e){let n=Do(e);for(const s of t.elements)n=n.filter((t=>!zr(t,s)));return{arrayValue:{values:n}}}class So extends vo{constructor(t,e){super(),this.serializer=t,this._t=e}}function ko(t){return Pr(t.integerValue||t.doubleValue)}function Do(t){return ti(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function No(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof bo&&e instanceof bo||t instanceof Co&&e instanceof Co?Zs(t.elements,e.elements,zr):t instanceof So&&e instanceof So?zr(t._t,e._t):t instanceof _o&&e instanceof _o}(t.transform,e.transform)}class Ro{constructor(t,e){this.version=t,this.transformResults=e}}class xo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xo}static exists(t){return new xo(void 0,t)}static updateTime(t){return new xo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Lo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oo{}function Mo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Go(t.key,xo.none()):new qo(t.key,t.data,xo.none());{const n=t.data,s=oi.empty();let r=new Nr(ir.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Bo(t.key,s,new xr(r.toArray()),xo.none())}}function Uo(t,e,n){t instanceof qo?function(t,e,n){const s=t.value.clone(),r=jo(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Bo?function(t,e,n){if(!Lo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=jo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll($o(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,s){return t instanceof qo?function(t,e,n,s){if(!Lo(t.precondition,e))return n;const r=t.value.clone(),i=Ko(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bo?function(t,e,n,s){if(!Lo(t.precondition,e))return n;const r=Ko(t.fieldTransforms,s,e),i=e.data;return i.setAll($o(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Lo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Fo(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=To(s.transform,t||null);null!=r&&(null===n&&(n=oi.empty()),n.set(s.field,r))}return n||null}function Vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zs(t,e,((t,e)=>No(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends Oo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bo extends Oo{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $o(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function jo(t,e,n){const s=new Map;Ps(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Eo(o,a,n[r]))}return s}function Ko(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,wo(t,i,e))}return s}class Go extends Oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zo extends Oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Qo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Uo(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Po(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Po(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ao();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Mo(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(er.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),lo())}isEqual(t){return this.batchId===t.batchId&&Zs(this.mutations,t.mutations,((t,e)=>Vo(t,e)))&&Zs(this.baseMutations,t.baseMutations,((t,e)=>Vo(t,e)))}}class Ho{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ps(t.mutations.length===n.length);let s=co;const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new Ho(t,e,n,s)}}
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
 */var Jo,Yo;function Zo(t){switch(t){default:return Us();case Vs.CANCELLED:case Vs.UNKNOWN:case Vs.DEADLINE_EXCEEDED:case Vs.RESOURCE_EXHAUSTED:case Vs.INTERNAL:case Vs.UNAVAILABLE:case Vs.UNAUTHENTICATED:return!1;case Vs.INVALID_ARGUMENT:case Vs.NOT_FOUND:case Vs.ALREADY_EXISTS:case Vs.PERMISSION_DENIED:case Vs.FAILED_PRECONDITION:case Vs.ABORTED:case Vs.OUT_OF_RANGE:case Vs.UNIMPLEMENTED:case Vs.DATA_LOSS:return!0}}function ta(t){if(void 0===t)return Ls("GRPC error has no .code"),Vs.UNKNOWN;switch(t){case Jo.OK:return Vs.OK;case Jo.CANCELLED:return Vs.CANCELLED;case Jo.UNKNOWN:return Vs.UNKNOWN;case Jo.DEADLINE_EXCEEDED:return Vs.DEADLINE_EXCEEDED;case Jo.RESOURCE_EXHAUSTED:return Vs.RESOURCE_EXHAUSTED;case Jo.INTERNAL:return Vs.INTERNAL;case Jo.UNAVAILABLE:return Vs.UNAVAILABLE;case Jo.UNAUTHENTICATED:return Vs.UNAUTHENTICATED;case Jo.INVALID_ARGUMENT:return Vs.INVALID_ARGUMENT;case Jo.NOT_FOUND:return Vs.NOT_FOUND;case Jo.ALREADY_EXISTS:return Vs.ALREADY_EXISTS;case Jo.PERMISSION_DENIED:return Vs.PERMISSION_DENIED;case Jo.FAILED_PRECONDITION:return Vs.FAILED_PRECONDITION;case Jo.ABORTED:return Vs.ABORTED;case Jo.OUT_OF_RANGE:return Vs.OUT_OF_RANGE;case Jo.UNIMPLEMENTED:return Vs.UNIMPLEMENTED;case Jo.DATA_LOSS:return Vs.DATA_LOSS;default:return Us()}}(Yo=Jo||(Jo={}))[Yo.OK=0]="OK",Yo[Yo.CANCELLED=1]="CANCELLED",Yo[Yo.UNKNOWN=2]="UNKNOWN",Yo[Yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yo[Yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yo[Yo.NOT_FOUND=5]="NOT_FOUND",Yo[Yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yo[Yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yo[Yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yo[Yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yo[Yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yo[Yo.ABORTED=10]="ABORTED",Yo[Yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yo[Yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yo[Yo.INTERNAL=13]="INTERNAL",Yo[Yo.UNAVAILABLE=14]="UNAVAILABLE",Yo[Yo.DATA_LOSS=15]="DATA_LOSS";
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
 */class sa{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,ra.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new sa(er.min(),s,po(),no(),lo())}}class ra{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ra(n,e,lo(),lo(),lo())}}
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
 */class ia{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class oa{constructor(t,e){this.targetId=t,this.Et=e}}class aa{constructor(t,e,n=Or.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ua{constructor(){this.At=0,this.Rt=la(),this.vt=Or.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=lo(),e=lo(),n=lo();return this.Rt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Us()}})),new ra(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=la()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ca{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=no(),this.qt=ha(),this.Ut=new Nr(Ys)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Us()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Mi(i))if(0===s){const t=new or(i.path);this.Qt(n,t,ui.newNoDocument(t,er.min()))}else Ps(1===s);else{const r=this.Zt(n);r!==s&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=ea.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const r=this.Yt(s);if(r){if(n.current&&Mi(r.target)){const e=new or(r.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,ui.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=lo();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new sa(t,e,this.Ut,this.Lt,n);return this.Lt=no(),this.qt=ha(),this.Ut=new Nr(Ys),s}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const s=this.jt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new ua,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Nr(Ys),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||xs("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new ua),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function ha(){return new Sr(or.comparator)}function la(){return new Sr(or.comparator)}
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
 */const da=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),pa=(()=>{const t={and:"AND",or:"OR"};return t})();class ga{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ya(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function va(t,e){return ma(t,e.toTimestamp())}function wa(t){return Ps(!!t),er.fromTimestamp(function(t){const e=Ur(t);return new tr(e.seconds,e.nanos)}(t))}function Ea(t,e){return function(t){return new sr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ta(t){const e=sr.fromString(t);return Ps(Ka(e)),e}function _a(t,e){return Ea(t.databaseId,e.path)}function ba(t,e){const n=Ta(e);if(n.get(1)!==t.databaseId.projectId)throw new qs(Vs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new qs(Vs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new or(Sa(n))}function Ia(t,e){return Ea(t.databaseId,e)}function Ca(t){const e=Ta(t);return 4===e.length?sr.emptyPath():Sa(e)}function Aa(t){return new sr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sa(t){return Ps(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ka(t,e,n){return{name:_a(t,e),fields:n.value.mapValue.fields}}function Da(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Us()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(Ps(void 0===e||"string"==typeof e),Or.fromBase64String(e||"")):(Ps(void 0===e||e instanceof Uint8Array),Or.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vs.UNKNOWN:ta(t.code);return new qs(e,t.message||"")}(o);n=new aa(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ba(t,s.document.name),i=wa(s.document.updateTime),o=s.document.createTime?wa(s.document.createTime):er.min(),a=new oi({mapValue:{fields:s.document.fields}}),u=ui.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new ia(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ba(t,s.document),i=s.readTime?wa(s.readTime):er.min(),o=ui.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ia([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ba(t,s.document),i=s.removedTargetIds||[];n=new ia([],i,r,null)}else{if(!("filter"in e))return Us();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Xo(s),i=t.targetId;n=new oa(i,r)}}return n}function Na(t,e){let n;if(e instanceof qo)n={update:ka(t,e.key,e.value)};else if(e instanceof Go)n={delete:_a(t,e.key)};else if(e instanceof Bo)n={update:ka(t,e.key,e.data),updateMask:ja(e.fieldMask)};else{if(!(e instanceof zo))return Us();n={verify:_a(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _o)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Co)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof So)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Us()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:va(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Us()}(t,e.precondition)),n}function Ra(t,e){return t&&t.length>0?(Ps(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wa(t.updateTime):wa(e);return n.isEqual(er.min())&&(n=wa(e)),new Ro(n,t.transformResults||[])}(t,e)))):[]}function xa(t,e){return{documents:[Ia(t,e.path)]}}function La(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ia(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ia(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0!==t.length)return $a(mi.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qa(t.field),direction:Pa(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.useProto3Json||vr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Oa(t){let e=Ca(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ps(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Ua(t);return e instanceof mi&&vi(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new di(Ba(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vr(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new ci(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new ci(n,e)}(n.endAt)),Pi(e,r,o,i,a,"F",u,c)}function Ma(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Us()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ua(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ba(t.unaryFilter.field);return gi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ba(t.unaryFilter.field);return gi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ba(t.unaryFilter.field);return gi.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ba(t.unaryFilter.field);return gi.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Us()}}(t):void 0!==t.fieldFilter?function(t){return gi.create(Ba(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Us()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return mi.create(t.compositeFilter.filters.map((t=>Ua(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Us()}}(t.compositeFilter.op))}(t):Us()}function Pa(t){return da[t]}function Fa(t){return fa[t]}function Va(t){return pa[t]}function qa(t){return{fieldPath:t.canonicalString()}}function Ba(t){return ir.fromServerFormat(t.fieldPath)}function $a(t){return t instanceof gi?function(t){if("=="===t.op){if(ni(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NAN"}};if(ei(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ni(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NAN"}};if(ei(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(t.field),op:Fa(t.op),value:t.value}}}(t):t instanceof mi?function(t){const e=t.getFilters().map((t=>$a(t)));return 1===e.length?e[0]:{compositeFilter:{op:Va(t.op),filters:e}}}(t):Us()}function ja(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ka(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Ga{constructor(t,e,n,s,r=er.min(),i=er.min(),o=Or.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ga(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ga(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class za{constructor(t){this.se=t}}function Qa(t){const e=Oa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zi(e,e.limit,"L"):e}
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
 */class Ha{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Pr(t.integerValue));else if("doubleValue"in t){const n=Pr(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),wr(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Fr(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?ii(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Us()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const s of Object.keys(n))this.fe(s,e),this.ue(n[s],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const s of n)this.ue(s,e)}_e(t,e){this.ae(e,37),or.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Ha.pe=new Ha;
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
class Wa{constructor(){this.He=new Xa}addToCollectionParentIndex(t,e){return this.He.add(e),gr.resolve()}getCollectionParents(t,e){return gr.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return gr.resolve()}deleteFieldIndex(t,e){return gr.resolve()}getDocumentsMatchingTarget(t,e){return gr.resolve(null)}getIndexType(t,e){return gr.resolve(0)}getFieldIndexes(t,e){return gr.resolve([])}getNextCollectionGroupToUpdate(t){return gr.resolve(null)}getMinOffset(t,e){return gr.resolve(hr.min())}getMinOffsetFromCollectionGroup(t,e){return gr.resolve(hr.min())}updateCollectionGroup(t,e,n){return gr.resolve()}updateIndexEntries(t,e){return gr.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Nr(sr.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Nr(sr.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ja{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ja(t,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ja.DEFAULT_COLLECTION_PERCENTILE=10,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ja.DEFAULT=new Ja(41943040,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ja.DISABLED=new Ja(-1,0,0);
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
class Ya{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Ya(0)}static bn(){return new Ya(-1)}}
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
class Za{constructor(){this.changes=new to((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ui.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class eu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Po(n.mutation,t,xr.empty(),tr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,lo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=lo()){const s=oo();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ro();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=oo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,lo())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=no();const i=uo(),o=uo();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Bo)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Po(o.mutation,e,o.mutation.getFieldMask(),tr.now())):i.set(e.key,xr.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new tu(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=uo();let s=new Sr(((t,e)=>t-e)),r=lo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||xr.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||lo()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=ao();u.forEach((t=>{if(!r.has(t)){const s=Mo(e.get(t),n.get(t));null!==s&&c.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,c))}return gr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$i(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):gr.resolve(oo());let o=-1,a=r;return i.next((e=>gr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?gr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,lo()))).next((t=>({batchId:o,changes:io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new or(e)).next((t=>{let e=ro();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=ro();return this.indexManager.getCollectionParents(t,s).next((i=>gr.forEach(i,(i=>{const o=function(t,e){return new Ui(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,ui.newInvalidDocument(s)))}));let n=ro();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&Po(i.mutation,r,xr.empty(),tr.now()),Xi(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class nu{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return gr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:wa(n.createTime)}),gr.resolve()}getNamedQuery(t,e){return gr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Qa(t.bundledQuery),readTime:wa(t.readTime)}}(e)),gr.resolve()}}
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
 */class su{constructor(){this.overlays=new Sr(or.comparator),this.ts=new Map}getOverlay(t,e){return gr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oo();return gr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.re(t,e,s)})),gr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ts.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),gr.resolve()}getOverlaysForCollection(t,e,n){const s=oo(),r=e.length+1,i=new or(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return gr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Sr(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=oo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=oo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return gr.resolve(o)}re(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ts.get(s.largestBatchId).delete(n.key);this.ts.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wo(e,n));let r=this.ts.get(e);void 0===r&&(r=lo(),this.ts.set(e,r)),this.ts.set(e,r.add(n.key))}}
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
 */class ru{constructor(){this.es=new Nr(iu.ns),this.ss=new Nr(iu.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new iu(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new iu(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new or(new sr([])),n=new iu(e,t),s=new iu(e,t+1),r=[];return this.ss.forEachInRange([n,s],(t=>{this.us(t),r.push(t.key)})),r}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new or(new sr([])),n=new iu(e,t),s=new iu(e,t+1);let r=lo();return this.ss.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new iu(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class iu{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return or.comparator(t.key,e.key)||Ys(t.ds,e.ds)}static rs(t,e){return Ys(t.ds,e.ds)||or.comparator(t.key,e.key)}}
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
 */class ou{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Nr(iu.ns)}checkEmpty(t){return gr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Qo(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this._s=this._s.add(new iu(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gr.resolve(i)}lookupMutationBatch(t,e){return gr.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ys(n),r=s<0?0:s;return gr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return gr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new iu(e,0),s=new iu(e,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,s],(t=>{const e=this.gs(t.ds);r.push(e)})),gr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Nr(Ys);return e.forEach((t=>{const e=new iu(t,0),s=new iu(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,s],(t=>{n=n.add(t.ds)}))})),gr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;or.isDocumentKey(r)||(r=r.child(""));const i=new iu(new or(r),0);let o=new Nr(Ys);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ds)),!0)}),i),gr.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ps(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return gr.forEach(e.mutations,(s=>{const r=new iu(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new iu(e,0),s=this._s.firstAfterOrEqual(n);return gr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,gr.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class au{constructor(t){this.Ts=t,this.docs=new Sr(or.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gr.resolve(n?n.document.mutableCopy():ui.newInvalidDocument(e))}getEntries(t,e){let n=no();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ui.newInvalidDocument(t))})),gr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=no();const i=e.path,o=new or(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||lr(cr(o),n)<=0||(s.has(o.key)||Xi(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return gr.resolve(r)}getAllFromCollectionGroup(t,e,n,s){Us()}Es(t,e){return gr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new uu(this)}getSize(t){return gr.resolve(this.size)}}class uu extends Za{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Jn.addEntry(t,s)):this.Jn.removeEntry(n)})),gr.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
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
 */class cu{constructor(t){this.persistence=t,this.As=new to((t=>Li(t)),Oi),this.lastRemoteSnapshotVersion=er.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ru,this.targetCount=0,this.bs=Ya.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),gr.resolve()}getLastRemoteSnapshotVersion(t){return gr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gr.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),gr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),gr.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Ya(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,gr.resolve()}updateTargetData(t,e){return this.Sn(e),gr.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,gr.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.As.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),gr.waitFor(r).next((()=>s))}getTargetCount(t){return gr.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return gr.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),gr.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),gr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),gr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return gr.resolve(n)}containsKey(t,e){return gr.resolve(this.vs.containsKey(e))}}
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
 */class hu{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new yr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new cu(this),this.indexManager=new Wa,this.remoteDocumentCache=function(t){return new au(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new za(e),this.xs=new nu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new su,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new ou(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){xs("MemoryPersistence","Starting transaction:",t);const s=new lu(this.Vs.next());return this.referenceDelegate.Ns(),n(s).next((t=>this.referenceDelegate.ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return gr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class lu extends fr{constructor(t){super(),this.currentSequenceNumber=t}}class du{constructor(t){this.persistence=t,this.$s=new ru,this.Ms=null}static Fs(t){return new du(t)}get Bs(){if(this.Ms)return this.Ms;throw Us()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),gr.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),gr.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),gr.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gr.forEach(this.Bs,(n=>{const s=or.fromPath(n);return this.Ls(t,s).next((t=>{t||e.removeEntry(s,er.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return gr.or([()=>gr.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
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
class fu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=s}static Di(t,e){let n=lo(),s=lo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new fu(t,e.fromCache,n,s)}}
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
 */class pu{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ni(t,e).next((r=>r||this.ki(t,e,s,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Vi(e))return gr.resolve(null);let n=Ki(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=zi(e,null,"F"),n=Ki(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=lo(...s);return this.xi.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.$i(e,s);return this.Mi(e,i,r,n.readTime)?this.Ni(t,zi(e,null,"F")):this.Fi(t,i,e,n)}))))})))))}ki(t,e,n,s){return Vi(e)||s.isEqual(er.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((r=>{const i=this.$i(e,r);return this.Mi(e,i,n,s)?this.Oi(t,e):(Rs()<=o["in"].DEBUG&&xs("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wi(e)),this.Fi(t,i,e,ur(s,-1)))}))}$i(t,e){let n=new Nr(Yi(t));return e.forEach(((e,s)=>{Xi(t,s)&&(n=n.add(s))})),n}Mi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(t,e){return Rs()<=o["in"].DEBUG&&xs("QueryEngine","Using full collection scan to execute query:",Wi(e)),this.xi.getDocumentsMatchingQuery(t,e,hr.min())}Fi(t,e,n,s){return this.xi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class gu{constructor(t,e,n,s){this.persistence=t,this.Bi=e,this.serializer=s,this.Li=new Sr(Ys),this.qi=new to((t=>Li(t)),Oi),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eu(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function mu(t,e,n,s){return new gu(t,e,n,s)}async function yu(t,e){const n=Fs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=lo();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function vu(t,e){const n=Fs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=gr.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ps(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=lo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function wu(t){const e=Fs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function Eu(t,e){const n=Fs(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];e.targetChanges.forEach(((i,a)=>{const u=r.get(a);if(!u)return;o.push(n.Ds.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,i.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Or.EMPTY_BYTE_STRING,er.min()).withLastLimboFreeSnapshotVersion(er.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,s)),r=r.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,i)&&o.push(n.Ds.updateTargetData(t,c))}));let a=no(),u=lo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Tu(t,i,e.documentUpdates).next((t=>{a=t.zi,u=t.ji}))),!s.isEqual(er.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return gr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Li=r,t)))}function Tu(t,e,n){let s=lo(),r=lo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=no();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(er.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):xs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{zi:s,ji:r}}))}function _u(t,e){const n=Fs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bu(t,e){const n=Fs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ds.getTargetData(t,e).next((r=>r?(s=r,gr.resolve(s)):n.Ds.allocateTargetId(t).next((r=>(s=new Ga(e,r,0,t.currentSequenceNumber),n.Ds.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Li.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Iu(t,e,n){const s=Fs(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!mr(t))throw t;xs("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Cu(t,e,n){const s=Fs(t);let r=er.min(),i=lo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Fs(t),r=s.qi.get(n);return void 0!==r?gr.resolve(s.Li.get(r)):s.Ds.getTargetData(e,n)}(s,t,Ki(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Bi.getDocumentsMatchingQuery(t,e,n?r:er.min(),n?i:lo()))).next((t=>(Au(s,Ji(e),t),{documents:t,Wi:i})))))}function Au(t,e,n){let s=t.Ui.get(e)||er.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ui.set(e,s)}class Su{constructor(){this.activeTargetIds=po()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ku{constructor(){this.Br=new Su,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Su,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Nu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){xs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){xs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Ru=null;function xu(){return null===Ru?Ru=268435456+Math.round(2147483648*Math.random()):Ru++,"0x"+Ru.toString(16)
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
 */const Mu="WebChannelConnection";class Uu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,s,r){const i=xu(),o=this.ao(t,e);xs("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={};return this.ho(a,s,r),this.lo(t,o,a,n).then((e=>(xs("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw Os("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,s,r,i){return this.co(t,e,n,s,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Lu[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){const r=xu();return new Promise(((i,o)=>{const a=new As;a.setWithCredentials(!0),a.listenOnce(Ts.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Es.NO_ERROR:const e=a.getResponseJson();xs(Mu,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),i(e);break;case Es.TIMEOUT:xs(Mu,`RPC '${t}' ${r} timed out`),o(new qs(Vs.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const n=a.getStatus();if(xs(Mu,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vs).indexOf(e)>=0?e:Vs.UNKNOWN}(e.status);o(new qs(t,e.message))}else o(new qs(Vs.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new qs(Vs.UNAVAILABLE,"Connection failed."));break;default:Us()}}finally{xs(Mu,`RPC '${t}' ${r} completed.`)}}));const u=JSON.stringify(s);xs(Mu,`RPC '${t}' ${r} sending request:`,s),a.send(e,"POST",u,n,15)}))}wo(t,e,n){const s=xu(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=vs(),o=ws(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Is({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=r.join("");xs(Mu,`Creating RPC '${t}' stream ${s}: ${u}`,a);const c=i.createWebChannel(u,a);let h=!1,l=!1;const d=new Ou({Wr:e=>{l?xs(Mu,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(h||(xs(Mu,`Opening RPC '${t}' stream ${s} transport.`),c.open(),h=!0),xs(Mu,`RPC '${t}' stream ${s} sending:`,e),c.send(e))},Hr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Cs.EventType.OPEN,(()=>{l||xs(Mu,`RPC '${t}' stream ${s} transport opened.`)})),f(c,Cs.EventType.CLOSE,(()=>{l||(l=!0,xs(Mu,`RPC '${t}' stream ${s} transport closed`),d.so())})),f(c,Cs.EventType.ERROR,(e=>{l||(l=!0,Os(Mu,`RPC '${t}' stream ${s} transport errored:`,e),d.so(new qs(Vs.UNAVAILABLE,"The operation could not be completed")))})),f(c,Cs.EventType.MESSAGE,(e=>{var n;if(!l){const r=e.data[0];Ps(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){xs(Mu,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Jo[t];if(void 0!==e)return ta(e)}(e),r=o.message;void 0===n&&(n=Vs.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),l=!0,d.so(new qs(n,r)),c.close()}else xs(Mu,`RPC '${t}' stream ${s} received:`,r),d.io(r)}})),f(o,_s.STAT_EVENT,(e=>{e.stat===bs.PROXY?xs(Mu,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===bs.NOPROXY&&xs(Mu,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
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
 */function Pu(){return"undefined"!=typeof document?document:null}
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
 */function Fu(t){return new ga(t,!0)}
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
 */class Vu{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&xs("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class qu{constructor(t,e,n,s,r,i,o,a){this.Ws=t,this.bo=n,this.Po=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Vu(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Vs.RESOURCE_EXHAUSTED?(Ls(e.toString()),Ls("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Vs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new qs(Vs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return xs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(xs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bu extends qu{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=Da(this.serializer,t),n=function(t){if(!("targetChange"in t))return er.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?er.min():e.readTime?wa(e.readTime):er.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Aa(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;return n=Mi(s)?{documents:xa(t,s)}:{query:La(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ya(t,e.resumeToken):e.snapshotVersion.compareTo(er.min())>0&&(n.readTime=ma(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=Ma(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Aa(this.serializer),e.removeTarget=t,this.Fo(e)}}class $u extends qu{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Ps(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=Ra(t.writeResults,t.commitTime),n=wa(t.commitTime);return this.listener.Zo(n,e)}return Ps(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Aa(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Na(this.serializer,t)))};this.Fo(e)}}
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
 */class ju extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new qs(Vs.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.co(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qs(Vs.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.fo(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qs(Vs.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class Ku{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ls(e),this.ru=!1):xs("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
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
 */class Gu{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((t=>{n.enqueueAndForget((async()=>{tc(this)&&(xs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Fs(t);e.du.add(4),await Qu(e),e.mu.set("Unknown"),e.du.delete(4),await zu(e)}(this))}))})),this.mu=new Ku(n,s)}}async function zu(t){if(tc(t))for(const e of t.wu)await e(!0)}async function Qu(t){for(const e of t.wu)await e(!1)}function Hu(t,e){const n=Fs(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Zu(n)?Yu(n):vc(n).No()&&Xu(n,e))}function Wu(t,e){const n=Fs(t),s=vc(n);n.fu.delete(e),s.No()&&Ju(n,e),0===n.fu.size&&(s.No()?s.$o():tc(n)&&n.mu.set("Unknown"))}function Xu(t,e){t.gu.Ot(e.targetId),vc(t).jo(e)}function Ju(t,e){t.gu.Ot(e),vc(t).Wo(e)}function Yu(t){t.gu=new ca({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),vc(t).start(),t.mu.ou()}function Zu(t){return tc(t)&&!vc(t).xo()&&t.fu.size>0}function tc(t){return 0===Fs(t).du.size}function ec(t){t.gu=void 0}async function nc(t){t.fu.forEach(((e,n)=>{Xu(t,e)}))}async function sc(t,e){ec(t),Zu(t)?(t.mu.au(e),Yu(t)):t.mu.set("Unknown")}async function rc(t,e,n){if(t.mu.set("Online"),e instanceof aa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.fu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.fu.delete(s),t.gu.removeTarget(s))}(t,e)}catch(n){xs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ic(t,n)}else if(e instanceof ia?t.gu.Kt(e):e instanceof oa?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(er.min()))try{const e=await wu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.fu.get(s);r&&t.fu.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Or.EMPTY_BYTE_STRING,n.snapshotVersion)),Ju(t,e);const s=new Ga(n.target,e,1,n.sequenceNumber);Xu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){xs("RemoteStore","Failed to raise snapshot:",e),await ic(t,e)}}async function ic(t,e,n){if(!mr(e))throw e;t.du.add(1),await Qu(t),t.mu.set("Offline"),n||(n=()=>wu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{xs("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await zu(t)}))}function oc(t,e){return e().catch((n=>ic(t,n,e)))}async function ac(t){const e=Fs(t),n=wc(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;uc(e);)try{const t=await _u(e.localStore,s);if(null===t){0===e.lu.length&&n.$o();break}s=t.batchId,cc(e,t)}catch(t){await ic(e,t)}hc(e)&&lc(e)}function uc(t){return tc(t)&&t.lu.length<10}function cc(t,e){t.lu.push(e);const n=wc(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function hc(t){return tc(t)&&!wc(t).xo()&&t.lu.length>0}function lc(t){wc(t).start()}async function dc(t){wc(t).tu()}async function fc(t){const e=wc(t);for(const n of t.lu)e.Yo(n.mutations)}async function pc(t,e,n){const s=t.lu.shift(),r=Ho.from(s,e,n);await oc(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ac(t)}async function gc(t,e){e&&wc(t).Jo&&await async function(t,e){if(n=e.code,Zo(n)&&n!==Vs.ABORTED){const n=t.lu.shift();wc(t).Oo(),await oc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ac(t)}var n}(t,e),hc(t)&&lc(t)}async function mc(t,e){const n=Fs(t);n.asyncQueue.verifyOperationInProgress(),xs("RemoteStore","RemoteStore received new credentials");const s=tc(n);n.du.add(3),await Qu(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await zu(n)}async function yc(t,e){const n=Fs(t);e?(n.du.delete(2),await zu(n)):e||(n.du.add(2),await Qu(n),n.mu.set("Unknown"))}function vc(t){return t.yu||(t.yu=function(t,e,n){const s=Fs(t);return s.nu(),new Bu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Jr:nc.bind(null,t),Zr:sc.bind(null,t),zo:rc.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Zu(t)?Yu(t):t.mu.set("Unknown")):(await t.yu.stop(),ec(t))}))),t.yu}function wc(t){return t.pu||(t.pu=function(t,e,n){const s=Fs(t);return s.nu(),new $u(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Jr:dc.bind(null,t),Zr:gc.bind(null,t),Xo:fc.bind(null,t),Zo:pc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await ac(t)):(await t.pu.stop(),t.lu.length>0&&(xs("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
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
 */}class Ec{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Bs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new Ec(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qs(Vs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(t,e){if(Ls("AsyncQueue",`${e}: ${t}`),mr(t))return new qs(Vs.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class _c{constructor(t){this.comparator=t?(e,n)=>t(e,n)||or.comparator(e.key,n.key):(t,e)=>or.comparator(t.key,e.key),this.keyedMap=ro(),this.sortedSet=new Sr(this.comparator)}static emptySet(t){return new _c(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _c))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _c;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class bc{constructor(){this.Iu=new Sr(or.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Us():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ic{constructor(t,e,n,s,r,i,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Ic(t,e,_c.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class Cc{constructor(){this.Eu=void 0,this.listeners=[]}}class Ac{constructor(){this.queries=new to((t=>Hi(t)),Qi),this.onlineState="Unknown",this.Au=new Set}}async function Sc(t,e){const n=Fs(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Cc),r)try{i.Eu=await n.onListen(s)}catch(t){const n=Tc(t,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Rc(n)}async function kc(t,e){const n=Fs(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Dc(t,e){const n=Fs(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(r)&&(s=!0);e.Eu=r}}s&&Rc(n)}function Nc(t,e,n){const s=Fs(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Rc(t){t.Au.forEach((t=>{t.next()}))}class xc{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ic(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=Ic.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
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
class Lc{constructor(t){this.key=t}}class Oc{constructor(t){this.key=t}}class Mc{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=lo(),this.mutatedKeys=lo(),this.Ku=Yi(t),this.Gu=new _c(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new bc,s=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),h=Xi(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Wu(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ku(h,a)>0||u&&this.Ku(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:i,ju:n,Mi:o,mutatedKeys:r}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Us()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const i=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new Ic(this.query,t.Gu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:i}:{Yu:i}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new bc,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=lo(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Oc(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new Lc(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=lo();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return Ic.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Uc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pc{constructor(t){this.key=t,this.ec=!1}}class Fc{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new to((t=>Hi(t)),Qi),this.ic=new Map,this.rc=new Set,this.oc=new Sr(or.comparator),this.uc=new Map,this.cc=new ru,this.ac={},this.hc=new Map,this.lc=Ya.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Vc(t,e){const n=rh(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const t=await bu(n.localStore,Ki(e));n.isPrimaryClient&&Hu(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await qc(n,e,s,"current"===i,t.resumeToken)}return r}async function qc(t,e,n,s,r){t.dc=(e,n,s)=>async function(t,e,n,s){let r=e.view.zu(n);r.Mi&&(r=await Cu(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Yc(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const i=await Cu(t.localStore,e,!0),o=new Mc(e,i.Wi),a=o.zu(i.documents),u=ra.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),c=o.applyChanges(a,t.isPrimaryClient,u);Yc(t,n,c.Yu);const h=new Uc(e,n,o);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Bc(t,e){const n=Fs(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter((t=>!Qi(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Iu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Wu(n.remoteStore,s.targetId),Xc(n,s.targetId)})).catch(pr)):(Xc(n,s.targetId),await Iu(n.localStore,s.targetId,!0))}async function $c(t,e,n){const s=ih(t);try{const t=await function(t,e){const n=Fs(t),s=tr.now(),r=e.reduce(((t,e)=>t.add(e.key)),lo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=no(),u=lo();return n.Ki.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Fo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Bo(t.key,e,ai(e.value.mapValue),xo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:io(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new Sr(Ys)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await eh(s,t.changes),await ac(s.remoteStore)}catch(t){const e=Tc(t,"Failed to persist write");n.reject(e)}}async function jc(t,e){const n=Fs(t);try{const t=await Eu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(Ps(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?Ps(s.ec):t.removedDocuments.size>0&&(Ps(s.ec),s.ec=!1))})),await eh(n,t,e)}catch(t){await pr(t)}}function Kc(t,e,n){const s=Fs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const r=s.view.Ru(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Fs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Ru(e)&&(s=!0)})),s&&Rc(n)}(s.eventManager,e),t.length&&s.nc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Gc(t,e,n){const s=Fs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let t=new Sr(or.comparator);t=t.insert(i,ui.newNoDocument(i,er.min()));const n=lo().add(i),r=new sa(er.min(),new Map,new Nr(Ys),t,n);await jc(s,r),s.oc=s.oc.remove(i),s.uc.delete(e),th(s)}else await Iu(s.localStore,e,!1).then((()=>Xc(s,e,n))).catch(pr)}async function zc(t,e){const n=Fs(t),s=e.batch.batchId;try{const t=await vu(n.localStore,e);Wc(n,s,null),Hc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await eh(n,t)}catch(t){await pr(t)}}async function Qc(t,e,n){const s=Fs(t);try{const t=await function(t,e){const n=Fs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ps(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Wc(s,e,n),Hc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await eh(s,t)}catch(n){await pr(n)}}function Hc(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Wc(t,e,n){const s=Fs(t);let r=s.ac[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||Jc(t,e)}))}function Jc(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Wu(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),th(t))}function Yc(t,e,n){for(const s of n)s instanceof Lc?(t.cc.addReference(s.key,e),Zc(t,s)):s instanceof Oc?(xs("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Jc(t,s.key)):Us()}function Zc(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(xs("SyncEngine","New document in limbo: "+n),t.rc.add(s),th(t))}function th(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new or(sr.fromString(e)),s=t.lc.next();t.uc.set(s,new Pc(n)),t.oc=t.oc.insert(n,s),Hu(t.remoteStore,new Ga(Ki(Fi(n.path)),s,2,yr.ct))}}async function eh(t,e,n){const s=Fs(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=fu.Di(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.nc.zo(r),await async function(t,e){const n=Fs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gr.forEach(e,(e=>gr.forEach(e.Vi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>gr.forEach(e.Si,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!mr(t))throw t;xs("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Li.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Li=n.Li.insert(t,r)}}}(s.localStore,i))}async function nh(t,e){const n=Fs(t);if(!n.currentUser.isEqual(e)){xs("SyncEngine","User change. New user:",e.toKey());const t=await yu(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new qs(Vs.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await eh(n,t.Qi)}}function sh(t,e){const n=Fs(t),s=n.uc.get(e);if(s&&s.ec)return lo().add(s.key);{let t=lo();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function rh(t){const e=Fs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gc.bind(null,e),e.nc.zo=Dc.bind(null,e.eventManager),e.nc.wc=Nc.bind(null,e.eventManager),e}function ih(t){const e=Fs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qc.bind(null,e),e}class oh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return mu(this.persistence,new pu,t.initialUser,this.serializer)}createPersistence(t){return new hu(du.Fs,this.serializer)}createSharedClientState(t){return new ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ah{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Kc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nh.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ac}createDatastore(t){const e=Fu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Uu(s));var s;return function(t,e,n,s){return new ju(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Kc(this.syncEngine,t,0),i=Nu.D()?new Nu:new Du,new Gu(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Fc(t,e,n,s,r,i);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Fs(t);xs("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Qu(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
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
class uh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Ls("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class ch{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ks.UNAUTHENTICATED,this.clientId=Js.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{xs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(xs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qs(Vs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Tc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),xs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await yu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function lh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fh(t);xs("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>mc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mc(e.remoteStore,n))),t._onlineComponents=e}function dh(t){return"FirebaseError"===t.name?t.code===Vs.FAILED_PRECONDITION||t.code===Vs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function fh(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){xs("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dh(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new oh)}}else xs("FirestoreClient","Using default OfflineComponentProvider"),await hh(t,new oh);return t._offlineComponents}async function ph(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(xs("FirestoreClient","Using user provided OnlineComponentProvider"),await lh(t,t._uninitializedComponentsProvider._online)):(xs("FirestoreClient","Using default OnlineComponentProvider"),await lh(t,new ah))),t._onlineComponents}function gh(t){return ph(t).then((t=>t.syncEngine))}async function mh(t){const e=await ph(t),n=e.eventManager;return n.onListen=Vc.bind(null,e.syncEngine),n.onUnlisten=Bc.bind(null,e.syncEngine),n}function yh(t,e,n={}){const s=new Bs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new uh({next:i=>{e.enqueueAndForget((()=>kc(t,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new qs(Vs.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new qs(Vs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new xc(Fi(n.path),i,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await mh(t),t.asyncQueue,e,n,s))),s.promise}function vh(t,e,n={}){const s=new Bs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new uh({next:n=>{e.enqueueAndForget((()=>kc(t,o))),n.fromCache&&"server"===s.source?r.reject(new qs(Vs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new xc(n,i,{includeMetadataChanges:!0,xu:!0});return Sc(t,o)}(await mh(t),t.asyncQueue,e,n,s))),s.promise}
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
const wh=new Map;
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
 */function Eh(t,e,n){if(!n)throw new qs(Vs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Th(t,e,n,s){if(!0===e&&!0===s)throw new qs(Vs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _h(t){if(!or.isDocumentKey(t))throw new qs(Vs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bh(t){if(or.isDocumentKey(t))throw new qs(Vs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Us()}function Ch(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new qs(Vs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ih(t);throw new qs(Vs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Ah{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new qs(Vs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new qs(Vs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Th("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Sh{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qs(Vs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new qs(Vs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new js;switch(t.type){case"firstParty":return new Qs(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new qs(Vs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=wh.get(t);e&&(xs("ComponentProvider","Removing Datastore"),wh.delete(t),e.terminate())}(this),Promise.resolve()}}function kh(t,e,n,s={}){var r;const i=(t=Ch(t,Sh))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Os("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ks.MOCK_USER;else{e=(0,a.Sg)(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new qs(Vs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ks(i)}t._authCredentials=new Ks(new $s(e,n))}}
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
 */class Dh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dh(this.firestore,t,this._key)}}class Nh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Nh(this.firestore,t,this._query)}}class Rh extends Nh{constructor(t,e,n){super(t,e,Fi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dh(this.firestore,null,new or(t))}withConverter(t){return new Rh(this.firestore,t,this._path)}}function xh(t,e,...n){if(t=(0,a.m9)(t),Eh("collection","path",e),t instanceof Sh){const s=sr.fromString(e,...n);return bh(s),new Rh(t,null,s)}{if(!(t instanceof Dh||t instanceof Rh))throw new qs(Vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(sr.fromString(e,...n));return bh(s),new Rh(t.firestore,null,s)}}function Lh(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Js.A()),Eh("doc","path",e),t instanceof Sh){const s=sr.fromString(e,...n);return _h(s),new Dh(t,null,new or(s))}{if(!(t instanceof Dh||t instanceof Rh))throw new qs(Vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(sr.fromString(e,...n));return _h(s),new Dh(t.firestore,t instanceof Rh?t.converter:null,new or(s))}}
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
class Oh{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Vu(this,"async_queue_retry"),this.qc=()=>{const t=Pu();t&&xs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Pu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Pu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new Bs;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(_){if(!mr(_))throw _;xs("AsyncQueue","Operation failed with retryable error: "+_)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Ls("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const s=Ec.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(s),s}Uc(){this.Mc&&Us()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Mh extends Sh{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Oh,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fh(this),this._firestoreClient.terminate()}}function Uh(t,e){const n="object"==typeof t?t:(0,r.getApp)(),s="string"==typeof t?t:e||"(default)",i=(0,r._getProvider)(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=(0,a.P0)("firestore");t&&kh(i,...t)}return i}function Ph(t){return t._firestoreClient||Fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fh(t){var e,n,s;const r=t._freezeSettings(),i=function(t,e,n,s){return new $r(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new ch(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
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
class Vh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vh(Or.fromBase64String(t))}catch(t){throw new qs(Vs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Vh(Or.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class qh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new qs(Vs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ir(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Bh{constructor(t){this._methodName=t}}
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
 */class $h{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new qs(Vs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new qs(Vs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ys(this._lat,t._lat)||Ys(this._long,t._long)}}
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
 */const jh=/^__.*__$/;class Kh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Bo(t,this.data,this.fieldMask,e,this.fieldTransforms):new qo(t,this.data,e,this.fieldTransforms)}}class Gh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Bo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Us()}}class Qh{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Qh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.ea(t),s}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.Jc(),s}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return ul(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(zh(this.Yc)&&jh.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Hh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Fu(t)}ua(t,e,n,s=!1){return new Qh({Yc:t,methodName:e,oa:n,path:ir.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wh(t){const e=t._freezeSettings(),n=Fu(t._databaseId);return new Hh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xh(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);rl("Data must be an object, but it was:",o,s);const a=nl(s,o);let u,c;if(i.merge)u=new xr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=il(e,s,n);if(!o.contains(r))throw new qs(Vs.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);cl(t,r)||t.push(r)}u=new xr(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new Kh(new oi(a),u,c)}class Jh extends Bh{_toFieldTransform(t){if(2!==t.Yc)throw 1===t.Yc?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Jh}}function Yh(t,e,n,s){const r=t.ua(1,e,n);rl("Data must be an object, but it was:",r,s);const i=[],o=oi.empty();Cr(s,((t,s)=>{const u=al(e,t,n);s=(0,a.m9)(s);const c=r.na(u);if(s instanceof Jh)i.push(u);else{const t=el(s,c);null!=t&&(i.push(u),o.set(u,t))}}));const u=new xr(i);return new Gh(o,u,r.fieldTransforms)}function Zh(t,e,n,s,r,i){const o=t.ua(1,e,n),u=[il(e,s,n)],c=[r];if(i.length%2!=0)throw new qs(Vs.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<i.length;a+=2)u.push(il(e,i[a])),c.push(i[a+1]);const h=[],l=oi.empty();for(let f=u.length-1;f>=0;--f)if(!cl(h,u[f])){const t=u[f];let e=c[f];e=(0,a.m9)(e);const n=o.na(t);if(e instanceof Jh)h.push(t);else{const s=el(e,n);null!=s&&(h.push(t),l.set(t,s))}}const d=new xr(h);return new Gh(l,d,o.fieldTransforms)}function tl(t,e,n,s=!1){return el(n,t.ua(s?4:3,e))}function el(t,e){if(sl(t=(0,a.m9)(t)))return rl("Unsupported field value:",e,t),nl(t,e);if(t instanceof Bh)return function(t,e){if(!zh(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=el(r,e.sa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return yo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=tr.fromDate(t);return{timestampValue:ma(e.serializer,n)}}if(t instanceof tr){const n=new tr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ma(e.serializer,n)}}if(t instanceof $h)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Vh)return{bytesValue:ya(e.serializer,t._byteString)};if(t instanceof Dh){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${Ih(t)}`)}(t,e)}function nl(t,e){const n={};return Ar(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,((t,s)=>{const r=el(s,e.Xc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function sl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof tr||t instanceof $h||t instanceof Vh||t instanceof Dh||t instanceof Bh)}function rl(t,e,n){if(!sl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ih(n);throw"an object"===s?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function il(t,e,n){if((e=(0,a.m9)(e))instanceof qh)return e._internalPath;if("string"==typeof e)return al(t,e);throw ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const ol=new RegExp("[~\\*/\\[\\]]");function al(t,e,n){if(e.search(ol)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qh(...e.split("."))._internalPath}catch(s){throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ul(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new qs(Vs.INVALID_ARGUMENT,a+t+u)}function cl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class hl{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Dh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ll extends hl{data(){return super.data()}}function dl(t,e){return"string"==typeof e?al(t,e):e instanceof qh?e._internalPath:e._delegate._internalPath}
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
 */function fl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new qs(Vs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}class gl extends pl{}function ml(t,e,...n){let s=[];e instanceof pl&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof wl)).length,n=t.filter((t=>t instanceof yl)).length;if(e>1||e>0&&n>0)throw new qs(Vs.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(s);for(const r of s)t=r._apply(t);return t}class yl extends gl{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new yl(t,e,n)}_apply(t){const e=this._parse(t);return _l(t._query,e),new Nh(t.firestore,t.converter,Gi(t._query,e))}_parse(t){const e=Wh(t.firestore),n=function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new qs(Vs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Tl(o,i);const e=[];for(const n of o)e.push(El(s,t,n));a={arrayValue:{values:e}}}else a=El(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Tl(o,i),a=tl(n,e,o,"in"===i||"not-in"===i);return gi.create(r,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function vl(t,e,n){const s=e,r=dl("where",t);return yl._create(r,s,n)}class wl extends pl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wl(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:mi.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const r of s)_l(n,r),n=Gi(n,r)}(t._query,e),new Nh(t.firestore,t.converter,Gi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function El(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new qs(Vs.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$i(e)&&-1!==n.indexOf("/"))throw new qs(Vs.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(sr.fromString(n));if(!or.isDocumentKey(s))throw new qs(Vs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Yr(t,new or(s))}if(n instanceof Dh)return Yr(t,n._key);throw new qs(Vs.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ih(n)}.`)}function Tl(t,e){if(!Array.isArray(t)||0===t.length)throw new qs(Vs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _l(t,e){if(e.isInequality()){const n=Bi(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new qs(Vs.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const r=qi(t);null!==r&&bl(t,s,r)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new qs(Vs.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new qs(Vs.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function bl(t,e,n){if(!n.isEqual(e))throw new qs(Vs.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Il{convertValue(t,e="none"){switch(Gr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Us()}}convertObject(t,e){const n={};return Cr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new $h(Pr(t.latitude),Pr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=qr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Br(t));default:return null}}convertTimestamp(t){const e=Ur(t);return new tr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=sr.fromString(t);Ps(Ka(n));const s=new jr(n.get(1),n.get(3)),r=new or(n.popFirst(5));return s.isEqual(e)||Ls(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
 */function Cl(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
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
class Al{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sl extends hl{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new kl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class kl extends Sl{data(t={}){return super.data(t)}}class Dl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Al(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new kl(this._firestore,this._userDataWriter,n.key,n,new Al(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new qs(Vs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new kl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Al(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new kl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Al(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Nl(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Nl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Us()}}
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
function Rl(t){t=Ch(t,Dh);const e=Ch(t.firestore,Mh);return yh(Ph(e),t._key).then((n=>Fl(e,t,n)))}class xl extends Il{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dh(this.firestore,null,e)}}function Ll(t){t=Ch(t,Nh);const e=Ch(t.firestore,Mh),n=Ph(e),s=new xl(e);return fl(t._query),vh(n,t._query).then((n=>new Dl(e,s,t,n)))}function Ol(t,e,n){t=Ch(t,Dh);const s=Ch(t.firestore,Mh),r=Cl(t.converter,e,n);return Pl(s,[Xh(Wh(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,xo.none())])}function Ml(t,e,n,...s){t=Ch(t,Dh);const r=Ch(t.firestore,Mh),i=Wh(r);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof qh?Zh(i,"updateDoc",t._key,e,n,s):Yh(i,"updateDoc",t._key,e),Pl(r,[o.toMutation(t._key,xo.exists(!0))])}function Ul(t){return Pl(Ch(t.firestore,Mh),[new Go(t._key,xo.none())])}function Pl(t,e){return function(t,e){const n=new Bs;return t.asyncQueue.enqueueAndForget((async()=>$c(await gh(t),e,n))),n.promise}(Ph(t),e)}function Fl(t,e,n){const s=n.docs.get(e._key),r=new xl(t);return new Sl(t,r,e._key,s,new Al(n.hasPendingWrites,n.fromCache),e.converter)}
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
function Vl(){return new Jh("deleteField")}!function(t,e=!0){!function(t){Ds=t}(r.SDK_VERSION),(0,r._registerComponent)(new i.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Mh(new Gs(t.getProvider("auth-internal")),new Ws(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new qs(Vs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(t.options.projectId,e)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(Ss,"3.10.1",t),(0,r.registerVersion)(Ss,"3.10.1","esm2017")}()}}]);
//# sourceMappingURL=830.453c2380.js.map