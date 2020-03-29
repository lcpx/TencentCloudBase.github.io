(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{459:function(v,_,e){"use strict";e.r(_);var t=e(2),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("建立索引是保证数据库性能、保证用户体验的重要手段。我们应为所有需要成为查询条件的字段建立索引。建立索引的入口在控制台中，可分别对各个集合的字段添加索引。")]),v._v(" "),e("h3",{attrs:{id:"单字段索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单字段索引","aria-hidden":"true"}},[v._v("#")]),v._v(" 单字段索引")]),v._v(" "),e("p",[v._v('对需要作为查询条件筛选的字段，我们可以创建单字段索引。如果需要对嵌套字段进行索引，那么可以通过 "点表示法" 用点连接起嵌套字段的名称。比如我们需要对如下格式的记录中的 '),e("code",[v._v("color")]),v._v(" 字段进行索引时，可以用 "),e("code",[v._v("style.color")]),v._v(" 表示。")]),v._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[v._v('"_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[v._v('"style"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[v._v('"color"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('""')]),v._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])])]),e("p",[v._v("在设置单字段索引时，指定排序为升序或降序并没有关系。在需要对索引字段按排序查询时，数据库能够正确的对字段排序，无论索引设置为升序还是降序。")]),v._v(" "),e("h3",{attrs:{id:"组合索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合索引","aria-hidden":"true"}},[v._v("#")]),v._v(" 组合索引")]),v._v(" "),e("p",[v._v("组合索引即一个索引包含多个字段。当查询条件使用的字段包含在索引定义的所有字段或前缀字段里时，会命中索引，优化查询性能。索引前缀即组合索引的字段中定义的前 1 到多个字段，如有在 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(", "),e("code",[v._v("C")]),v._v(" 三个字段定义的组合索引 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(", "),e("code",[v._v("C")]),v._v("，那么 "),e("code",[v._v("A")]),v._v(" 和 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 都属于该索引的前缀。")]),v._v(" "),e("p",[v._v("组合索引具有以下特点：")]),v._v(" "),e("ol",[e("li",[e("p",[e("strong",[v._v("字段顺序决定索引效果")]),v._v("\n定义组合索引时，多个字段间的顺序不同是会有不同的索引效果的。比如对两个字段 "),e("code",[v._v("A")]),v._v(" 和 "),e("code",[v._v("B")]),v._v(" 进行索引，定义组合索引为 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 与定义组合索引为 "),e("code",[v._v("B")]),v._v(", "),e("code",[v._v("A")]),v._v(" 是不同的。当定义组合索引为 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 时，索引会先按 "),e("code",[v._v("A")]),v._v(" 字段排序再按 "),e("code",[v._v("B")]),v._v(" 字段排序。因此当组合索引设为 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 时，即使我们没有单独对字段 "),e("code",[v._v("A")]),v._v(" 设立索引，但对字段 "),e("code",[v._v("A")]),v._v(" 的查询可以命中 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 索引。需要注意的是，此时对字段 "),e("code",[v._v("B")]),v._v(" 的查询是无法命中 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 索引的，因为 "),e("code",[v._v("B")]),v._v(" 不属于索引 "),e("code",[v._v("A")]),v._v(", "),e("code",[v._v("B")]),v._v(" 的前缀之一。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("字段排序决定排序查询是否可以命中索引")]),v._v("\n对字段 "),e("code",[v._v("A")]),v._v(" 和 "),e("code",[v._v("B")]),v._v(" 设置以下索引：\n"),e("code",[v._v("A: 升序")]),v._v(" "),e("code",[v._v("B: 降序")])])])]),v._v(" "),e("p",[v._v("当您查询需要对 "),e("code",[v._v("A")]),v._v("， "),e("code",[v._v("B")]),v._v(" 进行排序时，可以指定排序结果为 "),e("code",[v._v("A")]),v._v(" 升序 "),e("code",[v._v("B")]),v._v(" 降序或 "),e("code",[v._v("A")]),v._v(" 降序 "),e("code",[v._v("B")]),v._v(" 升序，但不能指定为 "),e("code",[v._v("A")]),v._v(" 升序 "),e("code",[v._v("B")]),v._v(" 升序或 "),e("code",[v._v("A")]),v._v(" 降序 "),e("code",[v._v("B")]),v._v(" 降序。")])])}),[],!1,null,null,null);_.default=o.exports}}]);