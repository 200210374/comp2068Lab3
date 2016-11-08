//Brandon Roy




function Calculator() {


}
    var a = Number(prompt("first number?"));
    var b = Number(prompt("second number?"));
    var operation = prompt("add, subtract or multiply");
    var total = a + b;

    var subtotal = a - b;

    var multTotal = a * b;


    if (operation === "add") {
        alert(a + b);

    }

    if (operation === "subtract") {
        alert(subtotal);

    }
    if (operation === "multiply") {
        alert(multTotal);

    }

    else {

        alert("Run again you typed something incorrect");


    }

