const routeBlueprints = [
  {
    id: "andalusia", name: "安达卢西亚文明线", badge: "最适合你们",
    countries: "西班牙", line: "塞维利亚 → 科尔多瓦 → 格拉纳达",
    copy: "伊斯兰宫殿、天主教建筑、庭院、橙树与强烈阳光并存，两个人的偏好几乎完美重合。",
    tags: ["first", "architecture", "photo", "value"], scores: { 建筑: 5, 出片: 5, 人流: 3, 预算: 3 },
    transport: "城际火车 + 城市步行", location: "欧洲西南部 · 伊比利亚半岛南部",
    budget: { local: "¥20,000–26,000", flight: "¥12,000–18,000", total: "¥32,000–44,000", hotel: "¥7,000–9,000", food: "¥4,500–6,000", transit: "¥2,500–3,500", tickets: "¥2,500–3,500", misc: "¥3,500–4,000" },
    stays: ["塞维利亚", "科尔多瓦", "格拉纳达"],
    photos: [
      ["塞维利亚", "Seville", "Seville Cathedral", "Plaza de España, Seville"],
      ["科尔多瓦", "Córdoba, Spain", "Mosque–Cathedral of Córdoba", "Roman bridge of Córdoba"],
      ["格拉纳达", "Granada", "Alhambra", "Generalife"]
    ],
    days: [
      ["抵达塞维利亚", ["Seville Airport", "Santa Cruz, Seville", "Metropol Parasol"], "机场巴士 + 步行", "抵达后入住老城", "圣十字区轻松散步", "都市阳伞看日落", "塞维利亚", "¥1,500–2,300", "第一晚不要安排预约项目。"],
      ["王宫与大教堂", ["Royal Alcázar of Seville", "Seville Cathedral", "Plaza de España, Seville"], "步行", "塞维利亚王宫", "大教堂与吉拉达塔", "西班牙广场与玛丽亚路易莎公园", "塞维利亚", "¥2,400–3,300", "王宫与大教堂建议提前预约。"],
      ["街区与弗拉门戈", ["Triana Market", "Torre del Oro", "Casa de Pilatos"], "步行 + 公交", "特里亚纳市场", "黄金塔与河岸", "彼拉多官邸、晚间弗拉门戈", "塞维利亚", "¥2,100–3,000", "选小型传统场地看弗拉门戈。"],
      ["前往科尔多瓦", ["Seville Santa Justa", "Córdoba railway station", "Roman bridge of Córdoba"], "高速火车 + 步行", "火车前往科尔多瓦", "罗马桥与老城", "百花巷与河岸夜景", "科尔多瓦", "¥2,000–2,900", "把行李留在酒店后再逛老城。"],
      ["科尔多瓦文明层", ["Mosque–Cathedral of Córdoba", "Alcázar de los Reyes Cristianos", "Medina Azahara"], "步行 + 公交", "清真寺主教座堂", "基督教君主城堡", "可选麦地那阿萨哈拉遗址", "科尔多瓦", "¥2,400–3,400", "清真寺上午光线更漂亮。"],
      ["前往格拉纳达", ["Córdoba railway station", "Granada railway station", "Mirador de San Nicolás"], "火车 + 公交", "火车前往格拉纳达", "阿尔拜辛街区", "圣尼古拉斯观景台日落", "格拉纳达", "¥2,100–3,000", "老城石板路多，行李别拖太远。"],
      ["阿尔罕布拉宫", ["Alhambra", "Generalife", "Paseo de los Tristes"], "公交 + 步行", "纳斯里德宫殿", "赫内拉利费花园", "悲伤之路与阿尔拜辛夜景", "格拉纳达", "¥2,500–3,600", "纳斯里德宫殿时段必须提前预约。"],
      ["格拉纳达返程", ["Granada Cathedral", "Alcaicería", "Granada Airport"], "步行 + 机场巴士", "大教堂与皇家礼拜堂", "阿尔凯塞利亚买伴手礼", "前往机场返程", "返程", "¥1,400–2,200", "预留机场交通时间。"]
    ]
  },
  {
    id: "italy", name: "意大利黄金三角", badge: "最经典",
    countries: "意大利", line: "罗马 → 佛罗伦萨 → 威尼斯",
    copy: "从古罗马走到文艺复兴，再到海上共和国。文明密度最高，也最容易因为贪心而赶路。",
    tags: ["first", "architecture", "photo"], scores: { 建筑: 5, 出片: 5, 人流: 5, 预算: 4 },
    transport: "高速火车 + 步行", location: "欧洲南部 · 亚平宁半岛",
    budget: { local: "¥25,000–34,000", flight: "¥13,000–20,000", total: "¥38,000–54,000", hotel: "¥10,000–14,000", food: "¥5,000–7,000", transit: "¥3,000–4,000", tickets: "¥3,000–4,500", misc: "¥4,000–4,500" },
    stays: ["罗马", "佛罗伦萨", "威尼斯"],
    photos: [
      ["罗马", "Rome", "Colosseum", "Trevi Fountain"],
      ["佛罗伦萨", "Florence", "Florence Cathedral", "Ponte Vecchio"],
      ["威尼斯", "Venice", "Piazza San Marco", "Grand Canal (Venice)"]
    ],
    days: [
      ["抵达罗马", ["Leonardo da Vinci–Fiumicino Airport", "Piazza Navona", "Pantheon, Rome"], "机场快线 + 步行", "抵达并入住历史中心", "纳沃纳广场", "万神殿与喷泉夜景", "罗马", "¥2,000–3,000", "第一晚只逛步行范围。"],
      ["古罗马的一天", ["Colosseum", "Roman Forum", "Capitoline Hill"], "步行", "斗兽场", "古罗马广场与帕拉蒂尼山", "卡比托利欧山与犹太区", "罗马", "¥2,800–4,000", "联票务必提前预约。"],
      ["梵蒂冈与巴洛克", ["Vatican Museums", "St. Peter's Basilica", "Trevi Fountain"], "地铁 + 步行", "梵蒂冈博物馆", "圣彼得大教堂", "西班牙台阶与特莱维喷泉", "罗马", "¥3,000–4,200", "梵蒂冈尽量订最早时段。"],
      ["前往佛罗伦萨", ["Roma Termini", "Firenze Santa Maria Novella", "Piazzale Michelangelo"], "高速火车 + 步行", "火车前往佛罗伦萨", "领主广场与老桥", "米开朗基罗广场日落", "佛罗伦萨", "¥2,500–3,500", "火车提前购票更划算。"],
      ["文艺复兴核心", ["Uffizi Gallery", "Florence Cathedral", "Galleria dell'Accademia"], "步行", "乌菲兹美术馆", "圣母百花大教堂", "学院美术馆与圣十字区", "佛罗伦萨", "¥3,000–4,200", "三个热门项目不要都临时排队。"],
      ["托斯卡纳或慢城", ["Florence", "Siena", "Piazza del Campo"], "巴士 / 一日团", "前往锡耶纳", "田野广场与大教堂", "返回佛罗伦萨享用晚餐", "佛罗伦萨", "¥2,800–4,000", "不想赶路可改为佛罗伦萨深度日。"],
      ["前往威尼斯", ["Firenze Santa Maria Novella", "Venezia Santa Lucia", "Rialto Bridge"], "高速火车 + 步行", "火车抵达威尼斯", "里亚托桥与小巷", "大运河夜景", "威尼斯", "¥3,000–4,300", "建议住本岛，夜晚体验差异很大。"],
      ["圣马可与返程", ["Piazza San Marco", "Doge's Palace", "Venice Marco Polo Airport"], "步行 + 水上巴士", "圣马可广场", "总督宫与叹息桥", "水上巴士前往机场", "返程", "¥2,300–3,500", "避开中午最拥挤时段。"]
    ]
  },
  {
    id: "habsburg", name: "哈布斯堡帝国线", badge: "最稳妥",
    countries: "奥地利 · 匈牙利 · 捷克", line: "维也纳 → 布达佩斯 → 布拉格",
    copy: "宫殿、歌剧院、咖啡馆、河岸和老城屋顶。交通成熟、体验稳定，适合第一次系统看中欧。",
    tags: ["first", "architecture"], scores: { 建筑: 5, 出片: 4, 人流: 4, 预算: 3 },
    transport: "城际火车 + 公共交通", location: "欧洲中部 · 多瑙河与波希米亚",
    budget: { local: "¥23,000–31,000", flight: "¥13,000–20,000", total: "¥36,000–51,000", hotel: "¥9,000–12,000", food: "¥4,500–6,500", transit: "¥3,000–4,000", tickets: "¥2,500–3,500", misc: "¥4,000–5,000" },
    stays: ["维也纳", "布达佩斯", "布拉格"],
    photos: [
      ["维也纳", "Vienna", "Schönbrunn Palace", "St. Stephen's Cathedral, Vienna"],
      ["布达佩斯", "Budapest", "Hungarian Parliament Building", "Fisherman's Bastion"],
      ["布拉格", "Prague", "Charles Bridge", "Prague Castle"]
    ],
    days: [
      ["抵达维也纳", ["Vienna International Airport", "Stephansplatz", "Vienna State Opera"], "机场快线 + 地铁", "抵达并入住内城区", "圣斯蒂芬大教堂", "歌剧院与环城大道", "维也纳", "¥1,900–2,800", "住地铁站附近即可。"],
      ["皇宫与艺术", ["Hofburg", "Kunsthistorisches Museum", "Belvedere Palace"], "步行 + 电车", "霍夫堡", "艺术史博物馆", "美景宫与音乐会", "维也纳", "¥2,700–3,800", "音乐会注意辨别游客专场。"],
      ["美泉宫与咖啡馆", ["Schönbrunn Palace", "Naschmarkt", "Café Central"], "地铁 + 步行", "美泉宫", "纳许市场与分离派会馆", "中央咖啡馆或小型酒馆", "维也纳", "¥2,500–3,500", "美泉宫早到可避开团客。"],
      ["前往布达佩斯", ["Wien Hauptbahnhof", "Budapest Keleti", "Hungarian Parliament Building"], "城际火车 + 地铁", "火车前往布达佩斯", "国会大厦与多瑙河岸", "夜游船看两岸灯光", "布达佩斯", "¥2,500–3,600", "夜游船选择露天甲板。"],
      ["布达与佩斯", ["Buda Castle", "Fisherman's Bastion", "Széchenyi thermal bath"], "公交 + 地铁", "城堡山与渔人堡", "中央市场与安德拉什大街", "塞切尼温泉", "布达佩斯", "¥2,600–3,700", "温泉自备拖鞋更方便。"],
      ["前往布拉格", ["Budapest Nyugati", "Praha hlavní nádraží", "Old Town Square, Prague"], "城际火车 + 步行", "火车前往布拉格", "老城广场与天文钟", "伏尔塔瓦河岸夜景", "布拉格", "¥2,500–3,600", "跨城约七小时，可选早班机。"],
      ["布拉格城堡日", ["Prague Castle", "Charles Bridge", "Petřín"], "电车 + 步行", "布拉格城堡", "小城区与查理大桥", "佩特任山或河岸", "布拉格", "¥2,300–3,300", "清晨先走查理大桥。"],
      ["老城与返程", ["Jewish Quarter, Prague", "Municipal House, Prague", "Václav Havel Airport Prague"], "步行 + 机场巴士", "犹太区", "市民会馆与火药塔", "前往机场返程", "返程", "¥1,700–2,600", "犹太区套票预留半天。"]
    ]
  },
  {
    id: "portugal", name: "葡萄牙慢旅行", badge: "最松弛",
    countries: "葡萄牙", line: "里斯本 → 辛特拉 → 波尔图",
    copy: "彩砖、坡城、宫殿、海风和旧电车，照片色彩丰富，整体节奏比经典大国路线松弛。",
    tags: ["first", "photo", "value"], scores: { 建筑: 4, 出片: 5, 人流: 3, 预算: 3 },
    transport: "火车 + 公共交通", location: "欧洲西南端 · 大西洋沿岸",
    budget: { local: "¥20,000–28,000", flight: "¥14,000–22,000", total: "¥34,000–50,000", hotel: "¥8,000–11,000", food: "¥4,000–5,500", transit: "¥2,000–3,000", tickets: "¥2,000–3,000", misc: "¥4,000–5,500" },
    stays: ["里斯本", "辛特拉", "波尔图"],
    photos: [
      ["里斯本", "Lisbon", "Belém Tower", "Praça do Comércio"],
      ["辛特拉", "Sintra", "Pena Palace", "Quinta da Regaleira"],
      ["波尔图", "Porto", "Dom Luís I Bridge", "Livraria Lello"]
    ],
    days: [
      ["抵达里斯本", ["Lisbon Airport", "Praça do Comércio", "Miradouro de Santa Luzia"], "地铁 + 步行", "入住市中心", "商业广场与奥古斯塔街", "圣露西亚观景台", "里斯本", "¥1,700–2,500", "坡路多，鞋子要防滑。"],
      ["阿尔法玛与老城", ["Lisbon Cathedral", "São Jorge Castle", "Miradouro da Senhora do Monte"], "步行 + 电车", "主教座堂与阿尔法玛", "圣乔治城堡", "恩宠观景台看日落", "里斯本", "¥2,100–3,000", "28路电车注意随身物品。"],
      ["贝伦与河岸", ["Jerónimos Monastery", "Belém Tower", "LX Factory"], "电车 + 步行", "热罗尼莫斯修道院", "贝伦塔与发现者纪念碑", "LX Factory", "里斯本", "¥2,100–3,000", "蛋挞店可错峰外带。"],
      ["住进辛特拉", ["Lisbon Rossio Station", "Pena Palace", "Sintra"], "火车 + 公交", "火车前往辛特拉", "佩纳宫", "小镇晚餐与夜间散步", "辛特拉", "¥2,500–3,500", "住一晚可以避开一日团高峰。"],
      ["辛特拉与海角", ["Quinta da Regaleira", "Cabo da Roca", "Cascais"], "公交 / 包车", "雷加莱拉庄园", "罗卡角", "卡斯凯什海岸后返回里斯本", "里斯本", "¥2,500–3,800", "风大，带轻薄防风外套。"],
      ["前往波尔图", ["Lisbon Oriente", "Porto Campanhã", "Ribeira, Porto"], "城际火车 + 地铁", "火车前往波尔图", "里贝拉河岸", "路易一世大桥日落", "波尔图", "¥2,300–3,300", "选河景餐厅前先看菜单价格。"],
      ["波尔图建筑与酒窖", ["São Bento railway station", "Livraria Lello", "Vila Nova de Gaia"], "步行 + 地铁", "圣本笃车站与教堂", "莱罗书店与老城", "盖亚酒窖与河岸", "波尔图", "¥2,300–3,400", "莱罗书店需预约时段。"],
      ["波尔图返程", ["Clérigos Church", "Bolhão Market", "Francisco Sá Carneiro Airport"], "步行 + 地铁", "牧师塔", "博良市场", "地铁前往机场", "返程", "¥1,500–2,300", "早班机可住机场线附近。"]
    ]
  },
  {
    id: "france", name: "法国城市与乡村", badge: "最法式",
    countries: "法国", line: "巴黎 → 斯特拉斯堡 → 科尔马",
    copy: "巴黎负责宏大与艺术，阿尔萨斯负责童话街景。传统西欧体验完整，但预算需要控制。",
    tags: ["first", "architecture", "photo"], scores: { 建筑: 5, 出片: 5, 人流: 4, 预算: 4 },
    transport: "高速火车 + 公共交通", location: "欧洲西部 · 法兰西岛至莱茵河谷",
    budget: { local: "¥28,000–38,000", flight: "¥14,000–22,000", total: "¥42,000–60,000", hotel: "¥12,000–17,000", food: "¥5,500–7,500", transit: "¥3,000–4,500", tickets: "¥3,000–4,000", misc: "¥4,500–5,000" },
    stays: ["巴黎", "斯特拉斯堡", "科尔马"],
    photos: [
      ["巴黎", "Paris", "Louvre", "Eiffel Tower"],
      ["斯特拉斯堡", "Strasbourg", "Strasbourg Cathedral", "Petite France, Strasbourg"],
      ["科尔马", "Colmar", "Little Venice, Colmar", "Unterlinden Museum"]
    ],
    days: [
      ["抵达巴黎", ["Charles de Gaulle Airport", "Île de la Cité", "Pont Neuf"], "机场快线 + 地铁", "抵达并入住", "西岱岛与塞纳河", "新桥与拉丁区", "巴黎", "¥2,300–3,300", "避免拖着行李换乘太多次。"],
      ["卢浮宫与城市轴线", ["Louvre Museum", "Tuileries Garden", "Arc de Triomphe"], "步行 + 地铁", "卢浮宫", "杜乐丽花园与协和广场", "香榭丽舍与凯旋门", "巴黎", "¥3,200–4,500", "卢浮宫只选重点展区。"],
      ["巴黎街区与铁塔", ["Musée d'Orsay", "Saint-Germain-des-Prés", "Eiffel Tower"], "步行 + 地铁", "奥赛博物馆", "圣日耳曼街区", "夏乐宫看铁塔夜景", "巴黎", "¥3,000–4,200", "铁塔登顶需提前预约。"],
      ["凡尔赛或蒙马特", ["Palace of Versailles", "Montmartre", "Sacré-Cœur, Paris"], "RER + 地铁", "凡尔赛宫与花园", "返回巴黎休息", "蒙马特与圣心堂", "巴黎", "¥3,200–4,600", "周一凡尔赛宫闭馆。"],
      ["前往斯特拉斯堡", ["Paris Gare de l'Est", "Strasbourg station", "Petite France, Strasbourg"], "高速火车 + 步行", "火车前往斯特拉斯堡", "小法兰西", "大教堂与河岸夜景", "斯特拉斯堡", "¥2,800–4,000", "提前订TGV。"],
      ["斯特拉斯堡深度", ["Strasbourg Cathedral", "Palais Rohan, Strasbourg", "European Parliament"], "步行 + 电车", "主教座堂", "罗昂宫与老城", "欧洲区与运河", "斯特拉斯堡", "¥2,300–3,300", "教堂天文钟有固定时间。"],
      ["科尔马与葡萄酒村", ["Strasbourg station", "Colmar", "Eguisheim"], "火车 + 公交 / 一日团", "火车到科尔马", "小威尼斯与老城", "埃吉桑或葡萄酒村", "科尔马", "¥2,500–3,800", "乡村公交班次少，提前查时刻。"],
      ["科尔马返程", ["Unterlinden Museum", "Colmar station", "EuroAirport Basel Mulhouse Freiburg"], "步行 + 巴士", "恩特林登博物馆", "老城最后散步", "前往巴塞尔机场返程", "返程", "¥2,000–3,000", "确认返程机场所属国家与航站楼。"]
    ]
  },
  {
    id: "south-france", name: "南法山海线", badge: "你们已有攻略",
    countries: "法国", line: "尼斯 → 吕贝隆 → 阿维尼翁",
    copy: "蔚蓝海岸、石头村与教皇城组成画面变化丰富的路线，适合同时理解城市与乡村。",
    tags: ["photo", "architecture"], scores: { 建筑: 4, 出片: 5, 人流: 3, 预算: 4 },
    transport: "火车 + 租车自驾", location: "欧洲西南部 · 地中海沿岸与普罗旺斯",
    budget: { local: "¥24,000–34,000", flight: "¥14,000–22,000", total: "¥38,000–56,000", hotel: "¥10,000–14,000", food: "¥5,000–7,000", transit: "¥4,000–6,000", tickets: "¥1,500–2,500", misc: "¥3,500–4,500" },
    stays: ["尼斯", "吕贝隆", "阿维尼翁"],
    photos: [
      ["尼斯", "Nice", "Promenade des Anglais", "Castle Hill, Nice"],
      ["吕贝隆", "Luberon", "Gordes", "Roussillon, Vaucluse", "Abbey of Sénanque"],
      ["阿维尼翁", "Avignon", "Palais des Papes", "Pont Saint-Bénézet"]
    ],
    days: [
      ["抵达尼斯", ["Nice Côte d'Azur Airport", "Promenade des Anglais", "Castle Hill, Nice"], "电车 + 步行", "抵达并入住老城附近", "英国人漫步大道", "城堡山日落", "尼斯", "¥2,000–3,000", "海边风大，带薄外套。"],
      ["尼斯老城与海岸", ["Cours Saleya", "Musée Matisse", "Villefranche-sur-Mer"], "公交 + 步行", "萨莱亚市场与老城", "马蒂斯博物馆", "滨海自由城晚餐", "尼斯", "¥2,500–3,600", "市场上午更有活力。"],
      ["埃兹与芒通", ["Nice", "Èze", "Menton"], "火车 + 公交", "埃兹山城", "海岸景观公路", "芒通彩色老城", "尼斯", "¥2,400–3,500", "埃兹上下坡明显。"],
      ["自驾进入吕贝隆", ["Nice", "Moustiers-Sainte-Marie", "Gordes"], "租车自驾", "尼斯取车", "穆斯捷与峡谷沿途", "抵达戈尔德", "吕贝隆", "¥3,500–5,000", "山区不要安排夜间长途驾驶。"],
      ["石头村与修道院", ["Gordes", "Abbey of Sénanque", "Roussillon, Vaucluse"], "自驾", "戈尔德观景台", "塞南克修道院", "鲁西永赭石步道", "吕贝隆", "¥3,000–4,300", "国庆不是薰衣草季，重点看村庄与秋色。"],
      ["南吕贝隆村落", ["Lourmarin", "Bonnieux", "Ménerbes"], "自驾", "卢尔马兰", "博尼约午餐", "梅纳村与葡萄园", "吕贝隆", "¥3,000–4,300", "停车尽量使用村外公共停车场。"],
      ["前往阿维尼翁", ["Gordes", "L'Isle-sur-la-Sorgue", "Avignon"], "自驾", "泉水小镇或市集", "前往阿维尼翁还车", "城墙与教皇宫夜景", "阿维尼翁", "¥3,000–4,300", "还车点与营业时间提前确认。"],
      ["教皇城返程", ["Palais des Papes", "Pont Saint-Bénézet", "Avignon TGV"], "步行 + 接驳车", "教皇宫", "圣贝内泽桥与老城", "前往TGV站返程", "返程", "¥2,000–3,000", "TGV站不在老城中心。"]
    ]
  },
  {
    id: "romania", name: "特兰西瓦尼亚秋色线", badge: "安静首选",
    countries: "罗马尼亚", line: "布拉索夫 → 锡吉什瓦拉 → 锡比乌",
    copy: "中世纪古城、城堡、山村与秋色，游客明显少于西欧经典线，预算也更友好。",
    tags: ["quiet", "architecture", "photo", "value"], scores: { 建筑: 4, 出片: 5, 人流: 2, 预算: 2 },
    transport: "火车 + 局部租车", location: "欧洲东南部 · 喀尔巴阡山脉内侧",
    budget: { local: "¥16,000–23,000", flight: "¥14,000–22,000", total: "¥30,000–45,000", hotel: "¥5,500–8,000", food: "¥3,000–4,500", transit: "¥3,000–4,500", tickets: "¥1,500–2,000", misc: "¥3,000–4,000" },
    stays: ["布拉索夫", "锡吉什瓦拉", "锡比乌"],
    photos: [
      ["布拉索夫", "Brașov", "Black Church", "Bran Castle"],
      ["锡吉什瓦拉", "Sighișoara", "Sighișoara Clock Tower", "Transylvania"],
      ["锡比乌", "Sibiu", "Brukenthal National Museum", "ASTRA National Museum Complex"]
    ],
    days: [
      ["抵达布加勒斯特", ["Henri Coandă International Airport", "Romanian Athenaeum", "Old Town, Bucharest"], "机场火车 + 步行", "抵达并入住", "雅典娜音乐厅与胜利大道", "布加勒斯特老城", "布加勒斯特", "¥1,500–2,300", "把首都作为交通缓冲。"],
      ["前往布拉索夫", ["Bucharest North railway station", "Sinaia", "Brașov"], "火车", "火车前往锡纳亚", "佩莱什城堡", "继续前往布拉索夫", "布拉索夫", "¥1,800–2,700", "佩莱什城堡周一常闭。"],
      ["布拉索夫与布兰", ["Brașov", "Bran Castle", "Râșnov Citadel"], "租车 / 一日团", "黑教堂与议会广场", "布兰城堡", "勒什诺夫与山景", "布拉索夫", "¥2,000–3,100", "布兰城堡文化价值高于吸血鬼故事。"],
      ["山村与秋色", ["Brașov", "Viscri", "Sighișoara"], "租车自驾", "前往维斯克里村", "乡村教堂与山谷", "抵达锡吉什瓦拉", "锡吉什瓦拉", "¥2,300–3,500", "乡村道路慢，天黑前抵达。"],
      ["锡吉什瓦拉慢游", ["Sighișoara Clock Tower", "Church on the Hill, Sighișoara", "Covered Stairway"], "步行", "钟楼与城堡区", "山上教堂", "古城夜景", "锡吉什瓦拉", "¥1,500–2,300", "古城很小，适合放慢节奏。"],
      ["前往锡比乌", ["Sighișoara", "Biertan", "Sibiu"], "租车 / 包车", "比耶尔坦防御教堂", "穿越特兰西瓦尼亚村庄", "锡比乌大广场", "锡比乌", "¥2,200–3,400", "防御教堂开放时间需复核。"],
      ["锡比乌与乡村博物馆", ["Sibiu", "ASTRA National Museum Complex", "Păltiniș"], "公交 / 自驾", "锡比乌老城屋顶之眼", "ASTRA露天博物馆", "可选帕尔蒂尼什山景", "锡比乌", "¥1,900–2,900", "露天博物馆至少留三小时。"],
      ["返回布加勒斯特", ["Sibiu", "Bucharest", "Henri Coandă International Airport"], "国内航班 / 火车", "返回布加勒斯特", "根据航班补逛", "机场返程", "返程", "¥1,800–3,000", "优先选锡比乌飞布加勒斯特。"]
    ]
  },
  {
    id: "adriatic", name: "亚得里亚海交界线", badge: "历史层次最复杂",
    countries: "黑山 · 波黑", line: "科托尔 → 莫斯塔尔 → 萨拉热窝",
    copy: "威尼斯石城、奥斯曼老城与山海地形交织，历史复杂、画面强烈。",
    tags: ["quiet", "photo", "value"], scores: { 建筑: 4, 出片: 5, 人流: 3, 预算: 2 },
    transport: "巴士 + 包车 / 租车", location: "欧洲东南部 · 亚得里亚海与巴尔干内陆",
    budget: { local: "¥17,000–25,000", flight: "¥15,000–24,000", total: "¥32,000–49,000", hotel: "¥6,000–9,000", food: "¥3,500–5,000", transit: "¥3,500–5,000", tickets: "¥1,500–2,000", misc: "¥2,500–4,000" },
    stays: ["科托尔", "莫斯塔尔", "萨拉热窝"],
    photos: [
      ["科托尔", "Kotor", "Bay of Kotor", "Kotor Cathedral"],
      ["莫斯塔尔", "Mostar", "Stari Most", "Blagaj"],
      ["萨拉热窝", "Sarajevo", "Baščaršija", "Latin Bridge"]
    ],
    days: [
      ["抵达科托尔湾", ["Tivat Airport", "Kotor", "Kotor Old Town"], "机场接送 + 步行", "抵达蒂瓦特", "前往科托尔入住", "石城夜景", "科托尔", "¥1,600–2,500", "旺季石城白天团客多。"],
      ["科托尔古城与城墙", ["Kotor Old Town", "Kotor Fortress", "Kotor Serpentine"], "步行 + 包车", "老城与教堂", "登城墙看海湾", "蛇形公路观景台", "科托尔", "¥1,900–2,900", "登城墙需防晒和水。"],
      ["佩拉斯特海湾日", ["Kotor", "Perast", "Our Lady of the Rocks"], "公交 + 渡船", "前往佩拉斯特", "岩上圣母岛", "海湾慢游后返科托尔", "科托尔", "¥1,800–2,800", "小船价格先确认。"],
      ["跨境前往莫斯塔尔", ["Kotor", "Trebinje", "Mostar"], "巴士 / 包车", "沿亚得里亚山地北上", "特雷比涅午餐", "抵达莫斯塔尔看古桥", "莫斯塔尔", "¥2,300–3,600", "跨境时间不稳定，别排预约。"],
      ["莫斯塔尔与布拉加伊", ["Stari Most", "Blagaj Tekke", "Počitelj"], "包车 / 租车", "莫斯塔尔古城", "布拉加伊泉水修道院", "波契泰尔石城", "莫斯塔尔", "¥2,000–3,200", "古桥石路非常滑。"],
      ["前往萨拉热窝", ["Mostar", "Konjic", "Sarajevo"], "火车 / 巴士", "乘景观火车北上", "科尼茨或沿途山谷", "萨拉热窝老城晚餐", "萨拉热窝", "¥1,800–2,800", "莫斯塔尔至萨拉热窝火车景色好。"],
      ["萨拉热窝历史日", ["Baščaršija", "Latin Bridge", "Tunnel of Hope"], "电车 + 步行", "巴什察尔希亚", "拉丁桥与城市历史", "希望隧道博物馆", "萨拉热窝", "¥1,800–2,800", "理解历史比打卡更重要。"],
      ["萨拉热窝返程", ["Yellow Fortress, Sarajevo", "Vrelo Bosne", "Sarajevo International Airport"], "电车 + 出租车", "黄堡晨景", "可选波斯纳泉", "前往机场返程", "返程", "¥1,500–2,400", "机场规模小但跨境航班需早到。"]
    ]
  },
  {
    id: "belgium", name: "比利时古城线", badge: "短途好走",
    countries: "比利时", line: "布鲁塞尔 → 根特 → 布鲁日",
    copy: "城市间距离短，砖房、运河与中世纪商业城市气质鲜明，住根特可以避开布鲁日白天人潮。",
    tags: ["architecture", "photo"], scores: { 建筑: 4, 出片: 5, 人流: 4, 预算: 4 },
    transport: "火车 + 步行", location: "欧洲西部 · 低地国家",
    budget: { local: "¥24,000–32,000", flight: "¥14,000–22,000", total: "¥38,000–54,000", hotel: "¥10,000–13,000", food: "¥5,000–6,500", transit: "¥2,000–3,000", tickets: "¥2,000–3,000", misc: "¥5,000–6,500" },
    stays: ["布鲁塞尔", "根特", "布鲁日"],
    photos: [
      ["布鲁塞尔", "Brussels", "Grand-Place", "Atomium"],
      ["根特", "Ghent", "Gravensteen", "Saint Bavo's Cathedral"],
      ["布鲁日", "Bruges", "Belfry of Bruges", "Rozenhoedkaai"]
    ],
    days: [
      ["抵达布鲁塞尔", ["Brussels Airport", "Grand-Place", "Galeries Royales Saint-Hubert"], "火车 + 步行", "抵达并入住中央车站附近", "大广场", "皇家拱廊与夜景", "布鲁塞尔", "¥2,200–3,200", "大广场夜景值得再去一次。"],
      ["艺术与新艺术", ["Royal Museums of Fine Arts of Belgium", "Horta Museum", "Sablon, Brussels"], "电车 + 步行", "皇家美术馆", "萨布隆区", "奥塔博物馆与新艺术街区", "布鲁塞尔", "¥2,600–3,600", "奥塔博物馆需预约。"],
      ["布鲁塞尔城市层", ["Atomium", "European Quarter, Brussels", "Cinquantenaire"], "地铁", "原子球塔", "欧洲区", "五十周年纪念公园", "布鲁塞尔", "¥2,300–3,300", "原子球塔较远，可按兴趣取舍。"],
      ["前往根特", ["Brussels Central", "Gent-Sint-Pieters", "Graslei"], "火车 + 电车", "火车前往根特", "香草河岸与谷物河岸", "灯光计划夜景", "根特", "¥2,300–3,300", "根特夜景是这条线的重点。"],
      ["根特中世纪城", ["Gravensteen", "Saint Bavo's Cathedral", "Belfry of Ghent"], "步行", "伯爵城堡", "圣巴夫主教座堂", "钟楼与老城", "根特", "¥2,300–3,300", "看《神秘羔羊》预留时间。"],
      ["前往布鲁日", ["Gent-Sint-Pieters", "Bruges station", "Rozenhoedkaai"], "火车 + 步行", "早班火车去布鲁日", "市集广场与钟楼", "玫瑰码头傍晚", "布鲁日", "¥2,400–3,500", "住一晚才能看到安静的布鲁日。"],
      ["布鲁日慢游", ["Minnewater", "Groeningemuseum", "Sint-Janshuis Mill"], "步行 / 自行车", "爱之湖", "格罗宁格博物馆", "风车与城墙", "布鲁日", "¥2,300–3,300", "可租自行车绕城。"],
      ["返回布鲁塞尔返程", ["Bruges station", "Brussels Central", "Brussels Airport"], "火车", "返回布鲁塞尔", "根据航班补逛与购物", "机场返程", "返程", "¥1,800–2,700", "比利时火车无需提前很久订。"]
    ]
  },
  {
    id: "baltic", name: "波罗的海老城线", badge: "人少路线",
    countries: "立陶宛 · 拉脱维亚 · 爱沙尼亚", line: "维尔纽斯 → 里加 → 塔林",
    copy: "游客相对少，老城、森林与新艺术建筑各有特色，适合喜欢安静且能接受偏冷天气的人。",
    tags: ["quiet", "value"], scores: { 建筑: 4, 出片: 4, 人流: 2, 预算: 2 },
    transport: "跨城巴士 + 步行", location: "欧洲东北部 · 波罗的海东岸",
    budget: { local: "¥17,000–24,000", flight: "¥15,000–23,000", total: "¥32,000–47,000", hotel: "¥6,500–9,000", food: "¥3,500–5,000", transit: "¥2,500–3,500", tickets: "¥1,500–2,000", misc: "¥3,000–4,500" },
    stays: ["维尔纽斯", "里加", "塔林"],
    photos: [
      ["维尔纽斯", "Vilnius", "Vilnius Cathedral", "Gate of Dawn"],
      ["里加", "Riga", "House of the Blackheads (Riga)", "Art Nouveau architecture in Riga"],
      ["塔林", "Tallinn", "Tallinn Town Hall", "Toompea"]
    ],
    days: [
      ["抵达维尔纽斯", ["Vilnius Airport", "Vilnius Old Town", "Gate of Dawn"], "火车 / 公交 + 步行", "抵达并入住老城", "黎明门与老城", "共和国街区夜景", "维尔纽斯", "¥1,500–2,300", "秋季昼短，优先户外。"],
      ["巴洛克维尔纽斯", ["Vilnius Cathedral", "Gediminas' Tower", "Church of St. Peter and St. Paul, Vilnius"], "步行 + 公交", "主教座堂与城堡山", "大学与巴洛克教堂", "圣彼得与保罗教堂", "维尔纽斯", "¥1,700–2,500", "教堂内部开放时间不一。"],
      ["特拉凯湖区", ["Vilnius", "Trakai Island Castle", "Vilnius"], "火车 / 巴士", "前往特拉凯", "湖心城堡", "湖边散步后返城", "维尔纽斯", "¥1,800–2,700", "天气好时非常出片。"],
      ["前往里加", ["Vilnius Bus Station", "Riga International Bus Station", "House of the Blackheads, Riga"], "跨城巴士", "巴士前往里加", "黑头宫与老城", "道加瓦河岸", "里加", "¥1,900–2,900", "跨城巴士舒适且班次多。"],
      ["里加新艺术", ["Riga Cathedral", "Alberta iela", "Central Market, Riga"], "步行 + 电车", "里加老城", "阿尔伯特街新艺术建筑", "中央市场", "里加", "¥1,800–2,700", "新艺术街区适合上午拍照。"],
      ["前往塔林", ["Riga International Bus Station", "Tallinn Bus Station", "Tallinn Town Hall"], "跨城巴士 + 电车", "巴士前往塔林", "市政厅广场", "老城夜景", "塔林", "¥2,000–3,000", "抵达后直接住老城边缘。"],
      ["塔林上下城", ["Toompea", "Alexander Nevsky Cathedral, Tallinn", "Telliskivi Creative City"], "步行 + 电车", "托姆比亚观景台", "下城街巷", "创意园区与木屋区", "塔林", "¥1,900–2,900", "石板路多，带舒适鞋。"],
      ["塔林返程", ["Kadriorg Palace", "Kumu, Tallinn", "Tallinn Airport"], "电车 + 公交", "卡德里奥宫", "KUMU艺术馆", "前往机场返程", "返程", "¥1,700–2,600", "机场距离市区很近。"]
    ]
  },
  {
    id: "switzerland", name: "阿尔卑斯景观线", badge: "风景优先",
    countries: "瑞士", line: "卢塞恩 → 因特拉肯 → 伯尔尼",
    copy: "湖泊、雪山与铁路系统极其出片，但历史建筑不是绝对主角，花费明显高于其他路线。",
    tags: ["photo"], scores: { 建筑: 3, 出片: 5, 人流: 3, 预算: 5 },
    transport: "景观火车 + 公共交通", location: "欧洲中部 · 阿尔卑斯山北麓",
    budget: { local: "¥35,000–48,000", flight: "¥14,000–22,000", total: "¥49,000–70,000", hotel: "¥15,000–21,000", food: "¥7,000–10,000", transit: "¥5,000–7,000", tickets: "¥3,000–5,000", misc: "¥5,000–5,000" },
    stays: ["卢塞恩", "因特拉肯", "伯尔尼"],
    photos: [
      ["卢塞恩", "Lucerne", "Chapel Bridge", "Lake Lucerne"],
      ["因特拉肯", "Interlaken", "Jungfrau", "Lauterbrunnen"],
      ["伯尔尼", "Bern", "Zytglogge", "Federal Palace of Switzerland"]
    ],
    days: [
      ["抵达卢塞恩", ["Zurich Airport", "Lucerne", "Chapel Bridge"], "火车 + 步行", "机场火车到卢塞恩", "卡佩尔桥与老城", "湖边夜景", "卢塞恩", "¥3,200–4,500", "瑞士交通尽早比较通票。"],
      ["卢塞恩湖与山景", ["Lucerne", "Mount Rigi", "Vitznau"], "游船 + 登山铁路", "游船前往维茨瑙", "瑞吉山登山铁路", "返回卢塞恩", "卢塞恩", "¥4,000–5,800", "天气差时改博物馆与老城。"],
      ["黄金列车前往因特拉肯", ["Lucerne", "Interlaken Ost", "Harder Kulm"], "景观火车 + 缆车", "乘景观火车", "抵达因特拉肯", "哈德昆观景台", "因特拉肯", "¥4,000–5,500", "景观列车靠窗座位可预约。"],
      ["少女峰地区", ["Interlaken Ost", "Jungfraujoch", "Lauterbrunnen"], "火车 + 缆车", "前往少女峰", "高山观景与冰宫", "经劳特布龙嫩返回", "因特拉肯", "¥5,000–7,500", "高海拔活动量要保守。"],
      ["劳特布龙嫩与米伦", ["Interlaken Ost", "Lauterbrunnen", "Mürren"], "火车 + 缆车", "劳特布龙嫩山谷", "缆车前往米伦", "山村散步", "因特拉肯", "¥3,800–5,500", "这一日比少女峰更适合拍照。"],
      ["前往伯尔尼", ["Interlaken Ost", "Bern", "Rosengarten, Bern"], "火车 + 步行", "火车前往伯尔尼", "老城与钟楼", "玫瑰园看城市全景", "伯尔尼", "¥3,300–4,600", "伯尔尼老城适合慢走。"],
      ["伯尔尼与周边", ["Federal Palace of Switzerland", "Zentrum Paul Klee", "Gurten"], "电车 + 步行", "联邦宫与拱廊", "保罗克利中心", "古尔滕山或河岸", "伯尔尼", "¥3,200–4,600", "商店周日多关闭。"],
      ["前往苏黎世返程", ["Bern", "Zurich", "Zurich Airport"], "火车", "火车前往苏黎世", "根据航班逛老城或湖边", "机场返程", "返程", "¥2,800–4,000", "机场火车班次频繁。"]
    ]
  }
];
