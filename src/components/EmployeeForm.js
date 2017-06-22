import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}> Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" color="#fff" />
            <Picker.Item label="Tuesday" value="Tuesday" color="#fff" />
            <Picker.Item label="Wednesday" value="Wednesday" color="#fff" />
            <Picker.Item label="Thursday" value="Thursday" color="#fff" />
            <Picker.Item label="Friday" value="Friday" color="#fff" />
            <Picker.Item label="Saturday" value="Saturday" color="#fff" />
            <Picker.Item label="Sunday" value="Sunday" color="#fff" />
          </Picker>

        </CardSection>

      </View>
    )
  }
}

const styles = {
  pickerTextStyle: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
