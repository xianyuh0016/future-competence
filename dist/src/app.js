const navItems = [
  { id: "home", label: "首页" },
  { id: "diagnosis", label: "能力诊断" },
  { id: "courses", label: "课程中心" },
  { id: "support", label: "涉外发展支持" },
  { id: "growth", label: "成长档案" },
  { id: "events", label: "活动报名" },
  { id: "resources", label: "资源库" }
];

const competenceScores = [
  ["公众表达", 82],
  ["语言应用", 78],
  ["跨文化沟通", 76],
  ["谈判协商", 70],
  ["规则理解", 74],
  ["国际议题分析", 80]
];

const courses = [
  ["高效表达与公众演讲", "表达训练", "初级 · 12课时", "4.8"],
  ["学术写作与文献检索", "写作检索", "中级 · 18课时", "4.7"],
  ["跨文化沟通实战", "跨文化沟通", "中级 · 16课时", "4.8"],
  ["谈判策略与技巧", "谈判协商", "中级 · 14课时", "4.7"],
  ["国际组织与全球治理", "涉外发展", "高级 · 20课时", "4.9"],
  ["商务英语谈判模拟", "实战训练", "中级 · 15课时", "4.6"]
];

const events = [
  ["2025全球青年模拟联合国大会 · 北京站", "2025.06.20 - 06.22", "北京 · 清华大学蒙民伟楼", "120/150人"],
  ["全球胜任力领导力训练营（暑期）", "2025.07.10 - 07.16", "英国 · 伦敦", "25/30人"],
  ["AI时代的国际组织职业发展路径", "2025.05.27 14:00-16:00", "线上直播", "198/300人"],
  ["东南亚文化探索营 · 新加坡站", "2025.08.05 - 08.09", "新加坡", "18/20人"]
];

const resources = [
  ["全球治理与国际组织的未来趋势", "高校讲座", "1:08:22"],
  ["AI时代的教育创新与学习变革", "专家专题", "55:30"],
  ["全球数字教育发展报告（2023）", "背景文件", "PDF"],
  ["跨文化沟通能力提升资料包", "专题资料包", "12份"],
  ["青年全球胜任力发展论坛 2024", "公开活动回放", "1:34:22"],
  ["国际人才能力框架与评估标准", "背景文件", "DOCX"]
];

const supportRows = [
  ["联合国可持续发展目标青年行动线上分享会", "联合国开发计划署（UNDP）", "2025.05.24"],
  ["2025年“未来全球领袖”国际挑战赛", "AIESEC 国际组织", "2025.06.10"],
  ["联合国环境规划署（UNEP）实习生计划", "联合国环境规划署", "2025.07.01"]
];

const app = document.querySelector("#app");
let currentPage = routeToPage();

window.addEventListener("hashchange", () => {
  currentPage = routeToPage();
  render();
});

function routeToPage() {
  const id = location.hash.replace("#/", "") || "home";
  return navItems.some((item) => item.id === id) ? id : "home";
}

function navigate(id) {
  location.hash = `/${id}`;
}

function render() {
  app.innerHTML = `
    ${Header()}
    <main>${pages[currentPage]()}</main>
    ${FooterDock()}
  `;

  document.querySelectorAll("[data-route]").forEach((node) => {
    node.addEventListener("click", () => navigate(node.dataset.route));
  });
}

function Header() {
  return `
    <header class="topbar">
      <button class="brand" data-route="home" aria-label="返回首页">
        <span class="brand-mark"></span>
        <span>
          <strong>胜任未来</strong>
          <small>AI赋能的国际胜任力平台</small>
        </span>
      </button>
      <nav class="nav">
        ${navItems.map((item) => `
          <button class="${item.id === currentPage ? "active" : ""}" data-route="${item.id}">
            ${item.label}
          </button>
        `).join("")}
      </nav>
      <div class="account">
        <span class="bell">●</span>
        <span class="avatar">张</span>
        <span>张同学</span>
      </div>
    </header>
  `;
}

