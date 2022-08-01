import './facilities.style.scss'
import { RiArrowRightSFill } from 'react-icons/ri'
import Facility1 from '../../assets/Images/facilities/facility1.jpg'
import Facility2 from '../../assets/Images/facilities/facility2.jpg'

const Facilities = () => {
    return (<section class="facilities">
        <div class="borderTop"></div>

        <div class="container">
            <div class="title">
                <h1>facilities & <br />
                    resources</h1>
            </div>
            <div class="facilities-body">
                <div class="body-text">
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti impedit minus ut
                            molestias distinctio quaerat molestiae. Amet ea provident maxime eveniet iusto. Voluptatem
                            unde nostrum consectetur
                            pariatur. Earum culpa, velit molestias quibusdam eius rerum. Nostrum cum sapiente
                            consectetur culpa molestiae vel,
                            autem fuga at commodi necessitatibus, perferendis ratione. Sunt, rerum.</p>
                    </div>
                    <div><button>explore more</button></div>
                </div>
                <div class="body-image">
                    <div><img src={Facility1} alt="facilities IMAGE" />
                        <p><RiArrowRightSFill style={{ color: '#f1b61a' }} />core lab and major facilities</p>
                    </div>
                    <div><img src={Facility2} alt="facilities IMAGE" />
                        <p><RiArrowRightSFill style={{ color: '#f1b61a' }} />housing and facilities</p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Facilities;