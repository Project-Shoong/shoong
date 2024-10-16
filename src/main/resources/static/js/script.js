// 메인 헤더
const header = document.querySelector('#header');
const logoimg = document.querySelector('#logoimg');

const updateHeader = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
        logoimg.innerHTML = '<img src="/images/top_logo_b.png" alt="">';
    } else {
        header.classList.remove('active');
        logoimg.innerHTML = '<img src="/images/top_logo.png" alt="">';
    }
};

updateHeader(); // 초기 호출
document.addEventListener('scroll', updateHeader);

// 사이드 메뉴 토글
document.getElementById("left_menu").addEventListener("click", function(event) {
    if (event.target.closest("#togle_menu")) {
        const hiddenMenu = event.target.closest("li").querySelector(".hidden_menu");

        if (hiddenMenu.style.height === "0px" || hiddenMenu.style.height === "") {
            hiddenMenu.style.height = hiddenMenu.scrollHeight + "px";
        } else {
            hiddenMenu.style.height = "0px";
        }
    }
});