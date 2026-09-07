(() => {
'use strict';
const $=s=>document.querySelector(s);const projects=window.PORTFOLIO_PROJECTS;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let currentProject=0;let currentFilter='all';let lastTrigger=null;
const dialog=$('#case-dialog');
function projectVisual(p){
 const inner=p.image?`<img class="project-shot" src="${p.image}" alt="${escape(p.imageAlt)}" loading="lazy" width="1280" height="790">`:'<div class="preview-fallback"><h4>让变化，有迹可循。</h4><p>公开行情 → 多周期指标 → 规则检查 → 可视化解释</p><div class="mock-bars" aria-hidden="true"><i style="--h:26%"></i><i style="--h:43%"></i><i style="--h:37%"></i><i style="--h:64%"></i><i style="--h:49%"></i><i style="--h:78%"></i><i style="--h:67%"></i><i style="--h:93%"></i><i style="--h:82%"></i></div><p style="margin-top:10px;font-size:8px">功能结构示意，非行情数据或收益表现</p></div>';
 return `<div class="project-visual ${p.id==='quant'?'ink':''}"><div class="visual-label"><span>${p.label}</span><span>↗</span></div><div class="window"><div class="window-bar"><i></i><i></i><i></i><span>${p.imageCaption}</span></div>${inner}</div></div>`;
}
function render(){
 $('#project-grid').innerHTML=projects.filter(p=>currentFilter==='all'||p.category===currentFilter).map(p=>`<article class="project-card ${p.featured?'featured':''}" id="project-${p.id}">${projectVisual(p)}<div class="project-info"><div class="project-number"><span>PROJECT / ${p.number}</span><span class="badge">${p.status}</span></div><h3>${p.name}</h3><p class="project-description">${p.description}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><button data-case="${p.id}" aria-label="查看${p.name}项目解析">项目解析 <span>↗</span></button>${p.live?`<a href="${p.live}" target="_blank" rel="noopener noreferrer" aria-label="打开${p.name}在线作品">打开作品 ↗</a>`:`<a href="${p.source}" target="_blank" rel="noopener noreferrer" aria-label="查看${p.name}源码">查看源码 ↗</a>`}</div></div></article>`).join('');
}
function openCase(id,trigger){
 const index=projects.findIndex(p=>p.id===id);if(index<0)return;currentProject=index;const p=projects[index];if(trigger)lastTrigger=trigger;
 $('#case-index').textContent=`PROJECT ${p.number} / CASE STUDY`;
 $('#case-title').textContent=p.name;$('#case-intro').textContent=p.description;
 $('#case-links').innerHTML=`${p.live?`<a href="${p.live}" target="_blank" rel="noopener noreferrer">打开实际网站 ↗</a>`:''}<a href="${p.source}" target="_blank" rel="noopener noreferrer">查看项目源码 ↗</a>`;
 $('#case-body').innerHTML=`<div class="case-summary">${p.summary.map((s,i)=>`<div><span>${['项目方式','用途','当前状态'][i]}</span><p>${escape(s)}</p></div>`).join('')}</div><section class="case-section"><h3>这个项目解决什么问题？</h3><p>${escape(p.problem)}</p></section><section class="case-section"><h3>打开之后，可以做什么？</h3><ul>${p.features.map(f=>`<li>${escape(f)}</li>`).join('')}</ul></section><section class="case-section"><h3>它是怎么运作的？</h3><div class="case-flow">${p.flow.map(([h,d],i)=>`<div><b>0${i+1}</b>${escape(h)}<small>${escape(d)}</small></div>`).join('')}</div><p>${escape(p.implementation)}</p></section><section class="case-section"><h3>我的实践与参与</h3><p>${escape(p.role)}</p></section><section class="case-section"><h3>我会怎样介绍这个作品</h3><div class="case-callout">${escape(p.talk)}</div></section><section class="case-section"><h3>做到了什么，也有哪些边界</h3><div class="boundary">${escape(p.boundary)}</div><p class="case-evidence">${escape(p.evidence)} <a href="${p.evidenceLink}" target="_blank" rel="noopener noreferrer">查看依据 ↗</a></p></section>`;
 if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';
}
$('#project-grid').addEventListener('click',e=>{const b=e.target.closest('[data-case]');if(b)openCase(b.dataset.case,b)});
$('.work-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;currentFilter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});render()});
$('#close-case').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{document.body.style.overflow='';if(lastTrigger?.isConnected)lastTrigger.focus()});
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
$('#next-case').onclick=()=>openCase(projects[(currentProject+1)%projects.length].id);
const tabNames=['practice','education','skills'];function selectTab(name,focus=false){for(const n of tabNames){const active=n===name;$('#tab-'+n).setAttribute('aria-selected',String(active));$('#tab-'+n).tabIndex=active?0:-1;$('#panel-'+n).hidden=!active}if(focus)$('#tab-'+name).focus()}
for(const name of tabNames){$('#tab-'+name).onclick=()=>selectTab(name);$('#tab-'+name).addEventListener('keydown',e=>{let i=tabNames.indexOf(name);if(e.key==='ArrowRight')i=(i+1)%3;else if(e.key==='ArrowLeft')i=(i+2)%3;else if(e.key==='Home')i=0;else if(e.key==='End')i=2;else return;e.preventDefault();selectTab(tabNames[i],true)})}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('show'),3200)}
$('#copy-email').onclick=async()=>{try{await navigator.clipboard.writeText('3119268060@qq.com');toast('邮箱已复制，期待与你交流。')}catch{toast('请手动复制邮箱：3119268060@qq.com')}};
$('#print-portfolio').onclick=()=>window.print();
render();
})();