function HomePage() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">面向未来的国际化人才成长平台</p>
        <h1>胜任未来</h1>
        <h2>让涉外能力真正用得上</h2>
        <p class="hero-subtitle">科学评估、个性学习、实践提升、成长可见，为高校学生提供国际胜任力训练与涉外发展支持。</p>
        <div class="hero-actions">
          <button class="primary" data-route="diagnosis">立即测评</button>
          <button class="secondary" data-route="courses">浏览课程</button>
        </div>
      </div>
      <div class="hero-visual" aria-label="平台数据预览">
        <div class="world-grid"></div>
        <div class="device laptop">
          <div class="screen-title">AI赋能的国际胜任力人才培养一站式平台</div>
          <div class="metric-row">
            <span>我的学习 <b>90</b></span>
            <span>课程学习 <b>86</b></span>
            <span>实践活动 <b>214</b></span>
          </div>
        </div>
        <div class="device phone">
          <strong>能力雷达</strong>
          <div class="radar-mini"></div>
          <p>成长记录持续更新</p>
        </div>
        <div class="social-card">
          <strong>胜任未来官方</strong>
          <p>现在国际舞台上发光发热？先让能力路径清晰起来。</p>
        </div>
      </div>
    </section>
    <section class="feature-grid home-features">
      ${[
        ["AI辅助诊断", "精准评估能力短板", "◎"],
        ["课程学习", "体系课程个性提升", "▤"],
        ["实践活动", "知行合一丰富经历", "◇"],
        ["成长记录", "过程可视持续成长", "↗"]
      ].map(([title, desc, icon]) => FeatureCard(title, desc, icon)).join("")}
    </section>
    <section class="trust-band">
      ${["权威研发 科学评估", "数据安全 隐私保护", "多端同步 随时随地", "高校合作 持续更新"].map((item) => `<span>${item}</span>`).join("")}
    </section>
  `;
}

function DiagnosisPage() {
  return `
    ${PageHero("能力诊断与路径推荐", "基于科学测评与AI分析，为你提供能力画像与个性化成长路径", "下载诊断报告")}
    <section class="dashboard-grid">
      <aside class="panel profile-card">
        <span class="avatar large">张</span>
        <h3>张同学 <em>本科三年级</em></h3>
        <p>国际关系学院 · 国际政治专业</p>
        <dl>
          <div><dt>诊断日期</dt><dd>2024-05-24</dd></div>
          <div><dt>测试方式</dt><dd>在线测评 + 行为数据分析</dd></div>
          <div><dt>总得分</dt><dd><b>78</b> / 100</dd></div>
        </dl>
      </aside>
      <section class="panel radar-panel">
        <h3>六项核心能力雷达图</h3>
        <div class="radar-chart">
          ${competenceScores.map(([name, score], index) => `<span style="--i:${index};--score:${score}">${name}<b>${score}</b></span>`).join("")}
        </div>
      </section>
      <section class="panel score-grid">
        <h3>能力得分概览</h3>
        <div class="mini-cards">
          ${competenceScores.map(([name, score]) => `<article><strong>${score}</strong><span>${name}</span><small>${score >= 76 ? "良好" : "中等"}</small></article>`).join("")}
        </div>
      </section>
      <aside class="panel">
        <h3>诊断洞察</h3>
        <div class="insight good">公众表达和国际议题分析表现突出，具备较强的信息整合与观点表达能力。</div>
        <div class="insight warn">谈判协商能力相对薄弱，建议加强角色扮演与沟通策略训练。</div>
        <div class="insight info">整体能力处于良好水平，适合进入国际组织综合能力路径。</div>
      </aside>
    </section>
    <section class="panel path-section">
      <h3>个性化学习路径推荐</h3>
      <div class="path-grid">
        ${["国际事务分析人才路径", "跨文化沟通与合作路径", "国际组织综合能力路径"].map((name, index) => `
          <article>
            <span>${index + 1}</span>
            <h4>${name}</h4>
            <p>结合当前能力画像，匹配课程、活动与阶段性成果记录。</p>
            <button class="secondary" data-route="courses">查看路径详情</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function CoursesPage() {
  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>课程中心</h1><p>优质课程助力提升国际胜任力</p></div>
        <div class="tabs">${["全部课程", "模拟联合国", "表达训练", "写作与检索", "谈判协商", "跨文化沟通", "涉外发展"].map((x, i) => `<button class="${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div>
        <div class="filter-row"><input placeholder="搜索课程名称、关键词、讲师" /><select><option>课程难度</option></select><select><option>学习时长</option></select><button>重置</button></div>
        <section class="course-banner">
          <span>本周推荐</span>
          <h2>模拟联合国：从入门到精通</h2>
          <p>系统掌握议题研究、立场文件撰写、磋商谈判与演讲技巧。</p>
          <button class="primary">立即学习</button>
        </section>
        <h3>精选课程</h3>
        <div class="card-grid">${courses.map(([title, tag, meta, rating]) => CourseCard(title, tag, meta, rating)).join("")}</div>
      </div>
      <aside class="side-column">
        ${PlanPanel()}
        ${RecentPanel()}
      </aside>
    </section>
  `;
}

function SupportPage() {
  return `
    <section class="page-shell">
      <div class="main-column">
        ${PageBanner("涉外发展支持", "聚焦国际视野与全球实践，提供信息支持与能力准备，助你从了解走向行动")}
        <div class="feature-strip">
          ${["讲座资讯", "竞赛活动", "实习观察", "国际组织项目", "职业认知", "经历表达支持"].map((x) => `<article><span>▣</span><strong>${x}</strong><a>查看全部</a></article>`).join("")}
        </div>
        <section class="panel">
          <div class="section-head"><h3>机会与资源推荐</h3><button>最新发布</button></div>
          ${supportRows.map(([title, source, date]) => `<div class="resource-row"><div class="thumb"></div><div><h4>${title}</h4><p>主办方 ${source} · ${date}</p></div><button class="secondary">查看详情</button></div>`).join("")}
        </section>
        <section class="guide-grid">
          ${["简历优化", "模拟面试反馈", "个人陈述指导"].map((x) => `<article><h3>${x}</h3><p>结合涉外项目经历，优化表达结构与内容呈现。</p><a>开始使用</a></article>`).join("")}
        </section>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>发展方向建议</h3>${["国际组织与公共事务", "跨国企业与国际化岗位", "全球议题研究与学术深造", "国际传播与文化交流"].map((x) => `<div class="list-item">${x}<span>›</span></div>`).join("")}</section>
        <section class="panel"><h3>能力准备清单</h3>${competenceScores.slice(1).map(([name, score]) => Progress(name, score - 8)).join("")}<button class="primary full">开始能力提升</button></section>
      </aside>
    </section>
  `;
}

function GrowthPage() {
  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>成长档案</h1><p>记录你的学习旅程，见证每一次成长</p></div>
        <section class="panel profile-wide">
          <span class="avatar large">张</span>
          <div><h2>张同学 <em>LV.3 进阶学习者</em></h2><p>北京大学 · 国际关系学院 · 2022级本科</p><small>加入平台 2023.09 · 累计学习 286 天</small></div>
          <div class="stats">${[["课程学习", "38门"], ["完成项目", "12个"], ["获得徽章", "16枚"], ["综合评分", "1280分"]].map(([k, v]) => `<span><b>${v}</b>${k}</span>`).join("")}</div>
        </section>
        <section class="growth-layout">
          <div class="panel timeline"><h3>成长时间轴</h3>${["完成《全球议题工作坊：气候治理与青年角色》项目", "获得徽章：跨文化沟通之星", "提交训练营作品《可持续城市倡议方案》", "完成阶段复盘：国际组织模拟项目"].map((x, i) => `<div><time>2025.0${5 - i}.18</time><p>${x}</p></div>`).join("")}</div>
          <div>
            <section class="panel"><h3>成长档案库</h3><div class="archive-grid">${["立场文件", "发言记录", "导师反馈", "会议成果", "训练营作品", "阶段复盘"].map((x) => `<article><strong>${x}</strong><span>查看与管理</span></article>`).join("")}</div></section>
            <section class="panel"><h3>六项核心能力进度</h3>${competenceScores.map(([name, score]) => Progress(name, score)).join("")}</section>
          </div>
        </section>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>最新动态</h3>${["导师发布了新的反馈", "你的立场文件被点赞", "新增会议纪要", "获得新徽章"].map((x) => `<div class="list-item">${x}<small>2小时前</small></div>`).join("")}</section>
        <section class="panel"><h3>档案下载中心</h3>${["成长档案（PDF）", "阶段成长报告", "能力诊断报告", "项目结项证书"].map((x) => `<div class="list-item">${x}<button>下载</button></div>`).join("")}</section>
      </aside>
    </section>
  `;
}

function EventsPage() {
  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>活动报名</h1><p>发现活动、拓展视野、提升国际胜任力</p></div>
        <div class="tabs">${["全部活动", "模拟联合国会议", "小班训练营", "公开讲座", "体验活动"].map((x, i) => `<button class="${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div>
        <div class="date-strip">${["19 周一", "20 周二", "21 周三", "22 周四", "23 周五", "24 周六", "25 周日"].map((x, i) => `<button class="${i === 5 ? "active" : ""}">${x}</button>`).join("")}</div>
        <section class="event-feature">
          <div class="event-image"></div>
          <div>
            <span>模拟联合国会议</span>
            <h2>${events[0][0]}</h2>
            <p>${events[0][1]} · ${events[0][2]} · ${events[0][3]}</p>
            <button class="primary">立即报名</button>
          </div>
        </section>
        <div class="event-grid">${events.slice(1).map(([title, date, place, people]) => `<article class="event-card"><div class="thumb tall"></div><h3>${title}</h3><p>${date}</p><p>${place} · ${people}</p><button class="primary">立即报名</button><button class="ghost">收藏</button></article>`).join("")}</div>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>报名流程</h3>${["选择活动", "填写报名信息", "等待审核", "完成支付", "参加活动"].map((x, i) => `<div class="step"><b>${i + 1}</b><span>${x}</span></div>`).join("")}</section>
        <section class="panel"><h3>我的报名</h3>${events.slice(0, 2).map(([title, date]) => `<div class="list-item">${title}<small>${date}</small></div>`).join("")}</section>
      </aside>
    </section>
  `;
}

function ResourcesPage() {
  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>授权内容接入</h1><p>汇聚高校、机构与专家授权的优质内容，助力个性化学习与能力成长</p></div>
        <div class="search-row"><input placeholder="搜索内容标题、主讲人、机构或关键词" /><button class="primary">搜索</button></div>
        <div class="tabs">${["全部", "高校讲座", "专家专题", "背景文件", "专题资料包", "公开活动回放"].map((x, i) => `<button class="${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div>
        <div class="resource-grid">${resources.map(([title, tag, time]) => `<article class="resource-card"><div class="thumb"><span>${tag}</span><b>${time}</b></div><h3>${title}</h3><p>授权来源 · 2024-04-18 · 8563次访问</p><button class="secondary">查看内容</button></article>`).join("")}</div>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>最近访问</h3>${resources.slice(0, 5).map(([title, tag]) => `<div class="mini-resource"><div class="thumb small"></div><span>${title}<small>${tag}</small></span></div>`).join("")}</section>
        <section class="panel"><h3>推荐专题资料包</h3>${["国际组织实习与职业发展资料包", "全球胜任力提升系列资料包", "跨文化沟通基础资料包"].map((x) => `<div class="list-item">${x}<button>加入学习</button></div>`).join("")}</section>
      </aside>
    </section>
  `;
}

const pages = {
  home: HomePage,
  diagnosis: DiagnosisPage,
  courses: CoursesPage,
  support: SupportPage,
  growth: GrowthPage,
  events: EventsPage,
  resources: ResourcesPage
};

function PageHero(title, subtitle, action) {
  return `
    <section class="inner-hero">
      <div>
        <p class="breadcrumb">首页 › 能力诊断 › 能力诊断与路径推荐</p>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <button class="secondary">${action}</button>
    </section>
  `;
}

function PageBanner(title, subtitle) {
  return `
    <section class="page-banner">
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <div><span>信息全面，及时更新</span><span>资源权威，真实可靠</span><span>准备充分，稳步提升</span></div>
    </section>
  `;
}

function FeatureCard(title, desc, icon) {
  return `<article class="feature-card"><span>${icon}</span><h3>${title}</h3><p>${desc}</p></article>`;
}

function CourseCard(title, tag, meta, rating) {
  return `<article class="course-card"><div class="thumb"><span>${tag}</span></div><h3>${title}</h3><p>${meta}</p><footer><span>★ ${rating}</span><button class="secondary">立即学习</button></footer></article>`;
}

function PlanPanel() {
  return `<section class="panel"><h3>为你推荐的学习计划</h3>${["国际胜任力提升计划 · 初级", "模拟联合国专项突破计划"].map((x, i) => `<div class="plan"><strong>${x}</strong>${Progress(i === 0 ? "已完成" : "未开始", i === 0 ? 32 : 0)}<button class="secondary">${i === 0 ? "继续学习" : "开始学习"}</button></div>`).join("")}</section>`;
}

function RecentPanel() {
  return `<section class="panel"><h3>最近学习</h3>${courses.slice(2, 5).map(([title], i) => `<div class="mini-resource"><div class="thumb small"></div><span>${title}<small>学习中 · ${60 - i * 15}%</small></span></div>`).join("")}</section>`;
}

function Progress(label, value) {
  return `<div class="progress"><span>${label}</span><div><i style="width:${value}%"></i></div><b>${value}%</b></div>`;
}

function FooterDock() {
  return `
    <footer class="footer-dock">
      ${[
        ["diagnosis", "科学诊断", "AI智能评估与成长报告"],
        ["courses", "个性学习", "定制学习路径与资源"],
        ["events", "实践赋能", "真实场景与实践机会"],
        ["growth", "成长追踪", "学习记录与成长轨迹"]
      ].map(([route, title, desc]) => `<button data-route="${route}"><strong>${title}</strong><span>${desc}</span></button>`).join("")}
    </footer>
  `;
}

render();
