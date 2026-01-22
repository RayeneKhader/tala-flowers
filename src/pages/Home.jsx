import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MessageCircle, Heart, Sparkles, Gift, Users } from 'lucide-react';

// Floating petals animation component
const FloatingPetal = ({ delay, duration, x, size, color }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ y: -100, x: x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: '100vh', 
      opacity: [0, 1, 1, 0],
      rotate: 360,
      x: [x, x + 50, x - 30, x + 20]
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity,
      ease: "linear"
    }}
    style={{ left: `${x}%` }}
  >
    <div 
      className={`rounded-full ${color}`}
      style={{ width: size, height: size * 1.5, borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
    />
  </motion.div>
);

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Floating petals */}
      {[...Array(12)].map((_, i) => (
        <FloatingPetal 
          key={i}
          delay={i * 2}
          duration={15 + Math.random() * 10}
          x={Math.random() * 100}
          size={10 + Math.random() * 15}
          color={['bg-purple-300/60', 'bg-pink-300/60', 'bg-blue-300/60', 'bg-rose-300/60'][i % 4]}
        />
      ))}

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-purple-600/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">
            Fleurs artisanales faites main
          </span>
        </motion.div>

        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-800 leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="block">Des fleurs qui</span>
          <span className="block italic text-purple-600">ne fanent jamais,</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-rose-500/80">
            mais qui font battre le cœur.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Chaque bouquet est une intention, façonnée avec amour, 
          pour offrir un souvenir éternel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#creations"
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full font-medium hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Découvrir les créations
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-purple-300 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-300"
          >
            Me contacter
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

// Story Section
const StorySection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/50 to-purple-50/50" />
    
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-purple-500 tracking-[0.2em] uppercase text-sm">Notre histoire</span>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mt-4">
          L'histoire de <span className="italic text-purple-600">Tala Flowers</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-100/50 border border-purple-100/50"
      >
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p className="text-xl md:text-2xl font-serif text-gray-700 italic border-l-4 border-purple-300 pl-6">
            "Tala Flowers est née d'un amour simple : offrir quelque chose qui dure."
          </p>
          
          <p>
            Chaque fleur est façonnée à la main, <strong className="text-purple-600">pétale après pétale</strong>, 
            avec patience et tendresse. Des heures de travail minutieux pour créer des bouquets 
            qui racontent une histoire unique.
          </p>
          
          <p>
            Ce ne sont pas de simples fleurs. <span className="text-rose-500 font-medium">Ce sont des intentions.</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 text-rose-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">Pour dire "je t'aime"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
              <Gift className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">Pour remercier une maman</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center">
              <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">Pour surprendre une amie</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">Pour un souvenir éternel</p>
            </div>
          </div>
          
          <p className="text-xl text-center font-serif text-purple-600 italic">
            Un cadeau qui ne fane pas, un souvenir qui reste à jamais.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// Creations Gallery
const CreationsSection = () => {
  const images = [
    {
      url: "src/assets/creation-1.png",
      title: "Élégance Violette",
      description: "Tulipes et lys en tons violet profond"
    },
    {
      url: "src/assets/creation-2.png",
      title: "Douceur Océane",
      description: "Nuances de bleu turquoise apaisantes"
    },
    {
      url: "src/assets/creation-3.png",
      title: "Arc-en-ciel de Tendresse",
      description: "Explosion de couleurs joyeuses"
    }
  ];
  

  return (
    <section id="creations" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-rose-50/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 tracking-[0.2em] uppercase text-sm">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mt-4">
            Nos <span className="italic text-purple-600">créations</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Chaque bouquet est unique, façonné avec amour et attention aux détails. 
            Découvrez quelques-unes de nos créations artisanales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-purple-100/50 border border-purple-100/30">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-2xl mb-2">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 italic"
        >
          Et bien d'autres créations à découvrir... Chaque bouquet peut être personnalisé selon vos envies !
        </motion.p>
      </div>
    </section>
  );
};

