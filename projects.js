window.PORTFOLIO_PROJECTS = [
 {
  id:'news', number:'01', category:'analysis', featured:true,
  name:'新闻与市场影响分析', label:'小程AI的新闻日报', status:'在线作品',
  description:'把分散的新闻整理成重点事件、利多利空线索与板块观察。让读者既能快速浏览，也能追溯原始信息。',
  image:'./assets/news.png', imageAlt:'小程AI的新闻日报真实首页截图，包含页面导航、重点新闻和市场观察', imageCaption:'真实网站截图 / 2026.09.07',
  live:'https://acc6cc6-png.github.io/daily-news-insight/', source:'https://github.com/acc6cc6-png/daily-news-insight',
  tags:['Python','GitHub Actions','多源新闻','规则分析'],
  summary:['个人项目 · AI 辅助开发','信息聚合与分析展示','已上线 · 当前为规则模板模式'],
  problem:'新闻来自不同网站，数量多、格式不一。读完标题之后，仍需要回答三个问题：这条新闻为什么重要，可能影响哪些方向，有哪些结论需要继续验证？这个项目把阅读流程拆成“收集、筛选、解释、回溯”。',
  features:[
   '按专题组织新闻，提供重点排序、全量时间流、板块观察和多角色观点等独立页面。',
   '用利多、利空与待验证线索辅助阅读，并保留来源链接、原始监控和 JSON 数据出口。',
   '将原先较拥挤的长页面拆分成功能页，提供手机端导航与板块切换。'
  ],
  flow:[['多源收集','NewsNow 聚合接口与国际 RSS'],['清洗与筛选','标题去重、时间窗口、板块相关度'],['规则与解释','关键词标签、影响排序、观点模板'],['发布与回溯','JSON 归档、定时任务、静态网页']],
  implementation:'Python 负责采集、清洗、规则计算与结构化数据生成；原生 HTML、CSS、JavaScript 负责展示。GitHub Actions 承担定时任务，GitHub Pages 托管页面。代码还提供大模型接口与结构化输出校验，调用异常时回退到模板。',
  role:'提出多源新闻汇总、利多利空解释、多角色视角和免费托管的需求；在使用过程中提出拆分页面、调整手机导航等改进，通过 AI 编程协作完成实现和迭代。',
  boundary:'当前线上数据的分析模式为 template，即规则与模板生成。利多利空基础标签主要依据标题关键词，影响分是规则排序，不是预测概率或投资结论；多角色内容是生成的观察视角，不是真实分析师评论。大模型接口已实现，但不等于当前每次更新均由真实 AI 完成。',
  talk:'我想解决的不是“再放一份新闻列表”，而是让信息更容易理解和检查。所以先拆分采集、整理、解释和展示，再保留来源与原始数据出口。项目目前的分析有规则和模板限制，我会把结果作为阅读线索，而不是确定判断。',
  evidence:'线上页面与公开 JSON 于 2026-09-07 核验：更新时间 08:48，edition.mode 为 template。项目技术说明同时依据配置、采集脚本与发布工作流。',
  evidenceLink:'https://acc6cc6-png.github.io/daily-news-insight/data/latest/digest.json'
 },
 {
  id:'toolbox',number:'02',category:'tools',featured:false,
  name:'灵感工具箱',label:'THE LITTLE LAB',status:'在线作品',
  description:'一个打开就能玩的中文工具集合。把图片、文字和日常处理需求，变成不需要注册的轻量应用。',
  image:'./assets/toolbox.png',imageAlt:'灵感工具箱真实首页截图，展示手写信、配色和工具分类',imageCaption:'真实网站截图 / 2026.09.07',
  live:'https://acc6cc6-png.github.io/inspiration-toolbox/',source:'https://github.com/acc6cc6-png/inspiration-toolbox',
  tags:['JavaScript','Vite','浏览器本地处理','开源组件'],
  summary:['个人项目 · AI 辅助开发','12 个轻量交互工具','已上线 · 手机可用'],
  problem:'很多有趣的小工具分散在不同网站，使用时还可能遇到注册和付费门槛。我希望把“文字变手写风图片”“照片做特效”等可操作的功能放进同一个入口，让不懂技术的人也能立即体验。',
  features:[
   '12 个工具：手写风图片、图片特效与压缩、照片取色、二维码、单位换算、文字整理、JSON 格式化、密码生成、随机选择、渐变壁纸和专注计时。',
   '提供搜索、分类、收藏和手机布局；图片、二维码与壁纸支持下载，计算与编辑支持即时反馈。',
   '图片和输入文本在浏览器内处理，收藏保存在本地；展示开源组件来源与许可证。'
  ],
  flow:[['选择工具','搜索、分类或随机探索'],['输入内容','本地图片、文字或参数'],['即时处理','Canvas、开源库、浏览器能力'],['带走结果','下载图片、复制文本或收藏工具']],
  implementation:'使用 JavaScript 与 Vite 构建静态网站。Pica 负责高质量图片缩放，node-qrcode 生成二维码；Canvas 绘制手写风图片、滤镜与渐变，Web Crypto 生成随机密码，localStorage 保存收藏。站点通过 GitHub Pages 发布。',
  role:'提出开源工具集合的产品方向、面向普通用户的交互目标和无需域名的发布需求；借助 AI 开发协作整合功能与界面，形成可以直接分享的成品。',
  boundary:'手写工具使用手写风字体，不是个人笔迹克隆；网站也没有把普通滤镜包装成 AI 生成。图片压缩不保证每次体积都更小，动图只处理第一帧。大型模型和服务端 AI 功能不在当前版本中。',
  talk:'这个项目体现的是把现有能力组织成产品的过程。我先确定“无需注册、打开就能操作”的体验，再选择能够在浏览器里完成的功能，结合开源组件做成统一入口。除了页面好看，工具还需要真正能处理输入、给出结果并下载。',
  evidence:'已验证 12 个工具的核心操作，包括图片导出、二维码、收藏持久化与手机布局；开源依赖的原始许可证随项目保留。',
  evidenceLink:'https://github.com/acc6cc6-png/inspiration-toolbox'
 },
 {
  id:'quant',number:'03',category:'analysis',featured:false,
  name:'行情监控与规则分析看板',label:'MARKET DATA EXPLORER',status:'源码案例',
  description:'把公开行情、实时 K 线和多周期规则放在一张看板中，集中查看变化、筛选候选并解释分析条件。',
  image:null,imageCaption:'数据处理流程示意',live:null,source:'https://github.com/acc6cc6-png/binance-quant-dashboard',
  tags:['REST / WebSocket','Lightweight Charts','多周期规则','历史模拟'],
  summary:['个人项目 · AI 辅助开发','行情接入、图表与规则解释','源码可查看 · 在线演示地址待核验'],
  problem:'市场信息变化快，单看一张价格图，很难同时跟踪不同周期与大量交易对。这个项目将历史行情、实时更新和条件筛选组合起来，让观察过程更集中，也让规则判断的依据更明确。',
  features:[
   '接入公开历史行情和实时 K 线，支持交易对搜索、周期切换、成交量与 EMA 指标叠加。',
   '通过 D1、H4、H1 方向、量能、ATR 与突破条件形成规则候选排序，只用已收盘 K 线更新判断。',
   '实现包含手续费和滑点的历史模拟，区分规则匹配分与样本外历史指标。'
  ],
  flow:[['行情接入','公开 REST 与 WebSocket'],['指标计算','EMA、ATR、量能与结构'],['规则检查','多周期条件、候选筛选'],['结果解释','图表、依据与历史模拟指标']],
  implementation:'Vite 与原生 JavaScript 驱动前端，Lightweight Charts 展示行情。源码提供 Node / Express 后端及 Cloudflare Workers 适配。网页模式在打开期间执行扫描，历史模拟由用户点击触发；不同部署模式的数据访问路径有所区别。',
  role:'围绕行情监控和条件触发提出使用场景，借助 AI 协作将想法转成包含图表、规则解释和历史模拟的原型。重点展示如何组织数据和解释规则，不将工具输出当成实际交易成果。',
  boundary:'只读取公开行情，不执行自动下单。规则分数不是胜率或未来盈利概率；现货数据上的做空属于理论模拟。网页打开期间的扫描不等于全天无人值守服务，当前也没有可据此声称真实盈利或策略有效性的证据。公开演示网址尚未核定，因此这里只提供源码入口。',
  talk:'我关心的是让信息有结构、判断有条件、结果有边界。这个项目把行情数据接入、图表和规则检查放到一个界面里，同时把“当前规则匹配程度”和“历史样本表现”分开，避免一个高分给使用者错误的确定感。',
  evidence:'依据当前源码核对。15 项基础离线检查通过，覆盖指标、计划结构、扫描与历史不足处理；不代表完整回测正确性或交易策略效果已获充分验证。',
  evidenceLink:'https://github.com/acc6cc6-png/binance-quant-dashboard'
 }
];
