export const mockUsers = [
  {
    id: "1",
    name: "Buzz Lightyear",
    email: "buzz@example.com",
    avatar: "https://i.pravatar.cc/150?img=65",
    role: "admin",
    spaces: [
      {
        id: "nasa-1",
        name: "National Aeronautics and Space Administration",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
      },
      {
        id: "planetary-society",
        name: "Planetary Society",
        avatar: "https://picsum.photos/100",
      },
      {
        id: "find-andy",
        name: "Operation Find Andy",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toy_Story_logo.svg/300px-Toy_Story_logo.svg.png",
      },
    ],
  },
  {
    id: "2",
    name: "Sally Ride",
    email: "sally.ride@example.com",
    avatar: "https://i.pravatar.cc/150?img=48",
    role: "member",
    spaces: [
      {
        id: "nasa-1",
        name: "National Aeronautics and Space Administration",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
      },
      {
        id: "planetary-society",
        name: "Planetary Society",
        avatar: "https://picsum.photos/100",
      },
    ],
  },
];

// We only care about the first user for now, the second is for ticket assignment
export const mockUser = mockUsers[0];
