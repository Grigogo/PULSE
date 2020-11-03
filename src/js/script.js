const slider = tns({
    controls: false,
    nav: false,
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });