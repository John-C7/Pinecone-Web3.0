import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { TbBrandCarbon } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
import './transaction.css';
import '../Register/RegisterForm.css'


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );

const Welcome = () => {
//   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

//   const handleSubmit = (e) => {
//     const { addressTo, amount, keyword, message } = formData;

//     e.preventDefault();

//     if (!addressTo || !amount || !keyword || !message) return;

//     sendTransaction();
//   };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-row items-start justify-between p-20 py-15 px-1" id="mainbox">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Carbon Credits <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the carbon world. Buy and sell carbon credits easily on Pinecone.
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 mr-10">
            <div className={`rounded-tl-2xl mr-15 ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={`${companyCommonStyles}`}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Carbon Credits
            </div>
            <div className={`sm:rounded-bl-2xl mr-15 ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`${companyCommonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div id="tran-here">
          <div className="flex flex-col flex-1 items-center justify-start w-80 mf:mt-0 mt-10 ml-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <TbBrandCarbon fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  {/* <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p> */}
                  <p className="text-white font-light text-sm">
                    Balance :
                  </p>
                  <p className="text-white font-light text-sm">
                    Wallet Key :
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Carbon Credits
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
              <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
              <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading
                ? <Loader />
                : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
            </div> */}

          </div>
          <div className="flex">
          <div className='wrapper mr-10'>
                <form action="">
                    <h1>Your Company Details</h1>
                    <div className='input-box'>
                        <input type="number" step="0.01" placeholder='Base Line Emission' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="number" step="0.01" placeholder='Project Emission' required />
                        {/* <MdEmail className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="number" step="0.01" placeholder='Emission Factor' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='answer' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <button type='submit'>Generate Carbon Credits</button>
                </form>
            </div>
            <div className='wrapper'>
                <form action="">
                    <h1>For Transaction Fill the Details</h1>
                    <div className='input-box'>
                        <input type="text" placeholder="Sender's Address" required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder="Receiver's Address" required />
                        {/* <MdEmail className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="number" step="0.01" placeholder='Amount' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Message' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Timestamp' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Keyword' required />
                        {/* <FaUser className='icon'/> */}
                    </div>
                    <button type='submit'>Generate Carbon Credits</button>
                </form>
            </div>
          </div>
  
          </div>
      </div>
        
    </div>
  );
};
export default Welcome;