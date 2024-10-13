function trackHealth() {
    const steps = document.getElementById("steps").value;
    const water = document.getElementById("water").value;
    const sleep = document.getElementById("sleep").value;

    // Store input values in local storage
    localStorage.setItem('steps', steps);
    localStorage.setItem('water', water);
    localStorage.setItem('sleep', sleep);

    // Redirect to instructions page
    window.location.href = 'instructions.html';
}
