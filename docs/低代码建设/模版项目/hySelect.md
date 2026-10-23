#### 基于业务的下拉列表组件：

- [最新文档地址](http://10.2.163.10:30300/enterprise-v8/backend_system_template/src/branch/master/src/components/hySelect/README.md)

需要在 .env 文件中配置：

```js

# 后台系统管理-基础路由（用于下拉企业，部门，用户使用）
VITE_SYSTEM_BASE_URL = 'http://10.1.34.16:30014/api/'

```

---

> 本文件夹涉及以下几个下拉组件：

| 文件名       | 说明             | 组件名称       | 备注 |
| ------------ | ---------------- | -------------- | ---- |
| Company.vue  | 企业下拉组件     | CompanySelect  |      |
| Dept.vue     | 部门下拉组件     | DeptSelect     |      |
| DeptTree.vue | 部门树形下拉组件 | DeptTreeSelect |      |
| User.vue     | 用户下拉组件     | UserSelect     |      |
| UserTree.vue | 用户树形下拉组件 | UserTreeSelect |      |
| Select.vue   | 通用下拉组件     | CustomSelect   |      |

** 全局注册时，会启用上面列表中的 组件名称，如：
```html
<CustomSelect /><CompanySelect />
``` 
等 **

以下是各个组件的使用实例：

组件 **CompanySelect** 使用实例：

```html
<CompanySelect v-model="form.companyId" :query="bquery" />
```

组件 **DeptSelect** 使用实例：

```html
<DeptSelect v-model="form.deptId" />
```

组件 **DeptTreeSelect** 使用实例：

```html
<DeptTreeSelect v-model="form.deptId" check-strictly />
```

组件 **UserSelect** 使用实例：

```html
<UserSelect v-model="form.userId" />
```

组件 **UserTreeSelect** 使用实例：

```vue
<UserTreeSelect v-model="form.userId" />
```

组件 **CustomSelect** 使用实例：

```html
// 模式一：Options
<CustomSelect v-model="form.cbh1"
    :options="[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
    ]" />

// 模式二：api
<CustomSelect v-model="form.cbh2"
    :api="{ 
        url: '/system/user/page', 
        method: 'post', 
        config: { 
            baseURL: 'http://10.1.34.16:30014/api/' 
        }, 
        after: handerAfter 
    }"
    :props="{ 
        label: 'userName', 
        value: 'id' 
    }" 
/>

// 模式三：func
<CustomSelect v-model="form.cbh3" 
    :func="{
        method: getUserList,
    }" 
    :props="{ 
        label: 'userName', 
        value: 'id' 
    }" 
/>

```
