# 大屏页编写指南

所有dom节点都需要在 `.hy-screen-large` 类之下，才能正常显示。

```html
<div class="hy-screen-large">
    <!-- 所有dom节点都需要在hy-screen-large类中 -->
    <!-- 可以element-plus组件的深色模式 effect:'dark' 做补充 -->
</div>
```

## 表格
```js
// 加载动画优化
<el-table  v-loading="loading" element-loading-background="#24334e70">
```

## 表单

- ### 下拉表单项
```js
<el-select ... :teleported="false" effect="dark">
```
或
```js
{
    ele: 'Select',
    key: 'key',
    ...
    teleported：false，
    effect: 'dark',
}
```

## 弹框
```js
<el-dialog ... :teleported="false">
```
或
```js
使用下方 [大屏风格弹框展示内容的hook]
```

## 远程调用到弹窗
- 大屏风格弹框展示内容
```js
import { useGlobalDialog } from '@/hooks/useCrossPageCall/inDialog/v2'
const { createDialog, closeDialog, getAllDialogs, dialogManager } = useGlobalDialog()

const openFun = () => {
    createDialog('themeDemo/table', {
        a: 123
        title: '弹窗B',
    }, {
        height: '400',
        position: { x: 10, y: 10 },
        key: 'tableDemoDialog',
    }).then(res=>{
        // [可选] 提升弹框层级
        res.bringToFront()

        // [可选] 关闭弹窗
        // 方式1：直接调用
        res.close() 
        // 方式2：通过id关闭
        setTimeout(()=>{
            closeDialog(res.id)
        }, 3000)
    })
}
```

- element-plus 弹框中展示内容
```js
import { getCurrentInstance } from 'vue'
import { useCrossPageCallInDialog } from '@/hooks/useCrossPageCall/inDialog/v1'
const instance = getCurrentInstance()

function openDialogByElDidlog() {
    useCrossPageCallInDialog('pageDemo/base', instance,{
        style: {
            height: '80vh',
            padding: '10px 20px 0',
            backgroundColor: 'var(--hy-content-bg-color)',
        },
    }).then(({compRef, unmount})=>{   })
}
```
