//QUESTIONAIRE///

const quizzes = {
  'data-representation': [
      { question: "What is the binary equivalent of the decimal number 58?", options: ["110010", "111010", "111000"], answer: "111010" },
      { question: "How do you convert the hexadecimal number 2F to binary?", options: ["00101111", "00111111", "11101111"], answer: "00101111" },
      { question: "What is the purpose of hexadecimal numbers in computing?", options: ["For representing colors", "For representing memory addresses", "For representing machine code"], answer: "For representing memory addresses" },
      { question: "How do you perform binary addition for the numbers 1011 and 1101?", options: ["10010", "11000", "11110"], answer: "11000" },
      { question: "What does a left shift operation do in binary arithmetic?", options: ["Divides the number by 2", "Multiplies the number by 2", "Adds 2 to the number"], answer: "Multiplies the number by 2" },
      { question: "What is the two's complement representation of -7 in an 8-bit system?", options: ["11111001", "11111111", "11111000"], answer: "11111001" },
      { question: "How do you convert a binary number 101011 to decimal?", options: ["43", "45", "41"], answer: "43" },
      { question: "What is the purpose of using binary in computers?", options: ["To use less storage", "To make processing faster", "Because computers operate with two states"], answer: "Because computers operate with two states" },
      { question: "How is data represented in ASCII and how does it differ from Unicode?", options: ["ASCII uses 7 bits, Unicode uses more bits", "ASCII uses 8 bits, Unicode uses 16 bits", "ASCII uses 7 bits, Unicode uses 8 bits"], answer: "ASCII uses 7 bits, Unicode uses more bits" },
      { question: "What is the hexadecimal representation of the binary number 11010011?", options: ["0xD3", "0xB3", "0xF3"], answer: "0xD3" }
      ],
      'data-transmission': [
      { question: "What is packet switching and why is it used in networks?", options: ["Breaks data into packets for efficiency", "Combines data into large packets", "Sends data sequentially"], answer: "Breaks data into packets for efficiency" },
      { question: "What are the differences between simplex, half-duplex, and full-duplex communication?", options: ["Simplex is one-way, half-duplex is two-way but not simultaneous, full-duplex is simultaneous two-way", "Simplex is two-way, half-duplex is one-way, full-duplex is one-way", "Simplex is simultaneous two-way, half-duplex is one-way, full-duplex is two-way"], answer: "Simplex is one-way, half-duplex is two-way but not simultaneous, full-duplex is simultaneous two-way" },
      { question: "What is the purpose of a checksum in data transmission?", options: ["To detect errors", "To verify data integrity", "Both"], answer: "Both" },
      { question: "How does a router function in a network?", options: ["Directs data packets between networks", "Combines data packets", "Sends data sequentially"], answer: "Directs data packets between networks" },
      { question: "What is the role of a network interface card (NIC)?", options: ["To allow a computer to connect to a network", "To store data packets", "To encrypt data"], answer: "To allow a computer to connect to a network" },
      { question: "What is the difference between serial and parallel data transmission?", options: ["Serial sends one bit at a time, parallel sends multiple bits simultaneously", "Serial sends multiple bits simultaneously, parallel sends one bit at a time", "Serial is faster than parallel"], answer: "Serial sends one bit at a time, parallel sends multiple bits simultaneously" },
      { question: "What is an automatic repeat request (ARQ)?", options: ["A protocol that involves retransmitting data if errors are detected", "A protocol that involves combining data packets", "A protocol that involves sending data sequentially"], answer: "A protocol that involves retransmitting data if errors are detected" },
      { question: "How does error detection using parity work?", options: ["Adds an extra bit to ensure the number of 1s is odd or even", "Adds an extra byte to ensure the data is correct", "Combines data packets to verify integrity"], answer: "Adds an extra bit to ensure the number of 1s is odd or even" },
      { question: "What is the purpose of encryption in data transmission?", options: ["To protect data confidentiality", "To verify data integrity", "To detect errors"], answer: "To protect data confidentiality" },
      { question: "What are the main types of data transmission modes?", options: ["Simplex, half-duplex, full-duplex", "Serial, parallel, hybrid", "Single, multiple, hybrid"], answer: "Simplex, half-duplex, full-duplex" }
      ],
  'hardware': [
    { question: "What does a CPU do?", options: ["Performs calculations and processes data", "Stores data permanently", "Manages network connections"], answer: "Performs calculations and processes data" },
    { question: "What is the role of RAM in a computer system?", options: ["Provides temporary storage for currently running programs", "Stores data permanently", "Controls the computer's input and output devices"], answer: "Provides temporary storage for currently running programs" },
    { question: "What is the function of a motherboard?", options: ["Connects and allows communication between various hardware components", "Processes data", "Provides temporary storage"], answer: "Connects and allows communication between various hardware components" },
    { question: "How does clock speed affect computer performance?", options: ["Higher clock speed generally increases performance", "Lower clock speed generally increases performance", "Clock speed has no effect on performance"], answer: "Higher clock speed generally increases performance" },
    { question: "What role do buses play in computer hardware?", options: ["They transmit data between components", "They store data", "They execute instructions"], answer: "They transmit data between components" },
    { question: "What is the function of the control unit (CU) in the CPU?", options: ["Directs the operation of the processor", "Performs arithmetic operations", "Stores data temporarily"], answer: "Directs the operation of the processor" },
    { question: "What is a GPU and how does it differ from a CPU?", options: ["A GPU is specialized for rendering graphics, while a CPU handles general computing tasks", "A GPU is used for general computing, while a CPU renders graphics", "A GPU and CPU perform the same functions"], answer: "A GPU is specialized for rendering graphics, while a CPU handles general computing tasks" }
  ],
  'software': [
    { question: "What is the main purpose of an operating system?", options: ["To manage hardware resources and provide a user interface", "To process data", "To store data"], answer: "To manage hardware resources and provide a user interface" },
    { question: "What is the difference between system software and application software?", options: ["System software manages hardware and provides a platform for applications, while application software performs specific tasks for users", "System software performs specific tasks for users, while application software manages hardware", "Both perform the same functions"], answer: "System software manages hardware and provides a platform for applications, while application software performs specific tasks for users" },
    { question: "What is an example of utility software?", options: ["Antivirus programs", "Word processors", "Web browsers"], answer: "Antivirus programs" },
    { question: "How do programming languages differ from machine languages?", options: ["Programming languages are human-readable and abstract, machine languages are binary and executed by the CPU", "Programming languages are binary and executed by the CPU, machine languages are human-readable", "Both are the same"], answer: "Programming languages are human-readable and abstract, machine languages are binary and executed by the CPU" },
    { question: "What is the function of a compiler in software development?", options: ["Translates high-level code into machine code", "Executes machine code directly", "Interprets high-level code line-by-line"], answer: "Translates high-level code into machine code" },
    { question: "What is an IDE and why is it useful for software development?", options: ["An Integrated Development Environment that provides tools and features for coding, debugging, and testing", "An Interpreter that executes code directly", "A database management system"], answer: "An Integrated Development Environment that provides tools and features for coding, debugging, and testing" },
    { question: "What is version control and why is it important?", options: ["Manages changes to source code and enables collaboration", "Encrypts data for security", "Performs debugging of code"], answer: "Manages changes to source code and enables collaboration" },
    { question: "How does object-oriented programming differ from procedural programming?", options: ["Object-oriented programming uses objects and classes, while procedural programming uses procedures and functions", "Object-oriented programming uses procedures and functions, while procedural programming uses objects and classes", "Both are the same"], answer: "Object-oriented programming uses objects and classes, while procedural programming uses procedures and functions" },
    { question: "What is the purpose of software testing?", options: ["To identify and fix bugs and ensure software functionality", "To write code", "To design user interfaces"], answer: "To identify and fix bugs and ensure software functionality" },
    { question: "What is an API and how is it used in software development?", options: ["An Application Programming Interface that allows different software systems to communicate and interact", "A program that executes code", "A tool for designing user interfaces"], answer: "An Application Programming Interface that allows different software systems to communicate and interact" }
  ],
  'internet': [
    { question: "What is the primary purpose of the Domain Name System (DNS)?", options: ["Translates domain names into IP addresses", "Encrypts data transmitted over the internet", "Manages network traffic"], answer: "Translates domain names into IP addresses" },
    { question: "What are the main components of a URL?", options: ["Protocol, domain, path, query parameters", "Protocol, IP address, port", "Domain, port, path"], answer: "Protocol, domain, path, query parameters" },
    { question: "How does HTTPS differ from HTTP?", options: ["HTTPS includes encryption for secure communication, while HTTP does not", "HTTPS is faster than HTTP", "HTTPS is used for email"], answer: "HTTPS includes encryption for secure communication, while HTTP does not" },
    { question: "What is a cookie and what is it used for?", options: ["A small piece of data stored by the browser to remember user preferences and sessions", "A type of virus", "A method of encrypting data"], answer: "A small piece of data stored by the browser to remember user preferences and sessions" },
    { question: "What is the role of an IP address in networking?", options: ["Identifies a device on a network", "Encrypts data transmitted over the network", "Manages network traffic"], answer: "Identifies a device on a network" },
    { question: "What does the term 'bandwidth' refer to in internet connections?", options: ["The maximum data transfer rate of a network connection", "The physical size of a network cable", "The distance between network devices"], answer: "The maximum data transfer rate of a network connection" },
    { question: "What is the function of a firewall in network security?", options: ["Monitors and controls incoming and outgoing network traffic based on security rules", "Encrypts data transmitted over the network", "Stores user data"], answer: "Monitors and controls incoming and outgoing network traffic based on security rules" },
    { question: "What is a VPN and how does it enhance internet security?", options: ["A Virtual Private Network that encrypts internet traffic and hides the user's IP address", "A type of virus scanner", "A network switch"], answer: "A Virtual Private Network that encrypts internet traffic and hides the user's IP address" }
  ],
  'emerging-technologies': [
    { question: "What is artificial intelligence (AI) and how is it applied in various fields?", options: ["AI involves creating systems that can perform tasks that typically require human intelligence, such as machine learning and natural language processing", "AI is only used in robotics", "AI is a type of database management system"], answer: "AI involves creating systems that can perform tasks that typically require human intelligence, such as machine learning and natural language processing" },
    { question: "How does blockchain technology work and what are its main use cases?", options: ["Blockchain is a decentralized ledger that records transactions across many computers, commonly used in cryptocurrencies and secure data storage", "Blockchain is a type of database", "Blockchain is used only for digital payments"], answer: "Blockchain is a decentralized ledger that records transactions across many computers, commonly used in cryptocurrencies and secure data storage" },
    { question: "What are the key benefits and challenges of using cloud computing?", options: ["Benefits include scalability and cost-efficiency, challenges include data security and privacy", "Benefits include lower hardware costs, challenges include higher software costs", "Benefits and challenges are the same as traditional computing"], answer: "Benefits include scalability and cost-efficiency, challenges include data security and privacy" },
    { question: "How does the Internet of Things (IoT) impact daily life and industry?", options: ["IoT connects everyday devices to the internet, enabling remote control and data collection", "IoT is only used in industrial settings", "IoT is the same as traditional networking"], answer: "IoT connects everyday devices to the internet, enabling remote control and data collection" },
    { question: "What is quantum computing and how does it differ from classical computing?", options: ["Quantum computing uses quantum bits (qubits) and can perform complex calculations much faster than classical computing, which uses binary bits", "Quantum computing is slower than classical computing", "Quantum computing uses the same principles as classical computing"], answer: "Quantum computing uses quantum bits (qubits) and can perform complex calculations much faster than classical computing, which uses binary bits" },
    { question: "What are some potential applications of augmented reality (AR) and virtual reality (VR)?", options: ["AR enhances the real world with digital information, VR creates immersive virtual environments, both are used in gaming, training, and education", "AR and VR are only used in entertainment", "AR and VR are the same"], answer: "AR enhances the real world with digital information, VR creates immersive virtual environments, both are used in gaming, training, and education" },
    { question: "How do autonomous vehicles use technology to navigate and make decisions?", options: ["Autonomous vehicles use sensors, cameras, and AI algorithms to perceive their environment and make driving decisions", "Autonomous vehicles only use GPS", "Autonomous vehicles are manually controlled by drivers"], answer: "Autonomous vehicles use sensors, cameras, and AI algorithms to perceive their environment and make driving decisions" },
    { question: "What is 5G technology and how does it differ from previous generations of mobile networks?", options: ["5G offers faster data speeds, lower latency, and increased capacity compared to previous generations", "5G is slower than 4G", "5G is the same as 4G"], answer: "5G offers faster data speeds, lower latency, and increased capacity compared to previous generations" },
    { question: "What role does biotechnology play in modern medicine?", options: ["Biotechnology involves using biological processes and organisms to develop new treatments and technologies for healthcare", "Biotechnology is used only in agriculture", "Biotechnology is the same as traditional medicine"], answer: "Biotechnology involves using biological processes and organisms to develop new treatments and technologies for healthcare" },
    { question: "What are some ethical considerations associated with emerging technologies?", options: ["Privacy concerns, potential job displacement, and ethical use of AI and data", "Cost of technology", "Availability of technology"], answer: "Privacy concerns, potential job displacement, and ethical use of AI and data" }
  ]
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let startTime = null;
let timerInterval = null;

function startQuiz(topic) {
  currentQuiz = quizzes[topic];
  if (!currentQuiz || currentQuiz.length === 0) {
      alert("No questions available for this topic.");
      return;
  }

  currentQuestionIndex = 0;
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('results-container').innerHTML = '';

  showQuestion(currentQuestionIndex);

  // Start timer
  startTime = new Date();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function showQuestion(index) {
  if (index >= currentQuiz.length) {
      submitQuiz();
      return;
  }

  const question = currentQuiz[index];
  document.getElementById('question').textContent = question.question;
  document.getElementById('options').innerHTML = question.options
      .map(option => `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`)
      .join('<br>');

  // Show or hide the 'Next' button
  document.getElementById('next').style.display = index === currentQuiz.length - 1 ? 'none' : 'inline-block';
  document.getElementById('submit').style.display = index === currentQuiz.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuiz.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
  } else {
      submitQuiz();
  }
}

function submitQuiz() {
  if (timerInterval) clearInterval(timerInterval);

  const resultsHTML = getResults();
  document.getElementById('results-container').innerHTML = resultsHTML;

  // Hide quiz section
  document.getElementById('quiz-section').style.display = 'none';
}

function getResults() {
  let correctAnswers = 0;
  let resultsHTML = '';

  currentQuiz.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === q.answer) {
          correctAnswers++;
          resultsHTML += `<p>Question ${index + 1}: Correct</p>`;
      } else {
          resultsHTML += `<p>Question ${index + 1}: Incorrect (Correct answer: ${q.answer})</p>`;
      }
  });

  resultsHTML += `<h3>Total Correct: ${correctAnswers} out of ${currentQuiz.length}</h3>`;
  return resultsHTML;
}

