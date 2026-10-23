## 只使用布局

```html{4}
<PuiTablePage>
    <template v-slot:tree> 树结构布局插槽 </template>
    <template v-slot:search> 查询插槽 结合 PuiSearch使用 </template>
    <template v-slot:table> 表格插槽，不要默认表格，只使用布局 </template>
    <template v-slot:tableOnly="{ tableData }"> </template>
</PuiTablePage>
```



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