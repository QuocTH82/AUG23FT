const andreRad=["37",'<i class="bi bi-behance"></i>',"dette er number 2", "I7",'<img src="./img/main.jpg" height="64px">'];
const tredjeRad=["22", '<i class="bi bi-telephone">',"dette er blabla","I4",'<img src="./img/avatar1.png" height="64px">'];
const fjerdeRad=["08", '<i class="bi bi-geo-alt">', "dette er bar test", "I5", '<img src="./img/avatar2.png" height="64px">'];
const femteRad=["44", '<i class="bi bi-envelope"></i>', "dette er nest siste rad", "I1", '<img src="./img/avatar3.png" height="64px">'];
const sjetteRad=["16", '</i><i class="bi bi-emoji-smile-upside-down"></i>', "dette er siste rad", "I8", '<img src="./img/coding.png" height="64px">'];
const tabellenMin=[andreRad,tredjeRad,fjerdeRad,femteRad,sjetteRad];

function scanTabell(tabell){
    const tabellenElt = document.getElementById("personalTable");
    const tBodyElt = tabellenElt.childNodes[1];
    for(index in tabell){
        tBodyElt.appendChild(opprettRad(tabell[index]));
    }
}



function opprettRad(rad){
    let radElt=document.createElement("tr")
    for(index in rad){
        let celle =document.createElement("td")
        celle.innerHTML=rad[index];
        radElt.appendChild(celle);

    }
    return radElt;
}

$(document).ready(function () {
    scanTabell(tabellenMin);

    $('table img').on('click', function () {
      var imageUrl = $(this).attr('src');
      window.open(imageUrl, '_blank');
    });
  

    $('table tr:odd').hover(
      function () {
        $(this).css('color', 'red'); 
      },
      function () {
        $(this).css('color', 'black'); 
      }
    );
  });


  