import React from 'react';
import { PROFILE } from '../../data/profile';

export default function Footer() {
  return (
           
            <footer className="bg-light py-4 mt-auto border-top" style={{ borderColor: '#eaeaea' }}>
                <div className="container text-center">
                    
                    {/* 1. Les 3 icônes centrées au-dessus avec un petit espacement (mb-3) */}
                    <div className="d-flex justify-content-center gap-4 mb-3">
                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">
                            <i className="fa-brands fa-linkedin fs-4 hover-lift"></i>
                        </a>
                        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">
                            <i className="fa-brands fa-github fs-4 hover-lift"></i>
                        </a>
                        <a href="mailto:alaurence.djiwa@gmail.com" className="text-secondary text-decoration-none">
                            <i className="fa-solid fa-envelope fs-4 hover-lift"></i>
                        </a>
                    </div>

                    {/* 2. Le Copyright centré juste en dessous */}
                    <div className="text-muted small">
                    &copy; {new Date().getFullYear()} <span className="fw-bold text-dark">Laurence</span>. Aspirante Data Engineer.
                    </div>

                </div>
            </footer>
        );
}