import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const projects = [
  {
    id: '01',
    name: 'Geopolitical Signal Engine',
    images: ['gp1.png', 'gp2.png', 'gp3.png'],
    problem: 'Markets move before you hear the news.',
    journey: 'Python → News APIs → NLP → Sentiment Scoring → Financial APIs → Price Correlation Models',
    solution: 'Reads global news in real-time and outputs a probability score of stock price movement before the market reacts.',
    stack: ['Python', 'News APIs', 'NLP', 'Financial APIs'],
    classified: false,
  },
  {
    id: '02',
    name: 'Jarvis — AI Desktop Assistant',
    images: [],
    problem: 'I wanted what Tony Stark had.',
    journey: 'Python → Speech Recognition → LLM APIs → PyAutoGUI → OS Automation → Command Parser',
    solution: 'Talk to your laptop. It listens. It executes. No clicks. No typing. Just intent.',
    stack: ['Python', 'LLM APIs', 'PyAutoGUI', 'Speech Recognition', 'OS Automation'],
    classified: false,
  },
  {
    id: '03',
    name: 'LoanBook',
    images: ['lb1.png', 'lb2.png', 'lb3.png'],
    problem: 'Lenders forget. Borrowers disappear. Money is lost.',
    journey: 'React → Node.js → MongoDB → WhatsApp API → Interest Calculator → Push Notifications',
    solution: 'Tracks every loan, calculates interest automatically, sends WhatsApp reminders on exact due dates.',
    stack: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
    classified: false,
  },
  {
    id: '04',
    name: 'ResumeAI',
    images: [],
    problem: '50 jobs. 50 resumes. Nobody has time for that.',
    journey: 'Python → LinkedIn Scraper → Gemini API → ATS Scoring → PDF Generator → SMTP',
    solution: 'Scrapes job descriptions, generates a tailored resume, emails it to you every morning. Automated.',
    stack: ['Python', 'Gemini API', 'LinkedIn Scraper', 'SMTP', 'PDF Generation'],
    classified: false,
  },
  {
    id: '05',
    name: 'MangaFlow',
    images: ['mf-1.png', 'mf-2.png'],
    problem: '[CLASSIFIED]',
    journey: '[CLASSIFIED]',
    solution: 'Details withheld intentionally. This one is not ready to be talked about yet.',
    stack: ['[CLASSIFIED]'],
    classified: true,
  },
  {
    id: '06',
    name: 'Website Builder',
    images: ['wb1.png'],
    problem: 'Building a website still takes days.',
    journey: 'Claude API → Prompt Parser → AI Asset Generation → React → Code Generation Engine',
    solution: 'Describe it. Generate it. Deploy it. From prompt to production in minutes.',
    stack: ['Claude API', 'React', 'AI Generation', 'JavaScript'],
    classified: false,
  },
  {
    id: '07',
    name: 'Synthiq',
    images: ['sq1.png', 'sq2.png'],
    problem: 'Three AIs. Three tabs. One broken workflow.',
    journey: 'React → OpenAI API → Anthropic API → Gemini API → Routing Layer → Unified Dashboard',
    solution: 'One prompt. Three minds. The right AI picks itself based on what you need.',
    stack: ['React', 'OpenAI API', 'Anthropic API', 'Gemini API', 'Node.js'],
    classified: false,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        background: '#040404',
        width: '100%',
        margin: 0,
        padding: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="text-center pt-20 pb-4 px-8" style={{ flexShrink: 0 }}>
        <span style={{
          fontSize: '11px',
          color: '#7B2FFF',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '12px'
        }}>WORK</span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: '800',
          color: '#ffffff',
          fontFamily: 'Manrope, sans-serif',
          margin: 0
        }}>Things I've Built</h2>
      </div>

      <div style={{ flex: 1, minHeight: 0, position: 'relative', background: '#040404', width: '100%' }}>
        <ScrollStack
          useWindowScroll={false}
          itemDistance={120}
          itemScale={0.04}
          itemStackDistance={25}
          stackPosition="15%"
          baseScale={0.88}
          blurAmount={1}
        >
          {projects.map((project, index) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="project-stack-card"
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0
                  ? '1fr 1fr'
                  : '1fr 1fr',
                minHeight: '420px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#0D0D0D',
                border: project.classified
                  ? '1px solid rgba(255,51,51,0.2)'
                  : '1px solid #1a1a1a',
                boxShadow: project.classified
                  ? '0 0 40px rgba(255,51,51,0.06)'
                  : '0 0 40px rgba(123,47,255,0.04)',
              }}>

                {/* IMAGE SIDE */}
                <div style={{
                  order: index % 2 === 0 ? 0 : 1,
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#080808',
                  minHeight: '320px',
                }}>
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        transition: 'transform 0.6s ease',
                      }}
                      onMouseEnter={e => {
                        (e.target as HTMLImageElement).style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLImageElement).style.transform = 'scale(1)';
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px dashed #222',
                      gap: '12px',
                    }}>
                      <svg width="32" height="32" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span style={{
                        fontSize: '10px',
                        color: '#333',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                      }}>Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* CONTENT SIDE */}
                <div style={{
                  order: index % 2 === 0 ? 1 : 0,
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '20px',
                }}>
                  {/* Number + Name */}
                  <div>
                    <span style={{
                      fontSize: '11px',
                      color: project.classified ? '#ff3333' : '#7B2FFF',
                      letterSpacing: '3px',
                      fontFamily: 'monospace',
                      display: 'block',
                      marginBottom: '8px',
                    }}>{project.id}</span>
                    <h3 style={{
                      fontSize: 'clamp(20px, 2.5vw, 28px)',
                      fontWeight: '700',
                      color: '#ffffff',
                      fontFamily: 'Manrope, sans-serif',
                      margin: '0 0 8px 0',
                      lineHeight: '1.2',
                    }}>{project.name}</h3>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: project.classified
                        ? '#ff3333'
                        : 'linear-gradient(90deg, #7B2FFF, #00F5FF)',
                      borderRadius: '2px',
                    }}/>
                  </div>

                  {/* Problem */}
                  <div>
                    <span style={{
                      fontSize: '9px',
                      color: '#444',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}>THE PROBLEM</span>
                    <p style={{
                      fontSize: '13px',
                      color: project.classified ? '#ff3333' : '#bbb',
                      margin: 0,
                      lineHeight: '1.5',
                      fontFamily: project.classified ? 'monospace' : 'inherit',
                      letterSpacing: project.classified ? '2px' : 'normal',
                    }}>{project.problem}</p>
                  </div>

                  {/* Journey */}
                  <div>
                    <span style={{
                      fontSize: '9px',
                      color: '#444',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}>THE JOURNEY</span>
                    <p style={{
                      fontSize: '11px',
                      color: project.classified ? '#ff3333' : '#555',
                      margin: 0,
                      lineHeight: '1.6',
                      fontFamily: 'monospace',
                      letterSpacing: project.classified ? '2px' : 'normal',
                    }}>{project.journey}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <span style={{
                      fontSize: '9px',
                      color: '#444',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}>THE SOLUTION</span>
                    <p style={{
                      fontSize: '13px',
                      color: project.classified ? '#ff3333' : '#bbb',
                      margin: 0,
                      lineHeight: '1.5',
                      fontFamily: project.classified ? 'monospace' : 'inherit',
                      letterSpacing: project.classified ? '2px' : 'normal',
                    }}>{project.solution}</p>
                  </div>

                  {/* Tech Stack Pills */}
                  {!project.classified && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}>
                      {project.stack.map(tech => (
                        <span key={tech} style={{
                          background: '#111',
                          border: '1px solid #222',
                          color: '#7B2FFF',
                          borderRadius: '20px',
                          padding: '4px 12px',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          whiteSpace: 'nowrap',
                        }}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;
