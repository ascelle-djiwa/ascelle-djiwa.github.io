import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import ExperienceCard from '../components/ui/ExperienceCard';
import { EXPERIENCES, PROJECTS } from '../data/experience';

// La liste complète des filtres, incluant les nouvelles ambitions
const CATEGORIES = [
  'Tout',
  'Data Science & ML',
  'Data Analysis & BI',
  'Data Engineering',
  'Développement Web',
  'GenAI & Bots'
];

export default function ExperienceProjects() {
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredProjects = activeFilter === 'Tout' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <div className="container py-5">
      
      {/* Section Expériences */}
      <section className="mb-5 pb-4 border-bottom border-light">
        <h2 className="display-6 fw-bold text-dark mb-5">Expériences Professionnelles</h2>
        <div className="d-flex flex-column gap-4">
          {EXPERIENCES.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Section Projets avec Filtres */}
      <section className="bg-light-alt p-4 p-md-5 rounded-4 mt-5 overflow-hidden">
        <h2 className="display-6 fw-bold text-dark mb-2">Portfolio Data & Ingénierie</h2>
        <p className="text-muted mb-4">Un aperçu de mes réalisations académiques et personnelles.</p>
        
        {/* Le Menu de Filtres */}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* La Grille de Projets Animée */}
        <motion.div 
          layout 
          // C'est ici que la magie opère : on change les classes Bootstrap conditionnellement
          className={`row g-4 align-items-stretch ${filteredProjects.length > 0 ? 'row-cols-1 row-cols-md-2 row-cols-lg-3' : 'justify-content-center'}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(proj => (
                <motion.div
                  key={proj.id}
                  layout 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.8 }} 
                  transition={{ duration: 0.3 }}
                  className="col"
                >
                  <ProjectCard 
                    title={proj.title} 
                    description={proj.description} 
                    image={proj.image} 
                    link={proj.link} 
                    tags={proj.tags} 
                  />
                </motion.div>
              ))
            ) : (
              /* --- EMPTY STATE PARFAITEMENT CENTRÉ --- */
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                // Ajout des classes flexbox (d-flex flex-column align-items-center) pour forcer le centrage absolu
                className="col-12 d-flex flex-column align-items-center justify-content-center py-5 my-4"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <i className="fa-solid fa-robot text-brand" style={{ fontSize: '4rem', opacity: '0.8' }}></i>
                </motion.div>
                
                <h4 className="h5 fw-bold text-dark mb-2 text-center">En cours d'élaboration</h4>
                <p className="text-muted text-center" style={{ maxWidth: '400px' }}>
                  Je prépare actuellement de nouveaux projets passionnants pour cette catégorie. Les dépôts GitHub arrivent bientôt !
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </section>
    </div>
  );
}