// Drawer Toggle

$('.drawer-toggler').click(function() {
  var drawerSelector = $(this).data('target');
  // Remove any old one
  $('.drawer-show-background').remove();
  $(drawerSelector).toggleClass('show hide');
  $(drawerSelector).after("<span class='drawer-show-background'></span>");
});

$(document).on('click', '.drawer-show-background', function() {
  $(this)
    .prev('.drawer')
    .toggleClass('show hide');
  $(this).remove();
});

// On Resize Window Change Drawer Setup

$(window).on('resize', function() {
  var win = $(this);
  if (win.width() >= 1120) {
    if ($('.drawer.auto').hasClass('hide')) {
      // Remove any old one
      $('.drawer-show-background').remove();
      $('.drawer.auto').toggleClass('show hide');
    }
  }
});

// Ripple Effect

$(
  '.button, .menu-list-item a, .icon-button, .icon-button-large, .complex-button'
).click(function(e) {
  // Remove any old one
  $('.ripple').remove();

  // Setup
  var posX = $(this).offset().left,
    posY = $(this).offset().top,
    objWidth = $(this).width(),
    objHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (objWidth >= objHeight) {
    objHeight = objWidth;
  } else {
    objWidth = objHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - objWidth / 2;
  var y = e.pageY - posY - objHeight / 2;

  // Add the ripples CSS and start the animation
  $('.ripple')
    .css({
      width: objWidth,
      height: objHeight,
      top: y + 'px',
      left: x + 'px'
    })
    .addClass('rippleEffect');
});

// Toolbar Menu

$('.toolbar-nav-toggle').click(function() {
  $(this)
    .parents('.toolbar-nav')
    .children('.toolbar-nav-wrapper')
    .addClass('toolbar-nav-open');
  $('.toolbar-nav-wrapper').after(
    "<span class='toolbar-nav-open-after'></span>"
  );
});

$(document).on('click', '.toolbar-nav-open-after', function() {
  $('.toolbar-nav-wrapper').removeClass('toolbar-nav-open');
  $('.toolbar-nav-open-after').remove();
});
