(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{374:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("云存储提供基于同的声明式安全模型，称为云存储安全规则，可让开发者快速轻松地保护自己的文件。")]),t._v(" "),e("h2",{attrs:{id:"了解规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 了解规则")]),t._v(" "),e("p",[t._v("云存储安全规则用于确定哪些人对存储桶中文件拥有读写权限，也可以用于验证文件元数据。规则基于 "),e("code",[t._v("json")]),t._v(" 结构，"),e("code",[t._v("key")]),t._v("为操作类型，"),e("code",[t._v("value")]),t._v(" 为 "),e("code",[t._v("boolean")]),t._v(" 或 表达式字符串，当 "),e("code",[t._v("boolean")]),t._v(" 或 表达式计算结果为 "),e("code",[t._v("true")]),t._v(" 是则表示通过允许访问，否则拒绝访问。例如：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认情况下，read / write 都为 false，拒绝来自客户端的访问。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// action value 可以为 true / false 值，代表 允许/拒绝 访问。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// action value 可以为自定义表达式，表达式的计算值决定 允许/拒绝 访问。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth != null"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth == null || auth.uid == resource.openid"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 匹配")]),t._v(" "),e("p",[t._v("存储安全规则对应存储桶，对存储桶中所有文件的访问生效。")]),t._v(" "),e("h2",{attrs:{id:"请求校验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求校验","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求校验")]),t._v(" "),e("p",[t._v("上传、下载、删除操作使用请求携带的 "),e("code",[t._v("auth")]),t._v(" 身份校验状态进行求值。")]),t._v(" "),e("h3",{attrs:{id:"请求变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求变量")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("变量名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("auth")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#auth"}},[t._v("Auth")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在用户登录后，提供 uid（用户的唯一 ID）和 loginType（登录类型）。如果用户未登录，则为 null。")])])])]),t._v(" "),e("h4",{attrs:{id:"auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth","aria-hidden":"true"}},[t._v("#")]),t._v(" Auth")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("loginType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("登录方式 公众平台登录，开放平台登录，自定义登录，匿名登录等等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("uid")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用户唯一 id，微信小程序的请求没有此值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("openid")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用户 openid，仅在微信登录方式下存在值")])])])]),t._v(" "),e("h2",{attrs:{id:"资源校验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源校验","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源校验")]),t._v(" "),e("p",[t._v("对规则进行校验是，可能还需要对正在上传/下载/修改或删除的文件元数据进行校验，这样可以创建功能强大的复杂规则来执行任务，例如允许上传包含特顶内容类型的文件。")]),t._v(" "),e("p",[t._v("存储安全规则通过 "),e("code",[t._v("resource")]),t._v(" 对象提供文件元数据，可以在 "),e("code",[t._v("read")]),t._v("，"),e("code",[t._v("write")]),t._v(" 时校验这些属性，确保正确的访问。")]),t._v(" "),e("h4",{attrs:{id:"resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("openid")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("文件私有归属标识，标记所有者 id")])])])]),t._v(" "),e("h2",{attrs:{id:"完整示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 完整示例")]),t._v(" "),e("p",[t._v("综上，您可以为图片存储解决方案创建完整的示例规则：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"write"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resource.openid == auth.uid"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);