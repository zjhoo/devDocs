# <center>标会系统文档 </center>


::: tip
致敬Iframe标会系统，以下是使用说明 [代码仓库](https://lyarmy.coding.net/p/v6-gonggong/d/background-plotting-system/git)
:::

- [相关方法](#使用方法)
  
  - [通用消息体](#100)
  - [layerDataClass](#101)
- [配置项](#配置项)
  - [通用配置项](#200)
  - [UIMode | vue组件](#201)
  - [mode | earth图元](#202)

## <center> 使用方法</center>

<h1 id="100" ></h1>

> 1. 通用消息体
```js
 const jsonStr = JSON.stringify({
    type: 'DataInit', // 调用方法，参考以下调用方法
    data: {
      /** 消息体，参考以下配置项；后文中使用 [ msgObj ] 说明 */
    }
  })
  document.querySelector('#myframe').contentWindow.postMessage(jsonStr, '*')
```

> 2.调用方法


<h1 id="101" ></h1>

[layerDataClass 注册数据工具类](./layerData.md)
- DataInit / 数据初始化
  ```js
  msgObj = {
    {
      group: 'defaultGroup',
      data: [ // 详情见配置项
      {
        id: "monitor00001",
        name: "四号杆摄像头02",
        mode: "Pin",
        UIMode: "PinCommon",
        positions: [1.8392951954769776, 0.5587215151272802, 724.7131804156594],
        options: {},
        maxVisiableHeight: 2500,
        minVisiableHeight: null
      }
      ]
    }
  }
  ```

- DataDisplay / 数据显示（隐藏）
  ```js
  msgObj = {
      group: 'default', // 数据初始化中的group名称
      show: false, // true-显示  false-隐藏
    }
  ```


- DataItemDisplay / 单个数据显示（隐藏）
  ```js
  msgObj = {
    groupName: 'default', // 数据初始化中的group名称
    show: false, // true-显示  false-隐藏
    id: '' // 指定key必须指定group
  }
  ```

- DataRemove / 数据清理
  ```js
  msgObj ={
    group: 'default',
    key: '', // 指定key必须指定group
    all: true // 第一优先，传了这个为true，则其他两个设置直接无效了
  }
  ```

- ThreeDimElRemove / 删除三维元素
  ```js
  msgObj ={
    key: '', // 指定key必须
  }
  ```

- FlyTo / 显示目标并定位
  ```js
  msgObj = {
    key: '202305151002' // 必填 （数据DataInit中的id值）
  }
  ```

- FlyToOfCamera / 相机飞行到目标高度
  ```js
  msgObj =  {
    position: [], // 目标坐标
    viewDistance: 5000, // 距离目标多远停下
    rotation: [], // 相机从什么角度观察目标
    positionIsRadian: false // 目标坐标是否弧度
  }
  ```

- FlyToTile / 飞向某个瓦片
  ```js
  msgObj = {
    url: 'http://182.151.56.8:3333/SiChuan/GuangYuan/E-GY010/tileset.json', // 当通过key获取元素，但未获取到时，则直接加载再飞向 【非必传】
    key: '', // 标识key，必传
    height: 0 // （模型高度，可自由调整）
  }
  ```
- ModifyVueCompOptions / 修改内部vue组件的属性 options
  ```js
  msgObj = {
    data: {
      key,
      options: { /**配置项中的options */}
    }
  }
  ```

- ModifyEarthElementConfigs / 修改三维元素内部的配置项 configs
  ```js
  msgObj = {
    data: {
      key,
      configs: { /**配置项中的configs */}
    }
  }
  ```

- SetBaseURL / iframeUrl地址设置
  ```js
  // earthClass 中已处理
  msgObj = {
    url: 'http://117.173.156.97:32100/',
  }
  ```

- SetApiURL / 内部注册所需接口设置
  ```js
  // earthClass 中已处理
  msgObj = {
    save:{
        url:'/plotMain/uploadJsonData',
    },
    get:{
        url:'/plotMain/getJsonData',
    },
    del:{
        url:'/plotMain/delJsonData',
    }
  }
  ```

- LoadTerrain / 地形加载
  ```js
  // earthClass 中已处理
  msgObj = {
    url: 'http://182.151.56.8:3333/SiChuan/GuangYuan/E-GY010/tileset.json',
  }
  ```

- LoadTile / 瓦片加载
  ```js
  // earthClass 中已处理
  msgObj = {
    url: 'http://182.151.56.8:3333/SiChuan/GuangYuan/E-GY010/tileset.json',
    nojump: 1, // 不飞近
  }
  ```

/* 编辑模式特有 */

- businessBind / 绑定业务数据ID
  ```js
  msgObj = {
    id: id
  }
  ```

- setConfigs / 设置工具配置项
  ```js
  msgObj = {
    /** 点配置 */
    pin: {
      near: 100
    },
    /** 线配置 */
    line: {
      ground: false, // 贴地
      width: 2, // 线宽度
      color: [0, 0, 1, 1], // 线条颜色
    },
    /** 多边形拖动时线的配置  */
    polygon: {
      ground: false, // 贴地
      width: 2, // 线宽度
    },
    /** 多边形完成衍生元素的配置  */
    polygonByEffect: {
      color: [0, 1, 1, 0.5], // 线条颜色
    },
    /** 圆柱体操作时线的配置  */
    cylinder: {

    },
    /** 圆柱体操作完成衍生元素的配置  */
    cylinderByEffect: {
      color: [1, 1, 0, 0.03]
    },
    /** 道路配置  */
    road: {
      imageUrl: '/resource/images/physical-fence-ceil.png',
      width: 15
    },
    /** 电子围栏操作时线的配置 */
    fence: {
      ground: false, // 贴地
      width: 2, // 线宽度
    },
    /** 电子围栏操作时线的配置【新版】 */
    fenceNew: {
      ground: false, // 贴地
      width: 2, // 线宽度
    },
    /** 电子围栏操作完成时衍生元素的配置 */
    fenceByEffect: {
      imageUrl: '/resource/images/electronic-fence-floor.png',
      height: 10
    },
    /** 电子围栏操作完成时衍生元素的配置 【新版】 */
    fenceNewByEffect: {
      imageUrl: '/resource/images/lwall.png',
      configUrl: '/resource/json/lwall.json',
      // 高度可调整
      height: 100,
      loop: true,
      color: [0.12549019607843137, 0.6980392156862745, 0.6666666666666666, 1]
    }
  }
  ```

- setToolLayout / 修改工具箱布局（显示与隐藏某些工具项）
  ```js
  msgObj = {
    include: ['图标点', '圆柱体'], // 只能启用一个（内容是工具项的名称）
    exclude: ['图标点', '圆柱体'], // 只能启用一个（内容是工具项的名称）
    operTool:{
      include:['完成'],
      style:{
        fontSize:'20px'
      }
    }, // 操作布局配置
    rename: {
      '图标点': '作业地点'
    } // 重名
  }

  ```

- setPlotInfo / 设置默认展示的标绘信息
  ```js
  msgObj = {
    /** 格式与 updatePlotInfo 一致 */
  }
  ```

- updatePlotInfo / 修改标绘信息（businessId不存在，则无效）
  ```js
  msgObj = {
  "name":"折线",
  "mode":"Line",
  "UIMode":"",
  "positions":[
      [1.8114961480256062,0.5246168726542151,400.4609915131638],
      [1.8115993155876968,0.5245495695317116,388.0984920679811]
    ],
  "options":{},
  "configs":{"width":2,"ground":false,"color":[0,0,1,1]},
  "type":"GeoPolyline","id":"00000000-0000-0000-0000-000000000001"}
  }
  ```

- getPlotIcon / 获取标绘系统中提供的图标集合
  ```js
  msgObj = null
  ```

