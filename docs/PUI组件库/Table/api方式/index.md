## api方式使用

```html

<PuiTable  :api="axiosObject" :apiParams="{}" :columns="columns" />

<PuiTable  :api="axiosObject" :apiParams="{}" :columns="columns"  apiResShim="res.data" :hasPage="false" />

```


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
| pageShim | Object |  '{ pageNo: null, pageSize: null }'  | 分页垫片，分页的参数名不是默认值时，自己声明分页参数名 | 否 |
| apiParams | Object |  | 接口请求的参数，可将puiSearch的值放入作为查询参数；不需要分页参数不需要传，内部有维护；【如果不希望初始化就调用接口，可默认api为空，在apiParams处理好后再给api赋值】 | 否 |
| apiResShim | String | 'res.data.list' | 表格数据使用 接口返回的那部分数据； 总条数模式使用res.data.total如不一致请联系开发者 | 否 |
| apiResSuccess | Funtion |  | 自己处理接口返回的数据，return list给内部的表格使用 | 否 |
| hasPage | Boolean | true |是否需要分页逻辑 | 否 |


## **事件**

| 事件名  | 返回值     |     说明                    |
| ------ | --------- | -------------------------- |
| select |    [selection, row]   | 选中的行，选择行时触发  |
| select-all |    [selection]  | 选中的行，全选或取消权限时触发 |
| select-chage/selection-change/select-change |    [ selection ]  | 选中的行，选中行改变时触发 |
| cell-click |   '{ row, column, cell, event}'   | 单元格点击时触发 |