import React from 'react'

export default function Menu() {
  return (
    <div className='grid grid-cols-2 gap-5 pt-20 pl-75 pr-20'>
      <div className='h-[550px] max-w-[550px] pl-7  '>
        <h1 className='justify-items-center pl-40 pb-10 pr-5 text-3xl mb-5'>Our Menu</h1> 
        <h2 className='pl-10 text-2xl pb-5'>Bread Basket</h2>
        <p className='pl-10'>Assortment of fresh baked fruit breads and muffins 5.50</p>
        <h2 className='pl-10 text-2xl pt-8 pb-4'>Honey Almond Granola with Fruits</h2>
        <p className='pl-10'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
        <h4 className='pl-10 text-2xl pt-8 pb-4'>Belgian Waffle</h4>
        <p className='pl-10'>With whipped butter and maple syrup 7.50</p>
        <h4 className='pl-10 text-2xl pt-8 pb-4'>Scrambled eggs</h4>
        <p className='pl-10'>With crisp bacon, toast, butter and jam 9.00</p>
        <h4 className='pl-10 text-2xl pt-8 pb-4'>Blueberry Pancakes</h4>
        <p className='pl-10'>With syrup, butter and lots of berries 8.50</p>
      </div>
      <div className='w-full  bg-[url("https://www.w3schools.com/w3images/tablesetting.jpg")] bg-cover bg-center flex items-end justify-center h-[700px] max-w-[450px] opacity-75' >

      </div>
      
    </div>
  )
}
