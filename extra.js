var cerchio = document.querySelectorAll('.cerchio');

cerchio.forEach(function(elem){
  $(document).on('mousemove touch', function(e){
    magnetize(elem, e);
  });
})

 $(document).on('mousemove touch', function(e){
   magnetize('.cerchio', e);
 });

function magnetize(el, e){
  var mX = e.pageX,
      mY = e.pageY;
  const item = $(el);
  
  const customDist = item.data('dist') * 20 || 120;
  const centerX = item.offset().left + (item.width()/2);
  const centerY = item.offset().top + (item.height()/2);
  
  var deltaX = Math.floor((centerX - mX)) * -0.45;
  var deltaY = Math.floor((centerY - mY)) * -0.45;
  
  var distance = calculateDistance(item, mX, mY);
    
  if(distance < customDist){
    TweenMax.to(item, 0.5, {y: deltaY, x: deltaX, scale:1.1});
    item.addClass('magnet');
  }
  else {
    TweenMax.to(item, 0.6, {y: 0, x: 0, scale:1});
    item.removeClass('magnet');
  }
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}

/*- MOUSE STICKY -*/
function lerp(a, b, n) {
    return (1 - n) * a + n * b
}


//play sound on hover
var SoundHover = $("#sound-hover")[0];
$(".trigger-audio").on('mouseenter', function() {
  SoundHover.play();
});





