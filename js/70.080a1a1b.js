"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[70],{4592:function(e,t,n){n.d(t,{DV:function(){return b},Pe:function(){return p},d$:function(){return h},hS:function(){return f},kt:function(){return u},mV:function(){return D}});var l=n(1609),i=n(36),a=n(3185);const s=(0,i.ad)(a.w),o=(0,l.v0)(a.w),r=(0,i.hJ)(s,"users"),d=(0,i.JU)(r,o.currentUser.uid),c=(0,i.hJ)(d,"banners"),m=(0,i.JU)(c,"banner"),u=(0,i.hJ)(m,"MainTop"),h=(0,i.hJ)(m,"MainNewsPromotions"),p=(0,i.hJ)(m,"BackgroundBanner"),f=(0,i.hJ)(d,"films"),g=(0,i.JU)(f,"En"),w=(0,i.JU)(f,"Ua"),b=(0,i.hJ)(w,"films"),D=(0,i.hJ)(g,"films")},6769:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var l=n(3396);function i(e,t,n,i,a,s){const o=(0,l.up)("list-films");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(o,{param:"<=",title:"Список поточних фільмів"}),(0,l.Wm)(o,{param:">",title:"Список фільмів, які покажуть незабаром"})],64)}var a=n(7139);const s=e=>((0,l.dD)("data-v-88ac1dd8"),e=e(),(0,l.Cn)(),e),o=s((()=>(0,l._)("i",{class:"fas fa-plus-circle"},null,-1))),r=[o],d={class:"list d-inline-block"},c={class:"item"},m={class:"image-wrapper"},u=["onClick"],h=s((()=>(0,l._)("span",null,"Змінити",-1))),p=[h],f=["onClick"],g=s((()=>(0,l._)("span",null,"Видалити",-1))),w=[g],b=["src","alt"];function D(e,t,n,i,s,o){const h=(0,l.up)("modal-component"),g=(0,l.up)("card-component");return(0,l.wg)(),(0,l.j4)(g,{class:"card-dark",title:n.title},{tools:(0,l.w5)((()=>[(0,l._)("button",{class:"button-add",onClick:t[0]||(t[0]=e=>o.OpenFilm("New_Film"))},r)])),body:(0,l.w5)((()=>[(0,l._)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.filmsList,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"d-inline-block",key:e.id},[(0,l._)("div",c,[(0,l._)("div",m,[(0,l._)("button",{class:"btn change-img",type:"button",onClick:t=>o.OpenFilm(e.fileName)},p,8,u),(0,l._)("button",{class:"btn del-img",type:"button",onClick:t=>o.Delete(e.fileName)},w,8,f),(0,l._)("img",{class:"img",src:e.mainPicture.link,alt:e.imgAlt},null,8,b)]),(0,l._)("p",null,(0,a.zw)(e.filmName),1)])])))),128))]),(0,l.Wm)(h,{modelValue:s.showWarning,"onUpdate:modelValue":t[1]||(t[1]=e=>s.showWarning=e),id:s.deleteFilmName,onDelete:o.DeleteFilm},null,8,["modelValue","id","onDelete"])])),_:1},8,["title"])}n(7658);var _=n(117),k=n(36),F=n(4592),v=n(151),y=n(4494),C=n(8335),V=n(3027),J={components:{cardComponent:_.Z,ModalComponent:V.Z},data(){return{filmsList:[],cloudFirestore:new y.r,cloudStorage:new v.o,deleteFilmName:"",showWarning:!1}},props:{param:String,title:String},created(){this.GetFilm()},methods:{OpenFilm(e){this.$router.push(`Films/${e}`)},Delete(e){this.deleteFilmName=e,this.showWarning=!0},async DeleteFilm(e){this.deleteFilmName=e,this.showWarning=!0,await this.cloudStorage.DeleteFolderInFirebaseStorage(`films/En/${e}`),await this.cloudStorage.DeleteFolderInFirebaseStorage(`films/Ua/${e}`),await this.cloudFirestore.DeleteDocument(F.DV,e),await this.cloudFirestore.DeleteDocument(F.mV,e),this.filmsList=this.filmsList.filter((t=>t.id!==e))},async GetFilm(){this.ListDeleteImages=[];try{const e=await this.cloudFirestore.GetFilteredDocuments(F.mV,(0,k.ar)("releaseDate",this.param,C.ou.now().toFormat("yyyy-LL-dd")));this.filmsList=e.docs.map((e=>e.data()))}catch(e){console.error("Error getting documents: ",e)}}}},S=n(89);const N=(0,S.Z)(J,[["render",D],["__scopeId","data-v-88ac1dd8"]]);var L=N,U={components:{listFilms:L},data(){return{show:!0}}};const W=(0,S.Z)(U,[["render",i]]);var $=W},3027:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(3396),i=n(7139);const a={class:"modal-dialog"},s={class:"modal-content bg-warning"},o={class:"modal-header"},r=(0,l._)("h4",{class:"modal-title"},"Ви дійсно хочете видалити фільм?",-1),d=(0,l._)("span",{"aria-hidden":"true"},"×",-1),c=[d],m={class:"modal-footer justify-content-between"};function u(e,t,n,d,u,h){return(0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)(["modal fade",{show:n.modelValue}]),style:(0,i.j5)(h.modalStyle)},[(0,l._)("div",a,[(0,l._)("div",s,[(0,l._)("div",o,[r,(0,l._)("button",{type:"button",class:"close","data-dismiss":"modal",onClick:t[0]||(t[0]=(...e)=>h.Cancel&&h.Cancel(...e))},c)]),(0,l._)("div",m,[(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:t[1]||(t[1]=(...e)=>h.Cancel&&h.Cancel(...e))},"Відмінити"),(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:t[2]||(t[2]=(...e)=>h.Delete&&h.Delete(...e))},"Видалити")])])])],6)}var h={props:{id:String,message:String,modelValue:{type:Boolean,default:!0}},computed:{modalStyle(){return this.modelValue?{display:"block",paddingRight:"21px"}:{}}},methods:{Delete(){this.$emit("delete",this.id),this.$emit("update:modelValue",!1)},Cancel(){this.$emit("update:modelValue",!1)}}},p=n(89);const f=(0,p.Z)(h,[["render",u]]);var g=f}}]);
//# sourceMappingURL=70.080a1a1b.js.map