import { useState } from 'react'
import EditableField from './EditableField.jsx'
import EditableSection from './EditableSection.jsx'
import './App.css'

function App() {
  return (
    <>
    <div id='left-side'>
      <img src="https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg" alt="picture of a women" />
      <div id='description'>
        <EditableField 
          tag="h1"
          value="Olivia Wilson"
          label="full-name"
        />
        <EditableField 
          tag="h4"
          value="Graphic Designer"
          label="position"
        />
      </div>
      <EditableField 
          tag="div"
          value="Hi, my name is Olivia! I am graphic designer with 3+ years of experience. I blend creativity with problem solving, which helps me provide great result for my clients. My principles of work are: consistency, innovation and human oriented solutions. If you feel like we are great match, hit me up!"
          label="profile"
        />
      <div className="contacts">
        <ul>
        <EditableField 
          tag="li"
          value="+7(123)345-678"
          label="num"
        />
        <EditableField 
          tag="li"
          value="olivia_w@gmail.com"
          label="mail"
        />
        <EditableField 
          tag="li"
          value="olivia-w.com"
          label="web"
        />
        <EditableField 
          tag="li"
          value="69 bakery street, 3 avenue"
          label="address"
        />
        </ul>
      </div>
    </div>
    <EditableSection
      years="2023-2024"
      company="Altruis M"
      description="Branding
              SMM Design
              Print Design"
    />
    {/* <div id='right-side'>
        <h2>Work experience</h2>
        <div className='workplace'>
          <code>2024-now</code>
          <div className='description'>
            <h3>Alturis M</h3>
            <p>Graphic Designer</p>
          </div>
            <ul>
              <li>/ Branding</li>
              <li>/ SMM Design</li>
              <li>/ Print Design</li>
            </ul>
          
        </div>
        <div className='workplace'>
          <code>2021-2024</code>
          <div className='description'>
            <h3>Volt Inc.</h3>
            <p>Graphic Designer</p>
          </div>
            <ul>
              <li>/ Team managment</li>
              <li>/ Print Design</li>
            </ul>
        </div>
      </div> */}
      
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button> */}
    </>
  )
}

export default App
// Один елемент с функционалом редактирования, только выбираешь что это див ли или хедер. Типа строишь уже страницу