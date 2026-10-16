import { ListeningPassage } from './types';

export const LISTENING_PASSAGES: ListeningPassage[] = [
  // 1: Library Conversation
  {
    id: 'lp1',
    title: 'Library Overdue Book & Research Assistance',
    type: 'conversation',
    scenario: 'Percakapan antara seorang mahasiswa dan petugas perpustakaan universitas mengenai pengembalian buku dan lokasi rak buku biologi laut.',
    difficulty: 'Easy',
    text: `Student: Hi, I need to return this book, but I think it is two days overdue. Librarian: That's quite alright. The overdue fine is fifty cents per day, so you currently owe one dollar. Student: Thanks, here is a dollar bill. Also, could you tell me where I can find reference books on marine biology? Librarian: Those are shelved on the second floor in the Science wing, right next to the quiet study rooms. If you need older journals from before 2010, you can request them at the archival desk on the ground floor.`,
    qs: [
      {
        id: 'lq1_1',
        q: 'How much does the student owe in library fines?',
        o: ['Fifty cents', 'One dollar', 'Two dollars', 'Five dollars'],
        a: 1,
        e: 'Denda keterlambatan adalah 50 sen per hari selama 2 hari = satu dollar ($1.00).'
      },
      {
        id: 'lq1_2',
        q: 'Where are the marine biology books located?',
        o: ['On the ground floor', 'On the second floor in the Science wing', 'In the archival basement', 'Near the entrance'],
        a: 1,
        e: 'Petugas perpustakaan menyebutkan buku biologi laut berada di lantai 2 sayap sains: "on the second floor in the Science wing".'
      },
      {
        id: 'lq1_3',
        q: 'Where can the student find journals published before 2010?',
        o: ['Online database only', 'At the archival desk on the ground floor', 'In the study room', 'At the campus bookstore'],
        a: 1,
        e: 'Untuk jurnal sebelum 2010 dapat diminta di meja arsip lantai dasar: "at the archival desk on the ground floor".'
      }
    ]
  },
  // 2: Biology Lecture: Photosynthesis
  {
    id: 'lp2',
    title: 'Biology Lecture: Photosynthesis and Chloroplasts',
    type: 'lecture',
    scenario: 'Kuliah pengantar biologi mengenai mekanisme fotosintesis dan peran kloroplas pada daun tumbuhan hijau.',
    difficulty: 'Easy',
    text: `Good morning everyone. Today we will examine photosynthesis. Plants absorb solar energy, water from soil, and carbon dioxide from the surrounding air to synthesize glucose and release oxygen. This biochemical conversion occurs principally in the palisade mesophyll cells of green leaves, within specialized organelles called chloroplasts. Inside chloroplasts, green chlorophyll pigments capture light photons to drive the light-dependent reactions, splitting water molecules. Without continuous photosynthesis, oxygen levels in our atmosphere would steadily decline, making complex aerobic animal life unsustainable.`,
    qs: [
      {
        id: 'lq2_1',
        q: 'Where does photosynthesis mainly occur inside plant cells?',
        o: ['In the cell wall', 'In the chloroplasts', 'In the root hairs', 'In the seed coat'],
        a: 1,
        e: 'Fotosintesis terjadi terutama di organel kloroplas: "within specialized organelles called chloroplasts".'
      },
      {
        id: 'lq2_2',
        q: 'What byproduct do plants release into the atmosphere during photosynthesis?',
        o: ['Nitrogen gas', 'Oxygen', 'Methane', 'Carbon monoxide'],
        a: 1,
        e: 'Tumbuhan mensintesis glukosa dan melepaskan oksigen ("release oxygen").'
      },
      {
        id: 'lq2_3',
        q: 'What is the function of chlorophyll pigments mentioned by the lecturer?',
        o: ['To store starch for winter', 'To capture light photons to split water', 'To repel insects', 'To absorb soil minerals'],
        a: 1,
        e: 'Klorofil menangkap foton cahaya untuk memecah molekul air: "capture light photons to drive the light-dependent reactions, splitting water molecules".'
      }
    ]
  },
  // 3: Campus Announcement
  {
    id: 'lp3',
    title: 'Campus Announcement: Course Registration Extension',
    type: 'conversation',
    scenario: 'Pengumuman resmi dari bagian registrasi akademik kampus mengenai perpanjangan batas akhir pendaftaran kelas semester genap.',
    difficulty: 'Easy',
    text: `Attention all undergraduate students. The official registration deadline for spring semester courses has been extended from this Friday to next Wednesday at five in the afternoon. Students who have not yet finalized their course selections must visit the registrar's office with their physical student ID cards. Any student seeking late enrollment after Wednesday will be subject to a twenty-five dollar late administrative fee. The registrar's office remains open from nine in the morning until four in the afternoon on weekdays.`,
    qs: [
      {
        id: 'lq3_1',
        q: 'What is the new deadline for course registration?',
        o: ['This Friday at noon', 'Next Wednesday at 5 PM', 'Next Friday at 4 PM', 'Monday morning'],
        a: 1,
        e: 'Batas pendaftaran diperpanjang menjadi Rabu depan pukul 5 sore: "extended from this Friday to next Wednesday at five in the afternoon".'
      },
      {
        id: 'lq3_2',
        q: 'What document must students bring to the registrar’s office?',
        o: ['A high school diploma', 'A physical student ID card', 'A tuition bank receipt', 'A signed professor note'],
        a: 1,
        e: 'Mahasiswa harus membawa kartu identitas mahasiswa fisik: "visit the registrar\'s office with their physical student ID cards".'
      },
      {
        id: 'lq3_3',
        q: 'What happens to students who register after Wednesday?',
        o: ['They will be expelled', 'They must pay a $25 late administrative fee', 'They cannot take exams', 'They must retake orientation'],
        a: 1,
        e: 'Pendaftaran setelah hari Rabu dikenakan denda administrasi $25: "subject to a twenty-five dollar late administrative fee".'
      }
    ]
  },
  // 4: Office Hours: Essay Topic
  {
    id: 'lp4',
    title: 'Professor’s Office Hours: Refining an Essay Topic',
    type: 'conversation',
    scenario: 'Mahasiswa berkonsultasi dengan profesor di ruang dosen untuk mempersempit topik esai energi terbarukan.',
    difficulty: 'Medium',
    text: `Student: Professor Lee, I am really struggling with my term paper topic. Professor: What subject have you selected so far? Student: I wanted to write about renewable energy, but after searching the library database, the literature feels overwhelming. Professor: That is because your scope is far too broad. Instead of covering all renewables globally, why don't you narrow your focus specifically to solar photovoltaic adoption in rural developing communities? Student: That sounds much more manageable. Professor: Excellent. Please bring a preliminary thesis statement and a three-point outline to my office this Thursday at two o'clock.`,
    qs: [
      {
        id: 'lq4_1',
        q: 'What is the student’s primary dilemma?',
        o: ['He failed his midterm exam', 'His chosen paper topic is too broad', 'He lost his library card', 'He cannot attend Thursday’s lecture'],
        a: 1,
        e: 'Masalah utama mahasiswa adalah topik awalnya terlalu luas sehingga literatur terasa luar biasa banyak: "your scope is far too broad".'
      },
      {
        id: 'lq4_2',
        q: 'What specific focus does the professor suggest?',
        o: ['Wind turbine engineering in Germany', 'Solar photovoltaic adoption in rural developing communities', 'Nuclear fusion safety', 'Hydroelectric dams in Canada'],
        a: 1,
        e: 'Profesor menyarankan untuk mempersempit ke adopsi PLTS di pedesaan negara berkembang: "solar photovoltaic adoption in rural developing communities".'
      },
      {
        id: 'lq4_3',
        q: 'What should the student bring to Thursday’s meeting?',
        o: ['A finalized twenty-page paper', 'A preliminary thesis statement and a three-point outline', 'A textbook chapter review', 'A letter of recommendation'],
        a: 1,
        e: 'Mahasiswa diminta membawa pernyataan tesis awal dan kerangka 3 poin: "preliminary thesis statement and a three-point outline".'
      }
    ]
  },
  // 5: Lecture: The Water Cycle
  {
    id: 'lp5',
    title: 'Hydrology Lecture: The Global Hydrological Cycle',
    type: 'lecture',
    scenario: 'Kuliah hidrologi mengenai pergerakan air secara berkesinambungan antara samudra, atmosfer, dan daratan.',
    difficulty: 'Easy',
    text: `Water moves continuously between the ocean, atmosphere, and terrestrial continents in a closed thermodynamic system known as the hydrological cycle. Solar irradiance warms the upper layer of tropical oceans, prompting evaporation. As moist air parcels ascend into the cooler troposphere, thermal expansion causes the water vapor to cool and condense around airborne aerosols, forming clouds. When droplet size exceeds cloud updraft capacity, precipitation falls as rain, sleet, or snow. A large fraction of precipitation infiltrates soil aquifers, while surface runoff flows back into stream tributaries and rivers, ultimately discharging into the ocean.`,
    qs: [
      {
        id: 'lq5_1',
        q: 'What provides the primary thermal energy driving global evaporation?',
        o: ['Geothermal ocean vents', 'Solar irradiance', 'Atmospheric friction', 'Wind turbines'],
        a: 1,
        e: 'Radiasi matahari adalah pendorong utama evaporasi: "Solar irradiance warms the upper layer of tropical oceans".'
      },
      {
        id: 'lq5_2',
        q: 'What causes water vapor to condense into visible clouds?',
        o: ['Rising temperatures near the ground', 'Cooling as warm moist air ascends into the troposphere', 'Absorbing chemical fertilizers', 'Direct contact with ocean salt'],
        a: 1,
        e: 'Uap air mengembun karena pendinginan saat udara lembap naik: "cooling as warm moist air ascends into the troposphere".'
      },
      {
        id: 'lq5_3',
        q: 'What happens to precipitation that does not evaporate or become surface runoff?',
        o: ['It transforms into magma', 'It infiltrates into soil aquifers', 'It escapes into outer space', 'It solidifies into granite'],
        a: 1,
        e: 'Sebagian air meresap ke dalam akuifer air tanah: "infiltrates soil aquifers".'
      }
    ]
  },
  // 6: Dormitory Notice
  {
    id: 'lp6',
    title: 'Residential Housing Notice: Plumbing Repairs',
    type: 'conversation',
    scenario: 'Pengumuman pengelola asrama mengenai pemadaman air sementara untuk perbaikan pipa pipa gedung B.',
    difficulty: 'Easy',
    text: `Residents of West Campus Building B, please take note of an important maintenance advisory. The main municipal water supply to Building B will be shut off tomorrow from nine o’clock in the morning until one o'clock in the afternoon for emergency pipe joint replacements. During this four-hour outage, all restrooms, showers, and kitchen sinks in Building B will be non-operational. We strongly encourage residents to fill clean water bottles this evening. Please note that the communal laundry room in Building A will remain open and unaffected during this maintenance period.`,
    qs: [
      {
        id: 'lq6_1',
        q: 'Why will the water supply be suspended in Building B?',
        o: ['Routine fire sprinkler testing', 'Emergency pipe joint replacements', 'Installation of solar panels', 'Painting of bathroom walls'],
        a: 1,
        e: 'Pemadaman air dilakukan untuk penggantian sambungan pipa darurat: "for emergency pipe joint replacements".'
      },
      {
        id: 'lq6_2',
        q: 'How long will the water outage last?',
        o: ['One hour', 'Four hours (9 AM to 1 PM)', 'All weekend', 'Twenty-four hours'],
        a: 1,
        e: 'Pemadaman berlangsung dari pukul 9 pagi hingga 1 siang (selama 4 jam).'
      },
      {
        id: 'lq6_3',
        q: 'Where can students do laundry while water is turned off?',
        o: ['In the basement of Building B', 'In the communal laundry room in Building A', 'At the local commercial laundromat', 'Laundry is prohibited until next week'],
        a: 1,
        e: 'Ruang cuci di Gedung A tetap buka dan tidak terpengaruh: "communal laundry room in Building A will remain open and unaffected".'
      }
    ]
  },
  // 7: Academic Advising: Changing Majors
  {
    id: 'lp7',
    title: 'Academic Advising: Transferring into Computer Science',
    type: 'conversation',
    scenario: 'Konsultasi seorang mahasiswa jurusan teknik elektro yang ingin pindah haluan ke ilmu komputer.',
    difficulty: 'Medium',
    text: `Advisor: Hello David, please have a seat. What brings you to the academic advising center today? Student: Well, I am currently a sophomore majoring in Electrical Engineering, but after completing my introductory data structures class, I realized my real passion is software engineering and machine learning. I want to transfer into Computer Science. Advisor: That is quite a common transition. Both majors share foundational calculus and physics requirements, so almost all of your credits will transfer seamlessly. However, the Computer Science department requires a minimum cumulative GPA of 3.2 in prerequisite mathematics courses, and you must submit your petition before October fifteenth. Student: My current math GPA is 3.5, so that won't be a problem!`,
    qs: [
      {
        id: 'lq7_1',
        q: 'Why does David want to change his major?',
        o: ['He is failing his electrical engineering classes', 'He discovered a strong passion for software engineering and machine learning', 'His advisor recommended a simpler major', 'His scholarship requires a computer science degree'],
        a: 1,
        e: 'David menyadari minat aslinya ada pada rekayasa perangkat lunak dan machine learning setelah mengambil kelas struktur data.'
      },
      {
        id: 'lq7_2',
        q: 'What is the minimum mathematics GPA required for the transfer petition?',
        o: ['2.5', '3.0', '3.2', '3.8'],
        a: 2,
        e: 'Syarat IPK matematika minimum adalah 3.2: "minimum cumulative GPA of 3.2 in prerequisite mathematics courses".'
      },
      {
        id: 'lq7_3',
        q: 'What is the deadline for David to submit his departmental transfer petition?',
        o: ['October 15th', 'November 1st', 'End of the semester', 'Next Monday'],
        a: 0,
        e: 'Batas akhir pengajuan petisi adalah 15 Oktober: "before October fifteenth".'
      }
    ]
  },
  // 8: Lecture: Plate Tectonics and Subduction
  {
    id: 'lp8',
    title: 'Geology Lecture: Subduction Zones and Volcanic Arcs',
    type: 'lecture',
    scenario: 'Dosen geologi menjelaskan dinamika batas lempeng konvergen di mana lempeng samudra menunjam ke bawah lempeng benua.',
    difficulty: 'Medium',
    text: `Class, let's explore convergent plate boundaries, specifically subduction zones. When dense, cold oceanic lithosphere collides with relatively buoyant continental crust, the oceanic slab is forced downward into the asthenosphere at a steep angle. As this hydrated oceanic crust descends to depths between one hundred and two hundred kilometers, escalating temperatures and intense pressures dehydrate hydrous minerals, releasing trapped water into the overlying mantle wedge. This volatile flux lowers the melting point of mantle peridotite in a process called flux melting. The generated magma is less dense than the surrounding rock, ascending buoyantly toward the crust and erupting to form explosive volcanic island arcs or continental mountain chains like the Andes.`,
    qs: [
      {
        id: 'lq8_1',
        q: 'Why does the oceanic crust subduct beneath the continental crust?',
        o: ['Because continental crust is much colder', 'Because oceanic lithosphere is denser than buoyant continental crust', 'Because of ocean currents pushing it down', 'Because of magnetic pull from the mantle'],
        a: 1,
        e: 'Lempeng samudra menunjam karena memiliki massa jenis yang lebih padat (denser) daripada kerak benua.'
      },
      {
        id: 'lq8_2',
        q: 'What triggers flux melting in the mantle wedge above the descending slab?',
        o: ['Extreme friction alone', 'The release of trapped water from dehydrating minerals', 'Direct contact with liquid iron from the core', 'Exposure to solar cosmic rays'],
        a: 1,
        e: 'Peleburan fluks (flux melting) dipicu oleh pelepasan air dari mineral yang terdehidrasi: "releasing trapped water into the overlying mantle wedge".'
      },
      {
        id: 'lq8_3',
        q: 'What geographic feature is formed when this rising magma reaches the surface?',
        o: ['Deep rift valleys', 'Mid-ocean divergent spreading ridges', 'Volcanic arcs and mountain chains like the Andes', 'Flat desert sand dunes'],
        a: 2,
        e: 'Magma yang naik membentuk busur gunung berapi dan pegunungan seperti Andes: "volcanic island arcs or continental mountain chains like the Andes".'
      }
    ]
  },
  // 9: Campus Bookstore: Textbook Availability
  {
    id: 'lp9',
    title: 'Campus Bookstore: Textbook Rental & Digital Codes',
    type: 'conversation',
    scenario: 'Mahasiswa menanyakan ketersediaan buku teks kimia organik dan opsi sewa atau kode akses digital.',
    difficulty: 'Easy',
    text: `Student: Excuse me, I'm looking for the required textbook for Chemistry 201, Organic Chemistry Eighth Edition. Clerk: Let me look that up in our inventory system. Yes, we currently have three options. You can purchase a brand new hardcover for one hundred and eighty dollars, buy a pre-owned used copy for ninety dollars, or rent a digital e-book version for forty-five dollars for the duration of the semester. Student: Does the digital rental include the online homework access code? Clerk: Yes, all our digital semester rentals include the mandatory WileyPLUS access portal key.`,
    qs: [
      {
        id: 'lq9_1',
        q: 'What course does the student need a textbook for?',
        o: ['Introductory Biology', 'Chemistry 201 (Organic Chemistry)', 'Physics 101', 'Calculus II'],
        a: 1,
        e: 'Mahasiswa mencari buku untuk mata kuliah Chemistry 201, Organic Chemistry.'
      },
      {
        id: 'lq9_2',
        q: 'How much does a pre-owned used copy of the textbook cost?',
        o: ['$45', '$90', '$180', '$200'],
        a: 1,
        e: 'Buku bekas (pre-owned) berharga sembilan puluh dollar ($90).'
      },
      {
        id: 'lq9_3',
        q: 'What important feature is bundled with the digital semester rental?',
        o: ['Free tutoring sessions', 'The mandatory online homework access portal key', 'A scientific calculator', 'A printed lab notebook'],
        a: 1,
        e: 'Sewa digital sudah mencakup kode portal pekerjaan rumah online: "include the mandatory WileyPLUS access portal key".'
      }
    ]
  },
  // 10: Lecture: Cognitive Development in Early Childhood
  {
    id: 'lp10',
    title: 'Psychology Lecture: Piaget’s Stages of Cognitive Development',
    type: 'lecture',
    scenario: 'Dosen psikologi perkembangan memaparkan teori Jean Piaget mengenai tahap sensorimotor dan perkembangan keabadian objek (object permanence).',
    difficulty: 'Medium',
    text: `In today’s developmental psychology seminar, we must revisit Jean Piaget’s foundational stage model. Piaget argued that children actively construct mental schemas of the world through assimilation and accommodation. In the sensorimotor stage, spanning birth to approximately age two, infants explore reality through physical motor movements and sensory reflexes. A major cognitive milestone achieved around eight months is "object permanence"—the realization that physical objects continue to exist even when obscured from direct sight. Prior to acquiring object permanence, if an attractive toy is covered by a blanket, the infant acts as though the toy ceased to exist, following the rule "out of sight, out of mind."`,
    qs: [
      {
        id: 'lq10_1',
        q: 'According to Piaget, during what age range does the sensorimotor stage occur?',
        o: ['Ages seven to eleven', 'Birth to approximately age two', 'Ages twelve and older', 'Ages three to five'],
        a: 1,
        e: 'Tahap sensorimotor berlangsung dari lahir hingga usia sekitar 2 tahun: "birth to approximately age two".'
      },
      {
        id: 'lq10_2',
        q: 'What is "object permanence"?',
        o: ['The ability to draw geometric shapes', 'The understanding that objects exist even when out of view', 'The reflex to cry when hungry', 'The ability to speak two languages'],
        a: 1,
        e: 'Keabadian objek adalah pemahaman bahwa benda tetap ada meskipun tertutup dari pandangan: "objects continue to exist even when obscured from direct sight".'
      },
      {
        id: 'lq10_3',
        q: 'How does an infant behave when a toy is hidden before acquiring object permanence?',
        o: ['They immediately search under the blanket', 'They act as if the toy no longer exists', 'They ask an adult for assistance', 'They become angry and throw the blanket'],
        a: 1,
        e: 'Sebelum menguasai keabadian objek, bayi menganggap benda itu sudah tidak ada lagi: "acts as though the toy ceased to exist".'
      }
    ]
  },
  // 11: Financial Aid Office: Scholarship Requirements
  {
    id: 'lp11',
    title: 'Financial Aid Office: Merit Scholarship Renewal',
    type: 'conversation',
    scenario: 'Mahasiswa berkonsultasi mengenai persyaratan perpanjangan beasiswa prestasi akademik tahun berikutnya.',
    difficulty: 'Medium',
    text: `Student: Good afternoon. I received an automated email regarding my Presidential Merit Scholarship renewal, and I want to verify the eligibility guidelines. Counselor: Certainly, let's pull up your student account. To maintain the full tuition coverage of the Presidential Scholarship, undergraduate recipients must complete at least thirty credit hours per academic year and maintain a cumulative grade point average of 3.4 or higher. Furthermore, scholarship recipients are required to complete twenty hours of documented community service before May first. Student: I currently have a 3.7 GPA and thirty-two credits, but I haven't completed my volunteer hours yet. Counselor: You still have plenty of time. The student volunteer fair next Wednesday will feature several approved campus outreach organizations.`,
    qs: [
      {
        id: 'lq11_1',
        q: 'What is the minimum cumulative GPA required to renew the scholarship?',
        o: ['3.0', '3.4', '3.7', '4.0'],
        a: 1,
        e: 'IPK kumulatif minimum untuk perpanjangan beasiswa adalah 3.4: "cumulative grade point average of 3.4 or higher".'
      },
      {
        id: 'lq11_2',
        q: 'How many hours of community service must the student log before May 1st?',
        o: ['Ten hours', 'Twenty hours', 'Thirty hours', 'Fifty hours'],
        a: 1,
        e: 'Mahasiswa wajib menyelesaikan 20 jam pelayanan masyarakat: "twenty hours of documented community service".'
      },
      {
        id: 'lq11_3',
        q: 'What advice does the counselor offer regarding volunteer hours?',
        o: ['Pay a financial waiver fee instead', 'Attend next Wednesday’s student volunteer fair to connect with approved groups', 'Ask professors for extra credit', 'Postpone graduation by one term'],
        a: 1,
        e: 'Konselor menyarankan hadir di bursa relawan mahasiswa hari Rabu depan: "student volunteer fair next Wednesday".'
      }
    ]
  },
  // 12: Lecture: Renewable Solar Photovoltaic Cells
  {
    id: 'lp12',
    title: 'Engineering Lecture: Photovoltaic Semiconductors',
    type: 'lecture',
    scenario: 'Dosen teknik elektro memaparkan efek fotovoltaik pada semikonduktor silikon untuk menghasilkan listrik dari cahaya matahari.',
    difficulty: 'Medium',
    text: `Solar photovoltaic cells generate clean electricity through the photoelectric effect occurring at a p-n semiconductor junction. Monocrystalline solar cells are manufactured from ultra-pure silicon doped with minute traces of phosphorus on the negative n-layer and boron on the positive p-layer. When incoming solar photons strike the silicon crystal with energy exceeding the semiconductor bandgap, electrons are knocked free from covalent atomic bonds. The internal electric field established across the junction forces these free electrons to drift toward the front metal grid, generating a continuous direct current. Connecting these cells in series modules amplifies the overall voltage to power consumer appliances or feed the regional electrical grid via high-efficiency inverters.`,
    qs: [
      {
        id: 'lq12_1',
        q: 'What semiconductor element is the primary material in conventional solar cells?',
        o: ['Lead', 'Silicon', 'Copper', 'Lithium'],
        a: 1,
        e: 'Bahan semikonduktor utama sel surya adalah silikon kristal murni: "manufactured from ultra-pure silicon".'
      },
      {
        id: 'lq12_2',
        q: 'What happens when photons strike the silicon with energy exceeding the bandgap?',
        o: ['The cell melts instantly', 'Electrons are dislodged to create an electrical current', 'The silicon turns into phosphorus', 'The cell reflects all light as heat'],
        a: 1,
        e: 'Foton membebaskan elektron dari ikatan atomik untuk menghasilkan arus listrik: "electrons are knocked free... generating a continuous direct current".'
      },
      {
        id: 'lq12_3',
        q: 'What device converts the direct current (DC) produced by solar cells into alternating current (AC)?',
        o: ['A generator turbine', 'A power inverter', 'A chemical battery', 'A solar reflector'],
        a: 1,
        e: 'Inverter berfungsi mengubah arus DC sel surya menjadi AC: "feed the regional electrical grid via high-efficiency inverters".'
      }
    ]
  },
  // 13: Writing Center: Citing Academic Sources
  {
    id: 'lp13',
    title: 'Writing Center Consultation: Avoiding Plagiarism',
    type: 'conversation',
    scenario: 'Konsultasi mahasiswa di Writing Center mengenai format sitasi APA dan parafrase yang tepat dalam artikel ilmiah.',
    difficulty: 'Medium',
    text: `Student: Hi, I brought the second draft of my sociology research paper. My instructor commented that several paragraphs come dangerously close to accidental plagiarism. Tutor: Let's examine those sections together. Plagiarism doesn't just mean copying text word-for-word without quotation marks; it also occurs when you borrow another author's unique ideas or line of reasoning without proper attribution, or when you merely swap a few synonyms in a borrowed sentence. When paraphrasing, you must completely restate the original author's argument in your own distinct vocabulary and sentence structure, while still including an in-text citation like "Smith 2021". Student: I see, so even if I use completely different words, I must still cite the page number and author! Tutor: Exactly. Giving credit protects your academic integrity and allows readers to trace the original scholarship.`,
    qs: [
      {
        id: 'lq13_1',
        q: 'Why did the student visit the writing center?',
        o: ['To request an extension on his deadline', 'His instructor flagged several sections for potential accidental plagiarism', 'He needed help selecting a research topic', 'He lost his printed bibliography'],
        a: 1,
        e: 'Dosen mahasiswa tersebut menandai beberapa bagian esai yang berpotensi plagiarisme tidak disengaja.'
      },
      {
        id: 'lq13_2',
        q: 'According to the tutor, why is merely swapping a few synonyms insufficient when paraphrasing?',
        o: ['Because computer software prefers Latin words', 'Because the original author’s unique structure and idea are still borrowed without originality', 'Because professors require identical quotations', 'Because essays must be under 500 words'],
        a: 1,
        e: 'Hanya menukar beberapa sinonim tetap tergolong plagiarisme karena struktur dan ide penulis asli masih dipakai tanpa parafrase sesungguhnya.'
      },
      {
        id: 'lq13_3',
        q: 'What must always accompany a properly paraphrased concept?',
        o: ['A photo of the original book', 'An in-text academic citation crediting the source', 'A signed author permission letter', 'An audio recording of the lecture'],
        a: 1,
        e: 'Parafrase yang benar tetap harus disertai sitasi dalam teks (in-text citation): "while still including an in-text citation".'
      }
    ]
  },
  // 14: Lecture: Ancient Egyptian Pyramids and Astronomy
  {
    id: 'lp14',
    title: 'Archaeology Lecture: The Great Pyramid of Giza and Celestial Alignment',
    type: 'lecture',
    scenario: 'Kuliah arkeologi mengenai orientasi astronomis piramida Giza dan hubungan orientasi utara sejati dengan rasi bintang kutub.',
    difficulty: 'Hard',
    text: `The architectural precision of the Great Pyramid of Giza, erected around 2560 BCE during the reign of Pharaoh Khufu, continues to astound modern archaeoastronomers. The four base perimeter sides of the monument align with the cardinal compass directions with an error margin of less than one-fifteenth of a single degree. Because the magnetic compass was millennia away from invention, Old Kingdom architects utilized celestial observation. Specifically, they tracked the circular rotation of circumpolar stars—known to the Egyptians as "the Indestructibles" because they never sank below the northern horizon. By using a plumb-line sighting tool called a merkhet to bisect the rising and setting angles of dual polar stars, ancient surveyors established true astronomical north with breathtaking fidelity.`,
    qs: [
      {
        id: 'lq14_1',
        q: 'What remarkable feature of the Great Pyramid of Giza is highlighted in the lecture?',
        o: ['Its underground irrigation canal', 'Its near-perfect alignment with cardinal directions', 'Its colorful blue ceramic glazed walls', 'Its wooden internal elevator shafts'],
        a: 1,
        e: 'Keistimewaan yang disorot adalah kelurusan empat sisinya dengan empat arah mata angin dengan galat kurang dari seperlimabelas derajat.'
      },
      {
        id: 'lq14_2',
        q: 'Why did the ancient Egyptians call circumpolar stars "the Indestructibles"?',
        o: ['Because meteorites never destroyed them', 'Because they never sank beneath the northern horizon', 'Because they shone brightly during daytime', 'Because they were made of solid diamond'],
        a: 1,
        e: 'Bintang sirkumpolar disebut "The Indestructibles" karena tidak pernah tenggelam di bawah cakrawala utara: "they never sank below the northern horizon".'
      },
      {
        id: 'lq14_3',
        q: 'What tool did Egyptian surveyors utilize to sight stars and determine true north?',
        o: ['A magnetic iron compass', 'A plumb-line sighting tool called a merkhet', 'A glass telescope lens', 'A steam-powered transit'],
        a: 1,
        e: 'Juru ukur Mesir menggunakan alat unting-unting bernama "merkhet": "plumb-line sighting tool called a merkhet".'
      }
    ]
  },
  // 15: Laboratory Safety Orientation
  {
    id: 'lp15',
    title: 'Chemistry Lab Safety Orientation: Emergency Protocols',
    type: 'conversation',
    scenario: 'Pengarahan keselamatan laboratorium kimia mengenai penanganan tumpahan asam pekat dan penggunaan eyewash shower.',
    difficulty: 'Medium',
    text: `Lab Manager: Welcome to Organic Synthesis Lab 3. Before anyone touches any glassware, we must review critical laboratory safety protocols. In this room, ANSI-certified splash goggles and closed-toe leather shoes are strictly mandatory at all times. In the event of a concentrated acid or caustic chemical splash onto skin or clothing, immediately move to the safety shower located by the north exit, pull the triangular overhead chain, and flush the affected body region continuously for at least fifteen minutes while shouting for assistance. If volatile chemicals are splashed into your eyes, hold both eyelids open forcefully at the eyewash station and flush thoroughly. Never attempt to neutralize an acid splash on skin with a base, as the resulting exothermic reaction will produce severe thermal burns!`,
    qs: [
      {
        id: 'lq15_1',
        q: 'What personal protective equipment is mandatory in the synthesis lab?',
        o: ['Rubber gloves only', 'ANSI splash goggles and closed-toe leather shoes', 'Earplugs and hard hats', 'Sunscreen and sunglasses'],
        a: 1,
        e: 'Alat pelindung wajib: kacamata goggle ANSI dan sepatu kulit tertutup: "ANSI-certified splash goggles and closed-toe leather shoes".'
      },
      {
        id: 'lq15_2',
        q: 'How long must a chemical splash be rinsed at the emergency safety shower?',
        o: ['One minute', 'Five minutes', 'At least fifteen minutes', 'One hour'],
        a: 2,
        e: 'Bilas tumpahan zat kimia di safety shower minimal selama 15 menit: "flush the affected body region continuously for at least fifteen minutes".'
      },
      {
        id: 'lq15_3',
        q: 'Why does the manager warn against neutralizing an acid burn on skin with a base?',
        o: ['It causes a dangerous exothermic reaction that burns skin', 'Bases are too expensive to waste', 'It turns the skin green permanently', 'It creates toxic radioactive gas'],
        a: 0,
        e: 'Menetralisir asam pada kulit dengan basa memicu reaksi eksotermis panas yang membakar kulit lebih parah: "the resulting exothermic reaction will produce severe thermal burns".'
      }
    ]
  },
  // 16: Lecture: Animal Camouflage and Mimicry
  {
    id: 'lp16',
    title: 'Ecology Lecture: Batesian vs Müllerian Mimicry',
    type: 'lecture',
    scenario: 'Dosen ekologi menjelaskan perbedaan penting antara mimikri Batesian dan mimikri Müllerian pada serangga.',
    difficulty: 'Hard',
    text: `In evolutionary biology, mimicry describes a phenomenon where one organism evolves morphological or behavioral resemblances to another species to deceive shared predators. We distinguish primarily between Batesian and Müllerian mimicry. In Batesian mimicry, named after English naturalist Henry Walter Bates, a completely harmless, palatable organism mimics the vivid warning coloration—known as aposematism—of a toxic or unpalatable model. For instance, the harmless hoverfly mimics the yellow-and-black stripes of stinging wasps, discouraging avian predators. In contrast, in Müllerian mimicry, two or more distinct unpalatable or poisonous species evolve identical warning coloration patterns. By sharing the same visual warning signature, both unpalatable species mutually reinforce predator avoidance learning with fewer aggregate mortalities.`,
    qs: [
      {
        id: 'lq16_1',
        q: 'What distinguishes Batesian mimicry from Müllerian mimicry?',
        o: ['Batesian mimicry only occurs underwater', 'In Batesian mimicry, a harmless species mimics a dangerous model, whereas in Müllerian both species are harmful', 'Batesian mimicry involves sounds rather than colors', 'Müllerian mimicry requires plants rather than insects'],
        a: 1,
        e: 'Pada mimikri Batesian mangsa tidak berbahaya meniru spesies berbahaya, sedangkan pada Müllerian kedua spesies sama-sama berbahaya/beracun.'
      },
      {
        id: 'lq16_2',
        q: 'What example of Batesian mimicry does the professor provide?',
        o: ['A lion hunting zebras', 'A harmless hoverfly displaying the warning stripes of a stinging wasp', 'Two species of toxic monarch butterflies sharing colors', 'A chameleon changing color on leaves'],
        a: 1,
        e: 'Contoh Batesian yang diberikan: lalat hoverfly tidak berbahaya yang meniru belang kuning-hitam tawon penyengat.'
      },
      {
        id: 'lq16_3',
        q: 'What is the adaptive benefit of Müllerian mimicry for toxic species?',
        o: ['They can mate with each other', 'Predators learn the shared warning signal faster, reducing overall casualties for both species', 'It allows them to camouflage against green tree bark', 'It attracts floral nectar faster'],
        a: 1,
        e: 'Manfaatnya: predator belajar pola bahaya lebih cepat sehingga korban dari kedua spesies beracun tersebut berkurang.'
      }
    ]
  },
  // 17: Career Fair: Internship Interview Advice
  {
    id: 'lp17',
    title: 'Career Center Workshop: Acing Technical Internship Interviews',
    type: 'conversation',
    scenario: 'Konsultan karir kampus memberikan strategi menjawab pertanyaan wawancara magang menggunakan metode STAR.',
    difficulty: 'Medium',
    text: `Career Coach: Welcome to the internship interview readiness seminar. Today, we want to practice the STAR behavioral interview framework, which stands for Situation, Task, Action, and Result. When an engineering recruiter asks, "Tell me about a time you resolved an unexpected conflict in a group project," you should avoid giving vague generalizations. First, describe the specific project situation and what your designated task was. Next, clearly articulate the concrete actions that you personally took to resolve the impediment. Finally, always conclude with tangible, quantifiable results—for example, "our team submitted the CAD blueprint two days ahead of schedule, receiving an A grade." Quantifiable outcomes showcase real-world competency.`,
    qs: [
      {
        id: 'lq17_1',
        q: 'What does the acronym STAR represent in interview preparation?',
        o: ['Study, Test, Analyze, Review', 'Situation, Task, Action, Result', 'Skills, Training, Ability, Recruitment', 'Standard Technical Aptitude Rating'],
        a: 1,
        e: 'Metode STAR merupakan singkatan dari: Situation, Task, Action, Result.'
      },
      {
        id: 'lq17_2',
        q: 'According to the coach, what must candidates emphasize in the "Result" step?',
        o: ['A complaint about team members', 'Tangible, quantifiable achievements and outcomes', 'A request for a higher hourly salary', 'A description of personal hobbies'],
        a: 1,
        e: 'Kandidat harus menonjolkan capaian nyata terukur (tangible, quantifiable outcomes).'
      },
      {
        id: 'lq17_3',
        q: 'Why should candidates avoid vague general statements in interviews?',
        o: ['Because recruiters record interviews on tape', 'Because specific personal actions and outcomes demonstrate authentic competence', 'Because interviews are strictly limited to two minutes', 'Because generalizations are against campus policies'],
        a: 1,
        e: 'Tindakan konkret dan hasil terukur membuktikan kompetensi nyata di hadapan perekrut.'
      }
    ]
  },
  // 18: Lecture: The Greenhouse Effect and Atmospheric Radiation
  {
    id: 'lp18',
    title: 'Atmospheric Physics: Radiative Equilibrium and Greenhouse Forcing',
    type: 'lecture',
    scenario: 'Kuliah fisika atmosfer mengenai keseimbangan radiasi bumi dan peran gas rumah kaca dalam menyerap radiasi inframerah gelombang panjang.',
    difficulty: 'Hard',
    text: `Planetary temperature is governed fundamentally by radiative equilibrium. Our sun emits shortwave radiation, largely in the visible and ultraviolet spectrum, which penetrates Earth's atmosphere with minimal attenuation to warm the surface. The warmed terrestrial surface re-radiates this thermal energy back toward space as longwave infrared radiation. Certain atmospheric trace gases—namely water vapor, carbon dioxide, methane, and nitrous oxide—possess molecular vibrational bonds that selectively absorb these outgoing infrared wavelengths. Upon absorbing thermal photons, these greenhouse molecules re-emit infrared radiation isotropically in all directions, including back downward toward Earth's surface. Without this natural greenhouse trapping, our planet's global average surface temperature would hover around minus eighteen degrees Celsius, freezing all open water oceans solid.`,
    qs: [
      {
        id: 'lq18_1',
        q: 'What type of electromagnetic radiation does Earth’s warmed surface re-radiate back toward space?',
        o: ['Ultraviolet rays', 'Shortwave visible light', 'Longwave infrared radiation', 'Gamma ray pulses'],
        a: 2,
        e: 'Permukaan bumi memancarkan kembali energi panas berupa radiasi inframerah gelombang panjang: "longwave infrared radiation".'
      },
      {
        id: 'lq18_2',
        q: 'How do greenhouse gas molecules behave upon absorbing outgoing infrared radiation?',
        o: ['They reflect it back as ultraviolet light', 'They re-emit infrared radiation in all directions, including back toward the surface', 'They immediately dissociate into solid graphite', 'They condense into rainwater'],
        a: 1,
        e: 'Molekul gas rumah kaca memancarkan kembali radiasi inframerah ke segala arah, termasuk kembali ke permukaan bumi.'
      },
      {
        id: 'lq18_3',
        q: 'What would Earth’s global average temperature be without any natural greenhouse gases?',
        o: ['Plus fifty degrees Celsius', 'Zero degrees Celsius', 'Approximately minus eighteen degrees Celsius', 'Boiling hot'],
        a: 2,
        e: 'Tanpa efek rumah kaca alami bumi akan membeku sekitar -18°C: "around minus eighteen degrees Celsius".'
      }
    ]
  },
  // 19: Campus Health Center: Immunization Compliance
  {
    id: 'lp19',
    title: 'Student Health Center: Mandatory Immunization Records',
    type: 'conversation',
    scenario: 'Percakapan di pusat kesehatan mahasiswa mengenai verifikasi vaksin meningitis dan campak sebelum memasuki asrama.',
    difficulty: 'Easy',
    text: `Student: Hello, I received an administrative hold on my student portal preventing me from viewing my grades. Nurse: That hold is typically associated with missing immunization records. Let me check your medical chart. Yes, our state health department mandates that all residential dormitory students show documented proof of vaccination against meningococcal meningitis and two doses of the MMR vaccine for measles, mumps, and rubella. Student: I received those vaccines in high school, but my pediatrician never uploaded the electronic records. Nurse: If you have your physician fax us a signed immunization verification form, or if you upload a scanned copy of your official yellow immunization card to the portal by Friday noon, the administrative hold will lift automatically within one hour.`,
    qs: [
      {
        id: 'lq19_1',
        q: 'Why was an administrative hold placed on the student’s portal account?',
        o: ['Unpaid tuition balances', 'Missing mandatory immunization records for dormitory living', 'Library book late fines', 'Failure to attend graduation rehearsal'],
        a: 1,
        e: 'Akun ditahan karena belum melengkapi bukti vaksinasi wajib asrama: "missing immunization records".'
      },
      {
        id: 'lq19_2',
        q: 'Which two vaccines are required by the state health regulations?',
        o: ['Polio and smallpox', 'Meningococcal meningitis and MMR (measles, mumps, rubella)', 'Rabies and yellow fever', 'Tetanus only'],
        a: 1,
        e: 'Vaksin yang diwajibkan adalah meningitis meningokokus dan vaksin MMR.'
      },
      {
        id: 'lq19_3',
        q: 'How can the student remove the administrative hold before Friday noon?',
        o: ['By paying a one-hundred dollar waiver fee', 'By submitting a signed verification form or scanning their official immunization card', 'By taking a blood test at the campus laboratory', 'By withdrawing from dormitory housing'],
        a: 1,
        e: 'Mahasiswa dapat mengunggah pindaian kartu vaksin atau meminta dokter mengirim faks verifikasi resmi.'
      }
    ]
  },
  // 20: Lecture: The Roman Colosseum and Amphitheater Architecture
  {
    id: 'lp20',
    title: 'Art History Lecture: The Flavian Amphitheater and Concrete Vaulting',
    type: 'lecture',
    scenario: 'Kuliah sejarah seni klasik mengenai inovasi teknik kubah lengkung beton Romawi dalam pembangunan Colosseum.',
    difficulty: 'Medium',
    text: `The Colosseum, commissioned by Emperor Vespasian around 72 CE and inaugurated under Titus in 80 CE, represents the pinnacle of Roman monumental engineering. Unlike Greek theaters, which were carved directly into natural sloping hillsides for acoustic and structural support, Roman amphitheaters were completely freestanding circular structures. This architectural feat was made possible through the mastery of the barrel vault, the groin vault, and hydraulic pozzolana concrete. The colossal facade featured three tiers of eighty arcaded arches framed by superimposed classical orders—sturdy Tuscan Doric columns on the ground level, graceful Ionic on the second, and ornate Corinthian on the third. The eighty numbered arched entrances allowed fifty thousand spectators to enter, find their assigned numbered seating, and evacuate the monumental arena in less than fifteen minutes.`,
    qs: [
      {
        id: 'lq20_1',
        q: 'How did Roman amphitheaters differ fundamentally from earlier Greek theaters?',
        o: ['Greek theaters were built exclusively of timber', 'Roman amphitheaters were completely freestanding structures, whereas Greek theaters were carved into natural hillsides', 'Roman arenas held no athletic competitions', 'Greek theaters had no seats for spectators'],
        a: 1,
        e: 'Teater Yunani dipahat pada lereng bukit alami, sedangkan amfiteater Romawi berdiri bebas mandiri (freestanding).'
      },
      {
        id: 'lq20_2',
        q: 'What architectural orders appear on the ground and second tiers of the Colosseum’s facade?',
        o: ['Corinthian on the ground and Doric on the second', 'Tuscan Doric on the ground level and Ionic on the second tier', 'Modern gothic spires', 'Byzantine mosaics'],
        a: 1,
        e: 'Tingkat dasar menggunakan gaya Tuscan Doric dan tingkat kedua menggunakan gaya Ionic.'
      },
      {
        id: 'lq20_3',
        q: 'What civic safety achievement did the eighty numbered arches facilitate?',
        o: ['They allowed wild lions to escape easily', 'They allowed fifty thousand spectators to evacuate the arena in under fifteen minutes', 'They acted as water drains during river floods', 'They provided structural housing for royal guards'],
        a: 1,
        e: 'Delapan puluh lengkungan bernomor memungkinkan 50.000 penonton mengevakuasi arena dalam waktu kurang dari 15 menit.'
      }
    ]
  },
  // 21: Campus Transportation: Commuter Shuttle Schedule
  {
    id: 'lp21',
    title: 'Campus Transit Office: Express Shuttle Changes',
    type: 'conversation',
    scenario: 'Percakapan mahasiswa komuter dengan koordinator transportasi kampus mengenai perubahan rute bus ekspres.',
    difficulty: 'Easy',
    text: `Student: Hi, I usually take the North Lot Express bus to the science complex, but none arrived this morning. Coordinator: That’s because the university began repaving North Boulevard yesterday. The Blue Express route has been temporarily rerouted along University Avenue. Instead of departing every ten minutes from the north shelter, shuttles will run every fifteen minutes from the west stadium parking plaza until Friday afternoon. Student: Will the bus still stop directly in front of the chemistry laboratory? Coordinator: Yes, the drops at the chemistry building and the central engineering quad remain unchanged.`,
    qs: [
      {
        id: 'lq21_1',
        q: 'Why was the North Lot Express shuttle rerouted?',
        o: ['Because of severe winter snowstorms', 'Because repaving work began along North Boulevard', 'Because shuttle drivers are on strike', 'Because the chemistry building was closed'],
        a: 1,
        e: 'Rute dialihkan karena ada pengaspalan jalan di North Boulevard: "university began repaving North Boulevard yesterday".'
      },
      {
        id: 'lq21_2',
        q: 'What is the new departure interval for the shuttles from the west stadium?',
        o: ['Every five minutes', 'Every ten minutes', 'Every fifteen minutes', 'Once every hour'],
        a: 2,
        e: 'Bus berangkat setiap 15 menit dari plaza parkir stadion barat: "run every fifteen minutes".'
      },
      {
        id: 'lq21_3',
        q: 'Does the shuttle still serve the chemistry building?',
        o: ['No, that stop was cancelled permanently', 'Yes, that drop-off point remains unchanged', 'Only on weekends', 'Only for faculty members'],
        a: 1,
        e: 'Pemberhentian di gedung kimia tetap berjalan seperti biasa tanpa perubahan: "drops at the chemistry building... remain unchanged".'
      }
    ]
  },
  // 22: Lecture: Marine Thermohaline Ocean Circulation
  {
    id: 'lp22',
    title: 'Oceanography Lecture: The Global Conveyor Belt',
    type: 'lecture',
    scenario: 'Kuliah oseanografi mengenai sirkulasi termohalin laut global (Global Ocean Conveyor Belt) dan pembentukan air dalam Atlantik Utara.',
    difficulty: 'Hard',
    text: `Today we examine the global ocean conveyor belt, known technically as thermohaline circulation. Unlike shallow surface currents steered by wind friction and Coriolis deflection, deep ocean thermohaline circulation is driven by minute density differences dictated by water temperature (thermo) and salinity (haline). In the subpolar North Atlantic near Greenland and Iceland, warm surface water carried northward by the Gulf Stream cools dramatically in arctic winds. As sea ice forms, salts are excluded from the ice crystal lattice in a process called brine rejection, elevating the surrounding water's salinity. This frigid, exceptionally dense, saline water plunges thousands of meters to the abyssal ocean floor, forming North Atlantic Deep Water. This descending column acts as an enormous hydrodynamic pump, driving a slow global overturning current that takes roughly one thousand years to complete a single cycle.`,
    qs: [
      {
        id: 'lq22_1',
        q: 'What two physical factors primarily determine deep ocean water density?',
        o: ['Barometric air pressure and cloud cover', 'Water temperature and salinity', 'Moon tides and wind velocity', 'Underwater volcanic ash and coral reefs'],
        a: 1,
        e: 'Faktor penentu utama densitas air laut dalam adalah suhu (termo) dan salinitas/kadar garam (halin).'
      },
      {
        id: 'lq22_2',
        q: 'What occurs during "brine rejection" as sea ice forms?',
        o: ['Salt is absorbed by polar bears', 'Dissolved salts are excluded from freezing ice, increasing surrounding seawater salinity', 'The ocean floor warms up rapidly', 'Freshwater evaporates completely'],
        a: 1,
        e: 'Saat es laut membeku, garam dikeluarkan dari kristal es ("salts are excluded"), sehingga kadar garam air di sekitarnya meningkat drastis.'
      },
      {
        id: 'lq22_3',
        q: 'Approximately how long does it take for water to complete a full thermohaline circulation cycle?',
        o: ['One month', 'Ten years', 'One thousand years', 'One million years'],
        a: 2,
        e: 'Satu putaran penuh memakan waktu sekitar seribu tahun: "roughly one thousand years to complete a single cycle".'
      }
    ]
  },
  // 23: Study Abroad Advising: Language Proficiency
  {
    id: 'lp23',
    title: 'Study Abroad Advising: Exchange Semester in Kyoto',
    type: 'conversation',
    scenario: 'Mahasiswa berkonsultasi mengenai persyaratan visa, kemahiran bahasa, dan batas pendaftaran semester pertukaran di Jepang.',
    difficulty: 'Medium',
    text: `Student: Good morning. I am very interested in applying for the semester exchange program at Kyoto University next fall. Advisor: Wonderful choice! Kyoto is a prestigious partner institution. To qualify for the English-track exchange, applicants must possess a minimum cumulative GPA of 3.0 and submit two faculty letters of recommendation. While coursework for the international program is taught in English, the host university strongly recommends that applicants have completed at least two semesters of Japanese language study to facilitate daily integration. Student: I took Japanese 101 and 102 last year! What is the application deadline? Advisor: All application dossiers, including your certified transcript and personal statement, must be submitted to our portal by November thirtieth.`,
    qs: [
      {
        id: 'lq23_1',
        q: 'What is the student applying for?',
        o: ['A full-time employment position in Tokyo', 'A semester exchange program at Kyoto University', 'A scholarship to study in London', 'An internship at an auto plant'],
        a: 1,
        e: 'Mahasiswa berminat mendaftar program pertukaran semester di Universitas Kyoto.'
      },
      {
        id: 'lq23_2',
        q: 'What language requirement does the advisor recommend?',
        o: ['Fluency in technical Japanese legal terminology', 'At least two semesters of introductory Japanese language study', 'Native-level Chinese proficiency', 'No language experience whatsoever'],
        a: 1,
        e: 'Disarankan sudah menyelesaikan minimal dua semester belajar bahasa Jepang dasar: "completed at least two semesters of Japanese language study".'
      },
      {
        id: 'lq23_3',
        q: 'When must the completed study abroad dossier be submitted?',
        o: ['October 1st', 'November 30th', 'January 15th', 'May 1st'],
        a: 1,
        e: 'Batas akhir pengumpulan berkas adalah 30 November: "by November thirtieth".'
      }
    ]
  },
  // 24: Lecture: Behavioral Ecology and Foraging Strategies
  {
    id: 'lp24',
    title: 'Ecology Lecture: Optimal Foraging Theory',
    type: 'lecture',
    scenario: 'Dosen ekologi perilaku memaparkan teori Optimal Foraging Theory (OFT) dan bagaimana predator menyeimbangkan perolehan kalori dengan risiko energi.',
    difficulty: 'Medium',
    text: `Optimal Foraging Theory, or OFT, is a foundational mathematical model in behavioral ecology that evaluates how animals balance caloric energy intake against searching and handling expenditures. Natural selection favors predatory behaviors that maximize net caloric energy gained per unit of time while minimizing mortal risks such as predation and physical exhaustion. For example, Northwestern crows foraging on rocky coastlines hunt large whelks—a type of marine snail. Crows fly up to a precise altitude of approximately five meters and drop the snail onto rocks below to shatter the thick shell. Laboratory trials prove that dropping from lower heights fails to break the shell, while flying higher wastes excessive flight energy without significantly increasing shell fracture rates. Thus, the crow's altitude choice matches the exact mathematical optimum predicted by optimal foraging models.`,
    qs: [
      {
        id: 'lq24_1',
        q: 'What fundamental trade-off does Optimal Foraging Theory evaluate?',
        o: ['Finding mates versus migrating south', 'Net caloric energy gain versus time and energy spent searching and handling food', 'Living in social groups versus solitary hunting', 'Building nests versus storing fat for winter'],
        a: 1,
        e: 'Optimal Foraging Theory menimbang perolehan energi bersih dibanding waktu dan energi yang dihabiskan untuk mencari dan mengolah makanan.'
      },
      {
        id: 'lq24_2',
        q: 'From what height do Northwestern crows drop whelk shells to break them efficiently?',
        o: ['One meter', 'Approximately five meters', 'Twenty-five meters', 'Over fifty meters'],
        a: 1,
        e: 'Burung gagak menjatuhkan kerang dari ketinggian sekitar lima meter: "approximately five meters".'
      },
      {
        id: 'lq24_3',
        q: 'What happens if a crow drops the snail from higher than five meters?',
        o: ['The snail flies away', 'The crow wastes unnecessary flight energy without increasing shell breakage rates', 'The crow risks being attacked by eagles', 'The shell dissolves on impact'],
        a: 1,
        e: 'Terbang lebih tinggi hanya membuang energi terbang secara sia-sia tanpa menambah efektivitas pecahnya cangkang.'
      }
    ]
  },
  // 25: Dormitory Resident Assistant Meeting: Noise Policies
  {
    id: 'lp25',
    title: 'Residential Hall Meeting: Quiet Hours and Community Standards',
    type: 'conversation',
    scenario: 'Pertemuan pengurus asrama lantai mahasiswa untuk menegakkan aturan jam tenang (quiet hours) menjelang pekan ujian tengah semester.',
    difficulty: 'Easy',
    text: `Resident Assistant: Good evening everyone, thank you for attending our floor meeting. With midterm examinations approaching next week, we need to review the dormitory quiet hours policy. Standard quiet hours begin at ten o'clock on weeknights and midnight on weekends. However, beginning this Sunday and continuing through the end of exam week, twenty-four-hour quiet hours will be in effect across the entire residential hall. During twenty-four-hour quiet hours, any amplified musical instruments, loud televisions, or noisy corridor gatherings are strictly prohibited. If you need to collaborate on group project presentations, please reserve one of the sound-insulated conference rooms on the first floor.`,
    qs: [
      {
        id: 'lq25_1',
        q: 'Why are twenty-four-hour quiet hours being instituted this Sunday?',
        o: ['Because the dormitory heating system is broken', 'Because midterm examinations are approaching next week', 'Because university staff are repainting hallways', 'Because fire alarm testing is scheduled'],
        a: 1,
        e: 'Jam tenang 24 jam diberlakukan karena pekan ujian tengah semester (midterm exams) segera berlangsung.'
      },
      {
        id: 'lq25_2',
        q: 'What activity is prohibited during twenty-four-hour quiet hours?',
        o: ['Studying in personal dorm rooms', 'Amplified musical instruments, loud televisions, and noisy corridor gatherings', 'Sleeping after midnight', 'Using university internet connections'],
        a: 1,
        e: 'Dilarang memainkan alat musik bervolume keras, televisi bising, dan berkumpul ramai di lorong.'
      },
      {
        id: 'lq25_3',
        q: 'Where should students go if they need to practice group presentations?',
        o: ['To the parking lot', 'To the sound-insulated conference rooms on the first floor', 'To the dining hall after hours', 'Off campus to a coffee shop'],
        a: 1,
        e: 'Mahasiswa dapat memesan ruang konferensi berperedam suara di lantai satu: "sound-insulated conference rooms on the first floor".'
      }
    ]
  },
  // 26: Lecture: The Origins of Jazz and Syncopation
  {
    id: 'lp26',
    title: 'Music History Lecture: The Birth of Jazz in New Orleans',
    type: 'lecture',
    scenario: 'Kuliah sejarah musik Amerika mengenai asal-usul musik jazz di New Orleans pada akhir abad ke-19 dan sinkopasi ritme.',
    difficulty: 'Medium',
    text: `Jazz emerged in the late nineteenth and early twentieth centuries in the vibrant, multicultural port city of New Orleans, Louisiana. New Orleans served as a unique sonic crossroads where African polyrhythmic drumming traditions converged with European brass band marches, Creole quadrilles, and African American blues and spirituals. The fundamental rhythmic catalyst that distinguished early ragtime and jazz from classical European art music was syncopation—the deliberate displacement of regular musical accents onto weak or off-beat pulses. Combined with blue notes—subtly flattened third and seventh scale intervals—and spontaneous collaborative improvisation, musicians like Buddy Bolden and Louis Armstrong pioneered a radically expressive musical language that quickly spread along Mississippi steamship routes to Chicago and New York.`,
    qs: [
      {
        id: 'lq26_1',
        q: 'In what American city did jazz originate?',
        o: ['New York City', 'New Orleans, Louisiana', 'Chicago, Illinois', 'San Francisco, California'],
        a: 1,
        e: 'Musik jazz bermula di kota pelabuhan New Orleans, Louisiana.'
      },
      {
        id: 'lq26_2',
        q: 'What is syncopation as defined by the lecturer?',
        o: ['Singing in Latin languages', 'The deliberate placement of musical accents onto weak or off-beat pulses', 'Playing music without any rhythm', 'Using only acoustic wooden instruments'],
        a: 1,
        e: 'Sinkopasi adalah pemindahan aksen nada ke ketukan lemah atau gantung: "deliberate displacement of regular musical accents onto weak or off-beat pulses".'
      },
      {
        id: 'lq26_3',
        q: 'How did early jazz music diffuse northward toward Chicago?',
        o: ['Via transcontinental airplanes', 'Along Mississippi River steamship routes', 'Through private telegram cables', 'Exclusively via phonograph records'],
        a: 1,
        e: 'Musik jazz menyebar ke utara menyusuri rute kapal uap Sungai Mississippi: "along Mississippi steamship routes to Chicago".'
      }
    ]
  },
  // 27: Writing Center: Crafting a Research Thesis
  {
    id: 'lp27',
    title: 'Writing Center Consultation: Formulating a Debatable Thesis',
    type: 'conversation',
    scenario: 'Konsultasi penulisan akademik mengenai cara merumuskan kalimat tesis yang kuat dan dapat diperdebatkan (debatable thesis statement).',
    difficulty: 'Medium',
    text: `Student: I'm writing an argumentative essay on renewable energy policies, but my professor noted that my draft thesis is too weak. Currently, my thesis says: "Solar energy has both advantages and disadvantages." Tutor: I see the issue. A strong academic thesis statement cannot simply be a neutral statement of obvious fact. Anyone knows that technologies have pros and cons; that is not an argument! A compelling thesis must take a clear, debatable stand that requires supporting empirical evidence and analytical defense. For instance, you could argue: "Although initial capital outlays remain high, municipal governments must mandate rooftop solar in new residential developments to decouple urban expansion from carbon emissions." See the difference? That assertion makes a specific, contestable policy claim.`,
    qs: [
      {
        id: 'lq27_1',
        q: 'Why was the student’s initial thesis statement considered weak by the professor?',
        o: ['It had grammatical spelling errors', 'It was merely an obvious neutral statement of fact rather than a debatable argument', 'It was too long for an introductory paragraph', 'It was copied from a textbook'],
        a: 1,
        e: 'Tesis awalnya lemah karena hanya pernyataan fakta umum yang netral tanpa klaim argumen yang dapat diperdebatkan.'
      },
      {
        id: 'lq27_2',
        q: 'What essential characteristic must a compelling academic thesis possess?',
        o: ['It must agree with every reader', 'It must take a clear, debatable position that requires evidence and defense', 'It must be written in poetic rhyming verse', 'It must avoid any mention of policy'],
        a: 1,
        e: 'Tesis yang baik harus mengambil sikap yang jelas, dapat diperdebatkan, dan membutuhkan bukti pembelaan: "take a clear, debatable stand that requires supporting empirical evidence".'
      },
      {
        id: 'lq27_3',
        q: 'What specific improvement did the tutor make in his example thesis?',
        o: ['He removed all mention of solar panels', 'He asserted a specific municipal policy claim with a clear rationale', 'He suggested writing about nuclear energy instead', 'He shortened the sentence to three words'],
        a: 1,
        e: 'Tutor memberikan contoh klaim kebijakan kotamadya yang spesifik disertai alasan rasional yang kuat.'
      }
    ]
  },
  // 28: Lecture: Insect Social Structure and Eusociality
  {
    id: 'lp28',
    title: 'Entomology Lecture: Eusociality in Hymenoptera',
    type: 'lecture',
    scenario: 'Kuliah entomologi mengenai karakteristik perilaku eusosial pada semut, lebah, dan rayap, serta seleksi kerabat (kin selection).',
    difficulty: 'Hard',
    text: `Eusociality represents the highest tier of social organization in the animal kingdom, characterized by three cardinal biological criteria: cooperative brood care, overlapping generations of adults within a single colony, and a reproductive division of labor featuring sterile worker castes. In the insect order Hymenoptera—which encompasses ants, social bees, and paper wasps—the evolutionary proliferation of sterile castes long posed a paradox for Darwinian theory: how could genes promoting reproductive sterility be passed down across generations? The genetic solution was formulated in 1964 by evolutionary biologist W. D. Hamilton through his theory of kin selection and the haplodiploid genetic sex-determination system. In haplodiploid species, females develop from fertilized diploid eggs, whereas males develop from unfertilized haploid eggs. Consequently, full sisters share seventy-five percent of their genetic material—closer than a mother is to her own offspring, which share only fifty percent. By helping their mother queen rear reproductive sisters, sterile worker females propagate more copies of their shared genes than if they reproduced individually.`,
    qs: [
      {
        id: 'lq28_1',
        q: 'What are the three essential biological criteria defining eusociality?',
        o: ['Predation, migration, and hibernation', 'Cooperative brood care, overlapping adult generations, and reproductive caste division', 'Carnivorous diet, solitary nesting, and stinging', 'Wings, antennae, and aquatic larvae'],
        a: 1,
        e: 'Tiga kriteria eusosialitas: asuhan bersama larva, generasi dewasa yang tumpang tindih dalam satu koloni, dan pembagian kasta reproduksi.'
      },
      {
        id: 'lq28_2',
        q: 'What percentage of genetic material do full hymenopteran sisters share due to haplodiploidy?',
        o: ['Twenty-five percent', 'Fifty percent', 'Seventy-five percent', 'One hundred percent'],
        a: 2,
        e: 'Saudari kandung dalam sistem haplodiploid berbagi 75% materi genetik: "full sisters share seventy-five percent of their genetic material".'
      },
      {
        id: 'lq28_3',
        q: 'How does kin selection explain the existence of sterile worker insects?',
        o: ['Workers are forced into slavery by the queen', 'Workers successfully pass on shared genes by helping raise fertile sisters who share 75% of their DNA', 'Workers have lost their wings and cannot fly away', 'Workers develop sterility due to pesticides'],
        a: 1,
        e: 'Seleksi kerabat menjelaskan bahwa pekerja steril membantu melestarikan gen yang sama dengan mengasuh saudari mereka yang berbagi 75% DNA.'
      }
    ]
  },
  // 29: Computer Lab Help Desk: Software Licensing
  {
    id: 'lp29',
    title: 'IT Help Desk: Statistical Software Licensing on Student Laptops',
    type: 'conversation',
    scenario: 'Mahasiswa menanyakan instalasi lisensi perangkat lunak analisis data SPSS dan RStudio di laptop pribadi.',
    difficulty: 'Easy',
    text: `Student: Hi, I'm enrolled in Statistics 305 and our professor assigned a data analysis lab using SPSS. Can I install the software on my personal MacBook without purchasing a retail license? Technician: Absolutely! Our university maintains a site license for all actively registered students. You simply need to log in to the campus software portal using your university student credentials, navigate to the academic statistics software section, and download the SPSS installer package. Once installed, copy the twenty-digit licensing key displayed on your portal dashboard to activate the license. It is valid for twelve months. Student: Does it require me to be connected to the campus VPN when running off campus? Technician: For SPSS, no VPN is required once activated. However, if you also download MATLAB, you must connect via the campus GlobalProtect VPN to authenticate against the network license server.`,
    qs: [
      {
        id: 'lq29_1',
        q: 'What software does the student need for Statistics 305?',
        o: ['Photoshop', 'SPSS statistical software', 'AutoCAD', 'Video editing software'],
        a: 1,
        e: 'Mahasiswa membutuhkan software statistik SPSS untuk mata kuliah Statistics 305.'
      },
      {
        id: 'lq29_2',
        q: 'How long is the university software license key valid?',
        o: ['One week', 'One semester', 'Twelve months', 'Permanently for life'],
        a: 2,
        e: 'Lisensi software berlaku selama 12 bulan (dua belas bulan): "valid for twelve months".'
      },
      {
        id: 'lq29_3',
        q: 'When is connection to the campus VPN required?',
        o: ['Every time SPSS is launched', 'When authenticating MATLAB through the campus network license server', 'Only while downloading textbooks', 'VPNs are strictly forbidden'],
        a: 1,
        e: 'VPN kampus diperlukan jika menggunakan MATLAB yang harus mengotentikasi ke server lisensi jaringan kampus.'
      }
    ]
  },
  // 30: Lecture: Glaciology and Ice Core Paleoclimatology
  {
    id: 'lp30',
    title: 'Earth Science Lecture: Ice Core Records of Past Atmospheres',
    type: 'lecture',
    scenario: 'Kuliah ilmu kebumian mengenai pengeboran inti es Antarktika dan analisis gelembung udara purba untuk merekonstruksi iklim masa lampau.',
    difficulty: 'Hard',
    text: `Polar ice sheets in Greenland and Antarctica represent the most pristine archival repositories of past atmospheric chemistry and temperature available on Earth. Each year, falling snow traps ambient air before being compressed into granular firn and ultimately impermeable glacial ice. By drilling cylindrical ice cores to depths exceeding three kilometers—such as the EPICA core at Dome C in Antarctica—glaciologists have extracted continuous climate records spanning eight hundred thousand years. Tiny microscopic bubbles hermetically sealed within deep ice strata preserve actual samples of ancient atmospheres. Scientists crush or melt these ice samples in vacuum chambers to analyze concentrations of greenhouse gases, including carbon dioxide and methane, while simultaneously measuring oxygen-18 to oxygen-16 isotopic ratios in water molecules to infer past atmospheric temperatures with astonishing precision.`,
    qs: [
      {
        id: 'lq30_1',
        q: 'How long of a continuous paleoclimate record has the EPICA ice core in Antarctica provided?',
        o: ['One thousand years', 'Fifty thousand years', 'Eight hundred thousand years', 'Five billion years'],
        a: 2,
        e: 'Inti es EPICA menyediakan rekaman iklim hingga 800.000 tahun yang lalu: "spanning eight hundred thousand years".'
      },
      {
        id: 'lq30_2',
        q: 'What is preserved inside the deep glacial ice bubbles?',
        o: ['Ancient human fossil tools', 'Actual samples of prehistoric atmospheric air', 'Extinct dinosaur blood', 'Liquid petroleum reservoirs'],
        a: 1,
        e: 'Gelembung di dalam es mengunci sampel udara atmosfer purba yang sebenarnya: "preserve actual samples of ancient atmospheres".'
      },
      {
        id: 'lq30_3',
        q: 'How do glaciologists infer past planetary temperatures from ice cores?',
        o: ['By counting the number of dead insects', 'By measuring oxygen isotopic ratios (O-18 to O-16) in ice water molecules', 'By measuring the width of tree rings frozen inside the ice', 'By measuring electrical magnetism of polar rocks'],
        a: 1,
        e: 'Suhu masa lampau disimpulkan melalui rasio isotop oksigen O-18 terhadap O-16 dalam molekul air es.'
      }
    ]
  }
];
