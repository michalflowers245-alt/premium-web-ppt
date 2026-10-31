# 200站视觉参考索引

## 来源与覆盖

- 整理日期：2026-10-31，Asia/Shanghai；这不是截图采集日期。材料来自用户提供的《高级官网图鉴200》本地快照，原始截图采集时间未逐站核实，不能据此判断当前官网。
- 公开技能包附有200站索引、20张首屏图集与视觉分析；基础使用不依赖原始PPT、PDF或任何特定电脑目录。原始200份PPT与两份总榜PDF不在本仓库，高清原图提取为持有原件用户的可选功能。
- 原材料的两份总榜PDF各205页；整理时核对元数据，读取预览版前6页文字并渲染前5页。全部200份单站PPTX建立可抽取文字与元数据索引，共1503页、1103张嵌入截图；200个首图通过缩略图目检，另放大27张代表源图。没有逐张精查全部1103张图，没有访问线上200站，也没有测试响应式或运行时交互。
- 17个品类沿用原材料分类，其中设计机构也被列入“建筑设计”；分类不是品牌身份独立核验。相对原件文件名、原件所列网址、PPT文字与AI视觉标签分别保存在[corpus.json](corpus.json)。
- “可用”仅指可见静态构图；不代表品牌身份、当前业务事实、摄影许可或网站运行状态已核实。HTTP/动效笔记是原材料自报记录，与截图可用性分开；403不自动判废，200也不证明画面已加载。
- 058空白；090疑似错站；122内容归属待核。056只有地区入口，不支持对其商品主站的完整结论。155/164/167/169/175/177的首屏存在空白或缺失媒体；118/136主要被弹窗覆盖。其他局部污染见逐行限制，不能把弹窗、遮罩或加载失败学成风格。
- 详细目检依据按需读：[001–070](visual-analysis-001-070.md)、[071–140](visual-analysis-071-140.md)、[141–200](visual-analysis-141-200.md)。这些是AI视觉分析，与PPT内原始交互笔记分开。图片归属见[第三方素材说明](../THIRD_PARTY_NOTICES.md)。

## 怎样选与回看

先按编号、名称或视觉标签检索，再看每10站一张的图集。图集只适合选择方向，不能代替大图检查；未提供的内页与交互不能凭常识补齐。无需每次加载200行PPT原文或全部图集。PDF页码为原材料1起算页码，仅供持有原件者回查。

在技能根目录运行：

```bash
# 查看索引与PPT文字：不需要原件，不写入文件。
python3 scripts/inspect_reference.py --id 56

# 持有原始图鉴时，显式提供含“单站PPT/”的目录，提取指定内页。
python3 scripts/inspect_reference.py --id 187 --image 2 --source-root "图鉴目录" --output-dir "reference-187-detail"

# 提取该站全部截图；默认只取首张。
python3 scripts/inspect_reference.py --id 187 --all-images --source-root "图鉴目录" --output-dir "reference-187-all"
```

`--source-root`没有绑定本机默认路径。未提供`--output-dir`时只打印索引与原文；请求提取但缺原件目录时，脚本提示对应内置图集。原件只读，已存在的目标图片不覆盖。

## 逐站索引



