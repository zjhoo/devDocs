# 常见问题

> 框架使用过程中遇到的问题，及解决方法

## 查询》 时间区间 (默认值处理)
<span style="color: gray; opacity: 0.5;font-size: small">*resource.js*</span>
```js
searchJson = [{
  ele: 'daterange',
  key: 'timer',
  label: '查询时间区间',
  type: 'daterange'
}]
```
<span style="color: gray; opacity: 0.5;font-size: small">*index.vue*</span>
```js
function mySearch() {
  onSearch(null,{
    before:(obj)=>{ // 这里直接处理时间区间值
      if(obj.timer?.length){
        obj.endDate = obj.timer[1] + ' 23:59:59'
        obj.startDate = obj.timer[0] + ' 00:00:00'
      }else{
        obj.startDate = ''
        obj.endDate = ''
      }
      delete obj.timer
      return obj
    }
  })
}
// 可选： 默认查询，直接调用，内部会通过节流合并请求
onMounted(() => {  
  mySearch()
})
```
[后端参数规则》](/低代码建设/统一查询方式/)

## 统一查询》 filterKey
统一查询器, 会使用 `v-model:filterKeys="hApi.filterKeys"` 接收

<span style="color: gray; opacity: 0.5;font-size: small">*resource.js*</span>
```js
searchJsons = [
    {
        ele: 'Input',
        key: 'key',
        label: '查询项名称',
        filterKey: ['key1', '匹配字段2'], // 通常只用配置这个
    }
]
```

<span style="color: gray; opacity: 0.5;font-size: small">*index.vue*</span>
```js
// 可选，如果不满足 在hook中处理
onSearch(
    null, // 不传，使用内部维护的参数
    { 
        before:(obj)=>{ 这里处理参数obj } 
    }
 )
```
[后端参数规则》](/低代码建设/统一查询方式/)


## 统一查询》 先filterKey，再遍历处理值
<span style="color: gray; opacity: 0.5;font-size: small">*resource.js*</span>
```js
searchJson = [
    {
        ele: 'daterange',
        key: 'timer666', // 配置了filterKey后，会在formData中自动删除这个key
        label: '查询时间区间',
        type: 'daterange',
        filterKey: ['startAndEndTime'], // 指定统一查询的keys
    }
]
```
<span style="color: gray; opacity: 0.5;font-size: small">*index.vue*</span>
```js
function mySearch() {
  onSearch(
    null,
    {
       before:(obj)=>{ // 这里处理时间区间值
        obj.customParams?.map(item=>{ // 框架处理后的统一查询参数
          if(item.name == 'startAndEndTime') {
            item.operator= 'BETWEEN'     // 查询匹配方式
            item.values = item.values[0] // 时间区域特殊处理，和后端接口对齐
          }
          ...
        })
        return obj
      }
    }
  )
}
```
[后端参数规则》](/低代码建设/统一查询方式/)


## 列表排序》

<span style="color: gray; opacity: 0.5;font-size: 12px;">*index.vue (放到useTablePage调用之后)*</span>
```js
// 接口默认排序: asc: 排序方式，true-正序，false-倒序
hApi.all.orderBys = [{name: "key1", asc: true}] 
```

<span style="color: gray; opacity: 0.5;font-size: small">*resource.js*</span>
```js
// 需要支持排序的表头 
onColumns = [
  {
    label: '需排序字段',
    prop: 'key1',
    sortable: 'custom', //核心配置：需后端排序的字段
  }
]
```

## 导出功能
>  默认使用策略 `exportV2`

##### 需要框架处理的参数 | 只有细微的参数调整
```js
exportV2:(d)=>{
  goExport(
    { /* 简单的参数添加 */ }, 
    {
      after:(res)=>{ /* 复杂参数在这里处理 返回 */ }
    },
    {
      url: '可选：自定义接口地址',
      fileType: '可选:文件类型',
      fileName: '可选:文件名称',
      specifiedFileName: '可选:强制输入文件名后确认',
    }
  )
}
```
##### 场景2：完全自己处理参数
```js
exportV2:(d)=>{
   // 内部默认处理了下载交互，接口自定义了推荐使用url传入
  useApi.export(
    {...d}, 
    { url: '自定义的接口', fileType: '可选文件类型', fileName: '可选文件名称' }
  )
}




