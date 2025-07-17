import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="176",ud=0,Fo=1,fd=2,uc=1,hd=2,yn=3,Rn=0,Nt=1,on=2,Vn=0,Ri=1,Bo=2,zo=3,ko=4,pd=5,ii=100,md=101,gd=102,_d=103,vd=104,xd=200,Sd=201,yd=202,Md=203,ha=204,pa=205,Ed=206,Td=207,bd=208,wd=209,Ad=210,Rd=211,Cd=212,Pd=213,Ld=214,ma=0,ga=1,_a=2,Li=3,va=4,xa=5,Sa=6,ya=7,fc=0,Id=1,Dd=2,Gn=0,Nd=1,Ud=2,Od=3,hc=4,Fd=5,Bd=6,zd=7,Ho="attached",kd="detached",pc=300,Ii=301,Di=302,Ma=303,Ea=304,gr=306,Ni=1e3,Bn=1001,cr=1002,Ct=1003,mc=1004,is=1005,kt=1006,er=1007,Tn=1008,ln=1009,gc=1010,_c=1011,us=1012,oo=1013,oi=1014,tn=1015,xs=1016,lo=1017,co=1018,fs=1020,vc=35902,xc=1021,Sc=1022,qt=1023,hs=1026,ps=1027,uo=1028,fo=1029,yc=1030,ho=1031,po=1033,tr=33776,nr=33777,ir=33778,sr=33779,Ta=35840,ba=35841,wa=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,La=37808,Ia=37809,Da=37810,Na=37811,Ua=37812,Oa=37813,Fa=37814,Ba=37815,za=37816,ka=37817,Ha=37818,Va=37819,Ga=37820,Wa=37821,rr=36492,Xa=36494,Ya=36495,Mc=36283,qa=36284,$a=36285,ja=36286,ms=2300,gs=2301,Tr=2302,Vo=2400,Go=2401,Wo=2402,Hd=2500,Vd=0,Ec=1,Ka=2,Gd=3200,Wd=3201,Tc=0,Xd=1,Fn="",St="srgb",Lt="srgb-linear",dr="linear",st="srgb",fi=7680,Xo=519,Yd=512,qd=513,$d=514,bc=515,jd=516,Kd=517,Zd=518,Jd=519,Za=35044,Yo="300 es",bn=2e3,ur=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const os=Math.PI/180,Ui=180/Math.PI;function nn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function mo(i,e){return(i%e+e)%e}function Qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eu(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function tu(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function nu(i,e=1){return e-Math.abs(mo(i,e*2)-e)}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function su(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ru(i,e){return i+Math.floor(Math.random()*(e-i+1))}function au(i,e){return i+Math.random()*(e-i)}function ou(i){return i*(.5-Math.random())}function lu(i){i!==void 0&&(qo=i);let e=qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cu(i){return i*os}function du(i){return i*Ui}function uu(i){return(i&i-1)===0&&i!==0}function fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*f,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*f,o*c);break;case"ZYZ":i.set(l*f,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mu={DEG2RAD:os,RAD2DEG:Ui,generateUUID:nn,clamp:Ve,euclideanModulo:mo,mapLinear:Qd,inverseLerp:eu,lerp:ls,damp:tu,pingpong:nu,smoothstep:iu,smootherstep:su,randInt:ru,randFloat:au,randFloatSpread:ou,seededRandom:lu,degToRad:cu,radToDeg:du,isPowerOfTwo:uu,ceilPowerOfTwo:fu,floorPowerOfTwo:hu,setQuaternionFromProperEuler:pu,normalize:nt,denormalize:Qt};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,s,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],f=n[8],g=s[0],_=s[3],m=s[6],x=s[1],v=s[4],S=s[7],T=s[2],A=s[5],w=s[8];return r[0]=a*g+o*x+l*T,r[3]=a*_+o*v+l*A,r[6]=a*m+o*S+l*w,r[1]=c*g+d*x+u*T,r[4]=c*_+d*v+u*A,r[7]=c*m+d*S+u*w,r[2]=h*g+p*x+f*T,r[5]=h*_+p*v+f*A,r[8]=h*m+p*S+f*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,f=t*u+n*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return e[0]=u*g,e[1]=(s*c-d*n)*g,e[2]=(o*n-s*a)*g,e[3]=h*g,e[4]=(d*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Ne;function wc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){const i=_s("canvas");return i.style.display="block",i}const $o={};function ar(i){i in $o||($o[i]=!0,console.warn(i))}function _u(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jo=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const i={enabled:!0,workingColorSpace:Lt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?dr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lt]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:jo,fromXYZ:Ko,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:st,toXYZ:jo,fromXYZ:Ko,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}const Xe=Su();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class yu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=_s("canvas")),hi.width=e.width,hi.height=e.height;const s=hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mu=0;class go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;class _t extends Hi{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Bn,s=Bn,r=kt,a=Tn,o=qt,l=ln,c=_t.DEFAULT_ANISOTROPY,d=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=nn(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=pc;_t.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],f=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-g)<.01&&Math.abs(f-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+g)<.1&&Math.abs(f+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,T=(m+1)/2,A=(d+h)/4,w=(u+g)/4,C=(f+_)/4;return v>S&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=w/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((_-f)*(_-f)+(u-g)*(u-g)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(_-f)/x,this.y=(u-g)/x,this.z=(h-d)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tu extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new _t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new go(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ac extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[a+0],p=r[a+1],f=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=f,e[t+3]=g;return}if(u!==g||l!==h||c!==p||d!==f){let _=1-o;const m=l*h+c*p+d*f+u*g,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),A=Math.atan2(T,m*x);_=Math.sin(_*A)/T,o=Math.sin(o*A)/T}const S=o*x;if(l=l*_+h*S,c=c*_+p*S,d=d*_+f*S,u=u*_+g*S,_===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+d*u+l*p-c*h,e[t+1]=l*f+d*h+c*u-o*p,e[t+2]=c*f+d*p+o*h-l*u,e[t+3]=d*f-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),p=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*f,this._y=c*p*u-h*d*f,this._z=c*d*f+h*p*u,this._w=c*d*u-h*p*f;break;case"YXZ":this._x=h*d*u+c*p*f,this._y=c*p*u-h*d*f,this._z=c*d*f-h*p*u,this._w=c*d*u+h*p*f;break;case"ZXY":this._x=h*d*u-c*p*f,this._y=c*p*u+h*d*f,this._z=c*d*f+h*p*u,this._w=c*d*u-h*p*f;break;case"ZYX":this._x=h*d*u-c*p*f,this._y=c*p*u+h*d*f,this._z=c*d*f-h*p*u,this._w=c*d*u+h*p*f;break;case"YZX":this._x=h*d*u+c*p*f,this._y=c*p*u+h*d*f,this._z=c*d*f-h*p*u,this._w=c*d*u-h*p*f;break;case"XZY":this._x=h*d*u-c*p*f,this._y=c*p*u-h*d*f,this._z=c*d*f+h*p*u,this._w=c*d*u+h*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new H,Zo=new Xn;class dn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),As.subVectors(this.max,$i),pi.subVectors(e.a,$i),mi.subVectors(e.b,$i),gi.subVectors(e.c,$i),Cn.subVectors(mi,pi),Pn.subVectors(gi,mi),$n.subVectors(pi,gi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-$n.z,$n.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,$n.z,0,-$n.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-$n.y,$n.x,0];return!Rr(t,pi,mi,gi,As)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,pi,mi,gi,As))?!1:(Rs.crossVectors(Cn,Pn),t=[Rs.x,Rs.y,Rs.z],Rr(t,pi,mi,gi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new H,new H,new H,new H,new H,new H,new H,new H],Kt=new H,ws=new dn,pi=new H,mi=new H,gi=new H,Cn=new H,Pn=new H,$n=new H,$i=new H,As=new H,Rs=new H,jn=new H;function Rr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),d=n.dot(jn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const wu=new dn,ji=new H,Cr=new H;class un{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Cr)),this.expandByPoint(ji.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new H,Pr=new H,Cs=new H,Ln=new H,Lr=new H,Ps=new H,Ir=new H;class _r{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pr.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Pr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Ln.dot(this.direction),l=-Ln.dot(Cs),c=Ln.lengthSq(),d=Math.abs(1-a*a);let u,h,p,f;if(d>0)if(u=a*l-o,h=a*o-l,f=r*d,u>=0)if(h>=-f)if(h<=f){const g=1/d;u*=g,h*=g,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-f?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=f?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(Cs,h),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){Lr.subVectors(t,e),Ps.subVectors(n,e),Ir.crossVectors(Lr,Ps);let a=this.direction.dot(Ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(Ps.crossVectors(Ln,Ps));if(l<0)return null;const c=o*this.direction.dot(Lr.cross(Ln));if(c<0||l+c>a)return null;const d=-o*Ln.dot(Ir);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,s,r,a,o,l,c,d,u,h,p,f,g,_){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,p,f,g,_)}set(e,t,n,s,r,a,o,l,c,d,u,h,p,f,g,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=f,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,p=a*u,f=o*d,g=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*u,f=c*d,g=c*u;t[0]=h+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-f,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*u,f=c*d,g=c*u;t[0]=h-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*d,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*u,f=o*d,g=o*u;t[0]=l*d,t[4]=f*c-p,t[8]=h*c+g,t[1]=l*u,t[5]=g*c+h,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*d,t[4]=g-h*u,t[8]=f*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+f,t[10]=h-g*u}else if(e.order==="XZY"){const h=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+g,t[5]=a*d,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*d,t[10]=g*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Ru)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),In.crossVectors(n,Ot),In.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),In.crossVectors(n,Ot)),In.normalize(),Ls.crossVectors(Ot,In),s[0]=In.x,s[4]=Ls.x,s[8]=Ot.x,s[1]=In.y,s[5]=Ls.y,s[9]=Ot.y,s[2]=In.z,s[6]=Ls.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],f=n[2],g=n[6],_=n[10],m=n[14],x=n[3],v=n[7],S=n[11],T=n[15],A=s[0],w=s[4],C=s[8],M=s[12],y=s[1],R=s[5],D=s[9],I=s[13],U=s[2],B=s[6],F=s[10],N=s[14],L=s[3],Y=s[7],te=s[11],ae=s[15];return r[0]=a*A+o*y+l*U+c*L,r[4]=a*w+o*R+l*B+c*Y,r[8]=a*C+o*D+l*F+c*te,r[12]=a*M+o*I+l*N+c*ae,r[1]=d*A+u*y+h*U+p*L,r[5]=d*w+u*R+h*B+p*Y,r[9]=d*C+u*D+h*F+p*te,r[13]=d*M+u*I+h*N+p*ae,r[2]=f*A+g*y+_*U+m*L,r[6]=f*w+g*R+_*B+m*Y,r[10]=f*C+g*D+_*F+m*te,r[14]=f*M+g*I+_*N+m*ae,r[3]=x*A+v*y+S*U+T*L,r[7]=x*w+v*R+S*B+T*Y,r[11]=x*C+v*D+S*F+T*te,r[15]=x*M+v*I+S*N+T*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],f=e[3],g=e[7],_=e[11],m=e[15];return f*(+r*l*u-s*c*u-r*o*h+n*c*h+s*o*p-n*l*p)+g*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+_*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*d-n*c*d)+m*(-s*o*d-t*l*u+t*o*h+s*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],f=e[12],g=e[13],_=e[14],m=e[15],x=u*_*c-g*h*c+g*l*p-o*_*p-u*l*m+o*h*m,v=f*h*c-d*_*c-f*l*p+a*_*p+d*l*m-a*h*m,S=d*g*c-f*u*c+f*o*p-a*g*p-d*o*m+a*u*m,T=f*u*l-d*g*l-f*o*h+a*g*h+d*o*_-a*u*_,A=t*x+n*v+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(g*h*r-u*_*r-g*s*p+n*_*p+u*s*m-n*h*m)*w,e[2]=(o*_*r-g*l*r+g*s*c-n*_*c-o*s*m+n*l*m)*w,e[3]=(u*l*r-o*h*r-u*s*c+n*h*c+o*s*p-n*l*p)*w,e[4]=v*w,e[5]=(d*_*r-f*h*r+f*s*p-t*_*p-d*s*m+t*h*m)*w,e[6]=(f*l*r-a*_*r-f*s*c+t*_*c+a*s*m-t*l*m)*w,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*p+t*l*p)*w,e[8]=S*w,e[9]=(f*u*r-d*g*r-f*n*p+t*g*p+d*n*m-t*u*m)*w,e[10]=(a*g*r-f*o*r+f*n*c-t*g*c-a*n*m+t*o*m)*w,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=T*w,e[13]=(d*g*s-f*u*s+f*n*h-t*g*h-d*n*_+t*u*_)*w,e[14]=(f*o*s-a*g*s-f*n*l+t*g*l+a*n*_-t*o*_)*w,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,f=r*u,g=a*d,_=a*u,m=o*u,x=l*c,v=l*d,S=l*u,T=n.x,A=n.y,w=n.z;return s[0]=(1-(g+m))*T,s[1]=(p+S)*T,s[2]=(f-v)*T,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(h+m))*A,s[6]=(_+x)*A,s[7]=0,s[8]=(f+v)*w,s[9]=(_-x)*w,s[10]=(1-(h+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const c=1/r,d=1/a,u=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=bn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let p,f;if(o===bn)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===ur)p=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(a-r),h=(t+e)*c,p=(n+s)*d;let f,g;if(o===bn)f=(a+r)*u,g=-2*u;else if(o===ur)f=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new H,Zt=new Ue,Au=new H(0,0,0),Ru=new H(1,1,1),In=new H,Ls=new H,Ot=new H,Jo=new Ue,Qo=new Xn;class cn{constructor(e=0,t=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cu=0;const el=new H,vi=new Xn,_n=new Ue,Is=new H,Ki=new H,Pu=new H,Lu=new Xn,tl=new H(1,0,0),nl=new H(0,1,0),il=new H(0,0,1),sl={type:"added"},Iu={type:"removed"},xi={type:"childadded",child:null},Dr={type:"childremoved",child:null};class ct extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new H,t=new cn,n=new Xn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ki,Is,this.up):_n.lookAt(Is,Ki,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iu),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new H(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new H,vn=new H,Nr=new H,xn=new H,Si=new H,yi=new H,rl=new H,Ur=new H,Or=new H,Fr=new H,Br=new Ze,zr=new Ze,kr=new Ze;class en{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),vn.subVectors(n,t),Nr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(vn),l=Jt.dot(Nr),c=vn.dot(vn),d=vn.dot(Nr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(c*l-o*d)*h,f=(a*d-o*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Br.setScalar(0),zr.setScalar(0),kr.setScalar(0),Br.fromBufferAttribute(e,t),zr.fromBufferAttribute(e,n),kr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Br,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),vn.subVectors(e,t),Jt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),yi.subVectors(r,n),Ur.subVectors(e,n);const l=Si.dot(Ur),c=yi.dot(Ur);if(l<=0&&c<=0)return t.copy(n);Or.subVectors(e,s);const d=Si.dot(Or),u=yi.dot(Or);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Si,a);Fr.subVectors(e,r);const p=Si.dot(Fr),f=yi.dot(Fr);if(f>=0&&p<=f)return t.copy(r);const g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(yi,o);const _=d*f-p*u;if(_<=0&&u-d>=0&&p-f>=0)return rl.subVectors(r,s),o=(u-d)/(u-d+(p-f)),t.copy(s).addScaledVector(rl,o);const m=1/(_+g+h);return a=g*m,o=h*m,t.copy(n).addScaledVector(Si,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=mo(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hr(a,r,e+1/3),this.g=Hr(a,r,e),this.b=Hr(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Xe.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Ve(Tt.r*255,0,255))*65536+Math.round(Ve(Tt.g*255,0,255))*256+Math.round(Ve(Tt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=St){Xe.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ds);const n=ls(Dn.h,Ds.h,t),s=ls(Dn.s,Ds.s,t),r=ls(Dn.l,Ds.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Le;Le.NAMES=Cc;let Du=0;class sn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=Ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=pa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new H,Ns=new Ye;let Nu=0;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Pc extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lc extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uu=0;const Wt=new Ue,Vr=new ct,Mi=new H,Ft=new dn,Zi=new dn,gt=new H;class fn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wc(e)?Lc:Pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new An(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ft.min,Zi.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,Zi.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(Zi.min),Ft.expandByPoint(Zi.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)gt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),gt.add(Mi)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new H,l[C]=new H;const c=new H,d=new H,u=new H,h=new Ye,p=new Ye,f=new Ye,g=new H,_=new H;function m(C,M,y){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),f.fromBufferAttribute(r,y),d.sub(c),u.sub(c),p.sub(h),f.sub(h);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(g.copy(d).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(R),_.copy(u).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(R),o[C].add(g),o[M].add(g),o[y].add(g),l[C].add(_),l[M].add(_),l[y].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){const y=x[C],R=y.start,D=y.count;for(let I=R,U=R+D;I<U;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new H,S=new H,T=new H,A=new H;function w(C){T.fromBufferAttribute(s,C),A.copy(T);const M=o[C];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(A,M);const R=S.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,R)}for(let C=0,M=x.length;C<M;++C){const y=x[C],R=y.start,D=y.count;for(let I=R,U=R+D;I<U;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,d=new H,u=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const f=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),o.add(d),l.add(d),c.add(d),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let p=0,f=0;for(let g=0,_=l.length;g<_;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let m=0;m<d;m++)h[f++]=c[p++]}return new Pt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new Ue,Kn=new _r,Us=new un,ol=new H,Os=new H,Fs=new H,Bs=new H,Gr=new H,zs=new H,ll=new H,ks=new H;class Dt extends ct{constructor(e=new fn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Gr.fromBufferAttribute(u,e),a?zs.addScaledVector(Gr,d):zs.addScaledVector(Gr.sub(t),d))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Us.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Us,ol)===null||Kn.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(al.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(al),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[_.materialIndex],x=Math.max(_.start,p.start),v=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){const A=o.getX(S),w=o.getX(S+1),C=o.getX(S+2);s=Hs(this,m,e,n,c,d,u,A,w,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let _=f,m=g;_<m;_+=3){const x=o.getX(_),v=o.getX(_+1),S=o.getX(_+2);s=Hs(this,a,e,n,c,d,u,x,v,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[_.materialIndex],x=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){const A=S,w=S+1,C=S+2;s=Hs(this,m,e,n,c,d,u,A,w,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let _=f,m=g;_<m;_+=3){const x=_,v=_+1,S=_+2;s=Hs(this,a,e,n,c,d,u,x,v,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Ou(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Rn,o),l===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:i}}function Hs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,Fs),i.getVertexPosition(c,Bs);const d=Ou(i,e,t,n,Os,Fs,Bs,ll);if(d){const u=new H;en.getBarycoord(ll,Os,Fs,Bs,u),s&&(d.uv=en.getInterpolatedAttribute(s,o,l,c,u,new Ye)),r&&(d.uv1=en.getInterpolatedAttribute(r,o,l,c,u,new Ye)),a&&(d.normal=en.getInterpolatedAttribute(a,o,l,c,u,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};en.getNormal(Os,Fs,Bs,h.normal),d.face=h,d.barycoord=u}return d}class Ss extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,p=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(d,3)),this.setAttribute("uv",new An(u,2));function f(g,_,m,x,v,S,T,A,w,C,M){const y=S/w,R=T/C,D=S/2,I=T/2,U=A/2,B=w+1,F=C+1;let N=0,L=0;const Y=new H;for(let te=0;te<F;te++){const ae=te*R-I;for(let Se=0;Se<B;Se++){const ke=Se*y-D;Y[g]=ke*x,Y[_]=ae*v,Y[m]=U,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[_]=0,Y[m]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),u.push(Se/w),u.push(1-te/C),N+=1}}for(let te=0;te<C;te++)for(let ae=0;ae<w;ae++){const Se=h+ae+B*te,ke=h+ae+B*(te+1),J=h+(ae+1)+B*(te+1),V=h+(ae+1)+B*te;l.push(Se,ke,V),l.push(ke,J,V),L+=6}o.addGroup(p,L,M),p+=L,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const s in n)e[s]=n[s]}return e}function Fu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Bu={clone:Oi,merge:At};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dc extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new H,cl=new Ye,dl=new Ye;class Rt extends Dc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,cl,dl),t.subVectors(dl,cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class Hu extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rt(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const r=new Rt(Ei,Ti,e,t);r.layers=this.layers,this.add(r);const a=new Rt(Ei,Ti,e,t);a.layers=this.layers,this.add(a);const o=new Rt(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const l=new Rt(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const c=new Rt(Ei,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Nc extends _t{constructor(e=[],t=Ii,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vu extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ss(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Vn});r.uniforms.tEquirect.value=t;const a=new Dt(s,r),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=kt),new Hu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class zn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),m=this._getHandJoint(c,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _o{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new _o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wu extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new H;class vo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ul=new H,fl=new Ze,hl=new Ze,Yu=new H,pl=new Ue,Vs=new H,Xr=new un,ml=new Ue,Yr=new _r;class qu extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ho,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vs),this.boundingBox.expandByPoint(Vs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vs),this.boundingSphere.expandByPoint(Vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(s),e.ray.intersectsSphere(Xr)!==!1&&(ml.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(ml),!(this.boundingBox!==null&&Yr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ho?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;fl.fromBufferAttribute(s.attributes.skinIndex,e),hl.fromBufferAttribute(s.attributes.skinWeight,e),ul.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=hl.getComponent(r);if(a!==0){const o=fl.getComponent(r);pl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yu.copy(ul).applyMatrix4(pl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uc extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oc extends _t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,d=Ct,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gl=new Ue,$u=new Ue;class xo{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:$u;gl.multiplyMatrices(o,t[r]),gl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oc(t,e,e,qt,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Uc),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ja extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bi=new Ue,_l=new Ue,Gs=[],vl=new dn,ju=new Ue,Ji=new Dt,Qi=new un;class Ku extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ju)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),vl.copy(e.boundingBox).applyMatrix4(bi),this.boundingBox.union(vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),Qi.copy(e.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),_l.multiplyMatrices(n,bi),Ji.matrixWorld=_l,Ji.raycast(e,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=r,l.object=this,t.push(l)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(s*this.count),s,this.count,uo,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qr=new H,Zu=new H,Ju=new Ne;class ti{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qr.subVectors(n,t).cross(Zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ju.getNormalMatrix(e),s=this.coplanarPoint(qr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new un,Ws=new H;class So{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],p=s[8],f=s[9],g=s[10],_=s[11],m=s[12],x=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,h-c,_-p,S-m).normalize(),n[1].setComponents(l+r,h+c,_+p,S+m).normalize(),n[2].setComponents(l+a,h+d,_+f,S+x).normalize(),n[3].setComponents(l-a,h-d,_-f,S-x).normalize(),n[4].setComponents(l-o,h-u,_-g,S-v).normalize(),t===bn)n[5].setComponents(l+o,h+u,_+g,S+v).normalize();else if(t===ur)n[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ws.x=s.normal.x>0?e.max.x:e.min.x,Ws.y=s.normal.y>0?e.max.y:e.min.y,Ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fc extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new H,hr=new H,xl=new Ue,es=new _r,Xs=new un,$r=new H,Sl=new H;class yo extends ct{constructor(e=new fn,t=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fr.fromBufferAttribute(t,s-1),hr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fr.distanceTo(hr);e.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;xl.copy(s).invert(),es.copy(e.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=p,_=f-1;g<_;g+=c){const m=d.getX(g),x=d.getX(g+1),v=Ys(this,e,es,l,m,x,g);v&&t.push(v)}if(this.isLineLoop){const g=d.getX(f-1),_=d.getX(p),m=Ys(this,e,es,l,g,_,f-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=p,_=f-1;g<_;g+=c){const m=Ys(this,e,es,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Ys(this,e,es,l,f-1,p,f-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ys(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(fr.fromBufferAttribute(o,s),hr.fromBufferAttribute(o,r),t.distanceSqToSegment(fr,hr,$r,Sl)>n)return;$r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($r);if(!(c<e.near||c>e.far))return{distance:c,point:Sl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const yl=new H,Ml=new H;class Qu extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yl.fromBufferAttribute(t,s),Ml.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yl.distanceTo(Ml);e.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends yo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bc extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const El=new Ue,Qa=new _r,qs=new un,$s=new H;class tf extends ct{constructor(e=new fn,t=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,e.ray.intersectsSphere(qs)===!1)return;El.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=h,g=p;f<g;f++){const _=c.getX(f);$s.fromBufferAttribute(u,_),Tl($s,_,l,s,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=h,g=p;f<g;f++)$s.fromBufferAttribute(u,f),Tl($s,f,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tl(i,e,t,n,s,r,a){const o=Qa.distanceSqToPoint(i);if(o<t){const l=new H;Qa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zc extends _t{constructor(e,t,n=oi,s,r,a,o=Ct,l=Ct,c,d=hs){if(d!==hs&&d!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ys extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,p=[],f=[],g=[],_=[];for(let m=0;m<d;m++){const x=m*h-a;for(let v=0;v<c;v++){const S=v*u-r;f.push(S,-x,0),g.push(0,0,1),_.push(v/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const v=x+c*m,S=x+c*(m+1),T=x+1+c*(m+1),A=x+1+c*m;p.push(v,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new An(f,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class nf extends sn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Mo extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hn extends Mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sf extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rf extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function of(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function bl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function kc(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ms{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lf extends Ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vo,endingEnd:Vo}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Go:r=e,o=2*t-n;break;case Wo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Go:a=e,l=2*n-t;break;case Wo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(n-t)/(s-t),g=f*f,_=g*f,m=-h*_+2*h*g-h*f,x=(1+h)*_+(-1.5-2*h)*g+(-.5+h)*f+1,v=(-1-p)*_+(1.5+p)*g+.5*f,S=p*_-p*g;for(let T=0;T!==o;++T)r[T]=m*a[d+T]+x*a[c+T]+v*a[l+T]+S*a[u+T];return r}}class cf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}}class df extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class rn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Tr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Tr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&af(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,h=u-n,p=u+n;for(let f=0;f!==n;++f){const g=t[u+f];if(g!==t[h+f]||g!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=gs;class Vi extends rn{constructor(e,t,n){super(e,t,n)}}Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ms;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hc extends rn{constructor(e,t,n,s){super(e,t,n,s)}}Hc.prototype.ValueTypeName="color";class Fi extends rn{constructor(e,t,n,s){super(e,t,n,s)}}Fi.prototype.ValueTypeName="number";class uf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let d=c+o;c!==d;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Bi extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uf(this.times,this.values,this.getValueSize(),e)}}Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends rn{constructor(e,t,n){super(e,t,n)}}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ms;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends rn{constructor(e,t,n,s){super(e,t,n,s)}}zi.prototype.ValueTypeName="vector";class ff{constructor(e="",t=-1,n=[],s=Hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(pf(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=of(l);l=bl(l,1,d),c=bl(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,p,f,g){if(p.length!==0){const _=[],m=[];kc(p,_,m,f),_.length!==0&&g.push(new u(h,_,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let g=0;g<h[f].morphTargets.length;g++)p[h[f].morphTargets[g]]=-1;for(const g in p){const _=[],m=[];for(let x=0;x!==h[f].morphTargets.length;++x){const v=h[f];_.push(v.time),m.push(v.morphTarget===g?1:0)}s.push(new Fi(".morphTargetInfluence["+g+"]",_,m))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(zi,p+".position",h,"pos",s),n(Bi,p+".quaternion",h,"rot",s),n(zi,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return Hc;case"quaternion":return Bi;case"bool":case"boolean":return Vi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function pf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hf(i.type);if(i.times===void 0){const t=[],n=[];kc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return f}return null}}}const gf=new mf;class Wi{constructor(e){this.manager=e!==void 0?e:gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class _f extends Error{constructor(e,t){super(e),this.response=t}}class Vc extends Wi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=kn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:s});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Sn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,f=p!==0;let g=0;const _=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let A=0,w=d.length;A<w;A++){const C=d[A];C.onProgress&&C.onProgress(T)}m.enqueue(S),x()}},v=>{m.error(v)})}}});return new Response(_)}else throw new _f(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{kn.add(e,c);const d=Sn[e];delete Sn[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=Sn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Sn[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vf extends Wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=_s("img");function l(){d(),kn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class xf extends Wi{constructor(e){super(e)}load(e,t,n,s){const r=new _t,a=new vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class vr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jr=new Ue,wl=new H,Al=new H;class Eo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sf extends Eo{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ui*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yf extends vr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rl=new Ue,ts=new H,Kr=new H;class Mf extends Eo{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),Kr.copy(n.position),Kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kr),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Gc extends vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class To extends Dc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ef extends Eo{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wc extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tf extends vr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bf extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return kn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),kn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(e,l),r.manager.itemStart(e)}}class wf extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bo="\\[\\]\\.:\\/",Af=new RegExp("["+bo+"]","g"),wo="[^"+bo+"]",Rf="[^"+bo.replace("\\.","")+"]",Cf=/((?:WC+[\/:])*)/.source.replace("WC",wo),Pf=/(WCOD+)?/.source.replace("WCOD",Rf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),If=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),Df=new RegExp("^"+Cf+Pf+Lf+If+"$"),Nf=["material","materials","bones","map"];class Uf{constructor(e,t,n){const s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(e){const t=Df.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Uf;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Cl(i,e,t,n){const s=Of(n);switch(t){case xc:return i*e;case uo:return i*e/s.components*s.byteLength;case fo:return i*e/s.components*s.byteLength;case yc:return i*e*2/s.components*s.byteLength;case ho:return i*e*2/s.components*s.byteLength;case Sc:return i*e*3/s.components*s.byteLength;case qt:return i*e*4/s.components*s.byteLength;case po:return i*e*4/s.components*s.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:case Aa:return Math.max(i,16)*Math.max(e,8)/4;case Ta:case wa:return Math.max(i,8)*Math.max(e,8)/2;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rr:case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Of(i){switch(i){case ln:case gc:return{byteLength:1,components:1};case us:case _c:case xs:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case oi:case oo:case tn:return{byteLength:4,components:1};case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ff(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<u.length;p++){const f=u[h],g=u[p];g.start<=f.start+f.count+1?f.count=Math.max(f.count,g.start+g.count-f.start):(++h,u[h]=g)}u.length=h+1;for(let p=0,f=u.length;p<f;p++){const g=u[p];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oh=`#define PI 3.141592653589793
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
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ch=`vec3 transformedNormal = objectNormal;
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
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
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
}`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
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
#endif`,Oh=`struct PhysicalMaterial {
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
}`,Fh=`
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,$h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,dm=`#define TOON
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
}`,um=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Gf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:Yf,batching_vertex:qf,begin_vertex:$f,beginnormal_vertex:jf,bsdfs:Kf,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:sh,color_pars_vertex:rh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:dh,displacementmap_vertex:uh,emissivemap_fragment:fh,emissivemap_pars_fragment:hh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ph,envmap_vertex:Sh,fog_vertex:yh,fog_pars_vertex:Mh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_pars_fragment:wh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ch,lights_toon_fragment:Lh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Dh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Fh,lights_fragment_maps:Bh,lights_fragment_end:zh,logdepthbuf_fragment:kh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Gh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:Yh,map_particle_pars_fragment:qh,metalnessmap_fragment:$h,metalnessmap_pars_fragment:jh,morphinstance_vertex:Kh,morphcolor_vertex:Zh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:dp,opaque_fragment:up,packing:fp,premultiplied_alpha_fragment:hp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Sp,shadowmap_vertex:yp,shadowmask_pars_fragment:Mp,skinbase_vertex:Ep,skinning_pars_vertex:Tp,skinning_vertex:bp,skinnormal_vertex:wp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Ip,uv_pars_fragment:Dp,uv_pars_vertex:Np,uv_vertex:Up,worldpos_vertex:Op,background_vert:Fp,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:kp,cube_vert:Hp,cube_frag:Vp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:Yp,equirect_vert:qp,equirect_frag:$p,linedashed_vert:jp,linedashed_frag:Kp,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:Qp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:dm,points_vert:um,points_frag:fm,shadow_vert:hm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},an={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};an.physical={uniforms:At([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ks={r:0,b:0,g:0},Jn=new cn,_m=new Ue;function vm(i,e,t,n,s,r,a){const o=new Le(0);let l=r===!0?0:1,c,d,u=null,h=0,p=null;function f(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?t:e).get(S)),S}function g(v){let S=!1;const T=f(v);T===null?m(o,l):T&&T.isColor&&(m(T,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){const T=f(S);T&&(T.isCubeTexture||T.mapping===gr)?(d===void 0&&(d=new Dt(new Ss(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Oi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Jn.copy(S.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Jn)),d.material.toneMapped=Xe.getTransfer(T.colorSpace)!==st,(u!==T||h!==T.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=T,h=T.version,p=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Dt(new ys(2,2),new Wn({name:"BackgroundMaterial",uniforms:Oi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||h!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,h=T.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(Ks,Ic(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,S,a)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:g,addToRenderList:_,dispose:x}}function xm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(y,R,D,I,U){let B=!1;const F=u(I,D,R);r!==F&&(r=F,c(r.object)),B=p(y,I,D,U),B&&f(y,I,D,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(y,R,D,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function u(y,R,D){const I=D.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let B=U[R.id];B===void 0&&(B={},U[R.id]=B);let F=B[I];return F===void 0&&(F=h(l()),B[I]=F),F}function h(y){const R=[],D=[],I=[];for(let U=0;U<t;U++)R[U]=0,D[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,R,D,I){const U=r.attributes,B=R.attributes;let F=0;const N=D.getAttributes();for(const L in N)if(N[L].location>=0){const te=U[L];let ae=B[L];if(ae===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function f(y,R,D,I){const U={},B=R.attributes;let F=0;const N=D.getAttributes();for(const L in N)if(N[L].location>=0){let te=B[L];te===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),U[L]=ae,F++}r.attributes=U,r.attributesNum=F,r.index=I}function g(){const y=r.newAttributes;for(let R=0,D=y.length;R<D;R++)y[R]=0}function _(y){m(y,0)}function m(y,R){const D=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;D[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),U[y]!==R&&(i.vertexAttribDivisor(y,R),U[y]=R)}function x(){const y=r.newAttributes,R=r.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==y[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function v(y,R,D,I,U,B,F){F===!0?i.vertexAttribIPointer(y,R,D,U,B):i.vertexAttribPointer(y,R,D,I,U,B)}function S(y,R,D,I){g();const U=I.attributes,B=D.getAttributes(),F=R.defaultAttributeValues;for(const N in B){const L=B[N];if(L.location>=0){let Y=U[N];if(Y===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const te=Y.normalized,ae=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const ke=Se.buffer,J=Se.type,V=Se.bytesPerElement,W=J===i.INT||J===i.UNSIGNED_INT||Y.gpuType===oo;if(Y.isInterleavedBufferAttribute){const X=Y.data,re=X.stride,be=Y.offset;if(X.isInstancedInterleavedBuffer){for(let ye=0;ye<L.locationSize;ye++)m(L.location+ye,X.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ye=0;ye<L.locationSize;ye++)_(L.location+ye);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ye=0;ye<L.locationSize;ye++)v(L.location+ye,ae/L.locationSize,J,te,re*V,(be+ae/L.locationSize*ye)*V,W)}else{if(Y.isInstancedBufferAttribute){for(let X=0;X<L.locationSize;X++)m(L.location+X,Y.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let X=0;X<L.locationSize;X++)_(L.location+X);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let X=0;X<L.locationSize;X++)v(L.location+X,ae/L.locationSize,J,te,ae*V,ae/L.locationSize*X*V,W)}}else if(F!==void 0){const te=F[N];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(L.location,te);break;case 3:i.vertexAttrib3fv(L.location,te);break;case 4:i.vertexAttrib4fv(L.location,te);break;default:i.vertexAttrib1fv(L.location,te)}}}}x()}function T(){C();for(const y in n){const R=n[y];for(const D in R){const I=R[D];for(const U in I)d(I[U].object),delete I[U];delete R[D]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const D in R){const I=R[D];for(const U in I)d(I[U].object),delete I[U];delete R[D]}delete n[y.id]}function w(y){for(const R in n){const D=n[R];if(D[y.id]===void 0)continue;const I=D[y.id];for(const U in I)d(I[U].object),delete I[U];delete D[y.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function Sm(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let f=0;f<u;f++)p+=d[f];t.update(p,n,1)}function l(c,d,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)a(c[f],d[f],h[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g]*h[g];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ym(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:T,maxSamples:A}}function Mm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ti,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||s;return s=h,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const f=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,m=i.get(u);if(!s||f===null||f.length===0||r&&!_)r?d(null):c();else{const x=r?0:n,v=x*4;let S=m.clippingState||null;l.value=S,S=d(f,h,v,p);for(let T=0;T!==v;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,f){const g=u!==null?u.length:0;let _=null;if(g!==0){if(_=l.value,f!==!0||_===null){const m=p+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,S=p;v!==g;++v,S+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Em(i){let e=new WeakMap;function t(a,o){return o===Ma?a.mapping=Ii:o===Ea&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ma||o===Ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ai=4,Pl=[.125,.215,.35,.446,.526,.582],si=20,Zr=new To,Ll=new Le;let Jr=null,Qr=0,ea=0,ta=!1;const ni=(1+Math.sqrt(5))/2,wi=1/ni,Il=[new H(-ni,wi,0),new H(ni,wi,0),new H(-wi,0,ni),new H(wi,0,ni),new H(0,ni,-wi),new H(0,ni,wi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Tm=new H;class Dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tm}=r;Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:xs,format:qt,colorSpace:Lt,depthBuffer:!1},s=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=wm(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,s,r){const l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Ll),u.toneMapping=Gn,u.autoClear=!1;const f=new ri({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Dt(new Ss,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ll),_=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[x]));const S=this._cubeSize;Zs(s,v*S,x>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ii||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Il[(s-r-1)%Il.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Dt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),g=r/f,_=isFinite(r)?1+Math.floor(d*g):si;_>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${si}`);const m=[];let x=0;for(let w=0;w<si;++w){const C=w/g,M=Math.exp(-C*C/2);m.push(M),w===0?x+=M:w<_&&(x+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=f,h.mipInt.value=v-n;const S=this._sizeLods[s],T=3*S*(s>v-Ai?s-v+Ai:0),A=4*(this._cubeSize-S);Zs(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(u,Zr)}}function bm(i){const e=[],t=[],n=[];let s=i;const r=i-Ai+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ai?l=Pl[a-i+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,f=6,g=3,_=2,m=1,x=new Float32Array(g*f*p),v=new Float32Array(_*f*p),S=new Float32Array(m*f*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(M,g*f*A),v.set(h,_*f*A);const y=[A,A,A,A,A,A];S.set(y,m*f*A)}const T=new fn;T.setAttribute("position",new Pt(x,g)),T.setAttribute("uv",new Pt(v,_)),T.setAttribute("faceIndex",new Pt(S,m)),e.push(T),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nl(i,e,t){const n=new li(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wm(i,e,t){const n=new Float32Array(si),s=new H(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ul(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ol(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function Am(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ma||l===Ea,d=l===Ii||l===Di;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Dl(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Dl(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,f=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,S=x.length;v<S;v+=3){const T=x[v+0],A=x[v+1],w=x[v+2];h.push(T,A,A,w,w,T)}}else if(f!==void 0){const x=f.array;g=f.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const T=v+0,A=v+1,w=v+2;h.push(T,A,A,w,w,T)}}else return;const _=new(wc(h)?Lc:Pc)(h,1);_.version=g;const m=r.get(u);m&&e.remove(m),r.set(u,_)}function d(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Pm(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*a),t.update(p,n,1)}function c(h,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,h*a,f),t.update(p,n,f))}function d(h,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=p[m];t.update(_,n,1)}function u(h,p,f,g){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<h.length;m++)c(h[m]/a,p[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,g,0,f);let m=0;for(let x=0;x<f;x++)m+=p[x]*g[x];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Lm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Im(i,e,t){const n=new WeakMap,s=new Ze;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),f===!0&&(v=2),g===!0&&(v=3);let S=o.attributes.position.count*v,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*T*4*u),w=new Ac(A,S,T,u);w.type=tn,w.needsUpdate=!0;const C=v*4;for(let y=0;y<u;y++){const R=_[y],D=m[y],I=x[y],U=S*T*4*y;for(let B=0;B<R.count;B++){const F=B*C;p===!0&&(s.fromBufferAttribute(R,B),A[U+F+0]=s.x,A[U+F+1]=s.y,A[U+F+2]=s.z,A[U+F+3]=0),f===!0&&(s.fromBufferAttribute(D,B),A[U+F+4]=s.x,A[U+F+5]=s.y,A[U+F+6]=s.z,A[U+F+7]=0),g===!0&&(s.fromBufferAttribute(I,B),A[U+F+8]=s.x,A[U+F+9]=s.y,A[U+F+10]=s.z,A[U+F+11]=I.itemSize===4?s.w:1)}}h={count:u,texture:w,size:new Ye(S,T)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Dm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Yc=new _t,Fl=new zc(1,1),qc=new Ac,$c=new bu,jc=new Nc,Bl=[],zl=[],kl=new Float32Array(16),Hl=new Float32Array(9),Vl=new Float32Array(4);function Xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),mt(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),mt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),mt(t,n)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=bc,r=Fl):r=Yc,t.setTexture2D(e||r,s)}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$c,s)}function Zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jc,s)}function Jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qc,s)}function Qm(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Om;case 35666:return Fm;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return Ym;case 36295:return qm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function eg(i,e){i.uniform1fv(this.addr,e)}function tg(i,e){const t=Xi(e,this.size,2);i.uniform2fv(this.addr,t)}function ng(i,e){const t=Xi(e,this.size,3);i.uniform3fv(this.addr,t)}function ig(i,e){const t=Xi(e,this.size,4);i.uniform4fv(this.addr,t)}function sg(i,e){const t=Xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rg(i,e){const t=Xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ag(i,e){const t=Xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function og(i,e){i.uniform1iv(this.addr,e)}function lg(i,e){i.uniform2iv(this.addr,e)}function cg(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function ug(i,e){i.uniform1uiv(this.addr,e)}function fg(i,e){i.uniform2uiv(this.addr,e)}function hg(i,e){i.uniform3uiv(this.addr,e)}function pg(i,e){i.uniform4uiv(this.addr,e)}function mg(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yc,r[a])}function gg(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$c,r[a])}function _g(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jc,r[a])}function vg(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qc,r[a])}function xg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return dg;case 5125:return ug;case 36294:return fg;case 36295:return hg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}}class Mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Gl(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gl(t,c===void 0?new Sg(o,i,e):new yg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mg(o),Gl(t,u)),t=u}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Eg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tg=37297;let bg=0;function wg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xl=new Ne;function Ag(i){Xe._getMatrix(Xl,Xe.workingColorSpace,i);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),a)}else return s}function Rg(i,e){const t=Ag(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cg(i,e){let t;switch(e){case Nd:t="Linear";break;case Ud:t="Reinhard";break;case Od:t="Cineon";break;case hc:t="ACESFilmic";break;case Bd:t="AgX";break;case zd:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new H;function Pg(){Xe.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ss(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Ng,Og)}const Ug=new Map;function Og(i,e){let t=Fe[e];if(t===void 0){const n=Ug.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(Fg,Bg)}function Bg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function kg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Vg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Id:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function Gg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zg(t),c=kg(t),d=Hg(t),u=Vg(t),h=Gg(t),p=Lg(t),f=Ig(r),g=s.createProgram();let _,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ss).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ss).join(`
`),m.length>0&&(m+=`
`)):(_=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),a=eo(a),a=ql(a,t),a=$l(a,t),o=eo(o),o=ql(o,t),o=$l(o,t),a=jl(a),o=jl(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+_+a,S=x+m+o,T=Wl(s,s.VERTEX_SHADER,v),A=Wl(s,s.FRAGMENT_SHADER,S);s.attachShader(g,T),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g).trim(),I=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(A).trim();let B=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,A);else{const N=Yl(s,T,"vertex"),L=Yl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+N+`
`+L)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||U==="")&&(F=!1);F&&(R.diagnostics={runnable:B,programLog:D,vertexShader:{log:I,prefix:_},fragmentShader:{log:U,prefix:m}})}s.deleteShader(T),s.deleteShader(A),C=new or(s,g),M=Dg(s,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Tg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qg(e),t.set(e,n)),n}}class qg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function $g(i,e,t,n,s,r,a){const o=new Rc,l=new Yg,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,y,R,D,I){const U=D.fog,B=I.geometry,F=M.isMeshStandardMaterial?D.environment:null,N=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),L=N&&N.mapping===gr?N.image.height:null,Y=f[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=te!==void 0?te.length:0;let Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let ke,J,V,W;if(Y){const tt=an[Y];ke=tt.vertexShader,J=tt.fragmentShader}else ke=M.vertexShader,J=M.fragmentShader,l.update(M),V=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const X=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),be=I.isInstancedMesh===!0,ye=I.isBatchedMesh===!0,Je=!!M.map,qe=!!M.matcap,Ie=!!N,O=!!M.aoMap,at=!!M.lightMap,Be=!!M.bumpMap,ze=!!M.normalMap,ve=!!M.displacementMap,je=!!M.emissiveMap,xe=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,q=M.clearcoat>0,Q=M.dispersion>0,ne=M.iridescence>0,Z=M.sheen>0,pe=M.transmission>0,le=E&&!!M.anisotropyMap,Me=q&&!!M.clearcoatMap,we=q&&!!M.clearcoatNormalMap,ie=q&&!!M.clearcoatRoughnessMap,me=ne&&!!M.iridescenceMap,Ae=ne&&!!M.iridescenceThicknessMap,Ce=Z&&!!M.sheenColorMap,ge=Z&&!!M.sheenRoughnessMap,We=!!M.specularMap,Oe=!!M.specularColorMap,rt=!!M.specularIntensityMap,z=pe&&!!M.transmissionMap,de=pe&&!!M.thicknessMap,K=!!M.gradientMap,ee=!!M.alphaMap,fe=M.alphaTest>0,ue=!!M.alphaHash,De=!!M.extensions;let dt=Gn;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Mt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:J,defines:M.defines,customVertexShaderID:V,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ye,batchingColor:ye&&I._colorsTexture!==null,instancing:be,instancingColor:be&&I.instanceColor!==null,instancingMorph:be&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Lt,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:qe,envMap:Ie,envMapMode:Ie&&N.mapping,envMapCubeUVHeight:L,aoMap:O,lightMap:at,bumpMap:Be,normalMap:ze,displacementMap:h&&ve,emissiveMap:je,normalMapObjectSpace:ze&&M.normalMapType===Xd,normalMapTangentSpace:ze&&M.normalMapType===Tc,metalnessMap:xe,roughnessMap:P,anisotropy:E,anisotropyMap:le,clearcoat:q,clearcoatMap:Me,clearcoatNormalMap:we,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:ne,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:We,specularColorMap:Oe,specularIntensityMap:rt,transmission:pe,transmissionMap:z,thicknessMap:de,gradientMap:K,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:ue,combine:M.combine,mapUv:Je&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:at&&g(M.lightMap.channel),bumpMapUv:Be&&g(M.bumpMap.channel),normalMapUv:ze&&g(M.normalMap.channel),displacementMapUv:ve&&g(M.displacementMap.channel),emissiveMapUv:je&&g(M.emissiveMap.channel),metalnessMapUv:xe&&g(M.metalnessMap.channel),roughnessMapUv:P&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:Me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(M.sheenRoughnessMap.channel),specularMapUv:We&&g(M.specularMap.channel),specularColorMapUv:Oe&&g(M.specularColorMap.channel),specularIntensityMapUv:rt&&g(M.specularIntensityMap.channel),transmissionMapUv:z&&g(M.transmissionMap.channel),thicknessMapUv:de&&g(M.thicknessMap.channel),alphaMapUv:ee&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ze||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Je||ee),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:je&&M.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=f[M.type];let R;if(y){const D=an[y];R=Bu.clone(D.uniforms)}else R=M.uniforms;return R}function T(M,y){let R;for(let D=0,I=d.length;D<I;D++){const U=d[D];if(U.cacheKey===y){R=U,++R.usedTimes;break}}return R===void 0&&(R=new Wg(i,y,M,r),d.push(R)),R}function A(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:C}}function jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,h,p,f,g,_){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:f,renderOrder:u.renderOrder,z:g,group:_},i[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=f,m.renderOrder=u.renderOrder,m.z=g,m.group=_),e++,m}function o(u,h,p,f,g,_){const m=a(u,h,p,f,g,_);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,h,p,f,g,_){const m=a(u,h,p,f,g,_);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||Kg),n.length>1&&n.sort(h||Zl),s.length>1&&s.sort(h||Zl)}function d(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Zg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jl,i.set(n,[a])):s>=r.length?(a=new Jl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Le};break;case"SpotLight":t={position:new H,direction:new H,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let e_=0;function t_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n_(i){const e=new Jg,t=Qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new Ue,a=new Ue;function o(c){let d=0,u=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,f=0,g=0,_=0,m=0,x=0,v=0,S=0,T=0,A=0,w=0;c.sort(t_);for(let M=0,y=c.length;M<y;M++){const R=c[M],D=R.color,I=R.intensity,U=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*I,u+=D.g*I,h+=D.b*I;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],I);w++}else if(R.isDirectionalLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,L=t.get(R);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=F,p++}else if(R.isSpotLight){const F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(D).multiplyScalar(I),F.distance=U,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[g]=F;const N=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,N.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=N.matrix,R.castShadow){const L=t.get(R);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=B,S++}g++}else if(R.isRectAreaLight){const F=e.get(R);F.color.copy(D).multiplyScalar(I),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=F,_++}else if(R.isPointLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){const N=R.shadow,L=t.get(R);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,L.shadowCameraNear=N.camera.near,L.shadowCameraFar=N.camera.far,n.pointShadow[f]=L,n.pointShadowMap[f]=B,n.pointShadowMatrix[f]=R.shadow.matrix,v++}n.point[f]=F,f++}else if(R.isHemisphereLight){const F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(I),F.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[m]=F,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==p||C.pointLength!==f||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=_,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=p,C.pointLength=f,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=w,n.version=e_++)}function l(c,d){let u=0,h=0,p=0,f=0,g=0;const _=d.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(v.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const S=n.rectArea[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(v.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),f++}else if(v.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:n}}function Ql(i){const e=new n_(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function i_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ql(i),e.set(s,[o])):r>=a.length?(o=new Ql(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`;function a_(i,e,t){let n=new So;const s=new Ye,r=new Ye,a=new Ze,o=new sf({depthPacking:Wd}),l=new rf,c={},d=t.maxTextureSize,u={[Rn]:Nt,[Nt]:Rn,[on]:on},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const f=new fn;f.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Dt(f,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let m=this.type;this.render=function(A,w,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Vn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=m!==yn&&this.type===yn,U=m===yn&&this.type!==yn;for(let B=0,F=A.length;B<F;B++){const N=A[B],L=N.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const Y=L.getFrameExtents();if(s.multiply(Y),r.copy(L.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,L.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,L.mapSize.y=r.y)),L.map===null||I===!0||U===!0){const ae=this.type!==yn?{minFilter:Ct,magFilter:Ct}:{};L.map!==null&&L.map.dispose(),L.map=new li(s.x,s.y,ae),L.map.texture.name=N.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const te=L.getViewportCount();for(let ae=0;ae<te;ae++){const Se=L.getViewport(ae);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),D.viewport(a),L.updateMatrices(N,ae),n=L.getFrustum(),S(w,C,L.camera,N,this.type)}L.isPointLightShadow!==!0&&this.type===yn&&x(L,C),L.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(M,y,R)};function x(A,w){const C=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,p,g,null)}function v(A,w,C,M){let y=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=y.uuid,I=w.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let B=U[I];B===void 0&&(B=y.clone(),U[I]=B,w.addEventListener("dispose",T)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,M===yn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=C}return y}function S(A,w,C,M,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const I=e.update(A),U=A.material;if(Array.isArray(U)){const B=I.groups;for(let F=0,N=B.length;F<N;F++){const L=B[F],Y=U[L.materialIndex];if(Y&&Y.visible){const te=v(A,Y,M,y);A.onBeforeShadow(i,A,w,C,I,te,L),i.renderBufferDirect(C,null,I,te,A,L),A.onAfterShadow(i,A,w,C,I,te,L)}}}else if(U.visible){const B=v(A,U,M,y);A.onBeforeShadow(i,A,w,C,I,B,null),i.renderBufferDirect(C,null,I,B,A,null),A.onAfterShadow(i,A,w,C,I,B,null)}}const D=A.children;for(let I=0,U=D.length;I<U;I++)S(D[I],w,C,M,y)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const M=c[C],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const o_={[ma]:ga,[_a]:Sa,[va]:ya,[Li]:xa,[ga]:ma,[Sa]:_a,[ya]:va,[xa]:Li};function l_(i,e){function t(){let z=!1;const de=new Ze;let K=null;const ee=new Ze(0,0,0,0);return{setMask:function(fe){K!==fe&&!z&&(i.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){z=fe},setClear:function(fe,ue,De,dt,Mt){Mt===!0&&(fe*=dt,ue*=dt,De*=dt),de.set(fe,ue,De,dt),ee.equals(de)===!1&&(i.clearColor(fe,ue,De,dt),ee.copy(de))},reset:function(){z=!1,K=null,ee.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,K=null,ee=null,fe=null;return{setReversed:function(ue){if(de!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),de=ue;const dt=fe;fe=null,this.setClear(dt)}},getReversed:function(){return de},setTest:function(ue){ue?X(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(ue){K!==ue&&!z&&(i.depthMask(ue),K=ue)},setFunc:function(ue){if(de&&(ue=o_[ue]),ee!==ue){switch(ue){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ue}},setLocked:function(ue){z=ue},setClear:function(ue){fe!==ue&&(de&&(ue=1-ue),i.clearDepth(ue),fe=ue)},reset:function(){z=!1,K=null,ee=null,fe=null,de=!1}}}function s(){let z=!1,de=null,K=null,ee=null,fe=null,ue=null,De=null,dt=null,Mt=null;return{setTest:function(tt){z||(tt?X(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(tt){de!==tt&&!z&&(i.stencilMask(tt),de=tt)},setFunc:function(tt,$t,pn){(K!==tt||ee!==$t||fe!==pn)&&(i.stencilFunc(tt,$t,pn),K=tt,ee=$t,fe=pn)},setOp:function(tt,$t,pn){(ue!==tt||De!==$t||dt!==pn)&&(i.stencilOp(tt,$t,pn),ue=tt,De=$t,dt=pn)},setLocked:function(tt){z=tt},setClear:function(tt){Mt!==tt&&(i.clearStencil(tt),Mt=tt)},reset:function(){z=!1,de=null,K=null,ee=null,fe=null,ue=null,De=null,dt=null,Mt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],f=null,g=!1,_=null,m=null,x=null,v=null,S=null,T=null,A=null,w=new Le(0,0,0),C=0,M=!1,y=null,R=null,D=null,I=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,N=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=N>=1):L.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=N>=2);let Y=null,te={};const ae=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),ke=new Ze().fromArray(ae),J=new Ze().fromArray(Se);function V(z,de,K,ee){const fe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(z,ue),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<K;De++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(de+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ue}const W={};W[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(Li),Be(!1),ze(Fo),X(i.CULL_FACE),O(Vn);function X(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function re(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function be(z,de){return u[z]!==de?(i.bindFramebuffer(z,de),u[z]=de,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(z,de){let K=p,ee=!1;if(z){K=h.get(de),K===void 0&&(K=[],h.set(de,K));const fe=z.textures;if(K.length!==fe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,De=fe.length;ue<De;ue++)K[ue]=i.COLOR_ATTACHMENT0+ue;K.length=fe.length,ee=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ee=!0);ee&&i.drawBuffers(K)}function Je(z){return f!==z?(i.useProgram(z),f=z,!0):!1}const qe={[ii]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};qe[_d]=i.MIN,qe[vd]=i.MAX;const Ie={[xd]:i.ZERO,[Sd]:i.ONE,[yd]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[bd]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function O(z,de,K,ee,fe,ue,De,dt,Mt,tt){if(z===Vn){g===!0&&(re(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),z!==pd){if(z!==_||tt!==M){if((m!==ii||S!==ii)&&(i.blendEquation(i.FUNC_ADD),m=ii,S=ii),tt)switch(z){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,v=null,T=null,A=null,w.set(0,0,0),C=0,_=z,M=tt}return}fe=fe||de,ue=ue||K,De=De||ee,(de!==m||fe!==S)&&(i.blendEquationSeparate(qe[de],qe[fe]),m=de,S=fe),(K!==x||ee!==v||ue!==T||De!==A)&&(i.blendFuncSeparate(Ie[K],Ie[ee],Ie[ue],Ie[De]),x=K,v=ee,T=ue,A=De),(dt.equals(w)===!1||Mt!==C)&&(i.blendColor(dt.r,dt.g,dt.b,Mt),w.copy(dt),C=Mt),_=z,M=!1}function at(z,de){z.side===on?re(i.CULL_FACE):X(i.CULL_FACE);let K=z.side===Nt;de&&(K=!K),Be(K),z.blending===Ri&&z.transparent===!1?O(Vn):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ee=z.stencilWrite;o.setTest(ee),ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),je(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function ze(z){z!==ud?(X(i.CULL_FACE),z!==R&&(z===Fo?i.cullFace(i.BACK):z===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),R=z}function ve(z){z!==D&&(F&&i.lineWidth(z),D=z)}function je(z,de,K){z?(X(i.POLYGON_OFFSET_FILL),(I!==de||U!==K)&&(i.polygonOffset(de,K),I=de,U=K)):re(i.POLYGON_OFFSET_FILL)}function xe(z){z?X(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+B-1),Y!==z&&(i.activeTexture(z),Y=z)}function E(z,de,K){K===void 0&&(Y===null?K=i.TEXTURE0+B-1:K=Y);let ee=te[K];ee===void 0&&(ee={type:void 0,texture:void 0},te[K]=ee),(ee.type!==z||ee.texture!==de)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(z,de||W[z]),ee.type=z,ee.texture=de)}function q(){const z=te[Y];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){ke.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function ge(z){J.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function We(z,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let ee=K.get(z);ee===void 0&&(ee=i.getUniformBlockIndex(de,z.name),K.set(z,ee))}function Oe(z,de){const ee=c.get(de).get(z);l.get(de)!==ee&&(i.uniformBlockBinding(de,ee,z.__bindingPointIndex),l.set(de,ee))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Y=null,te={},u={},h=new WeakMap,p=[],f=null,g=!1,_=null,m=null,x=null,v=null,S=null,T=null,A=null,w=new Le(0,0,0),C=0,M=!1,y=null,R=null,D=null,I=null,U=null,ke.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:re,bindFramebuffer:be,drawBuffers:ye,useProgram:Je,setBlending:O,setMaterial:at,setFlipSided:Be,setCullFace:ze,setLineWidth:ve,setPolygonOffset:je,setScissorTest:xe,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:me,texImage3D:Ae,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:we,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:Me,scissor:Ce,viewport:ge,reset:rt}}function c_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,E){return p?new OffscreenCanvas(P,E):_s("canvas")}function g(P,E,q){let Q=1;const ne=xe(P);if((ne.width>q||ne.height>q)&&(Q=q/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(Q*ne.width),pe=Math.floor(Q*ne.height);u===void 0&&(u=f(Z,pe));const le=E?f(Z,pe):u;return le.width=Z,le.height=pe,le.getContext("2d").drawImage(P,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+pe+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,q,Q,ne=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=E;if(E===i.RED&&(q===i.FLOAT&&(Z=i.R32F),q===i.HALF_FLOAT&&(Z=i.R16F),q===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.R8UI),q===i.UNSIGNED_SHORT&&(Z=i.R16UI),q===i.UNSIGNED_INT&&(Z=i.R32UI),q===i.BYTE&&(Z=i.R8I),q===i.SHORT&&(Z=i.R16I),q===i.INT&&(Z=i.R32I)),E===i.RG&&(q===i.FLOAT&&(Z=i.RG32F),q===i.HALF_FLOAT&&(Z=i.RG16F),q===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RG8UI),q===i.UNSIGNED_SHORT&&(Z=i.RG16UI),q===i.UNSIGNED_INT&&(Z=i.RG32UI),q===i.BYTE&&(Z=i.RG8I),q===i.SHORT&&(Z=i.RG16I),q===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),q===i.UNSIGNED_INT&&(Z=i.RGB32UI),q===i.BYTE&&(Z=i.RGB8I),q===i.SHORT&&(Z=i.RGB16I),q===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),q===i.UNSIGNED_INT&&(Z=i.RGBA32UI),q===i.BYTE&&(Z=i.RGBA8I),q===i.SHORT&&(Z=i.RGBA16I),q===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){const pe=ne?dr:Xe.getTransfer(Q);q===i.FLOAT&&(Z=i.RGBA32F),q===i.HALF_FLOAT&&(Z=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Z=pe===st?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(P,E){let q;return P?E===null||E===oi||E===fs?q=i.DEPTH24_STENCIL8:E===tn?q=i.DEPTH32F_STENCIL8:E===us&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oi||E===fs?q=i.DEPTH_COMPONENT24:E===tn?q=i.DEPTH_COMPONENT32F:E===us&&(q=i.DEPTH_COMPONENT16),q}function T(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==kt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&d.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),y(E)}function C(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,Q=h.get(q);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(P),Object.keys(Q).length===0&&h.delete(q)}n.remove(P)}function M(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const q=P.source,Q=h.get(q);delete Q[E.__cacheKey],a.memory.textures--}function y(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let Q=0,ne=q.length;Q<ne;Q++){const Z=n.get(q[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(q[Q])}n.remove(P)}let R=0;function D(){R=0}function I(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function U(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function B(P,E){const q=n.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,P,E);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function F(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function N(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function L(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){V(q,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const Y={[Ni]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},te={[Ct]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ae={[Yd]:i.NEVER,[Jd]:i.ALWAYS,[qd]:i.LESS,[bc]:i.LEQUAL,[$d]:i.EQUAL,[Zd]:i.GEQUAL,[jd]:i.GREATER,[Kd]:i.NOTEQUAL};function Se(P,E){if(E.type===tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kt||E.magFilter===er||E.magFilter===is||E.magFilter===Tn||E.minFilter===kt||E.minFilter===er||E.minFilter===is||E.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ct||E.minFilter!==is&&E.minFilter!==Tn||E.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ke(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const Z=U(E);if(Z!==P.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[Z].usedTimes++;const pe=ne[P.__cacheKey];pe!==void 0&&(ne[P.__cacheKey].usedTimes--,pe.usedTimes===0&&M(E)),P.__cacheKey=Z,P.__webglTexture=ne[Z].texture}return q}function J(P,E,q){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=ke(P,E),Z=E.source;t.bindTexture(Q,P.__webglTexture,i.TEXTURE0+q);const pe=n.get(Z);if(Z.version!==pe.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const le=Xe.getPrimaries(Xe.workingColorSpace),Me=E.colorSpace===Fn?null:Xe.getPrimaries(E.colorSpace),we=E.colorSpace===Fn||le===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=g(E.image,!1,s.maxTextureSize);ie=je(E,ie);const me=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type);let Ce=v(E.internalFormat,me,Ae,E.colorSpace,E.isVideoTexture);Se(Q,E);let ge;const We=E.mipmaps,Oe=E.isVideoTexture!==!0,rt=pe.__version===void 0||ne===!0,z=Z.dataReady,de=T(E,ie);if(E.isDepthTexture)Ce=S(E.format===ps,E.type),rt&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Ae,null));else if(E.isDataTexture)if(We.length>0){Oe&&rt&&t.texStorage2D(i.TEXTURE_2D,de,Ce,We[0].width,We[0].height);for(let K=0,ee=We.length;K<ee;K++)ge=We[K],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(i.TEXTURE_2D,K,Ce,ge.width,ge.height,0,me,Ae,ge.data);E.generateMipmaps=!1}else Oe?(rt&&t.texStorage2D(i.TEXTURE_2D,de,Ce,ie.width,ie.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,me,Ae,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Ae,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ce,We[0].width,We[0].height,ie.depth);for(let K=0,ee=We.length;K<ee;K++)if(ge=We[K],E.format!==qt)if(me!==null)if(Oe){if(z)if(E.layerUpdates.size>0){const fe=Cl(ge.width,ge.height,E.format,E.type);for(const ue of E.layerUpdates){const De=ge.data.subarray(ue*fe/ge.data.BYTES_PER_ELEMENT,(ue+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ue,ge.width,ge.height,1,me,De)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ie.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ce,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ie.depth,me,Ae,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ce,ge.width,ge.height,ie.depth,0,me,Ae,ge.data)}else{Oe&&rt&&t.texStorage2D(i.TEXTURE_2D,de,Ce,We[0].width,We[0].height);for(let K=0,ee=We.length;K<ee;K++)ge=We[K],E.format!==qt?me!==null?Oe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(i.TEXTURE_2D,K,Ce,ge.width,ge.height,0,me,Ae,ge.data)}else if(E.isDataArrayTexture)if(Oe){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ce,ie.width,ie.height,ie.depth),z)if(E.layerUpdates.size>0){const K=Cl(ie.width,ie.height,E.format,E.type);for(const ee of E.layerUpdates){const fe=ie.data.subarray(ee*K/ie.data.BYTES_PER_ELEMENT,(ee+1)*K/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,me,Ae,fe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ae,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,me,Ae,ie.data);else if(E.isData3DTexture)Oe?(rt&&t.texStorage3D(i.TEXTURE_3D,de,Ce,ie.width,ie.height,ie.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ae,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,me,Ae,ie.data);else if(E.isFramebufferTexture){if(rt)if(Oe)t.texStorage2D(i.TEXTURE_2D,de,Ce,ie.width,ie.height);else{let K=ie.width,ee=ie.height;for(let fe=0;fe<de;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ce,K,ee,0,me,Ae,null),K>>=1,ee>>=1}}else if(We.length>0){if(Oe&&rt){const K=xe(We[0]);t.texStorage2D(i.TEXTURE_2D,de,Ce,K.width,K.height)}for(let K=0,ee=We.length;K<ee;K++)ge=We[K],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,me,Ae,ge):t.texImage2D(i.TEXTURE_2D,K,Ce,me,Ae,ge);E.generateMipmaps=!1}else if(Oe){if(rt){const K=xe(ie);t.texStorage2D(i.TEXTURE_2D,de,Ce,K.width,K.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ae,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,Ae,ie);_(E)&&m(Q),pe.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function V(P,E,q){if(E.image.length!==6)return;const Q=ke(P,E),ne=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const Z=n.get(ne);if(ne.version!==Z.__version||Q===!0){t.activeTexture(i.TEXTURE0+q);const pe=Xe.getPrimaries(Xe.workingColorSpace),le=E.colorSpace===Fn?null:Xe.getPrimaries(E.colorSpace),Me=E.colorSpace===Fn||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!we&&!ie?me[ee]=g(E.image[ee],!0,s.maxCubemapSize):me[ee]=ie?E.image[ee].image:E.image[ee],me[ee]=je(E,me[ee]);const Ae=me[0],Ce=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),We=v(E.internalFormat,Ce,ge,E.colorSpace),Oe=E.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,z=ne.dataReady;let de=T(E,Ae);Se(i.TEXTURE_CUBE_MAP,E);let K;if(we){Oe&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,Ae.width,Ae.height);for(let ee=0;ee<6;ee++){K=me[ee].mipmaps;for(let fe=0;fe<K.length;fe++){const ue=K[fe];E.format!==qt?Ce!==null?Oe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,We,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ue.width,ue.height,Ce,ge,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,We,ue.width,ue.height,0,Ce,ge,ue.data)}}}else{if(K=E.mipmaps,Oe&&rt){K.length>0&&de++;const ee=xe(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){Oe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,Ce,ge,me[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,me[ee].width,me[ee].height,0,Ce,ge,me[ee].data);for(let fe=0;fe<K.length;fe++){const De=K[fe].image[ee].image;Oe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De.width,De.height,Ce,ge,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,We,De.width,De.height,0,Ce,ge,De.data)}}else{Oe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,ge,me[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Ce,ge,me[ee]);for(let fe=0;fe<K.length;fe++){const ue=K[fe];Oe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ce,ge,ue.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,We,Ce,ge,ue.image[ee])}}}_(E)&&m(i.TEXTURE_CUBE_MAP),Z.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function W(P,E,q,Q,ne,Z){const pe=r.convert(q.format,q.colorSpace),le=r.convert(q.type),Me=v(q.internalFormat,pe,le,q.colorSpace),we=n.get(E),ie=n.get(q);if(ie.__renderTarget=E,!we.__hasExternalTextures){const me=Math.max(1,E.width>>Z),Ae=Math.max(1,E.height>>Z);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,Me,me,Ae,E.depth,0,pe,le,null):t.texImage2D(ne,Z,Me,me,Ae,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,ie.__webglTexture,0,Be(E)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,ie.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Z=S(E.stencilBuffer,ne),pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Be(E);ze(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Z,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,P)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const Z=Q[ne],pe=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),Me=v(Z.internalFormat,pe,le,Z.colorSpace),we=Be(E);q&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Me,E.width,E.height):ze(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const ne=Q.__webglTexture,Z=Be(E);if(E.depthTexture.format===hs)ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(E.depthTexture.format===ps)ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function be(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?re(E.__webglFramebuffer[0],P):re(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),X(E.__webglDepthbuffer[Q],P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Z)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),X(E.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(P,E,q){const Q=n.get(P);E!==void 0&&W(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&be(P)}function Je(P){const E=P.texture,q=n.get(P),Q=n.get(E);P.addEventListener("dispose",w);const ne=P.textures,Z=P.isWebGLCubeRenderTarget===!0,pe=ne.length>1;if(pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,a.memory.textures++),Z){q.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[le]=[];for(let Me=0;Me<E.mipmaps.length;Me++)q.__webglFramebuffer[le][Me]=i.createFramebuffer()}else q.__webglFramebuffer[le]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)q.__webglFramebuffer[le]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(pe)for(let le=0,Me=ne.length;le<Me;le++){const we=n.get(ne[le]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ze(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const Me=ne[le];q.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[le]);const we=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),me=v(Me.internalFormat,we,ie,Me.colorSpace,P.isXRRenderTarget===!0),Ae=Be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,q.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),X(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(i.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)W(q.__webglFramebuffer[le][Me],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me);else W(q.__webglFramebuffer[le],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let le=0,Me=ne.length;le<Me;le++){const we=ne[le],ie=n.get(we);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Se(i.TEXTURE_2D,we),W(q.__webglFramebuffer,P,we,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),_(we)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),Se(le,E),E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)W(q.__webglFramebuffer[Me],P,E,i.COLOR_ATTACHMENT0,le,Me);else W(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,le,0);_(E)&&m(le),t.unbindTexture()}P.depthBuffer&&be(P)}function qe(P){const E=P.textures;for(let q=0,Q=E.length;q<Q;q++){const ne=E[q];if(_(ne)){const Z=x(P),pe=n.get(ne).__webglTexture;t.bindTexture(Z,pe),m(Z),t.unbindTexture()}}}const Ie=[],O=[];function at(P){if(P.samples>0){if(ze(P)===!1){const E=P.textures,q=P.width,Q=P.height;let ne=i.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(P),le=E.length>1;if(le)for(let we=0;we<E.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Me=P.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]);const ie=n.get(E[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,q,Q,0,0,q,Q,ne,i.NEAREST),l===!0&&(Ie.length=0,O.length=0,Ie.push(i.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ie.push(Z),O.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<E.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]);const ie=n.get(E[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Be(P){return Math.min(s.maxSamples,P.samples)}function ze(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(P){const E=a.render.frame;d.get(P)!==E&&(d.set(P,E),P.update())}function je(P,E){const q=P.colorSpace,Q=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Lt&&q!==Fn&&(Xe.getTransfer(q)===st?(Q!==qt||ne!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=N,this.setTextureCube=L,this.rebindTextures=ye,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ze}function d_(i,e){function t(n,s=Fn){let r;const a=Xe.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return i.BYTE;if(n===_c)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===xc)return i.ALPHA;if(n===Sc)return i.RGB;if(n===qt)return i.RGBA;if(n===hs)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===yc)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===sr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===ba||n===wa||n===Aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Da||n===Na||n===Ua||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===Xa||n===Ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rr)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===qa||n===$a||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new _t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:u_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends Hi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,f=null;const g=new h_,_=t.getContextAttributes();let m=null,x=null;const v=[],S=[],T=new Ye;let A=null;const w=new Rt;w.viewport=new Ze;const C=new Rt;C.viewport=new Ze;const M=[w,C],y=new wf;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let V=v[J];return V===void 0&&(V=new Wr,v[J]=V),V.getTargetRaySpace()},this.getControllerGrip=function(J){let V=v[J];return V===void 0&&(V=new Wr,v[J]=V),V.getGripSpace()},this.getHand=function(J){let V=v[J];return V===void 0&&(V=new Wr,v[J]=V),V.getHandSpace()};function I(J){const V=S.indexOf(J.inputSource);if(V===-1)return;const W=v[V];W!==void 0&&(W.update(J.inputSource,J.frame,c||a),W.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let J=0;J<v.length;J++){const V=S[J];V!==null&&(S[J]=null,v[J].disconnect(V))}R=null,D=null,g.reset(),e.setRenderTarget(m),p=null,h=null,u=null,s=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,X=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?ps:hs,X=_.stencil?fs:oi);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new li(h.textureWidth,h.textureHeight,{format:qt,type:ln,depthTexture:new zc(h.textureWidth,h.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const W={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new li(p.framebufferWidth,p.framebufferHeight,{format:qt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(J){for(let V=0;V<J.removed.length;V++){const W=J.removed[V],X=S.indexOf(W);X>=0&&(S[X]=null,v[X].disconnect(W))}for(let V=0;V<J.added.length;V++){const W=J.added[V];let X=S.indexOf(W);if(X===-1){for(let be=0;be<v.length;be++)if(be>=S.length){S.push(W),X=be;break}else if(S[be]===null){S[be]=W,X=be;break}if(X===-1)break}const re=v[X];re&&re.connect(W)}}const F=new H,N=new H;function L(J,V,W){F.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(W.matrixWorld);const X=F.distanceTo(N),re=V.projectionMatrix.elements,be=W.projectionMatrix.elements,ye=re[14]/(re[10]-1),Je=re[14]/(re[10]+1),qe=(re[9]+1)/re[5],Ie=(re[9]-1)/re[5],O=(re[8]-1)/re[0],at=(be[8]+1)/be[0],Be=ye*O,ze=ye*at,ve=X/(-O+at),je=ve*-O;if(V.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(je),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),re[10]===-1)J.projectionMatrix.copy(V.projectionMatrix),J.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const xe=ye+ve,P=Je+ve,E=Be-je,q=ze+(X-je),Q=qe*Je/P*xe,ne=Ie*Je/P*xe;J.projectionMatrix.makePerspective(E,q,Q,ne,xe,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Y(J,V){V===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(V.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let V=J.near,W=J.far;g.texture!==null&&(g.depthNear>0&&(V=g.depthNear),g.depthFar>0&&(W=g.depthFar)),y.near=C.near=w.near=V,y.far=C.far=w.far=W,(R!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,D=y.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,y.layers.mask=w.layers.mask|C.layers.mask;const X=J.parent,re=y.cameras;Y(y,X);for(let be=0;be<re.length;be++)Y(re[be],X);re.length===2?L(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),te(J,y,X)};function te(J,V,W){W===null?J.matrix.copy(V.matrixWorld):(J.matrix.copy(W.matrixWorld),J.matrix.invert(),J.matrix.multiply(V.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(V.projectionMatrix),J.projectionMatrixInverse.copy(V.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ui*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ae=null;function Se(J,V){if(d=V.getViewerPose(c||a),f=V,d!==null){const W=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let X=!1;W.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let ye=0;ye<W.length;ye++){const Je=W[ye];let qe=null;if(p!==null)qe=p.getViewport(Je);else{const O=u.getViewSubImage(h,Je);qe=O.viewport,ye===0&&(e.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(x))}let Ie=M[ye];Ie===void 0&&(Ie=new Rt,Ie.layers.enable(ye),Ie.viewport=new Ze,M[ye]=Ie),Ie.matrix.fromArray(Je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(qe.x,qe.y,qe.width,qe.height),ye===0&&(y.matrix.copy(Ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),X===!0&&y.cameras.push(Ie)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const ye=u.getDepthInformation(W[0]);ye&&ye.isValid&&ye.texture&&g.init(e,ye,s.renderState)}}for(let W=0;W<v.length;W++){const X=S[W],re=v[W];X!==null&&re!==void 0&&re.update(X,V,c||a)}ae&&ae(J,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),f=null}const ke=new Xc;ke.setAnimationLoop(Se),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}}const Qn=new cn,m_=new Ue;function g_(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Ic(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,x,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m)):m.isMeshStandardMaterial?(r(_,m),h(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),f(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),g(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,x,v):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Nt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Nt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,S=x.envMapRotation;v&&(_.envMap.value=v,Qn.copy(S),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),_.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Qn)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,x,v){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=v*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function f(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function __(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(f(x),S=d(x),s[x.id]=S,x.addEventListener("dispose",_));const T=v.program;n.updateUBOMapping(x,T);const A=e.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function d(x){const v=u();x.__bindingPointIndex=v;const S=i.createBuffer(),T=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=s[x.id],S=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=C.length;M<y;M++){const R=C[M];if(p(R,A,M,T)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let B=0;B<I.length;B++){const F=I[B],N=g(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+U,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,S,T){const A=x.value,w=v+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function f(x){const v=x.uniforms;let S=0;const T=16;for(let w=0,C=v.length;w<C;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,R=M.length;y<R;y++){const D=M[y],I=Array.isArray(D.value)?D.value:[D.value];for(let U=0,B=I.length;U<B;U++){const F=I[U],N=g(F),L=S%T,Y=L%N.boundary,te=L+Y;S+=Y,te!==0&&T-te<N.storage&&(S+=T-te),D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=N.storage}}}const A=S%T;return A>0&&(S+=T-A),x.__size=S,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){const v=x.target;v.removeEventListener("dispose",_);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class v_{constructor(e={}){const{canvas:t=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=St;let A=0,w=0,C=null,M=-1,y=null;const R=new Ze,D=new Ze;let I=null;const U=new Le(0);let B=0,F=t.width,N=t.height,L=1,Y=null,te=null;const ae=new Ze(0,0,F,N),Se=new Ze(0,0,F,N);let ke=!1;const J=new So;let V=!1,W=!1;const X=new Ue,re=new Ue,be=new H,ye=new Ze,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ie(){return C===null?L:1}let O=n;function at(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ao}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){const k="webgl2";if(O=at(k,b),O===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,ze,ve,je,xe,P,E,q,Q,ne,Z,pe,le,Me,we,ie,me,Ae,Ce,ge,We,Oe,rt,z;function de(){Be=new Rm(O),Be.init(),Oe=new d_(O,Be),ze=new ym(O,Be,e,Oe),ve=new l_(O,Be),ze.reverseDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),je=new Lm(O),xe=new jg,P=new c_(O,Be,ve,xe,ze,Oe,je),E=new Em(S),q=new Am(S),Q=new Ff(O),rt=new xm(O,Q),ne=new Cm(O,Q,je,rt),Z=new Dm(O,ne,Q,je),Ce=new Im(O,ze,P),ie=new Mm(xe),pe=new $g(S,E,q,Be,ze,rt,ie),le=new g_(S,xe),Me=new Zg,we=new i_(Be),Ae=new vm(S,E,q,ve,Z,p,l),me=new a_(S,Z,ze),z=new __(O,je,ze,ve),ge=new Sm(O,Be,je),We=new Pm(O,Be,je),je.programs=pe.programs,S.capabilities=ze,S.extensions=Be,S.properties=xe,S.renderLists=Me,S.shadowMap=me,S.state=ve,S.info=je}de();const K=new p_(S,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize(F,N,!1))},this.getSize=function(b){return b.set(F,N)},this.setSize=function(b,k,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,N=k,t.width=Math.floor(b*L),t.height=Math.floor(k*L),$===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(F*L,N*L).floor()},this.setDrawingBufferSize=function(b,k,$){F=b,N=k,L=$,t.width=Math.floor(b*$),t.height=Math.floor(k*$),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,k,$,j){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,k,$,j),ve.viewport(R.copy(ae).multiplyScalar(L).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,k,$,j){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,k,$,j),ve.scissor(D.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){ve.setScissorTest(ke=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,$=!0){let j=0;if(b){let G=!1;if(C!==null){const se=C.texture.format;G=se===po||se===ho||se===fo}if(G){const se=C.texture.type,ce=se===ln||se===oi||se===us||se===fs||se===lo||se===co,he=Ae.getClearColor(),_e=Ae.getClearAlpha(),Pe=he.r,Re=he.g,Ee=he.b;ce?(f[0]=Pe,f[1]=Re,f[2]=Ee,f[3]=_e,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Pe,g[1]=Re,g[2]=Ee,g[3]=_e,O.clearBufferiv(O.COLOR,0,g))}else j|=O.COLOR_BUFFER_BIT}k&&(j|=O.DEPTH_BUFFER_BIT),$&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ae.dispose(),Me.dispose(),we.dispose(),xe.dispose(),E.dispose(),q.dispose(),Z.dispose(),rt.dispose(),z.dispose(),pe.dispose(),K.dispose(),K.removeEventListener("sessionstart",Po),K.removeEventListener("sessionend",Lo),Yn.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=je.autoReset,k=me.enabled,$=me.autoUpdate,j=me.needsUpdate,G=me.type;de(),je.autoReset=b,me.enabled=k,me.autoUpdate=$,me.needsUpdate=j,me.type=G}function ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function De(b){const k=b.target;k.removeEventListener("dispose",De),dt(k)}function dt(b){Mt(b),xe.remove(b)}function Mt(b){const k=xe.get(b).programs;k!==void 0&&(k.forEach(function($){pe.releaseProgram($)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,$,j,G,se){k===null&&(k=Je);const ce=G.isMesh&&G.matrixWorld.determinant()<0,he=rd(b,k,$,j,G);ve.setMaterial(j,ce);let _e=$.index,Pe=1;if(j.wireframe===!0){if(_e=ne.getWireframeAttribute($),_e===void 0)return;Pe=2}const Re=$.drawRange,Ee=$.attributes.position;let $e=Re.start*Pe,Qe=(Re.start+Re.count)*Pe;se!==null&&($e=Math.max($e,se.start*Pe),Qe=Math.min(Qe,(se.start+se.count)*Pe)),_e!==null?($e=Math.max($e,0),Qe=Math.min(Qe,_e.count)):Ee!=null&&($e=Math.max($e,0),Qe=Math.min(Qe,Ee.count));const ft=Qe-$e;if(ft<0||ft===1/0)return;rt.setup(G,j,he,$,_e);let ut,Ke=ge;if(_e!==null&&(ut=Q.get(_e),Ke=We,Ke.setIndex(ut)),G.isMesh)j.wireframe===!0?(ve.setLineWidth(j.wireframeLinewidth*Ie()),Ke.setMode(O.LINES)):Ke.setMode(O.TRIANGLES);else if(G.isLine){let Te=j.linewidth;Te===void 0&&(Te=1),ve.setLineWidth(Te*Ie()),G.isLineSegments?Ke.setMode(O.LINES):G.isLineLoop?Ke.setMode(O.LINE_LOOP):Ke.setMode(O.LINE_STRIP)}else G.isPoints?Ke.setMode(O.POINTS):G.isSprite&&Ke.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ke.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Te=G._multiDrawStarts,xt=G._multiDrawCounts,et=G._multiDrawCount,jt=_e?Q.get(_e).bytesPerElement:1,ui=xe.get(j).currentProgram.getUniforms();for(let Ut=0;Ut<et;Ut++)ui.setValue(O,"_gl_DrawID",Ut),Ke.render(Te[Ut]/jt,xt[Ut])}else if(G.isInstancedMesh)Ke.renderInstances($e,ft,G.count);else if($.isInstancedBufferGeometry){const Te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xt=Math.min($.instanceCount,Te);Ke.renderInstances($e,ft,xt)}else Ke.render($e,ft)};function tt(b,k,$){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,bs(b,k,$),b.side=Rn,b.needsUpdate=!0,bs(b,k,$),b.side=on):bs(b,k,$)}this.compile=function(b,k,$=null){$===null&&($=b),m=we.get($),m.init(k),v.push(m),$.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==$&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const j=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const se=G.material;if(se)if(Array.isArray(se))for(let ce=0;ce<se.length;ce++){const he=se[ce];tt(he,$,G),j.add(he)}else tt(se,$,G),j.add(se)}),m=v.pop(),j},this.compileAsync=function(b,k,$=null){const j=this.compile(b,k,$);return new Promise(G=>{function se(){if(j.forEach(function(ce){xe.get(ce).currentProgram.isReady()&&j.delete(ce)}),j.size===0){G(b);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let $t=null;function pn(b){$t&&$t(b)}function Po(){Yn.stop()}function Lo(){Yn.start()}const Yn=new Xc;Yn.setAnimationLoop(pn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){$t=b,K.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},K.addEventListener("sessionstart",Po),K.addEventListener("sessionend",Lo),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,k,C),m=we.get(b,v.length),m.init(k),v.push(m),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(re),W=this.localClippingEnabled,V=ie.init(this.clippingPlanes,W),_=Me.get(b,x.length),_.init(),x.push(_),K.enabled===!0&&K.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Mr(se,k,-1/0,S.sortObjects)}Mr(b,k,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(Y,te),qe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,qe&&Ae.addToRenderList(_,b),this.info.render.frame++,V===!0&&ie.beginShadows();const $=m.state.shadowsArray;me.render($,b,k),V===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,G=_.transmissive;if(m.setupLights(),k.isArrayCamera){const se=k.cameras;if(G.length>0)for(let ce=0,he=se.length;ce<he;ce++){const _e=se[ce];Do(j,G,b,_e)}qe&&Ae.render(b);for(let ce=0,he=se.length;ce<he;ce++){const _e=se[ce];Io(_,b,_e,_e.viewport)}}else G.length>0&&Do(j,G,b,k),qe&&Ae.render(b),Io(_,b,k);C!==null&&w===0&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(S,b,k),rt.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&ie.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function Mr(b,k,$,j){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){j&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const ce=Z.update(b),he=b.material;he.visible&&_.push(b,ce,he,$,ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const ce=Z.update(b),he=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ye.copy(ce.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(he)){const _e=ce.groups;for(let Pe=0,Re=_e.length;Pe<Re;Pe++){const Ee=_e[Pe],$e=he[Ee.materialIndex];$e&&$e.visible&&_.push(b,ce,$e,$,ye.z,Ee)}}else he.visible&&_.push(b,ce,he,$,ye.z,null)}}const se=b.children;for(let ce=0,he=se.length;ce<he;ce++)Mr(se[ce],k,$,j)}function Io(b,k,$,j){const G=b.opaque,se=b.transmissive,ce=b.transparent;m.setupLightsView($),V===!0&&ie.setGlobalState(S.clippingPlanes,$),j&&ve.viewport(R.copy(j)),G.length>0&&Ts(G,k,$),se.length>0&&Ts(se,k,$),ce.length>0&&Ts(ce,k,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Do(b,k,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new li(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?xs:ln,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const se=m.state.transmissionRenderTarget[j.id],ce=j.viewport||R;se.setSize(ce.z*S.transmissionResolutionScale,ce.w*S.transmissionResolutionScale);const he=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(U),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Ae.render($);const _e=S.toneMapping;S.toneMapping=Gn;const Pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),V===!0&&ie.setGlobalState(S.clippingPlanes,j),Ts(b,$,j),P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,$e=k.length;Ee<$e;Ee++){const Qe=k[Ee],ft=Qe.object,ut=Qe.geometry,Ke=Qe.material,Te=Qe.group;if(Ke.side===on&&ft.layers.test(j.layers)){const xt=Ke.side;Ke.side=Nt,Ke.needsUpdate=!0,No(ft,$,j,ut,Ke,Te),Ke.side=xt,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se))}S.setRenderTarget(he),S.setClearColor(U,B),Pe!==void 0&&(j.viewport=Pe),S.toneMapping=_e}function Ts(b,k,$){const j=k.isScene===!0?k.overrideMaterial:null;for(let G=0,se=b.length;G<se;G++){const ce=b[G],he=ce.object,_e=ce.geometry,Pe=ce.group;let Re=ce.material;Re.allowOverride===!0&&j!==null&&(Re=j),he.layers.test($.layers)&&No(he,k,$,_e,Re,Pe)}}function No(b,k,$,j,G,se){b.onBeforeRender(S,k,$,j,G,se),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(S,k,$,j,b,se),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=Nt,G.needsUpdate=!0,S.renderBufferDirect($,k,j,G,b,se),G.side=Rn,G.needsUpdate=!0,S.renderBufferDirect($,k,j,G,b,se),G.side=on):S.renderBufferDirect($,k,j,G,b,se),b.onAfterRender(S,k,$,j,G,se)}function bs(b,k,$){k.isScene!==!0&&(k=Je);const j=xe.get(b),G=m.state.lights,se=m.state.shadowsArray,ce=G.state.version,he=pe.getParameters(b,G.state,se,k,$),_e=pe.getProgramCacheKey(he);let Pe=j.programs;j.environment=b.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(b.isMeshStandardMaterial?q:E).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",De),Pe=new Map,j.programs=Pe);let Re=Pe.get(_e);if(Re!==void 0){if(j.currentProgram===Re&&j.lightsStateVersion===ce)return Oo(b,he),Re}else he.uniforms=pe.getUniforms(b),b.onBeforeCompile(he,S),Re=pe.acquireProgram(he,_e),Pe.set(_e,Re),j.uniforms=he.uniforms;const Ee=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Oo(b,he),j.needsLights=od(b),j.lightsStateVersion=ce,j.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMap.value=G.state.directionalShadowMap,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotShadowMap.value=G.state.spotShadowMap,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMap.value=G.state.pointShadowMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Re,j.uniformsList=null,Re}function Uo(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=or.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Oo(b,k){const $=xe.get(b);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function rd(b,k,$,j,G){k.isScene!==!0&&(k=Je),P.resetTextureUnits();const se=k.fog,ce=j.isMeshStandardMaterial?k.environment:null,he=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lt,_e=(j.isMeshStandardMaterial?q:E).get(j.envMap||ce),Pe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Re=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ee=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,Qe=!!$.morphAttributes.color;let ft=Gn;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=S.toneMapping);const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=ut!==void 0?ut.length:0,Te=xe.get(j),xt=m.state.lights;if(V===!0&&(W===!0||b!==y)){const bt=b===y&&j.id===M;ie.setState(j,b,bt)}let et=!1;j.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==xt.state.version||Te.outputColorSpace!==he||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==_e||j.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Re||Te.morphTargets!==Ee||Te.morphNormals!==$e||Te.morphColors!==Qe||Te.toneMapping!==ft||Te.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Te.__version=j.version);let jt=Te.currentProgram;et===!0&&(jt=bs(j,k,G));let ui=!1,Ut=!1,qi=!1;const ot=jt.getUniforms(),Vt=Te.uniforms;if(ve.useProgram(jt.program)&&(ui=!0,Ut=!0,qi=!0),j.id!==M&&(M=j.id,Ut=!0),ui||y!==b){ve.buffers.depth.getReversed()?(X.copy(b.projectionMatrix),vu(X),xu(X),ot.setValue(O,"projectionMatrix",X)):ot.setValue(O,"projectionMatrix",b.projectionMatrix),ot.setValue(O,"viewMatrix",b.matrixWorldInverse);const It=ot.map.cameraPosition;It!==void 0&&It.setValue(O,be.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ot.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ut=!0,qi=!0)}if(G.isSkinnedMesh){ot.setOptional(O,G,"bindMatrix"),ot.setOptional(O,G,"bindMatrixInverse");const bt=G.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ot.setValue(O,"boneTexture",bt.boneTexture,P))}G.isBatchedMesh&&(ot.setOptional(O,G,"batchingTexture"),ot.setValue(O,"batchingTexture",G._matricesTexture,P),ot.setOptional(O,G,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",G._indirectTexture,P),ot.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",G._colorsTexture,P));const Gt=$.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&Ce.update(G,$,jt),(Ut||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,ot.setValue(O,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Vt.envMap.value=_e,Vt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Vt.envMapIntensity.value=k.environmentIntensity),Ut&&(ot.setValue(O,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&ad(Vt,qi),se&&j.fog===!0&&le.refreshFogUniforms(Vt,se),le.refreshMaterialUniforms(Vt,j,L,N,m.state.transmissionRenderTarget[b.id]),or.upload(O,Uo(Te),Vt,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(or.upload(O,Uo(Te),Vt,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ot.setValue(O,"center",G.center),ot.setValue(O,"modelViewMatrix",G.modelViewMatrix),ot.setValue(O,"normalMatrix",G.normalMatrix),ot.setValue(O,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const bt=j.uniformsGroups;for(let It=0,Er=bt.length;It<Er;It++){const qn=bt[It];z.update(qn,jt),z.bind(qn,jt)}}return jt}function ad(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function od(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,k,$){const j=xe.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),xe.get(b.texture).__webglTexture=k,xe.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const $=xe.get(b);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};const ld=O.createFramebuffer();this.setRenderTarget=function(b,k=0,$=0){C=b,A=k,w=$;let j=!0,G=null,se=!1,ce=!1;if(b){const _e=xe.get(b);if(_e.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(_e.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(_e.__hasExternalTextures)P.rebindTextures(b,xe.get(b.texture).__webglTexture,xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ee=b.depthTexture;if(_e.__boundDepthTexture!==Ee){if(Ee!==null&&xe.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Re=xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?G=Re[k][$]:G=Re[k],se=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?G=xe.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[$]:G=Re,R.copy(b.viewport),D.copy(b.scissor),I=b.scissorTest}else R.copy(ae).multiplyScalar(L).floor(),D.copy(Se).multiplyScalar(L).floor(),I=ke;if($!==0&&(G=ld),ve.bindFramebuffer(O.FRAMEBUFFER,G)&&j&&ve.drawBuffers(b,G),ve.viewport(R),ve.scissor(D),ve.setScissorTest(I),se){const _e=xe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,$)}else if(ce){const _e=xe.get(b.texture),Pe=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,_e.__webglTexture,$,Pe)}else if(b!==null&&$!==0){const _e=xe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(b,k,$,j,G,se,ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){ve.bindFramebuffer(O.FRAMEBUFFER,he);try{const _e=b.texture,Pe=_e.format,Re=_e.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-j&&$>=0&&$<=b.height-G&&O.readPixels(k,$,j,G,Oe.convert(Pe),Oe.convert(Re),se)}finally{const _e=C!==null?xe.get(C).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(b,k,$,j,G,se,ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he)if(k>=0&&k<=b.width-j&&$>=0&&$<=b.height-G){ve.bindFramebuffer(O.FRAMEBUFFER,he);const _e=b.texture,Pe=_e.format,Re=_e.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,se.byteLength,O.STREAM_READ),O.readPixels(k,$,j,G,Oe.convert(Pe),Oe.convert(Re),0);const $e=C!==null?xe.get(C).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,$e);const Qe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _u(O,Qe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,se),O.deleteBuffer(Ee),O.deleteSync(Qe),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,$=0){const j=Math.pow(2,-$),G=Math.floor(b.image.width*j),se=Math.floor(b.image.height*j),ce=k!==null?k.x:0,he=k!==null?k.y:0;P.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,ce,he,G,se),ve.unbindTexture()};const cd=O.createFramebuffer(),dd=O.createFramebuffer();this.copyTextureToTexture=function(b,k,$=null,j=null,G=0,se=null){se===null&&(G!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=G,G=0):se=0);let ce,he,_e,Pe,Re,Ee,$e,Qe,ft;const ut=b.isCompressedTexture?b.mipmaps[se]:b.image;if($!==null)ce=$.max.x-$.min.x,he=$.max.y-$.min.y,_e=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Re=$.min.y,Ee=$.isBox3?$.min.z:0;else{const Gt=Math.pow(2,-G);ce=Math.floor(ut.width*Gt),he=Math.floor(ut.height*Gt),b.isDataArrayTexture?_e=ut.depth:b.isData3DTexture?_e=Math.floor(ut.depth*Gt):_e=1,Pe=0,Re=0,Ee=0}j!==null?($e=j.x,Qe=j.y,ft=j.z):($e=0,Qe=0,ft=0);const Ke=Oe.convert(k.format),Te=Oe.convert(k.type);let xt;k.isData3DTexture?(P.setTexture3D(k,0),xt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),xt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),xt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const et=O.getParameter(O.UNPACK_ROW_LENGTH),jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ui=O.getParameter(O.UNPACK_SKIP_PIXELS),Ut=O.getParameter(O.UNPACK_SKIP_ROWS),qi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Re),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ee);const ot=b.isDataArrayTexture||b.isData3DTexture,Vt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Gt=xe.get(b),bt=xe.get(k),It=xe.get(Gt.__renderTarget),Er=xe.get(bt.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,It.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let qn=0;qn<_e;qn++)ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xe.get(b).__webglTexture,G,Ee+qn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xe.get(k).__webglTexture,se,ft+qn)),O.blitFramebuffer(Pe,Re,ce,he,$e,Qe,ce,he,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||xe.has(b)){const Gt=xe.get(b),bt=xe.get(k);ve.bindFramebuffer(O.READ_FRAMEBUFFER,cd),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,dd);for(let It=0;It<_e;It++)ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.__webglTexture,G,Ee+It):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gt.__webglTexture,G),Vt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.__webglTexture,se,ft+It):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bt.__webglTexture,se),G!==0?O.blitFramebuffer(Pe,Re,ce,he,$e,Qe,ce,he,O.COLOR_BUFFER_BIT,O.NEAREST):Vt?O.copyTexSubImage3D(xt,se,$e,Qe,ft+It,Pe,Re,ce,he):O.copyTexSubImage2D(xt,se,$e,Qe,Pe,Re,ce,he);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Vt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(xt,se,$e,Qe,ft,ce,he,_e,Ke,Te,ut.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(xt,se,$e,Qe,ft,ce,he,_e,Ke,ut.data):O.texSubImage3D(xt,se,$e,Qe,ft,ce,he,_e,Ke,Te,ut):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,se,$e,Qe,ce,he,Ke,Te,ut.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,se,$e,Qe,ut.width,ut.height,Ke,ut.data):O.texSubImage2D(O.TEXTURE_2D,se,$e,Qe,ce,he,Ke,Te,ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,et),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ui),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qi),se===0&&k.generateMipmaps&&O.generateMipmap(xt),ve.unbindTexture()},this.copyTextureToTexture3D=function(b,k,$=null,j=null,G=0){return ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,$,j,G)},this.initRenderTarget=function(b){xe.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,ve.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function ec(i,e){if(e===Vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ka||e===Ec){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ka)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class x_ extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new T_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new B_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=cs.extractUrlBase(e);a=cs.resolveURL(c,this.path)}else a=cs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kc){try{a[Ge.KHR_BINARY_GLTF]=new z_(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new J_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new M_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new k_(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new H_;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new V_;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function S_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class y_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new Le(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Lt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wc(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gc(d),c.distance=u;break;case"spot":c=new yf(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class M_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}}class E_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class T_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(o,o)}return Promise.all(r)}}class b_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class w_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class A_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,St)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class R_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class C_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Lt),Promise.all(r)}}class P_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class L_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,St)),Promise.all(r)}}class I_{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class D_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class N_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class U_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class O_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class F_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(p),d,u,h,s.mode,s.filter),p})})}else return null}}class B_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Xt.TRIANGLES&&c.mode!==Xt.TRIANGLE_STRIP&&c.mode!==Xt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(const f of u){const g=new Ue,_=new H,m=new Xn,x=new H(1,1,1),v=new Ku(f.geometry,f.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,g.compose(_,m,x));for(const S in l)if(S==="_COLOR_0"){const T=l[S];v.instanceColor=new Ja(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&f.geometry.setAttribute(S,l[S]);ct.prototype.copy.call(v,f),this.parser.assignFinalMaterial(v),p.push(v)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const Kc="glTF",ns=12,tc={JSON:1313821514,BIN:5130562};class z_{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ns,r=new DataView(e,ns);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===tc.JSON){const c=new Uint8Array(e,ns+a,o);this.content=n.decode(c)}else if(l===tc.BIN){const c=ns+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class k_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const d in a){const u=to[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=to[d]||d.toLowerCase();if(a[d]!==void 0){const h=n.accessors[e.attributes[d]],p=Pi[h.componentType];c[u]=p.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(p){for(const f in p.attributes){const g=p.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}u(p)},o,c,Lt,h)})})}}class H_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class V_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Zc extends Ms{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(n-t)/d,h=u*u,p=h*u,f=e*c,g=f-c,_=-2*p+3*h,m=p-h,x=1-_,v=m-h+u;for(let S=0;S!==o;S++){const T=a[g+S+o],A=a[g+S+l]*d,w=a[f+S+o],C=a[f+S]*d;r[S]=x*T+v*A+_*w+m*C}return r}}const G_=new Xn;class W_ extends Zc{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return G_.fromArray(r).normalize().toArray(r),r}}const Xt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nc={9728:Ct,9729:kt,9984:mc,9985:er,9986:is,9987:Tn},ic={33071:Bn,33648:cr,10497:Ni},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},to={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},X_={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Y_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),i.DefaultMaterial}function ei(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function q_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function $_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j_(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ra(t.attributes):e=i.indices+":"+ra(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ra(i.targets[n]);return e}function ra(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function no(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Z_=new Ue;class J_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new S_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new xf(this.options.manager):this.textureLoader=new bf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ei(r,o,s),Mn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,d]of a.children.entries())r(d,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(cs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ia[s.type],o=Pi[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Pt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ia[s.type],c=Pi[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0;let g,_;if(p&&p!==u){const m=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let v=t.cache.get(x);v||(g=new c(o,m*p,s.count*p/d),v=new Xu(g,p/d),t.cache.add(x,v)),_=new vo(v,l,h%p/d,f)}else o===null?g=new c(s.count*l):g=new c(o,h,s.count*l),_=new Pt(g,l,f);if(s.sparse!==void 0){const m=ia.SCALAR,x=Pi[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new x(a[1],v,s.sparse.count*m),A=new c(a[2],S,s.sparse.count*l);o!==null&&(_=new Pt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let w=0,C=T.length;w<C;w++){const M=T[w];if(_.setX(M,A[w*l]),l>=2&&_.setY(M,A[w*l+1]),l>=3&&_.setZ(M,A[w*l+2]),l>=4&&_.setW(M,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=f}return _})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return d.magFilter=nc[h.magFilter]||kt,d.minFilter=nc[h.minFilter]||Tn,d.wrapS=ic[h.wrapS]||Ni,d.wrapT=ic[h.wrapT]||Ni,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Ct&&d.minFilter!==kt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,p){let f=h;t.isImageBitmapLoader===!0&&(f=function(g){const _=new _t(g);_.needsUpdate=!0,h(_)}),t.load(cs.resolveURL(u,r.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Mn(u,a),u.userData.mimeType=a.mimeType||K_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Bc,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fc,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mo}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const u=s[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Lt),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,St)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);const d=r.alphaMode||sa.OPAQUE;if(d===sa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===sa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ri&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ri&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ri){const u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Lt)}return r.emissiveTexture!==void 0&&a!==ri&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Mn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ei(s,u,r),u})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return sc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=j_(c),u=s[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=sc(new fn,c,t),s[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?Y_(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,f=d.length;p<f;p++){const g=d[p],_=a[p];let m;const x=c[p];if(_.mode===Xt.TRIANGLES||_.mode===Xt.TRIANGLE_STRIP||_.mode===Xt.TRIANGLE_FAN||_.mode===void 0)m=r.isSkinnedMesh===!0?new qu(g,x):new Dt(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),_.mode===Xt.TRIANGLE_STRIP?m.geometry=ec(m.geometry,Ec):_.mode===Xt.TRIANGLE_FAN&&(m.geometry=ec(m.geometry,Ka));else if(_.mode===Xt.LINES)m=new Qu(g,x);else if(_.mode===Xt.LINE_STRIP)m=new yo(g,x);else if(_.mode===Xt.LINE_LOOP)m=new ef(g,x);else if(_.mode===Xt.POINTS)m=new tf(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&$_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Mn(m,r),_.extensions&&ei(s,m,_),t.assignFinalMaterial(m),u.push(m)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ei(s,u[0],r),u[0];const h=new zn;r.extensions&&ei(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(mu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new To(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){const u=a[c];if(u){o.push(u);const h=new Ue;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xo(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const p=s.channels[u],f=s.samplers[p.sampler],g=p.target,_=g.node,m=s.parameters!==void 0?s.parameters[f.input]:f.input,x=s.parameters!==void 0?s.parameters[f.output]:f.output;g.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(f),d.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],p=u[1],f=u[2],g=u[3],_=u[4],m=[];for(let x=0,v=h.length;x<v;x++){const S=h[x],T=p[x],A=f[x],w=g[x],C=_[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,T,A,w,C);if(M)for(let y=0;y<M.length;y++)m.push(M[y])}return new ff(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,Z_)});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new Uc:c.length>1?d=new zn:c.length===1?d=c[0]:d=new ct,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=a),Mn(d,r),r.extensions&&ei(n,d,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new zn;n.name&&(r.name=s.createUniqueName(n.name)),Mn(r,n),n.extensions&&ei(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);const c=d=>{const u=new Map;for(const[h,p]of s.associations)(h instanceof sn||h instanceof _t)&&u.set(h,p);return d.traverse(h=>{const p=s.associations.get(h);p!=null&&u.set(h,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Un[r.path]===Un.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Un[r.path]){case Un.weights:c=Fi;break;case Un.rotation:c=Bi;break;case Un.translation:case Un.scale:c=zi;break;default:switch(n.itemSize){case 1:c=Fi;break;case 2:case 3:default:c=zi;break}break}const d=s.interpolation!==void 0?X_[s.interpolation]:gs,u=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const f=new c(l[h]+"."+Un[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=no(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Bi?W_:Zc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Q_(i,e,t){const n=e.attributes,s=new dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){const d=no(Pi[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new H,l=new H;for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],p=h.min,f=h.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),h.normalized){const g=no(Pi[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function sc(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=to[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Xe.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Mn(i,e),Q_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?q_(i,e.targets,t):i})}function ev(){const i=new Wu,e=new Rt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.z=6.5;const t=new v_({antialias:!0,alpha:!0});t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=hc,t.toneMappingExposure=1,t.outputEncoding=void 0,t.shadowMap.enabled=!0;const n=document.getElementById("three-container");n.appendChild(t.domElement),n.addEventListener("mouseenter",()=>{document.body.style.backgroundColor="#d5ebf5"}),n.addEventListener("mouseleave",()=>{document.body.style.backgroundColor="#e1e1e1"});const s=new Tf(8421504,1.5);i.add(s);const r=new Wc(16777215,2);r.position.set(2,2,2),r.castShadow=!0,i.add(r);const a=new Gc(16773544,0,5);a.position.set(0,1.5,0),i.add(a);const o=new x_,l=new zn;i.add(l);let c=null;o.load("/foco.glb",p=>{const f=p.scene;f.scale.set(2.7,1.3,2.7);const g=["Text","Text002","Text003"],_=[];f.traverse(v=>{v.isMesh&&g.includes(v.name)&&_.push(v)}),_.forEach(v=>{f.remove(v),i.add(v)});const x=new dn().setFromObject(f).getCenter(new H);f.position.sub(x),f.traverse(v=>{v.isMesh&&(v.name==="Sphere_1"?(v.material.color.set(3356987),v.material.metalness=.7,v.material.roughness=.4):v.name==="Sphere_2"?(v.material.color.set(15790320),v.material.metalness=.2,v.material.roughness=.6):v.name==="Sphere_3"&&(v.material.emissive.set(16777215),v.material.emissiveIntensity=2,v.material.metalness=.8,v.material.roughness=.2,c=v))}),l.add(f),l.add(a),u()}),n.addEventListener("mouseenter",()=>{a.intensity=5,a.distance=15,a.decay=2,a.color.set(53503),c&&(c.material.emissive.set(53503),c.material.emissiveIntensity=2),i.fog=new _o(0,5,15)}),n.addEventListener("mouseleave",()=>{a.intensity=0,a.color.set(16773544),c&&(c.material.emissive.set(16777215),c.material.emissiveIntensity=3)});function d(){requestAnimationFrame(d),l.rotation.y+=.01,r.position.x=Math.sin(l.rotation.y)*2,r.position.z=Math.cos(l.rotation.y)*2,t.render(i,e)}d(),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),u()});function u(){window.matchMedia("(max-width: 480px)").matches?e.position.z=12:window.matchMedia("(max-width: 768px)").matches?e.position.z=9:window.matchMedia("(max-width: 1024px)").matches?e.position.z=8:e.position.z=9}const h=new Dt(new ys(5,5),new nf({opacity:.2}));h.rotation.x=-Math.PI/2,h.position.y=-1.5,h.receiveShadow=!0,i.add(h)}function rc(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Ro(i,e){i===void 0&&(i={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:rc(e[n])&&rc(i[n])&&Object.keys(e[n]).length>0&&Ro(i[n],e[n])})}const Jc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function vt(){const i=typeof document<"u"?document:{};return Ro(i,Jc),i}const tv={document:Jc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function lt(){const i=typeof window<"u"?window:{};return Ro(i,tv),i}function On(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function nv(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function ci(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function Yt(){return Date.now()}function iv(i){const e=lt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function io(i,e){e===void 0&&(e="x");const t=lt();let n,s,r;const a=iv(i);return t.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=r.m41:n.length===16?s=parseFloat(n[12]):s=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?s=r.m42:n.length===16?s=parseFloat(n[13]):s=parseFloat(n[5])),s||0}function rs(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function sv(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function zt(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!sv(n)){const s=Object.keys(Object(n)).filter(r=>e.indexOf(r)<0);for(let r=0,a=s.length;r<a;r+=1){const o=s[r],l=Object.getOwnPropertyDescriptor(n,o);l!==void 0&&l.enumerable&&(rs(i[o])&&rs(n[o])?n[o].__swiper__?i[o]=n[o]:zt(i[o],n[o]):!rs(i[o])&&rs(n[o])?(i[o]={},n[o].__swiper__?i[o]=n[o]:zt(i[o],n[o])):i[o]=n[o])}}}return i}function as(i,e,t){i.style.setProperty(e,t)}function Qc(i){let{swiper:e,targetPosition:t,side:n}=i;const s=lt(),r=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const c=t>r?"next":"prev",d=(h,p)=>c==="next"&&h>=p||c==="prev"&&h<=p,u=()=>{o=new Date().getTime(),a===null&&(a=o);const h=Math.max(Math.min((o-a)/l,1),0),p=.5-Math.cos(h*Math.PI)/2;let f=r+p*(t-r);if(d(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),d(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function di(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function yt(i,e){e===void 0&&(e="");const t=lt(),n=[...i.children];return t.HTMLSlotElement&&i instanceof HTMLSlotElement&&n.push(...i.assignedElements()),e?n.filter(s=>s.matches(e)):n}function rv(i,e){const t=[e];for(;t.length>0;){const n=t.shift();if(i===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function av(i,e){const t=lt();let n=e.contains(i);return!n&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(n=[...e.assignedElements()].includes(i),n||(n=rv(i,e))),n}function pr(i){try{console.warn(i);return}catch{}}function Ht(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:On(e)),t}function mr(i){const e=lt(),t=vt(),n=i.getBoundingClientRect(),s=t.body,r=i.clientTop||s.clientTop||0,a=i.clientLeft||s.clientLeft||0,o=i===e?e.scrollY:i.scrollTop,l=i===e?e.scrollX:i.scrollLeft;return{top:n.top+o-r,left:n.left+l-a}}function ov(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function lv(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Hn(i,e){return lt().getComputedStyle(i,null).getPropertyValue(e)}function vs(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function ai(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function ds(i,e){function t(n){n.target===i&&(e.call(i,n),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function so(i,e,t){const n=lt();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function He(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}function Sr(i){return e=>Math.abs(e)>0&&i.browser&&i.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}let aa;function cv(){const i=lt(),e=vt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function ed(){return aa||(aa=cv()),aa}let oa;function dv(i){let{userAgent:e}=i===void 0?{}:i;const t=ed(),n=lt(),s=n.navigator.platform,r=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&f&&t.touch&&g.indexOf(`${o}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),f=!1),c&&!p&&(a.os="android",a.android=!0),(d||h||u)&&(a.os="ios",a.ios=!0),a}function td(i){return i===void 0&&(i={}),oa||(oa=dv(i)),oa}let la;function uv(){const i=lt(),e=td();let t=!1;function n(){const o=i.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(i.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=l<16||l===16&&c<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),r=n(),a=r||s&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:s}}function nd(){return la||(la=uv()),la}function fv(i){let{swiper:e,on:t,emit:n}=i;const s=lt();let r=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(u=>{a=s.requestAnimationFrame(()=>{const{width:h,height:p}=e;let f=h,g=p;u.forEach(_=>{let{contentBoxSize:m,contentRect:x,target:v}=_;v&&v!==e.el||(f=x?x.width:(m[0]||m).inlineSize,g=x?x.height:(m[0]||m).blockSize)}),(f!==h||g!==p)&&o()})}),r.observe(e.el))},c=()=>{a&&s.cancelAnimationFrame(a),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},d=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){l();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",d)})}function hv(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=[],a=lt(),o=function(d,u){u===void 0&&(u={});const h=a.MutationObserver||a.WebkitMutationObserver,p=new h(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};a.requestAnimationFrame?a.requestAnimationFrame(g):a.setTimeout(g,0)});p.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=ai(e.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var pv={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const s=t?"unshift":"push";return i.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][s](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function s(){n.off(i,s),s.__emitterProxy&&delete s.__emitterProxy;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];e.apply(n,a)}return s.__emitterProxy=e,n.on(i,s,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[n].splice(r,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,n;for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),n=i):(e=r[0].events,t=r[0].data,n=r[0].context||i),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),i.eventsListeners&&i.eventsListeners[l]&&i.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),i}};function mv(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(Hn(n,"padding-left")||0,10)-parseInt(Hn(n,"padding-right")||0,10),t=t-parseInt(Hn(n,"padding-top")||0,10)-parseInt(Hn(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function gv(){const i=this;function e(y,R){return parseFloat(y.getPropertyValue(i.getDirectionLabel(R))||0)}const t=i.params,{wrapperEl:n,slidesEl:s,size:r,rtlTranslate:a,wrongRTL:o}=i,l=i.virtual&&t.virtual.enabled,c=l?i.virtual.slides.length:i.slides.length,d=yt(s,`.${i.params.slideClass}, swiper-slide`),u=l?i.virtual.slides.length:d.length;let h=[];const p=[],f=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(i));let _=t.slidesOffsetAfter;typeof _=="function"&&(_=t.slidesOffsetAfter.call(i));const m=i.snapGrid.length,x=i.slidesGrid.length;let v=t.spaceBetween,S=-g,T=0,A=0;if(typeof r>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*r:typeof v=="string"&&(v=parseFloat(v)),i.virtualSize=-v,d.forEach(y=>{a?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(as(n,"--swiper-centered-offset-before",""),as(n,"--swiper-centered-offset-after",""));const w=t.grid&&t.grid.rows>1&&i.grid;w?i.grid.initSlides(d):i.grid&&i.grid.unsetSlides();let C;const M=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<u;y+=1){C=0;let R;if(d[y]&&(R=d[y]),w&&i.grid.updateSlide(y,R,d),!(d[y]&&Hn(R,"display")==="none")){if(t.slidesPerView==="auto"){M&&(d[y].style[i.getDirectionLabel("width")]="");const D=getComputedStyle(R),I=R.style.transform,U=R.style.webkitTransform;if(I&&(R.style.transform="none"),U&&(R.style.webkitTransform="none"),t.roundLengths)C=i.isHorizontal()?so(R,"width"):so(R,"height");else{const B=e(D,"width"),F=e(D,"padding-left"),N=e(D,"padding-right"),L=e(D,"margin-left"),Y=e(D,"margin-right"),te=D.getPropertyValue("box-sizing");if(te&&te==="border-box")C=B+L+Y;else{const{clientWidth:ae,offsetWidth:Se}=R;C=B+F+N+L+Y+(Se-ae)}}I&&(R.style.transform=I),U&&(R.style.webkitTransform=U),t.roundLengths&&(C=Math.floor(C))}else C=(r-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),d[y]&&(d[y].style[i.getDirectionLabel("width")]=`${C}px`);d[y]&&(d[y].swiperSlideSize=C),f.push(C),t.centeredSlides?(S=S+C/2+T/2+v,T===0&&y!==0&&(S=S-r/2-v),y===0&&(S=S-r/2-v),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),A%t.slidesPerGroup===0&&h.push(S),p.push(S)):(t.roundLengths&&(S=Math.floor(S)),(A-Math.min(i.params.slidesPerGroupSkip,A))%i.params.slidesPerGroup===0&&h.push(S),p.push(S),S=S+C+v),i.virtualSize+=C+v,T=C,A+=1}}if(i.virtualSize=Math.max(i.virtualSize,r)+_,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${i.virtualSize+v}px`),t.setWrapperSize&&(n.style[i.getDirectionLabel("width")]=`${i.virtualSize+v}px`),w&&i.grid.updateWrapperSize(C,h),!t.centeredSlides){const y=[];for(let R=0;R<h.length;R+=1){let D=h[R];t.roundLengths&&(D=Math.floor(D)),h[R]<=i.virtualSize-r&&y.push(D)}h=y,Math.floor(i.virtualSize-r)-Math.floor(h[h.length-1])>1&&h.push(i.virtualSize-r)}if(l&&t.loop){const y=f[0]+v;if(t.slidesPerGroup>1){const R=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),D=y*t.slidesPerGroup;for(let I=0;I<R;I+=1)h.push(h[h.length-1]+D)}for(let R=0;R<i.virtual.slidesBefore+i.virtual.slidesAfter;R+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+y),p.push(p[p.length-1]+y),i.virtualSize+=y}if(h.length===0&&(h=[0]),v!==0){const y=i.isHorizontal()&&a?"marginLeft":i.getDirectionLabel("marginRight");d.filter((R,D)=>!t.cssMode||t.loop?!0:D!==d.length-1).forEach(R=>{R.style[y]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;f.forEach(D=>{y+=D+(v||0)}),y-=v;const R=y>r?y-r:0;h=h.map(D=>D<=0?-g:D>R?R+_:D)}if(t.centerInsufficientSlides){let y=0;f.forEach(D=>{y+=D+(v||0)}),y-=v;const R=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(y+R<r){const D=(r-y-R)/2;h.forEach((I,U)=>{h[U]=I-D}),p.forEach((I,U)=>{p[U]=I+D})}}if(Object.assign(i,{slides:d,snapGrid:h,slidesGrid:p,slidesSizesGrid:f}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){as(n,"--swiper-centered-offset-before",`${-h[0]}px`),as(n,"--swiper-centered-offset-after",`${i.size/2-f[f.length-1]/2}px`);const y=-i.snapGrid[0],R=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(D=>D+y),i.slidesGrid=i.slidesGrid.map(D=>D+R)}if(u!==c&&i.emit("slidesLengthChange"),h.length!==m&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),p.length!==x&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const y=`${t.containerModifierClass}backface-hidden`,R=i.el.classList.contains(y);u<=t.maxBackfaceHiddenSlides?R||i.el.classList.add(y):R&&i.el.classList.remove(y)}}function _v(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const o=e.activeIndex+r;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;s=o>s?o:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function vv(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}const ac=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function xv(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:s,snapGrid:r}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-i;s&&(a=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(a+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),h=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),p=-(a-d),f=p+e.slidesSizesGrid[l],g=p>=0&&p<=e.size-e.slidesSizesGrid[l],_=p>=0&&p<e.size-1||f>1&&f<=e.size||p<=0&&f>=e.size;_&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),ac(c,_,t.slideVisibleClass),ac(c,g,t.slideFullyVisibleClass),c.progress=s?-u:u,c.originalProgress=s?-h:h}}function Sv(i){const e=this;if(typeof i>"u"){const d=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*d||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:a,progressLoop:o}=e;const l=r,c=a;if(n===0)s=0,r=!0,a=!0;else{s=(i-e.minTranslate())/n;const d=Math.abs(i-e.minTranslate())<1,u=Math.abs(i-e.maxTranslate())<1;r=d||s<=0,a=u||s>=1,d&&(s=0),u&&(s=1)}if(t.loop){const d=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[d],p=e.slidesGrid[u],f=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(i);g>=h?o=(g-h)/f:o=(g+f-p)/f,o>1&&(o-=1)}Object.assign(e,{progress:s,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",s)}const ca=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function yv(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:s}=i,r=i.virtual&&t.virtual.enabled,a=i.grid&&t.grid&&t.grid.rows>1,o=u=>yt(n,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(t.loop){let u=s-i.virtual.slidesBefore;u<0&&(u=i.virtual.slides.length+u),u>=i.virtual.slides.length&&(u-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${s}"]`);else a?(l=e.find(u=>u.column===s),d=e.find(u=>u.column===s+1),c=e.find(u=>u.column===s-1)):l=e[s];l&&(a||(d=lv(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=ov(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(u=>{ca(u,u===l,t.slideActiveClass),ca(u,u===d,t.slideNextClass),ca(u,u===c,t.slidePrevClass)}),i.emitSlidesClasses()}const lr=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){let s=n.querySelector(`.${i.params.lazyPreloaderClass}`);!s&&i.isElement&&(n.shadowRoot?s=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(s=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},da=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ro=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),s=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const a=s,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),i.slides.forEach((l,c)=>{o.includes(l.column)&&da(i,c)});return}const r=s+n-1;if(i.params.rewind||i.params.loop)for(let a=s-e;a<=r+e;a+=1){const o=(a%t+t)%t;(o<s||o>r)&&da(i,o)}else for(let a=Math.max(s-e,0);a<=Math.min(r+e,t-1);a+=1)a!==s&&(a>r||a<s)&&da(i,a)};function Mv(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?n>=e[r]&&n<e[r+1]-(e[r+1]-e[r])/2?s=r:n>=e[r]&&n<e[r+1]&&(s=r+1):n>=e[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Ev(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:s,activeIndex:r,realIndex:a,snapIndex:o}=e;let l=i,c;const d=p=>{let f=p-e.virtual.slidesBefore;return f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),f};if(typeof l>"u"&&(l=Mv(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const p=Math.min(s.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/s.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const u=e.grid&&s.grid&&s.grid.rows>1;let h;if(e.virtual&&s.virtual.enabled&&s.loop)h=d(l);else if(u){const p=e.slides.find(g=>g.column===l);let f=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(f)&&(f=Math.max(e.slides.indexOf(p),0)),h=Math.floor(f/s.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?h=parseInt(p,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:l}),e.initialized&&ro(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function Tv(i,e){const t=this,n=t.params;let s=i.closest(`.${n.slideClass}, swiper-slide`);!s&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(o=>{!s&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(s=o)});let r=!1,a;if(s){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===s){r=!0,a=o;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var bv={updateSize:mv,updateSlides:gv,updateAutoHeight:_v,updateSlidesOffset:vv,updateSlidesProgress:xv,updateProgress:Sv,updateSlidesClasses:yv,updateActiveIndex:Ev,updateClickedSlide:Tv};function wv(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:s,wrapperEl:r}=e;if(t.virtualTranslate)return n?-s:s;if(t.cssMode)return s;let a=io(r,i);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function Av(i,e){const t=this,{rtlTranslate:n,params:s,wrapperEl:r,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-i:i:l=i,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:s.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const u=t.maxTranslate()-t.minTranslate();u===0?d=0:d=(i-t.minTranslate())/u,d!==a&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function Rv(){return-this.snapGrid[0]}function Cv(){return-this.snapGrid[this.snapGrid.length-1]}function Pv(i,e,t,n,s){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(n&&i>l?d=l:n&&i<c?d=c:d=i,r.updateProgress(d),a.cssMode){const u=r.isHorizontal();if(e===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return Qc({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Lv={getTranslate:wv,setTranslate:Av,minTranslate:Rv,maxTranslate:Cv,translateTo:Pv};function Iv(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function id(i){let{swiper:e,runCallbacks:t,direction:n,step:s}=i;const{activeIndex:r,previousIndex:a}=e;let o=n;if(o||(r>a?o="next":r<a?o="prev":o="reset"),e.emit(`transition${s}`),t&&r!==a){if(o==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),o==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function Dv(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),id({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function Nv(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),id({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var Uv={setTransition:Iv,transitionStart:Dv,transitionEnd:Nv};function Ov(i,e,t,n,s){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let a=i;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:h,wrapperEl:p,enabled:f}=r;if(!f&&!n&&!s||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const g=Math.min(r.params.slidesPerGroupSkip,a);let _=g+Math.floor((a-g)/r.params.slidesPerGroup);_>=l.length&&(_=l.length-1);const m=-l[_];if(o.normalizeSlideIndex)for(let w=0;w<c.length;w+=1){const C=-Math.floor(m*100),M=Math.floor(c[w]*100),y=Math.floor(c[w+1]*100);typeof c[w+1]<"u"?C>=M&&C<y-(y-M)/2?a=w:C>=M&&C<y&&(a=w+1):C>=M&&(a=w)}if(r.initialized&&a!==u&&(!r.allowSlideNext&&(h?m>r.translate&&m>r.minTranslate():m<r.translate&&m<r.minTranslate())||!r.allowSlidePrev&&m>r.translate&&m>r.maxTranslate()&&(u||0)!==a))return!1;a!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(m);let x;a>u?x="next":a<u?x="prev":x="reset";const v=r.virtual&&r.params.virtual.enabled;if(!(v&&s)&&(h&&-m===r.translate||!h&&m===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(m),x!=="reset"&&(r.transitionStart(t,x),r.transitionEnd(t,x)),!1;if(o.cssMode){const w=r.isHorizontal(),C=h?m:-m;if(e===0)v&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),v&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[w?"scrollLeft":"scrollTop"]=C})):p[w?"scrollLeft":"scrollTop"]=C,v&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Qc({swiper:r,targetPosition:C,side:w?"left":"top"}),!0;p.scrollTo({[w?"left":"top"]:C,behavior:"smooth"})}return!0}const A=nd().isSafari;return v&&!s&&A&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(m),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,n),r.transitionStart(t,x),e===0?r.transitionEnd(t,x):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(C){!r||r.destroyed||C.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,x))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Fv(i,e,t,n){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let a=i;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)a=a+s.virtual.slidesBefore;else{let o;if(r){const h=a*s.params.grid.rows;o=s.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===h).column}else o=s.getSlideIndexByData(a);const l=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:c}=s.params;let d=s.params.slidesPerView;d==="auto"?d=s.slidesPerViewDynamic():(d=Math.ceil(parseFloat(s.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-o<d;if(c&&(u=u||o<Math.ceil(d/2)),n&&c&&s.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const h=c?o<s.activeIndex?"prev":"next":o-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?s.realIndex:void 0})}if(r){const h=a*s.params.grid.rows;a=s.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===h).column}else a=s.getSlideIndexByData(a)}return requestAnimationFrame(()=>{s.slideTo(a,e,t,n)}),s}function Bv(i,e,t){e===void 0&&(e=!0);const n=this,{enabled:s,params:r,animating:a}=n;if(!s||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:o,c=n.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,i,e,t)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+l,i,e,t)}function zv(i,e,t){e===void 0&&(e=!0);const n=this,{params:s,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);const d=n.virtual&&s.virtual.enabled;if(s.loop){if(c&&!d&&s.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=o?n.translate:-n.translate;function h(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const p=h(u),f=r.map(x=>h(x)),g=s.freeMode&&s.freeMode.enabled;let _=r[f.indexOf(p)-1];if(typeof _>"u"&&(s.cssMode||g)){let x;r.forEach((v,S)=>{p>=v&&(x=S)}),typeof x<"u"&&(_=g?r[x]:r[x>0?x-1:x])}let m=0;if(typeof _<"u"&&(m=a.indexOf(_),m<0&&(m=n.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(m=m-n.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&n.isBeginning){const x=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(x,i,e,t)}else if(s.loop&&n.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(m,i,e,t)}),!0;return n.slideTo(m,i,e,t)}function kv(i,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof i>"u"&&(i=n.params.speed),n.slideTo(n.activeIndex,i,e,t)}function Hv(i,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const s=this;if(s.destroyed)return;typeof i>"u"&&(i=s.params.speed);let r=s.activeIndex;const a=Math.min(s.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[o]){const c=s.snapGrid[o],d=s.snapGrid[o+1];l-c>(d-c)*n&&(r+=s.params.slidesPerGroup)}else{const c=s.snapGrid[o-1],d=s.snapGrid[o];l-c<=(d-c)*n&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,i,e,t)}function Vv(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let s=i.clickedIndex,r;const a=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;r=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<i.loopedSlides-n/2||s>i.slides.length-i.loopedSlides+n/2?(i.loopFix(),s=i.getSlideIndex(yt(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),ci(()=>{i.slideTo(s)})):i.slideTo(s):s>i.slides.length-n?(i.loopFix(),s=i.getSlideIndex(yt(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),ci(()=>{i.slideTo(s)})):i.slideTo(s)}else i.slideTo(s)}var Gv={slideTo:Ov,slideToLoop:Fv,slideNext:Bv,slidePrev:zv,slideReset:kv,slideToClosest:Hv,slideToClickedSlide:Vv};function Wv(i,e){const t=this,{params:n,slidesEl:s}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{yt(s,`.${n.slideClass}, swiper-slide`).forEach((h,p)=>{h.setAttribute("data-swiper-slide-index",p)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),l=t.slides.length%o!==0,c=a&&t.slides.length%n.grid.rows!==0,d=u=>{for(let h=0;h<u;h+=1){const p=t.isElement?Ht("swiper-slide",[n.slideBlankClass]):Ht("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(l){if(n.loopAddBlankSlides){const u=o-t.slides.length%o;d(u),t.recalcSlides(),t.updateSlides()}else pr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(c){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;d(u),t.recalcSlides(),t.updateSlides()}else pr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:i,direction:n.centeredSlides?void 0:"next",initial:e})}function Xv(i){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:s,activeSlideIndex:r,initial:a,byController:o,byMousewheel:l}=i===void 0?{}:i;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:h,slidesEl:p,params:f}=c,{centeredSlides:g,initialSlide:_}=f;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&f.virtual.enabled){t&&(!f.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):f.centeredSlides&&c.snapIndex<f.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=h,c.emit("loopFix");return}let m=f.slidesPerView;m==="auto"?m=c.slidesPerViewDynamic():(m=Math.ceil(parseFloat(f.slidesPerView,10)),g&&m%2===0&&(m=m+1));const x=f.slidesPerGroupAuto?m:f.slidesPerGroup;let v=x;v%x!==0&&(v+=x-v%x),v+=f.loopAdditionalSlides,c.loopedSlides=v;const S=c.grid&&f.grid&&f.grid.rows>1;d.length<m+v||c.params.effect==="cards"&&d.length<m+v*2?pr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&f.grid.fill==="row"&&pr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const T=[],A=[],w=S?Math.ceil(d.length/f.grid.rows):d.length,C=a&&w-_<m&&!g;let M=C?_:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(F=>F.classList.contains(f.slideActiveClass))):M=r;const y=n==="next"||!n,R=n==="prev"||!n;let D=0,I=0;const B=(S?d[r].column:r)+(g&&typeof s>"u"?-m/2+.5:0);if(B<v){D=Math.max(v-B,x);for(let F=0;F<v-B;F+=1){const N=F-Math.floor(F/w)*w;if(S){const L=w-N-1;for(let Y=d.length-1;Y>=0;Y-=1)d[Y].column===L&&T.push(Y)}else T.push(w-N-1)}}else if(B+m>w-v){I=Math.max(B-(w-v*2),x),C&&(I=Math.max(I,m-w+_+1));for(let F=0;F<I;F+=1){const N=F-Math.floor(F/w)*w;S?d.forEach((L,Y)=>{L.column===N&&A.push(Y)}):A.push(N)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<m+v*2&&(A.includes(r)&&A.splice(A.indexOf(r),1),T.includes(r)&&T.splice(T.indexOf(r),1)),R&&T.forEach(F=>{d[F].swiperLoopMoveDOM=!0,p.prepend(d[F]),d[F].swiperLoopMoveDOM=!1}),y&&A.forEach(F=>{d[F].swiperLoopMoveDOM=!0,p.append(d[F]),d[F].swiperLoopMoveDOM=!1}),c.recalcSlides(),f.slidesPerView==="auto"?c.updateSlides():S&&(T.length>0&&R||A.length>0&&y)&&c.slides.forEach((F,N)=>{c.grid.updateSlide(N,F,c.slides)}),f.watchSlidesProgress&&c.updateSlidesOffset(),t){if(T.length>0&&R){if(typeof e>"u"){const F=c.slidesGrid[M],L=c.slidesGrid[M+D]-F;l?c.setTranslate(c.translate-L):(c.slideTo(M+Math.ceil(D),0,!1,!0),s&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-L,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-L))}else if(s){const F=S?T.length/f.grid.rows:T.length;c.slideTo(c.activeIndex+F,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(A.length>0&&y)if(typeof e>"u"){const F=c.slidesGrid[M],L=c.slidesGrid[M-I]-F;l?c.setTranslate(c.translate-L):(c.slideTo(M-I,0,!1,!0),s&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-L,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-L))}else{const F=S?A.length/f.grid.rows:A.length;c.slideTo(c.activeIndex-F,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=h,c.controller&&c.controller.control&&!o){const F={slideRealIndex:e,direction:n,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...F,slideTo:N.params.slidesPerView===f.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...F,slideTo:c.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}c.emit("loopFix")}function Yv(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||!t||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;n[r]=s}),i.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),n.forEach(s=>{t.append(s)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var qv={loopCreate:Wv,loopFix:Xv,loopDestroy:Yv};function $v(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function jv(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Kv={setGrabCursor:$v,unsetGrabCursor:jv};function Zv(i,e){e===void 0&&(e=this);function t(n){if(!n||n===vt()||n===lt())return null;n.assignedSlot&&(n=n.assignedSlot);const s=n.closest(i);return!s&&!n.getRootNode?null:s||t(n.getRootNode().host)}return t(e)}function oc(i,e,t){const n=lt(),{params:s}=i,r=s.edgeSwipeDetection,a=s.edgeSwipeThreshold;return r&&(t<=a||t>=n.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Jv(i){const e=this,t=vt();let n=i;n.originalEvent&&(n=n.originalEvent);const s=e.touchEventsData;if(n.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==n.pointerId)return;s.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(s.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){oc(e,n,n.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&n.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!av(l,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||s.isTouched&&s.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(h?Zv(u,l):l.closest(u))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const p=a.currentX,f=a.currentY;if(!oc(e,n,p))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=f,s.touchStartTime=Yt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let g=!0;l.matches(s.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(s.focusableElements))&&t.activeElement.blur();const _=g&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||_)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function Qv(i){const e=vt(),t=this,n=t.touchEventsData,{params:s,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!s.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(T=>T.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=Yt());return}if(s.touchReleaseOnEdges&&!s.loop)if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(a&&(d>r.startX&&-t.translate<=t.maxTranslate()||d<r.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const h=r.currentX-r.startX,p=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+p**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:h*h+p*p>=25&&(T=Math.atan2(Math.abs(p),Math.abs(h))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>s.touchAngle:90-T>s.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let f=t.isHorizontal()?h:p,g=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(f=Math.abs(f)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),r.diff=f,f*=s.touchRatio,a&&(f=-f,g=-g);const _=t.touchesDirection;t.swipeDirection=f>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const m=t.params.loop&&!s.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(m&&x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),s._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&_!==t.touchesDirection&&m&&x&&Math.abs(f)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=f+n.startTranslate;let v=!0,S=s.resistanceRatio;if(s.touchReleaseOnEdges&&(S=0),f>0?(m&&x&&n.allowThresholdMove&&n.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(v=!1,s.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+f)**S))):f<0&&(m&&x&&n.allowThresholdMove&&n.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(v=!1,s.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-f)**S))),v&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),s.threshold>0)if(Math.abs(f)>s.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function ex(i){const e=this,t=e.touchEventsData;let n=i;n.originalEvent&&(n=n.originalEvent);let s;if(n.type==="touchend"||n.type==="touchcancel"){if(s=[...n.changedTouches].find(T=>T.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;s=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=e;if(!d||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=Yt(),h=u-t.touchStartTime;if(e.allowClick){const T=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(T&&T[0]||n.target,T),e.emit("tap click",n),h<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Yt(),ci(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(a.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const f=p>=-e.maxTranslate()&&!e.params.loop;let g=0,_=e.slidesSizesGrid[0];for(let T=0;T<c.length;T+=T<a.slidesPerGroupSkip?1:a.slidesPerGroup){const A=T<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[T+A]<"u"?(f||p>=c[T]&&p<c[T+A])&&(g=T,_=c[T+A]-c[T]):(f||p>=c[T])&&(g=T,_=c[c.length-1]-c[c.length-2])}let m=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(m=0));const v=(p-c[g])/_,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?m:g+S):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(g+S):x!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(x):e.slideTo(g))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(g+S):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(m!==null?m:g+S),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:g))}}function lc(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:s,snapGrid:r}=i,a=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!a?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=s,i.allowSlideNext=n,i.params.watchOverflow&&r!==i.snapGrid&&i.checkOverflow()}function tx(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function nx(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let s;const r=i.maxTranslate()-i.minTranslate();r===0?s=0:s=(i.translate-i.minTranslate())/r,s!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function ix(i){const e=this;lr(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function sx(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const sd=(i,e)=>{const t=vt(),{params:n,el:s,wrapperEl:r,device:a}=i,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!s||typeof s=="string"||(t[l]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:o}),s[l]("touchstart",i.onTouchStart,{passive:!1}),s[l]("pointerdown",i.onTouchStart,{passive:!1}),t[l]("touchmove",i.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",i.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",i.onTouchEnd,{passive:!0}),t[l]("pointerup",i.onTouchEnd,{passive:!0}),t[l]("pointercancel",i.onTouchEnd,{passive:!0}),t[l]("touchcancel",i.onTouchEnd,{passive:!0}),t[l]("pointerout",i.onTouchEnd,{passive:!0}),t[l]("pointerleave",i.onTouchEnd,{passive:!0}),t[l]("contextmenu",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&s[l]("click",i.onClick,!0),n.cssMode&&r[l]("scroll",i.onScroll),n.updateOnWindowResize?i[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",lc,!0):i[c]("observerUpdate",lc,!0),s[l]("load",i.onLoad,{capture:!0}))};function rx(){const i=this,{params:e}=i;i.onTouchStart=Jv.bind(i),i.onTouchMove=Qv.bind(i),i.onTouchEnd=ex.bind(i),i.onDocumentTouchStart=sx.bind(i),e.cssMode&&(i.onScroll=nx.bind(i)),i.onClick=tx.bind(i),i.onLoad=ix.bind(i),sd(i,"on")}function ax(){sd(this,"off")}var ox={attachEvents:rx,detachEvents:ax};const cc=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function lx(){const i=this,{realIndex:e,initialized:t,params:n,el:s}=i,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=vt(),o=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?i.el:a.querySelector(n.breakpointsBase),c=i.getBreakpoint(r,o,l);if(!c||i.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||i.originalParams,h=cc(i,n),p=cc(i,u),f=i.params.grabCursor,g=u.grabCursor,_=n.enabled;h&&!p?(s.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!h&&p&&(s.classList.add(`${n.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&n.grid.fill==="column")&&s.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),f&&!g?i.unsetGrabCursor():!f&&g&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof u[A]>"u")return;const w=n[A]&&n[A].enabled,C=u[A]&&u[A].enabled;w&&!C&&i[A].disable(),!w&&C&&i[A].enable()});const m=u.direction&&u.direction!==n.direction,x=n.loop&&(u.slidesPerView!==n.slidesPerView||m),v=n.loop;m&&t&&i.changeDirection(),zt(i.params,u);const S=i.params.enabled,T=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),_&&!S?i.disable():!_&&S&&i.enable(),i.currentBreakpoint=c,i.emit("_beforeBreakpoint",u),t&&(x?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!v&&T?(i.loopCreate(e),i.updateSlides()):v&&!T&&i.loopDestroy()),i.emit("breakpoint",u)}function cx(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let n=!1;const s=lt(),r=e==="window"?s.innerHeight:t.clientHeight,a=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?s.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var dx={setBreakpoint:lx,getBreakpoint:cx};function ux(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(s=>{n[s]&&t.push(e+s)}):typeof n=="string"&&t.push(e+n)}),t}function fx(){const i=this,{classNames:e,params:t,rtl:n,el:s,device:r}=i,a=ux(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),s.classList.add(...e),i.emitContainerClasses()}function hx(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var px={addClasses:fx,removeClasses:hx};function mx(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const s=i.slides.length-1,r=i.slidesGrid[s]+i.slidesSizesGrid[s]+n*2;i.isLocked=i.size>r}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var gx={checkOverflow:mx},dc={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _x(i,e){return function(n){n===void 0&&(n={});const s=Object.keys(n)[0],r=n[s];if(typeof r!="object"||r===null){zt(e,n);return}if(i[s]===!0&&(i[s]={enabled:!0}),s==="navigation"&&i[s]&&i[s].enabled&&!i[s].prevEl&&!i[s].nextEl&&(i[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&i[s]&&i[s].enabled&&!i[s].el&&(i[s].auto=!0),!(s in i&&"enabled"in r)){zt(e,n);return}typeof i[s]=="object"&&!("enabled"in i[s])&&(i[s].enabled=!0),i[s]||(i[s]={enabled:!1}),zt(e,n)}}const ua={eventsEmitter:pv,update:bv,translate:Lv,transition:Uv,slide:Gv,loop:qv,grabCursor:Kv,events:ox,breakpoints:dx,checkOverflow:gx,classes:px},fa={};class Bt{constructor(){let e,t;for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?t=s[0]:[e,t]=s,t||(t={}),t=zt({},t),e&&!t.el&&(t.el=e);const a=vt();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const d=[];return a.querySelectorAll(t.el).forEach(u=>{const h=zt({},t,{el:u});d.push(new Bt(h))}),d}const o=this;o.__swiper__=!0,o.support=ed(),o.device=td({userAgent:t.userAgent}),o.browser=nd(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach(d=>{d({params:t,swiper:o,extendParams:_x(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=zt({},dc,l);return o.params=zt({},c,fa,t),o.originalParams=zt({},o.params),o.passedParams=zt({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,s=yt(t,`.${n.slideClass}, swiper-slide`),r=vs(s[0]);return vs(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=yt(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const s=n.minTranslate(),a=(n.maxTranslate()-s)*e+s;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const s=e.getSlideClasses(n);t.push({slideEl:n,classNames:s}),e.emit("_slideClass",n,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:s,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let d=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,h;for(let p=c+1;p<r.length;p+=1)r[p]&&!h&&(u+=Math.ceil(r[p].swiperSlideSize),d+=1,u>l&&(h=!0));for(let p=c-1;p>=0;p-=1)r[p]&&!h&&(u+=r[p].swiperSlideSize,d+=1,u>l&&(h=!0))}else if(e==="current")for(let u=c+1;u<r.length;u+=1)(t?a[u]+o[u]-a[c]<l:a[u]-a[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&lr(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)s(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,s=n.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${s}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(s()):yt(n,s())[0];return!a&&t.params.createElements&&(a=Ht("div",t.params.wrapperClass),n.append(a),yt(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Hn(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Hn(n,"direction")==="rtl"),wrongRTL:Hn(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?lr(t,r):r.addEventListener("load",a=>{lr(t,a.target)})}),ro(t),t.initialized=!0,ro(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:s,el:r,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),s.loop&&n.loopDestroy(),t&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),nv(n)),n.destroyed=!0),null}static extendDefaults(e){zt(fa,e)}static get extendedDefaults(){return fa}static get defaults(){return dc}static installModule(e){Bt.prototype.__modules__||(Bt.prototype.__modules__=[]);const t=Bt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Bt.installModule(t)),Bt):(Bt.installModule(e),Bt)}}Object.keys(ua).forEach(i=>{Object.keys(ua[i]).forEach(e=>{Bt.prototype[e]=ua[i][e]})});Bt.use([fv,hv]);function vx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r;const a=vt();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=a.createElement("div");function l(f,g){const _=e.params.virtual;if(_.cache&&e.virtual.cache[g])return e.virtual.cache[g];let m;return _.renderSlide?(m=_.renderSlide.call(e,f,g),typeof m=="string"&&(o.innerHTML=m,m=o.children[0])):e.isElement?m=Ht("swiper-slide"):m=Ht("div",e.params.slideClass),m.setAttribute("data-swiper-slide-index",g),_.renderSlide||(m.innerHTML=f),_.cache&&(e.virtual.cache[g]=m),m}function c(f,g,_){const{slidesPerView:m,slidesPerGroup:x,centeredSlides:v,loop:S,initialSlide:T}=e.params;if(g&&!S&&T>0)return;const{addSlidesBefore:A,addSlidesAfter:w}=e.params.virtual,{from:C,to:M,slides:y,slidesGrid:R,offset:D}=e.virtual;e.params.cssMode||e.updateActiveIndex();const I=typeof _>"u"?e.activeIndex||0:_;let U;e.rtlTranslate?U="right":U=e.isHorizontal()?"left":"top";let B,F;v?(B=Math.floor(m/2)+x+w,F=Math.floor(m/2)+x+A):(B=m+(x-1)+w,F=(S?m:x)+A);let N=I-F,L=I+B;S||(N=Math.max(N,0),L=Math.min(L,y.length-1));let Y=(e.slidesGrid[N]||0)-(e.slidesGrid[0]||0);S&&I>=F?(N-=F,v||(Y+=e.slidesGrid[0])):S&&I<F&&(N=-F,v&&(Y+=e.slidesGrid[0])),Object.assign(e.virtual,{from:N,to:L,offset:Y,slidesGrid:e.slidesGrid,slidesBefore:F,slidesAfter:B});function te(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s("virtualUpdate")}if(C===N&&M===L&&!f){e.slidesGrid!==R&&Y!==D&&e.slides.forEach(W=>{W.style[U]=`${Y-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),s("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:Y,from:N,to:L,slides:function(){const X=[];for(let re=N;re<=L;re+=1)X.push(y[re]);return X}()}),e.params.virtual.renderExternalUpdate?te():s("virtualUpdate");return}const ae=[],Se=[],ke=W=>{let X=W;return W<0?X=y.length+W:X>=y.length&&(X=X-y.length),X};if(f)e.slides.filter(W=>W.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(W=>{W.remove()});else for(let W=C;W<=M;W+=1)if(W<N||W>L){const X=ke(W);e.slides.filter(re=>re.matches(`.${e.params.slideClass}[data-swiper-slide-index="${X}"], swiper-slide[data-swiper-slide-index="${X}"]`)).forEach(re=>{re.remove()})}const J=S?-y.length:0,V=S?y.length*2:y.length;for(let W=J;W<V;W+=1)if(W>=N&&W<=L){const X=ke(W);typeof M>"u"||f?Se.push(X):(W>M&&Se.push(X),W<C&&ae.push(X))}if(Se.forEach(W=>{e.slidesEl.append(l(y[W],W))}),S)for(let W=ae.length-1;W>=0;W-=1){const X=ae[W];e.slidesEl.prepend(l(y[X],X))}else ae.sort((W,X)=>X-W),ae.forEach(W=>{e.slidesEl.prepend(l(y[W],W))});yt(e.slidesEl,".swiper-slide, swiper-slide").forEach(W=>{W.style[U]=`${Y-Math.abs(e.cssOverflowAdjustment())}px`}),te()}function d(f){if(typeof f=="object"&&"length"in f)for(let g=0;g<f.length;g+=1)f[g]&&e.virtual.slides.push(f[g]);else e.virtual.slides.push(f);c(!0)}function u(f){const g=e.activeIndex;let _=g+1,m=1;if(Array.isArray(f)){for(let x=0;x<f.length;x+=1)f[x]&&e.virtual.slides.unshift(f[x]);_=g+f.length,m=f.length}else e.virtual.slides.unshift(f);if(e.params.virtual.cache){const x=e.virtual.cache,v={};Object.keys(x).forEach(S=>{const T=x[S],A=T.getAttribute("data-swiper-slide-index");A&&T.setAttribute("data-swiper-slide-index",parseInt(A,10)+m),v[parseInt(S,10)+m]=T}),e.virtual.cache=v}c(!0),e.slideTo(_,0)}function h(f){if(typeof f>"u"||f===null)return;let g=e.activeIndex;if(Array.isArray(f))for(let _=f.length-1;_>=0;_-=1)e.params.virtual.cache&&(delete e.virtual.cache[f[_]],Object.keys(e.virtual.cache).forEach(m=>{m>f&&(e.virtual.cache[m-1]=e.virtual.cache[m],e.virtual.cache[m-1].setAttribute("data-swiper-slide-index",m-1),delete e.virtual.cache[m])})),e.virtual.slides.splice(f[_],1),f[_]<g&&(g-=1),g=Math.max(g,0);else e.params.virtual.cache&&(delete e.virtual.cache[f],Object.keys(e.virtual.cache).forEach(_=>{_>f&&(e.virtual.cache[_-1]=e.virtual.cache[_],e.virtual.cache[_-1].setAttribute("data-swiper-slide-index",_-1),delete e.virtual.cache[_])})),e.virtual.slides.splice(f,1),f<g&&(g-=1),g=Math.max(g,0);c(!0),e.slideTo(g,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}n("beforeInit",()=>{if(!e.params.virtual.enabled)return;let f;if(typeof e.passedParams.virtual.slides>"u"){const g=[...e.slidesEl.children].filter(_=>_.matches(`.${e.params.slideClass}, swiper-slide`));g&&g.length&&(e.virtual.slides=[...g],f=!0,g.forEach((_,m)=>{_.setAttribute("data-swiper-slide-index",m),e.virtual.cache[m]=_,_.remove()}))}f||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),n("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{c()},100)):c())}),n("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&as(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:h,removeAllSlides:p,update:c})}function xx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=vt(),a=lt();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(d){if(!e.enabled)return;const{rtlTranslate:u}=e;let h=d;h.originalEvent&&(h=h.originalEvent);const p=h.keyCode||h.charCode,f=e.params.keyboard.pageUpDown,g=f&&p===33,_=f&&p===34,m=p===37,x=p===39,v=p===38,S=p===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&S||_)||!e.allowSlidePrev&&(e.isHorizontal()&&m||e.isVertical()&&v||g))return!1;if(!(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)&&!(r.activeElement&&r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(g||_||m||x||v||S)){let T=!1;if(ai(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&ai(e.el,`.${e.params.slideActiveClass}`).length===0)return;const A=e.el,w=A.clientWidth,C=A.clientHeight,M=a.innerWidth,y=a.innerHeight,R=mr(A);u&&(R.left-=A.scrollLeft);const D=[[R.left,R.top],[R.left+w,R.top],[R.left,R.top+C],[R.left+w,R.top+C]];for(let I=0;I<D.length;I+=1){const U=D[I];if(U[0]>=0&&U[0]<=M&&U[1]>=0&&U[1]<=y){if(U[0]===0&&U[1]===0)continue;T=!0}}if(!T)return}e.isHorizontal()?((g||_||m||x)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),((_||x)&&!u||(g||m)&&u)&&e.slideNext(),((g||m)&&!u||(_||x)&&u)&&e.slidePrev()):((g||_||v||S)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),(_||S)&&e.slideNext(),(g||v)&&e.slidePrev()),s("keyPress",p)}}function l(){e.keyboard.enabled||(r.addEventListener("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(r.removeEventListener("keydown",o),e.keyboard.enabled=!1)}n("init",()=>{e.params.keyboard.enabled&&l()}),n("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:l,disable:c})}function Sx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=lt();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let a,o=Yt(),l;const c=[];function d(v){let w=0,C=0,M=0,y=0;return"detail"in v&&(C=v.detail),"wheelDelta"in v&&(C=-v.wheelDelta/120),"wheelDeltaY"in v&&(C=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(w=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(w=C,C=0),M=w*10,y=C*10,"deltaY"in v&&(y=v.deltaY),"deltaX"in v&&(M=v.deltaX),v.shiftKey&&!M&&(M=y,y=0),(M||y)&&v.deltaMode&&(v.deltaMode===1?(M*=40,y*=40):(M*=800,y*=800)),M&&!w&&(w=M<1?-1:1),y&&!C&&(C=y<1?-1:1),{spinX:w,spinY:C,pixelX:M,pixelY:y}}function u(){e.enabled&&(e.mouseEntered=!0)}function h(){e.enabled&&(e.mouseEntered=!1)}function p(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&Yt()-o<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&Yt()-o<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),s("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),s("scroll",v.raw)),o=new r.Date().getTime(),!1)}function f(v){const S=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&S.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&S.releaseOnEdges)return!0;return!1}function g(v){let S=v,T=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const A=e.params.mousewheel;e.params.cssMode&&S.preventDefault();let w=e.el;e.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(e.params.mousewheel.eventsTarget));const C=w&&w.contains(S.target);if(!e.mouseEntered&&!C&&!A.releaseOnEdges)return!0;S.originalEvent&&(S=S.originalEvent);let M=0;const y=e.rtlTranslate?-1:1,R=d(S);if(A.forceToAxis)if(e.isHorizontal())if(Math.abs(R.pixelX)>Math.abs(R.pixelY))M=-R.pixelX*y;else return!0;else if(Math.abs(R.pixelY)>Math.abs(R.pixelX))M=-R.pixelY;else return!0;else M=Math.abs(R.pixelX)>Math.abs(R.pixelY)?-R.pixelX*y:-R.pixelY;if(M===0)return!0;A.invert&&(M=-M);let D=e.getTranslate()+M*A.sensitivity;if(D>=e.minTranslate()&&(D=e.minTranslate()),D<=e.maxTranslate()&&(D=e.maxTranslate()),T=e.params.loop?!0:!(D===e.minTranslate()||D===e.maxTranslate()),T&&e.params.nested&&S.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const I={time:Yt(),delta:Math.abs(M),direction:Math.sign(M),raw:v};c.length>=2&&c.shift();const U=c.length?c[c.length-1]:void 0;if(c.push(I),U?(I.direction!==U.direction||I.delta>U.delta||I.time>U.time+150)&&p(I):p(I),f(I))return!0}else{const I={time:Yt(),delta:Math.abs(M),direction:Math.sign(M)},U=l&&I.time<l.time+500&&I.delta<=l.delta&&I.direction===l.direction;if(!U){l=void 0;let B=e.getTranslate()+M*A.sensitivity;const F=e.isBeginning,N=e.isEnd;if(B>=e.minTranslate()&&(B=e.minTranslate()),B<=e.maxTranslate()&&(B=e.maxTranslate()),e.setTransition(0),e.setTranslate(B),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!F&&e.isBeginning||!N&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:I.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(a),a=void 0,c.length>=15&&c.shift();const L=c.length?c[c.length-1]:void 0,Y=c[0];if(c.push(I),L&&(I.delta>L.delta||I.direction!==L.direction))c.splice(0);else if(c.length>=15&&I.time-Y.time<500&&Y.delta-I.delta>=1&&I.delta<=6){const te=M>0?.8:.2;l=I,c.splice(0),a=ci(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,te)},0)}a||(a=ci(()=>{if(e.destroyed||!e.params)return;const te=.5;l=I,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,te)},500))}if(U||s("scroll",S),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),A.releaseOnEdges&&(B===e.minTranslate()||B===e.maxTranslate()))return!0}}return S.preventDefault?S.preventDefault():S.returnValue=!1,!1}function _(v){let S=e.el;e.params.mousewheel.eventsTarget!=="container"&&(S=document.querySelector(e.params.mousewheel.eventsTarget)),S[v]("mouseenter",u),S[v]("mouseleave",h),S[v]("wheel",g)}function m(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):e.mousewheel.enabled?!1:(_("addEventListener"),e.mousewheel.enabled=!0,!0)}function x(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):e.mousewheel.enabled?(_("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}n("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&x(),e.params.mousewheel.enabled&&m()}),n("destroy",()=>{e.params.cssMode&&m(),e.mousewheel.enabled&&x()}),Object.assign(e.mousewheel,{enable:m,disable:x})}function Co(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(s=>{if(!t[s]&&t.auto===!0){let r=yt(i.el,`.${n[s]}`)[0];r||(r=Ht("div",n[s]),r.className=n[s],i.el.append(r)),t[s]=r,e[s]=r}}),t}function yx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(f){let g;return f&&typeof f=="string"&&e.isElement&&(g=e.el.querySelector(f)||e.hostEl.querySelector(f),g)?g:(f&&(typeof f=="string"&&(g=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&g&&g.length>1&&e.el.querySelectorAll(f).length===1?g=e.el.querySelector(f):g&&g.length===1&&(g=g[0])),f&&!g?f:g)}function a(f,g){const _=e.params.navigation;f=He(f),f.forEach(m=>{m&&(m.classList[g?"add":"remove"](..._.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=g),e.params.watchOverflow&&e.enabled&&m.classList[e.isLocked?"add":"remove"](_.lockClass))})}function o(){const{nextEl:f,prevEl:g}=e.navigation;if(e.params.loop){a(g,!1),a(f,!1);return}a(g,e.isBeginning&&!e.params.rewind),a(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function c(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function d(){const f=e.params.navigation;if(e.params.navigation=Co(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let g=r(f.nextEl),_=r(f.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:_}),g=He(g),_=He(_);const m=(x,v)=>{x&&x.addEventListener("click",v==="next"?c:l),!e.enabled&&x&&x.classList.add(...f.lockClass.split(" "))};g.forEach(x=>m(x,"next")),_.forEach(x=>m(x,"prev"))}function u(){let{nextEl:f,prevEl:g}=e.navigation;f=He(f),g=He(g);const _=(m,x)=>{m.removeEventListener("click",x==="next"?c:l),m.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(m=>_(m,"next")),g.forEach(m=>_(m,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?p():(d(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{nextEl:f,prevEl:g}=e.navigation;if(f=He(f),g=He(g),e.enabled){o();return}[...f,...g].filter(_=>!!_).forEach(_=>_.classList.add(e.params.navigation.lockClass))}),n("click",(f,g)=>{let{nextEl:_,prevEl:m}=e.navigation;_=He(_),m=He(m);const x=g.target;let v=m.includes(x)||_.includes(x);if(e.isElement&&!v){const S=g.path||g.composedPath&&g.composedPath();S&&(v=S.find(T=>_.includes(T)||m.includes(T)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let S;_.length?S=_[0].classList.contains(e.params.navigation.hiddenClass):m.length&&(S=m[0].classList.contains(e.params.navigation.hiddenClass)),s(S===!0?"navigationShow":"navigationHide"),[..._,...m].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});const h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:h,disable:p,update:o,init:d,destroy:u})}function En(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Mx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(x,v){const{bulletActiveClass:S}=e.params.pagination;x&&(x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&(x.classList.add(`${S}-${v}`),x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${S}-${v}-${v}`)))}function d(x,v,S){if(x=x%S,v=v%S,v===x+1)return"next";if(v===x-1)return"previous"}function u(x){const v=x.target.closest(En(e.params.pagination.bulletClass));if(!v)return;x.preventDefault();const S=vs(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===S)return;const T=d(e.realIndex,S,e.slides.length);T==="next"?e.slideNext():T==="previous"?e.slidePrev():e.slideToLoop(S)}else e.slideTo(S)}function h(){const x=e.rtl,v=e.params.pagination;if(l())return;let S=e.pagination.el;S=He(S);let T,A;const w=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,C=e.params.loop?Math.ceil(w/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(A=e.previousRealIndex||0,T=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(T=e.snapIndex,A=e.previousSnapIndex):(A=e.previousIndex||0,T=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const M=e.pagination.bullets;let y,R,D;if(v.dynamicBullets&&(a=so(M[0],e.isHorizontal()?"width":"height"),S.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${a*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&A!==void 0&&(o+=T-(A||0),o>v.dynamicMainBullets-1?o=v.dynamicMainBullets-1:o<0&&(o=0)),y=Math.max(T-o,0),R=y+(Math.min(M.length,v.dynamicMainBullets)-1),D=(R+y)/2),M.forEach(I=>{const U=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(B=>`${v.bulletActiveClass}${B}`)].map(B=>typeof B=="string"&&B.includes(" ")?B.split(" "):B).flat();I.classList.remove(...U)}),S.length>1)M.forEach(I=>{const U=vs(I);U===T?I.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),v.dynamicBullets&&(U>=y&&U<=R&&I.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),U===y&&c(I,"prev"),U===R&&c(I,"next"))});else{const I=M[T];if(I&&I.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&M.forEach((U,B)=>{U.setAttribute("part",B===T?"bullet-active":"bullet")}),v.dynamicBullets){const U=M[y],B=M[R];for(let F=y;F<=R;F+=1)M[F]&&M[F].classList.add(...`${v.bulletActiveClass}-main`.split(" "));c(U,"prev"),c(B,"next")}}if(v.dynamicBullets){const I=Math.min(M.length,v.dynamicMainBullets+4),U=(a*I-a)/2-D*a,B=x?"right":"left";M.forEach(F=>{F.style[e.isHorizontal()?B:"top"]=`${U}px`})}}S.forEach((M,y)=>{if(v.type==="fraction"&&(M.querySelectorAll(En(v.currentClass)).forEach(R=>{R.textContent=v.formatFractionCurrent(T+1)}),M.querySelectorAll(En(v.totalClass)).forEach(R=>{R.textContent=v.formatFractionTotal(C)})),v.type==="progressbar"){let R;v.progressbarOpposite?R=e.isHorizontal()?"vertical":"horizontal":R=e.isHorizontal()?"horizontal":"vertical";const D=(T+1)/C;let I=1,U=1;R==="horizontal"?I=D:U=D,M.querySelectorAll(En(v.progressbarFillClass)).forEach(B=>{B.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${U})`,B.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(M.innerHTML=v.renderCustom(e,T+1,C),y===0&&s("paginationRender",M)):(y===0&&s("paginationRender",M),s("paginationUpdate",M)),e.params.watchOverflow&&e.enabled&&M.classList[e.isLocked?"add":"remove"](v.lockClass)})}function p(){const x=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let S=e.pagination.el;S=He(S);let T="";if(x.type==="bullets"){let A=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&A>v&&(A=v);for(let w=0;w<A;w+=1)x.renderBullet?T+=x.renderBullet.call(e,w,x.bulletClass):T+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(x.renderFraction?T=x.renderFraction.call(e,x.currentClass,x.totalClass):T=`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(x.renderProgressbar?T=x.renderProgressbar.call(e,x.progressbarFillClass):T=`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],S.forEach(A=>{x.type!=="custom"&&(A.innerHTML=T||""),x.type==="bullets"&&e.pagination.bullets.push(...A.querySelectorAll(En(x.bulletClass)))}),x.type!=="custom"&&s("paginationRender",S[0])}function f(){e.params.pagination=Co(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const x=e.params.pagination;if(!x.el)return;let v;typeof x.el=="string"&&e.isElement&&(v=e.el.querySelector(x.el)),!v&&typeof x.el=="string"&&(v=[...document.querySelectorAll(x.el)]),v||(v=x.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(x.el)],v.length>1&&(v=v.find(S=>ai(S,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=He(v),v.forEach(S=>{x.type==="bullets"&&x.clickable&&S.classList.add(...(x.clickableClass||"").split(" ")),S.classList.add(x.modifierClass+x.type),S.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(S.classList.add(`${x.modifierClass}${x.type}-dynamic`),o=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&S.classList.add(x.progressbarOppositeClass),x.clickable&&S.addEventListener("click",u),e.enabled||S.classList.add(x.lockClass)}))}function g(){const x=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=He(v),v.forEach(S=>{S.classList.remove(x.hiddenClass),S.classList.remove(x.modifierClass+x.type),S.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(S.classList.remove(...(x.clickableClass||"").split(" ")),S.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(S=>S.classList.remove(...x.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const x=e.params.pagination;let{el:v}=e.pagination;v=He(v),v.forEach(S=>{S.classList.remove(x.horizontalClass,x.verticalClass),S.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?m():(f(),p(),h())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&h()}),n("snapIndexChange",()=>{h()}),n("snapGridLengthChange",()=>{p(),h()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:x}=e.pagination;x&&(x=He(x),x.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{h()}),n("click",(x,v)=>{const S=v.target,T=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&T&&T.length>0&&!S.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&S===e.navigation.nextEl||e.navigation.prevEl&&S===e.navigation.prevEl))return;const A=T[0].classList.contains(e.params.pagination.hiddenClass);s(A===!0?"paginationShow":"paginationHide"),T.forEach(w=>w.classList.toggle(e.params.pagination.hiddenClass))}});const _=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=He(x),x.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),h()},m=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=He(x),x.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:_,disable:m,render:p,update:h,init:f,destroy:g})}function Ex(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=vt();let a=!1,o=null,l=null,c,d,u,h;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:D,rtlTranslate:I}=e,{dragEl:U,el:B}=D,F=e.params.scrollbar,N=e.params.loop?e.progressLoop:e.progress;let L=d,Y=(u-d)*N;I?(Y=-Y,Y>0?(L=d-Y,Y=0):-Y+d>u&&(L=u+Y)):Y<0?(L=d+Y,Y=0):Y+d>u&&(L=u-Y),e.isHorizontal()?(U.style.transform=`translate3d(${Y}px, 0, 0)`,U.style.width=`${L}px`):(U.style.transform=`translate3d(0px, ${Y}px, 0)`,U.style.height=`${L}px`),F.hide&&(clearTimeout(o),B.style.opacity=1,o=setTimeout(()=>{B.style.opacity=0,B.style.transitionDuration="400ms"},1e3))}function f(D){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${D}ms`)}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:D}=e,{dragEl:I,el:U}=D;I.style.width="",I.style.height="",u=e.isHorizontal()?U.offsetWidth:U.offsetHeight,h=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?d=u*h:d=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?I.style.width=`${d}px`:I.style.height=`${d}px`,h>=1?U.style.display="none":U.style.display="",e.params.scrollbar.hide&&(U.style.opacity=0),e.params.watchOverflow&&e.enabled&&D.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function _(D){return e.isHorizontal()?D.clientX:D.clientY}function m(D){const{scrollbar:I,rtlTranslate:U}=e,{el:B}=I;let F;F=(_(D)-mr(B)[e.isHorizontal()?"left":"top"]-(c!==null?c:d/2))/(u-d),F=Math.max(Math.min(F,1),0),U&&(F=1-F);const N=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*F;e.updateProgress(N),e.setTranslate(N),e.updateActiveIndex(),e.updateSlidesClasses()}function x(D){const I=e.params.scrollbar,{scrollbar:U,wrapperEl:B}=e,{el:F,dragEl:N}=U;a=!0,c=D.target===N?_(D)-D.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,D.preventDefault(),D.stopPropagation(),B.style.transitionDuration="100ms",N.style.transitionDuration="100ms",m(D),clearTimeout(l),F.style.transitionDuration="0ms",I.hide&&(F.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),s("scrollbarDragStart",D)}function v(D){const{scrollbar:I,wrapperEl:U}=e,{el:B,dragEl:F}=I;a&&(D.preventDefault&&D.cancelable?D.preventDefault():D.returnValue=!1,m(D),U.style.transitionDuration="0ms",B.style.transitionDuration="0ms",F.style.transitionDuration="0ms",s("scrollbarDragMove",D))}function S(D){const I=e.params.scrollbar,{scrollbar:U,wrapperEl:B}=e,{el:F}=U;a&&(a=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",B.style.transitionDuration=""),I.hide&&(clearTimeout(l),l=ci(()=>{F.style.opacity=0,F.style.transitionDuration="400ms"},1e3)),s("scrollbarDragEnd",D),I.snapOnRelease&&e.slideToClosest())}function T(D){const{scrollbar:I,params:U}=e,B=I.el;if(!B)return;const F=B,N=U.passiveListeners?{passive:!1,capture:!1}:!1,L=U.passiveListeners?{passive:!0,capture:!1}:!1;if(!F)return;const Y=D==="on"?"addEventListener":"removeEventListener";F[Y]("pointerdown",x,N),r[Y]("pointermove",v,N),r[Y]("pointerup",S,L)}function A(){!e.params.scrollbar.el||!e.scrollbar.el||T("on")}function w(){!e.params.scrollbar.el||!e.scrollbar.el||T("off")}function C(){const{scrollbar:D,el:I}=e;e.params.scrollbar=Co(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const U=e.params.scrollbar;if(!U.el)return;let B;if(typeof U.el=="string"&&e.isElement&&(B=e.el.querySelector(U.el)),!B&&typeof U.el=="string"){if(B=r.querySelectorAll(U.el),!B.length)return}else B||(B=U.el);e.params.uniqueNavElements&&typeof U.el=="string"&&B.length>1&&I.querySelectorAll(U.el).length===1&&(B=I.querySelector(U.el)),B.length>0&&(B=B[0]),B.classList.add(e.isHorizontal()?U.horizontalClass:U.verticalClass);let F;B&&(F=B.querySelector(En(e.params.scrollbar.dragClass)),F||(F=Ht("div",e.params.scrollbar.dragClass),B.append(F))),Object.assign(D,{el:B,dragEl:F}),U.draggable&&A(),B&&B.classList[e.enabled?"remove":"add"](...On(e.params.scrollbar.lockClass))}function M(){const D=e.params.scrollbar,I=e.scrollbar.el;I&&I.classList.remove(...On(e.isHorizontal()?D.horizontalClass:D.verticalClass)),w()}n("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const D=e.params.scrollbar;let{el:I}=e.scrollbar;I=He(I),I.forEach(U=>{U.classList.remove(D.horizontalClass,D.verticalClass),U.classList.add(e.isHorizontal()?D.horizontalClass:D.verticalClass)})}),n("init",()=>{e.params.scrollbar.enabled===!1?R():(C(),g(),p())}),n("update resize observerUpdate lock unlock changeDirection",()=>{g()}),n("setTranslate",()=>{p()}),n("setTransition",(D,I)=>{f(I)}),n("enable disable",()=>{const{el:D}=e.scrollbar;D&&D.classList[e.enabled?"remove":"add"](...On(e.params.scrollbar.lockClass))}),n("destroy",()=>{M()});const y=()=>{e.el.classList.remove(...On(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...On(e.params.scrollbar.scrollbarDisabledClass)),C(),g(),p()},R=()=>{e.el.classList.add(...On(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...On(e.params.scrollbar.scrollbarDisabledClass)),M()};Object.assign(e.scrollbar,{enable:y,disable:R,updateSize:g,setTranslate:p,init:C,destroy:M})}function Tx(i){let{swiper:e,extendParams:t,on:n}=i;t({parallax:{enabled:!1}});const s="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(l,c)=>{const{rtl:d}=e,u=d?-1:1,h=l.getAttribute("data-swiper-parallax")||"0";let p=l.getAttribute("data-swiper-parallax-x"),f=l.getAttribute("data-swiper-parallax-y");const g=l.getAttribute("data-swiper-parallax-scale"),_=l.getAttribute("data-swiper-parallax-opacity"),m=l.getAttribute("data-swiper-parallax-rotate");if(p||f?(p=p||"0",f=f||"0"):e.isHorizontal()?(p=h,f="0"):(f=h,p="0"),p.indexOf("%")>=0?p=`${parseInt(p,10)*c*u}%`:p=`${p*c*u}px`,f.indexOf("%")>=0?f=`${parseInt(f,10)*c}%`:f=`${f*c}px`,typeof _<"u"&&_!==null){const v=_-(_-1)*(1-Math.abs(c));l.style.opacity=v}let x=`translate3d(${p}, ${f}, 0px)`;if(typeof g<"u"&&g!==null){const v=g-(g-1)*(1-Math.abs(c));x+=` scale(${v})`}if(m&&typeof m<"u"&&m!==null){const v=m*c*-1;x+=` rotate(${v}deg)`}l.style.transform=x},a=()=>{const{el:l,slides:c,progress:d,snapGrid:u,isElement:h}=e,p=yt(l,s);e.isElement&&p.push(...yt(e.hostEl,s)),p.forEach(f=>{r(f,d)}),c.forEach((f,g)=>{let _=f.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(_+=Math.ceil(g/2)-d*(u.length-1)),_=Math.min(Math.max(_,-1),1),f.querySelectorAll(`${s}, [data-swiper-parallax-rotate]`).forEach(m=>{r(m,_)})})},o=function(l){l===void 0&&(l=e.params.speed);const{el:c,hostEl:d}=e,u=[...c.querySelectorAll(s)];e.isElement&&u.push(...d.querySelectorAll(s)),u.forEach(h=>{let p=parseInt(h.getAttribute("data-swiper-parallax-duration"),10)||l;l===0&&(p=0),h.style.transitionDuration=`${p}ms`})};n("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),n("init",()=>{e.params.parallax.enabled&&a()}),n("setTranslate",()=>{e.params.parallax.enabled&&a()}),n("setTransition",(l,c)=>{e.params.parallax.enabled&&o(c)})}function bx(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=lt();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let a=1,o=!1,l=!1,c={x:0,y:0};const d=-3;let u,h;const p=[],f={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},g={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},_={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let m=1;Object.defineProperty(e.zoom,"scale",{get(){return m},set(V){if(m!==V){const W=f.imageEl,X=f.slideEl;s("zoomChange",V,W,X)}m=V}});function x(){if(p.length<2)return 1;const V=p[0].pageX,W=p[0].pageY,X=p[1].pageX,re=p[1].pageY;return Math.sqrt((X-V)**2+(re-W)**2)}function v(){const V=e.params.zoom,W=f.imageWrapEl.getAttribute("data-swiper-zoom")||V.maxRatio;if(V.limitToOriginalSize&&f.imageEl&&f.imageEl.naturalWidth){const X=f.imageEl.naturalWidth/f.imageEl.offsetWidth;return Math.min(X,W)}return W}function S(){if(p.length<2)return{x:null,y:null};const V=f.imageEl.getBoundingClientRect();return[(p[0].pageX+(p[1].pageX-p[0].pageX)/2-V.x-r.scrollX)/a,(p[0].pageY+(p[1].pageY-p[0].pageY)/2-V.y-r.scrollY)/a]}function T(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function A(V){const W=T();return!!(V.target.matches(W)||e.slides.filter(X=>X.contains(V.target)).length>0)}function w(V){const W=`.${e.params.zoom.containerClass}`;return!!(V.target.matches(W)||[...e.hostEl.querySelectorAll(W)].filter(X=>X.contains(V.target)).length>0)}function C(V){if(V.pointerType==="mouse"&&p.splice(0,p.length),!A(V))return;const W=e.params.zoom;if(u=!1,h=!1,p.push(V),!(p.length<2)){if(u=!0,f.scaleStart=x(),!f.slideEl){f.slideEl=V.target.closest(`.${e.params.slideClass}, swiper-slide`),f.slideEl||(f.slideEl=e.slides[e.activeIndex]);let X=f.slideEl.querySelector(`.${W.containerClass}`);if(X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),f.imageEl=X,X?f.imageWrapEl=ai(f.imageEl,`.${W.containerClass}`)[0]:f.imageWrapEl=void 0,!f.imageWrapEl){f.imageEl=void 0;return}f.maxRatio=v()}if(f.imageEl){const[X,re]=S();f.originX=X,f.originY=re,f.imageEl.style.transitionDuration="0ms"}o=!0}}function M(V){if(!A(V))return;const W=e.params.zoom,X=e.zoom,re=p.findIndex(be=>be.pointerId===V.pointerId);re>=0&&(p[re]=V),!(p.length<2)&&(h=!0,f.scaleMove=x(),f.imageEl&&(X.scale=f.scaleMove/f.scaleStart*a,X.scale>f.maxRatio&&(X.scale=f.maxRatio-1+(X.scale-f.maxRatio+1)**.5),X.scale<W.minRatio&&(X.scale=W.minRatio+1-(W.minRatio-X.scale+1)**.5),f.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`))}function y(V){if(!A(V)||V.pointerType==="mouse"&&V.type==="pointerout")return;const W=e.params.zoom,X=e.zoom,re=p.findIndex(be=>be.pointerId===V.pointerId);re>=0&&p.splice(re,1),!(!u||!h)&&(u=!1,h=!1,f.imageEl&&(X.scale=Math.max(Math.min(X.scale,f.maxRatio),W.minRatio),f.imageEl.style.transitionDuration=`${e.params.speed}ms`,f.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`,a=X.scale,o=!1,X.scale>1&&f.slideEl?f.slideEl.classList.add(`${W.zoomedSlideClass}`):X.scale<=1&&f.slideEl&&f.slideEl.classList.remove(`${W.zoomedSlideClass}`),X.scale===1&&(f.originX=0,f.originY=0,f.slideEl=void 0)))}let R;function D(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function I(){clearTimeout(R),e.touchEventsData.preventTouchMoveFromPointerMove=!0,R=setTimeout(()=>{e.destroyed||D()})}function U(V){const W=e.device;if(!f.imageEl||g.isTouched)return;W.android&&V.cancelable&&V.preventDefault(),g.isTouched=!0;const X=p.length>0?p[0]:V;g.touchesStart.x=X.pageX,g.touchesStart.y=X.pageY}function B(V){const X=V.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!A(V)||!w(V))return;const re=e.zoom;if(!f.imageEl)return;if(!g.isTouched||!f.slideEl){X&&L(V);return}if(X){L(V);return}g.isMoved||(g.width=f.imageEl.offsetWidth||f.imageEl.clientWidth,g.height=f.imageEl.offsetHeight||f.imageEl.clientHeight,g.startX=io(f.imageWrapEl,"x")||0,g.startY=io(f.imageWrapEl,"y")||0,f.slideWidth=f.slideEl.offsetWidth,f.slideHeight=f.slideEl.offsetHeight,f.imageWrapEl.style.transitionDuration="0ms");const be=g.width*re.scale,ye=g.height*re.scale;if(g.minX=Math.min(f.slideWidth/2-be/2,0),g.maxX=-g.minX,g.minY=Math.min(f.slideHeight/2-ye/2,0),g.maxY=-g.minY,g.touchesCurrent.x=p.length>0?p[0].pageX:V.pageX,g.touchesCurrent.y=p.length>0?p[0].pageY:V.pageY,Math.max(Math.abs(g.touchesCurrent.x-g.touchesStart.x),Math.abs(g.touchesCurrent.y-g.touchesStart.y))>5&&(e.allowClick=!1),!g.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(g.minX)===Math.floor(g.startX)&&g.touchesCurrent.x<g.touchesStart.x||Math.floor(g.maxX)===Math.floor(g.startX)&&g.touchesCurrent.x>g.touchesStart.x)){g.isTouched=!1,D();return}if(!e.isHorizontal()&&(Math.floor(g.minY)===Math.floor(g.startY)&&g.touchesCurrent.y<g.touchesStart.y||Math.floor(g.maxY)===Math.floor(g.startY)&&g.touchesCurrent.y>g.touchesStart.y)){g.isTouched=!1,D();return}}V.cancelable&&V.preventDefault(),V.stopPropagation(),I(),g.isMoved=!0;const qe=(re.scale-a)/(f.maxRatio-e.params.zoom.minRatio),{originX:Ie,originY:O}=f;g.currentX=g.touchesCurrent.x-g.touchesStart.x+g.startX+qe*(g.width-Ie*2),g.currentY=g.touchesCurrent.y-g.touchesStart.y+g.startY+qe*(g.height-O*2),g.currentX<g.minX&&(g.currentX=g.minX+1-(g.minX-g.currentX+1)**.8),g.currentX>g.maxX&&(g.currentX=g.maxX-1+(g.currentX-g.maxX+1)**.8),g.currentY<g.minY&&(g.currentY=g.minY+1-(g.minY-g.currentY+1)**.8),g.currentY>g.maxY&&(g.currentY=g.maxY-1+(g.currentY-g.maxY+1)**.8),_.prevPositionX||(_.prevPositionX=g.touchesCurrent.x),_.prevPositionY||(_.prevPositionY=g.touchesCurrent.y),_.prevTime||(_.prevTime=Date.now()),_.x=(g.touchesCurrent.x-_.prevPositionX)/(Date.now()-_.prevTime)/2,_.y=(g.touchesCurrent.y-_.prevPositionY)/(Date.now()-_.prevTime)/2,Math.abs(g.touchesCurrent.x-_.prevPositionX)<2&&(_.x=0),Math.abs(g.touchesCurrent.y-_.prevPositionY)<2&&(_.y=0),_.prevPositionX=g.touchesCurrent.x,_.prevPositionY=g.touchesCurrent.y,_.prevTime=Date.now(),f.imageWrapEl.style.transform=`translate3d(${g.currentX}px, ${g.currentY}px,0)`}function F(){const V=e.zoom;if(p.length=0,!f.imageEl)return;if(!g.isTouched||!g.isMoved){g.isTouched=!1,g.isMoved=!1;return}g.isTouched=!1,g.isMoved=!1;let W=300,X=300;const re=_.x*W,be=g.currentX+re,ye=_.y*X,Je=g.currentY+ye;_.x!==0&&(W=Math.abs((be-g.currentX)/_.x)),_.y!==0&&(X=Math.abs((Je-g.currentY)/_.y));const qe=Math.max(W,X);g.currentX=be,g.currentY=Je;const Ie=g.width*V.scale,O=g.height*V.scale;g.minX=Math.min(f.slideWidth/2-Ie/2,0),g.maxX=-g.minX,g.minY=Math.min(f.slideHeight/2-O/2,0),g.maxY=-g.minY,g.currentX=Math.max(Math.min(g.currentX,g.maxX),g.minX),g.currentY=Math.max(Math.min(g.currentY,g.maxY),g.minY),f.imageWrapEl.style.transitionDuration=`${qe}ms`,f.imageWrapEl.style.transform=`translate3d(${g.currentX}px, ${g.currentY}px,0)`}function N(){const V=e.zoom;f.slideEl&&e.activeIndex!==e.slides.indexOf(f.slideEl)&&(f.imageEl&&(f.imageEl.style.transform="translate3d(0,0,0) scale(1)"),f.imageWrapEl&&(f.imageWrapEl.style.transform="translate3d(0,0,0)"),f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),V.scale=1,a=1,f.slideEl=void 0,f.imageEl=void 0,f.imageWrapEl=void 0,f.originX=0,f.originY=0)}function L(V){if(a<=1||!f.imageWrapEl||!A(V)||!w(V))return;const W=r.getComputedStyle(f.imageWrapEl).transform,X=new r.DOMMatrix(W);if(!l){l=!0,c.x=V.clientX,c.y=V.clientY,g.startX=X.e,g.startY=X.f,g.width=f.imageEl.offsetWidth||f.imageEl.clientWidth,g.height=f.imageEl.offsetHeight||f.imageEl.clientHeight,f.slideWidth=f.slideEl.offsetWidth,f.slideHeight=f.slideEl.offsetHeight;return}const re=(V.clientX-c.x)*d,be=(V.clientY-c.y)*d,ye=g.width*a,Je=g.height*a,qe=f.slideWidth,Ie=f.slideHeight,O=Math.min(qe/2-ye/2,0),at=-O,Be=Math.min(Ie/2-Je/2,0),ze=-Be,ve=Math.max(Math.min(g.startX+re,at),O),je=Math.max(Math.min(g.startY+be,ze),Be);f.imageWrapEl.style.transitionDuration="0ms",f.imageWrapEl.style.transform=`translate3d(${ve}px, ${je}px, 0)`,c.x=V.clientX,c.y=V.clientY,g.startX=ve,g.startY=je,g.currentX=ve,g.currentY=je}function Y(V){const W=e.zoom,X=e.params.zoom;if(!f.slideEl){V&&V.target&&(f.slideEl=V.target.closest(`.${e.params.slideClass}, swiper-slide`)),f.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?f.slideEl=yt(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:f.slideEl=e.slides[e.activeIndex]);let Me=f.slideEl.querySelector(`.${X.containerClass}`);Me&&(Me=Me.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),f.imageEl=Me,Me?f.imageWrapEl=ai(f.imageEl,`.${X.containerClass}`)[0]:f.imageWrapEl=void 0}if(!f.imageEl||!f.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),f.slideEl.classList.add(`${X.zoomedSlideClass}`);let re,be,ye,Je,qe,Ie,O,at,Be,ze,ve,je,xe,P,E,q,Q,ne;typeof g.touchesStart.x>"u"&&V?(re=V.pageX,be=V.pageY):(re=g.touchesStart.x,be=g.touchesStart.y);const Z=a,pe=typeof V=="number"?V:null;a===1&&pe&&(re=void 0,be=void 0,g.touchesStart.x=void 0,g.touchesStart.y=void 0);const le=v();W.scale=pe||le,a=pe||le,V&&!(a===1&&pe)?(Q=f.slideEl.offsetWidth,ne=f.slideEl.offsetHeight,ye=mr(f.slideEl).left+r.scrollX,Je=mr(f.slideEl).top+r.scrollY,qe=ye+Q/2-re,Ie=Je+ne/2-be,Be=f.imageEl.offsetWidth||f.imageEl.clientWidth,ze=f.imageEl.offsetHeight||f.imageEl.clientHeight,ve=Be*W.scale,je=ze*W.scale,xe=Math.min(Q/2-ve/2,0),P=Math.min(ne/2-je/2,0),E=-xe,q=-P,Z>0&&pe&&typeof g.currentX=="number"&&typeof g.currentY=="number"?(O=g.currentX*W.scale/Z,at=g.currentY*W.scale/Z):(O=qe*W.scale,at=Ie*W.scale),O<xe&&(O=xe),O>E&&(O=E),at<P&&(at=P),at>q&&(at=q)):(O=0,at=0),pe&&W.scale===1&&(f.originX=0,f.originY=0),g.currentX=O,g.currentY=at,f.imageWrapEl.style.transitionDuration="300ms",f.imageWrapEl.style.transform=`translate3d(${O}px, ${at}px,0)`,f.imageEl.style.transitionDuration="300ms",f.imageEl.style.transform=`translate3d(0,0,0) scale(${W.scale})`}function te(){const V=e.zoom,W=e.params.zoom;if(!f.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?f.slideEl=yt(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:f.slideEl=e.slides[e.activeIndex];let X=f.slideEl.querySelector(`.${W.containerClass}`);X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),f.imageEl=X,X?f.imageWrapEl=ai(f.imageEl,`.${W.containerClass}`)[0]:f.imageWrapEl=void 0}!f.imageEl||!f.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),V.scale=1,a=1,g.currentX=void 0,g.currentY=void 0,g.touchesStart.x=void 0,g.touchesStart.y=void 0,f.imageWrapEl.style.transitionDuration="300ms",f.imageWrapEl.style.transform="translate3d(0,0,0)",f.imageEl.style.transitionDuration="300ms",f.imageEl.style.transform="translate3d(0,0,0) scale(1)",f.slideEl.classList.remove(`${W.zoomedSlideClass}`),f.slideEl=void 0,f.originX=0,f.originY=0,e.params.zoom.panOnMouseMove&&(c={x:0,y:0},l&&(l=!1,g.startX=0,g.startY=0)))}function ae(V){const W=e.zoom;W.scale&&W.scale!==1?te():Y(V)}function Se(){const V=e.params.passiveListeners?{passive:!0,capture:!1}:!1,W=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:V,activeListenerWithCapture:W}}function ke(){const V=e.zoom;if(V.enabled)return;V.enabled=!0;const{passiveListener:W,activeListenerWithCapture:X}=Se();e.wrapperEl.addEventListener("pointerdown",C,W),e.wrapperEl.addEventListener("pointermove",M,X),["pointerup","pointercancel","pointerout"].forEach(re=>{e.wrapperEl.addEventListener(re,y,W)}),e.wrapperEl.addEventListener("pointermove",B,X)}function J(){const V=e.zoom;if(!V.enabled)return;V.enabled=!1;const{passiveListener:W,activeListenerWithCapture:X}=Se();e.wrapperEl.removeEventListener("pointerdown",C,W),e.wrapperEl.removeEventListener("pointermove",M,X),["pointerup","pointercancel","pointerout"].forEach(re=>{e.wrapperEl.removeEventListener(re,y,W)}),e.wrapperEl.removeEventListener("pointermove",B,X)}n("init",()=>{e.params.zoom.enabled&&ke()}),n("destroy",()=>{J()}),n("touchStart",(V,W)=>{e.zoom.enabled&&U(W)}),n("touchEnd",(V,W)=>{e.zoom.enabled&&F()}),n("doubleTap",(V,W)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&ae(W)}),n("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&N()}),n("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&N()}),Object.assign(e.zoom,{enable:ke,disable:J,in:Y,out:te,toggle:ae})}function wx(i){let{swiper:e,extendParams:t,on:n}=i;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function s(c,d){const u=function(){let g,_,m;return(x,v)=>{for(_=-1,g=x.length;g-_>1;)m=g+_>>1,x[m]<=v?_=m:g=m;return g}}();this.x=c,this.y=d,this.lastIndex=c.length-1;let h,p;return this.interpolate=function(g){return g?(p=u(this.x,g),h=p-1,(g-this.x[h])*(this.y[p]-this.y[h])/(this.x[p]-this.x[h])+this.y[h]):0},this}function r(c){e.controller.spline=e.params.loop?new s(e.slidesGrid,c.slidesGrid):new s(e.snapGrid,c.snapGrid)}function a(c,d){const u=e.controller.control;let h,p;const f=e.constructor;function g(_){if(_.destroyed)return;const m=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(r(_),p=-e.controller.spline.interpolate(-m)),(!p||e.params.controller.by==="container")&&(h=(_.maxTranslate()-_.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(h)||!Number.isFinite(h))&&(h=1),p=(m-e.minTranslate())*h+_.minTranslate()),e.params.controller.inverse&&(p=_.maxTranslate()-p),_.updateProgress(p),_.setTranslate(p,e),_.updateActiveIndex(),_.updateSlidesClasses()}if(Array.isArray(u))for(let _=0;_<u.length;_+=1)u[_]!==d&&u[_]instanceof f&&g(u[_]);else u instanceof f&&d!==u&&g(u)}function o(c,d){const u=e.constructor,h=e.controller.control;let p;function f(g){g.destroyed||(g.setTransition(c,e),c!==0&&(g.transitionStart(),g.params.autoHeight&&ci(()=>{g.updateAutoHeight()}),ds(g.wrapperEl,()=>{h&&g.transitionEnd()})))}if(Array.isArray(h))for(p=0;p<h.length;p+=1)h[p]!==d&&h[p]instanceof u&&f(h[p]);else h instanceof u&&d!==h&&f(h)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}n("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(d=>{if(e.controller.control||(e.controller.control=[]),d&&d.swiper)e.controller.control.push(d.swiper);else if(d){const u=`${e.params.eventsPrefix}init`,h=p=>{e.controller.control.push(p.detail[0]),e.update(),d.removeEventListener(u,h)};d.addEventListener(u,h)}});return}e.controller.control=e.params.controller.control}),n("update",()=>{l()}),n("resize",()=>{l()}),n("observerUpdate",()=>{l()}),n("setTranslate",(c,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(d,u)}),n("setTransition",(c,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(d,u)}),Object.assign(e.controller,{setTranslate:a,setTransition:o})}function Ax(i){let{swiper:e,extendParams:t,on:n}=i;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let s=null,r,a,o=new Date().getTime();function l(N){const L=s;L.length!==0&&(L.innerHTML="",L.innerHTML=N)}function c(N){const L=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(N).replace(/x/g,L)}function d(N){N=He(N),N.forEach(L=>{L.setAttribute("tabIndex","0")})}function u(N){N=He(N),N.forEach(L=>{L.setAttribute("tabIndex","-1")})}function h(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("role",L)})}function p(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("aria-roledescription",L)})}function f(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("aria-controls",L)})}function g(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("aria-label",L)})}function _(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("id",L)})}function m(N,L){N=He(N),N.forEach(Y=>{Y.setAttribute("aria-live",L)})}function x(N){N=He(N),N.forEach(L=>{L.setAttribute("aria-disabled",!0)})}function v(N){N=He(N),N.forEach(L=>{L.setAttribute("aria-disabled",!1)})}function S(N){if(N.keyCode!==13&&N.keyCode!==32)return;const L=e.params.a11y,Y=N.target;if(!(e.pagination&&e.pagination.el&&(Y===e.pagination.el||e.pagination.el.contains(N.target))&&!N.target.matches(En(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const te=He(e.navigation.prevEl);He(e.navigation.nextEl).includes(Y)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?l(L.lastSlideMessage):l(L.nextSlideMessage)),te.includes(Y)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?l(L.firstSlideMessage):l(L.prevSlideMessage))}e.pagination&&Y.matches(En(e.params.pagination.bulletClass))&&Y.click()}}function T(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:N,prevEl:L}=e.navigation;L&&(e.isBeginning?(x(L),u(L)):(v(L),d(L))),N&&(e.isEnd?(x(N),u(N)):(v(N),d(N)))}function A(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function w(){return A()&&e.params.pagination.clickable}function C(){const N=e.params.a11y;A()&&e.pagination.bullets.forEach(L=>{e.params.pagination.clickable&&(d(L),e.params.pagination.renderBullet||(h(L,"button"),g(L,N.paginationBulletMessage.replace(/\{\{index\}\}/,vs(L)+1)))),L.matches(En(e.params.pagination.bulletActiveClass))?L.setAttribute("aria-current","true"):L.removeAttribute("aria-current")})}const M=(N,L,Y)=>{d(N),N.tagName!=="BUTTON"&&(h(N,"button"),N.addEventListener("keydown",S)),g(N,Y),f(N,L)},y=N=>{a&&a!==N.target&&!a.contains(N.target)&&(r=!0),e.a11y.clicked=!0},R=()=>{r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},D=N=>{o=new Date().getTime()},I=N=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-o<100)return;const L=N.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!L||!e.slides.includes(L))return;a=L;const Y=e.slides.indexOf(L)===e.activeIndex,te=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(L);Y||te||N.sourceCapabilities&&N.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{r||(e.params.loop?e.slideToLoop(parseInt(L.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(L),0),r=!1)}))},U=()=>{const N=e.params.a11y;N.itemRoleDescriptionMessage&&p(e.slides,N.itemRoleDescriptionMessage),N.slideRole&&h(e.slides,N.slideRole);const L=e.slides.length;N.slideLabelMessage&&e.slides.forEach((Y,te)=>{const ae=e.params.loop?parseInt(Y.getAttribute("data-swiper-slide-index"),10):te,Se=N.slideLabelMessage.replace(/\{\{index\}\}/,ae+1).replace(/\{\{slidesLength\}\}/,L);g(Y,Se)})},B=()=>{const N=e.params.a11y;e.el.append(s);const L=e.el;N.containerRoleDescriptionMessage&&p(L,N.containerRoleDescriptionMessage),N.containerMessage&&g(L,N.containerMessage),N.containerRole&&h(L,N.containerRole);const Y=e.wrapperEl,te=N.id||Y.getAttribute("id")||`swiper-wrapper-${c(16)}`,ae=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";_(Y,te),m(Y,ae),U();let{nextEl:Se,prevEl:ke}=e.navigation?e.navigation:{};Se=He(Se),ke=He(ke),Se&&Se.forEach(V=>M(V,te,N.nextSlideMessage)),ke&&ke.forEach(V=>M(V,te,N.prevSlideMessage)),w()&&He(e.pagination.el).forEach(W=>{W.addEventListener("keydown",S)}),vt().addEventListener("visibilitychange",D),e.el.addEventListener("focus",I,!0),e.el.addEventListener("focus",I,!0),e.el.addEventListener("pointerdown",y,!0),e.el.addEventListener("pointerup",R,!0)};function F(){s&&s.remove();let{nextEl:N,prevEl:L}=e.navigation?e.navigation:{};N=He(N),L=He(L),N&&N.forEach(te=>te.removeEventListener("keydown",S)),L&&L.forEach(te=>te.removeEventListener("keydown",S)),w()&&He(e.pagination.el).forEach(ae=>{ae.removeEventListener("keydown",S)}),vt().removeEventListener("visibilitychange",D),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",I,!0),e.el.removeEventListener("pointerdown",y,!0),e.el.removeEventListener("pointerup",R,!0))}n("beforeInit",()=>{s=Ht("span",e.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")}),n("afterInit",()=>{e.params.a11y.enabled&&B()}),n("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&U()}),n("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&T()}),n("paginationUpdate",()=>{e.params.a11y.enabled&&C()}),n("destroy",()=>{e.params.a11y.enabled&&F()})}function Rx(i){let{swiper:e,extendParams:t,on:n}=i;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let s=!1,r={};const a=p=>p.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=p=>{const f=lt();let g;p?g=new URL(p):g=f.location;const _=g.pathname.slice(1).split("/").filter(S=>S!==""),m=_.length,x=_[m-2],v=_[m-1];return{key:x,value:v}},l=(p,f)=>{const g=lt();if(!s||!e.params.history.enabled)return;let _;e.params.url?_=new URL(e.params.url):_=g.location;const m=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`):e.slides[f];let x=a(m.getAttribute("data-history"));if(e.params.history.root.length>0){let S=e.params.history.root;S[S.length-1]==="/"&&(S=S.slice(0,S.length-1)),x=`${S}/${p?`${p}/`:""}${x}`}else _.pathname.includes(p)||(x=`${p?`${p}/`:""}${x}`);e.params.history.keepQuery&&(x+=_.search);const v=g.history.state;v&&v.value===x||(e.params.history.replaceState?g.history.replaceState({value:x},null,x):g.history.pushState({value:x},null,x))},c=(p,f,g)=>{if(f)for(let _=0,m=e.slides.length;_<m;_+=1){const x=e.slides[_];if(a(x.getAttribute("data-history"))===f){const S=e.getSlideIndex(x);e.slideTo(S,p,g)}}else e.slideTo(0,p,g)},d=()=>{r=o(e.params.url),c(e.params.speed,r.value,!1)},u=()=>{const p=lt();if(e.params.history){if(!p.history||!p.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(s=!0,r=o(e.params.url),!r.key&&!r.value){e.params.history.replaceState||p.addEventListener("popstate",d);return}c(0,r.value,e.params.runCallbacksOnInit),e.params.history.replaceState||p.addEventListener("popstate",d)}},h=()=>{const p=lt();e.params.history.replaceState||p.removeEventListener("popstate",d)};n("init",()=>{e.params.history.enabled&&u()}),n("destroy",()=>{e.params.history.enabled&&h()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{s&&l(e.params.history.key,e.activeIndex)}),n("slideChange",()=>{s&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)})}function Cx(i){let{swiper:e,extendParams:t,emit:n,on:s}=i,r=!1;const a=vt(),o=lt();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(h,p){if(e.virtual&&e.params.virtual.enabled){const f=e.slides.find(_=>_.getAttribute("data-hash")===p);return f?parseInt(f.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(yt(e.slidesEl,`.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0])}}});const l=()=>{n("hashChange");const h=a.location.hash.replace("#",""),p=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],f=p?p.getAttribute("data-hash"):"";if(h!==f){const g=e.params.hashNavigation.getSlideIndex(e,h);if(typeof g>"u"||Number.isNaN(g))return;e.slideTo(g)}},c=()=>{if(!r||!e.params.hashNavigation.enabled)return;const h=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],p=h?h.getAttribute("data-hash")||h.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${p}`||""),n("hashSet")):(a.location.hash=p||"",n("hashSet"))},d=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;r=!0;const h=a.location.hash.replace("#","");if(h){const f=e.params.hashNavigation.getSlideIndex(e,h);e.slideTo(f||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},u=()=>{e.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};s("init",()=>{e.params.hashNavigation.enabled&&d()}),s("destroy",()=>{e.params.hashNavigation.enabled&&u()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{r&&c()}),s("slideChange",()=>{r&&e.params.cssMode&&c()})}function Px(i){let{swiper:e,extendParams:t,on:n,emit:s,params:r}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),h,p,f,g,_,m,x;function v(L){!e||e.destroyed||!e.wrapperEl||L.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",v),!(x||L.detail&&L.detail.bySwiperTouchMove)&&y())}const S=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?h=!0:h&&(c=d,h=!1);const L=e.autoplay.paused?d:u+c-new Date().getTime();e.autoplay.timeLeft=L,s("autoplayTimeLeft",L,L/l),o=requestAnimationFrame(()=>{S()})},T=()=>{let L;return e.virtual&&e.params.virtual.enabled?L=e.slides.find(te=>te.classList.contains("swiper-slide-active")):L=e.slides[e.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},A=L=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),S();let Y=typeof L>"u"?e.params.autoplay.delay:L;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const te=T();!Number.isNaN(te)&&te>0&&typeof L>"u"&&(Y=te,l=te,c=te),d=Y;const ae=e.params.speed,Se=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ae,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ae,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ae,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ae,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return Y>0?(clearTimeout(a),a=setTimeout(()=>{Se()},Y)):requestAnimationFrame(()=>{Se()}),Y},w=()=>{u=new Date().getTime(),e.autoplay.running=!0,A(),s("autoplayStart")},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),s("autoplayStop")},M=(L,Y)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),L||(m=!0);const te=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",v):y()};if(e.autoplay.paused=!0,Y){_&&(d=e.params.autoplay.delay),_=!1,te();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),te())},y=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),m?(m=!1,A(d)):A(),e.autoplay.paused=!1,s("autoplayResume"))},R=()=>{if(e.destroyed||!e.autoplay.running)return;const L=vt();L.visibilityState==="hidden"&&(m=!0,M(!0)),L.visibilityState==="visible"&&y()},D=L=>{L.pointerType==="mouse"&&(m=!0,x=!0,!(e.animating||e.autoplay.paused)&&M(!0))},I=L=>{L.pointerType==="mouse"&&(x=!1,e.autoplay.paused&&y())},U=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",I))},B=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",I))},F=()=>{vt().addEventListener("visibilitychange",R)},N=()=>{vt().removeEventListener("visibilitychange",R)};n("init",()=>{e.params.autoplay.enabled&&(U(),F(),w())}),n("destroy",()=>{B(),N(),e.autoplay.running&&C()}),n("_freeModeStaticRelease",()=>{(f||m)&&y()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?C():M(!0,!0)}),n("beforeTransitionStart",(L,Y,te)=>{e.destroyed||!e.autoplay.running||(te||!e.params.autoplay.disableOnInteraction?M(!0,!0):C())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}p=!0,f=!1,m=!1,g=setTimeout(()=>{m=!0,f=!0,M(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(a),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&y(),f=!1,p=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(_=!0)}),Object.assign(e.autoplay,{start:w,stop:C,pause:M,resume:y})}function Lx(i){let{swiper:e,extendParams:t,on:n}=i;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let s=!1,r=!1;e.thumbs={swiper:null};function a(){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const d=c.clickedIndex,u=c.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof d>"u"||d===null)return;let h;c.params.loop?h=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):h=d,e.params.loop?e.slideToLoop(h):e.slideTo(h)}function o(){const{thumbs:c}=e.params;if(s)return!1;s=!0;const d=e.constructor;if(c.swiper instanceof d){if(c.swiper.destroyed)return s=!1,!1;e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(rs(c.swiper)){const u=Object.assign({},c.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(u),r=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",a),!0}function l(c){const d=e.thumbs.swiper;if(!d||d.destroyed)return;const u=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView;let h=1;const p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(h=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),d.slides.forEach(_=>_.classList.remove(p)),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let _=0;_<h;_+=1)yt(d.slidesEl,`[data-swiper-slide-index="${e.realIndex+_}"]`).forEach(m=>{m.classList.add(p)});else for(let _=0;_<h;_+=1)d.slides[e.realIndex+_]&&d.slides[e.realIndex+_].classList.add(p);const f=e.params.thumbs.autoScrollOffset,g=f&&!d.params.loop;if(e.realIndex!==d.realIndex||g){const _=d.activeIndex;let m,x;if(d.params.loop){const v=d.slides.find(S=>S.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);m=d.slides.indexOf(v),x=e.activeIndex>e.previousIndex?"next":"prev"}else m=e.realIndex,x=m>e.previousIndex?"next":"prev";g&&(m+=x==="next"?f:-1*f),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(m)<0&&(d.params.centeredSlides?m>_?m=m-Math.floor(u/2)+1:m=m+Math.floor(u/2)-1:m>_&&d.params.slidesPerGroup,d.slideTo(m,c?0:void 0))}}n("beforeInit",()=>{const{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const d=vt(),u=()=>{const p=typeof c.swiper=="string"?d.querySelector(c.swiper):c.swiper;if(p&&p.swiper)c.swiper=p.swiper,o(),l(!0);else if(p){const f=`${e.params.eventsPrefix}init`,g=_=>{c.swiper=_.detail[0],p.removeEventListener(f,g),o(),l(!0),c.swiper.update(),e.update()};p.addEventListener(f,g)}return p},h=()=>{if(e.destroyed)return;u()||requestAnimationFrame(h)};requestAnimationFrame(h)}else o(),l(!0)}),n("slideChange update resize observerUpdate",()=>{l()}),n("setTransition",(c,d)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(d)}),n("beforeDestroy",()=>{const c=e.thumbs.swiper;!c||c.destroyed||r&&c.destroy()}),Object.assign(e.thumbs,{init:o,update:l})}function Ix(i){let{swiper:e,extendParams:t,emit:n,once:s}=i;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function r(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;const{touchEventsData:l,touches:c}=e;l.velocities.length===0&&l.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:Yt()})}function o(l){let{currentPos:c}=l;if(e.params.cssMode)return;const{params:d,wrapperEl:u,rtlTranslate:h,snapGrid:p,touchEventsData:f}=e,_=Yt()-f.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<p.length?e.slideTo(p.length-1):e.slideTo(e.slides.length-1);return}if(d.freeMode.momentum){if(f.velocities.length>1){const C=f.velocities.pop(),M=f.velocities.pop(),y=C.position-M.position,R=C.time-M.time;e.velocity=y/R,e.velocity/=2,Math.abs(e.velocity)<d.freeMode.minimumVelocity&&(e.velocity=0),(R>150||Yt()-C.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=d.freeMode.momentumVelocityRatio,f.velocities.length=0;let m=1e3*d.freeMode.momentumRatio;const x=e.velocity*m;let v=e.translate+x;h&&(v=-v);let S=!1,T;const A=Math.abs(e.velocity)*20*d.freeMode.momentumBounceRatio;let w;if(v<e.maxTranslate())d.freeMode.momentumBounce?(v+e.maxTranslate()<-A&&(v=e.maxTranslate()-A),T=e.maxTranslate(),S=!0,f.allowMomentumBounce=!0):v=e.maxTranslate(),d.loop&&d.centeredSlides&&(w=!0);else if(v>e.minTranslate())d.freeMode.momentumBounce?(v-e.minTranslate()>A&&(v=e.minTranslate()+A),T=e.minTranslate(),S=!0,f.allowMomentumBounce=!0):v=e.minTranslate(),d.loop&&d.centeredSlides&&(w=!0);else if(d.freeMode.sticky){let C;for(let M=0;M<p.length;M+=1)if(p[M]>-v){C=M;break}Math.abs(p[C]-v)<Math.abs(p[C-1]-v)||e.swipeDirection==="next"?v=p[C]:v=p[C-1],v=-v}if(w&&s("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(h?m=Math.abs((-v-e.translate)/e.velocity):m=Math.abs((v-e.translate)/e.velocity),d.freeMode.sticky){const C=Math.abs((h?-v:v)-e.translate),M=e.slidesSizesGrid[e.activeIndex];C<M?m=d.speed:C<2*M?m=d.speed*1.5:m=d.speed*2.5}}else if(d.freeMode.sticky){e.slideToClosest();return}d.freeMode.momentumBounce&&S?(e.updateProgress(T),e.setTransition(m),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating=!0,ds(u,()=>{!e||e.destroyed||!f.allowMomentumBounce||(n("momentumBounce"),e.setTransition(d.speed),setTimeout(()=>{e.setTranslate(T),ds(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(n("_freeModeNoMomentumRelease"),e.updateProgress(v),e.setTransition(m),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,ds(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(v),e.updateActiveIndex(),e.updateSlidesClasses()}else if(d.freeMode.sticky){e.slideToClosest();return}else d.freeMode&&n("_freeModeNoMomentumRelease");(!d.freeMode.momentum||_>=d.longSwipesMs)&&(n("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:r,onTouchMove:a,onTouchEnd:o}})}function Dx(i){let{swiper:e,extendParams:t,on:n}=i;t({grid:{rows:1,fill:"column"}});let s,r,a,o;const l=()=>{let g=e.params.spaceBetween;return typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*e.size:typeof g=="string"&&(g=parseFloat(g)),g},c=g=>{const{slidesPerView:_}=e.params,{rows:m,fill:x}=e.params.grid,v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:g.length;a=Math.floor(v/m),Math.floor(v/m)===v/m?s=v:s=Math.ceil(v/m)*m,_!=="auto"&&x==="row"&&(s=Math.max(s,_*m)),r=s/m},d=()=>{e.slides&&e.slides.forEach(g=>{g.swiperSlideGridSet&&(g.style.height="",g.style[e.getDirectionLabel("margin-top")]="")})},u=(g,_,m)=>{const{slidesPerGroup:x}=e.params,v=l(),{rows:S,fill:T}=e.params.grid,A=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:m.length;let w,C,M;if(T==="row"&&x>1){const y=Math.floor(g/(x*S)),R=g-S*x*y,D=y===0?x:Math.min(Math.ceil((A-y*S*x)/S),x);M=Math.floor(R/D),C=R-M*D+y*x,w=C+M*s/S,_.style.order=w}else T==="column"?(C=Math.floor(g/S),M=g-C*S,(C>a||C===a&&M===S-1)&&(M+=1,M>=S&&(M=0,C+=1))):(M=Math.floor(g/r),C=g-M*r);_.row=M,_.column=C,_.style.height=`calc((100% - ${(S-1)*v}px) / ${S})`,_.style[e.getDirectionLabel("margin-top")]=M!==0?v&&`${v}px`:"",_.swiperSlideGridSet=!0},h=(g,_)=>{const{centeredSlides:m,roundLengths:x}=e.params,v=l(),{rows:S}=e.params.grid;if(e.virtualSize=(g+v)*s,e.virtualSize=Math.ceil(e.virtualSize/S)-v,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),m){const T=[];for(let A=0;A<_.length;A+=1){let w=_[A];x&&(w=Math.floor(w)),_[A]<e.virtualSize+_[0]&&T.push(w)}_.splice(0,_.length),_.push(...T)}},p=()=>{o=e.params.grid&&e.params.grid.rows>1},f=()=>{const{params:g,el:_}=e,m=g.grid&&g.grid.rows>1;o&&!m?(_.classList.remove(`${g.containerModifierClass}grid`,`${g.containerModifierClass}grid-column`),a=1,e.emitContainerClasses()):!o&&m&&(_.classList.add(`${g.containerModifierClass}grid`),g.grid.fill==="column"&&_.classList.add(`${g.containerModifierClass}grid-column`),e.emitContainerClasses()),o=m};n("init",p),n("update",f),e.grid={initSlides:c,unsetSlides:d,updateSlide:u,updateWrapperSize:h}}function Nx(i){const e=this,{params:t,slidesEl:n}=e;t.loop&&e.loopDestroy();const s=r=>{if(typeof r=="string"){const a=document.createElement("div");a.innerHTML=r,n.append(a.children[0]),a.innerHTML=""}else n.append(r)};if(typeof i=="object"&&"length"in i)for(let r=0;r<i.length;r+=1)i[r]&&s(i[r]);else s(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function Ux(i){const e=this,{params:t,activeIndex:n,slidesEl:s}=e;t.loop&&e.loopDestroy();let r=n+1;const a=o=>{if(typeof o=="string"){const l=document.createElement("div");l.innerHTML=o,s.prepend(l.children[0]),l.innerHTML=""}else s.prepend(o)};if(typeof i=="object"&&"length"in i){for(let o=0;o<i.length;o+=1)i[o]&&a(i[o]);r=n+i.length}else a(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(r,0,!1)}function Ox(i,e){const t=this,{params:n,activeIndex:s,slidesEl:r}=t;let a=s;n.loop&&(a-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const o=t.slides.length;if(i<=0){t.prependSlide(e);return}if(i>=o){t.appendSlide(e);return}let l=a>i?a+1:a;const c=[];for(let d=o-1;d>=i;d-=1){const u=t.slides[d];u.remove(),c.unshift(u)}if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)e[d]&&r.append(e[d]);l=a>i?a+e.length:a}else r.append(e);for(let d=0;d<c.length;d+=1)r.append(c[d]);t.recalcSlides(),n.loop&&t.loopCreate(),(!n.observer||t.isElement)&&t.update(),n.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function Fx(i){const e=this,{params:t,activeIndex:n}=e;let s=n;t.loop&&(s-=e.loopedSlides,e.loopDestroy());let r=s,a;if(typeof i=="object"&&"length"in i){for(let o=0;o<i.length;o+=1)a=i[o],e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=i,e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1),r=Math.max(r,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(r+e.loopedSlides,0,!1):e.slideTo(r,0,!1)}function Bx(){const i=this,e=[];for(let t=0;t<i.slides.length;t+=1)e.push(t);i.removeSlide(e)}function zx(i){let{swiper:e}=i;Object.assign(e,{appendSlide:Nx.bind(e),prependSlide:Ux.bind(e),addSlide:Ox.bind(e),removeSlide:Fx.bind(e),removeAllSlides:Bx.bind(e)})}function Yi(i){const{effect:e,swiper:t,on:n,setTranslate:s,setTransition:r,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=i;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=a?a():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),n("setTranslate",()=>{t.params.effect===e&&s()}),n("setTransition",(u,h)=>{t.params.effect===e&&r(h)}),n("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let d;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides&&t.slides.length&&(s(),d=!1)}))})}function Es(i,e){const t=di(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function yr(i){let{swiper:e,duration:t,transformElements:n,allSlides:s}=i;const{activeIndex:r}=e,a=o=>o.parentElement?o.parentElement:e.slides.find(c=>c.shadowRoot&&c.shadowRoot===o.parentNode);if(e.params.virtualTranslate&&t!==0){let o=!1,l;s?l=n:l=n.filter(c=>{const d=c.classList.contains("swiper-slide-transform")?a(c):c;return e.getSlideIndex(d)===r}),l.forEach(c=>{ds(c,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function kx(i){let{swiper:e,extendParams:t,on:n}=i;t({fadeEffect:{crossFade:!1}}),Yi({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:a}=e,o=e.params.fadeEffect;for(let l=0;l<a.length;l+=1){const c=e.slides[l];let u=-c.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let h=0;e.isHorizontal()||(h=u,u=0);const p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),f=Es(o,c);f.style.opacity=p,f.style.transform=`translate3d(${u}px, ${h}px, 0px)`}},setTransition:a=>{const o=e.slides.map(l=>di(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`}),yr({swiper:e,duration:a,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Hx(i){let{swiper:e,extendParams:t,on:n}=i;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const s=(l,c,d)=>{let u=d?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),h=d?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");u||(u=Ht("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"left":"top"}`.split(" ")),l.append(u)),h||(h=Ht("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"right":"bottom"}`.split(" ")),l.append(h)),u&&(u.style.opacity=Math.max(-c,0)),h&&(h.style.opacity=Math.max(c,0))};Yi({effect:"cube",swiper:e,on:n,setTranslate:()=>{const{el:l,wrapperEl:c,slides:d,width:u,height:h,rtlTranslate:p,size:f,browser:g}=e,_=Sr(e),m=e.params.cubeEffect,x=e.isHorizontal(),v=e.virtual&&e.params.virtual.enabled;let S=0,T;m.shadow&&(x?(T=e.wrapperEl.querySelector(".swiper-cube-shadow"),T||(T=Ht("div","swiper-cube-shadow"),e.wrapperEl.append(T)),T.style.height=`${u}px`):(T=l.querySelector(".swiper-cube-shadow"),T||(T=Ht("div","swiper-cube-shadow"),l.append(T))));for(let w=0;w<d.length;w+=1){const C=d[w];let M=w;v&&(M=parseInt(C.getAttribute("data-swiper-slide-index"),10));let y=M*90,R=Math.floor(y/360);p&&(y=-y,R=Math.floor(-y/360));const D=Math.max(Math.min(C.progress,1),-1);let I=0,U=0,B=0;M%4===0?(I=-R*4*f,B=0):(M-1)%4===0?(I=0,B=-R*4*f):(M-2)%4===0?(I=f+R*4*f,B=f):(M-3)%4===0&&(I=-f,B=3*f+f*4*R),p&&(I=-I),x||(U=I,I=0);const F=`rotateX(${_(x?0:-y)}deg) rotateY(${_(x?y:0)}deg) translate3d(${I}px, ${U}px, ${B}px)`;D<=1&&D>-1&&(S=M*90+D*90,p&&(S=-M*90-D*90)),C.style.transform=F,m.slideShadows&&s(C,D,x)}if(c.style.transformOrigin=`50% 50% -${f/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${f/2}px`,m.shadow)if(x)T.style.transform=`translate3d(0px, ${u/2+m.shadowOffset}px, ${-u/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${m.shadowScale})`;else{const w=Math.abs(S)-Math.floor(Math.abs(S)/90)*90,C=1.5-(Math.sin(w*2*Math.PI/360)/2+Math.cos(w*2*Math.PI/360)/2),M=m.shadowScale,y=m.shadowScale/C,R=m.shadowOffset;T.style.transform=`scale3d(${M}, 1, ${y}) translate3d(0px, ${h/2+R}px, ${-h/2/y}px) rotateX(-89.99deg)`}const A=(g.isSafari||g.isWebView)&&g.needPerspectiveFix?-f/2:0;c.style.transform=`translate3d(0px,0,${A}px) rotateX(${_(e.isHorizontal()?0:S)}deg) rotateY(${_(e.isHorizontal()?-S:0)}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${A}px`)},setTransition:l=>{const{el:c,slides:d}=e;if(d.forEach(u=>{u.style.transitionDuration=`${l}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${l}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const u=c.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{const l=e.isHorizontal();e.slides.forEach(c=>{const d=Math.max(Math.min(c.progress,1),-1);s(c,d,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ki(i,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}${i?` swiper-slide-shadow-${i}`:""}`,s=di(e);let r=s.querySelector(`.${n.split(" ").join(".")}`);return r||(r=Ht("div",n.split(" ")),s.append(r)),r}function Vx(i){let{swiper:e,extendParams:t,on:n}=i;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const s=(l,c)=>{let d=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),u=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");d||(d=ki("flip",l,e.isHorizontal()?"left":"top")),u||(u=ki("flip",l,e.isHorizontal()?"right":"bottom")),d&&(d.style.opacity=Math.max(-c,0)),u&&(u.style.opacity=Math.max(c,0))};Yi({effect:"flip",swiper:e,on:n,setTranslate:()=>{const{slides:l,rtlTranslate:c}=e,d=e.params.flipEffect,u=Sr(e);for(let h=0;h<l.length;h+=1){const p=l[h];let f=p.progress;e.params.flipEffect.limitRotation&&(f=Math.max(Math.min(p.progress,1),-1));const g=p.swiperSlideOffset;let m=-180*f,x=0,v=e.params.cssMode?-g-e.translate:-g,S=0;e.isHorizontal()?c&&(m=-m):(S=v,v=0,x=-m,m=0),p.style.zIndex=-Math.abs(Math.round(f))+l.length,d.slideShadows&&s(p,f);const T=`translate3d(${v}px, ${S}px, 0px) rotateX(${u(x)}deg) rotateY(${u(m)}deg)`,A=Es(d,p);A.style.transform=T}},setTransition:l=>{const c=e.slides.map(d=>di(d));c.forEach(d=>{d.style.transitionDuration=`${l}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${l}ms`})}),yr({swiper:e,duration:l,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(l=>{let c=l.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(l.progress,1),-1)),s(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Gx(i){let{swiper:e,extendParams:t,on:n}=i;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Yi({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:a,height:o,slides:l,slidesSizesGrid:c}=e,d=e.params.coverflowEffect,u=e.isHorizontal(),h=e.translate,p=u?-h+a/2:-h+o/2,f=u?d.rotate:-d.rotate,g=d.depth,_=Sr(e);for(let m=0,x=l.length;m<x;m+=1){const v=l[m],S=c[m],T=v.swiperSlideOffset,A=(p-T-S/2)/S,w=typeof d.modifier=="function"?d.modifier(A):A*d.modifier;let C=u?f*w:0,M=u?0:f*w,y=-g*Math.abs(w),R=d.stretch;typeof R=="string"&&R.indexOf("%")!==-1&&(R=parseFloat(d.stretch)/100*S);let D=u?0:R*w,I=u?R*w:0,U=1-(1-d.scale)*Math.abs(w);Math.abs(I)<.001&&(I=0),Math.abs(D)<.001&&(D=0),Math.abs(y)<.001&&(y=0),Math.abs(C)<.001&&(C=0),Math.abs(M)<.001&&(M=0),Math.abs(U)<.001&&(U=0);const B=`translate3d(${I}px,${D}px,${y}px)  rotateX(${_(M)}deg) rotateY(${_(C)}deg) scale(${U})`,F=Es(d,v);if(F.style.transform=B,v.style.zIndex=-Math.abs(Math.round(w))+1,d.slideShadows){let N=u?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),L=u?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");N||(N=ki("coverflow",v,u?"left":"top")),L||(L=ki("coverflow",v,u?"right":"bottom")),N&&(N.style.opacity=w>0?w:0),L&&(L.style.opacity=-w>0?-w:0)}}},setTransition:a=>{e.slides.map(l=>di(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Wx(i){let{swiper:e,extendParams:t,on:n}=i;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const s=o=>typeof o=="string"?o:`${o}px`;Yi({effect:"creative",swiper:e,on:n,setTranslate:()=>{const{slides:o,wrapperEl:l,slidesSizesGrid:c}=e,d=e.params.creativeEffect,{progressMultiplier:u}=d,h=e.params.centeredSlides,p=Sr(e);if(h){const f=c[0]/2-e.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${f}px))`}for(let f=0;f<o.length;f+=1){const g=o[f],_=g.progress,m=Math.min(Math.max(g.progress,-d.limitProgress),d.limitProgress);let x=m;h||(x=Math.min(Math.max(g.originalProgress,-d.limitProgress),d.limitProgress));const v=g.swiperSlideOffset,S=[e.params.cssMode?-v-e.translate:-v,0,0],T=[0,0,0];let A=!1;e.isHorizontal()||(S[1]=S[0],S[0]=0);let w={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};m<0?(w=d.next,A=!0):m>0&&(w=d.prev,A=!0),S.forEach((U,B)=>{S[B]=`calc(${U}px + (${s(w.translate[B])} * ${Math.abs(m*u)}))`}),T.forEach((U,B)=>{let F=w.rotate[B]*Math.abs(m*u);T[B]=F}),g.style.zIndex=-Math.abs(Math.round(_))+o.length;const C=S.join(", "),M=`rotateX(${p(T[0])}deg) rotateY(${p(T[1])}deg) rotateZ(${p(T[2])}deg)`,y=x<0?`scale(${1+(1-w.scale)*x*u})`:`scale(${1-(1-w.scale)*x*u})`,R=x<0?1+(1-w.opacity)*x*u:1-(1-w.opacity)*x*u,D=`translate3d(${C}) ${M} ${y}`;if(A&&w.shadow||!A){let U=g.querySelector(".swiper-slide-shadow");if(!U&&w.shadow&&(U=ki("creative",g)),U){const B=d.shadowPerProgress?m*(1/d.limitProgress):m;U.style.opacity=Math.min(Math.max(Math.abs(B),0),1)}}const I=Es(d,g);I.style.transform=D,I.style.opacity=R,w.origin&&(I.style.transformOrigin=w.origin)}},setTransition:o=>{const l=e.slides.map(c=>di(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${o}ms`})}),yr({swiper:e,duration:o,transformElements:l,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Xx(i){let{swiper:e,extendParams:t,on:n}=i;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Yi({effect:"cards",swiper:e,on:n,setTranslate:()=>{const{slides:a,activeIndex:o,rtlTranslate:l}=e,c=e.params.cardsEffect,{startTranslate:d,isTouched:u}=e.touchEventsData,h=l?-e.translate:e.translate;for(let p=0;p<a.length;p+=1){const f=a[p],g=f.progress,_=Math.min(Math.max(g,-4),4);let m=f.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(m-=a[0].swiperSlideOffset);let x=e.params.cssMode?-m-e.translate:-m,v=0;const S=-100*Math.abs(_);let T=1,A=-c.perSlideRotate*_,w=c.perSlideOffset-Math.abs(_)*.75;const C=e.virtual&&e.params.virtual.enabled?e.virtual.from+p:p,M=(C===o||C===o-1)&&_>0&&_<1&&(u||e.params.cssMode)&&h<d,y=(C===o||C===o+1)&&_<0&&_>-1&&(u||e.params.cssMode)&&h>d;if(M||y){const U=(1-Math.abs((Math.abs(_)-.5)/.5))**.5;A+=-28*_*U,T+=-.5*U,w+=96*U,v=`${-25*U*Math.abs(_)}%`}if(_<0?x=`calc(${x}px ${l?"-":"+"} (${w*Math.abs(_)}%))`:_>0?x=`calc(${x}px ${l?"-":"+"} (-${w*Math.abs(_)}%))`:x=`${x}px`,!e.isHorizontal()){const U=v;v=x,x=U}const R=_<0?`${1+(1-T)*_}`:`${1-(1-T)*_}`,D=`
        translate3d(${x}, ${v}, ${S}px)
        rotateZ(${c.rotate?l?-A:A:0}deg)
        scale(${R})
      `;if(c.slideShadows){let U=f.querySelector(".swiper-slide-shadow");U||(U=ki("cards",f)),U&&(U.style.opacity=Math.min(Math.max((Math.abs(_)-.5)/.5,0),1))}f.style.zIndex=-Math.abs(Math.round(g))+a.length;const I=Es(c,f);I.style.transform=D}},setTransition:a=>{const o=e.slides.map(l=>di(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),yr({swiper:e,duration:a,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const Yx=[vx,xx,Sx,yx,Mx,Ex,Tx,bx,wx,Ax,Rx,Cx,Px,Lx,Ix,Dx,zx,kx,Hx,Vx,Gx,Wx,Xx];Bt.use(Yx);function qx(){new Bt(".swiper-container",{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},speed:1e3,spaceBetween:10,loopAdditionalSlides:3})}const Qs=document.getElementById("button");document.getElementById("form").addEventListener("submit",function(i){i.preventDefault(),Qs.value="Sending...";const e="default_service",t="template_k54n6hl",n="template_w8oaoos";emailjs.sendForm(e,t,this).then(()=>{emailjs.sendForm(e,n,this).then(()=>{Qs.value="Send Email",alert("Message sent and automatic response sent to the user!"),document.getElementById("form").reset()},s=>{Qs.value="Send Email",alert("Error sending response to user: "+JSON.stringify(s))})},s=>{Qs.value="Send Email",alert("Error sending message to admin: "+JSON.stringify(s))})});document.addEventListener("DOMContentLoaded",()=>{qx(),ev();const i=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-menu"),t=document.querySelectorAll(".nav-menu-link"),n=i.querySelector("i"),s=document.querySelector(".submenu");s.style.display="none",i.addEventListener("click",()=>{e.classList.toggle("show"),e.classList.contains("show")?(n.classList.remove("fa-bars"),n.classList.add("fa-times")):(n.classList.remove("fa-times"),n.classList.add("fa-bars"))}),t.forEach(a=>{a.addEventListener("click",()=>{e.classList.remove("show"),n.classList.remove("fa-times"),n.classList.add("fa-bars")})}),e.addEventListener("mouseenter",()=>{s.style.display="grid"});function r(a){!e.contains(a.relatedTarget)&&!s.contains(a.relatedTarget)&&(s.style.display="none")}e.addEventListener("mouseleave",r),s.addEventListener("mouseleave",r)});
