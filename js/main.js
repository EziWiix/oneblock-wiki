// === Arkanis Wiki JS ===

document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar toggle (mobile) ---
    const hamburger = document.getElementById('hamburgerWiki');
    const sidebar = document.getElementById('wikiSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // --- Copy IP ---
    document.querySelectorAll('[data-copy-ip]').forEach(el => {
        el.addEventListener('click', () => {
            const ip = el.getAttribute('data-copy-ip') || el.textContent.trim();
            navigator.clipboard.writeText(ip).then(() => {
                el.classList.add('copied');
                setTimeout(() => el.classList.remove('copied'), 1500);
            });
        });
    });

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const wasOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            // Toggle clicked
            if (!wasOpen) item.classList.add('open');
        });
    });

    // --- Active sidebar link ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});
