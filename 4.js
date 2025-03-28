// Sample dataset with multiple vegetables, districts, markets, and dates
const sampleData = [
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 50,
        lowPrice: 30,
        date: "2025-02-12"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 55,
        lowPrice: 32,
        date: "2025-02-13"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 40,
        lowPrice: 25,
        date: "2025-02-12"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 55,
        lowPrice: 40,
        date: "2025-02-12"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 60,
        lowPrice: 35,
        date: "2025-03-15"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 58,
        lowPrice: 34,
        date: "2025-03-16"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 50,
        lowPrice: 30,
        date: "2025-02-01"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 52,
        lowPrice: 32,
        date: "2025-02-02"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 40,
        lowPrice: 25,
        date: "2025-02-01"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 42,
        lowPrice: 26,
        date: "2025-02-02"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 55,
        lowPrice: 40,
        date: "2025-02-01"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 56,
        lowPrice: 41,
        date: "2025-02-02"
    },
    // March 2025
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 60,
        lowPrice: 35,
        date: "2025-03-01"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 62,
        lowPrice: 36,
        date: "2025-03-02"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 45,
        lowPrice: 28,
        date: "2025-03-01"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 46,
        lowPrice: 29,
        date: "2025-03-02"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 58,
        lowPrice: 42,
        date: "2025-03-01"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 59,
        lowPrice: 43,
        date: "2025-03-02"
    },
    // April 2025
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 65,
        lowPrice: 38,
        date: "2025-04-01"
    },
    {
        name: "தக்காளி",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 66,
        lowPrice: 39,
        date: "2025-04-02"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 48,
        lowPrice: 30,
        date: "2025-04-01"
    },
    {
        name: "உருளைக்கிழங்கு",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 49,
        lowPrice: 31,
        date: "2025-04-02"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 60,
        lowPrice: 45,
        date: "2025-04-01"
    },
    {
        name: "வெங்காயம்",
        district: "சேலம்",
        market: "சேலம் மார்க்கெட்",
        highPrice: 61,
        lowPrice: 46,
        date: "2025-04-02"
    },
    {
        name: "கத்தரிக்காய்",
        district: "மதுரை",
        market: "மதுரை மார்க்கெட்",
        highPrice: 45,
        lowPrice: 30,
        date: "2025-02-01"
    },
    {
        name: "கத்தரிக்காய்",
        district: "மதுரை",
        market: "மதுரை மார்க்கெட்",
        highPrice: 47,
        lowPrice: 32,
        date: "2025-02-02"
    },
    {
        name: "பீர்க்கங்காய்",
        district: "திருச்சி",
        market: "திருச்சி மார்க்கெட்",
        highPrice: 35,
        lowPrice: 20,
        date: "2025-02-01"
    },
    {
        name: "பீர்க்கங்காய்",
        district: "திருச்சி",
        market: "திருச்சி மார்க்கெட்",
        highPrice: 36,
        lowPrice: 22,
        date: "2025-02-02"
    },
    // Add more data for other vegetables
    {
        name: "முருங்கைக்காய்",
        district: "கோயம்புத்தூர்",
        market: "கோயம்புத்தூர் மார்க்கெட்",
        highPrice: 30,
        lowPrice: 15,
        date: "2025-02-01"
    },
    {
        name: "முருங்கைக்காய்",
        district: "கோயம்புத்தூர்",
        market: "கோயம்புத்தூர் மார்க்கெட்",
        highPrice: 32,
        lowPrice: 16,
        date: "2025-02-02"
    },
    // Add more data for other dates
    {
        name: "வெண்டைக்காய்",
        district: "திருநெல்வேலி",
        market: "திருநெல்வேலி மார்க்கெட்",
        highPrice: 40,
        lowPrice: 25,
        date: "2025-02-01"
    },
    {
        name: "வெண்டைக்காய்",
        district: "திருநெல்வேலி",
        market: "திருநெல்வேலி மார்க்கெட்",
        highPrice: 42,
        lowPrice: 26,
        date: "2025-02-02"
    }

];

// Function to get unique values from the dataset
function getUniqueValues(data, key) {
    return [...new Set(data.map(item => item[key]))];
}

