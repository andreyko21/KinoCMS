"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[398],{7171:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var l=n(3396);function a(e,t,n,a,i,o){const s=(0,l.up)("list-cinemas");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{title:"Список кінотеатрів"})])}var i=n(7139);const o=e=>((0,l.dD)("data-v-a4dd3a82"),e=e(),(0,l.Cn)(),e),s=o((()=>(0,l._)("i",{class:"fas fa-plus-circle"},null,-1))),d=[s],c={class:"list d-inline-block"},m={class:"item"},r={class:"image-wrapper"},u=o((()=>(0,l._)("span",null,"Змінити",-1))),p=[u],C=o((()=>(0,l._)("span",null,"Видалити",-1))),g=[C],b=["src","alt"];function _(e,t,n,a,o,s){const u=(0,l.up)("modal-component"),C=(0,l.up)("card-component");return(0,l.wg)(),(0,l.j4)(C,{class:"card-dark",title:n.title},{tools:(0,l.w5)((()=>[(0,l._)("button",{class:"button-add",onClick:t[0]||(t[0]=e=>s.OpenCinema("New_Cinema"))},d)])),body:(0,l.w5)((()=>[(0,l._)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.cinemasList,(n=>((0,l.wg)(),(0,l.iD)("div",{class:"d-inline-block",key:n.id},[(0,l._)("div",m,[(0,l._)("div",r,[(0,l._)("button",{class:"btn change-img",type:"button",onClick:t[1]||(t[1]=t=>s.OpenCinema(e.film.fileName))},p),(0,l._)("button",{class:"btn del-img",type:"button",onClick:t[2]||(t[2]=t=>s.Delete(e.film.fileName))},g),(0,l._)("img",{class:"img",src:e.film.mainPicture.link,alt:e.film.imgAlt},null,8,b)]),(0,l._)("p",null,(0,i.zw)(e.film.filmName),1)])])))),128))]),(0,l.Wm)(u,{modelValue:o.showWarning,"onUpdate:modelValue":t[3]||(t[3]=e=>o.showWarning=e),id:o.deleteCinemaName,onDelete:s.DeleteCinema},null,8,["modelValue","id","onDelete"])])),_:1},8,["title"])}n(7658);var f=n(117),h=n(151),k=n(4494),v=n(3027),w={components:{cardComponent:f.Z,ModalComponent:v.Z},data(){return{cinemasList:[],cloudFirestore:new k.r,cloudStorage:new h.o,deleteCinemaName:"",showWarning:!1}},props:{param:String,title:String},created(){this.GetCinemas()},methods:{OpenCinema(e){this.$router.push(`Cinemas/${e}`)},Delete(e){console.log("Delete")},async DeleteCinema(e){console.log("DeleteCinema")},async GetCinemas(){console.log("GetCinemas")}}},D=n(89);const y=(0,D.Z)(w,[["render",_],["__scopeId","data-v-a4dd3a82"]]);var V=y,S={components:{listCinemas:V}};const N=(0,D.Z)(S,[["render",a]]);var Z=N},3027:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(3396),a=n(7139);const i={class:"modal-dialog"},o={class:"modal-content bg-warning"},s={class:"modal-header"},d=(0,l._)("h4",{class:"modal-title"},"Ви дійсно хочете видалити фільм?",-1),c=(0,l._)("span",{"aria-hidden":"true"},"×",-1),m=[c],r={class:"modal-footer justify-content-between"};function u(e,t,n,c,u,p){return(0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(["modal fade",{show:n.modelValue}]),style:(0,a.j5)(p.modalStyle)},[(0,l._)("div",i,[(0,l._)("div",o,[(0,l._)("div",s,[d,(0,l._)("button",{type:"button",class:"close","data-dismiss":"modal",onClick:t[0]||(t[0]=(...e)=>p.Cancel&&p.Cancel(...e))},m)]),(0,l._)("div",r,[(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:t[1]||(t[1]=(...e)=>p.Cancel&&p.Cancel(...e))},"Відмінити"),(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:t[2]||(t[2]=(...e)=>p.Delete&&p.Delete(...e))},"Видалити")])])])],6)}var p={props:{id:String,message:String,modelValue:{type:Boolean,default:!0}},computed:{modalStyle(){return this.modelValue?{display:"block",paddingRight:"21px"}:{}}},methods:{Delete(){this.$emit("delete",this.id),this.$emit("update:modelValue",!1)},Cancel(){this.$emit("update:modelValue",!1)}}},C=n(89);const g=(0,C.Z)(p,[["render",u]]);var b=g}}]);
//# sourceMappingURL=398.acfa937e.js.map