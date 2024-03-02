import { View,SafeAreaView } from 'react-native'
import React from 'react'
import { fontSize, margin, padding, styles, widthValue } from '../styles/Styles';
import { BarChart, LineChart } from 'react-native-chart-kit';
import Svg, { Rect, Text } from 'react-native-svg';

 export const RNChartsKit = () => {
  const [tooltip,setToolTip] = useState({x:0,y:0,visible:false,value:0})

  const barData = {
    labels:['jan','feb','mar','april','may','june'],
    datasets :[
      {
        data:[100,90,40,50,80,30]
      }
    ]
      }
/* 
     example of ChartConfig

    //   const chartConfig = {
    //     backgroundGradientFrom: "skyblue",
    //     backgroundGradientFromOpacity: .4,
    //     backgroundGradientTo: "gray",
    //     backgroundGradientToOpacity: 0.5,
    //     color: () => `rgba(0, 0, 0, 1)`,
    //     barPercentage:.5,
    //   }
 */


//decorator function
    const decoratorFun = () => {
        return (
          tooltip.visible?
          <View>
            <Svg>
              <Rect x={tooltip.x -15} y={tooltip.y +10} width="50" height="30" fill="whitesmoke" />
              <Text x={tooltip.x+5} y={tooltip.y +30} fill="black" fontSize="16" textAnchor="middle" >
              {tooltip.value}
              </Text>
            </Svg>
          </View> :null
        );
      };
      // end of decorator function

  return (
    <SafeAreaView>
    <View>
      <Text style={[margin(10),fontSize(25),styles.black,styles.textCenter]}> React Native Chart Kit - Bar Chart</Text>
      <BarChart
      data={barData}
      width={380}
      height={250}
      chartConfig={{
        backgroundGradientFrom: "skyblue",
          backgroundGradientFromOpacity: .4,
          backgroundGradientTo: "gray",
          backgroundGradientToOpacity: 0.5,
          color: () => `rgba(0, 0, 0, 1)`,
          barPercentage:.5,
          barRadius:10,
      }}
      yAxisSuffix={'%'}
      fromZero={true}
      yAxisInterval={15}
      withHorizontalLabels={true}
      withVerticalLabels={true}
      withInnerLines={false}
      horizontalLabelRotation={-20}
      verticalLabelRotation={-10}
      segments={6}
      style={{
        alignItems:'center',
        borderRadius:10,
        padding:30,
        backgroundColor:'white',
      }}
      showValuesOnTopOfBars={true}
      showBarTops={false}
    
      />
    </View>
    <View>
      <Text style={[margin(10),fontSize(25),styles.black,styles.textCenter]}> React Native Chart Kit - Line Chart</Text>
      <LineChart  
      data={barData} 
      width={380} 
      height={350} 
      chartConfig={{
        backgroundGradientFrom:'gray',
        backgroundGradientTo:'skyblue',
        color:()=>'rgba(0,0,0,1)',
        strokeWidth:2,
        propsForDots: {
          r: "5",
          strokeWidth: "2",
          stroke: "white"
        },
        fillShadowGradient:true,
        fillShadowGradientFrom:'red',
        fillShadowGradientTo:'orange',
        fillShadowGradientFromOffset:1,
        fillShadowGradientToOffset:.6,
        useShadowColorFromDataset:false
      }
      }
      withDots={true}
      withInnerLines={true}
      withOuterLines={true}
      withShadow={true}  
      withHorizontalLines={false}
      withVerticalLines={true}
      yAxisInterval={10}
      // hidePointsAtIndex={[0,2,4]}
      style={{
        alignItems:'center',
        borderRadius:10,
      }}
    
      onDataPointClick={
        (barData)=>{
        //check if we clicked the same Point again 
        const isSamePoint = (tooltip.x === barData.x && tooltip.y === barData.y)
        //if we clicked the same point again toggle visibility
        isSamePoint ? setToolTip((prevState)=>{
          return {
            ...prevState,
            value:barData.value,
            visible:!prevState.visible
          }
        }): setToolTip({x:barData.x,value:barData.value,y:barData.y,visible:true})
      }}
      decorator={()=>decoratorFun()}
      />
    </View>
    </SafeAreaView>
  )
}
