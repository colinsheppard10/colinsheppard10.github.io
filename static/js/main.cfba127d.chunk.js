(this.webpackJsonpabtest=this.webpackJsonpabtest||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r,c=n(0),i=n(1),a=n.n(i),s=n(8),o=n.n(s),u=(n(17),n(4)),d=n.n(u),h=n(9),l=n(2),p=n(6),m=n(5),j=function(e,t,n,r){var c,i=Object(l.a)(t.anchors,2),a=i[0],s=i[1],o=Object(l.a)(t.angles,2),u=o[0],d=o[1],h=function(e){var t=e.start,n=e.repCompletionPercent,r=e.end;return r<t&&(t*=-1,n*=-1,r*=-1),{start:t,repCompletionPercent:n,end:r}}({start:u,repCompletionPercent:c=function(e){var t=e.p1,n=e.p2;return t.y>n.y?0:100}({p1:e[a],p2:e[s]}),end:d});return u=h.start,c=h.repCompletionPercent,d=h.end,null!=c&&100==c?0==n&&(r++,n=1):null!=c&&0==c&&1==n&&(n=0),{direction:n,count:r,repCompletionPercent:c}},v=n(10);!function(e){e.BINARY="BINARY",e.ANGLE="ANGLE"}(r||(r={}));var f=function e(t){var n=t.name,r=t.anchors,c=t.angles,i=t.reps,a=t.startInverted,s=t.type;Object(v.a)(this,e),this.anchors=void 0,this.angles=void 0,this.startInverted=void 0,this.name=void 0,this.type=void 0,this.reps=void 0,this.name=n,this.anchors=r,this.angles=c,this.reps=i,this.startInverted=a,this.type=s},b=[new f({name:"CURLS",anchors:[16,14,0],angles:[0,100],reps:10,startInverted:!1,type:r.BINARY}),new f({name:"PULL UP",anchors:[6,16,9],angles:[0,100],reps:10,startInverted:!0,type:r.BINARY}),new f({name:"SHR PRS",anchors:[16,0,0],angles:[0,100],reps:10,startInverted:!1,type:r.BINARY})],O=n(11),g=n.n(O),w=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(l.a)(a,2),o=s[0],u=s[1],v=Object(i.useRef)(null),f=Object(i.useRef)(null),O=Object(i.useRef)(null),w=b[2],x=Object(i.useState)((function(){return console.log("in here"),{direction:0,count:0,repCompletionPercent:0}})),C=Object(l.a)(x,2),I=C[0],P=C[1];Object(i.useEffect)((function(){if(n&&v.current&&f.current){O.current=f.current.getContext("2d");navigator.mediaDevices.getUserMedia({video:{width:{min:1280},height:{min:720}}}).then((function(e){v.current&&(v.current.srcObject=e),t()}));var e=new m.Pose({locateFile:function(e){return"https://cdn.jsdelivr.net/npm/@mediapipe/pose/".concat(e)}});e.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!0,smoothSegmentation:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),e.onResults(k);var t=function(){var n=Object(h.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!v.current){n.next=8;break}if(v.current.videoWidth){n.next=5;break}requestAnimationFrame(t),n.next=8;break;case 5:return n.next=7,e.send({image:v.current});case 7:requestAnimationFrame(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}),[n]);var k=function(e){if(f.current&&O.current){u(!0),O.current.save(),O.current.clearRect(0,0,f.current.width,f.current.height),O.current.drawImage(e.image,0,0,f.current.width,f.current.height),Object(p.drawConnectors)(O.current,e.poseLandmarks,m.POSE_CONNECTIONS,{color:"#00FF00",lineWidth:4}),Object(p.drawLandmarks)(O.current,e.poseLandmarks,{color:"#FF0000",lineWidth:2}),O.current.restore();var t=e.poseLandmarks;if(t){var n=I.direction,r=I.count;P(j(t,w,n,r))}}},L=I.repCompletionPercent,R=I.count;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:b.map((function(e){return Object(c.jsx)("div",{onClick:function(){},children:e.name})}))}),Object(c.jsx)("div",{children:R}),Object(c.jsxs)("div",{children:[Object(c.jsx)(g.a,{transitionDuration:".5s",completed:L}),";"]}),Object(c.jsx)("video",{autoPlay:!0,height:0,width:0,ref:function(e){v.current=e,r(!!e)}}),Object(c.jsx)("canvas",{ref:f,width:window.screen.availWidth-10,height:window.screen.availHeight-100}),!o&&Object(c.jsx)("div",{className:"message",children:"Loading"})]})},x=function(){return Object(c.jsx)(w,{})};var C=function(){return Object(c.jsx)(x,{})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.cfba127d.chunk.js.map