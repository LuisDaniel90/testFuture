let dataRest = null;
const resultTest = (dataFull) => {
    if (dataFull) {
        $.ajax({
            url: "../controller/resultTest.php",
            method: "POST",
            data: {
                dataFull : JSON.stringify(dataFull),
                getResult : true
            },
            beforeSend: function () {
              // console.log('beforeSend')
            },
            success: function (response) {
              console.log(response)
              resp = JSON.parse(response);
              if (resp.error === false) {
                window.location.href = './finishTest.php';
                dataRest = resp.dataResult
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



 let closeSession = document.querySelector(".closeSession");

 if (closeSession) {
  closeSession.addEventListener("click", (event) =>finishSession(event));
}

const finishSession = (event) => {
  $.ajax({
    type: 'GET',
    url: '../controller/closeSession.php',
    success: function(response) {
        
        window.location.href = '../index.php';
    },
    error: function(error) {
        console.log("Error en la solicitud AJAX: ", error);
    }
  });
}

const putDataResult = () =>{
  $.ajax({
    url: "../controller/resultTest.php",
    method: "POST",
    data: {
        putResult: true
    },
    beforeSend: function () {
      // console.log('beforeSend')
    },
    success: function (response) {
      resp = JSON.parse(response);
      if (resp.error === false) {
        const countDataResults = Object.keys(resp.dataResult).length - 1;
        let timeTest = document.querySelector(".timeTest");
        let respTest = document.querySelector(".respTest");
        let winnerData = document.querySelector(".winnerData");
        timeTest.textContent = resp.dataResult.time;
        respTest.textContent = countDataResults;
        let trueCount = 0;
        Object.values(resp.dataResult).forEach(obj => {
          if (obj.responseTrue === 'true') {
            trueCount++;
          }
        });
        let textValue = "";
        if (trueCount < 3) { textValue = "bajo " + trueCount * 100 }
        else if (trueCount == 3) { textValue = "intermedio " + trueCount * 100 }
        else if (trueCount == 4) { textValue = "alto " + trueCount * 100 }
        else{ textValue = "superior " + trueCount * 100;

        }
        winnerData.textContent = textValue;

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

const completeTest = document.getElementById('completeTest');
if (completeTest) {
  putDataResult();
}





