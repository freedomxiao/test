import init from './config';

init();
// 隐藏阿里云控制台遮罩层的函数
const hideAliyunConsoleOverlay = (id = 'AliyunConsoleOverlay') => {
  const elem = document.getElementById(id);
  if (elem?.style) {
    elem.style.display = 'none';
  }
};

export const render = (oldRender: () => void) => {
  hideAliyunConsoleOverlay();
  oldRender();
};

