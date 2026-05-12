import React, { useState } from 'react';
import {
    BankOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  RiseOutlined,
  SafetyOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
  RightOutlined,
  SearchOutlined,
  FilterOutlined,
  StarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  BookOutlined,
  GlobalOutlined,
  HeartOutlined,
  BulbOutlined,
  SmileOutlined,
  FileTextOutlined,
  IdcardOutlined,
  CameraOutlined,
  MedicineBoxOutlined,
  MailOutlined,
  ProfileOutlined,
  UserOutlined
} from '@ant-design/icons';

const Nss = () => {
  const [selectedTab, setSelectedTab] = useState('options');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [hoverCard, setHoverCard] = useState(null);

  const serviceOptions = [
    {
      id: 1,
      title: "Teaching Service",
            icon:"🎓",

      description: "Teach in secondary schools across the country",
      requirements: "Degree in any field, passion for education",
      benefits: ["Monthly allowance", "Housing stipend", "Teaching certificate", "Priority for education roles"],
      locations: ["All regions", "Rural areas especially needed"],
      duration: "12 months",
      popularity: 85,
      matchScore: 92
    },
    {
      id: 2,
      title: "Healthcare Service",
      icon: <HeartOutlined className="icon" />,
      description: "Support healthcare delivery in hospitals and clinics",
      requirements: "Medical, Nursing, or Allied Health degrees",
      benefits: ["Clinical experience", "Professional network", "Health insurance", "Skills certificate"],
      locations: ["District hospitals", "Community clinics"],
      duration: "12 months",
      popularity: 78,
      matchScore: 45
    },
    {
      id: 3,
      title: "Agricultural Service",
      icon: <RiseOutlined className="icon" />,
      description: "Support agricultural extension and food security",
      requirements: "Agriculture, Biology, or related degrees",
      benefits: ["Farming resources", "Training programs", "Rural allowance", "Entrepreneurship support"],
      locations: ["Rural communities", "Agricultural zones"],
      duration: "12 months",
      popularity: 65,
      matchScore: 30
    },
    {
      id: 4,
      title: "Administrative Service",
      icon: <HomeOutlined className="icon" />,
      description: "Work in government agencies and district assemblies",
      requirements: "Any degree, good organizational skills",
      benefits: ["Office experience", "Government connections", "Career development", "Mentorship"],
      locations: ["Urban centers", "District capitals"],
      duration: "12 months",
      popularity: 90,
      matchScore: 88
    }
  ];

  const locations = [
    "Greater Accra", "Ashanti", "Western", "Eastern", 
    "Central", "Volta", "Northern", "Upper East", "Upper West"
  ];

  const fields = ["Teaching", "Healthcare", "Agriculture", "Administration", "Engineering", "Finance"];

  const aiTips = [
    {
      title: "Based on your Computer Science background",
      tip: "Consider teaching ICT or applying for administrative roles in tech hubs. Your skills are highly valuable in urban centers.",
      priority: "High match potential"
    },
    {
      title: "Location Strategy",
      tip: "While urban postings are competitive, rural areas offer faster career growth and additional allowances.",
      priority: "Strategic advice"
    },
    {
      title: "Timeline Alert",
      tip: "Registration opens in 3 months. Prepare your documents now - passport photos, academic transcripts, and medical reports.",
      priority: "Urgent"
    }
  ];

  const timeline = [
    { month: "Month 1-2", activity: "Application and documentation", status: "upcoming" },
    { month: "Month 3", activity: "Posting announcements", status: "upcoming" },
    { month: "Month 4", activity: "Registration and orientation", status: "upcoming" },
    { month: "Month 5-16", activity: "Active service period", status: "upcoming" }
  ];

  const successStories = [
    {
      name: "Michael Ofori",
      role: "Former Teaching Service",
      achievement: "Now Education Minister's aide",
      quote: "My service year opened doors I never imagined."
    },
    {
      name: "Dr. Sarah Mensah",
      role: "Healthcare Service Alumni",
      achievement: "Now leading regional health initiative",
      quote: "The rural posting challenged and shaped me."
    }
  ];

  return (
    <div className="ns-container">
      {/* Ambient Light Effects */}
      <div className="ambient-lights">
        <div className="ambient-light-1"></div>
        <div className="ambient-light-2"></div>
        <div className="ambient-light-3"></div>
      </div>

      <div className="ns-content">
        {/* Header */}
        <div className="header-section">
          <div className="header-glow"></div>
          <div className="header-inner">
            <div className="badge">
              <ThunderboltOutlined className="badge-icon" />
              <span className="badge-text">National Service Advisor</span>
            </div>
            <h1 className="main-title">Your National Service Journey</h1>
            <p className="subtitle">
              Make informed decisions about your service year with AI-powered insights and personalized recommendations
            </p>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="stats-grid">
          {[
            { label: "Service Options", value: "4+", icon: <  BankOutlined/>, color: "blue" },
            { label: "Available Locations", value: "9", icon: <EnvironmentOutlined />, color: "purple" },
            { label: "Success Rate", value: "94%", icon: <TrophyOutlined />, color: "green" },
            { label: "User Satisfaction", value: "4.8/5", icon: <StarOutlined />, color: "yellow" }
          ].map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className={`stat-card-glow stat-glow-${stat.color}`}></div>
              <div className="stat-card-inner">
                <div className="stat-header">
                  <div className={`stat-icon stat-icon-${stat.color}`}>{stat.icon}</div>
                  <span className="stat-value">{stat.value}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-header">
            {[
              { id: 'options', label: 'Service Options', icon: <BankOutlined /> },
              { id: 'ai-analysis', label: 'AI Analysis', icon: <ThunderboltOutlined /> },
              { id: 'timeline', label: 'Timeline', icon: <CalendarOutlined /> },
              { id: 'stories', label: 'Success Stories', icon: <TeamOutlined /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`tab-button ${selectedTab === tab.id ? 'tab-active' : ''}`}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
                {selectedTab === tab.id && <div className="tab-indicator"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {selectedTab === 'options' && (
            <div>
              {/* Filters */}
              <div className="filters">
                <div className="filter-select">
                  <EnvironmentOutlined className="filter-icon" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="select-input"
                  >
                    <option value="">All Locations</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>
                <div className="filter-select">
                  <SearchOutlined className="filter-icon" />
                  <select
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    className="select-input"
                  >
                    <option value="">All Fields</option>
                    {fields.map(field => <option key={field} value={field}>{field}</option>)}
                  </select>
                </div>
                <button className="find-btn">
                  Find Matches
                </button>
              </div>

              {/* Service Cards */}
              <div className="cards-grid">
                {serviceOptions.map((option) => (
                  <div
                    key={option.id}
                    onMouseEnter={() => setHoverCard(option.id)}
                    onMouseLeave={() => setHoverCard(null)}
                    className="service-card"
                  >
                    <div className="service-card-glow"></div>
                    <div className="service-card-inner">
                      <div className="card-header">
                        <div className="card-icon">{option.icon}</div>
                        <div>
                          <h3 className="card-title">{option.title}</h3>
                          <div className="card-duration">
                            <ClockCircleOutlined className="duration-icon" />
                            <span className="duration-text">{option.duration}</span>
                          </div>
                        </div>
                        <div className="match-badge">
                          <span className="match-text">{option.matchScore}% Match</span>
                        </div>
                      </div>
                      
                      <p className="card-description">{option.description}</p>
                      
                      <div className="benefits-section">
                        <p className="benefits-label">Benefits</p>
                        <div className="benefits-list">
                          {option.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="benefit-tag">{benefit}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="card-footer">
                        <div className="location-info">
                          <EnvironmentOutlined className="location-icon" />
                          <span>{option.locations[0]}</span>
                        </div>
                        <button className="learn-btn">
                          Learn More <RightOutlined />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'ai-analysis' && (
            <div className="ai-analysis">
              <div className="ai-card">
                <div className="ai-card-glow"></div>
                <div className="ai-card-inner">
                  <div className="ai-header">
                    <div className="ai-header-icon">
                      <ThunderboltOutlined />
                    </div>
                    <h3 className="ai-title">AI-Powered Analysis</h3>
                  </div>
                  
                  <div className="stats-row">
                    <div className="stat-box">
                      <p className="stat-box-label">Your Profile Match</p>
                      <p className="stat-box-value">88%</p>
                      <p className="stat-box-note">Based on your Computer Science background</p>
                    </div>
                    <div className="stat-box">
                      <p className="stat-box-label">Recommended Service</p>
                      <p className="stat-box-value-text">Teaching or Admin</p>
                      <p className="stat-box-note">Best alignment with your skills</p>
                    </div>
                    <div className="stat-box">
                      <p className="stat-box-label">Preferred Location</p>
                      <p className="stat-box-value-text">Greater Accra</p>
                      <p className="stat-box-note">High demand for tech skills</p>
                    </div>
                  </div>

                  <div className="tips-list">
                    {aiTips.map((tip, idx) => (
                      <div key={idx} className="tip-card">
                        <div className="tip-content">
                          <BulbOutlined className="tip-icon" />
                          <div>
                            <div className="tip-header">
                              <h4 className="tip-title">{tip.title}</h4>
                              <span className="tip-priority">{tip.priority}</span>
                            </div>
                            <p className="tip-text">{tip.tip}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="checklist-card">
                <h3 className="checklist-title">
                  <CheckCircleOutlined className="checklist-icon" />
                  Required Documents Checklist
                </h3>
                <div className="checklist-grid">
                  {[
                    { name: "Academic Transcripts", icon: <FileTextOutlined /> },
                    { name: "National ID Card", icon: <IdcardOutlined /> },
                    { name: "Passport Photos (4 copies)", icon: <CameraOutlined /> },
                    { name: "Medical Certificate", icon: <MedicineBoxOutlined /> },
                    { name: "Recommendation Letter", icon: <MailOutlined /> },
                    { name: "Curriculum Vitae", icon: <ProfileOutlined /> }
                  ].map((doc, idx) => (
                    <div key={idx} className="checklist-item">
                      <div className="checklist-box"></div>
                      <span className="checklist-name">{doc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'timeline' && (
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="timeline-items">
                {timeline.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot">
                      <span className="timeline-number">{idx + 1}</span>
                    </div>
                    <div className="timeline-card">
                      <h3 className="timeline-month">{item.month}</h3>
                      <p className="timeline-activity">{item.activity}</p>
                      <div className="timeline-status">
                        <div className="status-dot"></div>
                        <span className="status-text">Status: {item.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'stories' && (
            <div className="stories-grid">
              {successStories.map((story, idx) => (
                <div key={idx} className="story-card">
                  <div className="story-card-glow"></div>
                  <div className="story-card-inner">
                    <div className="story-author">
                      <div className="story-avatar">
                        <UserOutlined />
                      </div>
                      <div>
                        <h4 className="story-name">{story.name}</h4>
                        <p className="story-role">{story.role}</p>
                      </div>
                    </div>
                    <p className="story-quote">"{story.quote}"</p>
                    <div className="story-achievement">
                      <TrophyOutlined className="achievement-icon" />
                      <span className="achievement-text">{story.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <button className="cta-button">
            Start Your Application Process
          </button>
          <p className="cta-note">Get personalized guidance throughout your national service journey</p>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .ns-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #030712 0%, #111827 50%, #030712 100%);
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient Lights */
        .ambient-lights {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-light-1 {
          position: absolute;
          top: -2rem;
          left: -2rem;
          width: 24rem;
          height: 24rem;
          background: #8b5cf6;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite;
        }

        .ambient-light-2 {
          position: absolute;
          top: -2rem;
          right: -2rem;
          width: 24rem;
          height: 24rem;
          background: #06b6d4;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite 1s;
        }

        .ambient-light-3 {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          width: 24rem;
          height: 24rem;
          background: #3b82f6;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite 0.5s;
          transform: translateX(-50%);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        .ns-content {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          z-index: 1;
        }

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .header-glow {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-glow::before {
          content: '';
          width: 8rem;
          height: 8rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
        }

        .header-inner {
          position: relative;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .badge-icon {
          width: 1rem;
          height: 1rem;
          color: #fbbf24;
        }

        .badge-text {
          font-size: 0.875rem;
          color: #d1d5db;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #9ca3af, #6b7280);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          position: relative;
        }

        .stat-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          opacity: 0;
          transition: opacity 0.5s;
          filter: blur(10rem);
        }

        .stat-card:hover .stat-card-glow {
          opacity: 1;
        }

        .stat-glow-blue {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
        }
        .stat-glow-purple {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
        }
        .stat-glow-green {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        .stat-glow-yellow {
          background: linear-gradient(135deg, #f59e0b, #ea580c);
        }

        .stat-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .stat-card:hover .stat-card-inner {
          border-color: #4b5563;
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .stat-icon {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(139, 92, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-blue { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .stat-icon-purple { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
        .stat-icon-green { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .stat-icon-yellow { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }

        .stat-value {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Tabs */
        .tabs-container {
          margin-bottom: 2rem;
          border-bottom: 1px solid #1f2937;
        }

        .tabs-header {
          display: flex;
          gap: 2rem;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.3s;
          position: relative;
        }

        .tab-button:hover {
          color: #d1d5db;
        }

        .tab-active {
          color: white;
        }

        .tab-icon {
          width: 1rem;
          height: 1rem;
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
        }

        .tab-content {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Filters */
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-select {
          flex: 1;
          min-width: 200px;
          position: relative;
        }

        .filter-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          color: #6b7280;
          z-index: 1;
        }

        .select-input {
          width: 100%;
          padding: 0.5rem 0.75rem 0.5rem 2.5rem;
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid #374151;
          border-radius: 0.5rem;
          color: #d1d5db;
          font-size: 0.875rem;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .select-input:focus {
          outline: none;
          border-color: #8b5cf6;
        }

        .find-btn {
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, #7c3aed, #0891b2);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .find-btn:hover {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.25);
          transform: scale(1.02);
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-card {
          position: relative;
          cursor: pointer;
        }

        .service-card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border-radius: 0.75rem;
          filter: blur(1rem);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .service-card:hover .service-card-glow {
          opacity: 1;
        }

        .service-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .service-card:hover .service-card-inner {
          border-color: #4b5563;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .card-icon {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          color: #a78bfa;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .card-duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 0.25rem;
        }

        .duration-icon {
          width: 0.75rem;
          height: 0.75rem;
          color: #6b7280;
        }

        .duration-text {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .match-badge {
          margin-left: auto;
          padding: 0.25rem 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 9999px;
        }

        .match-text {
          font-size: 0.75rem;
          color: #4ade80;
        }

        .card-description {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .benefits-section {
          margin-bottom: 1rem;
        }

        .benefits-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .benefits-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .benefit-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: rgba(55, 65, 81, 0.5);
          border-radius: 9999px;
          color: #d1d5db;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #374151;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .location-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .learn-btn {
          background: none;
          border: none;
          color: #a78bfa;
          font-size: 0.875rem;
          cursor: pointer;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .learn-btn:hover {
          color: #c4b5fd;
        }

        /* AI Analysis Tab */
        .ai-analysis {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ai-card {
          position: relative;
        }

        .ai-card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 16rem;
          height: 16rem;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .ai-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 0.75rem;
          padding: 2rem;
        }

        .ai-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ai-header-icon {
          padding: 0.5rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 9999px;
          color: white;
        }

        .ai-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-box {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 0.5rem;
          padding: 1rem;
          border: 1px solid #374151;
        }

        .stat-box-label {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }

        .stat-box-value {
          font-size: 2rem;
          font-weight: 700;
          color: #a78bfa;
        }

        .stat-box-value-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
        }

        .stat-box-note {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.5rem;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-card {
          background: rgba(17, 24, 39, 0.3);
          border-radius: 0.5rem;
          padding: 1rem;
          border: 1px solid #374151;
          transition: border-color 0.3s;
        }

        .tip-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
        }

        .tip-content {
          display: flex;
          gap: 0.75rem;
        }

        .tip-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #fbbf24;
          margin-top: 0.125rem;
        }

        .tip-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .tip-title {
          font-weight: 600;
          color: white;
        }

        .tip-priority {
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 9999px;
          color: #c4b5fd;
        }

        .tip-text {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .checklist-card {
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
        }

        .checklist-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .checklist-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #4ade80;
        }

        .checklist-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .checklist-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }

       .checklist-item:hover {
          background: rgba(55, 65, 81, 0.3);
        }

        .checklist-box {
          width: 1rem;
          height: 1rem;
          border: 1px solid #4b5563;
          border-radius: 0.25rem;
        }.3);
                .checklist-name {
          font-size: 0.875rem;
          color: #d1d5db;
        }

        /* Timeline Tab */
        .timeline-container {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #8b5cf6, #06b6d4, #8b5cf6);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          gap: 1.5rem;
        }

        .timeline-dot {
          position: relative;
          z-index: 1;
          width: 4rem;
          height: 4rem;
          background: #1f2937;
          border: 2px solid #8b5cf6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-number {
          font-size: 0.875rem;
          font-weight: 600;
          color: #a78bfa;
        }

        .timeline-card {
          flex: 1;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .timeline-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
        }

        .timeline-month {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .timeline-activity {
          color: #9ca3af;
        }

        .timeline-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          background: #fbbf24;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .status-text {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Stories Tab */
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .stories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .story-card {
          position: relative;
        }

        .story-card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border-radius: 0.75rem;
          filter: blur(1rem);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .story-card:hover .story-card-glow {
          opacity: 1;
        }

        .story-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 2rem;
        }

        .story-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .story-avatar {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .story-name {
          font-weight: 600;
          color: white;
        }

        .story-role {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .story-quote {
          color: #d1d5db;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .story-achievement {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .achievement-icon {
          width: 1rem;
          height: 1rem;
          color: #fbbf24;
        }

        .achievement-text {
          color: #9ca3af;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #0891b2);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-button:hover {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.25);
          transform: scale(1.05);
        }

        .cta-note {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 1rem;
        }

        /* Icon base styles */
        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Nss;