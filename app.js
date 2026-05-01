function signalChecker() {
    let color = document.getElementById("colorInput").value.toLowerCase();
    let message = document.getElementById("message");
    let red = document.getElementById("redLight");
    let yellow = document.getElementById("yellowLight");
    let green = document.getElementById("greenLight");

    if (color === "red") {
        message.innerHTML = "Must Stop";
        red.className = "light red-on";
    } else if (color === "yellow") {
        message.innerHTML = "Ready To Move";
        yellow.className = "light yellow-on";
    } else if (color === "green") {
        message.innerHTML = "Move Now";
        green.className = "light green-on";
    } else if (color === "") {
        message.innerHTML = "Please Enter Signal Color";
    } else {
        message.innerHTML = "Invalid Color";
    }
}

function resetInput() {
    document.getElementById("colorInput").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("redLight").className = "light";
    document.getElementById("yellowLight").className = "light";
    document.getElementById("greenLight").className = "light";
}
