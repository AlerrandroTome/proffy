import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface TeacherItemProps {
}

const TeacherItem: React.FC<TeacherItemProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: "https://avatars.githubusercontent.com/u/53446642?v=4" }} />
                
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Alerrandro Tomé</Text>
                    <Text style={styles.subject}>History</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{'\n'}{'\n'} Inventore iste, similique odit voluptates veritatis natus mollitia ut officiis beatae ab, excepturi deleniti illum aliquam nisi sit reiciendis a suscipit ducimus? Blanditiis aperiam consequatur nisi iure soluta enim sed dolorum hic facilis nemo cupiditate iste odio commodi modi, voluptas quaerat sint?
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Hour {'   '}
                    <Text style={styles.priceValue}>USD 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </TouchableOpacity>                    
                    <TouchableOpacity style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Get in touch</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;