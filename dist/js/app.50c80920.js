(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Gydio/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07a8":function(e,t,a){"use strict";var r=a("9313"),s=a.n(r);s.a},"0845":function(e,t,a){"use strict";var r=a("f6d9"),s=a.n(r);s.a},"08c1":function(e,t,a){"use strict";var r=a("0a36"),s=a.n(r);s.a},"0a36":function(e,t,a){},"1c0f":function(e,t,a){},"24d8":function(e,t,a){"use strict";var r=a("bada"),s=a.n(r);s.a},2542:function(e,t,a){},"25d7":function(e,t,a){},"2bd0":function(e,t,a){e.exports=a.p+"img/user-placeholder.c3e2f71c.jpg"},"35e2":function(e,t,a){},"3c54":function(e,t,a){"use strict";var r=a("d039f"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["Uploader"!==e.$route.name?a("Header"):e._e(),a("router-view")],1)},n=[],o={name:"App"},i=o,l=a("2877"),c=Object(l["a"])(i,s,n,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/explore"}},[e._v("Explore")])]},proxy:!0}])}),a("div",{staticClass:"uploader container"},[e._m(0),a("h2",{staticClass:"uploader-title"},[e._v("Upload your fav track.")]),a("div",{staticClass:"uploader-placeholder"},[a("input",{attrs:{id:"file_uploader",type:"file",disabled:e.database.externalLink||e.storage.isProgress,hidden:""},domProps:{value:null},on:{change:e.handleFile}}),a("label",{staticClass:"uploader-placeholder-btn",attrs:{for:"file_uploader"}},[e._v(" Choose file "),a("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1),a("span",[e._v(e._s(e.storage.fileName))]),e.storage.blob&&e.storage.fileName&&!e.storage.isProgress?a("font-awesome-icon",{staticClass:"remove-blob",attrs:{icon:["far","times-circle"]},on:{click:e.removeBlob}}):e._e(),a("p",[e._v("Or")])],1),a("div",{staticClass:"external-link"},[a("div",{staticClass:"external-link-inner"},[a("TextInput",{attrs:{label:"Copy/paste an external link e.g. youtube",isDisabled:Boolean(e.storage.blob),isValid:e.database.isValid,hasError:e.database.isError,errorMsg:e.database.errorMsg,handleOnChange:e.validateExternalURL},model:{value:e.database.externalLink,callback:function(t){e.$set(e.database,"externalLink",t)},expression:"database.externalLink"}}),e.database.uploadErrorMsg?a("Message",{attrs:{color:"red",text:e.database.uploadErrorMsg}}):e._e()],1)]),e.storage.isProgress?a("div",{staticClass:"progress-outer"},[a("Message",{attrs:{text:e.storage.progressState,icon:e.storage.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"},color:e.storage.isCancelled?"red":null}}),a("div",{staticClass:"progress"},[a("span",[e._v(e._s(e.storage.progress)+"%")]),a("span",{staticClass:"progress-inner",style:{width:e.storage.progress+"%"}}),a("span",{ref:"cancelUploadEl"},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]),a("p",{domProps:{innerHTML:e._s(e.storage.bytesTransferred/1e6+"/"+e.storage.totalBytes/1e6+" MB")}})],1):e._e(),a("div",{staticClass:"uploader-btn-wrap"},[a("button",e._g({attrs:{disabled:!e.storage.blob&&!e.database.externalLink||e.database.isError||e.storage.isProgress}},{click:e.storage.blob?e.upload_storage:e.upload_database}),[e._v(" Upload "),a("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"]}})],1),e.database.isSuccess?a("Message",{attrs:{text:e.database.progressState,icon:e.database.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"}}}):e._e()],1)])],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("h1",[e._v("Gydio")]),a("p",[e._v(" Your favorite place for "),a("strong",[e._v("Gaming/Cartoon")]),e._v(" related Music, Themes and Soundtracks. ")])])}],f=(a("4160"),a("b0c0"),a("ac1f"),a("466d"),a("5319"),a("159b"),a("3835")),g=(a("96cf"),a("1da1")),v=a("59ca"),h=a.n(v),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{style:Object.assign({},e.styleObj,{color:e.color})},[a("span",[e._v(e._s(e.text))]),e.icon?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],1)},_=[],x={name:"Message",props:{text:String,color:String,styleObj:Object,icon:Array,iconStyle:Object}},w=x,y=Object(l["a"])(w,b,_,!1,null,null,null),k=y.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{staticClass:"text-input-label"},[e._v(e._s(e.label)+" "+e._s(e.isRequired?"*":""))]),e.isSubmitted&&!Boolean(e.injectedVal)?a("Message",{attrs:{text:"This field is required!",color:"red",styleObj:{display:"inline-block"}}}):e._e(),e.isValid?a("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}}):e._e(),"checkbox"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"checkbox"},domProps:{checked:Array.isArray(e.injectedVal)?e._i(e.injectedVal,null)>-1:e.injectedVal},on:{change:[function(t){var a=e.injectedVal,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&(e.injectedVal=a.concat([n])):o>-1&&(e.injectedVal=a.slice(0,o).concat(a.slice(o+1)))}else e.injectedVal=s},e.handleOnChange]}}):"radio"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"radio"},domProps:{checked:e._q(e.injectedVal,null)},on:{change:[function(t){e.injectedVal=null},e.handleOnChange]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:e.inputType||"text"},domProps:{value:e.injectedVal},on:{change:e.handleOnChange,input:function(t){t.target.composing||(e.injectedVal=t.target.value)}}}),a("Message",{directives:[{name:"show",rawName:"v-show",value:e.hasError&&!e.isValid,expression:"hasError && !isValid"}],attrs:{color:"red",text:e.errorMsg,icon:["far","times-circle"]}})],1)},S=[],P=new r["a"],j={name:"TextInput",components:{Message:k},props:{label:String,inputType:String,value:String,isRequired:Boolean,isSubmitted:Boolean,isValid:Boolean,isDisabled:Boolean,hasError:Boolean,errorMsg:String,handleOnChange:{type:Function,default:function(){}}},data:function(){return{injectedVal:this.value}},mounted:function(){var e=this;P.$on("resetInput",(function(){return e.injectedVal=""}))},watch:{injectedVal:function(){this.$emit("input",this.injectedVal)}}},T=j,U=(a("fd7e"),Object(l["a"])(T,E,S,!1,null,"3c952a24",null)),M=U.exports,O=function(e,t,a,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();return{name:e,size:t,downloadUrl:a,user:r,creationDate:s}},V=function(e,t,a,r,s){return{uid:e,name:t,photoUrl:a,email:r,lastSignInTime:s}},C=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return{url:e,user:t,creationDate:a}},D={name:"Uploader",components:{Message:k,TextInput:M},data:function(){return{storage:{blob:null,progress:0,bytesTransferred:0,totalBytes:0,progressState:null,fileName:null,isProgress:!1,isSuccess:!1},database:{externalLink:null,progressState:null,isSuccess:!1,isError:!1,isValid:!1,errorMsg:"You need to input a vaild youtube video URL.",uploadErrorMsg:null,pattern:/^https:\/\/www.youtube.com\/watch\?v=\w+(-)?\w+/g}}},methods:{handleFile:function(e){var t,a=e.target;if(a.files.length){t=a.files[0];var r=t,s=r.name;this.storage.blob=t,this.storage.fileName=s}},upload_storage:function(){var e=this;this.database.progressState=null,this.database.isSuccess=!1;var t=this.storage.blob,a=t.name,r=t.size,s=h.a.auth,n=h.a.storage,o=h.a.firestore,i=o(),l=i.collection("music"),c=n().ref("music/"+a),u=c.put(this.storage.blob);this.cancelUpload=function(){e.$refs.cancelUploadEl&&e.$refs.cancelUploadEl.addEventListener("click",(function(){return u.cancel()}))},u.on("state_changed",(function(t){var r=t.bytesTransferred,s=t.totalBytes,n=t.state;if("running"===n){var o=Math.floor(r/s*100);e.storage.progressState="Uploading ".concat(a," to Firebase storage..."),e.storage.progress=o,e.storage.bytesTransferred=r,e.storage.totalBytes=s,e.storage.isProgress=!0}}),(function(t){e.storage.isCancelled=!0,e.storage.progressState=t.message,e.resetState("storage",[{key:"blob",value:null},{key:"fileName",value:null},{key:"isProgress",value:!1},{key:"isCancelled",value:!1}],2e3)}),Object(g["a"])(regeneratorRuntime.mark((function t(){var n,o,i,u,d,p,m,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s(),o=n.currentUser,o&&(i=o.uid,u=o.displayName,d=o.photoURL,p=o.email,m=o.metadata.lastSignInTime),t.prev=2,t.next=5,c.getDownloadURL();case 5:return f=t.sent,t.next=8,l.add(O(a,r,f,o&&V(i,u,d,p,m)));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.uploadErrorMsg=t.t0.message;case 13:e.storage.progressState="Uploading is done successfully",e.storage.isSuccess=!0,e.resetState("storage",[{key:"blob",value:null},{key:"isProgress",value:!1},{key:"fileName",value:null},{key:"isSuccess",value:!1}],2e3);case 16:case"end":return t.stop()}}),t,null,[[2,10]])}))))},upload_database:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,l,c,u,d,p,m,g,v,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.storage.isProgress=!1,e.storage.progressState=null,e.storage.isSuccess=!1,a=h.a.auth,r=h.a.firestore,s=a(),n=s.currentUser,n&&(o=n.uid,i=n.displayName,l=n.email,c=n.photoURL,u=n.metadata.lastSignInTime),d=r(),p=d.collection("youtube"),m=e.database.externalLink.match(e.database.pattern),g=Object(f["a"])(m,1),v=g[0],b=v.replace("watch?v=","embed/"),t.prev=10,t.next=13,p.add(C(b,n&&V(o,i,c,l,u)));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](10),e.uploadErrorMsg=t.t0.message;case 18:e.database.progressState="Video url uploaded successfully!",e.database.isSuccess=!0,e.resetState("database",[{key:"isError",value:!1},{key:"isValid",value:!1},{key:"isSuccess",value:!1},{key:"externalLink",value:""}],2e3,(function(){return P.$emit("resetInput",e.database.externalLink)}));case 21:case"end":return t.stop()}}),t,null,[[10,15]])})))()},validateExternalURL:function(){if(!this.database.pattern.test(this.database.externalLink))return this.database.externalLink?(this.database.isError=!0,void(this.database.isValid=!1)):void(this.database.isError=!1);this.database.isError=!1,this.database.isValid=!0},resetState:function(e,t,a,r){var s=this;setTimeout((function(){t.forEach((function(t){s[e][t.key]=t.value})),r&&r()}),a)},removeBlob:function(){this.storage.blob=null,this.storage.fileName=null},cancelUpload:function(){}},updated:function(){this.cancelUpload()}},A=D,R=(a("3c54"),Object(l["a"])(A,p,m,!1,null,"62eb182c",null)),L=R.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e.tracks?a("h1",[e._v("Explore")]):e._e(),e.tracks.length?e._e():a("Message",{attrs:{text:e.loadingState}}),e.errorMsg?a("Message",{attrs:{text:e.errorMsg,color:"red"}}):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-4"}},e._l(e.tracks,(function(t){var r=t.id,s=t.data;return a("Track",{key:r,attrs:{id:r,name:s.name,creationDate:s.creationDate,downloadUrl:s.downloadUrl,selected:r===e.selectedTrack.id,user:s.user,changeSelectedTrack:e.changeSelectedTrack}})})),1)],1),a("div",{staticClass:"container"},[a("h1",[e._v("External videos 'Youtube'")]),e.externalTracks.length?e._e():a("Message",{attrs:{text:e.loadingState}}),a("TrackWrapper",{attrs:{row:!0,basis:"col-6"}},e._l(e.externalTracks,(function(e){var t=e.id,r=e.data;return a("ExternalTrack",{key:t,attrs:{creationDate:r.creationDate,user:r.user,videoURL:r.url}})})),1)],1),a("audio",{attrs:{src:e.selectedTrack.value,autoplay:"",controls:"",controlslist:"nodownload"}})])},$=[],I=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrapper",class:[e.basis,{container:e.container}],style:e.container&&{"max-width":e.container+"px"}},[e.row?a("div",{staticClass:"row"},[e._t("default")],2):e._t("default")],2)}),N=[],H=(a("a9e3"),{name:"Wrapper",props:{basis:String,row:Boolean,container:Number}}),G=H,W=(a("24d8"),Object(l["a"])(G,I,N,!1,null,"6b5738a7",null)),F=W.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track col"},[a("div",{staticClass:"track-placeholder",style:{"background-image":e.img},on:{click:function(){return e.changeSelectedTrack(e.id,e.downloadUrl)}}},[a("font-awesome-icon",{style:{"font-size":"75px"},attrs:{icon:e.selected?["far","pause-circle"]:["far","play-circle"]}})],1),a("div",{staticClass:"track-name",attrs:{title:e.name}},[e._v(e._s(e.name))]),a("Date",{attrs:{creationDate:e.creationDate}}),a("User",{attrs:{user:e.user}})],1)},z=[],K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track-date"},[a("strong",[e._v("Uploaded:")]),e._v(" "+e._s(e.dateTimeFormatted)+" ")])},Y=[],J=(a("99af"),{name:"Date",props:{creationDate:Number},computed:{dateTimeFormatted:function(){var e=new Date(this.creationDate),t=e.toDateString(),a=e.toLocaleTimeString();return"".concat(t,", ").concat(a)}}}),Z=J,Q=(a("e735"),Object(l["a"])(Z,K,Y,!1,null,"006748da",null)),X=Q.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("router-link",{attrs:{to:"/profile/"+e.user.uid}},[a("img",{staticClass:"user-pic",attrs:{src:e.user.photoUrl,alt:""}}),a("span",[e._v(e._s(e.user.name))])]):a("div",[a("img",{staticClass:"user-pic",attrs:{src:e.userPlaceholder,alt:""}}),a("span",[e._v("Anonymous")])])},te=[],ae=a("2bd0"),re=a.n(ae),se={name:"User",data:function(){return{userPlaceholder:re.a}},props:{user:Object}},ne=se,oe=(a("08c1"),Object(l["a"])(ne,ee,te,!1,null,"3c08eddf",null)),ie=oe.exports,le={name:"Track",components:{Date:X,User:ie},props:{id:String,name:String,downloadUrl:String,creationDate:Number,img:String,user:Object,selected:Boolean,changeSelectedTrack:Function}},ce=le,ue=(a("eef8"),Object(l["a"])(ce,q,z,!1,null,"0cce208a",null)),de=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("iframe",{attrs:{height:"315","same-origin":"",src:e.videoURL,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("Date",{attrs:{creationDate:e.creationDate}}),a("User",{attrs:{user:e.user}})],1)},me=[],fe={name:"ExternalTrack",components:{Date:X,User:ie},props:{videoURL:String,user:Object,creationDate:Number}},ge=fe,ve=(a("9ed6"),Object(l["a"])(ge,pe,me,!1,null,"449cb90b",null)),he=ve.exports,be={name:"Explore",components:{Track:de,TrackWrapper:F,ExternalTrack:he,Message:k},data:function(){return{tracks:[],selectedTrack:{id:null,value:null},externalTracks:[],loadingState:null,errorMsg:null}},methods:{changeSelectedTrack:function(e,t){this.selectedTrack={id:e,value:t}}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingState="Loading...",a=h.a.firestore,r=a(),t.prev=3,t.next=6,r.collection("music").orderBy("creationDate","desc").get();case 6:s=t.sent,n=s.docs,o=n.map((function(e){return{id:e.id,data:e.data()}})),e.tracks=o,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.errorMsg=t.t0.message;case 15:return t.prev=15,t.next=18,r.collection("youtube").orderBy("creationDate","desc").get();case 18:i=t.sent,l=i.docs,c=l.map((function(e){return{id:e.id,data:e.data()}})),e.externalTracks=c,t.next=27;break;case 24:t.prev=24,t.t1=t["catch"](15),e.errorMsg=t.t1.message;case 27:e.tracks.length||e.externalTracks.length||(e.loadingState="No files to explore!");case 28:case"end":return t.stop()}}),t,null,[[3,12],[15,24]])})))()}},_e=be,xe=(a("07a8"),Object(l["a"])(_e,B,$,!1,null,"44b0bb46",null)),we=xe.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Register")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("TextInput",{attrs:{label:"Confirm password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword},model:{value:e.password.confirmPassword.value,callback:function(t){e.$set(e.password.confirmPassword,"value",t)},expression:"password.confirmPassword.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been created successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])})},ke=[],Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{class:[e.iconPosition,e.variant],style:{styleObj:e.styleObj},attrs:{text:e.text,disabled:e.isDisabled,type:e.type},on:{click:e.handleClick}},[e.icon&&"right"!==e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e(),e._t("default"),e.icon&&"right"===e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],2)},Se=[],Pe={name:"Button",props:{styleObj:Object,variant:String,text:String,type:String,icon:Array,iconStyle:Object,iconPosition:{default:"left",type:String},isDisabled:Boolean,handleClick:{type:Function,default:function(){}}}},je=Pe,Te=(a("f434"),Object(l["a"])(je,Ee,Se,!1,null,"4359959d",null)),Ue=Te.exports,Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-outer"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"dialog-title"},[e._t("dialog-title")],2),a("div",{staticClass:"dialog-body"},[e._t("dialog-body")],2),e._t("default")],2)])},Oe=[],Ve={name:"Dialog"},Ce=Ve,De=(a("bbae"),Object(l["a"])(Ce,Me,Oe,!1,null,"14404d46",null)),Ae=De.exports,Re=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},Le={name:"Register",components:{Button:Ue,Dialog:Ae,Message:k,TextInput:M},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:"",confirmPassword:{value:""}},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return Re(this.email.value)},matchPassword:function(){return Boolean(this.password.value)&&Boolean(this.password.confirmPassword.value)&&this.password.value===this.password.confirmPassword.value}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),e.password.value&&e.password.confirmPassword.value&&!e.matchPassword?(e.password.hasError=!0,e.password.errorMsg="Please match the 2 password inputs."):(e.password.hasError=!1,e.password.errorMsg=""),!e.isEmail||!e.matchPassword){t.next=19;break}return t.prev=4,t.next=7,h.a.auth().createUserWithEmailAndPassword(e.email.value,e.password.value);case 7:return a=h.a.auth(),r=a.currentUser,t.next=10,r.sendEmailVerification();case 10:setTimeout((function(){e.$router.push("/")}),1e3),e.isSuccess=!0,e.formHasError=null,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](4),e.isSuccess=!1,e.formHasError=t.t0;case 19:case"end":return t.stop()}}),t,null,[[4,15]])})))()}}},Be=Le,$e=Object(l["a"])(Be,ye,ke,!1,null,null,null),Ie=$e.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Login")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:Boolean(e.password.value)&&e.password.value.length>=6,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been Logged in successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])},[a("div",{staticClass:"login-social"},[a("Button",{style:{width:"100%","margin-right":0},attrs:{handleClick:e.googleLogin,icon:["fab","google"],variant:"danger"}},[e._v("Login with Google")]),a("Button",{style:{width:"100%","margin-right":0},attrs:{handleClick:e.facebookLogin,icon:["fab","facebook-f"]}},[e._v("Login with Facebook")])],1)])},He=[],Ge={name:"Login",components:{Button:Ue,Dialog:Ae,Message:k,TextInput:M},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:""},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return Re(this.email.value)}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),!e.email.value||!e.password.value){t.next=17;break}return t.prev=3,t.next=6,h.a.auth().signInWithEmailAndPassword(e.email.value,e.password.value);case 6:e.isSuccess=!0,e.formHasError=null,setTimeout((function(){e.$router.push("/")}),1e3),t.next=17;break;case 11:t.prev=11,t.t0=t["catch"](3),e.isSuccess=!1,e.formHasError=t.t0,e.isSubmitted=!1,P.$emit("resetInput","");case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()},facebookLogin:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new h.a.auth.FacebookAuthProvider,t.prev=1,t.next=4,h.a.auth().signInWithPopup(a);case 4:setTimeout((function(){e.$router.push("/")}),1e3),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.formHasError=t.t0;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},googleLogin:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new h.a.auth.GoogleAuthProvider,t.prev=1,t.next=4,h.a.auth().signInWithPopup(a);case 4:setTimeout((function(){e.$router.push("/")}),1e3),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.formHasError=t.t0;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},We=Ge,Fe=(a("7808"),Object(l["a"])(We,Ne,He,!1,null,"ef6dd090",null)),qe=Fe.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[a("h1",[e._v(" Welcome to "),a("span",{staticStyle:{color:"lightcoral"}},[e._v(e._s(e.user.displayName))]),e._v("'s profile. ")]),a("div",{staticStyle:{"margin-bottom":"10px"}},[a("img",{attrs:{src:e.user.photoURL,alt:""}})]),a("div",[e._v("email: "+e._s(e.user.email))]),a("p",[e._v(e._s(e.errorMsg))])]):e._e()},Ke=[],Ye=(a("d3b7"),{name:"User",data:function(){return{user:null,errorMsg:null}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="https://gydio-server.herokuapp.com/api/users/",t.prev=1,t.next=4,fetch("".concat(a).concat(e.$route.params.id),{mode:"cors"});case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,e.user=s,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.errorMsg=t.t0.message;case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}),Je=Ye,Ze=(a("0845"),Object(l["a"])(Je,ze,Ke,!1,null,"1fd5ba4a",null)),Qe=Ze.exports;r["a"].use(d["a"]);var Xe=[{path:"/",component:L,name:"Uploader"},{path:"/explore",component:we,name:"Explore"},{path:"/register",component:Ie,name:"Register"},{path:"/login",component:qe,name:"Login"},{path:"/profile/:id",component:Qe,name:"Profile"}],et=new d["a"]({routes:Xe}),tt=a("ecee"),at=a("c074"),rt=a("b702"),st=a("f2d1"),nt=a("ad3d"),ot=(a("1c0f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"nav"},[e._t("nav-left",[a("div",{staticClass:"back",on:{click:e.stepBackward}},[e._v("Back")])]),e.user?a("ul",{staticClass:"nav-right"},[e.user.email&&!e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.emailUsername))])]):e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.firstName))])]):e._e(),e.user.photoURL?a("li",{staticClass:"nav-right-img"},[a("img",{attrs:{src:e.user.photoURL,alt:""}})]):e._e(),a("li",[a("a",{on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("Logout")])])]):a("ul",{staticClass:"nav-right"},[a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],2)])])}),it=[],lt=(a("1276"),{name:"Header",data:function(){return{user:null,firstName:null,emailUsername:null,isAuthenticated:!1}},methods:{signOut:function(){h.a.auth().signOut()},stepBackward:function(){this.$router.go(-1)}},mounted:function(){var e=this;h.a.auth().onAuthStateChanged((function(t){if(t){e.user=t;var a=t.email&&t.email.split("@")[0],r=t.displayName&&t.displayName.split(" ")[0];return e.firstName=r,void(e.emailUsername=a)}e.user=null}))}}),ct=lt,ut=(a("ea7d"),Object(l["a"])(ct,ot,it,!1,null,"7889a4b4",null)),dt=ut.exports;a("588e"),a("ea7b"),a("66ce"),a("e71f");tt["c"].add(at["c"],at["b"],at["a"],rt["c"],st["a"],st["b"],rt["b"],rt["a"]),r["a"].component("font-awesome-icon",nt["a"]),r["a"].component("Header",dt);var pt=Object({VUE_APP_USERS_ENDPOINT:"https://gydio-server.herokuapp.com/api/users/",NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",VUE_APP_AUTH_DOMAIN:"musicstream-cb9d3.firebaseapp.com",VUE_APP_DATA_BASEURL:"https://musicstream-cb9d3.firebaseio.com",VUE_APP_PROJECT_ID:"musicstream-cb9d3",VUE_APP_STORAGE_BUCKET:"musicstream-cb9d3.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"801591518704",VUE_APP_APP_ID:"1:801591518704:web:fe152ffb22de13e8fc2935",BASE_URL:"/Gydio/dist/"}),mt=pt.VUE_APP_API_KEY,ft=pt.VUE_APP_AUTH_DOMAIN,gt=pt.VUE_APP_DATA_BASEURL,vt=pt.VUE_APP_PROJECT_ID,ht=pt.VUE_APP_STORAGE_BUCKET,bt=pt.VUE_APP_MESSAGING_SENDER_ID,_t=pt.VUE_APP_APP_ID,xt={apiKey:mt,authDomain:ft,databaseURL:gt,projectId:vt,storageBucket:ht,messagingSenderId:bt,appId:_t};h.a.initializeApp(xt),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)},router:et}).$mount("#app")},"62d1":function(e,t,a){},7808:function(e,t,a){"use strict";var r=a("2542"),s=a.n(r);s.a},"8a03":function(e,t,a){},9313:function(e,t,a){},"9ed6":function(e,t,a){"use strict";var r=a("8a03"),s=a.n(r);s.a},bada:function(e,t,a){},bbae:function(e,t,a){"use strict";var r=a("25d7"),s=a.n(r);s.a},cccd:function(e,t,a){},d039f:function(e,t,a){},d164:function(e,t,a){},e463:function(e,t,a){},e735:function(e,t,a){"use strict";var r=a("e463"),s=a.n(r);s.a},ea7d:function(e,t,a){"use strict";var r=a("62d1"),s=a.n(r);s.a},eef8:function(e,t,a){"use strict";var r=a("35e2"),s=a.n(r);s.a},f434:function(e,t,a){"use strict";var r=a("d164"),s=a.n(r);s.a},f6d9:function(e,t,a){},fd7e:function(e,t,a){"use strict";var r=a("cccd"),s=a.n(r);s.a}});
//# sourceMappingURL=app.50c80920.js.map