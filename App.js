import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleDeposit = () => {
    if (inputValue && !isNaN(inputValue)) {
      const newBalance = parseFloat(balance) + parseFloat(inputValue);
      setBalance(newBalance);
      setInputValue('');
    }
  };

  const handleWithdraw = () => {
    if (inputValue && !isNaN(inputValue)) {
      const newBalance = parseFloat(balance) - parseFloat(inputValue);
      setBalance(newBalance);
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Idi's Bank</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Account Balance:</Text>
        <Text style={styles.balanceValue}>$ {balance.toFixed(2)}</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Amount"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDeposit}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
