import React from 'react';
import { motion } from 'framer-motion';
import TitleImg from '../assets/images/img2.jpeg';

const Footer = () => {
  return (
    <section className="flex bg-white flex-col items-center justify-center min-h-screen text-center gap-10">
      <motion.img
        src={TitleImg}
        alt="logo"
        className="rounded-full w-[300px] h-[300px] object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="black-han-sans text-3xl md:text-4xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        화면 너머까지 고민하는 <br />
        <span className="text-gray-500">프론트엔드 개발자 박경현</span> 입니다.
        <br />
        <br />
        <span className="text-[20px] text-gray-400">
          끝까지 읽어주셔서 감사합니다 :)
        </span>
      </motion.h1>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          target="_blank"
          href="https://github.com/parkkunghyun"
          className="font-bold border-2 border-black rounded-full px-6 py-2 hover:bg-gray-200 transition duration-300 no-underline"
        >
          깃허브
        </a>
        <a
          target="_blank"
          href="https://velog.io/@rudgus/posts"
          className="font-bold bg-black text-white rounded-full px-6 py-2 hover:opacity-80 transition duration-300 no-underline"
        >
          블로그
        </a>
      </motion.div>
    </section>
  );
};

export default Footer;
