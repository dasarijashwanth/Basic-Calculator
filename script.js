let calc = "";
let btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML == "AC"){
            calc = "";
            document.querySelector('input').value = calc ;

        }
       
        else if (event.target.innerHTML == '=') {
            calc = eval(calc);
            document.querySelector('input').value = calc;

            
        }
        else{
            calc = calc + event.target.innerHTML;
            document.querySelector('input').value = calc;
        }

    });
});


let lost = document.getElementsByClassName('in_active');
for (var i = 0; i < lost.length; i++) {
    lost[i].addEventListener('click', ()=>{
        alert('This feature is not available yet !!');
    });
}
