import { View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import Dashboard from './js/screens/dashboard/Dashboard'
// import {VictoryChart,VictoryBar,VictoryTheme} from 'victory-native'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLabel, VictoryLegend, VictoryLine, VictoryTheme, VictoryTooltip } from "victory-native";
import { useFont } from '@shopify/react-native-skia';
import { fontSize, margin, padding, styles, widthValue } from './js/styles/Styles';
import Ubuntu from './js/assets/Fonts/Ubuntu-Light.ttf';
import { BarChart, LineChart } from 'react-native-chart-kit';
import Svg, { Rect, Text } from 'react-native-svg';
import { StackNavigation } from './js/navigation/StackNavigation';


const App = () => {

  // const [tooltip,setToolTip] = useState({x:0,y:0,visible:false,value:0})

  //   const barData = {
  //     labels:['jan','feb','mar','april','may','june'],
  //     datasets :[
  //       {
  //         data:[100,90,40,50,80,30]
  //       }
  //     ]
  //       }
  //   const chartConfig = {
  //     backgroundGradientFrom: "skyblue",
  //     backgroundGradientFromOpacity: .4,
  //     backgroundGradientTo: "gray",
  //     backgroundGradientToOpacity: 0.5,
  //     color: () => `rgba(0, 0, 0, 1)`,
  //     barPercentage:.5,
  //   }

// const data = {
//   labels:['jan','feb','mar','april','may','june'],
//   datasets :[
//     {
//       data:[100,90,40,50,80,30]
//     }
//   ]
// }


// const decoratorFun = ()=>{
//   return (  
//   <View>
//   <Svg height='200' width='200'>
//   <Rect x='80' y='110' width='50' height='30' fill='papayawhip'/>
// <Text x='80' y='120' fill='black' fontSize='16' textAnchor='middlle'>
//     0.0
// </Text>
// </Svg>
//   </View>
//   )
// }


// const decoratorFun = () => {
//   return (
//     tooltip.visible?
//     <View>
//       <Svg>
//         <Rect x={tooltip.x -15} y={tooltip.y +10} width="50" height="30" fill="whitesmoke" />
//         <Text x={tooltip.x+5} y={tooltip.y +30} fill="black" fontSize="16" textAnchor="middle" >
//         {tooltip.value}
//         </Text>
//       </Svg>
//     </View> :null
//   );
// };


  return (
<StackNavigation />
  )
}

export default App