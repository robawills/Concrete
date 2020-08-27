// import '../tools/glide/dist/glide.min';

import Glide from '../tools/glide';

new Glide('#hero-js', {type: 'slider', startAt: 0, perView: 1, focusAt: 'left'}).mount();
new Glide('.glidejs-sl-1', {type: 'slider', startAt: 0, perView: 4, focusAt: 'left'}).mount();
