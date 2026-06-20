import React, { useState } from 'react';
import { ChevronRight, MapPin, Calendar, Clock, ChevronLeft, Info, Play, Filter } from 'lucide-react';
import royalPalaceImg from '../../assets/palace.jpg'; 
import intoreImg from '../../assets/intore.jpg';
import rwabugiriImg from '../../assets/king.jpg';
import traditionalMusicImg from '../../assets/inanga.jpg';
import danceImg from '../../assets/dance.jpg';
import museumImg from '../../assets/museum.jpg';
import imigongoImg from '../../assets/imigongo.jpg';
import poetImg from '../../assets/poet.jpg';
import folkImg from '../../assets/folktale.jpg';

function Explore() {
  const [activeTab, setActiveTab] = useState('archive');
  const [archiveDropdown, setArchiveDropdown] = useState('all');
  const [literatureSubFilter, setLiteratureSubFilter] = useState('all');
  const [historyPlaceFilter, setHistoryPlaceFilter] = useState('All');
  const [historyEraFilter, setHistoryEraFilter] = useState('All');
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedProvinceMap, setSelectedProvinceMap] = useState('All');

  const todayDate = new Date(2026, 5, 20); 
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));

  const [selectedDayEvents, setSelectedDayEvents] = useState({
    title: "Today's Cultural Selection",
    description: "Select an upcoming or highlighted cultural day on the calendar matrix to unlock historical context, folklore summaries, and community archives.",
    stories: [
      { type: "video", label: "Living Traditions Broadcast", duration: "15 mins" },
      { type: "audio", label: "Oral Narratives & Testimony", duration: "8 Audio tracks" }
    ]
  });

  const historyItems = [
    { id: 'h1', title: "King's Palace – Mu Rukari", category: 'Monarchy', place: 'Nyanza', era: 'Pre-colonial', img: royalPalaceImg, story: "The majestic seat of Rwanda's pre-colonial monarchy. Constructed completely with traditional architectural geometry, this center preserves the exact cultural structural heritage, daily court lifestyles, cosmic royal rituals, and chronicles of legendary monarchs who ruled from this sacred core." },
    { id: 'h2', title: "Kigeli IV Rwabugiri Chronicles", category: 'Expansion', place: 'Rubavu', era: 'Pre-colonial', img: rwabugiriImg, story: "King Kigeli IV Rwabugiri was a legendary military tactician who dramatically centralized power and expanded the territorial borders of pre-colonial Rwanda. His governance systems and defense architectures introduced permanent changes that unified the nation against early modern external challenges." },
    { id: 'h3', title: "Campaign Against Genocide Museum", category: 'Museums', place: 'Gasabo', era: 'Post-1994', img: museumImg, story: "Located at the Parliament Building in Kigali, this contemporary historical monument houses deep archival details, strategic artifacts, and visual documentations mapping the supreme heroic rescue operations implemented to stop the 1994 Genocide against the Tutsi." }
  ];

  const traditionItems = [
    { title: 'Intore Culture & Training', category: 'Values', detail: 'Warrior Values', img: intoreImg, story: "In traditional Rwanda, Intore was not merely about performing arts, but an elite academy for character development, patriotism, courage, and community accountability. Young people learned societal values and protection skills." },
    { title: 'Umuganda & Collective Action', category: 'Community', detail: 'Social Cohesion', img: danceImg, story: "The ancestral roots of community labor. Traditional Rwandans lived closely interlinked, combining efforts during house construction, harvest periods, and community crisis mitigation, which remains an active national value foundational pillar." },
    { title: 'Imigongo Geometric Artistry', category: 'Crafts', detail: 'Traditional Living', img: imigongoImg, story: "Dating back to the 18th century inside the ancient Gisaka region, Prince Kakira engineered this unique geometric art using natural cow dung and organic soil colors. It mirrors traditional home aesthetics and philosophical balance concepts." }
  ];

  const literatureItems = [
    { title: 'Inanga Masterpieces', category: 'Music', detail: 'Oral Instrument Arts', img: traditionalMusicImg, story: "Traditional musical compositions played on the stringed Inanga. These lyrical patterns preserved oral epics, court history records, and ancient cosmic philosophies through rhythmic acoustic strings." },
    { title: 'Historical Folktales', category: 'Folktales', detail: 'Moral Oral Education', img: folkImg, story: "Classic narrative accounts passed down across generational fire-side chats to enforce community ethical standards, witty reasoning capabilities, and deep historical understandings among youths." },
    { title: 'Imigenurano n\'Ibisakuzo', category: 'Riddles', detail: 'Intellectual Wit Games', img: folkImg, story: "A beautiful collection of quick traditional proverbs and interactive riddle frameworks used to test analytical capacities, metaphorical interpretation skills, and language mastery." },
    { title: 'Ibyivugo n\'Imivugo', category: 'Imivugo', detail: 'Elite Linguistic Poetics', img: poetImg, story: "High-level artistic declarations praising bravery, outstanding achievements, and lineage histories. Performed by master poets using dynamic rhythmic vocabulary structures." },
    { title: 'Ibisingizo n\'Ibisigo by\'Abami', category: 'Ibisigo by\' abami', detail: 'Royal Dynastic Poetry', img: poetImg, story: "Deep classical court poetry created by professional dynastic poets (Abasizi) specifically to archive the sacred reigns, lineages, victories, and esoteric codes of the Kings of Rwanda." }
  ];

  const mapPlaces = [
    { id: 'p1', name: "King's Palace Museum", x: "44%", y: "68%", province: "South Province", type: "Royal & Pre-Colonial Heritage", desc: "Located about two hours south of Kigali in Nyanza, this site allows you to explore the reconstructed royal court of the ancient Rwandan Kingdom. You can view the majestic long-horned Inyambo cows and learn about the historic monarchy.", img: royalPalaceImg },
    { id: 'p2', name: "Ethnographic Museum", x: "42%", y: "82%", province: "South Province", type: "Royal & Pre-Colonial Heritage", desc: "Located in Huye, this is one of the finest museums in East Africa. It houses an extensive collection of archaeological artifacts, traditional crafts, and historical exhibits detailing pre-colonial Rwandan society.", img: museumImg },
    { id: 'p3', name: "Buhanga Eco-Park", x: "36%", y: "22%", province: "North Province", type: "Royal & Pre-Colonial Heritage", desc: "A sacred, ancient forest in Musanze where Rwandan kings were historically consecrated and crowned. It is a highly spiritual location filled with volcanic caves and ancient trees associated with traditional royal myths.", img: rwabugiriImg },
    { id: 'p4', name: "Kandt House Museum", x: "51%", y: "46%", province: "Kigali City", type: "Colonial & Modern City History", desc: "Situated in Kigali at the former residence of Dr. Richard Kandt, the first German colonial resident. The museum details the natural history of the country and the founding of Kigali.", img: museumImg },
    { id: 'p5', name: "Campaign Against Genocide Museum", x: "55%", y: "44%", province: "Kigali City", type: "Colonial & Modern City History", desc: "Located in the parliament building in Kigali, this monumental site offers incredible history regarding the 1994 liberation struggle, including preserved shell casings and battle artifacts.", img: museumImg },
    { id: 'p6', name: "Kigali Genocide Memorial", x: "53%", y: "41%", province: "Kigali City", type: "Memorial & UNESCO World Heritage Site", desc: "Located at Gisozi, this is a deeply moving and vital site of education and remembrance, serving as the final resting place for over 250,000 victims of the 1994 genocide against the Tutsi.", img: museumImg },
    { id: 'p7', name: "Ntarama & Nyamata Church Memorials", x: "62%", y: "58%", province: "East Province", type: "Memorial & UNESCO World Heritage Site", desc: "Located south of Kigali in Bugesera, these former churches have been preserved as memorials. They offer an unvarnished, tragic, but important look into the 1994 atrocities.", img: folkImg },
    { id: 'p8', name: "Bisesero Genocide Memorial", x: "18%", y: "52%", province: "West Province", type: "Memorial & UNESCO World Heritage Site", desc: "Recognized as a UNESCO World Heritage Site, this location highlights the incredible resistance and historical trauma of the victims in the mountainous region of Karongi.", img: folkImg },
    { id: 'p9', name: "Murambi Memorial Center", x: "32%", y: "74%", province: "South Province", type: "Memorial & UNESCO World Heritage Site", desc: "A structural UNESCO World Heritage site documenting the harrowing trials and preserving deep material evidence of the 1994 tragedy.", img: museumImg },
    { id: 'p10', name: "Gorilla Guardians Village", x: "31%", y: "16%", province: "North Province", type: "Living Culture & Community", desc: "Situated near Volcanoes National Park in Kinigi, this interactive cultural village allows you to experience authentic Rwandan daily life, traditional dancing (Intore), and basket weaving.", img: intoreImg },
    { id: 'p11', name: "Nyamirambo Women's Center", x: "49%", y: "49%", province: "Kigali City", type: "Living Culture & Community", desc: "Offers guided walking tours through one of Kigali's oldest and most vibrant neighborhoods, providing a slice of modern urban culture, local food, and community-led initiatives.", img: danceImg }
  ];

  const calendarDays = [
    { dayNum: 1, monthIdx: 1, label: "Heroes' Day", desc: "National Heroes' Day (Umunsi w'Intwari) – Honors those who made ultimate sacrifices for the country.", type: "Public / National Days", color: "bg-amber-50 text-amber-900 border-amber-300" },
    { dayNum: 7, monthIdx: 3, label: "Kwibuka Day", desc: "Genocide against the Tutsi Memorial Day – The start of a 100-day national mourning period honoring victims.", type: "National Heritage Events", color: "bg-red-50 text-red-900 border-red-300" },
    { dayNum: 20, monthIdx: 5, label: "Archive Review", desc: "Mid-year dynamic milestone verification log tracking active preservation benchmarks inside regional cultural databases.", type: "Artistic & Cultural Fests", color: "bg-emerald-50 text-emerald-950 border-emerald-300" },
    { dayNum: 4, monthIdx: 6, label: "Liberation Day", desc: "Liberation Day (Kwibohora) – Celebrates the end of the 1994 genocide and structural transition.", type: "Public / National Days", color: "bg-amber-50 text-amber-900 border-amber-300" },
    { dayNum: 7, monthIdx: 7, label: "Umuganura Day", desc: "Umuganura Day – The traditional National Harvest Day celebrating fruits of unity, shared prosperity, and cultural thanksgiving.", type: "Artistic & Cultural Fests", color: "bg-emerald-50 text-emerald-950 border-emerald-300" }
  ];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      let m = prev.getMonth() - 1, y = prev.getFullYear();
      if (m < 0) { m = 11; y -= 1; }
      return new Date(y, m, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      let m = prev.getMonth() + 1, y = prev.getFullYear();
      if (m > 11) { m = 0; y += 1; }
      return new Date(y, m, 1);
    });
  };

  const handleToday = () => {
    setCurrentDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const gridCells = [];
  for (let i = 0; i < firstDayIndex; i++) gridCells.push({ dayNum: null, event: null });
  for (let d = 1; d <= daysInMonth; d++) {
    const matchedEvent = calendarDays.find(item => item.dayNum === d && item.monthIdx === currentDate.getMonth());
    gridCells.push({ dayNum: d, event: matchedEvent });
  }

  const selectCalendarDay = (ev) => {
    if (!ev) return;
    setSelectedDayEvents({
      title: ev.label,
      description: ev.desc,
      stories: [
        { type: "video", label: `Preserving ${ev.label} Traditions`, duration: "10 mins video" },
        { type: "audio", label: `Elder Accounts on ${ev.label}`, duration: "4 Audio Chapters" }
      ]
    });
  };

  const filteredMapPlaces = mapPlaces.filter(place => selectedProvinceMap === 'All' || place.province === selectedProvinceMap);

  const renderArchiveCard = (item, idx) => {
    const isLongText = item.story && item.story.length > 120;
    const isExpanded = expandedStoryId === item.id || expandedStoryId === `${item.title}-${idx}`;
    const displayStory = isLongText && !isExpanded ? `${item.story.substring(0, 120)}...` : item.story;

    return (
      <div key={idx} className="bg-white border border-[#EADBC8]/50 rounded-2xl p-3 flex flex-col shadow-2xs hover:border-[#8D493A]/30 transition-all text-left group">
        <div className="w-full h-40 rounded-xl overflow-hidden mb-3 bg-neutral-100">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-wider uppercase text-[#8D493A]/80">{item.category || item.type}</span>
          {item.place && <span className="text-[9px] bg-neutral-50 px-2 py-0.5 border rounded border-neutral-200 text-neutral-400 font-bold">{item.place}</span>}
        </div>
        <h4 className="text-xs font-bold text-[#2C1A14] mt-1 mb-1.5">{item.title}</h4>
        <p className="text-[11px] text-[#6F5B55] leading-relaxed mb-3">{displayStory}</p>
        {isLongText && (
          <button 
            onClick={() => setExpandedStoryId(isExpanded ? null : (item.id || `${item.title}-${idx}`))}
            className="text-[10px] font-black text-[#8D493A] hover:underline mt-auto pt-1 flex items-center"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <span className={`ml-0.5 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>→</span>
          </button>
        )}
        {!isLongText && <span className="text-[10px] text-neutral-400 font-medium mt-auto">{item.detail}</span>}
      </div>
    );
  };

  const renderArchiveSection = () => {
    if (archiveDropdown === 'all') {
      return (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#6F5B55]/80 tracking-wider uppercase">History</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{historyItems.map((item, idx) => renderArchiveCard(item, idx))}</div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#6F5B55]/80 tracking-wider uppercase">Traditions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{traditionItems.map((item, idx) => renderArchiveCard(item, idx))}</div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#6F5B55]/80 tracking-wider uppercase">Literature</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{literatureItems.slice(0, 3).map((item, idx) => renderArchiveCard(item, idx))}</div>
          </div>
        </div>
      );
    }

    if (archiveDropdown === 'history') {
      return (
        <div className="space-y-4 animate-in fade-in duration-250">
          <div className="bg-white p-3.5 rounded-2xl border border-[#EADBC8]/40 flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-[#6F5B55]/70 uppercase tracking-wider">Place:</span>
              {['All', 'Nyanza', 'Rubavu', 'Gasabo'].map((p) => (
                <button key={p} onClick={() => setHistoryPlaceFilter(p)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${historyPlaceFilter === p ? 'bg-[#8D493A] text-white' : 'bg-[#FDFBF7] border border-[#EADBC8]/60 text-[#6F5B55]'}`}>{p}</button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-[#6F5B55]/70 uppercase tracking-wider">Era:</span>
              {['All', 'Pre-colonial', 'Post-1994'].map((e) => (
                <button key={e} onClick={() => setHistoryEraFilter(e)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${historyEraFilter === e ? 'bg-[#8D493A] text-white' : 'bg-[#FDFBF7] border border-[#EADBC8]/60 text-[#6F5B55]'}`}>{e}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {historyItems.filter(i => (historyPlaceFilter === 'All' || i.place === historyPlaceFilter) && (historyEraFilter === 'All' || i.era === historyEraFilter)).map((item, idx) => renderArchiveCard(item, idx))}
          </div>
        </div>
      );
    }

    if (archiveDropdown === 'traditions') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-200">
          {traditionItems.map((item, idx) => renderArchiveCard(item, idx))}
        </div>
      );
    }

    if (archiveDropdown === 'literature') {
      const distinctCategories = ['all', 'Music', 'Folktales', 'Riddles', 'Imivugo', 'Ibisigo by\' abami'];
      const displayItems = literatureSubFilter === 'all' ? literatureItems : literatureItems.filter(i => i.category === literatureSubFilter);

      return (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#FDFBF7] border border-[#EADBC8]/60 p-3 rounded-2xl flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-black text-[#6F5B55]/70 uppercase tracking-wider mr-2 flex items-center"><Filter className="w-3 h-3 mr-1" /> Category:</span>
            {distinctCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setLiteratureSubFilter(cat)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all uppercase tracking-tight ${literatureSubFilter === cat ? 'bg-[#8D493A] text-white shadow-2xs' : 'bg-white border border-[#EADBC8]/40 text-[#6F5B55] hover:bg-neutral-50'}`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {displayItems.map((item, idx) => renderArchiveCard(item, idx))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6 font-sans pb-12 text-left animate-in fade-in duration-300">
      
      <div className="border-b border-[#EADBC8]/40 pb-4">
        <h1 className="text-3xl font-bold text-[#8D493A] tracking-tight">Explore the Archive.</h1>
        <p className="text-xs md:text-sm text-[#6F5B55] mt-1">
          Access structural collections detailing historical landmarks, dynamic maps, oral poetry, and seasonal heritage calendars.
        </p>
      </div>

      <div className="flex border-b border-[#EADBC8]/40 space-x-6">
        <button onClick={() => setActiveTab('archive')} className={`pb-2.5 text-xs font-bold tracking-wider uppercase border-b-2 transition-all ${activeTab === 'archive' ? 'border-[#8D493A] text-[#8D493A]' : 'border-transparent text-[#6F5B55]'}`}>Digital Archive</button>
        <button onClick={() => setActiveTab('places')} className={`pb-2.5 text-xs font-bold tracking-wider uppercase border-b-2 transition-all ${activeTab === 'places' ? 'border-[#8D493A] text-[#8D493A]' : 'border-transparent text-[#6F5B55]'}`}>Historical Places</button>
        <button onClick={() => setActiveTab('calendar')} className={`pb-2.5 text-xs font-bold tracking-wider uppercase border-b-2 transition-all ${activeTab === 'calendar' ? 'border-[#8D493A] text-[#8D493A]' : 'border-transparent text-[#6F5B55]'}`}>On The Calendar</button>
      </div>

      {activeTab === 'archive' && (
        <div className="space-y-6">
          <div className="bg-white p-2 rounded-2xl border border-[#EADBC8]/40 inline-flex items-center space-x-1.5 shadow-3xs">
            {['all', 'history', 'traditions', 'literature'].map((tab) => (
              <button key={tab} onClick={() => setArchiveDropdown(tab)} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all uppercase ${archiveDropdown === tab ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-[#FDFBF7]'}`}>{tab}</button>
            ))}
          </div>
          <div>{renderArchiveSection()}</div>
        </div>
      )}

      {activeTab === 'places' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white p-3 rounded-2xl border border-[#EADBC8]/40 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black text-[#6F5B55]/70 uppercase tracking-wider mr-2">Filter Province:</span>
            {['All', 'Kigali City', 'North Province', 'South Province', 'East Province', 'West Province'].map((prov) => (
              <button key={prov} onClick={() => setSelectedProvinceMap(prov)} className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all ${selectedProvinceMap === prov ? 'bg-[#8D493A] text-white shadow-xs' : 'bg-[#FDFBF7] border border-[#EADBC8]/60 text-[#6F5B55]'}`}>{prov}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#FDFBF7] border border-[#EADBC8]/60 rounded-3xl p-4 flex flex-col items-center justify-center relative min-h-[460px] shadow-2xs overflow-hidden">
              <div className="w-full h-full min-h-[400px] relative bg-white/60 rounded-2xl border border-[#EADBC8]/30 p-2 flex items-center justify-center">
                <svg className="w-full h-full max-h-[380px] text-[#8D493A]/10 fill-current stroke-[#8D493A]/40 stroke-2 transition-all duration-300" viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 180,50 
                           C 210,45  260,70  310,80
                           C 350,85  420,75  460,95
                           C 485,110 510,90  530,115
                           C 545,135 520,170 540,195
                           C 560,225 575,275 550,305
                           C 530,330 460,320 445,350
                           C 430,380 400,410 350,420
                           C 310,430 270,390 235,410
                           C 200,430 160,440 135,415
                           C 115,395 130,350 105,335
                           C 80,320  65,345  50,325
                           C 35,305  60,265  45,245
                           C 30,225  55,190  60,150
                           C 65,110  105,125 125,95
                           C 145,65  155,55  180,50 Z" />
                  <path d="M 300,82 C 290,180 320,220 315,415" fill="none" stroke="#8D493A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="5,5" />
                  <path d="M 52,210 C 210,215 320,200 545,195" fill="none" stroke="#8D493A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="5,5" />
                  
                  <text x="50" y="200" className="fill-[#6F5B55]/30 text-[10px] font-bold tracking-widest pointer-events-none">L. KIVU</text>
                  <text x="450" y="240" className="fill-[#6F5B55]/30 text-[10px] font-bold tracking-widest pointer-events-none">AKAGERA</text>
                </svg>

                {filteredMapPlaces.map((place) => (
                  <button
                    key={place.id}
                    onClick={() => setSelectedPlace(place)}
                    style={{ left: place.x, top: place.y }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 z-20 flex items-center justify-center group ${selectedPlace?.id === place.id ? 'bg-[#8D493A] text-white scale-125 shadow-lg ring-4 ring-[#8D493A]/20' : 'bg-white text-[#8D493A] hover:bg-[#8D493A] hover:text-white shadow-md'}`}
                  >
                    <MapPin className="w-3.5 h-3.5 fill-current" />
                    <span className="absolute bottom-6 bg-[#2C1A14] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                      {place.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EADBC8]/50 rounded-3xl p-5 flex flex-col shadow-2xs text-left justify-center min-h-[460px]">
              {selectedPlace ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="w-full h-44 rounded-2xl overflow-hidden bg-neutral-100 shadow-3xs">
                    <img src={selectedPlace.img} alt={selectedPlace.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5 text-[10px] text-[#8D493A] font-bold uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      <span>{selectedPlace.province}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#2C1A14] mt-1">{selectedPlace.name}</h3>
                    <span className="inline-block text-[9px] font-black tracking-wider uppercase text-neutral-400 border border-neutral-200 bg-neutral-50 px-2 py-0.5 rounded mt-1">{selectedPlace.type}</span>
                  </div>
                  <p className="text-xs text-[#6F5B55] leading-relaxed border-t border-neutral-100 pt-3">
                    {selectedPlace.desc}
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 space-y-2">
                  <Info className="w-8 h-8 text-neutral-300 mx-auto" />
                  <p className="text-xs font-bold text-[#6F5B55]">No Landmark Selected</p>
                  <p className="text-[11px] text-neutral-400 max-w-[220px] mx-auto">Click any of the structural pins spread across the authentic Rwanda layout to read contextual field records.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border border-[#EADBC8]/60 rounded-3xl p-4 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-4">
                <h2 className="text-sm font-black text-[#2C1A14] uppercase tracking-wide">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex items-center space-x-1.5">
                  <button onClick={handlePrevMonth} className="p-1.5 border border-neutral-200 rounded-lg bg-neutral-50"><ChevronLeft className="w-3.5 h-3.5 text-neutral-600" /></button>
                  <button onClick={handleNextMonth} className="p-1.5 border border-neutral-200 rounded-lg bg-neutral-50"><span className="text-xs font-bold text-neutral-600">→</span></button>
                  <button onClick={handleToday} className="px-3 py-1 border border-[#EADBC8] rounded-lg bg-[#FDFBF7] text-[11px] font-bold text-[#8D493A]">
                    Reset to Today
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {daysOfWeek.map((day) => <span key={day} className="text-[10px] font-bold text-neutral-400 tracking-wider py-1">{day}</span>)}
              </div>

              <div className="grid grid-cols-7 gap-1.5 bg-neutral-50/50 p-1 rounded-xl border border-neutral-100 flex-1 min-h-[280px]">
                {gridCells.map((cell, idx) => {
                  const isRealToday = todayDate.getDate() === cell.dayNum && todayDate.getMonth() === currentDate.getMonth() && todayDate.getFullYear() === currentDate.getFullYear();
                  
                  return (
                    <div 
                      key={idx} 
                      onClick={() => cell.event && selectCalendarDay(cell.event)}
                      className={`min-h-[52px] rounded-xl border p-1 text-left flex flex-col justify-between transition-all ${cell.dayNum ? (cell.event ? `${cell.event.color} cursor-pointer shadow-3xs font-medium` : `${isRealToday ? 'bg-[#8D493A]/10 border-[#8D493A] text-[#2C1A14] ring-2 ring-[#8D493A]/10' : 'bg-white border-neutral-100 text-neutral-700'}`) : 'bg-transparent border-transparent pointer-events-none'}`}
                    >
                      <div className="flex justify-between items-center">
                        {cell.dayNum && <span className="text-[10px] font-bold">{cell.dayNum}</span>}
                        {isRealToday && <span className="text-[6px] font-black tracking-tighter bg-[#8D493A] text-white px-1 rounded-xs uppercase">TODAY</span>}
                      </div>
                      {cell.event && <span className="text-[8px] font-black truncate tracking-tight uppercase leading-none block mt-1">{cell.event.label}</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-[#EADBC8]/60 rounded-3xl p-5 shadow-2xs flex flex-col text-left justify-between">
              <div>
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Day Spotlight</span>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                  <h3 className="text-sm font-extrabold text-[#2C1A14]">{selectedDayEvents.title}</h3>
                  <button className="p-1 bg-[#FCDFD3]/20 rounded-full text-[#8D493A]"><Play className="w-3.5 h-3.5 fill-current" /></button>
                </div>
                <p className="text-xs text-[#6F5B55] leading-relaxed mb-6">{selectedDayEvents.description}</p>
                
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest block mb-1">Associated Resources</span>
                  {selectedDayEvents.stories.map((story, i) => (
                    <div key={i} className="flex items-center justify-between bg-[#FDFBF7] border border-[#EADBC8]/40 p-2.5 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-white rounded-lg border border-[#EADBC8]/40 text-[#8D493A]"><Clock className="w-3 h-3" /></div>
                        <span className="text-xs font-bold text-[#2C1A14] truncate max-w-[160px]">{story.label}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400 font-medium">{story.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest block mb-1.5">Upcoming Milestone</span>
                <div className="bg-[#8D493A]/5 border border-[#8D493A]/20 p-2.5 rounded-xl flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-[#2C1A14]">Umuganura Celebration</h5>
                    <p className="text-[10px] text-neutral-400">First Friday of August</p>
                  </div>
                  <Calendar className="w-4 h-4 text-[#8D493A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Explore;