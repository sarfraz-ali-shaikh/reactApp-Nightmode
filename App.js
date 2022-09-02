import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


export default function App() {
    const [nmode,setNmode]=React.useState(true)
    function handleClicked(){
        setNmode(prevState=>!prevState)
    }
     return ( 
        <div className="container">
            <Navbar 
            toggleDarkMode={()=>handleClicked()}
            darkMode={nmode}/>
            <Main darkMode={nmode} />
        </div>
    )
}