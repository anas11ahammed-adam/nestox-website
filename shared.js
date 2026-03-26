// shared.js — Nestox Builders page renderer
(function(){
const KEY='nestox_v4';
const DEFAULT={
  brand:{logoText:'Nestox',logoUrl:'',tagline:'Crafting Premium Spaces'},
  nav:{links:[{label:'Home',href:'index.html'},{label:'About',href:'about.html'},{label:'Services',href:'services.html'},{label:'Projects',href:'projects.html'},{label:'Blog',href:'blog.html'},{label:'Contact',href:'contact.html'}],ctaLabel:'Enquire Now',ctaHref:'contact.html'},
  hero:{eyebrow:'Luxury Construction & Development',title:'We Build',titleItalic:'Spaces That',titleEnd:'Inspire Life',desc:'Nestox Builders crafts premium residential and commercial spaces.',btn1:'Explore Projects',btn1href:'projects.html',btn2:'Our Story',btn2href:'about.html',imageUrl:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',stats:[{num:'18+',label:'Years Building'},{num:'240+',label:'Projects Done'},{num:'98%',label:'Client Satisfaction'}]},
  about:{eyebrow:'Who We Are',title:'Building Legacy',titleItalic:'One Stone at',titleEnd:'a Time',body1:'Founded in 2006, Nestox Builders has earned its place as a benchmark of quality in premium construction.',body2:'From luxury villas in Kerala to commercial landmarks in the Gulf, our work spans borders while staying true to a single principle: build what endures.',imageUrl:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',established:'2006',fullBody:'Nestox Builders was founded with a singular vision — to redefine what premium construction means in South Asia and the Gulf. Over nearly two decades, we have delivered landmark residences, commercial developments, and interior transformations that have set new standards in design excellence and build quality.\n\nOur team of architects, engineers, and craftspeople bring together deep regional knowledge and international sensibilities to every project. We believe that a building is not just a structure — it is a legacy.\n\nHeadquartered in Trivandrum with offices in Dubai and Riyadh, we serve clients who demand the best — and we deliver it, every time.',pillars:[{icon:'◈',title:'Precision Craft',desc:'Every joint, finish, and facade executed with uncompromising attention.'},{icon:'◎',title:'Timely Delivery',desc:'We honour deadlines as commitments, not estimates.'},{icon:'◇',title:'Transparent Pricing',desc:'Clear, honest costing with no hidden surprises.'},{icon:'◉',title:'Green Building',desc:'Sustainable practices woven from foundation to finish.'}]},
  services:[{num:'01',title:'Residential Construction',desc:'From intimate family homes to sprawling luxury villas.',fullDesc:'We design and build residences that reflect your personality and exceed your expectations. From single-family homes to gated villa communities, our residential division brings together the finest architects, engineers, and craftspeople.',imageUrl:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'},{num:'02',title:'Commercial Projects',desc:'Offices, retail, and institutional buildings for impact.',fullDesc:'Nestox delivers commercial projects that make a statement. Our commercial division handles everything from corporate headquarters to retail developments, with a focus on functionality, brand expression, and long-term value.',imageUrl:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80'},{num:'03',title:'Interior Design',desc:'Bespoke interiors — curated materials and spatial harmony.',fullDesc:'Our interior design team creates spaces that are as beautiful as they are functional. We source the finest materials globally, work with master craftspeople locally, and manage every detail from concept to completion.',imageUrl:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'},{num:'04',title:'Renovation & Restoration',desc:'Breathing new life into existing structures.',fullDesc:'We understand that existing structures have character and history. Our renovation team works sensitively, enhancing what works and transforming what does not — always delivering more than expected.',imageUrl:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'},{num:'05',title:'Turnkey Contracting',desc:'End-to-end delivery — drawings to handing over keys.',fullDesc:'For clients who want a truly hands-off experience, our turnkey service covers every aspect of the build — from initial design consultations and permits to construction, interior fit-out, landscaping, and final handover.',imageUrl:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'},{num:'06',title:'MEP & Infrastructure',desc:'Mechanical, electrical, plumbing systems for longevity.',fullDesc:'The invisible systems within a building are as important as the visible ones. Our MEP division engineers and installs mechanical, electrical, and plumbing systems that are efficient, reliable, and built to last.',imageUrl:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'}],
  projects:[{id:'p1',name:'Nestox The Grand Palms',tag:'Residential · Trivandrum',location:'Kowdiar, Kerala — 2023',type:'residential',imageUrl:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',large:true,desc:'A landmark residential development in the heart of Trivandrum, featuring 48 premium apartments with panoramic views, world-class amenities, and finishes sourced from across Europe.'},{id:'p2',name:'Vertex Business Hub',tag:'Commercial · Dubai',location:'DIFC, Dubai — 2022',type:'commercial',imageUrl:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',large:false,desc:'A 12-storey commercial tower in Dubai\'s financial district, housing over 60 businesses. Delivered 3 weeks ahead of schedule with LEED Gold certification.'},{id:'p3',name:'Aurum Penthouse',tag:'Interior · Kochi',location:'Marine Drive, Kochi — 2023',type:'interior',imageUrl:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',large:false,desc:'A 4,200 sq ft penthouse transformation on Marine Drive, featuring custom Italian marble, hand-crafted joinery, and a bespoke lighting installation.'},{id:'p4',name:'Serenity Villa',tag:'Residential · Abu Dhabi',location:'Al Raha Beach — 2024',type:'residential',imageUrl:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',large:false,desc:'A private waterfront villa on Al Raha Beach, designed around indoor-outdoor living with a 25-metre lap pool, private jetty, and smart home integration.'},{id:'p5',name:'The Chronicle Tower',tag:'Commercial · Riyadh',location:'KAFD, Riyadh — 2024',type:'commercial',imageUrl:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',large:true,desc:'A signature mixed-use tower within the King Abdullah Financial District, comprising Grade A offices, a boutique hotel, and curated retail.'}],
  testimonials:[{initial:'R',name:'Rajesh Menon',role:'Villa Client · Trivandrum, 2023',text:'Working with Nestox was the single best decision we made. They transformed a barren plot into a home that exceeded every expectation.'},{initial:'F',name:'Faris Al Mansoori',role:'Commercial Client · Dubai, 2022',text:'The attention to detail was extraordinary. Nestox treated our office like it was their own.'},{initial:'P',name:'Priya Chandran',role:'Interior Client · Kochi, 2023',text:'Our penthouse renovation was complex. Nestox managed everything flawlessly.'},{initial:'K',name:'Khalid Saeed',role:'Commercial Client · Riyadh, 2024',text:"I've worked with builders across the GCC. Nestox stands apart in professionalism and quality."}],
  contact:{address:'TC 45/2196, Near Technopark,\nKazhakkoottam, Trivandrum — 695582',phone1:'+91 98475 00000',phone2:'+971 4 000 0000 (UAE)',phone3:'+966 11 000 0000 (KSA)',email:'hello@nestoxbuilders.com',hours:'Mon – Sat: 9:00 AM – 6:00 PM',whatsapp:'+919847500000',mapEmbed:'',officeKerala:'Trivandrum, Kerala',officeDubai:'Dubai, UAE',officeRiyadh:'Riyadh, KSA'},
  footer:{tagline:'Crafting premium spaces across India and the Gulf since 2006.',certifications:'RERA Registered · ISO 9001:2015 · CIDC Certified',copyright:'© 2025 Nestox Builders Pvt. Ltd. All rights reserved.',social:{linkedin:'#',instagram:'#',facebook:'#',youtube:'#'}},
  blogs:[],
  process:[{num:'01',title:'Discovery',desc:'We meet, listen, and understand your vision and investment capacity.'},{num:'02',title:'Design',desc:'Architects translate your brief into a detailed design proposal.'},{num:'03',title:'Construction',desc:'Our expert crew breaks ground with finest materials and dedicated oversight.'},{num:'04',title:'Handover',desc:'Walk into your completed space — quality-checked and ready to be called home.'}],
  marqueeItems:['Residential Villas','Luxury Apartments','Commercial Spaces','Interior Design','Turnkey Projects','Urban Developments'],
  settings:{showAbout:true,showServices:true,showProjects:true,showProcess:true,showTestimonials:true,showBlog:true,showContact:true},
};
function getD(){try{const r=localStorage.getItem(KEY);return r?deepMerge(JSON.parse(JSON.stringify(DEFAULT)),JSON.parse(r)):JSON.parse(JSON.stringify(DEFAULT));}catch(e){return JSON.parse(JSON.stringify(DEFAULT));}}
function deepMerge(t,s){if(Array.isArray(s))return s;for(const k in s){if(s[k]&&typeof s[k]==='object'&&!Array.isArray(s[k])){if(!t[k])t[k]={};deepMerge(t[k],s[k]);}else t[k]=s[k];}return t;}

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
:root{--navy:#0d1b3e;--gold:#b8955a;--gold2:#d4b07a;--cream:#f5f2ec;--white:#fff;--ink:#111;--muted:#7a7670;--border:rgba(184,149,90,.22);}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'DM Sans',sans-serif;background:var(--white);color:var(--ink);overflow-x:hidden;cursor:none;}
.cursor{position:fixed;width:8px;height:8px;background:var(--gold);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:multiply;top:0;left:0;}
.cursor-ring{position:fixed;width:36px;height:36px;border:1px solid var(--gold);border-radius:50%;pointer-events:none;z-index:9998;top:0;left:0;transition:width .3s,height .3s;}
nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:26px 60px;display:flex;align-items:center;justify-content:space-between;transition:all .5s;}
nav.scrolled{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);padding:16px 60px;border-bottom:1px solid var(--border);box-shadow:0 2px 24px rgba(0,0,0,.06);}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.75rem;font-weight:600;letter-spacing:.04em;color:var(--ink);text-decoration:none;}
.nav-logo span{color:var(--gold);}.nav-logo img{height:42px;object-fit:contain;}
.nav-links{display:flex;gap:32px;list-style:none;}
.nav-links a{font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);text-decoration:none;position:relative;transition:color .3s;}
.nav-links a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:var(--gold);transition:width .3s;}
.nav-links a:hover::after,.nav-links a.active::after{width:100%;}.nav-links a.active{color:var(--gold);}
.nav-cta{font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--white);background:var(--navy);padding:12px 28px;text-decoration:none;transition:background .3s;}
.nav-cta:hover{background:var(--gold);}
.nav-ham{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.nav-ham span{width:24px;height:1.5px;background:var(--ink);display:block;}
.mob-menu{display:none;position:fixed;inset:0;background:var(--white);z-index:300;flex-direction:column;align-items:center;justify-content:center;gap:36px;}
.mob-menu.open{display:flex;}.mob-close{position:absolute;top:28px;right:28px;font-size:1.5rem;cursor:pointer;background:none;border:none;color:var(--ink);}
.mob-menu a{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:var(--ink);text-decoration:none;}
.mob-menu a:hover{color:var(--gold);}
.page-hero{padding:180px 60px 100px;background:var(--cream);position:relative;overflow:hidden;}
.page-hero::after{content:'';position:absolute;top:0;right:0;width:40%;height:100%;background:var(--border);clip-path:polygon(20% 0,100% 0,100% 100%,0 100%);opacity:.3;}
.ph-eyebrow{font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.ph-title{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,5vw,5rem);font-weight:300;line-height:1.1;margin-bottom:24px;}
.ph-title em{font-style:italic;color:var(--gold);}
.ph-desc{font-size:.95rem;color:var(--muted);line-height:1.85;max-width:560px;font-weight:300;}
.sec-eyebrow{font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;display:flex;align-items:center;gap:16px;}
.sec-eyebrow::before{content:'';width:36px;height:1px;background:var(--gold);}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.2vw,3.2rem);font-weight:300;line-height:1.15;margin-bottom:28px;}
.sec-title em{font-style:italic;color:var(--gold);}
.sec-body{font-size:.9rem;color:var(--muted);line-height:1.9;margin-bottom:20px;font-weight:300;}
.btn-primary{font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--white);background:var(--navy);padding:15px 34px;text-decoration:none;transition:background .3s;display:inline-block;}
.btn-primary:hover{background:var(--gold);}
.reveal{opacity:0;transform:translateY(36px);transition:opacity .8s,transform .8s;}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-delay-1{transition-delay:.12s;}.reveal-delay-2{transition-delay:.24s;}.reveal-delay-3{transition-delay:.36s;}

