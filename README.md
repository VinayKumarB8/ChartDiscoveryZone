Chart Discovery Zone- All ABout RN Graphs/Charts Libraries

Name
difficulty
Issues i faced 


1.Victory native 
$  If we use VictoryLabel in labelComponent we can't use Victory tooltip
Intermediate
faced issues :
1.Installing Victory native package(installed from npm package version 40.0.4 which does not contain Victory Charts contain Cartesian Charts )
* solved by verifing the library and installing the version through the official documentation  "^36.9.1".
2.RenderIn Portal Error occured because the chart is not wrapped in Victory Container
* use this in labelComponent={<VictoryTooltip renderInPortal={false}/>} instaed of labelComponent={<VictoryTooltip/>}


2. RN Charts Kit 
Easy 
chart config is must without chart config chart wont work
chart fonfig deals with bg Gradients,color, stroke width for line chart, bar percentage (width of bar) for barchart 
segments can be used as a scale for yaxis 
* line chart has y and x axis line where bar does'nt
* line chart has many features 
* barChart with necessary features not much customization

Issues:
1 .LineChart 
    usage of decorator and onDataonDataPointClick did RD went on to stackOverflow didnt find the necessary then on medium Website i found the proper usage and i created the tooltip using the same with the help of SVG



