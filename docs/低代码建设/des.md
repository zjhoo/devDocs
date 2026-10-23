# 低代码建设 | Pui

### 简单配置
```js
  const json = {
    label: '展示名称',
    key: 'codeProp', 
    controls_show: { table: true, search: true, form: true}
    // 查询和表单通用
    ele: 'Input',
    placeholder: '请输入',
  }
```

### 全部的配置项罗列
```js
  const json2 = {
    *key: 'codeProp',
    *label: '展示名称',
    // label: { table: '表格展示名称', search: '查询展示名称', from: '表单展示名称' },
    // label: { table: '表格展示名称', search: '查询展示名称', from: () => {add: '新增表单展示名称'} },
    
    // controls_disabled: { add: formData => true, edit: false, view: false },
    *controls_show: { table: true, search: true, add: (formData)=>{ return true }, edit: true, view: true }, 

    // 查询和表单通用
    ele: 'Input', /** UploadFile UploadFiles  Editor ... 自定义表单项实现 */
    placeholder: '请输入',
    options: [{ label: '是', value: '1' }],
    // options: () => [ { label: '是', value: '1' }], //传入方法 或者 axios对象  方便待选项的统一维护
    
    // 表格 特有 -- 推荐使用快捷方式
    ?width: 80, // table.width 便捷写法
    ?render: (h, row, $index, prop, tableData) => {return h('span', { }, '编辑')}, // table.render 便捷写法
    ?tableSlotName: 'userSlot', // table.slotName 的快捷写法
    table: {
      width: 80,
      render: (h, row, $index, prop, tableData) => {return h('span', { }, '编辑')}, 
      slotName: 'userSlot'
      type: 'selection',
      editing: false, // 行内编辑
      editCfg: {type: 'date|select|input', options: []} // 对接方法@editChange 
    }

    // search 特有
    search:{
      labelWidth: 90,
      span: 24,
      defaultVal: '',
      advanced: true,
      slotName: 'userSlot'
    }

    // form 特有
    form: {
      labelWidth: 90,
      span: 24,
      defaultVal: '',
      // defaultVal: () => {add:'123'},
      propVal: [{ required: true, message: '请输入编码', trigger: 'blur' }],
      // propVal: () => {add: [{ required: true, message: '请输入编码', trigger: 'blur' }] } , // 不同操作表单不同验证规则需要使用function
      slotName: '表单项插槽', // 全部功能表单通用使用插槽
      // slotName: { add: 'formAddSlot' }, // 不同功能表单区分,  除了add其它模式不使用插槽
      // ......
    }
  }

```


#### 使用示例
```js

const json = [
  {
    controls_show: { table: true},
    table: {
      type: 'selection'
    }
  },
  {
    label: '序号',
    width: 80,
    type: 'index',
    controls_show: { table: true},
  },
  {
    label: '编码',
    key: 'code', 
    width: 100,
    render: (h, row, $index, prop, tableData) => {return h('span', { }, '编辑')}, 
    controls_show: { table: true, search: true, add: true, edit: true, view: true, output: true}, // 控制数据项在哪些位置使用， 该项以下为表单配置项
    ele: 'Input',
    placeholder: '请输入',
    search:{
      span: 24,
      advanced: true,
    },
    form: {
      span: 24,
      defaultVal: '',
    }
  },
  {
    label: '中文名称',
    key: 'name', 
    controls_show: { form: true},
    ele: 'Input',
    placeholder: '请输入',
    form: {
      span: 6,
      defaultVal: '',
    }
  },
  {
    label: '浓度报警阈值',
    key: 'normalThresholdValueMax', 
    controls_show: { table: false, search: false, add: true, edit: true, view: false},
    ele: 'Select',
    placeholder: '请输入',
    form: {
      span: 6,
      defaultVal: '',
      propVal: [{ required: true, message: '请输入编码', trigger: 'blur' }],
    }
  }
]
```

