
// MainComponent.js
import React, { useState } from 'react';
import SelectBox from './SelectBox';

const MainSelectBox = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = {
    'topic1': ['کارت هوشمند','لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'],
    topic2: ['توکن سخت افزاری'],
    topic3: ['  ماژول امنیتی سخت افزاری'],
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div>
      <SelectBox options={topics.topic1} onChange={handleTopicChange} />
      <SelectBox options={topics.topic2} onChange={handleTopicChange} />
      <SelectBox options={topics.topic3} onChange={handleTopicChange} />
      {/* Use selectedTopic state as needed */}
    </div>
  );
}

export default MainSelectBox;