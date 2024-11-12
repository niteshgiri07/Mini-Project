// Select elements
const upload = document.getElementById('upload');
const image = document.getElementById('image');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const grayscale = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const saturate = document.getElementById('saturate');
const hueRotate = document.getElementById('hue-rotate');
const resetButton = document.getElementById('reset');
const downloadButton = document.getElementById('download');

// Upload image event
upload.addEventListener('change', () => {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Apply filters
function applyFilters() {
  image.style.filter = `
    brightness(${brightness.value}%)
    contrast(${contrast.value}%)
    grayscale(${grayscale.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    hue-rotate(${hueRotate.value}deg)
  `;
}

// Add event listeners to sliders
[brightness, contrast, grayscale, sepia, saturate, hueRotate].forEach(slider => {
  slider.addEventListener('input', applyFilters);
});

// Reset filters
resetButton.addEventListener('click', () => {
  brightness.value = 100;
  contrast.value = 100;
  grayscale.value = 0;
  sepia.value = 0;
  saturate.value = 100;
  hueRotate.value = 0;
  applyFilters();
});

// Download edited image
downloadButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;

  // Apply current filters to the canvas
  ctx.filter = `
    brightness(${brightness.value}%)
    contrast(${contrast.value}%)
    grayscale(${grayscale.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    hue-rotate(${hueRotate.value}deg)
  `;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Create a download link
  const link = document.createElement('a');
  link.download = 'edited-image.png';
  link.href = canvas.toDataURL();
  link.click();
});
function convertToBlackAndWhite() {
    const img = document.getElementById('image');
    img.style.filter = 'grayscale(95%)'; // Apply grayscale effect
}


