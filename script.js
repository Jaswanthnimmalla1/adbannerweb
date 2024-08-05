function explore() {
    alert('Explore button clicked!');
    // You can add more functionality here, such as redirecting to another page
}
function previewImage(event, imageId) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById(imageId);
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function changeMainImage(src) {
    document.getElementById('main-image').src = src;
}
function changeBannerImage(src) {
    document.getElementById('banner-image').src = src;
}

function handleClick() {
    alert('Button clicked!');
}
document.getElementById('doneButton').addEventListener('click', () => {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    alert(`Title: ${title}\nDescription: ${description}`);
});

document.getElementById('downloadButton').addEventListener('click', () => {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;

    const data = `Title: ${title}\nDescription: ${description}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'banner.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
