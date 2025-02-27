import imgWhatWeOffer from '../../assets/image_1.png'

function WhatWeOffer(){
    return(
        <section className="WhatWeOffer">
        <div>
        <div>
          <h3>Что мы предлагаем</h3>
          <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
        </div>
          <img src={imgWhatWeOffer}/>
        </div>
      </section>
    )
}

export default WhatWeOffer;