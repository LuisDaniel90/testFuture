$(document).ready(function(){
    const dataForm = document.querySelector("#dataForm");
    const dataName = document.querySelector("#dataName");
if (dataForm) {
    dataForm.addEventListener("submit", (event) =>initTest(event));
    dataName.addEventListener("input", (event) =>writeUser(event));
}

const writeUser = (event) =>{
  const textInput = event.currentTarget;
  const inputValue = textInput.value;
  const sanitizedValue = inputValue.replace(/\s/g, '');
  textInput.value = sanitizedValue;
  let errorName = document.querySelector("#errorName");
  if (inputValue !== sanitizedValue) {
  errorName.style.display = "block";
  textInput.style.outline = '2px solid red';
  } else {
    errorName.style.display = "none";
    textInput.style.outline = 'initial';
  }
  
}
const initTest = (event) => {
    event.preventDefault();
    let fullData = event.currentTarget;
    let dataName = fullData.querySelector("#dataName");

    if (dataName) {
        let nameUser = dataName.value;
        $.ajax({
            url: "./controller/saveSession.php",
            method: "POST",
            data: {
                nameUser
            },
            beforeSend: function () {
              // console.log('beforeSend')
            },
            success: function (response) {
              console.log(response)
              if (response === 'success') {
                window.location.href = './session/test.php';
              } 
              else {
                    // Handle error
                    console.log('Error al guardar la sesión.');
                }
            },
            error: function (error) {
              console.log("error ", error);
            },
          });
    }

 }

})