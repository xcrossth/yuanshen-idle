(function(e){function t(t){for(var r,n,l=t[0],s=t[1],c=t[2],i=0,p=[];i<l.length;i++)n=l[i],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&p.push(u[n][0]),u[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);v&&v(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==u[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},u={app:0},o=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-3cd7c415":"721f2cf6","chunk-4d4a3d1e":"3e062b77","chunk-9040bc8a":"b338145b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-3cd7c415":1,"chunk-4d4a3d1e":1,"chunk-9040bc8a":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-3cd7c415":"4b42ed48","chunk-4d4a3d1e":"c4d79af8","chunk-9040bc8a":"a9834fc4"}[e]+".css",u=s.p+r,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],i=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(i===r||i===u))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){c=p[l],i=c.getAttribute("data-href");if(i===r||i===u)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],v.parentNode.removeChild(v),a(o)},v.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){n[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=u[e]=[t,a]}));t.push(r[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e);var p=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(v);var a=u[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,a[1](p)}u[e]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var v=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2ea5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},u=[],o=(a("5c0b"),a("2877")),l={},s=Object(o["a"])(l,n,u,!1,null,null,null),c=s.exports,i=a("8c4f");r["a"].use(i["a"]);var p=new i["a"]({mode:"hash",base:"",routes:[{path:"/",name:"index",component:function(){return a.e("chunk-4d4a3d1e").then(a.bind(null,"1e4b"))}},{path:"/armor",name:"armor",component:function(){return a.e("chunk-3cd7c415").then(a.bind(null,"2131"))}},{path:"/acc",name:"acc",component:function(){return a.e("chunk-9040bc8a").then(a.bind(null,"2cb3"))}}]}),v=i["a"].prototype.push;i["a"].prototype.push=function(e){return v.call(this,e).catch((function(e){return e}))};a("a481"),a("c5f6");var f=a("2f62");r["a"].use(f["a"]);var h=new f["a"].Store({state:{sysInfo:[{type:"",msg:"欢迎你，旅行者。"}],playerAttribute:{GOLD:0,healthRecoverySpeed:1,endlessLv:0,attribute:{CURHP:{value:0,showValue:""},MAXHP:{value:0,showValue:""},ATK:{value:0,showValue:""},DEF:{value:0,showValue:""},REDUCDMG:{value:0,showValue:""},CRIT:{value:0,showValue:""},CRITDMG:{value:0,showValue:""}},weapon:{lv:1,itemType:"weapon",quality:{name:"破旧",qualityCoefficient:.7,probability:"0.25",color:"#a1a1a1",extraEntryNum:1},type:{name:"新手短剑",des:"新手菜鸡使用的短剑",iconSrc:"./icons/W_Sword001.png",entry:[{valCoefficient:.9,value:1,showVal:"+1",type:"ATK",name:"攻击力"}]},extraEntry:[{value:1,showVal:"+1",type:"ATK",name:"攻击力"}]},armor:{lv:1,itemType:"armor",quality:{name:"破旧",qualityCoefficient:.7,probability:"0.25",color:"#a1a1a1",extraEntryNum:1},type:{name:"新手布衣",des:"新手菜鸡穿的普通衣物",iconSrc:"./icons/A_A3.png",entry:[{valCoefficient:.9,value:1,showVal:"+1",type:"DEF",name:"防御力"}]},extraEntry:[{type:"HP",value:10,showVal:"+10",name:"生命值"}]},acc:{lv:1,itemType:"acc",quality:{name:"破旧",qualityCoefficient:.7,probability:"0.25",color:"#a1a1a1",extraEntryNum:1},type:{name:"新手指环",des:"一个普通的指环",iconSrc:"./icons/Ac_10.png",entry:[{valCoefficient:.9,value:20,showVal:"+20",type:"HP",name:"生命值"}]},extraEntry:[{type:"CRIT",value:10,showVal:"+10%",name:"暴击率"}]}}},mutations:{set_player_weapon:function(e,t){this.state.playerAttribute.weapon=t,b.$store.commit("set_player_attribute")},set_player_armor:function(e,t){this.state.playerAttribute.armor=t,b.$store.commit("set_player_attribute")},set_player_acc:function(e,t){this.state.playerAttribute.acc=t,b.$store.commit("set_player_attribute")},set_player_attribute:function(e,t){var a,r=e.playerAttribute,n=r.weapon,u=r.armor,o=r.acc,l=[],s=e.playerAttribute.attribute.CURHP.value,c=e.playerAttribute.attribute.MAXHP.value;s&&c&&(a=s/c);var i={CURHP:{value:0,showValue:""},MAXHP:{value:0,showValue:""},ATK:{value:0,showValue:""},DEF:{value:0,showValue:""},CRIT:{value:0,showValue:""},CRITDMG:{value:0,showValue:""}};l=[].concat(n.type.entry).concat(n.extraEntry).concat(u.type.entry).concat(u.extraEntry).concat(o.type.entry).concat(o.extraEntry),l.map((function(e){switch(e.type){case"ATK":i.ATK.value+=Number(e.value),i.ATK.showValue="+"+i.ATK.value;break;case"DEF":i.DEF.value+=Number(e.value),i.DEF.showValue="+"+i.DEF.value;break;case"HP":i.MAXHP.value+=Number(e.value),i.MAXHP.showValue="+"+i.MAXHP.value;break;case"CRIT":i.CRIT.value+=Number(e.value),i.CRIT.showValue="+"+i.CRIT.value+"%";break;case"CRITDMG":i.CRITDMG.value+=Number(e.value),i.CRITDMG.showValue="+"+i.CRITDMG.value+"%";break;default:break}}));var p=0,v=0,f=0;l.map((function(e){switch(e.type){case"ATKPERCENT":p+=Number(e.value);break;case"DEFPERCENT":v+=Number(e.value);break;case"HPPERCENT":f+=Number(e.value);break;default:break}})),i.ATK.value=parseInt(i.ATK.value*(100+p)/100),i.ATK.showValue="+"+i.ATK.value,i.DEF.value=parseInt(i.DEF.value*(100+v)/100),i.DEF.showValue="+"+i.DEF.value,i.MAXHP.value=parseInt(i.MAXHP.value*(100+f)/100),i.MAXHP.showValue="+"+i.MAXHP.value,i.MAXHP.value+=100,a?(i.CURHP.value=parseInt(i.MAXHP.value*a),i.CURHP.showValue="+"+i.CURHP.value):i.CURHP=b.$deepCopy(i.MAXHP),i.CRITDMG.value+=150;var h=i.ATK.value,y=i.CRIT.value,d=i.CRITDMG.value;y>100&&(y=100),i.DPS=parseFloat((1-y/100)*h*1+y/100*d/100*h*1);u=i.DEF.value;i.REDUCDMG=1-.06*u/(1+.06*u),this.state.playerAttribute.attribute=i},set_sys_info:function(e,t){this.state.sysInfo.push(t);var a=+new Date,r=new Date(a+288e5);this.state.sysInfo[this.state.sysInfo.length-1].time=r.toJSON().substr(11,8).replace("T"," ")},clear_sys_info:function(e,t){this.state.sysInfo.splice(1,this.state.sysInfo.length)},set_player_gold:function(e,t){this.state.playerAttribute.GOLD+=parseInt(t)},set_endless_lv:function(e,t){this.state.playerAttribute.endlessLv=parseInt(t)},set_operator_schema:function(e,t){this.state.operatorSchemaIsMobile=t},set_player_curhp:function(e,t){var a=this.state.playerAttribute.attribute.CURHP,r=this.state.playerAttribute.attribute.MAXHP;"full"==t?a.value=1:(a.value+=Number(t),a.value=parseInt(a.value),a.value>r.value&&(a.value=r.value))}}}),y=(a("2ea5"),new r["a"]({router:p,store:h,render:function(e){return e(c)}}).$mount("#app"));r["a"].prototype.$deepCopy=function(e){return JSON.parse(JSON.stringify(e))};var b=t["default"]=y},"5c0b":function(e,t,a){"use strict";a("e332")},e332:function(e,t,a){}});