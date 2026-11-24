var Td=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},m_=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,v=(c&15)<<2|h>>6,R=h&63;u||(R=64,o||(v=64)),r.push(t[f],t[m],t[v],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Td(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):m_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let h=i<n.length?t[n.charAt(i)]:64;++i;let m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new za;let v=s<<2|c>>4;if(r.push(v),h!==64){let R=c<<4&240|h>>2;if(r.push(R),m!==64){let D=h<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},za=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},g_=function(n){let e=Td(n);return Ad.encodeByteArray(e,!0)},Jr=function(n){return g_(n).replace(/\./g,"")},Ka=function(n){try{return Ad.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function __(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var y_=()=>__().__FIREBASE_DEFAULTS__,v_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},w_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Ka(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return y_()||v_()||w_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bd=n=>{var e,t;return(t=(e=Is())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]};var $a=()=>{var n;return(n=Is())===null||n===void 0?void 0:n.config},Wa=n=>{var e;return(e=Is())===null||e===void 0?void 0:e[`_${n}`]};var ws=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Sd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Jr(JSON.stringify(t)),Jr(JSON.stringify(o)),""].join(".")}function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function I_(){var n;let e=(n=Is())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cd(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nd(){let n=he();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ha(){return!I_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Es(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var E_="FirebaseError",Ue=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=E_,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mt.prototype.create)}},mt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?T_(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,c,r)}};function T_(n,e){return n.replace(A_,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var A_=/\{\$([^}]+)}/g;function Od(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ot(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(Ed(s)&&Ed(o)){if(!Ot(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Ed(n){return n!==null&&typeof n=="object"}function jn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function xd(n,e){let t=new Ga(n,e);return t.subscribe.bind(t)}var Ga=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");b_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ja),i.error===void 0&&(i.error=ja),i.complete===void 0&&(i.complete=ja);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function b_(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ja(){}var kE=4*60*60*1e3;function ae(n){return n&&n._delegate?n._delegate:n}var ze=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var hn="[DEFAULT]";var Qa=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ws;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R_(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function S_(n){return n===hn?void 0:n}function R_(n){return n.instantiationMode==="EAGER"}var Ts=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Qa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var P_=[],Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));var C_={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},D_=Q.INFO,N_={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},k_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=N_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},xt=class{constructor(e){this.name=e,this._logLevel=D_,this._logHandler=k_,this._userLogHandler=null,P_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}};var O_=(n,e)=>e.some(t=>n instanceof t),Vd,Ld;function x_(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V_(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Md=new WeakMap,Ya=new WeakMap,Fd=new WeakMap,Ja=new WeakMap,Za=new WeakMap;function L_(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(rt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Md.set(t,n)}).catch(()=>{}),Za.set(e,n),e}function M_(n){if(Ya.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ya.set(n,e)}var Xa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ya.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ud(n){Xa=n(Xa)}function F_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(As(this),e,...t);return Fd.set(r,e.sort?e.sort():[e]),rt(r)}:V_().includes(n)?function(...e){return n.apply(As(this),e),rt(Md.get(this))}:function(...e){return rt(n.apply(As(this),e))}}function U_(n){return typeof n=="function"?F_(n):(n instanceof IDBTransaction&&M_(n),O_(n,x_())?new Proxy(n,Xa):n)}function rt(n){if(n instanceof IDBRequest)return L_(n);if(Ja.has(n))return Ja.get(n);let e=U_(n);return e!==n&&(Ja.set(n,e),Za.set(e,n)),e}var As=n=>Za.get(n);function qd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),c=rt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(rt(o.result),u.oldVersion,u.newVersion,rt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}var B_=["get","getKey","getAll","getAllKeys","count"],q_=["put","add","delete","clear"],ec=new Map;function Bd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=q_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||B_.includes(t)))return;let s=async function(o,...c){let u=this.transaction(o,i?"readwrite":"readonly"),h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return ec.set(e,s),s}Ud(n=>({...n,get:(e,t,r)=>Bd(e,t)||n.get(e,t,r),has:(e,t)=>!!Bd(e,t)||n.has(e,t)}));var nc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(j_(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function j_(n){let e=n.getComponent();return e?.type==="VERSION"}var rc="@firebase/app",jd="0.10.13";var gt=new xt("@firebase/app"),z_="@firebase/app-compat",G_="@firebase/analytics-compat",K_="@firebase/analytics",$_="@firebase/app-check-compat",W_="@firebase/app-check",H_="@firebase/auth",Q_="@firebase/auth-compat",J_="@firebase/database",Y_="@firebase/data-connect",X_="@firebase/database-compat",Z_="@firebase/functions",ey="@firebase/functions-compat",ty="@firebase/installations",ny="@firebase/installations-compat",ry="@firebase/messaging",iy="@firebase/messaging-compat",sy="@firebase/performance",oy="@firebase/performance-compat",ay="@firebase/remote-config",cy="@firebase/remote-config-compat",uy="@firebase/storage",ly="@firebase/storage-compat",hy="@firebase/firestore",dy="@firebase/vertexai-preview",fy="@firebase/firestore-compat",py="firebase",my="10.14.1";var ic="[DEFAULT]",gy={[rc]:"fire-core",[z_]:"fire-core-compat",[K_]:"fire-analytics",[G_]:"fire-analytics-compat",[W_]:"fire-app-check",[$_]:"fire-app-check-compat",[H_]:"fire-auth",[Q_]:"fire-auth-compat",[J_]:"fire-rtdb",[Y_]:"fire-data-connect",[X_]:"fire-rtdb-compat",[Z_]:"fire-fn",[ey]:"fire-fn-compat",[ty]:"fire-iid",[ny]:"fire-iid-compat",[ry]:"fire-fcm",[iy]:"fire-fcm-compat",[sy]:"fire-perf",[oy]:"fire-perf-compat",[ay]:"fire-rc",[cy]:"fire-rc-compat",[uy]:"fire-gcs",[ly]:"fire-gcs-compat",[hy]:"fire-fst",[fy]:"fire-fst-compat",[dy]:"fire-vertex","fire-js":"fire-js",[py]:"fire-js-all"};var bs=new Map,_y=new Map,sc=new Map;function zd(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lt(n){let e=n.name;if(sc.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(let t of bs.values())zd(t,n);for(let t of _y.values())zd(t,n);return!0}function Xr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n.settings!==void 0}var yy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new mt("app","Firebase",yy);var oc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}};var Mt=my;function uc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(t||(t=$a()),!t)throw Vt.create("no-options");let s=bs.get(i);if(s){if(Ot(t,s.options)&&Ot(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}let o=new Ts(i);for(let u of sc.values())o.addComponent(u);let c=new oc(t,r,o);return bs.set(i,c),c}function lc(n=ic){let e=bs.get(n);if(!e&&n===ic&&$a())return uc();if(!e)throw Vt.create("no-app",{appName:n});return e}function Ye(n,e,t){var r;let i=(r=gy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}Lt(new ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var vy="firebase-heartbeat-database",wy=1,Yr="firebase-heartbeat-store",tc=null;function Wd(){return tc||(tc=qd(vy,wy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),tc}async function Iy(n){try{let t=(await Wd()).transaction(Yr),r=await t.objectStore(Yr).get(Hd(n));return await t.done,r}catch(e){if(e instanceof Ue)gt.warn(e.message);else{let t=Vt.create("idb-get",{originalErrorMessage:e?.message});gt.warn(t.message)}}}async function Gd(n,e){try{let r=(await Wd()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(e,Hd(n)),await r.done}catch(t){if(t instanceof Ue)gt.warn(t.message);else{let r=Vt.create("idb-set",{originalErrorMessage:t?.message});gt.warn(r.message)}}}function Hd(n){return`${n.name}!${n.options.appId}`}var Ey=1024,Ty=30*24*60*60*1e3,ac=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new cc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let c=new Date(o.date).valueOf();return Date.now()-c<=Ty}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Kd(),{heartbeatsToSend:r,unsentEntries:i}=Ay(this._heartbeatsCache.heartbeats),s=Jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return gt.warn(t),""}}};function Kd(){return new Date().toISOString().substring(0,10)}function Ay(n,e=Ey){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$d(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$d(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var cc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Es()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Iy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function $d(n){return Jr(JSON.stringify({version:2,heartbeats:n})).length}function by(n){Lt(new ze("platform-logger",e=>new nc(e),"PRIVATE")),Lt(new ze("heartbeat",e=>new ac(e),"PRIVATE")),Ye(rc,jd,n),Ye(rc,jd,"esm2017"),Ye("fire-js","")}by("");var Sy="firebase",Ry="10.14.1";Ye(Sy,Ry,"app");function Ss(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var pf=ff,mf=new mt("auth","Firebase",ff());var ks=new xt("@firebase/auth");function Py(n,...e){ks.logLevel<=Q.WARN&&ks.warn(`Auth (${Mt}): ${n}`,...e)}function Ps(n,...e){ks.logLevel<=Q.ERROR&&ks.error(`Auth (${Mt}): ${n}`,...e)}function Ge(n,...e){throw Nc(n,...e)}function Ze(n,...e){return Nc(n,...e)}function Dc(n,e,t){let r=Object.assign(Object.assign({},pf()),{[e]:t});return new mt("auth","Firebase",r).create(e,{appName:n.name})}function Ut(n){return Dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gf(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(n,"argument-error"),Dc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return mf.create(n,...e)}function U(n,e,...t){if(!n)throw Nc(e,...t)}function it(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Ps(e),new Error(e)}function yt(n,e){n||it(e)}function fc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cy(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Dy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cy()||Cd()||"connection"in navigator)?navigator.onLine:!0}function Ny(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var dn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rd()||Dd()}get(){return Dy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function kc(n,e){yt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Os=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Oy=new dn(3e4,6e4);function we(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pe(n,e,t,r,i={}){return _f(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let c=jn(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);let h=Object.assign({method:e,headers:u},s);return Pd()||(h.referrerPolicy="no-referrer"),Os.fetch()(yf(n,n.config.apiHost,t,c),h)})}async function _f(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},ky),e);try{let i=new pc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Zr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Zr(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Zr(n,"user-disabled",o);let f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dc(n,f,h);Ge(n,f)}}catch(i){if(i instanceof Ue)throw i;Ge(n,"network-request-failed",{message:String(i)})}}async function mn(n,e,t,r,i={}){let s=await Pe(n,e,t,r,i);return"mfaPendingCredential"in s&&Ge(n,"multi-factor-auth-required",{_serverResponse:s}),s}function yf(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?kc(n.config,i):`${n.config.apiScheme}://${i}`}function xy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var pc=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),Oy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Zr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Ze(n,e,r);return i.customData._tokenResponse=t,i}function Jd(n){return n!==void 0&&n.enterprise!==void 0}var mc=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Vy(n,e){return Pe(n,"GET","/v2/recaptchaConfig",we(n,e))}async function Ly(n,e){return Pe(n,"POST","/v1/accounts:delete",e)}async function vf(n,e){return Pe(n,"POST","/v1/accounts:lookup",e)}function ei(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wf(n,e=!1){let t=ae(n),r=await t.getIdToken(e),i=Oc(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:ei(hc(i.auth_time)),issuedAtTime:ei(hc(i.iat)),expirationTime:ei(hc(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function hc(n){return Number(n)*1e3}function Oc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{let i=Ka(t);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Yd(n){let e=Oc(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&My(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function My({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var gc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ri=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function xs(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ni(n,vf(t,{idToken:r}));U(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ef(s.providerUserInfo):[],c=Fy(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function If(n){let e=ae(n);await xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ef(n){return n.map(e=>{var{providerId:t}=e,r=Ss(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Uy(n,e){let t=await _f(n,{},async()=>{let r=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yf(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Os.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function By(n,e){return Pe(n,"POST","/v2/accounts:revokeToken",we(n,e))}var ti=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");let t=Yd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Uy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return it("not implemented")}};function Ft(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var $n=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ss(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ri(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wf(this,e)}reload(){return If(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Ut(this.auth));let e=await this.getIdToken();return await ni(this,Ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,h,f;let m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:H,isAnonymous:X,providerData:K,stsTokenManager:w}=t;U(B&&w,e,"internal-error");let g=ti.fromJSON(this.name,w);U(typeof B=="string",e,"internal-error"),Ft(m,e.name),Ft(v,e.name),U(typeof H=="boolean",e,"internal-error"),U(typeof X=="boolean",e,"internal-error"),Ft(R,e.name),Ft(D,e.name),Ft(x,e.name),Ft(k,e.name),Ft(G,e.name),Ft(j,e.name);let y=new n({uid:B,auth:e,email:v,emailVerified:H,displayName:m,isAnonymous:X,photoURL:D,phoneNumber:R,tenantId:x,stsTokenManager:g,createdAt:G,lastLoginAt:j});return K&&Array.isArray(K)&&(y.providerData=K.map(I=>Object.assign({},I))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){let i=new ti;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xs(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];U(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Ef(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new ti;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ri(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}};var Xd=new Map;function _t(n){yt(n instanceof Function,"Expected a class definition");let e=Xd.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xd.set(n,e),e)}var Vs=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Vs.type="NONE";var _c=Vs;function Cs(n,e,t){return`firebase:${n}:${e}:${t}`}var Ls=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Cs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(_t(_c),e,r);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||_t(_c),o=Cs(r,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(o);if(f){let m=$n._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new n(s,e,r))}};function Zd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pf(e))return"Blackberry";if(Cf(e))return"Webos";if(Af(e))return"Safari";if((e.includes("chrome/")||bf(e))&&!e.includes("edge/"))return"Chrome";if(Rf(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Tf(n=he()){return/firefox\//i.test(n)}function Af(n=he()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bf(n=he()){return/crios\//i.test(n)}function Sf(n=he()){return/iemobile/i.test(n)}function Rf(n=he()){return/android/i.test(n)}function Pf(n=he()){return/blackberry/i.test(n)}function Cf(n=he()){return/webos/i.test(n)}function xc(n=he()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qy(n=he()){var e;return xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jy(){return Nd()&&document.documentMode===10}function Df(n=he()){return xc(n)||Rf(n)||Cf(n)||Pf(n)||/windows phone/i.test(n)||Sf(n)}function Nf(n,e=[]){let t;switch(n){case"Browser":t=Zd(he());break;case"Worker":t=`${Zd(he())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${r}`}var yc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,c)=>{try{let u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function zy(n,e={}){return Pe(n,"GET","/v2/passwordPolicy",we(n,e))}var Gy=6,vc=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Gy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var wc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ms(this),this.idTokenSubscription=new Ms(this),this.beforeStateQueue=new yc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await vf(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ny()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Ut(this));let t=e?ae(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await zy(this),t=new vc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await By(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&_t(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{let u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Py(`Error while retrieving App Check token: ${t.error}`),t?.token}};function It(n){return ae(n)}var Ms=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=xd(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ky(n){eo=n}function kf(n){return eo.loadJS(n)}function $y(){return eo.recaptchaEnterpriseScript}function Wy(){return eo.gapiScript}function Of(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Hy="recaptcha-enterprise",Qy="NO_RECAPTCHA",Ic=class{constructor(e){this.type=Hy,this.auth=It(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Vy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new mc(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){let u=window.grecaptcha;Jd(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Qy)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Jd(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$y();u.length!==0&&(u+=c),kf(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}};async function ef(n,e,t,r=!1){let i=new Ic(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tf(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await ef(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await ef(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function xf(n,e){let t=Xr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Ot(s,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function Jy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function to(n,e,t){let r=It(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Vf(e),{host:o,port:c}=Yy(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xy()}function Vf(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yy(n){let e=Vf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:nf(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:nf(o)}}}function nf(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Xy(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var fn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}};async function Zy(n,e){return Pe(n,"POST","/v1/accounts:signUp",e)}async function ev(n,e){return mn(n,"POST","/v1/accounts:signInWithPassword",we(n,e))}async function tv(n,e){return mn(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}async function nv(n,e){return mn(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}var ii=class n extends fn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tf(e,t,"signInWithPassword",ev);case"emailLink":return tv(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tf(e,r,"signUpPassword",Zy);case"emailLink":return nv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Kn(n,e){return mn(n,"POST","/v1/accounts:signInWithIdp",we(n,e))}var rv="http://localhost",vt=class n extends fn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ss(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){let e={requestUri:rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jn(t)}return e}};async function iv(n,e){return Pe(n,"POST","/v1/accounts:sendVerificationCode",we(n,e))}async function sv(n,e){return mn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e))}async function ov(n,e){let t=await mn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e));if(t.temporaryProof)throw Zr(n,"account-exists-with-different-credential",t);return t}var av={USER_NOT_FOUND:"user-not-found"};async function cv(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return mn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,t),av)}var si=class n extends fn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return sv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ov(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cv(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function uv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lv(n){let e=zn(Gn(n)).link,t=e?zn(Gn(e)).deep_link_id:null,r=zn(Gn(n)).deep_link_id;return(r?zn(Gn(r)).link:null)||r||t||e||n}var Fs=class n{constructor(e){var t,r,i,s,o,c;let u=zn(Gn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=uv((i=u.mode)!==null&&i!==void 0?i:null);U(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=lv(e);try{return new n(t)}catch{return null}}};var Wn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Fs.parseLink(t);return U(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}};Wn.PROVIDER_ID="password";Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Hn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Bt=class extends Hn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},oi=class n extends Bt{static credentialFromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),vt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),vt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return n.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return n.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new n(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}};var ai=class n extends Bt{constructor(){super("facebook.com")}static credential(e){return vt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";var wt=class n extends Bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";var ci=class n extends Bt{constructor(){super("github.com")}static credential(e){return vt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";var ui=class n extends Bt{constructor(){super("twitter.com")}static credential(e,t){return vt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";var li=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await $n._fromIdTokenResponse(e,r,i),o=rf(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=rf(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function rf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Ec=class n extends Ue{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Lf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,s,e,r):s})}async function hv(n,e,t=!1){let r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return li._forOperation(n,"link",r)}async function dv(n,e,t=!1){let{auth:r}=n;if(Xe(r.app))return Promise.reject(Ut(r));let i="reauthenticate";try{let s=await ni(n,Lf(r,i,e,n),t);U(s.idToken,r,"internal-error");let o=Oc(s.idToken);U(o,r,"internal-error");let{sub:c}=o;return U(n.uid===c,r,"user-mismatch"),li._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ge(r,"user-mismatch"),s}}async function Mf(n,e,t=!1){if(Xe(n.app))return Promise.reject(Ut(n));let r="signIn",i=await Lf(n,r,e),s=await li._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function no(n,e){return Mf(It(n),e)}function Vc(n,e){return ae(n).setPersistence(e)}function Ff(n,e,t,r){return ae(n).onIdTokenChanged(e,t,r)}function Uf(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function Lc(n,e,t,r){return ae(n).onAuthStateChanged(e,t,r)}function Mc(n){return ae(n).signOut()}function fv(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:start",we(n,e))}function pv(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:finalize",we(n,e))}function mv(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:start",we(n,e))}function gv(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:finalize",we(n,e))}var Us="__sak";var Bs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var _v=1e3,yv=10,qs=class extends Bs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yv):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};qs.type="LOCAL";var ro=qs;var js=class extends Bs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};js.type="SESSION";var Fc=js;function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var zs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(o).map(async h=>h(t.origin,s)),u=await vv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};zs.receivers=[];function Uc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Tc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{let h=Uc("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){let v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function st(){return window}function wv(n){st().location.href=n}function Bf(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Iv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ev(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tv(){return Bf()?self:null}var qf="firebaseLocalStorageDb",Av=1,Gs="firebaseLocalStorage",jf="fbase_key",pn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function io(n,e){return n.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function bv(){let n=indexedDB.deleteDatabase(qf);return new pn(n).toPromise()}function Ac(){let n=indexedDB.open(qf,Av);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Gs,{keyPath:jf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await bv(),e(await Ac()))})})}async function sf(n,e,t){let r=io(n,!0).put({[jf]:e,value:t});return new pn(r).toPromise()}async function Sv(n,e){let t=io(n,!1).get(e),r=await new pn(t).toPromise();return r===void 0?null:r.value}function of(n,e){let t=io(n,!0).delete(e);return new pn(t).toPromise()}var Rv=800,Pv=3,Ks=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Pv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(Tv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Iv(),!this.activeServiceWorker)return;this.sender=new Tc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ev()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Ac();return await sf(e,Us,"1"),await of(e,Us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Sv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>of(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=io(i,!1).getAll();return new pn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Ks.type="LOCAL";var zf=Ks;function Cv(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:start",we(n,e))}function Dv(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:finalize",we(n,e))}function Nv(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:finalize",we(n,e))}var oT=Of("rcb"),aT=new dn(3e4,6e4);var kv="recaptcha";async function Ov(n,e,t){var r;let i=await t.verify();try{U(typeof i=="string",n,"argument-error"),U(t.type===kv,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let o=s.session;if("phoneNumber"in s)return U(o.type==="enroll",n,"internal-error"),(await fv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{U(o.type==="signin",n,"internal-error");let c=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return U(c,n,"missing-multi-factor-info"),(await Cv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await iv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}var hi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return Ov(this.auth,e,ae(t))}static credential(e,t){return si._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?si._fromTokenResponse(t,r):null}};hi.PROVIDER_ID="phone";hi.PHONE_SIGN_IN_METHOD="phone";function Bc(n,e){return e?_t(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var di=class extends fn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function xv(n){return Mf(n.auth,new di(n),n.bypassAuthState)}function Vv(n){let{auth:e,user:t}=n;return U(t,e,"internal-error"),dv(t,new di(n),n.bypassAuthState)}async function Lv(n){let{auth:e,user:t}=n;return U(t,e,"internal-error"),hv(t,new di(n),n.bypassAuthState)}var $s=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xv;case"linkViaPopup":case"linkViaRedirect":return Lv;case"reauthViaPopup":case"reauthViaRedirect":return Vv;default:Ge(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Mv=new dn(2e3,1e4);async function qc(n,e,t){if(Xe(n.app))return Promise.reject(Ze(n,"operation-not-supported-in-this-environment"));let r=It(n);gf(n,e,Hn);let i=Bc(r,t);return new Ws(r,"signInViaPopup",e,i).executeNotNull()}var Ws=class n extends $s{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");let e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mv.get())};e()}};Ws.currentPopupAction=null;var Fv="pendingRedirect",Ds=new Map,bc=class extends $s{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ds.get(this.auth._key());if(!e){try{let r=await Uv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ds.set(this.auth._key(),e)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Uv(n,e){let t=Kf(e),r=Gf(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function Bv(n,e){return Gf(n)._set(Kf(e),"true")}function qv(n,e){Ds.set(n._key(),e)}function Gf(n){return _t(n._redirectPersistence)}function Kf(n){return Cs(Fv,n.config.apiKey,n.name)}function jc(n,e,t){return jv(n,e,t)}async function jv(n,e,t){if(Xe(n.app))return Promise.reject(Ut(n));let r=It(n);gf(n,e,Hn),await r._initializationPromise;let i=Bc(r,t);return await Bv(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function zc(n,e){return await It(n)._initializationPromise,$f(n,e,!1)}async function $f(n,e,t=!1){if(Xe(n.app))return Promise.reject(Ut(n));let r=It(n),i=Bc(r,e),o=await new bc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var zv=10*60*1e3,Sc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Wf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zv&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}};function af(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Gv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wf(n);default:return!1}}async function Kv(n,e={}){return Pe(n,"GET","/v1/projects",e)}var $v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Hv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Kv(n);for(let t of e)try{if(Qv(t))return}catch{}Ge(n,"unauthorized-domain")}function Qv(n){let e=fc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Wv.test(t))return!1;if($v.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Jv=new dn(3e4,6e4);function cf(){let n=st().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yv(n){return new Promise((e,t)=>{var r,i,s;function o(){cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cf(),t(Ze(n,"network-request-failed"))},timeout:Jv.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{let c=Of("iframefcb");return st()[c]=()=>{gapi.load?o():t(Ze(n,"network-request-failed"))},kf(`${Wy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ns=null,e})}var Ns=null;function Xv(n){return Ns=Ns||Yv(n),Ns}var Zv=new dn(5e3,15e3),ew="__/auth/iframe",tw="emulator/auth/iframe",nw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iw(n){let e=n.config;U(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?kc(e,tw):`https://${n.config.authDomain}/${ew}`,r={apiKey:e.apiKey,appName:n.name,v:Mt},i=rw.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${jn(r).slice(1)}`}async function sw(n){let e=await Xv(n),t=st().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:iw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=Ze(n,"network-request-failed"),c=st().setTimeout(()=>{s(o)},Zv.get());function u(){st().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}var ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aw=500,cw=600,uw="_blank",lw="http://localhost",Hs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function hw(n,e,t,r=aw,i=cw){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",u=Object.assign(Object.assign({},ow),{width:r.toString(),height:i.toString(),top:s,left:o}),h=he().toLowerCase();t&&(c=bf(h)?uw:t),Tf(h)&&(e=e||lw,u.scrollbars="yes");let f=Object.entries(u).reduce((v,[R,D])=>`${v}${R}=${D},`,"");if(qy(h)&&c!=="_self")return dw(e||"",c),new Hs(null);let m=window.open(e||"",c,f);U(m,n,"popup-blocked");try{m.focus()}catch{}return new Hs(m)}function dw(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var fw="__/auth/handler",pw="emulator/auth/handler",mw=encodeURIComponent("fac");async function uf(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mt,eventId:i};if(e instanceof Hn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof Bt){let f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);let c=o;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let u=await n._getAppCheckToken(),h=u?`#${mw}=${encodeURIComponent(u)}`:"";return`${gw(n)}?${jn(c).slice(1)}${h}`}function gw({config:n}){return n.emulator?kc(n,pw):`https://${n.authDomain}/${fw}`}var dc="webStorageSupport",Rc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fc,this._completeRedirectFn=$f,this._overrideRedirectResult=qv}async _openPopup(e,t,r,i){var s;yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await uf(e,t,r,fc(),i);return hw(e,o,Uc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await uf(e,t,r,fc(),i);return wv(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(yt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await sw(e),r=new Sc(e);return t.register("authEvent",i=>(U(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dc,{type:dc},i=>{var s;let o=(s=i?.[0])===null||s===void 0?void 0:s[dc];o!==void 0&&t(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Df()||Af()||xc()}},Hf=Rc,Qs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return it("unexpected MultiFactorSessionType")}}},Pc=class n extends Qs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return pv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Dv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Js=class{constructor(){}static assertion(e){return Pc._fromCredential(e)}};Js.FACTOR_ID="phone";var Ys=class{static assertionForEnrollment(e,t){return Xs._fromSecret(e,t)}static assertionForSignIn(e,t){return Xs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;U(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await mv(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Zs._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Ys.FACTOR_ID="totp";var Xs=class n extends Qs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return U(typeof this.secret<"u",e,"argument-error"),gv(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Nv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Zs=class n{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Rs(e)||Rs(t))&&(i=!0),i&&(Rs(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Rs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Rs(n){return typeof n>"u"||n?.length===0}var lf="@firebase/auth",hf="1.7.9";var Cc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function _w(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yw(n){Lt(new ze("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nf(n)},h=new wc(r,i,s,u);return Jy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new ze("auth-internal",e=>{let t=It(e.getProvider("auth").getImmediate());return(r=>new Cc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(lf,hf,_w(n)),Ye(lf,hf,"esm2017")}var vw=5*60,ww=Wa("authIdTokenMaxAge")||vw,df=null,Iw=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ww)return;let i=t?.token;df!==i&&(df=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gc(n=lc()){let e=Xr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=xf(n,{popupRedirectResolver:Hf,persistence:[zf,ro,Fc]}),r=Wa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=Iw(s.toString());Uf(t,o,()=>o(t.currentUser)),Ff(t,c=>o(c))}}let i=bd("auth");return i&&to(t,`http://${i}`),t}function Ew(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ky({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Ze("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yw("Browser");var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jf={};var qt,Kc;(function(){var n;function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(I,E,A){for(var _=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)_[dt-2]=arguments[dt];return g.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var I=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)I[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)I[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],E=w.g[2];var A=w.g[3],_=g+(A^y&(E^A))+I[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+I[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+I[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+I[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+I[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+I[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+I[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+I[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+I[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+I[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+I[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+I[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+I[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+I[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+I[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+I[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^A&(y^E))+I[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+I[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+I[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+I[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+I[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+I[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+I[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+I[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+I[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+I[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+I[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+I[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+I[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+I[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+I[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+I[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^A)+I[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+I[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+I[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+I[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+I[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+I[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+I[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+I[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+I[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+I[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+I[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+I[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+I[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+I[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+I[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+I[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~A))+I[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+I[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+I[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+I[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+I[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+I[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+I[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+I[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+I[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+I[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+I[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+I[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+I[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+I[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+I[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,I=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=y;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(I[E++]=w.charCodeAt(A++),E==this.blockSize){i(this,I),E=0;break}}else for(;A<g;)if(I[E++]=w[A++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var I=0;32>I;I+=8)w[y++]=this.g[g]>>>I&255;return w};function s(w,g){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function o(w,g){this.h=g;for(var y=[],I=!0,E=w.length-1;0<=E;E--){var A=w[E]|0;I&&A==g||(y[E]=A,I=!1)}this.g=y}var c={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return k(h(-w));for(var g=[],y=1,I=0;w>=y;I++)g[I]=w/y|0,y*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return k(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),I=m,E=0;E<w.length;E+=8){var A=Math.min(8,w.length-E),_=parseInt(w.substring(E,E+A),g);8>A?(A=h(Math.pow(g,A)),I=I.j(A).add(h(_))):(I=I.j(y),I=I.add(h(_)))}return I}var m=u(0),v=u(1),R=u(16777216);n=o.prototype,n.m=function(){if(x(this))return-k(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var I=this.i(y);w+=(0<=I?I:4294967296+I)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(x(this))return"-"+k(this).toString(w);for(var g=h(Math.pow(w,6)),y=this,I="";;){var E=H(y,g).g;y=G(y,E.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=E,D(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=G(this,w),x(w)?-1:D(w)?0:1};function k(w){for(var g=w.g.length,y=[],I=0;I<g;I++)y[I]=~w.g[I];return new o(y,~w.h).add(v)}n.abs=function(){return x(this)?k(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0,E=0;E<=g;E++){var A=I+(this.i(E)&65535)+(w.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=_>>>16,A&=65535,_&=65535,y[E]=_<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function G(w,g){return w.add(k(g))}n.j=function(w){if(D(this)||D(w))return m;if(x(this))return x(w)?k(this).j(k(w)):k(k(this).j(w));if(x(w))return k(this.j(k(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<w.g.length;E++){var A=this.i(I)>>>16,_=this.i(I)&65535,dt=w.i(E)>>>16,Nr=w.i(E)&65535;y[2*I+2*E]+=_*Nr,j(y,2*I+2*E),y[2*I+2*E+1]+=A*Nr,j(y,2*I+2*E+1),y[2*I+2*E+1]+=_*dt,j(y,2*I+2*E+1),y[2*I+2*E+2]+=A*dt,j(y,2*I+2*E+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new o(y,0)};function j(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function B(w,g){this.g=w,this.h=g}function H(w,g){if(D(g))throw Error("division by zero");if(D(w))return new B(m,m);if(x(w))return g=H(k(w),g),new B(k(g.g),k(g.h));if(x(g))return g=H(w,k(g)),new B(k(g.g),g.h);if(30<w.g.length){if(x(w)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,I=g;0>=I.l(w);)y=X(y),I=X(I);var E=K(y,1),A=K(I,1);for(I=K(I,2),y=K(y,2);!D(I);){var _=A.add(I);0>=_.l(w)&&(E=E.add(y),A=_),I=K(I,1),y=K(y,1)}return g=G(w,E.j(g)),new B(E,g)}for(E=m;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),_=A.j(g);x(_)||0<_.l(w);)y-=I,A=h(y),_=A.j(g);D(A)&&(A=v),E=E.add(A),w=G(w,_)}return new B(E,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)&w.i(I);return new o(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)|w.i(I);return new o(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)^w.i(I);return new o(y,this.h^w.h)};function X(w){for(var g=w.g.length+1,y=[],I=0;I<g;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(y,w.h)}function K(w,g){var y=g>>5;g%=32;for(var I=w.g.length-y,E=[],A=0;A<I;A++)E[A]=0<g?w.i(A+y)>>>g|w.i(A+y+1)<<32-g:w.i(A+y);return new o(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kc=Jf.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,qt=Jf.Integer=o}).apply(typeof Qf<"u"?Qf:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Et={};var $c,Tw,Qn,Wc,fi,oo,Hc,Qc,Jc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,T={next:function(){if(!p&&d<a.length){var P=d++;return{value:l(P,a[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),a.apply(l,T)}}return function(){return a.apply(l,arguments)}}function v(a,l,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function R(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function D(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,T,P){for(var V=Array(arguments.length-2),re=2;re<arguments.length;re++)V[re-2]=arguments[re];return l.prototype[T].apply(p,V)}}function x(a){let l=a.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function k(a,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let T=a.length||0,P=p.length||0;a.length=T+P;for(let V=0;V<P;V++)a[T+V]=p[V]}else a.push(p)}}class G{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var X=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function K(a,l,d){for(let p in a)l.call(d,a[p],p,a)}function w(a,l){for(let d in a)l.call(void 0,a[d],d,a)}function g(a){let l={};for(let d in a)l[d]=a[d];return l}let y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,l){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var l=1;a=a.split(":");let d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function _(){var a=_a;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class dt{constructor(){this.h=this.g=null}add(l,d){let p=Nr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Nr=new G(()=>new Vg,a=>a.reset());class Vg{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let kr,Or=!1,_a=new dt,Ih=()=>{let a=c.Promise.resolve(void 0);kr=()=>{a.then(Lg)}};var Lg=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){A(d)}var l=Nr;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Or=!1};function Ct(){this.s=this.s,this.C=this.C}Ct.prototype.s=!1,Ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Mg=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function xr(a,l){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(X){e:{try{H(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Fg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xr.aa.h.call(this)}}D(xr,Ae);var Fg={2:"touch",3:"pen",4:"mouse"};xr.prototype.h=function(){xr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vr="closure_listenable_"+(1e6*Math.random()|0),Ug=0;function Bg(a,l,d,p,T){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=T,this.key=++Ug,this.da=this.fa=!1}function rs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function is(a){this.src=a,this.g={},this.h=0}is.prototype.add=function(a,l,d,p,T){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var V=va(a,l,p,T);return-1<V?(l=a[V],d||(l.fa=!1)):(l=new Bg(l,this.src,P,!!p,T),l.fa=d,a.push(l)),l};function ya(a,l){var d=l.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=T)&&Array.prototype.splice.call(p,T,1),P&&(rs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function va(a,l,d,p){for(var T=0;T<a.length;++T){var P=a[T];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==p)return T}return-1}var wa="closure_lm_"+(1e6*Math.random()|0),Ia={};function Eh(a,l,d,p,T){if(p&&p.once)return Ah(a,l,d,p,T);if(Array.isArray(l)){for(var P=0;P<l.length;P++)Eh(a,l[P],d,p,T);return null}return d=ba(d),a&&a[Vr]?a.K(l,d,h(p)?!!p.capture:!!p,T):Th(a,l,d,!1,p,T)}function Th(a,l,d,p,T,P){if(!l)throw Error("Invalid event type");var V=h(T)?!!T.capture:!!T,re=Ta(a);if(re||(a[wa]=re=new is(a)),d=re.add(l,d,p,V,P),d.proxy)return d;if(p=qg(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Mg||(T=V),T===void 0&&(T=!1),a.addEventListener(l.toString(),p,T);else if(a.attachEvent)a.attachEvent(Sh(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qg(){function a(d){return l.call(a.src,a.listener,d)}let l=jg;return a}function Ah(a,l,d,p,T){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ah(a,l[P],d,p,T);return null}return d=ba(d),a&&a[Vr]?a.L(l,d,h(p)?!!p.capture:!!p,T):Th(a,l,d,!0,p,T)}function bh(a,l,d,p,T){if(Array.isArray(l))for(var P=0;P<l.length;P++)bh(a,l[P],d,p,T);else p=h(p)?!!p.capture:!!p,d=ba(d),a&&a[Vr]?(a=a.i,l=String(l).toString(),l in a.g&&(P=a.g[l],d=va(P,d,p,T),-1<d&&(rs(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[l],a.h--)))):a&&(a=Ta(a))&&(l=a.g[l.toString()],a=-1,l&&(a=va(l,d,p,T)),(d=-1<a?l[a]:null)&&Ea(d))}function Ea(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Vr])ya(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(Sh(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ta(l))?(ya(d,a),d.h==0&&(d.src=null,l[wa]=null)):rs(a)}}}function Sh(a){return a in Ia?Ia[a]:Ia[a]="on"+a}function jg(a,l){if(a.da)a=!0;else{l=new xr(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&Ea(a),a=d.call(p,l)}return a}function Ta(a){return a=a[wa],a instanceof is?a:null}var Aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(a){return typeof a=="function"?a:(a[Aa]||(a[Aa]=function(l){return a.handleEvent(l)}),a[Aa])}function be(){Ct.call(this),this.i=new is(this),this.M=this,this.F=null}D(be,Ct),be.prototype[Vr]=!0,be.prototype.removeEventListener=function(a,l,d,p){bh(this,a,l,d,p)};function ke(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Ae(l,a);else if(l instanceof Ae)l.target=l.target||a;else{var T=l;l=new Ae(p,a),I(l,T)}if(T=!0,d)for(var P=d.length-1;0<=P;P--){var V=l.g=d[P];T=ss(V,p,!0,l)&&T}if(V=l.g=a,T=ss(V,p,!0,l)&&T,T=ss(V,p,!1,l)&&T,d)for(P=0;P<d.length;P++)V=l.g=d[P],T=ss(V,p,!1,l)&&T}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)rs(d[p]);delete a.g[l],a.h--}}this.F=null},be.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},be.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function ss(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,P=0;P<l.length;++P){var V=l[P];if(V&&!V.da&&V.capture==d){var re=V.listener,Ee=V.ha||V.src;V.fa&&ya(a.i,V),T=re.call(Ee,p)!==!1&&T}}return T&&!p.defaultPrevented}function Rh(a,l,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function Ph(a){a.g=Rh(()=>{a.g=null,a.i&&(a.i=!1,Ph(a))},a.l);let l=a.h;a.h=null,a.m.apply(null,l)}class zg extends Ct{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ph(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(a){Ct.call(this),this.h=a,this.g={}}D(Lr,Ct);var Ch=[];function Dh(a){K(a.g,function(l,d){this.g.hasOwnProperty(d)&&Ea(l)},a),a.g={}}Lr.prototype.N=function(){Lr.aa.N.call(this),Dh(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sa=c.JSON.stringify,Gg=c.JSON.parse,Kg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ra(){}Ra.prototype.h=null;function Nh(a){return a.h||(a.h=a.i())}function kh(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pa(){Ae.call(this,"d")}D(Pa,Ae);function Ca(){Ae.call(this,"c")}D(Ca,Ae);var an={},Oh=null;function os(){return Oh=Oh||new be}an.La="serverreachability";function xh(a){Ae.call(this,an.La,a)}D(xh,Ae);function Fr(a){let l=os();ke(l,new xh(l))}an.STAT_EVENT="statevent";function Vh(a,l){Ae.call(this,an.STAT_EVENT,a),this.stat=l}D(Vh,Ae);function Oe(a){let l=os();ke(l,new Vh(l,a))}an.Ma="timingevent";function Lh(a,l){Ae.call(this,an.Ma,a),this.size=l}D(Lh,Ae);function Ur(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function Br(){this.g=!0}Br.prototype.xa=function(){this.g=!1};function $g(a,l,d,p,T,P){a.info(function(){if(a.g)if(P)for(var V="",re=P.split("&"),Ee=0;Ee<re.length;Ee++){var Z=re[Ee].split("=");if(1<Z.length){var Se=Z[0];Z=Z[1];var Re=Se.split("_");V=2<=Re.length&&Re[1]=="type"?V+(Se+"="+Z+"&"):V+(Se+"=redacted&")}}else V=null;else V=P;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+d+`
`+V})}function Wg(a,l,d,p,T,P,V){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+d+`
`+P+" "+V})}function Fn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Qg(a,d)+(p?" "+p:"")})}function Hg(a,l){a.info(function(){return"TIMEOUT: "+l})}Br.prototype.info=function(){};function Qg(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return Sa(d)}catch{return l}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function cs(){}D(cs,Ra),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},Da=new cs;function Dt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new Lr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fh}function Fh(){this.i=null,this.g="",this.h=!1}var Uh={},Na={};function ka(a,l,d){a.L=1,a.v=ds(ft(l)),a.m=d,a.P=!0,Bh(a,null)}function Bh(a,l){a.F=Date.now(),us(a),a.A=ft(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ed(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Fh,a.g=yd(a.j,d?l:null,!a.m),0<a.O&&(a.M=new zg(v(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ch[0]=T.toString()),T=Ch);for(var P=0;P<T.length;P++){var V=Eh(d,T[P],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Fr(),$g(a.i,a.u,a.A,a.l,a.R,a.m)}Dt.prototype.ca=function(a){a=a.target;let l=this.M;l&&pt(a)==3?l.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{let Re=pt(this.g);var l=this.g.Ba();let qn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||ad(this.g)))){this.J||Re!=4||l==7||(l==8||0>=qn?Fr(3):Fr(2)),Oa(this);var d=this.g.Z();this.X=d;t:if(qh(this)){var p=ad(this.g);a="";var T=p.length,P=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),qr(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(P&&l==T-1)});p.length=0,this.h.g+=a,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,Wg(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,Ee=this.g;if((re=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(re)){var Z=re;break t}}Z=null}if(d=Z)Fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,d);else{this.o=!1,this.s=3,Oe(12),cn(this),qr(this);break e}}if(this.P){d=!0;let Je;for(;!this.J&&this.C<V.length;)if(Je=Jg(this,V),Je==Na){Re==4&&(this.s=4,Oe(14),d=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Uh){this.s=4,Oe(15),Fn(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else Fn(this.i,this.l,Je,null),xa(this,Je);if(qh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||V.length!=0||this.h.h||(this.s=1,Oe(16),d=!1),this.o=this.o&&d,!d)Fn(this.i,this.l,V,"[Invalid Chunked Response]"),cn(this),qr(this);else if(0<V.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ba(Se),Se.M=!0,Oe(11))}}else Fn(this.i,this.l,V,null),xa(this,V);Re==4&&cn(this),this.o&&!this.J&&(Re==4?pd(this.j,this):(this.o=!1,us(this)))}else f_(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),cn(this),qr(this)}}}catch{}finally{}};function qh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jg(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?Na:(d=Number(l.substring(d,p)),isNaN(d)?Uh:(p+=1,p+d>l.length?Na:(l=l.slice(p,p+d),a.C=p+d,l)))}Dt.prototype.cancel=function(){this.J=!0,cn(this)};function us(a){a.S=Date.now()+a.I,jh(a,a.I)}function jh(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ur(v(a.ba,a),l)}function Oa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Dt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(Hg(this.i,this.A),this.L!=2&&(Fr(),Oe(17)),cn(this),this.s=2,qr(this)):jh(this,this.S-a)};function qr(a){a.j.G==0||a.J||pd(a.j,a)}function cn(a){Oa(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,Dh(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function xa(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Va(d.h,a))){if(!a.K&&Va(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)_s(d),ms(d);else break e;Ua(d),Oe(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ur(v(d.Za,d),6e3));if(1>=Kh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ln(d,11)}else if((a.K||d.g==a)&&_s(d),!j(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let Z=T[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];let Se=Z[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));let Re=Z[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));let qn=Z[5];qn!=null&&typeof qn=="number"&&0<qn&&(p=1.5*qn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let Je=a.g;if(Je){let vs=Je.g?Je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var P=p.h;P.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(La(P,P.h),P.h=null))}if(p.D){let qa=Je.g?Je.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(p.ya=qa,se(p.I,p.D,qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var V=a;if(p.qa=_d(p,p.J?p.ia:null,p.W),V.K){$h(p.h,V);var re=V,Ee=p.L;Ee&&(re.I=Ee),re.B&&(Oa(re),us(re)),p.g=V}else dd(p);0<d.i.length&&gs(d)}else Z[0]!="stop"&&Z[0]!="close"||ln(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?ln(d,7):Fa(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Fr(4)}catch{}}var Yg=class{constructor(a,l){this.g=a,this.map=l}};function zh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Kh(a){return a.h?1:a.g?a.g.size:0}function Va(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function La(a,l){a.g?a.g.add(l):a.h=l}function $h(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}zh.prototype.cancel=function(){if(this.i=Wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function Wh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(let d of a.g.values())l=l.concat(d.D);return l}return x(a.i)}function Xg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function Zg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(let p in a)l[d++]=p;return l}}}function Hh(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Zg(a),p=Xg(a),T=p.length,P=0;P<T;P++)l.call(void 0,p[P],d&&d[P],a)}var Qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),T=null;if(0<=p){var P=a[d].substring(0,p);T=a[d].substring(p+1)}else P=a[d];l(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function un(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof un){this.h=a.h,ls(this,a.j),this.o=a.o,this.g=a.g,hs(this,a.s),this.l=a.l;var l=a.i,d=new Gr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Jh(this,d),this.m=a.m}else a&&(l=String(a).match(Qh))?(this.h=!1,ls(this,l[1]||"",!0),this.o=jr(l[2]||""),this.g=jr(l[3]||"",!0),hs(this,l[4]),this.l=jr(l[5]||"",!0),Jh(this,l[6]||"",!0),this.m=jr(l[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}un.prototype.toString=function(){var a=[],l=this.j;l&&a.push(zr(l,Yh,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(zr(l,Yh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zr(d,d.charAt(0)=="/"?r_:n_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zr(d,s_)),a.join("")};function ft(a){return new un(a)}function ls(a,l,d){a.j=d?jr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function hs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Jh(a,l,d){l instanceof Gr?(a.i=l,o_(a.i,a.h)):(d||(l=zr(l,i_)),a.i=new Gr(l,a.h))}function se(a,l,d){a.i.set(l,d)}function ds(a){return se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function jr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,t_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function t_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yh=/[#\/\?@]/g,n_=/[#\?:]/g,r_=/[#\?]/g,i_=/[#\?@]/g,s_=/#/g;function Gr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Nt(a){a.g||(a.g=new Map,a.h=0,a.i&&e_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Gr.prototype,n.add=function(a,l){Nt(this),this.i=null,a=Un(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Xh(a,l){Nt(a),l=Un(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Zh(a,l){return Nt(a),l=Un(a,l),a.g.has(l)}n.forEach=function(a,l){Nt(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(l,T,p,this)},this)},this)},n.na=function(){Nt(this);let a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let T=a[p];for(let P=0;P<T.length;P++)d.push(l[p])}return d},n.V=function(a){Nt(this);let l=[];if(typeof a=="string")Zh(this,a)&&(l=l.concat(this.g.get(Un(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},n.set=function(a,l){return Nt(this),this.i=null,a=Un(this,a),Zh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function ed(a,l,d){Xh(a,l),0<d.length&&(a.i=null,a.g.set(Un(a,l),x(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let P=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var T=P;V[p]!==""&&(T+="="+encodeURIComponent(String(V[p]))),a.push(T)}}return this.i=a.join("&")};function Un(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function o_(a,l){l&&!a.j&&(Nt(a),a.i=null,a.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(Xh(this,p),ed(this,T,d))},a)),a.j=l}function a_(a,l){let d=new Br;if(c.Image){let p=new Image;p.onload=R(kt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=R(kt,d,"TestLoadImage: error",!1,l,p),p.onabort=R(kt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(kt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function c_(a,l){let d=new Br,p=new AbortController,T=setTimeout(()=>{p.abort(),kt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(P=>{clearTimeout(T),P.ok?kt(d,"TestPingServer: ok",!0,l):kt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),kt(d,"TestPingServer: error",!1,l)})}function kt(a,l,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function u_(){this.g=new Kg}function l_(a,l,d){let p=d||"";try{Hh(a,function(T,P){let V=T;h(T)&&(V=Sa(T)),l.push(p+P+"="+encodeURIComponent(V))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function Kr(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Kr,Ra),Kr.prototype.g=function(){return new fs(this.l,this.j)},Kr.prototype.i=function(a){return function(){return a}}({});function fs(a,l){be.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(fs,be),n=fs.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,Wr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;td(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function td(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?$r(this):Wr(this),this.readyState==3&&td(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,$r(this))},n.Qa=function(a){this.g&&(this.response=a,$r(this))},n.ga=function(){this.g&&$r(this)};function $r(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Wr(a)}n.setRequestHeader=function(a,l){this.u.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Wr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function nd(a){let l="";return K(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Ma(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=nd(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):se(a,l,d))}function le(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(le,be);var h_=/^https?$/i,d_=["POST","PUT"];n=le.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?Nh(this.o):Nh(Da),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){rd(this,P);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),T=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(d_,l,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[P,V]of d)this.g.setRequestHeader(P,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{od(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){rd(this,P)}};function rd(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,id(a),ps(a)}function id(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ke(this,"complete"),ke(this,"abort"),ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ps(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?sd(this):this.bb())},n.bb=function(){sd(this)};function sd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pt(a)!=4||a.Z()!=2)){if(a.u&&pt(a)==4)Rh(a.Ea,0,a);else if(ke(a,"readystatechange"),pt(a)==4){a.h=!1;try{let V=a.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=V===0){var T=String(a.D).match(Qh)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!h_.test(T?T.toLowerCase():"")}d=p}if(d)ke(a,"complete"),ke(a,"success");else{a.m=6;try{var P=2<pt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",id(a)}}finally{ps(a)}}}}function ps(a,l){if(a.g){od(a);let d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||ke(a,"ready");try{d.onreadystatechange=p}catch{}}}function od(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function pt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Gg(l)}};function ad(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function f_(a){let l={};a=(a.g&&2<=pt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(j(a[p]))continue;var d=E(a[p]);let T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let P=l[T]||[];l[T]=P,P.push(d)}w(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hr(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function cd(a){this.Aa=0,this.i=[],this.j=new Br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hr("baseRetryDelayMs",5e3,a),this.cb=Hr("retryDelaySeedMs",1e4,a),this.Wa=Hr("forwardChannelMaxRetries",2,a),this.wa=Hr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zh(a&&a.concurrentRequestLimit),this.Da=new u_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cd.prototype,n.la=8,n.G=1,n.connect=function(a,l,d,p){Oe(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=_d(this,null,this.W),gs(this)};function Fa(a){if(ud(a),a.G==3){var l=a.U++,d=ft(a.I);if(se(d,"SID",a.K),se(d,"RID",l),se(d,"TYPE","terminate"),Qr(a,d),l=new Dt(a,a.j,l),l.L=2,l.v=ds(ft(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=yd(l.j,null),l.g.ea(l.v)),l.F=Date.now(),us(l)}gd(a)}function ms(a){a.g&&(Ba(a),a.g.cancel(),a.g=null)}function ud(a){ms(a),a.u&&(c.clearTimeout(a.u),a.u=null),_s(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function gs(a){if(!Gh(a.h)&&!a.s){a.s=!0;var l=a.Ga;kr||Ih(),Or||(kr(),Or=!0),_a.add(l,a),a.B=0}}function p_(a,l){return Kh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ur(v(a.Ga,a,l),md(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let T=new Dt(this,this.j,a),P=this.o;if(this.S&&(P?(P=g(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=hd(this,T,l),d=ft(this.I),se(d,"RID",a),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Qr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(nd(P)))+"&"+l:this.m&&Ma(d,this.m,P)),La(this.h,T),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),T.T=!0,ka(T,d,null)):ka(T,d,l),this.G=2}}else this.G==3&&(a?ld(this,a):this.i.length==0||Gh(this.h)||ld(this))};function ld(a,l){var d;l?d=l.l:d=a.U++;let p=ft(a.I);se(p,"SID",a.K),se(p,"RID",d),se(p,"AID",a.T),Qr(a,p),a.m&&a.o&&Ma(p,a.m,a.o),d=new Dt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=hd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),La(a.h,d),ka(d,p,l)}function Qr(a,l){a.H&&K(a.H,function(d,p){se(l,p,d)}),a.l&&Hh({},function(d,p){se(l,p,d)})}function hd(a,l,d){d=Math.min(a.i.length,d);var p=a.l?v(a.l.Na,a.l,a):null;e:{var T=a.i;let P=-1;for(;;){let V=["count="+d];P==-1?0<d?(P=T[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let re=!0;for(let Ee=0;Ee<d;Ee++){let Z=T[Ee].g,Se=T[Ee].map;if(Z-=P,0>Z)P=Math.max(0,T[Ee].g-100),re=!1;else try{l_(Se,V,"req"+Z+"_")}catch{p&&p(Se)}}if(re){p=V.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function dd(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;kr||Ih(),Or||(kr(),Or=!0),_a.add(l,a),a.v=0}}function Ua(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ur(v(a.Fa,a),md(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,fd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ur(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),ms(this),fd(this))};function Ba(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function fd(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=ft(a.qa);se(l,"RID","rpc"),se(l,"SID",a.K),se(l,"AID",a.T),se(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&se(l,"TO",a.ja),se(l,"TYPE","xmlhttp"),Qr(a,l),a.m&&a.o&&Ma(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ds(ft(l)),d.m=null,d.P=!0,Bh(d,a)}n.Za=function(){this.C!=null&&(this.C=null,ms(this),Ua(this),Oe(19))};function _s(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function pd(a,l){var d=null;if(a.g==l){_s(a),Ba(a),a.g=null;var p=2}else if(Va(a.h,l))d=l.D,$h(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=a.B;p=os(),ke(p,new Lh(p,d)),gs(a)}else dd(a);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&p_(a,l)||p==2&&Ua(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),T){case 1:ln(a,5);break;case 4:ln(a,10);break;case 3:ln(a,6);break;default:ln(a,2)}}}function md(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function ln(a,l){if(a.j.info("Error code "+l),l==2){var d=v(a.fb,a),p=a.Xa;let T=!p;p=new un(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ls(p,"https"),ds(p),T?a_(p.toString(),d):c_(p.toString(),d)}else Oe(2);a.G=0,a.l&&a.l.sa(l),gd(a),ud(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function gd(a){if(a.G=0,a.ka=[],a.l){let l=Wh(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ka,l),k(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function _d(a,l,d){var p=d instanceof un?ft(d):new un(d);if(p.g!="")l&&(p.g=l+"."+p.g),hs(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var P=new un(null);p&&ls(P,p),l&&(P.g=l),T&&hs(P,T),d&&(P.l=d),p=P}return d=a.D,l=a.ya,d&&l&&se(p,d,l),se(p,"VER",a.la),Qr(a,p),p}function yd(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new le(new Kr({eb:d})):new le(a.pa),l.Ha(a.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vd(){}n=vd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ys(){}ys.prototype.g=function(a,l){return new Fe(a,l)};function Fe(a,l){be.call(this),this.g=new cd(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!j(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Bn(this)}D(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Fa(this.g)},Fe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Sa(a),a=d);l.i.push(new Yg(l.Ya++,a)),l.G==3&&gs(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,Fe.aa.N.call(this)};function wd(a){Pa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(let d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}D(wd,Pa);function Id(){Ca.call(this),this.status=1}D(Id,Ca);function Bn(a){this.g=a}D(Bn,vd),Bn.prototype.ua=function(){ke(this.g,"a")},Bn.prototype.ta=function(a){ke(this.g,new wd(a))},Bn.prototype.sa=function(a){ke(this.g,new Id)},Bn.prototype.ra=function(){ke(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Jc=Et.createWebChannelTransport=function(){return new ys},Qc=Et.getStatEventTarget=function(){return os()},Hc=Et.Event=an,oo=Et.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,fi=Et.ErrorCode=as,Mh.COMPLETE="complete",Wc=Et.EventType=Mh,kh.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",be.prototype.listen=be.prototype.K,Qn=Et.WebChannel=kh,Tw=Et.FetchXmlHttpFactory=Kr,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,$c=Et.XhrIo=le}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});var Yf="@firebase/firestore";var me=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");var Pr="10.14.0";var An=new xt("@firebase/firestore");function er(){return An.logLevel}function N(n,...e){if(An.logLevel<=Q.DEBUG){let t=e.map(Ql);An.debug(`Firestore (${Pr}): ${n}`,...t)}}function xe(n,...e){if(An.logLevel<=Q.ERROR){let t=e.map(Ql);An.error(`Firestore (${Pr}): ${n}`,...t)}}function ur(n,...e){if(An.logLevel<=Q.WARN){let t=e.map(Ql);An.warn(`Firestore (${Pr}): ${n}`,...t)}}function Ql(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+n;throw xe(e),new Error(e)}function F(n,e){n||M()}function z(n,e){return n}var C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},O=class extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var je=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var _o=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},tu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}},nu=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},ru=class{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.o===void 0);let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new _o(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new me(e)}},iu=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},su=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new iu(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ou=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},au=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){F(this.o===void 0);let r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.R=t.token,new ou(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Aw(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var yo=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=Aw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function $(n,e){return n<e?-1:n>e?1:0}function lr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Zp(n){return n+"\0"}var de=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var q=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new de(0,0))}static max(){return new n(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var vo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},te=class n extends vo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},bw=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ge=class n extends vo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return bw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var L=class n{constructor(e){this.path=e}static fromPath(e){return new n(te.fromString(e))}static fromName(e){return new n(te.fromString(e).popFirst(5))}static empty(){return new n(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new te(e.slice()))}};var hr=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function cu(n){return n.fields.find(e=>e.kind===2)}function _n(n){return n.fields.filter(e=>e.kind!==2)}hr.UNKNOWN_ID=-1;var or=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var bi=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,He.min())}};function Sw(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new He(i,L.empty(),e)}function em(n){return new He(n.readTime,n.key,-1)}var He=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(q.min(),L.empty(),-1)}static max(){return new n(q.max(),L.empty(),-1)}};function Jl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}var tm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",wo=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function xn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==tm)throw n;N("LocalStore","Unexpectedly lost primary lease")}var b=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,o=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var Io=class n{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new je,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Tn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{let i=Yl(r.target.error);this.V.reject(new Tn(e,i))}}static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new Tn(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new lu(t)}},dr=class n{constructor(e,t,r){this.name=e,this.version=t,this.p=r,n.S(he())===12.2&&xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),yn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Es())return!1;if(n.v())return!0;let e=he(),t=n.S(e),r=0<t&&t<10,i=nm(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{r(new Tn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new O(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Tn(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.M(e);let c=Io.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),b.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){let u=c,h=u.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function nm(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var uu=class{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return yn(this.B.delete())}},Tn=class extends O{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function rn(n){return n.name==="IndexedDbTransactionError"}var lu=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yn(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),yn(this.store.add(e))}get(e){return yn(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),yn(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),yn(this.store.count())}U(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new b((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{let s=this.cursor(r),o=[];return this.W(s,(c,u)=>{o.push(u)}).next(()=>o)}}G(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){N("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,t);r.H=!1;let i=this.cursor(r);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.W(i,t)}Y(e){let t=this.cursor({});return new b((r,i)=>{t.onerror=s=>{let o=Yl(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){let r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let u=new uu(c),h=t(c.primaryKey,c.value,u);if(h instanceof b){let f=h.catch(m=>(u.done(),b.reject(m)));r.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>b.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function yn(n){return new b((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Yl(r.target.error);t(i)}})}var Xf=!1;function Yl(n){let e=dr.S(he());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xf||(Xf=!0,setTimeout(()=>{throw r},0)),r}}return n}var hu=class{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){N("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){rn(t)?N("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await xn(t)}await this.X(6e4)})}},du=class{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let r=new Set,i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(N("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{let o=em(s);Jl(o,r)>0&&(r=o)}),new He(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Me=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Me.oe=-1;function Hi(n){return n==null}function Si(n){return n===0&&1/n==-1/0}function Rw(n){return typeof n=="number"&&Number.isInteger(n)&&!Si(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Ve(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zf(e)),e=Pw(n.get(t),e);return Zf(e)}function Pw(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Zf(n){return n+""}function ot(n){let e=n.length;if(F(e>=2),e===2)return F(n.charAt(0)===""&&n.charAt(1)===""),te.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let o=n.indexOf("",s);switch((o<0||o>t)&&M(),n.charAt(o+1)){case"":let c=n.substring(s,o),u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:M()}s=o+2}return new te(r)}var ep=["userId","batchId"];function ho(n,e){return[n,Ve(e)]}function rm(n,e,t){return[n,Ve(e),t]}var Cw={},Dw=["prefixPath","collectionGroup","readTime","documentId"],Nw=["prefixPath","collectionGroup","documentId"],kw=["collectionGroup","readTime","prefixPath","documentId"],Ow=["canonicalId","targetId"],xw=["targetId","path"],Vw=["path","targetId"],Lw=["collectionId","parent"],Mw=["indexId","uid"],Fw=["uid","sequenceNumber"],Uw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Bw=["indexId","uid","orderedDocumentKey"],qw=["userId","collectionPath","documentId"],jw=["userId","collectionPath","largestBatchId"],zw=["userId","collectionGroup","largestBatchId"],im=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Gw=[...im,"documentOverlays"],sm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],om=sm,Xl=[...om,"indexConfiguration","indexState","indexEntries"],Kw=Xl,$w=[...Xl,"globals"];var Ri=class extends wo{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}};function ve(n,e){let t=z(n);return dr.F(t._e,e)}function tp(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function am(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ce=class n{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sr(this.root,e,this.comparator,!0)}},sr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ct=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ie=class n{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(e){return new Eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Eo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function Jn(n){return n.hasNext()?n.getNext():void 0}var Be=class n{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new n([])}unionWith(e){let t=new ie(ge.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var To=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var ye=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new To("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ye.EMPTY_BYTE_STRING=new ye("");var Ww=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(F(!!n),typeof n=="string"){let e=0,t=Ww.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}function Zl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function eh(n){let e=n.mapValue.fields.__previous_value__;return Zl(e)?eh(e):e}function Pi(n){let e=bt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}var fu=class{constructor(e,t,r,i,s,o,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}},fr=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Kt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},fo={nullValue:"NULL_VALUE"};function bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zl(n)?4:cm(n)?9007199254740991:la(n)?10:11:M()}function ut(n,e){if(n===e)return!0;let t=bn(n);if(t!==bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pi(n).isEqual(Pi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=bt(i.timestampValue),c=bt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=oe(i.doubleValue),c=oe(s.doubleValue);return o===c?Si(o)===Si(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return lr(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(tp(o)!==tp(c))return!1;for(let u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ut(o[u],c[u])))return!1;return!0}(n,e);default:return M()}}function Ci(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function Qt(n,e){if(n===e)return 0;let t=bn(n),r=bn(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(s,o){let c=oe(s.integerValue||s.doubleValue),u=oe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return np(n.timestampValue,e.timestampValue);case 4:return np(Pi(n),Pi(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(s,o){let c=Ht(s),u=Ht(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=$(c[h],u[h]);if(f!==0)return f}return $(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let c=$(oe(s.latitude),oe(o.latitude));return c!==0?c:$(oe(s.longitude),oe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rp(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;let m=s.fields||{},v=o.fields||{},R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,D=(u=v.value)===null||u===void 0?void 0:u.arrayValue,x=$(((h=R?.values)===null||h===void 0?void 0:h.length)||0,((f=D?.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:rp(R,D)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Kt.mapValue&&o===Kt.mapValue)return 0;if(s===Kt.mapValue)return 1;if(o===Kt.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){let v=$(u[m],f[m]);if(v!==0)return v;let R=Qt(c[u[m]],h[f[m]]);if(R!==0)return R}return $(u.length,f.length)}(n.mapValue,e.mapValue);default:throw M()}}function np(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);let t=bt(n),r=bt(e),i=$(t.seconds,r.seconds);return i!==0?i:$(t.nanos,r.nanos)}function rp(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Qt(t[i],r[i]);if(s)return s}return $(t.length,r.length)}function pr(n){return pu(n)}function pu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=pu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${pu(t.fields[o])}`;return i+"}"}(n.mapValue):M()}function Di(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mu(n){return!!n&&"integerValue"in n}function Ni(n){return!!n&&"arrayValue"in n}function ip(n){return!!n&&"nullValue"in n}function sp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function po(n){return!!n&&"mapValue"in n}function la(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ii(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ii(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ii(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var um={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Hw(n){return"nullValue"in n?fo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Di(fr.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?la(n)?um:{mapValue:{}}:M()}function Qw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Di(fr.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?um:"mapValue"in n?la(n)?{mapValue:{}}:Kt:M()}function op(n,e){let t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ap(n,e){let t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var De=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(t)}setAll(e){let t=ge.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Ii(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];po(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Vn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Ii(this.value))}};function lm(n){let e=[];return Vn(n.fields,(t,r)=>{let i=new ge([t]);if(po(r)){let s=lm(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new Be(e)}var _e=class n{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,q.min(),q.min(),q.min(),De.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,q.min(),q.min(),De.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,q.min(),q.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Jt=class{constructor(e,t){this.position=e,this.inclusive=t}};function cp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=Qt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function up(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}var mr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Jw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Ao=class{},J=class n extends Ao{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yu(e,t,r):t==="array-contains"?new Iu(e,r):t==="in"?new bo(e,r):t==="not-in"?new Eu(e,r):t==="array-contains-any"?new Tu(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vu(e,r):new wu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&bn(this.value)===bn(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ne=class n extends Ao{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return gr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function gr(n){return n.op==="and"}function gu(n){return n.op==="or"}function th(n){return hm(n)&&gr(n)}function hm(n){for(let e of n.filters)if(e instanceof ne)return!1;return!0}function _u(n){if(n instanceof J)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(th(n))return n.filters.map(e=>_u(e)).join(",");{let e=n.filters.map(t=>_u(t)).join(",");return`${n.op}(${e})`}}function dm(n,e){return n instanceof J?function(r,i){return i instanceof J&&r.op===i.op&&r.field.isEqual(i.field)&&ut(r.value,i.value)}(n,e):n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&dm(o,i.filters[c]),!0):!1}(n,e):void M()}function fm(n,e){let t=n.filters.concat(e);return ne.create(t,n.op)}function pm(n){return n instanceof J?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof ne?function(t){return t.op.toString()+" {"+t.getFilters().map(pm).join(" ,")+"}"}(n):"Filter"}var yu=class extends J{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},vu=class extends J{constructor(e,t){super(e,"in",t),this.keys=mm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},wu=class extends J{constructor(e,t){super(e,"not-in",t),this.keys=mm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function mm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}var Iu=class extends J{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Ni(t)&&Ci(t.arrayValue,this.value)}},bo=class extends J{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ci(this.value.arrayValue,t)}},Eu=class extends J{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Ci(this.value.arrayValue,t)}},Tu=class extends J{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Ni(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}};var Au=class{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}};function bu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Au(n,e,t,r,i,s,o)}function Sn(n){let e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>_u(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.ue=t}return e.ue}function Qi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!up(n.startAt,e.startAt)&&up(n.endAt,e.endAt)}function So(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ro(n,e){return n.filters.filter(t=>t instanceof J&&t.field.isEqual(e))}function lp(n,e,t){let r=fo,i=!0;for(let s of Ro(n,e)){let o=fo,c=!0;switch(s.op){case"<":case"<=":o=Hw(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=fo}op({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];op({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function hp(n,e,t){let r=Kt,i=!0;for(let s of Ro(n,e)){let o=Kt,c=!0;switch(s.op){case">=":case">":o=Qw(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=Kt}ap({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];ap({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}var Rn=class{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function Yw(n,e,t,r,i,s,o,c){return new Rn(n,e,t,r,i,s,o,c)}function Ji(n){return new Rn(n)}function dp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gm(n){return n.collectionGroup!==null}function Ei(n){let e=z(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new mr(s,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new mr(ge.keyField(),r))}return e.ce}function $e(n){let e=z(n);return e.le||(e.le=Xw(e,Ei(n))),e.le}function Xw(n,e){if(n.limitType==="F")return bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new mr(i.field,s)});let t=n.endAt?new Jt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jt(n.startAt.position,n.startAt.inclusive):null;return bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Su(n,e){let t=n.filters.concat([e]);return new Rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Po(n,e,t){return new Rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ha(n,e){return Qi($e(n),$e(e))&&n.limitType===e.limitType}function _m(n){return`${Sn($e(n))}|lt:${n.limitType}`}function tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>pm(i)).join(", ")}]`),Hi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pr(i)).join(",")),`Target(${r})`}($e(n))}; limitType=${n.limitType})`}function Yi(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Ei(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){let h=cp(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Ei(r),i)||r.endAt&&!function(o,c,u){let h=cp(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Ei(r),i))}(n,e)}function Zw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ym(n){return(e,t)=>{let r=!1;for(let i of Ei(n)){let s=eI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eI(n,e,t){let r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){let u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Qt(u,h):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var lt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return am(this.inner)}size(){return this.innerSize}};var tI=new ce(L.comparator);function qe(){return tI}var vm=new ce(L.comparator);function vi(...n){let e=vm;for(let t of n)e=e.insert(t.key,t);return e}function wm(n){let e=vm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function at(){return Ti()}function Im(){return Ti()}function Ti(){return new lt(n=>n.toString(),(n,e)=>n.isEqual(e))}var nI=new ce(L.comparator),rI=new ie(L.comparator);function W(...n){let e=rI;for(let t of n)e=e.add(t);return e}var iI=new ie($);function sI(){return iI}function nh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(e)?"-0":e}}function Em(n){return{integerValue:""+n}}function oI(n,e){return Rw(e)?Em(e):nh(n,e)}var _r=class{constructor(){this._=void 0}};function aI(n,e,t){return n instanceof Pn?function(i,s){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zl(s)&&(s=eh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Yt?Am(n,e):n instanceof Xt?bm(n,e):function(i,s){let o=Tm(i,s),c=fp(o)+fp(i.Pe);return mu(o)&&mu(i.Pe)?Em(c):nh(i.serializer,c)}(n,e)}function cI(n,e,t){return n instanceof Yt?Am(n,e):n instanceof Xt?bm(n,e):t}function Tm(n,e){return n instanceof Cn?function(r){return mu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Pn=class extends _r{},Yt=class extends _r{constructor(e){super(),this.elements=e}};function Am(n,e){let t=Sm(e);for(let r of n.elements)t.some(i=>ut(i,r))||t.push(r);return{arrayValue:{values:t}}}var Xt=class extends _r{constructor(e){super(),this.elements=e}};function bm(n,e){let t=Sm(e);for(let r of n.elements)t=t.filter(i=>!ut(i,r));return{arrayValue:{values:t}}}var Cn=class extends _r{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function fp(n){return oe(n.integerValue||n.doubleValue)}function Sm(n){return Ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ru=class{constructor(e,t){this.field=e,this.transform=t}};function uI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Yt&&i instanceof Yt||r instanceof Xt&&i instanceof Xt?lr(r.elements,i.elements,ut):r instanceof Cn&&i instanceof Cn?ut(r.Pe,i.Pe):r instanceof Pn&&i instanceof Pn}(n.transform,e.transform)}var Pu=class{constructor(e,t){this.version=e,this.transformResults=t}},Te=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var yr=class{};function Rm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dn(n.key,Te.none()):new Zt(n.key,n.data,Te.none());{let t=n.data,r=De.empty(),i=new ie(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new et(n.key,r,new Be(i.toArray()),Te.none())}}function lI(n,e,t){n instanceof Zt?function(i,s,o){let c=i.value.clone(),u=mp(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof et?function(i,s,o){if(!mo(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=mp(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Pm(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ai(n,e,t,r){return n instanceof Zt?function(s,o,c,u){if(!mo(s.precondition,o))return c;let h=s.value.clone(),f=gp(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof et?function(s,o,c,u){if(!mo(s.precondition,o))return c;let h=gp(s.fieldTransforms,u,o),f=o.data;return f.setAll(Pm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return mo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function hI(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Tm(r.transform,i||null);s!=null&&(t===null&&(t=De.empty()),t.set(r.field,s))}return t||null}function pp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lr(r,i,(s,o)=>uI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Zt=class extends yr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},et=class extends yr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Pm(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function mp(n,e,t){let r=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,cI(o,c,t[i]))}return r}function gp(n,e,t){let r=new Map;for(let i of n){let s=i.transform,o=t.data.field(i.field);r.set(i.field,aI(s,o,e))}return r}var Dn=class extends yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},ki=class extends yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Oi=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&lI(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Im();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let u=Rm(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&lr(this.mutations,e.mutations,(t,r)=>pp(t,r))&&lr(this.baseMutations,e.baseMutations,(t,r)=>pp(t,r))}},Cu=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){F(e.mutations.length===r.length);let i=function(){return nI}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n(e,t,r,i)}};var xi=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Du=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var fe,Y;function Cm(n){switch(n){default:return M();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Dm(n){if(n===void 0)return xe("GRPC error has no .code"),C.UNKNOWN;switch(n){case fe.OK:return C.OK;case fe.CANCELLED:return C.CANCELLED;case fe.UNKNOWN:return C.UNKNOWN;case fe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case fe.INTERNAL:return C.INTERNAL;case fe.UNAVAILABLE:return C.UNAVAILABLE;case fe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case fe.NOT_FOUND:return C.NOT_FOUND;case fe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case fe.ABORTED:return C.ABORTED;case fe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case fe.DATA_LOSS:return C.DATA_LOSS;default:return M()}}(Y=fe||(fe={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";var _p=null;function dI(){return new TextEncoder}var fI=new qt([4294967295,4294967295],0);function yp(n){let e=dI().encode(n),t=new Kc;return t.update(e),new Uint8Array(t.digest())}function vp(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qt([t,r],0),new qt([i,s],0)]}var Nu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new En(`Invalid padding: ${t}`);if(r<0)throw new En(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new En(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new En(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(qt.fromNumber(r)));return i.compare(fI)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=yp(e),[r,i]=vp(t);for(let s=0;s<this.hashCount;s++){let o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new n(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;let t=yp(e),[r,i]=vp(t);for(let s=0;s<this.hashCount;s++){let o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},En=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Co=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(q.min(),i,new ce($),qe(),W())}},Vi=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,W(),W(),W())}};var ar=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Do=class{constructor(e,t){this.targetId=e,this.me=t}},No=class{constructor(e,t,r=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},ko=class{constructor(){this.fe=0,this.ge=Ip(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Vi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ip()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},ku=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=wp(),this.Qe=new ce($)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let s=i.target;if(So(s))if(r===0){let o=new L(s.path);this.Ue(t,o,_e.newNoDocument(o,q.min()))}else F(r===1);else{let o=this.Ye(t);if(o!==r){let c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}_p?.et(function(f,m,v,R,D){var x,k,G,j,B,H;let X={localCacheCount:f,existenceFilterCount:m.count,databaseId:v.database,projectId:v.projectId},K=m.unchangedNames;return K&&(X.bloomFilter={applied:D===0,hashCount:(x=K?.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(j=(G=(k=K?.bits)===null||k===void 0?void 0:k.bitmap)===null||G===void 0?void 0:G.length)!==null&&j!==void 0?j:0,padding:(H=(B=K?.bits)===null||B===void 0?void 0:B.padding)!==null&&H!==void 0?H:0,mightContain:w=>{var g;return(g=R?.mightContain(w))!==null&&g!==void 0&&g}}),X}(o,e.me,this.Le.tt(),c,u))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Ht(r).toUint8Array()}catch(u){if(u instanceof To)return ur("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Nu(o,i,s)}catch(u){return ur(u instanceof En?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((s,o)=>{let c=this.Je(o);if(c){if(s.current&&So(c.target)){let u=new L(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_e.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=W();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{let h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));let i=new Co(e,t,this.Qe,this.ke,r);return this.ke=qe(),this.qe=wp(),this.Qe=new ce($),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ko,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie($),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ko),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function wp(){return new ce(L.comparator)}function Ip(){return new ce(L.comparator)}var pI={asc:"ASCENDING",desc:"DESCENDING"},mI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gI={and:"AND",or:"OR"},Ou=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function xu(n,e){return n.useProto3Json||Hi(e)?e:{value:e}}function vr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _I(n,e){return vr(n,e.toTimestamp())}function Ie(n){return F(!!n),q.fromTimestamp(function(t){let r=bt(t);return new de(r.seconds,r.nanos)}(n))}function rh(n,e){return Vu(n,e).canonicalString()}function Vu(n,e){let t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function km(n){let e=te.fromString(n);return F(qm(e)),e}function Li(n,e){return rh(n.databaseId,e.path)}function At(n,e){let t=km(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Vm(t))}function Om(n,e){return rh(n.databaseId,e)}function xm(n){let e=km(n);return e.length===4?te.emptyPath():Vm(e)}function Lu(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vm(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ep(n,e,t){return{name:Li(n,e),fields:t.value.mapValue.fields}}function yI(n,e,t){let r=At(n,e.name),i=Ie(e.updateTime),s=e.createTime?Ie(e.createTime):q.min(),o=new De({mapValue:{fields:e.fields}}),c=_e.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function vI(n,e){return"found"in e?function(r,i){F(!!i.found),i.found.name,i.found.updateTime;let s=At(r,i.found.name),o=Ie(i.found.updateTime),c=i.found.createTime?Ie(i.found.createTime):q.min(),u=new De({mapValue:{fields:i.found.fields}});return _e.newFoundDocument(s,o,c,u)}(n,e):"missing"in e?function(r,i){F(!!i.missing),F(!!i.readTime);let s=At(r,i.missing),o=Ie(i.readTime);return _e.newNoDocument(s,o)}(n,e):M()}function wI(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(F(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(F(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){let f=h.code===void 0?C.UNKNOWN:Dm(h.code);return new O(f,h.message||"")}(o);t=new No(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=At(n,r.document.name),s=Ie(r.document.updateTime),o=r.document.createTime?Ie(r.document.createTime):q.min(),c=new De({mapValue:{fields:r.document.fields}}),u=_e.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ar(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=At(n,r.document),s=r.readTime?Ie(r.readTime):q.min(),o=_e.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ar([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=At(n,r.document),s=r.removedTargetIds||[];t=new ar([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new Du(i,s),c=r.targetId;t=new Do(c,o)}}return t}function Mi(n,e){let t;if(e instanceof Zt)t={update:Ep(n,e.key,e.value)};else if(e instanceof Dn)t={delete:Li(n,e.key)};else if(e instanceof et)t={update:Ep(n,e.key,e.data),updateMask:SI(e.fieldMask)};else{if(!(e instanceof ki))return M();t={verify:Li(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let c=o.transform;if(c instanceof Pn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Yt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cn)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_I(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(n,e.precondition)),t}function Mu(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?Te.updateTime(Ie(s.updateTime)):s.exists!==void 0?Te.exists(s.exists):Te.none()}(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)F(c.setToServerValue==="REQUEST_TIME"),u=new Pn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];u=new Yt(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];u=new Xt(f)}else"increment"in c?u=new Cn(o,c.increment):M();let h=ge.fromServerFormat(c.fieldPath);return new Ru(h,u)}(n,i)):[];if(e.update){e.update.name;let i=At(n,e.update.name),s=new De({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(u){let h=u.fieldPaths||[];return new Be(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new et(i,s,o,t,r)}return new Zt(i,s,t,r)}if(e.delete){let i=At(n,e.delete);return new Dn(i,t)}if(e.verify){let i=At(n,e.verify);return new ki(i,t)}return M()}function II(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ie(i.updateTime):Ie(s);return o.isEqual(q.min())&&(o=Ie(s)),new Pu(o,i.transformResults||[])}(t,e))):[]}function Lm(n,e){return{documents:[Om(n,e.path)]}}function Mm(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Om(n,i);let s=function(h){if(h.length!==0)return Bm(ne.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:nr(v.field),direction:TI(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=xu(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Fm(n){let e=xm(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){F(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let v=Um(m);return v instanceof ne&&th(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(v=>function(D){return new mr(rr(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,Hi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(m){let v=!!m.before,R=m.values||[];return new Jt(R,v)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let v=!m.before,R=m.values||[];return new Jt(R,v)}(t.endAt)),Yw(e,i,o,s,c,"F",u,h)}function EI(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Um(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=rr(t.unaryFilter.field);return J.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=rr(t.unaryFilter.field);return J.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=rr(t.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=rr(t.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return J.create(rr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ne.create(t.compositeFilter.filters.map(r=>Um(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function TI(n){return pI[n]}function AI(n){return mI[n]}function bI(n){return gI[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return ge.fromServerFormat(n.fieldPath)}function Bm(n){return n instanceof J?function(t){if(t.op==="=="){if(sp(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NAN"}};if(ip(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sp(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NAN"}};if(ip(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(t.field),op:AI(t.op),value:t.value}}}(n):n instanceof ne?function(t){let r=t.getFilters().map(i=>Bm(i));return r.length===1?r[0]:{compositeFilter:{op:bI(t.op),filters:r}}}(n):M()}function SI(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var wr=class n{constructor(e,t,r,i,s=q.min(),o=q.min(),c=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Oo=class{constructor(e){this.ct=e}};function RI(n,e){let t;if(e.document)t=yI(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=L.fromSegments(e.noDocument.path),i=kn(e.noDocument.readTime);t=_e.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{let r=L.fromSegments(e.unknownDocument.path),i=kn(e.unknownDocument.version);t=_e.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new de(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),t}function Tp(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:xo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Li(s,o.key),fields:o.data.value.mapValue.fields,updateTime:vr(s,o.version.toTimestamp()),createTime:vr(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Nn(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:t.path.toArray(),version:Nn(e.version)}}return r}function xo(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Nn(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function kn(n){let e=new de(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function vn(n,e){let t=(e.baseMutations||[]).map(s=>Mu(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Mu(n.ct,s)),i=de.fromMillis(e.localWriteTimeMs);return new Oi(e.batchId,i,t,r)}function wi(n){let e=kn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?kn(n.lastLimboFreeSnapshotVersion):q.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return F(s.documents.length===1),$e(Ji(xm(s.documents[0])))}(n.query):function(s){return $e(Fm(s))}(n.query),new wr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ye.fromBase64String(n.resumeToken))}function jm(n,e){let t=Nn(e.snapshotVersion),r=Nn(e.lastLimboFreeSnapshotVersion),i;i=So(e.target)?Lm(n.ct,e.target):Mm(n.ct,e.target)._t;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Sn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function zm(n){let e=Fm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Po(e,e.limit,"L"):e}function Yc(n,e){return new xi(e.largestBatchId,Mu(n.ct,e.overlayMutation))}function Ap(n,e){let t=e.path.lastSegment();return[n,Ve(e.path.popLast()),t]}function bp(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Nn(r.readTime),documentKey:Ve(r.documentKey.path),largestBatchId:r.largestBatchId}}var Fu=class{getBundleMetadata(e,t){return Sp(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:kn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Sp(e).put(function(i){return{bundleId:i.id,createTime:Nn(Ie(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Rp(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:zm(s.bundledQuery),readTime:kn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Rp(e).put(function(i){return{name:i.name,readTime:Nn(Ie(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function Sp(n){return ve(n,"bundles")}function Rp(n){return ve(n,"namedQueries")}var Vo=class n{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return pi(e).get(Ap(this.userId,t)).next(r=>r?Yc(this.serializer,r):null)}getOverlays(e,t){let r=at();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,o)=>{let c=new xi(t,o);i.push(this.ht(e,c))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(o=>i.add(Ve(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(pi(e).j("collectionPathOverlayIndex",c))}),b.waitFor(s)}getOverlaysForCollection(e,t,r){let i=at(),s=Ve(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pi(e).U("collectionPathOverlayIndex",o).next(c=>{for(let u of c){let h=Yc(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=at(),o,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pi(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{let m=Yc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return pi(e).put(function(i,s,o){let[c,u,h]=Ap(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mi(i.ct,o.mutation)}}(this.serializer,this.userId,t))}};function pi(n){return ve(n,"documentOverlays")}var Uu=class{Pt(e){return ve(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{let r=t?.value;return r?ye.fromUint8Array(r):ye.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}};var Tt=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(oe(e.integerValue));else if("doubleValue"in e){let r=oe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Si(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=bt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ht(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?cm(e)?this.dt(t,Number.MAX_SAFE_INTEGER):la(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let s=e.fields||{};this.dt(t,53);let o="value",c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(oe(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),L.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};Tt.vt=new Tt;function PI(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Pp(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let o=PI(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var Bu=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{let i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{let i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){let t=this.qt(e),r=Pp(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){let t=this.qt(e),r=Pp(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){let t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},qu=class{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}},ju=class{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}},wn=class{constructor(){this.jt=new Bu,this.Ht=new qu(this.jt),this.Jt=new ju(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}};var In=class n{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){let e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new n(this.indexId,this.documentKey,this.arrayValue,r)}};function jt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Cp(n.arrayValue,e.arrayValue),t!==0?t:(t=Cp(n.directionalValue,e.directionalValue),t!==0?t:L.comparator(n.documentKey,e.documentKey)))}function Cp(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}var Lo=class{constructor(e){this.Xt=new ie((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(F(e.collectionGroup===this.collectionId),this.nn)return!1;let t=cu(e);if(t!==void 0&&!this.sn(t))return!1;let r=_n(e),i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){let c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=r[s];if(!this.on(c,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){let c=r[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ie(ge.comparator),t=[];for(let r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new or(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new or(r.field,0))}for(let r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new or(r.field,r.dir==="asc"?0:1)));return new hr(hr.UNKNOWN_ID,this.collectionId,t,bi.empty())}sn(e){for(let t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function Gm(n){var e,t;if(F(n instanceof J||n instanceof ne),n instanceof J){if(n instanceof bo){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>J.create(n.field,"==",s)))||[];return ne.create(i,"or")}return n}let r=n.filters.map(i=>Gm(i));return ne.create(r,n.op)}function CI(n){if(n.getFilters().length===0)return[];let e=Ku(Gm(n));return F(Km(e)),zu(e)||Gu(e)?[e]:e.getFilters()}function zu(n){return n instanceof J}function Gu(n){return n instanceof ne&&th(n)}function Km(n){return zu(n)||Gu(n)||function(t){if(t instanceof ne&&gu(t)){for(let r of t.getFilters())if(!zu(r)&&!Gu(r))return!1;return!0}return!1}(n)}function Ku(n){if(F(n instanceof J||n instanceof ne),n instanceof J)return n;if(n.filters.length===1)return Ku(n.filters[0]);let e=n.filters.map(r=>Ku(r)),t=ne.create(e,n.op);return t=Mo(t),Km(t)?t:(F(t instanceof ne),F(gr(t)),F(t.filters.length>1),t.filters.reduce((r,i)=>ih(r,i)))}function ih(n,e){let t;return F(n instanceof J||n instanceof ne),F(e instanceof J||e instanceof ne),t=n instanceof J?e instanceof J?function(i,s){return ne.create([i,s],"and")}(n,e):Dp(n,e):e instanceof J?Dp(e,n):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),gr(i)&&gr(s))return fm(i,s.getFilters());let o=gu(i)?i:s,c=gu(i)?s:i,u=o.filters.map(h=>ih(h,c));return ne.create(u,"or")}(n,e),Mo(t)}function Dp(n,e){if(gr(e))return fm(e,n.getFilters());{let t=e.filters.map(r=>ih(n,r));return ne.create(t,"or")}}function Mo(n){if(F(n instanceof J||n instanceof ne),n instanceof J)return n;let e=n.getFilters();if(e.length===1)return Mo(e[0]);if(hm(n))return n;let t=e.map(i=>Mo(i)),r=[];return t.forEach(i=>{i instanceof J?r.push(i):i instanceof ne&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ne.create(r,n.op)}var $u=class{constructor(){this.un=new Fi}addToCollectionParentIndex(e,t){return this.un.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(He.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(He.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}},Fi=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ie(te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ie(te.comparator)).toArray()}};var ao=new Uint8Array(0),Wu=class{constructor(e,t){this.databaseId=t,this.cn=new Fi,this.ln=new lt(r=>Sn(r),(r,i)=>Qi(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});let s={collectionId:r,parent:Ve(i)};return Np(e).put(s)}return b.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[Zp(t),""],!1,!0);return Np(e).U(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;r.push(ot(o.parent))}return r})}addFieldIndex(e,t){let r=mi(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let o=Xn(e);return s.next(c=>{o.put(bp(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=mi(e),i=Xn(e),s=Yn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=mi(e),r=Yn(e),i=Xn(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return b.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new Lo(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=Yn(e),i=!0,s=new Map;return b.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=W(),c=[];return b.forEach(s,(u,h)=>{N("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(u)} to execute ${Sn(t)}`);let f=function(B,H){let X=cu(H);if(X===void 0)return null;for(let K of Ro(B,X.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,u),m=function(B,H){let X=new Map;for(let K of _n(H))for(let w of Ro(B,K.fieldPath))switch(w.op){case"==":case"in":X.set(K.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return X.set(K.fieldPath.canonicalString(),w.value),Array.from(X.values())}return null}(h,u),v=function(B,H){let X=[],K=!0;for(let w of _n(H)){let g=w.kind===0?lp(B,w.fieldPath,B.startAt):hp(B,w.fieldPath,B.startAt);X.push(g.value),K&&(K=g.inclusive)}return new Jt(X,K)}(h,u),R=function(B,H){let X=[],K=!0;for(let w of _n(H)){let g=w.kind===0?hp(B,w.fieldPath,B.endAt):lp(B,w.fieldPath,B.endAt);X.push(g.value),K&&(K=g.inclusive)}return new Jt(X,K)}(h,u),D=this.In(u,h,v),x=this.In(u,h,R),k=this.Tn(u,h,m),G=this.En(u.indexId,f,D,v.inclusive,x,R.inclusive,k);return b.forEach(G,j=>r.G(j,t.limit).next(B=>{B.forEach(H=>{let X=L.fromSegments(H.documentKey);o.has(X)||(o=o.add(X),c.push(X))})}))}).next(()=>c)}return b.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=CI(ne.create(e.filters,"and")).map(r=>bu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,c){let u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){let v=t?this.dn(t[m/h]):ao,R=this.An(e,v,r[m%h],i),D=this.Rn(e,v,s[m%h],o),x=c.map(k=>this.An(e,v,k,!0));f.push(...this.createRange(R,D,x))}return f}An(e,t,r,i){let s=new In(e,L.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){let s=new In(e,L.empty(),t,r);return i?s.Zt():s}Pn(e,t){let r=new Lo(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2,i=this.hn(t);return b.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ie(ge.comparator),f=!1;for(let m of u.filters)for(let v of m.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?f=!0:h=h.add(v.field));for(let m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){let r=new wn;for(let i of _n(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=r.Yt(i.kind);Tt.vt.It(s,o)}return r.zt()}dn(e){let t=new wn;return Tt.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){let r=new wn;return Tt.vt.It(Di(this.databaseId,t),r.Yt(function(s){let o=_n(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new wn);let s=0;for(let o of _n(e)){let c=r[s++];for(let u of i)if(this.fn(t,o.fieldPath)&&Ni(c))i=this.gn(i,o,c);else{let h=u.Yt(o.kind);Tt.vt.It(c,h)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){let i=[...e],s=[];for(let o of r.arrayValue.values||[])for(let c of i){let u=new wn;u.seed(c.zt()),Tt.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof J&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=mi(e),i=Xn(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{let o=[];return b.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){let v=m?new bi(m.sequenceNumber,new He(kn(m.readTime),new L(ot(m.documentKey)),m.largestBatchId)):bi.empty(),R=f.fields.map(([D,x])=>new or(ge.fromServerFormat(D),x));return new hr(f.indexId,f.collectionGroup,R,v)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=mi(e),s=Xn(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>b.forEach(c,u=>s.put(bp(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){let r=new Map;return b.forEach(t,(i,s)=>{let o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),b.forEach(c,u=>this.wn(e,i,u).next(h=>{let f=this.Sn(s,u);return h.isEqual(f)?b.resolve():this.bn(e,s,u,h,f)}))))})}Dn(e,t,r,i){return Yn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Yn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){let i=Yn(e),s=new ie(jt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{s=s.add(new In(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let r=new ie(jt),i=this.Vn(t,e);if(i==null)return r;let s=cu(t);if(s!=null){let o=e.data.field(s.fieldPath);if(Ni(o))for(let c of o.arrayValue.values||[])r=r.add(new In(t.indexId,e.key,this.dn(c),i))}else r=r.add(new In(t.indexId,e.key,ao,i));return r}bn(e,t,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let o=[];return function(u,h,f,m,v){let R=u.getIterator(),D=h.getIterator(),x=Jn(R),k=Jn(D);for(;x||k;){let G=!1,j=!1;if(x&&k){let B=f(x,k);B<0?j=!0:B>0&&(G=!0)}else x!=null?j=!0:G=!0;G?(m(k),k=Jn(D)):j?(v(x),x=Jn(R)):(x=Jn(R),k=Jn(D))}}(i,s,jt,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),b.waitFor(o)}yn(e){let t=1;return Xn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>jt(o,c)).filter((o,c,u)=>!c||jt(o,u[c-1])!==0);let i=[];i.push(e);for(let o of r){let c=jt(o,e),u=jt(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];let c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ao,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ao,[]];s.push(IDBKeyRange.bound(c,u))}return s}Cn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kp)}getMinOffset(e,t){return b.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||M())).next(kp)}};function Np(n){return ve(n,"collectionParents")}function Yn(n){return ve(n,"indexEntries")}function mi(n){return ve(n,"indexConfiguration")}function Xn(n){return ve(n,"indexState")}function kp(n){F(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;Jl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new He(e.readTime,e.documentKey,t)}var Op={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ke=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function $m(n,e,t){let r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId),c=0,u=r.J({range:o},(f,m,v)=>(c++,v.delete()));s.push(u.next(()=>{F(c===1)}));let h=[];for(let f of t.mutations){let m=rm(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return b.waitFor(s).next(()=>h)}function Fo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw M();e=n.noDocument}return JSON.stringify(e).length}Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(41943040,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);var Uo=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){F(e.uid!=="");let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=ir(e),o=zt(e);return o.add({}).next(c=>{F(typeof c=="number");let u=new Oi(c,t,r,i),h=function(R,D,x){let k=x.baseMutations.map(j=>Mi(R.ct,j)),G=x.mutations.map(j=>Mi(R.ct,j));return{userId:D,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:k,mutations:G}}(this.serializer,this.userId,u),f=[],m=new ie((v,R)=>$(v.canonicalString(),R.canonicalString()));for(let v of i){let R=rm(this.userId,v.key.path,c);m=m.add(v.key.path.popLast()),f.push(o.put(h)),f.push(s.put(R,Cw))}return m.forEach(v=>{f.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[c]=u.keys()}),b.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return zt(e).get(t).next(r=>r?(F(r.userId===this.userId),vn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?b.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return zt(e).J({index:"userMutationsIndex",range:i},(o,c,u)=>{c.userId===this.userId&&(F(c.batchId>=r),s=vn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return zt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).U("userMutationsIndex",t).next(r=>r.map(i=>vn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=ho(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ir(e).J({range:i},(o,c,u)=>{let[h,f,m]=o,v=ot(f);if(h===this.userId&&t.path.isEqual(v))return zt(e).get(m).next(R=>{if(!R)throw M();F(R.userId===this.userId),s.push(vn(this.serializer,R))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie($),i=[];return t.forEach(s=>{let o=ho(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=ir(e).J({range:c},(h,f,m)=>{let[v,R,D]=h,x=ot(R);v===this.userId&&s.path.isEqual(x)?r=r.add(D):m.done()});i.push(u)}),b.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=ho(this.userId,r),o=IDBKeyRange.lowerBound(s),c=new ie($);return ir(e).J({range:o},(u,h,f)=>{let[m,v,R]=u,D=ot(v);m===this.userId&&r.isPrefixOf(D)?D.length===i&&(c=c.add(R)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){let r=[],i=[];return t.forEach(s=>{i.push(zt(e).get(s).next(o=>{if(o===null)throw M();F(o.userId===this.userId),r.push(vn(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return $m(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();let r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ir(e).J({range:r},(s,o,c)=>{if(s[0]===this.userId){let u=ot(s[1]);i.push(u)}else c.done()}).next(()=>{F(i.length===0)})})}containsKey(e,t){return Wm(e,this.userId,t)}Nn(e){return Hm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function Wm(n,e,t){let r=ho(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),o=!1;return ir(n).J({range:s,H:!0},(c,u,h)=>{let[f,m,v]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function zt(n){return ve(n,"mutations")}function ir(n){return ve(n,"documentMutations")}function Hm(n){return ve(n,"mutationQueues")}var Ir=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var Hu=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{let r=new Ir(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>q.fromTimestamp(new de(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zn(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0,s=[];return Zn(e).J((o,c)=>{let u=wi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Zn(e).J((r,i)=>{let s=wi(i);t(s)})}qn(e){return xp(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}Qn(e,t){return xp(e).put("targetGlobalKey",t)}Kn(e,t){return Zn(e).put(jm(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){let r=Sn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return Zn(e).J({range:i,index:"queryTargetsIndex"},(o,c,u)=>{let h=wi(c);Qi(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=Gt(e);return t.forEach(o=>{let c=Ve(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,t,r){let i=Gt(e);return b.forEach(t,s=>{let o=Ve(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=Gt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Gt(e),s=W();return i.J({range:r,H:!0},(o,c,u)=>{let h=ot(o[1]),f=new L(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=Ve(t.path),i=IDBKeyRange.bound([r],[Zp(r)],!1,!0),s=0;return Gt(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Zn(e).get(t).next(r=>r?wi(r):null)}};function Zn(n){return ve(n,"targets")}function xp(n){return ve(n,"targetGlobal")}function Gt(n){return ve(n,"targetDocuments")}function Vp([n,e],[t,r]){let i=$(n,t);return i===0?$(e,r):i}var Qu=class{constructor(e){this.Un=e,this.buffer=new ie(Vp),this.Wn=0}Gn(){return++this.Wn}zn(e){let t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Vp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Ju=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xn(t)}await this.Hn(3e5)})}},Yu=class{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Me.oe);let r=new Qu(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Op)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Op):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),er()<=Q.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function DI(n,e){return new Yu(n,e)}var Xu=class{constructor(e,t){this.db=e,this.garbageCollector=DI(this,t)}Yn(e){let t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return co(e,r)}removeReference(e,t,r){return co(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return co(e,t)}nr(e,t){return function(i,s){let o=!1;return Hm(i).Y(c=>Wm(i,c,s).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.tr(e,(o,c)=>{if(c<=t){let u=this.nr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),Gt(e).delete(function(m){return[0,Ve(m.path)]}(o))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return co(e,t)}tr(e,t){let r=Gt(e),i,s=Me.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Me.oe&&t(new L(ot(i)),s),s=h,i=u):s=Me.oe}).next(()=>{s!==Me.oe&&t(new L(ot(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function co(n,e){return Gt(n).put(function(r,i){return{targetId:0,path:Ve(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var Bo=class{constructor(){this.changes=new lt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Zu=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return gn(e).put(r)}removeEntry(e,t,r){return gn(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],xo(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=_e.newInvalidDocument(t);return gn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gi(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:_e.newInvalidDocument(t)};return gn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gi(t))},(i,s)=>{r={document:this.ir(t,s),size:Fo(s)}}).next(()=>r)}getEntries(e,t){let r=qe();return this._r(e,t,(i,s)=>{let o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=qe(),i=new ce(L.comparator);return this._r(e,t,(s,o)=>{let c=this.ir(s,o);r=r.insert(s,c),i=i.insert(s,Fo(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return b.resolve();let i=new ie(Fp);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(gi(i.first()),gi(i.last())),o=i.getIterator(),c=o.getNext();return gn(e).J({index:"documentKeyIndex",range:s},(u,h,f)=>{let m=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Fp(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.$(gi(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),xo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gn(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{s?.incrementDocumentReadCount(h.length);let f=qe();for(let m of h){let v=this.ir(L.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);v.isFoundDocument()&&(Yi(t,v)||i.has(v.key))&&(f=f.insert(v.key,v))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=qe(),o=Mp(t,r),c=Mp(t,He.max());return gn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{let m=this.ir(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new el(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Lp(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}rr(e,t){return Lp(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){let r=RI(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return _e.newInvalidDocument(e)}};function Qm(n){return new Zu(n)}var el=class extends Bo{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new lt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new ie((s,o)=>$(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){let u=Tp(this.cr.serializer,o);i=i.add(s.path.popLast());let h=Fo(u);r+=h-c.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){let u=Tp(this.cr.serializer,o.convertToNoDocument(q.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}};function Lp(n){return ve(n,"remoteDocumentGlobal")}function gn(n){return ve(n,"remoteDocumentsV14")}function gi(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Mp(n,e){let t=e.documentKey.path.toArray();return[n,xo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Fp(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=$(t[s],r[s]),i)return i;return i=$(t.length,r.length),i||(i=$(t[t.length-2],r[r.length-2]),i||$(t[t.length-1],r[r.length-1]))}var tl=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var qo=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ai(r.mutation,i,Be.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){let i=at();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=vi();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let r=at();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=qe(),o=Ti(),c=function(){return Ti()}();return t.forEach((u,h)=>{let f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof et)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ai(f.mutation,h,f.mutation.getFieldMask(),de.now())):o.set(h.key,Be.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new tl(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Ti(),i=new ce((o,c)=>o-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=r.get(u)||Be.empty();f=c.applyToLocalView(h,f),r.set(u,f);let m=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,m=Im();f.forEach(v=>{if(!s.has(v)){let R=Rm(t.get(v),r.get(v));R!==null&&m.set(v,R),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(at()),c=-1,u=s;return o.next(h=>b.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:wm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=vi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,o=vi();return this.indexManager.getCollectionParents(e,s).next(c=>b.forEach(c,u=>{let h=function(m,v){return new Rn(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{let f=h.getKey();o.get(f)===null&&(o=o.insert(f,_e.newInvalidDocument(f)))});let c=vi();return o.forEach((u,h)=>{let f=s.get(u);f!==void 0&&Ai(f.mutation,h,Be.empty(),de.now()),Yi(t,h)&&(c=c.insert(u,h))}),c})}};var nl=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return b.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:zm(i.bundledQuery),readTime:Ie(i.readTime)}}(t)),b.resolve()}};var rl=class{constructor(){this.overlays=new ce(L.comparator),this.Ir=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){let r=at();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){let i=at(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ce((h,f)=>h-f),o=this.overlays.getIterator();for(;o.hasNext();){let h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=at(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=at(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return b.resolve(c)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xi(t,r));let s=this.Ir.get(t);s===void 0&&(s=W(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}};var il=class{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}};var Ui=class{constructor(){this.Tr=new ie(pe.Er),this.dr=new ie(pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new L(new te([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new L(new te([])),r=new pe(t,e),i=new pe(t,e+1),s=W();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},pe=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||$(e.wr,t.wr)}static Ar(e,t){return $(e.wr,t.wr)||L.comparator(e.key,t.key)}};var sl=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(pe.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Oi(s,t,r,i);this.mutationQueue.push(o);for(let c of i)this.br=this.br.add(new pe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{let c=this.Dr(o.wr);s.push(c)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie($);return t.forEach(i=>{let s=new pe(i,0),o=new pe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{r=r.add(c.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;L.isDocumentKey(s)||(s=s.child(""));let o=new pe(new L(s),0),c=new ie($);return this.br.forEachWhile(u=>{let h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.wr)),!0)},o),b.resolve(this.Cr(c))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(t.mutations,i=>{let s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new pe(t,0),i=this.br.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var ol=class{constructor(e){this.Mr=e,this.docs=function(){return new ce(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_e.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=qe(),o=t.path,c=new L(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Jl(em(f),r)<=0||(i.has(f.key)||Yi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){M()}Or(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new al(this)}getSize(e){return b.resolve(this.size)}},al=class extends Bo{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var cl=class{constructor(e){this.persistence=e,this.Nr=new lt(t=>Sn(t),Qi),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ui,this.targetCount=0,this.kr=Ir.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),b.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Ir(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Kn(t),b.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),b.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.Br.containsKey(t))}};var jo=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Me(0),this.Kr=!1,this.Kr=!0,this.$r=new il,this.referenceDelegate=e(this),this.Ur=new cl(this),this.indexManager=new $u,this.remoteDocumentCache=function(i){return new ol(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Oo(t),this.Gr=new nl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new sl(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);let i=new ul(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},ul=class extends wo{constructor(e){super(),this.currentSequenceNumber=e}},zo=class n{constructor(e){this.persistence=e,this.Jr=new Ui,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),b.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{let i=L.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return b.or([()=>b.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var ll=class{constructor(e){this.serializer=e}O(e,t,r,i){let s=new Io("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ep,{unique:!0}),u.createObjectStore("documentMutations")}(e),Up(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Up(e)),o=o.next(()=>function(u){let h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ep,{unique:!0});let m=h.store("mutations"),v=f.map(R=>m.put(R));return b.waitFor(v)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){let h=u.createObjectStore("documentOverlays",{keyPath:qw});h.createIndex("collectionPathOverlayIndex",jw,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",zw,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){let h=u.createObjectStore("remoteDocumentsV14",{keyPath:Dw});h.createIndex("documentKeyIndex",Nw),h.createIndex("collectionGroupIndex",kw)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Mw}).createIndex("sequenceNumberIndex",Fw,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Uw}).createIndex("documentKeyIndex",Bw,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Fo(i)}).next(()=>{let r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){let t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>b.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>b.forEach(c,u=>{F(u.userId===s.userId);let h=vn(this.serializer,u);return $m(e,s.userId,h).next(()=>{})}))}))}ii(e){let t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{let s=[];return r.J((o,c)=>{let u=new te(o),h=function(m){return[0,Ve(m)]}(u);s.push(t.get(h).next(f=>f?b.resolve():(m=>t.put({targetId:0,path:Ve(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Lw});let r=t.store("collectionParents"),i=new Fi,s=o=>{if(i.add(o)){let c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Ve(u)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{let u=new te(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,u],h)=>{let f=ot(c);return s(f.popLast())}))}oi(e){let t=e.store("targets");return t.J((r,i)=>{let s=wi(i),o=jm(this.serializer,s);return t.put(o)})}_i(e,t){let r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{let c=t.store("remoteDocumentsV14"),u=function(m){return m.document?new L(te.fromString(m.document.name).popFirst(5)):m.noDocument?L.fromSegments(m.noDocument.path):m.unknownDocument?L.fromSegments(m.unknownDocument.path):M()}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>b.waitFor(i))}ai(e,t){let r=t.store("mutations"),i=Qm(this.serializer),s=new jo(zo.Zr,this.serializer.ct);return r.U().next(o=>{let c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();vn(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),b.forEach(c,(u,h)=>{let f=new me(h),m=Vo.lt(this.serializer,f),v=s.getIndexManager(f),R=Uo.lt(f,this.serializer,v,s.referenceDelegate);return new qo(i,R,m,v).recalculateAndSaveOverlaysForDocumentKeys(new Ri(t,Me.oe),u).next()})})}};function Up(n){n.createObjectStore("targetDocuments",{keyPath:xw}).createIndex("documentTargetsIndex",Vw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ow,{unique:!0}),n.createObjectStore("targetGlobal")}var Xc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",hl=class n{constructor(e,t,r,i,s,o,c,u,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!n.D())throw new O(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xu(this,i),this.Ai=t+"main",this.serializer=new Oo(u),this.Ri=new dr(this.Ai,this.hi,new ll(this.serializer)),this.$r=new Uu,this.Ur=new Hu(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Qm(this.serializer),this.Gr=new Fu,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,Xc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Me(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>uo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(rn(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return _i(e).get("owner").next(t=>b.resolve(this.vi(t)))}Ci(e){return uo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=ve(t,"clientMetadata");return r.U().next(i=>{let s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return b.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(let t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?b.resolve(!0):_i(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,Xc);return!1}}return!(!this.networkEnabled||!this.inForeground)||uo(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new Ri(e,Me.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>uo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Uo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wu(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Vo.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("IndexedDbPersistence","Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?$w:u===16?Kw:u===15?Xl:u===14?om:u===13?sm:u===12?Gw:u===11?im:void M()}(this.hi),o;return this.Ri.runTransaction(e,i,s,c=>(o=new Ri(c,this.Qr?this.Qr.next():Me.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new O(C.FAILED_PRECONDITION,tm);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return _i(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(C.FAILED_PRECONDITION,Xc)})}Di(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _i(e).put("owner",t)}static D(){return dr.D()}bi(e){let t=_i(e);return t.get("owner").next(r=>this.vi(r)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):b.resolve())}Mi(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();let t=/(?:Version|Mobile)\/1[456]/;Ha()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{let r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){xe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function _i(n){return ve(n,"owner")}function uo(n){return ve(n,"clientMetadata")}function NI(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var dl=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=W(),i=W();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var fl=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Go=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ha()?8:nm(he())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new fl;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(er()<=Q.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(er()<=Q.DEBUG&&N("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(er()<=Q.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$e(t))):b.resolve())}Yi(e,t){if(dp(t))return b.resolve(null);let r=$e(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Po(t,null,"F"),r=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=W(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let h=this.ts(t,c);return this.ns(t,h,o,u.readTime)?this.Yi(e,Po(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return dp(t)||i.isEqual(q.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{let o=this.ts(t,s);return this.ns(t,o,r,i)?b.resolve(null):(er()<=Q.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tr(t)),this.rs(e,o,t,Sw(i,-1)).next(c=>c))})}ts(e,t){let r=new ie(ym(e));return t.forEach((i,s)=>{Yi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return er()<=Q.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",tr(t)),this.Ji.getDocumentsMatchingQuery(e,t,He.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var pl=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ce($),this._s=new lt(s=>Sn(s),Qi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qo(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function Jm(n,e,t,r){return new pl(n,e,t,r)}async function Ym(n,e){let t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],c=[],u=W();for(let h of i){o.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function kI(n,e){let t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let m=h.batch,v=m.keys(),R=b.resolve();return v.forEach(D=>{R=R.next(()=>f.getEntry(u,D)).next(x=>{let k=h.docVersions.get(D);F(k!==null),x.version.compareTo(k)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Xm(n){let e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function OI(n,e){let t=z(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let c=[];e.targetChanges.forEach((f,m)=>{let v=i.get(m);if(!v)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(ye.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(x,k,G){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(v,R,f)&&c.push(t.Ur.updateTargetData(s,R))});let u=qe(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(xI(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(q.min())){let f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return b.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function xI(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=qe();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function VI(n,e){let t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LI(n,e){let t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ml(n,e,t){let r=z(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bp(n,e,t){let r=z(n),i=q.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){let m=z(u),v=m._s.get(f);return v!==void 0?b.resolve(m.os.get(v)):m.Ur.getTargetData(h,f)}(r,o,$e(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?s:W())).next(c=>(MI(r,Zw(e),c),{documents:c,Ts:s})))}function MI(n,e,t){let r=n.us.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}var Ko=class{constructor(){this.activeTargetIds=sI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var $o=class{constructor(){this.so=new Ko,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ko,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var gl=class{_o(e){}shutdown(){}};var Wo=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var lo=null;function Zc(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}var FI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var _l=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Ce="WebChannelConnection",yl=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){let c=Zc(),u=this.xo(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);let h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,u,h,i).then(f=>(N("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw ur("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,o,c){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){let i=FI[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let s=Zc();return new Promise((o,c)=>{let u=new $c;u.setWithCredentials(!0),u.listenOnce(Wc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fi.NO_ERROR:let f=u.getResponseJson();N(Ce,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case fi.TIMEOUT:N(Ce,`RPC '${e}' ${s} timed out`),c(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case fi.HTTP_ERROR:let m=u.getStatus();if(N(Ce,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);let R=v?.error;if(R&&R.status&&R.message){let D=function(k){let G=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(R.status);c(new O(D,R.message))}else c(new O(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(C.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N(Ce,`RPC '${e}' ${s} completed.`)}});let h=JSON.stringify(i);N(Ce,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){let i=Zc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jc(),c=Qc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let f=s.join("");N(Ce,`Creating RPC '${e}' stream ${i}: ${f}`,u);let m=o.createWebChannel(f,u),v=!1,R=!1,D=new _l({Io:k=>{R?N(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(v||(N(Ce,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),N(Ce,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},To:()=>m.close()}),x=(k,G,j)=>{k.listen(G,B=>{try{j(B)}catch(H){setTimeout(()=>{throw H},0)}})};return x(m,Qn.EventType.OPEN,()=>{R||(N(Ce,`RPC '${e}' stream ${i} transport opened.`),D.yo())}),x(m,Qn.EventType.CLOSE,()=>{R||(R=!0,N(Ce,`RPC '${e}' stream ${i} transport closed`),D.So())}),x(m,Qn.EventType.ERROR,k=>{R||(R=!0,ur(Ce,`RPC '${e}' stream ${i} transport errored:`,k),D.So(new O(C.UNAVAILABLE,"The operation could not be completed")))}),x(m,Qn.EventType.MESSAGE,k=>{var G;if(!R){let j=k.data[0];F(!!j);let B=j,H=B.error||((G=B[0])===null||G===void 0?void 0:G.error);if(H){N(Ce,`RPC '${e}' stream ${i} received error:`,H);let X=H.status,K=function(y){let I=fe[y];if(I!==void 0)return Dm(I)}(X),w=H.message;K===void 0&&(K=C.INTERNAL,w="Unknown error status: "+X+" with message "+H.message),R=!0,D.So(new O(K,w)),m.close()}else N(Ce,`RPC '${e}' stream ${i} received:`,j),D.bo(j)}}),x(c,Hc.STAT_EVENT,k=>{k.stat===oo.PROXY?N(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===oo.NOPROXY&&N(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}};function UI(){return typeof window<"u"?window:null}function go(){return typeof document<"u"?document:null}function da(n){return new Ou(n,!0)}var Bi=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var Ho=class{constructor(e,t,r,i,s,o,c,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Bi(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(xe(t.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},vl=class extends Ho{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=wI(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Ie(o.readTime):q.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=Lu(this.serializer),t.addTarget=function(s,o){let c,u=o.target;if(c=So(u)?{documents:Lm(s,u)}:{query:Mm(s,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Nm(s,o.resumeToken);let h=xu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=vr(s,o.snapshotVersion.toTimestamp());let h=xu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let r=EI(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=Lu(this.serializer),t.removeTarget=e,this.a_(t)}},wl=class extends Ho{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return F(!!e.streamToken),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=II(e.writeResults,e.commitTime),r=Ie(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=Lu(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Mi(this.serializer,r))};this.a_(t)}};var Il=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Vu(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(C.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Vu(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},El=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xe(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var Tl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ln(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){let h=z(u);h.L_.add(4),await Xi(h),h.q_.set("Unknown"),h.L_.delete(4),await fa(h)}(this))})}),this.q_=new El(r,i)}};async function fa(n){if(Ln(n))for(let e of n.B_)await e(!0)}async function Xi(n){for(let e of n.B_)await e(!1)}function Zm(n,e){let t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ch(t)?ah(t):Cr(t).r_()&&oh(t,e))}function sh(n,e){let t=z(n),r=Cr(t);t.N_.delete(e),r.r_()&&eg(t,e),t.N_.size===0&&(r.r_()?r.o_():Ln(t)&&t.q_.set("Unknown"))}function oh(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(n).A_(e)}function eg(n,e){n.Q_.xe(e),Cr(n).R_(e)}function ah(n){n.Q_=new ku({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Cr(n).start(),n.q_.v_()}function ch(n){return Ln(n)&&!Cr(n).n_()&&n.N_.size>0}function Ln(n){return z(n).L_.size===0}function tg(n){n.Q_=void 0}async function BI(n){n.q_.set("Online")}async function qI(n){n.N_.forEach((e,t)=>{oh(n,e)})}async function jI(n,e){tg(n),ch(n)?(n.q_.M_(e),ah(n)):n.q_.set("Unknown")}async function zI(n,e,t){if(n.q_.set("Online"),e instanceof No&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qo(n,r)}else if(e instanceof ar?n.Q_.Ke(e):e instanceof Do?n.Q_.He(e):n.Q_.We(e),!t.isEqual(q.min()))try{let r=await Xm(n.localStore);t.compareTo(r)>=0&&await function(s,o){let c=s.Q_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{let f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),eg(s,u);let m=new wr(f.target,u,h,f.sequenceNumber);oh(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Qo(n,r)}}async function Qo(n,e,t){if(!rn(e))throw e;n.L_.add(1),await Xi(n),n.q_.set("Offline"),t||(t=()=>Xm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await fa(n)})}function ng(n,e){return e().catch(t=>Qo(n,t,e))}async function Zi(n){let e=z(n),t=en(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;GI(e);)try{let i=await VI(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,KI(e,i)}catch(i){await Qo(e,i)}rg(e)&&ig(e)}function GI(n){return Ln(n)&&n.O_.length<10}function KI(n,e){n.O_.push(e);let t=en(n);t.r_()&&t.V_&&t.m_(e.mutations)}function rg(n){return Ln(n)&&!en(n).n_()&&n.O_.length>0}function ig(n){en(n).start()}async function $I(n){en(n).p_()}async function WI(n){let e=en(n);for(let t of n.O_)e.m_(t.mutations)}async function HI(n,e,t){let r=n.O_.shift(),i=Cu.from(r,e,t);await ng(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Zi(n)}async function QI(n,e){e&&en(n).V_&&await async function(r,i){if(function(o){return Cm(o)&&o!==C.ABORTED}(i.code)){let s=r.O_.shift();en(r).s_(),await ng(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zi(r)}}(n,e),rg(n)&&ig(n)}async function qp(n,e){let t=z(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");let r=Ln(t);t.L_.add(3),await Xi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await fa(t)}async function JI(n,e){let t=z(n);e?(t.L_.delete(2),await fa(t)):e||(t.L_.add(2),await Xi(t),t.q_.set("Unknown"))}function Cr(n){return n.K_||(n.K_=function(t,r,i){let s=z(t);return s.w_(),new vl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:BI.bind(null,n),Ro:qI.bind(null,n),mo:jI.bind(null,n),d_:zI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ch(n)?ah(n):n.q_.set("Unknown")):(await n.K_.stop(),tg(n))})),n.K_}function en(n){return n.U_||(n.U_=function(t,r,i){let s=z(t);return s.w_(),new wl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$I.bind(null,n),mo:QI.bind(null,n),f_:WI.bind(null,n),g_:HI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zi(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var Al=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let o=Date.now()+r,c=new n(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function uh(n,e){if(xe("AsyncQueue",`${e}: ${n}`),rn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}var Jo=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=vi(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Yo=class{constructor(){this.W_=new ce(L.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):M():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},Er=class n{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,Jo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var bl=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Sl=class{constructor(){this.queries=jp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=z(t),s=i.queries;i.queries=jp(),s.forEach((o,c)=>{for(let u of c.j_)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}};function jp(){return new lt(n=>_m(n),ha)}async function lh(n,e){let t=z(n),r=3,i=e.query,s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new bl,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=uh(o,`Initialization of query '${tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&dh(t)}async function hh(n,e){let t=z(n),r=e.query,i=3,s=t.queries.get(r);if(s){let o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YI(n,e){let t=z(n),r=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.j_)c.X_(i)&&(r=!0);o.z_=i}}r&&dh(t)}function XI(n,e,t){let r=z(n),i=r.queries.get(e);if(i)for(let s of i.j_)s.onError(t);r.queries.delete(e)}function dh(n){n.Y_.forEach(e=>{e.next()})}var Rl,zp;(zp=Rl||(Rl={})).ea="default",zp.Cache="cache";var qi=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rl.Cache}};var Xo=class{constructor(e){this.key=e}},Zo=class{constructor(e){this.key=e}},Pl=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=ym(e),this.Ra=new Jo(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new Yo,i=t?t.Ra:this.Ra,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let v=i.get(f),R=Yi(this.query,m)?m:null,D=!!v&&this.mutatedKeys.has(v.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations),k=!1;v&&R?v.data.isEqual(R.data)?D!==x&&(r.track({type:3,doc:R}),k=!0):this.ga(v,R)||(r.track({type:2,doc:R}),k=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(c=!0)):!v&&R?(r.track({type:0,doc:R}),k=!0):v&&!R&&(r.track({type:1,doc:v}),k=!0,(u||h)&&(c=!0)),k&&(R?(o=o.add(R),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let o=e.fa.G_();o.sort((f,m)=>function(R,D){let x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(R)-x(D)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;let c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Er(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Zo(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Xo(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Er.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},Cl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Dl=class{constructor(e){this.key=e,this.va=!1}},Nl=class{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new lt(c=>_m(c),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new ce(L.comparator),this.Na=new Map,this.La=new Ui,this.Ba={},this.ka=new Map,this.qa=Ir.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function ZI(n,e,t=!0){let r=lg(n),i,s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await sg(r,e,t,!0),i}async function eE(n,e){let t=lg(n);await sg(t,e,!0,!1)}async function sg(n,e,t,r){let i=await LI(n.localStore,$e(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await tE(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Zm(n.remoteStore,i),c}async function tE(n,e,t,r,i){n.Ka=(m,v,R)=>async function(x,k,G,j){let B=k.view.ma(G);B.ns&&(B=await Bp(x.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,B)));let H=j&&j.targetChanges.get(k.targetId),X=j&&j.targetMismatches.get(k.targetId)!=null,K=k.view.applyChanges(B,x.isPrimaryClient,H,X);return Kp(x,k.targetId,K.wa),K.snapshot}(n,m,v,R);let s=await Bp(n.localStore,e,!0),o=new Pl(e,s.Ts),c=o.ma(s.documents),u=Vi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);Kp(n,t,h.wa);let f=new Cl(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function nE(n,e,t){let r=z(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ha(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ml(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&sh(r.remoteStore,i.targetId),kl(r,i.targetId)}).catch(xn)):(kl(r,i.targetId),await ml(r.localStore,i.targetId,!0))}async function rE(n,e){let t=z(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sh(t.remoteStore,r.targetId))}async function iE(n,e,t){let r=hg(n);try{let i=await function(o,c){let u=z(o),h=de.now(),f=c.reduce((R,D)=>R.add(D.key),W()),m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=qe(),x=W();return u.cs.getEntries(R,f).next(k=>{D=k,D.forEach((G,j)=>{j.isValidDocument()||(x=x.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(k=>{m=k;let G=[];for(let j of c){let B=hI(j,m.get(j.key).overlayedDocument);B!=null&&G.push(new et(j.key,B,lm(B.value.mapValue),Te.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,G,c)}).next(k=>{v=k;let G=k.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(R,k.batchId,G)})}).then(()=>({batchId:v.batchId,changes:wm(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ce($)),h=h.insert(c,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,t),await es(r,i.changes),await Zi(r.remoteStore)}catch(i){let s=uh(i,"Failed to persist write");t.reject(s)}}async function og(n,e){let t=z(n);try{let r=await OI(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Na.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?F(o.va):i.removedDocuments.size>0&&(F(o.va),o.va=!1))}),await es(t,r,e)}catch(r){await xn(r)}}function Gp(n,e,t){let r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((s,o)=>{let c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let u=z(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(let v of m.j_)v.Z_(c)&&(h=!0)}),h&&dh(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sE(n,e,t){let r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),s=i&&i.key;if(s){let o=new ce(L.comparator);o=o.insert(s,_e.newNoDocument(s,q.min()));let c=W().add(s),u=new Co(q.min(),new Map,new ce($),o,c);await og(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),fh(r)}else await ml(r.localStore,e,!1).then(()=>kl(r,e,t)).catch(xn)}async function oE(n,e){let t=z(n),r=e.batch.batchId;try{let i=await kI(t.localStore,e);cg(t,r,null),ag(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await es(t,i)}catch(i){await xn(i)}}async function aE(n,e,t){let r=z(n);try{let i=await function(o,c){let u=z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(F(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);cg(r,e,t),ag(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await es(r,i)}catch(i){await xn(i)}}function ag(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function cg(n,e,t){let r=z(n),i=r.Ba[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function kl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ug(n,r)})}function ug(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(sh(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),fh(n))}function Kp(n,e,t){for(let r of t)r instanceof Xo?(n.La.addReference(r.key,e),cE(n,r)):r instanceof Zo?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ug(n,r.key)):M()}function cE(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+t),n.xa.add(r),fh(n))}function fh(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new L(te.fromString(e)),r=n.qa.next();n.Na.set(r,new Dl(t)),n.Oa=n.Oa.insert(t,r),Zm(n.remoteStore,new wr($e(Ji(t.path)),r,"TargetPurposeLimboResolution",Me.oe))}}async function es(n,e,t){let r=z(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){let m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);let m=dl.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){let f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(h,v=>b.forEach(v.$i,R=>f.persistence.referenceDelegate.addReference(m,v.targetId,R)).next(()=>b.forEach(v.Ui,R=>f.persistence.referenceDelegate.removeReference(m,v.targetId,R)))))}catch(m){if(!rn(m))throw m;N("LocalStore","Failed to update sequence numbers: "+m)}for(let m of h){let v=m.targetId;if(!m.fromCache){let R=f.os.get(v),D=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(v,x)}}}(r.localStore,s))}async function uE(n,e){let t=z(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());let r=await Ym(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new O(C.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await es(t,r.hs)}}function lE(n,e){let t=z(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let i=W(),s=t.Ma.get(e);if(!s)return i;for(let o of s){let c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}function lg(n){let e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sE.bind(null,e),e.Ca.d_=YI.bind(null,e.eventManager),e.Ca.$a=XI.bind(null,e.eventManager),e}function hg(n){let e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aE.bind(null,e),e}var tn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=da(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Jm(this.persistence,new Go,e.initialUser,this.serializer)}Ga(e){return new jo(zo.Zr,this.serializer)}Wa(e){return new $o}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};tn.provider={build:()=>new tn};var Ol=class extends tn{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await hg(this.Ja.syncEngine),await Zi(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Jm(this.persistence,new Go,e.initialUser,this.serializer)}ja(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new Ju(r,e.asyncQueue,t)}Ha(e,t){let r=new du(t,this.persistence);return new hu(e.asyncQueue,r)}Ga(e){let t=NI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new hl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,UI(),go(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new $o}};var On=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uE.bind(null,this.syncEngine),await JI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Sl}()}createDatastore(e){let t=da(e.databaseInfo.databaseId),r=function(s){return new yl(s)}(e.databaseInfo);return function(s,o,c,u){return new Il(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new Tl(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Gp(this.syncEngine,t,0),function(){return Wo.D()?new Wo:new gl}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){let m=new Nl(i,s,o,c,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=z(i);N("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};On.provider={build:()=>new On};var ji=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var xl=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let o=z(i),c={documents:s.map(m=>Li(o.serializer,m))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,te.emptyPath(),c,s.length),h=new Map;u.forEach(m=>{let v=vI(o.serializer,m);h.set(v.key.toString(),v)});let f=[];return s.forEach(m=>{let v=h.get(m.toString());F(!!v),f.push(v)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Dn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=L.fromPath(r);this.mutations.push(new ki(i,this.precondition(i)))}),await async function(r,i){let s=z(r),o={writes:i.map(c=>Mi(s.serializer,c))};await s.Mo("Commit",s.serializer.databaseId,te.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new O(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Vl=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Bi(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{let e=new xl(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{let t=this.updateFunction(e);return!Hi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Cm(t)}return!1}};var Ll=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=yo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=uh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function eu(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ym(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $p(n,e){n.asyncQueue.verifyOperationInProgress();let t=await hE(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>qp(e.remoteStore,i)),n._onlineComponents=e}async function hE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ur("Error using user provided cache. Falling back to memory cache: "+t),await eu(n,new tn)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await eu(n,new tn);return n._offlineComponents}async function ph(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await $p(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await $p(n,new On))),n._onlineComponents}function dE(n){return ph(n).then(e=>e.syncEngine)}function fE(n){return ph(n).then(e=>e.datastore)}async function ea(n){let e=await ph(n),t=e.eventManager;return t.onListen=ZI.bind(null,e.syncEngine),t.onUnlisten=nE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rE.bind(null,e.syncEngine),t}function pE(n,e,t={}){let r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){let f=new ji({next:v=>{f.Za(),o.enqueueAndForget(()=>hh(s,m));let R=v.docs.has(c);!R&&v.fromCache?h.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&u&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new qi(Ji(c.path),f,{includeMetadataChanges:!0,_a:!0});return lh(s,m)}(await ea(n),n.asyncQueue,e,t,r)),r.promise}function mE(n,e,t={}){let r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){let f=new ji({next:v=>{f.Za(),o.enqueueAndForget(()=>hh(s,m)),v.fromCache&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new qi(c,f,{includeMetadataChanges:!0,_a:!0});return lh(s,m)}(await ea(n),n.asyncQueue,e,t,r)),r.promise}function dg(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Wp=new Map;function fg(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gE(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hp(n){if(!L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qp(n){if(L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function We(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=pa(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _E(n,e){if(e<=0)throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}var ta=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Tr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ta({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ta(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tu;switch(r.type){case"firstParty":return new su(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Wp.get(t);r&&(N("ComponentProvider","Removing Datastore"),Wp.delete(t),r.terminate())}(this),Promise.resolve()}};function pg(n,e,t,r={}){var i;let s=(n=We(n,Tr))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=me.MOCK_USER;else{c=Sd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new me(h)}n._authCredentials=new nu(new _o(c,u))}}var nn=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Ne=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Wt=class n extends nn{constructor(e,t,r){super(e,t,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new L(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Qe(n,e,...t){if(n=ae(n),fg("collection","path",e),n instanceof Tr){let r=te.fromString(e,...t);return Qp(r),new Wt(n,null,r)}{if(!(n instanceof Ne||n instanceof Wt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return Qp(r),new Wt(n.firestore,null,r)}}function ue(n,e,...t){if(n=ae(n),arguments.length===1&&(e=yo.newId()),fg("doc","path",e),n instanceof Tr){let r=te.fromString(e,...t);return Hp(r),new Ne(n,null,new L(r))}{if(!(n instanceof Ne||n instanceof Wt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return Hp(r),new Ne(n.firestore,n instanceof Wt?n.converter:null,new L(r))}}var na=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Bi(this,"async_queue_retry"),this.Vu=()=>{let r=go();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=go();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new je;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!rn(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=Al.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function Jp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ht=class extends Tr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new na,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new na(e),this._firestoreClient=void 0,await e}}};function mg(n,e,t){t||(t="(default)");let r=Xr(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Ot(s,e))return i;throw new O(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function ts(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yE(n),n._firestoreClient}function yE(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,h,f){return new fu(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ll(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}var Ar=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(ye.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var br=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var zi=class{constructor(e){this._methodName=e}};var Gi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}};var Ki=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var vE=/^__.*__$/,Ml=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new et(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zt(e,this.data,t,this.fieldTransforms)}},ra=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new et(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function gg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var Fl=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gg(this.Cu)&&vE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},Ul=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||da(e)}Qu(e,t,r,i=!1){return new Fl({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function mh(n){let e=n._freezeSettings(),t=da(n._databaseId);return new Ul(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _g(n,e,t,r,i,s={}){let o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);gh("Data must be an object, but it was:",o,r);let c=yg(r,o),u,h;if(s.merge)u=new Be(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let v=Bl(e,m,t);if(!o.contains(v))throw new O(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);wg(f,v)||f.push(v)}u=new Be(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Ml(new De(c),u,h)}var ia=class n extends zi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function wE(n,e,t,r){let i=n.Qu(1,e,t);gh("Data must be an object, but it was:",i,r);let s=[],o=De.empty();Vn(r,(u,h)=>{let f=_h(e,u,t);h=ae(h);let m=i.Nu(f);if(h instanceof ia)s.push(f);else{let v=ns(h,m);v!=null&&(s.push(f),o.set(f,v))}});let c=new Be(s);return new ra(o,c,i.fieldTransforms)}function IE(n,e,t,r,i,s){let o=n.Qu(1,e,t),c=[Bl(e,r,t)],u=[i];if(s.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)c.push(Bl(e,s[v])),u.push(s[v+1]);let h=[],f=De.empty();for(let v=c.length-1;v>=0;--v)if(!wg(h,c[v])){let R=c[v],D=u[v];D=ae(D);let x=o.Nu(R);if(D instanceof ia)h.push(R);else{let k=ns(D,x);k!=null&&(h.push(R),f.set(R,k))}}let m=new Be(h);return new ra(f,m,o.fieldTransforms)}function EE(n,e,t,r=!1){return ns(t,n.Qu(r?4:3,e))}function ns(n,e){if(vg(n=ae(n)))return gh("Unsupported field value:",e,n),yg(n,e);if(n instanceof zi)return function(r,i){if(!gg(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let c of r){let u=ns(c,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=de.fromDate(r);return{timestampValue:vr(i.serializer,s)}}if(r instanceof de){let s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vr(i.serializer,s)}}if(r instanceof Gi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ar)return{bytesValue:Nm(i.serializer,r._byteString)};if(r instanceof Ne){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ki)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return nh(c.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${pa(r)}`)}(n,e)}function yg(n,e){let t={};return am(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(n,(r,i)=>{let s=ns(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function vg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Gi||n instanceof Ar||n instanceof Ne||n instanceof zi||n instanceof Ki)}function gh(n,e,t){if(!vg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=pa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Bl(n,e,t){if((e=ae(e))instanceof br)return e._internalPath;if(typeof e=="string")return _h(n,e);throw sa("Field path arguments must be of type string or ",n,!1,void 0,t)}var TE=new RegExp("[~\\*/\\[\\]]");function _h(n,e,t){if(e.search(TE)>=0)throw sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new br(...e.split("."))._internalPath}catch{throw sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sa(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function wg(n,e){return n.some(t=>t.isEqual(e))}var Sr=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new ql(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(yh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},ql=class extends Sr{data(){return super.data()}};function yh(n,e){return typeof e=="string"?_h(n,e):e instanceof br?e._internalPath:e._delegate._internalPath}function Ig(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var $i=class{},oa=class extends $i{};function St(n,e,...t){let r=[];e instanceof $i&&r.push(e),r=r.concat(t),function(s){let o=s.filter(u=>u instanceof jl).length,c=s.filter(u=>u instanceof aa).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var aa=class n extends oa{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return Tg(e._query,t),new nn(e.firestore,e.converter,Su(e._query,t))}_parse(e){let t=mh(e.firestore);return function(s,o,c,u,h,f,m){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Xp(m,f);let R=[];for(let D of m)R.push(Yp(u,s,D));v={arrayValue:{values:R}}}else v=Yp(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Xp(m,f),v=EE(c,o,m,f==="in"||f==="not-in");return J.create(h,f,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function sn(n,e,t){let r=e,i=yh("where",n);return aa._create(i,r,t)}var jl=class n extends $i{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i,c=s.getFlattenedFilters();for(let u of c)Tg(o,u),o=Su(o,u)}(e._query,t),new nn(e.firestore,e.converter,Su(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var zl=class n extends oa{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n(e,t,r)}_apply(e){return new nn(e.firestore,e.converter,Po(e._query,this._limit,this._limitType))}};function Eg(n){return _E("limit",n),zl._create("limit",n,"F")}function Yp(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gm(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(te.fromString(t));if(!L.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Di(n,new L(r))}if(t instanceof Ne)return Di(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(t)}.`)}function Xp(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tg(n,e){let t=function(i,s){for(let o of i)for(let c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var ca=class{convertValue(e,t="none"){switch(bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Vn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>oe(o.doubleValue));return new Ki(s)}convertGeoPoint(e){return new Gi(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eh(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){let t=bt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=te.fromString(e);F(qm(r));let i=new fr(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Ag(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Gl=class extends ca{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}};var $t=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Wi=class extends Sr{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(yh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},cr=class extends Wi{data(e={}){return super.data(e)}},ua=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new $t(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new cr(this._firestore,this._userDataWriter,r.key,r,new $t(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let u=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $t(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $t(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:AE(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function AE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function Rt(n){n=We(n,Ne);let e=We(n.firestore,ht);return pE(ts(e),n._key).then(t=>Sg(e,n,t))}var Rr=class extends ca{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}};function tt(n){n=We(n,nn);let e=We(n.firestore,ht),t=ts(e),r=new Rr(e);return Ig(n._query),mE(t,n._query).then(i=>new ua(e,r,n,i))}function nt(n,e,t){n=We(n,Ne);let r=We(n.firestore,ht),i=Ag(n.converter,e,t);return bg(r,[_g(mh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Te.none())])}function on(n){return bg(We(n.firestore,ht),[new Dn(n._key,Te.none())])}function Mn(n,...e){var t,r,i;n=ae(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jp(e[o])||(s=e[o],o++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Jp(e[o])){let m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof Ne)h=We(n.firestore,ht),f=Ji(n._key.path),u={next:m=>{e[o]&&e[o](Sg(h,n,m))},error:e[o+1],complete:e[o+2]};else{let m=We(n,nn);h=We(m.firestore,ht),f=m._query;let v=new Rr(h);u={next:R=>{e[o]&&e[o](new ua(h,v,m,R))},error:e[o+1],complete:e[o+2]},Ig(n._query)}return function(v,R,D,x){let k=new ji(x),G=new qi(R,k,D);return v.asyncQueue.enqueueAndForget(async()=>lh(await ea(v),G)),()=>{k.Za(),v.asyncQueue.enqueueAndForget(async()=>hh(await ea(v),G))}}(ts(h),f,c,u)}function bg(n,e){return function(r,i){let s=new je;return r.asyncQueue.enqueueAndForget(async()=>iE(await dE(r),i,s)),s.promise}(ts(n),e)}function Sg(n,e,t){let r=t.docs.get(e._key),i=new Rr(n);return new Wi(n,i,e._key,r,new $t(t.hasPendingWrites,t.fromCache),e.converter)}var Kl=class{constructor(e){this.kind="memory",this._onlineComponentProvider=On.provider,e?.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=tn.provider}toJSON(){return{kind:this.kind}}},$l=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=bE(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function Rg(n){return new Kl(n)}function Pg(n){return new $l(n)}var Wl=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=On.provider,this._offlineComponentProvider={build:t=>new Ol(t,e?.cacheSizeBytes,this.forceOwnership)}}};function bE(n){return new Wl(n?.forceOwnership)}var SE={maxAttempts:5};function yi(n,e){if((n=ae(n)).firestore!==e)throw new O(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Hl=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=mh(t)}get(t){let r=yi(t,this._firestore),i=new Gl(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();let o=s[0];if(o.isFoundDocument())return new Sr(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Sr(this._firestore,i,r._key,null,r.converter);throw M()})}set(t,r,i){let s=yi(t,this._firestore),o=Ag(s.converter,r,i),c=_g(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let o=yi(t,this._firestore),c;return c=typeof(r=ae(r))=="string"||r instanceof br?IE(this._dataReader,"Transaction.update",o._key,r,i,s):wE(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,c),this}delete(t){let r=yi(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=yi(e,this._firestore),r=new Rr(this._firestore);return super.get(e).then(i=>new Wi(this._firestore,r,t._key,i._document,new $t(!1,!1),t.converter))}};function vh(n,e,t){n=We(n,ht);let r=Object.assign(Object.assign({},SE),t);return function(s){if(s.maxAttempts<1)throw new O(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,c){let u=new je;return s.asyncQueue.enqueueAndForget(async()=>{let h=await fE(s);new Vl(s.asyncQueue,h,c,o,u).au()}),u.promise}(ts(n),i=>e(new Hl(n,i)),r)}(function(e,t=!0){(function(i){Pr=i})(Mt),Lt(new ze("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),c=new ht(new ru(r.getProvider("auth-internal")),new au(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ye(Yf,"4.7.3",e),Ye(Yf,"4.7.3","esm2017")})();var wh={apiKey:"AIzaSyAa9OINItYcHNhEAe6D4QJnu_ot1hkecVU",authDomain:"boats-40d0f.firebaseapp.com",projectId:"boats-40d0f",storageBucket:"boats-40d0f.firebasestorage.app",messagingSenderId:"355163071345",appId:"1:355163071345:web:afd4119d177258ad128cd0",measurementId:"G-MPG40GLGCB"};window.__bip=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),window.__bip=n;try{window.S&&S.meView==="install"&&window.render()}catch{}});"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{});var Dg=uc(location.hostname==="carrytheboats.app"?{...wh,authDomain:"carrytheboats.app"}:wh),Ng=location.hostname==="localhost"&&new URLSearchParams(location.search).has("emu"),Le=Gc(Dg),ee=mg(Dg,{localCache:Ng?Rg():Pg()});Ng&&(to(Le,"http://127.0.0.1:9199",{disableWarnings:!0}),pg(ee,"127.0.0.1",8181),window.__emuSignIn=n=>no(Le,wt.credential(JSON.stringify({sub:n,email:n+"@test.com",email_verified:!0,name:n}))).then(()=>location.reload()),window.__emuSignIn2=(n,e)=>no(Le,wt.credential(JSON.stringify({sub:n,email:e,email_verified:!0,name:n}))).then(()=>location.reload()));var ga=(n,e={})=>({j:JSON.stringify(n),at:Date.now(),...e}),Pt=n=>{let e=n.data();if(!e)return null;if(typeof e.j!="string")return e;try{return JSON.parse(e.j)}catch{return null}},Cg=n=>({docs:n.map(e=>({id:e.id,data:()=>Pt(e)}))});function RE(n){let e=/^data\/users\/(.+)$/.exec(n);return e?`users/${e[1]}/data`:n}function PE(n){let e=Qe(ee,RE(n));return{get:async()=>Cg((await tt(e)).docs),onSnapshot:(t,r)=>Mn(e,i=>t(Cg(i.docs)),r),doc:t=>{let r=ue(e,t);return{get:async()=>{let i=await Rt(r);return{exists:i.exists(),data:()=>i.exists()?Pt(i):null}},set:i=>nt(r,ga(i)),delete:()=>on(r)}}}}function CE(){let n=Le.currentUser.uid,e=Qe(ee,"threads"),t={},r={},i=()=>{let s={};s[n]={out:Object.fromEntries(Object.entries(t))};for(let[o,c]of Object.entries(r))s[o]=s[o]||{out:{}},s[o].out[n]=c;return{docs:Object.entries(s).map(([o,c])=>({id:o,data:()=>c}))}};return{onSnapshot:(s,o)=>{let c=Mn(St(e,sn("from","==",n)),h=>{t={},h.docs.forEach(f=>{let m=Pt(f);m&&(t[f.data().to]=m)}),s(i())},o),u=Mn(St(e,sn("to","==",n)),h=>{r={},h.docs.forEach(f=>{let m=Pt(f);m&&(r[f.data().from]=m)}),s(i())},o);return()=>{c(),u()}},get:async()=>i(),doc:s=>({get:async()=>({exists:!0,data:()=>i().docs.find(o=>o.id===s)?.data()||null}),set:async o=>{if(s!==n)throw new Error("permission");let c=o&&o.out||{},u=Object.entries(c).map(([h,f])=>nt(ue(e,`${n}_${h}`),ga(f,{from:n,to:h})));for(let h of Object.keys(t))c[h]||u.push(on(ue(e,`${n}_${h}`)));await Promise.all(u)},delete:async()=>{await Promise.all(Object.keys(t).map(o=>on(ue(e,`${n}_${o}`))))}})}}var DE={collection:n=>n==="dms"?CE():PE(n)},kg={id:async()=>Le.currentUser?.uid||null,name:async()=>Le.currentUser?.displayName||null},NE={save:async({filename:n,data:e})=>{let t=e instanceof Blob?e:new Blob([e]),r=new File([t],n,{type:t.type||"application/octet-stream"});if(navigator.canShare&&navigator.canShare({files:[r]})&&/iPhone|iPad|Android/i.test(navigator.userAgent))try{return await navigator.share({files:[r]}),{status:"saved"}}catch(s){if(s.name==="AbortError")throw{code:"declined"}}let i=document.createElement("a");return i.href=URL.createObjectURL(t),i.download=n,document.body.appendChild(i),i.click(),setTimeout(()=>{URL.revokeObjectURL(i.href),i.remove()},4e3),{status:"saved"}}};window.claude={use:async n=>({db:DE,user:kg,downloads:NE})[n]||null};window.boatsSignOut=async()=>{await Mc(Le),localStorage.clear(),location.reload()};window.boatsUserCount=async()=>{try{let n=await Rt(ue(ee,"meta","founders"));return n.exists()?Math.max(0,(n.data().next||1)-1):0}catch{return 0}};window.boatsDmPhoto={save:async(n,e,t)=>{let r=Le.currentUser.uid,i=`${r}_${n}_${e}`;return await nt(ue(ee,"dmphotos",i),{from:r,to:n,d:t,at:e}),i},get:async n=>{let e=await Rt(ue(ee,"dmphotos",n));return e.exists()?e.data().d:null}};window.boatsSignIn=async n=>{let e=n==="apple"?new oi("apple.com"):new wt;n==="google"&&e.setCustomParameters({prompt:"select_account"});try{await qc(Le,e),location.reload()}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/operation-not-supported-in-this-environment")return jc(Le,e);t.code!=="auth/popup-closed-by-user"&&t.code!=="auth/cancelled-popup-request"&&window.toast&&window.toast("Sign-in failed. Try again.")}};await Vc(Le,ro).catch(()=>{});zc(Le).then(n=>{n&&n.user&&!window.__boatsHadUser&&location.reload()}).catch(()=>{});var Dr=new Promise(n=>{let e=Lc(Le,t=>{e(),window.__boatsHadUser=!!t,n(t)})});kg.id=async()=>(await Dr)?.uid||null;window.boatsClaimName=async(n,e)=>{let t=Le.currentUser;if(!t)return"error";let r=String(n||"").trim().toLowerCase();if(!r)return"error";let i=ue(ee,"usernames",r);try{await vh(ee,async o=>{let c=await o.get(i);if(c.exists()){if(c.data().uid!==t.uid)throw new Error("taken")}else o.set(i,{uid:t.uid,at:Date.now()})})}catch(o){return o&&o.message==="taken"?"taken":"error"}let s=String(e||"").trim().toLowerCase();if(s&&s!==r)try{let o=ue(ee,"usernames",s),c=await Rt(o);c.exists()&&c.data().uid===t.uid&&await on(o)}catch{}return"ok"};window.boatsClaimFounder=async()=>{let n=Le.currentUser;if(!n||n.email===Og)return 0;let e=ue(ee,"founders",n.uid),t=ue(ee,"meta","founders");try{return await vh(ee,async r=>{let i=await r.get(t),s=await r.get(e);if(s.exists())return s.data().n;if(!i.exists())return 0;let o=i.data().next;return o>=1&&o<=999?(r.set(e,{n:o,at:Date.now()}),r.update(t,{next:o+1}),o):0})}catch{return 0}};var Og="boatsapplication@gmail.com";window.boatsOfficialMe=!1;window.boatsOfficialReady=Dr.then(n=>{let e=!!(n&&n.email===Og&&n.emailVerified);return window.boatsOfficialMe=e,e&&nt(ue(ee,"meta","official"),{uid:n.uid,at:Date.now()}).catch(()=>{}),e});window.boatsWatchOfficial=n=>Dr.then(e=>{e&&Mn(ue(ee,"meta","official"),t=>n(t.exists()?t.data().uid:null),()=>{})});window.boatsMod={watchAll:n=>Dr.then(e=>{e&&Mn(Qe(ee,"moderation"),t=>{let r={};t.docs.forEach(i=>{r[i.id]=i.data()}),n(r)},()=>{})}),watchNotices:n=>Dr.then(e=>{e&&Mn(ue(ee,"notices",e.uid),t=>n(t.exists()?t.data().items||[]:[]),()=>{})})};var ma;window.boatsAdminReady=new Promise(n=>{ma=n});Dr.then(async n=>{if(!n){ma(!1);return}let e=ue(ee,"accounts",n.uid);try{let t=await Rt(e);await nt(e,{email:n.email||"",name:n.displayName||"",createdAt:t.exists()&&t.data().createdAt||Date.now(),lastAt:Date.now()})}catch{}try{if(await tt(St(Qe(ee,"accounts"),Eg(1))),window.boatsAdmin={load:async()=>{let[t,r]=await Promise.all([tt(Qe(ee,"accounts")),tt(Qe(ee,"feedback"))]),i=t.docs.map(o=>({uid:o.id,...o.data()})),s=[];return r.docs.forEach(o=>{let c=Pt(o);(c&&c.items||[]).forEach(u=>s.push({...u,uid:o.id}))}),{accounts:i,feedback:s}},edit:async(t,r,i)=>{let s=ue(ee,t,r),o=await Rt(s),c=o.exists()?Pt(o)||{}:{};await nt(s,ga(i(c)))},delPhotos:async(t,r,i)=>{let s=[`${t}_${r}`,...Array.from({length:i||0},(o,c)=>`${t}_${r}_${c+1}`)];for(let o of s)try{await on(ue(ee,"photos",o))}catch{}},setStatus:async(t,r)=>{let i=ue(ee,"moderation",t);r?await nt(i,{...r,at:Date.now()}):await on(i)},notify:async(t,r)=>{let i=ue(ee,"notices",t),s=await Rt(i),o=s.exists()?s.data().items||[]:[];await nt(i,{items:[...o,{at:Date.now(),text:String(r).slice(0,500)}].slice(-20)})},wipe:async t=>{let r=async c=>{try{await on(c)}catch{}},i=await tt(Qe(ee,`users/${t}/data`));for(let c of i.docs)await r(c.ref);for(let c of["people","posts","reactions","feedback"])await r(ue(ee,c,t));let s=Qe(ee,"threads");for(let c of[St(s,sn("from","==",t)),St(s,sn("to","==",t))])for(let u of(await tt(c)).docs)await r(u.ref);let o=await tt(St(Qe(ee,"usernames"),sn("uid","==",t)));for(let c of o.docs)await r(c.ref);await nt(ue(ee,"moderation",t),{status:"deleted",at:Date.now()})},userData:async t=>{let r=await tt(Qe(ee,`users/${t}/data`)),i=[];return r.docs.forEach(s=>{let o=Pt(s);o&&o.kind==="workout"&&i.push(o)}),{workouts:i}},userThreads:async t=>{let r=Qe(ee,"threads"),[i,s]=await Promise.all([tt(St(r,sn("from","==",t))),tt(St(r,sn("to","==",t)))]);return[...i.docs,...s.docs].map(o=>({from:o.data().from,to:o.data().to,msgs:Pt(o)||[]})).filter(o=>o.msgs.length)},editFeedback:async(t,r)=>{let i=ue(ee,"feedback",t),s=await Rt(i),o=s.exists()?Pt(s)||{}:{};await nt(i,ga({...o,items:r(o.items||[])}))}},window.render)try{window.render()}catch{}ma(!0)}catch{window.boatsAdmin=null,ma(!1)}});var xg=document.createElement("script");xg.textContent=document.getElementById("appsrc").textContent;document.body.appendChild(xg);
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
