import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Link } from "lucide-react";

// Project data
const projects = [
  {
    title: "MovieStream",
    description:
      "A full-featured movie streaming platform built with React, Node.js, and MongoDB. Features include product catalog, user authentication and user's reviews.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    imageUrl: "/MovieStream-sc.png",
    githubUrl: "https://github.com/mkodra81/Moviestream",
    liveUrl: "https://movieprojectmern.netlify.app/",
    status: true,
  },
  {
    title: "ShopEase",
    description:
      "An e-commerce platform designed to provide a seamless shopping experience. Features include product browsing, user authentication, shopping cart, payment gateway integration, and order tracking.",
    tags: ["React", "Typescript", "Node.js", "Express", "MongoDB", "Tailwindcss"],
    imageUrl:
      "/ShopEase-sc.png",
    githubUrl: "https://github.com/mkodra81/ShopEase",
    liveUrl: "https://shop-ease-omega-steel.vercel.app/",
    status: false,
  },
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
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-last" : ""
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative rounded-lg overflow-hidden"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
              {/* Project details */}
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div className="space-y-4">
                  <p className="text-highlight font-mono">Featured Project</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <h4 className="text-lg text-text-muted font-mono">
                    {project.status ? project.status : "Ongoing"}
                  </h4>

                  <div className="bg-darker p-6 rounded-lg shadow-lg">
                    <p className="text-text-muted">{project.description}</p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-2 text-sm text-text-muted font-mono ${
                      index % 2 === 1 ? "justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-darker px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex space-x-4 ${
                      index % 2 === 1 ? "justify-end" : ""
                    }`}
                  >
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
      </div>
    </section>
  );
};

export default Projects;
