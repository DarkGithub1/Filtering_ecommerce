import { useState } from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Data from './Data'
import Button from "./Components/Buttons"
import Footer from "./Components/Footer"

function App() {
  const [item,setItem]=useState(Data)
  const menuItems=[...new Set(Data.map((val)=>val.category))]

  //Fitering

  const filerItems=(cat)=>{
    const newItems=Data.filter((newval)=>newval.category===cat
    )
    console.log(newItems);
    setItem(newItems)
  }

  return (
    <>
      <Navbar/>
      <Button menuItems={menuItems}
        filerItems={filerItems}
        setItem={setItem}
      />
      <Card item={item}/>
      <Footer/>
    </>
  )
}

export default App
