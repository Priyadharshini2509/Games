import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children,onPress }) {

    return (
        <View style={style.buttonOutercontainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? [style.buttoncontainer, style.pressed]
                        : style.buttoncontainer}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }} >
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View >
    );
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonOutercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttoncontainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorirzontal: 16,
        elevation: 2,
        // fontSize:'bold'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});