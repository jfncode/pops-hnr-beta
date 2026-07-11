/* Telas do Portal do Colaborador: hub, bibliotecas (regimentos/protocolos) e cursos.
   Usa os globais do index.html (session, screen, render, esc, …) — resolvidos em runtime. */

const HUB_ICONS = {
  pops: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>',
  regimentos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  protocolos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>',
  cursos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>'
};

function portalCols(){
  return [
    { kind:'pop',       items: db.pops },
    { kind:'regimento', items: window.REGIMENTOS || [] },
    { kind:'protocolo', items: window.PROTOCOLOS || [] },
    { kind:'curso',     items: window.CURSOS || [] },
  ];
}
function docById(id){ return PortalCore.docById(portalCols(), id); }

/* ---------- navegação ---------- */
function goHub(){ clearQuizTimer(); consulta=false; activePop=null; screen='hub'; render(); window.scrollTo(0,0); }
function goPops(){ screen='list'; render(); window.scrollTo(0,0); }
function goBiblioteca(kind){ bibKind=kind; bibQuery=''; screen='biblioteca'; render(); window.scrollTo(0,0); }
function goCursos(){ screen='cursos'; render(); window.scrollTo(0,0); }

/* ---------- HUB ---------- */
function hubProgressoPops(){
  const col={setor:session.setor, sorteio};
  if(!etapaDone(1)){
    const now=aprovadosEtapa(1), meta=metaEtapa(col,1);
    if(!meta) return {label:'Sua trilha de procedimentos', pct:0};
    return {label:`Etapa 1 · ${Math.min(now,meta)}/${meta}`, pct:Math.round(Math.min(now,meta)/meta*100)};
  }
  if(temEtapa2() && !etapaDone(2)){
    const now=aprovadosEtapa(2), meta=metaEtapa(col,2);
    return {label:`Etapa 2 · ${Math.min(now,meta)}/${meta}`, pct:meta?Math.round(Math.min(now,meta)/meta*100):0};
  }
  return {label:'Trilha concluída', pct:100};
}
const SVG_SOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

function hubHeroHTML(pr){
  const done=pr.pct>=100;
  const cta=done?'Rever meus procedimentos':(pr.pct>0?'Continuar minha trilha':'Começar minha trilha');
  return `<button class="hub-hero" onclick="goPops()">
    <div class="hero-main">
      <span class="hero-badge">${done?'Trilha concluída':'Sua trilha ativa'}</span>
      <div class="hero-head"><span class="hero-ic">${HUB_ICONS.pops}</span>
        <div><h3>POPs · Procedimentos Operacionais Padrão</h3>
          <p>Leia os procedimentos do seu setor, faça as avaliações e emita seus certificados.</p></div></div>
      <span class="hero-cta">${cta} →</span>
    </div>
    <div class="hero-prog">
      <div class="hero-ring" style="--p:${pr.pct}"><span><b>${pr.pct}%</b></span></div>
      <span class="hero-step">${pr.label}</span>
    </div>
  </button>`;
}
function areaCardHTML(o, idx){
  const foot = o.soon
    ? `<span class="ac-soon">${SVG_SOON}${o.foot}</span>`
    : `<span>${o.foot}</span><span class="ac-cta">Abrir →</span>`;
  return `<button class="areacard ${o.cls}${o.soon?' is-soon':''}" style="animation-delay:${(idx+2)*70}ms" onclick="${o.onclick}">
    <span class="ac-ic ${o.ic}">${o.icon}</span>
    <h4>${o.title}</h4><p>${o.desc}</p>
    <span class="ac-foot">${foot}</span>
  </button>`;
}
function renderHub(){
  const primeiro=esc((session.nome||'').trim().split(/\s+/)[0]||'colaborador');
  const pr=hubProgressoPops();
  const nReg=(window.REGIMENTOS||[]).length, nProt=(window.PROTOCOLOS||[]).length, nCur=(window.CURSOS||[]).length;
  const areas=[
    { onclick:"goBiblioteca('regimentos')", cls:'area-gold', ic:'hc-gold', icon:HUB_ICONS.regimentos, title:'Regimentos',
      desc:'Regimentos e normas institucionais do hospital, para leitura e consulta.',
      soon:!nReg, foot: nReg? `${nReg} documento${nReg>1?'s':''}` : 'Em preparação' },
    { onclick:"goBiblioteca('protocolos')", cls:'area-green', ic:'hc-green', icon:HUB_ICONS.protocolos, title:'Protocolos',
      desc:'Protocolos assistenciais e manuais técnicos, para leitura e consulta.',
      soon:!nProt, foot: nProt? `${nProt} documento${nProt>1?'s':''}` : 'Em preparação' },
    { onclick:'goCursos()', cls:'area-red', ic:'hc-red', icon:HUB_ICONS.cursos, title:'Cursos',
      desc:'Trilhas de capacitação com avaliação e certificado.',
      soon:!nCur, foot: nCur? `${nCur} curso${nCur>1?'s':''}` : 'Em breve' },
  ];
  const h=new Date().getHours();
  const saud=h<12?'Bom dia':(h<18?'Boa tarde':'Boa noite');
  return `<div class="hub-head fade-up">
      <div class="hub-eyebrow">Portal do Colaborador</div>
      <h2>${saud}, ${primeiro}.</h2>
      <p>Tudo do Hospital Nereu Ramos em um só lugar. Por onde você quer começar?</p></div>
    ${hubHeroHTML(pr)}
    <div class="area-grid">${areas.map(areaCardHTML).join('')}</div>`;
}

