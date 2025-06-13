const calculate = () => {
    const subjects = ["chemistry", "hindi", "maths", "phy"];
    let values = [];
    for (let i = 0; i < subjects.length; i++) {
        let val = parseFloat(document.querySelector(`#${subjects[i]}`).value);
        values.push(val);
    }
    if (values.some(isNaN)) {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
        return;
    }

    const total = values.reduce((a, b) => a + b, 0);
    const percentage = (total / 400) * 100;
    const grade = percentage >= 80 ? "A" :
        percentage >= 60 ? "B" :
        percentage >= 40 ? "C" : "F";
    const result = percentage >= 39.5 ? "Pass" : "Fail";

    const message =
        "Out of 400 your total is " + total +
        ", percentage is " + percentage + "%, " +
        "grade is " + grade + ". You are " + result + ".";

    document.querySelector("#showdata").textContent = message;
};