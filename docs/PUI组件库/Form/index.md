## <PuiForm \> | 表单

基于 elForm 开发的表单，灵活支持表单功能开发；
用于构建表单或者表单项分组，目前支持 ElInput、ELSelect、ElDatePicker 的所有属性，以key:value方式使用，请移步[ElementUi官网](https://element.eleme.cn/#/zh-CN/component/input)
- 支持自动生成配置 不用对数据库字段
- 支持验证规则
- 支持插槽
- 支持布局
- 支持下拉字典配置
- 支持表单项分组方式使用


::: warning
强制要求：实现 @reset方法才显示 取消按钮；实现@submit方法才显示 确定按钮
:::

## **使用方式**
- [独立表单](./独立表单)
```html
<PuiForm v-model="formData" :jsons="formJsons" :status="formStatus" 
  @submit="onSubmit" @reset="onReset" />

<PuiForm v-model="formData" :jsons="formJsons" :status="formStatus" 
  @submit="onSubmit" @reset="onReset" 
  :inline="false" :labelWidth="150" />

```

- [表单组](./表单项分组) | 自定义footer插槽按钮
```js

<PuiForm v-model="formData01" :jsons="formJsons01" :status="formStatus" ref="refForm01" />
<PuiForm v-model="formData02" :jsons="formJsons02" :status="formStatus" ref="refForm02" />
// 分组模式 如需表单规则校验，可通过this.$refs 调用formValidata() 方式实现

// 验证表单 示例：
const refForm01 = ref(null)
const validataRes = await refForm01.value?.formValidata()
console.log(validataRes, '验证结果');
```

- 表单插槽
```html
<PuiForm v-model="formData" :jsons="formJsons" :status="formStatus">
  <template v-slot:slotName01="{ data, key, val, props }">
    ...
  </template>
</PuiForm>
```



## **配置**
- [全部表单配置](./jsons配置)  [`所有表单项配置均支持Element同类型组件 全部属性`](https://element.eleme.cn/#/zh-CN/component/input)
- [生成工具](../配置生成工具/README.md)


> 通用配置

```js
// ./resource.js 
const commonAttr = {
    ele:'Input', // 或 自定义组件shallowRef(myFormItem)
    key: 'textareaVal',
    label: '文本框',
    placeholder: '请输入',
    defaultVal:'123', // 默认值； 修改默认值 初始化之前 修改defaultVal， 初始化之后 直接修改formData
    propVal: [ /** 表单项 验证规则 对应elFormItem的prop属性 */
      { required: true, message: '必须', trigger: 'blur' }, 
      { type: 'number', message: '必须为数字', trigger: 'blur' }，
      { type:'string', validator: (rule, value) => { return true }}，
      { type: 'number', asyncValidator: (rule, value) => { 
        return new Promise((resolve, reject) => { (value < 18) ? reject('太小了') : resolve() }) 
      }, trigger: 'blur' }，
      { type: 'enum', enum: ['admin', 'user', 'guest'] }，
      { type: 'string', required: true,  pattern: /^[a-z]+$/, transform(value) {  return value.trim()}}  }
    ],
    span: 8, /** 布局 8/24 */
    // disabled: true, // 等价controls_disabled.all, 优先级低于controls_disabled
    // controls_disabled: {  /** 禁用配置 */
    //     all: true, //统一设置，注意view默认true
    //     add: false, 
    //     edit: (formData)=>{return false}, //支持动态方法 
    //     view: true
    // }, 
    // controls_show: {     /** 展示配置 */
    //    all: true, // 统一设置，单独配置的优先级最高
    //    add: false, 
    //    edit: true, //响应式对象方式 (ref|computed), 隐藏时不会删除formData[key]的属性和值
    //    view: (formData)=>{return false}, // function方式 隐藏时会删除formData[key]的属性
    // },     
    // slotName:"",         /** 插槽名称声明 */
    // slotNameExtend: "",  /** 扩展插槽声明 */
    // labelWidth: '100', /** 单独调整表单项label宽度；统一调整使用PuiForm属性 :labelWidth="100"  */
    // labelW: '100', // 已废弃，请使用labelWidth
    onInput:(val)=>{} // 所有事件 需加'on'前缀，eg:change事件onChange(val)=>{}

    /** 扩展属性 仅在前端统一框架中有效 */
    lastIndex: 1, // 排在倒数位置

    /** 个别组件支持的 */
    slotsNative: { append: ()=>'.COM' } /* 表单元素原生插槽，目前只支持了ElInput */
    keyExtends: [ // key的扩展, 声明给formDate自动绑定多个值；目前只支持了 多选单选ElSelect
      { optionKey: 'label', formKey: 'selectOptionVal2', defaultVal:['yes'] },
      { optionKey: '下拉项的key', formKey: '绑定给formData的key' },
    ]

  },
  {
    ele: shallowRef(myFormItem),  // 内部调用emits('input', val), formData才会更新
    label: '自定义组件',
    key: 'myFormItemVal',
    //   ...otherAttr,
  }

```




## **必要属性**

| 属性    | 值类型     | 默认值     |     描述                    |
| ------ | --------- | --------- | -------------------------- |
| value | Object |    `{}`   | 表单参数容器 |
| jsons | Object-Array |    []   | 表单配置对象，上文中的formJsons |
| formStatus | String |    'add'   | 表单模式;内置'add'、'edit'、'view'模式，也可结合controls_show、controls_constrol配置自定义模式 |


## **可选属性**

| 属性       | 值类型         |   默认值   |      描述                |
| --------- | ---------- | ---------- | ----------------------- |
| labelWidth    | Number      |  90         |  表单项名称的宽度 单位px |
| inline    | Boolean     |  true       | 是否为行内表单, 配合label-position:'top|left|top'使用 |
| colon     | Boolean     |  false       | 是否在label后展示 `:`   |



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
| --------- | ----------------------- |
| footer    |   自定义底部按钮组区域，将覆盖 `确认` `取消`    |
| otherButton |  `确认` `取消` 按钮后的添加其它内容，如按钮  |

## **表单项插槽**

| 插槽名    |  返回值   |     描述              |
| --------- | -------  | --------------------- |
| slotName    |  `{data, key, val, props}` |  表单项插槽   |
| slotNameExtend | `{data, key, val, props}` | 表单项扩展插槽，可与slotName同时生效  |





