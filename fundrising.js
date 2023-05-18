const progressBar = document.querySelector(".progress");
const progressPersentage=document.querySelector(".percentage");
const amountRaised = document.getElementById("amount");
const donateForm = document.querySelector("form");
const donationAmount = document.getElementById("donation-amount");

let totalDonations = 0;
const fundraisingGoal = 10000;

donateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let donation = parseInt(donationAmount.value);
    totalDonations += donation;
    amountRaised.innerText = totalDonations;
    let percentageRaised = (totalDonations / fundraisingGoal) * 100;
   
    if(percentageRaised > 100){
        progressBar.style.width =100 + "%";
    }
    else{
        progressBar.style.width = percentageRaised + "%";
    }
    progressPersentage.innerHTML=percentageRaised.toFixed(1) + '%';
    
});
