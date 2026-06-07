const regions = {
  central:{code:"CENTRAL EUROPE",title:"中欧：帝国留下的客厅",tagline:"维也纳 · 布拉格 · 布达佩斯 · 克拉科夫",metrics:{"建筑密度":5,"出片能力":4,"性价比":4,"人少程度":2},copy:"宫殿、歌剧院、教堂、咖啡馆和十九世纪街区连续出现。对于第一次系统理解欧洲建筑的人，中欧是最稳妥的课堂。",places:["维也纳宫殿","布拉格老城","布达佩斯河岸","咖啡馆文化"]},
  italy:{code:"ITALY",title:"意大利：露天文明博物馆",tagline:"罗马 · 佛罗伦萨 · 威尼斯",metrics:{"建筑密度":5,"出片能力":5,"性价比":3,"人少程度":1},copy:"古罗马、天主教、城市共和国与文艺复兴连续叠加。经典路线游客很多，但文明密度无可替代。",places:["古罗马遗迹","文艺复兴","威尼斯水城","教堂与雕塑"]},
  iberia:{code:"IBERIAN PENINSULA",title:"伊比利亚：阳光下的文明交汇",tagline:"塞维利亚 · 科尔多瓦 · 格拉纳达 · 里斯本",metrics:{"建筑密度":5,"出片能力":5,"性价比":4,"人少程度":3},copy:"罗马、伊斯兰、天主教王国与大航海时代共同塑造了庭院、彩砖、宫殿、橙树和白色小镇。",places:["阿尔罕布拉宫","塞维利亚王宫","科尔多瓦清真寺","里斯本彩砖"]},
  france:{code:"FRANCE",title:"法国：被审美组织过的国家",tagline:"巴黎 · 阿尔萨斯 · 普罗旺斯 · 蔚蓝海岸",metrics:{"建筑密度":5,"出片能力":5,"性价比":2,"人少程度":2},copy:"从巴黎的城市轴线到南法村庄，法国最特别的是强烈而完整的整体审美。",places:["巴黎城市轴线","哥特教堂","阿尔萨斯","南法山海"]},
  lowlands:{code:"LOW COUNTRIES",title:"低地国家：油画变成了城市",tagline:"布鲁塞尔 · 根特 · 布鲁日 · 阿姆斯特丹",metrics:{"建筑密度":4,"出片能力":5,"性价比":2,"人少程度":2},copy:"商业、航海、市民社会和绘画传统塑造了运河、砖房与精致广场。城市间距离短，适合轻松串联。",places:["运河屋","根特夜景","布鲁日","油画与博物馆"]},
  balkans:{code:"BALKANS",title:"巴尔干：欧洲历史的交界面",tagline:"科托尔 · 莫斯塔尔 · 萨拉热窝 · 特兰西瓦尼亚",metrics:{"建筑密度":4,"出片能力":5,"性价比":5,"人少程度":4},copy:"罗马、拜占庭、奥斯曼、威尼斯与奥匈帝国反复交错。它不如西欧整齐，却更能让人感觉历史真实发生过。",places:["亚得里亚海石城","奥斯曼街区","东正教教堂","山海地形"]},
  nordic:{code:"NORDICS",title:"北欧：把安静与设计做到极致",tagline:"哥本哈根 · 斯德哥尔摩 · 奥斯陆 · 赫尔辛基",metrics:{"建筑密度":3,"出片能力":4,"性价比":1,"人少程度":4},copy:"北欧旅行的主角通常不是连续的古建筑，而是设计、港口、自然与生活方式。画面简洁克制，但预算较高。",places:["北欧设计","彩色港口","群岛","现代建筑"]},
  british:{code:"BRITISH ISLES",title:"英伦：王权、学院与工业革命",tagline:"伦敦 · 爱丁堡 · 牛津 · 巴斯",metrics:{"建筑密度":5,"出片能力":4,"性价比":1,"人少程度":2},copy:"从中世纪王权、大学城、乔治时期街区到工业革命，英伦拥有非常完整的历史叙事。",places:["伦敦博物馆","牛津学院","巴斯","爱丁堡"]},
  east:{code:"EASTERN EUROPE",title:"东欧：重建、记忆与广阔腹地",tagline:"华沙 · 维尔纽斯 · 里加 · 塔林",metrics:{"建筑密度":4,"出片能力":4,"性价比":5,"人少程度":4},copy:"战争、边界变化、社会主义时期与民族复兴是理解这一地区的关键词。旅行价值既在漂亮，也在城市如何解释历史。",places:["波罗的海老城","里加新艺术","维尔纽斯","重建与记忆"]}
};

