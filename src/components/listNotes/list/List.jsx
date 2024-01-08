import styles from './css/style.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_NOTE } from '../../../redux/actions/actions';

import Item from '../item/Item';
import ItemText from '../text/ItemText';
import ItemSum from '../sum/ItemSum';
import ButtonEdit from '../buttonEdit/ButtonEdit';
import ButtonDelete from '../buttonDelete/ButtonDelete';

import { v4 } from 'uuid';

export default function List() {
  const dispatch = useDispatch();
  const state = useSelector( (state) => state.notes )

  return ( 
    <>
      { state.length > 0 
        && 
        <ul className={styles.list}>
          { 
            state.map( item => {
              return (
                <Item key={v4()} id={item.id}>
                  <ItemText text={item.text} />
                  <ItemSum sum={item.sum} />
                  <ButtonEdit id={item.id} />
                  <ButtonDelete />
                </Item>
              )
            }) 
          }
        </ul> 
      }
    </>
  )
}
