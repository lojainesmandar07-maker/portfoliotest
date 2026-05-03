import { useState } from 'react';
import { PenTool, Paintbrush, Clapperboard, Instagram, Twitter, MonitorPlay, Mail } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'forfun' | 'project'>('home');

  const [activeTab, setActiveTab] = useState('All Work');

  const renderNav = () => (
    <div className="navigation">
      <button 
        onClick={() => setCurrentView('home')} 
        className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
      >
        ABOUT
      </button>
      <button 
        onClick={() => setCurrentView('gallery')} 
        className={`nav-btn ${(currentView === 'gallery' || (currentView === 'project' && currentList === projects)) ? 'active' : ''}`}
      >
        GALLERY
      </button>
      <button 
        onClick={() => setCurrentView('forfun')} 
        className={`nav-btn ${(currentView === 'forfun' || (currentView === 'project' && currentList === forFunProjects)) ? 'active' : ''}`}
      >
        FOR FUN
      </button>
    </div>
  );

  const [currentProject, setCurrentProject] = useState<any>(null);

  const projects = [
    { 
      id: 'sprout-society',
      title: 'Sprout Society', 
      category: 'Graphic Design', 
      thumbnail: '[ Sprout Society ]',
      meta: 'Graphic Design • Branding & Layout',
      type: 'graphic',
      content: { images: ['[ Sprout Society Board PNG ]'] }
    },
    { 
      id: 'bakery-ui',
      title: 'Bakery Identity', 
      category: 'Graphic Design', 
      thumbnail: '[ Bakery UI ]',
      meta: 'Graphic Design • UI & Stickers',
      type: 'graphic',
      content: { images: ['[ Bakery UI Board PNG ]', '[ Bakery Additional Pictures ]'] }
    },
    { 
      id: 'portrait-edits',
      title: 'Portrait Edits', 
      category: 'Retouching', 
      thumbnail: '[ Portrait Edits ]',
      meta: 'Retouching • Color & Detail',
      type: 'retouching',
      content: { beforeImage: '[ Portrait Before PNG ]', afterImage: '[ Portrait After PNG ]' }
    },
    { 
      id: 'social-promo',
      title: 'Social Media Promo', 
      category: 'Video Editing', 
      thumbnail: '[ Social Media Promo ]',
      meta: 'Video Editing • Short Form Reels',
      type: 'video',
      content: { videoUrl: 'your-video-file.mp4' }
    },
    { 
      id: 'color-corr',
      title: 'Color Correction', 
      category: 'Retouching', 
      thumbnail: '[ Color Correction ]',
      meta: 'Retouching • Grading',
      type: 'retouching',
      content: { beforeImage: '[ Raw Footage PNG ]', afterImage: '[ Graded Footage PNG ]' }
    },
    { 
      id: 'short-form',
      title: 'Short Form Content', 
      category: 'Video Editing', 
      thumbnail: '[ Short Form Content ]',
      meta: 'Video Editing • TikTok / Shorts',
      type: 'video',
      content: { videoUrl: 'another-video-file.mp4' }
    },
  ];

  const forFunProjects = [
    {
      id: 'discord-rpg',
      title: 'Discord RPG Layouts',
      category: 'For Fun',
      thumbnail: '[ Discord Preview ]',
      meta: 'Community • Roleplay',
      type: 'graphic',
      content: { images: ['[ Full Discord Setup PNG ]'] },
      desc: 'I design and structure immersive Discord servers using automated bots, JSON character definitions, and detailed role-playing environments.'
    },
    {
      id: 'zarela',
      title: 'Zarela Crochet Brand',
      category: 'For Fun',
      thumbnail: '[ Zarela Content ]',
      meta: 'Crafts • Marketing',
      type: 'video',
      content: { videoUrl: 'zarela-promo.mp4' },
      desc: 'Creating marketing content, video edits, and promotional materials for my personal crochet brand, highlighting handmade designs.'
    },
    {
      id: 'cozy-game',
      title: 'Cozy Browser Games',
      category: 'For Fun',
      thumbnail: '[ Paper Doll UI ]',
      meta: 'Game Dev • UI/UX',
      type: 'graphic',
      content: { images: ['[ Paper Doll Gameplay PNG ]'] },
      desc: 'Building out the UI and structural logic for a cozy, browser-based paper doll game. Focusing on asset management and a relaxing user experience.'
    }
  ];

  const filteredProjects = activeTab === 'All Work' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const currentList = projects.some(p => p.id === currentProject?.id) ? projects : forFunProjects;

  const openProject = (project: any) => {
    setCurrentProject(project);
    setCurrentView('project');
  };

  const renderHome = () => (
    <>
      {renderNav()}
      <div className="main-container">
        <div className="inner-content home-view">
          <div className="banner-area clickable" onClick={() => openProject(projects[0])}>
            [ Drop your custom Banner PNG here - Click to view Sprout Society ]
          </div>
          <div className="about-split">
            <div className="profile-pic-area">
              [ PFP Frame ]
            </div>
            <div className="text-area">
              <div className="text-box">
                <h1 className="home-title">Name or Subtitle.</h1>
                <div className="custom-divider">[ Decorative Divider PNG ]</div>
                <p>Write your introduction here. This text will sit cleanly on the cream background, allowing your custom borders to frame the typography perfectly.</p>
              </div>
              <div className="software-wrapper">
                <h3>Softwares</h3>
                <div className="software-grid">
                  <div className="software-icon"><PenTool size={24} color="var(--dark-chocolate)" /></div>
                  <div className="software-icon"><Paintbrush size={24} color="var(--dark-chocolate)" /></div>
                  <div className="software-icon"><Clapperboard size={24} color="var(--dark-chocolate)" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="links-footer">
            <div className="link-icon"><Instagram size={28} color="var(--dark-chocolate)" /></div>
            <div className="link-icon"><Twitter size={28} color="var(--dark-chocolate)" /></div>
            <div className="link-icon"><MonitorPlay size={28} color="var(--dark-chocolate)" /></div>
            <div className="link-icon"><Mail size={28} color="var(--dark-chocolate)" /></div>
          </div>
        </div>
      </div>
    </>
  );

  const renderGallery = () => (
    <>
      {renderNav()}
      <div className="main-container">
        <div className="inner-content gallery-view">
          <div className="filter-tabs">
            {['All Work', 'Retouching', 'Graphic Design', 'Video Editing'].map(tab => (
              <div 
                key={tab} 
                className={`tab ${activeTab === tab ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="gallery-grid">
            {filteredProjects.map((p, index) => (
              <div key={index} className="project-card" onClick={() => openProject(p)}>
                <div className="thumbnail-placeholder">{p.thumbnail}</div>
                <div className="project-title">{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderForFun = () => (
    <>
      {renderNav()}
      <div className="main-container">
        <div className="inner-content gallery-view">
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '20px' }}>Outside the Box</h1>
          <div className="gallery-grid">
            {forFunProjects.map((p, index) => (
              <div key={index} className="project-card" onClick={() => openProject(p)}>
                <div className="thumbnail-placeholder">{p.thumbnail}</div>
                <div className="project-title">{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderProjectView = () => {
    if (!currentProject) return null;

    const currentIndex = currentList.findIndex(p => p.id === currentProject.id);
    const nextProject = currentList[(currentIndex + 1) % currentList.length];

    return (
      <>
        <div className="top-bar">
          <button className="back-btn" onClick={() => {
            if (currentList === forFunProjects) {
              setCurrentView('forfun');
            } else {
              setCurrentView('gallery');
            }
          }}>
            ⬅ Back
          </button>
        </div>
        <div className="main-container project-view-main">
          <div className="inner-content project-view">
            <div className="project-header">
              <h1>{currentProject.title}</h1>
              <div className="project-meta">{currentProject.meta}</div>
            </div>
            <div className="showcase-area" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
              
              {currentProject.type === 'graphic' && (
                <div className="graphic-showcase">
                  {currentProject.content.images.map((img: string, i: number) => (
                    <div key={i} className="placeholder-image">
                      {img}
                      {/* Note: Update this to <img src="your-image-path.jpg" alt="" style={{width: '100%', borderRadius: '10px'}} /> when real images are added */}
                    </div>
                  ))}
                </div>
              )}
              
              {currentProject.type === 'retouching' && (
                <div className="before-after-wrapper">
                  <div className="ba-side">
                    <span className="ba-label">Before</span>
                    <div className="placeholder-image ba-image">{currentProject.content.beforeImage}</div>
                  </div>
                  <div className="ba-side">
                    <span className="ba-label">After</span>
                    <div className="placeholder-image ba-image">{currentProject.content.afterImage}</div>
                  </div>
                </div>
              )}

              {currentProject.type === 'video' && (
                <div className="video-wrapper">
                  <video controls src={currentProject.content.videoUrl} poster="placeholder-poster.jpg">
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

            </div>
            <div className="project-footer">
              <button className="next-btn" onClick={() => openProject(nextProject)}>
                Next Project ➡
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {currentView === 'home' && renderHome()}
      {currentView === 'gallery' && renderGallery()}
      {currentView === 'forfun' && renderForFun()}
      {currentView === 'project' && renderProjectView()}
    </>
  );
}
