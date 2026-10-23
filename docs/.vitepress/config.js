export default {
    title: '内部文档', //站点标题
    description: '内部文档',//mate标签description，多用于搜索引擎抓取摘要
    ignoreDeadLinks: true,
    themeConfig: {
        base: '/docs/',
        siteTitle: "内部文档",
        logo: "/logo.png",
        // ignoreDeadLinks: true, // 忽略所有死链
        nav: [
            { 
                text: "PUI",
                items: [
                    { text: "简介", link: '/PUI组件库/' },
                    { text: "PuiTable", link: '/PUI组件库/Table/' },
                    { text: "PuiTablePage", link: '/PUI组件库/TablePage/' },
                    { text: "PuiForm", link: '/PUI组件库/Form/' },
                    { text: "PuiSearch", link: '/PUI组件库/Search/' },
                    { text: "PuiDel", link: '/PUI组件库/Del/' },
                    { text: "配置生成工具", link: '/PUI组件库/配置生成工具/' },
                    { text: "常见问题", link: '/PUI组件库/常见问题/' },
                    
                ]
            },

            {
                text: 'NPM内部仓库',
                items: [
                     { 
                        text: "简介",
                        link: '/npm公司仓库/'
                     },
                     {
                        text: '低代码',
                        items:[
                            { text: "@hy-pui/vue3-code-gen", link: "http://10.2.163.218:4873/-/web/detail/@hy-pui/vue3-code-gen" },
                        ]
                    },
                    { 
                        text: "3D功能",
                        items: [
                            { text: "@hy-3d", link: "/3D功能/@hy-3d/" },
                            // { 
                            //     text: "标绘系统(老版)", 
                            //     link: '/3D功能/标绘系统/',
                            // },
                            { text: "@prism/core", link: "http://10.2.163.218:4873/-/web/detail/@prism/core" },
                        ]
                    },
                    {
                        text: '多媒体',
                        items:[
                            { text: "@hy-media/video-player", link: "/多媒体/videoPlayer/" },
                        ]
                    }
                ]
            },
            {
                text: '低代码建设',
                items:[
                     { text: "简介", link: '/低代码建设/' },
                     { text: "通用配置说明", link: '/低代码建设/des' },
                     { text: "统一查询方式", link: '/低代码建设/统一查询方式/' },
                     { text: 'GUI',   link: '/GUI组件库/' },
                ]
            },
            {
                text: 'AI赋能',
                items:[
                     { text: "MCP服务", link: '/AI赋能/MCP服务' },
                     { text: "hy插件", link: '/AI赋能/hy插件' },
                ]
            },
            
            {
                text: '统一认证',
                items:[
                     { text: "简介", link: '/统一认证/' },
                     { text: "maxkey使用", link: '/统一认证/maxkey使用/' },
                ]
            },
            {
                text: '新企业端框架',
                items:[
                    { text: "框架后端说明", link: '/新企业端框架/' },
                    { text: "框架前端(需登录)", link: 'http://10.2.163.10:30300/enterprise-v8/backend_system_template/src/branch/master/README.md' },
                    { text: "大屏页开发指南", link: '/新企业端框架/大屏页开发指南/' },
                ]
            },
            {
                text: "更多",
                items: [
                    {
                        text: '内部开发地址',
                        items: [
                            { text: "dev Jenkins", link: "http://10.1.34.16:30002/" },
                            { text: "dev SwaggerApi", link: "http://10.1.34.16:30200/doc.html" },
                            { text: "dev maxkey", link: "http://10.1.34.16:30012/maxkey-mgt/" },
                            { text: "dev K8S", link: "http://10.1.34.16:30080/" },
                            { text: "低代码构建平台", link: "http://10.1.34.16:30023/code-gen/" },
                            { text: "内部Npm仓库", link: "http://10.2.163.218:4873/" },
                            { text: "Gitea", link: "http://10.2.163.10:30300/" },
                        ],
                    },
                    {
                        text: '外部地址',
                        items: [
                            { text: "vue3", link: "https://cn.vuejs.org/api/" },
                            { text: "elementPlus", link: "https://element-plus.org/zh-CN/component/table.html" },
                            { text: "tailwindcss", link: "https://tailwindcss.com/docs/padding" },
                        ],
                    },
                ],
            }
            // { text: "博客", link: "/articles/组件库环境搭建" },
        ],
        sidebar: {
            '低代码建设': [
                { text: "简介", link: "/低代码建设/" },
                { text: "低代码平台", link: "/低代码建设/低代码平台/" },
                { text: "PUI", link: "/PUI组件库/" },
                { text: "模版项目", link: "/低代码建设/模版项目/" },
                { text: "已完成项目", link: "/低代码建设/示例项目.md" },
            ],
            '/3D功能/': [
                {
                    text: "简介",
                    link: "/3D功能/",
                },
                {
                    text: "@hy-3d",
                    collapsible: true, //可折叠
                    collapsed: true,
                    link: "/3D功能/@hy-3d/",
                },
                // {
                //     text: "老版标绘系统",
                //     collapsible: true, //可折叠
                //     collapsed: true,
                //     link: "",
                //     items: [
                //         {
                //             text: "说明",
                //             link: '/3D功能/标绘系统/',
                //         },
                //         { text: "配置项", link: "/3D功能/标绘系统/jsons/" },
                //     ],
                // },
            ],
            '/PUI组件库/': [
                {
                    text: "PuiTable | 表格",
                    collapsible: true, //可折叠
                    collapsed: true,
                    link: "",
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/Table/',
                        },
                        {
                            text: "api方式",
                            link: '/PUI组件库/Table/api方式/',
                        },
                        { text: "tableData方式", link: "/PUI组件库/Table/tableData方式" },
                    ],
                },
                {
                    text: "PuiTablePage | 布局表格",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/TablePage/',
                        },
                        {
                            text: "api方式",
                            link: '/PUI组件库/TablePage/api方式',
                        },
                        { text: "tableData方式", link: "/PUI组件库/TablePage/tableData方式" },
                        { text: "仅布局", link: "/PUI组件库/TablePage/slot布局" },
                        
                    ],
                },
                {
                    text: "PuiForm | 表单",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/Form/',
                        },
                        {
                            text: "jsons配置",
                            link: '/PUI组件库/Form/jsons配置',
                        },                        
                    ],
                },
                {
                    text: "PuiSearch | 搜索表单",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/Search/',
                        },
                        {
                            text: "jsons配置",
                            link: '/PUI组件库/Search/jsons配置',
                        },                        
                    ],
                },
                {
                    text: "PuiDel | 删除",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/Del/',
                        }                      
                    ],
                },
                {
                    text: "配置生成工具",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/配置生成工具/',
                        }                      
                    ],
                },
                {
                    text: "常见问题",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/PUI组件库/常见问题/',
                        }                      
                    ],
                },
                
                
                // {
                //     title: 'PUI',
                //     path: '/PUI组件库/'
                // },
            ],
            "/articles/": [
                {
                    text: "组件库源码实现",
                    collapsible: true, //可折叠
                    collapsed: false,
                    items: [
                        {
                            text: "组件库环境搭建",
                            link: "/articles/组件库环境搭建",
                        },
                        { text: "gulp的使用", link: "/articles/gulp的使用" },
                    ],
                },
                {
                    text: "vue教程",
                    items: [
                        {
                            text: "pina和vuex",
                            link: "/articles/pina和vuex",
                        },
                    ],
                },
            ],
            "新企业端": [
                {
                    text: "项目结构",
                    link: "/新企业端/#项目结构"
                },
                {
                    text: "技术栈",
                    link: "/新企业端/#技术栈"
                },
                {
                    text: "代码生成",
                    link: "/新企业端/#代码生成"
                },
                {
                    text: "生产接口",
                    link: "/新企业端/#生产接口"
                },
                {
                    text: "自定义接口",
                    link: "/新企业端/#自定义接口"
                },
                {
                    text: "nacos配置说明",
                    link: "/新企业端/#nacos配置说明"
                },
                {
                    text: "部署发版",
                    link: "/新企业端/#部署发版"
                },
            ],
            "/新企业端框架/大屏页开发指南/": [
                {
                    text: "大屏页开发指南",
                    collapsible: true, //可折叠
                    collapsed: true,
                    items: [
                        {
                            text: "概述",
                            link: '/新企业端框架/大屏页开发指南/',
                        }
                    ],
                },
            ],
            "/AI赋能/": [
                {
                    text: "MCP服务",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: "内部MCP服务",
                            link: '/AI赋能/MCP服务',
                        },
                    ],
                },
                {
                    text: "hy插件",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "hy 插件（Claude Code）",
                            link: '/AI赋能/hy插件',
                        },
                        {
                            text: "hy 插件（Codex）",
                            link: '/AI赋能/hy插件#codex-安装',
                        },
                        {
                            text: "hy 插件（CodeBuddy）",
                            link: '/AI赋能/hy插件#codebuddy-安装',
                        },
                        // {
                        //     text: "三平台命令对照表",
                        //     link: '/AI赋能/hy插件/commands-matrix',
                        // },
                        // {
                        //     text: "常见使用说明",
                        //     link: '/AI赋能/hy插件/usage',
                        // },
                    ],
                },
            ],
        },
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // }
    }

}