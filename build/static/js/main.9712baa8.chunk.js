(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),o=n(7),s=n(8),l=n(9),d=n(12),b=n(11),j=n(4),u=n.n(j),h=n(0),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:u.a.section,children:[Object(h.jsx)("h2",{className:u.a.title,children:t}),n]})};v.defaultProps={title:"title"};var O=v,f=n(10),p=n.n(f),x=n(5),g=n.n(x),k=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:g.a.ul,children:t.map((function(e){return Object(h.jsx)("li",{className:g.a.li,children:Object(h.jsx)("button",{type:"button",name:e,onClick:n,children:e},p.a.generate())})}))})})},m=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})},F=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:e})})};F.defaultProps={title:"No feedback given"};var P=F,y=(n(26),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),i=Object.keys(this.state);return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:i,onLeaveFeedback:this.onLeaveFeedback})}),0===a?Object(h.jsx)(P,{message:"No feedback given"}):Object(h.jsx)(O,{title:"Statistics",children:Object(h.jsx)(m,{good:t,neutral:n,bad:c,total:a,positivePercentage:r})})]})}}]),n}(c.Component));i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},5:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.9712baa8.chunk.js.map