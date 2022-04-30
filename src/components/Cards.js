import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image from './images/sort.png';
import image2 from './images/path-finder.png';
import image3 from './images/nqueens.jpg';
import image4 from './images/word_search.png';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Amazing Visualization !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <>  
         
          <CardItem
              src={Image}
              text='Explore the different types of sorting algorithm'
              label='Sorting'
             path='https://shivam201483101.github.io/mini-proj/'

            />
            </>
            <CardItem
              src={image2}
              text='Find out different path-Finding-Visualization'
              label='Path Finder'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Visualize the N Queen Problem'
              label='N-Queen'
              path=''
            />
            <CardItem
              src={image4}
              text='Tree'
              label='Tree'
              path=''
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;