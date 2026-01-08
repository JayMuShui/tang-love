/* ==================== JavaScript 基础知识 ====================
 * JavaScript 是一种编程语言，用来给网页添加交互功能
 * 它可以：
 * 1. 获取和修改 HTML 元素
 * 2. 响应用户操作（点击、输入等）
 * 3. 动态改变页面内容和样式
 * 4. 处理数据和逻辑
 */

/* ==================== 第一步：获取页面元素 ==================== */
// 使用 document.getElementById() 方法获取 HTML 元素
// document 是整个网页文档对象
// getElementById() 通过 id 查找元素，返回找到的元素对象

const nameInput = document.getElementById('nameInput');
// 获取输入名字页面的容器
// const 是常量声明，表示这个变量的值不会改变（指向的元素不变）

const confession = document.getElementById('confession');
// 获取表白页面的容器

const success = document.getElementById('success');
// 获取成功页面的容器

const usernameInput = document.getElementById('username');
// 获取用户名输入框

const confirmBtn = document.getElementById('confirm');
// 获取确认按钮

const yesBtn = document.getElementById('yes');
// 获取"可以"按钮

const noBtn = document.getElementById('no');
// 获取"不要"按钮

const questionText = document.getElementById('question');
// 获取表白问题的标题

const mainImage = document.getElementById('mainImage');
// 获取主图片

const successText = document.getElementById('successText');
// 获取成功页面的文字

/* ==================== 第二步：URL 参数处理 ==================== */
// URL 参数是网址中 ? 后面的部分，例如：https://example.com?name=小明
// 我们可以通过 URL 参数直接跳转到表白页面

const params = new URLSearchParams(window.location.search);
// URLSearchParams 是一个用来处理 URL 参数的工具
// window.location.search 获取 URL 中 ? 后面的部分
// 例如：如果 URL 是 https://example.com?name=小明
// 那么 window.location.search 就是 "?name=小明"

const urlName = params.get('name');
// 使用 get() 方法获取名为 'name' 的参数值
// 如果 URL 是 ?name=小明，那么 urlName 就是 "小明"
// 如果没有这个参数，urlName 就是 null

/* ==================== 第三步：页面初始化 ==================== */
// 根据是否有 URL 参数，决定显示哪个页面

if (urlName && urlName.trim()) {
    // if 是条件判断语句
    // urlName && urlName.trim() 表示：
    // 1. urlName 存在（不是 null 或 undefined）
    // 2. urlName.trim() 去掉首尾空格后不是空字符串
    // && 是"并且"的意思，两个条件都满足才执行 if 里的代码
    
    // 有 name 参数，直接显示表白页面
    const safeName = urlName.substring(0, 20);
    // substring(0, 20) 截取字符串的前 20 个字符
    // 这样做是为了防止名字太长，影响页面显示
    
    questionText.innerText = `可以成为我的恋人吗？${safeName}`;
    // innerText 用来设置元素的文本内容
    // `` 是模板字符串，可以在字符串中插入变量
    // ${safeName} 会被替换成实际的名字
    // 例如：如果 safeName 是 "小明"，结果就是 "可以成为我的恋人吗？小明"
    
    confession.style.display = 'block';
    // style.display 用来控制元素的显示/隐藏
    // 'block' 表示显示元素（块级显示）
    
    usernameInput.value = safeName;
    // 把名字保存到输入框中，供后续使用
    // value 是输入框的值
    
} else {
    // else 表示"否则"，当 if 条件不满足时执行
    
    // 没有 name 参数，显示输入页面
    nameInput.style.display = 'block';
    // 显示输入名字页面
}

/* ==================== 第四步：确认按钮事件 ==================== */
// 当用户点击"是这个名字呢"按钮时，跳转到表白页面

confirmBtn.addEventListener('click', () => {
    // addEventListener() 用来监听事件
    // 'click' 表示点击事件
    // () => { ... } 是箭头函数，表示点击时要执行的代码
    
    const username = usernameInput.value.substring(0, 20);
    // 获取输入框的值，并截取前 20 个字符
    
    questionText.innerText = `可以成为我的恋人吗？${username || ''}`;
    // 设置表白问题的文字
    // username || '' 表示：如果 username 为空，就用空字符串
    // || 是"或"运算符，如果左边是假值（空字符串、null 等），就用右边的值
    
    // 更新 URL，添加 name 参数
    if (username) {
        // 如果用户输入了名字
        
        const newUrl = `${window.location.pathname}?name=${encodeURIComponent(username)}`;
        // window.location.pathname 是当前页面的路径（不包括域名和参数）
        // encodeURIComponent() 用来编码 URL 参数，防止特殊字符出错
        // 例如：如果用户输入 "小 明"（有空格），编码后变成 "小%20明"
        
        history.pushState({ name: username }, '', newUrl);
        // history.pushState() 用来更新浏览器地址栏的 URL，但不刷新页面
        // 第一个参数是状态对象（可以保存一些数据）
        // 第二个参数是标题（通常传空字符串）
        // 第三个参数是新的 URL
    }
    
    // 切换页面：隐藏输入页面，显示表白页面
    nameInput.style.display = 'none';
    // 'none' 表示隐藏元素
    
    confession.style.display = 'block';
    // 显示表白页面
});

/* ==================== 第五步：No 按钮的挤压效果 ==================== */
// 这是整个项目最有趣的部分！
// 每次点击"不要"按钮，都会发生一些变化

let clickCount = 0;
// let 声明变量，表示这个变量的值可以改变
// clickCount 用来记录点击"不要"按钮的次数

