const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const crackTime = document.getElementById('crack-time');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length > 6) strength++;
    if (password.length > 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 0:
            strengthBar.style.width = '0';
            strengthText.textContent = '';
            crackTime.textContent = '';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            strengthText.textContent = 'Weak';
            strengthText.className = 'strength-text strength-weak';
            crackTime.textContent = 'Less than a minute to crack';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'orange';
            strengthText.textContent = 'Medium';
            strengthText.className = 'strength-text strength-medium';
            crackTime.textContent = 'A few minutes to crack';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = 'yellow';
            strengthText.textContent = 'Strong';
            strengthText.className = 'strength-text strength-strong';
            crackTime.textContent = 'A few hours to crack';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'yellowgreen';
            strengthText.textContent = 'Very Strong';
            strengthText.className = 'strength-text strength-strong';
            crackTime.textContent = 'Several hours to crack';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = '#00ffa8';
            strengthText.textContent = 'Very Strong';
            strengthText.className = 'strength-text strength-very-strong';
            crackTime.textContent = 'Several days to crack';
            break;
    }
});
