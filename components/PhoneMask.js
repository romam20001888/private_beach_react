import MaskedFormControl from 'react-bootstrap-maskedinput'
import {FormGroup, ControlLabel } from 'react-bootstrap'

export default class PhoneMask extends React.Component {
  render () {
    return (
      <FormGroup>
        <ControlLabel>Phone Number</ControlLabel>
        <MaskedFormControl type='text' name='phoneNumber' mask='111-111-1111' />
      </FormGroup>
    );
  }
}