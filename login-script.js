// Login JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initLoginForm();
    initSocialLogin();
    initPasswordToggle();
    
    // Auto focus on email field
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.focus();
    }
});

// Login Form
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Basic validation
            if (!email || !password) {
                showNotification('Lütfen tüm alanları doldurun.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                document.getElementById('email').focus();
                return;
            }
            
            // Check if email is not empty
            if (email.trim() === '') {
                showNotification('E-posta adresi boş olamaz.', 'error');
                document.getElementById('email').focus();
                return;
            }
            
            // Demo admin credentials
            const demoAdmin = {
                email: 'admin@huawei-marathon.org',
                password: 'admin123',
                role: 'admin'
            };
            
            // Demo user credentials
            const demoUser = {
                email: 'user@example.com',
                password: 'user123',
                role: 'user'
            };
            
            // Demo credentials info
            const demoInfo = document.createElement('div');
            demoInfo.className = 'demo-info';
            demoInfo.innerHTML = `
                <h3>Demo Hesaplar</h3>
                <div class="demo-credentials">
                    <div class="credential-item">
                        <strong>Admin:</strong> admin@huawei-marathon.org / admin123
                    </div>
                    <div class="credential-item">
                        <strong>Kullanıcı:</strong> user@example.com / user123
                    </div>
                </div>
            `;
            
            // Add demo info to form if not already present
            if (!document.querySelector('.demo-info')) {
                const form = document.querySelector('.login-form');
                form.parentNode.insertBefore(demoInfo, form);
            }
            
            // Check credentials
            let userRole = null;
            
            if (email === demoAdmin.email && password === demoAdmin.password) {
                userRole = 'admin';
            } else if (email === demoUser.email && password === demoUser.password) {
                userRole = 'user';
            } else {
                showNotification('E-posta veya şifre hatalı. Lütfen tekrar deneyin.', 'error');
                return;
            }
            
            // Simulate login process
            showNotification('Giriş yapılıyor...', 'info');
            
            // Simulate API call delay
            setTimeout(() => {
                const redirectUrl = userRole === 'admin' ? 'admin/dashboard.html' : 'dashboard.html';
                const roleText = userRole === 'admin' ? 'Admin Paneli' : 'Dashboard';
                
                showNotification(`Giriş başarılı! ${roleText}'ne yönlendiriliyorsunuz...`, 'success');
                
                // Store user role in sessionStorage
                sessionStorage.setItem('userRole', userRole);
                sessionStorage.setItem('userEmail', email);
                
                // Redirect based on role
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 1500);
            }, 2000);
        });
    }
}

// Social Login
function initSocialLogin() {
    const googleBtn = document.querySelector('.social-btn.google');
    const githubBtn = document.querySelector('.social-btn.github');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            showNotification('Google ile giriş yapılıyor...', 'info');
            
            // Simulate Google OAuth process
            setTimeout(() => {
                showNotification('Google ile giriş başarılı! Dashboard\'a yönlendiriliyorsunuz...', 'success');
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            }, 2000);
        });
    }
    
    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            showNotification('GitHub ile giriş yapılıyor...', 'info');
            
            // Simulate GitHub OAuth process
            setTimeout(() => {
                showNotification('GitHub ile giriş başarılı! Dashboard\'a yönlendiriliyorsunuz...', 'success');
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            }, 2000);
        });
    }
}

// Password Toggle
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
        top: 100px;
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

// Add input focus effects
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#e60012';
            this.parentElement.style.boxShadow = '0 0 0 2px rgba(230, 0, 18, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            this.parentElement.style.boxShadow = 'none';
        });
    });
});

// Add smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.login-container, .logo-section, .login-form-container, .info-section');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
