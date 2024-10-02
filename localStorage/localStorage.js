// localStorage save name

const saveBtn = document.getElementById('saveBtn');
const usernameInput = document.getElementById('username');
const greeting = document.getElementById('greeting');

saveBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    localStorage.setItem('username', username);
    displayGreeting();
});

function displayGreeting() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        greeting.textContent = `Hello, ${savedName}!`;
    }
}

window.onload = displayGreeting;

// localStorage website visit-counte

let visitCount = localStorage.getItem('visitCount');
        if (visitCount) {
            visitCount = parseInt(visitCount) + 1;
        } else {
            visitCount = 1;
        }

        localStorage.setItem('visitCount', visitCount);

        document.getElementById('visitCount').textContent = `You have visited this page ${visitCount} times.`;

// to do list

const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        window.onload = loadTasks;

        addTaskBtn.addEventListener('click', () => {
            const task = taskInput.value;
            if (task) {
                addTask(task);
                saveTask(task);
                taskInput.value = '';
            }
        });

        function addTask(task) {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => {
                li.remove();
                removeTask(task);
            };
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }

        function saveTask(task) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function removeTask(task) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(task => addTask(task));
        }

        // dark and light body

        const lightBtn = document.getElementById('lightBtn');
        const darkBtn = document.getElementById('darkBtn');

        function setTheme(theme) {
            document.body.className = theme;
            localStorage.setItem('theme', theme);
        }

        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.body.className = savedTheme;
            }
        }

        lightBtn.addEventListener('click', () => setTheme('light'));
        darkBtn.addEventListener('click', () => setTheme('dark'));

        window.onload = applySavedTheme;

        // timer

        let interval;
        let time = parseInt(localStorage.getItem('time')) || 0;
        const timerDisplay = document.getElementById('timer');

        function updateTimer() {
            timerDisplay.textContent = time;
        }

        function startTimer() {
            interval = setInterval(() => {
                time++;
                updateTimer();
                localStorage.setItem('time', time);
            }, 1000);
        }

        function stopTimer() {
            clearInterval(interval);
        }

        window.onload = updateTimer;

        document.getElementById('startBtn').addEventListener('click', startTimer);
        document.getElementById('stopBtn').addEventListener('click', stopTimer);

        // marketplace saving

        function addToCart(item) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }

        function displayCart() {
            const cartList = document.getElementById('cartList');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartList.innerHTML = '';
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = item;
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.onclick = () => removeFromCart(index);
                li.appendChild(removeBtn);
                cartList.appendChild(li);
            });
        }

        function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }

        window.onload = displayCart;

        // select language
        const languageSelector = document.getElementById('languageSelector');
        const title = document.getElementById('title');
        const description = document.getElementById('description');

        const texts = {
            en: { title: 'Welcome', description: 'Select your preferred language:' },
            ru: { title: 'Добро пожаловать', description: 'Выберите предпочитаемый язык:' },
            es: { title: 'Bienvenido', description: 'Seleccione su idioma preferido:' }
        };

        function setLanguage(lang) {
            localStorage.setItem('language', lang);
            title.textContent = texts[lang].title;
            description.textContent = texts[lang].description;
        }

        function applySavedLanguage() {
            const savedLanguage = localStorage.getItem('language') || 'en';
            setLanguage(savedLanguage);
            languageSelector.value = savedLanguage;
        }

        languageSelector.addEventListener('change', () => {
            setLanguage(languageSelector.value);
        });

        window.onload = applySavedLanguage;

        // name, email, comment
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const commentInput = document.getElementById('comment');
        const saveBtn2 = document.getElementById('saveBtn2');

        saveBtn2.addEventListener('click', () => {
            localStorage.setItem('name', nameInput.value);
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('comment', commentInput.value);
        });

        window.onload = () => {
            nameInput.value = localStorage.getItem('name') || '';
            emailInput.value = localStorage.getItem('email') || '';
            commentInput.value = localStorage.getItem('comment') || '';
        };

        // Quiz

        const correctAnswers = {
            q1: 'Paris',
            q2: 'Mars',
            q3: 'Shakespeare'
        };

        const submitBtn = document.getElementById('submitBtn');
        const resultDisplay = document.getElementById('result');

        function checkAnswers() {
            let score = 0;
            const userAnswers = {
                q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
                q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null,
                q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : null
            };

            for (let question in correctAnswers) {
                if (userAnswers[question] === correctAnswers[question]) {
                    score++;
                }
            }

            return score;
        }

        function saveResult(score) {
            localStorage.setItem('quizResult', score);
        }

        function displayResult(score) {
            resultDisplay.textContent = `You scored: ${score} out of 3`;
        }

        function loadSavedResult() {
            const savedScore = localStorage.getItem('quizResult');
            if (savedScore !== null) {
                resultDisplay.textContent = `Your previous score: ${savedScore} out of 3`;
            }
        }

        submitBtn.addEventListener('click', () => {
            const score = checkAnswers();
            saveResult(score);
            displayResult(score);
        });

        window.onload = loadSavedResult;