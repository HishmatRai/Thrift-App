import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Header from './../../components/header';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
const screens = Dimensions.get('window');
let SmartFi = () => {
  let [activeTab, setActiveTab] = useState('investment');
  let [selectedFilter, setSelectedFilter] = useState(0);
  let FilterData = [{title: 'Wk'}, {title: 'Mn'}, {title: 'Yr'}];
  let Slider2Card = [
    {
      imagePath: require('./../../images/slider4.png'),
      title: 'Phone Budget',
      per: '50%',
    },
    {
      imagePath: require('./../../images/slider5.png'),
      title: 'Pay Rent',
      per: '50%',
    },
    {
      imagePath: require('./../../images/slider3.png'),
      title: 'Travel Fund',
      per: '50%',
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
        barStyle="dark-content"
      />
      <Header
        backHandler={() => alert('comming soon')}
        headerTitle="Smart FI"
      />
      <ScrollView>
        <View style={styles._header_tips_mian}>
          <Text style={styles._tips_heading}>Tips & Tricks</Text>
          <TouchableOpacity>
            <Text style={styles._view_all}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <ImageBackground
              source={require('./../../images/slider2.png')}
              style={styles._slider_image}>
              <View style={styles._card_data_main}>
                <Text style={styles._card_data}>
                  Habits that will{'\n'}increase you{'\n'}savings!
                </Text>
                <View style={styles._card_time_main}>
                  <AntDesign name="clockcircleo" size={16} color="#fff" />
                  <Text style={styles._card_time}>3 min read</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('./../../images/slider1.png')}
              style={styles._slider_image}>
              <View style={styles._card_data_main}>
                <Text style={styles._card_data}>
                  How much money{'\n'}should you{'\n'}set adide?
                </Text>
                <View style={styles._card_time_main}>
                  <AntDesign name="clockcircleo" size={16} color="#fff" />
                  <Text style={styles._card_time}>3 min read</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles._tabs_main}>
          <TouchableOpacity
            style={
              activeTab === 'investment' ? styles._active_tab : styles._tab
            }
            onPress={() => setActiveTab('investment')}>
            <Text
              style={
                activeTab === 'investment'
                  ? styles._active_tab_text
                  : styles._tab_text
              }>
              investment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 'expenses' ? styles._active_tab : styles._tab}
            onPress={() => setActiveTab('expenses')}>
            <Text
              style={
                activeTab === 'expenses'
                  ? styles._active_tab_text
                  : styles._tab_text
              }>
              expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 'income' ? styles._active_tab : styles._tab}
            onPress={() => setActiveTab('income')}>
            <Text
              style={
                activeTab === 'income'
                  ? styles._active_tab_text
                  : styles._tab_text
              }>
              income
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'investment' && (
          <View style={styles._new_worth_main}>
            <Text style={styles._new_worth_heading}>Net Worth:</Text>
            <Text style={styles._new_worth_price}>$452</Text>
            <View style={styles._new_worth_percentage_main}>
              <AntDesign name="caretup" size={16} color="green" />
              <Text style={styles._new_worth_percentage}>15%</Text>
            </View>
          </View>
        )}
        {activeTab === 'investment' && (
          <View style={styles._filter_main}>
            <View>
              <Text style={styles._filter_heading}>This Week</Text>
              <Text style={styles._filter_percentage}>2.5%</Text>
            </View>
            <View style={styles._filter_show_main}>
              {FilterData.map((v, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setSelectedFilter(i)}
                    style={
                      selectedFilter === i
                        ? styles._selected_filter
                        : styles._filter
                    }>
                    <Text
                      style={
                        selectedFilter === i
                          ? styles._selected_filter_title
                          : styles._filter_title
                      }>
                      {v.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity>
                <Feather name="settings" size={20} color="#2f80ed" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {activeTab === 'investment' && (
          <Text style={styles._heading}>Start Target Goals</Text>
        )}
        {activeTab !== 'expenses' && (
          <>
            <Text style={styles._heading}>My Goal Reminders</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Slider2Card.map((sliderValue, sliderIndex) => {
                return (
                  <TouchableOpacity key={sliderIndex}>
                    <ImageBackground
                      source={sliderValue.imagePath}
                      style={styles._slider2_image}>
                      <View style={styles._slider2_data_main}>
                        <Text style={styles._slider2_title}>
                          {sliderValue.title}
                        </Text>
                        <View>
                          <View style={styles._percentage_main}>
                            <View
                              style={[
                                styles._percentage_done,
                                {width: sliderValue.per},
                              ]}>
                              <Text style={styles._percentage_done_show}>
                                {sliderValue.per}
                              </Text>
                            </View>
                          </View>
                          <Text style={styles._date}>31 Mar 2020</Text>
                          <TouchableOpacity style={styles._add_funds_btn}>
                            <Text style={styles._add_funds_btn_text}>
                              Add funds
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  _header_tips_mian: {
    backgroundColor: '#f8f8f8',
    marginTop: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  _tips_heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  _view_all: {
    color: '#000',
    fontSize: 13,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  _slider_image: {
    width: screens.width - 70,
    height: 150,
    marginRight: 15,
    marginTop: 20,
  },
  _slider2_image: {
    width: screens.width - 225,
    height: 190,
    marginRight: 15,
    marginTop: 20,
  },
  _card_data_main: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  _card_data: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  _card_time_main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _card_time: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  _tabs_main: {
    backgroundColor: '#e9eeff',
    marginTop: 30,
    borderRadius: 100,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  _active_tab: {
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 100,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _active_tab_text: {
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  _tab: {
    backgroundColor: '#e9eeff',
    borderRadius: 100,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _tab_text: {
    color: 'gray',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  _new_worth_main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  _new_worth_heading: {
    color: 'gray',
    fontSize: 14,
  },
  _new_worth_price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  _new_worth_percentage_main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  _new_worth_percentage: {
    color: 'green',
    fontSize: 14,
  },
  _filter_main: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _filter_heading: {
    color: 'gray',
    fontSize: 16,
  },
  _filter_percentage: {
    color: 'green',
    fontSize: 16,
  },
  _selected_filter: {
    backgroundColor: '#2f80ed',
    borderRadius: 5,
    paddingVertical: 3,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  _filter: {
    backgroundColor: '#e8f1fd',
    borderRadius: 5,
    paddingVertical: 3,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  _filter_show_main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _selected_filter_title: {
    color: '#fff',
    fontSize: 16,
  },
  _filter_title: {
    color: '#738aa9',
    fontSize: 16,
  },
  _heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  _slider2_title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
  },
  _slider2_data_main: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  _percentage_main: {
    backgroundColor: '#bebee3',
    height: 15,
    borderRadius: 100,
  },
  _percentage_done: {
    backgroundColor: '#4ebd7d',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _percentage_done_show: {
    color: '#fff',
    fontSize: 10,
  },
  _date: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 2,
  },
  _add_funds_btn: {
    backgroundColor: '#edf4fd',
    borderRadius: 100,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  _add_funds_btn_text: {
    color: 'gray',
    fontSize: 12,
    paddingVertical: 3,
  },
});
export default SmartFi;