/* ABOUT PAGE */
.about-full{display:grid;grid-template-columns:1fr 1fr;min-height:80vh;}
.af-img{position:relative;min-height:600px;overflow:hidden;}
.af-img-bg{position:absolute;inset:0;background-size:cover;background-position:center;}
.af-content{padding:80px 80px 80px 80px;}
.af-body{font-size:.9rem;color:var(--muted);line-height:1.95;font-weight:300;white-space:pre-line;margin-top:28px;}
.pillars-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);margin:60px 0;border:1px solid var(--border);}
.pillar{background:var(--white);padding:40px 32px;transition:background .3s;}
.pillar:hover{background:var(--cream);}
.pillar-icon{font-size:1.5rem;margin-bottom:12px;color:var(--gold);}
.pillar-title{font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;font-weight:500;margin-bottom:8px;}
.pillar-desc{font-size:.8rem;color:var(--muted);line-height:1.7;font-weight:300;}
.team-sec{padding:100px 60px;background:var(--cream);}
.stats-strip{display:grid;grid-template-columns:repeat(4,1fr);background:var(--navy);padding:60px;}
.stat-item{text-align:center;border-right:1px solid rgba(255,255,255,.08);padding:0 32px;}
.stat-item:last-child{border-right:none;}
.stat-big{font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-weight:300;color:var(--gold2);line-height:1;}
.stat-lbl{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-top:8px;}

