var chico = ["Kwando Restaurant", "Peaking Restaurant", "Chico State Campus", "My Home", "Winco"];
var current;

function shuffleGallery()
{
  var nIndex
  do {
  nIndex  = Math.floor(Math.random()*chico.length);
} while (nIndex == current);
  current = nIndex;
  console.log(chico[nIndex]);
}
