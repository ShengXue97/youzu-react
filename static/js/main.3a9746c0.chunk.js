(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/page2.a9445369.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/page3.9eb4d274.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/page4.b3a4f8f2.jpg"},123:function(e,t,a){e.exports=a.p+"static/media/page5.2870cdfc.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/page6.8324c42e.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/page7.af5608d9.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/page8.904b4d29.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/page9.c2c0b780.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/page10.a7a37634.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/page11.b44dbe86.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/page12.41c64cf8.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/page13.b09c4e51.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/page14.2e7541ff.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/page15.5a7ee4e2.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/page16.9c2d79eb.jpg"},135:function(e,t,a){e.exports=a.p+"static/media/page17.1c406461.jpg"},136:function(e,t,a){e.exports=a.p+"static/media/page18.5b0646b0.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/page19.64326834.jpg"},140:function(e,t,a){e.exports=a(205)},145:function(e,t,a){},150:function(e,t){},152:function(e,t){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(45),r=a.n(i),c=(a(145),a(15)),o=a(16),s=a(18),m=a(17),p=a(37),u=a(10),d=(a(146),a(35)),g=(a(41),a(7)),f=a(23),E=a(51),h=a(139),b=a(47),x=a.n(b),v=a(48),y=a.n(v),A=a(49),j=a.n(A),C=(a(56),a(50)),O=a.n(C),w=a(78),S=a.n(w),I=(a(199),a(113)),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setMsg=function(){n.setState({msgVariant:"primary",msgText:"Upload a file to begin!"})},n.onDrop=function(e){var t=null;e.map((function(e,a){null==t&&(t=e)})),n.setState({msgVariant:"warning",msgText:"Received file, uploading... Check footer at bottom of page for information"});var a=new FormData;a.append("myFile",t),function(e){console.log("polling..."),S.a.post("/uploadfile",e,{timeout:1e4}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).then((function(){}))}(a)},Object(I.loadProgressBar)(),n.state={msgVariant:"primary",msgText:"Upload a file to begin!"},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/settings"},"Settings4"))),l.a.createElement("h1",null,"Home"),l.a.createElement("div",{style:{height:"50px"}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"80px"}},l.a.createElement(h.a,{style:{width:"70%",height:"90%"},variant:this.state.msgVariant},l.a.createElement("p",null,this.state.msgText))),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"190px"}},l.a.createElement(d.a,{style:{width:"70%",height:"50%"},name:"hey",onClick:this.setMsg,onDrop:this.onDrop},l.a.createElement("div",{style:{flexGrow:"10",display:"flex",flexDirection:"column",alignItems:"center",outline:"5px dotted black"}},l.a.createElement("div",{style:{height:"30px"}}),l.a.createElement(f.a,{onClick:this.setMsg,style:{height:"90%",width:"50%"},variant:"success"},l.a.createElement(g.a.Img,{style:{height:"50px",width:"50px"},variant:"left",src:O.a}),"Choose PDF File (from local drive)")," ",l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement("h4",null,"... Or Drag and Drop that Document."),l.a.createElement("p",null,"We'll do the rest for you")))),l.a.createElement("div",{style:{height:"50px"}}),l.a.createElement(E.a,{style:{paddingLeft:"300px",paddingRight:"300px"}},l.a.createElement(g.a,null,l.a.createElement(g.a.Img,{variant:"top",src:y.a}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,"Simple to use"),l.a.createElement(g.a.Text,null,"Just drag-and-drop your PDF file in the box above, wait for the compression to complete and download your file. It's that simple..")),l.a.createElement(g.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(g.a,null,l.a.createElement(g.a.Img,{variant:"top",src:j.a}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,"User friendly"),l.a.createElement(g.a.Text,null,"Easy-to-use user interface that segments the exam paper PDF you upload into pages and questions. Simply edit the text within the question text boxes.")),l.a.createElement(g.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(g.a,null,l.a.createElement(g.a.Img,{variant:"top",src:x.a}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,"No coding required"),l.a.createElement(g.a.Text,null,"Everything is done for you, just for you. The extra processing is done in the background and you will not have to worry about it.")),l.a.createElement(g.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),a}(n.Component),T=a(8),V=a(6),L=a(25),N=a(14),U=a(12),k=a(84),X=a(67),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U.a,{className:"mb-3"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,{id:"basic-addon1"},this.props.questionNum," ")),l.a.createElement(N.a,{defaultValue:this.props.title,"aria-describedby":"basic-addon1"})),l.a.createElement("div",{style:{paddingLeft:"10px"}},l.a.createElement(X.a,null,l.a.createElement(U.a,{className:"mb-3"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,{id:"basic-addon1"},"(1) ")),l.a.createElement(N.a,{defaultValue:this.props.option1,"aria-describedby":"basic-addon1"})),l.a.createElement(U.a,{className:"mb-3"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,{id:"basic-addon1"},"(2) ")),l.a.createElement(N.a,{defaultValue:this.props.option2,"aria-describedby":"basic-addon1"})),l.a.createElement(U.a,{className:"mb-3"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,{id:"basic-addon1"},"(3) ")),l.a.createElement(N.a,{defaultValue:this.props.option3,"aria-describedby":"basic-addon1"})),l.a.createElement(U.a,{className:"mb-3"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,{id:"basic-addon1"},"(4) ")),l.a.createElement(N.a,{defaultValue:this.props.option4,"aria-describedby":"basic-addon1"})))))}}]),a}(l.a.Component),R=a(119),W=a(82),z=a.n(W),K=a(120),P=a.n(K),B=a(121),q=a.n(B),Y=a(122),H=a.n(Y),Z=a(123),G=a.n(Z),M=a(124),Q=a.n(M),J=a(125),$=a.n(J),_=a(126),ee=a.n(_),te=a(127),ae=a.n(te),ne=a(128),le=a.n(ne),ie=a(129),re=a.n(ie),ce=a(130),oe=a.n(ce),se=a(131),me=a.n(se),pe=a(132),ue=a.n(pe),de=a(133),ge=a.n(de),fe=a(134),Ee=a.n(fe),he=a(135),be=a.n(he),xe=a(136),ve=a.n(xe),ye=a(137),Ae=a.n(ye),je=l.a.createRef(),Ce=(n.Component,n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.a,{bg:"light"},l.a.createElement(T.a.Brand,{href:"/"},"Yoozoo"),l.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(V.a,{className:"mr-auto"},l.a.createElement(V.a.Link,{href:"/edit"},"Edit"),l.a.createElement(V.a.Link,{href:"/library"},"Library"),l.a.createElement(V.a.Link,{href:"/settings"},"Settings"),l.a.createElement(V.a.Link,{href:"/format"},"Format")),l.a.createElement(L.a,{inline:!0},l.a.createElement(N.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(f.a,{variant:"outline-success"},"Search")))),l.a.createElement("h1",null,"Settings"))}}]),a}(n.Component)),Oe=(n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/settings"},"Settings5"))),l.a.createElement("hr",null),l.a.createElement(u.a,{exact:!0,path:"/",component:D}),l.a.createElement(u.a,{path:"/settings",component:Ce})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a.p+"static/media/code.bc037138.png"},48:function(e,t,a){e.exports=a.p+"static/media/lightbulb.66ad084a.png"},49:function(e,t,a){e.exports=a.p+"static/media/user.f3b96ecf.png"},50:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABCCAYAAAAPIWX+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAALuSURBVHhe7ZrBbtNAEIZtVA6OVA4lXECkR8ozQI+IR0YVNxKeIeHWpAoX0iI1qnNopWWmjKU2Xntn1uPYa/uTVrvbRkl//7Ozs5vGxpioj7ygvncMwvvGILxvDML7xiC8buY3C7PcrrBaetbSh9Tg76br2WErKazc6miXt0vo/Li7vzPfLi9waH1vjaZesqKDo6MRzaoD0RB9PDmLaaqGWqijYOhURSMgGrvH5fD4AyUqO77Zbcw4GdPsIKi4X9XxQ4tGVNz3Ek4ZWDX0JGD4Y6TR1AtxqKPo83efadYskFciyCleoS9yvE2iEUyklFTFSB1vLLzLgMIoOj2eiJyXON5K0QiIzvIOG5bjDWxZvrBd54a6mtur7VWU3qc0+8/k1QTWa0Izf8CgCAxiiXcK1y5Bgdwftrj5Zc5OPtCsMizhzjWuXYLWDTfLlwr33SqahGtUqfDQ3M7gVHWFwunSIEg4O1ChcNwbu4wzuYUK7hQ0tNJZ4a7t0Src9bS6gFV48rJ6FdV2rMKliQ3LUAArJk7LAWFpe12uTX//hE4HlTW+X3vXxfnbT/gAVOhscnMxCH9K+rCjUXexHkulx0S89FvermhWju1bkYvldzM5fk+zYt5AKSq8ECnOCSh8v/1Yz6Crjdznza8X0NVC7rOyZg11zezZFJvdNY3sdDa5zf8uaGSnUHjoCc4VtYXCp+sZjbpJofCvp1+CXeec0rZ0jcO2RqOw4CTnUuF0eAgKrlmlwpHQXOea5RSu7brtO65x8ppG1ZAcWyXflrb6Vga339FRwjbJ6XhG20NeIhqROI5loNEKS2XEy5HtOAKi47ZVdL7XUSLhCIZUW8SjaN8DlSjUn7LaXrHO0DVSabcRO54BolVvPblQtFUSjXgLRyjMDhb6+KCl2bsI71C3AQ/AaPxLxz64lWoXUpUc34fciF23H1xoKcW1nBnQ8Tqb5D7tT7oxdN9nfS/NphrqIaEa6iExCO8bg/C+0VPhUfQP9RGIdnKKdpIAAAAASUVORK5CYII="},56:function(e,t,a){e.exports=a.p+"static/media/drag.f94615bc.png"},82:function(e,t,a){e.exports=a.p+"static/media/page1.34715692.jpg"}},[[140,1,2]]]);
//# sourceMappingURL=main.3a9746c0.chunk.js.map