/*
01. ******************select html  element by js*************************** 
    document.getElementById
    document.getElementsByClassName
    document.getElementsByTagName
    document.getElementsByName
    document.querySelector
    document.querySelectorAll

02. ******************change html content && style*************************** 
    elements.innerHTML
    elements.innerText
    elements.style.cssText
*/

/***************************************************************  */

let subImgs = document.querySelectorAll(" .sub-imgs img  ");
let mainImg = document.getElementById("mainImg");

for ( let i=0 ; i<subImgs.length ; i++ ){
    subImgs[i].addEventListener( "click", function(){
        let mainSrc = mainImg.getAttribute("src");
        let imgSrc= subImgs[i].getAttribute("src")


        mainImg.setAttribute("src" , imgSrc )
        subImgs[i].setAttribute("src", mainSrc);
        
    })
}
