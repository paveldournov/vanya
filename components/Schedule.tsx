import React from 'react';
import { Performance } from '../types';

const scheduleData: Performance[] = [
  { date: '8 ноября', day: 'Суббота', time: '19:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '9 ноября', day: 'Воскресенье', time: '17:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '14 ноября', day: 'Пятница', time: '19:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '15 ноября', day: 'Суббота', time: '19:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '16 ноября', day: 'Воскресенье', time: '17:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '21 ноября', day: 'Пятница', time: '19:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '22 ноября', day: 'Суббота', time: '19:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
  { date: '23 ноября', day: 'Воскресенье', time: '17:00', url: 'https://theatre33.ludus.com/index.php?show_id=200496164' },
];

const Schedule: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-amber-300">Расписание и билеты</h2>
      <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-lg shadow-2xl p-6">
        <div className="divide-y divide-gray-700">
          {scheduleData.map((perf, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 hover:bg-gray-700/50 rounded-md transition-colors">
              <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-xl font-bold text-white">{perf.date}</p>
                <p className="text-gray-400">{perf.day}, {perf.time}</p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href={perf.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-6 rounded-md transition-transform duration-300 hover:scale-105 inline-block"
                >
                  Купить билет
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;