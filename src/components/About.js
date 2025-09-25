import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
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
        duration: 0.6
      }
    }
  };

  const highlights = [
    {
      icon: Award,
      title: "Spotlight Award Winner",
      description: "Recognized at Divami 2024 Annual Awards for outstanding performance and contributions.",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "Team Leadership",
      description: "Led a team of 4 developers and mentored 20+ interns in modern web development.",
      color: "text-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Built nestjs-reverse-engineering npm package, streamlining development workflows.",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              About Syed Juned
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl border border-blue-200 overflow-hidden backdrop-blur-sm">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Syed Juned - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-2xl text-white"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl p-4 shadow-2xl text-white"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Major Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm <strong>Syed Juned</strong>, a passionate Full Stack Software Engineer with over 2 years of experience in building 
                scalable web applications and leading development teams. Currently working at <strong>Divami Design 
                & AI-Led Product Engineering</strong>, where I've optimized system performance by 45% and successfully 
                mentored 20+ interns in modern web development practices.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across modern web technologies including <strong>React</strong>, <strong>NestJS</strong>, <strong>Angular</strong>, and cloud 
                services. I'm passionate about clean code, system architecture, and creating solutions that 
                make a real impact on businesses and users alike. I hold a <strong>Spotlight Award Winner</strong> recognition 
                from Divami 2024 Annual Awards.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300"
                >
                  <div className={`${highlight.color} bg-slate-800/50 p-3 rounded-xl`}>
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-blue-400 font-medium mb-4">
                Ready to transform your ideas into powerful digital solutions?
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;