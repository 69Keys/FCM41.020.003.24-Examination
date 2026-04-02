// User Interactions and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const rig = document.getElementById('rig');
    
    // Keyboard movement enhancement
    document.addEventListener('keydown', function(event) {
        const moveDistance = 0.2;
        
        switch(event.key.toLowerCase()) {
            case 'q':
                rig.object3D.position.y += moveDistance; // Move up
                break;
            case 'e':
                rig.object3D.position.y -= moveDistance; // Move down
                break;
        }
    });

    // Room information
    const roomMessages = {
        'living-room': '🛋️ Welcome to the Living Room! Enjoy the modern sofas and sports car display.',
        'bedroom': '���️ You are in the Bedroom. Relax on the comfortable bed.',
        'kitchen': '🍳 Welcome to the Kitchen. Check out the modern cabinets and counter.',
        'pool': '🏊 Enjoy the beautiful swimming pool with animated water!'
    };

    console.log('✓ Interaction system loaded');
    console.log('✓ Use WASD to explore the villa!');
    console.log('✓ Press Q to go up, E to go down');
});