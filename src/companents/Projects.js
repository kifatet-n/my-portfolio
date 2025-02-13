import React from 'react'
import "./Projects.css";

const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <h2>Layihelerim</h2>
        <div className='project-card'>
            <h3>Layihe1</h3>
            <p>
                Bu layihe API ile elaqe qurur ve 
                istifadeciler ucun melumat teqdim edir.
                Layihe dinamikdir ve butun verilenler uzerinden isleyir
            </p>
            <a href='#' className='project-link'>Lahiyeni goruntule</a>
        </div>
        <div className='project-card'>
            <h3>Layihe 3</h3>
            <p>
                Bu layihe sablonlar uzerinde qurulmus bir tetbiqdir.
                Istifadeciler oz melumatlarini daxil ede bilirler.
            </p>
            <a href='#' className='project-link'>Layiheni Goruntule</a>
        </div>
    </section>
  );
}

export default Projects;