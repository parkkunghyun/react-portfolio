import React from 'react';
import speak from '../assets/images/speak1.png';

const GoatSpeak = () => {
  return (
    <div className="w-full bg-[#d7d5d3] py-16 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        
        {/* 이미지 */}
        <img src={speak} alt="goat speak project" className="w-full md:w-[400px] rounded-2xl shadow-xl" />

        {/* 내용 */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-2xl font-bold mb-4 black-han-sans">
            🐐 Goat Speak
          </h2>

          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>1인 개발</strong><br/>
            파파고 서비스에서 영감을 받아 "언어 분석 및 번역 서비스는 어떻게 동작할까?"에 대한 호기심에서 시작된 개인 프로젝트입니다.<br/>
            단순 UI 구현을 넘어서 사용자 경험 개선과 서비스 안정성을 목표로 다양한 기술적 시도를 진행했습니다.
          </p>

          <div className="mb-4 text-sm leading-relaxed text-gray-700">
            <strong>깃허브 & 사이트 링크</strong><br/>
            <a href="https://github.com/parkkunghyun/Next-Papago-speak" target="_blank" rel="noreferrer" className="black-han-sans no-underline hover:underline text-gray-900">깃허브 링크</a><br/>
            <a href="https://next-papago-speak-852089656314.us-central1.run.app/" target="_blank" rel="noreferrer" className="black-han-sans no-underline hover:underline text-gray-900">사이트 링크</a>
          </div>

          <div className="mb-4 text-sm leading-relaxed text-gray-700">
            <strong>주요기능 및 특징</strong><br/>
            - React Query를 활용해 API 호출 최적화 및 불필요한 네트워크 요청 제거 (평균 응답속도 1000ms → 120ms 개선)<br/>
            - 비동기 처리 로직에 대한 테스트 코드(Vitest, React Testing Library) 작성<br/>
            - Github Actions 기반 CI/CD 파이프라인 구축 (자동 배포 프로세스 / Google Cloud Run 활용)<br/>
            - VM 방식 대신 Cloud Run 서버리스 구조로 하루 배포 비용 400원 → 30원 미만 절감
          </div>

          <div className="text-sm leading-relaxed text-gray-700">
            <strong>에러 핸들링 및 UX 개선</strong><br/>
            - API 실패나 예외 상황 대응 로직 강화<br/>
            - 번역 처리 중 로딩 상태, 성공/실패 결과에 따른 UI 처리<br/>
            - 에러 원인 안내 및 재시도 기능 제공
          </div>

          <p className="mt-4 text-sm text-gray-700">
            <strong>Frontend:</strong> Next.js, Tanstack Query<br/>
            <strong>API:</strong> Google Translate API, Text To Speech API
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoatSpeak;
