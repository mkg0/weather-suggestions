import { Button as AntButton } from 'antd'
import { DateRange } from 'react-date-range'
import { endOfDay, endOfWeek, addDays } from 'date-fns'
import { H1 } from '../../styleds'
import React from 'react'
import styled from 'styled-components'

const ButtonsWrapper = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
`
const Button = styled(AntButton)`
  padding: 0 30px;
  margin: 20px 10px;
  border-radius: 17px;
  transition: none;
`

const dateSelectors = {
  today: () => ({ dateType: 'today', startDate: new Date(), endDate: endOfDay(new Date()) }),
  weekend: () => ({
    dateType: 'weekend',
    startDate: addDays(endOfWeek(new Date()), -2),
    endDate: endOfWeek(new Date()),
  }),
  custom: () => ({ dateType: 'custom', startDate: new Date(), endDate: addDays(endOfDay(new Date()), 3) }),
}

const DatesStep = ({ onContinue, userData, updateUserData }) => {
  return (
    <div>
      <H1>PICK DATE</H1>
      <ButtonsWrapper>
        <Button
          type={userData.dateType === 'today' ? 'primary' : 'button'}
          size="large"
          onClick={() => updateUserData(dateSelectors.today())}
        >
          TODAY
        </Button>
        <Button
          type={userData.dateType === 'weekend' ? 'primary' : 'button'}
          size="large"
          onClick={() => updateUserData(dateSelectors.weekend())}
        >
          THIS WEEKEND
        </Button>
        <Button
          type={userData.dateType === 'custom' ? 'primary' : 'button'}
          size="large"
          onClick={() => updateUserData(dateSelectors.custom())}
        >
          CUSTOM
        </Button>
      </ButtonsWrapper>
      {userData.dateType === 'custom' ? (
        <div>
          <DateRange
            ranges={[
              {
                startDate: userData.startDate,
                endDate: userData.endDate,
              },
            ]}
            onChange={(ranges) => updateUserData(ranges.range1)}
            maxDate={addDays(new Date(), 8)}
          />
        </div>
      ) : null}
      <AntButton
        disabled={!userData.dateType}
        type="primary"
        size={'large'}
        onClick={onContinue}
        style={{ marginTop: 30 }}
      >
        CONTINUE
      </AntButton>
    </div>
  )
}

export default DatesStep
