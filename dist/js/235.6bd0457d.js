"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[235],{5660:function(e,t,a){a.d(t,{Cf:function(){return s}});var i=a(1609),n=a(36),l=a(1614);function s(){const e=new Date,t=e.getFullYear(),a=e.getMonth()+1,i=e.getDate(),n=e.getHours(),l=e.getMinutes(),s=e.getSeconds();return`${t}${a}${i}${n}${l}${s}`}const r=(0,n.ad)(l.w),o=(0,i.v0)(l.w),c=(0,n.hJ)(r,"users"),d=(0,n.JU)(c,o.currentUser.uid),g=(0,n.hJ)(d,"banners"),u=(0,n.JU)(g,"banner");(0,n.hJ)(u,"MainTop")},8762:function(e,t,a){a.d(t,{Z:function(){return u}});var i=a(3396);const n=e=>((0,i.dD)("data-v-bb536a1a"),e=e(),(0,i.Cn)(),e),l={class:"box-1"},s=["checked"],r=n((()=>(0,i._)("span",{class:"toogle"},null,-1)));function o(e,t,a,n,o,c){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("input",{checked:!a.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",!a.modelValue)),id:"2",type:"checkbox"},null,40,s),r])}var c={props:{id:String,label:String,modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}},d=a(89);const g=(0,d.Z)(c,[["render",o],["__scopeId","data-v-bb536a1a"]]);var u=g},6988:function(e,t,a){a.d(t,{Z:function(){return k}});var i=a(3396),n=a(7139);const l={class:"content-block"},s={class:"img-block mb-1"},r={class:"image-wrapper"},o=["src"],c=["src"],d={key:0,class:"error-message"};function g(e,t,a,g,u,m){const p=(0,i.up)("card-component");return(0,i.wg)(),(0,i.j4)(p,{class:"card-dark",title:a.title},{tools:(0,i.w5)((()=>[])),body:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",s,[(0,i._)("div",r,[a.imgObject&&a.imgObject.src?((0,i.wg)(),(0,i.iD)("img",{key:0,src:a.imgObject.src,alt:"Uploaded Image",class:"img"},null,8,o)):a.imgObject&&a.imgObject.link?((0,i.wg)(),(0,i.iD)("img",{key:1,src:a.imgObject.link,alt:"Uploaded Image",class:"img"},null,8,c)):(0,i.kq)("",!0),(0,i._)("input",{ref:"fileInput",type:"file",class:"fileInput",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>m.onFileChange&&m.onFileChange(...e))},null,544),a.imgObject.src||a.imgObject.link?((0,i.wg)(),(0,i.iD)("button",{key:2,class:"btn change-img",type:"button",onClick:t[1]||(t[1]=e=>m.SelectFile())}," Змінити ")):(0,i.kq)("",!0),a.imgObject.src||a.imgObject.link?((0,i.wg)(),(0,i.iD)("button",{key:3,class:"btn del-img",type:"button",onClick:t[2]||(t[2]=e=>m.DeleteImage())}," Видалити ")):((0,i.wg)(),(0,i.iD)("button",{key:4,class:"btn add-img",type:"button",onClick:t[3]||(t[3]=e=>m.SelectFile())},"Добавити"))])])]),a.error?((0,i.wg)(),(0,i.iD)("div",d,(0,n.zw)(a.error),1)):(0,i.kq)("",!0)])),_:1},8,["title"])}a(7658);var u=a(1994),m=a(5660),p=a(9242);const h={components:{cardComponent:u.Z},props:{imgObject:{type:Object,default:()=>({id:1,src:"",link:""})},title:String,error:String,deleteList:{type:Array,default:()=>[]}},methods:{DeleteImage(){if(null!=this.imgObject.link){const e=this.deleteList;e.push(this.imgObject.id),this.$emit("update:deleteList",e)}this.$emit("update:imgObject",{})},SelectFile(){this.$refs.fileInput.click()},onFileChange(e){const t=e.target.files[0];if(t){const e=URL.createObjectURL(t),a={id:this.imgObject.id?this.imgObject.id:(0,m.Cf)(),src:e};this.$emit("update:imgObject",a),this.$refs.fileInput.value=""}}}},b=()=>{(0,p.sj)((e=>({"61b5e55e":e.gridRows})))},y=h.setup;h.setup=y?(e,t)=>(b(),y(e,t)):b;var v=h,I=a(89);const f=(0,I.Z)(v,[["render",g],["__scopeId","data-v-3f706300"]]);var k=f},4058:function(e,t,a){a.d(t,{Z:function(){return j}});var i=a(3396),n=a(7139);const l=e=>((0,i.dD)("data-v-22716d53"),e=e(),(0,i.Cn)(),e),s={class:"content-block"},r={class:"img-block mb-1"},o={key:0},c=["src"],d=["src"],g=["onClick"],u=l((()=>(0,i._)("span",null,"Змінити",-1))),m=[u],p=["onClick"],h=l((()=>(0,i._)("span",null,"Видалити",-1))),b=[h],y={class:"image-wrapper d-inline-block"},v={key:0},I={key:0,class:"error-message"};function f(e,t,a,l,u,h){const f=(0,i.up)("card-component");return(0,i.wg)(),(0,i.j4)(f,{class:"card-dark",title:"Галерея картинок"},{tools:(0,i.w5)((()=>[])),body:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.imgsArray,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"image-wrapper d-inline-block",key:e.id},[a.imgsArray?((0,i.wg)(),(0,i.iD)("div",o,[e.src?((0,i.wg)(),(0,i.iD)("img",{key:0,src:e.src,alt:"Uploaded Image",class:"img"},null,8,c)):e.link?((0,i.wg)(),(0,i.iD)("img",{key:1,src:e.link,alt:"Uploaded Image",class:"img"},null,8,d)):(0,i.kq)("",!0),(0,i._)("input",{ref_for:!0,ref:"fileInput",type:"file",class:"fileInput",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>h.onFileChange&&h.onFileChange(...e))},null,544),(0,i._)("button",{class:"btn change-img",type:"button",onClick:t=>h.SelectFile(e.id)},m,8,g),a.imgsArray?((0,i.wg)(),(0,i.iD)("button",{key:2,class:"btn del-img",type:"button",onClick:t=>h.DeleteImage(e.id)},b,8,p)):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])))),128)),(0,i._)("div",y,[(0,i._)("input",{ref:"fileInput",type:"file",class:"fileInput",accept:"image/*",onChange:t[1]||(t[1]=(...e)=>h.onFileChange&&h.onFileChange(...e)),multiple:""},null,544),(0,i._)("button",{class:"btn add-img",type:"button",onClick:t[2]||(t[2]=e=>h.SelectFile("new"))},[a.imgsArray?((0,i.wg)(),(0,i.iD)("span",v,"Добавити")):(0,i.kq)("",!0)])])])]),a.error?((0,i.wg)(),(0,i.iD)("div",I,(0,n.zw)(a.error),1)):(0,i.kq)("",!0)])),_:1})}a(7658);var k=a(5660),w=a(1994),C=a(9242);const L={components:{cardComponent:w.Z},data(){return{currentImgId:null}},props:{imgsArray:{type:Array,default:()=>[]},title:String,error:String,deleteList:{type:Array,default:()=>[]}},methods:{DeleteImage(e){if(this.imgsArray.find((t=>t.id===e&&t.link))){const t=this.deleteList;t.push(e),this.$emit("update:deleteList",t)}const t=this.imgsArray.filter((t=>t.id!==e));this.$emit("update:imgsArray",t)},SelectFile(e){this.currentImgId=e,this.$refs.fileInput.click()},onFileChange(e){const t=e.target.files;if(t){const e=this.imgsArray;if("new"!==this.currentImgId&&null!==this.currentImgId){const e=URL.createObjectURL(t[t.length-1]),a=this.imgsArray.map((t=>t.id===this.currentImgId?{...t,src:e}:t));this.$emit("update:imgsArray",a)}else{for(let a=0;a<t.length;a++){const i=URL.createObjectURL(t[a]),n={id:`${(0,k.Cf)()}${a}`,src:i};e.push(n)}this.$emit("update:imgsArray",e)}}e.target.value=null}}},$=()=>{(0,C.sj)((e=>({"3018325b":e.gridRows})))},_=L.setup;L.setup=_?(e,t)=>($(),_(e,t)):$;var F=L,D=a(89);const V=(0,D.Z)(F,[["render",f],["__scopeId","data-v-22716d53"]]);var j=V},5402:function(e,t,a){a.d(t,{Z:function(){return g}});var i=a(3396),n=a(7139);const l={class:"btn-group btn-group-toggle"},s=["id","onClick"];function r(e,t,a,r,o,c){return(0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.languages,(e=>((0,i.wg)(),(0,i.iD)("label",{key:e.id,class:(0,n.C_)(["btn btn-secondary",{active:e.checked,error:a.error[e.id].$errors.length}])},[(0,i._)("input",{type:"radio",name:"options",id:e.name,autocomplete:"off",onClick:t=>c.changeLanguage(e.id)},null,8,s),(0,i.Uk)(" "+(0,n.zw)(e.name),1)],2)))),128))])}var o={props:{error:Object,languages:{type:Array,default:()=>[{id:0,name:"",abbreviation:"",checked:!1}]}},methods:{changeLanguage(e){for(const t of this.languages)t.id===e?t.checked=!0:!0===t.checked&&(t.checked=!1)}}},c=a(89);const d=(0,c.Z)(o,[["render",r],["__scopeId","data-v-1fd42b0c"]]);var g=d},2575:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var i=a(3396);const n=(0,i._)("span",null,"Скинути зміни",-1),l=[n],s=(0,i._)("span",null,"Зберегти",-1),r=[s];function o(e,t,a,n,s,o){const c=(0,i.up)("checkbox-component"),d=(0,i.up)("language-component"),g=(0,i.up)("children-room-form"),u=(0,i.up)("card");return(0,i.wg)(),(0,i.j4)(u,{title:s.title,isLoading:s.isLoading},{tools:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(c,{modelValue:s.checkedPage,"onUpdate:modelValue":t[0]||(t[0]=e=>s.checkedPage=e)},null,8,["modelValue"])]),(0,i.Wm)(d,{languages:s.languages,"onUpdate:languages":t[1]||(t[1]=e=>s.languages=e),error:n.v$.languages},null,8,["languages","error"])])),body:(0,i.w5)((()=>[(0,i.Wm)(g,{modelValue:o.currentLanguage.data,"onUpdate:modelValue":t[2]||(t[2]=e=>o.currentLanguage.data=e)},null,8,["modelValue"]),(0,i._)("button",{type:"button",onClick:t[3]||(t[3]=(...e)=>o.Reset&&o.Reset(...e)),class:"btn btn-xs btn-warning col fileinput-button"},l),(0,i._)("button",{type:"submit",onClick:t[4]||(t[4]=(...e)=>o.Save&&o.Save(...e)),class:"btn btn-xs btn-success col fileinput-button"},r)])),_:1},8,["title","isLoading"])}a(7658);var c=a(8762),d=a(4494),g=a(151),u=a(4219),m=a(5420),p=a(4592),h=a(5402),b=a(1994),y=a(373),v=a.n(y),I=a(8335),f=a(7139);const k={action:""};function w(e,t,a,n,l,s){const r=(0,i.up)("input-component"),o=(0,i.up)("textarea-component"),c=(0,i.up)("img-component"),d=(0,i.up)("imgs-component"),g=(0,i.up)("seo-component");return(0,i.wg)(),(0,i.iD)("form",k,[(0,i.Wm)(r,{label:"Назва",id:"name",type:"text",placeholder:"Дитяча кімната",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),error:n.v$.name.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,i.Wm)(o,{class:"mt-3",label:"Опис",id:"description",type:"textarea",placeholder:"Введіть опис",modelValue:n.description,"onUpdate:modelValue":t[1]||(t[1]=e=>n.description=e),error:n.v$.description.$error?"Поле є обовязковим":""},null,8,["modelValue","error"]),(0,i.Wm)(c,{imgObject:n.mainImg,"onUpdate:imgObject":t[2]||(t[2]=e=>n.mainImg=e),deleteList:n.deleteImgList,"onUpdate:deleteList":t[3]||(t[3]=e=>n.deleteImgList=e),class:(0,f.C_)([{"is-invalid":n.v$.mainImg.$error},"mt-3"]),title:"Головна картинка",error:n.v$.mainImg.$error?"Виберіть картинку":""},null,8,["imgObject","deleteList","class","error"]),(0,i.Wm)(d,{imgsArray:n.galleryImg,"onUpdate:imgsArray":t[4]||(t[4]=e=>n.galleryImg=e),deleteList:n.deleteImgList,"onUpdate:deleteList":t[5]||(t[5]=e=>n.deleteImgList=e),class:(0,f.C_)([{"is-invalid":n.v$.galleryImg.$error},"mt-3"]),title:"Галерея картинок",error:n.v$.galleryImg.$error?"Виберіть картинку":""},null,8,["imgsArray","deleteList","class","error"]),(0,i.Wm)(g,{modelValue:n.seo,"onUpdate:modelValue":t[6]||(t[6]=e=>n.seo=e)},null,8,["modelValue"])])}var C=a(599),L=a(7316),$=a(6988),_=a(4058),F=a(7335),D=a(4870),V={components:{inputComponent:L.Z,textareaComponent:C.Z,imgComponent:$.Z,imgsComponent:_.Z,SeoComponent:F.Z},props:{modelValue:{type:Object,default:()=>({newsName:"",newsDescription:"",mainImg:{},galleryImg:[],seo:{},deleteImgList:[]})}},setup(e,{emit:t}){const a=(0,u.Xw)(),n=(0,D.iH)(e.modelValue.name),l=(0,D.iH)(e.modelValue.description),s=(0,D.iH)(e.modelValue.mainImg),r=(0,D.iH)(e.modelValue.galleryImg),o=(0,D.iH)(e.modelValue.seo),c=(0,D.iH)(e.modelValue.deleteImgList),d=()=>{t("update:modelValue",{name:n.value?n.value:"",description:l.value?l.value:"",mainImg:s.value?s.value:{},galleryImg:r.value?r.value:[],seo:o.value?o.value:{},deleteImgList:c.value?c.value:[]})};return(0,i.m0)((()=>{n.value=e.modelValue.name,l.value=e.modelValue.description,s.value=e.modelValue.mainImg,r.value=e.modelValue.galleryImg,o.value=e.modelValue.seo,c.value=e.modelValue.deleteImgList})),(0,i.YP)([n,l,s,r,o,c],d),{v$:a,name:n,description:l,mainImg:s,galleryImg:r,seo:o,deleteImgList:c}},validations(){return{name:{required:m.C1,$lazy:!0},description:{required:m.C1,$lazy:!0},mainImg:{required:m.C1,$lazy:!0},galleryImg:{required:m.C1,$lazy:!0}}}},j=a(89);const O=(0,j.Z)(V,[["render",w],["__scopeId","data-v-5b25af52"]]);var U=O,A={components:{card:b.Z,LanguageComponent:h.Z,checkboxComponent:c.Z,ChildrenRoomForm:U},setup(){const e=(0,u.Xw)();return{v$:e}},data(){return{name:"Children_room",checkedPage:!0,cloudFirestore:new d.r,cloudStorage:new g.o,languages:[{id:0,name:"Українська",abbreviation:"Ua",collection:p.LS,checked:!1,data:{name:"",description:"",mainImg:{},galleryImg:[],seo:{},deleteImgList:[]}},{id:1,name:"Англійська",abbreviation:"En",collection:p.Kd,checked:!0,data:{name:"",description:"",mainImg:{},galleryImg:[],seo:{},deleteImgList:[]}}],title:"Дитяча кімната",isLoading:!1}},validations(){const e=this;return{languages:[...(()=>{const t=[{data:{name:{required:m.C1},description:{required:m.C1},mainImg:{required:m.C1},galleryImg:{required:m.C1}}}];return e.languages.forEach(((e,a)=>{a>0&&t.push({data:{name:{required:m.C1},description:{required:m.C1},mainImg:{required:m.C1},galleryImg:{required:m.C1}}})})),t})()]}},computed:{currentLanguage(){const e=this.languages.find((e=>!0===e.checked));return e||{}},id(){return this.name}},async created(){this.isLoading=!0,await this.GetFile(this.languages[0]),await this.GetFile(this.languages[1]),this.isLoading=!1},methods:{GetFile(e){this.cloudFirestore.getDocument(e.collection,this.name).then((t=>{t&&(this.checkedPage=t.checkedPage,Object.assign(e.data,t))}))},async DeleteFirebaseImages(e,t){if(void 0!==e&&e.length>0)for(const a of e)await this.cloudStorage.DeleteFileInFirebaseStorage(t,a)},async AddFirebaseImage(e,t){e.src?(e.link=await this.cloudStorage.UploadFile(t,e),delete e.src):e={}},async AddFirebaseImages(e,t){if(e&&e.length)for(let a=0;a<e.length;a++){const i=e[a];i.src&&(i.link=await this.cloudStorage.UploadFile(t,i),delete i.src)}},async AddFirebaseData(e,t){const a=await{checkedPage:this.checkedPage,fileName:this.id,name:e.name,description:e.description,mainImg:e.mainImg,galleryImg:e.galleryImg,seo:e.seo,datePublication:I.ou.now().toFormat("dd.LL.yyyy")};await this.cloudFirestore.AddDocument(t,this.id,a)},async Reset(){this.isLoading=!0,await this.GetFile(this.currentLanguage),v().success("Дані успішно скинуто"),this.isLoading=!1},async Save(){if(this.isLoading=!0,await this.v$.$validate()){for(let e=0;e<this.languages.length;e++)await this.DeleteFirebaseImages(this.languages[e].data.deleteImgList,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),this.languages[e].data.deleteImgList=[],await this.AddFirebaseImage(this.languages[e].data.mainImg,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),await this.AddFirebaseImages(this.languages[e].data.galleryImg,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),await this.AddFirebaseData(this.languages[e].data,this.languages[e].collection);v().success("Дані успішно збережено")}else v().warning("Введіть всі дані");this.isLoading=!1}}};const S=(0,j.Z)(A,[["render",o]]);var q=S}}]);
//# sourceMappingURL=235.6bd0457d.js.map