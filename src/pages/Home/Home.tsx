import galaxyImage from '@assets/images/galaxy.jpg';
import { useQuery } from '@tanstack/react-query';
import { getData } from './utils';

const Home = () => {
  const { data } = useQuery({ queryKey: ['home'], queryFn: getData });

  return (
    <section className="w-full h-screen relative">
      <img src={galaxyImage} alt="" className="w-full h-full" />
      <div className="absolute h-full w-full top-0 left-0 flex justify-evenly items-center">
        <div className="w-full flex justify-end">
          <div className="translate-x-24 flex flex-col gap-20">
            <h2 className="text-6xl font-semibold flex flex-col items-end bg-gradient-to-r from-neutral-50 to-red-700 text-transparent bg-clip-text">
              путешествие <span className="text-2xl">на красную планету</span>
            </h2>
            <button className="text-xl w-fit border px-4 py-2 border-s-neutral-400 text-neutral-50">
              начать путешествие
            </button>
          </div>
        </div>
        <div className="w-full h-full flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-beautiful-planet-mars-png-image_13327984.png"
            alt=""
            className="w-full h-[80%] z-50 object-contain"
          />
        </div>
        <div className=" w-full grid grid-cols-2 gap-2">
          {data &&
            data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-1 w-full text-neutral-50 bg-transparent bg-gradient-to-br from-neutral-50/10 to-transparent hover:bg-gradient-to-tl hover:from-neutral-50/50 hover:to-transparent cursor-pointer py-2 border border-transparent flex flex-col justify-center items-center transition-all hover:border-neutral-400">
                  <span className="">{item.name}</span>
                  <span className=" text-6xl">{item.title}</span>
                  <span className="">{item.subtitle}</span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Home;
