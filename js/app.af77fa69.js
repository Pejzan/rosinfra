(function(t){function e(e){for(var i,c,o=e[0],r=e[1],l=e[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1106:function(t,e,n){t.exports=n.p+"img/arrow.fc27034e.svg"},"18d6":function(t,e,n){t.exports=n.p+"img/icon_project.cbb85ca2.svg"},"1ae4":function(t,e,n){t.exports=n.p+"img/logo.2a64522c.svg"},3654:function(t,e,n){"use strict";var i=n("caba"),a=n.n(i);a.a},"3cb6":function(t,e,n){t.exports=n.p+"img/icon_play_mini.2511601e.svg"},"4d01":function(t,e,n){"use strict";var i=n("6fbb"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.bgClass,attrs:{id:"app"}},[i("div",{staticClass:"app__wrapper"},[i("div",{staticClass:"app__header"},[i("img",{attrs:{src:n("1ae4")},on:{click:function(e){return t.goToHome()}}}),i("transition",{attrs:{name:"fade"}},[t.isVisible?i("div",{staticClass:"btn btn-primary btn-header",on:{click:function(e){return t.goToServices()}}},[t._v("Перейти к сервисам")]):t._e()])],1),i("div",{staticClass:"app__content",on:{click:function(e){return t.goToContents()}}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])])},s=[],c=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},t._l(t.items,(function(e,i){return n("div",{staticClass:"footer__item",class:{active:t.getActive(e.url)},on:{click:function(n){return t.goToPage(e.url)}}},[n("div",{staticClass:"footer__item__img"},[n("img",{attrs:{src:e.image}})]),n("div",{staticClass:"footer__item__text"},[t._v(t._s(e.title))]),n("div",{staticClass:"footer__active-line"})])})),0)}),o=[],r={name:"app-footer",data:function(){return{items:[{image:"".concat(n("b24b")),title:"О платформе",url:"about"},{image:"".concat(n("18d6")),title:"База проектов",url:"project"},{image:"".concat(n("716f")),title:"База партнеров",url:"partners"},{image:"".concat(n("e3fa")),title:"ГЧП-Академия",url:"academy"},{image:"".concat(n("da0c")),title:"Тренды и аналитика",url:"trends"},{image:"".concat(n("f5eb")),title:"Помощь экспертов",url:"help"},{image:"".concat(n("80dd")),title:"Новости",url:"news"}]}},computed:{},methods:{goToPage:function(t){this.$router.push({name:t})},getActive:function(t){return this.$route.name===t}}},l=r,u=(n("de5b"),n("2877")),d=Object(u["a"])(l,c,o,!1,null,"567570f2",null),p=d.exports,f={name:"App",data:function(){return{route:""}},components:{AppFooter:p},methods:{goToServices:function(){switch(this.$route.name){case"about":this.$router.push({name:"Contents"});break;case"project":window.open("https://rosinfra.ru/project","_blank");break;case"partners":window.open("https://rosinfra.ru/companies","_blank");break;case"academy":window.open("https://rosinfra.ru/academy","_blank");break;case"trends":window.open("https://rosinfra.ru/digest","_blank");break;case"help":window.open("https://rosinfra.ru/home/landing/experts","_blank");break;case"news":window.open("https://rosinfra.ru/news","_blank")}},goToContents:function(){if("Home"!==this.$route.name)return!1;this.$router.push({name:"Contents"})},goToHome:function(){this.$router.push({name:"Home"})}},computed:{bgClass:function(){return"Contents"===this.$route.name?"app-bg-contents":""},isVisible:function(){return this.$route.meta&&this.$route.meta.footer}}},v=f,_=(n("ee34"),n("b184"),Object(u["a"])(v,a,s,!1,null,null,null)),m=_.exports,b=n("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container container__home"},[i("div",{staticClass:"home"},[i("div",{staticClass:"home__tittle h1"},[t._v("Платформа «РОСИНФРА»")]),i("div",{staticClass:"home__subtittle h2"},[t._v("Комплексное цифровое решение для работы с инфраструктурными проектами")]),i("div",{staticClass:"btn__block"},[i("div",{staticClass:"btn btn-primary box-shadow",on:{click:t.goTo}},[t._v("Начать знакомство с сервисами")]),i("a",{staticClass:"btn btn-white",attrs:{href:"https://rosinfra.ru/",target:"_blank"},on:{click:function(e){return e.stopPropagation(),t.goToPlatform()}}},[i("img",{attrs:{src:n("e3db")}}),i("span",[t._v("Перейти на платформу")])])])]),i("div",{staticClass:"home__slider"},[i("hooper",{staticStyle:{height:"900px"},attrs:{vertical:!0,itemsToShow:3,shortDrag:!1,playSpeed:3e3,transition:1e3,autoPlay:!0,infiniteScroll:!0}},t._l(t.slider,(function(t,e){return i("slide",{key:e},[i("slide-items",{attrs:{field:t}})],1)})),1)],1),i("div",{staticClass:"home__slider slider-two"},[i("hooper",{staticStyle:{height:"900px"},attrs:{vertical:!0,itemsToSlide:-1,rtl:t.rtl,itemsToShow:3,playSpeed:3e3,transition:1e3,autoPlay:!0,infiniteScroll:!0}},t._l(t.slider2,(function(t,e){return i("slide",{key:e},[i("slide-items",{attrs:{field:t}})],1)})),1)],1)])},g=[],C=(n("6a2c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-container",on:{click:function(e){return t.goToItem(t.field.url)}}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.field.image}})]),n("div",{staticClass:"items-container__title"},[t._v(t._s(t.field.title))]),n("div",{staticClass:"items-container__subTitle"},[t._v(t._s(t.field.subTitle))])])}),w=[],y={name:"slide-items",props:["field"],methods:{goToItem:function(t){this.$router.push({name:t})}}},x=y,T=(n("b058"),Object(u["a"])(x,C,w,!1,null,"fff6b162",null)),$=T.exports,k=n("7e04"),S=(n("955f"),{name:"Home",data:function(){return{sliderSettings:{slidesToShow:3,slidesToScroll:1,autoplay:!0,cssEase:"ease",infinite:!0,autoplaySpeed:2e3,speed:2e3,lazyLoad:"progressive",useTransform:!0,useCSS:!0,arrows:!1,vertical:!0,verticalSwiping:!0,waitForAnimate:!0,swipeToSlide:!0},sliderSettings2:{slidesToShow:3,slidesToScroll:1,autoplay:!0,verticalReverse:!0,cssEase:"ease",infinite:!0,autoplaySpeed:2e3,speed:2e3,lazyLoad:"progressive",useTransform:!0,useCSS:!0,arrows:!1,vertical:!0,verticalSwiping:!0,waitForAnimate:!0,swipeToSlide:!0},slider:[{title:"База проектов",subTitle:"Крупнейшая база планируемых и реализуемых проектов",image:"".concat(n("18d6")),url:"project"},{title:"ГЧП-Академия",subTitle:"Непрерывное развитие профильных компетенций",image:"".concat(n("e3fa")),url:"academy"},{title:"Новости",subTitle:"Актуальные новости рынка ГЧП и мнения экспертов",image:"".concat(n("80dd")),url:"news"},{title:"Тренды и аналитика",subTitle:"Актуальные данные по рынку инфраструктуры и ГЧП",image:"".concat(n("da0c")),url:"trends"},{title:"Помощь экспертов",subTitle:"Онлайн-консультации по вопросам применения механизмов ГЧП",image:"".concat(n("f5eb")),url:"help"},{title:"База партнёров",subTitle:"Поиск партнеров на любом этапе подготовки и реализации проекта",image:"".concat(n("716f")),url:"partners"}],slider2:[{title:"Тренды и аналитика",subTitle:"Актуальные данные по рынку инфраструктуры и ГЧП",image:"".concat(n("da0c")),url:"trends"},{title:"База партнёров",subTitle:"Поиск партнеров на любом этапе подготовки и реализации проекта",image:"".concat(n("716f")),url:"partners"},{title:"База проектов",subTitle:"Крупнейшая база планируемых и реализуемых проектов",image:"".concat(n("18d6")),url:"project"},{title:"Помощь экспертов",subTitle:"Онлайн-консультации по вопросам применения механизмов ГЧП",image:"".concat(n("f5eb")),url:"help"},{title:"Новости",subTitle:"Актуальные новости рынка ГЧП и мнения экспертов",image:"".concat(n("80dd")),url:"news"},{title:"ГЧП-Академия",subTitle:"Непрерывное развитие профильных компетенций",image:"".concat(n("e3fa")),url:"academy"}]}},methods:{goToPlatform:function(){},goTo:function(){this.$router.push({name:"about"})}},components:{slideItems:$,Hooper:k["a"],Slide:k["b"]}}),j=S,O=(n("3654"),Object(u["a"])(j,h,g,!1,null,null,null)),E=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service__content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),n("div",{staticClass:"app__footer"},[n("app-footer")],1)],1)},A=[],B={name:"Services",components:{AppFooter:p}},D=B,H=Object(u["a"])(D,P,A,!1,null,"15de4cf0",null),F=H.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__tittle"},[t._v("Платформа «РОСИНФРА»")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Платформа «РОСИНФРА» – уникальное цифровое решение для выстраивания эффективного партнерства государства и бизнеса, направленного на увеличение количества и повышение качества инфраструктурных проектов.")])])}],z={methods:{play:function(t){window.$.fancybox.open({src:"".concat("#video"+t)})}}},J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{staticClass:"play-buttons fancybox",attrs:{"data-fancybox":"",href:"#video"+t.field.id}},[i("img",{attrs:{src:n("bcb6")}}),i("div",{staticClass:"video",staticStyle:{display:"none"}},[i("video",{attrs:{id:"video"+t.field.id,width:"100%","data-caption":"Caption#"+t.field.id}},[i("source",{attrs:{src:t.field.src,"data-caption":"Caption#"+t.field.id,type:"video/mp4"}})])])]),i("img",{attrs:{src:n("91af")}})])},L=[],V={name:"fancybox-component-simple",props:["field"]},N=V,R=Object(u["a"])(N,J,L,!1,null,null,null),q=R.exports,G={name:"About",components:{fancyBox:q},mixins:[z],data:function(){return{video:{src:"".concat(n("5740")),id:"_about"}}},methods:{}},K=G,Q=(n("e29a"),Object(u["a"])(K,M,I,!1,null,"0a9e7bf4",null)),U=Q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("База проектов")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Крупнейшая база планируемых и реализуемых проектов ГЧП со множеством параметров, документацией, экспертными комментариями и удобной навигацией.")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Более 5000 проектов с указанием более 350 параметров")]),n("li",[t._v("Планируемые к запуску проектные инициативы")]),n("li",[t._v("Объекты инфраструктуры, подходящие под ГЧП")]),n("li",[t._v("Информация об участниках и проектная документация")])])])])}],Y={mixins:[z],components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_projects"}}},name:"Projects"},Z=Y,tt=Object(u["a"])(Z,W,X,!1,null,"53916d0c",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("База партнёров")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Единое цифровое пространство для участников рынка инфраструктурных проектов с информацией о профиле деятельности, опыте реализации проектов, отраслевой специфике и территориальной привязке частных партнеров.")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Надежные партнеры на любой этап реализации проекта")]),n("li",[t._v("Самые востребованные услуги на рынке инфраструктуры и ГЧП")]),n("li",[t._v("Удобный интерфейс с системой фильтров для поиска")]),n("li",[t._v("Возможность подбора партнеров по индивидуальным запросам")])])])])}],at={name:"Partner",mixins:[z],components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_partner"}}}},st=at,ct=Object(u["a"])(st,nt,it,!1,null,"305c5733",null),ot=ct.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("ГЧП-Академия")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Профессиональное развитие и обмен опытом в сфере инфраструктуры и ГЧП с возможностью выстраивания индивидуальной траектории обучения в дистанционном и очном формате.")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Базовые и узкоотраслевые знания")]),n("li",[t._v("Эксперты-преподаватели с опытом реализации проектов ГЧП")]),n("li",[t._v("Программы обучения продолжительностью от нескольких часов до месяца")]),n("li",[t._v("Подготовка проектных команд в регионах на примере реальных проектов")]),n("li",[t._v("ГЧП-словарь – ключевые термины рынка ГЧП в интерактивном формате")])])])])}],ut={name:"Academy",components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_academy"}}},mixins:[z]},dt=ut,pt=Object(u["a"])(dt,rt,lt,!1,null,"1d312fe4",null),ft=pt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("Тренды и аналитика")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Агрегированная база знаний в сфере инвестиций в инфраструктуру с регулярно обновляемыми данными по рынку ГЧП и библиотекой уникальных аналитических материалов по тематике развития инфраструктуры в России и зарубежных странах.")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Интерактивная аналитика по рынку проектов ГЧП в России")]),n("li",[t._v("Сравнительный анализ инвестиций в инфраструктуру за рубежом")]),n("li",[t._v("Рейтинг субъектов Российской Федерации по уровню развития ГЧП")]),n("li",[t._v("Судебная практика и решения ФАС с оценкой влияния на рынок")]),n("li",[t._v("Самая большая библиотека в сфере ГЧП")])])])])}],mt={name:"Trends",mixins:[z],components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_trends"}}}},bt=mt,ht=Object(u["a"])(bt,vt,_t,!1,null,"07a43bc8",null),gt=ht.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("Помощь экспертов")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Привлечение профильных экспертов, обладающих практическим опытом в сфере ГЧП, к решению проблемных вопросов, возникающих при подготовке и реализации инфраструктурных проектов.")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Онлайн-консультации по ключевым вопросам подготовки проектов")]),n("li",[t._v("Блиц-оценка планируемых проектов с рекомендациями по доработке")]),n("li",[t._v("Экспертиза финансовой и юридической документации по проектам")]),n("li",[t._v("Экспертиза оценки сравнительного преимущества и бюджетной эффективности")])])])])}],yt={name:"Helps",mixins:[z],components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_helps"}}}},xt=yt,Tt=Object(u["a"])(xt,Ct,wt,!1,null,"a4d3d9f0",null),$t=Tt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-wrapper",on:{click:function(e){return e.preventDefault(),t.play(t.video.id)}}},[t._m(0),n("div",{staticClass:"content-wrapper__viedo"},[n("fancy-box",{attrs:{field:t.video}})],1)])])},St=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__descriptions"},[n("div",{staticClass:"content-wrapper__service"},[t._v("Сервис")]),n("div",{staticClass:"content-wrapper__tittle"},[t._v("Новости")]),n("div",{staticClass:"content-wrapper__subtittle"},[t._v("Актуальные новости рынка ГЧП и мнения экспертов")]),n("div",{staticClass:"content-wrapper__ul"},[n("ul",[n("li",[t._v("Подбор участников для структурирования и реализации проекта")]),n("li",[t._v("Возможность самостоятельно выбрать конкурентное предложение")]),n("li",[t._v("Безопасность и полная конфиденциальность")])])])])}],jt={name:"News",mixins:[z],components:{fancyBox:q},data:function(){return{video:{src:"".concat(n("5740")),id:"_news"}}}},Ot=jt,Et=Object(u["a"])(Ot,kt,St,!1,null,"93d82136",null),Pt=Et.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"container__collections"},[i("fancy-collections",{attrs:{field:t.items}})],1),i("div",{staticClass:"container__arrow"},[i("a",{staticClass:"btn btn-primary box-shadow",attrs:{href:"https://rosinfra.ru/",target:"_blank"}},[i("img",{attrs:{src:n("1106")}})]),i("span",[t._v("Перейти на платформу")])])])},Bt=[],Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fancy-container"},t._l(t.field,(function(e,a){return i("div",{key:a,staticClass:"fancy-container-item",class:e.flexClass},[i("a",{attrs:{"data-fancybox":"gallery",href:"#video"+e.id},on:{click:function(e){return t.addClassBody()}}},[i("div",{staticClass:"fancy-container-item__descriptions"},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"subtittle"},[t._v(t._s(e.subtitle))]),i("div",{staticClass:"play-icon"},[i("img",{attrs:{src:n("3cb6")}})])]),i("div",{staticClass:"fancy-container-item__img",class:e.class},[i("img",{attrs:{src:e.img}})]),i("div",{staticClass:"video",staticStyle:{display:"none"}},[i("video",{attrs:{id:"video"+e.id,"data-caption":"Caption#"+e.id}},[i("source",{attrs:{src:e.src,"data-caption":"Caption#"+e.id,type:"video/mp4"}})])])])])})),0)},Ht=[],Ft={name:"fancybox-component-collections",props:["field"],data:function(){return{}}},Mt=Ft,It=(n("4d01"),Object(u["a"])(Mt,Dt,Ht,!1,null,"15481f7e",null)),zt=It.exports,Jt={name:"Contents",data:function(){return{items:[{src:"".concat(n("5740")),id:"1",img:"".concat(n("9140")),title:"База проектов",subtitle:"Крупнейшая база планируемых и реализуемых инфраструктурных проектов",class:"mt",flexClass:""},{src:"".concat(n("5740")),id:"2",img:"".concat(n("f837")),title:"База партнёров",subtitle:"Поиск партнеров на любом этапе подготовки и реализации проекта",class:"mt",flexClass:""},{src:"".concat(n("5740")),id:"3",img:"".concat(n("da0c")),title:"Тренды и аналитика",subtitle:"Актуальные данные по рынку инфраструктуры и ГЧП",class:"",flexClass:"flex-width"},{src:"".concat(n("5740")),id:"4",img:"".concat(n("f5eb")),title:"Помощь экспертов",subtitle:"Онлайн-консультации по вопросам применения механизмов ГЧП",class:"",flexClass:"flex-width"},{src:"".concat(n("5740")),id:"5",img:"".concat(n("e3fa")),title:"ГЧП-Академия",subtitle:"Непрерывное развитие профильных компетенций",class:"",flexClass:"flex-width"},{src:"".concat(n("5740")),id:"6",img:"".concat(n("80dd")),title:"Новости",subtitle:"Актуальные новости рынка ГЧП и мнения экспертов",class:"",flexClass:"flex-width"}]}},methods:{goTo:function(){this.$router.push({name:"about"})}},components:{FancyCollections:zt}},Lt=Jt,Vt=Object(u["a"])(Lt,At,Bt,!1,null,"f71ac556",null),Nt=Vt.exports;i["default"].use(b["a"]);var Rt=[{path:"/",name:"Home",component:E,meta:{footer:!1}},{path:"/contents",name:"Contents",component:Nt,meta:{footer:!1}},{path:"/services",component:F,children:[{path:"/about",name:"about",component:U,meta:{footer:!0}},{path:"/project",name:"project",component:et,meta:{footer:!0}},{path:"/partners",name:"partners",component:ot,meta:{footer:!0}},{path:"/academy",name:"academy",component:ft,meta:{footer:!0}},{path:"/trends",name:"trends",component:gt,meta:{footer:!0}},{path:"/help",name:"help",component:$t,meta:{footer:!0}},{path:"/news",name:"news",component:Pt,meta:{footer:!0}}]}],qt=new b["a"]({routes:Rt}),Gt=qt,Kt=n("42ab"),Qt=n.n(Kt);i["default"].config.productionTip=!1,i["default"].use(Qt.a),new i["default"]({router:Gt,render:function(t){return t(m)}}).$mount("#app")},5740:function(t,e,n){t.exports=n.p+"media/video.6a729f2d.mp4"},"6fbb":function(t,e,n){},"716f":function(t,e,n){t.exports=n.p+"img/icon_partner.da64f0ad.svg"},"80dd":function(t,e,n){t.exports=n.p+"img/icon_news.3e283d4c.svg"},"8eac":function(t,e,n){},9140:function(t,e,n){t.exports=n.p+"img/fc_img_1.4624b56d.svg"},"91af":function(t,e,n){t.exports=n.p+"img/preview.2b8cb75d.svg"},9529:function(t,e,n){},b058:function(t,e,n){"use strict";var i=n("9529"),a=n.n(i);a.a},b184:function(t,e,n){"use strict";var i=n("fca8"),a=n.n(i);a.a},b24b:function(t,e,n){t.exports=n.p+"img/logo_footer.fc87bbee.svg"},bcb6:function(t,e,n){t.exports=n.p+"img/play_button.a0855f92.svg"},caba:function(t,e,n){},cd9d:function(t,e,n){},da0c:function(t,e,n){t.exports=n.p+"img/icon_trends.2b8e2a74.svg"},dbaa:function(t,e,n){},de5b:function(t,e,n){"use strict";var i=n("cd9d"),a=n.n(i);a.a},e29a:function(t,e,n){"use strict";var i=n("dbaa"),a=n.n(i);a.a},e3db:function(t,e,n){t.exports=n.p+"img/icon_platform.044df0c9.svg"},e3fa:function(t,e,n){t.exports=n.p+"img/icon_academy.daa7da89.svg"},ee34:function(t,e,n){"use strict";var i=n("8eac"),a=n.n(i);a.a},f5eb:function(t,e,n){t.exports=n.p+"img/icon_helps.c233c457.svg"},f837:function(t,e,n){t.exports=n.p+"img/fc_img_2.a2ec0a1b.svg"},fca8:function(t,e,n){}});
//# sourceMappingURL=app.af77fa69.js.map