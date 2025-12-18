# 水库洪水预报结果展示模板

## 项目说明
这是一个基于 Web 技术（HTML/CSS/JS）的水库洪水预报结果展示大屏模板。
- **页面布局**：1920x1080 分辨率适配，蓝白简约风格。
- **地图**：集成 ArcGIS API for JavaScript (v4.29)。
- **图表**：使用 ECharts 绘制水位流量过程线。
- **数据**：展示 `ref/data.json` 中的“盘石头水库”预报数据。

## 目录结构
```
/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # 业务逻辑（数据加载、地图初始化、图表渲染）
├── ref/                # 资源文件夹
│   ├── data.json       # 数据源
│   └── echarts.min.js  # 图表库
└── README.md           # 说明文档
```

## 如何运行
由于浏览器安全策略（CORS），直接双击打开 `index.html` 可能无法加载 `data.json` 数据。推荐使用本地开发服务器运行。

### 方法 1：使用 VS Code (推荐)
1. 安装 **Live Server** 扩展。
2. 右键点击 `index.html`，选择 **"Open with Live Server"**。

### 方法 2：使用 Python
在项目根目录下运行终端命令：
```bash
# Python 3
python -m http.server 8000
```
然后在浏览器访问 `http://localhost:8000`。

### 方法 3：使用 Node.js
```bash
npx serve .
```

## 配置说明
1. **现有地图 ID**：在 `js/main.js` 中搜索 `webmapId`，将其替换为您 ArcGIS Portal 中配置好的实际 WebMap ID。
2. **数据源更新**：替换 `ref/data.json` 即可更新显示内容，保持 JSON 结构一致。