/* SERVICES PAGE */
.svc-full{padding:80px 60px;}
.svc-full-card{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:2px;background:var(--cream);}
.svc-full-card:nth-child(even){direction:rtl;}
.svc-full-card:nth-child(even)>*{direction:ltr;}
.sfc-img{background-size:cover;background-position:center;min-height:400px;}
.sfc-content{padding:60px 56px;display:flex;flex-direction:column;justify-content:center;}
.sfc-num{font-family:'Cormorant Garamond',serif;font-size:.9rem;color:var(--gold);margin-bottom:20px;opacity:.6;}
.sfc-title{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:300;margin-bottom:20px;}
.sfc-desc{font-size:.88rem;color:var(--muted);line-height:1.9;font-weight:300;}

/* PROJECTS PAGE */
.proj-page{padding:60px 60px 100px;}
.proj-tabs{display:flex;gap:8px;margin-bottom:48px;}
.tab-btn{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:10px 22px;border:1px solid var(--border);background:transparent;cursor:pointer;transition:all .3s;font-family:'DM Sans',sans-serif;color:var(--muted);}
.tab-btn.active,.tab-btn:hover{background:var(--navy);color:var(--white);border-color:var(--navy);}
.proj-masonry{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.proj-item{position:relative;overflow:hidden;cursor:pointer;aspect-ratio:4/5;background:var(--cream);}
.proj-item.large{grid-column:span 2;aspect-ratio:auto;min-height:440px;}
.proj-item-bg{width:100%;height:100%;background-size:cover;background-position:center;transition:transform .7s cubic-bezier(.25,.46,.45,.94);}
.proj-item:hover .proj-item-bg{transform:scale(1.05);}
.proj-item-ov{position:absolute;inset:0;background:linear-gradient(0deg,rgba(13,27,62,.9) 0%,transparent 50%);display:flex;flex-direction:column;justify-content:flex-end;padding:32px;opacity:0;transition:opacity .4s;}
.proj-item:hover .proj-item-ov{opacity:1;}
.pi-tag{font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold2);margin-bottom:8px;}
.pi-name{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:var(--white);margin-bottom:6px;}
.pi-loc{font-size:.76rem;color:rgba(255,255,255,.5);}
.pi-desc{font-size:.78rem;color:rgba(255,255,255,.7);margin-top:10px;line-height:1.6;font-weight:300;}

