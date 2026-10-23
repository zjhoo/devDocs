## tableData方式使用

<!-- [Home](/) 跳转到根部的 README.md
[foo](/foo/) 跳转到 foo 文件夹的 index.html
[foo heading](./#heading) 跳转到 foo/index.html 的特定标题位置
[bar - three](../bar/three.md) 具体文件可以使用 .md 结尾（推荐）
[bar - four](../bar/four.html) 也可以用 .html -->

```html
<!-- 简单使用 -->
<PuiTablePage :tableData="axiosObject"  :columns="columns" :hasPage="false" />

<!-- 常规使用 -->
<PuiTablePage :tableData="axiosObject" :total="100" :columns="columns" :optBtns="optBtns" @pageChange="pageChange" @pageSizeChange="sizeChange" @optBtnClick="optBtnClick">
    <template v-slot:tree> 树结构布局插槽 </template>
    <template v-slot:search> 查询插槽 结合 PuiSearch使用 </template>
    <template v-slot:***> 单元格插槽，columns中声明*** </template>
</PuiTablePage>

<!-- 完整使用 -->
<PuiTablePage :tableData="axiosObject" :total="100" :columns="columns" 
    @pageChange="pageChange" @pageSizeChange="sizeChange" @select="onSelect" @select-all="onSelect" @optBtnClick="optBtnClick">
    <template v-slot:tree> 树结构布局插槽 </template>
    <template v-slot:search> 查询插槽 结合 PuiSearch使用 </template>
    <template v-slot:***> 单元格插槽，columns中声明*** </template>
</PuiTablePage>

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
| optBtns | Array |  [] | 表格上方的权限按钮组 eg:[{opt:'add', permission:'use:add'}] |



## **事件** [`完整示例代码`](../index.md)

| 事件名  | 返回值     |     说明                    |
| ------ | --------- | -------------------------- |
| *pageChange |    `{}`   | 分页改变是触发，只是tableData时需要使用 |
| *pageSizeChange |    `{}`   | 分页长度改变是触发，只是tableData时需要使用 |
| select |    []   | 选中的行，选择行时触发 |
| select-all |    []   | 选中的行，全选或取消权限时触发 |
| select-chage/selection-change/select-change |    []   | 选中的行，选中行改变时触发 |
| cell-click |    `{}`   | 单元格点击时触发 |
| *optBtnClick |    'add', selectedRows   | 点击optBtns配置的按钮时触发, 返回按钮的操作类型、表格当前选中行 |



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