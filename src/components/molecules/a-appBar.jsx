import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import React from 'react';
import Aicon from '../atoms/a-icon';
import AText from '../atoms/a-text';

const TouchButton = props => {
  var {onPress, color, icontype} = props;
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}
    >
      <View
        style={[
          props.btnStyle,
          {
            padding: 6,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Aicon
          color={color ? color : '#000'}
          style={[props.iconStyle, {marginLeft: -1.5}]}
          type={icontype}
          {...props}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
export default function AappBar(props) {
  function onPress() {
    var {backable} = props;
    if (backable != undefined) {
      backable.props.navigation.goBack();
    } else {
      props.onPress();
    }
  }
  function renderLeft() {
    const {
      backable,
      size,
      iconColor,
      btnStyle,
      iconStyle,
      onBackCustom,
      icontype,
      icon,
      textColor,
      parent,
    } = props;
    return (
      <View style={styles.lefCont}>
        {backable && (
          <TouchButton
            onPress={() => this.onPress()}
            name="keyboard-arrow-left"
            size={30}
            color={textColor}
          />
        )}
        {onBackCustom && (
          <TouchButton
            btnStyle={btnStyle}
            iconStyle={iconStyle}
            onPress={onBackCustom}
            name={icon ? icon : 'keyboard-arrow-left'}
            size={size ? size : 30}
            color={iconColor ? iconColor : textColor}
            icontype={icontype}
          />
        )}
        {parent && (
          <View>
            {/* <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
              }}
              source={require('../../assets/images/logos/collection-logo1.png')}
            /> */}
          </View>
        )}
      </View>
    );
  }
  function renderCenter() {
    const {title, textColor, backable} = props;
    var routeName = '';
    if (backable != undefined) routeName = backable.props.route.name;

    var styled = [
      styles.centext,
      {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        color: textColor ? textColor : 'grey',
      },
    ];
    return (
      <View style={styles.centCont}>
        <AText style={styled}>{title ? title : routeName}</AText>
      </View>
    );
  }

  function renderRight() {
    const {
      onPress,
      iconRight,
      onRight,
      icontype,
      textColor,
      filter,
      notif,
    } = props;
    return (
      <View style={styles.rightCont}>
        {onRight && (
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchButton
              onPress={onRight}
              name={iconRight}
              size={20}
              color={textColor}
              // icontype={icontype}
							{...props}
            />
          </View>
        )}
        {filter && (
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchButton
              onPress={filter}
              name="filter-list"
              size={26}
              color={textColor}
            />
          </View>
        )}
        {notif && (
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={styles.rightNotif}>
              <Aicon name="circle" size={12} color="#FF7B78" />
            </View>
            <TouchButton
              onPress={onPress}
              name="notifications-none"
              size={26}
              color={textColor}
            />
          </View>
        )}
      </View>
    );
  }

  var styled = [
    styles.container,
    {
      borderBottomWidth: props.bordered ? 1 : 0,
      borderColor: 'rgba(0,0,0,.05)',
      backgroundColor: props.bg,
    },
  ];
  return (
    <>
      <View style={styled}>
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
      </View>
      {props.children}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  lefCont: {
    width: 100,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  lefBtn: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centCont: {
    flex: 1,
    alignItems: 'center',
  },
  centext: {
		// backgroundColor:'red',
		// width:'100%',
		// marginHorizontal:20
	},
  rightCont: {
    width: 100,
    paddingRight: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightNotif: {
    position: 'absolute',
    top: 5,
    left: 8,
    zIndex: 1,
  },
});
