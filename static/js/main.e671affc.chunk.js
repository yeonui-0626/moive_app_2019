(this.webpackJsonpmoive_app_2019=this.webpackJsonpmoive_app_2019||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),d=s(19),u=s(18),v=s(17),h=s.n(v),p=(s(43),s(0));var b=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:n,alt:s,title:s}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:s}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(p.jsx)("p",{className:"movie__summary",children:a.slice(0,140)})]})]})},_=(s(45),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(p.jsxs)("div",{className:"movies",children:[s.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)})),";"]})})}}]),s}(n.a.Component));r.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e671affc.chunk.js.map