import img from "../public/assets/images/react.png"
function Projects() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <div className="mb-10">
                    <h2 className="section-title">Projects</h2>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">Vanila</h2>
                    <div className="flex flex-row justify-between">
                        <div className="w-1/2">
                            <img src={img.src} alt="" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="section-title">Title</h1>
                            <h3 className="section-subtitle">Type</h3>
                            <p className="">Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam labore delectus rerum quia, rem a deleniti minima dolorem iusto inventore.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">React</h2>
                    <div className="h-48 w-48 bg-gray-500"></div>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">Vue</h2>
                    <div className="h-48 w-48 bg-gray-500"></div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
