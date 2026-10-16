import { QuestionItem } from './types';

export const GRAMMAR_QUESTIONS: QuestionItem[] = [
  // 1-15: Original from toefl-prep.html
  {
    id: 'gq1',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'Maria is my colleague. ___ is a very diligent and perceptive researcher.',
    options: ['He', 'She', 'Her', 'They'],
    answer: 1,
    explanation: 'Subjek untuk perempuan tunggal adalah subject pronoun "She".'
  },
  {
    id: 'gq2',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'I consult ___ almost every afternoon regarding our lab findings (my advisor Alfred).',
    options: ['he', 'his', 'him', 'them'],
    answer: 2,
    explanation: 'Posisi setelah kata kerja transitif (consult) membutuhkan object pronoun untuk laki-laki tunggal: "him".'
  },
  {
    id: 'gq3',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'Dr. Evelyn ___ to the university laboratory every weekday morning.',
    options: ['go', 'goes', 'going', 'gone'],
    answer: 1,
    explanation: 'Keterangan "every weekday" menunjukkan kebiasaan (Simple Present). Subjek orang ketiga tunggal (Dr. Evelyn) membutuhkan akhiran -s/es: "goes".'
  },
  {
    id: 'gq4',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'Right now, the graduate students ___ an important qualification exam in hall B.',
    options: ['take', 'took', 'are taking', 'have taken'],
    answer: 2,
    explanation: 'Frasa waktu "Right now" menandakan Present Continuous tense: "are taking".'
  },
  {
    id: 'gq5',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'We ___ dinner in the faculty lounge when the emergency alarm rang.',
    options: ['ate', 'were eating', 'are eating', 'have eaten'],
    answer: 1,
    explanation: 'Kejadian lampau yang sedang berlangsung ketika ada aksi lain menyela menggunakan Past Continuous: "were eating".'
  },
  {
    id: 'gq6',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'Professor Williams ___ at this research institute since 2019.',
    options: ['live', 'lived', 'has lived', 'is living'],
    answer: 2,
    explanation: 'Kata "since" menunjukkan kejadian dari masa lampau yang masih berlangsung hingga kini (Present Perfect): "has lived".'
  },
  {
    id: 'gq7',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Medium',
    question: 'If I ___ more discretionary grant funding, I would study abroad in Germany.',
    options: ['have', 'had', 'will have', 'would have'],
    answer: 1,
    explanation: 'Conditional Type 2 (situasi hipotetis saat ini): klausa "if" menggunakan Simple Past ("had") berpasangan dengan "would + V1".'
  },
  {
    id: 'gq8',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Easy',
    question: 'The list of necessary laboratory items ___ on the instructor’s table.',
    options: ['are', 'were', 'is', 'be'],
    answer: 2,
    explanation: 'Subjek utama adalah kata tunggal "The list" (frasa "of necessary laboratory items" diabaikan), sehingga membutuhkan kata kerja tunggal "is".'
  },
  {
    id: 'gq9',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Easy',
    question: 'She enjoys swimming, running, and ___ in the nearby national park.',
    options: ['to cycle', 'cycle', 'cycling', 'cycled'],
    answer: 2,
    explanation: 'Prinsip Parallel Structure menuntut bentuk gerund (V-ing) yang sepadan dengan swimming dan running: "cycling".'
  },
  {
    id: 'gq10',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Easy',
    question: 'The scientific treatise ___ by millions of students across the globe.',
    options: ['read', 'has read', 'was read', 'reads'],
    answer: 2,
    explanation: 'Kalimat pasif membutuhkan pola Be + V3. Bentuk yang tepat dan gramatikal adalah "was read".'
  },
  {
    id: 'gq11',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Easy',
    question: 'The woman ___ lives next to the campus health clinic is a renowned pediatric surgeon.',
    options: ['which', 'who', 'whose', 'where'],
    answer: 1,
    explanation: 'Relative pronoun "who" digunakan untuk merujuk pada subjek manusia ("The woman").'
  },
  {
    id: 'gq12',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Neither of the experimental hypotheses ___ correct according to the test data.',
    options: ['are', 'were', 'is', 'be'],
    answer: 2,
    explanation: 'Subjek "Neither of + plural noun" secara formal gramatikal selalu berpasangan dengan singular verb: "is".'
  },
  {
    id: 'gq13',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'By next December, she ___ her doctoral dissertation in astrophysics.',
    options: ['finishes', 'will finish', 'will have finished', 'finished'],
    answer: 2,
    explanation: 'Pola "By + waktu di masa depan" membutuhkan Future Perfect tense: "will have finished".'
  },
  {
    id: 'gq14',
    section: 'Grammar',
    topic: 'Embedded Questions',
    difficulty: 'Medium',
    question: 'The immigration officer asked me where ___.',
    options: ['do I live', 'I live', 'did I live', 'I lived'],
    answer: 3,
    explanation: 'Embedded question (klausa tanya tidak langsung dalam past tense) mengikuti urutan statement (S + V2) tanpa auxiliary inversi: "where I lived".'
  },
  {
    id: 'gq15',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'The more you practice solving TOEFL reading passages, ___ you become.',
    options: ['better', 'the better', 'best', 'the best'],
    answer: 1,
    explanation: 'Pola perbandingan ganda proporsional adalah "The more..., the better..." (The + comparative, the + comparative).'
  },

  // 16-33: From toefl-tambahan.json
  {
    id: 'gq16',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'My brother and I are planning a field trip. ___ are very excited to explore the cave.',
    options: ['We', 'Us', 'They', 'Our'],
    answer: 0,
    explanation: '"My brother and I" setara dengan orang pertama jamak subjek: "We".'
  },
  {
    id: 'gq17',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'This is Sarah. I know ___ very well from our undergraduate seminars.',
    options: ['she', 'her', 'hers', 'they'],
    answer: 1,
    explanation: 'Object pronoun perempuan tunggal setelah verb "know" adalah "her".'
  },
  {
    id: 'gq18',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'The golden retriever wagged ___ tail enthusiastically when the trainer approached.',
    options: ['it', "it's", 'its', 'their'],
    answer: 2,
    explanation: 'Kata ganti kepemilikan hewan tunggal adalah possessive adjective "its" (tanpa apostrof, karena it\'s = it is).'
  },
  {
    id: 'gq19',
    section: 'Grammar',
    topic: 'Determiners & Numbers',
    difficulty: 'Easy',
    question: 'The young runner finished in ___ place in the state track championship.',
    options: ['two', 'second', 'twice', 'the two'],
    answer: 1,
    explanation: 'Untuk menunjukkan urutan/peringkat digunakan ordinal number: "second" (second place).'
  },
  {
    id: 'gq20',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: '___ you prefer black tea or roasted coffee in the morning?',
    options: ['Do', 'Does', 'Are', 'Is'],
    answer: 0,
    explanation: 'Simple present interrogative untuk subjek "you" dengan main verb "prefer" menggunakan auxiliary "Do".'
  },
  {
    id: 'gq21',
    section: 'Grammar',
    topic: 'Question Words',
    difficulty: 'Easy',
    question: '___ is your academic presentation scheduled? It will take place next Friday at 2 PM.',
    options: ['Where', 'Who', 'When', 'Why'],
    answer: 2,
    explanation: 'Jawaban menunjukkan keterangan waktu (next Friday at 2 PM), sehingga kata tanya yang tepat adalah "When".'
  },
  {
    id: 'gq22',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'Listen carefully! The infant ___ in the nursery room.',
    options: ['cries', 'is crying', 'cried', 'has cried'],
    answer: 1,
    explanation: 'Kata seru "Listen!" menandakan kejadian sedang berlangsung pada saat bicara: "is crying" (Present Continuous).'
  },
  {
    id: 'gq23',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'They ___ the documentary film on renewable energy last night.',
    options: ['watch', 'watched', 'were watch', 'have watching'],
    answer: 1,
    explanation: 'Keterangan waktu lampau spesifik "last night" mewajibkan Simple Past (V2): "watched".'
  },
  {
    id: 'gq24',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'I ___ television in the living room when the electrical storm tripped the main fuse.',
    options: ['watched', 'was watching', 'am watching', 'watch'],
    answer: 1,
    explanation: 'Aktivitas yang sedang berjalan di masa lampau sebelum diputus peristiwa lain: "was watching" (Past Continuous).'
  },
  {
    id: 'gq25',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'Look at those dense dark clouds. It ___ rain within minutes.',
    options: ['will', 'is going to', 'did', 'has'],
    answer: 1,
    explanation: 'Prediksi masa depan berdasarkan bukti fisik visual yang nyata menggunakan "is going to".'
  },
  {
    id: 'gq26',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'She ___ already ___ all the assigned homework before class started.',
    options: ['has / finished', 'have / finish', 'is / finishing', 'did / finished'],
    answer: 0,
    explanation: 'Penanda "already" dengan subjek tunggal "she" menggunakan Present Perfect: "has / finished".'
  },
  {
    id: 'gq27',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Not only ___ late for the keynote lecture, but he also forgot the presentation slides.',
    options: ['he was', 'was he', 'he is', 'is he'],
    answer: 1,
    explanation: 'Frasa negatif pembatas "Not only" di awal kalimat memicu inversi kalimat lampau: Auxiliary Verb + Subject ("was he").'
  },
  {
    id: 'gq28',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The students, along with their biology instructor, ___ attending the symposium.',
    options: ['is', 'are', 'be', 'were'],
    answer: 1,
    explanation: 'Frasa "along with their biology instructor" adalah sisipan. Subjek utama adalah kata jamak "The students", sehingga kata kerjanya adalah "are".'
  },
  {
    id: 'gq29',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Had I known about the changes in the schedule, I ___ you earlier.',
    options: ['would tell', 'will tell', 'would have told', 'told'],
    answer: 2,
    explanation: 'Inversi Conditional Type 3 ("Had I known" = "If I had known") berpasangan dengan "would have + V3" ("would have told").'
  },
  {
    id: 'gq30',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The epidemiological study, ___ was published in 2020, completely reshaped clinical guidelines.',
    options: ['who', 'that', 'which', 'what'],
    answer: 2,
    explanation: 'Non-restrictive relative clause yang dipisahkan tanda koma untuk merujuk pada benda/studi harus menggunakan "which" (bukan that).'
  },
  {
    id: 'gq31',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The dean strongly suggested that the department chair ___ the syllabus immediately.',
    options: ['revises', 'revise', 'revised', 'revising'],
    answer: 1,
    explanation: 'Subjunctive mood setelah kata kerja "suggest that..." mewajibkan bare infinitive (V1 polos tanpa imbuhan): "revise".'
  },
  {
    id: 'gq32',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: '___ the torrential downpour, the archaeological team continued their trench work.',
    options: ['Although', 'Despite', 'Because', 'However'],
    answer: 1,
    explanation: '"Despite" adalah preposisi yang diikuti noun phrase ("the torrential downpour") untuk menyatakan kontras. ("Although" harus diikuti klausa S+V).'
  },
  {
    id: 'gq33',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'We look forward to ___ the international delegates at the reception hall.',
    options: ['meet', 'meeting', 'met', 'have met'],
    answer: 1,
    explanation: 'Ungkapan idiomatik "look forward to" diakhiri preposisi "to", sehingga wajib diikuti Gerund (V-ing): "meeting".'
  },

  // 34-200: Expanded high-yield TOEFL Structure & Written Expression items
  {
    id: 'gq34',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Seldom ___ such an extraordinary display of aurora borealis in lower latitudes.',
    options: ['have witnessed observers', 'observers have witnessed', 'have observers witnessed', 'observers witness'],
    answer: 2,
    explanation: 'Negative adverb "Seldom" di awal kalimat mengharuskan pola inversi: Auxiliary + Subject + Main Verb ("have observers witnessed").'
  },
  {
    id: 'gq35',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Every student in the three physics sections ___ required to write an independent lab report.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: 'Kata "Every" selalu mengambil singular noun dan singular verb: "is".'
  },
  {
    id: 'gq36',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The committee was impressed by the ___ of the candidate’s proposal.',
    options: ['thorough', 'thoroughly', 'thoroughness', 'thoroughlyness'],
    answer: 2,
    explanation: 'Artikel "the" dan preposisi "of" mengapit noun form: "thoroughness" (kecermatan/ketelitian).'
  },
  {
    id: 'gq37',
    section: 'Grammar',
    topic: 'Reduced Clauses',
    difficulty: 'Hard',
    question: '___ by centuries of harsh weather, the ancient limestone statue slowly crumbled.',
    options: ['Weakening', 'Weakened', 'Having weakened', 'To weaken'],
    answer: 1,
    explanation: 'Reduced passive clause: patung tersebut dilemahkan (pasif), sehingga memerlukan Past Participle (V3): "Weakened".'
  },
  {
    id: 'gq38',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'The modern university library provides spaces for studying, collaborating, and ___ quiet contemplation.',
    options: ['to pursue', 'pursuing', 'pursue', 'pursued'],
    answer: 1,
    explanation: 'Kesejajaran gerund: "studying", "collaborating", and "pursuing".'
  },
  {
    id: 'gq39',
    section: 'Grammar',
    topic: 'Correlative Conjunctions',
    difficulty: 'Medium',
    question: 'Both the experimental results ___ the theoretical models supported the initial hypothesis.',
    options: ['as well as', 'and', 'or', 'along with'],
    answer: 1,
    explanation: 'Pasangan konjungsi korelatif untuk "Both" selalu "and" (Both A and B).'
  },
  {
    id: 'gq40',
    section: 'Grammar',
    topic: 'Correlative Conjunctions',
    difficulty: 'Easy',
    question: 'Either the graduate assistant ___ the faculty advisor will sign the laboratory requisition form.',
    options: ['nor', 'or', 'and', 'but'],
    answer: 1,
    explanation: 'Pasangan konjungsi korelatif "Either" adalah "or" (Either A or B).'
  },
  {
    id: 'gq41',
    section: 'Grammar',
    topic: 'Correlative Conjunctions',
    difficulty: 'Easy',
    question: 'Neither the primary conductor ___ the backup alternator showed any signs of overheating.',
    options: ['or', 'nor', 'and', 'also'],
    answer: 1,
    explanation: 'Pasangan kata "Neither" adalah "nor" (Neither A nor B).'
  },
  {
    id: 'gq42',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'It is essential that the sterile surgical instruments ___ completely sanitized before the operation.',
    options: ['are', 'be', 'were', 'will be'],
    answer: 1,
    explanation: 'Pola impersonal subjunctive: "It is essential that + S + be (bare infinitive)".'
  },
  {
    id: 'gq43',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: '___ you have any difficulty operating the spectrometer, please notify the technician immediately.',
    options: ['Were', 'Should', 'Had', 'Would'],
    answer: 1,
    explanation: 'Inversi Conditional Type 1 menggunakan "Should + S + V1" ("Should you have..." = "If you have...").'
  },
  {
    id: 'gq44',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: '___ the committee to reconsider the proposal, we would present additional statistical evidence.',
    options: ['Had', 'Should', 'Were', 'Did'],
    answer: 2,
    explanation: 'Inversi Conditional Type 2 untuk kata kerja selain to be: "Were + S + to V1" ("Were the committee to reconsider...").'
  },
  {
    id: 'gq45',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'A large number of archaeological artifacts ___ uncovered during the recent highway excavation.',
    options: ['was', 'were', 'is', 'has been'],
    answer: 1,
    explanation: 'Frasa "A number of + plural noun" bermakna jamak ("banyak"), sehingga membutuhkan plural verb "were". (Bandingkan dengan "The number of" yang singular).'
  },
  {
    id: 'gq46',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The number of endangered bird species in the river estuary ___ gradually decreasing.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: 'Frasa "The number of..." fokus pada satu angka tunggal, sehingga mengambil singular verb "is".'
  },
  {
    id: 'gq47',
    section: 'Grammar',
    topic: 'Modifiers & Participles',
    difficulty: 'Hard',
    question: 'Having completed the botanical survey, ___ back to the base camp before nightfall.',
    options: ['the collected specimens were transported', 'the research team hiked', 'it was decided to return', 'the trail was followed'],
    answer: 1,
    explanation: 'Menghindari dangling modifier: subjek yang menyelesaikan survei ("Having completed...") haruslah pelaku ("the research team"), yang diletakkan tepat setelah tanda koma.'
  },
  {
    id: 'gq48',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Scarcely ___ the lab doors when a loud chemical reaction commenced.',
    options: ['the scientist had opened', 'had the scientist opened', 'did the scientist open', 'has the scientist opened'],
    answer: 1,
    explanation: '"Scarcely... when" adalah pola inversi past perfect: "Scarcely had + S + V3... when...".'
  },
  {
    id: 'gq49',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Hardly ___ the telescope on the distant galaxy before thick cloud cover blocked the view.',
    options: ['had we focused', 'we had focused', 'did we focus', 'were we focusing'],
    answer: 0,
    explanation: '"Hardly had + S + V3" adalah rumus inversi baku saat ditempatkan di awal klausa.'
  },
  {
    id: 'gq50',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Only by examining microfossils under polarized light ___ decipher the composition of the sedimentary rock.',
    options: ['geologists can', 'can geologists', 'geologists could', 'did geologists'],
    answer: 1,
    explanation: 'Frasa pembuka "Only by + V-ing..." memicu inversi pada main clause: Modal/Auxiliary + Subject ("can geologists").'
  },
  {
    id: 'gq51',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Under no circumstances ___ unauthorized personnel to enter the radiation containment chamber.',
    options: ['are allowed', 'are permitted', 'are unauthorized personnel allowed', 'is permitted'],
    answer: 2,
    explanation: '"Under no circumstances" di awal kalimat mewajibkan inversi: Auxiliary + Subject + Participle ("are unauthorized personnel allowed").'
  },
  {
    id: 'gq52',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: 'The launch was postponed ___ the severe crosswinds above the launchpad.',
    options: ['because', 'due to', 'although', 'since'],
    answer: 1,
    explanation: '"Due to" adalah preposisi yang tepat diikuti noun phrase ("the severe crosswinds"). "Because" dan "since" harus diikuti full clause (S+V).'
  },
  {
    id: 'gq53',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: '___ the telescope was initially out of calibration, the astronomers managed to obtain sharp images.',
    options: ['In spite of', 'Despite', 'Although', 'Because of'],
    answer: 2,
    explanation: '"Although" diikuti oleh klausa lengkap berisi subjek dan predikat ("the telescope was initially out of calibration").'
  },
  {
    id: 'gq54',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'The ancient papyrus scroll ___ by high-energy X-ray fluorescence without opening it.',
    options: ['was analyzed', 'analyzed', 'is analyzing', 'has analyzed'],
    answer: 0,
    explanation: 'Gulungan papirus dianalisis (objek pasif), sehingga membutuhkan bentuk Passive Voice: "was analyzed".'
  },
  {
    id: 'gq55',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The professor ___ lecture on cognitive linguistics drew hundreds of students is retiring this year.',
    options: ['who', 'whom', 'whose', 'which'],
    answer: 2,
    explanation: 'Relative pronoun kepemilikan ("whose lecture" = kuliah milik sang profesor) adalah "whose".'
  },
  {
    id: 'gq56',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The researcher to ___ the grant was awarded published groundbreaking results in Nature.',
    options: ['who', 'whom', 'which', 'whose'],
    answer: 1,
    explanation: 'Setelah kata depan/preposisi ("to"), bentuk relative pronoun orang adalah object form: "whom" (to whom).'
  },
  {
    id: 'gq57',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'Farmers in arid regions often ___ the temperature of their greenhouses using evaporative pads.',
    options: ['raise', 'rise', 'arise', 'rose'],
    answer: 0,
    explanation: '"Raise" adalah kata kerja transitif (membutuhkan objek "the temperature"), sedangkan "rise" adalah intransitif (tidak berobjek).'
  },
  {
    id: 'gq58',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'When atmospheric humidity levels decrease, dry leaves ___ brittle and crisp.',
    options: ['lie', 'lay', 'become', 'set'],
    answer: 2,
    explanation: '"Become" adalah linking verb yang tepat diikuti adjective complement ("brittle and crisp").'
  },
  {
    id: 'gq59',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The injured eagle ___ motionless on the canyon floor until the rangers rescued it.',
    options: ['lay', 'laid', 'lied', 'lain'],
    answer: 0,
    explanation: 'Past tense dari kata kerja intransitif "lie" (berbaring/tergeletak) adalah "lay". ("Laid" adalah past dari lay = meletakkan sesuatu).'
  },
  {
    id: 'gq60',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Ten miles ___ too far for the wounded surveyor to hike without water.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: 'Ukuran jarak, waktu, atau uang ("Ten miles") dianggap sebagai satu kesatuan kuantitas tunggal sehingga memakai "is".'
  },
  {
    id: 'gq61',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Five thousand dollars ___ allocated for updating the geology lab’s microscopes.',
    options: ['was', 'were', 'are', 'have been'],
    answer: 0,
    explanation: 'Jumlah uang ("Five thousand dollars") diperlakukan sebagai satu kesatuan tunggal (singular): "was".'
  },
  {
    id: 'gq62',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Physics, along with mathematics and chemistry, ___ considered one of the core natural sciences.',
    options: ['are', 'is', 'were', 'have been'],
    answer: 1,
    explanation: 'Nama bidang studi berakhiran -s ("Physics") adalah kata benda tunggal. Frasa sisipan "along with..." tidak mempengaruhi subjek.'
  },
  {
    id: 'gq63',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The news regarding the successful Mars rover touchdown ___ broadcast worldwide.',
    options: ['were', 'was', 'are', 'have been'],
    answer: 1,
    explanation: 'Kata "News" adalah uncountable noun yang selalu tunggal dan mengambil verb "was".'
  },
  {
    id: 'gq64',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'The committee decided to postpone ___ the final decision until further tests were run.',
    options: ['make', 'to make', 'making', 'made'],
    answer: 2,
    explanation: 'Kata kerja "postpone" harus diikuti oleh Gerund (V-ing): "making".'
  },
  {
    id: 'gq65',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'Many species of migratory birds avoid ___ across large expanses of open water.',
    options: ['flying', 'to fly', 'fly', 'flight'],
    answer: 0,
    explanation: 'Kata kerja "avoid" selalu diikuti oleh Gerund (V-ing): "flying".'
  },
  {
    id: 'gq66',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'The expedition leader considered ___ the route because of severe glacial crevasses.',
    options: ['alter', 'to alter', 'altering', 'altered'],
    answer: 2,
    explanation: 'Kata kerja "consider" diikuti oleh bentuk Gerund: "altering".'
  },
  {
    id: 'gq67',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Easy',
    question: 'She hopes ___ a research fellowship at the Max Planck Institute next spring.',
    options: ['securing', 'to secure', 'secured', 'secure'],
    answer: 1,
    explanation: 'Kata kerja "hope" diikuti oleh to-infinitive: "to secure".'
  },
  {
    id: 'gq68',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Easy',
    question: 'The young physicist managed ___ the anomaly using an innovative algorithm.',
    options: ['resolving', 'resolve', 'to resolve', 'resolved'],
    answer: 2,
    explanation: 'Kata kerja "manage" berpasangan dengan to-infinitive: "to resolve".'
  },
  {
    id: 'gq69',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'The climate in Antarctica is far more hostile than ___ of the Arctic basin.',
    options: ['this', 'that', 'these', 'those'],
    answer: 1,
    explanation: 'Untuk menghindari pengulangan singular noun ("the climate") dalam komparasi, gunakan pronoun penunjuk "that" (that of the Arctic basin).'
  },
  {
    id: 'gq70',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'The eyes of a nocturnal owl are proportionally larger than ___ of daytime raptors.',
    options: ['this', 'that', 'these', 'those'],
    answer: 3,
    explanation: 'Untuk merujuk kembali plural noun ("The eyes") dalam perbandingan, gunakan "those" (those of daytime raptors).'
  },
  {
    id: 'gq71',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Easy',
    question: 'Diamond is ___ naturally occurring mineral known to modern geology.',
    options: ['harder', 'the hardest', 'most hard', 'hardest'],
    answer: 1,
    explanation: 'Superlative degree untuk kata sifat satu suku kata ("hard") membutuhkan artikel "the" + "-est": "the hardest".'
  },
  {
    id: 'gq72',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'Of the two proposed engineering designs, the second is clearly ___.',
    options: ['the most economical', 'more economical', 'the more economical', 'most economical'],
    answer: 2,
    explanation: 'Ketika membandingkan tepat DUA pilihan ("Of the two..."), gunakan pola "the + comparative": "the more economical".'
  },
  {
    id: 'gq73',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The safety officer insisted that each worker ___ protective goggles inside the chemical facility.',
    options: ['wear', 'wears', 'wore', 'must wear'],
    answer: 0,
    explanation: 'Subjunctive mood setelah "insist that" menggunakan bare infinitive ("wear"), bukan "wears".'
  },
  {
    id: 'gq74',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The university bylaws require that a doctoral candidate ___ three peer-reviewed articles prior to graduation.',
    options: ['publishes', 'publish', 'published', 'is publishing'],
    answer: 1,
    explanation: 'Subjunctive mood setelah "require that" selalu menggunakan V1 dasar: "publish".'
  },
  {
    id: 'gq75',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'By the time the rescue team arrived at the avalanche site, the stranded hikers ___ a snow shelter.',
    options: ['built', 'have built', 'had built', 'were building'],
    answer: 2,
    explanation: '"By the time + simple past (arrived)" berpasangan dengan Past Perfect ("had built") untuk aksi yang selesai lebih dahulu.'
  },
  {
    id: 'gq76',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'Archaeologists ___ ancient burial mounds in the Ohio River valley since the early twentieth century.',
    options: ['have been excavating', 'are excavating', 'excavated', 'were excavating'],
    answer: 0,
    explanation: 'Aksi berkelanjutan dari masa lalu hingga sekarang ("since the early twentieth century") dinyatakan dengan Present Perfect Continuous: "have been excavating".'
  },
  {
    id: 'gq77',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'Penicillin ___ by Alexander Fleming after he noticed fungal contamination in a culture dish.',
    options: ['discovered', 'was discovered', 'has discovered', 'is discovering'],
    answer: 1,
    explanation: 'Penicillin ditemukan (pasif) pada waktu lampau tertentu: "was discovered".'
  },
  {
    id: 'gq78',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The architect was praised for her ___ approach to urban parkland revitalization.',
    options: ['innovate', 'innovation', 'innovative', 'innovatively'],
    answer: 2,
    explanation: 'Kata sebelum noun "approach" harus berbentuk adjective: "innovative".'
  },
  {
    id: 'gq79',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The chemical solution turned bright yellow, ___ the presence of sulfur ions.',
    options: ['indicated', 'indicating', 'indicates', 'indication'],
    answer: 1,
    explanation: 'Participle clause yang menyatakan konsekuensi/hasil dari aksi utama: present participle aktif "indicating" (yang menunjukkan).'
  },
  {
    id: 'gq80',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'A sudden drop in barometric pressure is often an ___ of an approaching squall.',
    options: ['indicate', 'indicator', 'indicative', 'indicated'],
    answer: 1,
    explanation: 'Setelah artikel "an" dan sebelum preposisi "of", dibutuhkan noun: "indicator" (petunjuk/indikator).'
  },
  {
    id: 'gq81',
    section: 'Grammar',
    topic: 'Pronouns',
    difficulty: 'Easy',
    question: 'Every citizen has ___ own unique civic responsibility to participate in elections.',
    options: ['their', 'his or her', 'its', 'theirs'],
    answer: 1,
    explanation: 'Secara formal preskriptif TOEFL, "Every citizen" adalah singular, sehingga possessive formalnya adalah "his or her".'
  },
  {
    id: 'gq82',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'There ___ several plausible hypotheses explaining the sudden mass extinction of Permian fauna.',
    options: ['is', 'are', 'was', 'has been'],
    answer: 1,
    explanation: 'Dalam konstruksi "There + be", verb diselaraskan dengan noun phrase setelahnya ("several plausible hypotheses" = jamak): "are".'
  },
  {
    id: 'gq83',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'There ___ little doubt that renewable energy costs have plunged over the last decade.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: '"Doubt" dalam konteks "little doubt" adalah uncountable singular noun, sehingga menggunakan "is".'
  },
  {
    id: 'gq84',
    section: 'Grammar',
    topic: 'Reduced Clauses',
    difficulty: 'Hard',
    question: '___ in high-altitude mountain soils, alpine edelweiss develops woolly hair to trap heat.',
    options: ['Growing', 'Grown', 'To grow', 'Having grown'],
    answer: 0,
    explanation: 'Alpine edelweiss tumbuh secara aktif (bukan ditanam orang), sehingga reduced clause aktifnya menggunakan V-ing: "Growing".'
  },
  {
    id: 'gq85',
    section: 'Grammar',
    topic: 'Reduced Clauses',
    difficulty: 'Hard',
    question: '___ with carbon fiber mesh, the fuselage withstands extreme atmospheric pressure differences.',
    options: ['Reinforced', 'Reinforcing', 'To reinforce', 'Reinforce'],
    answer: 0,
    explanation: 'Badan pesawat diperkuat (pasif) dengan serat karbon: past participle "Reinforced".'
  },
  {
    id: 'gq86',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The committee members could not agree ___ a unified resolution regarding the budget deficit.',
    options: ['on', 'with', 'at', 'in'],
    answer: 0,
    explanation: 'Frasa preposisi yang tepat untuk menyetujui sebuah usulan/keputusan adalah "agree on (or upon) a resolution".'
  },
  {
    id: 'gq87',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The findings of this sociological trial are consistent ___ previous empirical publications.',
    options: ['with', 'to', 'for', 'about'],
    answer: 0,
    explanation: 'Adjective "consistent" berpasangan dengan preposisi "with" (consistent with).'
  },
  {
    id: 'gq88',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'Deep-sea anglerfish are uniquely capable ___ surviving in perpetual darkness and near-freezing temperatures.',
    options: ['to', 'of', 'for', 'with'],
    answer: 1,
    explanation: 'Frasa "capable" berpasangan dengan preposisi "of + Gerund" (capable of surviving).'
  },
  {
    id: 'gq89',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The university board of regents prohibited the commercial firm ___ testing products on campus premises.',
    options: ['to', 'from', 'with', 'against'],
    answer: 1,
    explanation: 'Kata kerja "prohibit" berpasangan dengan "from + V-ing" (prohibit someone from doing something).'
  },
  {
    id: 'gq90',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Hard',
    question: 'The rapid deforestation in the watershed caused ___ soil erosion along the riverbanks.',
    options: ['considerable', 'considerably', 'consider', 'consideration'],
    answer: 0,
    explanation: 'Sebelum noun "soil erosion", dibutuhkan kata sifat (adjective) yang menerangkan besaran erosi: "considerable".'
  },
  {
    id: 'gq91',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Hard',
    question: 'The newly discovered fossil skull was remarkably well ___ in volcanic ash layers.',
    options: ['preserve', 'preserved', 'preservation', 'preserving'],
    answer: 1,
    explanation: 'Struktur pasif dengan adverb: "was remarkably well preserved".'
  },
  {
    id: 'gq92',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: '___ Pacific Ocean is the largest and deepest ocean basin on Earth.',
    options: ['A', 'An', 'The', 'No article'],
    answer: 2,
    explanation: 'Nama samudra, laut, dan sungai selalu menggunakan definite article "The": "The Pacific Ocean".'
  },
  {
    id: 'gq93',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'Mount Everest is situated in ___ Himalayas along the border of Nepal and China.',
    options: ['the', 'a', 'an', 'no article'],
    answer: 0,
    explanation: 'Gugusan pegunungan jamak (mountain ranges) selalu memakai artikel "the": "the Himalayas".'
  },
  {
    id: 'gq94',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: '___ Mount Everest is the highest mountain peak above sea level.',
    options: ['The', 'A', 'An', 'No article'],
    answer: 3,
    explanation: 'Puncak gunung tunggal (individual peaks) seperti Mount Everest tidak menggunakan artikel.'
  },
  {
    id: 'gq95',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'Lake Superior is ___ largest freshwater lake in North America by surface area.',
    options: ['the', 'a', 'an', 'no article'],
    answer: 0,
    explanation: 'Superlative adjective "largest" selalu didahului definite article: "the largest".'
  },
  {
    id: 'gq96',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'She received ___ honorary doctoral degree in biochemistry from Cambridge University.',
    options: ['a', 'an', 'the', 'no article'],
    answer: 1,
    explanation: 'Kata "honorary" diawali bunyi vokal /ɒn/ (silent \'h\'), sehingga memerlukan indefinite article "an".'
  },
  {
    id: 'gq97',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'The solar telescope was installed at ___ European high-altitude observatory in the Alps.',
    options: ['a', 'an', 'the', 'no article'],
    answer: 0,
    explanation: 'Kata "European" diawali dengan bunyi konsonan semi-vokal /j/ ("yu-ro-pean"), sehingga menggunakan artikel "a", bukan "an".'
  },
  {
    id: 'gq98',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Medium',
    question: 'If the planetary core cools down completely, the magnetic shield ___ away.',
    options: ['stripped', 'will strip', 'would have stripped', 'will be stripped'],
    answer: 3,
    explanation: 'Real conditional (Type 1) dalam bentuk pasif: "If + present simple, will be + V3": "will be stripped".'
  },
  {
    id: 'gq99',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'If Isaac Newton had not investigated optical refraction, the reflecting telescope ___ much later.',
    options: ['might have invented', 'might have been invented', 'might be invented', 'was invented'],
    answer: 1,
    explanation: 'Past hypothetical conditional (Type 3) bentuk pasif: "might have been invented".'
  },
  {
    id: 'gq100',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Were Earth ___ closer to the sun, surface oceans would evaporate into steam.',
    options: ['positioned', 'to be positioned', 'positioning', 'position'],
    answer: 1,
    explanation: 'Bentuk inversi conditional type 2: "Were + Subject + to be + V3 / to V1" ("Were Earth to be positioned...").'
  },
  {
    id: 'gq101',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The laboratory technician calibrated the digital pipettes, all of ___ had been sanitized.',
    options: ['whom', 'which', 'that', 'what'],
    answer: 1,
    explanation: 'Pola kuantifier dengan preposisi ("all of", "none of", "many of") untuk merujuk pada benda ("pipettes") selalu menggunakan "which": "all of which".'
  },
  {
    id: 'gq102',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The committee interviewed twelve candidates, three of ___ had previously managed federal research laboratories.',
    options: ['whom', 'which', 'who', 'whose'],
    answer: 0,
    explanation: 'Pola kuantifier dengan preposisi ("three of...") untuk merujuk pada orang ("candidates") selalu menggunakan "whom": "three of whom".'
  },
  {
    id: 'gq103',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'By 1890, electrical streetcars ___ horse-drawn carriages in most metropolitan centers.',
    options: ['replaced', 'had replaced', 'have replaced', 'were replacing'],
    answer: 1,
    explanation: 'Pola "By + tahun lampau (By 1890)" menandakan aksi telah tuntas sebelum titik waktu tersebut, sehingga memakai Past Perfect: "had replaced".'
  },
  {
    id: 'gq104',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The majority of the ozone layer ___ situated in the stratosphere.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: 'Ketika "The majority of" diikuti singular/uncountable noun ("the ozone layer"), kata kerjanya adalah tunggal: "is".'
  },
  {
    id: 'gq105',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The majority of migratory shorebirds ___ along the coastal flyway.',
    options: ['travels', 'travel', 'is traveling', 'has traveled'],
    answer: 1,
    explanation: 'Ketika "The majority of" diikuti plural countable noun ("shorebirds"), kata kerjanya adalah jamak: "travel".'
  },
  {
    id: 'gq106',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Two-thirds of the polar ice sheet ___ already melted in this experimental simulation.',
    options: ['has', 'have', 'are', 'were'],
    answer: 0,
    explanation: 'Fraksi ("Two-thirds of") yang diikuti singular mass noun ("the polar ice sheet") mengambil singular verb "has".'
  },
  {
    id: 'gq107',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Two-thirds of the participants ___ marked improvement after six weeks of cognitive therapy.',
    options: ['show', 'shows', 'is showing', 'has shown'],
    answer: 0,
    explanation: 'Fraksi ("Two-thirds of") yang diikuti plural noun ("the participants") mengambil plural verb "show".'
  },
  {
    id: 'gq108',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'The research fellowship requires applicants not only to submit three letters of reference but also ___ a comprehensive research synopsis.',
    options: ['to prepare', 'preparing', 'prepare', 'prepared'],
    answer: 0,
    explanation: 'Parallel structure berpasangan dengan "not only to submit... but also to prepare...".'
  },
  {
    id: 'gq109',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'Good experimental design emphasizes precision, repeatability, and ___.',
    options: ['being transparent', 'transparency', 'transparent', 'to be transparent'],
    answer: 1,
    explanation: 'Kesejajaran tiga noun abstrak: "precision" (noun), "repeatability" (noun), and "transparency" (noun).'
  },
  {
    id: 'gq110',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'No sooner ___ the laboratory bell sounded than the emergency ventilation shutters closed.',
    options: ['had', 'did', 'was', 'were'],
    answer: 0,
    explanation: '"No sooner had + S + V3... than..." adalah pola inversi baku yang berarti "baru saja... ketika...".'
  },
  {
    id: 'gq111',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Little ___ suspect that the minor volcanic tremor was the precursor to a catastrophic eruption.',
    options: ['the volcanologists did', 'did the volcanologists', 'the volcanologists had', 'were the volcanologists'],
    answer: 1,
    explanation: 'Negative word "Little" di awal kalimat mewajibkan inversi: Auxiliary did + Subject + V1 ("did the volcanologists suspect").'
  },
  {
    id: 'gq112',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The new geothermal power plant operates with remarkable ___.',
    options: ['efficient', 'efficiency', 'efficiently', 'efficacious'],
    answer: 1,
    explanation: 'Setelah preposisi "with" dan adjective "remarkable", dibutuhkan noun: "efficiency".'
  },
  {
    id: 'gq113',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The archaeologist examined the inscription ___ to avoid damaging the fragile slate.',
    options: ['careful', 'care', 'carefully', 'carefulness'],
    answer: 2,
    explanation: 'Kata kerja aksi "examined" diterangkan oleh adverb of manner: "carefully".'
  },
  {
    id: 'gq114',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'Unlike wild varieties, cultivated wheat has grains that do not ___ scatter in the wind.',
    options: ['easy', 'easily', 'ease', 'easiness'],
    answer: 1,
    explanation: 'Adverb "easily" menerangkan kata kerja "scatter".'
  },
  {
    id: 'gq115',
    section: 'Grammar',
    topic: 'Modals & Semi-Modals',
    difficulty: 'Medium',
    question: 'Ancient sailors ___ navigated by observing constellations, as magnetic compasses were not yet invented.',
    options: ['must have', 'should have', 'could not have', 'would have not'],
    answer: 0,
    explanation: 'Kesimpulan logis yang sangat pasti di masa lalu (logical deduction in the past): "must have navigated".'
  },
  {
    id: 'gq116',
    section: 'Grammar',
    topic: 'Modals & Semi-Modals',
    difficulty: 'Medium',
    question: 'The pilot ___ landed the aircraft on the short runway, but dense fog forced a diversion.',
    options: ['could have', 'must have', 'would not have', 'should not have'],
    answer: 0,
    explanation: '"Could have + V3" menyatakan kemampuan/peluang melakukan sesuatu di masa lalu yang akhirnya tidak terlaksana.'
  },
  {
    id: 'gq117',
    section: 'Grammar',
    topic: 'Modals & Semi-Modals',
    difficulty: 'Medium',
    question: 'You ___ double-checked the autoclave pressure valve before initiating the steam cycle.',
    options: ['must', 'should have', 'would', 'might'],
    answer: 1,
    explanation: '"Should have + V3" menyatakan penyesalan atau anjuran di masa lalu yang sayangnya terlewatkan.'
  },
  {
    id: 'gq118',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The environmental protocol recommended that chemical run-off ___ diverted to specialized retention ponds.',
    options: ['is', 'was', 'be', 'will be'],
    answer: 2,
    explanation: 'Subjunctive mood pasif: "recommended that + S + be + V3" ("be diverted").'
  },
  {
    id: 'gq119',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The judicial board demanded that the dean ___ all relevant institutional correspondence.',
    options: ['discloses', 'disclose', 'disclosed', 'is disclosing'],
    answer: 1,
    explanation: 'Subjunctive mood setelah kata kerja "demanded that": bare infinitive "disclose".'
  },
  {
    id: 'gq120',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: 'The spacecraft continued transmitting telemetry data ___ it had depleted eighty percent of its fuel reserves.',
    options: ['even though', 'despite', 'in spite of', 'because of'],
    answer: 0,
    explanation: '"Even though" adalah subordinating conjunction yang diikuti oleh full clause (S + V): "it had depleted...".'
  },
  {
    id: 'gq121',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: '___ of the harsh sub-Antarctic winds, tussock grass thrives along the island perimeter.',
    options: ['Despite', 'In spite', 'Although', 'Even though'],
    answer: 1,
    explanation: 'Frasa preposisi yang memakai "of" adalah "In spite of". ("Despite" tidak pernah memakai "of").'
  },
  {
    id: 'gq122',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Easy',
    question: 'The denser an element is, ___ its resistance to penetration by high-energy gamma rays.',
    options: ['greater', 'the greater', 'greatest', 'the greatest'],
    answer: 1,
    explanation: 'Pola proportional comparative: "The denser..., the greater...".'
  },
  {
    id: 'gq123',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'Titan is unique among moons in that it has an atmosphere nearly as dense ___ that of Earth.',
    options: ['like', 'as', 'than', 'to'],
    answer: 1,
    explanation: 'Pola kesetaraan (equative comparison) adalah "as + adjective + as": "nearly as dense as that of Earth".'
  },
  {
    id: 'gq124',
    section: 'Grammar',
    topic: 'Modifiers & Participles',
    difficulty: 'Hard',
    question: '___ through the microscope eyepiece, the cellular structure appeared crystalline and geometric.',
    options: ['Observing', 'When observed', 'Having observed', 'To observe'],
    answer: 1,
    explanation: 'Struktur sel diamati (pasif), sehingga memerlukan past participle: "When observed through the microscope...".'
  },
  {
    id: 'gq125',
    section: 'Grammar',
    topic: 'Modifiers & Participles',
    difficulty: 'Hard',
    question: '___ along the coastline for fifty miles, the rocky cliffs dropped precipitously into the Pacific.',
    options: ['Stretching', 'Stretched', 'To stretch', 'Having stretched'],
    answer: 0,
    explanation: 'Tebing membentang secara kontinu: present participle aktif "Stretching along the coastline...".'
  },
  {
    id: 'gq126',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The city of Alexandria was home to a legendary ancient library ___ contained hundreds of thousands of scrolls.',
    options: ['where', 'that', 'who', 'in where'],
    answer: 1,
    explanation: 'Relative pronoun "that" (atau which) berfungsi sebagai subjek klausa untuk merujuk pada benda/institusi ("ancient library"). ("Where" hanya untuk adverb of place).'
  },
  {
    id: 'gq127',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The archaeological site ___ the primitive stone adzes were unearthed is located in the Rift Valley.',
    options: ['which', 'where', 'that', 'whose'],
    answer: 1,
    explanation: 'Klausa merujuk lokasi tempat terjadinya peristiwa ("stone adzes were unearthed [at the site]"), sehingga memakai "where".'
  },
  {
    id: 'gq128',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'Geologists classify rocks into three fundamental ___: igneous, sedimentary, and metamorphic.',
    options: ['categories', 'categorize', 'categorical', 'categorically'],
    answer: 0,
    explanation: 'Setelah adjective "fundamental", dibutuhkan plural noun: "categories".'
  },
  {
    id: 'gq129',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The team’s failure to isolate the contaminated culture led to ___ skewed test measurements.',
    options: ['drastic', 'drastically', 'drasticness', 'drastical'],
    answer: 1,
    explanation: 'Adverb "drastically" menerangkan adjective participle "skewed".'
  },
  {
    id: 'gq130',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'Since the launch of the James Webb Space Telescope, astronomers ___ hundreds of early primordial galaxies.',
    options: ['cataloged', 'have cataloged', 'are cataloging', 'catalog'],
    answer: 1,
    explanation: 'Klausa "Since + noun phrase" menuntut Present Perfect tense pada kalimat utama: "have cataloged".'
  },
  {
    id: 'gq131',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'When the continental plates collided millions of years ago, the immense crustal pressure ___ the Himalayan chain.',
    options: ['has raised', 'raises', 'raised', 'is raising'],
    answer: 2,
    explanation: 'Peristiwa geologis jutaan tahun silam ("millions of years ago") wajib menggunakan Simple Past: "raised".'
  },
  {
    id: 'gq132',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'All radioactive materials in this research reactor ___ in sealed, lead-lined containers.',
    options: ['must keep', 'must be kept', 'must been kept', 'must keeping'],
    answer: 1,
    explanation: 'Modal passive formula: Modal + be + V3 ("must be kept").'
  },
  {
    id: 'gq133',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'The theoretical proof ___ by several prominent mathematicians during the annual conference.',
    options: ['challenged', 'was challenged', 'has challenged', 'is challenging'],
    answer: 1,
    explanation: 'Bukti teoritis tersebut disanggah (pasif) oleh beberapa matematikawan: "was challenged".'
  },
  {
    id: 'gq134',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Either the lead author or his co-researchers ___ responsible for checking the statistical appendices.',
    options: ['is', 'are', 'was', 'has been'],
    answer: 1,
    explanation: 'Pada susunan "Either A or B", kata kerja harus selaras dengan subjek yang paling dekat dengan verb ("co-researchers" = plural): "are".'
  },
  {
    id: 'gq135',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Neither the graduate students nor the professor ___ able to replicate the anomalous test result.',
    options: ['was', 'were', 'are', 'have been'],
    answer: 0,
    explanation: 'Pada susunan "Neither A nor B", kata kerja mengikuti subjek terdekat ("the professor" = singular): "was".'
  },
  {
    id: 'gq136',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'The newly inaugurated university president aims to recruit top scholars, expand research endowments, and ___ undergraduate dormitories.',
    options: ['modernize', 'modernizing', 'to modernize', 'modernized'],
    answer: 0,
    explanation: 'Parallel infinitive setelah "aims to": recruit (V1), expand (V1), and modernize (V1).'
  },
  {
    id: 'gq137',
    section: 'Grammar',
    topic: 'Embedded Questions',
    difficulty: 'Hard',
    question: 'The oceanographic buoy recorded how ___ during the tropical typhoon.',
    options: ['rapidly sea levels rose', 'did sea levels rise rapidly', 'rapidly did sea levels rise', 'rose sea levels rapidly'],
    answer: 0,
    explanation: 'Embedded question mengikuti susunan normal (Question phrase + Subject + Verb): "how rapidly sea levels rose".'
  },
  {
    id: 'gq138',
    section: 'Grammar',
    topic: 'Embedded Questions',
    difficulty: 'Hard',
    question: 'Physicists are currently investigating why ___ at near-zero temperatures in certain superconducting alloys.',
    options: ['electrical resistance disappears', 'does electrical resistance disappear', 'disappears electrical resistance', 'did electrical resistance disappear'],
    answer: 0,
    explanation: 'Noun clause / embedded clause: kata tanya "why" + subjek ("electrical resistance") + verb ("disappears").'
  },
  {
    id: 'gq139',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Rarely ___ in a single habitat such a diverse array of carnivorous marsupials.',
    options: ['one encounters', 'encounters one', 'does one encounter', 'one did encounter'],
    answer: 2,
    explanation: 'Negative adverb "Rarely" di awal kalimat memerlukan pola inversi: does + subject ("one") + V1 ("encounter").'
  },
  {
    id: 'gq140',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Nowhere in the historical records ___ any mention of an eclipse on that exact calendar date.',
    options: ['is there', 'there is', 'was there', 'there was'],
    answer: 0,
    explanation: 'Negative location adverbial "Nowhere" di awal kalimat mewajibkan inversi: Verb + Subject ("is there").'
  },
  {
    id: 'gq141',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The government placed a heavy tax ___ luxury motor vehicle imports to protect domestic manufacturers.',
    options: ['on', 'in', 'at', 'with'],
    answer: 0,
    explanation: 'Frasa preposisi untuk pajak adalah "tax on something".'
  },
  {
    id: 'gq142',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The researcher was hesitant to draw conclusions because the evidence remained largely ___.',
    options: ['circumstance', 'circumstantial', 'circumstantially', 'circumstances'],
    answer: 1,
    explanation: 'Setelah linking verb "remained" dan adverb "largely", dibutuhkan predicate adjective: "circumstantial" (berdasarkan petunjuk tidak langsung).'
  },
  {
    id: 'gq143',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The new composite material displays high tensile strength and great resistance to ___.',
    options: ['corrode', 'corrosive', 'corrosion', 'corrosively'],
    answer: 2,
    explanation: 'Preposisi "to" di sini membutuhkan noun object: "corrosion" (korosi/perkaratan).'
  },
  {
    id: 'gq144',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: '___ United Kingdom consists of England, Scotland, Wales, and Northern Ireland.',
    options: ['The', 'A', 'An', 'No article'],
    answer: 0,
    explanation: 'Nama negara yang mengandung kata "Kingdom", "Republic", atau "States" wajib diawali artikel "The": "The United Kingdom".'
  },
  {
    id: 'gq145',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'She traveled to ___ Netherlands to participate in the international environmental forum.',
    options: ['the', 'a', 'an', 'no article'],
    answer: 0,
    explanation: 'Nama negara berbentuk jamak ("The Netherlands", "The Philippines") wajib menggunakan artikel "the".'
  },
  {
    id: 'gq146',
    section: 'Grammar',
    topic: 'Articles & Determiners',
    difficulty: 'Medium',
    question: 'Water boils at ___ lower temperature at high elevations due to reduced atmospheric pressure.',
    options: ['a', 'an', 'the', 'no article'],
    answer: 0,
    explanation: 'Frasa "at a lower temperature" menggunakan indefinite article "a" karena menerangkan satu tingkatan suhu tertentu.'
  },
  {
    id: 'gq147',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Had the navigational computer not malfunctioned, the probe ___ into deep space.',
    options: ['would not stray', 'would not have strayed', 'will not stray', 'did not stray'],
    answer: 1,
    explanation: 'Inverted third conditional ("Had... not malfunctioned") berpasangan dengan "would not have + V3": "would not have strayed".'
  },
  {
    id: 'gq148',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Should an unexpected drop in cabin pressure ___, oxygen masks will deploy automatically.',
    options: ['occur', 'occurs', 'occurred', 'occurring'],
    answer: 0,
    explanation: 'Inversi Conditional Type 1: "Should + S + bare infinitive (V1)": "occur".'
  },
  {
    id: 'gq149',
    section: 'Grammar',
    topic: 'Reduced Clauses',
    difficulty: 'Hard',
    question: '___ in 1915, Einstein’s general theory of relativity fundamentally changed our understanding of gravity.',
    options: ['Publishing', 'Published', 'Having published', 'To publish'],
    answer: 1,
    explanation: 'Teori relativitas diterbitkan (pasif) pada tahun 1915: past participle "Published".'
  },
  {
    id: 'gq150',
    section: 'Grammar',
    topic: 'Reduced Clauses',
    difficulty: 'Hard',
    question: '___ between 200 and 500 meters beneath the surface, the twilight zone receives very little sunlight.',
    options: ['Lying', 'Lain', 'Laid', 'Laying'],
    answer: 0,
    explanation: 'Zona tersebut terbentang/terletak (intransitif aktif): present participle dari kata kerja lie adalah "Lying".'
  },
  {
    id: 'gq151',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The committee ___ divided in their individual opinions regarding the experimental ethics.',
    options: ['was', 'were', 'is', 'has been'],
    answer: 1,
    explanation: 'Collective noun ("committee") yang bertindak secara terpisah per individu ("in their individual opinions") mengambil plural verb: "were".'
  },
  {
    id: 'gq152',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The committee ___ unanimously voted to approve the research grant allocation.',
    options: ['has', 'have', 'were', 'are'],
    answer: 0,
    explanation: 'Collective noun yang bertindak kompak sebagai satu kesatuan ("unanimously") mengambil singular verb: "has".'
  },
  {
    id: 'gq153',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The emergency physician ordered that the trauma patient ___ immediately to the intensive care unit.',
    options: ['transfers', 'be transferred', 'is transferred', 'transferred'],
    answer: 1,
    explanation: 'Passive subjunctive: "ordered that + S + be + V3" ("be transferred").'
  },
  {
    id: 'gq154',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'It is imperative that each laboratory assistant ___ strict hazardous waste protocols.',
    options: ['follow', 'follows', 'followed', 'following'],
    answer: 0,
    explanation: 'Subjunctive mood setelah "imperative that": base verb "follow".'
  },
  {
    id: 'gq155',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'Marine mammals rely heavily ___ acoustic echolocation to locate prey in turbid waters.',
    options: ['in', 'at', 'on', 'with'],
    answer: 2,
    explanation: 'Frasa preposisi baku adalah "rely on (atau rely upon)".'
  },
  {
    id: 'gq156',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The new solar panel model is superior ___ traditional silicon wafers in terms of thermal efficiency.',
    options: ['than', 'to', 'from', 'over'],
    answer: 1,
    explanation: 'Adjective Latin berakhiran -ior (superior, inferior, prior, senior, junior) berpasangan dengan "to", BUKAN "than".'
  },
  {
    id: 'gq157',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'Prior ___ her appointment as department dean, Dr. Martinez directed the regional cancer institute.',
    options: ['to', 'than', 'of', 'for'],
    answer: 0,
    explanation: '"Prior" selalu diikuti oleh preposisi "to" (prior to = sebelum).'
  },
  {
    id: 'gq158',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The geological fault line has remained ___ for more than three centuries.',
    options: ['dormancy', 'dormant', 'dormantly', 'dormancies'],
    answer: 1,
    explanation: 'Linking verb "remained" membutuhkan adjective complement: "dormant" (tertidur/tidak aktif).'
  },
  {
    id: 'gq159',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The researcher explained the complex quantum model with admirable ___.',
    options: ['simple', 'simplify', 'simplicity', 'simply'],
    answer: 2,
    explanation: 'Setelah adjective "admirable", dibutuhkan noun form: "simplicity".'
  },
  {
    id: 'gq160',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The sudden surge of electrical voltage caused irreparable ___ to the sensitive microchip array.',
    options: ['harmful', 'damage', 'damaging', 'damagingly'],
    answer: 1,
    explanation: 'Setelah adjective "irreparable", dibutuhkan noun: "damage" (kerusakan tak terpulihkan).'
  },
  {
    id: 'gq161',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: 'The team continued the high-altitude ascent ___ they were running critically low on oxygen canisters.',
    options: ['even though', 'despite', 'in spite of', 'because of'],
    answer: 0,
    explanation: '"Even though" menghubungkan dua klausa lengkap (S + V) untuk menyatakan pertentangan/kontras.'
  },
  {
    id: 'gq162',
    section: 'Grammar',
    topic: 'Conjunctions & Prepositions',
    difficulty: 'Medium',
    question: 'Commercial supersonic air travel was suspended primarily ___ high operational fuel expenditures.',
    options: ['because', 'because of', 'although', 'since'],
    answer: 1,
    explanation: '"Because of" adalah preposisi yang diikuti noun phrase ("high operational fuel expenditures").'
  },
  {
    id: 'gq163',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Only when the deep-sea core samples were thawed in the sterile glovebox ___ identify the ancient microbes.',
    options: ['could biologists', 'biologists could', 'did biologists', 'were biologists'],
    answer: 0,
    explanation: 'Klausa diawali "Only when..." memicu inversi pada klausa utama: modal "could" + subjek "biologists" + main verb "identify".'
  },
  {
    id: 'gq164',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'At no time during the trial ___ the defendant show any remorse for the unauthorized financial transfers.',
    options: ['did', 'was', 'had', 'does'],
    answer: 0,
    explanation: 'Frasa pembatas negatif "At no time" memicu inversi past: "did the defendant show".'
  },
  {
    id: 'gq165',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'To analyze the chemical compound, to document the reaction temperature, and ___ the final residue are the three lab tasks.',
    options: ['weighing', 'to weigh', 'weigh', 'weighed'],
    answer: 1,
    explanation: 'Parallel structure to-infinitive: "to analyze...", "to document...", and "to weigh...".'
  },
  {
    id: 'gq166',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'The candidate’s speech was persuasive, eloquent, and ___.',
    options: ['inspiring', 'inspiration', 'inspiredly', 'to inspire'],
    answer: 0,
    explanation: 'Kesejajaran kata sifat (adjective): "persuasive", "eloquent", and "inspiring".'
  },
  {
    id: 'gq167',
    section: 'Grammar',
    topic: 'Comparatives & Superlatives',
    difficulty: 'Medium',
    question: 'The faster sound travels through a medium, ___ the elastic modulus of that substance.',
    options: ['higher', 'the higher', 'highest', 'the highest'],
    answer: 1,
    explanation: 'Pola perbandingan berulang: "The faster..., the higher...".'
  },
  {
    id: 'gq168',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Medium',
    question: 'Before the printing press was invented in Mainz, scribes ___ every book by hand.',
    options: ['copied', 'had copied', 'have copied', 'were copying'],
    answer: 1,
    explanation: 'Aksi yang berlangsung dan berulang sebelum titik lampau tertentu ("Before the printing press was invented") menggunakan Past Perfect: "had copied".'
  },
  {
    id: 'gq169',
    section: 'Grammar',
    topic: 'Tenses',
    difficulty: 'Easy',
    question: 'By the time the symposium opens tomorrow morning, all guest speakers ___ at the venue hotel.',
    options: ['arrive', 'will have arrived', 'arrived', 'have arrived'],
    answer: 1,
    explanation: 'Pola "By the time + present simple (opens)" untuk masa depan berpasangan dengan Future Perfect: "will have arrived".'
  },
  {
    id: 'gq170',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'The manuscript, thought to have been lost during the war, ___ in a private Bavarian cellar.',
    options: ['recently found', 'was recently found', 'has recently found', 'recently finding'],
    answer: 1,
    explanation: 'Naskah kuno tersebut ditemukan (pasif): "was recently found".'
  },
  {
    id: 'gq171',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The company instituted strict quality control measures to ___ product consistency.',
    options: ['ensure', 'insure', 'assure', 'sure'],
    answer: 0,
    explanation: '"Ensure" bermakna menjamin/memastikan terlaksananya sesuatu (to make sure). ("Insure" untuk asuransi finansial; "assure" meyakinkan orang).'
  },
  {
    id: 'gq172',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The experimental medication did not ___ the patient’s resting heart rate.',
    options: ['affect', 'effect', 'effective', 'affection'],
    answer: 0,
    explanation: '"Affect" adalah kata kerja yang bermakna mempengaruhi. ("Effect" biasanya noun yang berarti akibat/dampak).'
  },
  {
    id: 'gq173',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The greenhouse ___ is an atmospheric phenomenon essential for maintaining Earth’s surface warmth.',
    options: ['affect', 'effect', 'effective', 'effector'],
    answer: 1,
    explanation: 'Frasa yang benar adalah noun "greenhouse effect" (efek rumah kaca).'
  },
  {
    id: 'gq174',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Neither the lead geologist nor his field assistants ___ willing to cross the swollen river.',
    options: ['was', 'were', 'is', 'has been'],
    answer: 1,
    explanation: 'Dalam "Neither... nor...", verb selaras dengan subjek terdekat ("field assistants" = jamak): "were".'
  },
  {
    id: 'gq175',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The criteria used to assess research grant eligibility ___ recently updated by the academic council.',
    options: ['was', 'were', 'is', 'has been'],
    answer: 1,
    explanation: '"Criteria" adalah bentuk jamak (plural) dari "criterion", sehingga kata kerjanya adalah "were".'
  },
  {
    id: 'gq176',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'The phenomenon of bioluminescence in deep-sea cephalopods ___ studied for decades.',
    options: ['has been', 'have been', 'are', 'were'],
    answer: 0,
    explanation: '"Phenomenon" adalah bentuk tunggal (singular) dari "phenomena", sehingga memakai singular verb "has been".'
  },
  {
    id: 'gq177',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Bacterial data collected from the polar ice caps ___ currently being processed in Zurich.',
    options: ['is', 'are', 'was', 'has been'],
    answer: 1,
    explanation: 'Secara baku akademis, "data" adalah bentuk jamak (plural) dari "datum", sehingga menggunakan plural verb "are".'
  },
  {
    id: 'gq178',
    section: 'Grammar',
    topic: 'Modifiers & Participles',
    difficulty: 'Hard',
    question: 'Disturbed by the sudden seismic tremor, ___ from the high rocky overhang.',
    options: ['the bats flew erratically', 'an erratic flight was taken by the bats', 'it caused the bats to fly', 'flying was observed among bats'],
    answer: 0,
    explanation: 'Menghindari dangling modifier: siapa yang terganggu oleh gempa ("Disturbed by...")? Subjek pelaku ("the bats") wajib diletakkan tepat setelah koma.'
  },
  {
    id: 'gq179',
    section: 'Grammar',
    topic: 'Modifiers & Participles',
    difficulty: 'Hard',
    question: 'Having been warned of the impending blizzard, ___ inside their geothermal research station.',
    options: ['the scientists remained', 'it was necessary for the scientists to stay', 'the research station sheltered the scientists', 'remaining inside was chosen by the team'],
    answer: 0,
    explanation: 'Siapa yang diperingatkan tentang badai salju? "the scientists". Subjek ini harus langsung menyusul tanda koma.'
  },
  {
    id: 'gq180',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'The committee chairperson proposed that the annual symposium ___ rescheduled for next September.',
    options: ['is', 'was', 'be', 'will be'],
    answer: 2,
    explanation: 'Subjunctive passive: "proposed that + S + be + V3" ("be rescheduled").'
  },
  {
    id: 'gq181',
    section: 'Grammar',
    topic: 'Subjunctive',
    difficulty: 'Hard',
    question: 'It is recommended that every international student ___ health insurance prior to matriculation.',
    options: ['purchase', 'purchases', 'purchased', 'is purchasing'],
    answer: 0,
    explanation: 'Subjunctive mood: "recommended that + S + bare infinitive" ("purchase").'
  },
  {
    id: 'gq182',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The discovery of the coelacanth was significant in that the fish had been presumed extinct ___ sixty million years.',
    options: ['since', 'for', 'during', 'in'],
    answer: 1,
    explanation: 'Untuk menyatakan durasi rentang waktu tertentu ("sixty million years"), digunakan preposisi "for".'
  },
  {
    id: 'gq183',
    section: 'Grammar',
    topic: 'Prepositions',
    difficulty: 'Medium',
    question: 'The new space telescope has been in continuous scientific operation ___ July 2022.',
    options: ['since', 'for', 'during', 'from'],
    answer: 0,
    explanation: 'Untuk menunjukkan titik awal mula suatu peristiwa lampau ("July 2022"), digunakan "since".'
  },
  {
    id: 'gq184',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The researcher ___ book on cognitive development won the national prize will give tomorrow’s lecture.',
    options: ['who', 'whom', 'whose', 'which'],
    answer: 2,
    explanation: 'Possessive relative pronoun: "whose book" (buku milik sang peneliti).'
  },
  {
    id: 'gq185',
    section: 'Grammar',
    topic: 'Relative Clauses',
    difficulty: 'Medium',
    question: 'The laboratory has ten ultracentrifuges, three of ___ are currently undergoing routine maintenance.',
    options: ['which', 'whom', 'that', 'what'],
    answer: 0,
    explanation: 'Pola kuantifier dengan preposisi untuk benda ("three of which").'
  },
  {
    id: 'gq186',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Only after weeks of patient laboratory observation ___ the viral mechanism of cell entry.',
    options: ['did the team elucidate', 'the team elucidated', 'elucidated the team', 'the team did elucidate'],
    answer: 0,
    explanation: 'Frasa pembuka "Only after..." memicu inversi pada klausa utama: Auxiliary "did" + Subject "the team" + Verb "elucidate".'
  },
  {
    id: 'gq187',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'Scarcely had the volcanic eruption ceased ___ dense blankets of sulfurous ash began falling on nearby villages.',
    options: ['when', 'than', 'then', 'as'],
    answer: 0,
    explanation: 'Pasangan baku inversi: "Scarcely had... when..." (Bandingkan dengan "No sooner had... than...").'
  },
  {
    id: 'gq188',
    section: 'Grammar',
    topic: 'Inversion',
    difficulty: 'Hard',
    question: 'No sooner had the space capsule touched down in the ocean ___ rescue helicopters deployed retrieval divers.',
    options: ['than', 'when', 'then', 'before'],
    answer: 0,
    explanation: 'Pasangan baku inversi: "No sooner had... than...".'
  },
  {
    id: 'gq189',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The agricultural extension office advised growers to ___ their crop rotations to replenish nitrogen.',
    options: ['diversify', 'diversity', 'diverse', 'diversification'],
    answer: 0,
    explanation: 'Setelah to-infinitive ("to"), dibutuhkan kata kerja dasar (verb): "diversify".'
  },
  {
    id: 'gq190',
    section: 'Grammar',
    topic: 'Word Forms & Choice',
    difficulty: 'Medium',
    question: 'The newly discovered fungal enzyme displayed exceptional thermal ___.',
    options: ['stable', 'stability', 'stably', 'stabilize'],
    answer: 1,
    explanation: 'Setelah adjective "thermal", dibutuhkan noun: "stability" (kestabilan termal).'
  },
  {
    id: 'gq191',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Had the astronomers not calibrated the infrared sensor accurately, the faint asteroid ___ undetected.',
    options: ['would have passed', 'passed', 'will pass', 'would pass'],
    answer: 0,
    explanation: 'Inverted third conditional ("Had... not calibrated") berpasangan dengan "would have + V3": "would have passed".'
  },
  {
    id: 'gq192',
    section: 'Grammar',
    topic: 'Conditionals',
    difficulty: 'Hard',
    question: 'Were an interstellar probe ___ at one-tenth the speed of light, it would reach Alpha Centauri in roughly forty years.',
    options: ['to travel', 'travels', 'traveled', 'traveling'],
    answer: 0,
    explanation: 'Inverted second conditional: "Were + Subject + to + V1" ("Were an interstellar probe to travel...").'
  },
  {
    id: 'gq193',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'Radio carbon dating ___ by Willard Libby at the University of Chicago in the late 1940s.',
    options: ['developed', 'was developed', 'has developed', 'is developed'],
    answer: 1,
    explanation: 'Metode tersebut dikembangkan (pasif) pada kurun waktu lampau tertentu: "was developed".'
  },
  {
    id: 'gq194',
    section: 'Grammar',
    topic: 'Passive Voice',
    difficulty: 'Medium',
    question: 'The fossil trackways ___ to have been made by a small theropod dinosaur running along a mudflat.',
    options: ['are believed', 'believe', 'are believing', 'have believed'],
    answer: 0,
    explanation: 'Jejak fosil tersebut diyakini (pasif): "are believed".'
  },
  {
    id: 'gq195',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Every bird, reptile, and amphibian in the endangered reserve ___ monitored by remote telemetry collars.',
    options: ['is', 'are', 'were', 'have been'],
    answer: 0,
    explanation: 'Subjek yang didahului kata "Every..." (meskipun merinci beberapa noun) tetap diperlakukan singular: "is".'
  },
  {
    id: 'gq196',
    section: 'Grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'Medium',
    question: 'Neither the lead engineer nor the project technicians ___ satisfied with the turbine’s fuel efficiency.',
    options: ['was', 'were', 'is', 'has been'],
    answer: 1,
    explanation: 'Dalam pola "Neither... nor...", kata kerja selaras dengan subjek terdekat ("project technicians" = jamak): "were".'
  },
  {
    id: 'gq197',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'The pharmaceutical board insisted on ___ the clinical trials until independent toxicology checks were completed.',
    options: ['halting', 'to halt', 'halt', 'halted'],
    answer: 0,
    explanation: 'Preposisi "on" wajib diikuti oleh Gerund (V-ing): "halting".'
  },
  {
    id: 'gq198',
    section: 'Grammar',
    topic: 'Gerunds & Infinitives',
    difficulty: 'Medium',
    question: 'The dean appreciated ___ informed promptly about the unexpected laboratory emergency.',
    options: ['being', 'to be', 'be', 'been'],
    answer: 0,
    explanation: 'Kata kerja "appreciate" diikuti oleh Gerund pasif: "being informed".'
  },
  {
    id: 'gq199',
    section: 'Grammar',
    topic: 'Correlative Conjunctions',
    difficulty: 'Medium',
    question: 'Not only did the synthetic polymer resist intense acid baths, ___ exhibited remarkable flexibility at sub-zero temperatures.',
    options: ['but it also', 'and also it', 'so it', 'yet it also'],
    answer: 0,
    explanation: 'Pasangan baku untuk "Not only... did S + V..." adalah "but it also + V".'
  },
  {
    id: 'gq200',
    section: 'Grammar',
    topic: 'Parallel Structure',
    difficulty: 'Medium',
    question: 'The prospective intern demonstrated excellent computational skills, high analytical curiosity, and ___ commitment to teamwork.',
    options: ['a steadfast', 'steadfastly', 'to be steadfast', 'steadfastness'],
    answer: 0,
    explanation: 'Parallel noun phrases dengan adjective: "excellent computational skills" (adj + noun), "high analytical curiosity" (adj + noun), and "a steadfast commitment" (article + adj + noun).'
  }
];
