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
