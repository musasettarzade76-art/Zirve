/* =========================================
   1. TAILWIND CONFIGURATION
   ========================================= */
tailwind.config = {
    darkMode: 'class', // Enable dark mode via class
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    green: '#2C5E1A', // Forest Green
                    gold: '#D4AF37',  // Mountain Sun
                    dark: '#121212',
                    light: '#F3F8F2'
                }
            }
        }
    }
};

/* =========================================
   2. GLOBAL VARIABLES & CONSTANTS
   ========================================= */
// API KEY ARTIQ BURADA DEYİL - VERCEL SERVERİNDƏDİR

// Language & Translations
let currentLang = 'az';

const translations = {
    az: {
        nav_home: "Ana Səhifə", nav_about: "Haqqımızda", nav_planner: "AI Bələdçi", nav_tours: "Yürüşlər", nav_reviews: "Rəylər", nav_shop: "Viktorina və Hədiyyə", nav_login: "Giriş",
        hero_tag: "Daxili Turizm", hero_title_1: "Azərbaycanı", hero_title_2: "Zirvədən", hero_title_3: "Kəşf Et",
        hero_desc: "Ölkəmizin ərazisinin 60%-ni təşkil edən möhtəşəm dağlar, yaşıl dərələr və şəlalələr sizi gözləyir. Xaricə getmədən öz ölkəni tanı!",
        btn_select_route: "Marşrut Seç", btn_ai_plan: "AI ilə Planla",
        about_title: "Daxili Turizm Nədir?", about_text: "Daxili turizm — bir ölkənin sakinlərin iştirak etdiyi və yalnız həmin ölkə çərçivəsində səyahət etdikləri turizmdir. Belə bir məzuniyyət 'daxili məzuniyyət' kimi tanınır.",
        about_quote: '"Dağ turizmi — xaricə getmədən öz ölkənizin təbiəti ilə tanış olmağın ən yaxşı üsullarından biridir. Yürüşlər yeni marşrutlar kəşf etməyə imkan verir."',
        // About List items (HTML)
        about_li_1: "<b>Böyük Qafqaz</b> – Bazardüzü (4466 m)",
        about_li_2: "<b>Kiçik Qafqaz</b> – Mənzərəli dərələr",
        about_li_3: "<b>Talış Dağları</b> – Sıx meşələr",
        highest_peak: "Ən Hündür Zirvə",
        ai_subtitle: "Süni İntellekt Dəstəkli", ai_title: "Dağ Yürüşü Planlayıcısı", ai_desc: "Siz fiziki hazırlığınızı və istəklərinizi deyin, AI sizin üçün Azərbaycan daxilində ən uyğun marşrutu qursun.",
        lbl_region: "Bölgə", lbl_level: "Çətinlik Dərəcəsi", lbl_duration: "Müddət", btn_create_plan: "Planı Yarat",
        planner_placeholder: "Marşrut burada görünəcək", planner_calculating: "Marşrut hesablanır...",
        tours_subtitle: "Kəşf Et", tours_title: "Daxili Yürüş Turları",
        feedback_subtitle: "Sizin Fikirləriniz", feedback_title: "İstifadəçi Rəyləri", feedback_form_title: "Rəy Bildirin",
        lbl_name: "Adınız", lbl_rating: "Reytinq", lbl_comment: "Şərhiniz", btn_submit_feedback: "Rəyi Göndər",
        faq_title: "Tez-tez verilən suallar",
        faq_q1: "Zirvə.az nədir və nəyə görə var?", faq_a1: "Zirvə.az insanların Azərbaycanı gəzməsinə, daxili turizmi kəşf etməsinə və dağ yürüşlərini planlamasına imkan verən yerli platformadır.",
        faq_q2: "Turları necə bron edə bilərəm?", faq_a2: "Turu bron etmək üçün, sadəcə bəyəndiyiniz turun üzərinə klikləyin, açılan modal pəncərədə detalları gözdən keçirin və 'İştirak Et' düyməsinə basaraq müraciət edin.",
        faq_q3: "Qiymətlər niyə fərqlidir?", faq_a3: "Qiymətlər mövsümdən, tura daxil olan xidmətlərdən (nəqliyyat, yemək, bələdçi) və tur müddətindən asılı olaraq dəyişir.",
        faq_q4: "Zirvə.az saytını istifadə etmək ödənişsizdir?", faq_a4: "Bəli, bu saytdan istifadə etmək, marşrutları axtarmaq və AI planlayıcıdan yararlanmaq tamamilə ödənişsizdir.",
        footer_desc: "Azərbaycanın daxili turizm potensialını inkişaf etdirmək və dağ yürüşlərini təşviq etmək üçün yaradılmış platforma.",
        footer_about: "Haqqımızda", footer_contact: "Əlaqə",
        footer_about_text: "Zirvə.az komandası olaraq məqsədimiz yerli təbiət sevərləri bir araya gətirmək, təhlükəsiz və maraqlı marşrutları hamı üçün əlçatan etməkdir.",
        contact_phone: "Telefon:", contact_email: "Email:",
        modal_price: "Qiymət", modal_days: "Müddət", modal_features: "Xüsusiyyətlər", btn_participate: "İştirak Et",
        modal_success_alert: "Sorğunuz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq.",
        chat_welcome: "Salam! Mən sizin dağ bələdçinizəm. Azərbaycanın hansı zirvəsini fəth etmək istəyirsiniz?",
        chat_placeholder: "Sualınızı yazın...",
        msg_fill_all: "Zəhmət olmasa bütün xanaları doldurun!", msg_thanks: "Rəyiniz üçün təşəkkürlər!",
        see_more: "Daha çox", see_less: "Daha az",
        filter_all: "Hamısı", filter_hiking: "Dağ Yürüşü", filter_history: "Tarixi",
        // AUTH Translations
        auth_tab_login: "Giriş", auth_tab_register: "Qeydiyyat",
        auth_username: "İstifadəçi Adı", auth_password: "Şifrə",
        auth_btn_login: "Daxil Ol", auth_btn_register: "Qeydiyyatdan Keç",
        auth_err_exists: "Bu istifadəçi artıq mövcuddur.", auth_success_reg: "Qeydiyyat uğurludur! İndi giriş edin.",
        auth_err_invalid: "İstifadəçi adı və ya şifrə yanlışdır.", auth_err_fill: "Bütün xanaları doldurun.",
        nav_logout: "Çıxış",
        // SHOP Translations
        shop_subtitle: "Loyallıq Proqramı", shop_title: "Viktorina və Mükafatlar", shop_desc: "Suallara cavab verin, xal toplayın və endirim kuponları qazanın!",
        shop_header: "Kupon Marketi", quiz_header: "Viktorina", shop_inventory: "Kuponlarınız",
        shop_points: "Xal",
        level_easy: "Asan", level_medium: "Orta", level_hard: "Çətin", quiz_cancel: "Ləğv et",
        shop_point_gain_1: "+1 Xal", shop_point_gain_2: "+2 Xal", shop_point_gain_3: "+3 Xal",
        coupon_discount_10: "10% Endirim", coupon_discount_20: "20% Endirim", coupon_discount_50: "50% Endirim",
        coupon_free: "Tam Pulsuz", coupon_cost_200: "200 Xal", coupon_cost_500: "500 Xal", coupon_cost_1000: "1000 Xal", coupon_cost_2500: "2500 Xal",
        coupon_btn_buy: "Almaq",
        shop_empty: "Hələ heç nə yoxdur...",
        shop_discount_label: "ENDİRİM",
        quiz_points_alert_enough: "Kifayət qədər xalınız yoxdur!",
        quiz_points_alert_confirm: "xala kupon almaq istəyirsiniz?",
        quiz_points_alert_success: "Təbriklər! Kupon aldınız.",
        quiz_daily_limit: "Doğrudur, amma günlük xal limitini (30) doldurmusunuz.",
        quiz_correct_limit: "Doğrudur! (Günlük limit doldu)",
        quiz_correct: "Doğrudur!",
        quiz_wrong: "Səhvdir! Düzgün cavab işarələndi."
    },
    en: {
        nav_home: "Home", nav_about: "About Us", nav_planner: "AI Guide", nav_tours: "Tours", nav_reviews: "Reviews", nav_shop: "Quizes & Prizes", nav_login: "Login",
        hero_tag: "Domestic Tourism", hero_title_1: "Discover", hero_title_2: "Azerbaijan", hero_title_3: "From Peaks",
        hero_desc: "Magnificent mountains, green valleys, and waterfalls covering 60% of our country await you. Know your country without going abroad!",
        btn_select_route: "Select Route", btn_ai_plan: "Plan with AI",
        about_title: "What is Domestic Tourism?", about_text: "Domestic tourism involves residents of one country traveling only within that country. Such a holiday is known as a 'domestic holiday'.",
        about_quote: '"Mountain tourism is one of the best ways to get acquainted with the nature of your country without going abroad. Hiking allows you to discover new routes."',
        // About List items (HTML)
        about_li_1: "<b>Great Caucasus</b> – Bazarduzu (4466 m)",
        about_li_2: "<b>Lesser Caucasus</b> – Scenic valleys",
        about_li_3: "<b>Talysh Mountains</b> – Dense forests",
        highest_peak: "Highest Peak",
        ai_subtitle: "AI Powered", ai_title: "Mountain Hiking Planner", ai_desc: "Tell us your physical fitness and wishes, and AI will build the most suitable route for you within Azerbaijan.",
        lbl_region: "Region", lbl_level: "Difficulty Level", lbl_duration: "Duration", btn_create_plan: "Create Plan",
        planner_placeholder: "Route will appear here", planner_calculating: "Calculating route...",
        tours_subtitle: "Discover", tours_title: "Domestic Hiking Tours",
        feedback_subtitle: "Your Thoughts", feedback_title: "User Reviews", feedback_form_title: "Leave Feedback",
        lbl_name: "Name", lbl_rating: "Rating", lbl_comment: "Comment", btn_submit_feedback: "Send Feedback",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is Zirvə.az and why does it exist?", faq_a1: "Zirvə.az is a local platform that allows people to travel around Azerbaijan, discover domestic tourism, and plan mountain hikes.",
        faq_q2: "How can I book a tour?", faq_a2: "To book a tour, simply click on the tour you like, review the details in the modal window, and apply by clicking 'Participate'.",
        faq_q3: "Why do prices vary?", faq_a3: "Prices vary depending on the season, services included (transport, food, guide), and tour duration.",
        faq_q4: "Is Zirvə.az free to use?", faq_a4: "Yes, using this site, searching for routes, and using the AI planner is completely free.",
        footer_desc: "A platform created to develop Azerbaijan's domestic tourism potential and promote mountain hiking.",
        footer_about: "About Us", footer_contact: "Contact",
        footer_about_text: "As the Zirvə.az team, our goal is to bring local nature lovers together and make safe, interesting routes accessible to everyone.",
        contact_phone: "Phone:", contact_email: "Email:",
        modal_price: "Price", modal_days: "Duration", modal_features: "Features", btn_participate: "Participate",
        modal_success_alert: "Request received! We will contact you soon.",
        chat_welcome: "Hello! I am your mountain guide. Which peak of Azerbaijan do you want to conquer?",
        chat_placeholder: "Type your question...",
        msg_fill_all: "Please fill in all fields!", msg_thanks: "Thanks for your feedback!",
        see_more: "See more", see_less: "See less",
        filter_all: "All", filter_hiking: "Hiking", filter_history: "History",
        // AUTH Translations
        auth_tab_login: "Login", auth_tab_register: "Register",
        auth_username: "Username", auth_password: "Password",
        auth_btn_login: "Login", auth_btn_register: "Register",
        auth_err_exists: "User already exists.", auth_success_reg: "Registration successful! Please login.",
        auth_err_invalid: "Invalid username or password.", auth_err_fill: "Please fill all fields.",
        nav_logout: "Logout",
            // SHOP Translations
        shop_subtitle: "Loyalty Program", shop_title: "Quizes and Prizes", shop_desc: "Answer quizzes, earn points and get discount coupons!",
        shop_header: "Coupon Market", quiz_header: "Quiz", shop_inventory: "Your Coupons",
        shop_points: "Points",
        level_easy: "Easy", level_medium: "Medium", level_hard: "Hard", quiz_cancel: "Cancel",
        shop_point_gain_1: "+1 Point", shop_point_gain_2: "+2 Points", shop_point_gain_3: "+3 Points",
        coupon_discount_10: "10% Discount", coupon_discount_20: "20% Discount", coupon_discount_50: "50% Discount",
        coupon_free: "Totally Free", coupon_cost_200: "200 Points", coupon_cost_500: "500 Points", coupon_cost_1000: "1000 Points", coupon_cost_2500: "2500 Points",
        coupon_btn_buy: "Buy",
        shop_empty: "Nothing yet...",
        shop_discount_label: "DISCOUNT",
        quiz_points_alert_enough: "Not enough points!",
        quiz_points_alert_confirm: "points to buy coupon?",
        quiz_points_alert_success: "Congratulations! You bought a coupon.",
        quiz_daily_limit: "Correct, but you reached the daily point limit (30).",
        quiz_correct_limit: "Correct! (Daily limit reached)",
        quiz_correct: "Correct!",
        quiz_wrong: "Wrong! Correct answer marked."
    }
};

