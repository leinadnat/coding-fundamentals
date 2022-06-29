const headerMenu = document.querySelector(".header")
const styleCss = document.styleSheets[1]
console.log(styleCss)
console.log(headerMenu)
document.addEventListener('scroll', e => {
    if (window.scrollY >= 500) {
        styleCss.cssRules[0].style.position = "" 
    
    } else {
        styleCss.cssRules[0].style.position = "sticky" 
    }
} )
document.addEventListener("mousemove", e => {
    if (e.clientY <= 100) {
        
        styleCss.cssRules[0].style.position = "sticky"  
    } else {
        
        styleCss.cssRules[0].style.position = "" 
    }
})