declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

interface Window {
  AESPluginEvent?: any;
  ALIYUN_CONSOLE_I18N_MESSAGE: Record<string, string>;
  ALIYUN_CONSOLE_GLOBAL: {
    iconUrl: {
      lingtingUrl: string;
      cseUrl: string;
    };
    qiankun: any;
  } & Record<string, string>;
  ALIYUN_CONSOLE_CONFIG: any;
}
