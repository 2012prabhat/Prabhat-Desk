    let myArr = [];


    async function fetchData() {
        const response = await fetch('https://contact-form-428c0-default-rtdb.firebaseio.com/userDataRecords.json');
        const data = await response.json();
        return data;
      }
      
      fetchData().then(data => {
        for(let i in data){
            myArr.push(data[i]);
        }
        for(let i=0;i<myArr.length;i++){
          createCards(myArr[i]);
        }
      });



function createCards(data){
  let cardCont = document.querySelector(".cardCont");
  cardCont.innerHTML += `<div class="card" id=${data.id}>
  <div class="codeTitle">${data.codeTitle}</div>
  </div>`
  // <div class="code">${data.code}</div>

let card = document.querySelectorAll(".card");
for(let i=0;i<card.length;i++){
  card[i].addEventListener("click",handleClick)
}
}

let codeViewCloseBtn = document.querySelector(".codeViewCloseBtn");
let codeViewer = document.querySelector(".codeViewer");
function handleClick() {
  let codeArr = myArr.filter(f=>f.id == this.id)
  let codeView = codeArr[0].code;
  codeViewer.value = codeView;
  codeViewer.style.transform = "scale(1)";
  codeViewCloseBtn.style.transform = "scale(1)";
}

codeViewCloseBtn.addEventListener("click",()=>{
  codeViewer.style.transform = "scale(0)";
  codeViewCloseBtn.style.transform = "scale(0)";
})


