'use client';

import React from 'react';
import { ArrowRight, Clock, Award, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function AboutSection() {
  const { t, lang } = useLanguage();

  const content = {
    UZ: {
      mission: "BIZNING MISSIYAMIZ",
      // Updated text based on your request
      mainText: "Biz yuridik sohada shunchaki xizmatlar yoki hujjatlar emas, balki to'liq xotirjamlik taqdim etishga harakat qilamiz. Muammoga duch kelgan mijozlarga eng optimal yechim topilishida maksimal darajada ko'maklashamiz. Mijozlarimiz muammosini o'zimiznikidek ko'rgan holda harakat qilamiz.",
      btnText: "Kompaniya haqida to'liq",
      cards: [
        { title: "Mavjudlik", desc: "Bizning jamoamiz kuniga 24 soat, haftada 7 kun yuridik xizmatlar ko'rsatadi. Biz har doim sizni tinglashga va yordam berishga tayyormiz, hamma narsani tushunarli tarzda tushuntiramiz, shuningdek mazali qahva bilan mehmon qilamiz.", icon: <Clock size={28} /> },
        { title: "Professionallik", desc: "Biz — kuchli tajribaga va mustahkam tamoyillarga ega professional yuristlar va advokatlar jamoasimiz.", icon: <Award size={28} /> },
        { title: "Yetakchilik", desc: "Bizning kompaniyamiz ishni yarim yo'lda tashlashni yoki chekinishni bilmaydi. Biz faqat g'alaba qozonishni bilamiz. Bunga o'zingiz ishonch hosil qiling. Muvaffaqiyatli ishlarimiz ro'yxati va ijobiy sharhlar o'zlari uchun gapiradi.", icon: <Trophy size={28} /> }
      ]
    },
    RU: {
      mission: "НАША МИССИЯ",
      mainText: "Мы не просто предоставляем услуги или документы, мы стремимся подарить полное спокойствие. Мы максимально помогаем найти оптимальное решение для клиентов, столкнувшихся с проблемами. Мы относимся к проблемам наших клиентов как к своим собственным.",
      btnText: "О компании",
      cards: [
        { title: "Доступность", desc: "Наша команда предоставляет юридические услуги 24 часа в сутки 7 дней в неделю. Мы всегда готовы выслушать вас и помочь, доступно все объяснив, а еще угостим вкусным кофе.", icon: <Clock size={28} /> },
        { title: "Профессионализм", desc: "Мы — команда профессиональных юристов и адвокатов с внушительным послужным списком и железными принципами.", icon: <Award size={28} /> },
        { title: "Лидерство", desc: "Наша компания не умеет бросать дело на полпути или отступать. Мы можем только побеждать. Убедитесь в этом сами. Список наших успешных дел и положительные отзывы говорят сами за себя.", icon: <Trophy size={28} /> }
      ]
    },
    EN: {
      mission: "OUR MISSION",
      mainText: "We strive to provide not just services or documents, but complete peace of mind. We assist clients in finding the optimal solution to their problems. We treat our clients' problems as our own.",
      btnText: "About Company",
      cards: [
        { title: "Availability", desc: "Our team provides legal services 24 hours a day, 7 days a week. We are always ready to listen and help, explaining everything clearly, and we'll even treat you to a delicious coffee.", icon: <Clock size={28} /> },
        { title: "Professionalism", desc: "We are a team of professional lawyers and attorneys with an impressive track record and firm principles.", icon: <Award size={28} /> },
        { title: "Leadership", desc: "Our company never abandons a case halfway or retreats. We only know how to win. See for yourself. Our list of successful cases and positive reviews speak for themselves.", icon: <Trophy size={28} /> }
      ]
    }
  };

  const text = content[lang as keyof typeof content] || content['UZ'];

  return (
    <section className="about-section">
      <div className="container">
        
        {/* TOP: Text Content (Centered and Wide) */}
        <div className="text-wrapper">
          <span className="mission-label">{text.mission}</span>
          <p className="main-desc">{text.mainText}</p>
          
          <Link href="/about" className="cta-button">
            {text.btnText} <ArrowRight size={20} />
          </Link>
        </div>

        {/* BOTTOM: Cards Grid */}
        <div className="cards-grid">
          {text.cards.map((card, index) => (
            <div key={index} className="feature-card">
              <div className="icon-box">
                {card.icon}
              </div>
              <div className="card-text">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .about-section {
          background-color: var(--bg-surface);
          padding: 100px 5%;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px; /* Space between text and cards */
        }

        /* --- TEXT STYLES --- */
        .text-wrapper {
          max-width: 800px;
          margin: 0 auto; /* Center alignment */
          text-align: left; /* Keep text left aligned for readability, or change to center */
        }

        .mission-label {
          color: #C5A059;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          display: block;
          margin-bottom: 20px;
        }

        .main-desc {
          font-family: var(--font-merriweather);
          font-size: 1.25rem; /* SMALLER SIZE as requested (was 1.8rem) */
          line-height: 1.8;
          color: var(--text-main);
          margin-bottom: 30px;
          font-weight: 400;
        }

        .cta-button {
          display: inline-flex; align-items: center; gap: 10px;
          background-color: #C5A059; color: #fff;
          padding: 14px 28px; font-weight: 700; font-size: 0.95rem;
          border-radius: 4px; transition: all 0.3s ease; text-decoration: none;
        }
        .cta-button:hover { background-color: #b38f4a; transform: translateY(-2px); }

        /* --- CARDS GRID --- */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 Columns in 1 Row */
          gap: 30px;
        }

        .feature-card {
          background: var(--bg-card);
          padding: 30px; border-radius: 12px;
          display: flex; flex-direction: column; align-items: flex-start; gap: 20px;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: #C5A059;
        }

        .icon-box {
          background: rgba(197, 160, 89, 0.15); color: #C5A059;
          width: 50px; height: 50px; border-radius: 8px;
          display: flex; align-items: center; justifyContent: center; flex-shrink: 0;
        }

        .card-text h3 {
          font-size: 1.2rem; font-weight: 700;
          color: var(--text-main);
          margin-bottom: 10px; font-family: var(--font-merriweather);
        }

        .card-text p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
          .cards-grid {
            grid-template-columns: 1fr; /* Stack cards on mobile */
          }
          .text-wrapper {
            text-align: center; /* Center text on mobile */
          }
          .cta-button { margin: 0 auto; } /* Center button */
        }
      `}</style>
    </section>
  );
}