/* ---------- bibliotecas (regimentos / protocolos) ---------- */
const BIB_META = {
  regimentos:{ titulo:'Regimentos', sub:'Regimentos e normas institucionais — leitura livre.',
               colecao:()=>window.REGIMENTOS||[], vazio:'Os regimentos estão sendo preparados pela Educação Continuada e aparecerão aqui.',
               icon:HUB_ICONS.regimentos, tint:'gold' },
  protocolos:{ titulo:'Protocolos', sub:'Protocolos assistenciais e manuais — leitura livre.',
               colecao:()=>window.PROTOCOLOS||[], vazio:'Os protocolos estão sendo preparados pela Educação Continuada e aparecerão aqui.',
               icon:HUB_ICONS.protocolos, tint:'green' },
};
function bibDocCardHTML(d, idx){
  return `<div class="popcard" style="animation-delay:${idx*45}ms">
    <span class="code mono">${esc(d.code||'')}</span>
    <div class="meta"><h3>${esc(d.title||'')}</h3>
      <div class="sub">${esc(d.origem||'Hospital Nereu Ramos')}</div></div>
    <button class="btn ghost" onclick="abrirDocBiblioteca('${d.id}')">Ler</button>
  </div>`;
}
function bibListaHTML(){
  const meta=BIB_META[bibKind]; if(!meta) return '';
  const docs=meta.colecao();
  if(!docs.length)
    return `<div class="bib-empty fade-up"><div class="ic ${meta.tint}">${meta.icon}</div>
      <b>Em preparação</b><p>${meta.vazio}</p></div>`;
  const list = bibQuery.trim().length>=2 ? PortalCore.searchDocs(docs, bibQuery) : docs.slice();
  if(!list.length)
    return `<div class="empty"><div class="ic">${SVG_FOLDER}</div><b>Nada encontrado.</b><p>Tente outro termo ou verifique a grafia.</p></div>`;
  return `<div class="grid">${list.map(bibDocCardHTML).join('')}</div>`;
}
function renderBiblioteca(){
  const meta=BIB_META[bibKind]; if(!meta) return renderHub();
  const docs=meta.colecao();
  const busca = docs.length ? `<div class="popsearch"><div class="sb">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input id="bib-search" type="text" autocomplete="off" placeholder="Buscar por nome, código ou assunto…" value="${bibQuery.replace(/"/g,'&quot;')}">
    </div></div>` : '';
  return `
    <div class="readtop no-print"><div class="row">
      <button class="back" onclick="goHub()">← Início</button>
      <span class="label">${meta.titulo}</span>
    </div></div>
    <div class="pagehead fade-up"><h2>${meta.titulo}</h2><p>${meta.sub}</p></div>
    ${busca}
    <div id="bib-list">${bibListaHTML()}</div>`;
}
function wireBibSearch(){
  const inp=document.getElementById('bib-search'); if(!inp) return;
  inp.addEventListener('input', ()=>{
    bibQuery=inp.value;
    const box=document.getElementById('bib-list');
    if(box) box.innerHTML=bibListaHTML();
  });
}
function abrirDocBiblioteca(id){
  clearQuizTimer(); activePop=id; consulta=true; consultaOrigem='biblioteca';
  screen='reader'; render(); window.scrollTo(0,0);
}

/* ---------- cursos ---------- */
function renderCursos(){
  const cursos=window.CURSOS||[];
  const corpo = cursos.length
    ? `<div class="grid">${cursos.map((c,i)=>`
        <div class="popcard" style="animation-delay:${i*45}ms">
          <span class="code mono">${esc(c.code||'')}</span>
          <div class="meta"><h3>${esc(c.titulo||'')}</h3>
            <div class="sub">${esc(c.descricao||'')} · ${(c.modulos||[]).length} módulo${(c.modulos||[]).length>1?'s':''}</div></div>
          <span class="badge-soon">Disponível em breve</span>
        </div>`).join('')}</div>`
    : `<div class="bib-empty fade-up"><div class="ic red">${HUB_ICONS.cursos}</div>
        <b>Em breve</b><p>As trilhas de capacitação com avaliação e certificado estão em preparação pela Educação Continuada.</p></div>`;
  return `
    <div class="readtop no-print"><div class="row">
      <button class="back" onclick="goHub()">← Início</button>
      <span class="label">Cursos</span>
    </div></div>
    <div class="pagehead fade-up"><h2>Cursos</h2><p>Trilhas de capacitação com avaliação e certificado.</p></div>
    ${corpo}`;
}
