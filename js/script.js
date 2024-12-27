document.getElementById("bmiForm").addEventListener('submit', function (oops) {
    oops.preventDefault(); //prevents reloading of page
    const gender = document.getElementById('gender').value;
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinch = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if (weight < 0 || heightfeet < 0 || heightinch < 0) {
        alert("Input positive values only");
    }
    else if ((heightfeet < 4 || heightfeet > 8) && (weight < 25.4 || weight > 317.5)) {
        alert("Height must be between 4 feet and 8 feet");
        alert("Weight must be between 25.4 kilograms and 317.5 kilograms");
    }
    else if (heightfeet < 4 || heightfeet > 8) {
        alert("Height must be between 4 feet and 8 feet");
    }
    else if (weight < 25.4 || weight > 317.5) {
        alert("Weight must be between 25.4 kilograms and 317.5 kilograms");
    }
    else if (gender && heightfeet && weight) {
        const heightmeters = ((heightfeet * 12) + heightinch) * 0.0254; //meters height
        const bmi = weight / (heightmeters * heightmeters);
        console.log(bmi);
        const result = document.getElementById('result');
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else if (bmi >= 30) {
            category = "Obese";
        }
        let resultmessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultmessage += 'Category: ' + category;
        result.innerHTML = resultmessage;
    }

})
