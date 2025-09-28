// import React from 'react';
// import zhCN from 'react-intl';
// import { ConfigProvider } from '@alife/magic-basic';
// const Layouts: React.FC<React.PropsWithChildren<any>> = (props) => {
//   return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
// };
// export default Layouts;
// src/layouts/index.tsx
import React from 'react';
import zhCN from 'react-intl';
import { ConfigProvider as MagicFusionConfigProvider } from '@alifd/next';
import { ConfigProvider as MagicBasicConfigProvider } from '@alife/magic-basic';

// 读取用户选择的组件库（需从配置文件获取）
const componentLib = process.env.COMPONENT_LIB || 'magic-basic'; // 默认值

const Layouts: React.FC<React.PropsWithChildren<any>> = (props) => {
  const ConfigProvider =
    componentLib === 'magic-basic' ? MagicBasicConfigProvider : MagicFusionConfigProvider;

  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
};

export default Layouts;
