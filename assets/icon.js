import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const icons = {
    home: (props)=> <Entypo name='home' size={26} {...props} />,
    location: (props)=> <Entypo name='location-pin' size={26} {...props} />,
    history: (props)=> <Entypo name='help-with-circle' size={26} {...props} />,
    profile: (props)=> <FontAwesome name='user' size={26} {...props} />
}