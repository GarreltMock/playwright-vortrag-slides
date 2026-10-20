// Shared deck engine. Slides with data-hidden are skipped (?hidden or H shows them). data-msg = Kernbotschaft (?msg or K shows it).
// Keys: →/Space/PageDown next, ←/PageUp prev, Home/End, F fullscreen, O overview, H hidden slides on/off, K Kernbotschaften on/off.
(function(){
  const body=document.body,has=c=>body.classList.contains(c),params=new URLSearchParams(location.search);
  // Ausgeblendete Folien (data-hidden) werden übersprungen, außer mit ?hidden bzw. nach H
  if(params.has('hidden'))body.classList.add('show-hidden');
  if(params.has('msg'))body.classList.add('show-msg');
  const all=[...document.querySelectorAll('.slide')];
  const visible=()=>has('show-hidden')?all:all.filter(s=>!s.hasAttribute('data-hidden'));
  let slides=visible();
  let i=Math.max(0,Math.min(slides.length-1,(parseInt(location.hash.slice(1))||1)-1));
  const el=(cls,parent=body,tag='div')=>{const e=document.createElement(tag);e.className=cls;parent.appendChild(e);return e;};
  const ui=el('deck-ui'),bar=el('deck-progress'),msg=el('deck-msg');
  const tools=el('deck-tools'),hb=el('deck-toggle',tools,'button'),mb=el('deck-toggle',tools,'button');
  hb.onclick=()=>toggleHidden();mb.onclick=()=>toggleMsg();
  function label(){
    const n=all.filter(s=>s.hasAttribute('data-hidden')).length;
    hb.textContent=`Ausgeblendete (${n}): ${has('show-hidden')?'sichtbar':'versteckt'} · H`;hb.classList.toggle('on',has('show-hidden'));
    mb.textContent=`Kernbotschaften: ${has('show-msg')?'an':'aus'} · K`;mb.classList.toggle('on',has('show-msg'));
  }
  function setParam(k,on){const u=new URL(location.href);on?u.searchParams.set(k,''):u.searchParams.delete(k);u.search=u.search.replace(/=(?=&|$)/g,'');history.replaceState(null,'',u);}
  function fit(){
    if(has('overview')){
      const w=(window.innerWidth-18*5)/4, s=w/1920;
      all.forEach(sl=>{sl.style.transform=`scale(${s})`;sl.style.top='';const p=sl.parentElement;if(p.classList.contains('slide-wrap')){p.style.width=w+'px';p.style.height=(1080*s)+'px';}});
      return;
    }
    // Mit Kernbotschaften: Folie rückt nach oben, darunter bleibt ein Streifen für den Text
    const band=has('show-msg')?msg.offsetHeight:0,h=window.innerHeight-band;
    const s=Math.min(window.innerWidth/1920,h/1080);
    slides.forEach(sl=>{sl.style.transform=`translate(-50%,-50%) scale(${s})`;sl.style.top=band?h/2+'px':'';});
  }
  function counter(){ui.textContent=`${i+1} / ${slides.length}`;bar.style.width=((i+1)/slides.length*100)+'%';}
  function show(n){
    i=Math.max(0,Math.min(slides.length-1,n));
    all.forEach(s=>s.classList.toggle('active',s===slides[i]));
    counter();msg.textContent=slides[i].dataset.msg||'';
    history.replaceState(null,'',location.search+'#'+(i+1));
    document.dispatchEvent(new CustomEvent('slidechange',{detail:{index:i,slide:slides[i]}}));
  }
  function toggleOverview(){
    const on=!has('overview');
    body.classList.toggle('overview',on);
    all.forEach(sl=>{
      if(on){
        const c=document.createElement('div');c.className='slide-cell';sl.parentNode.insertBefore(c,sl);
        el('slide-wrap',c).appendChild(sl);el('slide-msg',c).textContent=sl.dataset.msg||'';
        sl.onclick=()=>{toggleOverview();show(slides.indexOf(sl));};
      }else{const c=sl.closest('.slide-cell');if(c){c.parentNode.insertBefore(sl,c);c.remove();}sl.onclick=null;sl.style.transform='';}
    });
    fit(); if(!on) show(i);
  }
  function toggleHidden(){
    const cur=slides[i],on=!has('show-hidden');
    body.classList.toggle('show-hidden',on);
    slides=visible();
    // aktuelle Folie behalten; war sie ausgeblendet, zur nächsten sichtbaren springen
    let k=all.indexOf(cur);while(k<all.length&&!slides.includes(all[k]))k++;
    i=k<all.length?slides.indexOf(all[k]):slides.length-1;
    setParam('hidden',on);window.__deck.count=slides.length;label();
    document.dispatchEvent(new CustomEvent('hiddenchange',{detail:{on}}));
    has('overview')?counter():show(i);
  }
  function toggleMsg(){body.classList.toggle('show-msg');setParam('msg',has('show-msg'));label();fit();}
  document.addEventListener('keydown',e=>{
    if(e.key==='o'||e.key==='O'){toggleOverview();return;}
    if(e.key==='h'||e.key==='H'){toggleHidden();return;}
    if(e.key==='k'||e.key==='K'){toggleMsg();return;}
    if(has('overview'))return;
    if(['ArrowRight',' ','PageDown','ArrowDown'].includes(e.key)){e.preventDefault();show(i+1);}
    else if(['ArrowLeft','PageUp','ArrowUp'].includes(e.key)){e.preventDefault();show(i-1);}
    else if(e.key==='Home')show(0); else if(e.key==='End')show(slides.length-1);
    else if(e.key==='f'||e.key==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}
  });
  document.addEventListener('click',e=>{if(has('overview'))return;if(e.target.closest('a,button'))return;if(e.clientX>window.innerWidth*0.25)show(i+1);else show(i-1);});
  window.addEventListener('resize',fit);
  window.__deck={show,count:slides.length};
  label();show(i);fit();
})();