const routeGrid = document.getElementById("routeGrid");
const drawer = document.getElementById("routeDrawer");
const backdrop = document.getElementById("drawerBackdrop");
const lightbox = document.getElementById("lightbox");
let lastFocused = null;

function metricHTML(metrics){
  return Object.entries(metrics).map(([key,value])=>`<div class="metric"><div class="metric-row"><span>${key}</span><b>${value}/5</b></div><div class="bar"><span style="width:${value*20}%"></span></div></div>`).join("");
}

function selectRegion(key){
  const region=regions[key];
  document.querySelectorAll(".region").forEach(el=>{
    const active=el.dataset.region===key;
    el.classList.toggle("active",active);
    el.setAttribute("aria-pressed",String(active));
  });
  document.getElementById("regionCode").textContent=region.code;
  document.getElementById("regionTitle").textContent=region.title;
  document.getElementById("regionTagline").textContent=region.tagline;
  document.getElementById("regionMetrics").innerHTML=metricHTML(region.metrics);
  document.getElementById("regionCopy").textContent=region.copy;
  document.getElementById("regionPlaces").innerHTML=region.places.map(x=>`<span>${x}</span>`).join("");
}

document.querySelectorAll(".region").forEach(el=>{
  el.setAttribute("tabindex","0");
  el.setAttribute("role","button");
  el.addEventListener("click",()=>selectRegion(el.dataset.region));
  el.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" "){event.preventDefault();selectRegion(el.dataset.region);}
  });
});
selectRegion("central");

function scoreHTML(scores){
  return Object.entries(scores).map(([key,value])=>`<div class="score"><span>${key}</span><b>${value}/5</b></div>`).join("");
}

routeBlueprints.forEach((route,index)=>{
  const card=document.createElement("article");
  card.className="route-card";
  card.tabIndex=0;
  card.dataset.route=route.id;
  card.dataset.tags=route.tags.join(" ");
  card.setAttribute("aria-label",`查看${route.name}完整行程`);
  card.innerHTML=`<div class="route-rank"><span>ROUTE ${String(index+1).padStart(2,"0")}</span><span>8天7晚</span></div>
    <h3>${route.name}</h3><div class="route-line">${route.line}</div><p>${route.copy}</p>
    <div class="route-pills"><span class="pill">${route.countries}</span><span class="pill">${route.transport}</span></div>
    <div class="route-budget"><div><small>两人当地费用</small><strong>${route.budget.local}</strong></div><div><small>含国际机票</small><strong>${route.budget.total}</strong></div></div>
    <div class="scores">${scoreHTML(route.scores)}</div>
    <div class="route-action"><span class="route-badge">${route.badge}</span><span class="route-more">查看每日攻略 →</span></div>`;
  card.addEventListener("click",()=>openRoute(route.id,card));
  card.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openRoute(route.id,card);}});
  routeGrid.appendChild(card);
});

document.getElementById("routeFilters").addEventListener("click",event=>{
  if(!event.target.matches(".filter-button"))return;
  document.querySelectorAll(".filter-button").forEach(x=>x.classList.remove("active"));
  event.target.classList.add("active");
  const filter=event.target.dataset.filter;
  document.querySelectorAll(".route-card").forEach(card=>card.classList.toggle("hidden",filter!=="all"&&!card.dataset.tags.split(" ").includes(filter)));
});

