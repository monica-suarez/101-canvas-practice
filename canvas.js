let canvas = document.getElementById("my-canvas")

console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d')
c.fillRect(70, 75, 125, 125)
c.fillStyle='lavender';
c.fillRect(225, 125, 200, 100)
c.fillStyle='aqua';
c.fillRect(10, 260, 200, 200)
c.strokeStyle= "red";
c.beginPath();
c.moveTo(20, 100)
c.lineTo(1000, 500)
c.stroke()
c.lineTo(1500, 200)
c.stroke()
console.log(c)
c.beginPath();
c.strokeStyle = "yellow";
c.arc(600, 250, 50, 0, 2 * Math.PI);
c.stroke();
// for(let i=0; i < 50; i++ ) {
//     const x = Math.random() * (window.innerWidth - 100)
//     const y = Math.random() * (window.innerHeight - 100)
//     // the first value will be null to accommodate for no 0 number being drawn
//     const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
//     const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

//     // Draw Circle
//     c.beginPath();
//     // replace "black" with the random color selected from the list
//     c.strokeStyle = colors[randomIndex];
//     c.arc(x, y, 50, 0, 2 * Math.PI);
//     c.stroke();
//   }
window.onclick = () => {
  for(let i=0; i < 50; i++ ) {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)
    // the first value will be null to accommodate for no 0 number being drawn
    const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
    const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

    // Draw Circle
    c.beginPath();
    // replace "black" with the random color selected from the list
    c.strokeStyle = colors[randomIndex];
    c.arc(x, y, 50, 0, 2 * Math.PI);
    c.stroke();
  }
}
