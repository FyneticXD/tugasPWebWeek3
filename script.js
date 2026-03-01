document.addEventListener('DOMContentLoaded', () => {
    
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
          
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
                  
            togglePasswordBtn.style.opacity = type === 'text' ? '0.5' : '1';
        });
    }

    const forms = ['myForm', 'mySignupForm', 'myTutorForm'];

    forms.forEach(formId => {
        const formElement = document.getElementById(formId);
        
        if (formElement) {
            formElement.addEventListener('submit', (e) => {
                e.preventDefault(); 

                const email = formElement.querySelector('#email')?.value.trim();
                const password = formElement.querySelector('#password')?.value;
                const name = formElement.querySelector('#name')?.value; 
                const remember = formElement.querySelector('#remember')?.checked;

                
                if (!email) {
                    alert('Email harus diisi!');
                    return;
                }
                if (!password) {
                    alert('Password tidak boleh kosong.');
                    return;
                }
                if (password.length <= 8) {
                    alert('Password harus lebih dari 8 karakter.');
                    return;
                }

                
                if (formElement.querySelector('#name')) {
                    if (!name || !name.trim()) {
                        alert('Nama tidak boleh kosong.');
                        return;
                    }
                }
      
                console.log(`--- Data dari ${formId} ---`);
                if (name) console.log("Nama:", name);
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("Remember Me:", remember);

                
                if (formId === 'myForm') {
                    const displayName = name || email || 'User';
                    alert(`Login Berhasil! Selamat datang kembali, ${displayName}.`);
                } else if (formId === 'mySignupForm' || formId === 'myTutorForm') {
                    alert('Sign up berhasil!');
                } 
            });
        }
    });
});
