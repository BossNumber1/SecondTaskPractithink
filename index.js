// implementation of movement and rotation of the ruler

dragElement(document.getElementsByClassName("ruler")[0]);

const rotationFunction = new Propeller(
    document.getElementsByClassName("ruler")[0],
    {
        inertia: 0,
    }
);

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
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
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document
    .getElementsByClassName("ruler")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "leftEdge" ||
                e.target.className !== "rightEdge") &&
            e.target.className === "imgRuler"
        ) {
            rotationFunction.stop();
            dragElement(document.getElementsByClassName("ruler")[0]);
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgRuler"
        ) {
            rotationFunction.onRotated(e);
        }
    });

// value checking implementation

const redPencilLength = 5.5;
const bluePencilLength = 2.5;
const greenPencilLength = 3.5;

let outcome = { red: "", blue: "", green: "" };

document.getElementById("RedValue").onchange = (e) => {
    if (e.target.value == redPencilLength) {
        outcome.red = "правильное";
    } else {
        outcome.red = "неправильное";
    }
};

document.getElementById("BlueValue").onchange = (e) => {
    if (e.target.value == bluePencilLength) {
        outcome.blue = "правильное";
    } else {
        outcome.blue = "неправильное";
    }
};

document.getElementById("GreenValue").onchange = (e) => {
    if (e.target.value == greenPencilLength) {
        outcome.green = "правильное";
    } else {
        outcome.green = "неправильное";
    }
};

document.getElementById("submit").onclick = (e) => {
    alert(
        "Введённые значения: для красного карандаша - " +
            outcome.red +
            ", для синего - " +
            outcome.blue +
            ", для зелёного - " +
            outcome.green
    );
};
