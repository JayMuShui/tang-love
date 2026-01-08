# Tang Love - 汤汤表白页

一个基于汤汤表情包的温馨表白小项目，提供简洁有趣的表白体验。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen)](https://jaymushui.github.io/tang-love/)

## ✨ 特性

- 🎨 **可爱的汤汤表情包**：多种表情随互动变化
- 📝 **自定义称呼**：支持输入页面或 URL 参数传递名字
- 🔗 **便捷分享**：通过 `?name=xxx` 参数生成个性化链接
- 📱 **响应式设计**：完美适配手机和电脑端
- 🎭 **趣味交互**：点击"不要"按钮触发挤压动画
- 📚 **教学友好**：包含详细的中文注释，适合初学者学习

## 🚀 快速开始

### 在线体验

访问 [https://jaymushui.github.io/tang-love/](https://jaymushui.github.io/tang-love/)

### 本地运行

```bash
# 克隆项目
git clone https://github.com/JayMuShui/tang-love.git

# 进入目录
cd tang-love

# 使用任意 HTTP 服务器运行，例如：
# Python 3
python -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server

# 然后在浏览器访问 http://localhost:8000
```

## 📖 使用方法

### 方式一：输入页面

直接打开网页，在输入框中填写对方的名字，点击确认即可。

### 方式二：URL 参数

在 URL 后添加 `?name=对方名字` 参数，例如：
```
https://jaymushui.github.io/tang-love/?name=小咸粥
```

这样可以直接跳转到表白页面，方便分享给对方。

## 🎯 项目结构

```
tang-love/
├── index.html          # 主页面（含详细注释）
├── style.css           # 样式文件（含详细注释）
├── script.js           # 交互逻辑（含详细注释）
├── favicon.ico         # 网站图标
├── assets/
│   └── images/         # 汤汤表情包图片（WebP 格式）
│       ├── heart.webp
│       ├── shocked.webp
│       ├── think.webp
│       ├── angry.webp
│       ├── crying.webp
│       ├── hug.webp
│       └── sidehead.webp
└── README.md
```

## 📝 项目历史

本项目基于 [@汤汤好梦(37tt)](https://github.com/37tt) 的 [tang-love](https://github.com/37tt/tang-love) 项目重构。

### 时间线

- **2025-02-18**：原项目因 GitHub 账户封禁而无法访问，在经过许可后重新上载本项目仓库并做了一些修改
- **2025-06**：原项目恢复正常显示
- **2026-01-09**：基于原项目的 [ec9bb04](https://github.com/37tt/tang-love/commit/ec9bb049a57603f317d169b2f989e684c5d3c72e) 提交进行重构

### 重构说明

本次重构进行了以下改进：

- ✅ 破坏性移除复杂逻辑和多语言支持
- ✅ 专注于简洁的中文单语言实现
- ✅ 优化代码结构，提升可维护性
- ✅ 新增输入页面，支持 URL 参数
- ✅ 添加详细的教学向注释（~300 行）
- ✅ 图片格式优化（PNG → WebP）
- ✅ 改进响应式设计

详细变更请查看commit记录

## ⚠️ 重要声明

### 图片版权

根据原作者声明，本项目虽使用 MIT 协议，但**图片资源严禁用于商业用途**。

### 项目归档

由于一些因素，本项目的更改无法与原项目主分支合并，按照一般原则，本项目在此次更新后将进行归档。

**欢迎开发者直接在项目基础上进行 Fork 和二次开发。**

## 🔗 相关链接

- 原项目地址：[37tt/tang-love](https://github.com/37tt/tang-love)
- 原项目演示：[https://37tt.github.io/tang-love/](https://37tt.github.io/tang-love/)
- 本项目演示：[https://jaymushui.github.io/tang-love/](https://jaymushui.github.io/tang-love/)
- 作者抖音：[@汤汤好梦](https://www.douyin.com/user/MS4wLjABAAAAe0T2npKNPtRfu3yLhwnCWtJU5Agwb6WY9g_2mnqKfZM)
- 作者小红书：[@汤汤好梦](https://www.xiaohongshu.com/user/profile/5d47ef8e000000001203de79)

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

**注意：图片资源版权归原作者所有，严禁商业使用。**

---

💖 如果这个项目帮助到了你，欢迎 Star 支持！



