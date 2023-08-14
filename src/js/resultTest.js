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
      let trueCount = "";
      resp = JSON.parse(response);
      if (resp.error === false) {
        const countDataResults = Object.keys(resp.dataResult).length - 1;
        let dataCuestionario = localStorage.getItem('temaFuture');
        details(resp.dataResult);
        let nameTest = document.querySelector(".nameTest");
        let timeTest = document.querySelector(".timeTest");
        let respTest = document.querySelector(".respTest");
        let winnerData = document.querySelector(".winnerData");
        nameTest.textContent = dataCuestionario
        timeTest.textContent = resp.dataResult.time;
        respTest.textContent = countDataResults;
        
        Object.values(resp.dataResult).forEach(obj => {
          if (obj.idresponseTrue == 'true') {
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

function details(dataDetails) {

  const accordionContainer = document.getElementById('accordionDetails');

  Object.keys(dataDetails).forEach((key, index) => {
    const respuesta = dataDetails[key];
    const preguntaIndex = index + 1;

  const accordionItem = document.createElement('div');
  accordionItem.className = 'accordion-item';

  const accordionHeader = document.createElement('h2');
  accordionHeader.className = 'accordion-header';
  
  const accordionButton = document.createElement('button');
  accordionButton.className = 'accordion-button collapsed';
  accordionButton.type = 'button';
  accordionButton.setAttribute('data-bs-toggle', 'collapse');
  accordionButton.setAttribute('data-bs-target', `#flush-collapse-${preguntaIndex}`);
  accordionButton.setAttribute('aria-expanded', 'false');
  accordionButton.setAttribute('aria-controls', `flush-collapse-${preguntaIndex}`);
  accordionButton.textContent = `Pregunta ${preguntaIndex}`;

  const accordionCollapse = document.createElement('div');
  accordionCollapse.id = `flush-collapse-${preguntaIndex}`;
  accordionCollapse.className = 'accordion-collapse collapse';
  accordionCollapse.setAttribute('data-bs-parent', '#accordionFlushExample');

  const accordionBody = document.createElement('div');
  accordionBody.className = 'accordion-body';
  accordionBody.textContent = `Respuesta Verdadera: ${respuesta.responseSystemTrue}
Respuesta Seleccionada: ${respuesta.responseUserSelect}`;

  accordionCollapse.appendChild(accordionBody);
  accordionHeader.appendChild(accordionButton);
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionCollapse);
  accordionContainer.appendChild(accordionItem);
});
  
}





