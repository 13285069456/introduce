webpackJsonp([1],{100:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1),n._v(" "),e("div",{attrs:{id:"foot"}},[e("ThankEditor",{ref:"thankEditor",attrs:{markdown:n.currentThankMarkdown,enableHtml:n.enableHtml}})],1)])},staticRenderFns:[]}},40:function(n,t){},42:function(n,t,e){e(90);var r=e(8)(e(49),e(99),"data-v-5cc2b9ba",null);n.exports=r.exports},43:function(n,t,e){e(89);var r=e(8)(e(50),e(98),"data-v-14782cee",null);n.exports=r.exports},44:function(n,t,e){e(91);var r=e(8)(e(47),e(100),"data-v-7d1b0870",null);n.exports=r.exports},45:function(n,t,e){e(88);var r=e(8)(e(48),e(97),"data-v-0d15076a",null);n.exports=r.exports},47:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),u=e.n(a),l=e(43),c=e.n(l),d=e(42),h=e.n(d),m=e(95),p=e.n(m),f=e(40);e.n(f);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a,ThankEditor:p.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 源码地址 https://github.com/sitexa/anires\n* 大家好，我是南方。\n* 我来写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,64,64);\n}\n#content{\n  height:70vh;\n  margin:0;\n}\n#foot{\n  height:29vh;\n  margin:0;\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 70vh;\n  background: rgb(20,20,20);\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(130,150,0); }\n.token.property{ color: rgb(190,140,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(40,160,150); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 70vh;\n  border: 1px solid;\n  background: rgb(200,200,200); color: #222;\n  overflow: auto;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}\n/* 开始写简历 */\n",'\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n',"/* 写封感谢信。\n * 感谢大家对我的关注。\n */\n.styleEditor{\n    width:50vw;height:70vh;\n}\n\n.resumeEditor{\n   width:50vw;height:70vh;\n}\n\n.thankEditor{\n  position: relative; left: 0; top: 0;\n  background: #E9D9BB;\n  color: #001C42;\n  overflow: auto;\n}\n\n.thankEditor {\n  width: 99vw; height: 45vh;\n  border: 1px solid #ccc;\n  font-size: .9em;\n}\n",'\n.thankEditor{\n  padding: .5em;  margin: .5em; margin-top:1em;\n}\n\n.thankEditor ul,.thankEditor ol{\n  list-style: none;\n}\n.thankEditor ul> li::before{\n  content: \'☞\'; color: red;\n  margin-right: .5em;\n}\n.thankEditor ol {\n  counter-reset: section;\n}\n.thankEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, "☞") " ";\n  margin-right: .5em;\n}\n\n.thankEditor{\n  width: 99vw; height: 45vh;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateX(-10deg) translateZ(-200px);\n          transform: rotateX(-10deg) translateZ(-200px);\n}\n\n'],currentMarkdown:"",currentThankMarkdown:"",fullMarkdown:"南方\n====\n\n坐标：湖南长沙。\n\n资深软件工程师，资深产品经理，高级项目经理。现为自由职业。\n\n技能\n====\n\n数据库设计\n----\n  - 结构化数据库设计\n  - noSQL设计\n\n后端开发\n----\n  - 用户管理\n  - 单点登录\n  - 第三方登录\n  - 权限管理\n  - 交易系统\n  - 支付系统\n  - 社区系统\n  - 博客系统\n  - 公众号开发\n  - 小程序开发\n  - API接口开发\n\n前端开发\n----\n  - Web前端开发\n  - 移动终端(Native App, Hybrid App)\n\n产品设计\n----\n  - 智慧旅游项目\n  - 运动健康云平台\n  - 社区支持农业O2O项目\n  - 省级环境监控平台\n  - 高速公路异地处罚系统\n  - 环保局办公自动化系统\n  - 保险公司数据迁移项目\n  - 啤酒厂供应链项目\n  - 货运代理系统\n  - 集装箱管理系统\n  - 滞期费管理项目\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n工作经历\n----\n\n1. 湖南融耀健康管理有限公司\n2. 湖南三英特旅游智能技术有限公司\n3. 合肥蓝盾科技有限公司\n4. 上海易保网络有限公司\n5. 厦门海环计算机软件有限公司\n\n教育经历\n----\n\n1. 华东理工大学 环境工程学士\n2. 厦门大学 系统工程硕士\n\n文章\n----\n\n* [故土难离（我的父亲母亲）](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [油腻腻的中年（小诗）](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [生命（老四们的蝼蚁人生）](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [大健康商业模式](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [社区社交商业模型](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n链接\n----\n\n* [GitHub](https://github.com/sitexa)\n* [技术博客](http://www.sitexa.org)\n* [南方时代](http://www.sitexa.net)\n* [神秘湘鄂西](http://www.sitexa.cn)\n* [我的简历故事(程序人生公众号文章)](https://mp.weixin.qq.com/s/5rsB956EPVm0FoFOe6xYTg)\n\n勾引方式\n----\n\n* 微信：xnpeng\n\n",thanksMarkdown:'\n鸣谢\n----\n\n* 这段时间，我有些诚煌诚恐。我的简历被很多人关注(49842），我码的那几篇文章也有很多人点击(20095），微信好友增加了2000多人。"程序人生"公众号文章（我的简历故事）阅读量超过十万+。\n* 有很多企业向我发出了面试邀请，有很多创业团队向我伸出了橄榄枝，一些朋友给我提出非常好的建议，还有很多同学希望跟我进行技术交流，甚至有些企业问我能否承接外包业务。\n* 于是，我受命下山，到了深圳、珠海、北京、天津等地，拜访了一些老板，结识了一些新朋友，见了一些同学和老同事，感触很多，收获很大。IT行业正在发生深刻的变化，新技术、新模式、新思维、新业态，层出不穷，各种探索，各种炒作，让人眼花缭乱。\n* 我对自己也有了一个新的认识。我逐渐发现，我不是去找一份工作，而是在寻找一些机会，一些志同道合的伙伴，一份激动人心的事业。很荣幸，已经有几个朋友跟我达成了意向，准备组建团队。\n* 到底做什么项目呢？我只能简单地说，社交+电商+区块链。肯定有人要说，这个题目太大了，是蹭热度。我不这样想。我以前对社交的思考中，一个重要的因素就是信任关系，而对电商的思考中，去中心化是一个核心考量。而区块链技术不正是解决信任机制和去中心化的利器么？\n* 在此，我欢迎有兴趣的朋友加入我们，尽快推进项目的实施。（微信：xnpeng）\n\n  '}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:return n.next=12,this.progressivelyShowThanks();case 12:return n.next=14,this.progressivelyShowStyle(3);case 14:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})},progressivelyShowThanks:function(){var n=this;return new o.a(function(t,e){var r=n.thanksMarkdown.length,o=n.interval;!function e(){if(n.currentThankMarkdown.length<r){n.currentThankMarkdown=n.thanksMarkdown.substring(0,n.currentThankMarkdown.length+1);n.currentThankMarkdown[n.currentThankMarkdown.length-1];"\n"===n.currentThankMarkdown[n.currentThankMarkdown.length-2]&&n.$refs.thankEditor&&n.$nextTick(function(){return n.$refs.thankEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},48:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),u=e.n(a),l=e(43),c=e.n(l),d=e(42),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n\n* 大家好，我是傅燕龙。\n* 我来写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n\n\n","\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n",'\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"傅燕龙\n====\n坐标：福建厦门。\n\n应届生，初级java软件开发工程师。\n\n技能\n====\n\n数据库\n----\n  - mySQL\n  - oracle\n\n后端开发\n----\n  - JSP\n  - servlet\n  - spring\n  - springmvc\n  - mybatis\n  - hibernate\n  - struts2\n  - dubbo\n  - mq\n  - quartz\n  - redis\n\n前端开发\n----\n  - css\n  - javascript\n  - jquery\n  - bootstrap\n  - layui\n  - velocity\n\n项目经验\n----\n  - 厦门地铁app购票后台管理\n  - 第三方票务后台管理\n  - 公交app后台管理\n  - 第三方接口编写\n\n\n\n工作经历\n====\n\n1. 厦门路桥信息股份有限公司\n\n教育经历\n====\n\n1. 福州大学阳光学院 软件工程\n\n\n勾引方式\n====\n\n* 微信：fuyanlong474741\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},49:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(41),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},50:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(92),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},51:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(41),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ThankEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},52:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(46),o=e(44),i=e.n(o),s=e(45),a=e.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},87:function(n,t){},88:function(n,t){},89:function(n,t){},90:function(n,t){},91:function(n,t){},95:function(n,t,e){e(87);var r=e(8)(e(51),e(96),"data-v-086502e7",null);n.exports=r.exports},96:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"thankEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},97:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},98:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},99:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[52]);
//# sourceMappingURL=app.7557118c5c60a716f5c5.js.map