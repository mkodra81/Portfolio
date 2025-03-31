import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-highlight mr-4">01.</span>
          <span>About Me</span>
          <span className="h-px bg-secondary/40 ml-6 flex-grow"></span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              Hello! I'm a dedicated informatics student with a passion for
              exploring the intersection of technology and problem-solving. My
              journey in programming began during my high school years when I
              started experimenting with Java to automate small tasks.
            </p>

            <p className="text-lg">
              Fast-forward to today, I am pursuing a degree in Informatics at
              "University of Tirana" and have gained experience MERN
              technologies from a course on Dominusoft Education. My main focus
              is on learning cutting-edge technologies and building innovative
              solutions that make a difference.
            </p>

            <p className="text-lg">
              Here are a few technologies I've been working with recently:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>MongoDB</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>Git</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>C++</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                className="border-highlight text-highlight hover:bg-highlight/10"
              >
                View Resume <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 order-first md:order-last">
            <div className="relative max-w-xs mx-auto md:ml-0">
              <div className="relative rounded-md overflow-hidden group">
                <img
                  src="/student-avatar.png"
                  alt="Avatar of Informatics Student"
                  className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 border-2 border-highlight rounded-md -z-10 translate 
                              translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
