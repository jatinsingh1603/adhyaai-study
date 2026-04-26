# Product Requirements Document: adhyaAI

## 1. The Real Problem

Marginalised students (Class 8–12 + pre-college) in India are failed by three systems simultaneously:

- **No guidance system at home** — no elder sibling, no mentor, no one who has "been there." They don't know what careers exist, what the path looks like, or how hard it actually is.
- **Unaffordable tuition** — private coaching is out of reach. Government school teachers are often underprepared.
- **Broken study material** — NCERT language is too heavy. No real-life context. Students lose interest before they understand anything.
- **No AI awareness** — they don't know tools exist that could help them.
- **Low-resource devices + low bandwidth** — video-heavy platforms simply don't work for them.

---

## 2. The Vision

Be the **mentor they never had.**

A platform that first tells a student *what's possible*, then *shows them the path*, then *teaches them the topics*, then *helps them build toward their goal* — all in simple language, on a low-end Android phone, with minimal data.

---

## 3. Target Users

- Class 8–12 government/low-income school students
- Pre-college students seeking career guidance
- First-generation learners with no guidance network at home
- Students in English and regional language mediums

---

## 4. Core Product — Three Pillars

### Pillar 1: Guidance (The Mentor)

**Goal:** Student comes in lost. They leave knowing their path.

**How it works:**
- Student picks a dream/goal from a list (Doctor, Engineer, IAS, Designer, Coder, etc.)
- AI shows them: what the career looks like, what the actual path is, how difficult it is honestly, what steps to take from where they are today
- Student also has the option to describe their interest in their own words and AI maps it to a career path
- Fully automated, no human in the loop
- Output is a personal roadmap — "You are in Class 10. Here is what the next 4 years should look like for you."

---

### Pillar 2: Playbooks (The Teacher)

**Goal:** Replace heavy textbook chapters with digestible, interesting topic-level guides.

**What a Playbook is:**
- Written by AI, edited for simplicity
- One topic at a time (not a full chapter — e.g., "Photosynthesis" not "Chapter 6: Plant Biology")
- Structure of every playbook:
  - What is this in simple words (informal definition)
  - What is the formal definition (for exams)
  - Real-life analogy (something they've seen or experienced)
  - Real-life example
  - How this is asked in board exams
  - PYQ (Previous Year Questions) — most likely to come
  - Quick 3-question check at the end

**Why this works for low-resource students:**
- Text-first, not video-first — works on 2G and low storage phones
- Simple English/regional language — no jargon
- Short — one topic in 5–8 minutes of reading
- Interesting — starts with something they already know

---

### Pillar 3: Skill Building (The Builder)

**Goal:** After guidance, help them actually start.

- Based on their goal/roadmap, suggest specific skills to build
- Suggest free platforms (YouTube channels, free courses, apps)
- Curate the best free resource per skill — they don't have to search
- "This week, do this one thing" style nudges — small, actionable steps
- Builds alongside their academic journey, not separate from it

---

## 5. AI Layer

- **Playbook generator** — takes a topic + class level + language → produces a structured playbook in simple language
- **Goal mapper** — student input → career path + honest roadmap
- **Topic Q&A** — student can ask doubts on any playbook topic, AI answers in simple language
- **Exam intelligence** — surfaces PYQs and high-frequency board exam questions per topic

---

## 6. Technical Decisions for MVP

| Constraint | Decision |
|---|---|
| Low bandwidth | Text-first UI, no autoplay video, images optional |
| Low-end Android | Lightweight app, under 20MB install size |
| Low literacy in English | English UI at launch, regional language toggle |
| No account/email | OTP login via mobile number only |
| Offline usage | Playbooks downloadable for offline reading |

---

## 7. Onboarding Flow (MVP)

1. Enter phone number → OTP
2. Enter name, class, medium (English/Regional)
3. "What do you want to become?" → pick dream or type it
4. AI generates their personal roadmap
5. Land on Home: Your Roadmap + Recommended Playbooks for your class

---

## 8. Out of Scope for MVP

- Hard copy / printed playbooks (Phase 2)
- Podcast per topic via NotebookLM API (Phase 2)
- Live mentorship or human experts
- Parent dashboard
- Gamification

---

## 9. MVP Build Order

1. Onboarding + OTP auth
2. Goal picker + AI roadmap generator
3. Playbook engine (AI generates, stores, serves by topic + class)
4. Playbook reader (offline capable, text-first)
5. PYQ + exam question section per topic
6. Skill builder + resource suggestions
7. Topic Q&A (AI doubt solving)

---

## 10. Success Metrics for MVP

- Student completes onboarding and gets a roadmap → **target 80% completion rate**
- Student reads at least 1 full playbook in first session → **target 60%**
- Student returns within 7 days → **target 40% D7 retention**
- Average playbook read time > 4 minutes (signal they're actually reading)
- Doubt Q&A satisfaction > 65%

---

## 11. What Makes This Different

Most EdTech serves students who already have direction. This serves the student who doesn't even know what's possible. The guidance pillar is the moat — no one else is being an honest mentor to a Class 9 kid in a village who wants to "do something in computers" but has no idea what that means or where to start.
