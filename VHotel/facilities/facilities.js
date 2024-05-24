var infoBtns = document.querySelectorAll(".moreInfo")
var dets = document.querySelectorAll(".details")
var containers = document.querySelectorAll(".container")

infoBtns.forEach(function(infoBtn){
    infoBtn.addEventListener("click", display)
})
containers.forEach(function(container){
    container.addEventListener("mouseleave", reset)
})

function display(){
    var btnIndex=Array.from(infoBtns).indexOf(this)
    var currDet=dets[btnIndex]
    if(this.classList.contains("active")){
        this.classList.remove("active");
        this.innerHTML="See Details"
        currDet.classList.remove("active")
    }
    else{
        this.classList.add("active");
        this.innerHTML="See Less";
        currDet.classList.add("active")
    }
}

function reset(){
    var contIndex=Array.from(containers).indexOf(this)
    var currDet=dets[contIndex]
    var currBtn=infoBtns[contIndex]
    currBtn.classList.remove("active");
    currBtn.innerHTML="See Details"
    currDet.classList.remove("active")
}