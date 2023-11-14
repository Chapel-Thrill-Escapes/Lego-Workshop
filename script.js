document.getElementById('spinButton').addEventListener('click', function() {
    var result = getWeightedResult();
    var displayText = '';

    switch(result) {
        case 1:
            displayText = 'Builder';
            break;
        case 2:
            displayText = 'Representative';
            break;
        case 3:
            displayText = 'Distorter';
            break;
    }

    document.getElementById('result').innerText = displayText;
});

function getWeightedResult() {
    var weights = {
        1: 45, // Builder
        2: 35, // Representative
        3: 20  // Distorter
    };

    var totalWeight = 100; // Sum of the weights (45 + 35 + 20)
    var random = Math.random() * totalWeight;
    var weightSum = 0;

    for (var i in weights) {
        weightSum += weights[i];
        if (random <= weightSum) {
            return parseInt(i);
        }
    }
}
