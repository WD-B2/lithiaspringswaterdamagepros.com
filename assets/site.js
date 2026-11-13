(function () {
  var BP = 960;
  var header = document.getElementById('site-header');
  if (!header) return;
  var btn = header.querySelector('.navtoggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > BP && header.classList.contains('open')) {
      header.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Menu';
    }
  });
})();
