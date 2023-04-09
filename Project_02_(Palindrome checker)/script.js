const txtInput = document.querySelector(".inputs input"),
    checkBtn = document.querySelector(".inputs button"),
    info = document.querySelector(".info");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    info.style.display = "block";

    if (reverseInput != filterInput) {
        return info.innerHTML = `No,<span> ' ${txtInput.value} ' </span>is not a palindrome!`;
    }
    info.innerHTML = `Yes ,<span> ' ${txtInput.value} ' </span>is  a palindrome!`;


});

txtInput.addEventListener("keyup", (event) => {
    //this will remose specaial character and spaces
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");

});

