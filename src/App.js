import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import OurTeam from './components/OurTeam/OurTeam';
import PricingPlans from './components/PricePlans/PricingPlans';
import LatestArticles from './components/LatestArticles/LatestArticles';
import FAQs from './components/FAQs/FAQs';
import Contact from './components/Contact/Contact';
import End from './components/end/End';
import ParticlesBackground from './components/ParticlesBackground';
import HRDashboard from './components/HRDashboard/HRDashboard';
import InterviewSetup from './components/InterviewSetup/InterviewSetup';
import InterviewScreen from './components/InterviewScreen/InterviewScreen';
import FeedbackScreen from './components/FeedbackScreen/FeedbackScreen';

function App() {
  const [interviewConfig, setInterviewConfig] = React.useState({});
  const [responses, setResponses] = React.useState([]);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const handleHRStart = (config) => {
    setInterviewConfig(config);
    window.history.pushState(null, '', '/interview');
  };

  const handleCandidateStart = (config) => {
    setInterviewConfig(config);
    window.history.pushState(null, '', '/interview');
  };

  const handleFinish = (userResponses) => {
    setResponses(userResponses);
    window.history.pushState(null, '', '/feedback');
  };

  const handleBackToLanding = () => {
    setInterviewConfig({});
    setResponses([]);
    window.history.pushState(null, '', '/');
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="App">
      <ParticlesBackground />
      <div className="app-content">
        <Navbar 
          onHRClick={() => window.history.pushState(null, '', '/hr')} 
          onCandidateClick={() => window.history.pushState(null, '', '/setup')} 
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <HeroSection />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <HowItWorks />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <OurTeam />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <PricingPlans />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <LatestArticles />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <FAQs />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Contact />
                </motion.section>
                
                <motion.section 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <End />
                </motion.section>
              </>
            } />
            <Route path="/hr" element={
              <motion.div 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <HRDashboard onStart={handleHRStart} onBack={handleBackToLanding} />
              </motion.div>
            } />
            <Route path="/setup" element={
              <motion.div 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <InterviewSetup onStart={handleCandidateStart} onBack={handleBackToLanding} />
              </motion.div>
            } />
            <Route path="/interview" element={
              <motion.div 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <InterviewScreen config={interviewConfig} onFinish={handleFinish} onBack={handleBackToLanding} />
              </motion.div>
            } />
            {/* Add route for candidate-specific interviews */}
            <Route path="/interview/:candidateId" element={
              <motion.div 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <InterviewScreen onFinish={handleFinish} onBack={handleBackToLanding} />
              </motion.div>
            } />
            <Route path="/feedback" element={
              <motion.div 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <FeedbackScreen responses={responses} onBack={handleBackToLanding} />
              </motion.div>
            } />
          </Routes>
        </main>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
          <span>↑</span>
        </button>
      )}
    </div>
  );
}

export default App;