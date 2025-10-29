import React, { useRef } from 'react';
import './Dashboard.css';
import cumple from '../img/ia1.png';
import birthdayMusic from '../music/music.mp3';

const Dashboard = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.error('Autoplay bloqueado ou erro ao tocar áudio:', err);
      });
    }
  };

  return (
    <div className="dashboard-container">
      {/* Música de fundo */}
      <audio ref={audioRef} src={birthdayMusic} preload="auto" loop />

      <div className="dashboard-content">
        <img src={cumple} alt="Feliz Aniversário" className="birthday-img" />
        <h2> Parabéns, Sergio! 🎉</h2>
        <p>  Muita saúde e tudo aquilo que você desejar.
             O Brasil não é o mesmo sem
             você , sinto  muito a sua falta !Beijos e abraços!
            
             
              
            
              
              
            

            
             
            </p>
        <button className="play-button" onClick={handlePlay}>🎵 Tocar música</button>
      </div>
    </div>
  );
};

export default Dashboard;