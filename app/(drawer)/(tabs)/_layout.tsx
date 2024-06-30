import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function TabsLayout() {
  return (
   <Tabs>
    <Tabs.Screen name="index"
     options={
        {
           tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            title:'Accueil',  
            headerTitle:"H",
            headerShown:false,
        }
    }/>
   </Tabs>
  )
}   
