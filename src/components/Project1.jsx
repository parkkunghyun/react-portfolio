import React from 'react';
import book from '../assets/images/book1.png';

const BookStore = () => {
  return (
    <div className="w-full bg-[#d7d5d3] py-16 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        
        {/* 이미지 */}
        <img src={book} alt="book project" className="w-full md:w-[400px] rounded-2xl shadow-xl" />

        {/* 내용 */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-2xl font-bold mb-4 black-han-sans">
            📚 Book Store API (MERN Stack)
          </h2>

          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>1인 개발</strong><br/>
            전자상거래 사이트는 어떻게 구현했을까? 라는 호기심에서 직접 분석 후 만들어본 온라인 책 쇼핑몰입니다.<br/>
            단순히 화면만이 아닌 필요한 책과 유저인증, 그리고 주문 완료까지의 흐름을 고민하며 만들어본 MERN 프로젝트입니다.<br/>
            앞으로 대시보드 구현 및 검색 기능 최적화 등의 꾸준한 리팩토링을 통해 단순 프로젝트로 그치지 않을 예정입니다.
          </p>

          <div className="mb-4 text-sm leading-relaxed text-gray-700">
            <strong>깃허브 & 사이트 링크</strong><br/>
            <a href="https://book-store-front-smoky.vercel.app/" target="_blank" rel="noreferrer" className="black-han-sans no-underline hover:underline text-gray-900">
              배포 사이트 링크
            </a><br/>
            <a href="https://github.com/parkkunghyun/Book-store-front" target="_blank" rel="noreferrer" className="black-han-sans no-underline hover:underline text-gray-900">
              프론트 깃허브 코드
            </a><br/>
            <a href="https://github.com/parkkunghyun/Book-store-backend" target="_blank" rel="noreferrer" className="black-han-sans no-underline hover:underline text-gray-900">
              벡엔드 깃허브 코드
            </a>
          </div>

          <div className="mb-4 text-sm leading-relaxed text-gray-700">
            <strong>Frontend 기능 및 특징</strong><br/>
            - RTK Query를 활용해 User, Book, Order 관련 API 요청과 데이터 캐싱 최적화<br/>
            - Redux Toolkit으로 장바구니 전역 상태 관리<br/>
            - Firebase Google Login으로 OAuth 인증 구현 + JWT 발급 및 LocalStorage 저장<br/>
            - React-Hook-Form으로 폼 상태 관리 및 유효성 검사 최적화<br/>
          </div>

          <div className="text-sm leading-relaxed text-gray-700">
            <strong>Backend 특이사항 및 트러블슈팅</strong><br/>
            - 관리자 인증처리(JWT)를 위해 credential: true 옵션 적용<br/>
            - 개발 및 배포 환경 모두 CORS 설정 대응<br/>
            - 에러 핸들링 및 응답 구조 개선으로 안정성 강화<br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
