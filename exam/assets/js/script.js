const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();

    window.location.href = "show.html";
});