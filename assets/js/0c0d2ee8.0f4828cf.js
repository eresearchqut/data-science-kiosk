"use strict";(self.webpackChunkdata_science_kiosk=self.webpackChunkdata_science_kiosk||[]).push([[8930],{7767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(7294),l=a(9962),i=a(6931),c=a(4287),m=a(487),s=a(4418),r=a(1052),o=a(8133),p=a(9564),E=a(8927),h=a(6793),d=a(204),u=a(9222),f=a(8029),g=a.n(f),y=a(6864),k=a(2766);function x(e){let{docMetadata:t,themes:a,dataTypes:f,questionTypes:x,...S}=e;const{siteConfig:b}=(0,l.Z)(),[z,C]=(0,n.useState)({step:"theme"});return n.createElement(i.Z,{title:`${b.title}`,description:"Description will go into a meta tag in <head />"},n.createElement("div",{className:"container"},n.createElement(c.K,{mb:4},"theme"===z.step&&n.createElement(m.M,{initialScale:.95,in:!0},n.createElement(s.X,{mt:2},"What is the theme you are interested in?"),n.createElement(r.E,{colorScheme:"green",onChange:e=>C((()=>({theme:e,step:"dataTypes"})))},n.createElement(c.K,null,a.map((e=>n.createElement(o.Y,{value:e.id},n.createElement(p.x,{size:"lg",m:0,fontWeight:"extrabold"},e.label))))))),"dataTypes"===z.step&&n.createElement(m.M,{key:"data-type-ids",initialScale:.95,in:!0},n.createElement(s.X,{mt:2},"Which best describe the type(s) of data you have?"),n.createElement(E.c,{onChange:e=>C((t=>({...t,dataTypes:e})))},n.createElement(c.K,null,f.map((e=>n.createElement(h.X,{value:e.id,size:"lg"},n.createElement(c.K,{spacing:0,ml:1},n.createElement(p.x,{fontWeight:"extrabold",m:0},g()(e.label)),n.createElement(p.x,{fontSize:"small",m:0},"Definition: ",e.definition),n.createElement(p.x,{fontSize:"small",m:0},"Examples: ",e.examples))))))),n.createElement(d.k,{alignItems:"center",gap:"2",mt:4},n.createElement(u.z,{colorScheme:"teal",leftIcon:n.createElement(y.X,null),onClick:()=>C((e=>({...e,step:"questionTypes"})))},z.dataTypes?.length>0?"Next":"Skip"),n.createElement(u.z,{colorScheme:"teal",variant:"outline",leftIcon:n.createElement(k.n,null),onClick:()=>C((()=>({step:"theme"})))},"Reset"))),"questionTypes"===z.step&&n.createElement(m.M,{key:"question-type-ids",initialScale:.95,in:!0},n.createElement(s.X,{mt:2},"What is the type of question that you are interested in?"),n.createElement(E.c,{onChange:e=>C((t=>({...t,questionTypes:e})))},n.createElement(c.K,null,x.map((e=>n.createElement(h.X,{value:e.id,size:"lg"},n.createElement(c.K,{spacing:0,ml:1},n.createElement(p.x,{fontWeight:"extrabold",m:0},g()(e.label)),n.createElement(p.x,{fontSize:"small",m:0},"Definition: ",e.definition))))))),n.createElement(d.k,{alignItems:"center",gap:"2",mt:4},n.createElement(u.z,{colorScheme:"teal",variant:"outline",leftIcon:n.createElement(k.n,null),onClick:()=>C((()=>({step:"theme"})))},"Reset"))))))}}}]);