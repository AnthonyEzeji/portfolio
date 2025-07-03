import React, { useState } from 'react';
import '../css/Home.css';

const projects = [
  {
    title: 'GenAI Notes',
    image: 'genai notes pic.png',
    liveLink: 'https://genai-takehome.vercel.app/',
    codeLink: 'https://github.com/AnthonyEzeji/genai-takehome',
    description: 'Our AI-powered note-taking app helps you create, organize, and discover insights from your notes with intelligent search and smart suggestions.',
    tech: 'ReactJS, Tailwind CSS, Supabase, OpenAI API',
    hasMultipleButtons: true,
  },
  {
    title: 'TextGenius',
    image: 'humanizer photo.png',
    link: 'https://resilient-rolypoly-b0d380.netlify.app/',
    description: 'Application to humanize AI responses',
    tech: 'TypeScript, NextJS, Tailwind CSS, Supabase, Netlify',
    button: 'Live App',
  },
  {
    title: 'Booker',
    image: 'booker photo.png',
    link: 'https://stepful-takehome-frontend.vercel.app/',
    description: 'Application for scheduling sessions between coaches and students.',
    tech: 'TypeScript, NextJS, ExpressJS, Tailwind CSS, MongoDB, Vercel',
    button: 'Live App',
  },
  {
    title: 'E-Shop: Ecommerce Storefront for Electronics',
    image: 'econ image 3.png',
    link: 'https://github.com/AnthonyEzeji/ecom',
    description: 'Full stack ecommerce storefront with Stripe integration. Similar to any other ecommerce storefront, E-Shop allows users to create an account, browse products, filter products by brand,  add/remove products to/from cart, and purchase cart items through a unique Stripe generated checkout session. App wide state management, such as cart information, is handled with Redux. Further implementation includes Stripe webhook integration allowing customers to view orders after they are placed. Products, users, and orders persist on a MongoDB database allowing for real time inventory check as well as admin functionality, such as managing orders or updating inventory.',
    tech: 'ReactJS, NodeJS, ExpressJS, MongoDB, AWS, Stripe',
    button: 'View Code',
  },
  {
    title: 'Devly: Developer Jobs Finder Tool',
    image: 'job-board pic 4.png',
    link: 'https://github.com/AnthonyEzeji/job-board-nodejs',
    description: 'Full stack job finder tool for developers. Implements full CRUD functionality, such as creating an account, saving job listings, and deleting saved job listings. Listings are sourced through webscraping job boards with CheerioJS, a webscraping Javascript library.',
    tech: 'ReactJS, NodeJS, ExpressJS, MongoDB, Vercel',
    button: 'View Code',
  },
];

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const goTo = (idx) => setCurrent((idx + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Touch/swipe support
  let touchStartX = null;
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) prev();
    if (dx < -50) next();
    touchStartX = null;
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prev} aria-label="Previous project">&#8592;</button>
      <div
        className="carousel-slide"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project-card">
          <img className="project-image" src={projects[current].image} alt={projects[current].title} />
          <div className="project-info">
            <div className="project-header-container">
              <h3 style={{ margin: 0, color: '#fff' }}>{projects[current].title}</h3>
              <div className="btn-container">
                {projects[current].hasMultipleButtons ? (
                  <>
                    <a className="project-btn" href={projects[current].liveLink} target="_blank" rel="noopener noreferrer">
                      Live App
                    </a>
                    <a className="project-btn" href={projects[current].codeLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </>
                ) : (
                  <a className="project-btn" href={projects[current].link} target="_blank" rel="noopener noreferrer">
                    {projects[current].button}
                  </a>
                )}
              </div>
            </div>
            <p>{projects[current].description}</p>
            <p style={{ marginTop: 10, marginBottom: 10 }}>
              TECH USED: <span style={{ backgroundColor: 'rgba(151, 64, 64, 0.2)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>{projects[current].tech}</span>
            </p>
          </div>
        </div>
      </div>
      <button className="carousel-arrow right" onClick={next} aria-label="Next project">&#8594;</button>
      <div className="carousel-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel; 