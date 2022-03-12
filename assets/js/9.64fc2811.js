(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{537:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("做表格排序时，发现切换排序会时不时报错，一看参数传了null，然后就又开始找bug了....\n")]),t._v(" "),a("h2",{attrs:{id:"实现远程排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现远程排序"}},[t._v("#")]),t._v(" 实现远程排序")]),t._v(" "),a("p",[t._v("给要排序的列el-table-column上加上sortable属性，值为custom,同时el-table上监听sort-change事件。")]),t._v(" "),a("h2",{attrs:{id:"分析null出现的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析null出现的场景"}},[t._v("#")]),t._v(" 分析null出现的场景")]),t._v(" "),a("p",[t._v("触发排序的方式有两种，都可以出现排序规则为null的情况")]),t._v(" "),a("ol",[a("li",[t._v("点击表头触发")])]),t._v(" "),a("p",[t._v("点击表头触发排序时，排序规则会依次按照sort-orders设置的值的顺序排序，sort-orders默认为 ['ascending', 'descending', null]，点击某一列就会按照顺序依次，升序、降序、null，一般的业务需求都是默认降序的，这时我们可以把sort-orders设置为['descending','ascending']，就可以去掉点击表头出现的null")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/sort.png",alt:"sort-orders.png"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("点击表头旁边的小箭头触发")])]),t._v(" "),a("p",[t._v("点击小箭头触发时，向上的箭头表示升序，向下的箭头表示降序，但是他支持取消操作，再次点击箭头，可以把状态从排序状态变为null。\n找了半天文档，没看到解决办法（也有可能是我没发现），这里另辟蹊径。\n查看源码发现sort-change事件参数column中的order属性的值会作为class名放在表头上，控制排序箭头高亮。现在就可以通过控制order的值来去掉null的情况。测试过程中发现当手动给某一列的order赋值之后，再次点击其他列时，之前的列不会改变状态，我这里是先将全部的列都置为null状态，再将当前列置为sort-change中的状态。下面是具体的代码")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果取消排序,则直接给当前点击的列的order赋原来的值（this.order_by）")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcolumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取表格实例上所有列的数据columns")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" columns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns\n\t\tcolumns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把所有列的排序规则都置为 null")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\titem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给当前点击的列的排序规则赋值")]),t._v("\n\t\tcolumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prop\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重新请求数据")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"另外发现还可以实现下面功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另外发现还可以实现下面功能"}},[t._v("#")]),t._v(" 另外发现还可以实现下面功能")]),t._v(" "),a("ol",[a("li",[t._v("因为有class类名的变化，可以通过css将表头文字也改成高亮。")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-table th.ascending")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-table th.descending")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #00ff00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("可以做出多列排序\n发现手动给order赋值之后，点击其他列不会自动自动改变之前列状态，正好适合多列排序，这里就不写示例了。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);