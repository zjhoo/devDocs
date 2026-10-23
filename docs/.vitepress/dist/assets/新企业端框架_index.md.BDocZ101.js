import{_ as a,c as i,o as n,ae as p}from"./chunks/framework.B3QT7qQe.js";const l="/assets/img.CEl_RyIU.png",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"新企业端框架/index.md","filePath":"新企业端框架/index.md"}'),e={name:"新企业端框架/index.md"};function t(h,s,k,r,E,d){return n(),i("div",null,s[0]||(s[0]=[p('<h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><h2 id="_1-项目结构图" tabindex="-1">1. 项目结构图 <a class="header-anchor" href="#_1-项目结构图" aria-label="Permalink to &quot;1. 项目结构图&quot;">​</a></h2><p><img src="'+l+`" alt="img.png"></p><h2 id="_2-目录结构" tabindex="-1">2. 目录结构 <a class="header-anchor" href="#_2-目录结构" aria-label="Permalink to &quot;2. 目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enterprise-demo</span></span>
<span class="line"><span>├─adapter</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  └─main</span></span>
<span class="line"><span>│  │      └─java</span></span>
<span class="line"><span>│  │          └─com</span></span>
<span class="line"><span>│  │              └─demo</span></span>
<span class="line"><span>│  │                  └─adapter</span></span>
<span class="line"><span>│  │                      ├─openapi</span></span>
<span class="line"><span>│  │                      └─web</span></span>
<span class="line"><span>├─app</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  ├─main</span></span>
<span class="line"><span>│  │  │  └─java</span></span>
<span class="line"><span>│  │  │      └─com</span></span>
<span class="line"><span>│  │  │          └─demo</span></span>
<span class="line"><span>│  │  │              └─app</span></span>
<span class="line"><span>│  │  │                  ├─cmd</span></span>
<span class="line"><span>│  │  │                  │  └─qry</span></span>
<span class="line"><span>│  │  │                  ├─convert</span></span>
<span class="line"><span>│  │  │                  └─service</span></span>
<span class="line"><span>├─client</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  └─main</span></span>
<span class="line"><span>│  │      └─java</span></span>
<span class="line"><span>│  │          └─com</span></span>
<span class="line"><span>│  │              └─demo</span></span>
<span class="line"><span>│  │                  └─client</span></span>
<span class="line"><span>│  │                      ├─api</span></span>
<span class="line"><span>│  │                      ├─dto</span></span>
<span class="line"><span>│  │                      │  ├─cmd</span></span>
<span class="line"><span>│  │                      │  │  └─qry</span></span>
<span class="line"><span>│  │                      │  └─data</span></span>
<span class="line"><span>│  │                      └─vo</span></span>
<span class="line"><span>├─deploy</span></span>
<span class="line"><span>├─domain</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  └─main</span></span>
<span class="line"><span>│  │      └─java</span></span>
<span class="line"><span>│  │          └─com</span></span>
<span class="line"><span>│  │              └─demo</span></span>
<span class="line"><span>│  │                  └─domain</span></span>
<span class="line"><span>│  │                      ├─gateway</span></span>
<span class="line"><span>│  │                      └─model</span></span>
<span class="line"><span>├─infrastructure</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  └─main</span></span>
<span class="line"><span>│  │      ├─java</span></span>
<span class="line"><span>│  │      │  └─com</span></span>
<span class="line"><span>│  │      │      └─demo</span></span>
<span class="line"><span>│  │      │          └─infrastructure</span></span>
<span class="line"><span>│  │      │              ├─config</span></span>
<span class="line"><span>│  │      │              ├─listener</span></span>
<span class="line"><span>│  │      │              └─repository</span></span>
<span class="line"><span>│  │      │                  ├─convert</span></span>
<span class="line"><span>│  │      │                  ├─dataobject</span></span>
<span class="line"><span>│  │      │                  ├─gatewayimpl</span></span>
<span class="line"><span>│  │      │                  ├─mapper</span></span>
<span class="line"><span>│  │      │                  └─service</span></span>
<span class="line"><span>│  │      │                      └─impl</span></span>
<span class="line"><span>│  │      └─resources</span></span>
<span class="line"><span>│  │          └─mapper</span></span>
<span class="line"><span>├─starter</span></span>
<span class="line"><span>│  ├─src</span></span>
<span class="line"><span>│  │  ├─main</span></span>
<span class="line"><span>│  │  │  ├─java</span></span>
<span class="line"><span>│  │  │  │  └─com</span></span>
<span class="line"><span>│  │  │  │      └─demo</span></span>
<span class="line"><span>│  │  │  │          └─starter</span></span>
<span class="line"><span>│  │  │  │              ├─exception</span></span>
<span class="line"><span>│  │  │  │              └─interceptor</span></span>
<span class="line"><span>│  │  │  └─resources</span></span></code></pre></div><h2 id="_3-项目层级说明" tabindex="-1">3. 项目层级说明 <a class="header-anchor" href="#_3-项目层级说明" aria-label="Permalink to &quot;3. 项目层级说明&quot;">​</a></h2><p>3.1适配层（Adapter Layer）</p><p>负责对前端展示（web，wireless，wap）的路由和适配，对于传统B/S系统而言，adapter就相当于MVC中的controller；</p><p>3.2 应用层（Application Layer）</p><p>主要负责获取输入，组装上下文，参数校验，调用领域层做业务处理，如果需要的话，发送消息通知等。层次是开放的，应用层也可以绕过领域层，直接访问基础实施层；</p><p>3.3 领域层（Domain Layer）</p><p>主要是封装了核心业务逻辑，并通过领域服务（Domain Service）和领域对象（Domain Entity）的方法对App层提供业务实体和业务逻辑计算。领域是应用的核心，不依赖任何其他层次；</p><p>3.4 基础实施层（Infrastructure Layer）</p><p>主要负责技术细节问题的处理，比如数据库的CRUD、搜索引擎、文件系统、分布式服务的RPC等。此外，领域防腐的重任也落在这里，外部依赖需要通过gateway的转义处理，才能被上面的App层和Domain层使用。</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>框架主要用到的技术栈举例如下：</p><ul><li>spring 生态中的 spring boot spring cloud作为项目的基础框架</li><li>nacos 作为配置中心和注册中心</li><li>mybatis-flex 作为orm框架</li><li>xxl-job</li><li>其他的技术都是可以通过组件的方式来进行引入使用</li></ul><h2 id="代码生成" tabindex="-1">代码生成 <a class="header-anchor" href="#代码生成" aria-label="Permalink to &quot;代码生成&quot;">​</a></h2><p>代码生产的类放在 CodeGenTest 类下，全局搜索出来即可</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//配置数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HikariDataSource dataSource </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HikariDataSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataSource.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setJdbcUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jdbc:mysql://xxxx:xxxx/xxxx?characterEncoding=utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataSource.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUsername</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataSource.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//模块名的前缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String modulePrefix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//业务包名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String busiPackage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//创建配置内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//linux环境下代码生成路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GlobalConfig globalConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Codegen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createGlobalConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">generate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhangsan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Windows环境下代码生成路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//GlobalConfig globalConfig = createGlobalConfig(&quot;D:\\\\generate&quot;, &quot;zhangsan&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTablePrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t_&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGenerateTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t_pr_demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TableConfig tableConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TableConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInsertListenerClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CustomInsertListener.class)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUpdateListenerClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CustomUpdateListener.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTableConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tableConfig);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//通过 datasource 和 globalConfig 创建代码生成器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomGenerator generator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Codegen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataSource, globalConfig);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomGlobalConfig customGlobalConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCustomGlobalConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">customGlobalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBusiPackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(busiPackage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">customGlobalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setModulePrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modulePrefix);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册构建器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Codegen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerAllGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(globalConfig, customGlobalConfig);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//生成代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打开生成的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Desktop.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDesktop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(globalConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSourceDir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span></code></pre></div><h2 id="生产接口" tabindex="-1">生产接口 <a class="header-anchor" href="#生产接口" aria-label="Permalink to &quot;生产接口&quot;">​</a></h2><ol><li>创建数据表</li><li>使用代码生成器生产代码</li><li>复制到项目中</li></ol><p>经过如上步骤我们可以获取到这个表实体对应的一系列接口</p><h2 id="自定义接口" tabindex="-1">自定义接口 <a class="header-anchor" href="#自定义接口" aria-label="Permalink to &quot;自定义接口&quot;">​</a></h2><p>代码的调用链路如下：</p><p>adapter-&gt;app-[domain(可选)]-&gt;infrastructure</p><p>正常我们自定义接口有两个方面</p><h2 id="_1-重写已经有的接口" tabindex="-1">1. 重写已经有的接口 <a class="header-anchor" href="#_1-重写已经有的接口" aria-label="Permalink to &quot;1. 重写已经有的接口&quot;">​</a></h2><pre><code>1. 重写分页接口
    1. 重新app层的QryExe
        
        在app层创建一个QryExe, 只要是查询相关都必须遵从结尾, 将类创建到com.xxx.app.cmd.qry 包下, 比如叫 DemoCustomPageQryExe
        \`\`\`
         /**
           * DemoCustomPageQryExe
           *
           * @author linc
           * @since 2025/7/25 18:00
           */
         @Component
         @AllArgsConstructor
         public class DemoCustomPageQryExe {

             /**
               * 命令执行
               * @param cmd cmd
               * @return List&lt;PrDemoVO&gt;
               */
             public PageResponse&lt;PrDemoVO&gt; execute(PrDemoPageQry cmd) {
                 return xxxx;
             }

         }
         // 然后在对应实体的serviceImpl中重新page方法
         private final DemoCustomPageQryExe customPageQryExe;

         @Override
         public PageResponse&lt;PrDemoVO&gt; page(PrDemoPageQry cmd) {
              return customPageQryExe.execute(cmd);
         }
       \`\`\`
        按照如上逻辑，定义一起其他的CmdExe 或者 QryExe 也是这种方式， CmdExe 结尾表示非查询类命令实现，QryExe 结尾表示查询类命令实现           

    2. 替换sql语句
     
        比如我们的需求只是需要重新查询的sql，我们可以做如下操作
        \`\`\`
        // 找到对应实体的BaseQryExe, 比如我这里的实体是PrDemo, 那么找到类PrDemoBaseQryExe
        @Component
        public class PrDemoBaseQryExe extends BaseQryExe&lt;PrDemoVO, PrDemoDTO, PrDemoModel, PrDemoDO, PrDemoAppConvert, IPrDemoRepoService, PrDemoOneQry, PrDemoPageQry, PrDemoExcelExportQry&gt; {
        
            @Override
            public boolean customPageQueryWrapper(QueryWrapper queryWrapper, TableInfo tableInfo, PrDemoPageQry cmd) {
                // 自定义分页查询条件或者sql， 以下为示例, QueryWrapper的使用方式可以参阅官方文档
                queryWrapper.where(PrDemoDOTableDef.PR_DEMO_DO.NAME.like(cmd.getName()))
                        .and(PrDemoDOTableDef.PR_DEMO_DO.REMARK.likeLeft(cmd.getRemark()));
                return true;
            }
        }
        // 如果我们需要重新定义返回的VO对象， 此时我们需要想第一点一样重新page方法
        @Service
        @AllArgsConstructor
        public class PrDemoServiceImpl extends ServiceImpl&lt;PrDemoVO, PrDemoDTO, PrDemoModel, PrDemoDO, PrDemoAppConvert, IPrDemoRepoService, PrDemoBaseCmdExe, PrDemoBaseQryExe, PrDemoOneQry, PrDemoPageQry, PrDemoExcelExportQry&gt; implements IPrDemoService {
        
            @Override
            public PageResponse&lt;PrDemoVO&gt; page(PrDemoPageQry cmd) {
                // 调用指定响应类进行查询
                return baseQryExe.executePageQryAs(cmd, PrDemoVO.class);
            }
        }
       
       \`\`\`
        按照上面的描述，就可以完成自定义分页接口了

2. 重写新增接口

    新增接口的定义和分页类似，框架提供了对应实体类的BaseCmdEx, 例如PrDemoBaseCmdExe，重新编写一个CmdExe的方式不在赘述，下面讲一下重写新增方法
    
    找到类PrDemoBaseCmdExe, 重新对应的方法
    \`\`\`
   /**
   * PrDemoBaseCmdExe
   *
   * @author linc
   * @since 2025/2/28 16:24
   */
     @Component
     public class PrDemoBaseCmdExe extends BaseCmdExe&lt;PrDemoVO, PrDemoDTO, PrDemoModel, PrDemoDO, PrDemoAppConvert, IPrDemoRepoService&gt; {

             @Override
             public Object executeAdd(BaseCmd&lt;PrDemoDTO&gt; cmd) {
                 return super.executeAdd(cmd);
             }
     }
      \`\`\`
   比如重写修改，删除等也是相同的做法
3. 重写其他方法
    
   框架主要提供了两个类：BaseCmdExe 和 BaseQryExe ,里面提供了新增，修改，删除，导入，导出，分页，列表查询等方法，如果框架的实现不符合我们需求，那么我们就需要重新定义
</code></pre><h2 id="_2-完全自定义" tabindex="-1">2. 完全自定义 <a class="header-anchor" href="#_2-完全自定义" aria-label="Permalink to &quot;2. 完全自定义&quot;">​</a></h2><pre><code>完全自定义就是自己建一个CmdExe 或者 QryExe 然后在 ServiceImpl中进行调用
</code></pre><h2 id="_3-重写导出" tabindex="-1">3. 重写导出 <a class="header-anchor" href="#_3-重写导出" aria-label="Permalink to &quot;3. 重写导出&quot;">​</a></h2><p>默认的导出方法是基于分页查询的sql进行导出，我们日常开发中可能会遇到替换sql, 或者重写将数据写入到excel的逻辑</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参照重写分页查询sql的方法重写方法 customExportQueryWrapper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customExportQueryWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(QueryWrapper queryWrapper, TableInfo tableInfo, PrDemoExcelExportQry cmd) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 重写后返回true, 否则不生效</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果需要重写数据写入到excel的逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customExportDataWrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ExcelWriter excelWriter, WriteSheet writeSheet) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 重写导出逻辑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-自定义导出" tabindex="-1">4. 自定义导出 <a class="header-anchor" href="#_4-自定义导出" aria-label="Permalink to &quot;4. 自定义导出&quot;">​</a></h2><p>有些时候，我们需要单独写一个导出接口，可参考如下方式</p><p>baseQryExe 提供了一个 静态方法executeCustomExcelExport, 用于自定义导出方法</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下为举例包保责任制导出， 此处使用了 BaseQryExe.executeCustomExcelExport 自定义了导出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//1. 定义QryExe</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 包保责任制导出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> linc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@since</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 2025/6/16 13:43</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AllArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PrRiskAnalysisTaskDefendExcelExportQryExe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PrRiskAnalysisTaskBaseQryExe taskBaseQryExe;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 命令执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> cmd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> cmd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PrRiskAnalysisTaskExcelExportQry </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, OutputStream </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">outputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        BaseQryExe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">executeCustomExcelExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outputStream, cmd, pair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ExcelWriter excelWriter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            WriteSheet writeSheet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            PrRiskAnalysisTaskPageQry pageQry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PrRiskAnalysisTaskAppConvert.INSTANCE.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toPageQry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            pageQry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTenantId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SecurityUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTenantId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            pageQry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPageIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            pageQry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPageSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Page&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PrRiskAnalysisTaskVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; page;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                page </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> taskBaseQryExe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryPage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pageQry);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PrRiskAnalysisTaskVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; records </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRecords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                List&lt;List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; dataList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (CollUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(records)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    // 数据处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    dataList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> records.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTroubleshootContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCheckCycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;天&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Objects.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nonNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEffectiveTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            String format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTimeUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEffectiveTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 写入到excel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                excelWriter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataList, writeSheet);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 设置下一页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                pageQry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPageIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pageQry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPageIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasNext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 定义service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defendExcelExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PrRiskAnalysisTaskExcelExportQry cmd, OutputStream out) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskDefendExcelExportQryExe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd, out);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 定义controller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;包保责任制任务导出&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PostMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;defend/excel/export&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defendExcelExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PrRiskAnalysisTaskExcelExportQry cmd, HttpServletResponse response) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    customExcelExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd, response, pair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> service.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defendExcelExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), pair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="5"><li>customParams 在自行定义查询的使用</li></ol><p>在新版本框架中，前端会使用 customParams 来自定义参数，可以自行指定sql 操作符如 = like &gt; 等, 但是在某些特殊场景下，需要覆盖重新查询语句，如重写customPageQueryWrapper 来改变查询语句和查询条件，这个时候默认的解析 customParams 的方法就会失效，此处对如何在自定义查询的方法中如何使用 customParams 进行说明</p><p>示例中，通过调用 BaseQryExe.getConditionAndConnect, 传入 自定义参数列表，以及表信息，QueryTable, 还要要将条件拼接到哪个 QueryCondition 上，就可以获取一个拼接好的条件</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QueryCondition whereCondition </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QueryCondition.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BaseQryExe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getConditionAndConnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCustomParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), tableInfo, t1, whereCondition);</span></span></code></pre></div><p>此处传入t1, 是因为需要生成的sql 会自动拼接为 t1.columnName 的方式， 然后最下方又自定义了两个查询条件，没有使用customParams</p><p>示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customPageQueryWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(QueryWrapper queryWrapper, TableInfo tableInfo, PrDutySchedulePageQry cmd) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PrDutyScheduleDOTableDef t1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PrDutyScheduleDOTableDef.PR_DUTY_SCHEDULE_DO.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PrDutyScheduleStaffDOTableDef t2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PrDutyScheduleStaffDOTableDef.PR_DUTY_SCHEDULE_STAFF_DO.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 构建查询语句</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    queryWrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t1.DEFAULT_COLUMNS)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leftJoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t1.ID.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2.SCHEDULE_ID));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 计算查询条件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    QueryCondition whereCondition </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QueryCondition.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BaseQryExe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getConditionAndConnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCustomParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), tableInfo, t1, whereCondition);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 拼接其他需要特殊处理的查询条件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    whereCondition.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2.USER_TYPE.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PrDutyScheduleStaffDO.UserTypeEnum.LEADER.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), StrUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLeaderDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2.USER_ID.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLeaderDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), StrUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLeaderDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()))));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    whereCondition.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2.USER_TYPE.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PrDutyScheduleStaffDO.UserTypeEnum.STAFF.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), StrUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t2.USER_ID.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), StrUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cmd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDutyStaffUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()))));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    queryWrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(whereCondition);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="nacos配置说明" tabindex="-1">nacos配置说明 <a class="header-anchor" href="#nacos配置说明" aria-label="Permalink to &quot;nacos配置说明&quot;">​</a></h2><p>nacos 配置分为两块，公共配置和项目自己的配置，bootstrap的配置如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: 应用名称</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      config:</span></span>
<span class="line"><span>        server-addr: \${NACOS_SERVER_ADDR:10.1.34.16:30848}</span></span>
<span class="line"><span>        username: \${NACOS_USERNAME:nacos}</span></span>
<span class="line"><span>        password: \${NACOS_PASSWORD:HYzh248713}</span></span>
<span class="line"><span>        namespace: \${NACOS_NAMESPACE:enterprise-v8-test}</span></span>
<span class="line"><span>        file-extension: yaml</span></span>
<span class="line"><span>        group: \${spring.application.name}</span></span>
<span class="line"><span>        shared-configs:</span></span>
<span class="line"><span>          - data-id: public.yaml</span></span>
<span class="line"><span>            group: DEFAULT_GROUP</span></span>
<span class="line"><span>            refresh: true</span></span>
<span class="line"><span>          - data-id: redis.yaml</span></span>
<span class="line"><span>            group: DEFAULT_GROUP</span></span>
<span class="line"><span>            refresh: true</span></span>
<span class="line"><span>          - data-id: datasource.yaml</span></span>
<span class="line"><span>            group: DEFAULT_GROUP</span></span>
<span class="line"><span>            refresh: true</span></span>
<span class="line"><span>          - data-id: app-public.yaml</span></span>
<span class="line"><span>            group: DEFAULT_GROUP</span></span>
<span class="line"><span>            refresh: true</span></span></code></pre></div><p>在公共配置中，redis.yaml 配置了redis的连接信息，datasource.yaml 配置了所有的数据库连接信息</p><p>按照上面的配置，在nacos的enterprise-v8-test空间下，会有一个和应用名相同的独立配置文件， 例如双控的配置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># mybatis-flex 配置</span></span>
<span class="line"><span>mybatis-flex:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    mysql:</span></span>
<span class="line"><span>      type: hikaricp</span></span>
<span class="line"><span>      url: \${datasource.mysql.url}</span></span>
<span class="line"><span>      username: \${datasource.mysql.username}</span></span>
<span class="line"><span>      password: \${datasource.mysql.password}</span></span>
<span class="line"><span>    postgresql:</span></span>
<span class="line"><span>      type: hikaricp</span></span>
<span class="line"><span>      url: \${datasource.postgresql-enterprise-v8-pg.url}</span></span>
<span class="line"><span>      username: \${datasource.postgresql-enterprise-v8-pg.username}</span></span>
<span class="line"><span>      password: \${datasource.postgresql-enterprise-v8-pg.password}</span></span>
<span class="line"><span>server:</span></span>
<span class="line"><span>  port: 2002</span></span>
<span class="line"><span># 调度中心配置</span></span>
<span class="line"><span>xxl:</span></span>
<span class="line"><span>  job:</span></span>
<span class="line"><span>    enabled: \${XXL_JOB_ENABLED:false}</span></span>
<span class="line"><span>    executor:</span></span>
<span class="line"><span>      appname: \${spring.application.name}</span></span>
<span class="line"><span>      # 多网卡时可指定ip</span></span>
<span class="line"><span>      #ip: 10.0.10.30</span></span>
<span class="line"><span>      access-token: default_token</span></span>
<span class="line"><span>    admin:</span></span>
<span class="line"><span>      addresses: http://\${XXL_JOB_ADMIN_HOST:10.1.34.16}:\${XXL_JOB_ADMIN_PORT:30015}/xxl-job-admin/</span></span>
<span class="line"><span>      #addresses: http://xxl-job-admin:8080/xxl-job-admin/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># kafka</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  kafka:</span></span>
<span class="line"><span>    # 指定一个属性用于启用kafka</span></span>
<span class="line"><span>    enabled: \${KAFKA_ENABLED:false}</span></span>
<span class="line"><span>    bootstrap-servers: kafka.kafka:9092</span></span>
<span class="line"><span>    producer:</span></span>
<span class="line"><span>      key-serializer: org.apache.kafka.common.serialization.StringSerializer</span></span>
<span class="line"><span>      value-serializer: org.apache.kafka.common.serialization.StringSerializer</span></span>
<span class="line"><span>      # 失败重试次数</span></span>
<span class="line"><span>      retries: 3</span></span>
<span class="line"><span>      # 确保消息完整写入副本</span></span>
<span class="line"><span>      acks: all</span></span>
<span class="line"><span>    consumer:</span></span>
<span class="line"><span>      # 启动多实例时，每个实例的group-id必须相同</span></span>
<span class="line"><span>      group-id: \${spring.application.name}_group</span></span>
<span class="line"><span>      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer</span></span>
<span class="line"><span>      value-deserializer: org.apache.kafka.common.serialization.StringDeserializer</span></span>
<span class="line"><span>      # 关闭自动提交偏移量，消费完成后，手动提交</span></span>
<span class="line"><span>      enable-auto-commit: false</span></span>
<span class="line"><span>      properties:</span></span>
<span class="line"><span>        # 使用协作粘性策略, 需要kafka版本&gt;=2.4.0</span></span>
<span class="line"><span>        partition-assignment-strategy: org.apache.kafka.clients.consumer.CooperativeStickyAssignor</span></span>
<span class="line"><span>        # 当没有偏移量时，从最早的位置开始消费</span></span>
<span class="line"><span>        auto-offset-reset: earliest</span></span>
<span class="line"><span>        # 增加会话超时时间（避免频繁重平衡）</span></span>
<span class="line"><span>        session.timeout.ms: 30000</span></span>
<span class="line"><span>        heartbeat.interval.ms: 10000</span></span>
<span class="line"><span>    listener:</span></span>
<span class="line"><span>      # 手动提交模式</span></span>
<span class="line"><span>      ack-mode: manual</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 国家专项任务检查</span></span>
<span class="line"><span>gov-task-api:</span></span>
<span class="line"><span>  base-url: https://data-sk-wh.scasst.net</span></span>
<span class="line"><span>  username: MSadmin</span></span>
<span class="line"><span>  password: MSadmin.123</span></span>
<span class="line"><span>  company-code: 511410025</span></span></code></pre></div><p>配置中会引用datasource.yaml中配置的数据库连接信息</p><p>如果本地开发要测试，比如要把服务启动到自己的命名空间中，则在starter的resource目录下，创建 application.yaml, 可以覆盖nacos中的配置， application.yaml目录不要提交到代码仓库中</p><h2 id="部署发版" tabindex="-1">部署发版 <a class="header-anchor" href="#部署发版" aria-label="Permalink to &quot;部署发版&quot;">​</a></h2><p>目前部署都是基于jenkin打包自动调用k8s的接口进行发布，我们主要做的就是初始化任务，这个过程可以交给项目初始化的人员进行统一处理， 开发人员要做的就是登录jenkins找到对应任务进行构建就行</p>`,55)]))}const y=a(e,[["render",t]]);export{c as __pageData,y as default};
