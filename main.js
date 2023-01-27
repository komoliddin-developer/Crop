let navMenu = document.querySelector(".nav__menu")
let navList = document.querySelector(".nav__list")

navMenu.addEventListener("click", ()=> {
    navList.classList.toggle("active")
})


let transTxt = document.querySelectorAll(".trans__txt")
transTxt.forEach(transTxts => {
    transTxts.addEventListener("click", () => {
        transTxts.classList.toggle("trans__txt-active")
    })
});

let transCard = document.querySelectorAll(".trans__card")
transCard.forEach(transCards => {
    function anime(entries) {
        // console.log(entries);
        if (entries[0].isIntersecting) {
            transCards.classList.add("trans__card-activ")
        } else {
            transCards.classList.remove("trans__card-activ")
        }
    }
    
    let transCard = new IntersectionObserver(anime, {threshold: 0.5})
    transCard.observe(transCards)   
});

let offerTxt = document.querySelector(".offer__txt")
offerTxt.addEventListener("click", () => {
    offerTxt.classList.toggle("trans__txt-active")
})

let makesTxt = document.querySelectorAll(".makes__txt")
makesTxt.forEach(makesTxts => {
    makesTxts.addEventListener("click", () => {
        makesTxts.classList.toggle("makes__txt-active")
    })
});