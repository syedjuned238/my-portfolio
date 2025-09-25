import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, TrendingUp, Award, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Divami Design & AI-Led Product Engineering",
      period: "July 2023 - Present",
      type: "Full Time",
      achievements: [
        "Developed responsive web designs & scalable APIs, optimizing performance and reducing response time by 45%",
        "Led a team of 4 developers, contributed to architectural planning and project estimation",
        "Translated client requirements into technical solutions and mentored 20+ interns",
        "Conducted senior-level interviews to recruit high-impact team members",
        "Implemented transactional managers across 25 modules ensuring data consistency and reliability",
        "Resolved critical production issues during peak hours, mitigating business risk",
        "Built the nestjs-reverse-engineering npm package to automate development workflows"
      ],
      technologies: ["NestJS", "React", "Angular", "PostgreSQL", "TypeORM", "AWS", "Docker", "Redis"],
      highlights: [
        { icon: TrendingUp, text: "45% Performance Improvement", color: "text-green-400" },
        { icon: Users, text: "Led Team of 4 Developers", color: "text-blue-400" },
        { icon: Award, text: "Spotlight Award Winner 2024", color: "text-yellow-400" }
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Divami Design & AI-Led Product Engineering", 
      period: "January 2023 - June 2023",
      type: "Internship",
      achievements: [
        "Gained end-to-end understanding of web application architecture",
        "Focused on pixel-perfect frontend development with modern frameworks",
        "Implemented comprehensive unit tests using Jest for high-quality, reliable code",
        "Collaborated with senior developers on multiple client projects",
        "Contributed to code reviews and best practices documentation"
      ],
      technologies: ["JavaScript", "React", "Jest", "HTML5", "CSS3", "Git"],
      highlights: [
        { icon: Code, text: "Pixel-Perfect UI Development", color: "text-purple-400" },
        { icon: Award, text: "Rising Star Award 2023", color: "text-cyan-400" }
      ]
    }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions and leading teams to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-30"></div>
              )}

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Timeline Dot and Date */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-xl text-blue-400 font-semibold mb-3">{exp.company}</p>
                      
                      {/* Mobile Date */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center gap-2 text-sm">
                            <highlight.icon size={16} className={highlight.color} />
                            <span className="text-gray-300">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, aIndex) => (
                          <motion.li
                            key={aIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: aIndex * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <motion.span
                            key={tIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: tIndex * 0.05 }}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Interested in working together or want to know more about my experience?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;