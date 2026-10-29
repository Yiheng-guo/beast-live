(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Wd=""+new URL("support-wechat-Di4LVwf9.png",import.meta.url).href;const Ol="180",_r={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Dc=1,qd=2,sh=1,oh=2,Gn=3,di=0,en=1,an=2,Wn=0,Ii=1,Fi=2,Uc=3,Ic=4,Yd=5,Ci=100,$d=101,jd=102,Kd=103,Zd=104,Jd=200,Qd=201,ef=202,tf=203,ka=204,Ha=205,nf=206,rf=207,sf=208,of=209,af=210,lf=211,cf=212,uf=213,hf=214,Va=0,Ga=1,Wa=2,xr=3,Xa=4,qa=5,Ya=6,$a=7,ah=0,df=1,ff=2,li=0,lh=1,ch=2,uh=3,Bl=4,hh=5,dh=6,fh=7,ph=300,Mr=301,br=302,ja=303,Ka=304,Io=306,Za=1e3,Di=1001,Ja=1002,ln=1003,pf=1004,ws=1005,Pn=1006,Zo=1007,Ui=1008,Tn=1009,mh=1010,gh=1011,cs=1012,zl=1013,Oi=1014,Ln=1015,Un=1016,kl=1017,Hl=1018,us=1020,_h=35902,vh=35899,xh=1021,Mh=1022,Sn=1023,hs=1026,ds=1027,Vl=1028,Gl=1029,bh=1030,Wl=1031,Xl=1033,ho=33776,fo=33777,po=33778,mo=33779,Qa=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,hl=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,Ml=36492,bl=36494,yl=36495,El=36283,Sl=36284,wl=36285,Tl=36286,mf=3200,gf=3201,yh=0,_f=1,ai="",Jt="srgb",yr="srgb-linear",So="linear",tt="srgb",qi=7680,Nc=519,vf=512,xf=513,Mf=514,Eh=515,bf=516,yf=517,Ef=518,Sf=519,Al=35044,wf=35048,Fc="300 es",Dn=2e3,wo=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const ns=Math.PI/180,Er=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function ql(n,e){return(n%e+e)%e}function Tf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Af(n,e,t){return n!==e?(t-n)/(e-n):0}function is(n,e,t){return(1-t)*n+t*e}function Cf(n,e,t,i){return is(n,e,1-Math.exp(-t*i))}function Rf(n,e=1){return e-Math.abs(ql(n,e*2)-e)}function Pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Df(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Uf(n,e){return n+Math.random()*(e-n)}function If(n){return n*(.5-Math.random())}function Nf(n){n!==void 0&&(Oc=n);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(n){return n*ns}function Of(n){return n*Er}function Bf(n){return(n&n-1)===0&&n!==0}function zf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ni={DEG2RAD:ns,RAD2DEG:Er,generateUUID:Dr,clamp:We,euclideanModulo:ql,mapLinear:Tf,inverseLerp:Af,lerp:is,damp:Cf,pingpong:Rf,smoothstep:Pf,smootherstep:Lf,randInt:Df,randFloat:Uf,randFloatSpread:If,seededRandom:Nf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:Bf,ceilPowerOfTwo:zf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Hf,normalize:Vt,denormalize:dr};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*x,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),T=Math.atan2(C,p*A);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const _=o*A;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new P,Bc=new cn;class Ge{constructor(e,t,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],A=r[1],E=r[4],_=r[7],C=r[2],T=r[5],U=r[8];return s[0]=a*x+o*A+l*C,s[3]=a*m+o*E+l*T,s[6]=a*p+o*_+l*U,s[1]=c*x+u*A+h*C,s[4]=c*m+u*E+h*T,s[7]=c*p+u*_+h*U,s[2]=d*x+f*A+g*C,s[5]=d*m+f*E+g*T,s[8]=d*p+f*_+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Ge;function Sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vf(){const n=fs("canvas");return n.style.display="block",n}const zc={};function ps(n){n in zc||(zc[n]=!0,console.warn(n))}function Gf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const kc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const n={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?So:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yr]:{primaries:e,whitePoint:i,transfer:So,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const Ke=Wf();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class Xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=fs("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qf=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ea(r[a].image)):s.push(ea(r[a]))}else s=ea(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;const ta=new P;class Ot extends ki{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Di,r=Di,s=Pn,a=Ui,o=Sn,l=Tn,c=Ot.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Dr(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ph;Ot.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(f+1)/2,C=(p+1)/2,T=(u+d)/4,U=(h+x)/4,N=(g+m)/4;return E>_&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=U/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=U/s,r=N/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends $f{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),As.subVectors(this.max,Wr),$i.subVectors(e.a,Wr),ji.subVectors(e.b,Wr),Ki.subVectors(e.c,Wr),Jn.subVectors(ji,$i),Qn.subVectors(Ki,ji),Mi.subVectors($i,Ki);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Mi.z,Mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Mi.z,0,-Mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Mi.y,Mi.x,0];return!na(t,$i,ji,Ki,As)||(t=[1,0,0,0,1,0,0,0,1],!na(t,$i,ji,Ki,As))?!1:(Cs.crossVectors(Jn,Qn),t=[Cs.x,Cs.y,Cs.z],na(t,$i,ji,Ki,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,Ts=new Hi,$i=new P,ji=new P,Ki=new P,Jn=new P,Qn=new P,Mi=new P,Wr=new P,As=new P,Cs=new P,bi=new P;function na(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){bi.fromArray(n,s);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kf=new Hi,Xr=new P,ia=new P;class Ur{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(ia)),this.expandByPoint(Xr.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new P,ra=new P,Rs=new P,ei=new P,sa=new P,Ps=new P,oa=new P;class $l{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ra.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Rs),o=ei.dot(this.direction),l=-ei.dot(Rs),c=ei.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ra).addScaledVector(Rs,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){sa.subVectors(t,e),Ps.subVectors(i,e),oa.crossVectors(sa,Ps);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const l=o*this.direction.dot(Ps.crossVectors(ei,Ps));if(l<0)return null;const c=o*this.direction.dot(sa.cross(ei));if(c<0||l+c>a)return null;const u=-o*ei.dot(oa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,g,x,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,x,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Jf)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ti.crossVectors(i,rn),ti.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ti.crossVectors(i,rn)),ti.normalize(),Ls.crossVectors(rn,ti),r[0]=ti.x,r[4]=Ls.x,r[8]=rn.x,r[1]=ti.y,r[5]=Ls.y,r[9]=rn.y,r[2]=ti.z,r[6]=Ls.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],A=i[3],E=i[7],_=i[11],C=i[15],T=r[0],U=r[4],N=r[8],S=r[12],b=r[1],R=r[5],L=r[9],B=r[13],z=r[2],V=r[6],H=r[10],O=r[14],y=r[3],D=r[7],q=r[11],K=r[15];return s[0]=a*T+o*b+l*z+c*y,s[4]=a*U+o*R+l*V+c*D,s[8]=a*N+o*L+l*H+c*q,s[12]=a*S+o*B+l*O+c*K,s[1]=u*T+h*b+d*z+f*y,s[5]=u*U+h*R+d*V+f*D,s[9]=u*N+h*L+d*H+f*q,s[13]=u*S+h*B+d*O+f*K,s[2]=g*T+x*b+m*z+p*y,s[6]=g*U+x*R+m*V+p*D,s[10]=g*N+x*L+m*H+p*q,s[14]=g*S+x*B+m*O+p*K,s[3]=A*T+E*b+_*z+C*y,s[7]=A*U+E*R+_*V+C*D,s[11]=A*N+E*L+_*H+C*q,s[15]=A*S+E*B+_*O+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+x*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*d*c+x*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,_=u*x*c-g*h*c+g*o*f-a*x*f-u*o*p+a*h*p,C=g*h*l-u*x*l-g*o*d+a*x*d+u*o*m-a*h*m,T=t*A+i*E+r*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/T;return e[0]=A*U,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*U,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*p+i*l*p)*U,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*U,e[4]=E*U,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*U,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*U,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*U,e[8]=_*U,e[9]=(g*h*s-u*x*s-g*i*f+t*x*f+u*i*p-t*h*p)*U,e[10]=(a*x*s-g*o*s+g*i*c-t*x*c-a*i*p+t*o*p)*U,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*U,e[12]=C*U,e[13]=(u*x*r-g*h*r+g*i*d-t*x*d-u*i*m+t*h*m)*U,e[14]=(g*o*r-a*x*r-g*i*l+t*x*l+a*i*m-t*o*m)*U,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,x=a*u,m=a*h,p=o*h,A=l*c,E=l*u,_=l*h,C=i.x,T=i.y,U=i.z;return r[0]=(1-(x+p))*C,r[1]=(f+_)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(f-_)*T,r[5]=(1-(d+p))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(g+E)*U,r[9]=(m-A)*U,r[10]=(1-(d+x))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const a=Zi.set(r[4],r[5],r[6]).length(),o=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/a,h=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Dn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Dn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===wo)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Dn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Dn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===wo)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new P,xn=new et,Zf=new P(0,0,0),Jf=new P(1,1,1),ti=new P,Ls=new P,rn=new P,Vc=new et,Gc=new cn;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qf=0;const Wc=new P,Ji=new cn,kn=new et,Ds=new P,qr=new P,ep=new P,tp=new cn,Xc=new P(1,0,0),qc=new P(0,1,0),Yc=new P(0,0,1),$c={type:"added"},np={type:"removed"},Qi={type:"childadded",child:null},aa={type:"childremoved",child:null};class wt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new In,i=new cn,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new Ge}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ds.copy(e):Ds.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(qr,Ds,this.up):kn.lookAt(Ds,qr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(np),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new P,Hn=new P,la=new P,Vn=new P,er=new P,tr=new P,jc=new P,ca=new P,ua=new P,ha=new P,da=new ot,fa=new ot,pa=new ot;class En{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),Hn.subVectors(i,t),la.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Hn),l=Mn.dot(la),c=Hn.dot(Hn),u=Hn.dot(la),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,i),pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(da,s.x),a.addScaledVector(fa,s.y),a.addScaledVector(pa,s.z),a}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),Hn.subVectors(e,t),Mn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Mn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,i),tr.subVectors(s,i),ca.subVectors(e,i);const l=er.dot(ca),c=tr.dot(ca);if(l<=0&&c<=0)return t.copy(i);ua.subVectors(e,r);const u=er.dot(ua),h=tr.dot(ua);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(er,a);ha.subVectors(e,s);const f=er.dot(ha),g=tr.dot(ha);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(tr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return jc.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(jc,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=ql(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ma(a,s,e+1/3),this.g=ma(a,s,e),this.b=ma(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ke.workingToColorSpace(zt.copy(this),e),Math.round(We(zt.r*255,0,255))*65536+Math.round(We(zt.g*255,0,255))*256+Math.round(We(zt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Jt){Ke.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Us);const i=is(ni.h,Us.h,t),r=is(ni.s,Us.s,t),s=is(ni.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ie;Ie.NAMES=Ah;let ip=0;class Ir extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Ii,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nr extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new P,Is=new ce;let rp=0;class gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Al,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class Ch extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rh extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sp=0;const dn=new et,ga=new wt,nr=new P,sn=new Hi,Yr=new Hi,Nt=new P;class Tt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?Rh:Ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(sn.min,Yr.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,Yr.max),sn.expandByPoint(Nt)):(sn.expandByPoint(Yr.min),sn.expandByPoint(Yr.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),Nt.add(nr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new P,l[N]=new P;const c=new P,u=new P,h=new P,d=new ce,f=new ce,g=new ce,x=new P,m=new P;function p(N,S,b){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[N].add(x),o[S].add(x),o[b].add(x),l[N].add(m),l[S].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,S=A.length;N<S;++N){const b=A[N],R=b.start,L=b.count;for(let B=R,z=R+L;B<z;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new P,_=new P,C=new P,T=new P;function U(N){C.fromBufferAttribute(r,N),T.copy(C);const S=o[N];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(T,S);const R=_.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,R)}for(let N=0,S=A.length;N<S;++N){const b=A[N],R=b.start,L=b.count;for(let B=R,z=R+L;B<z;B+=3)U(e.getX(B+0)),U(e.getX(B+1)),U(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new et,yi=new $l,Ns=new Ur,Zc=new P,Fs=new P,Os=new P,Bs=new P,_a=new P,zs=new P,Jc=new P,ks=new P;class mt extends wt{constructor(e=new Tt,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_a.fromBufferAttribute(h,e),a?zs.addScaledVector(_a,u):zs.addScaledVector(_a.sub(t),u))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Ns.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ns,Zc)===null||yi.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),yi.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=A,C=E;_<C;_+=3){const T=o.getX(_),U=o.getX(_+1),N=o.getX(_+2);r=Hs(this,p,e,i,c,u,h,T,U,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const A=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);r=Hs(this,a,e,i,c,u,h,A,E,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=A,C=E;_<C;_+=3){const T=_,U=_+1,N=_+2;r=Hs(this,p,e,i,c,u,h,T,U,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const A=m,E=m+1,_=m+2;r=Hs(this,a,e,i,c,u,h,A,E,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function op(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;ks.copy(o),ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:n}}function Hs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Fs),n.getVertexPosition(l,Os),n.getVertexPosition(c,Bs);const u=op(n,e,t,i,Fs,Os,Bs,Jc);if(u){const h=new P;En.getBarycoord(Jc,Fs,Os,Bs,h),r&&(u.uv=En.getInterpolatedAttribute(r,o,l,c,h,new ce)),s&&(u.uv1=En.getInterpolatedAttribute(s,o,l,c,h,new ce)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};En.getNormal(Fs,Os,Bs,d.normal),u.face=d,u.barycoord=h}return u}class Nn extends Tt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(x,m,p,A,E,_,C,T,U,N,S){const b=_/U,R=C/N,L=_/2,B=C/2,z=T/2,V=U+1,H=N+1;let O=0,y=0;const D=new P;for(let q=0;q<H;q++){const K=q*R-B;for(let ee=0;ee<V;ee++){const xe=ee*b-L;D[x]=xe*A,D[m]=K*E,D[p]=z,c.push(D.x,D.y,D.z),D[x]=0,D[m]=0,D[p]=T>0?1:-1,u.push(D.x,D.y,D.z),h.push(ee/U),h.push(1-q/N),O+=1}}for(let q=0;q<N;q++)for(let K=0;K<U;K++){const ee=d+K+V*q,xe=d+K+V*(q+1),De=d+(K+1)+V*(q+1),fe=d+(K+1)+V*q;l.push(ee,xe,fe),l.push(xe,De,fe),y+=6}o.addGroup(f,y,S),f+=y,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function ap(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ms={clone:Sr,merge:Gt};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,Qc=new ce,eu=new ce;class Qt extends Lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,eu),t.subVectors(eu,Qc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class up extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new Qt(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new Qt(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Qt(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dh extends Ot{constructor(e=[],t=Mr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hp extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nn(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Wn});s.uniforms.tEquirect.value=t;const a=new mt(r,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Pn),new up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Lt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fp extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pp extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,l,c=ln,u=ln,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tu extends gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new et,nu=new et,Vs=[],iu=new Hi,mp=new et,$r=new mt,jr=new Ur;class qn extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,mp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),iu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(iu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),jr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sr),nu.multiplyMatrices(i,sr),$r.matrixWorld=nu,$r.raycast(e,Vs);for(let a=0,o=Vs.length;a<o;a++){const l=Vs[a];l.instanceId=s,l.object=this,t.push(l)}Vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new pp(new Float32Array(r*this.count),r,this.count,Vl,Ln));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xa=new P,gp=new P,_p=new Ge;class oi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xa.subVectors(i,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_p.getNormalMatrix(e),r=this.coplanarPoint(xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ur,vp=new ce(.5,.5),Gs=new P;class Kl{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],A=s[12],E=s[13],_=s[14],C=s[15];if(r[0].setComponents(c-a,f-u,p-g,C-A).normalize(),r[1].setComponents(c+a,f+u,p+g,C+A).normalize(),r[2].setComponents(c+o,f+h,p+x,C+E).normalize(),r[3].setComponents(c-o,f-h,p-x,C-E).normalize(),i)r[4].setComponents(l,d,m,_).normalize(),r[5].setComponents(c-l,f-d,p-m,C-_).normalize();else if(r[4].setComponents(c-l,f-d,p-m,C-_).normalize(),t===Dn)r[5].setComponents(c+l,f+d,p+m,C+_).normalize();else if(t===wo)r[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=vp.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Gs.x=r.normal.x>0?e.max.x:e.min.x,Gs.y=r.normal.y>0?e.max.y:e.min.y,Gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ru=new et,Cl=new $l,Ws=new Ur,Xs=new P;class To extends wt{constructor(e=new Tt,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;ru.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(ru);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Xs.fromBufferAttribute(h,m),su(Xs,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Xs.fromBufferAttribute(h,g),su(Xs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function su(n,e,t,i,r,s,a){const o=Cl.distanceSqToPoint(n);if(o<t){const l=new P;Cl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ih extends Ot{constructor(e,t,i=Oi,r,s,a,o=ln,l=ln,c,u=hs,h=1){if(u!==hs&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nh extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zl extends Tt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=i*2+s,x=r+1,m=new P,p=new P;for(let A=0;A<=g;A++){let E=0,_=0,C=0,T=0;if(A<=i){const S=A/i,b=S*Math.PI/2;_=-u-e*Math.cos(b),C=e*Math.sin(b),T=-e*Math.cos(b),E=S*h}else if(A<=i+s){const S=(A-i)/s;_=-u+S*t,C=e,T=0,E=h+S*d}else{const S=(A-i-s)/i,b=S*Math.PI/2;_=u+e*Math.sin(b),C=e*Math.cos(b),T=e*Math.sin(b),E=h+d+S*h}const U=Math.max(0,Math.min(1,E/f));let N=0;A===0?N=.5/r:A===g&&(N=-.5/r);for(let S=0;S<=r;S++){const b=S/r,R=b*Math.PI*2,L=Math.sin(R),B=Math.cos(R);p.x=-C*B,p.y=_,p.z=C*L,o.push(p.x,p.y,p.z),m.set(-C*B,T,C*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+N,U)}if(A>0){const S=(A-1)*x;for(let b=0;b<r;b++){const R=S+b,L=S+b+1,B=A*x+b,z=A*x+b+1;a.push(R,L,B),a.push(L,z,B)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ms extends Tt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=i/2;let p=0;A(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function A(){const _=new P,C=new P;let T=0;const U=(t-e)/i;for(let N=0;N<=s;N++){const S=[],b=N/s,R=b*(t-e)+e;for(let L=0;L<=r;L++){const B=L/r,z=B*l+o,V=Math.sin(z),H=Math.cos(z);C.x=R*V,C.y=-b*i+m,C.z=R*H,h.push(C.x,C.y,C.z),_.set(V,U,H).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-b),S.push(g++)}x.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const b=x[S][N],R=x[S+1][N],L=x[S+1][N+1],B=x[S][N+1];(e>0||S!==0)&&(u.push(b,R,B),T+=3),(t>0||S!==s-1)&&(u.push(R,L,B),T+=3)}c.addGroup(p,T,0),p+=T}function E(_){const C=g,T=new ce,U=new P;let N=0;const S=_===!0?e:t,b=_===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const R=g;for(let L=0;L<=r;L++){const z=L/r*l+o,V=Math.cos(z),H=Math.sin(z);U.x=S*H,U.y=m*b,U.z=S*V,h.push(U.x,U.y,U.z),d.push(0,b,0),T.x=V*.5+.5,T.y=H*.5*b+.5,f.push(T.x,T.y),g++}for(let L=0;L<r;L++){const B=C+L,z=R+L;_===!0?u.push(z,z+1,B):u.push(z+1,z,B),N+=3}c.addGroup(p,N,_===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class No extends Ms{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new No(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ce:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,r=[],s=[],a=[],o=new P,l=new et;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(We(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fh extends jn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xp extends Fh{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Jl(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const qs=new P,Ma=new Jl,ba=new Jl,ya=new Jl;class Oh extends jn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(qs.subVectors(r[0],r[1]).add(r[0]),c=qs);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(qs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ma.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),ba.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),ya.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ba.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ya.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Ma.calc(l),ba.calc(l),ya.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ou(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Mp(n,e){const t=1-n;return t*t*e}function bp(n,e){return 2*(1-n)*n*e}function yp(n,e){return n*n*e}function rs(n,e,t,i){return Mp(n,e)+bp(n,t)+yp(n,i)}function Ep(n,e){const t=1-n;return t*t*t*e}function Sp(n,e){const t=1-n;return 3*t*t*n*e}function wp(n,e){return 3*(1-n)*n*n*e}function Tp(n,e){return n*n*n*e}function ss(n,e,t,i,r){return Ep(n,e)+Sp(n,t)+wp(n,i)+Tp(n,r)}class Ap extends jn{constructor(e=new ce,t=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ce){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ss(e,r.x,s.x,a.x,o.x),ss(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cp extends jn{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ss(e,r.x,s.x,a.x,o.x),ss(e,r.y,s.y,a.y,o.y),ss(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rp extends jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends jn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends jn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(rs(e,r.x,s.x,a.x),rs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends jn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(rs(e,r.x,s.x,a.x),rs(e,r.y,s.y,a.y),rs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(ou(o,l.x,c.x,u.x,h.x),ou(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var Up=Object.freeze({__proto__:null,ArcCurve:xp,CatmullRomCurve3:Oh,CubicBezierCurve:Ap,CubicBezierCurve3:Cp,EllipseCurve:Fh,LineCurve:Rp,LineCurve3:Pp,QuadraticBezierCurve:Lp,QuadraticBezierCurve3:Bh,SplineCurve:Dp});class Ql extends Tt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=We(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new ce,f=new P,g=new P,x=new P;let m=0,p=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let A=0;A<=t;A++){const E=i+A*u*r,_=Math.sin(E),C=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*_,h.y=e[T].y,h.z=e[T].x*C,a.push(h.x,h.y,h.z),d.x=A/t,d.y=T/(e.length-1),o.push(d.x,d.y);const U=l[3*T+0]*_,N=l[3*T+1],S=l[3*T+0]*C;c.push(U,N,S)}}for(let A=0;A<t;A++)for(let E=0;E<e.length-1;E++){const _=E+A*e.length,C=_,T=_+e.length,U=_+e.length+1,N=_+1;s.push(C,T,N),s.push(U,N,T)}this.setIndex(s),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.points,e.segments,e.phiStart,e.phiLength)}}class Fr extends Tt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let E=0;E<c;E++){const _=E*h-s;g.push(_,-A,0),x.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const E=A+c*p,_=A+c*(p+1),C=A+1+c*(p+1),T=A+1+c*p;f.push(E,_,T),f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class bs extends Tt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const A=[],E=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-E),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const E=u[p][A+1],_=u[p][A],C=u[p+1][A],T=u[p+1][A+1];(p!==0||a>0)&&f.push(E,_,T),(p!==i-1||l<Math.PI)&&f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends Tt{constructor(e=new Bh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ce;let u=new P;const h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(){for(let E=0;E<t;E++)m(E);m(s===!1?t:0),A(),p()}function m(E){u=e.getPointAt(E/t,u);const _=a.normals[E],C=a.binormals[E];for(let T=0;T<=r;T++){const U=T/r*Math.PI*2,N=Math.sin(U),S=-Math.cos(U);l.x=S*_.x+N*C.x,l.y=S*_.y+N*C.y,l.z=S*_.z+N*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let _=1;_<=r;_++){const C=(r+1)*(E-1)+(_-1),T=(r+1)*E+(_-1),U=(r+1)*E+_,N=(r+1)*(E-1)+_;g.push(C,T,N),g.push(T,U,N)}}function A(){for(let E=0;E<=t;E++)for(let _=0;_<=r;_++)c.x=E/t,c.y=_/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ec(new Up[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ip extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zh extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Np extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Op{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Bp=new Op;class tc{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const or=new WeakMap;class zp extends tc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=or.get(a);h===void 0&&(h=[],or.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=fs("img");function l(){u(),t&&t(this);const h=or.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}or.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Ea.remove(`image:${e}`);const d=or.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}or.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class kp extends tc{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,a=new zp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Fo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hp extends Fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sa=new et,au=new P,lu=new P;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vp extends nc{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Er*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gp extends Fo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cu=new et,Kr=new P,wa=new P;class Wp extends nc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),wa.copy(i.position),wa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wa),i.updateMatrixWorld(),r.makeTranslation(-Kr.x,-Kr.y,-Kr.z),cu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu,i.coordinateSystem,i.reversedDepth)}}class kh extends Fo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ic extends Lh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xp extends nc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qp extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Xp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yp extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $p{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class uu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jp extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hu(n,e,t,i){const r=Kp(i);switch(t){case xh:return n*e;case Vl:return n*e/r.components*r.byteLength;case Gl:return n*e/r.components*r.byteLength;case bh:return n*e*2/r.components*r.byteLength;case Wl:return n*e*2/r.components*r.byteLength;case Mh:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case Xl:return n*e*4/r.components*r.byteLength;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(e,8)/4;case Qa:case tl:return Math.max(n,8)*Math.max(e,8)/2;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ml:case bl:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case El:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(n){switch(n){case Tn:case mh:return{byteLength:1,components:1};case cs:case gh:case Un:return{byteLength:2,components:1};case kl:case Hl:return{byteLength:2,components:4};case Oi:case zl:case Ln:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Hh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bm=`#define PI 3.141592653589793
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
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,Km=`struct PhysicalMaterial {
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
}`,Zm=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,S0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,R0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Jp,alphahash_pars_fragment:Qp,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:rm,aomap_pars_fragment:sm,batching_pars_vertex:om,batching_vertex:am,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:um,iridescence_fragment:hm,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:_m,color_pars_fragment:vm,color_pars_vertex:xm,color_vertex:Mm,common:bm,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Em,displacementmap_pars_vertex:Sm,displacementmap_vertex:wm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:Cm,colorspace_pars_fragment:Rm,envmap_fragment:Pm,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Wm,envmap_vertex:Im,fog_vertex:Nm,fog_pars_vertex:Fm,fog_fragment:Om,fog_pars_fragment:Bm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:km,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Xm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:$m,lights_physical_fragment:jm,lights_physical_pars_fragment:Km,lights_fragment_begin:Zm,lights_fragment_maps:Jm,lights_fragment_end:Qm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:vg,normal_vertex:xg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Sg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Cg,dithering_fragment:Rg,dithering_pars_fragment:Pg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ng,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:kg,specularmap_fragment:Hg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:$g,uv_vertex:jg,worldpos_vertex:Kg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:r0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:u0,meshbasic_vert:h0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:x0,meshphong_frag:M0,meshphysical_vert:b0,meshphysical_frag:y0,meshtoon_vert:E0,meshtoon_frag:S0,points_vert:w0,points_frag:T0,shadow_vert:A0,shadow_frag:C0,sprite_vert:R0,sprite_frag:P0},de={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Rn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Rn.physical={uniforms:Gt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ys={r:0,b:0,g:0},Si=new In,L0=new et;function D0(n,e,t,i,r,s,a){const o=new Ie(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function x(E){let _=!1;const C=g(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,_){const C=g(_);C&&(C.isCubeTexture||C.mapping===Io)?(u===void 0&&(u=new mt(new Nn(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Sr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Si.copy(_.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Si)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,(h!==C||d!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new mt(new Fr(2,2),new Ct({name:"BackgroundMaterial",uniforms:Sr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,_){E.getRGB(Ys,Ph(n)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,_,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:x,addToRenderList:m,dispose:A}}function U0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,R,L,B,z){let V=!1;const H=h(B,L,R);s!==H&&(s=H,c(s.object)),V=f(b,B,L,z),V&&g(b,B,L,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(b,R,L,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,R,L){const B=L.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let H=V[B];return H===void 0&&(H=d(l()),V[B]=H),H}function d(b){const R=[],L=[],B=[];for(let z=0;z<t;z++)R[z]=0,L[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,R,L,B){const z=s.attributes,V=R.attributes;let H=0;const O=L.getAttributes();for(const y in O)if(O[y].location>=0){const q=z[y];let K=V[y];if(K===void 0&&(y==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),y==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),q===void 0||q.attribute!==K||K&&q.data!==K.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(b,R,L,B){const z={},V=R.attributes;let H=0;const O=L.getAttributes();for(const y in O)if(O[y].location>=0){let q=V[y];q===void 0&&(y==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),y==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const K={};K.attribute=q,q&&q.data&&(K.data=q.data),z[y]=K,H++}s.attributes=z,s.attributesNum=H,s.index=B}function x(){const b=s.newAttributes;for(let R=0,L=b.length;R<L;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const L=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;L[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),z[b]!==R&&(n.vertexAttribDivisor(b,R),z[b]=R)}function A(){const b=s.newAttributes,R=s.enabledAttributes;for(let L=0,B=R.length;L<B;L++)R[L]!==b[L]&&(n.disableVertexAttribArray(L),R[L]=0)}function E(b,R,L,B,z,V,H){H===!0?n.vertexAttribIPointer(b,R,L,z,V):n.vertexAttribPointer(b,R,L,B,z,V)}function _(b,R,L,B){x();const z=B.attributes,V=L.getAttributes(),H=R.defaultAttributeValues;for(const O in V){const y=V[O];if(y.location>=0){let D=z[O];if(D===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(D=b.instanceColor)),D!==void 0){const q=D.normalized,K=D.itemSize,ee=e.get(D);if(ee===void 0)continue;const xe=ee.buffer,De=ee.type,fe=ee.bytesPerElement,Q=De===n.INT||De===n.UNSIGNED_INT||D.gpuType===zl;if(D.isInterleavedBufferAttribute){const ie=D.data,he=ie.stride,be=D.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<y.locationSize;Te++)p(y.location+Te,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<y.locationSize;Te++)m(y.location+Te);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Te=0;Te<y.locationSize;Te++)E(y.location+Te,K/y.locationSize,De,q,he*fe,(be+K/y.locationSize*Te)*fe,Q)}else{if(D.isInstancedBufferAttribute){for(let ie=0;ie<y.locationSize;ie++)p(y.location+ie,D.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ie=0;ie<y.locationSize;ie++)m(y.location+ie);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ie=0;ie<y.locationSize;ie++)E(y.location+ie,K/y.locationSize,De,q,K*fe,K/y.locationSize*ie*fe,Q)}}else if(H!==void 0){const q=H[O];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(y.location,q);break;case 3:n.vertexAttrib3fv(y.location,q);break;case 4:n.vertexAttrib4fv(y.location,q);break;default:n.vertexAttrib1fv(y.location,q)}}}}A()}function C(){N();for(const b in i){const R=i[b];for(const L in R){const B=R[L];for(const z in B)u(B[z].object),delete B[z];delete R[L]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const R=i[b.id];for(const L in R){const B=R[L];for(const z in B)u(B[z].object),delete B[z];delete R[L]}delete i[b.id]}function U(b){for(const R in i){const L=i[R];if(L[b.id]===void 0)continue;const B=L[b.id];for(const z in B)u(B[z].object),delete B[z];delete L[b.id]}}function N(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function I0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Sn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const N=U===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Tn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ln&&!N)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function F0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,E=A*4;let _=p.clippingState||null;l.value=_,_=u(g,d,E,f);for(let C=0;C!==E;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=f;E!==x;++E,_+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function O0(n){let e=new WeakMap;function t(a,o){return o===ja?a.mapping=Mr:o===Ka&&(a.mapping=br),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===Ka)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hp(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const mr=4,du=[.125,.215,.35,.446,.526,.582],Ri=20,Ta=new ic,fu=new Ie;let Aa=null,Ca=0,Ra=0,Pa=!1;const Ai=(1+Math.sqrt(5))/2,ar=1/Ai,pu=[new P(-Ai,ar,0),new P(Ai,ar,0),new P(-ar,0,Ai),new P(ar,0,Ai),new P(0,Ai,-ar),new P(0,Ai,ar),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],B0=new P;class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=B0}=s;Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ca,Ra),this._renderer.xr.enabled=Pa,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Un,format:Sn,colorSpace:yr,depthBuffer:!1},r=gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z0(s)),this._blurMaterial=k0(s,e,t)}return r}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,r,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(fu),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new Nr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new mt(new Nn,x);let p=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,p=!0):(x.color.copy(fu),p=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const C=this._cubeSize;$s(r,_*C,E>2?C:0,C,C),h.setRenderTarget(r),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pu[(r-s-1)%pu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let A=0;for(let U=0;U<Ri;++U){const N=U/x,S=Math.exp(-N*N/2);p.push(S),U===0?A+=S:U<m&&(A+=2*S)}for(let U=0;U<p.length;U++)p[U]=p[U]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const _=this._sizeLods[r],C=3*_*(r>E-mr?r-E+mr:0),T=4*(this._cubeSize-_);$s(t,C,T,3*_,2*_),l.setRenderTarget(t),l.render(h,Ta)}}function z0(n){const e=[],t=[],i=[];let r=n;const s=n-mr+1+du.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-mr?l=du[a-n+mr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,A=new Float32Array(x*g*f),E=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const U=T%3*2/3-1,N=T>2?0:-1,S=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];A.set(S,x*g*T),E.set(d,m*g*T);const b=[T,T,T,T,T,T];_.set(b,p*g*T)}const C=new Tt;C.setAttribute("position",new gt(A,x)),C.setAttribute("uv",new gt(E,m)),C.setAttribute("faceIndex",new gt(_,p)),e.push(C),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gu(n,e,t){const i=new gn(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function k0(n,e,t){const i=new Float32Array(Ri),r=new P(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function _u(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vu(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function H0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ja||l===Ka,u=l===Mr||l===br;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new mu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new mu(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function V0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const A=f.array;x=f.version;for(let E=0,_=A.length;E<_;E+=3){const C=A[E+0],T=A[E+1],U=A[E+2];d.push(C,T,T,U,U,C)}}else if(g!==void 0){const A=g.array;x=g.version;for(let E=0,_=A.length/3-1;E<_;E+=3){const C=E+0,T=E+1,U=E+2;d.push(C,T,T,U,U,C)}}else return;const m=new(Sh(d)?Rh:Ch)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function W0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*x[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function X0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q0(n,e,t){const i=new WeakMap,r=new ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let _=o.attributes.position.count*E,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*C*4*h),U=new wh(T,_,C,h);U.type=Ln,U.needsUpdate=!0;const N=E*4;for(let b=0;b<h;b++){const R=m[b],L=p[b],B=A[b],z=_*C*4*b;for(let V=0;V<R.count;V++){const H=V*N;f===!0&&(r.fromBufferAttribute(R,V),T[z+H+0]=r.x,T[z+H+1]=r.y,T[z+H+2]=r.z,T[z+H+3]=0),g===!0&&(r.fromBufferAttribute(L,V),T[z+H+4]=r.x,T[z+H+5]=r.y,T[z+H+6]=r.z,T[z+H+7]=0),x===!0&&(r.fromBufferAttribute(B,V),T[z+H+8]=r.x,T[z+H+9]=r.y,T[z+H+10]=r.z,T[z+H+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:U,size:new ce(_,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Y0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Vh=new Ot,xu=new Ih(1,1),Gh=new wh,Wh=new jf,Xh=new Dh,Mu=[],bu=[],yu=new Float32Array(16),Eu=new Float32Array(9),Su=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mu[r];if(s===void 0&&(s=new Float32Array(r),Mu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function J0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;Su.set(i),n.uniformMatrix2fv(this.addr,!1,Su),It(t,i)}}function Q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),It(t,i)}}function e_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,i))return;yu.set(i),n.uniformMatrix4fv(this.addr,!1,yu),It(t,i)}}function t_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function s_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function c_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=Eh,s=xu):s=Vh,t.setTexture2D(e||s,r)}function u_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wh,r)}function h_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xh,r)}function d_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gh,r)}function f_(n){switch(n){case 5126:return $0;case 35664:return j0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(n,e){n.uniform1fv(this.addr,e)}function m_(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function g_(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function __(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function v_(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x_(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M_(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b_(n,e){n.uniform1iv(this.addr,e)}function y_(n,e){n.uniform2iv(this.addr,e)}function E_(n,e){n.uniform3iv(this.addr,e)}function S_(n,e){n.uniform4iv(this.addr,e)}function w_(n,e){n.uniform1uiv(this.addr,e)}function T_(n,e){n.uniform2uiv(this.addr,e)}function A_(n,e){n.uniform3uiv(this.addr,e)}function C_(n,e){n.uniform4uiv(this.addr,e)}function R_(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vh,s[a])}function P_(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wh,s[a])}function L_(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xh,s[a])}function D_(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gh,s[a])}function U_(n){switch(n){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return x_;case 35676:return M_;case 5124:case 35670:return b_;case 35667:case 35671:return y_;case 35668:case 35672:return E_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return T_;case 36295:return A_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}class I_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f_(t.type)}}class N_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function O_(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),a=La.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wu(t,c===void 0?new I_(o,n,e):new N_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new F_(o),wu(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);O_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Tu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const B_=37297;let z_=0;function k_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Au=new Ge;function H_(n){Ke._getMatrix(Au,Ke.workingColorSpace,n);const e=`mat3( ${Au.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case So:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+k_(n.getShaderSource(e),o)}else return s}function V_(n,e){const t=H_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G_(n,e){let t;switch(e){case lh:t="Linear";break;case ch:t="Reinhard";break;case uh:t="Cineon";break;case Bl:t="ACESFilmic";break;case dh:t="AgX";break;case fh:t="Neutral";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new P;function W_(){Ke.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function q_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ts(n){return n!==""}function Ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace($_,K_)}const j_=new Map;function K_(n,e){let t=qe[e];if(t===void 0){const i=j_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(Z_,J_)}function J_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Q_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case br:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===br&&(e="ENVMAP_MODE_REFRACTION"),e}function nv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function iv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q_(t),c=ev(t),u=tv(t),h=nv(t),d=iv(t),f=X_(t),g=q_(s),x=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?qe.tonemapping_pars_fragment:"",t.toneMapping!==li?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=Rl(a),a=Ru(a,t),a=Pu(a,t),o=Rl(o),o=Ru(o,t),o=Pu(o,t),a=Lu(a),o=Lu(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+m+a,_=A+p+o,C=Tu(r,r.VERTEX_SHADER,E),T=Tu(r,r.FRAGMENT_SHADER,_);r.attachShader(x,C),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function U(R){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(C)||"",z=r.getShaderInfoLog(T)||"",V=L.trim(),H=B.trim(),O=z.trim();let y=!0,D=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,T);else{const q=Cu(r,C,"vertex"),K=Cu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+q+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||O==="")&&(D=!1);D&&(R.diagnostics={runnable:y,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(C),r.deleteShader(T),N=new go(r,x),S=Y_(r,x)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,B_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let sv=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new av(e),t.set(e,i)),i}}class av{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}}function lv(n,e,t,i,r,s,a){const o=new Th,l=new ov,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,R,L,B){const z=L.fog,V=B.geometry,H=S.isMeshStandardMaterial?L.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),y=O&&O.mapping===Io?O.image.height:null,D=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,K=q!==void 0?q.length:0;let ee=0;V.morphAttributes.position!==void 0&&(ee=1),V.morphAttributes.normal!==void 0&&(ee=2),V.morphAttributes.color!==void 0&&(ee=3);let xe,De,fe,Q;if(D){const Qe=Rn[D];xe=Qe.vertexShader,De=Qe.fragmentShader}else xe=S.vertexShader,De=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const ie=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,Ye=!!S.map,Xe=!!S.matcap,I=!!O,ut=!!S.aoMap,ke=!!S.lightMap,Ne=!!S.bumpMap,_e=!!S.normalMap,it=!!S.displacementMap,Me=!!S.emissiveMap,Oe=!!S.metalnessMap,vt=!!S.roughnessMap,ft=S.anisotropy>0,M=S.clearcoat>0,v=S.dispersion>0,F=S.iridescence>0,$=S.sheen>0,te=S.transmission>0,Z=ft&&!!S.anisotropyMap,Ae=M&&!!S.clearcoatMap,le=M&&!!S.clearcoatNormalMap,Ce=M&&!!S.clearcoatRoughnessMap,Re=F&&!!S.iridescenceMap,oe=F&&!!S.iridescenceThicknessMap,ge=$&&!!S.sheenColorMap,Be=$&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,pe=!!S.specularColorMap,Ve=!!S.specularIntensityMap,k=te&&!!S.transmissionMap,ae=te&&!!S.thicknessMap,ue=!!S.gradientMap,ye=!!S.alphaMap,re=S.alphaTest>0,ne=!!S.alphaHash,we=!!S.extensions;let He=li;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=n.toneMapping);const ht={shaderID:D,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:De,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:yr,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:Xe,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:y,aoMap:ut,lightMap:ke,bumpMap:Ne,normalMap:_e,displacementMap:d&&it,emissiveMap:Me,normalMapObjectSpace:_e&&S.normalMapType===_f,normalMapTangentSpace:_e&&S.normalMapType===yh,metalnessMap:Oe,roughnessMap:vt,anisotropy:ft,anisotropyMap:Z,clearcoat:M,clearcoatMap:Ae,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:$,sheenColorMap:ge,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Ve,transmission:te,transmissionMap:k,thicknessMap:ae,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:re,alphaHash:ne,combine:S.combine,mapUv:Ye&&x(S.map.channel),aoMapUv:ut&&x(S.aoMap.channel),lightMapUv:ke&&x(S.lightMap.channel),bumpMapUv:Ne&&x(S.bumpMap.channel),normalMapUv:_e&&x(S.normalMap.channel),displacementMapUv:it&&x(S.displacementMap.channel),emissiveMapUv:Me&&x(S.emissiveMap.channel),metalnessMapUv:Oe&&x(S.metalnessMap.channel),roughnessMapUv:vt&&x(S.roughnessMap.channel),anisotropyMapUv:Z&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:pe&&x(S.specularColorMap.channel),specularIntensityMapUv:Ve&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:ae&&x(S.thicknessMap.channel),alphaMapUv:ye&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ye||ye),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:Me&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const b=g[S.type];let R;if(b){const L=Rn[b];R=ms.clone(L.uniforms)}else R=S.uniforms;return R}function C(S,b){let R;for(let L=0,B=u.length;L<B;L++){const z=u[L];if(z.cacheKey===b){R=z,++R.usedTimes;break}}return R===void 0&&(R=new rv(n,b,S,s),u.push(R)),R}function T(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:U,programs:u,dispose:N}}function cv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Iu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){const p=a(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,x,m){const p=a(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||uv),i.length>1&&i.sort(d||Uu),r.length>1&&r.sort(d||Uu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function hv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Iu,n.set(i,[a])):r>=s.length?(a=new Iu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pv=0;function mv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gv(n){const e=new dv,t=fv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new et,a=new et;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,A=0,E=0,_=0,C=0,T=0,U=0;c.sort(mv);for(let S=0,b=c.length;S<b;S++){const R=c[S],L=R.color,B=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*B,h+=L.g*B,d+=L.b*B;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],B);U++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,y=t.get(R);y.shadowIntensity=O.intensity,y.shadowBias=O.bias,y.shadowNormalBias=O.normalBias,y.shadowRadius=O.radius,y.shadowMapSize=O.mapSize,i.directionalShadow[f]=y,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=R.shadow.matrix,A++}i.directional[f]=H,f++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(B),H.distance=z,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[x]=H;const O=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,O.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=O.matrix,R.castShadow){const y=t.get(R);y.shadowIntensity=O.intensity,y.shadowBias=O.bias,y.shadowNormalBias=O.normalBias,y.shadowRadius=O.radius,y.shadowMapSize=O.mapSize,i.spotShadow[x]=y,i.spotShadowMap[x]=V,_++}x++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(L).multiplyScalar(B),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const O=R.shadow,y=t.get(R);y.shadowIntensity=O.intensity,y.shadowBias=O.bias,y.shadowNormalBias=O.normalBias,y.shadowRadius=O.radius,y.shadowMapSize=O.mapSize,y.shadowCameraNear=O.camera.near,y.shadowCameraFar=O.camera.far,i.pointShadow[g]=y,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=H,g++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(B),H.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==C||N.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=_+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=U,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=C,N.numLightProbes=U,i.version=pv++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(E.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Nu(n){const e=new gv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _v(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nu(n),e.set(r,[o])):s>=a.length?(o=new Nu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function Mv(n,e,t){let i=new Kl;const r=new ce,s=new ce,a=new ot,o=new Np({depthPacking:gf}),l=new Fp,c={},u=t.maxTextureSize,h={[di]:en,[en]:di,[an]:an},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:vv,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let p=this.type;this.render=function(T,U,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Wn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==Gn&&this.type===Gn,z=p===Gn&&this.type!==Gn;for(let V=0,H=T.length;V<H;V++){const O=T[V],y=O.shadow;if(y===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;r.copy(y.mapSize);const D=y.getFrameExtents();if(r.multiply(D),s.copy(y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,y.mapSize.y=s.y)),y.map===null||B===!0||z===!0){const K=this.type!==Gn?{minFilter:ln,magFilter:ln}:{};y.map!==null&&y.map.dispose(),y.map=new gn(r.x,r.y,K),y.map.texture.name=O.name+".shadowMap",y.camera.updateProjectionMatrix()}n.setRenderTarget(y.map),n.clear();const q=y.getViewportCount();for(let K=0;K<q;K++){const ee=y.getViewport(K);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),L.viewport(a),y.updateMatrices(O,K),i=y.getFrustum(),_(U,N,y.camera,O,this.type)}y.isPointLightShadow!==!0&&this.type===Gn&&A(y,N),y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,R)};function A(T,U){const N=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(U,null,N,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(U,null,N,f,x,null)}function E(T,U,N,S){let b=null;const R=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=N.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const L=b.uuid,B=U.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let V=z[B];V===void 0&&(V=b.clone(),z[B]=V,U.addEventListener("dispose",C)),b=V}if(b.visible=U.visible,b.wireframe=U.wireframe,S===Gn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:h[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const L=n.properties.get(b);L.light=N}return b}function _(T,U,N,S,b){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Gn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const B=e.update(T),z=T.material;if(Array.isArray(z)){const V=B.groups;for(let H=0,O=V.length;H<O;H++){const y=V[H],D=z[y.materialIndex];if(D&&D.visible){const q=E(T,D,S,b);T.onBeforeShadow(n,T,U,N,B,q,y),n.renderBufferDirect(N,null,B,q,T,y),T.onAfterShadow(n,T,U,N,B,q,y)}}}else if(z.visible){const V=E(T,z,S,b);T.onBeforeShadow(n,T,U,N,B,V,null),n.renderBufferDirect(N,null,B,V,T,null),T.onAfterShadow(n,T,U,N,B,V,null)}}const L=T.children;for(let B=0,z=L.length;B<z;B++)_(L[B],U,N,S,b)}function C(T){T.target.removeEventListener("dispose",C);for(const N in c){const S=c[N],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const bv={[Va]:Ga,[Wa]:Ya,[Xa]:$a,[xr]:qa,[Ga]:Va,[Ya]:Wa,[$a]:Xa,[qa]:xr};function yv(n,e){function t(){let k=!1;const ae=new ot;let ue=null;const ye=new ot(0,0,0,0);return{setMask:function(re){ue!==re&&!k&&(n.colorMask(re,re,re,re),ue=re)},setLocked:function(re){k=re},setClear:function(re,ne,we,He,ht){ht===!0&&(re*=He,ne*=He,we*=He),ae.set(re,ne,we,He),ye.equals(ae)===!1&&(n.clearColor(re,ne,we,He),ye.copy(ae))},reset:function(){k=!1,ue=null,ye.set(-1,0,0,0)}}}function i(){let k=!1,ae=!1,ue=null,ye=null,re=null;return{setReversed:function(ne){if(ae!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ae=ne;const He=re;re=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(ne){ne?ie(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ne){ue!==ne&&!k&&(n.depthMask(ne),ue=ne)},setFunc:function(ne){if(ae&&(ne=bv[ne]),ye!==ne){switch(ne){case Va:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ne}},setLocked:function(ne){k=ne},setClear:function(ne){re!==ne&&(ae&&(ne=1-ne),n.clearDepth(ne),re=ne)},reset:function(){k=!1,ue=null,ye=null,re=null,ae=!1}}}function r(){let k=!1,ae=null,ue=null,ye=null,re=null,ne=null,we=null,He=null,ht=null;return{setTest:function(Qe){k||(Qe?ie(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!k&&(n.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,On,Cn){(ue!==Qe||ye!==On||re!==Cn)&&(n.stencilFunc(Qe,On,Cn),ue=Qe,ye=On,re=Cn)},setOp:function(Qe,On,Cn){(ne!==Qe||we!==On||He!==Cn)&&(n.stencilOp(Qe,On,Cn),ne=Qe,we=On,He=Cn)},setLocked:function(Qe){k=Qe},setClear:function(Qe){ht!==Qe&&(n.clearStencil(Qe),ht=Qe)},reset:function(){k=!1,ae=null,ue=null,ye=null,re=null,ne=null,we=null,He=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,A=null,E=null,_=null,C=null,T=null,U=new Ie(0,0,0),N=0,S=!1,b=null,R=null,L=null,B=null,z=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const y=n.getParameter(n.VERSION);y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(y)[1]),H=O>=1):y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),H=O>=2);let D=null,q={};const K=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),xe=new ot().fromArray(K),De=new ot().fromArray(ee);function fe(k,ae,ue,ye){const re=new Uint8Array(4),ne=n.createTexture();n.bindTexture(k,ne),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<ue;we++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ae+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ne}const Q={};Q[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(xr),Ne(!1),_e(Dc),ie(n.CULL_FACE),ut(Wn);function ie(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function he(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function be(k,ae){return h[k]!==ae?(n.bindFramebuffer(k,ae),h[k]=ae,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Te(k,ae){let ue=f,ye=!1;if(k){ue=d.get(ae),ue===void 0&&(ue=[],d.set(ae,ue));const re=k.textures;if(ue.length!==re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,we=re.length;ne<we;ne++)ue[ne]=n.COLOR_ATTACHMENT0+ne;ue.length=re.length,ye=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ue)}function Ye(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Xe={[Ci]:n.FUNC_ADD,[$d]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};Xe[Kd]=n.MIN,Xe[Zd]=n.MAX;const I={[Jd]:n.ZERO,[Qd]:n.ONE,[ef]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[nf]:n.DST_ALPHA,[tf]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[lf]:n.CONSTANT_COLOR,[cf]:n.ONE_MINUS_CONSTANT_COLOR,[uf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(k,ae,ue,ye,re,ne,we,He,ht,Qe){if(k===Wn){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(ie(n.BLEND),x=!0),k!==Yd){if(k!==m||Qe!==S){if((p!==Ci||_!==Ci)&&(n.blendEquation(n.FUNC_ADD),p=Ci,_=Ci),Qe)switch(k){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,E=null,C=null,T=null,U.set(0,0,0),N=0,m=k,S=Qe}return}re=re||ae,ne=ne||ue,we=we||ye,(ae!==p||re!==_)&&(n.blendEquationSeparate(Xe[ae],Xe[re]),p=ae,_=re),(ue!==A||ye!==E||ne!==C||we!==T)&&(n.blendFuncSeparate(I[ue],I[ye],I[ne],I[we]),A=ue,E=ye,C=ne,T=we),(He.equals(U)===!1||ht!==N)&&(n.blendColor(He.r,He.g,He.b,ht),U.copy(He),N=ht),m=k,S=!1}function ke(k,ae){k.side===an?he(n.CULL_FACE):ie(n.CULL_FACE);let ue=k.side===en;ae&&(ue=!ue),Ne(ue),k.blending===Ii&&k.transparent===!1?ut(Wn):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ye=k.stencilWrite;o.setTest(ye),ye&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function _e(k){k!==Xd?(ie(n.CULL_FACE),k!==R&&(k===Dc?n.cullFace(n.BACK):k===qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),R=k}function it(k){k!==L&&(H&&n.lineWidth(k),L=k)}function Me(k,ae,ue){k?(ie(n.POLYGON_OFFSET_FILL),(B!==ae||z!==ue)&&(n.polygonOffset(ae,ue),B=ae,z=ue)):he(n.POLYGON_OFFSET_FILL)}function Oe(k){k?ie(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function vt(k){k===void 0&&(k=n.TEXTURE0+V-1),D!==k&&(n.activeTexture(k),D=k)}function ft(k,ae,ue){ue===void 0&&(D===null?ue=n.TEXTURE0+V-1:ue=D);let ye=q[ue];ye===void 0&&(ye={type:void 0,texture:void 0},q[ue]=ye),(ye.type!==k||ye.texture!==ae)&&(D!==ue&&(n.activeTexture(ue),D=ue),n.bindTexture(k,ae||Q[k]),ye.type=k,ye.texture=ae)}function M(){const k=q[D];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){xe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),xe.copy(k))}function Be(k){De.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Pe(k,ae){let ue=c.get(ae);ue===void 0&&(ue=new WeakMap,c.set(ae,ue));let ye=ue.get(k);ye===void 0&&(ye=n.getUniformBlockIndex(ae,k.name),ue.set(k,ye))}function pe(k,ae){const ye=c.get(ae).get(k);l.get(ae)!==ye&&(n.uniformBlockBinding(ae,ye,k.__bindingPointIndex),l.set(ae,ye))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,q={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,A=null,E=null,_=null,C=null,T=null,U=new Ie(0,0,0),N=0,S=!1,b=null,R=null,L=null,B=null,z=null,xe.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:he,bindFramebuffer:be,drawBuffers:Te,useProgram:Ye,setBlending:ut,setMaterial:ke,setFlipSided:Ne,setCullFace:_e,setLineWidth:it,setPolygonOffset:Me,setScissorTest:Oe,activeTexture:vt,bindTexture:ft,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Re,texImage3D:oe,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ae,scissor:ge,viewport:Be,reset:Ve}}function Ev(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return f?new OffscreenCanvas(M,v):fs("canvas")}function x(M,v,F){let $=1;const te=ft(M);if((te.width>F||te.height>F)&&($=F/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Z=Math.floor($*te.width),Ae=Math.floor($*te.height);h===void 0&&(h=g(Z,Ae));const le=v?g(Z,Ae):h;return le.width=Z,le.height=Ae,le.getContext("2d").drawImage(M,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ae+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,v,F,$,te=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=v;if(v===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),v===n.RGBA){const Ae=te?So:Ke.getTransfer($);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Ae===tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(M,v){let F;return M?v===null||v===Oi||v===us?F=n.DEPTH24_STENCIL8:v===Ln?F=n.DEPTH32F_STENCIL8:v===cs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===us?F=n.DEPTH_COMPONENT24:v===Ln?F=n.DEPTH_COMPONENT32F:v===cs&&(F=n.DEPTH_COMPONENT16),F}function C(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==ln&&M.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function T(M){const v=M.target;v.removeEventListener("dispose",T),N(v),v.isVideoTexture&&u.delete(v)}function U(M){const v=M.target;v.removeEventListener("dispose",U),b(v)}function N(M){const v=i.get(M);if(v.__webglInit===void 0)return;const F=M.source,$=d.get(F);if($){const te=$[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(M),Object.keys($).length===0&&d.delete(F)}i.remove(M)}function S(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const F=M.source,$=d.get(F);delete $[v.__cacheKey],a.memory.textures--}function b(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let te=0;te<v.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[$][te]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=M.textures;for(let $=0,te=F.length;$<te;$++){const Z=i.get(F[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(F[$])}i.remove(M)}let R=0;function L(){R=0}function B(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function z(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function V(M,v){const F=i.get(M);if(M.isVideoTexture&&Oe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,M,v);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function H(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Q(F,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function O(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Q(F,M,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function y(M,v){const F=i.get(M);if(M.version>0&&F.__version!==M.version){ie(F,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const D={[Za]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},q={[ln]:n.NEAREST,[pf]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},K={[vf]:n.NEVER,[Sf]:n.ALWAYS,[xf]:n.LESS,[Eh]:n.LEQUAL,[Mf]:n.EQUAL,[Ef]:n.GEQUAL,[bf]:n.GREATER,[yf]:n.NOTEQUAL};function ee(M,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===Zo||v.magFilter===ws||v.magFilter===Ui||v.minFilter===Pn||v.minFilter===Zo||v.minFilter===ws||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,D[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,D[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,D[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,q[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,q[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==ws&&v.minFilter!==Ui||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function xe(M,v){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",T));const $=v.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const Z=z(v);if(Z!==M.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[Z].usedTimes++;const Ae=te[M.__cacheKey];Ae!==void 0&&(te[M.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(v)),M.__cacheKey=Z,M.__webglTexture=te[Z].texture}return F}function De(M,v,F){return Math.floor(Math.floor(M/F)/v)}function fe(M,v,F,$){const Z=M.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,$,v.data);else{Z.sort((oe,ge)=>oe.start-ge.start);let Ae=0;for(let oe=1;oe<Z.length;oe++){const ge=Z[Ae],Be=Z[oe],Pe=ge.start+ge.count,pe=De(Be.start,v.width,4),Ve=De(ge.start,v.width,4);Be.start<=Pe+1&&pe===Ve&&De(Be.start+Be.count-1,v.width,4)===pe?ge.count=Math.max(ge.count,Be.start+Be.count-ge.start):(++Ae,Z[Ae]=Be)}Z.length=Ae+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let oe=0,ge=Z.length;oe<ge;oe++){const Be=Z[oe],Pe=Math.floor(Be.start/4),pe=Math.ceil(Be.count/4),Ve=Pe%v.width,k=Math.floor(Pe/v.width),ae=pe,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ve,k,ae,ue,F,$,v.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Q(M,v,F){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const te=xe(M,v),Z=v.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+F);const Ae=i.get(Z);if(Z.version!==Ae.__version||te===!0){t.activeTexture(n.TEXTURE0+F);const le=Ke.getPrimaries(Ke.workingColorSpace),Ce=v.colorSpace===ai?null:Ke.getPrimaries(v.colorSpace),Re=v.colorSpace===ai||le===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=x(v.image,!1,r.maxTextureSize);oe=vt(v,oe);const ge=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Pe=E(v.internalFormat,ge,Be,v.colorSpace,v.isVideoTexture);ee($,v);let pe;const Ve=v.mipmaps,k=v.isVideoTexture!==!0,ae=Ae.__version===void 0||te===!0,ue=Z.dataReady,ye=C(v,oe);if(v.isDepthTexture)Pe=_(v.format===ds,v.type),ae&&(k?t.texStorage2D(n.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ge,Be,null));else if(v.isDataTexture)if(Ve.length>0){k&&ae&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,Ve[0].width,Ve[0].height);for(let re=0,ne=Ve.length;re<ne;re++)pe=Ve[re],k?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ge,Be,pe.data):t.texImage2D(n.TEXTURE_2D,re,Pe,pe.width,pe.height,0,ge,Be,pe.data);v.generateMipmaps=!1}else k?(ae&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,oe.width,oe.height),ue&&fe(v,oe,ge,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ge,Be,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Pe,Ve[0].width,Ve[0].height,oe.depth);for(let re=0,ne=Ve.length;re<ne;re++)if(pe=Ve[re],v.format!==Sn)if(ge!==null)if(k){if(ue)if(v.layerUpdates.size>0){const we=hu(pe.width,pe.height,v.format,v.type);for(const He of v.layerUpdates){const ht=pe.data.subarray(He*we/pe.data.BYTES_PER_ELEMENT,(He+1)*we/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,He,pe.width,pe.height,1,ge,ht)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ge,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ge,Be,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,oe.depth,0,ge,Be,pe.data)}else{k&&ae&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,Ve[0].width,Ve[0].height);for(let re=0,ne=Ve.length;re<ne;re++)pe=Ve[re],v.format!==Sn?ge!==null?k?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Pe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ge,Be,pe.data):t.texImage2D(n.TEXTURE_2D,re,Pe,pe.width,pe.height,0,ge,Be,pe.data)}else if(v.isDataArrayTexture)if(k){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Pe,oe.width,oe.height,oe.depth),ue)if(v.layerUpdates.size>0){const re=hu(oe.width,oe.height,v.format,v.type);for(const ne of v.layerUpdates){const we=oe.data.subarray(ne*re/oe.data.BYTES_PER_ELEMENT,(ne+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,ge,Be,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Be,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,ge,Be,oe.data);else if(v.isData3DTexture)k?(ae&&t.texStorage3D(n.TEXTURE_3D,ye,Pe,oe.width,oe.height,oe.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Be,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,ge,Be,oe.data);else if(v.isFramebufferTexture){if(ae)if(k)t.texStorage2D(n.TEXTURE_2D,ye,Pe,oe.width,oe.height);else{let re=oe.width,ne=oe.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,Pe,re,ne,0,ge,Be,null),re>>=1,ne>>=1}}else if(Ve.length>0){if(k&&ae){const re=ft(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ye,Pe,re.width,re.height)}for(let re=0,ne=Ve.length;re<ne;re++)pe=Ve[re],k?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge,Be,pe):t.texImage2D(n.TEXTURE_2D,re,Pe,ge,Be,pe);v.generateMipmaps=!1}else if(k){if(ae){const re=ft(oe);t.texStorage2D(n.TEXTURE_2D,ye,Pe,re.width,re.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Be,oe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ge,Be,oe);m(v)&&p($),Ae.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ie(M,v,F){if(v.image.length!==6)return;const $=xe(M,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);const Z=i.get(te);if(te.version!==Z.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const Ae=Ke.getPrimaries(Ke.workingColorSpace),le=v.colorSpace===ai?null:Ke.getPrimaries(v.colorSpace),Ce=v.colorSpace===ai||Ae===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!Re&&!oe?ge[ne]=x(v.image[ne],!0,r.maxCubemapSize):ge[ne]=oe?v.image[ne].image:v.image[ne],ge[ne]=vt(v,ge[ne]);const Be=ge[0],Pe=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Ve=E(v.internalFormat,Pe,pe,v.colorSpace),k=v.isVideoTexture!==!0,ae=Z.__version===void 0||$===!0,ue=te.dataReady;let ye=C(v,Be);ee(n.TEXTURE_CUBE_MAP,v);let re;if(Re){k&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ve,Be.width,Be.height);for(let ne=0;ne<6;ne++){re=ge[ne].mipmaps;for(let we=0;we<re.length;we++){const He=re[we];v.format!==Sn?Pe!==null?k?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,He.width,He.height,Pe,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,He.width,He.height,Pe,pe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ve,He.width,He.height,0,Pe,pe,He.data)}}}else{if(re=v.mipmaps,k&&ae){re.length>0&&ye++;const ne=ft(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Pe,pe,ge[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,ge[ne].width,ge[ne].height,0,Pe,pe,ge[ne].data);for(let we=0;we<re.length;we++){const ht=re[we].image[ne].image;k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,ht.width,ht.height,Pe,pe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ve,ht.width,ht.height,0,Pe,pe,ht.data)}}else{k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe,pe,ge[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Pe,pe,ge[ne]);for(let we=0;we<re.length;we++){const He=re[we];k?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Pe,pe,He.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ve,Pe,pe,He.image[ne])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Z.__version=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function he(M,v,F,$,te,Z){const Ae=s.convert(F.format,F.colorSpace),le=s.convert(F.type),Ce=E(F.internalFormat,Ae,le,F.colorSpace),Re=i.get(v),oe=i.get(F);if(oe.__renderTarget=v,!Re.__hasExternalTextures){const ge=Math.max(1,v.width>>Z),Be=Math.max(1,v.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Ce,ge,Be,v.depth,0,Ae,le,null):t.texImage2D(te,Z,Ce,ge,Be,0,Ae,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,oe.__webglTexture,0,it(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,oe.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(M,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const $=v.depthTexture,te=$&&$.isDepthTexture?$.type:null,Z=_(v.stencilBuffer,te),Ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=it(v);Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,M)}else{const $=v.textures;for(let te=0;te<$.length;te++){const Z=$[te],Ae=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),Ce=E(Z.internalFormat,Ae,le,Z.colorSpace),Re=it(v);F&&Me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ce,v.width,v.height):Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const te=$.__webglTexture,Z=it(v);if(v.depthTexture.format===hs)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(v.depthTexture.format===ds)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(M){const v=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=$}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=M.texture.mipmaps;$&&$.length>0?Te(v.__webglFramebuffer[0],M):Te(v.__webglFramebuffer,M)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),be(v.__webglDepthbuffer[$],M,!1);else{const te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else{const $=M.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),be(v.__webglDepthbuffer,M,!1);else{const te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(M,v,F){const $=i.get(M);v!==void 0&&he($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ye(M)}function I(M){const v=M.texture,F=i.get(M),$=i.get(v);M.addEventListener("dispose",U);const te=M.textures,Z=M.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)F.__webglFramebuffer[le][Ce]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let le=0,Ce=te.length;le<Ce;le++){const Re=i.get(te[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Me(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Ce=te[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Re=s.convert(Ce.format,Ce.colorSpace),oe=s.convert(Ce.type),ge=E(Ce.internalFormat,Re,oe,Ce.colorSpace,M.isXRRenderTarget===!0),Be=it(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ge,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),be(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ee(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)he(F.__webglFramebuffer[le][Ce],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else he(F.__webglFramebuffer[le],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let le=0,Ce=te.length;le<Ce;le++){const Re=te[le],oe=i.get(Re);let ge=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ge=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),ee(ge,Re),he(F.__webglFramebuffer,M,Re,n.COLOR_ATTACHMENT0+le,ge,0),m(Re)&&p(ge)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),ee(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)he(F.__webglFramebuffer[Ce],M,v,n.COLOR_ATTACHMENT0,le,Ce);else he(F.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}M.depthBuffer&&Ye(M)}function ut(M){const v=M.textures;for(let F=0,$=v.length;F<$;F++){const te=v[F];if(m(te)){const Z=A(M),Ae=i.get(te).__webglTexture;t.bindTexture(Z,Ae),p(Z),t.unbindTexture()}}}const ke=[],Ne=[];function _e(M){if(M.samples>0){if(Me(M)===!1){const v=M.textures,F=M.width,$=M.height;let te=n.COLOR_BUFFER_BIT;const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(M),le=v.length>1;if(le)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ce=M.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const oe=i.get(v[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,te,n.NEAREST),l===!0&&(ke.length=0,Ne.length=0,ke.push(n.COLOR_ATTACHMENT0+Re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ke.push(Z),Ne.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const oe=i.get(v[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function it(M){return Math.min(r.maxSamples,M.samples)}function Me(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Oe(M){const v=a.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function vt(M,v){const F=M.colorSpace,$=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==yr&&F!==ai&&(Ke.getTransfer(F)===tt?($!==Sn||te!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ft(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=y,this.rebindTextures=Xe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Me}function Sv(n,e){function t(i,r=ai){let s;const a=Ke.getTransfer(r);if(i===Tn)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===Sn)return n.RGBA;if(i===hs)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===Vl)return n.RED;if(i===Gl)return n.RED_INTEGER;if(i===bh)return n.RG;if(i===Wl)return n.RG_INTEGER;if(i===Xl)return n.RGBA_INTEGER;if(i===ho||i===fo||i===po||i===mo)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===il||i===rl)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ol)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===bl||i===yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ml)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===Sl||i===wl||i===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
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

}`;class Av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ct({vertexShader:wv,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Av,p={},A=t.getContextAttributes();let E=null,_=null;const C=[],T=[],U=new ce;let N=null;const S=new Qt;S.viewport=new ot;const b=new Qt;b.viewport=new ot;const R=[S,b],L=new Yp;let B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=C[Q];return ie===void 0&&(ie=new va,C[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=C[Q];return ie===void 0&&(ie=new va,C[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=C[Q];return ie===void 0&&(ie=new va,C[Q]=ie),ie.getHandSpace()};function V(Q){const ie=T.indexOf(Q.inputSource);if(ie===-1)return;const he=C[ie];he!==void 0&&(he.update(Q.inputSource,Q.frame,c||a),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let Q=0;Q<C.length;Q++){const ie=T[Q];ie!==null&&(T[Q]=null,C[Q].disconnect(ie))}B=null,z=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(E),f=null,d=null,h=null,r=null,_=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),A.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,Te=null;A.depth&&(Te=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=A.stencil?ds:hs,be=A.stencil?us:Oi);const Ye={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gn(d.textureWidth,d.textureHeight,{format:Sn,type:Tn,depthTexture:new Ih(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new gn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Q){for(let ie=0;ie<Q.removed.length;ie++){const he=Q.removed[ie],be=T.indexOf(he);be>=0&&(T[be]=null,C[be].disconnect(he))}for(let ie=0;ie<Q.added.length;ie++){const he=Q.added[ie];let be=T.indexOf(he);if(be===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=T.length){T.push(he),be=Ye;break}else if(T[Ye]===null){T[Ye]=he,be=Ye;break}if(be===-1)break}const Te=C[be];Te&&Te.connect(he)}}const y=new P,D=new P;function q(Q,ie,he){y.setFromMatrixPosition(ie.matrixWorld),D.setFromMatrixPosition(he.matrixWorld);const be=y.distanceTo(D),Te=ie.projectionMatrix.elements,Ye=he.projectionMatrix.elements,Xe=Te[14]/(Te[10]-1),I=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],_e=(Ye[8]+1)/Ye[0],it=Xe*Ne,Me=Xe*_e,Oe=be/(-Ne+_e),vt=Oe*-Ne;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(vt),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ft=Xe+Oe,M=I+Oe,v=it-vt,F=Me+(be-vt),$=ut*I/M*ft,te=ke*I/M*ft;Q.projectionMatrix.makePerspective(v,F,$,te,ft,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function K(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,he=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(he=m.depthFar)),L.near=b.near=S.near=ie,L.far=b.far=S.far=he,(B!==L.near||z!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,z=L.far),L.layers.mask=Q.layers.mask|6,S.layers.mask=L.layers.mask&3,b.layers.mask=L.layers.mask&5;const be=Q.parent,Te=L.cameras;K(L,be);for(let Ye=0;Ye<Te.length;Ye++)K(Te[Ye],be);Te.length===2?q(L,S,b):L.projectionMatrix.copy(S.projectionMatrix),ee(Q,L,be)};function ee(Q,ie,he){he===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Er*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Q){return p[Q]};let xe=null;function De(Q,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let be=!1;he.length!==L.cameras.length&&(L.cameras.length=0,be=!0);for(let I=0;I<he.length;I++){const ut=he[I];let ke=null;if(f!==null)ke=f.getViewport(ut);else{const _e=h.getViewSubImage(d,ut);ke=_e.viewport,I===0&&(e.setRenderTargetTextures(_,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(_))}let Ne=R[I];Ne===void 0&&(Ne=new Qt,Ne.layers.enable(I),Ne.viewport=new ot,R[I]=Ne),Ne.matrix.fromArray(ut.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ut.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),I===0&&(L.matrix.copy(Ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),be===!0&&L.cameras.push(Ne)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const I=h.getDepthInformation(he[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let I=0;I<he.length;I++){const ut=he[I].camera;if(ut){let ke=p[ut];ke||(ke=new Nh,p[ut]=ke);const Ne=h.getCameraImage(ut);ke.sourceTexture=Ne}}}}for(let he=0;he<C.length;he++){const be=T[he],Te=C[he];be!==null&&Te!==void 0&&Te.update(be,ie,c||a)}xe&&xe(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const fe=new Hh;fe.setAnimationLoop(De),this.setAnimationLoop=function(Q){xe=Q},this.dispose=function(){}}}const wi=new In,Rv=new et;function Pv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ph(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,E,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,_=A.envMapRotation;E&&(m.envMap.value=E,wi.copy(_),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(wi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const _=E.program;i.uniformBlockBinding(A,_)}function c(A,E){let _=r[A.id];_===void 0&&(g(A),_=u(A),r[A.id]=_,A.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(A,C);const T=e.render.frame;s[A.id]!==T&&(d(A),s[A.id]=T)}function u(A){const E=h();A.__bindingPointIndex=E;const _=n.createBuffer(),C=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,_),_}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],_=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,U=_.length;T<U;T++){const N=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,b=N.length;S<b;S++){const R=N[S];if(f(R,T,S,C)===!0){const L=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<B.length;V++){const H=B[V],O=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,L+z,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,E,_,C){const T=A.value,U=E+"_"+_;if(C[U]===void 0)return typeof T=="number"||typeof T=="boolean"?C[U]=T:C[U]=T.clone(),!0;{const N=C[U];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[U]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(A){const E=A.uniforms;let _=0;const C=16;for(let U=0,N=E.length;U<N;U++){const S=Array.isArray(E[U])?E[U]:[E[U]];for(let b=0,R=S.length;b<R;b++){const L=S[b],B=Array.isArray(L.value)?L.value:[L.value];for(let z=0,V=B.length;z<V;z++){const H=B[z],O=x(H),y=_%C,D=y%O.boundary,q=y+D;_+=D,q!==0&&C-q<O.storage&&(_+=C-q),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=O.storage}}}const T=_%C;return T>0&&(_+=C-T),A.__size=_,A.__cache={},this}function x(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const _=a.indexOf(E.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Dv{constructor(e={}){const{canvas:t=Vf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let C=!1;this._outputColorSpace=Jt;let T=0,U=0,N=null,S=-1,b=null;const R=new ot,L=new ot;let B=null;const z=new Ie(0);let V=0,H=t.width,O=t.height,y=1,D=null,q=null;const K=new ot(0,0,H,O),ee=new ot(0,0,H,O);let xe=!1;const De=new Kl;let fe=!1,Q=!1;const ie=new et,he=new P,be=new ot,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Xe(){return N===null?y:1}let I=i;function ut(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){const G="webgl2";if(I=ut(G,w),I===null)throw ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,Ne,_e,it,Me,Oe,vt,ft,M,v,F,$,te,Z,Ae,le,Ce,Re,oe,ge,Be,Pe,pe,Ve;function k(){ke=new V0(I),ke.init(),Pe=new Sv(I,ke),Ne=new N0(I,ke,e,Pe),_e=new yv(I,ke),Ne.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),it=new X0(I),Me=new cv,Oe=new Ev(I,ke,_e,Me,Ne,Pe,it),vt=new O0(_),ft=new H0(_),M=new Zp(I),pe=new U0(I,M),v=new G0(I,M,it,pe),F=new Y0(I,v,M,it),oe=new q0(I,Ne,Oe),le=new F0(Me),$=new lv(_,vt,ft,ke,Ne,pe,le),te=new Pv(_,Me),Z=new hv,Ae=new _v(ke),Re=new D0(_,vt,ft,_e,F,f,l),Ce=new Mv(_,F,Ne),Ve=new Lv(I,it,Ne,_e),ge=new I0(I,ke,it),Be=new W0(I,ke,it),it.programs=$.programs,_.capabilities=Ne,_.extensions=ke,_.properties=Me,_.renderLists=Z,_.shadowMap=Ce,_.state=_e,_.info=it}k();const ae=new Cv(_,I);this.xr=ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(w){w!==void 0&&(y=w,this.setSize(H,O,!1))},this.getSize=function(w){return w.set(H,O)},this.setSize=function(w,G,Y=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,O=G,t.width=Math.floor(w*y),t.height=Math.floor(G*y),Y===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(H*y,O*y).floor()},this.setDrawingBufferSize=function(w,G,Y){H=w,O=G,y=Y,t.width=Math.floor(w*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,G,Y,j){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,G,Y,j),_e.viewport(R.copy(K).multiplyScalar(y).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,G,Y,j){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,G,Y,j),_e.scissor(L.copy(ee).multiplyScalar(y).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){_e.setScissorTest(xe=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Y=!0){let j=0;if(w){let X=!1;if(N!==null){const se=N.texture.format;X=se===Xl||se===Wl||se===Gl}if(X){const se=N.texture.type,me=se===Tn||se===Oi||se===cs||se===us||se===kl||se===Hl,Se=Re.getClearColor(),ve=Re.getClearAlpha(),Fe=Se.r,ze=Se.g,Le=Se.b;me?(g[0]=Fe,g[1]=ze,g[2]=Le,g[3]=ve,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Fe,x[1]=ze,x[2]=Le,x[3]=ve,I.clearBufferiv(I.COLOR,0,x))}else j|=I.COLOR_BUFFER_BIT}G&&(j|=I.DEPTH_BUFFER_BIT),Y&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Re.dispose(),Z.dispose(),Ae.dispose(),Me.dispose(),vt.dispose(),ft.dispose(),F.dispose(),pe.dispose(),Ve.dispose(),$.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Cn),ae.removeEventListener("sessionend",Tc),vi.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=it.autoReset,G=Ce.enabled,Y=Ce.autoUpdate,j=Ce.needsUpdate,X=Ce.type;k(),it.autoReset=w,Ce.enabled=G,Ce.autoUpdate=Y,Ce.needsUpdate=j,Ce.type=X}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const G=w.target;G.removeEventListener("dispose",ne),we(G)}function we(w){He(w),Me.remove(w)}function He(w){const G=Me.get(w).programs;G!==void 0&&(G.forEach(function(Y){$.releaseProgram(Y)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Y,j,X,se){G===null&&(G=Te);const me=X.isMesh&&X.matrixWorld.determinant()<0,Se=Bd(w,G,Y,j,X);_e.setMaterial(j,me);let ve=Y.index,Fe=1;if(j.wireframe===!0){if(ve=v.getWireframeAttribute(Y),ve===void 0)return;Fe=2}const ze=Y.drawRange,Le=Y.attributes.position;let $e=ze.start*Fe,rt=(ze.start+ze.count)*Fe;se!==null&&($e=Math.max($e,se.start*Fe),rt=Math.min(rt,(se.start+se.count)*Fe)),ve!==null?($e=Math.max($e,0),rt=Math.min(rt,ve.count)):Le!=null&&($e=Math.max($e,0),rt=Math.min(rt,Le.count));const yt=rt-$e;if(yt<0||yt===1/0)return;pe.setup(X,j,Se,Y,ve);let pt,at=ge;if(ve!==null&&(pt=M.get(ve),at=Be,at.setIndex(pt)),X.isMesh)j.wireframe===!0?(_e.setLineWidth(j.wireframeLinewidth*Xe()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(X.isLine){let Ue=j.linewidth;Ue===void 0&&(Ue=1),_e.setLineWidth(Ue*Xe()),X.isLineSegments?at.setMode(I.LINES):X.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else X.isPoints?at.setMode(I.POINTS):X.isSprite&&at.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ue=X._multiDrawStarts,xt=X._multiDrawCounts,Ze=X._multiDrawCount,tn=ve?M.get(ve).bytesPerElement:1,Xi=Me.get(j).currentProgram.getUniforms();for(let nn=0;nn<Ze;nn++)Xi.setValue(I,"_gl_DrawID",nn),at.render(Ue[nn]/tn,xt[nn])}else if(X.isInstancedMesh)at.renderInstances($e,yt,X.count);else if(Y.isInstancedBufferGeometry){const Ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xt=Math.min(Y.instanceCount,Ue);at.renderInstances($e,yt,xt)}else at.render($e,yt)};function ht(w,G,Y){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Ss(w,G,Y),w.side=di,w.needsUpdate=!0,Ss(w,G,Y),w.side=an):Ss(w,G,Y)}this.compile=function(w,G,Y=null){Y===null&&(Y=w),p=Ae.get(Y),p.init(G),E.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const se=X.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const Se=se[me];ht(Se,Y,X),j.add(Se)}else ht(se,Y,X),j.add(se)}),p=E.pop(),j},this.compileAsync=function(w,G,Y=null){const j=this.compile(w,G,Y);return new Promise(X=>{function se(){if(j.forEach(function(me){Me.get(me).currentProgram.isReady()&&j.delete(me)}),j.size===0){X(w);return}setTimeout(se,10)}ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Qe=null;function On(w){Qe&&Qe(w)}function Cn(){vi.stop()}function Tc(){vi.start()}const vi=new Hh;vi.setAnimationLoop(On),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){Qe=w,ae.setAnimationLoop(w),w===null?vi.stop():vi.start()},ae.addEventListener("sessionstart",Cn),ae.addEventListener("sessionend",Tc),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,G,N),p=Ae.get(w,E.length),p.init(G),E.push(p),ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(ie,Dn,G.reversedDepth),Q=this.localClippingEnabled,fe=le.init(this.clippingPlanes,Q),m=Z.get(w,A.length),m.init(),A.push(m),ae.enabled===!0&&ae.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&jo(se,G,-1/0,_.sortObjects)}jo(w,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(D,q),Ye=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ye&&Re.addToRenderList(m,w),this.info.render.frame++,fe===!0&&le.beginShadows();const Y=p.state.shadowsArray;Ce.render(Y,w,G),fe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const se=G.cameras;if(X.length>0)for(let me=0,Se=se.length;me<Se;me++){const ve=se[me];Cc(j,X,w,ve)}Ye&&Re.render(w);for(let me=0,Se=se.length;me<Se;me++){const ve=se[me];Ac(m,w,ve,ve.viewport)}}else X.length>0&&Cc(j,X,w,G),Ye&&Re.render(w),Ac(m,w,G);N!==null&&U===0&&(Oe.updateMultisampleRenderTarget(N),Oe.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(_,w,G),pe.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(p=E[E.length-1],fe===!0&&le.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function jo(w,G,Y,j){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){j&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);const me=F.update(w),Se=w.material;Se.visible&&m.push(w,me,Se,Y,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const me=F.update(w),Se=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Se)){const ve=me.groups;for(let Fe=0,ze=ve.length;Fe<ze;Fe++){const Le=ve[Fe],$e=Se[Le.materialIndex];$e&&$e.visible&&m.push(w,me,$e,Y,be.z,Le)}}else Se.visible&&m.push(w,me,Se,Y,be.z,null)}}const se=w.children;for(let me=0,Se=se.length;me<Se;me++)jo(se[me],G,Y,j)}function Ac(w,G,Y,j){const X=w.opaque,se=w.transmissive,me=w.transparent;p.setupLightsView(Y),fe===!0&&le.setGlobalState(_.clippingPlanes,Y),j&&_e.viewport(R.copy(j)),X.length>0&&Es(X,G,Y),se.length>0&&Es(se,G,Y),me.length>0&&Es(me,G,Y),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Cc(w,G,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new gn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Un:Tn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const se=p.state.transmissionRenderTarget[j.id],me=j.viewport||R;se.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);const Se=_.getRenderTarget(),ve=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor(z),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ye&&Re.render(Y);const ze=_.toneMapping;_.toneMapping=li;const Le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),fe===!0&&le.setGlobalState(_.clippingPlanes,j),Es(w,Y,j),Oe.updateMultisampleRenderTarget(se),Oe.updateRenderTargetMipmap(se),ke.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let rt=0,yt=G.length;rt<yt;rt++){const pt=G[rt],at=pt.object,Ue=pt.geometry,xt=pt.material,Ze=pt.group;if(xt.side===an&&at.layers.test(j.layers)){const tn=xt.side;xt.side=en,xt.needsUpdate=!0,Rc(at,Y,j,Ue,xt,Ze),xt.side=tn,xt.needsUpdate=!0,$e=!0}}$e===!0&&(Oe.updateMultisampleRenderTarget(se),Oe.updateRenderTargetMipmap(se))}_.setRenderTarget(Se,ve,Fe),_.setClearColor(z,V),Le!==void 0&&(j.viewport=Le),_.toneMapping=ze}function Es(w,G,Y){const j=G.isScene===!0?G.overrideMaterial:null;for(let X=0,se=w.length;X<se;X++){const me=w[X],Se=me.object,ve=me.geometry,Fe=me.group;let ze=me.material;ze.allowOverride===!0&&j!==null&&(ze=j),Se.layers.test(Y.layers)&&Rc(Se,G,Y,ve,ze,Fe)}}function Rc(w,G,Y,j,X,se){w.onBeforeRender(_,G,Y,j,X,se),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(_,G,Y,j,w,se),X.transparent===!0&&X.side===an&&X.forceSinglePass===!1?(X.side=en,X.needsUpdate=!0,_.renderBufferDirect(Y,G,j,X,w,se),X.side=di,X.needsUpdate=!0,_.renderBufferDirect(Y,G,j,X,w,se),X.side=an):_.renderBufferDirect(Y,G,j,X,w,se),w.onAfterRender(_,G,Y,j,X,se)}function Ss(w,G,Y){G.isScene!==!0&&(G=Te);const j=Me.get(w),X=p.state.lights,se=p.state.shadowsArray,me=X.state.version,Se=$.getParameters(w,X.state,se,G,Y),ve=$.getProgramCacheKey(Se);let Fe=j.programs;j.environment=w.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(w.isMeshStandardMaterial?ft:vt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ne),Fe=new Map,j.programs=Fe);let ze=Fe.get(ve);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===me)return Lc(w,Se),ze}else Se.uniforms=$.getUniforms(w),w.onBeforeCompile(Se,_),ze=$.acquireProgram(Se,ve),Fe.set(ve,ze),j.uniforms=Se.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=le.uniform),Lc(w,Se),j.needsLights=kd(w),j.lightsStateVersion=me,j.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Pc(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=go.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Lc(w,G){const Y=Me.get(w);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Bd(w,G,Y,j,X){G.isScene!==!0&&(G=Te),Oe.resetTextureUnits();const se=G.fog,me=j.isMeshStandardMaterial?G.environment:null,Se=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yr,ve=(j.isMeshStandardMaterial?ft:vt).get(j.envMap||me),Fe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color;let yt=li;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(yt=_.toneMapping);const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=pt!==void 0?pt.length:0,Ue=Me.get(j),xt=p.state.lights;if(fe===!0&&(Q===!0||w!==b)){const Ht=w===b&&j.id===S;le.setState(j,w,Ht)}let Ze=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==xt.state.version||Ue.outputColorSpace!==Se||X.isBatchedMesh&&Ue.batching===!1||!X.isBatchedMesh&&Ue.batching===!0||X.isBatchedMesh&&Ue.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ue.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ue.instancing===!1||!X.isInstancedMesh&&Ue.instancing===!0||X.isSkinnedMesh&&Ue.skinning===!1||!X.isSkinnedMesh&&Ue.skinning===!0||X.isInstancedMesh&&Ue.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ue.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ue.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ue.instancingMorph===!1&&X.morphTexture!==null||Ue.envMap!==ve||j.fog===!0&&Ue.fog!==se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==ze||Ue.morphTargets!==Le||Ue.morphNormals!==$e||Ue.morphColors!==rt||Ue.toneMapping!==yt||Ue.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Ue.__version=j.version);let tn=Ue.currentProgram;Ze===!0&&(tn=Ss(j,G,X));let Xi=!1,nn=!1,Gr=!1;const Mt=tn.getUniforms(),un=Ue.uniforms;if(_e.useProgram(tn.program)&&(Xi=!0,nn=!0,Gr=!0),j.id!==S&&(S=j.id,nn=!0),Xi||b!==w){_e.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",w.projectionMatrix),Mt.setValue(I,"viewMatrix",w.matrixWorldInverse);const $t=Mt.map.cameraPosition;$t!==void 0&&$t.setValue(I,he.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,nn=!0,Gr=!0)}if(X.isSkinnedMesh){Mt.setOptional(I,X,"bindMatrix"),Mt.setOptional(I,X,"bindMatrixInverse");const Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(I,"boneTexture",Ht.boneTexture,Oe))}X.isBatchedMesh&&(Mt.setOptional(I,X,"batchingTexture"),Mt.setValue(I,"batchingTexture",X._matricesTexture,Oe),Mt.setOptional(I,X,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",X._indirectTexture,Oe),Mt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",X._colorsTexture,Oe));const hn=Y.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&oe.update(X,Y,tn),(nn||Ue.receiveShadow!==X.receiveShadow)&&(Ue.receiveShadow=X.receiveShadow,Mt.setValue(I,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=ve,un.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),nn&&(Mt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&zd(un,Gr),se&&j.fog===!0&&te.refreshFogUniforms(un,se),te.refreshMaterialUniforms(un,j,y,O,p.state.transmissionRenderTarget[w.id]),go.upload(I,Pc(Ue),un,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(go.upload(I,Pc(Ue),un,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(I,"center",X.center),Mt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Mt.setValue(I,"normalMatrix",X.normalMatrix),Mt.setValue(I,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let $t=0,Ko=Ht.length;$t<Ko;$t++){const xi=Ht[$t];Ve.update(xi,tn),Ve.bind(xi,tn)}}return tn}function zd(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function kd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,G,Y){const j=Me.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Me.get(w.texture).__webglTexture=G,Me.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Y=Me.get(w);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Hd=I.createFramebuffer();this.setRenderTarget=function(w,G=0,Y=0){N=w,T=G,U=Y;let j=!0,X=null,se=!1,me=!1;if(w){const ve=Me.get(w);if(ve.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(ve.__webglFramebuffer===void 0)Oe.setupRenderTarget(w);else if(ve.__hasExternalTextures)Oe.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&Me.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const ze=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?X=ze[G][Y]:X=ze[G],se=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?X=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Y]:X=ze,R.copy(w.viewport),L.copy(w.scissor),B=w.scissorTest}else R.copy(K).multiplyScalar(y).floor(),L.copy(ee).multiplyScalar(y).floor(),B=xe;if(Y!==0&&(X=Hd),_e.bindFramebuffer(I.FRAMEBUFFER,X)&&j&&_e.drawBuffers(w,X),_e.viewport(R),_e.scissor(L),_e.setScissorTest(B),se){const ve=Me.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,ve.__webglTexture,Y)}else if(me){const ve=G;for(let Fe=0;Fe<w.textures.length;Fe++){const ze=Me.get(w.textures[Fe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,Y,ve)}}else if(w!==null&&Y!==0){const ve=Me.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(w,G,Y,j,X,se,me,Se=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){_e.bindFramebuffer(I.FRAMEBUFFER,ve);try{const Fe=w.textures[Se],ze=Fe.format,Le=Fe.type;if(!Ne.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-j&&Y>=0&&Y<=w.height-X&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se),I.readPixels(G,Y,j,X,Pe.convert(ze),Pe.convert(Le),se))}finally{const Fe=N!==null?Me.get(N).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,G,Y,j,X,se,me,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve)if(G>=0&&G<=w.width-j&&Y>=0&&Y<=w.height-X){_e.bindFramebuffer(I.FRAMEBUFFER,ve);const Fe=w.textures[Se],ze=Fe.format,Le=Fe.type;if(!Ne.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se),I.readPixels(G,Y,j,X,Pe.convert(ze),Pe.convert(Le),0);const rt=N!==null?Me.get(N).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,rt);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gf(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer($e),I.deleteSync(yt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Y=0){const j=Math.pow(2,-Y),X=Math.floor(w.image.width*j),se=Math.floor(w.image.height*j),me=G!==null?G.x:0,Se=G!==null?G.y:0;Oe.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,me,Se,X,se),_e.unbindTexture()};const Vd=I.createFramebuffer(),Gd=I.createFramebuffer();this.copyTextureToTexture=function(w,G,Y=null,j=null,X=0,se=null){se===null&&(X!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=X,X=0):se=0);let me,Se,ve,Fe,ze,Le,$e,rt,yt;const pt=w.isCompressedTexture?w.mipmaps[se]:w.image;if(Y!==null)me=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,ve=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,ze=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const hn=Math.pow(2,-X);me=Math.floor(pt.width*hn),Se=Math.floor(pt.height*hn),w.isDataArrayTexture?ve=pt.depth:w.isData3DTexture?ve=Math.floor(pt.depth*hn):ve=1,Fe=0,ze=0,Le=0}j!==null?($e=j.x,rt=j.y,yt=j.z):($e=0,rt=0,yt=0);const at=Pe.convert(G.format),Ue=Pe.convert(G.type);let xt;G.isData3DTexture?(Oe.setTexture3D(G,0),xt=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Oe.setTexture2DArray(G,0),xt=I.TEXTURE_2D_ARRAY):(Oe.setTexture2D(G,0),xt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xi=I.getParameter(I.UNPACK_SKIP_PIXELS),nn=I.getParameter(I.UNPACK_SKIP_ROWS),Gr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le);const Mt=w.isDataArrayTexture||w.isData3DTexture,un=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const hn=Me.get(w),Ht=Me.get(G),$t=Me.get(hn.__renderTarget),Ko=Me.get(Ht.__renderTarget);_e.bindFramebuffer(I.READ_FRAMEBUFFER,$t.__webglFramebuffer),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let xi=0;xi<ve;xi++)Mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,X,Le+xi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(G).__webglTexture,se,yt+xi)),I.blitFramebuffer(Fe,ze,me,Se,$e,rt,me,Se,I.DEPTH_BUFFER_BIT,I.NEAREST);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Me.has(w)){const hn=Me.get(w),Ht=Me.get(G);_e.bindFramebuffer(I.READ_FRAMEBUFFER,Vd),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gd);for(let $t=0;$t<ve;$t++)Mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,X,Le+$t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,X),un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,se,yt+$t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,se),X!==0?I.blitFramebuffer(Fe,ze,me,Se,$e,rt,me,Se,I.COLOR_BUFFER_BIT,I.NEAREST):un?I.copyTexSubImage3D(xt,se,$e,rt,yt+$t,Fe,ze,me,Se):I.copyTexSubImage2D(xt,se,$e,rt,Fe,ze,me,Se);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(xt,se,$e,rt,yt,me,Se,ve,at,Ue,pt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(xt,se,$e,rt,yt,me,Se,ve,at,pt.data):I.texSubImage3D(xt,se,$e,rt,yt,me,Se,ve,at,Ue,pt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,$e,rt,me,Se,at,Ue,pt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,$e,rt,pt.width,pt.height,at,pt.data):I.texSubImage2D(I.TEXTURE_2D,se,$e,rt,me,Se,at,Ue,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gr),se===0&&G.generateMipmaps&&I.generateMipmap(xt),_e.unbindTexture()},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){T=0,U=0,N=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Zr=[{id:"king",label:"万兽之王",color:"#ff727e"},{id:"joker",label:"薛之谦",color:"#dbe9ff"},{id:"peace",label:"世界和平",color:"#ffe1a0"},{id:"whale",label:"鲸游夜空",color:"#7ecfff"}];function Uv(n){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d",{willReadFrequently:!0});if(t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineCap="round",n==="whale"){t.lineWidth=7,t.strokeStyle="#73caff",t.beginPath(),t.moveTo(245,267),t.bezierCurveTo(360,120,665,120,802,242),t.bezierCurveTo(842,277,787,326,716,337),t.bezierCurveTo(490,391,335,333,245,267),t.bezierCurveTo(205,246,142,180,126,141),t.bezierCurveTo(203,151,237,190,245,267),t.bezierCurveTo(223,296,161,357,122,371),t.bezierCurveTo(129,289,187,265,245,267),t.stroke(),t.strokeStyle="#edb9ec",t.beginPath(),t.moveTo(502,329),t.bezierCurveTo(507,392,549,405,611,410),t.bezierCurveTo(603,367,573,347,553,329),t.stroke(),t.strokeStyle="#ff8aa1",t.beginPath(),t.moveTo(277,237),t.bezierCurveTo(430,122,680,149,793,241),t.stroke(),t.fillStyle="#fff5d9",t.beginPath(),t.arc(748,246,8,0,Math.PI*2),t.fill(),t.strokeStyle="#b9e8ff",t.lineWidth=4;for(let s=0;s<5;s++)t.beginPath(),t.moveTo(411+s*41,285),t.quadraticCurveTo(530+s*25,335,700+s*12,305),t.stroke()}else t.fillStyle=n==="king"?"#ff667c":n==="peace"?"#ffe0a0":"#d8e8ff",t.font=`700 ${n==="joker"?190:170}px "Songti SC","Noto Serif SC","STSong",serif`,t.fillText(n==="king"?"万兽之王":n==="peace"?"世界和平":"薛之谦",512,322,920),t.strokeStyle=n==="king"?"#ffe8c1":"#c6edff",t.lineWidth=5,n==="king"?(t.beginPath(),t.moveTo(512,36),t.bezierCurveTo(476,98,467,130,491,148),t.bezierCurveTo(485,175,504,189,512,199),t.bezierCurveTo(536,172,554,151,527,113),t.bezierCurveTo(507,86,534,66,512,36),t.stroke(),t.beginPath(),t.moveTo(477,161),t.lineTo(512,214),t.lineTo(547,161),t.stroke()):n==="peace"?(t.beginPath(),t.moveTo(512,158),t.bezierCurveTo(458,128,432,74,389,72),t.bezierCurveTo(402,133,442,164,481,180),t.lineTo(512,201),t.lineTo(544,179),t.bezierCurveTo(604,151,625,108,635,70),t.bezierCurveTo(591,84,563,125,537,134),t.quadraticCurveTo(520,104,500,127),t.stroke()):(t.beginPath(),t.ellipse(512,130,77,18,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(415,144),t.quadraticCurveTo(512,188,609,144),t.stroke()),t.strokeStyle=n==="king"?"#ff667c":"#b1dfff",t.lineWidth=3,t.beginPath(),t.moveTo(210,440),t.lineTo(814,440),t.stroke();const i=t.getImageData(0,0,1024,512).data,r=[];for(let s=12;s<500;s+=5)for(let a=12;a<1012;a+=5){const o=(s*1024+a)*4;i[o+3]>80&&r.push({x:(a-512)*.17,y:(256-s)*.17,z:Math.sin(a*.014)*1.3,color:[i[o]/255,i[o+1]/255,i[o+2]/255]})}return r}function Iv(n,e,{notify:t}){const r=Object.fromEntries(Zr.map(O=>[O.id,Uv(O.id)])),s=new Lt;s.position.set(0,133,-8),n.add(s);const a=new Tt,o=new Float32Array(2400*3),l=new Float32Array(2400*3),c=new Float32Array(2400*3),u=new Float32Array(2400*3),h=new Float32Array(2400),d=(O,y,D)=>{for(let q=0;q<2400;q++){const K=O[Math.floor(q/2400*O.length)];y.set([K.x,K.y,K.z],q*3),D.set(K.color,q*3)}};d(r.king,o,c),l.set(o),u.set(c);for(let O=0;O<2400;O++)h[O]=O*1.61803398875%1;a.setAttribute("position",new gt(o,3)),a.setAttribute("aFrom",new gt(o,3)),a.setAttribute("aTo",new gt(l,3)),a.setAttribute("cFrom",new gt(c,3)),a.setAttribute("cTo",new gt(u,3)),a.setAttribute("seed",new gt(h,1));const f=new Ct({uniforms:{morph:{value:1},time:{value:0},motion:{value:1},pointScale:{value:700}},vertexShader:"attribute vec3 aFrom;attribute vec3 aTo;attribute vec3 cFrom;attribute vec3 cTo;attribute float seed;uniform float morph;uniform float time;uniform float motion;uniform float pointScale;varying vec3 vColor;void main(){float k=smoothstep(0.,1.,morph);vec3 p=mix(aFrom,aTo,k);p.z+=sin(seed*6.283+time*.28)*1.1*motion;vColor=mix(cFrom,cTo,k);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z),1.2,4.2);}",fragmentShader:"varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=pow(1.-d,1.35);gl_FragColor=vec4(vColor*.95,a*.9);}",transparent:!0,depthWrite:!1,blending:Ii,fog:!1}),g=new To(a,f);g.frustumCulled=!1,s.add(g);let x="king",m=1,p=0,A=0,E=!0,_=!0,C=!0;const T=1200,U=new Tt,N=new Float32Array(T*3),S=new Float32Array(T*3),b=new Float32Array(T*3),R=new Float32Array(T),L=[new Ie("#eac17d"),new Ie("#e9a8dc"),new Ie("#90cfff"),new Ie("#ffe7bd"),new Ie("#dda1ce")];for(let O=0;O<T;O++){const y=Math.floor(O/240),D=O%240,q=D*2.3999632297,K=1-2*(D+.5)/240,ee=Math.sqrt(1-K*K),xe=10+D%7*1.5;N.set([(y-2)*54,115+y%2*25,-42-Math.abs(y-2)*8],O*3),S.set([Math.cos(q)*ee*xe,K*xe,Math.sin(q)*ee*xe],O*3),b.set(L[y].toArray(),O*3),R[O]=y*2.8}U.setAttribute("position",new gt(N,3)),U.setAttribute("velocity",new gt(S,3)),U.setAttribute("color",new gt(b,3)),U.setAttribute("delay",new gt(R,1));const B=new Ct({uniforms:{time:{value:0},pointScale:{value:700}},vertexShader:"attribute vec3 velocity;attribute float delay;uniform float time;uniform float pointScale;varying vec3 vColor;varying float vAlpha;void main(){float age=mod(time-delay+20.,20.);float t=min(age,4.);vec3 p=position+velocity*t;p.y-=2.2*t*t;vColor=color;vAlpha=(1.-smoothstep(1.3,3.7,age))*smoothstep(0.,.2,age);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pointScale/max(20.,-mv.z)*.8,1.,3.2);}",fragmentShader:"varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.||vAlpha<.01)discard;gl_FragColor=vec4(vColor*1.25,pow(1.-d,1.4)*vAlpha*.65);}",vertexColors:!0,transparent:!0,depthWrite:!1,blending:Fi,fog:!1}),z=new To(U,B);z.frustumCulled=!1,n.add(z);function V(){document.querySelectorAll("button[data-sky-formation]").forEach(O=>{const y=O.dataset.skyFormation===x;O.classList.toggle("active",y),O.setAttribute("aria-pressed",String(y))}),document.querySelector("#sky-auto").setAttribute("aria-checked",String(E)),document.querySelector("#sky-auto").textContent=E?"自动换景 · 开":"自动换景 · 关",document.querySelector("#sky-fireworks").setAttribute("aria-checked",String(C)),document.querySelector("#sky-fireworks").textContent=C?"烟花 · 开":"烟花 · 关",document.querySelector("#sky-title").textContent=Zr.find(O=>O.id===x).label,document.documentElement.dataset.skyFormation=x}function H(O,y=!1){if(!r[O]||(y&&(E=!1,V()),O===x))return;const D=Ni.smoothstep(m,0,1);for(let q=0;q<o.length;q++)o[q]=Ni.lerp(o[q],l[q],D),c[q]=Ni.lerp(c[q],u[q],D);d(r[O],l,u);for(const q of["aFrom","aTo","cFrom","cTo"])a.attributes[q].needsUpdate=!0;x=O,m=0,A=p,y&&(E=!1),V()}return document.querySelectorAll("button[data-sky-formation]").forEach(O=>O.onclick=()=>H(O.dataset.skyFormation,!0)),document.querySelector("#sky-auto").onclick=()=>{E=!E,A=p,V()},document.querySelector("#sky-fireworks").onclick=()=>{C=!C,V()},V(),{update(O,{active:y,reduced:D,low:q,visible:K=!0}){if(_=K,s.visible=_,z.visible=_&&C&&!D,y&&(p+=Math.min(O,.05),m=Math.min(1,m+O/(D?1.2:3.6))),E&&y&&p-A>17){const ee=(Zr.findIndex(xe=>xe.id===x)+1)%Zr.length;H(Zr[ee].id)}s.rotation.y=Math.atan2(e.position.x-s.position.x,e.position.z-s.position.z),f.uniforms.morph.value=m,f.uniforms.time.value=p,f.uniforms.motion.value=D?0:1,f.uniforms.pointScale.value=q?520:700,B.uniforms.time.value=p,U.setDrawRange(0,q?720:T),a.setDrawRange(0,2400)},focus(){t("拖动可环顾夜空，点击下方文字切换无人机造型")},reset(){x="king",m=1,p=0,A=0,E=!0,C=!0,d(r.king,o,c),l.set(o),u.set(c);for(const O of["position","aFrom","aTo","cFrom","cTo"])a.attributes[O].needsUpdate=!0;V()},setFormation(O){H(O,!0)}}}function qh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Tt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Fu(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);const g=Fu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Fu(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new gt(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);o.setComponent(d+h,g,x)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function Nv(n){let e=0,t=0;for(const i of n){const r=new Map;for(const s of[...i.children]){if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||s.material.isShaderMaterial)continue;const a=s.material.uuid+"|"+Object.keys(s.geometry.attributes).sort().join(",")+"|"+!!s.geometry.index;r.has(a)||r.set(a,[]),r.get(a).push(s)}for(const s of r.values()){if(s.length<2)continue;const a=s.map(c=>(c.updateMatrix(),c.geometry.clone().applyMatrix4(c.matrix))),o=qh(a,!1);if(a.forEach(c=>c.dispose()),!o)continue;o.computeBoundingSphere();const l=new mt(o,s[0].material);l.receiveShadow=s.some(c=>c.receiveShadow),l.castShadow=s.some(c=>c.castShadow),l.matrixAutoUpdate=!1,s.forEach(c=>i.remove(c)),i.add(l),e+=s.length,t++}}return{before:e,after:t}}function Fv(n,e,t=1){const i=e<700;return{ratio:Math.min(t,n===0?1.5:n===1?i?1:1.15:n===2?i?.8:1:i?.65:.8),bloom:n<2,shadows:!1,fogCount:n===0?1600:n===1?750:n===2?350:180,beamStep:n===0?1:n===1?2:n===2?3:4,crowdCount:n===0?6400:n===1?4e3:n===2?2400:1600}}function Ov(n,e=[],t=[]){const i=n===0?4:n===1?2:0,r=new Set(t);return Array.from(e).reduce((s,a)=>Number.isInteger(a)&&a>s&&a<=i&&r.has(a)?a:s,0)}function Bv(n,e){let t=!1;for(const i of new Set([n.renderTarget1,n.renderTarget2]))i.samples!==e&&(i.dispose(),i.samples=e,t=!0);return t}const zv=[{title:"大屏里的那一刻",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-01-original.jpg",thumb:"onsite/author-01-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"红色灯光中的舞台",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-02-original.jpg",thumb:"onsite/author-02-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"开场之前",caption:"长沙站 · 2026.04.12",file:"onsite/author-03-original.jpg",thumb:"onsite/author-03-thumb-960.webp",width:1280,height:1478,quality:"original"},{title:"再看一次现场",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-04-original.jpg",thumb:"onsite/author-04-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"带着喜欢去见面",caption:"观演随身物与现场记忆",file:"onsite/author-05-original.jpg",thumb:"onsite/author-05-thumb-960.webp",width:1279,height:1706,quality:"original"},{title:"属于长沙的这一夜",caption:"长沙站 · 2026.04.12",file:"onsite/author-06-original.jpg",thumb:"onsite/author-06-thumb-960.webp",width:1280,height:1707,quality:"original"},{title:"光与绳索之间",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-07-original.jpg",thumb:"onsite/author-07-thumb-960.webp",width:1280,height:1280,quality:"original"},{title:"离舞台近一点",caption:"现场实拍拼图 · 场次未标注",file:"onsite/author-08-original.jpg",thumb:"onsite/author-08-thumb-960.webp",width:1024,height:1366,quality:"original"},{title:"夜色中的场馆",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-09-lossless.webp",thumb:"onsite/author-09-lossless.webp",width:299,height:298,quality:"screenshot-crop"},{title:"蓝色灯海",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-10-lossless.webp",thumb:"onsite/author-10-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"大屏与歌声",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-11-lossless.webp",thumb:"onsite/author-11-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"紫色的这一夜",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-12-lossless.webp",thumb:"onsite/author-12-lossless.webp",width:298,height:298,quality:"screenshot-crop"},{title:"红色舞台片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-13-lossless.webp",thumb:"onsite/author-13-lossless.webp",width:298,height:118,quality:"screenshot-crop"},{title:"白色光影片段",caption:"观演记录截图局部 · 场次未标注",file:"onsite/author-14-lossless.webp",thumb:"onsite/author-14-lossless.webp",width:298,height:118,quality:"screenshot-crop"}],Pi=()=>Object.assign(new Error("图片准备已取消"),{name:"AbortError"});function _o(){let n=0;return{next:()=>++n,isCurrent:e=>e===n,invalidate:()=>++n}}function Yh(n,{signal:e,timeoutMs:t=2e4,createImage:i=()=>new Image}={}){return new Promise((r,s)=>{if(e?.aborted){s(Pi());return}const a=i();let o=!1,l=!1;const c=()=>{clearTimeout(d),a.onload=a.onerror=null,e?.removeEventListener("abort",h)},u=f=>{o||(o=!0,c(),f?(a.removeAttribute?.("src"),s(f)):r(a))},h=()=>u(Pi()),d=setTimeout(()=>u(Object.assign(new Error("照片加载时间较长，请重试"),{name:"TimeoutError"})),t);e?.addEventListener("abort",h,{once:!0}),a.decoding="async",a.loading="eager",a.onerror=()=>u(new Error("照片未能加载，请检查网络后重试")),a.onload=async()=>{if(!(l||o)){l=!0;try{if(a.decode&&await a.decode(),!a.naturalWidth)throw new Error("照片暂时无法显示");u()}catch(f){u(f)}}},a.src=n})}function $h({warmup:n,maxEntries:e=8,maxDecodedPixels:t=12e6,timeoutMs:i=2e4,createImage:r}={}){const s=new Map;let a=0,o=!1;function l(d){n?.forget?.(d.key),s.delete(d.url)}function c(){let d=[...s.values()].filter(g=>g.state==="ready"),f=d.reduce((g,x)=>g+x.pixels,0);for(;d.length>e||f>t&&d.length>1;){const g=d.shift();f-=g.pixels,l(g)}}function u(d,{priority:f="idle",retry:g=!1,demand:x=f==="interactive"}={}){if(o)return Promise.reject(Pi());let m=s.get(d);if(m?.state==="failed"&&g&&(l(m),m=null),!m){let p,A;m={url:d,key:`gallery-image:${++a}:${d}`,state:"queued",controller:new AbortController,promise:new Promise((E,_)=>{p=E,A=_})},m.reject=A,m.promise.catch(()=>{}),m.start=({resumable:E=!1}={})=>m.state==="loading"?m.attempt:m.state!=="queued"?m.promise:(m.state="loading",m.controller=new AbortController,m.attempt=Yh(d,{signal:m.controller.signal,timeoutMs:i,createImage:r}).then(_=>(m.state="ready",m.image=_,m.pixels=_.naturalWidth*_.naturalHeight,s.get(d)===m&&(s.delete(d),s.set(d,m),c()),p(_),_),_=>{throw E&&_.name==="AbortError"&&!o&&!m.demand?m.state="queued":(m.state="failed",A(_)),_}),m.attempt.catch(()=>{}),m.attempt),s.set(d,m)}return x&&(m.demand=!0),m.state==="ready"?(s.delete(d),s.set(d,m),m.promise):(m.state==="failed"||(f==="interactive"||!n?m.start():n.enqueue({key:m.key,priority:f,kind:"image",cacheResult:!1,timeoutMs:i+1e3,retries:0,run:p=>{if(p?.aborted)throw Pi();const A=()=>{m.state==="loading"&&!m.demand&&m.controller.abort()};return p?.addEventListener("abort",A,{once:!0}),m.start({resumable:!0}).finally(()=>p?.removeEventListener("abort",A))}}).catch(p=>{m.state==="queued"&&(m.state="failed",m.controller.abort(),m.promise.catch(()=>{}),m.reject?.(p))})),m.promise)}function h(d,{signal:f,retry:g=!0}={}){if(f?.aborted)return Promise.reject(Pi());const x=u(d,{priority:"interactive",retry:g,demand:!f});if(!f)return x;const m=s.get(d);return new Promise((p,A)=>{const E=()=>{m&&!m.demand&&m.state==="loading"&&m.controller.abort(),A(Pi())};f.addEventListener("abort",E,{once:!0}),x.then(_=>{f.removeEventListener("abort",E),p(_)},_=>{f.removeEventListener("abort",E),A(_)})})}return{prepare:u,load:h,peek:d=>s.get(d)?.state==="ready"?s.get(d).image:null,snapshot:()=>({entries:s.size,decoded:[...s.values()].filter(d=>d.state==="ready").length,pixels:[...s.values()].reduce((d,f)=>d+(f.pixels||0),0)}),dispose(){o=!0;for(const d of s.values())d.controller.abort(),d.state==="queued"&&(d.state="failed",d.reject(Pi())),n?.cancel?.(d.key),n?.forget?.(d.key);s.clear()}}}function kv({warmup:n,cache:e=$h({warmup:n}),root:t=document,photos:i=zv}={}){const r=_=>t.querySelector(_),s=r("#author-viewer"),a=r("#author-view-stage"),o=r("#author-zoom"),l=r("#author-image-status"),c=_o();let u=0,h=!1;const d=_=>String(_).replace(/[&<>"']/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[C]);r("#author-grid").innerHTML=i.map((_,C)=>`<button class="author-photo" data-author-photo="${C}" aria-label="查看${d(_.title)}"><img src="${_.thumb}" alt="${d(_.title)}" width="${_.width}" height="${_.height}" loading="lazy" decoding="async"><span>${d(_.title)}<small>${d(_.caption)}</small></span></button>`).join("");const f=t.createElement("button");f.type="button",f.textContent="重新加载",f.className="author-retry",f.style.cssText="margin-left:10px;text-decoration:underline;color:#dac28f;min-height:36px";function g(){if(o.disabled)return;const _=a.classList.toggle("zoomed");o.textContent=_?"适应窗口":"放大查看",o.setAttribute("aria-pressed",String(_))}function x(_,C,{preview:T=!1}={}){_.id="author-view-image",_.alt=C.title,_.decoding="async",_.onclick=g,_.style.setProperty("--photo-width",C.width+"px"),_.classList.remove("is-loading"),_.setAttribute("aria-label",T?"预览图，正在准备原图":C.title),a.replaceChildren(_)}function m(){if(!s.open||h)return;const _=i[(u+1)%i.length];e.prepare(_.file,{priority:"next",retry:!0}).catch(()=>{})}async function p(_){const C=c.next();u=(_%i.length+i.length)%i.length;const T=i[u];r("#author-view-title").textContent=T.title,r("#author-view-caption").textContent=T.caption,r("#author-image-size").textContent=(T.quality==="screenshot-crop"?"截图局部 · ":"原图 · ")+T.width+" × "+T.height,r("#author-original").href=T.file,r("#author-download").href=T.file,r("#author-download").download=T.title+"."+T.file.split(".").pop(),r("#author-position").textContent=`${u+1} / ${i.length}`,a.classList.remove("zoomed"),a.scrollTop=a.scrollLeft=0,o.textContent="放大查看",o.setAttribute("aria-pressed","false"),o.disabled=!0,l.textContent="正在准备高清照片…",a.setAttribute("aria-busy","true");const U=e.peek(T.file);if(U)x(U,T);else{const N=t.createElement("img");N.src=T.thumb,x(N,T,{preview:!0})}try{const N=await e.prepare(T.file,{priority:"interactive",retry:!0});if(!c.isCurrent(C)||h)return;x(N,T),o.disabled=T.width<700,a.setAttribute("aria-busy","false"),l.textContent=T.quality==="screenshot-crop"?"这张来自观演记录截图，适合按原尺寸查看。":"",m()}catch(N){if(!c.isCurrent(C)||h||N.name==="AbortError")return;a.setAttribute("aria-busy","false"),l.textContent=N.name==="TimeoutError"?"网络较慢，暂时显示预览图。":"高清照片未能加载，暂时显示预览图。",f.onclick=()=>p(u),l.appendChild(f)}}o.onclick=g,t.querySelectorAll("[data-author-photo]").forEach(_=>{_.onclick=()=>{s.showModal(),p(Number(_.dataset.authorPhoto))};const C=()=>e.prepare(i[Number(_.dataset.authorPhoto)].file,{priority:"next",retry:!0}).catch(()=>{});_.addEventListener("pointerenter",C),_.addEventListener("focus",C)}),r("#author-view-close").onclick=()=>s.close(),r("#author-prev").onclick=()=>p(u-1),r("#author-next").onclick=()=>p(u+1);const A=_=>{_.key==="ArrowLeft"&&(_.preventDefault(),p(u-1)),_.key==="ArrowRight"&&(_.preventDefault(),p(u+1))},E=()=>{c.invalidate(),a.setAttribute("aria-busy","false"),a.replaceChildren(),l.textContent=""};return s.addEventListener("keydown",A),s.addEventListener("close",E),{prepare({priority:_="idle"}={}){return Promise.allSettled(i.slice(0,2).map(C=>e.prepare(C.thumb,{priority:_,retry:!0})))},dispose(){h=!0,c.invalidate(),s.removeEventListener("keydown",A),s.removeEventListener("close",E),e.dispose(),a.replaceChildren()}}}const lr=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Hv=180*1024*1024;function Vv({getSelection:n,notify:e}){const t=O=>document.querySelector(O),i=[];let r,s,a=null,o=[],l=null,c=!1,u=null,h=0,d=-1,f=!1;const g=_o(),x=_o(),m=new Promise((O,y)=>{if(!window.indexedDB){y(new Error("这个浏览器不支持本地相册，请换一个现代浏览器"));return}const D=indexedDB.open("beast.personal.gallery.v1",1);let q=!1;const K=xe=>{q||(q=!0,clearTimeout(ee),y(xe))},ee=setTimeout(()=>K(new Error("本地相册暂时没有响应，请关闭其他小站页面后重试")),1e4);D.onupgradeneeded=()=>D.result.createObjectStore("media",{keyPath:"id"}),D.onsuccess=()=>{if(q){D.result.close();return}q=!0,clearTimeout(ee),r=D.result,O()},D.onerror=()=>K(D.error),D.onblocked=()=>K(new Error("本地相册被其他页面占用，请关闭其他小站页面后重试"))});m.catch(O=>{t("#personal-empty").textContent=O.message,t("#personal-upload").disabled=!0});function p(O,y){return m.then(()=>new Promise((D,q)=>{const K=r.transaction("media",O);let ee;const xe=y(K.objectStore("media"));xe&&(xe.onsuccess=()=>{ee=xe.result}),K.oncomplete=()=>D(ee),K.onerror=()=>q(K.error),K.onabort=()=>q(K.error||new Error("保存中断"))}))}function A(){for(;i.length;)URL.revokeObjectURL(i.pop())}const E=O=>{const y=URL.createObjectURL(O);return i.push(y),y};function _(){c=!1,h++}function C(){if(c)return Promise.resolve(o);if(u?.revision===h)return u.promise;const O=h,y=p("readonly",q=>q.getAll()).then(q=>O!==h?C():(o=q.sort((K,ee)=>ee.createdAt-K.createdAt),c=!0,o)),D={revision:O,promise:y};return u=D,y.then(()=>{u===D&&(u=null)},()=>{u===D&&(u=null)}),y}async function T(){const O=x.next();try{if(c||(t("#personal-empty").hidden=!1,t("#personal-empty").textContent="正在读取本机相册…",t("#personal-grid").setAttribute("aria-busy","true")),await C(),!x.isCurrent(O)||(t("#personal-grid").setAttribute("aria-busy","false"),d===h))return;A();const y=o.reduce((D,q)=>D+q.blob.size+(q.thumbnail?.size||0),0);t("#personal-usage").textContent=`${o.length}条记录 · ${(y/1024/1024).toFixed(1)}MB / 180MB`,t("#personal-empty").hidden=o.length>0,t("#personal-empty").textContent="还没有现场记录。选一张照片或一段视频，把这一夜留在自己的相册里。",t("#personal-grid").innerHTML=o.map(D=>`<article class="personal-card"><button class="personal-open" data-personal-open="${D.id}" aria-label="查看${lr(D.title)}">${D.thumbnail?`<img src="${E(D.thumbnail)}" alt="${lr(D.title)}" loading="lazy">`:'<span class="personal-video-symbol">▷<small>现场视频</small></span>'}${D.kind==="video"?'<span class="personal-video-badge">视频</span>':""}</button><div><strong>${lr(D.title)}</strong><small>${lr(D.venue)}${D.zone?" · "+lr(D.zone):""}${D.row?" · "+D.row+"排":""}${D.date?" · "+lr(D.date):""}</small><footer><button data-personal-edit="${D.id}">编辑</button><button data-personal-download="${D.id}">保存原文件</button><button data-personal-remove="${D.id}">移除</button></footer></div></article>`).join(""),document.querySelectorAll("[data-personal-edit]").forEach(D=>D.onclick=()=>N(D.dataset.personalEdit)),document.querySelectorAll("[data-personal-open]").forEach(D=>D.onclick=()=>H(D.dataset.personalOpen)),document.querySelectorAll("[data-personal-remove]").forEach(D=>D.onclick=()=>S(D.dataset.personalRemove)),document.querySelectorAll("[data-personal-download]").forEach(D=>D.onclick=()=>b(D.dataset.personalDownload)),d=h}catch(y){if(!x.isCurrent(O))return;t("#personal-grid").setAttribute("aria-busy","false"),t("#personal-empty").hidden=!1,t("#personal-empty").textContent=y.message||"相册暂时无法读取，请稍后重试",e(y.name==="QuotaExceededError"?"浏览器存储空间不足，请先备份并移除部分文件":y.message||"相册暂时无法读取")}}async function U(O){if(!O.type.startsWith("image/"))return null;const y=URL.createObjectURL(O);try{const D=await Yh(y,{timeoutMs:15e3}),q=Math.min(1,720/Math.max(D.naturalWidth,D.naturalHeight)),K=document.createElement("canvas");return K.width=Math.max(1,Math.round(D.naturalWidth*q)),K.height=Math.max(1,Math.round(D.naturalHeight*q)),K.getContext("2d").drawImage(D,0,0,K.width,K.height),await new Promise(ee=>K.toBlob(ee,"image/webp",.84))}finally{URL.revokeObjectURL(y)}}t("#personal-upload").onclick=()=>{if(g.invalidate(),f)return;const O=n();l=null,s=null,a=null,t("#personal-file").value="",t("#personal-file-label").textContent="选择照片或视频",t("#personal-save").disabled=!0,t("#personal-title").value="",t("#personal-zone").value=O.zone,t("#personal-row").value=O.row,t("#personal-seat").value=O.seat,t("#personal-editor").showModal()},t("#personal-file").onchange=async O=>{const y=g.next(),D=O.target.files[0];if(s=null,a=null,t("#personal-save").disabled=!0,t("#personal-file-label").textContent="选择照片或视频",!D)return;if(!["image/jpeg","image/png","image/webp","video/mp4","video/webm"].includes(D.type)){e("支持JPG、PNG、WebP照片，或MP4、WebM视频");return}const K=D.type.startsWith("video/")?40*1024*1024:15*1024*1024;if(D.size>K){e(D.type.startsWith("video/")?"单个视频请控制在40MB以内":"单张照片请控制在15MB以内");return}t("#personal-file-label").textContent="正在处理所选文件…";try{const ee=await U(D);if(!g.isCurrent(y))return;a=ee,s=D,t("#personal-file-label").textContent=`${D.name} · ${(D.size/1024/1024).toFixed(1)}MB`,t("#personal-title").value||(t("#personal-title").value=D.name.replace(/\.[^.]+$/,"").slice(0,60)),t("#personal-save").disabled=!1}catch{if(!g.isCurrent(y))return;t("#personal-file-label").textContent="选择照片或视频",e("这张图片暂时无法解码，请换成JPG或PNG格式")}},t("#personal-form").onsubmit=async O=>{if(O.preventDefault(),!s||f)return;const y=s;try{await C()}catch{e("本地相册暂时无法读取，请稍后重试");return}if(!s||s!==y||f)return;const D=t("#personal-title").value.trim();if(!D){t("#personal-title").focus();return}if(!l&&o.length>=30){e("相册最多保存30条记录，请先备份并移除部分文件");return}if(o.filter(ee=>ee.id!==l).reduce((ee,xe)=>ee+xe.blob.size+(xe.thumbnail?.size||0),0)+s.size+(a?.size||0)>Hv){e("本地相册容量上限为180MB，请先备份并移除部分文件");return}t("#personal-save").disabled=!0,f=!0,t("#personal-file").disabled=!0;const K={id:l||crypto.randomUUID(),title:D.slice(0,60),blob:s,thumbnail:a,fileName:s.name,kind:s.type.startsWith("video/")?"video":"photo",venue:t("#personal-venue").value,date:t("#personal-date").value,zone:t("#personal-zone").value.trim().slice(0,24),row:Math.min(999,Math.max(0,Number(t("#personal-row").value)||0)),seat:Math.min(999,Math.max(0,Number(t("#personal-seat").value)||0)),createdAt:o.find(ee=>ee.id===l)?.createdAt||Date.now()};try{await p("readwrite",ee=>ee.put(K)),_(),t("#personal-editor").close(),await T(),e("已保存到当前浏览器，仅本机可见")}catch{e("保存失败，可能是浏览器存储空间不足"),t("#personal-save").disabled=!s}finally{f=!1,t("#personal-file").disabled=!1}};function N(O){if(f)return;g.invalidate();const y=o.find(D=>D.id===O);y&&(l=O,s=new File([y.blob],y.fileName,{type:y.blob.type}),a=y.thumbnail,t("#personal-file").value="",t("#personal-file-label").textContent=`${y.fileName} · 可重新选择文件`,t("#personal-title").value=y.title,t("#personal-venue").value=y.venue,t("#personal-date").value=y.date,t("#personal-zone").value=y.zone,t("#personal-row").value=y.row,t("#personal-seat").value=y.seat,t("#personal-save").disabled=!1,t("#personal-editor").showModal())}t("#personal-cancel").onclick=()=>{g.invalidate(),t("#personal-editor").close()},t("#personal-editor").addEventListener("close",()=>{g.invalidate(),s=null,a=null,t("#personal-save").disabled=!0});async function S(O){const y=o.find(D=>D.id===O);if(y&&confirm(`从本地相册移除《${y.title}》？你的原始文件不会被删除。`))try{await p("readwrite",D=>D.delete(O)),_(),await T(),e("已从当前浏览器相册移除")}catch{e("移除失败，请稍后重试")}}function b(O){const y=o.find(K=>K.id===O);if(!y)return;const D=URL.createObjectURL(y.blob),q=document.createElement("a");q.href=D,q.download=y.fileName,q.click(),setTimeout(()=>URL.revokeObjectURL(D),1e4)}let R,L;const B=_o(),z=document.createElement("p");z.id="personal-view-status",z.setAttribute("role","status"),t("#personal-view-meta").after(z);function V(){B.invalidate(),clearTimeout(L);const O=t("#personal-view-video"),y=t("#personal-view-image");O.onloadedmetadata=O.onloadeddata=O.onerror=y.onload=y.onerror=null,O.pause(),O.removeAttribute("src"),O.load(),y.removeAttribute("src"),R&&URL.revokeObjectURL(R),R=null}function H(O){const y=o.find(De=>De.id===O);if(!y)return;V();const D=B.next();z.textContent=y.kind==="video"?"正在准备视频…":"正在准备照片…",R=URL.createObjectURL(y.blob),t("#personal-view-title").textContent=y.title,t("#personal-view-meta").textContent=`${y.venue}${y.zone?" · "+y.zone:""}${y.row?" · "+y.row+"排":""}${y.seat?y.seat+"座":""} · 仅本机可见`;const q=t("#personal-view-image"),K=t("#personal-view-video");q.hidden=y.kind==="video",K.hidden=y.kind!=="video";const ee=()=>{B.isCurrent(D)&&(clearTimeout(L),z.textContent="")},xe=()=>{if(!B.isCurrent(D))return;clearTimeout(L),z.textContent=y.kind==="video"?"这个浏览器暂时无法播放该视频编码，可以保存原文件查看。":"照片暂时无法显示，可以保存原文件查看。";const De=document.createElement("button");De.textContent="保存原文件",De.style.cssText="margin-left:10px;text-decoration:underline;color:#dac28f",De.onclick=()=>b(O),z.appendChild(De)};L=setTimeout(xe,15e3),y.kind==="video"?(K.onloadedmetadata=ee,K.onloadeddata=ee,K.onerror=xe,K.src=R,K.muted=!0):(q.onload=ee,q.onerror=xe,q.src=R),t("#personal-viewer").open||t("#personal-viewer").showModal()}return t("#personal-viewer").addEventListener("close",()=>{V(),z.textContent=""}),t("#personal-view-close").onclick=()=>t("#personal-viewer").close(),{open:T,prepare:C}}const Jr={idle:0,next:1,interactive:2},Gv=new Set(["image","audio","gpu"]);function ri(n,e){const t=new Error(e);return t.name=n,t}function Wv(){const n=globalThis;return{now:()=>n.performance?.now?.()??Date.now(),setTimeout:(e,t)=>n.setTimeout(e,t),clearTimeout:e=>n.clearTimeout(e),requestIdleCallback:n.requestIdleCallback?e=>n.requestIdleCallback(e):null,cancelIdleCallback:n.cancelIdleCallback?e=>n.cancelIdleCallback(e):null,hidden:()=>n.document?.hidden===!0,online:()=>n.navigator?.onLine!==!1,connection:()=>n.navigator?.connection??null,inputPending:()=>n.navigator?.scheduling?.isInputPending?.()===!0,subscribe:e=>{const t=[[n.document,"visibilitychange"],[n.window,"online"],[n.window,"offline"],[n.navigator?.connection,"change"]];for(const[i,r]of t)i?.addEventListener?.(r,e);return()=>{for(const[i,r]of t)i?.removeEventListener?.(r,e)}}}}function Xv({env:n={},maxQueued:e=20,maxHistory:t=24,maxDeferrals:i=3,interactionDelay:r=320,timeoutMs:s=12e3,retries:a=1,minIdleMs:o=4}={}){const l={...Wv(),...n},c=new Map,u=new Set;e=Math.max(1,Math.floor(e)),t=Math.max(0,Math.floor(t)),r=Math.max(0,r),s=Math.max(1,s),a=Math.min(2,Math.max(0,Math.floor(a)));let h=!1,d=!1,f=null,g=null,x=null,m=null,p=0,A=-1/0;i=Math.max(0,Math.floor(i));const E={completed:0,failed:0,cancelled:0,retried:0,deferred:0,rejected:0},_=()=>{const y=l.connection?.()??{},D=y.effectiveType;return{hidden:!!l.hidden?.(),online:l.online?.()!==!1,saveData:y.saveData===!0,slow:D==="slow-2g"||D==="2g"||D==="3g"||Number.isFinite(y.downlink)&&y.downlink>0&&y.downlink<1.5}};function C(){x!==null&&(l.clearTimeout(x),x=null),m!==null&&(l.cancelIdleCallback?.(m),m=null)}function T(y){c.get(y.key)===y&&c.delete(y.key)}function U(){const y=[...c.values()].filter(D=>D.state==="done"||D.state==="failed");for(;y.length>t;){const D=y.shift();c.delete(D.key)}}function N(y,D){return y.kind==="gpu"||D.online&&(!D.saveData&&!D.slow||y.priority==="interactive")}function S(y,D){return(!g||y.kind!=="gpu")&&N(y,D)}function b(y){g=y,y.state="blocked",f===y&&(f=null)}function R(y){!f||f.kind==="gpu"||f.cancelled||f.controller?.signal.aborted||!y.hidden&&!u.size&&N(f,y)||(f.pauseRequested=!0,f.controller.abort(ri("AbortError","Foreground or connection policy needs the resource lane")))}function L(){if(C(),!h||d)return;const y=_();if(f){R(y);return}if(u.size||y.hidden)return;const D=[...c.values()].filter(De=>De.state==="queued"&&S(De,y));if(!D.length)return;const q=l.now(),K=Math.min(...D.map(De=>De.notBefore)),ee=Math.max(0,A-q,K-q);if(ee>0){x=l.setTimeout(()=>{x=null,L()},ee);return}const xe=De=>{if(m=null,x=null,d||!h||f||u.size||_().hidden)return;if(l.now()<A||l.inputPending?.()||De&&De.timeRemaining()<o){x=l.setTimeout(()=>{x=null,L()},50);return}const fe=_(),Q=l.now(),ie=[...c.values()].filter(he=>he.state==="queued"&&he.notBefore<=Q&&S(he,fe)).sort((he,be)=>Jr[be.priority]-Jr[he.priority]||he.order-be.order)[0];ie?B(ie):L()};l.requestIdleCallback?m=l.requestIdleCallback(xe):x=l.setTimeout(()=>xe(null),32)}function B(y){f=y,y.state="running",y.attempts++,y.startedAt=l.now(),y.pauseRequested=!1,y.timeoutError=null;const D=new AbortController;y.controller=D;let q;const K=new Promise((fe,Q)=>{q=()=>Q(D.signal.reason??ri("AbortError","Resource preparation cancelled")),D.signal.addEventListener("abort",q,{once:!0})}),ee=l.setTimeout(()=>{const fe=ri("TimeoutError",`Resource preparation timed out: ${y.key}`);y.kind==="gpu"&&(y.timeoutError=fe,y.error=fe.message,y.reject(fe),y.failureCounted=!0,E.failed++,b(y)),D.abort(fe),y.kind==="gpu"&&L()},y.timeoutMs);y.timer=ee;const xe=Promise.resolve().then(()=>{if(D.signal.aborted)throw D.signal.reason;return y.run(D.signal)});y.kind==="gpu"?(K.catch(()=>{}),xe.then(fe=>De(y.timeoutError,fe),fe=>De(y.timeoutError??fe))):Promise.race([xe,K]).then(fe=>De(null,fe),fe=>De(fe));function De(fe,Q){l.clearTimeout(ee),D.signal.removeEventListener("abort",q),y.controller=null,y.timer=null,f===y&&(f=null),g===y&&(g=null),y.cancelled||d?(y.state="cancelled",T(y),y.reject(fe??ri("AbortError","Resource preparation cancelled"))):y.pauseRequested?(y.deferrals++,E.deferred++,y.deferrals<=i?(y.state="queued",y.notBefore=l.now(),y.error=null):(y.state="cancelled",T(y),E.cancelled++,y.reject(ri("AbortError","Resource preparation deferred too often; retry on user intent")))):fe?(y.failures++,!y.timeoutError&&y.failures<=y.retries?(y.state="queued",y.notBefore=l.now()+Math.min(1e3,250*y.failures),y.error=String(fe.message??fe),E.retried++):(y.state="failed",y.finishedAt=l.now(),y.error=String(fe.message??fe),y.failureCounted||(y.failureCounted=!0,E.failed++),y.reject(fe))):(y.state="done",y.finishedAt=l.now(),y.error=null,E.completed++,y.resolve(Q),y.cacheResult||T(y)),U(),L()}}function z({key:y,priority:D="idle",kind:q="image",run:K,timeoutMs:ee=s,retries:xe=a,cacheResult:De=!0}={}){if(typeof y!="string"||!y||typeof K!="function"||!Gv.has(q)||!Object.prototype.hasOwnProperty.call(Jr,D))throw new TypeError("A resource task needs key, kind, priority and run(signal)");if(d){const be=Promise.reject(ri("AbortError","Resource preparation disposed"));return be.catch(()=>{}),be}const fe=c.get(y);if(fe)return(fe.state==="queued"||fe.state==="running")&&Jr[D]>Jr[fe.priority]&&(fe.priority=D,L()),fe.promise;if([...c.values()].filter(be=>be.state==="queued"||be.state==="running").length>=e){E.rejected++;const be=Promise.reject(ri("QueueFullError","Resource preparation queue is full"));return be.catch(()=>{}),be}let Q,ie;const he=new Promise((be,Te)=>{Q=be,ie=Te});return he.catch(()=>{}),c.set(y,{key:y,priority:D,kind:q,run:K,timeoutMs:Number.isFinite(ee)?Math.max(1,ee):s,retries:Number.isFinite(xe)?Math.min(2,Math.max(0,Math.floor(xe))):a,cacheResult:De,promise:he,resolve:Q,reject:ie,state:"queued",attempts:0,failures:0,deferrals:0,order:p++,notBefore:0,error:null,controller:null,timer:null,cancelled:!1}),L(),he}function V(y){const D=c.get(y);if(!D)return!1;if(D.state==="done"||D.state==="failed")return c.delete(y),!0;if(D.cancelled)return!1;D.cancelled=!0,D.failureCounted||E.cancelled++;const q=ri("AbortError",`Resource preparation cancelled: ${y}`);return T(D),D.reject(q),D.controller?(l.clearTimeout(D.timer),D.kind==="gpu"&&b(D),D.controller.abort(q),L()):(D.state="cancelled",L()),!0}function H(){const y=_(),D=l.now(),q=[...c.values()],K=ee=>({key:ee.key,priority:ee.priority,kind:ee.kind,state:ee.state,attempts:ee.attempts,deferrals:ee.deferrals,error:ee.error,elapsedMs:ee.startedAt===void 0?0:Math.max(0,(ee.finishedAt??D)-ee.startedAt)});return{started:h,disposed:d,busy:[...u],policy:y,cooldownMs:Math.max(0,A-D),running:f?K(f):null,gpuBlocked:g?K(g):null,queued:q.filter(ee=>ee.state==="queued").map(K),history:q.filter(ee=>ee.state==="done"||ee.state==="failed").map(K),...E}}const O=l.subscribe?.(()=>L());return{enqueue:z,cancel:V,forget(y){const D=c.get(y);return!D||D.state!=="done"&&D.state!=="failed"?!1:c.delete(y)},start(){d||h||(h=!0,L())},touch(){d||(A=l.now()+r,L())},setBusy(y,D){D?u.add(y):u.delete(y),L()},refresh:L,snapshot:H,dispose(){if(!d){d=!0,C(),O?.();for(const y of[...c.keys()])V(y);c.clear(),u.clear()}}}}function qv({warmup:n,renderer:e,scene:t,camera:i,urls:r,loadImage:s,createTexture:a,fallback:o,onTexture:l=()=>{},report:c=()=>{}}){const u=r.map(()=>o),h=new Map,d=new Map;let f=!1;const g=(p,A)=>Promise.resolve().then(A).then(E=>(c({type:"scene-resource-ready",key:p}),E));function x(p,A="idle"){if(f||!r[p])return Promise.resolve();if(h.has(p))return Promise.resolve(h.get(p));const E="stage-image:"+p,_=n.enqueue({key:E,kind:"image",priority:A,cacheResult:!1,retries:0,run:C=>s(r[p],{signal:C})}).then(C=>{if(!f)return n.enqueue({key:"stage-upload:"+p,kind:"gpu",priority:A,cacheResult:!1,retries:0,run:()=>{if(f)return;let T=h.get(p);T||(T=a(C,p));try{e.initTexture(T)}catch(U){throw T.dispose(),U}return h.set(p,T),u[p]=T,l(p,T),c({type:"stage-texture-ready",index:p}),T}})});return d.set(p,_),_.catch(()=>{n.forget?.(E),n.forget?.("stage-upload:"+p)}).finally(()=>{d.get(p)===_&&d.delete(p)}).catch(()=>{}),_}function m(p,A,E="idle"){return n.enqueue({key:"stage-program:"+p,kind:"gpu",priority:E,retries:0,timeoutMs:2e4,run:_=>g(p,async()=>{f||_.aborted||await e.compileAsync(A,i,t)})})}return{textures:u,prepareTexture:x,prepare({objects:p=[]}={}){const A=r.map((E,_)=>x(_,_===0?"next":"idle"));return p.forEach((E,_)=>A.push(m(String(_),E))),Promise.allSettled(A)},dispose(){f=!0,h.forEach(p=>p.dispose()),h.clear(),d.clear()}}}const jh=""+new URL("sky-reference-king-xeMxM6Wq.jpg",import.meta.url).href,Kh=""+new URL("sky-reference-whale-CdIzjOrU.jpg",import.meta.url).href,Zh=""+new URL("sky-reference-peace-BSvc3sxh.jpg",import.meta.url).href,bn=[{id:"concert-01",title:"狐狸",group:"concert",order:1,duration:30,note:"",scene:1,file:"audio/concert-01.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E7%8B%90%E7%8B%B8/1787448185?i=1787448197&uo=4",sha256:"0a71f026eacb6ebfc10bd858bba1e3e31a6f92297b24ee89811f70056d8fab12",catalogId:1787448197},{id:"concert-02",title:"野心",group:"concert",order:2,duration:30,note:"",scene:0,file:"audio/concert-02.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E9%87%8E%E5%BF%83/1787447447?i=1787447721&uo=4",sha256:"f63162b34dc303a788715f9653ecfe62fae1b397b25929efcc126e628d420035",catalogId:1787447721},{id:"concert-03",title:"金斧子银斧子",group:"concert",order:3,duration:30,note:"",scene:1,file:"audio/concert-03.m4a",artist:"薛之谦",album:"金斧子银斧子 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%87%91%E6%96%A7%E5%AD%90%E9%93%B6%E6%96%A7%E5%AD%90/1830949632?i=1830949637&uo=4",sha256:"4f20dd239079b06f1b4de042dcd2a1949c3caee85274c760a3f345f77718f0d3",catalogId:1830949637},{id:"concert-04",title:"丑八怪",group:"concert",order:4,duration:30,note:"",scene:0,file:"audio/concert-04.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%B8%91%E5%85%AB%E6%80%AA/1788255148?i=1788255149&uo=4",sha256:"20a8549bbb5c65e6de28e7604ee938fbbb6164c03df8eaa350904dc2b7cbea41",catalogId:1788255149},{id:"concert-05",title:"动物世界",group:"concert",order:5,duration:30,note:"",scene:1,file:"audio/concert-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%8A%A8%E7%89%A9%E4%B8%96%E7%95%8C/1787509715?i=1787509716&uo=4",sha256:"90065810de890a8b880211ba13fc71eb17e3a87f72b1ac871cda361d34d0169d",catalogId:1787509716},{id:"concert-06",title:"怪咖",group:"concert",order:6,duration:30,note:"",scene:1,file:"audio/concert-06.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%80%AA%E5%92%96/1787448185?i=1787448195&uo=4",sha256:"cef6291a75b45dd1bc6412d0d849be0f9157e2ce2a487511326192557b92ec1b",catalogId:1787448195},{id:"concert-07",title:"渡",group:"concert",order:7,duration:30,note:"",scene:0,file:"audio/concert-07.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%B8%A1/1787509715?i=1787509727&uo=4",sha256:"f3661c42fcd09899d60f38e2642319a250673182984c0e38095b773b29fb5855",catalogId:1787509727},{id:"concert-08",title:"我的雅典娜",group:"concert",order:8,duration:30,note:"",scene:0,file:"audio/concert-08.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9A%84%E9%9B%85%E5%85%B8%E5%A8%9C/1787930075?i=1787930080&uo=4",sha256:"b629d63107a89281ba5c128a738344e828c8b66a723d950d9dcd847d64966c0a",catalogId:1787930080},{id:"concert-09",title:"凤毛麟角",group:"concert",order:9,duration:30,note:"",scene:1,file:"audio/concert-09.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%87%A4%E6%AF%9B%E9%BA%9F%E8%A7%92/1787448335?i=1787448337&uo=4",sha256:"b0305b8a354634a5c2af1e53bae7e084ba8ecf1f9ccd1d6e7eb23b598be573f9",catalogId:1787448337},{id:"concert-10",title:"背过手",group:"concert",order:10,duration:30,note:"",scene:0,file:"audio/concert-10.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E8%83%8C%E8%BF%87%E6%89%8B/1787509715?i=1787509726&uo=4",sha256:"d85742d522479548674cb27120db14ebf0da6167a7e85fc11f4361350ad6c4a0",catalogId:1787509726},{id:"concert-12",title:"念",group:"concert",order:12,duration:30,note:"",scene:0,file:"audio/concert-12.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%BF%B5/1787930095?i=1787930236&uo=4",sha256:"e475dd716ed9e590cbf7d1aee7c1e1a30fe2c2d0e5f7b042cadd1a5427387537",catalogId:1787930236},{id:"concert-13",title:"粉钻",group:"concert",order:13,duration:30,note:"广州现场 · 观众录制",scene:3,file:"audio/concert-13.m4a",artist:"薛之谦",album:"万兽之王 · 广州站 2026-03-20（观众录制）",sourceUrl:"https://www.youtube.com/watch?v=o4u9wdoxHYI",sha256:"f23b91f8bf35cfc945d5175d07bffa5e95e3b159d39d010ed508bdcdcfbab814",sourceType:"audience-live",sourceStart:120,sourceEnd:150},{id:"concert-14",title:"违背的青春",group:"concert",order:14,duration:30,note:"",scene:2,file:"audio/concert-14.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9D%E8%83%8C%E7%9A%84%E9%9D%92%E6%98%A5/1787448185?i=1787448425&uo=4",sha256:"0e5b729ac3df616b44b3371bd8c7957c0b2d1ff5facf56a9aeb375a917eba88d",catalogId:1787448425},{id:"concert-15",title:"骆驼",group:"concert",order:15,duration:30,note:"",scene:1,file:"audio/concert-15.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E9%AA%86%E9%A9%BC/1787509715?i=1787509723&uo=4",sha256:"0412921477e0cdc9f9fbf36d83246e058b3968532b92e0114af96f151cf1cd55",catalogId:1787509723},{id:"concert-16",title:"认真的雪",group:"concert",order:16,duration:30,note:"",scene:0,file:"audio/concert-16.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA/1789061389?i=1789061392&uo=4",sha256:"b867e90f355110d7b80df258cfa50d2d6997d9e7e02b67de1b6b03ffcc541c8f",catalogId:1789061392},{id:"concert-17",title:"其实",group:"concert",order:17,duration:30,note:"",scene:0,file:"audio/concert-17.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E5%85%B6%E5%AE%9E/1788255148?i=1788255156&uo=4",sha256:"5d07c2027911885df35bab9b003ce6755b2e8ed84fe2270eac60b98258fe2145",catalogId:1788255156},{id:"concert-18",title:"平庸",group:"concert",order:18,duration:30,note:"现场版",scene:0,file:"audio/concert-18.m4a",artist:"薛之谦",album:"音乐缘计划2 第3期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E5%B9%B3%E5%BA%B8-live/1851707677?i=1851707683&uo=4",sha256:"9878d742997e5fd490856b720ccf660e32e5fbbef24af2190d07473ec758b0f8",catalogId:1851707683},{id:"concert-19",title:"在那天回不去的路上",group:"concert",order:19,duration:30,note:"",scene:0,file:"audio/concert-19.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%9C%A8%E9%82%A3%E5%A4%A9%E5%9B%9E%E4%B8%8D%E5%8E%BB%E7%9A%84%E8%B7%AF%E4%B8%8A/1787930095?i=1787930235&uo=4",sha256:"4318ec6debadf1e45be6fc569d7221b9ae86eff5ab6781874bcc8df601a5da4d",catalogId:1787930235},{id:"concert-20",title:"最好",group:"concert",order:20,duration:30,note:"",scene:0,file:"audio/concert-20.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%9C%80%E5%A5%BD/1787448185?i=1787448411&uo=4",sha256:"4f5481f2b44201583bd029b1b688c5be3949c1150dae233c8d0392eaeb554986",catalogId:1787448411},{id:"concert-21",title:"刚刚好",group:"concert",order:21,duration:30,note:"",scene:0,file:"audio/concert-21.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E5%88%9A%E5%88%9A%E5%A5%BD/1787929894?i=1787929902&uo=4",sha256:"07870b02f3d7ca5e189fceb410436a9bc89a249d72d74664bf201562f0d5e95f",catalogId:1787929902},{id:"concert-22",title:"哑巴",group:"concert",order:22,duration:30,note:"",scene:0,file:"audio/concert-22.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E5%93%91%E5%B7%B4/1787448185?i=1787448422&uo=4",sha256:"1edaefcf675653e979815a0710751c7da8edc84d3e086bd583418a98c2c69fe5",catalogId:1787448422},{id:"concert-23",title:"你还要我怎样",group:"concert",order:23,duration:30,note:"",scene:0,file:"audio/concert-23.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%98%E8%A6%81%E6%88%91%E6%80%8E%E6%A0%B7/1788255148?i=1788255151&uo=4",sha256:"82623585d86d760c9f0d9a42e828bf9166a8fbba702a783a329d605566e57369",catalogId:1788255151},{id:"concert-25",title:"像风一样",group:"concert",order:25,duration:30,note:"",scene:0,file:"audio/concert-25.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E5%83%8F%E9%A3%8E%E4%B8%80%E6%A0%B7/1787509715?i=1787509720&uo=4",sha256:"45a670a7d0bfcedde80275fc067587187dc3593d9437ffe7fbff4c17b9e6f6a7",catalogId:1787509720},{id:"concert-27",title:"绅士",group:"concert",order:27,duration:30,note:"",scene:0,file:"audio/concert-27.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E7%BB%85%E5%A3%AB/1787929894?i=1787930251&uo=4",sha256:"7e660a18edced6d5e3bb951a6870b9f1534467849a34dc4c76636233bf485302",catalogId:1787930251},{id:"concert-28",title:"意外",group:"concert",order:28,duration:30,note:"",scene:0,file:"audio/concert-28.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%84%8F%E5%A4%96/1788255148?i=1788255150&uo=4",sha256:"3e34153fe6f2b4951fa146c9dbda064b361b9f2bc8345b8386a34a432c656b3e",catalogId:1788255150},{id:"concert-29",title:"Nothing",group:"concert",order:29,duration:30,note:"",scene:0,file:"audio/concert-29.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/nothing/1787930095?i=1787930216&uo=4",sha256:"5b085dea5ee017e2f2ccb8ff32340b9b32835b87044f9fe460bb30e80f14dfe6",catalogId:1787930216},{id:"concert-30",title:"天外来物",group:"concert",order:30,duration:30,note:"",scene:2,file:"audio/concert-30.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E5%A4%A9%E5%A4%96%E6%9D%A5%E7%89%A9/1787447447?i=1787447448&uo=4",sha256:"08a9f5b315bd76e8d38186cb6f1c1f879fea4f777759b0ac633c63fe4612f4be",catalogId:1787447448},{id:"concert-31",title:"深深爱过你",group:"concert",order:31,duration:30,note:"前世版",scene:2,file:"audio/concert-31.m4a",artist:"薛之谦",album:"深深爱过你",sourceUrl:"https://music.apple.com/us/album/%E6%B7%B1%E6%B7%B1%E7%88%B1%E8%BF%87%E4%BD%A0-%E5%89%8D%E4%B8%96/1787447459?i=1787447461&uo=4",sha256:"2a6b00fce2456a402b4388ee8cfd37fd3fa5f03691b6f088a067d5b66f34c2f8",catalogId:1787447461},{id:"concert-32",title:"方圆几里",group:"concert",order:32,duration:30,note:"",scene:0,file:"audio/concert-32.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%96%B9%E5%9C%86%E5%87%A0%E9%87%8C/1788255148?i=1788255157&uo=4",sha256:"4f90f808ff090b9710a9bb0e8140be09de45f014a15162e7a586a57f24f592da",catalogId:1788255157},{id:"concert-33",title:"跃",group:"concert",order:33,duration:30,note:"",scene:2,file:"audio/concert-33.m4a",artist:"薛之谦",album:"跃 - Single",sourceUrl:"https://music.apple.com/us/album/%E8%B7%83/1826958519?i=1826958520&uo=4",sha256:"f8cdf17d03b0a0b70329a26426dde1bd50f97fd6e7d772cdc5e1ee52e7dfa818",catalogId:1826958520},{id:"chorus-01",title:"陪你去流浪",group:"chorus",order:1,duration:30,note:"",scene:2,file:"audio/chorus-01.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E9%99%AA%E4%BD%A0%E5%8E%BB%E6%B5%81%E6%B5%AA/1787447756?i=1787447868&uo=4",sha256:"674809c656d623c4f25a3579c9bb7947a569d9dc05d9954310f3f3d29d5e718b",catalogId:1787447868},{id:"chorus-02",title:"演员",group:"chorus",order:2,duration:30,note:"",scene:0,file:"audio/chorus-02.m4a",artist:"薛之谦",album:"绅士 - Single",sourceUrl:"https://music.apple.com/us/album/%E6%BC%94%E5%91%98/1787929823?i=1787929825&uo=4",sha256:"f2938912f450942b9d89a63756e5275ae338da8f50fe689c1e8c5eea56e7260f",catalogId:1787929825},{id:"chorus-03",title:"崇拜",group:"chorus",order:3,duration:30,note:"",scene:1,file:"audio/chorus-03.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E5%B4%87%E6%8B%9C/1787930095?i=1787930222&uo=4",sha256:"7003b5d8d380f1177e0332202c591166ffebe25e9bcd137384dd977ae1689cac",catalogId:1787930222},{id:"chorus-04",title:"倾城",group:"chorus",order:4,duration:30,note:"",scene:0,file:"audio/chorus-04.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E5%80%BE%E5%9F%8E/1789061268?i=1789061559&uo=4",sha256:"d3a0e0fae18a1894628c54a32fdc69a06c68a9ae4922110e723871b3af85109c",catalogId:1789061559},{id:"chorus-05",title:"暧昧",group:"chorus",order:5,duration:30,note:"",scene:0,file:"audio/chorus-05.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%9A%A7%E6%98%A7/1787509715?i=1787509717&uo=4",sha256:"632d5f0aafd3f305e7d3912045b51f3319077536a4db12ee4637bd0e091e27fb",catalogId:1787509717},{id:"chorus-06",title:"可",group:"chorus",order:6,duration:30,note:"合唱版",scene:0,file:"audio/chorus-06.m4a",artist:"张靓颖 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%AF/1787448335?i=1787448341&uo=4",sha256:"2679d62d1b9da3b09e3160d74aedaac7996a2e40511fb066fbe0e17726a7d6e5",catalogId:1787448341},{id:"chorus-07",title:"洛城",group:"chorus",order:7,duration:30,note:"",scene:0,file:"audio/chorus-07.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E6%B4%9B%E5%9F%8E/1787448335?i=1787448344&uo=4",sha256:"4a6c88e27ea3c10e0e9f0a7629eb5f1f8889a38976e1fe6b325b26f5e57c854b",catalogId:1787448344},{id:"chorus-08",title:"把你揉碎捏成苹果",group:"chorus",order:8,duration:30,note:"",scene:0,file:"audio/chorus-08.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E6%8A%8A%E4%BD%A0%E6%8F%89%E7%A2%8E%E6%8D%8F%E6%88%90%E8%8B%B9%E6%9E%9C/1787447447?i=1787447720&uo=4",sha256:"7ff40141dbdfcc454fc6b18926d8a4f3963c92a7e7c3ddda93b1aae64d4ce0cc",catalogId:1787447720},{id:"chorus-09",title:"耗尽",group:"chorus",order:9,duration:30,note:"合唱版",scene:0,file:"audio/chorus-09.m4a",artist:"郭聪明 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%80%97%E5%B0%BD/1787447447?i=1787447729&uo=4",sha256:"5e73613958275394271494267a85be749b008db4cb42b6394554549a1efddb16",catalogId:1787447729},{id:"chorus-10",title:"聊表心意",group:"chorus",order:10,duration:30,note:"合唱版",scene:0,file:"audio/chorus-10.m4a",artist:"刘惜君 / 薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%81%8A%E8%A1%A8%E5%BF%83%E6%84%8F/1787447756?i=1787447980&uo=4",sha256:"61f8d6d90d9f7d3b576458f892ea32fb6bd4ef2719dab09bb1eaf90bce330f61",catalogId:1787447980},{id:"chorus-11",title:"霸王别姬",group:"chorus",order:11,duration:30,note:"合唱版",scene:0,file:"audio/chorus-11.m4a",artist:"薛之谦 / 张靓颖",album:"霸王别姬 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%9C%B8%E7%8E%8B%E5%88%AB%E5%A7%AC/1840717094?i=1840717096&uo=4",sha256:"1a1e1fdbb8def3b4f930eb5dc240cf06d8654c4160c326d6559d23cd0f6e54c4",catalogId:1840717096},{id:"chorus-13",title:"伏笔",group:"chorus",order:13,duration:30,note:"",scene:0,file:"audio/chorus-13.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E4%BC%8F%E7%AC%94/1789061342?i=1789061355&uo=4",sha256:"bd1f4311299890cf1c10d4101f94331591d372c8f1d187409b5212dd15ff53a5",catalogId:1789061355},{id:"chorus-14",title:"一半",group:"chorus",order:14,duration:30,note:"",scene:0,file:"audio/chorus-14.m4a",artist:"薛之谦",album:"一半 - Single",sourceUrl:"https://music.apple.com/us/album/%E4%B8%80%E5%8D%8A/1787447244?i=1787447245&uo=4",sha256:"6f8654c307354f56334a91ab2dc7034f5a3120263674aa630e8b7d55ebfc0269",catalogId:1787447245},{id:"chorus-15",title:"你过得好吗",group:"chorus",order:15,duration:30,note:"",scene:0,file:"audio/chorus-15.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E8%BF%87%E5%BE%97%E5%A5%BD%E5%90%97/1789061268?i=1789061543&uo=4",sha256:"ed48acc121f06d1d311d2d76b5d9905141fbe631b7e18d5e49bdf37a381d2fd4",catalogId:1789061543},{id:"chorus-16",title:"我终于成了别人的女人",group:"chorus",order:16,duration:30,note:"",scene:0,file:"audio/chorus-16.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%BB%88%E4%BA%8E%E6%88%90%E4%BA%86%E5%88%AB%E4%BA%BA%E7%9A%84%E5%A5%B3%E4%BA%BA/1789061342?i=1789061581&uo=4",sha256:"ca90a8d9148c46c762f3b37fd11548e89736caf4aa9dd69641d294c97bcea006",catalogId:1789061581},{id:"chorus-17",title:"我知道你都知道",group:"chorus",order:17,duration:30,note:"",scene:0,file:"audio/chorus-17.m4a",artist:"薛之谦",album:"几个薛之谦",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E7%9F%A5%E9%81%93%E4%BD%A0%E9%83%BD%E7%9F%A5%E9%81%93-%E8%83%9C%E5%A5%B3%E7%9A%84%E4%BB%A3%E4%BB%B7-%E7%94%B5%E8%A7%86%E5%89%A7%E6%8F%92%E6%9B%B2/1789061342?i=1789061343&uo=4",sha256:"67bf6028fb546195d58c81ba9c801976bab118753b874ef9f8680154892f93f8",catalogId:1789061343},{id:"chorus-18",title:"我好像在哪见过你",group:"chorus",order:18,duration:30,note:"",scene:0,file:"audio/chorus-18.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0/1787929894?i=1787929908&uo=4",sha256:"7d35051e688a69c433d387a5eb0d7a3bc5349b6813db2aeaac17f11cb9d83794",catalogId:1787929908},{id:"chorus-19",title:"我害怕",group:"chorus",order:19,duration:30,note:"",scene:0,file:"audio/chorus-19.m4a",artist:"薛之谦",album:"渡 The Crossing",sourceUrl:"https://music.apple.com/us/album/%E6%88%91%E5%AE%B3%E6%80%95/1787509715?i=1787509728&uo=4",sha256:"724841aedcff2182e4516c090a4f5163ab8b438552da82e338a22a2c5be35d9e",catalogId:1787509728},{id:"chorus-21",title:"有没有",group:"chorus",order:21,duration:30,note:"",scene:0,file:"audio/chorus-21.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E6%9C%89%E6%B2%A1%E6%9C%89/1788255148?i=1788255152&uo=4",sha256:"f5ac1d66fa19d38710c70085a03fcec661c16d7c0044a91704eb6909f43cc3a9",catalogId:1788255152},{id:"chorus-22",title:"这么久没见",group:"chorus",order:22,duration:30,note:"",scene:0,file:"audio/chorus-22.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E4%B9%88%E4%B9%85%E6%B2%A1%E8%A7%81/1787447756?i=1787447850&uo=4",sha256:"537a3dd0d97cc3211d6d78bf09cd3ba16f179b14e9c9cb05985f8abbe1ad4df4",catalogId:1787447850},{id:"chorus-23",title:"下雨了",group:"chorus",order:23,duration:30,note:"",scene:0,file:"audio/chorus-23.m4a",artist:"薛之谦",album:"初学者",sourceUrl:"https://music.apple.com/us/album/%E4%B8%8B%E9%9B%A8%E4%BA%86/1787929894?i=1787930588&uo=4",sha256:"d4e1b5a056f4971775bddacecfe079b0ee725ed5294ef770b81e209ed95aca68",catalogId:1787930588},{id:"chorus-24",title:"那是你离开了北京的生活",group:"chorus",order:24,duration:30,note:"",scene:0,file:"audio/chorus-24.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%82%A3%E6%98%AF%E4%BD%A0%E7%A6%BB%E5%BC%80%E4%BA%86%E5%8C%97%E4%BA%AC%E7%9A%84%E7%94%9F%E6%B4%BB/1787448185?i=1787448424&uo=4",sha256:"b08ae6f91d36b2f3a09d29bde89d0ed7ee646637df3681229e98e42a8d2681ac",catalogId:1787448424},{id:"chorus-25",title:"爱的期限",group:"chorus",order:25,duration:30,note:"",scene:0,file:"audio/chorus-25.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E7%9A%84%E6%9C%9F%E9%99%90/1789061268?i=1789061550&uo=4",sha256:"c1e3e0263ce70171e0be32dc31b36d879d3f3a34c08653c7b14d8a93e1c249f6",catalogId:1789061550},{id:"chorus-26",title:"笑场",group:"chorus",order:26,duration:30,note:"",scene:0,file:"audio/chorus-26.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E7%AC%91%E5%9C%BA/1787447756?i=1787447851&uo=4",sha256:"374c667623176d012f4edb8aaac827b9c0c916ce99d617e16f6bd534b8fde477",catalogId:1787447851},{id:"chorus-27",title:"苏黎世的从前",group:"chorus",order:27,duration:30,note:"",scene:0,file:"audio/chorus-27.m4a",artist:"薛之谦",album:"你过得好吗",sourceUrl:"https://music.apple.com/us/album/%E8%8B%8F%E9%BB%8E%E4%B8%96%E7%9A%84%E4%BB%8E%E5%89%8D/1789061268?i=1789061539&uo=4",sha256:"af9f928819c9ef8f4538513e4d7a712187f6b5b5b1a0113a28fef8588679c2da",catalogId:1789061539},{id:"chorus-28",title:"纸船",group:"chorus",order:28,duration:30,note:"合唱版",scene:0,file:"audio/chorus-28.m4a",artist:"郁可唯 / 薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E7%BA%B8%E8%88%B9/1787447447?i=1787447733&uo=4",sha256:"7ebfc2c3d7a33427d4322e34f52b2569365320073f60d1c4a13bcadc1575708c",catalogId:1787447733},{id:"chorus-29",title:"钗头凤",group:"chorus",order:29,duration:30,note:"",scene:0,file:"audio/chorus-29.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%92%97%E5%A4%B4%E5%87%A4/1789061389?i=1789061404&uo=4",sha256:"db14e502c640097ec30db1f2527aced9c1663fedd42397a5a44fe31135655963",catalogId:1789061404},{id:"chorus-30",title:"木偶人",group:"chorus",order:30,duration:30,note:"",scene:0,file:"audio/chorus-30.m4a",artist:"薛之谦",album:"尘",sourceUrl:"https://music.apple.com/us/album/%E6%9C%A8%E5%81%B6%E4%BA%BA/1787447756?i=1787447771&uo=4",sha256:"2b0e3d8a3534e0fc40307e8956bb1fa5dc1273b50656208ccf2cf6c6fae4cd9c",catalogId:1787447771},{id:"chorus-31",title:"肆无忌惮",group:"chorus",order:31,duration:30,note:"",scene:1,file:"audio/chorus-31.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E8%82%86%E6%97%A0%E5%BF%8C%E6%83%AE/1787448185?i=1787448196&uo=4",sha256:"ef431d8151d5feafc2c92043f1f6fc787e76783e760fcf25cd6c0b27975482fe",catalogId:1787448196},{id:"chorus-32",title:"租购",group:"chorus",order:32,duration:30,note:"",scene:0,file:"audio/chorus-32.m4a",artist:"薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E7%A7%9F%E8%B4%AD/1787930095?i=1787930229&uo=4",sha256:"c1523bc752104ae898eeb55bab277526a8f05f646ae8886b2d831b69c14f178f",catalogId:1787930229},{id:"chorus-33",title:"摩天大楼",group:"chorus",order:33,duration:30,note:"",scene:1,file:"audio/chorus-33.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E6%91%A9%E5%A4%A9%E5%A4%A7%E6%A5%BC/1787448185?i=1787448186&uo=4",sha256:"fc66429ac2b76dd3cb8756d8a07ffb11357e2dc356150b8fe107dc66f7019094",catalogId:1787448186},{id:"chorus-35",title:"顽疾",group:"chorus",order:35,duration:30,note:"",scene:1,file:"audio/chorus-35.m4a",artist:"薛之谦",album:"顽疾 - Single",sourceUrl:"https://music.apple.com/us/album/%E9%A1%BD%E7%96%BE/1891957475?i=1891957477&uo=4",sha256:"7fcce5732a9f85352a3f628a991f4e991f90b81e1459f7091464eb74af60f4c9",catalogId:1891957477},{id:"chorus-36",title:"男二号",group:"chorus",order:36,duration:30,note:"",scene:0,file:"audio/chorus-36.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E7%94%B7%E4%BA%8C%E5%8F%B7/1787448335?i=1787448342&uo=4",sha256:"f4cb3ae6ee037da9eef2379be143da350c239f345dc67a9a17ae7525d6273628",catalogId:1787448342},{id:"chorus-37",title:"迟迟",group:"chorus",order:37,duration:30,note:"",scene:0,file:"audio/chorus-37.m4a",artist:"薛之谦",album:"天外来物",sourceUrl:"https://music.apple.com/us/album/%E8%BF%9F%E8%BF%9F/1787447447?i=1787447719&uo=4",sha256:"861b11ef7826f575905cfbe4b3e37402ad7e30f553293eb09ed4bf9e41157361",catalogId:1787447719},{id:"chorus-38",title:"爱我的人谢谢你",group:"chorus",order:38,duration:30,note:"",scene:0,file:"audio/chorus-38.m4a",artist:"薛之谦",album:"未完成的歌",sourceUrl:"https://music.apple.com/us/album/%E7%88%B1%E6%88%91%E7%9A%84%E4%BA%BA-%E8%B0%A2%E8%B0%A2%E4%BD%A0/1787930075?i=1787930459&uo=4",sha256:"43d7cd54c23360d385e9ef718303a450d96d79edb3ecf8659aabcbef698ffd56",catalogId:1787930459},{id:"chorus-39",title:"变废为宝",group:"chorus",order:39,duration:30,note:"",scene:2,file:"audio/chorus-39.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%8F%98%E5%BA%9F%E4%B8%BA%E5%AE%9D/1787448335?i=1787448339&uo=4",sha256:"b141ba4078be28cded2ba92f21abad3c72fc77a6159b9e852012a3c543d8dab0",catalogId:1787448339},{id:"chorus-40",title:"等我回家",group:"chorus",order:40,duration:30,note:"",scene:0,file:"audio/chorus-40.m4a",artist:"薛之谦",album:"意外",sourceUrl:"https://music.apple.com/us/album/%E7%AD%89%E6%88%91%E5%9B%9E%E5%AE%B6/1788255148?i=1788255154&uo=4",sha256:"0f79185ae72049a8bd5042108c8e92bd81a5f1d1bd89faca15a163679d405cf9",catalogId:1788255154},{id:"chorus-41",title:"守候",group:"chorus",order:41,duration:30,note:"",scene:0,file:"audio/chorus-41.m4a",artist:"薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E5%AE%88%E5%80%99/1787448335?i=1787448343&uo=4",sha256:"5d6b920a89af921ea27ad7ac79ce7bb5abab9e3d6a7d26cfb41e70d41f587c64",catalogId:1787448343},{id:"chorus-42",title:"醒来",group:"chorus",order:42,duration:30,note:"现场版",scene:0,file:"audio/chorus-42.m4a",artist:"薛之谦",album:"怪咖",sourceUrl:"https://music.apple.com/us/album/%E9%86%92%E6%9D%A5-live/1787448185?i=1787448419&uo=4",sha256:"514e0825f1aa9de570c570978d01231349cf59894b876ef51d90b7ce19da6b7e",catalogId:1787448419},{id:"chorus-43",title:"这样一来我算什么",group:"chorus",order:43,duration:30,note:"合唱现场版 · 合唱版",scene:0,file:"audio/chorus-43.m4a",artist:"薛之谦 / 陈卓璇",album:"音乐缘计划2 第4期 (Live)",sourceUrl:"https://music.apple.com/us/album/%E8%BF%99%E6%A0%B7%E4%B8%80%E6%9D%A5%E6%88%91%E7%AE%97%E4%BB%80%E4%B9%88-live/1853200539?i=1853200873&uo=4",sha256:"b99f67b965d3c937271d3989e43cf932d5bce044461c624f270f79e914e691e9",catalogId:1853200873},{id:"chorus-44",title:"黄色枫叶",group:"chorus",order:44,duration:30,note:"",scene:0,file:"audio/chorus-44.m4a",artist:"薛之谦",album:"薛之谦",sourceUrl:"https://music.apple.com/us/album/%E9%BB%84%E8%89%B2%E6%9E%AB%E5%8F%B6/1789061389?i=1789061401&uo=4",sha256:"3f2d5f242b6c933cf15492d9318ed01ad4560c934c06978dacb020268bc4885d",catalogId:1789061401},{id:"chorus-45",title:"你不是一个人",group:"chorus",order:45,duration:30,note:"合唱版",scene:0,file:"audio/chorus-45.m4a",artist:"张信哲 / 薛之谦",album:"无数",sourceUrl:"https://music.apple.com/us/album/%E4%BD%A0%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA/1787448335?i=1787448340&uo=4",sha256:"4a536b85f237d1355c57e9a2c1794536d30f204e69dfeaca3ee5dff9062a2790",catalogId:1787448340},{id:"chorus-46",title:"银河少年",group:"chorus",order:46,duration:30,note:"合唱版",scene:2,file:"audio/chorus-46.m4a",artist:"王啸坤 / 薛之谦",album:"守村人",sourceUrl:"https://music.apple.com/us/album/%E9%93%B6%E6%B2%B3%E5%B0%91%E5%B9%B4/1787930095?i=1787930097&uo=4",sha256:"38d74aa872f0719b88be36478798faa3b8146589bd0e11c14a2665b7d6775172",catalogId:1787930097}],os="concert-02",fr=[os,...bn.filter(n=>n.id!==os).map(n=>n.id)];function Ks(n,e,{mode:t="sequence",direction:i=1,random:r=Math.random}={}){if(!n.length)return null;const s=n.indexOf(e);if(t==="repeat"&&i>0)return s>=0?e:n[0];if(t==="shuffle"&&i>0&&n.length>1){const a=n.filter(o=>o!==e);return a[Math.min(a.length-1,Math.max(0,Math.floor(r()*a.length)))]}return n[((s<0?0:s)+i+n.length)%n.length]}let vo=0;const wn=fr.map((n,e)=>{const t=bn.find(r=>r.id===n),i={...t,index:e,start:vo,end:vo+t.duration};return vo=i.end,i}),as=vo,Ou=[{id:"opening",label:"野心开场",first:0,count:1},{id:"concert",label:"演出曲目",first:1,count:wn.filter(n=>n.group==="concert").length-1},{id:"chorus",label:"合唱时刻",first:wn.findIndex(n=>n.group==="chorus"),count:wn.filter(n=>n.group==="chorus").length}].map(n=>({...n,start:wn[n.first].start}));function Bu(n){const e=Math.min(as,Math.max(0,Number(n)||0)),t=wn.find(i=>e<i.end)||wn[wn.length-1];return{track:t,offset:Math.min(t.duration-.001,Math.max(0,e-t.start))}}function Yv(n,e=0){const t=wn.find(s=>s.id===n)||wn[0],i=Math.min(t.duration,Math.max(0,Number(e)||0)),r=t.index===0?"opening":t.group;return{track:t,section:r,position:t.start+i,total:as}}const zu=1024*1024;function $v({warmup:n,fetchImpl:e=globalThis.fetch?.bind(globalThis),urlAPI:t=URL,baseURI:i=document.baseURI,environment:r=()=>({hidden:document.hidden,online:navigator.onLine,connection:navigator.connection}),maxEntries:s=3,maxBytes:a=4*zu,maxTransferBytes:o=16*zu}={}){const l=new Map,c=new Map,u=new Set,h=new Map;let d=null,f=null,g=null,x=0,m=0,p=0,A=!1,E=!1;const _=L=>new URL(L.file,i).href,C=({budget:L=!0}={})=>{const{hidden:B,online:z,connection:V}=r();return A&&!E&&!B&&z!==!1&&!V?.saveData&&!["slow-2g","2g","3g"].includes(V?.effectiveType)&&!(V?.downlink>0&&V.downlink<1.5)&&(!L||m<o)};function T(L){try{t.revokeObjectURL(L)}catch{}}function U(L){const B=l.get(L);B&&(l.delete(L),x-=B.bytes,B.url===d?u.add(B.url):T(B.url))}function N(L){for(;l.size>=s||x+L>a;){const B=[...l.entries()].filter(([z,V])=>V.url!==d&&z!==g).sort((z,V)=>z[1].used-V[1].used)[0];if(!B)return!1;U(B[0])}return!0}function S(L,B){B.cancelled=!0,B.controller?.abort(),n?.cancel?.(B.taskKey),c.delete(L)}function b(){for(const[L,B]of c)S(L,B)}async function R(L,B,z){const V=new AbortController,H=(B.generation||0)+1;B.controller=V,B.generation=H;const O=()=>V.abort();z?.addEventListener("abort",O,{once:!0}),z?.aborted&&O();let y;try{if(B.cancelled||V.signal.aborted||!C()||L===f)return!1;const D=await e(L,{signal:V.signal,cache:"default",credentials:"same-origin"});if(!D.ok||D.status===206)throw new Error("Incomplete audio response");const q=D.headers.get("content-type")||"";if(q&&!/^(audio\/|video\/mp4|application\/octet-stream)/i.test(q))throw new Error("Invalid audio response");const K=Math.min(a,o-m);if(Number(D.headers.get("content-length"))>K)throw new Error("Audio exceeds preparation budget");if(!D.body?.getReader)throw new Error("Streaming preparation unavailable");y=D.body.getReader();const ee=[];let xe=0;for(;;){if(B.cancelled||V.signal.aborted||H!==B.generation||!C({budget:!1}))throw new Error("Audio preparation cancelled");const{value:fe,done:Q}=await y.read();if(Q)break;if(m+=fe.byteLength,xe+=fe.byteLength,xe>K||m>o)throw new Error("Audio exceeds preparation budget");ee.push(fe)}if(!xe||B.cancelled||V.signal.aborted||H!==B.generation||!C({budget:!1})||L===f||c.get(L)!==B||!N(xe))return!1;const De=t.createObjectURL(new Blob(ee,{type:q||"audio/mp4"}));return l.set(L,{url:De,bytes:xe,used:++p}),x+=xe,!0}finally{z?.removeEventListener("abort",O),V.signal.aborted||V.abort(),B.controller===V&&(B.controller=null);try{await y?.cancel()}catch{}}}return{start(){A=!0},canPrepare:C,warm(L,{priority:B="next"}={}){if(!L||!n?.enqueue||!e||!t.createObjectURL||!C())return Promise.resolve(!1);const z=_(L),V=l.get(z);if(V)return V.used=++p,Promise.resolve(!0);if(z===f||(h.get(z)||0)>Date.now())return Promise.resolve(!1);if(c.has(z))return c.get(z).promise;for(const[O,y]of c)O!==g&&S(O,y);const H={controller:null,cancelled:!1,taskKey:`audio:${z}`};c.set(z,H);try{H.promise=Promise.resolve(n.enqueue({key:H.taskKey,priority:B,kind:"audio",cacheResult:!1,run:O=>R(z,H,O)})).then(O=>O===!0).catch(O=>(n.forget?.(H.taskKey),!H.cancelled&&!["AbortError","QueueFullError"].includes(O?.name)&&h.set(z,Date.now()+3e4),!1)).finally(()=>{c.get(z)===H&&c.delete(z)})}catch{c.delete(z),H.promise=Promise.resolve(!1)}return H.promise},get(L){const B=l.get(_(L));return B?(B.used=++p,B.url):null},setCurrent(L){f=L?_(L):null,b()},setNext(L){g=L?_(L):null},setActive(L){d=L;for(const B of u)B!==d&&(T(B),u.delete(B))},forget(L){U(_(L))},cancelPending:b,snapshot(){return{entries:l.size,bytes:x,transferred:m,pending:c.size}},dispose(){E=!0,b(),d=null;for(const L of l.keys())U(L);for(const L of u)T(L);u.clear()}}}const Ee=n=>document.querySelector(n),jt=n=>`${Math.floor((Number.isFinite(n)?n:0)/60).toString().padStart(2,"0")}:${Math.floor((Number.isFinite(n)?n:0)%60).toString().padStart(2,"0")}`,Zs=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function jv({getSceneState:n,requestScenePlay:e,onPause:t,onScene:i,notify:r,outputMuted:s=!1,warmup:a=null}){const o=document.createElement("audio");o.id="concert-audio",o.preload="none",o.setAttribute("playsinline",""),o.hidden=!0,document.body.append(o);let l=bn.find(M=>M.id===os),c=null,u=null,h=null,d=null,f=null,g=!1,x=.45,m="sequence",p=!0,A="concert",E="",_=0,C=!1,T=!1,U=0,N=!1,S=!1,b="idle",R=null,L=!1,B=null;const z=a?$v({warmup:a}):null,V=M=>a?.setBusy?.("audio-playback",M),H=[],O=new Uint8Array(128);try{const M=Number(localStorage.getItem("beast.music.volume.v1"));localStorage.getItem("beast.music.volume.v1")!==null&&Number.isFinite(M)&&(x=Math.min(1,Math.max(0,M)))}catch{}const y=Ee("#music-dialog");Ee("#music-info span").textContent=bn.length;for(const M of document.querySelectorAll("[data-library-filter]"))M.querySelector("span").textContent=bn.filter(v=>M.dataset.libraryFilter==="all"||v.group===M.dataset.libraryFilter).length;const D={sequence:"顺序播放",repeat:"单曲循环",shuffle:"随机播放"},q=()=>!n().playing||n().compare||document.hidden,K=document.createElement("button");K.id="audio-recover",K.className="audio-recover",K.hidden=!0,document.querySelector("#music-player").append(K);const ee=()=>{clearTimeout(R),R=null};function xe(){let M;return m==="shuffle"?(B?.from!==l.id&&(B={from:l.id,id:Ks(fr,l.id,{mode:m})}),M=B.id):M=Ks(fr,l.id,{mode:m}),bn.find(v=>v.id===M)}function De(){if(!g||b!=="playing"||q()||o.paused||o.readyState<3)return!1;const M=o.buffered;if(!M)return o.readyState>=4;for(let v=0;v<M.length;v++)if(M.start(v)<=o.currentTime&&M.end(v)>o.currentTime){const F=Number.isFinite(o.duration)?o.duration-o.currentTime:8;return M.end(v)-o.currentTime>=Math.min(8,F)-.15}return!1}function fe(){if(!L||!z||!De())return;const M=xe();z.setNext(M),M?.id!==l.id&&z.warm(M)}function Q(M){if(!L||!De())return;const v=bn.find(F=>F.id===M);v?.id!==l.id&&z?.warm(v)}function ie(M=_){R===null&&(R=setTimeout(()=>{M!==_||!g||q()||(b="slow",V(!1),Xe())},12e3))}function he(){o.muted=s||x===0;try{o.volume=s?0:x}catch{}}he(),Ee("#show-sections").innerHTML=Ou.map((M,v)=>`<button data-show-section="${M.id}" aria-label="跳到${M.label}"><span>0${v+1}</span>${M.label}<small>${M.count}段</small></button>`).join(""),Ee("#show-ticks").innerHTML=wn.slice(1).map(M=>`<i style="left:${M.start/as*100}%"></i>`).join(""),Ee("#timeline").max=as;function be(){return n().compare?(r("位置比较时保持同一演出时刻，请先结束比较"),!0):!1}function Te(M){const v=Bu(M);Ee("#show-position").textContent=`定位到《${v.track.title}》 ${jt(v.offset)}`,Ee("#time-label").textContent=`${jt(Number(M))} / ${jt(as)}`}function Ye(M){if(be())return;N=!1;const{track:v,offset:F}=Bu(M);return Me(v.id,{autoplay:g,offset:F})}Ee("#timeline").oninput=M=>{be()||(N=!0,Te(M.target.value))},Ee("#timeline").onchange=M=>Ye(M.target.value),Ee("#timeline").addEventListener("pointercancel",()=>{N=!1,I()}),document.querySelectorAll("[data-show-section]").forEach(M=>M.onclick=()=>Ye(Ou.find(v=>v.id===M.dataset.showSection).start));function Xe(){const M=g&&!o.paused&&!q()&&b==="playing",v=x===0||o.muted&&!s,F=C?"音频加载失败 · 点击重试":b==="blocked"?"声音未开启 · 点击开启声音":b==="slow"?"音频加载较慢 · 可重试或换一首":b==="interrupted"?"播放已中断 · 点击继续":g&&!q()&&b==="loading"?"正在加载声音…":M&&v?"已静音 · 点击开启声音":`${l.artist} · ${M?"正在播放":g&&q()?"随演出暂停":"30秒片段"}`;if(Ee("#sound").textContent=M?"Ⅱ":"▶",Ee("#sound").setAttribute("aria-label",`${M?"暂停":"播放"}《${l.title}》`),Ee("#track-title").textContent=l.title,Ee("#track-subtitle").textContent=F,Ee("#track-art").classList.toggle("spinning",M),Ee("#music-player").classList.toggle("is-playing",M),Ee("#music-player").classList.toggle("is-pink",l.scene===3),Ee("#music-player").dataset.trackId=l.id,Ee("#music-player").dataset.playback=C?"error":M?"playing":g&&!q()?b:"paused",K.hidden=!S||s||n().compare||!(v||C||["blocked","slow","interrupted"].includes(b)),K.textContent=C||b==="slow"?"重试声音":b==="interrupted"?"继续播放":"开启声音",K.setAttribute("aria-label",F+"，"+K.textContent),Ee("#music-player").dataset.volume=String(x),Ee("#music-mode").textContent=D[m],Ee("#music-mode").setAttribute("aria-label",`播放模式：${D[m]}，点击切换`),Ee("#music-follow").setAttribute("aria-checked",String(p)),Ee("#music-follow").textContent=`舞台随曲 · ${p?"开":"关"}`,Ee("#library-current").textContent=l.title,Ee("#library-status").textContent=C||v||["blocked","slow","interrupted","loading"].includes(b)?F:`${M?"正在播放":"当前选择"} · ${l.artist}${l.note?" · "+l.note:""}`,Ee("#track-source").href=l.sourceUrl,Ee("#library-play").textContent=M?"暂停播放":"播放这首",Ee("#play").textContent=M?"Ⅱ":"▶",Ee("#play").setAttribute("aria-label",`${M?"暂停":"播放"}演出`),Ee("#chapter-name").textContent=l.title,Ee("#show-status").textContent=`${C?"加载失败":M?"正在上演":S?"演出暂停":"待播放"} · ${String(fr.indexOf(l.id)+1).padStart(2,"0")} / ${bn.length}`,document.documentElement.dataset.audioState=M?v?"muted":"playing":b,Ee("#volume").value=Math.round(x*100),Ee("#library-volume").value=Math.round(x*100),document.querySelectorAll("[data-track]").forEach($=>{const te=$.dataset.track===l.id;$.classList.toggle("selected",te),$.setAttribute("aria-pressed",String(te)),$.querySelector(".track-state").textContent=te?M?"播放中":"已选择":"播放"}),"mediaSession"in navigator)try{navigator.mediaSession.playbackState=M?"playing":"paused"}catch{}I()}function I(){const M=Number.isFinite(o.duration)?o.duration:l.duration,v=c===l.id&&Number.isFinite(o.duration)&&!U?o.currentTime||0:U;Ee("#audio-time").textContent=`本曲 ${jt(v)} / ${jt(M)}`,Ee("#library-time").textContent=`${jt(v)} / ${jt(M)}`;const F=Yv(l.id,v);Ee("#timeline").disabled=n().compare,N||(Ee("#timeline").value=F.position,Ee("#timeline").setAttribute("aria-valuetext",`第${F.track.index+1}首，${l.title}，本曲${jt(v)}，歌单${jt(F.position)}，共${jt(F.total)}`),Ee("#time-label").textContent=`${jt(F.position)} / ${jt(F.total)}`,Ee("#show-position").textContent=`第${String(F.track.index+1).padStart(2,"0")} / ${bn.length}首 · ${F.section==="opening"?"野心开场":l.group==="concert"?"演出曲目":"合唱曲目"}`),Ee("#show-flow").style.setProperty("--show-progress",`${F.position/F.total*100}%`),Ee("#show-next").textContent=m==="sequence"?`下一首 · ${bn.find($=>$.id===Ks(fr,l.id)).title}`:`${D[m]} · 按歌单定位`,document.querySelectorAll("[data-show-section]").forEach($=>{const te=$.dataset.showSection===F.section;$.classList.toggle("active",te),$.setAttribute("aria-pressed",String(te)),$.disabled=n().compare});for(const $ of["audio-progress","library-progress"]){const te=Ee("#"+$);te.max=M,T||(te.value=v),te.disabled=c!==l.id||!Number.isFinite(o.duration),te.setAttribute("aria-valuetext",`${jt(v)}，共${jt(M)}`)}if("mediaSession"in navigator&&navigator.mediaSession.setPositionState&&Number.isFinite(o.duration)&&o.duration>0)try{navigator.mediaSession.setPositionState({duration:o.duration,playbackRate:1,position:Math.min(o.duration,v)})}catch{}}function ut(){if(typeof o.captureStream!="function")return;const M=window.AudioContext||window.webkitAudioContext;if(M)try{(!u||u.state==="closed")&&(u=new M),u.state!=="running"&&Promise.resolve(u.resume()).catch(()=>{})}catch{}}function ke(){if(!(!u||u.state!=="running"))try{if(d?.disconnect(),f?.getTracks().forEach(M=>M.stop()),f=o.captureStream(),!f.getAudioTracks().length)return;h||(h=u.createAnalyser()),h.fftSize=256,d=u.createMediaStreamSource(f),d.connect(h)}catch{h=null}}function Ne({retry:M=!1}={}){c===l.id&&!M||(M&&!U&&Number.isFinite(o.currentTime)&&!o.ended&&(U=o.currentTime),o.pause(),o.preload="metadata",o.src=!M&&z?.get(l)||new URL(l.file,document.baseURI).href,z?.setActive(o.src),M&&z?.forget(l),c=l.id,C=!1,o.load(),"mediaSession"in navigator&&window.MediaMetadata&&(navigator.mediaSession.metadata=new MediaMetadata({title:l.title,artist:l.artist,album:l.album})))}async function _e({gesture:M=!0}={}){if(M&&e(),q())return;const v=++_;ee();const F=C||b==="slow";z?.setCurrent(l),V(!0),g=!0,S=!0,b="loading",ut(),Ne({retry:F}),he(),C=!1,o.ended&&(o.currentTime=0),ie(v),Xe();try{if(await o.play(),v!==_)return;if(ee(),q()){V(!1),o.pause(),Xe();return}b=o.paused?"interrupted":"playing",V(!1),ke(),Xe(),fe()}catch($){if(v!==_)return;V(!1),ee(),g=!1,o.pause(),t(),C=!["NotAllowedError","AbortError"].includes($?.name),b=$?.name==="NotAllowedError"?"blocked":C?"error":"interrupted",Xe(),r(b==="blocked"?"点一下「开启声音」，继续听歌":b==="interrupted"?"播放已中断，点一下继续播放":`《${l.title}》暂时无法播放，可重试或切换下一首`)}}function it(){_++,ee(),g=!1,b="paused",V(!1),t(),o.pause(),Xe()}function Me(M,{autoplay:v=!0,applyTheme:F=!0,offset:$=0}={}){const te=bn.find(Ae=>Ae.id===M);if(!te)return;_++,ee(),o.pause();const Z=l.id!==M;if(l=te,z?.setCurrent(l),Z&&(B=null),Z&&(c=null,C=!1,b="idle"),U=Math.min(te.duration-.001,Math.max(0,$)),c===l.id&&Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration-.001,U),U=0),(Z||!H.length)&&H.push(M),p&&F&&i(te.scene),Xe(),v)return _e();g=!1,b="paused",V(!1),t(),$>0&&Ne(),Xe()}function Oe(M=1,v=!1){let F;return M<0&&m==="shuffle"&&H.length>1?(H.pop(),F=H.pop()):M>0&&m==="shuffle"?F=xe().id:F=Ks(fr,l.id,{mode:v?m:m==="repeat"?"sequence":m,direction:M}),F===l.id?(o.currentTime=0,g||v?_e({gesture:!v}):I()):Me(F,{autoplay:g||v})}function vt(){const M=E.trim().toLocaleLowerCase(),v=wn.filter(F=>(A==="all"||F.group===A)&&`${F.title} ${F.note}`.toLocaleLowerCase().includes(M));Ee("#track-count").textContent=`${v.length} 段`,Ee("#track-list").innerHTML=v.length?v.map(F=>`<button class="track-row" data-track="${F.id}" aria-label="播放${Zs(F.title)}${F.note?"，"+Zs(F.note):""}" aria-pressed="false"><span class="track-number">${String(F.index+1).padStart(2,"0")}</span><span class="track-name"><strong>${Zs(F.title)}${F.id===os?"<i>入场曲</i>":""}${F.scene===3?'<i class="pink-label">粉钻舞台</i>':""}</strong><small>${Zs(F.artist+(F.note?" · "+F.note:""))}</small></span><span class="track-duration">00:30</span><span class="track-state">播放</span></button>`).join(""):'<div class="library-empty">没有找到这首歌<br><small>试试歌名中的一两个字，或切换到「全部」。</small></div>',Ee("#track-list").querySelectorAll("[data-track]").forEach(F=>{F.onclick=()=>Me(F.dataset.track),F.onpointerover=F.onfocus=()=>Q(F.dataset.track)}),Xe()}function ft(M){const v=Number(M);if(Number.isFinite(v)){x=Math.min(1,Math.max(0,v/100)),he();try{localStorage.setItem("beast.music.volume.v1",String(x))}catch{}Xe()}}Ee("#sound").onclick=()=>g&&!o.paused?it():_e(),K.onclick=()=>(x===0&&ft(45),o.muted=s,_e()),Ee("#library-play").onclick=Ee("#sound").onclick,Ee("#music-next").onclick=()=>Oe(),Ee("#music-prev").onclick=()=>Oe(-1),Ee("#library-next").onclick=()=>Oe(),Ee("#library-prev").onclick=()=>Oe(-1),Ee("#music-mode").onclick=()=>{m={sequence:"repeat",repeat:"shuffle",shuffle:"sequence"}[m],B=null,z?.cancelPending(),Xe(),fe()},Ee("#music-follow").onclick=()=>{p=!p,p&&i(l.scene),Xe()},Ee("#volume").oninput=M=>ft(M.target.value),Ee("#library-volume").oninput=M=>ft(M.target.value);for(const M of["audio-progress","library-progress"]){const v=Ee("#"+M);v.oninput=F=>{Number.isFinite(o.duration)&&(T=!0,o.currentTime=Math.min(o.duration,Math.max(0,Number(F.target.value))),T=!1,I())}}for(const M of["music-info","track-open","show-queue"])Ee("#"+M).onclick=()=>{y.showModal(),vt()};document.querySelectorAll("[data-stage-theme]").forEach(M=>M.onclick=()=>{be()||(p=!1,i(Number(M.dataset.stageTheme)),Xe())}),Ee("#close-music").onclick=()=>y.close(),y.addEventListener("click",M=>{if(M.target!==y)return;const v=y.getBoundingClientRect();(M.clientX<v.left||M.clientX>v.right||M.clientY<v.top||M.clientY>v.bottom)&&y.close()}),Ee("#track-search").oninput=M=>{E=M.target.value,vt()},document.querySelectorAll("[data-library-filter]").forEach(M=>M.onclick=()=>{A=M.dataset.libraryFilter,document.querySelectorAll("[data-library-filter]").forEach(v=>{v.classList.toggle("active",v===M),v.setAttribute("aria-pressed",String(v===M))}),vt()}),o.addEventListener("timeupdate",()=>{I(),fe()}),o.addEventListener("progress",fe),o.addEventListener("loadedmetadata",()=>{U>0&&(o.currentTime=Math.min(o.duration-.001,U),U=0),I()}),o.addEventListener("playing",()=>{if(!g||q()){o.pause();return}o.paused||(ee(),b="playing",V(!1),ke(),Xe(),fe())}),o.addEventListener("pause",()=>{o.paused&&g&&!q()&&!o.ended&&b==="playing"&&(b="interrupted",V(!1)),Xe()});for(const M of["waiting","stalled"])o.addEventListener(M,()=>{!g||q()||o.ended||b==="slow"||o.readyState>=3&&!o.paused||(z?.cancelPending(),V(!0),b="loading",ie(),Xe())});if(o.addEventListener("volumechange",Xe),o.addEventListener("ended",()=>{g&&!q()?Oe(1,!0):Xe()}),o.addEventListener("error",()=>{o.error&&(_++,ee(),V(!1),C=!0,b="error",g=!1,o.pause(),t(),Xe())}),window.addEventListener?.("offline",()=>z?.cancelPending()),window.addEventListener?.("online",fe),navigator.connection?.addEventListener?.("change",()=>{z?.canPrepare()?fe():z?.cancelPending()}),"mediaSession"in navigator)for(const[M,v]of Object.entries({play:()=>_e(),pause:it,previoustrack:()=>Oe(-1),nexttrack:()=>Oe(),seekto:F=>{Number.isFinite(o.duration)&&(o.currentTime=Math.min(o.duration,Math.max(0,F.seekTime||0)),I())}}))try{navigator.mediaSession.setActionHandler(M,v)}catch{}return vt(),{prepare(){L=!0,z?.start(),fe()},readiness(){return{prepared:L,...z?.snapshot()}},enter(){Me(os)},toggle(){g&&!o.paused&&!q()?it():_e()},refresh(){Xe()},position(){return c===l.id&&Number.isFinite(o.duration)&&o.duration>0?Math.min(1,o.currentTime/o.duration):U/l.duration},pauseForScene(){_++,ee(),V(!1),z?.cancelPending(),o.pause(),Xe()},resumeForScene(){g&&!q()?_e({gesture:!1}):Xe()},setVisibility(M){if(M){_++,ee(),V(!1),z?.cancelPending(),o.pause();try{u?.suspend()?.catch(()=>{})}catch{}Xe()}else g&&!q()&&_e({gesture:!1})},energy(){if(!h||o.paused||!g||q())return 0;h.getByteFrequencyData(O);let M=0;for(let v=0;v<12;v++)M+=O[v];return M/3060}}}const Bo=""+new URL("beast-eye-CPigXoud.jpg",import.meta.url).href,zo=""+new URL("beast-awakening-DHaJ8PAb.jpg",import.meta.url).href,sc=""+new URL("visual-finale-DU1vaxcB.jpg",import.meta.url).href,ko=""+new URL("guangzhou-poster-Bo6X5D2d.jpg",import.meta.url).href,ys=""+new URL("guangzhou-performer-BYLipXbJ.jpg",import.meta.url).href,oc=""+new URL("guangzhou-stage-B4ECLh6R.jpg",import.meta.url).href;function Kv(n=48){if(!Number.isInteger(n)||n<0)throw new RangeError("Fixture count must be a non-negative integer");return Array.from({length:n},(e,t)=>{const i=t%3,r=Math.floor(t/3),s=Math.ceil((n-i)/3),a=r/s*Math.PI*2;return{phase:a,tier:i,fixtureIndex:t,origin:new P(Math.cos(a)*(i===0?43:24),[3,32,29.2][i],Math.sin(a)*(i===0?24:12))}})}function Zv(n,e,t,{count:i=48}={}){const r=Kv(i),s=new qn(e,t,i);s.instanceMatrix.setUsage(wf),s.frustumCulled=!1;const a=new qn(new bs(.27,6,6),new Nr({color:"#b9ddff"}),i);a.frustumCulled=!1,n.add(s,a);const o=new et,l=new cn,c=new P,u=new P(0,-1,0),h=new P(3.6,85,3.6),d=new P(1,1,1),f=new cn;let g=r,x=0,m=0;function p(_,C){g.forEach((T,U)=>{const N=T.fixtureIndex,S=T.phase+Math.sin(_*.2+N)*.4,b=C===0?12:C===1?40:70;c.set(Math.cos(S)*b+Math.sin(_*.45+N)*15,C>=2?72:C===0?0:7+Math.sin(_*.25+N)*14,Math.sin(S)*b*.65).sub(T.origin).normalize(),l.setFromUnitVectors(u,c),o.compose(T.origin,l,h),s.setMatrixAt(U,o)}),s.instanceMatrix.needsUpdate=!0}function A(_){const C=Number(_),T=Number.isFinite(C)?Math.max(1,Math.round(C)):1,U=new Set;for(let N=0;N<3;N++){const S=r.filter(R=>R.tier===N),b=Math.ceil(S.length/T);for(let R=0;R<b;R++)U.add(S[Math.floor(R*S.length/b)])}g=r.filter(N=>U.has(N)),g.forEach((N,S)=>{o.compose(N.origin,f,d),a.setMatrixAt(S,o)}),s.count=a.count=g.length,a.instanceMatrix.needsUpdate=!0,p(x,m)}function E(_,C,T,U,N){const S=1-Math.exp(-2.45*N);t.uniforms.color.value.lerp(T,S),t.uniforms.power.value=U,t.uniforms.time.value=_,a.material.color.lerp(T,S),x=_,m=C,p(_,C)}return A(1),{shafts:s,bulbs:a,lights:r,setStep:A,update:E}}const wr=Object.freeze({stageEnvelope:Object.freeze({width:93,depth:53,height:36,source:"https://www.sina.cn/news/detail/5265883729757226.html",scope:"广州站官方公告的舞台整体包络，非台面尺寸"}),flippingScreen:Object.freeze({width:64,height:5,source:"https://kdesignaward.com/exhibition/490265",scope:"巡演设计方案，广州站安装坐标未确认"}),historicalPitch:Object.freeze({width:105,depth:69,source:"https://www.csva.org.cn/history/detail-1670.html",scope:"2019年场馆介绍，非2026现场测绘"}),assumptions:Object.freeze({platformHeight:1.8,screenBottom:14,tierSlope:.46,seatPitch:.82,scope:"用于主题体验的估算几何，不代表施工图或票务座位坐标"})}),Jh=Object.freeze([[-21,40],[21,40],[-21,-40],[21,-40],[58,0],[-58,0]].map(Object.freeze)),Qh=Object.freeze(["A1","A2","B1","B2","C","D"]),gs=Object.freeze(Jh.map(([n,e],t)=>Object.freeze({x:n,z:e,rows:30,seats:t<4?56:26,seatPitch:.63,rowPitch:.82,longSide:t<4}))),ci=28,je=Object.freeze({rows:50,lowerRows:15,tierDepth:22,sectors:21,lowerRowPitch:1.4,radialScale:.73,lowerRadiusX:106,lowerRadiusZ:79,lowerBaseHeight:2,lowerSlope:.46,upperRadiusX:131,upperRadiusZ:104,upperBaseHeight:18,upperSlope:.48,seatDepth:.43,innerRailRadial:-.8,outerRailRadial:22.5,scope:"看台分层和50排可选范围为模型估算，不代表实际票务排数或座位测绘"});function ui(n,e,t,i){if(!Number.isInteger(n)||n<e||n>t)throw new RangeError(`Invalid ${i}`)}function ac(n){ui(n,0,je.sectors+gs.length-1,"zone");const e=gs[n-21];return{rows:e?.rows??je.rows,seats:e?.seats??ci}}function ed(n,e,t){ui(n,0,gs.length-1,"floor bank");const i=gs[n];ui(e,1,i.rows,"floor row"),ui(t,1,i.seats,"floor seat");const r=(t-(i.seats+1)/2)*i.seatPitch,s=(e-1)*i.rowPitch;return[i.longSide?i.x+r:i.x+Math.sign(i.x)*s,.4,i.longSide?i.z+Math.sign(i.z)*s:i.z+r]}function td(n,e){return ui(n,0,je.sectors-1,"tier zone"),ui(e,1,ci,"tier seat"),Math.PI/2-n/je.sectors*Math.PI*2+((e-.5)/ci-.5)*Math.PI*2/je.sectors*.89}function nd(n,e,t=!1){if(!Number.isFinite(n)||!Number.isFinite(e)||typeof t!="boolean")throw new TypeError("Tier surface coordinates must be finite numbers and a boolean layer");if(e<je.innerRailRadial||e>je.outerRailRadial)throw new RangeError("Tier radial coordinate exceeds the modeled surface");const i=t?je.upperRadiusX:je.lowerRadiusX,r=t?je.upperRadiusZ:je.lowerRadiusZ,s=t?je.upperBaseHeight:je.lowerBaseHeight,a=t?je.upperSlope:je.lowerSlope;return[Math.cos(n)*(i+e*je.radialScale),s+e*a,Math.sin(n)*(r+e*je.radialScale)]}function id(n){ui(n,1,je.rows,"tier row");const e=n>je.lowerRows,t=e?(n-je.lowerRows-1)/(je.rows-je.lowerRows-1)*je.tierDepth:(n-1)*je.lowerRowPitch;return{upper:e,radial:t}}function lc(n,e,t){const{upper:i,radial:r}=id(e);return nd(td(n,t),r,i)}function Jv(n=6400){const e=je.rows*ci,t=je.sectors*e;if(ui(n,0,t,"spectator count"),n===0)return[];const i=Uint32Array.from({length:t},(o,l)=>l),r=[];let s=326662325;const a=()=>{s=s+1831565813|0;let o=Math.imul(s^s>>>15,1|s);return o^=o+Math.imul(o^o>>>7,61|o),((o^o>>>14)>>>0)/4294967296};for(let o=0;o<n;o++){const l=o+Math.floor(a()*(t-o)),c=i[l];i[l]=i[o],i[o]=c;const u=c%e;r.push({zone:Math.floor(c/e),row:1+Math.floor(u/ci),seat:1+u%ci})}return r}function cc(n={}){const e=(r,s,a,o)=>{const l=Number(r);return Number.isFinite(l)?Math.max(a,Math.min(o,Math.round(l))):s},t=e(n.zone??3,3,0,26),i=ac(t);return{zone:t,row:e(n.row??12,12,1,i.rows),seat:e(n.seat??10,10,1,i.seats),standing:n.standing===!0}}function Qv(n){return Array.isArray(n)?n.filter(e=>{if(!e||!Number.isInteger(e.zone)||e.zone<0||e.zone>26)return!1;const t=ac(e.zone);return Number.isInteger(e.row)&&e.row>=1&&e.row<=t.rows&&Number.isInteger(e.seat)&&e.seat>=1&&e.seat<=t.seats}).slice(0,8).map(cc):[]}function ex({ringPoints:n,steel:e,rail:t,dark:i}){if(!Array.isArray(n)||n.length<3||n.some(R=>!Array.isArray(R)||R.length!==2||R.some(L=>!Number.isFinite(L))))throw new TypeError("A finite stage perimeter is required");if(![e,t,i].every(R=>R?.isMaterial))throw new TypeError("Stage rigging requires shared materials");const r=wr.stageEnvelope.width/2,s=wr.stageEnvelope.depth/2;if(n.some(([R,L])=>Math.abs(R)>r||Math.abs(L)>s))throw new RangeError("Stage perimeter exceeds its envelope");const a=n.map(([R,L])=>new P(R*(r-.75)/r,0,L*(s-.75)/s)),o=[],l=[],c=[],u=new Lt;u.name="stage-rigging";const h=(R,L,B,z)=>{const V=L.distanceTo(B);if(!Number.isFinite(V)||V<.01)throw new RangeError("Degenerate rigging member");R.push({a:L.clone(),b:B.clone(),radius:z,length:V})},d=(R,L,B,z)=>new P(R.x+L.x*B,z,R.z+L.z*B),f=31.8,g=34,x=.35;for(let R=0;R<a.length;R++){const L=a[R],B=a[(R+1)%a.length],z=B.clone().sub(L),V=z.length();if(V<.1)throw new RangeError("Stage perimeter has a duplicate corner");z.normalize();const H=new P(-z.z,0,z.x);for(const y of[-x,x])for(const D of[f,g])h(o,d(L,H,y,D),d(B,H,y,D),.115);const O=Math.ceil(V/4);for(let y=0;y<=O;y++){const D=L.clone().lerp(B,y/O);for(const ee of[-x,x])h(l,d(D,H,ee,f),d(D,H,ee,g),.065);for(const ee of[f,g])h(l,d(D,H,-x,ee),d(D,H,x,ee),.065);if(y===O)continue;const q=L.clone().lerp(B,(y+1)/O),K=y%2===0;for(const ee of[-x,x])h(l,d(D,H,ee,K?f:g),d(q,H,ee,K?g:f),.06);for(const ee of[f,g])h(l,d(D,H,K?-x:x,ee),d(q,H,K?x:-x,ee),.055)}}const m=[.4,4,8,12,16,20,24,28,f,g];for(const R of a){const L=R.clone().normalize(),B=new P(-L.z,0,L.x),z=.4,V=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([O,y])=>R.clone().addScaledVector(L,O*z).addScaledVector(B,y*z)),H=(O,y)=>new P(O.x,y,O.z);for(const O of V)h(o,H(O,.3),H(O,g),.12);for(let O=0;O<m.length;O++)for(let y=0;y<4;y++){const D=V[y],q=V[(y+1)%4],K=m[O];if(h(l,H(D,K),H(q,K),.06),O<m.length-1){const ee=m[O+1];h(l,H(O%2?D:q,K),H(O%2?q:D,ee),.055)}}c.push({position:H(R,.125),scale:new P(1.35,.25,1.35)}),h(o,H(R,.25),H(R,1.5),.17),h(l,H(R,1.35),H(R,2.65),.075),h(o,H(R,1.39),H(R,1.57),.215),c.push({position:H(R,2.7),scale:new P(.3,.2,.3)})}const p=new Ms(1,1,1,6),A=new Nn(1,1,1),E=new et,_=new cn,C=new P(0,1,0),T=new P,U=new P,N=new P;function S(R,L,B,z,V){if(!z.length)return;const H=new qn(L,B,z.length);H.name=R,H.instanceMatrix.setUsage(Al),z.forEach((O,y)=>{V(O),H.setMatrixAt(y,E)}),H.instanceMatrix.needsUpdate=!0,H.matrixAutoUpdate=!1,H.computeBoundingBox(),H.computeBoundingSphere(),u.add(H)}function b({a:R,b:L,radius:B,length:z}){U.copy(R).add(L).multiplyScalar(.5),N.subVectors(L,R).normalize(),_.setFromUnitVectors(C,N),E.compose(U,_,T.set(B,z,B))}return S("rigging-main-members",p,e,o,b),S("rigging-bracing-and-shafts",p,t,l,b),S("rigging-base-plates",A,i,c,R=>E.compose(R.position,_.identity(),R.scale)),u.userData={structuralIllustration:!0,towerCount:a.length,memberCount:o.length+l.length,basePartCount:c.length,drawCalls:u.children.length,openRoof:!0},u}const Js=Object.freeze([{bottom:14,top:17.6},{bottom:17.6,top:22.4},{bottom:22.4,top:26}].map(Object.freeze));function tx(n,e,t){const i=n.map(([o,l])=>new P(o*.982,0,l*.982)),r=new Lt;r.name="screen-mounting";const s=Js[Js.length-1].top-Js[0].bottom;return{screens:Js.map((o,l)=>{const c=[];for(let d=0;d<i.length;d++){const f=i[d],g=i[(d+1)%i.length],x=g.clone().sub(f),m=x.length(),p=new Fr(m,o.top-o.bottom-.12),A=p.getAttribute("uv");for(let C=0;C<A.count;C++)A.setY(C,(o.bottom+.06-14+A.getY(C)*(o.top-o.bottom-.12))/s);const E=Math.PI-Math.atan2(x.z,x.x),_=f.clone().add(g).multiplyScalar(.5);p.rotateY(E),p.translate(_.x,(o.bottom+o.top)/2,_.z),c.push(p);for(const C of l===0?[o.bottom,o.top]:[o.top]){const T=new mt(new Nn(m,.12,.16),t);T.rotation.y=E,T.position.set(_.x,C,_.z),r.add(T)}if(l===0){const C=new mt(new Nn(.18,17.8,.18),t);C.position.set(f.x,23,f.z),r.add(C)}}const u=e();u.transparent=!1,u.depthWrite=!0;const h=new mt(qh(c),u);return c.forEach(d=>d.dispose()),h.name=`ring-screen-tier-${l+1}`,h}),frame:r}}function nx(n){if(!n.length)return{fps:0,p50:0,p95:0,max:0,slowRatio:0};const e=[...n].sort((i,r)=>i-r);return{fps:1e3/(n.reduce((i,r)=>i+r,0)/n.length),p50:e[Math.floor((e.length-1)*.5)],p95:e[Math.floor((e.length-1)*.95)],max:e[e.length-1],slowRatio:n.filter(i=>i>25).length/n.length}}function ix({cooldown:n=7e3}={}){let e=0,t=-1/0;return{sample(i,{now:r,level:s,automatic:a,settling:o=!1}){const l=nx(i);return!a||o||i.length<3?(e=0,{summary:l,level:s}):(e=l.fps<45||l.p95>36&&l.slowRatio>.12?e+1:0,e>=2&&r-t>=n&&s<3?(e=0,t=r,{summary:l,level:s+1}):{summary:l,level:s})},reset(){e=0}}}const rd=Math.PI/180;function Da(n){if(!Number.isFinite(n))throw new RangeError("FOV must be finite");return Math.min(150,Math.max(.1,n))}function Qs(n){return Math.log(1/Math.tan(n*rd/2))}function rx(n){return 2*Math.atan(Math.exp(-n))/rd}function sx(n){let e=Da(n),t=e,i=Qs(e),r=i,s=0,a=0,o=!1;function l(c){return e=t=Da(c),i=r=Qs(e),s=a=0,o=!1,e}return{setTarget(c,u=.5){const h=Da(c);if(!Number.isFinite(u)||u<0)throw new RangeError("Lens transition duration must be finite and nonnegative");return Math.abs(h-t)<1e-9?e:u===0||Math.abs(h-e)<1e-9?l(h):(i=Qs(e),t=h,r=Qs(t),s=0,a=u,o=!0,e)},step(c){if(!o||!Number.isFinite(c)||c<=0)return e;if(s=Math.min(a,s+c),s>=a-1e-12)return e=t,o=!1,e;const u=s/a,h=u*u*(3-2*u);return e=rx(i+(r-i)*h),e},get value(){return e},get active(){return o},reset:l}}function eo(n,e){if(!Number.isFinite(n)||n<=0)throw new RangeError(`${e} must be a positive finite number`);return n}function ox(n,e,t){let i=null,r=1,s=0,a=0;const o=t.setSize;return t.setSize=function(l,c){const u=Math.max(1,Math.round(l*r)),h=Math.max(1,Math.round(c*r));u===s&&h===a||(o.call(t,u,h),s=u,a=h)},e.setPixelRatio(1),{configure({width:l,height:c,ratio:u=1,bloomScale:h=1}){l=eo(l,"width"),c=eo(c,"height"),u=eo(u,"ratio"),h=eo(h,"bloomScale");const d=Math.max(1,Math.floor(l*u)),f=Math.max(1,Math.floor(c*u)),g=!i||l!==i.width||c!==i.height||u!==i.ratio,x=!i||d!==i.physicalWidth||f!==i.physicalHeight,m=h!==r;return r=h,g&&n.setDrawingBufferSize(l,c,u),x?e.setSize(d,f):m&&t.setSize(d,f),i={width:l,height:c,ratio:u,bloomScale:r,physicalWidth:d,physicalHeight:f},g||x||m},get configuration(){return i?{...i,bloomWidth:s,bloomHeight:a}:null}}}function sd(n,e){const t=e.position.clone(),i=e.quaternion.clone(),r=n.target.clone(),s=n.enableDamping;try{n.enableDamping=!1,n.update()}finally{e.position.copy(t),e.quaternion.copy(i),n.target.copy(r),n.enableDamping=s,e.updateMatrixWorld()}}const ku=.1;function Ua(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function ax(n,e,t,i,r=1.6){if(!Number.isFinite(r)||r<0)throw new RangeError("Invalid camera move duration");if(![n.position,e,t,i].every(Ua))throw new RangeError("Camera move positions must be finite");const s=n.position.clone(),a=n.quaternion.clone().normalize(),o=Math.log(Math.max(ku,s.distanceTo(e))),l=t.clone(),c=i.clone(),u=new cn,h=new et,d=new P;let f=0;return{to:l,targetTo:c,step(g){if(!Number.isFinite(g)||g<=0)return f>=r;if(!Ua(l)||!Ua(c))throw new RangeError("Camera move destinations must be finite");f=Math.min(r,f+g),r-f<1e-10&&(f=r);const m=1-(1-(r===0?1:f/r))**3,p=Math.log(Math.max(ku,l.distanceTo(c))),A=Math.exp(o+(p-o)*m);return h.lookAt(l,c,n.up),u.setFromRotationMatrix(h),n.position.lerpVectors(s,l,m),n.quaternion.slerpQuaternions(a,u,m),d.set(0,0,-1).applyQuaternion(n.quaternion),e.copy(n.position).addScaledVector(d,A),n.updateMatrixWorld(),f>=r}}}function lx(n){const e=document.createElement("canvas");e.setAttribute("aria-hidden","true"),e.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:none",n.insertBefore(e,n.children[1]||null);const t=e.getContext("2d",{alpha:!1});let i=.5,r=0,s=null;return{capture(a){r>0&&(s??(s=document.createElement("canvas")),s.width=e.width,s.height=e.height,s.getContext("2d").drawImage(e,0,0));const o=r;e.width=a.width,e.height=a.height,t.globalAlpha=1,t.drawImage(a,0,0,e.width,e.height),o>0&&(t.globalAlpha=o,t.drawImage(s,0,0,e.width,e.height),t.globalAlpha=1),i=0,r=1,e.style.opacity="1",e.style.display="block"},step(a){if(r<=0)return;i=Math.min(.5,i+a);const o=i/.5;r=1-o*o*(3-2*o),e.style.opacity=String(r),r===0&&(e.style.display="none",e.width=e.height=1,s=null)},paint(a,o,l){r<=0||(a.save(),a.globalAlpha=r,a.drawImage(e,0,0,o,l),a.restore())},get active(){return r>0}}}const Hu={type:"change"},uc={type:"start"},od={type:"end"},to=new $l,Vu=new oi,cx=Math.cos(70*Ni.DEG2RAD),Rt=new P,Kt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class ux extends jp{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new cn,this._lastTargetPosition=new P,this._quat=new cn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dx.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=Mx.bind(this),this._onMouseWheel=gx.bind(this),this._onKeyDown=_x.bind(this),this._onTouchStart=vx.bind(this),this._onTouchMove=xx.bind(this),this._onMouseDown=px.bind(this),this._onMouseMove=mx.bind(this),this._interceptControlDown=bx.bind(this),this._interceptControlUp=yx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),r<-Math.PI?r+=Kt:r>Math.PI&&(r-=Kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Rt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(to.origin.copy(this.object.position),to.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(to.direction))<cx?this.object.lookAt(this.target):(Vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),to.intersectPlane(Vu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function dx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function px(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case _r.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case _r.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(uc)}function mx(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gx(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(od))}function _x(n){this.enabled!==!1&&this._handleKeyDown(n)}function vx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(uc)}function xx(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function Mx(n){this.enabled!==!1&&n.preventDefault()}function bx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ex=new ic(-1,1,1,-1,0,1);class Sx extends Tt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const wx=new Sx;class hc{constructor(e){this._mesh=new mt(wx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tx extends Br{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ms.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gu extends Br{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Ax extends Br{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Cx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tx(xo),this.copyPass.material.blending=Wn,this.clock=new $p}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(a instanceof Gu?i=!0:a instanceof Ax&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Rx extends Br{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Px={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Tr extends Br{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,a,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new gn(s,a,{type:Un});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new gn(s,a,{type:Un});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Px;this.highPassUniforms=ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ms.clone(xo.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,blending:Fi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Nr,this._fsQuad=new hc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ce(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Tr.BlurDirectionX=new ce(1,0);Tr.BlurDirectionY=new ce(0,1);const no={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Lx extends Br{constructor(){super(),this.uniforms=ms.clone(no.uniforms),this.material=new Ip({name:no.name,uniforms:this.uniforms,vertexShader:no.vertexShader,fragmentShader:no.fragmentShader}),this._fsQuad=new hc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const J=n=>document.querySelector(n),Xt=n=>[...document.querySelectorAll(n)],qt=Math.PI*2,ad=Ni.clamp,Pt=Ni.lerp,Dx=120,Mo=new URLSearchParams(location.search);window.__beastBoot?.phase("程序已下载");const ld=Mo.get("quality")==="compat";let cd=matchMedia("(prefers-reduced-motion: reduce)").matches;try{const n=localStorage.getItem("beast.reduced-motion.v1");(n==="true"||n==="false")&&(cd=n==="true")}catch{}const Ux=cc({zone:Mo.get("zone")??3,row:Mo.get("row")??12,seat:Mo.get("seat")??10}),W={mode:"overview",time:0,scene:0,playing:!1,...Ux,zoom:5,fog:!0,crowd:!0,inspection:!1,reduced:cd,quality:"auto",follow:!0,compare:!1,compareIndex:0};let Wt=[];try{Wt=Qv(JSON.parse(localStorage.getItem("beast.positions.v1")||"[]"))}catch{}let Wu;function Et(n){J("#toast").textContent=n,J("#toast").classList.add("show"),clearTimeout(Wu),Wu=setTimeout(()=>J("#toast").classList.remove("show"),3200)}const Yn=Xv(),Ho=$h({warmup:Yn});for(const n of["pointerdown","pointermove","wheel","keydown"])document.addEventListener(n,()=>Yn.touch(),{passive:!0});const An=jv({warmup:Yn,getSceneState:()=>W,requestScenePlay:()=>{W.compare&&Vr(),W.playing=!0},onPause:()=>{W.playing=!1},onScene:n=>Dd(n),notify:Et,outputMuted:!1}),bt=new fp;bt.background=new Ie("#070c13");bt.fog=new jl("#0b1724",.0018);const fi=J("#viewport"),Fn=J("#world");let Dt,_s=!0,ls=0,Ti=0,fn=0,Qr=0,si=fi.clientWidth<700?0:1,Li=null;function Kn(n=1.6){ls=Math.max(ls,performance.now()+n*1e3)}try{Dt=new Dv({canvas:Fn,antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:ld?"default":"high-performance"})}catch(n){throw J("#webgl-error").hidden=!1,J("#loading").hidden=!0,window.__beastBoot?.fail("设备未能开启三维显示。可以先关闭其他三维页面后重试；较旧的系统或浏览器可能不支持。","graphics"),n}window.__beastBoot?.phase("图形初始化");const $n=ld||!Dt.extensions.has("EXT_color_buffer_float");Dt.setPixelRatio(Math.min(devicePixelRatio,1.25));Dt.toneMapping=Bl;Dt.toneMappingExposure=1.25;Dt.shadowMap.enabled=!1;Dt.shadowMap.type=oh;const lt=new Qt(44,1,.1,1500);lt.position.set(136,91,144);const on=sx(lt.fov);let Ix=null;const bo=lx(fi),Je=new ux(lt,Fn);Je.target.set(0,12,0);Je.enableDamping=!0;Je.dampingFactor=.06;Je.minDistance=4;Je.maxDistance=360;Je.maxPolarAngle=Math.PI*.49;const Xu=(()=>{const n=Dt.getContext();try{return{color:n.getInternalformatParameter(n.RENDERBUFFER,n.RGBA16F,n.SAMPLES)||[],depth:n.getInternalformatParameter(n.RENDERBUFFER,n.DEPTH_COMPONENT24,n.SAMPLES)||[]}}catch{return{color:[],depth:[]}}})(),Nx=new gn(1,1,{type:$n?Tn:Un,samples:0}),Bi=new Cx(Dt,Nx);Bi.addPass(new Rx(bt,lt));const hi=new Tr(new ce(1,1),.75,.55,.7);Bi.addPass(hi);hi.materialHighPassFilter.fragmentShader=hi.materialHighPassFilter.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if(any(notEqual(texel.rgb,texel.rgb))) texel.rgb=vec3(0.); texel.rgb=clamp(texel.rgb,vec3(0.),vec3(65500.));");const vs=new Lx;vs.uniforms.saturation={value:1.38};vs.material.fragmentShader=vs.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float saturation;").replace("gl_FragColor = texture2D( tDiffuse, vUv );","gl_FragColor = texture2D( tDiffuse, vUv ); float luminance=dot(gl_FragColor.rgb,vec3(.2126,.7152,.0722)); gl_FragColor.rgb=max(vec3(0.),mix(vec3(luminance),gl_FragColor.rgb,saturation));");Bi.addPass(vs);const Fx=ox(Dt,Bi,hi);$n&&(J("#color-mode").hidden=!0);let io=!0;J("#color-mode").onclick=()=>{io=!io,vs.uniforms.saturation.value=io?1.38:1,J("#color-mode").textContent="色彩 · "+(io?"鲜艳":"柔和")};const Pl=new kp().load(zo);Pl.colorSpace=Jt;const dc=qv({warmup:Yn,renderer:Dt,scene:bt,camera:lt,urls:[zo,Bo,sc],fallback:Pl,loadImage:(n,e)=>Ho.load(n,e),createTexture:(n,e)=>{const t=e===0?Pl:new Ot(n);return t.image=n,t.colorSpace=Jt,t.needsUpdate=!0,t},onTexture:()=>{Do=-1},report:n=>Ix?.event(n)}),Ll=dc.textures;J("#visual-thumb").src=ys;J("#gallery-poster").src=ko;J("#gallery-performer").src=ys;J("#gallery-stage").src=oc;J("#gallery-awakening").src=zo;J("#gallery-eye").src=Bo;J("#gallery-finale").src=sc;for(const[n,e,t]of[["visual-dialog",["visuals","visual-card"],"close-visuals"]]){const i=J("#"+n);e.forEach(r=>J("#"+r).onclick=()=>i.showModal()),J("#"+t).onclick=()=>i.close(),i.addEventListener("click",r=>{if(r.target===i){const s=i.getBoundingClientRect();(r.clientX<s.left||r.clientX>s.right||r.clientY<s.top||r.clientY>s.bottom)&&i.close()}})}const Ox=Vv({getSelection:()=>({zone:pn().name,row:W.row,seat:W.seat}),notify:Et});J("#sky-reference-king").src=jh;J("#sky-reference-whale").src=Kh;J("#sky-reference-peace").src=Zh;J("#gallery-sources").onclick=()=>{J("#visual-dialog").close(),J("#source-dialog").showModal()};Xt("[data-gallery-group]").forEach(n=>n.onclick=()=>{n.dataset.galleryGroup==="personal"&&Ox.open(),Xt("[data-gallery-group]").forEach(e=>{e.classList.toggle("active",e===n),e.setAttribute("aria-pressed",String(e===n))}),Xt("[data-gallery-panel]").forEach(e=>e.hidden=e.dataset.galleryPanel!==n.dataset.galleryGroup)});const Na=new Map,kt=(n,e={})=>{const t=JSON.stringify([n,e]);return Na.has(t)||Na.set(t,new zh({color:n,roughness:.7,metalness:.25,...e})),Na.get(t)},zr=kt("#11191a"),fc=kt("#303b3b",{metalness:.85,roughness:.35}),Vi=kt("#69716b",{metalness:.9,roughness:.3}),Bx=kt("#252d2b"),zx=kt("#1c292b"),kx=kt("#2a443b");function Yt(n,e,t,i,r=0,s=0,a=0,o=bt){let l=new mt(new Nn(n,e,t),i);return l.position.set(r,s,a),o.add(l),l}function _n(n,e,t,i,r=bt){const s=new P(...n),a=new P(...e),o=new mt(new Ms(t,t,s.distanceTo(a),6),i);return o.position.copy(s).add(a).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new P(0,1,0),a.sub(s).normalize()),r.add(o),o}function Hx(n,e,t,i=bt){let r=new Oh(n.map(a=>new P(...a)),!1,"catmullrom",.1),s=new mt(new ec(r,Math.max(12,n.length*3),e,5,!1),t);return i.add(s),s}const ud=new Hp("#a4b7db","#080d0b",.48);bt.add(ud);const pc=new qp("#9db1df",1.5);pc.position.set(-80,120,80);bt.add(pc);Yt(800,1,800,kt("#060c10"),0,-1,0);Yt(wr.historicalPitch.width,.15,wr.historicalPitch.depth,kt("#102f26"),0,-.35,0);const pi=new Lt;bt.add(pi);const hd=(n,e,t=!1)=>new P(...nd(n,e,t));function dd(n){let e=[],t=[];for(let s=0;s<=160;s++){let a=s/160*qt;for(let o of[0,je.tierDepth]){let l=hd(a,o,n);e.push(l.x,l.y-.9,l.z)}}for(let s=0;s<160;s++){let a=s*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}let i=new Tt;i.setAttribute("position",new dt(e,3)),i.setIndex(t),i.computeVertexNormals();let r=new mt(i,zx);r.material.side=an,pi.add(r)}dd(!1);dd(!0);const mc=new Nn(.48,.62,.43);mc.translate(0,.3,0);let Vx=je.sectors*je.rows*ci;const Ao=new qn(mc,kx,Vx),nt=new wt,Ar=new Ie;let ro=0;const ct=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)};for(let n=0;n<je.sectors;n++)for(let e=1;e<=je.rows;e++)for(let t=0;t<ci;t++){let i=td(n,t+1),r=new P(...lc(n,e,t+1));nt.position.copy(r),nt.rotation.set(0,-i-Math.PI/2,0),nt.updateMatrix(),Ao.setMatrixAt(ro,nt.matrix),Ar.setHSL(.4+ct(ro)*.06,.19,.12+ct(ro)*.07),Ao.setColorAt(ro++,Ar)}Ao.instanceMatrix.needsUpdate=!0;pi.add(Ao);for(let n of[!1,!0])for(let e of[je.innerRailRadial,je.outerRailRadial]){let t=[];for(let i=0;i<=140;i++){let r=hd(i/140*qt,e,n);t.push([r.x,r.y+.3,r.z])}Hx(t,.13,Vi,pi)}const Gx=kt("#1e292d",{side:an,metalness:.7});let fd=[],pd=[];for(let n=0;n<=96;n++){let e=n/96*qt;fd.push(Math.cos(e)*138,35+Math.sin(e*2)*1.8,Math.sin(e)*112,Math.cos(e)*158,33,Math.sin(e)*133)}for(let n=0;n<96;n++){let e=n*2;pd.push(e,e+1,e+2,e+1,e+3,e+2)}let Vo=new Tt;Vo.setAttribute("position",new dt(fd,3));Vo.setIndex(pd);Vo.computeVertexNormals();pi.add(new mt(Vo,Gx));for(let n=0;n<48;n++){let e=n/48*qt;_n([Math.cos(e)*151,0,Math.sin(e)*128],[Math.cos(e)*151,33,Math.sin(e)*128],.28,fc,pi),_n([Math.cos(e)*138,35,Math.sin(e)*112],[Math.cos(e)*158,33,Math.sin(e)*133],.23,Vi,pi)}for(let n=0;n<80;n++){let e=n/80*qt,t=255+ct(n)*110,i=8+ct(n+3)*40;Yt(5+ct(n+10)*15,i,7+ct(n+20)*9,kt("#0c171d"),Math.cos(e)*t,i/2,Math.sin(e)*t)}const Ft=new Lt;bt.add(Ft);const Wx=Yt(69,1.8,35,Bx,0,.9,0,Ft);Wx.receiveShadow=!0;Yt(89,1.2,12,zr,0,.6,0,Ft);Yt(15,1.2,49,zr,0,.6,0,Ft);const md=new Nr({color:"#958a64"});for(let n of[-17.6,17.6])Yt(69,.09,.13,md,0,1.85,n,Ft);for(let n of[-34.6,34.6])Yt(.13,.09,35,md,n,1.85,0,Ft);const gd=[[-46.5,-14],[-36,-26.5],[36,-26.5],[46.5,-14],[46.5,14],[36,26.5],[-36,26.5],[-46.5,14]],Xx=ex({ringPoints:gd,steel:fc,rail:Vi,dark:zr});Ft.add(Xx);for(const n of[29.2,32])for(let e=0;e<16;e++){const t=e/16*qt,i=(e+1)/16*qt;_n([Math.cos(t)*24,n,Math.sin(t)*12],[Math.cos(i)*24,n,Math.sin(i)*12],.17,fc,Ft),e%4===0&&_n([Math.cos(t)*24,n,Math.sin(t)*12],[Math.cos(t)*24,34,Math.sin(t)*12],.15,Vi,Ft)}const xs=new Lt;Ft.add(xs);for(let n of[-1,1])for(let e=0;e<20;e++){let t=-35+e*70/19;_n([t,5,n*26.25],[t,31,n*26.25],.08,Vi,xs)}for(let n=0;n<16;n++){let e=n/16*qt;_n([Math.cos(e)*37,31.8,Math.sin(e)*20],[Math.cos(e)*22,36,Math.sin(e)*13],.18,Vi,Ft)}for(let n of[-1,1])for(let e=0;e<7;e++){let t=Yt(1.7,6,1.5,zr,n*42,24,e===0?-16:16,Ft);e>0&&(t.position.z=(e-3)*5)}const _d=()=>new Ct({uniforms:{time:{value:0},chapter:{value:0},hue:{value:new Ie("#497bd4")},intensity:{value:1},tourTex:{value:Ll[0]},previousTex:{value:Ll[0]},artBlend:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tourTex;uniform sampler2D previousTex;uniform float artBlend;uniform float time;uniform float chapter;uniform vec3 hue;uniform float intensity;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 uv=vUv;float t=time;float grid=1.;float waves=sin(uv.x*20.+t*.6+sin(uv.y*10.-t*.4)*3.)*.5+.5;float eyeY=(uv.y-.53)*13.;float eye=exp(-(eyeY*eyeY))*pow(max(0.,sin(uv.x*18.85)),6.);float crown=(1.-smoothstep(0.,.08,abs(uv.y-(.4+.3*abs(sin(uv.x*18.85))))));float bars=pow(max(0.,sin(uv.x*45.+sin(t*.3)*3.)),6.);float stars=step(.985,hash(floor(uv*vec2(220.,70.))))*(.5+.5*sin(t+uv.x*25.));float v=mix(waves*.25+eye*.9,bars*.45+eye*.7,step(.5,chapter));v=mix(v,crown*.9+waves*.25+stars,step(1.5,chapter));vec3 photo=mix(texture2D(previousTex,uv).rgb,texture2D(tourTex,uv).rgb,smoothstep(0.,1.,artBlend));vec3 c=mix(hue*(v*.9+.025),photo*.72+hue*v*.18,.62)*grid*intensity;if(chapter>2.5){vec2 cell=fract(uv*vec2(20.,5.))-.5;float d=abs(cell.x)*.8+abs(cell.y);float diamond=(1.-smoothstep(.26,.29,d));float sparkle=.35+.12*sin(t*.6+floor(uv.x*20.)*2.3+floor(uv.y*5.));c=(hue*(.09+diamond*(.35+sparkle*1.4))+vec3(.55,.10,.32)*waves*.3)*grid*intensity;}float alpha=.92;gl_FragColor=vec4(c,alpha);}",transparent:!0,side:an,depthWrite:!1}),{screens:Co,frame:vd}=tx(gd,_d,zr);Ft.add(...Co,vd);const Cr=new Lt;Cr.position.set(0,4,0);Ft.add(Cr);const gc=new mt(new Fr(wr.flippingScreen.width,wr.flippingScreen.height),_d());gc.geometry.translate(0,2.5,0);Cr.add(gc);Co.push(gc);Yt(64,5,.24,zr,0,2.5,-.16,Cr);const _t=new Lt;_t.position.y=1.8;Ft.add(_t);const Go=kt("#c1a18a",{roughness:.8}),Gi=kt("#281b1d",{metalness:.45,roughness:.45}),xd=kt("#821f29"),Rr=kt("#090c10");function Wi(n,e,t,i,r,s,a,o=_t){let l=new mt(new bs(1,12,10),i);return l.scale.set(n,e,t),l.position.set(r,s,a),o.add(l),l}Wi(.23,.38,.14,Gi,0,1.1,0);Wi(.18,.22,.17,Go,0,1.7,0);Wi(.19,.15,.18,Rr,0,1.83,-.02);Wi(.11,.06,.17,Rr,-.08,1.8,.07);Yt(.12,.09,.1,Go,0,1.45,0,_t);const _c=new mt(new No(.32,.68,8,1,!0),Gi);_c.position.y=.73;_c.rotation.z=Math.PI;_t.add(_c);Yt(.09,.5,.025,xd,-.13,1.14,.125,_t);Yt(.09,.5,.025,xd,.13,1.14,.125,_t);const Dl=[];for(let n of[-1,1]){let e=new Lt;e.position.set(n*.11,.8,0),_n([0,0,0],[0,-.7,.01],.085,Rr,e),Yt(.15,.12,.27,Rr,0,-.74,.05,e),_t.add(e),Dl.push(e)}const kr=new Lt;kr.position.set(-.22,1.38,0);_n([0,0,0],[-.14,-.36,.06],.075,Gi,kr);_n([-.14,-.36,.06],[-.11,-.64,.12],.055,Gi,kr);Wi(.055,.06,.055,Go,-.11,-.65,.12,kr);_t.add(kr);const gi=new Lt;gi.position.set(.23,1.38,0);_n([0,0,0],[.17,-.24,.08],.075,Gi,gi);_n([.17,-.24,.08],[.08,.12,.22],.055,Gi,gi);Wi(.055,.06,.055,Go,.08,.12,.22,gi);_n([.08,.12,.22],[.03,.25,.12],.025,Rr,gi);Wi(.035,.045,.035,Vi,.03,.25,.12,gi);_t.add(gi);const mi=new Gp("#fff1d6",8500,85,.22,.75,1.1);mi.position.set(10,32,8);mi.target=_t;mi.castShadow=!0;mi.shadow.mapSize.set(1024,1024);bt.add(mi);const vc=new kh("#ffb790",35,12,1.2);vc.position.set(0,4,2);Ft.add(vc);const xc=new Lt;bt.add(xc);const Mc=Jv().map(({zone:n,row:e,seat:t})=>{const[i,r,s]=lc(n,e,t);return[i,r+.6,s]}),Wo=new qn(new Zl(.17,.36,2,4),kt("#19282b"),Mc.length),Pr=new qn(new bs(.1,4,3),new Nr({color:"#fff1b0"}),Mc.length);Mc.forEach((n,e)=>{nt.position.set(...n),nt.rotation.set(0,0,0),nt.scale.setScalar(.9),nt.updateMatrix(),Wo.setMatrixAt(e,nt.matrix),nt.position.y+=.65,nt.position.x+=.2,nt.scale.setScalar(.65+ct(e)*.9),nt.updateMatrix(),Pr.setMatrixAt(e,nt.matrix),Ar.setHSL(.58+ct(e)*.13,.35,.5+ct(e+2)*.3),Pr.setColorAt(e,Ar)});xc.add(Wo,Pr);for(const n of[Wo.material,Pr.material])n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 spectatorCenter=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
if(distance(spectatorCenter,cameraPosition)<1.25)gl_Position=vec4(2.,2.,2.,1.);`)},n.customProgramCacheKey=()=>"spectator-eye-clearance-v1";const qu=Jh,bc=[];gs.forEach((n,e)=>{for(let t=1;t<=n.rows;t++)for(let i=1;i<=n.seats;i++)bc.push(ed(e,t,i))});const Md=new qn(mc,kt("#272c30"),bc.length);bc.forEach((n,e)=>{nt.position.set(...n),nt.rotation.set(0,Math.atan2(-n[0],-n[2]),0),nt.scale.setScalar(1),nt.updateMatrix(),Md.setMatrixAt(e,nt.matrix)});bt.add(Md);const bd=new No(1,1,20,1,!0);bd.translate(0,-.5,0);const yd=[],yc=new Lt;bt.add(yc);const qx=()=>new Ct({uniforms:{color:{value:new Ie("#539cfd")},power:{value:.13},time:{value:0}},transparent:!0,depthWrite:!1,blending:Fi,side:an,vertexShader:"varying vec2 vUv;varying vec3 vPos;void main(){vUv=uv;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 color;uniform float power;uniform float time;varying vec2 vUv;varying vec3 vPos;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159265)),1.8);float fall=pow(clamp(vUv.y,0.,1.),1.2);float grain=.85+.15*sin(vUv.y*45.-time*.3);gl_FragColor=vec4(color*1.2,power*edge*fall*grain);}"}),Ec=Zv(bt,bd,qx());yd.push(...Ec.lights);yd.forEach(({origin:n})=>Yt(.8,.9,.7,Rr,n.x,n.y+.3,n.z,yc));const Ro=new kh("#335ca5",15e3,140,1.3);Ro.position.set(0,18,0);bt.add(Ro);const Ed=1600,Sd=new Float32Array(Ed*3);for(let n=0;n<Ed;n++){let e=[(ct(n+45)-.5)*140,ct(n+99)*24+1,(ct(n+56)-.5)*90];Sd.set(e,n*3)}const wd=new Tt;wd.setAttribute("position",new gt(Sd,3));const yo=new Ct({uniforms:{time:{value:0},color:{value:new Ie("#6994bf")},opacity:{value:.075},scale:{value:1}},transparent:!0,depthWrite:!1,blending:Fi,vertexShader:"uniform float time;uniform float scale;varying float vSeed;void main(){vec3 p=position;vSeed=fract(sin(p.x*6.2+p.z)*145.);p.x+=sin(time*.08+p.z*.1)*6.;p.z+=cos(time*.06+p.x*.07)*4.;p.y+=sin(time*.2+p.x)*1.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp((2500.+vSeed*1500.)/max(.1,-mv.z),1.,100.)*scale;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform vec3 color;uniform float opacity;varying float vSeed;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.5)*opacity;gl_FragColor=vec4(color,a);}"}),Xo=new To(wd,yo);bt.add(Xo);let Td=new Float32Array(500*3);for(let n=0;n<500;n++)Td.set([(ct(n+3)-.5)*100,ct(n+9)*40,(ct(n+12)-.5)*60],n*3);const Eo=new To(new Tt().setAttribute("position",new gt(Td,3)),new Uh({size:.12,color:"#d9b66e",transparent:!0,opacity:.55,blending:Fi,depthWrite:!1}));bt.add(Eo);const qo=new Ql([new ce(0,-.75),new ce(.6,0),new ce(.46,.32),new ce(.27,.44),new ce(0,.44)],8);qo.computeVertexNormals();const Sc=new zh({color:"#ff71bc",emissive:"#fb1485",emissiveIntensity:.65,metalness:.28,roughness:.4,flatShading:!0}),Yo=new Lt;bt.add(Yo);const Po=new qn(qo,Sc,380),Lo=new qn(qo,Sc,130);Yo.add(Po,Lo);const Ad=[];for(let n=0;n<380;n++)nt.position.set((ct(n+900)-.5)*66,2.15,(ct(n+940)-.5)*32),nt.rotation.set(ct(n)*.6,ct(n+6)*qt,ct(n+8)*.4),nt.scale.setScalar(.22+ct(n+980)*.5),nt.updateMatrix(),Po.setMatrixAt(n,nt.matrix),Ar.setHSL(.89+ct(n)*.07,.82,.48+ct(n+1)*.22),Po.setColorAt(n,Ar);for(let n=0;n<130;n++)Ad.push({x:(ct(n+321)-.5)*84,z:(ct(n+333)-.5)*44,y:ct(n+349)*29,size:.12+ct(n+353)*.32});Yo.visible=!1;const Lr=new Lt;Ft.add(Lr);for(let n=0;n<5;n++){const e=new mt(qo,Sc),t=n/5*qt;e.position.set(Math.cos(t)*23,12+Math.sin(t)*4,Math.sin(t)*14),e.scale.setScalar(n===0?2.8:1.6),Lr.add(e)}Lr.visible=!1;const Cd=Iv(bt,lt,{notify:Et}),Yu=Nv([bt,pi,Ft,xs,yc,vd]);document.documentElement.dataset.staticBatches=`${Yu.before}/${Yu.after}`;const Yx=[{name:"深渊 · 序曲",top:"视觉 · 深渊",color:"#497acf",screen:"#356dd6",fog:"#436d9b"},{name:"兽笼 · 觉醒",top:"视觉 · 兽笼",color:"#ff233e",screen:"#d62239",fog:"#8d3148"},{name:"王冠 · 加冕",top:"视觉 · 王冠",color:"#ffcd78",screen:"#e9a847",fog:"#b69b62"},{name:"粉钻 · 心动返场",top:"视觉 · 粉钻",color:"#ff35b1",screen:"#ff56bd",fog:"#b3348b"}];let Do=-1,St=0,Zt=null,yn=null;function so(n,e,t=1.6){sd(Je,lt),lt.position.distanceTo(n)>2||bo.active||yn?(Zt=null,Je.enabled=!1,yn={to:n.clone(),targetTo:e.clone()}):Zt=ax(lt,Je.target,n,e,t),Kn(t+.2)}function pn(n=W.zone){return n<21?{angle:Math.PI/2-n/21*qt,floor:!1,name:`${n}区看台`}:{angle:Math.atan2(qu[n-21][1],qu[n-21][0]),floor:!0,name:`${Qh[n-21]}区内场`}}function Ul(){if(pn().floor){const[e,,t]=ed(W.zone-21,W.row,W.seat);return new P(e,W.standing?1.7:1.15,t)}let n=new P(...lc(W.zone,W.row,W.seat));return n.y+=W.standing?1.75:1.15,n}function $x(){let n=new URLSearchParams(location.search);for(const e of["zone","row","seat"])n.set(e,W[e]);try{history.replaceState(null,"",`${location.pathname}?${n}`)}catch{}}function _i(){Object.assign(W,cc(W));const n=ac(W.zone);J("#row").max=n.rows,J("#row-number").max=n.rows,document.activeElement!==J("#row-number")&&(J("#row-number").value=W.row),J("#row-range-note").textContent=`${pn().floor?"内场":"看台"}可模拟 1—${n.rows} 排`,J("#seat").max=n.seats;let e=Ul(),t=new P;_t.getWorldPosition(t),t.y+=1.5;let i=e.distanceTo(t);J("#person-dist").textContent=`约 ${i.toFixed(0)} 米`,J("#eye-height").textContent=`约 ${e.y.toFixed(1)} 米`;let r=new P(0,0,1).applyQuaternion(_t.quaternion),s=e.clone().sub(t).normalize(),a=r.dot(s);J("#facing").textContent=a>.6?"偏正面":a<-.6?"偏背面":"偏侧面",J("#distance").textContent=W.mode==="overview"?"舞台整体结构高约 36 米":`至人物约 ${i.toFixed(0)} 米 · 模型估算`,J("#seat-badge").textContent=W.mode==="overview"?"自由探索 · 场馆总览":`${pn().name} · ${W.row}排${W.seat}座${W.standing?" · 站立":""}`,J("#zone-label").textContent=pn().name,J("#zone-type").textContent=pn().floor?"内场示意位置":"看台示意位置",J("#row-val").textContent=`${W.row} 排${!pn().floor&&id(W.row).upper?" · 上层":""}`,J("#seat-val").textContent=`${W.seat} 座`,J("#row").value=W.row,J("#seat").value=W.seat,Xt(".map-zone").forEach(o=>o.classList.toggle("selected",Number(o.dataset.zone)===W.zone))}function Zn(n){if(W.mode=n,n==="phone"&&(W.follow=!0,J("#follow-person").classList.add("active")),document.body.classList.toggle("seated",n==="seat"),document.body.classList.toggle("phone",n==="phone"),document.body.classList.toggle("director",n==="director"),document.body.classList.toggle("sky-view",n==="sky"),J("#sky-toolbar").hidden=n!=="sky",Xt("[data-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.mode===n),e.setAttribute("aria-pressed",String(e.dataset.mode===n))}),J("#phone-frame").hidden=n!=="phone",J("#hint").textContent=n==="overview"?"拖动环顾场馆 · 滚轮靠近现场":n==="director"?"镜头正在缓慢巡游 · 随时切回我的视角":n==="sky"?"拖动环顾夜空 · 切换文字与造型":"拖动环顾 · 保持所在位置",Je.enabled=n!=="director",Je.enableZoom=n==="overview",Je.enablePan=n==="overview",Je.minDistance=n==="overview"?4:.1,Je.maxDistance=n==="overview"?360:1,Je.maxPolarAngle=n==="overview"?Math.PI*.49:Math.PI*.97,Je.minPolarAngle=n==="overview"?0:.03,n==="overview")on.setTarget(44,1.6),so(new P(136,91,144),new P(0,12,0));else if(n==="seat"||n==="phone"){let e=Ul(),t=new P;_t.getWorldPosition(t),t.y+=1.2;let i=t.sub(e).normalize();on.setTarget(n==="phone"?$o():60,1.6),so(e,e.clone().add(i.multiplyScalar(.8)))}else if(n==="sky"){let e=Ul(),t=new P(0,129,-8).sub(e).normalize();on.setTarget(76,1.6),so(e,e.clone().add(t.multiplyScalar(.8))),Cd.focus()}else{const e=W.time,t=e*.025;on.setTarget(44,1.6),so(new P(Math.cos(t)*150,60+Math.sin(e*.05)*16,Math.sin(t)*175),new P(_t.position.x*.3,13,_t.position.z*.3))}Kn(),_i(),$x()}function $o(){const e=24*W.zoom,t=Math.max(.1,J("#phone-frame").getBoundingClientRect().height/fi.clientHeight);return Ni.radToDeg(2*Math.atan(34.61/(2*e*t)))}J("#follow-person").onclick=()=>{W.follow=!W.follow,W.follow&&sd(Je,lt),Kn(),J("#follow-person").classList.toggle("active",W.follow),Et(W.follow?"取景方向将跟随舞台人物":"已切换自由取景，拖动可环顾")};let zi=!1;Fn.addEventListener("pointerdown",n=>{yn||(W.mode==="seat"||W.mode==="phone"||W.mode==="sky")&&(zi=!0,W.follow=!1,J("#follow-person").classList.remove("active"),n.clientX,n.clientY,Fn.setPointerCapture(n.pointerId))});const Il=new P;Je.addEventListener("end",()=>{wc=performance.now()+1800});Je.addEventListener("start",()=>{if(W.mode==="seat"||W.mode==="phone"||W.mode==="sky"){if(yn){zi=!1;return}Il.copy(lt.position),Zt=null}});Je.addEventListener("change",()=>{if(zi&&(W.mode==="seat"||W.mode==="phone"||W.mode==="sky")){let n=Je.target.clone().sub(lt.position);lt.position.copy(Il),Je.target.copy(Il).add(n)}});Fn.addEventListener("pointerup",()=>zi=!1);Fn.addEventListener("pointercancel",()=>zi=!1);function jx(){let n=J("#seat-map"),e="";const t=(r,s,a)=>[170+Math.cos(r)*s,142+Math.sin(r)*a];for(let r=0;r<21;r++){let s=Math.PI/2-r/21*qt,a=s-.46/21*qt,o=s+.46/21*qt,l=t(a,111,75),c=t(o,111,75),u=t(o,153,120),h=t(a,153,120),d=t(s,137,100);e+=`<path class="map-zone ${r===W.zone?"selected":""}" data-zone="${r}" tabindex="0" role="button" aria-label="${pn(r).name}" fill="${r%3===1?"#8e83a5":"#647d64"}" d="M${l} A111 75 0 0 1 ${c} L${u} A153 120 0 0 0 ${h}Z"/><text x="${d[0]}" y="${d[1]+3}" text-anchor="middle" fill="#d2d8c5" font-size="8" pointer-events="none">${r}</text>`}[[120,186,43,16],[177,186,43,16],[120,83,43,16],[177,83,43,16],[254,124,17,38],[69,124,17,38]].forEach(([r,s,a,o],l)=>{e+=`<rect class="map-zone" data-zone="${21+l}" tabindex="0" role="button" aria-label="${pn(21+l).name}" x="${r}" y="${s}" width="${a}" height="${o}" rx="2" fill="#ae705c"/><text x="${r+a/2}" y="${s+o/2+3}" text-anchor="middle" fill="#e3d4b1" font-size="8" pointer-events="none">${Qh[l]}</text>`}),n.innerHTML=`<text x="170" y="8" text-anchor="middle" fill="#77887c" font-size="8">图示方位 · 非地理朝向</text>${e}<rect x="102" y="111" width="136" height="62" rx="5" fill="#252f2c" stroke="#9d8e69" stroke-width="1"/><path d="M102 142h136M170 111v62" stroke="#c7ae73" stroke-width=".5" opacity=".5"/><text x="170" y="139" text-anchor="middle" fill="#c9bb95" font-size="10">万兽之王</text><text x="170" y="155" text-anchor="middle" fill="#7b8679" font-size="7">舞台整体 93 × 53 米</text>`,Xt(".map-zone").forEach(r=>{const s=()=>{W.zone=Number(r.dataset.zone),_i(),(W.mode==="seat"||W.mode==="phone"||W.mode==="sky")&&Zn(W.mode)};r.addEventListener("click",s),r.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),s())})})}jx();_i();J("#seat-panel").inert=!0;function Hr(n){J("#seat-panel").classList.toggle("open",n),J("#seat-panel").inert=!n,J("#seat-toggle").setAttribute("aria-expanded",String(n))}J("#seat-toggle").onclick=()=>Hr(!J("#seat-panel").classList.contains("open"));J("#close-seats").onclick=()=>Hr(!1);document.addEventListener("keydown",n=>{n.key==="Escape"&&!J("#source-dialog").open&&(Hr(!1),W.compare&&Vr())});J("#enter").onclick=()=>{W.compare&&Vr(),Dd(0),Hr(!1),Zn("director"),An.enter()};J("#take-seat").onclick=()=>{Zn("seat"),Hr(!1)};Xt("[data-mode]").forEach(n=>n.onclick=()=>{W.compare&&Vr(),Zn(n.dataset.mode)});for(let n of["row","seat"])J("#"+n).oninput=e=>{W[n]=Number(e.target.value),_i(),(W.mode==="seat"||W.mode==="phone"||W.mode==="sky")&&Zn(W.mode)};J("#row-number").onchange=n=>{n.target.value.trim()&&(W.row=Number(n.target.value)),_i(),n.target.value=W.row,["seat","phone","sky"].includes(W.mode)&&Zn(W.mode)};J("#row-number").onkeydown=n=>{n.key==="Enter"?(n.preventDefault(),n.currentTarget.blur()):n.key==="Escape"&&(n.currentTarget.value=W.row,n.currentTarget.blur())};J("#standing").onclick=()=>{W.standing=!W.standing,J("#standing").setAttribute("aria-checked",String(W.standing)),_i(),["seat","phone","sky"].includes(W.mode)&&Zn(W.mode)};Xt("[data-zoom]").forEach(n=>n.onclick=()=>{if(W.zoom=Number(n.dataset.zoom),Xt("[data-zoom]").forEach(e=>e.classList.toggle("active",e===n)),J("#phone-zoom-label").textContent=W.zoom+"×",W.mode==="phone"){const e=$o(),t=Math.abs(Math.log2(Math.tan(on.value*Math.PI/360)/Math.tan(e*Math.PI/360))),i=ad(.28+t*.2,.28,1.05);on.setTarget(e,i),Kn(i+.2)}});function Rd(){try{localStorage.setItem("beast.positions.v1",JSON.stringify(Wt))}catch{Et("浏览器无法保存收藏，请保持此页面打开")}Pd()}function Pd(){J("#saved-count").textContent=Wt.length,J("#saved-list").innerHTML=Wt.length?Wt.map((n,e)=>`<div class="saved-card"><div><strong>${pn(n.zone).name}</strong><small>${n.row}排 · ${n.seat}座 · ${n.standing?"站立":"坐姿"}</small></div><div><button data-visit="${e}">查看</button><button data-remove="${e}" class="remove" aria-label="删除第${e+1}个收藏">×</button></div></div>`).join(""):'<div class="saved-empty">为这一夜，留一个位置。<br>选好位置后，点击「收藏」。</div>',J("#compare").disabled=Wt.length<2,Xt("[data-visit]").forEach(n=>n.onclick=()=>{Object.assign(W,Wt[Number(n.dataset.visit)]),J("#standing").setAttribute("aria-checked",String(W.standing)),Zn("seat")}),Xt("[data-remove]").forEach(n=>n.onclick=()=>{W.compare&&Vr(),Wt.splice(Number(n.dataset.remove),1),Rd()})}J("#save-seat").onclick=()=>{if(Wt.some(n=>n.zone===W.zone&&n.row===W.row&&n.seat===W.seat&&n.standing===W.standing)){Et("这个位置已经收藏了");return}if(Wt.length>=8){Et("最多收藏8个位置，请先移除一个");return}Wt.push({zone:W.zone,row:W.row,seat:W.seat,standing:W.standing}),Rd(),Et("已收藏，可在「我的收藏」比较位置")};Pd();Xt("[data-tab]").forEach(n=>n.onclick=()=>{Xt("[data-tab]").forEach(e=>e.classList.toggle("active",e===n)),J("#select-content").hidden=n.dataset.tab!=="select",J("#saved-content").hidden=n.dataset.tab!=="saved"});J("#share-seat").onclick=async()=>{const n=new URL(location.href);n.searchParams.set("zone",W.zone),n.searchParams.set("row",W.row),n.searchParams.set("seat",W.seat),n.searchParams.delete("v");try{if(!navigator.clipboard?.writeText)throw new Error("clipboard unavailable");await navigator.clipboard.writeText(n.href),Et("位置链接已复制，对方打开后可查看相同排座")}catch{prompt("复制这个链接，即可分享当前排座：",n.href)}};let Nl=!1;function Ld(){Object.assign(W,Wt[W.compareIndex]),Zn("seat"),J("#compare-name").textContent=`位置 ${W.compareIndex+1} / ${Wt.length} · ${pn().name} ${W.row}排`,_i()}J("#compare").onclick=()=>{Wt.length<2||(Nl=W.playing,W.playing=!1,W.compare=!0,An.pauseForScene(),W.compareIndex=0,J("#compare-banner").hidden=!1,J("#compare-exit").hidden=!1,J("#compare").hidden=!0,J("#play").textContent="▶",J("#play").setAttribute("aria-label","比较中，演出已暂停"),Ld(),Hr(!1),Et("已锁定演出时刻，切换位置比较"))};J("#compare-next").onclick=()=>{W.compareIndex=(W.compareIndex+1)%Wt.length,Ld()};function Vr(){W.compare=!1,J("#compare-banner").hidden=!0,J("#compare-exit").hidden=!0,J("#compare").hidden=!1,W.playing=Nl,Nl?An.resumeForScene():An.refresh(),J("#play").textContent=W.playing?"Ⅱ":"▶",J("#play").setAttribute("aria-label",W.playing?"暂停演出":"播放演出")}J("#compare-exit").onclick=Vr;J("#play").onclick=()=>{if(W.compare){Et("比较中已锁定演出时刻，请先结束位置比较");return}An.toggle()};function Dd(n){W.scene=ad(Math.floor(n),0,3),Do=-1,Kn(),dc.prepareTexture(Math.min(W.scene,2),"next").catch(()=>{})}for(let n of["fog","crowd"])J("#"+n).onclick=()=>{W[n]=!W[n],J("#"+n).classList.toggle("active",W[n]),Xo.visible=W.fog,xc.visible=W.crowd};J("#inspection").onclick=()=>{W.inspection=!W.inspection,Kn(),J("#inspection").classList.toggle("active",W.inspection),Et(W.inspection?"视野检查：已减少烟雾与舞台光效":"已恢复演出氛围")};function Ud(){const n=J("#motion");n.textContent=W.reduced?"恢复动态":"减少动态",n.setAttribute("aria-pressed",String(W.reduced))}Ud();J("#motion").onclick=()=>{W.reduced=!W.reduced,Ud();try{localStorage.setItem("beast.reduced-motion.v1",String(W.reduced))}catch{}Kn(),Et(W.reduced?"已降低闪烁和运动强度":"已恢复舞台动态")};J("#sources").onclick=()=>J("#source-dialog").showModal();J("#close-sources").onclick=()=>J("#source-dialog").close();J("#source-dialog").addEventListener("click",n=>{if(n.target===J("#source-dialog")){let e=J("#source-dialog").getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&J("#source-dialog").close()}});J("#fullscreen").onclick=async()=>{try{const n=J("#app");document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():typeof n.requestFullscreen=="function"?await n.requestFullscreen():Et("此浏览器暂不支持网页全屏，可横屏获得更大的观演画面")}catch{Et("暂时无法全屏，可横屏继续体验")}};let mn=$n?3:matchMedia("(pointer: coarse)").matches||fi.clientWidth<700?2:1,Id=mn>=2;function Uo(n){$n&&(n=Math.max(2,n)),mn=n,Id=n>=2,_s=!0,Kn(),J("#quality").textContent=$n?"兼容 · "+(n===3?"省电":"流畅"):"画质 · "+(W.quality==="auto"?"自动 · "+(n===3?"省电30帧":n===2?"流畅":"均衡"):n===0?"高":"流畅")}function Kx(){if(!_s)return!1;const n=fi.clientWidth,e=fi.clientHeight;if(n<=0||e<=0)return!1;const t=Fv(mn,n,devicePixelRatio),i=!Li;Li=t,Bv(Bi,$n?0:Ov(mn,Xu.color,Xu.depth));let r;return $n?(Dt.setDrawingBufferSize(n,e,t.ratio),r=!0):r=Fx.configure({width:n,height:e,ratio:t.ratio,bloomScale:mn===0?1:.65}),Dt.shadowMap.enabled=t.shadows,mi.castShadow=t.shadows,Xo.geometry.setDrawRange(0,t.fogCount),Wo.count=t.crowdCount,Pr.count=t.crowdCount,Ec.setStep(t.beamStep),i&&(si=t.bloom?1:0,hi.enabled=t.bloom),lt.aspect=n/e,W.mode==="phone"&&on.setTarget($o(),.35),lt.updateProjectionMatrix(),_s=!1,document.documentElement.dataset.msaaSamples=String(Bi.renderTarget1.samples),document.documentElement.dataset.renderRatio=String(t.ratio),document.documentElement.dataset.qualityLevel=String(mn),r}J("#quality").onclick=()=>{if($n){W.quality="low",Uo(mn===3?2:3),Et("兼容模式："+(mn===3?"省电画质":"流畅画质"));return}W.quality=W.quality==="auto"?"high":W.quality==="high"?"low":"auto",Uo(W.quality==="high"?0:W.quality==="low"||fi.clientWidth<700?2:1),Et(W.quality==="high"?"已开启完整光效，设备发热时可切回自动":W.quality==="low"?"已启用流畅画质":"将根据运行情况调整画质")};J("#shot").onclick=()=>{try{Nd();let n=Dt.domElement,e=n.width,t=n.height,i=0,r=0;if(W.mode==="phone"){let o=J("#phone-frame").getBoundingClientRect(),l=Fn.getBoundingClientRect(),c=n.width/l.width;i=(o.left-l.left)*c,r=(o.top-l.top)*c,e=o.width*c,t=o.height*c}const s=document.createElement("canvas");s.width=Math.round(e),s.height=Math.round(t)+100;const a=s.getContext("2d");a.fillStyle="#0d1516",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,r,e,t,0,0,s.width,t),a.fillStyle="#d7bd87",a.font=`${Math.max(14,e*.017)}px sans-serif`,a.fillText("万兽之王 · 广州现场",18,t+30),a.fillStyle="#9ca998",a.font=`${Math.max(9,e*.01)}px sans-serif`,a.fillText(`${pn().name} · ${W.row}排${W.seat}座${W.mode==="phone"?" · "+W.zoom+"倍":""}`,18,t+54),a.fillText("非官方主题模拟 · 排座与距离为估算",18,t+77),s.toBlob(o=>{if(!o){Et("截图生成失败");return}let l=URL.createObjectURL(o),c=document.createElement("a");c.href=l,c.download=`万兽之王-广州现场-${Date.now()}.png`,c.click(),setTimeout(()=>URL.revokeObjectURL(l),5e3),Et("现场截图已导出")},"image/png")}catch{Et("截图未能导出，请稍后再试")}};function $u(){_s=!0,Kn(.5)}typeof ResizeObserver<"u"?new ResizeObserver($u).observe(fi):window.addEventListener("resize",$u);Uo(mn);Fn.addEventListener("webglcontextlost",n=>{n.preventDefault(),W.playing=!1,An.pauseForScene(),Et("图形资源中断，请重新加载页面恢复现场"),J("#webgl-error").hidden=!1,J("#loading").hidden=!0,window.__beastBoot?.fail("图形资源已中断，请用兼容模式重新进入。","graphics")});performance.now();let cr=0,Fl=performance.now(),wc=0,ju=0,ur=0,Fa=!1,oo=!1;const Ku=new Ie,Zu=new Ie,ao=new Ie;new P(0,-1,0);const Oa=new P;let Ju=0;Dt.info.autoReset=!1;for(const n of["pointerdown","pointermove","wheel"])Fn.addEventListener(n,()=>wc=performance.now()+1200,{passive:!0});let lo=0,es=0,Qu=!1;const hr=[],Zx=ix(),co=new P,Ba=new P,uo=new P,eh=new P,th=new cn,nh=new cn;function Jx(n,{fixedDelta:e=null}={}){const t=e!==null,i=Math.max(0,(n-Fl)/1e3);if(Fl=n,!t&&Fa&&document.hidden){cr=0,hr.length=0,es=n;return}const r=!!document.querySelector("dialog[open]");if(!t&&r){oo&&(oo=!1,Yn.setBusy("scene-motion",!1)),cr=0,hr.length=0,es=n;return}const s=Math.abs(Qr-(W.mode==="sky"?1:0))>.002||Math.abs(Ti-(W.mode==="phone"?1:0))>.002||Math.abs(fn-(W.inspection?1:0))>.002||Math.abs(si-(Li?.bloom?1:0))>.002,a=W.playing||W.mode==="sky"||!!Zt||!!yn||bo.active||on.active||_s||s||n<ls||n<wc;W.playing&&(ju+=t?e:Math.min(i,.1));const o=a?mn===3?1e3/30:1e3/60:120;if(Qu!==a&&(lo=n,Qu=a),!t&&n+.6<lo)return;t||(lo+=Math.max(1,Math.floor((n-lo)/o)+1)*o);const l=es?Math.max(0,n-es):1e3/60,c=t?e:Math.min(l/1e3,.05);if(es=n,a&&!t?(cr+=l/1e3,hr.push(l)):(cr=0,hr.length=0),Kx(),!Li)return;const u=on.step(c);Math.abs(lt.fov-u)>1e-6&&(lt.fov=u,lt.updateProjectionMatrix()),Je.dampingFactor=1-Math.pow(1-.06,c*60),W.time=ju;let h=W.time;St=W.scene;let d=Yx[St];St!==Do&&(Do=St,document.body.classList.toggle("pink-scene",St===3),J("#visual-thumb").src=[ys,Bo,oc,ko][St],Co.forEach(E=>{const _=E.material.uniforms;_.previousTex.value=_.tourTex.value,_.tourTex.value=Ll[Math.min(St,2)],_.artBlend.value=0}),Xt("[data-stage-theme]").forEach(E=>{E.classList.toggle("active",Number(E.dataset.stageTheme)===St),E.setAttribute("aria-pressed",String(Number(E.dataset.stageTheme)===St))})),ur=Pt(ur,An.energy(),1-Math.exp(-c*3)),Qr=Pt(Qr,W.mode==="sky"?1:0,1-Math.exp(-c*4)),Ti=Pt(Ti,W.mode==="phone"?1:0,1-Math.exp(-c*4)),fn=Pt(fn,W.inspection?1:0,1-Math.exp(-c*4)),si=Pt(si,Li.bloom?1:0,1-Math.exp(-c*4)),!Li.bloom&&si<.002&&(si=0),hi.enabled=Li.bloom||si>0;let f=W.reduced?.25:.25+.06*Math.sin(h*.45),g=Pt(1,.1,fn);ao.set(d.color),Ku.set(d.screen),Zu.set(d.fog),Yo.visible=St===3,Lr.visible=St===3,Gi.color.set(St===3?"#a12269":"#281b1d"),St===3&&(Lr.children.forEach((E,_)=>{E.rotation.y=h*.24+_,E.rotation.z=Math.sin(h*.35+_)*.16}),Ad.forEach((E,_)=>{nt.position.set(E.x+Math.sin(h*.2+_)*1.4,2.5+((E.y-h*.65)%29+29)%29,E.z),nt.rotation.set(h*.12+_,h*.27+_,Math.sin(_)*.35),nt.scale.setScalar(E.size),nt.updateMatrix(),Lo.setMatrixAt(_,nt.matrix)}),Lo.instanceMatrix.needsUpdate=!0),Ro.color.lerp(ao,1-Math.exp(-c*2.14)),Dt.toneMappingExposure=Pt(1.25,.85,Ti),Ro.intensity=Pt(3200+ur*1200+f*400,5e3,fn)*Pt(1,.55,Ti),ud.intensity=Pt(.42,1.25,fn),pc.intensity=Pt(1.2,2.5,fn),hi.strength=Pt(Pt(.5,.25,Ti),.15,fn)*si*Pt(1,.42,Qr),hi.threshold=Pt(.7,.95,Qr),Co.forEach(E=>{E.material.uniforms.time.value=h,E.material.uniforms.chapter.value=St,E.material.uniforms.artBlend.value=Math.min(1,E.material.uniforms.artBlend.value+c*.7),E.material.uniforms.hue.value.lerp(Ku,1-Math.exp(-c*2.45)),E.material.uniforms.intensity.value=Pt(1.05+ur*.08,.35,fn)}),xs.visible=St<2,xs.position.y=St===0?2+Math.sin(h*.15)*1.5:0,Cr.rotation.x=Pt(Cr.rotation.x,St>=2?-Math.PI/2:St===1?-Math.PI/2*(.5+.5*Math.sin((h-30)/30*Math.PI*2)):0,1-Math.exp(-c*3));const x=h/Dx*qt;let m=Math.sin(x)*25,p=Math.sin(x*2)*9;if(_t.position.set(m,1.8,p),_t.rotation.y=Math.atan2(Math.cos(x)*25,Math.cos(x*2)*18),Dl[0].rotation.x=Math.sin(h*3)*.2,Dl[1].rotation.x=-Math.sin(h*3)*.2,kr.rotation.z=Math.sin(h*.6)*.2-.15,gi.rotation.x=Math.sin(h*.9)*.08,vc.position.set(m,4,p+2),mi.position.set(m*.4,32,p*.4+7),mi.intensity=Pt(3800+ur*1500,4500,fn)*Pt(1,.65,Ti),Ec.update(h,St,ao,g*(.07+(W.reduced?.03:f*.025)+ur*.025),c),Xo.visible=W.fog&&fn<.998,yo.uniforms.time.value=h,yo.uniforms.color.value.lerp(Zu,1-Math.exp(-c*1.83)),yo.uniforms.opacity.value=(St===0?.07:St===1?.055:.04)*(1-fn),Eo.visible=!W.inspection,Eo.position.y=Math.sin(h*.07)*3,Eo.rotation.y=h*.006,Pr.material.color.lerp(ao,1-Math.exp(-c*1.21)),!yn)if(Zt){if(W.mode==="director"){const E=h*.025;Zt.to.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),Zt.targetTo.set(_t.position.x*.3,13,_t.position.z*.3)}W.mode==="phone"&&W.follow&&(_t.getWorldPosition(Oa),Oa.y+=1.2,Zt.targetTo.copy(Zt.to).add(Oa.sub(Zt.to).normalize().multiplyScalar(.8))),Zt.step(c)&&(Zt=null)}else if(W.mode==="director"){let E=h*.025;lt.position.set(Math.cos(E)*150,60+Math.sin(h*.05)*16,Math.sin(E)*175),Je.target.set(_t.position.x*.3,13,_t.position.z*.3),lt.lookAt(Je.target)}else W.mode==="phone"&&W.follow&&!zi&&(co.copy(lt.position),_t.getWorldPosition(Ba),Ba.y+=1.2,uo.subVectors(Je.target,co).normalize(),eh.copy(Ba).sub(co).normalize(),th.setFromUnitVectors(uo,eh),nh.identity().slerp(th,1-Math.exp(-c*9)),uo.applyQuaternion(nh),Je.target.copy(co).addScaledVector(uo,.8)),Je.update(c);const A=!!(Zt||yn||on.active||zi||W.compare||n<ls);if(A!==oo&&(oo=A,Yn.setBusy("scene-motion",A)),bo.step(c),Cd.update(c,{active:W.mode==="sky"||W.playing,reduced:W.reduced,low:Id}),Dt.info.reset(),Nd(),yn&&(bo.capture(Fn),lt.position.copy(yn.to),Je.target.copy(yn.targetTo),lt.lookAt(Je.target),lt.updateMatrixWorld(),yn=null,Je.enabled=W.mode!=="director",on.reset(W.mode==="phone"?$o():W.mode==="sky"?76:W.mode==="seat"?60:44),lt.fov=on.value,lt.updateProjectionMatrix()),Fa||(Fa=!0,J("#loading").classList.add("done"),setTimeout(()=>J("#loading").hidden=!0,800),document.documentElement.dataset.sceneReady="true",window.__beastBoot?.ready(),Qx()),!t&&n-Ju>700&&(_i(),Ju=n),!t&&cr>3){const E=Zx.sample(hr,{now:n,level:mn,automatic:W.quality==="auto",settling:!!Zt||on.active||s||n<ls}),_=E.summary;document.documentElement.dataset.fps=String(Math.round(_.fps)),document.documentElement.dataset.frameP95=_.p95.toFixed(1),document.documentElement.dataset.frameWorst=_.max.toFixed(1),document.documentElement.dataset.renderCalls=String(Dt.info.render.calls),J("#quality").title=`最近动态画面约${Math.round(_.fps)}帧/秒，95%的帧间隔不超过${Math.round(_.p95)}毫秒。设备发热时可切回自动或流畅画质。`,E.level!==mn&&(Uo(E.level),Et("已降低渲染负担，优先保持操作流畅")),hr.length=0,cr=0}}function Nd(){$n?Dt.render(bt,lt):Bi.render()}function Fd(n){try{Jx(n)}catch(e){window.__beastBoot?.fail("三维画面未能正常运行，请尝试兼容模式。","graphics"),console.error(e);return}requestAnimationFrame(Fd)}let ih=!1;function Qx(){ih||(ih=!0,setTimeout(()=>{Yn.touch(),Yn.start(),An.prepare?.(),dc.prepare({objects:[Po,Lo,Lr.children[0]]}).catch(()=>{}),eM.prepare();for(const n of[ys,ko])Ho.prepare(n).catch(()=>{})},0))}for(const n of Xt("[data-gallery-group]")){const e=()=>{({live:[ko,ys,oc],visual:[zo,Bo,sc],sky:[jh,Kh,Zh]}[n.dataset.galleryGroup]||[]).slice(0,2).forEach(i=>Ho.prepare(i,{priority:"next",retry:!0}).catch(()=>{}))};n.addEventListener("pointerenter",e),n.addEventListener("focus",e),n.addEventListener("click",e)}window.__beastBoot?.phase("准备三维首帧");Fl=performance.now();let rh=!1;function Od(n){rh||(rh=!0,Fd(n))}requestAnimationFrame(Od);setTimeout(()=>Od(performance.now()),250);document.addEventListener("visibilitychange",()=>An.setVisibility(document.hidden));window.addEventListener("pagehide",()=>An.setVisibility(!0));window.addEventListener("pageshow",()=>An.setVisibility(document.hidden));const za=Object.values([Wd])[0];if(za){const n=J("#support-open"),e=J("#support-dialog"),t=J("#support-intro"),i=J("#support-gift"),r=J("#support-reveal"),s=J("#support-back"),a=o=>{t.hidden=o,i.hidden=!o,r.setAttribute("aria-expanded",String(o)),e.scrollTop=0};J("#support-save").href=za,n.hidden=!1,n.onclick=()=>{a(!1),e.showModal()},r.onclick=()=>{J("#support-code").src=za,a(!0),s.focus({preventScroll:!0})},s.onclick=()=>{a(!1),r.focus({preventScroll:!0})},J("#support-close").onclick=()=>e.close(),e.addEventListener("close",()=>{a(!1)}),e.addEventListener("click",o=>{if(o.target===e){const l=e.getBoundingClientRect();(o.clientX<l.left||o.clientX>l.right||o.clientY<l.top||o.clientY>l.bottom)&&e.close()}})}const eM=kv({warmup:Yn,cache:Ho}),gr=document.querySelector("#author-note-dialog");for(const n of["author-note-open","author-note-gallery"])document.getElementById(n).onclick=()=>gr.showModal();document.getElementById("author-note-close").onclick=()=>gr.close();gr.addEventListener("click",n=>{if(n.target===gr){const e=gr.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&gr.close()}});
