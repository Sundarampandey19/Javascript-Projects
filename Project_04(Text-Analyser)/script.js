console.log("I love samosa")

uppercase.addEventListener("click", () => {
    console.log('Transforming to Upper-Case')
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click", () => {

    console.log('Transforming to Lower-Case')
    inpText.value = inpText.value.toLowerCase()
})

removeextraspace.addEventListener("click", () => {
    console.log('Removing Extra spaces')
    inpText.value = inpText.value.replace(/\s+/g, ' ').trim()// replace will replace all extra spaces with a single space, but it will not remove space from front and end,
    // and trim will remove the space from front and back
})

removeextralines.addEventListener("click", () => {
    console.log('Removing Extra lines')
    inpText.value = inpText.value.replace(/\n+/g, '\n').trim()// replace will replace all extra spaces with a single space, but it will not remove space from front and end,
    // and trim will remove the space from front and back
})

inpText.addEventListener("input", () => {
    charCount.innerText = inpText.value.replace(/\s+/g, '').trim().length
    if (inpText.value.trim() === '') {
        wordCount.innerText = '0';
    } else {
        wordCount.innerText = inpText.value.replace(/\s+/g, ' ').trim().split(' ').length;
    }

})  