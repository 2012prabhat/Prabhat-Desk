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
        // myArr.pop()
        for(let i=0;i<myArr.length;i++){
          createCards(myArr[i]);
        }
      });



let cardCont = document.querySelector(".cardCont");
function createCards(data){
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

setTimeout(() => {
  document.querySelector(".loaderParent").style.display = "none";
  document.querySelector(".search-box").style.transform = "scale(1)";
  cardCont.style.display = "flex"
}, 2000);



let searchInput = document.querySelector(".search-box input");
searchInput.addEventListener("input",filterData);
function filterData(){
  let inputData = document.querySelector(".search-box input").value;
  let myFilteredArr = myArr.filter(f=>f.codeTitle.toLowerCase().includes( inputData.toLowerCase()));
  cardCont.innerHTML = "";
  for(let i=0;i<myFilteredArr.length;i++){
    createCards(myFilteredArr[i])
  }
}