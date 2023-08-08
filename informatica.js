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
      question: "Qual é o componente de hardware que armazena dados permanentemente em um computador?",
      options: ["Processador","Placa-mãe", "Disco rígido (HD)", "Memória RAM"],
      answer: 2 },
    {
      question: "Qual dos seguintes protocolos é usado para enviar e receber emails?",
      options: ["FTP", "SMTP", "HTTP", "TCP"],
      answer: 1 },

    {
      question: "Qual é o principal objetivo de um firewall em uma rede de computadores?",
      options: ["Melhorar a velocidade da conexão com a internet", "Proteger contra vírus e malware", " Bloquear acesso a sites de redes sociais", "Acelerar o carregamento de páginas da web"],
      answer: 1 },

      {
      question: "O que significa a sigla PDF em computação?",
      options: [" Portable Document Format ", "Personal Data File", "Program Data Folder", "  Print Document File"],
      answer: 0 },

      {
      question: "Qual dos seguintes sistemas operacionais é desenvolvido pela Apple Inc.?",
      options: ["Windows", "Linux", "macOS", " Android"],
      answer: 2 },

      {
      question: "O que é um URL?",
      options: ["Um tipo de arquivo de imagem", "Um endereço de email", "Um código de programação", "Um endereço da web"],
      answer: 3 },

      {
      question: "Qual dos seguintes tipos de memória é volátil, ou seja, perde os dados quando o computador é desligado?",
      options: ["Disco rígido (HD)", "Memória RAM", "Memória ROM", "Pen drive (USB)"],
      answer: 1 },

      {
      question: "Qual é a função do software antivírus?",
      options: ["Criar senhas seguras", "Monitorar a velocidade da internet", "Limpar arquivos temporários", "Detectar e remover malware"],
      answer: 3 },

      {
      question: "O que significa a sigla HTML em desenvolvimento web?",
      options: ["Hypertext Markup Language ", " Hyperlink and Text Markup Language", "High-Tech Multimedia Language", "Home Technology Markup Language"],
      answer: 0 },
      
      {
      question: "Qual dos seguintes dispositivos é usado para apontar e selecionar itens em uma tela de computador?",
      options: [" Teclado ", "Mouse", "Impressora", "Scanner"],
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
  