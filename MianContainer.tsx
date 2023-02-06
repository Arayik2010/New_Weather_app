import { Weather } from "./Components/Weather/Weather"
import  Navigation  from "./Components/Navbar/Navbar"


export const MainContainer =() => {
    return(
        <div>
            <Navigation/>
            <Weather/>
        </div>
    )
}