document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openInvitationBtn').addEventListener('click', function () {
        document.getElementById('opening').style.display = 'none';
        const invitationSection = document.getElementById('invitation');
        invitationSection.style.display = 'flex';
        const song = document.getElementById('song');
        if (song) {
            song.volume = 0.4;
            song.play();
        }
    });
});

//pop up

function openPopup(type) {
    const popup = document.getElementById('popup');
    const giftBox = document.getElementById('gift-box');
    const bankBox = document.getElementById('bank-box');

    // Reset visibility of pop-up boxes
    giftBox.style.display = 'none';
    bankBox.style.display = 'none';

    // Display the selected pop-up
    if (type === 'gift') {
        giftBox.style.display = 'block';
    } else if (type === 'bank') {
        bankBox.style.display = 'block';
    }

    // Show the pop-up
    popup.classList.add('active');
    
    // Add click listener for closing on outside click
    document.addEventListener('click', closePopupOnOutsideClick);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
    
    // Remove click listener after popup is closed
    document.removeEventListener('click', closePopupOnOutsideClick);
}

function closePopupOnOutsideClick(event) {
    const popupContainer = document.querySelector('.popup-container'); // Pastikan ini adalah container utama
    if (!popupContainer.contains(event.target)) {
        closePopup();
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
}

const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const song = document.getElementById('song');
const openInvitationBtn = document.getElementById('openInvitationBtn'); // Tombol Open Invitation
let isPlaying = false; // Default: musik berhenti

// Fungsi untuk memperbarui ikon pada tombol Play/Pause
function updatePlayButtonIcon() {
  if (isPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline'; // Tampilkan ikon Pause
  } else {
    playIcon.style.display = 'inline'; // Tampilkan ikon Play
    pauseIcon.style.display = 'none';
  }
}

// Fungsi toggle untuk musik Play/Pause
playButton.addEventListener('click', function () {
  if (isPlaying) {
    song.pause();
    isPlaying = false;
  } else {
    song.play();
    isPlaying = true;
  }
  updatePlayButtonIcon();
});

// Fungsi untuk memulai musik ketika tombol Open Invitation diklik
openInvitationBtn.addEventListener('click', function () {
  if (!isPlaying) {
    song.volume = 0.4; // Atur volume awal
    song.play();
    isPlaying = true;
    updatePlayButtonIcon();
  }
});


simplyCountdown('.simply-countdown' , {
    year: 2025, // required
    month: 1, // required
    day: 25, // required
    hours: 9, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },
   });

// Tanggal acara
const targetDate = new Date('December 27, 2025 00:00:00').getTime();

// Fungsi hitung mundur
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000)) / 1000);

  // Update elemen HTML
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

  // Jika waktu habis
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById('countdown').innerHTML = '<h3>Waktu telah tiba!</h3>';
  }
}, 1000);

// Fungsi untuk menambahkan pengingat ke Google Calendar
function setGoogleReminder() {
  const title = encodeURIComponent('Acara Pernikahan');
  const details = encodeURIComponent('Pernikahan Shinta & Irfan');
  const location = encodeURIComponent('Lokasi Pernikahan');
  const startDate = '20251227T000000Z'; // UTC waktu mulai
  const endDate = '20251227T235900Z'; // UTC waktu selesai

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

  // Buka link Google Calendar di tab baru
  window.open(url, '_blank');
}

// PENGINGAT
function setGoogleReminder() {
    const title = encodeURIComponent('Wedding Ceremony');
    const details = encodeURIComponent('Hezron & Caroline Wedding');
    const location = encodeURIComponent('Lokasi Pernikahan');
    const startDate = '20241227T000000Z'; // Tanggal mulai event (UTC)
    const endDate = '20241227T235900Z'; // Tanggal selesai event (UTC)
  
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
  
    // Buka link Google Calendar di tab baru
    window.open(url, '_blank');
  }
