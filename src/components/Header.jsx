import React from 'react';
import { motion } from 'framer-motion';
import TitleImg from '../assets/images/title.jpeg';
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-16 md:gap-20 bg-white">
      
      {/* 왼쪽 텍스트 영역 */}
      <motion.div
        className="flex flex-col items-center md:items-start gap-6 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="black-han-sans text-3xl md:text-4xl font-semibold leading-snug text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          사용자 경험을 최우선으로,<br />
          <span className="text-gray-500">1초라도 더 머물고 싶은 화면</span>을 고민하는 <br />
          프론트엔드 개발자 <span className="text-black font-bold">박경현</span>입니다.
        </motion.h1>

        <p className="text-gray-600 text-lg">
          AI와 클라우드 기술을 활용하여 <br className="md:hidden" />
          더 스마트한 사용자 경험을 만듭니다.
        </p>

        {/* 버튼들 */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
           <a
            target="_blank"
            href="/resume.pdf"
            className="px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-100 transition"
          >
            이력서
          </a>
          <a
            target="_blank"
            href="/port.pdf"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            포트폴리오
          </a>
          <a
            target="_blank"
            href="https://github.com/parkkunghyun"
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-100 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            target="_blank"
            href="https://velog.io/@rudgus/posts"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            <SiBloglovin className="text-lg" />
            블로그
          </a>
        </motion.div>
      </motion.div>

      {/* 오른쪽 이미지 */}
      <motion.img
        src={TitleImg}
        alt="logo"
        className="rounded-[2rem] w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Header;
