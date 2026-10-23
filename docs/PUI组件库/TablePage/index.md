## <PuiTablePage \>

基于 elTable 和 elPagination 开发的列表页，支持列表页布局，权限按钮配置等，配合PuiSearch、PuiForm、PuiTree实现对数据的常规操作 
- 页面布局支持
- 分页内部维护
- 接口请求内部维护
- 支持不分页表格
- 单元格支持render函数和slot插槽
- 支持自动生成配置 不用对数据库字段


##  **使用方式**
- [api 方式使用](./api方式)


- [tableData 方式使用](./tableData方式)


- [布局使用](./slot布局)
<!-- more -->


## **配置-以上3种方式通用**

- [生成配置工具](../配置生成工具/README.md)

- [行内按钮](../Del/README.md)

- [vue官网render函数使用](https://v2.cn.vuejs.org/v2/guide/render-function.html)

## 表格配置
```js
/** 表格配置 */
import PuiDel from '@pui/Del'
const columns = (event) => {
  return [
    { 
      type: 'default' | 'selection' | 'index' | 'expand'  | 'indexAll', //类型 selection多选框 index索引 expand展开树 indexAll翻页连续索引(pui扩展) 
      selectable:(row) => [1, 2].includes(row.id) //禁用行选中
      show: false, // show 可做临时隐藏列
    }, 
    { 
      label: '普通字段-简单用法', 
      prop: 'companyName',
    },
    { 
      label: '普通字段较全面的用法', 
      prop: 'companyName',
      width: 100|'auto'|'100px', //列宽
      minWidth: 100|'auto'|'100px', //最小列宽
      align: 'center'|'left'|'right', //对齐方式
      sortable: true|'custom', //true前端排序； ‘custom’自定义排序-框架中已集成后端排序
      show: false, // show 可做临时隐藏列
    },
    {
      prop: 'opt', label: 'render函数单位格', render: (h, row) => {
        return [
          h(ElButton,{ link:true, type: 'primary', class:{'pui-button-line_edit':true}, onClick: () => {optBtnClick('edit', row)} }, '编辑'),
          h(ElButton,{ link:true, type: 'success', class:{'pui-button-line_view':true}, onClick: () => {optBtnClick('view', row)} }, '查看'),
          h(ElButton,{ link:true, type: 'danger', class:{'pui-button-line_del':true}, onClick: () => {onSubmit(row.id, 'del')} }, '删除'),

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
    { slotName:'slotUse', label: '插槽单元格'}, // 插槽  <template v-slot:slotUse="{ row }">{{row}}</template>
  ]
}
```

## 操作按钮
```js
/** 操作按钮权限 operate buttons */
export const optBtns =[
  {opt:'add', permission:'use:add'},
  {opt:'del', permission:'use:del'},
  {opt:'dels', permission: true},
  {opt:'', slotName:'optBtnSlot'},
  {opt:'自定义操作', name:'操作名称'},
  {opt:'自定义操作', name:'操作名称', type: 'primary'},
] 

```

## **必要属性**

| 属性    | 值类型     | 默认值     |     描述                    |
| ------ | --------- | --------- | -------------------------- |
| columns | Object-Array |    []   | 表格列声明的对象数组 |


## **可选属性**

| 属性       | 值           |   默认值     |      描述                   |
| ---------- | ----------- | ----------- | -------------------------- |
| api | axios-Object | null | axios接口对象,自动请求接口获取数据 |
| apiParams | Object | null | 接口请求的参数，可将puiSearch的值放入作为查询参数；不需要分页参数不需要传，内部有维护 |
| apiResShim | String | 'res.data.list' | 表格数据使用 接口返回的那部分数据； 总条数模式使用res.data.total如不一致请联系开发者 |
| apiResSuccess | Funtion |  | 自己处理接口返回的数据，return list给内部的表格使用 |
| pageShim | Object |  `{ pageNo: null, pageSize: null }`  | 分页垫片，分页的参数名不是默认值时，自己声明分页参数名 |
| pageSize | Number | 10 | 每页条数 |
| hasPage | Boolean | true |是否需要分页逻辑 |
| tableData | Array |  null | 表格渲染的数据 |
| optBtns | Array |  [] | 表格上方的权限按钮组 eg:[{opt:'add', permission:'use:add'}] |



## **事件** [`完整示例代码`](../index.md)

| 事件名  | 返回值     |     说明                    |
| ------ | --------- | -------------------------- |
| select |    []   | 选中的行，选择行时触发 |
| select-all |    []   | 选中的行，全选或取消权限时触发 |
| select-chage/selection-change/select-change |    []   | 选中的行，选中行改变时触发 |
| cell-click |    `{}`   | 单元格点击时触发 |
| pageChange |    `{}`   | 分页改变是触发，只是tableData时需要使用 |
| pageSizeChange |    `{}`   | 分页长度改变是触发，只是tableData时需要使用 |
| optBtnClick |    `{type, selectedRows, pageObj}`   | 点击optBtns配置的按钮时触发; 返回 type按钮的操作类型、selectedRows表格当前选中行，pageObj当前分页对象 |



## **插槽**

| 插槽名     |  参数   |       描述                |
| --------- | -------| ----------------------- |
| tree    |  null  |  左侧树插槽    |
| topLayout |  null   | 顶部插槽 |
| tableTitle |  null   | table标题插槽 |
| search |  null   | 顶部区域插槽，常用于`PuiSearch` 构建搜索条件 |
| table  |  null   | 表格区域插槽，用于 只使用布局，不用内部的表格 |
| tableOnly |  `{tableData， pageParams}`   | 表格插槽，会保留分页，只替换表格区域 |
| 单元格插槽 |  `{row, index, prop}` |columns配置中声明 `slotName:插槽名称`  |

