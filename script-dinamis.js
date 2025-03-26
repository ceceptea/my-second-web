// Mengubah warna latar belakang secara acak
function changeBackgroundColor() {
  const colors = ['#f0f0f0', '#dcdcdc', '#e0e0e0', '#f8f8f8', '#ffe4e1', '#e6e6fa'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Menangani pengiriman formulir kontak
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const feedback = `Terima kasih, ${name}! Pesan Anda telah dikirim.<br>Email: ${email}<br>Pesan: ${message}`;
  document.getElementById('feedbackMessage').innerHTML = feedback;
  document.getElementById('contactForm').reset();
}

// Membuka gambar dalam tab baru saat diklik
function openImage(imgElement) {
  window.open(imgElement.src, '_blank');
}

// Toggle tampilan daftar sertifikat
function toggleCertificates() {
  const certList = document.getElementById('certificates');
  certList.style.display = certList.style.display === 'none' ? 'block' : 'none';
}

// Tampilkan waktu saat ini
function showCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('timeDisplay').innerText = `Waktu saat ini: ${timeString}`;
}

// Menampilkan waktu setiap detik
setInterval(showCurrentTime, 1000);
