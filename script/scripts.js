'use strict';
function vim (container) {
  document.addEventListener('DOMContentLoaded', function () {
    if (!container) {
      return;
    }
    let buttonPlay = container.querySelector('.space__video-play');
    let videoOverlay = container.querySelector('.space__video-overlay');
    let videoIframe = container.querySelector('iframe');
    let player = new Vimeo.Player(videoIframe);
    buttonPlay.addEventListener('click', function () {
      player.play();
      player.on('play', function () {
        videoOverlay.classList.add('video__hide');
      });
      player.on('pause', function () {
        videoOverlay.classList.remove('video__hide');
      });
    });
  });
};
function plays () {
  let containers = document.querySelectorAll('.space__video-item')
  containers.forEach(conteiner => vim(conteiner));
}
plays();
