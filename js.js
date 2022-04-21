let btn=document.querySelector('.button');
let inputText=document.querySelector('#add-book input');
let ul=document.querySelector('ul');

let spanDelete='<span class="delete">حذف</span>';

btn.addEventListener('click',function(e){
let li=document.createElement('li');
let span=document.createElement('span');
span.className='name';
span.innerHTML=inputText.value;
li.appendChild(span);
li.innerHTML +=spanDelete;
ul.appendChild(li);
inputText.value="";
e.preventDefault();


});

//dar khateh 1 ma omadim kelide button gereftim va dar khat 2 kelideh input text gereftim
//dar khateh 3 ma ul gereftim
// be in dalil mikhayim elemaneh jadid besazim zamani ke dar input text harfiyo type mikonim
 //dar khate 5 ma span delleto neveshtim barayeh inke dokmeh hazfo asoontawr dar ul garar bedim
 //dar khateh 7 kelideh btn kegerefteh boodim barash ye event neveshtim ke zamnai ke click konim filemoon baz beshe
 // dar khat 8 ma yek function neveshtim ke biyad baramoon ye li dorost koneh aval
 //va bad yek span sakhtim va behesh class dadim
 // va hala dakhele spanemoon chizi ke dar input text minevisim chap mishe
// va bad dakheleh li oon tageh spandelete ke neveshtim mizarim innerHTMl
//va halah spanemoono garar midim dar tag li
// va bad li mizarim dar ul

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ul.addEventListener('click',function(e){
if(e.target.className ==='delete'){
    e.target.parentElement.remove();

}
});


