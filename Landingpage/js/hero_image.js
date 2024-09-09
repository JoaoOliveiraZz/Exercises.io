/**
 * 
 * @param {HTMLImageElement} image 
 */
const fetchSvg = (image) => {
    fetch(image.src)
        .then(response => response.text())
            .then((response) => {
                const newElement = document.createElement('div')
                newElement.innerHTML = response

                const inlineSvg = newElement.getElementsByTagName('svg')

                inlineSvg[0].setAttribute("class", "hero-image")
                inlineSvg[0].style.height = "100%"
                image.parentNode.replaceChild(inlineSvg[0], image)
                
                return true
            })
}



