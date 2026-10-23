## 查询表单 支持类型

> 完整配置
```js
/** 查询表单构造器 **/
export const searchJsons = [

```

## 自定义组件
```js

  {
    ele: shallowRef(myFormItem), // 必须使用markRaw|shallowRef去掉深层响应式
    key: 'customItemVal',
    label: '自定义组件',
    placeholder: '自定义组件',
    span:13,
    labelWidth: 40
  },
```

## Input
```js
  {
    ele: 'Input',
    key: 'processName',
    label: '查询项名称',
    // labelWidth: 90,
    // defaultVal: ''
    placeholder: '请输入',
    span: 12, //布局 8/24
    colon:true,
    type: 'numberValue' // 扩展类型 数字值；原生也支持'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file' | 'number' | 'radio'            
  },
  {
    ele: 'Input',
    key: 'textarea-key',
    label: '文本区域常见配置',
    placeholder: '请输入',
    type: 'textarea',
    span: 24,
    maxlength:'500',
    autosize:{ minRows: 5, maxRows: 6 }
  }
```

## Select
```js
  // {  已废弃
  //   ele: 'Select',
  //   key: 'selectVal2',
  //   label: '下拉单选-code',
  //   placeholder: '请选择',
  //   span: 6,
  //   multiple:false,
  //   // code: 'risk_point_level', //查询下拉的code  已废弃，可使用ele传入组件的方式 或 动态options 或 options 指定为方法
  //   // codeShim:'id', //字典值垫片  指定选择项的值【默认值是id】
  // },

  {
    ele:"Select",
    key: "selectOptionVal2",
    label: "下拉options使用方法",
    // "label-width": "100px",
    placeholder: "下拉options使用方法",
    defaultVal:"",
    span: 8,
    slotName:"",
    options:()=>[
      {value:'11',label:'方法获取项1'},
      {value:'12',label:'方法获取项2'},
    ],
  },

  {
    ele: 'Select',
    key: 'selectsVal',
    label: '下拉多选',
    placeholder: '请选择',
    span: 12,
    multiple:true,
    options: [ 
      {value:'11',label:'类型1'},
      {value:'12',label:'类型2'},
    ],
  },

```

## SelectV2
```js

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

```

## DatePicker
```js
  {
    ele: 'DatePicker',
    key: 'dateVal2',
    label: '时间',
    placeholder: '选择时间范围',
    // span:12,
    advanced: true, // 是否为高级搜索项
    labelWidth: 40,
    type: 'date',
    format:"yyyy 年 MM 月 dd 日",
    
    //理论上支持elDatePicker 所有配置,以[属性名]:[属性值]方式使用
  },

  {
    ele: 'DatePicker',
    key: 'dateRangeVal',
    label: '时间区间',
    placeholder: '选择时间范围',
    span:13,
    labelWidth: 40,
    type: 'daterange',
    format:"yyyy 年 MM 月 dd 日",
    //理论上支持elDatePicker 所有配置,以[属性名]:[属性值]方式使用
    onChange: (e)=>{ console.log('DatePicker onChange:', e)   }
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

## 插槽与布局
```js
  {
    ele: 'Input',
    key: 'dateRangeVal3',
    label: '扩展插槽测试',
    placeholder: '扩展插槽测试',
    span:13,
    labelWidth: 40,
    // type: 'daterange',
    // format:"yyyy 年 MM 月 dd 日",
    slotNameExtend:'slotExtend',
    //理论上支持elDatePicker 所有配置,以[属性名]:[属性值]方式使用
  },

  {
    ele: 'Select',
    key: 'ccccc',
    label: '插槽测试', // lable 可为空 或者不传
    labelWidth: 130,
    placeholder: '请选择',
    span: 12,
    slotName: 'testSlot',
  },
]

```
