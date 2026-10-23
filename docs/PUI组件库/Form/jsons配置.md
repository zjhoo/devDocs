## 表单构造器 支持类型

```js
import myFormItem from './cpt/myFormItem.vue'
// 自定义组件 必须调用emits('input', val), formData才会更新
export const formJsons = [...下方jsons...]
```

/** 表单构造器 **/
## VueComponent| 自定义组件
```js
  {
    ele: shallowRef(myFormItem), // 必须使用markRaw|shallowRef去掉深层响应式
    key: 'customItemVal',
    label: '自定义组件使用',
    placeholder: '自定义组件使用',
    span:13,
    labelWidth: 40,
    /* 这里直接给组件props | attrs | style | class 等属性，
      propOne: 'p111',
      propTwo: 'p222',
      attrOne: 'a111',
      style: { width: '100%' },
      class: 'flex-1'
    */ 
  }
```
## Input
```js
  {
    ele:'Input',
    key: 'inputVal',
    label: '输入框',
    // 'label-width': '100px'
    placeholder: '请输入',
    defaultVal:'123',
    // disabled: true, //等价controls_disabled.all,优先级低于controls_disabled
    // controls_disabled: { add: true, edit: false, view: false },
    // controls_show: { add: false, edit: true, view: true }, // function方式 隐藏时会删除formData[key]的属性
    propVal: [
      { required: true, message: '必须', trigger: 'blur' },
      { min: 3, max: 5, message: '3到5个长度', trigger: 'blur' }
    ],
    span: 8, 
    onInput:(val)=>{} // 所有事件 需加'on'前缀，eg:change事件onChange(val)=>{}
    // slotName:'',
    // type:
  },

  // https://element-plus.org/zh-CN/component/input.html#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86
  { 
    ele: 'Input',
    key: 'slotsNative',
    label: 'ElInput原生插槽支持',
    span: 12,
    slotsNative: {
      append: ()=>'.COM',
      prepend: ()=> 'Http://'
    }
  },

  {
    ele:'Input',
    key: 'textareaVal',
    label: '文本框',
    // 'label-width': '100px',
    placeholder: '请输入',
    defaultVal:'123',
    span: 8,
    type:'textarea',
    // disabled: true, //等价controls_disabled.all,优先级低于controls_disabled
    // controls_disabled: { add: true, edit: false, view: false },
    // controls_show: { add: false, edit: true, view: true }, // function方式 隐藏时会删除formData[key]的属性
    propVal: [
      { required: true, message: '必须', trigger: 'blur' },
    ],
    // slotName:'',
    // 个性化属性...
    maxlength:'500',
    "show-word-limit":true,
    autosize:{ minRows: 5, maxRows: 6 }
  },

```
## Select

```js
  {
    ele:"Select",
    key: "selectOptionVal",
    keyExtends: [ // key的扩展, 下拉获取多个值, 会自动绑定到formDate上；多选单选下拉都支持
      { optionKey: 'label', formKey: 'selectOptionVal2', defaultVal:['yes'] },
      { optionKey: '下拉项的key', formKey: '绑定给formData的key' },
    ],
    label: "下拉单选-options",
    // "label-width": "100px",
    placeholder: "",
    defaultVal:"",
    span: 8,
    slotName:"",
    options:[
      {value:'11',label:'男'},
      {value:'12',label:'女'},
    ]
  },

  {
    ele:"Select",
    key: "selectOptionVal2",
    label: "下拉多选-options",
    // "label-width": "100px",
    placeholder: "",
    defaultVal:"",
    span: 8,
    multiple:true,
    slotName:"",
    options:[
      {value:'11',label:'男'},
      {value:'12',label:'女'},
    ]
  },

  // https://element-plus.org/zh-CN/component/select-v2.html
  {
    ele: 'SelectV2', // 大数据量的下拉场景
    key: 'SelectV2',
    label: 'Virtualized Select 虚拟化选择器',
    labelWidth: 130,
    placeholder: 'Virtualized Select 虚拟化选择器',
    filterable:true, // 支持筛选
    clearable: true,
    // span: 12,
    // multiple:true,
    // advanced: true, // 是否为高级搜索项
    options: ()=> {
      let arr = []
      for (let i = 0; i < 1000; i++) {
        arr.push(
           {value:i+1,label:`类型${i}`},
        )
      }
      return arr
    },
    // onChange: (e)=>{ console.log('selct onChange', e)},
    // slotsNative: {
    //   default: ({item})=>{
    //     return `原生插槽${item.label}--${item.value}`
    //   }
    // }
  },

  // {
  //   ele:'Select',
  //   key: 'selects2Val',
  //   label: '下拉多选-字典',
  //   // labelWidth: 
  //   span: 8,
  //   placeholder: '',
  //   defaultVal:'',
  //   controls_disabled: { add: false, edit: false, view: false },
  //   controls_show: { add: true, edit: true, view: true }, // function方式 隐藏时会删除formData[key]的属性
  //   multiple:true,
  //   propVal: [
  //     { required: true, message: 'Please select Activity zone', trigger: 'change' },
  //   ],
  //   slotName:'',
  //   // code: 'risk_point_level', /** 字典类型 */  已废弃，可使用ele传入组件的方式 或 动态options 或 options 指定为方法
  //   // codeShim:'id', /** 字典值垫片  指定ElOption的value属性用的字段, 【默认值是id】  */
  // },
```

