import { v4 as uuidv4 } from "uuid";

const createUniqueTitle = (userId) => {
  return `${userId}-${uuidv4()}`;
};

const POST_DATA = [
  {
    title: createUniqueTitle("user1"),
    content: [
      {
        userId: "user1",
        imageUrl: "https://example.com/image1.jpg",
        createdAt: "2023-10-01T12:00:00Z",
        likes: 10,
        comments: [
          {
            userId: "user2",
            comment: "Great post!",
            createdAt: "2023-10-01T12:30:00Z",
          },
          {
            userId: "user3",
            comment: "Nice picture!",
            createdAt: "2023-10-01T13:00:00Z",
          },
        ],
        description: "A beautiful sunrise.",
      },
      {
        userId: "user1",
        imageUrl: "https://example.com/image2.jpg",
        createdAt: "2023-10-02T08:00:00Z",
        likes: 20,
        comments: [
          {
            userId: "user4",
            comment: "Amazing view!",
            createdAt: "2023-10-02T08:30:00Z",
          },
        ],
        description: "Hiking in the mountains.",
      },
    ],
  },
  {
    title: createUniqueTitle("user2"),
    content: [
      {
        userId: "user2",
        imageUrl: "https://example.com/image3.jpg",
        createdAt: "2023-10-03T15:00:00Z",
        likes: 5,
        comments: [],
        description: "Delicious homemade meal.",
      },
    ],
  },
  // Add more users and their posts as needed
];

export default POST_DATA;
