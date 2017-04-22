/*onscroll, fix header*/
var sticky = document.getElementById('header');
var xpos = sticky.getBoundingClientRect().left;
window.onscroll = function() {
  if (document.body.scrollTop > 0) {
    sticky.className = 'fixed';
    sticky.style.left = xpos+"px";
  } else {
    sticky.className = '';
    xpos = sticky.getBoundingClientRect().left;
  }
};
