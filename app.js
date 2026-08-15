let stories=[];
fetch('stories.json').then(r=>r.json()).then(data=>{stories=data;renderStories();});
const grid=document.getElementById('storyGrid'), search=document.getElementById('search');
function renderStories(q=''){const a=stories.filter(s=>s.title.includes(q.trim()));grid.innerHTML=a.map(s=>`<article class="story-card"><img src="${s.cover}" alt="غلاف ${s.title}"><div class="story-body"><h3>${s.title}</h3><p>${s.pages.length} صفحات • قصة مصورة</p><a href="story.html?id=${s.id}">📖 اقرأ القصة</a></div></article>`).join('');}
if(search) search.addEventListener('input',e=>renderStories(e.target.value));
let v=Number(localStorage.getItem('zad_visits')||0)+1;localStorage.setItem('zad_visits',v);let vi=document.getElementById('visits');if(vi)vi.textContent=v;