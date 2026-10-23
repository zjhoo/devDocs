
<h1 id="20" />

## <center> 配置项</center>

<h1 id="200" />

> 通用的配置项 (DataInit注册的数据)
```js
{
group: 'customLayerName', // 分组名
data: [
  {
    id:'必填的key',
    name:'展示名称',
    mode:'earth图元',   /* Pin Pin    Line        Cylinder Road  Wall2 Polygon */
    UIMode:'vue组件', /* PinCameras 见下方 */
    type: 'GeoPolyline' /* Pin PinJar GeoPolyline Cylinder Road  Wall2 Polygon */
    positions:[], /** 位置信息 */
    options: {
      /** 以下是内部参数 可以使用 ModifyVueCompOptions 修改 */
      show：true,
      isElScale: true,
    },
    config: {
      /** 内部参数 可以使用 ModifyEarthElementConfigs 修改 */
      leftClickCallbackKey:'回调的名称' //监听点击事件
    },
    "busId": "00a12208-5772-435c-be2f-a3a589b62fe9", // 唯一标识符
    busDataUrl: null, // 内部请求数据 业务接口地址（扩展用）
    earthConfigUrl: null, // 三维配置可以支持远程配置
    "socketKey": null,
    "iconType": "cameras-blue",
    maxVisiableHeight: 1000,
    minVisiableHeight: null
  }
]
```

<h1 id="201" />

<h2> 一 、 UIMode | vue组件</h2>

> Pin 点位类型通用配置

```js
{
  mode: 'Pin',
  type: 'Pin',
  UIMode: 'PinJar', /** PinJar PinCamera PinOnlyText... 见下方 配置说明 */
  positions: [1.7930890290388082, 0.5133373897808817, 1543.18868256951],
  ...
  options: {
    style: {color: 'red'}, // label自定义样式
    noTitleBox: '直接展示的标题名称',
    iconType: 'enterprise',
    labelType: 'enterprise',
    isElScale: true, // 缩放
    zIndex: 98,
    title: ''
    show: true
  }
}

```

> 点位类型特有 配置说明

- PinCamera / 单个摄像头

  ```js
  {
    mode: 'Pin',
    type: 'Pin',
    UIMode: 'PinCamera',
    ...
    options: {
      url:'',
      socketKey: ''
    }
  }

  ```

- PinCameras / 多个摄像头地址 (可以切换ai地址)
  ```js
  {
    mode: "Pin",
    UIMode: "PinCameras",
    ...
    options: {
      cameras: [
        {
            "name": "永兴大道2号杆",
            "id": "7c590343-142f-45ef-81de-ea68b6291726",
            "options": {
                "url": "wss://jaspzs.scshyzh.cn:8181/ai_live/175.live.flv"
            }
        }
      ],
    }
  }
  ```

- PinCamerasIcon / 多个摄像头 (无ai地址，多个视频可以播放)
  ```js
  {
    mode: "Pin",
    UIMode: "PinCamerasIcon",
    ...
    options: {
      cameras: [
        {
            "name": "永兴大道2号杆",
            "id": "7c590343-142f-45ef-81de-ea68b6291726",
            "options": {
                "url": "wss://jaspzs.scshyzh.cn:8181/live/175.live.flv",
                "aiUrl": "wss://jaspzs.scshyzh.cn:8181/ai_live/175.live.flv" // ai视频地址
            }
        }
      ],
    }
  }
  ```

- PinCamerasTwo / 多个视频播放
  ```js
  {
    mode: "Pin",
    UIMode: "PinCamerasIcon",
    ...
    options: {
      cameras: [
        {
            "name": "永兴大道2号杆",
            "id": "7c590343-142f-45ef-81de-ea68b6291726",
            "options": {
                "url": "wss://jaspzs.scshyzh.cn:8181/live/175.live.flv",
            }
        }
      ]
    }
  }
  ```

- PinCommon / 公共图钉
  ```js
  {
    title: '名称'
  }
  ```

- PinCommonClick / 公共图钉可点击
  ```js
  {
    title: '名称',
    info:{
      // 任何自定义数据，在消息事件名 PinCommonClickHandler 中接受
    }
  }
  ```

- PinJar / 重大危险源定制版（简单版）
  ```js
  ...
  ```

- PinMajorDangerSource / 重大危险源【定制版】【单个设备信息的重大危险源】
  ```js
  ...
  ```

- PinDaoZha / 道闸
  ```js
  ...
  ```

- PinDesc / 纯描述性文本
  ```js
  {
    mode: "Pin",
    UIMode: "PinDesc",
    areaMaxHeight: '250px',
    borderColor: 'blue',
    ...
    options: {
      items:[
        {label:'我是标题',value:'我是值', callbackKey:'点击的事件名称'}
      ],
      // 高级配置
      items:[
        {
          label:{value:'我是标题',style:{color:'blue'}, callbackKey:'点击了label的事件名称'},
          value:{value:'我是值',style:{color:'red'}, callbackKey:'点击了value的事件名称'}
        }
      ],
      // 按钮组
      btns: [
        {label:'',style:{},callbackKey:''}
      ]
    }
  }
  ```
- PinDescCenter / 纯描述性文本居中
  ```js
  {
    UIMode: "PinDescCenter",
    /** 与 PinDesc一致  */
  }
  ```

- PinIndex / 可带索引的标点
  ```js
  {
    UIMode: 'PinIndex',
    title: "标点名称",
    index: 2, // 标点索引【选填】不填等价于 PinCommon
  }
  ```

- PinOnlyText / 只有文字的图钉（样式自定义）
  ```js
  {
    UIMode: 'PinIndex',
    options: {
      title:'',
      text: '描述的文字',
      style: {...}
    }
  }
  ```

- PinRiskStatus / 风险状态图钉
  ```js
  ...
  ```


<h1 id="202" />

<h2 > 二 、 mode | earth图元 </h2>

> 道路 | Road
```js
{
  ...
  config: {
    imageUrl: '/resource/images/physical-fence-ceil.png'
  }
}
```

> 圆柱体 | Cylinder
```js
{
  ...
  configs: {
    color: [0.5, 0.5, 0.5, 0.1],
    endPosition: [1.8533828924366778, 0.5622835562845245, 457.7354259425802],
    radius: 288.08490023451907,
    startPosition: [1.8533828924366778, 0.5622835562845245, 423.8137400774491]
  },
}
```

> 折线 | Line
```js
{
  ...
  positions: [
    [1.8530639859151827, 0.5622286129483111, 446.5617771720005],
    [1.8531749571298854, 0.5621935754044496, 437.157911543327],
    [1.8532849199495545, 0.5621500160266254, 440.7667009817055],
  ]
}
```

> 多边形 | Polygon
```js
{
  ...
  type: 'Polygon',
  mode: 'Polygon',
  UIMode: '',  
  positions: [
    1.8532396148682606, 0.5622915018070844, 
    1.8533064923071916, 0.5622598985436089,
    1.8533068914203168, 0.5622260468035412, 
    1.853224611169887, 0.5622708274480649
  ],
  configs: {
    color: [0, 0, 1, 1],
    depthTest: true,
    extrudedHeight: 422.67653519146245,
    height: 468.00098477739715,
    outline: {show: false},
  }
}
```