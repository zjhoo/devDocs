## tableData方式使用

```html

<PuiTable :tableData="tableData" :hasPage="false" :columns="columns" />

<PuiTable :tableData="tableData" :total="100" :columns="columns" @pageChange="pageChange" @sizeChange="sizeChange" />

```

## **必要属性**

| 属性    | 值类型     | 默认值     |     描述                    |
| ------ | --------- | --------- | -------------------------- |
| columns | Object-Array |    []   | 表格列声明的对象数组, 兼容了CustomTable的表头配置 |
| tableData | Array |  null | 表格渲染的数据 |
| total | Number |  null | 总条数，用于内部的分页展示 |



## **可选属性**

| 属性       | 值           |   默认值     |      描述                   |
| ---------- | ----------- | ----------- | -------------------------- |
| hasPage | Boolean | true |是否需要分页逻辑 |



## **事件**

| 事件名  | 返回值     |     说明                    |
| ------ | --------- | -------------------------- |
| *pageChange |    '{curNum, pageObj}'   | 分页改变是触发，只是tableData时需要使用 |
| *pageSizeChange |    '{size, pageObj}'   | 分页长度改变是触发，只是tableData时需要使用 |
| select |    [selection, row]   | 选中的行，选择行时触发  |
| select-all |    [selection]   | 选中的行，全选或取消权限时触发 |
| select-chage/selection-change/select-change |    [selection]   | 选中的行，选中行改变时触发 |
| cell-click |    '{ row, column, cell, event}'   | 单元格点击时触发 |