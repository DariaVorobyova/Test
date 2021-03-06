var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 40,
  slidesOffsetBefore:-170,
  loop: false,
  overflow: false,
  centeredSlides: true,
  breakpoints: { 
    375: {spaceBetween: 40,
      lidesOffsetBefore:-170, }, 
    414: { spaceBetween: 50,
      slidesOffsetBefore:-188, }, 
    768: { spaceBetween: 80,
      slidesOffsetBefore:-380, },  
    1024: { spaceBetween: 188,
      slidesOffsetBefore:-367, } ,
    1440: { spaceBetween: 288,
        slidesOffsetBefore:-480, }} 

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

swiper.on('slideChange', function(){
  let images = document.querySelectorAll('.slider-images');
  const imgLinks = [
        'img/image1.png',
        'img/image2.png',
        'img/image3.png'
    ]
  
    let index = swiper.activeIndex ;
    images.forEach(img => {
    img.setAttribute('src', imgLinks[index]);
    index++;
    if(index >= imgLinks.length) {
        index = 0;
    };
    img.addEventListener('load', function(){
      img.style.animationName = 'img-in';
    })

  })

});