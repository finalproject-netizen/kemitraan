document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen HTML
    const setujuCheckbox = document.getElementById('setuju-checkbox');
    const formulirSection = document.getElementById('formulir-section');

    // Fungsi untuk menampilkan atau menyembunyikan formulir
    function toggleFormulir() {
        if (setujuCheckbox.checked) {
            // Jika dicentang, tampilkan formulir
            formulirSection.style.display = 'block'; 
        } else {
            // Jika tidak dicentang, sembunyikan formulir
            formulirSection.style.display = 'none'; 
        }
    }

    // Panggil fungsi saat halaman dimuat
    toggleFormulir();

    // Tambahkan event listener untuk memantau perubahan pada checkbox
    setujuCheckbox.addEventListener('change', toggleFormulir);

    // CATATAN PENTING:
    // Pada metode mailto:, kita TIDAK memerlukan kode JavaScript
    // untuk menangani event submit (event.preventDefault(), fetch, dll.),
    // karena browser akan menangani pengiriman data melalui aplikasi email.
    
    // Namun, Anda dapat menambahkan peringatan kustom sebelum pengiriman jika diinginkan:
    const form = document.getElementById('formulir-section');
    form.addEventListener('submit', function(event) {
        alert('Anda akan diarahkan ke aplikasi email Anda untuk menyelesaikan pengiriman formulir. Mohon klik "Kirim" di aplikasi email Anda.');
        // Browser akan melanjutkan dengan membuka mailto:
    });
});
