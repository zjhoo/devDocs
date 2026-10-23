# layerDataClass 

__外部注册数据使用的工具类__

> 说明：
```js
this.newCameraLayer = new LayerDataInit('newCameraLayer', data || [])

this.newCameraLayer.init()
  
this.newCameraLayer.display(true)
```


> layerDataClass 注册数据工具类代码
```js
export default class layerDataClass {
  constructor(groupName, data) {
    this.groupName = groupName || 'default'
    this.groupData = data || []
  }

  // 数据显示 之 数据初始化  （第一步）
  init() {
    if (!this.groupData || !this.groupData?.length) return console.warn(`图层${this.groupName}注册数据为空`)
    this.send('DataInit', {
      group: this.groupName,
      data: this.groupData
    })
  }

  // 数据显示 之 数据显示  （在第一步之后执行）
  display(show) {
    this.send('DataDisplay', {
      group: this.groupName,
      show: show
    })
  }

  /** 显示单个元素 */
  displayItem(id, show) {
    if (!id) return
    this.send('DataItemDisplay', {
      group: this.groupName,
      id,
      show
    })
  }

  /** 删除图层 */
  remove() {
    this.send('DataRemove', {
      group: this.groupName
    })
  }

  /** 删除图层上的一个元素 */
  removeItem(id) {
    if (!id) return console.warn('确实元素id')
    this.send('DataRemove', {
      group: this.groupName,
      key: id
    })
  }

  /** 飞向一个元素 */
  flyTo(id) {
    if (!id) return console.warn('确实元素id')
    this.send('DataFlyTo', {
      key: id
    })
  }

  /** 设置一个vue元素的属性 */
  setItem(id, options = {}) {
    if (!id) return console.warn('确实元素id')
    this.send('ModifyVueCompOptions', {
      key: id,
      options
    })
  }

  /** 发送数据 */
  send(type, data) {
    if (!type || !data) return
    const jsonStr = {
      type: type,
      data
    }
    console.log(`${this.groupName} send:`, jsonStr)
    window.__earth_postmessage__(jsonStr, '*')
  }
}

```