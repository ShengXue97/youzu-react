(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/page2.a9445369.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/page3.9eb4d274.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/page4.b3a4f8f2.jpg"},123:function(e,t,a){e.exports=a.p+"static/media/page5.2870cdfc.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/page6.8324c42e.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/page7.af5608d9.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/page8.904b4d29.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/page9.c2c0b780.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/page10.a7a37634.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/page11.b44dbe86.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/page12.41c64cf8.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/page13.b09c4e51.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/page14.2e7541ff.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/page15.5a7ee4e2.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/page16.9c2d79eb.jpg"},135:function(e,t,a){e.exports=a.p+"static/media/page17.1c406461.jpg"},136:function(e,t,a){e.exports=a.p+"static/media/page18.5b0646b0.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/page19.64326834.jpg"},140:function(e,t,a){e.exports=a(205)},145:function(e,t,a){},150:function(e,t){},152:function(e,t){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),i=a.n(l),c=(a(145),a(15)),o=a(16),s=a(18),m=a(17),d=a(6),p=a(10),u=(a(146),a(36)),g=(a(41),a(8)),E=a(22),b=a(51),h=a(7),f=a(24),v=a(13),x=a(139),y=a(47),j=a.n(y),A=a(48),C=a.n(A),O=a(49),w=a.n(O),S=(a(56),a(50)),D=a.n(S),I=a(78),L=a.n(I),N=(a(199),a(113)),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setMsg=function(){n.setState({msgVariant:"primary",msgText:"Upload a file to begin!"})},n.onDrop=function(e){var t=null;e.map((function(e,a){null==t&&(t=e)})),n.setState({msgVariant:"warning",msgText:"Received file, uploading... Check footer at bottom of page for information"});var a=new FormData;a.append("myFile",t),function(e){console.log("polling..."),L.a.post("/uploadfile",e,{timeout:1e4}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).then((function(){}))}(a)},Object(N.loadProgressBar)(),n.state={msgVariant:"primary",msgText:"Upload a file to begin!"},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"light"},r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.a.createElement(d.b,{to:"/"},"Home  "),r.a.createElement(d.b,{to:"/edit"},"Edit  "),r.a.createElement(d.b,{to:"/library"},"Library  "),r.a.createElement(d.b,{to:"/settings"},"Settings  "),r.a.createElement(d.b,{to:"/format"},"Format  ")),r.a.createElement(f.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"outline-success"},"Search")))),r.a.createElement("h1",null,"Home"),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"80px"}},r.a.createElement(x.a,{style:{width:"70%",height:"90%"},variant:this.state.msgVariant},r.a.createElement("p",null,this.state.msgText))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"190px"}},r.a.createElement(u.a,{style:{width:"70%",height:"50%"},name:"hey",onClick:this.setMsg,onDrop:this.onDrop},r.a.createElement("div",{style:{flexGrow:"10",display:"flex",flexDirection:"column",alignItems:"center",outline:"5px dotted black"}},r.a.createElement("div",{style:{height:"30px"}}),r.a.createElement(E.a,{onClick:this.setMsg,style:{height:"90%",width:"50%"},variant:"success"},r.a.createElement(g.a.Img,{style:{height:"50px",width:"50px"},variant:"left",src:D.a}),"Choose PDF File (from local drive)")," ",r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement("h4",null,"... Or Drag and Drop that Document."),r.a.createElement("p",null,"We'll do the rest for you")))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(b.a,{style:{paddingLeft:"300px",paddingRight:"300px"}},r.a.createElement(g.a,null,r.a.createElement(g.a.Img,{variant:"top",src:C.a}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"Simple to use"),r.a.createElement(g.a.Text,null,"Just drag-and-drop your PDF file in the box above, wait for the compression to complete and download your file. It's that simple..")),r.a.createElement(g.a.Footer,null,r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),r.a.createElement(g.a,null,r.a.createElement(g.a.Img,{variant:"top",src:w.a}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"User friendly"),r.a.createElement(g.a.Text,null,"Easy-to-use user interface that segments the exam paper PDF you upload into pages and questions. Simply edit the text within the question text boxes.")),r.a.createElement(g.a.Footer,null,r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),r.a.createElement(g.a,null,r.a.createElement(g.a.Img,{variant:"top",src:j.a}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"No coding required"),r.a.createElement(g.a.Text,null,"Everything is done for you, just for you. The extra processing is done in the background and you will not have to worry about it.")),r.a.createElement(g.a.Footer,null,r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),a}(n.Component),T=a(26),R=a(12),k=a(84),U=a(67),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},this.props.questionNum," ")),r.a.createElement(v.a,{defaultValue:this.props.title,"aria-describedby":"basic-addon1"})),r.a.createElement("div",{style:{paddingLeft:"10px"}},r.a.createElement(U.a,null,r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},"(1) ")),r.a.createElement(v.a,{defaultValue:this.props.option1,"aria-describedby":"basic-addon1"})),r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},"(2) ")),r.a.createElement(v.a,{defaultValue:this.props.option2,"aria-describedby":"basic-addon1"})),r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},"(3) ")),r.a.createElement(v.a,{defaultValue:this.props.option3,"aria-describedby":"basic-addon1"})),r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},"(4) ")),r.a.createElement(v.a,{defaultValue:this.props.option4,"aria-describedby":"basic-addon1"})))))}}]),a}(r.a.Component),X=a(119),B=a(82),z=a.n(B),P=a(120),W=a.n(P),K=a(121),Y=a.n(K),H=a(122),q=a.n(H),Q=a(123),Z=a.n(Q),G=a(124),M=a.n(G),J=a(125),$=a.n(J),_=a(126),ee=a.n(_),te=a(127),ae=a.n(te),ne=a(128),re=a.n(ne),le=a(129),ie=a.n(le),ce=a(130),oe=a.n(ce),se=a(131),me=a.n(se),de=a(132),pe=a.n(de),ue=a(133),ge=a.n(ue),Ee=a(134),be=a.n(Ee),he=a(135),fe=a.n(he),ve=a(136),xe=a.n(ve),ye=a(137),je=a.n(ye),Ae=r.a.createRef(),Ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleChangePage=function(e){n.setState({currentImg:r.a.createElement("img",{style:{height:"936px",width:"662px"},src:n.state.pageImgs[e]}),active:e})};var l=[],i=[null,z.a,W.a,Y.a,q.a,Z.a,M.a,$.a,ee.a,ae.a,re.a,ie.a,oe.a,me.a,pe.a,ge.a,be.a,fe.a,xe.a,je.a],o=window.data.data;console.log(o);var s=0,m=o.map((function(e){return s+=1,r.a.createElement(V,{questionNum:s,title:e[1],option1:e[3],option2:e[4],option3:e[5],option4:e[6]})}));n.state={pageImgs:i,text:m,active:1,items:l,currentImg:r.a.createElement("img",{style:{height:"936px",width:"662px"},src:z.a})};for(var d=function(e){l.push(r.a.createElement(k.a.Item,{onClick:function(){return n.handleChangePage(e)},key:e,active:e===n.state.active},e))},p=1;p<=19;p++)d(p);return n.setState({items:l}),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"light"},r.a.createElement(h.a.Brand,null,"Yoozoo"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.a.createElement(d.b,{to:"/"},"Home  "),r.a.createElement(d.b,{to:"/edit"},"Edit  "),r.a.createElement(d.b,{to:"/library"},"Library  "),r.a.createElement(d.b,{to:"/settings"},"Settings  "),r.a.createElement(d.b,{to:"/format"},"Format  "))),r.a.createElement(f.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"outline-success"},"Search")))),r.a.createElement("h1",null,"Edit"),r.a.createElement("h5",null,"Basic Upload"),r.a.createElement(X.a,{ref:Ae,onFileLoad:this.handleOnFileLoad,onError:this.handleOnError,noClick:!0,noDrag:!0,onRemoveFile:this.handleOnRemoveFile},(function(t){var a=t.file;return r.a.createElement("aside",{style:{display:"flex",flexDirection:"row",marginBottom:10}},r.a.createElement("button",{type:"button",onClick:e.handleOpenDialog,style:{borderRadius:0,marginLeft:0,marginRight:0,width:"40%",paddingLeft:0,paddingRight:0}},"Browse file"),r.a.createElement("div",{style:{borderWidth:1,borderStyle:"solid",borderColor:"#ccc",height:45,lineHeight:2.5,marginTop:5,marginBottom:5,paddingLeft:13,paddingTop:3,width:"60%"}},a&&a.name),r.a.createElement("button",{style:{borderRadius:0,marginLeft:0,marginRight:0,paddingLeft:20,paddingRight:20},onClick:e.handleRemoveFile},"Remove"))})),r.a.createElement("div",{style:{paddingLeft:"30px",paddingRight:"100px"}},r.a.createElement(R.a,{className:"mb-3"},r.a.createElement(R.a.Prepend,null,r.a.createElement(R.a.Text,{id:"basic-addon1"},"Filename")),r.a.createElement(v.a,{placeholder:"Filename","aria-label":"Filename","aria-describedby":"basic-addon1"})),r.a.createElement(k.a,null,this.state.items),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},r.a.createElement("div",null,this.state.currentImg),r.a.createElement("div",{style:{height:"936px",width:"1100px",overflowY:"scroll"}},r.a.createElement("h5",null,"Questions"),r.a.createElement(U.a,null,this.state.text)))))}}]),a}(n.Component),Oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"light"},r.a.createElement(h.a.Brand,null,"Yoozoo"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.a.createElement(d.b,{to:"/"},"Home  "),r.a.createElement(d.b,{to:"/edit"},"Edit  "),r.a.createElement(d.b,{to:"/library"},"Library  "),r.a.createElement(d.b,{to:"/settings"},"Settings  "),r.a.createElement(d.b,{to:"/format"},"Format  "))),r.a.createElement(f.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"outline-success"},"Search")))),r.a.createElement("h1",null,"Library"))}}]),a}(n.Component),we=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"light"},r.a.createElement(h.a.Brand,null,"Yoozoo"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.a.createElement(d.b,{to:"/"},"Home  "),r.a.createElement(d.b,{to:"/edit"},"Edit  "),r.a.createElement(d.b,{to:"/library"},"Library  "),r.a.createElement(d.b,{to:"/settings"},"Settings  "),r.a.createElement(d.b,{to:"/format"},"Format  "))),r.a.createElement(f.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"outline-success"},"Search")))),r.a.createElement("h1",null,"Settings"))}}]),a}(n.Component),Se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"light"},r.a.createElement(h.a.Brand,null,"Yoozoo"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.a.createElement(d.b,{to:"/"},"Home  "),r.a.createElement(d.b,{to:"/edit"},"Edit  "),r.a.createElement(d.b,{to:"/library"},"Library  "),r.a.createElement(d.b,{to:"/settings"},"Settings  "),r.a.createElement(d.b,{to:"/format"},"Format  "))),r.a.createElement(f.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"outline-success"},"Search")))),r.a.createElement("h1",null,"Format"))}}]),a}(n.Component),De=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:F}),r.a.createElement(p.a,{path:"/edit",component:Ce}),r.a.createElement(p.a,{path:"/library",component:Oe}),r.a.createElement(p.a,{path:"/settings",component:we}),r.a.createElement(p.a,{path:"/format",component:Se})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a.p+"static/media/code.bc037138.png"},48:function(e,t,a){e.exports=a.p+"static/media/lightbulb.66ad084a.png"},49:function(e,t,a){e.exports=a.p+"static/media/user.f3b96ecf.png"},50:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABCCAYAAAAPIWX+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAALuSURBVHhe7ZrBbtNAEIZtVA6OVA4lXECkR8ozQI+IR0YVNxKeIeHWpAoX0iI1qnNopWWmjKU2Xntn1uPYa/uTVrvbRkl//7Ozs5vGxpioj7ygvncMwvvGILxvDML7xiC8buY3C7PcrrBaetbSh9Tg76br2WErKazc6miXt0vo/Li7vzPfLi9waH1vjaZesqKDo6MRzaoD0RB9PDmLaaqGWqijYOhURSMgGrvH5fD4AyUqO77Zbcw4GdPsIKi4X9XxQ4tGVNz3Ek4ZWDX0JGD4Y6TR1AtxqKPo83efadYskFciyCleoS9yvE2iEUyklFTFSB1vLLzLgMIoOj2eiJyXON5K0QiIzvIOG5bjDWxZvrBd54a6mtur7VWU3qc0+8/k1QTWa0Izf8CgCAxiiXcK1y5Bgdwftrj5Zc5OPtCsMizhzjWuXYLWDTfLlwr33SqahGtUqfDQ3M7gVHWFwunSIEg4O1ChcNwbu4wzuYUK7hQ0tNJZ4a7t0Src9bS6gFV48rJ6FdV2rMKliQ3LUAArJk7LAWFpe12uTX//hE4HlTW+X3vXxfnbT/gAVOhscnMxCH9K+rCjUXexHkulx0S89FvermhWju1bkYvldzM5fk+zYt5AKSq8ECnOCSh8v/1Yz6Crjdznza8X0NVC7rOyZg11zezZFJvdNY3sdDa5zf8uaGSnUHjoCc4VtYXCp+sZjbpJofCvp1+CXeec0rZ0jcO2RqOw4CTnUuF0eAgKrlmlwpHQXOea5RSu7brtO65x8ppG1ZAcWyXflrb6Vga339FRwjbJ6XhG20NeIhqROI5loNEKS2XEy5HtOAKi47ZVdL7XUSLhCIZUW8SjaN8DlSjUn7LaXrHO0DVSabcRO54BolVvPblQtFUSjXgLRyjMDhb6+KCl2bsI71C3AQ/AaPxLxz64lWoXUpUc34fciF23H1xoKcW1nBnQ8Tqb5D7tT7oxdN9nfS/NphrqIaEa6iExCO8bg/C+0VPhUfQP9RGIdnKKdpIAAAAASUVORK5CYII="},56:function(e,t,a){e.exports=a.p+"static/media/drag.f94615bc.png"},82:function(e,t,a){e.exports=a.p+"static/media/page1.34715692.jpg"}},[[140,1,2]]]);
//# sourceMappingURL=main.757d8d2e.chunk.js.map