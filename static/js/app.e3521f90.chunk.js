(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.d(e,"a",(function(){return pt}));var r=n(19),i=n.n(r),o=n(40),a=n.n(o),s=n(50),u=n.n(s),l=n(37),c=n.n(l),p=n(47),d=n.n(p),f=n(116),h=n(0),v=n.n(h),m=n(3),b=n(2),y=n(38),g=n(58),x=n(117),S=n.n(x),w=n(45),k=function(t,e){return Object.values(t).filter((function(t){return t.order<e.order})).reduce((function(t,e){return!t||t.order<e.order?e:t}),null)},O=function(t,e){return Object.values(t).filter((function(t){return t.order>e.order})).reduce((function(t,e){return!t||t.order>e.order?e:t}),null)||e},E=/^M0,0H\d*\.?\d*V\d*\.?\d*H0V0Z/,P=Object(w.a)((function(t){return t.replace(E,"").trim()})),T=Object(w.a)((function(t){var e=t.match(E);return e?e[0]:""})),C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t||0===t?t:e},j=function(t){var e=t.size,n=t.position,r=t.borderRadius,i=t.borderRadiusObject;if(r||i){var o=C(null===i||void 0===i?void 0:i.topRight,r),a=C(null===i||void 0===i?void 0:i.topLeft,r),s=C(null===i||void 0===i?void 0:i.bottomRight,r),u=C(null===i||void 0===i?void 0:i.bottomLeft,r);return"M"+n.x+","+n.y+"H"+(n.x+e.x)+" a"+o+","+o+" 0 0 1 "+o+","+o+"V"+(n.y+e.y-o)+" a"+s+","+s+" 0 0 1 -"+s+","+s+"H"+n.x+" a"+u+","+u+" 0 0 1 -"+u+",-"+u+"V"+(n.y+(u>a?a:u))+" a"+a+","+a+" 0 0 1 "+a+",-"+a+"Z"}return"M"+n.x+","+n.y+"H"+(n.x+e.x)+"V"+(n.y+e.y)+"H"+n.x+"V"+n.y+"Z"},R=function(t){var e=t.size,n=t.position,r=Math.round(Math.max(e.x,e.y)/2);return["M"+(n.x-e.x/8)+","+(n.y+e.y/2),"a"+r+" "+r+" 0 1 0 "+2*r+" 0 "+r+" "+r+" 0 1 0-"+2*r+" 0"].join("")},_=Object(w.a)((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?{x:t.x+e,y:t.y+e}:t})),M=Object(w.a)((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?{x:t.x-e/2,y:t.y-e/2}:t})),z=Object(w.a)((function(t){switch(t){case"circle":case"circle_and_keep":return 7;case"rectangle_and_keep":return 25;default:return 15}})),V=Object(w.a)((function(t){var e=Object(g.splitPathString)(t);return e.length>1?e.slice(1).join(""):t})),D=Object(w.a)((function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6?arguments[6]:void 0,s={maxSegmentLength:z(e)},u={single:!0},l=function(){return Object(g.interpolate)(t,j({size:_(r,i),position:M(n,i),borderRadius:o,borderRadiusObject:a}),s)},c=function(){return Object(g.toCircle)(t,n.x+r.x/2,n.y+r.y/2,Math.max(r.x,r.y)/2+i,s)};switch(e){case"circle":return c();case"rectangle":return l();case"circle_and_keep":var p=V(t);return Object(g.separate)(t,[p,R({size:_(r,i),position:n})],u);case"rectangle_and_keep":var d=V(t);return Object(g.separate)(t,[d,j({size:_(r,i),position:M(n,i),borderRadius:o,borderRadiusObject:a})],u);default:return l()}})),N=n(7),L=n.n(N),B=n(11),F=n.n(B),G=n(8),I=n.n(G),A=n(9),H=n.n(A),Z=n(10),W=n.n(Z),q=n(22),U=n(48),Y=n(25),J=n(73),K=n(16),Q=n(21),X=n(74),$=n(68),tt=Y.a.select({default:q.a.createAnimatedComponent($.a),web:$.a}),et=Q.a.get("screen"),nt="M0,0H"+et.width+"V"+et.height+"H0V0ZM"+et.width/2+","+et.height/2+" h 1 v 1 h -1 Z",rt="web"!==Y.a.OS,it=function(){var t=function(t){function e(t){var n;return L()(this,e),(n=I()(this,H()(e).call(this,t))).mask=v.a.createRef(),n.getPath=function(){var t=n.state,e=t.previousPath,r=t.animation,i=n.props,o=i.size,a=i.position,s=i.currentStep,u=i.maskOffset,l=i.borderRadius;return function(t){var e=t.previousPath,n=t.animation,r=t.to,i=r.position,o=r.size,a=r.shape,s=r.maskOffset,u=r.borderRadius,l=r.borderRadiusObject,c=D(P(e),a,i,o,s,u,l);return""+T(e)+c(S()(n._value,0,1))}({animation:r,previousPath:e,to:{position:a,size:o,shape:null===s||void 0===s?void 0:s.shape,maskOffset:(null===s||void 0===s?void 0:s.maskOffset)||u,borderRadius:(null===s||void 0===s?void 0:s.borderRadius)||l,borderRadiusObject:null===s||void 0===s?void 0:s.borderRadiusObject}})},n.animationListener=function(){var t=n.getPath();n.rafID=requestAnimationFrame((function(){n.mask&&n.mask.current&&(rt?n.mask.current.setNativeProps({d:t}):n.mask.current._touchableNode.setAttribute("d",t))}))},n.animate=function(){var t=[q.a.timing(n.state.animation,{toValue:1,duration:n.props.animationDuration,easing:n.props.easing,useNativeDriver:!1})];1!==n.state.opacity._value&&t.push(q.a.timing(n.state.opacity,{toValue:1,duration:n.props.animationDuration,easing:n.props.easing,useNativeDriver:!0})),q.a.parallel(t,{stopTogether:!1}).start((function(t){t.finished&&n.setState({previousPath:n.getPath()},(function(){1===n.state.animation._value&&n.state.animation.setValue(0)}))}))},n.handleLayout=function(t){var e=t.nativeEvent.layout,r=e.width,i=e.height;n.setState({canvasSize:{x:r,y:i}})},n.state={canvasSize:{x:et.width,y:et.height},size:t.size,position:t.position,opacity:new q.a.Value(0),animation:new q.a.Value(0),previousPath:nt},n.listenerID=n.state.animation.addListener(n.animationListener),n}return W()(e,t),F()(e,[{key:"componentDidUpdate",value:function(t){t.position===this.props.position&&t.size===this.props.size||this.animate()}},{key:"componentWillUnmount",value:function(){this.listenerID&&this.state.animation.removeListener(this.listenerID),this.rafID&&cancelAnimationFrame(this.rafID)}},{key:"render",value:function(){if(!this.state.canvasSize)return null;var t=this.props,e=t.dismissOnPress,n=t.stop,r=e?X.a:b.a;return v.a.createElement(r,{style:this.props.style,onLayout:this.handleLayout,pointerEvents:"none",onPress:e?n:void 0},v.a.createElement($.b,{pointerEvents:"none",width:this.state.canvasSize.x,height:this.state.canvasSize.y},v.a.createElement(tt,{ref:this.mask,fill:this.props.backdropColor,strokeWidth:0,fillRule:"evenodd",d:nt,opacity:this.state.opacity})))}}]),e}(h.Component);return t.defaultProps={easing:U.a.linear,size:{x:0,y:0},position:{x:0,y:0},maskOffset:0},t}(),ot=n(78),at=function(){var t=function(t){function e(t){var n;return L()(this,e),(n=I()(this,H()(e).call(this,t))).layout={x:0,y:0,width:0,height:0},n.state={tooltip:{},containerVisible:!1,tooltipTranslateY:new q.a.Value(400),opacity:new q.a.Value(0),layout:void 0,size:void 0,position:void 0},n.handleLayoutChange=function(t){var e=t.nativeEvent.layout;n.layout=e},n.handleNext=function(){n.props.next()},n.handlePrev=function(){n.props.prev()},n.handleStop=function(){n.reset(),n.props.stop()},n.renderMask=function(){return h.createElement(it,{style:K.c.overlayContainer,size:n.state.size,position:n.state.position,easing:n.props.easing,animationDuration:n.props.animationDuration,backdropColor:n.props.backdropColor,currentStep:n.props.currentStep,maskOffset:n.props.maskOffset,borderRadius:n.props.borderRadius,dismissOnPress:n.props.dismissOnPress})},n}return W()(e,t),F()(e,[{key:"componentDidUpdate",value:function(t){!0===t.visible&&!1===this.props.visible&&this.reset()}},{key:"measure",value:function(){var t=this;return"undefined"!==typeof __TEST__&&__TEST__?new Promise((function(t){return t({x:0,y:0,width:0,height:0})})):new Promise((function(e){!function n(){t.layout&&0!==t.layout.width?e(t.layout):requestAnimationFrame(n)}()}))}},{key:"_animateMove",value:function(){var t,e,n,r,i,o,a,s,u,l,p,d,f,h,v,m=arguments;return c.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:{top:0,left:0,width:0,height:0},b.next=3,c.a.awrap(this.measure());case 3:n=b.sent,this.props.androidStatusBarVisible||"android"!==Y.a.OS||(t.top-=J.a.currentHeight||30),r={x:t.left+t.width/2,y:t.top+t.height/2},i=r.x,o=r.y,a=Math.abs(r.y-n.height),s=Math.abs(r.x-n.width),l=i>s?"left":"right",p={top:0,tooltip:0,bottom:0,right:0,maxWidth:0,left:0},"bottom"===(u=a>o?"bottom":"top")?p.top=t.top+t.height+K.a:p.bottom=n.height-(t.top-K.a),"left"===l?(p.right=Math.max(n.width-(t.left+t.width),0),p.right=0===p.right?p.right+K.a:p.right,p.maxWidth=n.width-p.right-K.a):(p.left=Math.max(t.left,0),p.left=0===p.left?p.left+K.a:p.left,p.maxWidth=n.width-p.left-K.a),d=this.props.animationDuration+200,f="bottom"===u?p.top:t.top-K.a-135-(this.props.currentStep.tooltipBottomOffset||0),h=q.a.timing(this.state.tooltipTranslateY,{toValue:f,duration:d,easing:this.props.easing,delay:d,useNativeDriver:!0}),v=q.a.timing(this.state.opacity,{toValue:1,duration:d,easing:this.props.easing,delay:d,useNativeDriver:!0}),this.state.opacity.setValue(0),f===this.state.tooltipTranslateY._value||(null===(e=this.props.currentStep)||void 0===e?void 0:e.keepTooltipPosition)?v.start():q.a.parallel([h,v]).start(),this.setState({tooltip:p,layout:n,size:{x:t.width,y:t.height},position:{x:Math.floor(Math.max(t.left,0)),y:Math.floor(Math.max(t.top,0))}});case 22:case"end":return b.stop()}}),null,this)}},{key:"animateMove",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){t.setState({containerVisible:!0},(function(){return t._animateMove(e).then(n)}))}))}},{key:"reset",value:function(){this.setState({containerVisible:!1,layout:void 0})}},{key:"renderTooltip",value:function(){var t=this.props,e=t.tooltipComponent;if(!t.visible)return null;var n=this.state.opacity;return h.createElement(q.a.View,{pointerEvents:"box-none",key:"tooltip",style:[K.c.tooltip,this.props.tooltipStyle,{opacity:n,transform:[{translateY:this.state.tooltipTranslateY}]}]},h.createElement(e,{isFirstStep:this.props.isFirstStep,isLastStep:this.props.isLastStep,currentStep:this.props.currentStep,handleNext:this.handleNext,handlePrev:this.handlePrev,handleStop:this.handleStop,labels:this.props.labels}))}},{key:"render",value:function(){var t=this.state.containerVisible||this.props.visible,e=this.state.layout&&t;return t?h.createElement(b.a,{style:[m.a.absoluteFill,{backgroundColor:"transparent"}],pointerEvents:"box-none"},h.createElement(b.a,{style:K.c.container,onLayout:this.handleLayoutChange,pointerEvents:"box-none"},e&&h.createElement(h.Fragment,null,this.renderMask(),this.renderTooltip()))):null}}]),e}(h.Component);return t.defaultProps={easing:U.a.elastic(.7),animationDuration:400,tooltipComponent:ot.a,tooltipStyle:{},androidStatusBarVisible:!1,backdropColor:"rgba(0, 0, 0, 0.4)",labels:{}},t}(),st=h.useMemo,ut=h.useEffect,lt=h.useState,ct=h.useRef,pt=function(t){var e=t.children,n=t.wrapperStyle,r=t.labels,o=t.tooltipComponent,s=t.tooltipStyle,l=t.androidStatusBarVisible,p=t.backdropColor,v=t.animationDuration,m=t.maskOffset,g=t.borderRadius,x=t.verticalOffset,S=t.startAtMount,w=void 0!==S&&S,E=t.dismissOnPress,P=void 0!==E&&E,T=lt(void 0),C=d()(T,2),j=C[0],R=C[1],_=lt(),M=d()(_,2),z=M[0],V=M[1],D=lt({}),N=d()(D,2),L=N[0],B=N[1],F=lt(!1),G=d()(F,2),I=G[0],A=G[1],H=ct(0),Z=function(){var t=h.useRef(!1);return h.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]),t}(),W=st((function(){return new f.a}),[]),q=ct();ut((function(){Z&&!1===j&&W.emit("stop")}),[j]),ut((function(){(j||z)&&U()}),[j,z]),ut((function(){Z&&(Object.entries(L).length>0?(A(!0),w&&et()):A(!1))}),[Z,L]);var U=function(){var t,e;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(z.target.measure());case 2:if(e=n.sent,!(isNaN(e.width)||isNaN(e.height)||isNaN(e.x)||isNaN(e.y))){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,c.a.awrap(null===(t=q.current)||void 0===t?void 0:t.animateMove({width:e.width+K.b,height:e.height+K.b,left:Math.round(e.x)-K.b/2,top:Math.round(e.y)-K.b/2+(x||0)}));case 7:case"end":return n.stop()}}))},Y=function(t){return new Promise((function(e){V((function(){return W.emit("stepChange",t),e(),t}))}))},J=function(){return function(t){return t&&Object.values(t).reduce((function(t,e){return!t||t.order>e.order?e:t}),null)}(L)},Q=function(){return function(t){return t&&Object.values(t).reduce((function(t,e){return!t||t.order<e.order?e:t}),null)}(L)},X=st((function(){return z===J()}),[z]),$=st((function(){return z===Q()}),[z]),tt=function(){R(!1),Y(void 0)},et=function t(e){var n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e?L[e]:J(),!(H.current>120)){r.next=4;break}return H.current=0,r.abrupt("return");case 4:if(n){r.next=9;break}H.current+=1,requestAnimationFrame((function(){return t(e)})),r.next=14;break;case 9:return W.emit("start"),r.next=12,c.a.awrap(Y(n));case 12:R(!0),H.current=0;case 14:case"end":return r.stop()}}))};return h.createElement(b.a,{style:[dt.container,n]},h.createElement(y.a.Provider,{value:{eventEmitter:W,registerStep:function(t){B((function(e){return u()({},e,a()({},t.name,t))}))},unregisterStep:function(t){Z&&B((function(e){return Object.entries(e).filter((function(e){return d()(e,1)[0]!==t})).reduce((function(t,e){var n=d()(e,2),r=n[0],o=n[1];return i()(t,a()({},r,o))}),{})}))},getCurrentStep:function(){return z},start:et,stop:tt,canStart:I}},e,h.createElement(at,i()({ref:q},{next:function(){return Y(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return O(L,t)}())},prev:function(){return Y(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return k(L,t)}())},stop:tt,visible:j,isFirstStep:X,isLastStep:$,currentStep:z,labels:r,tooltipComponent:o,tooltipStyle:s,androidStatusBarVisible:l,backdropColor:p,animationDuration:v,maskOffset:m,borderRadius:g,dismissOnPress:P}))))},dt=m.a.create({container:{flex:1}})},122:function(t,e,n){t.exports=n(123)},123:function(t,e,n){"use strict";n.r(e);var r=n(75);n.d(e,"TourGuideZone",(function(){return r.a}));var i=n(100);n.d(e,"TourGuideProvider",(function(){return i.a}));var o=n(38);n.d(e,"TourGuideContext",(function(){return o.a}));var a=n(78);n.d(e,"Tooltip",(function(){return a.a}));var s=n(96);n.d(e,"TourGuideZoneByPosition",(function(){return s.a}));var u=n(97);n.d(e,"useTourGuideController",(function(){return u.a}));var l=n(98);for(var c in l)["TourGuideZone","TourGuideProvider","TourGuideContext","Tooltip","TourGuideZoneByPosition","useTourGuideController","default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(c)},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n(3),i=13,o=4;e.c=r.a.create({container:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:100},tooltip:{position:"absolute",paddingHorizontal:15,overflow:"hidden",width:"100%",borderRadius:16,paddingTop:24,alignItems:"center",justifyContent:"center",paddingBottom:16},tooltipText:{textAlign:"center"},tooltipContainer:{flex:1,alignItems:"center",justifyContent:"space-around",width:"80%"},button:{padding:10},buttonText:{color:"#27ae60"},bottomBar:{marginTop:10,flexDirection:"row",justifyContent:"flex-end"},overlayContainer:{position:"absolute",left:0,top:0,bottom:0,right:0}})},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),i=r.createContext({canStart:!1})},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n(19),i=n.n(r),o=n(0),a=n(50),s=n.n(a),u=n(7),l=n.n(u),c=n(11),p=n.n(c),d=n(8),f=n.n(d),h=n(9),v=n.n(h),m=n(10),b=n.n(m),y=function(){var t=function(t){function e(){return l()(this,e),f()(this,v()(e).apply(this,arguments))}return b()(e,t),p()(e,[{key:"componentDidMount",value:function(){this.props.active&&this.register()}},{key:"componentDidUpdate",value:function(t){this.props.active!==t.active&&(this.props.active?this.register():this.unregister())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"setNativeProps",value:function(t){this.wrapper.setNativeProps(t)}},{key:"register",value:function(){this.props.context&&this.props.context.registerStep?this.props.context.registerStep(s()({target:this,wrapper:this.wrapper},this.props)):console.warn("context undefined")}},{key:"unregister",value:function(){this.props.context.unregisterStep?this.props.context.unregisterStep(this.props.name):console.warn("unregisterStep undefined")}},{key:"measure",value:function(){var t=this;return"undefined"!==typeof __TEST__&&__TEST__?new Promise((function(t){return t({x:0,y:0,width:0,height:0})})):new Promise((function(e,n){requestAnimationFrame((function r(){t.wrapper&&t.wrapper.measure?t.wrapper.measure((function(t,n,r,i,o,a){return e({x:o,y:a,width:r,height:i})}),n):requestAnimationFrame(r)}))}))}},{key:"render",value:function(){var t=this,e={ref:function(e){t.wrapper=e},onLayout:function(){}};return o.cloneElement(this.props.children,{copilot:e})}}]),e}(o.Component);return t.defaultProps={active:!0},t}(),g=n(38),x=function(t){var e=o.useContext(g.a);return o.createElement(y,i()({},s()({},t,{context:e})))},S=n(2),w=function(t){var e=t.copilot,n=t.children,r=t.style;return o.createElement(S.a,i()({style:r},e),n)},k=function(t){var e=t.isTourGuide,n=void 0===e||e,r=t.zone,a=t.children,s=t.shape,u=t.text,l=t.maskOffset,c=t.borderRadius,p=t.style,d=t.keepTooltipPosition,f=t.tooltipBottomOffset,h=t.borderRadiusObject;return n?o.createElement(x,i()({text:null!==u&&void 0!==u?u:"Zone "+r,order:r,name:""+r},{shape:s,maskOffset:l,borderRadius:c,keepTooltipPosition:d,tooltipBottomOffset:f,borderRadiusObject:h}),o.createElement(w,i()({},{style:p}),a)):o.createElement(o.Fragment,null,a)}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(0),i=n(2),o=n(29),a=n(34),s=n(19),u=n.n(s),l=n(66),c=n.n(l),p=n(16),d=function(t){var e=t.wrapperStyle,n=t.style,a=t.children,s=c()(t,["wrapperStyle","style","children"]);return r.createElement(i.a,{style:[p.c.button,e]},r.createElement(o.a,u()({style:[p.c.buttonText,n],testID:"TourGuideButtonText"},s),a))},f=function(t){var e=t.isFirstStep,n=t.isLastStep,s=t.handleNext,u=t.handlePrev,l=t.handleStop,c=t.currentStep,f=t.labels;return r.createElement(i.a,{style:{borderRadius:16,paddingTop:24,alignItems:"center",justifyContent:"center",paddingBottom:16,width:"80%",backgroundColor:"#ffffffef"}},r.createElement(i.a,{style:p.c.tooltipContainer},r.createElement(o.a,{testID:"stepDescription",style:p.c.tooltipText},c&&c.text)),r.createElement(i.a,{style:[p.c.bottomBar]},n?null:r.createElement(a.a,{onPress:l},r.createElement(d,null,(null===f||void 0===f?void 0:f.skip)||"Skip")),e?null:r.createElement(a.a,{onPress:u},r.createElement(d,null,(null===f||void 0===f?void 0:f.previous)||"Previous")),n?r.createElement(a.a,{onPress:l},r.createElement(d,null,(null===f||void 0===f?void 0:f.finish)||"Finish")):r.createElement(a.a,{onPress:s},r.createElement(d,null,(null===f||void 0===f?void 0:f.next)||"Next"))))}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(19),i=n.n(r),o=n(0),a=n(3),s=n(2),u=n(75),l=function(t){var e=t.isTourGuide,n=t.zone,r=t.width,l=t.height,c=t.top,p=t.left,d=t.right,f=t.bottom,h=t.shape,v=t.containerStyle,m=t.keepTooltipPosition,b=t.tooltipBottomOffset,y=t.borderRadiusObject,g=t.text;return e?o.createElement(s.a,{pointerEvents:"none",style:[a.a.absoluteFillObject,v]},o.createElement(u.a,i()({isTourGuide:!0},{zone:n,shape:h,keepTooltipPosition:m,tooltipBottomOffset:b,borderRadiusObject:y,text:g},{style:{position:"absolute",height:l,width:r,top:c,right:d,bottom:f,left:p}}))):null}},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),i=n(38),o=function(){var t=r.useContext(i.a),e=t.start,n=t.canStart;return{start:e,stop:t.stop,eventEmitter:t.eventEmitter,getCurrentStep:t.getCurrentStep,canStart:n}}},98:function(t,e){}},[[122,1,2]]]);
//# sourceMappingURL=app.e3521f90.chunk.js.map