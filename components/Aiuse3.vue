<template>
  <div class="generate-container">
    <!-- 输入区域 -->
    <div class="input-section">
        <div style="padding: 10px 0;">
            <span>当前模型：</span>
            <el-button :type="(llmModel=='deepseek-r1:8b')?'primary':''" @click="llmModel='deepseek-r1:8b'">deepseek-r1:8b</el-button>
            <el-button :type="(llmModel=='deepseek-coder:latest')?'primary':''" @click="llmModel='deepseek-coder:latest'">deepseek-coder:latest</el-button>
        </div>

        <div>
            <!-- <span>当前接口地址：</span> -->
            <el-input v-model="apiUrl" placeholder="请输入API地址"></el-input>
        </div>
      <el-input
        v-model="userInput"
        type="textarea"
        :rows="4"
        placeholder="请输入需求（如：生成年龄校验规则）"
        @keyup.enter="handleGenerate"
      />
      <el-button type="primary" @click="handleGenerate" :loading="isLoading">
        生成逻辑
      </el-button>
    </div>

    <!-- 结果展示 -->
    <div v-if="generatedCode" class="result-section">
      <h3>生成结果：</h3>

     <!-- <div class="code-container">
        <pre><code class="language-javascript">{{ generatedCode }}</code></pre>
      </div> -->

      <el-card>
        <pre>{{ generatedCode }}</pre>
        <el-button type="success" @click="copyCode" size="small">复制代码</el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { ElMessage, ElInput, ElButton } from 'element-plus';
import "element-plus/dist/index.css"

// import Prism from 'prismjs';
// // 引入需要的语言支持（如 JavaScript、Python 等，按需选择）
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-python';
// // 引入主题样式（可选，这里选 tomorrow 主题）
// import 'prismjs/themes/prism-tomorrow.css';




// prompt = f"""
// 【用户需求】{request.user_input}
// 【约束条件】
// - 输出为Vue3代码（使用Composition API）
// - 包含必要的注释
// - 避免使用实验性API
// 【输出格式】直接输出代码，无需额外说明
// """

// extendsData	扩展数据	object	
// id	主键id	string	
// equipmentCode	设备编号	string	
// boltCode	螺栓编号	string	
// electricity	当前电量	string	
// initAngle	初始角度	string	
// currentAngle	当前角度	string	
// elasticityDegree	松紧程度，0-松，1-紧	string	
// abnormalState	异常状态：0-正常，1-预警，2-报警	string


// 用户输入
const userInput = ref(`
extendsData	扩展数据	object	
id	主键id	string	
equipmentCode	设备编号	string	
boltCode	螺栓编号	string	
electricity	当前电量	string	
initAngle	初始角度	string	
currentAngle	当前角度	string	
elasticityDegree	松紧程度，0-松，1-紧	string	
abnormalState	异常状态：0-正常，1-预警，2-报警	string
`);
// 思考的代码 248713
const thinkCode = ref('');
// 生成的代码
const generatedCode = ref('');
// 加载状态
const isLoading = ref(false);
const apiUrl = ref('http://172.18.254.177:11434/api/generate');
const llmModel = ref('deepseek-r1:8b');

// 生成逻辑
const handleGenerate = async () => {
  if (!userInput.value.trim()) {
    ElMessage.warning('请输入需求描述');
    return;
  }

  isLoading.value = true;

  let prompt = `
【用户需求】 按照以下规则转换成 对象数组，数据为：
${ userInput.value.trim()}
- 每一行提个对象，
- 对象的属性为
    - value为每一行的 英文字段说明
    - label为每行的中文说明, 如何label中有“：”，只取冒号之前的中文说明
    - ele 为元素类型 如何label中有0-*，1-*的格式 就为'Select'否则为'Input',
    - options 为选项数组，当ele为'Select'时才有，options为必填项; 数据来源示例：0-松，1-紧，切分出来为[{label:‘松’,value:0},{label:'紧',value:1}]
【约束条件】
- 输出js 数组格式
- 不要注释
【输出格式】直接输出代码，无需额外说明
      `
// prompt = '你是谁'


  try {
    const response = await axios.post(apiUrl.value, {
      "model": llmModel.value,
      "prompt": prompt,
      "stream": false,  
      "options": {              
        "temperature": 0.7,     
        "max_tokens": 100  
      }
    });
    generatedCode.value = response.data.response;
    // thinkCode.value = response.data.response.think;
    ElMessage.success('生成成功');
  } catch (error) {
    ElMessage.error(`生成失败：${error.response?.data?.detail || '未知错误'}`);
  } finally {
    isLoading.value = false;
  }
};

// 复制代码
const copyCode = () => {
  navigator.clipboard.writeText(generatedCode.value)
    .then(() => ElMessage.success('已复制到剪贴板'))
    .catch(err => ElMessage.error(`复制失败：${err}`));
};
</script>

<style scoped>
.generate-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.generate-container .code-container {
  margin: 20px;
  padding: 15px;
  border-radius: 8px;
  background: #2d2d2d; /* 匹配主题背景 */
}
.generate-containe pre {
  margin: 0;
}
.generate-containe code {
  font-family: 'Fira Code', monospace; /* 推荐等宽字体 */
  font-size: 14px;
}

.input-section {
  margin-bottom: 20px;
}

.input-section .el-textarea {
  margin-bottom: 10px;
}

.result-section {
  margin-top: 20px;
}

.result-section pre {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  max-height: 400px;
  overflow: auto;
}
</style>