# 三个原创网页概念案例

三个案例都由实际HTML、CSS与少量原生JavaScript构成，无框架、无远程字体依赖，可在本地静态服务器中浏览。它们是虚构品牌与概念内容，不是客户案例或已运营业务。

| 案例 | 入口 | 可复用的设计判断 |
|---|---|---|
| 见山工作室 | [architecture/index.html](architecture/index.html) | 大白边、竖幅建筑图、宽窄分栏与固定图注 |
| 未完成的日常 | [art/index.html](art/index.html) | 黄黑双联画、清楚的大标题和展讯信息层级 |
| 声隅桌面音箱 | [speaker/index.html](speaker/index.html) | 暗色产品舞台、单一主对象、深浅区域切换 |

从仓库根目录启动任意静态服务器，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/examples/web/architecture/`，或将末段改为 `art/`、`speaker/`。这些案例不需要在线API；图片随仓库提供。

每个案例的子目录README包含创作提示词和素材说明。建筑与音箱图片为GPT ImageGen生成的虚构概念；艺术作品为本仓库原生SVG。页面中文字、说明、菜单和折叠信息均实际实现。

## 重现浏览器检查

`verify.cjs` 使用Playwright启动隔离的浏览器，不连接个人浏览器资料。它会临时启动静态服务器，检查图片、横向溢出、页内链接、手机菜单和折叠说明，并写入三个桌面与三个手机截图。

在已安装Playwright与Chromium的环境运行：

```bash
node examples/web/verify.cjs
```

使用本机Chrome时，可设置 `BROWSER_CHANNEL=chrome`。验证结果记录在 [verification.json](verification.json)；截图位于仓库的 `docs/assets/`。视口为1600×1000、1440×1000和390×844，另检查320px窄屏布局。
