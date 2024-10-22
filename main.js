let horizonText = document.getElementById("horizon-text")
let horizonRange = document.getElementById("horizon-range")
let verticalText = document.getElementById("vertical-text")
let verticalRange = document.getElementById("vertical-range")
let blurText = document.getElementById("blur-text")
let blurRange = document.getElementById("blur-range")
let spreadText = document.getElementById("spread-text")
let spreadRange = document.getElementById("spread-range")
let shadowCoText = document.getElementById("shadow-color-text")
let shadowCoCo = document.getElementById("shadow-color-color")
let backgroundCoText = document.getElementById("background-color-text")
let backgroundCoCo = document.getElementById("background-color-color")
let boxCoCo = document.getElementById("box-color-color")
let boxCoText = document.getElementById("box-color-text")
let opacityText = document.getElementById("opacity-text")
let opacityRange = document.getElementById("opacity-range")
let inset = document.getElementById("inset")
let big = document.getElementById("big")
let box = document.getElementById("box")
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let left = document.getElementById("left")
let right = document.getElementById("right")


console.log(boxCoCo.value)


window.addEventListener("load", function(){
    
    horizonRange.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        horizonText.value = w

        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }

    })

    verticalRange.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        verticalText.value = x
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    blurRange.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        blurText.value = y
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    spreadRange.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        spreadText.value = z
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })
    shadowCoCo.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        shadowCoText.value = c
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    
    opacityRange.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
        opacityText.value = a
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    inset.addEventListener("input", function(){
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
      
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    left.addEventListener("click", function(){
        inset.value = 0
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
      
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    right.addEventListener("click", function(){
        inset.value = 1
        let w = horizonRange.value
        let x = verticalRange.value
        let y = blurRange.value
        let z = spreadRange.value
        let c = shadowCoCo.value
        let b = opacityRange.value
        let a = "0." + b
        if(b == 100){
            a = 1
        }else if(b < 10){
            a = "0.0" +b
        }

        let red = parseInt(c.slice(1, 3), 16);
        let green = parseInt(c.slice(3, 5), 16);
        let blue = parseInt(c.slice(5, 7), 16);
        
        console.log(c)
      
        if(inset.value == 0){
            let shad = box.style.boxShadow = `${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }else{
            let shad = box.style.boxShadow = `inset ${w}px ${x}px ${y}px ${z}px rgba(${red},${green},${blue},${a})`
            one.textContent = "-webkit-box-shadow: " + shad + ";"
            two.textContent = "-moz-box-shadow: " + shad + ";"
            three.textContent = "box-shadow: " + shad + ";"
        }
    })

    backgroundCoCo.addEventListener("input", function(){
        let w = backgroundCoCo.value
        backgroundCoText.value = w
        big.style.backgroundColor = w
        
    })

    backgroundCoText.addEventListener("input", function(){
        let w = backgroundCoText.value
        backgroundCoCo.value = w
        big.style.backgroundColor = w
        
    })


    boxCoCo.addEventListener("input", function(){
        let w = boxCoCo.value
        boxCoText.value = w
        box.style.backgroundColor = w
        
    })

    boxCoText.addEventListener("input", function(){
        let w = boxCoText.value
        boxCoCo.value = w
        box.style.backgroundColor = w
        
    })
    

})