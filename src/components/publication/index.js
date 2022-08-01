import React from 'react';
import './publication.style.scss'
import Card from './Card';
import Pub1 from '../../assets/Images/Publications/PUB1.jpg'
import Pub2 from '../../assets/Images/Publications/PUB2.jpg'
import Pub3 from '../../assets/Images/Publications/PUB3.jpg'
import Pub4 from '../../assets/Images/Publications/PUB4.jpg'
const Publication = () => {
    return (<section class="publication">
        <div class="borderTop"></div>

        <div class="container">
            <div class="title">
                <h1>publications</h1>
                <button>explore more</button>
            </div>
            <div class="cards">
                <Card
                    image={Pub1}
                    P='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, enim!'
                />
                <Card
                    image={Pub2}
                    P='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, enim!'
                />
                <Card
                    image={Pub3}
                    P='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, enim!'
                />
                <Card
                    image={Pub4}
                    P='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, enim!'
                />
               
            </div>
        </div>
    </section>);
}

export default Publication;