"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[158],{1158:(L,p,a)=>{a.r(p),a.d(p,{StaffListModule:()=>B});var c=a(7087),l=a(3759),h=a(1348),g=a.t(h,2),t=a(2283),C=a(4758),k=a(6655),_=a(8878),v=a(1359),f=a(9347),u=a(8464),T=a(3578);const S=function(i){return{"background-color":i}};let m=(()=>{class i{constructor(){this.onClicked=new t.vpe}ngOnInit(){}getBackColor(){return this.staff.active?"white":"#ffffcc"}getPicture(){return this.staff.picture&&this.staff.picture.length>0?this.staff.picture:"https://hips.hearstapps.com/hmg-prod/images/how-to-shave-your-face-at-home-1648149510.png?crop=0.505xw:1.00xh;0.228xw,0.00408xh&resize=1200:*"}onClick(e){this.staff.tag=e,this.onClicked.emit(this.staff)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-staff"]],inputs:{staff:"staff"},outputs:{onClicked:"onClicked"},decls:35,vars:9,consts:[[1,"h-32","w-64","flex","flex-col","rounded","border","border-gray-200","p-1","shadow-sm",3,"ngStyle"],[1,"flex","flex-row"],["alt","aja",1,"h-12","w-12","rounded-full","object-fill",3,"src"],[1,"flex","flex-col","items-start","px-2"],[1,"h-6","w-48","overflow-hidden","font-medium","leading-tight"],[1,"pl-2","h-5","w-48","font-light","text-xs","overflow-hidden"],[1,"w-48","h-6","px-1","border-t","border-violet-300","flex","flex-row","gap-x-4","justify-end","text-violet-300"],[1,"pt-1"],[1,"hover:text-gray-900",3,"click"],[1,"hover:text-gray-900"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"strong"),t._uU(8,"M\xf3vil:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"div",5)(11,"strong"),t._uU(12,"email:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"div",5)(15,"strong"),t._uU(16,"Calificaci\xf3n:"),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"div",6)(19,"div",7)(20,"span")(21,"mat-icon",8),t.NdJ("click",function(){return s.onClick("1")}),t._uU(22,"perm_identity"),t.qZA(),t.TgZ(23,"mat-icon",9),t._uU(24,"task_alt"),t.qZA(),t.TgZ(25,"mat-icon",9),t._uU(26,"forum"),t.qZA()(),t._uU(27," \xa0 "),t.TgZ(28,"span")(29,"mat-icon",8),t.NdJ("click",function(){return s.onClick("2")}),t._uU(30,"delete"),t.qZA(),t.TgZ(31,"mat-icon",8),t.NdJ("click",function(){return s.onClick("0")}),t._uU(32,"lock_open"),t.qZA(),t.TgZ(33,"mat-icon",8),t.NdJ("click",function(){return s.onClick("1")}),t._uU(34,"edit"),t.qZA()()()()()()()),2&n&&(t.Q6J("ngStyle",t.VKq(7,S,s.getBackColor())),t.xp6(2),t.Q6J("src",s.getPicture(),t.LSH),t.xp6(3),t.AsE("",s.staff.names," ",s.staff.second_names,""),t.xp6(4),t.hij(" ",s.staff.phone,""),t.xp6(4),t.hij(" ",s.staff.email,""),t.xp6(4),t.hij(" ",s.staff.stars,""))},dependencies:[c.PC,u.Hw]})}return i})();const Z=["editControlTrigger"];function y(i,F){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"app-staff",7),t.NdJ("onClicked",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.getStaffClicked(o))}),t.qZA()()}if(2&i){const e=F.$implicit;t.xp6(1),t.Q6J("staff",e)}}const x=[{path:"",component:(()=>{class i{constructor(e,n,s,o){this.sharedvar=e,this.dtb=n,this.dg=s,this.snkBar=o,this.deldup=0,this.staffList=[]}ngOnInit(){this.sub=this.dtb.getStaffByFilter(0,!1,0).subscribe(e=>{this.staffList=e})}getClicked(e){switch(e.index){case 2:this.onStaff();break;case 3:let n=document.getElementById("spanTrigger");n&&(n.style.display="",n.style.position="absolute",n.style.left=e.pageX+5+"px",n.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}getStaffClicked(e){switch(e.tag){case"0":this.snkBar.open(`Rieniciar contrase\xf1a: ${e.names} ${e.second_names}?.`,"Ok",{duration:5e3}).onAction().subscribe(n=>{e.password="",this.dtb.updateStaffAsync(e)});break;case"1":this.onStaff(e);break;case"2":this.snkBar.open(`Eliminar tasker: ${e.names} ${e.second_names}?.`,"Ok",{duration:5e3}).onAction().subscribe(n=>{e.active=!1,this.dtb.updateStaffAsync(e)})}}onStaff(e=null){let n=!1;e||(e={},n=!0);let s={schema:g,value:e,title:"Datos del Tasker",showImage:!0,image:e.picture,imgwidth:300,imgheight:300,newUsr:n};this.dg.aDefault(s).subscribe(o=>{o&&e&&(this.dg.updatePropResult(e,o),e.rol||(e.rol=[]),e.rol.includes("A")||e.rol.push("A"),s.image&&(e.picture=s.image),this.dtb.setStaff(e).subscribe({next:d=>{e=d}}),navigator.clipboard.writeText(`${this.sharedvar.TASKY_SERVER}tasker/?staff=${e._id}`).then(d=>{}).catch(d=>alert(d)),this.snkBar.open("V\xednculo al cliente copiado al portapapeles.","Ok",{duration:3e3}))})}onImportExcel(){}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(C.D),t.Y36(k.k),t.Y36(_.x),t.Y36(v.ux))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-staff-list"]],viewQuery:function(n,s){if(1&n&&t.Gf(Z,5),2&n){let o;t.iGM(o=t.CRH())&&(s.editControlTrigger=o.first)}},decls:12,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"flex","flex-wrap","p-2","gap-1"],[4,"ngFor","ngForOf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[3,"staff","onClicked"]],template:function(n,s){if(1&n&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(r){return s.getClicked(r)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3),t.YNc(4,y,2,1,"div",4),t.qZA(),t.TgZ(5,"mat-menu",null,5)(7,"button",6),t.NdJ("click",function(){return s.onImportExcel()}),t.TgZ(8,"mat-icon"),t._uU(9,"build"),t.qZA(),t._uU(10," Importar de Excel "),t.qZA(),t._UZ(11,"hr"),t.qZA()),2&n){const o=t.MAs(6);t.Q6J("buttons","11110")("nav_menu",!1),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Q6J("ngForOf",s.staffList)}},dependencies:[c.sg,f.VK,f.OP,f.p6,u.Hw,T.G,m]})}return i})()}];let A=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]})}return i})();var b=a(769);const w=[{path:"",component:m}];let U=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(w),l.Bz]})}return i})(),J=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[c.ez,U,u.Ps]})}return i})(),B=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[c.ez,A,f.Tx,u.Ps,b.O,J]})}return i})()}}]);