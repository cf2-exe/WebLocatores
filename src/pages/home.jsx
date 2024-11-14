/* eslint-disable no-unused-vars */
import locomotiveScroll from "locomotive-scroll";
import React , { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "@/components/navbar";
import { Button2 } from "@/components/button";
import AboutCard from "@/components/card";
import FeaturesSection from "@/components/Features";
import Accordion from "@/components/accordion";
import Footer from "@/components/footer";

export default function Home() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

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
        className="cursor fixed w-[50px] h-[50px] bg-[#ffffff] rounded-full pointer-events-none z-[9999] mix-blend-difference max-[1400px]:hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    );
  };


  return (
    <>
      <Cursor />
      
      <div
        ref={scrollRef}
        className="scroll flex flex-col gap-[10rem] max-md:gap-[3rem] relative w-full"
        data-scroll-container
      >

        <Navbar />
        <section className="p-8 w-full relative flex flex-col items-center justify-center gap-[3rem] max-md:p-0">
          <div className="w-[100%] h-[80vh] justify-center items-center flex flex-col gap-[1rem] p-4 text-center bg-[linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5)),url('public/laptop.jpg')] bg-center bg-cover bg-no-repeat rounded-[25px] max-md:rounded-none">
            <h1 className="text-[7rem] text-[#bcddf0] tracking-tighter max-md:leading-[3rem] max-md:text-[3rem] bg-custom-linear bg-clip-text inline-block text-transparent">
              Welcome to weblocatores
            </h1>
            <p className="w-[60%] text-white max-md:w-full">
              Ohmie GO’s platform provides a suite of solutions to help
              buildings get EV ready. These are delivered to residents as a
              premium end-to-end managed service and amenity - An intelligent
              way to get EV ready with one seamless experience.
            </p>
            <Button2 text="Join us" />
          </div>
          <div className="w-[90%] flex justify-between items-start">
            <p className="w-[60%] font-bold text-[3rem] tracking-tighter max-md:text-[2rem]">
              Turn bold ideas into{" "}
              <span className="bg-custom-linear bg-clip-text inline-block text-transparent">
                impactful brand experiences
              </span>{" "}
              with the handiwork and help of our collective bunch.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-[5rem] max-md:p-[1rem]">
          <AboutCard
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi molestiae nulla excepturi sed impedit earum eveniet in. Qui aut sed, necessitatibus ab reprehenderit illum quos nesciunt itaque non temporibus?"
            title="Get instant AI-powered knowledge anywhere"
            styling="text-[4rem] text-red-400 tracking-tighter max-md:text-[2rem] text-center"
          />
          <AboutCard
            text="Ai Pin answers all of your questions by using Humane’s operating
            system, CosmOS, to get the best response for you"
            title="Get instant AI-powered knowledge anywhere"
            styling="text-[4rem] text-sky-400 tracking-tighter max-md:text-[2rem]"
          />
        </section>

        <section className="flex flex-col items-end mt-[2rem]">
          <div className="w-[50%] p-[1rem] flex flex-col gap-[2rem] max-md:w-full">
            <h1 className="font-bold text-[3rem] tracking-tighter max-md:text-[2rem]">
              <span className="bg-custom-linear bg-clip-text inline-block text-transparent">
                Digital health, mental health and wellbeing.
              </span>{" "}
              Whenever and however you need us to work and live well.
            </h1>
            <Button2 text="Join Us" />
          </div>
        </section>

        <FeaturesSection />

        <section className="flex flex-col items-center justify-center gap-[3rem] max-md:p-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[4rem] tracking-tighter">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400">
              Here are some answers for some questions that are frequently asked
              by you
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] w-[60%] max-md:w-full">
            <Accordion
              title="Chamber reached do he nothing be"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error itaque aperiam pariatur quaerat accusantium rem neque, minima, velit eum suscipit facilis molestias quos hic. Porro fugit culpa fugiat numquam."
            />
            <Accordion
              title="At by pleasure of children be"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error itaque aperiam pariatur quaerat accusantium rem neque, minima, velit eum suscipit facilis molestias quos hic. Porro fugit culpa fugiat numquam."
            />
            <Accordion
              title="Amounted repeated as believed in confined"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error itaque aperiam pariatur quaerat accusantium rem neque, minima, velit eum suscipit facilis molestias quos hic. Porro fugit culpa fugiat numquam."
            />
            <Accordion
              title="Hello World again"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error itaque aperiam pariatur quaerat accusantium rem neque, minima, velit eum suscipit facilis molestias quos hic. Porro fugit culpa fugiat numquam."
            />
          </div>
        </section>

        <section
          className="relative h-[100vh]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}
