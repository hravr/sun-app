import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import SvgUri from "react-native-svg-uri";
import s from "./Home.s";
import * as Location from "expo-location";
import axios from "axios";

const Home = (props) => {
  const [sun, setSun] = useState({});

  async function fetchData(lat, lng) {
    const res = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    setSun(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const currentLocation = async () => {
    let location = await Location.getCurrentPositionAsync();
    fetchData(location.coords.latitude, location.coords.longitude);
    setText("Current location");
  };

  const [text, setText] = useState("");
  const enteredLocation = async () => {
    const handleLocation = await Location.geocodeAsync(text);
    fetchData(handleLocation[0].latitude, handleLocation[0].longitude);
  };
  return (
    <ScrollView>
      <View style={s.mainContainer}>
        <Text style={s.title}>SUNSET AND SUNRISE TIMES</Text>
        <View style={s.searchContainer}>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="Enter a location"
              onChangeText={(text) => setText(text)}
              value={text}
              maxLength={20}
            />
            <TouchableOpacity onPress={enteredLocation} disabled={!text}>
              <View style={s.inputImageBox}>
                <Image
                  style={s.inputImage}
                  source={require("../../../assets/search.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={currentLocation} style={s.currBtn}>
          <Text style={s.currBtnText}>Use current location</Text>
        </TouchableOpacity>
        <Text style={s.sunText}>Sunrise and sunset times in {text}</Text>
        <SvgUri
          width="200"
          height="200"
          source={require("../../../assets/svg/sunrise.svg")}
        />

        <View>
          <Text style={s.sunText}>
            First light at:
            {!!sun.results && (
              <Text>
                {JSON.stringify(sun.results.astronomical_twilight_begin)}
              </Text>
            )}
          </Text>
          <Text style={s.text}>
            Sunrise time:
            {!!sun.results && (
              <Text style={s.sunRiseText}>
                {JSON.stringify(sun.results.sunrise)}
              </Text>
            )}
          </Text>
        </View>

        <SvgUri
          width="200"
          height="200"
          source={require("../../../assets/svg/sunset.svg")}
        />
        <View>
          <Text style={s.sunText}>
            Last light at:
            {!!sun.results && (
              <Text>
                {JSON.stringify(sun.results.astronomical_twilight_end)}
              </Text>
            )}
          </Text>
          <View>
            <Text style={s.text}>
              Sunset time:
              {!!sun.results && (
                <Text style={s.sunSetText}>
                  {JSON.stringify(sun.results.sunset)}
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
