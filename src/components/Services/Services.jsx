import React from 'react';
import './Services.css'; // Link to your CSS file

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Basic Service',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCn4J-orJKNNq23d_D1aF0wchyzif78zhbhg&s',
    },
    {
      id: 2,
      title: 'Intermediate Service',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://cdn.prod.website-files.com/60cc3f7e46fc805c3c8a1bf7/65007f9a673f95a41ba13e4b_eth%20to%20Base.jpg',
    },
    {
      id: 3,
      title: 'Advanced Service',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU03ODTEKiXVfLwVztN4zONd1tOXxebESzA&s',
    },
  ];

  return (
    <div className="services-container">
             <button className='button_services'>View more</button>
      <h1>Our Services</h1>

      <div className="services-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <h3>READ MORE</h3>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Services;
