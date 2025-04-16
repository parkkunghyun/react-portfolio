import React from 'react';
import { motion } from 'framer-motion';
import TitleImg from '../assets/images/img1.jpeg';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
       <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 자기 소개서
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left: Image */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="w-full md:w-1/2"
        >
          <img
            src={TitleImg}
            alt="About"
            className="rounded-2xl shadow-2xl object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-10"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              사용자 경험을 고민하는 개발자입니다.
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              단순히 예쁜 UI를 만드는 것을 넘어, <strong>사용자가 직관적으로 이해하고 쉽게 사용할 수 있는 경험</strong>을 설계하는 데 집중합니다. 디자인과 기능 사이의 균형을 고민하며, 작은 인터랙션 하나도 사용자 입장에서 생각하고 개선하는 것을 좋아합니다.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              AI와 클라우드를 적극적으로 활용합니다.
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              "프론트엔드 개발자가 AI를?"이라고 생각할 수 있지만, 이제는 <strong>AI를 활용하지 않는 서비스가 드물 정도로 보편화</strong>되었습니다. 저는 이러한 흐름에 발맞춰 GCP와 AI 기술을 적극 도입하여, 반려견 감정 분석 서비스, 나만의 챗봇 도우미, 실시간 번역 서비스 등을 직접 기획하고 개발해 보았습니다. <strong>프론트엔드와 AI의 접점</strong>에서 새로운 가치를 만들어가는 것에 흥미를 느낍니다.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              다양한 환경에서 커뮤니케이션을 리드해왔습니다.
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              10회 이상 대회에 참가하며 <strong>90% 이상 팀 리더 역할</strong>을 맡아왔습니다. 프로젝트를 이끌며 항상 “<strong>왜 그렇게 생각했는지</strong>”, “<strong>어떻게 더 나아질 수 있을지</strong>”를 팀원들과 함께 고민했습니다. 서로의 의견을 존중하며 능동적으로 소통한 결과, 매년 2건 이상의 수상, 총 <strong>9개의 상</strong>을 수상할 수 있었습니다.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
