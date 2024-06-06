import { useState } from "react"
import buttonX from "/x.svg"
import buttonMenu from "/menu.svg"
import logo from "/logo.svg"

export default function Header({blackScreen,setBlackScreen}) {
    const [clickDisplay,setClickDisplay] = useState(false)
    const handleDisplay = () =>{
        setClickDisplay(!clickDisplay)
        setBlackScreen(!blackScreen)
    }
    return(
        <header>
            <img src={logo} alt="" className="logo"/>
            <nav>
            <img src={blackScreen === false ? buttonMenu : buttonX} alt="" className="button-menu" onClick={handleDisplay}/>
                <ul className="ul-list" style={clickDisplay == true ? {display:"flex"}:{display:"none"}}>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categorias</li>
                </ul>
            </nav>
        </header>
    )
}