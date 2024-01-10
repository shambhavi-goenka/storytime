
const articles = [
  { id: 'mutualism', title: 'Vested Interests', tags: ['Bird', 'Crododile', 'Marsupial'], place :'Asia', date: "JAN 03, 2024",
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

  { id: 'friendship', title: 'Forest Friendship', tags: ['Capybara', 'Anteater', 'Monkey'], place :'South America', date: "JAN 05, 2024",
  content: [`In a lush and vibrant rainforest, there lived a friendly and wise capybara named Cappy. Cappy was not your average capybara; he possessed a special ability to understand and communicate with all the animals in the forest. This unique gift made him a cherished friend among the various creatures that called the rainforest their home.`,
      `Cappy's days were filled with laughter and camaraderie as he hopped from one group of animals to another, sharing stories and offering advice. His warm and inviting nature drew others toward him, creating a sense of unity in the forest.`,
      '1',
      `One day, a timid and lonely anteater named Andy approached Cappy. With a soft snuffling sound, Andy explained how he felt isolated and longed for companionship. Cappy, recognizing the importance of friendship, decided to help Andy and introduced him to a diverse group of animals.`,
      `As time passed, Andy blossomed into a confident and joyful anteater, surrounded by friends of all shapes and sizes. The once quiet corners of the rainforest echoed with laughter, songs, and the rustling of leaves as the newfound friends shared their unique talents and stories.`,
      `One day, a storm struck the rainforest, causing panic among the animals. Cappy, realizing the importance of unity during difficult times, gathered everyone together. Each animal brought their strengths to the table – the monkeys swung from branch to branch to secure loose leaves, the birds soared through the sky to scout for danger, and the ants worked tirelessly to build shelter.`,
      '2',
      `In the face of adversity, the bond between the animals grew stronger. The storm passed, leaving the rainforest battered but resilient. The animals, knowing they could rely on one another, celebrated their success and appreciated the vital role friendship played in overcoming challenges.`,
      `Cappy, the wise capybara, had not only created a close-knit community but also taught the importance of having friends. His legacy lived on, and the rainforest became a beacon of friendship, where the strength of the individual was surpassed by the power of unity and camaraderie. And so, in the heart of the lush rainforest, the animals continued to thrive, forever grateful for the gift of friendship that Cappy had bestowed upon them.`
  ],
  images: ['https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Fcapybara%2Banteater.png?alt=media&token=023a8add-e6e9-4612-b318-a5ed0bc3be19', 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/images%2Fcapybara%2Bmonkey.png?alt=media&token=96abd956-cd11-41df-ab2e-6b4b10bbb510'],
  audio: 'https://firebasestorage.googleapis.com/v0/b/storytime-1.appspot.com/o/audio%2Fcapybara_song.mp3?alt=media&token=c8fe39db-ddef-41e6-83db-b4bc425c2f7d'
  },

];


const pointsData = [
        {
            id: 'mutualism',
            lat: -6.7916,
            lng: 147.3272, // Latitude and Longitude for Papua New Guinea
            size: 10,
            label: 'Papua New Guinea',
            info: 'Papua New Guinea has a tale on Vested Interests',
        },
        {
            id: 'friendship',
            lat: -10.9518,
            lng: -65.3181, // Latitude and Longitude for Bolivia
            size: 15,
            label: 'Bolivia',
            info: 'Bolivia has a tale on Friendship.',
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