import './App.css';
import Banner from './components/banner';
import FormLoan from './components/form';
import Menu from './components/menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AdvantagesSection from './components/sections/advantages';
import WhyUs from './components/sections/whyUs';
import StepSection from './components/sections/step';
import HaveQuestionSection from './components/sections/haveQuestion';
import MoneySection from './components/sections/money';
import Footer from './components/footer';
function App() {
  const [dataForm, setDataForm] = useState({
    email: "",
    amount: "",
    ssn: ""
  })
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate({
      pathname: 'https://trk.opploansnmyoffer.com/click',
      search: `apply?manual=1&=&requested_amount=${dataForm.amount}&email=${dataForm.email}&last4ssn=${dataForm.ssn}`,
    });
    window.location.reload();
  }
  const onChangeDataForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  const onClickToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      {/* <Menu /> */}
      <Banner />
      <div className='absolute w-full top-0 z-50'>
        <Menu />
        <div className=' myContainer grid grid-cols-1 lg:grid-cols-2 lg:!pt-36 !pt-1'>
          <div></div>
          <div className='flex flex-col gap-6'>
            <div className='flex justify-end w-full  lg:justify-center my-3'>
              <div className='text-2xl lg:text-[2.875rem] leading-[1.5] font-black lg:text-center w-[60%] lg:w-full text-right'>
                Get Your Personal Loan Up To $5000
              </div>
            </div>
            <div>
              <FormLoan
                onChangeDataForm={onChangeDataForm}
                goToPosts={goToPosts}
                dataForm={dataForm}
              />
            </div>
          </div>
        </div>
      </div>
      <AdvantagesSection
        onClickToTop={onClickToTop}
      />
      <WhyUs
        onClickToTop={onClickToTop}
      />
      <StepSection />
      <HaveQuestionSection />
      <MoneySection
        onClickToTop={onClickToTop}
      />
      <Footer
        onClickToTop={onClickToTop}
      />
    </div>
  );
}

export default App;
