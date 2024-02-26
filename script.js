let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('screen').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('screen').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('screen').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('screen').value = displayValue;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById('screen').value = displayValue;
}

function calculateCubeRoot() {
    displayValue = Math.cbrt(eval(displayValue));
    document.getElementById('screen').value = displayValue;
}
