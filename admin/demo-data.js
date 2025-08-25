// Demo Data for Admin Panel

const demoData = {
    // Kullanıcılar
    users: [
        {
            id: 1,
            name: "Ahmet Yılmaz",
            email: "ahmet.yilmaz@example.com",
            phone: "+90 532 123 4567",
            university: "İstanbul Teknik Üniversitesi",
            department: "Bilgisayar Mühendisliği",
            year: 3,
            status: "active",
            registrationDate: "2024-12-15",
            lastLogin: "2024-12-20 14:30"
        },
        {
            id: 2,
            name: "Ayşe Demir",
            email: "ayse.demir@example.com",
            phone: "+90 533 234 5678",
            university: "Orta Doğu Teknik Üniversitesi",
            department: "Elektrik-Elektronik Mühendisliği",
            year: 4,
            status: "active",
            registrationDate: "2024-12-14",
            lastLogin: "2024-12-20 16:45"
        },
        {
            id: 3,
            name: "Mehmet Kaya",
            email: "mehmet.kaya@example.com",
            phone: "+90 534 345 6789",
            university: "Boğaziçi Üniversitesi",
            department: "Matematik",
            year: 2,
            status: "pending",
            registrationDate: "2024-12-16",
            lastLogin: "2024-12-19 10:15"
        },
        {
            id: 4,
            name: "Fatma Özkan",
            email: "fatma.ozkan@example.com",
            phone: "+90 535 456 7890",
            university: "Hacettepe Üniversitesi",
            department: "Bilgisayar Mühendisliği",
            year: 3,
            status: "active",
            registrationDate: "2024-12-13",
            lastLogin: "2024-12-20 09:20"
        },
        {
            id: 5,
            name: "Ali Çelik",
            email: "ali.celik@example.com",
            phone: "+90 536 567 8901",
            university: "Gazi Üniversitesi",
            department: "Yazılım Mühendisliği",
            year: 4,
            status: "inactive",
            registrationDate: "2024-12-12",
            lastLogin: "2024-12-18 11:30"
        }
    ],

    // Başvurular
    applications: [
        {
            id: 1,
            userId: 1,
            userName: "Ahmet Yılmaz",
            userEmail: "ahmet.yilmaz@example.com",
            projectTitle: "Akıllı Şehir Trafik Yönetim Sistemi",
            projectDescription: "Yapay zeka kullanarak trafik sıkışıklığını azaltan sistem",
            technologies: ["Python", "TensorFlow", "React", "Node.js"],
            teamSize: 3,
            status: "pending",
            submissionDate: "2024-12-20 14:30",
            reviewDate: null,
            reviewer: null,
            score: null,
            feedback: null
        },
        {
            id: 2,
            userId: 2,
            userName: "Ayşe Demir",
            userEmail: "ayse.demir@example.com",
            projectTitle: "Sürdürülebilir Enerji Optimizasyonu",
            projectDescription: "Güneş ve rüzgar enerjisi verimliliğini artıran algoritma",
            technologies: ["Java", "Spring Boot", "Vue.js", "PostgreSQL"],
            teamSize: 2,
            status: "approved",
            submissionDate: "2024-12-19 16:45",
            reviewDate: "2024-12-20 10:00",
            reviewer: "admin@huawei-marathon.org",
            score: 85,
            feedback: "Mükemmel bir proje! Teknik detaylar çok iyi düşünülmüş."
        },
        {
            id: 3,
            userId: 3,
            userName: "Mehmet Kaya",
            userEmail: "mehmet.kaya@example.com",
            projectTitle: "Blockchain Tabanlı Oylama Sistemi",
            projectDescription: "Güvenli ve şeffaf dijital oylama platformu",
            technologies: ["Solidity", "Web3.js", "React", "MongoDB"],
            teamSize: 4,
            status: "pending",
            submissionDate: "2024-12-20 10:15",
            reviewDate: null,
            reviewer: null,
            score: null,
            feedback: null
        },
        {
            id: 4,
            userId: 4,
            userName: "Fatma Özkan",
            userEmail: "fatma.ozkan@example.com",
            projectTitle: "Sağlık Verisi Analiz Platformu",
            projectDescription: "Hasta verilerini analiz eden yapay zeka sistemi",
            technologies: ["Python", "Scikit-learn", "Django", "MySQL"],
            teamSize: 3,
            status: "rejected",
            submissionDate: "2024-12-18 09:20",
            reviewDate: "2024-12-19 14:30",
            reviewer: "admin@huawei-marathon.org",
            score: 65,
            feedback: "Proje iyi ama teknik detaylar eksik. Daha fazla geliştirme gerekli."
        },
        {
            id: 5,
            userId: 5,
            userName: "Ali Çelik",
            userEmail: "ali.celik@example.com",
            projectTitle: "IoT Tabanlı Akıllı Ev Sistemi",
            projectDescription: "Ev otomasyonu için IoT cihazları yönetim sistemi",
            technologies: ["C++", "Arduino", "Flutter", "Firebase"],
            teamSize: 2,
            status: "approved",
            submissionDate: "2024-12-17 11:30",
            reviewDate: "2024-12-18 16:00",
            reviewer: "admin@huawei-marathon.org",
            score: 92,
            feedback: "Harika bir proje! IoT entegrasyonu çok başarılı."
        }
    ],

    // Takımlar
    teams: [
        {
            id: 1,
            name: "TechVision",
            members: [
                { id: 1, name: "Ahmet Yılmaz", role: "Team Lead" },
                { id: 6, name: "Zeynep Arslan", role: "Developer" },
                { id: 7, name: "Can Yıldız", role: "Designer" }
            ],
            projectId: 1,
            projectTitle: "Akıllı Şehir Trafik Yönetim Sistemi",
            status: "active",
            createdAt: "2024-12-15",
            lastActivity: "2024-12-20 14:30"
        },
        {
            id: 2,
            name: "GreenTech",
            members: [
                { id: 2, name: "Ayşe Demir", role: "Team Lead" },
                { id: 8, name: "Burak Koç", role: "Developer" }
            ],
            projectId: 2,
            projectTitle: "Sürdürülebilir Enerji Optimizasyonu",
            status: "active",
            createdAt: "2024-12-14",
            lastActivity: "2024-12-20 16:45"
        },
        {
            id: 3,
            name: "BlockChainers",
            members: [
                { id: 3, name: "Mehmet Kaya", role: "Team Lead" },
                { id: 9, name: "Elif Şahin", role: "Developer" },
                { id: 10, name: "Deniz Özkan", role: "Developer" },
                { id: 11, name: "Selin Demir", role: "Designer" }
            ],
            projectId: 3,
            projectTitle: "Blockchain Tabanlı Oylama Sistemi",
            status: "active",
            createdAt: "2024-12-16",
            lastActivity: "2024-12-20 10:15"
        },
        {
            id: 4,
            name: "HealthAI",
            members: [
                { id: 4, name: "Fatma Özkan", role: "Team Lead" },
                { id: 12, name: "Mert Yılmaz", role: "Developer" },
                { id: 13, name: "Gizem Kaya", role: "Data Scientist" }
            ],
            projectId: 4,
            projectTitle: "Sağlık Verisi Analiz Platformu",
            status: "inactive",
            createdAt: "2024-12-13",
            lastActivity: "2024-12-18 09:20"
        },
        {
            id: 5,
            name: "SmartHome",
            members: [
                { id: 5, name: "Ali Çelik", role: "Team Lead" },
                { id: 14, name: "Ece Arslan", role: "Developer" }
            ],
            projectId: 5,
            projectTitle: "IoT Tabanlı Akıllı Ev Sistemi",
            status: "active",
            createdAt: "2024-12-12",
            lastActivity: "2024-12-17 11:30"
        }
    ],

    // İstatistikler
    stats: {
        totalApplications: 247,
        totalUsers: 189,
        totalTeams: 63,
        pendingApplications: 45,
        approvedApplications: 156,
        rejectedApplications: 46,
        activeUsers: 167,
        inactiveUsers: 22,
        averageScore: 78.5,
        topUniversities: [
            "İstanbul Teknik Üniversitesi",
            "Orta Doğu Teknik Üniversitesi",
            "Boğaziçi Üniversitesi",
            "Hacettepe Üniversitesi",
            "Gazi Üniversitesi"
        ],
        popularTechnologies: [
            "Python", "React", "Node.js", "Java", "Vue.js"
        ]
    },

    // Duyurular
    announcements: [
        {
            id: 1,
            title: "Başvuru Süresi Uzatıldı",
            content: "Maraton başvuru süresi 31 Aralık 2024'e kadar uzatılmıştır.",
            type: "info",
            createdAt: "2024-12-20 10:00",
            isActive: true
        },
        {
            id: 2,
            title: "Final Kampı Tarihleri",
            content: "Final kampı 22-25 Eylül 2025 tarihlerinde İstanbul'da gerçekleşecektir.",
            type: "success",
            createdAt: "2024-12-19 14:30",
            isActive: true
        },
        {
            id: 3,
            title: "Teknik Destek Saatleri",
            content: "Teknik destek hafta içi 09:00-18:00 saatleri arasında verilmektedir.",
            type: "warning",
            createdAt: "2024-12-18 16:00",
            isActive: true
        }
    ],

    // Sistem Ayarları
    settings: {
        applicationDeadline: "2024-12-31",
        maxTeamSize: 4,
        minTeamSize: 1,
        allowIndividualParticipation: true,
        requireUniversityVerification: true,
        autoApproveApplications: false,
        emailNotifications: true,
        maintenanceMode: false,
        registrationOpen: true
    }
};

// LocalStorage'a kaydet
if (typeof window !== 'undefined') {
    localStorage.setItem('demoData', JSON.stringify(demoData));
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = demoData;
}
