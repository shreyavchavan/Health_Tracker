window.onload = function() {
    const steps = localStorage.getItem('steps');
    const water = localStorage.getItem('water');
    const sleep = localStorage.getItem('sleep');

    let instructions = '';

    // Instructions based on user input
    if (steps < 10000) {
        instructions += 'You should aim for at least 10,000 steps a day for optimal health.<br>';
    }
    if (water < 2) {
        instructions += 'Make sure to drink at least 2 liters of water daily to stay hydrated.<br>';
    }
    if (sleep < 7) {
        instructions += 'Try to get at least 7 hours of sleep for better health and recovery.<br>';
    }

    // Display the instructions
    document.getElementById('instructions').innerHTML = instructions || 'Great job! You are on track with your health!';
};

// Function to go back to the main page
function goBack() {
    window.location.href = 'index.html';
}
