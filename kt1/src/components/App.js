import React from "react";
import Header from './Header/Header'
import './Style.css'
import InformationCard from "./InformationCard/InformationCard";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import RentalByke from "./RentalByke/RentalByke";
import TrueStory from "./TrueStory/TrueStory";

function App(){
  let Facts = [
    {id:1, color:'blue', title:'Годовое ТО'},
    {id:2, color:'lightblue', title:'Выравнивание колес'},
    {id:3, color:'green', title:'Настройка переключателей'}
  ]

  return(
    <div>
      <Header />
      <WhatWeOffer/>
      <TrueStory/>
      <section className="informationCards">
        {Facts.map(elem => <InformationCard
          key={elem.id}
          title={elem.title}
          color={elem.color}
          />)}
      </section>
      <RentalByke/>
    </div>
  )
}

export default App;