/* =========================================
   3. HELPER FUNCTIONS
   ========================================= */

function showAlert(message) {
    let container = document.getElementById("notificationContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "notificationContainer";
        container.className =
            "fixed top-4 right-4 z-[9999] flex flex-col items-end gap-2 pointer-events-none";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className =
        "pointer-events-auto bg-gray-900/95 backdrop-blur text-white px-5 py-4 rounded-xl shadow-2xl " +
        "transform opacity-0 translate-x-8 scale-90 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] max-w-xs border border-white/10";

    toast.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fas fa-bell text-brand-gold text-lg"></i>
            <span class="text-sm font-medium leading-snug">${message}</span>
        </div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove("opacity-0", "translate-x-8", "scale-90");
        toast.classList.add("opacity-100", "translate-x-0", "scale-100");
    });

    setTimeout(() => {
        toast.classList.add("opacity-0", "translate-x-8", "scale-90");
        setTimeout(() => toast.remove(), 550);
    }, 3000);
}

function handleParticipate() {
    if (!currentUser) {
        const msg = currentLang === 'az' ? 
            "Hesabınıza daxil olun, yoxdursa qeydiyyatdan keçin." : 
            "Please sign in to your account, or register if you don't have one.";
        
        showAlert(msg);
        openAuthModal();
    } else {
        showAlert(translations[currentLang].modal_success_alert);
    }
}

