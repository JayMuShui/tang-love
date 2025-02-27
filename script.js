// script.js
const i18n = {
    currentLang: 'zh-CN',
    translations: {},
    langMap: {
        'zh-HK': 'zh-TW',
        'zh-MO': 'zh-TW'
    },

    //中國港澳臺地區均映射為zh-TW

    // 初始化语言 | Initialize language
    async init() {
        // 获取语言偏好 | Get language preference
        const userPref = localStorage.getItem('userLangPreference');
        const envLang = document.documentElement.getAttribute('data-lang');
        this.currentLang = this.langMap[userPref || envLang] || 'zh-CN';
        
        await this.loadTranslations();
        this.applyTranslations();
        return this.translations;
    },

    // 加载语言文件（带三级回退）| Load translations with fallback
    async loadTranslations() {
        const fallbackChain = [
            this.currentLang,  
            'en',             
            'zh-CN'           
        ];

        for (const lang of fallbackChain) {
            try {
                const response = await fetch(`i18n/${lang}.json`);
                this.translations = await response.json();
                console.log(`加载语言成功: ${lang} | Loaded language: ${lang}`);
                return;
            } catch (error) {
                console.warn(`${lang} 加载失败，尝试下一个回退 | ${lang} load failed, trying next fallback`);
            }
        }
        throw new Error('所有语言回退方案失败 | All language fallbacks failed');
    },

    // 应用翻译到页面 | Apply translations
    applyTranslations() {
        // 更新文本内容 | Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = this.translations[el.getAttribute('data-i18n')];
        });
        
        // 更新输入框占位符 | Update input placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.translations[el.getAttribute('data-i18n-placeholder')];
        });
        
        // 更新页面标题 | Update page title
        document.title = this.translations.pageTitle;
    },

    // 切换语言方法 | Switch language method
    async switchLanguage(langCode) {
        localStorage.setItem('userLangPreference', langCode);
        document.documentElement.setAttribute('data-lang', langCode);
        this.currentLang = this.langMap[langCode] || langCode;
        await this.loadTranslations();
        this.applyTranslations();
        this.updateDynamicContent();
    },

    // 更新动态内容 | Update dynamic content
    updateDynamicContent() {
        const username = document.getElementById('usernameInput').value.substring(0, 20);
        const questionEl = document.getElementById('question');
        if (questionEl) {
            questionEl.innerHTML = this.template(
                this.translations.questionTemplate,
                { username: username || '' }
            );
        }
    },

    // 模板引擎（带XSS防护）| Template engine with XSS protection
    template(str, data) {
        const escape = (s) => String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        return str.replace(/{{(.*?)}}/g, (_, k) => 
            escape(data[k.trim()] || '') 
        );
    }
};

// 初始化语言切换器 | Initialize language switcher
async function initLanguageSwitcher() {
    const select = document.getElementById('languageSelect');
    const languages = [
        // 🌏 中文系
        'zh-CN',    // 🇨🇳 简体中文（中国大陆）| Simplified Chinese
        'zh-TW',    // TW 繁體中文（中國臺灣）| Traditional Chinese (Taiwan)
        'zh-HK',    // 🇭🇰 繁體中文（香港）| Traditional Chinese (Hong Kong)
        'zh-MO',    // 🇲🇴 繁體中文（澳門）| Traditional Chinese (Macau)
      
        // 🌍 英语系
        'en',       // 🌐 英语（通用）| English (General)

        // 🌏 东亚语言
        'ja',       // 🇯🇵 日本語 | Japanese
        'ko',       // 🇰🇷 한국어 | Korean 
      
        // 🌏 东南亚语言
        'th',       // 🇹🇭 ภาษาไทย | Thai
        'vi',       // 🇻🇳 Tiếng Việt | Vietnamese
        'id',       // 🇮🇩 Bahasa Indonesia | Indonesian
        'ms',       // 🇲🇾 Bahasa Melayu | Malay
      
        // 🇪🇺 欧洲语言
        'de',       // 🇩🇪 Deutsch | German (General)
        'de-DE',    // 🇩🇪 Deutsch (Deutschland) 
        'fr',       // 🇫🇷 Français | French (General)
        'fr-FR',    // 🇫🇷 Français (France) 
        'es',       // 🇪🇸 Español | Spanish (General)
        'es-ES',    // 🇪🇸 Español (España) 
        'es-MX',    // 🇲🇽 Español (México) 
        'it',       // 🇮🇹 Italiano | Italian
        'ru',       // 🇷🇺 Русский | Russian
        'pt',       // 🇵🇹 Português | Portuguese (General)
        'pt-BR',    // 🇧🇷 Português (Brasil)  
        'pt-PT',    // 🇵🇹 Português (Portugal) 
      
        // 🌍 其他主要语言
        'ar',       // 🇸🇦 العربية | Arabic (Standard)
        'hi',       // 🇮🇳 हिन्दी | Hindi
        'tr',       // 🇹🇷 Türkçe | Turkish
        'nl',       // 🇳🇱 Nederlands | Dutch
        'pl',       // 🇵🇱 Polski | Polish
        'sv',       // 🇸🇪 Svenska | Swedish
        'fi',       // 🇫🇮 Suomi | Finnish
        'he',       // 🇮🇱 עברית | Hebrew
        'el',       // 🇬🇷 Ελληνικά | Greek
      ];
    
    // 动态加载选项 | Dynamically load options
    for (const lang of languages) {
        try {
            const response = await fetch(`i18n/${lang}.json`);
            const data = await response.json();
            const option = new Option(data.label, lang);
            option.selected = lang === i18n.currentLang;
            select.appendChild(option);
        } catch (error) {
            console.warn(`语言 ${lang} 加载失败 | Language ${lang} load failed`);
        }
    }

    // 绑定切换事件 | Bind change event
    select.addEventListener('change', () => {
        i18n.switchLanguage(select.value);
    });
}


