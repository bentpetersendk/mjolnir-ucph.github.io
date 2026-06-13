
const searchInputs=[document.getElementById('global-search'),document.getElementById('home-search')].filter(Boolean);
const resultBox=document.getElementById('search-results');
let docsIndex=[];
let pagefind=null;
const base=rootPath();
fetch(base+'data/search-index.json').then(r=>r.json()).then(data=>{docsIndex=data}).catch(()=>{});
import(base+'pagefind/pagefind.js').then(mod=>{pagefind=mod}).catch(()=>{pagefind=null});
function score(item,q){const hay=[item.title,item.description,item.category,item.type,item.tags.join(' '),item.body].join(' ').toLowerCase();return q.split(/\s+/).reduce((s,term)=>s+(item.title.toLowerCase().includes(term)?8:0)+(item.tags.join(' ').toLowerCase().includes(term)?4:0)+(hay.includes(term)?1:0),0)}
async function renderSearch(q){if(!resultBox)return;const query=q.trim().toLowerCase();if(query.length<2){resultBox.classList.remove('is-open');resultBox.innerHTML='';return}let hits=[];if(pagefind){try{const search=await pagefind.search(query,{filters:{type:['guide','reference','policy','troubleshooting','faq','announcement','archive']}});const resultData=await Promise.all(search.results.slice(0,8).map(r=>r.data()));hits=resultData.map(item=>({title:item.meta?.title||item.url,description:item.excerpt||'',category:item.filters?.category?.[0]||'Documentation',type:item.filters?.type?.[0]||'page',status:'current',url:item.url.replace(/^\.\//,'')}))}catch(error){hits=[]}}if(!hits.length){hits=docsIndex.map(item=>({...item,_score:score(item,query)})).filter(item=>item._score>0).sort((a,b)=>b._score-a._score || (a.status==='archive')-(b.status==='archive')).slice(0,8)}resultBox.innerHTML=hits.length?hits.map(item=>'<a class="search-result" href="'+normalizeUrl(item.url)+'"><strong>'+escapeHtml(item.title)+'</strong><span>'+escapeHtml(item.category)+' · '+escapeHtml(item.type)+' · '+escapeHtml(item.status||'current')+'</span><p>'+escapeHtml(stripMarks(item.description))+'</p></a>').join(''):'<div class="search-result"><strong>No results</strong><span>Try vpn, ssh, pending, gpu, software, database, storage, or slurm.</span></div>';resultBox.classList.add('is-open')}
function rootPath(){const script=document.currentScript?.src||document.querySelector('script[src$="assets/docs.js"]')?.src;if(script)return script.replace(/assets\/docs\.js.*$/,'');const marker='/docs/';const idx=location.pathname.indexOf(marker);return idx>=0?location.pathname.slice(0,idx+marker.length):'./'}
function normalizeUrl(url){if(/^https?:/.test(url))return url;if(url.startsWith('/'))return url;return base+url.replace(/^\.\//,'')}
function stripMarks(s){return String(s).replace(/<mark>|<\/mark>/g,'')}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
searchInputs.forEach(input=>input.addEventListener('input',e=>{searchInputs.forEach(other=>{if(other!==e.target)other.value=e.target.value});renderSearch(e.target.value)}));
document.addEventListener('click',e=>{if(resultBox && !e.target.closest('.global-search') && !e.target.closest('.home-search'))resultBox.classList.remove('is-open')});
const toggle=document.querySelector('.menu-toggle');const sidebar=document.querySelector('.sidebar');if(toggle&&sidebar){toggle.addEventListener('click',()=>{const open=sidebar.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))})}
