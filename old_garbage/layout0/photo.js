function bindHandlers() {
  console.log("binding");
  var images = [
                "http://farm8.staticflickr.com/7393/12532208134_42f23ebefc_b.jpg"
               ,"http://farm9.staticflickr.com/8369/8502224714_dacc7c9e20_b.jpg"
               ,"http://farm7.staticflickr.com/6116/6302560581_44f33a0bd0_b.jpg"
               ,"http://i39.tinypic.com/hs2q9h.jpg"
               ,"http://farm8.staticflickr.com/7345/12531776945_0cff5e6abf_b.jpg"
               ,"http://i39.tinypic.com/15579mt.jpg"
               ,"http://i46.tinypic.com/29blqms.jpg"
               ,"http://farm7.staticflickr.com/6065/6032072963_0b6ce608cd_b.jpg"
               ,"http://farm7.staticflickr.com/6182/6032761436_c3d995bce7_b.jpg"
               ];
  $('#photo').css('background-image','url('+images[0]+') -250px 0px');
  $('#project-list li').hover(function() {
    var id = $(this).attr('id');
    $('#photo').css('background-image','url('+images[id]+')');
  });
}