/* BLOG PAGE */
.blog-page{padding:60px 60px 100px;}
.blog-page-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.blog-card{background:var(--cream);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s;}
.blog-card:hover{transform:translateY(-5px);box-shadow:0 20px 52px rgba(0,0,0,.07);}
.blog-img{width:100%;height:220px;background-size:cover;background-position:center;background-color:var(--cream);}
.blog-body{padding:28px;}
.blog-tag{font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
.blog-title{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:400;line-height:1.3;margin-bottom:12px;}
.blog-excerpt{font-size:.8rem;color:var(--muted);line-height:1.75;font-weight:300;margin-bottom:16px;}
.blog-meta{font-size:.7rem;color:var(--muted);margin-bottom:14px;}
.blog-rm{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--navy);border:none;border-bottom:1px solid var(--navy);padding-bottom:2px;cursor:pointer;background:none;font-family:'DM Sans',sans-serif;transition:color .3s,border-color .3s;}
.blog-rm:hover{color:var(--gold);border-color:var(--gold);}
.blog-empty{text-align:center;padding:120px 40px;font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--muted);}
.blog-empty em{font-style:italic;color:var(--gold);}
.bm-overlay{display:none;position:fixed;inset:0;z-index:500;background:rgba(13,27,62,.5);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;}
.bm-overlay.open{display:flex;}
.bm-box{background:var(--white);max-width:780px;width:100%;max-height:90vh;overflow-y:auto;padding:56px;}
.bm-close{display:block;margin-bottom:24px;background:var(--navy);color:var(--white);border:none;padding:9px 20px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.76rem;letter-spacing:.1em;text-transform:uppercase;}
.bm-img{width:100%;height:300px;background-size:cover;background-position:center;margin-bottom:32px;}
.bm-tag-s{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.bm-ttl{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;line-height:1.2;margin-bottom:16px;}
.bm-mt{font-size:.75rem;color:var(--muted);margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid var(--border);}
.bm-ct{font-size:.9rem;line-height:1.9;color:var(--ink);font-weight:300;white-space:pre-wrap;}

/* CONTACT PAGE */
.contact-page-hero{padding:180px 60px 100px;background:var(--navy);position:relative;overflow:hidden;}
.contact-page-hero .ph-eyebrow{color:var(--gold2);}
.contact-page-hero .ph-title{color:var(--white);}
.contact-page-hero .ph-desc{color:rgba(255,255,255,.5);}
.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);background:var(--navy);}
.cg-col{padding:60px 48px;border-right:1px solid rgba(255,255,255,.07);}
.cg-col:last-child{border-right:none;}
.cg-label{font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;}
.cg-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:var(--white);margin-bottom:28px;}
.cg-item{display:flex;gap:14px;align-items:flex-start;margin-bottom:22px;}
.cg-icon{width:40px;height:40px;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.9rem;color:var(--gold);}
.cg-item-label{font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:4px;}
.cg-item-val{font-size:.82rem;color:rgba(255,255,255,.5);line-height:1.7;font-weight:300;}
.cg-item-val a{color:rgba(255,255,255,.5);text-decoration:none;transition:color .3s;}
.cg-item-val a:hover{color:var(--gold);}
.contact-map-full{width:100%;height:420px;background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;}
.contact-map-full iframe{width:100%;height:100%;border:none;filter:grayscale(20%) invert(90%) hue-rotate(180deg) brightness(.85) contrast(1.1);}
.cta-strip{background:var(--gold);padding:40px 60px;display:flex;align-items:center;justify-content:space-between;}
.cta-strip-text{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--white);}
.cta-strip-text em{font-style:italic;}
.cta-strip-btns{display:flex;gap:14px;}
.cta-w{font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);background:var(--white);padding:14px 28px;text-decoration:none;transition:all .3s;}
.cta-w:hover{background:var(--navy);color:var(--white);}
.cta-e{font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--white);border:1px solid rgba(255,255,255,.4);padding:14px 28px;text-decoration:none;transition:all .3s;}
.cta-e:hover{background:rgba(255,255,255,.15);}

