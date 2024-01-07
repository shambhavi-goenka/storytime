import {sample, sampleImg} from "../assets";

const articles = [
  { id: 'article1', title: 'Mutualism among Animals', tags: ['Bird', 'Crododile', 'Marsupial'], place :'Asia', date: "JAN 03, 2024",
  content: ['Once upon a time in the heart of the dense rainforest, a tale unfolded, teaching the creatures of the woodland about the importance of trust and the wisdom of those who care deeply for us.',
      "In the vibrant and lush rainforest, a young tree-kangaroo named Hoppy had just grown out of his mother's pouch and was filled with the curiosity to explore the world around him. Hoppy, with his kind and adventurous nature, was eager to make friends and discover the wonders of the rainforest.",
      '1',
      "In this enchanting forest lived a plover bird named Whistler. Whistler was known for his melodic tunes that echoed through the trees, but his friendship with a crocodile named Snapper had left him isolated from the other creatures. No one trusted Whistler, except for the kind-hearted Hoppy.",
      "Hoppy saw beyond the judgments of others and decided to befriend Whistler. They explored the rainforest together, becoming fast friends despite the disapproval from Hoppy's parents.",
      "Concerned for their young tree-kangaroo, Hoppy's parents warned him about the potential dangers of being friends with Whistler. But the adolescent Hoppy, driven by youthful optimism and a desire to see the good in everyone, chose to ignore their advice.",
      "As their friendship blossomed, Hoppy's parents grew increasingly worried. They couldn't fathom the alliance between their innocent son and the bird associated with the crocodile. Fearing for Hoppy's safety, they urged him to reconsider his friendship with Whistler.",
      "In an attempt to assess the depth of Whistler's loyalty, Hoppy devised a plan. He led Whistler into a remote part of the rainforest known for its dangers, where the cunning fox, Shadow, roamed. Hoppy decided it was time to put Whistler to the test.",
      '"Hoppy," Whistler chirped cheerfully, unaware of the impending challenge, "what grand adventure do you have in mind today?"',
      'With a mischievous glint in his eye, Hoppy responded, "I have heard rumors of a mystical waterfall hidden deep within this neck of the woods. But reaching it is no easy feat. Only the bravest and most trustworthy can make the journey. Are you up for the challenge, Whistler?"',
      "Whistler, perceptive as ever, sensed the gravity of Hoppy's words. He nodded, 'Hoppy, I'm ready for any adventure with you. Lead the way.'",
      "As they navigated the dense undergrowth, crossed babbling streams, and climbed steep hills, Hoppy secretly watched Whistler's every move. Unbeknownst to the bird, this journey was designed to test his commitment and understanding.",
      "In the face of adversity, Whistler proved to be a loyal and dependable companion. When they encountered the dangerous fox, Shadow, Whistler took charge. He instructed Hoppy to hide while he distracted the fox into a chase, showcasing his courage and quick thinking.",
      "As the perilous situation unfolded, Whistler's clever maneuvers kept the fox at bay. Eventually, the bird managed to escape Shadow's pursuit and returned to Hoppy's side, unscathed. Whistler understood the test but chose not to confront Hoppy about it.",
      "In the quiet moments by the waterfall, Whistler glanced at Hoppy with a knowing twinkle in his eye. He silently acknowledged the bond of trust they had forged, demonstrating that actions spoke louder than words.",
      "Back at Hoppy's home, the young tree-kangaroo was eager to share his newfound trust in Whistler with his parents. However, despite the successful test, his parents remained unconvinced. To them, trust was not a one-time event, and they couldn't ignore the persistent association between Whistler and the crocodile.",
      "Determined to follow his own path, Hoppy rebelled against his parents' advice and continued to spend time with Whistler. The bird, in turn, led Hoppy to the territory of the crocodile Snapper.",
      '2',
      "In a twist of fate, Hoppy found himself in grave danger as Snapper eyed him hungrily. The crocodile, part of a chain of deception orchestrated by Whistler, had played his part in the plan.",
      "Just as Snapper lunged forward, Hoppy's parents arrived on the scene, having anticipated the peril their son might face. They swiftly intervened, saving Hoppy from the jaws of danger.",
      "In that critical moment, Hoppy realized the importance of his parents' wisdom and the genuine concern they held for his well-being. The forest echoed with the valuable lesson learned – trust was not to be taken lightly, and the bonds forged over years were far more meaningful than fleeting friendships.",
      "With newfound understanding, Hoppy returned to the embrace of his old friends – his parents and the creatures who had always cared for him. The rainforest continued to thrive with lessons learned, as the tale of Hoppy and Whistler became a part of the rich tapestry of the enchanted woodland.",
  ],
  images: [sampleImg, sampleImg],
  audio: sample
  },

  { id: 'article2', title: 'Article 2', tags: ['Animal'], place :'Africa', date: "JAN 05, 2024",
  content: ['Line 1',
      'Nullam maximus venenatis mauris id lobortis.',
      '1',
      'Morbi a porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      '2',
      'Curabitur consectetur erat eu massa cursus, et viverra lectus hendrerit.'
  ],
  images: [sampleImg, sampleImg],
  audio: sample
  },

];


const pointsData = [
        {
            id: 'article1',
            lat: -6.7916,
            lng: 147.3272, // Latitude and Longitude for Papua New Guinea
            size: 10,
            label: 'Papua New Guinea',
            info: 'This is Papua New Guinea. Additional information can go here.',
        },
        {
            id: 'article1',
            lat: 40.7128,
            lng: -74.006, // Latitude and Longitude for New York
            size: 15,
            label: 'New York',
            info: 'This is New York City. Additional information can go here.',
        },
        {
            id: 'article2',
            lat: 21.42,
            lng: 13.41, // Latitude and Longitude for Sahara Desert
            size: 20,
            label: 'Sahara Desert',
            info: 'This is the Sahara Desert. Additional information can go here.',
        },
    ];


export {articles, pointsData};