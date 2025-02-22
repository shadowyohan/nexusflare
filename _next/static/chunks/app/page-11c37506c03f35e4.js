(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6761:(e,t,n)=>{Promise.resolve().then(n.bind(n,7107))},7107:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var o=n(5155),r=n(2115),i=n(8888),l=n(8862);let a=e=>{let{text:t="",className:n="",delay:i=100,animationFrom:a={opacity:0,transform:"translate3d(0,40px,0)"},animationTo:s={opacity:1,transform:"translate3d(0,0,0)"},easing:c="easeOutCubic",threshold:u=.1,rootMargin:p="-100px",textAlign:x="center",onLetterAnimationComplete:d}=e,f=t.split(" ").map(e=>e.split("")),m=f.flat(),[v,h]=(0,r.useState)(!1),C=(0,r.useRef)(),y=(0,r.useRef)(0);(0,r.useEffect)(()=>{let e=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(h(!0),e.unobserve(C.current))},{threshold:u,rootMargin:p});return e.observe(C.current),()=>e.disconnect()},[u,p]);let g=(0,l.mX)(m.length,m.map((e,t)=>({from:a,to:v?async e=>{await e(s),y.current+=1,y.current===m.length&&d&&d()}:a,delay:t*i,config:{easing:c}})));return(0,o.jsx)("p",{ref:C,className:"split-parent overflow-hidden inline ".concat(n),style:{textAlign:x,whiteSpace:"normal",wordWrap:"break-word"},children:f.map((e,t)=>(0,o.jsxs)("span",{style:{display:"inline-block",whiteSpace:"nowrap"},children:[e.map((e,n)=>{let r=f.slice(0,t).reduce((e,t)=>e+t.length,0)+n;return(0,o.jsx)(l.CS.span,{style:g[r],className:"inline-block transform transition-opacity will-change-transform",children:e},r)}),(0,o.jsx)("span",{style:{display:"inline-block",width:"0.3em"},children:"\xa0"})]},t))})};var s=n(855),c=n(57),u=n(6088),p=n(5528),x=n(491);function d(e){let{colorStops:t=["#e3b5ff","#9d00ff","#e3b5ff"],amplitude:n=1}=e,i=(0,r.useRef)(e);i.current=e;let l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e;let o=l.current;if(!o)return;let r=new s.A,a=r.gl;function d(){if(!o)return;let t=o.offsetWidth,n=o.offsetHeight;r.setSize(t,n),e&&(e.uniforms.uResolution.value=[t,n])}a.clearColor(1,1,1,1),window.addEventListener("resize",d);let f=new c.l(a);f.attributes.uv&&delete f.attributes.uv;let m=t.map(e=>{let t=new u.Q(e);return[t.r,t.g,t.b]});e=new p.B(a,{vertex:"#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n",fragment:'#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform float uAmplitude;\nuniform vec3 uColorStops[3];\nuniform vec2 uResolution;\n\nout vec4 fragColor;\n\nvec3 permute(vec3 x) {\n    return mod(((x * 34.0) + 1.0) * x, 289.0);\n}\n\nfloat snoise(vec2 v){\n    const vec4 C = vec4(\n        0.211324865405187, 0.366025403784439,\n        -0.577350269189626, 0.024390243902439\n    );\n    vec2 i  = floor(v + dot(v, C.yy));\n    vec2 x0 = v - i + dot(i, C.xx);\n    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n\n    vec3 p = permute(\n        permute(i.y + vec3(0.0, i1.y, 1.0))\n      + i.x + vec3(0.0, i1.x, 1.0)\n    );\n\n    vec3 m = max(\n        0.5 - vec3(\n            dot(x0, x0),\n            dot(x12.xy, x12.xy),\n            dot(x12.zw, x12.zw)\n        ), \n        0.0\n    );\n    m = m * m;\n    m = m * m;\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nstruct ColorStop {\n    vec3 color;\n    float position;\n};\n\n#define COLOR_RAMP(colors, factor, finalColor) {                  int index = 0;                                                for (int i = 0; i < 2; i++) {                                      ColorStop currentColor = colors[i];                           bool isInBetween = currentColor.position <= factor;           index = int(mix(float(index), float(i), float(isInBetween)));     }                                                             ColorStop currentColor = colors[index];                       ColorStop nextColor = colors[index + 1];                      float range = nextColor.position - currentColor.position;     float lerpFactor = (factor - currentColor.position) / range;     finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }\n\nvoid main() {\n    // Compute UVs from gl_FragCoord\n    vec2 uv = gl_FragCoord.xy / uResolution;\n    \n    // Build our three color stops from uniform array uColorStops\n    ColorStop colors[3];\n    colors[0] = ColorStop(uColorStops[0], 0.0);\n    colors[1] = ColorStop(uColorStops[1], 0.5);\n    colors[2] = ColorStop(uColorStops[2], 1.0);\n\n    // Interpolate color along uv.x\n    vec3 rampColor;\n    COLOR_RAMP(colors, uv.x, rampColor);\n\n    // Noise-based "height," scaled by amplitude\n    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) \n                   * 0.5 \n                   * uAmplitude;\n    height = exp(height);\n    height = (uv.y * 2.0 - height + 0.2);\n\n    fragColor.rgb = 0.6 * height * rampColor;\n    fragColor.a = 1.0;\n}\n',uniforms:{uTime:{value:0},uAmplitude:{value:n},uColorStops:{value:m},uResolution:{value:[o.offsetWidth,o.offsetHeight]}}});let v=new x.e(a,{geometry:f,program:e});o.appendChild(a.canvas);let h=0,C=n=>{var o,l;h=requestAnimationFrame(C);let{time:a=.01*n,speed:s=1}=i.current;e.uniforms.uTime.value=a*s*.1,e.uniforms.uAmplitude.value=null!==(o=i.current.amplitude)&&void 0!==o?o:1;let c=null!==(l=i.current.colorStops)&&void 0!==l?l:t;e.uniforms.uColorStops.value=c.map(e=>{let t=new u.Q(e);return[t.r,t.g,t.b]}),r.render({scene:v})};return h=requestAnimationFrame(C),d(),()=>{var e;cancelAnimationFrame(h),window.removeEventListener("resize",d),o&&a.canvas.parentNode===o&&o.removeChild(a.canvas),null===(e=a.getExtension("WEBGL_lose_context"))||void 0===e||e.loseContext()}},[n]),(0,o.jsx)("div",{ref:l,className:"w-full h-full"})}function f(){let[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)(()=>{console.log("Animation complete"),t(!0)},[]);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{n()},2e3);return()=>clearTimeout(e)},[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"z-[100] absolute bottom-0 p-6 w-full h-full flex flex-col justify-end items-center text-white",children:[(0,o.jsx)("p",{className:"text-[15px] text-zinc-700",children:"DDoS Protection"}),(0,o.jsx)("p",{className:"text-[15px] text-zinc-700",children:"by shadowyohan"})]}),(0,o.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:(0,o.jsx)(d,{className:"w-full h-full",colorStops:["#e3b5ff","#9d00ff","#e3b5ff"],speed:1})}),(0,o.jsxs)("div",{className:"h-screen flex flex-col justify-center items-center relative overflow-hidden",children:[(0,o.jsx)(a,{text:"NexusGuard",className:"text-[40px] sm:text-[100px] font-[500] drop-shadow-[0_0_40px_#DA7EFF]",delay:70,animationFrom:{opacity:0,transform:"translate3d(0,500px,0)"},animationTo:{opacity:1,transform:"translate3d(0,0,0)"},easing:"easeOutCubic",threshold:.2,onLetterAnimationComplete:n}),(0,o.jsx)(i.P.div,{className:"flex flex-col justify-center items-center",initial:{y:0,opacity:0},animate:{y:e?0:500,opacity:e?1:0},transition:{duration:1.5,ease:function(e){return 1===e?1:1-Math.pow(2,-10*e)}},style:{originY:0},children:(0,o.jsxs)(i.P.div,{className:"bg-white/10 backdrop-blur-[10px] border border-white/10 px-5 py-5 rounded-[15px] gap-5 flex flex-col items-center",initial:{width:0,height:0},animate:{width:"auto",height:"auto"},transition:{duration:.8,ease:"easeInOut",delay:.2},children:[(0,o.jsx)(i.P.p,{className:"text-[20px] font-[200] text-white",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.8},children:"Проверка, что вы не робот"}),(0,o.jsx)(i.P.div,{className:"bg-white/10 backdrop-blur-[10px] border border-white/10 px-5 py-3 rounded-[15px]",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1},children:(0,o.jsx)("p",{children:"::CAPTCHA_BOX::"})})]})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[781,441,517,358],()=>t(6761)),_N_E=e.O()}]);