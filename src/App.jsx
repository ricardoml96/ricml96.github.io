import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Layers, 
  Layout,
  ChevronRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Ricardo.dev
      </span>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
          Chief of Staff & Developer
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building the future with <br />
          <span className="text-slate-400">AI & Modern Web.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Specializing in bridging the gap between high-level strategy and technical execution. 
          I build scalable systems and manage high-performance teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
            View Projects <ChevronRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700">
            Get in touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, link }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
  >
    <div className="h-40 bg-slate-900 rounded-xl mb-6 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-colors">
      <Layout className="text-slate-600" size={48} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 mb-4 line-clamp-2">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-400 text-xs rounded-lg border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
    <a href={link} className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">
      Case Study <ExternalLink size={16} />
    </a>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Agent Orchestrator",
      description: "A platform for managing and deploying multi-agent AI systems for complex enterprise workflows.",
      tags: ["Python", "OpenAI", "React", "FastAPI"],
      link: "#"
    },
    {
      title: "Portfolio Engine",
      description: "Automated portfolio generation for developers using GitHub metadata and AI-driven content.",
      tags: ["React", "Tailwind", "Vite"],
      link: "#"
    },
    {
      title: "Strategic Ops Dashboard",
      description: "Internal tooling for tracking high-level KPIs and team performance across multiple departments.",
      tags: ["TypeScript", "Next.js", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

const Stack = () => {
  const tools = [
    { name: "Frontend", icon: <Layout />, items: ["React", "Tailwind", "Next.js", "Framer Motion"] },
    { name: "Backend", icon: <Terminal />, items: ["Python", "FastAPI", "Node.js", "PostgreSQL"] },
    { name: "AI & Data", icon: <Cpu />, items: ["LangChain", "OpenAI", "Vector DBs", "PyTorch"] },
    { name: "Strategy", icon: <Layers />, items: ["Strategic Planning", "Team Lead", "Agile", "Product Ops"] }
  ];

  return (
    <section id="stack" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {tools.map((category) => (
            <div key={category.name} className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <div className="text-blue-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map(item => (
                  <li key={item} className="text-slate-400 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Let's build something great.</h2>
      <p className="text-slate-400 mb-10 max-w-xl mx-auto">
        Currently open to strategic partnerships and high-impact development projects.
      </p>
      <div className="flex justify-center gap-6">
        <a href="#" className="p-4 bg-slate-800 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
          <Github />
        </a>
        <a href="#" className="p-4 bg-slate-800 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
          <Linkedin />
        </a>
        <a href="#" className="p-4 bg-slate-800 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
          <Twitter />
        </a>
        <a href="mailto:hello@ricardo.dev" className="p-4 bg-slate-800 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
          <Mail />
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
    <p>© {new Date().getFullYear()} Ricardo. Built with React & Tailwind.</p>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
