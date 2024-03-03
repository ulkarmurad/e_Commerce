import React from 'react'
import { Link } from "react-router-dom";

const Category = () => {
  return (
	 <div>
		<div>
			<h1 className='text-[25px]'>Category</h1>

		</div>
		<div >
            <ul className="flex-col gap-8 mr-20 text-[18px]">
              <li>
                <Link to="/Men">Men</Link>
              </li>
              <li>
                
                <Link to="/women"> Women</Link>
              </li>
              <li>
                <Link to="/jewelery">Jewelery</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
            </ul>
          </div>
	 </div>
  )
}

export default Category