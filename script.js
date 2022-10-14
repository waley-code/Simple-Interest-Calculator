// A compute fuction that gets called when compute interest button is clicked
function compute()
{
    // store user input values in variables 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // a self calling function that checks if amount field !empty or < 0
    (function () {
        if(principal=="" || principal <= 0){
            alert("Enter a positive number");
            fname.focus();
            return false;
        }else{
            // a self calling function that displays simple interest result to user when button is clicked
            (function () {
                document.getElementById("result1").innerHTML = `If you deposit ${principal},`+" <br>";
                document.getElementById("result2").innerHTML = `at an interest rate of ${rate}%`+" <br>";
                document.getElementById("result3").innerHTML = "You will receive an amount of "+interest+ " <br>";
                document.getElementById("result4").innerHTML = "in the year "+year+ ` <br>`;
                
              })();
        }
      })();
     
}
// a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

        