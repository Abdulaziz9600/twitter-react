import React, { useState } from 'react';
import './Main.css'
import Abdulaziz from '../../assets/AbdulazizOval-modified.png'
import Location from '../../assets/Frame.svg';
import Revers from '../../assets/Vect.svg'
import Message from '../../assets/comment.svg'
import Like from '../../assets/like.svg'
import Post from '../../assets/Frame21.svg'
import change from '../../assets/Vector.svg'
import Partert from '../../assets/AbdulazizPartert.jpg'


const Main = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  return (
    < >
      <div className='pt-3 main-site'>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
        <h2>Abdulaziz</h2>
        <p>1,070 Tweets</p>
        <div className='twitter-home'>

          <div className=' twitter-box'>

            <div className='d-flex align-items-center justify-content-between'><img className='' src={Abdulaziz} width="150" height="150" alt="" />
              <button className='btn-edit'>Edit profile</button>
            </div>

            <h3 className='pt-3'>Abdulaziz</h3>
            <p className='text-secondary'>@abdulaziz00571</p>
            <p>WEB Dev Front End at <span className='text-info'>@abutechuz</span></p>
            <ul className='d-flex list-unstyled justify-content-between about m-0 p-0 gap-2'>
              <li className='d-flex'> <img src={Location} alt="" /> Frag'ona</li>
              <li className=''><a className='text-decoration-none' href="https://t.me/abdulaziz_karimovich">t.me/abdulaziz_karimovich</a></li>
              <li className=''> 03,1999</li>
              <li className=''>Joind 2021</li>
              <li className=''><span className='fw-bold'>20</span> Following</li>
              <li className=''><span className='fw-bold'>5000</span> Followers</li>
            </ul>
          </div>
          <div className=''>

            <ul className='d-flex justify-content-between list-unstyled pt-5 twitter-nav'>
              <li className='fw-bold'>Tweets</li>
              <li className='fw-bold'>Tweets & replies</li>
              <li className='fw-bold'>Media</li>
              <li className='fw-bold'>Likes</li>
            </ul>

            <ul className=' list-unstyled coment'>
              <li className='d-flex align-items-center'>
                <img src={Abdulaziz} width="60" height="60" alt="" />
                <div className='ps-3'>
                  <h3 className='twitter-name p-0 m-0'>Abdulaziz</h3>
                  <p className='p-0 m-0'>@abdulaziz00571</p>

                  <p className='p-0 m-0'>Уларни болахонадор қилиб сўкиб ташлагим келади-ю, лекин бунга диним йўл қўймайди-да.</p>
                  <ul className='d-flex pt-5 p-0 m-0 justify-content-between list-unstyled'>
                    <li>2000<img src={Message} alt="" /></li>
                    <li>200<img src={Revers} alt="" /></li>
                    <li><button className='btn-like' onClick={() => setCount((count) => count + 1)}>
                      {count}<img className='Like' src={Like} alt="" /></button></li>
                    <li>225<img src={Post} alt="" /></li>
                    <li>40<img src={change} alt="" /></li>

                  </ul>
                </div>
              </li>
            </ul>
            <ul className=' list-unstyled coment'>
              <li className='d-flex align-items-center'>
                <img src={Abdulaziz} width="60" height="60" alt="" />
                <div className='ps-3'>
                  <h3 className='twitter-name p-0 m-0'>Abdulaziz</h3>
                  <p className='p-0 m-0'>@abdulaziz00571</p>

                  <p className='p-0 m-0'>Камбағалликди яна битта белгиси оилавий шашлик егани борганда ортган нонларни сўмкангга соволишинг😂🫡</p>
                  <ul className='d-flex pt-5 p-0 m-0 justify-content-between list-unstyled'>
                    <li>1000<img src={Message} alt="" /></li>
                    <li>200<img src={Revers} alt="" /></li>
                    <li><button className='btn-like' onClick={() => setLike((like) => like + 1)}>
                      {like}<img className='Like' src={Like} alt="" /></button></li>
                    <li>225<img src={Post} alt="" /></li>
                    <li>40<img src={change} alt="" /></li>

                  </ul>
                </div>
              </li>
            </ul>

            <ul className=' list-unstyled coment'>
              <li className='d-flex '>
                <img src={Abdulaziz} width="60" height="60" alt="" />
                <div className='ps-3'>
                  <h3 className='twitter-name p-0 m-0'>Abdulaziz</h3>
                  <p className='p-0 m-0'>@abdulaziz00571</p>
                  <p>Илм фаннинг шарти иймонни тарк этиш эмас. Билъакс, иймонни тарк этган илм-фанда ҳам сўқир юради.</p>
                  <img className='rounded' src={Partert} width='650' height='500' alt="" />
                  <ul className='d-flex pt-5 p-0 m-0 justify-content-between list-unstyled'>
                    <li>1000<img src={Message} alt="" /></li>
                    <li>200<img src={Revers} alt="" /></li>
                    <li><button className='btn-like' onClick={() => setLike((like) => like + 1)}>
                      {like}<img className='Like' src={Like} alt="" /></button></li>
                    <li>225<img src={Post} alt="" /></li>
                    <li>40<img src={change} alt="" /></li>

                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div >

    </>
  );
};

export default Main;