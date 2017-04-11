var font = document.getElementById("box");
var btnSans = document.getElementById("btn-sans");
var btnSerif = document.getElementById("btn-serif");
var sans = "btn sh-sans medium "
var serif = "btn sh-serif medium "

function sansSwitch(){
     font.className = "col sh-sans";
     btnSans.className = sans+"select";
     btnSerif.className = serif;
};

function serifSwitch(){
     font.className = "col sh-serif";
     btnSans.className = sans;
     btnSerif.className = serif+"select";
};

window.onload = function(){

     var jp = 'トランプ米政権が北朝鮮への圧力を強めている。ティラーソン国務長官は９日の米テレビ番組で、先のシリアへの攻撃を引き合いに「国際合意に違反し他国への脅威になるなら、いずれかの時点で対抗措置をとる」と話した。国際合意に反してミサイル発射を繰り返す北朝鮮を強くけん制した。米海軍は８日、当初予定を変えて朝鮮半島周辺に向け原子力空母カール・ビンソンを派遣した。';
     var en = "TOKYO -- As a Toshiba in crisis continues to butt heads with an auditing firm over an investigation into Westinghouse Electric, investors fear the conglomerate's possible eviction from the Tokyo Stock Exchange.";
     var sampleText = [jp,en];
     var tags = ['ExtraLight','light','normal','regular','medium','bold','heavy'];

     for(i=0;i<tags.length;i++){

          for(j=0;j<sampleText.length;j++){

               var divBoxCol = document.createElement('div');
               divBoxCol.className = 'col1';

               var createTag = document.createElement('p');
               createTag.innerHTML = tags[i];
               createTag.className = tags[i];
               divBoxCol.appendChild(createTag);

               var createHr = document.createElement('hr');
               divBoxCol.appendChild(createHr);

               var createText = document.createElement('p');
               createText.innerHTML = sampleText[j];
               createText.className = tags[i];
               divBoxCol.appendChild(createText);

               var box = document.getElementById('box');
               box.appendChild(divBoxCol);

          };

          var createBoth = document.createElement('div');
          createBoth.className = 'clear';
          box.appendChild(createBoth);

     };

};