## DatePicker
```js
  {
    ele: 'DatePicker',
    key: 'dateTimeVal',
    label: '日期时间',
    labelWidth: 40,
    placeholder: '选择时间',
    span:8,
    type: 'datetime', /** ElDatePicker的 type属性 */
    // ... 支持ElDatePicker的所有属性，{'属性名'：'属性值'}，请移步：https://element.eleme.cn/#/zh-CN/component/date-picker
  },

  {
    ele: 'DatePicker',
    key: 'datetimerangeVal',
    label: '日期区间选择',
    placeholder: '日期区间选择',
    span: 8,
    type: 'datetimerange',
    'range-separator':'到',
    'start-placeholder':'开始时间',
    'end-placeholder':'结束时间',
    format:"YYYY/MM/DD",
    'value-format':"YYYY-MM-DD",
  },
```
## TimePicker
```js
  {
    ele: 'TimePicker',
    key: 'executionTimeStartAndEnd',
    label: '时间',
    placeholder: '选择时间范围',
    span: 8,
    'is-range': true,
    'range-separator':'到',
    format:"HH:mm:ss",
    'value-format':"HH:mm:ss",
    propVal: [
      { required: true, message: '必选', trigger: 'change' },
    ],
  },
```
## CheckboxGroup
```js
  {
    ele: 'CheckboxGroup',
    key: 'checkboxVal',
    label: '复选框组',
    defaultVal:[],
    // type: 'button', // 按钮风格
    options:[
      {label:'选项1', value:'type1'},
      {label:'选项2', value:'type2'},
      {label:'选项3', value:'type3'},
    ]
  },

```
## RadioGroup
```js
  {
    ele: 'RadioGroup',
    key: 'radioVal',
    label: '单选框组',
    defaultVal:'',
    span: 12,
    // type: 'button', // 按钮风格
    options:[
      {label:'单选项1'/* 理论上支持所有el-radio属性 */},
      {label:'单选项2'},
      {label:'单选项3'},
    ]
  },

```
## Cascader
```js
  { 
    ele: 'Cascader',
    key: 'CascaderVal', 
    label: '级联选择', 
    span: 12, 
    propVal: [], 
    props: { 
      multiple: true, // 多选
      checkStrictly: true  // 选中任意节点
    },
    options:[
       {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'efficiency',
                label: 'Efficiency',
              },
              {
                value: 'controllability',
                label: 'Controllability',
              },
            ],
          },
        ],
      },
      {
        value: 'consistency',
        label: 'Consistency',
      },
    ],
  },

```
## TreeSelect
```js
  { 
    ele: 'TreeSelect',
    key: 'TreeSelectVal', 
    label: '树型下拉选择', 
    span: 12, 
    propVal: [], 
    placeholder: '树型下拉选择',
    // advanced: true,
    // multiple:true,
    data:[
       {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'efficiency',
                label: 'Efficiency',
              },
              {
                value: 'controllability',
                label: 'Controllability',
              },
            ],
          },
        ],
      },
      {
        value: 'consistency',
        label: 'Consistency',
      },
      {
        value: 'feedback',
        label: 'Feedback',
      },
    ]
  },

```
## 自定义组件
```js
  {
    "ele": markRaw(ElCascader),
    "key": "elementPlusCpt",
    "label": "elementPlus组件使用",
    "placeholder": "elementPlus组件使用",
    "defaultVal": "",
    "span": 6,
    "show-word-limit": true,
    "clearable": true,
    options:[{ value: 'guide',  label: 'Guide',  children: [ { value: 'consistency',  label: 'Consistency'}]}],
    'show-all-levels':false,
    props:{
      checkStrictly:true
    }
  },

```
## 插槽与布局
```js
   { 
    // ele: '',
    // key: '',
    label: '不填写插槽占用整个区域',
    slotName:'插槽名称'
    span: 24,
   }
  // { 暂未开放
  //   ele: 'MapPosition',
  //   key: 'mapVal',
  //   label: '地图选点和回显',
  //   defaultVal:null,
  //   span:12,
  // },


```