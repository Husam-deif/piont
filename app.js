'use strict';
// Gift prices remain provisional unless priceConfirmed is true.
const products = [
  {id:'chess',name:'تحدّي المغناطيس',category:'games',categoryName:'ألعاب وتحديات',points:3200,priceConfirmed:true,image:'magnet-cover.webp',images:['magnet-cover.webp','magnet-2.webp','magnet-1.webp','magnet-3.webp'],background:'#edf2f0',source:'https://monococojugueterias.com/products/juego-de-mesa-magnetico-20-piezas'},
  {id:'lcd-small',name:'لوح كتابة LCD صغير',category:'stationery',categoryName:'قرطاسية',points:800,priceConfirmed:true,image:'lcd-board-1.webp',images:['lcd-board-1.webp','lcd-board-2.webp'],background:'#edf1f5',source:'assets/lcd-board-1.webp'},
  {id:'lcd-large',name:'لوح كتابة LCD كبير',category:'stationery',categoryName:'قرطاسية',points:2000,priceConfirmed:true,image:'lcd-board-1.webp',images:['lcd-board-1.webp','lcd-board-2.webp'],background:'#edf1f5',source:'assets/lcd-board-1.webp'},
  {id:'connect-four',name:'لعبة كونكت ٤',category:'games',categoryName:'ألعاب وتحديات',points:1000,priceConfirmed:true,image:'connect-four-1.webp',images:['connect-four-1.webp','connect-four-2.webp'],background:'#edf0f5',source:'assets/connect-four-1.webp'},
  {id:'handbag',name:'شنطة يد سوداء',category:'accessories',categoryName:'إكسسوارات',points:1000,priceConfirmed:true,image:'handbag-1.webp',images:['handbag-1.webp','handbag-2.webp','handbag-3.webp'],background:'#f0eee8',source:'assets/handbag-1.webp'},
  {id:'rubik',name:'مكعب روبيك',category:'games',categoryName:'ألعاب وتحديات',points:500,priceConfirmed:true,image:'rubik-1.webp',images:['rubik-1.webp','rubik-2.webp','rubik-3.webp'],background:'#f0f2e9',source:'assets/rubik-1.webp'},
  {id:'wallet',name:'محفظة',category:'accessories',categoryName:'إكسسوارات',points:1200,priceConfirmed:true,image:'wallet-1.webp',images:['wallet-1.webp','wallet-2.webp'],background:'#f4eee5',source:'assets/wallet-1.webp'},
  {id:'football',name:'كرة قدم',category:'games',categoryName:'ألعاب وتحديات',points:3500,priceConfirmed:true,image:'football-1.webp',images:['football-1.webp','football-2.webp','football-3.webp'],background:'#f0f3ee',source:'assets/football-1.webp'},
  {id:'foam-blaster',name:'لعبة قاذف الكرات الإسفنجية',category:'games',categoryName:'ألعاب وتحديات',points:2500,priceConfirmed:true,image:'foam-blaster-1.webp',images:['foam-blaster-1.webp', 'foam-blaster-2.webp', 'foam-blaster-3.webp'],background:'#edf4f0',source:'assets/foam-blaster-1.webp'},
  {id:'moon-small',name:'قمر مضيء صغير',category:'accessories',categoryName:'إكسسوارات',points:1000,priceConfirmed:true,image:'moon-1.webp',images:['moon-1.webp','moon-2.webp','moon-3.webp'],background:'#f5eee1',source:'assets/moon-1.webp'},
  {id:'moon-medium',name:'قمر مضيء وسط',category:'accessories',categoryName:'إكسسوارات',points:1600,priceConfirmed:true,image:'moon-1.webp',images:['moon-1.webp','moon-2.webp','moon-3.webp'],background:'#f5eee1',source:'assets/moon-1.webp'},
  {id:'moon-large',name:'قمر مضيء كبير',category:'accessories',categoryName:'إكسسوارات',points:2500,priceConfirmed:true,image:'moon-1.webp',images:['moon-1.webp','moon-2.webp','moon-3.webp'],background:'#f5eee1',source:'assets/moon-1.webp'},
  {id:'lamborghini',name:'سيارة لامبورغيني بالريموت',category:'games',categoryName:'ألعاب وتحديات',points:5000,priceConfirmed:true,image:'lamborghini-1.webp',images:['lamborghini-1.webp','lamborghini-2.webp','lamborghini-3.webp','lamborghini-4.webp','lamborghini-5.webp'],background:'#f4eee6',source:'assets/lamborghini-1.webp'},
  {id:'rc-car',name:'سيارة بالريموت',category:'games',categoryName:'ألعاب وتحديات',points:5000,priceConfirmed:true,image:'rc-car-1.webp',images:['rc-car-1.webp','rc-car-2.webp','rc-car-3.webp','rc-car-4.webp'],background:'#edf4ef',source:'assets/rc-car-1.webp'},
  {id:'tower-small',name:'لعبة التوازن الصغيرة',category:'games',categoryName:'ألعاب وتحديات',points:1000,priceConfirmed:true,image:'tower-small-1.webp',images:['tower-small-1.webp','tower-small-2.webp'],background:'#f3eee4',source:'assets/tower-small-1.webp'},
  {id:'tower',name:'لعبة التوازن الكبيرة',category:'games',categoryName:'ألعاب وتحديات',points:2200,priceConfirmed:true,image:'tower-large-1.webp',images:['tower-large-1.webp','tower-large-2.webp'],background:'#f3eee4',source:'assets/tower-large-1.webp'},
  {id:'perfume',name:'عطر',category:'accessories',categoryName:'إكسسوارات',points:8000,priceConfirmed:true,image:'perfume-1.webp',images:['perfume-1.webp','perfume-2.webp'],background:'#edf0f4',source:'assets/perfume-1.webp'},
  {id:'watch',name:'ساعة يد فضيّة',category:'accessories',categoryName:'إكسسوارات',points:5000,priceConfirmed:true,image:'watch-1.webp',images:['watch-1.webp','watch-2.webp','watch-3.webp'],background:'#f0f0e9',source:'assets/watch-1.webp'},
  {id:'stationery',name:'طقم قرطاسية الفضاء',category:'stationery',categoryName:'قرطاسية',points:1000,priceConfirmed:true,image:'stationery-clean.webp',images:['stationery-clean.webp','stationery-extra.webp'],background:'#eeeff4',source:'https://www.flipkart.com/poohan-astronaut-space-stationery-kit-pencil/p/itm32ae6e3f16233'},
  {id:'maze',name:'تحدّي السلك الكهربائي',category:'games',categoryName:'ألعاب وتحديات',points:3200,priceConfirmed:true,image:'maze-new.webp',images:['maze-new.webp','maze.webp'],background:'#eaf2ed',source:'https://www.inspireuplift.com/kids-electric-touch-maze-game-safe-shock-stem/iu/21678558'},
  {id:'bag',name:'حقيبة كتف سوداء',category:'accessories',categoryName:'إكسسوارات',points:1000,priceConfirmed:true,image:'bag.webp',images:['bag.webp','bag-extra-1.webp','bag-extra-2.webp'],background:'#f0eee8',source:'https://rozetka.com.ua/452213183/p452213183/'},
  {id:'water',name:'لعبة الحلقات المائيّة',category:'games',categoryName:'ألعاب وتحديات',points:500,priceConfirmed:true,image:'water-game-new.webp',images:['water-game-new.webp','water-game.webp'],background:'#eaf1f1',source:'https://shopee.com.br/01-Jogo-de-argolas-Aquaplay-Hidrogame-antigo-cl%C3%A1ssico-de-%C3%A1gua-Escolher-i.976041602.22393738045'},
  {id:'umbrella',name:'مظلّة قابلة للطيّ',category:'accessories',categoryName:'إكسسوارات',points:3500,priceConfirmed:true,image:'umbrella-1.webp',images:['umbrella-1.webp','umbrella-2.webp','umbrella-3.webp','umbrella-4.webp'],background:'#eef0e7',source:'assets/umbrella-1.webp'}
];
const format = n => new Intl.NumberFormat('ar-EG').format(n);
const normalize = value => value.normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase().trim();
const icons = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const assetImage = (name,variant='full') => `assets/${variant==='full'?'':variant+'/'}${name}`;
const $ = selector => document.querySelector(selector);
let state = {category:'all',search:'',sort:'featured'};
const cardImageIndexes = {};
let activeGallery = null;
let swipeStart = null;
const dialog = $('#product-dialog');

