# MB React Walkthrough

MB React Walkghrough is a simple React component to realize walkthrough UI in your application. With this UI, You can add tutorials, onboardings and short storires very easliy.
 
[![https://gyazo.com/a9d3db30a859b86f4f8c26996f9ac9c4](https://i.gyazo.com/a9d3db30a859b86f4f8c26996f9ac9c4.gif)](https://gyazo.com/a9d3db30a859b86f4f8c26996f9ac9c4)
[![https://gyazo.com/ef39b0390ddd118a74b6df5b758a76dc](https://i.gyazo.com/ef39b0390ddd118a74b6df5b758a76dc.gif)](https://gyazo.com/ef39b0390ddd118a74b6df5b758a76dc)


## Installation

```
npm install --save mb-react-walkthroguh
```


## Import css to your project

```css
@import ./node_modules/mb-walkthrough/src/dist/css/mb-walkthrough.css
```


## Useage

```javascript
import MBWalkthrough from 'mb-walkthrough'

<MBWalkthrough onHide={()=>{this.setState({show: false})}}>
	<MBWalkthrough.Content>
    	<div>PAGE 1</div>
    </MBWalkthrough.Content>
    <MBWalkthrough.Content>
    	<div>PAGE 2</div>
    </MBWalkthrough.Content>
</MBWalkthrough>

```


## Props

| Prop            | Type         | Default      | Note         |
|:----------------|:------------:|:------------:|:------------:|
| className       | string       |              |              |
| width           | number       | 450          |              |
| height          | numbe        | 360          |              |
| onHide          | func         |              | Required     |
| onClickBackdrop | func         |              |              |
| onSlide         | func         |              |              |
| onShow          | func         |              |              |
| nextBtnTitle    | string       | Nex          |              |
| backBtnTitle    | string       | Back         |              |
| closeBtnTitle   | string       | Close        |              |
| animated        | bool         | true         |              |
| animationDuration| number      | 200          |              |
| showBackdrop    | bool         | true         |              |
| showIndicator   | bool         | true         |              |
| topSpace        | number       | 100          |              |


## Development

``` 
git clone git@github.com:mountainboooy/mb-walkthrough.git
cd mb-walkthrough
npm install
npm run:build
```

