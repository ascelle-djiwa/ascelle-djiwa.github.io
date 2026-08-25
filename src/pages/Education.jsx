import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/education';

export default function Education() {
  return (
    <div className="container py-5">
      <h2 className="display-6 text-dark fw-bold mb-5 border-bottom border-light pb-3">Parcours Académique</h2>
      
      <div className="row g-5 mb-5">
        
        {/* Colonne de gauche : La Timeline */}
        <div className="col-lg-8">
          <div className="timeline-clean">
            {EDUCATION.map((ed) => (
              <div key={ed.id} className="timeline-item bg-white p-4 rounded-4 border border-light shadow-sm">
                
                {/* L'en-tête de la carte avec Flexbox pour aligner le logo à droite */}
                <div className="d-flex justify-content-between align-items-start mb-3 pb-2 border-bottom border-light">
                  <div className="pe-3">
                    <h3 className="h5 text-brand fw-bold mb-1">{ed.title}</h3>
                    <h4 className="h6 text-muted mb-0">{ed.institution}</h4>
                  </div>

                  {/* Le bloc Logo ajusté pour les formats horizontaux */}
                  {ed.logo && (
                    <div 
                      className="d-flex align-items-center justify-content-center bg-white rounded-3 p-2 border border-light shadow-sm flex-shrink-0 ms-3" 
                      style={{ width: '110px', height: '70px' }}
                    >
                      <img 
                        src={ed.logo} 
                        alt={`Logo ${ed.institution}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </div>

                {/* Le contenu : Liste des matières */}
                <ul className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                  {ed.details.map((detail, i) => (
                    <li key={i} className="mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Colonne de droite : Les Certifications */}
        <div className="col-lg-4">
          <h3 className="h5 text-dark fw-bold mb-4">Certifications</h3>
          <div className="d-flex flex-column gap-3">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.id} className="bg-white p-3 rounded-3 shadow-sm border border-light border-start border-brand border-4 d-flex align-items-center">
                
                {/* Le Logo centré à gauche */}
                {cert.logo && (
                  <div className="flex-shrink-0 me-3 bg-light rounded d-flex align-items-center justify-content-center p-1" style={{ width: '45px', height: '45px' }}>
                    <img 
                      src={cert.logo} 
                      alt={cert.provider} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                )}
                
                {/* Le Texte à droite */}
                <div>
                  <h4 className="h6 text-dark fw-bold mb-1 lh-sm">{cert.title}</h4>
                  <small className="text-brand d-block mt-1">
                    <i className="fa-solid fa-award me-1 opacity-75"></i>
                    {cert.provider}
                  </small>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}