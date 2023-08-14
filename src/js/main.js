const dataTest = document.querySelector("#dataTest");
const finishSend = document.querySelector("#finishSend");
if (dataTest || finishSend) {
    dataTest.addEventListener("submit", (event) =>finishTest(event));
}
let dataFull = {};



 const finishTest = (event) => {
    event.preventDefault();
    let fullData = event.currentTarget;
    Swal.fire({
        title: 'Finalizar cuestionario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, finalizar!'
      }).then((result) => {
        if (result.isConfirmed) {
            resultTest(dataFull)
        }
      })
 }

 let temaSelect = null; 
 let temas = null;

let preguntaActualIndex = 0; 

const questionArticle = document.getElementById('questionArticle');

const prevQuestionLink = document.querySelector('.desplaceLeft');
const nextQuestionLink = document.querySelector('.desplaceRight');

function mostrarPregunta(preguntaIndex) {
    questionArticle.innerHTML = '';
    const containerData = document.createElement('div');
    containerData.classList.add('container');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('dataCuestionario', 'mt-5', 'p-5');
  
    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'd-flex', 'justify-content-center');
  
    const card = document.createElement('div');
    card.classList.add('card', 'card-futuros', 'text-center');
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const cardText = document.createElement('p');
    const preguntaTitulo = document.createElement('h2');
    
    const pregunta = temaSelect.preguntas[preguntaIndex];
    const descripcionPregunta = pregunta.pregunta;

    preguntaTitulo.textContent = descripcionPregunta;

  
    cardText.appendChild(preguntaTitulo);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    cardRow.appendChild(card);
    cardContainer.appendChild(cardRow);
    containerData.appendChild(cardContainer);
  
    questionArticle.appendChild(containerData);

    const opcionesRespuesta = pregunta.opciones.map((opcion, idx) => {
      const optionCol = document.createElement('div');
      optionCol.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');
  
      const card = document.createElement('div');
      card.classList.add('card','optionCard');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = String.fromCharCode(65 + idx);
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = opcion;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      optionCol.appendChild(card);
  
      return optionCol;
    });
  
    const optionsRow = document.createElement('div');
    const containerOption = document.createElement('div');
    containerOption.classList.add('container');
    
    optionsRow.classList.add('row', 'optionAnswer');
    containerOption.appendChild(optionsRow);
    opcionesRespuesta.forEach((option, index) => {
        optionCard = option.querySelector(".card")
        optionCard.setAttribute( 'data-response', index );
        if (index == pregunta.respuestaCorrecta ) {
            optionCard.setAttribute( 'data-answer', 'true' );
        }
        else{
            optionCard.setAttribute( 'data-answer', 'false' );
        } 
        optionCard.addEventListener('click', (event) => selectOption(event,opcionesRespuesta));
        optionsRow.appendChild(option);

      });
    questionArticle.appendChild(containerOption);
  }


  function cargarTemas() {
    fetch('../object.json')
      .then(response => response.json())
      .then(data => {
        temaSelect = data.temas.find(tema => tema.nombre === 'Excel');
        mostrarPregunta(preguntaActualIndex);
        
        prevQuestionLink.addEventListener('click', () => {
            preguntaActualIndex = (preguntaActualIndex - 1 + temaSelect.preguntas.length) % temaSelect.preguntas.length;
            mostrarPregunta(preguntaActualIndex);
        });

        nextQuestionLink.addEventListener('click', () => {
            if (temaSelect.preguntas.length > 1) {
                finishSend.removeAttribute('disabled');
            }
            if (preguntaActualIndex === temaSelect.preguntas.length - 1) { resultTest(dataFull)}
            else{ 
                preguntaActualIndex = (preguntaActualIndex + 1) % temaSelect.preguntas.length;
                mostrarPregunta(preguntaActualIndex); 
            }
            
            
        });
    
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });

}



const selectOption = (event,opcionesRespuesta) => {
    event.preventDefault();
    let selectData = event.currentTarget;
    opcionesRespuesta.forEach((option) => {
        option.querySelector(".card").classList.remove("selectoption");
    });

    selectData.classList.toggle("selectoption");

    let responseUser = selectData.getAttribute( "data-response" );
    let responseTrue = selectData.getAttribute( "data-answer" );
    dataFull[preguntaActualIndex] = {
        "responseTrue" : responseTrue,
        "responseUser" : responseUser,
    };
    dataFull["time"] = timeFull;


    if (dataFull.length == 5) {
        resultTest(dataFull)
    }
    else if (dataFull.length > 1) {
        finishSend.removeAttribute('disabled');
    }
   
 }

const timerElement = document.querySelector('.dataTime');
const countdownElement = document.getElementById('countdown');
const SelectMinuts = 1;
const targetTime = new Date().getTime() + SelectMinuts * 60 * 1000;
let timeFull = null

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetTime - now;
    
    if (timeRemaining <= 0) {
      clearInterval(interval);
      timerElement.textContent = "¡Tiempo agotado!";
      setTimeout(() => { resultTest(dataFull)}, 500);
      
    } else {
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      timeFull = `${minutes} minutos ${seconds} segundos`;
      timerElement.textContent = "Tiempo " + timeFull;
    }
  }
  
  // Actualizar el temporizador cada segundo

  if (questionArticle) {
    cargarTemas();
    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
  }
  
  

