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
        <>
            <div class="text-jost mx-20 my-20 text-gray-800 flex flex-row">
                    <div class="basis-1/2">
                        <h1 class="text-5xl font-semibold">Mission</h1>
                        <h2 class=" my-4 text-xl">At Product Space, our mission is to help undergraduate students nurture the skills demanded in this field so they can thrive as product leaders and help others who are interested in product management. To accomplish this, we continue to build a strong, engaged community of future product managers who are excited to embark on their product journey and desire to give back as much as they take.</h2>
                    </div>
            </div>

            <div>


                <div class="text-jost mx-60 text-center">
                    <h3 class="text-3xl py-6 text-pink-500" >OUR VALUES</h3>
                    <span class="text-3xl font-extralight text-gray-500">At Product Space, we strive to embody the following values to foster a welcoming and enriching environment for our members.</span>
                    <h1 class="text-3xl py-6 text-pink-500 text-center">Leadership</h1>
                        <div class="grid grid-cols-1 ">
                            {
                                card.map((card) => {
                                    return <FlipCard key={card.id} card={card} />
                                })
                            }
                        </div>
                </div>


                <hr></hr>




                
                
            </div>

        </>
    );

}
export default About;