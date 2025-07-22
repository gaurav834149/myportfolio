function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
    document.querySelector(`[onclick="showSection('${sectionId}'); return false;"]`).classList.add('active');

    // Scroll to the section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Close the mobile menu after selecting a link
    if (window.innerWidth <= 768) {
        document.querySelector('.main-nav').classList.remove('active');
    }
}

document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    document.querySelector('.main-nav').classList.toggle('active');
});
