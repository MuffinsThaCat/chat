(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1023:function(e,t,n){},1027:function(e,t,n){e.exports=n(2698)},1094:function(e,t){},1096:function(e,t){},1133:function(e,t){},1181:function(e,t){},1226:function(e,t){},1378:function(e,t){},1445:function(e,t){},1458:function(e,t){},1538:function(e,t){},1540:function(e,t){},1552:function(e,t){},1982:function(e,t){},2122:function(e,t){},2133:function(e,t){},2135:function(e,t){},2163:function(e,t){},2176:function(e,t){},2209:function(e,t){},2697:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},2698:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(94),l=n.n(s),c=n(70),i=n(77),o=n(86),u=n(85),m=n(87),p=n(558),h=n(146),f=n(41),d=n.n(f),g=n(115),y=n(95),v=n(282),b=n(991),E=n.n(b),w=n(992),j=n.n(w),C=n(993),O=n.n(C),k=(n(252),n(190)),x=n(116),S=n.n(x),I=n(231),M=n(997),U=n.n(M),A=n(143),N=n.n(A),T=n(555),D=n.n(T),B=n(192),F=n.n(B),P=n(131),K=n.n(P),W=n(1026),J=n(367),z=n(365),R=n.n(z),L=(n(2284),n(130)),V=n.n(L),H=n(230),_=n.n(H),q=n(165),$=n.n(q),G=n(191),Y=n.n(G),Z=n(1e3),Q=n(1003),X=n.n(Q),ee=n(1004),te=n.n(ee),ne=n(145),ae=n.n(ne),re=n(2703),se=n(1008),le=n(1005),ce={bs:"bash",bf:"brainfuck",c:"c",cp:"cpp",cl:"clojure",cs:"css",dk:"docker",ht:"http",js:"javascript",jn:"json",jx:"jsx",la:"latex",ma:"makefile",md:"markdown",nm:"nim",pb:"protobuf",pu:"puppet",py:"python",sq:"sql",ts:"typescript",vi:"vim",ym:"yaml"},ie=n(1006),oe=n.n(ie),ue=function(e,t){var n=oe()(t);return new Promise(function(t,a){e.files.add(n,function(e,n){if(e)return a(e);t(n)})})},me=function(){var e=Object(g.a)(d.a.mark(function e(t,n,a){var r,s,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.name,n.path,n.type,e.next=3,ue(t,n);case 3:r=e.sent,s=r[0].hash,l="/ipfs/".concat(s),a(l);case 7:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}(),pe=function(e,t){return new Promise(function(n,a){e.files.get(t,function(e,t){e?a(e):n(t)})})},he=(new le.a).begin().find("/ipfs/");var fe=function(e){for(var t,n=e.message,a=[],s=RegExp(/:[\-a-zA-Z_+0-9]+:/g);null!==(t=s.exec(n));)a.push(r.a.createElement(J.a,{emoji:t[0],size:16}));var l=n.split(s);return l.forEach(function(e,t){l[t]=r.a.createElement("span",{className:"match",key:t},e,a[t])}),"`"===n[2]&&ce[n.slice(0,2)]?r.a.createElement(re.a,{language:ce[n.slice(0,2)],style:se.atomDark},n.slice(3)):r.a.createElement(X.a,null,r.a.createElement("span",{style:{wordWrap:"break-word",whiteSpace:"pre-line"}},l))},de=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={imgUrl:null},n.getImageFromIpfs=Object(g.a)(d.a.mark(function e(){var t,a,r,s,l,c,i,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.ipfs,r=t.message,e.next=3,pe(a,r);case 3:s=e.sent,l=s[0].content,c=new Uint8Array(l),i=new Blob([c],{type:"image/jpeg"}),o=URL.createObjectURL(i),n.setState({imgUrl:o});case 9:case"end":return e.stop()}},e,this)})),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.message;he.test(e)&&this.getImageFromIpfs()}},{key:"render",value:function(){var e,t,n=this.props,s=n.username,l=n.message,c=n.pubkey,i=this.state.imgUrl;return r.a.createElement(a.Fragment,null,r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(_.a,null,r.a.createElement(Y.a,null,c&&r.a.createElement(ae.a,{diameter:40,seed:Object(ne.jsNumberForAddress)(c)})))),r.a.createElement($.a,{primary:"".concat(s),secondary:r.a.createElement(fe,{message:l})})),((t=l).indexOf("http://www.youtube.com")>=0||t.indexOf("https://www.youtube.com")>=0)&&r.a.createElement(V.a,null,r.a.createElement(Z.a,{videoId:(e=l,void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?e[2].split(/[^0-9a-z_\-]/i)[0]:e),opts:{height:"390",width:"640",playerVars:{autoplay:0}}})),function(e){return e.indexOf("spotify:")>=0}(l)&&r.a.createElement(V.a,null,r.a.createElement(te.a,{uri:l,size:{width:300,height:300},view:"list",theme:"black"})),!!i&&r.a.createElement("img",{src:i,alt:"ipfs",style:{maxWidth:"90%"}}),function(e){return e.indexOf("http")>=0&&(e.indexOf(".jpg")||e.indexOf(".gif"))}(l)&&function(e){var t=new RegExp(/\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/).exec(e);return t?r.a.createElement("img",{src:t[0],style:{maxWidth:"90%"}}):r.a.createElement("span",null)}(l))}}]),t}(a.PureComponent),ge=n(1012),ye=n.n(ge),ve=n(281),be=n.n(ve),Ee=n(283),we=n.n(Ee),je=n(1013),Ce=n.n(je),Oe=n(363),ke=n.n(Oe),xe=n(364),Se=n.n(xe),Ie=n(1011),Me=n.n(Ie),Ue=n(1010),Ae=n.n(Ue),Ne=n(1014),Te=n.n(Ne),De=r.a.createContext("chat"),Be=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={displayChannelStats:!1},n.handleClose=function(){n.setState({displayChannelStats:!1})},n.handleOpen=function(){n.setState({displayChannelStats:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.heartBeat()}},{key:"componentWillUnmount",value:function(){clearInterval(this.heartBeatId)}},{key:"heartBeat",value:function(){var e=this;this.heartBeatId=setInterval(function(){e.forceUpdate()},5e3)}},{key:"render",value:function(){var e=this,t=this.props,n=t.currentChannel,a=t.toggleSidebar,s=this.state.displayChannelStats;return r.a.createElement(De.Consumer,null,function(t){var l=t.channels,c=l[n].users,i=Object.keys(c),o=(new Date).getTime();return r.a.createElement("div",null,l[n].users&&r.a.createElement(ke.a,{onClose:e.handleClose,"aria-labelledby":"simple-dialog-title",open:s},r.a.createElement(Se.a,null,"Users Online in #".concat(n)),r.a.createElement("div",null,r.a.createElement(N.a,null,i.map(function(e){return r.a.createElement(V.a,{button:!0,key:c[e].pubkey},function(e){return o-e.lastSeen>1e4}(c[e])?r.a.createElement(Ae.a,{style:{color:"red"}}):r.a.createElement(Me.a,{style:{color:"green"}}),r.a.createElement(_.a,null,r.a.createElement(Y.a,null,r.a.createElement(ae.a,{diameter:40,seed:Object(ne.jsNumberForAddress)(c[e].pubkey)}))),r.a.createElement($.a,{primary:c[e].username,secondary:"Last seen on ".concat(new Date(c[e].lastSeen))}))})))),r.a.createElement(ye.a,{style:{flexBasis:"10%",paddingBottom:"0px"}},r.a.createElement(be.a,{variant:"h5",component:"h2"},l[n].username?"".concat(l[n].username):"#".concat(n)),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(Ce.a,{style:{color:we.a[500]},onClick:e.handleOpen}),r.a.createElement("div",{style:{color:we.a[500]}},i.length),r.a.createElement("span",{style:{marginLeft:"auto"}},r.a.createElement(Te.a,{style:{color:we.a[500]},onClick:a})))))})}}]),t}(a.PureComponent),Fe=n(1016),Pe=n.n(Fe),Ke=n(1018),We=n.n(Ke),Je=n(1017),ze=n.n(Je),Re=n(1015),Le=n.n(Re),Ve=n(1019),He=n.n(Ve),_e=Le.a[500],qe=Pe.a[500],$e={height:"100vh",overflow:"scroll"},Ge=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.heartBeat()}},{key:"componentWillUnmount",value:function(){clearInterval(this.heartBeatId)}},{key:"heartBeat",value:function(){var e=this;this.heartBeatId=setInterval(function(){e.forceUpdate()},5e3)}},{key:"render",value:function(){return r.a.createElement(De.Consumer,null,function(e){var t=e.channels,n=e.currentChannel,a=e.users,s=t[n].users,l=function(e,t){return Object.keys(e).sort(function(e,n){var a=(new Date).getTime(),r=a-t[e].lastSeen>1e4?1:-1,s=a-t[n].lastSeen>1e4?1:-1;return r>s?1:r<s?-1:e.username<n.username?-1:e.username>n.username?1:0})}(s,a),c=(new Date).getTime();return r.a.createElement("div",{style:$e},r.a.createElement(N.a,{style:$e},l.map(function(e){return r.a.createElement(V.a,{button:!0,key:s[e].pubkey,style:{display:"flex",paddingLeft:"5px"}},r.a.createElement("div",{style:{display:"flex"}},function(e){return c-e.lastSeen>1e4}(s[e])?r.a.createElement(ze.a,{style:{color:qe,margin:"auto"}}):r.a.createElement(We.a,{style:{color:_e,margin:"auto"}}),r.a.createElement(_.a,null,r.a.createElement(Y.a,null,r.a.createElement(ae.a,{diameter:40,seed:Object(ne.jsNumberForAddress)(s[e].pubkey)})))),r.a.createElement(He.a,{title:"Last seen on ".concat(new Date(s[e].lastSeen)),placement:"top-start"},r.a.createElement($.a,{primary:s[e].username})))})))})}}]),t}(a.PureComponent),Ye=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"whoIsTyping",value:function(){var e=this.props,t=e.users,n=e.usersTyping,a=e.currentChannel,r=(new Date).getTime(),s=n[a],l=[];for(var c in s){var i=s[c];t[c]&&(r-i>3e3||r<i||l.push(t[c].username))}return l}},{key:"render",value:function(){var e=this.whoIsTyping();return r.a.createElement("div",{style:{textAlign:"center"}},e.length?"".concat(e.join(",")," is typing"):"")}}]),t}(a.PureComponent);var Ze=U()(N.a),Qe={display:"flex",justifyContent:"center",alignItems:"center",flexBasis:"10%"},Xe=Object(a.createRef)(),et=Object(a.createRef)(),tt=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggleInfoPanel=function(){n.setState({infoPanelActive:!n.state.infoPanelActive})},n.state={showEmojis:!1,infoPanelActive:!0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggleEmojis",value:function(e){this.setState({showEmojis:!this.state.showEmojis})}},{key:"uploadFileDialog",value:function(){this.fileInput.click()}},{key:"fileChangedHandler",value:function(e){var t=this.props,n=t.ipfs,a=t.sendMessage,r=e.target.files[0];me(n,r,a)}},{key:"addEmoji",value:function(e,t,n){console.log(e),n("chatInput","".concat(t,":").concat(e.id,":")),this.setState({showEmojis:!1},function(){et.current.labelNode.focus()})}},{key:"render",value:function(){var e=this,t=this.props,n=t.messages,s=t.sendMessage,l=t.currentChannel,c=t.usersTyping,i=t.typingEvent,o=(t.channelUsers,t.allUsers),u=t.ipfs,m=this.state,p=m.showEmojis,h=m.infoPanelActive,f="calc(100vh - ".concat(185,"px)");return r.a.createElement("div",{style:{width:"100%",flexWrap:"nowrap",display:"flex",boxSizing:"border-box"}},r.a.createElement("input",{type:"file",ref:function(t){e.fileInput=t},onChange:this.fileChangedHandler.bind(this),style:{display:"none"}}),r.a.createElement(S.a,{xs:12,item:!0},r.a.createElement(W.a,{onDrop:function(e,t){!function(e,t,n,a){var r=e[0];me(n,r,a)}(e,0,u,s)},disableClick:!0,style:{position:"relative",height:"100%"},activeStyle:{backgroundColor:"grey",outline:"5px dashed lightgrey",alignSelf:"center",outlineOffset:"-10px"}},r.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",style:{height:"100%"}},r.a.createElement(Be,{currentChannel:l,toggleSidebar:this.toggleInfoPanel}),r.a.createElement(D.a,null),r.a.createElement(S.a,{container:!0,wrap:"nowrap"},r.a.createElement(S.a,{xs:h?9:12,item:!0,style:{overflowY:"scroll"}},r.a.createElement(Ze,{style:{height:f,overflow:"scroll"}},n[l]&&n[l].map(function(e){return r.a.createElement(a.Fragment,{key:e.data.payload},r.a.createElement(de,Object.assign({},e,{ipfs:u})),r.a.createElement("li",null,r.a.createElement(D.a,null)))})),r.a.createElement(I.a,{initialValues:{chatInput:""},onSubmit:function(e,t){var n=t.setSubmitting,a=t.resetForm,r=e.chatInput;s(r),a(),n(!1)}},function(t){var n=t.values,a=t.errors,s=t.touched,u=t.handleChange,m=t.handleBlur,h=t.handleSubmit,f=t.setFieldValue;return r.a.createElement("div",{className:"chat-input"},r.a.createElement("form",{onSubmit:h,style:Qe,ref:Xe},r.a.createElement(K.a,{onClick:function(t){return e.uploadFileDialog()}},r.a.createElement(R.a,null)),r.a.createElement(F.a,{id:"chatInput",ref:et,multiline:!0,style:{width:"auto",flexGrow:"0.95",margin:"2px 0 0 0"},label:"Type a message...",type:"text",name:"chatInput",margin:"normal",variant:"outlined",fullWidth:!0,onChange:u,onKeyDown:function(e){return function(e,t,n,a){if(e.shiftKey&&13===e.keyCode){e.preventDefault();var r=e.target.selectionStart;n("chatInput","".concat(a.slice(0,r),"\n").concat(a.slice(r)))}else 13===e.keyCode&&(e.preventDefault(),Xe.current.dispatchEvent(new Event("submit")));t(e)}(e,i,f,n.chatInput)},onBlur:m,value:n.chatInput||""}),p&&r.a.createElement(J.b,{onSelect:function(t){return e.addEmoji(t,n.chatInput,f)},style:{position:"absolute",bottom:"80px",right:"20px"}}),r.a.createElement(K.a,{onClick:function(t){return e.toggleEmojis(t)}},"Smile"),a.chatInput&&s.chatInput&&a.chatInput),r.a.createElement(Ye,{currentChannel:l,usersTyping:c,users:o}))})),r.a.createElement(S.a,{xs:!!h&&3,item:!0,style:{overflow:"auto",borderLeft:"1px solid lightgrey",minHeight:"100vh"}},h&&r.a.createElement(Ge,null)))))))}}]),t}(a.Component),nt=function(e){var t=e.channelName,n=e.message;return r.a.createElement(De.Consumer,null,function(e){var a=e.setActiveChannel,s=e.currentChannel,l=e.channels;return r.a.createElement(V.a,{onClick:function(){return a(t)},selected:s==t,style:{cursor:"pointer",padding:"0px 2px"}},r.a.createElement($.a,{primary:r.a.createElement("span",{style:{color:"white"}},l[t].username?"".concat(l[t].username):"#".concat(t)),secondary:n}))})},at=/^(0x)?[0-9a-f]{130}$/i,rt=function(e){return at.test(e)},st=function(e){var t=e.channels;return r.a.createElement("div",{style:{marginBottom:"50%"}},t.map(function(e){return r.a.createElement(a.Fragment,{key:e},r.a.createElement(nt,{channelName:e}))}))},lt=function(e){var t=e.channels,n=Object.keys(t),a=n.filter(function(e){return!rt(e)}),s=n.filter(rt);return r.a.createElement(N.a,null,r.a.createElement(st,{channels:a}),r.a.createElement("span",{style:{color:"lightgray"}},"Direct Messages"),r.a.createElement(st,{channels:s}))},ct=n(1022),it=n.n(ct),ot=n(1020),ut=n.n(ot),mt=n(1021),pt=n.n(mt),ht=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open,n=this.props,s=n.joinConversation,l=n.name;return r.a.createElement(a.Fragment,null,r.a.createElement("span",{onClick:this.handleClickOpen,style:{color:"#CAC4C9",cursor:"pointer"}},r.a.createElement("span",{style:{width:"90%",display:"inline-block",verticalAlign:"top"}},l),r.a.createElement(R.a,null)),r.a.createElement(I.a,{initialValues:{channel:""},onSubmit:function(t,n){var a=n.setSubmitting,r=n.resetForm,l=t.channel;s(l),r(),a(!1),e.handleClose()}},function(n){var a=n.values,s=n.errors,l=n.touched,c=n.handleChange,i=n.handleBlur,o=n.handleSubmit;return r.a.createElement(ke.a,{open:t,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(Se.a,{id:"form-dialog-title"},"Join Conversation"),r.a.createElement(ut.a,null,r.a.createElement(pt.a,null,"Enter the Channel, Contact Code or Username you would like to join"),r.a.createElement("form",{onSubmit:o},r.a.createElement(F.a,{autoFocus:!0,id:"channel",name:"channel",variant:"outlined",margin:"dense",label:"Channel",type:"text",fullWidth:!0,onChange:c,onBlur:i,value:a.channel||""}),s.channel&&l.channel&&s.channel)),r.a.createElement(it.a,null,r.a.createElement(K.a,{onClick:e.handleClose,color:"primary"},"Cancel"),r.a.createElement(K.a,{type:"submit",onClick:o,color:"primary"},"Join")))}))}}]),t}(r.a.Component),ft=n(1023),dt=n.n(ft),gt=function(e){var t=e.channels,n=e.joinConversation;return r.a.createElement("div",{className:dt.a.sidebar,style:{backgroundColor:"#4d394b",height:"100%",padding:"16px",borderRight:"1px solid ghostwhite"}},r.a.createElement("h3",{style:{color:"white"}},"Status"),r.a.createElement(ht,{name:"Channels",joinConversation:n}),r.a.createElement(lt,{channels:t}))},yt=function(){return r.a.createElement("svg",{width:"124",height:"124",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M72.458 61.429c-7.431.427-12.088-1.299-19.52-.871a31.245 31.245 0 0 0-5.47.796C48.565 47.65 58.292 35.662 71.519 34.9c8.117-.467 16.23 4.53 16.67 12.642.433 7.973-5.664 13.307-15.73 13.886M52.503 89.46c-7.776.438-15.547-4.24-15.969-11.831-.415-7.462 5.427-12.454 15.07-12.996 7.118-.4 11.58 1.216 18.698.815a30.589 30.589 0 0 0 5.24-.745C74.493 77.528 65.175 88.748 52.503 89.46M62 .181C27.758.18 0 27.857 0 62s27.758 61.82 62 61.82c34.242 0 62-27.678 62-61.82C124 27.858 96.242.18 62 .18",fill:"#4360DF",fillRule:"evenodd"}))},vt=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 630 630"},r.a.createElement("rect",{width:"630",height:"630",fill:"#f7df1e"}),r.a.createElement("path",{d:"m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"}))},bt=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(yt,null),r.a.createElement("div",{style:{width:"25%"}},r.a.createElement(vt,null)))},Et={display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100vh",width:"50%"},wt=function(e){var t=e.setupKeyringController,n=e.keyStore,a=e.wipeKeyStore,s=e.connect;return r.a.createElement(S.a,{container:!0,justify:"center",alignItems:"center",direction:"column",style:{height:"100%"}},r.a.createElement(I.a,{initialValues:{password:"",seed:""},onSubmit:function(e,n){var a=n.resetForm,r=n.setFieldError,s=e.password,l=e.seed;t(s,l).catch(function(e){r("password",e.message)}),a()}},function(e){var t=e.values,l=e.errors,c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return r.a.createElement("form",{onSubmit:o,style:Et},r.a.createElement(bt,null),Object(k.isNull)(n)&&r.a.createElement(F.a,{id:"seed",type:"text",name:"seed",rows:"4",multiline:!0,label:"Enter your 12 word mnemonic",variant:"outlined",fullWidth:!0,value:t.seed,onBlur:i,onChange:c}),r.a.createElement(F.a,{id:"password",type:"password",name:"password",label:Object(k.isNull)(n)?"Set your password":"Enter your password to login",variant:"outlined",fullWidth:!0,error:l.password,helperText:l.password,value:t.password,onBlur:i,onChange:c}),r.a.createElement(K.a,{size:"large",variant:"outlined",color:"primary",onClick:function(){return s()}},"USE A ONE TIME RANDOM ACCOUNT"),!Object(k.isNull)(n)&&r.a.createElement(K.a,{size:"large",variant:"outlined",color:"secondary",onClick:a},"RESET ACCOUNT"))}))},jt=function e(t,n){Object(c.a)(this,e),this.pubkey=t,this.username=n,this.online=!1,this.lastSeen=0},Ct=n(556),Ot=n.n(Ct),kt=new(function(){function e(t){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"set",value:function(e,t){localStorage.setItem(e,t)}}]),e}())({configName:"keyManagement",defaults:{vault:null}}),xt=function(){var e=Object(g.a)(d.a.mark(function e(t,n){var a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Ot.a({}),e.next=3,a.createNewVaultAndRestore(t,n);case 3:return e.sent,r=a.store.getState(),Mt(JSON.stringify(r)),e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),St=function(){var e=Object(g.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(It()),a=new Ot.a({initState:n}),e.next=4,a.submitPassword(t);case 4:return e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),It=function(){return kt.get("vault")},Mt=function(e){kt.set("vault",e)},Ut=function(){kt.set("vault",null)},At=(n(2700),n(557)),Nt={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0 30% 0 30%"},Tt=function(){return r.a.createElement("div",{className:"sweet-loading",style:Nt},r.a.createElement(At.BounceLoader,{sizeUnit:"px",size:150,color:"#4A90E2"}))},Dt=function(e){window.open(e,"_blank","nodeIntegration=no")},Bt=function(e){window.statusVerbose;window.addEventListener("message",function(t){window.statusVerbose&&console.log("message",t),t.source===window.parent&&window.statusVerbose&&console.log(t.data),t.data&&t.data.type&&"whisperMsg"===t.data.type&&e(t.data.msg)})},Ft={},Pt="mytest",Kt="ws://localhost:8546",Wt=new E.a,Jt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messages:Object(y.a)({},Pt,[]),users:{},channels:Object(y.a)({},Pt,{users:{}}),currentChannel:Pt,usersTyping:Object(y.a)({},Pt,[]),identity:{},loading:!1,keyStore:It()},n.connect=function(){var e=Object(g.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return n.setState({loading:!0}),Wt.connectToProvider(n.server.provider,null),e.abrupt("return",n.onConnect());case 4:n.keyringController.exportAccount(t).then(function(e){Wt.connect(Kt,"0x".concat(e))}).then(function(){n.onConnect()});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.onConnect=function(){var e=n.state.currentChannel;n.joinChannel(e),n.pingChannel(),n.createOnUserMessageHandler(),Bt(n.sendMessage),setTimeout(function(){n.getMyIdentities()},1500)},n.openBrowser=function(e){Dt(e)},n.pingChannel=function(e){var t=n.state.currentChannel;n.pingInterval=setInterval(function(){Wt.sendJsonMessage(e||t,{type:"ping"})},5e3)},n.setupKeyringController=function(){var e=Object(g.a)(d.a.mark(function e(t,a){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.keyStore){e.next=7;break}return e.next=4,xt(t,a);case 4:n.keyringController=e.sent,e.next=16;break;case 7:return e.prev=7,e.next=10,St(t);case 10:n.keyringController=e.sent,e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(7),e.t0;case 16:return n.setState({loading:!0}),e.next=19,n.keyringController.getAccounts();case 19:r=e.sent,n.connect(r[0]);case 21:case"end":return e.stop()}},e,this,[[7,13]])}));return function(t,n){return e.apply(this,arguments)}}(),n.wipeKeyStore=function(){Ut(),n.setState({keyStore:null})},n.setActiveChannel=function(e){n.setState({currentChannel:e})},n.joinConversation=function(e){var t=Object(v.a)(Object(v.a)(n)),a=t.joinChannel,r=t.addDirectMessage;rt(e)?r(e):a(e)},n.addDirectMessage=function(e){Wt.addContact(e,function(){n.addConversationEntry(e)})},n.addConversationEntry=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=n.state,r=a.channels,s=a.currentChannel;n.setState({currentChannel:t?e:s,channels:Object(h.a)({},r,Object(y.a)({},e,{users:{}}))})},n.joinChannel=function(e){Wt.joinChat(e,function(){n.addConversationEntry(e),console.log("joined channel ".concat(e)),Wt.onMessage(e,function(t,a){var r=JSON.parse(a.payload)[1][0];if("content/json"===JSON.parse(a.payload)[1][1])return n.handleProtocolMessages(e,a);var s={username:a.username,message:r,pubkey:a.data.sig,data:a};n.setState(function(t){var n=t.messages[e];return{messages:Object(h.a)({},t.messages,Object(y.a)({},e,n?[].concat(Object(p.a)(n),[s]):[s]))}})}),n.pingChannel(e)})},n.createOnUserMessageHandler=function(){Wt.onUserMessage(function(e,t){if(t){var a=JSON.parse(t.payload)[1][0],r=t.data.sig,s={username:t.username,message:a,data:t};n.setState(function(e){var n=e.messages[r];return{messages:Object(h.a)({},e.messages,Object(y.a)({},r,n?[].concat(Object(p.a)(n),[s]):[s])),channels:Object(h.a)({},e.channels,Object(y.a)({},r,{username:t.username,users:{}}))}})}})},n.sendMessage=function(e){var t=n.state.currentChannel;Wt.sendMessage(t,e)},n.addUserToChannel=function(e,t){var a=n.state.channels,r=Object(h.a)({},a[e]);r.users[t.pubkey]=t,n.setState({channels:Object(h.a)({},a,Object(y.a)({},e,r))})},n.getChannel=function(e){return n.state.channels.find(function(t){return t.name===e})},n.getMyIdentities=Object(g.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wt.getPublicKey();case 2:return t=e.sent,e.next=5,Wt.getUserName(t);case 5:a=e.sent,n.setState({identity:{publicKey:t,username:a},loading:!1});case 7:case"end":return e.stop()}},e,this)})),n.handleProtocolMessages=function(e,t){var a=n.state.identity.publicKey,r=JSON.parse(JSON.parse(t.payload)[1][0]),s=t.data.sig;if("ping"===r.type){var l=n.addOrUpdateUserKey(s,t.username);n.addUserToChannel(e,l)}"typing"===r.type&&s!==a&&n.setState(function(t){return{usersTyping:Object(h.a)({},t.usersTyping,Object(y.a)({},e,Object(y.a)({},s,(new Date).getTime())))}})},n.addOrUpdateUserKey=function(e,t){var a=new jt(e,t);return a.lastSeen=(new Date).getTime(),a.online=!0,n.setState(function(t){return{users:Object(h.a)({},t.users,Object(y.a)({},e,a))}}),a},n.typingEvent=function(){var e=n.state.currentChannel,t=(new Date).getTime();Ft[e]||(Ft[e]={lastEvent:0}),(0===Ft[e].lastEvent||t-Ft[e].lastEvent>3e3)&&(Ft[e].lastEvent=t,Wt.sendJsonMessage(e,{type:"typing"}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.connectMurMur(),this.ipfs=new O.a}},{key:"componentWillUnmount",value:function(){clearInterval(this.pingInterval),this.ipfs.shutdown()}},{key:"connectMurMur",value:function(){this.server=new j.a({protocols:["libp2p"],signalServers:["/dns4/104.248.64.24/tcp/9090/ws/p2p-webrtc-star"],bootnodes:[]}),this.server.start()}},{key:"render",value:function(){var e=this.state,t=e.messages,n=e.channels,s=e.currentChannel,l=e.users,c=e.usersTyping,i=e.identity,o=e.loading,u=e.keyStore,m=n[s].users,p=this.setActiveChannel,h=this.setupKeyringController,f=this.wipeKeyStore,d=this.connect,g=this.ipfs,y={setActiveChannel:p,currentChannel:s,users:l,channels:n};return r.a.createElement(De.Provider,{value:y},o?r.a.createElement(Tt,null):r.a.createElement(a.Fragment,null,i.publicKey?r.a.createElement("div",{style:{width:"100%",flexWrap:"nowrap",display:"flex",boxSizing:"border-box"}},r.a.createElement(S.a,{item:!0,xs:3},!Object(k.isNil)(n)&&r.a.createElement(gt,{channels:n,joinConversation:this.joinConversation})),r.a.createElement(S.a,{item:!0,xs:9},r.a.createElement(tt,{messages:t,sendMessage:this.sendMessage,currentChannel:s,usersTyping:c,typingEvent:this.typingEvent,channelUsers:m,allUsers:l,ipfs:g}))):r.a.createElement(wt,{connect:d,setupKeyringController:h,keyStore:u,wipeKeyStore:f})))}}]),t}(a.PureComponent),zt=(n(2697),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Jt,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},663:function(e,t){}},[[1027,2,1]]]);
//# sourceMappingURL=main.d51a40d3.chunk.js.map