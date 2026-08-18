// انتظر حتى يتم تحميل كامل محتوى الصفحة قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', function() {

    // --- ب. معالجة الأحداث وتغيير المظهر ---
    // الهدف: تغيير لون خلفية المحتوى عند الضغط على زر معين

    const styleChangeButton = document.getElementById('style-changer');
    const mainContent = document.querySelector('main');

    // التأكد من وجود الزر والمحتوى في الصفحة الحالية
    if (styleChangeButton && mainContent) {
        styleChangeButton.addEventListener('click', function() {
            // toggle تقوم بإضافة الكلاس إذا لم يكن موجوداً، وإزالته إذا كان موجوداً
            mainContent.classList.toggle('alt-background');
        });
    }

    // --- أ. التحقق من صحة النموذج (Form Validation) ---
    // الهدف: التأكد من أن المستخدم أدخل بيانات صالحة في نموذج التواصل

    const contactForm = document.getElementById('contact-form');
    
    // التأكد من وجود النموذج في الصفحة الحالية
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // منع الإرسال التلقائي للنموذج
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('form-message');

            // دالة معرفة مسبقاً للتحقق من البريد الإلكتروني (بشكل مبسط)
            function isEmailValid(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'الرجاء ملء جميع الحقول.';
            } else if (!isEmailValid(email)) {
                formMessage.textContent = 'الرجاء إدخال بريد إلكتروني صالح.';
            } else {
                formMessage.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح.';
                contactForm.reset(); // مسح الحقول بعد الإرسال الناجح
            }
        });
    }
});