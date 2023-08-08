let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


///Questoes
const questions = [
     {
      question: "Qual a criatura mítica mais conhecida do mundo?",
      options: ["Dragão", "Fada", "Pegaso", "Chupa Cu"],
      answer: 0  },

      {
      question: "Qual é o videogame mais vendido no mundo?",
      options: ["Nintendo Switch", "Xbox One", " PlayStation 2", "PlayStation 3"],
      answer: 2  },

      {
      question: "Qual é o maior mamífero terrestre do mundo?",
      options: ["Hipopótamo", "Pericles", "Thais Carla", "Elefante Africano"],
      answer: 3  },
      {

      question: "Qual é o animal terrestre mais rápido do mundo? ",
      options: ["Chita", "Guepardo", "Tartaruga", "O Que Fugiu Do Furry"],
      answer: 1  },
      {

      question: "Qual a religião mais conhecida do mundo?",
      options: ["Maradoniana", "Aghori", "Nuwaubian", " Cristianismo"],
      answer: 3  },
      {
      question: "Qual o lugar mais longe onde um humano já foi?",
      options: ["Lua", "Júpiter", "Titanic", "Marte"],
      answer: 0  },

      {
      question: "Qual o QI mais alto registrado? ",
      options: ["10-50", "100-150", "250-300", "300-350"],
      answer: 2  },

      {
      question: "Qual foi o último país a ganhar a Copa do Mundo? ",
      options: ["Argentina", "Brazil", "EUA", "México"],
      answer: 0  },

      {
      question: "Qual o maior campeao do brasileirao?(Campeonato Brasileiro)",
      options: [" Náutico ", "Sport", "Palmeiras", "São paulo"],
      answer: 2  },
      
      {
      question: "Para quem a Ashley pede ajuda em RE4? ",
      options: [" Ozwell ", "Leon", "Michael Jackson", "Batman"],
      answer: 1  }

  ];
  
  
 
  shuffleArray(questions);
  
  // Função para exibir a próxima questão do quiz
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    // Limpa o resultado da pergunta anterior
    resultElement.textContent = "";
  
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      questionElement.textContent = question.question;
  
      // Limpa as opções anteriores
      optionsElement.innerHTML = "";
  
      // Adiciona as opções como botões
      for (let i = 0; i < question.options.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = question.options[i];
        button.setAttribute("onclick", "checkAnswer(" + i + ")");
        li.appendChild(button);
        optionsElement.appendChild(li);
      }
    } else {
      // Fim do quiz
      questionElement.textContent = "Fim do Quiz!";
      optionsElement.innerHTML = "";
      resultElement.textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
    }
  }
  
  // Função para iniciar o temporizador
  function startTimer() {
    clearInterval(timer); // Limpa o temporizador anterior, se houver
    timeLeft = 20; // Reinicia o tempo para 20 segundos
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
        checkAnswer(null); // Verificar resposta, passando null para indicar que o tempo acabou
      }
    }, 1000);
  }
  
  // Função para verificar a resposta selecionada
  function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
  
    if (selectedOption === question.answer) {
      score++;
      document.getElementById("result").textContent = "Resposta correta!";
    } else {
      document.getElementById("result").textContent = "Resposta incorreta!";
    }
  
    // Avança para a próxima pergunta
    currentQuestion++;
  
    // Verifica se todas as perguntas foram respondidas
    if (currentQuestion < questions.length) {
      // Exibe a próxima pergunta após um atraso de 2 segundos
      setTimeout(function () {
        displayQuestion();
        // Inicia o temporizador para a próxima pergunta
        startTimer();
      }, 2000); // Aguarda 2000 milissegundos (2 segundos)
    } else {
      // Fim do quiz, exibe o resultado final ou qualquer ação desejada
      showQuizResult();
    }
  }
  
  function showQuizResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
    // Aqui você pode fazer qualquer ação desejada ao finalizar o quiz
  }
  
  // Inicia o quiz
  displayQuestion();
  startTimer();
  