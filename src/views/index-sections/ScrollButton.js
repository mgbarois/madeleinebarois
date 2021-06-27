import React from 'react';
import './ScrollButton.scss';
import {Button} from 'reactstrap';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <Button title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
                <i className='fas fa-chevron-up'></i>
              </Button>;
   }
} 

export default ScrollButton;