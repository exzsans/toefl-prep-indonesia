import { ReadingPassage } from './types';

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'rp1',
    title: 'Honeybee Communication and the Waggle Dance',
    category: 'Biology',
    difficulty: 'Medium',
    passage: `Honeybees possess one of the most sophisticated communication systems in the animal kingdom. When a foraging worker bee discovers an abundant floral nectar patch, she returns to the dark hive and executes an intricate rhythmic ritual known as the "waggle dance." In this figure-eight maneuver, the bee waggles her abdomen while moving forward in a straight line, then loops back to repeat the movement. The orientation of the central waggle run relative to vertical hive gravity encodes the exact angle between the sun and the food source, while the tempo and duration of the waggle vibrations communicate the distance to the flower patch. Bees observing this performance interpret both directional vector and distance with astonishing mathematical accuracy, allowing thousands of hive mates to forage cooperatively without trial and error.`,
    questions: [
      {
        id: 'rq1',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the primary topic of the passage?',
        options: [
          'The social hierarchy of worker honeybees',
          'How honeybees encode geographic directions through a dance',
          'The chemical composition of floral nectar',
          'Methods for domesticating bee colonies'
        ],
        answer: 1,
        explanation: 'Topik utama teks adalah bagaimana lebah mengodekan informasi arah dan jarak lokasi bunga melalui ritual tarian waggle dance.'
      },
      {
        id: 'rq2',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'According to the passage, what information does the duration of the waggle communicate?',
        options: [
          'The quality of the nectar',
          'The distance to the food source',
          'The number of worker bees required',
          'The time of day'
        ],
        answer: 1,
        explanation: 'Kalimat teks menyatakan: "while the tempo and duration of the waggle vibrations communicate the distance to the flower patch".'
      },
      {
        id: 'rq3',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        question: 'The word "intricate" in the passage is closest in meaning to:',
        options: ['simple', 'complex', 'rapid', 'noisy'],
        answer: 1,
        explanation: 'Kata "intricate" bermakna rumit, terperinci, atau kompleks ("complex").'
      },
      {
        id: 'rq4',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'It can be inferred from the passage that without the waggle dance, bee colonies would:',
        options: [
          'Produce nectar of superior nutritional quality',
          'Spend significantly more energy locating blossoms individually',
          'Abandon their vertical hive structures',
          'Lose the ability to fly in direct sunlight'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan tarian memungkinkan ribuan lebah mencari makan "cooperatively without trial and error", sehingga tanpa tarian lebah harus mencari satu per satu (menghabiskan lebih banyak energi).'
      }
    ]
  },
  {
    id: 'rp2',
    title: 'The Evolutionary Origin of Cetaceans',
    category: 'Marine Paleontology',
    difficulty: 'Medium',
    passage: `Modern cetaceans—whales, dolphins, and porpoises—are fully aquatic mammals whose terrestrial ancestry was once considered an evolutionary enigma. Over the past four decades, however, an extraordinary sequence of transitional fossils unearthed in Pakistan and India has illuminated their land-to-sea metamorphosis. Fifty million years ago, a semi-aquatic artiodactyl known as Pakicetus waded in shallow freshwater marshes. Anatomical analyses revealed that Pakicetus shared a distinctive involucrum—a dense bony wall in the middle ear found exclusively in cetaceans. Subsequent evolutionary lineages, such as Ambulocetus, possessed webbed feet and limb proportions suited for both paddle swimming and lumbering on land. As millions of years elapsed, hind limbs atrophied, nasal blowholes migrated from snout tips to the crowns of their skulls, and front forelimbs flattened into hydrodynamic steering flippers.`,
    questions: [
      {
        id: 'rq5',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main focus of the passage?',
        options: [
          'The migration routes of modern humpback whales',
          'Fossil discoveries that document the terrestrial ancestry of whales',
          'The anatomical similarities between dolphins and sharks',
          'The extinction events that decimated ancient marine reptiles'
        ],
        answer: 1,
        explanation: 'Teks berfokus pada bukti fosil transisi yang membuktikan metamorfosis paus dari mamalia darat berkaki empat menjadi hewan laut.'
      },
      {
        id: 'rq6',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What unique skeletal feature established Pakicetus as a primitive relative of modern whales?',
        options: [
          'Hydrodynamic dorsal fins',
          'A specialized bony wall in the middle ear',
          'Fully atrophied hind limbs',
          'Teeth adapted for filtering plankton'
        ],
        answer: 1,
        explanation: 'Teks menyatakan: "Pakicetus shared a distinctive involucrum—a dense bony wall in the middle ear found exclusively in cetaceans".'
      },
      {
        id: 'rq7',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "atrophied" in the passage is closest in meaning to:',
        options: ['withered or reduced', 'strengthened', 'multiplied', 'elongated'],
        answer: 0,
        explanation: 'Kata "atrophied" berarti mengecil atau menyusut karena tidak lagi difungsikan ("withered or reduced").'
      },
      {
        id: 'rq8',
        section: 'Reading',
        topic: 'Negative Factual',
        difficulty: 'Hard',
        question: 'All of the following anatomical transitions occurred in cetaceans EXCEPT:',
        options: [
          'Nasal openings moved upward toward the crown of the skull',
          'Forelimbs became streamlined flippers',
          'Lungs were replaced with aquatic gills',
          'Hind limbs diminished over evolutionary time'
        ],
        answer: 2,
        explanation: 'Paus tetaplah mamalia yang bernapas dengan paru-paru; paru-paru paus TIDAK pernah digantikan oleh insang (gills).'
      }
    ]
  },
  {
    id: 'rp3',
    title: 'Deep-Sea Hydrothermal Vents and Chemosynthesis',
    category: 'Oceanography',
    difficulty: 'Hard',
    passage: `Prior to 1977, biological dogma asserted that virtually all complex living ecosystems on Earth depended directly or indirectly upon solar irradiance for photosynthetic energy. This paradigm was shattered when the research submersible Alvin explored the volcanic Galapagos Rift, thousands of meters beneath the sunlit ocean surface. Oceanographers were stunned to discover towering mineral chimneys discharging superheated water laden with dissolved hydrogen sulfide, surrounded by dense clusters of giant tube worms, blind shrimp, and white crabs. Instead of photosynthesis, these abyssal communities thrive via chemosynthesis. Specialized autotrophic bacteria oxidize toxic hydrogen sulfide compounds, converting mineral chemical energy into organic nourishment. The giant tube worms lack mouths and digestive tracts entirely, relying instead upon trillions of endosymbiotic sulfur bacteria housed within a vascularized internal organ called a trophosome.`,
    questions: [
      {
        id: 'rq9',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'Which statement summarizes the central discovery described in the passage?',
        options: [
          'Photosynthesis occurs at much greater depths than previously thought',
          'Abyssal ecosystems can thrive independently of sunlight through chemosynthesis',
          'Hydrothermal chimneys are cooling the ocean floor',
          'Giant tube worms are migrating to sunlit coastal waters'
        ],
        answer: 1,
        explanation: 'Gagasan utama adalah penemuan ekosistem laut dalam yang berkembang subur tanpa sinar matahari melalui proses kemosintesis mineral.'
      },
      {
        id: 'rq10',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'How do giant tube worms obtain metabolic nutrition?',
        options: [
          'By filtering swimming shrimp through tentacles',
          'From endosymbiotic bacteria living inside their bodies',
          'By scraping mineral crusts from volcanic rocks',
          'By consuming decaying plankton sinking from the surface'
        ],
        answer: 1,
        explanation: 'Teks menyatakan cacing tabung tidak memiliki mulut/pencernaan dan mengandalkan bakteri endosimbiotik di dalam organ trophosome: "from endosymbiotic bacteria living inside their bodies".'
      },
      {
        id: 'rq11',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "dogma" in the first sentence is closest in meaning to:',
        options: ['established belief', 'unsubstantiated rumor', 'tentative hypothesis', 'experimental error'],
        answer: 0,
        explanation: '"Dogma" berarti doktrin atau keyakinan yang telah mapan dan dipegang teguh ("established belief").'
      },
      {
        id: 'rq12',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What can be inferred about the organisms living near hydrothermal vents?',
        options: [
          'They would perish if the flow of sulfur-rich geothermal water ceased',
          'They are sensitive to sunlight and only surface at night',
          'They reproduce faster than sunlit coral reef communities',
          'They have developed eyes capable of seeing ultraviolet radiation'
        ],
        answer: 0,
        explanation: 'Karena seluruh rantai makanan bergantung pada kemosintesis hidrogen sulfida panas bumi, jika aliran air sulfur berhenti, organisme tersebut akan mati.'
      }
    ]
  },
  {
    id: 'rp4',
    title: 'Roman Aqueducts and Hydraulic Engineering',
    category: 'Ancient History',
    difficulty: 'Medium',
    passage: `Among the enduring engineering triumphs of antiquity, Roman aqueducts stand preeminent. Between 312 BCE and 226 CE, Roman hydraulic engineers erected eleven major aqueducts to supply the capital with over one million cubic meters of pristine mountain spring water every single day. Rather than relying on mechanical pumps, these systems were driven exclusively by gravity. Engineers meticulously calculated subtle, continuous downward gradients—often dropping as little as twenty centimeters per kilometer over routes spanning dozens of kilometers. To conquer fluctuating terrain, engineers tunneled through solid limestone mountains and constructed monumental arched bridge arcades, such as the Pont du Gard, utilizing waterproof volcanic pozzolana concrete. This continuous torrent provided public fountains, public baths, latrines, and imperial villas with clean running water, safeguarding civic hygiene and urban stability.`,
    questions: [
      {
        id: 'rq13',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily discusses:',
        options: [
          'The social leisure habits in ancient Roman public baths',
          'The engineering principles and civic benefits of Roman aqueducts',
          'The economic costs of quarrying limestone in southern Gaul',
          'Why the Roman empire suffered water scarcity in the third century'
        ],
        answer: 1,
        explanation: 'Teks memaparkan prinsip rekayasa gravitasi aqueduct Romawi dan manfaat higienisnya bagi stabilitas kota.'
      },
      {
        id: 'rq14',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'What was the sole force that propelled water through Roman aqueducts?',
        options: ['Steam engines', 'Water wheels', 'Gravity', 'Windmills'],
        answer: 2,
        explanation: 'Teks menyebutkan: "Rather than relying on mechanical pumps, these systems were driven exclusively by gravity".'
      },
      {
        id: 'rq15',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "meticulously" in the passage is closest in meaning to:',
        options: ['carelessly', 'painstakingly and accurately', 'rapidly', 'intermittently'],
        answer: 1,
        explanation: '"Meticulously" berarti sangat teliti, cermat, dan saksama ("painstakingly and accurately").'
      },
      {
        id: 'rq16',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'Why did Roman engineers calculate such gentle slopes over long distances?',
        options: [
          'To prevent rushing water from eroding conduits while maintaining steady flow',
          'To allow pedestrians to walk atop the enclosed conduits',
          'Because volcanic concrete could only set under dry conditions',
          'To conserve water by slowing down evaporation rates'
        ],
        answer: 0,
        explanation: 'Kemiringan yang sangat landai dihitung secara presisi agar air mengalir stabil secara gravitasi tanpa merusak saluran akibat arus yang terlalu deras.'
      }
    ]
  },
  {
    id: 'rp5',
    title: 'The Enigma of Sleep and Memory Consolidation',
    category: 'Cognitive Psychology',
    difficulty: 'Medium',
    passage: `Sleep was long regarded by early neuroscientists as a passive state of mental dormancy during which the exhausted brain merely rested. Modern neuroimaging and electroencephalogram (EEG) technologies have overturned this simplistic view, revealing that sleep is a dynamic, highly orchestrated neurological process essential for memory consolidation. During slow-wave non-REM sleep, the brain replays newly acquired daytime neural patterns at accelerated speeds. The hippocampus, which serves as a temporary storage buffer for episodic memories, repeatedly transmits these traces to the neocortex for long-term integration. Furthermore, rapid eye movement (REM) sleep facilitates emotional recalibration and abstract associative synthesis, allowing divergent concepts to be linked into creative solutions. Sleep deprivation impairs this synaptic reorganization, significantly diminishing cognitive retention and critical analytical skills.`,
    questions: [
      {
        id: 'rq17',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main idea of the passage?',
        options: [
          'Early neuroscientists had a more accurate understanding of sleep than modern researchers',
          'Sleep is an active neurological phase vital for processing and solidifying memory',
          'The hippocampus is solely responsible for dreaming during REM sleep',
          'Electroencephalograms are unable to distinguish sleep phases'
        ],
        answer: 1,
        explanation: 'Gagasan utama adalah bahwa tidur merupakan fase neurologis yang sangat aktif dan penting untuk konsolidasi memori dan integrasi kognitif.'
      },
      {
        id: 'rq18',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'According to the text, what role does the hippocampus play during slow-wave sleep?',
        options: [
          'It completely shuts down neural activity to conserve energy',
          'It transmits temporary memory traces to the neocortex for permanent storage',
          'It regulates physical body temperature and pulse rate',
          'It prevents emotional memories from forming'
        ],
        answer: 1,
        explanation: 'Teks menyatakan: "The hippocampus, which serves as a temporary storage buffer... repeatedly transmits these traces to the neocortex for long-term integration".'
      },
      {
        id: 'rq19',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        question: 'The word "dormancy" in the first sentence is closest in meaning to:',
        options: ['inactivity', 'excitement', 'hyperactivity', 'cleverness'],
        answer: 0,
        explanation: '"Dormancy" berarti keadaan tidak aktif atau pasif ("inactivity").'
      },
      {
        id: 'rq20',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'Based on the passage, a student who stays awake all night studying for an exam will likely:',
        options: [
          'Remember facts better because the hippocampus had no distractions',
          'Experience difficulty integrating and retaining the information over time',
          'Boost their abstract associative reasoning during test questions',
          'Produce excessive slow-wave brain rhythms while taking the test'
        ],
        answer: 1,
        explanation: 'Kurang tidur merusak reorganisasi sinaptik dan retensi ingatan jangka panjang, sehingga siswa akan kesulitan mengingat dan memproses materi.'
      }
    ]
  },
  {
    id: 'rp6',
    title: 'Desert Plants and Crassulacean Acid Metabolism',
    category: 'Botany',
    difficulty: 'Hard',
    passage: `In arid environments where intense daytime solar radiation triggers fatal moisture loss, vegetation faces a severe physiological dilemma: opening stomata to capture carbon dioxide for photosynthesis inevitably allows precious water vapor to transpire into dry desert air. To circumvent this trade-off, several succulent plant families—most notably Cactaceae and Agavaceae—evolved a specialized biochemical pathway called Crassulacean Acid Metabolism (CAM). Unlike typical plants that open stomata during daylight hours, CAM plants keep their microscopic pores tightly sealed under the scorching sun. At night, when cooler temperatures and elevated relative humidity minimize evaporative stress, stomata open, allowing atmospheric carbon dioxide to enter. The plant converts this gas into four-carbon malic acid and stores it in cellular vacuoles. When the sun rises, the stored organic acid is decarboxylated inside the leaf tissue, supplying carbon dioxide directly to solar-powered photosynthetic enzymes behind closed stomata.`,
    questions: [
      {
        id: 'rq21',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the primary physiological adaptation explained in the passage?',
        options: [
          'How desert succulents collect rainwater through expansive surface roots',
          'How CAM plants prevent moisture loss by fixing carbon dioxide during nighttime',
          'Why non-desert plants avoid producing malic acid',
          'The chemical structure of desert topsoil minerals'
        ],
        answer: 1,
        explanation: 'Teks menjelaskan adaptasi tanaman CAM yang membuka stomata pada malam hari untuk menyerap CO2 guna mencegah kehilangan air di siang hari.'
      },
      {
        id: 'rq22',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'When do CAM plants open their stomatal pores?',
        options: [
          'During the hottest hour of the afternoon',
          'At night when humidity is higher and temperatures are lower',
          'Only when seasonal rainfall is actively falling',
          'Whenever sunlight intensity peaks'
        ],
        answer: 1,
        explanation: 'Teks menyatakan: "At night, when cooler temperatures and elevated relative humidity minimize evaporative stress, stomata open".'
      },
      {
        id: 'rq23',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "circumvent" in the passage is closest in meaning to:',
        options: ['bypass or overcome', 'accelerate', 'exaggerate', 'confirm'],
        answer: 0,
        explanation: '"Circumvent" bermakna mengatasi atau mengakali kendala ("bypass or overcome").'
      },
      {
        id: 'rq24',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What would happen if a desert cactus opened its stomata during a 45°C afternoon?',
        options: [
          'It would double its photosynthetic rate without consequence',
          'It would suffer rapid and potentially fatal dehydration through transpiration',
          'It would store malic acid faster in its vacuoles',
          'Its cellular vacuoles would instantly turn into cellulose'
        ],
        answer: 1,
        explanation: 'Teks menyatakan membuka stomata di siang hari gurun yang terik menyebabkan kehilangan air yang fatal akibat penguapan (transpiration).'
      }
    ]
  },
  {
    id: 'rp7',
    title: 'The Industrial Revolution and Urban Demographics',
    category: 'History',
    difficulty: 'Medium',
    passage: `The advent of mechanized manufacturing in late eighteenth-century Britain spurred a demographic reallocation unprecedented in human history. Prior to the widespread adoption of James Watt’s steam engine, agrarian settlements were widely dispersed across rural valleys, anchored by seasonal crop yields and cottage handicrafts. Steam engines, however, liberated textile looms and coal-fired iron foundries from mandatory placement beside cascading watercourses. Factories clustered around rich coal basins and rail depots, giving rise to sprawling industrial hubs like Manchester and Birmingham. Millions of dispossessed rural laborers migrated toward these emerging manufacturing centers in search of wage employment. While mechanization precipitated a tenfold expansion in national economic productivity, early urban factory workers endured squalid living quarters, unventilated tenements, and polluted waterways before comprehensive municipal sanitations laws were enacted.`,
    questions: [
      {
        id: 'rq25',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'Which of the following best describes the main thesis of the passage?',
        options: [
          'Agricultural techniques in eighteenth-century Britain remained primitive',
          'Steam-powered mechanization drove widespread rural-to-urban migration and social change',
          'Water wheels were more dependable than Watt’s coal-fired steam engines',
          'Manchester was the only city affected by the Industrial Revolution'
        ],
        answer: 1,
        explanation: 'Teks menjelaskan bagaimana mekanisasi bertenaga uap memicu pergeseran demografi besar-besaran dari desa ke kota industri serta dampak sosialnya.'
      },
      {
        id: 'rq26',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'According to the passage, what advantage did steam engines have over earlier power sources?',
        options: [
          'They produced no toxic soot or atmospheric emissions',
          'They allowed factories to be built away from flowing rivers',
          'They were inexpensive to build and required no maintenance',
          'They eliminated the need for manual human labor entirely'
        ],
        answer: 1,
        explanation: 'Teks menyatakan: "Steam engines, however, liberated textile looms... from mandatory placement beside cascading watercourses".'
      },
      {
        id: 'rq27',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "dispersed" in the first paragraph is closest in meaning to:',
        options: ['scattered', 'crowded', 'industrialized', 'submerged'],
        answer: 0,
        explanation: '"Dispersed" berarti tersebar luas di berbagai penjuru ("scattered").'
      },
      {
        id: 'rq28',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'It can be inferred from the passage that early industrial city dwellers:',
        options: [
          'Enjoyed immediate access to modern sanitary plumbing',
          'Faced severe health hazards due to overcrowding and lack of civic infrastructure',
          'Refused to work for monetary wages in textile factories',
          'Quickly returned to rural farming within a few months'
        ],
        answer: 1,
        explanation: 'Pekerja awal harus bertahan di lingkungan kumuh ("squalid living quarters, unventilated tenements") sebelum undang-undang sanitasi publik disahkan.'
      }
    ]
  },
  {
    id: 'rp8',
    title: 'Continental Drift and Seafloor Spreading',
    category: 'Geology',
    difficulty: 'Hard',
    passage: `When German meteorologist Alfred Wegener proposed the continental drift hypothesis in 1912, he posited that Earth’s contemporary landmasses once formed a contiguous supercontinent, Pangaea. Wegener cited geological rock strata matches across the Atlantic and identical Permian fossil ferns found in South America, Africa, and Antarctica. Nevertheless, the orthodox geological establishment roundly rejected his thesis because Wegener could not explain a plausible physical mechanism capable of propelling colossal continents through solid ocean crust. Vindication arrived half a century later with the advent of post-war sonar bathymetry and paleomagnetism. Marine geologists discovered the global mid-ocean ridge system, where convective upwelling in the mantle forces tectonic plates apart, generating new basaltic crust. Alternating symmetrical bands of magnetic polarity preserved in cooling seafloor lava provided incontrovertible evidence of seafloor spreading, transforming Wegener's speculation into the unifying foundation of plate tectonics.`,
    questions: [
      {
        id: 'rq29',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'How Wegener proved his theory during his 1912 presentation',
          'The historical progression from the continental drift hypothesis to plate tectonics',
          'The chemical properties of basaltic oceanic crust',
          'The extinction of Permian fossil ferns across Pangaea'
        ],
        answer: 1,
        explanation: 'Teks menguraikan perjalanan sejarah ilmiah mulai dari hipotesis Wegener yang sempat ditolak hingga akhirnya terbukti lewat bukti pemekaran dasar laut (seafloor spreading).'
      },
      {
        id: 'rq30',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'Why did the scientific establishment initially reject Wegener’s continental drift hypothesis?',
        options: [
          'His fossil fern classifications were proven fraudulent',
          'He was unable to identify a mechanism that could move massive landmasses',
          'Sonar scans had already mapped the entire Atlantic seabed',
          'He refused to publish his findings in peer-reviewed journals'
        ],
        answer: 1,
        explanation: 'Teks menyatakan: "the orthodox geological establishment roundly rejected his thesis because Wegener could not explain a plausible physical mechanism capable of propelling colossal continents".'
      },
      {
        id: 'rq31',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Hard',
        question: 'The word "incontrovertible" in the passage is closest in meaning to:',
        options: ['indisputable', 'questionable', 'temporary', 'theoretical'],
        answer: 0,
        explanation: '"Incontrovertible" berarti tak terbantahkan, mutlak sahih ("indisputable").'
      },
      {
        id: 'rq32',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What role did magnetic polarity bands in seafloor basalt play in geological science?',
        options: [
          'They disproved that Earth ever had a magnetic field',
          'They demonstrated that the ocean floor is continuously created and spreads outward over time',
          'They prevented continents from moving any further',
          'They demonstrated that volcanic lava cools faster at high latitudes'
        ],
        answer: 1,
        explanation: 'Pita magnetik simetris di dasar laut membuktikan bahwa kerak samudra baru terus terbentuk dan bergerak memisah (seafloor spreading).'
      }
    ]
  },
  {
    id: 'rp9',
    title: 'The Decipherment of the Rosetta Stone',
    category: 'Archaeology',
    difficulty: 'Medium',
    passage: `For more than a millennium following the closure of pagan Egyptian temples by Byzantine decree, the hieroglyphic inscriptions covering pharaonic pyramids and obelisks remained an indecipherable enigma. Renaissance scholars mistakenly assumed that hieroglyphs were purely mystical allegories lacking any phonetic relationship to spoken language. This longstanding impasse was broken following the discovery of the Rosetta Stone by Napoleon’s expeditionary soldiers in the Nile delta town of Rashid in 1799. Carved in 196 BCE, the dark granodiorite slab displayed an identical royal decree inscribed in three distinct scripts: formal Egyptian hieroglyphic, everyday demotic Egyptian, and ancient Greek. Because scholars were fully fluent in ancient Greek, the stele provided a bilingual cipher key. French polymath Jean-François Champollion demonstrated in 1822 that royal names, such as Ptolemy and Cleopatra, were spelled phonetically inside oval cartouches, unlocking centuries of lost dynastic literature.`,
    questions: [
      {
        id: 'rq33',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage is primarily concerned with:',
        options: [
          'Napoleon’s military strategies in the Nile delta',
          'How the Rosetta Stone allowed scholars to decipher Egyptian hieroglyphs',
          'The architectural techniques used to erect pharaonic obelisks',
          'The religious decrees enacted by Byzantine emperors'
        ],
        answer: 1,
        explanation: 'Teks fokus pada bagaimana penemuan Batu Rosetta membuka kunci penerjemahan huruf hieroglif Mesir kuno.'
      },
      {
        id: 'rq34',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'Why was ancient Greek crucial to the decipherment process?',
        options: [
          'It was the only script carved inside oval cartouches',
          'Scholars already understood Greek, so it served as a reference translation',
          'Greek was simpler to read than demotic Egyptian',
          'The Greek text had been preserved on papyrus scrolls'
        ],
        answer: 1,
        explanation: 'Teks menyatakan karena para sarjana sudah fasih membaca bahasa Yunani kuno, teks Yunani berfungsi sebagai kunci pembanding dwibahasa.'
      },
      {
        id: 'rq35',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "impasse" in the passage is closest in meaning to:',
        options: ['deadlock or standstill', 'breakthrough', 'argument', 'discovery'],
        answer: 0,
        explanation: '"Impasse" berarti kebuntuan tanpa kemajuan ("deadlock or standstill").'
      },
      {
        id: 'rq36',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'What misconception did Renaissance scholars have about hieroglyphs?',
        options: [
          'They thought hieroglyphs were introduced by ancient Greek travelers',
          'They believed the symbols represented allegorical ideas rather than sounds',
          'They assumed hieroglyphs were carved only by common laborers',
          'They believed hieroglyphs could only be deciphered by Byzantine priests'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan: "Renaissance scholars mistakenly assumed that hieroglyphs were purely mystical allegories lacking any phonetic relationship to spoken language".'
      }
    ]
  },
  {
    id: 'rp10',
    title: 'Coral Bleaching and Marine Heatwaves',
    category: 'Marine Ecology',
    difficulty: 'Medium',
    passage: `Reef-building stony corals are colonial animals that rely upon an obligate mutualistic symbiosis with microscopic photosynthetic dinoflagellates known as zooxanthellae. Residing inside coral polyp gastrodermal tissues, these microscopic algae convert sunlight into glycerol, amino acids, and glucose, supplying up to ninety percent of the host coral's daily metabolic energy requirements. In return, the coral polyp provides the algae with sheltering calcium carbonate skeletons and inorganic metabolic byproducts like ammonium and phosphate. However, this partnership is exceptionally sensitive to thermal fluctuations. When prolonged marine heatwaves elevate seawater temperatures by merely one to two degrees Celsius above summer baselines, the photosynthetic machinery of zooxanthellae destabilizes, producing toxic reactive oxygen species. To safeguard itself from cellular toxicity, the coral expels the algae, losing its vibrant coloration and exposing its translucent white calcium skeleton—a crisis known as coral bleaching. Without their algal partners, corals starve and succumb rapidly to infectious disease unless sea temperatures normalize promptly.`,
    questions: [
      {
        id: 'rq37',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The commercial value of ornamental coral jewelry',
          'The physiological causes and consequences of coral bleaching',
          'The chemical composition of calcium carbonate skeletons',
          'Methods for culturing dinoflagellates in marine aquariums'
        ],
        answer: 1,
        explanation: 'Teks menjelaskan mekanisme fisiologis kemitraan karang dengan alga serta penyebab dan akibat dari pemutihan karang (coral bleaching).'
      },
      {
        id: 'rq38',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What triggers corals to expel their symbiotic zooxanthellae?',
        options: [
          'A shortage of calcium carbonate in ocean water',
          'Toxic reactive oxygen molecules produced by algae under elevated heat',
          'Predation by crown-of-thorns starfish',
          'A sudden drop in ambient salinity'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan saat air memanas, fotosintesis alga terganggu dan memproduksi "toxic reactive oxygen species", sehingga karang mengeluarkannya demi bertahan hidup.'
      },
      {
        id: 'rq39',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "expels" in the passage is closest in meaning to:',
        options: ['absorbs', 'ejects or discharges', 'nourishes', 'replaces'],
        answer: 1,
        explanation: '"Expels" bermakna mengeluarkan atau mendepak ("ejects or discharges").'
      },
      {
        id: 'rq40',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What can be inferred about bleached corals if ambient ocean temperatures return to normal quickly?',
        options: [
          'They may reacquire zooxanthellae and recover over time',
          'They will permanently lose the ability to deposit calcium carbonate',
          'They immediately transform into deep-sea cold-water species',
          'They can no longer produce ammonium or phosphate'
        ],
        answer: 0,
        explanation: 'Kalimat terakhir menyebutkan karang akan mati kelaparan "unless sea temperatures normalize promptly", menyiratkan bahwa jika suhu lekas normal, karang dapat pulih kembali.'
      }
    ]
  },
  {
    id: 'rp11',
    title: 'Atmospheric Physics of Cloud Formation',
    category: 'Meteorology',
    difficulty: 'Medium',
    passage: `Clouds are not amorphous collections of water vapor; water vapor is an invisible gas. Rather, visible clouds comprise billions of microscopic liquid water droplets or crystalline ice flakes suspended in the troposphere. The genesis of any cloud requires two fundamental meteorological conditions: atmospheric saturation and microscopic condensation nuclei. As warm air parcels rise—whether pushed upward by solar heating, colliding weather fronts, or mountainous terrain—they encounter diminishing barometric pressure and expand adiabatically. This expansion causes the parcel to cool without exchanging thermal heat with surroundings. When the air temperature cools to its dew point, relative humidity reaches one hundred percent. However, pure water vapor cannot condense into droplets easily without a substrate. Microscopic aerosols—such as volcanic ash, oceanic sea-salt sprays, and smoke particles—serve as cloud condensation nuclei, offering nucleation surfaces upon which vapor molecules coalesce into visible clouds.`,
    questions: [
      {
        id: 'rq41',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily explains:',
        options: [
          'How different cloud types predict impending rainfall',
          'The physical mechanisms that create visible clouds in the atmosphere',
          'The dangers of flying through high-altitude ice flakes',
          'Why mountain ranges experience lower relative humidity'
        ],
        answer: 1,
        explanation: 'Teks menerangkan mekanisme fisika di balik pembentukan awan (pendinginan adiabatik dan inti kondensasi).'
      },
      {
        id: 'rq42',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'What role do microscopic aerosols such as sea-salt sprays play in cloud formation?',
        options: [
          'They absorb extra solar radiation to warm the air',
          'They act as condensation nuclei for water vapor molecules',
          'They prevent clouds from forming during cold fronts',
          'They dissolve ice crystals back into gas'
        ],
        answer: 1,
        explanation: 'Aerosol mikro berfungsi sebagai "cloud condensation nuclei" (inti kondensasi) tempat molekul uap air menempel dan berkondensasi.'
      },
      {
        id: 'rq43',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "coalesce" in the passage is closest in meaning to:',
        options: ['evaporate', 'merge and come together', 'scatter', 'freeze'],
        answer: 1,
        explanation: '"Coalesce" berarti menyatu atau bergabung bersama ("merge and come together").'
      },
      {
        id: 'rq44',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What would happen to rising warm air in an atmosphere completely devoid of microscopic particles?',
        options: [
          'Clouds would form at much lower altitudes',
          'Water vapor would struggle to condense even after reaching saturation',
          'The air parcel would contract rather than expand',
          'The dew point would increase above 100 degrees Celsius'
        ],
        answer: 1,
        explanation: 'Teks menyatakan uap air murni tidak dapat berkondensasi tanpa adanya permukaan inti partikel (nuclei).'
      }
    ]
  },
  {
    id: 'rp12',
    title: 'Vocal Learning in Songbirds',
    category: 'Animal Behavior',
    difficulty: 'Medium',
    passage: `While the vast majority of vertebrate vocalizations are genetically pre-programmed and reflexive, true vocal learning—the capacity to modify vocal outputs based upon acoustic sensory experience—is an exceedingly rare evolutionary adaptation. Among non-human vertebrates, it is most exquisitely manifested in songbirds (order Passeriformes). Young songbirds undergo a two-phase developmental trajectory that mirrors human language acquisition. During the early sensory phase, nestlings listen attentively to songs vocalized by adult male tutors, memorizing the acoustic template in specialized auditory neural clusters. Weeks later, during the sensorimotor phase, the fledgling begins babbling rudimentary vocalizations called "subsong." By comparing its own auditory feedback with the stored adult tutor memory, the young bird progressively refines its pitch, tempo, and syntax through trial-and-error motor practice until its mature breeding song crystallizes.`,
    questions: [
      {
        id: 'rq45',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main subject of the passage?',
        options: [
          'The migratory patterns of Passeriformes songbirds',
          'The process through which songbirds acquire vocal skills through learning',
          'How genetic mutations alter avian courtship plumage',
          'Why female songbirds rarely sing during mating seasons'
        ],
        answer: 1,
        explanation: 'Teks menjelaskan bagaimana burung pengicau mempelajari kicauan secara bertahap melalui pengalaman pendengaran dan latihan motorik.'
      },
      {
        id: 'rq46',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What happens during the sensorimotor phase of songbird development?',
        options: [
          'Nestlings only listen passively to adult songs without singing',
          'Fledglings practice singing rudimentary subsongs and refine them through auditory feedback',
          'Adult tutors migrate away to forage in separate territories',
          'Birds lose the ability to hear acoustic frequencies'
        ],
        answer: 1,
        explanation: 'Pada fase sensorimotor, burung muda berceloteh ("subsong") dan menyempurnakan nada dan ritmenya lewat umpan balik pendengaran.'
      },
      {
        id: 'rq47',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        question: 'The word "rudimentary" in the passage is closest in meaning to:',
        options: ['advanced', 'basic or primitive', 'melodic', 'aggressive'],
        answer: 1,
        explanation: '"Rudimentary" berarti dasar, belum sempurna, atau sederhana ("basic or primitive").'
      },
      {
        id: 'rq48',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'It can be inferred from the passage that a songbird deafened after the sensory phase would:',
        options: [
          'Sing a flawless adult song immediately',
          'Fail to crystallize a normal mature song because it cannot compare its own sounds to memory',
          'Lay eggs without constructing a nest',
          'Never produce any sound whatsoever'
        ],
        answer: 1,
        explanation: 'Karena penyempurnaan kicauan membutuhkan perbandingan suara sendiri dengan memori melalui pendengaran ("auditory feedback"), burung yang tuli tidak akan bisa menyelaraskan lagunya.'
      }
    ]
  },
  {
    id: 'rp13',
    title: 'The Agricultural Transition in the Fertile Crescent',
    category: 'Anthropology',
    difficulty: 'Hard',
    passage: `Approximately twelve thousand years ago, human societies in the Fertile Crescent embarked upon the Neolithic Revolution, transitioning from mobile foraging to sedentary agrarianism. For millennia, paleolithic bands subsisted on seasonal game hunting and wild seed gathering. However, post-glacial climatic fluctuations combined with rising population densities necessitated innovative subsistence strategies. Early sedentary groups settled in perennial villages near permanent watercourses, systematically cultivating wild progenitors of emmer wheat, barley, lentils, and chickpeas. Concurrently, they domesticated wild sheep, goats, and cattle. While this agrarian transition fostered monumental cultural innovations—such as ceramic storage vessels, astronomical calendars, and stratified civic architecture—paleopathological analysis of human skeletal remains reveals an intriguing paradox: early farmers exhibited higher rates of nutritional deficiencies, dental caries, infectious diseases, and repetitive stress arthritis than their hunter-gatherer forebears.`,
    questions: [
      {
        id: 'rq49',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'Which of the following best summarizes the passage?',
        options: [
          'Hunter-gatherers suffered more malnutrition than early farmers',
          'The transition to agriculture sparked major cultural advances but also brought health challenges',
          'Wild sheep were the first animals domesticated in Europe',
          'Ceramic vessels were used to trade wheat across the Mediterranean'
        ],
        answer: 1,
        explanation: 'Teks merangkum revolusi pertanian di Hilal Subur yang mendorong peradaban namun juga menimbulkan paradoks masalah kesehatan pada petani awal.'
      },
      {
        id: 'rq50',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'According to paleopathological skeletal studies, early agriculturalists suffered from:',
        options: [
          'Fewer infectious diseases than hunter-gatherers',
          'Higher rates of dental cavities, malnutrition, and arthritis',
          'Significant increases in average adult physical stature',
          'Rapid loss of bone mineral density due to lack of movement'
        ],
        answer: 1,
        explanation: 'Analisis kerangka menunjukkan petani awal mengalami angka kekurangan gizi, karies gigi, dan artritis yang lebih tinggi.'
      },
      {
        id: 'rq51',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "progenitors" in the passage is closest in meaning to:',
        options: ['ancestors or early forms', 'pests', 'harvests', 'substitutes'],
        answer: 0,
        explanation: '"Progenitors" berarti nenek moyang atau bentuk purba cikal bakal ("ancestors or early forms").'
      },
      {
        id: 'rq52',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'Why did early farmers develop dental caries more frequently than hunter-gatherers?',
        options: [
          'They stopped drinking fresh river water',
          'Their diet became heavily reliant on carbohydrate-rich domesticated cereals',
          'Wild game animals contained natural dental protectants',
          'They cooked their food using lead-based utensils'
        ],
        answer: 1,
        explanation: 'Ketergantungan baru pada biji-bijian sereal berkabohidrat tinggi (gandum dan jelai) memicu fermentasi asam bakteri mulut yang menyebabkan gigi berlubang (dental caries).'
      }
    ]
  },
  {
    id: 'rp14',
    title: 'Biomimetic Architecture and Passive Cooling',
    category: 'Architecture',
    difficulty: 'Medium',
    passage: `Faced with escalating urban energy demands for climate control, contemporary architects are increasingly turning to biomimicry—the practice of emulating biological designs perfected by millions of years of natural selection. A celebrated landmark of biomimetic engineering is the Eastgate Centre, a mid-rise office and shopping complex located in Harare, Zimbabwe. Designed by architect Mick Pearce, the building consumes ninety percent less energy for thermal regulation than conventional steel-and-glass structures of comparable scale. Pearce drew inspiration from the towering subterranean mound architecture constructed by indigenous macrotermes termites. These termites maintain an unwavering nest temperature of approximately thirty degrees Celsius while ambient exterior temperatures swing violently from below freezing to well over forty degrees. Pearce incorporated a labyrinth of low-level air intake ducts, porous masonry heat sinks, and high vertical rooftop chimneys that leverage natural convection buoyancy currents to flush out warm air during night flushes without mechanical air conditioning.`,
    questions: [
      {
        id: 'rq53',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The social caste system of African macrotermes termites',
          'How biomimetic principles inspired by termite mounds achieve passive cooling in buildings',
          'The economic costs of imported mechanical air conditioners in Zimbabwe',
          'Techniques for recycling glass and steel in modern architecture'
        ],
        answer: 1,
        explanation: 'Teks berfokus pada penerapan biomimikri sarang rayap pada gedung Eastgate Centre untuk pendinginan pasif hemat energi.'
      },
      {
        id: 'rq54',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'How much energy does the Eastgate Centre save compared to traditional structures?',
        options: ['Ten percent', 'Fifty percent', 'Ninety percent', 'One hundred percent'],
        answer: 2,
        explanation: 'Teks menyebutkan gedung tersebut mengonsumsi 90% lebih sedikit energi ("consumes ninety percent less energy").'
      },
      {
        id: 'rq55',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "unwavering" in the passage is closest in meaning to:',
        options: ['fluctuating', 'steady and constant', 'unpredictable', 'excessive'],
        answer: 1,
        explanation: '"Unwavering" bermakna stabil, ajek, tidak goyah/berubah ("steady and constant").'
      },
      {
        id: 'rq56',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'The Eastgate Centre cools its interior without air conditioning primarily by:',
        options: [
          'Pumping freezing water from deep artesian wells',
          'Utilizing natural thermal convection through chimneys and masonry heat sinks',
          'Planting living cactus gardens across the external walls',
          'Keeping all windows sealed shut day and night'
        ],
        answer: 1,
        explanation: 'Gedung memanfaatkan sirkulasi konveksi udara alami melalui cerobong dan dinding penahan panas termal.'
      }
    ]
  },
  {
    id: 'rp15',
    title: 'Exoplanet Detection via the Transit Method',
    category: 'Astrophysics',
    difficulty: 'Medium',
    passage: `Until the mid-1990s, humanity could only speculate whether planetary systems existed beyond our solitary solar system. Today, astrophysicists have confirmed thousands of exoplanets orbiting distant stars, largely attributable to the photometric transit method. When an exoplanet’s orbital plane happens to align edge-on with our line of sight, the planet passes directly between its host star and the observing telescope. During this transit, the opaque planetary disk blocks a minuscule fraction of stellar light—typically between 0.01 percent for rocky terrestrial planets and 1 percent for gaseous Jovian worlds. High-precision space observatories, such as NASA's Kepler and TESS missions, record these periodic dips in stellar luminosity over multiple orbital cycles. By measuring the duration and depth of the light dip, astronomers can compute the exoplanet's physical radius, orbital period, and average distance from its host star with remarkable precision.`,
    questions: [
      {
        id: 'rq57',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily describes:',
        options: [
          'The chemical composition of planetary atmospheres in the Milky Way',
          'How the transit method detects exoplanets by measuring dips in starlight',
          'The construction of optical lenses for the Kepler telescope',
          'Why most stars in our galaxy lack planetary systems'
        ],
        answer: 1,
        explanation: 'Teks menerangkan prinsip metode transit fotometrik dalam mendeteksi eksoplanet melalui pengukuran penurunan intensitas cahaya bintang.'
      },
      {
        id: 'rq58',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'What happens to a star’s apparent light when an exoplanet transits in front of it?',
        options: [
          'It flares up brightly',
          'It dips slightly by a tiny fraction of a percent',
          'It shifts permanently from yellow to blue',
          'It is extinguished for several days'
        ],
        answer: 1,
        explanation: 'Planet yang melintas menghalangi sebagian kecil cahaya bintang, menyebabkan penurunan teratur intensitas cahaya ("dips in stellar luminosity").'
      },
      {
        id: 'rq59',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        question: 'The word "minuscule" in the passage is closest in meaning to:',
        options: ['massive', 'extremely small', 'colorful', 'dangerous'],
        answer: 1,
        explanation: '"Minuscule" berarti sangat kecil ("extremely small").'
      },
      {
        id: 'rq60',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'Why does the transit method fail to detect planets whose orbital planes are tilted perpendicular to Earth’s view?',
        options: [
          'The planets move too fast to be observed',
          'The planets never pass directly between their star and our telescopes',
          'The planets emit too much infrared radiation',
          'Their host stars become too bright to photograph'
        ],
        answer: 1,
        explanation: 'Metode transit menuntut orientasi orbit sejajar dengan garis pandang pengamat; jika tegak lurus, planet tidak akan pernah melintas di depan piringan bintang.'
      }
    ]
  },
  {
    id: 'rp16',
    title: 'The Gutenberg Press and the Print Revolution',
    category: 'Media History',
    difficulty: 'Medium',
    passage: `In mid-fifteenth-century Mainz, Germany, goldsmith Johannes Gutenberg synthesized several existing technologies—including screw presses used for pressing olives and oil-based inks—with a transformative invention of his own: movable metal type. Prior to Gutenberg's innovation, books across Europe were hand-copied by monastic scribes on calfskin vellum, a labor-intensive process that made manuscripts extraordinarily rare and restricted to ecclesiastical elites and wealthy aristocrats. Gutenberg devised durable, reusable type pieces cast from an alloy of lead, tin, and antimony that melted at low temperatures yet withstood repetitive stamping without deforming. By dramatically reducing the cost and production time of books, movable type catalyzed the rapid democratization of literacy. Within several decades, printing workshops sprang up in every major European capital, accelerating the dissemination of scientific inquiry, religious discourse during the Reformation, and vernacular literature.`,
    questions: [
      {
        id: 'rq61',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The religious doctrines of monastic scribes in Germany',
          'Gutenberg’s invention of movable metal type and its profound cultural consequences',
          'The economic trade routes between Mainz and Italian ports',
          'Techniques for harvesting olive oil in the fifteenth century'
        ],
        answer: 1,
        explanation: 'Teks berfokus pada penemuan mesin cetak huruf logam bergerak oleh Gutenberg dan dampaknya terhadap demokratisasi ilmu dan literasi.'
      },
      {
        id: 'rq62',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What special property did Gutenberg’s metal alloy have?',
        options: [
          'It was made of pure gold and silver',
          'It melted at low temperatures while resisting deformation during stamping',
          'It dissolved completely in oil-based inks',
          'It was lighter than wooden blocks'
        ],
        answer: 1,
        explanation: 'Teks menyatakan paduan logam tersebut mencair pada suhu rendah namun tahan tempa berulang kali tanpa berubah bentuk.'
      },
      {
        id: 'rq63',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "dissemination" in the passage is closest in meaning to:',
        options: ['suppression', 'spreading or distribution', 'destruction', 'translation'],
        answer: 1,
        explanation: '"Dissemination" berarti penyebaran atau distribusi luas ("spreading or distribution").'
      },
      {
        id: 'rq64',
        section: 'Reading',
        topic: 'Negative Factual',
        difficulty: 'Medium',
        question: 'According to the passage, all of the following were accelerated by printing EXCEPT:',
        options: [
          'Vernacular literature written in local tongues',
          'Scientific inquiry and communication',
          'The monastic monopoly over handwritten book reproduction',
          'Religious discourse during the Reformation'
        ],
        answer: 2,
        explanation: 'Mesin cetak justru meruntuhkan monopoli kaum biarawan/gereja atas naskah tulisan tangan, bukan mempercepat monopoli tersebut.'
      }
    ]
  },
  {
    id: 'rp17',
    title: 'Groundwater Depletion in Global Aquifers',
    category: 'Hydrology',
    difficulty: 'Hard',
    passage: `Subterranean aquifers contain over ninety-eight percent of the unfrozen liquid freshwater accessible on Earth, sustaining billions of people and irrigating roughly forty percent of global agriculture. However, the advent of high-capacity diesel and electric submersible pumps during the mid-twentieth century initiated an unsustainable era of groundwater mining. In arid agricultural breadbaskets—such as the Ogallala Aquifer beneath the American Great Plains and the Indo-Gangetic Basin in northern India—pumping extraction rates vastly outpace natural meteoric replenishment. Much of this water represents "fossil groundwater," recharged tens of thousands of years ago during prehistoric pluvial epochs. As aquifer water tables plummet by several meters annually, peripheral river channels desiccate, pumping energy costs skyrocket, and the compaction of emptied sediment pores causes permanent land subsidence that irrevocably diminishes future aquifer storage capacity.`,
    questions: [
      {
        id: 'rq65',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily focuses on:',
        options: [
          'Techniques for desalinating ocean water for agricultural use',
          'The causes and environmental perils of unsustainable groundwater extraction',
          'The economic advantages of planting wheat on the Great Plains',
          'How prehistoric pluvial epochs created glacial ice sheets'
        ],
        answer: 1,
        explanation: 'Teks membahas eksploitasi air tanah yang tidak berkelanjutan, penyebabnya lewat pompa modern, dan bahaya lingkungan yang ditimbulkan.'
      },
      {
        id: 'rq66',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What is "fossil groundwater" as described in the text?',
        options: [
          'Water that has turned into solid petroleum',
          'Ancient water recharged millennia ago that is not easily replenished today',
          'Water contaminated by decaying fossil skeletons',
          'Water frozen in deep permafrost fissures'
        ],
        answer: 1,
        explanation: 'Fossil groundwater adalah cadangan air purba yang terisi kembali puluhan ribu tahun lalu dan tidak mudah terisi kembali di zaman modern.'
      },
      {
        id: 'rq67',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Hard',
        question: 'The word "desiccate" in the passage is closest in meaning to:',
        options: ['overflow with mud', 'dry up completely', 'freeze solid', 'accelerate speed'],
        answer: 1,
        explanation: '"Desiccate" bermakna mengering sepenuhnya ("dry up completely").'
      },
      {
        id: 'rq68',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'Why does sediment compaction caused by over-pumping represent a permanent problem?',
        options: [
          'It turns groundwater into toxic heavy metals',
          'The collapsed porous spaces in the ground can never hold as much water again even if it rains',
          'It prevents diesel pumps from reaching the bedrock',
          'It causes global sea levels to drop rapidly'
        ],
        answer: 1,
        explanation: 'Pemadatan pori-pori tanah (subsidence) memusnahkan ruang penampung air tanah secara permanen ("irrevocably diminishes future aquifer storage capacity").'
      }
    ]
  },
  {
    id: 'rp18',
    title: 'Echolocation Systems in Microbats',
    category: 'Evolutionary Biology',
    difficulty: 'Medium',
    passage: `Insectivorous microbats navigate and intercept fast-flying prey in complete nocturnal darkness by employing an organic acoustic targeting system known as biosonar or echolocation. While flying at high velocity, the bat emits rapid ultrasonic pulses from its larynx or specialized nose-leaf structures, with frequencies typically ranging between twenty and one hundred kilohertz—well above the upper auditory threshold of the human ear. When these high-frequency sound waves strike surrounding physical targets, such as hovering moths or tree branches, minute echoes bounce back to the bat's enlarged, highly sensitive external ears. Specialized auditory neural circuits in the bat's brain analyze the time delay, frequency Doppler shift, and amplitude modulation of returning echoes. In fractions of a millisecond, the animal calculates the prey’s distance, flight trajectory, velocity, and even the texture of the insect's wings.`,
    questions: [
      {
        id: 'rq69',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage is primarily about:',
        options: [
          'Why moths have developed ears to evade predators',
          'How microbats utilize echolocation to navigate and hunt in the dark',
          'The difference between bird feathers and bat wings',
          'The evolutionary relationship between megabats and microbats'
        ],
        answer: 1,
        explanation: 'Teks menguraikan mekanisme biosonar ekolokasi pada kelelawar microbat untuk bernavigasi dan menangkap mangsa di kegelapan malam.'
      },
      {
        id: 'rq70',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Easy',
        question: 'Why are the echolocation pulses of microbats inaudible to human ears?',
        options: [
          'They are emitted at frequencies far above normal human hearing thresholds',
          'They are absorbed completely by tree leaves',
          'Bats only click their tongues while whispering',
          'The sounds travel exclusively underwater'
        ],
        answer: 0,
        explanation: 'Frekuensi ultrasonik kelelawar (20-100 kHz) berada jauh di atas batas pendengaran manusia (maksimum ~20 kHz).'
      },
      {
        id: 'rq71',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "intercept" in the first sentence is closest in meaning to:',
        options: ['capture or cut off', 'flee from', 'feed offspring', 'mate with'],
        answer: 0,
        explanation: '"Intercept" bermakna menyergap atau menghadang di tengah jalan ("capture or cut off").'
      },
      {
        id: 'rq72',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'How does a microbat detect whether a moth is flying toward it or away from it?',
        options: [
          'By the scent particles emitted by the moth',
          'By analyzing the Doppler shift in the returning echo’s sound frequency',
          'By turning its head backward in flight',
          'By feeling changes in air pressure on its tail'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan kelelawar menganalisis "frequency Doppler shift", yaitu perubahan frekuensi pantulan yang menunjukkan apakah mangsa mendekat atau menjauh.'
      }
    ]
  },
  {
    id: 'rp19',
    title: 'Linear Perspective in Renaissance Painting',
    category: 'Art History',
    difficulty: 'Medium',
    passage: `During the European Middle Ages, visual art was dominated by hierarchical and symbolic aesthetics. Painters depicted figures according to spiritual significance rather than realistic optical proportions; sacred monarchs and divine deities were rendered deliberately larger than attending courtiers, while architectural backdrops appeared flat and two-dimensional. This paradigm underwent a profound transformation during the Italian Renaissance with the formal codification of linear perspective by architect Filippo Brunelleschi in early fifteenth-century Florence. Brunelleschi formulated a geometric optical system based upon a single vanishing point positioned on a horizontal line at the viewer's eye level. Orthogonal lines converged systematically toward this central vanishing point, creating an illusion of realistic three-dimensional depth on a flat wooden panel or plaster wall. Renaissance masters like Masaccio, Leonardo da Vinci, and Raphael embraced this mathematical realism, forever altering the course of Western visual culture.`,
    questions: [
      {
        id: 'rq73',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The theological symbolism of medieval religious icons',
          'The introduction of linear perspective and its impact on Renaissance art',
          'The chemical recipes of tempera paints used in Florence',
          'Architectural blueprints for the Florence Cathedral dome'
        ],
        answer: 1,
        explanation: 'Teks membahas pergeseran dari seni abad pertengahan yang datar ke penggunaan perspektif linear geometris pada era Renaisans.'
      },
      {
        id: 'rq74',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'How did medieval painters represent the spiritual importance of figures?',
        options: [
          'By painting them using only monochrome gray pigments',
          'By depicting significant figures much larger in scale than others',
          'By placing them on realistic receding orthogonal lines',
          'By framing them inside mathematical vanishing points'
        ],
        answer: 1,
        explanation: 'Teks menyatakan pelukis abad pertengahan melukis tokoh suci secara sengaja lebih besar ("deliberately larger") dibanding figur lainnya.'
      },
      {
        id: 'rq75',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "converged" in the passage is closest in meaning to:',
        options: ['diverged away', 'met at a common point', 'disappeared entirely', 'widened'],
        answer: 1,
        explanation: '"Converged" berarti memusat dan bertemu di satu titik temu ("met at a common point").'
      },
      {
        id: 'rq76',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'Which of the following would be an essential feature of a painting utilizing Brunelleschi’s linear perspective?',
        options: [
          'Objects of identical size appear progressively smaller as they approach the horizon',
          'All figures are painted with equal proportions regardless of distance',
          'Absence of any visible horizon line',
          'Multiple random vanishing points located across every corner'
        ],
        answer: 0,
        explanation: 'Dalam perspektif linear, benda-benda berukuran sama tampak semakin mengecil saat mendekati titik hilang di garis cakrawala.'
      }
    ]
  },
  {
    id: 'rp20',
    title: 'Volcanic Eruptions and Global Climate Modulation',
    category: 'Volcanology',
    difficulty: 'Hard',
    passage: `While volcanic eruptions are primarily dreaded for their immediate localized destruction—such as pyroclastic flows, toxic gas surges, and lahars—exceptionally explosive eruptions exert a profound, multi-year impact upon global climatic systems. When Plinian eruptions, such as Mount Tambora in 1815 or Mount Pinatubo in 1991, inject millions of tons of sulfur dioxide gas directly into the stratosphere, an aerosol blanket forms. Rather than falling out quickly like heavy silicate ash, Stratospheric sulfur dioxide reacts with water vapor to generate microscopic sulfate aerosols. These reflective droplets remain suspended in the upper atmosphere for two to three years, scattering incoming solar radiation back into space. The resulting reduction in solar irradiance cools Earth's surface significantly. The 1815 eruption of Tambora lowered northern hemisphere temperatures by over one degree Celsius, causing the infamous "Year Without a Summer" in 1816, marked by widespread crop failures, late frosts in July, and global food crises.`,
    questions: [
      {
        id: 'rq77',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily explains:',
        options: [
          'How local rescue workers predict volcanic mudslides',
          'How stratospheric sulfate aerosols from volcanic eruptions cool global climate',
          'Why farmers prefer to cultivate crops on volcanic soils',
          'The chemical differences between lava and obsidian'
        ],
        answer: 1,
        explanation: 'Teks menjelaskan bagaimana letusan vulkanik besar menyuntikkan sulfur dioksida ke stratosfer dan membentuk aerosol pemantul panas matahari yang mendinginkan suhu global.'
      },
      {
        id: 'rq78',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'Why do stratospheric sulfate aerosols persist longer in the atmosphere than volcanic ash?',
        options: [
          'They are magnetic and adhere to Earth’s poles',
          'They are microscopic droplets that do not settle out rapidly under gravity',
          'They are continually recharged by passenger aircraft engines',
          'They absorb cold air and sink into ocean waters'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan aerosol sulfat berupa butiran mikroskopis ("microscopic sulfate aerosols") yang tetap melayang di stratosfer selama 2-3 tahun tanpa lekas mengendap seperti abu silikat yang berat.'
      },
      {
        id: 'rq79',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Easy',
        question: 'The word "infamous" in the final sentence is closest in meaning to:',
        options: ['notoriously well-known for bad reasons', 'celebrated and joyful', 'unrecognized', 'mild'],
        answer: 0,
        explanation: '"Infamous" berarti terkenal buruk/termasyhur karena peristiwa tragis ("notoriously well-known for bad reasons").'
      },
      {
        id: 'rq80',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What was a direct historical consequence of the "Year Without a Summer" in 1816?',
        options: [
          'Immediate global warming and widespread forest fires',
          'Agricultural failure and food shortages caused by unseasonable freezing weather',
          'The total permanent extinction of domestic livestock in Europe',
          'A rapid surge in tropical ocean hurricanes'
        ],
        answer: 1,
        explanation: 'Letusan Tambora menyebabkan kegagalan panen dan krisis pangan akibat cuaca beku di musim panas ("widespread crop failures, late frosts in July, and global food crises").'
      }
    ]
  },
  {
    id: 'rp21',
    title: 'The Critical Period Hypothesis in Linguistics',
    category: 'Psycholinguistics',
    difficulty: 'Medium',
    passage: `One of the most fiercely debated theories in cognitive linguistics is the Critical Period Hypothesis (CPH), originally advanced by neurologist Eric Lenneberg in 1967. Lenneberg proposed that the human biological capacity to acquire a native language effortlessly is constrained by a maturational window that closes around puberty. According to this view, young children acquire native phonology and complex syntax implicitly, driven by innate cerebral plasticity and specialized left-hemisphere neural maturation. After puberty, however, progressive hemispheric lateralization and the loss of synaptic plasticity necessitate conscious, analytic learning strategies. While adult language learners frequently excel in memorizing expansive vocabularies and explicit grammar rules, they rarely achieve native-like phonetic pronunciation or intuitive grammatical judgments. Critics of the hypothesis argue that age-related declines in second language proficiency are not biological absolutes, but rather reflect socioeconomic factors, educational methodologies, and decreased immersion hours.`,
    questions: [
      {
        id: 'rq81',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage is primarily concerned with:',
        options: [
          'The history of dictionary publishing in the nineteenth century',
          'The debate surrounding the biological window for natural language acquisition',
          'Why adults memorize vocabulary faster than young toddlers',
          'Neurological surgical procedures to treat speech impediments'
        ],
        answer: 1,
        explanation: 'Teks membahas perdebatan seputar Hipotesis Periode Kritis (CPH) mengenai batasan usia biologis dalam pemerolehan bahasa.'
      },
      {
        id: 'rq82',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'According to Lenneberg, what biological change occurs around puberty that hinders language acquisition?',
        options: [
          'A complete loss of short-term auditory memory',
          'Progressive brain lateralization and declining synaptic plasticity',
          'Vocal cords stiffen and prevent vowel formation',
          'The brain ceases to form new neurons in the cerebellum'
        ],
        answer: 1,
        explanation: 'Teks menyatakan setelah masa pubertas terjadi "progressive hemispheric lateralization and the loss of synaptic plasticity".'
      },
      {
        id: 'rq83',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "constrained" in the first paragraph is closest in meaning to:',
        options: ['limited or bounded', 'encouraged', 'expanded', 'invented'],
        answer: 0,
        explanation: '"Constrained" berarti dibatasi atau terkekang dalam batasan tertentu ("limited or bounded").'
      },
      {
        id: 'rq84',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What do critics of the Critical Period Hypothesis point to when explaining why adults struggle with second languages?',
        options: [
          'Adults lack any interest in foreign cultures',
          'Environmental factors like less immersion time and different learning contexts',
          'Adult vocal cords cannot vibrate at high pitches',
          'Children possess a completely different set of brain lobes'
        ],
        answer: 1,
        explanation: 'Kritikus berpendapat penurunan kemampuan lebih dipengaruhi faktor lingkungan ("socioeconomic factors, educational methodologies, and decreased immersion hours"), bukan mutlak biologis.'
      }
    ]
  },
  {
    id: 'rp22',
    title: 'The Great Barrier Reef and Carbonate Geomorphology',
    category: 'Marine Geology',
    difficulty: 'Medium',
    passage: `Spanning more than two thousand three hundred kilometers along the northeastern coast of Australia, the Great Barrier Reef is the largest biogenic structure on Earth—so vast that it can be delineated clearly from orbit. The reef is not a monolithic limestone wall, but rather an intricate archipelago of approximately three thousand individual coral reefs and nine hundred sand cays. Geomorphologically, the present living reef veneer sits atop ancient fossil limestone terraces deposited over hundreds of thousands of years during oscillating Pleistocene glacial-interglacial sea level cycles. When continental glaciers expanded during ice ages, sea levels dropped precipitously by up to one hundred twenty meters, exposing earlier coral structures to atmospheric subaerial weathering and chemical dissolution. As glaciers melted during warm interglacials, rising ocean waters inundated the continental shelf, allowing hermatypic corals to resume rapid vertical accretion toward the sunlit surface.`,
    questions: [
      {
        id: 'rq85',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The primary purpose of the passage is to:',
        options: [
          'Examine the geological formation and evolutionary history of the Great Barrier Reef',
          'Promote tourist activities in northeastern Queensland',
          'List endangered species of fish inhabiting sand cays',
          'Describe the chemical formula of calcium phosphate'
        ],
        answer: 0,
        explanation: 'Teks menguraikan geomorfologi dan sejarah pembentukan terumbu Great Barrier Reef melalui siklus perubahan muka air laut zaman es.'
      },
      {
        id: 'rq86',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What happened to existing coral structures during Pleistocene ice age glacial maxima?',
        options: [
          'They sank into volcanic deep-sea trenches',
          'They were exposed to open air and weathered by rainwater as sea levels fell',
          'They grew four times faster in sub-zero water temperatures',
          'They turned into granite rocks'
        ],
        answer: 1,
        explanation: 'Saat zaman es permukaan laut anjlok, terumbu purba terangkat ke udara terbuka dan mengalami pelapukan ("exposed earlier coral structures to atmospheric subaerial weathering").'
      },
      {
        id: 'rq87',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "inundated" in the passage is closest in meaning to:',
        options: ['flooded or submerged', 'evaporated', 'poisoned', 'cracked'],
        answer: 0,
        explanation: '"Inundated" berarti membanjiri atau menenggelamkan daratan ("flooded or submerged").'
      },
      {
        id: 'rq88',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'Why do hermatypic corals grow toward the sea surface when water levels rise?',
        options: [
          'To escape bottom-dwelling tiger sharks',
          'To stay within the upper photic zone where sunlight sustains their algal symbionts',
          'Because corals cannot tolerate high salinity levels near the ocean floor',
          'To catch insects blown off the Australian mainland'
        ],
        answer: 1,
        explanation: 'Karang tumbuh ke atas ("vertical accretion toward the sunlit surface") untuk tetap berada di zona fotik berpenerangan matahari agar alga simbiotiknya dapat berfotosintesis.'
      }
    ]
  },
  {
    id: 'rp23',
    title: 'Renewable Energy Integration and Grid Stability',
    category: 'Technology & Engineering',
    difficulty: 'Medium',
    passage: `The transition from carbon-intensive fossil fuel combustion to renewable energy sources—principally wind and solar photovoltaic farms—is essential for mitigating global climate change. However, integrating high proportions of intermittent renewable power poses profound electrical engineering challenges for traditional utility power grids. Conventional thermal generators powered by coal, gas, or nuclear fuel utilize heavy rotating turbines that impart physical mechanical inertia to the alternating current grid, automatically dampening sudden frequency fluctuations. By contrast, photovoltaic solar panels and wind turbines connect to grids via solid-state power inverters, providing zero physical rotational inertia. Furthermore, renewable generation is weather-dependent; sudden cloud cover or declining evening winds can cause precipitous drops in generation precisely when consumer residential demand peaks. To maintain grid stability without resorting to dirty fossil peaker plants, electrical engineers are deploying massive grid-scale lithium-iron-phosphate battery reserves, pumped hydro storage, and advanced smart-grid demand management systems.`,
    questions: [
      {
        id: 'rq89',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The economic profitability of coal mining conglomerates',
          'Engineering obstacles and technical solutions for integrating renewable power into electrical grids',
          'The chemical structure of lithium-iron-phosphate minerals',
          'Why nuclear reactors are being phased out in northern Europe'
        ],
        answer: 1,
        explanation: 'Teks membahas tantangan kestabilan jaringan listrik dalam mengintegrasikan energi terbarukan intermiten dan solusi teknologi penyimpanannya.'
      },
      {
        id: 'rq90',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'How do conventional fossil and nuclear power plants help stabilize grid frequency?',
        options: [
          'Through cloud seeding chemicals discharged from cooling towers',
          'Through the mechanical rotational inertia of their heavy turbines',
          'By shutting off electrical current whenever voltage drops',
          'By storing excess electricity in underground reservoirs'
        ],
        answer: 1,
        explanation: 'Pembangkit konvensional memiliki turbin berputar berat yang memberikan inersia mekanis penstabil frekuensi ("heavy rotating turbines that impart physical mechanical inertia").'
      },
      {
        id: 'rq91',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "intermittent" in the passage is closest in meaning to:',
        options: ['continuous and uninterrupted', 'occurring at irregular intervals', 'polluting', 'inexpensive'],
        answer: 1,
        explanation: '"Intermittent" berarti terputus-putus, tidak terus-menerus, atau berselang waktu ("occurring at irregular intervals").'
      },
      {
        id: 'rq92',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Medium',
        question: 'Why are grid-scale battery systems essential for a solar-dominated power network?',
        options: [
          'Solar panels cannot generate any power during noon hours',
          'They store excess daytime solar energy and discharge it when solar generation drops at night',
          'Batteries reduce the need for residential power transmission wires',
          'Batteries prevent solar panels from overheating under direct sunlight'
        ],
        answer: 1,
        explanation: 'Baterai skala besar menyimpan kelebihan energi matahari di siang hari untuk dialirkan pada malam hari saat matahari tenggelam dan permintaan listrik memuncak.'
      }
    ]
  },
  {
    id: 'rp24',
    title: 'Mycorrhizal Fungal Networks in Forest Ecology',
    category: 'Ecology',
    difficulty: 'Hard',
    passage: `In classical ecology, forest tree communities were long conceptualized primarily as cutthroat arenas of Darwinian competition, with adjacent saplings relentlessly competing for canopy sunlight, soil moisture, and mineral nutrients. Groundbreaking research in forest ecology over the past three decades has drastically modified this individualistic view by documenting widespread subterranean cooperation facilitated by mycorrhizal fungal networks. These intricate networks of microscopic fungal hyphae envelop and penetrate tree root tips, forming mutualistic symbioses. While trees supply fungi with carbon sugars synthesized via canopy photosynthesis, the expansive fungal mycelium scavenges essential soil nitrogen and phosphorus far beyond the reach of standard root systems. More remarkably, isotopic tracer studies demonstrate that mycorrhizal networks serve as underground biological highways linking disparate trees. Older, canopy-dominant "mother trees" transfer surplus carbon compounds to shaded seedlings understory, and trees infested by insect pests dispatch biochemical warning signals across the fungal network, prompting neighboring trees to synthesize defensive bitter tannins before insects arrive.`,
    questions: [
      {
        id: 'rq93',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'The passage primarily focuses on:',
        options: [
          'How trees compete for sunlight by killing neighboring seedlings',
          'The mutualistic and communicative role of mycorrhizal fungal networks in forests',
          'The chemical structure of bitter tannins found in tree bark',
          'Techniques for harvesting edible forest mushrooms'
        ],
        answer: 1,
        explanation: 'Teks berfokus pada peran jejaring mikoriza bawah tanah yang menghubungkan pohon-pohon hutan dalam simbiosis nutrisi dan komunikasi pertahanan.'
      },
      {
        id: 'rq94',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What do fungi receive from tree roots in exchange for nitrogen and phosphorus?',
        options: [
          'Direct exposure to sunlight',
          'Carbon sugars manufactured through photosynthesis',
          'Defense against burrowing earthworms',
          'Cellulose to construct mushroom caps'
        ],
        answer: 1,
        explanation: 'Teks menyebutkan pohon memasok jamur dengan gula karbon hasil fotosintesis ("carbon sugars synthesized via canopy photosynthesis").'
      },
      {
        id: 'rq95',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "scavenges" in the passage is closest in meaning to:',
        options: ['forages for and collects', 'destroys', 'manufactures', 'ignores'],
        answer: 0,
        explanation: '"Scavenges" berarti mencari dan mengumpulkan sumber daya dari sekitar ("forages for and collects").'
      },
      {
        id: 'rq96',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'What is the ecological benefit when an infested tree sends warning signals through the fungal network?',
        options: [
          'Neighboring trees can immediately drop all their leaves to starve insects',
          'Neighboring trees can proactively produce defensive chemicals to deter the approaching pests',
          'The fungal network digests the attacking insects before they spread',
          'The mother tree cuts off sugar supplies to the infected tree'
        ],
        answer: 1,
        explanation: 'Teks menyatakan sinyal peringatan memicu pohon tetangga mensintesis zat tanin pertahanan sebelum serangga hama sempat tiba.'
      }
    ]
  },
  {
    id: 'rp25',
    title: 'The Domestication of the Horse and Bronze Age Mobility',
    category: 'Archaeology & Anthropology',
    difficulty: 'Hard',
    passage: `The domestication of the wild horse (Equus ferus) across the Eurasian steppes during the late fourth millennium BCE was a seminal technological inflection point in human civilization. Prior to horse domestication, terrestrial human travel was tethered to human pedestrian walking speeds or the ponderous gait of yoked oxen pulling heavy solid-wheeled wooden carts. Archaeological excavations in northern Kazakhstan have yielded ancient Botai settlement horse bones bearing telltale bit-wear grooving on their premolar teeth, coupled with organic fatty lipid residues preserved inside ceramic vessels indicating the consumption of mare's milk. Once steppe pastoralists mastered horseback riding and subsequently invented lightweight spoked-wheel chariots around 2000 BCE, spatial mobility underwent an unprecedented quantum leap. Steppe pastoralist communities expanded explosively westward into continental Europe and southward into Central and South Asia, fundamentally diffusing Indo-European languages, metal smelting innovations, and revolutionary pastoral pastoralist socioeconomic structures across the ancient Old World.`,
    questions: [
      {
        id: 'rq97',
        section: 'Reading',
        topic: 'Main Idea',
        difficulty: 'Medium',
        question: 'What is the main topic of the passage?',
        options: [
          'The extinction of wild oxen in prehistoric Kazakhstan',
          'How horse domestication transformed human mobility and facilitated cultural expansion',
          'The dietary advantages of drinking mare’s milk over cow’s milk',
          'The manufacturing process of solid wooden ox carts'
        ],
        answer: 1,
        explanation: 'Teks menerangkan bagaimana domestikasikan kuda merevolusi mobilitas manusia dan mendorong penyebaran budaya serta bahasa Indo-Eropa.'
      },
      {
        id: 'rq98',
        section: 'Reading',
        topic: 'Factual Detail',
        difficulty: 'Medium',
        question: 'What archaeological evidence at the Botai sites proved that horses were handled and utilized by humans?',
        options: [
          'Bronze horse armor unearthed inside royal burial mounds',
          'Bit-wear grooves on premolar teeth and mare’s milk residues in ceramic pots',
          'Cave murals depicting horse races in the desert',
          'Written stone tablets listing horse transactions'
        ],
        answer: 1,
        explanation: 'Bukti fisik di situs Botai berupa bekas gesekan tali kekang (bit-wear grooving) pada gigi geraham dan sisa lemak susu kuda pada bejana tembikar.'
      },
      {
        id: 'rq99',
        section: 'Reading',
        topic: 'Vocabulary in Context',
        difficulty: 'Medium',
        question: 'The word "seminal" in the first sentence is closest in meaning to:',
        options: ['insignificant', 'groundbreaking and highly influential', 'temporary', 'harmful'],
        answer: 1,
        explanation: '"Seminal" berarti amat berpengaruh, monumental, atau menjadi tonggak penentu ("groundbreaking and highly influential").'
      },
      {
        id: 'rq100',
        section: 'Reading',
        topic: 'Inference',
        difficulty: 'Hard',
        question: 'How did the invention of lightweight spoked-wheel chariots around 2000 BCE complement horse domestication?',
        options: [
          'It made horses obsolete for military transport',
          'It allowed rapid travel and military mobility that vastly outpaced earlier solid-wheel carts',
          'It eliminated the need for breeding steppe horses',
          'It restricted horse usage exclusively to agriculture and plowing'
        ],
        answer: 1,
        explanation: 'Kereta beroda jeruji ringan (spoked-wheel chariot) memanfaatkan kecepatan lari kuda, menghasilkan lompatan mobilitas tempur dan transportasi yang jauh lebih cepat daripada gerobak lembu purba.'
      }
    ]
  }
];
