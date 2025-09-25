import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Monitor, Database, Cloud, Users, TrendingUp, Lock } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Industry 4.0 Digital Transformation Platform",
      category: "Full Stack",
      description: "Designed and developed interactive analytics dashboards and robust RESTful APIs for 15+ manufacturing companies. Automated end-to-end data flow by integrating OT data from machine-mounted sensors.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
      technologies: ["Angular", "Node.js", "NestJS", "PostgreSQL", "TypeORM", "IoT"],
      features: [
        "Real-time data visualization dashboards",
        "Machine sensor data integration",
        "RESTful API architecture",
        "Client requirement gathering & tailored solutions"
      ],
      metrics: [
        { icon: Users, label: "Manufacturing Companies", value: "15+" },
        { icon: Database, label: "Data Points Processed", value: "1M+" },
        { icon: TrendingUp, label: "Efficiency Improvement", value: "35%" }
      ],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Client Project",
      isClientWork: true
    },
    {
      id: 2,
      title: "Meeting Management Platform",
      category: "Full Stack",
      description: "Comprehensive meeting management solution with automated action point generation and dashboard visualization. Built for both web and mobile platforms with collaborative full-stack development.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center", 
      technologies: ["Angular", "PHP", "Android", "MySQL", "WebRTC"],
      features: [
        "Automated action point generation",
        "Cross-platform compatibility (Web & Mobile)",
        "Real-time meeting collaboration",
        "Comprehensive meeting analytics dashboard"
      ],
      metrics: [
        { icon: Monitor, label: "Platform Support", value: "Web & Mobile" },
        { icon: Users, label: "Concurrent Users", value: "500+" },
        { icon: TrendingUp, label: "Meeting Efficiency", value: "40%" }
      ],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Client Project",
      isClientWork: true
    },
    {
      id: 3,
      title: "Insurance Broker Platform (Microservices)",
      category: "Microservices",
      description: "Led architectural and system design using NestJS backend and React frontend in an Nx monorepo. Implemented comprehensive logging, audit history, service registry, and Redis caching.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center",
      technologies: ["NestJS", "React", "Nx", "Redis", "Docker", "PostgreSQL", "Microservices"],
      features: [
        "Microservices architecture with Nx monorepo",
        "Service registry and discovery",
        "Redis caching implementation",
        "Comprehensive logging and audit history"
      ],
      metrics: [
        { icon: Cloud, label: "Microservices", value: "12+" },
        { icon: Database, label: "Cache Hit Rate", value: "95%" },
        { icon: TrendingUp, label: "Response Time", value: "-60ms" }
      ],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Client Project",
      isClientWork: true
    },
    {
      id: 4,
      title: "nestjs-reverse-engineering NPM Package",
      category: "Open Source",
      description: "Built an NPM package to automate module, entity, and database script setup, streamlining development workflows for NestJS applications.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=center",
      technologies: ["NestJS", "TypeScript", "Node.js", "CLI", "NPM"],
      features: [
        "Automated module generation",
        "Entity and database script setup",
        "CLI-based workflow automation",
        "Developer productivity enhancement"
      ],
      metrics: [
        { icon: TrendingUp, label: "Development Speed", value: "+75%" },
        { icon: Users, label: "NPM Downloads", value: "500+" },
        { icon: Database, label: "Code Generation", value: "Auto" }
      ],
      links: {
        demo: "https://npmjs.com/package/nestjs-reverse-engineering",
        github: "https://github.com/SuryaDivami/reverse-engineering"
      },
      status: "Open Source",
      isClientWork: false
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "Backend",
      description: "Worked on a comprehensive B2B and B2C sales platform with invoice generation and database migration. Handled complex data transformations, ensuring seamless migration of product catalogs, user data, and transaction histories.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop&crop=center",
      technologies: ["Node.js", "MongoDB", "MySQL", "Data Migration", "ETL", "APIs"],
      features: [
        "B2B and B2C sales platform development",
        "Invoice generation and management system",
        "Complex data transformation pipelines",
        "Database migration and data integrity validation"
      ],
      metrics: [
        { icon: Database, label: "Records Migrated", value: "2M+" },
        { icon: TrendingUp, label: "Migration Accuracy", value: "99.8%" },
        { icon: Cloud, label: "Downtime", value: "<2 hours" }
      ],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Client Project",
      isClientWork: true
    },
    {
      id: 6,
      title: "Event Management Platform",
      category: "Full Stack",
      description: "Built a comprehensive event management system with dynamic form creation for user registrations, admin dashboard for event management, seat allocation, payment processing, and invoice generation.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "NestJS", "PostgreSQL", "Stripe", "PDF Generation", "WebSockets"],
      features: [
        "Dynamic form builder for event registration",
        "Real-time seat allocation management",
        "Payment processing and invoice generation",
        "Admin dashboard with reports and analytics"
      ],
      metrics: [
        { icon: Users, label: "Events Managed", value: "100+" },
        { icon: TrendingUp, label: "Registration Rate", value: "95%" },
        { icon: Monitor, label: "Active Users", value: "5K+" }
      ],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Client Project",
      isClientWork: true
    }
  ];

  const categories = ['All', 'Full Stack', 'Microservices', 'Backend', 'Open Source'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Debug logging to check filter functionality
  React.useEffect(() => {
    console.log('Active Category:', activeCategory);
    console.log('Filtered Projects:', filteredProjects);
  }, [activeCategory, filteredProjects]);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500/20 border-green-500/30 text-green-300';
      case 'Open Source':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-300';
      case 'Client Project':
        return 'bg-orange-500/20 border-orange-500/30 text-orange-300';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-300';
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent software engineering projects that showcase my skills in full-stack development, 
            system optimization, and innovative problem-solving using React, NestJS, Angular, and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                console.log('Clicking category:', category);
                setActiveCategory(category);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-blue-400 border border-slate-600/30 hover:border-blue-500/30 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Filter Status */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Showing {filteredProjects.length} projects in "{activeCategory}" category
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project by Syed Juned`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300" itemProp="name">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`} itemProp="genre">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6" itemProp="description">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <metric.icon className="text-blue-400" size={20} />
                      </div>
                      <div className="text-white font-bold text-lg">{metric.value}</div>
                      <div className="text-gray-400 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.links.demo !== "#" && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/25 ${
                        !project.isClientWork && project.links.github !== "#" ? 'flex-1' : 'w-full'
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  
                  {!project.isClientWork && project.links.github !== "#" && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-slate-600/50 hover:border-slate-500/60 text-gray-300 hover:text-gray-200 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-slate-700/30"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </motion.a>
                  )}
                  
                  {project.isClientWork && (
                    <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/30 border border-slate-600/30 text-gray-300 rounded-xl font-semibold backdrop-blur-sm">
                      <Lock size={18} />
                      <span>{project.status}</span>
                    </div>
                  )}
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
            Have an exciting project idea? Let's collaborate and bring it to life!
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Project</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;