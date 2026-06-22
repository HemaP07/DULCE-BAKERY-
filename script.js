const favBtns = document.querySelectorAll(".fav-btn");

favBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        if(btn.innerText === "♡"){
            btn.innerText = "♥";
        }else{
            btn.innerText = "♡";
        }

    });
});
const subscribeBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

if(subscribeBtn && emailInput){
    subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value;

    if(email.includes("@")){
        alert("Subscribed Successfully 🎉");
    }else{
        alert("Enter a valid email");
    }});
}
const btn = document.getElementById("themeBtn");
if(btn){
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}