function googleEmbed(points){
  const [origin,...rest]=points;
  const destination=rest.length?rest.map(encodeURIComponent).join("+to:"):encodeURIComponent(origin);
  return `https://maps.google.com/maps?output=embed&saddr=${encodeURIComponent(origin)}&daddr=${destination}`;
}

function googleOpen(points){
  const [origin,...rest]=points;
  const destination=rest.at(-1)||origin;
  const waypoints=rest.slice(0,-1).join("|");
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}${waypoints?`&waypoints=${encodeURIComponent(waypoints)}`:""}`;
}

function mapHTML(points,label,lazy=true){
  const embed=googleEmbed(points);
  return `<div class="map-frame"><iframe title="${label}" ${lazy?`data-src="${embed}"`:`src="${embed}"`} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a class="map-open" href="${googleOpen(points)}" target="_blank" rel="noopener">在 Google Maps 打开 ↗</a></div>`;
}

function budgetHTML(route){
  const items=[["住宿",route.budget.hotel],["餐饮",route.budget.food],["当地交通",route.budget.transit],["景点门票",route.budget.tickets],["保险与机动",route.budget.misc]];
  return `<div class="budget-summary"><div class="budget-total"><span>两人当地费用 · 不含签证与国际机票</span><strong>${route.budget.local}</strong></div><div class="budget-total"><span>两人完整参考 · 加广州／深圳往返机票 ${route.budget.flight}</span><strong>${route.budget.total}</strong></div></div>
    <div class="budget-bars">${items.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join("")}</div>
    <p class="day-tip">价格口径：两人共用一间位置方便的中档双人房，正常餐厅为主；人民币区间为 2026 年 6 月规划估算。国庆机票、热门酒店和临时预订可能显著高于区间。</p>`;
}

function dayHTML(day,index){
  const [title,points,transport,morning,afternoon,evening,sleep,cost,tip]=day;
  return `<article class="day"><button class="day-toggle" aria-expanded="false"><span>DAY ${index+1}</span><strong>${title}</strong><small>${cost}</small></button>
    <div class="day-content"><div class="day-grid"><div class="day-plan"><div><b>上午</b>${morning}</div><div><b>下午</b>${afternoon}</div><div><b>晚上</b>${evening}</div><div><b>交通</b>${transport}</div><div><b>住宿</b>${sleep}</div><div><b>两人</b>${cost}</div><p class="day-tip">提醒：${tip}</p></div>${mapHTML(points,`${title}路线图`)}</div></div></article>`;
}

function gallerySkeleton(route){
  return route.photos.map((stop,stopIndex)=>`<div class="gallery-stop"><h4>${stop[0]}</h4><div class="photo-grid">${stop.slice(1).map((title,index)=>`<button class="photo-card" data-photo-title="${title}" data-stop-index="${stopIndex}" data-photo-index="${index}"><span class="photo-loading">正在加载 ${title} 的真实照片…</span></button>`).join("")}</div></div>`).join("");
}

async function loadWikipediaPhotos(route){
  const titles=route.photos.flatMap(stop=>stop.slice(1));
  const url=`https://en.wikipedia.org/w/api.php?action=query&redirects=1&prop=pageimages|info&piprop=thumbnail&pithumbsize=1200&inprop=url&format=json&origin=*&titles=${encodeURIComponent(titles.join("|"))}`;
  try{
    const response=await fetch(url);
    const data=await response.json();
    const pages=Object.values(data.query.pages);
    const lookup=new Map(pages.map(page=>[page.title.toLowerCase(),page]));
    [...(data.query.normalized||[]),...(data.query.redirects||[])].forEach(alias=>{
      const page=lookup.get(alias.to.toLowerCase());
      if(page)lookup.set(alias.from.toLowerCase(),page);
    });
    document.querySelectorAll(".photo-card[data-photo-title]").forEach(card=>{
      const title=card.dataset.photoTitle;
      const page=lookup.get(title.toLowerCase());
      if(page?.thumbnail?.source){
        card.innerHTML=`<img src="${page.thumbnail.source}" alt="${title}" loading="lazy"><span>${title} · Wikipedia/Wikimedia</span>`;
        card.dataset.full=page.thumbnail.source.replace(/\/\d+px-/,"/1600px-");
        card.dataset.caption=title;
        card.dataset.source=page.fullurl||"";
      }else{
        card.innerHTML=`<span>${title}<br>照片暂未加载，点击查看来源</span>`;
        card.dataset.source=`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(title)}`;
      }
    });
  }catch(error){
    document.querySelectorAll(".photo-loading").forEach(el=>el.textContent="照片需要联网加载，点击可查看来源");
  }
}

