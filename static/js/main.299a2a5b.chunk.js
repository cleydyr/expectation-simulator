(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a(157)},157:function(e,t,a){"use strict";a.r(t);var s=a(90),n=a.n(s),r=a(115),l=a.n(r),c=a(8),i=a.n(c),m=a(91),u=a.n(m),o=a(0),h=a.n(o),p=a(89),b=a.n(p),d=(a(154),a(92)),E=a(22),f=a(116),v=a.n(f);var g=({show:e,message:t})=>e&&h.a.createElement(i.a.FeedbackGroup,null,h.a.createElement(i.a.FeedbackItem,null,h.a.createElement(i.a.FeedbackIndicator,{spritemap:v.a,symbol:"exclamation-full"}),t)),S=a(15),y=a.n(S);function w(e){return Math.random()<e}class N{constructor(e,t,a){this.trial=(()=>{const e=[...new Array(this.sampleSize)].reduce(({s:e,f:t})=>{const a=w(e/(e+t));return{s:e-a,f:t-!a}},{s:this.successes,f:this.failures});return this.successes-e.s}),this.mean=(()=>this.sampleSize*this.successes/(this.successes+this.failures)),this.gen=y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.trial();case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}),this.successes=e,this.failures=t,this.sampleSize=a}}const I=({stateFn:e})=>{const t=Object(o.useState)({successes:30,failures:50,sampleSize:40}),a=Object(E.a)(t,2),s=a[0],n=a[1],r=e=>n(Object(d.a)(Object(d.a)({},s),{},{[e.target.id]:!e.target.value||Number(e.target.value)})),l=({successes:e,failures:t,sampleSize:a})=>a<e+t&&e>=0&&t>=0;Object(o.useEffect)(()=>{const t=s.successes,a=s.failures,n=s.sampleSize;l(s)&&e(new N(t,a,n))},[s]);const m=s.successes,u=s.failures,p=s.sampleSize;return h.a.createElement(i.a.Group,{className:!l(s)&&"has-error"},h.a.createElement("label",{htmlFor:"successes"},"Successes"),h.a.createElement(c.ClayInput,{id:"successes",placeholder:"Insert the number of successes here",type:"number",onChange:r,value:m,min:0}),h.a.createElement(g,{show:m<0,message:"Successes can't be negative"}),h.a.createElement("label",{htmlFor:"failures"},"Failures"),h.a.createElement(c.ClayInput,{id:"failures",placeholder:"Insert the number of failures here",type:"number",onChange:r,value:u,min:0}),h.a.createElement(g,{show:u<0,message:"Failures can't be negative"}),h.a.createElement("label",{htmlFor:"sampleSize"},"Sample size"),h.a.createElement(c.ClayInput,{id:"sampleSize",placeholder:"Insert the sample size here",type:"number",onChange:r,value:p,max:m+u,min:0}),h.a.createElement(g,{show:m>0&&u>0&&p>m+u,message:"Sample size can't be more than the sum of successes and failures!"}))};I.formName="Hypergeometric";var x=I;function F(e,t){return e.reduce((e,a,s)=>e+s*a/t,0)}class C{constructor(e,t){this.trial=(()=>[...new Array(this.sampleSize)].map(e=>w(this.p)).reduce((e,t)=>e+t,0)),this.mean=(()=>this.sampleSize*this.p),this.gen=y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.trial();case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}),this.p=e,this.sampleSize=t}}const z=e=>t=>e(Number(t.target.value)),O=({stateFn:e})=>{const t=Object(o.useState)(.5),a=Object(E.a)(t,2),s=a[0],n=a[1],r=Object(o.useState)(40),l=Object(E.a)(r,2),m=l[0],u=l[1],p=()=>s>=0&&s<=1&&m>=0;return Object(o.useEffect)(()=>{p()&&e(new C(s,m))},[s,m]),h.a.createElement(i.a.Group,{className:!p()&&"has-error"},h.a.createElement("label",{htmlFor:"p"},"p"),h.a.createElement(c.ClayInput,{id:"p",placeholder:"Insert the probability of success here",type:"number",step:"0.05",onChange:z(n),value:s,max:1,min:0}),h.a.createElement(g,{show:s<0||s>1,message:"The value of p must be between 0 and 1!"}),h.a.createElement("label",{htmlFor:"sampleSize"},"Sample size"),h.a.createElement(c.ClayInput,{id:"sampleSize",placeholder:"Insert the sample size here",type:"number",onChange:z(u),value:m}),h.a.createElement(g,{show:m<0,message:"Sample size can't be negative!"}))};O.formName="Binomial";var j=O;class k{constructor(e){this.trial=(()=>{for(var e=0;!w(this.p);)e++;return e}),this.mean=(()=>(1-this.p)/this.p),this.gen=y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.trial();case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}),this.p=e}}const T=e=>t=>e(Number(t.target.value)),A=({stateFn:e})=>{const t=Object(o.useState)(.5),a=Object(E.a)(t,2),s=a[0],n=a[1];return Object(o.useEffect)(()=>{s>0&&s<1&&e(new k(s))},[s]),h.a.createElement(i.a.Group,{className:(s<=0||s>1)&&"has-error"},h.a.createElement("label",{htmlFor:"p"},"p"),h.a.createElement(c.ClayInput,{id:"p",placeholder:"Insert the probability of success here",type:"number",step:"0.05",onChange:T(n),value:s,min:0,max:1}),h.a.createElement(g,{show:s<=0||s>1,message:"The value of p must be between 0 (exclusive) and 1!"}))};A.formName="Geometric";var G=A;class D{constructor(e,t){this.trial=(()=>{let e=0,t=0;for(;t<this.r;)w(this.p)?t++:e++;return e}),this.mean=(()=>this.r*(1-this.p)/this.p),this.gen=y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.trial();case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}),this.r=e,this.p=t}}const L=e=>t=>e(Number(t.target.value)),P=({stateFn:e})=>{const t=Object(o.useState)(30),a=Object(E.a)(t,2),s=a[0],n=a[1],r=Object(o.useState)(.5),l=Object(E.a)(r,2),m=l[0],u=l[1],p=(e,t)=>e>0&&e<1&&t>0;return Object(o.useEffect)(()=>{p(m,s)&&e(new D(s,m))},[s,m]),h.a.createElement(i.a.Group,{className:!p(m,s)&&"has-error"},h.a.createElement("label",{htmlFor:"successes"},"Successes"),h.a.createElement(c.ClayInput,{id:"successes",placeholder:"Insert the number of successes until stopping the trials here",type:"number",onChange:L(n),value:s,min:1}),h.a.createElement(g,{show:s<=0,message:"The number of successes must be positive!"}),h.a.createElement("label",{htmlFor:"p"},"p"),h.a.createElement(c.ClayInput,{id:"p",placeholder:"Insert the probability of success here",type:"number",step:"0.05",onChange:L(u),value:m,max:1,min:0}),h.a.createElement(g,{show:m<=0||m>1,message:"The value of p must be between 0 (exclusive) and 1!"}))};P.formName="Negative Binomial";const U=[x,j,G,P];class B extends h.a.Component{constructor(){super(),this.simulate=(()=>{const e=this.state,t=e.simulations,a=e.rv.gen();this.setState({loading:!0},()=>{const e=[...[...new Array(t)].map(e=>a.next().value).reduce((e,t)=>(e[t]=(e[t]||0)+1,e),[])].map(e=>e||0);this.setState({data:["count",...e],mean:F(e,t),loading:!1})})}),this.changeParameters=(e=>{this.setState({[e.target.id]:Number(e.target.value)})}),this.changeDistribution=(e=>{this.setState({distributionIndex:e})}),this.state={simulations:B.DEFAULT_SIMULATIONS,data:["count"],distributionIndex:0,loading:!1}}render(){const e=this.state,t=e.distributionIndex,a=e.simulations,s=e.rv,r=e.mean,i=e.data,m=U[t];return h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"sheet sheet-lg"},h.a.createElement("div",{className:"sheet-section"},h.a.createElement("h3",{className:"sheet-subtitle"},"Distribution"),h.a.createElement(u.a,{modern:!0},U.map((e,a)=>h.a.createElement(u.a.Item,{key:a,active:t===a,innerProps:{"aria-controls":"tabpanel-"+a},onClick:()=>{this.changeDistribution(a)}},e.formName)))),h.a.createElement("div",{className:"sheet-header"},h.a.createElement("div",{className:"sheet-title"},m.formName)),h.a.createElement("div",{className:"sheet-section"},h.a.createElement("h3",{className:"sheet-subtitle"},"Parameters"),h.a.createElement(m,{stateFn:e=>this.setState(t=>({rv:e}))})),h.a.createElement("label",{htmlFor:"simulations"},"Number of simulations"),h.a.createElement(c.ClayInput,{id:"simulations",placeholder:"Insert the number of simulations here",type:"number",onChange:this.changeParameters,value:a}),h.a.createElement("div",{className:"sheet-footer"},h.a.createElement("div",{className:"btn-group-item"},h.a.createElement(n.a,{onClick:this.resetFields,displayType:"secondary"},"Reset")),h.a.createElement("div",{className:"btn-group-item"},h.a.createElement(n.a,{onClick:this.simulate,displayType:"primary"},"Simulate")))),h.a.createElement("div",null,h.a.createElement("div",null,s&&h.a.createElement("span",null,h.a.createElement("strong",null,"Expected value: ")," ",s.mean())),h.a.createElement("div",null,h.a.createElement(h.a.Fragment,null,h.a.createElement("strong",null,"Simulation average: ")," ",r)),h.a.createElement("div",null,h.a.createElement(l.a,{data:{columns:[i],type:"bar"}}))))}}B.DEFAULT_SIMULATIONS=1e3;const M=document.getElementById("root");b.a.render(h.a.createElement(B,null),M)}},[[117,1,2]]]);
//# sourceMappingURL=main.299a2a5b.chunk.js.map