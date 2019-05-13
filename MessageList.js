import React from 'react';
import { View, FlatList, Text } from 'react-native';

const MessageList = ({ data }) => (
	<View
		style={{
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<FlatList
			data={data}
			keyExtractor={item => item}
			renderItem={({ item }) => <Message text={item} />}
		/>
	</View>
);

const Message = ({ text }) => <Text>{text}</Text>;

export default MessageList;
