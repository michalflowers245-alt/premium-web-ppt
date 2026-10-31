'use strict';
const repository = 'https://github.com/michalflowers245-alt/premium-web-ppt';
const sourceIndex = `${repository}/blob/main/references/source-index.md`;

// The menu only controls navigation on narrow viewports; all links remain real anchors.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('site-nav');
function closeMenu(restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '目录 <span aria-hidden="true">＋</span>';
  navigation.dataset.open = 'false';
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.innerHTML = open ? '收起 <span aria-hidden="true">−</span>' : '目录 <span aria-hidden="true">＋</span>';
  navigation.dataset.open = String(open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
window.addEventListener('resize', () => { if (innerWidth > 800) closeMenu(); });

const features = {
  architecture: { image: 'docs/assets/web-architecture.png', alt: '见山工作室完整网页排版：大白边、宋体标题、建筑竖图与项目图注', number: '01 / 网页', title: '见山工作室', note: '大白边与建筑竖图建立主次，说明落在同一条对齐线上。', href: 'examples/web/architecture/', label: '打开完整网页', footnote: '原创概念演示 · 上图为实际页面排版，照片素材由 GPT 生成' },
  art: { image: 'docs/assets/web-art.png', alt: '未完成的日常完整网页排版：明黄黑白双联画、大中文标题与展讯目录', number: '02 / 网页', title: '未完成的日常', note: '用双联画建立张力，再用展讯与目录交代信息。', href: 'examples/web/art/', label: '打开艺术活动网页', footnote: '原创概念演示 · 上图为实际页面排版，几何作品由原生 SVG 创作' },
  craft: { image: 'examples/ppt/craft/slide-1.png', alt: '缓物工艺品牌PPT第一页完整排版：宋体标题、物料静物与稳定图注', number: '04 / PPT', title: '缓物 · 工艺品牌', note: '文字、图像与留白共同安排。一张完整幻灯片，也有清楚的阅读顺序。', href: 'examples/ppt/craft/craft.pptx', label: '逐页预览这套PPT', deck: 'craft', footnote: '原创概念演示 · 上图为完整幻灯片，照片素材由 GPT 生成' }
};
function selectFeature(key) {
  const item = features[key];
  if (!item) return;
  document.querySelectorAll('[data-feature]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.feature === key)));
  const image = document.getElementById('featured-image');
  image.src = item.image;
  image.alt = item.alt;
  document.getElementById('featured-number').textContent = item.number;
  document.getElementById('featured-title').textContent = item.title;
  document.getElementById('featured-note').textContent = item.note;
  document.querySelector('.figure-note').textContent = item.footnote;
  for (const link of [document.getElementById('featured-open'), document.getElementById('featured-caption-link')]) {
    link.href = item.href;
    link.setAttribute('aria-label', `${item.label}：${item.title}`);
    if (item.deck) link.dataset.featureDeck = item.deck;
    else delete link.dataset.featureDeck;
  }
  document.getElementById('featured-caption-link').innerHTML = `${item.label} <span aria-hidden="true">↗</span>`;
}
document.querySelectorAll('[data-feature]').forEach(button => button.addEventListener('click', () => selectFeature(button.dataset.feature)));

const works = [...document.querySelectorAll('.work')];
const worksGrid = document.getElementById('works-grid');
function filterWorks(type) {
  if (!['all', 'web', 'ppt'].includes(type)) return;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === type)));
  worksGrid.dataset.activeFilter = type;
  const visible = [];
  for (const work of works) {
    work.hidden = type !== 'all' && work.dataset.kind !== type;
    work.classList.remove('work-wide', 'work-narrow', 'work-offset', 'work-full');
    if (!work.hidden) visible.push(work);
    if (type === 'all') work.dataset.defaultLayout.split(' ').forEach(layout => work.classList.add(`work-${layout}`));
  }
  if (type !== 'all') {
    visible.forEach((work, index) => work.classList.add(index === 0 ? 'work-wide' : index === 1 ? 'work-narrow' : 'work-full'));
  }
  document.getElementById('filter-status').textContent = type === 'all' ? '6 组原创概念演示' : type === 'web' ? '3 个网页 · 可完整浏览' : '3 套 PPT · 共 9 页';
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => filterWorks(button.dataset.filter)));
function respondToHash() {
  if (location.hash === '#web') filterWorks('web');
  else if (location.hash === '#slides') filterWorks('ppt');
  else if (location.hash === '#works') filterWorks('all');
}
window.addEventListener('hashchange', respondToHash);
respondToHash();

