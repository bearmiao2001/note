export default {
    lang: 'zh-CN',
    title: '熊喵Java',
    description: '力求构建Java知识体系',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Java',
                items: [
                    { text: '基础语法', link: '/note/后端/Java/基础语法/' },
                    { text: '面向对象', link: '/note/后端/Java/面向对象/' },
                    { text: '异常机制', link: '/note/后端/Java/异常机制/' },
                    { text: '常用类', link: '/note/后端/Java/常用类/' },
                    { text: '集合', link: '/note/后端/Java/集合/' },
                    { text: 'IO流', link: '/note/后端/Java/IO流/' },
                    { text: '多线程', link: '/note/后端/Java/多线程/' },
                    { text: '反射', link: '/note/后端/Java/反射/' },
                    { text: '网络', link: '/note/后端/Java/网络/' },
                    { text: '新特性', link: '/note/后端/Java/新特性/' },
                ]
            },
            {
                text: 'MySQL',
                items: [
                    { text: 'MySQL基础', link: '/note/后端/MySQL/MySQL基础/' },
                    { text: 'MySQL高级', link: '/note/后端/MySQL/MySQL高级/' }
                ]
            },
            {
                text: 'SSM',
                items: [
                    { text: 'Spring', link: '/note/后端/SSM/Spring/' },
                    { text: 'SpringMVC', link: '/note/后端/SSM/SpringMVC/' },
                    { text: 'MyBatis', link: '/note/后端/SSM/MyBatis/' },
                    { text: 'MyBatis-Plus', link: '/note/后端/SSM/MyBatis-Plus/' }
                ]
            },
            {
                text: 'SpringBoot',
                items: [
                    { text: '快速入门', link: '/note/后端/SpringBoot/快速入门/' },
                    { text: '基础知识', link: '/note/后端/SpringBoot/基础知识/' },
                    { text: '源码分析', link: '/note/后端/SpringBoot/源码分析/' }
                ]
            },
            {
                text: '前端',
                items: [
                    {
                        text: '基础',
                        items: [
                            { text: 'HTML', link: '/note/前端/HTML/' },
                            { text: 'CSS', link: '/note/前端/CSS/' },
                            { text: 'JS', link: '/note/前端/JS/' },
                            { text: 'Nodejs', link: '/note/前端/Nodejs/' }
                        ]
                    },
                    {
                        text: '框架',
                        items: [
                            { text: 'VUE', link: '/note/前端/VUE/' }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/note/后端/Java/基础语法/': [
                {
                    items: [
                        { text: '前言', link: '/note/后端/Java/基础语法/' }
                    ]
                },
                {
                    text: '概述',
                    collapsible: true,
                    items: [
                        { text: '概述', link: '/note/后端/Java/基础语法/概述' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                },
                {
                    text: '数据类型',
                    collapsible: true,
                    items: [
                        { text: '基本数据类型', link: '/note/后端/Java/基础语法/基本数据类型' },
                        { text: '引用数据类型', link: '/note/后端/Java/基础语法/引用数据类型' }
                    ]
                }
            ],
            '/note/前端/HTML/': [
                {
                    items: [
                        { text: 'HTML5语义元素', link: '/note/前端/HTML/HTML5语义元素' },
                        { text: 'HTML5多媒体标签', link: '/note/前端/HTML/HTML5多媒体标签' },
                        { text: 'Canvas', link: '/note/前端/HTML/Canvas' }
                    ]
                }
            ],
            '/note/前端/CSS/': [
                {
                    items: [
                        { text: 'CSS3实现翻转效果', link: '/note/前端/CSS/CSS3实现翻转效果' },
                        { text: 'CSS3新特性', link: '/note/前端/CSS/CSS3新特性' }
                    ]
                }
            ],
            '/note/前端/JS/': [
                {
                    items: [
                        { text: 'JS数据类型', link: '/note/前端/JS/JS数据类型' },
                        { text: 'JS对象', link: '/note/前端/JS/JS对象' },
                        { text: 'JS函数的四种调用方式', link: '/note/前端/JS/JS函数的四种调用方式' },
                        { text: 'JS继承', link: '/note/前端/JS/JS继承' },
                        { text: 'JS原型链、闭包', link: '/note/前端/JS/JS原型链、闭包' }
                    ]
                }
            ]
        },
        outline: 3,
        outlineTitle: '文章目录',
        footer: {
            message: '<a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank">豫ICP备2022018783号-1</a>',
            copyright: 'Copyright © 2020-2022 <a href="">熊喵</a>'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        algolia: {
            appId: 'SOV0Z9MDZ5',
            apiKey: '4111f5fb5ec6f3ed38bd6a309931683f',
            indexName: 'note'
        }
    }
}