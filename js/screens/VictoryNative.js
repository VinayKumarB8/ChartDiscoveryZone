import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLabel, VictoryLegend, VictoryLine, VictoryTheme, VictoryTooltip } from "victory-native";
import { fontSize, margin, padding, styles, widthValue } from '../styles/Styles';

 export const VictoryNative = () => {

    const data1=[
        {x:1,y:4,label:'Feb 2'},
        {x:2,y:6,label:'feb 3'},
        {x:3,y:12,label:'feb 4'},
        {x:4,y:14,label:'feb 5'},
        {x:5,y:20,label:'feb 5'},
        ]
     const data2=[
        {x:1,y:10,label:'Feb 2'},
        {x:2,y:2,label:'Feb 3'},
        {x:3,y:18,label:'Feb 4'},
        {x:4,y:6,label:'Feb 5'},
        {x:5,y:3,label:'Feb 5'},
        ]
     const barData1=[
        {x:1,y:10,label:'Feb 2'},
        {x:2,y:2,label:'Feb 3'},
        {x:3,y:18,label:'Feb 4'},
        {x:4,y:6,label:'Feb 5'},
        {x:5,y:3,label:'Feb 5'},
        ]
    
  return (
        <SafeAreaView style={[{ height: 300 ,width:widthValue(1)},padding(0,10,0)]}>
      <Text style={[styles.textCenter,margin(0,20,0),styles.black,fontSize(20),{fontWeight:600}]}> Victory Native Month Comparison</Text>
      <View>
      <VictoryChart  
      theme={VictoryTheme.material}
      domainPadding={{x:10,y:20}}
      containerComponent={<VictoryContainer/>}
      // minDomain={{x:1}}
      // maxDomain={{x:5}}
      >
        <VictoryAxis 
        orientation='bottom' 
        tickValues={barData1.map(item=>item.x).reverse()}/>
        <VictoryAxis 
        orientation='top' 
        tickFormat={[]}
        style={{
          ticks:{stroke:'transparent'}}}
        />
        <VictoryAxis 
        range={{x:30}}
        dependentAxis
        orientation='left'
        axisLabelComponent={<VictoryLabel dy={-20}/>}
        label={'Current Month Consumption'}
        style={{
          axisLine: { stroke: "transparent" },
          ticks:{stroke:'transparent'}}
}
        tickValues={[0,4,8,12,16,20,24]}
       />
        <VictoryAxis 
        dependentAxis
        label={'Previous Month Consumption'}
        orientation='right'
        axisLabelComponent={<VictoryLabel dy={10}/>}
        style={{
          ticks:{stroke:'transparent'}
        }}
        tickValues={[0,3,6,9,12,15,18]} />

    <VictoryBar 
      labels={({datum})=>datum.y}
      labelComponent={
      <VictoryLabel text={({datum})=>datum.y} data={data1} dy={20} backgroundStyle={{fill:'#67d4f0',boxShadow:10}} backgroundPadding={{left:8,top:5,right:8,bottom:5}} textAnchor={'middle'}/>}
      data={data1}
      style={{data:{fill:'#4ed2f3'},labels:{fill:'white',fontSize:14}}}
      alignment='middle'
      />
      <VictoryTooltip renderInPortal={false} flyoutHeight={100} />
      <VictoryLine 
      padding={{left:0,right:0}}
      labels={({datum})=>datum.y}  
      labelComponent={<VictoryLabel renderInPortal={false} text={({datum})=>datum.y} backgroundStyle={{fill:'#eda458'}} backgroundPadding={{left:5,right:5,top:5,bottom:5}}/>}
      data={data2}
      style={{data:{stroke:'#ffa857'},labels:{fill:'white'}}}
      interpolation={'cardinal'}/>
       <VictoryLegend title={''} orientation='horizontal' gutter={30} data={[{name:'March 2024',symbol:{fill:'#4ed2f3'}},{name:'Feb 2024',symbol:{fill:'#eda458'}}]} style={{data:{margin:100}}}/>
      </VictoryChart>
      </View>
      <Text style={[styles.textCenter,margin(0,20,0),styles.black,fontSize(20),{fontWeight:600}]}> Victory Native With ToolTip</Text>
      <View>
      <VictoryChart  
      theme={VictoryTheme.material}
      domainPadding={{x:10,y:20}}
      containerComponent={<VictoryContainer/>}>
        <VictoryAxis 
        orientation='bottom' 
        tickValues={data1.map(item=>item.x).reverse()}/>
        <VictoryAxis 
        orientation='top' 
        tickFormat={[]}
        style={{
          ticks:{stroke:'transparent'}}}
        />
        <VictoryAxis 
        range={{x:30}}
        dependentAxis
        orientation='left'
        axisLabelComponent={<VictoryLabel dy={-20}/>}
        label={'Current Year Consumption'}
        style={{
          axisLine: { stroke: "transparent" },
          ticks:{stroke:'transparent'}}
}
        tickValues={[0,4,8,12,16,20,24]}
       />
        <VictoryAxis 
        dependentAxis
        label={'Previous Year Consumption'}
        orientation='right'
        axisLabelComponent={<VictoryLabel dy={20}/>}
        style={{
          ticks:{stroke:'transparent'}
        }}
        tickValues={[0,3,6,9,12,15,18]} />

    <VictoryBar 
      labels={({datum})=>datum.y}
      labelComponent={<VictoryTooltip renderInPortal={false}/>}
            data={data2}
      style={{data:{fill:'#4ed2f3'},labels:{fill:'black',fontSize:14}}}
      alignment='middle'
      />
      <VictoryTooltip renderInPortal={false} flyoutHeight={100} />
      <VictoryLine 
      padding={{left:0,right:0}}
      labels={({datum})=>datum.y}  
      labelComponent={<VictoryTooltip renderInPortal={false} />}
      data={data1}
      style={{data:{stroke:'#ffa857'},labels:{fill:'white'}}}
      interpolation={'cardinal'}/>
       <VictoryLegend title={''} orientation='horizontal' gutter={30} data={[{name:'Feb 2024',symbol:{fill:'#4ed2f3'}},{name:'Feb 2023',symbol:{fill:'#eda458'}}]} style={{data:{margin:100}}}/>
      </VictoryChart>
      </View>
   </SafeAreaView>
  )
}
