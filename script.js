document.addEventListener('DOMContentLoaded', function () {
    const swipeImages = document.querySelectorAll('.morph-image');
    const imageWidth = swipeImages[0].clientWidth;
  
    let currentIndex = 0;
  
    // Set initial position for all images except the first one
    gsap.set(swipeImages, { x: imageWidth, opacity: 0 });
    gsap.set(swipeImages[currentIndex], { x: 0, opacity: 1 });
  
    swipeImages.forEach((image, index) => {
      image.addEventListener('click', function () {
        const currentImage = swipeImages[currentIndex];
        const nextIndex = (currentIndex + 1) % swipeImages.length;
        const nextImage = swipeImages[nextIndex];
  
        gsap.to(currentImage, {
          duration: 0.5,
          x: -imageWidth,
          opacity: 0,
          ease: 'power2.inOut',
          onComplete: function () {
            gsap.set(currentImage, { x: imageWidth, opacity: 0 });
          },
        });
  
        gsap.fromTo(nextImage, {
          x: imageWidth,
          opacity: 0,
        }, {
          duration: 0.5,
          x: 0,
          opacity: 1,
          ease: 'power2.inOut',
          onStart: function () {
            nextImage.style.opacity = 1;
          },
        });
  
        currentIndex = nextIndex;
      });
    });
  });
  