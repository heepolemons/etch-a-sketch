let error = document.querySelector("#error");
let pixelGrid = document.querySelector("#pixelGrid");

let height = document.querySelector("#height");
let width = document.querySelector("#width");

let newSketch = document.querySelector("#newSketch");

function adjustGrid() {
    /*
    This function fills out the pixel grid with pixels based on the inputted dimensions.
    */
    let y = document.querySelector("#height").value;
    let x = document.querySelector("#width").value;

    if (x > 100 || y > 100) {
        let errorText = document.createElement("p");
        errorText.textContent = "Cannot create canvas. Either the canvas is too big or the values aren't valid.";
        error.textContent = "";
        error.appendChild(errorText);
    } else {
        pixelGrid.setAttribute("style", `height: ${y}rem; width:${x}rem`);

        i = x * y;

        while (i > 0) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener("click", () => {
                pixel.setAttribute("class", "drawnPixel");
            });

            pixelGrid.appendChild(pixel);
    
            i--;
        }
    }
}

newSketch.addEventListener("click", () => {
    pixelGrid.textContent = '';
    
    adjustGrid();
})