function updateTimer() {
  const now = new Date();
  const elapsed = now - startTime;

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  document.getElementById('timeTaken').textContent = `${minutes}:${displaySeconds.toString().padStart(2, '0')}`;
}





//timer//
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');   


const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');   


const startBtn = document.getElementById('start-btn');   

const stopPauseBtn = document.getElementById('stop-pause-btn');
const resetBtn = document.getElementById('reset-btn');

let timerId;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

function updateTimerDisplay() {
  hoursDisplay.textContent = String(hours).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function   
 startTimer() {
  if (isPaused) {
    timerId = setInterval(tick, 1000);
    isPaused = false;
    return;
  }

  try {
    hours = parseInt(hoursInput.value, 10) || 0;
    minutes = parseInt(minutesInput.value, 10) || 0;
    seconds = parseInt(secondsInput.value, 10) || 0;
  } catch (error) {
    console.error('Invalid input:', error);
    alert('Please enter valid numbers for hours, minutes, and seconds.');
    return;
  }

  if (hours > 48 || minutes > 59 || seconds > 59) {
    alert('Invalid time input');
    return;
  }

  timerId = setInterval(tick, 1000);
}

function stopPauseTimer() {
  if (timerId) {
    clearInterval(timerId);
    isPaused = true;
  } else {
    startTimer();
  }
}

function resetTimer() {
  clearInterval(timerId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  isPaused = false;
}

function tick() {
  if (seconds === 0) {
    seconds = 59;
    if (minutes === 0) {
      minutes = 59;
      hours--;
    } else {
      minutes--;
    }
  } else {
    seconds--;
  }

  if (hours < 0) {
    clearInterval(timerId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
    // Handle timer completion (e.g., notification, alert)
  }

  updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
stopPauseBtn.addEventListener('click', stopPauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();


//open pdf's//
document.getElementById('pdfLink').addEventListener('click', function(event) {
  event.preventDefault();
  const fileURL = 'path/to/your/sample.pdf';
  window.open(fileURL, '_blank');
});
