const navItems = [
  { id: "home", label: "首页" },
  { id: "diagnosis", label: "能力诊断" },
  { id: "courses", label: "课程中心" },
  { id: "support", label: "涉外发展支持" },
  { id: "growth", label: "成长档案" },
  { id: "events", label: "活动报名" },
  { id: "resources", label: "资源库" }
];

const dimensions = [
  {
    key: "expression",
    name: "公众表达",
    short: "表达训练",
    questions: ["我能在公开场合清晰表达观点", "我能根据听众调整表达方式", "我能在压力下完成结构化发言"]
  },
  {
    key: "language",
    name: "语言应用",
    short: "写作与检索",
    questions: ["我能阅读英文资料并提取关键信息", "我能完成基础英文口头表达", "我能撰写清晰的英文短文或邮件"]
  },
  {
    key: "culture",
    name: "跨文化沟通",
    short: "跨文化沟通",
    questions: ["我能识别并尊重文化差异", "我能在多元团队中进行合作", "我能避免刻板印象并主动倾听"]
  },
  {
    key: "negotiation",
    name: "谈判协商",
    short: "谈判协商",
    questions: ["我能提出可执行的协商方案", "我能回应分歧并推动共识", "我能在讨论中兼顾目标与关系"]
  },
  {
    key: "rules",
    name: "规则理解",
    short: "规则理解",
    questions: ["我了解议事规则或国际组织基本规则", "我能按规则准备文件和发言", "我能识别项目中的合规边界"]
  },
  {
    key: "analysis",
    name: "国际议题分析",
    short: "议题分析",
    questions: ["我能检索并判断资料可靠性", "我能分析议题背景和各方立场", "我能形成有证据支撑的观点"]
  }
];

const defaultScores = {
  expression: 82,
  language: 78,
  culture: 76,
  negotiation: 70,
  rules: 74,
  analysis: 80
};

const courses = [
  { title: "模拟联合国：从入门到精通", category: "模拟联合国", level: "初级", hours: "20课时", teacher: "李嘉言", rating: "4.9", matches: ["rules", "expression", "negotiation"] },
  { title: "高效表达与公众演讲", category: "表达训练", level: "初级", hours: "12课时", teacher: "周思远", rating: "4.8", matches: ["expression"] },
  { title: "学术写作与文献检索", category: "写作与检索", level: "中级", hours: "18课时", teacher: "陈雨青", rating: "4.7", matches: ["language", "analysis"] },
  { title: "跨文化沟通实战", category: "跨文化沟通", level: "中级", hours: "16课时", teacher: "Anna Chen", rating: "4.8", matches: ["culture"] },
  { title: "谈判策略与技巧", category: "谈判协商", level: "中级", hours: "14课时", teacher: "沈亦行", rating: "4.7", matches: ["negotiation"] },
  { title: "国际组织与全球治理", category: "涉外发展", level: "高级", hours: "20课时", teacher: "王子昂", rating: "4.9", matches: ["analysis", "rules"] },
  { title: "国际法基础与案例分析", category: "规则理解", level: "中级", hours: "15课时", teacher: "林书遥", rating: "4.6", matches: ["rules"] }
];

const events = [
  { title: "2026全球青年模拟联合国大会 · 北京站", type: "模拟联合国会议", date: "2026.06.20 - 06.22", place: "北京 · 清华大学蒙民伟楼", people: "120/150人", desc: "围绕气候治理、数字经济与青年责任开展议题研究、磋商谈判和公开发言。" },
  { title: "全球胜任力领导力训练营（暑期）", type: "小班训练营", date: "2026.07.10 - 07.16", place: "英国 · 伦敦", people: "25/30人", desc: "以小组任务、跨文化沟通和项目路演训练为核心，形成可沉淀的成长档案。" },
  { title: "AI时代的国际组织职业发展路径", type: "公开讲座", date: "2026.05.27 14:00-16:00", place: "线上直播", people: "198/300人", desc: "介绍国际组织项目、实习观察和能力准备方式，帮助学生建立发展方向认知。" },
  { title: "东南亚文化探索营 · 新加坡站", type: "体验活动", date: "2026.08.05 - 08.09", place: "新加坡", people: "18/20人", desc: "通过城市议题调研、机构参访和英文汇报训练，提升跨文化合作能力。" }
];

const resources = [
  { title: "全球治理与国际组织的未来趋势", category: "高校讲座", type: "视频", source: "合作高校公开讲座", date: "2026-04-18", views: 8563 },
  { title: "AI时代的教育创新与学习变革", category: "专家专题", type: "视频", source: "专家专题", date: "2026-04-12", views: 6428 },
  { title: "全球数字教育发展报告（2025）", category: "背景文件", type: "PDF", source: "公开研究资料", date: "2026-03-28", views: 5210 },
  { title: "跨文化沟通能力提升资料包", category: "专题资料包", type: "12份", source: "平台整理", date: "2026-03-16", views: 4881 },
  { title: "青年全球胜任力发展论坛 2026", category: "公开活动回放", type: "回放", source: "公开活动", date: "2026-02-24", views: 7936 },
  { title: "国际人才能力框架与评估标准", category: "背景文件", type: "DOCX", source: "能力框架资料", date: "2026-01-19", views: 3662 }
];

const supportRows = [
  ["联合国可持续发展目标青年行动线上分享会", "联合国开发计划署（UNDP）", "2026.05.24"],
  ["2026年“未来全球领袖”国际挑战赛", "AIESEC 国际组织", "2026.06.10"],
  ["联合国环境规划署（UNEP）实习生观察项目", "联合国环境规划署", "2026.07.01"]
];

