import React from 'react'
import teach from "../assets/images/img1.jpeg";

const Skills = () => {
  return (
    <div className='w-full bg-[#d7d5d3] py-10 px-4 flex flex-col gap-10'>
      <h2 className='text-4xl font-bold text-center'>Experience & Learning</h2>

      <div className='flex flex-col md:flex-row justify-center items-start gap-8'>

        {/* Left - Learn & Share */}
        <div className='max-w-2xl w-full p-6 rounded-2xl shadow-xl border border-gray-200'>
          <h3 className='text-2xl font-bold mb-4'>💡 Learn & Share</h3>
          <p className='text-gray-700 leading-relaxed text-[14px] mb-6'>
            스스로 학습의 방향을 주도적으로 설정하며, 필요한 지식을 습득하기 위해 외부 교육을 적극적으로 수강했습니다. <br /><br />
            배운 내용을 단순히 익히는 데 그치지 않고, 대회 활동에 적용하거나 후배들에게 강의로 공유하며 지식을 심화하고 체계적으로 내재화했습니다.
          </p>
          <img src={teach} alt="teach" className='rounded-2xl w-full object-cover' />
        </div>

        {/* Right - Activity & Education */}
        <div className='max-w-2xl w-full p-6 '>
          <h3 className='text-2xl font-bold mb-4'>📚 Activity & Education</h3>
          <ul className='flex flex-col gap-4 text-[15px] text-gray-700 leading-relaxed'>

            <li>
              <span className='font-bold text-gray-900'>DEVSIGN (조선대 IT 동아리)</span> / 2018.06 ~ 2022.03 <br />
              · 2021년 동아리 회장 <br />
              · ICT/SW 사회문제 해결 공모전 장려상 <br />
              · 조선대 알고리즘 대회 금상
            </li>

            <li>
              <span className='font-bold text-gray-900'>광주 ICT 이노베이션스퀘어 블록체인 과정</span> / 2021.07 ~ 2021.08 <br />
              · 블록체인 & Web3.js 실습 <br />
              · WEMIX 블록체인 해커톤 우수상
            </li>

            <li>
              <span className='font-bold text-gray-900'>전남대 네이버클라우드 AI 중급 과정</span> / 2022.12 <br />
              · NCA 자격증 취득 <br />
              · AI 클라우드 경진대회 은상
            </li>

            <li>
              <span className='font-bold text-gray-900'>42 Seoul</span> / 2023.07 ~ 2024.02 <br />
              · Peer-to-Peer 학습 <br />
              · 문제 해결 & 협업 역량 강화
            </li>

            <li>
              <span className='font-bold text-gray-900'>Google CLOUD AI 인재양성 프로그램</span> / 2024.06 ~ 2024.08 <br />
              · GCP 실습 & AI 서비스 프로젝트 적용 <br />
              · Google AI 융합혁신 기술대회 인기상
            </li>

            <li>
              <span className='font-bold text-gray-900'>널리소프트 프론트엔드 인턴</span> / 2024.01 ~ 2024.03 <br />
              · 사내 프로젝트 Frontend 개발 <br />
              · 유지보수 & 신규 기능 개발 참여
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;
