(() => {
  'use strict';
  const photos = [
    {id:'garden',file:'life-garden.jpg',title:'花园里的片刻',category:'日常',width:1279,height:1706,position:'50% 48%',caption:'绿意、阳光，和一个日常的片刻。'},
    {id:'mountains',file:'life-mountains.jpg',title:'远山与蓝天',category:'旅途',width:1706,height:1279,position:'50% 55%',caption:'把远处的山，和眼前的风景，一起留在照片里。'},
    {id:'lake',file:'life-lake.jpg',title:'湖边，慢一点',category:'旅途',width:1706,height:1279,position:'60% 52%',caption:'蓝天映在水面，留一个安静的片刻。'},
    {id:'city',file:'life-city.jpg',title:'城市亮起灯的时候',category:'日常',width:810,height:1080,position:'50% 40%',caption:'一张城市夜色里的留影。'},
    {id:'campus',file:'life-campus.jpg',title:'校园留影',category:'校园',width:1440,height:960,position:'45% 42%',caption:'记录校园里的一个瞬间。'},
    {id:'forest',file:'life-forest.jpg',title:'走进绿意',category:'日常',width:810,height:1080,position:'65% 45%',caption:'林间小路上的随手记录。'},
    {id:'training',file:'life-training.jpg',title:'运动时刻',category:'运动',width:960,height:1282,position:'50% 50%',caption:'学习和做项目之外，也记录运动中的自己。'},
    {id:'workout',file:'life-workout.jpg',title:'运动日常',category:'运动',width:960,height:1282,position:'50% 50%',caption:'生活相册中的另一个运动片段。'}
  ];
  const $ = selector => document.querySelector(selector);
  const image = p => `<img src="./assets/${p.file}" alt="${p.title}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async" style="object-position:${p.position}">`;
  const lake = photos.find(p => p.id === 'lake');
  const city = photos.find(p => p.id === 'city');
  $('#contact').insertAdjacentHTML('beforebegin', `
    <section id="life" class="section life-section" aria-labelledby="life-heading">
      <div class="section-top">
        <div><span class="eyebrow">06 / MOMENTS IN BETWEEN</span><h2 id="life-heading">作品之外，生活之中。</h2></div>
        <p>一些走过的地方，一些日常的片刻。<br>也让你认识，屏幕另一边的我。</p>
      </div>
      <div class="life-editorial">
        <figure class="life-landscape">
          <button class="life-photo" data-life-photo="lake" aria-label="放大查看：湖边，慢一点">${image(lake)}<span class="photo-expand" aria-hidden="true">↗</span></button>
          <figcaption><span><small>01 / ON THE ROAD</small><strong>湖边，慢一点。</strong></span><span>让目光走远一点。</span></figcaption>
        </figure>
        <figure class="life-night">
          <span class="life-side-note">A FEW MOMENTS, A LITTLE MORE OF ME.</span>
          <button class="life-photo" data-life-photo="city" aria-label="放大查看：城市亮起灯的时候">${image(city)}<span class="photo-expand" aria-hidden="true">↗</span></button>
          <figcaption><small>02 / AFTER HOURS</small><strong>城市亮起灯的时候。</strong></figcaption>
        </figure>
      </div>
      <details class="life-album">
        <summary><span class="album-label"><span class="album-mark" aria-hidden="true">▧</span><span class="album-action">展开生活相册</span></span><span class="album-count">8 张照片 <span class="album-toggle" aria-hidden="true">＋</span></span></summary>
        <div class="life-album-grid">${photos.map((p,i) => `
          <button class="life-thumb" data-life-photo="${p.id}" aria-label="放大查看：${p.title}">
            <span class="life-thumb-image">${image(p)}</span>
            <span class="life-thumb-title"><span>${p.title}</span><small>${String(i+1).padStart(2,'0')} / ${p.category}</small></span>
          </button>`).join('')}
        </div>
      </details>
    </section>`);
  document.body.insertAdjacentHTML('beforeend', `
    <dialog id="life-dialog" aria-labelledby="life-dialog-title">
      <div class="dialog-heading"><div><span class="eyebrow">LIFE IN FRAMES / 生活切片</span><h2 id="life-dialog-title"></h2></div><button class="close-dialog" id="close-life" aria-label="关闭生活相册" autofocus>×</button></div>
      <div class="life-stage"><img id="life-dialog-image" alt=""></div>
      <p class="life-photo-caption" id="life-dialog-caption"></p>
      <div class="life-dialog-controls"><button id="life-prev" aria-label="上一张生活照">← 上一张</button><span id="life-counter" aria-live="polite"></span><button id="life-next" aria-label="下一张生活照">下一张 →</button></div>
    </dialog>`);
  const modal = $('#life-dialog');
  const pic = $('#life-dialog-image');
  let current = 0;
  let trigger;
  function show(index, from) {
    current = (index + photos.length) % photos.length;
    if (from) trigger = from;
    const p = photos[current];
    $('#life-dialog-title').textContent = p.title;
    $('#life-dialog-caption').textContent = p.caption;
    $('#life-counter').textContent = `${String(current+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;
    pic.alt = p.title;
    pic.src = './assets/' + p.file;
    if (!modal.open) modal.showModal();
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }
  document.addEventListener('click', e => {
    const button = e.target.closest('[data-life-photo]');
    if (!button) return;
    const index = photos.findIndex(p => p.id === button.dataset.lifePhoto);
    if (index !== -1) show(index, button);
  });
  $('#close-life').addEventListener('click', () => modal.close());
  $('#life-prev').addEventListener('click', () => show(current - 1));
  $('#life-next').addEventListener('click', () => show(current + 1));
  modal.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); }
    if (e.key === 'Home') { e.preventDefault(); show(0); }
    if (e.key === 'End') { e.preventDefault(); show(photos.length - 1); }
  });
  modal.addEventListener('click', e => {
    if (e.target !== modal) return;
    const r = modal.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) modal.close();
  });
  modal.addEventListener('close', () => {
    document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
    if (trigger?.isConnected) trigger.focus({preventScroll:true});
  });
  $('.life-album').addEventListener('toggle', e => {
    $('.album-action').textContent = e.target.open ? '收起生活相册' : '展开生活相册';
    $('.album-toggle').textContent = e.target.open ? '−' : '＋';
  });
})();