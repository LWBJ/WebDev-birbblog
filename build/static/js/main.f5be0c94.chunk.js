(window.webpackJsonpbirbblog=window.webpackJsonpbirbblog||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),i=a.n(r),s=(a(36),a(6)),c=a(7),o=a(11),m=a(8),u=a(3),d=a(10),b=a(9),p=a.n(b),E=a(4);var v=function(e){for(var t=e.onFilter,a=[],n=Math.ceil(e.resultsCount/100),r=1;r<=n;r++)a.push(l.a.createElement("option",{value:r,label:r}));return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col p-3"},l.a.createElement(E.c,{initialValues:{speciesFilter:"",locationFilter:"",dateFilter:"",pageFilter:1},onSubmit:function(e,a){var n=a.setSubmitting;t(e.speciesFilter,e.locationFilter,e.dateFilter,e.pageFilter),n(!1)}},(function(e){var n=e.isSubmitting,r=e.values,i=e.handleChange,s=e.handleBlur,c=e.handleReset,o=e.dirty;return l.a.createElement(E.b,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"speciesFilter"},"Species"),l.a.createElement(E.a,{name:"speciesFilter",id:"speciesFilter",type:"text",className:"form-control"}))),l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"locationFilter"},"Location"),l.a.createElement(E.a,{name:"locationFilter",id:"locationFilter",type:"text",className:"form-control"}))),l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"dateFilter"},"Date"),l.a.createElement(E.a,{name:"dateFilter",id:"dateFilter",type:"date",className:"form-control"}))),l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pageFilter"},"Page"),l.a.createElement("select",{name:"pageFilter",className:"form-control",id:"pageFilter",value:r.pageFilter,onChange:i,onBlur:s},a)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-info"},"Filter"),l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t("","","",1),c()},disabled:!o||n},"Reset"))))}))))};var g=function(e){var t;return e.item.picture&&(t=l.a.createElement("img",{src:e.item.picture,alt:"bird sighting",className:"img-fluid"})),l.a.createElement("div",{id:e.item.pk,className:"col-md-6 my-2"},l.a.createElement("div",{className:"border border-secondary rounded p-5 h-100 content-item"},l.a.createElement("h2",null,e.item.species_text),t,l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Rarity:")," ",e.item.rarity),l.a.createElement("p",null,l.a.createElement("strong",null,"Location:")," ",e.item.location_text),l.a.createElement("p",null,l.a.createElement("strong",null,"Date:")," ",e.item.date),l.a.createElement("p",null,l.a.createElement("strong",null,"Comments:")," ",e.item.comments)))},h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={queryset:[],speciesFilter:"",locationFilter:"",dateFilter:"",pageFilter:1,resultsCount:0},a.refreshList=a.refreshList.bind(Object(u.a)(a)),a.filter=a.filter.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"refreshList",value:function(){var e=this,t="https://lwbjbirbblog.herokuapp.com/dataapis/birbsighting/?";t+="species="+this.state.speciesFilter+"&",t+="location="+this.state.locationFilter+"&",t+="date="+this.state.dateFilter+"&",t+="page="+this.state.pageFilter,p.a.get(t).then((function(t){return e.setState({queryset:t.data.results,resultsCount:t.data.count})}))}},{key:"filter",value:function(e,t,a,n){var l=this;this.setState({speciesFilter:e,locationFilter:t,dateFilter:a,pageFilter:n},(function(){return l.refreshList()}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){var e;return e=0===this.state.queryset.length?l.a.createElement("h3",null,"Nothing here!"):this.state.queryset.map((function(e){return l.a.createElement(g,{item:e})})),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{class:"navbar navbar-expand-lg mt-2"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#SightingContentFilterNavbar","aria-controls":"SightingContentFilterNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("button",{class:"btn btn-secondary"},"Expand Filter")),l.a.createElement("div",{class:"collapse navbar-collapse",id:"SightingContentFilterNavbar"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(v,{onFilter:this.filter,resultsCount:this.state.resultsCount})))),l.a.createElement("div",{className:"row justify-content-between"},e))}}]),t}(l.a.Component);var f=function(e){var t;e.item.picture&&(t=l.a.createElement("img",{src:e.item.picture,alt:"birb",className:"img-fluid"}));var a=(e.item.location_text+"").split(",").map((function(e){return l.a.createElement("li",null,e)})),n=(e.item.birbsighting_set_text+"").split(",").map((function(e){return l.a.createElement("li",null,e)}));return l.a.createElement("div",{id:e.item.pk,className:"col-md-6 my-2"},l.a.createElement("div",{className:"border border-secondary rounded p-5 h-100 content-item"},l.a.createElement("h2",null,e.item.name),t,l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Rarity:")," ",e.item.rarity_text),l.a.createElement("p",null,l.a.createElement("strong",null,"Locations:")),"  ",l.a.createElement("ul",null,a),l.a.createElement("p",null,l.a.createElement("strong",null,"Sightings:")),"  ",l.a.createElement("ul",null,n)))};var F=function(e){for(var t=e.onFilter,a=[],n=Math.ceil(e.resultsCount/100),r=1;r<=n;r++)a.push(l.a.createElement("option",{value:r,label:r}));return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col p-3"},l.a.createElement(E.c,{initialValues:{nameFilter:"",pageFilter:1},onSubmit:function(e,a){var n=a.setSubmitting;t(e.nameFilter,e.pageFilter),n(!1)}},(function(e){var n=e.isSubmitting,r=e.values,i=e.handleChange,s=e.handleBlur,c=e.handleReset,o=e.dirty;return l.a.createElement(E.b,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nameFilter"},"Name"),l.a.createElement(E.a,{name:"nameFilter",id:"nameFilter",type:"text",className:"form-control"}))),l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pageFilter"},"Page"),l.a.createElement("select",{name:"pageFilter",id:"pageFilter",value:r.pageFilter,onChange:i,onBlur:s,className:"form-control"},a)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-info"},"Filter"),l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t("",1),c()},disabled:!o||n},"Reset"))))}))))},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={queryset:[],nameFilter:"",pageFilter:1,resultsCount:0},a.refreshList=a.refreshList.bind(Object(u.a)(a)),a.filter=a.filter.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"refreshList",value:function(){var e=this,t="https://lwbjbirbblog.herokuapp.com/dataapis/species/?";t+="name="+this.state.nameFilter+"&",t+="page="+this.state.pageFilter,p.a.get(t).then((function(t){return e.setState({queryset:t.data.results,resultsCount:t.data.count})}))}},{key:"filter",value:function(e,t){var a=this;this.setState({nameFilter:e,pageFilter:t},(function(){a.refreshList()}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){var e;return e=0===this.state.queryset.length?l.a.createElement("h2",{className:"p-5 my-2"},"Nothing here!"):this.state.queryset.map((function(e){return l.a.createElement(f,{item:e})})),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{class:"navbar navbar-expand-lg mt-2"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#SpeciesContentFilterNavbar","aria-controls":"SpeciesContentFilterNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("button",{class:"btn btn-secondary"},"Expand Filter")),l.a.createElement("div",{class:"collapse navbar-collapse",id:"SpeciesContentFilterNavbar"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(F,{onFilter:this.filter,resultsCount:this.state.resultsCount})))),l.a.createElement("div",{className:"row justify-content-between"},e))}}]),t}(l.a.Component);var N=function(e){var t=(e.item.species_set_text+"").split(",").map((function(e){return l.a.createElement("li",null,e)})),a=(e.item.birbsighting_set_text+"").split(",").map((function(e){return l.a.createElement("li",null,e)}));return l.a.createElement("div",{id:e.item.pk,className:"col-md-6 my-2"},l.a.createElement("div",{className:"border border-secondary rounded p-5 h-100 content-item"},l.a.createElement("h2",null,e.item.name),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Species:"))," ",l.a.createElement("ul",null,t),l.a.createElement("p",null,l.a.createElement("strong",null,"Sightings:"))," ",l.a.createElement("ul",null,a)))},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={queryset:[],nameFilter:"",pageFilter:1,resultsCount:0},a.refreshList=a.refreshList.bind(Object(u.a)(a)),a.filter=a.filter.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"refreshList",value:function(){var e=this,t="https://lwbjbirbblog.herokuapp.com/dataapis/location/?";t+="name="+this.state.nameFilter+"&",t+="page="+this.state.pageFilter,p.a.get(t).then((function(t){return e.setState({queryset:t.data.results,resultsCount:t.data.count})}))}},{key:"filter",value:function(e,t){var a=this;this.setState({nameFilter:e,pageFilter:t},(function(){a.refreshList()}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){var e;return e=0===this.state.queryset.length?l.a.createElement("p",null,"Nothing here!"):this.state.queryset.map((function(e){return l.a.createElement(N,{item:e})})),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{class:"navbar navbar-expand-lg mt-2"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#LocationContentFilterNavbar","aria-controls":"LocationContentFilterNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("button",{class:"btn btn-secondary"},"Expand Filter")),l.a.createElement("div",{class:"collapse navbar-collapse",id:"LocationContentFilterNavbar"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(F,{onFilter:this.filter,resultsCount:this.state.resultsCount})))),l.a.createElement("div",{className:"row justify-content-between"},e))}}]),t}(l.a.Component);var S=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link active tabbo",id:"SightingContentDisplay-tab","data-toggle":"tab",href:"#SightingContentDisplay",role:"tab","aria-controls":"SightingContentDisplay","aria-selected":"true"},"Sightings")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link tabbo",id:"SpeciesContentDisplay-tab","data-toggle":"tab",href:"#SpeciesContentDisplay",role:"tab","aria-controls":"SpeciesContentDisplay","aria-selected":"false"},"Species")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link tabbo",id:"LocationContentDisplay-tab","data-toggle":"tab",href:"#LocationContentDisplay",role:"tab","aria-controls":"LocationContentDisplay","aria-selected":"false"},"Locations"))),l.a.createElement("div",{class:"tab-content",id:"myTabContent"},l.a.createElement("div",{class:"tab-pane fade show active",id:"SightingContentDisplay",role:"tabpanel","aria-labelledby":"SightingContentDisplay-tab"},l.a.createElement(h,null)),l.a.createElement("div",{class:"tab-pane fade",id:"SpeciesContentDisplay",role:"tabpanel","aria-labelledby":"SpeciesContentDisplay-tab"},l.a.createElement(y,null)),l.a.createElement("div",{class:"tab-pane fade",id:"LocationContentDisplay",role:"tabpanel","aria-labelledby":"LocationContentDisplay-tab"},l.a.createElement(C,null))))))};var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"container-fluid border-light mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col p-5"},l.a.createElement("h1",{className:"text-center"},"LWBJ's Birb Blog")))),l.a.createElement(S,null),l.a.createElement("footer",{className:"container-fluid p-4 mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"By LWBJ")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f5be0c94.chunk.js.map