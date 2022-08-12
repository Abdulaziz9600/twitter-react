import React,{ useState} from 'react';
import './Main.css'
import Abdulaziz from '../../assets/AbdulazizOval-modified.png'
import Revers from '../../assets/Vect.svg'
import Message from '../../assets/comment.svg'
import Like from '../../assets/like.svg'
import Post from '../../assets/Frame21.svg'
import change from '../../assets/Vector.svg'
import card from '../../assets/tweetcard.png'

const Section = () => {

  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  
  return (
    <div>
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

            <img src={card} alt="" />
    </div>
  );
};

export default Section;