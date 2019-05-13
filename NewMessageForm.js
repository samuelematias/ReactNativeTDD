import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class NewMessageForm extends Component {
	state = { inputText: '' };

	_handleChangeText = text => {
		this.setState({
			inputText: text
		});
	};

	_handleSend = () => {
		const { inputText } = this.state;
		const { onSend } = this.props;
		onSend(inputText);
		this.setState({
			inputText: ''
		});
	};

	render() {
		const { inputText } = this.state;
		return (
			<View>
				<TextInput
					testID={'messageText'}
					value={inputText}
					onChangeText={this._handleChangeText}
				/>
				<Button
					title={'Send'}
					testID={'sendButton'}
					onPress={this._handleSend}
				/>
			</View>
		);
	}
}
