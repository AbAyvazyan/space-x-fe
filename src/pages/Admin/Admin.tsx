import { getData } from '@pages/Home/utils';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Admin = () => {
  const { register, handleSubmit, reset } = useForm();

  const { data, refetch } = useQuery({ queryKey: ['home'], queryFn: getData });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post('https://spacex-py.onrender.com/api/posts/', data);
      reset();
      refetch();
    } catch (err) {
      console.log(err);
    }
  });

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`https://spacex-py.onrender.com/api/posts/${id}/`);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-20 py-10">
      <form className="w-fit bg-neutral-200 p-10 rounded-md mx-auto" onSubmit={onSubmit}>
        <h2 className="text-2xl mb-4">Add</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="title"
            className="px-1 py-2 w-60 rounded-md"
            {...register('name')}
          />
          <input
            type="number"
            placeholder="number"
            className="px-1 py-2 w-60 rounded-md"
            {...register('title')}
          />
          <input
            type="text"
            placeholder="subtitle"
            className="px-1 py-2 w-60 rounded-md"
            {...register('subtitle')}
          />
        </div>
        <button className="px-2 py-2 bg-green-500 w-full mt-4 rounded-md">Add</button>
      </form>
      <div className="mt-20 flex gap-4 flex-wrap justify-center">
        {data &&
          data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-4 col-span-1 bg-neutral-300 rounded-md w-fit flex flex-col justify-center items-center transition-all">
                <span>{item.name}</span>
                <span className="text-3xl">{item.title}</span>
                <span>{item.subtitle}</span>
                <div className="flex gap-2 mt-2">
                  <button
                    className="px-4 py-2 border border-red-500 bg-red-500 rounded-md"
                    onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Admin;
