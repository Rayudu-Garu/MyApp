import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [count,setCount]=useState(0);
  const [timer,setTimer] = useState(false);
  const ref =useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer=()=>{
    if(ref.current !== null) return;
    setTimer(true);
    ref.current = setTimeout(()=>{
      setCount(count => count+1);
    },1000);
    
  }

  const stopTimer =()=>{
    if(ref.current === null) return;
    clearTimeout(ref.current);
    ref.current = null;
    setTimer(false);
  }


  return (
    <SafeAreaProvider style={{backgroundColor:'black'}}> 
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={startTimer}>
          <View style={{backgroundColor:'grey',borderRadius:10,padding:10,marginBottom:10}}>
          <Text style={styles.text}>Start Timer</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={stopTimer}>
          <View style={{backgroundColor:'grey',borderRadius:10,padding:10,marginBottom:10}}>
          <Text style={styles.text}>Stop Timer</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={()=>{setCount(0); stopTimer();}}>
          <View style={{backgroundColor:'grey',borderRadius:10,padding:10}}>
          <Text style={styles.text}>Reset</Text>
          </View>
        </TouchableOpacity>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf5ecff',
    height:'100%',
    top:40
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    width:'100%',
    textAlign:'center'
  },
});

export default App;
