"use client";
import { motion } from "framer-motion";
import Img from "next/image";

export default function Home() {
  return (
    <section className="flex items-center justify-between" id={"home"}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="text-start leading-6 "
      >
        <span className="text-2xl md:text-4xl font-extrabold">
          Lorem Lorem Lorem
        </span>
        <p className="text-xl md:text-2xl my-6 md:my-6 max-w-xl">
          Lorem Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Qui, voluptatum? Ad impedit quae, numquam nostrum saepe in rem esse
          corrupti?
        </p>
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded-md 
                  hover:bg-blue-600 hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-opacity-75
                  disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Contact Us
          </button>
          <button
            className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded-md 
                  hover:bg-blue-600 hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-opacity-75
                  disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Place Order
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="w-full  hidden lg:flex py-8 justify-end"
      >
        <Img
          src="/coding.jpg"
          width={550}
          height={500}
          alt="Coding"
          className="rounded-2xl mr-10"
        />
      </motion.div>
    </section>
  );
}
