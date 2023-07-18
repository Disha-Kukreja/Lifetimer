let isDOBOpen =false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const daysEl = document.getElementById("days");
const makeTwoDigitNumber = (number) =>{
    return number > 9 ? number : `0${number}`
}

const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add("hide")
    }else {
        settingContentEl.classList.remove("hide")
    }
    isDOBOpen = !isDOBOpen;
};
const updateAge =() =>{
    const currentDate = new Date();
   const dateDiff= currentDate - dateOfBirth;
   const year = Math.floor(dateDiff/(1000*60*60*24*365));
   const month = Math.floor(dateDiff/(1000*60*60*24*365)%12);
   const days = Math.floor(dateDiff/(1000*60*60*24))%30;
   const hours = Math.floor(dateDiff/(1000*60*60))%24;
   const minutes = Math.floor(dateDiff/(1000*60))%60;
   const seconds = Math.floor(dateDiff/1000)%60;
   console.log(year,month, days, hours, minutes, seconds);
   yearEl.innerHTML=makeTwoDigitNumber(year);
   monthEl.innerHTML=makeTwoDigitNumber(month);
   daysEl.innerHTML=makeTwoDigitNumber(days);
   hoursEl.innerHTML=makeTwoDigitNumber(hours);
   minutesEl.innerHTML=makeTwoDigitNumber(minutes);
   secondsEl.innerHTML=makeTwoDigitNumber(seconds);
}

const setDOBHandler =()=>{
    const dateString = dobInputEl.value
     dateOfBirth = dateString? new Date(dateString): null;
     if (dateOfBirth) {
        initialTextEl.classList.add("hide")
        afterDOBBtnTxtEl.classList.remove("hide")
        
        setInterval(()=>updateAge(),1000)
     } else {
        initialTextEl.classList.remove("hide")
        afterDOBBtnTxtEl.classList.add("hide")
    }
}
setDOBHandler();
 





settingCogEl.addEventListener("click", toggleDateOfBirthSelector );
dobButtonEl.addEventListener("click", setDOBHandler );







 