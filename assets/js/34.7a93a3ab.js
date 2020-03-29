(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{331:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"操作场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),s("p",[t._v("本文档主要指导 Web 端开发者如何开通云开发服务。")]),t._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),s("ul",[s("li",[t._v("已申请开通云开发白名单。")]),t._v(" "),s("li",[t._v("开发者已在微信平台注册自己的网站应用。")])]),t._v(" "),s("h2",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("p",[t._v("对于网站应用，开通云开发服务包括三个步骤：")]),t._v(" "),s("ol",[s("li",[t._v("创建环境：在腾讯云侧创建云开发资源环境。")]),t._v(" "),s("li",[t._v("添加应用：将云开发添加至您的网站应用中。")]),t._v(" "),s("li",[t._v("授权设置：微信登录授权；域名授权。")])]),t._v(" "),s("h3",{attrs:{id:"创建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建环境")]),t._v(" "),s("ol",[s("li",[t._v("登录腾讯云 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),s("OutboundLink")],1),t._v(" ，单击【新建环境】。\n"),s("img",{attrs:{src:"https://main.qcloudimg.com/raw/9c254547adc24fabe05cbb4183761370.png",alt:""}})]),t._v(" "),s("li",[t._v("根据流程指引填写信息，信息填写完成后，单击【确定】，即可创建环境。\n"),s("img",{attrs:{src:"https://main.qcloudimg.com/raw/1a13f409d82e4128f5a924b002df12f0.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("若您的环境是在腾讯云侧开通，则此环境目前仅支持开发网站应用；若您的环境是在微信侧创建，则此环境既可开发小程序也可开发网站应用，请您根据场景选择所需的方式。")])]),t._v(" "),s("h3",{attrs:{id:"添加应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加应用")]),t._v(" "),s("ol",[s("li",[t._v("登录腾讯云 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),s("OutboundLink")],1),t._v(" ，单击左侧菜单【概述】。")]),t._v(" "),s("li",[t._v("进入概述页面，单击【立即添加】。\n"),s("img",{attrs:{src:"https://main.qcloudimg.com/raw/70973d83a1401daf11220f70720ca61a.png",alt:""}})]),t._v(" "),s("li",[t._v("复制弹窗中初始化代码段，以便将云开发 SDK 添加至您的网站应用中。")])]),t._v(" "),s("p",[t._v("以下是一个初始化代码的示例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://imgcache.qq.com/qcloud/tcbjs/$version/tcb.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  tcb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example-envid'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境ID")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[t._v("代码中的 $version 为 SDK 版本号，example-envid 为环境 ID。")]),t._v(" "),s("li",[t._v("建议您从控制台的添加应用弹窗中单击复制，得到的代码中包含 SDK 实际路径和您当前的环境 ID。")])])]),t._v(" "),s("p",[t._v("以上代码段包含了用于配置云开发 JavaScript SDK 的初始化信息，以便于使用云开发的数据库、文件存储、云函数等基础功能。")]),t._v(" "),s("p",[t._v("如果您使用 Webpack 等前端打包工具，则只需直接引用您要使用的组件。示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先通过 npm install tcb-js-sdk --save 安装云开发的SDK")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tcb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tcb-js-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntcb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example-envid'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境ID")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("您需要将代码中的 example-envid 修改为您当前的环境 ID。")])]),t._v(" "),s("h3",{attrs:{id:"设置授权方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置授权方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置授权方式")]),t._v(" "),s("h4",{attrs:{id:"微信登录授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信登录授权","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信登录授权")]),t._v(" "),s("ol",[s("li",[t._v("登录腾讯云 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),s("OutboundLink")],1),t._v("，选择左侧菜单栏【用户管理】>【登录设置】，单击【设置】。对微信公众/开发平台进行微信平台授权。")])]),t._v(" "),s("ul",[s("li",[t._v("选择微信公众平台登录方式，可以让您的网页应用直接从公众号获取微信用户信息。")]),t._v(" "),s("li",[t._v("选择微信开发平台登录方式，可以在您的网站应用中接入微信登录功能。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("根据您的需求，单击相应的【设置】，在弹出的窗口中填写微信应用的 AppID 和对应的密钥（前往微信公众平台/开放平台获取），我们会妥善加密保存您的密钥。\n"),s("img",{attrs:{src:"https://main.qcloudimg.com/raw/889115e82cf0e6892b4edff3b4d161c6.png",alt:""}})])]),t._v(" "),s("h4",{attrs:{id:"域名授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名授权","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名授权")]),t._v(" "),s("ol",[s("li",[t._v("登录腾讯云 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),s("OutboundLink")],1),t._v("，选择左侧菜单栏【用户管理】>【Web 安全域名】，单击【添加域名】。")]),t._v(" "),s("li",[t._v("域名授权成功后，您可以使用云开发的身份验证功能来验证网页应用用户的身份。在此处配置过的域名下的页面才可以使用 SDK 发起对云开发服务的访问。\n"),s("img",{attrs:{src:"https://main.qcloudimg.com/raw/50fafef88f1151547b2f3632ebb3b4c8.png",alt:""}})])]),t._v(" "),s("p",[t._v("现在您的云开发已开通，您可以使用它快速开发网站应用。")])])}),[],!1,null,null,null);a.default=e.exports}}]);