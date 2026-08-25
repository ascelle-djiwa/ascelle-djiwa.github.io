import React from 'react';
import { Link } from 'react-router-dom';
import TypewriterText from '../components/ui/TypewriterText';
import { PROFILE } from '../data/profile';


// Liste des outils tirée des expériences
const TOOLS = [
  // Les logos Devicon (SVG natifs)
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Jira / Scrum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  
  // Les logos SimpleIcons (avec leurs codes couleurs officiels)
  // Outils Data & BI (Sources Wikimedia / VectorLogo ultra stables)
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Power Apps", logo: "/images/powerapps.png" },
  { name: "Tableau", logo: "https://api.iconify.design/logos:tableau-icon.svg" },
  { name: "MS Office", logo: "https://img.icons8.com/color/96/microsoft-office-2019.png" }
];

export default function Home() {
  return (
    <div>
      <section className="container py-5 mt-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            
            <h1 className="display-4 fw-bold text-dark mb-3">
              <TypewriterText text={`${PROFILE.firstName}\n${PROFILE.lastName}`} />
            </h1>
            
            <h2 className="h4 text-brand mb-4">Bienvenue sur mon portfolio interactif</h2>
            
            {/* Texte chaleureux à personnaliser plus tard */}
            <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
              Ce site est une vitrine de mon parcours, de mes projets et de mes expériences en tant qu'aspirante Data Engineer. 
              Vous y découvrirez ma passion pour les données, mais aussi qui je suis en dehors du contexte professionnel.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/experiences-projets" className="btn bg-brand text-white fw-bold px-4 py-2 shadow-sm rounded-3">
                Explorer mes projets
              </Link>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-4 py-2 rounded-3 fw-medium">
                <i className="fa-brands fa-linkedin text-brand me-2"></i> LinkedIn
              </a>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-4 py-2 rounded-3 fw-medium">
                <i className="fa-brands fa-github me-2"></i> GitHub
              </a>
            </div>
          </div>
          
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-end">
            <img 
              src="/images/maphoto1.jpg" 
              alt="Laurence" 
              className="img-fluid profile-photo" 
            />
          </div>
        </div>
      </section>

      {/* --- NOUVELLE SECTION : CARROUSEL DES OUTILS --- */}
      <section className="tools-carousel-wrapper">
        <div className="tools-carousel-track">
          {[...TOOLS, ...TOOLS].map((tool, index) => (
            <div key={index} className="tool-item">
              <img src={tool.logo} alt={`Logo ${tool.name}`} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION DOMAINES D'EXPERTISE --- */}
      <section className="bg-light-alt py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="display-6 fw-bold text-dark mb-3">Domaines d'Expertise</h3>
            <p className="text-muted fs-5">Une vision 360° de la donnée, de l'ingénierie à l'aide à la décision.</p>
          </div>
          
          {/* justify-content-center permet de centrer la deuxième ligne (les 2 dernières cartes) */}
          <div className="row g-4 justify-content-center">
            {PROFILE.expertise.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="expertise-card bg-white p-4 rounded-4 shadow-sm h-100 border border-light d-flex flex-column">
                  
                  {/* En-tête horizontal (Icône + Titre) */}
                  <div className="d-flex align-items-center mb-4 border-bottom border-light pb-3">
                    <div className="expertise-icon-wrapper me-3 mb-0">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="h5 fw-bold text-dark mb-0">{item.category}</h4>
                  </div>
                  
                  {/* NOUVEAU : La liste stylisée avec les chevrons */}
                  <ul className="expertise-list flex-grow-1">
                    {item.skillsList.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  
                  {/* Mots-clés / Outils avec les badges allégés */}
                  <div className="mt-4">
                    <div className="d-flex flex-wrap gap-2">
                      {item.tools.map(tool => (
                        <span key={tool} className="skill-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}