import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
    { label: 'E1 정문', value: 'E1' },
    { label: 'E2 산업경영학동', value: 'E2' },
    { label: 'E2-1 지식서비스공학과 수리과학과', value: 'E2-1' },
    { label: 'E2-2 산업/시스템공학과', value: 'E2-2' },
    { label: 'E3 정보전자공학동', value: 'E3' },
    { label: 'E3-1 전산학과', value: 'E3-1' },
    { label: 'E3-2 전기및전자공학과', value: 'E3-2' },
    { label: 'E3-3 미래융합소자동', value: 'E3-3' },
    { label: 'E3-4 반도체동', value: 'E3-4' },
    { label: 'E4 KI빌딩', value: 'E4' },
    { label: 'E5 교직원회관', value: 'E5'},
    { label: 'E6 자연과학동', value: 'E6'},
    { label: 'E6-1 수리과학과', value: 'E6-1'},
    { label: 'E6-2 물리학과', value: 'E6-2'},
    { label: 'E6-3 생명과학과', value: 'E6-3'},
    { label: 'E6-4 화학과', value: 'E6-4'},
    { label: 'E6-5 궁리실험관', value: 'E6-5'},
    { label: 'E6-6 기초과학동', value: 'E6-6'},
    { label: 'E7 의과학연구센터', value: 'E7'},
    { label: 'E8 세종관', value: 'E8'},
    { label: 'E9 중앙도서관', value: 'E9'},
    { label: 'E10 중앙창고', value: 'E10'},
    { label: 'E11 창의학습관', value: 'E11'},
    { label: 'E12 중앙기계실', value: 'E12'},
    { label: 'E13 인공위성연구센터', value: 'E13'},
    { label: 'E14 본관', value: 'E14'},
    { label: 'E15 대강당', value: 'E15'},
    { label: 'E16 정문술빌딩', value: 'E16'},
    { label: 'E17 운동장', value: 'E17'},
    { label: 'E18 바이오모델', value: 'E18'},
    { label: 'E19 KAIST부설 나노종합기술원', value: 'E19'},
    { label: 'E20 계룡관', value: 'E20'},
    { label: 'E21 카이스트 클리닉', value: 'E21'},
    { label: 'W1 응용공학동', value: 'W1'},   
    { label: 'W2 학생회관-1', value: 'W2'},
    { label: 'W2-1 인터내셔널센터', value: 'W2-1'},
    { label: 'W3 갈릴레이관', value: 'W3'},
    { label: 'W4-1 여울관', value: 'W4-1'},
    { label: 'W4-2 나들관', value: 'W4-2'},
    { label: 'W4-3 다솜관', value: 'W4-3'},
    { label: 'W4-4 희망관', value: 'W4-4'},
    { label: 'W5 원내아파트, international village', value: 'w5'},
    { label: 'w6 미르관, 나래관', value: 'w6'},
    { label: 'w7 나눔관', value: 'w7'},   
    { label: 'w8 교육지원동', value: 'w8'},
    { label: 'w9 노천극장', value: 'w9'},
    { label: 'w10 풍동실험관', value: 'w10'},
    { label: 'w11 외국인교수아파트', value: 'w11'},
    { label: 'w12 서측기계실', value: 'w12'},
    { label: 'w16 지오센트리퓨지 실험동', value: 'w16'},
    { label: 'N0 동문', value: 'N0'},
    { label: 'N1 IT융합빌딩', value: 'N1'},
    { label: 'N2 행정분관', value: 'N2'},
    { label: 'N3 스포츠 컴플렉스', value: 'N3'},
    { label: 'N4 인문사회과학부동', value: 'N4'},
    { label: 'N5 기초실험연구동', value: 'N5'},
    { label: 'N6 교수회관', value: 'N6'},
    { label: 'N7 기계공학동', value: 'N7'},
    { label: 'N7-1 원자력및양자공학과', value: 'N7-1'},
    { label: 'N7-2 항공우주공학전공', value: 'N7-2'},
    { label: 'N7-3 기계공학전공', value: 'N7-3'},
    { label: 'N7-5 자동차기술대학원 실험동', value: 'N7-4'},
    { label: 'N9 실습동', value: 'N9'},
    { label: 'N10 교양분관', value: 'N10'},
    { label: 'N11 학생회관', value: 'N11'},
    { label: 'N12 학생회관-2', value: 'N12'},
    { label: 'N13 태울관', value: 'N13'},
    { label: 'N14 사랑관', value: 'N14'},
    { label: 'N15 교직원숙소', value: 'N15'},
    { label: 'N16 소망관', value: 'N16'},
    { label: 'N17 성실관', value: 'N17'},
    { label: 'N18 진리관', value: 'N18'},
    { label: 'N19 아름관', value: 'N19'},
    { label: 'N20 신뢰관', value: 'N20'},
    { label: 'N21 지혜관', value: 'N21'},
    { label: 'N22 동문창업관', value: 'N22'},
    { label: 'N23 f MRI센터/뇌과학기술', value: 'N23'},
    { label: 'N24 LG세미콘홀', value: 'N24'},
    { label: 'N25 산업디자인학과동', value: 'N25'},
    { label: 'N26 고성능집적시스템', value: 'N26'},
    { label: 'N27 유레카관', value: 'N27'},
    { label: 'N28 에너지 환경연구센터', value: 'N28'},
];

const OrderPlaceDropDown = ({setPlace}) => {

    const [value, setValue] = useState(null);

    const renderItem = (item) => {
      return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            {item.value === value && (<Ionicons style={styles.icon} color="black" name="checkmark" size={20}/>)}
        </View>
    );
};

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="건물을 선택해주세요"
        searchPlaceholder="검색어를 입력하세요"
        value={value}
        onChange={item => {
          setValue(item.value);
          setPlace(item.value);
        }}
        renderLeftIcon={() => (
          <Ionicons style={styles.icon} color="black" name="checkmark" size={20} />)}
        renderItem={renderItem}
      />
    );
  };
  export default OrderPlaceDropDown;

const styles = StyleSheet.create({
    dropdown: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      height: 50,
      width:'90%',
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });