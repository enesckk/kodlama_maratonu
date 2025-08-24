// Password Toggle Function
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
}

// Google Sign Up Function
function googleSignUp() {
    // Check if Maraton ID is entered
    const marathonId = document.getElementById('marathonId').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const validMarathonId = '23785843280';
    
    if (!marathonId) {
        showNotification('Önce Maraton ID girmelisiniz.', 'error');
        document.getElementById('marathonId').focus();
        return;
    }
    
    if (marathonId !== validMarathonId) {
        showNotification('Geçersiz Maraton ID. Sadece yetkili kişiler kayıt olabilir.', 'error');
        document.getElementById('marathonId').focus();
        return;
    }
    
    if (!fullName) {
        showNotification('Ad Soyad alanı zorunludur.', 'error');
        document.getElementById('fullName').focus();
        return;
    }
    
    if (!email) {
        showNotification('E-posta adresi zorunludur.', 'error');
        document.getElementById('email').focus();
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
        document.getElementById('email').focus();
        return;
    }
    
    showNotification('Google ile kayıt başlatılıyor...', 'info');
    
    // Simulate Google OAuth process
    setTimeout(() => {
        showNotification('Google hesabınızla başarıyla kayıt oldunuz!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 2000);
}

// GitHub Sign Up Function
function githubSignUp() {
    // Check if Maraton ID is entered
    const marathonId = document.getElementById('marathonId').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const validMarathonId = '23785843280';
    
    if (!marathonId) {
        showNotification('Önce Maraton ID girmelisiniz.', 'error');
        document.getElementById('marathonId').focus();
        return;
    }
    
    if (marathonId !== validMarathonId) {
        showNotification('Geçersiz Maraton ID. Sadece yetkili kişiler kayıt olabilir.', 'error');
        document.getElementById('marathonId').focus();
        return;
    }
    
    if (!fullName) {
        showNotification('Ad Soyad alanı zorunludur.', 'error');
        document.getElementById('fullName').focus();
        return;
    }
    
    if (!email) {
        showNotification('E-posta adresi zorunludur.', 'error');
        document.getElementById('email').focus();
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
        document.getElementById('email').focus();
        return;
    }
    
    showNotification('GitHub ile kayıt başlatılıyor...', 'info');
    
    // Simulate GitHub OAuth process
    setTimeout(() => {
        showNotification('GitHub hesabınızla başarıyla kayıt oldunuz!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 2000);
}

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    // Auto focus on Maraton ID field
    const marathonIdField = document.getElementById('marathonId');
    if (marathonIdField) {
        marathonIdField.focus();
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const marathonId = document.getElementById('marathonId').value.trim();
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!marathonId) {
                showNotification('Maraton ID alanı zorunludur.', 'error');
                return;
            }
            
            // Maraton ID validation - only allow specific ID
            const validMarathonId = '23785843280';
            if (marathonId !== validMarathonId) {
                showNotification('Geçersiz Maraton ID. Sadece yetkili kişiler kayıt olabilir.', 'error');
                document.getElementById('marathonId').focus();
                return;
            }
            
            if (!fullName) {
                showNotification('Ad Soyad alanı zorunludur.', 'error');
                return;
            }
            
            if (!email) {
                showNotification('E-posta adresi zorunludur.', 'error');
                document.getElementById('email').focus();
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                document.getElementById('email').focus();
                return;
            }
            
            if (password.length < 6) {
                showNotification('Şifre en az 6 karakter olmalıdır.', 'error');
                return;
            }
            
            if (!terms) {
                showNotification('Kullanım şartlarını kabul etmelisiniz.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Kayıt işlemi başlatılıyor...', 'info');
            
            // Here you would typically send the data to your backend
            setTimeout(() => {
                showNotification('Hesabınız başarıyla oluşturuldu!', 'success');
                // Redirect to login page after successful registration
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }, 2000);
        });
    }
    

});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Inter', sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Input focus effects
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-group input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Smooth animations for form elements
document.addEventListener('DOMContentLoaded', function() {
    const formElements = document.querySelectorAll('.form-group, .form-options, .register-btn, .social-btn');
    
    formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
