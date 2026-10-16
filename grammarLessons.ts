import { GrammarLesson } from './types';

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'g1',
    number: 1,
    title: 'Subject & Object Pronoun',
    category: 'Pronouns',
    description: 'Subject pronoun (I, you, he, she, it, we, they) berada SEBELUM kata kerja (verb) sebagai pelaku. Object pronoun (me, you, him, her, it, us, them) berada SESUDAH kata kerja atau kata depan (preposition).',
    formula: 'Subject + Verb + Object / Preposition + Object Pronoun',
    examples: [
      'She loves the cat. → The cat loves her.',
      'They called Alfred yesterday. → Alfred called them back.',
      'Between you and me (bukan I), the test was manageable.'
    ],
    toeflTip: 'Hati-hati dengan compound subjects/objects seperti "Alfred and I" (subject) vs "Alfred and me" (object).'
  },
  {
    id: 'g2',
    number: 2,
    title: 'Possessive Adjective & Possessive Pronoun',
    category: 'Pronouns',
    description: 'Possessive Adjectives (my, your, his, her, its, our, their) WAJIB diikuti kata benda (noun). Possessive Pronouns (mine, yours, his, hers, ours, theirs) berdiri sendiri menggantikan noun.',
    formula: 'Possessive Adj + Noun  |  Possessive Pronoun (tanpa noun)',
    examples: [
      'This is my book. The book is mine.',
      'The company increased its (bukan it\'s) annual profit margin.',
      'Their results were impressive, but ours were extraordinary.'
    ],
    toeflTip: 'TOEFL sering menguji jebakan antara "its" (kepunyaan) dan "it\'s" (singkatan dari it is / it has).'
  },
  {
    id: 'g3',
    number: 3,
    title: 'Cardinal & Ordinal Numbers',
    category: 'Determiners & Numbers',
    description: 'Cardinal number menyatakan kuantitas/jumlah (one, two, three, forty). Ordinal number menyatakan urutan posisi (first, second, third, twenty-first) dan hampir selalu didahului artikel "the".',
    formula: 'the + Ordinal Number + Noun  |  Cardinal Number + Plural Noun',
    examples: [
      'There are three major theories regarding the extinction of dinosaurs.',
      'She won the first place in the nationwide chemistry olympiad.',
      'The nineteen-century poet published his second anthology.'
    ],
    toeflTip: 'Ingat format: "the first chapter" ATAU "chapter one" (tanpa the).'
  },
  {
    id: 'g4',
    number: 4,
    title: 'Simple Present Tense',
    category: 'Tenses',
    description: 'Digunakan untuk fakta ilmiah (general truth), kebiasaan (habitual action), dan pernyataan umum. Subjek he/she/it membutuhkan imbuhan -s/-es pada kata kerja dasar.',
    formula: 'S + V1 (+s/es) | S + do/does not + V1 | Do/Does + S + V1?',
    examples: [
      'Water boils at 100 degrees Celsius under standard atmospheric pressure.',
      'The university offers interdisciplinary graduate programs every semester.',
      'Does the sensor detect infrared radiation reliably?'
    ],
    toeflTip: 'Dalam passage ilmiah TOEFL, fakta umum selalu dinyatakan dalam simple present tense.'
  },
  {
    id: 'g5',
    number: 5,
    title: 'The Verb To Be & Linking Verbs',
    category: 'Verbs',
    description: 'To Be (am, is, are, was, were, been, being) dan Linking Verbs (seem, appear, remain, become, smell, taste, feel) diikuti oleh Subject Complement (adjective atau noun), BUKAN adverb.',
    formula: 'Subject + Linking Verb + Adjective (Complement)',
    examples: [
      'The theory sounds reasonable (bukan reasonably).',
      'The specimen remains intact despite severe chemical exposure.',
      'These findings are consistent with earlier laboratory observations.'
    ],
    toeflTip: 'Jangan gunakan adverb setelah linking verb: ucapkan "The flower smells sweet", bukan "sweetly".'
  },
  {
    id: 'g6',
    number: 6,
    title: 'Question Words & Embedded Questions',
    category: 'Sentences & Clauses',
    description: 'Pertanyaan langsung menggunakan inversi (Auxiliary + Subject). Namun pada "Embedded Question" (klausa tanya di dalam kalimat pernyataan), susunan kembali normal: Question Word + Subject + Verb.',
    formula: 'Main Clause + Question Word + Subject + Verb (NO inversion!)',
    examples: [
      'Direct: Where does he live?',
      'Embedded: He asked me where I lived (bukan where did I live).',
      'The researchers investigated why the compound reacted violently.'
    ],
    toeflTip: 'Ini adalah pola jebakan nomor 1 di bagian Structure TOEFL! Cari opsi dengan urutan S + V setelah kata tanya.'
  },
  {
    id: 'g7',
    number: 7,
    title: 'Present Continuous Tense',
    category: 'Tenses',
    description: 'Menyatakan aksi yang sedang berlangsung saat dibicarakan atau tren yang sedang berkembang. Ditandai keterangan waktu: right now, currently, at present, nowadays.',
    formula: 'S + am/is/are + Verb-ing',
    examples: [
      'Researchers are currently analyzing ice core samples from Antarctica.',
      'The global climate is warming at an unprecedented rate.',
      'At present, technicians are upgrading the supercomputer mainframe.'
    ],
    toeflTip: 'Stative verbs (know, believe, understand, belong, exist) tidak lazim digunakan dalam continuous form.'
  },
  {
    id: 'g8',
    number: 8,
    title: 'Simple Past Tense',
    category: 'Tenses',
    description: 'Menyatakan kejadian yang selesai sepenuhnya di masa lampau pada waktu spesifik (yesterday, in 1969, three years ago, during the 19th century).',
    formula: 'S + V2 (regular: -ed / irregular) | S + did not + V1',
    examples: [
      'Alexander Fleming discovered penicillin by accident in 1928.',
      'The ancient Romans constructed extensive aqueducts across Europe.',
      'Did the committee approve the budget allocation last week?'
    ],
    toeflTip: 'Jika ada penanda waktu pasti di masa lalu seperti "in 1850", gunakan Simple Past, BUKAN Present Perfect.'
  },
  {
    id: 'g9',
    number: 9,
    title: 'Past Continuous & Interrupted Past',
    category: 'Tenses',
    description: 'Menggambarkan kegiatan yang sedang berlangsung di waktu lampau ketika kejadian lain tiba-tiba menyela (biasanya dipadukan dengan kata hubung when atau while).',
    formula: 'While + S + was/were + V-ing, S + V2  |  S + was/were + V-ing when + S + V2',
    examples: [
      'We were running the thermal test when the power supply suddenly failed.',
      'While the astronomer was calibrating the lens, a new comet appeared.',
      'The seismograph was recording baseline noise when the shockwave struck.'
    ],
    toeflTip: 'Klausa sesudah "while" biasanya continuous (V-ing), sedangkan sesudah "when" biasanya simple past (V2).'
  },
  {
    id: 'g10',
    number: 10,
    title: 'Simple Future & Future Real Conditions',
    category: 'Tenses',
    description: 'Menyatakan prediksi atau rencana masa depan menggunakan will + V1 atau be going to + V1.',
    formula: 'S + will + V1  |  S + am/is/are going to + V1',
    examples: [
      'The spacecraft will reach the Martian orbit next November.',
      'Meteorologists predict it is going to rain heavily this weekend.',
      'Autonomous electric vehicles will likely dominate passenger transit by 2035.'
    ],
    toeflTip: 'Dalam time clauses (when, as soon as, before, after), gunakan Present Tense untuk masa depan: "When the probe lands (bukan will land), it will transmit data."'
  },
  {
    id: 'g11',
    number: 11,
    title: 'Present Perfect & Past Perfect',
    category: 'Tenses',
    description: 'Present Perfect (have/has + V3) untuk aksi lampau yang masih berpengaruh atau berlangsung hingga kini (sejak/selama). Past Perfect (had + V3) untuk aksi yang terjadi LEBIH AWAL dari aksi lampau lainnya.',
    formula: 'Present Perfect: have/has + V3  |  Past Perfect: had + V3',
    examples: [
      'Marine biologists have studied coral bleaching since the late 1980s.',
      'By the time Darwin published his treatise, he had collected specimens for decades.',
      'She has already completed the statistical calculation.'
    ],
    toeflTip: 'Kombinasi "By the time + S + V2" berpasangan dengan "S + had + V3" (Past Perfect).'
  },
  {
    id: 'g12',
    number: 12,
    title: 'Subject-Verb Agreement & Intervening Phrases',
    category: 'Core TOEFL Structure',
    description: 'Kata kerja harus selaras dengan subjek inti. Abaikan frasa penyela seperti prepositional phrase (of, in, with), along with, together with, as well as, accompanied by.',
    formula: 'Subject [frasa penyela diabaikan] + Verb selaras',
    examples: [
      'The list of experimental parameters is (bukan are) extremely extensive.',
      'The professor, along with her graduate assistants, has (bukan have) arrived.',
      'Each of the newly synthesized compounds exhibits unique properties.'
    ],
    toeflTip: 'Everyone, someone, each, every, neither of, either of selalu mengambil kata kerja TUNGGAL (singular verb).'
  },
  {
    id: 'g13',
    number: 13,
    title: 'Parallel Structure (Kesejajaran Bentuk)',
    category: 'Core TOEFL Structure',
    description: 'Unsur-unsur yang dihubungkan dengan kata hubung setara (and, but, or), pasangan berpasangan (both...and, either...or, neither...nor, not only...but also), atau perbandingan harus memiliki bentuk gramatikal yang identik.',
    formula: 'X and Y (noun & noun / V-ing & V-ing / to V & to V / adj & adj)',
    examples: [
      'She enjoys reading academic journals, writing essays, and conducting field work.',
      'The proposed policy is both economically viable and environmentally sound.',
      'To succeed in scientific research requires patience, discipline, and perseverance.'
    ],
    toeflTip: 'Jika ada 3 unsur yang dirinci: A, B, and C — ketiganya harus dalam kelas kata yang persis sama.'
  },
  {
    id: 'g14',
    number: 14,
    title: 'Conditionals & Inverted Conditionals',
    category: 'Conditionals',
    description: 'Tipe 1 (Nyata): If + Present, will + V1. Tipe 2 (Khayal sekarang): If + Past (were), would + V1. Tipe 3 (Khayal lampau): If + Had + V3, would have + V3. Bentuk inversi menghilangkan "if".',
    formula: 'Had + S + V3, S + would have + V3  |  Were + S + to V, S + would + V1',
    examples: [
      'If the ambient temperature rises, ice will melt.',
      'If I had known about the conference, I would have submitted my paper.',
      'Inversi Tipe 3: Had the team tested the alloy, they would have caught the defect.',
      'Inversi Tipe 1: Should you require further clarification, please contact the office.'
    ],
    toeflTip: '"Had I known" = "If I had known". Di TOEFL, bentuk inversi tanpa "if" sangat sering muncul!'
  },
  {
    id: 'g15',
    number: 15,
    title: 'Passive Voice (Kalimat Pasif)',
    category: 'Verbs',
    description: 'Digunakan ketika pelaku aksi tidak diketahui, tidak penting, atau fokus kalimat berada pada objek hasil tindakan. Pola dasar adalah be + V3 (past participle).',
    formula: 'Subject + Be (sesuai tense) + Past Participle (V3) (+ by Agent)',
    examples: [
      'The Nobel Prize was awarded to the quantum physicist in Stockholm.',
      'Novel vaccines are being developed to counter mutated viral strains.',
      'The archival documents must be preserved in climate-controlled vaults.'
    ],
    toeflTip: 'Pastikan kata kerja transitif memiliki "be" sebelum V3 agar membentuk makna pasif yang tepat.'
  },
  {
    id: 'g16',
    number: 16,
    title: 'Relative Clauses & Reduced Clauses',
    category: 'Sentences & Clauses',
    description: 'Who (orang - subjek), Whom (orang - objek), Whose (kepunyaan), Which (benda), That (orang/benda). Klausa relatif aktif dapat direduksi menjadi V-ing, sedangkan klausa pasif direduksi menjadi V3.',
    formula: 'Active: The man who works here → The man working here | Passive: The book which was written by... → The book written by...',
    examples: [
      'The archaeologist whose research revolutionized the discipline delivered the speech.',
      'The satellite orbiting Earth transmits atmospheric data every minute.',
      'The theory formulated by Einstein overturned classical physics.'
    ],
    toeflTip: 'Hati-hati dengan tanda koma: "that" tidak boleh digunakan di dalam non-defining relative clause (yang diapit koma).'
  },
  {
    id: 'g17',
    number: 17,
    title: 'Negative & Limiting Inversion',
    category: 'Core TOEFL Structure',
    description: 'Ketika kata keterangan bernada negatif atau pembatas diletakkan di awal kalimat untuk memberi penekanan, susunan kalimat mengalami pembalikan (Auxiliary + Subject + Verb).',
    formula: 'Negative Word (Not only, Seldom, Rarely, Never, Scarcely, Hardly, Only after) + Aux + S + V',
    examples: [
      'Not only was the hypothesis flawed, but the experimental methodology was also invalid.',
      'Seldom have astronomers observed a supernova detonation in such luminous clarity.',
      'Only after the monsoon ended did the villagers begin rebuilding the terrace.'
    ],
    toeflTip: 'Begitu melihat "Not only", "Seldom", atau "Hardly" di awal baris soal, langsung cari opsi yang memiliki auxiliary sebelum subjek!'
  },
  {
    id: 'g18',
    number: 18,
    title: 'The Subjunctive Mood',
    category: 'Verbs',
    description: 'Setelah kata kerja permohonan atau keharusan (suggest, recommend, demand, insist, require, propose, urge, mandate) diikuti klausa "that + S + V1 dasar (bare infinitive)", tanpa memandang subjek tunggal atau jamak.',
    formula: 'S + Verb of Urgency + that + S + V1 (tanpa -s, tanpa modal)',
    examples: [
      'The medical doctor suggested that the patient drink (bukan drinks) plenty of fluids.',
      'The university committee mandated that every student submit an original thesis.',
      'It is crucial that he be (bukan is) present at the doctoral defense.'
    ],
    toeflTip: 'Bentuk kata kerjanya selalu polos (base form / V1), bahkan untuk he, she, it: "that she take the exam", bukan "takes".'
  },
  {
    id: 'g19',
    number: 19,
    title: 'Participial Phrases & Dangling Modifiers',
    category: 'Modifiers',
    description: 'Frasa pembuka dengan participial (V-ing atau V3) harus menjelaskan subjek yang tepat persis setelah tanda koma. Jika subjek setelah koma tidak melakukan tindakan tersebut, disebut "dangling modifier".',
    formula: 'V-ing / V3 phrase, Correct Subject + Verb',
    examples: [
      'Salah: Walking through the forest, the ancient ruins were discovered by the team.',
      'Benar: Walking through the forest, the team discovered the ancient ruins.',
      'Exhausted from the expedition, the geologists returned to base camp.'
    ],
    toeflTip: 'Tanyakan: "Siapa yang sedang melakukan tindakan pada frasa awal?" Orang atau benda itulah yang wajib berdiri tepat setelah tanda koma.'
  },
  {
    id: 'g20',
    number: 20,
    title: 'Transitions: Prepositions vs Conjunctions',
    category: 'Conjunctions & Prepositions',
    description: 'Mampu membedakan kata sambung yang diikuti klausa (S + V) versus kata depan yang hanya diikuti noun/noun phrase.',
    formula: 'Although / Even though / Because / Since / While + Subject + Verb  VS  Despite / In spite of / Because of / Due to / During + Noun Phrase',
    examples: [
      'Despite the torrential rainfall, the botanical survey proceeded as scheduled.',
      'Although it rained torrentially, the survey team reached the summit.',
      'The flight was delayed because of adverse meteorological conditions.'
    ],
    toeflTip: '"Despite" TIDAK PERNAH memakai "of" (ucapan yang benar adalah "Despite" ATAU "In spite of").'
  }
];
