let codeTitle = "";
let code = "";
document.querySelector(".codeSubForm *").addEventListener("input",handleData)

function handleData(){
 let codeTitleElem = document.querySelector(".codeSubForm input");
 let codeElem = document.querySelector(".codeSubForm textarea");
 codeTitle = codeTitleElem.value;
 code = codeElem.value;
}


async function handleSubmit(e) {
    if(codeTitle=="" || code == "") {
      alert("Plese fill all fields")
      return;
    }
    let id = Date.now();
    const res = await fetch("https://contact-form-428c0-default-rtdb.firebaseio.com/userDataRecords.json",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          codeTitle,code,id
        })
        })
        if(res){
          alert("Data Stored")
        }else{
          console.log("Data is Not stored")
        }
}
