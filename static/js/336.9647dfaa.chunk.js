"use strict";(self.webpackChunksito_portfolio=self.webpackChunksito_portfolio||[]).push([[336],{4936:function(e,i,t){t(2791);var n=t(4913),s=t(8992),r=t(6610),a=t(184),o=function(e){var i=e.onClick,t=e.text,o=e.more,l=e.image,c=e.alt;return(0,a.jsxs)(n.ZP,{isPressable:!0,isHoverable:!0,onPress:i,variant:"bordered",css:{maxWidth:"320px",height:"306px",width:"100%",margin:"10px",display:"flex",flexDirection:"column !important"},children:[(0,a.jsx)(s.ZP,{width:320,height:180,src:l,alt:c,objectFit:"cover"}),(0,a.jsxs)(n.ZP.Body,{css:{display:"flex",flexDirection:"column !important",alignItems:"center"},children:[(0,a.jsx)(r.Z,{css:{marginLeft:"10px",textAlign:"center"},children:t}),(0,a.jsx)(r.Z,{css:{marginLeft:"10px",textAlign:"center"},children:o})]})]})};o.defaultProps={onClick:void 0},i.Z=o},1294:function(e,i,t){var n=t(2791),s=t(1668),r=t(184),a=(0,n.forwardRef)((function(e,i){var t=e.id,n=e.background,a=e.children;return(0,r.jsx)("div",{ref:i,id:t,className:(0,s.iv)({display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0",minHeight:"100vh",background:n,position:"relative"}),children:a})}));a.defaultProps={id:"",children:(0,r.jsx)(r.Fragment,{}),background:""},i.Z=a},4336:function(e,i,t){t.r(i),t.d(i,{default:function(){return y}});var n=t(2791),s=t(7689),r=t(1668),a=t(9806),o=t(1632),l=t(788),c=t(6934),d=t(6610),x=t(6072),f=t(7229),p=t(1294),u=t(5110),m=t(184),h=function(){var e={hidden:{scale:0,opacity:0},visible:{y:0,scale:1,opacity:1}};return(0,m.jsxs)(u.m.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.5,staggerChildren:.3}}},initial:"hidden",animate:"visible",viewport:{once:!0},children:[(0,m.jsx)(u.m.div,{variants:e,className:"scale-animation ".concat((0,r.iv)({right:"10%",bottom:"10%"})),children:(0,m.jsx)(a.G,{icon:o.fV7,className:"float-y ".concat((0,r.iv)({fontSize:"3rem",color:"#0fd908",opacity:.5}))})}),(0,m.jsx)(u.m.div,{variants:e,className:"scale-animation ".concat((0,r.iv)({right:"15%",bottom:"15%"})),children:(0,m.jsx)(a.G,{icon:o.xSk,className:"float-y ".concat((0,r.iv)({fontSize:"4rem",color:"#0fd908",opacity:.5}))})})]})},g=t(4936),v=t(6650),j=t(7201),y=function(){var e=(0,s.s0)(),i=(0,v.Z)().languageState,t=(0,n.useRef)(null),u=(0,l.Y)(t),y=(0,n.useCallback)((function(e){}),[e,u]);return(0,n.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[y]),(0,m.jsx)(p.Z,{ref:t,id:"projects",background:"#222",children:(0,m.jsxs)(c.Z,{justify:"center",alignItems:"center",display:"flex",direction:"column",css:{height:"100%",width:"100%",div:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}},children:[(0,m.jsx)(h,{}),(0,m.jsx)(f.Z,{children:(0,m.jsx)(d.Z,{h1:!0,css:{textAlign:"center"},children:i.texts.Projects.Title})}),(0,m.jsx)(f.Z,{delay:"0.4s",children:(0,m.jsxs)(d.Z,{css:{textAlign:"center"},children:[i.texts.Projects.Text,(0,m.jsxs)(x.ZP,{href:i.texts.About.Github.Link,rel:"noreferrer",target:"_blank",css:{margin:"auto"},children:[i.texts.Projects.SeeMore,(0,m.jsx)(a.G,{icon:o.gJF,className:(0,r.iv)({marginLeft:"5px",fontSize:"18px"})})]})]})}),(0,m.jsx)(c.Z,{justify:"center",display:"flex",wrap:"wrap",css:{marginTop:"10px",flexDirection:"row !important",div:{display:"flex",flexDirection:"row"}},children:i.texts.Projects.Projects.map((function(e,i){return(0,m.jsx)(f.Z,{delay:"".concat((0,j.C)(i,.4),"s"),children:(0,m.jsx)(x.ZP,{href:e.Link,target:"_blank",rel:"noopener",children:(0,m.jsx)(g.Z,{image:e.Image,alt:"".concat(e.Title,"-logo"),onClick:function(){return window.open(e.Link)},text:e.Title,more:e.Text})})},e.Title)}))})]})})}},6934:function(e,i,t){t.d(i,{Z:function(){return x}});var n=t(1413),s=t(4925),r=t(2791),a=t(7291),o=(0,t(161).zo)("div",{w:"100%",mr:"auto",ml:"auto",variants:{fluid:{true:{maxWidth:"100%"}},responsive:{true:{"@xs":{maxWidth:"$breakpoints$xs"},"@sm":{maxWidth:"$breakpoints$sm"},"@md":{maxWidth:"$breakpoints$md"},"@lg":{maxWidth:"$breakpoints$lg"},"@xl":{maxWidth:"$breakpoints$xl"}}}},defaultVariants:{fluid:!1,responsive:!0}}),l=t(184),c=["xs","sm","md","lg","xl","wrap","gap","as","display","justify","direction","alignItems","alignContent","children","responsive","fluid","css"],d=r.forwardRef((function(e,i){var t=e.xs,d=e.sm,x=e.md,f=e.lg,p=e.xl,u=e.wrap,m=e.gap,h=e.as,g=e.display,v=e.justify,j=e.direction,y=e.alignItems,b=e.alignContent,k=e.children,Z=e.responsive,w=e.fluid,$=e.css,C=(0,s.Z)(e,c),P=(0,a.gy)(i),I=(0,r.useMemo)((function(){return"calc(".concat(m," * $space$sm)")}),[m]);return(0,l.jsx)(o,(0,n.Z)((0,n.Z)({ref:P,as:h,css:(0,n.Z)({px:I,maxWidth:t?"$breakpoints$xs":d?"$breakpoints$sm":x?"$breakpoints$md":f?"$breakpoints$lg":p?"$breakpoints$xl":"",alignItems:y,alignContent:b,flexWrap:u,display:g,justifyContent:v,flexDirection:j},$),fluid:w,responsive:Z},C),{},{children:k}))}));d.displayName="NextUI.Container",d.toString=function(){return".nextui-container"},d.defaultProps={gap:2,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,responsive:!0,fluid:!1,wrap:"wrap",as:"div",display:"block"};var x=r.memo(d)}}]);
//# sourceMappingURL=336.9647dfaa.chunk.js.map