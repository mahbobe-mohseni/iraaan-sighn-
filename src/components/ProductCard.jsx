 

 
 
// import React from 'react';

// const ProductCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 w-full max-w-md rounded overflow-hidden shadow-lg">
//       <img src="https://via.placeholder.com/300" alt="Product" className="w-full md:w-1/2 rounded-md" />
//       <div className="flex flex-col w-full md:w-1/2 p-4">
//         <h2 className="font-bold text-xl mb-2 text-gray-800">Product Title</h2>
//         <p className="text-gray-700 text-base">Product Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className="flex gap-2 mt-4">
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

/* 








import React from 'react';

const DataList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const MyComponent = () => {
  const dataList = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' },
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">My Data List</h1>
      <DataList data={dataList} />
    </div>
  );
};

export default MyComponent;





*/


import React from 'react';
import { mahsol1,mahsol2,mahsol3,mahsol4,share,show,unsplash } from '../images';






const images = [
  { id: 1, imgUrl:  mahsol1 , title: 'خطی که مهمتر است را می‌توان در این قسمت نوشت', description: '   بخشی از اوایل مقاله به اندازه 2 خط اینجا نوشته شود، لورم ایپسوم متنی ساختگی است که در طراحی نگارش می‌شود...' },
  { id: 2, imgUrl: mahsol2,title: 'خطی که مهمتر است را می‌توان در این قسمت نوشت  ', description: '   بخشی از اوایل مقاله به اندازه 2 خط اینجا نوشته شود، لورم ایپسوم متنی ساختگی است که در طراحی نگارش می‌شود...' },
  { id: 3, imgUrl: mahsol3, title: 'خطی که مهمتر است را می‌توان در این قسمت نوشت  ', description: '   بخشی از اوایل مقاله به اندازه 2 خط اینجا نوشته شود، لورم ایپسوم متنی ساختگی است که در طراحی نگارش می‌شود...' }
];



const CustomCard = ({ imgUrl, title, description }) => {
  return (
   <>
   
   <div className=" container flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 w-full rounded overflow-hidden shadow-lg">
      <img src={imgUrl} alt="Product" className="w-[427px] h-[318px] rounded-md" />
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-between  gap-2 mt-4 text-10">
        <div className='flex'>
        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">15  خرداد</span>
        <span className="inline-block   rounded-full px-3 py-1 text-sm font-semibold text-gray-700 pr-0 ">  | 5دقیقه </span>
        </div>
        {/* ***************************************************************************************ok nemishe  */}
        <div className='flex items-center gap-2 '>
          <div className='flex flex-row  gap-2'>
          <span className="   gap-2 rounded-full  text-sm font-semibold text-gray-700">  اشتراک گذاری  <span><img src={share} className=' w-4 h-4' alt="" /></span></span>

          </div>
          <div className=' flex items-center gap-2'>
          <span className="  rounded-full px-3 py-1 text-sm font-semibold text-gray-700"> <span><img src={share} className=' w-4 h-4' alt="" /></span>5585  </span>

          </div>
          {/* ********************************************************************************************** */}
        </div>
        </div>
      </div>
    </div>
   </>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {images.map(({ id, imgUrl, title, description }) => (
        <CustomCard key={id} imgUrl={imgUrl} title={title} description={description} />
      ))}
    </div>
  );
};

export default App;
 
 