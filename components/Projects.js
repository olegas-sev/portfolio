import Link from "next/link";

function Projects() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <div className="mb-10">
                    <h2 className="section-title">Projects</h2>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">Vanila</h2>
                    <div className="h-48 w-48 bg-gray-500"></div>
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
