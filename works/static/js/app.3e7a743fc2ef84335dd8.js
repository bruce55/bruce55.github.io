webpackJsonp([1],{"7Otq":function(t,e,r){t.exports=r.p+"static/img/logo.91febf0.png"},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("7+uW"),s=r("Dd8w"),n=r.n(s),a=r("c/SZ"),o=r("M4fF"),c=r.n(o),d=a.a({space:"8tn7sq3xv35n",accessToken:"61ec5a98e5e4978edbcb0659989500047151bcee347c2b0cfb2250ed8f4e2464"}),l={state:{projects:{},filteredProjects:{},project:{fields:{}},category:{},categories:[],projectsLoading:!1},getProjects:function(t){var e=this;this.state.projectsLoading=!0,d.getEntries(n()({content_type:"project",select:"fields.title,fields.thumb",order:"fields.rank,-fields.date"},t?{"fields.category.sys.contentType.sys.id":"category","fields.category.sys.id":t}:{})).then(c.a.debounce(function(t){l.state.projects=t.items,e.state.projectsLoading=!1},200))},getProject:function(t){l.state.project.fields={title:"Loading...",desc:"..."},d.getEntries({content_type:"project","sys.id":t}).then(function(t){l.state.project=t.items[0]})},getCategories:function(){d.getEntries({content_type:"category"}).then(function(t){l.state.categories=t.items})},filterByCategory:function(t){l.state.category=t,d.getEntries({content_type:"project","fields.category.sys.contentType.sys.id":"category","fields.category.sys.id":t.sys.id}).then(function(t){l.state.filteredProjects=t.items})},clearCategory:function(){l.state.category={}}},u={state:l.state,getProjects:function(t){l.getProjects(t)},getProject:function(t){l.getProject(t)},getCategories:function(){l.getCategories()},filterByCategory:function(t){l.filterByCategory(t)},clearCategory:function(){l.clearCategory()}},f={name:"workCategories",data:function(){return{shared:u}},created:function(){u.getCategories()},watch:{"shared.state.project.fields.category.sys.id":function(){this.$forceUpdate()}},methods:{isActive:function(t){if(this.$route.params.category===t&&t)return!0;if(this.$route.params.id&&this.shared.state.project.fields.category){if(this.shared.state.project.fields.category.sys.id===t)return!0}else if(!this.$route.params.category&&!t)return!0;return!1}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[t.shared.state.categories.length?r("li",{staticStyle:{"margin-bottom":"18px"}},[r("router-link",{class:{active:t.isActive()},attrs:{to:"/"}},[t._v("All")])],1):t._e(),t._v(" "),t._l(t.shared.state.categories,function(e){return r("li",{key:e.sys.id},[r("router-link",{class:{active:t.isActive(e.sys.id)},attrs:{to:"/category/"+e.sys.id}},[t._v("\n      "+t._s(e.fields.title)+"\n    ")])],1)})],2)},staticRenderFns:[]};var p={name:"App",components:{"work-categories":r("VU/8")(f,g,!1,function(t){r("Q0N5")},"data-v-0fda3a4c",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:{name:"workList"}}},[e("div",{attrs:{id:"logo"}},[e("img",{attrs:{src:r("7Otq"),alt:"LOGO"}})])]),this._v(" "),e("work-categories",{attrs:{id:"categories"}}),this._v(" "),e("div",{attrs:{id:"router-view-container"}},[e("router-view")],1)],1)},staticRenderFns:[]};var m=r("VU/8")(p,h,!1,function(t){r("ejq2")},null,null).exports,y=r("/ocq"),v={name:"workListEntry",props:["id","title","thumb"],computed:{thumbUrl:function(){return this.thumb.fields.file.url+"?fm=jpg&q=75&fit=fill&w="+Math.round(350*window.devicePixelRatio)+"&h="+Math.round(328*window.devicePixelRatio)}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"work-entry",attrs:{to:"/work/"+t.id}},[r("div",{staticClass:"work-thumb",style:t.thumb?{"background-image":"url("+t.thumbUrl+")"}:null}),t._v(" "),r("p",[t._v(t._s(t.title))])])},staticRenderFns:[]};var _={name:"workList",components:{"work-list-entry":r("VU/8")(v,w,!1,function(t){r("iBNO")},"data-v-48d7a64d",null).exports},data:function(){return{shared:u}},created:function(){u.getProjects(this.$route.params.category)},watch:{"$route.params.category":function(t){u.getProjects(t)}}},j={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.shared.state.projectsLoading?{opacity:0}:null,attrs:{id:"work-list-container"}},[r("div",{attrs:{id:"work-list"}},[t._l(t.shared.state.projects,function(t){return r("work-list-entry",{key:t.sys.id,attrs:{id:t.sys.id,title:t.fields.title,thumb:t.fields.thumb}})}),t._v(" "),t._l(t.shared.state.projects.length,function(t){return r("div",{key:"empty-"+t,staticClass:"empty-cells"})})],2),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.contentful.com/",rel:"nofollow",target:"“_blank”"}},[e("img",{staticStyle:{"max-width":"100px",width:"100%",position:"relative",left:"50%",transform:"translateX(-50%)",margin:"18px 0"},attrs:{src:"https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg",alt:"Powered by Contentful"}})])}]};var b=r("VU/8")(_,j,!1,function(t){r("swxD")},"data-v-b045f826",null).exports,k=r("EFqf"),P=new k.Renderer;P.image=function(t,e,r){var i=void 0;return i=".gif"===t.substr(-4)?'<img src="'+t+'" alt="'+r+'"':'<img src="'+t+"?fm=jpg&q=75&w="+Math.round(350*window.devicePixelRatio)+'" alt="'+r+'"',e&&(i+=' title="'+e+'"'),i='<a target="_blank" href="'+t+'">'+i+"/></a>"};var x={name:"workView",data:function(){return{shared:u}},created:function(){u.getProject(this.$route.params.id)},computed:{compiledMD:function(){return k(this.shared.state.project.fields.desc,{renderer:P})},getHeaderBg:function(){return"linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))"+(this.shared.state.project.fields.thumb?", url("+this.shared.state.project.fields.thumb.fields.file.url+"?fm=png&q=75&fit=fill&w="+Math.round(90*window.devicePixelRatio)+"&h="+Math.round(36*window.devicePixelRatio)+")":"")}}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"white-bg"}}),t._v(" "),r("div",{attrs:{id:"work-container"}},[r("header",[r("div",{staticClass:"bg",style:{"background-image":t.getHeaderBg}}),t._v(" "),r("h1",[t._v(t._s(t.shared.state.project.fields.title))])]),t._v(" "),r("article",{domProps:{innerHTML:t._s(t.compiledMD)}})])])},staticRenderFns:[]};var E=r("VU/8")(x,C,!1,function(t){r("gMUH")},"data-v-1dfb5f30",null).exports;i.a.use(y.a);var L=new y.a({routes:[{path:"/",name:"workList",component:b},{path:"/category/:category",name:"workListFiltered",component:b},{path:"/work/:id",name:"workView",component:E}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:L,components:{App:m},template:"<App/>"})},Q0N5:function(t,e){},ejq2:function(t,e){},gMUH:function(t,e){},iBNO:function(t,e){},swxD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3e7a743fc2ef84335dd8.js.map