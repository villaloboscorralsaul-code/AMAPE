/* AMAPE · navegación compartida de las páginas de servicio */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  var anio = document.getElementById('anio');
  if(anio) anio.textContent = new Date().getFullYear();

  /* Encabezado y botón flotante */
  var top = document.getElementById('top'), wa = document.getElementById('wa-float');
  function onScroll(){
    top.classList.toggle('scrolled', window.scrollY > 8);
    if(wa) wa.classList.toggle('on', window.scrollY > 420);
  }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* Menú móvil */
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function(){
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.addEventListener('click', function(e){
    if(e.target.closest('a') && !e.target.closest('.nav-serv-btn')){
      btn.setAttribute('aria-expanded','false'); nav.classList.remove('open'); btn.setAttribute('aria-label','Abrir menú');
    }
  });

  /* Menú desplegable de servicios */
  var ns = document.querySelector('.nav-serv');
  if(ns){
    var nsb = ns.querySelector('.nav-serv-btn');
    var tactil = window.matchMedia('(max-width:1080px), (hover:none)');
    function fijarServ(abierto){ ns.classList.toggle('abierto', abierto); nsb.setAttribute('aria-expanded', abierto); }
    nsb.addEventListener('click', function(ev){
      if(!tactil.matches){ nsb.blur(); return; }
      ev.preventDefault(); fijarServ(!ns.classList.contains('abierto'));
    });
    document.addEventListener('click', function(ev){ if(!ns.contains(ev.target)) fijarServ(false); });
    document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape') fijarServ(false); });
  }

  /* Barra de progreso */
  var prog = document.getElementById('progreso');
  function progreso(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
  }
  progreso(); window.addEventListener('scroll', progreso, {passive:true}); window.addEventListener('resize', progreso);

  /* Aparición al hacer scroll */
  var rvs = document.querySelectorAll('.rv');
  if(reduce || !hasIO){
    rvs.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.05});
    rvs.forEach(function(el){ io.observe(el); });
  }
})();
