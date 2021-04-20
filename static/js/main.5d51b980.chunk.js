(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(n,e,t){},106:function(n,e,t){},108:function(n,e,t){"use strict";t.r(e);var o,a=t(1),r=t.n(a),i=t(32),c=t.n(i),s=(t(95),t(10)),l=t(36),d=t.n(l),u=t(46),p=t(15),h=t(52),b=t(24),f=function(){var n=Object(u.a)(d.a.mark((function n(e){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.data){n.next=2;break}return n.abrupt("return",e.data.People);case 2:throw new Error("Network response was not ok.");case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(n){throw console.error("API call failed. "+n),n},x=t(35),m=t(84),g=t.n(m)()(o||(o=Object(p.a)(["\n    query People($pageNumber: String){\n    People(page: $pageNumber){\n      name\n      height\n      mass\n      gender\n      homeworld\n  \n      \n    }\n}\n"]))),O=function(n){return function(e){return e({type:b.b}),function(n){var e=n.toString();return x.a.query({query:g,variables:{pageNumber:e}}).then(f).catch(j)}(n).then((function(n){e(function(n){return{type:b.c,people:n}}(n))})).catch((function(n){throw e(function(n){return{type:b.a,error:n}}(n)),n}))}},v=t(28),y=t(22),w=(t(104),t(4));function k(){return Object(w.jsx)("div",{className:"loader",children:"Loading..."})}var C,N=t(90),P=t(49),S=t(50),E=t(54),z=t(53),T=y.a.div(C||(C=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity linear 0.15s;\n  z-index: 2000;\n  width: ","px;\n  margin: 40px auto;\n  &.fade-in {\n    opacity: 1;\n    transition: opacity linear 0.15s;\n  }\n  &.fade-out {\n    opacity: 0;\n    transition: opacity linear 0.15s;\n  }\n  .background {\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    z-index: 1040;\n    display: block;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    outline: 0;\n  }\n  .box-dialog {\n    z-index: 1050;\n    width: 100%;\n    background-color: #fefefe;\n    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n    .box-content {\n      padding: 24px;\n      width: 100%;\n    }\n    .box-header {\n      height: 48px;\n      padding: 8px 24px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-bottom: 1px solid #c7c7c7;\n      .box-title {\n        font-size: 24px;\n        font-weight: 400;\n        margin: 0 0 0 0;\n      }\n      .x-close {\n        font-size: 35px;\n        line-height: 35px;\n        font-weight: 400;\n        text-shadow: none;\n        color: black;\n        cursor: pointer;\n        &:hover {\n          opacity: 0.5;\n        }\n      }\n    }\n    .box-body {\n      font-size: 14px;\n      padding: 0px;\n      width: auto;\n      height: auto;\n    }\n    .box-footer {\n      height: 48px;\n      padding: 0px 24px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      border-top: 1px solid #c7c7c7;\n    }\n  }\n"])),(function(n){switch(n.modalSize){case"lg":return"800";default:return"480"}})),L=document.getElementById("modal-root"),I=function(n){Object(E.a)(t,n);var e=Object(z.a)(t);function t(){var n;Object(P.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={fadeType:null},n.background=r.a.createRef(),n.transitionEnd=function(e){"opacity"===e.propertyName&&"in"!==n.state.fadeType&&"out"===n.state.fadeType&&n.props.onClose()},n.onEscKeyDown=function(e){"Escape"===e.key&&n.setState({fadeType:"out"})},n.handleClick=function(e){e.preventDefault(),n.setState({fadeType:"out"})},n}return Object(S.a)(t,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("keydown",this.onEscKeyDown,!1),setTimeout((function(){return n.setState({fadeType:"in"})}),0)}},{key:"componentDidUpdate",value:function(n,e){!this.props.isOpen&&n.isOpen&&this.setState({fadeType:"out"})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscKeyDown,!1)}},{key:"render",value:function(){return c.a.createPortal(Object(w.jsxs)(T,{id:this.props.id,className:"wrapper ".concat("size-"+this.props.modalSize," fade-").concat(this.state.fadeType," ").concat(this.props.modalClass),role:"dialog",modalSize:this.props.modalSize,onTransitionEnd:this.transitionEnd,children:[Object(w.jsxs)("div",{className:"box-dialog",children:[Object(w.jsxs)("div",{className:"box-header",children:[Object(w.jsx)("h4",{className:"box-title",children:"Character Details"}),Object(w.jsx)("button",{onClick:this.handleClick,className:"close",children:"\xd7"})]}),Object(w.jsx)("div",{className:"box-content",children:this.props.children}),Object(w.jsx)("div",{className:"box-footer",children:Object(w.jsx)("button",{onClick:this.handleClick,className:"close",children:"Close"})})]}),Object(w.jsx)("div",{className:"background",onMouseDown:this.handleClick,ref:this.background})]}),L)}}]),t}(a.Component);I.defaultProps={id:"",modalClass:"",modalSize:"md"};var A,D,F,_,M,B,R=I,U=y.a.div(A||(A=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 250px;\n    height: 100px;\n    background-color: #c4b2a9;\n    border-radius: 4px;\n    padding: 1rem;\n    margin: 1rem;\n\n    &:hover {\n        opacity: 0.5;\n        cursor: pointer;\n    }\n"]))),q=y.a.h1(D||(D=Object(p.a)(["\n    font-size: 2rem;\n    font-weight: 300;\n    margin: 1rem;\n    color: white;\n"]))),K=(y.a.p(F||(F=Object(p.a)(["\n    color: white;\n"]))),function(n){var e=n.person,t=Object(a.useState)(!1),o=Object(N.a)(t,2),r=o[0],i=o[1],c=function(n){i(!r)};return Object(w.jsxs)("div",{onClick:c,children:[Object(w.jsx)(U,{children:Object(w.jsx)(q,{children:e.name})}),r&&Object(w.jsxs)(R,{id:"modal",isOpen:r,onClose:c,children:[Object(w.jsxs)("div",{className:"box-body",children:["Name: ",e.name]}),Object(w.jsxs)("div",{className:"box-body",children:["Height: ",e.height]}),Object(w.jsxs)("div",{className:"box-body",children:["Mass: ",e.mass]}),Object(w.jsxs)("div",{className:"box-body",children:["Gender: ",e.gender]}),"Homeworld: ",Object(w.jsx)("a",{href:e.homeworld,children:e.homeworld})]})]})}),G=y.a.h1(_||(_=Object(p.a)(["\n    font-size: 2rem;\n    font-weigth: 300;\n    margin: 1rem;\n    color: ",";\n    text-align: center;\n"])),(function(n){return n.main?"black":"white"})),H=y.a.div(M||(M=Object(p.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),J=function(n){var e=n.data,t=n.actions;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(G,{main:!0,children:[Object(w.jsx)("img",{src:"./sovTech.png",alt:"",width:"44",height:"43",onClick:function(){t.loadPeople(1)}}),"Star Wars Characters"]}),Object(w.jsx)(H,{children:void 0!==e.length?e.map((function(n){return Object(w.jsx)(K,{person:n})})):Object(w.jsx)(w.Fragment,{})})]})},W=(t(106),t(112)),$=function(n){Object(E.a)(t,n);var e=Object(z.a)(t);function t(){return Object(P.a)(this,t),e.apply(this,arguments)}return Object(S.a)(t,[{key:"render",value:function(){var n=[],e=this.props,t=e.clicked,o=e.count,a=e.updatePage,r=Number(t);console.log(this.props,"in the pagination",r);for(var i=1;i<Math.round(o/8);i++)n.push(Object(w.jsx)(W.a.Item,{onClick:a,active:i===r,children:i},i));return Object(w.jsx)(W.a,{className:"pagination",children:n})}}]),t}(a.Component),Q=(y.a.div(B||(B=Object(p.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),1);var V=Object(h.b)((function(n){return{people:n.people,loading:n.apiCallsInProgress>0}}),(function(n){return{actions:{loadPeople:Object(v.b)(O,n)}}}))((function(n){var e=n.actions,t=n.people,o=n.loading;Object(a.useEffect)((function(){void 0===t.length&&e.loadPeople(1)}),[]);var r=function(){var n=Object(u.a)(d.a.mark((function n(t){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Q=t.target.textContent,n.next=3,e.loadPeople(t.target.textContent);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:o?Object(w.jsx)(k,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J,{data:t,actions:e}),Object(w.jsx)($,{activeLabel:"(jjjjj)",count:82,updatePage:r,clicked:Q})]})})})),X=function(){return Object(w.jsx)("div",{children:"Oops!! Page not found."})};var Y=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(s.c,{children:[Object(w.jsx)(s.a,{exact:!0,path:"/",component:V}),Object(w.jsx)(s.a,{component:X})]})})},Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(e){var t=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),o(n),a(n),r(n),i(n)}))},nn=t(61),en=t(88),tn=t.n(en),on=t(40),an=tn()();c.a.render(Object(w.jsxs)(h.a,{store:an,children:[Object(w.jsx)(on.ApolloProvider,{client:x.a,children:Object(w.jsx)(nn.a,{children:Object(w.jsx)(Y,{})})}),","]}),document.getElementById("root")),Z()},110:function(n,e,t){"use strict";t.r(e);var o=t(28),a=t(24),r={people:[]},i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.c:return e.people;default:return n}},c=0,s=function(n){return"_SUCCESS"===n.substring(n.length-8)},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;return e.type===a.b?n+1:e.type===a.a||s(e.type)?n-1:n},d=Object(o.c)({people:i,apiCallsInProgress:l}),u=t(89),p=t(35);e.default=function(n){return Object(o.d)(d,n,Object(o.a)(p.a.middleware(),u.a))}},24:function(n,e,t){"use strict";t.d(e,"c",(function(){return o})),t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return r}));var o="LOAD_PEOPLE_SUCCESS",a="BEGIN_API_CALL",r="API_CALL_ERROR"},35:function(n,e,t){"use strict";var o=t(40);e.a=new o.ApolloClient({cache:new o.InMemoryCache,uri:"https://sovtechstarwars.herokuapp.com"})},88:function(n,e,t){n.exports=t(110)},95:function(n,e,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.5d51b980.chunk.js.map