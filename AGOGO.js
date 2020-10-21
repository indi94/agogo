   let countdown;
   const timerDisplay = document.querySelector('.display_time-left') ;
//    const displayEndTime = document.querySelectorAll('.display_end-time');
   const EndTime = document.querySelectorAll('.display_end-time');
   const buttons = document.querySelectorAll('[data-time]');

console.log(EndTime)

   function timer(seconds) {

    clearInterval(countdown);
       const now = Date.now();
       const then = now + seconds * 1000;
       displayTimeLeft(seconds);
       displayEndTime(then);

      countdown =  setInterval(() =>{
           const secondsLeft = Math.round((then - Date.now())/1000);
           console.log(secondsLeft);
           //arreter
           displayTimeLeft(secondsLeft);
           if(secondsLeft <= 0){
               clearInterval(countdown);
               return;
           }
       },1000); 
   }

function displayTimeLeft(seconds) {
//    clearInterval(countdown);   

   const minutes = Math.floor(seconds / 60);
   const remainderseconds = seconds % 60;
   const display = `${minutes}:${remainderseconds < 10 ? '0' : '' }${remainderseconds}`;
   document.title = display;
   timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour -12 : hour;
    const minutes = end.getMilliseconds();
    EndTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds)

} 



buttons.forEach(buttons => buttons.addEventListener('click',startTimer));


document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});

    