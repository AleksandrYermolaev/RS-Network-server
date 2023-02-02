export const users = [
  {
    id: 1,
    name: 'user1',
    email: 'user1@example.com',
    image: 'https://avatars3.githubusercontent.com/u/9384699?s=400&v=4',
    age: 25,
    location: 'Kyiv',
    followers: [2, 3],
    password: 'qwerty',
    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
  },
  {
    id: 2,
    name: 'user2',
    email: 'user2@example.com',
    image: 'https://huggingface.co/Jersonm89/Avatar/resolve/main/will_2.png',
    age: 45,
    location: 'London',
    followers: [1],
    password: '12345',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida, sem non laoreet porta, tellus'
  },
  {
    id: 3,
    name: 'user3',
    email: 'user3@example.com',
    image: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg',
    age: 18,
    location: 'New-York',
    followers: [2],
    password: 'AJxndsj133_js,3d',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae auctor leo. In vestibulum lectus in mi efficitur, et bibendum augue sodales. Nam non tellus feugiat augue faucibus commodo nec a ante. Vivamus vel vestibulum ex. Pellentesque sed.'
  }
]

const date1 = new Date(2023, 1, 30);
const date2 = new Date(2023, 2, 1);
const date3 = new Date(2023, 2, 2);
const date4 = new Date(2023, 2, 3);
const date5 = new Date(2023, 2, 4);


export const posts = [
  {
    id: 1,
    userId: 1,
    date: date1.getTime(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere ultricies convallis. Nullam tincidunt ante ac ipsum aliquet venenatis. Vivamus quis urna consequat lectus luctus euismod. Morbi id turpis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras cursus ex sit amet placerat molestie. Integer at ullamcorper urna. Quisque lacinia tortor luctus, varius diam vitae, eleifend velit. Maecenas luctus aliquam diam ut consequat. Fusce eu auctor dolor. Etiam blandit tempus velit, nec sodales nibh venenatis finibus.',
    imageUrl: 'https://lh6.googleusercontent.com/cJVy4vk4etKXoT0lvKDVTgcctVaez6f4Im2EM2U4SPomoK84iwdwDJQivZWksR9vAt09DYIjmin19y5EQDmUzh18dCUdXeac8Ts0YDUPusTI3uZmZeqjwqwQp2EPd_IVElBziV9bUrIruQuWyg',
    likes: [1, 2, 3],
    comments: [1]
  },
  {
    id: 2,
    userId: 1,
    date: date2.getTime(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis auctor varius. Fusce cursus mauris.',
    imageUrl: '',
    likes: [],
    comments: []
  },
  {
    id: 3,
    userId: 2,
    date: date3.getTime(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ipsum ut eros ullamcorper elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at euismod tortor, aliquam molestie diam. Quisque fringilla mi metus, sit.',
    imageUrl: 'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg',
    likes: [1],
    comments: [2, 3, 4, 5, 6]
  },
  {
    id: 4,
    userId: 3,
    date: date4.getTime(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lectus et purus tristique, eget pulvinar magna ullamcorper. Curabitur hendrerit vulputate sapien, non bibendum leo. Aenean pretium pharetra ex, non convallis urna gravida in. Donec vitae sollicitudin ligula, rhoncus ullamcorper quam. Donec lectus erat, maximus sit amet molestie fermentum, laoreet vitae tortor. Phasellus nec erat sed felis eleifend sollicitudin placerat non risus. Sed iaculis facilisis lectus nec tincidunt. Pellentesque sed urna sed nisl sagittis consectetur. Morbi ornare ligula id ipsum laoreet, ac volutpat velit sodales. Curabitur laoreet congue est dictum molestie. Morbi vitae cursus leo. Vestibulum vestibulum ante sit amet ex dictum congue. Suspendisse ut nisi et erat aliquet consectetur nec non nibh. Ut et mi pellentesque dolor imperdiet feugiat. Duis lobortis ornare scelerisque. Vivamus sed metus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tellus magna, ultrices eget felis sed, malesuada viverra diam. Maecenas fringilla, neque dapibus lobortis laoreet, risus arcu porttitor nulla, a porttitor mauris libero sed felis. Mauris non lacus malesuada arcu laoreet efficitur.',
    imageUrl: 'https://fototips.ru/wp-content/uploads/2011/12/landscape_03.jpg',
    likes: [3],
    comments: []
  },
  {
    id: 5,
    userId: 3,
    date: date5.getTime(),
    description: '',
    imageUrl: 'https://www.takefoto.ru/userfiles/image/Dlya%20Statey/Peizaj%20Pravila/aa6334971e251ce7b4b747fc88bbc5ab.jpg',
    likes: [1, 3],
    comments: [7, 8]
  }
]

const date11 = new Date(2023, 1, 30, 8, 10);
const date31 = new Date(2023, 2, 3, 10);
const date32 = new Date(2023, 2, 3, 11, 15);
const date33 = new Date(2023, 2, 3, 22, 0, 30);
const date34 = new Date(2023, 2, 4, 10, 0);
const date35 = new Date(2023, 2, 5, 10);
const date51 = new Date(2023, 2, 4, 16, 32);
const date52 = new Date(2023, 2, 4, 16, 33);

export const comments = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    date: date11.getTime(),
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 2,
    postId: 3,
    userId: 3,
    date: date31.getTime(),
    description: 'Vivamus at augue consectetur arcu volutpat efficitur in congue elit. Donec nec metus rutrum, cursus ex eget, commodo arcu. Aliquam erat turpis, mollis quis euismod vel.'
  },
  {
    id: 3,
    postId: 3,
    userId: 1,
    date: date32.getTime(),
    description: 'Vivamus condimentum sit amet orci ut interdum. Duis cursus ante ut'
  },
  {
    id: 4,
    postId: 3,
    userId: 1,
    date: date33.getTime(),
    description: 'Class aptent taciti sociosqu'
  },
  {
    id: 5,
    postId: 3,
    userId: 2,
    date: date34.getTime(),
    description: 'In pellentesque magna quis tortor suscipit, in luctus.'
  },
  {
    id: 6,
    postId: 3,
    userId: 3,
    date: date35.getTime(),
    description: 'Nullam ligula nibh, luctus in condimentum ut, iaculis eget magna. Cras'
  },
  {
    id: 7,
    postId: 5,
    userId: 1,
    date: date51.getTime(),
    description: '→↓↑'
  },
  {
    id: 8,
    postId: 5,
    userId: 3,
    date: date52.getTime(),
    description: 'Morbi varius, lectus eget lobortis.'
  }
]