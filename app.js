(function(){
  var qs = new URLSearchParams(location.search);
  var stored = localStorage.getItem('sekibo-lang');
  var hasEn = !!document.querySelector('[lang="en"]');
  var lang = qs.get('lang') || stored || 'ja';
  if (lang === 'en' && !hasEn) lang = 'ja';
  document.body.dataset.lang = lang;
  var btn = document.getElementById('lang');
  if (!btn) return;
  function label(){ btn.textContent = document.body.dataset.lang === 'en' ? 'JA' : 'EN'; }
  label();
  btn.addEventListener('click', function(){
    var next = document.body.dataset.lang === 'en' ? 'ja' : 'en';
    localStorage.setItem('sekibo-lang', next);
    if (next === 'en' && !hasEn) { location.href = 'index.html?lang=en'; return; }
    document.body.dataset.lang = next;
    label();
  });
})();
