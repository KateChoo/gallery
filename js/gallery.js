

let img = document.getElementById('image');

function upDate(previewPic){
    img.innerHTML = previewPic.alt ;
    img.style.backgroundImage= "url("+previewPic.src+")";
}
   
function unDo(){
    img.innerHTML = 'Hover over an image below to display here.' ;
    img.style.backgroundImage= "url('')";           
}