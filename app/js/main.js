var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  initialSlide: 2,
  loop: false,
  overflow: false,
  centeredSlides: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});


init_pointer({
  pointerColor: "#000000", 
  ringSize: 10, 
  ringClickSize: 10 
})

function parallax(event){
  this.querySelectorAll('.slider-images').forEach(images => {
    let speed = images.getAttribute("data-speed") * 0.01;
    let distanceX = (screen.width / 2 - event.clientX) * speed;
    let distanceY = (screen.height / 2 - event.clientY) * speed;
    images.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
  });
}

  
document.addEventListener('mousemove', parallax);



swiper.on('slideChange', function () {
 all_images = new Array (
  "img/image1.png",
  "img/image2.png",
  "img/image3.png",
  "img/image4.png");
  var ImgNum = 0;
  var image = document.querySelectorAll('.slider-images')
  var ImgLength = all_images.length - 1;
  var delay = 5000;
  var lock = false;
  var run;
  
  function chgImg(direction) {
   if (document.images) {
    ImgNum = ImgNum + direction;
    if (ImgNum > ImgLength) { ImgNum = 0; }
    if (ImgNum < 0) { ImgNum = ImgLength; }
    image.src = all_images[ImgNum];
   }
  }
  
  function auto() {
   if (lock == true) {
    lock = false;
    window.clearInterval(run);
   }
   else if (lock == false) {
    lock = true;
    run = setInterval("chgImg(1)", delay);
   }
  }
});