const noTexts = [
    // 数组（Array）：用来存储多个值
    // 数组的索引从 0 开始
    "？你认真的吗…",      // 索引 0
    "要不再想想？",        // 索引 1
    "不许选这个！",        // 索引 2
    "我会很伤心…",        // 索引 3
    "不行:(",             // 索引 4
];
// 这个数组存储了每次点击时按钮要显示的文字

noBtn.addEventListener('click', () => {
    // 监听"不要"按钮的点击事件
    
    clickCount++;
    // ++ 是自增运算符，表示 clickCount = clickCount + 1
    // 每次点击，计数器加 1
    
    // ========== 让 Yes 按钮变大 ==========
    const yesSize = 1 + clickCount * 1.2;
    // 计算 Yes 按钮的缩放比例
    // 第 1 次点击：1 + 1 * 1.2 = 2.2（放大到 2.2 倍）
    // 第 2 次点击：1 + 2 * 1.2 = 3.4（放大到 3.4 倍）
    // 以此类推，每次增加 1.2 倍
    
    yesBtn.style.transform = `scale(${yesSize})`;
    // transform 是 CSS 变换属性
    // scale() 用来缩放元素
    // scale(2) 表示放大到 2 倍
    
    // ========== 让 No 按钮右移 ==========
    const noOffset = clickCount * 50;
    // 计算 No 按钮的移动距离
    // 第 1 次点击：1 * 50 = 50px
    // 第 2 次点击：2 * 50 = 100px
    // 每次向右移动 50px
    
    noBtn.style.transform = `translateX(${noOffset}px)`;
    // translateX() 用来水平移动元素
    // translateX(50px) 表示向右移动 50px
    // 负值表示向左移动
    
    // ========== 让图片和文字上移 ==========
    const moveUp = clickCount * 25;
    // 计算上移距离，每次 25px
    
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    // translateY() 用来垂直移动元素
    // 负值表示向上移动，正值表示向下移动
    
    // ========== 更新 No 按钮的文字 ==========
    if (clickCount <= noTexts.length) {
        // 如果点击次数不超过数组长度（5 次）
        
        noBtn.innerText = noTexts[clickCount - 1];
        // 从数组中取出对应的文字
        // 注意：数组索引从 0 开始，所以要用 clickCount - 1
        // 第 1 次点击：noTexts[0] = "？你认真的吗…"
        // 第 2 次点击：noTexts[1] = "要不再想想？"
    }
    
    // ========== 更新图片 ==========
    const images = {
        // 对象（Object）：用来存储键值对
        // 键（key）是数字，值（value）是图片路径
        1: "assets/images/shocked.webp",   // 第 1 次点击：震惊
        2: "assets/images/think.webp",     // 第 2 次点击：思考
        3: "assets/images/angry.webp",     // 第 3 次点击：生气
        4: "assets/images/crying.webp",    // 第 4 次点击：哭泣
    };
    
    if (images[clickCount]) {
        // 如果对象中有对应的图片
        // images[clickCount] 用方括号访问对象的属性
        
        mainImage.src = images[clickCount];
        // src 是图片的路径属性，修改它可以更换图片
        
    } else if (clickCount >= 5) {
        // 如果点击次数 >= 5，一直显示哭泣的图片
        
        mainImage.src = "assets/images/crying.webp";
    }
});

/* ==================== 第六步：Yes 按钮事件 ==================== */
// 当用户点击"可以"按钮时，进入表白成功页面

yesBtn.addEventListener('click', () => {
    // 监听"可以"按钮的点击事件
    
    const username = usernameInput.value.substring(0, 20);
    // 获取用户名（可能是从输入框输入的，也可能是从 URL 参数来的）
    
    successText.innerText = `我也爱你！${username || ''}`;
    // 设置成功页面的文字
    // 如果没有用户名，就只显示"我也爱你！"
    
    // 切换到成功页面
    nameInput.style.display = 'none';
    confession.style.display = 'none';
    // 隐藏前两个页面
    
    success.style.display = 'flex';
    // 显示成功页面，使用 flex 布局让内容居中
    
    document.body.style.overflow = 'hidden';
    // 禁止页面滚动
    // overflow: hidden 表示隐藏溢出的内容，也就是不显示滚动条
});

/* ==================== 总结 ====================
 * 这个 JavaScript 文件实现了以下功能：
 * 
 * 1. 页面切换：通过修改 display 属性来显示/隐藏不同的页面
 * 
 * 2. URL 参数处理：
 *    - 使用 URLSearchParams 解析 URL 参数
 *    - 使用 history.pushState() 更新 URL（不刷新页面）
 * 
 * 3. 事件监听：
 *    - 使用 addEventListener() 监听按钮点击
 *    - 使用箭头函数定义事件处理函数
 * 
 * 4. DOM 操作：
 *    - 使用 getElementById() 获取元素
 *    - 使用 innerText 修改文本内容
 *    - 使用 style 属性修改 CSS 样式
 *    - 使用 value 获取/设置输入框的值
 *    - 使用 src 修改图片路径
 * 
 * 5. 动画效果：
 *    - 使用 transform 属性实现缩放（scale）和移动（translate）
 *    - 通过计数器实现渐进式的动画效果
 * 
 * 6. 数据结构：
 *    - 使用数组存储多个文字
 *    - 使用对象存储键值对（点击次数 -> 图片路径）
 * 
 * 7. 条件判断：
 *    - 使用 if/else 根据不同情况执行不同的代码
 *    - 使用 && 和 || 进行逻辑运算
 * 
 * 学习建议：
 * - 可以尝试修改数字（如缩放比例、移动距离）看看效果
 * - 可以添加更多的图片和文字
 * - 可以尝试添加新的功能，比如音乐、更多动画等
 */
