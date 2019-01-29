// your ImageSlider code here!
import React from 'react'


 class ImageSlider extends React.Component {
   state = {
     currentSlideIndex: 0
   };

  render() {
    // debugger
    return <h1>I am on slide {this.state.currentSlideIndex}</h1>

  }

}

export default ImageSlider






//   constructor() {
//     super()
//     this.state = {
//       currentSlideIndex: 0
//     }
//
//   }
//   increment = () => {
//     const newIndex = this.stat.currentSlideIndex + 1
//     this.setState ({
//       currentSlideIndex: newIndex
//     })
//   }
//
// }
