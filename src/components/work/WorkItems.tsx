import React from 'react';
import './Styles.scss'

interface WorkItemsConfig {
  item: {
    id: number,
    image: string,
    title: string,
    category: string,
    link: string
  },
}

const WorkItems: React.FC<WorkItemsConfig> = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>    
        <img src={item.image} alt={item.title} className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} target='_blank' className='work__button'>View more <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
    </div>
  );
}

export default WorkItems;