/* =========================================
   4. NAVIGATION & THEME LOGIC
   ========================================= */

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
    } else {
        menu.classList.add('translate-x-full');
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if(translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-translate-html]').forEach(el => {
        const key = el.getAttribute('data-translate-html');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    document.getElementById('chatInput').placeholder = translations[lang].chat_placeholder;

    const btnAz = document.getElementById('lang-az');
    const btnEn = document.getElementById('lang-en');

    if (lang === 'az') {
        btnAz.classList.add('bg-brand-green', 'text-white');
        btnAz.classList.remove('text-gray-300', 'hover:text-white');
        
        btnEn.classList.remove('bg-brand-green', 'text-white');
        btnEn.classList.add('text-gray-300', 'hover:text-white');
    } else {
        btnEn.classList.add('bg-brand-green', 'text-white');
        btnEn.classList.remove('text-gray-300', 'hover:text-white');
        
        btnAz.classList.remove('bg-brand-green', 'text-white');
        btnAz.classList.add('text-gray-300', 'hover:text-white');
    }
    
    renderFeedbacks();
    updateAuthButton();
    renderTours(getCurrentFilterType());
    renderCoupons();

    const regionSelect = document.getElementById('plannerRegion');
    const levelSelect = document.getElementById('plannerLevel');
    const daysSelect = document.getElementById('plannerDays');

    if (lang === 'en') {
        regionSelect.options[0].text = "All Azerbaijan"; regionSelect.options[1].text = "Great Caucasus (North)"; 
        regionSelect.options[2].text = "Lesser Caucasus (West)"; regionSelect.options[3].text = "Talysh Mountains (South)";
        levelSelect.options[0].text = "Beginner (Family)";
        levelSelect.options[1].text = "Medium (Amateur)";
        levelSelect.options[2].text = "Hard (Professional)";
        daysSelect.options[0].text = "1 Day (Day trip)";
        daysSelect.options[1].text = "2 Days (Camping)";
        daysSelect.options[2].text = "3+ Days (Expedition)";
    } else {
        regionSelect.options[0].text = "Bütün Azərbaycan"; regionSelect.options[1].text = "Böyük Qafqaz (Şimal)"; 
        regionSelect.options[2].text = "Kiçik Qafqaz (Qərb)"; regionSelect.options[3].text = "Talış Dağları (Cənub)";
        levelSelect.options[0].text = "Başlanğıc (Ailəvi)";
        levelSelect.options[1].text = "Orta (Həvəskar)";
        levelSelect.options[2].text = "Çətin (Professional)";
        daysSelect.options[0].text = "1 Günlük (Günübirlik)";
        daysSelect.options[1].text = "2 Günlük (Kempinq)";
        daysSelect.options[2].text = "3+ Gün (Ekspedisiya)";
    }
}

function setTheme(mode) {
    const html = document.documentElement;
    const btnLight = document.getElementById('theme-light');
    const btnDark = document.getElementById('theme-dark');

    if (mode === 'dark') {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        btnDark.classList.add('bg-brand-green', 'text-white');
        btnDark.classList.remove('text-gray-300', 'hover:text-white');
        btnLight.classList.remove('bg-brand-green', 'text-white');
        btnLight.classList.add('text-gray-300', 'hover:text-white');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        btnLight.classList.add('bg-brand-green', 'text-white');
        btnLight.classList.remove('text-gray-300', 'hover:text-white');
        btnDark.classList.remove('bg-brand-green', 'text-white');
        btnDark.classList.add('text-gray-300', 'hover:text-white');
    }
}

let isManualScrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (isManualScrolling) return;

    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    const navMarker = document.getElementById('navMarker');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 250)) { 
            current = section.getAttribute('id');
        }
    });

    if (window.scrollY < 100) {
        current = 'home';
    }

    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
            navMarker.style.width = `${link.offsetWidth}px`;
            navMarker.style.left = `${link.offsetLeft}px`;
            navMarker.style.opacity = '1';
            link.classList.add('text-brand-gold');
        } else {
            link.classList.remove('text-brand-gold');
        }
    });
});

/* =========================================
   5. DATA & MAP LOGIC
   ========================================= */

