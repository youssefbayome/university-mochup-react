import React from 'react';
import './bio.style.scss'
import St1 from '../../assets/Images/Bio/st01.jpg'
import St2 from '../../assets/Images/Bio/st02.jpg'
import St3 from '../../assets/Images/Bio/st03.jpg'
const Bio = () => {
    return (<section class="bio">
        <div class="borderTop"></div>

        <div class="container">
            <div class="title">
                <h1>BioE <br />stories</h1>
            </div>
            <div class="stories">
                <div class="story">
                    <div class="story-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi architecto quaerat fugit
                            aliquam assumenda odio eaque blanditiis aliquid dolorum soluta, maxime, unde eum nisi
                            eligendi eos, accusantium maiores. Voluptates?</p>
                    </div>
                    <div class="story-image"><img src={St2} alt="student photo" />
                        <p>student name <br /> 2022</p>
                    </div>
                </div>
                <div class="story">
                    <div class="story-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi architecto quaerat fugit
                            aliquam assumenda odio eaque blanditiis aliquid dolorum soluta, maxime, unde eum nisi
                            eligendi eos, accusantium maiores. Voluptates?</p>
                    </div>
                    <div class="story-image"><img src={St1} alt="student photo" />
                        <p>student name <br /> 2022</p>
                    </div>
                </div>
                <div class="story">
                    <div class="story-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi architecto quaerat fugit
                            aliquam assumenda odio eaque blanditiis aliquid dolorum soluta, maxime, unde eum nisi
                            eligendi eos, accusantium maiores. Voluptates?</p>
                    </div>
                    <div class="story-image"><img src={St3} alt="student photo" />
                        <p>student name <br /> 2022</p>
                    </div>
                </div>


            </div>
        </div>
    </section>);
}

export default Bio;