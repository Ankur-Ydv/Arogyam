(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{4618:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed",function(){return r(4978)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let s=r(8754),a=r(1757),l=a._(r(7294)),n=s._(r(2636)),i=r(7757),o=r(3735),d=r(3341);r(4210);let c=s._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function h(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function x(e,t,r,s,a,l,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let i="decode"in e?e.decode():Promise.resolve();i.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&l(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;s.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function f(e){let[t,r]=l.version.split("."),s=parseInt(t,10),a=parseInt(r,10);return s>18||18===s&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,l.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:s,widthInt:a,qualityInt:n,className:i,imgStyle:o,blurStyle:d,isLazy:c,fetchPriority:u,fill:m,placeholder:h,loading:p,srcString:g,config:b,unoptimized:v,loader:w,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:k,setShowAltText:N,onLoad:_,onError:M,...S}=e;return p=c?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",{...S,...f(u),loading:p,width:a,height:s,decoding:"async","data-nimg":m?"fill":"1",className:i,style:{...o,...d},...r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(M&&(e.src=e.src),e.complete&&x(e,g,h,j,y,k,v))},[g,h,j,y,k,M,v,t]),onLoad:e=>{let t=e.currentTarget;x(t,g,h,j,y,k,v)},onError:e=>{N(!0),"blur"===h&&k(!0),M&&M(e)}}))}),g=(0,l.forwardRef)((e,t)=>{var r;let s,a,{src:x,sizes:g,unoptimized:b=!1,priority:v=!1,loading:w,className:j,quality:y,width:k,height:N,fill:_,style:M,onLoad:S,onLoadingComplete:C,placeholder:E="empty",blurDataURL:P,fetchPriority:O,layout:z,objectFit:R,objectPosition:A,lazyBoundary:F,lazyRoot:I,...D}=e,H=(0,l.useContext)(d.ImageConfigContext),Z=(0,l.useMemo)(()=>{let e=u||H||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[H]),T=D.loader||c.default;delete D.loader;let B="__next_img_default"in T;if(B){if("custom"===Z.loader)throw Error('Image with src "'+x+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...s}=t;return e(s)}}if(z){"fill"===z&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(M={...M,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!g&&(g=t)}let W="",V=h(k),G=h(N);if("object"==typeof(r=x)&&(m(r)||void 0!==r.src)){let e=m(x)?x.default:x;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,W=e.src,!_){if(V||G){if(V&&!G){let t=V/e.width;G=Math.round(e.height*t)}else if(!V&&G){let t=G/e.height;V=Math.round(e.width*t)}}else V=e.width,G=e.height}}let L=!v&&("lazy"===w||void 0===w);(!(x="string"==typeof x?x:W)||x.startsWith("data:")||x.startsWith("blob:"))&&(b=!0,L=!1),Z.unoptimized&&(b=!0),B&&x.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(b=!0),v&&(O="high");let[U,Y]=(0,l.useState)(!1),[q,J]=(0,l.useState)(!1),X=h(y),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:A}:{},q?{}:{color:"transparent"},M),K="blur"===E&&P&&!U?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:V,heightInt:G,blurWidth:s,blurHeight:a,blurDataURL:P,objectFit:$.objectFit})+'")'}:{},Q=function(e){let{config:t,src:r,unoptimized:s,width:a,quality:l,sizes:n,loader:i}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,r){let{deviceSizes:s,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let l=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:l,kind:"x"}}(t,a,n),c=o.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:o.map((e,s)=>i({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:s+1)+d).join(", "),src:i({config:t,src:r,quality:l,width:o[c]})}}({config:Z,src:x,unoptimized:b,width:V,quality:X,sizes:g,loader:T}),ee=x,et=(0,l.useRef)(S);(0,l.useEffect)(()=>{et.current=S},[S]);let er=(0,l.useRef)(C);(0,l.useEffect)(()=>{er.current=C},[C]);let es={isLazy:L,imgAttributes:Q,heightInt:G,widthInt:V,qualityInt:X,className:j,imgStyle:$,blurStyle:K,loading:w,config:Z,fetchPriority:O,fill:_,unoptimized:b,placeholder:E,loader:T,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:Y,setShowAltText:J,...D};return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,{...es,ref:t}),v?l.default.createElement(n.default,null,l.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:D.crossOrigin,...f(O)})):null)}),b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:a,blurDataURL:l,objectFit:n}=e,i=s||t,o=a||r,d=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+i+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(s&&a?"1":"20")+"'/%3E"+d+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:s,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},9126:function(e,t,r){"use strict";var s=r(5893),a=r(7294),l=r(6154),n=r(1163),i=r(2175),o=r(2920),d=r(137);r(1399);var c=r(1664),u=r.n(c),m=r(8944);let h=e=>{let{pdata:t,user:r}=e,c=(0,n.useRouter)(),[h,x]=(0,a.useState)(!1),[f,p]=(0,a.useState)(t.likeBy.includes(r._id)),[g,b]=(0,a.useState)(t.likeBy.length),v=new Date().getTime()-new Date(t.createdAt),w=async()=>{f?(await l.Z.post("/api/user/feedPost/".concat(t._id),{userId:r._id,liked:!1}),b(g-1)):(await l.Z.post("/api/user/feedPost/".concat(t._id),{userId:r._id,liked:!0}),b(g+1)),p(!f)},j=()=>{c.replace(c.asPath)},y=async(e,s)=>{let{content:a}=e,n=await l.Z.put("/api/user/comment/".concat(t._id),{name:r.fullname,profile:r.profile,content:a});x(!1),200===n.status?(o.Am.success(n.data.msg,d.H),j()):o.Am.error(n.data.msg,d.H)},k=(0,i.TA)({initialValues:{content:""},onSubmit:y});return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-t-lg shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-row ",children:[(0,s.jsx)("div",{className:"flex items-center space-x-2 flex-row",children:(0,s.jsx)("img",{className:"rounded-full w-10 h-10",src:null==t?void 0:t.userId.profile})}),(0,s.jsxs)("div",{className:"ml-3",children:[(0,s.jsx)("p",{className:"font-medium",children:t.userId.fullname}),(0,s.jsxs)("p",{className:"text-xs text-gray-400",children:[(0,m.Z)(v)," ago"]})]})]}),(0,s.jsx)(u(),{href:"/feed/".concat(t._id),children:(0,s.jsx)("button",{className:"text-black dark:text-white",children:(0,s.jsx)("span",{className:"material-symbols-outlined",children:"open_in_new"})})})]}),(0,s.jsx)("p",{className:"mt-2",children:t.description})]}),(0,s.jsx)("div",{className:" flex justify-center align-center md-h-96 bg-zinc-300 dark:bg-neutral-800",children:(0,s.jsx)("img",{src:t.image,className:"object-contain max-h-[17rem]"})}),(0,s.jsxs)("div",{className:"flex flex-col rounded-b-lg bg-lightMode-component dark:bg-darkMode-component text-neutral-700 dark:text-neutral-400 border-t p-2",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center gap-9 mx-10 mb-2",children:[(0,s.jsxs)("div",{onClick:w,className:"rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-1",children:[f?(0,s.jsx)("span",{className:"text-xl",children:"❤️ "}):(0,s.jsx)("span",{className:"text-xl",children:"\uD83E\uDD0D "}),(0,s.jsx)("div",{style:{paddingRight:"10px",whiteSpace:"nowrap",display:"inline-block"},children:g})]}),(0,s.jsxs)("button",{type:"button",onClick:()=>x(!h),className:"rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3",children:[(0,s.jsx)("span",{className:"material-symbols-outlined",children:"chat"}),(0,s.jsx)("p",{className:"text-xs sm:text-base ",children:"Comment"})]}),(0,s.jsxs)("div",{className:"rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3",children:[(0,s.jsx)("span",{className:"material-symbols-outlined",children:"share"}),(0,s.jsx)("p",{className:"text-xs sm:text-base",children:"Share"})]})]}),h&&(0,s.jsxs)("div",{id:"CommentSection",className:" flex mx-4 space-x-4 p-4 items-center border-t-[1px] border-neutral-400 dark:border-neutral-600",children:[(0,s.jsx)("img",{className:"rounded-full w-8 h-8",src:r.profile}),(0,s.jsxs)("form",{action:"",className:"flex flex-1 ",onSubmit:k.handleSubmit,children:[(0,s.jsx)("input",{type:"text",className:"rounded-full h-8 bg-gray-100 dark:bg-neutral-800  flex flex-grow px-5 focus:outline-none ",placeholder:"Write a comment..",...k.getFieldProps("content")}),(0,s.jsx)("button",{type:"submit",className:"ml-4",children:(0,s.jsx)("span",{className:"material-symbols-outlined",children:"send"})})]})]})]})]})};t.Z=h},2917:function(e,t,r){"use strict";var s=r(5893);r(7294);var a=r(6154),l=r(9734);let n=e=>a.Z.get(e).then(e=>e.data),i=()=>{let{data:e,error:t}=(0,l.ZP)("/api/trending",n);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"min-w-[15rem] h-fit flex flex-col p-4 gap-4 shadow-xl bg-lightMode-component dark:bg-darkMode-component text-lightMode-txt dark:text-darkMode-txt rounded-lg sticky top-0",children:[(0,s.jsx)("div",{className:"w-full font-bold tracking-tight leading-tight flex flex-wrap content-center items-center ml-1 p-1 rounded-md text-md ",children:(0,s.jsx)("p",{className:"mr-3 ",children:"Trending Specialists"})}),null==e?void 0:e.trendingSpecialist.map((e,t)=>(0,s.jsxs)("div",{className:"w-full flex items-start border-teal-950 gap-2 text-sm px-4 ",children:[(0,s.jsx)("span",{className:"bg-cyan-500 text-white dark:text-darkMode-txt dark:bg-cyan-800 w-5 h-5 rounded-md flex justify-center",children:t+1}),(0,s.jsx)("span",{className:" border-neutral-500",children:e.doctorName},t)]},t))]})})};t.Z=i},8944:function(e,t,r){"use strict";function s(e){let t=Math.round(e/1e3),r=Math.round(e/6e4),s=Math.round(e/36e5),a=Math.floor(e/864e5),l=Math.floor(e/31536e6);return e<6e4?t+(t<2?" second":" seconds"):e<36e5?r+(r<2?" minute":" minutes"):e<864e5?s+(s<2?" hour":" hours"):e<31536e6?a+(a<2?" day":" days"):l+(l<2?" year":" years")}r.d(t,{Z:function(){return s}})},9676:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(5893),a=r(1664),l=r.n(a);r(7294);var n=r(3299),i=r(1163);let o=e=>{let{isDoctor:t}=e,r=(0,i.useRouter)(),a=()=>{(0,n.signOut)({redirect:!1}),r.push("/login")},o=t?"/doctor/":"/";return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:"sticky top-0 bg-lightMode-btn dark:bg-gray-800 w-100 px-8 md:px-auto",children:(0,s.jsxs)("div",{className:"md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap",children:[(0,s.jsxs)(l(),{href:"/feed",className:"text-white md:order-1 flex items-center cursor-pointer",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})}),(0,s.jsx)("span",{className:"ml-2 text-2xl font-extrabold tracking-tight leading-tight",children:"AROGYAM"})]}),(0,s.jsx)("div",{className:"order-3 w-full md:w-auto md:order-2",children:(0,s.jsxs)("ul",{className:"text-xl flex justify-around gap-4",children:[(0,s.jsx)("li",{className:"md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",children:(0,s.jsx)(l(),{href:o,children:"Home"})}),(0,s.jsx)("li",{className:"md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",children:(0,s.jsx)(l(),{href:"/feed",children:"Feed"})}),(0,s.jsx)("li",{className:"md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",children:(0,s.jsx)(l(),{href:"".concat(o,"profile"),children:"Profile"})}),t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("li",{className:"md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",children:(0,s.jsx)(l(),{href:"/doctor/consult",children:"Consult"})})}):(0,s.jsx)(s.Fragment,{})]})}),(0,s.jsx)("div",{className:"order-2 md:order-3",children:(0,s.jsxs)("button",{className:"px-4 py-2 hover:bg-cyan-700 dark:hover:bg-cyan-900 text-gray-50 rounded-md flex items-center gap-2",onClick:a,children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",clipRule:"evenodd"})}),(0,s.jsx)("span",{children:"Sign Out"})]})})]})})})},d=e=>{let{children:t}=e,{data:r}=(0,n.useSession)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"w-screen h-screen overflow-hidden flex flex-col",children:[(0,s.jsx)(o,{isDoctor:null==r?void 0:r.user.isDoctor},1),t]})})};var c=d},137:function(e,t,r){"use strict";r.d(t,{H:function(){return s}});let s={position:"bottom-right",autoClose:3e3,pauseOnHover:!0,draggable:!0,theme:"dark"}},4978:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return f},default:function(){return p}});var s=r(5893),a=r(7294);r(5675);var l=r(9126),n=r(1163),i=r(2175),o=r(6154),d=r(2920),c=r(137);r(1399);let u=e=>{let{user:t,posts:r}=e,[u,m]=(0,a.useState)(null),h=(0,n.useRouter)(),x=()=>{h.replace(h.asPath)},f=async(e,r)=>{let s=new FormData;s.append("file",u);let a="".concat(Date.now(),"_").concat(u.name);s.append("newFilename",a),await fetch("/api/upload",{method:"POST",body:s});let{description:l}=e,n=await o.Z.post("/api/user/feedPost",{userId:t._id,description:l,image:""!==u?"https://storage.googleapis.com/arogyam-storage-bucket/".concat(a):""});200===n.status?(d.Am.success(n.data.msg,c.H),setTimeout(x,4e3)):d.Am.error(n.data.msg,c.H)},p=(0,i.TA)({initialValues:{description:""},onSubmit:f});return(0,s.jsxs)("div",{className:"text-sm",children:[(0,s.jsx)("div",{id:"inputBox",className:"bg-lightMode-component mb-4 dark:bg-darkMode-component dark:text-darkMode-txt p-2 rounded-lg shadow-md text-lightMode-txt font-medium content-center items-center",children:(0,s.jsxs)("div",{className:" flex  space-x-4 p-2 px-4 ",children:[(0,s.jsx)("img",{className:"rounded-full w-10 h-10 mt-1 top-0",src:t.profile,alt:""}),(0,s.jsxs)("form",{action:"",className:"flex flex-1 flex-col",onSubmit:p.handleSubmit,children:[(0,s.jsx)("textarea",{rows:"5",className:"rounded-xl bg-gray-100 dark:bg-neutral-800  flex flex-grow p-4 focus:outline-none ",placeholder:"What's on your Mind?",...p.getFieldProps("description")}),(0,s.jsxs)("div",{className:"flex border-t-[1px] mt-2 border-neutral-300 dark:border-neutral-500 gap-2",children:[(0,s.jsxs)("div",{className:"flex relative justify-around bg-lightMode-componentHead dark:bg-cyan-800 rounded-lg mt-2 dark:border-neutral-700  w-1/2",children:[(0,s.jsxs)("button",{className:"flex flex-row py-2 items-center text-black dark:text-white ",children:[(0,s.jsx)("span",{className:"material-symbols-outlined",children:"image"}),"Upload Picture"]}),(0,s.jsx)("input",{type:"file",className:"w-full h-10 opacity-0 left-0 absolute  hover:bg-gray-100 cursor-pointer",onChange:e=>{m(e.target.files[0])}})]}),(0,s.jsx)("div",{className:"flex relative justify-around bg-lightMode-componentHead dark:bg-cyan-800 rounded-lg mt-2 dark:border-neutral-700  w-1/2 items-center",children:(0,s.jsxs)("button",{type:"submit",className:"flex flex-row gap-2 items-center  text-black dark:text-white",children:[(0,s.jsx)("span",{className:"material-symbols-outlined",children:"check_circle"}),"Submit"]})})]})]})]})}),(0,s.jsx)("div",{id:"Post",className:"mb-10",children:r.map(e=>(0,s.jsx)(l.Z,{pdata:e,user:t},e._id))})]})};var m=r(2917),h=r(9676);let x=e=>{let{user:t,posts:r}=e;return(0,s.jsx)(h.Z,{children:(0,s.jsxs)("div",{className:"bg-lightMode-background justify-center flex dark:bg-darkMode-background overflow-y-scroll scrollbar-hide w-full h-full",children:[(0,s.jsx)("div",{className:" max-w-3xl w-full flex flex-col gap-5 p-5 pt-7",children:(0,s.jsx)(u,{user:t,posts:r},1)}),(0,s.jsx)("div",{className:"mt-7 lg:flex md:flex sticky top-5 hidden",id:"Trending",children:(0,s.jsx)(m.Z,{},2)})]})})};var f=!0,p=x},5675:function(e,t,r){r(3740)}},function(e){e.O(0,[424,154,586,734,774,888,179],function(){return e(e.s=4618)}),_N_E=e.O()}]);