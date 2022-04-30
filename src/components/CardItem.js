import React from 'react';






function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target="_blank">
          <div className='cards__item__pic-wrap' >
          
            <img
              className='cards__item__img'
              alt=' Image'
              src={props.src}
             
            />
            
         </div>
         <button className="custom-btn btn-12"><span>Click!</span><span>{props.label}</span></button>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;