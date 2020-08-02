import React, { useState, useEffect } from 'react'
import { H2, P } from '../../styleds'
import { analyse } from '../../modules/suggestion'
import { Spin } from 'antd'
import Warning from '../../components/Warning'
import ClothIcon from '../../components/ClothIcon'
import { ListItem, List } from '../../components/List'
import { differenceInDays } from 'date-fns'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`

const ResultsStep = ({ userData }) => {
  const [result, setResult] = useState({ warnings: [], items: [] })
  useEffect(() => {
    analyse(userData).then(setResult)
  }, [setResult, userData])
  const warningItems = result.warnings.map((warning) => warning.suggestedItems).flat()
  if (!result) return <Spin />
  const duration = differenceInDays(userData.endDate, userData.startDate)

  return (
    <Wrapper>
      <H2>Results</H2>
      { !result.warnings.length ? <P>No need to worry about anything. You are good to go!</P> : (
        <div>
          <P>Here you can find your tips for the days out.</P>
          {result.warnings.map((warning) => (
            <Warning
              type={warning.type}
              key={warning.key}
              id={warning.key}
              message={warning.desc}
              items={warning.suggestedItems}
            />
          ))}
        </div>
      ) }
      {duration > 1 ? (
        <div>
          <H2 style={{ marginTop: 50 }}>Your Valise</H2>
          <List>
            {result.items.map((item) => (
              <ListItem icon={<ClothIcon width="30" height="30" name={item.type} />} count={item.count}>
                {item.type}
              </ListItem>
            ))}
            {warningItems.map((warningItem) => (
              <ListItem icon={<ClothIcon width="30" height="30" name={warningItem} />} count={1}>
                {warningItem}
              </ListItem>
            ))}
          </List>
        </div>
      ) : null}
    </Wrapper>
  )
}

export default ResultsStep
