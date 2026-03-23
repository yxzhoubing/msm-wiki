import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MSM Wiki",
  description: "MSM Manager - 统一管理平台文档",
  base: '/msm-wiki/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/msm-wiki/logo/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:site_name', content: 'MSM Wiki' }],
  ],

  themeConfig: {
    logo: '/logo/logo-square.svg',
    siteTitle: 'MSM Wiki',

    nav: [
      { text: '首页', link: '/zh/' },
      { text: '快速开始', link: '/zh/guide/install' },
      { text: '使用指南', link: '/zh/guide/basic-config' },
      { text: '路由器集成', link: '/zh/guide/router-integration' },
      {
        text: '参考',
        items: [
          { text: 'CLI 命令', link: '/zh/guide/cli' },
          { text: 'API 参考', link: '/zh/guide/api' },
          { text: '常见问题', link: '/zh/faq/' }
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: '正式版', link: '/zh/guide/releases' },
          { text: 'Beta 版', link: '/zh/guide/releases-beta' }
        ]
      }
    ],

    sidebar: {
      '/zh/': [
        {
          text: '项目介绍',
          items: [
            { text: '什么是 MSM', link: '/zh/introduction/what-is-msm' },
            { text: '核心功能', link: '/zh/introduction/features' }
          ]
        },
        {
          text: '快速安装',
          items: [
            { text: '安装总览', link: '/zh/guide/install' },
            { text: 'Linux 安装', link: '/zh/guide/install-linux' },
            { text: 'macOS 安装', link: '/zh/guide/install-macos' },
            { text: 'Alpine 安装', link: '/zh/guide/install-alpine' },
            { text: 'Docker 安装', link: '/zh/guide/docker' },
            { text: '首次使用', link: '/zh/guide/first-use' },
            { text: '完整使用流程', link: '/zh/guide/complete-workflow' }
          ]
        },
        {
          text: '路由器集成',
          items: [
            { text: '集成概述', link: '/zh/guide/router-integration' },
            { text: 'RouterOS 配置', link: '/zh/guide/routeros' },
            { text: '爱快配置', link: '/zh/guide/ikuai' },
            { text: 'OpenWrt 配置', link: '/zh/guide/openwrt' },
            { text: 'OpenWrt 进阶', link: '/zh/guide/openwrt-advanced' },
            { text: 'UniFi 配置', link: '/zh/guide/unifi' }
          ]
        },
        {
          text: '界面功能',
          collapsed: false,
          items: [
            { text: '使用指南总览', link: '/zh/guide/basic-config' },
            { text: '仪表盘', link: '/zh/guide/dashboard' },
            { text: '设备管理', link: '/zh/guide/device-management' },
            { text: 'MosDNS 管理', link: '/zh/guide/mosdns' },
            { text: 'SingBox 管理', link: '/zh/guide/singbox' },
            { text: 'Mihomo 管理', link: '/zh/guide/mihomo' },
            { text: '配置编辑', link: '/zh/guide/config-editor' },
            { text: '日志查看', link: '/zh/guide/logs' }
          ]
        },
        {
          text: '系统管理',
          collapsed: false,
          items: [
            { text: '进程管理', link: '/zh/guide/process' },
            { text: '用户管理', link: '/zh/guide/user-management' },
            { text: '系统设置', link: '/zh/guide/settings' },
            { text: '系统诊断', link: '/zh/guide/diagnostics' },
            { text: '授权管理', link: '/zh/guide/license' }
          ]
        },
        {
          text: '维护管理',
          collapsed: true,
          items: [
            { text: '版本发布', link: '/zh/guide/releases' },
            { text: 'Beta 版发布', link: '/zh/guide/releases-beta' },
            { text: '更新升级', link: '/zh/guide/update' },
            { text: '备份恢复', link: '/zh/guide/backup-restore' }
          ]
        },
        {
          text: '参考文档',
          collapsed: true,
          items: [
            { text: 'CLI 命令参考', link: '/zh/guide/cli' },
            { text: 'API 参考', link: '/zh/guide/api' }
          ]
        },
        {
          text: '常见问题',
          collapsed: true,
          items: [
            { text: 'FAQ', link: '/zh/faq/' },
            { text: '故障排查', link: '/zh/faq/troubleshooting' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/msm9527/msm-wiki' }
    ],

    footer: {
      message: 'MSM - 统一管理平台',
      copyright: 'Copyright © 2026-present MSM Project'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/msm9527/msm-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  }
})
