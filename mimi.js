
function saveData(){
    let names = document.querySelector("#username").value;
    let mails = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
    let comm = document.querySelector("#comments").value;

    // console.log(mails);
    // console.log(names);
    // console.log(pass);
    // console.log(comm);
    localStorage.setItem("name",names);
    localStorage.setItem("pepe",mails);
    localStorage.setItem("passw",pass);
    localStorage.setItem("comm",comm);

}

let data1 = localStorage.getItem('name');
let data2 = localStorage.getItem('pepe');
let data3 = localStorage.getItem('passw');
let data4 = localStorage.getItem('comm');

let aziza = document.getElementById('mynames');
let dida = document.querySelector('#myadd');
let ema = document.getElementById('mye');
let kaki = document.getElementById('comm');

console.log(dida);

if(data1 && data2){
    if(data3 && data4){
        
        aziza.innerHTML = `Name : ${data1}`
        dida.innerHTML = `Address : ${data2}`;
        ema.innerHTML = ` Email : ${data3}`;
        kaki.innerHTML = `Name : ${data4}`;
    }
}