function activateLazyMaps(container){
  container.querySelectorAll("iframe[data-src]").forEach(frame=>{frame.src=frame.dataset.src;frame.removeAttribute("data-src");});
}

function openRoute(id,trigger){
  const route=routeBlueprints.find(item=>item.id===id);
  if(!route)return;
  lastFocused=trigger;
  const overview=route.stays;
  document.getElementById("drawerContent").innerHTML=`<header class="drawer-hero"><div class="route-kicker">${route.location}</div><h2>${route.name}</h2><p>${route.line}</p><div class="drawer-meta"><span class="pill">${route.countries}</span><span class="pill">8天7晚</span><span class="pill">${route.transport}</span><span class="pill">${route.badge}</span></div></header>
    <div class="drawer-body">
      <section class="detail-section"><div class="detail-title"><h3>路线在哪里</h3><span>可缩放的 Google Maps 真实路线图</span></div>${mapHTML(overview,`${route.name}总览地图`,false)}</section>
      <section class="detail-section"><div class="detail-title"><h3>两人预算</h3><span>广州／深圳往返 · 中档舒适</span></div>${budgetHTML(route)}</section>
      <section class="detail-section"><div class="detail-title"><h3>每天去哪里</h3><span>点击每天展开路线图、交通与费用</span></div><div class="day-list">${route.days.map(dayHTML).join("")}</div></section>
      <section class="detail-section"><div class="detail-title"><h3>照片决策板</h3><span>每个核心站点至少 3 张，并加入沿途风景</span></div><div class="gallery-stops">${gallerySkeleton(route)}</div><p class="day-tip">照片由 Wikipedia/Wikimedia 页面按需加载，版权与作者信息可点击对应来源查看。</p></section>
    </div>`;
  backdrop.classList.add("open");drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");document.body.classList.add("no-scroll");drawer.scrollTop=0;
  drawer.querySelectorAll(".day-toggle").forEach(toggle=>toggle.addEventListener("click",()=>{
    const day=toggle.closest(".day");day.classList.toggle("open");toggle.setAttribute("aria-expanded",String(day.classList.contains("open")));if(day.classList.contains("open"))activateLazyMaps(day);
  }));
  loadWikipediaPhotos(route);
  document.getElementById("drawerClose").focus();
}

function closeRoute(){
  backdrop.classList.remove("open");drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll");lastFocused?.focus();
}
document.getElementById("drawerClose").addEventListener("click",closeRoute);backdrop.addEventListener("click",closeRoute);

document.getElementById("drawerContent").addEventListener("click",event=>{
  const card=event.target.closest(".photo-card");if(!card)return;
  if(card.dataset.full){lightbox.querySelector("img").src=card.dataset.full;lightbox.querySelector("img").alt=card.dataset.caption;lightbox.querySelector("p").innerHTML=`${card.dataset.caption} · <a href="${card.dataset.source}" target="_blank" rel="noopener">查看 Wikipedia/Wikimedia 来源 ↗</a>`;lightbox.classList.add("open");}
  else if(card.dataset.source){window.open(card.dataset.source,"_blank","noopener");}
});
document.getElementById("lightboxClose").addEventListener("click",()=>lightbox.classList.remove("open"));
lightbox.addEventListener("click",event=>{if(event.target===lightbox)lightbox.classList.remove("open");});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){if(lightbox.classList.contains("open"))lightbox.classList.remove("open");else if(drawer.classList.contains("open"))closeRoute();}});
