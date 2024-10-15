
import './Services.css'; 
import React, { useContext } from 'react';
import { ItemContext } from "../../context/ItemContext";
import { useNavigate, Link } from 'react-router-dom';


const Services = () => {

      const { setItem } = useContext(ItemContext);
    const navigate = useNavigate();

    const handleClick = (item) => {
        setItem(item);
        navigate("/CollectionDetailPage", { state: { item } });
    }
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
   
  ];

  return (
    <div className="services-container-parent">
      <div className="services-container">
        <div className="title_services">
          <h1>Our Services</h1>
          <div className="view_all_service">
             <button className="btn_explore_all_service">
                        <Link to='/AllCollection' className='link_to_all_service'>
                            EXPLORE ALL HOT COLLECTIONS
                        </Link>
                    </button>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-details">
                <h2>{service.id}. {service.title}</h2>
                {service.description.length > 100 ? (
                  <p>
                    {service.description.slice(0, 100)}
                    <span className="truncated-text">...</span>
                  </p>
                ) : (
                  <p>{service.description}</p>
                )}
                <h3 className="read-more">READ MORE</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Services;
