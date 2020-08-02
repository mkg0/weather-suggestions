import React, { useCallback } from 'react'
import { H1, P } from '../../styleds'
import { Button, Input } from 'antd'
import { Buttons, StepWrapper } from './styleds'
import { useState } from 'react'
import LocationPicker from '../../components/LocationPicker'
import styled from 'styled-components'

const NameInput = styled(Input)`
  width: 169px;
  height: 63px;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;
  background: #0091E2;
  color: #fff;
  &::selection{
    background: #0091E2;
    color: #fff;
  }
`

const IntroStep = ({updateUserData, onContinue, userData}) => {
  const [name, setName] = useState('THERE')
  const submit = useCallback(() => {
    updateUserData({ name })
    onContinue()
  }, [updateUserData, onContinue, name])
  return (
    <StepWrapper>
      <H1>
        HELLO <br />{' '}
        <NameInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? submit() : undefined)}
        />{' '}
        👋
      </H1>
      <P>
        Your life will get along better with weather forecasts with a planner. Press continue button to get
        advices.
      </P>
      <P>This app doesn’t collect any data.</P>
      <LocationPicker onLocationChange={location=> updateUserData({location})} />
      <Buttons>
        <Button disabled={!userData.location} type="primary" size={'large'} onClick={submit}>
          CONTINUE
        </Button>
      </Buttons>
    </StepWrapper>
  )
}

export default IntroStep
