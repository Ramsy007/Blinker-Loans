import React, { useState, useEffect, useRef } from 'react';

const FlashOtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);
  const canvasRef = useRef(null);
  
  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    
    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };
  
  // Handle keydown for backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const inputs = Array.from(document.querySelectorAll('input'));
      inputs[index - 1].focus();
    }
  };
  
  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [timer]);
  
  // Lightning animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let lightning = [];
    let lastTime = 0;
    
    class Lightning {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.vy = Math.random() * 2 + 1;
        this.pathPoints = [];
        this.pathLimit = Math.floor(Math.random() * 5 + 3);
        this.lifeSpan = Math.floor(Math.random() * 20 + 30);
        this.timer = this.lifeSpan;
        this.color = `hsl(45, 100%, ${Math.random() * 20 + 80}%)`;
        this.width = Math.random() * 3 + 1;
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1;
        this.curve = Math.random() * 0.5 + 0.5;
      }
      
      update() {
        this.timer--;
        this.angle += this.va;
        this.x += Math.sin(this.angle) * this.curve;
        this.y += this.vy;
        
        if (this.pathPoints.length < this.pathLimit && Math.random() > 0.5) {
          this.pathPoints.push({
            x: this.x + (Math.random() * 40 - 20),
            y: this.y
          });
        }
      }
      
      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.globalAlpha = this.timer / this.lifeSpan;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        
        for (let i = 0; i < this.pathPoints.length; i++) {
          ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
        }
        
        ctx.stroke();
        ctx.closePath();
        
        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
      }
    }
    
    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1c0321');
      gradient.addColorStop(0.5, '#22031b');
      gradient.addColorStop(1, '#2a0404');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Speed force swirl
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.4;
      
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 10; i++) {
        const angle = (timestamp / 1000 + i * 0.2) % (Math.PI * 2);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
        glowGradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
        glowGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
      // Create new lightning
      if (Math.random() < 0.05) {
        lightning.push(new Lightning());
      }
      
      // Update and draw lightning
      for (let i = 0; i < lightning.length; i++) {
        lightning[i].update();
        lightning[i].draw();
        
        // Remove dead lightning
        if (lightning[i].timer <= 0 || lightning[i].y > canvas.height) {
          lightning.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      {/* Canvas for lightning effects */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Flash symbol with electric effect */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 animate-pulse">
        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-yellow-500 opacity-50"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 bg-gray-900 bg-opacity-40 p-8 rounded-lg backdrop-filter backdrop-blur-md border border-red-900 shadow-2xl w-full max-w-md mx-4">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-yellow-600/10 to-red-900/20 animate-gradient-shift"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-yellow-500 text-4xl font-bold mb-2 text-center">Enter OTP</h1>
          <p className="text-yellow-100 text-center mb-8">We have sent OTP to your number</p>
          
          {/* OTP input fields */}
          <div className="flex justify-between mb-10 gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                className="w-12 h-14 text-center text-xl font-bold bg-gray-800 text-yellow-500 rounded-lg border-2 border-yellow-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 shadow-lg shadow-red-900/30"
                type="text"
                maxLength="1"
                value={data}
                onChange={e => handleChange(e.target, index)}
                onKeyDown={e => handleKeyDown(e, index)}
                onFocus={e => e.target.select()}
              />
            ))}
          </div>
          
          {/* Submit button with electric effect */}
          <button 
            className="w-full bg-gradient-to-r from-red-700 via-yellow-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient-x"></span>
            <span className="relative z-10 text-xl">Submit</span>
          </button>
          
          {/* Resend OTP timer with electric styling */}
          <div className="mt-8 text-center">
            <button className="text-yellow-200 hover:text-yellow-400 transition-colors font-medium disabled:opacity-50" disabled={timer > 0}>
              Resend OTP
            </button>
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mt-3 border-2 border-yellow-600">
              <p className="text-yellow-500 font-bold">{formatTime(timer)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0%, 0%);
          }
          25% {
            transform: translate(3%, -3%);
          }
          50% {
            transform: translate(-3%, 3%);
          }
          75% {
            transform: translate(3%, 3%);
          }
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 2s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default FlashOtpPage;