import React from 'react';
import { Button, Checkbox } from 'antd'
import { H1, P } from '../../styleds'
import styled from 'styled-components';
import { SuggestionOptions } from '../../modules/suggestion/constants';

const Checkboxes = styled.div`
  margin: 20px auto 40px auto;
  text-align: left;
  max-width: 280px;
  & label{
    display: block;
    line-height: 39px;
    font-size: 16px;
  }
`

const DetailsStep = (props) => {
  return (
    <div>
      <H1>DETAILS?</H1>
      <P>We will use this information to provide better suggestions. We don’t keep or process any data on our end.</P>
      <Checkboxes>

      <Checkbox.Group
        defaultValue={['plants']}
        options={SuggestionOptions}
        onChange={selected=> props.updateUserData({options: selected})}
    />
      </Checkboxes>
      <Button type="primary" size={'large'} onClick={props.onContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default DetailsStep;