// --- Zoom prevention ---
document.body.addEventListener('touchmove', function(event) {
    const mapContainer = document.getElementById('map-container');
    // If the target of the touch is not the map container or a child of it, prevent default zoom
    if (!mapContainer.contains(event.target)) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }
}, { passive: false });

// --- Generic Image Modal Logic ---
function setupImageModal(modalId, buttonId, imageArray, folder) {
    const modal = document.getElementById(modalId);
    const showBtn = document.getElementById(buttonId);
    const closeSpan = modal.querySelector('.close');
    const imagesContainer = modal.querySelector('.modal-content');
    const backToMapBtn = modal.querySelector('.back-to-map-btn');

    const singleImageView = modal.querySelector('.single-image-view');
    const singleImage = modal.querySelector('.single-image');
    const backToGridBtn = modal.querySelector('.back-to-grid-btn');
    
    const fullImagePaths = imageArray.map(img => `${folder}/${img}`);

    function showGridView() {
        singleImageView.style.display = 'none';
        imagesContainer.style.display = 'grid';
        if (backToMapBtn) backToMapBtn.style.display = 'block';
    }

    function showSingleImageView(src) {
        imagesContainer.style.display = 'none';
        singleImage.src = src;
        singleImageView.style.display = 'flex';
        if (backToMapBtn) backToMapBtn.style.display = 'none';
    }

    showBtn.onclick = function() {
        imagesContainer.innerHTML = ''; // Clear previous images
        fullImagePaths.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = src.split('/').pop();
            img.onclick = () => showSingleImageView(src);
            imagesContainer.appendChild(img);
        });
        showGridView();
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeSpan.onclick = closeModal;
    if (backToMapBtn) backToMapBtn.onclick = closeModal;
    if (backToGridBtn) backToGridBtn.onclick = showGridView;
}

// --- Generic Video Modal Logic ---
function setupVideoModal(modalId, buttonId) {
    const modal = document.getElementById(modalId);
    const showBtn = document.getElementById(buttonId);
    const closeSpan = modal.querySelector('.close');
    const backToMapBtn = modal.querySelector('.back-to-map-btn');
    const videos = modal.querySelectorAll('video');

    function openModal() {
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }

    showBtn.onclick = openModal;
    closeSpan.onclick = closeModal;
    if (backToMapBtn) backToMapBtn.onclick = closeModal;
}

// --- Setup Modals ---
const images_26_11 = [
    '55bd8871-8f9b-48c2-9aa5-a71651f6423b.jpg', '6ba30875-6fb6-487b-b8af-5bc9afc9c66b.jpg',
    '78a32b75-21d9-44c4-a4a1-7d137ac4e8cf (1).jpg', '78a32b75-21d9-44c4-a4a1-7d137ac4e8cf.jpg',
    '9fd816fd-c9e5-416c-b27c-06e7fad304cd.jpg', 'a4451b89-1241-4d24-944d-0d47d6101974.jpg',
    'a559292a-4dec-48d9-8d30-33cf9f79395f.jpg', 'ac597cfc-acb7-4877-9caa-34b7c462123a.jpg',
    'cd40c639-6e50-4893-bcea-da9219b8de0c.jpg'
];
setupImageModal('myModal', 'show-images', images_26_11, 'static/Imagenes_26_11_2025');

const images_28_11 = [
    'Captura de pantalla 2025-11-28 092525.png', 'Captura de pantalla 2025-11-28 092551.png',
    'Captura de pantalla 2025-11-28 092601.png', 'Captura de pantalla 2025-11-28 092738.png',
    'Captura de pantalla 2025-11-28 092752.png', 'Captura de pantalla 2025-11-28 092808.png'
];
setupImageModal('modal-28-11', 'show-images-28-11', images_28_11, 'static/fire_28_11');

const reporte_1200_image = ['Reporte 28_11_25 12_00 hs.png'];
setupImageModal('modal-reporte-1200', 'show-reporte-1200', reporte_1200_image, 'static/Imagenes_26_11_2025');


setupVideoModal('videoModal', 'show-video');
setupVideoModal('videoModal-28-11', 'show-videos-28-11');


// --- Dropdown Logic ---
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    document.querySelector('.dropdown-content').classList.toggle("show");
    event.stopPropagation();
});

// --- General Click Handling ---
window.addEventListener('click', function(event) {
    // Close dropdown if click is outside
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    // Close modal if click is on the background
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        event.target.querySelectorAll('video').forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
});
