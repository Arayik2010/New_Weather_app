import { Weather } from "./Components/Weather/Weather"
import { Navigation } from "./pages/Navbar/Navbar"


export const MainContainer =() => {
    return(
        <div>
            <Navigation/>
            <Weather/>
        </div>
    )
}