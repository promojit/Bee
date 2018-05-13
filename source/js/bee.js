// Sidebar Toggle

$(".sidebar-toggle").click(function() {
  // Remove any old one
  $(".sidebar-show-background").remove();
  // Add the element
  $(".sidebar").addClass("sidebar-show");
  $(".sidebar").after("<span class='sidebar-show-background'></span>");
});

$(document).on("click", ".sidebar-show-background", function() {
  $(".sidebar-show-background").remove();
  $(".sidebar").removeClass("sidebar-show");
});
