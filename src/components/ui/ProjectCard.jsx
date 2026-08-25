import React, { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = memo(({ title, description, image, link, tags }) => {
  return (
    <motion.article 
      className="card h-100 bg-white border-0 shadow-sm"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(15, 76, 129, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {image && (
        <div style={{ height: '180px', overflow: 'hidden' }} className="rounded-top">
          <img src={image} className="card-img-top w-100 h-100 object-fit-cover" alt={title} loading="lazy" />
        </div>
      )}
      <div className="card-body d-flex flex-column p-4">
        <h3 className="h5 fw-bold text-dark mb-3">{title}</h3>
        <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
        <div className="mt-3 mb-4">
          {tags.map(tag => (
            <span key={tag} className="badge bg-light-alt text-brand border border-light-alt me-2 mb-2 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-auto fw-medium" style={{ borderColor: 'var(--brand-blue)', color: 'var(--brand-blue)' }}>
            Voir le projet <i className="fa-brands fa-github ms-2"></i>
          </a>
        )}
      </div>
    </motion.article>
  );
});

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};
export default ProjectCard;