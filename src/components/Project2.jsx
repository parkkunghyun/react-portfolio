import React, { useEffect, useState } from 'react';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';
import cloud4 from '../assets/images/cloud4.png';
import cloud5 from '../assets/images/cloud5.png';

const images = [cloud1, cloud2, cloud3, cloud4, cloud5];

const Project2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        {/* 슬라이드 이미지 */}
        <img
          src={images[currentIndex]}
          alt="project demo"
          className="w-full md:w-[400px] h-[300px] rounded-2xl shadow-xl transition duration-500"
        />

        {/* 텍스트 내용 */}
        <div className="flex-1">
          <h2 className="text-2xl flex items-center gap-1 md:text-3xl font-bold mb-4 black-han-sans">
            GCP 기반 AI 통합 서비스 플랫폼  <span className='text-xs  text-gray-500 '>1인 개발</span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
           
            Google Cloud Platform(GCP)의 다양한 AI API를 통합하여 챗봇, 번역, OCR 기능을 제공하는 플랫폼입니다.
            GCP의 서버리스 인프라를 활용해 효율적인 AI 기능을 안정적으로 서비스합니다.
          </p>

          <div className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>🔗 GitHub & 사이트</strong><br />
            <a
              href="https://github.com/parkkunghyun/gcp-varient-api-skills"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-600"
            >
              GitHub 저장소
            </a><br />
            <a
              href="https://gcp-api-dumps-852089656314.us-central1.run.app"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-600"
            >
              서비스 링크
            </a>
          </div>

          <div className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>✨ 주요 기능 및 특징</strong><br />
            - React Query로 Translate API / TTS API 호출 최적화 → 평균 응답 시간 1000ms → 120ms로 개선<br />
            - GitHub Actions + Cloud Run을 이용한 자동 CI/CD 파이프라인 구축<br />
            - Cloud Run을 통해 서버리스 환경에서 동작 → 하루 서버 비용 약 30원 미만으로 절감
          </div>

          <div className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>🤖 AI 및 API 통합</strong><br />
            - Gemini AI를 기반으로 자연어 챗봇 제공 (3줄 요약 응답)<br />
            - Google Cloud Vision API로 OCR 기능 구현<br />
            - Next.js 프론트엔드와 Node.js + Express 백엔드 구성<br />
            - 백엔드는 VM 환경에서 PM2로 상시 운영 설정
          </div>

          <p className="mt-4 text-sm text-gray-700">
            <strong>🛠️ 기술 스택</strong><br />
            Frontend: Next.js, React Query<br />
            Backend: Node.js, Express<br />
            API: Translate API, Text-to-Speech API, Cloud Vision API, Gemini API<br />
            Deploy: Google Cloud Run, VM(PM2)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project2;
