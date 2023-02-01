import './index.css';
const Students = () => {

    return (
        <>
            <div class="mx-40">

                <div class="text-jost mx-20 my-20 flex flex-row">
                    <div class="basis-1/2">
                        <h1 class="mb-2 text-2xl text-gray-700"></h1>
                        <h3 class="text-5xl text-gray-800 mb-4"><b>Curricula</b></h3>
                        <span class="text-xl">At Product Space, we invest a lot of our energies into creating educational programs that are relevant, high-impact, and full of insights into product management. 
                From tackling interviews to performing case studies on real-world issues, our members have made remarkable achievements putting what they’ve learned at Product Space into their internships and beyond.</span>
                    </div>
                    <div class="basis-1/2"></div>
                </div>

                <div class="text-jost mx-40 text-center">
                    <h3 class="text-2xl py-3 text-pink-400" >Our Programs</h3>
                </div>

                <div class="text-jost mx-20 my-20 flex flex-row">
                    <div class="basis-1/2"></div>
                    <div class="basis-1/2">
                        <h2 class="mb-6 text-4xl text-gray-700">Fellowship</h2>
                        <span class="text-l text-gray-500">If you’re new to product management, the fellowship program is the perfect place to begin. Over the course of a semester, you’ll be mentored with a group of fellows on a variety of product management topics, including the interview processes, design thinking, the day-to-day of a product manager, and the different roles within this career field. Whether you’re trying to land a PM internship or decide if product management is right for you, this program is a great way to meet like-minded people and get a head start in your career.</span>
                    </div>
                </div>

                <hr></hr>

                <div class="text-jost mx-20 my-20 flex flex-row">
                    <div class="basis-1/2">
                        <h2 class="mb-6 text-4xl text-gray-700">Clients</h2>
                        <span class="text-l text-gray-500">If you already have previous product management experience (i.e. internship or previously a member of our fellowship program), you can apply your learnings in a real-world setting as a product associate for a client project. Throughout the semester, you’ll be working under an experienced project manager to devise impactful features and products for companies in various stages and industries. From talking with stakeholders to conducting user research, the client projects will provide you with invaluable experience for your growth as a product manager.</span>
                    </div>
                    <div class="basis-1/2"></div>
                </div>
                
            </div>

        </>
    );

}
export default Students;