function render() {
  $('#gift-total').textContent=format(products.length);
  let list = products.filter(p => (state.category === 'all' || state.category === p.category) && normalize(`${p.name} ${p.categoryName}`).includes(normalize(state.search)));
  if(state.sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  if(state.sort === 'points-low') list.sort((a,b)=>a.points-b.points);
  if(state.sort === 'points-high') list.sort((a,b)=>b.points-a.points);
  $('#product-grid').innerHTML = list.map(p => `<article class="product-card" data-id="${p.id}" style="--card-bg:${p.background}">
    <div class="product-photo"><button class="photo-button" data-product="${p.id}" aria-label="تفاصيل ${p.name}"><img src="${assetImage(p.images?.[cardImageIndexes[p.id]||0]||p.image,'cards')}" alt="${p.name}، صورة توضيحية" loading="lazy" decoding="async" width="300" height="240"></button>${p.images?.length>1?`<button type="button" class="card-gallery-arrow card-gallery-previous" data-card-gallery="${p.id}" data-step="-1" aria-label="الصورة السابقة لـ${p.name}">${icons('arrow')}</button><button type="button" class="card-gallery-arrow card-gallery-next" data-card-gallery="${p.id}" data-step="1" aria-label="الصورة التالية لـ${p.name}">${icons('arrow')}</button>`:''}<span class="photo-caption">صورة توضيحية</span></div>
    <div class="product-info"><h3 class="product-title"><button data-product="${p.id}">${p.name}</button></h3><div class="product-bottom"><span class="points-price">${format(p.points)} <small>نقطة</small></span><button class="product-details" data-product="${p.id}" aria-label="تفاصيل ${p.name}">${icons('arrow')}</button></div></div>
  </article>`).join('');
  $('#results-count').textContent = list.length ? `${format(list.length)} ${list.length===1?'هدية':list.length===2?'هديّتان':list.length<=10?'هدايا':'هدية'} بانتظارك` : 'لا توجد نتائج';
  $('#empty-state').hidden = list.length > 0;
  $('#reset-filters').hidden = state.category==='all' && !state.search && state.sort==='featured';
  document.querySelectorAll('[data-category]').forEach(button=>{const active=button.dataset.category===state.category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function openProduct(id) {
  const p=products.find(x=>x.id===id);if(!p)return;
  const images=p.images?.length?p.images:[p.image];
  activeGallery={name:p.name,images,index:0};
  const multiple=images.length>1;
  $('#dialog-body').innerHTML=`<div class="dialog-layout" style="--card-bg:${p.background}">
    <div class="product-gallery" role="region" aria-label="صور ${p.name}">
      <div class="gallery-stage">
        <img id="gallery-image" src="assets/${images[0]}" alt="${p.name}، الصورة ${format(1)} من ${format(images.length)}" width="360" height="360">
        ${multiple?`<button type="button" class="gallery-nav gallery-previous" data-gallery-step="-1" aria-label="الصورة السابقة">${icons('arrow')}</button><button type="button" class="gallery-nav gallery-next" data-gallery-step="1" aria-label="الصورة التالية">${icons('arrow')}</button>`:''}
      </div>
      ${multiple?`<div class="gallery-status"><span id="gallery-count" role="status" aria-live="polite">الصورة ${format(1)} من ${format(images.length)}</span><span class="swipe-hint">اسحب للتنقّل</span></div><div class="gallery-thumbnails" role="group" aria-label="اختيار صورة الهدية">${images.map((src,index)=>`<button type="button" class="gallery-thumbnail" data-gallery-index="${index}" aria-pressed="${index===0}" aria-label="عرض الصورة ${format(index+1)}"><img src="${assetImage(src,'thumbs')}" alt="" width="68" height="68" decoding="async"></button>`).join('')}</div>`:''}
    </div>
    <div class="dialog-info"><h2 id="dialog-title">${p.name}</h2><div class="points-price">${format(p.points)} <small>نقطة</small></div><p class="redemption-note">الاستبدال لدى إدارة المركز بعد التأكّد من رصيد نقاطك.</p><p class="image-note">قد تختلف تفاصيل الصورة عن الهدية المتوفرة.${p.priceConfirmed?'':' السعر مبدئي لحين اعتماده من المركز.'}</p></div>
  </div>`;
  dialog.showModal();document.body.classList.add('modal-open');
}
function showGalleryImage(index) {
  if(!activeGallery)return;
  const count=activeGallery.images.length;
  activeGallery.index=(index%count+count)%count;
  const current=activeGallery.index,image=$('#gallery-image');
  image.src=`assets/${activeGallery.images[current]}`;
  image.alt=`${activeGallery.name}، الصورة ${format(current+1)} من ${format(count)}`;
  const counter=$('#gallery-count');if(counter)counter.textContent=`الصورة ${format(current+1)} من ${format(count)}`;
  dialog.querySelectorAll('[data-gallery-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.galleryIndex)===current)));
}
function resetFilters() {state={category:'all',search:'',sort:'featured'};$('#search').value='';$('#sort').value='featured';render();}
document.addEventListener('click',event=>{
  const cardArrow=event.target.closest('[data-card-gallery]');
  if(cardArrow){
    const p=products.find(item=>item.id===cardArrow.dataset.cardGallery);
    const index=((cardImageIndexes[p.id]||0)+Number(cardArrow.dataset.step)+p.images.length)%p.images.length;
    cardImageIndexes[p.id]=index;
    const img=cardArrow.closest('.product-card').querySelector('.photo-button img');
    img.src=assetImage(p.images[index],'cards');
    img.alt=`${p.name}، الصورة ${format(index+1)} من ${format(p.images.length)}`;
    return;
  }

  const thumbnail=event.target.closest('[data-gallery-index]');if(thumbnail){showGalleryImage(Number(thumbnail.dataset.galleryIndex));return;}
  const galleryArrow=event.target.closest('[data-gallery-step]');if(galleryArrow&&activeGallery){showGalleryImage(activeGallery.index+Number(galleryArrow.dataset.galleryStep));return;}
  const product=event.target.closest('[data-product]');if(product){openProduct(product.dataset.product);return;}
  const category=event.target.closest('[data-category]');if(category){state.category=category.dataset.category;render();}
});
$('#search').addEventListener('input',event=>{state.search=event.target.value;render();});
$('#sort').addEventListener('change',event=>{state.sort=event.target.value;render();});
$('#reset-filters').addEventListener('click',resetFilters);
$('#empty-reset').addEventListener('click',resetFilters);
document.querySelectorAll('a[href="#gifts"]').forEach(link=>link.addEventListener('click',resetFilters));
$('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{activeGallery=null;swipeStart=null;});
dialog.addEventListener('keydown',event=>{
  if(!activeGallery||activeGallery.images.length<2)return;
  if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
    event.preventDefault();showGalleryImage(activeGallery.index+(event.key==='ArrowLeft'?1:-1));
  }
});
dialog.addEventListener('pointerdown',event=>{
  swipeStart=null;
  if(event.pointerType==='mouse'||!event.target.closest('.gallery-stage')||event.target.closest('button')||!activeGallery||activeGallery.images.length<2)return;
  swipeStart={x:event.clientX,y:event.clientY};
});
dialog.addEventListener('pointerup',event=>{
  if(!swipeStart||!activeGallery)return;
  const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y;swipeStart=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)showGalleryImage(activeGallery.index+(dx<0?1:-1));
});
dialog.addEventListener('pointercancel',()=>{swipeStart=null;});
[dialog].forEach(modal=>{
  modal.addEventListener('click',event=>{if(event.target===modal){const rect=modal.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)modal.close();}});
  modal.addEventListener('close',()=>{if(!dialog.open)document.body.classList.remove('modal-open');});
});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!dialog.open&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){event.preventDefault();$('#search').focus();$('#gifts').scrollIntoView();}});
render();
