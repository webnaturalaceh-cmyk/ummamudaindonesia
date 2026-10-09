// script.js

const translations = {
    "nav_beranda": { id: "Beranda", en: "Home" },
    "nav_program": { id: "Program Kami", en: "Our Programs" },
    "nav_wilayah": { id: "Wilayah Fokus", en: "Focus Areas" },
    "nav_galeri": { id: "Galeri", en: "Gallery" },
    "nav_kontak": { id: "Kontak", en: "Contact" },
    "hero_badge": { id: "Umma Muda Indonesia • Natural Aceh Corp", en: "Umma Muda Indonesia • Natural Aceh Corp" },
    "hero_title1": { id: "Cerita Dari Papua:", en: "Stories From Papua:" },
    "hero_title2": { id: "Langkah kecil untuk hidup yang lebih layak", en: "Small steps for a better life" },
    "hero_desc": { id: "Berkomitmen menghadirkan akses dasar air bersih, sanitasi yang layak, intervensi gizi terpadu, dan perlindungan inklusif bagi saudara kita di wilayah 3T.", en: "Committed to providing basic access to clean water, proper sanitation, integrated nutrition interventions, and inclusive protection for our brothers and sisters in 3T regions." },
    "hero_btn1": { id: "Lihat Dokumentasi", en: "View Documentation" },
    "hero_btn2": { id: "Lihat Program", en: "View Programs" },
    "pillar_title": { id: "4 Pilar Program Utama", en: "4 Main Program Pillars" },
    "pillar_desc": { id: "Inisiatif kami berfokus pada pendekatan holistik untuk menyelesaikan akar permasalahan di daerah sasaran melalui aksi nyata.", en: "Our initiatives focus on a holistic approach to solving root problems in target areas through real action." },
    "pillar1_title": { id: "Air Bersih", en: "Clean Water" },
    "pillar1_desc": { id: "Membangun instalasi air bersih dan menerapkan teknologi filtrasi sederhana berbasis masyarakat untuk memastikan akses air minum yang aman dan berkelanjutan.", en: "Building clean water installations and applying community-based simple filtration technology to ensure safe and sustainable access to drinking water." },
    "pillar2_title": { id: "Sanitasi Kemanusiaan", en: "Humanitarian Sanitation" },
    "pillar2_desc": { id: "Pengadaan fasilitas MCK yang layak serta edukasi masif terkait Perilaku Hidup Bersih dan Sehat (PHBS) untuk menekan angka penyakit menular.", en: "Provision of proper sanitation facilities and massive education regarding Clean and Healthy Living Behaviors (PHBS) to reduce infectious diseases." },
    "pillar3_title": { id: "Gizi & Tumbuh Kembang", en: "Nutrition & Growth" },
    "pillar3_desc": { id: "Pemberian intervensi gizi terpadu, pemantauan kesehatan ibu dan anak, serta program konkret pencegahan stunting secara komprehensif.", en: "Provision of integrated nutrition interventions, maternal and child health monitoring, and comprehensive concrete stunting prevention programs." },
    "pillar4_title": { id: "Inklusi Disabilitas", en: "Disability Inclusion" },
    "pillar4_desc": { id: "Mendorong pemberdayaan ekonomi, penyediaan alat bantu aksesibilitas, serta advokasi hak-hak dasar bagi penyandang disabilitas di daerah terpencil.", en: "Encouraging economic empowerment, providing accessibility aids, and advocating for the basic rights of people with disabilities in remote areas." },
    "focus_title": { id: "Wilayah Intervensi Fokus", en: "Focus Intervention Areas" },
    "focus_desc": { id: "Peta interaktif titik krusial di Indonesia Timur yang membutuhkan akselerasi pembangunan dasar berdasarkan data BPS & Kemenkes.", en: "Interactive map of crucial points in Eastern Indonesia requiring basic development acceleration based on BPS & Kemenkes data." },
    "gallery_title": { id: "Galeri Kegiatan", en: "Activity Gallery" },
    "gallery_desc": { id: "Rekam jejak aksi nyata kami merajut asa dan membawa perubahan bagi masyarakat di ujung timur Indonesia.", en: "A track record of our real actions weaving hope and bringing change to communities in the eastern tip of Indonesia." },
    "gallery_btn": { id: "Lihat Semua Album", en: "View All Albums" },
    "gal1_tag": { id: "Papua", en: "Papua" },
    "gal1_title": { id: "Pembangunan Fasilitas Air Bersih", en: "Clean Water Facility Construction" },
    "gal1_desc": { id: "Penyediaan akses air minum perdana untuk 50 kepala keluarga.", en: "Provision of inaugural drinking water access for 50 families." },
    "gal2_tag": { id: "NTB", en: "NTB" },
    "gal2_title": { id: "Penyuluhan Gizi Ibu & Anak", en: "Maternal & Child Nutrition Counseling" },
    "gal2_desc": { id: "Program intervensi stunting dan pembagian makanan tambahan.", en: "Stunting intervention program and distribution of supplementary food." },
    "gal3_tag": { id: "NTT", en: "NTT" },
    "gal3_title": { id: "Pembangunan MCK Komunal", en: "Communal Sanitation Construction" },
    "gal3_desc": { id: "Membangun fasilitas sanitasi higienis dan ramah disabilitas.", en: "Building hygienic and disability-friendly sanitation facilities." },
    "gal_placeholder_title": { id: "Dokumentasi Mendatang", en: "Upcoming Documentation" },
    "gal_placeholder_desc": { id: "Ruang untuk aksi nyata selanjutnya", en: "Space for the next real actions" },
    "contact_title": { id: "Hubungi Kami", en: "Contact Us" },
    "contact_desc": { id: "Untuk informasi lebih lanjut mengenai dokumentasi dan kegiatan Umma Muda Indonesia, Anda dapat menghubungi kami melalui kontak di bawah ini.", en: "For more information regarding Umma Muda Indonesia documentation and activities, you can contact us via the contacts below." },
    "contact_hq": { id: "Kantor Pusat", en: "Head Office" },
    "contact_hq_desc": { id: "Jl. Contoh Alamat No. 123<br>Banda Aceh, Indonesia", en: "123 Example Address St<br>Banda Aceh, Indonesia" },
    "contact_email": { id: "Email Kami", en: "Our Email" },
    "contact_phone": { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" },
    "footer_initiative": { id: "Sebuah Inisiatif dari Natural Aceh Corp", en: "An Initiative of Natural Aceh Corp" },
    "footer_desc": { id: "Hadir untuk menyambung asa dan memastikan hak-hak dasar masyarakat di pelosok negeri terpenuhi.", en: "Present to weave hope and ensure the basic rights of communities in remote areas of the country are fulfilled." },
    "footer_links": { id: "Tautan Cepat", en: "Quick Links" },
    "footer_legal": { id: "Legal & Informasi", en: "Legal & Information" },
    "footer_privacy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
    "footer_terms": { id: "Syarat & Ketentuan", en: "Terms & Conditions" },
    "footer_report": { id: "Laporan Transparansi", en: "Transparency Report" },
    "footer_copyright": { id: "&copy; 2024 Umma Muda Indonesia - Natural Aceh Corp. Hak Cipta Dilindungi.", en: "&copy; 2024 Umma Muda Indonesia - Natural Aceh Corp. All Rights Reserved." },
    "footer_design1": { id: "Didesain dengan", en: "Designed with" },
    "footer_design2": { id: "untuk Indonesia.", en: "for Indonesia." }
};

let currentLang = 'id';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            
            // Update button texts
            toggleBtns.forEach(b => {
                b.innerHTML = currentLang === 'id' ? 'ID' : 'EN';
            });
            
            // Translate elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.innerHTML = translations[key][currentLang];
                }
            });

            // Update map popups if map exists
            if (window.updateMapLanguage) {
                window.updateMapLanguage(currentLang);
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // ==========================================
    // Interactive Map (Leaflet)
    // ==========================================
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        // Initialize map centered on Eastern Indonesia
        const map = L.map('map').setView([-4.5, 125.5], 5);

        // Add cleaner CartoDB light basemap so colored regions pop out
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }).addTo(map);

        // Focus Areas Data (Sourced from BPS & SSGI 2022)
        const focusProvinces = {
            "Papua": {
                infoId: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi Papua (Krisis)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Prevalensi tinggi mencapai 34,6%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Akses sanitasi komunal dan sumber air bersih masih tertinggal.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Geografi menantang menyulitkan penyaluran alat bantu.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Papua Province (Critical)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> High prevalence reaching 34.6%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Access to communal sanitation and clean water is lagging.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Challenging geography makes distributing aids difficult.</li>
                        </ul>
                    </div>
                `,
                color: '#cc0096' // Deep Magenta
            },
            "NTT": {
                infoId: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi NTT (Krisis)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Tertinggi di Indonesia (35,3%).</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Rawan krisis air bersih, terutama saat kemarau.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Sangat minim fasilitas publik yang ramah disabilitas.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">NTT Province (Critical)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Highest in Indonesia (35.3%).</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Prone to clean water crises, especially in dry seasons.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Very minimal disability-friendly public facilities.</li>
                        </ul>
                    </div>
                `,
                color: '#fc00b9' // Bright Pink
            },
            "NTB": {
                infoId: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi NTB (Waspada)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Masih tergolong tinggi di angka 32,7%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Butuh peningkatan akses MCK komunal di pelosok.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Fokus pada pemberdayaan kelompok rentan.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[200px]">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">NTB Province (Warning)</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Still relatively high at 32.7%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Needs improved communal sanitation in remote areas.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Focus on empowering vulnerable groups.</li>
                        </ul>
                    </div>
                `,
                color: '#ff66d9' // Lighter Pink
            }
        };

        const mapLayers = [];

        // Fetch GeoJSON data for Indonesian provinces
        fetch('https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson')
            .then(res => res.json())
            .then(data => {
                L.geoJSON(data, {
                    style: function(feature) {
                        const provName = String(feature.properties.Propinsi || feature.properties.PROVINSI || feature.properties.name || "").toUpperCase();
                        
                        let isFocus = false;
                        let fillColor = '#cbd5e1'; // slate-300 for non-focus
                        let opacity = 0.4;
                        
                        if (provName.includes('PAPUA')) {
                            isFocus = true; fillColor = focusProvinces["Papua"].color; opacity = 0.8;
                        } else if (provName.includes('TENGGARA TIMUR') || provName === 'NTT') {
                            isFocus = true; fillColor = focusProvinces["NTT"].color; opacity = 0.8;
                        } else if (provName.includes('TENGGARA BARAT') || provName === 'NTB') {
                            isFocus = true; fillColor = focusProvinces["NTB"].color; opacity = 0.8;
                        }

                        if (isFocus) {
                            return {
                                fillColor: fillColor,
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: opacity
                            };
                        } else {
                            return {
                                fillColor: fillColor,
                                weight: 1,
                                opacity: 1,
                                color: 'white',
                                fillOpacity: opacity
                            };
                        }
                    },
                    onEachFeature: function(feature, layer) {
                        const provName = String(feature.properties.Propinsi || feature.properties.PROVINSI || feature.properties.name || "").toUpperCase();
                        
                        let key = null;
                        if (provName.includes('PAPUA')) key = "Papua";
                        else if (provName.includes('TENGGARA TIMUR') || provName === 'NTT') key = "NTT";
                        else if (provName.includes('TENGGARA BARAT') || provName === 'NTB') key = "NTB";

                        if (key) {
                            // Add pulsing circle marker in the center for extra visibility
                            const center = layer.getBounds().getCenter();
                            const pulseMarker = L.circleMarker(center, {
                                radius: 8,
                                fillColor: 'white',
                                color: focusProvinces[key].color,
                                weight: 3,
                                opacity: 1,
                                fillOpacity: 1
                            }).addTo(map);

                            const contentId = focusProvinces[key].infoId;
                            const contentEn = focusProvinces[key].infoEn;
                            
                            layer.bindPopup(currentLang === 'id' ? contentId : contentEn);
                            pulseMarker.bindPopup(currentLang === 'id' ? contentId : contentEn);
                            
                            mapLayers.push({ layer: layer, data: focusProvinces[key] });
                            mapLayers.push({ layer: pulseMarker, data: focusProvinces[key] });

                            // Hover effects
                            layer.on({
                                mouseover: function(e) {
                                    var l = e.target;
                                    l.setStyle({
                                        weight: 3,
                                        color: '#333',
                                        dashArray: '',
                                        fillOpacity: 0.9
                                    });
                                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                                        l.bringToFront();
                                    }
                                },
                                mouseout: function(e) {
                                    var l = e.target;
                                    l.setStyle({
                                        weight: 2,
                                        color: 'white',
                                        dashArray: '3',
                                        fillOpacity: 0.8
                                    });
                                }
                            });
                        }
                    }
                }).addTo(map);

                // Expose function to update popups when language changes
                window.updateMapLanguage = function(lang) {
                    mapLayers.forEach(item => {
                        const wasOpen = item.layer.isPopupOpen();
                        item.layer.setPopupContent(lang === 'id' ? item.data.infoId : item.data.infoEn);
                        if (wasOpen) {
                            item.layer.openPopup();
                        }
                    });
                };
            })
            .catch(err => console.error('Error loading GeoJSON:', err));
    }
});
