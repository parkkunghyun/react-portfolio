import React from 'react';
import { motion } from 'framer-motion';
import TitleImg from '../assets/images/title.jpeg';

const Header = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center gap-10">
      <motion.img
        src={TitleImg}
        alt="logo"
        className="rounded-full w-[250px] h-[250px] object-cover shadow-lg"
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
        사용자 경험을 최우선으로 생각하며,<br />
        <span className="text-gray-500">1초라도 더 머물고 싶은 화면</span>을 고민하는 <br />
        프론트엔드 개발자 <span className="font-bold text-black">박경현</span>입니다.
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          target="_blank"
          href="https://drive.google.com/file/d/12bRPVUIYxFPb7fGEK3EWHOsBelOJMdpW/view?usp=sharing"
          className="font-bold border-2 border-black rounded-full px-6 py-2 hover:bg-gray-200 transition duration-300"
        >
          이력서 다운로드
        </a>
        <a
          target="_blank"
          href="https://github.com/parkkunghyun"
          className="font-bold border-2 border-black rounded-full px-6 py-2 hover:bg-gray-200 transition duration-300"
        >
          깃허브
        </a>
        <a
          target="_blank"
          href="https://velog.io/@rudgus/posts"
          className="font-bold bg-black text-white rounded-full px-6 py-2 hover:bg-gray-700 transition duration-300"
        >
          블로그
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
