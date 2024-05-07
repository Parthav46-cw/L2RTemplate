import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Webview from "./Webview";

const App = () => { 
  const [url, setUrl] = useState("");
  const [inp, setInput] = useState("");

  return (
      <SafeAreaView style={{flex: 1}}>
      {url === "" && (
        <View>
          <TextInput onChangeText={text => setInput(text)} value={inp}/>
          <TouchableOpacity onPress={() => setUrl(inp)}>
            <Text>Open</Text>
          </TouchableOpacity>
        </View>
      )}
      {url !== "" && (
        <Webview url={url} />
      )}
      </SafeAreaView>
    );
}

export default App;
