import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
const FormLoan = ({ onChangeDataForm, goToPosts, dataForm }) => {
  const optionAmount = [
    {
      value: "300",
      text: "$200 - $500",
    },
    {
      value: "600",
      text: "$500 - $1,000",
    },
    {
      value: "1000",
      text: "$1,100 - $2,500",
    },
    {
      value: "2500",
      text: "$2,500 - $5,000",
    },
  ]
  return (
    <form onChange={onChangeDataForm}>
      <div className='flex flex-col p-8 bg-white rounded-xl w-full gap-6 z-100 myShadow'>
        <div className='relative'>
          <span className='text-sm absolute top-2 left-3 font-bold z-10 uppercase text-blue-xDark'>Loan Amount</span>
          <span className='absolute right-2 z-10 top-5 text-blue-light'>
            <MdKeyboardArrowDown
              size={30}
            />
          </span>
          <select name="amount" id="amount" value={dataForm.amount} className='border h-[70px] p-3 pt-7 rounded-md border-blue-light font-thin w-full focus:outline-none'>
            {optionAmount.map((item, key) => (
              <React.Fragment key={key}>
                <option value={item.value}>
                  {item.text}
                </option>
              </React.Fragment>
            ))}
          </select>
        </div>

        <div className='flex gap-6 w-full flex-wrap lg:flex-nowrap'>
          <div className='border p-3 rounded-md border-blue-light relative  h-[70px] bg-white w-full'>
            <span className='text-sm absolute top-2 left-3 font-bold z-10 uppercase text-blue-xDark'>
              YOUR EMAIL ADDRESS
            </span>
            <input type="email" placeholder='Enter your email' name="email" className='w-full bg-white pt-5' value={dataForm.email} />
          </div>
          <div className='border p-3 rounded-md border-blue-light relative  h-[70px] bg-white w-full'>
            <span className='text-sm absolute top-2 left-3 font-bold z-10 uppercase text-blue-xDark'>
              Last 4 digits of SSN
            </span>
            <input type="password" className='w-full bg-white pt-5' name="ssn" maxLength={4} placeholder='&#9679;&#9679;&#9679;&#9679;' value={dataForm.ssn} />
          </div>
        </div>

        <a href="/form-loan">
          <div className='button uppercase text-white w-full rounded-md h-[80px] font-bold text-xl flex items-center justify-center'>
            Get Started
          </div>
        </a>
      </div>
    </form>
  )
}

export default FormLoan