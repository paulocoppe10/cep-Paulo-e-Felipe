import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
		const response = await Api.get('ws/'+inputCep+'/json/');
		setCep(response.data);
	}
	return(
		<View style={styles.container}>
			<View style={styles.bloco}>
			  <Text style={styles.texto}>informe seu Cep</Text>
				<TextInput
				  style={styles.input}
				  placeholder="EX: 11740000"
				  onChangeText={(data)=setInputCep(data)}
				/>

				<TouchableOpacity
					style={styles.botao}
					onPress={CarregaCep}
				>
					<Text style={styles.textoBotao}>Buscar</Text>
				</TouchableOpacity>

			</View>
			<Cep data={cep}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'fff',
		alignItens: 'center',
		justifyContent:'center',
	},
	bloco:{
		width:'100%'
	},
	input:{
		widht:'80%',
		marginLeft:'10%',
		borderBottomWidth:1,
		fontSize:20,
	},
	texto:{
		fontSize:20,
		textAlign:'center',
	},
	botao:{
		widht:'80%',
		marginLeft:'10%',
	},
	textoBotao:{
		fontSize:20,
		textAlign:'center',
	}
	
});