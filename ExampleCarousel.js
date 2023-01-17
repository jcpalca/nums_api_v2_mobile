import { useEffect, useState, useRef } from 'react';
import { View } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ExampleCard, { SLIDER_WIDTH, ITEM_WIDTH } from './ExampleCard';
import { getFact } from './utils';
import data from './data';

function ExampleCarousel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const isCarousel = useRef(null);
  const date = new Date();
  const month = date.getMonth() + 1; // Month is (0-11) so add 1 to (1-12)
  const day = date.getDate();

  useEffect(function fetchFact() {
    try {
      async function fetchFactAPI() {
        const triviaFactInfo = await getFact("42", "trivia");
        const mathFactInfo = await getFact("5", "math");
        const yearFactInfo = await getFact("2000", "years");
        const dateFactInfo = await getFact("6/15", "dates");
        console.log(dateFactInfo)
        setData([triviaFactInfo, mathFactInfo, yearFactInfo, dateFactInfo]);
      }

      fetchFactAPI();
    }
    catch(err){
      console.log(err)
    }
  }, []);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ExampleCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}


export default ExampleCarousel;
