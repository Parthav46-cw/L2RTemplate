import React, { Component, useRef, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import WebView from "react-native-webview";

type WVProps = {
    url: string
}

function Webview({url}:WVProps){
    const [currentUri, setUri] = useState(url);

    const getHeaders = () => {
        const webviewHeader =  { "isFromApp": "True", "isFromNewApp": "True" };
        return webviewHeader;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                source={{
                    uri: currentUri,
                    headers: getHeaders()
                }}
                allowsBackForwardNavigationGestures={true}
                sharedCookiesEnabled
                onMessage={ (data) => console.log(data) }
            />
        </SafeAreaView>
    )
}

export default Webview;