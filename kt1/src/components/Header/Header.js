import logo from '../../assets/logo_copy_1.svg'
import dinImg from '../../assets/din1.png'
import './Header.css'

function Header(){
    return(
        <header className="Header">
            <div className="UppartHeader">
                <img src={logo}/>
                <a>О нас</a>
                <a>Услуги</a>
                <a>Аренда</a>
                <button>Связаться</button>
            </div>
            <div className="DownPartHeader">
                <div>
                    <h2>Веломастерская "Велозар"</h2>
                    <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                </div>
                <img src={dinImg}/>
            </div>
        </header>
    )
}

export default Header;