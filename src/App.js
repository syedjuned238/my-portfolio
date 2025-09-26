import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set document title
    document.title = 'Juned - Full Stack Developer | Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Syed Juned is a Full Stack Software Engineer with 2+ years experience in React, NestJS, Angular. View my projects and get in touch!');
    }
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Syed Juned",
      "alternateName": "Juned",
      "jobTitle": "Full Stack Software Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Divami Design & AI-Led Product Engineering"
      },
      "description": "Passionate Full Stack Software Engineer with expertise in React, NestJS, Angular, and modern web technologies.",
      "url": window.location.origin,
      "sameAs": [
        "https://linkedin.com/in/syedjuned",
        "https://github.com/syedjuned",
        "mailto:junedsyed238@gmail.com"
      ],
      "knowsAbout": [
        "JavaScript", "TypeScript", "React", "Angular", "NestJS", "Node.js", 
        "PostgreSQL", "MongoDB", "AWS", "Full Stack Development", "System Architecture"
      ]
    };

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup structured data script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-dark-900">
        <Helmet>
          <title>Syed Juned - Full Stack Software Engineer | React & NestJS Developer</title>
          <meta name="description" content="Syed Juned is a passionate Full Stack Software Engineer with 2+ years of experience in React, NestJS, Angular, and modern web technologies. Currently at Divami Design & AI-Led Product Engineering." />
          <meta name="keywords" content="Syed Juned, Juned, Full Stack Developer, Software Engineer, React Developer, NestJS Developer, JavaScript, TypeScript, Web Developer" />
          <link rel="canonical" href="https://junedsyed.dev" />
          
          {/* Open Graph tags */}
          <meta property="og:title" content="Syed Juned - Full Stack Software Engineer" />
          <meta property="og:description" content="Passionate Full Stack Software Engineer with 2+ years of experience crafting scalable web applications and leading development teams." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://junedsyed.dev" />
          
          {/* Twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Syed Juned - Full Stack Software Engineer" />
          <meta name="twitter:description" content="Passionate Full Stack Software Engineer with 2+ years of experience crafting scalable web applications and leading development teams." />
        </Helmet>
        
        <header role="banner">
          <Navbar />
        </header>
        
        <main role="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;