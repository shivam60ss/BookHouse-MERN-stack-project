import React from 'react'

const section = ({item}) => {
    return (
        <>
            <div className='mt-4 my-3  p-3'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white dark:shadow-black">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-green-400">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-beetwen">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline hover:bg-green-400 hover:text-white">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default section

