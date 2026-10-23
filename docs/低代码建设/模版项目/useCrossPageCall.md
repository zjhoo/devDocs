## useCrossPageCall V2版使用方法

- [最新文档地址](http://10.2.163.10:30300/enterprise-v8/backend_system_template/src/branch/master/src/hooks/useCrossPageCall/v2/readV2.md)

> 跨页调用hook v2版

```js
  import { useCrossPageCall } from '@/hooks/useCrossPageCall/v2'

  useCrossPageCall(
    'pageDemo/base'，           //路由--会找到对应组件
     null,                      //发起组件上下文
     {test:'给目标组件的参数'}    //目标组件参数,
     { 
        mountNode: 'ref|dom',    // config 指定挂载的节点 (同时多次挂载同一组件 只支持了ref,如需dom节点支持请联系郑建华)
      }
    ).then(({ compRef, unmount }) => {
      compRef?.optBtnClick(     // 目标组件的统一交互方法
        'edit',                                               // 方法策略 type
        {id: '01jnnew2emd6nc3g8nhdjc4tdb'},                   // 方法参数 data
        {title: '跨页面调用演示-编辑', style: 'dialog|drawer'}  // 方法配置 config
      )
      
      // 需要时，可手动回收(非必须)
      // unmount()
    })


  // ✅ 正确 - 在setup顶层调用，可不传上下文
  useCrossPageCall('pageDemo/base').then(({compRef, unmount})=>{   })


  // ✅ 正确 - 在事件处理器中需带实例调用
  const instance = getCurrentInstance()
  const handleClick = () => {
    useCrossPageCall('pageDemo/base', instance).then(({compRef, unmount})=>{   })
  }

  /* 在一个页面中多次挂载同一组件，需要声明挂载点的data-node-id (用于区分不同的节点组件实例) */
  <div ref="mountNodeRef" data-node-id="mountNodeId" />
```
