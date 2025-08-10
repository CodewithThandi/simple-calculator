let display = document.getElementById('display');
function appendValue(value) {
 display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace(/x/g, '*').replace(/&divide/g, '/');
        display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }


  const historyContainer = document.getElementById('history-container');
  const toggleBtn = document.getElementById('toggle-history-btn');

  toggleBtn.addEventListener('click', () => {
    if (historyContainer.style.display === 'none' || historyContainer.style.display === '') {
        historyContainer.style.display = 'block';
        toggleBtn.textContent = 'Hide History';

    } else {
        historyContainer.style.display = 'none';
        toggleBtn.textContent = 'Show History';
    }
  });