var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  initialSlide: 2,
  loop: false,
  overflow: false,
  centeredSlides: true,

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

// function changeImg(){
//   const imgLinks = [
//     'img/image1.png',
//     'img/image2.png',
//     'img/image3.png'
// ];
// const delay = 1000;
// let currentIndex = 0;
// setInterval(function() {
//   console.log(imgLinks[currentIndex])
//     document.getElementById('imaaage').src = imgLinks[currentIndex];
//     currentIndex++;
//     if(currentIndex >= imgLinks.length) {
//         currentIndex = 0;
//     }
// }, delay);
// }
initImg('#test img', [
    'img/image1.png',
    'img/image2.png',
    'img/image3.png'
]); 
function initImg(selector, srcArr) {
  const img = document.getElementById('imaaage'); 
  Object.assign(img, {
    buf: Object.assign(new Image(), { img }), 
    srcArr: [...srcArr], 
    changeInterval: 5e3,
    bufIdx: 0,
    change: function () {
      this.style.animationName = 'img-in'; 
      this.src = this.buf.src || this.nextImage(); 
      this.buf.src = this.nextImage(); 
    }, 
    nextImage: function () {
      this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
      return this.srcArr[this.bufIdx];
    }
  }); 
  img.buf.addEventListener('load', loadHandler); 
  img.addEventListener('animationend', animEndHandler); 
  img.change(); 
  return img; 

  function loadHandler() {
    setTimeout(
      () => this.img.style.animationName = 'img-out', 
      this.img.changeInterval 
    ); 
  }
  function animEndHandler({ animationName }) {
    if (animationName === 'img-out') 
      this.change(); 
  }
}
swiper.on('slideChange', initImg);

