var subsetName = 'JISSubset';
var jpTitle = "米、北朝鮮へ圧力強める　国務長官シリア攻撃は「警告」";
var jpText = "トランプ米政権が北朝鮮への圧力を強めている。ティラーソン国務長官は９日の米テレビ番組で、先のシリアへの攻撃を引き合いに「国際合意に違反し他国への脅威になるなら、いずれかの時点で対抗措置をとる」と話した。国際合意に反してミサイル発射を繰り返す北朝鮮を強くけん制した。米海軍は８日、当初予定を変えて朝鮮半島周辺に向け原子力空母カール・ビンソンを派遣した。";

var enTitle = "Rift with auditor puts Toshiba at risk of delisting";
var enText = "TOKYO -- As a Toshiba in crisis continues to butt heads with an auditing firm over an investigation into Westinghouse Electric, investors fear the conglomerate's possible eviction from the Tokyo Stock Exchange.";

var sampleTitle = [jpTitle,enTitle];
var sampleText = [jpText,enText];

var font = document.getElementById("box");
var btnSans = document.getElementById("btn-sans");
var btnSerif = document.getElementById("btn-serif");
var sans = "btn sh-sans medium "
var serif = "btn sh-serif medium "

var tagSans = ['ExtraLight','Light','Normal','Regular','Medium','Bold','Heavy'];
// var tagSerif = ['ExtraLight','Light','Regular','Medium','SemiBold','Bold','Heavy'];
var tags = tagSans;

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

var subset = document.getElementById('subsetname');
subset.innerHTML = 'サブセット = '+subsetName;

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

               var createTitle = document.createElement('h2');
               createTitle.innerHTML = sampleTitle[j];
               createTitle.className = tags[i];
               divBoxCol.appendChild(createTitle);

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
