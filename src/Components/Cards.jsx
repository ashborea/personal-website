import github from "../assets/github-icon.svg";
import eyes from "../assets/eyes.svg";

const Cards = (props) => {
    return(
        <div className="card bg-white w-1/6 h-56">
            <div className="card-image">
                <img src={props.src} alt="" />
            </div>
            <div className="card-headline">
                <h6>Titre du projet</h6>
            </div>
            <div className="card-tags flex">
                <p className="tag">React</p>
                <p className="tag">Tailwind</p>
            </div>
            <div className="card-actions flex">
                <a href="#"><img src={github} alt=""/></a>
                <a href="#"><img src={eyes} alt="" /></a>
            </div>
        </div>
    )

}

export default Cards;