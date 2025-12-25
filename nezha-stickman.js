// 1. 注入 HTML
fetch('https://你的域名/nezha-stickman.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('nezha-stickman-root').innerHTML = html;
  });
