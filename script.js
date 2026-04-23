const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nama = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('interest').value;

        
        let daftar = JSON.parse(localStorage.getItem('techMembers')) || [];

       
        daftar.push({ nama, email, minat });

      
        localStorage.setItem('techMembers', JSON.stringify(daftar));

       
        document.getElementById('resultDisplay').classList.remove('d-none');
        document.getElementById('btnBatal').innerText = "Kembali";
        
        alert("Pendaftaran Berhasil! Data sudah tersimpan.");
        registrationForm.reset();
    });
}


