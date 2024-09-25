function calculate() {
    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    // calculating bmi
    const bmi = weight / (height * height);
    
    // Determine the result category
    let resultText;
    if (bmi < 18.5) {
        resultText = ` You are Underweight.BMI is : ${bmi.toFixed(2)}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = `You are Normal weight.\n BMI is : ${bmi.toFixed(2)}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = `You are Overweight.\n BMI is : ${bmi.toFixed(2)}`;
    } else {
        resultText = `Obesity, BMI: ${bmi.toFixed(2)}`;
    }

    // Display the result
    document.getElementById('result').innerHTML = resultText;
}