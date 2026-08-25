import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ExperienceCard({ experience }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="experience-card rounded-4 p-4 mb-4" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="row">
        {/* Colonne Gauche : Logo et Date */}
        <div className="col-md-3 d-flex flex-column align-items-md-start align-items-center mb-3 mb-md-0 border-md-end border-light pe-md-4">
          <div 
            className="bg-white rounded-circle d-flex justify-content-center align-items-center mb-3 shadow-sm border border-light p-2"
            style={{ width: '85px', height: '85px', overflow: 'hidden' }}
          >
            {experience.logo ? (
              <img 
                src={experience.logo} 
                alt={experience.company} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            ) : (
              <span className="fs-3 fw-bold text-muted">{experience.company.charAt(0)}</span>
            )}
          </div>
          <span className="fw-bold text-brand text-center text-md-start">{experience.date}</span>
        </div>

        {/* Colonne Droite : Contenu Principal */}
        <div className="col-md-9 ps-md-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 fw-bold text-dark mb-1">{experience.role}</h3>
              <h4 className="h6 text-muted mb-2">{experience.company}</h4>
            </div>
            
            {/* L'icône de flèche qui tourne à l'ouverture */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="expand-icon fs-5"
            >
              <i className="fa-solid fa-chevron-down"></i>
            </motion.div>
          </div>

          <p className="text-muted mt-2 mb-3" style={{ fontSize: '0.95rem' }}>
            {experience.brief}
          </p>

          <div className="d-flex flex-wrap gap-2 mb-2">
            {experience.tags.map(tag => (
              <span key={tag} className="badge bg-light text-dark border px-2 py-1">
                {tag}
              </span>
            ))}
          </div>

          {/* Le contenu caché (Les missions détaillées) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-4 mt-3 border-top border-light">
                  <ul className="text-muted mb-0" style={{ paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                    {experience.missions.map((mission, idx) => (
                      <li 
                        key={idx} 
                        className="mb-2"
                        // dangerouslySetInnerHTML permet d'interpréter les balises <strong> du fichier data
                        dangerouslySetInnerHTML={{ __html: mission }} 
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    logo: PropTypes.string,
    brief: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    missions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};