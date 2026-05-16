import Electronic from "./Electronics/Electronic";
import Hero from "./Hero/Hero";




const Home = () => {

        

       
        return (
              <div>
                <Hero></Hero>
                

                <div>
                        <h1 className=" text-5xl font-bold text-center my-5">Trending Products</h1>
                        <Electronic></Electronic>
                       
                </div>

              </div>

                        
                
        );
};

export default Home;