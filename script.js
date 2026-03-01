document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FITUR SHOW/HIDE PASSWORD
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            // Cek tipe input saat ini
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Opsional: Ubah opasitas icon agar user tahu sedang aktif
            togglePasswordBtn.style.opacity = type === 'text' ? '0.5' : '1';
        });
    }

    // 2. PENANGANAN FORM (LOGIN & SIGNUP)
    const forms = ['myForm', 'mySignupForm', 'myTutorForm'];

    forms.forEach(formId => {
        const formElement = document.getElementById(formId);
        
        if (formElement) {
            formElement.addEventListener('submit', (e) => {
                e.preventDefault(); // Mencegah reload halaman

                // Mengambil data dari input
                const email = formElement.querySelector('#email')?.value.trim();
                const password = formElement.querySelector('#password')?.value;
                const name = formElement.querySelector('#name')?.value; // Hanya ada di signup student
                const remember = formElement.querySelector('#remember')?.checked;

                // Validasi sederhana sebelum lanjut
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

                // Validasi nama jika ada (signup student)
                if (formElement.querySelector('#name')) {
                    if (!name || !name.trim()) {
                        alert('Nama tidak boleh kosong.');
                        return;
                    }
                }

                // Logika sederhana untuk simulasi
                console.log(`--- Data dari ${formId} ---`);
                if (name) console.log("Nama:", name);
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("Remember Me:", remember);

                // Pesan sukses berbeda berdasarkan jenis form
                if (formId === 'myForm') {
                    // login - gunakan nama jika tersedia, else pakai email
                    const displayName = name || email || 'User';
                    alert(`Login Berhasil! Selamat datang kembali, ${displayName}.`);
                } else if (formId === 'mySignupForm' || formId === 'myTutorForm') {
                    alert('Sign up berhasil!');
                } 
            });
        }
    });
});