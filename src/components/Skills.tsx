
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, Database, Server } from 'lucide-react';

const SkillCategory = ({ 
  icon: Icon, 
  title, 
  skills 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[];
}) => (
  <Card className="bg-darker border-secondary/20 overflow-hidden group">
    <div className="h-1 w-full bg-gradient-to-r from-highlight to-highlight-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-secondary/20 text-highlight">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-text-muted">{skill}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js, Next.js",
        "TypeScript",
        "Tailwind CSS, SCSS",
        "Redux, Context API"
      ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        "Node.js, Express",
        "Python, Django",
        "RESTful APIs",
        "GraphQL",
        "Authentication & Authorization"
      ]
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        "MongoDB, Mongoose",
        "PostgreSQL, MySQL",
        "Firebase Firestore",
        "Data modeling",
        "Redis"
      ]
    },
    {
      icon: Layout,
      title: "Tools & Others",
      skills: [
        "Git, GitHub",
        "Docker, CI/CD",
        "Agile Methodologies",
        "Jest, Testing Library",
        "AWS, Netlify, Vercel"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-highlight mr-4">03.</span>
          <span>Skills</span>
          <span className="h-px bg-secondary/40 ml-6 flex-grow"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
