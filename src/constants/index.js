
const articles = [
  { id: 'mutualism', title: 'Mutualism among Animals', tags: ['Bird', 'Crododile', 'Marsupial'], place :'Asia', date: "JAN 03, 2024",
  content: ["Once upon a time, deep within the rainforests of Papua New Guinea, there was a tree-kangaroo named Hopper. He was a curious lad who had just outgrown his mama’s pouch and was ready to explore the world. ",
      "Hopper was raised in a loving environment, and in return only had love to give. He was kind of heart and never judged a book by its cover. During his evening climbs, he chanced upon Whistler, the plover bird. Many animals didn’t like Whistler but that didn’t stop Hopper from being kind. Hopper had fun listening to Whistler’s tales of his travels across the rainforest, from the highlands to the marshlands. Soon they started roaming the forest together and grew closer. Hopper’s friends warned him of their friendship due to Whistler’s clandestine allegiance to Snapper the crocodile but Hopper believed that his friendship was pure.",
      '1',
      "Hopper’s mama found out about this friendship and immediately dissuaded him from it but he was resolute. However, Hopper decided to take some of this advice and devised a test for Whistler. During one of their walks, Hopper casually suggested to venture to the southern side of the forest, beyond the waterfall. This was quite unexpected from Hopper as Whistler was always the one pushing him for adventure. Whistler was astute enough to catch onto this and understood something was amiss. He quietly went along with his friend and not before long, the dangerous fox Shadow, picked up on their scent. While she was on the prowl, she accidentally stepped on and snapped a twig. With that, Whistler immediately caught onto the plan and instructed Hopper to hide among the rhododendrons that would mask his musk. Whistler flew into action and distracted Shadow with a good half hour long chase and snuck back to Hopper. Seeing how Whistler passed his test with flying colours, Hopper was certain that Whistler was his true friend.",
      `Upon returning home, Hopper told his mama about all that happened and how Whistler passed his test. She was extremely aggrieved to hear of this and got angry with Hopper for putting himself in danger just to prove Whistler’s loyalty. Nevertheless, her son put up a strong argument in favour of Whistler but she wasn’t convinced. “Call it mama’s intuition, but I know I’m right”, she said. She warned Hopper that a two day friendship does not mean that Whistler is to be trusted. Whistler has been friends with Snapper for years and there was no reason for him to pick him over Snapper. Hopper fought that she’s just paranoid and doesn’t understand modern times so she reluctantly gave in with the condition that Hopper always informs her before venturing out with Whistler. `,
      '2',
      `The next day, hoping to prey on his newfound trust, Whistler coerced Hopper to accompany him for an adventure. Hopper couldn’t’ see his mama around so he left a note saying that they were heading towards the eastern marshlands this time. He thought we was going to see mud flappers but little did he know that this was a part of Whistler’s devious plan. Snapper, having enough time to prepare, camouflaged himself as a strange log and Whistler was egging Hopper to play on that log.`,
      `With a loud snap, Snapper’s jaws caught onto Hopper’s leg and he was screaming to escape. Luckily, his mama read his note and came there to save him. She swung from the vines and knocked Whistler off. Then with a swift blow to Snapper’s nose, she released Hopper from his jaws and rushed him back home. Hopper then learnt an important lesson which was to listen to the wisdom of the elders and that times change faster than people.`
  ],
  images: ['https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Ftree-kangaroo.png?alt=media&token=c84c4192-1593-4d94-b990-85503c346bd8', 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Fplover-bird%2Bcroc.png?alt=media&token=c579cc61-9703-4aaf-8387-e438e9716e94'],
  audio: 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/audio%2Fsample.mp3?alt=media&token=ff319216-13e1-4869-a667-8cb91bdbad55'
  },

  { id: 'article2', title: 'Article 2', tags: ['Animal'], place :'Africa', date: "JAN 05, 2024",
  content: ['Lorem ipsum and all',
      'Nullam maximus venenatis mauris id lobortis.',
      '1',
      'Morbi a porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      '2',
      'Curabitur consectetur erat eu massa cursus, et viverra lectus hendrerit.'
  ],
  images: ['https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Fplover-bird%2Bcroc.png?alt=media&token=c579cc61-9703-4aaf-8387-e438e9716e94', 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Fplover-bird%2Bcroc.png?alt=media&token=c579cc61-9703-4aaf-8387-e438e9716e94'],
  audio: 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/audio%2Fsample.mp3?alt=media&token=ff319216-13e1-4869-a667-8cb91bdbad55'
  },

];


const pointsData = [
        {
            id: 'mutualism',
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