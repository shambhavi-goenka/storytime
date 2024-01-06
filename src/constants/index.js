// import {} from "../assets";

const articles = [
  { id: 'article1', title: 'Mutualism among Animals', tags: ['Tech'], place :'Asia', date: "JAN 03, 2024",
  content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nullam maximus venenatis mauris id lobortis.',
      '1',
      'Morbi a porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      '2',
      'Curabitur consectetur erat eu massa cursus, et viverra lectus hendrerit.'
  ],
  images: ['https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg','https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg']
  },

  { id: 'article2', title: 'Article 2', tags: ['Tech'], place :'Africa', date: "JAN 05, 2024",
  content: ['Line 1',
      'Nullam maximus venenatis mauris id lobortis.',
      '1',
      'Morbi a porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      '2',
      'Curabitur consectetur erat eu massa cursus, et viverra lectus hendrerit.'
  ],
  images: ['https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg','https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg']
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