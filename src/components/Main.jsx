import React from 'react'
import Main_bottom from '../components/Main_bottom'
import person from '../assets/person.jpg'


const Main = () => {
  return (
    <div className="box">
        <>
        <main>
        <div className="main-top">
            <div className="container">
                <h2 className="title">Обо мне</h2>
                <div className="main-top-box">
                    <div className="left">
                     <img src={person} alt=""></img>    
                    </div>
                    <div className="right">
                        <h3>Зубенко Михаил Петрович</h3>
                        <p>Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p>
                    </div>
                </div>
            </div>
        </div>
        <Main_bottom></Main_bottom>
    </main>

        

        </>
    </div>
  )
}

export default Main