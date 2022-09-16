import{S as X,i as Y,s as Z,e as k,t as w,k as L,c as y,a as D,h as H,d as p,m as V,b as E,g as O,P as g,j as B,l as N,U as C,T as x,E as R}from"../chunks/index-08858dcd.js";import{a as ee}from"../chunks/utils-3952ae38.js";import{p as te}from"../chunks/marked.esm-6e366e9c.js";import{k as j}from"../chunks/kebabCase-d85c2c4d.js";import{s as le}from"../chunks/sortBy-6d8c0258.js";import{j as ae,k as re}from"../chunks/_baseMap-5b96295c.js";import"../chunks/get-dc35f30d.js";import"../chunks/_arrayReduce-379e7792.js";var se=Object.prototype,oe=se.hasOwnProperty,ie=ae(function(o,e,t){oe.call(o,t)?o[t].push(e):re(o,t,[e])}),ne=ie;function U(o,e,t){const l=o.slice();return l[1]=e[t][0],l[2]=e[t][1],l}function $(o,e,t){const l=o.slice();return l[5]=e[t].title,l[6]=e[t].uid,l[7]=e[t].footnote,l[8]=e[t].description,l[9]=e[t].abbreviation,l}function F(o,e,t){const l=o.slice();return l[1]=e[t][0],l}function z(o){let e,t,l=o[1]+"",n,h,c;return{c(){e=k("li"),t=k("a"),n=w(l),c=L(),this.h()},l(_){e=y(_,"LI",{});var i=D(e);t=y(i,"A",{href:!0,class:!0});var u=D(t);n=H(u,l),u.forEach(p),c=V(i),i.forEach(p),this.h()},h(){E(t,"href",h=`#${j(o[1])}`),E(t,"class","nav-headline-section")},m(_,i){O(_,e,i),g(e,t),g(t,n),g(e,c)},p(_,i){i&1&&l!==(l=_[1]+"")&&B(n,l),i&1&&h!==(h=`#${j(_[1])}`)&&E(t,"href",h)},d(_){_&&p(e)}}}function J(o){let e,t=o[9]+"",l,n;return{c(){e=k("abbr"),l=w(t),this.h()},l(h){e=y(h,"ABBR",{title:!0});var c=D(e);l=H(c,t),c.forEach(p),this.h()},h(){E(e,"title",n=o[5])},m(h,c){O(h,e,c),g(e,l)},p(h,c){c&1&&t!==(t=h[9]+"")&&B(l,t),c&1&&n!==(n=h[5])&&E(e,"title",n)},d(h){h&&p(e)}}}function K(o){let e,t,l,n=o[5]+"",h,c;return{c(){e=k("footer"),t=k("a"),l=w("More information about "),h=w(n),this.h()},l(_){e=y(_,"FOOTER",{});var i=D(e);t=y(i,"A",{href:!0,class:!0});var u=D(t);l=H(u,"More information about "),h=H(u,n),u.forEach(p),i.forEach(p),this.h()},h(){E(t,"href",c=o[7]),E(t,"class","link")},m(_,i){O(_,e,i),g(e,t),g(t,l),g(t,h)},p(_,i){i&1&&n!==(n=_[5]+"")&&B(h,n),i&1&&c!==(c=_[7])&&E(t,"href",c)},d(_){_&&p(e)}}}function Q(o){let e,t,l=o[5]+"",n,h,c,_=o[8]+"",i,u=o[9]&&J(o),v=o[7]&&K(o);return{c(){e=k("dt"),t=k("h3"),n=w(l),u&&u.c(),c=k("dd"),v&&v.c(),i=N(),this.h()},l(a){e=y(a,"DT",{id:!0,class:!0});var r=D(e);t=y(r,"H3",{});var d=D(t);n=H(d,l),d.forEach(p),u&&u.l(r),r.forEach(p),c=y(a,"DD",{});var m=D(c);m.forEach(p),v&&v.l(a),i=N(),this.h()},h(){E(e,"id",h=o[6]),E(e,"class","headline-paragraph")},m(a,r){O(a,e,r),g(e,t),g(t,n),u&&u.m(e,null),O(a,c,r),c.innerHTML=_,v&&v.m(a,r),O(a,i,r)},p(a,r){r&1&&l!==(l=a[5]+"")&&B(n,l),a[9]?u?u.p(a,r):(u=J(a),u.c(),u.m(e,null)):u&&(u.d(1),u=null),r&1&&h!==(h=a[6])&&E(e,"id",h),r&1&&_!==(_=a[8]+"")&&(c.innerHTML=_),a[7]?v?v.p(a,r):(v=K(a),v.c(),v.m(i.parentNode,i)):v&&(v.d(1),v=null)},d(a){a&&p(e),u&&u.d(),a&&p(c),v&&v.d(a),a&&p(i)}}}function W(o){let e,t,l,n=o[1]+"",h,c,_,i,u,v=o[2],a=[];for(let r=0;r<v.length;r+=1)a[r]=Q($(o,v,r));return{c(){e=k("section"),t=k("header"),l=k("h2"),h=w(n),_=L(),i=k("dl");for(let r=0;r<a.length;r+=1)a[r].c();u=L(),this.h()},l(r){e=y(r,"SECTION",{});var d=D(e);t=y(d,"HEADER",{});var m=D(t);l=y(m,"H2",{id:!0,class:!0});var b=D(l);h=H(b,n),b.forEach(p),m.forEach(p),_=V(d),i=y(d,"DL",{class:!0});var s=D(i);for(let A=0;A<a.length;A+=1)a[A].l(s);s.forEach(p),u=V(d),d.forEach(p),this.h()},h(){E(l,"id",c=j(o[1])),E(l,"class","headline-section"),E(i,"class","text")},m(r,d){O(r,e,d),g(e,t),g(t,l),g(l,h),g(e,_),g(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);g(e,u)},p(r,d){if(d&1&&n!==(n=r[1]+"")&&B(h,n),d&1&&c!==(c=j(r[1]))&&E(l,"id",c),d&1){v=r[2];let m;for(m=0;m<v.length;m+=1){const b=$(r,v,m);a[m]?a[m].p(b,d):(a[m]=Q(b),a[m].c(),a[m].m(i,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=v.length}},d(r){r&&p(e),C(a,r)}}}function fe(o){let e,t,l,n,h,c,_,i,u,v,a,r=o[0],d=[];for(let s=0;s<r.length;s+=1)d[s]=z(F(o,r,s));let m=o[0],b=[];for(let s=0;s<m.length;s+=1)b[s]=W(U(o,m,s));return{c(){e=L(),t=k("div"),l=k("div"),n=k("h1"),h=w("Glossary"),c=L(),_=k("nav"),i=k("ul");for(let s=0;s<d.length;s+=1)d[s].c();u=L(),v=k("div"),a=k("div");for(let s=0;s<b.length;s+=1)b[s].c();this.h()},l(s){x('[data-svelte="svelte-sflb1l"]',document.head).forEach(p),e=V(s),t=y(s,"DIV",{class:!0});var f=D(t);l=y(f,"DIV",{class:!0});var I=D(l);n=y(I,"H1",{class:!0});var G=D(n);h=H(G,"Glossary"),G.forEach(p),c=V(I),_=y(I,"NAV",{});var M=D(_);i=y(M,"UL",{class:!0});var P=D(i);for(let T=0;T<d.length;T+=1)d[T].l(P);P.forEach(p),M.forEach(p),I.forEach(p),f.forEach(p),u=V(s),v=y(s,"DIV",{class:!0});var S=D(v);a=y(S,"DIV",{class:!0});var q=D(a);for(let T=0;T<b.length;T+=1)b[T].l(q);q.forEach(p),S.forEach(p),this.h()},h(){document.title="Glossary",E(n,"class","title"),E(i,"class","nav-inpage subcategories"),E(l,"class","wrapper"),E(t,"class","glossary-header content-header container"),E(a,"class","wrapper content-layout"),E(v,"class","glossary-content container content-content")},m(s,A){O(s,e,A),O(s,t,A),g(t,l),g(l,n),g(n,h),g(l,c),g(l,_),g(_,i);for(let f=0;f<d.length;f+=1)d[f].m(i,null);O(s,u,A),O(s,v,A),g(v,a);for(let f=0;f<b.length;f+=1)b[f].m(a,null)},p(s,[A]){if(A&1){r=s[0];let f;for(f=0;f<r.length;f+=1){const I=F(s,r,f);d[f]?d[f].p(I,A):(d[f]=z(I),d[f].c(),d[f].m(i,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=r.length}if(A&1){m=s[0];let f;for(f=0;f<m.length;f+=1){const I=U(s,m,f);b[f]?b[f].p(I,A):(b[f]=W(I),b[f].c(),b[f].m(a,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=m.length}},i:R,o:R,d(s){s&&p(e),s&&p(t),C(d,s),s&&p(u),s&&p(v),C(b,s)}}}const ge=async({fetch:o})=>{let t=(await ee("glossaries",o)).map(l=>{const{Title:n,Category:h,Link:c,UID:_,Description:i,Abbreviation:u}=l.attributes;return{title:n,category:h||"Other",footnote:c,uid:_||j(n),description:te(i),abbreviation:u}});return t=le(t,"title"),{props:{entries:Object.entries(ne(t,"category"))}}},Ee=!1,ke=!1;function ce(o,e,t){let{entries:l}=e;return o.$$set=n=>{"entries"in n&&t(0,l=n.entries)},[l]}class ye extends X{constructor(e){super(),Y(this,e,ce,fe,Z,{entries:0})}}export{ye as default,Ee as hydrate,ge as load,ke as router};
