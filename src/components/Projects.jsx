import React from 'react';
import book from '../assets/images/book1.png';
import speak from '../assets/images/speak1.png';

const Projects = () => {
  return (
    <div className="w-full bg-[#d7d5d3] py-10 px-4 flex flex-col gap-10">
      <h2 className="text-4xl font-bold text-center black-han-sans">Projects</h2>

      {/* Book Store Project */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img src={book} alt="book store project" className="w-full md:w-[400px] rounded-2xl shadow-lg" />
        <div className="max-w-2xl w-full bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 black-han-sans">📚 Book Store API (MERN Stack)</h3>
          <p className="text-gray-700 text-[14px] mb-4 leading-relaxed">
            1인 개발 | 전자상거래 사이트는 어떻게 구현했을까? 라는 호기심에서 직접 분석 후 만들어본 온라인 책 쇼핑몰입니다.<br/>
            유저 인증, 장바구니, 주문까지 전반적인 흐름을 고민하며 개발했습니다. 앞으로 지속적인 리팩토링과 대시보드 개발을 통해 프로젝트를 확장할 예정입니다.
          </p>

          <div className="text-[14px] mb-3">
            <span className="font-semibold">Frontend:</span> React, Redux Toolkit, RTK Query, Firebase Auth, React Hook Form
          </div>
          <div className="text-[14px] mb-3">
            <span className="font-semibold">Backend:</span> Node.js, Express, MongoDB, JWT
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://book-store-front-smoky.vercel.app/" target="_blank" rel="noreferrer" className="black-han-sans no-underline text-blue-600 hover:text-blue-800">배포 사이트</a>
            <a href="https://github.com/parkkunghyun/Book-store-front" target="_blank" rel="noreferrer" className="black-han-sans no-underline text-blue-600 hover:text-blue-800">프론트 깃허브</a>
            <a href="https://github.com/parkkunghyun/Book-store-backend" target="_blank" rel="noreferrer" className="black-han-sans no-underline text-blue-600 hover:text-blue-800">백엔드 깃허브</a>
          </div>
        </div>
      </div>

      {/* Goat Speak Project */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img src={speak} alt="goat speak project" className="w-full md:w-[400px] rounded-2xl shadow-lg" />
        <div className="max-w-2xl w-full bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 black-han-sans">🐐 Goat Speak</h3>
          <p className="text-gray-700 text-[14px] mb-4 leading-relaxed">
            1인 개발 | 파파고 서비스에서 영감을 받아 '언어 분석 및 번역 서비스는 어떻게 동작할까?' 라는 궁금증에서 시작된 프로젝트입니다.<br/>
            API 최적화, 사용자 경험 개선, 자동 배포까지 다양한 기술적 시도를 진행했습니다.
          </p>

          <div className="text-[14px] mb-3">
            <span className="font-semibold">Frontend:</span> Next.js, Tanstack Query, Vitest, Testing Library
          </div>
          <div className="text-[14px] mb-3">
            <span className="font-semibold">API:</span> Google Translate API, Text To Speech API
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://next-papago-speak-852089656314.us-central1.run.app/" target="_blank" rel="noreferrer" className="black-han-sans no-underline text-blue-600 hover:text-blue-800">배포 사이트</a>
            <a href="https://github.com/parkkunghyun/Next-Papago-speak" target="_blank" rel="noreferrer" className="black-han-sans no-underline text-blue-600 hover:text-blue-800">깃허브 코드</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
