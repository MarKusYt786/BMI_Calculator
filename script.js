function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    let result = '';

    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obesity';
    }

    const resultElement = document.getElementById('result');
    const imageElement = document.getElementById('bmiImage');

    resultElement.innerText = `Your BMI is ${bmi.toFixed(2)} (${result})`;
    resultElement.classList.remove('result-hidden');
    resultElement.classList.add('result-shown');

    imageElement.classList.remove('image-hidden');
    imageElement.classList.add('image-shown');
}
