(this["webpackJsonpeqdkp-formatter"]=this["webpackJsonpeqdkp-formatter"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),l=n.n(i),s=(n(15),n(16),n(17),n(4)),c=n(5),o=n(8),u=n(6),h=n(1),d=n(9),f=n(7),m=n.n(f),v=(n(19),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={value:"",finalText:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleFinalChange=n.handleFinalChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleFinalChange",value:function(e){this.setState({finalText:e.target.value})}},{key:"handleClick",value:function(e){var t=e.split("\n"),n=function(e){return!e||0===e.length},a="",r=[],i=t.map((function(e){if(e.includes("---------------------------"))a=e.replace("---------------------------","[ANONYMOUS] "),e;else{if(e.trim().includes("Players on EverQuest:"))return;if(e.includes("There are "))return;if(e.startsWith("+")||e.startsWith("-")||e.includes("="))r.push(e);else{var t=e.replace(/\s*LFG\s*/g,"").replace(/\s*AFK\s*/g,"").replace(/\s*\(.*?\)\s*/g,"").replace(/\s*\[.*?\]\s*/g,"").replace(/\s*\<.*?\>\s*/g,"");if(!n(t)){if(n(a)){var i=m()(new Date).format("ddd MMM DD HH:mm:ss YYYY");a="[".concat(i,"] [ANONYMOUS] ")}return a+t}}}})).filter((function(e){return null!=e}));r.map((function(e){var t=e.split(",")[0].trim();if(t.startsWith("+")){var n=t.replace("+","");if(t.includes("=")){var r=n.split("="),l=r[0],s=r[1].replace("(","").split(")")[0],c=i.findIndex((function(e){return e.includes(s)}));-1!=c&&(i.splice(c,1),i.push(a+l))}else{-1==i.findIndex((function(e){return e.includes(n)}))&&i.push(a+n)}}if(t.startsWith("-")){var o=t.replace("-",""),u=i.findIndex((function(e){return e.includes(o)}));-1!=u&&i.splice(u,1)}})),this.setState({finalText:"invalid formatting"}),this.setState({finalText:i.join("\n")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container","data-tid":"container"},r.a.createElement("div",null,r.a.createElement("textarea",{className:"textbox",rows:50,cols:80,value:this.state.value,placeholder:"Insert Data here",onChange:this.handleChange})),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn",onClick:function(){return e.handleClick(e.state.value)},"data-tclass":"btn",type:"button"},r.a.createElement("i",{className:"fa fa-arrow-right"}))),r.a.createElement("div",null,r.a.createElement("textarea",{className:"textbox",rows:50,cols:80,value:this.state.finalText,onChange:this.handleFinalChange})))}}]),t}(r.a.Component));var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"EQDKP Converter"),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d15cf4e5.chunk.js.map