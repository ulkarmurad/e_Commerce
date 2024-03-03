import Category from "../Category/Category";
import Products from "../Products/Products";


const Home = () => {
 

  return (
    <div>
      <div>
        <img
          className="  bg-cover bg-no-repeat  opacity-20 relativ "
          src="https://images.pexels.com/photos/5864266/pexels-photo-5864266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <h1 className="absolute top-[400px] left-20 text-[48px]  text-slate-900">
          Picked Every Item With Care, You Must Try.
        </h1>
        <button class="bg-transparent shadow w-[200px] hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded absolute top-[500px] left-20">
          Shop Now
        </button>
      </div>
     

		<div className="flex justify-around">
			<Category/>
			<Products/>
			
		</div>

      
    </div>
  );
};

export default Home;
