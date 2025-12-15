document.addEventListener('DOMContentLoaded', () => {
    // الحصول على جميع صفوف الجدول (باستثناء الرأس)
    const rows = document.querySelectorAll('#examSchedule tbody tr');
    
    // متغير لتخزين الصف المميز حاليًا
    let currentHighlightedRow = null;

    rows.forEach(row => {
        row.addEventListener('click', () => {
            // 1. إزالة التمييز من الصف السابق (إذا كان موجودًا)
            if (currentHighlightedRow) {
                currentHighlightedRow.classList.remove('highlight');
            }

            // 2. التحقق مما إذا كان الصف الحالي هو نفس الصف المميز
            if (currentHighlightedRow === row) {
                // إذا كان هو نفسه، هذا يعني أن المستخدم يريد إلغاء التمييز
                currentHighlightedRow = null;
            } else {
                // 3. تمييز الصف الحالي
                row.classList.add('highlight');
                // 4. تحديث المتغير للصف المميز الجديد
                currentHighlightedRow = row;
            }
        });
    });
});
