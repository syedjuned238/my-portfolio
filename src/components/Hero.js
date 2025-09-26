import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-20 left-10' },
    { Icon: Database, delay: 2, position: 'top-40 right-20' },
    { Icon: Cloud, delay: 4, position: 'bottom-40 left-20' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-blue-400/30 hidden lg:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 lg:pt-24"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            Full Stack Developer
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gray-300 font-light">Hey, I'm </span>
            <span className="gradient-text leading-tight">Juned</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400 mb-6">
            Full Stack Software Engineer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate Software Engineer with <span className="text-blue-400 font-semibold">2+ years</span> of experience 
          building scalable enterprise solutions and open-source frameworks using React, NestJS, Angular, and cutting-edge technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.a
            href="#projects"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <ArrowDown size={20} />
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1w2iJVExRxwx5tn5lepKcr6nEgP-S7EhW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">25+</h3>
            <p className="text-gray-400">Modules Optimized</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">20+</h3>
            <p className="text-gray-400">Interns Mentored</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">45%</h3>
            <p className="text-gray-400">Performance Boost</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <p className="text-lg text-gray-300 mb-4">
            Have an innovative project idea? Let's collaborate and bring it to life!
          </p>
          <motion.a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-blue-400/50 underline-offset-4 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect →
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;