let textArea = document.querySelector("textarea");
let fileName = document.getElementById("filename");
let fileType = document.getElementById("saveas");
let saveBtn = document.getElementById("saveBtn");


saveBtn.addEventListener("click"
 , function(){
    let blob = new Blob( [textArea.value ] , {type: fileType.value});
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = fileName.value;
    link.href = url;
    link.click();
 })





//  var text = "Hello, Blob!";
// var blob = new Blob([text], { type: "text/plain" });
// var url = URL.createObjectURL(blob);

// var a = document.createElement("a");
// a.href = url;
// a.download = "hello.txt";
// a.textContent = "Download hello.txt";

// document.body.appendChild(a);
