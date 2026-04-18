const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const menuButton = document.getElementById('menuButton');
const menuPopup = document.getElementById('menuPopup');
const themeButton = document.getElementById('themeButton');
const languageButton = document.getElementById('languageButton');
const languageOptions = document.getElementById('languageOptions');
const languageOptionButtons = document.querySelectorAll('.language-option');

let isDarkMode = false;

const translations = {
    uz: {
        navHome: 'Asosiy',
        navCourses: 'Kurslar',
        navMyCourses: 'Kurslarim',
        navContact: 'Aloqa',
        heroText: '4F Academy - bu sizning IT sohasidagi bilimlaringizni oshirish uchun mukammal joy!',
        heroButton: 'Batafsil',
        menuTitle: 'Menyu',
        menuContact: 'Aloqa',
        menuCourses: 'Kurslar',
        languageLabel: 'Sayt tili',
        languageCurrent: 'O\'zbekcha',
        darkModeLabel: 'Tungi rejim',
        loginTitle: 'Google bilan kirish',
        emailLabel: 'Gmail',
        passwordLabel: 'Parol',
        loginButton: 'Kirish',
        coursesHeader: 'Kurslar',
        coursesIntro: 'Front-end, Back-end va C# .NET dev bo‘limlari. Har bir kurs sizga amaliy ko‘nikmalar beradi.',
        badgeFrontend: 'Frontend',
        courseFrontendTitle: 'Front-end Development',
        courseFrontendText: 'HTML, CSS, JavaScript yordamida zamonaviy veb-interfeyslar yaratish.',
        badgeBackend: 'Backend',
        courseBackendTitle: 'Back-end Development',
        courseBackendText: 'Server, ma’lumotlar bazasi va API larni yaratish uchun kundalik bilimlar.',
        badgeDotNet: 'C# .NET',
        courseDotNetTitle: 'C# .NET Developer',
        courseDotNetText: 'Windows va web-ga yo‘naltirilgan .NET ilovalarini ishlab chiqish.',
        buyButton: 'Sotib olish'
    },
    en: {
        navHome: 'Home',
        navCourses: 'Courses',
        navMyCourses: 'My Courses',
        navContact: 'Contact',
        heroText: '4F Academy is the perfect place to boost your IT skills!',
        heroButton: 'Learn more',
        menuTitle: 'Menu',
        menuContact: 'Contact',
        menuCourses: 'Courses',
        languageLabel: 'Language',
        languageCurrent: 'English',
        darkModeLabel: 'Dark mode',
        loginTitle: 'Login with Google',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        loginButton: 'Sign in',
        coursesHeader: 'Courses',
        coursesIntro: 'Front-end, Back-end and C# .NET developer tracks. Each course gives you practical skills.',
        badgeFrontend: 'Frontend',
        courseFrontendTitle: 'Front-end Development',
        courseFrontendText: 'Build modern web interfaces with HTML, CSS, and JavaScript.',
        badgeBackend: 'Backend',
        courseBackendTitle: 'Back-end Development',
        courseBackendText: 'Learn server, database, and API development for real applications.',
        badgeDotNet: 'C# .NET',
        courseDotNetTitle: 'C# .NET Developer',
        courseDotNetText: 'Create Windows and web applications using the .NET platform.',
        buyButton: 'Buy now'
    }
};

let currentLang = 'uz';

function closeAllPopups() {
    loginPopup.classList.remove('visible');
    menuPopup.classList.remove('visible');
    if (languageOptions) {
        languageOptions.classList.remove('visible');
        if (languageButton) {
            languageButton.setAttribute('aria-expanded', 'false');
        }
    }
}

function setTheme(isDark) {
    isDarkMode = isDark;
    document.body.classList.toggle('dark-mode', isDark);
    if (themeButton && themeButton.querySelector('i')) {
        const themeIcon = themeButton.querySelector('i');
        themeIcon.className = isDark ? 'bi bi-sun' : 'bi bi-moon';
    }
}

function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const map = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (map[key]) {
            el.textContent = map[key];
        }
    });

    const languageLabel = document.getElementById('languageLabel');
    const languageCurrent = document.getElementById('languageCurrent');
    const languageFlag = document.getElementById('languageFlag');

    if (languageLabel) {
        languageLabel.textContent = map.languageLabel + ':';
    }
    if (languageCurrent) {
        languageCurrent.textContent = map.languageCurrent;
    }
    if (languageFlag) {
        languageFlag.textContent = lang === 'uz' ? '🇺🇿' : '🇬🇧';
    }

    // Update language options visibility
    languageOptionButtons.forEach(button => {
        const btnLang = button.getAttribute('data-lang');
        if (btnLang === lang) {
            button.style.display = 'none';
        } else {
            button.style.display = 'flex';
        }
    });

    document.documentElement.lang = lang === 'uz' ? 'uz' : 'en';
}

if (loginButton && loginPopup) {
    loginButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menuPopup.classList.remove('visible');
        if (languageOptions) {
            languageOptions.classList.remove('visible');
            if (languageButton) {
                languageButton.setAttribute('aria-expanded', 'false');
            }
        }
        loginPopup.classList.toggle('visible');
    });

    loginPopup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

if (menuButton && menuPopup) {
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        loginPopup.classList.remove('visible');
        menuPopup.classList.toggle('visible');
        if (languageOptions) {
            languageOptions.classList.remove('visible');
            if (languageButton) {
                languageButton.setAttribute('aria-expanded', 'false');
            }
        }
    });

    menuPopup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

if (themeButton) {
    themeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        setTheme(!isDarkMode);
    });
}

const coursesMenuLink = document.getElementById('coursesMenuLink');
const courseSection = document.querySelector('.course-section');

if (languageButton && languageOptions) {
    languageButton.addEventListener('click', function(event) {
        event.stopPropagation();
        const isVisible = languageOptions.classList.contains('visible');
        
        // Hide current language option, show only the alternative
        languageOptionButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === currentLang) {
                button.style.display = 'none';
            } else {
                button.style.display = 'flex';
            }
        });
        
        languageOptions.classList.toggle('visible');
        languageButton.setAttribute('aria-expanded', String(!isVisible));
    });
}

if (coursesMenuLink && courseSection) {
    coursesMenuLink.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        courseSection.classList.add('visible');
        courseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        menuPopup.classList.remove('visible');
        if (languageOptions) {
            languageOptions.classList.remove('visible');
            if (languageButton) {
                languageButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

languageOptionButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const lang = button.getAttribute('data-lang');
        applyLanguage(lang);
        if (languageOptions) {
            languageOptions.classList.remove('visible');
            if (languageButton) {
                languageButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

document.addEventListener('click', function() {
    closeAllPopups();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllPopups();
    }
});

// Initialize theme and language state
setTheme(false);
applyLanguage(currentLang);