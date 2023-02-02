import './index.css';
import luffy from '../../Assets/images/luffy.png';
import FlipCard from '../FlipCard';

const card = [
    {
        id: 1,
        img: luffy,
        name: "Luffy",
        role: "President",
        linkedin: "LinkedIn"
    },
]



const About = () => {
    return (
        <div>
            <div class="about">
                <div class="container top-padding">
                    <div class="row align-items-center">
                        <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-9">
                            <div class="hero-caption">
                                <h1>Mission</h1>
                                <p>At Product Space, our mission is to help undergraduate students nurture the skills demanded in this field so they can thrive as product leaders and help others who are interested in product management. To accomplish this, we continue to build a strong, engaged community of future product managers who are excited to embark on their product journey and desire to give back as much as they take.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="values">
                <h1 class="">Values</h1>
                <p>At Product Space, we strive to embody the following values to foster a welcoming and enriching environment for our members.</p>
            </div>
            <div class="leadership">
                <h1>Leadership</h1>
                    {
                        card.map((card) => {
                            return <FlipCard key={card.id} card={card} />
                        })
                    }
            </div>

            <div class="beyond-product-space">
                <h1>Beyond Product Space</h1>

            </div>
        </div>

    );

}
export default About;

