// edited from code provided by https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
window.addEventListener('load', ()=>{ 
        
    resize();
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('touchstart', startPainting);  
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('ontouchend', stopPainting); 
    document.addEventListener('mousemove', sketch);
    document.addEventListener('ontouchmove', sketch);
    window.addEventListener('resize', resize); 
}); 
    
const canvas = document.querySelector('#canvas'); 
const ctx = canvas.getContext('2d'); 
    
function resize(){ 
    ctx.canvas.width = window.innerWidth; 
    ctx.canvas.height = window.innerHeight; 
} 
    
let coord = {x:0 , y:0};  
let paint = false; 
    
// Updates the coordianates of the cursor when  
// an event e is triggered to the coordinates where  
// the said event is triggered. 
function getPosition(event){ 
    coord.x = event.clientX - canvas.offsetLeft; 
    coord.y = event.clientY - canvas.offsetTop; 
} 
  
// The following functions toggle the flag to start 
// and stop drawing 
function startPainting(event){ 
    paint = true; 
    getPosition(event); 
} 
function stopPainting(){ 
    paint = false; 
} 
    
function sketch(event){ 
    if (!paint) return;
    
    event.preventDefault();
    ctx.beginPath(); 
        
    ctx.lineWidth = 1; 
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
      
    // The cursor to start drawing 
    // moves to this coordinate 
    ctx.moveTo(coord.x, coord.y); 
    
    // The position of the cursor 
    // gets updated as we move the 
    // mouse around. 
    getPosition(event); 
    
    // A line is traced from start 
    // coordinate to this coordinate 
    ctx.lineTo(coord.x , coord.y); 
        
    // Draws the line. 
    ctx.stroke(); 
}