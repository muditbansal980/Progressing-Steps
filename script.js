const next= document.querySelector('.next');
const prev= document.querySelector('.prev');
const circles= document.querySelectorAll('.circle');
let currentActive= 0;
next.addEventListener('click',() =>{
    currentActive++;
    prev.style.backgroundColor= '#3f5fdf';
    if (currentActive < 3){
        circles[currentActive].style.border= '3px solid #3f5fdf';
        circles[currentActive].style.setProperty('--line-color', '#3f5fdf');
    }
    else if(currentActive === 3){
        circles[currentActive].style.border= '3px solid #3f5fdf';
        circles[currentActive].style.setProperty('--line-color', '#3f5fdf');
        next.style.backgroundColor= '#e0e0e0';
    }
    else if(currentActive > 3){
        currentActive = 3; // Prevent going beyond the last circle
    }
});
prev.addEventListener('click',() =>{
    next.style.backgroundColor= '#3f5fdf';
    if (currentActive === 0){
        prev.style.backgroundColor= '#e0e0e0';
        console.log('currentActive === 0:', currentActive);
    }
    else if(currentActive ===1){
        circles[currentActive].style.border= '3px solid #e0e0e0';
        circles[currentActive].style.setProperty('--line-color', '#e0e0e0');
        currentActive--;
        prev.style.backgroundColor= '#e0e0e0';
        console.log('currentActive === 1:', currentActive);
    }
    else if(currentActive < 0){
        currentActive = 0; // Prevent going below the first circle
    }
    else if(currentActive > 1){
        circles[currentActive].style.border= '3px solid #e0e0e0';
        circles[currentActive].style.setProperty('--line-color', '#e0e0e0');
        currentActive--;
        console.log('currentActive > 1:', currentActive);
    }
});
