(this["webpackJsonpstory-hub"]=this["webpackJsonpstory-hub"]||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(23),r=n.n(i),a=(n(58),n(59),n(42)),o=n(7),l=n(28),j=n(29),d=n(36),b=n(33),u=n(19),h=n(2),O=function(e){return Object(h.jsx)("div",{className:"question",children:e.children})},x=function(e){return Object(h.jsx)("div",{className:"title",children:e.children})},m=function(e){return Object(h.jsx)("div",{className:"logo",children:e.children})},f=function(e){return Object(h.jsx)("div",{className:"or-separator",children:Object(h.jsx)("p",{children:"or"})})},p=function(e){var t=e.isSubmitting,n=e.value,c=e.onClick,s=e.theme;return Object(h.jsx)("button",{onClick:function(){return c()},className:s,children:t?Object(h.jsx)("div",{className:"loadingSubmit"}):n})},v=function(e){return Object(h.jsx)(p,Object(u.a)(Object(u.a)({},e),{},{theme:"btn-primary"}))},g=function(e){return Object(h.jsx)(p,Object(u.a)(Object(u.a)({},e),{},{theme:"btn-secondary"}))},y=function(e){var t=e.isSelected;return Object(h.jsxs)("div",{className:"btn-select-wrapper",children:[Object(h.jsx)(p,Object(u.a)(Object(u.a)({},e),{},{theme:"btn-select"})),t?Object(h.jsx)("div",{className:"icon-select"}):null]})},N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.call(this)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"story-card",children:Object(h.jsxs)("div",{className:"wrapper",style:{backgroundImage:"url("+this.props.imgUrl+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(h.jsx)("div",{className:"overlay"}),Object(h.jsxs)("div",{className:"headlines",children:[Object(h.jsx)("p",{className:"subheadline",children:this.props.subheadline}),Object(h.jsx)("p",{className:"headline",children:this.props.headline})]})]})})}}]),n}(s.a.Component),k=n(16),w=n(88),C=n(89),S=n(84),F=n(46),B=Object(F.a)({palette:{primary:{main:"#222222"},secondary:{light:"#222222",main:"#222222",contrastText:"#222222"},contrastThreshold:3,tonalOffset:.2}});function E(){var e=c.useState(15),t=Object(k.a)(e,2),n=t[0],s=t[1];return Object(h.jsxs)(w.a,{sx:{width:"100%"},className:"slider-box",children:[Object(h.jsx)("div",{className:"label",children:Object(h.jsxs)(C.a,{id:"non-linear-slider",gutterBottom:!0,children:[n," Min"]})}),Object(h.jsx)("div",{className:"slider",children:Object(h.jsx)(S.a,{value:n,min:1,step:1,max:30,onChange:function(e,t){"number"===typeof t&&s(t)},"aria-labelledby":"non-linear-slider",color:"primary",theme:B})})]})}var T=n(87),P=n(85),V=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={step:"time",format:"best-experience"},e}return Object(j.a)(n,[{key:"changeView",value:function(e){this.setState({step:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"renderCurrentQuestion",value:function(){var e=this;switch(this.state.step){case"time":return Object(h.jsxs)(O,{children:[Object(h.jsx)(x,{children:Object(h.jsxs)("h1",{children:["How much ",Object(h.jsx)("span",{children:"time"})," do you have?"]})}),Object(h.jsx)(E,{}),Object(h.jsx)("div",{className:"sticky-bottom",children:Object(h.jsx)(v,{value:"Next",onClick:function(){return e.changeView("mood")}})})]});case"mood":return Object(h.jsxs)(O,{children:[Object(h.jsx)(x,{children:Object(h.jsxs)("h1",{children:["What do you ",Object(h.jsx)("span",{children:"like"})," right now?"]})}),Object(h.jsx)(y,{value:"Best experience",isSelected:"best-experience"===this.state.format,onClick:function(){return e.changeFormat("best-experience")}}),Object(h.jsx)(y,{value:"Only Videos",isSelected:"only-videos"===this.state.format,onClick:function(){return e.changeFormat("only-videos")}}),Object(h.jsx)(y,{value:"Only Audios",isSelected:"only-audios"===this.state.format,onClick:function(){return e.changeFormat("only-audios")}}),Object(h.jsx)("div",{className:"sticky-bottom",children:Object(h.jsx)(v,{value:"Next",onClick:function(){return e.changeView("story")}})})]});case"story":return Object(h.jsxs)(O,{children:[Object(h.jsx)(x,{children:Object(h.jsxs)("h1",{children:["Choose your ",Object(h.jsx)("span",{children:"story"})]})}),Object(h.jsx)(N,{headline:"Mit Satellitenaufnahmen die Probleme der Welt l\xf6sen",subheadline:"Google Earth Engine",imgUrl:"https://www.srf.ch/static/cms/images/1280ws/d7f593.webp"}),Object(h.jsx)(N,{headline:"Corona-Tests sollen kosten \u2013 Bundesrat gew\xe4hrt aber Schonfrist",subheadline:"Entscheid zum Covid-Zertifikat",imgUrl:"https://www.srf.ch/static/cms/images/1280ws/b8d245.webp"}),Object(h.jsx)(f,{}),Object(h.jsx)(g,{value:"Explore"}),Object(h.jsx)(g,{value:"Daily News"})]});default:return Object(h.jsx)("p",{children:"No step"})}}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(m,{}),Object(h.jsx)(T.a,{children:Object(h.jsx)(P.a,{timeout:400,classNames:"fade",exit:!1,children:this.renderCurrentQuestion()},this.state.step)})]})}}]),n}(s.a.Component),q=Object(o.g)(V),I=function(){return Object(h.jsx)(h.Fragment,{children:"asdf"})};var M=function(){return Object(h.jsx)(a.a,{children:Object(h.jsx)(o.b,{render:function(e){var t=e.location;return Object(h.jsxs)(o.d,{location:t,children:[Object(h.jsx)(o.b,{path:"/questions",component:q}),Object(h.jsx)(o.b,{path:"/article/:id",component:I}),Object(h.jsx)(o.a,{to:"/questions"})]})}})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.c4c14d11.chunk.js.map