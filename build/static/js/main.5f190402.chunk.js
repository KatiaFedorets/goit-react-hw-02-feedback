(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),o=n(6),s=n(7),d=n(8),l=n(10),b=n(9),j=n(3),u=n.n(j),h=n(0),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:u.a.section,children:[Object(h.jsx)("h2",{className:u.a.title,children:t}),n]})};v.defaultProps={title:" "};var O=v,f=n(4),p=n.n(f),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:p.a.ul,children:t.map((function(e){return Object(h.jsx)("li",{className:p.a.li,children:Object(h.jsx)("button",{type:"button",name:e,onClick:n,children:e},e)})}))})},k=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})};k.defaultProps={title:"No feedback given"};var g=k,m=function(e){var t=e.good,n=e.neutral,c=(e.bad,e.total),a=e.positivePercentage;return Object(h.jsx)("div",{children:0===c?Object(h.jsx)(g,{message:"No feedback given"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback: ",a," %"]}),Object(h.jsx)("div",{})]})})},P=(n(16),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage(),r=Object.keys(this.state);return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:r,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:Object(h.jsx)(m,{good:t,neutral:n,bad:c,total:a,positivePercentage:i})})]})}}]),n}(c.Component));r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},4:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.5f190402.chunk.js.map