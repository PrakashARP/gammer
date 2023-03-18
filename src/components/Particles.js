import Particles from 'particlesjs';
import { useEffect } from 'react';

function ParticleAnimation() {

    useEffect(() => {
      Particles.init({
        selector: '.background',
        color: '#ffffff',
        connectParticles: true,
        sizeVariations: 5,
        maxParticles: 100,
        speed: 0.5
      });
    }, []);
  
    return (
      <div className="background"></div>
    );
  }
  
  export default ParticleAnimation;
  