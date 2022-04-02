import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Nav } from "./Nav";
import  Footer  from "./Footer";
import  {Controller}  from "./Controller";
import { AlgoDisplay } from "./AlgoDisplay";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;


function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}
         onClick={()=>(
            <Container>
            <Nav/>
     
          <Controller />
          <AlgoDisplay />
           <Footer />  
        </Container>
          )}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
             
            />
            <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies" rel="noopener noreferrer">Policies</a>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'><a href='https://shivam201483101.github.io/mini-proj/' target="_blank">{props.text}</a></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;