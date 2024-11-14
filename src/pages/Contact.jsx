/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Chrome } from 'lucide-react';
import Navbar from "@/components/navbar";
import { useState , useRef , useEffect} from "react";

export default function Contact() {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = (isRegisterSelected) => {
    setIsRegister(isRegisterSelected);
  };


  return (
    <>
      <Navbar />
      <Cursor />
      <section className="h-[100vh] w-full flex items-center justify-center relative">
        <div className="w-[40%] h-full bg-[url('src/images/laptop.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="w-[60%] h-full relative px-[1rem] py-8 flex flex-col items-center gap-[2rem] justify-center">
          <Radio isRegister={isRegister} toggleForm={toggleForm} />
          <Form isRegister={isRegister} />
        </div>
      </section>
    </>
  );
}
const Cursor = () => {
  const cursorRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * 0.1;
      currentY.current += (mouseY.current - currentY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current}px`;
        cursorRef.current.style.top = `${currentY.current}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-[30px] h-[30px] bg-[#229cff] rounded-full pointer-events-none z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

function Form({ isRegister }) {
  return (
    <div className="w-[60%] h-[60vh]">
      <div className="w-full flex flex-col items-center justify-center p-4 gap-[2rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[2rem] ">{isRegister ? 'Create your account' : 'Log in to your account'}</h1>
          <button className="px-[3rem] py-[.5rem] border-[1px] border-black rounded-[5px] flex items-center justify-center gap-[.5rem]">
            <Chrome />
            {isRegister ? 'Sign Up with Google' : 'Login with Google'}
          </button>
        </div>

        <div className="w-full flex flex-col gap-[1rem]">
          {!isRegister ? null : (
            <div className="flex flex-col gap-[.5rem]">
              <label className='text-[1.25rem]'>Name</label>
              <input type="text" placeholder="Enter your name" className="w-full border-[1px] p-4 outline-none rounded-[5px]" />
            </div>
          )}

          <div className="w-full flex flex-col gap-[1rem]">
            <label className='text-[1.25rem]'>Email</label>
            <input type="text" placeholder="Enter your Email" className="w-full border-[1px] p-4 outline-none rounded-[5px]" />
          </div>

          <div className="w-full flex flex-col gap-[1rem]">
            <label className='text-[1.25rem]'>Password</label>
            <input type="password" placeholder="Enter your Password" className="w-full border-[1px] p-4 outline-none rounded-[5px]" />
          </div>

          <button className="px-[3rem] py-[.5rem] border-[1px] text-white bg-black border-black hover:text-black hover:bg-white transition duration-300 rounded-[5px]">
            {isRegister ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Radio({ isRegister, toggleForm }) {
  return (
    <div className="w-full flex justify-center">
      <StyledWrapper>
        <div id="firstFilter" className="filter-switch">
          <input
            defaultChecked={isRegister}
            id="option1"
            name="options"
            type="radio"
            onChange={() => toggleForm(true)}
          />
          <label className="option text-white" htmlFor="option1">
            Sign Up
          </label>
          <input
            defaultChecked={!isRegister}
            id="option2"
            name="options"
            type="radio"
            onChange={() => toggleForm(false)}
          />
          <label className="option" htmlFor="option2">
            Log in
          </label>
          <span className="background" />
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .filter-switch {
    border: 2px solid black;
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 400px;
    overflow: hidden;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: 18px;
  }
  .filter-switch .background {
    position: absolute;
    width: 49%;
    height: 38px;
    background-color: black;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 49%;
  }
  #option1:checked + label[for="option1"] {
    color: white;
    font-weight: bold;
  }
  #option2:checked + label[for="option2"] {
    color: white;
    font-weight: bold;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: black;
  }
`;
