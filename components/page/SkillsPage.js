import React from 'react';

const skills = [
  {
    category: 'Programming Languages & Frameworks',
    icon: '💻',
    items: [
      { name: 'C#', level: 80 },
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Bun', level: 60 },
      { name: 'ASP.NET', level: 90 },
      { name: 'React', level: 80 },
      { name: 'Flutter', level: 60 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 60 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 95 },
      { name: 'SQL Server', level: 90 },
      { name: 'MySQL', level: 90 },
      { name: 'SQLite', level: 50 },
    ],
  },
  {
    category: 'Development Tools & Technologies',
    icon: '🛠️',
    items: [
      { name: 'Docker', level: 70 },
      { name: 'Postman', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Git', level: 80 },
      { name: 'GitLab', level: 60 },
      { name: 'Visual Studio', level: 95 },
      { name: 'VS Code', level: 80 },
      { name: 'CI/CD pipelines', level: 90 },
      { name: 'Web service and web-API', level: 95 },
      { name: 'Apache', level: 80 },
      { name: 'IIS web server', level: 80 },
      { name: 'Xampp web server', level: 80 },
      { name: 'Nginx', level: 80 },
    ],
  },
  {
    category: 'Others',
    icon: '✨',
    items: [
      { name: 'Software Development lifecycle', level: 60 },
      { name: 'Technical Problem Solving', level: 90 },
      { name: 'Team work', level: 90 },
      { name: 'Communication', level: 60 },
      { name: 'Creativity', level: 60 },
      { name: 'Agile Development', level: 90 },
      { name: 'CI/CD', level: 80 },
      { name: 'Temenos (Core banking)', level: 80 },
    ],
  },
];

const getLevelDots = (level) => {
  const dots = Math.round(level / 20);
  return '●'.repeat(dots) + '○'.repeat(5 - dots);
};

export default function SkillsPage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center  bg-transparent justify-center px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Skills</h1>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {skills.map((group) => (
          <div key={group.category} className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{group.icon}</span>
              <div className="text-base md:text-lg font-bold text-[var(--color-primary)]">{group.category}</div>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.items.map((skill) => (
                <li key={skill.name} className="flex flex-col rounded-md px-4 py-3 border border-[var(--color-secondary)] shadow-sm">
                  <span className="font-medium  bg-transparent text-[var(--color-primary)] text-base mb-1">{skill.name}</span>
                  <span className="text-xs  bg-transparent text-gray-700">{getLevelDots(skill.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}