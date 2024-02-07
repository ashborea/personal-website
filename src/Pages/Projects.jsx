import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import web1 from '../assets/website-one.png'

const Projects = () => {
    return(
        <>
        <Navbar />
        <div className="grid grid-cols-4 place-items-center gap-4 w-full p-10">
        <Cards src={web1} title="Projet 1" />
        <Cards src={web1} title="Projet 2"/>
        <Cards src={web1} title="Projet 3"/>
        <Cards src={web1} title="Projet 4"/>
        <Cards src={web1} title="Projet 5"/>
        <Cards src={web1} title="Projet 6"/>
        <Cards src={web1} title="Projet 7"/>
        <Cards src={web1} title="Projet 8"/>
        
        </div>
        </>
    )
}

export default Projects;