/* FOOTER */
footer{background:var(--navy);padding:80px 60px 36px;border-top:1px solid rgba(255,255,255,.06);}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:56px;margin-bottom:60px;}
.footer-logo{font-family:'Cormorant Garamond',serif;font-size:1.85rem;font-weight:600;color:var(--white);letter-spacing:.04em;margin-bottom:18px;display:block;text-decoration:none;}
.footer-logo span{color:var(--gold);}.footer-logo img{height:44px;object-fit:contain;}
.footer-tagline{font-size:.81rem;color:rgba(255,255,255,.35);line-height:1.85;font-weight:300;max-width:280px;}
.footer-socials{display:flex;gap:10px;margin-top:28px;}
.social-btn{width:38px;height:38px;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.38);text-decoration:none;font-size:.82rem;transition:all .3s;}
.social-btn:hover{border-color:var(--gold);color:var(--gold);}
.footer-col-title{font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:22px;}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:11px;}
.footer-links a{font-size:.81rem;color:rgba(255,255,255,.38);text-decoration:none;transition:color .3s;font-weight:300;}
.footer-links a:hover{color:var(--gold);}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:28px;border-top:1px solid rgba(255,255,255,.06);}
.footer-copy,.footer-reg{font-size:.73rem;color:rgba(255,255,255,.24);font-weight:300;}
.whatsapp-float{position:fixed;bottom:32px;right:32px;z-index:100;width:56px;height:56px;background:#25d366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.4);text-decoration:none;transition:transform .3s;}
.whatsapp-float:hover{transform:scale(1.1);}
.whatsapp-float svg{width:28px;height:28px;fill:white;}
.marquee-wrap{background:var(--navy);padding:14px 0;overflow:hidden;}
.marquee-track{display:flex;animation:marquee 22s linear infinite;white-space:nowrap;}
.marquee-item{font-family:'Cormorant Garamond',serif;font-size:.95rem;color:rgba(255,255,255,.45);padding:0 24px;letter-spacing:.1em;flex-shrink:0;}
.marquee-item .dot{color:var(--gold);margin:0 12px;}
@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@media(max-width:1100px){
  .about-full,.svc-full-card{grid-template-columns:1fr;}.af-img{min-height:360px;}.af-content{padding:60px 40px;}
  .pillars-grid{grid-template-columns:1fr 1fr;}.stats-strip{grid-template-columns:1fr 1fr;gap:2px;}
  .contact-grid{grid-template-columns:1fr;}.footer-top{grid-template-columns:1fr 1fr;gap:36px;}
  .proj-masonry{grid-template-columns:1fr 1fr;}.proj-item.large{grid-column:span 2;}
}
@media(max-width:768px){
  nav{padding:20px 24px;}nav.scrolled{padding:14px 24px;}.nav-links,.nav-cta{display:none;}.nav-ham{display:flex;}
  .page-hero,.contact-page-hero{padding:130px 24px 72px;}.ph-title{font-size:2.4rem;}
  .svc-full{padding:40px 24px;}.sfc-content{padding:40px 28px;}
  .proj-page{padding:40px 24px 80px;}.proj-masonry{grid-template-columns:1fr;}.proj-item.large{grid-column:span 1;}
  .blog-page{padding:40px 24px 80px;}.blog-page-grid{grid-template-columns:1fr;}
  .stats-strip{grid-template-columns:1fr 1fr;padding:40px 24px;}
  .footer-top{grid-template-columns:1fr;gap:28px;}.footer-bottom{flex-direction:column;gap:10px;text-align:center;}
  .cta-strip{flex-direction:column;gap:20px;padding:32px 24px;}.cta-strip-btns{flex-direction:column;}
  .bm-box{padding:32px 20px;}.pillars-grid{grid-template-columns:1fr;}
}
`;

const PAGE=window.NESTOX_PAGE||'about';
let D=getD();

function init(){
  // Inject styles
  const style=document.createElement('style');style.textContent=CSS;document.head.appendChild(style);
  // Set title
  document.title={about:'About Us',services:'Services',projects:'Projects',blog:'Blog',contact:'Contact'}[PAGE]+' — '+D.brand.logoText+' Builders';
  // Build page structure
  document.body.innerHTML=`
    <div class="cursor" id="cursor"></div>
    <div class="cursor-ring" id="cursorRing"></div>
    <div class="mob-menu" id="mobMenu"><button class="mob-close" onclick="document.getElementById('mobMenu').classList.remove('open')">✕</button><div id="mobLinks"></div></div>
    <div class="bm-overlay" id="bmOverlay"><div class="bm-box">
      <button class="bm-close" onclick="document.getElementById('bmOverlay').classList.remove('open');document.body.style.overflow=''">✕ Close</button>
      <div class="bm-img" id="bmImg"></div><div class="bm-tag-s" id="bmTag"></div>
      <h2 class="bm-ttl" id="bmTitle"></h2><div class="bm-mt" id="bmMeta"></div><div class="bm-ct" id="bmContent"></div>
    </div></div>
    <nav id="navbar"><a href="index.html" class="nav-logo" id="navLogo"></a><ul class="nav-links" id="navLinks"></ul><a href="contact.html" class="nav-cta" id="navCta">Enquire Now</a><button class="nav-ham" onclick="document.getElementById('mobMenu').classList.add('open')"><span></span><span></span><span></span></button></nav>
    <div id="pageContent"></div>
    <a class="whatsapp-float" id="waFloat" href="#" target="_blank"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
  `;
  renderNav();
  ({about:renderAbout,services:renderServices,projects:renderProjects,blog:renderBlog,contact:renderContact})[PAGE]();
  initCursor();initScroll();
}

function renderNav(){
  const logo=document.getElementById('navLogo');
  if(D.brand.logoUrl)logo.innerHTML=`<img src="${D.brand.logoUrl}" alt="${D.brand.logoText}">`;
  else logo.innerHTML=D.brand.logoText+'<span>.</span>';
  const cp=PAGE+'.html';
  document.getElementById('navLinks').innerHTML=D.nav.links.filter(l=>!(l.href==='blog.html'&&D.blogs.length===0)).map(l=>`<li><a href="${l.href}" class="${l.href===cp?'active':''}">${l.label}</a></li>`).join('');
  document.getElementById('mobLinks').innerHTML=D.nav.links.filter(l=>!(l.href==='blog.html'&&D.blogs.length===0)).map(l=>`<a href="${l.href}" onclick="document.getElementById('mobMenu').classList.remove('open')">${l.label}</a>`).join('');
  const cta=document.getElementById('navCta');cta.textContent=D.nav.ctaLabel;cta.href=D.nav.ctaHref;
  const wa=document.getElementById('waFloat');if(wa)wa.href=`https://wa.me/${D.contact.whatsapp.replace(/\D/g,'')}`;
}

