(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[137],{373:function(e,t,i){var a,n;(function(o){a=[i(7387)],n=function(e){return function(){var t,i,a,n=0,o={error:"error",info:"info",success:"success",warning:"warning"},s={clear:g,remove:h,error:r,getContainer:l,info:c,options:{},subscribe:u,success:d,version:"2.1.4",warning:m};return s;function r(e,t,i){return w({type:o.error,iconClass:y().iconClasses.error,message:e,optionsOverride:i,title:t})}function l(i,a){return i||(i=y()),t=e("#"+i.containerId),t.length||a&&(t=v(i)),t}function c(e,t,i){return w({type:o.info,iconClass:y().iconClasses.info,message:e,optionsOverride:i,title:t})}function u(e){i=e}function d(e,t,i){return w({type:o.success,iconClass:y().iconClasses.success,message:e,optionsOverride:i,title:t})}function m(e,t,i){return w({type:o.warning,iconClass:y().iconClasses.warning,message:e,optionsOverride:i,title:t})}function g(e,i){var a=y();t||l(a),f(e,a,i)||p(a)}function h(i){var a=y();t||l(a),i&&0===e(":focus",i).length?b(i):t.children().length&&t.remove()}function p(i){for(var a=t.children(),n=a.length-1;n>=0;n--)f(e(a[n]),i)}function f(t,i,a){var n=!(!a||!a.force)&&a.force;return!(!t||!n&&0!==e(":focus",t).length)&&(t[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){b(t)}}),!0)}function v(i){return t=e("<div/>").attr("id",i.containerId).addClass(i.positionClass),t.appendTo(e(i.target)),t}function C(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function D(e){i&&i(e)}function w(i){var o=y(),s=i.iconClass||o.iconClass;if("undefined"!==typeof i.optionsOverride&&(o=e.extend(o,i.optionsOverride),s=i.optionsOverride.iconClass||s),!U(o,i)){n++,t=l(o,!0);var r=null,c=e("<div/>"),u=e("<div/>"),d=e("<div/>"),m=e("<div/>"),g=e(o.closeHtml),h={intervalId:null,hideEta:null,maxHideTime:null},p={toastId:n,state:"visible",startTime:new Date,options:o,map:i};return v(),k(),w(),D(p),o.debug&&console&&console.log(p),c}function f(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(){$(),I(),L(),T(),F(),V(),E(),C()}function C(){var e="";switch(i.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}c.attr("aria-live",e)}function w(){o.closeOnHover&&c.hover(x,S),!o.onclick&&o.tapToDismiss&&c.click(O),o.closeButton&&g&&g.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),o.onCloseClick&&o.onCloseClick(e),O(!0)})),o.onclick&&c.click((function(e){o.onclick(e),O()}))}function k(){c.hide(),c[o.showMethod]({duration:o.showDuration,easing:o.showEasing,complete:o.onShown}),o.timeOut>0&&(r=setTimeout(O,o.timeOut),h.maxHideTime=parseFloat(o.timeOut),h.hideEta=(new Date).getTime()+h.maxHideTime,o.progressBar&&(h.intervalId=setInterval(P,10)))}function $(){i.iconClass&&c.addClass(o.toastClass).addClass(s)}function E(){o.newestOnTop?t.prepend(c):t.append(c)}function I(){if(i.title){var e=i.title;o.escapeHtml&&(e=f(i.title)),u.append(e).addClass(o.titleClass),c.append(u)}}function L(){if(i.message){var e=i.message;o.escapeHtml&&(e=f(i.message)),d.append(e).addClass(o.messageClass),c.append(d)}}function T(){o.closeButton&&(g.addClass(o.closeClass).attr("role","button"),c.prepend(g))}function F(){o.progressBar&&(m.addClass(o.progressClass),c.prepend(m))}function V(){o.rtl&&c.addClass("rtl")}function U(e,t){if(e.preventDuplicates){if(t.message===a)return!0;a=t.message}return!1}function O(t){var i=t&&!1!==o.closeMethod?o.closeMethod:o.hideMethod,a=t&&!1!==o.closeDuration?o.closeDuration:o.hideDuration,n=t&&!1!==o.closeEasing?o.closeEasing:o.hideEasing;if(!e(":focus",c).length||t)return clearTimeout(h.intervalId),c[i]({duration:a,easing:n,complete:function(){b(c),clearTimeout(r),o.onHidden&&"hidden"!==p.state&&o.onHidden(),p.state="hidden",p.endTime=new Date,D(p)}})}function S(){(o.timeOut>0||o.extendedTimeOut>0)&&(r=setTimeout(O,o.extendedTimeOut),h.maxHideTime=parseFloat(o.extendedTimeOut),h.hideEta=(new Date).getTime()+h.maxHideTime)}function x(){clearTimeout(r),h.hideEta=0,c.stop(!0,!0)[o.showMethod]({duration:o.showDuration,easing:o.showEasing})}function P(){var e=(h.hideEta-(new Date).getTime())/h.maxHideTime*100;m.width(e+"%")}}function y(){return e.extend({},C(),s.options)}function b(e){t||(t=l()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),a=void 0))}}()}.apply(t,a),void 0===n||(e.exports=n)})(i.amdD)},8784:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return q}});var a=i(3396),n=i(7139),o=i(9242);const s={class:"btn-group btn-group-toggle","data-toggle":"buttons"},r=["id"],l=(0,a._)("span",null,"Зберегти",-1),c=[l],u=(0,a._)("span",null,"Зберегти",-1),d=[u];function m(e,t,i,l,u,m){const g=(0,a.up)("addFilmC"),h=(0,a.up)("card");return(0,a.wg)(),(0,a.j4)(h,{title:u.title,isLoading:m.isLoading},{tools:(0,a.w5)((()=>[(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.languages,(e=>((0,a.wg)(),(0,a.iD)("label",{key:e.id,class:(0,n.C_)(["btn btn-secondary",{active:e.checked}])},[(0,a._)("input",{type:"radio",name:"options",id:e.id,autocomplete:"off",onChange:t[0]||(t[0]=(...e)=>m.changeCheckbox&&m.changeCheckbox(...e))},null,40,r),(0,a.Uk)(" "+(0,n.zw)(e.name),1)],2)))),128))])])),body:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{language:"Ua",collectionRef:m.collection("Ua"),id:u.id,onIsLoading:m.changeLoadingUa,saveTriger:u.saveTriger,onErorr:m.changeErorrUa},null,8,["collectionRef","id","onIsLoading","saveTriger","onErorr"]),[[o.F8,"Ua"===m.currenLanguage]]),(0,a.wy)((0,a.Wm)(g,{language:"En",collectionRef:m.collection("En"),id:u.id,onIsLoading:m.changeLoadingEn,saveTriger:u.saveTriger,onErorr:m.changeErorrEn},null,8,["collectionRef","id","onIsLoading","saveTriger","onErorr"]),[[o.F8,"En"===m.currenLanguage]]),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>m.Save&&m.Save(...e)),class:"btn btn-xs btn-success col fileinput-button"},c)])),footer:(0,a.w5)((()=>[(0,a._)("span",{class:"btn btn-xs btn-success col fileinput-button",onClick:t[2]||(t[2]=(...e)=>m.Save&&m.Save(...e))},d)])),_:1},8,["title","isLoading"])}i(7658);var g=i(4219),h=i(4494),p=i(36),f=i(4592),v=i(5660),C=i(117);const D={key:0,class:"error-message"},w={key:1,class:"error-message"},y={class:"form-group mt-3 ml-1"},b=(0,a._)("p",null,[(0,a._)("strong",null,"Тип фільма")],-1),k={key:0,class:"error-message"};function $(e,t,i,s,r,l){const c=(0,a.up)("input-component"),u=(0,a.up)("textarea-component"),d=(0,a.up)("img-component"),m=(0,a.up)("imgs-component"),g=(0,a.up)("checkbox-component"),h=(0,a.up)("seo-component");return(0,a.wg)(),(0,a.iD)("form",{action:"",onSubmit:t[10]||(t[10]=(0,o.iM)(((...e)=>l.Save&&l.Save(...e)),["prevent"]))},[(0,a.Wm)(c,{label:"Назва фільма",id:"filmName",type:"text",placeholder:"Введіть назву фільма",modelValue:r.filmName,"onUpdate:modelValue":t[0]||(t[0]=e=>r.filmName=e),error:s.v$.filmName.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,a.Wm)(c,{class:"mt-3",label:"Дата виходу",id:"releaseDate",type:"date",placeholder:"Введіть дату виходу",modelValue:r.releaseDate,"onUpdate:modelValue":t[1]||(t[1]=e=>r.releaseDate=e),error:s.v$.releaseDate.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,a.Wm)(u,{class:"mt-3",label:"Опис",id:"filmDescription",type:"textarea",placeholder:"Введіть опис фільма",modelValue:r.filmDescription,"onUpdate:modelValue":t[2]||(t[2]=e=>r.filmDescription=e),error:s.v$.filmDescription.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,a.Wm)(d,{modelValue:r.mainPicture,"onUpdate:modelValue":t[3]||(t[3]=e=>r.mainPicture=e),class:(0,n.C_)([{"is-invalid":s.v$.mainPicture.$error},"mt-3"]),onDeleteMainPicture:l.delImage},null,8,["modelValue","class","onDeleteMainPicture"]),s.v$.mainPicture.$error?((0,a.wg)(),(0,a.iD)("p",D,"Виберіть картинку")):(0,a.kq)("",!0),(0,a.Wm)(m,{modelValue:r.gallary,"onUpdate:modelValue":t[4]||(t[4]=e=>r.gallary=e),class:(0,n.C_)([{"is-invalid":s.v$.gallary.$error},"mt-3"]),onNewImage:l.addImage,onDelImage:l.delImage,onChangeImage:l.changeImage},null,8,["modelValue","class","onNewImage","onDelImage","onChangeImage"]),s.v$.gallary.$error?((0,a.wg)(),(0,a.iD)("p",w,"Виберіть картинку")):(0,a.kq)("",!0),(0,a.Wm)(c,{class:"mt-3",label:"Силка на трейлер",id:"trailerLink",type:"text",placeholder:"Введіть силку на трейлер в youtube...",modelValue:r.trailerLink,"onUpdate:modelValue":t[5]||(t[5]=e=>r.trailerLink=e),error:s.v$.trailerLink.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,a._)("div",y,[b,(0,a._)("div",{class:(0,n.C_)(["row",{"is-invalid":s.v$.typeFilm.$error}])},[(0,a.Wm)(g,{modelValue:r.typeFilm["3D"],"onUpdate:modelValue":t[6]||(t[6]=e=>r.typeFilm["3D"]=e),id:"3D",label:"3D"},null,8,["modelValue"]),(0,a.Wm)(g,{modelValue:r.typeFilm["2D"],"onUpdate:modelValue":t[7]||(t[7]=e=>r.typeFilm["2D"]=e),id:"2D",label:"2D"},null,8,["modelValue"]),(0,a.Wm)(g,{modelValue:r.typeFilm.IMAX,"onUpdate:modelValue":t[8]||(t[8]=e=>r.typeFilm.IMAX=e),id:"IMAX",label:"IMAX"},null,8,["modelValue"])],2),s.v$.typeFilm.$error?((0,a.wg)(),(0,a.iD)("p",k,"Виберіть тип фільма")):(0,a.kq)("",!0)]),(0,a.Wm)(h,{modelValue:r.SEO,"onUpdate:modelValue":t[9]||(t[9]=e=>r.SEO=e)},null,8,["modelValue"])],32)}var E=i(5420),I=i(7316),L=i(6099),T=i(8651),F=i(2830),V=i(8723),U=i(4254),O=i(151),S=i(373),x=i.n(S),P={components:{inputComponent:I.Z,imgComponent:T.Z,imgsComponent:F.Z,checkboxComponent:V.Z,SeoComponent:U.Z,textareaComponent:L.Z},setup(){const e=(0,g.Xw)();return{v$:e}},data(){return{filmName:"",releaseDate:"",filmDescription:"",mainPicture:{},gallary:[],trailerLink:"",typeFilm:{"3D":!1,"2D":!1,IMAX:!1},SEO:{link:"",title:"",keywords:"",description:""},ListDeleteImages:[],cloudFirestore:new h.r,cloudStorage:new O.o}},props:{language:String,collectionRef:Object,id:String,saveTriger:Boolean},mounted(){this.GetFilm()},validations(){return{filmName:{required:E.C1,$lazy:!0},releaseDate:{required:E.C1,$lazy:!0},filmDescription:{required:E.C1,$lazy:!0},mainPicture:{required:E.C1,$lazy:!0},gallary:{required:E.C1,$lazy:!0},trailerLink:{required:E.C1,$lazy:!0},typeFilm:{required(e){return Object.values(e).some((e=>e))},$lazy:!0}}},computed:{fileFolderPath(){return`films/${this.language}/${this.id}`}},methods:{addImage(e){this.gallary.push(e)},delImage(e){this.ListDeleteImages.push(e)},changeImage(e){this.gallary=this.gallary.map((t=>t.id===e.id?e:t))},GetFilm(){this.ListDeleteImages=[],this.cloudFirestore.getDocument(this.collectionRef,this.$route.params.id).then((e=>{e&&Object.assign(this.$data,e)}))},async Save(){try{if(this.$emit("isLoading",!0),this.ListDeleteImages){for(let e=0;e<this.ListDeleteImages.length;e++)this.cloudStorage.DeleteFileInFirebaseStorage(this.fileFolderPath,this.ListDeleteImages[e]);this.ListDeleteImages=[]}if(await this.v$.$validate()){if(this.mainPicture.src?(this.mainPicture.link=await this.cloudStorage.UploadFile(this.fileFolderPath,this.mainPicture),this.saveListImgTriger=!this.saveListImgTriger,delete this.mainPicture.src):delete this.mainPicture,this.gallary.length)for(let t=0;t<this.gallary.length;t++)this.gallary[t].src&&(this.gallary[t].link=await this.cloudStorage.UploadFile(this.fileFolderPath,this.gallary[t]),delete this.gallary[t].src);const e={fileName:this.id,filmName:this.filmName,releaseDate:this.releaseDate,filmDescription:this.filmDescription,typeFilm:this.typeFilm,SEO:this.SEO,gallary:this.gallary,mainPicture:this.mainPicture,trailerLink:this.trailerLink};this.cloudFirestore.AddDocument(this.collectionRef,this.id,e)}console.log("save"),x().success(this.language),this.$emit("isLoading",!1)}catch(e){const t={unknown:"Сталася невідома помилка при збереженні даних."};this.$emit("erorr",!0);const i=t[e.code]||"Не вдалося зберегти дані.";throw new Error(i)}}},watch:{saveTriger(){this.Save()}}},H=i(89);const M=(0,H.Z)(P,[["render",$]]);var _=M,N={setup(){const e=(0,g.Xw)();return{v$:e}},data(){return{id:null,isLoadingUa:!1,isLoadingEn:!1,erorrUa:!1,erorrEn:!1,formValidate:!1,saveTriger:!1,uaValidate:!1,enValidate:!1,title:"Фільм",languages:[{id:0,name:"Українська",value:"Ua",checked:!1},{id:1,name:"Англійська",value:"En",checked:!0}],cloudFirestore:new h.r}},created(){this.GetFilm()},components:{card:C.Z,addFilmC:_},computed:{isLoading(){return!0===this.isLoadingEn||!0===this.isLoadingUa},error(){return!1!==this.erorrUa||!1!==this.erorrEn},curentIndex(){return!0===this.languages[0].checked?0:1},currenLanguage(){return!0===this.languages[0].checked?this.languages[0].value:this.languages[1].value},collectionRef(){const e=(0,p.JU)(f.hS,this.currenLanguage),t=(0,p.hJ)(e,"films");return t}},methods:{changeValidateStatus(e,t){t===this.uaValidate?this.uaValidate=e:this.enValidate=e},changeErorrUa(e){this.erorrUa=e},changeErorrEn(e){this.erorrEn=e},changeLoadingUa(e){this.isLoadingUa=e},changeLoadingEn(e){this.isLoadingEn=e},collection(e){const t=(0,p.JU)(f.hS,e),i=(0,p.hJ)(t,"films");return i},GetFilm(){this.cloudFirestore.getDocument(this.collection("En"),this.$route.params.id).then((e=>{e?this.id=this.$route.params.id:this.cloudFirestore.getDocument(this.collection("Ua"),this.$route.params.id).then((e=>{e?this.id=this.$route.params.id:(this.$router.push("New_Film"),this.id=(0,v.Cf)())}))}))},changeCheckbox(){!0===this.languages[0].checked?(this.languages[0].checked=!1,this.languages[1].checked=!0):(this.languages[1].checked=!1,this.languages[0].checked=!0)},async Save(){await this.v$.$validate()&&(this.saveTriger=!this.saveTriger)}}};const W=(0,H.Z)(N,[["render",m]]);var q=W}}]);
//# sourceMappingURL=137.2a4410e0.js.map