const tourDatabase = [
    { 
        id: 18, 
        name: { az: "Tufandağ Zirvəsi (4191m)", en: "Tufandag Peak (4191m)" },
        region: { az: "Böyük Qafqaz", en: "Great Caucasus" },
        type: "hiking",
        price: 230, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Tufandag_Mountain_March_2015.jpg/330px-Tufandag_Mountain_March_2015.jpg", 
        lat: 41.1667, lng: 47.9667, 
        features: { az: ["Müqəddəs Zirvə", "Buzlaqlar", "Ekstremal"], en: ["Holy Peak", "Glaciers", "Extreme"] },
        desc: { az: "Azərbaycanın ən möhtəşəm və müqəddəs zirvələrindən biri. Tufandağ həm mənzərəsi, həm də çətinlik dərəcəsi ilə seçilir.", en: "One of the most magnificent and holy peaks of Azerbaijan. Tufandag is distinguished by both its view and difficulty level." }
    },
    { 
        id: 1, 
        name: { az: "Bazardüzü Zirvəsi (4466m)", en: "Bazarduzu Peak (4466m)" }, 
        region: { az: "Böyük Qafqaz", en: "Great Caucasus" }, 
        type: "hiking",
        price: 250, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bazarduzu_robl.JPG/2560px-Bazarduzu_robl.JPG", 
        lat: 41.2206, lng: 47.8594, 
        features: { az: ["Peşəkar Bələdçi", "Kempinq Avadanlığı", "Nəqliyyat"], en: ["Professional Guide", "Camping Gear", "Transport"] }, 
        desc: { az: "Azərbaycanın ən yüksək zirvəsi olan Bazardüzünə unudulmaz ekspedisiya. Fiziki hazırlıq tələb olunur. Buludların üzərində gəzmək şansı.", en: "Unforgettable expedition to Bazarduzu, the highest peak of Azerbaijan. Physical fitness is required. A chance to walk above the clouds." }
    },
    { 
        id: 2, 
        name: { az: "Şahdağ Milli Parkı", en: "Shahdag National Park" }, 
        region: { az: "Böyük Qafqaz", en: "Great Caucasus" }, 
        type: "hiking",
        price: 120, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://www.azernews.az/media/2017/01/04/shahdag1.jpg", 
        lat: 41.2725, lng: 48.0131, 
        features: { az: ["Piknik", "Şəlalələr", "Fotoqrafiya"], en: ["Picnic", "Waterfalls", "Photography"] }, 
        desc: { az: "Şahdağın ətəklərində yüngül yürüş. Alp çəmənlikləri, Laza şəlaləsi və təmiz dağ havası. Ailələr və həvəskarlar üçün idealdır.", en: "Light hike at the foothills of Shahdag. Alpine meadows, Laza waterfall and clean mountain air. Ideal for families and amateurs." }
    },
    { 
        id: 3, 
        name: { az: "Kəpəz Dağı, Göygöl", en: "Mount Kapaz, Goygol" }, 
        region: { az: "Kiçik Qafqaz", en: "Lesser Caucasus" }, 
        type: "hiking",
        price: 180, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://azerbaijan.travel/resize3000/center/pages/398/56b0c055-ffe5-4c3f-b98f-679a12d3af84.jpg", 
        lat: 40.3847, lng: 46.3308, 
        features: { az: ["Göl Mənzərəsi", "Meşə Yürüşü", "Qonaqlama"], en: ["Lake View", "Forest Hike", "Accommodation"] }, 
        desc: { az: "Zəlzələdən yaranan möcüzə. Göygöl və Maralgöl ətrafında yürüş, Kəpəz dağının əzəmətli mənzərəsi.", en: "Miracle created by earthquake. Hiking around Goygol and Maralgol, majestic view of Mount Kapaz." }
    },
    { 
        id: 4, 
        name: { az: "Xınalıq, Qalaxudat", en: "Khinalig, Galakhudat" }, 
        region: { az: "Quba", en: "Quba" }, 
        type: "hiking",
        price: 80, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://azerbaijan.travel/resize3000/center/pages/2905/50a7dab3-b275-4bd4-b232-64d0f71b1f7b.jpg", 
        lat: 41.1797, lng: 48.1189, 
        features: { az: ["Tarixi Kənd", "Eko-cığır", "Çay süfrəsi"], en: ["Historical Village", "Eco-trail", "Tea Set"] }, 
        desc: { az: "Avropanın ən yüksək yaşayış məntəqələrindən biri. Qədim Xınalıq kəndindən Qalaxudata uzanan mənzərəli dağ cığırı.", en: "One of the highest settlements in Europe. Scenic mountain trail stretching from ancient Khinalig village to Galakhudat." }
    },
    { 
        id: 5, 
        name: { az: "Babadağ Ziyarəti (3629m)", en: "Babadag Pilgrimage (3629m)" }, 
        region: { az: "İsmayıllı", en: "Ismayilli" }, 
        type: "hiking",
        price: 200, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://525.az/img/pics/large/2021-03/186662_8zl6umuul6.jpg", 
        lat: 41.0186, lng: 48.1694, 
        features: { az: ["Ziyarətgah", "Çətin Marşrut", "Çay keçidləri"], en: ["Shrine", "Hard Route", "River Crossings"] }, 
        desc: { az: "Həm mənəvi, həm fiziki sınaq. Qar çayını keçərək zirvəyə doğru müqəddəs yürüş.", en: "Both spiritual and physical test. Holy hike towards the summit crossing the Garchay river." }
    },
    { 
        id: 6, 
        name: { az: "Talış Dağları - Sim kəndi", en: "Talysh Mountains - Sim village" }, 
        region: { az: "Astara/Lənkəran", en: "Astara/Lankaran" }, 
        type: "hiking",
        price: 150, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://tehsil.com.az/wp-content/uploads/2025/07/talis-dalari-780x470.jpg", 
        lat: 38.7758, lng: 48.4161, 
        features: { az: ["Sıx Meşə", "Şəlalə", "Milli Mətbəx"], en: ["Dense Forest", "Waterfall", "National Cuisine"] }, 
        desc: { az: "Cənubun sirli meşələri. Mamırlı qayalar, Sim şəlaləsi və Talış dağlarının unikal florası.", en: "Mysterious forests of the South. Mossy rocks, Sim waterfall and unique flora of Talysh mountains." }
    },
    { 
        id: 10, 
        name: { az: "Laza - Kuzun Yürüşü", en: "Laza - Kuzun Hike" }, 
        region: { az: "Qusar", en: "Qusar" }, 
        type: "hiking",
        price: 90, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://azerbaijan.travel/resize3000/center/pages/2912/df64d11b-d95f-4bc8-af2c-37f707c4684f.jpg", 
        lat: 41.2950, lng: 48.1180, 
        features: { az: ["Dağ keçidləri", "Şəlalələr", "Fotoqrafiya"], en: ["Mountain passes", "Waterfalls", "Photography"] }, 
        desc: { az: "Qusarın ən məşhur iki dağ kəndi arasında klassik yürüş marşrutu. Möhtəşəm dərələr və şəlalələr sizi gözləyir.", en: "Classic hiking route between two most famous mountain villages of Qusar. Magnificent valleys and waterfalls await you." }
    },
    { 
        id: 11, 
        name: { az: "Qaranohur Gölü", en: "Garanohur Lake" }, 
        region: { az: "İsmayıllı", en: "Ismayilli" }, 
        type: "hiking",
        price: 75, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Qaranohur_%C4%B0smay%C4%B1ll%C4%B1_rayonu.jpg/1280px-Qaranohur_%C4%B0smay%C4%B1ll%C4%B1_rayonu.jpg", 
        lat: 40.8523, lng: 48.1567, 
        features: { az: ["Göl", "Meşə Yolu", "Sakitlik"], en: ["Lake", "Forest Road", "Silence"] }, 
        desc: { az: "Dəniz səviyyəsindən 1520 metr yüksəklikdə yerləşən, dağların arasında gizlənmiş ecazkar göl. Orta çətinlikli yürüş.", en: "Amazing lake hidden among mountains at 1520 meters above sea level. Medium difficulty hike." }
    },
    { 
        id: 12, 
        name: { az: "Hirkan Milli Parkı", en: "Hirkan National Park" }, 
        region: { az: "Lənkəran", en: "Lankaran" }, 
        type: "hiking",
        price: 130, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/495698689_1098127989024991_1263712479972368331_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bNIo9nB-_0sQ7kNvwEkE5oH&_nc_oc=AdkQ-rNnBmtuwksaG8K9Y_4bSGfnehuHDzIq0X7J6-PslzczPCt9Fat4zqm_b00v0bs&_nc_zt=23&_nc_ht=scontent.fgbb1-1.fna&_nc_gid=cUkl300rEgWdkygdBKyS-g&oh=00_Afi3MlIzWkZIR0glfTOEvjETg4ZyYx5BrJVM9b3VoKeB7A&oe=692FA397", 
        lat: 38.6500, lng: 48.7833, 
        features: { az: ["Dəmir ağaclar", "Xanbulan gölü", "Subtropik"], en: ["Iron Trees", "Khanbulan Lake", "Subtropical"] }, 
        desc: { az: "Üçüncü dövrün relikt bitkiləri, Dəmir ağac meşələri və Xanbulan gölünün füsunkar mənzərəsi.", en: "Relict plants of the tertiary period, Iron tree forests and fascinating view of Khanbulan lake." }
    },
    { 
        id: 13, 
        name: { az: "Bakı - Qız Qalası", en: "Baku - Maiden Tower" }, 
        region: { az: "Bakı", en: "Baku" }, 
        type: "tour",
        price: 50, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg/1200px-Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg", 
        lat: 40.5694, lng: 45.7289, 
        features: { az: ["Tarixi abidə", "Paytaxt", "Bakı"], en: ["Historical Monument", "Capital", "Baku"] }, 
        desc: { az: "Azərbaycanın Paytaxtında yerləşən məşhur qala.", en: "Famous tower located in the Capital of Azerbaijan." }
    },
    { 
        id: 7, 
        name: { az: "Şəki Xan Sarayı", en: "Sheki Khan's Palace" }, 
        region: { az: "Şəki", en: "Sheki" }, 
        type: "history",
        price: 140, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://upload.wikimedia.org/wikipedia/commons/6/68/%C5%9E%C9%99ki_xan_saray%C4%B1_common.jpg", 
        lat: 41.1919, lng: 47.1706, 
        features: { az: ["UNESCO İrsi", "Karvansaray", "Piti"], en: ["UNESCO Heritage", "Caravanserai", "Piti"] }, 
        desc: { az: "Şərq memarlığının incisi. Xan Sarayı, Kiş Alban Məbədi və qədim küçələr.", en: "Pearl of Eastern architecture. Khan's Palace, Kish Albanian Temple and ancient streets." }
    },
    { 
        id: 8, 
        name: { az: "Qobustan, Palçıq Vulkanları", en: "Gobustan, Mud Volcanoes" }, 
        region: { az: "Abşeron", en: "Absheron" }, 
        type: "history",
        price: 60, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://serqqapisi.az/storage/postImage/1727769801_17277694092056335169-1200x630jpg.jpg", 
        lat: 40.1030, lng: 49.4263, 
        features: { az: ["Qayaüstü rəsmlər", "Vulkanlar", "Muzey"], en: ["Rock Paintings", "Volcanoes", "Museum"] }, 
        desc: { az: "Daş dövrünə səyahət. Qobustan Milli Parkı və dünyanın ən aktiv palçıq vulkanları.", en: "Journey to the Stone Age. Gobustan National Park and the world's most active mud volcanoes." }
    },
    { 
        id: 9, 
        name: { az: "Naxçıvan, Əshabi-Kəf", en: "Nakhchivan, Ashabi-Kef" }, 
        region: { az: "Naxçıvan", en: "Nakhchivan" }, 
        type: "history",
        price: 350, 
        days: { az: "3 Gün", en: "3 Days" }, 
        img: "https://azerbaijan.travel/resize3000/center/pages/450/fe1f1f4b-ce9a-40bf-b37a-cc4bb4fa98b3.jpg", 
        lat: 39.2089, lng: 45.4122, 
        features: { az: ["Aviabilet", "Ziyarətgah", "Duzdağ"], en: ["Flight Ticket", "Shrine", "Duzdag"] }, 
        desc: { az: "Qədim diyar. Möminə Xatun türbəsi, Batabat gölü və müqəddəs Əshabi-Kəf mağarası.", en: "Ancient land. Momine Khatun Mausoleum, Batabat Lake and holy Ashabi-Kef cave." }
    },
    { 
        id: 14, 
        name: { az: "Lahıc Sənətkarlıq Turu", en: "Lahij Craft Tour" }, 
        region: { az: "İsmayıllı", en: "Ismayilli" }, 
        type: "history",
        price: 85, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://lh6.googleusercontent.com/proxy/cnijIx-M89goxKWp3NTaGsCBzkY_HtSnrQkNeTfWQE21YJPhljPZJNYdgrVsQHeOTLb97yuSycVRsDTb09yZVOspfxpXY7RxaUnX59GbP1CKOS0EyB1k0qEuvycYef38-EroGONx7AGJerlw8Qrou89FH4aNWSOgrJY", 
        lat: 40.8492, lng: 48.3835, 
        features: { az: ["Misgərlik", "Daş küçələr", "Qədim irs"], en: ["Copper Craft", "Cobblestone Streets", "Ancient Heritage"] }, 
        desc: { az: "Böyük Qafqazın cənub yamaclarında yerləşən qədim sənətkarlıq mərkəzi. Misgərlər, dəmirçilər və unikal memarlıq.", en: "Ancient craft center located on the southern slopes of the Great Caucasus. Coppersmiths, blacksmiths and unique architecture." }
    },
    { 
        id: 15, 
        name: { az: "Çıraqqala Qalası", en: "Chiraggala Fortress" }, 
        region: { az: "Şabran", en: "Shabran" }, 
        type: "history",
        price: 70, 
        days: { az: "1 Gün", en: "1 Day" }, 
        img: "https://qebulol.az/wp-content/uploads/2025/05/unnamed-1.jpg", 
        lat: 41.0775, lng: 48.9242, 
        features: { az: ["Qala divarları", "Tarixi İrs", "Mənzərə"], en: ["Fortress Walls", "Historical Heritage", "View"] }, 
        desc: { az: "V-VI əsrlərə aid qədim istehkam. Qalaya qalxan yol həm tarix, həm də möhtəşəm meşə mənzərəsi təqdim edir.", en: "Ancient fortification dating back to V-VI centuries. The road to the fortress offers both history and magnificent forest views." }
    },
    { 
        id: 16, 
        name: { az: "Əlincə Qalası", en: "Alinja Fortress" }, 
        region: { az: "Naxçıvan", en: "Nakhchivan" }, 
        type: "history",
        price: 360, 
        days: { az: "3 Gün", en: "3 Days" }, 
        img: "https://img.nuhcixan.az/news/2019/05/photo_15521.jpg?v=MjAxOS0wNS0xOSAxNTozNDo0Mg==", 
        lat: 39.1947, lng: 45.6983, 
        features: { az: ["Azərbaycanın Maçu Pikçusu", "Tarix", "Sıldırım"], en: ["Machu Picchu of Azerbaijan", "History", "Steep"] }, 
        desc: { az: "Naxçıvanın simvollarından biri. 1500-dən çox pilləkənlə qalxılan bu qala möhtəşəm tarixə şahidlik edib.", en: "One of the symbols of Nakhchivan. Accessible by more than 1500 stairs, this fortress has witnessed magnificent history." }
    },
    { 
        id: 17, 
        name: { az: "İvanovka Turu", en: "Ivanovka Tour" }, 
        region: { az: "İsmayıllı", en: "Ismayilli" }, 
        type: "history",
        price: 110, 
        days: { az: "2 Gün", en: "2 Days" }, 
        img: "https://media-cdn.tripadvisor.com/media/photo-s/17/8c/ad/7c/ismayilli-ivanovka-azerbaijan.jpg", 
        lat: 40.7333, lng: 48.0333, 
        features: { az: ["Molokan mədəniyyəti", "Üzümçülük", "Göl"], en: ["Molokan Culture", "Viticulture", "Lake"] }, 
        desc: { az: "Azərbaycanda yaşayan molokanların unikal kəndi. Qədim adətlər, dadlı təamlar və yerli şərab zavodu ilə tanışlıq.", en: "Unique village of Molokans living in Azerbaijan. Acquaintance with ancient traditions, delicious food and local winery." }
    }
];

