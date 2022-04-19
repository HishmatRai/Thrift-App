import React, { useState } from 'react';
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
  Modal
} from 'react-native';
import Header from './../../components/header';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import BarGraph from '../../components/barGraph';
import ExpensesChart from '../../components/expensesChart';
const screens = Dimensions.get('window');
let SmartFi = () => {
  let [activeTab, setActiveTab] = useState('investment');
  let [selectedFilter, setSelectedFilter] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  let [chartType, setChartType] = useState("Bar")
  let FilterData = [{ title: 'Wk' }, { title: 'Mn' }, { title: 'Yr' }];
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
  let ExpensesCard = [
    {
      iconType: "up",
      name: "N",
      heading: "Now Payments",
      date: "28 Apr 2020",
      price: "-200 Ada"
    },
    {
      iconType: "down",
      name: "C",
      heading: "Cardono Wallet",
      date: "10 Mar 2020",
      price: "+50 Ada"
    }
  ]
  let PaymentButton = [
    {
      title: "Rent Payment",
      bgColor: "#f86f34"
    },
    {
      title: "Entertainment",
      bgColor: "#005cee"
    },
    {
      title: "Untility",
      bgColor: "#ffb731"
    },
    {
      title: "Tuition",
      bgColor: "#f563bb"
    },
    {
      title: "Groceries",
      bgColor: "#1ed37c"
    },
  ]
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
        {chartType === 'Pie' &&
          <View style={styles._pie_setting}>
            {activeTab === 'investment' &&
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="settings" size={20} color="#2f80ed" />
              </TouchableOpacity>
            }
          </View>
        }
        {chartType === 'Bar' && (
          <View style={styles._new_worth_main}>
            {activeTab === 'investment' &&
              <>
                <Text style={styles._new_worth_heading}>Net Worth:</Text>
                <Text style={styles._new_worth_price}>$452</Text>
                <View style={styles._new_worth_percentage_main}>
                  <AntDesign name="caretup" size={16} color="green" />
                  <Text style={styles._new_worth_percentage}>15%</Text>
                </View>
              </>
            }
          </View>
        )}
        {chartType === 'Bar' && (
          <View style={styles._filter_main}>
            {activeTab === 'investment' &&
              <>
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
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Feather name="settings" size={20} color="#2f80ed" />
                  </TouchableOpacity>
                </View>
              </>
            }
          </View>
        )}

        {activeTab === 'expenses' &&
          <View style={styles._expenses_data_main}>
            <View style={styles._summery_show_mian}>
              <View>
                <Text style={styles._summery_heading}>
                  Expenses Summary
                </Text>
                <Text style={styles._summery_date}>01 Mar 2021 - 16 mar 2021</Text>
                <View>
                  <ExpensesChart />
                </View>
              </View>
            </View>
            <View style={styles._payment_btn_main}>
              {PaymentButton.map((paymentValue, paymenetIndex) => {
                return (
                  <TouchableOpacity key={paymenetIndex} style={[styles._payment_btn, { backgroundColor: paymentValue.bgColor }]}>
                    <Text>{paymentValue.title}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
            <View style={styles._in_out_main}>
              <Text style={styles._in_out}>In & Out</Text>
              <View style={styles._expenses_data_icons_main}>
                <TouchableOpacity>
                  <Feather name="arrow-down-circle" size={20} color="#4fac7a" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                  <Feather name="arrow-up-circle" size={20} color="#db3a3a" />
                </TouchableOpacity>
              </View>
            </View>
            {ExpensesCard.map((expensesValue, expensesIndex) => {
              return (
                <View style={styles._expenses_card_main} key={expensesIndex}>
                  <View style={styles._expenses_card_icon_main}>
                    {expensesValue.iconType === "up" &&
                      <AntDesign name="arrowup" size={20} color="#db3a3a" />
                    }
                    {expensesValue.iconType === "down" &&
                      <AntDesign name="arrowdown" size={20} color="#4aa977" />
                    }
                    <View style={styles._expenses_card_name_main}>
                      <Text style={styles._expenses_card_name}>{expensesValue.name}</Text>
                    </View>
                    <View>
                      <Text style={styles._expenses_card_heading}>{expensesValue.heading}</Text>
                      <Text style={styles._expenses_card_date}>{expensesValue.date}</Text>
                    </View>
                  </View>
                  <Text style={[styles.__price, { color: expensesValue.iconType === "up" ? "#db3a3a" : "#4aa977" }]}>{expensesValue.price}</Text>
                </View>
              )
            })}

          </View>
        }
        {chartType === 'Bar' &&
          <>
            {activeTab === 'investment' &&
              <BarGraph />
            }
          </>
        }
        {activeTab === 'investment' && (
          <>

            <Text style={styles._heading}>Start Target Goals</Text>
            <ImageBackground
              source={require('./../../images/goals.png')}
              style={styles._goals_image}>
              <View style={styles._goals_data_main}>
                <Text style={styles._goals_heading}>Create a goal!</Text>
                <Text style={styles._goals_des}>
                  Stay motivated and{'\n'}meet you futured{'\n'}goals
                </Text>
                <View style={styles._goals_btn_main}>
                  <TouchableOpacity style={styles._goals_btn}>
                    <Text style={styles._goals_btn_text}>View Savings</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._goals_btn}>
                    <Text style={styles._goals_btn_text}>Create Target</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </>
        )}
        {activeTab === 'income' &&
          <View>
            <View style={styles._income_data_main}>
              <Text>Total Earning</Text>
              <Text>$12,875</Text>
              <Text>10%</Text>
            </View>
          </View>
        }
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
                                { width: sliderValue.per },
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
        <View style={{ paddingBottom: 20 }} />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles._model_heading}>Select Chart Style</Text>
            <TouchableOpacity onPress={() => setChartType("Bar")} style={styles._select_chart_btn}>
              <View style={styles._radio_btn}>
                {chartType === "Bar" &&
                  <View style={styles._selected_radio_btn} />
                }
              </View>
              <Text style={styles._chart_title}>Bar Chart</Text>
              <Entypo name="bar-graph" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChartType("Pie")} style={styles._select_chart_btn}>
              <View style={styles._radio_btn}>
                {chartType === "Pie" &&
                  <View style={styles._selected_radio_btn} />
                }
              </View>
              <Text style={styles._chart_title}>Pie Chart</Text>
              <Entypo name="pie-chart" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles._model_btn_mian}>
              <TouchableOpacity style={styles._model_cancel_btn} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles._model_cancel_btn_text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles._model_confirm_btn} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles._model_confirm_btn_text}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    height: 15,
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
  _goals_image: {
    height: 174,
    marginTop: 20
  },
  _goals_data_main: {
    padding: 10,
  },
  _goals_heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  _goals_des: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  _goals_btn_main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35
  },
  _goals_btn: {
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingVertical: 5,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  _goals_btn_text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  _in_out: {
    color: "#000",
    fontSize: 16
  },
  _expenses_data_main: {
    marginTop: 30
  },
  _expenses_data_icons_main: {
    flexDirection: "row"
  },
  _in_out_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  _expenses_card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  _expenses_card_icon_main: {
    flexDirection: "row",
    alignItems: "center"
  },
  _expenses_card_name_main: {
    backgroundColor: "#eef2f8",
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  _expenses_card_name: {
    color: "#005cee",
    fontWeight: "bold",
    fontSize: 16
  },
  _expenses_card_heading: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  _expenses_card_date: {
    color: "gray",
    fontSize: 13
  },
  __price: {
    fontSize: 16
  },
  _payment_btn_main: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30
  },
  _payment_btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginRight: 10,
    marginTop: 10
  },
  _summery_show_mian: {
  },
  _summery_heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20
  },
  _summery_date: {
    color: "gray",
    fontSize: 10,
    marginBottom: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    width: "70%",
    elevation: 3,
    paddingVertical: 10

  },
  _model_heading: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10
  },
  _chart_title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  _select_chart_btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },
  _radio_btn: {
    borderWidth: 1,
    borderColor: "#3e83f2",
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  _selected_radio_btn: {
    backgroundColor: "#3e83f2",
    width: 15,
    height: 15,
    borderRadius: 15 / 2
  },
  _model_btn_mian: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  _model_cancel_btn: {
    backgroundColor: "#eef2f8",
    borderRadius: 100,
    width: "45%",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  _model_cancel_btn_text: {
    color: "#000",
    fontSize: 14
  },
  _model_confirm_btn: {
    backgroundColor: "#005cee",
    borderRadius: 100,
    width: "45%",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  _model_confirm_btn_text: {
    color: "#fff",
    fontSize: 14
  },
  _pie_setting: {
    marginTop: 30,
    alignSelf: "flex-end"
  },
  _income_data_main: {
    marginTop: 30,
    backgroundColor: "red"
  }
});
export default SmartFi;