// Populate dropdowns with unique values
function populateDropdowns() {
    const vegetables = getUniqueValues(sampleData, 'name');
    const districts = getUniqueValues(sampleData, 'district');
    const markets = getUniqueValues(sampleData, 'market');

    const vegetableSelect = document.getElementById('vegetable');
    const districtSelect = document.getElementById('district');
    const marketSelect = document.getElementById('market');

    vegetables.forEach(veg => {
        const option = document.createElement('option');
        option.value = veg;
        option.textContent = veg;
        vegetableSelect.appendChild(option);
    });

    districts.forEach(dist => {
        const option = document.createElement('option');
        option.value = dist;
        option.textContent = dist;
        districtSelect.appendChild(option);
    });

    markets.forEach(mkt => {
        const option = document.createElement('option');
        option.value = mkt;
        option.textContent = mkt;
        marketSelect.appendChild(option);
    });
}

// Function to filter data based on user inputs
function filterData(data, filters) {
    return data.filter(item => {
        const itemMonth = new Date(item.date).toLocaleString('default', { month: 'long' });
        return (
            (!filters.name || item.name === filters.name) &&
            (!filters.district || item.district === filters.district) &&
            (!filters.market || item.market === filters.market) &&
            (!filters.month || itemMonth === filters.month)
        );
    });
}

// Function to calculate monthly sales
function calculateMonthlySales(data) {
    const monthlySales = {};
    data.forEach(item => {
        const month = new Date(item.date).toLocaleString('default', { month: 'long' });
        if (!monthlySales[month]) {
            monthlySales[month] = { totalHigh: 0, totalLow: 0, count: 0 };
        }
        monthlySales[month].totalHigh += item.highPrice;
        monthlySales[month].totalLow += item.lowPrice;
        monthlySales[month].count += 1;
    });
    return monthlySales;
}

// Initialize dropdowns when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
});

// Handle form submission
document.getElementById('analysisForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('vegetable').value,
        district: document.getElementById('district').value,
        market: document.getElementById('market').value,
        month: document.getElementById('month').value
    };

    // Filter data based on user inputs
    const filteredData = filterData(sampleData, formData);

    // Calculate monthly sales
    const monthlySales = calculateMonthlySales(filteredData);

    // Display monthly sales
    const tamilMonths = {
        "January": "ஜனவரி",
        "February": "பிப்ரவரி",
        "March": "மார்ச்",
        "April": "ஏப்ரல்",
        "May": "மே",
        "June": "ஜூன்",
        "July": "ஜூலை",
        "August": "ஆகஸ்ட்",
        "September": "செப்டம்பர்",
        "October": "அக்டோபர்",
        "November": "நவம்பர்",
        "December": "டிசம்பர்"
    };
    
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = Object.keys(monthlySales).map(month => `
        <h3>${tamilMonths[month] || month}: 
            &nbsp &nbsp &nbsp &nbsp &nbsp  அதிகபட்ச விலை - ${(monthlySales[month].totalHigh / monthlySales[month].count).toFixed(2)}, 
            &nbsp&nbsp&nbsp&nbsp&nbspகுறைந்தபட்ச விலை - ${(monthlySales[month].totalLow / monthlySales[month].count).toFixed(2)}
        </h3>
    `).join('');
    

    // Display graph as a bar chart
    const ctx = document.getElementById('priceChart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy(); // Destroy previous chart instance
    }
    window.myChart = new Chart(ctx, {
        type: 'bar', // Change this to 'bar'
        data: {
            labels: filteredData.map(item => item.date),
            datasets: [
                { label: 'High Price', data: filteredData.map(item => item.highPrice), backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'red', borderWidth: 1 },
                { label: 'Low Price', data: filteredData.map(item => item.lowPrice), backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'blue', borderWidth: 1 }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('language-toggle');
    const langTextElements = document.querySelectorAll('.lang-text');

    toggleButton.addEventListener('click', function () {
        const isTamil = document.documentElement.lang === 'ta';
        document.documentElement.lang = isTamil ? 'en' : 'ta';

        langTextElements.forEach(el => {
            const currentText = el.innerText.trim();
            const englishText = el.getAttribute('data-en');
            const tamilText = el.getAttribute('data-ta');
            el.innerText = isTamil ? englishText : tamilText;
        });

        toggleButton.innerText = isTamil ? 'தமிழ்' : 'English';
    });
});