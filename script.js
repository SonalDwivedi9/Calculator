// var buttons = document.getElementsByClassName('button');
// var display = document.getElementById('inputNo');
// display.innerText+=0;
// var count = 0;
// display.addEventListener('mouseover', function(){
//     display.style.outline ="blue";
// } );

// display.addEventListener('pointerout', function(){
//     display.innerText+="";
//     // console.log('button text is', button);
// });




// for(var i = 0; buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//         var value = this.getAttribute('data-value');  //ask
//          console.log(value);
//         if(value =='+'){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 display.innerText+=value;
//             }
//         }else if(value =='='){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 var result = eval(display.textContent);
//                 display.innerText+=result;
//             }
//         }else if(value =='-'){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 display.innerText+=value;
//             }
//         }else if(value =='*'){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 display.innerText+=value;
//             }
//         }else if(value =='/'){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 display.innerText+=value;
//             }
//         }else if(value =="%"){
//             if(display.textContent ==""){
//                 display.innerText+="Invalid Input !!"
//             }else{
//                 display.innerText+=value;
//             }
//         }else if(value == 'AC'){
//             display.innerText="";
//         }else if(value == "+/-"){
//             count++;
//             if(count == 1){
//                 display.innerText += "+";
//             }else{
//                 display.innerText += "-";
//                 count = 0;
//             }
//         }else{
//             display.innerText += value;
//         }
//         //console.log('button text is', button);
//     });
// }








// // var value = this.getAttribute('data-value');
// // if(value=='+'){  // if an operator is clicked
// //    operator == '+';
// //    operand1 = parseFloat(display.textContent);
// // }else if(value == '='){
// //     operand2 = parseFloat(display.textContent);
// //     var result = eval(display.textContent);
// //    display.innerText = result;
// // }else{
   
// //    display.innerText += value;
// // }



var buttons = document.getElementsByClassName('button');
var display =document.getElementById('inputNo');
display.innerText+=0;
var count = 0;
display.addEventListener('mouseover' , function(){
    display.style.outline ="blue";
});
display.addEventListener('pointerout' , function(){
    display.innerText+="";
})

for(var i = 0 ;buttons.length ; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');  // ask
        if(value == '+'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;   // represent add
            }
        }else if(value == '='){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                var result = eval(display.textContent);   // string to number == evaluate(eval)
                display.innerText =result;
            }
        }else if(value == '-'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value == '*'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value == '/'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value =="%"){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value =='AC'){
            display.innerText="";
        }else if(value =="+/-"){
            count++;
            if(count ==1){
                display.innerText+="+";
            }else{
                display.innerText+="-";
                count =0;
            }
            
        }else{
            display.innerText+=value;    //(no. input)
            console.log(value);
        }    
    });
}