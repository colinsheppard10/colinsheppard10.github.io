(this.webpackJsonpabtest=this.webpackJsonpabtest||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c,r=n(0),i=n(1),a=n.n(i),s=n(10),o=n.n(s),u=(n(20),n(14)),d=n(6),h=n.n(d),j=n(11),l=n(2),v=n(8),b=n(7),f=function(e,t){var n=Object(l.a)(t.anchors,2),c=n[0],r=n[1];return function(e){var t=e.p1,n=e.p2;return t.y>n.y?0:100}({p1:e[c],p2:e[r]})},O=n(12);!function(e){e.BINARY="BINARY",e.ANGLE="ANGLE"}(c||(c={}));var m=function e(t){var n=t.name,c=t.anchors,r=t.angles,i=t.reps,a=t.type;Object(O.a)(this,e),this.anchors=void 0,this.angles=void 0,this.name=void 0,this.type=void 0,this.reps=void 0,this.name=n,this.anchors=c,this.angles=r,this.reps=i,this.type=a},x=[new m({name:"CURLS",anchors:[16,14,0],angles:[0,100],reps:3,type:c.BINARY}),new m({name:"PULL UP",anchors:[6,16,9],angles:[0,100],reps:3,type:c.BINARY}),new m({name:"SHR PRS",anchors:[16,0,0],angles:[0,100],reps:3,type:c.BINARY})],p=n(13),g=n.n(p),w=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(l.a)(a,2),o=s[0],d=s[1],O=Object(i.useRef)(null),m=Object(i.useRef)(null),p=Object(i.useRef)(null),w=Object(i.useState)({direction:0,count:0,set:0,exerciseSelectionIndex:-1,activeExercise:-1}),S=Object(l.a)(w,2),k=S[0],y=S[1],C=Object(i.useRef)(-1);C.current=k.activeExercise;var I=Object(i.useState)(0),R=Object(l.a)(I,2),L=R[0],E=R[1],F=Object(i.useState)([]),N=Object(l.a)(F,2),A=N[0],P=N[1];Object(i.useEffect)((function(){if(n&&O.current&&m.current){p.current=m.current.getContext("2d");navigator.mediaDevices.getUserMedia({video:{width:{min:1280},height:{min:720}}}).then((function(e){O.current&&(O.current.srcObject=e),t()}));var e=new b.Pose({locateFile:function(e){return"https://cdn.jsdelivr.net/npm/@mediapipe/pose/".concat(e)}});e.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!0,smoothSegmentation:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),e.onResults(B);var t=function(){var n=Object(j.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!O.current){n.next=8;break}if(O.current.videoWidth){n.next=5;break}requestAnimationFrame(t),n.next=8;break;case 5:return n.next=7,e.send({image:O.current});case 7:requestAnimationFrame(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}),[n]);var B=function(e){if(m.current&&p.current){d(!0),p.current.save(),p.current.clearRect(0,0,m.current.width,m.current.height),p.current.drawImage(e.image,0,0,m.current.width,m.current.height),Object(v.drawConnectors)(p.current,e.poseLandmarks,b.POSE_CONNECTIONS,{color:"#00FF00",lineWidth:4}),Object(v.drawLandmarks)(p.current,e.poseLandmarks,{color:"#FF0000",lineWidth:2}),p.current.restore();var t=e.poseLandmarks;t&&C.current>=0&&E(f(t,x[C.current]))}};Object(i.useEffect)((function(){var e=k.direction,t=k.count,n=k.set,c=k.exerciseSelectionIndex,r=k.activeExercise;100==L?0==e&&(t++,e=1):0==L&&1==e&&(e=0);var i=x[r];i&&(t>=i.reps&&0==e&&(c<A.length-1?c++:(n++,c=0),t=0),r=A[c].index,y({direction:e,count:t,set:n,exerciseSelectionIndex:c,activeExercise:r}))}),[L]);var Y=k.set,D=k.count,T=k.exerciseSelectionIndex;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:x.map((function(e,t){return Object(r.jsx)("div",{onClick:function(){var e=Math.random();P((function(n){return[].concat(Object(u.a)(n),[{workoutKey:e,index:t}])}))},children:e.name},t)}))}),Object(r.jsx)("div",{children:A.map((function(e,t){var n=e.workoutKey,c=e.index,i=t==T;return Object(r.jsx)("div",{onClick:function(){P((function(e){return e.filter((function(e){return e.workoutKey!==n}))}))},children:"".concat(t," - ").concat(x[c].name," ").concat(i?"<=":"")},t)}))}),Object(r.jsx)("div",{children:"set:".concat(Y," count:").concat(D)}),Object(r.jsx)("div",{onClick:function(){A.length&&y({direction:0,count:0,set:0,exerciseSelectionIndex:0,activeExercise:A[0].index})},children:"start"}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{transitionDuration:".5s",completed:L})}),Object(r.jsx)("video",{autoPlay:!0,height:0,width:0,ref:function(e){O.current=e,c(!!e)}}),Object(r.jsx)("canvas",{ref:m,width:window.screen.availWidth-10,height:window.screen.availHeight-100}),!o&&Object(r.jsx)("div",{className:"message",children:"Loading"})]})},S=function(){return Object(r.jsx)(w,{})};var k=function(){return Object(r.jsx)(S,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.052de77d.chunk.js.map