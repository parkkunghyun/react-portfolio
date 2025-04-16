import React from 'react';

const Skills = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
          Skills & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">🛠️ Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-[15px] text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Frontend</h4>
                <p>React, Next.js, TypeScript, Tailwind</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Backend</h4>
                <p>Node.js, Express</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Database</h4>
                <p>MongoDB, MySQL, Postgres</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">State Management</h4>
                <p>Redux, RTK Query, React-Query, Recoil</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Collaboration</h4>
                <p>Git, Figma</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Cloud</h4>
                <p>GCP, AWS</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">ETC</h4>
                <p>Supabase, Firebase, Vercel, Render</p>
              </div>
            </div>
          </div>

          {/* 🏆 Awards */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">🏆 Awards</h3>
            <div className="space-y-6 text-sm md:text-[15px] text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">2024</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>전남대학교 지역사회혁신 AI 클라우드 경진대회 은상</li>
                  <li>지역문제 해결 창업아이디어 공모전 대상</li>
                  <li>조선대학교 IT 페스티벌 아이디어 대회 금상</li>
                  <li>전국 대학생 SW 창업 아이디어톤 장려상</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">2023</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Wemade 블록체인 해커톤 우수상</li>
                  <li>조선대학교 알고리즘 대회 금상</li>
                  <li>어부바 창업 아이디어 경진대회 우수상</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">2021</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>전남 디지털 격차 아이디어 공모전 장려상</li>
                  <li>Google AI 융합혁신 기술대회 인기상</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🛠️ Skills */}
          

          {/* 📚 Activity & Education */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">📚 Activity & Education</h3>
            <ul className="space-y-6 text-sm md:text-[15px] text-gray-700 leading-relaxed">
              <li>
                <strong className="text-gray-900">DEVSIGN (조선대 IT 동아리)</strong> / 2018.06 ~ 2022.03<br />
                · 2021년 동아리 회장<br />
                · ICT/SW 사회문제 해결 공모전 장려상<br />
                · 조선대 알고리즘 대회 금상
              </li>
              <li>
                <strong className="text-gray-900">광주 ICT 이노베이션스퀘어 블록체인 과정</strong> / 2021.07 ~ 2021.08<br />
                · 블록체인 & Web3.js 실습<br />
                · WEMIX 블록체인 해커톤 우수상
              </li>
              <li>
                <strong className="text-gray-900">전남대 네이버클라우드 AI 중급 과정</strong> / 2022.12<br />
                · NCA 자격증 취득<br />
                · AI 클라우드 경진대회 은상
              </li>
              <li>
                <strong className="text-gray-900">42 Seoul</strong> / 2023.07 ~ 2024.02<br />
                · Peer-to-Peer 학습<br />
                · 문제 해결 & 협업 역량 강화
              </li>
              <li>
                <strong className="text-gray-900">Google CLOUD AI 인재양성 프로그램</strong> / 2024.06 ~ 2024.08<br />
                · GCP 실습 & AI 서비스 프로젝트 적용<br />
                · Google AI 융합혁신 기술대회 인기상
              </li>
              <li>
                <strong className="text-gray-900">널리소프트 프론트엔드 인턴</strong> / 2024.01 ~ 2024.03<br />
                · 사내 프로젝트 Frontend 개발<br />
                · 유지보수 & 신규 기능 개발 참여
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
