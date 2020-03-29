(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{376:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("存储安全规则结合用户身份验证可以实现身份校验能力，开发者可以根据用户身份信息进行精准的资源访问控制。")]),t._v(" "),s("h2",{attrs:{id:"用户身份认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户身份认证","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户身份认证")]),t._v(" "),s("p",[t._v("经过身份认证的用户发起请求时，系统会使用用户唯一 id "),s("code",[t._v("uid")]),t._v(" 及用户登录方式 "),s("code",[t._v("loginType")]),t._v(" 填充 "),s("code",[t._v("auth")]),t._v(" 变量。当未经身份验证的用户发出请求时，"),s("code",[t._v("auth")]),t._v(" 变量值为 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("auth")]),t._v(" 变量，可以用以下常用方式来根据身份对文件访问进行控制：")]),t._v(" "),s("ul",[s("li",[t._v("公开：不判断 "),s("code",[t._v("auth")]),t._v(" 值。")]),t._v(" "),s("li",[t._v("只对已登录用户公开：检查 "),s("code",[t._v("auth")]),t._v(" 不为 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("li",[t._v("用户私有：检查 "),s("code",[t._v("auth.uid")]),t._v(" 是否等于资源 "),s("code",[t._v("openid")]),t._v("。")]),t._v(" "),s("li",[t._v("仅对某种特殊的登录方式进行判断，限制匿名登录用户访问，检查 "),s("code",[t._v("auth.loginType")]),t._v(" 不为 "),s("code",[t._v("ANONYMOUS")])])]),t._v(" "),s("h3",{attrs:{id:"公开"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公开","aria-hidden":"true"}},[t._v("#")]),t._v(" 公开")]),t._v(" "),s("p",[t._v("任何不考虑 "),s("code",[t._v("auth")]),t._v(" 的规则均可被视为 "),s("code",[t._v("public")]),t._v(" 规则，因为他不考虑用户的身份验证上下文，这些规则在呈现公开数据（静态资源内容）的场景下是很适用。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resource.openid != null"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"对登录的用户开放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对登录的用户开放","aria-hidden":"true"}},[t._v("#")]),t._v(" 对登录的用户开放")]),t._v(" "),s("p",[t._v("在某些情况下，你可能希望限制只有登录用户在可以访问用户数据。例如，登录用户才可以查看论坛中的讨论。由于所有未登录用户的 "),s("code",[t._v("auth")]),t._v(" 变量为 "),s("code",[t._v("null")]),t._v("，因此可以设置如下规则：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth != null"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"用户私有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户私有","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户私有")]),t._v(" "),s("p",[s("code",[t._v("auth")]),t._v(" 最常见的使用场景在为个人用户资源提供精细的访问控制，例如上传私人照片等。云存储文件中包含了文件所有者信息(用户唯一 id)，在规则中可以如此限制：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth.uid == resource.openid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"write"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth.uid == resource.openid"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"对等不方式进行验证，限制匿名登录用户访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对等不方式进行验证，限制匿名登录用户访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 对等不方式进行验证，限制匿名登录用户访问")]),t._v(" "),s("p",[t._v("在应用中可能希望对于不同登录方式的用户展现不同的内容，此时可以对 "),s("code",[t._v("auth.loginType")]),t._v(" 进行验证，其值在以下枚举中取：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("loginType")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("WECHAT-OPEN")]),t._v(" "),s("td",[t._v("微信开放平台")])]),t._v(" "),s("tr",[s("td",[t._v("WECHAT-PUBLIC")]),t._v(" "),s("td",[t._v("微信公众平台")])]),t._v(" "),s("tr",[s("td",[t._v("ANONYMOUS")]),t._v(" "),s("td",[t._v("匿名登录")])]),t._v(" "),s("tr",[s("td",[t._v("CUSTOM")]),t._v(" "),s("td",[t._v("自定义登录")])])])]),t._v(" "),s("p",[t._v("若希望对匿名登录的用户展示有限的内容，则可通过如下规则限制:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"auth.loginType !== 'ANONYMOUS'\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"完整示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 完整示例")]),t._v(" "),s("p",[t._v("综上，在一个相册应用中，希望所有登录用户都可以上传，浏览广场图片，不允许未登录用户访问，单可以使用匿名登录访问，匿名身份下只可以浏览，不可上传，则可以对存储设置如下规则。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth != null"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"write"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"auth.loginType != 'ANONYMOUS' && auth.openid == resource.openid\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);