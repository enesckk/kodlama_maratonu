// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initMenuNavigation();
    initQuickCards();
    initLogout();
});

// Countdown Timer
function initCountdown() {
    const deadline = new Date('September 3, 2025 15:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Menu Navigation
function initMenuNavigation() {
    const menuItems = document.querySelectorAll('.menu-item a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            menuItems.forEach(menuItem => {
                menuItem.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            const text = this.textContent.trim();
            showNotification(`${text} sayfası açılıyor...`, 'info');
            
            // Navigate to actual pages
            setTimeout(() => {
                switch(text) {
                    case 'Ana Sayfa':
                        window.location.href = 'dashboard.html';
                        break;
                    case 'Oyun Teslimi':
                        window.location.href = 'submission.html';
                        break;
                    case 'Duyurular':
                        window.location.href = 'announcements.html';
                        break;
                    case 'Takım':
                        window.location.href = 'team.html';
                        break;
                    case 'Mesajlar':
                        window.location.href = 'messages.html';
                        break;
                    case 'Kurallar':
                        window.location.href = 'rules.html';
                        break;
                    case 'Takvim':
                        window.location.href = 'calendar.html';
                        break;
                    case 'Jüri & Mentörler':
                        window.location.href = 'jury.html';
                        break;
                    case 'Sponsorlar':
                        window.location.href = 'sponsors.html';
                        break;
                    case 'Hakkımızda':
                        window.location.href = 'about.html';
                        break;
                    case 'SSS':
                        window.location.href = 'faq.html';
                        break;
                    case 'İletişim':
                        window.location.href = 'contact.html';
                        break;
                    case 'Profil':
                        window.location.href = 'profile.html';
                        break;
                    default:
                        console.log(`Navigating to: ${text}`);
                }
            }, 1000);
        });
    });
}

// Quick Cards
function initQuickCards() {
    const quickCards = document.querySelectorAll('.quick-card');
    
    quickCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const link = this.querySelector('.card-link');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different card types
            switch(title) {
                case 'Proje Teslimi':
                    showNotification('Proje teslim sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'submission.html';
                    }, 1000);
                    break;
                case 'Duyurular':
                    showNotification('Duyurular sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'announcements.html';
                    }, 1000);
                    break;
                case 'Takım':
                    showNotification('Takım yönetimi sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'team.html';
                    }, 1000);
                    break;
                case 'Mesajlar':
                    showNotification('Mesajlar sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'messages.html';
                    }, 1000);
                    break;
                case 'Kurallar':
                    showNotification('Kurallar sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'rules.html';
                    }, 1000);
                    break;
                case 'Takvim':
                    showNotification('Takvim sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'calendar.html';
                    }, 1000);
                    break;
                default:
                    showNotification(`${title} sayfası açılıyor...`, 'info');
            }
        });
    });
}

// Logout Function
function initLogout() {
    const logoutBtn = document.querySelector('.logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            showNotification('Çıkış yapılıyor...', 'info');
            
            // Simulate logout process
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
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
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// Global logout function
function logout() {
    showNotification('Çıkış yapılıyor...', 'info');
    
    // Simulate logout process
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Add smooth animations for cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.quick-card, .status-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Status Cards
function initStatusCards() {
    const statusCards = document.querySelectorAll('.status-card');
    
    statusCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different status card types
            switch(title) {
                case 'Takım':
                    showNotification('Takım durumu detayları açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'team.html';
                    }, 1000);
                    break;
                case 'Yeni Mesaj':
                    showNotification('Mesajlar sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'messages.html';
                    }, 1000);
                    break;
                case 'Teslime Kalan':
                    showNotification('Proje teslim sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'submission.html';
                    }, 1000);
                    break;
                case 'Genel Durum':
                    showNotification('Profil sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 1000);
                    break;
                default:
                    showNotification(`${title} detayları açılıyor...`, 'info');
            }
        });
    });
}

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addCardAnimations, 500);
    initStatusCards();
});

// Add hover effects for better UX
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.quick-card, .status-card, .stat-card, .menu-item a');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Initialize stat cards
    initStatCards();
});

// Stat Cards (Welcome Section)
function initStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different stat card types
            switch(title) {
                case 'Takım Durumu':
                    showNotification('Takım yönetimi sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'team.html';
                    }, 1000);
                    break;
                case 'Yeni Mesajlar':
                    showNotification('Mesajlar sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'messages.html';
                    }, 1000);
                    break;
                case 'Kalan Süre':
                    showNotification('Takvim sayfası açılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'calendar.html';
                    }, 1000);
                    break;
                default:
                    showNotification(`${title} detayları açılıyor...`, 'info');
            }
        });
    });
}
