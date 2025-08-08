import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function ExperiencePage() {

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(()=>{
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('experience').select('*').order('id', { ascending: false });
        if (error) throw error;
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);
  // console.log('experiences', experiences);
  

  if (loading) {
    return <div className="text-center text-[var(--color-primary)]">Loading...</div>;
  }

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">
      Experience
      </h1>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-8 top-5 h-full border-l-2 border-dashed border-gray-300 z-0" />
        <div className="flex flex-col gap-16 relative z-10">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="grid flex-row md:gap-2 relative">
              <div className="items-center mb-0  min-w-[10px] md:min-w-[100px]">
                <span className="bg-white text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-xs md:text-sm font-semibold shadow mb-2 mt-1 whitespace-nowrap z-10">
                  {exp.date}
                </span>
                <div className="w-0.5 flex-1 bg-gray-700" />
              </div>
              <div className="flex-1 ml-20 md:ml-10 sm:ml-5 rounded-2xl p-4 md:p-6 border border-[var(--color-secondary)] mt-2">
                <div className="flex items-center gap-3 md:gap-4 mb-2">
                  {/* {exp.logo && <img src={exp.logo} alt={exp.company || "Company Logo"} className="w-10 h-10 md:w-10 md:h-12 object-contain rounded bg-white p-1 border border-[var(--color-secondary)]" />} */}
                  <div>
                    <div className="text-base md:text-lg font-bold text-[var(--color-primary)]">{exp.role}</div>
                    <div className="text-sm md:text-base font-semibold text-[var(--color-botton)]">@{exp.company}</div>
                  </div>
                </div>
                {exp.description && <div className="text-[var(--color-primary)] mb-2 text-xs md:text-sm">{exp.description}</div>}
                <ul className="list-none pl-0 text-[var(--color-primary)] text-xs md:text-sm space-y-1">
                  {/* {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))} */}
                  {exp.highlights && Array.isArray(exp.highlights)
                    ? exp.highlights.map((tech, i) => (                     
                        <li key={i} className="flex items-start gap-2">
                      <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                      <span>{tech}</span>
                    </li>
                    ))
                    : typeof exp.highlights === 'string'
                      ? exp.highlights.split(',').map((tech, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                          <span>{tech.trim()}</span>
                        </li>
                      ))
                      : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}