// Custom JS code can go here

// You can customize Reveal options:
Reveal.configure({
  "center": true,
  "transition": true,
  "progress": true,

  width: '100%',
  height: '100%',

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0
});

// Remove walrus from notes
if (window.frameElement) {
  document.body.classList.add('no-walrus');
}

// Autoplay "time to clean up" video on focus
(function autoPlayVideo (slideIds) {
  var timeout = null;
  var iframe = null;
  var videoPlaying = null;
  function onSlide (e) {
    if (videoPlaying && iframe) {
      // Changed slide: cancel playing
      iframe.src = videoPlaying;
      iframe = null;
      videoPlaying = null;
    }
    clearTimeout(timeout);
    if (slideIds.indexOf(e.currentSlide.id) !== -1) {
      timeout = setTimeout(function waitForIframe () {
        iframe = document.querySelector('.backgrounds .slide-background.present iframe');
        if (!iframe) {
          timeout = setTimeout(waitForIframe, 10);
        } else {
          videoPlaying = iframe.src;
          if (iframe.src.match(/\?/)) {
            iframe.src += "&autoplay=1";
          } else {
            iframe.src += "?autoplay=1";
          }
        }
      }, 10);
    }
  }

  Reveal.addEventListener('ready', onSlide);
  Reveal.addEventListener('slidechanged', onSlide);
})([
  'time-to-clean-up'
]);


function resetSlideScrolling(slide) {
  slide.classList.remove('scrollable-slide');
}

function handleSlideScrolling(slide) {
  if (slide.scrollHeight >= 800) {
      slide.classList.add('scrollable-slide');
  }
}

Reveal.addEventListener('ready', function (event) {
  handleSlideScrolling(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function (event) {
  if (event.previousSlide) {
      resetSlideScrolling(event.previousSlide);
  }
  handleSlideScrolling(event.currentSlide);
});