const app = document.querySelector("#app");
const state = {
  currentPage: routeToPage(),
  courseCategory: "全部课程",
  courseQuery: "",
  eventType: "全部活动",
  selectedEventDate: "23 周六",
  resourceCategory: "全部",
  resourceQuery: "",
  toast: "",
  drawer: null,
  authMode: null,
  users: readJson("futureCompetenceUsers", []),
  currentUserId: localStorage.getItem("futureCompetenceCurrentUserId") || "",
  diagnosis: readJson("futureCompetenceDiagnosis", null),
  registrations: readJson("futureCompetenceRegistrations", [])
};

window.addEventListener("hashchange", () => {
  state.currentPage = routeToPage();
  render();
});

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
app.addEventListener("submit", handleSubmit);

function routeToPage() {
  const id = location.hash.replace("#/", "") || "home";
  return [...navItems.map((item) => item.id), "report"].includes(id) ? id : "home";
}

function navigate(id) {
  location.hash = `/${id}`;
}

function render() {
  app.innerHTML = `
    ${Header()}
    <main>${pages[state.currentPage]()}</main>
    ${FooterDock()}
    ${state.drawer ? DetailDrawer(state.drawer) : ""}
    ${state.authMode ? AuthModal(state.authMode) : ""}
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
  `;
}

function handleClick(event) {
  const route = event.target.closest("[data-route]")?.dataset.route;
  if (route) {
    state.drawer = null;
    state.authMode = null;
    navigate(route);
    return;
  }

  const authMode = event.target.closest("[data-auth-mode]")?.dataset.authMode;
  if (authMode) {
    state.authMode = authMode;
    render();
    return;
  }

  if (event.target.matches("[data-close-auth]")) {
    state.authMode = null;
    render();
    return;
  }

  if (event.target.closest("[data-logout]")) {
    state.currentUserId = "";
    localStorage.removeItem("futureCompetenceCurrentUserId");
    showToast("已退出登录");
    return;
  }

  if (event.target.matches("[data-close-drawer]")) {
    state.drawer = null;
    render();
    return;
  }

  const detailTarget = event.target.closest("[data-detail]");
  if (detailTarget) {
    state.drawer = buildDetail(detailTarget.dataset.detail, detailTarget.dataset.index, detailTarget.dataset.key);
    render();
    return;
  }

  if (event.target.closest("[data-reset-courses]")) {
    state.courseCategory = "全部课程";
    state.courseQuery = "";
    showToast("筛选条件已重置");
    return;
  }

  const courseCategory = event.target.closest("[data-course-category]")?.dataset.courseCategory;
  if (courseCategory) {
    state.courseCategory = courseCategory;
    render();
    return;
  }

  const eventType = event.target.closest("[data-event-type]")?.dataset.eventType;
  if (eventType) {
    state.eventType = eventType;
    render();
    return;
  }

  const eventDate = event.target.closest("[data-event-date]")?.dataset.eventDate;
  if (eventDate) {
    state.selectedEventDate = eventDate;
    render();
    return;
  }

  const resourceCategory = event.target.closest("[data-resource-category]")?.dataset.resourceCategory;
  if (resourceCategory) {
    state.resourceCategory = resourceCategory;
    render();
    return;
  }

  const message = event.target.closest("[data-toast]")?.dataset.toast;
  if (message) showToast(message);

  if (event.target.closest("[data-search]")) {
    render();
  }
}

function handleInput(event) {
  if (event.target.matches("[data-course-query]")) {
    state.courseQuery = event.target.value.trim();
  }
  if (event.target.matches("[data-resource-query]")) {
    state.resourceQuery = event.target.value.trim();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (form.matches("[data-auth-form]")) {
    handleAuthSubmit(form);
    return;
  }

  if (form.matches("[data-diagnosis-form]")) {
    const formData = new FormData(form);
    const answers = dimensions.flatMap((dimension) =>
      dimension.questions.map((_, index) => Number(formData.get(`${dimension.key}-${index}`) || 3))
    );
    const scores = Object.fromEntries(
      dimensions.map((dimension) => {
        const values = dimension.questions.map((_, index) => Number(formData.get(`${dimension.key}-${index}`) || 3));
        const average = values.reduce((sum, value) => sum + value, 0) / values.length;
        return [dimension.key, Math.round(average * 20)];
      })
    );
    state.diagnosis = {
      name: formData.get("name") || "张同学",
      school: formData.get("school") || "示例高校",
      grade: formData.get("grade") || "本科三年级",
      major: formData.get("major") || "国际政治专业",
      contact: formData.get("contact") || "",
      date: new Date().toISOString().slice(0, 10),
      answers,
      scores
    };
    localStorage.setItem("futureCompetenceDiagnosis", JSON.stringify(state.diagnosis));
    showToast("诊断已提交，正在生成能力报告");
    navigate("report");
  }

  if (form.matches("[data-registration-form]")) {
    const formData = new FormData(form);
    const registration = Object.fromEntries(formData.entries());
    registration.createdAt = new Date().toLocaleString("zh-CN", { hour12: false });
    state.registrations = [registration, ...state.registrations].slice(0, 5);
    localStorage.setItem("futureCompetenceRegistrations", JSON.stringify(state.registrations));
    form.reset();
    showToast("报名信息已记录，后续可接入外部表单或后台审核");
    render();
  }
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2400);
}

function Header() {
  const user = getCurrentUser();
  return `
    <header class="topbar">
      <button class="brand" data-route="home" aria-label="返回首页">
        <img class="brand-logo" src="./logo.jpg" alt="胜任未来 logo" />
        <span>
          <strong>胜任未来</strong>
          <small>AI赋能的国际胜任力平台</small>
        </span>
      </button>
      <nav class="nav">
        ${navItems.map((item) => `
          <button class="${item.id === state.currentPage || (item.id === "diagnosis" && state.currentPage === "report") ? "active" : ""}" data-route="${item.id}">
            ${item.label}
          </button>
        `).join("")}
      </nav>
      ${user ? `
        <div class="account">
          <span class="bell">●</span>
          <span class="avatar">${getInitial(user.name)}</span>
          <span>${escapeHtml(user.name)}</span>
          <button class="account-link" data-logout>退出</button>
        </div>
      ` : `
        <div class="account auth-actions">
          <button class="secondary" data-auth-mode="login">登录</button>
          <button class="primary" data-auth-mode="register">注册</button>
        </div>
      `}
    </header>
  `;
}

