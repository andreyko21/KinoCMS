"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[307],{4307:function(s,a,e){e.r(a),e.d(a,{default:function(){return K}});var r=e(3396),i=e(9242),o=e(7139);const t=s=>((0,r.dD)("data-v-60c08f02"),s=s(),(0,r.Cn)(),s),l={class:"login-page"},n={class:"login-box"},c={class:"login-logo"},d=t((()=>(0,r._)("b",null,"Kino",-1))),u={class:"card"},p={class:"card-body login-card-body"},m=t((()=>(0,r._)("p",{class:"login-box-msg"},"Увійдіть, щоб почати сеанс",-1))),g={class:"input-email mb-2"},v={class:"input-group email"},w=t((()=>(0,r._)("div",{class:"input-group-append"},[(0,r._)("div",{class:"input-group-text"},[(0,r._)("span",{class:"fas fa-envelope"})])],-1))),_={class:"error-msg"},h={class:"input-password mb-2"},b={class:"input-group"},k=t((()=>(0,r._)("div",{class:"input-group-append"},[(0,r._)("div",{class:"input-group-text"},[(0,r._)("span",{class:"fas fa-lock"})])],-1))),f={class:"error-msg"},y={key:0,class:"error-msg"},$=t((()=>(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-8"}),(0,r._)("div",{class:"col-4"},[(0,r._)("button",{type:"submit",class:"btn btn-primary btn-block"},"Ввійти")])],-1))),M=t((()=>(0,r._)("p",{class:"mb-1"},null,-1)));function D(s,a,e,t,D,C){const x=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",n,[(0,r._)("div",c,[(0,r.Wm)(x,{to:"/"},{default:(0,r.w5)((()=>[d,(0,r.Uk)("CMS")])),_:1})]),(0,r._)("div",u,[(0,r._)("div",p,[m,(0,r._)("form",{onSubmit:a[2]||(a[2]=(0,i.iM)(((...s)=>C.Login&&C.Login(...s)),["prevent"]))},[(0,r._)("div",g,[(0,r._)("div",v,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=s=>D.email=s),autocomplete:"username"},null,512),[[i.nr,D.email]]),w]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.v$.email.$errors,(s=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:s.$uid},[(0,r._)("div",_,(0,o.zw)(s.$message),1)])))),128))]),(0,r._)("div",h,[(0,r._)("div",b,[(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=s=>D.password=s),autocomplete:"current-password"},null,512),[[i.nr,D.password]]),k]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.v$.password.$errors,(s=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:s.$uid},[(0,r._)("div",f,(0,o.zw)(s.$message),1)])))),128))]),D.error?((0,r.wg)(),(0,r.iD)("p",y,(0,o.zw)(D.error),1)):(0,r.kq)("",!0),$],32),M])])])])}e(7658);var C=e(1609),x=e(5420),q=e(4219),B={name:"login-page",setup(){return{v$:(0,q.Xw)()}},data(){return{email:"",password:"",error:""}},validations(){return{email:{required:x.BM.withMessage("*Введіть електронну пошту",x.C1),email:x.BM.withMessage("*Недійсна адреса електронної пошти",x.Do)},password:{required:x.BM.withMessage("*Введіть пароль",x.C1),minLength:x.BM.withMessage("*Пароль повинен містити не менше 6 символів",(0,x.Ei)(6))}}},methods:{async Login(){try{const s=await this.v$.$validate();s&&(await(0,C.e5)((0,C.v0)(),this.email,this.password),this.email="",this.password="",this.v$.$reset(),this.$router.push("/"))}catch(s){switch(s.code){case"auth/wrong-password":this.error="*Неправильний пароль або пошта";break;case"auth/too-many-requests":this.error="*Заблоковано через забагато спроб";break;case"auth/invalid-email":this.error="*Неправильний формат електронної пошти";break;default:this.error="*Помилка Firebase";break}}}},created(){document.title="Вхід"}},L=e(89);const z=(0,L.Z)(B,[["render",D],["__scopeId","data-v-60c08f02"]]);var K=z}}]);
//# sourceMappingURL=307.58965182.js.map