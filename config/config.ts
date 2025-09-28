import * as antd from 'antd';
import { defineConfig } from '@alife/koi';
import lodash from 'lodash';

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const DEFINE_API_PREFIX = '/innerApi';
const DEFINE_CLASS_PREFIX = 'lingting';

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  lodash: '_',
  moment: 'moment',
};

Object.keys(antd).forEach((component) => {
  const key = lodash.kebabCase(component);
  externals[`antd/es/${key}/style`] = 'void 0';
  externals[`antd/lib/${key}/style`] = 'void 0';
});

export default defineConfig({
  mfsu: false,
  title: '聆听',
  publicPath: isProduction ? './' : '/',
  dynamicPublicPath: {},
  runtimePublicPath: {},
  historyWithQuery: {},
  reactRouter5Compat: {},
  https: {
    http2: false,
  },
  clientLoader: {},
  esbuildMinifyIIFE: true,
  lessLoader: {
    math: 'always',
  },
  crossorigin: {},
  access: {},
  model: {},
  chainWebpack() {},
  request: {},
  initialState: {},
  mountElementId: 'root-slave',
  base: '/',
  define: {
    DEFINE_API_PREFIX,
    DEFINE_CLASS_PREFIX,
  },
  metas: [
    {
      name: 'keywords',
      content: 'lingting-workbench',
    },
  ],
  qiankun: {
    
  },
  externals,
  styles: isProduction
    ? []
    : [
        '//alifd.alicdn.com/npm/@alife/theme-135688/0.3.11/next.var.min.css',
        '//g.alicdn.com/magic-design/antd-theme/1.0.3/??workbench.base.css,workbench.variable.css,theme-outer.css',
      ],
  headScripts: isProduction
    ? []
    : [
        '//g.alicdn.com/code/lib/??react/17.0.2/umd/react.development.js,react-dom/17.0.2/umd/react-dom.development.js,lodash.js/4.17.21/lodash.min.js,moment.js/2.29.4/moment.min.js,moment.js/2.29.4/locale/zh-cn.min.js',
        '//alifd.alicdn.com/npm/@alifd/next/1.27.26/next.min.js',
      ],
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//, /\/hooks\//],
  },
  styleLoader: {},
  deadCode: {},
  sassLoader: {
    additionalData: `@import "~@alife/theme-135688/variables.scss";`,
  },

  routes: [],
});
