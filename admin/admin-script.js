// Admin Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    initNavigation();
    initUserInfo();
    initQuickActions();
    loadDashboardData();
});

// Check Authentication
function checkAuth() {
    const userRole = sessionStorage.getItem('userRole');
    const userEmail = sessionStorage.getItem('userEmail');
    
    if (!userRole || !userEmail) {
        window.location.href = '../login.html';
        return;
    }
    
    if (userRole !== 'admin') {
        alert('Bu sayfaya erişim yetkiniz yok!');
        window.location.href = '../dashboard.html';
        return;
    }
}

// Initialize Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
}

// Show Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Initialize User Info
function initUserInfo() {
    const userEmail = sessionStorage.getItem('userEmail');
    const userEmailElement = document.getElementById('userEmail');
    
    if (userEmailElement && userEmail) {
        userEmailElement.textContent = userEmail;
    }
}

// Initialize Quick Actions
function initQuickActions() {
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            
            switch(action) {
                case 'Yeni Kullanıcı Ekle':
                    showNotification('Yeni kullanıcı ekleme özelliği yakında eklenecek!', 'info');
                    break;
                case 'Rapor İndir':
                    showNotification('Rapor indirme özelliği yakında eklenecek!', 'info');
                    break;
                case 'Duyuru Gönder':
                    showNotification('Duyuru gönderme özelliği yakında eklenecek!', 'info');
                    break;
                case 'Ayarları Düzenle':
                    showNotification('Ayarlar düzenleme özelliği yakında eklenecek!', 'info');
                    break;
                default:
                    showNotification('Bu özellik yakında eklenecek!', 'info');
            }
        });
    });
}

// Logout Function
function logout() {
    // Clear session storage
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userEmail');
    
    // Show notification
    showNotification('Çıkış yapılıyor...', 'info');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = '../login.html';
    }, 1000);
}

// Show Notification
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

// Load Dashboard Data
function loadDashboardData() {
    const data = getDemoData();
    updateStats(data.stats);
    updateRecentApplications(data.applications);
    updateQuickActions();
}

// Get Demo Data
function getDemoData() {
    const storedData = localStorage.getItem('demoData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return demoData; // Fallback to demo data if localStorage is empty
}

// Update Stats with real data
function updateStats(stats) {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statChanges = document.querySelectorAll('.stat-change');
    
    // Update numbers
    if (statNumbers[0]) animateNumber(statNumbers[0], stats.totalApplications);
    if (statNumbers[1]) animateNumber(statNumbers[1], stats.totalUsers);
    if (statNumbers[2]) animateNumber(statNumbers[2], stats.totalTeams);
    if (statNumbers[3]) {
        const daysLeft = calculateDaysLeft();
        statNumbers[3].textContent = daysLeft + ' gün';
    }
    
    // Update change indicators
    if (statChanges[0]) statChanges[0].textContent = `+${Math.floor(Math.random() * 20) + 5} bu hafta`;
    if (statChanges[1]) statChanges[1].textContent = `+${Math.floor(Math.random() * 15) + 3} bu hafta`;
    if (statChanges[2]) statChanges[2].textContent = `+${Math.floor(Math.random() * 10) + 2} bu hafta`;
    if (statChanges[3]) statChanges[3].textContent = 'Başvuru devam ediyor';
}

// Calculate days left until deadline
function calculateDaysLeft() {
    const deadline = new Date('2024-12-31');
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
}

// Update Recent Applications
function updateRecentApplications(applications) {
    const applicationsList = document.querySelector('.applications-list');
    if (!applicationsList) return;
    
    // Get recent applications (last 3)
    const recentApps = applications.slice(0, 3);
    
    applicationsList.innerHTML = '';
    
    recentApps.forEach(app => {
        const appItem = document.createElement('div');
        appItem.className = 'application-item';
        
        const timeAgo = getTimeAgo(app.submissionDate);
        
        appItem.innerHTML = `
            <div class="app-info">
                <h4>${app.userName}</h4>
                <p>${app.userEmail}</p>
                <span class="app-date">${timeAgo}</span>
            </div>
            <div class="app-status ${app.status}">${getStatusText(app.status)}</div>
        `;
        
        applicationsList.appendChild(appItem);
    });
}

// Get time ago from date string
function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
        return `${diffDays} gün önce`;
    } else if (diffHours > 0) {
        return `${diffHours} saat önce`;
    } else {
        return 'Az önce';
    }
}

// Get status text in Turkish
function getStatusText(status) {
    switch(status) {
        case 'pending': return 'Beklemede';
        case 'approved': return 'Onaylandı';
        case 'rejected': return 'Reddedildi';
        default: return status;
    }
}

// Animate Number
function animateNumber(element, targetValue) {
    let currentValue = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, 50);
}

// Load section data when section is shown
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section specific data
        switch(sectionId) {
            case 'applications':
                loadApplicationsTable();
                break;
            case 'users':
                loadUsersTable();
                break;
            case 'teams':
                loadTeamsTable();
                break;
            case 'settings':
                loadSettings();
                break;
        }
    }
}

