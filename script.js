

const certificates = document.querySelectorAll(".ctimg");
const preview = document.getElementById('preview');
const previewImg = document.getElementById('previewImg');


certificates.forEach(img =>{
    img.addEventListener("click",()=>{
        preview.style.display = 'flex';
        previewImg.src = img.src;
        
    });
});

previewImg.addEventListener("click", () => {
    preview.style.display = "none";
    previewImg.src = "";
});



preview.addEventListener("click", (e) => {
    if (e.target === preview) {
      preview.style.display = "none";
      preview.src="";
    }
});