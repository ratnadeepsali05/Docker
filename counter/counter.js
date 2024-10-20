let counterElement = document.getElementById('counterValue');

function onIncrement() {
    let previousCounterValue = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue + 1;
    counterElement.textContent = updatedCounterValue;
    
    updateCounterColor(updatedCounterValue);
}

function onDecrement() {
    let previousCounterValue = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue - 1;
    counterElement.textContent = updatedCounterValue;

    updateCounterColor(updatedCounterValue);
}

function onReset() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    counterElement.style.color = 'black';
}

function updateCounterColor(value) {
    if (value > 0) {
        counterElement.style.color = 'green';
    } else if (value < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}