// <![CDATA[
  var colour="yellow";
  var sparkles=120;
  
  /****************************
  *  Tinkerbell Magic Sparkle *
  * (c) 2005 mf2fm web-design *
  *  http://www.mf2fm.com/rv  *
  * DON'T EDIT BELOW THIS BOX *
  ****************************/
  var x=ox=400;
  var y=oy=300;
  var swide=800;
  var shigh=600;
  var sleft=sdown=0;
  var tiny=new Array();
  var star=new Array();
  var starv=new Array();
  var starx=new Array();
  var stary=new Array();
  var tinyx=new Array();
  var tinyy=new Array();
  var tinyv=new Array();
  
  window.onload=function() { if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i=0; i<sparkles; i++) {
      var rats=createDiv(3, 3);
      rats.style.visibility="hidden";
      document.body.appendChild(tiny[i]=rats);
      starv[i]=0;
      tinyv[i]=0;
      var rats=createDiv(5, 5);
      rats.style.backgroundColor="transparent";
      rats.style.visibility="hidden";
      var rlef=createDiv(1, 5);
      var rdow=createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top="2px";
      rlef.style.left="0px";
      rdow.style.top="0px";
      rdow.style.left="2px";
      document.body.appendChild(star[i]=rats);
    }
    set_width();
    sparkle();
  }}
  
  function sparkle() {
    var c;
    if (x!=ox || y!=oy) {
      ox=x;
      oy=y;
      for (c=0; c<sparkles; c++) if (!starv[c]) {
        star[c].style.left=(starx[c]=x)+"px";
        star[c].style.top=(stary[c]=y)+"px";
        star[c].style.clip="rect(0px, 5px, 5px, 0px)";
        star[c].style.visibility="visible";
        starv[c]=50;
        break;
      }
    }
    for (c=0; c<sparkles; c++) {
      if (starv[c]) update_star(c);
      if (tinyv[c]) update_tiny(c);
    }
    setTimeout("sparkle()", 40);
  }
  
  function update_star(i) {
    if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
      stary[i]+=1+Math.random()*3;
      if (stary[i]<shigh+sdown) {
        star[i].style.top=stary[i]+"px";
        starx[i]+=(i%5-2)/5;
        star[i].style.left=starx[i]+"px";
      }
      else {
        star[i].style.visibility="hidden";
        starv[i]=0;
        return;
      }
    }
    else {
      tinyv[i]=50;
      tiny[i].style.top=(tinyy[i]=stary[i])+"px";
      tiny[i].style.left=(tinyx[i]=starx[i])+"px";
      tiny[i].style.width="2px";
      tiny[i].style.height="2px";
      star[i].style.visibility="hidden";
      tiny[i].style.visibility="visible"
    }
  }
  
  function update_tiny(i) {
    if (--tinyv[i]==25) {
      tiny[i].style.width="1px";
      tiny[i].style.height="1px";
    }
    if (tinyv[i]) {
      tinyy[i]+=1+Math.random()*3;
      if (tinyy[i]<shigh+sdown) {
        tiny[i].style.top=tinyy[i]+"px";
        tinyx[i]+=(i%5-2)/5;
        tiny[i].style.left=tinyx[i]+"px";
      }
      else {
        tiny[i].style.visibility="hidden";
        tinyv[i]=0;
        return;
      }
    }
    else tiny[i].style.visibility="hidden";
  }
  
  document.onmousemove=mouse;
  function mouse(e) {
    set_scroll();
    y=(e)?e.pageY:event.y+sdown;
    x=(e)?e.pageX:event.x+sleft;
  }
  
  function set_scroll() {
    if (typeof(self.pageYOffset)=="number") {
      sdown=self.pageYOffset;
      sleft=self.pageXOffset;
    }
    else if (document.body.scrollTop || document.body.scrollLeft) {
      sdown=document.body.scrollTop;
      sleft=document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
      sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
    }
    else {
      sdown=0;
      sleft=0;
    }
  }
  
  window.onresize=set_width;
  function set_width() {
    if (typeof(self.innerWidth)=="number") {
      swide=self.innerWidth;
      shigh=self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientWidth) {
      swide=document.documentElement.clientWidth;
      shigh=document.documentElement.clientHeight;
    }
    else if (document.body.clientWidth) {
      swide=document.body.clientWidth;
      shigh=document.body.clientHeight;
    }
  }
  
  function createDiv(height, width) {
    var div=document.createElement("div");
    div.style.position="absolute";
    div.style.height=height+"px";
    div.style.width=width+"px";
    div.style.overflow="hidden";
    div.style.backgroundColor=colour;
    return (div);
  }
  // ]]>
  
  var rotatingCursor = function () {

    /* Local Variables */
    const INTERVAL_POSITION = 5;
    const INTERVAL_ROTATION = 100;
    let lastCursorPos = { x: -999, y: -999 };
    let currentCursorPos = { x: -999, y: -999 };
    let lastCursorAngle = 0,cursorAngle = 0;
    let cursorEl, cursorImageEl;
  
  
    /* Local Functions */
  
    // NOTE: I am transform two different elements here because so I can only animate the rotation with 'transition-property: transform'.
    function setCurrentCursorProps() {
      // Apply translation (set to actual cursor position)
      cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
  
      // Ensure correct rotation transition direction
      while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
        if (cursorAngle > lastCursorAngle) {
          cursorAngle -= 360;
        } else if (cursorAngle < lastCursorAngle) {
          cursorAngle += 360;
        }
      }
      // Apply rotation
      cursorImageEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
    }
  
    function updateCursor() {
      window.addEventListener('mousemove', event => {
        currentCursorPos = { x: event.clientX, y: event.clientY };
      });
  
      // Interval for updating cursor-position
      setInterval(setCurrentCursorProps, INTERVAL_POSITION);
  
      // Interval for updating cursor-rotation
      setInterval(() => {
        const delt = {
          x: lastCursorPos.x - currentCursorPos.x,
          y: lastCursorPos.y - currentCursorPos.y };
  
        if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
        cursorAngle = Math.atan2(delt.y, delt.x) * 180 / Math.PI;
  
        setCurrentCursorProps();
  
        lastCursorPos = currentCursorPos;
        lastCursorAngle = cursorAngle;
      }, INTERVAL_ROTATION);
    }
  
  
    /* Public Functions */
  
    return {
  
      'initialize': () => {
        cursorEl = document.querySelector('#cursor');
        cursorImageEl = document.querySelector('#cursor > img');
        updateCursor();
      } };
  
  
  
  }();
  
  
  document.addEventListener('DOMContentLoaded', rotatingCursor.initialize);