// Customization Section
const CustomizationSection = () => {
  const colors = [
    { name: "Violet", bg: "bg-purple-400", shadow: "shadow-purple-200" },
    { name: "Rose", bg: "bg-pink-400", shadow: "shadow-pink-200" },
    { name: "Bleu", bg: "bg-blue-400", shadow: "shadow-blue-200" },
    { name: "Turquoise", bg: "bg-teal-400", shadow: "shadow-teal-200" },
    { name: "Jaune", bg: "bg-yellow-400", shadow: "shadow-yellow-200" },
    { name: "Orange", bg: "bg-orange-400", shadow: "shadow-orange-200" },
    { name: "Rouge", bg: "bg-red-400", shadow: "shadow-red-200" },
    { name: "Vert", bg: "bg-green-400", shadow: "shadow-green-200" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50 to-blue-100/50" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 tracking-[0.2em] uppercase text-sm">Sur mesure</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mt-4">
            Créez votre <span className="italic text-rose-500">bouquet unique</span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto font-serif italic">
            "Vous imaginez la fleur, Tala la crée."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-purple-100/30">
              <h3 className="font-serif text-2xl text-gray-800 mb-4">Comment ça marche ?</h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">1</span>
                  <p>Décrivez-moi votre idée, l'occasion, l'émotion que vous voulez transmettre</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-medium">2</span>
                  <p>Choisissez vos couleurs préférées ou laissez-vous surprendre</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">3</span>
                  <p>Je crée votre bouquet unique avec amour et attention</p>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-rose-500 rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-4">Chaque création est unique</h3>
              <p className="text-white/90 leading-relaxed">
                Aucun bouquet n'est identique à un autre. Chaque fleur porte l'intention 
                que vous souhaitez transmettre, dans les couleurs qui vous ressemblent.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-purple-100/30">
              <h3 className="font-serif text-2xl text-gray-800 mb-6">Palette de couleurs</h3>
              <p className="text-gray-600 mb-6">
                Choisissez parmi une infinité de couleurs pour personnaliser votre bouquet :
              </p>
              <div className="grid grid-cols-4 gap-4">
                {colors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 mx-auto rounded-full ${color.bg} shadow-lg ${color.shadow} mb-2`} />
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6 italic">
                ... et toutes les nuances que vous pouvez imaginer !
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// For Who Section
const ForWhoSection = () => {
  const occasions = [
    {
      icon: Heart,
      title: "Pour l'Amour",
      description: "Un bouquet qui dit 'je t'aime' sans un mot, qui reste comme témoin de vos sentiments.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Gift,
      title: "Pour Maman",
      description: "Remercier celle qui donne tant, avec des fleurs aussi éternelles que son amour.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Users,
      title: "Pour l'Amitié",
      description: "Célébrer les liens précieux avec un cadeau aussi unique que votre complicité.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Pour Surprendre",
      description: "Un cadeau original et durable, pour les moments qui comptent.",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-purple-50/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 tracking-[0.2em] uppercase text-sm">Occasions</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mt-4">
            Pour <span className="italic text-purple-600">qui</span> sont ces fleurs ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-purple-100/30 border border-purple-100/30 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${occasion.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <occasion.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-gray-800 mb-3">{occasion.title}</h3>
                <p className="text-gray-600 leading-relaxed">{occasion.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-rose-500 to-pink-500" />
    
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
    
    {/* Floating petals */}
    {[...Array(8)].map((_, i) => (
      <FloatingPetal 
        key={i}
        delay={i * 3}
        duration={20 + Math.random() * 10}
        x={Math.random() * 100}
        size={8 + Math.random() * 12}
        color="bg-white/30"
      />
    ))}
    
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Envie de créer ensemble ?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Racontez-moi votre idée, l'occasion spéciale, les couleurs qui vous font rêver... 
          et je créerai pour vous un bouquet unique qui ne fanera jamais.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <a 
          href="mailto:talaflowers@email.com"
          className="group flex items-center gap-4 px-8 py-5 bg-white rounded-2xl text-purple-600 font-medium hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </div>
          <div className="text-left">
            <span className="block text-sm text-gray-500">Email</span>
            <span className="text-lg">talaflowers@email.com</span>
          </div>
        </a>

        <a 
          href="https://wa.me/33600000000"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-8 py-5 bg-green-500 rounded-2xl text-white font-medium hover:bg-green-600 hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="text-left">
            <span className="block text-sm text-white/80">WhatsApp</span>
            <span className="text-lg">Discutons ensemble</span>
          </div>
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-white/70 italic"
      >
        Je réponds généralement dans les 24h avec le cœur 💜
      </motion.p>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-12 bg-gray-900 text-white/60">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <div className="font-serif text-3xl text-white mb-4">
        Tala Flowers
      </div>
      <p className="text-sm mb-6">
        Fleurs artisanales faites main avec amour 💜
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="mailto:talaflowers@email.com" className="hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs">
        © 2024 Tala Flowers. Créé avec amour.
      </p>
    </div>
  </footer>
);

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <CreationsSection />
      <CustomizationSection />
      <ForWhoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}