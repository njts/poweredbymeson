class Post {
	constructor(title, link, type, img) {
		this.title = title;
		this.link = link;
		this.type = type;
		this.img = img;
	}
}


const app = new Vue({
	el: '#app',
	data: {
		search: '',
		postList: [
			new Post(
				'Phantom',
				'https://phantom.app/',
				'wallet',
				'./favicons/phantom.app/apple-touch-icon.png'),

			new Post(
				'Decent.land',
				'https://Decent.land',
				'infrastructure',
				'./favicons/decent.land/favicon.ico'),

			new Post(
				'Nijatoes',
				'https://nijatoes.com',
				'personal blog',
				'./favicons/nijatoes.com/apple-icon-152x152.png'),

			new Post(
				'Ultiverse',
				'https://www.ultiverse.io/',
				'web3',
				'./favicons/ultiverse.io/favicon.53fc509c.ico'),

			new Post(
				'Port3',
				'https://port3.io',
				'web3',
				'./favicons/port3.io/favicon.ico'),

			new Post(
				'Crust',
				'https://crust.network/',
				'Web3 Storage',
				'./favicons/crust.network/favicon.ico'),

			new Post(
				'Rss3',
				'https://rss3.io/',
				'infrastructure',
				'./favicons/rss3.notion.site/RSS3.png'),

			new Post(
				'Cyberconnect',
				'https://cyberconnect.me/',
				'infrastructure',
				'./favicons/cyberconnect.me/favicon.ico'),

			new Post(
				'Showme',
				'https://showme.fan/',
				'NFT',
				'./favicons/showme.fan/favicon.ico'),

			new Post(
				'Nftscan',
				'https://www.nftscan.com/',
				'NFT',
				'./favicons/nftscan.com/favicon.png'),

			new Post(
				'Matters news',
				'https://matters.news/',
				'infrastructure',
				'./favicons/assets-next.matters.news/favicon-64x64.721b2438.png'),

			new Post(
				'Metaopus',
				'https://metaopus.co/',
				'NFT',
				'./favicons/metaopus.co/favicon.ico'),

			new Post(
				'BCA network',
				'https://bca.network/',
				'art-tech brand',
				'./favicons/bca.network/favicon.ico'),
			
			new Post(
				'Koii Network',
				'https://www.koii.network/',
				'web3',
				'./favicons/koii.network/KoiiNetwork-logo_64.svg'),
			
			new Post(
				'Permacast',
				'https://permacast.dev/#/',
				'podcast',
				'./favicons/permacast.dev/favicon.ico'),

		]
	},

//<-------------------------list end------------------------->>
//<------------------add your website above------------------>>

computed: {
	filteredList() {
	  return this.postList.filter(
		post => {
		  return post.title
			.toLowerCase()
			.includes(this.search
			  .toLowerCase());
		});
	}
	}
	});
	
	document.getElementById("year")
	  .innerHTML = (new Date()
		.getFullYear());
	
	var cerchio = document.querySelectorAll(
	  '.cerchio');
	cerchio.forEach(function (elem) {
	  $(document)
		.on('mousemove touch'
		  , function (e) {
			magnetize(elem, e);
		  });
	})
	$(document)
	  .on('mousemove touch'
		, function (e) {
		  magnetize('.cerchio', e);
		});
	
	function magnetize(el, e) {
	  var mX = e.pageX
		, mY = e.pageY;
	  const item = $(el);
	  const customDist = item.data('dist') *
		20 || 120;
	  const centerX = item.offset()
		.left + (
		  item.width() / 2);
	  const centerY = item.offset()
		.top + (
		  item.height() / 2);
	  var deltaX = Math.floor((centerX -
		mX)) * -0.45;
	  var deltaY = Math.floor((centerY -
		mY)) * -0.45;
	  var distance = calculateDistance(item
		, mX, mY);
	  if (distance < customDist) {
		TweenMax.to(item, 0.5
		  , {
			y: deltaY
			, x: deltaX
			, scale: 1.1
		  });
		item.addClass('magnet');
	  } else {
		TweenMax.to(item, 0.6
		  , {
			y: 0
			, x: 0
			, scale: 1
		  });
		item.removeClass('magnet');
	  }
	}
	
	function calculateDistance(elem, mouseX
	  , mouseY) {
	  return Math.floor(Math.sqrt(Math.pow(
		  mouseX - (elem.offset()
			.left +
			(elem.width() / 2)), 2) +
		Math.pow(mouseY - (elem.offset()
			.top + (elem.height() / 2))
		  , 2)));
	}
	
	function lerp(a, b, n) {
	  return (1 - n) * a + n * b
	}
	var SoundHover = $("#sound-hover")[0];
	$(".trigger-audio")
	  .on('mouseenter'
		, function () {
		  SoundHover.play();
		});
	var rotatingCursor = function () {
	  const INTERVAL_POSITION = 5;
	  const INTERVAL_ROTATION = 100;
	  let lastCursorPos = {
		x: -999
		, y: -999
	  };
	  let currentCursorPos = {
		x: -999
		, y: -999
	  };
	  let lastCursorAngle = 0
		, cursorAngle = 0;
	  let cursorEl, cursorImageEl;
	
	  function setCurrentCursorProps() {
		cursorEl.style.transform =
		  `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
		while (Math.abs(lastCursorAngle -
			cursorAngle) > 180) {
		  if (cursorAngle >
			lastCursorAngle) {
			cursorAngle -= 360;
		  } else if (cursorAngle <
			lastCursorAngle) {
			cursorAngle += 360;
		  }
		}
		cursorImageEl.style.transform =
		  `rotate(${cursorAngle - 90}deg)`;
	  }
	
	  function updateCursor() {
		window.addEventListener(
		  'mousemove', event => {
			currentCursorPos = {
			  x: event.clientX
			  , y: event.clientY
			};
		  });
		setInterval(setCurrentCursorProps
		  , INTERVAL_POSITION);
		setInterval(() => {
		  const delt = {
			x: lastCursorPos.x -
			  currentCursorPos.x
			, y: lastCursorPos.y -
			  currentCursorPos.y
		  };
		  if (Math.abs(delt.x) < 3 &&
			Math.abs(delt.y) < 3)
			return;
		  cursorAngle = Math.atan2(
			  delt.y, delt.x) * 180 /
			Math.PI;
		  setCurrentCursorProps();
		  lastCursorPos =
			currentCursorPos;
		  lastCursorAngle =
			cursorAngle;
		}, INTERVAL_ROTATION);
	  }
	  return {
		'initialize': () => {
		  cursorEl = document
			.querySelector('#cursor');
		  cursorImageEl = document
			.querySelector(
			  '#cursor > img');
		  updateCursor();
		}
	  };
	}();
	document.addEventListener(
	  'DOMContentLoaded', rotatingCursor
	  .initialize);
	
	var numOfSquares = 10;
	
	for (var i = 0; i < numOfSquares; i++) {
	  var square = $(
		'<div class="mesonicon"></div>');
	  var rNum = Math.floor((Math.random() *
		1000));
	  $('.hero, .square__content')
		.append(square);
	
	  square.css({
		top: Math.random() * ($('.hero')
			.height() - square.height()
			) + 'px'
		, left: Math.random() * ($(
			  '.hero')
			.width() - square.width()) +
		  'px'
		, 'transform': 'rotate(' +
		  rNum + '2deg)'
	  })
	}
	
	$('.addAddress')
	  .on('dblclick', function () {
		document.getElementById("image")
		  .src =
		  "./css/thanos-gauntlet.gif";
	
	  });
	
	
	function func() {
	  document.getElementById("image")
		.className +=
		" mesonicon-easteregg";
	  document.getElementById("image")
		.src =
		"./images/meson-favicon-inverted.png";
	
	}