### 奢侈品时装

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 001 Brunello Cucinelli | 暖米灰、雕像/线图双栏、细衬线与小字 | 可用；双栏内容关系与物件气质 | [原件所列网址](https://www.brunellocucinelli.com/en/) · PDF 6页 · 3图 · [图集](visual-atlas/001-010.jpg) |
| 002 Chanel | 白色窄导航、整版人物、居中短标题 | 可用；摄影主导 | [原件所列网址](https://www.chanel.cn/cn/) · PDF 7页 · 7图 · [图集](visual-atlas/001-010.jpg) |
| 003 Christian Louboutin | 钴蓝大色面、鞋履近景、极短标签 | 可用；有色产品舞台 | [原件所列网址](https://apac.christianlouboutin.com/au_en/) · PDF 8页 · 7图 · [图集](visual-atlas/001-010.jpg) |
| 004 Comme des Garçons | 黄色艺术图+黑白颗粒人像双联、极简数字导航 | 可用；高辨识艺术编辑 | [原件所列网址](https://www.comme-des-garcons.com/) · PDF 9页 · 1图 · [图集](visual-atlas/001-010.jpg) |
| 005 Dior | 左侧暗色人物、右侧白灰、双入口 | 部分可用；入口页/媒体状态限制 | [原件所列网址](https://www.dior.cn/zh_cn) · PDF 10页 · 1图 · [图集](visual-atlas/001-010.jpg) |
| 006 Dries Van Noten | 中轴竖肖像、大面积白边、微小字距标签 | 可用；安静编辑画册 | [原件所列网址](https://www.driesvannoten.com/) · PDF 11页 · 8图 · [图集](visual-atlas/001-010.jpg) |
| 007 Kering | 黑字块与人物组照并置、底部品牌圆标 | 可用；企业合集分区；勿复制品牌徽标 | [原件所列网址](https://www.kering.com/en/) · PDF 12页 · 5图 · [图集](visual-atlas/001-010.jpg) |
| 008 Loewe | 整版街景人物、青蓝超大字标 | 可用；摄影与强色字标对照 | [原件所列网址](https://www.loewe.com.cn/) · PDF 13页 · 7图 · [图集](visual-atlas/001-010.jpg) |
| 009 Louis Vuitton | 整版运动摄影、小量白字与细导航 | 可用；现场感/动态画面的静态帧 | [原件所列网址](https://www.louisvuitton.cn/zhs-cn/homepage) · PDF 14页 · 1图 · [图集](visual-atlas/001-010.jpg) |
| 010 Prada | 白色导航、浓色人物摄影、居中短文案 | 可用；电影画面气质 | [原件所列网址](https://www.prada.cn/cn/zh.html) · PDF 15页 · 7图 · [图集](visual-atlas/001-010.jpg) |
| 011 The Row | 黑白近景肖像、白底、极少导航文字 | 可用；安静肖像型 | [原件所列网址](https://www.therow.com/) · PDF 16页 · 2图 · [图集](visual-atlas/011-020.jpg) |
| 012 Valentino | 深调包袋、石质台面、居中小字 | 可用；材质舞台 | [原件所列网址](https://www.valentino.com/en-us/) · PDF 17页 · 6图 · [图集](visual-atlas/011-020.jpg) |

### 服装品牌

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 013 A.P.C. | 同宽双幅生活摄影、白窄导航 | 可用；并列画册 | [原件所列网址](https://www.apc.fr/) · PDF 18页 · 5图 · [图集](visual-atlas/011-020.jpg) |
| 014 Acne Studios | 双人摄影、超大黑色字标跨图 | 可用；强编辑标题 | [原件所列网址](https://www.acnestudios.com/cn/zh/home) · PDF 19页 · 7图 · [图集](visual-atlas/011-020.jpg) |
| 015 Aritzia | 花园场景摄影、左侧短白字 | 可用；场景式品牌页 | [原件所列网址](https://www.aritzia.com/us/en) · PDF 20页 · 5图 · [图集](visual-atlas/011-020.jpg) |
| 016 Canada Goose | 白底暖色极近人物、细导航 | 可用；真实表情与质感 | [原件所列网址](https://www.canadagoose.com/en-us) · PDF 21页 · 8图 · [图集](visual-atlas/011-020.jpg) |
| 017 Everlane | 酒红底针织特写、居中短标题 | 可用；材质/礼物主题；顶部活动条不迁移 | [原件所列网址](https://www.everlane.com/) · PDF 22页 · 8图 · [图集](visual-atlas/011-020.jpg) |
| 018 ICICLE之禾 | 浅色人物、稀疏白字、白导航 | 部分可用；顶部 Cookie 区需排除 | [原件所列网址](https://www.icicle.com.cn/) · PDF 23页 · 4图 · [图集](visual-atlas/011-020.jpg) |
| 019 JNBY | 绘画色块、透光物件、细小白字 | 可用；艺术合作与色彩 | [原件所列网址](https://jnby.com/) · PDF 24页 · 8图 · [图集](visual-atlas/011-020.jpg) |
| 020 Khaite | 人物近景、红色纹样服装、细字标 | 可用；大胆裁切 | [原件所列网址](https://khaite.com/) · PDF 25页 · 6图 · [图集](visual-atlas/011-020.jpg) |
| 021 Lemaire | 浅冷色人物实景、上部稀疏目录 | 可用；图像留白关系 | [原件所列网址](https://www.lemaire.fr/) · PDF 26页 · 5图 · [图集](visual-atlas/021-030.jpg) |
| 022 Margaret Howell | 左侧窄目录、右侧横幅生活照片 | 可用；编辑侧栏画册 | [原件所列网址](https://www.margarethowell.co.uk/) · PDF 27页 · 6图 · [图集](visual-atlas/021-030.jpg) |
| 023 Our Legacy | 白字区/黑人物区硬分屏、粗体标题 | 可用；直接几何分区 | [原件所列网址](https://www.ourlegacy.com/) · PDF 28页 · 8图 · [图集](visual-atlas/021-030.jpg) |
| 024 Rapha | 深色运动画面、大号短白字 | 可用；运动叙事；未亲测播放 | [原件所列网址](https://www.rapha.cc/us/en) · PDF 29页 · 1图 · [图集](visual-atlas/021-030.jpg) |
| 025 Stone Island | 近黑几何物体、极小标签和标识 | 可用；暗场雕塑感；文字需放大迁移 | [原件所列网址](https://www.stoneisland.com/) · PDF 30页 · 1图 · [图集](visual-atlas/021-030.jpg) |
| 026 Totême | 白底中央小竖幅黑白照、小居中说明 | 可用；极简画册 | [原件所列网址](https://toteme.com/) · PDF 31页 · 4图 · [图集](visual-atlas/021-030.jpg) |
| 027 Vollebak | 城市人物摄影、白窄导航、少量文字 | 可用；现场与实验性产品 | [原件所列网址](https://vollebak.com/en-us) · PDF 32页 · 8图 · [图集](visual-atlas/021-030.jpg) |
| 028 歌力思 ELLASSAY | 多幅人物竖片拼接、中央文案 | 可用；多品牌组合但不宜过密 | [原件所列网址](https://www.ellassay.com/) · PDF 33页 · 1图 · [图集](visual-atlas/021-030.jpg) |

### 腕表珠宝

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 029 A. Lange & Söhne | 黑底银色腕表、左物右字、衬线标题 | 可用；顶部地区提示需排除 | [原件所列网址](https://www.alange-soehne.com/en) · PDF 34页 · 8图 · [图集](visual-atlas/021-030.jpg) |
| 030 Boucheron | 白色编辑标题区、黑白金属环特写 | 可用；工艺细节与版式层级 | [原件所列网址](https://www.boucheron.com/us/?glCountry=US&glCurrency=USD) · PDF 35页 · 4图 · [图集](visual-atlas/021-030.jpg) |
| 031 Breguet | 大幅腕表微距、金属/深蓝、细衬线白字 | 可用；精密材质 | [原件所列网址](https://www.breguet.com/en) · PDF 36页 · 1图 · [图集](visual-atlas/031-040.jpg) |
| 032 Cartier | 灰白浮雕背景、珠宝动物、中央 Cookie 弹窗 | 受遮罩污染；非首选风格证据 | [原件所列网址](https://www.cartier.cn/) · PDF 37页 · 8图 · [图集](visual-atlas/031-040.jpg) |
| 033 H. Moser & Cie | 大黑表盘、少量荧绿、微小白字 | 可用；暗场精密 | [原件所列网址](https://h-moser.com/en) · PDF 38页 · 8图 · [图集](visual-atlas/031-040.jpg) |
| 034 Jaeger-LeCoultre | 暖金腕表微距、白导航 | 部分可用；底部大 Cookie 带 | [原件所列网址](https://www.jaeger-lecoultre.com/us-en) · PDF 39页 · 6图 · [图集](visual-atlas/031-040.jpg) |
| 035 MB&F | 黑底机械雕塑、粗大白色标题 | 可用；机械与活跃编辑 | [原件所列网址](https://www.mbandf.com/) · PDF 40页 · 8图 · [图集](visual-atlas/031-040.jpg) |
| 036 Messika | 米色整版肖像、下方短白字 | 可用；暖人像 | [原件所列网址](https://www.messika.com/us_en) · PDF 41页 · 6图 · [图集](visual-atlas/031-040.jpg) |
| 037 Mikimoto | 浅白场景人物、双手与珠宝、窄白导航 | 可用；真实人物与物件 | [原件所列网址](https://www.mikimoto.com/) · PDF 42页 · 1图 · [图集](visual-atlas/031-040.jpg) |
| 038 Patek Philippe | 酒红紫人物摄影、左下短字/入口 | 可用；有色人像发布 | [原件所列网址](https://www.patek.com/en) · PDF 43页 · 7图 · [图集](visual-atlas/031-040.jpg) |
| 039 Rolex | 浅色整版腕表、大尺寸产品与短白字 | 可用；明亮精密产品 | [原件所列网址](https://www.rolex.cn/) · PDF 44页 · 4图 · [图集](visual-atlas/031-040.jpg) |
| 040 Vacheron Constantin | 深灰主视觉被 Cookie 中央框覆盖 | 受污染；不宜作完整配色/构图依据 | [原件所列网址](https://www.vacheron-constantin.com/us/en/home.html) · PDF 45页 · 6图 · [图集](visual-atlas/031-040.jpg) |
| 041 Van Cleef & Arpels | 深蓝底、左文右物、拱形产品窗口 | 可用；静物与轻叙事 | [原件所列网址](https://www.vancleefarpels.com/us/en.html) · PDF 46页 · 8图 · [图集](visual-atlas/041-050.jpg) |

### 香水配饰

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 042 Ace & Tate | 彩色与黑白人物双幅、白底 | 可用；人物对照编辑 | [原件所列网址](https://www.aceandtate.com/us) · PDF 47页 · 7图 · [图集](visual-atlas/041-050.jpg) |
| 043 Cire Trudon | 灰白渐变、左下小字、主图信息不足 | 受限；媒体完整性待核 | [原件所列网址](https://trudon.com/us_en/) · PDF 48页 · 5图 · [图集](visual-atlas/041-050.jpg) |
| 044 Gentle Monster | 红色纹理地貌、黄色眼镜、整版产品摄影 | 可用；反常规产品舞台 | [原件所列网址](https://www.gentlemonster.com/cn/zh-CN) · PDF 49页 · 3图 · [图集](visual-atlas/041-050.jpg) |
| 045 Officine Universelle Buly | 植物线描、旧纸与香料静物、衬线短标题 | 可用；古典工艺 | [原件所列网址](https://buly1803.com/en-us) · PDF 50页 · 8图 · [图集](visual-atlas/041-050.jpg) |
| 046 Penhaligon's | 暖木格纹礼品舞台、右侧衬线文字 | 可用；主题物件叙事 | [原件所列网址](https://www.penhaligons.com/us/en/) · PDF 51页 · 8图 · [图集](visual-atlas/041-050.jpg) |
| 047 Rimowa CN | 左二维码入口、右侧旅行箱与人物 | 渠道入口限定；不自动迁移二维码 | [原件所列网址](https://www.rimowa.cn/) · PDF 52页 · 1图 · [图集](visual-atlas/041-050.jpg) |
| 048 Serge Lutens | 黑色窄导航、左产品暖图/右白色标题区 | 可用；硬分屏静物 | [原件所列网址](https://sergelutens.com/) · PDF 53页 · 6图 · [图集](visual-atlas/041-050.jpg) |
| 049 Smythson | 三联蓝色文具静物、纸张与皮革质感 | 可用；同色系物件组照 | [原件所列网址](https://www.smythson.com/en-us) · PDF 54页 · 7图 · [图集](visual-atlas/041-050.jpg) |

### 美妆

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 050 Byredo | 米色包装静物、留白、白字标 | 可用；低饱和产品场景；浮层排除 | [原件所列网址](https://www.byredo.com/eu_en) · PDF 55页 · 2图 · [图集](visual-atlas/041-050.jpg) |
| 051 Charlotte Tilbury | 酒红闪光、人物拼组、巨大花体标题 | 可用；活动海报型，按任务使用 | [原件所列网址](https://www.charlottetilbury.com/us) · PDF 56页 · 6图 · [图集](visual-atlas/051-060.jpg) |
| 052 Diptyque | 深绿与木色、烛光静物、窄白导航 | 可用；暖材质与氛围 | [原件所列网址](https://diptyqueparis.com/fr-fr) · PDF 57页 · 7图 · [图集](visual-atlas/051-060.jpg) |
| 053 Fenty Beauty | 左洋红文字区、右大白块 | 部分可用；右侧画面完整性待核 | [原件所列网址](https://fentybeauty.com/) · PDF 58页 · 7图 · [图集](visual-atlas/051-060.jpg) |
| 054 Glossier | 肤质近景、大幅白斜体字、左上小白文案块 | 可用；大胆生活摄影编辑 | [原件所列网址](https://www.glossier.com/) · PDF 59页 · 1图 · [图集](visual-atlas/051-060.jpg) |
| 055 Hourglass | 暖色彩妆静物、蓝灰底、右侧短标题 | 可用；干净产品发布 | [原件所列网址](https://www.hourglasscosmetics.com/) · PDF 60页 · 6图 · [图集](visual-atlas/051-060.jpg) |
| 056 Le Labo | 深色药房实景、居中地区表单 | 仅地区入口可见；不可声称主站已吸收 | [原件所列网址](https://www.lelabofragrances.com/) · PDF 61页 · 1图 · [图集](visual-atlas/051-060.jpg) |
| 057 NARS | 冰蓝产品合成、右侧文字、下部人物拼图 | 可用；明亮新品活动 | [原件所列网址](https://www.narscosmetics.com/) · PDF 62页 · 4图 · [图集](visual-atlas/051-060.jpg) |
| 058 Rare Beauty | 纯白空截图 | 不可用；无视觉证据 | [原件所列网址](https://www.rarebeauty.com/) · PDF 63页 · 1图 · [图集](visual-atlas/051-060.jpg) |
| 059 Tom Ford Beauty | 米灰渐变、右侧产品组、左侧短标题 | 可用；克制产品发布 | [原件所列网址](https://www.tomfordbeauty.com/) · PDF 64页 · 6图 · [图集](visual-atlas/051-060.jpg) |
| 060 完美日记 Perfect Diary | 左人像/右灰底红字、红 CTA | 可用；直接商业分屏 | [原件所列网址](https://www.perfectdiary.com/) · PDF 65页 · 5图 · [图集](visual-atlas/051-060.jpg) |
| 061 花西子 Florasis | 蓝色幻想场景、礼盒合成、白标题 | 可用；节庆/主题活动场景 | [原件所列网址](https://florasis.com/) · PDF 66页 · 5图 · [图集](visual-atlas/061-070.jpg) |

### 护肤品

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 062 111Skin | 白底窄促销文字区、右侧超大肤质肖像 | 可用；明确转化；宣传效用不自动复用 | [原件所列网址](https://111skin.com/en-us) · PDF 67页 · 5图 · [图集](visual-atlas/061-070.jpg) |
| 063 Aesop | 雪景产品礼盒、暖白文字区、中央隐私框 | 受灰遮罩和弹窗污染；底层布局仅部分可辨 | [原件所列网址](https://www.aesop.com.cn/) · PDF 68页 · 6图 · [图集](visual-atlas/061-070.jpg) |
| 064 Augustinus Bader | 蓝灰控制光、单件竖直产品、小白字 | 可用；单品精密舞台 | [原件所列网址](https://augustinusbader.com/en-us) · PDF 69页 · 8图 · [图集](visual-atlas/061-070.jpg) |
| 065 Clé de Peau Beauté | 蓝粉幻想海景与礼盒、窄白导航 | 部分可用；底部 Cookie 带排除 | [原件所列网址](https://www.cledepeaubeaute.com/) · PDF 70页 · 8图 · [图集](visual-atlas/061-070.jpg) |
| 066 Dr. Barbara Sturm | 深色冬季背景、大幅订阅弹窗 | 受污染；不以弹窗作主风格 | [原件所列网址](https://www.drsturm.com/) · PDF 71页 · 7图 · [图集](visual-atlas/061-070.jpg) |
| 067 Drunk Elephant | 明亮彩色产品、白底大物小字、双区分布 | 可用；轻快产品信息 | [原件所列网址](https://www.drunkelephant.com/) · PDF 72页 · 5图 · [图集](visual-atlas/061-070.jpg) |
| 068 Estée Lauder | 金色产品与城市活动画面、大中文标题 | 可用；中国电商活动型 | [原件所列网址](https://www.esteelauder.com.cn/) · PDF 73页 · 8图 · [图集](visual-atlas/061-070.jpg) |
| 069 La Mer | 深蓝海浪、金白产品、大中文宣传字 | 可用；活动广告型；勿迁移未经核实主张 | [原件所列网址](https://www.lamer.com.cn/) · PDF 74页 · 8图 · [图集](visual-atlas/061-070.jpg) |
| 070 La Prairie | 深蓝聚光产品、右侧微信二维码、白导航 | 渠道入口限定；只取产品/色彩关系 | [原件所列网址](https://www.laprairie.com.cn/en?shpxid=5090a868-d8ae-4c4a-a2f2-a2dbe55b13aa) · PDF 75页 · 2图 · [图集](visual-atlas/061-070.jpg) |
| 071 Shiseido | 白底产品/左字右物 | 部分可用；促销弹窗遮罩，先找无遮挡截图 | [原件所列网址](https://www.shiseido.com/us/en/) · PDF 76页 · 6图 · [图集](visual-atlas/071-080.jpg) |
| 072 Sisley | 红色节庆静物、装饰性强 | 可用；与源文本403分开记录 | [原件所列网址](https://www.sisley-paris.com/en-US/) · PDF 77页 · 6图 · [图集](visual-atlas/071-080.jpg) |
| 073 SK-II | 白色大产品、红色重点、左标题 | 可用 | [原件所列网址](https://www.sk-ii.com/) · PDF 78页 · 4图 · [图集](visual-atlas/071-080.jpg) |
| 074 Sulwhasoo | 暖橙横幅、人像右、商品流 | 可用 | [原件所列网址](https://www.sulwhasoo.com/) · PDF 79页 · 4图 · [图集](visual-atlas/071-080.jpg) |
| 075 Vintner's Daughter | 油画式水果静物、橄榄绿、居中衬线标题 | 可用；8张放大原图之一 | [原件所列网址](https://vintnersdaughter.com/?pb=0) · PDF 80页 · 7图 · [图集](visual-atlas/071-080.jpg) |
| 076 修丽可 SkinCeuticals | 深色产品组合、黑色导航 | 可用；与源文本403分开记录 | [原件所列网址](https://www.skinceuticals.com/) · PDF 81页 · 7图 · [图集](visual-atlas/071-080.jpg) |
| 077 薇诺娜 Winona | 白红中式功效广告、右产品 | 可用；销量/排名文字不迁移为事实 | [原件所列网址](https://www.winona.cn/) · PDF 82页 · 1图 · [图集](visual-atlas/071-080.jpg) |
| 078 赫莲娜 Helena Rubinstein | 冷白人物团队、左标题 | 可用；与源文本403分开记录 | [原件所列网址](https://www.helenarubinstein.com/) · PDF 83页 · 6图 · [图集](visual-atlas/071-080.jpg) |

### 医美

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 079 Allergan Aesthetics | 暖红人像、左短标题 | 可用 | [原件所列网址](https://www.allerganaesthetics.com/) · PDF 84页 · 8图 · [图集](visual-atlas/071-080.jpg) |
| 080 Botox Cosmetic | 奶油色人像、左衬线标题 | 可用；底部法务和黄条不作通用装饰 | [原件所列网址](https://www.botoxcosmetic.com/) · PDF 85页 · 8图 · [图集](visual-atlas/071-080.jpg) |
| 081 CoolSculpting | 冷白双人物、中央黑字蓝按钮 | 可用；示意/疗效不作事实引用 | [原件所列网址](https://www.coolsculpting.com/) · PDF 86页 · 8图 · [图集](visual-atlas/081-090.jpg) |
| 082 Hydrafacial | 深底局部脸部治疗近景、浅蓝产品段 | 可用 | [原件所列网址](https://www.hydrafacial.com/?view=sl-8BBB609A#slr-b4nvb678nln4) · PDF 87页 · 8图 · [图集](visual-atlas/081-090.jpg) |
| 083 Juvederm | 暖橙群像、大黑标题 | 可用；与源文本403分开记录 | [原件所列网址](https://www.juvederm.com/) · PDF 88页 · 8图 · [图集](visual-atlas/081-090.jpg) |
| 084 Lumenis | 森林人像横幅、黑白双业务入口 | 可用；首图略暗 | [原件所列网址](https://lumenis.com/) · PDF 89页 · 6图 · [图集](visual-atlas/081-090.jpg) |
| 085 Sciton | 紫粉光环、白色器械 | 可用；风格偏强广告，限定产品发布场景 | [原件所列网址](https://sciton.com/) · PDF 90页 · 8图 · [图集](visual-atlas/081-090.jpg) |
| 086 Solta Medical | 自然场景多人像、底部白字 | 可用；顶部Cookie条非主体 | [原件所列网址](https://www.solta.com/) · PDF 91页 · 5图 · [图集](visual-atlas/081-090.jpg) |
| 087 Thermage | 淡紫渐层、人像右、标题左 | 可用；顶部Cookie条非主体 | [原件所列网址](https://www.thermage.com/) · PDF 92页 · 8图 · [图集](visual-atlas/081-090.jpg) |
| 088 Ultherapy | 米色左右人像/文字海报 | 可用；奖项与疗效不迁移 | [原件所列网址](https://ultherapy.com/) · PDF 93页 · 1图 · [图集](visual-atlas/081-090.jpg) |
| 089 瑞芙德 Revitacare | 米色人像、细白网格、荧黄绿小强调 | 可用；8张放大原图之一 | [原件所列网址](https://revitacare.net/) · PDF 94页 · 1图 · [图集](visual-atlas/081-090.jpg) |
| 090 美莱 Meilai | 中文博客列表/技术内容 | 排除医美风格证据；疑似错站 | [原件所列网址](https://www.meilai.com/) · PDF 95页 · 3图 · [图集](visual-atlas/081-090.jpg) |

### 高端家居

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 091 B&B Italia | 彩色拼图、超大B&B字样 | 有限；国家选择弹窗遮住中心 | [原件所列网址](https://www.bebitalia.com/en-us/) · PDF 96页 · 4图 · [图集](visual-atlas/091-100.jpg) |
| 092 Baccarat | 暗色餐桌静物、白导航 | 可用；底部Cookie模块非主体 | [原件所列网址](https://www.baccarat.com/zh_cn/) · PDF 97页 · 8图 · [图集](visual-atlas/091-100.jpg) |
| 093 Bang & Olufsen | 黑色留白、左小标题、下段人物 | 部分可用；黑块可能静态视频帧，勿据此推断动效 | [原件所列网址](https://www.bang-olufsen.com/zh-cn/cn) · PDF 98页 · 6图 · [图集](visual-atlas/091-100.jpg) |
| 094 Boffi | 暖木空间满幅、左下白标题 | 可用；8张放大原图之一 | [原件所列网址](https://www.boffi.com/en/) · PDF 99页 · 7图 · [图集](visual-atlas/091-100.jpg) |
| 095 Bulthaup | 白边框内视频/摄影、下短说明 | 可用；播放器控制条不搬到PPT | [原件所列网址](https://bulthaup.com/en/) · PDF 100页 · 6图 · [图集](visual-atlas/091-100.jpg) |
| 096 Carl Hansen & Søn | 暖色椅子群像、左上短字 | 可用 | [原件所列网址](https://www.carlhansen.com/) · PDF 101页 · 6图 · [图集](visual-atlas/091-100.jpg) |
| 097 Cassina | 亮白室内全景、白色文字段 | 可用 | [原件所列网址](https://www.cassina.com/cn/zh_cn.html) · PDF 102页 · 8图 · [图集](visual-atlas/091-100.jpg) |
| 098 Christofle | 巴黎窗景金属器物、金色细条 | 可用；右下注册提示非主体 | [原件所列网址](https://www.christofle.com/us_en/) · PDF 103页 · 8图 · [图集](visual-atlas/091-100.jpg) |
| 099 Dedon | 水面人物、极少衬线字 | 可用 | [原件所列网址](https://www.dedon.de/) · PDF 104页 · 6图 · [图集](visual-atlas/091-100.jpg) |
| 100 Flexform | 暖色大客厅摄影、极薄白导航 | 可用 | [原件所列网址](https://www.flexform.it/en) · PDF 105页 · 6图 · [图集](visual-atlas/091-100.jpg) |
| 101 Flos | 暖光灯具右、左大白标题 | 可用；8张放大原图之一 | [原件所列网址](https://flos.com/en/wo/) · PDF 106页 · 8图 · [图集](visual-atlas/101-110.jpg) |
| 102 Fritz Hansen | 暖木休息区、左下标题 | 可用；源文本404与首图分开记录 | [原件所列网址](https://www.fritzhansen.com/en/) · PDF 107页 · 6图 · [图集](visual-atlas/101-110.jpg) |
| 103 Gubi | 黑底单灯特写、极少文字 | 可用 | [原件所列网址](https://gubi.com/en/us) · PDF 108页 · 8图 · [图集](visual-atlas/101-110.jpg) |
| 104 Hay | 白边框内高彩空间图、居中logo | 可用 | [原件所列网址](https://cn.hay.com/) · PDF 109页 · 3图 · [图集](visual-atlas/101-110.jpg) |
| 105 Herman Miller | 空间满幅、双业务入口 | 可用 | [原件所列网址](https://www.hermanmiller.com/welcome/) · PDF 110页 · 2图 · [图集](visual-atlas/101-110.jpg) |
| 106 Knoll | 白底双图入口、左上简短问候 | 可用 | [原件所列网址](https://www.knoll.com/) · PDF 111页 · 2图 · [图集](visual-atlas/101-110.jpg) |
| 107 Kvadrat | 白框内饱和蓝材质静物 | 可用；8张放大原图之一 | [原件所列网址](https://www.kvadrat.dk/en) · PDF 112页 · 4图 · [图集](visual-atlas/101-110.jpg) |
| 108 Lalique | 水晶摆件近景、暖棕深景 | 可用 | [原件所列网址](https://us.lalique.com/) · PDF 113页 · 4图 · [图集](visual-atlas/101-110.jpg) |
| 109 Ligne Roset | 奶油色客厅、产品氛围 | 有限；中央新品提示遮住主体 | [原件所列网址](https://www.ligne-roset.com/us/) · PDF 114页 · 8图 · [图集](visual-atlas/101-110.jpg) |
| 110 Louis Poulsen | 灰棕墙面灯具、左下文字 | 可用；源“couldn't load”与首图分开 | [原件所列网址](https://www.louispoulsen.com/zh-cn) · PDF 115页 · 8图 · [图集](visual-atlas/101-110.jpg) |
| 111 Menu  Audo | 暖灰对称门框、中央衬线文字 | 可用 | [原件所列网址](https://audocph.com/) · PDF 116页 · 5图 · [图集](visual-atlas/111-120.jpg) |
| 112 Minotti | 暖暗空间、双视角拼接 | 可用 | [原件所列网址](https://www.minotti.com/en) · PDF 117页 · 8图 · [图集](visual-atlas/111-120.jpg) |
| 113 Molteni&C | 左深色媒体块/右白文字栏 | 有限；左侧黑媒体未显示有效内容 | [原件所列网址](https://www.molteni.it/en/us) · PDF 118页 · 8图 · [图集](visual-atlas/111-120.jpg) |
| 114 Poliform | 古典空间大图、下简短说明 | 可用 | [原件所列网址](https://www.poliform.it/us/) · PDF 119页 · 1图 · [图集](visual-atlas/111-120.jpg) |
| 115 Poltrona Frau | 白色室内背景 | 有限；地区访问弹窗及遮罩 | [原件所列网址](https://www.poltronafrau.com/ww/zh_cn.html) · PDF 120页 · 7图 · [图集](visual-atlas/111-120.jpg) |
| 116 Rimadesio | 暗绿自然与汽车画面、播放按钮 | 可用作静帧；不证明动态 | [原件所列网址](https://www.rimadesio.it/it/) · PDF 121页 · 7图 · [图集](visual-atlas/111-120.jpg) |
| 117 Roche Bobois | 玻璃空间/自然绿景、酒红沙发 | 可用 | [原件所列网址](https://www.roche-bobois.com/en-US/) · PDF 122页 · 8图 · [图集](visual-atlas/111-120.jpg) |
| 118 Tom Dixon | 模糊背景+配送地区选择 | 不作主风格证据；须另找无遮挡原图 | [原件所列网址](https://www.tomdixon.net/) · PDF 123页 · 6图 · [图集](visual-atlas/111-120.jpg) |
| 119 USM Modular Furniture | 白色模块家具、鲜明点色 | 可用 | [原件所列网址](https://www.usm.cn/) · PDF 124页 · 6图 · [图集](visual-atlas/111-120.jpg) |
| 120 Vipp | 建筑/室内双图、土棕下段 | 可用；8张放大原图之一 | [原件所列网址](https://vipp.com/en) · PDF 125页 · 8图 · [图集](visual-atlas/111-120.jpg) |
| 121 Vitra | 金色单椅特写、下图组 | 可用；与源文本403分开记录 | [原件所列网址](https://www.vitra.com/en-us/home) · PDF 126页 · 7图 · [图集](visual-atlas/121-130.jpg) |
| 122 林氏木业 LinSy | 家居横幅、下方T恤商品 | 归属待核；不作为已核品牌参考 | [原件所列网址](https://linsy.com/) · PDF 127页 · 2图 · [图集](visual-atlas/121-130.jpg) |

### 建筑设计

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 123 Bjarke Ingels Group BIG | 大白底、窄项目图流/侧标签 | 可用 | [原件所列网址](https://big.dk/) · PDF 128页 · 8图 · [图集](visual-atlas/121-130.jpg) |
| 124 David Chipperfield Architects | 大白边、中心建筑摄影 | 可用；8张放大原图之一 | [原件所列网址](https://davidchipperfield.com/) · PDF 129页 · 8图 · [图集](visual-atlas/121-130.jpg) |
| 125 Diller Scofidio + Renfro | 全屏斜俯拍、窄竖向导航 | 可用 | [原件所列网址](https://dsrny.com/) · PDF 130页 · 1图 · [图集](visual-atlas/121-130.jpg) |
| 126 Heatherwick Studio | 暗化公园实景、极少顶边文字 | 可用但暗；不复制低对比文字 | [原件所列网址](https://heatherwick.com/) · PDF 131页 · 5图 · [图集](visual-atlas/121-130.jpg) |
| 127 John Pawson | 夜蓝天空、极少左上字 | 可用 | [原件所列网址](https://www.johnpawson.com/) · PDF 132页 · 1图 · [图集](visual-atlas/121-130.jpg) |
| 128 Kengo Kuma | 满幅海景建筑、左上线性标记 | 可用；右下Cookie块非主体 | [原件所列网址](https://kkaa.co.jp/en/) · PDF 133页 · 4图 · [图集](visual-atlas/121-130.jpg) |
| 129 MAD Architects | 演讲新闻摄影、边角短图注 | 可用；不把别人的活动当本人案例 | [原件所列网址](https://www.i-mad.com/) · PDF 134页 · 8图 · [图集](visual-atlas/121-130.jpg) |
| 130 Norm Architects | 暖灰室内轴线、边缘小字 | 可用 | [原件所列网址](https://normcph.com/) · PDF 135页 · 7图 · [图集](visual-atlas/121-130.jpg) |
| 131 OMA Rem Koolhaas | 满幅模型、大粗导航、白红新闻块 | 可用；高密度编辑样式，非极简 | [原件所列网址](https://www.oma.com/) · PDF 136页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 132 Pentagram | 白色框架、产品大图、短图注/下一段大字 | 可用；8张放大原图之一 | [原件所列网址](https://www.pentagram.com/) · PDF 137页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 133 Sagmeister & Walsh archive | 黑底作品格网、白小导航 | 可用 | [原件所列网址](https://sagmeister.com/) · PDF 138页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 134 Snøhetta | 白底大机构说明、错落图组 | 可用 | [原件所列网址](https://www.snohetta.com/) · PDF 139页 · 5图 · [图集](visual-atlas/131-140.jpg) |
| 135 Studio Gang | 白底多列编辑、青色小强调 | 可用；与源文本403分开记录 | [原件所列网址](https://studiogang.com/) · PDF 140页 · 1图 · [图集](visual-atlas/131-140.jpg) |
| 136 Zaha Hadid Architects | 黑底页面、中心声明弹窗 | 不作主风格证据；需无遮挡内容 | [原件所列网址](https://www.zha.com/?disclaimer=true) · PDF 141页 · 8图 · [图集](visual-atlas/131-140.jpg) |

### 艺术美术馆

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 137 Centre Pompidou | 城市全景、中央短白字、下彩色展览块 | 可用 | [原件所列网址](https://www.centrepompidou.fr/en/) · PDF 142页 · 6图 · [图集](visual-atlas/131-140.jpg) |
| 138 David Zwirner | 白色画廊展陈满幅、极薄导航 | 可用 | [原件所列网址](https://www.davidzwirner.com/) · PDF 143页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 139 Fondation Cartier | 绿底展览海报、白底说明 | 有限；Cookie弹窗和遮罩 | [原件所列网址](https://www.fondationcartier.com/) · PDF 144页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 140 Gagosian | 暗室彩色光装置、中央白字 | 可用 | [原件所列网址](https://gagosian.com/) · PDF 145页 · 8图 · [图集](visual-atlas/131-140.jpg) |
| 141 Louvre | 黑色细导航、建筑满幅图、中央 Cookie 遮罩 | 局部；主画面被 Cookie 与暗层遮挡，不采纳弹窗形状和变暗背景作为风格 | [原件所列网址](https://www.louvre.fr/) · PDF 146页 · 8图 · [图集](visual-atlas/141-150.jpg) |
| 142 MoMA | 白底粗无衬线品牌、真实观展人物大图、紧凑信息栏 | 可用；底部橙色通知是业务提示，非必备装饰条 | [原件所列网址](https://www.moma.org/) · PDF 147页 · 8图 · [图集](visual-atlas/141-150.jpg) |
| 143 Pace Gallery | 白色薄顶栏、展厅全景、左侧白色短标题 | 可用；适合大图作品集 | [原件所列网址](https://www.pacegallery.com/) · PDF 148页 · 8图 · [图集](visual-atlas/141-150.jpg) |
| 144 Rijksmuseum | 极大横向无衬线字跨画面、艺术品与观众全景 | 可用；源 image2 是人物影像与白色线描叠层，辅助内容片段可独立成页 | [原件所列网址](https://www.rijksmuseum.nl/en) · PDF 149页 · 5图 · [图集](visual-atlas/141-150.jpg) |
| 145 Serpentine Galleries | 细长压缩标题、横向影像、白底细线展讯目录 | 可用；艺术活动信息层级清晰 | [原件所列网址](https://www.serpentinegalleries.org/) · PDF 150页 · 5图 · [图集](visual-atlas/141-150.jpg) |
| 146 Tate | 饱和蓝文字区和艺术图二分、下方四列展馆图 | 可用；鲜明色块承担内容分区，不是全站只能低饱和 | [原件所列网址](https://www.tate.org.uk/) · PDF 151页 · 4图 · [图集](visual-atlas/141-150.jpg) |
| 147 teamLab | 黑色细导航、沉浸式多彩装置图、少文字 | 可用；彩光来自真实作品图像，不宜套成普通页面的霓虹背景 | [原件所列网址](https://www.teamlab.art/) · PDF 152页 · 5图 · [图集](visual-atlas/141-150.jpg) |
| 148 The Met | 白顶栏、建筑大图、下方衬线欢迎语、红色重点按钮 | 可用；笔记 HTTP 429 未影响本快照可见内容 | [原件所列网址](https://www.metmuseum.org/) · PDF 153页 · 5图 · [图集](visual-atlas/141-150.jpg) |
| 149 V&A | 满幅艺术图、左下无衬线短标题、黑色说明带 | 可用；强调色来自艺术图与黄色 CTA，底部渐变服务文字可读性 | [原件所列网址](https://www.vam.ac.uk/) · PDF 154页 · 8图 · [图集](visual-atlas/141-150.jpg) |
| 150 上海当代艺术博物馆 PSA | 灰白平面目录、左侧细线索引、四列海报、文本筛选 | 可用；适合资料库和展览目录；不能把信息密度机械移入投影 PPT | [原件所列网址](https://www.powerstationofart.com/whats-on) · PDF 155页 · 1图 · [图集](visual-atlas/141-150.jpg) |

### 画廊拍卖

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 151 Art Basel | 白顶栏、横向活动影像、居中标题、下方深灰区域 | 局部可用；不要把不明确的深灰空域当作必须留的装饰区 | [原件所列网址](https://www.artbasel.com/) · PDF 156页 · 5图 · [图集](visual-atlas/151-160.jpg) |
| 152 Bonhams | 白底居中横向艺术图、左下小白色说明块、克制衬线栏目 | 可用；正文区域按拍卖信息分组 | [原件所列网址](https://www.bonhams.com/) · PDF 157页 · 7图 · [图集](visual-atlas/151-160.jpg) |
| 153 Frieze | 白色杂志导航、黑色文本栏与自然图左右分区 | 可用；顶部广告横幅不作为品牌设计规则，HTTP 403 注记不代表画面失败 | [原件所列网址](https://www.frieze.com/) · PDF 158页 · 8图 · [图集](visual-atlas/151-160.jpg) |
| 154 Galerie Lelong | 白底居中大字标、两列展厅图、短地区标签 | 可用；以图片与间距形成秩序 | [原件所列网址](https://galerielelong.com/) · PDF 159页 · 1图 · [图集](visual-atlas/151-160.jpg) |
| 155 Lisson Gallery | 浅灰整屏、白色标题、影像未显现 | 排除首屏；像媒体未加载/浅灰占位，不能提炼成低对比极简风 | [原件所列网址](https://lisson.com/) · PDF 160页 · 1图 · [图集](visual-atlas/151-160.jpg) |
| 156 Perrotin | 展厅全景、白色纤细标题、窄白色导航 | 局部可用；左下 Cookie 小窗剔除 | [原件所列网址](https://www.perrotin.com/en) · PDF 161页 · 5图 · [图集](visual-atlas/151-160.jpg) |
| 157 Phillips | 白底大型单件珠宝、左下小号拍卖说明 | 可用；白底产品舞台；HTTP 403 注记未对应视觉失败 | [原件所列网址](https://www.phillips.com/) · PDF 162页 · 1图 · [图集](visual-atlas/151-160.jpg) |
| 158 Sotheby's | 大留白、居中竖幅艺术品、深蓝说明小块 | 可用；图片主次明显，标签不覆盖主体 | [原件所列网址](https://www.sothebys.com/en/) · PDF 163页 · 7图 · [图集](visual-atlas/151-160.jpg) |
| 159 Sprüth Magers | 白色薄导航配红色文字、满幅高饱和艺术品 | 可用；颜色由作品承载 | [原件所列网址](https://spruethmagers.com/) · PDF 164页 · 8图 · [图集](visual-atlas/151-160.jpg) |
| 160 Thaddaeus Ropac | 极简白顶栏、展厅尺度感、左下简短作品信息 | 可用；空白墙面承担呼吸和对比 | [原件所列网址](https://ropac.net/) · PDF 165页 · 8图 · [图集](visual-atlas/151-160.jpg) |
| 161 Victoria Miro | 满幅绘画、透叠细导航、画下白色说明带 | 可用；视觉与事实信息分层 | [原件所列网址](https://www.victoria-miro.com/) · PDF 166页 · 6图 · [图集](visual-atlas/161-170.jpg) |
| 162 White Cube | 黑白作品近景、左侧短标题、白色细字导航 | 可用；高级感来自作品局部与对比，不需要金色装饰 | [原件所列网址](https://www.whitecube.com/) · PDF 167页 · 8图 · [图集](visual-atlas/161-170.jpg) |

### 超跑游艇

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 163 Aston Martin | 车标皮革近景、居中欢迎语、地区链接 | 局部；这是地区入口画面，不能当已读完整官网 | [原件所列网址](https://www.astonmartin.com/en/welcome) · PDF 168页 · 1图 · [图集](visual-atlas/161-170.jpg) |
| 164 Azimut Yachts | 深灰整屏、中心大字 GRANDE 44M、底部小缩略图 | 排除首屏主视觉；疑似视频未显现，只能参考标题层级 | [原件所列网址](https://azimutyachts.com/en/) · PDF 169页 · 1图 · [图集](visual-atlas/161-170.jpg) |
| 165 Bugatti | 暗夜汽车照片、中央手写型号标题、小描边 CTA | 可用；影调与摄影主导 | [原件所列网址](https://www.bugatti.com/) · PDF 170页 · 1图 · [图集](visual-atlas/161-170.jpg) |
| 166 Ferrari | 赛车低视角近景、黑顶栏、底部中央短标题 | 可用；动势靠照片视角和光线实现 | [原件所列网址](https://www.ferrari.com/zh-CN) · PDF 171页 · 5图 · [图集](visual-atlas/161-170.jpg) |
| 167 Lamborghini | 黑色空画面、左下压缩标题、右下按钮 | 排除首屏主视觉；不能把缺失影像理解为黑底高级风 | [原件所列网址](https://www.lamborghini.com/en-en) · PDF 172页 · 5图 · [图集](visual-atlas/161-170.jpg) |
| 168 Lucid | 家庭用车实景、车旁人物、左下衬线型号与参数 | 可用；顶部促销条与价格属于业务内容，不迁移事实 | [原件所列网址](https://lucidmotors.com/) · PDF 173页 · 7图 · [图集](visual-atlas/161-170.jpg) |
| 169 McLaren | 黑色空画面、左下小标题和 CTA | 排除首屏主视觉；媒体未显现，黑色空域不作规则 | [原件所列网址](https://cars.mclaren.com/en) · PDF 174页 · 4图 · [图集](visual-atlas/161-170.jpg) |
| 170 Pagani | 整车超大近景、灰色摄影棚、中央型号字标 | 可用；仅一张截图，标题叠在复杂物体上时要另做对比修正 | [原件所列网址](https://www.pagani.com/) · PDF 175页 · 1图 · [图集](visual-atlas/161-170.jpg) |
| 171 Polestar | 自然道路实拍、左上紧凑标题、白顶栏 | 可用；技术产品也可以用自然绿灰色调 | [原件所列网址](https://www.polestar.com/us/) · PDF 176页 · 6图 · [图集](visual-atlas/171-180.jpg) |
| 172 Porsche | 深蓝夜景整车、左下大型号、克制单按钮 | 可用；顶部地区提示是提示内容，非装饰 | [原件所列网址](https://www.porsche.com/usa/?cs_redirect=1) · PDF 177页 · 8图 · [图集](visual-atlas/171-180.jpg) |
| 173 Rimac | 暗色地貌与光轨、中央分行大写标题、侧边章节索引 | 可用但对比须优化；不要因追求暗调降低文本可读性 | [原件所列网址](https://www.rimac-automobili.com/) · PDF 178页 · 1图 · [图集](visual-atlas/171-180.jpg) |
| 174 Riva Yachts | 游艇峡湾逆光全景、下方中央型号、透叠导航 | 可用；高光与负空间来自摄影 | [原件所列网址](https://www.riva-yacht.com/en-us/) · PDF 179页 · 8图 · [图集](visual-atlas/171-180.jpg) |
| 175 Rolls-Royce Motor Cars | 黑色空域、居中细字标题与白色按钮 | 排除首屏主视觉；疑似影像未显现，保留索引 | [原件所列网址](https://www.rolls-roycemotorcars.com/en_GB/home.html) · PDF 180页 · 3图 · [图集](visual-atlas/171-180.jpg) |
| 176 Singer Vehicle Design | 暖色海岸汽车实景、左上细长标题、透叠导航 | 可用；传统工业工艺可以采用自然电影影调 | [原件所列网址](https://singervehicledesign.com/) · PDF 181页 · 6图 · [图集](visual-atlas/171-180.jpg) |
| 177 Sunseeker | 浅灰整屏、白色超宽大写字 | 排除首屏；低对比/缺失影像不是可复用极简效果 | [原件所列网址](https://www.sunseeker.com/) · PDF 182页 · 8图 · [图集](visual-atlas/171-180.jpg) |

### 高端电子

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 178 Apple | 黑白交替产品舞台、居中短标题、蓝色主辅按钮、下方双列模块 | 可用；image3 可见四块产品矩形舞台，非圆角浮层；产品名称与参数只视为快照文本 | [原件所列网址](https://www.apple.com/) · PDF 183页 · 6图 · [图集](visual-atlas/171-180.jpg) |
| 179 Bowers & Wilkins | 灰色几何空间、成对音箱、左下短标题 | 可用；实际产品、材质和光影占主导 | [原件所列网址](https://www.bowerswilkins.com/en-us) · PDF 184页 · 8图 · [图集](visual-atlas/171-180.jpg) |
| 180 Devialet | 暗蓝工业细节近景、左下白字、右下小 CTA | 可用；蓝色来自实物与摄影光线 | [原件所列网址](https://www.devialet.com/en-us/) · PDF 185页 · 8图 · [图集](visual-atlas/171-180.jpg) |
| 181 Hasselblad | 黑色摄影竞赛舞台、金色日食图形、疏朗字距 | 可用；金色是这张活动视觉的主题，不泛化为全站黑金必选 | [原件所列网址](https://www.hasselblad.com/) · PDF 186页 · 1图 · [图集](visual-atlas/181-190.jpg) |
| 182 Leica | 大白色品牌标题区、黑色产品舞台、单件相机聚焦 | 可用；红色品牌标志是点色，不迁移其商标 | [原件所列网址](https://leica-camera.com/en-US) · PDF 187页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 183 Sonos | 温暖生活影像、白字居中、单个白色圆角 CTA | 可用；文字断行为中文呈现需重新优化，不能复刻不佳折行 | [原件所列网址](https://www.sonos.com/zh-cn/home) · PDF 188页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 184 Teenage Engineering | 精密产品实拍、黑底、细线图标导航、红色物件细节 | 可用；image2 产品投影下的价格与单 CTA 是真实空间构图，非无意义黑屏 | [原件所列网址](https://teenage.engineering/) · PDF 189页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 185 Vertu | 暖红金产品影像、中央地区选择弹窗 | 局部；剔除弹窗与遮罩，不能依据被遮挡页面做完整布局结论 | [原件所列网址](https://vertu.com/) · PDF 190页 · 7图 · [图集](visual-atlas/181-190.jpg) |

### 精品酒店

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 186 Belmond | 高原列车自然全景、中心极简字标、白色薄导航 | 可用；自然风景自身提供色板 | [原件所列网址](https://www.belmond.com/en) · PDF 191页 · 1图 · [图集](visual-atlas/181-190.jpg) |
| 187 Capella Hotels | 首屏酒店人物影像；下页白底衬线大标题、大小建筑图不对称拼版 | 可用；首屏抓到模糊电影帧，不宜当最终静态封面；image2 是很好的编辑式内页证据 | [原件所列网址](https://capellahotels.com/en) · PDF 192页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 188 Nobu Hotels | 黑白群像全幅、细导航、右上预约按钮 | 可用；人物关系和真实场景形成品牌气质 | [原件所列网址](https://www.nobuhotels.com/) · PDF 193页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 189 One&Only | 深暖室内影像、居中衬线标题、白顶栏 | 可用；暗色保留材质层次，文字需确保对比 | [原件所列网址](https://www.oneandonlyresorts.com/) · PDF 194页 · 8图 · [图集](visual-atlas/181-190.jpg) |
| 190 Peninsula Hotels | 明亮室内全景、中文短标题、底部横向预订条 | 可用；PPT 保留空间视觉，预订输入控件不直接搬入幻灯片 | [原件所列网址](https://www.peninsula.com.cn/zh-cn/default) · PDF 195页 · 6图 · [图集](visual-atlas/181-190.jpg) |

### 私厨餐饮

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 191 Alinea | 菜品微距占满画面、左侧衬线标题、窄白导航 | 可用；餐盘纹理是内容而非额外装饰 | [原件所列网址](https://www.alinearestaurant.com/) · PDF 196页 · 7图 · [图集](visual-atlas/191-200.jpg) |
| 192 Ladurée | 暖色礼盒/糕点背景、中央地区语言弹窗 | 局部；弹窗及遮罩剔除，不能当品牌主构图 | [原件所列网址](https://laduree.com/) · PDF 197页 · 8图 · [图集](visual-atlas/191-200.jpg) |
| 193 Nobu | 木格栅餐厅实景、左下加粗短标题、克制导航 | 可用；建筑线条形成主秩序 | [原件所列网址](https://www.noburestaurants.com/) · PDF 198页 · 8图 · [图集](visual-atlas/191-200.jpg) |
| 194 The French Laundry | 白底居中明信片式小横图、深蓝细字导航、大片四周留白 | 可用；投影版需要扩大图文，不能照抄网页的微型导航与奖章 | [原件所列网址](https://thomaskeller.com/tfl/) · PDF 199页 · 1图 · [图集](visual-atlas/191-200.jpg) |

### 酒庄香槟

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 195 Château Margaux | 树木中轴建筑、上方弧形衬线品牌；下页衬线叙述与五列竖图 | 可用；image2 的衬线标题+自然材质图册适合文化/工艺叙事 | [原件所列网址](https://chateau-margaux.com/en/) · PDF 200页 · 8图 · [图集](visual-atlas/191-200.jpg) |
| 196 Opus One | 酒庄航拍、蓝色遮罩、中央年龄门表单 | 局部；年龄验证与模糊/遮罩剔除，不能当高级蓝色玻璃视觉 | [原件所列网址](https://www.opusonewinery.com/) · PDF 201页 · 1图 · [图集](visual-atlas/191-200.jpg) |

### 私人银行会所

| 编号/名称 | 首屏视觉标签 | 可用性/限制 | 来源与回看 |
|---|---|---|---|
| 197 Core Club | 黑白城市航拍、居中大衬线字标、单入口 | 可用；这是一种品牌入场页，不适合信息密集首页无条件套用 | [原件所列网址](https://thecoreclub.com/) · PDF 202页 · 1图 · [图集](visual-atlas/191-200.jpg) |
| 198 JPMorgan Private Bank | 白顶栏、金棕抽象图、中文大标题；下页细线横向编辑条目 | 可用；image2 信息版式可用于商务分析；快照预测数值不能当已核事实 | [原件所列网址](https://privatebank.jpmorgan.com/apac/cn/home) · PDF 203页 · 5图 · [图集](visual-atlas/191-200.jpg) |
| 199 Julius Baer | 秋色人像自然摄影、右下短标题、白底栏目 | 可用；HTTP 403 注记不代表本图失败；强橙色来自真实风景 | [原件所列网址](https://www.juliusbaer.com/international/en/) · PDF 204页 · 7图 · [图集](visual-atlas/191-200.jpg) |
| 200 Soho House | 乡野航拍、居中衬线短标题；下页奶油白底、衬线标题与人物图错位 | 可用；image2 为轻松编辑式生活叙事，会员数量只是原件文案 | [原件所列网址](https://www.sohohouse.com/en-us/) · PDF 205页 · 3图 · [图集](visual-atlas/191-200.jpg) |
