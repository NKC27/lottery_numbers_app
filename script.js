// Function to generate random numbers for EuroMillions
function generateEuroMillions() {
  const mainNumbers = generateUniqueNumbers(5, 1, 50); // 5 main numbers between 1 and 50
  const luckyNumbers = generateUniqueNumbers(2, 1, 12); // 2 Lucky Star numbers between 1 and 12
  return { mainNumbers, luckyNumbers };
}

// Function to generate random numbers for Lotto
function generateLotto() {
  const mainNumbers = generateUniqueNumbers(6, 1, 59); // 6 numbers between 1 and 59
  return { mainNumbers, luckyNumbers: [] }; // No Lucky Numbers in Lotto
}

// Function to generate random numbers for Thunderball
function generateThunderball() {
  const mainNumbers = generateUniqueNumbers(5, 1, 39); // 5 numbers between 1 and 39
  const luckyNumbers = generateUniqueNumbers(1, 1, 14); // 1 Thunderball number between 1 and 14
  return { mainNumbers, luckyNumbers };
}

// Function to generate random numbers for HotPicks
function generateHotPicks() {
  const mainNumbers = generateUniqueNumbers(5, 1, 49); // 5 numbers between 1 and 49
  return { mainNumbers, luckyNumbers: [] }; // No Lucky Numbers in HotPicks
}

// Function to generate unique random numbers within a range
function generateUniqueNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

// Display the generated numbers in the UI
function displayNumbers(numbers) {
  const mainNumbersDiv = document.querySelector('#main-numbers span');
  const luckyNumbersDiv = document.querySelector('#lucky-numbers span');
  const luckyNumbersContainer = document.getElementById('lucky-numbers');

  // Show main numbers
  mainNumbersDiv.textContent = numbers.mainNumbers.join(', ');

  // Show lucky numbers (if any)
  if (numbers.luckyNumbers.length > 0) {
    luckyNumbersDiv.textContent = numbers.luckyNumbers.join(', ');
    luckyNumbersContainer.classList.remove('hidden');
  } else {
    luckyNumbersContainer.classList.add('hidden');
  }

  // Reveal the result container
  document.getElementById('result').classList.remove('hidden');
}

// Event Listeners for each button
document.getElementById('euromillions-btn').addEventListener('click', () => {
  const numbers = generateEuroMillions();
  displayNumbers(numbers);
});

document.getElementById('lotto-btn').addEventListener('click', () => {
  const numbers = generateLotto();
  displayNumbers(numbers);
});

document.getElementById('thunderball-btn').addEventListener('click', () => {
  const numbers = generateThunderball();
  displayNumbers(numbers);
});

document.getElementById('hotpicks-btn').addEventListener('click', () => {
  const numbers = generateHotPicks();
  displayNumbers(numbers);
});
