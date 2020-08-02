import React from 'react'
import styled from 'styled-components'
import { P } from '../../styleds'
import UmbrellaImg from './umbrella.png'
import WindImg from './wind.png'
import SunImg from './sunny.svg'
import Cold from './cold.png'
import DropImg from './drop.png'
import ClothIcon from '../ClothIcon'

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Item = styled.div`
  text-align: left;
`
const Icon = styled.div``
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-top: 35px;
  max-width: 500px;
`

const IconMapper = {
  windSuggestion: WindImg,
  rainSuggestion: UmbrellaImg,
  warmSuggestion: SunImg,
  coldSuggestion: Cold,
  'RAIN/PLANTS_HYDRATED': DropImg,
}

const Warning = (props) => {
  return (
    <Wrapper>
      <Icon>
        <img alt={props.type} width="30" height="30" src={IconMapper[props.id] || IconMapper[props.type]} />
      </Icon>
      <div>
        <P>{props.message}</P>
        <Items>
          {props.items.map((item) => (
            <Item>
              <ClothIcon widht="25" height="25" name={item} style={{ marginRight: 10 }} />
              {item}
            </Item>
          ))}
        </Items>
      </div>
    </Wrapper>
  )
}

export default Warning
