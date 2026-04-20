// Array untuk simulasi penyimpanan data
let members = [];

const regForm = document.getElementById('registrationForm');
if (regForm) {
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Menangkap data
        const newMember = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value
        };

        // Simpan ke array
        members.push(newMember);

        // Tampilkan hasil
        alert("Pendaftaran Berhasil untuk: " + newMember.name);
        
        const resultDisplay = document.getElementById('resultDisplay');
        const resultText = document.getElementById('resultText');
        resultDisplay.classList.remove('d-none');
        resultText.innerText = `Nama: ${newMember.name} | Email: ${newMember.email} | Minat: ${newMember.interest}`;
        
        regForm.reset();
    });
}

// Interaksi Multimedia (gallery.html)
function changeImage() {
    const img = document.getElementById('techImage');
    img.src = "https://picsum.photos/600/400?tech";
    alert("Gambar telah diperbarui!");
}

function toggleAudio(action) {
    const audio = document.getElementById('bgAudio');
    if (action === 'play') {
        audio.play();
    } else {
        audio.pause();
    }
}