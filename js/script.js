// videos section switch content 
let switchers = document.querySelectorAll(".switchers li")
let content = Array.from(document.querySelectorAll(".preview div")) 

// 1
switchers.forEach((li)=>{
    li.addEventListener("click",switchContent)
})

// 2
function switchContent(){
    switchers.forEach((e)=>{
        e.classList.remove("active")
        this.classList.add("active")
    })
    content.forEach((e)=>{
        e.classList.remove("active")
        document.querySelectorAll(this.dataset.content).forEach((el)=>{
            el.classList.add("active")
        })
    })
}


// events section countdown timer


let countdownDate = new Date("may 31,2022 23:59:59").getTime()


let counter = setInterval(()=>{
    // now date
    let dateNow = new Date().getTime()
    // difference between countdown date and date now
    let diffDate = countdownDate - dateNow
    // days
    let days = Math.floor(diffDate /( 1000 * 60 * 60 * 24 ))
    document.querySelector(".days").innerHTML = days
    // hours
    let hrs = Math.floor(diffDate % (1000 * 60 * 60 * 24)/(1000*60*60))
    document.querySelector(".hrs").innerHTML = hrs
    // minutes
    let mins = Math.floor(diffDate % (1000*60*60)/(1000*60))
    document.querySelector(".mins").innerHTML = mins
    // seconds
    let secs = Math.floor(diffDate % (1000 * 60)/ 1000)
    document.querySelector(".secs").innerHTML = secs
    if(diffDate<0){
        clearInterval(counter)
    }
},1000)