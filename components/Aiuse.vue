<template>
  <div class="generate-container">
    <!-- 输入区域 -->
    <div class="input-section">
        <div style="padding: 10px 0;">
            <span>当前模型：</span>
            <el-button size="small" :type="(llmModel=='deepseek-r1:1.5b')?'primary':''" @click="llmModel='deepseek-r1:1.5b'">deepseek-r1:1.5b</el-button>
            <el-button size="small" :type="(llmModel=='deepseek-r1:8b')?'primary':''" @click="llmModel='deepseek-r1:8b'">deepseek-r1:8b</el-button>
            <el-button size="small" :type="(llmModel=='deepseek-coder:latest')?'primary':''" @click="llmModel='deepseek-coder:latest'">deepseek-coder:latest</el-button>
            <el-button size="small" :type="(llmModel=='gemma3:4b')?'primary':''" @click="llmModel='gemma3:4b'">gemma3:4b</el-button>
        </div>

        <div>
            <!-- <span>当前接口地址：</span> -->
            <el-input v-model="apiUrl" placeholder="请输入API地址"></el-input>
        </div>
      <el-input
        v-model="userInput"
        type="textarea"
        :rows="14"
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
// const apiUrl = ref('http://172.18.254.177:11434/api/generate');
// const apiUrl = ref('http://172.18.7.239:11434/api/generate');
const apiUrl = ref('http://172.18.7.239:11434/api/chat');
const llmModel = ref('gemma3:4b');

// 生成逻辑
const handleGenerate = () => {
  if (!userInput.value.trim()) {
    ElMessage.warning('请输入需求描述');
    return;
  }

  isLoading.value = true;
  generatedCode.value = ''; // 清空之前的结果

  try {
    // 创建一个新的 XMLHttpRequest 对象来处理流式响应
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl.value, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // 用于存储解析前的响应文本
    let buffer = '';
    
    // 监听进度事件，实现流式处理
    xhr.onprogress = function(e) {
      // 获取新增的响应数据
      const chunk = e.currentTarget.responseText.substring(buffer.length);
      buffer = e.currentTarget.responseText;
      
      // 按行分割chunk
      const lines = chunk.split('\n');
      
      // 处理每一行数据
      lines.forEach(line => {
        if (line.trim()) {
          console.log('line', line);
          
          try {
            // 解析JSON对象
            const jsonData = JSON.parse(line);
            // // 提取response字段并添加到生成代码中
            // if (jsonData.response !== undefined) {
            //   generatedCode.value += jsonData.response;
            // }
            if (jsonData.message !== undefined) {
              generatedCode.value += jsonData.message.content;
            }
          } catch (error) {
            // 忽略解析错误，可能是不完整的JSON
          }
        }
      });
    };
    
    // 请求完成时的处理
    xhr.onload = function() {
      ElMessage.success('生成成功');
      isLoading.value = false;
    };
    
    // 请求出错时的处理
    xhr.onerror = function() {
      ElMessage.error('生成失败：网络错误');
      isLoading.value = false;
    };
    
    let prompt = `
    中文内容,
[要求] 文字转换成js对象数组 赋值给const formJson = []
[输入内容]${ userInput.value.trim()}
[转换规则]
- 每一行提个对象，
- formJson中对象的属性为(最多这几个)
    - value 必须， 为每一行的 英文字段说明
    - label 必须， 为每行的中文说明, 如果label中有标点符合，label为表单符合之前的内容；如：‘异常状态：0-正常，1-预警，2-报警’ 希望label为‘异常状态’
    - ele 必须， 为元素类型 如果label中有0-*，1-*的格式 就为'Select'否则为'Input',
    - options 可选， 为选项数组，只有 ele为'Select'时才有这个属性; 数据来源示例：0-松，1-紧，切分出来为[{label:‘松’,value:0},{label:'紧',value:1}]

[输出格式]直接输出代码，无需额外说明
      `

         let prompt2 = `
    中文内容,
[要求] 文字转换成js对象数组 赋值给const columns = []
[输入内容]${ userInput.value.trim()}
[转换规则]
- 每一行提个对象，
- columns中对象的属性列举为
    - value 必须， 为每一行的 英文字段说明
    - label 必须， 为每行的中文说明, 如果label中有标点符合，label为表单符合之前的内容；如：‘异常状态：0-正常，1-预警，2-报警’ 希望label为‘异常状态’
    - width 可选， 为数字, 1920除以userInput.value的行数的数字
    - prop 必须， 为元素类型 如果label中有0-*，1-*的格式 就为'Select'否则为'Input',
    - options 可选， 为选项数组，只有 ele为'Select'时才有这个属性; 数据来源示例：0-松，1-紧，切分出来为[{label:‘松’,value:0},{label:'紧',value:1}]

[输出格式]直接输出代码，无需额外说明
      `

      // prompt = '请生成一个ts 的排序算法'

    // 发送请求
    xhr.send(JSON.stringify({
      "model": llmModel.value,
      "messages": [
        {'role': 'system', 'content':'见文本转换成结构化的数据格式'},
        {
          "role": "user",
          "content": prompt
        },
        // {
        //   "role": "assistant",
        //   "content": "以下是下一个任务" // 生成的文本
        // },
        {
          "role": "user",
          "content": prompt2
        }
      ],
      "stream": true,  
      "options": {
        "temperature": 0.1,     
        "max_tokens": 300  
      }
    }));
  } catch (error) {
    ElMessage.error(`生成失败：${error.response?.data?.detail || '未知错误'}`);
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
/* .generate-containe pre {
  margin: 0;
} */
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
  /* max-height: 800px; */
  overflow: auto;
}
</style>