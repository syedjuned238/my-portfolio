import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Star, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "CMR Institute of Technology",
    location: "Hyderabad",
    duration: "2019 - 2023",
    cgpa: "7.5/10",
    highlights: [
      "Focused on Data Structures & Algorithms",
      "Object-Oriented Programming concepts",
      "Database Management Systems",
      "Software Engineering principles",
      "Web Development technologies",
      "System Design fundamentals"
    ]
  };

  const achievements = [
    {
      title: "Spotlight Award",
      organization: "Divami 2024 Annual Awards",
      year: "2024",
      description: "Recognized for outstanding performance and exceptional contributions to the company",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Rising Star Award", 
      organization: "Divami 2023 Annual Awards",
      year: "2023",
      description: "Awarded for rapid growth, learning agility, and promising potential during internship",
      icon: Star,
      color: "text-blue-400"
    }
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems", 
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "System Design",
    "Machine Learning Basics"
  ];

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

  return (
    <section id="education" className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science and earning recognition for excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Education Details */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Education Info */}
              <div className="space-y-8">
                <motion.div
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-2xl shadow-lg shadow-purple-500/25">
                      <GraduationCap size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                      <p className="text-xl text-purple-400 font-semibold mb-2">{education.institution}</p>
                      <p className="text-gray-400 mb-4">{education.location}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} className="text-blue-400" />
                          <span className="font-medium">{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-green-400" />
                          <span className="text-green-400 font-semibold">CGPA: {education.cgpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Academic Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-400" />
                      Academic Focus Areas
                    </h4>
                    <div className="space-y-3">
                      {education.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Coursework */}
              <div className="space-y-8">
                <motion.div
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <BookOpen size={24} className="text-green-400" />
                    Key Coursework
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-3 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:border-slate-500/50 transition-colors duration-200"
                      >
                        <span className="text-gray-300 font-medium">{course}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Academic Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                    <div className="text-gray-300 text-sm">Years Program</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">7.5</div>
                    <div className="text-gray-300 text-sm">CGPA</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Professional <span className="gradient-text">Recognition</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`${achievement.color} bg-slate-800/50 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-white">{achievement.title}</h4>
                        <span className="text-sm text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-lg text-purple-400 font-semibold mb-3">{achievement.organization}</p>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Learning */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-500/20 rounded-3xl p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Beyond formal education, I'm committed to staying current with emerging technologies 
              through online courses, tech blogs, and hands-on projects. Learning never stops in tech!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Online Courses', 'Tech Blogs', 'Open Source', 'Side Projects', 'Tech Communities'].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;