import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from('category').select('*');
        if (error) throw error;
        setCategories(data);
        if (data.length > 0) {
          setActiveTab(data[0].title); // Set default to first category's title
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center pb-10 overflow-x-hidden">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.title)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === cat.title
                ? 'bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-lg scale-105'
                : 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-background-2)] hover:scale-105'
              }`}
          >
            <span>As a {cat.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8 transition-all duration-500">
        {!loading && filteredProjects.length > 0 ? ((
          filteredProjects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-[var(--color-background-2)] rounded overflow-hidden flex flex-col md:flex-row items-stretch border-gray-400">
              <div className="md:w-48 w-full h-fit flex-shrink-0">
                <img src={project.image || '/placeholder.jpg'} alt={project.title || 'Project Image' } 
                className="w-full h-fit object-cover md:rounded-t-none md:rounded-l-2xl"
                loading='lazy' />
              </div>
              <div className="flex-1 flex flex-col justify-between md:ml-4 ml-0 border-[var(--color-tertiary)] border p-4 min-w-0">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)]">{project.titles}</h2>
                  <p className="text-base text-gray-500 mb-2 min-h-[3.5rem] line-clamp-3 overflow-hidden">{project.description}</p>
                 
                <div className="flex flex-wrap gap-2">
                  {project.tech && Array.isArray(project.tech)
                    ? project.tech.map((tech, i) => (                     
                       <span key={i} 
                       className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">
                       {tech}
                       </span>
                    ))
                    : typeof project.tech === 'string'
                      ? project.tech.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow"
                        >
                          {tech.trim()}
                        </span>
                      ))
                      : null}
                    </div>
                </div>
              </div>
            </div>
          ))
        ))
         : (
          <p className="text-center text-gray-500">No projects found for this category.</p>
        )}
          <div className='flex justify-center mt-8'>
            <a href={activeTab === 'UI/UX Designer' ? 'https://dribbble.com/yishak27' : 'https://github.com/Yishak27'}
              target="_blank" rel="noopener noreferrer"
              aria-label='More Link'
              className="flex items-center gap-2  px-5 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] shadow hover:bg-[var(--color-primary)] hover:text-[var(--color-background-2)] transition-colors text-sm"
            >
              View More on {activeTab === 'UI/UX Designer' ? 'Dribbble' : 'GitHub'}
            </a>
          </div>        
      </div>
    </section>
  );
}