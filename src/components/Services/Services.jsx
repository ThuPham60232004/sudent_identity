import { useNavigate } from 'react-router-dom';
import './Services.css'; 
import React,{useState} from "react";

import { GrFormPrevious,GrFormNext } from "react-icons/gr";


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
      image: 'https://th.bing.com/th/id/OIP.n8httTbaeM5ewQvOh9OeZAHaEK?rs=1&pid=ImgDetMain',
    },
     {
      id: 4,
      title: 'Advanced Service',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU03ODTEKiXVfLwVztN4zONd1tOXxebESzA&s',
    },
     {
      id: 5,
      title: 'Advanced Service',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://cdn.trendhunterstatic.com/thumbs/483/luxy.jpeg?auto=webp',
    },
  ];


  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/service/${id}`);
  };

 const [currentIndex, setCurrentIndex] = useState(0);
 const itemsPerPage = 3;
 const handleNext = () => {
    if (currentIndex < services.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <div className="services-container">
      <div className="title_services">
        <h1>Our Services</h1>
        <div className="pre_next_services_con">
            <GrFormPrevious onClick={handlePrev} />
            <GrFormNext onClick={handleNext} />
        </div>
      </div>
       <div className="services-grid">
      {services.slice(currentIndex, currentIndex + itemsPerPage).map(service => (
          <div className="service-card" key={service.id} onClick={() => handleClick(service.id)}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-details">
              <h2>{service.id}.{service.title}</h2>
               {service.description.length > 100 ? (
                <p>
                  {service.description.slice(0, 100)}
                  <span className="truncated-text">...</span>
                </p>
              ) : (
                <p>{service.description}</p>
              )}
              <h3>READ MORE</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
