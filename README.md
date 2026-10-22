# Feiyang 个人主页

纯 HTML / CSS / JavaScript，无需安装依赖或构建。字体和 GSAP 动效库已包含在 assets 中。

## 本地浏览

双击根目录的 index.html 即可打开。

## GitHub Pages

仓库：cakkie0845/cakkie0845.github.io（Public）。

在 Settings → Pages → Build and deployment 中选择：
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

保存后，访问 https://cakkie0845.github.io/。

发布进度：仓库 Actions → pages build and deployment。

## 更新网站

编辑 index.html、style.css 或 app.js 后提交并推送 main，GitHub Pages 会自动重新发布。

首次克隆：
```sh
git clone https://github.com/cakkie0845/cakkie0845.github.io.git
cd cakkie0845.github.io
```

每次修改后：
```sh
git add .
git commit -m "Update homepage"
git push origin main
```

也可在 GitHub 仓库网页打开文件，点击编辑铅笔，修改后 Commit changes 到 main，无需命令行。
