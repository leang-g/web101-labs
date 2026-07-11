document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const numberInput = document.getElementById('numberInput');
    const convertBtn = document.getElementById('convertBtn');
    const outputArea = document.getElementById('output');

    // Map digits to their string equivalent
    const digitMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    };

    /**
     * Converts a string of digits into a concatenated string of English words.
     * @param {string} numString - The string of numbers to convert.
     * @returns {string} The resulting word string.
     */
    function convertNumberToString(numString) {
        // Split the string into an array of characters, map each digit to its
        // word from the digitMap, and join them into a single string.
        return numString.split('').map(digit => digitMap[digit]).join('');
    }

    // Function to handle the conversion logic
    function handleConversion() {
        const inputValue = numberInput.value.trim();

        // --- Validation ---
        // 1. Check if the input is empty
        if (inputValue === '') {
            outputArea.textContent = 'Please enter a number.';
            return;
        }

        // 2. Check if the input contains only digits using a regular expression
        if (!/^[0-9]+$/.test(inputValue)) {
            outputArea.textContent = 'Invalid input. Please use digits 0-9 only.';
            return;
        }

        // --- Conversion and Output ---
        outputArea.textContent = convertNumberToString(inputValue);
    }

    // Add a click event listener to the button
    convertBtn.addEventListener('click', handleConversion);
});