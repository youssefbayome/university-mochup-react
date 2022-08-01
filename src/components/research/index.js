import React from 'react';
import './research.style.scss';
import Card from './Card';
import Research1 from '../../assets/Images/Research Technologies/search1.jpg';
import Research2 from '../../assets/Images/Research Technologies/search2.jpg';
import Research3 from '../../assets/Images/Research Technologies/search3.jpg';
import Research4 from '../../assets/Images/Research Technologies/search4.jpg';
const Research = () => {
  return (
    <section>
      <div className="research">
        <div className="container">
          <div className="title">
            <h1>
              research & <br />
              technologies
            </h1>

            <button>explore more</button>
          </div>
          <div className="research-cards">
            <Card
              image={Research1}
              head="Lorem ipsum dolor sit amet."
              p="research area"
            />

            <Card
              image={Research2}
              head="Lorem ipsum dolor sit amet."
              p="research area"
            />

            <Card
              image={Research3}
              head="Lorem ipsum dolor sit amet."
              p="research area"
            />

            <Card
              image={Research4}
              head="Lorem ipsum dolor sit amet."
              p="research area"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
