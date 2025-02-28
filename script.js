const header = document.getElementById('header');
const body = document.getElementById('body');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();

  if (month === 1 && day === 1) {
    body.classList.add('mdui-theme-primary-red');
    body.classList.add('mdui-theme-accent-red');
    header.textContent = `哎...过年啦？哎呀别管几点了，随鹭办祝您${year}新年快乐！`;
  } else {
    body.classList.add('mdui-theme-primary-indigo');
    body.classList.add('mdui-theme-accent-indigo');
    if (hour <= 5) header.textContent = `随鹭办欢迎...欸？您是在睡觉的时候梦游办证了吗？`;
    else if (hour <= 9) header.textContent = `早上好！随鹭办欢迎您！`;
    else if (hour <= 11) header.textContent = `上午好！今天也要元气满满！`;
    else if (hour <= 13) header.textContent = `干饭时间到！来和awa恰个饭吧（不是`;
    else if (hour <= 17) header.textContent = `下午啦！随鹭办欢迎您！`;
    else if (hour <= 20) header.textContent = `太阳落山了，随鹭办差不多该下班了吧）`;
    else if (hour <= 23) header.textContent = `早点休息吧，今天暂停服务啦`;
    
  }