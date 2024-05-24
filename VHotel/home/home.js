const image = document.querySelector(".memberPic");
const images = ["../res/Home/Member1.jpg", "../res/Home/Member2.jpg", "../res/Home/Member3.jpg"]
var start=1
function change(){
    image.style.opacity=0.5
    setTimeout(()=>{
        image.src=images[start]
        start++;
        if(start>2){
            start=0;
        }
        image.style.opacity=1;
    }, 300)
    setTimeout(change, 3000)
}
change();