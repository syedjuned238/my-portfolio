import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Server, Settings, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Angular", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "TailwindCSS", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "NestJS", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "PHP", level: 75 },
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 88 }
      ]
    },
    {
      title: "Database & ORM",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "TypeORM", level: 95 },
        { name: "Redis", level: 85 },
        { name: "Database Design", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS Lambda", level: 85 },
        { name: "AWS EC2", level: 80 },
        { name: "AWS S3", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "Mobile & Testing",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Android Development", level: 75 },
        { name: "React Native", level: 70 },
        { name: "Jest Testing", level: 85 },
        { name: "Unit Testing", level: 90 },
        { name: "API Testing", level: 85 },
        { name: "Test Automation", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Jira", level: 90 },
        { name: "System Design", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Machine Learning", level: 65 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const SkillBar = ({ skill, index, categoryColor }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-white">{skill.name}</span>
          <span className="text-blue-400 font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${categoryColor} rounded-full relative skill-bar`}
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.level}%` } : {}}
            transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding" ref={skillsRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering modern technologies to build scalable, efficient, and innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {category.skills.length} Technologies
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    index={categoryIndex * 6 + skillIndex}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
            <Brain size={48} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold text-white mb-2">Problem Solving</h3>
            <p className="text-gray-300">
              Data Structures & Algorithms, System Design, and architectural thinking
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-500/20">
            <GitBranch size={48} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-2xl font-bold text-white mb-2">Version Control</h3>
            <p className="text-gray-300">
              Git, GitHub, BitBucket with advanced branching and collaboration workflows
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
            <Settings size={48} className="mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold text-white mb-2">Project Management</h3>
            <p className="text-gray-300">
              Jira, Confluence, Agile methodologies, and team leadership experience
            </p>
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning Journey</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Currently expanding expertise in Machine Learning, Kubernetes, and emerging AI technologies 
            to stay at the forefront of software development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS Certifications', 'System Design', 'Machine Learning', 'Kubernetes', 'AI/ML'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 font-medium"
              >
                {skill} 📚
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;