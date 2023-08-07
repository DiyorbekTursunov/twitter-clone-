import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const UserPageItem = () => {
  const { users } = useSelector(state => state.user)
  const navigate = useNavigate()
  console.log(users);
  return users && (
    <div className="p-4 border-gray-200 mt-10 rounded-xl shadow-lg  dark:border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="rounded-lg p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <h2 className="mb-5 text-3xl font-semibold">{users.email}</h2>
        <p>{users.bio ? users.bio : 'Not set bio'}</p>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
        <div className="flex items-center justify-between mt-4 space-x-3 px-5">
          <div className="flex flex-col gap-2 mb-4">
            <img src={users.image} alt="" className='w-[50px] rounded-[50%]' />
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-2">{users.username}</div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(`/user-change/${users.username}`)} className="py-4 px-4 bg-slate-400 mt-4 text-[#fff] rounded-lg">Change user</button>
    </div>
  )
}

export default UserPageItem