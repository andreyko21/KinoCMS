"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[247],{6563:function(e,t,i){i.r(t),i.d(t,{default:function(){return ue}});var n=i(3396);function s(e,t,i,s,l,a){const o=(0,n.up)("on-main-top");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o,{title:"На головній верх",fileFolderPath:"banner/MainTop/",collectionRef:l.mainTopRef,eTime:"",eText:"",eUrls:"",eFunctionality:""},null,8,["collectionRef"]),(0,n.Wm)(o,{title:"Наскрізний банер на задньому фоні",fileFolderPath:"banner/BackgroundBanner/",sizeImg:"2000x3000",collectionRef:l.backgroundBanner,eFunctionality:"",eOne:""},null,8,["collectionRef"]),(0,n.Wm)(o,{title:"На головній Новини Акції",fileFolderPath:"banner/MainNewsPromotions/",collectionRef:l.mainNewsPromotions,eTime:"",eUrls:"",eFunctionality:""},null,8,["collectionRef"])],64)}var l=i(9242);const a=(0,n._)("option",null,"5с",-1),o=(0,n._)("option",null,"10с",-1),r=(0,n._)("option",null,"15с",-1),c=(0,n._)("option",null,"20с",-1),d=(0,n._)("option",null,"25с",-1),u=[a,o,r,c,d],m=(0,n._)("i",{class:"fas fa-sync-alt"},null,-1),g=[m],h=(0,n._)("span",null,"Зберегти",-1),p=[h];function f(e,t){const i=(0,n.up)("list-img"),s=(0,n.up)("card");return(0,n.wg)(),(0,n.j4)(s,{title:e.title,isLoading:e.isLoading},{tools:(0,n.w5)((()=>[e.eTime?(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{key:0,class:"form-control","onUpdate:modelValue":t[0]||(t[0]=t=>e.setTime=t)},u,512)),[[l.bM,e.setTime]]):(0,n.kq)("",!0),e.eFunctionality?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=t=>e.functionality=t)},null,512)),[[l.e8,e.functionality]]):(0,n.kq)("",!0),(0,n._)("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=(...t)=>e.UpdateList&&e.UpdateList(...t))},g)])),body:(0,n.w5)((()=>[(0,n.Wm)(i,{eOne:e.eOne,sizeImg:e.sizeImg,eText:e.eText,eUrls:e.eUrls,collectionRef:e.collectionRef,fileFolderPath:e.fileFolderPath,saveListImgTriger:e.saveListImgTriger,updateListImgTriger:e.updateListImgTriger,onIsLoading:e.changeLoading},null,8,["eOne","sizeImg","eText","eUrls","collectionRef","fileFolderPath","saveListImgTriger","updateListImgTriger","onIsLoading"])])),footer:(0,n.w5)((()=>[(0,n._)("span",{class:"btn btn-xs btn-success col fileinput-button",onClick:t[3]||(t[3]=(...t)=>e.Save&&e.Save(...t))},p)])),_:1},8,["title","isLoading"])}var y=i(117);const L={class:"grid-cards"},D={class:"custom-file position-absolute w-0 h-0"};function I(e,t,i,s,l,a){const o=(0,n.up)("img-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.itemsList,(e=>((0,n.wg)(),(0,n.j4)(o,{text:i.eText,urls:i.eUrls,elementData:e,sizeImg:i.sizeImg,key:e.id,onSelectFiles:a.SelectFiles,onDeleteElement:a.DeleteElement,onChangeURL:a.ChangeURL,onChangeText:a.ChangeText},null,8,["text","urls","elementData","sizeImg","onSelectFiles","onDeleteElement","onChangeURL","onChangeText"])))),128))]),(0,n._)("div",D,[(0,n._)("input",{type:"file",class:"custom-file-input",ref:"inputGroupFile",multiple:"",onChange:t[0]||(t[0]=(...e)=>a.CreateData&&a.CreateData(...e))},null,544)])],64)}i(7658);var T=i(36),x=i(5660),b=i(4494),w=i(151);const v=new b.r,k=new w.o;class F{Delete(e,t,i,n){if(!0===n)i.push(t),e.splice(0,1,{id:null});else if(t>0&&e.length>1){const n=e.findIndex((e=>e.id===t));-1!==n&&(null!==e[n].link&&i.push(t),e.splice(n,1))}}AddImageFile(e,t,i,n){const s=e.target.files,l=t.length-1;if(null===i&&s.length>0)if(!0===n){const e=s[s.length-1];t.splice(l,1,{id:`${(0,x.Cf)()}0`,src:URL.createObjectURL(e)})}else for(let a=s.length-1;a>=0;a--){const e=s[a];t.splice(l,0,{id:`${(0,x.Cf)()}${a}`,src:URL.createObjectURL(e)})}else if(1===s.length){const e=t.findIndex((e=>e.id===i));-1!==e&&e!==t.length&&t.splice(e,1,{src:URL.createObjectURL(s[0]),id:i})}}async UpdateData(e,t,i){try{e=[{id:null}];const i=await(0,T.PL)(t);i.forEach((t=>{const i={link:t.data().link,id:t.id,urls:t.data().urls,text:t.data().text},n=e.findIndex((e=>e.id===i.id));-1===n?e.splice(e.length-1,0,i):e[n]=i})),e.sort(((e,t)=>null!==e.id&&null!==t.id?e.id-t.id:null===e.id&&null!==t.id?1:null!==e.id&&null===t.id?-1:0))}catch(n){console.log(n)}}async SetParameters(e,t){if(t){const i={};for(const e in t)i[e]=t[e];v.AddDocument(e,"params",i)}}async AddImg(e,t,i,n){for(let s=0;s<e.length;s++){const l=e[s];if(null!=l.id){const a={link:l.link?l.link:""};i&&(a.text=l.text?l.text:""),n&&(a.urls=l.urls?l.urls:""),await v.AddDocument(t,e[s],a)}}}async DeleteFilesToDataBase(e,t,i){if(e.length)for(let n=0;n<e.length;n++)k.DeleteFileInFirebaseStorage(t,e[n]),v.DeleteDocument(i,e[n])}async AddFilesToDataBase(e,t,i,n,s){for(let l=0;l<e.length;l++){const i=e[l];null!=i.id&&null!=i.src&&(i.link=await k.UploadFile(t,i))}v.AddImgDocument(e,i,n,s)}}var R=i(7139);const U=e=>((0,n.dD)("data-v-7e21bf47"),e=e(),(0,n.Cn)(),e),_=["disabled"],C=U((()=>(0,n._)("i",{class:"fas fa-times"},null,-1))),B=[C],P={class:"content-block"},O={class:"img-block mb-1"},S={class:"image-wrapper"},z={key:0},E={key:1},$={class:"inputs-block"},j={key:0,class:"input-group mb-1"},A=U((()=>(0,n._)("div",{class:"input-group-prepend"},[(0,n._)("span",{class:"input-group-text"},[(0,n._)("i",{class:"fas fa-link"})])],-1))),G=["value"],Z={key:1,class:"input-group mb-1"},M=U((()=>(0,n._)("div",{class:"input-group-prepend"},[(0,n._)("span",{class:"input-group-text"},[(0,n._)("i",{class:"fas fa-comment"})])],-1))),N=["value"];function q(e,t,i,s,l,a){const o=(0,n.up)("card"),r=(0,n.Q2)("lazy");return(0,n.wg)(),(0,n.j4)(o,{class:"card-dark",footer:!1},{tools:(0,n.w5)((()=>[(0,n._)("button",{type:"button",class:(0,R.C_)(["btn btn-tool",{opacity:null===i.elementData.id}]),onClick:t[0]||(t[0]=(...e)=>a.DeleteElement&&a.DeleteElement(...e)),disabled:null===i.elementData.id},B,10,_)])),body:(0,n.w5)((()=>[(0,n._)("div",P,[(0,n._)("div",O,[(0,n._)("div",S,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("img",{class:"img",key:a.currentImage,alt:"altText",onError:t[1]||(t[1]=(...e)=>a.handleImageError&&a.handleImageError(...e))},null,32)),[[r,a.currentImage]])]),(0,n._)("button",{class:"btn btn-absolute",onClick:t[2]||(t[2]=(...e)=>a.SelectFiles&&a.SelectFiles(...e)),type:"button"},[i.elementData.link||i.elementData.src?((0,n.wg)(),(0,n.iD)("span",E,"Змінити "+(0,R.zw)(this.sizeImg),1)):((0,n.wg)(),(0,n.iD)("span",z,"Добавити "+(0,R.zw)(this.sizeImg),1))])]),(0,n._)("div",$,[i.urls&&i.elementData.id?((0,n.wg)(),(0,n.iD)("div",j,[A,(0,n._)("input",{type:"text",class:"form-control",value:i.elementData.urls,onInput:t[3]||(t[3]=(...e)=>a.ChangeURL&&a.ChangeURL(...e)),placeholder:"URL"},null,40,G)])):(0,n.kq)("",!0),i.text&&i.elementData.id?((0,n.wg)(),(0,n.iD)("div",Z,[M,(0,n._)("input",{type:"text",class:"form-control",value:i.elementData.text,onInput:t[4]||(t[4]=(...e)=>a.ChangeText&&a.ChangeText(...e)),placeholder:"Text"},null,40,N)])):(0,n.kq)("",!0)])])])),footer:(0,n.w5)((()=>[])),_:1})}const W={data(){return{error:!1,width:"2000px",height:""+2e3/3e3}},props:{elementData:Object,text:{type:Boolean,default:!1},urls:{type:Boolean,default:!1},sizeImg:{type:String,default:"1000x190"}},components:{card:y.Z},computed:{currentImage(){return!this.error&&this.elementData.src?this.elementData.src:!this.error&&this.elementData.link?this.elementData.link:i(6637)},widthImg(){return this.sizeImg.split("x")[0]+"px"},heightImg(){return this.sizeImg.split("x")[1]/this.sizeImg.split("x")[0]*100+"%"}},methods:{handleImageError(){this.error=!0},DeleteElement(){this.$emit("DeleteElement",this.elementData.id)},SelectFiles(){this.$emit("SelectFiles",this.elementData.id)},ChangeURL(e){this.$emit("ChangeURL",e.target.value,this.elementData.id)},ChangeText(e){this.$emit("ChangeText",e.target.value,this.elementData.id)}}},H=()=>{(0,l.sj)((e=>({ee6b75b2:e.widthImg,"335a5952":e.heightImg})))},Y=W.setup;W.setup=Y?(e,t)=>(H(),Y(e,t)):H;var V=W,K=i(89);const Q=(0,K.Z)(V,[["render",q],["__scopeId","data-v-7e21bf47"]]);var J=Q;const X={data(){return{removeList:[],id:0,itemsList:[],functionality:!0,time:0,firebase:new F}},components:{imgCard:J},emits:["isLoading"],props:{eOne:{type:Boolean,default:!1},eText:{type:Boolean,default:!1},eUrls:{type:Boolean,default:!1},eTime:{type:Boolean,default:!1},eFunctionality:{type:Boolean,default:!1},fileFolderPath:{type:String},collectionRef:{type:Object},saveListImgTriger:{type:Boolean},updateListImgTriger:{type:Boolean},sizeImg:{type:String,default:"1000x190"}},created(){this.UpdateList()},methods:{SelectFiles(e){this.$refs.inputGroupFile.click(),this.id=e},CreateData(e){this.firebase.AddImageFile(e,this.itemsList,this.id,this.eOne),this.$refs.inputGroupFile.value=""},ChangeText(e,t){const i=this.itemsList.findIndex((e=>e.id===t));this.itemsList[i].text=e},ChangeURL(e,t){const i=this.itemsList.findIndex((e=>e.id===t));this.itemsList[i].urls=e},DeleteElement(e){this.firebase.Delete(this.itemsList,e,this.removeList,this.eOne)},async UpdateDataBase(){this.$emit("isLoading",!0);try{await this.firebase.DeleteFilesToDataBase(this.removeList,this.fileFolderPath,this.collectionRef),await this.firebase.AddFilesToDataBase(this.itemsList,this.fileFolderPath,this.collectionRef,this.eText,this.eUrls),this.removeList=[]}catch(e){console.log(e)}this.$emit("isLoading",!1)},async UpdateList(){this.$emit("isLoading",!0);try{this.eOne||(this.itemsList=[{src:null,urls:null,text:null,id:null}]);const e=await(0,T.PL)(this.collectionRef);e.forEach((e=>{if("params"!==e.id){const t={text:e.data().text?e.data().text:null,urls:e.data().urls?e.data().urls:null,link:e.data().link,id:e.id},i=this.itemsList.findIndex((e=>e.id===t.id));-1===i?this.itemsList.splice(this.itemsList.length-1,0,t):this.itemsList[i]=t}})),this.eOne&&0===this.itemsList.length&&(this.itemsList=[{src:null,urls:null,text:null,id:null}]),this.itemsList.sort(((e,t)=>null!==e.id&&null!==t.id?e.id-t.id:null===e.id&&null!==t.id?1:null!==e.id&&null===t.id?-1:0))}catch(e){console.log(e)}this.$emit("isLoading",!1)}},computed:{gridRows(){return this.eOne,4}},watch:{updateListImgTriger:function(){this.UpdateList()},saveListImgTriger:function(){this.UpdateDataBase()}}},ee=()=>{(0,l.sj)((e=>({37164446:e.gridRows})))},te=X.setup;X.setup=te?(e,t)=>(ee(),te(e,t)):ee;var ie=X;const ne=(0,K.Z)(ie,[["render",I],["__scopeId","data-v-34c8c5ee"]]);var se=ne,le={data(){return{isLoading:!1,functionality:!0,saveListImgTriger:!0,updateListImgTriger:!0,setTime:"5с",firebase:new F,cloudFirestore:new b.r}},components:{OnMainTop:oe,card:y.Z,listImg:se},props:{title:{type:String},eText:{type:Boolean,default:!1},eUrls:{type:Boolean,default:!1},eTime:{type:Boolean,default:!1},eFunctionality:{type:Boolean,default:!1},fileFolderPath:{type:String},collectionRef:{type:Object},eOne:{type:Boolean,default:!1},sizeImg:{type:String,default:"1000x190"}},created(){this.GetParameters()},computed:{Options(){const e={};return this.eFunctionality&&(e.functionality=this.functionality,console.log(this.functionality)),this.eTime&&(e.setTime=this.setTime),e}},methods:{async UpdateList(){this.updateListImgTriger=!this.updateListImgTriger,this.GetParameters()},async GetParameters(){const e=await this.cloudFirestore.GetDocument(this.collectionRef,"params");this.functionality=e.functionality,this.setTime=e.setTime},async Save(){this.saveListImgTriger=!this.saveListImgTriger,this.firebase.SetParameters(this.collectionRef,this.Options)},changeLoading(e){this.isLoading=e}}};const ae=(0,K.Z)(le,[["render",f]]);var oe=ae,re=i(4592),ce={components:{onMainTop:oe},data(){return{mainTopRef:re.kt,mainNewsPromotions:re.d$,backgroundBanner:re.Pe,mainTopDocRef:re.mainTopDocRef,mainNewsPromotionsDocRef:re.mainNewsPromotionsDocRef}}};const de=(0,K.Z)(ce,[["render",s],["__scopeId","data-v-14d555d8"]]);var ue=de}}]);
//# sourceMappingURL=247.47ca6050.js.map