import json

data = [
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "தக்காளி",
        "highprice": "18",
        "lowprice": "24",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "உருளை",
        "highprice": "30",
        "lowprice": "40",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "சின்ன வெங்காயம்",
        "highprice": "60",
        "lowprice": "80",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "மிளகாய்",
        "highprice": "36",
        "lowprice": "45",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "கத்தரிக்காய்",
        "highprice": "30",
        "lowprice": "40",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "சுரைக்காய்",
        "highprice": "20",
        "lowprice": "25",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "தேங்காய்",
        "highprice": "70",
        "lowprice": "90",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "முள்ளங்கி",
        "highprice": "25",
        "lowprice": "30",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "பீன்ஸ்",
        "highprice": "30",
        "lowprice": "40",
        "date": "2/16/25"
    },
    {
        "district": "காஞ்சிபுரம்",
        "market": "காஞ்சிபுரம்",
        "name": "வாழைப்பழம் (பழம்)",
        "highprice": "30",
        "lowprice": "60",
        "date": "2/16/25"
    }
]

for item in data:
    item['highprice'] = int(item['highprice'])  # Convert to integer
    item['lowprice'] = int(item['lowprice'])    # Convert to integer
    item['date'] = '2025-02-16'

print(json.dumps(data, indent=4, ensure_ascii=False))