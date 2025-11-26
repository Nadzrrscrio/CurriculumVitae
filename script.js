document.addEventListener('DOMContentLoaded', () => {
    // Konfigurasi Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // memicu saat 10% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Jika ingin animasi hanya sekali, uncomment baris bawah:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Target semua elemen dengan class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});