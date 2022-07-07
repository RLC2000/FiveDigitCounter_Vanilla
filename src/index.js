import "./styles.css";
var btn = document.querySelector("button");
var field = document.querySelector("input");
btn.addEventListener("click", hlpr);
function hlpr() {
  console.log(field.value);
  var curval = field.value;
  var inp = field.value + "";
  console.log(inp);
  if (inp.length > 5) alert("ENTER NUMBER WITHIN THE RANGE SPECIFIED!");
  else {
    if (inp.length == 1) inp = "0000" + inp;
    else if (inp.length == 2) inp = "000" + inp;
    else if (inp.length == 3) inp = "00" + inp;
    else if (inp.length == 4) inp = "0" + inp;
    console.log(inp);
    var t_bool = [true, true, true, true, true];
    var tops = document.querySelectorAll(".top");
    var lower = document.querySelectorAll(".lower");
    for (var i = 0; i < tops.length; i++) tops[i].innerText = inp[i];
    var id = setInterval(function () {
      let newval = curval - 1;
      if (newval <= 0) clearInterval(id);
      let newboxval = newval + "";
      if (newboxval.length == 1) newboxval = "0000" + newboxval;
      else if (newboxval.length == 2) newboxval = "000" + newboxval;
      else if (newboxval.length == 3) newboxval = "00" + newboxval;
      else if (newboxval.length == 4) newboxval = "0" + newboxval;
      for (var i = 0; i < 5; i++) {
        if (newboxval[i] != inp[i]) {
          if (t_bool[i] == true) {
            t_bool[i] = false;
            lower[i].innerText = newboxval[i];
            //insert the animate class
            lower[i].classList.add("animate");
          } else {
            t_bool[i] = true;
            tops[i].innerText = newboxval[i];
            //remove animate class;
            lower[i].classList.remove("animate");
          }
        }
      }
      inp = newboxval;
      curval = newval;
    }, 1000);
  }
}
