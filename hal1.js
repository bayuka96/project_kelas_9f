// Fungsi untuk mengarahkan ke halaman 2
function goToPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

// Menghilangkan animasi flash-screen setelah selesai
window.addEventListener('load', () => {
    const flashScreen = document.getElementById("flash-screen");
    setTimeout(() => {
        flashScreen.style.display = 'none';
    }, 4500); // 3 kali flash dalam 1.5 detik
});