function HomePage() {
  const report = buildReport();
  return `
    <section class="hero">
      <div class="hero-copy">
        <img class="hero-logo" src="./logo.jpg" alt="胜任未来 Future Competence" />
        <p class="eyebrow">面向未来的国际化人才成长平台</p>
        <h1>胜任未来</h1>
        <h2>让涉外能力真正用得上</h2>
        <p class="hero-subtitle">科学诊断、个性学习、实践成长、赋能未来，为高校学生提供国际胜任力训练与涉外发展支持。</p>
        <div class="hero-actions">
          <button class="primary" data-route="diagnosis">开始测评</button>
          <button class="secondary" data-route="courses">查看课程</button>
        </div>
      </div>
      <div class="hero-visual" aria-label="平台数据预览">
        <div class="world-grid"></div>
        <div class="device laptop">
          <img class="screen-logo" src="./logo.jpg" alt="胜任未来 logo" />
          <div class="screen-title">AI赋能的国际胜任力人才培养一站式平台</div>
          <div class="metric-row">
            <span>成长积分 <b>1280</b></span>
            <span>已学课程 <b>38</b></span>
            <span>证书徽章 <b>16</b></span>
          </div>
        </div>
        <div class="device phone">
          <strong>能力雷达</strong>
          <div class="radar-mini"></div>
          <p>${report.low.name}能力建议优先提升</p>
        </div>
        <div class="social-card">
          <strong>胜任未来官方</strong>
          <p>想在国际舞台上发光发热？先让能力路径清晰起来。</p>
        </div>
      </div>
    </section>
    <section class="feature-grid home-features">
      ${[
        ["六项能力诊断", "18题自评生成能力画像", "01", "diagnosis"],
        ["推荐课程", "按短板匹配学习路径", "02", "courses"],
        ["近期活动", "会议、训练营和公开讲座", "03", "events"],
        ["成长档案", "过程记录与成果沉淀", "04", "growth"]
      ].map(([title, desc, icon, route]) => FeatureCard(title, desc, icon, route)).join("")}
    </section>
    <section class="home-section">
      <div class="section-head"><h2>学习路径推荐</h2><button class="secondary" data-route="report">查看诊断报告</button></div>
      <div class="path-grid">
        ${["国际组织实习准备路径", "涉外谈判能力提升路径", "国际议题分析能力路径"].map((name, index) => `
          <article>
            <span>${index + 1}</span>
            <h3>${name}</h3>
            <p>结合能力画像，匹配课程、活动、作品任务与阶段性复盘。</p>
            <button class="secondary" data-route="${index === 0 ? "support" : "courses"}">查看路径</button>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="trust-band">
      ${["权威研发 科学评估", "数据安全 隐私保护", "多端同步 随时随地", "高校合作 持续更新"].map((item) => `<span>${item}</span>`).join("")}
    </section>
  `;
}

function DiagnosisPage() {
  const user = getCurrentUser();
  const profile = user ? state.diagnosis || {} : {};
  return `
    ${PageHero("能力诊断", "通过六项能力自评快速生成学习参考报告和路径推荐", "查看示例报告", "report")}
    <section class="diagnosis-shell">
      <form class="panel diagnosis-form" data-diagnosis-form>
        <div class="form-grid">
          <label>姓名<input name="name" value="${escapeAttr(profile.name || user?.name || "")}" placeholder="请输入姓名" required /></label>
          <label>学校<input name="school" value="${escapeAttr(profile.school || user?.school || "")}" placeholder="请输入学校" required /></label>
          <label>年级<input name="grade" value="${escapeAttr(profile.grade || user?.grade || "")}" placeholder="请输入年级" required /></label>
          <label>专业<input name="major" value="${escapeAttr(profile.major || user?.major || "")}" placeholder="请输入专业" required /></label>
          <label>联系方式<input name="contact" value="${escapeAttr(profile.contact || user?.contact || "")}" placeholder="手机号或邮箱，可留空" /></label>
        </div>
        <div class="question-list">
          ${dimensions.map((dimension) => `
            <section class="question-group">
              <div><strong>${dimension.name}</strong><small>1分较弱，5分较强</small></div>
              ${dimension.questions.map((question, index) => Likert(`${dimension.key}-${index}`, question, getAnswerValue(dimension.key, index))).join("")}
            </section>
          `).join("")}
        </div>
        <div class="form-actions">
          <p>本诊断结果仅作为学习参考与课程推荐依据，不作为正式能力认证。</p>
          <button class="primary" type="submit">提交并生成报告</button>
        </div>
      </form>
      <aside class="panel diagnosis-side">
        <h3>第一版评分方式</h3>
        <p>系统将每个维度的 3 道题按 1-5 分换算为 100 分制，并根据最高、最低维度生成固定规则推荐。</p>
        <div class="prepare-list">
          ${dimensions.map((dimension) => `<span>${dimension.name}</span>`).join("")}
        </div>
        <button class="secondary full" data-route="report">查看已有报告</button>
      </aside>
    </section>
  `;
}

function ReportPage() {
  const report = buildReport();
  return `
    ${PageHero("诊断报告", "展示能力画像、优势短板、学习路径与推荐资源", "重新测评", "diagnosis")}
    <section class="dashboard-grid">
      <aside class="panel profile-card">
        <span class="avatar large">张</span>
        <h3>${report.profile.name} <em>${report.profile.grade}</em></h3>
        <p>${report.profile.school} · ${report.profile.major}</p>
        <dl>
          <div><dt>诊断日期</dt><dd>${report.profile.date}</dd></div>
          <div><dt>测试方式</dt><dd>在线自评 + 规则推荐</dd></div>
          <div><dt>总得分</dt><dd><b>${report.total}</b> / 100 <button class="score-help" data-detail="score">得分说明</button></dd></div>
        </dl>
      </aside>
      <section class="panel radar-panel">
        <h3>六项核心能力图谱</h3>
        <div class="radar-chart">
          <div class="radar-center"><strong>${report.total}</strong><span>综合分</span></div>
          <div class="radar-bars">
            ${report.scores.map(([name, score, key]) => `<div class="radar-bar" data-detail="score-dimension" data-key="${key}"><span>${name}</span><div><i style="width:${score}%"></i></div><b>${score}</b></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="panel score-grid">
        <h3>能力得分概览</h3>
        <div class="mini-cards">
          ${report.scores.map(([name, score]) => `<article><strong>${score}</strong><span>${name}</span><small>${score >= 80 ? "优势" : score >= 70 ? "良好" : "待提升"}</small></article>`).join("")}
        </div>
      </section>
      <aside class="panel">
        <h3>AI辅助诊断洞察</h3>
        <div class="insight good">优势能力：${report.high.name}表现突出，适合承担资料整合、观点表达或小组展示任务。</div>
        <div class="insight warn">提升空间：${report.low.name}相对薄弱，建议通过课程和模拟任务进行阶段训练。</div>
        <div class="insight info">综合评价：${report.summary}</div>
      </aside>
    </section>
    <section class="panel path-section">
      <div class="section-head"><h3>个性化学习路径推荐</h3><button data-toast="诊断报告 PDF 下载将在后台版本接入">下载诊断报告</button></div>
      <div class="path-grid">
        ${report.paths.map((path, index) => `
          <article>
            <span>${index + 1}</span>
            <h4>${path.title}</h4>
            <p>${path.desc}</p>
            <button class="secondary" data-route="${path.route}">${path.action}</button>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="page-shell compact-shell">
      <div class="main-column panel">
        <h3>推荐课程</h3>
        <div class="card-grid">${report.recommendedCourses.map(CourseCard).join("")}</div>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>推荐活动</h3>${events.slice(0, 3).map((event) => `<div class="list-item" data-detail="event" data-index="${events.indexOf(event)}">${event.title}<small>${event.date}</small></div>`).join("")}</section>
        <section class="panel notice"><h3>边界说明</h3><p>诊断、推荐和资讯仅用于学习参考与能力提升支持，不作为正式能力认证，不承诺升学、实习、录取或就业结果。</p></section>
      </aside>
    </section>
  `;
}

function CoursesPage() {
  const categories = ["全部课程", "模拟联合国", "表达训练", "写作与检索", "谈判协商", "跨文化沟通", "涉外发展", "规则理解"];
  const visibleCourses = courses.filter((course) => {
    const categoryMatch = state.courseCategory === "全部课程" || course.category === state.courseCategory;
    const query = state.courseQuery;
    const queryMatch = !query || `${course.title}${course.category}${course.teacher}`.includes(query);
    return categoryMatch && queryMatch;
  });

  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>课程中心</h1><p>优质课程助力提升国际胜任力</p></div>
        <div class="tabs">${categories.map((item) => `<button class="${item === state.courseCategory ? "active" : ""}" data-course-category="${item}">${item}</button>`).join("")}</div>
        <div class="filter-row"><input data-course-query placeholder="搜索课程名称、关键词、讲师" value="${state.courseQuery}" /><select><option>课程难度</option></select><select><option>学习时长</option></select><button data-search>搜索</button><button data-reset-courses>重置</button></div>
        <section class="course-banner">
          <span>本周推荐</span>
          <h2>模拟联合国：从入门到精通</h2>
          <p>系统掌握议题研究、立场文件撰写、磋商谈判与演讲技巧。</p>
          <button class="primary" data-detail="course" data-index="0">查看学习方案</button>
        </section>
        <h3>精选课程</h3>
        <div class="card-grid">${visibleCourses.length ? visibleCourses.map(CourseCard).join("") : EmptyState("暂无匹配课程，试试切换分类或搜索词")}</div>
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
          ${["讲座资讯", "竞赛活动", "实习观察", "国际组织项目", "职业认知", "经历表达支持"].map((x) => `<article><span>▣</span><strong>${x}</strong><a data-toast="${x}列表将在后台版本持续更新">查看全部</a></article>`).join("")}
        </div>
        <section class="panel">
          <div class="section-head"><h3>机会与资源推荐</h3><button data-toast="已按最新发布排序">最新发布</button></div>
          ${supportRows.map(([title, source, date]) => `<div class="resource-row"><div class="thumb"></div><div><h4>${title}</h4><p>主办方 ${source} · ${date}</p></div><button class="secondary" data-toast="已加入我的发展关注">查看详情</button></div>`).join("")}
        </section>
        <section class="guide-grid">
          ${["简历优化", "模拟面试反馈", "个人陈述指导"].map((x) => `<article><h3>${x}</h3><p>结合涉外项目经历，优化表达结构与内容呈现。</p><a data-toast="${x}工作台将在后续版本接入">开始使用</a></article>`).join("")}
        </section>
        <p class="safe-note">平台提供信息整理与能力准备支持，不承诺实习、录取、升学或岗位结果。</p>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>发展方向建议</h3>${["国际组织与公共事务", "跨国企业与国际化岗位", "全球议题研究与学术深造", "国际传播与文化交流"].map((x) => `<div class="list-item">${x}<span>›</span></div>`).join("")}</section>
        <section class="panel"><h3>能力准备清单</h3>${buildReport().scores.slice(1).map(([name, score]) => Progress(name, Math.max(score - 8, 0))).join("")}<button class="primary full" data-route="courses">开始能力提升</button></section>
      </aside>
    </section>
  `;
}

function GrowthPage() {
  const user = getCurrentUser();
  if (!user) {
    return `
      <section class="page-shell">
        <div class="main-column">
          <div class="page-title"><h1>成长档案</h1><p>登录后记录学习旅程，见证每一次成长</p></div>
          <section class="panel blank-profile">
            <div class="blank-avatar"></div>
            <h2>暂无成长档案</h2>
            <p>登录或注册后，系统会在这里展示你的课程学习、项目成果、徽章、能力进度和档案下载记录。</p>
            <div class="hero-actions">
              <button class="primary" data-auth-mode="login">登录</button>
              <button class="secondary" data-auth-mode="register">注册</button>
            </div>
          </section>
        </div>
        <aside class="side-column">
          <section class="panel"><h3>最新动态</h3>${EmptyState("登录后显示个人动态")}</section>
          <section class="panel"><h3>档案下载中心</h3>${EmptyState("登录后生成可下载档案")}</section>
        </aside>
      </section>
    `;
  }

  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>成长档案</h1><p>记录学习旅程，见证每一次成长</p></div>
        <section class="panel profile-wide">
          <span class="avatar large">${getInitial(user.name)}</span>
          <div><h2>${escapeHtml(user.name)} <em>LV.1 新学习者</em></h2><p>${escapeHtml(user.school || "未填写学校")} · ${escapeHtml(user.major || "未填写专业")} · ${escapeHtml(user.grade || "未填写年级")}</p><small>加入平台 ${formatDate(user.createdAt)} · 累计学习 0 天</small></div>
          <div class="stats">${[["课程学习", "38门"], ["完成项目", "12个"], ["获得徽章", "16枚"], ["综合积分", "1280分"]].map(([k, v]) => `<span><b>${v}</b>${k}</span>`).join("")}</div>
        </section>
        <section class="growth-layout">
          <div class="panel timeline"><h3>成长时间轴</h3>${["完成《全球议题工作坊：气候治理与青年角色》项目", "获得徽章：跨文化沟通之星", "提交训练营作品《可持续城市倡议方案》", "完成阶段复盘：国际组织模拟项目"].map((x, i) => `<div><time>2026.0${5 - i}.18</time><p>${x}</p></div>`).join("")}</div>
          <div>
            <section class="panel"><h3>成长档案库</h3><div class="archive-grid">${["立场文件", "发言记录", "导师反馈", "会议成果", "训练作品", "阶段复盘"].map((x) => `<article><strong>${x}</strong><span>查看与管理</span></article>`).join("")}</div></section>
            <section class="panel"><h3>六项核心能力进度</h3>${buildReport().scores.map(([name, score]) => Progress(name, score)).join("")}</section>
          </div>
        </section>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>最新动态</h3>${["导师发布了新的反馈", "你的立场文件被点赞", "新增会议纪要", "获得新徽章"].map((x) => `<div class="list-item">${x}<small>2小时前</small></div>`).join("")}</section>
        <section class="panel"><h3>档案下载中心</h3>${["成长档案（PDF）", "阶段成长报告", "能力诊断报告", "项目复盘书"].map((x) => `<div class="list-item">${x}<button data-toast="${x}下载将在后台版本接入">下载</button></div>`).join("")}</section>
      </aside>
    </section>
  `;
}

function EventsPage() {
  const types = ["全部活动", "模拟联合国会议", "小班训练营", "公开讲座", "体验活动"];
  const visibleEvents = events.filter((event) => state.eventType === "全部活动" || event.type === state.eventType);
  const featured = visibleEvents[0] || events[0];
  const user = getCurrentUser();
  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>活动报名</h1><p>发现活动、拓展视野、提升国际胜任力</p></div>
        <div class="tabs">${types.map((item) => `<button class="${item === state.eventType ? "active" : ""}" data-event-type="${item}">${item}</button>`).join("")}</div>
        <div class="date-strip">${["18 周一", "19 周二", "20 周三", "21 周四", "22 周五", "23 周六", "24 周日"].map((x) => `<button class="${x === state.selectedEventDate ? "active" : ""}" data-event-date="${x}">${x}</button>`).join("")}</div>
        <section class="event-feature">
          <div class="event-image"></div>
          <div>
            <span>${featured.type}</span>
            <h2>${featured.title}</h2>
            <p>${featured.date} · ${featured.place} · ${featured.people}</p>
            <p>${featured.desc}</p>
            <button class="primary" data-detail="event" data-index="${events.indexOf(featured)}">查看报名详情</button>
          </div>
        </section>
        <div class="event-grid">${visibleEvents.slice(1).map(EventCard).join("") || EmptyState("该分类下暂无更多活动")}</div>
      </div>
      <aside class="side-column">
        <section class="panel">
          <h3>快速报名</h3>
          <form class="register-form" data-registration-form>
            <label>姓名<input name="name" required placeholder="请输入姓名" value="${escapeAttr(user?.name || "")}" /></label>
            <label>学校/单位<input name="school" required placeholder="请输入学校或单位" value="${escapeAttr(user?.school || "")}" /></label>
            <label>联系方式<input name="contact" required placeholder="手机号或邮箱" value="${escapeAttr(user?.contact || "")}" /></label>
            <label>报名活动<select name="event">${events.map((event) => `<option>${event.title}</option>`).join("")}</select></label>
            <label>备注<textarea name="note" rows="3" placeholder="可填写学习目标或时间偏好"></textarea></label>
            <button class="primary full" type="submit">提交报名信息</button>
          </form>
        </section>
        <section class="panel"><h3>报名流程</h3>${["选择活动", "填写报名信息", "等待审核", "完成支付", "参加活动"].map((x, i) => `<div class="step"><b>${i + 1}</b><span>${x}</span></div>`).join("")}</section>
        <section class="panel"><h3>我的报名</h3>${state.registrations.length ? state.registrations.map((item) => `<div class="list-item">${item.event}<small>${item.name} · ${item.createdAt || item.contact}</small></div>`).join("") : EmptyState("暂无报名记录")}</section>
      </aside>
    </section>
  `;
}

function ResourcesPage() {
  const categories = ["全部", "高校讲座", "专家专题", "背景文件", "专题资料包", "公开活动回放"];
  const visibleResources = resources.filter((resource) => {
    const categoryMatch = state.resourceCategory === "全部" || resource.category === state.resourceCategory;
    const queryMatch = !state.resourceQuery || `${resource.title}${resource.source}${resource.category}`.includes(state.resourceQuery);
    return categoryMatch && queryMatch;
  });

  return `
    <section class="page-shell">
      <div class="main-column">
        <div class="page-title"><h1>资源库</h1><p>汇聚高校、机构与专家授权的优质内容，助力个性化学习与能力成长</p></div>
        <div class="search-row"><input data-resource-query placeholder="搜索内容标题、主讲人、机构或关键词" value="${state.resourceQuery}" /><button class="primary" data-search>搜索</button></div>
        <div class="tabs">${categories.map((item) => `<button class="${item === state.resourceCategory ? "active" : ""}" data-resource-category="${item}">${item}</button>`).join("")}</div>
        <div class="resource-grid">${visibleResources.length ? visibleResources.map(ResourceCard).join("") : EmptyState("暂无匹配资源，试试切换分类或搜索词")}</div>
        <p class="safe-note">资源仅用于学习研究，未经许可不得复制或传播。</p>
      </div>
      <aside class="side-column">
        <section class="panel"><h3>最近访问</h3>${resources.slice(0, 5).map((item) => `<div class="mini-resource"><div class="thumb small"></div><span>${item.title}<small>${item.category}</small></span></div>`).join("")}</section>
        <section class="panel"><h3>推荐专题资料包</h3>${["国际组织实习与职业发展资料包", "全球胜任力提升系列资料包", "跨文化沟通基础资料包"].map((x) => `<div class="list-item">${x}<button data-toast="已加入学习清单">加入学习</button></div>`).join("")}</section>
      </aside>
    </section>
  `;
}

const pages = {
  home: HomePage,
  diagnosis: DiagnosisPage,
  report: ReportPage,
  courses: CoursesPage,
  support: SupportPage,
  growth: GrowthPage,
  events: EventsPage,
  resources: ResourcesPage
};

function PageHero(title, subtitle, action, route) {
  return `
    <section class="inner-hero">
      <div>
        <p class="breadcrumb">首页 › 能力诊断 › ${title}</p>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <button class="secondary" data-route="${route}">${action}</button>
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

function FeatureCard(title, desc, icon, route) {
  return `<article class="feature-card" data-route="${route}"><span>${icon}</span><h3>${title}</h3><p>${desc}</p></article>`;
}

function CourseCard(course) {
  const index = courses.indexOf(course);
  return `<article class="course-card"><div class="thumb"><span>${course.category}</span></div><h3>${course.title}</h3><p>${course.level} · ${course.hours} · ${course.teacher}</p><footer><span>★ ${course.rating}</span><button class="secondary" data-detail="course" data-index="${index}">查看详情</button></footer></article>`;
}

function EventCard(event) {
  const index = events.indexOf(event);
  return `<article class="event-card"><div class="thumb tall"><span>${event.type}</span></div><h3>${event.title}</h3><p>${event.date}</p><p>${event.place} · ${event.people}</p><button class="primary" data-detail="event" data-index="${index}">报名详情</button><button class="ghost" data-toast="已收藏活动">收藏</button></article>`;
}

function ResourceCard(resource) {
  const index = resources.indexOf(resource);
  return `<article class="resource-card"><div class="thumb"><span>${resource.category}</span><b>${resource.type}</b></div><h3>${resource.title}</h3><p>${resource.source} · ${resource.date} · ${resource.views}次访问</p><button class="secondary" data-detail="resource" data-index="${index}">查看内容</button></article>`;
}

function PlanPanel() {
  return `<section class="panel"><h3>为你推荐的学习计划</h3>${["国际胜任力提升计划 · 初级", "模拟联合国专项突破计划"].map((x, i) => `<div class="plan"><strong>${x}</strong>${Progress(i === 0 ? "已完成" : "未开始", i === 0 ? 32 : 0)}<button class="secondary" data-toast="学习计划已加入成长档案">${i === 0 ? "继续学习" : "开始学习"}</button></div>`).join("")}</section>`;
}

function RecentPanel() {
  return `<section class="panel"><h3>最近学习</h3>${courses.slice(2, 5).map((course, i) => `<div class="mini-resource"><div class="thumb small"></div><span>${course.title}<small>学习中 · ${60 - i * 15}%</small></span></div>`).join("")}</section>`;
}

function Progress(label, value) {
  return `<div class="progress"><span>${label}</span><div><i style="width:${value}%"></i></div><b>${value}%</b></div>`;
}

function Likert(name, question, selected) {
  return `
    <div class="likert">
      <span>${question}</span>
      <div>
        ${[1, 2, 3, 4, 5].map((value) => `
          <label><input type="radio" name="${name}" value="${value}" ${value === selected ? "checked" : ""} /><b>${value}</b></label>
        `).join("")}
      </div>
    </div>
  `;
}

function EmptyState(text) {
  return `<div class="empty-state">${text}</div>`;
}

function AuthModal(mode) {
  const isRegister = mode === "register";
  return `
    <aside class="auth-backdrop" data-close-auth>
      <section class="auth-modal" role="dialog" aria-modal="true" aria-label="${isRegister ? "注册" : "登录"}">
        <button class="drawer-close" data-close-auth aria-label="关闭">×</button>
        <span class="drawer-kicker">演示账号</span>
        <img class="auth-logo" src="./logo.jpg" alt="胜任未来 logo" />
        <h2>${isRegister ? "创建学习账号" : "登录胜任未来"}</h2>
        <p>${isRegister ? "注册后会在本浏览器保存基础资料，用于预填测评和活动报名。" : "使用已注册的手机号或邮箱登录，继续查看诊断、报名与成长记录。"}</p>
        <form class="auth-form" data-auth-form>
          <input type="hidden" name="mode" value="${mode}" />
          ${isRegister ? `
            <label>姓名<input name="name" required placeholder="例如：张同学" /></label>
            <label>学校<input name="school" required placeholder="例如：北京大学" /></label>
            <label>年级<input name="grade" required placeholder="例如：本科三年级" /></label>
            <label>专业<input name="major" required placeholder="例如：国际政治专业" /></label>
          ` : ""}
          <label>手机号或邮箱<input name="account" required placeholder="请输入手机号或邮箱" /></label>
          <label>密码<input name="password" type="password" required minlength="6" placeholder="至少 6 位" /></label>
          <button class="primary full" type="submit">${isRegister ? "注册并登录" : "登录"}</button>
        </form>
        <div class="auth-switch">
          ${isRegister ? "已有账号？" : "还没有账号？"}
          <button data-auth-mode="${isRegister ? "login" : "register"}">${isRegister ? "去登录" : "立即注册"}</button>
        </div>
        <p class="safe-note">当前为 MVP 演示登录，账号数据仅保存在本浏览器 localStorage 中。</p>
      </section>
    </aside>
  `;
}

function DetailDrawer(detail) {
  return `
    <aside class="drawer-backdrop" data-close-drawer>
      <section class="detail-drawer" role="dialog" aria-modal="true" aria-label="${detail.title}">
        <button class="drawer-close" data-close-drawer aria-label="关闭">×</button>
        <span class="drawer-kicker">${detail.kicker}</span>
        <h2>${detail.title}</h2>
        <p>${detail.desc}</p>
        <div class="drawer-meta">${detail.meta.map((item) => `<span>${item}</span>`).join("")}</div>
        <div class="drawer-block">
          <h3>${detail.sectionTitle}</h3>
          ${detail.items.map((item) => `<div class="check-row"><b>✓</b><span>${item}</span></div>`).join("")}
        </div>
        <div class="drawer-actions">
          ${detail.actions.map((action) => `<button class="${action.style}" ${action.route ? `data-route="${action.route}"` : `data-toast="${action.toast}"`}>${action.label}</button>`).join("")}
        </div>
      </section>
    </aside>
  `;
}

function FooterDock() {
  return `
    <footer class="footer-dock">
      ${[
        ["diagnosis", "科学诊断", "问卷评估与成长报告"],
        ["courses", "个性学习", "定制学习路径与资源"],
        ["events", "实践赋能", "真实场景与实践机会"],
        ["growth", "成长追踪", "学习记录与成长轨迹"]
      ].map(([route, title, desc]) => `<button data-route="${route}"><strong>${title}</strong><span>${desc}</span></button>`).join("")}
    </footer>
  `;
}

function handleAuthSubmit(form) {
  const formData = new FormData(form);
  const mode = formData.get("mode");
  const account = String(formData.get("account") || "").trim();
  const password = String(formData.get("password") || "");

  if (!account || password.length < 6) {
    showToast("请输入账号，并设置至少 6 位密码");
    return;
  }

  if (mode === "register") {
    if (state.users.some((user) => user.account === account)) {
      showToast("该账号已注册，请直接登录");
      state.authMode = "login";
      render();
      return;
    }

    const user = {
      id: `u_${Date.now()}`,
      name: String(formData.get("name") || "新同学").trim(),
      school: String(formData.get("school") || "").trim(),
      grade: String(formData.get("grade") || "").trim(),
      major: String(formData.get("major") || "").trim(),
      contact: account,
      account,
      password,
      createdAt: new Date().toISOString()
    };
    state.users = [user, ...state.users];
    state.currentUserId = user.id;
    persistUsers();
    state.authMode = null;
    showToast("注册成功，已自动登录");
    return;
  }

  const user = state.users.find((item) => item.account === account && item.password === password);
  if (!user) {
    showToast("账号或密码不正确");
    return;
  }

  state.currentUserId = user.id;
  localStorage.setItem("futureCompetenceCurrentUserId", user.id);
  state.authMode = null;
  showToast("登录成功，欢迎回来");
}

function persistUsers() {
  localStorage.setItem("futureCompetenceUsers", JSON.stringify(state.users));
  if (state.currentUserId) {
    localStorage.setItem("futureCompetenceCurrentUserId", state.currentUserId);
  }
}

function getCurrentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function getInitial(name) {
  return String(name || "同").trim().slice(0, 1);
}

function formatDate(value) {
  if (!value) return "今天";
  return new Date(value).toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function buildDetail(type, rawIndex, key) {
  const index = Number(rawIndex);
  if (type === "score") {
    const report = buildReport();
    return {
      kicker: "诊断评分模型",
      title: `总分 ${report.total} 分是如何得出的`,
      desc: "MVP 版本采用可解释的规则评分：先计算六项能力得分，再按权重合成为综合分。后续接入 AI 后，可在此基础上加入情景题、表达任务和学习行为数据。",
      meta: ["基础信息 20%", "自评题目 30%", "情景题 30%", "简短表达任务 20%"],
      sectionTitle: "当前版本计算方式",
      items: [
        `六项能力平均分：${report.scores.map(([name, score]) => `${name}${score}分`).join("、")}`,
        `综合分 = 六项能力得分均值，当前为 ${report.total} 分`,
        "后续增强版可改为：基础信息 20% + 自评题目 30% + 情景题 30% + 简短表达任务 20%",
        `优势能力为${report.high.name}，提升空间为${report.low.name}，路径推荐会优先围绕这两项生成`
      ],
      actions: [
        { label: "查看六项能力", style: "primary", toast: "六项能力依据已展示在能力图谱中，可点击单项查看说明" },
        { label: "重新测评", style: "secondary", route: "diagnosis" }
      ]
    };
  }

  if (type === "score-dimension") {
    const report = buildReport();
    const dimension = dimensions.find((item) => item.key === key) || dimensions[0];
    const score = report.scores.find((item) => item[2] === dimension.key)?.[1] || 0;
    const basis = {
      expression: "主要依据公开表达、观点结构、压力下发言等题目表现。",
      language: "主要依据英文资料阅读、口头表达和基础写作等题目表现。",
      culture: "主要依据文化差异理解、多元团队合作和主动倾听等题目表现。",
      negotiation: "主要依据方案提出、分歧回应、推动共识等协商场景表现。",
      rules: "主要依据议事规则、国际组织规则和合规边界理解等题目表现。",
      analysis: "主要依据资料检索、议题背景分析和观点证据支撑等题目表现。"
    };
    return {
      kicker: "单项能力依据",
      title: `${dimension.name} ${score} 分`,
      desc: basis[dimension.key],
      meta: ["自评题目", "场景表现", "学习路径推荐依据"],
      sectionTitle: "题目来源",
      items: dimension.questions.map((question) => `题目：${question}`),
      actions: [
        { label: "推荐相关课程", style: "primary", route: "courses" },
        { label: "查看总分说明", style: "secondary", toast: "点击总分旁的“得分说明”可查看综合分构成" }
      ]
    };
  }

  if (type === "course") {
    const course = courses[index] || courses[0];
    return {
      kicker: course.category,
      title: course.title,
      desc: "围绕测评短板与真实涉外场景设计，第一版展示课程结构与学习意向，后续可接入视频、作业和学习记录。",
      meta: [course.level, course.hours, `讲师 ${course.teacher}`, `评分 ${course.rating}`],
      sectionTitle: "学习模块",
      items: ["课前能力自检与学习目标确认", "核心概念讲解与案例拆解", "场景化任务练习与提交", "阶段复盘进入成长档案"],
      actions: [
        { label: "加入学习计划", style: "primary", toast: "已加入学习计划，可在成长档案中查看" },
        { label: "查看诊断报告", style: "secondary", route: "report" }
      ]
    };
  }

  if (type === "event") {
    const event = events[index] || events[0];
    return {
      kicker: event.type,
      title: event.title,
      desc: event.desc,
      meta: [event.date, event.place, event.people],
      sectionTitle: "报名与准备",
      items: ["填写基础报名信息并提交审核", "根据活动方向完成资料阅读和任务准备", "活动过程记录进入成长档案", "活动结束后生成阶段复盘和导师反馈"],
      actions: [
        { label: "去填写报名", style: "primary", route: "events" },
        { label: "收藏活动", style: "secondary", toast: "已收藏活动" }
      ]
    };
  }

  const resource = resources[index] || resources[0];
  return {
    kicker: resource.category,
    title: resource.title,
    desc: "资源库用于沉淀讲座、背景文件、专题资料包与公开活动回放，第一版展示权限和学习入口，后续可接入文件存储。",
    meta: [resource.type, resource.source, resource.date, `${resource.views}次访问`],
    sectionTitle: "内容用途",
    items: ["用于课程预习和议题背景检索", "可加入个人学习清单", "支持后续关联到学习路径", "仅用于学习研究，未经许可不得复制传播"],
    actions: [
      { label: "加入学习清单", style: "primary", toast: "已加入学习清单" },
      { label: "返回资源库", style: "secondary", route: "resources" }
    ]
  };
}

function buildReport() {
  const profile = state.diagnosis || {
    name: "张同学",
    school: "北京大学",
    grade: "本科三年级",
    major: "国际政治专业",
    date: "2026-05-12",
    scores: defaultScores
  };
  const scoreMap = profile.scores || defaultScores;
  const scores = dimensions.map((dimension) => [dimension.name, scoreMap[dimension.key], dimension.key]);
  const total = Math.round(scores.reduce((sum, [, score]) => sum + score, 0) / scores.length);
  const high = scores.reduce((best, item) => (item[1] > best[1] ? item : best), scores[0]);
  const low = scores.reduce((weakest, item) => (item[1] < weakest[1] ? item : weakest), scores[0]);
  const recommendedCourses = courses.filter((course) => course.matches.includes(low[2]) || course.matches.includes(high[2])).slice(0, 3);
  return {
    profile,
    scores,
    total,
    high: { name: high[0], score: high[1], key: high[2] },
    low: { name: low[0], score: low[1], key: low[2] },
    summary: total >= 80 ? "整体能力基础较好，可进入综合实践和项目成果沉淀阶段。" : total >= 70 ? "整体处于良好发展阶段，建议围绕短板维度进行专项训练。" : "建议先完成基础课程和低压力实践任务，逐步建立表达与协作信心。",
    recommendedCourses,
    paths: [
      { title: `${low[0]}专项提升路径`, desc: "优先补齐当前短板，完成课程学习、场景练习和阶段复盘。", action: "查看课程", route: "courses" },
      { title: "国际组织实习准备路径", desc: "围绕规则理解、议题分析和经历表达建立项目准备清单。", action: "查看支持", route: "support" },
      { title: "实践活动成长路径", desc: "通过会议、讲座和训练营将能力训练沉淀为可展示成果。", action: "报名活动", route: "events" }
    ]
  };
}

function getAnswerValue(dimensionKey, index) {
  if (!state.diagnosis?.answers) return 3;
  const dimensionIndex = dimensions.findIndex((dimension) => dimension.key === dimensionKey);
  return state.diagnosis.answers[dimensionIndex * 3 + index] || 3;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

render();
