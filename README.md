# MB React Walkthrough

MB React Walkthrough is a simple React component to realize walkthrough UI in your application. With this UI, You can add tutorials, onboardings and short storires very easliy.
 
[![https://gyazo.com/8451169dc63303bdc655a30363aafe45](https://i.gyazo.com/8451169dc63303bdc655a30363aafe45.gif)](https://gyazo.com/8451169dc63303bdc655a30363aafe45)
[![https://gyazo.com/4adb54887eddf9bd8c51a796da57badc](https://i.gyazo.com/4adb54887eddf9bd8c51a796da57badc.gif)](https://gyazo.com/4adb54887eddf9bd8c51a796da57badc)

<br/>

## Installation

```
npm install --save mb-react-walkthrough
```

<br/>

#### Import css to your project

```css
@import './node_modules/mb-walkthrough/src/dist/css/mb-walkthrough'
```

<br/>

## Useage

```javascript
import Walkthrough from 'mb-walkthrough'

<Walkthrough onHide={()=>{this.setState({show: false})}}>
    <Walkthrough.Content>
    	PAGE 1
    </Walkthrough.Content>
    <Walkthrough.Content>
    	PAGE 2
    </Walkthrough.Content>
</Walkthrough> 

```

<br/>

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


<br/>

## Development

``` 
git clone git@github.com:mountainboooy/mb-walkthrough.git
cd mb-walkthrough
npm install
npm run:watch
```

