
import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Creative Developer & Designer
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I craft beautiful, functional websites and applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20"></div>
                <span className="relative text-2xl font-light">Your Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Hello! I'm a passionate developer with 5+ years of experience in creating modern web applications. My journey in tech began with a curiosity about how websites work, which evolved into a career building digital experiences that people love.
            </p>
            <p>
              I specialize in front-end development with React and TypeScript, but I'm also experienced in backend technologies. When I'm not coding, you'll find me exploring new design trends, contributing to open source, or hiking in the mountains.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link to="/about">
              <Button variant="outline" className="rounded-full">
                More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    React & TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Responsive Design
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    API Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Database Management
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Figma & Adobe XD
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
                    Design Systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Link to="/skills">
              <Button variant="outline" className="rounded-full">
                See All Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600 mb-4">A brief description of this amazing project and the technologies used.</p>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio">
              <Button className="rounded-full">
                View All Projects <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Link to="/contact">
              <Button className="w-full py-6 text-lg rounded-full">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
