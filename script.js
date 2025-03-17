document.addEventListener("DOMContentLoaded", function() {
    const themeBtn = document.getElementById("theme-btn");
    const body = document.body;
    const card = document.querySelector(".profile-card");

    themeBtn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        card.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ 라이트 모드";
        } else {
            themeBtn.textContent = "🌙 다크 모드";
        }
    });
});
