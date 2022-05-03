import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image from './images/sort.png';
import image2 from './images/path-finder.png';
import image3 from './images/Nquuens.png';
import image4 from './images/Binary-tree.png';


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
              src={image3}
              text='Visualize the N Queen Problem'
              label='N-Queen'
              path='https://shivam201483101.github.io/NqueensV'
            />
            
          </ul>
          <ul className='cards__items' >
          <CardItem
         
              src={image2}
              text='Coming Soon:Find out different path-Finding-Visualization'
              label='Path Finder'
              path='https://shivam201483101.github.io/path-finder'
            />
            <CardItem
           
              src={image4}
              text='Coming Soon:Visualise the concepts of Binary-tree'
              label='Binary-Tree'
              path='https://shivam201483101.github.io/treevisualizer'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;