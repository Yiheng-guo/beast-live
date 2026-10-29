(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Yd=""+new URL("support-wechat-Di4LVwf9.png",import.meta.url).href;const kl="180",vr={ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Nc=1,jd=2,lh=1,ch=2,Xn=3,pi=0,en=1,cn=2,qn=0,Ni=1,Oi=2,Fc=3,Oc=4,Kd=5,Pi=100,Zd=101,Jd=102,Qd=103,ef=104,tf=200,nf=201,rf=202,sf=203,Va=204,Ga=205,of=206,af=207,lf=208,cf=209,uf=210,hf=211,df=212,ff=213,pf=214,Wa=0,Xa=1,qa=2,Mr=3,Ya=4,$a=5,ja=6,Ka=7,uh=0,mf=1,gf=2,ui=0,hh=1,dh=2,fh=3,Hl=4,ph=5,mh=6,gh=7,_h=300,br=301,yr=302,Za=303,Ja=304,No=306,Qa=1e3,Ui=1001,el=1002,un=1003,_f=1004,Ts=1005,Dn=1006,Jo=1007,Ii=1008,Rn=1009,vh=1010,xh=1011,us=1012,Vl=1013,Bi=1014,Un=1015,Nn=1016,Gl=1017,Wl=1018,hs=1020,Mh=35902,bh=35899,yh=1021,Eh=1022,Tn=1023,ds=1026,fs=1027,Xl=1028,ql=1029,Sh=1030,Yl=1031,$l=1033,fo=33776,po=33777,mo=33778,go=33779,tl=35840,nl=35841,il=35842,rl=35843,sl=36196,ol=37492,al=37496,ll=37808,cl=37809,ul=37810,hl=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Ml=37820,bl=37821,yl=36492,El=36494,Sl=36495,wl=36283,Tl=36284,Al=36285,Rl=36286,vf=3200,xf=3201,wh=0,Mf=1,ci="",Jt="srgb",Er="srgb-linear",wo="linear",et="srgb",Yi=7680,Bc=519,bf=512,yf=513,Ef=514,Th=515,Sf=516,wf=517,Tf=518,Af=519,Cl=35044,Rf=35048,zc="300 es",In=2e3,To=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const is=Math.PI/180,Sr=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function jl(n,e){return(n%e+e)%e}function Cf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pf(n,e,t){return n!==e?(t-n)/(e-n):0}function rs(n,e,t){return(1-t)*n+t*e}function Lf(n,e,t,i){return rs(n,e,1-Math.exp(-t*i))}function Df(n,e=1){return e-Math.abs(jl(n,e*2)-e)}function Uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function If(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ff(n,e){return n+Math.random()*(e-n)}function Of(n){return n*(.5-Math.random())}function Bf(n){n!==void 0&&(kc=n);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zf(n){return n*is}function kf(n){return n*Sr}function Hf(n){return(n&n-1)===0&&n!==0}function Vf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*p,o*c);break;case"YZY":n.set(l*p,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*p,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fi={DEG2RAD:is,RAD2DEG:Sr,generateUUID:Ur,clamp:We,euclideanModulo:jl,mapLinear:Cf,inverseLerp:Pf,lerp:rs,damp:Lf,pingpong:Df,smoothstep:Uf,smootherstep:If,randInt:Nf,randFloat:Ff,randFloatSpread:Of,seededRandom:Bf,degToRad:zf,radToDeg:kf,isPowerOfTwo:Hf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Gf,setQuaternionFromProperEuler:Wf,normalize:Vt,denormalize:fr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const p=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==p||c!==d||u!==g){let m=1-o;const f=l*p+c*d+u*g+h*v,A=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const y=Math.sqrt(E),T=Math.atan2(y,f*A);m=Math.sin(m*T)/y,o=Math.sin(o*T)/y}const x=o*A;if(l=l*m+p*x,c=c*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],p=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-o*d,e[t+2]=c*g+u*d+o*p-l*h,e[t+3]=u*g-o*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),p=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+o+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new U,Hc=new hn;class Ge{constructor(e,t,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],v=r[0],m=r[3],f=r[6],A=r[1],E=r[4],x=r[7],y=r[2],T=r[5],L=r[8];return s[0]=a*v+o*A+l*y,s[3]=a*m+o*E+l*T,s[6]=a*f+o*x+l*L,s[1]=c*v+u*A+h*y,s[4]=c*m+u*E+h*T,s[7]=c*f+u*x+h*L,s[2]=p*v+d*A+g*y,s[5]=p*m+d*E+g*T,s[8]=p*f+d*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,p=o*l-u*s,d=c*s-a*l,g=t*h+i*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=p*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ge;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xf(){const n=ps("canvas");return n.style.display="block",n}const Vc={};function ms(n){n in Vc||(Vc[n]=!0,console.warn(n))}function qf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Gc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yf(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?wo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const je=Yf();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class $f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ps("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$f.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;const na=new U;class Ot extends Hi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Ui,r=Ui,s=Dn,a=Ii,o=Tn,l=Rn,c=Ot.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ur(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=_h;Ot.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(d+1)/2,y=(f+1)/2,T=(u+p)/4,L=(h+v)/4,F=(g+m)/4;return E>x&&E>y?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=L/i):x>y?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=F/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=L/s,r=F/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(p-u)/A,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Zf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jf extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Rs.subVectors(this.max,Xr),ji.subVectors(e.a,Xr),Ki.subVectors(e.b,Xr),Zi.subVectors(e.c,Xr),ei.subVectors(Ki,ji),ti.subVectors(Zi,Ki),yi.subVectors(ji,Zi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-yi.z,yi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!ia(t,ji,Ki,Zi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,ji,Ki,Zi,Rs))?!1:(Cs.crossVectors(ei,ti),t=[Cs.x,Cs.y,Cs.z],ia(t,ji,Ki,Zi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,As=new Vi,ji=new U,Ki=new U,Zi=new U,ei=new U,ti=new U,yi=new U,Xr=new U,Rs=new U,Cs=new U,Ei=new U;function ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ei.fromArray(n,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qf=new Vi,qr=new U,ra=new U;class Ir{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(ra)),this.expandByPoint(qr.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new U,sa=new U,Ps=new U,ni=new U,oa=new U,Ls=new U,aa=new U;class Zl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sa.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=ni.dot(this.direction),l=-ni.dot(Ps),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,p,d,g;if(u>0)if(h=a*l-o,p=a*o-l,g=s*u,h>=0)if(p>=-g)if(p<=g){const v=1/u;h*=v,p*=v,d=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(sa).addScaledVector(Ps,p),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,s){oa.subVectors(t,e),Ls.subVectors(i,e),aa.crossVectors(oa,Ls);let a=this.direction.dot(aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(Ls.crossVectors(ni,Ls));if(l<0)return null;const c=o*this.direction.dot(oa.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(aa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,s,a,o,l,c,u,h,p,d,g,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,p,d,g,v,m)}set(e,t,i,r,s,a,o,l,c,u,h,p,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+v,t[1]=l*h,t[5]=v*c+p,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-p*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-v*h}else if(e.order==="XZY"){const p=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(i,rn),ii.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(i,rn)),ii.normalize(),Ds.crossVectors(rn,ii),r[0]=ii.x,r[4]=Ds.x,r[8]=rn.x,r[1]=ii.y,r[5]=Ds.y,r[9]=rn.y,r[2]=ii.z,r[6]=Ds.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],A=i[3],E=i[7],x=i[11],y=i[15],T=r[0],L=r[4],F=r[8],b=r[12],_=r[1],C=r[5],D=r[9],N=r[13],k=r[2],G=r[6],V=r[10],z=r[14],R=r[3],S=r[7],B=r[11],Q=r[15];return s[0]=a*T+o*_+l*k+c*R,s[4]=a*L+o*C+l*G+c*S,s[8]=a*F+o*D+l*V+c*B,s[12]=a*b+o*N+l*z+c*Q,s[1]=u*T+h*_+p*k+d*R,s[5]=u*L+h*C+p*G+d*S,s[9]=u*F+h*D+p*V+d*B,s[13]=u*b+h*N+p*z+d*Q,s[2]=g*T+v*_+m*k+f*R,s[6]=g*L+v*C+m*G+f*S,s[10]=g*F+v*D+m*V+f*B,s[14]=g*b+v*N+m*z+f*Q,s[3]=A*T+E*_+x*k+y*R,s[7]=A*L+E*C+x*G+y*S,s[11]=A*F+E*D+x*V+y*B,s[15]=A*b+E*N+x*z+y*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*p+i*c*p+r*o*d-i*l*d)+v*(+t*l*d-t*c*p+s*a*p-r*a*d+r*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+i*a*d+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*p+r*a*h-i*a*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],A=h*m*c-v*p*c+v*l*d-o*m*d-h*l*f+o*p*f,E=g*p*c-u*m*c-g*l*d+a*m*d+u*l*f-a*p*f,x=u*v*c-g*h*c+g*o*d-a*v*d-u*o*f+a*h*f,y=g*h*l-u*v*l-g*o*p+a*v*p+u*o*m-a*h*m,T=t*A+i*E+r*x+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=A*L,e[1]=(v*p*s-h*m*s-v*r*d+i*m*d+h*r*f-i*p*f)*L,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*f+i*l*f)*L,e[3]=(h*l*s-o*p*s-h*r*c+i*p*c+o*r*d-i*l*d)*L,e[4]=E*L,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*L,e[7]=(a*p*s-u*l*s+u*r*c-t*p*c-a*r*d+t*l*d)*L,e[8]=x*L,e[9]=(g*h*s-u*v*s-g*i*d+t*v*d+u*i*f-t*h*f)*L,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*f+t*o*f)*L,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*d-t*o*d)*L,e[12]=y*L,e[13]=(u*v*r-g*h*r+g*i*p-t*v*p-u*i*m+t*h*m)*L,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*L,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*p+t*o*p)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,p=s*c,d=s*u,g=s*h,v=a*u,m=a*h,f=o*h,A=l*c,E=l*u,x=l*h,y=i.x,T=i.y,L=i.z;return r[0]=(1-(v+f))*y,r[1]=(d+x)*y,r[2]=(g-E)*y,r[3]=0,r[4]=(d-x)*T,r[5]=(1-(p+f))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(g+E)*L,r[9]=(m-A)*L,r[10]=(1-(p+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/a,h=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=In,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===In)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===To)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=In,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),p=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===In)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===To)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new U,bn=new Qe,ep=new U(0,0,0),tp=new U(1,1,1),ii=new U,Ds=new U,rn=new U,Xc=new Qe,qc=new hn;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const Yc=new U,Qi=new hn,Vn=new Qe,Us=new U,Yr=new U,ip=new U,rp=new hn,$c=new U(1,0,0),jc=new U(0,1,0),Kc=new U(0,0,1),Zc={type:"added"},sp={type:"removed"},er={type:"childadded",child:null},la={type:"childremoved",child:null};class St extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new U,t=new Fn,i=new hn,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ge}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Us.copy(e):Us.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Yr,Us,this.up):Vn.lookAt(Us,Yr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new U(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new U,Gn=new U,ca=new U,Wn=new U,tr=new U,nr=new U,Jc=new U,ua=new U,ha=new U,da=new U,fa=new rt,pa=new rt,ma=new rt;class wn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Gn.subVectors(i,t),ca.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Gn),l=yn.dot(ca),c=Gn.dot(Gn),u=Gn.dot(ca),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,d=(c*l-o*u)*p,g=(a*u-o*l)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,i),ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fa,s.x),a.addScaledVector(pa,s.y),a.addScaledVector(ma,s.z),a}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Gn.subVectors(e,t),yn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),ua.subVectors(e,i);const l=tr.dot(ua),c=nr.dot(ua);if(l<=0&&c<=0)return t.copy(i);ha.subVectors(e,r);const u=tr.dot(ha),h=nr.dot(ha);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(tr,a);da.subVectors(e,s);const d=tr.dot(da),g=nr.dot(da);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(nr,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Jc.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Jc,o);const f=1/(m+v+p);return a=v*f,o=p*f,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Is={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=jl(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ga(a,s,e+1/3),this.g=ga(a,s,e),this.b=ga(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return je.workingToColorSpace(zt.copy(this),e),Math.round(We(zt.r*255,0,255))*65536+Math.round(We(zt.g*255,0,255))*256+Math.round(We(zt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Jt){je.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Is);const i=rs(ri.h,Is.h,t),r=rs(ri.s,Is.s,t),s=rs(ri.l,Is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Fe;Fe.NAMES=Ph;let op=0;class Nr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ni,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fr extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,Ns=new ue;let ap=0;class mt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class Lh extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dh extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lp=0;const pn=new Qe,_a=new St,ir=new U,sn=new Vi,$r=new Vi,Nt=new U;class wt extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Dh:Lh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(sn.min,$r.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,$r.max),sn.expandByPoint(Nt)):(sn.expandByPoint($r.min),sn.expandByPoint($r.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(e,c),Nt.add(ir)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new U,l[F]=new U;const c=new U,u=new U,h=new U,p=new ue,d=new ue,g=new ue,v=new U,m=new U;function f(F,b,_){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,_),p.fromBufferAttribute(s,F),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,_),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[F].add(v),o[b].add(v),o[_].add(v),l[F].add(m),l[b].add(m),l[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,b=A.length;F<b;++F){const _=A[F],C=_.start,D=_.count;for(let N=C,k=C+D;N<k;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new U,x=new U,y=new U,T=new U;function L(F){y.fromBufferAttribute(r,F),T.copy(y);const b=o[F];E.copy(b),E.sub(y.multiplyScalar(y.dot(b))).normalize(),x.crossVectors(T,b);const C=x.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,C)}for(let F=0,b=A.length;F<b;++F){const _=A[F],C=_.start,D=_.count;for(let N=C,k=C+D;N<k;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new mt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=e(p,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new Qe,Si=new Zl,Fs=new Ir,eu=new U,Os=new U,Bs=new U,zs=new U,va=new U,ks=new U,tu=new U,Hs=new U;class pt extends St{constructor(e=new wt,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(va.fromBufferAttribute(h,e),a?ks.addScaledVector(va,u):ks.addScaledVector(va.sub(t),u))}t.add(ks)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(Fs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Fs,eu)===null||Si.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qc.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Qc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=a[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,y=E;x<y;x+=3){const T=o.getX(x),L=o.getX(x+1),F=o.getX(x+2);r=Vs(this,f,e,i,c,u,h,T,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const A=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);r=Vs(this,a,e,i,c,u,h,A,E,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=a[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,y=E;x<y;x+=3){const T=x,L=x+1,F=x+2;r=Vs(this,f,e,i,c,u,h,T,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const A=m,E=m+1,x=m+2;r=Vs(this,a,e,i,c,u,h,A,E,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cp(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pi,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:n}}function Vs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Os),n.getVertexPosition(l,Bs),n.getVertexPosition(c,zs);const u=cp(n,e,t,i,Os,Bs,zs,tu);if(u){const h=new U;wn.getBarycoord(tu,Os,Bs,zs,h),r&&(u.uv=wn.getInterpolatedAttribute(r,o,l,c,h,new ue)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,l,c,h,new ue)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new U,materialIndex:0};wn.getNormal(Os,Bs,zs,p.normal),u.face=p,u.barycoord=h}return u}class On extends wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(v,m,f,A,E,x,y,T,L,F,b){const _=x/L,C=y/F,D=x/2,N=y/2,k=T/2,G=L+1,V=F+1;let z=0,R=0;const S=new U;for(let B=0;B<V;B++){const Q=B*C-N;for(let te=0;te<G;te++){const se=te*_-D;S[v]=se*A,S[m]=Q*E,S[f]=k,c.push(S.x,S.y,S.z),S[v]=0,S[m]=0,S[f]=T>0?1:-1,u.push(S.x,S.y,S.z),h.push(te/L),h.push(1-B/F),z+=1}}for(let B=0;B<F;B++)for(let Q=0;Q<L;Q++){const te=p+Q+G*B,se=p+Q+G*(B+1),Ue=p+(Q+1)+G*(B+1),Ie=p+(Q+1)+G*B;l.push(te,se,Ie),l.push(se,Ue,Ie),R+=6}o.addGroup(d,R,b),d+=R,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const r in i)e[r]=i[r]}return e}function up(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const gs={clone:wr,merge:Gt};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new U,nu=new ue,iu=new ue;class Qt extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class fp extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Qt(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new Qt(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new Qt(rr,sr,e,t);o.layers=this.layers,this.add(o);const l=new Qt(rr,sr,e,t);l.layers=this.layers,this.add(l);const c=new Qt(rr,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nh extends Ot{constructor(e=[],t=br,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pp extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new On(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:qn});s.uniforms.tEquirect.value=t;const a=new pt(r,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Dn),new fp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Lt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gp extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _p extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,l,c=un,u=un,h,p){super(null,a,o,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends mt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new Qe,su=new Qe,Gs=[],ou=new Vi,vp=new Qe,jr=new pt,Kr=new Ir;class $n extends pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,vp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),ou.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Kr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(i),e.ray.intersectsSphere(Kr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,or),su.multiplyMatrices(i,or),jr.matrixWorld=su,jr.raycast(e,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=s,l.object=this,t.push(l)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _p(new Float32Array(r*this.count),r,this.count,Xl,Un));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new U,xp=new U,Mp=new Ge;class li{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ma.subVectors(i,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mp.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Ir,bp=new ue(.5,.5),Ws=new U;class Ql{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],p=s[6],d=s[7],g=s[8],v=s[9],m=s[10],f=s[11],A=s[12],E=s[13],x=s[14],y=s[15];if(r[0].setComponents(c-a,d-u,f-g,y-A).normalize(),r[1].setComponents(c+a,d+u,f+g,y+A).normalize(),r[2].setComponents(c+o,d+h,f+v,y+E).normalize(),r[3].setComponents(c-o,d-h,f-v,y-E).normalize(),i)r[4].setComponents(l,p,m,x).normalize(),r[5].setComponents(c-l,d-p,f-m,y-x).normalize();else if(r[4].setComponents(c-l,d-p,f-m,y-x).normalize(),t===In)r[5].setComponents(c+l,d+p,f+m,y+x).normalize();else if(t===To)r[5].setComponents(l,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=bp.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new Qe,Pl=new Zl,Xs=new Ir,qs=new U;class Ao extends St{constructor(e=new wt,t=new Fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;au.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(au);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=p,v=d;g<v;g++){const m=c.getX(g);qs.fromBufferAttribute(h,m),lu(qs,m,l,r,e,t,this)}}else{const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=p,v=d;g<v;g++)qs.fromBufferAttribute(h,g),lu(qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lu(n,e,t,i,r,s,a){const o=Pl.distanceSqToPoint(n);if(o<t){const l=new U;Pl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Oh extends Ot{constructor(e,t,i=Bi,r,s,a,o=un,l=un,c,u=ds,h=1){if(u!==ds&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bh extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ec extends wt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,p=t,d=2*h+p,g=i*2+s,v=r+1,m=new U,f=new U;for(let A=0;A<=g;A++){let E=0,x=0,y=0,T=0;if(A<=i){const b=A/i,_=b*Math.PI/2;x=-u-e*Math.cos(_),y=e*Math.sin(_),T=-e*Math.cos(_),E=b*h}else if(A<=i+s){const b=(A-i)/s;x=-u+b*t,y=e,T=0,E=h+b*p}else{const b=(A-i-s)/i,_=b*Math.PI/2;x=u+e*Math.sin(_),y=e*Math.cos(_),T=e*Math.sin(_),E=h+p+b*h}const L=Math.max(0,Math.min(1,E/d));let F=0;A===0?F=.5/r:A===g&&(F=-.5/r);for(let b=0;b<=r;b++){const _=b/r,C=_*Math.PI*2,D=Math.sin(C),N=Math.cos(C);f.x=-y*N,f.y=x,f.z=y*D,o.push(f.x,f.y,f.z),m.set(-y*N,T,y*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(_+F,L)}if(A>0){const b=(A-1)*v;for(let _=0;_<r;_++){const C=b+_,D=b+_+1,N=A*v+_,k=A*v+_+1;a.push(C,D,N),a.push(D,k,N)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bs extends wt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],d=[];let g=0;const v=[],m=i/2;let f=0;A(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(d,2));function A(){const x=new U,y=new U;let T=0;const L=(t-e)/i;for(let F=0;F<=s;F++){const b=[],_=F/s,C=_*(t-e)+e;for(let D=0;D<=r;D++){const N=D/r,k=N*l+o,G=Math.sin(k),V=Math.cos(k);y.x=C*G,y.y=-_*i+m,y.z=C*V,h.push(y.x,y.y,y.z),x.set(G,L,V).normalize(),p.push(x.x,x.y,x.z),d.push(N,1-_),b.push(g++)}v.push(b)}for(let F=0;F<r;F++)for(let b=0;b<s;b++){const _=v[b][F],C=v[b+1][F],D=v[b+1][F+1],N=v[b][F+1];(e>0||b!==0)&&(u.push(_,C,N),T+=3),(t>0||b!==s-1)&&(u.push(C,D,N),T+=3)}c.addGroup(f,T,0),f+=T}function E(x){const y=g,T=new ue,L=new U;let F=0;const b=x===!0?e:t,_=x===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,m*_,0),p.push(0,_,0),d.push(.5,.5),g++;const C=g;for(let D=0;D<=r;D++){const k=D/r*l+o,G=Math.cos(k),V=Math.sin(k);L.x=b*V,L.y=m*_,L.z=b*G,h.push(L.x,L.y,L.z),p.push(0,_,0),T.x=G*.5+.5,T.y=V*.5*_+.5,d.push(T.x,T.y),g++}for(let D=0;D<r;D++){const N=y+D,k=C+D;x===!0?u.push(k,k+1,N):u.push(k+1,k,N),F+=3}c.addGroup(f,F,x===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends bs{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],p=i[r+1]-u,d=(a-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ue:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,r=[],s=[],a=[],o=new U,l=new Qe;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(We(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zh extends Zn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yp extends zh{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let p=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,d*=u,r(a,o,p,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Ys=new U,ba=new tc,ya=new tc,Ea=new tc;class kh extends Zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),c=Ys);const h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ba.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,v,m),ya.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,v,m),Ea.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ya.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Ea.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return i.set(ba.calc(l),ya.calc(l),Ea.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cu(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Ep(n,e){const t=1-n;return t*t*e}function Sp(n,e){return 2*(1-n)*n*e}function wp(n,e){return n*n*e}function ss(n,e,t,i){return Ep(n,e)+Sp(n,t)+wp(n,i)}function Tp(n,e){const t=1-n;return t*t*t*e}function Ap(n,e){const t=1-n;return 3*t*t*n*e}function Rp(n,e){return 3*(1-n)*n*n*e}function Cp(n,e){return n*n*n*e}function os(n,e,t,i,r){return Tp(n,e)+Ap(n,t)+Rp(n,i)+Cp(n,r)}class Pp extends Zn{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lp extends Zn{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y),os(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dp extends Zn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Up extends Zn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ip extends Zn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends Zn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y),ss(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Np extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(cu(o,l.x,c.x,u.x,h.x),cu(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var Fp=Object.freeze({__proto__:null,ArcCurve:yp,CatmullRomCurve3:kh,CubicBezierCurve:Pp,CubicBezierCurve3:Lp,EllipseCurve:zh,LineCurve:Dp,LineCurve3:Up,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:Hh,SplineCurve:Np});class nc extends wt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=We(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new U,p=new ue,d=new U,g=new U,v=new U;let m=0,f=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,f=e[A+1].y-e[A].y,d.x=f*1,d.y=-m,d.z=f*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[A+1].x-e[A].x,f=e[A+1].y-e[A].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let A=0;A<=t;A++){const E=i+A*u*r,x=Math.sin(E),y=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*x,h.y=e[T].y,h.z=e[T].x*y,a.push(h.x,h.y,h.z),p.x=A/t,p.y=T/(e.length-1),o.push(p.x,p.y);const L=l[3*T+0]*x,F=l[3*T+1],b=l[3*T+0]*y;c.push(L,F,b)}}for(let A=0;A<t;A++)for(let E=0;E<e.length-1;E++){const x=E+A*e.length,y=x,T=x+e.length,L=x+e.length+1,F=x+1;s.push(y,T,F),s.push(L,F,T)}this.setIndex(s),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.points,e.segments,e.phiStart,e.phiLength)}}class Or extends wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,p=t/l,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const A=f*p-a;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-A,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const E=A+c*f,x=A+c*(f+1),y=A+1+c*(f+1),T=A+1+c*f;d.push(E,x,T),d.push(x,y,T)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class ys extends wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,p=new U,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const A=[],E=f/i;let x=0;f===0&&a===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const T=y/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(T+x,1-E),A.push(c++)}u.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){const E=u[f][A+1],x=u[f][A],y=u[f+1][A],T=u[f+1][A+1];(f!==0||a>0)&&d.push(E,x,T),(f!==i-1||l<Math.PI)&&d.push(x,y,T)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ic extends wt{constructor(e=new Hh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new ue;let u=new U;const h=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(d,2));function v(){for(let E=0;E<t;E++)m(E);m(s===!1?t:0),A(),f()}function m(E){u=e.getPointAt(E/t,u);const x=a.normals[E],y=a.binormals[E];for(let T=0;T<=r;T++){const L=T/r*Math.PI*2,F=Math.sin(L),b=-Math.cos(L);l.x=b*x.x+F*y.x,l.y=b*x.y+F*y.y,l.z=b*x.z+F*y.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=t;E++)for(let x=1;x<=r;x++){const y=(r+1)*(E-1)+(x-1),T=(r+1)*E+(x-1),L=(r+1)*E+x,F=(r+1)*(E-1)+x;g.push(y,T,F),g.push(T,L,F)}}function A(){for(let E=0;E<=t;E++)for(let x=0;x<=r;x++)c.x=E/t,c.y=x/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ic(new Fp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Op extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vh extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bp extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zp extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class kp{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hp=new kp;class rc{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar=new WeakMap;class Vp extends rc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Sa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ar.get(a);h===void 0&&(h=[],ar.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=ps("img");function l(){u(),t&&t(this);const h=ar.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onLoad&&d.onLoad(this)}ar.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Sa.remove(`image:${e}`);const p=ar.get(this)||[];for(let d=0;d<p.length;d++){const g=p[d];g.onError&&g.onError(h)}ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Gp extends rc{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,a=new Vp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Oo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wp extends Oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new Qe,uu=new U,hu=new U;class sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xp extends sc{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Sr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qp extends Oo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const du=new Qe,Zr=new U,Ta=new U;class Yp extends sc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zr),Ta.copy(i.position),Ta.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ta),i.updateMatrixWorld(),r.makeTranslation(-Zr.x,-Zr.y,-Zr.z),du.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,i.coordinateSystem,i.reversedDepth)}}class Gh extends Oo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oc extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $p extends sc{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jp extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new $p}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kp extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class fu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jp extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function pu(n,e,t,i){const r=Qp(i);switch(t){case yh:return n*e;case Xl:return n*e/r.components*r.byteLength;case ql:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case Yl:return n*e*2/r.components*r.byteLength;case Eh:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case $l:return n*e*4/r.components*r.byteLength;case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case rl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yl:case El:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(n){switch(n){case Rn:case vh:return{byteLength:1,components:1};case us:case xh:case Nn:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case Bi:case Vl:case Un:return{byteLength:4,components:1};case Mh:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function Wh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function em(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,T0=`#define TOON
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
}`,A0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:tm,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:rm,alphatest_fragment:sm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:um,begin_vertex:hm,beginnormal_vertex:dm,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:xm,color_fragment:Mm,color_pars_fragment:bm,color_pars_vertex:ym,color_vertex:Em,common:Sm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Im,envmap_pars_fragment:Nm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Ym,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:zm,fog_fragment:km,fog_pars_fragment:Hm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:$m,lights_toon_pars_fragment:jm,lights_phong_fragment:Km,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:eg,lights_fragment_maps:tg,lights_fragment_end:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:og,map_fragment:ag,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:ug,metalnessmap_fragment:hg,metalnessmap_pars_fragment:dg,morphinstance_vertex:fg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:_g,normal_fragment_begin:vg,normal_fragment_maps:xg,normal_pars_fragment:Mg,normal_pars_vertex:bg,normal_vertex:yg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,opaque_fragment:Rg,packing:Cg,premultiplied_alpha_fragment:Pg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:kg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:qg,tonemapping_pars_fragment:Yg,transmission_fragment:$g,transmission_pars_fragment:jg,uv_pars_fragment:Kg,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:Qg,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:r0,cube_frag:s0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:u0,equirect_frag:h0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:M0,meshnormal_frag:b0,meshphong_vert:y0,meshphong_frag:E0,meshphysical_vert:S0,meshphysical_frag:w0,meshtoon_vert:T0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:D0,sprite_frag:U0},pe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ln={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ln.physical={uniforms:Gt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const $s={r:0,b:0,g:0},Ti=new Fn,I0=new Qe;function N0(n,e,t,i,r,s,a){const o=new Fe(0);let l=s===!0?0:1,c,u,h=null,p=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const y=g(E);y===null?f(o,l):y&&y.isColor&&(f(y,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===No)?(u===void 0&&(u=new pt(new On(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:wr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(Ti)),u.material.toneMapped=je.getTransfer(y.colorSpace)!==et,(h!==y||p!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pt(new Or(2,2),new Rt({name:"BackgroundMaterial",uniforms:wr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB($s,Uh(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,x,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:A}}function F0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(_,C,D,N,k){let G=!1;const V=h(N,D,C);s!==V&&(s=V,c(s.object)),G=d(_,N,D,k),G&&g(_,N,D,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(_,C,D,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,C,D){const N=D.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let V=G[N];return V===void 0&&(V=p(l()),G[N]=V),V}function p(_){const C=[],D=[],N=[];for(let k=0;k<t;k++)C[k]=0,D[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:N,object:_,attributes:{},index:null}}function d(_,C,D,N){const k=s.attributes,G=C.attributes;let V=0;const z=D.getAttributes();for(const R in z)if(z[R].location>=0){const B=k[R];let Q=G[R];if(Q===void 0&&(R==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),R==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(_,C,D,N){const k={},G=C.attributes;let V=0;const z=D.getAttributes();for(const R in z)if(z[R].location>=0){let B=G[R];B===void 0&&(R==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),R==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),k[R]=Q,V++}s.attributes=k,s.attributesNum=V,s.index=N}function v(){const _=s.newAttributes;for(let C=0,D=_.length;C<D;C++)_[C]=0}function m(_){f(_,0)}function f(_,C){const D=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;D[_]=1,N[_]===0&&(n.enableVertexAttribArray(_),N[_]=1),k[_]!==C&&(n.vertexAttribDivisor(_,C),k[_]=C)}function A(){const _=s.newAttributes,C=s.enabledAttributes;for(let D=0,N=C.length;D<N;D++)C[D]!==_[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function E(_,C,D,N,k,G,V){V===!0?n.vertexAttribIPointer(_,C,D,k,G):n.vertexAttribPointer(_,C,D,N,k,G)}function x(_,C,D,N){v();const k=N.attributes,G=D.getAttributes(),V=C.defaultAttributeValues;for(const z in G){const R=G[z];if(R.location>=0){let S=k[z];if(S===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(S=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(S=_.instanceColor)),S!==void 0){const B=S.normalized,Q=S.itemSize,te=e.get(S);if(te===void 0)continue;const se=te.buffer,Ue=te.type,Ie=te.bytesPerElement,K=Ue===n.INT||Ue===n.UNSIGNED_INT||S.gpuType===Vl;if(S.isInterleavedBufferAttribute){const ne=S.data,de=ne.stride,Ce=S.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<R.locationSize;ge++)f(R.location+ge,ne.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<R.locationSize;ge++)m(R.location+ge);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ge=0;ge<R.locationSize;ge++)E(R.location+ge,Q/R.locationSize,Ue,B,de*Ie,(Ce+Q/R.locationSize*ge)*Ie,K)}else{if(S.isInstancedBufferAttribute){for(let ne=0;ne<R.locationSize;ne++)f(R.location+ne,S.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=S.meshPerAttribute*S.count)}else for(let ne=0;ne<R.locationSize;ne++)m(R.location+ne);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ne=0;ne<R.locationSize;ne++)E(R.location+ne,Q/R.locationSize,Ue,B,Q*Ie,Q/R.locationSize*ne*Ie,K)}}else if(V!==void 0){const B=V[z];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(R.location,B);break;case 3:n.vertexAttrib3fv(R.location,B);break;case 4:n.vertexAttrib4fv(R.location,B);break;default:n.vertexAttrib1fv(R.location,B)}}}}A()}function y(){F();for(const _ in i){const C=i[_];for(const D in C){const N=C[D];for(const k in N)u(N[k].object),delete N[k];delete C[D]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const C=i[_.id];for(const D in C){const N=C[D];for(const k in N)u(N[k].object),delete N[k];delete C[D]}delete i[_.id]}function L(_){for(const C in i){const D=i[C];if(D[_.id]===void 0)continue;const N=D[_.id];for(const k in N)u(N[k].object),delete N[k];delete D[_.id]}}function F(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function O0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function B0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Tn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const F=L===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Rn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Un&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:y,maxSamples:T}}function z0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,E=A*4;let x=f.clippingState||null;l.value=x,x=u(g,p,E,d);for(let y=0;y!==E;++y)x[y]=t[y];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=d+v*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=d;E!==v;++E,x+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function k0(n){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=br:o===Ja&&(a.mapping=yr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pp(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const gr=4,mu=[.125,.215,.35,.446,.526,.582],Li=20,Aa=new oc,gu=new Fe;let Ra=null,Ca=0,Pa=0,La=!1;const Ci=(1+Math.sqrt(5))/2,lr=1/Ci,_u=[new U(-Ci,lr,0),new U(Ci,lr,0),new U(-lr,0,Ci),new U(lr,0,Ci),new U(0,Ci,-lr),new U(0,Ci,lr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],H0=new U;class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=H0}=s;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Nn,format:Tn,colorSpace:Er,depthBuffer:!1},r=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(s)),this._blurMaterial=G0(s,e,t)}return r}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,r,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(gu),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new Fr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new pt(new On,v);let f=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,f=!0):(v.color.copy(gu),f=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const y=this._cubeSize;js(r,x*y,E>2?y:0,y,y),h.setRenderTarget(r),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_u[(r-s-1)%_u.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Li-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const f=[];let A=0;for(let L=0;L<Li;++L){const F=L/v,b=Math.exp(-F*F/2);f.push(b),L===0?A+=b:L<m&&(A+=2*b)}for(let L=0;L<f.length;L++)f[L]=f[L]/A;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-i;const x=this._sizeLods[r],y=3*x*(r>E-gr?r-E+gr:0),T=4*(this._cubeSize-x);js(t,y,T,3*x,2*x),l.setRenderTarget(t),l.render(h,Aa)}}function V0(n){const e=[],t=[],i=[];let r=n;const s=n-gr+1+mu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-gr?l=mu[a-n+gr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,f=1,A=new Float32Array(v*g*d),E=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let T=0;T<d;T++){const L=T%3*2/3-1,F=T>2?0:-1,b=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];A.set(b,v*g*T),E.set(p,m*g*T);const _=[T,T,T,T,T,T];x.set(_,f*g*T)}const y=new wt;y.setAttribute("position",new mt(A,v)),y.setAttribute("uv",new mt(E,m)),y.setAttribute("faceIndex",new mt(x,f)),e.push(y),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xu(n,e,t){const i=new vn(n,e,t);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function G0(n,e,t){const i=new Float32Array(Li),r=new U(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Mu(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function bu(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function W0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,u=l===br||l===yr;if(c||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new vu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new vu(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function X0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ms("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function q0(n,e,t,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const d in p)e.update(p[d],n.ARRAY_BUFFER)}function c(h){const p=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let E=0,x=A.length;E<x;E+=3){const y=A[E+0],T=A[E+1],L=A[E+2];p.push(y,T,T,L,L,y)}}else if(g!==void 0){const A=g.array;v=g.version;for(let E=0,x=A.length/3-1;E<x;E+=3){const y=E+0,T=E+1,L=E+2;p.push(y,T,T,L,L,y)}}else return;const m=new(Ah(p)?Dh:Lh)(p,1);m.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Y0(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,s,p*a),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,p*a,g),t.update(d,i,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function h(p,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,p,0,v,0,g);let f=0;for(let A=0;A<g;A++)f+=d[A]*v[A];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j0(n,e,t){const i=new WeakMap,r=new rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let b=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=o.attributes.position.count*E,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*y*4*h),L=new Rh(T,x,y,h);L.type=Un,L.needsUpdate=!0;const F=E*4;for(let _=0;_<h;_++){const C=m[_],D=f[_],N=A[_],k=x*y*4*_;for(let G=0;G<C.count;G++){const V=G*F;d===!0&&(r.fromBufferAttribute(C,G),T[k+V+0]=r.x,T[k+V+1]=r.y,T[k+V+2]=r.z,T[k+V+3]=0),g===!0&&(r.fromBufferAttribute(D,G),T[k+V+4]=r.x,T[k+V+5]=r.y,T[k+V+6]=r.z,T[k+V+7]=0),v===!0&&(r.fromBufferAttribute(N,G),T[k+V+8]=r.x,T[k+V+9]=r.y,T[k+V+10]=r.z,T[k+V+11]=N.itemSize===4?r.w:1)}}p={count:h,texture:L,size:new ue(x,y)},i.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function K0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Xh=new Ot,yu=new Oh(1,1),qh=new Rh,Yh=new Jf,$h=new Nh,Eu=[],Su=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bo(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function t_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),It(t,i)}}function n_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),It(t,i)}}function i_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),It(t,i)}}function r_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function d_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=Th,s=yu):s=Xh,t.setTexture2D(e||s,r)}function f_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yh,r)}function p_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$h,r)}function m_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qh,r)}function g_(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(n,e){n.uniform1fv(this.addr,e)}function v_(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function x_(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function M_(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function b_(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function y_(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E_(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S_(n,e){n.uniform1iv(this.addr,e)}function w_(n,e){n.uniform2iv(this.addr,e)}function T_(n,e){n.uniform3iv(this.addr,e)}function A_(n,e){n.uniform4iv(this.addr,e)}function R_(n,e){n.uniform1uiv(this.addr,e)}function C_(n,e){n.uniform2uiv(this.addr,e)}function P_(n,e){n.uniform3uiv(this.addr,e)}function L_(n,e){n.uniform4uiv(this.addr,e)}function D_(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xh,s[a])}function U_(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yh,s[a])}function I_(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$h,s[a])}function N_(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qh,s[a])}function F_(n){switch(n){case 5126:return __;case 35664:return v_;case 35665:return x_;case 35666:return M_;case 35674:return b_;case 35675:return y_;case 35676:return E_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return N_}}class O_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}}class B_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}}class z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Ru(n,e){n.seq.push(e),n.map[e.id]=e}function k_(n,e,t){const i=n.name,r=i.length;for(Da.lastIndex=0;;){const s=Da.exec(i),a=Da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ru(t,c===void 0?new O_(o,n,e):new B_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new z_(o),Ru(t,h)),t=h}}}class _o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);k_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const H_=37297;let V_=0;function G_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pu=new Ge;function W_(n){je._getMatrix(Pu,je.workingColorSpace,n);const e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+G_(n.getShaderSource(e),o)}else return s}function X_(n,e){const t=W_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q_(n,e){let t;switch(e){case hh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="Cineon";break;case Hl:t="ACESFilmic";break;case mh:t="AgX";break;case gh:t="Neutral";break;case ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ks=new U;function Y_(){je.getLuminanceCoefficients(Ks);const n=Ks.x.toFixed(4),e=Ks.y.toFixed(4),t=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function j_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ns(n){return n!==""}function Du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(Z_,Q_)}const J_=new Map;function Q_(n,e){let t=qe[e];if(t===void 0){const i=J_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(n){return n.replace(ev,tv)}function tv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function nv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case yr:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===yr&&(e="ENVMAP_MODE_REFRACTION"),e}function sv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case mf:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function ov(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function av(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nv(t),c=iv(t),u=rv(t),h=sv(t),p=ov(t),d=$_(t),g=j_(s),v=r.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?qe.tonemapping_pars_fragment:"",t.toneMapping!==ui?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),Y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=Ll(a),a=Du(a,t),a=Uu(a,t),o=Ll(o),o=Du(o,t),o=Uu(o,t),a=Iu(a),o=Iu(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=A+m+a,x=A+f+o,y=Cu(r,r.VERTEX_SHADER,E),T=Cu(r,r.FRAGMENT_SHADER,x);r.attachShader(v,y),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(C){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",N=r.getShaderInfoLog(y)||"",k=r.getShaderInfoLog(T)||"",G=D.trim(),V=N.trim(),z=k.trim();let R=!0,S=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,y,T);else{const B=Lu(r,y,"vertex"),Q=Lu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+B+`
`+Q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||z==="")&&(S=!1);S&&(C.diagnostics={runnable:R,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:f}})}r.deleteShader(y),r.deleteShader(T),F=new _o(r,v),b=K_(r,v)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,H_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=T,this}let lv=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uv(e),t.set(e,i)),i}}class uv{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}}function hv(n,e,t,i,r,s,a){const o=new Ch,l=new cv,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,C,D,N){const k=D.fog,G=N.geometry,V=b.isMeshStandardMaterial?D.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),R=z&&z.mapping===No?z.image.height:null,S=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const B=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=B!==void 0?B.length:0;let te=0;G.morphAttributes.position!==void 0&&(te=1),G.morphAttributes.normal!==void 0&&(te=2),G.morphAttributes.color!==void 0&&(te=3);let se,Ue,Ie,K;if(S){const Je=Ln[S];se=Je.vertexShader,Ue=Je.fragmentShader}else se=b.vertexShader,Ue=b.fragmentShader,l.update(b),Ie=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);const ne=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,Xe=!!b.map,Tt=!!b.matcap,O=!!z,st=!!b.aoMap,xe=!!b.lightMap,Le=!!b.bumpMap,we=!!b.normalMap,ot=!!b.displacementMap,ye=!!b.emissiveMap,Oe=!!b.metalnessMap,Mt=!!b.roughnessMap,ut=b.anisotropy>0,P=b.clearcoat>0,M=b.dispersion>0,j=b.iridescence>0,I=b.sheen>0,X=b.transmission>0,W=ut&&!!b.anisotropyMap,fe=P&&!!b.clearcoatMap,re=P&&!!b.clearcoatNormalMap,Ee=P&&!!b.clearcoatRoughnessMap,Re=j&&!!b.iridescenceMap,le=j&&!!b.iridescenceThicknessMap,ve=I&&!!b.sheenColorMap,ze=I&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,me=!!b.specularColorMap,Ve=!!b.specularIntensityMap,H=X&&!!b.transmissionMap,ce=X&&!!b.thicknessMap,he=!!b.gradientMap,be=!!b.alphaMap,oe=b.alphaTest>0,ie=!!b.alphaHash,Ae=!!b.extensions;let He=ui;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(He=n.toneMapping);const ht={shaderID:S,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:Ue,defines:b.defines,customVertexShaderID:Ie,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Er,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:Tt,envMap:O,envMapMode:O&&z.mapping,envMapCubeUVHeight:R,aoMap:st,lightMap:xe,bumpMap:Le,normalMap:we,displacementMap:p&&ot,emissiveMap:ye,normalMapObjectSpace:we&&b.normalMapType===Mf,normalMapTangentSpace:we&&b.normalMapType===wh,metalnessMap:Oe,roughnessMap:Mt,anisotropy:ut,anisotropyMap:W,clearcoat:P,clearcoatMap:fe,clearcoatNormalMap:re,clearcoatRoughnessMap:Ee,dispersion:M,iridescence:j,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:I,sheenColorMap:ve,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:me,specularIntensityMap:Ve,transmission:X,transmissionMap:H,thicknessMap:ce,gradientMap:he,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:oe,alphaHash:ie,combine:b.combine,mapUv:Xe&&v(b.map.channel),aoMapUv:st&&v(b.aoMap.channel),lightMapUv:xe&&v(b.lightMap.channel),bumpMapUv:Le&&v(b.bumpMap.channel),normalMapUv:we&&v(b.normalMap.channel),displacementMapUv:ot&&v(b.displacementMap.channel),emissiveMapUv:ye&&v(b.emissiveMap.channel),metalnessMapUv:Oe&&v(b.metalnessMap.channel),roughnessMapUv:Mt&&v(b.roughnessMap.channel),anisotropyMapUv:W&&v(b.anisotropyMap.channel),clearcoatMapUv:fe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:me&&v(b.specularColorMap.channel),specularIntensityMapUv:Ve&&v(b.specularIntensityMap.channel),transmissionMapUv:H&&v(b.transmissionMap.channel),thicknessMapUv:ce&&v(b.thicknessMap.channel),alphaMapUv:be&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(we||ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Xe||be),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function f(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(A(_,b),E(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function A(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function E(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const _=g[b.type];let C;if(_){const D=Ln[_];C=gs.clone(D.uniforms)}else C=b.uniforms;return C}function y(b,_){let C;for(let D=0,N=u.length;D<N;D++){const k=u[D];if(k.cacheKey===_){C=k,++C.usedTimes;break}}return C===void 0&&(C=new av(n,_,b,s),u.push(C)),C}function T(b){if(--b.usedTimes===0){const _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:y,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:F}}function dv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ou(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,p,d,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,p,d,g,v,m){const f=a(h,p,d,g,v,m);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,v,m){const f=a(h,p,d,g,v,m);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||fv),i.length>1&&i.sort(p||Fu),r.length>1&&r.sort(p||Fu)}function u(){for(let h=e,p=n.length;h<p;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function pv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ou,n.set(i,[a])):r>=s.length?(a=new Ou,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function mv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function gv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _v=0;function vv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xv(n){const e=new mv,t=gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Qe,a=new Qe;function o(c){let u=0,h=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,A=0,E=0,x=0,y=0,T=0,L=0;c.sort(vv);for(let b=0,_=c.length;b<_;b++){const C=c[b],D=C.color,N=C.intensity,k=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*N,h+=D.g*N,p+=D.b*N;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],N);L++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,R=t.get(C);R.shadowIntensity=z.intensity,R.shadowBias=z.bias,R.shadowNormalBias=z.normalBias,R.shadowRadius=z.radius,R.shadowMapSize=z.mapSize,i.directionalShadow[d]=R,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=C.shadow.matrix,A++}i.directional[d]=V,d++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;const z=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,z.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=z.matrix,C.castShadow){const R=t.get(C);R.shadowIntensity=z.intensity,R.shadowBias=z.bias,R.shadowNormalBias=z.normalBias,R.shadowRadius=z.radius,R.shadowMapSize=z.mapSize,i.spotShadow[v]=R,i.spotShadowMap[v]=G,x++}v++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(D).multiplyScalar(N),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const z=C.shadow,R=t.get(C);R.shadowIntensity=z.intensity,R.shadowBias=z.bias,R.shadowNormalBias=z.normalBias,R.shadowRadius=z.radius,R.shadowMapSize=z.mapSize,R.shadowCameraNear=z.camera.near,R.shadowCameraFar=z.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(N),V.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==A||F.numPointShadows!==E||F.numSpotShadows!==x||F.numSpotMaps!==y||F.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,F.directionalLength=d,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=A,F.numPointShadows=E,F.numSpotShadows=x,F.numSpotMaps=y,F.numLightProbes=L,i.version=_v++)}function l(c,u){let h=0,p=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const E=c[f];if(E.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Bu(n){const e=new xv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Mv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bu(n),e.set(r,[o])):s>=a.length?(o=new Bu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;function Ev(n,e,t){let i=new Ql;const r=new ue,s=new ue,a=new rt,o=new Bp({depthPacking:xf}),l=new zp,c={},u=t.maxTextureSize,h={[pi]:en,[en]:pi,[cn]:cn},p=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:bv,fragmentShader:yv}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let f=this.type;this.render=function(T,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=f!==Xn&&this.type===Xn,k=f===Xn&&this.type!==Xn;for(let G=0,V=T.length;G<V;G++){const z=T[G],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const S=R.getFrameExtents();if(r.multiply(S),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/S.x),r.x=s.x*S.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/S.y),r.y=s.y*S.y,R.mapSize.y=s.y)),R.map===null||N===!0||k===!0){const Q=this.type!==Xn?{minFilter:un,magFilter:un}:{};R.map!==null&&R.map.dispose(),R.map=new vn(r.x,r.y,Q),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const B=R.getViewportCount();for(let Q=0;Q<B;Q++){const te=R.getViewport(Q);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),D.viewport(a),R.updateMatrices(z,Q),i=R.getFrustum(),x(L,F,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Xn&&A(R,F),R.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,_,C)};function A(T,L){const F=e.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,F,p,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,F,d,v,null)}function E(T,L,F,b){let _=null;const C=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)_=C;else if(_=F.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const D=_.uuid,N=L.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let G=k[N];G===void 0&&(G=_.clone(),k[N]=G,L.addEventListener("dispose",y)),_=G}if(_.visible=L.visible,_.wireframe=L.wireframe,b===Xn?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:h[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=n.properties.get(_);D.light=F}return _}function x(T,L,F,b,_){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Xn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const N=e.update(T),k=T.material;if(Array.isArray(k)){const G=N.groups;for(let V=0,z=G.length;V<z;V++){const R=G[V],S=k[R.materialIndex];if(S&&S.visible){const B=E(T,S,b,_);T.onBeforeShadow(n,T,L,F,N,B,R),n.renderBufferDirect(F,null,N,B,T,R),T.onAfterShadow(n,T,L,F,N,B,R)}}}else if(k.visible){const G=E(T,k,b,_);T.onBeforeShadow(n,T,L,F,N,G,null),n.renderBufferDirect(F,null,N,G,T,null),T.onAfterShadow(n,T,L,F,N,G,null)}}const D=T.children;for(let N=0,k=D.length;N<k;N++)x(D[N],L,F,b,_)}function y(T){T.target.removeEventListener("dispose",y);for(const F in c){const b=c[F],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const Sv={[Wa]:Xa,[qa]:ja,[Ya]:Ka,[Mr]:$a,[Xa]:Wa,[ja]:qa,[Ka]:Ya,[$a]:Mr};function wv(n,e){function t(){let H=!1;const ce=new rt;let he=null;const be=new rt(0,0,0,0);return{setMask:function(oe){he!==oe&&!H&&(n.colorMask(oe,oe,oe,oe),he=oe)},setLocked:function(oe){H=oe},setClear:function(oe,ie,Ae,He,ht){ht===!0&&(oe*=He,ie*=He,Ae*=He),ce.set(oe,ie,Ae,He),be.equals(ce)===!1&&(n.clearColor(oe,ie,Ae,He),be.copy(ce))},reset:function(){H=!1,he=null,be.set(-1,0,0,0)}}}function i(){let H=!1,ce=!1,he=null,be=null,oe=null;return{setReversed:function(ie){if(ce!==ie){const Ae=e.get("EXT_clip_control");ie?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const He=oe;oe=null,this.setClear(He)}},getReversed:function(){return ce},setTest:function(ie){ie?ne(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ie){he!==ie&&!H&&(n.depthMask(ie),he=ie)},setFunc:function(ie){if(ce&&(ie=Sv[ie]),be!==ie){switch(ie){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ie}},setLocked:function(ie){H=ie},setClear:function(ie){oe!==ie&&(ce&&(ie=1-ie),n.clearDepth(ie),oe=ie)},reset:function(){H=!1,he=null,be=null,oe=null,ce=!1}}}function r(){let H=!1,ce=null,he=null,be=null,oe=null,ie=null,Ae=null,He=null,ht=null;return{setTest:function(Je){H||(Je?ne(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!H&&(n.stencilMask(Je),ce=Je)},setFunc:function(Je,zn,Pn){(he!==Je||be!==zn||oe!==Pn)&&(n.stencilFunc(Je,zn,Pn),he=Je,be=zn,oe=Pn)},setOp:function(Je,zn,Pn){(ie!==Je||Ae!==zn||He!==Pn)&&(n.stencilOp(Je,zn,Pn),ie=Je,Ae=zn,He=Pn)},setLocked:function(Je){H=Je},setClear:function(Je){ht!==Je&&(n.clearStencil(Je),ht=Je)},reset:function(){H=!1,ce=null,he=null,be=null,oe=null,ie=null,Ae=null,He=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,A=null,E=null,x=null,y=null,T=null,L=new Fe(0,0,0),F=0,b=!1,_=null,C=null,D=null,N=null,k=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(R)[1]),V=z>=1):R.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),V=z>=2);let S=null,B={};const Q=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),se=new rt().fromArray(Q),Ue=new rt().fromArray(te);function Ie(H,ce,he,be){const oe=new Uint8Array(4),ie=n.createTexture();n.bindTexture(H,ie),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<he;Ae++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ce+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ie}const K={};K[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Mr),Le(!1),we(Nc),ne(n.CULL_FACE),st(qn);function ne(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function de(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Ce(H,ce){return h[H]!==ce?(n.bindFramebuffer(H,ce),h[H]=ce,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(H,ce){let he=d,be=!1;if(H){he=p.get(ce),he===void 0&&(he=[],p.set(ce,he));const oe=H.textures;if(he.length!==oe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ae=oe.length;ie<Ae;ie++)he[ie]=n.COLOR_ATTACHMENT0+ie;he.length=oe.length,be=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,be=!0);be&&n.drawBuffers(he)}function Xe(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const Tt={[Pi]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Jd]:n.FUNC_REVERSE_SUBTRACT};Tt[Qd]=n.MIN,Tt[ef]=n.MAX;const O={[tf]:n.ZERO,[nf]:n.ONE,[rf]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[of]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[ff]:n.CONSTANT_ALPHA,[pf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(H,ce,he,be,oe,ie,Ae,He,ht,Je){if(H===qn){v===!0&&(de(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),H!==Kd){if(H!==m||Je!==b){if((f!==Pi||x!==Pi)&&(n.blendEquation(n.FUNC_ADD),f=Pi,x=Pi),Je)switch(H){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.ONE,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,E=null,y=null,T=null,L.set(0,0,0),F=0,m=H,b=Je}return}oe=oe||ce,ie=ie||he,Ae=Ae||be,(ce!==f||oe!==x)&&(n.blendEquationSeparate(Tt[ce],Tt[oe]),f=ce,x=oe),(he!==A||be!==E||ie!==y||Ae!==T)&&(n.blendFuncSeparate(O[he],O[be],O[ie],O[Ae]),A=he,E=be,y=ie,T=Ae),(He.equals(L)===!1||ht!==F)&&(n.blendColor(He.r,He.g,He.b,ht),L.copy(He),F=ht),m=H,b=!1}function xe(H,ce){H.side===cn?de(n.CULL_FACE):ne(n.CULL_FACE);let he=H.side===en;ce&&(he=!he),Le(he),H.blending===Ni&&H.transparent===!1?st(qn):st(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const be=H.stencilWrite;o.setTest(be),be&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(H){_!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),_=H)}function we(H){H!==$d?(ne(n.CULL_FACE),H!==C&&(H===Nc?n.cullFace(n.BACK):H===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),C=H}function ot(H){H!==D&&(V&&n.lineWidth(H),D=H)}function ye(H,ce,he){H?(ne(n.POLYGON_OFFSET_FILL),(N!==ce||k!==he)&&(n.polygonOffset(ce,he),N=ce,k=he)):de(n.POLYGON_OFFSET_FILL)}function Oe(H){H?ne(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Mt(H){H===void 0&&(H=n.TEXTURE0+G-1),S!==H&&(n.activeTexture(H),S=H)}function ut(H,ce,he){he===void 0&&(S===null?he=n.TEXTURE0+G-1:he=S);let be=B[he];be===void 0&&(be={type:void 0,texture:void 0},B[he]=be),(be.type!==H||be.texture!==ce)&&(S!==he&&(n.activeTexture(he),S=he),n.bindTexture(H,ce||K[H]),be.type=H,be.texture=ce)}function P(){const H=B[S];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function I(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(H){se.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function ze(H){Ue.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function Pe(H,ce){let he=c.get(ce);he===void 0&&(he=new WeakMap,c.set(ce,he));let be=he.get(H);be===void 0&&(be=n.getUniformBlockIndex(ce,H.name),he.set(H,be))}function me(H,ce){const be=c.get(ce).get(H);l.get(ce)!==be&&(n.uniformBlockBinding(ce,be,H.__bindingPointIndex),l.set(ce,be))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},S=null,B={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,A=null,E=null,x=null,y=null,T=null,L=new Fe(0,0,0),F=0,b=!1,_=null,C=null,D=null,N=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:de,bindFramebuffer:Ce,drawBuffers:ge,useProgram:Xe,setBlending:st,setMaterial:xe,setFlipSided:Le,setCullFace:we,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:Oe,activeTexture:Mt,bindTexture:ut,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:Re,texImage3D:le,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:re,texStorage3D:Ee,texSubImage2D:I,texSubImage3D:X,compressedTexSubImage2D:W,compressedTexSubImage3D:fe,scissor:ve,viewport:ze,reset:Ve}}function Tv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return d?new OffscreenCanvas(P,M):ps("canvas")}function v(P,M,j){let I=1;const X=ut(P);if((X.width>j||X.height>j)&&(I=j/Math.max(X.width,X.height)),I<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const W=Math.floor(I*X.width),fe=Math.floor(I*X.height);h===void 0&&(h=g(W,fe));const re=M?g(W,fe):h;return re.width=W,re.height=fe,re.getContext("2d").drawImage(P,0,0,W,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+fe+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,M,j,I,X=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let W=M;if(M===n.RED&&(j===n.FLOAT&&(W=n.R32F),j===n.HALF_FLOAT&&(W=n.R16F),j===n.UNSIGNED_BYTE&&(W=n.R8)),M===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(W=n.R8UI),j===n.UNSIGNED_SHORT&&(W=n.R16UI),j===n.UNSIGNED_INT&&(W=n.R32UI),j===n.BYTE&&(W=n.R8I),j===n.SHORT&&(W=n.R16I),j===n.INT&&(W=n.R32I)),M===n.RG&&(j===n.FLOAT&&(W=n.RG32F),j===n.HALF_FLOAT&&(W=n.RG16F),j===n.UNSIGNED_BYTE&&(W=n.RG8)),M===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(W=n.RG8UI),j===n.UNSIGNED_SHORT&&(W=n.RG16UI),j===n.UNSIGNED_INT&&(W=n.RG32UI),j===n.BYTE&&(W=n.RG8I),j===n.SHORT&&(W=n.RG16I),j===n.INT&&(W=n.RG32I)),M===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(W=n.RGB8UI),j===n.UNSIGNED_SHORT&&(W=n.RGB16UI),j===n.UNSIGNED_INT&&(W=n.RGB32UI),j===n.BYTE&&(W=n.RGB8I),j===n.SHORT&&(W=n.RGB16I),j===n.INT&&(W=n.RGB32I)),M===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),j===n.UNSIGNED_INT&&(W=n.RGBA32UI),j===n.BYTE&&(W=n.RGBA8I),j===n.SHORT&&(W=n.RGBA16I),j===n.INT&&(W=n.RGBA32I)),M===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),M===n.RGBA){const fe=X?wo:je.getTransfer(I);j===n.FLOAT&&(W=n.RGBA32F),j===n.HALF_FLOAT&&(W=n.RGBA16F),j===n.UNSIGNED_BYTE&&(W=fe===et?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(P,M){let j;return P?M===null||M===Bi||M===hs?j=n.DEPTH24_STENCIL8:M===Un?j=n.DEPTH32F_STENCIL8:M===us&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===hs?j=n.DEPTH_COMPONENT24:M===Un?j=n.DEPTH_COMPONENT32F:M===us&&(j=n.DEPTH_COMPONENT16),j}function y(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){const M=P.target;M.removeEventListener("dispose",T),F(M),M.isVideoTexture&&u.delete(M)}function L(P){const M=P.target;M.removeEventListener("dispose",L),_(M)}function F(P){const M=i.get(P);if(M.__webglInit===void 0)return;const j=P.source,I=p.get(j);if(I){const X=I[M.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(P),Object.keys(I).length===0&&p.delete(j)}i.remove(P)}function b(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const j=P.source,I=p.get(j);delete I[M.__cacheKey],a.memory.textures--}function _(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(M.__webglFramebuffer[I]))for(let X=0;X<M.__webglFramebuffer[I].length;X++)n.deleteFramebuffer(M.__webglFramebuffer[I][X]);else n.deleteFramebuffer(M.__webglFramebuffer[I]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[I])}else{if(Array.isArray(M.__webglFramebuffer))for(let I=0;I<M.__webglFramebuffer.length;I++)n.deleteFramebuffer(M.__webglFramebuffer[I]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let I=0;I<M.__webglColorRenderbuffer.length;I++)M.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[I]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=P.textures;for(let I=0,X=j.length;I<X;I++){const W=i.get(j[I]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(j[I])}i.remove(P)}let C=0;function D(){C=0}function N(){const P=C;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),C+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function G(P,M){const j=i.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){const I=P.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,P,M);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+M)}function V(P,M){const j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){K(j,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+M)}function z(P,M){const j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){K(j,P,M);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+M)}function R(P,M){const j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+M)}const S={[Qa]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},B={[un]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Q={[bf]:n.NEVER,[Af]:n.ALWAYS,[yf]:n.LESS,[Th]:n.LEQUAL,[Ef]:n.EQUAL,[Tf]:n.GEQUAL,[Sf]:n.GREATER,[wf]:n.NOTEQUAL};function te(P,M){if(M.type===Un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dn||M.magFilter===Jo||M.magFilter===Ts||M.magFilter===Ii||M.minFilter===Dn||M.minFilter===Jo||M.minFilter===Ts||M.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,S[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,S[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,S[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,B[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,B[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==Ts&&M.minFilter!==Ii||M.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(P,M){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));const I=M.source;let X=p.get(I);X===void 0&&(X={},p.set(I,X));const W=k(M);if(W!==P.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),X[W].usedTimes++;const fe=X[P.__cacheKey];fe!==void 0&&(X[P.__cacheKey].usedTimes--,fe.usedTimes===0&&b(M)),P.__cacheKey=W,P.__webglTexture=X[W].texture}return j}function Ue(P,M,j){return Math.floor(Math.floor(P/j)/M)}function Ie(P,M,j,I){const W=P.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,j,I,M.data);else{W.sort((le,ve)=>le.start-ve.start);let fe=0;for(let le=1;le<W.length;le++){const ve=W[fe],ze=W[le],Pe=ve.start+ve.count,me=Ue(ze.start,M.width,4),Ve=Ue(ve.start,M.width,4);ze.start<=Pe+1&&me===Ve&&Ue(ze.start+ze.count-1,M.width,4)===me?ve.count=Math.max(ve.count,ze.start+ze.count-ve.start):(++fe,W[fe]=ze)}W.length=fe+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let le=0,ve=W.length;le<ve;le++){const ze=W[le],Pe=Math.floor(ze.start/4),me=Math.ceil(ze.count/4),Ve=Pe%M.width,H=Math.floor(Pe/M.width),ce=me,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Ve,H,ce,he,j,I,M.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function K(P,M,j){let I=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=n.TEXTURE_3D);const X=se(P,M),W=M.source;t.bindTexture(I,P.__webglTexture,n.TEXTURE0+j);const fe=i.get(W);if(W.version!==fe.__version||X===!0){t.activeTexture(n.TEXTURE0+j);const re=je.getPrimaries(je.workingColorSpace),Ee=M.colorSpace===ci?null:je.getPrimaries(M.colorSpace),Re=M.colorSpace===ci||re===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=v(M.image,!1,r.maxTextureSize);le=Mt(M,le);const ve=s.convert(M.format,M.colorSpace),ze=s.convert(M.type);let Pe=E(M.internalFormat,ve,ze,M.colorSpace,M.isVideoTexture);te(I,M);let me;const Ve=M.mipmaps,H=M.isVideoTexture!==!0,ce=fe.__version===void 0||X===!0,he=W.dataReady,be=y(M,le);if(M.isDepthTexture)Pe=x(M.format===fs,M.type),ce&&(H?t.texStorage2D(n.TEXTURE_2D,1,Pe,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Pe,le.width,le.height,0,ve,ze,null));else if(M.isDataTexture)if(Ve.length>0){H&&ce&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ve[0].width,Ve[0].height);for(let oe=0,ie=Ve.length;oe<ie;oe++)me=Ve[oe],H?he&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ze,me.data):t.texImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,ve,ze,me.data);M.generateMipmaps=!1}else H?(ce&&t.texStorage2D(n.TEXTURE_2D,be,Pe,le.width,le.height),he&&Ie(M,le,ve,ze)):t.texImage2D(n.TEXTURE_2D,0,Pe,le.width,le.height,0,ve,ze,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,Ve[0].width,Ve[0].height,le.depth);for(let oe=0,ie=Ve.length;oe<ie;oe++)if(me=Ve[oe],M.format!==Tn)if(ve!==null)if(H){if(he)if(M.layerUpdates.size>0){const Ae=pu(me.width,me.height,M.format,M.type);for(const He of M.layerUpdates){const ht=me.data.subarray(He*Ae/me.data.BYTES_PER_ELEMENT,(He+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,He,me.width,me.height,1,ve,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,le.depth,ve,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Pe,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,le.depth,ve,ze,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Pe,me.width,me.height,le.depth,0,ve,ze,me.data)}else{H&&ce&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ve[0].width,Ve[0].height);for(let oe=0,ie=Ve.length;oe<ie;oe++)me=Ve[oe],M.format!==Tn?ve!==null?H?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?he&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ze,me.data):t.texImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,ve,ze,me.data)}else if(M.isDataArrayTexture)if(H){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,le.width,le.height,le.depth),he)if(M.layerUpdates.size>0){const oe=pu(le.width,le.height,M.format,M.type);for(const ie of M.layerUpdates){const Ae=le.data.subarray(ie*oe/le.data.BYTES_PER_ELEMENT,(ie+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,ve,ze,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,ze,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,le.width,le.height,le.depth,0,ve,ze,le.data);else if(M.isData3DTexture)H?(ce&&t.texStorage3D(n.TEXTURE_3D,be,Pe,le.width,le.height,le.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,ze,le.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,le.width,le.height,le.depth,0,ve,ze,le.data);else if(M.isFramebufferTexture){if(ce)if(H)t.texStorage2D(n.TEXTURE_2D,be,Pe,le.width,le.height);else{let oe=le.width,ie=le.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Pe,oe,ie,0,ve,ze,null),oe>>=1,ie>>=1}}else if(Ve.length>0){if(H&&ce){const oe=ut(Ve[0]);t.texStorage2D(n.TEXTURE_2D,be,Pe,oe.width,oe.height)}for(let oe=0,ie=Ve.length;oe<ie;oe++)me=Ve[oe],H?he&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ve,ze,me):t.texImage2D(n.TEXTURE_2D,oe,Pe,ve,ze,me);M.generateMipmaps=!1}else if(H){if(ce){const oe=ut(le);t.texStorage2D(n.TEXTURE_2D,be,Pe,oe.width,oe.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ze,le)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ve,ze,le);m(M)&&f(I),fe.__version=W.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,j){if(M.image.length!==6)return;const I=se(P,M),X=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+j);const W=i.get(X);if(X.version!==W.__version||I===!0){t.activeTexture(n.TEXTURE0+j);const fe=je.getPrimaries(je.workingColorSpace),re=M.colorSpace===ci?null:je.getPrimaries(M.colorSpace),Ee=M.colorSpace===ci||fe===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!Re&&!le?ve[ie]=v(M.image[ie],!0,r.maxCubemapSize):ve[ie]=le?M.image[ie].image:M.image[ie],ve[ie]=Mt(M,ve[ie]);const ze=ve[0],Pe=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Ve=E(M.internalFormat,Pe,me,M.colorSpace),H=M.isVideoTexture!==!0,ce=W.__version===void 0||I===!0,he=X.dataReady;let be=y(M,ze);te(n.TEXTURE_CUBE_MAP,M);let oe;if(Re){H&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ve,ze.width,ze.height);for(let ie=0;ie<6;ie++){oe=ve[ie].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const He=oe[Ae];M.format!==Tn?Pe!==null?H?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,He.width,He.height,Pe,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,He.width,He.height,Pe,me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Ve,He.width,He.height,0,Pe,me,He.data)}}}else{if(oe=M.mipmaps,H&&ce){oe.length>0&&be++;const ie=ut(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,Pe,me,ve[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,ve[ie].width,ve[ie].height,0,Pe,me,ve[ie].data);for(let Ae=0;Ae<oe.length;Ae++){const ht=oe[Ae].image[ie].image;H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,ht.width,ht.height,Pe,me,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Ve,ht.width,ht.height,0,Pe,me,ht.data)}}else{H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,me,ve[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Pe,me,ve[ie]);for(let Ae=0;Ae<oe.length;Ae++){const He=oe[Ae];H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Pe,me,He.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Ve,Pe,me,He.image[ie])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),W.__version=X.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function de(P,M,j,I,X,W){const fe=s.convert(j.format,j.colorSpace),re=s.convert(j.type),Ee=E(j.internalFormat,fe,re,j.colorSpace),Re=i.get(M),le=i.get(j);if(le.__renderTarget=M,!Re.__hasExternalTextures){const ve=Math.max(1,M.width>>W),ze=Math.max(1,M.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,Ee,ve,ze,M.depth,0,fe,re,null):t.texImage2D(X,W,Ee,ve,ze,0,fe,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,X,le.__webglTexture,0,ot(M)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,X,le.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,M,j){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const I=M.depthTexture,X=I&&I.isDepthTexture?I.type:null,W=x(M.stencilBuffer,X),fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=ot(M);ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,W,M.width,M.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,W,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,W,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,P)}else{const I=M.textures;for(let X=0;X<I.length;X++){const W=I[X],fe=s.convert(W.format,W.colorSpace),re=s.convert(W.type),Ee=E(W.internalFormat,fe,re,W.colorSpace),Re=ot(M);j&&ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=i.get(M.depthTexture);I.__renderTarget=M,(!I.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const X=I.__webglTexture,W=ot(M);if(M.depthTexture.format===ds)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(M.depthTexture.format===fs)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const M=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const I=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){const X=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",X)};I.addEventListener("dispose",X),M.__depthDisposeCallback=X}M.__boundDepthTexture=I}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const I=P.texture.mipmaps;I&&I.length>0?ge(M.__webglFramebuffer[0],P):ge(M.__webglFramebuffer,P)}else if(j){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=n.createRenderbuffer(),Ce(M.__webglDepthbuffer[I],P,!1);else{const X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else{const I=P.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ce(M.__webglDepthbuffer,P,!1);else{const X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(P,M,j){const I=i.get(P);M!==void 0&&de(I.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&Xe(P)}function O(P){const M=P.texture,j=i.get(P),I=i.get(M);P.addEventListener("dispose",L);const X=P.textures,W=P.isWebGLCubeRenderTarget===!0,fe=X.length>1;if(fe||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=M.version,a.memory.textures++),W){j.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[re]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)j.__webglFramebuffer[re][Ee]=n.createFramebuffer()}else j.__webglFramebuffer[re]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)j.__webglFramebuffer[re]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(fe)for(let re=0,Ee=X.length;re<Ee;re++){const Re=i.get(X[re]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ye(P)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<X.length;re++){const Ee=X[re];j.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[re]);const Re=s.convert(Ee.format,Ee.colorSpace),le=s.convert(Ee.type),ve=E(Ee.internalFormat,Re,le,Ee.colorSpace,P.isXRRenderTarget===!0),ze=ot(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,j.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),te(n.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)de(j.__webglFramebuffer[re][Ee],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee);else de(j.__webglFramebuffer[re],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let re=0,Ee=X.length;re<Ee;re++){const Re=X[re],le=i.get(Re);let ve=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),te(ve,Re),de(j.__webglFramebuffer,P,Re,n.COLOR_ATTACHMENT0+re,ve,0),m(Re)&&f(ve)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,I.__webglTexture),te(re,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)de(j.__webglFramebuffer[Ee],P,M,n.COLOR_ATTACHMENT0,re,Ee);else de(j.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,re,0);m(M)&&f(re),t.unbindTexture()}P.depthBuffer&&Xe(P)}function st(P){const M=P.textures;for(let j=0,I=M.length;j<I;j++){const X=M[j];if(m(X)){const W=A(P),fe=i.get(X).__webglTexture;t.bindTexture(W,fe),f(W),t.unbindTexture()}}}const xe=[],Le=[];function we(P){if(P.samples>0){if(ye(P)===!1){const M=P.textures,j=P.width,I=P.height;let X=n.COLOR_BUFFER_BIT;const W=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(P),re=M.length>1;if(re)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Ee=P.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const le=i.get(M[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,j,I,0,0,j,I,X,n.NEAREST),l===!0&&(xe.length=0,Le.length=0,xe.push(n.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(W),Le.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const le=i.get(M[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ot(P){return Math.min(r.maxSamples,P.samples)}function ye(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(P){const M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Mt(P,M){const j=P.colorSpace,I=P.format,X=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Er&&j!==ci&&(je.getTransfer(j)===et?(I!==Tn||X!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=R,this.rebindTextures=Tt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ye}function Av(n,e){function t(i,r=ci){let s;const a=je.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===xh)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Vl)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Tn)return n.RGBA;if(i===ds)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Xl)return n.RED;if(i===ql)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===Yl)return n.RG_INTEGER;if(i===$l)return n.RGBA_INTEGER;if(i===fo||i===po||i===mo||i===go)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sl||i===ol)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===al)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Ml||i===bl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ll)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===El||i===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yl)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wl||i===Tl||i===Al||i===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rt({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends Hi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Pv,f={},A=t.getContextAttributes();let E=null,x=null;const y=[],T=[],L=new ue;let F=null;const b=new Qt;b.viewport=new rt;const _=new Qt;_.viewport=new rt;const C=[b,_],D=new Kp;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=y[K];return ne===void 0&&(ne=new xa,y[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=y[K];return ne===void 0&&(ne=new xa,y[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=y[K];return ne===void 0&&(ne=new xa,y[K]=ne),ne.getHandSpace()};function G(K){const ne=T.indexOf(K.inputSource);if(ne===-1)return;const de=y[ne];de!==void 0&&(de.update(K.inputSource,K.frame,c||a),de.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let K=0;K<y.length;K++){const ne=T[K];ne!==null&&(T[K]=null,y[K].disconnect(ne))}N=null,k=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(E),d=null,p=null,h=null,r=null,x=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,ge=null;A.depth&&(ge=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=A.stencil?fs:ds,Ce=A.stencil?hs:Bi);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(Xe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new vn(p.textureWidth,p.textureHeight,{format:Tn,type:Rn,depthTexture:new Oh(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new vn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(K){for(let ne=0;ne<K.removed.length;ne++){const de=K.removed[ne],Ce=T.indexOf(de);Ce>=0&&(T[Ce]=null,y[Ce].disconnect(de))}for(let ne=0;ne<K.added.length;ne++){const de=K.added[ne];let Ce=T.indexOf(de);if(Ce===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=T.length){T.push(de),Ce=Xe;break}else if(T[Xe]===null){T[Xe]=de,Ce=Xe;break}if(Ce===-1)break}const ge=y[Ce];ge&&ge.connect(de)}}const R=new U,S=new U;function B(K,ne,de){R.setFromMatrixPosition(ne.matrixWorld),S.setFromMatrixPosition(de.matrixWorld);const Ce=R.distanceTo(S),ge=ne.projectionMatrix.elements,Xe=de.projectionMatrix.elements,Tt=ge[14]/(ge[10]-1),O=ge[14]/(ge[10]+1),st=(ge[9]+1)/ge[5],xe=(ge[9]-1)/ge[5],Le=(ge[8]-1)/ge[0],we=(Xe[8]+1)/Xe[0],ot=Tt*Le,ye=Tt*we,Oe=Ce/(-Le+we),Mt=Oe*-Le;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(Oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ut=Tt+Oe,P=O+Oe,M=ot-Mt,j=ye+(Ce-Mt),I=st*O/P*ut,X=xe*O/P*ut;K.projectionMatrix.makePerspective(M,j,I,X,ut,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,de=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(de=m.depthFar)),D.near=_.near=b.near=ne,D.far=_.far=b.far=de,(N!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,k=D.far),D.layers.mask=K.layers.mask|6,b.layers.mask=D.layers.mask&3,_.layers.mask=D.layers.mask&5;const Ce=K.parent,ge=D.cameras;Q(D,Ce);for(let Xe=0;Xe<ge.length;Xe++)Q(ge[Xe],Ce);ge.length===2?B(D,b,_):D.projectionMatrix.copy(b.projectionMatrix),te(K,D,Ce)};function te(K,ne,de){de===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return f[K]};let se=null;function Ue(K,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ce=!1;de.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let O=0;O<de.length;O++){const st=de[O];let xe=null;if(d!==null)xe=d.getViewport(st);else{const we=h.getViewSubImage(p,st);xe=we.viewport,O===0&&(e.setRenderTargetTextures(x,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(x))}let Le=C[O];Le===void 0&&(Le=new Qt,Le.layers.enable(O),Le.viewport=new rt,C[O]=Le),Le.matrix.fromArray(st.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(st.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(xe.x,xe.y,xe.width,xe.height),O===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(Le)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const O=h.getDepthInformation(de[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let O=0;O<de.length;O++){const st=de[O].camera;if(st){let xe=f[st];xe||(xe=new Bh,f[st]=xe);const Le=h.getCameraImage(st);xe.sourceTexture=Le}}}}for(let de=0;de<y.length;de++){const Ce=T[de],ge=y[de];Ce!==null&&ge!==void 0&&ge.update(Ce,ne,c||a)}se&&se(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ie=new Wh;Ie.setAnimationLoop(Ue),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const Ai=new Fn,Dv=new Qe;function Uv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Uh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),E=A.envMap,x=A.envMapRotation;E&&(m.envMap.value=E,Ai.copy(x),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Ai)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const x=E.program;i.uniformBlockBinding(A,x)}function c(A,E){let x=r[A.id];x===void 0&&(g(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",m));const y=E.program;i.updateUBOMapping(A,y);const T=e.render.frame;s[A.id]!==T&&(p(A),s[A.id]=T)}function u(A){const E=h();A.__bindingPointIndex=E;const x=n.createBuffer(),y=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,y,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const E=r[A.id],x=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,L=x.length;T<L;T++){const F=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,_=F.length;b<_;b++){const C=F[b];if(d(C,T,b,y)===!0){const D=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let G=0;G<N.length;G++){const V=N[G],z=v(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+k,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,E,x,y){const T=A.value,L=E+"_"+x;if(y[L]===void 0)return typeof T=="number"||typeof T=="boolean"?y[L]=T:y[L]=T.clone(),!0;{const F=y[L];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return y[L]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(A){const E=A.uniforms;let x=0;const y=16;for(let L=0,F=E.length;L<F;L++){const b=Array.isArray(E[L])?E[L]:[E[L]];for(let _=0,C=b.length;_<C;_++){const D=b[_],N=Array.isArray(D.value)?D.value:[D.value];for(let k=0,G=N.length;k<G;k++){const V=N[k],z=v(V),R=x%y,S=R%z.boundary,B=R+S;x+=S,B!==0&&y-B<z.storage&&(x+=y-B),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=z.storage}}}const T=x%y;return T>0&&(x+=y-T),A.__size=x,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Nv{constructor(e={}){const{canvas:t=Xf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Jt;let T=0,L=0,F=null,b=-1,_=null;const C=new rt,D=new rt;let N=null;const k=new Fe(0);let G=0,V=t.width,z=t.height,R=1,S=null,B=null;const Q=new rt(0,0,V,z),te=new rt(0,0,V,z);let se=!1;const Ue=new Ql;let Ie=!1,K=!1;const ne=new Qe,de=new U,Ce=new rt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Tt(){return F===null?R:1}let O=i;function st(w,q){return t.getContext(w,q)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){const q="webgl2";if(O=st(q,w),O===null)throw st(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xe,Le,we,ot,ye,Oe,Mt,ut,P,M,j,I,X,W,fe,re,Ee,Re,le,ve,ze,Pe,me,Ve;function H(){xe=new X0(O),xe.init(),Pe=new Av(O,xe),Le=new B0(O,xe,e,Pe),we=new wv(O,xe),Le.reversedDepthBuffer&&p&&we.buffers.depth.setReversed(!0),ot=new $0(O),ye=new dv,Oe=new Tv(O,xe,we,ye,Le,Pe,ot),Mt=new k0(x),ut=new W0(x),P=new em(O),me=new F0(O,P),M=new q0(O,P,ot,me),j=new K0(O,M,P,ot),le=new j0(O,Le,Oe),re=new z0(ye),I=new hv(x,Mt,ut,xe,Le,me,re),X=new Uv(x,ye),W=new pv,fe=new Mv(xe),Re=new N0(x,Mt,ut,we,j,d,l),Ee=new Ev(x,j,Le),Ve=new Iv(O,ot,Le,we),ve=new O0(O,xe,ot),ze=new Y0(O,xe,ot),ot.programs=I.programs,x.capabilities=Le,x.extensions=xe,x.properties=ye,x.renderLists=W,x.shadowMap=Ee,x.state=we,x.info=ot}H();const ce=new Lv(x,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(w){w!==void 0&&(R=w,this.setSize(V,z,!1))},this.getSize=function(w){return w.set(V,z)},this.setSize=function(w,q,Z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,z=q,t.width=Math.floor(w*R),t.height=Math.floor(q*R),Z===!0&&(t.style.width=w+"px",t.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(V*R,z*R).floor()},this.setDrawingBufferSize=function(w,q,Z){V=w,z=q,R=Z,t.width=Math.floor(w*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,q,Z,J){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,q,Z,J),we.viewport(C.copy(Q).multiplyScalar(R).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,q,Z,J){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,q,Z,J),we.scissor(D.copy(te).multiplyScalar(R).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){we.setScissorTest(se=w)},this.setOpaqueSort=function(w){S=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,Z=!0){let J=0;if(w){let $=!1;if(F!==null){const ae=F.texture.format;$=ae===$l||ae===Yl||ae===ql}if($){const ae=F.texture.type,_e=ae===Rn||ae===Bi||ae===us||ae===hs||ae===Gl||ae===Wl,Te=Re.getClearColor(),Me=Re.getClearAlpha(),Be=Te.r,ke=Te.g,De=Te.b;_e?(g[0]=Be,g[1]=ke,g[2]=De,g[3]=Me,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Be,v[1]=ke,v[2]=De,v[3]=Me,O.clearBufferiv(O.COLOR,0,v))}else J|=O.COLOR_BUFFER_BIT}q&&(J|=O.DEPTH_BUFFER_BIT),Z&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Re.dispose(),W.dispose(),fe.dispose(),ye.dispose(),Mt.dispose(),ut.dispose(),j.dispose(),me.dispose(),Ve.dispose(),I.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Pn),ce.removeEventListener("sessionend",Cc),Mi.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ot.autoReset,q=Ee.enabled,Z=Ee.autoUpdate,J=Ee.needsUpdate,$=Ee.type;H(),ot.autoReset=w,Ee.enabled=q,Ee.autoUpdate=Z,Ee.needsUpdate=J,Ee.type=$}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const q=w.target;q.removeEventListener("dispose",ie),Ae(q)}function Ae(w){He(w),ye.remove(w)}function He(w){const q=ye.get(w).programs;q!==void 0&&(q.forEach(function(Z){I.releaseProgram(Z)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,Z,J,$,ae){q===null&&(q=ge);const _e=$.isMesh&&$.matrixWorld.determinant()<0,Te=Hd(w,q,Z,J,$);we.setMaterial(J,_e);let Me=Z.index,Be=1;if(J.wireframe===!0){if(Me=M.getWireframeAttribute(Z),Me===void 0)return;Be=2}const ke=Z.drawRange,De=Z.attributes.position;let Ye=ke.start*Be,nt=(ke.start+ke.count)*Be;ae!==null&&(Ye=Math.max(Ye,ae.start*Be),nt=Math.min(nt,(ae.start+ae.count)*Be)),Me!==null?(Ye=Math.max(Ye,0),nt=Math.min(nt,Me.count)):De!=null&&(Ye=Math.max(Ye,0),nt=Math.min(nt,De.count));const bt=nt-Ye;if(bt<0||bt===1/0)return;me.setup($,J,Te,Z,Me);let ft,at=ve;if(Me!==null&&(ft=P.get(Me),at=ze,at.setIndex(ft)),$.isMesh)J.wireframe===!0?(we.setLineWidth(J.wireframeLinewidth*Tt()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if($.isLine){let Ne=J.linewidth;Ne===void 0&&(Ne=1),we.setLineWidth(Ne*Tt()),$.isLineSegments?at.setMode(O.LINES):$.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else $.isPoints?at.setMode(O.POINTS):$.isSprite&&at.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ne=$._multiDrawStarts,_t=$._multiDrawCounts,Ke=$._multiDrawCount,tn=Me?P.get(Me).bytesPerElement:1,qi=ye.get(J).currentProgram.getUniforms();for(let nn=0;nn<Ke;nn++)qi.setValue(O,"_gl_DrawID",nn),at.render(Ne[nn]/tn,_t[nn])}else if($.isInstancedMesh)at.renderInstances(Ye,bt,$.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_t=Math.min(Z.instanceCount,Ne);at.renderInstances(Ye,bt,_t)}else at.render(Ye,bt)};function ht(w,q,Z){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,ws(w,q,Z),w.side=pi,w.needsUpdate=!0,ws(w,q,Z),w.side=cn):ws(w,q,Z)}this.compile=function(w,q,Z=null){Z===null&&(Z=w),f=fe.get(Z),f.init(q),E.push(f),Z.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),w!==Z&&w.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();const J=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ae=$.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const Te=ae[_e];ht(Te,Z,$),J.add(Te)}else ht(ae,Z,$),J.add(ae)}),f=E.pop(),J},this.compileAsync=function(w,q,Z=null){const J=this.compile(w,q,Z);return new Promise($=>{function ae(){if(J.forEach(function(_e){ye.get(_e).currentProgram.isReady()&&J.delete(_e)}),J.size===0){$(w);return}setTimeout(ae,10)}xe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Je=null;function zn(w){Je&&Je(w)}function Pn(){Mi.stop()}function Cc(){Mi.start()}const Mi=new Wh;Mi.setAnimationLoop(zn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){Je=w,ce.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},ce.addEventListener("sessionstart",Pn),ce.addEventListener("sessionend",Cc),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,q,F),f=fe.get(w,E.length),f.init(q),E.push(f),ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ue.setFromProjectionMatrix(ne,In,q.reversedDepth),K=this.localClippingEnabled,Ie=re.init(this.clippingPlanes,K),m=W.get(w,A.length),m.init(),A.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Ko(ae,q,-1/0,x.sortObjects)}Ko(w,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(S,B),Xe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Xe&&Re.addToRenderList(m,w),this.info.render.frame++,Ie===!0&&re.beginShadows();const Z=f.state.shadowsArray;Ee.render(Z,w,q),Ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,$=m.transmissive;if(f.setupLights(),q.isArrayCamera){const ae=q.cameras;if($.length>0)for(let _e=0,Te=ae.length;_e<Te;_e++){const Me=ae[_e];Lc(J,$,w,Me)}Xe&&Re.render(w);for(let _e=0,Te=ae.length;_e<Te;_e++){const Me=ae[_e];Pc(m,w,Me,Me.viewport)}}else $.length>0&&Lc(J,$,w,q),Xe&&Re.render(w),Pc(m,w,q);F!==null&&L===0&&(Oe.updateMultisampleRenderTarget(F),Oe.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(x,w,q),me.resetDefaultState(),b=-1,_=null,E.pop(),E.length>0?(f=E[E.length-1],Ie===!0&&re.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ko(w,q,Z,J){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ue.intersectsSprite(w)){J&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ne);const _e=j.update(w),Te=w.material;Te.visible&&m.push(w,_e,Te,Z,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ue.intersectsObject(w))){const _e=j.update(w),Te=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ce.copy(_e.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(ne)),Array.isArray(Te)){const Me=_e.groups;for(let Be=0,ke=Me.length;Be<ke;Be++){const De=Me[Be],Ye=Te[De.materialIndex];Ye&&Ye.visible&&m.push(w,_e,Ye,Z,Ce.z,De)}}else Te.visible&&m.push(w,_e,Te,Z,Ce.z,null)}}const ae=w.children;for(let _e=0,Te=ae.length;_e<Te;_e++)Ko(ae[_e],q,Z,J)}function Pc(w,q,Z,J){const $=w.opaque,ae=w.transmissive,_e=w.transparent;f.setupLightsView(Z),Ie===!0&&re.setGlobalState(x.clippingPlanes,Z),J&&we.viewport(C.copy(J)),$.length>0&&Ss($,q,Z),ae.length>0&&Ss(ae,q,Z),_e.length>0&&Ss(_e,q,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Lc(w,q,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new vn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Nn:Rn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ae=f.state.transmissionRenderTarget[J.id],_e=J.viewport||C;ae.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);const Te=x.getRenderTarget(),Me=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(ae),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Re.render(Z);const ke=x.toneMapping;x.toneMapping=ui;const De=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),Ie===!0&&re.setGlobalState(x.clippingPlanes,J),Ss(w,Z,J),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let nt=0,bt=q.length;nt<bt;nt++){const ft=q[nt],at=ft.object,Ne=ft.geometry,_t=ft.material,Ke=ft.group;if(_t.side===cn&&at.layers.test(J.layers)){const tn=_t.side;_t.side=en,_t.needsUpdate=!0,Dc(at,Z,J,Ne,_t,Ke),_t.side=tn,_t.needsUpdate=!0,Ye=!0}}Ye===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae))}x.setRenderTarget(Te,Me,Be),x.setClearColor(k,G),De!==void 0&&(J.viewport=De),x.toneMapping=ke}function Ss(w,q,Z){const J=q.isScene===!0?q.overrideMaterial:null;for(let $=0,ae=w.length;$<ae;$++){const _e=w[$],Te=_e.object,Me=_e.geometry,Be=_e.group;let ke=_e.material;ke.allowOverride===!0&&J!==null&&(ke=J),Te.layers.test(Z.layers)&&Dc(Te,q,Z,Me,ke,Be)}}function Dc(w,q,Z,J,$,ae){w.onBeforeRender(x,q,Z,J,$,ae),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(x,q,Z,J,w,ae),$.transparent===!0&&$.side===cn&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,x.renderBufferDirect(Z,q,J,$,w,ae),$.side=pi,$.needsUpdate=!0,x.renderBufferDirect(Z,q,J,$,w,ae),$.side=cn):x.renderBufferDirect(Z,q,J,$,w,ae),w.onAfterRender(x,q,Z,J,$,ae)}function ws(w,q,Z){q.isScene!==!0&&(q=ge);const J=ye.get(w),$=f.state.lights,ae=f.state.shadowsArray,_e=$.state.version,Te=I.getParameters(w,$.state,ae,q,Z),Me=I.getProgramCacheKey(Te);let Be=J.programs;J.environment=w.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(w.isMeshStandardMaterial?ut:Mt).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ie),Be=new Map,J.programs=Be);let ke=Be.get(Me);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===_e)return Ic(w,Te),ke}else Te.uniforms=I.getUniforms(w),w.onBeforeCompile(Te,x),ke=I.acquireProgram(Te,Me),Be.set(Me,ke),J.uniforms=Te.uniforms;const De=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=re.uniform),Ic(w,Te),J.needsLights=Gd(w),J.lightsStateVersion=_e,J.needsLights&&(De.ambientLightColor.value=$.state.ambient,De.lightProbe.value=$.state.probe,De.directionalLights.value=$.state.directional,De.directionalLightShadows.value=$.state.directionalShadow,De.spotLights.value=$.state.spot,De.spotLightShadows.value=$.state.spotShadow,De.rectAreaLights.value=$.state.rectArea,De.ltc_1.value=$.state.rectAreaLTC1,De.ltc_2.value=$.state.rectAreaLTC2,De.pointLights.value=$.state.point,De.pointLightShadows.value=$.state.pointShadow,De.hemisphereLights.value=$.state.hemi,De.directionalShadowMap.value=$.state.directionalShadowMap,De.directionalShadowMatrix.value=$.state.directionalShadowMatrix,De.spotShadowMap.value=$.state.spotShadowMap,De.spotLightMatrix.value=$.state.spotLightMatrix,De.spotLightMap.value=$.state.spotLightMap,De.pointShadowMap.value=$.state.pointShadowMap,De.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function Uc(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=_o.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Ic(w,q){const Z=ye.get(w);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.batchingColor=q.batchingColor,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Hd(w,q,Z,J,$){q.isScene!==!0&&(q=ge),Oe.resetTextureUnits();const ae=q.fog,_e=J.isMeshStandardMaterial?q.environment:null,Te=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Er,Me=(J.isMeshStandardMaterial?ut:Mt).get(J.envMap||_e),Be=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),De=!!Z.morphAttributes.position,Ye=!!Z.morphAttributes.normal,nt=!!Z.morphAttributes.color;let bt=ui;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=x.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=ft!==void 0?ft.length:0,Ne=ye.get(J),_t=f.state.lights;if(Ie===!0&&(K===!0||w!==_)){const Ht=w===_&&J.id===b;re.setState(J,w,Ht)}let Ke=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_t.state.version||Ne.outputColorSpace!==Te||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==Me||J.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ke||Ne.morphTargets!==De||Ne.morphNormals!==Ye||Ne.morphColors!==nt||Ne.toneMapping!==bt||Ne.morphTargetsCount!==at)&&(Ke=!0):(Ke=!0,Ne.__version=J.version);let tn=Ne.currentProgram;Ke===!0&&(tn=ws(J,q,$));let qi=!1,nn=!1,Wr=!1;const vt=tn.getUniforms(),dn=Ne.uniforms;if(we.useProgram(tn.program)&&(qi=!0,nn=!0,Wr=!0),J.id!==b&&(b=J.id,nn=!0),qi||_!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(O,"projectionMatrix",w.projectionMatrix),vt.setValue(O,"viewMatrix",w.matrixWorldInverse);const $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(O,de.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,nn=!0,Wr=!0)}if($.isSkinnedMesh){vt.setOptional(O,$,"bindMatrix"),vt.setOptional(O,$,"bindMatrixInverse");const Ht=$.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(O,"boneTexture",Ht.boneTexture,Oe))}$.isBatchedMesh&&(vt.setOptional(O,$,"batchingTexture"),vt.setValue(O,"batchingTexture",$._matricesTexture,Oe),vt.setOptional(O,$,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",$._indirectTexture,Oe),vt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",$._colorsTexture,Oe));const fn=Z.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&le.update($,Z,tn),(nn||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,vt.setValue(O,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(dn.envMap.value=Me,dn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(dn.envMapIntensity.value=q.environmentIntensity),nn&&(vt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Vd(dn,Wr),ae&&J.fog===!0&&X.refreshFogUniforms(dn,ae),X.refreshMaterialUniforms(dn,J,R,z,f.state.transmissionRenderTarget[w.id]),_o.upload(O,Uc(Ne),dn,Oe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(_o.upload(O,Uc(Ne),dn,Oe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(O,"center",$.center),vt.setValue(O,"modelViewMatrix",$.modelViewMatrix),vt.setValue(O,"normalMatrix",$.normalMatrix),vt.setValue(O,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ht=J.uniformsGroups;for(let $t=0,Zo=Ht.length;$t<Zo;$t++){const bi=Ht[$t];Ve.update(bi,tn),Ve.bind(bi,tn)}}return tn}function Vd(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Gd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,q,Z){const J=ye.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ye.get(w.texture).__webglTexture=q,ye.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const Z=ye.get(w);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0};const Wd=O.createFramebuffer();this.setRenderTarget=function(w,q=0,Z=0){F=w,T=q,L=Z;let J=!0,$=null,ae=!1,_e=!1;if(w){const Me=ye.get(w);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Me.__webglFramebuffer===void 0)Oe.setupRenderTarget(w);else if(Me.__hasExternalTextures)Oe.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&ye.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const ke=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?$=ke[q][Z]:$=ke[q],ae=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?$=ye.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?$=ke[Z]:$=ke,C.copy(w.viewport),D.copy(w.scissor),N=w.scissorTest}else C.copy(Q).multiplyScalar(R).floor(),D.copy(te).multiplyScalar(R).floor(),N=se;if(Z!==0&&($=Wd),we.bindFramebuffer(O.FRAMEBUFFER,$)&&J&&we.drawBuffers(w,$),we.viewport(C),we.scissor(D),we.setScissorTest(N),ae){const Me=ye.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me.__webglTexture,Z)}else if(_e){const Me=q;for(let Be=0;Be<w.textures.length;Be++){const ke=ye.get(w.textures[Be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Be,ke.__webglTexture,Z,Me)}}else if(w!==null&&Z!==0){const Me=ye.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Me.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(w,q,Z,J,$,ae,_e,Te=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){we.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Be=w.textures[Te],ke=Be.format,De=Be.type;if(!Le.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-J&&Z>=0&&Z<=w.height-$&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(q,Z,J,$,Pe.convert(ke),Pe.convert(De),ae))}finally{const Be=F!==null?ye.get(F).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,q,Z,J,$,ae,_e,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(q>=0&&q<=w.width-J&&Z>=0&&Z<=w.height-$){we.bindFramebuffer(O.FRAMEBUFFER,Me);const Be=w.textures[Te],ke=Be.format,De=Be.type;if(!Le.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(q,Z,J,$,Pe.convert(ke),Pe.convert(De),0);const nt=F!==null?ye.get(F).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,nt);const bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qf(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(Ye),O.deleteSync(bt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,Z=0){const J=Math.pow(2,-Z),$=Math.floor(w.image.width*J),ae=Math.floor(w.image.height*J),_e=q!==null?q.x:0,Te=q!==null?q.y:0;Oe.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,_e,Te,$,ae),we.unbindTexture()};const Xd=O.createFramebuffer(),qd=O.createFramebuffer();this.copyTextureToTexture=function(w,q,Z=null,J=null,$=0,ae=null){ae===null&&($!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=$,$=0):ae=0);let _e,Te,Me,Be,ke,De,Ye,nt,bt;const ft=w.isCompressedTexture?w.mipmaps[ae]:w.image;if(Z!==null)_e=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,Me=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,ke=Z.min.y,De=Z.isBox3?Z.min.z:0;else{const fn=Math.pow(2,-$);_e=Math.floor(ft.width*fn),Te=Math.floor(ft.height*fn),w.isDataArrayTexture?Me=ft.depth:w.isData3DTexture?Me=Math.floor(ft.depth*fn):Me=1,Be=0,ke=0,De=0}J!==null?(Ye=J.x,nt=J.y,bt=J.z):(Ye=0,nt=0,bt=0);const at=Pe.convert(q.format),Ne=Pe.convert(q.type);let _t;q.isData3DTexture?(Oe.setTexture3D(q,0),_t=O.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Oe.setTexture2DArray(q,0),_t=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(q,0),_t=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);const Ke=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qi=O.getParameter(O.UNPACK_SKIP_PIXELS),nn=O.getParameter(O.UNPACK_SKIP_ROWS),Wr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,De);const vt=w.isDataArrayTexture||w.isData3DTexture,dn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const fn=ye.get(w),Ht=ye.get(q),$t=ye.get(fn.__renderTarget),Zo=ye.get(Ht.__renderTarget);we.bindFramebuffer(O.READ_FRAMEBUFFER,$t.__webglFramebuffer),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let bi=0;bi<Me;bi++)vt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(w).__webglTexture,$,De+bi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(q).__webglTexture,ae,bt+bi)),O.blitFramebuffer(Be,ke,_e,Te,Ye,nt,_e,Te,O.DEPTH_BUFFER_BIT,O.NEAREST);we.bindFramebuffer(O.READ_FRAMEBUFFER,null),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||ye.has(w)){const fn=ye.get(w),Ht=ye.get(q);we.bindFramebuffer(O.READ_FRAMEBUFFER,Xd),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,qd);for(let $t=0;$t<Me;$t++)vt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fn.__webglTexture,$,De+$t):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fn.__webglTexture,$),dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,ae,bt+$t):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,ae),$!==0?O.blitFramebuffer(Be,ke,_e,Te,Ye,nt,_e,Te,O.COLOR_BUFFER_BIT,O.NEAREST):dn?O.copyTexSubImage3D(_t,ae,Ye,nt,bt+$t,Be,ke,_e,Te):O.copyTexSubImage2D(_t,ae,Ye,nt,Be,ke,_e,Te);we.bindFramebuffer(O.READ_FRAMEBUFFER,null),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(_t,ae,Ye,nt,bt,_e,Te,Me,at,Ne,ft.data):q.isCompressedArrayTexture?O.compressedTexSubImage3D(_t,ae,Ye,nt,bt,_e,Te,Me,at,ft.data):O.texSubImage3D(_t,ae,Ye,nt,bt,_e,Te,Me,at,Ne,ft):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ae,Ye,nt,_e,Te,at,Ne,ft.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ae,Ye,nt,ft.width,ft.height,at,ft.data):O.texSubImage2D(O.TEXTURE_2D,ae,Ye,nt,_e,Te,at,Ne,ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qi),O.pixelStorei(O.UNPACK_SKIP_ROWS,nn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wr),ae===0&&q.generateMipmaps&&O.generateMipmap(_t),we.unbindTexture()},this.initRenderTarget=function(w){ye.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){T=0,L=0,F=null,we.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Jr=[{id:"king",label:"万兽之王",color:"#ff727e"},{id:"joker",label:"薛之谦",color:"#dbe9ff"},{id:"peace",label:"世界和平",color:"#ffe1a0"},{id:"whale",label:"鲸游夜空",color:"#7ecfff"}];function Fv(n){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d",{willReadFrequently:!0});if(t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineCap="round",n==="whale"){t.lineWidth=7,t.strokeStyle="#73caff",t.beginPath(),t.moveTo(245,267),t.bezierCurveTo(360,120,665,120,802,242),t.bezierCurveTo(842,277,787,326,716,337),t.bezierCurveTo(490,391,335,333,245,267),t.bezierCurveTo(205,246,142,180,126,141),t.bezierCurveTo(203,151,237,190,245,267),t.bezierCurveTo(223,296,161,357,122,371),t.bezierCurveTo(129,289,187,265,245,267),t.stroke(),t.strokeStyle="#edb9ec",t.beginPath(),t.moveTo(502,329),t.bezierCurveTo(507,392,549,405,611,410),t.bezierCurveTo(603,367,573,347,553,329),t.stroke(),t.strokeStyle="#ff8aa1",t.beginPath(),t.moveTo(277,237),t.bezierCurveTo(430,122,680,149,793,241),t.stroke(),t.fillStyle="#fff5d9",t.beginPath(),t.arc(748,246,8,0,Math.PI*2),t.fill(),t.strokeStyle="#b9e8ff",t.lineWidth=4;for(let s=0;s<5;s++)t.beginPath(),t.moveTo(411+s*41,285),t.quadraticCurveTo(530+s*25,335,700+s*12,305),t.stroke()}else t.fillStyle=n==="king"?"#ff667c":n==="peace"?"#ffe0a0":"#d8e8ff",t.font=`700 ${n==="joker"?190:170}px "Songti SC","Noto Serif SC","STSong",serif`,t.fillText(n==="king"?"万兽之王":n==="peace"?"世界和平":"薛之谦",512,322,920),t.strokeStyle=n==="king"?"#ffe8c1":"#c6edff",t.lineWidth=5,n==="king"?(t.beginPath(),t.moveTo(512,36),t.bezierCurveTo(476,98,467,130,491,148),t.bezierCurveTo(485,175,504,189,512,199),t.bezierCurveTo(536,172,554,151,527,113),t.bezierCurveTo(507,86,534,66,512,36),t.stroke(),t.beginPath(),t.moveTo(477,161),t.lineTo(512,214),t.lineTo(547,161),t.stroke()):n==="peace"?(t.beginPath(),t.moveTo(512,158),t.bezierCurveTo(458,128,432,74,389,72),t.bezierCurveTo(402,133,442,164,481,180),t.lineTo(512,201),t.lineTo(544,179),t.bezierCurveTo(604,151,625,108,635,70),t.bezierCurveTo(591,84,563,125,537,134),t.quadraticCurveTo(520,104,500,127),t.stroke()):(t.beginPath(),t.ellipse(512,130,77,18,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(415,144),t.quadraticCurveTo(512,188,609,144),t.stroke()),t.strokeStyle=n==="king"?"#ff667c":"#b1dfff",t.lineWidth=3,t.beginPath(),t.moveTo(210,440),t.lineTo(814,440),t.stroke();const i=t.getImageData(0,0,1024,512).data,r=[];for(let s=12;s<500;s+=5)for(let a=12;a<1012;a+=5){const o=(s*1024+a)*4;i[o+3]>80&&r.push({x:(a-512)*.17,y:(256-s)*.17,z:Math.sin(a*.014)*1.3,color:[i[o]/255,i[o+1]/255,i[o+2]/255]})}return r}function Ov(n,e,{notify:t}){const r=Object.fromEntries(Jr.map(z=>[z.id,Fv(z.id)])),s=new Lt;s.position.set(0,133,-8),n.add(s);const a=new wt,o=new Float32Array(2400*3),l=new Float32Array(2400*3),c=new Float32Array(2400*3),u=new Float32Array(2400*3),h=new Float32Array(2400),p=(z,R,S)=>{for(let B=0;B<2400;B++){const Q=z[Math.floor(B/2400*z.length)];R.set([Q.x,Q.y,Q.z],B*3),S.set(Q.color,B*3)}};p(r.king,o,c),l.set(o),u.set(c);for(let z=0;z<2400;z++)h[z]=z*1.61803398875%1;a.setAttribute("position",new mt(o,3)),a.setAttribute("aFrom",new mt(o,3)),a.setAttribute("aTo",new mt(l,3)),a.setAttribute("cFrom",new mt(c,3)),a.setAttribute("cTo",new mt(u,3)),a.setAttribute("seed",new mt(h,1));const d=new Rt({uniforms:{morph:{value:1},time:{value:0},motion:{value:1},pointScale:{value:700}},vertexShader:"attribute vec3 aFrom;attribute vec3 aTo;attribute vec3 cFrom;attribute vec3 cTo;attribute float seed;uniform float morph;uniform float time;uniform float motion;uniform float pointScale;varying vec3 vColor;void main(){float k=smoothstep(0.,1.,morph);vec3 p=mix(aFrom,aTo,k);p.z+=sin(seed*6.283+time*.28)*1.1*motion;vColor=mix(cFrom,cTo,k);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z),1.2,4.2);}",fragmentShader:"varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=pow(1.-d,1.35);gl_FragColor=vec4(vColor*.95,a*.9);}",transparent:!0,depthWrite:!1,blending:Ni,fog:!1}),g=new Ao(a,d);g.frustumCulled=!1,s.add(g);let v="king",m=1,f=0,A=0,E=!0,x=!0,y=!0;const T=1200,L=new wt,F=new Float32Array(T*3),b=new Float32Array(T*3),_=new Float32Array(T*3),C=new Float32Array(T),D=[new Fe("#eac17d"),new Fe("#e9a8dc"),new Fe("#90cfff"),new Fe("#ffe7bd"),new Fe("#dda1ce")];for(let z=0;z<T;z++){const R=Math.floor(z/240),S=z%240,B=S*2.3999632297,Q=1-2*(S+.5)/240,te=Math.sqrt(1-Q*Q),se=10+S%7*1.5;F.set([(R-2)*54,115+R%2*25,-42-Math.abs(R-2)*8],z*3),b.set([Math.cos(B)*te*se,Q*se,Math.sin(B)*te*se],z*3),_.set(D[R].toArray(),z*3),C[z]=R*2.8}L.setAttribute("position",new mt(F,3)),L.setAttribute("velocity",new mt(b,3)),L.setAttribute("color",new mt(_,3)),L.setAttribute("delay",new mt(C,1));const N=new Rt({uniforms:{time:{value:0},pointScale:{value:700}},vertexShader:"attribute vec3 velocity;attribute float delay;uniform float time;uniform float pointScale;varying vec3 vColor;varying float vAlpha;void main(){float age=mod(time-delay+20.,20.);float t=min(age,4.);vec3 p=position+velocity*t;p.y-=2.2*t*t;vColor=color;vAlpha=(1.-smoothstep(1.3,3.7,age))*smoothstep(0.,.2,age);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z)*.8,1.,3.2);}",fragmentShader:"varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.||vAlpha<.01)discard;gl_FragColor=vec4(vColor*1.25,pow(1.-d,1.4)*vAlpha*.65);}",vertexColors:!0,transparent:!0,depthWrite:!1,blending:Oi,fog:!1}),k=new Ao(L,N);k.frustumCulled=!1,n.add(k);function G(){document.querySelectorAll("button[data-sky-formation]").forEach(z=>{const R=z.dataset.skyFormation===v;z.classList.toggle("active",R),z.setAttribute("aria-pressed",String(R))}),document.querySelector("#sky-auto").setAttribute("aria-checked",String(E)),document.querySelector("#sky-auto").textContent=E?"自动换景 · 开":"自动换景 · 关",document.querySelector("#sky-fireworks").setAttribute("aria-checked",String(y)),document.querySelector("#sky-fireworks").textContent=y?"烟花 · 开":"烟花 · 关",document.querySelector("#sky-title").textContent=Jr.find(z=>z.id===v).label,document.documentElement.dataset.skyFormation=v}function V(z,R=!1){if(!r[z]||(R&&(E=!1,G()),z===v))return;const S=Fi.smoothstep(m,0,1);for(let B=0;B<o.length;B++)o[B]=Fi.lerp(o[B],l[B],S),c[B]=Fi.lerp(c[B],u[B],S);p(r[z],l,u);for(const B of["aFrom","aTo","cFrom","cTo"])a.attributes[B].needsUpdate=!0;v=z,m=0,A=f,R&&(E=!1),G()}return document.querySelectorAll("button[data-sky-formation]").forEach(z=>z.onclick=()=>V(z.dataset.skyFormation,!0)),document.querySelector("#sky-auto").onclick=()=>{E=!E,A=f,G()},document.querySelector("#sky-fireworks").onclick=()=>{y=!y,G()},G(),{update(z,{active:R,reduced:S,low:B,visible:Q=!0}){if(x=Q,s.visible=x,k.visible=x&&y&&!S,R&&(f+=Math.min(z,.05),m=Math.min(1,m+z/(S?1.2:3.6))),E&&R&&f-A>17){const te=(Jr.findIndex(se=>se.id===v)+1)%Jr.length;V(Jr[te].id)}s.rotation.y=Math.atan2(e.position.x-s.position.x,e.position.z-s.position.z),d.uniforms.morph.value=m,d.uniforms.time.value=f,d.uniforms.motion.value=S?0:1,d.uniforms.pointScale.value=B?520:700,N.uniforms.time.value=f,L.setDrawRange(0,B?720:T),a.setDrawRange(0,2400)},focus(){t("拖动可环顾夜空，点击下方文字切换无人机造型")},reset(){v="king",m=1,f=0,A=0,E=!0,y=!0,p(r.king,o,c),l.set(o),u.set(c);for(const z of["position","aFrom","aTo","cFrom","cTo"])a.attributes[z].needsUpdate=!0;G()},setFormation(z){V(z,!0)}}}function jh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new wt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let p=0;p<n.length;++p){const d=n[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[p].attributes.position.count}l.setIndex(h)}for(const u in s){const h=zu(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][p]);const g=zu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function zu(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new mt(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<t;g++){const v=u.getComponent(p,g);o.setComponent(p+h,g,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function Bv(n){let e=0,t=0;for(const i of n){const r=new Map;for(const s of[...i.children]){if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||s.material.isShaderMaterial)continue;const a=s.material.uuid+"|"+Object.keys(s.geometry.attributes).sort().join(",")+"|"+!!s.geometry.index;r.has(a)||r.set(a,[]),r.get(a).push(s)}for(const s of r.values()){if(s.length<2)continue;const a=s.map(c=>(c.updateMatrix(),c.geometry.clone().applyMatrix4(c.matrix))),o=jh(a,!1);if(a.forEach(c=>c.dispose()),!o)continue;o.computeBoundingSphere();const l=new pt(o,s[0].material);l.receiveShadow=s.some(c=>c.receiveShadow),l.castShadow=s.some(c=>c.castShadow),l.matrixAutoUpdate=!1,s.forEach(c=>i.remove(c)),i.add(l),e+=s.length,t++}}return{before:e,after:t}}function zv(n,e,t=1){const i=e<700;return{ratio:Math.min(t,n===0?1.5:n===1?i?1:1.15:n===2?i?.8:1:i?.65:.8),bloom:n<2,shadows:!1,fogCount:n===0?1600:n===1?750:n===2?350:180,beamStep:n===0?1:n===1?2:n===2?3:4,crowdCount:n===0?6400:n===1?4e3:n===2?2400:1600}}function kv(n,e=[],t=[]){const i=n===0?4:n===1?2:0,r=new Set(t);return Array.from(e).reduce((s,a)=>Number.isInteger(a)&&a>s&&a<=i&&r.has(a)?a:s,0)}function Hv(n,e){let t=!1;for(const i of new Set([n.renderTarget1,n.renderTarget2]))i.samples!==e&&(i.dispose(),i.samples=e,t=!0);return t}const Vv=[{title:"大屏里的那一刻",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-01-original.jpg",thumb:"onsite/author-01-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"红色灯光中的舞台",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-02-original.jpg",thumb:"onsite/author-02-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"开场之前",caption:"长沙站 · 2026.04.12",file:"onsite/author-03-original.jpg",thumb:"onsite/author-03-thumb-960.webp",width:1280,height:1478,quality:"original"},{title:"再看一次现场",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-04-original.jpg",thumb:"onsite/author-04-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"带着喜欢去见面",caption:"观演随身物与现场记忆",file:"onsite/author-05-original.jpg",thumb:"onsite/author-05-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"属于长沙的这一夜",caption:"长沙站 · 2026.04.12",file:"onsite/author-06-original.jpg",thumb:"onsite/author-06-thumb-960.webp",width:1280,height:1707,quality:"original"},{title:"光与绳索之间",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-07-original.jpg",thumb:"onsite/author-07-thumb-960.webp",width:1280,height:1280,quality:"original"},{title:"离舞台近一点",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-08-original.jpg",thumb:"onsite/author-08-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"夜色中的场馆",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-09-lossless.webp",thumb:"onsite/author-09-lossless.webp",width:299,height:298,quality:"screenshot-crop"},{title:"蓝色灯海",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-10-lossless.webp",thumb:"onsite/author-10-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"大屏与歌声",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-11-lossless.webp",thumb:"onsite/author-11-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"紫色的这一夜",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-12-lossless.webp",thumb:"onsite/author-12-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"红色舞台片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-13-lossless.webp",thumb:"onsite/author-13-lossless.webp",width:298,height:118,quality:"screenshot-crop"},{title:"白色光影片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-14-lossless.webp",thumb:"onsite/author-14-lossless.webp",width:298,height:118,quality:"screenshot-crop"}],an=()=>Object.assign(new Error("图片准备已取消"),{name:"AbortError"}),Dl=new WeakMap;function Ua(n){Dl.get(n)?.(),Dl.delete(n)}function vo(){let n=0;return{next:()=>++n,isCurrent:e=>e===n,invalidate:()=>++n}}function Kh(n,{signal:e,timeoutMs:t=2e4,createImage:i=()=>new Image}={}){return new Promise((r,s)=>{if(e?.aborted){s(an());return}const a=i();let o=!1,l=!1;const c=()=>{clearTimeout(p),a.onload=a.onerror=null,e?.removeEventListener("abort",h)},u=d=>{o||(o=!0,c(),d?(a.removeAttribute?.("src"),s(d)):r(a))},h=()=>u(an()),p=setTimeout(()=>u(Object.assign(new Error("照片加载时间较长，请重试"),{name:"TimeoutError"})),t);e?.addEventListener("abort",h,{once:!0}),a.decoding="async",a.loading="eager",a.onerror=()=>u(new Error("照片未能加载，请检查网络后重试")),a.onload=async()=>{if(!(l||o)){l=!0;try{if(a.decode&&await a.decode(),!a.naturalWidth)throw new Error("照片暂时无法显示");u()}catch(d){u(d)}}},a.src=n})}async function Gv(n,{signal:e,timeoutMs:t=2e4,createImage:i,fetchImpl:r=globalThis.fetch?.bind(globalThis),urlAPI:s=URL,baseURI:a=globalThis.document?.baseURI,maxTransferBytes:o=8*1024*1024,maxImagePixels:l=32e6}={}){if(e?.aborted)throw an();const c=new URL(n,a).href;if(!/^https?:/.test(c)||!r)throw new Error("照片地址暂时无法访问");const u=new AbortController;let h=null,p=null,d=null,g=!1,v=null;const m=()=>{try{Promise.resolve(h?.cancel()).catch(()=>{})}catch{}},f=y=>{v=y,u.abort(),m()},A=()=>f(an()),E=setTimeout(()=>f(Object.assign(new Error("照片加载时间较长，请重试"),{name:"TimeoutError"})),t),x=()=>{if(u.signal.aborted)throw v||an()};e?.addEventListener("abort",A,{once:!0});try{if(p=await r(c,{signal:u.signal,credentials:"same-origin",cache:"default"}),x(),!p.ok||p.status===206)throw new Error("照片未完整加载，请重试");const y=(p.headers?.get("content-type")||"").split(";")[0].trim().toLowerCase();if(!/^image\/(jpeg|jpg|png|webp|avif|gif|bmp)$/.test(y))throw new Error("照片文件类型不正确，请重试");const T=Number(p.headers?.get("content-length"));if(Number.isFinite(T)&&T>o)throw new Error("照片文件过大，请查看原图");if(!p.body?.getReader)throw new Error("当前浏览器暂时无法准备照片，请查看原图");h=p.body.getReader();const L=[];let F=0;for(;;){const C=await h.read();if(x(),C.done)break;if(F+=C.value.byteLength,F>o)throw new Error("照片文件过大，请查看原图");L.push(C.value)}if(!F)throw new Error("照片文件为空，请重试");d=s.createObjectURL(new Blob(L,{type:y}));const b=await Kh(d,{signal:u.signal,timeoutMs:t,createImage:i});if(x(),b.naturalWidth*b.naturalHeight>l)throw new Error("照片尺寸过大，请查看原图");const _=d;return Dl.set(b,()=>s.revokeObjectURL(_)),g=!0,b}catch(y){throw u.signal.aborted?v||an():y}finally{if(clearTimeout(E),e?.removeEventListener("abort",A),u.abort(),m(),!h)try{Promise.resolve(p?.body?.cancel()).catch(()=>{})}catch{}d&&!g&&s.revokeObjectURL(d)}}function Zh({warmup:n,maxEntries:e=8,maxDecodedPixels:t=12e6,timeoutMs:i=2e4,createImage:r,loadImage:s=Gv,fetchImpl:a,urlAPI:o,baseURI:l,maxTransferBytes:c,maxImagePixels:u}={}){const h=new Map;let p=0,d=!1;const g=y=>[...y.owners].some(T=>T.demand);function v(y){n?.forget?.(y.key),h.get(y.url)===y&&h.delete(y.url),y.image&&Ua(y.image)}function m(){let y=[...h.values()].filter(L=>L.state==="ready"),T=y.reduce((L,F)=>L+F.pixels,0);for(;y.length>e||T>t&&y.length>1;){const L=y.find(F=>F.owners.size===0);if(!L)break;y=y.filter(F=>F!==L),T-=L.pixels,v(L)}}function f(y,T){y?.owners.delete(T)&&(y.owners.size===0&&["queued","loading"].includes(y.state)?(y.cancelled=!0,y.state="failed",y.controller.abort(),y.reject(an()),n?.cancel?.(y.key),v(y)):m())}function A(y,{priority:T="idle",retry:L=!1,demand:F=T==="interactive",_owner:b}={}){if(d)return Promise.reject(an());let _=h.get(y);if(_?.state==="failed"&&L&&(v(_),_=null),!_){let D,N;_={url:y,key:`gallery-image:${++p}:${y}`,state:"queued",owners:new Set,controller:new AbortController,promise:new Promise((k,G)=>{D=k,N=G})},_.reject=N,_.promise.catch(()=>{}),_.start=({resumable:k=!1}={})=>_.state==="loading"?_.attempt:_.state!=="queued"?_.promise:(_.state="loading",_.controller=new AbortController,_.attempt=s(y,{signal:_.controller.signal,timeoutMs:i,createImage:r,fetchImpl:a,urlAPI:o,baseURI:l,maxTransferBytes:c,maxImagePixels:u}).then(G=>{if(d||_.cancelled){Ua(G);const V=an();throw N(V),V}return _.state="ready",_.image=G,_.pixels=G.naturalWidth*G.naturalHeight,h.get(y)===_&&(h.delete(y),h.set(y,_),m()),D(G),G},G=>{throw k&&G.name==="AbortError"&&!d&&!_.cancelled&&!g(_)?_.state="queued":(_.state="failed",N(G)),G}),_.attempt.catch(()=>{}),_.attempt),h.set(y,_)}const C=b||{demand:F};return _.owners.add(C),b||_.promise.then(()=>f(_,C),()=>f(_,C)),_.state==="ready"?(h.delete(y),h.set(y,_),_.promise):(_.state==="failed"||(T==="interactive"||!n?_.start():n.enqueue({key:_.key,priority:T,kind:"image",cacheResult:!1,timeoutMs:i+1e3,retries:0,run:D=>{if(D?.aborted)throw an();const N=()=>{_.state==="loading"&&!g(_)&&_.controller.abort()};return D?.addEventListener("abort",N,{once:!0}),_.start({resumable:!0}).finally(()=>D?.removeEventListener("abort",N))}}).catch(D=>{_.state==="queued"&&(_.state="failed",_.controller.abort(),_.promise.catch(()=>{}),_.reject?.(D))})),_.promise)}function E(y,{priority:T="interactive",retry:L=!0,demand:F=T==="interactive"}={}){const b={demand:F};let _,C=!1;const D=A(y,{priority:T,retry:L,demand:F,_owner:b});return _=h.get(y),{ready:D,release(){C||(C=!0,f(_,b))}}}function x(y,{signal:T,retry:L=!0}={}){if(T?.aborted)return Promise.reject(an());if(!T)return A(y,{priority:"interactive",retry:L});const F=E(y,{priority:"interactive",retry:L,demand:!1}),b=F.ready;return new Promise((_,C)=>{const D=()=>{F.release(),C(an())};T.addEventListener("abort",D,{once:!0}),b.then(N=>{T.removeEventListener("abort",D),F.release(),_(N)},N=>{T.removeEventListener("abort",D),F.release(),C(N)})})}return{prepare:A,load:x,acquire:E,peek:y=>h.get(y)?.state==="ready"?h.get(y).image:null,snapshot:()=>({entries:h.size,decoded:[...h.values()].filter(y=>y.state==="ready").length,pixels:[...h.values()].reduce((y,T)=>y+(T.pixels||0),0)}),dispose(){d=!0;for(const y of h.values())y.controller.abort(),y.state==="queued"&&(y.state="failed",y.reject(an())),y.image&&Ua(y.image),n?.cancel?.(y.key),n?.forget?.(y.key);h.clear()}}}function Wv({warmup:n,cache:e,root:t=document,photos:i=Vv}={}){const r=e||Zh({warmup:n}),s=R=>t.querySelector(R),a=s("#author-viewer"),o=s("#author-view-stage"),l=s("#author-zoom"),c=s("#author-image-status"),u=vo();let h=0,p=!1,d=null,g=null,v=null,m=null;const f=(R,S)=>r.acquire?r.acquire(R,S):{ready:r.prepare(R,S),release(){}},A=()=>{v?.release(),v=null,m=null},E=()=>{g?.release(),g=null},x=()=>{d?.release(),d=null,n?.setBusy?.("gallery-original",!1)},y=R=>String(R).replace(/[&<>"']/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[S]);s("#author-grid").innerHTML=i.map((R,S)=>`<button class="author-photo" data-author-photo="${S}" aria-label="查看${y(R.title)}"><img src="${R.thumb}" alt="${y(R.title)}" width="${R.width}" height="${R.height}" loading="lazy" decoding="async"><span>${y(R.title)}<small>${y(R.caption)}</small></span></button>`).join("");const T=t.createElement("button");T.type="button",T.textContent="重新加载",T.className="author-retry",T.style.cssText="margin-left:10px;text-decoration:underline;color:#dac28f;min-height:36px";function L(){if(l.disabled)return;const R=o.classList.toggle("zoomed");l.textContent=R?"适应窗口":"放大查看",l.setAttribute("aria-pressed",String(R))}function F(R,S,{preview:B=!1}={}){R.id="author-view-image",R.alt=S.title,R.decoding="async",R.onclick=L,R.style.setProperty("--photo-width",S.width+"px"),R.classList.remove("is-loading"),R.setAttribute("aria-label",B?"预览图，正在准备原图":S.title),o.replaceChildren(R)}function b(){if(!a.open||p)return;const R=i[(h+1)%i.length],S=f(R.file,{priority:"next",retry:!0});E(),g=S,S.ready.catch(()=>{})}async function _(R){const S=u.next();h=(R%i.length+i.length)%i.length;const B=i[h],Q=f(B.file,{priority:"interactive",retry:!0});x(),d=Q,E(),A(),s("#author-view-title").textContent=B.title,s("#author-view-caption").textContent=B.caption,s("#author-image-size").textContent=(B.quality==="screenshot-crop"?"截图局部 · ":"原图 · ")+B.width+" × "+B.height,s("#author-original").href=B.file,s("#author-download").href=B.file,s("#author-download").download=B.title+"."+B.file.split(".").pop(),s("#author-position").textContent=`${h+1} / ${i.length}`,o.classList.remove("zoomed"),o.scrollTop=o.scrollLeft=0,l.textContent="放大查看",l.setAttribute("aria-pressed","false"),l.disabled=!0,c.textContent="正在准备高清照片…",o.setAttribute("aria-busy","true");const te=r.peek(B.file);if(n?.setBusy?.("gallery-original",!te),te)F(te,B);else{const se=t.createElement("img");se.src=B.thumb,F(se,B,{preview:!0})}try{const se=await Q.ready;if(!u.isCurrent(S)||p)return;n?.setBusy?.("gallery-original",!1),F(se,B),l.disabled=B.width<700,o.setAttribute("aria-busy","false"),c.textContent=B.quality==="screenshot-crop"?"这张来自观演记录截图，适合按原尺寸查看。":"",b()}catch(se){if(!u.isCurrent(S)||p||se.name==="AbortError")return;n?.setBusy?.("gallery-original",!1),o.setAttribute("aria-busy","false"),c.textContent=se.name==="TimeoutError"?"网络较慢，暂时显示预览图。":"高清照片未能加载，暂时显示预览图。",T.onclick=()=>_(h),c.appendChild(T)}}l.onclick=L,t.querySelectorAll("[data-author-photo]").forEach(R=>{R.onclick=()=>{p||(_(Number(R.dataset.authorPhoto)),a.showModal())};const S=B=>{if(p||a.open||B?.pointerType==="touch"||m===R)return;const Q=f(i[Number(R.dataset.authorPhoto)].file,{priority:"next",retry:!0});A(),m=R,v=Q,Q.ready.catch(()=>{})};R.addEventListener("pointerenter",S),R.addEventListener("focus",S),R.addEventListener("pointerleave",()=>{m===R&&t.activeElement!==R&&A()}),R.addEventListener("blur",()=>{m===R&&A()})}),s("#author-view-close").onclick=()=>a.close(),s("#author-prev").onclick=()=>_(h-1),s("#author-next").onclick=()=>_(h+1);const C=R=>{R.key==="ArrowLeft"&&(R.preventDefault(),_(h-1)),R.key==="ArrowRight"&&(R.preventDefault(),_(h+1))},D=()=>{u.invalidate(),x(),E(),A(),o.setAttribute("aria-busy","false"),o.replaceChildren(),c.textContent=""},N=()=>{t.hidden?(u.invalidate(),x(),E(),A(),o.setAttribute("aria-busy","false")):a.open&&!p&&_(h)},k=s("#visual-dialog"),G=()=>{A(),E()},V=[...t.querySelectorAll("[data-gallery-group]")].filter(R=>R.dataset.galleryGroup),z=R=>{R.currentTarget.dataset.galleryGroup!=="author"&&G()};return V.forEach(R=>R.addEventListener("click",z)),k?.addEventListener("close",G),t.addEventListener?.("visibilitychange",N),a.addEventListener("keydown",C),a.addEventListener("close",D),{prepare({priority:R="idle"}={}){return Promise.allSettled(i.slice(0,2).map(S=>r.prepare(S.thumb,{priority:R,retry:!0})))},dispose(){p=!0,D(),a.removeEventListener("keydown",C),a.removeEventListener("close",D),k?.removeEventListener("close",G),V.forEach(R=>R.removeEventListener("click",z)),t.removeEventListener?.("visibilitychange",N),e||r.dispose(),o.replaceChildren()}}}const cr=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Xv=180*1024*1024;function qv({getSelection:n,notify:e}){const t=z=>document.querySelector(z),i=[];let r,s,a=null,o=[],l=null,c=!1,u=null,h=0,p=-1,d=!1;const g=vo(),v=vo(),m=new Promise((z,R)=>{if(!window.indexedDB){R(new Error("这个浏览器不支持本地相册，请换一个现代浏览器"));return}const S=indexedDB.open("beast.personal.gallery.v1",1);let B=!1;const Q=se=>{B||(B=!0,clearTimeout(te),R(se))},te=setTimeout(()=>Q(new Error("本地相册暂时没有响应，请关闭其他小站页面后重试")),1e4);S.onupgradeneeded=()=>S.result.createObjectStore("media",{keyPath:"id"}),S.onsuccess=()=>{if(B){S.result.close();return}B=!0,clearTimeout(te),r=S.result,z()},S.onerror=()=>Q(S.error),S.onblocked=()=>Q(new Error("本地相册被其他页面占用，请关闭其他小站页面后重试"))});m.catch(z=>{t("#personal-empty").textContent=z.message,t("#personal-upload").disabled=!0});function f(z,R){return m.then(()=>new Promise((S,B)=>{const Q=r.transaction("media",z);let te;const se=R(Q.objectStore("media"));se&&(se.onsuccess=()=>{te=se.result}),Q.oncomplete=()=>S(te),Q.onerror=()=>B(Q.error),Q.onabort=()=>B(Q.error||new Error("保存中断"))}))}function A(){for(;i.length;)URL.revokeObjectURL(i.pop())}const E=z=>{const R=URL.createObjectURL(z);return i.push(R),R};function x(){c=!1,h++}function y(){if(c)return Promise.resolve(o);if(u?.revision===h)return u.promise;const z=h,R=f("readonly",B=>B.getAll()).then(B=>z!==h?y():(o=B.sort((Q,te)=>te.createdAt-Q.createdAt),c=!0,o)),S={revision:z,promise:R};return u=S,R.then(()=>{u===S&&(u=null)},()=>{u===S&&(u=null)}),R}async function T(){const z=v.next();try{if(c||(t("#personal-empty").hidden=!1,t("#personal-empty").textContent="正在读取本机相册…",t("#personal-grid").setAttribute("aria-busy","true")),await y(),!v.isCurrent(z)||(t("#personal-grid").setAttribute("aria-busy","false"),p===h))return;A();const R=o.reduce((S,B)=>S+B.blob.size+(B.thumbnail?.size||0),0);t("#personal-usage").textContent=`${o.length}条记录 · ${(R/1024/1024).toFixed(1)}MB / 180MB`,t("#personal-empty").hidden=o.length>0,t("#personal-empty").textContent="还没有现场记录。选一张照片或一段视频，把这一夜留在自己的相册里。",t("#personal-grid").innerHTML=o.map(S=>`<article class="personal-card"><button class="personal-open" data-personal-open="${S.id}" aria-label="查看${cr(S.title)}">${S.thumbnail?`<img src="${E(S.thumbnail)}" alt="${cr(S.title)}" loading="lazy">`:'<span class="personal-video-symbol">▷<small>现场视频</small></span>'}${S.kind==="video"?'<span class="personal-video-badge">视频</span>':""}</button><div><strong>${cr(S.title)}</strong><small>${cr(S.venue)}${S.zone?" · "+cr(S.zone):""}${S.row?" · "+S.row+"排":""}${S.date?" · "+cr(S.date):""}</small><footer><button data-personal-edit="${S.id}">编辑</button><button data-personal-download="${S.id}">保存原文件</button><button data-personal-remove="${S.id}">移除</button></footer></div></article>`).join(""),document.querySelectorAll("[data-personal-edit]").forEach(S=>S.onclick=()=>F(S.dataset.personalEdit)),document.querySelectorAll("[data-personal-open]").forEach(S=>S.onclick=()=>V(S.dataset.personalOpen)),document.querySelectorAll("[data-personal-remove]").forEach(S=>S.onclick=()=>b(S.dataset.personalRemove)),document.querySelectorAll("[data-personal-download]").forEach(S=>S.onclick=()=>_(S.dataset.personalDownload)),p=h}catch(R){if(!v.isCurrent(z))return;t("#personal-grid").setAttribute("aria-busy","false"),t("#personal-empty").hidden=!1,t("#personal-empty").textContent=R.message||"相册暂时无法读取，请稍后重试",e(R.name==="QuotaExceededError"?"浏览器存储空间不足，请先备份并移除部分文件":R.message||"相册暂时无法读取")}}async function L(z){if(!z.type.startsWith("image/"))return null;const R=URL.createObjectURL(z);try{const S=await Kh(R,{timeoutMs:15e3}),B=Math.min(1,720/Math.max(S.naturalWidth,S.naturalHeight)),Q=document.createElement("canvas");return Q.width=Math.max(1,Math.round(S.naturalWidth*B)),Q.height=Math.max(1,Math.round(S.naturalHeight*B)),Q.getContext("2d").drawImage(S,0,0,Q.width,Q.height),await new Promise(te=>Q.toBlob(te,"image/webp",.84))}finally{URL.revokeObjectURL(R)}}t("#personal-upload").onclick=()=>{if(g.invalidate(),d)return;const z=n();l=null,s=null,a=null,t("#personal-file").value="",t("#personal-file-label").textContent="选择照片或视频",t("#personal-save").disabled=!0,t("#personal-title").value="",t("#personal-zone").value=z.zone,t("#personal-row").value=z.row,t("#personal-seat").value=z.seat,t("#personal-editor").showModal()},t("#personal-file").onchange=async z=>{const R=g.next(),S=z.target.files[0];if(s=null,a=null,t("#personal-save").disabled=!0,t("#personal-file-label").textContent="选择照片或视频",!S)return;if(!["image/jpeg","image/png","image/webp","video/mp4","video/webm"].includes(S.type)){e("支持JPG、PNG、WebP照片，或MP4、WebM视频");return}const Q=S.type.startsWith("video/")?40*1024*1024:15*1024*1024;if(S.size>Q){e(S.type.startsWith("video/")?"单个视频请控制在40MB以内":"单张照片请控制在15MB以内");return}t("#personal-file-label").textContent="正在处理所选文件…";try{const te=await L(S);if(!g.isCurrent(R))return;a=te,s=S,t("#personal-file-label").textContent=`${S.name} · ${(S.size/1024/1024).toFixed(1)}MB`,t("#personal-title").value||(t("#personal-title").value=S.name.replace(/\.[^.]+$/,"").slice(0,60)),t("#personal-save").disabled=!1}catch{if(!g.isCurrent(R))return;t("#personal-file-label").textContent="选择照片或视频",e("这张图片暂时无法解码，请换成JPG或PNG格式")}},t("#personal-form").onsubmit=async z=>{if(z.preventDefault(),!s||d)return;const R=s;try{await y()}catch{e("本地相册暂时无法读取，请稍后重试");return}if(!s||s!==R||d)return;const S=t("#personal-title").value.trim();if(!S){t("#personal-title").focus();return}if(!l&&o.length>=30){e("相册最多保存30条记录，请先备份并移除部分文件");return}if(o.filter(te=>te.id!==l).reduce((te,se)=>te+se.blob.size+(se.thumbnail?.size||0),0)+s.size+(a?.size||0)>Xv){e("本地相册容量上限为180MB，请先备份并移除部分文件");return}t("#personal-save").disabled=!0,d=!0,t("#personal-file").disabled=!0;const Q={id:l||crypto.randomUUID(),title:S.slice(0,60),blob:s,thumbnail:a,fileName:s.name,kind:s.type.startsWith("video/")?"video":"photo",venue:t("#personal-venue").value,date:t("#personal-date").value,zone:t("#personal-zone").value.trim().slice(0,24),row:Math.min(999,Math.max(0,Number(t("#personal-row").value)||0)),seat:Math.min(999,Math.max(0,Number(t("#personal-seat").value)||0)),createdAt:o.find(te=>te.id===l)?.createdAt||Date.now()};try{await f("readwrite",te=>te.put(Q)),x(),t("#personal-editor").close(),await T(),e("已保存到当前浏览器，仅本机可见")}catch{e("保存失败，可能是浏览器存储空间不足"),t("#personal-save").disabled=!s}finally{d=!1,t("#personal-file").disabled=!1}};function F(z){if(d)return;g.invalidate();const R=o.find(S=>S.id===z);R&&(l=z,s=new File([R.blob],R.fileName,{type:R.blob.type}),a=R.thumbnail,t("#personal-file").value="",t("#personal-file-label").textContent=`${R.fileName} · 可重新选择文件`,t("#personal-title").value=R.title,t("#personal-venue").value=R.venue,t("#personal-date").value=R.date,t("#personal-zone").value=R.zone,t("#personal-row").value=R.row,t("#personal-seat").value=R.seat,t("#personal-save").disabled=!1,t("#personal-editor").showModal())}t("#personal-cancel").onclick=()=>{g.invalidate(),t("#personal-editor").close()},t("#personal-editor").addEventListener("close",()=>{g.invalidate(),s=null,a=null,t("#personal-save").disabled=!0});async function b(z){const R=o.find(S=>S.id===z);if(R&&confirm(`从本地相册移除《${R.title}》？你的原始文件不会被删除。`))try{await f("readwrite",S=>S.delete(z)),x(),await T(),e("已从当前浏览器相册移除")}catch{e("移除失败，请稍后重试")}}function _(z){const R=o.find(Q=>Q.id===z);if(!R)return;const S=URL.createObjectURL(R.blob),B=document.createElement("a");B.href=S,B.download=R.fileName,B.click(),setTimeout(()=>URL.revokeObjectURL(S),1e4)}let C,D;const N=vo(),k=document.createElement("p");k.id="personal-view-status",k.setAttribute("role","status"),t("#personal-view-meta").after(k);function G(){N.invalidate(),clearTimeout(D);const z=t("#personal-view-video"),R=t("#personal-view-image");z.onloadedmetadata=z.onloadeddata=z.onerror=R.onload=R.onerror=null,z.pause(),z.removeAttribute("src"),z.load(),R.removeAttribute("src"),C&&URL.revokeObjectURL(C),C=null}function V(z){const R=o.find(Ue=>Ue.id===z);if(!R)return;G();const S=N.next();k.textContent=R.kind==="video"?"正在准备视频…":"正在准备照片…",C=URL.createObjectURL(R.blob),t("#personal-view-title").textContent=R.title,t("#personal-view-meta").textContent=`${R.venue}${R.zone?" · "+R.zone:""}${R.row?" · "+R.row+"排":""}${R.seat?R.seat+"座":""} · 仅本机可见`;const B=t("#personal-view-image"),Q=t("#personal-view-video");B.hidden=R.kind==="video",Q.hidden=R.kind!=="video";const te=()=>{N.isCurrent(S)&&(clearTimeout(D),k.textContent="")},se=()=>{if(!N.isCurrent(S))return;clearTimeout(D),k.textContent=R.kind==="video"?"这个浏览器暂时无法播放该视频编码，可以保存原文件查看。":"照片暂时无法显示，可以保存原文件查看。";const Ue=document.createElement("button");Ue.textContent="保存原文件",Ue.style.cssText="margin-left:10px;text-decoration:underline;color:#dac28f",Ue.onclick=()=>_(z),k.appendChild(Ue)};D=setTimeout(se,15e3),R.kind==="video"?(Q.onloadedmetadata=te,Q.onloadeddata=te,Q.onerror=se,Q.src=C,Q.muted=!0):(B.onload=te,B.onerror=se,B.src=C),t("#personal-viewer").open||t("#personal-viewer").showModal()}return t("#personal-viewer").addEventListener("close",()=>{G(),k.textContent=""}),t("#personal-view-close").onclick=()=>t("#personal-viewer").close(),{open:T,prepare:y}}const Qr={idle:0,next:1,interactive:2},Yv=new Set(["image","audio","gpu"]);function oi(n,e){const t=new Error(e);return t.name=n,t}function $v(){const n=globalThis;return{now:()=>n.performance?.now?.()??Date.now(),setTimeout:(e,t)=>n.setTimeout(e,t),clearTimeout:e=>n.clearTimeout(e),requestIdleCallback:n.requestIdleCallback?e=>n.requestIdleCallback(e):null,cancelIdleCallback:n.cancelIdleCallback?e=>n.cancelIdleCallback(e):null,hidden:()=>n.document?.hidden===!0,online:()=>n.navigator?.onLine!==!1,connection:()=>n.navigator?.connection??null,inputPending:()=>n.navigator?.scheduling?.isInputPending?.()===!0,subscribe:e=>{const t=[[n.document,"visibilitychange"],[n.window,"online"],[n.window,"offline"],[n.navigator?.connection,"change"]];for(const[i,r]of t)i?.addEventListener?.(r,e);return()=>{for(const[i,r]of t)i?.removeEventListener?.(r,e)}}}}function jv({env:n={},maxQueued:e=20,maxHistory:t=24,maxDeferrals:i=3,interactionDelay:r=320,timeoutMs:s=12e3,retries:a=1,minIdleMs:o=4}={}){const l={...$v(),...n},c=new Map,u=new Set;e=Math.max(1,Math.floor(e)),t=Math.max(0,Math.floor(t)),r=Math.max(0,r),s=Math.max(1,s),a=Math.min(2,Math.max(0,Math.floor(a)));let h=!1,p=!1,d=null,g=null,v=null,m=null,f=0,A=-1/0,E=!1;i=Math.max(0,Math.floor(i));const x={completed:0,failed:0,cancelled:0,retried:0,deferred:0,rejected:0},y=()=>{const S=l.connection?.()??{},B=S.effectiveType;return{hidden:!!l.hidden?.(),online:l.online?.()!==!1,saveData:S.saveData===!0,mediaHeadroom:E,slow:B==="slow-2g"||B==="2g"||B==="3g"||Number.isFinite(S.downlink)&&S.downlink>0&&S.downlink<1.5}};function T(){v!==null&&(l.clearTimeout(v),v=null),m!==null&&(l.cancelIdleCallback?.(m),m=null)}function L(S){c.get(S.key)===S&&c.delete(S.key)}function F(){const S=[...c.values()].filter(B=>B.state==="done"||B.state==="failed");for(;S.length>t;){const B=S.shift();c.delete(B.key)}}function b(S,B){return S.kind==="gpu"||B.online&&(!B.saveData&&(!B.slow||B.mediaHeadroom)||S.priority==="interactive")}function _(S,B){return(!g||S.kind!=="gpu")&&b(S,B)}function C(S){g=S,S.state="blocked",d===S&&(d=null)}function D(S){!d||d.kind==="gpu"||d.cancelled||d.controller?.signal.aborted||!S.hidden&&!u.size&&b(d,S)||(d.pauseRequested=!0,d.controller.abort(oi("AbortError","Foreground or connection policy needs the resource lane")))}function N(){if(T(),!h||p)return;const S=y();if(d){D(S);return}if(u.size||S.hidden)return;const B=[...c.values()].filter(Ie=>Ie.state==="queued"&&_(Ie,S));if(!B.length)return;const Q=l.now(),te=Math.min(...B.map(Ie=>Ie.notBefore)),se=Math.max(0,A-Q,te-Q);if(se>0){v=l.setTimeout(()=>{v=null,N()},se);return}const Ue=Ie=>{if(m=null,v=null,p||!h||d||u.size||y().hidden)return;if(l.now()<A||l.inputPending?.()||Ie&&Ie.timeRemaining()<o){v=l.setTimeout(()=>{v=null,N()},50);return}const K=y(),ne=l.now(),de=[...c.values()].filter(Ce=>Ce.state==="queued"&&Ce.notBefore<=ne&&_(Ce,K)).sort((Ce,ge)=>Qr[ge.priority]-Qr[Ce.priority]||Ce.order-ge.order)[0];de?k(de):N()};l.requestIdleCallback?m=l.requestIdleCallback(Ue):v=l.setTimeout(()=>Ue(null),32)}function k(S){d=S,S.state="running",S.attempts++,S.startedAt=l.now(),S.pauseRequested=!1,S.timeoutError=null;const B=new AbortController;S.controller=B;let Q;const te=new Promise((K,ne)=>{Q=()=>ne(B.signal.reason??oi("AbortError","Resource preparation cancelled")),B.signal.addEventListener("abort",Q,{once:!0})}),se=l.setTimeout(()=>{const K=oi("TimeoutError",`Resource preparation timed out: ${S.key}`);S.kind==="gpu"&&(S.timeoutError=K,S.error=K.message,S.reject(K),S.failureCounted=!0,x.failed++,C(S)),B.abort(K),S.kind==="gpu"&&N()},S.timeoutMs);S.timer=se;const Ue=Promise.resolve().then(()=>{if(B.signal.aborted)throw B.signal.reason;return S.run(B.signal)});S.kind==="gpu"?(te.catch(()=>{}),Ue.then(K=>Ie(S.timeoutError,K),K=>Ie(S.timeoutError??K))):Promise.race([Ue,te]).then(K=>Ie(null,K),K=>Ie(K));function Ie(K,ne){l.clearTimeout(se),B.signal.removeEventListener("abort",Q),S.controller=null,S.timer=null,d===S&&(d=null),g===S&&(g=null),S.cancelled||p?(S.state="cancelled",L(S),S.reject(K??oi("AbortError","Resource preparation cancelled"))):S.pauseRequested?(S.deferrals++,x.deferred++,S.deferrals<=i?(S.state="queued",S.notBefore=l.now(),S.error=null):(S.state="cancelled",L(S),x.cancelled++,S.reject(oi("AbortError","Resource preparation deferred too often; retry on user intent")))):K?(S.failures++,!S.timeoutError&&S.failures<=S.retries?(S.state="queued",S.notBefore=l.now()+Math.min(1e3,250*S.failures),S.error=String(K.message??K),x.retried++):(S.state="failed",S.finishedAt=l.now(),S.error=String(K.message??K),S.failureCounted||(S.failureCounted=!0,x.failed++),S.reject(K))):(S.state="done",S.finishedAt=l.now(),S.error=null,x.completed++,S.resolve(ne),S.cacheResult||L(S)),F(),N()}}function G({key:S,priority:B="idle",kind:Q="image",run:te,timeoutMs:se=s,retries:Ue=a,cacheResult:Ie=!0}={}){if(typeof S!="string"||!S||typeof te!="function"||!Yv.has(Q)||!Object.prototype.hasOwnProperty.call(Qr,B))throw new TypeError("A resource task needs key, kind, priority and run(signal)");if(p){const ge=Promise.reject(oi("AbortError","Resource preparation disposed"));return ge.catch(()=>{}),ge}const K=c.get(S);if(K)return(K.state==="queued"||K.state==="running")&&Qr[B]>Qr[K.priority]&&(K.priority=B,N()),K.promise;if([...c.values()].filter(ge=>ge.state==="queued"||ge.state==="running").length>=e){x.rejected++;const ge=Promise.reject(oi("QueueFullError","Resource preparation queue is full"));return ge.catch(()=>{}),ge}let ne,de;const Ce=new Promise((ge,Xe)=>{ne=ge,de=Xe});return Ce.catch(()=>{}),c.set(S,{key:S,priority:B,kind:Q,run:te,timeoutMs:Number.isFinite(se)?Math.max(1,se):s,retries:Number.isFinite(Ue)?Math.min(2,Math.max(0,Math.floor(Ue))):a,cacheResult:Ie,promise:Ce,resolve:ne,reject:de,state:"queued",attempts:0,failures:0,deferrals:0,order:f++,notBefore:0,error:null,controller:null,timer:null,cancelled:!1}),N(),Ce}function V(S){const B=c.get(S);if(!B)return!1;if(B.state==="done"||B.state==="failed")return c.delete(S),!0;if(B.cancelled)return!1;B.cancelled=!0,B.failureCounted||x.cancelled++;const Q=oi("AbortError",`Resource preparation cancelled: ${S}`);return L(B),B.reject(Q),B.controller?(l.clearTimeout(B.timer),B.kind==="gpu"&&C(B),B.controller.abort(Q),N()):(B.state="cancelled",N()),!0}function z(){const S=y(),B=l.now(),Q=[...c.values()],te=se=>({key:se.key,priority:se.priority,kind:se.kind,state:se.state,attempts:se.attempts,deferrals:se.deferrals,error:se.error,elapsedMs:se.startedAt===void 0?0:Math.max(0,(se.finishedAt??B)-se.startedAt)});return{started:h,disposed:p,busy:[...u],policy:S,cooldownMs:Math.max(0,A-B),running:d?te(d):null,gpuBlocked:g?te(g):null,queued:Q.filter(se=>se.state==="queued").map(te),history:Q.filter(se=>se.state==="done"||se.state==="failed").map(te),...x}}const R=l.subscribe?.(()=>N());return{enqueue:G,cancel:V,forget(S){const B=c.get(S);return!B||B.state!=="done"&&B.state!=="failed"?!1:c.delete(S)},start(){p||h||(h=!0,N())},touch(){p||(A=l.now()+r,N())},setMediaHeadroom(S){E!==!!S&&(E=!!S,N())},setBusy(S,B){B?u.add(S):u.delete(S),N()},refresh:N,snapshot:z,dispose(){if(!p){p=!0,T(),R?.();for(const S of[...c.keys()])V(S);c.clear(),u.clear()}}}}function Kv({warmup:n,renderer:e,scene:t,camera:i,urls:r,loadImage:s,createTexture:a,fallback:o,onTexture:l=()=>{},report:c=()=>{}}){const u=r.map(()=>o),h=new Map,p=new Map;let d=!1;const g=(f,A)=>Promise.resolve().then(A).then(E=>(c({type:"scene-resource-ready",key:f}),E));function v(f,A="idle"){if(d||!r[f])return Promise.resolve();if(h.has(f))return Promise.resolve(h.get(f));const E="stage-image:"+f,x=n.enqueue({key:E,kind:"image",priority:A,cacheResult:!1,retries:0,run:y=>s(r[f],{signal:y})}).then(y=>{if(!d)return n.enqueue({key:"stage-upload:"+f,kind:"gpu",priority:A,cacheResult:!1,retries:0,run:()=>{if(d)return;let T=h.get(f);T||(T=a(y,f));try{e.initTexture(T)}catch(L){throw T.dispose(),L}return h.set(f,T),u[f]=T,l(f,T),c({type:"stage-texture-ready",index:f}),T}})});return p.set(f,x),x.catch(()=>{n.forget?.(E),n.forget?.("stage-upload:"+f)}).finally(()=>{p.get(f)===x&&p.delete(f)}).catch(()=>{}),x}function m(f,A,E="idle"){return n.enqueue({key:"stage-program:"+f,kind:"gpu",priority:E,retries:0,timeoutMs:2e4,run:x=>g(f,async()=>{d||x.aborted||await e.compileAsync(A,i,t)})})}return{textures:u,prepareTexture:v,prepare({objects:f=[]}={}){const A=r.map((E,x)=>v(x,x===0?"next":"idle"));return f.forEach((E,x)=>A.push(m(String(x),E))),Promise.allSettled(A)},dispose(){d=!0,h.forEach(f=>f.dispose()),h.clear(),p.clear()}}}const Jh=""+new URL("sky-reference-king-xeMxM6Wq.jpg",import.meta.url).href,Qh=""+new URL("sky-reference-whale-CdIzjOrU.jpg",import.meta.url).href,ed=""+new URL("sky-reference-peace-BSvc3sxh.jpg",import.meta.url).href,En=[{id:"concert-01",title:"狐狸",group:"concert",order:1,duration:30,note:"",scene:1,file:"audio/concert-01.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E7%8B%90%E7%8B%B8/1787448185?i=1787448197&uo=4",sha256:"0a71f026eacb6ebfc10bd858bba1e3e31a6f92297b24ee89811f70056d8fab12",catalogId:1787448197},{id:"concert-02",title:"野心",group:"concert",order:2,duration:30,note:"",scene:0,file:"audio/concert-02.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E9%87%8E%E5%BF%83/1787447447?i=1787447721&uo=4",sha256:"f63162b34dc303a788715f9653ecfe62fae1b397b25929efcc126e628d420035",catalogId:1787447721},{id:"concert-03",title:"金斧子银斧子",group:"concert",order:3,duration:30,note:"",scene:1,file:"audio/concert-03.m4a",artist:"薛之谦",album:"金斧子银斧子 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%87%91%E6%96%A7%E5%AD%90%E9%93%B6%E6%96%A7%E5%AD%90/1830949632?i=1830949637&uo=4",sha256:"4f20dd239079b06f1b4de042dcd2a1949c3caee85274c760a3f345f77718f0d3",catalogId:1830949637},{id:"concert-04",title:"丑八怪",group:"concert",order:4,duration:30,note:"",scene:0,file:"audio/concert-04.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%B8%91%E5%85%AB%E6%80%AA/1788255148?i=1788255149&uo=4",sha256:"20a8549bbb5c65e6de28e7604ee938fbbb6164c03df8eaa350904dc2b7cbea41",catalogId:1788255149},{id:"concert-05",title:"动物世界",group:"concert",order:5,duration:30,note:"",scene:1,file:"audio/concert-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%8A%A8%E7%89%A9%E4%B8%96%E7%95%8C/1787509715?i=1787509716&uo=4",sha256:"90065810de890a8b880211ba13fc71eb17e3a87f72b1ac871cda361d34d0169d",catalogId:1787509716},{id:"concert-06",title:"怪咖",group:"concert",order:6,duration:30,note:"",scene:1,file:"audio/concert-06.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%80%AA%E5%92%96/1787448185?i=1787448195&uo=4",sha256:"cef6291a75b45dd1bc6412d0d849be0f9157e2ce2a487511326192557b92ec1b",catalogId:1787448195},{id:"concert-07",title:"渡",group:"concert",order:7,duration:30,note:"",scene:0,file:"audio/concert-07.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%B8%A1/1787509715?i=1787509727&uo=4",sha256:"f3661c42fcd09899d60f38e2642319a250673182984c0e38095b773b29fb5855",catalogId:1787509727},{id:"concert-08",title:"我的雅典娜",group:"concert",order:8,duration:30,note:"",scene:0,file:"audio/concert-08.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9A%84%E9%9B%85%E5%85%B8%E5%A8%9C/1787930075?i=1787930080&uo=4",sha256:"b629d63107a89281ba5c128a738344e828c8b66a723d950d9dcd847d64966c0a",catalogId:1787930080},{id:"concert-09",title:"凤毛麟角",group:"concert",order:9,duration:30,note:"",scene:1,file:"audio/concert-09.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%87%A4%E6%AF%9B%E9%BA%9F%E8%A7%92/1787448335?i=1787448337&uo=4",sha256:"b0305b8a354634a5c2af1e53bae7e084ba8ecf1f9ccd1d6e7eb23b598be573f9",catalogId:1787448337},{id:"concert-10",title:"背过手",group:"concert",order:10,duration:30,note:"",scene:0,file:"audio/concert-10.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E8%83%8C%E8%BF%87%E6%89%8B/1787509715?i=1787509726&uo=4",sha256:"d85742d522479548674cb27120db14ebf0da6167a7e85fc11f4361350ad6c4a0",catalogId:1787509726},{id:"concert-12",title:"念",group:"concert",order:12,duration:30,note:"",scene:0,file:"audio/concert-12.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%BF%B5/1787930095?i=1787930236&uo=4",sha256:"e475dd716ed9e590cbf7d1aee7c1e1a30fe2c2d0e5f7b042cadd1a5427387537",catalogId:1787930236},{id:"concert-13",title:"粉钻",group:"concert",order:13,duration:30,note:"广州现场 · 观众录制",scene:3,file:"audio/concert-13.m4a",artist:"薛之谦",album:"万兽之王 · 广州站 2026-03-20（观众录制）",sourceUrl:"https://www.youtube.com/watch?v=o4u9wdoxHYI",sha256:"f23b91f8bf35cfc945d5175d07bffa5e95e3b159d39d010ed508bdcdcfbab814",sourceType:"audience-live",sourceStart:120,sourceEnd:150},{id:"concert-14",title:"违背的青春",group:"concert",order:14,duration:30,note:"",scene:2,file:"audio/concert-14.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9D%E8%83%8C%E7%9A%84%E9%9D%92%E6%98%A5/1787448185?i=1787448425&uo=4",sha256:"0e5b729ac3df616b44b3371bd8c7957c0b2d1ff5facf56a9aeb375a917eba88d",catalogId:1787448425},{id:"concert-15",title:"骆驼",group:"concert",order:15,duration:30,note:"",scene:1,file:"audio/concert-15.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E9%AA%86%E9%A9%BC/1787509715?i=1787509723&uo=4",sha256:"0412921477e0cdc9f9fbf36d83246e058b3968532b92e0114af96f151cf1cd55",catalogId:1787509723},{id:"concert-16",title:"认真的雪",group:"concert",order:16,duration:30,note:"",scene:0,file:"audio/concert-16.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA/1789061389?i=1789061392&uo=4",sha256:"b867e90f355110d7b80df258cfa50d2d6997d9e7e02b67de1b6b03ffcc541c8f",catalogId:1789061392},{id:"concert-17",title:"其实",group:"concert",order:17,duration:30,note:"",scene:0,file:"audio/concert-17.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E5%85%B6%E5%AE%9E/1788255148?i=1788255156&uo=4",sha256:"5d07c2027911885df35bab9b003ce6755b2e8ed84fe2270eac60b98258fe2145",catalogId:1788255156},{id:"concert-18",title:"平庸",group:"concert",order:18,duration:30,note:"现场版",scene:0,file:"audio/concert-18.m4a",artist:"薛之谦",album:"音乐缘计划2 第3期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E5%B9%B3%E5%BA%B8-live/1851707677?i=1851707683&uo=4",sha256:"9878d742997e5fd490856b720ccf660e32e5fbbef24af2190d07473ec758b0f8",catalogId:1851707683},{id:"concert-19",title:"在那天回不去的路上",group:"concert",order:19,duration:30,note:"",scene:0,file:"audio/concert-19.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%9C%A8%E9%82%A3%E5%A4%A9%E5%9B%9E%E4%B8%8D%E5%8E%BB%E7%9A%84%E8%B7%AF%E4%B8%8A/1787930095?i=1787930235&uo=4",sha256:"4318ec6debadf1e45be6fc569d7221b9ae86eff5ab6781874bcc8df601a5da4d",catalogId:1787930235},{id:"concert-20",title:"最好",group:"concert",order:20,duration:30,note:"",scene:0,file:"audio/concert-20.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%9C%80%E5%A5%BD/1787448185?i=1787448411&uo=4",sha256:"4f5481f2b44201583bd029b1b688c5be3949c1150dae233c8d0392eaeb554986",catalogId:1787448411},{id:"concert-21",title:"刚刚好",group:"concert",order:21,duration:30,note:"",scene:0,file:"audio/concert-21.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E5%88%9A%E5%88%9A%E5%A5%BD/1787929894?i=1787929902&uo=4",sha256:"07870b02f3d7ca5e189fceb410436a9bc89a249d72d74664bf201562f0d5e95f",catalogId:1787929902},{id:"concert-22",title:"哑巴",group:"concert",order:22,duration:30,note:"",scene:0,file:"audio/concert-22.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E5%93%91%E5%B7%B4/1787448185?i=1787448422&uo=4",sha256:"1edaefcf675653e979815a0710751c7da8edc84d3e086bd583418a98c2c69fe5",catalogId:1787448422},{id:"concert-23",title:"你还要我怎样",group:"concert",order:23,duration:30,note:"",scene:0,file:"audio/concert-23.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%98%E8%A6%81%E6%88%91%E6%80%8E%E6%A0%B7/1788255148?i=1788255151&uo=4",sha256:"82623585d86d760c9f0d9a42e828bf9166a8fbba702a783a329d605566e57369",catalogId:1788255151},{id:"concert-25",title:"像风一样",group:"concert",order:25,duration:30,note:"",scene:0,file:"audio/concert-25.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%83%8F%E9%A3%8E%E4%B8%80%E6%A0%B7/1787509715?i=1787509720&uo=4",sha256:"45a670a7d0bfcedde80275fc067587187dc3593d9437ffe7fbff4c17b9e6f6a7",catalogId:1787509720},{id:"concert-27",title:"绅士",group:"concert",order:27,duration:30,note:"",scene:0,file:"audio/concert-27.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E7%BB%85%E5%A3%AB/1787929894?i=1787930251&uo=4",sha256:"7e660a18edced6d5e3bb951a6870b9f1534467849a34dc4c76636233bf485302",catalogId:1787930251},{id:"concert-28",title:"意外",group:"concert",order:28,duration:30,note:"",scene:0,file:"audio/concert-28.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%84%8F%E5%A4%96/1788255148?i=1788255150&uo=4",sha256:"3e34153fe6f2b4951fa146c9dbda064b361b9f2bc8345b8386a34a432c656b3e",catalogId:1788255150},{id:"concert-29",title:"Nothing",group:"concert",order:29,duration:30,note:"",scene:0,file:"audio/concert-29.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/nothing/1787930095?i=1787930216&uo=4",sha256:"5b085dea5ee017e2f2ccb8ff32340b9b32835b87044f9fe460bb30e80f14dfe6",catalogId:1787930216},{id:"concert-30",title:"天外来物",group:"concert",order:30,duration:30,note:"",scene:2,file:"audio/concert-30.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E5%A4%A9%E5%A4%96%E6%9D%A5%E7%89%A9/1787447447?i=1787447448&uo=4",sha256:"08a9f5b315bd76e8d38186cb6f1c1f879fea4f777759b0ac633c63fe4612f4be",catalogId:1787447448},{id:"concert-31",title:"深深爱过你",group:"concert",order:31,duration:30,note:"前世版",scene:2,file:"audio/concert-31.m4a",artist:"薛之谦",album:"深深爱过你",sourceUrl:"https://music.apple.com/us/album/%E6%B7%B1%E6%B7%B1%E7%88%B1%E8%BF%87%E4%BD%A0-%E5%89%8D%E4%B8%96/1787447459?i=1787447461&uo=4",sha256:"2a6b00fce2456a402b4388ee8cfd37fd3fa5f03691b6f088a067d5b66f34c2f8",catalogId:1787447461},{id:"concert-32",title:"方圆几里",group:"concert",order:32,duration:30,note:"",scene:0,file:"audio/concert-32.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%96%B9%E5%9C%86%E5%87%A0%E9%87%8C/1788255148?i=1788255157&uo=4",sha256:"4f90f808ff090b9710a9bb0e8140be09de45f014a15162e7a586a57f24f592da",catalogId:1788255157},{id:"concert-33",title:"跃",group:"concert",order:33,duration:30,note:"",scene:2,file:"audio/concert-33.m4a",artist:"薛之谦",album:"跃 - Single",sourceUrl:"https://music.apple.com/us/album/%E8%B7%83/1826958519?i=1826958520&uo=4",sha256:"f8cdf17d03b0a0b70329a26426dde1bd50f97fd6e7d772cdc5e1ee52e7dfa818",catalogId:1826958520},{id:"chorus-01",title:"陪你去流浪",group:"chorus",order:1,duration:30,note:"",scene:2,file:"audio/chorus-01.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E9%99%AA%E4%BD%A0%E5%8E%BB%E6%B5%81%E6%B5%AA/1787447756?i=1787447868&uo=4",sha256:"674809c656d623c4f25a3579c9bb7947a569d9dc05d9954310f3f3d29d5e718b",catalogId:1787447868},{id:"chorus-02",title:"演员",group:"chorus",order:2,duration:30,note:"",scene:0,file:"audio/chorus-02.m4a",artist:"薛之谦",album:"绅士 - Single",sourceUrl:"https://music.apple.com/us/album/%E6%BC%94%E5%91%98/1787929823?i=1787929825&uo=4",sha256:"f2938912f450942b9d89a63756e5275ae338da8f50fe689c1e8c5eea56e7260f",catalogId:1787929825},{id:"chorus-03",title:"崇拜",group:"chorus",order:3,duration:30,note:"",scene:1,file:"audio/chorus-03.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%B4%87%E6%8B%9C/1787930095?i=1787930222&uo=4",sha256:"7003b5d8d380f1177e0332202c591166ffebe25e9bcd137384dd977ae1689cac",catalogId:1787930222},{id:"chorus-04",title:"倾城",group:"chorus",order:4,duration:30,note:"",scene:0,file:"audio/chorus-04.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E5%80%BE%E5%9F%8E/1789061268?i=1789061559&uo=4",sha256:"d3a0e0fae18a1894628c54a32fdc69a06c68a9ae4922110e723871b3af85109c",catalogId:1789061559},{id:"chorus-05",title:"暧昧",group:"chorus",order:5,duration:30,note:"",scene:0,file:"audio/chorus-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%9A%A7%E6%98%A7/1787509715?i=1787509717&uo=4",sha256:"632d5f0aafd3f305e7d3912045b51f3319077536a4db12ee4637bd0e091e27fb",catalogId:1787509717},{id:"chorus-06",title:"可",group:"chorus",order:6,duration:30,note:"合唱版",scene:0,file:"audio/chorus-06.m4a",artist:"张靓颖 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%AF/1787448335?i=1787448341&uo=4",sha256:"2679d62d1b9da3b09e3160d74aedaac7996a2e40511fb066fbe0e17726a7d6e5",catalogId:1787448341},{id:"chorus-07",title:"洛城",group:"chorus",order:7,duration:30,note:"",scene:0,file:"audio/chorus-07.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E6%B4%9B%E5%9F%8E/1787448335?i=1787448344&uo=4",sha256:"4a6c88e27ea3c10e0e9f0a7629eb5f1f8889a38976e1fe6b325b26f5e57c854b",catalogId:1787448344},{id:"chorus-08",title:"把你揉碎捏成苹果",group:"chorus",order:8,duration:30,note:"",scene:0,file:"audio/chorus-08.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E6%8A%8A%E4%BD%A0%E6%8F%89%E7%A2%8E%E6%8D%8F%E6%88%90%E8%8B%B9%E6%9E%9C/1787447447?i=1787447720&uo=4",sha256:"7ff40141dbdfcc454fc6b18926d8a4f3963c92a7e7c3ddda93b1aae64d4ce0cc",catalogId:1787447720},{id:"chorus-09",title:"耗尽",group:"chorus",order:9,duration:30,note:"合唱版",scene:0,file:"audio/chorus-09.m4a",artist:"郭聪明 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%80%97%E5%B0%BD/1787447447?i=1787447729&uo=4",sha256:"5e73613958275394271494267a85be749b008db4cb42b6394554549a1efddb16",catalogId:1787447729},{id:"chorus-10",title:"聊表心意",group:"chorus",order:10,duration:30,note:"合唱版",scene:0,file:"audio/chorus-10.m4a",artist:"刘惜君 / 薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%81%8A%E8%A1%A8%E5%BF%83%E6%84%8F/1787447756?i=1787447980&uo=4",sha256:"61f8d6d90d9f7d3b576458f892ea32fb6bd4ef2719dab09bb1eaf90bce330f61",catalogId:1787447980},{id:"chorus-11",title:"霸王别姬",group:"chorus",order:11,duration:30,note:"合唱版",scene:0,file:"audio/chorus-11.m4a",artist:"薛之谦 / 张靓颖",album:"霸王别姬 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%9C%B8%E7%8E%8B%E5%88%AB%E5%A7%AC/1840717094?i=1840717096&uo=4",sha256:"1a1e1fdbb8def3b4f930eb5dc240cf06d8654c4160c326d6559d23cd0f6e54c4",catalogId:1840717096},{id:"chorus-13",title:"伏笔",group:"chorus",order:13,duration:30,note:"",scene:0,file:"audio/chorus-13.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E4%BC%8F%E7%AC%94/1789061342?i=1789061355&uo=4",sha256:"bd1f4311299890cf1c10d4101f94331591d372c8f1d187409b5212dd15ff53a5",catalogId:1789061355},{id:"chorus-14",title:"一半",group:"chorus",order:14,duration:30,note:"",scene:0,file:"audio/chorus-14.m4a",artist:"薛之谦",album:"一半 - Single",sourceUrl:"https://music.apple.com/us/album/%E4%B8%80%E5%8D%8A/1787447244?i=1787447245&uo=4",sha256:"6f8654c307354f56334a91ab2dc7034f5a3120263674aa630e8b7d55ebfc0269",catalogId:1787447245},{id:"chorus-15",title:"你过得好吗",group:"chorus",order:15,duration:30,note:"",scene:0,file:"audio/chorus-15.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%87%E5%BE%97%E5%A5%BD%E5%90%97/1789061268?i=1789061543&uo=4",sha256:"ed48acc121f06d1d311d2d76b5d9905141fbe631b7e18d5e49bdf37a381d2fd4",catalogId:1789061543},{id:"chorus-16",title:"我终于成了别人的女人",group:"chorus",order:16,duration:30,note:"",scene:0,file:"audio/chorus-16.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%BB%88%E4%BA%8E%E6%88%90%E4%BA%86%E5%88%AB%E4%BA%BA%E7%9A%84%E5%A5%B3%E4%BA%BA/1789061342?i=1789061581&uo=4",sha256:"ca90a8d9148c46c762f3b37fd11548e89736caf4aa9dd69641d294c97bcea006",catalogId:1789061581},{id:"chorus-17",title:"我知道你都知道",group:"chorus",order:17,duration:30,note:"",scene:0,file:"audio/chorus-17.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9F%A5%E9%81%93%E4%BD%A0%E9%83%BD%E7%9F%A5%E9%81%93-%E8%83%9C%E5%A5%B3%E7%9A%84%E4%BB%A3%E4%BB%B7-%E7%94%B5%E8%A7%86%E5%89%A7%E6%8F%92%E6%9B%B2/1789061342?i=1789061343&uo=4",sha256:"67bf6028fb546195d58c81ba9c801976bab118753b874ef9f8680154892f93f8",catalogId:1789061343},{id:"chorus-18",title:"我好像在哪见过你",group:"chorus",order:18,duration:30,note:"",scene:0,file:"audio/chorus-18.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0/1787929894?i=1787929908&uo=4",sha256:"7d35051e688a69c433d387a5eb0d7a3bc5349b6813db2aeaac17f11cb9d83794",catalogId:1787929908},{id:"chorus-19",title:"我害怕",group:"chorus",order:19,duration:30,note:"",scene:0,file:"audio/chorus-19.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%AE%B3%E6%80%95/1787509715?i=1787509728&uo=4",sha256:"724841aedcff2182e4516c090a4f5163ab8b438552da82e338a22a2c5be35d9e",catalogId:1787509728},{id:"chorus-21",title:"有没有",group:"chorus",order:21,duration:30,note:"",scene:0,file:"audio/chorus-21.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%9C%89%E6%B2%A1%E6%9C%89/1788255148?i=1788255152&uo=4",sha256:"f5ac1d66fa19d38710c70085a03fcec661c16d7c0044a91704eb6909f43cc3a9",catalogId:1788255152},{id:"chorus-22",title:"这么久没见",group:"chorus",order:22,duration:30,note:"",scene:0,file:"audio/chorus-22.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E4%B9%88%E4%B9%85%E6%B2%A1%E8%A7%81/1787447756?i=1787447850&uo=4",sha256:"537a3dd0d97cc3211d6d78bf09cd3ba16f179b14e9c9cb05985f8abbe1ad4df4",catalogId:1787447850},{id:"chorus-23",title:"下雨了",group:"chorus",order:23,duration:30,note:"",scene:0,file:"audio/chorus-23.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E4%B8%8B%E9%9B%A8%E4%BA%86/1787929894?i=1787930588&uo=4",sha256:"d4e1b5a056f4971775bddacecfe079b0ee725ed5294ef770b81e209ed95aca68",catalogId:1787930588},{id:"chorus-24",title:"那是你离开了北京的生活",group:"chorus",order:24,duration:30,note:"",scene:0,file:"audio/chorus-24.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%82%A3%E6%98%AF%E4%BD%A0%E7%A6%BB%E5%BC%80%E4%BA%86%E5%8C%97%E4%BA%AC%E7%9A%84%E7%94%9F%E6%B4%BB/1787448185?i=1787448424&uo=4",sha256:"b08ae6f91d36b2f3a09d29bde89d0ed7ee646637df3681229e98e42a8d2681ac",catalogId:1787448424},{id:"chorus-25",title:"爱的期限",group:"chorus",order:25,duration:30,note:"",scene:0,file:"audio/chorus-25.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E7%9A%84%E6%9C%9F%E9%99%90/1789061268?i=1789061550&uo=4",sha256:"c1e3e0263ce70171e0be32dc31b36d879d3f3a34c08653c7b14d8a93e1c249f6",catalogId:1789061550},{id:"chorus-26",title:"笑场",group:"chorus",order:26,duration:30,note:"",scene:0,file:"audio/chorus-26.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E7%AC%91%E5%9C%BA/1787447756?i=1787447851&uo=4",sha256:"374c667623176d012f4edb8aaac827b9c0c916ce99d617e16f6bd534b8fde477",catalogId:1787447851},{id:"chorus-27",title:"苏黎世的从前",group:"chorus",order:27,duration:30,note:"",scene:0,file:"audio/chorus-27.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E8%8B%8F%E9%BB%8E%E4%B8%96%E7%9A%84%E4%BB%8E%E5%89%8D/1789061268?i=1789061539&uo=4",sha256:"af9f928819c9ef8f4538513e4d7a712187f6b5b5b1a0113a28fef8588679c2da",catalogId:1789061539},{id:"chorus-28",title:"纸船",group:"chorus",order:28,duration:30,note:"合唱版",scene:0,file:"audio/chorus-28.m4a",artist:"郁可唯 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E7%BA%B8%E8%88%B9/1787447447?i=1787447733&uo=4",sha256:"7ebfc2c3d7a33427d4322e34f52b2569365320073f60d1c4a13bcadc1575708c",catalogId:1787447733},{id:"chorus-29",title:"钗头凤",group:"chorus",order:29,duration:30,note:"",scene:0,file:"audio/chorus-29.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%92%97%E5%A4%B4%E5%87%A4/1789061389?i=1789061404&uo=4",sha256:"db14e502c640097ec30db1f2527aced9c1663fedd42397a5a44fe31135655963",catalogId:1789061404},{id:"chorus-30",title:"木偶人",group:"chorus",order:30,duration:30,note:"",scene:0,file:"audio/chorus-30.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E6%9C%A8%E5%81%B6%E4%BA%BA/1787447756?i=1787447771&uo=4",sha256:"2b0e3d8a3534e0fc40307e8956bb1fa5dc1273b50656208ccf2cf6c6fae4cd9c",catalogId:1787447771},{id:"chorus-31",title:"肆无忌惮",group:"chorus",order:31,duration:30,note:"",scene:1,file:"audio/chorus-31.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%82%86%E6%97%A0%E5%BF%8C%E6%83%AE/1787448185?i=1787448196&uo=4",sha256:"ef431d8151d5feafc2c92043f1f6fc787e76783e760fcf25cd6c0b27975482fe",catalogId:1787448196},{id:"chorus-32",title:"租购",group:"chorus",order:32,duration:30,note:"",scene:0,file:"audio/chorus-32.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E7%A7%9F%E8%B4%AD/1787930095?i=1787930229&uo=4",sha256:"c1523bc752104ae898eeb55bab277526a8f05f646ae8886b2d831b69c14f178f",catalogId:1787930229},{id:"chorus-33",title:"摩天大楼",group:"chorus",order:33,duration:30,note:"",scene:1,file:"audio/chorus-33.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%91%A9%E5%A4%A9%E5%A4%A7%E6%A5%BC/1787448185?i=1787448186&uo=4",sha256:"fc66429ac2b76dd3cb8756d8a07ffb11357e2dc356150b8fe107dc66f7019094",catalogId:1787448186},{id:"chorus-35",title:"顽疾",group:"chorus",order:35,duration:30,note:"",scene:1,file:"audio/chorus-35.m4a",artist:"薛之谦",album:"顽疾 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%A1%BD%E7%96%BE/1891957475?i=1891957477&uo=4",sha256:"7fcce5732a9f85352a3f628a991f4e991f90b81e1459f7091464eb74af60f4c9",catalogId:1891957477},{id:"chorus-36",title:"男二号",group:"chorus",order:36,duration:30,note:"",scene:0,file:"audio/chorus-36.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E7%94%B7%E4%BA%8C%E5%8F%B7/1787448335?i=1787448342&uo=4",sha256:"f4cb3ae6ee037da9eef2379be143da350c239f345dc67a9a17ae7525d6273628",catalogId:1787448342},{id:"chorus-37",title:"迟迟",group:"chorus",order:37,duration:30,note:"",scene:0,file:"audio/chorus-37.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9F%E8%BF%9F/1787447447?i=1787447719&uo=4",sha256:"861b11ef7826f575905cfbe4b3e37402ad7e30f553293eb09ed4bf9e41157361",catalogId:1787447719},{id:"chorus-38",title:"爱我的人谢谢你",group:"chorus",order:38,duration:30,note:"",scene:0,file:"audio/chorus-38.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E6%88%91%E7%9A%84%E4%BA%BA-%E8%B0%A2%E8%B0%A2%E4%BD%A0/1787930075?i=1787930459&uo=4",sha256:"43d7cd54c23360d385e9ef718303a450d96d79edb3ecf8659aabcbef698ffd56",catalogId:1787930459},{id:"chorus-39",title:"变废为宝",group:"chorus",order:39,duration:30,note:"",scene:2,file:"audio/chorus-39.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%98%E5%BA%9F%E4%B8%BA%E5%AE%9D/1787448335?i=1787448339&uo=4",sha256:"b141ba4078be28cded2ba92f21abad3c72fc77a6159b9e852012a3c543d8dab0",catalogId:1787448339},{id:"chorus-40",title:"等我回家",group:"chorus",order:40,duration:30,note:"",scene:0,file:"audio/chorus-40.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E7%AD%89%E6%88%91%E5%9B%9E%E5%AE%B6/1788255148?i=1788255154&uo=4",sha256:"0f79185ae72049a8bd5042108c8e92bd81a5f1d1bd89faca15a163679d405cf9",catalogId:1788255154},{id:"chorus-41",title:"守候",group:"chorus",order:41,duration:30,note:"",scene:0,file:"audio/chorus-41.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%AE%88%E5%80%99/1787448335?i=1787448343&uo=4",sha256:"5d6b920a89af921ea27ad7ac79ce7bb5abab9e3d6a7d26cfb41e70d41f587c64",catalogId:1787448343},{id:"chorus-42",title:"醒来",group:"chorus",order:42,duration:30,note:"现场版",scene:0,file:"audio/chorus-42.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%86%92%E6%9D%A5-live/1787448185?i=1787448419&uo=4",sha256:"514e0825f1aa9de570c570978d01231349cf59894b876ef51d90b7ce19da6b7e",catalogId:1787448419},{id:"chorus-43",title:"这样一来我算什么",group:"chorus",order:43,duration:30,note:"合唱现场版 · 合唱版",scene:0,file:"audio/chorus-43.m4a",artist:"薛之谦 / 陈卓璇",album:"音乐缘计划2 第4期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E6%A0%B7%E4%B8%80%E6%9D%A5%E6%88%91%E7%AE%97%E4%BB%80%E4%B9%88-live/1853200539?i=1853200873&uo=4",sha256:"b99f67b965d3c937271d3989e43cf932d5bce044461c624f270f79e914e691e9",catalogId:1853200873},{id:"chorus-44",title:"黄色枫叶",group:"chorus",order:44,duration:30,note:"",scene:0,file:"audio/chorus-44.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%BB%84%E8%89%B2%E6%9E%AB%E5%8F%B6/1789061389?i=1789061401&uo=4",sha256:"3f2d5f242b6c933cf15492d9318ed01ad4560c934c06978dacb020268bc4885d",catalogId:1789061401},{id:"chorus-45",title:"你不是一个人",group:"chorus",order:45,duration:30,note:"合唱版",scene:0,file:"audio/chorus-45.m4a",artist:"张信哲 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA/1787448335?i=1787448340&uo=4",sha256:"4a536b85f237d1355c57e9a2c1794536d30f204e69dfeaca3ee5dff9062a2790",catalogId:1787448340},{id:"chorus-46",title:"银河少年",group:"chorus",order:46,duration:30,note:"合唱版",scene:2,file:"audio/chorus-46.m4a",artist:"王啸坤 / 薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E9%93%B6%E6%B2%B3%E5%B0%91%E5%B9%B4/1787930095?i=1787930097&uo=4",sha256:"38d74aa872f0719b88be36478798faa3b8146589bd0e11c14a2665b7d6775172",catalogId:1787930097}],as="concert-02",pr=[as,...En.filter(n=>n.id!==as).map(n=>n.id)];function Zs(n,e,{mode:t="sequence",direction:i=1,random:r=Math.random}={}){if(!n.length)return null;const s=n.indexOf(e);if(t==="repeat"&&i>0)return s>=0?e:n[0];if(t==="shuffle"&&i>0&&n.length>1){const a=n.filter(o=>o!==e);return a[Math.min(a.length-1,Math.max(0,Math.floor(r()*a.length)))]}return n[((s<0?0:s)+i+n.length)%n.length]}let xo=0;const An=pr.map((n,e)=>{const t=En.find(r=>r.id===n),i={...t,index:e,start:xo,end:xo+t.duration};return xo=i.end,i}),ls=xo,ku=[{id:"opening",label:"野心开场",first:0,count:1},{id:"concert",label:"演出曲目",first:1,count:An.filter(n=>n.group==="concert").length-1},{id:"chorus",label:"合唱时刻",first:An.findIndex(n=>n.group==="chorus"),count:An.filter(n=>n.group==="chorus").length}].map(n=>({...n,start:An[n.first].start}));function Hu(n){const e=Math.min(ls,Math.max(0,Number(n)||0)),t=An.find(i=>e<i.end)||An[An.length-1];return{track:t,offset:Math.min(t.duration-.001,Math.max(0,e-t.start))}}function Zv(n,e=0){const t=An.find(s=>s.id===n)||An[0],i=Math.min(t.duration,Math.max(0,Number(e)||0)),r=t.index===0?"opening":t.group;return{track:t,section:r,position:t.start+i,total:ls}}const Vu=1024*1024;function Jv({warmup:n,fetchImpl:e=globalThis.fetch?.bind(globalThis),urlAPI:t=URL,baseURI:i=document.baseURI,environment:r=()=>({hidden:document.hidden,online:navigator.onLine,connection:navigator.connection}),maxEntries:s=3,maxBytes:a=4*Vu,maxTransferBytes:o=16*Vu}={}){const l=new Map,c=new Map,u=new Set,h=new Map;let p=null,d=null,g=null,v=0,m=0,f=0,A=!1,E=!1;const x=D=>new URL(D.file,i).href,y=({budget:D=!0}={})=>{const{hidden:N,online:k,connection:G}=r();return A&&!E&&!N&&k!==!1&&!G?.saveData&&(!D||m<o)};function T(D){try{t.revokeObjectURL(D)}catch{}}function L(D){const N=l.get(D);N&&(l.delete(D),v-=N.bytes,N.url===p?u.add(N.url):T(N.url))}function F(D){for(;l.size>=s||v+D>a;){const N=[...l.entries()].filter(([k,G])=>G.url!==p&&k!==g).sort((k,G)=>k[1].used-G[1].used)[0];if(!N)return!1;L(N[0])}return!0}function b(D,N){N.cancelled=!0,N.controller?.abort(),n?.cancel?.(N.taskKey),c.delete(D)}function _(){for(const[D,N]of c)b(D,N)}async function C(D,N,k){const G=new AbortController,V=(N.generation||0)+1;N.controller=G,N.generation=V;const z=()=>G.abort();k?.addEventListener("abort",z,{once:!0}),k?.aborted&&z();let R;try{if(N.cancelled||G.signal.aborted||!y()||D===d)return!1;const S=await e(D,{signal:G.signal,cache:"default",credentials:"same-origin"});if(!S.ok||S.status===206)throw new Error("Incomplete audio response");const B=S.headers.get("content-type")||"";if(B&&!/^(audio\/|video\/mp4|application\/octet-stream)/i.test(B))throw new Error("Invalid audio response");const Q=Math.min(a,o-m);if(Number(S.headers.get("content-length"))>Q)throw new Error("Audio exceeds preparation budget");if(!S.body?.getReader)throw new Error("Streaming preparation unavailable");R=S.body.getReader();const te=[];let se=0;for(;;){if(N.cancelled||G.signal.aborted||V!==N.generation||!y({budget:!1}))throw new Error("Audio preparation cancelled");const{value:Ie,done:K}=await R.read();if(K)break;if(m+=Ie.byteLength,se+=Ie.byteLength,se>Q||m>o)throw new Error("Audio exceeds preparation budget");te.push(Ie)}if(!se||N.cancelled||G.signal.aborted||V!==N.generation||!y({budget:!1})||D===d||c.get(D)!==N||!F(se))return!1;const Ue=t.createObjectURL(new Blob(te,{type:B||"audio/mp4"}));return l.set(D,{url:Ue,bytes:se,used:++f}),v+=se,!0}finally{k?.removeEventListener("abort",z),G.signal.aborted||G.abort(),N.controller===G&&(N.controller=null);try{await R?.cancel()}catch{}}}return{start(){A=!0},canPrepare:y,warm(D,{priority:N="next"}={}){if(!D||!n?.enqueue||!e||!t.createObjectURL||!y())return Promise.resolve(!1);const k=x(D),G=l.get(k);if(G)return G.used=++f,Promise.resolve(!0);if(k===d||(h.get(k)||0)>Date.now())return Promise.resolve(!1);if(c.has(k))return c.get(k).promise;for(const[z,R]of c)z!==g&&b(z,R);const V={controller:null,cancelled:!1,taskKey:`audio:${k}`};c.set(k,V);try{V.promise=Promise.resolve(n.enqueue({key:V.taskKey,priority:N,kind:"audio",cacheResult:!1,run:z=>C(k,V,z)})).then(z=>z===!0).catch(z=>(n.forget?.(V.taskKey),!V.cancelled&&!["AbortError","QueueFullError"].includes(z?.name)&&h.set(k,Date.now()+3e4),!1)).finally(()=>{c.get(k)===V&&c.delete(k)})}catch{c.delete(k),V.promise=Promise.resolve(!1)}return V.promise},get(D){const N=l.get(x(D));return N?(N.used=++f,N.url):null},setCurrent(D){d=D?x(D):null,_()},setNext(D){g=D?x(D):null},setActive(D){p=D;for(const N of u)N!==p&&(T(N),u.delete(N))},forget(D){L(x(D))},cancelPending:_,snapshot(){return{entries:l.size,bytes:v,transferred:m,pending:c.size}},dispose(){E=!0,_(),p=null;for(const D of l.keys())L(D);for(const D of u)T(D);u.clear()}}}const Se=n=>document.querySelector(n),on=(n,e)=>{const t=String(e);n.textContent!==t&&(n.textContent=t)},jt=n=>`${Math.floor((Number.isFinite(n)?n:0)/60).toString().padStart(2,"0")}:${Math.floor((Number.isFinite(n)?n:0)%60).toString().padStart(2,"0")}`,Js=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Qv({getSceneState:n,requestScenePlay:e,onPause:t,onScene:i,notify:r,outputMuted:s=!1,warmup:a=null}){const o=document.createElement("audio");o.id="concert-audio",o.preload="none",o.setAttribute("playsinline",""),o.hidden=!0,document.body.append(o);let l=En.find(I=>I.id===as),c=null,u=null,h=null,p=null,d=null,g=!1,v=.45,m="sequence",f=!0,A="concert",E="",x=0,y=!1,T=!1,L=0,F=!1,b=!1,_="idle",C=null,D=!1,N=null;const k=a?Jv({warmup:a}):null,G=I=>a?.setBusy?.("audio-playback",I);let V=null,z=null;const R=[],S=new Uint8Array(128);try{const I=Number(localStorage.getItem("beast.music.volume.v1"));localStorage.getItem("beast.music.volume.v1")!==null&&Number.isFinite(I)&&(v=Math.min(1,Math.max(0,I)))}catch{}const B=Se("#music-dialog");Se("#music-info span").textContent=En.length;for(const I of document.querySelectorAll("[data-library-filter]"))I.querySelector("span").textContent=En.filter(X=>I.dataset.libraryFilter==="all"||X.group===I.dataset.libraryFilter).length;const Q={sequence:"顺序播放",repeat:"单曲循环",shuffle:"随机播放"},te=()=>!n().playing||n().compare||document.hidden,se=document.createElement("button");se.id="audio-recover",se.className="audio-recover",se.hidden=!0,document.querySelector("#music-player").append(se);const Ue=()=>{clearTimeout(C),C=null};function Ie(){let I;return m==="shuffle"?(N?.from!==l.id&&(N={from:l.id,id:Zs(pr,l.id,{mode:m})}),I=N.id):I=Zs(pr,l.id,{mode:m}),En.find(X=>X.id===I)}function K(){if(!g||_!=="playing"||te()||o.paused||o.readyState<3)return!1;const I=o.buffered;if(!I)return o.readyState>=4;for(let X=0;X<I.length;X++)if(I.start(X)<=o.currentTime&&I.end(X)>o.currentTime){const W=Number.isFinite(o.duration)?o.duration-o.currentTime:8;return I.end(X)-o.currentTime>=Math.min(8,W)-.15}return!1}function ne(){const I=K(),X=g&&!te()&&_==="playing"&&!o.paused&&!I;return I!==V&&(V=I,a?.setMediaHeadroom?.(I)),X!==z&&(z=X,a?.setBusy?.("audio-headroom",X)),I}function de(){const I=ne();if(!D||!k||!I)return;const X=Ie();k.setNext(X),X?.id!==l.id&&k.warm(X)}function Ce(I){if(!D||!ne())return;const X=En.find(W=>W.id===I);X?.id!==l.id&&k?.warm(X)}function ge(I=x){C===null&&(C=setTimeout(()=>{I!==x||!g||te()||(_="slow",G(!1),xe())},12e3))}function Xe(){o.muted=s||v===0;try{o.volume=s?0:v}catch{}}Xe(),Se("#show-sections").innerHTML=ku.map((I,X)=>`<button data-show-section="${I.id}" aria-label="跳到${I.label}"><span>0${X+1}</span>${I.label}<small>${I.count}段</small></button>`).join(""),Se("#show-ticks").innerHTML=An.slice(1).map(I=>`<i style="left:${I.start/ls*100}%"></i>`).join(""),Se("#timeline").max=ls;function Tt(){return n().compare?(r("位置比较时保持同一演出时刻，请先结束比较"),!0):!1}function O(I){const X=Hu(I);Se("#show-position").textContent=`定位到《${X.track.title}》 ${jt(X.offset)}`,Se("#time-label").textContent=`${jt(Number(I))} / ${jt(ls)}`}function st(I){if(Tt())return;F=!1;const{track:X,offset:W}=Hu(I);return ut(X.id,{autoplay:g,offset:W})}Se("#timeline").oninput=I=>{Tt()||(F=!0,O(I.target.value))},Se("#timeline").onchange=I=>st(I.target.value),Se("#timeline").addEventListener("pointercancel",()=>{F=!1,Le()}),document.querySelectorAll("[data-show-section]").forEach(I=>I.onclick=()=>st(ku.find(X=>X.id===I.dataset.showSection).start));function xe(){ne();const I=g&&!o.paused&&!te()&&_==="playing",X=v===0||o.muted&&!s,W=y?"音频加载失败 · 点击重试":_==="blocked"?"声音未开启 · 点击开启声音":_==="slow"?"音频加载较慢 · 可重试或换一首":_==="interrupted"?"播放已中断 · 点击继续":g&&!te()&&_==="loading"?"正在加载声音…":I&&X?"已静音 · 点击开启声音":`${l.artist} · ${I?"正在播放":g&&te()?"随演出暂停":"30秒片段"}`;if(on(Se("#sound"),I?"Ⅱ":"▶"),Se("#sound").setAttribute("aria-label",`${I?"暂停":"播放"}《${l.title}》`),on(Se("#track-title"),l.title),on(Se("#track-subtitle"),W),Se("#track-art").classList.toggle("spinning",I),Se("#music-player").classList.toggle("is-playing",I),Se("#music-player").classList.toggle("is-pink",l.scene===3),Se("#music-player").dataset.trackId=l.id,Se("#music-player").dataset.playback=y?"error":I?"playing":g&&!te()?_:"paused",se.hidden=!b||s||n().compare||!(X||y||["blocked","slow","interrupted"].includes(_)),on(se,y||_==="slow"?"重试声音":_==="interrupted"?"继续播放":"开启声音"),se.setAttribute("aria-label",W+"，"+se.textContent),Se("#music-player").dataset.volume=String(v),on(Se("#music-mode"),Q[m]),Se("#music-mode").setAttribute("aria-label",`播放模式：${Q[m]}，点击切换`),Se("#music-follow").setAttribute("aria-checked",String(f)),on(Se("#music-follow"),`舞台随曲 · ${f?"开":"关"}`),on(Se("#library-current"),l.title),on(Se("#library-status"),y||X||["blocked","slow","interrupted","loading"].includes(_)?W:`${I?"正在播放":"当前选择"} · ${l.artist}${l.note?" · "+l.note:""}`),Se("#track-source").href=l.sourceUrl,on(Se("#library-play"),I?"暂停播放":"播放这首"),on(Se("#play"),I?"Ⅱ":"▶"),Se("#play").setAttribute("aria-label",`${I?"暂停":"播放"}演出`),on(Se("#chapter-name"),l.title),on(Se("#show-status"),`${y?"加载失败":I?"正在上演":b?"演出暂停":"待播放"} · ${String(pr.indexOf(l.id)+1).padStart(2,"0")} / ${En.length}`),document.documentElement.dataset.audioState=I?X?"muted":"playing":_,Se("#volume").value=Math.round(v*100),Se("#library-volume").value=Math.round(v*100),document.querySelectorAll("[data-track]").forEach(fe=>{const re=fe.dataset.track===l.id;fe.classList.toggle("selected",re),fe.setAttribute("aria-pressed",String(re)),on(fe.querySelector(".track-state"),re?I?"播放中":"已选择":"播放")}),"mediaSession"in navigator)try{navigator.mediaSession.playbackState=I?"playing":"paused"}catch{}Le()}function Le(){const I=Number.isFinite(o.duration)?o.duration:l.duration,X=c===l.id&&Number.isFinite(o.duration)&&!L?o.currentTime||0:L;Se("#audio-time").textContent=`本曲 ${jt(X)} / ${jt(I)}`,Se("#library-time").textContent=`${jt(X)} / ${jt(I)}`;const W=Zv(l.id,X);Se("#timeline").disabled=n().compare,F||(Se("#timeline").value=W.position,Se("#timeline").setAttribute("aria-valuetext",`第${W.track.index+1}首，${l.title}，本曲${jt(X)}，歌单${jt(W.position)}，共${jt(W.total)}`),Se("#time-label").textContent=`${jt(W.position)} / ${jt(W.total)}`,Se("#show-position").textContent=`第${String(W.track.index+1).padStart(2,"0")} / ${En.length}首 · ${W.section==="opening"?"野心开场":l.group==="concert"?"演出曲目":"合唱曲目"}`),Se("#show-flow").style.setProperty("--show-progress",`${W.position/W.total*100}%`),Se("#show-next").textContent=m==="sequence"?`下一首 · ${En.find(fe=>fe.id===Zs(pr,l.id)).title}`:`${Q[m]} · 按歌单定位`,document.querySelectorAll("[data-show-section]").forEach(fe=>{const re=fe.dataset.showSection===W.section;fe.classList.toggle("active",re),fe.setAttribute("aria-pressed",String(re)),fe.disabled=n().compare});for(const fe of["audio-progress","library-progress"]){const re=Se("#"+fe);re.max=I,T||(re.value=X),re.disabled=c!==l.id||!Number.isFinite(o.duration),re.setAttribute("aria-valuetext",`${jt(X)}，共${jt(I)}`)}if("mediaSession"in navigator&&navigator.mediaSession.setPositionState&&Number.isFinite(o.duration)&&o.duration>0)try{navigator.mediaSession.setPositionState({duration:o.duration,playbackRate:1,position:Math.min(o.duration,X)})}catch{}}function we(){if(typeof o.captureStream!="function")return;const I=window.AudioContext||window.webkitAudioContext;if(I)try{(!u||u.state==="closed")&&(u=new I),u.state!=="running"&&Promise.resolve(u.resume()).catch(()=>{})}catch{}}function ot(){if(!(!u||u.state!=="running"))try{if(p?.disconnect(),d?.getTracks().forEach(I=>I.stop()),d=o.captureStream(),!d.getAudioTracks().length)return;h||(h=u.createAnalyser()),h.fftSize=256,p=u.createMediaStreamSource(d),p.connect(h)}catch{h=null}}function ye({retry:I=!1}={}){c===l.id&&!I||(I&&!L&&Number.isFinite(o.currentTime)&&!o.ended&&(L=o.currentTime),o.pause(),o.preload="metadata",o.src=!I&&k?.get(l)||new URL(l.file,document.baseURI).href,k?.setActive(o.src),I&&k?.forget(l),c=l.id,y=!1,o.load(),"mediaSession"in navigator&&window.MediaMetadata&&(navigator.mediaSession.metadata=new MediaMetadata({title:l.title,artist:l.artist,album:l.album})))}async function Oe({gesture:I=!0}={}){if(I&&e(),te())return;const X=++x;Ue();const W=y||_==="slow";k?.setCurrent(l),G(!0),g=!0,b=!0,_="loading",we(),ye({retry:W}),Xe(),y=!1,o.ended&&(o.currentTime=0),ge(X),xe();try{if(await o.play(),X!==x)return;if(Ue(),te()){G(!1),o.pause(),xe();return}_=o.paused?"interrupted":"playing",G(!1),ot(),xe(),de()}catch(fe){if(X!==x)return;G(!1),Ue(),g=!1,o.pause(),t(),y=!["NotAllowedError","AbortError"].includes(fe?.name),_=fe?.name==="NotAllowedError"?"blocked":y?"error":"interrupted",xe(),r(_==="blocked"?"点一下「开启声音」，继续听歌":_==="interrupted"?"播放已中断，点一下继续播放":`《${l.title}》暂时无法播放，可重试或切换下一首`)}}function Mt(){x++,Ue(),g=!1,_="paused",G(!1),t(),o.pause(),xe()}function ut(I,{autoplay:X=!0,applyTheme:W=!0,offset:fe=0}={}){const re=En.find(Re=>Re.id===I);if(!re)return;x++,Ue(),o.pause();const Ee=l.id!==I;if(l=re,k?.setCurrent(l),Ee&&(N=null),Ee&&(c=null,y=!1,_="idle"),L=Math.min(re.duration-.001,Math.max(0,fe)),c===l.id&&Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration-.001,L),L=0),(Ee||!R.length)&&R.push(I),f&&W&&i(re.scene),xe(),X)return Oe();g=!1,_="paused",G(!1),t(),fe>0&&ye(),xe()}function P(I=1,X=!1){let W;return I<0&&m==="shuffle"&&R.length>1?(R.pop(),W=R.pop()):I>0&&m==="shuffle"?W=Ie().id:W=Zs(pr,l.id,{mode:X?m:m==="repeat"?"sequence":m,direction:I}),W===l.id?(o.currentTime=0,g||X?Oe({gesture:!X}):Le()):ut(W,{autoplay:g||X})}function M(){const I=E.trim().toLocaleLowerCase(),X=An.filter(W=>(A==="all"||W.group===A)&&`${W.title} ${W.note}`.toLocaleLowerCase().includes(I));Se("#track-count").textContent=`${X.length} 段`,Se("#track-list").innerHTML=X.length?X.map(W=>`<button class="track-row" data-track="${W.id}" aria-label="播放${Js(W.title)}${W.note?"，"+Js(W.note):""}" aria-pressed="false"><span class="track-number">${String(W.index+1).padStart(2,"0")}</span><span class="track-name"><strong>${Js(W.title)}${W.id===as?"<i>入场曲</i>":""}${W.scene===3?'<i class="pink-label">粉钻舞台</i>':""}</strong><small>${Js(W.artist+(W.note?" · "+W.note:""))}</small></span><span class="track-duration">00:30</span><span class="track-state">播放</span></button>`).join(""):'<div class="library-empty">没有找到这首歌<br><small>试试歌名中的一两个字，或切换到「全部」。</small></div>',Se("#track-list").querySelectorAll("[data-track]").forEach(W=>{W.onclick=()=>ut(W.dataset.track),W.onpointerover=W.onfocus=()=>Ce(W.dataset.track)}),xe()}function j(I){const X=Number(I);if(Number.isFinite(X)){v=Math.min(1,Math.max(0,X/100)),Xe();try{localStorage.setItem("beast.music.volume.v1",String(v))}catch{}xe()}}Se("#sound").onclick=()=>g&&!o.paused?Mt():Oe(),se.onclick=()=>(v===0&&j(45),o.muted=s,Oe()),Se("#library-play").onclick=Se("#sound").onclick,Se("#music-next").onclick=()=>P(),Se("#music-prev").onclick=()=>P(-1),Se("#library-next").onclick=()=>P(),Se("#library-prev").onclick=()=>P(-1),Se("#music-mode").onclick=()=>{m={sequence:"repeat",repeat:"shuffle",shuffle:"sequence"}[m],N=null,k?.cancelPending(),xe(),de()},Se("#music-follow").onclick=()=>{f=!f,f&&i(l.scene),xe()},Se("#volume").oninput=I=>j(I.target.value),Se("#library-volume").oninput=I=>j(I.target.value);for(const I of["audio-progress","library-progress"]){const X=Se("#"+I);X.oninput=W=>{Number.isFinite(o.duration)&&(T=!0,o.currentTime=Math.min(o.duration,Math.max(0,Number(W.target.value))),T=!1,Le())}}for(const I of["music-info","track-open","show-queue"])Se("#"+I).onclick=()=>{B.showModal(),M()};document.querySelectorAll("[data-stage-theme]").forEach(I=>I.onclick=()=>{Tt()||(f=!1,i(Number(I.dataset.stageTheme)),xe())}),Se("#close-music").onclick=()=>B.close(),B.addEventListener("click",I=>{if(I.target!==B)return;const X=B.getBoundingClientRect();(I.clientX<X.left||I.clientX>X.right||I.clientY<X.top||I.clientY>X.bottom)&&B.close()}),Se("#track-search").oninput=I=>{E=I.target.value,M()},document.querySelectorAll("[data-library-filter]").forEach(I=>I.onclick=()=>{A=I.dataset.libraryFilter,document.querySelectorAll("[data-library-filter]").forEach(X=>{X.classList.toggle("active",X===I),X.setAttribute("aria-pressed",String(X===I))}),M()}),o.addEventListener("timeupdate",()=>{Le(),de()}),o.addEventListener("progress",de),o.addEventListener("loadedmetadata",()=>{L>0&&(o.currentTime=Math.min(o.duration-.001,L),L=0),Le()}),o.addEventListener("playing",()=>{if(!g||te()){o.pause();return}o.paused||(Ue(),_="playing",G(!1),ot(),xe(),de())}),o.addEventListener("pause",()=>{o.paused&&g&&!te()&&!o.ended&&_==="playing"&&(_="interrupted",G(!1)),xe()});for(const I of["waiting","stalled"])o.addEventListener(I,()=>{!g||te()||o.ended||_==="slow"||o.readyState>=3&&!o.paused||(k?.cancelPending(),G(!0),_="loading",ge(),xe())});if(o.addEventListener("volumechange",xe),o.addEventListener("ended",()=>{g&&!te()?P(1,!0):xe()}),o.addEventListener("error",()=>{o.error&&(x++,Ue(),G(!1),y=!0,_="error",g=!1,o.pause(),t(),xe())}),window.addEventListener?.("offline",()=>k?.cancelPending()),window.addEventListener?.("online",de),navigator.connection?.addEventListener?.("change",()=>{k?.canPrepare()?de():k?.cancelPending()}),"mediaSession"in navigator)for(const[I,X]of Object.entries({play:()=>Oe(),pause:Mt,previoustrack:()=>P(-1),nexttrack:()=>P(),seekto:W=>{Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration,Math.max(0,W.seekTime||0)),Le())}}))try{navigator.mediaSession.setActionHandler(I,X)}catch{}return M(),{prepare(){D=!0,k?.start(),de()},readiness(){return{prepared:D,...k?.snapshot()}},enter(){ut(as)},toggle(){g&&!o.paused&&!te()?Mt():Oe()},refresh(){xe()},position(){return c===l.id&&Number.isFinite(o.duration)&&o.duration>0?Math.min(1,o.currentTime/o.duration):L/l.duration},pauseForScene(){x++,Ue(),G(!1),k?.cancelPending(),o.pause(),xe()},resumeForScene(){g&&!te()?Oe({gesture:!1}):xe()},setVisibility(I){if(I){x++,Ue(),G(!1),k?.cancelPending(),o.pause();try{u?.suspend()?.catch(()=>{})}catch{}xe()}else g&&!te()&&Oe({gesture:!1})},energy(){if(!h||o.paused||!g||te())return 0;h.getByteFrequencyData(S);let I=0;for(let X=0;X<12;X++)I+=S[X];return I/3060}}}const zo=""+new URL("beast-eye-CPigXoud.jpg",import.meta.url).href,ko=""+new URL("beast-awakening-DHaJ8PAb.jpg",import.meta.url).href,lc=""+new URL("visual-finale-DU1vaxcB.jpg",import.meta.url).href,Ho=""+new URL("guangzhou-poster-Bo6X5D2d.jpg",import.meta.url).href,Es=""+new URL("guangzhou-performer-BYLipXbJ.jpg",import.meta.url).href,cc=""+new URL("guangzhou-stage-B4ECLh6R.jpg",import.meta.url).href;function ex(n=48){if(!Number.isInteger(n)||n<0)throw new RangeError("Fixture count must be a non-negative integer");return Array.from({length:n},(e,t)=>{const i=t%3,r=Math.floor(t/3),s=Math.ceil((n-i)/3),a=r/s*Math.PI*2;return{phase:a,tier:i,fixtureIndex:t,origin:new U(Math.cos(a)*(i===0?43:24),[3,32,29.2][i],Math.sin(a)*(i===0?24:12))}})}function tx(n,e,t,{count:i=48}={}){const r=ex(i),s=new $n(e,t,i);s.instanceMatrix.setUsage(Rf),s.frustumCulled=!1;const a=new $n(new ys(.27,6,6),new Fr({color:"#b9ddff"}),i);a.frustumCulled=!1,n.add(s,a);const o=new Qe,l=new hn,c=new U,u=new U(0,-1,0),h=new U(3.6,85,3.6),p=new U(1,1,1),d=new hn;let g=r,v=0,m=0;function f(x,y){g.forEach((T,L)=>{const F=T.fixtureIndex,b=T.phase+Math.sin(x*.2+F)*.4,_=y===0?12:y===1?40:70;c.set(Math.cos(b)*_+Math.sin(x*.45+F)*15,y>=2?72:y===0?0:7+Math.sin(x*.25+F)*14,Math.sin(b)*_*.65).sub(T.origin).normalize(),l.setFromUnitVectors(u,c),o.compose(T.origin,l,h),s.setMatrixAt(L,o)}),s.instanceMatrix.needsUpdate=!0}function A(x){const y=Number(x),T=Number.isFinite(y)?Math.max(1,Math.round(y)):1,L=new Set;for(let F=0;F<3;F++){const b=r.filter(C=>C.tier===F),_=Math.ceil(b.length/T);for(let C=0;C<_;C++)L.add(b[Math.floor(C*b.length/_)])}g=r.filter(F=>L.has(F)),g.forEach((F,b)=>{o.compose(F.origin,d,p),a.setMatrixAt(b,o)}),s.count=a.count=g.length,a.instanceMatrix.needsUpdate=!0,f(v,m)}function E(x,y,T,L,F){const b=1-Math.exp(-2.45*F);t.uniforms.color.value.lerp(T,b),t.uniforms.power.value=L,t.uniforms.time.value=x,a.material.color.lerp(T,b),v=x,m=y,f(x,y)}return A(1),{shafts:s,bulbs:a,lights:r,setStep:A,update:E}}const Tr=Object.freeze({stageEnvelope:Object.freeze({width:93,depth:53,height:36,source:"https://www.sina.cn/news/detail/5265883729757226.html",scope:"广州站官方公告的舞台整体包络，非台面尺寸"}),flippingScreen:Object.freeze({width:64,height:5,source:"https://kdesignaward.com/exhibition/490265",scope:"巡演设计方案，广州站安装坐标未确认"}),historicalPitch:Object.freeze({width:105,depth:69,source:"https://www.csva.org.cn/history/detail-1670.html",scope:"2019年场馆介绍，非2026现场测绘"}),assumptions:Object.freeze({platformHeight:1.8,screenBottom:14,tierSlope:.46,seatPitch:.82,scope:"用于主题体验的估算几何，不代表施工图或票务座位坐标"})}),td=Object.freeze([[-21,40],[21,40],[-21,-40],[21,-40],[58,0],[-58,0]].map(Object.freeze)),nd=Object.freeze(["A1","A2","B1","B2","C","D"]),_s=Object.freeze(td.map(([n,e],t)=>Object.freeze({x:n,z:e,rows:30,seats:t<4?56:26,seatPitch:.63,rowPitch:.82,longSide:t<4}))),hi=28,$e=Object.freeze({rows:50,lowerRows:15,tierDepth:22,sectors:21,lowerRowPitch:1.4,radialScale:.73,lowerRadiusX:106,lowerRadiusZ:79,lowerBaseHeight:2,lowerSlope:.46,upperRadiusX:131,upperRadiusZ:104,upperBaseHeight:18,upperSlope:.48,seatDepth:.43,innerRailRadial:-.8,outerRailRadial:22.5,scope:"看台分层和50排可选范围为模型估算，不代表实际票务排数或座位测绘"});function di(n,e,t,i){if(!Number.isInteger(n)||n<e||n>t)throw new RangeError(`Invalid ${i}`)}function uc(n){di(n,0,$e.sectors+_s.length-1,"zone");const e=_s[n-21];return{rows:e?.rows??$e.rows,seats:e?.seats??hi}}function id(n,e,t){di(n,0,_s.length-1,"floor bank");const i=_s[n];di(e,1,i.rows,"floor row"),di(t,1,i.seats,"floor seat");const r=(t-(i.seats+1)/2)*i.seatPitch,s=(e-1)*i.rowPitch;return[i.longSide?i.x+r:i.x+Math.sign(i.x)*s,.4,i.longSide?i.z+Math.sign(i.z)*s:i.z+r]}function rd(n,e){return di(n,0,$e.sectors-1,"tier zone"),di(e,1,hi,"tier seat"),Math.PI/2-n/$e.sectors*Math.PI*2+((e-.5)/hi-.5)*Math.PI*2/$e.sectors*.89}function sd(n,e,t=!1){if(!Number.isFinite(n)||!Number.isFinite(e)||typeof t!="boolean")throw new TypeError("Tier surface coordinates must be finite numbers and a boolean layer");if(e<$e.innerRailRadial||e>$e.outerRailRadial)throw new RangeError("Tier radial coordinate exceeds the modeled surface");const i=t?$e.upperRadiusX:$e.lowerRadiusX,r=t?$e.upperRadiusZ:$e.lowerRadiusZ,s=t?$e.upperBaseHeight:$e.lowerBaseHeight,a=t?$e.upperSlope:$e.lowerSlope;return[Math.cos(n)*(i+e*$e.radialScale),s+e*a,Math.sin(n)*(r+e*$e.radialScale)]}function od(n){di(n,1,$e.rows,"tier row");const e=n>$e.lowerRows,t=e?(n-$e.lowerRows-1)/($e.rows-$e.lowerRows-1)*$e.tierDepth:(n-1)*$e.lowerRowPitch;return{upper:e,radial:t}}function hc(n,e,t){const{upper:i,radial:r}=od(e);return sd(rd(n,t),r,i)}function nx(n=6400){const e=$e.rows*hi,t=$e.sectors*e;if(di(n,0,t,"spectator count"),n===0)return[];const i=Uint32Array.from({length:t},(o,l)=>l),r=[];let s=326662325;const a=()=>{s=s+1831565813|0;let o=Math.imul(s^s>>>15,1|s);return o^=o+Math.imul(o^o>>>7,61|o),((o^o>>>14)>>>0)/4294967296};for(let o=0;o<n;o++){const l=o+Math.floor(a()*(t-o)),c=i[l];i[l]=i[o],i[o]=c;const u=c%e;r.push({zone:Math.floor(c/e),row:1+Math.floor(u/hi),seat:1+u%hi})}return r}function dc(n={}){const e=(r,s,a,o)=>{const l=Number(r);return Number.isFinite(l)?Math.max(a,Math.min(o,Math.round(l))):s},t=e(n.zone??3,3,0,26),i=uc(t);return{zone:t,row:e(n.row??12,12,1,i.rows),seat:e(n.seat??10,10,1,i.seats),standing:n.standing===!0}}function ix(n){return Array.isArray(n)?n.filter(e=>{if(!e||!Number.isInteger(e.zone)||e.zone<0||e.zone>26)return!1;const t=uc(e.zone);return Number.isInteger(e.row)&&e.row>=1&&e.row<=t.rows&&Number.isInteger(e.seat)&&e.seat>=1&&e.seat<=t.seats}).slice(0,8).map(dc):[]}function rx({ringPoints:n,steel:e,rail:t,dark:i}){if(!Array.isArray(n)||n.length<3||n.some(C=>!Array.isArray(C)||C.length!==2||C.some(D=>!Number.isFinite(D))))throw new TypeError("A finite stage perimeter is required");if(![e,t,i].every(C=>C?.isMaterial))throw new TypeError("Stage rigging requires shared materials");const r=Tr.stageEnvelope.width/2,s=Tr.stageEnvelope.depth/2;if(n.some(([C,D])=>Math.abs(C)>r||Math.abs(D)>s))throw new RangeError("Stage perimeter exceeds its envelope");const a=n.map(([C,D])=>new U(C*(r-.75)/r,0,D*(s-.75)/s)),o=[],l=[],c=[],u=new Lt;u.name="stage-rigging";const h=(C,D,N,k)=>{const G=D.distanceTo(N);if(!Number.isFinite(G)||G<.01)throw new RangeError("Degenerate rigging member");C.push({a:D.clone(),b:N.clone(),radius:k,length:G})},p=(C,D,N,k)=>new U(C.x+D.x*N,k,C.z+D.z*N),d=31.8,g=34,v=.35;for(let C=0;C<a.length;C++){const D=a[C],N=a[(C+1)%a.length],k=N.clone().sub(D),G=k.length();if(G<.1)throw new RangeError("Stage perimeter has a duplicate corner");k.normalize();const V=new U(-k.z,0,k.x);for(const R of[-v,v])for(const S of[d,g])h(o,p(D,V,R,S),p(N,V,R,S),.115);const z=Math.ceil(G/4);for(let R=0;R<=z;R++){const S=D.clone().lerp(N,R/z);for(const te of[-v,v])h(l,p(S,V,te,d),p(S,V,te,g),.065);for(const te of[d,g])h(l,p(S,V,-v,te),p(S,V,v,te),.065);if(R===z)continue;const B=D.clone().lerp(N,(R+1)/z),Q=R%2===0;for(const te of[-v,v])h(l,p(S,V,te,Q?d:g),p(B,V,te,Q?g:d),.06);for(const te of[d,g])h(l,p(S,V,Q?-v:v,te),p(B,V,Q?v:-v,te),.055)}}const m=[.4,4,8,12,16,20,24,28,d,g];for(const C of a){const D=C.clone().normalize(),N=new U(-D.z,0,D.x),k=.4,G=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([z,R])=>C.clone().addScaledVector(D,z*k).addScaledVector(N,R*k)),V=(z,R)=>new U(z.x,R,z.z);for(const z of G)h(o,V(z,.3),V(z,g),.12);for(let z=0;z<m.length;z++)for(let R=0;R<4;R++){const S=G[R],B=G[(R+1)%4],Q=m[z];if(h(l,V(S,Q),V(B,Q),.06),z<m.length-1){const te=m[z+1];h(l,V(z%2?S:B,Q),V(z%2?B:S,te),.055)}}c.push({position:V(C,.125),scale:new U(1.35,.25,1.35)}),h(o,V(C,.25),V(C,1.5),.17),h(l,V(C,1.35),V(C,2.65),.075),h(o,V(C,1.39),V(C,1.57),.215),c.push({position:V(C,2.7),scale:new U(.3,.2,.3)})}const f=new bs(1,1,1,6),A=new On(1,1,1),E=new Qe,x=new hn,y=new U(0,1,0),T=new U,L=new U,F=new U;function b(C,D,N,k,G){if(!k.length)return;const V=new $n(D,N,k.length);V.name=C,V.instanceMatrix.setUsage(Cl),k.forEach((z,R)=>{G(z),V.setMatrixAt(R,E)}),V.instanceMatrix.needsUpdate=!0,V.matrixAutoUpdate=!1,V.computeBoundingBox(),V.computeBoundingSphere(),u.add(V)}function _({a:C,b:D,radius:N,length:k}){L.copy(C).add(D).multiplyScalar(.5),F.subVectors(D,C).normalize(),x.setFromUnitVectors(y,F),E.compose(L,x,T.set(N,k,N))}return b("rigging-main-members",f,e,o,_),b("rigging-bracing-and-shafts",f,t,l,_),b("rigging-base-plates",A,i,c,C=>E.compose(C.position,x.identity(),C.scale)),u.userData={structuralIllustration:!0,towerCount:a.length,memberCount:o.length+l.length,basePartCount:c.length,drawCalls:u.children.length,openRoof:!0},u}const Qs=Object.freeze([{bottom:14,top:17.6},{bottom:17.6,top:22.4},{bottom:22.4,top:26}].map(Object.freeze));function sx(n,e,t){const i=n.map(([o,l])=>new U(o*.982,0,l*.982)),r=new Lt;r.name="screen-mounting";const s=Qs[Qs.length-1].top-Qs[0].bottom;return{screens:Qs.map((o,l)=>{const c=[];for(let p=0;p<i.length;p++){const d=i[p],g=i[(p+1)%i.length],v=g.clone().sub(d),m=v.length(),f=new Or(m,o.top-o.bottom-.12),A=f.getAttribute("uv");for(let y=0;y<A.count;y++)A.setY(y,(o.bottom+.06-14+A.getY(y)*(o.top-o.bottom-.12))/s);const E=Math.PI-Math.atan2(v.z,v.x),x=d.clone().add(g).multiplyScalar(.5);f.rotateY(E),f.translate(x.x,(o.bottom+o.top)/2,x.z),c.push(f);for(const y of l===0?[o.bottom,o.top]:[o.top]){const T=new pt(new On(m,.12,.16),t);T.rotation.y=E,T.position.set(x.x,y,x.z),r.add(T)}if(l===0){const y=new pt(new On(.18,17.8,.18),t);y.position.set(d.x,23,d.z),r.add(y)}}const u=e();u.transparent=!1,u.depthWrite=!0;const h=new pt(jh(c),u);return c.forEach(p=>p.dispose()),h.name=`ring-screen-tier-${l+1}`,h}),frame:r}}function ox(n){if(!n.length)return{fps:0,p50:0,p95:0,max:0,slowRatio:0};const e=[...n].sort((i,r)=>i-r);return{fps:1e3/(n.reduce((i,r)=>i+r,0)/n.length),p50:e[Math.floor((e.length-1)*.5)],p95:e[Math.floor((e.length-1)*.95)],max:e[e.length-1],slowRatio:n.filter(i=>i>25).length/n.length}}function ax({cooldown:n=7e3}={}){let e=0,t=-1/0;return{sample(i,{now:r,level:s,automatic:a,settling:o=!1}){const l=ox(i);return!a||o||i.length<3?(e=0,{summary:l,level:s}):(e=l.fps<45||l.p95>36&&l.slowRatio>.12?e+1:0,e>=2&&r-t>=n&&s<3?(e=0,t=r,{summary:l,level:s+1}):{summary:l,level:s})},reset(){e=0}}}const ad=Math.PI/180;function Ia(n){if(!Number.isFinite(n))throw new RangeError("FOV must be finite");return Math.min(150,Math.max(.1,n))}function eo(n){return Math.log(1/Math.tan(n*ad/2))}function lx(n){return 2*Math.atan(Math.exp(-n))/ad}function cx(n){let e=Ia(n),t=e,i=eo(e),r=i,s=0,a=0,o=!1;function l(c){return e=t=Ia(c),i=r=eo(e),s=a=0,o=!1,e}return{setTarget(c,u=.5){const h=Ia(c);if(!Number.isFinite(u)||u<0)throw new RangeError("Lens transition duration must be finite and nonnegative");return Math.abs(h-t)<1e-9?e:u===0||Math.abs(h-e)<1e-9?l(h):(i=eo(e),t=h,r=eo(t),s=0,a=u,o=!0,e)},step(c){if(!o||!Number.isFinite(c)||c<=0)return e;if(s=Math.min(a,s+c),s>=a-1e-12)return e=t,o=!1,e;const u=s/a,h=u*u*(3-2*u);return e=lx(i+(r-i)*h),e},get value(){return e},get active(){return o},reset:l}}function to(n,e){if(!Number.isFinite(n)||n<=0)throw new RangeError(`${e} must be a positive finite number`);return n}function ux(n,e,t){let i=null,r=1,s=0,a=0;const o=t.setSize;return t.setSize=function(l,c){const u=Math.max(1,Math.round(l*r)),h=Math.max(1,Math.round(c*r));u===s&&h===a||(o.call(t,u,h),s=u,a=h)},e.setPixelRatio(1),{configure({width:l,height:c,ratio:u=1,bloomScale:h=1}){l=to(l,"width"),c=to(c,"height"),u=to(u,"ratio"),h=to(h,"bloomScale");const p=Math.max(1,Math.floor(l*u)),d=Math.max(1,Math.floor(c*u)),g=!i||l!==i.width||c!==i.height||u!==i.ratio,v=!i||p!==i.physicalWidth||d!==i.physicalHeight,m=h!==r;return r=h,g&&n.setDrawingBufferSize(l,c,u),v?e.setSize(p,d):m&&t.setSize(p,d),i={width:l,height:c,ratio:u,bloomScale:r,physicalWidth:p,physicalHeight:d},g||v||m},get configuration(){return i?{...i,bloomWidth:s,bloomHeight:a}:null}}}function ld(n,e){const t=e.position.clone(),i=e.quaternion.clone(),r=n.target.clone(),s=n.enableDamping;try{n.enableDamping=!1,n.update()}finally{e.position.copy(t),e.quaternion.copy(i),n.target.copy(r),n.enableDamping=s,e.updateMatrixWorld()}}const Gu=.1;function Na(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function hx(n,e,t,i,r=1.6){if(!Number.isFinite(r)||r<0)throw new RangeError("Invalid camera move duration");if(![n.position,e,t,i].every(Na))throw new RangeError("Camera move positions must be finite");const s=n.position.clone(),a=n.quaternion.clone().normalize(),o=Math.log(Math.max(Gu,s.distanceTo(e))),l=t.clone(),c=i.clone(),u=new hn,h=new Qe,p=new U;let d=0;return{to:l,targetTo:c,step(g){if(!Number.isFinite(g)||g<=0)return d>=r;if(!Na(l)||!Na(c))throw new RangeError("Camera move destinations must be finite");d=Math.min(r,d+g),r-d<1e-10&&(d=r);const m=1-(1-(r===0?1:d/r))**3,f=Math.log(Math.max(Gu,l.distanceTo(c))),A=Math.exp(o+(f-o)*m);return h.lookAt(l,c,n.up),u.setFromRotationMatrix(h),n.position.lerpVectors(s,l,m),n.quaternion.slerpQuaternions(a,u,m),p.set(0,0,-1).applyQuaternion(n.quaternion),e.copy(n.position).addScaledVector(p,A),n.updateMatrixWorld(),d>=r}}}function dx(n){const e=document.createElement("canvas");e.setAttribute("aria-hidden","true"),e.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:none",n.insertBefore(e,n.children[1]||null);const t=e.getContext("2d",{alpha:!1});let i=.5,r=0,s=null;return{capture(a){r>0&&(s??(s=document.createElement("canvas")),s.width=e.width,s.height=e.height,s.getContext("2d").drawImage(e,0,0));const o=r;e.width=a.width,e.height=a.height,t.globalAlpha=1,t.drawImage(a,0,0,e.width,e.height),o>0&&(t.globalAlpha=o,t.drawImage(s,0,0,e.width,e.height),t.globalAlpha=1),i=0,r=1,e.style.opacity="1",e.style.display="block"},step(a){if(r<=0)return;i=Math.min(.5,i+a);const o=i/.5;r=1-o*o*(3-2*o),e.style.opacity=String(r),r===0&&(e.style.display="none",e.width=e.height=1,s=null)},paint(a,o,l){r<=0||(a.save(),a.globalAlpha=r,a.drawImage(e,0,0,o,l),a.restore())},get active(){return r>0}}}const Wu={type:"change"},fc={type:"start"},cd={type:"end"},no=new Zl,Xu=new li,fx=Math.cos(70*Fi.DEG2RAD),Ct=new U,Kt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fa=1e-6;class px extends Jp{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new hn,this._lastTargetPosition=new U,this._quat=new hn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fu,this._sphericalDelta=new fu,this._scale=1,this._panOffset=new U,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new U,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gx.bind(this),this._onPointerDown=mx.bind(this),this._onPointerUp=_x.bind(this),this._onContextMenu=Sx.bind(this),this._onMouseWheel=Mx.bind(this),this._onKeyDown=bx.bind(this),this._onTouchStart=yx.bind(this),this._onTouchMove=Ex.bind(this),this._onMouseDown=vx.bind(this),this._onMouseMove=xx.bind(this),this._interceptControlDown=wx.bind(this),this._interceptControlUp=Tx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wu),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),r<-Math.PI?r+=Kt:r>Math.PI&&(r-=Kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ct.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(no.origin.copy(this.object.position),no.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(no.direction))<fx?this.object.lookAt(this.target):(Xu.setFromNormalAndCoplanarPoint(this.object.up,this.target),no.intersectPlane(Xu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fa||this._lastTargetPosition.distanceToSquared(this.target)>Fa?(this.dispatchEvent(Wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ct.copy(r).sub(this.target);let s=Ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _x(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cd),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case vr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case vr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(fc)}function xx(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Mx(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(fc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cd))}function bx(n){this.enabled!==!1&&this._handleKeyDown(n)}function yx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(fc)}function Ex(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function Sx(n){this.enabled!==!1&&n.preventDefault()}function wx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ax=new oc(-1,1,1,-1,0,1);class Rx extends wt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const Cx=new Rx;class pc{constructor(e){this._mesh=new pt(Cx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ax)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Px extends zr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gs.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qu extends zr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Lx extends zr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Dx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Px(Mo),this.copyPass.material.blending=qn,this.clock=new Zp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qu!==void 0&&(a instanceof qu?i=!0:a instanceof Lx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ux extends zr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Ix={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ar extends zr{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(s,a,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new vn(s,a,{type:Nn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new vn(s,a,{type:Nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=Ix;this.highPassUniforms=gs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gs.clone(Mo.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new Fr,this._fsQuad=new pc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ar.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ar.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ar.BlurDirectionX=new ue(1,0);Ar.BlurDirectionY=new ue(0,1);const io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Nx extends zr{constructor(){super(),this.uniforms=gs.clone(io.uniforms),this.material=new Op({name:io.name,uniforms:this.uniforms,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader}),this._fsQuad=new pc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ph&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ee=n=>document.querySelector(n),Xt=n=>[...document.querySelectorAll(n)],qt=Math.PI*2,ud=Fi.clamp,Pt=Fi.lerp,Fx=120,bo=new URLSearchParams(location.search);window.__beastBoot?.phase("程序已下载");const hd=bo.get("quality")==="compat";let dd=matchMedia("(prefers-reduced-motion: reduce)").matches;try{const n=localStorage.getItem("beast.reduced-motion.v1");(n==="true"||n==="false")&&(dd=n==="true")}catch{}const Ox=dc({zone:bo.get("zone")??3,row:bo.get("row")??12,seat:bo.get("seat")??10}),Y={mode:"overview",time:0,scene:0,playing:!1,...Ox,zoom:5,fog:!0,crowd:!0,inspection:!1,reduced:dd,quality:"auto",follow:!0,compare:!1,compareIndex:0};let Wt=[];try{Wt=ix(JSON.parse(localStorage.getItem("beast.positions.v1")||"[]"))}catch{}let Yu;function yt(n){ee("#toast").textContent=n,ee("#toast").classList.add("show"),clearTimeout(Yu),Yu=setTimeout(()=>ee("#toast").classList.remove("show"),3200)}const jn=jv(),Vo=Zh({warmup:jn});for(const n of["pointerdown","pointermove","wheel","keydown"])document.addEventListener(n,()=>jn.touch(),{passive:!0});const Cn=Qv({warmup:jn,getSceneState:()=>Y,requestScenePlay:()=>{Y.compare&&Gr(),Y.playing=!0},onPause:()=>{Y.playing=!1},onScene:n=>Nd(n),notify:yt,outputMuted:!1}),xt=new gp;xt.background=new Fe("#070c13");xt.fog=new Jl("#0b1724",.0018);const mi=ee("#viewport"),Bn=ee("#world");let Dt,vs=!0,cs=0,Ri=0,mn=0,es=0,ai=mi.clientWidth<700?0:1,Di=null;function Jn(n=1.6){cs=Math.max(cs,performance.now()+n*1e3)}try{Dt=new Nv({canvas:Bn,antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:hd?"default":"high-performance"})}catch(n){throw ee("#webgl-error").hidden=!1,ee("#loading").hidden=!0,window.__beastBoot?.fail("设备未能开启三维显示。可以先关闭其他三维页面后重试；较旧的系统或浏览器可能不支持。","graphics"),n}window.__beastBoot?.phase("图形初始化");const Kn=hd||!Dt.extensions.has("EXT_color_buffer_float");Dt.setPixelRatio(Math.min(devicePixelRatio,1.25));Dt.toneMapping=Hl;Dt.toneMappingExposure=1.25;Dt.shadowMap.enabled=!1;Dt.shadowMap.type=ch;const lt=new Qt(44,1,.1,1500);lt.position.set(136,91,144);const ln=cx(lt.fov);let Bx=null;const yo=dx(mi),Ze=new px(lt,Bn);Ze.target.set(0,12,0);Ze.enableDamping=!0;Ze.dampingFactor=.06;Ze.minDistance=4;Ze.maxDistance=360;Ze.maxPolarAngle=Math.PI*.49;const $u=(()=>{const n=Dt.getContext();try{return{color:n.getInternalformatParameter(n.RENDERBUFFER,n.RGBA16F,n.SAMPLES)||[],depth:n.getInternalformatParameter(n.RENDERBUFFER,n.DEPTH_COMPONENT24,n.SAMPLES)||[]}}catch{return{color:[],depth:[]}}})(),zx=new vn(1,1,{type:Kn?Rn:Nn,samples:0}),zi=new Dx(Dt,zx);zi.addPass(new Ux(xt,lt));const fi=new Ar(new ue(1,1),.75,.55,.7);zi.addPass(fi);fi.materialHighPassFilter.fragmentShader=fi.materialHighPassFilter.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if(any(notEqual(texel.rgb,texel.rgb))) texel.rgb=vec3(0.); texel.rgb=clamp(texel.rgb,vec3(0.),vec3(65500.));");const xs=new Nx;xs.uniforms.saturation={value:1.38};xs.material.fragmentShader=xs.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float saturation;").replace("gl_FragColor = texture2D( tDiffuse, vUv );","gl_FragColor = texture2D( tDiffuse, vUv ); float luminance=dot(gl_FragColor.rgb,vec3(.2126,.7152,.0722)); gl_FragColor.rgb=max(vec3(0.),mix(vec3(luminance),gl_FragColor.rgb,saturation));");zi.addPass(xs);const kx=ux(Dt,zi,fi);Kn&&(ee("#color-mode").hidden=!0);let ro=!0;ee("#color-mode").onclick=()=>{ro=!ro,xs.uniforms.saturation.value=ro?1.38:1,ee("#color-mode").textContent="色彩 · "+(ro?"鲜艳":"柔和")};const Ul=new Gp().load(ko);Ul.colorSpace=Jt;const mc=Kv({warmup:jn,renderer:Dt,scene:xt,camera:lt,urls:[ko,zo,lc],fallback:Ul,loadImage:(n,e)=>Vo.load(n,e),createTexture:(n,e)=>{const t=e===0?Ul:new Ot(n);return t.image=n,t.colorSpace=Jt,t.needsUpdate=!0,t},onTexture:()=>{Uo=-1},report:n=>Bx?.event(n)}),Il=mc.textures;ee("#visual-thumb").src=Es;ee("#gallery-poster").src=Ho;ee("#gallery-performer").src=Es;ee("#gallery-stage").src=cc;ee("#gallery-awakening").src=ko;ee("#gallery-eye").src=zo;ee("#gallery-finale").src=lc;for(const[n,e,t]of[["visual-dialog",["visuals","visual-card"],"close-visuals"]]){const i=ee("#"+n);e.forEach(r=>ee("#"+r).onclick=()=>i.showModal()),ee("#"+t).onclick=()=>i.close(),i.addEventListener("click",r=>{if(r.target===i){const s=i.getBoundingClientRect();(r.clientX<s.left||r.clientX>s.right||r.clientY<s.top||r.clientY>s.bottom)&&i.close()}})}const Hx=qv({getSelection:()=>({zone:gn().name,row:Y.row,seat:Y.seat}),notify:yt});ee("#sky-reference-king").src=Jh;ee("#sky-reference-whale").src=Qh;ee("#sky-reference-peace").src=ed;ee("#gallery-sources").onclick=()=>{ee("#visual-dialog").close(),ee("#source-dialog").showModal()};Xt("[data-gallery-group]").forEach(n=>n.onclick=()=>{n.dataset.galleryGroup==="personal"&&Hx.open(),Xt("[data-gallery-group]").forEach(e=>{e.classList.toggle("active",e===n),e.setAttribute("aria-pressed",String(e===n))}),Xt("[data-gallery-panel]").forEach(e=>e.hidden=e.dataset.galleryPanel!==n.dataset.galleryGroup)});const Oa=new Map,kt=(n,e={})=>{const t=JSON.stringify([n,e]);return Oa.has(t)||Oa.set(t,new Vh({color:n,roughness:.7,metalness:.25,...e})),Oa.get(t)},kr=kt("#11191a"),gc=kt("#303b3b",{metalness:.85,roughness:.35}),Gi=kt("#69716b",{metalness:.9,roughness:.3}),Vx=kt("#252d2b"),Gx=kt("#1c292b"),Wx=kt("#2a443b");function Yt(n,e,t,i,r=0,s=0,a=0,o=xt){let l=new pt(new On(n,e,t),i);return l.position.set(r,s,a),o.add(l),l}function xn(n,e,t,i,r=xt){const s=new U(...n),a=new U(...e),o=new pt(new bs(t,t,s.distanceTo(a),6),i);return o.position.copy(s).add(a).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new U(0,1,0),a.sub(s).normalize()),r.add(o),o}function Xx(n,e,t,i=xt){let r=new kh(n.map(a=>new U(...a)),!1,"catmullrom",.1),s=new pt(new ic(r,Math.max(12,n.length*3),e,5,!1),t);return i.add(s),s}const fd=new Wp("#a4b7db","#080d0b",.48);xt.add(fd);const _c=new jp("#9db1df",1.5);_c.position.set(-80,120,80);xt.add(_c);Yt(800,1,800,kt("#060c10"),0,-1,0);Yt(Tr.historicalPitch.width,.15,Tr.historicalPitch.depth,kt("#102f26"),0,-.35,0);const gi=new Lt;xt.add(gi);const pd=(n,e,t=!1)=>new U(...sd(n,e,t));function md(n){let e=[],t=[];for(let s=0;s<=160;s++){let a=s/160*qt;for(let o of[0,$e.tierDepth]){let l=pd(a,o,n);e.push(l.x,l.y-.9,l.z)}}for(let s=0;s<160;s++){let a=s*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}let i=new wt;i.setAttribute("position",new dt(e,3)),i.setIndex(t),i.computeVertexNormals();let r=new pt(i,Gx);r.material.side=cn,gi.add(r)}md(!1);md(!0);const vc=new On(.48,.62,.43);vc.translate(0,.3,0);let qx=$e.sectors*$e.rows*hi;const Ro=new $n(vc,Wx,qx),tt=new St,Rr=new Fe;let so=0;const ct=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)};for(let n=0;n<$e.sectors;n++)for(let e=1;e<=$e.rows;e++)for(let t=0;t<hi;t++){let i=rd(n,t+1),r=new U(...hc(n,e,t+1));tt.position.copy(r),tt.rotation.set(0,-i-Math.PI/2,0),tt.updateMatrix(),Ro.setMatrixAt(so,tt.matrix),Rr.setHSL(.4+ct(so)*.06,.19,.12+ct(so)*.07),Ro.setColorAt(so++,Rr)}Ro.instanceMatrix.needsUpdate=!0;gi.add(Ro);for(let n of[!1,!0])for(let e of[$e.innerRailRadial,$e.outerRailRadial]){let t=[];for(let i=0;i<=140;i++){let r=pd(i/140*qt,e,n);t.push([r.x,r.y+.3,r.z])}Xx(t,.13,Gi,gi)}const Yx=kt("#1e292d",{side:cn,metalness:.7});let gd=[],_d=[];for(let n=0;n<=96;n++){let e=n/96*qt;gd.push(Math.cos(e)*138,35+Math.sin(e*2)*1.8,Math.sin(e)*112,Math.cos(e)*158,33,Math.sin(e)*133)}for(let n=0;n<96;n++){let e=n*2;_d.push(e,e+1,e+2,e+1,e+3,e+2)}let Go=new wt;Go.setAttribute("position",new dt(gd,3));Go.setIndex(_d);Go.computeVertexNormals();gi.add(new pt(Go,Yx));for(let n=0;n<48;n++){let e=n/48*qt;xn([Math.cos(e)*151,0,Math.sin(e)*128],[Math.cos(e)*151,33,Math.sin(e)*128],.28,gc,gi),xn([Math.cos(e)*138,35,Math.sin(e)*112],[Math.cos(e)*158,33,Math.sin(e)*133],.23,Gi,gi)}for(let n=0;n<80;n++){let e=n/80*qt,t=255+ct(n)*110,i=8+ct(n+3)*40;Yt(5+ct(n+10)*15,i,7+ct(n+20)*9,kt("#0c171d"),Math.cos(e)*t,i/2,Math.sin(e)*t)}const Ft=new Lt;xt.add(Ft);const $x=Yt(69,1.8,35,Vx,0,.9,0,Ft);$x.receiveShadow=!0;Yt(89,1.2,12,kr,0,.6,0,Ft);Yt(15,1.2,49,kr,0,.6,0,Ft);const vd=new Fr({color:"#958a64"});for(let n of[-17.6,17.6])Yt(69,.09,.13,vd,0,1.85,n,Ft);for(let n of[-34.6,34.6])Yt(.13,.09,35,vd,n,1.85,0,Ft);const xd=[[-46.5,-14],[-36,-26.5],[36,-26.5],[46.5,-14],[46.5,14],[36,26.5],[-36,26.5],[-46.5,14]],jx=rx({ringPoints:xd,steel:gc,rail:Gi,dark:kr});Ft.add(jx);for(const n of[29.2,32])for(let e=0;e<16;e++){const t=e/16*qt,i=(e+1)/16*qt;xn([Math.cos(t)*24,n,Math.sin(t)*12],[Math.cos(i)*24,n,Math.sin(i)*12],.17,gc,Ft),e%4===0&&xn([Math.cos(t)*24,n,Math.sin(t)*12],[Math.cos(t)*24,34,Math.sin(t)*12],.15,Gi,Ft)}const Ms=new Lt;Ft.add(Ms);for(let n of[-1,1])for(let e=0;e<20;e++){let t=-35+e*70/19;xn([t,5,n*26.25],[t,31,n*26.25],.08,Gi,Ms)}for(let n=0;n<16;n++){let e=n/16*qt;xn([Math.cos(e)*37,31.8,Math.sin(e)*20],[Math.cos(e)*22,36,Math.sin(e)*13],.18,Gi,Ft)}for(let n of[-1,1])for(let e=0;e<7;e++){let t=Yt(1.7,6,1.5,kr,n*42,24,e===0?-16:16,Ft);e>0&&(t.position.z=(e-3)*5)}const Md=()=>new Rt({uniforms:{time:{value:0},chapter:{value:0},hue:{value:new Fe("#497bd4")},intensity:{value:1},tourTex:{value:Il[0]},previousTex:{value:Il[0]},artBlend:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tourTex;uniform sampler2D previousTex;uniform float artBlend;uniform float time;uniform float chapter;uniform vec3 hue;uniform float intensity;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 uv=vUv;float t=time;float grid=1.;float waves=sin(uv.x*20.+t*.6+sin(uv.y*10.-t*.4)*3.)*.5+.5;float eyeY=(uv.y-.53)*13.;float eye=exp(-(eyeY*eyeY))*pow(max(0.,sin(uv.x*18.85)),6.);float crown=(1.-smoothstep(0.,.08,abs(uv.y-(.4+.3*abs(sin(uv.x*18.85))))));float bars=pow(max(0.,sin(uv.x*45.+sin(t*.3)*3.)),6.);float stars=step(.985,hash(floor(uv*vec2(220.,70.))))*(.5+.5*sin(t+uv.x*25.));float v=mix(waves*.25+eye*.9,bars*.45+eye*.7,step(.5,chapter));v=mix(v,crown*.9+waves*.25+stars,step(1.5,chapter));vec3 photo=mix(texture2D(previousTex,uv).rgb,texture2D(tourTex,uv).rgb,smoothstep(0.,1.,artBlend));vec3 c=mix(hue*(v*.9+.025),photo*.72+hue*v*.18,.62)*grid*intensity;if(chapter>2.5){vec2 cell=fract(uv*vec2(20.,5.))-.5;float d=abs(cell.x)*.8+abs(cell.y);float diamond=(1.-smoothstep(.26,.29,d));float sparkle=.35+.12*sin(t*.6+floor(uv.x*20.)*2.3+floor(uv.y*5.));c=(hue*(.09+diamond*(.35+sparkle*1.4))+vec3(.55,.10,.32)*waves*.3)*grid*intensity;}float alpha=.92;gl_FragColor=vec4(c,alpha);}",transparent:!0,side:cn,depthWrite:!1}),{screens:Co,frame:bd}=sx(xd,Md,kr);Ft.add(...Co,bd);const Cr=new Lt;Cr.position.set(0,4,0);Ft.add(Cr);const xc=new pt(new Or(Tr.flippingScreen.width,Tr.flippingScreen.height),Md());xc.geometry.translate(0,2.5,0);Cr.add(xc);Co.push(xc);Yt(64,5,.24,kr,0,2.5,-.16,Cr);const gt=new Lt;gt.position.y=1.8;Ft.add(gt);const Wo=kt("#c1a18a",{roughness:.8}),Wi=kt("#281b1d",{metalness:.45,roughness:.45}),yd=kt("#821f29"),Pr=kt("#090c10");function Xi(n,e,t,i,r,s,a,o=gt){let l=new pt(new ys(1,12,10),i);return l.scale.set(n,e,t),l.position.set(r,s,a),o.add(l),l}Xi(.23,.38,.14,Wi,0,1.1,0);Xi(.18,.22,.17,Wo,0,1.7,0);Xi(.19,.15,.18,Pr,0,1.83,-.02);Xi(.11,.06,.17,Pr,-.08,1.8,.07);Yt(.12,.09,.1,Wo,0,1.45,0,gt);const Mc=new pt(new Fo(.32,.68,8,1,!0),Wi);Mc.position.y=.73;Mc.rotation.z=Math.PI;gt.add(Mc);Yt(.09,.5,.025,yd,-.13,1.14,.125,gt);Yt(.09,.5,.025,yd,.13,1.14,.125,gt);const Nl=[];for(let n of[-1,1]){let e=new Lt;e.position.set(n*.11,.8,0),xn([0,0,0],[0,-.7,.01],.085,Pr,e),Yt(.15,.12,.27,Pr,0,-.74,.05,e),gt.add(e),Nl.push(e)}const Hr=new Lt;Hr.position.set(-.22,1.38,0);xn([0,0,0],[-.14,-.36,.06],.075,Wi,Hr);xn([-.14,-.36,.06],[-.11,-.64,.12],.055,Wi,Hr);Xi(.055,.06,.055,Wo,-.11,-.65,.12,Hr);gt.add(Hr);const vi=new Lt;vi.position.set(.23,1.38,0);xn([0,0,0],[.17,-.24,.08],.075,Wi,vi);xn([.17,-.24,.08],[.08,.12,.22],.055,Wi,vi);Xi(.055,.06,.055,Wo,.08,.12,.22,vi);xn([.08,.12,.22],[.03,.25,.12],.025,Pr,vi);Xi(.035,.045,.035,Gi,.03,.25,.12,vi);gt.add(vi);const _i=new qp("#fff1d6",8500,85,.22,.75,1.1);_i.position.set(10,32,8);_i.target=gt;_i.castShadow=!0;_i.shadow.mapSize.set(1024,1024);xt.add(_i);const bc=new Gh("#ffb790",35,12,1.2);bc.position.set(0,4,2);Ft.add(bc);const yc=new Lt;xt.add(yc);const Ec=nx().map(({zone:n,row:e,seat:t})=>{const[i,r,s]=hc(n,e,t);return[i,r+.6,s]}),Xo=new $n(new ec(.17,.36,2,4),kt("#19282b"),Ec.length),Lr=new $n(new ys(.1,4,3),new Fr({color:"#fff1b0"}),Ec.length);Ec.forEach((n,e)=>{tt.position.set(...n),tt.rotation.set(0,0,0),tt.scale.setScalar(.9),tt.updateMatrix(),Xo.setMatrixAt(e,tt.matrix),tt.position.y+=.65,tt.position.x+=.2,tt.scale.setScalar(.65+ct(e)*.9),tt.updateMatrix(),Lr.setMatrixAt(e,tt.matrix),Rr.setHSL(.58+ct(e)*.13,.35,.5+ct(e+2)*.3),Lr.setColorAt(e,Rr)});yc.add(Xo,Lr);for(const n of[Xo.material,Lr.material])n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 spectatorCenter=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
if(distance(spectatorCenter,cameraPosition)<1.25)gl_Position=vec4(2.,2.,2.,1.);`)},n.customProgramCacheKey=()=>"spectator-eye-clearance-v1";const ju=td,Sc=[];_s.forEach((n,e)=>{for(let t=1;t<=n.rows;t++)for(let i=1;i<=n.seats;i++)Sc.push(id(e,t,i))});const Ed=new $n(vc,kt("#272c30"),Sc.length);Sc.forEach((n,e)=>{tt.position.set(...n),tt.rotation.set(0,Math.atan2(-n[0],-n[2]),0),tt.scale.setScalar(1),tt.updateMatrix(),Ed.setMatrixAt(e,tt.matrix)});xt.add(Ed);const Sd=new Fo(1,1,20,1,!0);Sd.translate(0,-.5,0);const wd=[],wc=new Lt;xt.add(wc);const Kx=()=>new Rt({uniforms:{color:{value:new Fe("#539cfd")},power:{value:.13},time:{value:0}},transparent:!0,depthWrite:!1,blending:Oi,side:cn,vertexShader:"varying vec2 vUv;varying vec3 vPos;void main(){vUv=uv;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 color;uniform float power;uniform float time;varying vec2 vUv;varying vec3 vPos;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159265)),1.8);float fall=pow(clamp(vUv.y,0.,1.),1.2);float grain=.85+.15*sin(vUv.y*45.-time*.3);gl_FragColor=vec4(color*1.2,power*edge*fall*grain);}"}),Tc=tx(xt,Sd,Kx());wd.push(...Tc.lights);wd.forEach(({origin:n})=>Yt(.8,.9,.7,Pr,n.x,n.y+.3,n.z,wc));const Po=new Gh("#335ca5",15e3,140,1.3);Po.position.set(0,18,0);xt.add(Po);const Td=1600,Ad=new Float32Array(Td*3);for(let n=0;n<Td;n++){let e=[(ct(n+45)-.5)*140,ct(n+99)*24+1,(ct(n+56)-.5)*90];Ad.set(e,n*3)}const Rd=new wt;Rd.setAttribute("position",new mt(Ad,3));const Eo=new Rt({uniforms:{time:{value:0},color:{value:new Fe("#6994bf")},opacity:{value:.075},scale:{value:1}},transparent:!0,depthWrite:!1,blending:Oi,vertexShader:"uniform float time;uniform float scale;varying float vSeed;void main(){vec3 p=position;vSeed=fract(sin(p.x*6.2+p.z)*145.);p.x+=sin(time*.08+p.z*.1)*6.;p.z+=cos(time*.06+p.x*.07)*4.;p.y+=sin(time*.2+p.x)*1.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp((2500.+vSeed*1500.)/max(.1,-mv.z),1.,100.)*scale;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform vec3 color;uniform float opacity;varying float vSeed;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.5)*opacity;gl_FragColor=vec4(color,a);}"}),qo=new Ao(Rd,Eo);xt.add(qo);let Cd=new Float32Array(500*3);for(let n=0;n<500;n++)Cd.set([(ct(n+3)-.5)*100,ct(n+9)*40,(ct(n+12)-.5)*60],n*3);const So=new Ao(new wt().setAttribute("position",new mt(Cd,3)),new Fh({size:.12,color:"#d9b66e",transparent:!0,opacity:.55,blending:Oi,depthWrite:!1}));xt.add(So);const Yo=new nc([new ue(0,-.75),new ue(.6,0),new ue(.46,.32),new ue(.27,.44),new ue(0,.44)],8);Yo.computeVertexNormals();const Ac=new Vh({color:"#ff71bc",emissive:"#fb1485",emissiveIntensity:.65,metalness:.28,roughness:.4,flatShading:!0}),$o=new Lt;xt.add($o);const Lo=new $n(Yo,Ac,380),Do=new $n(Yo,Ac,130);$o.add(Lo,Do);const Pd=[];for(let n=0;n<380;n++)tt.position.set((ct(n+900)-.5)*66,2.15,(ct(n+940)-.5)*32),tt.rotation.set(ct(n)*.6,ct(n+6)*qt,ct(n+8)*.4),tt.scale.setScalar(.22+ct(n+980)*.5),tt.updateMatrix(),Lo.setMatrixAt(n,tt.matrix),Rr.setHSL(.89+ct(n)*.07,.82,.48+ct(n+1)*.22),Lo.setColorAt(n,Rr);for(let n=0;n<130;n++)Pd.push({x:(ct(n+321)-.5)*84,z:(ct(n+333)-.5)*44,y:ct(n+349)*29,size:.12+ct(n+353)*.32});$o.visible=!1;const Dr=new Lt;Ft.add(Dr);for(let n=0;n<5;n++){const e=new pt(Yo,Ac),t=n/5*qt;e.position.set(Math.cos(t)*23,12+Math.sin(t)*4,Math.sin(t)*14),e.scale.setScalar(n===0?2.8:1.6),Dr.add(e)}Dr.visible=!1;const Ld=Ov(xt,lt,{notify:yt}),Ku=Bv([xt,gi,Ft,Ms,wc,bd]);document.documentElement.dataset.staticBatches=`${Ku.before}/${Ku.after}`;const Zx=[{name:"深渊 · 序曲",top:"视觉 · 深渊",color:"#497acf",screen:"#356dd6",fog:"#436d9b"},{name:"兽笼 · 觉醒",top:"视觉 · 兽笼",color:"#ff233e",screen:"#d62239",fog:"#8d3148"},{name:"王冠 · 加冕",top:"视觉 · 王冠",color:"#ffcd78",screen:"#e9a847",fog:"#b69b62"},{name:"粉钻 · 心动返场",top:"视觉 · 粉钻",color:"#ff35b1",screen:"#ff56bd",fog:"#b3348b"}];let Uo=-1,Et=0,Zt=null,Sn=null;function oo(n,e,t=1.6){ld(Ze,lt),lt.position.distanceTo(n)>2||yo.active||Sn?(Zt=null,Ze.enabled=!1,Sn={to:n.clone(),targetTo:e.clone()}):Zt=hx(lt,Ze.target,n,e,t),Jn(t+.2)}function gn(n=Y.zone){return n<21?{angle:Math.PI/2-n/21*qt,floor:!1,name:`${n}区看台`}:{angle:Math.atan2(ju[n-21][1],ju[n-21][0]),floor:!0,name:`${nd[n-21]}区内场`}}function Fl(){if(gn().floor){const[e,,t]=id(Y.zone-21,Y.row,Y.seat);return new U(e,Y.standing?1.7:1.15,t)}let n=new U(...hc(Y.zone,Y.row,Y.seat));return n.y+=Y.standing?1.75:1.15,n}function Jx(){let n=new URLSearchParams(location.search);for(const e of["zone","row","seat"])n.set(e,Y[e]);try{history.replaceState(null,"",`${location.pathname}?${n}`)}catch{}}function xi(){Object.assign(Y,dc(Y));const n=uc(Y.zone);ee("#row").max=n.rows,ee("#row-number").max=n.rows,document.activeElement!==ee("#row-number")&&(ee("#row-number").value=Y.row),ee("#row-range-note").textContent=`${gn().floor?"内场":"看台"}可模拟 1—${n.rows} 排`,ee("#seat").max=n.seats;let e=Fl(),t=new U;gt.getWorldPosition(t),t.y+=1.5;let i=e.distanceTo(t);ee("#person-dist").textContent=`约 ${i.toFixed(0)} 米`,ee("#eye-height").textContent=`约 ${e.y.toFixed(1)} 米`;let r=new U(0,0,1).applyQuaternion(gt.quaternion),s=e.clone().sub(t).normalize(),a=r.dot(s);ee("#facing").textContent=a>.6?"偏正面":a<-.6?"偏背面":"偏侧面",ee("#distance").textContent=Y.mode==="overview"?"舞台整体结构高约 36 米":`至人物约 ${i.toFixed(0)} 米 · 模型估算`,ee("#seat-badge").textContent=Y.mode==="overview"?"自由探索 · 场馆总览":`${gn().name} · ${Y.row}排${Y.seat}座${Y.standing?" · 站立":""}`,ee("#zone-label").textContent=gn().name,ee("#zone-type").textContent=gn().floor?"内场示意位置":"看台示意位置",ee("#row-val").textContent=`${Y.row} 排${!gn().floor&&od(Y.row).upper?" · 上层":""}`,ee("#seat-val").textContent=`${Y.seat} 座`,ee("#row").value=Y.row,ee("#seat").value=Y.seat,Xt(".map-zone").forEach(o=>o.classList.toggle("selected",Number(o.dataset.zone)===Y.zone))}function Qn(n){if(Y.mode=n,n==="phone"&&(Y.follow=!0,ee("#follow-person").classList.add("active")),document.body.classList.toggle("seated",n==="seat"),document.body.classList.toggle("phone",n==="phone"),document.body.classList.toggle("director",n==="director"),document.body.classList.toggle("sky-view",n==="sky"),ee("#sky-toolbar").hidden=n!=="sky",Xt("[data-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.mode===n),e.setAttribute("aria-pressed",String(e.dataset.mode===n))}),ee("#phone-frame").hidden=n!=="phone",ee("#hint").textContent=n==="overview"?"拖动环顾场馆 · 滚轮靠近现场":n==="director"?"镜头正在缓慢巡游 · 随时切回我的视角":n==="sky"?"拖动环顾夜空 · 切换文字与造型":"拖动环顾 · 保持所在位置",Ze.enabled=n!=="director",Ze.enableZoom=n==="overview",Ze.enablePan=n==="overview",Ze.minDistance=n==="overview"?4:.1,Ze.maxDistance=n==="overview"?360:1,Ze.maxPolarAngle=n==="overview"?Math.PI*.49:Math.PI*.97,Ze.minPolarAngle=n==="overview"?0:.03,n==="overview")ln.setTarget(44,1.6),oo(new U(136,91,144),new U(0,12,0));else if(n==="seat"||n==="phone"){let e=Fl(),t=new U;gt.getWorldPosition(t),t.y+=1.2;let i=t.sub(e).normalize();ln.setTarget(n==="phone"?jo():60,1.6),oo(e,e.clone().add(i.multiplyScalar(.8)))}else if(n==="sky"){let e=Fl(),t=new U(0,129,-8).sub(e).normalize();ln.setTarget(76,1.6),oo(e,e.clone().add(t.multiplyScalar(.8))),Ld.focus()}else{const e=Y.time,t=e*.025;ln.setTarget(44,1.6),oo(new U(Math.cos(t)*150,60+Math.sin(e*.05)*16,Math.sin(t)*175),new U(gt.position.x*.3,13,gt.position.z*.3))}Jn(),xi(),Jx()}function jo(){const e=24*Y.zoom,t=Math.max(.1,ee("#phone-frame").getBoundingClientRect().height/mi.clientHeight);return Fi.radToDeg(2*Math.atan(34.61/(2*e*t)))}ee("#follow-person").onclick=()=>{Y.follow=!Y.follow,Y.follow&&ld(Ze,lt),Jn(),ee("#follow-person").classList.toggle("active",Y.follow),yt(Y.follow?"取景方向将跟随舞台人物":"已切换自由取景，拖动可环顾")};let ki=!1;Bn.addEventListener("pointerdown",n=>{Sn||(Y.mode==="seat"||Y.mode==="phone"||Y.mode==="sky")&&(ki=!0,Y.follow=!1,ee("#follow-person").classList.remove("active"),n.clientX,n.clientY,Bn.setPointerCapture(n.pointerId))});const Ol=new U;Ze.addEventListener("end",()=>{Rc=performance.now()+1800});Ze.addEventListener("start",()=>{if(Y.mode==="seat"||Y.mode==="phone"||Y.mode==="sky"){if(Sn){ki=!1;return}Ol.copy(lt.position),Zt=null}});Ze.addEventListener("change",()=>{if(ki&&(Y.mode==="seat"||Y.mode==="phone"||Y.mode==="sky")){let n=Ze.target.clone().sub(lt.position);lt.position.copy(Ol),Ze.target.copy(Ol).add(n)}});Bn.addEventListener("pointerup",()=>ki=!1);Bn.addEventListener("pointercancel",()=>ki=!1);function Qx(){let n=ee("#seat-map"),e="";const t=(r,s,a)=>[170+Math.cos(r)*s,142+Math.sin(r)*a];for(let r=0;r<21;r++){let s=Math.PI/2-r/21*qt,a=s-.46/21*qt,o=s+.46/21*qt,l=t(a,111,75),c=t(o,111,75),u=t(o,153,120),h=t(a,153,120),p=t(s,137,100);e+=`<path class="map-zone ${r===Y.zone?"selected":""}" data-zone="${r}" tabindex="0" role="button" aria-label="${gn(r).name}" fill="${r%3===1?"#8e83a5":"#647d64"}" d="M${l} A111 75 0 0 1 ${c} L${u} A153 120 0 0 0 ${h}Z"/><text x="${p[0]}" y="${p[1]+3}" text-anchor="middle" fill="#d2d8c5" font-size="8" pointer-events="none">${r}</text>`}[[120,186,43,16],[177,186,43,16],[120,83,43,16],[177,83,43,16],[254,124,17,38],[69,124,17,38]].forEach(([r,s,a,o],l)=>{e+=`<rect class="map-zone" data-zone="${21+l}" tabindex="0" role="button" aria-label="${gn(21+l).name}" x="${r}" y="${s}" width="${a}" height="${o}" rx="2" fill="#ae705c"/><text x="${r+a/2}" y="${s+o/2+3}" text-anchor="middle" fill="#e3d4b1" font-size="8" pointer-events="none">${nd[l]}</text>`}),n.innerHTML=`<text x="170" y="8" text-anchor="middle" fill="#77887c" font-size="8">图示方位 · 非地理朝向</text>${e}<rect x="102" y="111" width="136" height="62" rx="5" fill="#252f2c" stroke="#9d8e69" stroke-width="1"/><path d="M102 142h136M170 111v62" stroke="#c7ae73" stroke-width=".5" opacity=".5"/><text x="170" y="139" text-anchor="middle" fill="#c9bb95" font-size="10">万兽之王</text><text x="170" y="155" text-anchor="middle" fill="#7b8679" font-size="7">舞台整体 93 × 53 米</text>`,Xt(".map-zone").forEach(r=>{const s=()=>{Y.zone=Number(r.dataset.zone),xi(),(Y.mode==="seat"||Y.mode==="phone"||Y.mode==="sky")&&Qn(Y.mode)};r.addEventListener("click",s),r.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),s())})})}Qx();xi();ee("#seat-panel").inert=!0;function Vr(n){ee("#seat-panel").classList.toggle("open",n),ee("#seat-panel").inert=!n,ee("#seat-toggle").setAttribute("aria-expanded",String(n))}ee("#seat-toggle").onclick=()=>Vr(!ee("#seat-panel").classList.contains("open"));ee("#close-seats").onclick=()=>Vr(!1);document.addEventListener("keydown",n=>{n.key==="Escape"&&!ee("#source-dialog").open&&(Vr(!1),Y.compare&&Gr())});ee("#enter").onclick=()=>{Y.compare&&Gr(),Nd(0),Vr(!1),Qn("director"),Cn.enter()};ee("#take-seat").onclick=()=>{Qn("seat"),Vr(!1)};Xt("[data-mode]").forEach(n=>n.onclick=()=>{Y.compare&&Gr(),Qn(n.dataset.mode)});for(let n of["row","seat"])ee("#"+n).oninput=e=>{Y[n]=Number(e.target.value),xi(),(Y.mode==="seat"||Y.mode==="phone"||Y.mode==="sky")&&Qn(Y.mode)};ee("#row-number").onchange=n=>{n.target.value.trim()&&(Y.row=Number(n.target.value)),xi(),n.target.value=Y.row,["seat","phone","sky"].includes(Y.mode)&&Qn(Y.mode)};ee("#row-number").onkeydown=n=>{n.key==="Enter"?(n.preventDefault(),n.currentTarget.blur()):n.key==="Escape"&&(n.currentTarget.value=Y.row,n.currentTarget.blur())};ee("#standing").onclick=()=>{Y.standing=!Y.standing,ee("#standing").setAttribute("aria-checked",String(Y.standing)),xi(),["seat","phone","sky"].includes(Y.mode)&&Qn(Y.mode)};Xt("[data-zoom]").forEach(n=>n.onclick=()=>{if(Y.zoom=Number(n.dataset.zoom),Xt("[data-zoom]").forEach(e=>e.classList.toggle("active",e===n)),ee("#phone-zoom-label").textContent=Y.zoom+"×",Y.mode==="phone"){const e=jo(),t=Math.abs(Math.log2(Math.tan(ln.value*Math.PI/360)/Math.tan(e*Math.PI/360))),i=ud(.28+t*.2,.28,1.05);ln.setTarget(e,i),Jn(i+.2)}});function Dd(){try{localStorage.setItem("beast.positions.v1",JSON.stringify(Wt))}catch{yt("浏览器无法保存收藏，请保持此页面打开")}Ud()}function Ud(){ee("#saved-count").textContent=Wt.length,ee("#saved-list").innerHTML=Wt.length?Wt.map((n,e)=>`<div class="saved-card"><div><strong>${gn(n.zone).name}</strong><small>${n.row}排 · ${n.seat}座 · ${n.standing?"站立":"坐姿"}</small></div><div><button data-visit="${e}">查看</button><button data-remove="${e}" class="remove" aria-label="删除第${e+1}个收藏">×</button></div></div>`).join(""):'<div class="saved-empty">为这一夜，留一个位置。<br>选好位置后，点击「收藏」。</div>',ee("#compare").disabled=Wt.length<2,Xt("[data-visit]").forEach(n=>n.onclick=()=>{Object.assign(Y,Wt[Number(n.dataset.visit)]),ee("#standing").setAttribute("aria-checked",String(Y.standing)),Qn("seat")}),Xt("[data-remove]").forEach(n=>n.onclick=()=>{Y.compare&&Gr(),Wt.splice(Number(n.dataset.remove),1),Dd()})}ee("#save-seat").onclick=()=>{if(Wt.some(n=>n.zone===Y.zone&&n.row===Y.row&&n.seat===Y.seat&&n.standing===Y.standing)){yt("这个位置已经收藏了");return}if(Wt.length>=8){yt("最多收藏8个位置，请先移除一个");return}Wt.push({zone:Y.zone,row:Y.row,seat:Y.seat,standing:Y.standing}),Dd(),yt("已收藏，可在「我的收藏」比较位置")};Ud();Xt("[data-tab]").forEach(n=>n.onclick=()=>{Xt("[data-tab]").forEach(e=>e.classList.toggle("active",e===n)),ee("#select-content").hidden=n.dataset.tab!=="select",ee("#saved-content").hidden=n.dataset.tab!=="saved"});ee("#share-seat").onclick=async()=>{const n=new URL(location.href);n.searchParams.set("zone",Y.zone),n.searchParams.set("row",Y.row),n.searchParams.set("seat",Y.seat),n.searchParams.delete("v");try{if(!navigator.clipboard?.writeText)throw new Error("clipboard unavailable");await navigator.clipboard.writeText(n.href),yt("位置链接已复制，对方打开后可查看相同排座")}catch{prompt("复制这个链接，即可分享当前排座：",n.href)}};let Bl=!1;function Id(){Object.assign(Y,Wt[Y.compareIndex]),Qn("seat"),ee("#compare-name").textContent=`位置 ${Y.compareIndex+1} / ${Wt.length} · ${gn().name} ${Y.row}排`,xi()}ee("#compare").onclick=()=>{Wt.length<2||(Bl=Y.playing,Y.playing=!1,Y.compare=!0,Cn.pauseForScene(),Y.compareIndex=0,ee("#compare-banner").hidden=!1,ee("#compare-exit").hidden=!1,ee("#compare").hidden=!0,ee("#play").textContent="▶",ee("#play").setAttribute("aria-label","比较中，演出已暂停"),Id(),Vr(!1),yt("已锁定演出时刻，切换位置比较"))};ee("#compare-next").onclick=()=>{Y.compareIndex=(Y.compareIndex+1)%Wt.length,Id()};function Gr(){Y.compare=!1,ee("#compare-banner").hidden=!0,ee("#compare-exit").hidden=!0,ee("#compare").hidden=!1,Y.playing=Bl,Bl?Cn.resumeForScene():Cn.refresh(),ee("#play").textContent=Y.playing?"Ⅱ":"▶",ee("#play").setAttribute("aria-label",Y.playing?"暂停演出":"播放演出")}ee("#compare-exit").onclick=Gr;ee("#play").onclick=()=>{if(Y.compare){yt("比较中已锁定演出时刻，请先结束位置比较");return}Cn.toggle()};function Nd(n){Y.scene=ud(Math.floor(n),0,3),Uo=-1,Jn(),mc.prepareTexture(Math.min(Y.scene,2),"next").catch(()=>{})}for(let n of["fog","crowd"])ee("#"+n).onclick=()=>{Y[n]=!Y[n],ee("#"+n).classList.toggle("active",Y[n]),qo.visible=Y.fog,yc.visible=Y.crowd};ee("#inspection").onclick=()=>{Y.inspection=!Y.inspection,Jn(),ee("#inspection").classList.toggle("active",Y.inspection),yt(Y.inspection?"视野检查：已减少烟雾与舞台光效":"已恢复演出氛围")};function Fd(){const n=ee("#motion");n.textContent=Y.reduced?"恢复动态":"减少动态",n.setAttribute("aria-pressed",String(Y.reduced))}Fd();ee("#motion").onclick=()=>{Y.reduced=!Y.reduced,Fd();try{localStorage.setItem("beast.reduced-motion.v1",String(Y.reduced))}catch{}Jn(),yt(Y.reduced?"已降低闪烁和运动强度":"已恢复舞台动态")};ee("#sources").onclick=()=>ee("#source-dialog").showModal();ee("#close-sources").onclick=()=>ee("#source-dialog").close();ee("#source-dialog").addEventListener("click",n=>{if(n.target===ee("#source-dialog")){let e=ee("#source-dialog").getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&ee("#source-dialog").close()}});ee("#fullscreen").onclick=async()=>{try{const n=ee("#app");document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():typeof n.requestFullscreen=="function"?await n.requestFullscreen():yt("此浏览器暂不支持网页全屏，可横屏获得更大的观演画面")}catch{yt("暂时无法全屏，可横屏继续体验")}};let _n=Kn?3:matchMedia("(pointer: coarse)").matches||mi.clientWidth<700?2:1,Od=_n>=2;function Io(n){Kn&&(n=Math.max(2,n)),_n=n,Od=n>=2,vs=!0,Jn(),ee("#quality").textContent=Kn?"兼容 · "+(n===3?"省电":"流畅"):"画质 · "+(Y.quality==="auto"?"自动 · "+(n===3?"省电30帧":n===2?"流畅":"均衡"):n===0?"高":"流畅")}function eM(){if(!vs)return!1;const n=mi.clientWidth,e=mi.clientHeight;if(n<=0||e<=0)return!1;const t=zv(_n,n,devicePixelRatio),i=!Di;Di=t,Hv(zi,Kn?0:kv(_n,$u.color,$u.depth));let r;return Kn?(Dt.setDrawingBufferSize(n,e,t.ratio),r=!0):r=kx.configure({width:n,height:e,ratio:t.ratio,bloomScale:_n===0?1:.65}),Dt.shadowMap.enabled=t.shadows,_i.castShadow=t.shadows,qo.geometry.setDrawRange(0,t.fogCount),Xo.count=t.crowdCount,Lr.count=t.crowdCount,Tc.setStep(t.beamStep),i&&(ai=t.bloom?1:0,fi.enabled=t.bloom),lt.aspect=n/e,Y.mode==="phone"&&ln.setTarget(jo(),.35),lt.updateProjectionMatrix(),vs=!1,document.documentElement.dataset.msaaSamples=String(zi.renderTarget1.samples),document.documentElement.dataset.renderRatio=String(t.ratio),document.documentElement.dataset.qualityLevel=String(_n),r}ee("#quality").onclick=()=>{if(Kn){Y.quality="low",Io(_n===3?2:3),yt("兼容模式："+(_n===3?"省电画质":"流畅画质"));return}Y.quality=Y.quality==="auto"?"high":Y.quality==="high"?"low":"auto",Io(Y.quality==="high"?0:Y.quality==="low"||mi.clientWidth<700?2:1),yt(Y.quality==="high"?"已开启完整光效，设备发热时可切回自动":Y.quality==="low"?"已启用流畅画质":"将根据运行情况调整画质")};ee("#shot").onclick=()=>{try{Bd();let n=Dt.domElement,e=n.width,t=n.height,i=0,r=0;if(Y.mode==="phone"){let o=ee("#phone-frame").getBoundingClientRect(),l=Bn.getBoundingClientRect(),c=n.width/l.width;i=(o.left-l.left)*c,r=(o.top-l.top)*c,e=o.width*c,t=o.height*c}const s=document.createElement("canvas");s.width=Math.round(e),s.height=Math.round(t)+100;const a=s.getContext("2d");a.fillStyle="#0d1516",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,r,e,t,0,0,s.width,t),a.fillStyle="#d7bd87",a.font=`${Math.max(14,e*.017)}px sans-serif`,a.fillText("万兽之王 · 广州现场",18,t+30),a.fillStyle="#9ca998",a.font=`${Math.max(9,e*.01)}px sans-serif`,a.fillText(`${gn().name} · ${Y.row}排${Y.seat}座${Y.mode==="phone"?" · "+Y.zoom+"倍":""}`,18,t+54),a.fillText("非官方主题模拟 · 排座与距离为估算",18,t+77),s.toBlob(o=>{if(!o){yt("截图生成失败");return}let l=URL.createObjectURL(o),c=document.createElement("a");c.href=l,c.download=`万兽之王-广州现场-${Date.now()}.png`,c.click(),setTimeout(()=>URL.revokeObjectURL(l),5e3),yt("现场截图已导出")},"image/png")}catch{yt("截图未能导出，请稍后再试")}};function Zu(){vs=!0,Jn(.5)}typeof ResizeObserver<"u"?new ResizeObserver(Zu).observe(mi):window.addEventListener("resize",Zu);Io(_n);Bn.addEventListener("webglcontextlost",n=>{n.preventDefault(),Y.playing=!1,Cn.pauseForScene(),yt("图形资源中断，请重新加载页面恢复现场"),ee("#webgl-error").hidden=!1,ee("#loading").hidden=!0,window.__beastBoot?.fail("图形资源已中断，请用兼容模式重新进入。","graphics")});performance.now();let ur=0,zl=performance.now(),Rc=0,Ju=0,hr=0,Ba=!1,ao=!1;const Qu=new Fe,eh=new Fe,lo=new Fe;new U(0,-1,0);const za=new U;let th=0;Dt.info.autoReset=!1;for(const n of["pointerdown","pointermove","wheel"])Bn.addEventListener(n,()=>Rc=performance.now()+1200,{passive:!0});let co=0,ts=0,nh=!1;const dr=[],tM=ax(),uo=new U,ka=new U,ho=new U,ih=new U,rh=new hn,sh=new hn;function nM(n,{fixedDelta:e=null}={}){const t=e!==null,i=Math.max(0,(n-zl)/1e3);if(zl=n,!t&&Ba&&document.hidden){ur=0,dr.length=0,ts=n;return}const r=!!document.querySelector("dialog[open]");if(!t&&r){ao&&(ao=!1,jn.setBusy("scene-motion",!1)),ur=0,dr.length=0,ts=n;return}const s=Math.abs(es-(Y.mode==="sky"?1:0))>.002||Math.abs(Ri-(Y.mode==="phone"?1:0))>.002||Math.abs(mn-(Y.inspection?1:0))>.002||Math.abs(ai-(Di?.bloom?1:0))>.002,a=Y.playing||Y.mode==="sky"||!!Zt||!!Sn||yo.active||ln.active||vs||s||n<cs||n<Rc;Y.playing&&(Ju+=t?e:Math.min(i,.1));const o=a?_n===3?1e3/30:1e3/60:120;if(nh!==a&&(co=n,nh=a),!t&&n+.6<co)return;t||(co+=Math.max(1,Math.floor((n-co)/o)+1)*o);const l=ts?Math.max(0,n-ts):1e3/60,c=t?e:Math.min(l/1e3,.05);if(ts=n,a&&!t?(ur+=l/1e3,dr.push(l)):(ur=0,dr.length=0),eM(),!Di)return;const u=ln.step(c);Math.abs(lt.fov-u)>1e-6&&(lt.fov=u,lt.updateProjectionMatrix()),Ze.dampingFactor=1-Math.pow(1-.06,c*60),Y.time=Ju;let h=Y.time;Et=Y.scene;let p=Zx[Et];Et!==Uo&&(Uo=Et,document.body.classList.toggle("pink-scene",Et===3),ee("#visual-thumb").src=[Es,zo,cc,Ho][Et],Co.forEach(E=>{const x=E.material.uniforms;x.previousTex.value=x.tourTex.value,x.tourTex.value=Il[Math.min(Et,2)],x.artBlend.value=0}),Xt("[data-stage-theme]").forEach(E=>{E.classList.toggle("active",Number(E.dataset.stageTheme)===Et),E.setAttribute("aria-pressed",String(Number(E.dataset.stageTheme)===Et))})),hr=Pt(hr,Cn.energy(),1-Math.exp(-c*3)),es=Pt(es,Y.mode==="sky"?1:0,1-Math.exp(-c*4)),Ri=Pt(Ri,Y.mode==="phone"?1:0,1-Math.exp(-c*4)),mn=Pt(mn,Y.inspection?1:0,1-Math.exp(-c*4)),ai=Pt(ai,Di.bloom?1:0,1-Math.exp(-c*4)),!Di.bloom&&ai<.002&&(ai=0),fi.enabled=Di.bloom||ai>0;let d=Y.reduced?.25:.25+.06*Math.sin(h*.45),g=Pt(1,.1,mn);lo.set(p.color),Qu.set(p.screen),eh.set(p.fog),$o.visible=Et===3,Dr.visible=Et===3,Wi.color.set(Et===3?"#a12269":"#281b1d"),Et===3&&(Dr.children.forEach((E,x)=>{E.rotation.y=h*.24+x,E.rotation.z=Math.sin(h*.35+x)*.16}),Pd.forEach((E,x)=>{tt.position.set(E.x+Math.sin(h*.2+x)*1.4,2.5+((E.y-h*.65)%29+29)%29,E.z),tt.rotation.set(h*.12+x,h*.27+x,Math.sin(x)*.35),tt.scale.setScalar(E.size),tt.updateMatrix(),Do.setMatrixAt(x,tt.matrix)}),Do.instanceMatrix.needsUpdate=!0),Po.color.lerp(lo,1-Math.exp(-c*2.14)),Dt.toneMappingExposure=Pt(1.25,.85,Ri),Po.intensity=Pt(3200+hr*1200+d*400,5e3,mn)*Pt(1,.55,Ri),fd.intensity=Pt(.42,1.25,mn),_c.intensity=Pt(1.2,2.5,mn),fi.strength=Pt(Pt(.5,.25,Ri),.15,mn)*ai*Pt(1,.42,es),fi.threshold=Pt(.7,.95,es),Co.forEach(E=>{E.material.uniforms.time.value=h,E.material.uniforms.chapter.value=Et,E.material.uniforms.artBlend.value=Math.min(1,E.material.uniforms.artBlend.value+c*.7),E.material.uniforms.hue.value.lerp(Qu,1-Math.exp(-c*2.45)),E.material.uniforms.intensity.value=Pt(1.05+hr*.08,.35,mn)}),Ms.visible=Et<2,Ms.position.y=Et===0?2+Math.sin(h*.15)*1.5:0,Cr.rotation.x=Pt(Cr.rotation.x,Et>=2?-Math.PI/2:Et===1?-Math.PI/2*(.5+.5*Math.sin((h-30)/30*Math.PI*2)):0,1-Math.exp(-c*3));const v=h/Fx*qt;let m=Math.sin(v)*25,f=Math.sin(v*2)*9;if(gt.position.set(m,1.8,f),gt.rotation.y=Math.atan2(Math.cos(v)*25,Math.cos(v*2)*18),Nl[0].rotation.x=Math.sin(h*3)*.2,Nl[1].rotation.x=-Math.sin(h*3)*.2,Hr.rotation.z=Math.sin(h*.6)*.2-.15,vi.rotation.x=Math.sin(h*.9)*.08,bc.position.set(m,4,f+2),_i.position.set(m*.4,32,f*.4+7),_i.intensity=Pt(3800+hr*1500,4500,mn)*Pt(1,.65,Ri),Tc.update(h,Et,lo,g*(.07+(Y.reduced?.03:d*.025)+hr*.025),c),qo.visible=Y.fog&&mn<.998,Eo.uniforms.time.value=h,Eo.uniforms.color.value.lerp(eh,1-Math.exp(-c*1.83)),Eo.uniforms.opacity.value=(Et===0?.07:Et===1?.055:.04)*(1-mn),So.visible=!Y.inspection,So.position.y=Math.sin(h*.07)*3,So.rotation.y=h*.006,Lr.material.color.lerp(lo,1-Math.exp(-c*1.21)),!Sn)if(Zt){if(Y.mode==="director"){const E=h*.025;Zt.to.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),Zt.targetTo.set(gt.position.x*.3,13,gt.position.z*.3)}Y.mode==="phone"&&Y.follow&&(gt.getWorldPosition(za),za.y+=1.2,Zt.targetTo.copy(Zt.to).add(za.sub(Zt.to).normalize().multiplyScalar(.8))),Zt.step(c)&&(Zt=null)}else if(Y.mode==="director"){let E=h*.025;lt.position.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),Ze.target.set(gt.position.x*.3,13,gt.position.z*.3),lt.lookAt(Ze.target)}else Y.mode==="phone"&&Y.follow&&!ki&&(uo.copy(lt.position),gt.getWorldPosition(ka),ka.y+=1.2,ho.subVectors(Ze.target,uo).normalize(),ih.copy(ka).sub(uo).normalize(),rh.setFromUnitVectors(ho,ih),sh.identity().slerp(rh,1-Math.exp(-c*9)),ho.applyQuaternion(sh),Ze.target.copy(uo).addScaledVector(ho,.8)),Ze.update(c);const A=!!(Zt||Sn||ln.active||ki||Y.compare||n<cs);if(A!==ao&&(ao=A,jn.setBusy("scene-motion",A)),yo.step(c),Ld.update(c,{active:Y.mode==="sky"||Y.playing,reduced:Y.reduced,low:Od}),Dt.info.reset(),Bd(),Sn&&(yo.capture(Bn),lt.position.copy(Sn.to),Ze.target.copy(Sn.targetTo),lt.lookAt(Ze.target),lt.updateMatrixWorld(),Sn=null,Ze.enabled=Y.mode!=="director",ln.reset(Y.mode==="phone"?jo():Y.mode==="sky"?76:Y.mode==="seat"?60:44),lt.fov=ln.value,lt.updateProjectionMatrix()),Ba||(Ba=!0,ee("#loading").classList.add("done"),setTimeout(()=>ee("#loading").hidden=!0,800),document.documentElement.dataset.sceneReady="true",window.__beastBoot?.ready(),iM()),!t&&n-th>700&&(xi(),th=n),!t&&ur>3){const E=tM.sample(dr,{now:n,level:_n,automatic:Y.quality==="auto",settling:!!Zt||ln.active||s||n<cs}),x=E.summary;document.documentElement.dataset.fps=String(Math.round(x.fps)),document.documentElement.dataset.frameP95=x.p95.toFixed(1),document.documentElement.dataset.frameWorst=x.max.toFixed(1),document.documentElement.dataset.renderCalls=String(Dt.info.render.calls),ee("#quality").title=`最近动态画面约${Math.round(x.fps)}帧/秒，95%的帧间隔不超过${Math.round(x.p95)}毫秒。设备发热时可切回自动或流畅画质。`,E.level!==_n&&(Io(E.level),yt("已降低渲染负担，优先保持操作流畅")),dr.length=0,ur=0}}function Bd(){Kn?Dt.render(xt,lt):zi.render()}function zd(n){try{nM(n)}catch(e){window.__beastBoot?.fail("三维画面未能正常运行，请尝试兼容模式。","graphics"),console.error(e);return}requestAnimationFrame(zd)}let oh=!1;function iM(){oh||(oh=!0,setTimeout(()=>{jn.touch(),jn.start(),Cn.prepare?.(),mc.prepare({objects:[Lo,Do,Dr.children[0]]}).catch(()=>{}),rM.prepare();for(const n of[Es,Ho])Vo.prepare(n).catch(()=>{})},0))}for(const n of Xt("[data-gallery-group]")){const e=()=>{({live:[Ho,Es,cc],visual:[ko,zo,lc],sky:[Jh,Qh,ed]}[n.dataset.galleryGroup]||[]).slice(0,2).forEach(i=>Vo.prepare(i,{priority:"next",retry:!0}).catch(()=>{}))};n.addEventListener("pointerenter",e),n.addEventListener("focus",e),n.addEventListener("click",e)}window.__beastBoot?.phase("准备三维首帧");zl=performance.now();let ah=!1;function kd(n){ah||(ah=!0,zd(n))}requestAnimationFrame(kd);setTimeout(()=>kd(performance.now()),250);document.addEventListener("visibilitychange",()=>Cn.setVisibility(document.hidden));window.addEventListener("pagehide",()=>Cn.setVisibility(!0));window.addEventListener("pageshow",()=>Cn.setVisibility(document.hidden));const Ha=Object.values([Yd])[0];if(Ha){const n=ee("#support-open"),e=ee("#support-dialog"),t=ee("#support-intro"),i=ee("#support-gift"),r=ee("#support-reveal"),s=ee("#support-back"),a=o=>{t.hidden=o,i.hidden=!o,r.setAttribute("aria-expanded",String(o)),e.scrollTop=0};ee("#support-save").href=Ha,n.hidden=!1,n.onclick=()=>{a(!1),e.showModal()},r.onclick=()=>{ee("#support-code").src=Ha,a(!0),s.focus({preventScroll:!0})},s.onclick=()=>{a(!1),r.focus({preventScroll:!0})},ee("#support-close").onclick=()=>e.close(),e.addEventListener("close",()=>{a(!1)}),e.addEventListener("click",o=>{if(o.target===e){const l=e.getBoundingClientRect();(o.clientX<l.left||o.clientX>l.right||o.clientY<l.top||o.clientY>l.bottom)&&e.close()}})}const rM=Wv({warmup:jn,cache:Vo}),_r=document.querySelector("#author-note-dialog");for(const n of["author-note-open","author-note-gallery"])document.getElementById(n).onclick=()=>_r.showModal();document.getElementById("author-note-close").onclick=()=>_r.close();_r.addEventListener("click",n=>{if(n.target===_r){const e=_r.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&_r.close()}});
