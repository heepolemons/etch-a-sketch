/*
Main Interface
*/

// User Input (Dimensions)
let height = document.querySelector("#height");
let width = document.querySelector("#width");

// Making the Pixel Canvas
let error = document.querySelector("#error");
let newSketch = document.querySelector("#newSketch");
let pixelGrid = document.querySelector("#pixelGrid");

/*
Creates Pixel Canvas
*/
function adjustGrid() {
    // User Input (Dimensions)
    let y = document.querySelector("#height").value;
    let x = document.querySelector("#width").value;

    // Creates Canvas or Throws an Error
    if (x > 100 || y > 100 || x < 0 || y < 0) {
        let errorText = document.createElement("p");
        errorText.textContent = "Cannot create canvas. Either the canvas is too big or the values aren't valid.";
        error.textContent = "";
        error.appendChild(errorText);
    } else {
        error.textContent = "";
        pixelGrid.setAttribute("style", `height: ${y}rem; width:${x}rem`);

        i = x * y;

        while (i > 0) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener("click", () => {
                pixel.setAttribute("class", "drawnPixel");
            });
            pixel.addEventListener("dblclick", () => {
                pixel.setAttribute("class", "pixel");
            });

            pixelGrid.appendChild(pixel);
    
            i--;
        }
    }
}

/* 
Event Listener for "New Sketch!" Button
*/

newSketch.addEventListener("click", () => {
    pixelGrid.textContent = '';
    
    adjustGrid();
})