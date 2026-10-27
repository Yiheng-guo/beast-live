(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Cd=""+new URL("support-wechat-Di4LVwf9.png",import.meta.url).href;const Cl="180",dr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,Sc=1,Pd=2,Ku=1,Zu=2,kn=3,si=0,Kt=1,sn=2,Gn=0,Ai=1,Di=2,yc=3,Ec=4,Dd=5,Si=100,Ld=101,Ud=102,Id=103,Nd=104,Fd=200,Od=201,Bd=202,zd=203,Ra=204,Pa=205,kd=206,Hd=207,Vd=208,Gd=209,Wd=210,Xd=211,qd=212,Yd=213,$d=214,Da=0,La=1,Ua=2,pr=3,Ia=4,Na=5,Fa=6,Oa=7,Ju=0,jd=1,Kd=2,ii=0,Qu=1,eh=2,th=3,Rl=4,nh=5,ih=6,rh=7,sh=300,mr=301,gr=302,Ba=303,za=304,yo=306,ka=1e3,Ti=1001,Ha=1002,on=1003,Zd=1004,vs=1005,An=1006,ko=1007,wi=1008,yn=1009,oh=1010,ah=1011,ts=1012,Pl=1013,Li=1014,Cn=1015,Pn=1016,Dl=1017,Ll=1018,ns=1020,lh=35902,ch=35899,uh=1021,hh=1022,Mn=1023,is=1026,rs=1027,Ul=1028,Il=1029,dh=1030,Nl=1031,Fl=1033,to=33776,no=33777,io=33778,ro=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,$a=37496,ja=37808,Ka=37809,Za=37810,Ja=37811,Qa=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,ol=37819,al=37820,ll=37821,cl=36492,ul=36494,hl=36495,dl=36283,fl=36284,pl=36285,ml=36286,Jd=3200,Qd=3201,fh=0,ef=1,ni="",rn="srgb",_r="srgb-linear",mo="linear",tt="srgb",Vi=7680,Tc=519,tf=512,nf=513,rf=514,ph=515,sf=516,of=517,af=518,lf=519,wc=35044,cf=35048,Ac="300 es",Rn=2e3,go=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const jr=Math.PI/180,vr=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Ol(n,e){return(n%e+e)%e}function uf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hf(n,e,t){return n!==e?(t-n)/(e-n):0}function Kr(n,e,t){return(1-t)*n+t*e}function df(n,e,t,i){return Kr(n,e,1-Math.exp(-t*i))}function ff(n,e=1){return e-Math.abs(Ol(n,e*2)-e)}function pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _f(n,e){return n+Math.random()*(e-n)}function vf(n){return n*(.5-Math.random())}function xf(n){n!==void 0&&(Cc=n);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(n){return n*jr}function bf(n){return n*vr}function Sf(n){return(n&n-1)===0&&n!==0}function yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tf(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),p=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:jr,RAD2DEG:vr,generateUUID:Tr,clamp:Xe,euclideanModulo:Ol,mapLinear:uf,inverseLerp:hf,lerp:Kr,damp:df,pingpong:ff,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:_f,randFloatSpread:vf,seededRandom:xf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:yf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:Ht,denormalize:lr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const p=s[o+0],d=s[o+1],g=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==p||c!==d||u!==g){let m=1-a;const f=l*p+c*d+u*g+h*M,E=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const y=Math.sqrt(T),w=Math.atan2(y,f*E);m=Math.sin(m*w)/y,a=Math.sin(a*w)/y}const _=a*E;if(l=l*m+p*_,c=c*m+d*_,u=u*m+g*_,h=h*m+M*_,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-a*d,e[t+2]=c*g+u*d+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),p=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new C,Rc=new mn;class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],M=r[0],m=r[3],f=r[6],E=r[1],T=r[4],_=r[7],y=r[2],w=r[5],R=r[8];return s[0]=o*M+a*E+l*y,s[3]=o*m+a*T+l*w,s[6]=o*f+a*_+l*R,s[1]=c*M+u*E+h*y,s[4]=c*m+u*T+h*w,s[7]=c*f+u*_+h*R,s[2]=p*M+d*E+g*y,s[5]=p*m+d*T+g*w,s[8]=p*f+d*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,d=c*s-o*l,g=t*h+i*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=p*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new We;function mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wf(){const n=ss("canvas");return n.style.display="block",n}const Pc={};function os(n){n in Pc||(Pc[n]=!0,console.warn(n))}function Af(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Dc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){const n={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_r]:{primaries:e,whitePoint:i,transfer:mo,toXYZ:Dc,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Dc,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const $e=Cf();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gi===void 0&&(Gi=ss("canvas")),Gi.width=e.width,Gi.height=e.height;const r=Gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pf=0;class Bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Go(r[o].image)):s.push(Go(r[o]))}else s=Go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const Wo=new C;class Bt extends Ii{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Ti,r=Ti,s=An,o=wi,a=Mn,l=yn,c=Bt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Tr(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=sh;Bt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,_=(d+1)/2,y=(f+1)/2,w=(u+p)/4,R=(h+M)/4,D=(g+m)/4;return T>_&&T>y?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=R/i):_>y?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=D/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=R/s,r=D/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-M)/E,this.z=(p-u)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Bt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Lf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ms.subVectors(this.max,Or),Wi.subVectors(e.a,Or),Xi.subVectors(e.b,Or),qi.subVectors(e.c,Or),$n.subVectors(Xi,Wi),jn.subVectors(qi,Xi),pi.subVectors(Wi,qi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Xo(t,Wi,Xi,qi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Wi,Xi,qi,Ms))?!1:(bs.crossVectors($n,jn),t=[bs.x,bs.y,bs.z],Xo(t,Wi,Xi,qi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,xs=new Ni,Wi=new C,Xi=new C,qi=new C,$n=new C,jn=new C,pi=new C,Or=new C,Ms=new C,bs=new C,mi=new C;function Xo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const If=new Ni,Br=new C,qo=new C;class wr{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):If.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(qo)),this.expandByPoint(Br.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new C,Yo=new C,Ss=new C,Kn=new C,$o=new C,ys=new C,jo=new C;class zl{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yo.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ss),a=Kn.dot(this.direction),l=-Kn.dot(Ss),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=s*u,h>=0)if(p>=-g)if(p<=g){const M=1/u;h*=M,p*=M,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yo).addScaledVector(Ss,p),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){$o.subVectors(t,e),ys.subVectors(i,e),jo.crossVectors($o,ys);let o=this.direction.dot(jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(ys.crossVectors(Kn,ys));if(l<0)return null;const c=a*this.direction.dot($o.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(jo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,r,s,o,a,l,c,u,h,p,d,g,M,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,p,d,g,M,m)}set(e,t,i,r,s,o,a,l,c,u,h,p,d,g,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,d=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-M*c,t[9]=-a*l,t[2]=M-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,d=l*h,g=c*u,M=c*h;t[0]=p+M*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=M+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,d=l*h,g=c*u,M=c*h;t[0]=p-M*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=M-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,d=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+M,t[1]=l*h,t[5]=M*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-M*h}else if(e.order==="XZY"){const p=o*l,d=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+M,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=M*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Ff)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Zn.crossVectors(i,en),Zn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Zn.crossVectors(i,en)),Zn.normalize(),Es.crossVectors(en,Zn),r[0]=Zn.x,r[4]=Es.x,r[8]=en.x,r[1]=Zn.y,r[5]=Es.y,r[9]=en.y,r[2]=Zn.z,r[6]=Es.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],M=i[6],m=i[10],f=i[14],E=i[3],T=i[7],_=i[11],y=i[15],w=r[0],R=r[4],D=r[8],x=r[12],b=r[1],L=r[5],O=r[9],z=r[13],Y=r[2],W=r[6],X=r[10],G=r[14],k=r[3],re=r[7],ie=r[11],ve=r[15];return s[0]=o*w+a*b+l*Y+c*k,s[4]=o*R+a*L+l*W+c*re,s[8]=o*D+a*O+l*X+c*ie,s[12]=o*x+a*z+l*G+c*ve,s[1]=u*w+h*b+p*Y+d*k,s[5]=u*R+h*L+p*W+d*re,s[9]=u*D+h*O+p*X+d*ie,s[13]=u*x+h*z+p*G+d*ve,s[2]=g*w+M*b+m*Y+f*k,s[6]=g*R+M*L+m*W+f*re,s[10]=g*D+M*O+m*X+f*ie,s[14]=g*x+M*z+m*G+f*ve,s[3]=E*w+T*b+_*Y+y*k,s[7]=E*R+T*L+_*W+y*re,s[11]=E*D+T*O+_*X+y*ie,s[15]=E*x+T*z+_*G+y*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],M=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*p+i*c*p+r*a*d-i*l*d)+M*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],M=e[13],m=e[14],f=e[15],E=h*m*c-M*p*c+M*l*d-a*m*d-h*l*f+a*p*f,T=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,_=u*M*c-g*h*c+g*a*d-o*M*d-u*a*f+o*h*f,y=g*h*l-u*M*l-g*a*p+o*M*p+u*a*m-o*h*m,w=t*E+i*T+r*_+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=E*R,e[1]=(M*p*s-h*m*s-M*r*d+i*m*d+h*r*f-i*p*f)*R,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*f+i*l*f)*R,e[3]=(h*l*s-a*p*s-h*r*c+i*p*c+a*r*d-i*l*d)*R,e[4]=T*R,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*R,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*d+t*l*d)*R,e[8]=_*R,e[9]=(g*h*s-u*M*s-g*i*d+t*M*d+u*i*f-t*h*f)*R,e[10]=(o*M*s-g*a*s+g*i*c-t*M*c-o*i*f+t*a*f)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=y*R,e[13]=(u*M*r-g*h*r+g*i*p-t*M*p-u*i*m+t*h*m)*R,e[14]=(g*a*r-o*M*r-g*i*l+t*M*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*p+t*a*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,d=s*u,g=s*h,M=o*u,m=o*h,f=a*h,E=l*c,T=l*u,_=l*h,y=i.x,w=i.y,R=i.z;return r[0]=(1-(M+f))*y,r[1]=(d+_)*y,r[2]=(g-T)*y,r[3]=0,r[4]=(d-_)*w,r[5]=(1-(p+f))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+T)*R,r[9]=(m-E)*R,r[10]=(1-(p+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Rn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let g,M;if(l)g=s/(o-s),M=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===go)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),p=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,M;if(l)g=1/(o-s),M=o/(o-s);else if(a===Rn)g=-2/(o-s),M=-(o+s)/(o-s);else if(a===go)g=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new C,_n=new it,Nf=new C(0,0,0),Ff=new C(1,1,1),Zn=new C,Es=new C,en=new C,Uc=new it,Ic=new mn;class Dn{constructor(e=0,t=0,i=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const Nc=new C,$i=new mn,On=new it,Ts=new C,zr=new C,Bf=new C,zf=new mn,Fc=new C(1,0,0),Oc=new C(0,1,0),Bc=new C(0,0,1),zc={type:"added"},kf={type:"removed"},ji={type:"childadded",child:null},Ko={type:"childremoved",child:null};class yt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new C,t=new Dn,i=new mn,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ts.copy(e):Ts.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(zr,Ts,this.up):On.lookAt(Ts,zr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(On),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new C(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new C,Bn=new C,Zo=new C,zn=new C,Ki=new C,Zi=new C,kc=new C,Jo=new C,Qo=new C,ea=new C,ta=new ot,na=new ot,ia=new ot;class xn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Bn.subVectors(i,t),Zo.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Bn),l=vn.dot(Zo),c=Bn.dot(Bn),u=Bn.dot(Zo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Bn.subVectors(e,t),vn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ki.subVectors(r,i),Zi.subVectors(s,i),Jo.subVectors(e,i);const l=Ki.dot(Jo),c=Zi.dot(Jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,r);const u=Ki.dot(Qo),h=Zi.dot(Qo);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ki,o);ea.subVectors(e,s);const d=Ki.dot(ea),g=Zi.dot(ea);if(g>=0&&d<=g)return t.copy(s);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Zi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return kc.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(kc,a);const f=1/(m+M+p);return o=M*f,a=p*f,t.copy(i).addScaledVector(Ki,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Ol(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return $e.workingToColorSpace(Ot.copy(this),e),Math.round(Xe(Ot.r*255,0,255))*65536+Math.round(Xe(Ot.g*255,0,255))*256+Math.round(Xe(Ot.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=rn){$e.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ws);const i=Kr(Jn.h,ws.h,t),r=Kr(Jn.s,ws.s,t),s=Kr(Jn.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ue;Ue.NAMES=vh;let Hf=0;class Ar extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Ai,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Pa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ra&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new C,As=new ue;let Vf=0;class dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class xh extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mh extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gf=0;const un=new it,sa=new yt,Ji=new C,tn=new Ni,kr=new Ni,Ut=new C;class Et extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?Mh:xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(tn.min,kr.min),tn.expandByPoint(Ut),Ut.addVectors(tn.max,kr.max),tn.expandByPoint(Ut)):(tn.expandByPoint(kr.min),tn.expandByPoint(kr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),Ut.add(Ji)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new C,l[D]=new C;const c=new C,u=new C,h=new C,p=new ue,d=new ue,g=new ue,M=new C,m=new C;function f(D,x,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,b),p.fromBufferAttribute(s,D),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(M),a[x].add(M),a[b].add(M),l[D].add(m),l[x].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,x=E.length;D<x;++D){const b=E[D],L=b.start,O=b.count;for(let z=L,Y=L+O;z<Y;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new C,_=new C,y=new C,w=new C;function R(D){y.fromBufferAttribute(r,D),w.copy(y);const x=a[D];T.copy(x),T.sub(y.multiplyScalar(y.dot(x))).normalize(),_.crossVectors(w,x);const L=_.dot(l[D])<0?-1:1;o.setXYZW(D,T.x,T.y,T.z,L)}for(let D=0,x=E.length;D<x;++D){const b=E[D],L=b.start,O=b.count;for(let z=L,Y=L+O;z<Y;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),M=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new dt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=e(p,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new it,gi=new zl,Cs=new wr,Vc=new C,Rs=new C,Ps=new C,Ds=new C,oa=new C,Ls=new C,Gc=new C,Us=new C;class pt extends yt{constructor(e=new Et,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(oa.fromBufferAttribute(h,e),o?Ls.addScaledVector(oa,u):Ls.addScaledVector(oa.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(Cs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Cs,Vc)===null||gi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Hc.copy(s).invert(),gi.copy(e.ray).applyMatrix4(Hc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=p.length;g<M;g++){const m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,y=T;_<y;_+=3){const w=a.getX(_),R=a.getX(_+1),D=a.getX(_+2);r=Is(this,f,e,i,c,u,h,w,R,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=g,f=M;m<f;m+=3){const E=a.getX(m),T=a.getX(m+1),_=a.getX(m+2);r=Is(this,o,e,i,c,u,h,E,T,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=p.length;g<M;g++){const m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,y=T;_<y;_+=3){const w=_,R=_+1,D=_+2;r=Is(this,f,e,i,c,u,h,w,R,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,f=M;m<f;m+=3){const E=m,T=m+1,_=m+2;r=Is(this,o,e,i,c,u,h,E,T,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wf(n,e,t,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;Us.copy(a),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Is(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Rs),n.getVertexPosition(l,Ps),n.getVertexPosition(c,Ds);const u=Wf(n,e,t,i,Rs,Ps,Ds,Gc);if(u){const h=new C;xn.getBarycoord(Gc,Rs,Ps,Ds,h),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,h,new ue)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,h,new ue)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new C,materialIndex:0};xn.getNormal(Rs,Ps,Ds,p.normal),u.face=p,u.barycoord=h}return u}class Fi extends Et{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function g(M,m,f,E,T,_,y,w,R,D,x){const b=_/R,L=y/D,O=_/2,z=y/2,Y=w/2,W=R+1,X=D+1;let G=0,k=0;const re=new C;for(let ie=0;ie<X;ie++){const ve=ie*L-z;for(let Be=0;Be<W;Be++){const Re=Be*b-O;re[M]=Re*E,re[m]=ve*T,re[f]=Y,c.push(re.x,re.y,re.z),re[M]=0,re[m]=0,re[f]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(Be/R),h.push(1-ie/D),G+=1}}for(let ie=0;ie<D;ie++)for(let ve=0;ve<R;ve++){const Be=p+ve+W*ie,Re=p+ve+W*(ie+1),je=p+(ve+1)+W*(ie+1),Ke=p+(ve+1)+W*ie;l.push(Be,Re,Ke),l.push(Re,je,Ke),k+=6}a.addGroup(d,k,x),d+=k,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function Xf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const as={clone:xr,merge:Vt};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sh extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new C,Wc=new ue,Xc=new ue;class jt extends Sh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class $f extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Qi,er,e,t);r.layers=this.layers,this.add(r);const s=new jt(Qi,er,e,t);s.layers=this.layers,this.add(s);const o=new jt(Qi,er,e,t);o.layers=this.layers,this.add(o);const a=new jt(Qi,er,e,t);a.layers=this.layers,this.add(a);const l=new jt(Qi,er,e,t);l.layers=this.layers,this.add(l);const c=new jt(Qi,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yh extends Bt{constructor(e=[],t=mr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jf extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Gn});s.uniforms.tEquirect.value=t;const o=new pt(r,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=An),new $f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Nt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jf extends Bt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=on,u=on,h,p){super(null,o,a,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qc extends dt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new it,Yc=new it,Ns=[],$c=new Ni,Qf=new it,Hr=new pt,Vr=new wr;class oi extends pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Qf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),$c.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union($c)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),Vr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(i),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,tr),Yc.multiplyMatrices(i,tr),Hr.matrixWorld=Yc,Hr.raycast(e,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=s,l.object=this,t.push(l)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jf(new Float32Array(r*this.count),r,this.count,Ul,Cn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new C,ep=new C,tp=new We;class ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=la.subVectors(i,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tp.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new wr,np=new ue(.5,.5),Fs=new C;class Hl{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],p=s[6],d=s[7],g=s[8],M=s[9],m=s[10],f=s[11],E=s[12],T=s[13],_=s[14],y=s[15];if(r[0].setComponents(c-o,d-u,f-g,y-E).normalize(),r[1].setComponents(c+o,d+u,f+g,y+E).normalize(),r[2].setComponents(c+a,d+h,f+M,y+T).normalize(),r[3].setComponents(c-a,d-h,f-M,y-T).normalize(),i)r[4].setComponents(l,p,m,_).normalize(),r[5].setComponents(c-l,d-p,f-m,y-_).normalize();else if(r[4].setComponents(c-l,d-p,f-m,y-_).normalize(),t===Rn)r[5].setComponents(c+l,d+p,f+m,y+_).normalize();else if(t===go)r[5].setComponents(l,p,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=np.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jc=new it,gl=new zl,Os=new wr,Bs=new C;class _o extends yt{constructor(e=new Et,t=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;jc.copy(r).invert(),gl.copy(e.ray).applyMatrix4(jc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,M=d;g<M;g++){const m=c.getX(g);Bs.fromBufferAttribute(h,m),Kc(Bs,m,l,r,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,M=d;g<M;g++)Bs.fromBufferAttribute(h,g),Kc(Bs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kc(n,e,t,i,r,s,o){const a=gl.distanceSqToPoint(n);if(a<t){const l=new C;gl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Th extends Bt{constructor(e,t,i=Li,r,s,o,a=on,l=on,c,u=is,h=1){if(u!==is&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vl extends Et{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,p=t,d=2*h+p,g=i*2+s,M=r+1,m=new C,f=new C;for(let E=0;E<=g;E++){let T=0,_=0,y=0,w=0;if(E<=i){const x=E/i,b=x*Math.PI/2;_=-u-e*Math.cos(b),y=e*Math.sin(b),w=-e*Math.cos(b),T=x*h}else if(E<=i+s){const x=(E-i)/s;_=-u+x*t,y=e,w=0,T=h+x*p}else{const x=(E-i-s)/i,b=x*Math.PI/2;_=u+e*Math.sin(b),y=e*Math.cos(b),w=e*Math.sin(b),T=h+p+x*h}const R=Math.max(0,Math.min(1,T/d));let D=0;E===0?D=.5/r:E===g&&(D=-.5/r);for(let x=0;x<=r;x++){const b=x/r,L=b*Math.PI*2,O=Math.sin(L),z=Math.cos(L);f.x=-y*z,f.y=_,f.z=y*O,a.push(f.x,f.y,f.z),m.set(-y*z,w,y*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+D,R)}if(E>0){const x=(E-1)*M;for(let b=0;b<r;b++){const L=x+b,O=x+b+1,z=E*M+b,Y=E*M+b+1;o.push(L,O,z),o.push(O,Y,z)}}}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Eo extends Et{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],d=[];let g=0;const M=[],m=i/2;let f=0;E(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(p,3)),this.setAttribute("uv",new ut(d,2));function E(){const _=new C,y=new C;let w=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const x=[],b=D/s,L=b*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,Y=z*l+a,W=Math.sin(Y),X=Math.cos(Y);y.x=L*W,y.y=-b*i+m,y.z=L*X,h.push(y.x,y.y,y.z),_.set(W,R,X).normalize(),p.push(_.x,_.y,_.z),d.push(z,1-b),x.push(g++)}M.push(x)}for(let D=0;D<r;D++)for(let x=0;x<s;x++){const b=M[x][D],L=M[x+1][D],O=M[x+1][D+1],z=M[x][D+1];(e>0||x!==0)&&(u.push(b,L,z),w+=3),(t>0||x!==s-1)&&(u.push(L,O,z),w+=3)}c.addGroup(f,w,0),f+=w}function T(_){const y=g,w=new ue,R=new C;let D=0;const x=_===!0?e:t,b=_===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*b,0),p.push(0,b,0),d.push(.5,.5),g++;const L=g;for(let O=0;O<=r;O++){const Y=O/r*l+a,W=Math.cos(Y),X=Math.sin(Y);R.x=x*X,R.y=m*b,R.z=x*W,h.push(R.x,R.y,R.z),p.push(0,b,0),w.x=W*.5+.5,w.y=X*.5*b+.5,d.push(w.x,w.y),g++}for(let O=0;O<r;O++){const z=y+O,Y=L+O;_===!0?u.push(Y,Y+1,z):u.push(Y+1,Y,z),D+=3}c.addGroup(f,D,_===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends Eo{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new To(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,r=[],s=[],o=[],a=new C,l=new it;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Xe(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ah extends qn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ip extends Ah{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const zs=new C,ca=new Gl,ua=new Gl,ha=new Gl;class Ch extends qn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(zs.subVectors(r[0],r[1]).add(r[0]),c=zs);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(zs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=zs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),ca.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,M,m),ua.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,M,m),ha.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ua.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),ha.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return i.set(ca.calc(l),ua.calc(l),ha.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function rp(n,e){const t=1-n;return t*t*e}function sp(n,e){return 2*(1-n)*n*e}function op(n,e){return n*n*e}function Zr(n,e,t,i){return rp(n,e)+sp(n,t)+op(n,i)}function ap(n,e){const t=1-n;return t*t*t*e}function lp(n,e){const t=1-n;return 3*t*t*n*e}function cp(n,e){return 3*(1-n)*n*n*e}function up(n,e){return n*n*n*e}function Jr(n,e,t,i,r){return ap(n,e)+lp(n,t)+cp(n,i)+up(n,r)}class hp extends qn{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dp extends qn{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y),Jr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fp extends qn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends qn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends qn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rh extends qn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Zc(a,l.x,c.x,u.x,h.x),Zc(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var _p=Object.freeze({__proto__:null,ArcCurve:ip,CatmullRomCurve3:Ch,CubicBezierCurve:hp,CubicBezierCurve3:dp,EllipseCurve:Ah,LineCurve:fp,LineCurve3:pp,QuadraticBezierCurve:mp,QuadraticBezierCurve3:Rh,SplineCurve:gp});class Wl extends Et{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Xe(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,p=new ue,d=new C,g=new C,M=new C;let m=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,d.x=f*1,d.y=-m,d.z=f*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(g)}for(let E=0;E<=t;E++){const T=i+E*u*r,_=Math.sin(T),y=Math.cos(T);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*y,o.push(h.x,h.y,h.z),p.x=E/t,p.y=w/(e.length-1),a.push(p.x,p.y);const R=l[3*w+0]*_,D=l[3*w+1],x=l[3*w+0]*y;c.push(R,D,x)}}for(let E=0;E<t;E++)for(let T=0;T<e.length-1;T++){const _=T+E*e.length,y=_,w=_+e.length,R=_+e.length+1,D=_+1;s.push(y,w,D),s.push(R,D,w)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.points,e.segments,e.phiStart,e.phiLength)}}class Oi extends Et{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,d=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const E=f*p-o;for(let T=0;T<c;T++){const _=T*h-s;g.push(_,-E,0),M.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const T=E+c*f,_=E+c*(f+1),y=E+1+c*(f+1),w=E+1+c*f;d.push(T,_,w),d.push(_,y,w)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends Et{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,p=new C,d=[],g=[],M=[],m=[];for(let f=0;f<=i;f++){const E=[],T=f/i;let _=0;f===0&&o===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){const w=y/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),M.push(p.x,p.y,p.z),m.push(w+_,1-T),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){const T=u[f][E+1],_=u[f][E],y=u[f+1][E],w=u[f+1][E+1];(f!==0||o>0)&&d.push(T,_,w),(f!==i-1||l<Math.PI)&&d.push(_,y,w)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xl extends Et{constructor(e=new Rh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new ue;let u=new C;const h=[],p=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(p,3)),this.setAttribute("uv",new ut(d,2));function M(){for(let T=0;T<t;T++)m(T);m(s===!1?t:0),E(),f()}function m(T){u=e.getPointAt(T/t,u);const _=o.normals[T],y=o.binormals[T];for(let w=0;w<=r;w++){const R=w/r*Math.PI*2,D=Math.sin(R),x=-Math.cos(R);l.x=x*_.x+D*y.x,l.y=x*_.y+D*y.y,l.z=x*_.z+D*y.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let T=1;T<=t;T++)for(let _=1;_<=r;_++){const y=(r+1)*(T-1)+(_-1),w=(r+1)*T+(_-1),R=(r+1)*T+_,D=(r+1)*(T-1)+_;g.push(y,w,D),g.push(w,R,D)}}function E(){for(let T=0;T<=t;T++)for(let _=0;_<=r;_++)c.x=T/t,c.y=_/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xl(new _p[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vp extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ph extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mp extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const da={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class bp{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Sp=new bp;class ql{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ql.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr=new WeakMap;class yp extends ql{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=da.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=nr.get(o);h===void 0&&(h=[],nr.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=ss("img");function l(){u(),t&&t(this);const h=nr.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onLoad&&d.onLoad(this)}nr.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),da.remove(`image:${e}`);const p=nr.get(this)||[];for(let d=0;d<p.length;d++){const g=p[d];g.onError&&g.onError(h)}nr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),da.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Ep extends ql{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,o=new yp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class wo extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tp extends wo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new it,Jc=new C,Qc=new C;class Yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wp extends Yl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ap extends wo{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const eu=new it,Gr=new C,pa=new C;class Cp extends Yl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gr),pa.copy(i.position),pa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pa),i.updateMatrixWorld(),r.makeTranslation(-Gr.x,-Gr.y,-Gr.z),eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu,i.coordinateSystem,i.reversedDepth)}}class Dh extends wo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $l extends Sh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rp extends Yl{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pp extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class tu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Up extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nu(n,e,t,i){const r=Ip(i);switch(t){case uh:return n*e;case Ul:return n*e/r.components*r.byteLength;case Il:return n*e/r.components*r.byteLength;case dh:return n*e*2/r.components*r.byteLength;case Nl:return n*e*2/r.components*r.byteLength;case hh:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case Fl:return n*e*4/r.components*r.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Va:case Wa:return Math.max(n,8)*Math.max(e,8)/2;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ip(n){switch(n){case yn:case oh:return{byteLength:1,components:1};case ts:case ah:case Pn:return{byteLength:2,components:1};case Dl:case Ll:return{byteLength:2,components:4};case Li:case Pl:case Cn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function Lh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Np(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],M=h[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++p,h[p]=M)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const M=h[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Hp,aomap_fragment:Vp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:Yp,bsdfs:$p,iridescence_fragment:jp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:em,color_fragment:tm,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:rm,common:sm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:um,emissivemap_pars_fragment:hm,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Cm,envmap_vertex:vm,fog_vertex:xm,fog_pars_vertex:Mm,fog_fragment:bm,fog_pars_fragment:Sm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Em,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:wm,lights_pars_begin:Am,lights_toon_fragment:Rm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Um,lights_physical_pars_fragment:Im,lights_fragment_begin:Nm,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Hm,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:$m,morphcolor_vertex:jm,morphnormal_vertex:Km,morphtarget_pars_vertex:Zm,morphtarget_vertex:Jm,normal_fragment_begin:Qm,normal_fragment_maps:eg,normal_pars_fragment:tg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:ug,premultiplied_alpha_fragment:hg,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:vg,shadowmap_vertex:xg,shadowmask_pars_fragment:Mg,skinbase_vertex:bg,skinning_pars_vertex:Sg,skinning_vertex:yg,skinnormal_vertex:Eg,specularmap_fragment:Tg,specularmap_pars_fragment:wg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Pg,uv_pars_fragment:Dg,uv_pars_vertex:Lg,uv_vertex:Ug,worldpos_vertex:Ig,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Hg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:$g,meshbasic_vert:jg,meshbasic_frag:Kg,meshlambert_vert:Zg,meshlambert_frag:Jg,meshmatcap_vert:Qg,meshmatcap_frag:e0,meshnormal_vert:t0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:o0,meshtoon_vert:a0,meshtoon_frag:l0,points_vert:c0,points_frag:u0,shadow_vert:h0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},fe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ks={r:0,b:0,g:0},vi=new Dn,m0=new it;function g0(n,e,t,i,r,s,o){const a=new Ue(0);let l=s===!0?0:1,c,u,h=null,p=0,d=null;function g(T){let _=T.isScene===!0?T.background:null;return _&&_.isTexture&&(_=(T.backgroundBlurriness>0?t:e).get(_)),_}function M(T){let _=!1;const y=g(T);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===yo)?(u===void 0&&(u=new pt(new Fi(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:xr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(vi)),u.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,(h!==y||p!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pt(new Oi(2,2),new wt({name:"BackgroundMaterial",uniforms:xr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,_){T.getRGB(ks,bh(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,_,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,_=1){a.set(T),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:M,addToRenderList:m,dispose:E}}function _0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(b,L,O,z,Y){let W=!1;const X=h(z,O,L);s!==X&&(s=X,c(s.object)),W=d(b,z,O,Y),W&&g(b,z,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(b,L,O,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,L,O){const z=O.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let W=Y[L.id];W===void 0&&(W={},Y[L.id]=W);let X=W[z];return X===void 0&&(X=p(l()),W[z]=X),X}function p(b){const L=[],O=[],z=[];for(let Y=0;Y<t;Y++)L[Y]=0,O[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,L,O,z){const Y=s.attributes,W=L.attributes;let X=0;const G=O.getAttributes();for(const k in G)if(G[k].location>=0){const ie=Y[k];let ve=W[k];if(ve===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ie===void 0||ie.attribute!==ve||ve&&ie.data!==ve.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function g(b,L,O,z){const Y={},W=L.attributes;let X=0;const G=O.getAttributes();for(const k in G)if(G[k].location>=0){let ie=W[k];ie===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const ve={};ve.attribute=ie,ie&&ie.data&&(ve.data=ie.data),Y[k]=ve,X++}s.attributes=Y,s.attributesNum=X,s.index=z}function M(){const b=s.newAttributes;for(let L=0,O=b.length;L<O;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const O=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;O[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),Y[b]!==L&&(n.vertexAttribDivisor(b,L),Y[b]=L)}function E(){const b=s.newAttributes,L=s.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==b[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function T(b,L,O,z,Y,W,X){X===!0?n.vertexAttribIPointer(b,L,O,Y,W):n.vertexAttribPointer(b,L,O,z,Y,W)}function _(b,L,O,z){M();const Y=z.attributes,W=O.getAttributes(),X=L.defaultAttributeValues;for(const G in W){const k=W[G];if(k.location>=0){let re=Y[G];if(re===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const ie=re.normalized,ve=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const Re=Be.buffer,je=Be.type,Ke=Be.bytesPerElement,Z=je===n.INT||je===n.UNSIGNED_INT||re.gpuType===Pl;if(re.isInterleavedBufferAttribute){const ee=re.data,_e=ee.stride,Ie=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)f(k.location+Ee,ee.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)m(k.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ee=0;Ee<k.locationSize;Ee++)T(k.location+Ee,ve/k.locationSize,je,ie,_e*Ke,(Ie+ve/k.locationSize*Ee)*Ke,Z)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)f(k.location+ee,re.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let ee=0;ee<k.locationSize;ee++)T(k.location+ee,ve/k.locationSize,je,ie,ve*Ke,ve/k.locationSize*ee*Ke,Z)}}else if(X!==void 0){const ie=X[G];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(k.location,ie);break;case 3:n.vertexAttrib3fv(k.location,ie);break;case 4:n.vertexAttrib4fv(k.location,ie);break;default:n.vertexAttrib1fv(k.location,ie)}}}}E()}function y(){D();for(const b in i){const L=i[b];for(const O in L){const z=L[O];for(const Y in z)u(z[Y].object),delete z[Y];delete L[O]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const L=i[b.id];for(const O in L){const z=L[O];for(const Y in z)u(z[Y].object),delete z[Y];delete L[O]}delete i[b.id]}function R(b){for(const L in i){const O=i[L];if(O[b.id]===void 0)continue;const z=O[b.id];for(const Y in z)u(z[Y].object),delete z[Y];delete O[b.id]}}function D(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function v0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*p[M];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:_,vertexTextures:y,maxSamples:w}}function M0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ti,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,T=E*4;let _=f.clippingState||null;l.value=_,_=u(g,p,T,d);for(let y=0;y!==T;++y)_[y]=t[y];f.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,d,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=d+M*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,_=d;T!==M;++T,_+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function b0(n){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=mr:a===za&&(o.mapping=gr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ur=4,iu=[.125,.215,.35,.446,.526,.582],yi=20,ma=new $l,ru=new Ue;let ga=null,_a=0,va=0,xa=!1;const bi=(1+Math.sqrt(5))/2,ir=1/bi,su=[new C(-bi,ir,0),new C(bi,ir,0),new C(-ir,0,bi),new C(ir,0,bi),new C(0,bi,-ir),new C(0,bi,ir),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],S0=new C;class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=S0}=s;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Pn,format:Mn,colorSpace:_r,depthBuffer:!1},r=au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(s)),this._blurMaterial=E0(s,e,t)}return r}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,i,r,s){const l=new jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const M=new Cr({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new pt(new Fi,M);let f=!1;const E=e.background;E?E.isColor&&(M.color.copy(E),e.background=null,f=!0):(M.color.copy(ru),f=!0);for(let T=0;T<6;T++){const _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const y=this._cubeSize;Hs(r,_*y,T>2?y:0,y,y),h.setRenderTarget(r),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mr||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=su[(r-s-1)%su.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yi-1),M=s/g,m=isFinite(s)?1+Math.floor(u*M):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const f=[];let E=0;for(let R=0;R<yi;++R){const D=R/M,x=Math.exp(-D*D/2);f.push(x),R===0?E+=x:R<m&&(E+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-i;const _=this._sizeLods[r],y=3*_*(r>T-ur?r-T+ur:0),w=4*(this._cubeSize-_);Hs(t,y,w,3*_,2*_),l.setRenderTarget(t),l.render(h,ma)}}function y0(n){const e=[],t=[],i=[];let r=n;const s=n-ur+1+iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ur?l=iu[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,M=3,m=2,f=1,E=new Float32Array(M*g*d),T=new Float32Array(m*g*d),_=new Float32Array(f*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,D=w>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];E.set(x,M*g*w),T.set(p,m*g*w);const b=[w,w,w,w,w,w];_.set(b,f*g*w)}const y=new Et;y.setAttribute("position",new dt(E,M)),y.setAttribute("uv",new dt(T,m)),y.setAttribute("faceIndex",new dt(_,f)),e.push(y),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function au(n,e,t){const i=new pn(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function E0(n,e,t){const i=new Float32Array(yi),r=new C(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function lu(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function cu(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===za,u=l===mr||l===gr;if(c||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ou(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ou(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function w0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&os("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function A0(n,e,t,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const d in p)e.update(p[d],n.ARRAY_BUFFER)}function c(h){const p=[],d=h.index,g=h.attributes.position;let M=0;if(d!==null){const E=d.array;M=d.version;for(let T=0,_=E.length;T<_;T+=3){const y=E[T+0],w=E[T+1],R=E[T+2];p.push(y,w,w,R,R,y)}}else if(g!==void 0){const E=g.array;M=g.version;for(let T=0,_=E.length/3-1;T<_;T+=3){const y=T+0,w=T+1,R=T+2;p.push(y,w,w,R,R,y)}}else return;const m=new(mh(p)?Mh:xh)(p,1);m.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function C0(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,s,p*o),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,p*o,g),t.update(d,i,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function h(p,d,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,p,0,M,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*M[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function R0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function P0(n,e,t){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let _=a.attributes.position.count*T,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*y*4*h),R=new gh(w,_,y,h);R.type=Cn,R.needsUpdate=!0;const D=T*4;for(let b=0;b<h;b++){const L=m[b],O=f[b],z=E[b],Y=_*y*4*b;for(let W=0;W<L.count;W++){const X=W*D;d===!0&&(r.fromBufferAttribute(L,W),w[Y+X+0]=r.x,w[Y+X+1]=r.y,w[Y+X+2]=r.z,w[Y+X+3]=0),g===!0&&(r.fromBufferAttribute(O,W),w[Y+X+4]=r.x,w[Y+X+5]=r.y,w[Y+X+6]=r.z,w[Y+X+7]=0),M===!0&&(r.fromBufferAttribute(z,W),w[Y+X+8]=r.x,w[Y+X+9]=r.y,w[Y+X+10]=r.z,w[Y+X+11]=z.itemSize===4?r.w:1)}}p={count:h,texture:R,size:new ue(_,y)},i.set(a,p),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function D0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Uh=new Bt,uu=new Th(1,1),Ih=new gh,Nh=new Uf,Fh=new yh,hu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hu[r];if(s===void 0&&(s=new Float32Array(r),hu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function L0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function F0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),Dt(t,i)}}function O0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),Dt(t,i)}}function B0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;fu.set(i),n.uniformMatrix4fv(this.addr,!1,fu),Dt(t,i)}}function z0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function G0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function X0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=ph,s=uu):s=Uh,t.setTexture2D(e||s,r)}function $0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nh,r)}function j0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fh,r)}function K0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ih,r)}function Z0(n){switch(n){case 5126:return L0;case 35664:return U0;case 35665:return I0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return K0}}function J0(n,e){n.uniform1fv(this.addr,e)}function Q0(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function e_(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function t_(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function n_(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i_(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r_(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s_(n,e){n.uniform1iv(this.addr,e)}function o_(n,e){n.uniform2iv(this.addr,e)}function a_(n,e){n.uniform3iv(this.addr,e)}function l_(n,e){n.uniform4iv(this.addr,e)}function c_(n,e){n.uniform1uiv(this.addr,e)}function u_(n,e){n.uniform2uiv(this.addr,e)}function h_(n,e){n.uniform3uiv(this.addr,e)}function d_(n,e){n.uniform4uiv(this.addr,e)}function f_(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Uh,s[o])}function p_(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nh,s[o])}function m_(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fh,s[o])}function g_(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function __(n){switch(n){case 5126:return J0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class v_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Z0(t.type)}}class x_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}}class M_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function gu(n,e){n.seq.push(e),n.map[e.id]=e}function b_(n,e,t){const i=n.name,r=i.length;for(Ma.lastIndex=0;;){const s=Ma.exec(i),o=Ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gu(t,c===void 0?new v_(a,n,e):new x_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new M_(a),gu(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);b_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const S_=37297;let y_=0;function E_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const vu=new We;function T_(n){$e._getMatrix(vu,$e.workingColorSpace,n);const e=`mat3( ${vu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case mo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+E_(n.getShaderSource(e),a)}else return s}function w_(n,e){const t=T_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A_(n,e){let t;switch(e){case Qu:t="Linear";break;case eh:t="Reinhard";break;case th:t="Cineon";break;case Rl:t="ACESFilmic";break;case ih:t="AgX";break;case rh:t="Neutral";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new C;function C_(){$e.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function P_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(L_,I_)}const U_=new Map;function I_(n,e){let t=qe[e];if(t===void 0){const i=U_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(N_,F_)}function F_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function B_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===gr&&(e="ENVMAP_MODE_REFRACTION"),e}function k_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ju:e="ENVMAP_BLENDING_MULTIPLY";break;case jd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}function H_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function V_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=O_(t),c=B_(t),u=z_(t),h=k_(t),p=H_(t),d=R_(t),g=P_(s),M=r.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?qe.tonemapping_pars_fragment:"",t.toneMapping!==ii?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=_l(o),o=Mu(o,t),o=bu(o,t),a=_l(a),a=Mu(a,t),a=bu(a,t),o=Su(o),a=Su(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=E+m+o,_=E+f+a,y=_u(r,r.VERTEX_SHADER,T),w=_u(r,r.FRAGMENT_SHADER,_);r.attachShader(M,y),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(y)||"",Y=r.getShaderInfoLog(w)||"",W=O.trim(),X=z.trim(),G=Y.trim();let k=!0,re=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,y,w);else{const ie=xu(r,y,"vertex"),ve=xu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ie+`
`+ve)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||G==="")&&(re=!1);re&&(L.diagnostics={runnable:k,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(y),r.deleteShader(w),D=new so(r,M),x=D_(r,M)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,S_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=w,this}let G_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new X_(e),t.set(e,i)),i}}class X_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function q_(n,e,t,i,r,s,o){const a=new _h,l=new W_,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,L,O,z){const Y=O.fog,W=z.geometry,X=x.isMeshStandardMaterial?O.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),k=G&&G.mapping===yo?G.image.height:null,re=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=ie!==void 0?ie.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let Re,je,Ke,Z;if(re){const Qe=Tn[re];Re=Qe.vertexShader,je=Qe.fragmentShader}else Re=x.vertexShader,je=x.fragmentShader,l.update(x),Ke=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const ee=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,ke=!!x.map,Mt=!!x.matcap,P=!!G,$=!!x.aoMap,Q=!!x.lightMap,ne=!!x.bumpMap,he=!!x.normalMap,Ve=!!x.displacementMap,be=!!x.emissiveMap,He=!!x.metalnessMap,Lt=!!x.roughnessMap,bt=x.anisotropy>0,A=x.clearcoat>0,v=x.dispersion>0,B=x.iridescence>0,K=x.sheen>0,te=x.transmission>0,j=bt&&!!x.anisotropyMap,Pe=A&&!!x.clearcoatMap,ce=A&&!!x.clearcoatNormalMap,we=A&&!!x.clearcoatRoughnessMap,Ae=B&&!!x.iridescenceMap,ae=B&&!!x.iridescenceThicknessMap,ge=K&&!!x.sheenColorMap,Fe=K&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,pe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,U=te&&!!x.transmissionMap,le=te&&!!x.thicknessMap,de=!!x.gradientMap,Me=!!x.alphaMap,se=x.alphaTest>0,J=!!x.alphaHash,Te=!!x.extensions;let ze=ii;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=n.toneMapping);const lt={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:je,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:_r,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:Mt,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:k,aoMap:$,lightMap:Q,bumpMap:ne,normalMap:he,displacementMap:p&&Ve,emissiveMap:be,normalMapObjectSpace:he&&x.normalMapType===ef,normalMapTangentSpace:he&&x.normalMapType===fh,metalnessMap:He,roughnessMap:Lt,anisotropy:bt,anisotropyMap:j,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:ce,clearcoatRoughnessMap:we,dispersion:v,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:ae,sheen:K,sheenColorMap:ge,sheenRoughnessMap:Fe,specularMap:Ce,specularColorMap:pe,specularIntensityMap:Ge,transmission:te,transmissionMap:U,thicknessMap:le,gradientMap:de,opaque:x.transparent===!1&&x.blending===Ai&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:se,alphaHash:J,combine:x.combine,mapUv:ke&&M(x.map.channel),aoMapUv:$&&M(x.aoMap.channel),lightMapUv:Q&&M(x.lightMap.channel),bumpMapUv:ne&&M(x.bumpMap.channel),normalMapUv:he&&M(x.normalMap.channel),displacementMapUv:Ve&&M(x.displacementMap.channel),emissiveMapUv:be&&M(x.emissiveMap.channel),metalnessMapUv:He&&M(x.metalnessMap.channel),roughnessMapUv:Lt&&M(x.roughnessMap.channel),anisotropyMapUv:j&&M(x.anisotropyMap.channel),clearcoatMapUv:Pe&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(x.sheenRoughnessMap.channel),specularMapUv:Ce&&M(x.specularMap.channel),specularColorMapUv:pe&&M(x.specularColorMap.channel),specularIntensityMapUv:Ge&&M(x.specularIntensityMap.channel),transmissionMapUv:U&&M(x.transmissionMap.channel),thicknessMapUv:le&&M(x.thicknessMap.channel),alphaMapUv:Me&&M(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(he||bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(ke||Me),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:be&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(E(b,x),T(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const b=g[x.type];let L;if(b){const O=Tn[b];L=as.clone(O.uniforms)}else L=x.uniforms;return L}function y(x,b){let L;for(let O=0,z=u.length;O<z;O++){const Y=u[O];if(Y.cacheKey===b){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new V_(n,b,x,s),u.push(L)),L}function w(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:D}}function Y_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,p,d,g,M,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:M,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,p,d,g,M,m){const f=o(h,p,d,g,M,m);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,M,m){const f=o(h,p,d,g,M,m);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||$_),i.length>1&&i.sort(p||Eu),r.length>1&&r.sort(p||Eu)}function u(){for(let h=e,p=n.length;h<p;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function j_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Tu,n.set(i,[o])):r>=s.length?(o=new Tu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function K_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let J_=0;function Q_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ev(n){const e=new K_,t=Z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const r=new C,s=new it,o=new it;function a(c){let u=0,h=0,p=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,M=0,m=0,f=0,E=0,T=0,_=0,y=0,w=0,R=0;c.sort(Q_);for(let x=0,b=c.length;x<b;x++){const L=c[x],O=L.color,z=L.intensity,Y=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*z,h+=O.g*z,p+=O.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,k=t.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=L.shadow.matrix,E++}i.directional[d]=X,d++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[M]=X;const G=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,G.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[M]=G.matrix,L.castShadow){const k=t.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=W,_++}M++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const G=L.shadow,k=t.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==y||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=_+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,D.directionalLength=d,D.pointLength=g,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=y,D.numLightProbes=R,i.version=J_++)}function l(c,u){let h=0,p=0,d=0,g=0,M=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const T=c[f];if(T.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(T.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(T.width*.5,0,0),_.halfHeight.set(0,T.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const _=i.hemi[M];_.direction.setFromMatrixPosition(T.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function wu(n){const e=new ev(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wu(n),e.set(r,[a])):s>=o.length?(a=new wu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rv(n,e,t){let i=new Hl;const r=new ue,s=new ue,o=new ot,a=new xp({depthPacking:Qd}),l=new Mp,c={},u=t.maxTextureSize,h={[si]:Kt,[Kt]:si,[sn]:sn},p=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new pt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let f=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Gn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==kn&&this.type===kn,Y=f===kn&&this.type!==kn;for(let W=0,X=w.length;W<X;W++){const G=w[W],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const re=k.getFrameExtents();if(r.multiply(re),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||z===!0||Y===!0){const ve=this.type!==kn?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new pn(r.x,r.y,ve),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ie=k.getViewportCount();for(let ve=0;ve<ie;ve++){const Be=k.getViewport(ve);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),O.viewport(o),k.updateMatrices(G,ve),i=k.getFrustum(),_(R,D,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&E(k,D),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,L)};function E(w,R){const D=e.update(M);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,D,p,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,D,d,M,null)}function T(w,R,D,x){let b=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)b=L;else if(b=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=b.uuid,z=R.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let W=Y[z];W===void 0&&(W=b.clone(),Y[z]=W,R.addEventListener("dispose",y)),b=W}if(b.visible=R.visible,b.wireframe=R.wireframe,x===kn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=D}return b}function _(w,R,D,x,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=e.update(w),Y=w.material;if(Array.isArray(Y)){const W=z.groups;for(let X=0,G=W.length;X<G;X++){const k=W[X],re=Y[k.materialIndex];if(re&&re.visible){const ie=T(w,re,x,b);w.onBeforeShadow(n,w,R,D,z,ie,k),n.renderBufferDirect(D,null,z,ie,w,k),w.onAfterShadow(n,w,R,D,z,ie,k)}}}else if(Y.visible){const W=T(w,Y,x,b);w.onBeforeShadow(n,w,R,D,z,W,null),n.renderBufferDirect(D,null,z,W,w,null),w.onAfterShadow(n,w,R,D,z,W,null)}}const O=w.children;for(let z=0,Y=O.length;z<Y;z++)_(O[z],R,D,x,b)}function y(w){w.target.removeEventListener("dispose",y);for(const D in c){const x=c[D],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const sv={[Da]:La,[Ua]:Fa,[Ia]:Oa,[pr]:Na,[La]:Da,[Fa]:Ua,[Oa]:Ia,[Na]:pr};function ov(n,e){function t(){let U=!1;const le=new ot;let de=null;const Me=new ot(0,0,0,0);return{setMask:function(se){de!==se&&!U&&(n.colorMask(se,se,se,se),de=se)},setLocked:function(se){U=se},setClear:function(se,J,Te,ze,lt){lt===!0&&(se*=ze,J*=ze,Te*=ze),le.set(se,J,Te,ze),Me.equals(le)===!1&&(n.clearColor(se,J,Te,ze),Me.copy(le))},reset:function(){U=!1,de=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,le=!1,de=null,Me=null,se=null;return{setReversed:function(J){if(le!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=J;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return le},setTest:function(J){J?ee(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(J){de!==J&&!U&&(n.depthMask(J),de=J)},setFunc:function(J){if(le&&(J=sv[J]),Me!==J){switch(J){case Da:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=J}},setLocked:function(J){U=J},setClear:function(J){se!==J&&(le&&(J=1-J),n.clearDepth(J),se=J)},reset:function(){U=!1,de=null,Me=null,se=null,le=!1}}}function r(){let U=!1,le=null,de=null,Me=null,se=null,J=null,Te=null,ze=null,lt=null;return{setTest:function(Qe){U||(Qe?ee(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!U&&(n.stencilMask(Qe),le=Qe)},setFunc:function(Qe,In,En){(de!==Qe||Me!==In||se!==En)&&(n.stencilFunc(Qe,In,En),de=Qe,Me=In,se=En)},setOp:function(Qe,In,En){(J!==Qe||Te!==In||ze!==En)&&(n.stencilOp(Qe,In,En),J=Qe,Te=In,ze=En)},setLocked:function(Qe){U=Qe},setClear:function(Qe){lt!==Qe&&(n.clearStencil(Qe),lt=Qe)},reset:function(){U=!1,le=null,de=null,Me=null,se=null,J=null,Te=null,ze=null,lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,M=!1,m=null,f=null,E=null,T=null,_=null,y=null,w=null,R=new Ue(0,0,0),D=0,x=!1,b=null,L=null,O=null,z=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=G>=2);let re=null,ie={};const ve=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Re=new ot().fromArray(ve),je=new ot().fromArray(Be);function Ke(U,le,de,Me){const se=new Uint8Array(4),J=n.createTexture();n.bindTexture(U,J),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<de;Te++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(le+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return J}const Z={};Z[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(pr),ne(!1),he(Sc),ee(n.CULL_FACE),$(Gn);function ee(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ie(U,le){return h[U]!==le?(n.bindFramebuffer(U,le),h[U]=le,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(U,le){let de=d,Me=!1;if(U){de=p.get(le),de===void 0&&(de=[],p.set(le,de));const se=U.textures;if(de.length!==se.length||de[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Te=se.length;J<Te;J++)de[J]=n.COLOR_ATTACHMENT0+J;de.length=se.length,Me=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Me=!0);Me&&n.drawBuffers(de)}function ke(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Mt={[Si]:n.FUNC_ADD,[Ld]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};Mt[Id]=n.MIN,Mt[Nd]=n.MAX;const P={[Fd]:n.ZERO,[Od]:n.ONE,[Bd]:n.SRC_COLOR,[Ra]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[kd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[Yd]:n.CONSTANT_ALPHA,[$d]:n.ONE_MINUS_CONSTANT_ALPHA};function $(U,le,de,Me,se,J,Te,ze,lt,Qe){if(U===Gn){M===!0&&(_e(n.BLEND),M=!1);return}if(M===!1&&(ee(n.BLEND),M=!0),U!==Dd){if(U!==m||Qe!==x){if((f!==Si||_!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,_=Si),Qe)switch(U){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,T=null,y=null,w=null,R.set(0,0,0),D=0,m=U,x=Qe}return}se=se||le,J=J||de,Te=Te||Me,(le!==f||se!==_)&&(n.blendEquationSeparate(Mt[le],Mt[se]),f=le,_=se),(de!==E||Me!==T||J!==y||Te!==w)&&(n.blendFuncSeparate(P[de],P[Me],P[J],P[Te]),E=de,T=Me,y=J,w=Te),(ze.equals(R)===!1||lt!==D)&&(n.blendColor(ze.r,ze.g,ze.b,lt),R.copy(ze),D=lt),m=U,x=!1}function Q(U,le){U.side===sn?_e(n.CULL_FACE):ee(n.CULL_FACE);let de=U.side===Kt;le&&(de=!de),ne(de),U.blending===Ai&&U.transparent===!1?$(Gn):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;a.setTest(Me),Me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function he(U){U!==Rd?(ee(n.CULL_FACE),U!==L&&(U===Sc?n.cullFace(n.BACK):U===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=U}function Ve(U){U!==O&&(X&&n.lineWidth(U),O=U)}function be(U,le,de){U?(ee(n.POLYGON_OFFSET_FILL),(z!==le||Y!==de)&&(n.polygonOffset(le,de),z=le,Y=de)):_e(n.POLYGON_OFFSET_FILL)}function He(U){U?ee(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Lt(U){U===void 0&&(U=n.TEXTURE0+W-1),re!==U&&(n.activeTexture(U),re=U)}function bt(U,le,de){de===void 0&&(re===null?de=n.TEXTURE0+W-1:de=re);let Me=ie[de];Me===void 0&&(Me={type:void 0,texture:void 0},ie[de]=Me),(Me.type!==U||Me.texture!==le)&&(re!==de&&(n.activeTexture(de),re=de),n.bindTexture(U,le||Z[U]),Me.type=U,Me.texture=le)}function A(){const U=ie[re];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){Re.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Re.copy(U))}function Fe(U){je.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Ce(U,le){let de=c.get(le);de===void 0&&(de=new WeakMap,c.set(le,de));let Me=de.get(U);Me===void 0&&(Me=n.getUniformBlockIndex(le,U.name),de.set(U,Me))}function pe(U,le){const Me=c.get(le).get(U);l.get(le)!==Me&&(n.uniformBlockBinding(le,Me,U.__bindingPointIndex),l.set(le,Me))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ie={},h={},p=new WeakMap,d=[],g=null,M=!1,m=null,f=null,E=null,T=null,_=null,y=null,w=null,R=new Ue(0,0,0),D=0,x=!1,b=null,L=null,O=null,z=null,Y=null,Re.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:_e,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:ke,setBlending:$,setMaterial:Q,setFlipSided:ne,setCullFace:he,setLineWidth:Ve,setPolygonOffset:be,setScissorTest:He,activeTexture:Lt,bindTexture:bt,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Ae,texImage3D:ae,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:we,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:j,compressedTexSubImage3D:Pe,scissor:ge,viewport:Fe,reset:Ge}}function av(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):ss("canvas")}function M(A,v,B){let K=1;const te=bt(A);if((te.width>B||te.height>B)&&(K=B/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*te.width),Pe=Math.floor(K*te.height);h===void 0&&(h=g(j,Pe));const ce=v?g(j,Pe):h;return ce.width=j,ce.height=Pe,ce.getContext("2d").drawImage(A,0,0,j,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Pe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,v,B,K,te=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=v;if(v===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),v===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),v===n.RGBA){const Pe=te?mo:$e.getTransfer(K);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=Pe===tt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(A,v){let B;return A?v===null||v===Li||v===ns?B=n.DEPTH24_STENCIL8:v===Cn?B=n.DEPTH32F_STENCIL8:v===ts&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===ns?B=n.DEPTH_COMPONENT24:v===Cn?B=n.DEPTH_COMPONENT32F:v===ts&&(B=n.DEPTH_COMPONENT16),B}function y(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),D(v),v.isVideoTexture&&u.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),b(v)}function D(A){const v=i.get(A);if(v.__webglInit===void 0)return;const B=A.source,K=p.get(B);if(K){const te=K[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(A),Object.keys(K).length===0&&p.delete(B)}i.remove(A)}function x(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const B=A.source,K=p.get(B);delete K[v.__cacheKey],o.memory.textures--}function b(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let te=0;te<v.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[K][te]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,te=B.length;K<te;K++){const j=i.get(B[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(A)}let L=0;function O(){L=0}function z(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function Y(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){const B=i.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function X(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function G(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function k(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ee(B,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const re={[ka]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},ie={[on]:n.NEAREST,[Zd]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ve={[tf]:n.NEVER,[lf]:n.ALWAYS,[nf]:n.LESS,[ph]:n.LEQUAL,[rf]:n.EQUAL,[af]:n.GEQUAL,[sf]:n.GREATER,[of]:n.NOTEQUAL};function Be(A,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===ko||v.magFilter===vs||v.magFilter===wi||v.minFilter===An||v.minFilter===ko||v.minFilter===vs||v.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,re[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ie[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==vs&&v.minFilter!==wi||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Re(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const K=v.source;let te=p.get(K);te===void 0&&(te={},p.set(K,te));const j=Y(v);if(j!==A.__cacheKey){te[j]===void 0&&(te[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[j].usedTimes++;const Pe=te[A.__cacheKey];Pe!==void 0&&(te[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&x(v)),A.__cacheKey=j,A.__webglTexture=te[j].texture}return B}function je(A,v,B){return Math.floor(Math.floor(A/B)/v)}function Ke(A,v,B,K){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,K,v.data);else{j.sort((ae,ge)=>ae.start-ge.start);let Pe=0;for(let ae=1;ae<j.length;ae++){const ge=j[Pe],Fe=j[ae],Ce=ge.start+ge.count,pe=je(Fe.start,v.width,4),Ge=je(ge.start,v.width,4);Fe.start<=Ce+1&&pe===Ge&&je(Fe.start+Fe.count-1,v.width,4)===pe?ge.count=Math.max(ge.count,Fe.start+Fe.count-ge.start):(++Pe,j[Pe]=Fe)}j.length=Pe+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ae=0,ge=j.length;ae<ge;ae++){const Fe=j[ae],Ce=Math.floor(Fe.start/4),pe=Math.ceil(Fe.count/4),Ge=Ce%v.width,U=Math.floor(Ce/v.width),le=pe,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,le,de,B,K,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Z(A,v,B){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const te=Re(A,v),j=v.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+B);const Pe=i.get(j);if(j.version!==Pe.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const ce=$e.getPrimaries($e.workingColorSpace),we=v.colorSpace===ni?null:$e.getPrimaries(v.colorSpace),Ae=v.colorSpace===ni||ce===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=M(v.image,!1,r.maxTextureSize);ae=Lt(v,ae);const ge=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Ce=T(v.internalFormat,ge,Fe,v.colorSpace,v.isVideoTexture);Be(K,v);let pe;const Ge=v.mipmaps,U=v.isVideoTexture!==!0,le=Pe.__version===void 0||te===!0,de=j.dataReady,Me=y(v,ae);if(v.isDepthTexture)Ce=_(v.format===rs,v.type),le&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ce,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ae.width,ae.height,0,ge,Fe,null));else if(v.isDataTexture)if(Ge.length>0){U&&le&&t.texStorage2D(n.TEXTURE_2D,Me,Ce,Ge[0].width,Ge[0].height);for(let se=0,J=Ge.length;se<J;se++)pe=Ge[se],U?de&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,ge,Fe,pe.data):t.texImage2D(n.TEXTURE_2D,se,Ce,pe.width,pe.height,0,ge,Fe,pe.data);v.generateMipmaps=!1}else U?(le&&t.texStorage2D(n.TEXTURE_2D,Me,Ce,ae.width,ae.height),de&&Ke(v,ae,ge,Fe)):t.texImage2D(n.TEXTURE_2D,0,Ce,ae.width,ae.height,0,ge,Fe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ce,Ge[0].width,Ge[0].height,ae.depth);for(let se=0,J=Ge.length;se<J;se++)if(pe=Ge[se],v.format!==Mn)if(ge!==null)if(U){if(de)if(v.layerUpdates.size>0){const Te=nu(pe.width,pe.height,v.format,v.type);for(const ze of v.layerUpdates){const lt=pe.data.subarray(ze*Te/pe.data.BYTES_PER_ELEMENT,(ze+1)*Te/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ze,pe.width,pe.height,1,ge,lt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ae.depth,ge,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ce,pe.width,pe.height,ae.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ae.depth,ge,Fe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ce,pe.width,pe.height,ae.depth,0,ge,Fe,pe.data)}else{U&&le&&t.texStorage2D(n.TEXTURE_2D,Me,Ce,Ge[0].width,Ge[0].height);for(let se=0,J=Ge.length;se<J;se++)pe=Ge[se],v.format!==Mn?ge!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,ge,Fe,pe.data):t.texImage2D(n.TEXTURE_2D,se,Ce,pe.width,pe.height,0,ge,Fe,pe.data)}else if(v.isDataArrayTexture)if(U){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ce,ae.width,ae.height,ae.depth),de)if(v.layerUpdates.size>0){const se=nu(ae.width,ae.height,v.format,v.type);for(const J of v.layerUpdates){const Te=ae.data.subarray(J*se/ae.data.BYTES_PER_ELEMENT,(J+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,ge,Fe,Te)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,Fe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ae.width,ae.height,ae.depth,0,ge,Fe,ae.data);else if(v.isData3DTexture)U?(le&&t.texStorage3D(n.TEXTURE_3D,Me,Ce,ae.width,ae.height,ae.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,Fe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ae.width,ae.height,ae.depth,0,ge,Fe,ae.data);else if(v.isFramebufferTexture){if(le)if(U)t.texStorage2D(n.TEXTURE_2D,Me,Ce,ae.width,ae.height);else{let se=ae.width,J=ae.height;for(let Te=0;Te<Me;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ce,se,J,0,ge,Fe,null),se>>=1,J>>=1}}else if(Ge.length>0){if(U&&le){const se=bt(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ce,se.width,se.height)}for(let se=0,J=Ge.length;se<J;se++)pe=Ge[se],U?de&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ge,Fe,pe):t.texImage2D(n.TEXTURE_2D,se,Ce,ge,Fe,pe);v.generateMipmaps=!1}else if(U){if(le){const se=bt(ae);t.texStorage2D(n.TEXTURE_2D,Me,Ce,se.width,se.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Fe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ge,Fe,ae);m(v)&&f(K),Pe.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ee(A,v,B){if(v.image.length!==6)return;const K=Re(A,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const j=i.get(te);if(te.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const Pe=$e.getPrimaries($e.workingColorSpace),ce=v.colorSpace===ni?null:$e.getPrimaries(v.colorSpace),we=v.colorSpace===ni||Pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Ae&&!ae?ge[J]=M(v.image[J],!0,r.maxCubemapSize):ge[J]=ae?v.image[J].image:v.image[J],ge[J]=Lt(v,ge[J]);const Fe=ge[0],Ce=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Ge=T(v.internalFormat,Ce,pe,v.colorSpace),U=v.isVideoTexture!==!0,le=j.__version===void 0||K===!0,de=te.dataReady;let Me=y(v,Fe);Be(n.TEXTURE_CUBE_MAP,v);let se;if(Ae){U&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ge,Fe.width,Fe.height);for(let J=0;J<6;J++){se=ge[J].mipmaps;for(let Te=0;Te<se.length;Te++){const ze=se[Te];v.format!==Mn?Ce!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ge,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,ze.width,ze.height,Ce,pe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ge,ze.width,ze.height,0,Ce,pe,ze.data)}}}else{if(se=v.mipmaps,U&&le){se.length>0&&Me++;const J=bt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(ae){U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ce,pe,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,ge[J].width,ge[J].height,0,Ce,pe,ge[J].data);for(let Te=0;Te<se.length;Te++){const lt=se[Te].image[J].image;U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,lt.width,lt.height,Ce,pe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ge,lt.width,lt.height,0,Ce,pe,lt.data)}}else{U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,pe,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Ce,pe,ge[J]);for(let Te=0;Te<se.length;Te++){const ze=se[Te];U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Ce,pe,ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ge,Ce,pe,ze.image[J])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),j.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _e(A,v,B,K,te,j){const Pe=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),we=T(B.internalFormat,Pe,ce,B.colorSpace),Ae=i.get(v),ae=i.get(B);if(ae.__renderTarget=v,!Ae.__hasExternalTextures){const ge=Math.max(1,v.width>>j),Fe=Math.max(1,v.height>>j);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,j,we,ge,Fe,v.depth,0,Pe,ce,null):t.texImage2D(te,j,we,ge,Fe,0,Pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),be(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,ae.__webglTexture,0,Ve(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,ae.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const K=v.depthTexture,te=K&&K.isDepthTexture?K.type:null,j=_(v.stencilBuffer,te),Pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ve(v);be(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,j,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,A)}else{const K=v.textures;for(let te=0;te<K.length;te++){const j=K[te],Pe=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),we=T(j.internalFormat,Pe,ce,j.colorSpace),Ae=Ve(v);B&&be(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,we,v.width,v.height):be(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,we,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,we,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const te=K.__webglTexture,j=Ve(v);if(v.depthTexture.format===is)be(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(v.depthTexture.format===rs)be(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ke(A){const v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=K}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?Ee(v.__webglFramebuffer[0],A):Ee(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),Ie(v.__webglDepthbuffer[K],A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,j)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ie(v.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(A,v,B){const K=i.get(A);v!==void 0&&_e(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ke(A)}function P(A){const v=A.texture,B=i.get(A),K=i.get(v);A.addEventListener("dispose",R);const te=A.textures,j=A.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let we=0;we<v.mipmaps.length;we++)B.__webglFramebuffer[ce][we]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ce=0,we=te.length;ce<we;ce++){const Ae=i.get(te[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&be(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const we=te[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ae=s.convert(we.format,we.colorSpace),ae=s.convert(we.type),ge=T(we.internalFormat,Ae,ae,we.colorSpace,A.isXRRenderTarget===!0),Fe=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ge,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Be(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)_e(B.__webglFramebuffer[ce][we],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we);else _e(B.__webglFramebuffer[ce],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ce=0,we=te.length;ce<we;ce++){const Ae=te[ce],ae=i.get(Ae);let ge=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),Be(ge,Ae),_e(B.__webglFramebuffer,A,Ae,n.COLOR_ATTACHMENT0+ce,ge,0),m(Ae)&&f(ge)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),Be(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)_e(B.__webglFramebuffer[we],A,v,n.COLOR_ATTACHMENT0,ce,we);else _e(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&f(ce),t.unbindTexture()}A.depthBuffer&&ke(A)}function $(A){const v=A.textures;for(let B=0,K=v.length;B<K;B++){const te=v[B];if(m(te)){const j=E(A),Pe=i.get(te).__webglTexture;t.bindTexture(j,Pe),f(j),t.unbindTexture()}}}const Q=[],ne=[];function he(A){if(A.samples>0){if(be(A)===!1){const v=A.textures,B=A.width,K=A.height;let te=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(A),ce=v.length>1;if(ce)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const we=A.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const ae=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,te,n.NEAREST),l===!0&&(Q.length=0,ne.length=0,Q.push(n.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(j),ne.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const ae=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function be(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function He(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Lt(A,v){const B=A.colorSpace,K=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==_r&&B!==ni&&($e.getTransfer(B)===tt?(K!==Mn||te!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=Mt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=be}function lv(n,e){function t(i,r=ni){let s;const o=$e.getTransfer(r);if(i===yn)return n.UNSIGNED_BYTE;if(i===Dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===hh)return n.RGB;if(i===Mn)return n.RGBA;if(i===is)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===dh)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===ro)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Va||i===Ga||i===Wa||i===Xa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===$a)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qa||i===Ya)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$a)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ja)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ul||i===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wt({vertexShader:cv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dv extends Ii{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new hv,f={},E=t.getContextAttributes();let T=null,_=null;const y=[],w=[],R=new ue;let D=null;const x=new jt;x.viewport=new ot;const b=new jt;b.viewport=new ot;const L=[x,b],O=new Dp;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=y[Z];return ee===void 0&&(ee=new aa,y[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=y[Z];return ee===void 0&&(ee=new aa,y[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=y[Z];return ee===void 0&&(ee=new aa,y[Z]=ee),ee.getHandSpace()};function W(Z){const ee=w.indexOf(Z.inputSource);if(ee===-1)return;const _e=y[ee];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<y.length;Z++){const ee=w[Z];ee!==null&&(w[Z]=null,y[Z].disconnect(ee))}z=null,Y=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(T),d=null,p=null,h=null,r=null,_=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?rs:is,Ie=E.stencil?ns:Li);const ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(ke),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new pn(p.textureWidth,p.textureHeight,{format:Mn,type:yn,depthTexture:new Th(p.textureWidth,p.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let ee=0;ee<Z.removed.length;ee++){const _e=Z.removed[ee],Ie=w.indexOf(_e);Ie>=0&&(w[Ie]=null,y[Ie].disconnect(_e))}for(let ee=0;ee<Z.added.length;ee++){const _e=Z.added[ee];let Ie=w.indexOf(_e);if(Ie===-1){for(let ke=0;ke<y.length;ke++)if(ke>=w.length){w.push(_e),Ie=ke;break}else if(w[ke]===null){w[ke]=_e,Ie=ke;break}if(Ie===-1)break}const Ee=y[Ie];Ee&&Ee.connect(_e)}}const k=new C,re=new C;function ie(Z,ee,_e){k.setFromMatrixPosition(ee.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const Ie=k.distanceTo(re),Ee=ee.projectionMatrix.elements,ke=_e.projectionMatrix.elements,Mt=Ee[14]/(Ee[10]-1),P=Ee[14]/(Ee[10]+1),$=(Ee[9]+1)/Ee[5],Q=(Ee[9]-1)/Ee[5],ne=(Ee[8]-1)/Ee[0],he=(ke[8]+1)/ke[0],Ve=Mt*ne,be=Mt*he,He=Ie/(-ne+he),Lt=He*-ne;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(He),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const bt=Mt+He,A=P+He,v=Ve-Lt,B=be+(Ie-Lt),K=$*P/A*bt,te=Q*P/A*bt;Z.projectionMatrix.makePerspective(v,B,K,te,bt,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ee=Z.near,_e=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),O.near=b.near=x.near=ee,O.far=b.far=x.far=_e,(z!==O.near||Y!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,Y=O.far),O.layers.mask=Z.layers.mask|6,x.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const Ie=Z.parent,Ee=O.cameras;ve(O,Ie);for(let ke=0;ke<Ee.length;ke++)ve(Ee[ke],Ie);Ee.length===2?ie(O,x,b):O.projectionMatrix.copy(x.projectionMatrix),Be(Z,O,Ie)};function Be(Z,ee,_e){_e===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return f[Z]};let Re=null;function je(Z,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ie=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let P=0;P<_e.length;P++){const $=_e[P];let Q=null;if(d!==null)Q=d.getViewport($);else{const he=h.getViewSubImage(p,$);Q=he.viewport,P===0&&(e.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(_))}let ne=L[P];ne===void 0&&(ne=new jt,ne.layers.enable(P),ne.viewport=new ot,L[P]=ne),ne.matrix.fromArray($.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray($.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(O.matrix.copy(ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(ne)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const P=h.getDepthInformation(_e[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Ee&&Ee.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<_e.length;P++){const $=_e[P].camera;if($){let Q=f[$];Q||(Q=new wh,f[$]=Q);const ne=h.getCameraImage($);Q.sourceTexture=ne}}}}for(let _e=0;_e<y.length;_e++){const Ie=w[_e],Ee=y[_e];Ie!==null&&Ee!==void 0&&Ee.update(Ie,ee,c||o)}Re&&Re(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ke=new Lh;Ke.setAnimationLoop(je),this.setAnimationLoop=function(Z){Re=Z},this.dispose=function(){}}}const xi=new Dn,fv=new it;function pv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,bh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,T,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),T=E.envMap,_=E.envMapRotation;T&&(m.envMap.value=T,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(xi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mv(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const _=T.program;i.uniformBlockBinding(E,_)}function c(E,T){let _=r[E.id];_===void 0&&(g(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const y=T.program;i.updateUBOMapping(E,y);const w=e.render.frame;s[E.id]!==w&&(p(E),s[E.id]=w)}function u(E){const T=h();E.__bindingPointIndex=T;const _=n.createBuffer(),y=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const T=r[E.id],_=E.uniforms,y=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,R=_.length;w<R;w++){const D=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,b=D.length;x<b;x++){const L=D[x];if(d(L,w,x,y)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let W=0;W<z.length;W++){const X=z[W],G=M(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,T,_,y){const w=E.value,R=T+"_"+_;if(y[R]===void 0)return typeof w=="number"||typeof w=="boolean"?y[R]=w:y[R]=w.clone(),!0;{const D=y[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return y[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){const T=E.uniforms;let _=0;const y=16;for(let R=0,D=T.length;R<D;R++){const x=Array.isArray(T[R])?T[R]:[T[R]];for(let b=0,L=x.length;b<L;b++){const O=x[b],z=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=z.length;Y<W;Y++){const X=z[Y],G=M(X),k=_%y,re=k%G.boundary,ie=k+re;_+=re,ie!==0&&y-ie<G.storage&&(_+=y-ie),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=G.storage}}}const w=_%y;return w>0&&(_+=y-w),E.__size=_,E.__cache={},this}function M(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const _=o.indexOf(T.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class gv{constructor(e={}){const{canvas:t=wf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let y=!1;this._outputColorSpace=rn;let w=0,R=0,D=null,x=-1,b=null;const L=new ot,O=new ot;let z=null;const Y=new Ue(0);let W=0,X=t.width,G=t.height,k=1,re=null,ie=null;const ve=new ot(0,0,X,G),Be=new ot(0,0,X,G);let Re=!1;const je=new Hl;let Ke=!1,Z=!1;const ee=new it,_e=new C,Ie=new ot,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Mt(){return D===null?k:1}let P=i;function $(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",se,!1),P===null){const I="webgl2";if(P=$(I,S),P===null)throw $(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Q,ne,he,Ve,be,He,Lt,bt,A,v,B,K,te,j,Pe,ce,we,Ae,ae,ge,Fe,Ce,pe,Ge;function U(){Q=new w0(P),Q.init(),Ce=new lv(P,Q),ne=new x0(P,Q,e,Ce),he=new ov(P,Q),ne.reversedDepthBuffer&&p&&he.buffers.depth.setReversed(!0),Ve=new R0(P),be=new Y_,He=new av(P,Q,he,be,ne,Ce,Ve),Lt=new b0(_),bt=new T0(_),A=new Np(P),pe=new _0(P,A),v=new A0(P,A,Ve,pe),B=new D0(P,v,A,Ve),ae=new P0(P,ne,He),ce=new M0(be),K=new q_(_,Lt,bt,Q,ne,pe,ce),te=new pv(_,be),j=new j_,Pe=new tv(Q),Ae=new g0(_,Lt,bt,he,B,d,l),we=new rv(_,B,ne),Ge=new mv(P,Ve,ne,he),ge=new v0(P,Q,Ve),Fe=new C0(P,Q,Ve),Ve.programs=K.programs,_.capabilities=ne,_.extensions=Q,_.properties=be,_.renderLists=j,_.shadowMap=we,_.state=he,_.info=Ve}U();const le=new dv(_,P);this.xr=le,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(X,G,!1))},this.getSize=function(S){return S.set(X,G)},this.setSize=function(S,I,H=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,G=I,t.width=Math.floor(S*k),t.height=Math.floor(I*k),H===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*k,G*k).floor()},this.setDrawingBufferSize=function(S,I,H){X=S,G=I,k=H,t.width=Math.floor(S*H),t.height=Math.floor(I*H),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,I,H,V){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,I,H,V),he.viewport(L.copy(ve).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,I,H,V){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,I,H,V),he.scissor(O.copy(Be).multiplyScalar(k).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(S){he.setScissorTest(Re=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,H=!0){let V=0;if(S){let N=!1;if(D!==null){const oe=D.texture.format;N=oe===Fl||oe===Nl||oe===Il}if(N){const oe=D.texture.type,me=oe===yn||oe===Li||oe===ts||oe===ns||oe===Dl||oe===Ll,ye=Ae.getClearColor(),xe=Ae.getClearAlpha(),Ne=ye.r,Oe=ye.g,De=ye.b;me?(g[0]=Ne,g[1]=Oe,g[2]=De,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(M[0]=Ne,M[1]=Oe,M[2]=De,M[3]=xe,P.clearBufferiv(P.COLOR,0,M))}else V|=P.COLOR_BUFFER_BIT}I&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ae.dispose(),j.dispose(),Pe.dispose(),be.dispose(),Lt.dispose(),bt.dispose(),B.dispose(),pe.dispose(),Ge.dispose(),K.dispose(),le.dispose(),le.removeEventListener("sessionstart",En),le.removeEventListener("sessionend",gc),di.stop()};function de(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Ve.autoReset,I=we.enabled,H=we.autoUpdate,V=we.needsUpdate,N=we.type;U(),Ve.autoReset=S,we.enabled=I,we.autoUpdate=H,we.needsUpdate=V,we.type=N}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const I=S.target;I.removeEventListener("dispose",J),Te(I)}function Te(S){ze(S),be.remove(S)}function ze(S){const I=be.get(S).programs;I!==void 0&&(I.forEach(function(H){K.releaseProgram(H)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,H,V,N,oe){I===null&&(I=Ee);const me=N.isMesh&&N.matrixWorld.determinant()<0,ye=Sd(S,I,H,V,N);he.setMaterial(V,me);let xe=H.index,Ne=1;if(V.wireframe===!0){if(xe=v.getWireframeAttribute(H),xe===void 0)return;Ne=2}const Oe=H.drawRange,De=H.attributes.position;let Ye=Oe.start*Ne,rt=(Oe.start+Oe.count)*Ne;oe!==null&&(Ye=Math.max(Ye,oe.start*Ne),rt=Math.min(rt,(oe.start+oe.count)*Ne)),xe!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,xe.count)):De!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,De.count));const _t=rt-Ye;if(_t<0||_t===1/0)return;pe.setup(N,V,ye,H,xe);let ht,at=ge;if(xe!==null&&(ht=A.get(xe),at=Fe,at.setIndex(ht)),N.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*Mt()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*Mt()),N.isLineSegments?at.setMode(P.LINES):N.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else N.isPoints?at.setMode(P.POINTS):N.isSprite&&at.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,mt=N._multiDrawCounts,Ze=N._multiDrawCount,Jt=xe?A.get(xe).bytesPerElement:1,Hi=be.get(V).currentProgram.getUniforms();for(let Qt=0;Qt<Ze;Qt++)Hi.setValue(P,"_gl_DrawID",Qt),at.render(Le[Qt]/Jt,mt[Qt])}else if(N.isInstancedMesh)at.renderInstances(Ye,_t,N.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mt=Math.min(H.instanceCount,Le);at.renderInstances(Ye,_t,mt)}else at.render(Ye,_t)};function lt(S,I,H){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,_s(S,I,H),S.side=si,S.needsUpdate=!0,_s(S,I,H),S.side=sn):_s(S,I,H)}this.compile=function(S,I,H=null){H===null&&(H=S),f=Pe.get(H),f.init(I),T.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const ye=oe[me];lt(ye,H,N),V.add(ye)}else lt(oe,H,N),V.add(oe)}),f=T.pop(),V},this.compileAsync=function(S,I,H=null){const V=this.compile(S,I,H);return new Promise(N=>{function oe(){if(V.forEach(function(me){be.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){N(S);return}setTimeout(oe,10)}Q.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Qe=null;function In(S){Qe&&Qe(S)}function En(){di.stop()}function gc(){di.start()}const di=new Lh;di.setAnimationLoop(In),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){Qe=S,le.setAnimationLoop(S),S===null?di.stop():di.start()},le.addEventListener("sessionstart",En),le.addEventListener("sessionend",gc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,I,D),f=Pe.get(S,T.length),f.init(I),T.push(f),ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),je.setFromProjectionMatrix(ee,Rn,I.reversedDepth),Z=this.localClippingEnabled,Ke=ce.init(this.clippingPlanes,Z),m=j.get(S,E.length),m.init(),E.push(m),le.enabled===!0&&le.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&Bo(oe,I,-1/0,_.sortObjects)}Bo(S,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,ie),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&Ae.addToRenderList(m,S),this.info.render.frame++,Ke===!0&&ce.beginShadows();const H=f.state.shadowsArray;we.render(H,S,I),Ke===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),I.isArrayCamera){const oe=I.cameras;if(N.length>0)for(let me=0,ye=oe.length;me<ye;me++){const xe=oe[me];vc(V,N,S,xe)}ke&&Ae.render(S);for(let me=0,ye=oe.length;me<ye;me++){const xe=oe[me];_c(m,S,xe,xe.viewport)}}else N.length>0&&vc(V,N,S,I),ke&&Ae.render(S),_c(m,S,I);D!==null&&R===0&&(He.updateMultisampleRenderTarget(D),He.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,I),pe.resetDefaultState(),x=-1,b=null,T.pop(),T.length>0?(f=T[T.length-1],Ke===!0&&ce.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Bo(S,I,H,V){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||je.intersectsSprite(S)){V&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const me=B.update(S),ye=S.material;ye.visible&&m.push(S,me,ye,H,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||je.intersectsObject(S))){const me=B.update(S),ye=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(ye)){const xe=me.groups;for(let Ne=0,Oe=xe.length;Ne<Oe;Ne++){const De=xe[Ne],Ye=ye[De.materialIndex];Ye&&Ye.visible&&m.push(S,me,Ye,H,Ie.z,De)}}else ye.visible&&m.push(S,me,ye,H,Ie.z,null)}}const oe=S.children;for(let me=0,ye=oe.length;me<ye;me++)Bo(oe[me],I,H,V)}function _c(S,I,H,V){const N=S.opaque,oe=S.transmissive,me=S.transparent;f.setupLightsView(H),Ke===!0&&ce.setGlobalState(_.clippingPlanes,H),V&&he.viewport(L.copy(V)),N.length>0&&gs(N,I,H),oe.length>0&&gs(oe,I,H),me.length>0&&gs(me,I,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function vc(S,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new pn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Pn:yn,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const oe=f.state.transmissionRenderTarget[V.id],me=V.viewport||L;oe.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);const ye=_.getRenderTarget(),xe=_.getActiveCubeFace(),Ne=_.getActiveMipmapLevel();_.setRenderTarget(oe),_.getClearColor(Y),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),ke&&Ae.render(H);const Oe=_.toneMapping;_.toneMapping=ii;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ke===!0&&ce.setGlobalState(_.clippingPlanes,V),gs(S,H,V),He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,_t=I.length;rt<_t;rt++){const ht=I[rt],at=ht.object,Le=ht.geometry,mt=ht.material,Ze=ht.group;if(mt.side===sn&&at.layers.test(V.layers)){const Jt=mt.side;mt.side=Kt,mt.needsUpdate=!0,xc(at,H,V,Le,mt,Ze),mt.side=Jt,mt.needsUpdate=!0,Ye=!0}}Ye===!0&&(He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe))}_.setRenderTarget(ye,xe,Ne),_.setClearColor(Y,W),De!==void 0&&(V.viewport=De),_.toneMapping=Oe}function gs(S,I,H){const V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=S.length;N<oe;N++){const me=S[N],ye=me.object,xe=me.geometry,Ne=me.group;let Oe=me.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),ye.layers.test(H.layers)&&xc(ye,I,H,xe,Oe,Ne)}}function xc(S,I,H,V,N,oe){S.onBeforeRender(_,I,H,V,N,oe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,I,H,V,S,oe),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,_.renderBufferDirect(H,I,V,N,S,oe),N.side=si,N.needsUpdate=!0,_.renderBufferDirect(H,I,V,N,S,oe),N.side=sn):_.renderBufferDirect(H,I,V,N,S,oe),S.onAfterRender(_,I,H,V,N,oe)}function _s(S,I,H){I.isScene!==!0&&(I=Ee);const V=be.get(S),N=f.state.lights,oe=f.state.shadowsArray,me=N.state.version,ye=K.getParameters(S,N.state,oe,I,H),xe=K.getProgramCacheKey(ye);let Ne=V.programs;V.environment=S.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(S.isMeshStandardMaterial?bt:Lt).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",J),Ne=new Map,V.programs=Ne);let Oe=Ne.get(xe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===me)return bc(S,ye),Oe}else ye.uniforms=K.getUniforms(S),S.onBeforeCompile(ye,_),Oe=K.acquireProgram(ye,xe),Ne.set(xe,Oe),V.uniforms=ye.uniforms;const De=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ce.uniform),bc(S,ye),V.needsLights=Ed(S),V.lightsStateVersion=me,V.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function Mc(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=so.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function bc(S,I){const H=be.get(S);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Sd(S,I,H,V,N){I.isScene!==!0&&(I=Ee),He.resetTextureUnits();const oe=I.fog,me=V.isMeshStandardMaterial?I.environment:null,ye=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_r,xe=(V.isMeshStandardMaterial?bt:Lt).get(V.envMap||me),Ne=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color;let _t=ii;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_t=_.toneMapping);const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=ht!==void 0?ht.length:0,Le=be.get(V),mt=f.state.lights;if(Ke===!0&&(Z===!0||S!==b)){const kt=S===b&&V.id===x;ce.setState(V,S,kt)}let Ze=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==mt.state.version||Le.outputColorSpace!==ye||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==xe||V.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==Oe||Le.morphTargets!==De||Le.morphNormals!==Ye||Le.morphColors!==rt||Le.toneMapping!==_t||Le.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Le.__version=V.version);let Jt=Le.currentProgram;Ze===!0&&(Jt=_s(V,I,N));let Hi=!1,Qt=!1,Fr=!1;const gt=Jt.getUniforms(),ln=Le.uniforms;if(he.useProgram(Jt.program)&&(Hi=!0,Qt=!0,Fr=!0),V.id!==x&&(x=V.id,Qt=!0),Hi||b!==S){he.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(P,"projectionMatrix",S.projectionMatrix),gt.setValue(P,"viewMatrix",S.matrixWorldInverse);const qt=gt.map.cameraPosition;qt!==void 0&&qt.setValue(P,_e.setFromMatrixPosition(S.matrixWorld)),ne.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Qt=!0,Fr=!0)}if(N.isSkinnedMesh){gt.setOptional(P,N,"bindMatrix"),gt.setOptional(P,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),gt.setValue(P,"boneTexture",kt.boneTexture,He))}N.isBatchedMesh&&(gt.setOptional(P,N,"batchingTexture"),gt.setValue(P,"batchingTexture",N._matricesTexture,He),gt.setOptional(P,N,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",N._indirectTexture,He),gt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",N._colorsTexture,He));const cn=H.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ae.update(N,H,Jt),(Qt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,gt.setValue(P,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ln.envMap.value=xe,ln.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),Qt&&(gt.setValue(P,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&yd(ln,Fr),oe&&V.fog===!0&&te.refreshFogUniforms(ln,oe),te.refreshMaterialUniforms(ln,V,k,G,f.state.transmissionRenderTarget[S.id]),so.upload(P,Mc(Le),ln,He)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(so.upload(P,Mc(Le),ln,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(P,"center",N.center),gt.setValue(P,"modelViewMatrix",N.modelViewMatrix),gt.setValue(P,"normalMatrix",N.normalMatrix),gt.setValue(P,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let qt=0,zo=kt.length;qt<zo;qt++){const fi=kt[qt];Ge.update(fi,Jt),Ge.bind(fi,Jt)}}return Jt}function yd(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Ed(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,I,H){const V=be.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),be.get(S.texture).__webglTexture=I,be.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const H=be.get(S);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const Td=P.createFramebuffer();this.setRenderTarget=function(S,I=0,H=0){D=S,w=I,R=H;let V=!0,N=null,oe=!1,me=!1;if(S){const xe=be.get(S);if(xe.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)He.setupRenderTarget(S);else if(xe.__hasExternalTextures)He.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const De=S.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(S.width!==De.image.width||S.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Oe=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?N=Oe[I][H]:N=Oe[I],oe=!0):S.samples>0&&He.useMultisampledRTT(S)===!1?N=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[H]:N=Oe,L.copy(S.viewport),O.copy(S.scissor),z=S.scissorTest}else L.copy(ve).multiplyScalar(k).floor(),O.copy(Be).multiplyScalar(k).floor(),z=Re;if(H!==0&&(N=Td),he.bindFramebuffer(P.FRAMEBUFFER,N)&&V&&he.drawBuffers(S,N),he.viewport(L),he.scissor(O),he.setScissorTest(z),oe){const xe=be.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,H)}else if(me){const xe=I;for(let Ne=0;Ne<S.textures.length;Ne++){const Oe=be.get(S.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,H,xe)}}else if(S!==null&&H!==0){const xe=be.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,H)}x=-1},this.readRenderTargetPixels=function(S,I,H,V,N,oe,me,ye=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){he.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Ne=S.textures[ye],Oe=Ne.format,De=Ne.type;if(!ne.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-V&&H>=0&&H<=S.height-N&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(I,H,V,N,Ce.convert(Oe),Ce.convert(De),oe))}finally{const Ne=D!==null?be.get(D).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,I,H,V,N,oe,me,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(I>=0&&I<=S.width-V&&H>=0&&H<=S.height-N){he.bindFramebuffer(P.FRAMEBUFFER,xe);const Ne=S.textures[ye],Oe=Ne.format,De=Ne.type;if(!ne.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(I,H,V,N,Ce.convert(Oe),Ce.convert(De),0);const rt=D!==null?be.get(D).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,rt);const _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Af(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Ye),P.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,H=0){const V=Math.pow(2,-H),N=Math.floor(S.image.width*V),oe=Math.floor(S.image.height*V),me=I!==null?I.x:0,ye=I!==null?I.y:0;He.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,me,ye,N,oe),he.unbindTexture()};const wd=P.createFramebuffer(),Ad=P.createFramebuffer();this.copyTextureToTexture=function(S,I,H=null,V=null,N=0,oe=null){oe===null&&(N!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let me,ye,xe,Ne,Oe,De,Ye,rt,_t;const ht=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(H!==null)me=H.max.x-H.min.x,ye=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,Oe=H.min.y,De=H.isBox3?H.min.z:0;else{const cn=Math.pow(2,-N);me=Math.floor(ht.width*cn),ye=Math.floor(ht.height*cn),S.isDataArrayTexture?xe=ht.depth:S.isData3DTexture?xe=Math.floor(ht.depth*cn):xe=1,Ne=0,Oe=0,De=0}V!==null?(Ye=V.x,rt=V.y,_t=V.z):(Ye=0,rt=0,_t=0);const at=Ce.convert(I.format),Le=Ce.convert(I.type);let mt;I.isData3DTexture?(He.setTexture3D(I,0),mt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(He.setTexture2DArray(I,0),mt=P.TEXTURE_2D_ARRAY):(He.setTexture2D(I,0),mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Hi=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),Fr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,De);const gt=S.isDataArrayTexture||S.isData3DTexture,ln=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const cn=be.get(S),kt=be.get(I),qt=be.get(cn.__renderTarget),zo=be.get(kt.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,qt.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,zo.__webglFramebuffer);for(let fi=0;fi<xe;fi++)gt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(S).__webglTexture,N,De+fi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(I).__webglTexture,oe,_t+fi)),P.blitFramebuffer(Ne,Oe,me,ye,Ye,rt,me,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||be.has(S)){const cn=be.get(S),kt=be.get(I);he.bindFramebuffer(P.READ_FRAMEBUFFER,wd),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ad);for(let qt=0;qt<xe;qt++)gt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,N,De+qt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,N),ln?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,oe,_t+qt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,oe),N!==0?P.blitFramebuffer(Ne,Oe,me,ye,Ye,rt,me,ye,P.COLOR_BUFFER_BIT,P.NEAREST):ln?P.copyTexSubImage3D(mt,oe,Ye,rt,_t+qt,Ne,Oe,me,ye):P.copyTexSubImage2D(mt,oe,Ye,rt,Ne,Oe,me,ye);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ln?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(mt,oe,Ye,rt,_t,me,ye,xe,at,Le,ht.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(mt,oe,Ye,rt,_t,me,ye,xe,at,ht.data):P.texSubImage3D(mt,oe,Ye,rt,_t,me,ye,xe,at,Le,ht):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,Ye,rt,me,ye,at,Le,ht.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,Ye,rt,ht.width,ht.height,at,ht.data):P.texSubImage2D(P.TEXTURE_2D,oe,Ye,rt,me,ye,at,Le,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Hi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fr),oe===0&&I.generateMipmaps&&P.generateMipmap(mt),he.unbindTexture()},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&He.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?He.setTextureCube(S,0):S.isData3DTexture?He.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?He.setTexture2DArray(S,0):He.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){w=0,R=0,D=null,he.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Wr=[{id:"king",label:"万兽之王",color:"#ff727e"},{id:"joker",label:"薛之谦",color:"#dbe9ff"},{id:"peace",label:"世界和平",color:"#ffe1a0"},{id:"whale",label:"鲸游夜空",color:"#7ecfff"}];function _v(n){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d",{willReadFrequently:!0});if(t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineCap="round",n==="whale"){t.lineWidth=7,t.strokeStyle="#73caff",t.beginPath(),t.moveTo(245,267),t.bezierCurveTo(360,120,665,120,802,242),t.bezierCurveTo(842,277,787,326,716,337),t.bezierCurveTo(490,391,335,333,245,267),t.bezierCurveTo(205,246,142,180,126,141),t.bezierCurveTo(203,151,237,190,245,267),t.bezierCurveTo(223,296,161,357,122,371),t.bezierCurveTo(129,289,187,265,245,267),t.stroke(),t.strokeStyle="#edb9ec",t.beginPath(),t.moveTo(502,329),t.bezierCurveTo(507,392,549,405,611,410),t.bezierCurveTo(603,367,573,347,553,329),t.stroke(),t.strokeStyle="#ff8aa1",t.beginPath(),t.moveTo(277,237),t.bezierCurveTo(430,122,680,149,793,241),t.stroke(),t.fillStyle="#fff5d9",t.beginPath(),t.arc(748,246,8,0,Math.PI*2),t.fill(),t.strokeStyle="#b9e8ff",t.lineWidth=4;for(let s=0;s<5;s++)t.beginPath(),t.moveTo(411+s*41,285),t.quadraticCurveTo(530+s*25,335,700+s*12,305),t.stroke()}else t.fillStyle=n==="king"?"#ff667c":n==="peace"?"#ffe0a0":"#d8e8ff",t.font=`700 ${n==="joker"?190:170}px "Songti SC","Noto Serif SC","STSong",serif`,t.fillText(n==="king"?"万兽之王":n==="peace"?"世界和平":"薛之谦",512,322,920),t.strokeStyle=n==="king"?"#ffe8c1":"#c6edff",t.lineWidth=5,n==="king"?(t.beginPath(),t.moveTo(512,36),t.bezierCurveTo(476,98,467,130,491,148),t.bezierCurveTo(485,175,504,189,512,199),t.bezierCurveTo(536,172,554,151,527,113),t.bezierCurveTo(507,86,534,66,512,36),t.stroke(),t.beginPath(),t.moveTo(477,161),t.lineTo(512,214),t.lineTo(547,161),t.stroke()):n==="peace"?(t.beginPath(),t.moveTo(512,158),t.bezierCurveTo(458,128,432,74,389,72),t.bezierCurveTo(402,133,442,164,481,180),t.lineTo(512,201),t.lineTo(544,179),t.bezierCurveTo(604,151,625,108,635,70),t.bezierCurveTo(591,84,563,125,537,134),t.quadraticCurveTo(520,104,500,127),t.stroke()):(t.beginPath(),t.ellipse(512,130,77,18,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(415,144),t.quadraticCurveTo(512,188,609,144),t.stroke()),t.strokeStyle=n==="king"?"#ff667c":"#b1dfff",t.lineWidth=3,t.beginPath(),t.moveTo(210,440),t.lineTo(814,440),t.stroke();const i=t.getImageData(0,0,1024,512).data,r=[];for(let s=12;s<500;s+=5)for(let o=12;o<1012;o+=5){const a=(s*1024+o)*4;i[a+3]>80&&r.push({x:(o-512)*.17,y:(256-s)*.17,z:Math.sin(o*.014)*1.3,color:[i[a]/255,i[a+1]/255,i[a+2]/255]})}return r}function vv(n,e,{notify:t}){const r=Object.fromEntries(Wr.map(G=>[G.id,_v(G.id)])),s=new Nt;s.position.set(0,133,-8),n.add(s);const o=new Et,a=new Float32Array(2400*3),l=new Float32Array(2400*3),c=new Float32Array(2400*3),u=new Float32Array(2400*3),h=new Float32Array(2400),p=(G,k,re)=>{for(let ie=0;ie<2400;ie++){const ve=G[Math.floor(ie/2400*G.length)];k.set([ve.x,ve.y,ve.z],ie*3),re.set(ve.color,ie*3)}};p(r.king,a,c),l.set(a),u.set(c);for(let G=0;G<2400;G++)h[G]=G*1.61803398875%1;o.setAttribute("position",new dt(a,3)),o.setAttribute("aFrom",new dt(a,3)),o.setAttribute("aTo",new dt(l,3)),o.setAttribute("cFrom",new dt(c,3)),o.setAttribute("cTo",new dt(u,3)),o.setAttribute("seed",new dt(h,1));const d=new wt({uniforms:{morph:{value:1},time:{value:0},motion:{value:1},pointScale:{value:700}},vertexShader:"attribute vec3 aFrom;attribute vec3 aTo;attribute vec3 cFrom;attribute vec3 cTo;attribute float seed;uniform float morph;uniform float time;uniform float motion;uniform float pointScale;varying vec3 vColor;void main(){float k=smoothstep(0.,1.,morph);vec3 p=mix(aFrom,aTo,k);p.z+=sin(seed*6.283+time*.28)*1.1*motion;vColor=mix(cFrom,cTo,k);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z),1.2,4.2);}",fragmentShader:"varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=pow(1.-d,1.35);gl_FragColor=vec4(vColor*.95,a*.9);}",transparent:!0,depthWrite:!1,blending:Ai,fog:!1}),g=new _o(o,d);g.frustumCulled=!1,s.add(g);let M="king",m=1,f=0,E=0,T=!0,_=!0,y=!0;const w=1200,R=new Et,D=new Float32Array(w*3),x=new Float32Array(w*3),b=new Float32Array(w*3),L=new Float32Array(w),O=[new Ue("#eac17d"),new Ue("#e9a8dc"),new Ue("#90cfff"),new Ue("#ffe7bd"),new Ue("#dda1ce")];for(let G=0;G<w;G++){const k=Math.floor(G/240),re=G%240,ie=re*2.3999632297,ve=1-2*(re+.5)/240,Be=Math.sqrt(1-ve*ve),Re=10+re%7*1.5;D.set([(k-2)*54,115+k%2*25,-42-Math.abs(k-2)*8],G*3),x.set([Math.cos(ie)*Be*Re,ve*Re,Math.sin(ie)*Be*Re],G*3),b.set(O[k].toArray(),G*3),L[G]=k*2.8}R.setAttribute("position",new dt(D,3)),R.setAttribute("velocity",new dt(x,3)),R.setAttribute("color",new dt(b,3)),R.setAttribute("delay",new dt(L,1));const z=new wt({uniforms:{time:{value:0},pointScale:{value:700}},vertexShader:"attribute vec3 velocity;attribute float delay;uniform float time;uniform float pointScale;varying vec3 vColor;varying float vAlpha;void main(){float age=mod(time-delay+20.,20.);float t=min(age,4.);vec3 p=position+velocity*t;p.y-=2.2*t*t;vColor=color;vAlpha=(1.-smoothstep(1.3,3.7,age))*smoothstep(0.,.2,age);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z)*.8,1.,3.2);}",fragmentShader:"varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.||vAlpha<.01)discard;gl_FragColor=vec4(vColor*1.25,pow(1.-d,1.4)*vAlpha*.65);}",vertexColors:!0,transparent:!0,depthWrite:!1,blending:Di,fog:!1}),Y=new _o(R,z);Y.frustumCulled=!1,n.add(Y);function W(){document.querySelectorAll("button[data-sky-formation]").forEach(G=>{const k=G.dataset.skyFormation===M;G.classList.toggle("active",k),G.setAttribute("aria-pressed",String(k))}),document.querySelector("#sky-auto").setAttribute("aria-checked",String(T)),document.querySelector("#sky-auto").textContent=T?"自动换景 · 开":"自动换景 · 关",document.querySelector("#sky-fireworks").setAttribute("aria-checked",String(y)),document.querySelector("#sky-fireworks").textContent=y?"烟花 · 开":"烟花 · 关",document.querySelector("#sky-title").textContent=Wr.find(G=>G.id===M).label,document.documentElement.dataset.skyFormation=M}function X(G,k=!1){if(!r[G]||(k&&(T=!1,W()),G===M))return;const re=Ci.smoothstep(m,0,1);for(let ie=0;ie<a.length;ie++)a[ie]=Ci.lerp(a[ie],l[ie],re),c[ie]=Ci.lerp(c[ie],u[ie],re);p(r[G],l,u);for(const ie of["aFrom","aTo","cFrom","cTo"])o.attributes[ie].needsUpdate=!0;M=G,m=0,E=f,k&&(T=!1),W()}return document.querySelectorAll("button[data-sky-formation]").forEach(G=>G.onclick=()=>X(G.dataset.skyFormation,!0)),document.querySelector("#sky-auto").onclick=()=>{T=!T,E=f,W()},document.querySelector("#sky-fireworks").onclick=()=>{y=!y,W()},W(),{update(G,{active:k,reduced:re,low:ie,visible:ve=!0}){if(_=ve,s.visible=_,Y.visible=_&&y&&!re,k&&(f+=Math.min(G,.05),m=Math.min(1,m+G/(re?1.2:3.6))),T&&k&&f-E>17){const Be=(Wr.findIndex(Re=>Re.id===M)+1)%Wr.length;X(Wr[Be].id)}s.rotation.y=Math.atan2(e.position.x-s.position.x,e.position.z-s.position.z),d.uniforms.morph.value=m,d.uniforms.time.value=f,d.uniforms.motion.value=re?0:1,d.uniforms.pointScale.value=ie?520:700,z.uniforms.time.value=f,R.setDrawRange(0,ie?720:w),o.setDrawRange(0,2400)},focus(){t("拖动可环顾夜空，点击下方文字切换无人机造型")},reset(){M="king",m=1,f=0,E=0,T=!0,y=!0,p(r.king,a,c),l.set(a),u.set(c);for(const G of["position","aFrom","aTo","cFrom","cTo"])o.attributes[G].needsUpdate=!0;W()},setFormation(G){X(G,!0)}}}function xv(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let p=0;p<n.length;++p){const d=n[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[p].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Au(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][p]);const g=Au(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Au(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new dt(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<t;g++){const M=u.getComponent(p,g);a.setComponent(p+h,g,M)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Mv(n){let e=0,t=0;for(const i of n){const r=new Map;for(const s of[...i.children]){if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||s.material.isShaderMaterial)continue;const o=s.material.uuid+"|"+Object.keys(s.geometry.attributes).sort().join(",")+"|"+!!s.geometry.index;r.has(o)||r.set(o,[]),r.get(o).push(s)}for(const s of r.values()){if(s.length<2)continue;const o=s.map(c=>(c.updateMatrix(),c.geometry.clone().applyMatrix4(c.matrix))),a=xv(o,!1);if(o.forEach(c=>c.dispose()),!a)continue;a.computeBoundingSphere();const l=new pt(a,s[0].material);l.receiveShadow=s.some(c=>c.receiveShadow),l.castShadow=s.some(c=>c.castShadow),l.matrixAutoUpdate=!1,s.forEach(c=>i.remove(c)),i.add(l),e+=s.length,t++}}return{before:e,after:t}}function bv(n,e,t=1){const i=e<700;return{ratio:Math.min(t,n===0?1.5:n===1?i?1:1.15:n===2?i?.8:1:i?.65:.8),bloom:n<2,shadows:!1,fogCount:n===0?1600:n===1?750:n===2?350:180,beamStep:n===0?1:n===1?2:n===2?3:4,crowdCount:n===0?6400:n===1?4e3:n===2?2400:1600}}function Sv(n,e=[],t=[]){const i=n===0?4:n===1?2:0,r=new Set(t);return Array.from(e).reduce((s,o)=>Number.isInteger(o)&&o>s&&o<=i&&r.has(o)?o:s,0)}function yv(n,e){let t=!1;for(const i of new Set([n.renderTarget1,n.renderTarget2]))i.samples!==e&&(i.dispose(),i.samples=e,t=!0);return t}const rr=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ev=180*1024*1024;function Tv({getSelection:n,notify:e}){const t=_=>document.querySelector(_),i=[];let r,s,o=null,a=[],l=null;const c=new Promise((_,y)=>{if(!window.indexedDB){y(new Error("这个浏览器不支持本地相册，请换一个现代浏览器"));return}const w=indexedDB.open("beast.personal.gallery.v1",1);w.onupgradeneeded=()=>w.result.createObjectStore("media",{keyPath:"id"}),w.onsuccess=()=>{r=w.result,_()},w.onerror=()=>y(w.error)});c.catch(_=>{t("#personal-empty").textContent=_.message,t("#personal-upload").disabled=!0});function u(_,y){return c.then(()=>new Promise((w,R)=>{const D=r.transaction("media",_);let x;const b=y(D.objectStore("media"));b&&(b.onsuccess=()=>{x=b.result}),D.oncomplete=()=>w(x),D.onerror=()=>R(D.error),D.onabort=()=>R(D.error||new Error("保存中断"))}))}function h(){for(;i.length;)URL.revokeObjectURL(i.pop())}const p=_=>{const y=URL.createObjectURL(_);return i.push(y),y};async function d(){try{a=(await u("readonly",y=>y.getAll())).sort((y,w)=>w.createdAt-y.createdAt),h();const _=a.reduce((y,w)=>y+w.blob.size+(w.thumbnail?.size||0),0);t("#personal-usage").textContent=`${a.length}条记录 · ${(_/1024/1024).toFixed(1)}MB / 180MB`,t("#personal-empty").hidden=a.length>0,t("#personal-grid").innerHTML=a.map(y=>`<article class="personal-card"><button class="personal-open" data-personal-open="${y.id}" aria-label="查看${rr(y.title)}">${y.thumbnail?`<img src="${p(y.thumbnail)}" alt="${rr(y.title)}" loading="lazy">`:'<span class="personal-video-symbol">▷<small>现场视频</small></span>'}${y.kind==="video"?'<span class="personal-video-badge">视频</span>':""}</button><div><strong>${rr(y.title)}</strong><small>${rr(y.venue)}${y.zone?" · "+rr(y.zone):""}${y.row?" · "+y.row+"排":""}${y.date?" · "+rr(y.date):""}</small><footer><button data-personal-edit="${y.id}">编辑</button><button data-personal-download="${y.id}">保存原文件</button><button data-personal-remove="${y.id}">移除</button></footer></div></article>`).join(""),document.querySelectorAll("[data-personal-edit]").forEach(y=>y.onclick=()=>M(y.dataset.personalEdit)),document.querySelectorAll("[data-personal-open]").forEach(y=>y.onclick=()=>T(y.dataset.personalOpen)),document.querySelectorAll("[data-personal-remove]").forEach(y=>y.onclick=()=>m(y.dataset.personalRemove)),document.querySelectorAll("[data-personal-download]").forEach(y=>y.onclick=()=>f(y.dataset.personalDownload))}catch(_){e(_.name==="QuotaExceededError"?"浏览器存储空间不足，请先备份并移除部分文件":_.message||"相册暂时无法读取")}}async function g(_){if(!_.type.startsWith("image/"))return null;const y=URL.createObjectURL(_);try{const w=new Image;w.src=y,await w.decode();const R=Math.min(1,720/Math.max(w.naturalWidth,w.naturalHeight)),D=document.createElement("canvas");return D.width=Math.max(1,Math.round(w.naturalWidth*R)),D.height=Math.max(1,Math.round(w.naturalHeight*R)),D.getContext("2d").drawImage(w,0,0,D.width,D.height),await new Promise(x=>D.toBlob(x,"image/webp",.84))}finally{URL.revokeObjectURL(y)}}t("#personal-upload").onclick=()=>{const _=n();l=null,s=null,o=null,t("#personal-file").value="",t("#personal-file-label").textContent="选择照片或视频",t("#personal-save").disabled=!0,t("#personal-title").value="",t("#personal-zone").value=_.zone,t("#personal-row").value=_.row,t("#personal-seat").value=_.seat,t("#personal-editor").showModal()},t("#personal-file").onchange=async _=>{const y=_.target.files[0];if(t("#personal-save").disabled=!0,!y)return;if(!["image/jpeg","image/png","image/webp","video/mp4","video/webm"].includes(y.type)){e("支持JPG、PNG、WebP照片，或MP4、WebM视频");return}const R=y.type.startsWith("video/")?40*1024*1024:15*1024*1024;if(y.size>R){e(y.type.startsWith("video/")?"单个视频请控制在40MB以内":"单张照片请控制在15MB以内");return}try{o=await g(y),s=y,t("#personal-file-label").textContent=`${y.name} · ${(y.size/1024/1024).toFixed(1)}MB`,t("#personal-title").value||(t("#personal-title").value=y.name.replace(/\.[^.]+$/,"").slice(0,60)),t("#personal-save").disabled=!1}catch{e("这张图片暂时无法解码，请换成JPG或PNG格式")}},t("#personal-form").onsubmit=async _=>{if(_.preventDefault(),!s)return;const y=t("#personal-title").value.trim();if(!y){t("#personal-title").focus();return}if(!l&&a.length>=30){e("相册最多保存30条记录，请先备份并移除部分文件");return}if(a.filter(D=>D.id!==l).reduce((D,x)=>D+x.blob.size+(x.thumbnail?.size||0),0)+s.size+(o?.size||0)>Ev){e("本地相册容量上限为180MB，请先备份并移除部分文件");return}t("#personal-save").disabled=!0;const R={id:l||crypto.randomUUID(),title:y.slice(0,60),blob:s,thumbnail:o,fileName:s.name,kind:s.type.startsWith("video/")?"video":"photo",venue:t("#personal-venue").value,date:t("#personal-date").value,zone:t("#personal-zone").value.trim().slice(0,24),row:Math.min(999,Math.max(0,Number(t("#personal-row").value)||0)),seat:Math.min(999,Math.max(0,Number(t("#personal-seat").value)||0)),createdAt:a.find(D=>D.id===l)?.createdAt||Date.now()};try{await u("readwrite",D=>D.put(R)),t("#personal-editor").close(),await d(),e("已保存到当前浏览器，仅本机可见")}catch{e("保存失败，可能是浏览器存储空间不足"),t("#personal-save").disabled=!1}};function M(_){const y=a.find(w=>w.id===_);y&&(l=_,s=new File([y.blob],y.fileName,{type:y.blob.type}),o=y.thumbnail,t("#personal-file").value="",t("#personal-file-label").textContent=`${y.fileName} · 可重新选择文件`,t("#personal-title").value=y.title,t("#personal-venue").value=y.venue,t("#personal-date").value=y.date,t("#personal-zone").value=y.zone,t("#personal-row").value=y.row,t("#personal-seat").value=y.seat,t("#personal-save").disabled=!1,t("#personal-editor").showModal())}t("#personal-cancel").onclick=()=>t("#personal-editor").close();async function m(_){const y=a.find(w=>w.id===_);y&&confirm(`从本地相册移除《${y.title}》？你的原始文件不会被删除。`)&&(await u("readwrite",w=>w.delete(_)),await d(),e("已从当前浏览器相册移除"))}function f(_){const y=a.find(D=>D.id===_);if(!y)return;const w=URL.createObjectURL(y.blob),R=document.createElement("a");R.href=w,R.download=y.fileName,R.click(),setTimeout(()=>URL.revokeObjectURL(w),1e4)}let E;function T(_){const y=a.find(D=>D.id===_);if(!y)return;E=URL.createObjectURL(y.blob),t("#personal-view-title").textContent=y.title,t("#personal-view-meta").textContent=`${y.venue}${y.zone?" · "+y.zone:""}${y.row?" · "+y.row+"排":""}${y.seat?y.seat+"座":""} · 仅本机可见`;const w=t("#personal-view-image"),R=t("#personal-view-video");w.hidden=y.kind==="video",R.hidden=y.kind!=="video",y.kind==="video"?(R.src=E,R.muted=!0):w.src=E,t("#personal-viewer").showModal()}return t("#personal-viewer").addEventListener("close",()=>{const _=t("#personal-view-video");_.pause(),_.removeAttribute("src"),_.load(),t("#personal-view-image").removeAttribute("src"),E&&URL.revokeObjectURL(E),E=null}),t("#personal-view-close").onclick=()=>t("#personal-viewer").close(),{open:d}}const wv=""+new URL("sky-reference-king-xeMxM6Wq.jpg",import.meta.url).href,Av=""+new URL("sky-reference-whale-CdIzjOrU.jpg",import.meta.url).href,Cv=""+new URL("sky-reference-peace-BSvc3sxh.jpg",import.meta.url).href,Hn=[{id:"concert-01",title:"狐狸",group:"concert",order:1,duration:30,note:"",scene:1,file:"audio/concert-01.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E7%8B%90%E7%8B%B8/1787448185?i=1787448197&uo=4",sha256:"0a71f026eacb6ebfc10bd858bba1e3e31a6f92297b24ee89811f70056d8fab12",catalogId:1787448197},{id:"concert-02",title:"野心",group:"concert",order:2,duration:30,note:"",scene:0,file:"audio/concert-02.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E9%87%8E%E5%BF%83/1787447447?i=1787447721&uo=4",sha256:"f63162b34dc303a788715f9653ecfe62fae1b397b25929efcc126e628d420035",catalogId:1787447721},{id:"concert-03",title:"金斧子银斧子",group:"concert",order:3,duration:30,note:"",scene:1,file:"audio/concert-03.m4a",artist:"薛之谦",album:"金斧子银斧子 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%87%91%E6%96%A7%E5%AD%90%E9%93%B6%E6%96%A7%E5%AD%90/1830949632?i=1830949637&uo=4",sha256:"4f20dd239079b06f1b4de042dcd2a1949c3caee85274c760a3f345f77718f0d3",catalogId:1830949637},{id:"concert-04",title:"丑八怪",group:"concert",order:4,duration:30,note:"",scene:0,file:"audio/concert-04.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%B8%91%E5%85%AB%E6%80%AA/1788255148?i=1788255149&uo=4",sha256:"20a8549bbb5c65e6de28e7604ee938fbbb6164c03df8eaa350904dc2b7cbea41",catalogId:1788255149},{id:"concert-05",title:"动物世界",group:"concert",order:5,duration:30,note:"",scene:1,file:"audio/concert-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%8A%A8%E7%89%A9%E4%B8%96%E7%95%8C/1787509715?i=1787509716&uo=4",sha256:"90065810de890a8b880211ba13fc71eb17e3a87f72b1ac871cda361d34d0169d",catalogId:1787509716},{id:"concert-06",title:"怪咖",group:"concert",order:6,duration:30,note:"",scene:1,file:"audio/concert-06.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%80%AA%E5%92%96/1787448185?i=1787448195&uo=4",sha256:"cef6291a75b45dd1bc6412d0d849be0f9157e2ce2a487511326192557b92ec1b",catalogId:1787448195},{id:"concert-07",title:"渡",group:"concert",order:7,duration:30,note:"",scene:0,file:"audio/concert-07.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%B8%A1/1787509715?i=1787509727&uo=4",sha256:"f3661c42fcd09899d60f38e2642319a250673182984c0e38095b773b29fb5855",catalogId:1787509727},{id:"concert-08",title:"我的雅典娜",group:"concert",order:8,duration:30,note:"",scene:0,file:"audio/concert-08.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9A%84%E9%9B%85%E5%85%B8%E5%A8%9C/1787930075?i=1787930080&uo=4",sha256:"b629d63107a89281ba5c128a738344e828c8b66a723d950d9dcd847d64966c0a",catalogId:1787930080},{id:"concert-09",title:"凤毛麟角",group:"concert",order:9,duration:30,note:"",scene:1,file:"audio/concert-09.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%87%A4%E6%AF%9B%E9%BA%9F%E8%A7%92/1787448335?i=1787448337&uo=4",sha256:"b0305b8a354634a5c2af1e53bae7e084ba8ecf1f9ccd1d6e7eb23b598be573f9",catalogId:1787448337},{id:"concert-10",title:"背过手",group:"concert",order:10,duration:30,note:"",scene:0,file:"audio/concert-10.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E8%83%8C%E8%BF%87%E6%89%8B/1787509715?i=1787509726&uo=4",sha256:"d85742d522479548674cb27120db14ebf0da6167a7e85fc11f4361350ad6c4a0",catalogId:1787509726},{id:"concert-12",title:"念",group:"concert",order:12,duration:30,note:"",scene:0,file:"audio/concert-12.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%BF%B5/1787930095?i=1787930236&uo=4",sha256:"e475dd716ed9e590cbf7d1aee7c1e1a30fe2c2d0e5f7b042cadd1a5427387537",catalogId:1787930236},{id:"concert-13",title:"粉钻",group:"concert",order:13,duration:30,note:"广州现场 · 观众录制",scene:3,file:"audio/concert-13.m4a",artist:"薛之谦",album:"万兽之王 · 广州站 2026-03-20（观众录制）",sourceUrl:"https://www.youtube.com/watch?v=o4u9wdoxHYI",sha256:"f23b91f8bf35cfc945d5175d07bffa5e95e3b159d39d010ed508bdcdcfbab814",sourceType:"audience-live",sourceStart:120,sourceEnd:150},{id:"concert-14",title:"违背的青春",group:"concert",order:14,duration:30,note:"",scene:2,file:"audio/concert-14.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9D%E8%83%8C%E7%9A%84%E9%9D%92%E6%98%A5/1787448185?i=1787448425&uo=4",sha256:"0e5b729ac3df616b44b3371bd8c7957c0b2d1ff5facf56a9aeb375a917eba88d",catalogId:1787448425},{id:"concert-15",title:"骆驼",group:"concert",order:15,duration:30,note:"",scene:1,file:"audio/concert-15.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E9%AA%86%E9%A9%BC/1787509715?i=1787509723&uo=4",sha256:"0412921477e0cdc9f9fbf36d83246e058b3968532b92e0114af96f151cf1cd55",catalogId:1787509723},{id:"concert-16",title:"认真的雪",group:"concert",order:16,duration:30,note:"",scene:0,file:"audio/concert-16.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA/1789061389?i=1789061392&uo=4",sha256:"b867e90f355110d7b80df258cfa50d2d6997d9e7e02b67de1b6b03ffcc541c8f",catalogId:1789061392},{id:"concert-17",title:"其实",group:"concert",order:17,duration:30,note:"",scene:0,file:"audio/concert-17.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E5%85%B6%E5%AE%9E/1788255148?i=1788255156&uo=4",sha256:"5d07c2027911885df35bab9b003ce6755b2e8ed84fe2270eac60b98258fe2145",catalogId:1788255156},{id:"concert-18",title:"平庸",group:"concert",order:18,duration:30,note:"现场版",scene:0,file:"audio/concert-18.m4a",artist:"薛之谦",album:"音乐缘计划2 第3期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E5%B9%B3%E5%BA%B8-live/1851707677?i=1851707683&uo=4",sha256:"9878d742997e5fd490856b720ccf660e32e5fbbef24af2190d07473ec758b0f8",catalogId:1851707683},{id:"concert-19",title:"在那天回不去的路上",group:"concert",order:19,duration:30,note:"",scene:0,file:"audio/concert-19.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%9C%A8%E9%82%A3%E5%A4%A9%E5%9B%9E%E4%B8%8D%E5%8E%BB%E7%9A%84%E8%B7%AF%E4%B8%8A/1787930095?i=1787930235&uo=4",sha256:"4318ec6debadf1e45be6fc569d7221b9ae86eff5ab6781874bcc8df601a5da4d",catalogId:1787930235},{id:"concert-20",title:"最好",group:"concert",order:20,duration:30,note:"",scene:0,file:"audio/concert-20.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%9C%80%E5%A5%BD/1787448185?i=1787448411&uo=4",sha256:"4f5481f2b44201583bd029b1b688c5be3949c1150dae233c8d0392eaeb554986",catalogId:1787448411},{id:"concert-21",title:"刚刚好",group:"concert",order:21,duration:30,note:"",scene:0,file:"audio/concert-21.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E5%88%9A%E5%88%9A%E5%A5%BD/1787929894?i=1787929902&uo=4",sha256:"07870b02f3d7ca5e189fceb410436a9bc89a249d72d74664bf201562f0d5e95f",catalogId:1787929902},{id:"concert-22",title:"哑巴",group:"concert",order:22,duration:30,note:"",scene:0,file:"audio/concert-22.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E5%93%91%E5%B7%B4/1787448185?i=1787448422&uo=4",sha256:"1edaefcf675653e979815a0710751c7da8edc84d3e086bd583418a98c2c69fe5",catalogId:1787448422},{id:"concert-23",title:"你还要我怎样",group:"concert",order:23,duration:30,note:"",scene:0,file:"audio/concert-23.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%98%E8%A6%81%E6%88%91%E6%80%8E%E6%A0%B7/1788255148?i=1788255151&uo=4",sha256:"82623585d86d760c9f0d9a42e828bf9166a8fbba702a783a329d605566e57369",catalogId:1788255151},{id:"concert-25",title:"像风一样",group:"concert",order:25,duration:30,note:"",scene:0,file:"audio/concert-25.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%83%8F%E9%A3%8E%E4%B8%80%E6%A0%B7/1787509715?i=1787509720&uo=4",sha256:"45a670a7d0bfcedde80275fc067587187dc3593d9437ffe7fbff4c17b9e6f6a7",catalogId:1787509720},{id:"concert-27",title:"绅士",group:"concert",order:27,duration:30,note:"",scene:0,file:"audio/concert-27.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E7%BB%85%E5%A3%AB/1787929894?i=1787930251&uo=4",sha256:"7e660a18edced6d5e3bb951a6870b9f1534467849a34dc4c76636233bf485302",catalogId:1787930251},{id:"concert-28",title:"意外",group:"concert",order:28,duration:30,note:"",scene:0,file:"audio/concert-28.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%84%8F%E5%A4%96/1788255148?i=1788255150&uo=4",sha256:"3e34153fe6f2b4951fa146c9dbda064b361b9f2bc8345b8386a34a432c656b3e",catalogId:1788255150},{id:"concert-29",title:"Nothing",group:"concert",order:29,duration:30,note:"",scene:0,file:"audio/concert-29.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/nothing/1787930095?i=1787930216&uo=4",sha256:"5b085dea5ee017e2f2ccb8ff32340b9b32835b87044f9fe460bb30e80f14dfe6",catalogId:1787930216},{id:"concert-30",title:"天外来物",group:"concert",order:30,duration:30,note:"",scene:2,file:"audio/concert-30.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E5%A4%A9%E5%A4%96%E6%9D%A5%E7%89%A9/1787447447?i=1787447448&uo=4",sha256:"08a9f5b315bd76e8d38186cb6f1c1f879fea4f777759b0ac633c63fe4612f4be",catalogId:1787447448},{id:"concert-31",title:"深深爱过你",group:"concert",order:31,duration:30,note:"前世版",scene:2,file:"audio/concert-31.m4a",artist:"薛之谦",album:"深深爱过你",sourceUrl:"https://music.apple.com/us/album/%E6%B7%B1%E6%B7%B1%E7%88%B1%E8%BF%87%E4%BD%A0-%E5%89%8D%E4%B8%96/1787447459?i=1787447461&uo=4",sha256:"2a6b00fce2456a402b4388ee8cfd37fd3fa5f03691b6f088a067d5b66f34c2f8",catalogId:1787447461},{id:"concert-32",title:"方圆几里",group:"concert",order:32,duration:30,note:"",scene:0,file:"audio/concert-32.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%96%B9%E5%9C%86%E5%87%A0%E9%87%8C/1788255148?i=1788255157&uo=4",sha256:"4f90f808ff090b9710a9bb0e8140be09de45f014a15162e7a586a57f24f592da",catalogId:1788255157},{id:"concert-33",title:"跃",group:"concert",order:33,duration:30,note:"",scene:2,file:"audio/concert-33.m4a",artist:"薛之谦",album:"跃 - Single",sourceUrl:"https://music.apple.com/us/album/%E8%B7%83/1826958519?i=1826958520&uo=4",sha256:"f8cdf17d03b0a0b70329a26426dde1bd50f97fd6e7d772cdc5e1ee52e7dfa818",catalogId:1826958520},{id:"chorus-01",title:"陪你去流浪",group:"chorus",order:1,duration:30,note:"",scene:2,file:"audio/chorus-01.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E9%99%AA%E4%BD%A0%E5%8E%BB%E6%B5%81%E6%B5%AA/1787447756?i=1787447868&uo=4",sha256:"674809c656d623c4f25a3579c9bb7947a569d9dc05d9954310f3f3d29d5e718b",catalogId:1787447868},{id:"chorus-02",title:"演员",group:"chorus",order:2,duration:30,note:"",scene:0,file:"audio/chorus-02.m4a",artist:"薛之谦",album:"绅士 - Single",sourceUrl:"https://music.apple.com/us/album/%E6%BC%94%E5%91%98/1787929823?i=1787929825&uo=4",sha256:"f2938912f450942b9d89a63756e5275ae338da8f50fe689c1e8c5eea56e7260f",catalogId:1787929825},{id:"chorus-03",title:"崇拜",group:"chorus",order:3,duration:30,note:"",scene:1,file:"audio/chorus-03.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%B4%87%E6%8B%9C/1787930095?i=1787930222&uo=4",sha256:"7003b5d8d380f1177e0332202c591166ffebe25e9bcd137384dd977ae1689cac",catalogId:1787930222},{id:"chorus-04",title:"倾城",group:"chorus",order:4,duration:30,note:"",scene:0,file:"audio/chorus-04.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E5%80%BE%E5%9F%8E/1789061268?i=1789061559&uo=4",sha256:"d3a0e0fae18a1894628c54a32fdc69a06c68a9ae4922110e723871b3af85109c",catalogId:1789061559},{id:"chorus-05",title:"暧昧",group:"chorus",order:5,duration:30,note:"",scene:0,file:"audio/chorus-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%9A%A7%E6%98%A7/1787509715?i=1787509717&uo=4",sha256:"632d5f0aafd3f305e7d3912045b51f3319077536a4db12ee4637bd0e091e27fb",catalogId:1787509717},{id:"chorus-06",title:"可",group:"chorus",order:6,duration:30,note:"合唱版",scene:0,file:"audio/chorus-06.m4a",artist:"张靓颖 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%AF/1787448335?i=1787448341&uo=4",sha256:"2679d62d1b9da3b09e3160d74aedaac7996a2e40511fb066fbe0e17726a7d6e5",catalogId:1787448341},{id:"chorus-07",title:"洛城",group:"chorus",order:7,duration:30,note:"",scene:0,file:"audio/chorus-07.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E6%B4%9B%E5%9F%8E/1787448335?i=1787448344&uo=4",sha256:"4a6c88e27ea3c10e0e9f0a7629eb5f1f8889a38976e1fe6b325b26f5e57c854b",catalogId:1787448344},{id:"chorus-08",title:"把你揉碎捏成苹果",group:"chorus",order:8,duration:30,note:"",scene:0,file:"audio/chorus-08.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E6%8A%8A%E4%BD%A0%E6%8F%89%E7%A2%8E%E6%8D%8F%E6%88%90%E8%8B%B9%E6%9E%9C/1787447447?i=1787447720&uo=4",sha256:"7ff40141dbdfcc454fc6b18926d8a4f3963c92a7e7c3ddda93b1aae64d4ce0cc",catalogId:1787447720},{id:"chorus-09",title:"耗尽",group:"chorus",order:9,duration:30,note:"合唱版",scene:0,file:"audio/chorus-09.m4a",artist:"郭聪明 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%80%97%E5%B0%BD/1787447447?i=1787447729&uo=4",sha256:"5e73613958275394271494267a85be749b008db4cb42b6394554549a1efddb16",catalogId:1787447729},{id:"chorus-10",title:"聊表心意",group:"chorus",order:10,duration:30,note:"合唱版",scene:0,file:"audio/chorus-10.m4a",artist:"刘惜君 / 薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%81%8A%E8%A1%A8%E5%BF%83%E6%84%8F/1787447756?i=1787447980&uo=4",sha256:"61f8d6d90d9f7d3b576458f892ea32fb6bd4ef2719dab09bb1eaf90bce330f61",catalogId:1787447980},{id:"chorus-11",title:"霸王别姬",group:"chorus",order:11,duration:30,note:"合唱版",scene:0,file:"audio/chorus-11.m4a",artist:"薛之谦 / 张靓颖",album:"霸王别姬 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%9C%B8%E7%8E%8B%E5%88%AB%E5%A7%AC/1840717094?i=1840717096&uo=4",sha256:"1a1e1fdbb8def3b4f930eb5dc240cf06d8654c4160c326d6559d23cd0f6e54c4",catalogId:1840717096},{id:"chorus-13",title:"伏笔",group:"chorus",order:13,duration:30,note:"",scene:0,file:"audio/chorus-13.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E4%BC%8F%E7%AC%94/1789061342?i=1789061355&uo=4",sha256:"bd1f4311299890cf1c10d4101f94331591d372c8f1d187409b5212dd15ff53a5",catalogId:1789061355},{id:"chorus-14",title:"一半",group:"chorus",order:14,duration:30,note:"",scene:0,file:"audio/chorus-14.m4a",artist:"薛之谦",album:"一半 - Single",sourceUrl:"https://music.apple.com/us/album/%E4%B8%80%E5%8D%8A/1787447244?i=1787447245&uo=4",sha256:"6f8654c307354f56334a91ab2dc7034f5a3120263674aa630e8b7d55ebfc0269",catalogId:1787447245},{id:"chorus-15",title:"你过得好吗",group:"chorus",order:15,duration:30,note:"",scene:0,file:"audio/chorus-15.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%87%E5%BE%97%E5%A5%BD%E5%90%97/1789061268?i=1789061543&uo=4",sha256:"ed48acc121f06d1d311d2d76b5d9905141fbe631b7e18d5e49bdf37a381d2fd4",catalogId:1789061543},{id:"chorus-16",title:"我终于成了别人的女人",group:"chorus",order:16,duration:30,note:"",scene:0,file:"audio/chorus-16.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%BB%88%E4%BA%8E%E6%88%90%E4%BA%86%E5%88%AB%E4%BA%BA%E7%9A%84%E5%A5%B3%E4%BA%BA/1789061342?i=1789061581&uo=4",sha256:"ca90a8d9148c46c762f3b37fd11548e89736caf4aa9dd69641d294c97bcea006",catalogId:1789061581},{id:"chorus-17",title:"我知道你都知道",group:"chorus",order:17,duration:30,note:"",scene:0,file:"audio/chorus-17.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9F%A5%E9%81%93%E4%BD%A0%E9%83%BD%E7%9F%A5%E9%81%93-%E8%83%9C%E5%A5%B3%E7%9A%84%E4%BB%A3%E4%BB%B7-%E7%94%B5%E8%A7%86%E5%89%A7%E6%8F%92%E6%9B%B2/1789061342?i=1789061343&uo=4",sha256:"67bf6028fb546195d58c81ba9c801976bab118753b874ef9f8680154892f93f8",catalogId:1789061343},{id:"chorus-18",title:"我好像在哪见过你",group:"chorus",order:18,duration:30,note:"",scene:0,file:"audio/chorus-18.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0/1787929894?i=1787929908&uo=4",sha256:"7d35051e688a69c433d387a5eb0d7a3bc5349b6813db2aeaac17f11cb9d83794",catalogId:1787929908},{id:"chorus-19",title:"我害怕",group:"chorus",order:19,duration:30,note:"",scene:0,file:"audio/chorus-19.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%AE%B3%E6%80%95/1787509715?i=1787509728&uo=4",sha256:"724841aedcff2182e4516c090a4f5163ab8b438552da82e338a22a2c5be35d9e",catalogId:1787509728},{id:"chorus-21",title:"有没有",group:"chorus",order:21,duration:30,note:"",scene:0,file:"audio/chorus-21.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%9C%89%E6%B2%A1%E6%9C%89/1788255148?i=1788255152&uo=4",sha256:"f5ac1d66fa19d38710c70085a03fcec661c16d7c0044a91704eb6909f43cc3a9",catalogId:1788255152},{id:"chorus-22",title:"这么久没见",group:"chorus",order:22,duration:30,note:"",scene:0,file:"audio/chorus-22.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E4%B9%88%E4%B9%85%E6%B2%A1%E8%A7%81/1787447756?i=1787447850&uo=4",sha256:"537a3dd0d97cc3211d6d78bf09cd3ba16f179b14e9c9cb05985f8abbe1ad4df4",catalogId:1787447850},{id:"chorus-23",title:"下雨了",group:"chorus",order:23,duration:30,note:"",scene:0,file:"audio/chorus-23.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E4%B8%8B%E9%9B%A8%E4%BA%86/1787929894?i=1787930588&uo=4",sha256:"d4e1b5a056f4971775bddacecfe079b0ee725ed5294ef770b81e209ed95aca68",catalogId:1787930588},{id:"chorus-24",title:"那是你离开了北京的生活",group:"chorus",order:24,duration:30,note:"",scene:0,file:"audio/chorus-24.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%82%A3%E6%98%AF%E4%BD%A0%E7%A6%BB%E5%BC%80%E4%BA%86%E5%8C%97%E4%BA%AC%E7%9A%84%E7%94%9F%E6%B4%BB/1787448185?i=1787448424&uo=4",sha256:"b08ae6f91d36b2f3a09d29bde89d0ed7ee646637df3681229e98e42a8d2681ac",catalogId:1787448424},{id:"chorus-25",title:"爱的期限",group:"chorus",order:25,duration:30,note:"",scene:0,file:"audio/chorus-25.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E7%9A%84%E6%9C%9F%E9%99%90/1789061268?i=1789061550&uo=4",sha256:"c1e3e0263ce70171e0be32dc31b36d879d3f3a34c08653c7b14d8a93e1c249f6",catalogId:1789061550},{id:"chorus-26",title:"笑场",group:"chorus",order:26,duration:30,note:"",scene:0,file:"audio/chorus-26.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E7%AC%91%E5%9C%BA/1787447756?i=1787447851&uo=4",sha256:"374c667623176d012f4edb8aaac827b9c0c916ce99d617e16f6bd534b8fde477",catalogId:1787447851},{id:"chorus-27",title:"苏黎世的从前",group:"chorus",order:27,duration:30,note:"",scene:0,file:"audio/chorus-27.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E8%8B%8F%E9%BB%8E%E4%B8%96%E7%9A%84%E4%BB%8E%E5%89%8D/1789061268?i=1789061539&uo=4",sha256:"af9f928819c9ef8f4538513e4d7a712187f6b5b5b1a0113a28fef8588679c2da",catalogId:1789061539},{id:"chorus-28",title:"纸船",group:"chorus",order:28,duration:30,note:"合唱版",scene:0,file:"audio/chorus-28.m4a",artist:"郁可唯 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E7%BA%B8%E8%88%B9/1787447447?i=1787447733&uo=4",sha256:"7ebfc2c3d7a33427d4322e34f52b2569365320073f60d1c4a13bcadc1575708c",catalogId:1787447733},{id:"chorus-29",title:"钗头凤",group:"chorus",order:29,duration:30,note:"",scene:0,file:"audio/chorus-29.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%92%97%E5%A4%B4%E5%87%A4/1789061389?i=1789061404&uo=4",sha256:"db14e502c640097ec30db1f2527aced9c1663fedd42397a5a44fe31135655963",catalogId:1789061404},{id:"chorus-30",title:"木偶人",group:"chorus",order:30,duration:30,note:"",scene:0,file:"audio/chorus-30.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E6%9C%A8%E5%81%B6%E4%BA%BA/1787447756?i=1787447771&uo=4",sha256:"2b0e3d8a3534e0fc40307e8956bb1fa5dc1273b50656208ccf2cf6c6fae4cd9c",catalogId:1787447771},{id:"chorus-31",title:"肆无忌惮",group:"chorus",order:31,duration:30,note:"",scene:1,file:"audio/chorus-31.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%82%86%E6%97%A0%E5%BF%8C%E6%83%AE/1787448185?i=1787448196&uo=4",sha256:"ef431d8151d5feafc2c92043f1f6fc787e76783e760fcf25cd6c0b27975482fe",catalogId:1787448196},{id:"chorus-32",title:"租购",group:"chorus",order:32,duration:30,note:"",scene:0,file:"audio/chorus-32.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E7%A7%9F%E8%B4%AD/1787930095?i=1787930229&uo=4",sha256:"c1523bc752104ae898eeb55bab277526a8f05f646ae8886b2d831b69c14f178f",catalogId:1787930229},{id:"chorus-33",title:"摩天大楼",group:"chorus",order:33,duration:30,note:"",scene:1,file:"audio/chorus-33.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%91%A9%E5%A4%A9%E5%A4%A7%E6%A5%BC/1787448185?i=1787448186&uo=4",sha256:"fc66429ac2b76dd3cb8756d8a07ffb11357e2dc356150b8fe107dc66f7019094",catalogId:1787448186},{id:"chorus-35",title:"顽疾",group:"chorus",order:35,duration:30,note:"",scene:1,file:"audio/chorus-35.m4a",artist:"薛之谦",album:"顽疾 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%A1%BD%E7%96%BE/1891957475?i=1891957477&uo=4",sha256:"7fcce5732a9f85352a3f628a991f4e991f90b81e1459f7091464eb74af60f4c9",catalogId:1891957477},{id:"chorus-36",title:"男二号",group:"chorus",order:36,duration:30,note:"",scene:0,file:"audio/chorus-36.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E7%94%B7%E4%BA%8C%E5%8F%B7/1787448335?i=1787448342&uo=4",sha256:"f4cb3ae6ee037da9eef2379be143da350c239f345dc67a9a17ae7525d6273628",catalogId:1787448342},{id:"chorus-37",title:"迟迟",group:"chorus",order:37,duration:30,note:"",scene:0,file:"audio/chorus-37.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9F%E8%BF%9F/1787447447?i=1787447719&uo=4",sha256:"861b11ef7826f575905cfbe4b3e37402ad7e30f553293eb09ed4bf9e41157361",catalogId:1787447719},{id:"chorus-38",title:"爱我的人谢谢你",group:"chorus",order:38,duration:30,note:"",scene:0,file:"audio/chorus-38.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E6%88%91%E7%9A%84%E4%BA%BA-%E8%B0%A2%E8%B0%A2%E4%BD%A0/1787930075?i=1787930459&uo=4",sha256:"43d7cd54c23360d385e9ef718303a450d96d79edb3ecf8659aabcbef698ffd56",catalogId:1787930459},{id:"chorus-39",title:"变废为宝",group:"chorus",order:39,duration:30,note:"",scene:2,file:"audio/chorus-39.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%98%E5%BA%9F%E4%B8%BA%E5%AE%9D/1787448335?i=1787448339&uo=4",sha256:"b141ba4078be28cded2ba92f21abad3c72fc77a6159b9e852012a3c543d8dab0",catalogId:1787448339},{id:"chorus-40",title:"等我回家",group:"chorus",order:40,duration:30,note:"",scene:0,file:"audio/chorus-40.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E7%AD%89%E6%88%91%E5%9B%9E%E5%AE%B6/1788255148?i=1788255154&uo=4",sha256:"0f79185ae72049a8bd5042108c8e92bd81a5f1d1bd89faca15a163679d405cf9",catalogId:1788255154},{id:"chorus-41",title:"守候",group:"chorus",order:41,duration:30,note:"",scene:0,file:"audio/chorus-41.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%AE%88%E5%80%99/1787448335?i=1787448343&uo=4",sha256:"5d6b920a89af921ea27ad7ac79ce7bb5abab9e3d6a7d26cfb41e70d41f587c64",catalogId:1787448343},{id:"chorus-42",title:"醒来",group:"chorus",order:42,duration:30,note:"现场版",scene:0,file:"audio/chorus-42.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%86%92%E6%9D%A5-live/1787448185?i=1787448419&uo=4",sha256:"514e0825f1aa9de570c570978d01231349cf59894b876ef51d90b7ce19da6b7e",catalogId:1787448419},{id:"chorus-43",title:"这样一来我算什么",group:"chorus",order:43,duration:30,note:"合唱现场版 · 合唱版",scene:0,file:"audio/chorus-43.m4a",artist:"薛之谦 / 陈卓璇",album:"音乐缘计划2 第4期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E6%A0%B7%E4%B8%80%E6%9D%A5%E6%88%91%E7%AE%97%E4%BB%80%E4%B9%88-live/1853200539?i=1853200873&uo=4",sha256:"b99f67b965d3c937271d3989e43cf932d5bce044461c624f270f79e914e691e9",catalogId:1853200873},{id:"chorus-44",title:"黄色枫叶",group:"chorus",order:44,duration:30,note:"",scene:0,file:"audio/chorus-44.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%BB%84%E8%89%B2%E6%9E%AB%E5%8F%B6/1789061389?i=1789061401&uo=4",sha256:"3f2d5f242b6c933cf15492d9318ed01ad4560c934c06978dacb020268bc4885d",catalogId:1789061401},{id:"chorus-45",title:"你不是一个人",group:"chorus",order:45,duration:30,note:"合唱版",scene:0,file:"audio/chorus-45.m4a",artist:"张信哲 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA/1787448335?i=1787448340&uo=4",sha256:"4a536b85f237d1355c57e9a2c1794536d30f204e69dfeaca3ee5dff9062a2790",catalogId:1787448340},{id:"chorus-46",title:"银河少年",group:"chorus",order:46,duration:30,note:"合唱版",scene:2,file:"audio/chorus-46.m4a",artist:"王啸坤 / 薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E9%93%B6%E6%B2%B3%E5%B0%91%E5%B9%B4/1787930095?i=1787930097&uo=4",sha256:"38d74aa872f0719b88be36478798faa3b8146589bd0e11c14a2665b7d6775172",catalogId:1787930097}],Qr="concert-02",oo=[Qr,...Hn.filter(n=>n.id!==Qr).map(n=>n.id)];function Cu(n,e,{mode:t="sequence",direction:i=1,random:r=Math.random}={}){if(!n.length)return null;const s=n.indexOf(e);if(t==="repeat"&&i>0)return s>=0?e:n[0];if(t==="shuffle"&&i>0&&n.length>1){const o=n.filter(a=>a!==e);return o[Math.min(o.length-1,Math.max(0,Math.floor(r()*o.length)))]}return n[((s<0?0:s)+i+n.length)%n.length]}let ao=0;const bn=oo.map((n,e)=>{const t=Hn.find(r=>r.id===n),i={...t,index:e,start:ao,end:ao+t.duration};return ao=i.end,i}),es=ao,Ru=[{id:"opening",label:"野心开场",first:0,count:1},{id:"concert",label:"演出曲目",first:1,count:bn.filter(n=>n.group==="concert").length-1},{id:"chorus",label:"合唱时刻",first:bn.findIndex(n=>n.group==="chorus"),count:bn.filter(n=>n.group==="chorus").length}].map(n=>({...n,start:bn[n.first].start}));function Pu(n){const e=Math.min(es,Math.max(0,Number(n)||0)),t=bn.find(i=>e<i.end)||bn[bn.length-1];return{track:t,offset:Math.min(t.duration-.001,Math.max(0,e-t.start))}}function Rv(n,e=0){const t=bn.find(s=>s.id===n)||bn[0],i=Math.min(t.duration,Math.max(0,Number(e)||0)),r=t.index===0?"opening":t.group;return{track:t,section:r,position:t.start+i,total:es}}const Se=n=>document.querySelector(n),Yt=n=>`${Math.floor((Number.isFinite(n)?n:0)/60).toString().padStart(2,"0")}:${Math.floor((Number.isFinite(n)?n:0)%60).toString().padStart(2,"0")}`,Gs=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Pv({getSceneState:n,requestScenePlay:e,onPause:t,onScene:i,notify:r,outputMuted:s=!1}){const o=document.createElement("audio");o.id="concert-audio",o.preload="none",o.setAttribute("playsinline",""),o.hidden=!0,document.body.append(o);let a=Hn.find($=>$.id===Qr),l=null,c=null,u=null,h=null,p=null,d=!1,g=.45,M="sequence",m=!0,f="concert",E="",T=0,_=!1,y=!1,w=0,R=!1,D=!1,x="idle",b=null;const L=[],O=new Uint8Array(128);try{const $=Number(localStorage.getItem("beast.music.volume.v1"));localStorage.getItem("beast.music.volume.v1")!==null&&Number.isFinite($)&&(g=Math.min(1,Math.max(0,$)))}catch{}const z=Se("#music-dialog");Se("#music-info span").textContent=Hn.length;for(const $ of document.querySelectorAll("[data-library-filter]"))$.querySelector("span").textContent=Hn.filter(Q=>$.dataset.libraryFilter==="all"||Q.group===$.dataset.libraryFilter).length;const Y={sequence:"顺序播放",repeat:"单曲循环",shuffle:"随机播放"},W=()=>!n().playing||n().compare||document.hidden,X=document.createElement("button");X.id="audio-recover",X.className="audio-recover",X.hidden=!0,document.querySelector("#music-player").append(X);const G=()=>{clearTimeout(b),b=null};function k($=T){b===null&&(b=setTimeout(()=>{$!==T||!d||W()||(x="slow",Re())},12e3))}function re(){o.muted=s||g===0;try{o.volume=s?0:g}catch{}}re(),Se("#show-sections").innerHTML=Ru.map(($,Q)=>`<button data-show-section="${$.id}" aria-label="跳到${$.label}"><span>0${Q+1}</span>${$.label}<small>${$.count}段</small></button>`).join(""),Se("#show-ticks").innerHTML=bn.slice(1).map($=>`<i style="left:${$.start/es*100}%"></i>`).join(""),Se("#timeline").max=es;function ie(){return n().compare?(r("位置比较时保持同一演出时刻，请先结束比较"),!0):!1}function ve($){const Q=Pu($);Se("#show-position").textContent=`定位到《${Q.track.title}》 ${Yt(Q.offset)}`,Se("#time-label").textContent=`${Yt(Number($))} / ${Yt(es)}`}function Be($){if(ie())return;R=!1;const{track:Q,offset:ne}=Pu($);return Ee(Q.id,{autoplay:d,offset:ne})}Se("#timeline").oninput=$=>{ie()||(R=!0,ve($.target.value))},Se("#timeline").onchange=$=>Be($.target.value),Se("#timeline").addEventListener("pointercancel",()=>{R=!1,je()}),document.querySelectorAll("[data-show-section]").forEach($=>$.onclick=()=>Be(Ru.find(Q=>Q.id===$.dataset.showSection).start));function Re(){const $=d&&!o.paused&&!W()&&x==="playing",Q=g===0||o.muted&&!s,ne=_?"音频加载失败 · 点击重试":x==="blocked"?"声音未开启 · 点击开启声音":x==="slow"?"音频加载较慢 · 可重试或换一首":x==="interrupted"?"播放已中断 · 点击继续":d&&!W()&&x==="loading"?"正在加载声音…":$&&Q?"已静音 · 点击开启声音":`${a.artist} · ${$?"正在播放":d&&W()?"随演出暂停":"30秒片段"}`;if(Se("#sound").textContent=$?"Ⅱ":"▶",Se("#sound").setAttribute("aria-label",`${$?"暂停":"播放"}《${a.title}》`),Se("#track-title").textContent=a.title,Se("#track-subtitle").textContent=ne,Se("#track-art").classList.toggle("spinning",$),Se("#music-player").classList.toggle("is-playing",$),Se("#music-player").classList.toggle("is-pink",a.scene===3),Se("#music-player").dataset.trackId=a.id,Se("#music-player").dataset.playback=_?"error":$?"playing":d&&!W()?x:"paused",X.hidden=!D||s||n().compare||!(Q||_||["blocked","slow","interrupted"].includes(x)),X.textContent=_||x==="slow"?"重试声音":x==="interrupted"?"继续播放":"开启声音",X.setAttribute("aria-label",ne+"，"+X.textContent),Se("#music-player").dataset.volume=String(g),Se("#music-mode").textContent=Y[M],Se("#music-mode").setAttribute("aria-label",`播放模式：${Y[M]}，点击切换`),Se("#music-follow").setAttribute("aria-checked",String(m)),Se("#music-follow").textContent=`舞台随曲 · ${m?"开":"关"}`,Se("#library-current").textContent=a.title,Se("#library-status").textContent=_||Q||["blocked","slow","interrupted","loading"].includes(x)?ne:`${$?"正在播放":"当前选择"} · ${a.artist}${a.note?" · "+a.note:""}`,Se("#track-source").href=a.sourceUrl,Se("#library-play").textContent=$?"暂停播放":"播放这首",Se("#play").textContent=$?"Ⅱ":"▶",Se("#play").setAttribute("aria-label",`${$?"暂停":"播放"}演出`),Se("#chapter-name").textContent=a.title,Se("#show-status").textContent=`${_?"加载失败":$?"正在上演":D?"演出暂停":"待播放"} · ${String(oo.indexOf(a.id)+1).padStart(2,"0")} / ${Hn.length}`,document.documentElement.dataset.audioState=$?Q?"muted":"playing":x,Se("#volume").value=Math.round(g*100),Se("#library-volume").value=Math.round(g*100),document.querySelectorAll("[data-track]").forEach(he=>{const Ve=he.dataset.track===a.id;he.classList.toggle("selected",Ve),he.setAttribute("aria-pressed",String(Ve)),he.querySelector(".track-state").textContent=Ve?$?"播放中":"已选择":"播放"}),"mediaSession"in navigator)try{navigator.mediaSession.playbackState=$?"playing":"paused"}catch{}je()}function je(){const $=Number.isFinite(o.duration)?o.duration:a.duration,Q=l===a.id&&Number.isFinite(o.duration)&&!w?o.currentTime||0:w;Se("#audio-time").textContent=`本曲 ${Yt(Q)} / ${Yt($)}`,Se("#library-time").textContent=`${Yt(Q)} / ${Yt($)}`;const ne=Rv(a.id,Q);Se("#timeline").disabled=n().compare,R||(Se("#timeline").value=ne.position,Se("#timeline").setAttribute("aria-valuetext",`第${ne.track.index+1}首，${a.title}，本曲${Yt(Q)}，歌单${Yt(ne.position)}，共${Yt(ne.total)}`),Se("#time-label").textContent=`${Yt(ne.position)} / ${Yt(ne.total)}`,Se("#show-position").textContent=`第${String(ne.track.index+1).padStart(2,"0")} / ${Hn.length}首 · ${ne.section==="opening"?"野心开场":a.group==="concert"?"演出曲目":"合唱曲目"}`),Se("#show-flow").style.setProperty("--show-progress",`${ne.position/ne.total*100}%`),Se("#show-next").textContent=M==="sequence"?`下一首 · ${Hn.find(he=>he.id===Cu(oo,a.id)).title}`:`${Y[M]} · 按歌单定位`,document.querySelectorAll("[data-show-section]").forEach(he=>{const Ve=he.dataset.showSection===ne.section;he.classList.toggle("active",Ve),he.setAttribute("aria-pressed",String(Ve)),he.disabled=n().compare});for(const he of["audio-progress","library-progress"]){const Ve=Se("#"+he);Ve.max=$,y||(Ve.value=Q),Ve.disabled=l!==a.id||!Number.isFinite(o.duration),Ve.setAttribute("aria-valuetext",`${Yt(Q)}，共${Yt($)}`)}if("mediaSession"in navigator&&navigator.mediaSession.setPositionState&&Number.isFinite(o.duration)&&o.duration>0)try{navigator.mediaSession.setPositionState({duration:o.duration,playbackRate:1,position:Math.min(o.duration,Q)})}catch{}}function Ke(){if(typeof o.captureStream!="function")return;const $=window.AudioContext||window.webkitAudioContext;if($)try{(!c||c.state==="closed")&&(c=new $),c.state!=="running"&&Promise.resolve(c.resume()).catch(()=>{})}catch{}}function Z(){if(!(!c||c.state!=="running"))try{if(h?.disconnect(),p?.getTracks().forEach($=>$.stop()),p=o.captureStream(),!p.getAudioTracks().length)return;u||(u=c.createAnalyser()),u.fftSize=256,h=c.createMediaStreamSource(p),h.connect(u)}catch{u=null}}function ee({retry:$=!1}={}){l===a.id&&!$||($&&!w&&Number.isFinite(o.currentTime)&&!o.ended&&(w=o.currentTime),o.pause(),o.preload="metadata",o.src=new URL(a.file,document.baseURI).href,l=a.id,_=!1,o.load(),"mediaSession"in navigator&&window.MediaMetadata&&(navigator.mediaSession.metadata=new MediaMetadata({title:a.title,artist:a.artist,album:a.album})))}async function _e({gesture:$=!0}={}){if($&&e(),W())return;const Q=++T;G();const ne=_||x==="slow";d=!0,D=!0,x="loading",Ke(),ee({retry:ne}),re(),_=!1,o.ended&&(o.currentTime=0),k(Q),Re();try{if(await o.play(),Q!==T)return;if(G(),W()){o.pause(),Re();return}x=o.paused?"interrupted":"playing",Z(),Re()}catch(he){if(Q!==T)return;G(),d=!1,o.pause(),t(),_=!["NotAllowedError","AbortError"].includes(he?.name),x=he?.name==="NotAllowedError"?"blocked":_?"error":"interrupted",Re(),r(x==="blocked"?"点一下「开启声音」，继续听歌":x==="interrupted"?"播放已中断，点一下继续播放":`《${a.title}》暂时无法播放，可重试或切换下一首`)}}function Ie(){T++,G(),d=!1,x="paused",t(),o.pause(),Re()}function Ee($,{autoplay:Q=!0,applyTheme:ne=!0,offset:he=0}={}){const Ve=Hn.find(He=>He.id===$);if(!Ve)return;T++,G(),o.pause();const be=a.id!==$;if(a=Ve,be&&(l=null,_=!1,x="idle"),w=Math.min(Ve.duration-.001,Math.max(0,he)),l===a.id&&Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration-.001,w),w=0),(be||!L.length)&&L.push($),m&&ne&&i(Ve.scene),Re(),Q)return _e();d=!1,x="paused",t(),he>0&&ee(),Re()}function ke($=1,Q=!1){let ne;return $<0&&M==="shuffle"&&L.length>1?(L.pop(),ne=L.pop()):ne=Cu(oo,a.id,{mode:Q?M:M==="repeat"?"sequence":M,direction:$}),ne===a.id?(o.currentTime=0,d||Q?_e({gesture:!Q}):je()):Ee(ne,{autoplay:d||Q})}function Mt(){const $=E.trim().toLocaleLowerCase(),Q=bn.filter(ne=>(f==="all"||ne.group===f)&&`${ne.title} ${ne.note}`.toLocaleLowerCase().includes($));Se("#track-count").textContent=`${Q.length} 段`,Se("#track-list").innerHTML=Q.length?Q.map(ne=>`<button class="track-row" data-track="${ne.id}" aria-label="播放${Gs(ne.title)}${ne.note?"，"+Gs(ne.note):""}" aria-pressed="false"><span class="track-number">${String(ne.index+1).padStart(2,"0")}</span><span class="track-name"><strong>${Gs(ne.title)}${ne.id===Qr?"<i>入场曲</i>":""}${ne.scene===3?'<i class="pink-label">粉钻舞台</i>':""}</strong><small>${Gs(ne.artist+(ne.note?" · "+ne.note:""))}</small></span><span class="track-duration">00:30</span><span class="track-state">播放</span></button>`).join(""):'<div class="library-empty">没有找到这首歌<br><small>试试歌名中的一两个字，或切换到「全部」。</small></div>',Se("#track-list").querySelectorAll("[data-track]").forEach(ne=>ne.onclick=()=>Ee(ne.dataset.track)),Re()}function P($){const Q=Number($);if(Number.isFinite(Q)){g=Math.min(1,Math.max(0,Q/100)),re();try{localStorage.setItem("beast.music.volume.v1",String(g))}catch{}Re()}}Se("#sound").onclick=()=>d&&!o.paused?Ie():_e(),X.onclick=()=>(g===0&&P(45),o.muted=s,_e()),Se("#library-play").onclick=Se("#sound").onclick,Se("#music-next").onclick=()=>ke(),Se("#music-prev").onclick=()=>ke(-1),Se("#library-next").onclick=()=>ke(),Se("#library-prev").onclick=()=>ke(-1),Se("#music-mode").onclick=()=>{M={sequence:"repeat",repeat:"shuffle",shuffle:"sequence"}[M],Re()},Se("#music-follow").onclick=()=>{m=!m,m&&i(a.scene),Re()},Se("#volume").oninput=$=>P($.target.value),Se("#library-volume").oninput=$=>P($.target.value);for(const $ of["audio-progress","library-progress"]){const Q=Se("#"+$);Q.oninput=ne=>{Number.isFinite(o.duration)&&(y=!0,o.currentTime=Math.min(o.duration,Math.max(0,Number(ne.target.value))),y=!1,je())}}for(const $ of["music-info","track-open","show-queue"])Se("#"+$).onclick=()=>{z.showModal(),Mt()};document.querySelectorAll("[data-stage-theme]").forEach($=>$.onclick=()=>{ie()||(m=!1,i(Number($.dataset.stageTheme)),Re())}),Se("#close-music").onclick=()=>z.close(),z.addEventListener("click",$=>{if($.target!==z)return;const Q=z.getBoundingClientRect();($.clientX<Q.left||$.clientX>Q.right||$.clientY<Q.top||$.clientY>Q.bottom)&&z.close()}),Se("#track-search").oninput=$=>{E=$.target.value,Mt()},document.querySelectorAll("[data-library-filter]").forEach($=>$.onclick=()=>{f=$.dataset.libraryFilter,document.querySelectorAll("[data-library-filter]").forEach(Q=>{Q.classList.toggle("active",Q===$),Q.setAttribute("aria-pressed",String(Q===$))}),Mt()}),o.addEventListener("timeupdate",je),o.addEventListener("loadedmetadata",()=>{w>0&&(o.currentTime=Math.min(o.duration-.001,w),w=0),je()}),o.addEventListener("playing",()=>{if(!d||W()){o.pause();return}o.paused||(G(),x="playing",Z(),Re())}),o.addEventListener("pause",()=>{o.paused&&d&&!W()&&!o.ended&&x==="playing"&&(x="interrupted"),Re()});for(const $ of["waiting","stalled"])o.addEventListener($,()=>{!d||W()||o.ended||x==="slow"||o.readyState>=3&&!o.paused||(x="loading",k(),Re())});if(o.addEventListener("volumechange",Re),o.addEventListener("ended",()=>{d&&!W()?ke(1,!0):Re()}),o.addEventListener("error",()=>{o.error&&(T++,G(),_=!0,x="error",d=!1,o.pause(),t(),Re())}),"mediaSession"in navigator)for(const[$,Q]of Object.entries({play:()=>_e(),pause:Ie,previoustrack:()=>ke(-1),nexttrack:()=>ke(),seekto:ne=>{Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration,Math.max(0,ne.seekTime||0)),je())}}))try{navigator.mediaSession.setActionHandler($,Q)}catch{}return Mt(),{enter(){Ee(Qr)},toggle(){d&&!o.paused&&!W()?Ie():_e()},refresh(){Re()},position(){return l===a.id&&Number.isFinite(o.duration)&&o.duration>0?Math.min(1,o.currentTime/o.duration):w/a.duration},pauseForScene(){T++,G(),o.pause(),Re()},resumeForScene(){d&&!W()?_e({gesture:!1}):Re()},setVisibility($){if($){T++,G(),o.pause();try{c?.suspend()?.catch(()=>{})}catch{}Re()}else d&&!W()&&_e({gesture:!1})},energy(){if(!u||o.paused||!d||W())return 0;u.getByteFrequencyData(O);let $=0;for(let Q=0;Q<12;Q++)$+=O[Q];return $/3060}}}const Kl=""+new URL("beast-eye-CPigXoud.jpg",import.meta.url).href,Oh=""+new URL("beast-awakening-DHaJ8PAb.jpg",import.meta.url).href,Bh=""+new URL("visual-finale-DU1vaxcB.jpg",import.meta.url).href,zh=""+new URL("guangzhou-poster-Bo6X5D2d.jpg",import.meta.url).href,Zl=""+new URL("guangzhou-performer-BYLipXbJ.jpg",import.meta.url).href,kh=""+new URL("guangzhou-stage-B4ECLh6R.jpg",import.meta.url).href;function Dv(n,e,t,{count:i=48}={}){const r=Array.from({length:i},(f,E)=>{const T=E/i*Math.PI*2;return{phase:T,origin:new C(Math.cos(T)*43,E%3===0?3:32,Math.sin(T)*24)}}),s=new oi(e,t,i);s.instanceMatrix.setUsage(cf),s.frustumCulled=!1;const o=new oi(new ps(.27,6,6),new Cr({color:"#b9ddff"}),i);o.frustumCulled=!1,n.add(s,o);const a=new it,l=new mn,c=new C,u=new C(0,-1,0),h=new C(3.6,85,3.6),p=new C(1,1,1),d=new mn;let g=1;function M(f){g=Math.max(1,Math.round(f));let E=0;r.forEach((T,_)=>{_%g||(a.compose(T.origin,d,p),o.setMatrixAt(E++,a))}),s.count=o.count=E,o.instanceMatrix.needsUpdate=!0}function m(f,E,T,_,y){const w=1-Math.exp(-2.45*y);t.uniforms.color.value.lerp(T,w),t.uniforms.power.value=_,t.uniforms.time.value=f,o.material.color.lerp(T,w);let R=0;r.forEach((D,x)=>{if(x%g)return;const b=D.phase+Math.sin(f*.2+x)*.4,L=E===0?12:E===1?40:70;c.set(Math.cos(b)*L+Math.sin(f*.45+x)*15,E>=2?72:E===0?0:7+Math.sin(f*.25+x)*14,Math.sin(b)*L*.65).sub(D.origin).normalize(),l.setFromUnitVectors(u,c),a.compose(D.origin,l,h),s.setMatrixAt(R++,a)}),s.instanceMatrix.needsUpdate=!0}return M(1),{shafts:s,bulbs:o,lights:r,setStep:M,update:m}}function Lv(n){if(!n.length)return{fps:0,p50:0,p95:0,max:0,slowRatio:0};const e=[...n].sort((i,r)=>i-r);return{fps:1e3/(n.reduce((i,r)=>i+r,0)/n.length),p50:e[Math.floor((e.length-1)*.5)],p95:e[Math.floor((e.length-1)*.95)],max:e[e.length-1],slowRatio:n.filter(i=>i>25).length/n.length}}function Uv({cooldown:n=7e3}={}){let e=0,t=-1/0;return{sample(i,{now:r,level:s,automatic:o,settling:a=!1}){const l=Lv(i);return!o||a||i.length<3?(e=0,{summary:l,level:s}):(e=l.fps<45||l.p95>36&&l.slowRatio>.12?e+1:0,e>=2&&r-t>=n&&s<3?(e=0,t=r,{summary:l,level:s+1}):{summary:l,level:s})},reset(){e=0}}}const Hh=Math.PI/180;function ba(n){if(!Number.isFinite(n))throw new RangeError("FOV must be finite");return Math.min(150,Math.max(.1,n))}function Ws(n){return Math.log(1/Math.tan(n*Hh/2))}function Iv(n){return 2*Math.atan(Math.exp(-n))/Hh}function Nv(n){let e=ba(n),t=e,i=Ws(e),r=i,s=0,o=0,a=!1;function l(c){return e=t=ba(c),i=r=Ws(e),s=o=0,a=!1,e}return{setTarget(c,u=.5){const h=ba(c);if(!Number.isFinite(u)||u<0)throw new RangeError("Lens transition duration must be finite and nonnegative");return Math.abs(h-t)<1e-9?e:u===0||Math.abs(h-e)<1e-9?l(h):(i=Ws(e),t=h,r=Ws(t),s=0,o=u,a=!0,e)},step(c){if(!a||!Number.isFinite(c)||c<=0)return e;if(s=Math.min(o,s+c),s>=o-1e-12)return e=t,a=!1,e;const u=s/o,h=u*u*(3-2*u);return e=Iv(i+(r-i)*h),e},get value(){return e},get active(){return a},reset:l}}function Xs(n,e){if(!Number.isFinite(n)||n<=0)throw new RangeError(`${e} must be a positive finite number`);return n}function Fv(n,e,t){let i=null,r=1,s=0,o=0;const a=t.setSize;return t.setSize=function(l,c){const u=Math.max(1,Math.round(l*r)),h=Math.max(1,Math.round(c*r));u===s&&h===o||(a.call(t,u,h),s=u,o=h)},e.setPixelRatio(1),{configure({width:l,height:c,ratio:u=1,bloomScale:h=1}){l=Xs(l,"width"),c=Xs(c,"height"),u=Xs(u,"ratio"),h=Xs(h,"bloomScale");const p=Math.max(1,Math.floor(l*u)),d=Math.max(1,Math.floor(c*u)),g=!i||l!==i.width||c!==i.height||u!==i.ratio,M=!i||p!==i.physicalWidth||d!==i.physicalHeight,m=h!==r;return r=h,g&&n.setDrawingBufferSize(l,c,u),M?e.setSize(p,d):m&&t.setSize(p,d),i={width:l,height:c,ratio:u,bloomScale:r,physicalWidth:p,physicalHeight:d},g||M||m},get configuration(){return i?{...i,bloomWidth:s,bloomHeight:o}:null}}}function Vh(n,e){const t=e.position.clone(),i=e.quaternion.clone(),r=n.target.clone(),s=n.enableDamping;try{n.enableDamping=!1,n.update()}finally{e.position.copy(t),e.quaternion.copy(i),n.target.copy(r),n.enableDamping=s,e.updateMatrixWorld()}}const Du=.1;function Sa(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function Ov(n,e,t,i,r=1.6){if(!Number.isFinite(r)||r<0)throw new RangeError("Invalid camera move duration");if(![n.position,e,t,i].every(Sa))throw new RangeError("Camera move positions must be finite");const s=n.position.clone(),o=n.quaternion.clone().normalize(),a=Math.log(Math.max(Du,s.distanceTo(e))),l=t.clone(),c=i.clone(),u=new mn,h=new it,p=new C;let d=0;return{to:l,targetTo:c,step(g){if(!Number.isFinite(g)||g<=0)return d>=r;if(!Sa(l)||!Sa(c))throw new RangeError("Camera move destinations must be finite");d=Math.min(r,d+g),r-d<1e-10&&(d=r);const m=1-(1-(r===0?1:d/r))**3,f=Math.log(Math.max(Du,l.distanceTo(c))),E=Math.exp(a+(f-a)*m);return h.lookAt(l,c,n.up),u.setFromRotationMatrix(h),n.position.lerpVectors(s,l,m),n.quaternion.slerpQuaternions(o,u,m),p.set(0,0,-1).applyQuaternion(n.quaternion),e.copy(n.position).addScaledVector(p,E),n.updateMatrixWorld(),d>=r}}}function Bv(n){const e=document.createElement("canvas");e.setAttribute("aria-hidden","true"),e.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:none",n.insertBefore(e,n.children[1]||null);const t=e.getContext("2d",{alpha:!1});let i=.5,r=0,s=null;return{capture(o){r>0&&(s??(s=document.createElement("canvas")),s.width=e.width,s.height=e.height,s.getContext("2d").drawImage(e,0,0));const a=r;e.width=o.width,e.height=o.height,t.globalAlpha=1,t.drawImage(o,0,0,e.width,e.height),a>0&&(t.globalAlpha=a,t.drawImage(s,0,0,e.width,e.height),t.globalAlpha=1),i=0,r=1,e.style.opacity="1",e.style.display="block"},step(o){if(r<=0)return;i=Math.min(.5,i+o);const a=i/.5;r=1-a*a*(3-2*a),e.style.opacity=String(r),r===0&&(e.style.display="none",e.width=e.height=1,s=null)},paint(o,a,l){r<=0||(o.save(),o.globalAlpha=r,o.drawImage(e,0,0,a,l),o.restore())},get active(){return r>0}}}const vo=Object.freeze({stageEnvelope:Object.freeze({width:93,depth:53,height:36,source:"https://www.sina.cn/news/detail/5265883729757226.html",scope:"广州站官方公告的舞台整体包络，非台面尺寸"}),flippingScreen:Object.freeze({width:64,height:5,source:"https://kdesignaward.com/exhibition/490265",scope:"巡演设计方案，广州站安装坐标未确认"}),historicalPitch:Object.freeze({width:105,depth:69,source:"https://www.csva.org.cn/history/detail-1670.html",scope:"2019年场馆介绍，非2026现场测绘"}),assumptions:Object.freeze({platformHeight:1.8,screenBottom:14,tierSlope:.46,seatPitch:.82,scope:"用于主题体验的估算几何，不代表施工图或票务座位坐标"})}),Gh=Object.freeze([[-21,40],[21,40],[-21,-40],[21,-40],[58,0],[-58,0]].map(Object.freeze)),Wh=Object.freeze(["A1","A2","B1","B2","C","D"]),Jl=Object.freeze(Gh.map(([n,e],t)=>Object.freeze({x:n,z:e,rows:30,seats:t<4?56:26,seatPitch:.63,rowPitch:.82,longSide:t<4}))),Co=28;function Ql(n){const e=Jl[n-21];return{rows:e?.rows??30,seats:e?.seats??Co}}function Xh(n,e,t){const i=Jl[n];if(!i)throw new RangeError("Unknown floor bank");const r=(t-(i.seats+1)/2)*i.seatPitch,s=(e-1)*i.rowPitch;return[i.longSide?i.x+r:i.x+Math.sign(i.x)*s,.4,i.longSide?i.z+Math.sign(i.z)*s:i.z+r]}function qh(n,e){return Math.PI/2-n/21*Math.PI*2+((e-.5)/Co-.5)*Math.PI*2/21*.89}function ec(n={}){const e=(r,s,o,a)=>{const l=Number(r);return Number.isFinite(l)?Math.max(o,Math.min(a,Math.round(l))):s},t=e(n.zone??3,3,0,26),i=Ql(t);return{zone:t,row:e(n.row??12,12,1,i.rows),seat:e(n.seat??10,10,1,i.seats),standing:n.standing===!0}}function zv(n){return Array.isArray(n)?n.filter(e=>{if(!e||!Number.isInteger(e.zone)||e.zone<0||e.zone>26)return!1;const t=Ql(e.zone);return Number.isInteger(e.row)&&e.row>=1&&e.row<=t.rows&&Number.isInteger(e.seat)&&e.seat>=1&&e.seat<=t.seats}).slice(0,8).map(ec):[]}const Lu={type:"change"},tc={type:"start"},Yh={type:"end"},qs=new zl,Uu=new ti,kv=Math.cos(70*Ci.DEG2RAD),At=new C,$t=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ya=1e-6;class Hv extends Up{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new mn,this._lastTargetPosition=new C,this._quat=new mn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tu,this._sphericalDelta=new tu,this._scale=1,this._panOffset=new C,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new C,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gv.bind(this),this._onPointerDown=Vv.bind(this),this._onPointerUp=Wv.bind(this),this._onContextMenu=Zv.bind(this),this._onMouseWheel=Yv.bind(this),this._onKeyDown=$v.bind(this),this._onTouchStart=jv.bind(this),this._onTouchMove=Kv.bind(this),this._onMouseDown=Xv.bind(this),this._onMouseMove=qv.bind(this),this._interceptControlDown=Jv.bind(this),this._interceptControlUp=Qv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lu),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),r<-Math.PI?r+=$t:r>Math.PI&&(r-=$t),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qs.origin.copy(this.object.position),qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qs.direction))<kv?this.object.lookAt(this.target):(Uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),qs.intersectPlane(Uu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ya||this._lastTargetPosition.distanceToSquared(this.target)>ya?(this.dispatchEvent(Lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;At.copy(r).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Vv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Gv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Wv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yh),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case dr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case dr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(tc)}function qv(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yv(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(tc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yh))}function $v(n){this.enabled!==!1&&this._handleKeyDown(n)}function jv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(tc)}function Kv(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function Zv(n){this.enabled!==!1&&n.preventDefault()}function Jv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Pr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ex=new $l(-1,1,1,-1,0,1);class tx extends Et{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const nx=new tx;class nc{constructor(e){this._mesh=new pt(nx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ix extends Pr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=as.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new nc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Iu extends Pr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class rx extends Pr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ix(lo),this.copyPass.material.blending=Gn,this.clock=new Lp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Iu!==void 0&&(o instanceof Iu?i=!0:o instanceof rx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ox extends Pr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const ax={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mr extends Pr{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new pn(s,o,{type:Pn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new pn(s,o,{type:Pn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=ax;this.highPassUniforms=as.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=as.clone(lo.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Cr,this._fsQuad=new nc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Mr.BlurDirectionX=new ue(1,0);Mr.BlurDirectionY=new ue(0,1);const Ys={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class lx extends Pr{constructor(){super(),this.uniforms=as.clone(Ys.uniforms),this.material=new vp({name:Ys.name,uniforms:this.uniforms,vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader}),this._fsQuad=new nc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const $r=[{title:"大屏里的那一刻",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-01-original.jpg",thumb:"onsite/author-01-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"红色灯光中的舞台",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-02-original.jpg",thumb:"onsite/author-02-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"开场之前",caption:"长沙站 · 2026.04.12",file:"onsite/author-03-original.jpg",thumb:"onsite/author-03-thumb-960.webp",width:1280,height:1478,quality:"original"},{title:"再看一次现场",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-04-original.jpg",thumb:"onsite/author-04-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"带着喜欢去见面",caption:"观演随身物与现场记忆",file:"onsite/author-05-original.jpg",thumb:"onsite/author-05-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"属于长沙的这一夜",caption:"长沙站 · 2026.04.12",file:"onsite/author-06-original.jpg",thumb:"onsite/author-06-thumb-960.webp",width:1280,height:1707,quality:"original"},{title:"光与绳索之间",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-07-original.jpg",thumb:"onsite/author-07-thumb-960.webp",width:1280,height:1280,quality:"original"},{title:"离舞台近一点",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-08-original.jpg",thumb:"onsite/author-08-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"夜色中的场馆",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-09-lossless.webp",thumb:"onsite/author-09-lossless.webp",width:299,height:298,quality:"screenshot-crop"},{title:"蓝色灯海",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-10-lossless.webp",thumb:"onsite/author-10-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"大屏与歌声",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-11-lossless.webp",thumb:"onsite/author-11-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"紫色的这一夜",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-12-lossless.webp",thumb:"onsite/author-12-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"红色舞台片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-13-lossless.webp",thumb:"onsite/author-13-lossless.webp",width:298,height:118,quality:"screenshot-crop"},{title:"白色光影片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-14-lossless.webp",thumb:"onsite/author-14-lossless.webp",width:298,height:118,quality:"screenshot-crop"}],q=n=>document.querySelector(n),Zt=n=>[...document.querySelectorAll(n)],Wt=Math.PI*2,$h=Ci.clamp,Ct=Ci.lerp,cx=120,co=new URLSearchParams(location.search);window.__beastBoot?.phase("程序已下载");const jh=co.get("quality")==="compat";let Kh=matchMedia("(prefers-reduced-motion: reduce)").matches;try{const n=localStorage.getItem("beast.reduced-motion.v1");(n==="true"||n==="false")&&(Kh=n==="true")}catch{}const ux=ec({zone:co.get("zone")??3,row:co.get("row")??12,seat:co.get("seat")??10}),F={mode:"overview",time:0,scene:0,playing:!1,...ux,zoom:5,fog:!0,crowd:!0,inspection:!1,reduced:Kh,quality:"auto",follow:!0,compare:!1,compareIndex:0};let Gt=[];try{Gt=zv(JSON.parse(localStorage.getItem("beast.positions.v1")||"[]"))}catch{}let Nu;function vt(n){q("#toast").textContent=n,q("#toast").classList.add("show"),clearTimeout(Nu),Nu=setTimeout(()=>q("#toast").classList.remove("show"),3200)}const Ln=Pv({getSceneState:()=>F,requestScenePlay:()=>{F.compare&&Nr(),F.playing=!0},onPause:()=>{F.playing=!1},onScene:n=>md(n),notify:vt,outputMuted:!1}),xt=new Zf;xt.background=new Ue("#070c13");xt.fog=new kl("#0b1724",.0018);const ai=q("#viewport"),Un=q("#world");let It,ls=!0,xo=0,Mi=0,hn=0,Xr=0,ei=ai.clientWidth<700?0:1,Ei=null;function Yn(n=1.6){xo=Math.max(xo,performance.now()+n*1e3)}try{It=new gv({canvas:Un,antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:jh?"default":"high-performance"})}catch(n){throw q("#webgl-error").hidden=!1,q("#loading").hidden=!0,window.__beastBoot?.fail("设备未能开启三维显示。可以先关闭其他三维页面后重试；较旧的系统或浏览器可能不支持。","graphics"),n}window.__beastBoot?.phase("图形初始化");const Xn=jh||!It.extensions.has("EXT_color_buffer_float");It.setPixelRatio(Math.min(devicePixelRatio,1.25));It.toneMapping=Rl;It.toneMappingExposure=1.25;It.shadowMap.enabled=!1;It.shadowMap.type=Zu;const ct=new jt(44,1,.1,1500);ct.position.set(136,91,144);const dn=Nv(ct.fov),uo=Bv(ai),Je=new Hv(ct,Un);Je.target.set(0,12,0);Je.enableDamping=!0;Je.dampingFactor=.06;Je.minDistance=4;Je.maxDistance=360;Je.maxPolarAngle=Math.PI*.49;const Fu=(()=>{const n=It.getContext();try{return{color:n.getInternalformatParameter(n.RENDERBUFFER,n.RGBA16F,n.SAMPLES)||[],depth:n.getInternalformatParameter(n.RENDERBUFFER,n.DEPTH_COMPONENT24,n.SAMPLES)||[]}}catch{return{color:[],depth:[]}}})(),hx=new pn(1,1,{type:Xn?yn:Pn,samples:0}),Ui=new sx(It,hx);Ui.addPass(new ox(xt,ct));const ri=new Mr(new ue(1,1),.75,.55,.7);Ui.addPass(ri);ri.materialHighPassFilter.fragmentShader=ri.materialHighPassFilter.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if(any(notEqual(texel.rgb,texel.rgb))) texel.rgb=vec3(0.); texel.rgb=clamp(texel.rgb,vec3(0.),vec3(65500.));");const cs=new lx;cs.uniforms.saturation={value:1.38};cs.material.fragmentShader=cs.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float saturation;").replace("gl_FragColor = texture2D( tDiffuse, vUv );","gl_FragColor = texture2D( tDiffuse, vUv ); float luminance=dot(gl_FragColor.rgb,vec3(.2126,.7152,.0722)); gl_FragColor.rgb=max(vec3(0.),mix(vec3(luminance),gl_FragColor.rgb,saturation));");Ui.addPass(cs);const dx=Fv(It,Ui,ri);Xn&&(q("#color-mode").hidden=!0);let $s=!0;q("#color-mode").onclick=()=>{$s=!$s,cs.uniforms.saturation.value=$s?1.38:1,q("#color-mode").textContent="色彩 · "+($s?"鲜艳":"柔和")};const vl=[Oh,Kl,Bh].map(n=>{const e=new Ep().load(n);return e.colorSpace=rn,e});q("#visual-thumb").src=Zl;q("#gallery-poster").src=zh;q("#gallery-performer").src=Zl;q("#gallery-stage").src=kh;q("#gallery-awakening").src=Oh;q("#gallery-eye").src=Kl;q("#gallery-finale").src=Bh;for(const[n,e,t]of[["visual-dialog",["visuals","visual-card"],"close-visuals"]]){const i=q("#"+n);e.forEach(r=>q("#"+r).onclick=()=>i.showModal()),q("#"+t).onclick=()=>i.close(),i.addEventListener("click",r=>{if(r.target===i){const s=i.getBoundingClientRect();(r.clientX<s.left||r.clientX>s.right||r.clientY<s.top||r.clientY>s.bottom)&&i.close()}})}const fx=Tv({getSelection:()=>({zone:Sn().name,row:F.row,seat:F.seat}),notify:vt});q("#sky-reference-king").src=wv;q("#sky-reference-whale").src=Av;q("#sky-reference-peace").src=Cv;q("#gallery-sources").onclick=()=>{q("#visual-dialog").close(),q("#source-dialog").showModal()};Zt("[data-gallery-group]").forEach(n=>n.onclick=()=>{n.dataset.galleryGroup==="personal"&&fx.open(),Zt("[data-gallery-group]").forEach(e=>{e.classList.toggle("active",e===n),e.setAttribute("aria-pressed",String(e===n))}),Zt("[data-gallery-panel]").forEach(e=>e.hidden=e.dataset.galleryPanel!==n.dataset.galleryGroup)});const Ea=new Map,zt=(n,e={})=>{const t=JSON.stringify([n,e]);return Ea.has(t)||Ea.set(t,new Ph({color:n,roughness:.7,metalness:.25,...e})),Ea.get(t)},Ro=zt("#11191a"),xl=zt("#303b3b",{metalness:.85,roughness:.35}),Dr=zt("#69716b",{metalness:.9,roughness:.3}),px=zt("#252d2b"),mx=zt("#1c292b"),gx=zt("#2a443b");function Xt(n,e,t,i,r=0,s=0,o=0,a=xt){let l=new pt(new Fi(n,e,t),i);return l.position.set(r,s,o),a.add(l),l}function an(n,e,t,i,r=xt){const s=new C(...n),o=new C(...e),a=new pt(new Eo(t,t,s.distanceTo(o),6),i);return a.position.copy(s).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new C(0,1,0),o.sub(s).normalize()),r.add(a),a}function _x(n,e,t,i=xt){let r=new Ch(n.map(o=>new C(...o)),!1,"catmullrom",.1),s=new pt(new Xl(r,Math.max(12,n.length*3),e,5,!1),t);return i.add(s),s}const Zh=new Tp("#a4b7db","#080d0b",.48);xt.add(Zh);const ic=new Pp("#9db1df",1.5);ic.position.set(-80,120,80);xt.add(ic);Xt(800,1,800,zt("#060c10"),0,-1,0);Xt(vo.historicalPitch.width,.15,vo.historicalPitch.depth,zt("#102f26"),0,-.35,0);const li=new Nt;xt.add(li);const ms=(n,e,t=!1)=>{const i=t?131:106,r=t?104:79;return new C(Math.cos(n)*(i+e*.73),t?18+e*.48:2+e*.46,Math.sin(n)*(r+e*.73))};function Jh(n){let e=[],t=[];for(let s=0;s<=160;s++){let o=s/160*Wt;for(let a of[0,22]){let l=ms(o,a,n);e.push(l.x,l.y-.9,l.z)}}for(let s=0;s<160;s++){let o=s*2;t.push(o,o+1,o+2,o+1,o+3,o+2)}let i=new Et;i.setAttribute("position",new ut(e,3)),i.setIndex(t),i.computeVertexNormals();let r=new pt(i,mx);r.material.side=sn,li.add(r)}Jh(!1);Jh(!0);const rc=new Fi(.48,.62,.43);rc.translate(0,.3,0);let vx=630*Co;const Mo=new oi(rc,gx,vx),nt=new yt,br=new Ue;let js=0;const et=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)};for(let n=0;n<21;n++)for(let e=0;e<30;e++)for(let t=0;t<Co;t++){let i=e>=15,r=e%15*1.4,s=qh(n,t+1),o=ms(s,r,i);nt.position.copy(o),nt.rotation.set(0,-s-Math.PI/2,0),nt.updateMatrix(),Mo.setMatrixAt(js,nt.matrix),br.setHSL(.4+et(js)*.06,.19,.12+et(js)*.07),Mo.setColorAt(js++,br)}Mo.instanceMatrix.needsUpdate=!0;li.add(Mo);for(let n of[!1,!0])for(let e of[-.8,22.5]){let t=[];for(let i=0;i<=140;i++){let r=ms(i/140*Wt,e,n);t.push([r.x,r.y+.3,r.z])}_x(t,.13,Dr,li)}const xx=zt("#1e292d",{side:sn,metalness:.7});let Qh=[],ed=[];for(let n=0;n<=96;n++){let e=n/96*Wt;Qh.push(Math.cos(e)*138,35+Math.sin(e*2)*1.8,Math.sin(e)*112,Math.cos(e)*158,33,Math.sin(e)*133)}for(let n=0;n<96;n++){let e=n*2;ed.push(e,e+1,e+2,e+1,e+3,e+2)}let Po=new Et;Po.setAttribute("position",new ut(Qh,3));Po.setIndex(ed);Po.computeVertexNormals();li.add(new pt(Po,xx));for(let n=0;n<48;n++){let e=n/48*Wt;an([Math.cos(e)*151,0,Math.sin(e)*128],[Math.cos(e)*151,33,Math.sin(e)*128],.28,xl,li),an([Math.cos(e)*138,35,Math.sin(e)*112],[Math.cos(e)*158,33,Math.sin(e)*133],.23,Dr,li)}for(let n=0;n<80;n++){let e=n/80*Wt,t=255+et(n)*110,i=8+et(n+3)*40;Xt(5+et(n+10)*15,i,7+et(n+20)*9,zt("#0c171d"),Math.cos(e)*t,i/2,Math.sin(e)*t)}const Rt=new Nt;xt.add(Rt);const Mx=Xt(69,1.8,35,px,0,.9,0,Rt);Mx.receiveShadow=!0;Xt(89,1.2,12,Ro,0,.6,0,Rt);Xt(15,1.2,49,Ro,0,.6,0,Rt);const td=new Cr({color:"#958a64"});for(let n of[-17.6,17.6])Xt(69,.09,.13,td,0,1.85,n,Rt);for(let n of[-34.6,34.6])Xt(.13,.09,35,td,n,1.85,0,Rt);const Ou=[[-46.5,-14],[-36,-26.5],[36,-26.5],[46.5,-14],[46.5,14],[36,26.5],[-36,26.5],[-46.5,14]];for(let n=0;n<8;n++){let e=Ou[n],t=Ou[(n+1)%8];for(let i of[4,31.8,34])an([e[0],i,e[1]],[t[0],i,t[1]],.34,xl,Rt);an([e[0],0,e[1]],[e[0],34,e[1]],.4,xl,Rt);for(let i=2;i<30;i+=4)an([e[0]-.5,i,e[1]],[e[0]+.5,i+4,e[1]],.09,Dr,Rt)}const us=new Nt;Rt.add(us);for(let n of[-1,1])for(let e=0;e<20;e++){let t=-35+e*70/19;an([t,5,n*26],[t,31,n*26],.08,Dr,us)}for(let n=0;n<16;n++){let e=n/16*Wt;an([Math.cos(e)*37,31.8,Math.sin(e)*20],[Math.cos(e)*22,36,Math.sin(e)*13],.18,Dr,Rt)}for(let n of[-1,1])for(let e=0;e<7;e++){let t=Xt(1.7,6,1.5,Ro,n*42,24,e===0?-16:16,Rt);e>0&&(t.position.z=(e-3)*5)}const sc=()=>new wt({uniforms:{time:{value:0},chapter:{value:0},hue:{value:new Ue("#497bd4")},intensity:{value:1},tourTex:{value:vl[0]},previousTex:{value:vl[0]},artBlend:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tourTex;uniform sampler2D previousTex;uniform float artBlend;uniform float time;uniform float chapter;uniform vec3 hue;uniform float intensity;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 uv=vUv;float t=time;float grid=1.;float waves=sin(uv.x*20.+t*.6+sin(uv.y*10.-t*.4)*3.)*.5+.5;float eyeY=(uv.y-.53)*13.;float eye=exp(-(eyeY*eyeY))*pow(max(0.,sin(uv.x*18.85)),6.);float crown=(1.-smoothstep(0.,.08,abs(uv.y-(.4+.3*abs(sin(uv.x*18.85))))));float bars=pow(max(0.,sin(uv.x*45.+sin(t*.3)*3.)),6.);float stars=step(.985,hash(floor(uv*vec2(220.,70.))))*(.5+.5*sin(t+uv.x*25.));float v=mix(waves*.25+eye*.9,bars*.45+eye*.7,step(.5,chapter));v=mix(v,crown*.9+waves*.25+stars,step(1.5,chapter));vec3 photo=mix(texture2D(previousTex,uv).rgb,texture2D(tourTex,uv).rgb,smoothstep(0.,1.,artBlend));vec3 c=mix(hue*(v*.9+.025),photo*.72+hue*v*.18,.62)*grid*intensity;if(chapter>2.5){vec2 cell=fract(uv*vec2(20.,5.))-.5;float d=abs(cell.x)*.8+abs(cell.y);float diamond=(1.-smoothstep(.26,.29,d));float sparkle=.35+.12*sin(t*.6+floor(uv.x*20.)*2.3+floor(uv.y*5.));c=(hue*(.09+diamond*(.35+sparkle*1.4))+vec3(.55,.10,.32)*waves*.3)*grid*intensity;}float alpha=.92;gl_FragColor=vec4(c,alpha);}",transparent:!0,side:sn,depthWrite:!1}),hs=[];for(let n of[-25.7,25.7]){let e=sc(),t=new pt(new Oi(68,12),e);t.position.set(0,20,n),hs.push(t),Rt.add(t)}for(let n of[-45.9,45.9]){let e=sc(),t=new pt(new Oi(27,12),e);t.rotation.y=Math.PI/2,t.position.set(n,20,0),hs.push(t),Rt.add(t)}const Sr=new Nt;Sr.position.set(0,4,0);Rt.add(Sr);const oc=new pt(new Oi(vo.flippingScreen.width,vo.flippingScreen.height),sc());oc.geometry.translate(0,2.5,0);Sr.add(oc);hs.push(oc);Xt(64,5,.24,Ro,0,2.5,-.16,Sr);const ft=new Nt;ft.position.y=1.8;Rt.add(ft);const Do=zt("#c1a18a",{roughness:.8}),Bi=zt("#281b1d",{metalness:.45,roughness:.45}),nd=zt("#821f29"),yr=zt("#090c10");function zi(n,e,t,i,r,s,o,a=ft){let l=new pt(new ps(1,12,10),i);return l.scale.set(n,e,t),l.position.set(r,s,o),a.add(l),l}zi(.23,.38,.14,Bi,0,1.1,0);zi(.18,.22,.17,Do,0,1.7,0);zi(.19,.15,.18,yr,0,1.83,-.02);zi(.11,.06,.17,yr,-.08,1.8,.07);Xt(.12,.09,.1,Do,0,1.45,0,ft);const ac=new pt(new To(.32,.68,8,1,!0),Bi);ac.position.y=.73;ac.rotation.z=Math.PI;ft.add(ac);Xt(.09,.5,.025,nd,-.13,1.14,.125,ft);Xt(.09,.5,.025,nd,.13,1.14,.125,ft);const Ml=[];for(let n of[-1,1]){let e=new Nt;e.position.set(n*.11,.8,0),an([0,0,0],[0,-.7,.01],.085,yr,e),Xt(.15,.12,.27,yr,0,-.74,.05,e),ft.add(e),Ml.push(e)}const Lr=new Nt;Lr.position.set(-.22,1.38,0);an([0,0,0],[-.14,-.36,.06],.075,Bi,Lr);an([-.14,-.36,.06],[-.11,-.64,.12],.055,Bi,Lr);zi(.055,.06,.055,Do,-.11,-.65,.12,Lr);ft.add(Lr);const ui=new Nt;ui.position.set(.23,1.38,0);an([0,0,0],[.17,-.24,.08],.075,Bi,ui);an([.17,-.24,.08],[.08,.12,.22],.055,Bi,ui);zi(.055,.06,.055,Do,.08,.12,.22,ui);an([.08,.12,.22],[.03,.25,.12],.025,yr,ui);zi(.035,.045,.035,Dr,.03,.25,.12,ui);ft.add(ui);const ci=new Ap("#fff1d6",8500,85,.22,.75,1.1);ci.position.set(10,32,8);ci.target=ft;ci.castShadow=!0;ci.shadow.mapSize.set(1024,1024);xt.add(ci);const lc=new Dh("#ffb790",35,12,1.2);lc.position.set(0,4,2);Rt.add(lc);const cc=new Nt;xt.add(cc);let Lo=[];for(let n=0;n<6400;n++){let e=Math.floor(et(n)*21),t=Math.floor(et(n+500)*30),i=Math.PI/2-e/21*Wt+(et(n+100)-.5)*Wt/21*.87,r=ms(i,t%15*1.4,t>=15);Lo.push([r.x,r.y+.6,r.z])}const Uo=new oi(new Vl(.17,.36,2,4),zt("#19282b"),Lo.length),Er=new oi(new ps(.1,4,3),new Cr({color:"#fff1b0"}),Lo.length);Lo.forEach((n,e)=>{nt.position.set(...n),nt.rotation.set(0,0,0),nt.scale.setScalar(.9),nt.updateMatrix(),Uo.setMatrixAt(e,nt.matrix),nt.position.y+=.65,nt.position.x+=.2,nt.scale.setScalar(.65+et(e)*.9),nt.updateMatrix(),Er.setMatrixAt(e,nt.matrix),br.setHSL(.58+et(e)*.13,.35,.5+et(e+2)*.3),Er.setColorAt(e,br)});cc.add(Uo,Er);for(const n of[Uo.material,Er.material])n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 spectatorCenter=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
if(distance(spectatorCenter,cameraPosition)<1.25)gl_Position=vec4(2.,2.,2.,1.);`)},n.customProgramCacheKey=()=>"spectator-eye-clearance-v1";const Bu=Gh,uc=[];Jl.forEach((n,e)=>{for(let t=1;t<=n.rows;t++)for(let i=1;i<=n.seats;i++)uc.push(Xh(e,t,i))});const id=new oi(rc,zt("#272c30"),uc.length);uc.forEach((n,e)=>{nt.position.set(...n),nt.rotation.set(0,Math.atan2(-n[0],-n[2]),0),nt.scale.setScalar(1),nt.updateMatrix(),id.setMatrixAt(e,nt.matrix)});xt.add(id);const rd=new To(1,1,20,1,!0);rd.translate(0,-.5,0);const sd=[],hc=new Nt;xt.add(hc);const bx=()=>new wt({uniforms:{color:{value:new Ue("#539cfd")},power:{value:.13},time:{value:0}},transparent:!0,depthWrite:!1,blending:Di,side:sn,vertexShader:"varying vec2 vUv;varying vec3 vPos;void main(){vUv=uv;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 color;uniform float power;uniform float time;varying vec2 vUv;varying vec3 vPos;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159265)),1.8);float fall=pow(clamp(vUv.y,0.,1.),1.2);float grain=.85+.15*sin(vUv.y*45.-time*.3);gl_FragColor=vec4(color*1.2,power*edge*fall*grain);}"}),dc=Dv(xt,rd,bx());sd.push(...dc.lights);sd.forEach(({origin:n})=>Xt(.8,.9,.7,yr,n.x,n.y+.3,n.z,hc));const bo=new Dh("#335ca5",15e3,140,1.3);bo.position.set(0,18,0);xt.add(bo);const od=1600,ad=new Float32Array(od*3);for(let n=0;n<od;n++){let e=[(et(n+45)-.5)*140,et(n+99)*24+1,(et(n+56)-.5)*90];ad.set(e,n*3)}const ld=new Et;ld.setAttribute("position",new dt(ad,3));const ho=new wt({uniforms:{time:{value:0},color:{value:new Ue("#6994bf")},opacity:{value:.075},scale:{value:1}},transparent:!0,depthWrite:!1,blending:Di,vertexShader:"uniform float time;uniform float scale;varying float vSeed;void main(){vec3 p=position;vSeed=fract(sin(p.x*6.2+p.z)*145.);p.x+=sin(time*.08+p.z*.1)*6.;p.z+=cos(time*.06+p.x*.07)*4.;p.y+=sin(time*.2+p.x)*1.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp((2500.+vSeed*1500.)/max(.1,-mv.z),1.,100.)*scale;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform vec3 color;uniform float opacity;varying float vSeed;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.5)*opacity;gl_FragColor=vec4(color,a);}"}),Io=new _o(ld,ho);xt.add(Io);let cd=new Float32Array(500*3);for(let n=0;n<500;n++)cd.set([(et(n+3)-.5)*100,et(n+9)*40,(et(n+12)-.5)*60],n*3);const fo=new _o(new Et().setAttribute("position",new dt(cd,3)),new Eh({size:.12,color:"#d9b66e",transparent:!0,opacity:.55,blending:Di,depthWrite:!1}));xt.add(fo);const No=new Wl([new ue(0,-.75),new ue(.6,0),new ue(.46,.32),new ue(.27,.44),new ue(0,.44)],8);No.computeVertexNormals();const fc=new Ph({color:"#ff71bc",emissive:"#fb1485",emissiveIntensity:.65,metalness:.28,roughness:.4,flatShading:!0}),Fo=new Nt;xt.add(Fo);const bl=new oi(No,fc,380),Sl=new oi(No,fc,130);Fo.add(bl,Sl);const ud=[];for(let n=0;n<380;n++)nt.position.set((et(n+900)-.5)*66,2.15,(et(n+940)-.5)*32),nt.rotation.set(et(n)*.6,et(n+6)*Wt,et(n+8)*.4),nt.scale.setScalar(.22+et(n+980)*.5),nt.updateMatrix(),bl.setMatrixAt(n,nt.matrix),br.setHSL(.89+et(n)*.07,.82,.48+et(n+1)*.22),bl.setColorAt(n,br);for(let n=0;n<130;n++)ud.push({x:(et(n+321)-.5)*84,z:(et(n+333)-.5)*44,y:et(n+349)*29,size:.12+et(n+353)*.32});Fo.visible=!1;const ds=new Nt;Rt.add(ds);for(let n=0;n<5;n++){const e=new pt(No,fc),t=n/5*Wt;e.position.set(Math.cos(t)*23,12+Math.sin(t)*4,Math.sin(t)*14),e.scale.setScalar(n===0?2.8:1.6),ds.add(e)}ds.visible=!1;const hd=vv(xt,ct,{notify:vt}),zu=Mv([xt,li,Rt,us,hc]);document.documentElement.dataset.staticBatches=`${zu.before}/${zu.after}`;const Sx=[{name:"深渊 · 序曲",top:"视觉 · 深渊",color:"#497acf",screen:"#356dd6",fog:"#436d9b"},{name:"兽笼 · 觉醒",top:"视觉 · 兽笼",color:"#ff233e",screen:"#d62239",fog:"#8d3148"},{name:"王冠 · 加冕",top:"视觉 · 王冠",color:"#ffcd78",screen:"#e9a847",fog:"#b69b62"},{name:"粉钻 · 心动返场",top:"视觉 · 粉钻",color:"#ff35b1",screen:"#ff56bd",fog:"#b3348b"}];let yl=-1,St=0,nn=null,wn=null;function Ks(n,e,t=1.6){Vh(Je,ct),ct.position.distanceTo(n)>2||uo.active||wn?(nn=null,Je.enabled=!1,wn={to:n.clone(),targetTo:e.clone()}):nn=Ov(ct,Je.target,n,e,t),Yn(t+.2)}function Sn(n=F.zone){return n<21?{angle:Math.PI/2-n/21*Wt,floor:!1,name:`${n}区看台`}:{angle:Math.atan2(Bu[n-21][1],Bu[n-21][0]),floor:!0,name:`${Wh[n-21]}区内场`}}function El(){if(Sn().floor){const[i,,r]=Xh(F.zone-21,F.row,F.seat);return new C(i,F.standing?1.7:1.15,r)}let n=qh(F.zone,F.seat),e=F.row>15,t=ms(n,(F.row-1)%15*1.4,e);return t.y+=F.standing?1.75:1.15,t}function yx(){let n=new URLSearchParams(location.search);for(const e of["zone","row","seat"])n.set(e,F[e]);try{history.replaceState(null,"",`${location.pathname}?${n}`)}catch{}}function ki(){Object.assign(F,ec(F));const n=Ql(F.zone);q("#row").max=n.rows,q("#seat").max=n.seats;let e=El(),t=new C;ft.getWorldPosition(t),t.y+=1.5;let i=e.distanceTo(t);q("#person-dist").textContent=`约 ${i.toFixed(0)} 米`,q("#eye-height").textContent=`约 ${e.y.toFixed(1)} 米`;let r=new C(0,0,1).applyQuaternion(ft.quaternion),s=e.clone().sub(t).normalize(),o=r.dot(s);q("#facing").textContent=o>.6?"偏正面":o<-.6?"偏背面":"偏侧面",q("#distance").textContent=F.mode==="overview"?"舞台整体结构高约 36 米":`至人物约 ${i.toFixed(0)} 米 · 模型估算`,q("#seat-badge").textContent=F.mode==="overview"?"自由探索 · 场馆总览":`${Sn().name} · ${F.row}排${F.seat}座${F.standing?" · 站立":""}`,q("#zone-label").textContent=Sn().name,q("#zone-type").textContent=Sn().floor?"内场示意位置":"看台示意位置",q("#row-val").textContent=`${F.row} 排${F.row>15&&!Sn().floor?" · 上层":""}`,q("#seat-val").textContent=`${F.seat} 座`,q("#row").value=F.row,q("#seat").value=F.seat,Zt(".map-zone").forEach(a=>a.classList.toggle("selected",Number(a.dataset.zone)===F.zone))}function hi(n){if(F.mode=n,n==="phone"&&(F.follow=!0,q("#follow-person").classList.add("active")),document.body.classList.toggle("seated",n==="seat"),document.body.classList.toggle("phone",n==="phone"),document.body.classList.toggle("director",n==="director"),document.body.classList.toggle("sky-view",n==="sky"),q("#sky-toolbar").hidden=n!=="sky",Zt("[data-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.mode===n),e.setAttribute("aria-pressed",String(e.dataset.mode===n))}),q("#phone-frame").hidden=n!=="phone",q("#hint").textContent=n==="overview"?"拖动环顾场馆 · 滚轮靠近现场":n==="director"?"镜头正在缓慢巡游 · 随时切回我的视角":n==="sky"?"拖动环顾夜空 · 切换文字与造型":"拖动环顾 · 保持所在位置",Je.enabled=n!=="director",Je.enableZoom=n==="overview",Je.enablePan=n==="overview",Je.minDistance=n==="overview"?4:.1,Je.maxDistance=n==="overview"?360:1,Je.maxPolarAngle=n==="overview"?Math.PI*.49:Math.PI*.97,Je.minPolarAngle=n==="overview"?0:.03,n==="overview")dn.setTarget(44,1.6),Ks(new C(136,91,144),new C(0,12,0));else if(n==="seat"||n==="phone"){let e=El(),t=new C;ft.getWorldPosition(t),t.y+=1.2;let i=t.sub(e).normalize();dn.setTarget(n==="phone"?Oo():60,1.6),Ks(e,e.clone().add(i.multiplyScalar(.8)))}else if(n==="sky"){let e=El(),t=new C(0,129,-8).sub(e).normalize();dn.setTarget(76,1.6),Ks(e,e.clone().add(t.multiplyScalar(.8))),hd.focus()}else{const e=F.time,t=e*.025;dn.setTarget(44,1.6),Ks(new C(Math.cos(t)*150,60+Math.sin(e*.05)*16,Math.sin(t)*175),new C(ft.position.x*.3,13,ft.position.z*.3))}Yn(),ki(),yx()}function Oo(){const e=24*F.zoom,t=Math.max(.1,q("#phone-frame").getBoundingClientRect().height/ai.clientHeight);return Ci.radToDeg(2*Math.atan(34.61/(2*e*t)))}q("#follow-person").onclick=()=>{F.follow=!F.follow,F.follow&&Vh(Je,ct),Yn(),q("#follow-person").classList.toggle("active",F.follow),vt(F.follow?"取景方向将跟随舞台人物":"已切换自由取景，拖动可环顾")};let Ur=!1;Un.addEventListener("pointerdown",n=>{wn||(F.mode==="seat"||F.mode==="phone"||F.mode==="sky")&&(Ur=!0,F.follow=!1,q("#follow-person").classList.remove("active"),n.clientX,n.clientY,Un.setPointerCapture(n.pointerId))});const Tl=new C;Je.addEventListener("end",()=>{pc=performance.now()+1800});Je.addEventListener("start",()=>{if(F.mode==="seat"||F.mode==="phone"||F.mode==="sky"){if(wn){Ur=!1;return}Tl.copy(ct.position),nn=null}});Je.addEventListener("change",()=>{if(Ur&&(F.mode==="seat"||F.mode==="phone"||F.mode==="sky")){let n=Je.target.clone().sub(ct.position);ct.position.copy(Tl),Je.target.copy(Tl).add(n)}});Un.addEventListener("pointerup",()=>Ur=!1);Un.addEventListener("pointercancel",()=>Ur=!1);function Ex(){let n=q("#seat-map"),e="";const t=(r,s,o)=>[170+Math.cos(r)*s,142+Math.sin(r)*o];for(let r=0;r<21;r++){let s=Math.PI/2-r/21*Wt,o=s-.46/21*Wt,a=s+.46/21*Wt,l=t(o,111,75),c=t(a,111,75),u=t(a,153,120),h=t(o,153,120),p=t(s,137,100);e+=`<path class="map-zone ${r===F.zone?"selected":""}" data-zone="${r}" tabindex="0" role="button" aria-label="${Sn(r).name}" fill="${r%3===1?"#8e83a5":"#647d64"}" d="M${l} A111 75 0 0 1 ${c} L${u} A153 120 0 0 0 ${h}Z"/><text x="${p[0]}" y="${p[1]+3}" text-anchor="middle" fill="#d2d8c5" font-size="8" pointer-events="none">${r}</text>`}[[120,186,43,16],[177,186,43,16],[120,83,43,16],[177,83,43,16],[254,124,17,38],[69,124,17,38]].forEach(([r,s,o,a],l)=>{e+=`<rect class="map-zone" data-zone="${21+l}" tabindex="0" role="button" aria-label="${Sn(21+l).name}" x="${r}" y="${s}" width="${o}" height="${a}" rx="2" fill="#ae705c"/><text x="${r+o/2}" y="${s+a/2+3}" text-anchor="middle" fill="#e3d4b1" font-size="8" pointer-events="none">${Wh[l]}</text>`}),n.innerHTML=`<text x="170" y="8" text-anchor="middle" fill="#77887c" font-size="8">图示方位 · 非地理朝向</text>${e}<rect x="102" y="111" width="136" height="62" rx="5" fill="#252f2c" stroke="#9d8e69" stroke-width="1"/><path d="M102 142h136M170 111v62" stroke="#c7ae73" stroke-width=".5" opacity=".5"/><text x="170" y="139" text-anchor="middle" fill="#c9bb95" font-size="10">万兽之王</text><text x="170" y="155" text-anchor="middle" fill="#7b8679" font-size="7">舞台整体 93 × 53 米</text>`,Zt(".map-zone").forEach(r=>{const s=()=>{F.zone=Number(r.dataset.zone),ki(),(F.mode==="seat"||F.mode==="phone"||F.mode==="sky")&&hi(F.mode)};r.addEventListener("click",s),r.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s())})})}Ex();ki();q("#seat-panel").inert=!0;function Ir(n){q("#seat-panel").classList.toggle("open",n),q("#seat-panel").inert=!n,q("#seat-toggle").setAttribute("aria-expanded",String(n))}q("#seat-toggle").onclick=()=>Ir(!q("#seat-panel").classList.contains("open"));q("#close-seats").onclick=()=>Ir(!1);document.addEventListener("keydown",n=>{n.key==="Escape"&&!q("#source-dialog").open&&(Ir(!1),F.compare&&Nr())});q("#enter").onclick=()=>{F.compare&&Nr(),md(0),Ir(!1),hi("director"),Ln.enter()};q("#take-seat").onclick=()=>{hi("seat"),Ir(!1)};Zt("[data-mode]").forEach(n=>n.onclick=()=>{F.compare&&Nr(),hi(n.dataset.mode)});for(let n of["row","seat"])q("#"+n).oninput=e=>{F[n]=Number(e.target.value),ki(),(F.mode==="seat"||F.mode==="phone"||F.mode==="sky")&&hi(F.mode)};q("#standing").onclick=()=>{F.standing=!F.standing,q("#standing").setAttribute("aria-checked",String(F.standing)),ki(),["seat","phone","sky"].includes(F.mode)&&hi(F.mode)};Zt("[data-zoom]").forEach(n=>n.onclick=()=>{if(F.zoom=Number(n.dataset.zoom),Zt("[data-zoom]").forEach(e=>e.classList.toggle("active",e===n)),q("#phone-zoom-label").textContent=F.zoom+"×",F.mode==="phone"){const e=Oo(),t=Math.abs(Math.log2(Math.tan(dn.value*Math.PI/360)/Math.tan(e*Math.PI/360))),i=$h(.28+t*.2,.28,1.05);dn.setTarget(e,i),Yn(i+.2)}});function dd(){try{localStorage.setItem("beast.positions.v1",JSON.stringify(Gt))}catch{vt("浏览器无法保存收藏，请保持此页面打开")}fd()}function fd(){q("#saved-count").textContent=Gt.length,q("#saved-list").innerHTML=Gt.length?Gt.map((n,e)=>`<div class="saved-card"><div><strong>${Sn(n.zone).name}</strong><small>${n.row}排 · ${n.seat}座 · ${n.standing?"站立":"坐姿"}</small></div><div><button data-visit="${e}">查看</button><button data-remove="${e}" class="remove" aria-label="删除第${e+1}个收藏">×</button></div></div>`).join(""):'<div class="saved-empty">为这一夜，留一个位置。<br>选好位置后，点击「收藏」。</div>',q("#compare").disabled=Gt.length<2,Zt("[data-visit]").forEach(n=>n.onclick=()=>{Object.assign(F,Gt[Number(n.dataset.visit)]),q("#standing").setAttribute("aria-checked",String(F.standing)),hi("seat")}),Zt("[data-remove]").forEach(n=>n.onclick=()=>{F.compare&&Nr(),Gt.splice(Number(n.dataset.remove),1),dd()})}q("#save-seat").onclick=()=>{if(Gt.some(n=>n.zone===F.zone&&n.row===F.row&&n.seat===F.seat&&n.standing===F.standing)){vt("这个位置已经收藏了");return}if(Gt.length>=8){vt("最多收藏8个位置，请先移除一个");return}Gt.push({zone:F.zone,row:F.row,seat:F.seat,standing:F.standing}),dd(),vt("已收藏，可在「我的收藏」比较位置")};fd();Zt("[data-tab]").forEach(n=>n.onclick=()=>{Zt("[data-tab]").forEach(e=>e.classList.toggle("active",e===n)),q("#select-content").hidden=n.dataset.tab!=="select",q("#saved-content").hidden=n.dataset.tab!=="saved"});q("#share-seat").onclick=async()=>{const n=new URL(location.href);n.searchParams.set("zone",F.zone),n.searchParams.set("row",F.row),n.searchParams.set("seat",F.seat),n.searchParams.delete("v");try{if(!navigator.clipboard?.writeText)throw new Error("clipboard unavailable");await navigator.clipboard.writeText(n.href),vt("位置链接已复制，对方打开后可查看相同排座")}catch{prompt("复制这个链接，即可分享当前排座：",n.href)}};let wl=!1;function pd(){Object.assign(F,Gt[F.compareIndex]),hi("seat"),q("#compare-name").textContent=`位置 ${F.compareIndex+1} / ${Gt.length} · ${Sn().name} ${F.row}排`,ki()}q("#compare").onclick=()=>{Gt.length<2||(wl=F.playing,F.playing=!1,F.compare=!0,Ln.pauseForScene(),F.compareIndex=0,q("#compare-banner").hidden=!1,q("#compare-exit").hidden=!1,q("#compare").hidden=!0,q("#play").textContent="▶",q("#play").setAttribute("aria-label","比较中，演出已暂停"),pd(),Ir(!1),vt("已锁定演出时刻，切换位置比较"))};q("#compare-next").onclick=()=>{F.compareIndex=(F.compareIndex+1)%Gt.length,pd()};function Nr(){F.compare=!1,q("#compare-banner").hidden=!0,q("#compare-exit").hidden=!0,q("#compare").hidden=!1,F.playing=wl,wl?Ln.resumeForScene():Ln.refresh(),q("#play").textContent=F.playing?"Ⅱ":"▶",q("#play").setAttribute("aria-label",F.playing?"暂停演出":"播放演出")}q("#compare-exit").onclick=Nr;q("#play").onclick=()=>{if(F.compare){vt("比较中已锁定演出时刻，请先结束位置比较");return}Ln.toggle()};function md(n){F.scene=$h(Math.floor(n),0,3),yl=-1,Yn()}for(let n of["fog","crowd"])q("#"+n).onclick=()=>{F[n]=!F[n],q("#"+n).classList.toggle("active",F[n]),Io.visible=F.fog,cc.visible=F.crowd};q("#inspection").onclick=()=>{F.inspection=!F.inspection,Yn(),q("#inspection").classList.toggle("active",F.inspection),vt(F.inspection?"视野检查：已减少烟雾与舞台光效":"已恢复演出氛围")};function gd(){const n=q("#motion");n.textContent=F.reduced?"恢复动态":"减少动态",n.setAttribute("aria-pressed",String(F.reduced))}gd();q("#motion").onclick=()=>{F.reduced=!F.reduced,gd();try{localStorage.setItem("beast.reduced-motion.v1",String(F.reduced))}catch{}Yn(),vt(F.reduced?"已降低闪烁和运动强度":"已恢复舞台动态")};q("#sources").onclick=()=>q("#source-dialog").showModal();q("#close-sources").onclick=()=>q("#source-dialog").close();q("#source-dialog").addEventListener("click",n=>{if(n.target===q("#source-dialog")){let e=q("#source-dialog").getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&q("#source-dialog").close()}});q("#fullscreen").onclick=async()=>{try{const n=q("#app");document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():typeof n.requestFullscreen=="function"?await n.requestFullscreen():vt("此浏览器暂不支持网页全屏，可横屏获得更大的观演画面")}catch{vt("暂时无法全屏，可横屏继续体验")}};let fn=Xn?3:matchMedia("(pointer: coarse)").matches||ai.clientWidth<700?2:1,_d=fn>=2;function So(n){Xn&&(n=Math.max(2,n)),fn=n,_d=n>=2,ls=!0,Yn(),q("#quality").textContent=Xn?"兼容 · "+(n===3?"省电":"流畅"):"画质 · "+(F.quality==="auto"?"自动 · "+(n===3?"省电30帧":n===2?"流畅":"均衡"):n===0?"高":"流畅")}function Tx(){if(!ls)return!1;const n=ai.clientWidth,e=ai.clientHeight;if(n<=0||e<=0)return!1;const t=bv(fn,n,devicePixelRatio),i=!Ei;Ei=t,yv(Ui,Xn?0:Sv(fn,Fu.color,Fu.depth));let r;return Xn?(It.setDrawingBufferSize(n,e,t.ratio),r=!0):r=dx.configure({width:n,height:e,ratio:t.ratio,bloomScale:fn===0?1:.65}),It.shadowMap.enabled=t.shadows,ci.castShadow=t.shadows,Io.geometry.setDrawRange(0,t.fogCount),Uo.count=t.crowdCount,Er.count=t.crowdCount,dc.setStep(t.beamStep),i&&(ei=t.bloom?1:0,ri.enabled=t.bloom),ct.aspect=n/e,F.mode==="phone"&&dn.setTarget(Oo(),.35),ct.updateProjectionMatrix(),ls=!1,document.documentElement.dataset.msaaSamples=String(Ui.renderTarget1.samples),document.documentElement.dataset.renderRatio=String(t.ratio),document.documentElement.dataset.qualityLevel=String(fn),r}q("#quality").onclick=()=>{if(Xn){F.quality="low",So(fn===3?2:3),vt("兼容模式："+(fn===3?"省电画质":"流畅画质"));return}F.quality=F.quality==="auto"?"high":F.quality==="high"?"low":"auto",So(F.quality==="high"?0:F.quality==="low"||ai.clientWidth<700?2:1),vt(F.quality==="high"?"已开启完整光效，设备发热时可切回自动":F.quality==="low"?"已启用流畅画质":"将根据运行情况调整画质")};q("#shot").onclick=()=>{try{vd();let n=It.domElement,e=n.width,t=n.height,i=0,r=0;if(F.mode==="phone"){let a=q("#phone-frame").getBoundingClientRect(),l=Un.getBoundingClientRect(),c=n.width/l.width;i=(a.left-l.left)*c,r=(a.top-l.top)*c,e=a.width*c,t=a.height*c}const s=document.createElement("canvas");s.width=Math.round(e),s.height=Math.round(t)+100;const o=s.getContext("2d");o.fillStyle="#0d1516",o.fillRect(0,0,s.width,s.height),o.drawImage(n,i,r,e,t,0,0,s.width,t),o.fillStyle="#d7bd87",o.font=`${Math.max(14,e*.017)}px sans-serif`,o.fillText("万兽之王 · 广州现场",18,t+30),o.fillStyle="#9ca998",o.font=`${Math.max(9,e*.01)}px sans-serif`,o.fillText(`${Sn().name} · ${F.row}排${F.seat}座${F.mode==="phone"?" · "+F.zoom+"倍":""}`,18,t+54),o.fillText("非官方主题模拟 · 排座与距离为估算",18,t+77),s.toBlob(a=>{if(!a){vt("截图生成失败");return}let l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`万兽之王-广州现场-${Date.now()}.png`,c.click(),setTimeout(()=>URL.revokeObjectURL(l),5e3),vt("现场截图已导出")},"image/png")}catch{vt("截图未能导出，请稍后再试")}};function ku(){ls=!0,Yn(.5)}typeof ResizeObserver<"u"?new ResizeObserver(ku).observe(ai):window.addEventListener("resize",ku);So(fn);Un.addEventListener("webglcontextlost",n=>{n.preventDefault(),F.playing=!1,Ln.pauseForScene(),vt("图形资源中断，请重新加载页面恢复现场"),q("#webgl-error").hidden=!1,q("#loading").hidden=!0,window.__beastBoot?.fail("图形资源已中断，请用兼容模式重新进入。","graphics")});performance.now();let sr=0,Al=performance.now(),pc=0,Hu=0,or=0,Ta=!1;const Vu=new Ue,Gu=new Ue,Zs=new Ue;new C(0,-1,0);const wa=new C;let Wu=0;It.info.autoReset=!1;for(const n of["pointerdown","pointermove","wheel"])Un.addEventListener(n,()=>pc=performance.now()+1200,{passive:!0});let Js=0,qr=0,Xu=!1;const ar=[],wx=Uv(),Qs=new C,Aa=new C,eo=new C,qu=new C,Yu=new mn,$u=new mn;function Ax(n,{fixedDelta:e=null}={}){const t=e!==null,i=Math.max(0,(n-Al)/1e3);if(Al=n,!t&&Ta&&document.hidden){sr=0,ar.length=0,qr=n;return}const r=!!document.querySelector("dialog[open]");if(!t&&r){sr=0,ar.length=0,qr=n;return}const s=Math.abs(Xr-(F.mode==="sky"?1:0))>.002||Math.abs(Mi-(F.mode==="phone"?1:0))>.002||Math.abs(hn-(F.inspection?1:0))>.002||Math.abs(ei-(Ei?.bloom?1:0))>.002,o=F.playing||F.mode==="sky"||!!nn||!!wn||uo.active||dn.active||ls||s||n<xo||n<pc;F.playing&&(Hu+=t?e:Math.min(i,.1));const a=o?fn===3?1e3/30:1e3/60:120;if(Xu!==o&&(Js=n,Xu=o),!t&&n+.6<Js)return;t||(Js+=Math.max(1,Math.floor((n-Js)/a)+1)*a);const l=qr?Math.max(0,n-qr):1e3/60,c=t?e:Math.min(l/1e3,.05);if(qr=n,o&&!t?(sr+=l/1e3,ar.push(l)):(sr=0,ar.length=0),Tx(),!Ei)return;const u=dn.step(c);Math.abs(ct.fov-u)>1e-6&&(ct.fov=u,ct.updateProjectionMatrix()),Je.dampingFactor=1-Math.pow(1-.06,c*60),F.time=Hu;let h=F.time;St=F.scene;let p=Sx[St];St!==yl&&(yl=St,document.body.classList.toggle("pink-scene",St===3),q("#visual-thumb").src=[Zl,Kl,kh,zh][St],hs.forEach(E=>{const T=E.material.uniforms;T.previousTex.value=T.tourTex.value,T.tourTex.value=vl[Math.min(St,2)],T.artBlend.value=0}),Zt("[data-stage-theme]").forEach(E=>{E.classList.toggle("active",Number(E.dataset.stageTheme)===St),E.setAttribute("aria-pressed",String(Number(E.dataset.stageTheme)===St))})),or=Ct(or,Ln.energy(),1-Math.exp(-c*3)),Xr=Ct(Xr,F.mode==="sky"?1:0,1-Math.exp(-c*4)),Mi=Ct(Mi,F.mode==="phone"?1:0,1-Math.exp(-c*4)),hn=Ct(hn,F.inspection?1:0,1-Math.exp(-c*4)),ei=Ct(ei,Ei.bloom?1:0,1-Math.exp(-c*4)),!Ei.bloom&&ei<.002&&(ei=0),ri.enabled=Ei.bloom||ei>0;let d=F.reduced?.25:.25+.06*Math.sin(h*.45),g=Ct(1,.1,hn);Zs.set(p.color),Vu.set(p.screen),Gu.set(p.fog),Fo.visible=St===3,ds.visible=St===3,Bi.color.set(St===3?"#a12269":"#281b1d"),St===3&&(ds.children.forEach((E,T)=>{E.rotation.y=h*.24+T,E.rotation.z=Math.sin(h*.35+T)*.16}),ud.forEach((E,T)=>{nt.position.set(E.x+Math.sin(h*.2+T)*1.4,2.5+((E.y-h*.65)%29+29)%29,E.z),nt.rotation.set(h*.12+T,h*.27+T,Math.sin(T)*.35),nt.scale.setScalar(E.size),nt.updateMatrix(),Sl.setMatrixAt(T,nt.matrix)}),Sl.instanceMatrix.needsUpdate=!0),bo.color.lerp(Zs,1-Math.exp(-c*2.14)),It.toneMappingExposure=Ct(1.25,.85,Mi),bo.intensity=Ct(3200+or*1200+d*400,5e3,hn)*Ct(1,.55,Mi),Zh.intensity=Ct(.42,1.25,hn),ic.intensity=Ct(1.2,2.5,hn),ri.strength=Ct(Ct(.5,.25,Mi),.15,hn)*ei*Ct(1,.42,Xr),ri.threshold=Ct(.7,.95,Xr),hs.forEach(E=>{E.material.uniforms.time.value=h,E.material.uniforms.chapter.value=St,E.material.uniforms.artBlend.value=Math.min(1,E.material.uniforms.artBlend.value+c*.7),E.material.uniforms.hue.value.lerp(Vu,1-Math.exp(-c*2.45)),E.material.uniforms.intensity.value=Ct(1.05+or*.08,.35,hn)}),us.visible=St<2,us.position.y=St===0?2+Math.sin(h*.15)*1.5:0,Sr.rotation.x=Ct(Sr.rotation.x,St>=2?-Math.PI/2:St===1?-Math.PI/2*(.5+.5*Math.sin((h-30)/30*Math.PI*2)):0,1-Math.exp(-c*3));const M=h/cx*Wt;let m=Math.sin(M)*25,f=Math.sin(M*2)*9;if(ft.position.set(m,1.8,f),ft.rotation.y=Math.atan2(Math.cos(M)*25,Math.cos(M*2)*18),Ml[0].rotation.x=Math.sin(h*3)*.2,Ml[1].rotation.x=-Math.sin(h*3)*.2,Lr.rotation.z=Math.sin(h*.6)*.2-.15,ui.rotation.x=Math.sin(h*.9)*.08,lc.position.set(m,4,f+2),ci.position.set(m*.4,32,f*.4+7),ci.intensity=Ct(3800+or*1500,4500,hn)*Ct(1,.65,Mi),dc.update(h,St,Zs,g*(.07+(F.reduced?.03:d*.025)+or*.025),c),Io.visible=F.fog&&hn<.998,ho.uniforms.time.value=h,ho.uniforms.color.value.lerp(Gu,1-Math.exp(-c*1.83)),ho.uniforms.opacity.value=(St===0?.07:St===1?.055:.04)*(1-hn),fo.visible=!F.inspection,fo.position.y=Math.sin(h*.07)*3,fo.rotation.y=h*.006,Er.material.color.lerp(Zs,1-Math.exp(-c*1.21)),!wn)if(nn){if(F.mode==="director"){const E=h*.025;nn.to.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),nn.targetTo.set(ft.position.x*.3,13,ft.position.z*.3)}F.mode==="phone"&&F.follow&&(ft.getWorldPosition(wa),wa.y+=1.2,nn.targetTo.copy(nn.to).add(wa.sub(nn.to).normalize().multiplyScalar(.8))),nn.step(c)&&(nn=null)}else if(F.mode==="director"){let E=h*.025;ct.position.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),Je.target.set(ft.position.x*.3,13,ft.position.z*.3),ct.lookAt(Je.target)}else F.mode==="phone"&&F.follow&&!Ur&&(Qs.copy(ct.position),ft.getWorldPosition(Aa),Aa.y+=1.2,eo.subVectors(Je.target,Qs).normalize(),qu.copy(Aa).sub(Qs).normalize(),Yu.setFromUnitVectors(eo,qu),$u.identity().slerp(Yu,1-Math.exp(-c*9)),eo.applyQuaternion($u),Je.target.copy(Qs).addScaledVector(eo,.8)),Je.update(c);if(uo.step(c),hd.update(c,{active:F.mode==="sky"||F.playing,reduced:F.reduced,low:_d}),It.info.reset(),vd(),wn&&(uo.capture(Un),ct.position.copy(wn.to),Je.target.copy(wn.targetTo),ct.lookAt(Je.target),ct.updateMatrixWorld(),wn=null,Je.enabled=F.mode!=="director",dn.reset(F.mode==="phone"?Oo():F.mode==="sky"?76:F.mode==="seat"?60:44),ct.fov=dn.value,ct.updateProjectionMatrix()),Ta||(Ta=!0,q("#loading").classList.add("done"),setTimeout(()=>q("#loading").hidden=!0,800),document.documentElement.dataset.sceneReady="true",window.__beastBoot?.ready()),!t&&n-Wu>700&&(ki(),Wu=n),!t&&sr>3){const E=wx.sample(ar,{now:n,level:fn,automatic:F.quality==="auto",settling:!!nn||dn.active||s||n<xo}),T=E.summary;document.documentElement.dataset.fps=String(Math.round(T.fps)),document.documentElement.dataset.frameP95=T.p95.toFixed(1),document.documentElement.dataset.frameWorst=T.max.toFixed(1),document.documentElement.dataset.renderCalls=String(It.info.render.calls),q("#quality").title=`最近动态画面约${Math.round(T.fps)}帧/秒，95%的帧间隔不超过${Math.round(T.p95)}毫秒。设备发热时可切回自动或流畅画质。`,E.level!==fn&&(So(E.level),vt("已降低渲染负担，优先保持操作流畅")),ar.length=0,sr=0}}function vd(){Xn?It.render(xt,ct):Ui.render()}function xd(n){try{Ax(n)}catch(e){window.__beastBoot?.fail("三维画面未能正常运行，请尝试兼容模式。","graphics"),console.error(e);return}requestAnimationFrame(xd)}window.__beastBoot?.phase("准备三维首帧");Al=performance.now();let ju=!1;function Md(n){ju||(ju=!0,xd(n))}requestAnimationFrame(Md);setTimeout(()=>Md(performance.now()),250);document.addEventListener("visibilitychange",()=>Ln.setVisibility(document.hidden));window.addEventListener("pagehide",()=>Ln.setVisibility(!0));window.addEventListener("pageshow",()=>Ln.setVisibility(document.hidden));const Ca=Object.values([Cd])[0];if(Ca){const n=q("#support-open"),e=q("#support-dialog"),t=q("#support-intro"),i=q("#support-gift"),r=q("#support-reveal"),s=q("#support-back"),o=a=>{t.hidden=a,i.hidden=!a,r.setAttribute("aria-expanded",String(a)),e.scrollTop=0};q("#support-save").href=Ca,n.hidden=!1,n.onclick=()=>{o(!1),e.showModal()},r.onclick=()=>{q("#support-code").src=Ca,o(!0),s.focus({preventScroll:!0})},s.onclick=()=>{o(!1),r.focus({preventScroll:!0})},q("#support-close").onclick=()=>e.close(),e.addEventListener("close",()=>{o(!1)}),e.addEventListener("click",a=>{if(a.target===e){const l=e.getBoundingClientRect();(a.clientX<l.left||a.clientX>l.right||a.clientY<l.top||a.clientY>l.bottom)&&e.close()}})}let Ri=0;const mc=document.querySelector("#author-viewer");document.querySelector("#author-grid").innerHTML=$r.map((n,e)=>`<button class="author-photo" data-author-photo="${e}" aria-label="查看${n.title}"><img src="${n.thumb}" alt="${n.title}" width="${n.width}" height="${n.height}" loading="lazy" decoding="async"><span>${n.title}<small>${n.caption}</small></span></button>`).join("");const po=q("#author-view-stage"),Vn=q("#author-view-image"),Pi=q("#author-zoom");function bd(){if(Pi.disabled)return;const n=po.classList.toggle("zoomed");Pi.textContent=n?"适应窗口":"放大查看",Pi.setAttribute("aria-pressed",String(n))}Pi.onclick=bd;Vn.onclick=bd;Vn.onload=()=>{Vn.classList.remove("is-loading"),q("#author-image-status").textContent=""};Vn.onerror=()=>{Vn.classList.remove("is-loading"),q("#author-image-status").textContent="照片加载未完成，可以点击查看原图重试。"};function fs(n){Ri=(n+$r.length)%$r.length;const e=$r[Ri];q("#author-view-title").textContent=e.title,q("#author-view-caption").textContent=e.caption,q("#author-image-size").textContent=(e.quality==="screenshot-crop"?"截图局部 · ":"原图 · ")+e.width+" × "+e.height,q("#author-image-status").textContent=e.quality==="screenshot-crop"?"这张来自观演记录截图，适合按原尺寸查看。":"正在加载原图…",Vn.classList.add("is-loading"),Vn.alt=e.title,Vn.src=e.file,Vn.style.setProperty("--photo-width",e.width+"px"),po.classList.remove("zoomed"),po.scrollTop=po.scrollLeft=0,Pi.textContent="放大查看",Pi.setAttribute("aria-pressed","false"),Pi.disabled=e.width<700,q("#author-original").href=e.file,q("#author-download").href=e.file,q("#author-download").download=e.title+"."+e.file.split(".").pop(),q("#author-position").textContent=`${Ri+1} / ${$r.length}`}document.querySelectorAll("[data-author-photo]").forEach(n=>n.onclick=()=>{fs(Number(n.dataset.authorPhoto)),mc.showModal()});document.querySelector("#author-view-close").onclick=()=>mc.close();document.querySelector("#author-prev").onclick=()=>fs(Ri-1);document.querySelector("#author-next").onclick=()=>fs(Ri+1);mc.addEventListener("keydown",n=>{n.key==="ArrowLeft"&&fs(Ri-1),n.key==="ArrowRight"&&fs(Ri+1)});const hr=document.querySelector("#author-note-dialog");for(const n of["author-note-open","author-note-gallery"])document.getElementById(n).onclick=()=>hr.showModal();document.getElementById("author-note-close").onclick=()=>hr.close();hr.addEventListener("click",n=>{if(n.target===hr){const e=hr.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&hr.close()}});
