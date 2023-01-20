import React, { useEffect, useState } from 'react'
import Header from './Header'

function App() {
  const [page, setPage] = useState(1)
  const [products, SetProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data = await res.json()
    SetProducts(data.products)
  }
  const SelectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
      setPage(selectedPage)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <Header />
      <h1 className='flex justify-center items-center pt-5 text-xl border-2 font-semibold'>To See The Pagination Functionaly Check Bottom of This Page 👇👇</h1>
      <section className=' h-[1000vh] py-10 px-60'>

        <div className='grid grid-cols-3 gap-10'>

          {products.length > 0 &&
            products.slice(page * 10 - 10, page * 10).map((items) => {
              return (
                <>
                  <div className=''>
                    <div className='flex flex-col items-center py-3 shadow-xl border-2 border-black shadow-slate-400 rounded-xl onHover'>
                      <span><img className='h-52 w-52' src={items.thumbnail} alt="" /></span>
                      <span className='font-semibold text-lg'>{items.title}</span>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
        {
          products.length > 0 && <div className='mt-10 text-xl space-x-6 flex justify-center items-center border-2 py-3 border-red-500 rounded-xl'>
            <span onClick={() => SelectPageHandler(page - 1)} className='text-3xl cursor-pointer'>◀</span>
            {
              [...Array(products.length / 10)].map((_, i) => {
                return <span onClick={() => SelectPageHandler(i + 1)} key={i} className={page === i + 1 ? 'bg-gray-300 py-2 px-4 text-black shadow-xl shadow-slate400 border-2 border-blue-700' : 'space-x-4 cursor-pointer py-1 px-3 border-2 border-black'}

                >{i + 1}</span>
              })
            }
            <span></span>
            <span onClick={() => SelectPageHandler(page + 1)} className={page === 10 ? 'hidden' : 'text-3xl cursor-pointer'}
            >▶</span>
          </div>
        }
      </section>
    </>
  );
}

export default App;
