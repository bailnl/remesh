var K=Object.defineProperty,U=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var z=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))V.call(e,n)&&z(t,n,e[n]);if(I)for(var n of I(e))tt.call(e,n)&&z(t,n,e[n]);return t},S=(t,e)=>U(t,Z(e));import{R as et,r as w,a as y,j as Y,c as nt}from"./jsx-runtime.a8396eb8.js";import{g as A,S as ot,_ as P,a as F,s as rt,O as it,n as at,R as $,u as st,b as ct,t as D,c as ut,d as lt,e as dt}from"./remesh-logger.45390822.js";import{f as ft}from"./filter.526c2a27.js";import{m as pt,p as ht,i as vt,E as mt,b as yt}from"./mergeAll.7e096dba.js";import{f as xt,o as H,c as N,m as L}from"./map.596f380b.js";var j={now:function(){return(j.delegate||Date).now()},delegate:void 0},gt=function(t){A(e,t);function e(n,o){return t.call(this)||this}return e.prototype.schedule=function(n,o){return this},e}(ot),G={setInterval:function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var r=G.delegate;return r!=null&&r.setInterval?r.setInterval.apply(r,P([t,e],F(n))):setInterval.apply(void 0,P([t,e],F(n)))},clearInterval:function(t){var e=G.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},St=function(t){A(e,t);function e(n,o){var r=t.call(this,n,o)||this;return r.scheduler=n,r.work=o,r.pending=!1,r}return e.prototype.schedule=function(n,o){if(o===void 0&&(o=0),this.closed)return this;this.state=n;var r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,o)),this.pending=!0,this.delay=o,this.id=this.id||this.requestAsyncId(s,this.id,o),this},e.prototype.requestAsyncId=function(n,o,r){return r===void 0&&(r=0),G.setInterval(n.flush.bind(n,this),r)},e.prototype.recycleAsyncId=function(n,o,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return o;G.clearInterval(o)},e.prototype.execute=function(n,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(n,o);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,o){var r=!1,s;try{this.work(n)}catch(a){r=!0,s=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,o=n.id,r=n.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,rt(s,this),o!=null&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(gt),_=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,o){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(o,n)},t.now=j.now,t}(),Ct=function(t){A(e,t);function e(n,o){o===void 0&&(o=_.now);var r=t.call(this,n,o)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return e.prototype.flush=function(n){var o=this.actions;if(this._active){o.push(n);return}var r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=o.shift());if(this._active=!1,r){for(;n=o.shift();)n.unsubscribe();throw r}},e}(_),O=new Ct(St),wt=O;function bt(t){return t instanceof Date&&!isNaN(t)}function kt(){return pt(1)}function Gt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return kt()(xt(t,ht(t)))}function At(t,e,n){t===void 0&&(t=0),n===void 0&&(n=wt);var o=-1;return e!=null&&(vt(e)?n=e:o=e),new it(function(r){var s=bt(t)?+t-n.now():t;s<0&&(s=0);var a=0;return n.schedule(function(){r.closed||(r.next(a++),0<=o?this.schedule(void 0,o):r.complete())},s)})}function B(t){return t<=0?function(){return mt}:H(function(e,n){var o=0;e.subscribe(N(n,function(r){++o<=t&&(n.next(r),t<=o&&n.complete())}))})}function Et(){return H(function(t,e){t.subscribe(N(e,at))})}function Mt(t){return L(function(){return t})}function X(t,e){return e?function(n){return Gt(e.pipe(B(1),Et()),n.pipe(X(t)))}:yt(function(n,o){return t(n,o).pipe(B(1),Mt(n))})}function Rt(t,e){e===void 0&&(e=O);var n=At(t,e);return X(function(){return n})}const b=et.createContext({left:0,top:0,gridSize:60,chessSize:40}),It=t=>{const{left:e,top:n,gridSize:o}=t,r=e+o/2,s=n+o/2,a=(i,c,u,p)=>`M${r+i*o},${s+c*o} L${r+u*o},${s+p*o}`,f=(i,c)=>{const u=[];let d,m,x,h;return i!=0&&(d=i-.1,m=c-.1-.25,x=i-.1-.25,h=c-.1,u.push(a(d,m,d,h)),u.push(a(d,h,x,h)),m=c+.1+.25,h=c+.1,u.push(a(d,m,d,h)),u.push(a(d,h,x,h))),i!=8&&(d=i+.1,m=c-.1-.25,x=i+.1+.25,h=c-.1,u.push(a(d,m,d,h)),u.push(a(d,h,x,h)),m=c+.1+.25,h=c+.1,u.push(a(d,m,d,h)),u.push(a(d,h,x,h))),u};return[[1,2],[7,2],[1,7],[7,7],[0,3],[2,3],[4,3],[6,3],[8,3],[0,6],[2,6],[4,6],[6,6],[8,6]].map(([i,c])=>f(i,c)).reduce((i,c)=>i.concat(c),[]).concat(new Array(8).fill(0).map((i,c)=>a(0,c+1,8,c+1))).concat(new Array(7).fill(0).map((i,c)=>a(c+1,0,c+1,4))).concat(new Array(7).fill(0).map((i,c)=>a(c+1,5,c+1,9))).concat([a(3,0,5,2),a(5,0,3,2),a(3,7,5,9),a(3,9,5,7)])},zt=()=>{const t=w.exports.useContext(b),{left:e,top:n,gridSize:o,chessSize:r}=t,s=e+o/2,a=n+o/2,f=o*8,l=o*9,i=It(t),c={position:"absolute",left:0,top:0,width:f+r,height:l+r};return y("svg",{xmlns:"http://www.w3.org/2000/svg",style:c,children:Y("g",{children:[y("rect",{x:s,y:a,width:f,height:l,fill:"none",stroke:"#000000",strokeWidth:"3"}),i.map((u,p)=>y("path",{fill:"none",stroke:"#000000",d:u},p))]})})};var v=(t=>(t[t.General=100]="General",t[t.Chariot=50]="Chariot",t[t.Cannon=30]="Cannon",t[t.Horse=29]="Horse",t[t.Elephant=16]="Elephant",t[t.Guard=10]="Guard",t[t.Soldier=1]="Soldier",t))(v||{}),C=(t=>(t[t.Red=1]="Red",t[t.Black=-1]="Black",t))(C||{});const Pt=(t,e)=>t.x===e.x&&t.y===e.y,Ft=(t,{x:e,y:n})=>{switch(t){case-1:return!(e<3||e>5||n>2&&n<7);case 1:return!(e<3||e>5||n>2&&n<7)}},Dt=(t,{x:e,y:n})=>{switch(t){case-1:return[[3,0],[3,2],[5,0],[5,2],[4,1]].find(([o,r])=>o===e&&r===n);case 1:return[[3,7],[3,9],[5,7],[5,9],[4,8]].find(([o,r])=>o===e&&r===n)}},_t=(t,{x:e,y:n})=>{switch(t){case-1:return[[0,2],[2,0],[2,4],[4,2],[6,0],[6,4],[8,2]].find(([o,r])=>o===e&&r===n);case 1:return[[0,7],[2,5],[2,9],[4,7],[6,5],[6,9],[8,7]].find(([o,r])=>o===e&&r===n)}},Bt=(t,{x:e,y:n})=>{switch(t){case-1:return!(n<3||n<5&&e%2===1);case 1:return!(n>6||n>4&&e%2===1)}},qt=t=>({position:e},{x:n,y:o})=>{if(e.x!==n&&e.y!==o)return!1;if(t.situation.find(r=>r.position.x===n&&r.position.y===o)){if(e.y===o)return t.situation.filter(r=>r.position.y===o&&(r.position.x-n)*(r.position.x-e.x)<0).length===1;if(e.x===n)return t.situation.filter(r=>r.position.x===n&&(r.position.y-o)*(r.position.y-e.y)<0).length===1}return!1},Wt=()=>({position:t},{x:e,y:n})=>Math.abs(t.y-n)+Math.abs(t.x-e)===1,Qt=()=>({position:t},{x:e,y:n})=>{const o=r=>r*r;return o(t.x-e)+o(t.y-n)===2},Yt=t=>({position:e},{x:n,y:o})=>Math.abs(e.x-n)!==2||Math.abs(e.y-o)!==2?!1:!t.situation.find(r=>r.position.x===(e.x+n)/2&&r.position.y===(e.y+o)/2),$t=t=>({position:e},{x:n,y:o})=>{const r=e.x-n,s=e.y-o;return r*r+s*s===5&&!t.situation.find(a=>a.position.x===Math.round((2*e.x+n)/3)&&a.position.y===Math.round((2*e.y+o)/3))},q=t=>({position:e},{x:n,y:o})=>e.x!==n&&e.y!==o?!1:e.y===o?!t.situation.find(r=>r.position.y===o&&(r.position.x-n)*(r.position.x-e.x)<0):e.x===n?!t.situation.find(r=>r.position.x===n&&(r.position.y-o)*(r.position.y-e.y)<0):!1,Ht=()=>({position:t,color:e},{x:n,y:o})=>{switch(e){case-1:return o>=t.y&&Math.abs(n-t.x)+Math.abs(o-t.y)===1;case 1:return o<=t.y&&Math.abs(n-t.x)+Math.abs(o-t.y)===1}},E=t=>(e,n)=>{const{color:o,value:r}=e;switch(r){case 100:return Ft(o,n)&&Wt()(e,n);case 10:return Dt(o,n)&&Qt()(e,n);case 16:return _t(o,n)&&Yt(t)(e,n);case 29:return $t(t)(e,n);case 50:return q(t)(e,n);case 30:return q(t)(e,n);case 1:return Bt(o,n)&&Ht()(e,n)}},T=t=>(e,n)=>e.color===n.color?!1:e.value===30?qt(t)(e,n.position):t.situation.find(o=>Pt(o.position,n.position))&&E(t)(e,n.position),Nt=t=>S(g({},t),{selected:!0}),M=t=>S(g({},t),{selected:!1}),Lt=t=>S(g({},t),{marked:!0}),R=t=>S(g({},t),{marked:!1}),J=t=>e=>S(g({},e),{position:t}),jt=t=>e=>{const{currentPlayer:n,situation:o}=e,{x:r,y:s}=t;let a;const f=o.map(i=>R(M(i))).map(i=>i.position.x===r&&i.position.y===s?(a=Nt(i),a):i).map(i=>T(e)(a,i)?Lt(i):i),l=new Array(90).fill(null).map((i,c)=>{const u=c%9,p=(c-u)/9;return{x:u,y:p}}).filter(i=>E(e)(a,i));return{currentPlayer:n,selectedChess:a,situation:f,markers:l}},Ot=t=>e=>{const{currentPlayer:n,situation:o,selectedChess:r}=e;if(r&&E(e)(r,t)){const{x:s,y:a}=r.position,f=o.map(l=>l.position.x===s&&l.position.y===a?J(t)(l):l).map(l=>R(M(l)));return{currentPlayer:-n,selectedChess:void 0,situation:f,markers:[]}}return e},Xt=t=>e=>{const{currentPlayer:n,situation:o,selectedChess:r}=e,s=o.find(a=>a.position.x===t.x&&a.position.y===t.y);if(r&&s&&T(e)(r,s)){const{x:a,y:f}=r.position,l=o.map(i=>i.position.x===a&&i.position.y===f?J(t)(i):i.position.x===t.x&&i.position.y===t.y?null:i).filter(i=>!!i).map(i=>R(M(i)));return{currentPlayer:-n,selectedChess:void 0,situation:l,markers:[]}}return e},Tt=t=>t.some(o=>o.color===1&&o.value===100)?t.some(o=>o.color===-1&&o.value===100)?"playing":"red-win":"black-win",Jt=[{color:-1,value:50,position:{x:0,y:0}},{color:-1,value:29,position:{x:1,y:0}},{color:-1,value:16,position:{x:2,y:0}},{color:-1,value:10,position:{x:3,y:0}},{color:-1,value:100,position:{x:4,y:0}},{color:-1,value:10,position:{x:5,y:0}},{color:-1,value:16,position:{x:6,y:0}},{color:-1,value:29,position:{x:7,y:0}},{color:-1,value:50,position:{x:8,y:0}},{color:-1,value:30,position:{x:1,y:2}},{color:-1,value:30,position:{x:7,y:2}},{color:-1,value:1,position:{x:0,y:3}},{color:-1,value:1,position:{x:2,y:3}},{color:-1,value:1,position:{x:4,y:3}},{color:-1,value:1,position:{x:6,y:3}},{color:-1,value:1,position:{x:8,y:3}},{color:1,value:1,position:{x:0,y:6}},{color:1,value:1,position:{x:2,y:6}},{color:1,value:1,position:{x:4,y:6}},{color:1,value:1,position:{x:6,y:6}},{color:1,value:1,position:{x:8,y:6}},{color:1,value:30,position:{x:1,y:7}},{color:1,value:30,position:{x:7,y:7}},{color:1,value:50,position:{x:0,y:9}},{color:1,value:29,position:{x:1,y:9}},{color:1,value:16,position:{x:2,y:9}},{color:1,value:10,position:{x:3,y:9}},{color:1,value:100,position:{x:4,y:9}},{color:1,value:10,position:{x:5,y:9}},{color:1,value:16,position:{x:6,y:9}},{color:1,value:29,position:{x:7,y:9}},{color:1,value:50,position:{x:8,y:9}}],Kt=$.domain({name:"GameDomain",impl:t=>{const e={currentPlayer:1,selectedChess:void 0,situation:Jt,markers:[]},n=t.state({name:"GameState",default:e}),o=t.query({name:"GameQuery",impl:({get:u})=>u(n())}),r=t.query({name:"GameStatusQuery",impl:({get:u})=>{const{situation:p}=u(o());return Tt(p)}}),s=t.event({name:"GameOverEvent"}),a=t.event({name:"NotYourMoveEvent"}),f=t.command({name:"ResetGameStateCommand",impl:()=>n().new(e)}),l=t.command({name:"SelectChessCommand",impl({get:u},p){if(u(r())!=="playing")return s();const d=u(n()),{currentPlayer:m,selectedChess:x}=d;return p.color===m?[n().new(jt(p.position)(d))]:x?[n().new(Xt(p.position)(d))]:[a()]}}),i=t.command({name:"MoveChessCommand",impl({get:u},p){if(u(r())!=="playing")return s();const d=u(n()),{selectedChess:m}=d;return m?[n().new(Ot(p)(d))]:[a()]}}),c=t.command$({name:"CheckGameStatusCommand",impl:({fromQuery:u})=>u(r()).pipe(ft(p=>p!=="playing"),Rt(100),L(()=>s()))});return t.ignite(()=>c()),{query:{GameQuery:o,GameStatusQuery:r},command:{SelectChessCommand:l,MoveChessCommand:i,ResetGameStateCommand:f},event:{NotYourMoveEvent:a,GameOverEvent:s}}}}),W=t=>({[C.Red]:"red",[C.Black]:"black"})[t],Ut=(t,e)=>({[C.Red]:{[v.General]:"\u5E05",[v.Guard]:"\u4ED5",[v.Elephant]:"\u76F8",[v.Horse]:"\u99AC",[v.Chariot]:"\u8ECA",[v.Cannon]:"\u70AE",[v.Soldier]:"\u5175"},[C.Black]:{[v.General]:"\u5C06",[v.Guard]:"\u58EB",[v.Elephant]:"\u8C61",[v.Horse]:"\u9A6C",[v.Chariot]:"\u8F66",[v.Cannon]:"\u7832",[v.Soldier]:"\u5352"}})[t][e],Zt=t=>{const{chess:e,onClick:n}=t,{color:o,value:r,position:{x:s,y:a},selected:f,marked:l}=e,{chessSize:i,gridSize:c,left:u,top:p}=w.exports.useContext(b),k={position:"absolute",zIndex:10,backgroundColor:"white",fontSize:26,textAlign:"center",borderWidth:2,width:i,height:i,cursor:"pointer",left:u+s*c+(c-i)/2-2,top:p+a*c+(c-i)/2-2,borderStyle:f?"dashed":"solid",borderColor:l?"aqua":W(o),borderRadius:i/2+1,color:W(o)};return y("div",{onClick:()=>n(e),style:k,children:Ut(o,r)})},Vt=t=>{const{marker:e,onClick:n}=t,{x:o,y:r}=e,{chessSize:s,gridSize:a,left:f,top:l}=w.exports.useContext(b),i={position:"absolute",borderWidth:2,borderStyle:"dashed",borderColor:"green",backgroundColor:"white",width:s/2,height:s/2,left:f+o*a+s/4+(a-s)/2-2,top:l+r*a+s/4+(a-s)/2-2};return y("div",{onClick:()=>n(e),style:i})},te=()=>{const{left:t,top:e,gridSize:n}=w.exports.useContext(b),o=st(Kt()),r=ct(o.query.GameQuery());D(o.event.NotYourMoveEvent,()=>{alert("\u4E0D\u8BE5\u4F60\u8D70")}),D(o.event.GameOverEvent,()=>{window.confirm("\u6E38\u620F\u7ED3\u675F\uFF0C\u662F\u5426\u91CD\u65B0\u5F00\u59CB\uFF1F")&&o.command.ResetGameStateCommand()});const s={width:t+9*n,height:e+10*n},{situation:a,markers:f}=r;return Y("div",{style:s,children:[y(zt,{}),a.map((l,i)=>y(Zt,{chess:l,onClick:()=>o.command.SelectChessCommand(l)},i)),f.map((l,i)=>y(Vt,{marker:l,onClick:()=>o.command.MoveChessCommand(l)},i))]})},Q=document.getElementById("root");if(Q){const t=nt(Q),e=$.store({inspectors:[ut(),lt({include:["command","query","event","domain","command$","state"]})]});t.render(y(w.exports.StrictMode,{children:y(dt,{store:e,children:y(b.Provider,{value:{left:0,top:0,gridSize:60,chessSize:40},children:y(te,{})})})}))}
//# sourceMappingURL=index.fb69ebf2.js.map