function renderAbout(){
  const a=D.about;
  const pillars=a.pillars.map(p=>`<div class="pillar"><div class="pillar-icon">${p.icon}</div><div class="pillar-title">${p.title}</div><div class="pillar-desc">${p.desc}</div></div>`).join('');
  document.getElementById('pageContent').innerHTML=`
    <div class="page-hero"><p class="ph-eyebrow">About Nestox Builders</p><h1 class="ph-title">${a.title}<br><em>${a.titleItalic}</em><br>${a.titleEnd}</h1><p class="ph-desc">${a.body1}</p></div>
    <div class="about-full">
      <div class="af-img"><div class="af-img-bg reveal" style="background-image:url('${a.imageUrl}')"></div></div>
      <div class="af-content">
        <p class="sec-eyebrow reveal">${a.eyebrow}</p>
        <h2 class="sec-title reveal reveal-delay-1">Our <em>Story</em></h2>
        <div class="af-body reveal reveal-delay-2">${a.fullBody}</div>
      </div>
    </div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-big">18+</div><div class="stat-lbl">Years of Excellence</div></div>
      <div class="stat-item"><div class="stat-big">240+</div><div class="stat-lbl">Projects Completed</div></div>
      <div class="stat-item"><div class="stat-big">3</div><div class="stat-lbl">Countries</div></div>
      <div class="stat-item"><div class="stat-big">98%</div><div class="stat-lbl">Client Satisfaction</div></div>
    </div>
    <div style="padding:100px 60px;background:var(--white);">
      <p class="sec-eyebrow reveal" style="justify-content:center;">Our Values</p>
      <h2 class="sec-title reveal reveal-delay-1" style="text-align:center;margin-bottom:48px;">What We <em>Stand For</em></h2>
      <div class="pillars-grid">${pillars}</div>
    </div>
    ${renderFooterHTML()}`;
  initReveal();
}

function renderServices(){
  const cards=D.services.map((s,i)=>`
    <div class="svc-full-card reveal">
      <div class="sfc-img" style="background-image:url('${s.imageUrl||''}')"></div>
      <div class="sfc-content">
        <div class="sfc-num">${s.num}</div>
        <h2 class="sfc-title">${s.title}</h2>
        <p class="sfc-desc">${s.fullDesc||s.desc}</p>
      </div>
    </div>`).join('');
  document.getElementById('pageContent').innerHTML=`
    <div class="page-hero"><p class="ph-eyebrow">What We Do</p><h1 class="ph-title">Our <em>Services</em></h1><p class="ph-desc">From residential villas to commercial landmarks — every service delivered with precision, passion, and an unwavering commitment to quality.</p></div>
    <div class="marquee-wrap"><div class="marquee-track">${[...D.marqueeItems,...D.marqueeItems].map(i=>`<span class="marquee-item">${i}<span class="dot">◆</span></span>`).join('')}</div></div>
    <div class="svc-full">${cards}</div>
    ${renderFooterHTML()}`;
  initReveal();
}

