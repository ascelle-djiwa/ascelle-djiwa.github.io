import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { useContactForm } from '../hooks/useContactForm';

// Dictionnaire d'images haute qualité (Unsplash) pour tes passions
// Tu pourras facilement remplacer ces liens par les chemins de tes propres photos plus tard (ex: "/images/mon-velo.jpg")
const PASSION_IMAGES = {
  "Balade à vélo": "/images/girl-on-bicycle.png",
  "Pâtisserie": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
  "Lecture": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
  "Voyage": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop"
};

export default function AboutContact() {
  const { isSubmitting, status, submitForm } = useContactForm();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5" style={{ maxWidth: '1100px' }}>
      
      {/* 1. Section À Propos (Largeur contrainte pour une lecture fluide) */}
      <section className="mb-5 mt-4">
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
          <div className="row align-items-center g-4 text-start">
            
            {/* Colonne Photo */}
            <div className="col-md-4 text-center">
              <div className="rounded-4 overflow-hidden shadow-sm" style={{ aspectRatio: '1/1' }}>
                <img 
                  src="/images/maphoto2.jpg" 
                  alt="Laurence - Personnalité" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Colonne Texte */}
            <div className="col-md-8">
              <h2 className="display-6 fw-bold text-dark mb-4">À propos de moi</h2>
              
              <div className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                <p className="fw-medium text-dark">
                  Étudiante en Master MIAGE, je suis avant tout animée par la curiosité et l'envie d'apprendre.
                </p>
                <p>
                  Si mon parcours m'a dotée d'une forte appétence pour la technique et la data, je crois profondément que les meilleurs projets se construisent sur des valeurs humaines : l'écoute, l'entraide et l'engagement. 
                </p>
                <p className="mb-0">
                  En tant que future alternante, j'aborde les défis avec humilité, toujours prête à m'investir pour progresser et apporter une énergie positive à mon équipe.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Section Passions (Concept Polaroïd) */}
      <section className="mb-5 py-4">
        <h3 className="h4 fw-bold text-dark mb-4 text-center">Mes passions hors de l'écran</h3>
        
        <div className="row g-4 justify-content-center">
          {PROFILE.passions.map((passion, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div className="polaroid-card h-100">
                <img 
                  src={PASSION_IMAGES[passion] || PASSION_IMAGES.default} 
                  alt={passion} 
                  className="polaroid-img"
                />
                <div className="py-3 text-center text-dark fw-bold" style={{ fontSize: '1.05rem' }}>
                  {passion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Formulaire de Contact (Design épuré) */}
      <section className="mb-5 mt-5">
        <div className="text-center mb-4">
          <h3 className="h4 fw-bold text-dark mb-2">Contactez-moi</h3>
          <p className="text-muted">Une question, une opportunité ? N'hésitez pas à m'écrire.</p>
        </div>
        
        {/* mx-auto centre le formulaire, maxWidth l'empêche de devenir géant */}
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <form onSubmit={handleSubmit} className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light text-start">
            
            {/* Les champs Nom et Email côte à côte */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary small mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="form-control form-control-lg bg-light border-0 fs-6" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  required 
                  placeholder="Jane Doe"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary small mb-2">Email professionnel</label>
                <input 
                  type="email" 
                  className="form-control form-control-lg bg-light border-0 fs-6" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                  required 
                  placeholder="jane@entreprise.com"
                />
              </div>
            </div>
            
            {/* Le champ Message */}
            <div className="mb-4">
              <label className="form-label fw-medium text-secondary small mb-2">Votre message</label>
              <textarea 
                className="form-control form-control-lg bg-light border-0 fs-6" 
                rows="5" 
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})} 
                required
                placeholder="Bonjour Laurence, je vous contacte pour..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn bg-brand text-white btn-lg w-100 fw-bold shadow-sm" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            
            {status && (
              <div className={`mt-3 alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 4. Section Réseaux Sociaux */}
      <section className="text-center pb-4">
        <p className="text-muted fw-medium mb-3">Retrouvez-moi également sur mes réseaux :</p>
        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-decoration-none mx-3">
          <i className="fa-brands fa-linkedin text-brand fs-2 hover-lift"></i>
        </a>
        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-decoration-none mx-3">
          <i className="fa-brands fa-github text-dark fs-2 hover-lift"></i>
        </a>
      </section>

    </div>
  );
}