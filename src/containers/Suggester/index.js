import React, { useState, useCallback } from 'react'
import { addDays, endOfWeek } from 'date-fns'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import IntroStep from './IntroStep'
import DetailsStep from './DetailsStep'
import ResultsStep from './ResultsStep'
import DatesStep from './DatesStep'

const Suggester = () => {
  const [stepIndex, setStepIndex] = useState(0)
  const [userData, setUserData] = useState({
    name: null,
    city: null,
    dateType: 'weekend',
    startDate: addDays(endOfWeek(new Date()), -2),
    endDate: endOfWeek(new Date()),
    options: [],
    location: null,
  })
  const moveNextStep = () => {
    setStepIndex(stepIndex + 1)
  }
  const updateUserData = useCallback(
    (partialData) => {
      setUserData({ ...userData, ...partialData })
    },
    [userData, setUserData],
  )
  const stepProps = {
    onContinue: moveNextStep,
    updateUserData,
    userData,
  }
  return (
    <AwesomeSlider selected={stepIndex} buttons={false} bullets={false}>
      <div>
        <IntroStep {...stepProps} />
      </div>
      <div>
        <DatesStep {...stepProps} />
      </div>
      <div>
        <DetailsStep {...stepProps} />
      </div>
      <div>
        <ResultsStep {...stepProps} />
      </div>
    </AwesomeSlider>
  )
}

export default Suggester
