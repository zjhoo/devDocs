## 枚举值的使用hook

> 实现目标：
    - 接口枚举值 保持相应式、支持list、showName、symbol 属性访问， getList、getLabel、getValue方法
    - 静态枚举值 不需要响应式，其它同上




> 基础枚举对象 使用方式

```js
const dict = new DictionaryBase('状态', [
    {value: 1, label: '启用', symbol: 'ENABLED'}, // symbol必须唯一，可以不声明
    {value: 0, label: '禁用', symbol: 'DISABLED'}
]);

dict.ENABLED; // 返回 1 
dict.DISABLED; // 返回 0

dict.getList() //[{label: '', value: ''}]

dict.getLabel(0) // '禁用'
dict.getValue('禁用') // 0
```



> 具体页面中使用 index.vue 

```js
const distsStatic = ['status'] // 静态字典
const distsApi = ['control_node', 'alarm_type', 'task_type'] // 接口动态字典
const alarm_type = ref([])    // 必须使用响应式对象接收
const control_node = ref([])  // 必须使用响应式对象接收

formJsons.value = onFormJsons({ handleSubmit, distEnums:{ alarm_type } })
columns.value = onColumns({optBtnClick, handleSubmit})
searchJson.value = onSearchJsons({alarm_type, })
/************************************* 个性化的逻辑建议写到这里 *******************************/
onMounted(async ()=>{
  let aa = getStaticDicts(distsStatic)
  // console.log('[静态字典值]： ', aa, aa.status.getList(), aa.status.list);
  
  distEnums = await getApiDicts(distsApi)
  // console.log("[动态字典值]使用useEnum:",distEnums, distEnums.alarm_type, distEnums.control_node.list)
  alarm_type.value = distEnums.alarm_type.list
  control_node.value = distEnums.control_node.list
})
```