document.getElementById('mamboBtn').addEventListener('click', function() {
    const container = document.getElementById('mamboContainer');
    const sound = document.getElementById('mamboSound');
    
    // Show the mambo GIF and text
    container.classList.remove('hidden');
    
    // Play the mambo sound
    sound.currentTime = 0;
    sound.play().catch(err => console.log('Sound play failed:', err));
    
    // Hide after 3 seconds
    setTimeout(() => {
        container.classList.add('hidden');
    }, 3000);
});