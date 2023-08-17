import { Link } from 'react-router-dom';

const Section = ({ title, subtitle, content }) => (
    <div className="text-jost mx-20 my-20 flex flex-row">
        <div className="basis-1/2">
            {title && <h2 className="mb-2 text-2xl text-gray-700">{title}</h2>}
            {subtitle && <h3 className="text-4xl text-gray-800 mb-4">{subtitle}</h3>}
            <span className="text-xl">{content}</span>
        </div>
        <div className="basis-1/2"></div>
    </div>
);

const Home = () => {
    return (
        <div>
            <div className="text-jost mx-20 my-20 text-gray-800 flex flex-row">
                <div className="basis-1/2">
                    <h1 className="text-6xl font-semibold">Product Space</h1>
                    <h1 className="text-6xl font-semibold">@Buffalo</h1>
                    <h2 className="my-4 text-xl">UB Product Management Organization</h2>
                    <Link to="/your-desired-route" className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Apply</Link>
                </div>
            </div>

            <div className="mx-40">
                <Section
                    subtitle="What is Product Space?"
                    content="New products are the lifeblood of any company and the cornerstone of any economy. Yet, the most prestigious higher education institutions lack meaningful communities dedicated to the intersection of business and technology. Product Space solves this problem. We teach students from all backgrounds how to create and analyze Products and offer a Space for students to apply their skills in Product Management, Product Marketing, and Product Design. Through these activities, our mission is to cultivate tomorrow's product leaders."
                />

                <Section
                    title="For Students"
                    subtitle="2 Different programs where you can thrive"
                    content="At Product Space, we take pride in our firm commitment to product management education. We offer the fellowship program and client projects for our members who come with various levels of experience."
                />

                <Section
                    title="For Companies"
                    subtitle="The best undergraduate team for your products"
                    content="Product Space is uniquely positioned to assist companies as the first and largest product management organization at UC Berkeley. All client projects are handled by a project manager, 4 to 6 product associates, and an advisor."
                />

                <Section
                    title="Membership"
                    subtitle="Pursue your product passion with like-minded peers"
                    content="At Product Space, we take pride in our firm commitment to product management education. We offer the fellowship program and client projects for our members who come with various levels of experience."
                />
            </div>
        </div>
    );
}

export default Home;
