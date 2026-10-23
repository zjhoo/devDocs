 ## 统一查询方式实现；
 ::: tip
前端灵活配置，减少前后端常规数据筛选的开发工作；

目前支持filterKey + [可选]onSearch的hooks.before (修改连接符和操作符)实现
:::

 - 后端主导的功能实现和规范 
 - 前端 使用filterKey filterRule(待开发) 灵活配置查询条件


### 后端规范
```js
// 顶级查询属性
customParams: [
    // 查询节点组
    {
      "name": "key1", // 查询字段
      "operator": "", // 操作符
      "values": [],   // 操作值 （匹配值）
      "connector": "", // 连接符
      "children": [    // 子查询条件
        {
          "name": "", // 子查询条件名称
          "operator": "", // 操作符
          "values": [],   // 操作值 （匹配值）
          "connector": "", // 连接符
          "children": [    // 子查询条件
            {}
          ],
          "childrenConnector": "", // 与子查询条件的连接符
          "virtual": true // 是否为虚拟节点，true 等同于没有父级
        }
      ],
      "childrenConnector": "", // 与子查询条件的连接符
      "virtual": true,         // 如果是一级节点组，这里必须为true
    },
    // 独立查询节点
    {
        "name": "key2",         // 查询字段
        "operator": "LIKE",     // 操作符
        "values": [
            // ******* 注意：如果是时间段，请先判断这里是否是数组，方便后期扩展  ******** 
            "2222"              // 操作值 （匹配值）   
        ],
        "connector": "AND"      // 连接符
    }
  ]
```


### 前端配置

> #### 简单配置： filterKey
[包更新日志](http://10.2.163.218:4873/-/web/detail/@hy-pui/vue3-code-gen) 中的 filterKey 内容
 ###### 示例位置: 第代码示例 》 基础版 》 查询模块 
 - 在searchJson项中配置filterKey 指定查询字段， 
 - v-model:filterKeys中能接收到这个值，
 - 查询执行时会自动拼装到customParams中

 - 如条件不满足，可使用onSearch的hooks.before中拼装条件


> #### 高级配置：filterRule  
// ... 【待开发】

> #### operator 可选值

|  值  |      含义       | 是否为多个值 |
|:---:|:-------------:|:------:|
| GT |      大于       |   否    |
| GE |     大于等于      |   否    |
| LT |      小于       |   否    |
| LE |     小于等于      |   否    |
| EQUALS |      等于       |   否    |
| LIKE |     模糊查询      |   否    |
| IN |     匹配多个值     |   是    |
| BETWEEN | 区间查询, 例如时间段查询 |   是    |