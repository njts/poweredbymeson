var cerchio = document.querySelectorAll(
  '.cerchio');
cerchio.forEach(function (elem)
{
  $(document)
    .on('mousemove touch'
      , function (e)
      {
        magnetize(elem, e);
      });
})
$(document)
  .on('mousemove touch'
    , function (e)
    {
      magnetize('.cerchio', e);
    });

function magnetize(el, e)
{
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
  if (distance < customDist)
  {
    TweenMax.to(item, 0.5
      , {
        y: deltaY
        , x: deltaX
        , scale: 1.1
      });
    item.addClass('magnet');
  }
  else
  {
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
  , mouseY)
{
  return Math.floor(Math.sqrt(Math.pow(
      mouseX - (elem.offset()
        .left +
        (elem.width() / 2)), 2) +
    Math.pow(mouseY - (elem.offset()
        .top + (elem.height() / 2))
      , 2)));
}

function lerp(a, b, n)
{
  return (1 - n) * a + n * b
}
var SoundHover = $("#sound-hover")[0];
$(".trigger-audio")
  .on('mouseenter'
    , function ()
    {
      SoundHover.play();
    });
var rotatingCursor = function ()
{
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
  
  function setCurrentCursorProps()
  {
    cursorEl.style.transform =
      `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
    while (Math.abs(lastCursorAngle -
        cursorAngle) > 180)
    {
      if (cursorAngle >
        lastCursorAngle)
      {
        cursorAngle -= 360;
      }
      else if (cursorAngle <
        lastCursorAngle)
      {
        cursorAngle += 360;
      }
    }
    cursorImageEl.style.transform =
      `rotate(${cursorAngle - 90}deg)`;
  }
  
  function updateCursor()
  {
    window.addEventListener(
      'mousemove', event =>
      {
        currentCursorPos = {
          x: event.clientX
          , y: event.clientY
        };
      });
    setInterval(setCurrentCursorProps
      , INTERVAL_POSITION);
    setInterval(() =>
    {
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
    'initialize': () =>
    {
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
	var square = $('<div class="mesonicon"></div>');
	var rNum =  Math.floor( (Math.random() * 1000));
	$('.hero, .square__content').append(square);

	square.css({
		top: Math.random() * ($('.hero').height() - square.height()) + 'px',
		left: Math.random() * ($('.hero').width() - square.width()) + 'px',
		'transform': 'rotate('+ rNum +'2deg)'
	})
}

$('.addAddress').on('dblclick', function() {
  document.getElementById("image").src="./css/thanos-gauntlet.gif";

});


function func() {
  document.getElementById("image").className += " mesonicon-easteregg";
  document.getElementById("image").src="./images/meson-favicon-inverted.png";
  
}