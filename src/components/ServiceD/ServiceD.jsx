import React from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Basic Service',
    description: 'Full details about the Basic Service...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCn4J-orJKNNq23d_D1aF0wchyzif78zhbhg&s',
  },
  {
    id: 2,
    title: 'Intermediate Service',
    description: 'Full details about the Intermediate Service...',
    image: 'https://cdn.prod.website-files.com/60cc3f7e46fc805c3c8a1bf7/65007f9a673f95a41ba13e4b_eth%20to%20Base.jpg',
  },
  {
    id: 3,
    title: 'Advanced Service',
    description: 'Full details about the Advanced Service...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU03ODTEKiXVfLwVztN4zONd1tOXxebESzA&s',
  },
];

const ServiceD = () => {
  const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-details-page">
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} className="service-image-large" />
      <p>{service.description}</p>
      <p>
        Polygon là giải pháp Lớp 2 nhằm mục đích mở rộng blockchain Ethereum bằng cách cải thiện tốc độ giao dịch, giảm phí và mang lại trải nghiệm tốt hơn cho nhà phát triển...
      </p>
    </div>
  );
  
};

export default ServiceD;
