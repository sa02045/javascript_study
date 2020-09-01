/*const increaseBtn = document.querySelector('.increase-btn');
const countNumber = document.querySelector('.count');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');

increaseBtn.addEventListener('click',function(){
    countNumber.innerHTML = parseInt(countNumber.innerHTML)+1;
});

decreaseBtn.addEventListener('click',function(){
    countNumber.innerHTML = parseInt(countNumber.innerHTML)-1;
});

resetBtn.addEventListener('click', function(){
    countNumber.innerHTML = 0;
});
*/
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click' , function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease-btn")){
            count--;
        }
        else if(styles.contains("increase-btn")){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count ;
    })
})