const progressBar = document.querySelector(".progress");
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
    progressBar.style.width = percentageRaised + "%";
});
