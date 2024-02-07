import github from "../assets/github-icon.svg";
import eyes from "../assets/eyes.svg";

const Cards = (props) => {
    return(
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={props.src} alt="Sunset in the mountains" />
        <div className="px-6 pt-3 pb-2">
          <div className="font-bold text-xl">{props.title}</div>
        </div>
        <div className="flex px-6 mb-3 h-8">
          <span className="bg-reactcolor rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">React</span>
          <span className="bg-tailwindcolor rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">Tailwind</span>        
          </div>
          <div className="flex justify-around p-2 bg-gray-200">
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={eyes} alt="" /></a>
            </div>
        </div>

    )

}

export default Cards;