import React from 'react';
import '../assets/styles/About.css';
import { Card, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import Profile from "@/assets/img/profile.jpg";
import KidsTherapy from "@/assets/img/kids-therapy.jpg";

const carouselImages = [
  Profile,
  "https://placehold.co/600x400/E4D6D6/333333?text=Espacio+Seguro",
  KidsTherapy,
  "https://placehold.co/600x400/D6E4D8/333333?text=Terapia+con+Niños",
  "https://placehold.co/600x400/D6D6E4/333333?text=Talleres+Grupales",
  "https://placehold.co/600x400/E4E4D6/333333?text=Crecimiento+Personal",
  "https://placehold.co/600x400/D6E0E4/333333?text=Bienestar+Integral"
];

const ImageCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {carouselImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="carousel-card">
                <CardContent className="flex items-center justify-center p-0 overflow-hidden rounded-lg h-full">
                   <img src={src} alt={`Carousel image ${index + 1}`} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const About = () => {
  return (
    <div className='layout-content'>
      <div className='left-side'>
        <ImageCarousel />
      </div>
      <div className='right-side'>
        <div className='text-content-scrollable'>
          <h1 className='about-title'>Hola, soy Tatiana Loaiza.</h1>
          <p>
            Creo firmemente que todos poseemos una capacidad innata para sanar, crecer y reconectar con nuestra verdadera esencia. A veces, el ritmo de la vida y los desafíos que encontramos pueden desconectarnos de nosotros mismos, dejándonos con una sensación de vacío o confusión.
          </p>
          <p>
            Mi propósito como terapeuta es ofrecerte un espacio seguro, profesional y lleno de empatía, donde puedas explorar tus pensamientos y emociones sin juicios. Juntos, podemos navegar por esas dificultades, no solo para superarlas, sino para transformarlas en una oportunidad de desarrollo personal y bienestar integral.
          </p>
          <h2>Mi Enfoque Terapéutico</h2>
          <p>
            Mi trabajo se basa en la convicción de que tú eres el experto en tu propia vida. Yo estoy aquí para acompañarte con herramientas y una guía profesional. En nuestras sesiones, integro diversas corrientes para adaptarme a tus necesidades únicas:
          </p>
          <ul>
            <li><strong>Profundidad y Raíz (Psicoanálisis):</strong> Exploramos juntos el origen de tus emociones y patrones de comportamiento para lograr una comprensión profunda que libere y sane desde la raíz.</li>
            <li><strong>Mente y Cerebro (Neuroplasticidad y PNL):</strong> Utilizo técnicas basadas en la ciencia de la neuroplasticidad y la Programación Neurolingüística (PNL) para ayudarte a entender y reconfigurar tus patrones de pensamiento, creando nuevas rutas neuronales hacia la calma y la claridad mental.</li>
            <li><strong>Presencia y Calma (Meditación y Mindfulness):</strong> Diseño e imparto ejercicios de meditación y atención plena para desarrollar una mayor consciencia sobre ti mismo, permitiéndote encontrar un refugio de paz interior en medio del caos exterior.</li>
          </ul>
          <h2>Áreas de Experiencia</h2>
          <ul>
            <li>Terapia Clínica Individual para Adultos</li>
            <li>Talleres Grupales de Crecimiento Personal</li>
            <li>Desarrollo de Inteligencia Emocional y Habilidades Blandas</li>
            <li>Orientación Vocacional y Profesional para Adolescentes</li>
            <li>Promoción de la Salud Mental y el Bienestar Laboral</li>
          </ul>
          <h2>Formación y Credenciales</h2>
          <ul>
            <li><strong>Psicóloga,</strong> Corporación Universitaria Minuto de Dios</li>
            <li><strong>Tarjeta Profesional de Psicología N° 220176</strong></li>
            <li>Diplomado en <strong>Programación Neurolingüística (PNL)</strong></li>
            <li>Diplomado en <strong>Pedagogía Infantil</strong></li>
          </ul>
        </div>
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.5L5.5 11L6.91 9.59L12 14.67L17.09 9.59L18.5 11L12 17.5Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
