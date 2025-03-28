document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
    const resultsDiv = document.getElementById('results');
    const vegetableSelect = document.getElementById('vegetable-select');
    const districtSelect = document.getElementById('district-select');
    const marketSelect = document.getElementById('market-select');
    const dateInput = document.getElementById('date-input'); // Date input field
    const vegetableBtn = document.getElementById('vegetable-btn');
    const districtBtn = document.getElementById('district-btn');
    const marketBtn = document.getElementById('market-btn');
    const dateBtn = document.getElementById('date-btn'); // Voice input button for date
    let selectedVegetable = '';
    let selectedDistrict = '';
    let selectedMarket = '';
    let selectedDate = ''; // Variable to store the selected date

    // Set the default date to the current date when the page loads
    function setDefaultDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        selectedDate = `${year}-${month}-${day}`;
        dateInput.value = selectedDate; // Set the default date in the input field
    }

    // Call the function to set the default date when the page loads
    setDefaultDate();

    // Language toggle functionality
    document.getElementById('language-toggle').addEventListener('click', function () {
        const isTamil = document.documentElement.lang === 'ta';
        document.documentElement.lang = isTamil ? 'en' : 'ta';

        document.querySelectorAll('[data-en]').forEach(el => {
            const currentText = el.innerText.trim();
            const englishText = el.getAttribute('data-en');
            el.innerText = isTamil ? englishText : el.getAttribute('data-ta') || currentText;
            if (!el.hasAttribute('data-ta')) {
                el.setAttribute('data-ta', currentText);
            }
        });

        this.innerText = isTamil ? 'தமிழ்' : 'English';
    });

    // Highlight active navigation link
    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Get the current page
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active'); // Add the 'active' class to the current link
            }
        });
    });

    // Mapping of Tamil vegetable names to image filenames
    // height: 110 px width: 110 px
    const vegetableImageMap = {
        "தக்காளி": "tomoto.png",
        "உருளைக்கிழங்கு": "potato.jpg",
        "வெண்டை": "ladies_finger.jpg",
        "கேரட்": "carrot1.jpg",
        // Add more mappings as needed  
    };
    const subCities = {
        "காஞ்சிபுரம்": ["காஞ்சிபுரம்","படப்பை", "சுங்குவார்ச்சத்திரம்", "குன்றத்தூர்"],
        "சென்னை": ["அடையார்", "கோடம்பாக்கம்", "திருவான்மியூர்"],
        // Add more districts and their subcities
    };

    // Function to speak text
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ta-IN';
        speechSynthesis.speak(utterance);
    }

    // Function to fetch vegetable data from the API
    async function fetchVegetableData() {
        try {
            const response = await fetch(
                `http://localhost:5000/api/search?district=${encodeURIComponent(selectedDistrict)}&market=${encodeURIComponent(selectedMarket)}&name=${encodeURIComponent(selectedVegetable)}&date=${encodeURIComponent(selectedDate)}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

 

    // Function to display results in a table
    function displayResults(data) {
        const filteredData = data.filter(item => {
            return item.district === selectedDistrict &&
                item.market === selectedMarket &&
                item.name === selectedVegetable &&
                item.date === selectedDate;
        });

        if (filteredData.length === 0) {
            // resultsDiv.innerHTML = '<p>முடிவுகள் இல்லை.</p>';
            speak("முடிவுகள் இல்லை.");
            return false;
        }

        let table = '<table>';
        table += '<thead><tr><th>காய்கறி</th><th>தேதி</th><th>மாவட்டம்</th><th>மார்க்கெட்</th><th>அதிக விலை</th><th>குறைந்த விலை</th></tr></thead>';
        table += '<tbody>';

        filteredData.forEach(item => {
            const imageFilename = vegetableImageMap[item.name] || "default.jpg";
            const imageUrl = `images/${imageFilename}`;

            table += `
                <tr>
                    <td class="imd">
                        <img src="${imageUrl}" alt="${item.name}" onerror="this.src='images/default.jpg'">
                        <span class="name1">${item.name}</span>
                    </td>
                    <td>${item.date}</td>
                    <td>${item.district}</td>
                    <td>${item.market}</td>
                    <td>₹${item.highprice}</td>
                    <td>₹${item.lowprice}</td>  
                </tr>
            `;
        });

        table += '</tbody></table>';
        resultsDiv.innerHTML = table;

        const firstItem = filteredData[0];
        const speechText = `
            ${firstItem.name}, 
            மாவட்டம் ${firstItem.district}, 
            மார்க்கெட் ${firstItem.market}, 
            அதிக விலை ₹${firstItem.highprice}, 
            குறைந்த விலை ₹${firstItem.lowprice},
            தேதி ${firstItem.date}
        `;
        speak(speechText);
        return true;
    }

    // Function to handle voice input
    function handleVoiceInput(type) {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'ta-IN';

            recognition.onresult = async function (event) {
                const transcript = event.results[0][0].transcript.trim();

                if (type === 'vegetable') {
                    selectedVegetable = transcript;
                    vegetableSelect.value = transcript;
                } else if (type === 'district') {
                    selectedDistrict = transcript;
                    districtSelect.value = transcript;
                    populateMarketSelect(selectedDistrict); // Update market options based on the selected district
                } else if (type === 'market') {
                    selectedMarket = transcript;
                    marketSelect.value = transcript;
                } else if (type === 'date') {
                    selectedDate = convertTamilDateToISO(transcript);
                    dateInput.value = selectedDate;
                }
                speakText(transcript);

                if (selectedVegetable && selectedDistrict && selectedMarket && selectedDate) {
                    const data = await fetchVegetableData();
                    if (data.length > 0) {
                        const resultsFound = displayResults(data);
                        submitBtn.click();
                        if (!resultsFound) {
                            alert("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                            speak("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                        }
                    } else {
                        alert("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                        speak("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                        // resultsDiv.innerHTML = '<p>முடிவுகள் இல்லை.</p>';
                    }
                }
            };

            recognition.start();
        } else {
            alert("இந்த உலாவியில் பேச்சு அங்கீகாரம் ஆதரிக்கப்படவில்லை.");
        }
    }

    // Function to convert Tamil date to ISO format
    function convertTamilDateToISO(tamilDate) {
        return tamilDate.replace(/[^0-9-]/g, '');
    }

    // Event listeners for dropdown changes
    vegetableSelect.addEventListener('change', (event) => {
        selectedVegetable = event.target.value;
        resultsDiv.innerHTML = '';
    });

    districtSelect.addEventListener('change', (event) => {
        selectedDistrict = event.target.value;
        populateMarketSelect(selectedDistrict); // Update market options based on the selected district
        resultsDiv.innerHTML = '';
    });

    marketSelect.addEventListener('change', (event) => {
        selectedMarket = event.target.value;
        resultsDiv.innerHTML = '';
    });

    dateInput.addEventListener('change', (event) => {
        selectedDate = event.target.value;
        resultsDiv.innerHTML = '';
    });

    function startSpeechRecognition(inputField) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "ta-IN";
        recognition.start();
        recognition.onresult = function (event) {
            inputField.value = event.results[0][0].transcript;
            speakText(inputField.value); // Speak the recognized text
        };
    }

    // Function to speak text
    function speakText(text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "ta-IN";  // Set language to Tamil
        window.speechSynthesis.speak(speech);
    }

    // Function to populate market select based on the selected district
    function populateMarketSelect(district) {
        // Clear existing options except the default one
        while (marketSelect.options.length > 1) {
            marketSelect.remove(1);
        }

        // Add new options based on the selected district
        if (subCities[district]) {
            subCities[district].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.text = city;
                marketSelect.appendChild(option);
            });
        }
    }

    // Initial population of market select
    populateMarketSelect(districtSelect.value);

    // Event listener for submit button
    submitBtn.addEventListener('click', async () => {
        if (selectedVegetable && selectedDistrict && selectedMarket && selectedDate) {
            const data = await fetchVegetableData();
            if (data.length > 0) {
                const resultsFound = displayResults(data);
                if (!resultsFound) {
                    alert("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                    speak("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                }
            } else {
                alert("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                speak("தேர்ந்தெடுக்கப்பட்டவற்றுடன் பொருந்தும் முடிவுகள் இல்லை.");
                resultsDiv.innerHTML = '<p></p>';
            }
        } else {
            alert("தயவு செய்து அனைத்து தேர்வுகளையும் செய்யவும்.");
            speak("தயவு செய்து அனைத்து தேர்வுகளையும் செய்யவும்.");
        }
    });

    // Attach event listeners for speech recognition
    vegetableBtn.addEventListener('click', () => handleVoiceInput('vegetable'));
    districtBtn.addEventListener('click', () => handleVoiceInput('district'));
    marketBtn.addEventListener('click', () => handleVoiceInput('market'));
    dateBtn.addEventListener('click', () => handleVoiceInput('date'));

    // Event listeners for speaking the selected input (when changed)
    document.getElementById('vegetable-select').addEventListener('change', function () {
        speakText(this.value);
    });
    document.getElementById('district-select').addEventListener('change', function () {
        speakText(this.value);
    });
    document.getElementById('market-select').addEventListener('change', function () {
        speakText(this.value);
    });
    document.getElementById('date-input').addEventListener('change', function () {
        speakText(this.value);
    });

    // Function to handle date voice input
    function handleDateVoiceInput() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'ta-IN';

            // Provide instructions to the user
            // speak("தேதி");

            recognition.onresult = function (event) {
                const transcript = event.results[0][0].transcript.trim();
                const formattedDate = parseDateInput(transcript); // Convert spoken date to YYYY-MM-DD format

                if (formattedDate) {
                    dateInput.value = formattedDate;
                    speak(`தேர்ந்தெடுக்கப்பட்ட தேதி: ${formattedDate}`);
                } else {
                    alert("தவறான தேதி தேர்வு. தயவு செய்து மீண்டும் முயற்சிக்கவும்.");
                    speak("தவறான தேதி தேர்வு. தயவு செய்து மீண்டும் முயற்சிக்கவும்.");
                }
            };

            recognition.onerror = function (event) {
                alert("பேச்சு அங்கீகாரம் தோல்வியடைந்தது. தயவு செய்து மீண்டும் முயற்சிக்கவும்.");
                speak("பேச்சு அங்கீகாரம் தோல்வியடைந்தது. தயவு செய்து மீண்டும் முயற்சிக்கவும்.");
            };

            recognition.start();
        } else {
            alert("இந்த உலாவியில் பேச்சு அங்கீகாரம் ஆதரிக்கப்படவில்லை.");
            speak("இந்த உலாவியில் பேச்சு அங்கீகாரம் ஆதரிக்கப்படவில்லை.");
        }
    }

    // Function to parse spoken date input
    function parseDateInput(input) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        // Handle special cases like "இன்று" (today) or "நாளை" (tomorrow)
        if (input.includes("இன்று")) {
            return `${year}-${month}-${day}`; // Today's date
        } else if (input.includes("நேற்று")) {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1); // Subtract 1 day from today's date
            return `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`; // Yesterday's date
        } else if (input.match(/\d{4}-\d{2}-\d{2}/)) {
            // If the input is already in YYYY-MM-DD format
            return input;
        } else {
            return null; // Invalid date format
        }
    }

    // Event listener for date voice input button
    dateBtn.addEventListener('click', handleDateVoiceInput);
});
