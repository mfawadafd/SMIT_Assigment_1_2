let array=[];
function add(){
   
        let inputtext = document.querySelector(".put").value;
        array.push(inputtext);
        document.querySelector(".text").textContent = array;

       if(inputtext === ""){
        // console.log(inputtext.value , "do some thing")
            alert("Please Enter The Data.")
        }
    }
function delet(){
    let inputtext = document.querySelector(".put").value
        array.pop(inputtext);
        document.querySelector(".text").textContent = array;
    }

    function addfirst(){
        let inputtext = document.querySelector(".put").value
        array.shift(inputtext);
        document.querySelector(".text").textContent = array;
    }
    function deletfirst(){
        let inputtext = document.querySelector(".put").value
        array.unshift(inputtext);
        document.querySelector(".text").textContent = array;
    }