const decks = { craft: '缓物 · 工艺品牌', business: 'AI门店试点方案', culture: '光的秩序 · 文化策展' };
const dialog = document.getElementById('slide-dialog');
const slideImage = document.getElementById('dialog-image');
let currentDeck = 'craft';
let currentPage = 1;
let previewOpener = null;
function showSlide(page) {
  currentPage = Math.min(3, Math.max(1, page));
  document.getElementById('dialog-title').textContent = decks[currentDeck];
  document.getElementById('slide-error').hidden = true;
  slideImage.src = `examples/ppt/${currentDeck}/slide-${currentPage}.png`;
  slideImage.alt = `${decks[currentDeck]}，第${currentPage}页完整幻灯片`;
  document.getElementById('slide-count').textContent = `第 ${currentPage} / 3 页`;
  document.getElementById('slide-prev').disabled = currentPage === 1;
  document.getElementById('slide-next').disabled = currentPage === 3;
  document.getElementById('dialog-download').href = `examples/ppt/${currentDeck}/${currentDeck}.pptx`;
}
function openDeck(deck, opener) {
  if (!decks[deck]) return;
  currentDeck = deck;
  previewOpener = opener || document.activeElement;
  showSlide(1);
  dialog.showModal();
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus();
}
document.querySelectorAll('[data-deck]').forEach(button => button.addEventListener('click', () => openDeck(button.dataset.deck, button)));
for (const link of [document.getElementById('featured-open'), document.getElementById('featured-caption-link')]) {
  link.addEventListener('click', event => {
    if (link.dataset.featureDeck) { event.preventDefault(); openDeck(link.dataset.featureDeck, link); }
  });
}
document.getElementById('slide-prev').addEventListener('click', () => showSlide(currentPage - 1));
document.getElementById('slide-next').addEventListener('click', () => showSlide(currentPage + 1));
function closeDeck() {
  dialog.close();
  document.body.classList.remove('modal-open');
  if (previewOpener?.isConnected && !previewOpener.closest('[hidden]')) previewOpener.focus({ preventScroll: true });
}
document.querySelector('.dialog-close').addEventListener('click', closeDeck);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDeck(); });
slideImage.addEventListener('error', () => { document.getElementById('slide-error').hidden = false; });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDeck();
});
dialog.addEventListener('close', () => {
  if (dialog.open) return;
  document.body.classList.remove('modal-open');
  if (previewOpener?.isConnected && !previewOpener.closest('[hidden]')) previewOpener.focus({ preventScroll: true });
});
document.addEventListener('keydown', event => {
  if (dialog.open) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(currentPage - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(currentPage + 1); }
  } else if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

const styleData = [
  ['01','编辑画册','作品集 / 品牌故事','用共同边界、大白边与稳定图注，让图像与说明形成清楚的比例。适合有真实案例、需要慢慢阅读的作品集和品牌叙述。','见山工作室采用了窄说明栏、建筑竖图与固定项目元数据。','architecture','006 / 022 / 124'],
  ['02','艺术编辑','创意 / 展览 / 活动','双联画、硬分屏或展示大字中选择一个主手法。适合有鲜明观点、足够强的作品或标题的内容。','未完成的日常用明黄和黑白作品形成张力，再用展讯交代细节。','art','004 / 014 / 054'],
  ['03','古典工艺','文化 / 香氛 / 物件','让色彩与细节来自真实物料；衬线承担展示，清楚的正文承担说明。纹样和纸感只在主题需要时出现。','缓物以静物、材料和系列三页，组织一组物件提案。','craft','045 / 049 / 075'],
  ['04','空间材质','建筑 / 家居 / 体验','通过自然光、材质、透视与人的尺度建立层次。大图之后，仍要给项目与参数留下可读的位置。','见山工作室的概念图用于解释空间，项目说明保持独立。','architecture','094 / 120 / 130'],
  ['05','作品档案','项目 / 案例 / 路线图','用编号、类型和统一图注支持浏览；图片可以大小不同，对齐关系需要一致。适合项目比较与信息索引。','本页的作品档案与AI门店方案，都用编号、细线和分组安排内容。','business','123 / 132 / 135'],
  ['06','精密展陈','硬件 / 制造 / 技术','让一个核心产品与清楚的材质细节成为主角。光泽、轮廓和少量参数承担质感，深底与浅底都可以成立。','声隅用产品图、短说明与深浅区域切换，展开概念设计。','speaker','029 / 178 / 179'],
  ['07','电影摄影','品牌 / 场景 / 发布','先选择主体、方向和负空间明确的画面，再安排短标题。适合场景开场，后续页面转入可读说明。','声隅可用来观察图像与短文案的尺度关系；新增动态仍需要单独设计。','speaker','009 / 024 / 176'],
  ['08','清晰发布','产品 / 商务 / 方案','让主标题、短说明、主对象与下一步有明确先后。商业内容保留数据口径，不能只剩一张发布海报。','AI门店试点方案把判断、路径与指标框架分别放在三页。','business','059 / 073 / 178'],
  ['09','目的地叙事','酒店 / 餐饮 / 文旅','让空间、人物和物件先建立情境，再补足地点、服务与行动。远景和细节应共享色温与叙事关系。','缓物展示了物料与叙述的组合；目的地项目还需要真实服务信息。','craft','187 / 190 / 195'],
  ['10','文化出版','展讯 / 资讯 / 研究','大标题、作品图组和较密说明分别建立层级。用分栏、时间线与元数据消化密度，内容充足也能有主次。','光的秩序在作品、时间线和展览目录之间切换阅读密度。','culture','131 / 146 / 150']
];
document.getElementById('style-list').innerHTML = styleData.map(item => `<details class="style-item"><summary><span class="style-number">${item[0]}</span><span class="style-name">${item[1]}</span><span class="style-for">${item[2]}</span><span class="style-mark" aria-hidden="true">＋</span></summary><div class="style-content"><div><h4>适用内容与关键手法</h4><p>${item[3]}</p><a href="#case-${item[5]}" data-case-link="case-${item[5]}">看相关原创案例 <span aria-hidden="true">↗</span></a></div><div class="style-related"><h4>案例与参考</h4><p>${item[4]}</p><a href="${sourceIndex}">参考 ${item[6]} ↗</a></div></div></details>`).join('');
document.querySelectorAll('[data-case-link]').forEach(link => link.addEventListener('click', () => {
  const target = document.getElementById(link.dataset.caseLink);
  if (target?.hidden) filterWorks('all');
}));

const prompts = {
  web: '用 $premium-web-ppt，把这些内容做成清楚、有气质的品牌网页。\n先看相关参考，选择合适的方向，保留已有事实与认可部分。\n完成桌面和手机预览检查后交付。',
  ppt: '用 $premium-web-ppt，把这份材料做成12页中文PPT。\n先选适合内容的视觉方向，标题、正文和图表保持可编辑。\n保留已有事实与认可部分，导出后逐页检查再交付。'
};
document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => {
  const type = button.dataset.prompt;
  document.querySelectorAll('[data-prompt]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  document.getElementById('call-prompt').textContent = prompts[type];
  const copyButton = document.querySelector('[data-copy="call-prompt"]');
  copyButton.textContent = copyButton.dataset.label;
  document.getElementById('prompt-copy-status').textContent = '';
}));
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const target = button.dataset.copy;
  const status = document.getElementById(target === 'install-code' ? 'install-copy-status' : 'prompt-copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(document.getElementById(target).textContent);
    button.textContent = '已复制';
    status.dataset.state = 'success';
    status.textContent = target === 'install-code' ? '命令已复制，可粘贴到终端。' : '调用内容已复制，可带上你的材料开始。';
  } catch {
    button.textContent = '复制失败';
    status.dataset.state = 'error';
    status.textContent = '未能自动复制，请选中上方文字手动复制。';
  }
}));
