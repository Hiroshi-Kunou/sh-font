## 源ノ角ゴ / 明朝をwebフォント化
デモ  
http://hiroshikunou.com/shFont/

- 漢字は第一水準（2,965字）でサブセット
- woff2,woff,ttf,eotの各種にコンバート済み



---

#### 使い方

説明するまでもなさそうですが、  
1- sh-sans/sh-serifの各フォルダから必要なウェイトを取り出す。  
2- cssでフォントファミリーをセット  
3- エレメントにスタイルをあてる  

---

#### 作業備忘録

サブセットフォントメーカー  
http://opentype.jp/subsetfontmk.htm

WOFFコンバータ  
※otfからはeotが生成できない  
http://opentype.jp/woffconv.htm

onlinefontconverter  
（otfをttfに変換するときに使った）  
https://onlinefontconverter.com/

---

#### 書体原本

源ノ角ゴシックのオープンソース  
https://github.com/adobe-fonts/source-han-sans

源ノ明朝のオープンソース  
https://github.com/adobe-fonts/source-han-serif