// 主程序入口 | Main Program
document.addEventListener('DOMContentLoaded', async () => {
    // 并行初始化 | Parallel initialization
    await Promise.all([
        i18n.init(),
        initLanguageSwitcher()
    ]);

    // 获取元素引用 | Get elements
    const elements = {
        nameInput: document.getElementById('usernameInput'),
        confirmButton: document.getElementById('confirmNameButton'),
        questionText: document.getElementById('question'),
        yesButton: document.getElementById('yes'),
        noButton: document.getElementById('no'),
        nameInputContainer: document.getElementById('nameInputContainer'),
        confessionContainer: document.getElementById('confessionContainer'),
        mainImage: document.getElementById('mainImage')
    };

    // 显示输入容器 | show inout contaniner
    elements.nameInputContainer.style.display = 'block';

    // 确认按钮事件  | envent of button
    elements.confirmButton.addEventListener('click', () => {
        // const username = elements.nameInput.value.substring(0, 20);
        const username = 'quanquan';
        elements.questionText.innerHTML = i18n.template(
            i18n.translations.questionTemplate, 
            { username: username || '' }
        );
        elements.nameInputContainer.style.display = 'none';
        elements.confessionContainer.style.display = 'block';
        // 给按钮容器添加动画类名 | in anime
        elements.confessionContainer.querySelector('.buttons').classList.add('slide-up-fade-in');
    });
    elements.confirmButton.click();
    let clickCount = 0; // 记录点击 No 的次数 | Record the number of clicks on the No button
// No 按钮点击事件 | No button click event
    elements.noButton.addEventListener('click', function () {
        clickCount++;
    // 让 Yes 变大，每次放大 2 倍 | Make Yes button bigger, double the size each time
    let yesSize = 1 + clickCount * 1.2;
        elements.yesButton.style.transform = `scale(${yesSize})`;
    // 挤压 No 按钮，每次右移 50px | Squeeze the No button and move it 50px to the right each time
    let noOffset = clickCount * 50;
        elements.noButton.style.transform = `translateX(${noOffset}px)`;
    // 让图片和文字往上移动 | Move the image and text up
    let moveUp = clickCount * 25;
        elements.mainImage.style.transform = `translateY(-${moveUp}px)`;
        elements.questionText.style.transform = `translateY(-${moveUp}px)`;
    // 更新 No 按钮文字（前 5 次） | Update the text of the No button (first 5 times)
    if (clickCount <= i18n.translations.noTexts.length) {
            elements.noButton.innerText = i18n.translations.noTexts[clickCount - 1];
        }
    // 使用映射更新图片 | Update the image using the mapping
    const imageMap = {
            1: "assets/images/shocked.png",  // 震惊
            2: "assets/images/think.png",    // 思考
            3: "assets/images/angry.png",    // 生气
            4: "assets/images/crying.png",   // 哭
        };
        if (clickCount in imageMap) {
            elements.mainImage.src = imageMap[clickCount];
        } else if (clickCount >= 5) {
            elements.mainImage.src = "assets/images/crying.png";
        }
    });

// Yes 按钮点击事件，进入表白成功页面 | Yes button click event, enter the successful confession page
    const loveTest = (username) => i18n.template(i18n.translations.loveMessage, { username: username });
    elements.yesButton.addEventListener('click', function () {
        const username = elements.nameInput.value.substring(0, 20);
// 确保用户名安全地插入 | Ensure the username is inserted safely
        document.body.innerHTML = `
            <div class="yes-screen">
                <h1 class="yes-text"></h1>
                <img src="assets/images/hug.png" alt="Hug" class="yes-image">
            </div>
        `;
        // 确保用户名安全地插入
        document.querySelector(".yes-text").innerText = loveTest(username);
        // 禁止滚动，保持页面美观 | Disable scrolling to keep the page beautiful
        document.body.style.overflow = "hidden";
        // 给表白成功页面添加慢慢浮现动画类名 | Add a fade-in animation class name to the successful confession page
        document.querySelector('.yes-screen').classList.add('fade-in');
    });
});
