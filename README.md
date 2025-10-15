## Getting Started

### 开发调试

设置源：

XSwitch 配置
```
{
  "proxy": [
    [
      "https://(dev\\.)?g.alicdn.com/gts-fe/standard/(.*?)/(.*.(js|css))$",
      "https://127.0.0.1:8080/$3"
    ],
    [
      "https://(pre-)?standard.console.aliyun.com/(.*.(js|css))$",
      "https://127.0.0.1:8080/$2"
    ]
  ],
}
```

### Koi 脚手架
详细了解请看 https://fe.gts.work/koi

开发调试更多详见：https://yuque.antfin.com/docs/share/84bd5637-0109-4234-bab8-4a166922ac17?#

### 目录结构约定
``` typescript
├── config
│   └── config.ts // umi配置文件
├── mock
│   └── *.ts // mock文件
├── public
│   └── *.* // 此目录下所有文件会被 copy 到输出路径
└── src
    ├── assets
    │   └── *.* // 放静态文件
    ├── biz // 通用业务组件。只在页面内使用的放页面下
    ├── components // 通用UI组件。只在页面内使用的放页面下
    ├── config // 一些运行时配置，goc-request配置的api、gcc-forms注册组件等
    │   ├── api.ts // goc-request配置的api
    │   └── *.ts // 其他运行时配置
    ├── constants // 全局常量
    ├── layouts
    │   └── index.tsx // 约定式路由时的全局布局文件
    ├── models
    │   └── *.ts // 全局状态
    ├── pages
    │   ├── 404.ts // 约定式路由的兜底404页面
    │   ├── index.less
    │   └── index.tsx // 首页
    ├── services
    │   └── *.ts // 分模块的请求
    ├── themes // 放less变量和其他主题样式
    ├── utils // 通用工具函数
    ├── app.ts // umi运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
    └── global.less // 全局样式文件
```

更新依赖并重启
``` sh
yarn && git commit -am "chore: update dependencies" && git push && yarn start:proxy
```