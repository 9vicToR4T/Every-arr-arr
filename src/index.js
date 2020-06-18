function specialNumber(n){
  let nr = n.toString();
  let newn = [...nr];
  const res = ["0", "1", "2", "3", "4" , "5"]; 
  const found = newn.every(r => res.includes(r))
  let ras = found ? "Special!!" : "NOT!!";
  return ras;
  
}


const arrs = specialNumber(99);
const app = document.querySelector('#app');
app.innerHTML = arrs;

