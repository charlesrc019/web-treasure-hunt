var codes = null
var view = false
var txt = document.getElementById("code")
var rvl = document.getElementById("reveal")
var btn = document.getElementById("submit")
var err = document.getElementById("error")
var int = document.getElementById("intro")
var frm = document.getElementById("form")
document.addEventListener("DOMContentLoaded", codeLoad)
rvl.addEventListener("click", codeReveal)
btn.addEventListener("click", codeCheck)
frm.addEventListener("submit", function(event){
  event.preventDefault()
  codeCheck();
})

function codeLoad(){
  setTimeout(intHide, 3000)
  var request = new XMLHttpRequest();
  request.open("GET", "codes.csv", true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.status !== 200) {
      alert("CRITICAL ERROR!\nUnable to fetch secret code CSV.\nConsult website administrator.")
    }
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      if (type.indexOf("text") !== 1) {
        var lines = request.responseText.split("\n")
        var result = lines.map(function(line) {
           return line.split("|")
        })
        codes = result
        return
      }
    }
  }

}

function codeReveal() {
  if (view) {
    rvl.classList.remove("fa-eye-slash")
    rvl.classList.add("fa-eye")
    txt.type = "password"
    view = false
  }
  else {
    rvl.classList.remove("fa-eye")
    rvl.classList.add("fa-eye-slash")
    txt.type = "text"
    view = true
  }
}

function codeCheck() {
  var code = txt.value.toLowerCase()
  var msg = ""
  var link = null
  if ((/\S/.test(code)) && code !== null)
    for (i = 0; i < codes.length; i++) {
      if (codes[i][0].toLowerCase() === code) {
        msg = codes[i][1].replace("\\n","\n")
        link = codes[i][2]
      }
    }
    if (msg !== "") {
      alert(msg)
    }
    if (link !== null) {
      window.location = link
    }
    else {
      errWarn()
      setTimeout(errHide, 5000)
      return false
  }
}

function errWarn() {
  err.classList.remove("d-none")
}

function errHide() {
  err.classList.add("d-none")
}

function intHide() {
  int.classList.add("d-none")
}