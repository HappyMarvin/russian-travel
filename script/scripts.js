'use strict';
function vim (container) {
  document.addEventListener('DOMContentLoaded', function () {
    if (!container) {
      return;
    }
    var buttonPlay = container.querySelector('.space__video-play');
    var videoOverlay = container.querySelector('.space__video-overlay');
    var videoIframe = container.querySelector('iframe');
    var player = new Vimeo.Player(videoIframe);
    buttonPlay.addEventListener('click', function () {
      videoOverlay.classList.add('hide');
      console.log(videoOverlay)
      player.play();
      player.on('play', function () {
        videoOverlay.classList.add('hide');
      });
      player.on('pause', function () {
        videoOverlay.classList.remove('hide');
      });
      console.log(11);
    });
  });
};
function plays () {
  let containers = document.querySelectorAll('.space__video-item')
  containers.forEach(conteiner => vim(conteiner));
}
plays();
