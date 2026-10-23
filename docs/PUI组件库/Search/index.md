## <PuiSearch \> | 搜索表单


由于构建查询条件表单，目前支持 ElInput | ELSelect、ElDatePicker 的所有属性，以key:value方式使用，请移步[ElementUi官网](https://element.eleme.cn/#/zh-CN/component/input)
- 支持自动生成配置 不用对数据库字段


## **使用方式**
./index.vue
```html
<PuiSearch v-model="searchObj" :jsons="searchJsons" />

<PuiSearch v-model="searchObj" :jsons="searchJsons" @reset="onSearch" @search="onSearch" :labelWidth="100" />

```


## **配置**

- 通用配置
```js
// resource.js
const commonAttr ={
    ele: 'Input', // 或者自定义组件 markRaw(CustomComponent)
    key: 'processName',
    label: '查询项名称',
    type: 'text', // 'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file' | 'number' | 'radio' | date | datetime | daterange | datetimerange | numberVal(pui扩展-Input时值为number)
    // labelWidth: 90,
    placeholder: '请输入',
    span: 12, //布局 8/24
    // defaultVal: '', //默认值，自动给到searchObj; 有值时会自动执行一次onSearch
    // advanced: true, // 高级搜索项
    // slotName: '插槽名称',
    // slotNameExtend: '扩展内容插槽',
    onInput:(val)=>{} // 所有事件 需加'on'前缀，eg:change事件onChange(val)=>{}
    ...
    // class: '自定义样式类'
    // filterKey: ['key1', '匹配字段2'], //统一查询器, 使用v-model:filterKeys="hApi.filterKeys"接收，如果不满足在onSearch(null, { before:()=>{这里处理参数} })
}
```
- [生成配置工具](../配置生成工具/README.md)
- [完整配置](./jsons配置.md)


## **必要属性**

| 属性    | 值类型     | 默认值     |     描述                    |
| ------ | --------- | --------- | -------------------------- |
| value | Object |    `{}`   | 表单参数容器, 上文中的searchObj |
| jsons | Object-Array |    []   | 表单配置对象，上文中的searchJsons |
| advancedAll | Boolean |    false   | 高级搜索中是否展示全部 |
| labelWidth | Number, String, null |    null   | label的宽度，统一设置 |
btnStyle


## **可选属性**

| 属性       | 值类型         |   默认值   |      描述                |
| --------- | ---------- | ---------- | ----------------------- |
| labelWidth    | Number      |  90         |  表单项名称的宽度 单位px |
| inline    | Boolean     |  true       | 是否为行内表单           |



## **事件**  [`完整示例代码`](../README.md)

| 事件名    | 返回值         |   默认值   |      描述                |
| --------- | ---------- | ---------- | ----------------------- |
| submit    |    `{}`      |  formData  |  和v-model绑定的值一致，没有方法时不显示 `确定`   |
| reset     |    `{}`      |  formData  |  和v-model绑定的值一致，没有方法时不显示 `取消`   |
| subChange     |   (key, val, `{ dataAll, dataOther, dataOtherMap }`)      |    |  操作表单过程中, 获取表单的扩展值 如:下拉获取选中Object   |
| input[即将废弃，请使用subChange]     |        |    |  操作表单过程中, 获取表单的扩展值 如:下拉获取选中Object   |
| on***     |    any      |  any  |  支持element或者自定义组件的所有事件   |


## **插槽**

| 插槽名    |       描述                |
| --------- | ------------------------ |
| otherButton |  `确认` `取消` 按钮后的添加其它内容，如按钮  |


## **表单项插槽**
| 插槽名    |  返回值   |     描述              |
| --------- | -------  | --------------------- |
| slotName    |  `{data, key, val, props}` |  表单项插槽   |
| slotNameExtend | `{data, key, val, props}` | 表单项扩展插槽，可与slotName同时生效  |
