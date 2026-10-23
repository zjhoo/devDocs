# PuiDel
* 全局通用的删除
::: warning
已弃用, 使用框架项目组件方式维护
:::
### 使用

```js
import PuiDel from '@Pui/Del'

/** render 函数中使用 删除按钮  */
 h(PuiDel,{
    props:{
      delApi:()=>{}, //删除接口 axios对象
      delParams:{}, //需要的数据
    },
    on: {
      onSuccess: ()=>{ console.log(params) } //成功的回调
    }
  }),
```

```html
/** 模板中使用 */
<PuiDel :delApi='' :delParams='' @onSuccess='' />

```

### 补充说明

PuiTalble、PuiTable的columns 中使用render 方式 实现行内操作

[columns生成工具](../配置生成工具/README.md)

```js
/** 查看按钮 */
h('span',{class:{'pui-botton-line_view':true}, on: { click: () => {event.onShowEdit(row)} }}, '查看'),

/** 编辑按钮 */
h('span',{class:{'pui-botton-line_edit':true}, on: { click: () => {event.onShowEdit(row)} }}, '编辑'),

/** 按钮 */
h('span',{class:{'pui-botton-line':true}, on: { click: () => {event.onShowEdit(row)} }}, '普通行内文字'),

```
