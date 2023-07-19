import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_PLAYER = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(KEY_PLAYER, JSON.stringify(seconds));
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

const timeResume = localStorage.getItem(KEY_PLAYER ?? 0);

player.setCurrentTime(timeResume).then(function (timeResume) {
  console.log(timeResume);
});