let map;
let markers = [];

function initMap() {
    map = L.map('tourMap', { scrollWheelZoom: false }).setView([40.5, 47.5], 7); 
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        maxZoom: 19
    }).addTo(map);

    updateMap(tourDatabase);
}

function updateMap(data) {
    if(!map) return;
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    data.forEach(t => {
        const customIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="width: 14px; height: 14px; border-radius: 50%;"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const popup = `
            <div class="text-center min-w-[150px]">
                <img src="${t.img}" class="w-full h-24 object-cover rounded mb-2">
                <h3 class="font-bold text-sm text-black">${t.name[currentLang]}</h3>
                <p class="text-brand-green font-bold">${t.price}₼</p>
            </div>
        `;

        const marker = L.marker([t.lat, t.lng], { icon: customIcon }).addTo(map).bindPopup(popup);
        markers.push(marker);
    });
}

function getCurrentFilterType() {
    if(document.getElementById('btn-filter-all').classList.contains('bg-brand-gold')) return 'all';
    if(document.getElementById('btn-filter-hiking').classList.contains('bg-brand-gold')) return 'hiking';
    if(document.getElementById('btn-filter-history').classList.contains('bg-brand-gold')) return 'history';
    return 'all';
}

function renderTours(filterType = 'all') {
    const grid = document.getElementById('toursGrid');
    grid.innerHTML = '';
    
    const filtered = tourDatabase.filter(t => filterType === 'all' || t.type === filterType);
    
    updateMap(filtered);

    filtered.forEach((t, index) => {
        const card = `
            <div onclick="openModal(${t.id})" class="tour-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 cursor-pointer group animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
                <div class="relative h-64 overflow-hidden">
                    <img src="${t.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                        ${t.region[currentLang]}
                    </div>
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 pt-12">
                        <h3 class="text-xl font-bold text-white group-hover:text-brand-gold transition">${t.name[currentLang]}</h3>
                    </div>
                </div>
                <div class="p-6 flex justify-between items-center bg-gray-50 dark:bg-gray-900 transition-colors">
                    <div>
                        <p class="text-gray-400 text-xs uppercase mb-1" data-translate="modal_days">Müddət</p>
                        <p class="text-gray-800 dark:text-white font-bold">${t.days[currentLang]}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-400 text-xs uppercase mb-1" data-translate="modal_price">Qiymət</p>
                        <p class="text-brand-gold text-xl font-bold">${t.price}₼</p>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
    
    const daysLabel = translations[currentLang].modal_days;
    const priceLabel = translations[currentLang].modal_price;
    
    grid.querySelectorAll('[data-translate="modal_days"]').forEach(el => el.innerText = daysLabel);
    grid.querySelectorAll('[data-translate="modal_price"]').forEach(el => el.innerText = priceLabel);
}

function filterTours(type) {
    const btns = ['btn-filter-all', 'btn-filter-hiking', 'btn-filter-history'];
    btns.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove('bg-brand-gold', 'text-black');
        btn.classList.add('dark:text-gray-300', 'text-gray-700');
    });

    let activeBtnId = 'btn-filter-all';
    if(type === 'hiking') activeBtnId = 'btn-filter-hiking';
    if(type === 'history') activeBtnId = 'btn-filter-history';

    const activeBtn = document.getElementById(activeBtnId);
    activeBtn.classList.remove('dark:text-gray-300', 'text-gray-700');
    activeBtn.classList.add('bg-brand-gold', 'text-black');

    renderTours(type);
}

const feedbacks = [
    { name: "Leyla M.", rating: 5, text: "AI Planlayıcı inanılmaz işlədi, Şahdağ səfərim mükəmməl keçdi! Hər şey çox dəqiq idi və marşrutlar tam istədiyim kimi seçilmişdi. Təşəkkürlər Zirvə.az komandası!", date: "2024-05-15" },
    { name: "John D.", rating: 4, text: "Very useful tool for budget travelers. Loved the Smart Match feature. It saved me a lot of time planning my hiking trip in the mountains.", date: "2024-06-02" },
    { name: "Светлана К.", rating: 5, text: "Отличный сервис, нашла тур своей мечты в Баку! Гид был просто великолепен, а природа Азербайджана просто завораживает. Обязательно вернусь снова.", date: "2024-06-20" }
];

let currentRating = 5;
function setRating(r) {
    currentRating = r;
    const buttons = document.querySelectorAll('.star-btn');
    
    buttons.forEach((btn, idx) => {
        if(idx < r) {
            btn.classList.remove('text-gray-400', 'dark:text-gray-600');
            btn.classList.add('text-brand-gold');
        } else {
            btn.classList.add('text-gray-400', 'dark:text-gray-600');
            btn.classList.remove('text-brand-gold');
        }
    });
}

function renderFeedbacks() {
    const list = document.getElementById('feedbackList');
    const seeMoreText = translations[currentLang].see_more;
    const seeLessText = translations[currentLang].see_less;

    list.innerHTML = feedbacks.map((f, idx) => {
        const isLong = f.text.length > 100;
        
        return `
        <div class="bg-white dark:bg-white/5 dark:backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition">
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
                        ${f.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-brand-dark dark:text-white">${f.name}</h4>
                        <div class="text-brand-gold text-xs">
                            ${Array(f.rating).fill('<i class="fas fa-star"></i>').join('')}
                        </div>
                    </div>
                </div>
                <span class="text-xs text-gray-400">${f.date}</span>
            </div>
            
            <div class="relative">
                <div id="review-text-${idx}" class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${isLong ? 'text-content' : ''}">
                    "${f.text}"
                </div>
                ${isLong ? `
                <button onclick="toggleSeeMore(${idx})" id="btn-${idx}" class="see-more-btn">
                    ${seeMoreText}...
                </button>` : ''}
            </div>
        </div>
    `}).join('');
}

function toggleSeeMore(id) {
    const content = document.getElementById(`review-text-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const seeMoreText = translations[currentLang].see_more;
    const seeLessText = translations[currentLang].see_less;

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        btn.innerText = `${seeMoreText}...`;
    } else {
        content.classList.add('expanded');
        btn.innerText = `${seeLessText}...`;
    }
}

function submitFeedback() {
    const name = document.getElementById('feedName').value;
    const text = document.getElementById('feedText').value;
    
    if (!name || !text) {
        showAlert(translations[currentLang].msg_fill_all);
        return;
    }

    feedbacks.unshift({
        name: name,
        rating: currentRating,
        text: text,
        date: new Date().toISOString().split('T')[0]
    });

    document.getElementById('feedName').value = '';
    document.getElementById('feedText').value = '';
    setRating(5);

    renderFeedbacks();
    showAlert(translations[currentLang].msg_thanks);
}

function openModal(id) {
    const t = tourDatabase.find(x => x.id === id);
    if(!t) return;

    document.getElementById('modalTitle').innerText = t.name[currentLang];
    document.getElementById('modalRegion').innerText = t.region[currentLang];
    document.getElementById('modalDesc').innerText = t.desc[currentLang];
    document.getElementById('modalPrice').innerText = t.price + "₼";
    document.getElementById('modalDays').innerText = t.days[currentLang];
    document.getElementById('modalImg').src = t.img;
    document.getElementById('modalFeatures').innerHTML = t.features[currentLang].map(f => `<li class="flex items-center"><i class="fas fa-check text-brand-green mr-2"></i> ${f}</li>`).join('');

    const m = document.getElementById('tourModal');
    m.classList.remove('hidden');
    setTimeout(() => m.classList.add('active'), 10);
}

function closeModal() {
    const m = document.getElementById('tourModal');
    m.classList.remove('active');
    setTimeout(() => m.classList.add('hidden'), 300);
}

/* =========================================
   6. AUTH LOGIC (LOGIN/REGISTER)
   ========================================= */

let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = localStorage.getItem('currentUser');

function openAuthModal() {
    if (currentUser) {
        if (confirm(currentLang === 'az' ? 'Hesabdan çıxmaq istəyirsiniz?' : 'Do you want to logout?')) {
            logout();
        }
    } else {
        const m = document.getElementById('authModal');
        m.classList.remove('hidden');
        setTimeout(() => m.classList.add('active'), 10);
        switchAuthTab('login');
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('loginError').classList.add('hidden');
        document.getElementById('registerError').classList.add('hidden');
        document.getElementById('registerSuccess').classList.add('hidden');
    }
}

function closeAuthModal() {
    const m = document.getElementById('authModal');
    m.classList.remove('active');
    setTimeout(() => m.classList.add('hidden'), 300);
}

function switchAuthTab(tab) {
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const formLogin = document.getElementById('formLogin');
    const formRegister = document.getElementById('formRegister');

    const activeClasses = ['border-brand-green', 'text-brand-green', 'border-b-2'];
    const inactiveClasses = ['text-gray-400', 'dark:text-gray-500', 'hover:text-brand-gold'];

    if (tab === 'login') {
        tabLogin.classList.add(...activeClasses);
        tabLogin.classList.remove(...inactiveClasses);

        tabRegister.classList.remove(...activeClasses);
        tabRegister.classList.add(...inactiveClasses);
        
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
    } else {
        tabRegister.classList.add(...activeClasses);
        tabRegister.classList.remove(...inactiveClasses);

        tabLogin.classList.remove(...activeClasses);
        tabLogin.classList.add(...inactiveClasses);
        
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
    }
}

function handleRegister() {
    const user = document.getElementById('regUsername').value.trim();
    const pass = document.getElementById('regPassword').value.trim();
    const errBox = document.getElementById('registerError');
    const successBox = document.getElementById('registerSuccess');

    if (!user || !pass) {
        errBox.innerText = translations[currentLang].auth_err_fill;
        errBox.classList.remove('hidden');
        return;
    }

    if (users.find(u => u.username === user)) {
        errBox.innerText = translations[currentLang].auth_err_exists;
        errBox.classList.remove('hidden');
        successBox.classList.add('hidden');
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem('users', JSON.stringify(users));

    errBox.classList.add('hidden');
    successBox.innerText = translations[currentLang].auth_success_reg;
    successBox.classList.remove('hidden');

    setTimeout(() => {
        switchAuthTab('login');
        document.getElementById('loginUsername').value = user;
    }, 1500);
}

function handleLogin() {
    const user = document.getElementById('loginUsername').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
    const errBox = document.getElementById('loginError');

    if (!user || !pass) {
        errBox.innerText = translations[currentLang].auth_err_fill;
        errBox.classList.remove('hidden');
        return;
    }

    const foundUser = users.find(u => u.username === user && u.password === pass);

    if (foundUser) {
        currentUser = user;
        localStorage.setItem('currentUser', user);
        closeAuthModal();
        updateAuthButton();
        loadUserGameState();
    } else {
        errBox.innerText = translations[currentLang].auth_err_invalid;
        errBox.classList.remove('hidden');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthButton();
    location.reload(); 
}

function updateAuthButton() {
    const btn = document.getElementById('authBtn');
    const span = btn.querySelector('span');
    
    if (currentUser) {
        span.innerText = currentUser;
        btn.title = translations[currentLang].nav_logout; 
    } else {
        span.innerText = translations[currentLang].nav_login;
        btn.title = "";
    }
}

/* =========================================
   7. SHOP & QUIZ LOGIC (NEW, PER-USER)
   ========================================= */
let userPoints = 0;
let userCoupons = [];
let usedQuestions = JSON.parse(localStorage.getItem('usedQuestions')) || [];

function getUserStorageKey(base) {
    return currentUser ? `${base}_${currentUser}` : base;
}

function loadUserGameState() {
    if (!currentUser) {
        userPoints = 0;
        userCoupons = [];
    } else {
        userPoints = parseInt(localStorage.getItem(getUserStorageKey('userPoints'))) || 0;
        userCoupons = JSON.parse(localStorage.getItem(getUserStorageKey('userCoupons'))) || [];
    }
    renderCoupons();
}

function saveUserGameState() {
    if (!currentUser) return;
    localStorage.setItem(getUserStorageKey('userPoints'), userPoints);
    localStorage.setItem(getUserStorageKey('userCoupons'), JSON.stringify(userCoupons));
}

function getDailyData() {
    const today = new Date().toISOString().split('T')[0];
    const key = getUserStorageKey('dailyPointsData');
    let dailyData = JSON.parse(localStorage.getItem(key)) || { date: today, points: 0 };

    if (dailyData.date !== today) {
        dailyData = { date: today, points: 0 };
    }

    return { dailyData, key };
}

function saveDailyData(key, dailyData) {
    localStorage.setItem(key, JSON.stringify(dailyData));
}

// FALLBACK STATIC DATA
const quizData = {
    easy: [
        { q: "Azərbaycanın paytaxtı haradır?", a: ["Bakı", "Gəncə", "Sumqayıt"], c: 0 },
        { q: "Azərbaycanın ən böyük gölü?", a: ["Göygöl", "Sarısu", "Ceyranbatan"], c: 1 },
        { q: "Azərbaycanın valyutası nədir?", a: ["Dollar", "Manat", "Euro"], c: 1 },
        { q: "Bayrağımızda neçə rəng var?", a: ["2", "3", "4"], c: 1 },
        { q: "Xəzər dənizdir yoxsa göl?", a: ["Dəniz", "Göl", "Çay"], c: 1 }
    ],
    medium: [
        { q: "Bazardüzü zirvəsinin hündürlüyü nə qədərdir?", a: ["4466 m", "4243 m", "4191 m"], c: 0 },
        { q: "Xınalıq kəndi hansı rayonda yerləşir?", a: ["Qusar", "Quba", "Qəbələ"], c: 1 },
        { q: "Şahdağ Milli Parkı nə vaxt yaradılıb?", a: ["2000", "2006", "2010"], c: 1 },
        { q: "Azərbaycanın neçə iqlim tipi var?", a: ["7", "9", "11"], c: 1 },
        { q: "Dünyada palçıq vulkanlarının neçə faizi Azərbaycandadır?", a: ["20%", "45%", "60%"], c: 1 }
    ],
    hard: [
        { q: "Tufandağ zirvəsi hansı dağ silsiləsində yerləşir?", a: ["Baş Qafqaz", "Kiçik Qafqaz", "Talış"], c: 0 },
        { q: "Azərbaycanın sahəsi nə qədərdir?", a: ["86.6 min km²", "88 min km²", "82 min km²"], c: 0 },
        { q: "Kəpəz dağı hansı ildə zəlzələ nəticəsində yaranıb?", a: ["1139", "1240", "1500"], c: 0 },
        { q: "Qız Qalası UNESCO-nun siyahısına nə vaxt daxil edilib?", a: ["1998", "2000", "2003"], c: 1 },
        { q: "Azərbaycanın ən uzun çayı hansıdır?", a: ["Araz", "Kür", "Samur"], c: 1 }
    ]
};

let currentQuizLevel = null;
let currentQuizPoints = 0;

function renderCoupons() {
    document.getElementById('userPointsDisplay').innerText = userPoints;
    const inventory = document.getElementById('userCouponsList');
    const discountLabel = translations[currentLang].shop_discount_label;
    const emptyLabel = translations[currentLang].shop_empty;

    if(userCoupons.length === 0) {
        inventory.innerHTML = `<span class="italic text-gray-400">${emptyLabel}</span>`;
    } else {
        inventory.innerHTML = userCoupons.map(c => `
            <div class="bg-brand-green text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-2">
                <i class="fas fa-ticket-alt"></i> ${c}% ${discountLabel}
            </div>
        `).join('');
    }
}

function buyCoupon(percent, cost) {
    if(userPoints >= cost) {
        if(confirm(`${cost} ${translations[currentLang].quiz_points_alert_confirm}`)) {
            userPoints -= cost;
            userCoupons.push(percent);
            
            saveUserGameState();
            
            renderCoupons();
            showAlert(translations[currentLang].quiz_points_alert_success);
        }
    } else {
        showAlert(`${translations[currentLang].quiz_points_alert_enough} (${cost - userPoints})`);
    }
}

async function startQuiz(level) {
    if (!currentUser) {
        showAlert(currentLang === 'az' ? "Hesabınıza daxil olun, yoxdursa qeydiyyat edin." : "Please login or register to play.");
        return;
    }

    currentQuizLevel = level;
    currentQuizPoints = level === 'easy' ? 1 : (level === 'medium' ? 2 : 3);
    
    document.getElementById('quizLevelSelect').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    
    document.getElementById('optionsContainer').innerHTML = '<div class="flex justify-center p-4"><div class="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div></div>';
    document.getElementById('quizLevelBadge').innerText = level.toUpperCase();
    document.getElementById('questionText').innerText = currentLang === 'az' ? 'Sual hazırlanır...' : 'Generating question...';

    try {
        const prompt = `
            Create a unique multiple-choice question about Azerbaijan (geography, culture, history, nature).
            Difficulty Level: ${level} (Easy: very well known facts. Medium: general knowledge. Hard: specific details, numbers, dates).
            Language: ${currentLang}.
            
            Previously asked questions (topics): ${usedQuestions.slice(-20).join(', ')}. Avoid these topics if possible.
            
            Return STRICT JSON format only:
            {
                "q": "Question text here",
                "a": ["Option 1", "Option 2", "Option 3"],
                "c": 0 
            }
            (where 'c' is the 0-based index of the correct answer, e.g., 0 for Option 1).
            Do not include markdown formatting like \`\`\`json. Just the JSON string.
        `;

        const responseText = await callGeminiAPI(prompt);
        
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const qData = JSON.parse(cleanJson);

        if(!qData.q || !Array.isArray(qData.a)) throw new Error("Invalid format");

        renderQuizQuestion(qData);
        
        usedQuestions.push(qData.q);
        if(usedQuestions.length > 50) usedQuestions.shift();
        localStorage.setItem('usedQuestions', JSON.stringify(usedQuestions));

    } catch (error) {
        console.error("AI Quiz Error:", error);
        const questions = quizData[level];
        const randIndex = Math.floor(Math.random() * questions.length);
        renderQuizQuestion(questions[randIndex]);
    }
}

function renderQuizQuestion(q) {
    document.getElementById('questionText').innerText = q.q;
    document.getElementById('optionsContainer').innerHTML = '';
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition quiz-option text-sm";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, q.c);
        document.getElementById('optionsContainer').appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const resultBox = document.getElementById('quizResult');
    const opts = document.getElementById('optionsContainer').children;
    
    for (let btn of opts) {
        btn.disabled = true;
        btn.classList.add('disabled', 'opacity-50');
    }
    
    if (selected === correct) {
        opts[selected].classList.remove('opacity-50');
        opts[selected].classList.add('bg-green-100', 'border-green-500', 'text-green-700');
        
        const { dailyData, key } = getDailyData();
        
        if (dailyData.points >= 30) {
            resultBox.innerHTML = `<span class="text-yellow-600 font-bold">${translations[currentLang].quiz_daily_limit}</span>`;
        } else if (dailyData.points + currentQuizPoints > 30) {
            const pointsToAdd = 30 - dailyData.points;
            userPoints += pointsToAdd;
            dailyData.points += pointsToAdd;
            
            saveUserGameState();
            saveDailyData(key, dailyData);
            
            resultBox.innerHTML = `<span class="text-green-600">${translations[currentLang].quiz_correct_limit} +${pointsToAdd}</span>`;
            renderCoupons();
        } else {
            userPoints += currentQuizPoints;
            dailyData.points += currentQuizPoints;
            
            saveUserGameState();
            saveDailyData(key, dailyData);
            
            resultBox.innerHTML = `<span class="text-green-600">${translations[currentLang].quiz_correct} +${currentQuizPoints}</span>`;
            renderCoupons();
        }
    } else {
        opts[selected].classList.remove('opacity-50');
        opts[selected].classList.add('bg-red-100', 'border-red-500', 'text-red-700');
        opts[correct].classList.remove('opacity-50');
        opts[correct].classList.add('bg-green-100', 'border-green-500', 'text-green-700'); 
        
        resultBox.innerHTML = `<span class="text-red-600">${translations[currentLang].quiz_wrong}</span>`;
    }
    
    resultBox.classList.remove('hidden');
    
    setTimeout(() => {
        resetQuizUI();
    }, 2500);
}

function resetQuizUI() {
    document.getElementById('quizLevelSelect').classList.remove('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
}

/* =========================================
   8. AI & GEMINI LOGIC (UPDATED FOR VERCEL)
   ========================================= */

// UPDATED: Calls the internal Vercel function instead of Google directly
async function callGeminiAPI(prompt, systemInstruction = "") {
    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, systemInstruction })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        return data.text;
    } catch (e) { 
        console.error(e); 
        return currentLang === 'az' ? "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin." : "Error occurred. Please try again."; 
    }
}

async function generateHikingPlan() {
    const region = document.getElementById('plannerRegion').value;
    const level = document.getElementById('plannerLevel').value;
    const days = document.getElementById('plannerDays').value;

    document.getElementById('plannerEmpty').classList.add('hidden');
    document.getElementById('plannerLoading').classList.remove('hidden');
    document.getElementById('plannerLoading').style.display = 'flex';
    document.getElementById('plannerContent').classList.add('hidden');

    const prompt = `
        Sən peşəkar dağ bələdçisisən. İstifadəçi üçün Azərbaycan daxilində dağ yürüşü planı hazırla.
        Dil: ${currentLang === 'en' ? 'English' : 'Azerbaijani'}
        
        Giriş Məlumatları:
        - Bölgə: ${region}
        - Çətinlik: ${level}
        - Müddət: ${days} gün
        
        Tələblər:
        1. Yalnız Azərbaycan daxili marşrut təklif et.
        2. Marşrutun konkret adını yaz (Məs: Laza-Kuzun, Xınalıq-Qalaxudat və s.).
        3. Günlər üzrə qısa plan yaz.
        4. Lazımi avadanlıqları sadala.
        5. Format: HTML (h3, ul, li istifadə et, markdown yox).
    `;

    const result = await callGeminiAPI(prompt);
    
    document.getElementById('plannerLoading').style.display = 'none';
    document.getElementById('plannerLoading').classList.add('hidden');
    const contentDiv = document.getElementById('plannerContent');
    contentDiv.innerHTML = result;
    contentDiv.classList.remove('hidden');
}

function toggleChat() { 
    const w = document.getElementById('chatWindow'); 
    w.classList.toggle('active');
}

function handleKeyPress(e) { if(e.key==='Enter') sendChatMessage(); }
async function sendChatMessage() {
    const inp = document.getElementById('chatInput');
    const msg = inp.value.trim();
    const box = document.getElementById('chatMessages');
    
    if(!msg) return;

    box.innerHTML += `<div class="message user p-3 w-fit shadow-sm text-sm">${msg}</div>`;
    inp.value = '';
    box.scrollTop = box.scrollHeight;

    const loadId = 'load-' + Date.now();
    box.innerHTML += `<div id="${loadId}" class="message bot p-3 w-fit shadow-sm text-sm dark:bg-gray-700 dark:text-gray-200"><i class="fas fa-ellipsis-h animate-pulse"></i></div>`;
    box.scrollTop = box.scrollHeight;

    const prompt = `Sən "Zirvə.az" saytının dağ bələdçisisən. Yalnız Azərbaycanın daxili turizmi və dağları haqqında danış. Dil: ${currentLang}. Sual: ${msg}`;
    const res = await callGeminiAPI(prompt);

    document.getElementById(loadId).remove();
    box.innerHTML += `<div class="message bot p-3 w-fit shadow-sm text-sm dark:bg-gray-700 dark:text-gray-200">${marked.parse(res)}</div>`;
    box.scrollTop = box.scrollHeight;
}

/* =========================================
   9. INITIALIZATION
   ========================================= */

window.onload = function() {
    initMap();
    renderTours();
    renderFeedbacks();
    updateAuthButton(); 
    loadUserGameState(); 
    
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.fa-chevron-down');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 500);

    const navLinks = document.querySelectorAll('.nav-link');
    const navMarker = document.getElementById('navMarker');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            isManualScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isManualScrolling = false;
                window.dispatchEvent(new Event('scroll'));
            }, 1000);

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 90; 
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

            navMarker.style.width = `${e.target.offsetWidth}px`;
            navMarker.style.left = `${e.target.offsetLeft}px`;
            navMarker.style.opacity = '1';
            
            navLinks.forEach(l => l.classList.remove('text-brand-gold'));
            e.target.classList.add('text-brand-gold');
        });
    });
}