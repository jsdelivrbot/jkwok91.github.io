/*
determine an array of images that will be used
*/
var images = [
  { url: "http://farm7.staticflickr.com/6065/6032072963_0b6ce608cd_z.jpg"
   ,startx: -130
   ,starty: -150
   ,title: "Music"
   ,category: "Now Trending"
   ,desc: "Join us on an audio adventure"
  }
 ,{ url: "http://farm5.staticflickr.com/4110/5094283681_fc6dabf074_z.jpg"
   ,startx: -30
   ,starty: -50
   ,title: "Milk"
   ,category: "Grocery List"
   ,desc: "Join us on a dairy adventure"
  }
 ,{ url: "http://farm9.staticflickr.com/8386/8501119511_5a245c9a7c_b.jpg"
   ,startx: -130
   ,starty: -180
   ,title: "Best Docs"
   ,category: "Best of 2013"
   ,desc: "Join us on a visual adventure"
  }
 ,{ url: "http://farm9.staticflickr.com/8283/7764055992_a8a93fa6bb_c.jpg"
   ,startx: -150
   ,starty: 250
   ,title: "Pasta"
   ,category: "Grocery List"
   ,desc: "Join us on a culinary adventure"
  }
 ,{ url: "http://farm3.staticflickr.com/2821/11322276435_6a26051a25.jpg"
   ,startx: -40
   ,starty: -20
   ,title: "Kale"
   ,category: "Gardening"
   ,desc: "Join us on a culinary adventure"
  }
 ,{ url: "http://farm9.staticflickr.com/8025/7174429871_958f73ec8b_z.jpg"
   ,startx: 0
   ,starty: -5
   ,title: "NYC"
   ,category: "Summer Eats"
   ,desc: "Join us on a culinary adventure"
  }
 ,{ url: "http://farm9.staticflickr.com/8025/7174429871_958f73ec8b_z.jpg"
   ,startx: -200
   ,starty: 250
   ,title: "Alphabet"
   ,category: "Crucial"
   ,desc: "Join us on an educational adventure"
  }
];
var numImg = images.length;

/*
then create the appropriate number of divs
*/
var page = document.getElementById('content');
for (var i = 0; i < numImg; i++) {
  var box = document.createElement('div');
  box.className = "box";
  box.style.background = "url("+images[i]['url']+") "+images[i]['startx']+"px "+images[i]['starty']+"px";
  var info = document.createElement('div');
  info.className = "info";
  var category = document.createElement('span');
  category.className = "category";
  category.textContent = images[i]['category'];
  var title = document.createElement('div');
  title.className = "titleN";
  title.textContent = images[i]['title'];
  var desc = document.createElement('div');
  desc.className = "desc";
  desc.textContent = images[i]['desc'];
  info.appendChild(category);
  info.appendChild(title);
  info.appendChild(desc);
  box.appendChild(info);
  page.appendChild(box);
}
var double = document.createElement('div');
double.className = "doublebox";
double.style.backgroundColor = "black";
var title = document.createElement('div');
title.className = "titleN";
title.textContent = "P O V";
var slog = document.createElement('div');
slog.className = "slogan";
slog.textContent = "DOCUMENTARIES WORTH WATCHING";
double.appendChild(title);
double.appendChild(slog);
page.appendChild(double);
