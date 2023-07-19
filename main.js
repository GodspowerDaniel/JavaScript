let date = new Date();
const clickToCheck = document.getElementById('check');

const otpDisplay = document.getElementById('otp-popup');
const generateOtp = document.getElementById('generate');

const result = document.getElementById('result');

let staticDate = new Date(2005, 1, 11);


document.getElementById('new_date').textContent = date;
document.getElementById('new_date').style.fontWeight = 'bold'

document.getElementById('new_datee').textContent = staticDate;
document.getElementById('new_datee').style.fontWeight = 'bold'

clickToCheck.addEventListener('click', function(){
    // alert('its correct');
    const enterAmount = parseInt(document.getElementById('money').value);

if (enterAmount >= 5000){
    result.textContent = 'You can get just a bottle, Proceed to Checkout session Now!';
} else {
    result.innerHTML = 'You do not have enough fund, make it 5k and come back later';
}
});

generateOtp.addEventListener('click', function(){
    otpDisplay.textContent = Math.floor(Math.random() * 1000000);
});