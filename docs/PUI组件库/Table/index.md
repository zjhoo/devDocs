## <PuiTable \>

基于 elTable 和 elPagination 开发的简单表格，灵活支持需要表格展示的位置；
- 分页内部维护
- 接口请求内部维护
- 支持不分页表格
- 单元格支持render函数和slot插槽
- 支持自动生成配置 不用对数据库字段


## **使用方式**
- [api 方式使用](./api方式)

- [tableData 方式使用](./tableData方式)
<!-- more -->


## **配置-以上2种方式通用**

- [生成配置工具](../配置生成工具/README.md)

- [行内按钮](../Del/README.md)

- [vue官网render函数使用](https://v2.cn.vuejs.org/v2/guide/render-function.html)

```js
/** 表格配置 */
import PuiDel from '@pui/Del'
const columns = (event) => {
  return [
    { type: 'selection', show: true},  // show 可做临时隐藏列
    { label: '普通字段1', prop: 'companyName' },
    { label: '普通字段2', prop: 'unitName' },
    {
      prop: 'opt', label: 'render函数单位格', render: (h, row) => {
        return [
          h('span',{style:{color:'#771cf3'}, on: { click: () => {event.onShowEdit(row)} }}, `render-${row.unitName}`),

          h(PuiDel,{ /** 等价模板中 <PuiDel :delApi='' :delParams='' @onSuccess='' /> */
            props:{
              delApi:()=>{}, //删除接口 axios对象
              delParams:{},//需要的数据 params中
            },
            on: {
              onSuccess: ()=>{ console.log(params) } //成功的回调
            }
          }),
        ]
      }
    },
    { slotName:'slotUser', label: '插槽单元格'}, 
    //实现插槽  <template v-slot:slotUser="{ row, index, prop }">{{row}}</template>
  ]
}
```


<!-- **必要属性**

| 属性    | 值类型     | 默认值     |     描述                    |
| ------ | --------- | --------- | -------------------------- |
| columns | Object-Array |    []   | 表格列声明的对象数组 |


**可选属性**

| 属性       | 值           |   默认值     |      描述                   |
| ---------- | ----------- | ----------- | -------------------------- |
| api | axios-Object |  | axios接口对象,自动请求接口获取数据 |
| apiParams | Object |  | 接口请求的参数，可将puiSearch的值放入作为查询参数；不需要分页参数不需要传，内部有维护 |
| pageShim | Object |  { pageNo: null, pageSize: null }  | 分页垫片，分页的参数名不是默认值时，自己声明分页参数名 |
| apiResShim | String | 'res.data.list' | 表格数据使用 接口返回的那部分数据； 总条数模式使用res.data.total如不一致请联系开发者 |
| apiResSuccess | Funtion |  | 自己处理接口返回的数据，return list给内部的表格使用 |
| hasPage | Boolean | true |是否需要分页逻辑 |
| tableData | Array |  null | 表格渲染的数据 | -->