function renderProjects(){
  const cards=D.projects.map(p=>`
    <div class="proj-item${p.large?' large':''}" data-type="${p.type}">
      <div class="proj-item-bg" style="background-image:url('${p.imageUrl}')"></div>
      <div class="proj-item-ov">
        <div class="pi-tag">${p.tag}</div>
        <div class="pi-name">${p.name}</div>
        <div class="pi-loc">${p.location}</div>
        <div class="pi-desc">${p.desc||''}</div>
      </div>
    </div>`).join('');
  document.getElementById('pageContent').innerHTML=`
    <div class="page-hero"><p class="ph-eyebrow">Our Work</p><h1 class="ph-title">Featured <em>Projects</em></h1><p class="ph-desc">A selection of landmark projects that define our commitment to excellence across India, UAE, and Saudi Arabia.</p></div>
    <div class="proj-page">
      <div class="proj-tabs">
        <button class="tab-btn active" onclick="filterP('all',this)">All</button>
        <button class="tab-btn" onclick="filterP('residential',this)">Residential</button>
        <button class="tab-btn" onclick="filterP('commercial',this)">Commercial</button>
        <button class="tab-btn" onclick="filterP('interior',this)">Interior</button>
      </div>
      <div class="proj-masonry" id="projMasonry">${cards}</div>
    </div>
    ${renderFooterHTML()}`;
  window.filterP=function(type,btn){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    document.querySelectorAll('.proj-item').forEach(c=>{c.style.display=(type==='all'||c.dataset.type===type)?'':'none';});
  };
}

function renderBlog(){
  const hasBlog=D.blogs.length>0;
  const content=hasBlog
    ?`<div class="blog-page-grid">${D.blogs.map((b,i)=>`<div class="blog-card reveal${i>0?' reveal-delay-'+Math.min(i,4):''}">
        <div class="blog-img" style="background-image:url('${b.imageUrl||''}')"></div>
        <div class="blog-body">
          <div class="blog-tag">${b.category||'Insights'}</div>
          <h3 class="blog-title">${b.title}</h3>
          <p class="blog-excerpt">${b.excerpt||(b.content||'').substring(0,120)}...</p>
          <div class="blog-meta">${b.author||'Nestox Team'} · ${b.date||''}</div>
          <button class="blog-rm" onclick="openBlogModal('${b.id}')">Read More →</button>
        </div>
      </div>`).join('')}</div>`
    :`<div class="blog-empty">No posts yet.<br><em>Check back soon.</em></div>`;
  document.getElementById('pageContent').innerHTML=`
    <div class="page-hero"><p class="ph-eyebrow">Insights & Ideas</p><h1 class="ph-title">Our <em>Blog</em></h1><p class="ph-desc">Thoughts on architecture, design, construction trends, and the stories behind our most memorable projects.</p></div>
    <div class="blog-page">${content}</div>
    ${renderFooterHTML()}`;
  window.openBlogModal=function(id){
    const b=D.blogs.find(x=>x.id===id);if(!b)return;
    const img=document.getElementById('bmImg');
    img.style.display=b.imageUrl?'block':'none';if(b.imageUrl)img.style.backgroundImage=`url('${b.imageUrl}')`;
    document.getElementById('bmTag').textContent=b.category||'Insights';
    document.getElementById('bmTitle').textContent=b.title;
    document.getElementById('bmMeta').textContent=(b.author||'Nestox Team')+' · '+(b.date||'');
    document.getElementById('bmContent').textContent=b.content||'';
    document.getElementById('bmOverlay').classList.add('open');document.body.style.overflow='hidden';
  };
  initReveal();
}

