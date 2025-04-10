import React from 'react'
import { motion } from 'framer-motion'

const awards = [
  {
    year: "2024",
    items: [
      "전남대학교 지역사회혁신 AI 클라우드 경진대회 은상",
      "지역문제 해결 창업아이디어 공모전 대상",
      "조선대학교 IT 페스티벌 아이디어 대회 금상",
      "전국 대학생 SW 창업 아이디어톤 장려상"
    ]
  },
  {
    year: "2023",
    items: [
      "Wemade 블록체인 해커톤 우수상",
      "조선대학교 알고리즘 대회 금상",
      "어부바 창업 아이디어 경진대회 우수상"
    ]
  },
  {
    year: "2021",
    items: [
      "전남 디지털 격차 아이디어 공모전 장려상",
      "Google AI 융합혁신 기술대회 인기상"
    ]
  }
]

const skills = [
  { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" },
  { title: "Backend", desc: "Node.js, Express" },
  { title: "Database", desc: "MongoDB, MySQL, Postgres" },
  { title: "State Management", desc: "Redux, RTK Query, React-Query, Recoil" },
  { title: "Collaboration", desc: "Git, Figma" },
  { title: "Cloud", desc: "GCP, AWS" },
  { title: "ETC", desc: "Supabase, Firebase, Vercel, Render" },
]

const About = () => {
  return (
    <section className='w-full bg-[#d7d5d3] py-0 px-4 flex flex-col gap-10'>

      <h2 className='text-4xl font-bold text-center'>About Me</h2>
      <p className='text-center text-gray-600 mt-10'>
        학교와 외부 교육에서 배운 이론을 실제 서비스에 적용하고, 결과를 검증하기 위해 다양한 대회에 참가했습니다.
      </p>

      <div className='flex flex-col md:flex-row justify-center gap-10'>

        {/* Left - 수상 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1 max-w-2xl bg-white p-6 rounded-xl shadow-md'
        >
          <h3 className='text-2xl font-semibold mb-4'>🏆 Awards</h3>
          {awards.map((award) => (
            <div key={award.year} className='mb-4'>
              <p className='font-bold text-indigo-600'>{award.year}</p>
              <ul className='list-disc ml-5 text-gray-700 text-sm'>
                {award.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Right - 스킬 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex-1 bg-white max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-200'
        >
          <h3 className='text-3xl font-extrabold mb-6 text-gray-900 flex items-center gap-2'>
            🛠️ Skills
          </h3>

          <ul className='grid grid-cols-2 gap-x-6 gap-y-4 text-[15px] text-gray-700'>
            {skills.map((skill, idx) => (
              <li key={idx} className='flex flex-col'>
                <span className='font-bold text-gray-900 mb-1'>{skill.title}</span>
                <span className='text-gray-600'>{skill.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>


      </div>

    </section>
  )
}

export default About
