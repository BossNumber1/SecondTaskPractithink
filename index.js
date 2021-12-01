// dragElement(document.getElementsByClassName("ruler")[0]);

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    if (localStorage.getItem("revolves") === "false") {
        element.onmousedown = dragMouseDown;
        // } else {
        //     console.log("dviz");
        //     element.onmousedown = null;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// let leftEdge = document.getElementsByClassName("leftEdge")[0];
// let rightEdge = document.getElementsByClassName("rightEdge")[0];

// leftEdge.onmousedown = function () {
//     localStorage.setItem("revolves", true);

//     leftEdge.onmousemove = function () {
//         new Propeller(document.getElementsByClassName("ruler")[0], {
//             inertia: 0,
//         });
//     };
// };

// rightEdge.onmousedown = function () {
//     localStorage.setItem("revolves", true);

//     rightEdge.onmousemove = function () {
//         new Propeller(document.getElementsByClassName("ruler")[0], {
//             inertia: 0,
//         });
//     };
// };

document
    .getElementsByClassName("ruler")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "leftEdge" ||
                e.target.className !== "rightEdge") &&
            e.target.className === "imgRuler"
        ) {
            // e.target.addEventListener("mousemove", (e) => {
            localStorage.setItem("revolves", "false");

            dragElement(document.getElementsByClassName("ruler")[0]);

            // });
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgRuler"
        ) {
            // e.target.addEventListener("mousedown", (e) => {
            localStorage.setItem("revolves", "true");

            if (localStorage.getItem("revolves") === "true") {
                // new Propeller(document.getElementsByClassName("ruler")[0], {
                //     inertia: 0.1,
                //     onRotate: function () {
                //         console.log("ang =", this.angle);
                //     },
                //     onStop: function () {
                //         alert("Stopped3");
                //     },
                //     // onDragStart: () =>
                //     //     document.getElementById("ruler").style.position = ""
                // });

                new Propeller(document.getElementsByClassName("ruler")[0], {
                    inertia: 0.1,
                    // onStop: function () {
                    //     alert("Stopped 4");
                    // },
                }).stop();

                // console.log("ankl =", prop.angle);
            }

            // e.target.removeEventListener("mousemove");
            // });
        }
    });
