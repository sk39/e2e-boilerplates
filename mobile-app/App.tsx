import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Animated, Easing, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from "axios";
import {observable} from "mobx";
import {observer} from "mobx-react";

const API_URL = `http://192.168.11.4:3333/api/`

@observer
export default class App extends React.Component<{}> {

  @observable processingName: string | null = null;
  @observable message: string | null = "ここにAPIの結果が表示されます";
  @observable spinVal = new Animated.Value(0);

  constructor(props: any) {
    super(props);
    this.testApi = this.testApi.bind(this);
    this.testErrorApi = this.testErrorApi.bind(this);
  }

  componentDidMount(): void {
    Animated.loop(Animated.timing(this.spinVal, {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear,
      useNativeDriver: true
    })).start();
  }

  async testApi() {
    try {
      this.message = "requesting..."
      this.processingName = 'test'
      const res = await axios.post(`${API_URL}test`)
      this.message = `Test API success. ${JSON.stringify(res.data.message)}`;
    } catch (res) {
      this.message = `Test API Failed. ${JSON.stringify(res.toJSON().message)}`;
    } finally {
      this.processingName = null
    }
  }

  async testErrorApi() {
    try {
      this.message = "requesting..."
      this.processingName = 'testError'
      const res = await axios.post(`${API_URL}test/error/400`)
      this.message = `Test API success. ${JSON.stringify(res.data.message)}`;
    } catch (res) {
      this.message = `Test API Failed. ${JSON.stringify(res.toJSON().message)}`;
    } finally {
      this.processingName = null
    }
  }

  render() {
    const spin = this.spinVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const defProps = (id: string) => {
      return {
        accessible: true,
        testID: id,
        accessibilityLabel: id
      }
    }
    return (
        <View {...defProps("app-root")} style={styles.container}>
          <StatusBar style="auto"/>
          <View>
            <Animated.Image
                style={[styles.logo, {transform: [{rotate: spin}]}]}
                source={require('@assets/logo.png')}
            />
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity
                {...defProps("api_test")}
                style={styles.btn}
                disabled={this.processingName != null}
                onPress={this.testApi}>
              <Text>API TEST</Text>
            </TouchableOpacity>
            <TouchableOpacity
                {...defProps("api_test_error")}
                style={styles.btn}
                disabled={this.processingName != null}
                onPress={this.testErrorApi}>
              <Text>API TEST ERROR</Text>
            </TouchableOpacity>
          </View>
          <View {...defProps("message_area")} style={styles.msgArea}>
            <Text
                {...defProps("message_content")}
                style={styles.text}>
              {this.message}
            </Text>
          </View>
          <View {...defProps("version_area")} style={styles.versionArea}>
            <Text
                {...defProps("version_content")}
                style={styles.version}>
              v0.4
            </Text>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea: {
    flexDirection: "row",
    padding: 32,
    marginTop: 44
  },
  btn: {
    width: "50%",
    height: 68,
    marginHorizontal: 8,
    backgroundColor: "#e8f5f6",
    alignItems: "center",
    justifyContent: "center"
  },
  msgArea: {
    height: 36,
    marginVertical: 36,
  },
  text: {
    color: "#61dafb"
  },
  logo: {
    width: 170,
    height: 170
  },
  versionArea: {
    position: "absolute",
    bottom: 22
  },
  version: {
    color: "#888",
    fontSize: 18
  }
});
