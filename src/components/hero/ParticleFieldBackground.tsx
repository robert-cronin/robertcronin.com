// Copyright 2024 Robert Cronin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useRef, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  fadeIn: boolean;
  fadeOut: boolean;
}

const PARTICLE_COUNT = 500;
const PARTICLE_RADIUS = 2;
const REPULSION_STRENGTH = 300;
const REPULSION_RADIUS = 100;
const MAX_SPEED = 0.5;
const MIN_SPEED = 0.1;
const FADE_SPEED = 0.01;
const PARTICLE_REGEN_INTERVAL = 500; // milliseconds
const RESET_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

const ParticleFieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgColor = useColorModeValue("#f7f7f7", "#4b4b4b");
  const particleColor = useColorModeValue(
    "rgb(75, 75, 75)",
    "rgb(247, 247, 247)"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let animationFrameId: number;
    let regenerationInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };

    const createParticle = (fadeIn: boolean = true): Particle => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: PARTICLE_RADIUS,
        opacity: fadeIn ? 0 : 1,
        fadeIn,
        fadeOut: false,
      };
    };

    const initializeParticles = () => {
      particles = Array(PARTICLE_COUNT)
        .fill(null)
        .map(() => createParticle(false));
    };

    const applyRepulsion = (particle: Particle) => {
      const dx = particle.x - mouseX;
      const dy = particle.y - mouseY;
      const distSq = dx * dx + dy * dy;

      if (distSq < REPULSION_RADIUS * REPULSION_RADIUS) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
        particle.vx += ((dx / dist) * force) / 1000;
        particle.vy += ((dy / dist) * force) / 1000;
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Wrap around screen
      particle.x = (particle.x + canvas.width) % canvas.width;
      particle.y = (particle.y + canvas.height) % canvas.height;

      // Ensure minimum speed
      const speed = Math.sqrt(
        particle.vx * particle.vx + particle.vy * particle.vy
      );
      if (speed < MIN_SPEED) {
        const scale = MIN_SPEED / speed;
        particle.vx *= scale;
        particle.vy *= scale;
      }

      // Limit maximum speed
      if (speed > MAX_SPEED) {
        const scale = MAX_SPEED / speed;
        particle.vx *= scale;
        particle.vy *= scale;
      }

      // Handle fading
      if (particle.fadeIn) {
        particle.opacity = Math.min(particle.opacity + FADE_SPEED, 1);
        if (particle.opacity >= 1) {
          particle.fadeIn = false;
          particle.opacity = 1;
        }
      } else if (particle.fadeOut) {
        particle.opacity = Math.max(particle.opacity - FADE_SPEED, 0);
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${particleColor.slice(0, -4)}, ${
        particle.opacity * 0.5
      })`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(
        (particle) => particle.opacity > 0 || particle.fadeIn
      );

      particles.forEach((particle) => {
        applyRepulsion(particle);
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const regenerateParticles = () => {
      const particlesToRemove = Math.floor(Math.random() * 5) + 3;
      const particlesToAdd = Math.floor(Math.random() * 5) + 3;

      // Mark random particles for removal
      for (let i = 0; i < particlesToRemove; i++) {
        const index = Math.floor(Math.random() * particles.length);
        if (!particles[index].fadeOut && !particles[index].fadeIn) {
          particles[index].fadeOut = true;
        }
      }

      // Add new particles
      for (let i = 0; i < particlesToAdd; i++) {
        particles.push(createParticle(true));
      }
    };

    const resetAnimation = () => {
      // Fade out all existing particles
      particles.forEach((particle) => {
        particle.fadeOut = true;
        particle.fadeIn = false;
      });

      // After all particles have faded out, reinitialize
      setTimeout(() => {
        initializeParticles();
      }, 1000 / FADE_SPEED);

      // Reset the timeout
      resetTimeout = setTimeout(resetAnimation, RESET_INTERVAL);
    };

    const startAnimation = () => {
      resizeCanvas();
      animate();
      regenerationInterval = setInterval(
        regenerateParticles,
        PARTICLE_REGEN_INTERVAL
      );
      resetTimeout = setTimeout(resetAnimation, RESET_INTERVAL);
    };

    startAnimation();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(regenerationInterval);
      clearTimeout(resetTimeout);
    };
  }, [bgColor, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: bgColor,
      }}
    />
  );
};

export default ParticleFieldBackground;
