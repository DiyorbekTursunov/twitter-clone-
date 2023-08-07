const Inputs = ({label, type , value , setValue}) => {
  return (
    <>
        <label htmlFor="" className="flex flex-col gap-3">
                <h3 className="text-[16px] ">{label}</h3>
                <input
                  required
                  type={type}
                  placeholder={label}
                  className=" w-[451px] py-[19px] pl-[25px] border-[1px] border-[#4285F4] rounded-[9px]"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
        </label>
    </>
  )
}

export default Inputs