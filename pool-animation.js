// Pool Water Animation Effects
document.addEventListener('DOMContentLoaded', function() {
    const poolWater = document.getElementById('pool-water');
    
    if (poolWater) {
        // Gentle wave animation
        poolWater.setAttribute('animation__wave', {
            property: 'rotation',
            to: '0.3 0 0.3',
            dur: 3000,
            easing: 'easeInOutSine',
            loop: true,
            dir: 'alternate'
        });

        // Subtle bobbing effect
        poolWater.setAttribute('animation__bob', {
            property: 'scale',
            to: '20 0.35 15',
            dur: 2500,
            easing: 'easeInOutQuad',
            loop: true,
            dir: 'alternate'
        });
    }

    console.log('✓ Pool animations initialized');
});