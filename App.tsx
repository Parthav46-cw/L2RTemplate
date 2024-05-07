import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Webview from "./Webview";

const App = () => { 
  const [url, setUrl] = useState("");
  const [inp, setInput] = useState("");

  return (
      <>
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
      </>
    );
}

export default App;
