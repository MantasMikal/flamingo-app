import React, { Component } from 'react'
import './Flamingo.css';

export default class Flamingo extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          showFlamingo: false
        }
    
      }
  componentWillMount() {
    this.timeoutId = setTimeout(function() {
      this.setState({showFlamingo: true});
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    if (this.timeoutId){
      clearTimeout(this.timeoutId);
    }
  }
  //Change Plain SVG to a file
  render() {
    return (
        this.state.showFlamingo ? 
        <div className="flamingo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 942 900" className="flamingoImg animated bounceInRight">
    <defs />
    <g id="mouth">
        <path className="clsFlamingo-1" d="M279.44,316.34c6.68,18.84,18.51,34.8,36.77,47.1-15.27,17.42-46.1,26.16-77.06,34.82q-21.26-5-29.2-9.92Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-1" d="M287.62,246.23c-12.53,24.89-16.16,48.38-8.18,70.11-37.5,22.27-72.35,40-99.17,44.2-15.67-11.14-23.68-29.63-30.89-48.93C187.08,282,234.67,261.66,287.62,246.23Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-2" d="M239.15,398.26l-83.53,57.36L210,388.34Q217.9,393.3,239.15,398.26Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-2" d="M149.38,311.61c7.21,19.3,15.22,37.79,30.89,48.93-20.65,14.82-41,48.07-61.31,84.58C120,394.44,127,347.76,149.38,311.61Z"
        transform="translate(-118.96 -147.23)" />
    </g>
    <g id="body">
        <path className="clsFlamingo-5" d="M1464,978.73c-14.79-3.84-48.36-41.41-108.83-175.49-4.56,189.87,79.51,267.79,69.38,263.81-48.55-19.11-149.12-197.44-176.78-205.38-147.6,49.16-298.6,74.37-463.72,0-98.58,149.7-390.69,193.51-410.16-51.12,7.19-217,164.41-341.91,106.23-459.63A115.2,115.2,0,0,0,501.66,314c-7.76,13.44-15.77,24.71-24.34,31.59-97.38,73-204,32.29-206.91-59.63,13.76-59.82,55.13-92.08,105.88-91.21a130.82,130.82,0,0,1,35.31,5.63,164.87,164.87,0,0,1,27.55,11c20.85,10.4,42,25.85,62.51,46.61,122,46.4,122.63,191.22-20.68,452.76-77.9,146,129,225.17,155.78,4.87-9.73-208.12,354.18-475.89,572-286-7.06,7.57-28.35,2.94-54.77-6.08,102.2,46,162.32,110.56,197.17,186.22C1429.09,709.22,1412.66,881.75,1464,978.73ZM1298.72,668.68a202.59,202.59,0,0,0,12.31-31c-20.16,9-42.27,10.7-65.73,7.38h0a211.46,211.46,0,0,1-29.12-6.36c-164.91-47.57-379.5-285.34-454-49.36C731.88,888,1193.11,882.31,1298.72,668.68Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M1311,637.71a202.59,202.59,0,0,1-12.31,31q-6.73,5.05-13.49,9.82A359.5,359.5,0,0,0,1311,637.71Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M1311,637.71a359.5,359.5,0,0,1-25.8,40.79c-161.39,113.92-335.23,105.37-433-9.13C948.6,762.11,1109.55,800.43,1311,637.71Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M1285.23,678.5q6.76-4.77,13.49-9.82C1193.11,882.31,731.88,888,762.13,589.37,779,832.44,1125.12,897.36,1285.23,678.5Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-6" d="M1245.3,645.09c23.46,3.32,45.57,1.59,65.73-7.38-201.48,162.72-362.43,124.4-458.84,31.66,97.81,114.5,271.65,123,433,9.13C1125.12,897.36,779,832.44,762.13,589.37c74.54-236,289.13,1.79,454,49.36-15.69,23.85-257.86,46-318.94-88.65,43.7,104.25,132.52,154.49,348.06,95Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M1216.17,638.73a211.46,211.46,0,0,0,29.12,6.36c-215.54,59.48-304.36,9.24-348.06-95C958.31,684.69,1200.48,662.58,1216.17,638.73Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M501.66,314a115.2,115.2,0,0,1-21.56,36.9q-1.32-2.66-2.78-5.31C485.89,338.73,493.9,327.46,501.66,314Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-6" d="M472.45,159.39c-3.65,30.25-14.88,47.34-33.3,52a164.87,164.87,0,0,0-27.55-11v0C438.73,195,458.9,181.17,472.45,159.39Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-6" d="M446.89,147.23c-7.5,24.59-19.19,42.45-35.29,53.15v0a130.82,130.82,0,0,0-35.31-5.63v0Q437.11,177,446.89,147.23Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-4" d="M1318.5,846.74" transform="translate(-118.96 -147.23)"
        />
    </g>
    <g id="eye">
        <path className="clsFlamingo-7" d="M373.72,254.51l-21.34,20.81,5,29.41L331,290.84v-3.32c8.16,0,14.8-8.68,14.8-19.39s-6.64-19.41-14.8-19.41a12.79,12.79,0,0,0-9.42,4.44l-3.78-2.94L331,223.47l13.2,26.75Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-8" d="M331,248.72c8.16,0,14.8,8.69,14.8,19.41s-6.64,19.39-14.8,19.39-14.81-8.68-14.81-19.39a22.13,22.13,0,0,1,5.39-15A12.79,12.79,0,0,1,331,248.72Zm-1,14c1.84-4,1.37-8.07-1-9.21s-5.86,1.19-7.71,5.13-1.36,8.09,1.05,9.21S328.21,266.67,330.05,262.71Zm-2.21,11.93a3.86,3.86,0,1,0-3.85,3.88A3.86,3.86,0,0,0,327.84,274.64Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-7" d="M331,287.52v3.32L304.6,304.73l5.06-29.41L288.3,254.51l29.52-4.29,3.78,2.94a22.13,22.13,0,0,0-5.39,15C316.21,278.84,322.84,287.52,331,287.52Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-9" d="M329,253.5c2.41,1.14,2.88,5.24,1,9.21s-5.29,6.26-7.7,5.13-2.87-5.24-1.05-9.21S326.6,252.39,329,253.5Z"
        transform="translate(-118.96 -147.23)" />
        <path className="clsFlamingo-9" d="M324,270.77a3.88,3.88,0,1,1-3.87,3.87A3.86,3.86,0,0,1,324,270.77Z"
        transform="translate(-118.96 -147.23)" />
    </g>
</svg>
        </div> : null
    )
  }
}
