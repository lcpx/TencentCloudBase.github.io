(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{310:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190807_1565159329722_xl8xl1g3q5b.png/0",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("像每一滴酒回不了最初的葡萄，我回不到年少。爱情亦是如此，这就是写一篇小程序的初衷，用来记录我和她最美的恋爱。什么是最美恋爱？就是繁忙之余的一封书信，一起奋斗的目标，精彩的瞬间，旅游的足迹，和那无数的纪念日。")]),t._v(" "),s("p",[t._v("言归正传吧，先看看小程序给你的第一印象。（截图的是体验版本，上线版本有些功能是没有上的哦）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-f72b87df57571e3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-88c0729c04610300.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-5899628618562b45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-09aadf9f0d9dfca7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("页面比较简约，她很喜欢。")])]),t._v(" "),s("h1",{attrs:{id:"二、说说代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、说说代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、说说代码")]),t._v(" "),s("h2",{attrs:{id:"_1-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-框架","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.框架")]),t._v(" "),s("p",[t._v("小程序前端用的是taro框架写的，后台用的云开发（简直是个人开发者的福音）。\n贴一下总体架构图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-552bb6542d2b67b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("其他的架构，页面等等都很常见，我具体来说说云函数的调用吧，主要是对数据库的操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-43e6773fbbb1cb2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("云函数的入口（运用TcbRouter实现不同方法的调用）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-51e1cc0f7f70d42e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("小程序端是这样调用的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-8a018a5b2eab4989.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("调用方法的参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  let param = {\n      method:'get',\n      collection:'mail',\n      id:auth.user._id,\n      bindId:auth.user.bindId,\n      start:this.start,\n      limit:PAGE.LIMIT\n    };\n\n    let res = await commonApi.list(param);\n")])])]),s("h1",{attrs:{id:"三、说说功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、说说功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、说说功能")]),t._v(" "),s("p",[t._v("主要来说说邮箱这个功能吧，毕竟现在写信的越来越少了，这里很大程度的还原了写信的过程，可以挑选信封，挑选邮票，然后寄出你的思恋。\n我已经收到这么多信了 你们呢？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-aa5f6688fb9471d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4252197-8d490dae4b574c73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("还有个留言板功能，她说和微信聊天有什么区别（区别就在于没有websocket），这里就不赘述啦。")]),t._v(" "),s("h1",{attrs:{id:"四、结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、结语","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、结语")]),t._v(" "),s("p",[t._v("七夕已至，快和亲爱的人绑定最美恋爱关系吧！在这里，你们就是导演，记录美好爱情。\n特别说明：此小程序，是我亲手为女朋友写的，感谢她提供需求支持，七夕快乐。")]),t._v(" "),s("p",[t._v("❤️ 小彩蛋 ❤️")]),t._v(" "),s("p",[t._v("使用小程序·云开发按以下四步操作即可查看惊喜彩蛋~")]),t._v(" "),s("p",[t._v("在cloudfuntions文件夹下，点击右键新建一个云函数love，并部署上传，")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timelimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("使用开发者工具新增一个小程序页面love，在love.wxml里输入以下代码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("你问我爱你多少年？"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loveFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{loveurl}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{timelimit}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我爱你{{timelimit}}年"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("云开发祝所有程序员七夕脱单"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在love.js里输入：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timelimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loveurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tcb-1251009918.cos.ap-guangzhou.myqcloud.com/love.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loveFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'love'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          timelimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timelimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("在love.wxss里输入：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #FFC0CB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #FFC0CB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"源码链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/uloveits/loveing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/uloveits/loveing"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);