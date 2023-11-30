import  React  from 'react'
import HeaderContent from '../components/HeaderContent'


const Header = () => {
  return (
    <>
    <header>
    <nav>
    <div className="container header-box">
                <a href="#" className="logo">PROWEB</a>
                <ul>
                    <li><a href="#">Обо мне</a></li>
                    <li><a href="#">Мои работы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
    </nav>
    <HeaderContent></HeaderContent>
    </header>
    </>
    
    
  )
}


export default Header