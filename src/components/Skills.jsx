import { useState } from 'react';
import { skillsData } from '../data/skills';
import '../styles/skills.css';

function Skills() {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="section" aria-label="Compétences">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills__accordions">
          {skillsData.map((category, index) => (
            <div className="skills__accordion" key={category.category}>
              <button
                className={`skills__accordion-header ${openAccordions.includes(index) ? 'skills__accordion-header--active' : ''}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordions.includes(index)}
              >
                <span>{category.category}</span>
                <span className="skills__accordion-icon">{openAccordions.includes(index) ? '−' : '+'}</span>
              </button>
              <div className={`skills__accordion-content ${openAccordions.includes(index) ? 'skills__accordion-content--open' : ''}`}>
                <ul className="skills__list">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skills__list-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
