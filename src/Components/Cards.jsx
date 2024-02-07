import github from "../assets/github-icon.svg";
import eyes from "../assets/eyes.svg";

const Cards = (props) => {
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full" src={props.src} alt="Sunset in the mountains" />
        <div class="px-6 pt-3 pb-2">
          <div class="font-bold text-xl">{props.title}</div>
        </div>
        <div class="px-6 mb-3">
          <span class="bg-reactcolor rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">React</span>
          <span class="bg-tailwindcolor rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">Tailwind</span>        
          </div>
          <div className="flex justify-around p-2 bg-gray-200">
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={eyes} alt="" /></a>
            </div>
        </div>

    )

}

export default Cards;