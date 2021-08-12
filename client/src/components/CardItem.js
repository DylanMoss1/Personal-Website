import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt={props.alt}
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 className='cards__item__text' style={{'text-align':'center','font-size':'1.6rem'}}>{props.text}</h3>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;