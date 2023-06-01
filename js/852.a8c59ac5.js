"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[852],{4741:function(e,a,i){i.r(a),i.d(a,{default:function(){return w}});var t=i(3396);const n=(0,t._)("span",null,"Зберегти",-1),s=[n];function o(e,a,i,n,o,d){const r=(0,t.up)("checkbox-component"),l=(0,t.up)("language-component"),g=(0,t.up)("add-promotions-form"),u=(0,t.up)("card");return(0,t.wg)(),(0,t.j4)(u,{title:o.title,isLoading:o.isLoading},{tools:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:o.checkedPage,"onUpdate:modelValue":a[0]||(a[0]=e=>o.checkedPage=e)},null,8,["modelValue"])]),(0,t.Wm)(l,{languages:o.languages,"onUpdate:languages":a[1]||(a[1]=e=>o.languages=e),error:n.v$.languages},null,8,["languages","error"])])),body:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:d.currentLanguage.data,"onUpdate:modelValue":a[2]||(a[2]=e=>d.currentLanguage.data=e)},null,8,["modelValue"]),(0,t._)("button",{type:"submit",onClick:a[3]||(a[3]=(...e)=>d.Save&&d.Save(...e)),class:"btn btn-xs btn-success col fileinput-button"},s)])),_:1},8,["title","isLoading"])}i(7658);var d=i(8762),r=i(4494),l=i(151),g=i(4219),u=i(5420),c=i(4592),m=i(557),h=i(5402),b=i(5660),p=i(1994),I=i(373),k=i.n(I),L={components:{card:p.Z,addPromotionsForm:m.Z,LanguageComponent:h.Z,checkboxComponent:d.Z},setup(){const e=(0,g.Xw)();return{v$:e}},data(){return{name:"Promotions",checkedPage:!0,cloudFirestore:new r.r,cloudStorage:new l.o,languages:[{id:0,name:"Українська",abbreviation:"Ua",collection:c.hN,checked:!1,data:{name:"",datePublication:"",description:"",mainImg:{},galleryImg:[],videoLink:"",seo:{},deleteImgList:[]}},{id:1,name:"Англійська",abbreviation:"En",collection:c.qo,checked:!0,data:{name:"",datePublication:"",description:"",mainImg:{},galleryImg:[],videoLink:"",seo:{},deleteImgList:[]}}],title:"Створення акції",isLoading:!1}},validations(){const e=this;return{languages:[...(()=>{const a=[{data:{name:{required:u.C1},datePublication:{required:u.C1},description:{required:u.C1},mainImg:{required:u.C1},galleryImg:{required:u.C1},videoLink:{required:u.C1}}}];return e.languages.forEach(((e,i)=>{i>0&&a.push({data:{name:{required:u.C1},datePublication:{required:u.C1},description:{required:u.C1},mainImg:{required:u.C1},galleryImg:{required:u.C1},videoLink:{required:u.C1}}})})),a})()]}},computed:{currentLanguage(){const e=this.languages.find((e=>!0===e.checked));return e||{}},id(){return this.$route.params[`${this.name}Id`]!==`New_${this.name}`?this.$route.params[`${this.name}Id`]:(0,b.Cf)()}},async created(){this.isLoading=!0,await this.GetFile(this.languages[0]),await this.GetFile(this.languages[1]),this.isLoading=!1},methods:{GetFile(e){this.cloudFirestore.getDocument(e.collection,this.$route.params[`${this.name}Id`]).then((a=>{a?(this.checkedPage=a.checkedPage,Object.assign(e.data,a)):this.$route.params[`${this.name}Id`]!==`New_${this.name}`&&this.$router.push(`/${this.name}`)}))},async DeleteFirebaseImages(e,a){if(void 0!==e&&e.length>0)for(const i of e)await this.cloudStorage.DeleteFileInFirebaseStorage(a,i)},async AddFirebaseImage(e,a){e.src?(e.link=await this.cloudStorage.UploadFile(a,e),delete e.src):e={}},async AddFirebaseImages(e,a){if(e&&e.length)for(let i=0;i<e.length;i++){const t=e[i];t.src&&(t.link=await this.cloudStorage.UploadFile(a,t),delete t.src)}},async AddFirebaseData(e,a){const i=await{checkedPage:this.checkedPage,fileName:this.id,name:e.name,description:e.description,datePublication:e.datePublication,mainImg:e.mainImg,galleryImg:e.galleryImg,videoLink:e.videoLink,seo:e.seo};await this.cloudFirestore.AddDocument(a,this.id,i)},async Reset(){this.isLoading=!0,await this.GetElement(this.currentLanguage),k().success("Дані успішно скинуто"),this.isLoading=!1},async Save(){if(this.isLoading=!0,await this.v$.$validate()){for(let e=0;e<this.languages.length;e++)await this.DeleteFirebaseImages(this.languages[e].data.deleteImgList,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),this.languages[e].data.deleteImgList=[],await this.AddFirebaseImage(this.languages[e].data.mainImg,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),await this.AddFirebaseImages(this.languages[e].data.galleryImg,`${this.name}/${this.languages[e].abbreviation}/${this.id}`),await this.AddFirebaseData(this.languages[e].data,this.languages[e].collection);k().success("Дані успішно збережено")}else k().warning("Введіть всі дані");this.isLoading=!1}}},$=i(89);const v=(0,$.Z)(L,[["render",o]]);var w=v}}]);
//# sourceMappingURL=852.a8c59ac5.js.map