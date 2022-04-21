// let btn=document.querySelector('.button');
// let inputText=document.querySelector('#add-book input');
// let ul=document.querySelector('ul');

// let spanDelete='<span class="delete">حذف</span>';

// btn.addEventListener('click',function(e){
// let li=document.createElement('li');
// let span=document.createElement('span');
// span.className='name';
// span.innerHTML=inputText.value;
// li.appendChild(span);
// li.innerHTML +=spanDelete;
// ul.appendChild(li);




// inputText.value="";
// e.preventDefault();



// });

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
// ul.addEventListener('click',function(e){
// if(e.target.className ==='delete'){
//     e.target.parentElement.remove();

// }
// });

//inja ma barayeh ul yek event gozashtim ke zamani ke click konim
//on elemonto pak koneh
////to khateh 35 ma target(eshareh) gozashtim rooyeh class dellete
//ke hamoon file hazfe va bad dar khat 36 neveshtim ke pedareh elemaneh class delete ke li hastto pak konej 
//class delete tageh spaneh ke pedaresh mishe li
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let arr=["shervin","nj"];

// let set=localStorage.setItem('array',arr);
// let get=localStorage.getItem('array').split(',');
// console.log(get);

// let obj={name:'shervin',lastname:"nj"};
// localStorage.setItem('object',JSON.stringify(obj))
// let objecT=JSON.parse(localStorage.getItem('object')) ;
// console.log(objecT);



//=====================================================================

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

setToLocalStorage(inputText.value)


inputText.value="";
e.preventDefault();



});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ul.addEventListener('click',function(e){
    if(e.target.className ==='delete'){
        e.target.parentElement.remove();
    
    }
    });
    
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
    tasks=[];

    }else{
        tasks=localStorage.getItem('tasks').split(',');

    }

    tasks.push(task);
    localStorage.setItem('tasks',tasks)
}



//dar function bala ma yek orgomanti minevesim be asme task 
// chon balah ba asme function ke neveshtim garar dadim input text.value
//va dar payin ma task as of parameter garar dadim
//dar khat 103 ma ye varible tasks garar dadim va megdaresho empty garar dadim
//dar khat 104 miyayim mighim ke agar localStorage khali bood bara ma hichkari nakon
//dar khat 107 neveshtim dar ghireh insoorat bia varible ke khali sakhte bodim 
//bia be soorate split shode berizesh to varible 
//dar khat 112 mighim hala bia ba dastooreh push task ke megdaresh bara bar ba input.text.value hasto bezar to local stotage
//va dar nahayat local storagemono SET kon be key tasks va valiu tasks