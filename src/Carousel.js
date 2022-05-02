import React, {useState} from 'react'
const testData = [
    {
        picture:'picture',
        description: 'description',
        artist:'darique warren'
    },
    {
        picture:'image',
        description: 'definiton',
        artist:'damien black'
    },
    {
        picture:'snapshot',
        description: 'biography',
        artist:'delta bravo'
    }
]

function Carousel() {
    const [itemIndex, setItemIndex] =  useState(0)

    const handleCarouselSwitch = ()=>{
        if (itemIndex >= testData.length -1){
            setItemIndex(0)
        }else if(itemIndex  < testData.length -1){
            setItemIndex(itemIndex + 1)

        }
    }

    setInterval(()=>{
        handleCarouselSwitch()
    },[10000])

  return (
    <div>
    <h2>Carousel thing</h2>
    <p>{testData[itemIndex].picture}</p>
    <p>{testData[itemIndex].description}</p>
    <p>{testData[itemIndex].artist}</p>

    <button
    onClick={()=>{
        handleCarouselSwitch()
    }}
    >left</button>  
      <button
      onClick={()=>{
        handleCarouselSwitch()
      }}
      >right</button>

    </div>
  )
}

export default Carousel