function addTask() {
    let in1 = document.querySelector(".input1");
    let in2 = document.querySelector(".input2");
    let in3 = document.querySelector(".input3");
    let i1 = in1.value;
    let i2 = in2.value;
    let i3 = in3.value;
    if (!i1 || !i2 || !i3) {
        alert("Pls fill in all fields.");
        return;
    }
    let input1 = document.querySelector(".info1");
    let input2 = document.querySelector(".info2");
    let input3 = document.querySelector(".info3");
    let d1 = document.createElement('div');
    d1.textContent = i1;
    let d2 = document.createElement('div');
    d2.textContent = i2;
    let d3 = document.createElement('div');
    d3.textContent = i3;
    input1.appendChild(d1);
    input2.appendChild(d2);
    input3.appendChild(d3);
    document.querySelector(".input1").value = '';
    document.querySelector(".input2").value = '';
    document.querySelector(".input3").value = '';
}