(function () {
  const ex1 = document.getElementById('ex1');
  const ex2_text = document.getElementById('ex2_text');

  
    ex1.addEventListener("click", function () {
     document.getElementById("ex1_content").innerHTML = "<b>0,01,2,3,4,5,6,7,8,9</b>";
      })
  ex2_text.addEventListener("input", function (){ 
     if(ex2_text.value.length == 10)
{
    console.log("Numer Telefonu może mieć tylko 9 cyfr")
}
    if(isNaN(ex2_text.value))
    {
      console.log("Numer Telefonu może tylko zawierać cyfry")
    }
    if(ex2_text.value.length == 9 && !(isNaN(ex2_text.value)))
    {
      console.log("Numer Telefonu jest poprawny")
    }

    
})
                            })();
function allowDrop(ex3) {
  ex3.preventDefault();
}
function drag(ex3) {
  ex3.dataTransfer.setData("text", ex3.target.id);
}
function drop(ex3) {
  ex3.preventDefault();
  var dane = ex3.dataTransfer.getData("text");
  ex3.target.appendChild(document.getElementById(dane));
}