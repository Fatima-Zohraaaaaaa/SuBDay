let highestZ = 1;

class Paper{
    holdingPaper = false;
    mouseTouchX = 0;
    mouseTouchY = 0;
    mouseX = 0;
    mouseY = 0;
    prevMouseX = 0;
    prevMouseY = 0;
    velX = 0;
    velY = 0;
    currentPaperX = 0;
    currentPaperY = 0;



    init(paper){

        paper.addEventListener('mousedown', (e) => {
            this.holdingPaper = true;
      
            paper.style.zIndex = highestZ;
            highestZ += 1;
      
            if(e.button === 0) {
               this.prevMouseX = this.mouseX;
               this.prevMouseY = this.mouseY;

               console.log(this.prevMouseX);
               console.log(this.prevMouseY);


      }

        } )




        document.addEventListener('mousemove', (e) =>{
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velX = this.mouseX - this.prevMouseX;
            this.velY = this.mouseY - this.prevMouseY;




            if(this.holdingPaper) {
                {
                  this.currentPaperX += this.velX;
                  this.currentPaperY += this.velY;
                }
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;
        
                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
              }




        })



        window.addEventListener('mouseup', (e) =>{
            console.log('mouse button is released');
            this.holdingPaper = false;

        })


    }
}

const papers= Array.from(document.querySelectorAll('.paper'))

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);
})