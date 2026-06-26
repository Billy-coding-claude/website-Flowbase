/* Flowbase — interactions, rotating headline & NL/EN i18n */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================
     Translations — every visible string lives here (nl + en).
     Prices and brand names (Flowbase, hello.flowbase@outlook.com) are kept
     identical across languages, so they stay in the markup.
     ========================================================= */
  var I18N = {
    en: {
      'skip': 'Skip to content',
      'nav.services': 'Services',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in touch',
      'nav.how': 'How it works',
      'nav.language': 'Language',

      'hero.eyebrow': 'Web design & content studio · Based in the Netherlands',
      'hero.lead': 'We build',
      'hero.rotateAll': 'websites, content, reels, and growth.',
      'hero.sub': 'Flowbase builds clean, fast, conversion-focused websites for local businesses — then keeps them growing with social content that actually gets posted. Premium quality, without the €5,000 agency price tag.',
      'hero.cta1': 'Start your project',
      'hero.cta2': 'See pricing',
      'trust.fast': 'Fast turnaround',
      'trust.pricing': 'Fixed, honest pricing',
      'trust.nl': 'Based in the Netherlands',

      'aud.restaurants': 'Restaurants',
      'aud.barbershops': 'Barbershops',
      'aud.gyms': 'Gyms',
      'aud.dental': 'Dental clinics',
      'aud.contractors': 'Contractors',
      'aud.cafes': 'Cafés',
      'aud.salons': 'Salons',
      'aud.local': 'Local service businesses',

      'problems.eyebrow': 'Sound familiar?',
      'problems.title': 'Your business is great. Does your online presence show it?',
      'problems.lead': "Most customers check you out online before they ever walk in or pick up the phone. If what they find looks outdated — or isn't there at all — they quietly move on to the next option. Flowbase fixes that.",
      'p1.title': 'An outdated or missing website',
      'p1.body': 'You get a clean, modern site that makes you look as good as you actually are — and loads in under two seconds on any phone.',
      'p2.title': 'No time for social media',
      'p2.body': 'Done-for-you posts and reels, every month. You run your business — I keep your feed active, consistent, and on-brand.',
      'p3.title': 'Losing customers to slicker competitors',
      'p3.body': 'A site built to convert — turning visitors into calls, bookings, and paying customers instead of sending them elsewhere.',

      'services.eyebrow': 'What I do',
      'services.title': 'Everything you need to look great and grow online.',
      'services.lead': 'Three focused services that work on their own — or together as one simple monthly plan.',
      'svc1.title': 'Websites',
      'svc1.body': 'Clean, fast, conversion-focused sites built for local businesses. Designed to look premium on every screen and turn visitors into customers.',
      'svc1.t1': 'Custom design — never a generic template',
      'svc1.t2': 'Loads fast & ranks well on Google',
      'svc1.t3': 'Built to drive calls, bookings & visits',
      'svc2.title': 'Social Content',
      'svc2.body': 'Monthly graphics and captions that keep your social media active and consistent — so you stay top of mind without lifting a finger.',
      'svc2.t1': 'On-brand graphics, designed for you',
      'svc2.t2': 'Ready-to-post captions included',
      'svc2.t3': 'A consistent feed, every single month',
      'svc3.title': 'Reels',
      'svc3.body': 'Short-form video, edited from your own footage. Eye-catching reels that earn reach and show off what makes your business special.',
      'svc3.t1': 'Edited from clips you already film',
      'svc3.t2': 'Captions, music & pacing handled',
      'svc3.t3': 'Built for reach on Reels & TikTok',
      'services.foot': 'Tell me about your business',

      'how.eyebrow': 'How it works',
      'how.title': 'Simple from first chat to going live.',
      'how.lead': 'No drawn-out agency process. No jargon. Just three clear steps and one person handling all of it.',
      'step1.title': 'We talk about your business',
      'step1.body': 'A quick, no-pressure chat about what you do, who you serve, and what you want your website to achieve. No commitment needed.',
      'step2.title': 'I design and build your site',
      'step2.body': "I handle everything — design, copy, and build — and keep you in the loop the whole way. You'll watch it come together, in plain language.",
      'step3.title': 'You go live — and I keep it growing',
      'step3.body': 'Your site launches, and your care plan keeps it fast, secure, and up to date — backed by fresh social content every month.',
      'how.note': 'Real client projects coming soon — Flowbase is a new studio, and your business could be one of the first features here.',

      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Simple, honest pricing. No surprises.',
      'pricing.lead': 'Four ways I help local businesses grow online — clear, honest pricing for each, with no surprises.',

      'unit.onetime': 'one-time build',
      'careplan': '/mo care plan',
      'unit.permonth': '/month',
      'unit.permo': '/mo',

      'presence.for': 'Info site for restaurants, barbers & small service businesses.',
      'presence.t1': 'Up to 5 pages, custom designed',
      'presence.t2': 'Mobile-first & lightning fast',
      'presence.t3': 'Contact details, hours & map',
      'presence.t4': "Basic SEO so you're findable",
      'presence.t5': 'Hosting, backups & updates',
      'presence.t6': 'No database or logins',
      'presence.cta': 'Choose Presence',

      'growth.for': 'Lead-focused site for gyms, clinics & contractors.',
      'growth.t1': 'Everything in Presence',
      'growth.t2': 'Lead-capture & contact forms',
      'growth.t3': 'Photo & project gallery',
      'growth.t4': 'On-page SEO for local search',
      'growth.t5': 'Google Business Profile setup',
      'growth.t6': 'Monthly content updates',
      'growth.cta': 'Choose Growth',

      'scale.for': 'For businesses that need booking or customer logins.',
      'scale.t1': 'Everything in Growth',
      'scale.t2': 'Online booking system, or',
      'scale.t3': 'Secure customer login area',
      'scale.t4': 'Advanced integrations',
      'scale.t5': 'Custom functionality',
      'scale.t6': 'Priority support',
      'scale.cta': 'Choose Scale',

      'bundles.title': 'Grow on autopilot — monthly bundles',
      'bundles.lead': 'Bundle your care plan with social content and reels for one simple monthly price. Recurring, billed monthly — the one-time website build is separate.',

      'starter.for': 'Stay live and stay consistent.',
      'starter.t1': 'Presence care plan',
      'starter.t2': '5 social posts / month',
      'starter.t3': 'Graphics + captions included',
      'starter.cta': 'Start with Starter',

      'bundle.badge': 'Most popular',
      'growthb.for': 'The sweet spot for most local businesses.',
      'growthb.t1': 'Growth care plan',
      'growthb.t2': '10 social posts / month',
      'growthb.t3': '2 reels / month',
      'growthb.t4': 'Graphics + captions included',
      'growthb.cta': 'Choose Growth',

      'premium.for': 'Maximum reach, fully hands-off.',
      'premium.t1': 'Growth care plan',
      'premium.t2': '15 social posts / month',
      'premium.t3': '4 reels / month',
      'premium.t4': 'Graphics + captions included',
      'premium.cta': 'Go Premium',

      'addons.title': 'Just need content?',
      'addons.lead': 'Already have a website? Add social content or reels on their own.',
      'addon1.h4': 'Social Posts',
      'addon1.sub': 'graphics + captions',
      'addon2.h4': 'Reels',
      'addon2.sub': 'edited from your footage',
      'meta.5posts': '5 posts / mo',
      'meta.10posts': '10 posts / mo',
      'meta.15posts': '15 posts / mo',
      'meta.2reels': '2 reels / mo',
      'meta.4reels': '4 reels / mo',

      'about.quote': "Good design shouldn't be a luxury that only big brands can afford.",
      'about.quotecap': 'Flowbase — Netherlands',
      'about.badgeStrong': '1-person studio',
      'about.badgeSpan': 'You talk to the maker, not a sales team',
      'about.eyebrow': 'About Flowbase',
      'about.title': 'Premium websites for local businesses — without the agency price tag.',
      'about.p1': "I started Flowbase because local businesses deserve better than a €5,000 agency invoice or a DIY template that looks like everyone else's. I'm a solo founder based in the Netherlands, which means you work directly with the person designing and building your site.",
      'about.p2': 'No bloated retainers. No account managers. No jargon. Just genuinely good websites and content for the restaurants, barbershops, gyms, clinics, and contractors that keep our towns running — built carefully, priced fairly, and delivered fast.',
      'about.pt1': 'Work directly with me, start to finish',
      'about.pt2': 'Fair, transparent pricing — no surprises',
      'about.pt3': 'Local focus — I understand your customers',
      'about.cta': 'Work with me',

      'contact.eyebrow': 'Get in touch',
      'contact.title': "Let's build something that grows your business.",
      'contact.lead': "Tell me a bit about your business and what you need. I'll get back to you within one business day — no pressure, no hard sell.",
      'contact.fname': 'Name',
      'contact.fbusiness': 'Business',
      'contact.femail': 'Email',
      'contact.fmessage': 'Message',
      'ph.name': 'Your name',
      'ph.business': 'Your business name',
      'ph.email': 'you@business.nl',
      'ph.message': 'What are you looking for? A new website, social content, or both?',
      'contact.send': 'Send message',

      'footer.tag': 'Websites & content that grow your business.',
      'footer.studio': 'Studio',
      'footer.getintouch': 'Get in touch',
      'footer.rights': 'All rights reserved.',
      'footer.madein': 'Made in the Netherlands',

      'form.required': 'This field is required.',
      'form.email': 'Please enter a valid email address.',
      'form.fix': 'Please fix the highlighted fields.',
      'form.subject': 'New enquiry from {business} (Flowbase website)',
      'form.bodyName': 'Name:',
      'form.bodyBusiness': 'Business:',
      'form.bodyEmail': 'Email:',
      'form.sending': 'Sending…',
      'form.success': "Thanks, {name}! Your email app should open with the message ready to send. If it doesn't, email me directly at {email}.",
      'form.successSent': "Thanks, {name}! Your message is on its way — I'll get back to you within one business day.",
      'form.errorSend': "Something went wrong sending the form. Please email me directly at {email}.",

      'nav.home': 'Home',
      'nav.work': 'Work',
      'nav.faq': 'FAQ',
      'meta.title.home': 'Flowbase — Websites & content that grow your business',
      'meta.title.services': 'Services — Flowbase',
      'meta.title.pricing': 'Pricing — Flowbase',
      'meta.title.about': 'About — Flowbase',
      'meta.title.contact': 'Contact — Flowbase',
      'meta.desc.home': 'Flowbase is a web design & content studio for local businesses in the Netherlands. Clean, fast, conversion-focused websites — plus ongoing social content.',
      'meta.desc.services': 'Websites, social content, and reels for local businesses in the Netherlands — clear benefits, done for you by one studio.',
      'meta.desc.pricing': 'Simple, honest pricing: one-time website builds from €695 plus low monthly care plans and content bundles. No surprises.',
      'meta.desc.about': 'Flowbase is a one-person web design & content studio in the Netherlands — premium websites for local businesses without the agency price tag.',
      'meta.desc.contact': 'Get in touch with Flowbase — tell me about your business and hear back within one business day. hello.flowbase@outlook.com.',

      'step1.time': '~30-minute chat',
      'step2.time': 'About 2 weeks',
      'step3.time': 'Live + ongoing',

      'work.eyebrow': 'Case studies',
      'work.title': 'Real results, coming soon.',
      'work.lead': 'Real-world examples will follow once there is enough data. We only show results when we can back them up honestly — no invented numbers.',
      'work.note': "Want your real project shown here? Let's make it the first.",
      'work1.title': 'Coming soon',
      'work1.body': 'A concrete customer case goes here.',
      'work2.title': 'Coming soon',
      'work2.body': 'Example case to be added once available.',
      'work3.title': 'Coming soon',
      'work3.body': 'Results shown once there is enough real-world data.',

      'why.eyebrow': 'Why Flowbase',
      'why.title': 'Premium quality, without the agency price tag.',
      'why.lead': 'The middle ground between a do-it-yourself template and an expensive agency — done for you, by one person who cares.',
      'why.col0': 'Feature',
      'why.colDiy': 'DIY builder',
      'why.colFb': 'Flowbase',
      'why.colAgency': 'Agency',
      'why.r1': 'Price',
      'why.r1diy': 'Cheap, costs your time',
      'why.r1fb': 'Fair, fixed from €1,250',
      'why.r1agency': '€5,000+',
      'why.r2': 'Live in',
      'why.r2diy': 'Weeks of your evenings',
      'why.r2fb': '~2 weeks, done for you',
      'why.r2agency': '1–3 months',
      'why.r3': 'Custom design',
      'why.r3diy': 'Template',
      'why.r3fb': 'Made for you',
      'why.r3agency': 'Yes',
      'why.r4': 'Built to convert',
      'why.r4diy': 'Rarely',
      'why.r4fb': 'Always',
      'why.r4agency': 'Sometimes',
      'why.r5': 'Ongoing content',
      'why.r5diy': 'You do it',
      'why.r5fb': 'Optional, done for you',
      'why.r5agency': 'Extra retainer',
      'why.r6': 'You deal with',
      'why.r6diy': 'Yourself',
      'why.r6fb': 'The maker, directly',
      'why.r6agency': 'Account manager',

      'guarantee.eyebrow': 'My promise',
      'guarantee.title': "No risk. Just a site you'll be proud of.",
      'guarantee1.title': 'Fixed price, no surprises',
      'guarantee1.body': 'The price we agree on is the price you pay. No padded hours, no surprise invoices — ever.',
      'guarantee2.title': 'You own everything',
      'guarantee2.body': 'The website, the content, and the domain are 100% yours. Walk away whenever you like — it all comes with you.',
      'guarantee3.title': 'No lock-in care plan',
      'guarantee3.body': 'Monthly plans are billed month to month. Pause or cancel anytime — no long contracts, no penalties.',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Questions, answered honestly.',
      'faq.lead': "Still wondering about something? Email me — I'm happy to help, no pressure.",
      'faq.q1': 'How long until my website is live?',
      'faq.a1': "Most sites go live in around two weeks once I have your content. Bigger builds with booking or logins take a little longer — you'll always get a clear timeline upfront.",
      'faq.q2': 'Who owns the website and the content?',
      'faq.a2': "You do — completely. The site, the copy, the images, and the domain are yours. There's no lock-in and nothing held hostage.",
      'faq.q3': "What's included in the monthly care plan?",
      'faq.a3': 'Hosting, security, backups, software updates, and small content tweaks — so your site stays fast, safe, and current without you having to think about it.',
      'faq.q4': 'Do I have to write the text myself?',
      'faq.a4': 'No. I draft the copy and structure based on our chat about your business — you just review and approve. Good writing is part of the job.',
      'faq.q5': 'Can you also handle my social media?',
      'faq.a5': "Yes — that's the content side of Flowbase. Posts and reels, done for you every month, either on their own or bundled with your care plan.",
      'faq.q6': 'How does payment work?',
      'faq.a6': 'A deposit to get started and the rest on completion for the build. Monthly plans are billed month to month, and you can cancel whenever you like.',

      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'cookie.text': "This site doesn't track you — it only remembers your language choice on your own device.",
      'cookie.link': 'Privacy',
      'cookie.ok': 'Got it',

      'nav.theme': 'Theme',
      'stat1.label': 'weeks to launch',
      'stat2.label': 'business day to reply',
      'stat3.label': 'owned by you',
      'stat4.label': 'services, one studio',

      'cta1.title': 'Ready to look as good online as you are in person?',
      'cta1.sub': 'Tell me about your business — the first chat is free and no-pressure.',
      'cta1.btn': 'Start your project',
      'cta2.title': "Still reading? Let's just have a quick chat.",
      'cta2.sub': "No commitment — tell me what you need and I'll tell you honestly if I can help.",
      'cta2.btn': 'Get in touch',
      'contact.book': 'Book a free 30-min call',
      'pricing.tabBuild': 'Build a site',
      'pricing.tabGrow': 'Grow monthly',
      'form.sentTitle': 'Message sent!',
      'home.servicesCta': 'Explore all services',
      'home.aboutCta': 'More about Flowbase',
      'interiors.eyebrow': 'Who I build for',
      'interiors.title': 'Made for the places that make a neighbourhood.',
      'interiors.cafe': 'Cafés',
      'interiors.restaurant': 'Restaurants',
      'interiors.barber': 'Barbershops & salons',

      'pr.bestforLabel': 'Best for',
      'pr.choose': 'Choose plan',
      'pr.bill.web': 'One-time build',
      'pr.bill.brand': 'One-time project',
      'pr.bill.content': 'Monthly subscription — cancel anytime',
      'pr.bill.webapp': 'One-time build + required monthly care',
      'pr.cat.web': 'Websites',
      'pr.cat.brand': 'Branding',
      'pr.cat.content': 'Social media content',
      'pr.cat.webapp': 'Web apps',
      'tag.barbers': 'Barbers',
      'tag.clinics': 'Clinics',

      'pr.web.title': 'Build a website that turns visitors into customers.',
      'pr.w1.name': 'Starter Website',
      'pr.w1.t1': 'Up to 5 pages',
      'pr.w1.t2': 'Custom design',
      'pr.w1.t3': 'Mobile responsive',
      'pr.w1.t4': 'Basic SEO',
      'pr.w1.t5': 'Contact form',
      'pr.w1.t6': '2 revisions',
      'pr.w2.name': 'Growth Website',
      'pr.w2.t1': 'Up to 10 pages',
      'pr.w2.t2': 'More custom sections',
      'pr.w2.t3': 'Better animations',
      'pr.w2.t4': 'Blog support',
      'pr.w2.t5': 'SEO setup',
      'pr.w2.t6': '3 revisions',
      'pr.w3.name': 'Premium Website',
      'pr.w3.t1': 'Fully custom design',
      'pr.w3.t2': 'Advanced animations',
      'pr.w3.t3': 'Copywriting assistance',
      'pr.w3.t4': 'Premium layouts',
      'pr.w3.t5': 'Priority support',
      'pr.w3.t6': '4 revisions',
      'pr.care.tag': 'Optional monthly add-on',
      'pr.care.title': 'Monthly Website Care Plans',
      'pr.care1.name': 'Basic Care',
      'pr.care1.t1': 'Hosting',
      'pr.care1.t2': 'Small text updates',
      'pr.care2.name': 'Growth Care',
      'pr.care2.t1': 'Hosting',
      'pr.care2.t2': 'Content changes',
      'pr.care2.t3': 'Priority support',
      'pr.care2.t4': 'Monthly backups',
      'pr.care3.name': 'Premium Care',
      'pr.care3.t1': 'Everything above',
      'pr.care3.t2': 'Landing pages',
      'pr.care3.t3': 'Ongoing improvements',

      'pr.brand.title': 'A professional identity for your business.',
      'pr.b1.name': 'Logo Package',
      'pr.b1.t1': 'Logo',
      'pr.b1.t2': 'PNG files',
      'pr.b1.t3': 'SVG files',
      'pr.b2.name': 'Brand Identity',
      'pr.b2.t1': 'Logo',
      'pr.b2.t2': 'Colors',
      'pr.b2.t3': 'Typography',
      'pr.b2.t4': 'Social profile assets',
      'pr.b3.name': 'Premium Brand System',
      'pr.b3.t1': 'Logo',
      'pr.b3.t2': 'Colors',
      'pr.b3.t3': 'Typography',
      'pr.b3.t4': 'Brand guide',
      'pr.b3.t5': 'Brand voice',
      'pr.b3.t6': 'Social assets',

      'pr.content.title': 'Content for your business — ready to post.',
      'pr.content.lead': 'You receive the content and post it yourself. No scheduling, no management — just great content delivered to you.',
      'pr.s.blockA': 'Monthly plans',
      'pr.s1.name': 'Starter Content',
      'pr.s1.t1': '3 posts',
      'pr.s1.t2': '2 reels',
      'pr.s1.for': 'For businesses that want a simple but consistent presence.',
      'pr.s2.name': 'Growth Content',
      'pr.s2.t1': '5 posts',
      'pr.s2.t2': '3 reels',
      'pr.s2.for': 'For businesses that want regular content and steady growth.',
      'pr.s3.name': 'Premium Content',
      'pr.s3.t1': '10 posts',
      'pr.s3.t2': '4 reels',
      'pr.s3.for': 'For businesses that want maximum visibility.',
      'pr.sep.title': 'Buy separately',
      'pr.sep.sub': 'One-time — no subscription',
      'pr.sep.note': 'Each post includes image and caption, ready to upload.',
      'pr.sep.posts': 'Posts',
      'pr.sep.reels': 'Reels',
      'pr.sep.p3': '3 posts',
      'pr.sep.p5': '5 posts',
      'pr.sep.p10': '10 posts',
      'pr.sep.r1': '1 reel',
      'pr.sep.r2': '2 reels',
      'pr.sep.r4': '4 reels',

      'pr.webapp.title': 'Custom software built around your business.',
      'pr.webapp.lead': 'Small, focused web apps — not bloated enterprise systems. Built fast, priced fairly, maintained monthly.',
      'pr.wa.label': 'Examples',
      'pr.wa.ex1': 'Booking tool',
      'pr.wa.ex2': 'Client portal',
      'pr.wa.ex3': 'Simple CRM',
      'pr.wa.ex4': 'Membership site',
      'pr.wa.ex5': 'Reservation system',
      'pr.wa.ex6': 'Internal dashboard',
      'pr.wa1.name': 'Starter App',
      'pr.wa1.t1': 'Landing page',
      'pr.wa1.t2': 'User login and authentication',
      'pr.wa1.t3': 'Simple dashboard',
      'pr.wa1.t4': 'Database',
      'pr.wa1.t5': 'Mobile responsive',
      'pr.wa2.name': 'Growth App',
      'pr.wa2.t1': 'Everything in Starter',
      'pr.wa2.t2': 'Payments (Stripe / Mollie / iDEAL)',
      'pr.wa2.t3': 'User accounts and profiles',
      'pr.wa2.t4': 'Admin panel',
      'pr.wa2.t5': 'Larger advanced dashboard',
      'pr.wa2.t6': 'Email notifications',
      'pr.wa3.name': 'Max App',
      'pr.wa3.t1': 'Everything in Growth',
      'pr.wa3.t2': 'Google integrations (Calendar, login, etc.)',
      'pr.wa3.t3': 'Third-party integrations and APIs',
      'pr.wa3.t4': 'Advanced features and custom logic',
      'pr.wa3.t5': 'Priority support',
      'pr.appcare.tag': 'Required monthly plan',
      'pr.appcare.title': 'App Care',
      'pr.appcare.t1': 'Hosting',
      'pr.appcare.t2': 'Database',
      'pr.appcare.t3': 'Updates and bug fixes',
      'pr.appcare.t4': 'Uptime monitoring',
      'pr.appcare.note': 'All web apps require a monthly care plan to cover hosting, database, and maintenance.',

      /* bundles */
      'pr.bun.eyebrow': 'Bundles',
      'pr.bun.title': 'Everything in one package.',
      'pr.bun.lead': 'Website, branding and content — with 3 months free care. Better together, priced to match.',
      'pr.bun.was': 'Normally',
      'pr.bun.saving': 'You save',
      'pr.bun.after': 'From month 4:',
      'pr.bun.cta': 'Choose this bundle',
      'pr.bun.toggle.web': 'Website',
      'pr.bun.toggle.app': 'App',
      'pr.bun.cmp.title': "What's in each bundle",
      'pr.bun.cmp.site': 'Website / App',
      'pr.bun.cmp.brand': 'Branding',
      'pr.bun.cmp.content': 'Content',
      'pr.bun.cmp.ai': 'AI Assistant',
      'pr.bun.cmp.care': 'Care plan',
      'pr.bun.cmp.price': 'Price',
      'pr.bun.cmp.b1site': 'Starter website',
      'pr.bun.cmp.b2site': 'Growth website or Starter app',
      'pr.bun.cmp.b3site': 'Max website or Growth app',
      'pr.bun.cmp.b1brand': 'Starter',
      'pr.bun.cmp.b2brand': 'Growth',
      'pr.bun.cmp.b3brand': 'Max',
      'pr.bun.cmp.b1con': 'Starter (3+1)',
      'pr.bun.cmp.b2con': 'Growth (5+2)',
      'pr.bun.cmp.b3con': 'Max (8+3)',
      'pr.bun.cmp.b1care': 'Basic (3mo free)',
      'pr.bun.cmp.b2care': 'Professional (3mo free)',
      'pr.bun.cmp.b3care': 'Premium (3mo free)',
      'pr.bun.cmp.b2price': 'from €2,295',
      'pr.bun.cmp.b3price': 'from €3,695',
      'pr.bun1.name': 'Starter',
      'pr.bun1.tag': 'Professional online in one go.',
      'pr.bun1.free': '3 months free Basic care included',
      'pr.bun1.i1': 'Starter website',
      'pr.bun1.i2': 'Starter branding',
      'pr.bun1.i3': 'Starter content (3 posts + 1 reel)',
      'pr.bun1.i4': 'Basic care — 3 months free',
      'pr.bun1.for': 'Baker, hairdresser, physio — starting out, smaller budget',
      'pr.bun1.after': '€29/mo (Basic care)',
      'pr.bun2.name': 'Growth',
      'pr.bun2.tag': 'Serious growth with branding, content & AI.',
      'pr.bun2.free': '3 months free Professional care included',
      'pr.bun2.iweb': 'Growth website',
      'pr.bun2.iapp': 'Starter app',
      'pr.bun2.i2': 'Growth branding',
      'pr.bun2.i3': 'Growth content (5 posts + 2 reels)',
      'pr.bun2.i4': 'AI Assistant setup + 3 months prepaid',
      'pr.bun2.i5': 'Professional care — 3 months free',
      'pr.bun2.for': 'Restaurant, gym, dentist — serious growth',
      'pr.bun2.after': '€129/mo (AI) + €59/mo (care)',
      'pr.bun3.name': 'Max',
      'pr.bun3.tag': 'Everything Flowbase has to offer.',
      'pr.bun3.free': '3 months free Premium care included',
      'pr.bun3.iweb': 'Max website',
      'pr.bun3.iapp': 'Growth app',
      'pr.bun3.i2': 'Max branding',
      'pr.bun3.i3': 'Max content (8 posts + 3 reels)',
      'pr.bun3.i4': 'AI Assistant setup + 3 months prepaid',
      'pr.bun3.i5': 'Premium care — 3 months free',
      'pr.bun3.for': 'Dental clinic, contractor, gym — all in one go',
      'pr.bun3.after': '€129/mo (AI) + €99/mo (care)',
      /* individual services */
      'pr.ind.eyebrow': 'Individual services',
      'pr.ind.title': 'Or pick exactly what you need.',
      'pr.ind.lead': 'Every service is available separately — no bundle required.',
      'pr.stab.web': 'Websites',
      'pr.stab.app': 'Apps',
      'pr.stab.brand': 'Branding',
      'pr.stab.content': 'Content',
      'pr.stab.ai': 'AI Assistant',
      /* content one-time packs */
      'pr.bill.content.once': 'One-time content pack',
      'pr.con.p3r1': '3 posts + 1 reel',
      'pr.con.p5r2': '5 posts + 2 reels',
      'pr.con.p8r3': '8 posts + 3 reels',
      'pr.alac.title': 'À la carte',
      'pr.alac.sub': 'One-time — no subscription',
      'pr.alac.post': 'Extra post (image + caption)',
      'pr.alac.reel': 'Extra reel (short video + caption)',
      /* AI assistant */
      'pr.ai.name': 'AI Assistant',
      'pr.ai.tag': 'Your own AI, built for your business — connected via Telegram or WhatsApp.',
      'pr.ai.billOnce': 'One-time setup',
      'pr.ai.billMo': '+ monthly subscription',
      'pr.ai.setupLabel': 'Setup',
      'pr.ai.setupUnit': 'one-time',
      'pr.ai.moLabel': 'Monthly',
      'pr.ai.t1': 'Dedicated VPS',
      'pr.ai.t2': 'Telegram / WhatsApp connection',
      'pr.ai.t3': '2 custom automations',
      'pr.ai.t4': 'Persistent memory',
      'pr.ai.t5': 'Daily / weekly summaries',
      'pr.ai.t6': 'Email support',
      'pr.ai.extra': 'Extra automation: €49 one-time per automation',
      'pr.ai.cta': 'Get started',
      /* care plans */
      'pr.care.eyebrow': 'Monthly care',
      'pr.care.title': 'Keep your site fast, safe, and current.',
      'pr.care.web.title': 'Website Care Plans',
      'pr.care2.name': 'Professional Care',
      'pr.care2.t2': 'Monthly edits',
      'pr.care2.t3': 'Performance checks',
      'pr.caren.updates': 'Updates & backups',
      'pr.caren.report': 'Monthly report',
      'pr.caren.seo': 'SEO tweaks',
      /* updated titles */
      'pricing.title': 'Clear pricing. No surprises.',
      'pricing.lead': 'Choose a bundle and get everything in one go — or pick exactly what you need.'
    },

    nl: {
      'skip': 'Naar de inhoud',
      'nav.services': 'Diensten',
      'nav.pricing': 'Prijzen',
      'nav.about': 'Over mij',
      'nav.contact': 'Contact',
      'nav.cta': 'Neem contact op',
      'nav.how': 'Hoe het werkt',
      'nav.language': 'Taal',

      'hero.eyebrow': 'Webdesign & contentstudio · Gevestigd in Nederland',
      'hero.lead': 'Wij maken',
      'hero.rotateAll': 'websites, content, reels en groei.',
      'hero.sub': 'Flowbase bouwt strakke, snelle websites die bezoekers omzetten in klanten voor lokale ondernemers — en houdt ze groeiend met social content die ook écht geplaatst wordt. Premium kwaliteit, zonder het prijskaartje van €5.000 van een bureau.',
      'hero.cta1': 'Start jouw project',
      'hero.cta2': 'Bekijk prijzen',
      'trust.fast': 'Snelle oplevering',
      'trust.pricing': 'Vaste, eerlijke prijzen',
      'trust.nl': 'Gevestigd in Nederland',

      'aud.restaurants': 'Restaurants',
      'aud.barbershops': 'Kapperszaken',
      'aud.gyms': 'Sportscholen',
      'aud.dental': 'Tandartspraktijken',
      'aud.contractors': 'Aannemers',
      'aud.cafes': 'Cafés',
      'aud.salons': 'Salons',
      'aud.local': 'Lokale dienstverleners',

      'problems.eyebrow': 'Herkenbaar?',
      'problems.title': 'Jouw zaak is top. Laat je online uitstraling dat ook zien?',
      'problems.lead': 'De meeste klanten checken je eerst online voordat ze binnenlopen of bellen. Ziet wat ze vinden er verouderd uit — of staat er niets — dan gaan ze stilletjes door naar de volgende. Flowbase lost dat op.',
      'p1.title': 'Een verouderde of ontbrekende website',
      'p1.body': 'Je krijgt een strakke, moderne site die je net zo goed laat ogen als je écht bent — en die op elke telefoon in minder dan twee seconden laadt.',
      'p2.title': 'Geen tijd voor social media',
      'p2.body': 'Posts en reels, elke maand voor je gemaakt. Jij runt je zaak — ik houd je feed actief, consistent en in jouw stijl.',
      'p3.title': 'Klanten verliezen aan strakkere concurrenten',
      'p3.body': 'Een site die is gebouwd om te converteren — bezoekers worden telefoontjes, boekingen en betalende klanten in plaats van dat ze doorklikken naar de concurrent.',

      'services.eyebrow': 'Wat ik doe',
      'services.title': 'Alles wat je nodig hebt om er online top uit te zien en te groeien.',
      'services.lead': 'Drie heldere diensten die los van elkaar werken — of samen in één eenvoudig maandplan.',
      'svc1.title': 'Websites',
      'svc1.body': 'Strakke, snelle sites die converteren, gebouwd voor lokale ondernemers. Ontworpen om er op elk scherm premium uit te zien en bezoekers om te zetten in klanten.',
      'svc1.t1': 'Maatwerkontwerp — nooit een standaardsjabloon',
      'svc1.t2': 'Laadt snel & scoort goed in Google',
      'svc1.t3': 'Gebouwd voor telefoontjes, boekingen & bezoeken',
      'svc2.title': 'Social content',
      'svc2.body': 'Maandelijkse graphics en bijschriften die je social media actief en consistent houden — zo blijf je top of mind zonder er iets voor te hoeven doen.',
      'svc2.t1': 'Graphics in jouw stijl, voor je ontworpen',
      'svc2.t2': 'Kant-en-klare bijschriften inbegrepen',
      'svc2.t3': 'Een consistente feed, elke maand weer',
      'svc3.title': 'Reels',
      'svc3.body': "Korte video's, gemonteerd uit je eigen beelden. Opvallende reels die bereik opleveren en laten zien wat jouw zaak bijzonder maakt.",
      'svc3.t1': 'Gemonteerd uit clips die je toch al filmt',
      'svc3.t2': 'Ondertiteling, muziek & tempo geregeld',
      'svc3.t3': 'Gemaakt voor bereik op Reels & TikTok',
      'services.foot': 'Vertel me over je zaak',

      'how.eyebrow': 'Hoe het werkt',
      'how.title': 'Simpel, van eerste gesprek tot livegang.',
      'how.lead': 'Geen langdradig bureauproces. Geen jargon. Gewoon drie heldere stappen en één persoon die alles regelt.',
      'step1.title': 'We praten over je zaak',
      'step1.body': 'Een kort, vrijblijvend gesprek over wat je doet, voor wie en wat je website moet opleveren. Nergens aan verbonden.',
      'step2.title': 'Ik ontwerp en bouw je site',
      'step2.body': 'Ik regel alles — ontwerp, teksten en bouw — en houd je de hele weg op de hoogte. In gewone taal zie je het stap voor stap ontstaan.',
      'step3.title': 'Je gaat live — en ik laat het groeien',
      'step3.body': "Je site gaat live en je onderhoudsplan houdt 'm snel, veilig en up-to-date — met elke maand verse social content erbij.",
      'how.note': 'Echte klantprojecten volgen binnenkort — Flowbase is een nieuwe studio, en jouw zaak kan een van de eerste zijn die hier staat.',

      'pricing.eyebrow': 'Prijzen',
      'pricing.title': 'Simpele, eerlijke prijzen. Geen verrassingen.',
      'pricing.lead': 'Vier manieren waarop ik lokale ondernemers online laat groeien — voor elk een heldere, eerlijke prijs, zonder verrassingen.',

      'unit.onetime': 'eenmalige bouw',
      'careplan': '/mnd onderhoudsplan',
      'unit.permonth': '/maand',
      'unit.permo': '/mnd',

      'presence.for': 'Informatiesite voor restaurants, kappers & kleine dienstverleners.',
      'presence.t1': "Tot 5 pagina's, op maat ontworpen",
      'presence.t2': 'Mobile-first & razendsnel',
      'presence.t3': 'Contactgegevens, openingstijden & kaart',
      'presence.t4': 'Basis-SEO zodat je vindbaar bent',
      'presence.t5': 'Hosting, back-ups & updates',
      'presence.t6': 'Geen database of logins',
      'presence.cta': 'Kies Presence',

      'growth.for': 'Site gericht op leads voor sportscholen, klinieken & aannemers.',
      'growth.t1': 'Alles uit Presence',
      'growth.t2': 'Lead- & contactformulieren',
      'growth.t3': 'Foto- & projectgalerij',
      'growth.t4': 'On-page SEO voor lokaal zoeken',
      'growth.t5': 'Google Bedrijfsprofiel ingericht',
      'growth.t6': 'Maandelijkse content-updates',
      'growth.cta': 'Kies Growth',

      'scale.for': 'Voor bedrijven die online boekingen of klantlogins nodig hebben.',
      'scale.t1': 'Alles uit Growth',
      'scale.t2': 'Online boekingssysteem, of',
      'scale.t3': 'Beveiligde klantomgeving met login',
      'scale.t4': 'Geavanceerde integraties',
      'scale.t5': 'Maatwerkfunctionaliteit',
      'scale.t6': 'Voorrang bij support',
      'scale.cta': 'Kies Scale',

      'bundles.title': 'Groeien op de automatische piloot — maandbundels',
      'bundles.lead': 'Combineer je onderhoudsplan met social content en reels voor één eenvoudige maandprijs. Doorlopend, maandelijks gefactureerd — de eenmalige bouw van de website is apart.',

      'starter.for': 'Blijf online en blijf consistent.',
      'starter.t1': 'Presence-onderhoudsplan',
      'starter.t2': '5 social posts / maand',
      'starter.t3': 'Graphics + bijschriften inbegrepen',
      'starter.cta': 'Begin met Starter',

      'bundle.badge': 'Meest gekozen',
      'growthb.for': 'De gulden middenweg voor de meeste lokale ondernemers.',
      'growthb.t1': 'Growth-onderhoudsplan',
      'growthb.t2': '10 social posts / maand',
      'growthb.t3': '2 reels / maand',
      'growthb.t4': 'Graphics + bijschriften inbegrepen',
      'growthb.cta': 'Kies Growth',

      'premium.for': 'Maximaal bereik, volledig uit handen genomen.',
      'premium.t1': 'Growth-onderhoudsplan',
      'premium.t2': '15 social posts / maand',
      'premium.t3': '4 reels / maand',
      'premium.t4': 'Graphics + bijschriften inbegrepen',
      'premium.cta': 'Kies Premium',

      'addons.title': 'Alleen content nodig?',
      'addons.lead': 'Heb je al een website? Neem losse social content of reels af.',
      'addon1.h4': 'Social posts',
      'addon1.sub': 'graphics + bijschriften',
      'addon2.h4': 'Reels',
      'addon2.sub': 'gemonteerd uit je beelden',
      'meta.5posts': '5 posts / mnd',
      'meta.10posts': '10 posts / mnd',
      'meta.15posts': '15 posts / mnd',
      'meta.2reels': '2 reels / mnd',
      'meta.4reels': '4 reels / mnd',

      'about.quote': 'Goed ontwerp zou geen luxe moeten zijn die alleen grote merken zich kunnen veroorloven.',
      'about.quotecap': 'Flowbase — Nederland',
      'about.badgeStrong': 'Studio van één',
      'about.badgeSpan': 'Je praat met de maker, niet met een salesteam',
      'about.eyebrow': 'Over Flowbase',
      'about.title': 'Premium websites voor lokale ondernemers — zonder het prijskaartje van een bureau.',
      'about.p1': 'Ik ben Flowbase begonnen omdat lokale ondernemers beter verdienen dan een bureaufactuur van €5.000 of een doe-het-zelf-sjabloon dat eruitziet als dat van ieder ander. Ik ben een zelfstandige oprichter in Nederland, wat betekent dat je rechtstreeks werkt met de persoon die je site ontwerpt en bouwt.',
      'about.p2': 'Geen opgeblazen contracten. Geen accountmanagers. Geen jargon. Gewoon écht goede websites en content voor de restaurants, kapperszaken, sportscholen, klinieken en aannemers die onze dorpen en steden draaiende houden — zorgvuldig gebouwd, eerlijk geprijsd en snel opgeleverd.',
      'about.pt1': 'Werk rechtstreeks met mij, van begin tot eind',
      'about.pt2': 'Eerlijke, transparante prijzen — geen verrassingen',
      'about.pt3': 'Lokale focus — ik begrijp jouw klanten',
      'about.cta': 'Werk met mij',

      'contact.eyebrow': 'Neem contact op',
      'contact.title': 'Laten we iets bouwen dat jouw zaak laat groeien.',
      'contact.lead': 'Vertel me kort iets over je zaak en wat je nodig hebt. Je hoort binnen één werkdag van me — vrijblijvend, geen opdringerige verkoop.',
      'contact.fname': 'Naam',
      'contact.fbusiness': 'Bedrijf',
      'contact.femail': 'E-mail',
      'contact.fmessage': 'Bericht',
      'ph.name': 'Je naam',
      'ph.business': 'Naam van je bedrijf',
      'ph.email': 'jij@bedrijf.nl',
      'ph.message': 'Waar ben je naar op zoek? Een nieuwe website, social content, of allebei?',
      'contact.send': 'Verstuur bericht',

      'footer.tag': 'Websites & content die jouw zaak laten groeien.',
      'footer.studio': 'Studio',
      'footer.getintouch': 'Neem contact op',
      'footer.rights': 'Alle rechten voorbehouden.',
      'footer.madein': 'Gemaakt in Nederland',

      'form.required': 'Dit veld is verplicht.',
      'form.email': 'Vul een geldig e-mailadres in.',
      'form.fix': 'Corrigeer de gemarkeerde velden.',
      'form.subject': 'Nieuwe aanvraag van {business} (Flowbase-website)',
      'form.bodyName': 'Naam:',
      'form.bodyBusiness': 'Bedrijf:',
      'form.bodyEmail': 'E-mail:',
      'form.sending': 'Versturen…',
      'form.success': "Bedankt, {name}! Je e-mailprogramma zou nu moeten openen met je bericht klaar om te versturen. Lukt dat niet? Mail me dan direct op {email}.",
      'form.successSent': "Bedankt, {name}! Je bericht is onderweg — je hoort binnen één werkdag van me.",
      'form.errorSend': "Er ging iets mis bij het versturen. Mail me gerust direct op {email}.",

      'nav.home': 'Home',
      'nav.work': 'Werk',
      'nav.faq': 'FAQ',
      'meta.title.home': 'Flowbase — Websites & content die je bedrijf laten groeien',
      'meta.title.services': 'Diensten — Flowbase',
      'meta.title.pricing': 'Prijzen — Flowbase',
      'meta.title.about': 'Over — Flowbase',
      'meta.title.contact': 'Contact — Flowbase',
      'meta.desc.home': 'Flowbase is een webdesign & contentstudio voor lokale ondernemers in Nederland. Strakke, snelle websites die converteren — plus doorlopende social content.',
      'meta.desc.services': 'Websites, social content en reels voor lokale ondernemers in Nederland — heldere voordelen, voor je gedaan door één studio.',
      'meta.desc.pricing': 'Simpele, eerlijke prijzen: eenmalige websitebouw vanaf €695 plus lage maandelijkse onderhoudsplannen en contentbundels. Geen verrassingen.',
      'meta.desc.about': 'Flowbase is een webdesign & contentstudio van één persoon in Nederland — premium websites voor lokale ondernemers zonder het prijskaartje van een bureau.',
      'meta.desc.contact': 'Neem contact op met Flowbase — vertel over je zaak en je hoort binnen één werkdag van me. hello.flowbase@outlook.com.',

      'step1.time': 'Gesprek van ~30 min',
      'step2.time': 'Ongeveer 2 weken',
      'step3.time': 'Live + doorlopend',

      'work.eyebrow': 'Cases',
      'work.title': 'Echte resultaten, binnenkort.',
      'work.lead': 'Echte voorbeelden volgen zodra er genoeg data is. We tonen alleen resultaten als we ze eerlijk kunnen onderbouwen — geen verzonnen cijfers.',
      'work.note': 'Wil je jouw échte project hier zien staan? Laten we het de eerste maken.',
      'work1.title': 'Binnenkort',
      'work1.body': 'Hier komt een concrete klantcase.',
      'work2.title': 'Binnenkort',
      'work2.body': 'Voorbeeldcase wordt toegevoegd zodra beschikbaar.',
      'work3.title': 'Binnenkort',
      'work3.body': 'Resultaten worden getoond zodra er genoeg echte data is.',

      'why.eyebrow': 'Waarom Flowbase',
      'why.title': 'Premium kwaliteit, zonder het prijskaartje van een bureau.',
      'why.lead': 'De gulden middenweg tussen een doe-het-zelf-sjabloon en een duur bureau — voor je gedaan, door één persoon die er om geeft.',
      'why.col0': 'Kenmerk',
      'why.colDiy': 'Zelf bouwen',
      'why.colFb': 'Flowbase',
      'why.colAgency': 'Bureau',
      'why.r1': 'Prijs',
      'why.r1diy': 'Goedkoop, kost je tijd',
      'why.r1fb': 'Eerlijk, vast vanaf €1.250',
      'why.r1agency': '€5.000+',
      'why.r2': 'Live in',
      'why.r2diy': 'Weken van je avonden',
      'why.r2fb': '~2 weken, voor je gedaan',
      'why.r2agency': '1–3 maanden',
      'why.r3': 'Maatwerkontwerp',
      'why.r3diy': 'Sjabloon',
      'why.r3fb': 'Voor jou gemaakt',
      'why.r3agency': 'Ja',
      'why.r4': 'Gebouwd om te converteren',
      'why.r4diy': 'Zelden',
      'why.r4fb': 'Altijd',
      'why.r4agency': 'Soms',
      'why.r5': 'Doorlopende content',
      'why.r5diy': 'Doe je zelf',
      'why.r5fb': 'Optioneel, voor je gedaan',
      'why.r5agency': 'Extra contract',
      'why.r6': 'Je hebt te maken met',
      'why.r6diy': 'Jezelf',
      'why.r6fb': 'De maker, rechtstreeks',
      'why.r6agency': 'Accountmanager',

      'guarantee.eyebrow': 'Mijn belofte',
      'guarantee.title': 'Geen risico. Gewoon een site waar je trots op bent.',
      'guarantee1.title': 'Vaste prijs, geen verrassingen',
      'guarantee1.body': 'De prijs die we afspreken is de prijs die je betaalt. Geen opgerekte uren, geen onverwachte facturen — nooit.',
      'guarantee2.title': 'Jij bent eigenaar van alles',
      'guarantee2.body': 'De website, de content en het domein zijn 100% van jou. Stap op wanneer je wilt — het gaat allemaal met je mee.',
      'guarantee3.title': 'Onderhoudsplan zonder vastzitten',
      'guarantee3.body': 'Maandplannen worden per maand gefactureerd. Pauzeer of stop wanneer je wilt — geen lange contracten, geen boetes.',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Vragen, eerlijk beantwoord.',
      'faq.lead': 'Zit je nog ergens mee? Mail me — ik help je graag, vrijblijvend.',
      'faq.q1': 'Hoelang duurt het tot mijn website live is?',
      'faq.a1': 'De meeste sites gaan in ongeveer twee weken live, zodra ik je content heb. Grotere projecten met boeken of logins duren wat langer — je krijgt altijd vooraf een duidelijke planning.',
      'faq.q2': 'Van wie zijn de website en de content?',
      'faq.a2': 'Van jou — helemaal. De site, de teksten, de beelden en het domein zijn van jou. Geen vastzitten en niets wordt achtergehouden.',
      'faq.q3': 'Wat zit er in het maandelijkse onderhoudsplan?',
      'faq.a3': 'Hosting, beveiliging, back-ups, software-updates en kleine contentaanpassingen — zo blijft je site snel, veilig en actueel zonder dat jij er naar omkijkt.',
      'faq.q4': 'Moet ik de teksten zelf schrijven?',
      'faq.a4': 'Nee. Ik schrijf de teksten en de structuur op basis van ons gesprek over je zaak — jij hoeft alleen te controleren en goed te keuren. Goede tekst hoort bij het werk.',
      'faq.q5': 'Kun je ook mijn social media doen?',
      'faq.a5': 'Ja — dat is de contentkant van Flowbase. Posts en reels, elke maand voor je gemaakt, los of gebundeld met je onderhoudsplan.',
      'faq.q6': 'Hoe werkt de betaling?',
      'faq.a6': 'Een aanbetaling om te starten en de rest bij oplevering voor de bouw. Maandplannen worden per maand gefactureerd en je kunt altijd opzeggen.',

      'footer.privacy': 'Privacy',
      'footer.terms': 'Voorwaarden',
      'cookie.text': 'Deze site volgt je niet — hij onthoudt alleen je taalkeuze op je eigen apparaat.',
      'cookie.link': 'Privacy',
      'cookie.ok': 'Begrepen',

      'nav.theme': 'Thema',
      'stat1.label': 'weken tot livegang',
      'stat2.label': 'werkdag reactietijd',
      'stat3.label': 'in jouw bezit',
      'stat4.label': 'diensten, één studio',

      'cta1.title': 'Klaar om er online net zo goed uit te zien als in het echt?',
      'cta1.sub': 'Vertel me over je zaak — het eerste gesprek is gratis en vrijblijvend.',
      'cta1.btn': 'Start jouw project',
      'cta2.title': 'Lees je nog? Laten we gewoon even kletsen.',
      'cta2.sub': 'Vrijblijvend — vertel wat je nodig hebt en ik zeg je eerlijk of ik kan helpen.',
      'cta2.btn': 'Neem contact op',
      'contact.book': 'Plan een gratis kennismaking van 30 min',
      'pricing.tabBuild': 'Website bouwen',
      'pricing.tabGrow': 'Maandelijks groeien',
      'form.sentTitle': 'Bericht verzonden!',
      'home.servicesCta': 'Bekijk alle diensten',
      'home.aboutCta': 'Meer over Flowbase',
      'interiors.eyebrow': 'Voor wie ik bouw',
      'interiors.title': 'Gemaakt voor de zaken die een buurt maken.',
      'interiors.cafe': 'Cafés',
      'interiors.restaurant': 'Restaurants',
      'interiors.barber': 'Kapperszaken & salons',

      'pr.bestforLabel': 'Geschikt voor',
      'pr.choose': 'Kies dit plan',
      'pr.bill.web': 'Eenmalige bouw',
      'pr.bill.brand': 'Eenmalig project',
      'pr.bill.content': 'Maandelijks abonnement — altijd opzegbaar',
      'pr.bill.webapp': 'Eenmalige bouw + verplicht maandelijks onderhoud',
      'pr.cat.web': 'Websites',
      'pr.cat.brand': 'Branding',
      'pr.cat.content': 'Social media content',
      'pr.cat.webapp': 'Web-apps',
      'tag.barbers': 'Kappers',
      'tag.clinics': 'Klinieken',

      'pr.web.title': 'Bouw een website die bezoekers omzet in klanten.',
      'pr.w1.name': 'Starter-website',
      'pr.w1.t1': "Tot 5 pagina's",
      'pr.w1.t2': 'Maatwerkontwerp',
      'pr.w1.t3': 'Mobiel responsive',
      'pr.w1.t4': 'Basis-SEO',
      'pr.w1.t5': 'Contactformulier',
      'pr.w1.t6': '2 revisierondes',
      'pr.w2.name': 'Growth-website',
      'pr.w2.t1': "Tot 10 pagina's",
      'pr.w2.t2': 'Meer maatwerksecties',
      'pr.w2.t3': 'Betere animaties',
      'pr.w2.t4': 'Blogondersteuning',
      'pr.w2.t5': 'SEO ingericht',
      'pr.w2.t6': '3 revisierondes',
      'pr.w3.name': 'Premium-website',
      'pr.w3.t1': 'Volledig maatwerkontwerp',
      'pr.w3.t2': 'Geavanceerde animaties',
      'pr.w3.t3': 'Hulp bij teksten',
      'pr.w3.t4': 'Premium-layouts',
      'pr.w3.t5': 'Voorrang bij support',
      'pr.w3.t6': '4 revisierondes',
      'pr.care.tag': 'Optionele maandelijkse extra',
      'pr.care.title': 'Maandelijkse website-onderhoudsplannen',
      'pr.care1.name': 'Basis Care',
      'pr.care1.t1': 'Hosting',
      'pr.care1.t2': 'Kleine tekstupdates',
      'pr.care2.name': 'Growth Care',
      'pr.care2.t1': 'Hosting',
      'pr.care2.t2': 'Contentwijzigingen',
      'pr.care2.t3': 'Voorrang bij support',
      'pr.care2.t4': 'Maandelijkse back-ups',
      'pr.care3.name': 'Premium Care',
      'pr.care3.t1': 'Alles hierboven',
      'pr.care3.t2': "Landingspagina's",
      'pr.care3.t3': 'Doorlopende verbeteringen',

      'pr.brand.title': 'Een professionele identiteit voor je bedrijf.',
      'pr.b1.name': 'Logopakket',
      'pr.b1.t1': 'Logo',
      'pr.b1.t2': 'PNG-bestanden',
      'pr.b1.t3': 'SVG-bestanden',
      'pr.b2.name': 'Merkidentiteit',
      'pr.b2.t1': 'Logo',
      'pr.b2.t2': 'Kleuren',
      'pr.b2.t3': 'Typografie',
      'pr.b2.t4': 'Assets voor socialprofielen',
      'pr.b3.name': 'Premium merksysteem',
      'pr.b3.t1': 'Logo',
      'pr.b3.t2': 'Kleuren',
      'pr.b3.t3': 'Typografie',
      'pr.b3.t4': 'Merkgids',
      'pr.b3.t5': 'Merkstem',
      'pr.b3.t6': 'Social assets',

      'pr.content.title': 'Content voor je bedrijf — klaar om te posten.',
      'pr.content.lead': 'Je ontvangt de content en plaatst die zelf. Geen inplannen, geen beheer — gewoon goede content, bij jou aangeleverd.',
      'pr.s.blockA': 'Maandabonnementen',
      'pr.s1.name': 'Starter Content',
      'pr.s1.t1': '3 posts',
      'pr.s1.t2': '2 reels',
      'pr.s1.for': 'Voor bedrijven die een eenvoudige maar consistente aanwezigheid willen.',
      'pr.s2.name': 'Growth Content',
      'pr.s2.t1': '5 posts',
      'pr.s2.t2': '3 reels',
      'pr.s2.for': 'Voor bedrijven die regelmatig content en gestage groei willen.',
      'pr.s3.name': 'Premium Content',
      'pr.s3.t1': '10 posts',
      'pr.s3.t2': '4 reels',
      'pr.s3.for': 'Voor bedrijven die maximale zichtbaarheid willen.',
      'pr.sep.title': 'Los te koop',
      'pr.sep.sub': 'Eenmalig — geen abonnement',
      'pr.sep.note': 'Elke post bevat afbeelding en bijschrift, klaar om te uploaden.',
      'pr.sep.posts': 'Posts',
      'pr.sep.reels': 'Reels',
      'pr.sep.p3': '3 posts',
      'pr.sep.p5': '5 posts',
      'pr.sep.p10': '10 posts',
      'pr.sep.r1': '1 reel',
      'pr.sep.r2': '2 reels',
      'pr.sep.r4': '4 reels',

      'pr.webapp.title': 'Maatwerksoftware gebouwd rond jouw bedrijf.',
      'pr.webapp.lead': 'Kleine, gerichte web-apps — geen logge bedrijfssystemen. Snel gebouwd, eerlijk geprijsd, maandelijks onderhouden.',
      'pr.wa.label': 'Voorbeelden',
      'pr.wa.ex1': 'Boekingstool',
      'pr.wa.ex2': 'Klantportaal',
      'pr.wa.ex3': 'Eenvoudige CRM',
      'pr.wa.ex4': 'Ledensite',
      'pr.wa.ex5': 'Reserveringssysteem',
      'pr.wa.ex6': 'Intern dashboard',
      'pr.wa1.name': 'Starter App',
      'pr.wa1.t1': 'Landingspagina',
      'pr.wa1.t2': 'Gebruikerslogin en authenticatie',
      'pr.wa1.t3': 'Eenvoudig dashboard',
      'pr.wa1.t4': 'Database',
      'pr.wa1.t5': 'Mobiel responsive',
      'pr.wa2.name': 'Growth App',
      'pr.wa2.t1': 'Alles uit Starter',
      'pr.wa2.t2': 'Betalingen (Stripe / Mollie / iDEAL)',
      'pr.wa2.t3': 'Gebruikersaccounts en profielen',
      'pr.wa2.t4': 'Adminpaneel',
      'pr.wa2.t5': 'Groter, geavanceerd dashboard',
      'pr.wa2.t6': 'E-mailnotificaties',
      'pr.wa3.name': 'Max App',
      'pr.wa3.t1': 'Alles uit Growth',
      'pr.wa3.t2': 'Google-integraties (Agenda, login, enz.)',
      'pr.wa3.t3': "Integraties met derden en API's",
      'pr.wa3.t4': 'Geavanceerde functies en maatwerklogica',
      'pr.wa3.t5': 'Voorrang bij support',
      'pr.appcare.tag': 'Verplicht maandelijks plan',
      'pr.appcare.title': 'App Care',
      'pr.appcare.t1': 'Hosting',
      'pr.appcare.t2': 'Database',
      'pr.appcare.t3': 'Updates en bugfixes',
      'pr.appcare.t4': 'Uptime-monitoring',
      'pr.appcare.note': 'Alle web-apps vereisen een maandelijks plan voor hosting, database en onderhoud.',

      /* bundels */
      'pr.bun.eyebrow': 'Bundelpakketten',
      'pr.bun.title': 'Alles in één pakket.',
      'pr.bun.lead': 'Website, branding en content — met 3 maanden gratis onderhoud. Samen sterker, voordeliger geprijsd.',
      'pr.bun.was': 'Normaal',
      'pr.bun.saving': 'Je bespaart',
      'pr.bun.after': 'Vanaf maand 4:',
      'pr.bun.cta': 'Kies dit pakket',
      'pr.bun.toggle.web': 'Website',
      'pr.bun.toggle.app': 'App',
      'pr.bun.cmp.title': 'Wat zit er in elke bundel',
      'pr.bun.cmp.site': 'Website / App',
      'pr.bun.cmp.brand': 'Branding',
      'pr.bun.cmp.content': 'Content',
      'pr.bun.cmp.ai': 'AI Assistent',
      'pr.bun.cmp.care': 'Onderhoudsplan',
      'pr.bun.cmp.price': 'Prijs',
      'pr.bun.cmp.b1site': 'Starter-website',
      'pr.bun.cmp.b2site': 'Growth-website of Starter-app',
      'pr.bun.cmp.b3site': 'Max-website of Growth-app',
      'pr.bun.cmp.b1brand': 'Starter',
      'pr.bun.cmp.b2brand': 'Growth',
      'pr.bun.cmp.b3brand': 'Max',
      'pr.bun.cmp.b1con': 'Starter (3+1)',
      'pr.bun.cmp.b2con': 'Growth (5+2)',
      'pr.bun.cmp.b3con': 'Max (8+3)',
      'pr.bun.cmp.b1care': 'Basic (3mnd gratis)',
      'pr.bun.cmp.b2care': 'Professional (3mnd gratis)',
      'pr.bun.cmp.b3care': 'Premium (3mnd gratis)',
      'pr.bun.cmp.b2price': 'vanaf €2.295',
      'pr.bun.cmp.b3price': 'vanaf €3.695',
      'pr.bun1.name': 'Starter',
      'pr.bun1.tag': 'Professioneel online in één keer.',
      'pr.bun1.free': '3 maanden gratis Basic onderhoud inbegrepen',
      'pr.bun1.i1': 'Starter-website',
      'pr.bun1.i2': 'Starter-branding',
      'pr.bun1.i3': 'Starter-content (3 posts + 1 reel)',
      'pr.bun1.i4': 'Basic care — 3 maanden gratis',
      'pr.bun1.for': 'Bakker, kapper, fysiotherapeut — net beginnen, klein budget',
      'pr.bun1.after': '€29/mnd (Basic care)',
      'pr.bun2.name': 'Growth',
      'pr.bun2.tag': 'Serieuze groei met branding, content én AI.',
      'pr.bun2.free': '3 maanden gratis Professional onderhoud inbegrepen',
      'pr.bun2.iweb': 'Growth-website',
      'pr.bun2.iapp': 'Starter-app',
      'pr.bun2.i2': 'Growth-branding',
      'pr.bun2.i3': 'Growth-content (5 posts + 2 reels)',
      'pr.bun2.i4': 'AI Assistent setup + 3 maanden prepaid',
      'pr.bun2.i5': 'Professional care — 3 maanden gratis',
      'pr.bun2.for': 'Restaurant, gym, tandarts — serieuze groei',
      'pr.bun2.after': '€129/mnd (AI) + €59/mnd (care)',
      'pr.bun3.name': 'Max',
      'pr.bun3.tag': 'Alles wat Flowbase te bieden heeft.',
      'pr.bun3.free': '3 maanden gratis Premium onderhoud inbegrepen',
      'pr.bun3.iweb': 'Max-website',
      'pr.bun3.iapp': 'Growth-app',
      'pr.bun3.i2': 'Max-branding',
      'pr.bun3.i3': 'Max-content (8 posts + 3 reels)',
      'pr.bun3.i4': 'AI Assistent setup + 3 maanden prepaid',
      'pr.bun3.i5': 'Premium care — 3 maanden gratis',
      'pr.bun3.for': 'Tandartskliniek, aannemer, gym — alles in één keer',
      'pr.bun3.after': '€129/mnd (AI) + €99/mnd (care)',
      /* losse diensten */
      'pr.ind.eyebrow': 'Losse diensten',
      'pr.ind.title': 'Of kies precies wat je nodig hebt.',
      'pr.ind.lead': 'Elke dienst is ook los beschikbaar — geen bundel verplicht.',
      'pr.stab.web': 'Websites',
      'pr.stab.app': 'Apps',
      'pr.stab.brand': 'Branding',
      'pr.stab.content': 'Content',
      'pr.stab.ai': 'AI Assistent',
      /* content eenmalig */
      'pr.bill.content.once': 'Eenmalig contentpakket',
      'pr.con.p3r1': '3 posts + 1 reel',
      'pr.con.p5r2': '5 posts + 2 reels',
      'pr.con.p8r3': '8 posts + 3 reels',
      'pr.alac.title': 'À la carte',
      'pr.alac.sub': 'Eenmalig — geen abonnement',
      'pr.alac.post': 'Extra post (afbeelding + bijschrift)',
      'pr.alac.reel': 'Extra reel (korte video + bijschrift)',
      /* AI assistent */
      'pr.ai.name': 'AI Assistent',
      'pr.ai.tag': 'Je eigen AI, gebouwd voor jouw bedrijf — verbonden via Telegram of WhatsApp.',
      'pr.ai.billOnce': 'Eenmalige setup',
      'pr.ai.billMo': '+ maandelijks abonnement',
      'pr.ai.setupLabel': 'Setup',
      'pr.ai.setupUnit': 'eenmalig',
      'pr.ai.moLabel': 'Maandelijks',
      'pr.ai.t1': 'Eigen VPS',
      'pr.ai.t2': 'Telegram / WhatsApp-koppeling',
      'pr.ai.t3': '2 maatwerk-automatiseringen',
      'pr.ai.t4': 'Persistent geheugen',
      'pr.ai.t5': 'Dagelijkse / wekelijkse samenvattingen',
      'pr.ai.t6': 'E-mailsupport',
      'pr.ai.extra': 'Extra automatisering: €49 eenmalig per automatisering',
      'pr.ai.cta': 'Aan de slag',
      /* onderhoud */
      'pr.care.eyebrow': 'Maandelijks onderhoud',
      'pr.care.title': 'Houd je site snel, veilig en actueel.',
      'pr.care.web.title': 'Website-onderhoudsplannen',
      'pr.care2.name': 'Professional Care',
      'pr.care2.t2': 'Maandelijkse aanpassingen',
      'pr.care2.t3': 'Prestatiecheck',
      'pr.caren.updates': 'Updates & back-ups',
      'pr.caren.report': 'Maandrapportage',
      'pr.caren.seo': 'SEO-verbeteringen',
      /* titels */
      'pricing.title': 'Eerlijke, vaste prijzen. Geen verrassingen.',
      'pricing.lead': 'Kies een bundel en krijg alles in één keer — of stel zelf samen wat je nodig hebt.'
    }
  };

  /* rotating hero words per language (Growth → Groei) */
  var ROTATE = {
    en: ['Websites', 'Content', 'Reels', 'Growth'],
    nl: ['Websites', 'Content', 'Reels', 'Groei']
  };

  var currentLang = 'en';

  function t(key) {
    var dict = I18N[currentLang] || I18N.en;
    if (dict[key] != null) return dict[key];
    if (I18N.en[key] != null) return I18N.en[key];
    return key;
  }
  function tf(key, vars) {
    return t(key).replace(/\{(\w+)\}/g, function (_, k) {
      return (vars && vars[k] != null) ? vars[k] : '';
    });
  }

  /* ---- current year in footer ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- nav: shadow on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile menu ---- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(menu.hidden);
    });
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
  }
  // close on resize up to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) setMenu(false);
  });

  /* ---- rotating hero headline (effect 2) ---- */
  var rotateEl = document.querySelector('[data-rotate]');
  var rotateTimer = null;
  var rotateIdx = 0;
  var rotateCurrent = null;

  function makeWord(text, active) {
    var s = document.createElement('span');
    s.className = 'rotate__word' + (active ? ' is-active' : '');
    s.textContent = text;
    return s;
  }

  function stopRotate() {
    if (rotateTimer) { clearInterval(rotateTimer); rotateTimer = null; }
  }

  function startRotate() {
    if (!rotateEl) return;
    stopRotate();
    var words = ROTATE[currentLang] || ROTATE.en;
    rotateIdx = 0;
    rotateEl.innerHTML = '';
    rotateCurrent = makeWord(words[0], true);
    rotateEl.appendChild(rotateCurrent);

    // Reduced motion (or a single word): show one static word, no cycling.
    if (reduceMotion || words.length < 2) return;

    rotateTimer = setInterval(function () {
      var w = ROTATE[currentLang] || ROTATE.en;
      rotateIdx = (rotateIdx + 1) % w.length;
      var incoming = makeWord(w[rotateIdx], false);
      rotateEl.appendChild(incoming);
      // force reflow so the entry transition runs
      void incoming.offsetWidth;
      incoming.classList.add('is-active');

      var leaving = rotateCurrent;
      if (leaving) {
        leaving.classList.remove('is-active');
        leaving.classList.add('is-leaving');
        window.setTimeout(function () {
          if (leaving && leaving.parentNode) leaving.parentNode.removeChild(leaving);
        }, 600);
      }
      rotateCurrent = incoming;
    }, 2500);
  }

  // Pause the cycle when the tab is hidden (saves work; resumes on return).
  document.addEventListener('visibilitychange', function () {
    if (!rotateEl || reduceMotion) return;
    if (document.hidden) stopRotate();
    else startRotate();
  });

  /* ---- i18n: apply a language across the whole page ---- */
  function applyI18n(lang) {
    currentLang = (lang === 'nl') ? 'nl' : 'en';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    // translated tab title + meta description, per page (SEO)
    var page = document.documentElement.getAttribute('data-page') || 'home';
    var mt = t('meta.title.' + page);
    if (mt.indexOf('meta.title.') !== 0) document.title = mt;
    var metaDesc = document.querySelector('meta[name="description"]');
    var md = t('meta.desc.' + page);
    if (metaDesc && md.indexOf('meta.desc.') !== 0) metaDesc.setAttribute('content', md);

    document.querySelectorAll('.lang-switch__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === currentLang));
    });

    try { localStorage.setItem('flowbase-lang', currentLang); } catch (e) {}

    // Re-render the rotating words in the chosen language.
    startRotate();
  }

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem('flowbase-lang'); } catch (e) {}
    if (stored === 'nl' || stored === 'en') return stored;
    var langs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
    for (var i = 0; i < langs.length; i++) {
      if (String(langs[i]).toLowerCase().indexOf('nl') === 0) return 'nl';
    }
    return 'en';
  }

  document.querySelectorAll('.lang-switch__btn').forEach(function (b) {
    b.addEventListener('click', function () { applyI18n(b.getAttribute('data-lang')); });
  });

  // Set the initial language (stored choice → browser language → Dutch default).
  applyI18n(detectLang());

  /* ---- scroll reveal + staggered children (effect 3) ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!reduceMotion) {
    // Stagger siblings that share a parent (e.g. cards in a grid).
    var groups = new Map();
    revealEls.forEach(function (el) {
      var p = el.parentElement;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p).push(el);
    });
    groups.forEach(function (items) {
      if (items.length > 1) {
        items.forEach(function (el, i) {
          el.style.transitionDelay = (Math.min(i, 6) * 70) + 'ms';
        });
      }
    });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- contact form ---- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  var RECIPIENT = 'hello.flowbase@outlook.com';

  // To make the form actually SEND (instead of opening the visitor's email app):
  //   1. Get a free access key at https://web3forms.com (enter hello.flowbase@outlook.com).
  //   2. Replace YOUR_WEB3FORMS_ACCESS_KEY below with that key.
  // Until a real key is set, the form gracefully falls back to a pre-filled mailto: link.
  var WEB3FORMS_KEY = '0ae5f285-483e-4686-baf6-d5b85c1e1de2';

  function showError(field, msg) {
    var wrap = field.closest('.field');
    if (wrap) wrap.classList.add('has-error');
    var err = form.querySelector('.field__error[data-for="' + field.name + '"]');
    if (err) err.textContent = msg;
  }
  function clearError(field) {
    var wrap = field.closest('.field');
    if (wrap) wrap.classList.remove('has-error');
    var err = form.querySelector('.field__error[data-for="' + field.name + '"]');
    if (err) err.textContent = '';
  }

  if (form) {
    // clear errors as the user types
    form.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () { clearError(el); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name;
      var business = form.business;
      var email = form.email;
      var message = form.message;
      var ok = true;

      [name, business, email, message].forEach(function (f) {
        if (!f.value.trim()) { showError(f, t('form.required')); ok = false; }
      });
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() && !emailRe.test(email.value.trim())) {
        showError(email, t('form.email')); ok = false;
      }
      if (!ok) {
        if (note) { note.textContent = t('form.fix'); note.classList.remove('is-success'); }
        return;
      }

      // spam honeypot — bots tick the hidden box; real visitors never see it
      if (form.botcheck && form.botcheck.checked) { form.reset(); return; }

      var firstName = escapeHtml(name.value.trim().split(' ')[0]);
      var emailLink = '<a href="mailto:' + RECIPIENT + '">' + RECIPIENT + '</a>';
      var subject = tf('form.subject', { business: business.value.trim() });
      var keySet = WEB3FORMS_KEY && WEB3FORMS_KEY.indexOf('YOUR_') !== 0;

      // Fallback (no access key yet): open the visitor's email client, pre-filled.
      if (!keySet) {
        var body =
          t('form.bodyName') + ' ' + name.value.trim() + '\n' +
          t('form.bodyBusiness') + ' ' + business.value.trim() + '\n' +
          t('form.bodyEmail') + ' ' + email.value.trim() + '\n\n' +
          message.value.trim() + '\n';
        window.location.href = 'mailto:' + RECIPIENT +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
        if (note) {
          note.innerHTML = tf('form.success', { name: firstName, email: emailLink });
          note.classList.add('is-success');
        }
        form.reset();
        return;
      }

      // Real submission via Web3Forms.
      var btn = form.querySelector('button[type="submit"]');
      var btnLabel = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = t('form.sending'); }
      if (note) { note.textContent = ''; note.classList.remove('is-success'); }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: subject,
          from_name: name.value.trim(),
          name: name.value.trim(),
          business: business.value.trim(),
          email: email.value.trim(),
          message: message.value.trim()
        })
      })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data || !data.success) throw new Error('send failed');
        form.reset();
        var sentPanel = document.getElementById('formSent');
        var sentMsg = document.getElementById('formSentMsg');
        if (sentPanel && sentMsg) {
          sentMsg.textContent = tf('form.successSent', { name: firstName });
          form.classList.add('is-sent');
          sentPanel.hidden = false;
        } else if (note) {
          note.innerHTML = tf('form.successSent', { name: firstName });
          note.classList.add('is-success');
        }
      })
      .catch(function () {
        if (note) {
          note.innerHTML = tf('form.errorSend', { email: emailLink });
          note.classList.remove('is-success');
        }
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
      });
    });
  }

  /* ---- scrollspy: highlight the current section in the navbar ---- */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    var spySections = [];
    spyLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) { linkFor[id] = a; spySections.push(sec); }
    });
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spyLinks.forEach(function (l) { l.classList.remove('is-active'); });
          if (linkFor[entry.target.id]) linkFor[entry.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    spySections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---- back to top ---- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.hidden = false;
    var onTopScroll = function () { toTop.classList.toggle('is-visible', window.scrollY > 600); };
    onTopScroll();
    window.addEventListener('scroll', onTopScroll, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---- bundle toggle (Website / App) ---- */
  document.querySelectorAll('[data-bun]').forEach(function (card) {
    card.querySelectorAll('.bun-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var choice = btn.dataset.choice;
        card.dataset.choice = choice;
        card.querySelectorAll('.bun-toggle__btn').forEach(function (b) {
          b.classList.toggle('is-active', b.dataset.choice === choice);
        });
        card.querySelectorAll('.js-bun-was, .js-bun-now, .js-bun-save').forEach(function (el) {
          if (el.dataset[choice]) el.textContent = el.dataset[choice];
        });
        card.querySelectorAll('.js-web').forEach(function (el) {
          el.hidden = choice !== 'web';
        });
        card.querySelectorAll('.js-app').forEach(function (el) {
          el.hidden = choice !== 'app';
        });
      });
    });
  });

  /* ---- service tabs ---- */
  var stabs = document.querySelectorAll('.stab');
  var stabPanels = document.querySelectorAll('.stabs__panel');
  stabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      stabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      stabPanels.forEach(function (p) { p.classList.remove('is-active'); p.hidden = true; });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) { panel.classList.add('is-active'); panel.hidden = false; }
    });
  });

  /* ---- privacy / cookie note ---- */
  var cookieNote = document.getElementById('cookieNote');
  if (cookieNote) {
    var COOKIE_KEY = 'flowbase-privacy-ack';
    var acked = false;
    try { acked = localStorage.getItem(COOKIE_KEY) === '1'; } catch (e) {}
    if (!acked) {
      cookieNote.hidden = false;
      document.body.classList.add('has-cookie');
      requestAnimationFrame(function () { cookieNote.classList.add('is-shown'); });
      var cookieOk = document.getElementById('cookieOk');
      if (cookieOk) {
        cookieOk.addEventListener('click', function () {
          cookieNote.classList.remove('is-shown');
          document.body.classList.remove('has-cookie');
          try { localStorage.setItem(COOKIE_KEY, '1'); } catch (e) {}
          window.setTimeout(function () { cookieNote.hidden = true; }, 450);
        });
      }
    }
  }

  /* ---- dark / light theme ---- */
  var THEME_KEY = 'flowbase-theme';
  var themeToggles = Array.prototype.slice.call(document.querySelectorAll('.theme-toggle'));
  function currentTheme() { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function syncThemeButtons() {
    var dark = currentTheme() === 'dark';
    themeToggles.forEach(function (b) { b.setAttribute('aria-pressed', String(dark)); });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#131210' : '#F7F5F1');
  }
  function setTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    syncThemeButtons();
  }
  syncThemeButtons();
  themeToggles.forEach(function (b) {
    b.addEventListener('click', function () {
      if (!reduceMotion) {
        document.documentElement.classList.add('theme-anim');
        window.setTimeout(function () { document.documentElement.classList.remove('theme-anim'); }, 400);
      }
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  /* ---- animated stat counters ---- */
  var statNums = Array.prototype.slice.call(document.querySelectorAll('.stat__num[data-count]'));
  if (statNums.length) {
    var runCounter = function (el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
      var dur = 1200, start = null;
      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = prefix + target + suffix;
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      var statObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { runCounter(entry.target); statObs.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      statNums.forEach(function (el) { statObs.observe(el); });
    } else {
      statNums.forEach(runCounter);
    }
  }

  /* ---- WhatsApp + booking links ----
     Set these two to make the WhatsApp buttons and the "Book a call" button appear:
       WHATSAPP_NUMBER — country code + number, digits only, e.g. '31612345678'
       BOOKING_URL     — your Cal.com / Calendly link, e.g. 'https://cal.com/flowbase/intro' */
  var WHATSAPP_NUMBER = '';
  var BOOKING_URL = '';
  if (WHATSAPP_NUMBER) {
    var waHref = 'https://wa.me/' + WHATSAPP_NUMBER;
    ['waFloat', 'waBar'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = waHref; el.hidden = false; }
    });
  }
  var bookCall = document.getElementById('bookCall');
  if (bookCall && BOOKING_URL) { bookCall.href = BOOKING_URL; bookCall.hidden = false; }

  /* ---- sticky mobile CTA bar (shows after scrolling on phones) ---- */
  var mobileBar = document.getElementById('mobileBar');
  if (mobileBar) {
    var onBarScroll = function () {
      var show = window.scrollY > 500;
      mobileBar.classList.toggle('is-visible', show);
      document.body.classList.toggle('has-mobilebar', show);
    };
    onBarScroll();
    window.addEventListener('scroll', onBarScroll, { passive: true });
  }

  /* ---- subtle hero parallax (home only) ---- */
  var heroAccent = document.querySelector('.hero__accent');
  if (heroAccent && !reduceMotion) {
    var parallaxPending = false;
    var runParallax = function () {
      parallaxPending = false;
      var y = window.scrollY;
      if (y <= 1100) heroAccent.style.transform = 'translateY(' + (y * 0.2) + 'px)';
    };
    window.addEventListener('scroll', function () {
      if (!parallaxPending) { parallaxPending = true; requestAnimationFrame(runParallax); }
    }, { passive: true });
  }

  /* ---- pricing tabs (Build a site / Grow monthly) ---- */
  var ptabs = Array.prototype.slice.call(document.querySelectorAll('.ptabs__tab'));
  if (ptabs.length) {
    var ppanels = Array.prototype.slice.call(document.querySelectorAll('.ptabs__panel'));
    var selectTab = function (tab) {
      ptabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      var target = tab.getAttribute('aria-controls');
      ppanels.forEach(function (p) {
        var show = p.id === target;
        p.hidden = !show;
        // a panel that starts hidden never triggers the reveal observer, so reveal it now
        if (show) p.querySelectorAll('.reveal').forEach(function (el) { el.style.transitionDelay = '0ms'; el.classList.add('is-visible'); });
      });
    };
    ptabs.forEach(function (tab) { tab.addEventListener('click', function () { selectTab(tab); }); });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