// Load Applications Table
function loadApplicationsTable() {
    const data = getDemoData();
    const tbody = document.getElementById('applicationsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    data.applications.forEach(app => {
        const row = document.createElement('tr');
        const techTags = app.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        row.innerHTML = `
            <td>#${app.id}</td>
            <td>
                <div>
                    <strong>${app.userName}</strong><br>
                    <small>${app.userEmail}</small>
                </div>
            </td>
            <td>${app.projectTitle}</td>
            <td><div class="tech-tags">${techTags}</div></td>
            <td>${app.teamSize} kişi</td>
            <td><span class="status-badge ${app.status}">${getStatusText(app.status)}</span></td>
            <td>${formatDate(app.submissionDate)}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn-small view" onclick="viewApplication(${app.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn-small edit" onclick="editApplication(${app.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn-small delete" onclick="deleteApplication(${app.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Load Users Table
function loadUsersTable() {
    const data = getDemoData();
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Update user stats
    const totalUsers = data.users.length;
    const activeUsers = data.users.filter(user => user.status === 'active').length;
    const pendingUsers = data.users.filter(user => user.status === 'pending').length;
    
    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('activeUsers').textContent = activeUsers;
    document.getElementById('pendingUsers').textContent = pendingUsers;
    
    data.users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.university}</td>
            <td>${user.department}</td>
            <td>${user.year}. Sınıf</td>
            <td><span class="status-badge ${user.status}">${getUserStatusText(user.status)}</span></td>
            <td>${formatDate(user.registrationDate)}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn-small view" onclick="viewUser(${user.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn-small edit" onclick="editUser(${user.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn-small delete" onclick="deleteUser(${user.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Load Teams Table
function loadTeamsTable() {
    const data = getDemoData();
    const tbody = document.getElementById('teamsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    data.teams.forEach(team => {
        const row = document.createElement('tr');
        const members = team.members.map(member => member.name).join(', ');
        
        row.innerHTML = `
            <td>${team.id}</td>
            <td>${team.name}</td>
            <td>${members}</td>
            <td>${team.projectTitle}</td>
            <td><span class="status-badge ${team.status}">${getTeamStatusText(team.status)}</span></td>
            <td>${formatDate(team.createdAt)}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn-small view" onclick="viewTeam(${team.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn-small edit" onclick="editTeam(${team.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Load Settings
function loadSettings() {
    const data = getDemoData();
    const settingsContainer = document.getElementById('settingsContainer');
    if (!settingsContainer) return;
    
    settingsContainer.innerHTML = `
        <div class="settings-grid">
            <div class="setting-item">
                <label>Başvuru Son Tarihi</label>
                <input type="date" value="${data.settings.applicationDeadline}">
            </div>
            <div class="setting-item">
                <label>Maksimum Takım Boyutu</label>
                <input type="number" value="${data.settings.maxTeamSize}">
            </div>
            <div class="setting-item">
                <label>Minimum Takım Boyutu</label>
                <input type="number" value="${data.settings.minTeamSize}">
            </div>
            <div class="setting-item">
                <label>Bireysel Katılım</label>
                <input type="checkbox" ${data.settings.allowIndividualParticipation ? 'checked' : ''}>
            </div>
            <div class="setting-item">
                <label>Üniversite Doğrulaması</label>
                <input type="checkbox" ${data.settings.requireUniversityVerification ? 'checked' : ''}>
            </div>
            <div class="setting-item">
                <label>Otomatik Onay</label>
                <input type="checkbox" ${data.settings.autoApproveApplications ? 'checked' : ''}>
            </div>
        </div>
        <button class="save-settings-btn">Ayarları Kaydet</button>
    `;
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR');
}

function getUserStatusText(status) {
    switch(status) {
        case 'active': return 'Aktif';
        case 'pending': return 'Beklemede';
        case 'inactive': return 'Pasif';
        default: return status;
    }
}

function getTeamStatusText(status) {
    switch(status) {
        case 'active': return 'Aktif';
        case 'inactive': return 'Pasif';
        default: return status;
    }
}

// Action Functions
function viewApplication(id) {
    showNotification(`Başvuru #${id} detayları görüntüleniyor...`, 'info');
}

function editApplication(id) {
    showNotification(`Başvuru #${id} düzenleniyor...`, 'info');
}

function deleteApplication(id) {
    if (confirm('Bu başvuruyu silmek istediğinizden emin misiniz?')) {
        showNotification(`Başvuru #${id} silindi`, 'success');
    }
}

function viewUser(id) {
    showNotification(`Kullanıcı #${id} detayları görüntüleniyor...`, 'info');
}

function editUser(id) {
    showNotification(`Kullanıcı #${id} düzenleniyor...`, 'info');
}

function deleteUser(id) {
    if (confirm('Bu kullanıcıyı silmek istediğinizden emin misiniz?')) {
        showNotification(`Kullanıcı #${id} silindi`, 'success');
    }
}

function viewTeam(id) {
    showNotification(`Takım #${id} detayları görüntüleniyor...`, 'info');
}

function editTeam(id) {
    showNotification(`Takım #${id} düzenleniyor...`, 'info');
}

// Filter Functions
function applyFilters() {
    const statusFilter = document.getElementById('statusFilter').value;
    const searchFilter = document.getElementById('searchFilter').value;
    
    showNotification('Filtreler uygulanıyor...', 'info');
    
    // Burada gerçek filtreleme mantığı olacak
    setTimeout(() => {
        showNotification('Filtreler uygulandı', 'success');
    }, 1000);
}

// Initialize stats animation on page load
setTimeout(updateStats, 1000);
