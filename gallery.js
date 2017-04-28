var chico = [

  {description: "O'Connell Technology Center - CSU Chico" ,

   picture: "http://www.csuchico.edu/maps/images/buildings-photos/buildings-oconnell.jpg" ,

   from: "csuchico.edu"

  },

  {description: "Dota 2 Game" ,

   picture: "http://images2.itechpost.com/data/images/full/57650/dota-2-7-00-zeus-aghanims-scepter-rework.png" ,

   from: "itechpost.com"

  },

  {description: "Peking restaurant chico" ,

   picture: "https://s3-media3.fl.yelpcdn.com/bphoto/bGei42KYngcvYObLIV5rag/o.jpg" ,

   from: "Yelp.com"

  },

  {description: "Converse shoes" ,

   picture: "http://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=M7650_102&$img1=1J793_010&$img2=M3310_006" ,

   from: "nike.com"

  },

  {description: "out last 2 Game" ,

   picture: "http://www.redbarrelsgames.com/wp-content/uploads/2016/04/ScreenShotOutlastII-01.jpg" ,

   from: "http://redbarrelsgames.com"

  },

];

var current;

function shuffleGallery()
{
  var nIndex
  do {
  nIndex  = Math.floor(Math.random()*chico.length);
} while (nIndex == current);
  current = nIndex;
  console.log(chico[current]);
  
  document.getElementById('description').innerHTML = chico[current].description;
  document.getElementById('picture').src = chico[current].picture;
  document.getElementById('from').innerHTML = "Image courtesy of: " + chico[current].from;
}
