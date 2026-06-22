document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the page from refreshing on submit
    event.preventDefault();

    // Grab form inputs
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const loginCard = document.getElementById('loginCard');

    // Simple frontend check
    if (!email || !password) {
        // Trigger a shake animation if fields are empty
        loginCard.classList.add('shake');
        setTimeout(() => loginCard.classList.remove('shake'), 500);
        return;
    }

    // Print values to the developer console for testing
    console.log('Logging in with:', { email, password, rememberMe });
    
    // Simulate successful login
    alert('Sign in attempted for: ' + email);
});
