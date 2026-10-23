## api方式使用

```html

<!-- 简单使用 -->
<PuiTablePage :api="axiosObject"  :columns="columns" /> 

<!-- 常规使用 -->
<PuiTablePage  :api="axiosObject" :apiParams="apiParams" :columns="columns" :optBtns="optBtns" @optBtnClick="optBtnClick" >
    <template v-slot:tree> 树结构布局插槽 </template>
    <template v-slot:search> 查询插槽 结合 PuiSearch使用 </template>
    <template v-slot:***> 单元格插槽，columns中声明*** </template>
</PuiTablePage>

<!-- 完整使用 -->
<PuiTablePage  :api="axiosObject" :apiParams="apiParams" :columns="columns" :optBtns="optBtns" apiResShim="res.data" :apiResSuccess="apiResSuccess" :pageShim="{ pageNo: 'currentPage', pageSize: 'size' }" 
    @select="onSelect" @select-all="onSelect" @optBtnClick="optBtnClick">
    <template v-slot:tree> 树结构布局插槽 </template>
    <template v-slot:search> 查询插槽 结合 PuiSearch使用 </template>
    <template v-slot:***> 单元格插槽，columns中声明*** </template>
</PuiTablePage>
```



## **通用配置**

| 属性       | 值           |   默认值     |      描述                   |
| ---------- | ----------- | ----------- | -------------------------- |
| hasPage | Boolean | true |是否需要分页逻辑 |
| optBtns | Array |  [] | 表格上方的权限按钮组 eg:[{opt:'add', permission:'use:add'}] |



## **tableData方式 （外部请求数据）**

| 属性    | 值类型     | 默认值     |     描述                    | 是否必传 |
| ------ | --------- | --------- | -------------------------- |------ |
| columns | Object-Array |    []   | 表格列声明的对象数组 | 是 |
| total | Number |  | 接口返回时的总条数, 只在传入tableData下有效 | 是 |
| hasPage | Boolean | true |是否需要分页逻辑 | 否 |


## **api 方式(内部请求数)**

| 属性       | 值           |   默认值     |      描述                   | 是否必传 |
| ---------- | ----------- | ----------- | -------------------------- | ------ |
| api | axios-Object | AxiosObject | axios接口对象,自动请求接口获取数据 | 是 |
| totalShim | String | 'res.data.total' | 接口返回时的总条数, 只在api模式下有效 | 否 |
| pageShim | Object |  `{ pageNo: null, pageSize: null }`  | 分页垫片，分页的参数名不是默认值时，自己声明分页参数名 | 否 |
| apiParams | Object |  | 接口请求的参数，可将puiSearch的值放入作为查询参数；不需要分页参数不需要传，内部有维护 【如果不希望初始化就调用接口，可默认api为空，在apiParams处理好后再给api赋值】 | 否 |
| apiResShim | String | 'res.data.list' | 表格数据使用 接口返回的那部分数据； 总条数模式使用res.data.total如不一致请联系开发者 | 否 |
| apiResSuccess | Funtion |  | 自己处理接口返回的数据，return list给内部的表格使用 | 否 |
| hasPage | Boolean | true |是否需要分页逻辑 | 否 |



## **事件** [`完整示例代码`](../index.md)

| 事件名  | 返回值     |     说明                    |
| ------ | --------- | -------------------------- |
| select |    []   | 选中的行，选择行时触发 |
| select-all |    []   | 选中的行，全选或取消权限时触发 |
| select-chage/selection-change/select-change |    []   | 选中的行，选中行改变时触发 |
| cell-click |    `{}`   | 单元格点击时触发 |
| optBtnClick |    `{'add', selectedRows}`   | 点击optBtns配置的按钮时触发, 返回按钮的操作类型、表格当前选中行 |



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
