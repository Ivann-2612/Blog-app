(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,s,t){},45:function(e,s,t){},87:function(e,s){function t(e){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=87},93:function(e,s,t){"use strict";t.r(s);var c=t(2),i=t.n(c),a=t(32),l=t.n(a),r=(t(44),t(45),t(12)),n=t(1),j=function(e){var s=e.show;return Object(n.jsx)("div",{className:s?"sidenav":"sidenav active",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("a",{href:"https://google.com",children:Object(n.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ivan-nikolic-750881186/",children:Object(n.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})}),Object(n.jsx)("a",{href:"https://google.com",children:Object(n.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),Object(n.jsx)("p",{className:"name",children:"Ivan Nikolic 2021"})]})})},o=t(33),h=t.n(o),d=t(34),p=function(){var e=Object(c.useState)([]),s=Object(r.a)(e,2),t=s[0],i=s[1],a=Object(c.useState)(4),l=Object(r.a)(a,2),o=l[0],p=l[1],b=Object(c.useState)(""),x=Object(r.a)(b,2),m=x[0],O=x[1],v=Object(c.useState)(!0),g=Object(r.a)(v,2),f=g[0],w=g[1];return Object(c.useEffect)((function(){h.a.get("https://ivans-blog.herokuapp.com/api/posts/").then((function(e){i(e.data)}))}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"input-search",type:"search",placeholder:"Search title...",onChange:function(e){O(e.target.value)}}),Object(n.jsx)(j,{show:f}),Object(n.jsxs)("header",{children:[Object(n.jsx)(d.a,{className:"giHam",onClick:function(){w(!f)}}),Object(n.jsxs)("p",{children:["BLOG",Object(n.jsx)("span",{children:"man"})]})]}),Object(n.jsx)("h5",{className:"main-title",children:"New Blogs"}),null===t||void 0===t?void 0:t.filter((function(e){return""===m||e.title.toLowerCase().includes(m.toLowerCase())?e:void 0})).slice(0,o).map((function(e){return Object(n.jsxs)("div",{className:"mainDiv",children:[Object(n.jsx)("h5",{children:null===e||void 0===e?void 0:e.title}),Object(n.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:"New"}),Object(n.jsx)("p",{children:null===e||void 0===e?void 0:e.description}),Object(n.jsx)("p",{style:{color:"#fecc2c"},children:null===e||void 0===e?void 0:e.date})]},null===e||void 0===e?void 0:e.id)})),Object(n.jsx)("button",{className:"load-more",onClick:function(){p((function(e){return e+2}))},children:"Load more..."})]})})},b=t.p+"static/media/avatar.b7fa7d63.jpg",x=t(35),m=t(36),O=(t(65),t.p+"static/media/man.38c02599.png"),v=t.p+"static/media/News.8097e2ca.svg",g=t.p+"static/media/Weather.bf4b8212.png",f=t.p+"static/media/new.1eab5e6b.png",w=t.p+"static/media/recipe.32c260c8.png",u=t.p+"static/media/dribbble-icon-logo.f5d2b0d7.png",N=function(){return Object(n.jsxs)("div",{className:"main-portfolio",children:[Object(n.jsx)("div",{className:"social-portfolio",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("a",{href:"https://google.com",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",fill:"#f8f8ff",height:"26",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ivan-nikolic-750881186/",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",fill:"#f8f8ff",height:"26",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})}),Object(n.jsx)("a",{href:"https://google.com",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",fill:"#f8f8ff",height:"26",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]})}),Object(n.jsx)("lottie-player",{src:"https://assets1.lottiefiles.com/packages/lf20_pwfhjs2s.json",background:"transparent",color:"white",speed:"1",style:{height:"70px",display:"grid",placeItems:"center",filter:"invert(25%)"},loop:!0,autoplay:!0}),Object(n.jsxs)("div",{className:"portfolio",children:[Object(n.jsxs)("h2",{children:["Hi, I'm ",Object(n.jsx)(x.a,{size:"45px",color:"red"}),Object(n.jsx)("br",{})," Ivan Nikolic"]}),Object(n.jsx)("h4",{children:"I am front-end developer,traveller,bla bla bla..."})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"avatar",children:[Object(n.jsx)("img",{src:b,alt:"avatar"}),Object(n.jsxs)("h6",{children:["    ",Object(n.jsx)("span",{children:"Frontend and UI Design"})," ",Object(n.jsx)("br",{})," is  my passion"]})]}),Object(n.jsx)(m.a,{className:"arrow"}),Object(n.jsx)("p",{style:{fontSize:"22px",marginLeft:"7px"},children:"My projects"}),Object(n.jsxs)("div",{className:"projects",children:[Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:u,alt:"man",style:{opacity:"0.8",filter:"drop-shadow(3px 3px 3px #289fed)",width:"120px",height:"100px",marginBottom:"10px",marginTop:"10px"}}),Object(n.jsx)("p",{children:"UI Design"}),Object(n.jsx)("p",{className:"title",children:"Figma"}),Object(n.jsxs)("p",{className:"demo",children:["Work on: ",Object(n.jsx)("a",{href:"https://dribbble.com/ivan2612",children:"Dribbble"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:f,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(1px 1px 0.75rem yellow)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"Neumorphism App"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,React"}),Object(n.jsxs)("p",{className:"demo",children:["Demo: ",Object(n.jsx)("a",{href:"https://ivann-2612.github.io/Neumorphism-portfolio/",children:"Portfolio"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:w,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(0 0 0.75rem blue)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"Recipes App"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,React,API"}),Object(n.jsxs)("p",{className:"demo",children:["Demo: ",Object(n.jsx)("a",{href:"https://ivann-2612.github.io/Recipes-app/",children:"Recipes APP"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:v,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(0 0 0.75rem red)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"News with APIs"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,React,APIs"}),Object(n.jsxs)("p",{className:"demo",children:["Demo:",Object(n.jsx)("a",{href:"https://github.com/Ivann-2612/Zavrsni-projekat",children:"Online news app"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:g,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(0 0 0.75rem yellow)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"Weather App"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,React,API"}),Object(n.jsxs)("p",{className:"demo",children:["Demo: ",Object(n.jsx)("a",{href:"https://ivann-2612.github.io/weather-app/",children:"Weather app"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:O,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(0 0 0.75rem lime)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"To-do list"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,Javascript"}),Object(n.jsxs)("p",{className:"demo",children:["Demo: ",Object(n.jsx)("a",{href:"https://ivann-2612.github.io/To-do-list/",children:"To-do app"})]})]}),Object(n.jsxs)("div",{className:"projects item",children:[Object(n.jsx)("img",{src:O,alt:"man",style:{opacity:"0.8",filter:" drop-shadow(0 0 0.75rem lime)",width:"150px",height:"150px"}}),Object(n.jsx)("p",{children:"Hair Salon"}),Object(n.jsx)("p",{className:"title",children:"Html,Css,Javascript"}),Object(n.jsxs)("p",{className:"demo",children:["Demo: ",Object(n.jsx)("a",{href:"https://ivann-2612.github.io/Responsive-website-one/",children:"Hair salon app"})]}),Object(n.jsx)("span",{children:"New,New,New Website..."})]})]})]})},y=t.p+"static/media/Asset 530.9c999eb5.png",z=t(8),k=t(38),I=t(37),C=function(){return Object(n.jsxs)("div",{className:"welcome-page",children:[Object(n.jsx)("h3",{children:"This is my personal blog website."}),Object(n.jsxs)("h4",{children:["I am a fun of",Object(n.jsx)(I.a,{className:"apple",size:"30px",color:"orange"}),"products ."]}),Object(n.jsx)("p",{children:"Blog about some useful tips from HTML, CSS, JAVASCRIPT AND REACT."}),Object(n.jsxs)("div",{className:"welcome-allSvg",children:[Object(n.jsx)(z.c,{size:"30px",color:"orange"}),Object(n.jsx)(z.a,{size:"30px",color:"orange"}),Object(n.jsx)(z.d,{size:"30px",color:"orange"}),Object(n.jsx)(z.e,{size:"30px",color:"orange"}),Object(n.jsx)(z.b,{size:"30px",color:"orange"}),Object(n.jsx)(z.f,{size:"30px",color:"orange"}),Object(n.jsx)(k.a,{size:"30px",color:"orange"})]}),Object(n.jsx)("img",{src:y}),Object(n.jsxs)("p",{className:"copyright",children:[Object(n.jsx)("span",{style:{color:"cadetblue"},children:"Ivan Nikolic \xa9"}),Object(n.jsx)("span",{style:{color:"orange"},children:" 2021"})]})]})},A=t(14),D=t(3),B=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(A.a,{children:[Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(A.b,{className:"link1",to:"/",children:"Blogs"}),Object(n.jsx)(A.b,{className:"link2",to:"/portfolio",children:"Portfolio"})]}),Object(n.jsx)("div",{className:"main",children:Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)(D.c,{children:[Object(n.jsx)(D.a,{exact:!0,path:"/",component:p}),Object(n.jsx)(D.a,{path:"/portfolio",component:N}),Object(n.jsx)(D.a,{render:function(){return Object(n.jsx)(C,{})}})]})})})]})})};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.e90d8415.chunk.js.map