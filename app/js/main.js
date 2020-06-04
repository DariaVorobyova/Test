var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  loop: false,
  overflow: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
swiper.slideTo(1, false,false);
var shape = document.getElementById('shape');
setTimeout(function () {
  shape.setAttribute('stroke-dashoffset', 0);
}, 0);
swiper.on('slideChange', function () {
  // document.querySelector('.img1').src = 'img/image2.png';
  // document.querySelector('.img2').src = 'img/image3.png';
  // document.querySelector('.img3').src = 'img/image1.png'
  
    var _this = document.querySelectorAll('.img'),
      images = _this.getAttribute('data').split(','),
      counter = 0;
    this.setAttribute('data-src', this.src);
    _this.timer = setInterval(function() {
      if(counter > images.length) {
        counter = 0;
      }
      if (images[counter] != undefined) {
        _this.src=images[counter];
      } else {
        _this.src=_this.getAttribute('data-src');
      }
  
      counter++;
    }, 750);
});