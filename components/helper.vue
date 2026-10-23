<template>
  <div class="cpt-pui-helper">
    <div class="tab-box">
      <button @click="tabChange(2)" :class="{ 'active-tab': activeTab == 2 }">Search配置</button>
      <button @click="tabChange(3)" :class="{ 'active-tab': activeTab == 3 }">Table配置</button>
      <button @click="tabChange(4)" :class="{ 'active-tab': activeTab == 4 }">Form配置</button>
    </div>


    <div class="flex-box" v-if="activeTab == 2">
      <textarea v-model="search.old" class="flex-box-1 textarea"></textarea>
      <button class="go-btn" @click="checkSearch">生成 》</button>
      <textarea v-model="search.new" class="flex-box-1 textarea fontSizeLayer"></textarea>
    </div>

    <div class="flex-box" v-if="activeTab == 3">
      <textarea v-model="table.old" class="flex-box-1 textarea"></textarea>
      <button class="go-btn" @click="checkTable">生成 》</button>
      <textarea v-model="table.new" class="flex-box-1 textarea fontSizeLayer"></textarea>
    </div>

    <div class="flex-box" v-if="activeTab == 4">
      <textarea v-model="formData.old" class="flex-box-1 textarea"></textarea>
      <button class="go-btn" @click="checkFormData">生成 》</button>
      <textarea v-model="formData.new" class="flex-box-1 textarea fontSizeLayer" ></textarea>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 2,
      search: {
        old: `
<el-form-item label="请求地址" prop="requestUrl">
  <el-input v-model="queryParams.requestUrl" placeholder="请输入请求地址" clearable @keyup.enter.native="handleQuery"/>
</el-form-item>
<el-form-item label="用户类型" prop="userType">
  <el-select v-model="queryParams.userType" placeholder="请选择用户类型" clearable size="small">
    <el-option label="请选择字典生成" value="" />
  </el-select>
</el-form-item>
<el-form-item label="创建时间" prop="createTime">
  <el-date-picker v-model="queryParams.createTime" style="width: 240px" value-format="yyyy-MM-dd HH:mm:ss" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']" />
</el-form-item>
`,
        new: ''
      },
      table: {
        old: `<el-table-column label="日志主键" align="center" prop="id" />
<el-table-column label="链路追踪编号" align="center" prop="traceId" />
<el-table-column label="用户编号" align="center" prop="userId" />
<el-table-column label="用户类型" align="center" prop="userType" />
<el-table-column label="应用名" align="center" prop="applicationName" />
<el-table-column label="请求方法名" align="center" prop="requestMethod" />
<el-table-column label="请求地址" align="center" prop="requestUrl" />
<el-table-column label="执行时长" align="center" prop="duration" />
<el-table-column label="结果码" align="center" prop="resultCode" />
<el-table-column label="结果提示" align="center" prop="resultMsg" />
<el-table-column label="创建时间" align="center" prop="createTime" width="180">
  <template v-slot="scope">
    <span>{{ parseTime(scope.row.createTime) }}</span>
  </template>
</el-table-column>
<el-table-column label="操作" align="center" class-name="small-padding fixed-width">
  <template v-slot="scope">
    <el-button size="mini" type="text" icon="el-icon-edit" @click="openForm(scope.row.id)"
              v-hasPermi="['infra:api-access-log:update']">修改</el-button>
    <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)"
              v-hasPermi="['infra:api-access-log:delete']">删除</el-button>
  </template>
</el-table-column>`,
        new: ''
      },
      formData: {
        old: `
<el-form-item label="用户编号" prop="userId">
  <el-input v-model="formData.userId" placeholder="请输入用户编号" />
</el-form-item>
<el-form-item label="用户类型" prop="userType">
  <el-select v-model="formData.userType" placeholder="请选择用户类型">
        <el-option label="请选择字典生成" value="" />
  </el-select>
</el-form-item>
<el-form-item label="应用名" prop="applicationName">
  <el-input v-model="formData.applicationName" placeholder="请输入应用名" />
</el-form-item>
<el-form-item label="开始请求时间" prop="beginTime">
  <el-date-picker clearable v-model="formData.beginTime" type="date" value-format="timestamp" placeholder="选择开始请求时间" />
</el-form-item> `,
        new: ''
      },

      demo: [
        { "label": "用户类型", "key": "userType", "span": 6, "ele": "Select", "placeholder": "请选择", "multiple": false, "options": [] },
        { "label": "应用名", "key": "applicationName", "span": 6, "ele": "Input", "placeholder": "请输入" },
        { "label": "请求方法名", "key": "requestMethod", "span": 6, "ele": "Input", "placeholder": "请输入" },
        { "label": "请求地址", "key": "requestUrl", "span": 6, "ele": "Input", "placeholder": "请输入" }
      ]
    }
  },
  methods: {



    checkSearch() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.search.old, 'text/html');
      // 获取所有 el-form-item 元素
      const formItems = doc.querySelectorAll('el-form-item');
      const result = [];
      formItems.forEach((item) => {
        const obj = {};
        // 判断 type 类型
        const inputElement = item.querySelector('el-input') || null
        const selectElement = item.querySelector('el-select') || null
        const selectDatePicker = item.querySelector('el-date-picker') || null
        if (inputElement) {
          obj.ele = 'Input'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          // obj.placeholder = '请输入'
        } else if(selectElement){
          obj.ele = 'Select'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          // obj.placeholder = '请选择'
          obj.multiple = false
          obj.options = []
        }else if(selectDatePicker){
          obj.ele = 'DatePicker'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          obj.type = 'date',
          obj.format = "yyyy 年 MM 月 dd 日"
        }else{
          obj.ele = ''
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
        }
        result.push(obj);
      });

      // return result;

      console.log(3333, result)
      this.search.new = result.map(col => '\n' + JSON.stringify(col))
    },
    checkTable() {
      // 使用正则表达式匹配每个el-table-column标签及其属性
      const regex = /<el-table-column\s+label="([^"]+)"\s+align="([^"]+)"\s+prop="([^"]+)"/g;
      const matches = this.table.old.matchAll(regex)
      // 将匹配到的结果转换为对象数组
      const arr = Array.from(matches, match => ({
        label: match[1],
        prop: match[3]
      }))
      let colums = [{ type: 'selection' }, ...arr]
      console.log(111111111, colums);

      this.table.new = colums.map(col => '\n' + JSON.stringify(col))
    },

    checkFormData(){
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.formData.old, 'text/html');
      // 获取所有 el-form-item 元素
      const formItems = doc.querySelectorAll('el-form-item');
      const result = [];
      formItems.forEach((item) => {
        const obj = {};
        // 判断 type 类型
        const inputElement = item.querySelector('el-input') || null
        const selectElement = item.querySelector('el-select') || null
        const selectDatePicker = item.querySelector('el-date-picker') || null
        if (inputElement) {
          obj.ele = 'Input'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          obj.propVal = []  
          // obj.placeholder = '请输入'
        } else if(selectElement) {
          obj.ele = 'Select'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          obj.propVal = []  
          // obj.placeholder = '请选择'
          obj.multiple = false
          obj.options = []
          obj.code = ''
        }else if(selectDatePicker) {
          obj.ele = 'DatePicker'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          obj.propVal = []  
          // obj.placeholder = '请选择'
          obj.type = 'datetime'
        }else{
          obj.ele = '--'
          obj.key = item.getAttribute('prop')
          obj.label = item.getAttribute('label')
          obj.span = 8
          obj.propVal = []
        }
        result.push(obj);
      })
      this.formData.new = result.map(col => '\n' + JSON.stringify(col))
    },

    tabChange(num) {
      this.activeTab = num
    }
  },

}
</script>

<style scoped>
.cpt-pui-helper{
  margin-top: 80px;
  margin-bottom: 80px;
}
.flex-box {
  display: flex;
  align-items: center;
  width: 100%;
  transform: translateX(-0%);
  flex-direction: column;
}

.flex-box-1 {
  /* flex: 1; */
  width: 100%;
}

.textarea {
  height: 300px;
  overflow-y: scroll;
  width: 110%;
  border: 1px solid #c2b7ff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 0 12px #f1efff;
  color: #002c47;
  
  outline: 1px dashed #5d41ff;
  transition: all .3s ease-in;
}
.textarea:hover .textarea:active{
  border: 1px dashed #5d41ff;
  box-shadow: 0 0 20px #f1efff;
}
textarea:focus {
  /* border: 2px dashed #5d41ff; */
  outline: 2px dashed #5d41ff;
  box-shadow: 0 0 26px #f1efff;
}

.fontSizeLayer{
  font-size: larger;
}

.go-btn {
  margin: 6px;
  background-color: rgb(61 87 255);
  color: #fffb89;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 20px;
  border: none;
  box-shadow: 0 14px 20px #9994ff;
  margin-bottom: 20px;
  margin-top: 10px;
  transition: all .3s ease-in;
}
.go-btn:hover{
  background-color: rgb(113, 61, 255);
  box-shadow: 0 8px 30px #9994ff;
}

.active-tab {
  color: #fff;
  background-color: rgb(103, 110, 255);
  transition: all .3s ease-in;
}
.active-tab:hover{
  
  background-color: rgb(113, 61, 255);
}

.tab-box {
  padding: 4px 4px;
  margin-bottom: 10px;
  text-align: center;
  /* border-radius: 20px;
  background-color: #f9f9f9; */
}

.tab-box>button {
  font-size: 32px;
  margin: 6px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 6px 10px;
}
</style>