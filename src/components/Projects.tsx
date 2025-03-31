
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Link } from 'lucide-react';

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, user authentication, shopping cart, payment processing, and order management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality. Users can create boards, lists, and cards to manage their tasks and projects efficiently.",
    tags: ["React", "TypeScript", "Redux", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses the OpenWeatherMap API to fetch weather data.",
    tags: ["JavaScript", "React", "APIs", "Chart.js", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-highlight mr-4">02.</span>
          <span>Projects</span>
          <span className="h-px bg-secondary/40 ml-6 flex-grow"></span>
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project image - appears on left for even items, right for odd on desktop */}
              <div 
                className={`md:col-span-7 ${
                  index % 2 === 1 ? 'md:order-last' : ''
                }`}
              >
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group relative rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-highlight/30 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
              
              {/* Project details */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className="space-y-4">
                  <p className="text-highlight font-mono">Featured Project</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  
                  <div className="bg-darker p-6 rounded-lg shadow-lg">
                    <p className="text-text-muted">{project.description}</p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 text-sm text-text-muted font-mono ${
                    index % 2 === 1 ? 'justify-end' : ''
                  }`}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-darker px-3 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  
                  <div className={`flex space-x-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-light hover:text-highlight transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-light hover:text-highlight transition-colors"
                      aria-label="Live Site"
                    >
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
            View More Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