function renderContact(){
  const c=D.contact;const f=D.footer;
  const mapContent=c.mapEmbed?`<iframe src="${c.mapEmbed}" allowfullscreen loading="lazy"></iframe>`:`<div style="text-align:center;color:rgba(255,255,255,.3);"><div style="font-size:3rem;margin-bottom:16px;">📍</div><p style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:300;">${c.officeKerala} · ${c.officeDubai} · ${c.officeRiyadh}</p></div>`;
  const wa=c.whatsapp.replace(/\D/g,'');
  document.getElementById('pageContent').innerHTML=`
    <div class="contact-page-hero"><p class="ph-eyebrow">Get In Touch</p><h1 class="ph-title">Let's Build<br><em>Something Together</em></h1><p class="ph-desc">Whether you have a plot, a vision, or just a feeling — we'd love to hear it. Reach out on any channel that works for you.</p></div>
    <div class="contact-grid">
      <div class="cg-col">
        <div class="cg-label">Direct Contact</div>
        <h2 class="cg-title">Reach <em>Us Directly</em></h2>
        <div class="cg-item"><div class="cg-icon">📞</div><div><div class="cg-item-label">Phone</div><div class="cg-item-val"><a href="tel:${c.phone1}">${c.phone1}</a><br><a href="tel:${c.phone2}">${c.phone2}</a><br><a href="tel:${c.phone3}">${c.phone3}</a></div></div></div>
        <div class="cg-item"><div class="cg-icon">✉</div><div><div class="cg-item-label">Email</div><div class="cg-item-val"><a href="mailto:${c.email}">${c.email}</a></div></div></div>
        <div class="cg-item"><div class="cg-icon">💬</div><div><div class="cg-item-label">WhatsApp</div><div class="cg-item-val"><a href="https://wa.me/${wa}" target="_blank">${c.whatsapp}</a></div></div></div>
        <div class="cg-item"><div class="cg-icon">🕐</div><div><div class="cg-item-label">Hours</div><div class="cg-item-val">${c.hours}<br>Sunday: Closed</div></div></div>
      </div>
      <div class="cg-col">
        <div class="cg-label">Our Offices</div>
        <h2 class="cg-title">Where to <em>Find Us</em></h2>
        <div class="cg-item"><div class="cg-icon">🇮🇳</div><div><div class="cg-item-label">India — Head Office</div><div class="cg-item-val">${c.address}</div></div></div>
        <div class="cg-item"><div class="cg-icon">🇦🇪</div><div><div class="cg-item-label">UAE Office</div><div class="cg-item-val">${c.officeDubai}</div></div></div>
        <div class="cg-item"><div class="cg-icon">🇸🇦</div><div><div class="cg-item-label">KSA Office</div><div class="cg-item-val">${c.officeRiyadh}</div></div></div>
      </div>
      <div class="cg-col">
        <div class="cg-label">Connect Online</div>
        <h2 class="cg-title">Follow Our <em>Journey</em></h2>
        ${f.social.linkedin!=='#'?`<div class="cg-item"><div class="cg-icon">in</div><div><div class="cg-item-label">LinkedIn</div><div class="cg-item-val"><a href="${f.social.linkedin}" target="_blank">Nestox Builders</a></div></div></div>`:''}
        ${f.social.instagram!=='#'?`<div class="cg-item"><div class="cg-icon">IG</div><div><div class="cg-item-label">Instagram</div><div class="cg-item-val"><a href="${f.social.instagram}" target="_blank">@nestoxbuilders</a></div></div></div>`:''}
        ${f.social.facebook!=='#'?`<div class="cg-item"><div class="cg-icon">fb</div><div><div class="cg-item-label">Facebook</div><div class="cg-item-val"><a href="${f.social.facebook}" target="_blank">Nestox Builders</a></div></div></div>`:''}
        <div class="cg-item" style="margin-top:16px;"><div><a href="https://wa.me/${wa}" target="_blank" style="display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#fff;padding:13px 22px;text-decoration:none;font-size:.73rem;letter-spacing:.1em;text-transform:uppercase;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chat on WhatsApp
        </a></div></div>
      </div>
    </div>
    <div class="contact-map-full">${mapContent}</div>
    <div class="cta-strip">
      <div class="cta-strip-text">Ready to build your <em>dream space?</em></div>
      <div class="cta-strip-btns">
        <a href="https://wa.me/${wa}" target="_blank" class="cta-w">WhatsApp Us</a>
        <a href="mailto:${c.email}" class="cta-e">Send Email</a>
      </div>
    </div>
    ${renderFooterHTML()}`;
}

function renderFooterHTML(){
  const f=D.footer;const b=D.brand;
  const logoHtml=b.logoUrl?`<a href="index.html" class="footer-logo"><img src="${b.logoUrl}" alt="${b.logoText}"></a>`:`<a href="index.html" class="footer-logo">${b.logoText}<span>.</span></a>`;
  const navLinks=D.nav.links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const svcLinks=D.services.slice(0,5).map(s=>`<li><a href="services.html">${s.title}</a></li>`).join('');
  return `<footer>
    <div class="footer-top">
      <div>${logoHtml}<p class="footer-tagline">${f.tagline}</p>
        <div class="footer-socials">
          <a href="${f.social.linkedin}" class="social-btn" target="_blank">in</a>
          <a href="${f.social.instagram}" class="social-btn" target="_blank">IG</a>
          <a href="${f.social.facebook}" class="social-btn" target="_blank">fb</a>
          <a href="${f.social.youtube}" class="social-btn" target="_blank">YT</a>
        </div>
      </div>
      <div><div class="footer-col-title">Navigation</div><ul class="footer-links">${navLinks}</ul></div>
      <div><div class="footer-col-title">Services</div><ul class="footer-links">${svcLinks}</ul></div>
      <div><div class="footer-col-title">Contact</div><ul class="footer-links">
        <li><a href="tel:${D.contact.phone1}">${D.contact.phone1}</a></li>
        <li><a href="mailto:${D.contact.email}">${D.contact.email}</a></li>
        <li><a href="contact.html">Visit Our Offices</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom"><p class="footer-copy">${f.copyright}</p><p class="footer-reg">${f.certifications}</p></div>
  </footer>`;
}

function initCursor(){
  const c=document.getElementById('cursor'),r=document.getElementById('cursorRing');
  if(!c||!r)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;c.style.transform=`translate(${mx-4}px,${my-4}px)`;});
  (function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;r.style.transform=`translate(${rx-18}px,${ry-18}px)`;requestAnimationFrame(loop);})();
  document.addEventListener('mouseover',e=>{if(e.target.closest('a,button')){r.style.width='52px';r.style.height='52px';}else{r.style.width='36px';r.style.height='36px';}});
}
function initScroll(){
  window.addEventListener('scroll',()=>{const n=document.getElementById('navbar');if(n)n.classList.toggle('scrolled',window.scrollY>60);});
}
function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

window.addEventListener('DOMContentLoaded',init);
})();
