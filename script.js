// 集成所有语言数据的i18n实现
const i18n = {
    translations: {},
    currentLang: '',
    
    // 所有支持的语言列表
    languages: {
        "zh-CN": {
            "file": "zh-CN.json",
            "label": "🌏 简体中文"
        },
        "zh-TW": {
            "file": "zh-TW.json",
            "label": "🌏 繁體中文"
        },
        "en": {
            "file": "en.json",
            "label": "🌎 English"
        },
        "ja": {
            "file": "ja.json",
            "label": "🌏 日本語"
        },
        "ko": {
            "file": "ko.json",
            "label": "🌏 한국어"
        },
        "de": {
            "file": "de.json",
            "label": "🌍 Deutsch"
        },
        "fr": {
            "file": "fr.json",
            "label": "🌍 Français"
        },
        "id": {
            "file": "id.json",
            "label": "🌏 Bahasa Indonesia"
        },
        "ms": {
            "file": "ms.json",
            "label": "🌏 Bahasa Melayu"
        },
        "ru": {
            "file": "ru.json",
            "label": "🌍 Русский"
        },
        "th": {
            "file": "th.json",
            "label": "🌏 ภาษาไทย"
        },
        "vi": {
            "file": "vi.json",
            "label": "🌏 Tiếng Việt"
        },
        "ar": {
            "file": "ar.json",
            "label": "🌍 العربية"
        }
    },
    
    // 所有语言的翻译数据
    allTranslations: {
        "zh-CN": {
            "pageTitle": "可以成为我的恋人吗？",
            "greeting": "你希望我怎么称呼你呢？(*>﹏<*)",
            "subGreeting": "不想告诉我的话也可以留空哦",
            "usernamePlaceholder": "请输入你的名字",
            "confirmButton": "是这个名字呢",
            "xiaohongshuLinkText": "小红书(*^▽^*)",
            "douyinLinkText": "抖音( •̀ ω •́ )",
            "repoLinkText": "源代码仓库ˋ( ° ▽、° )",
            "freeNotice": "ฅ•ω•ฅ 这是完全免费的项目哦！如果你花钱了，快去找坏蛋退款！",
            "questionTemplate": "可以成为我的恋人吗？{username}",
            "loveMessage": "!!!喜欢你!! ( >᎑<)♡︎ᐝ {username}  ♡︎ᐝ(>᎑< )",
            "yesButton": "可以",
            "noButton": "不要",
            "noTexts": [
              "？你认真的吗…",
              "要不再想想？",
              "不许选这个！",
              "我会很伤心…",
              "不行:("
            ]
        },
        "zh-TW": {
            "pageTitle": "可以成為我的戀人嗎？(๑>ᴗ<๑)",
            "greeting": "希望我怎麼稱呼你呢？(*´▽`*)",
            "subGreeting": "保密也可以哦～♪(´ε｀ )",
            "usernamePlaceholder": "輸入你的可愛暱稱",
            "confirmButton": "是這個名字哦",
            "xiaohongshuLinkText": "小紅書(≧◡≦)",
            "douyinLinkText": "抖音(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "原始碼倉庫(ﾉ≧∀≦)ﾉ",
            "freeNotice": "ฅ•ω•ฅ 完全免費專案！付費請立刻退款！(╯°Д°)╯",
            "questionTemplate": "{username}，願意永遠和我在一起嗎？(๑>ᴗ<๑)♡",
            "loveMessage": "超級喜歡你！♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}，你偷走我的心了啦！(♡˙︶˙♡)",
            "yesButton": "願意！(๑>ω<๑)",
            "noButton": "不要…(；▽；)",
            "noTexts": [
              "認真的嗎？(⊙ω⊙;)",
              "再考慮一下嘛！(´；ω；`)",
              "不許選這個！(ﾉ`Д´)ﾉ",
              "我會哭哦…(T^T)",
              "最後確認？(눈‸눈)"
            ]
        },
        "en": {
            "pageTitle": "Will you be my sweetheart? (✧ω✧)",
            "greeting": "What cute name should I call you? (´• ω •`) ♡",
            "subGreeting": "Secret is okay~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(KEEP SPACE)",
            "usernamePlaceholder": "Type your sweet name here...",
            "confirmButton": "Confirm ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "TikTok ver.Chinese Mainland Douyin(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Source Code (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ FREE PROJECT! If you paid, go get refund! (╯°□°）╯",
            "questionTemplate": "{username}? Will you be my forever love? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "LOVE EXPLOSION!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! You stole my heart! (灬º‿º灬)♡",
            "yesButton": "Yes! (✧∀✧)",
            "noButton": "No... (；へ：)",
            "noTexts": [
              "Wait, really? (⊙_⊙;)",
              "My heart is cracking... (´；д；`)",
              "Please think again! (ﾉ`Д´)ﾉ",
              "I'll cry a river... (T^T)",
              "Final answer? (눈‸눈)"
            ]
        },
        "ja": {
            "pageTitle": "私の恋人になってくれる？(๑>ᴗ<๑)",
            "greeting": "あなたの呼び名は何がいい？(*´▽`*)",
            "subGreeting": "秘密でも大丈夫だよ～♪(´ε｀ )(空白OK)",
            "usernamePlaceholder": "可愛い名前を教えてね",
            "confirmButton": "決定だよ♡(๑>◡<๑)",
            "xiaohongshuLinkText": "REDnote(≧◡≦)",
            "douyinLinkText": "中国版のティックトック(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "ソースコード(ﾉ≧∀≦)ﾉ",
            "freeNotice": "ฅ•ω•ฅ 完全無料だよ！お金払ったらすぐ返金して！(╯°Д°)╯",
            "questionTemplate": "{username}、ずっと一緒にいてくれる？(๑>ᴗ<๑)♡",
            "loveMessage": "大好きだよ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}、私のハート盗んで行ったね！(♡˙︶˙♡)",
            "yesButton": "はい！(๑>ω<๑)",
            "noButton": "いやだよ…(；▽；)",
            "noTexts": [
              "えっ、本当に？(⊙ω⊙;)",
              "もうちょっと考えて！(´；ω；`)",
              "そっちは選べないよ！(ﾉ`Д´)ﾉ",
              "泣いちゃうよ…(T^T)",
              "最後の答え？(눈‸눈)"
            ]
        },
        "ko": {
            "pageTitle": "제 연인이 되어 주실래요? (๑•. •๑)",
            "greeting": "당신을 어떤 귀여운 이름으로 불러야 할까요? (*>﹏<*)",
            "subGreeting": "만약 말하고 싶지 않다면 비워두셔도 돼요♪",
            "usernamePlaceholder": "당신의 귀여운 이름을 입력해 주세요",
            "confirmButton": "이 이름이 맞아요(✿◠‿◠)",
            "xiaohongshuLinkText": "REDnote(๑•. •๑)",
            "douyinLinkText": "TikTok China(๑•. •๑)",
            "repoLinkText": "소스 코드 저장소(๑•. •๑)",
            "freeNotice": "ฅ•ω•ฅ 무료 프로젝트예요! 돈 내셨다면 바로 환불 요청하세요!",
            "questionTemplate": "{username}님, 제 연인이 되어 주실래요? (๑•. •๑)",
            "loveMessage": "!!!당신을 정말 좋아해요!! ( >᎑<)♡︎ᐝ {username}님, 영원히 함께 해주세요♡︎ᐝ(>᎑< )",
            "yesButton": "예! (✿◠‿◠)",
            "noButton": "아니요…(；へ：)",
            "noTexts": [
              "정말 그렇게 생각하시나요? (；ω；。)",
              "조금 더 생각해 보시겠어요? (´・ω・｀)",
              "이걸 선택하면 안 돼요! (╬ ಠ益ಠ)",
              "제가 너무 슬퍼질 거에요…(T_T)",
              "안 돼요～(>_<)"
            ]
        },
        "de": {
            "pageTitle": "Wirst du mein/e Süße/r? (✧ω✧)",
            "greeting": "Wie soll ich dich nennen? (´• ω •`) ♡",
            "subGreeting": "Geheim ist okay~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(PLATZHALTER)",
            "usernamePlaceholder": "Gib deinen süßen Namen ein...",
            "confirmButton": "Bestätigen ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "TikTok Version Chinese Mainland(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Quellcode (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ KOSTENLOSES PROJEKT! Wenn du bezahlt hast, fordere eine Rückerstattung! (╯°□°）╯",
            "questionTemplate": "{username}? Wirst du meine/r ewige Liebe sein? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "LIEBE-EXPLOSION!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Du hast mein Herz gestohlen! (灬º‿º灬)♡",
            "yesButton": "Ja! (✧∀✧)",
            "noButton": "Nein... (；へ：)",
            "noTexts": [
              "Warten, wirklich? (⊙_⊙;)",
              "Mein Herz bricht... (´；д；`)",
              "Bitte überleg es dir nochmal! (ﾉ`Д´)ﾉ",
              "Ich werde einen Fluss weinen... (T^T)",
              "Endgültige Antwort? (눈‸눈)"
            ]
        },
        "fr": {
            "pageTitle": "Veux-tu être mon amoureux/amoureuse? (✧ω✧)",
            "greeting": "Comment dois-je t'appeler? (´• ω •`) ♡",
            "subGreeting": "Secret est okay~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(ESPACE)",
            "usernamePlaceholder": "Entrez votre doux nom ici...",
            "confirmButton": "Confirmer ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "Version TikTok de Chine continentale(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Code source (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ PROJET GRATUIT! Si vous avez payé, demandez un remboursement! (╯°□°）╯",
            "questionTemplate": "{username}? Veux-tu être mon amour éternel? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "EXPLOSION D'AMOUR!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Tu as volé mon cœur! (灬º‿º灬)♡",
            "yesButton": "Oui! (✧∀✧)",
            "noButton": "Non... (；へ：)",
            "noTexts": [
              "Attends, vraiment? (⊙_⊙;)",
              "Mon cœur se brise... (´；д；`)",
              "Pensez-y à nouveau! (ﾉ`Д´)ﾉ",
              "Je vais pleurer un fleuve... (T^T)",
              "Réponse finale? (눈‸눈)"
            ]
        },
        "id": {
            "pageTitle": "Apakah kamu akan menjadi kekasihku? (✧ω✧)",
            "greeting": "Seperti apakah nama manis yang harus kukatakan padamu? (´• ω •`) ♡",
            "subGreeting": "Rahasia juga oke~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(RUANG)",
            "usernamePlaceholder": "Tulis nama manismu di sini...",
            "confirmButton": "Konfirmasi ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "Versi TikTok China Daratan(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Kode Sumber (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ PROYEK GRATIS! Jika kamu membayar, minta pengembalian! (╯°□°）╯",
            "questionTemplate": "{username}? Apakah kamu akan menjadi cinta abadi saya? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "LEDakan CINTA!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Kamu mencuri hatiku! (灬º‿º灬)♡",
            "yesButton": "Ya! (✧∀✧)",
            "noButton": "Tidak... (；へ：)",
            "noTexts": [
              "Tunggu, benar? (⊙_⊙;)",
              "Hati saya retak... (´；д；`)",
              "Tolong pikirkan lagi! (ﾉ`Д´)ﾉ",
              "Aku akan menangis seperti sungai... (T^T)",
              "Jawaban akhir? (눈‸눈)"
            ]
        },
        "ms": {
            "pageTitle": "Bolehkah awak menjadi kekasihku? (✧ω✧)",
            "greeting": "Apakah nama manis yang harus saya panggil awak? (´• ω •`) ♡",
            "subGreeting": "Rahsia juga okay~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(RUANG)",
            "usernamePlaceholder": "Tulis nama manis awak di sini...",
            "confirmButton": "Sahkan ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "Versi TikTok China Daratan(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Kod Sumber (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ PROJEK PERCUMA! Jika anda membayar, mintalah pengembalian! (╯°□°）╯",
            "questionTemplate": "{username}? Bolehkah awak menjadi cinta abadi saya? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "LETUP CINTA!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Awak mencuri hatiku! (灬º‿º灬)♡",
            "yesButton": "Ya! (✧∀✧)",
            "noButton": "Tidak... (；へ：)",
            "noTexts": [
              "Tunggu, betul? (⊙_⊙;)",
              "Hati saya retak... (´；д；`)",
              "Tolong fikirkan lagi! (ﾉ`Д´)ﾉ",
              "Saya akan menangis seperti sungai... (T^T)",
              "Jawapan akhir? (눈‸눈)"
            ]
        },
        "ru": {
            "pageTitle": "Хочешь стать моим возлюбленным/возлюбленной? (✧ω✧)",
            "greeting": "Какое милоё имя мне вызывать тебя? (´• ω •`) ♡",
            "subGreeting": "Тайна тоже хорошо~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(ПРОБЕЛ)",
            "usernamePlaceholder": "Введи своё милоё имя здесь...",
            "confirmButton": "Подтвердить ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "Версия TikTok для Китая(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Исходный Код (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ БЕСПЛАТНЫЙ ПРОЕКТ! Если ты заплатил, верни деньги! (╯°□°）╯",
            "questionTemplate": "{username}? Хотите стать моей вечной любовью? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "ВЗРЫВ ЛЮБВИ!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Ты украл(а) моё сердце! (灬º‿º灬)♡",
            "yesButton": "Да! (✧∀✧)",
            "noButton": "Нет... (；へ：)",
            "noTexts": [
              "Подожди, правда? (⊙_⊙;)",
              "Моё сердце ломается... (´；д；`)",
              "Пожалуйста, подумай ещё раз! (ﾉ`Д´)ﾉ",
              "Я заплачу реку... (T^T)",
              "Финальный ответ? (눈‸눈)"
            ]
        },
        "th": {
            "pageTitle": "คุณจะเป็นแฟนฉันหรือไม่? (✧ω✧)",
            "greeting": "ฉันควรเรียกคุณว่าอะไรดี? (´• ω •`) ♡",
            "subGreeting": "保守ความลับก็ได้~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(ช่องว่าง)",
            "usernamePlaceholder": "ใส่ชื่อรักของคุณที่นี่...",
            "confirmButton": "ยืนยัน ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "เวอร์ชัน TikTok ประเทศจีน(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "โค้ดต้นฉบับ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ โปรเจกต์ฟรี! หากคุณจ่ายเงิน โปรดขอคืนเงิน! (╯°□°）╯",
            "questionTemplate": "{username}? คุณจะเป็นความรักที่ซื่อสัตย์ของฉันไหม? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "การระเบิดของความรัก!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! คุณโจรกรรมหัวใจฉัน! (灬º‿º灬)♡",
            "yesButton": "ใช่! (✧∀✧)",
            "noButton": "ไม่... (；へ：)",
            "noTexts": [
              "เดี๋ยวก่อน จริงหรือ? (⊙_⊙;)",
              "หัวใจของฉันกำลังแตก... (´；д；`)",
              "โปรดคิดอีกครั้ง! (ﾉ`Д´)ﾉ",
              "ฉันจะร้องไห้... (T^T)",
              "คำตอบสุดท้าย? (눈‸눈)"
            ]
        },
        "vi": {
            "pageTitle": "Bạn có muốn làm người yêu của tôi không? (✧ω✧)",
            "greeting": "Tôi nên gọi bạn bằng cái tên dễ thương nào? (´• ω •`) ♡",
            "subGreeting": "Bí mật cũng okay~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(KHỐNG CẦN)",
            "usernamePlaceholder": "Nhập tên dễ thương của bạn ở đây...",
            "confirmButton": "Xác nhận ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "Phiên bản TikTok Trung Quốc(๑˃ᴗ˂)ﻭ",
            "repoLinkText": "Mã Nguồn (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ DỰ ÁN MIỄN PHÍ! Nếu bạn đã trả tiền, yêu cầu hoàn tiền! (╯°□°）╯",
            "questionTemplate": "{username}? Bạn có muốn làm tình yêu vĩnh cửu của tôi không? (ﾉ>ω<)ﾉ♡",
            "loveMessage": "BỤN NỔ YÊU THƯƠNG!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! Bạn đã đánh cắp trái tim tôi! (灬º‿º灬)♡",
            "yesButton": "Có! (✧∀✧)",
            "noButton": "Không... (；へ：)",
            "noTexts": [
              "Khoan, thực sự? (⊙_⊙;)",
              "Trái tim tôi đang nứt... (´；д；`)",
              "Hãy suy nghĩ lại! (ﾉ`Д´)ﾉ",
              "Tôi sẽ khóc suốt một sông... (T^T)",
              "Câu trả lời cuối cùng? (눈‸눈)"
            ]
        },
        "ar": {
            "pageTitle": "هل تريد أن تكون حبيبي/حبيبتي؟ (✧ω✧)",
            "greeting": "ما هو الاسم الحلو الذي يجب أن أدعوك به؟ (´• ω •`) ♡",
            "subGreeting": "السر هو ما يرام~ (⁄ ⁄•⁄ω⁄•⁄ ⁄)(مساحة)",
            "usernamePlaceholder": "أدخل اسمك الحلو هنا...",
            "confirmButton": "تأكيد ♡(˘ε˘ʃƪ)",
            "xiaohongshuLinkText": "REDnote(≧∇≦)ﾉ",
            "douyinLinkText": "نسخة تيك توك الصين (๑˃ᴗ˂)ﻭ",
            "repoLinkText": "الكود المصدر (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
            "freeNotice": "ฅ•ﻌ•ฅ مشروع مجاني! إذا دفعت، اطلب استرداد! (╯°□°）╯",
            "questionTemplate": "{username}؟ هل تريد أن تكون حبيبتي الح вечي؟ (ﾉ>ω<)ﾉ♡",
            "loveMessage": "انفجار الحب!!! ♡⸜(˶˃ ᵕ ˂˶)⸝\n{username}! لقد سرقت قلبي! (灬º‿º灬)♡",
            "yesButton": "نعم! (✧∀✧)",
            "noButton": "لا... (；へ：)",
            "noTexts": [
              "انتظر، حقًا؟ (⊙_⊙;)",
              "قلبي يتشقق... (´；д；`)",
              "ارجو التفكير مرة أخرى! (ﾉ`Д´)ﾉ",
              "سأبكي نهرًا... (T^T)",
              "الإجابة النهائية؟ (눈‸눈)"
            ]
        }
    },

    // 初始化语言 | Initialize language
    async init() {
        console.info('(开始初始化语言环境) | Starting to initialize the language environment');
        const userPref = localStorage.getItem('userLangPreference');
        const browserLang = navigator.language || 'en';
        console.info(`(检测到原始浏览器语言: ${browserLang}) | Detected original browser language: ${browserLang}`);
        this.currentLang = browserLang || userPref;
        console.info(`(最终使用的语言: ${this.currentLang}) | Final language to be used: ${this.currentLang}`);
        try {
            await this.loadTranslations(this.currentLang);
            console.info(`(成功加载 ${this.currentLang} 语言文件) | Successfully loaded the ${this.currentLang} language file`);
        } catch (error) {
            console.warn(`(加载 ${this.currentLang} 语言文件失败，默认加载 en) | Failed to load the ${this.currentLang} language file, loading en.json by default`);
            await this.loadTranslations('en');
        }

        this.applyTranslations();
        console.info('(已应用语言翻译到页面) | Applied language translations to the page');
        return this.translations;
    },

    // 加载语言文件 | Load translations
    async loadTranslations(lang) {
        console.info(`(尝试加载语言: ${lang}) | Trying to load language: ${lang}`);
        try {
            // 直接从内部对象获取翻译数据，不再通过fetch加载外部文件
            this.translations = this.allTranslations[lang] || this.allTranslations.en;
            console.info(`(成功加载语言: ${lang}) | Successfully loaded language: ${lang}`);
        } catch (error) {
            console.error(`(加载 ${lang} 语言数据时出错: ${error.message}) | Error loading ${lang} language data: ${error.message}`, error);
            throw new Error(`(加载 ${lang} 失败) | Failed to load ${lang}`);
        }
    },

    // 应用翻译到页面上 | Apply translations to the page
    applyTranslations() {
        console.info('(开始应用语言翻译到页面元素) | Starting to apply language translations to page elements');
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[key];
            if (translation) {
                element.textContent = translation;
                console.debug(`(已将 ${key} 翻译应用到元素) | Applied the translation of ${key} to the element`);
            }
        });
    },

    // 切换语言 | Switch language
    async switchLanguage(lang) {
        console.info(`(开始切换语言到 ${lang}) | Starting to switch the language to ${lang}`);
        this.currentLang = lang;
        localStorage.setItem('userLangPreference', lang);
        await this.loadTranslations(lang);
        this.applyTranslations();
        console.info(`(已成功切换语言到 ${lang}) | Successfully switched the language to ${lang}`);
    },

    template(str, data) {
        console.debug('(开始执行模板替换操作) | Starting the template replacement operation');
        return str.replace(/\{(\w+)\}/g, (match, key) => {
            const value = data[key]? data[key] : '';
            console.debug(`(替换模板中的 ${key} 为: ${value}) | Replaced ${key} in the template with: ${value}`);
            return value;
        });
    }
};

// 初始化语言选择器 | Initialize the language selector
async function initLanguageSwitcher() {
    console.info('(开始初始化语言选择器) | Starting to initialize the language selector');
    const select = document.getElementById('languageSelect');
    // 直接使用i18n对象中的languages属性，不再通过fetch加载languages.json
    const languages = i18n.languages;
    console.info('(成功获取语言列表) | Successfully retrieved the language list');
    const userPref = localStorage.getItem('userLangPreference');
    const browserLang = navigator.language || 'en';
    const defaultLang = browserLang || userPref;

    for (const [code, data] of Object.entries(languages)) {
        const option = new Option(data.label, code);
        option.selected = code === defaultLang;
        select.appendChild(option);
        console.debug(`(已添加语言选项: ${code} - ${data.label}) | Added language option: ${code} - ${data.label}`);
    }

    select.addEventListener('change', async (e) => {
        const langCode = e.target.value;
        console.info(`(用户选择了语言: ${langCode}) | User selected the language: ${langCode}`);
        await i18n.switchLanguage(langCode);
    });
    console.info('(语言选择器初始化完成) | Language selector initialization completed');
}

// 页面加载完成后执行初始化操作 | Perform initialization operations after the page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    console.info('(页面加载完成，开始初始化操作) | Page loaded, starting initialization operations');
    // 初始化语言环境
    await i18n.init();
    // 初始化语言选择器
    await initLanguageSwitcher();

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
    console.info('(已获取页面元素引用) | Successfully obtained references to page elements', elements);

    // 显示输入容器 | Show input container
    elements.nameInputContainer.style.display = 'block';
    console.info('(已显示姓名输入容器) | Displayed the name input container');

    // 确认按钮事件  | Event of button
    elements.confirmButton.addEventListener('click', () => {
        console.info('(用户点击了确认按钮) | User clicked the confirm button');
        const username = elements.nameInput.value.substring(0, 20);
        elements.questionText.innerHTML = i18n.template(
            i18n.translations.questionTemplate,
            { username: username || '' }
        );
        console.info(`(已将用户名 ${username} 插入到表白问题中) | Inserted the username ${username} into the confession question`);
        elements.nameInputContainer.style.display = 'none';
        elements.confessionContainer.style.display = 'block';
        console.info('(隐藏姓名输入容器，显示表白内容容器) | Hidden the name input container and displayed the confession content container');
        // 给按钮容器添加动画类名 | Add animation class name to the button container
        elements.confessionContainer.querySelector('.buttons').classList.add('slide-up-fade-in');
        console.info('(已为按钮容器添加动画效果) | Added animation effect to the button container');
    });

    let clickCount = 0; // 记录点击 No 的次数 | Record the number of clicks on the No button
    // No 按钮点击事件 | No button click event
    elements.noButton.addEventListener('click', function () {
        clickCount++;
        console.info(`(用户点击了 No 按钮，点击次数: ${clickCount}) | User clicked the No button, click count: ${clickCount}`);
        // 让 Yes 变大，每次放大 2 倍 | Make Yes button bigger, double the size each time
        let yesSize = 1 + clickCount * 1.2;
        elements.yesButton.style.transform = `scale(${yesSize})`;
        console.info(`(将 Yes 按钮放大到 ${yesSize} 倍) | Scaled the Yes button to ${yesSize} times`);
        // 挤压 No 按钮，每次右移 50px | Squeeze the No button and move it 50px to the right each time
        let noOffset = clickCount * 50;
        elements.noButton.style.transform = `translateX(${noOffset}px)`;
        console.info(`(将 No 按钮右移 ${noOffset}px) | Moved the No button ${noOffset}px to the right`);
        // 让图片和文字往上移动 | Move the image and text up
        let moveUp = clickCount * 25;
        elements.mainImage.style.transform = `translateY(-${moveUp}px)`;
        elements.questionText.style.transform = `translateY(-${moveUp}px)`;
        console.info(`(将图片和文字上移 ${moveUp}px) | Moved the image and text up by ${moveUp}px`);
        // 更新 No 按钮文字（前 5 次） | Update the text of the No button (first 5 times)
        if (i18n.translations.noTexts && clickCount <= i18n.translations.noTexts.length) {
            elements.noButton.innerText = i18n.translations.noTexts[clickCount - 1];
            console.info(`(更新 No 按钮文字为: ${elements.noButton.innerText}) | Updated the text of the No button to: ${elements.noButton.innerText}`);
        }
        // 使用映射更新图片 | Update the image using the mapping
        const imageMap = {
            1: "assets/images/shocked.webp",  // 震惊
            2: "assets/images/think.webp",    // 思考
            3: "assets/images/angry.webp",    // 生气
            4: "assets/images/crying.webp",   // 哭
        };
        if (clickCount in imageMap) {
            elements.mainImage.src = imageMap[clickCount];
            console.info(`(将主图片更新为: ${imageMap[clickCount]}) | Updated the main image to: ${imageMap[clickCount]}`);
        } else if (clickCount >= 5) {
            elements.mainImage.src = "assets/images/crying.webp";
            console.info('(将主图片更新为哭泣图片) | Updated the main image to the crying image');
        }
    });

    // Yes 按钮点击事件，进入表白成功页面 | Yes button click event, enter the successful confession page
    const loveTest = (username) => i18n.template(i18n.translations.loveMessage, { username: username });
    elements.yesButton.addEventListener('click', function () {
        console.info('(用户点击了 Yes 按钮) | User clicked the Yes button');
        const username = elements.nameInput.value.substring(0, 20);
        // 确保用户名安全地插入 | Ensure the username is inserted safely
        document.body.innerHTML = `
            <div class="yes-screen">
                <h1 class="yes-text"></h1>
                <img src="assets/images/hug.webp" alt="Hug" class="yes-image">
            </div>
        `;
        console.info('(已替换页面内容为表白成功页面) | Replaced the page content with the successful confession page');
        // 确保用户名安全地插入
        document.querySelector(".yes-text").innerText = loveTest(username);
        console.info(`(已将用户名 ${username} 插入到表白成功信息中) | Inserted the username ${username} into the successful confession message`);
        // 禁止滚动，保持页面美观 | Disable scrolling to keep the page beautiful
        document.body.style.overflow = "hidden";
        console.info('(已禁止页面滚动) | Disabled page scrolling');
        // 给表白成功页面添加慢慢浮现动画类名 | Add a fade-in animation class name to the successful confession page
        document.querySelector('.yes-screen').classList.add('fade-in');
        console.info('(已为表白成功页面添加渐显动画效果) | Added fade-in animation effect to the successful confession page');
    });
});
