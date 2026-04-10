//color code display and animation
document.addEventListener('DOMContentLoaded', function() {
    
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Create a paragraph to display the color code
    const colorCodeDisplay = document.createElement('p');
    colorCodeDisplay.style.marginTop = '10px';
    colorCodeDisplay.style.fontFamily = 'monospace';
    colorCodeDisplay.style.fontSize = '14px';
    colorCodeDisplay.style.fontWeight = 'bold';
    colorBox.parentNode.insertBefore(colorCodeDisplay, colorBox.nextSibling);
    
    // Function to generate random hexadecimal color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Function to get complementary color for text
    function getComplementaryColor(hex) {
        // Simple complementary color calculation
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#000000' : '#ffffff';
    }
    
    // Add click event listener
    changeColorBtn.addEventListener('click', function() {
        // Generate random color
        const randomColor = getRandomColor();
        
        // Change background color
        colorBox.style.backgroundColor = randomColor;
        
        // Display color code
        colorCodeDisplay.textContent = `Current Color: ${randomColor}`;
        colorCodeDisplay.style.color = randomColor;
        
        // Optional: Add a subtle animation
        colorBox.style.transform = 'scale(0.98)';
        setTimeout(() => {
            colorBox.style.transform = 'scale(1)';
        }, 200);
        
        // Console log for debugging
        console.log(`Color changed to: ${randomColor} at ${new Date().toLocaleTimeString()}`);
    });
});