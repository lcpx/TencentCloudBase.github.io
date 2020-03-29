(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{439:function(a,t,e){"use strict";e.r(t);var s=e(2),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"danger custom-block"},[e("h2",{attrs:{id:"当前文档已迁移到新的文档站点，此内容不再维护！"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前文档已迁移到新的文档站点，此内容不再维护！","aria-hidden":"true"}},[a._v("#")]),a._v(" 当前文档已迁移到新的"),e("a",{attrs:{href:"https://docs.cloudbase.net/cli/intro.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("文档站点"),e("OutboundLink")],1),a._v("，此内容不再维护！")])]),a._v(" "),e("h1",{attrs:{id:"登录方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 登录方式")]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("⚠️注意事项")]),a._v(" "),e("p",[a._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),a._v(" "),e("p",[a._v("当您需要使用云开发的身份验证服务时，您需要配置您想使用的登录方式。目前云开发支持自定义登录、微信公众平台、微信开放平台登录等多种登录方式。")]),a._v(" "),e("h2",{attrs:{id:"查看登录方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看登录方式")]),a._v(" "),e("p",[a._v("您可以使用下面的命令列出环境配置的登录方式列表，查看环境配置的登录方式，以及相关的状态。")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("cloudbase env:login:list\n")])])]),e("p",[a._v("您会得到类似于下面的输出")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("┌────────────────────────────┬──────────────┬─────────────────────┬────────┐\n│            Id              │   Platform   │     CreateTime      │ Status │\n├────────────────────────────┼──────────────┼─────────────────────┼────────┤\n│ be00aef4-2eb9-4413-a50d-xx │  微信开放平台  │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-07-11 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(":47:22 │  启用中 │\n├────────────────────────────┼──────────────┼─────────────────────┼────────┤\n│ 76a7070e-2177-4c6d-a4f2-xx │  微信公众平台  │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-06-21 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(":15:51 │  禁用中 │\n└────────────────────────────┴──────────────┴─────────────────────┴────────┘\n")])])]),e("h2",{attrs:{id:"新建登录方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 新建登录方式")]),a._v(" "),e("p",[a._v("您可以使用下面的命令新建登录方式：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("cloudbase env:login:config\n")])])]),e("p",[a._v("您需要选择配置的平台，登录方式状态，以及对应的 AppId 和 AppSecret，登录方式请选择启用。在添加方式时不会校验 AppId 和 AppSecret 的有效性，只有在请求时，AppId 和 AppSecret 才会被校验，所以请确保您添加的 AppId 和 AppSecret 是有效的。")]),a._v(" "),e("h2",{attrs:{id:"修改登录方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改登录方式")]),a._v(" "),e("p",[a._v("您也可以使用 "),e("code",[a._v("cloudbase env:login:config")]),a._v(" 修改已经配置的登录方式，如切换启用状态，修改 AppId 和 AppSecret。")])])}),[],!1,null,null,null);t.default=r.exports}}]);