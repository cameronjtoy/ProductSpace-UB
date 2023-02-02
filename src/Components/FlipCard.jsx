function FlipCard({card}){
    return (
        <div className="flex min-h-screen flex-col justify-center">
            <div className="group h-96 w-96 [perspective:1080px]">
                <div className="relative h-full w-full  rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0"></div>
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src={card.img} alt="" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] [transform-style:preserve-3d] group-hover:[transform:rotateY(0deg)]">
                    <h1 className="text-2xl font-medium not-italic mt-20  font-sans:">{card.name}</h1>
                    <p className="text-xl font-medium not-italic mb-30 font-sans:">{card.role}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white mt-20 font-bold py-2 px-4 rounded-full">{card.linkedin}</button>
                </div>
            </div>
        </div>
    );
}
export default FlipCard;
