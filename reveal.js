(function(){
  var nav = document.querySelector('.site-nav');
  if(nav && !nav.classList.contains('nav--static')){
    var onScroll = function(){
      if(window.scrollY > 40){ nav.classList.add('nav--solid'); }
      else{ nav.classList.remove('nav--solid'); }
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if('IntersectionObserver' in window){
    var items = document.querySelectorAll('[data-reveal]');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});
    items.forEach(function(el){ io.observe(el); });
  }
})();
