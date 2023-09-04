const observer = new IntersectionObserver((entries)=>{
    entries.forEach(element => {
        console.log(element)
        if (element.isIntersecting){
            element.target.classList.add('show')
        }
    });
})

const hiddenElements = document.querySelectorAll(".container");
hiddenElements.forEach((elem) => observer.observe(elem))


const dots_div = document.getElementsByClassName("dots_image_div")
const dots_img =document.getElementsByClassName("dots_image")
console.log(dots_img[0].offsetWidth)
dots_div[0].style.maxWidth = dots_img[0].offsetWidth +"px"