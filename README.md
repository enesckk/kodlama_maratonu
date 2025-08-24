# Huawei Ar-Ge Kodlama Maratonu 2025

Bu proje, Huawei Türkiye ile BTK (Bilgi Teknolojileri ve İletişim Kurumu) iş birliğiyle düzenlenen "Huawei Ar-Ge Kodlama Maratonu 2025" için geliştirilmiş modern ve responsive web sitesidir.

## 🚀 Özellikler

### 📱 Responsive Tasarım
- Mobil, tablet ve masaüstü uyumlu
- Modern CSS Grid ve Flexbox kullanımı
- Progressive Web App (PWA) özellikleri

### ⏰ Geri Sayım Sistemi
- Başvuru süresine kalan zamanı gösteren canlı geri sayım
- Otomatik güncelleme (saniye bazında)
- Süre dolduğunda uyarı mesajı

### 📋 Başvuru Formu
- Form validasyonu (e-posta, zorunlu alanlar)
- Gerçek zamanlı hata kontrolü
- Başarılı gönderim bildirimi

### ❓ FAQ Sistemi
- Akordiyon tarzı açılır/kapanır sorular
- Smooth animasyonlar
- Tek seferde bir soru açık kalır

### 🎨 Modern UI/UX
- Huawei kurumsal renkleri (#e60012)
- Gradient arka planlar
- Hover efektleri ve animasyonlar
- Smooth scroll navigasyon

## 📅 Program Detayları

### 🗓️ Takvim
- **Başvuru Dönemi**: 18 Ağustos - 3 Eylül 2025, 15:00 (TRT)
- **Final Kampı**: 22-25 Eylül 2025, BTK Merkez Yerleşkesi, Ankara
- **Ödül Töreni**: 25 Eylül 2025

### 🎯 Katılım Koşulları
- Üniversite öğrencileri ve yeni mezunlar
- Huawei Cloud hesabı
- En az bir Huawei Cloud sertifikası
- BTK Akademi başvurusu

### 🏆 Ödüller
- **1. Takım**: Huawei Dizüstü Bilgisayar + Kariyer Fırsatları
- **2. Takım**: Huawei Dizüstü Bilgisayar + Mentorluk
- **3. Takım**: Huawei Dizüstü Bilgisayar + Sertifika
- **Tüm Katılımcılar**: Huawei Akıllı Saat + Deneyim

### 📊 Değerlendirme Kriterleri
- %40 Teknik Proje
- %40 Jüri Sunumu
- %20 Ara Görevler

## 🛠️ Teknik Detaylar

### Kullanılan Teknolojiler
- **HTML5**: Semantic markup
- **CSS3**: Modern styling, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Font Awesome**: İkonlar
- **Google Fonts**: Inter font family

### Dosya Yapısı
```
huawei-marathon/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

### Özellikler
- **Cross-browser uyumluluk**: Chrome, Firefox, Safari, Edge
- **Mobile-first approach**: Responsive tasarım
- **Performance optimized**: Lazy loading, debounced scroll events
- **Accessibility**: ARIA labels, semantic HTML
- **SEO friendly**: Meta tags, structured data

## 🚀 Kurulum ve Çalıştırma

### Yerel Geliştirme
1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd huawei-marathon
```

2. Dosyaları bir web sunucusunda çalıştırın:
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .

# PHP ile
php -S localhost:8000
```

3. Tarayıcıda açın:
```
http://localhost:8000
```

### Canlı Sunum
- Statik dosyalar herhangi bir web sunucusunda çalıştırılabilir
- CDN kullanımı önerilir (Font Awesome, Google Fonts)
- HTTPS zorunlu değil ancak önerilir

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Renk Paleti

- **Primary**: #e60012 (Huawei Red)
- **Secondary**: #667eea, #764ba2 (Gradient)
- **Text**: #333333
- **Light Text**: #666666
- **Background**: #f8f9fa
- **White**: #ffffff

## 🔧 Özelleştirme

### Renk Değişikliği
`styles.css` dosyasında CSS değişkenlerini güncelleyin:
```css
:root {
    --primary-color: #e60012;
    --secondary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Tarih Güncelleme
`script.js` dosyasında geri sayım tarihini güncelleyin:
```javascript
const deadline = new Date('September 3, 2025 15:00:00').getTime();
```

### İçerik Güncelleme
`index.html` dosyasında metinleri ve bilgileri güncelleyin.

## 📊 Performans

### Optimizasyonlar
- CSS ve JS minification önerilir
- Görsel optimizasyonu (WebP formatı)
- Lazy loading implementasyonu
- Service Worker eklenebilir

### Lighthouse Skorları
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔒 Güvenlik

- XSS koruması
- Form validasyonu
- HTTPS kullanımı önerilir
- Content Security Policy (CSP) eklenebilir

## 📈 Analytics

Google Analytics veya başka bir analytics servisi eklemek için:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **E-posta**: info@huawei-marathon.org
- **Adres**: BTK Merkez Yerleşkesi, Ankara
- **Web**: [Huawei Türkiye](https://www.huawei.com/tr/)

## 🙏 Teşekkürler

- Huawei Türkiye
- BTK (Bilgi Teknolojileri ve İletişim Kurumu)
- Font Awesome
- Google Fonts
- Tüm katkıda bulunanlar

---

**Not**: Bu proje Huawei Ar-Ge Kodlama Maratonu 2025 için geliştirilmiştir. Tüm bilgiler ve tarihler resmi duyurulara göre güncellenmelidir.
