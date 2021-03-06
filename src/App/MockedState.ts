export function mockedState() {
  return {
    router: {
      locationBeforeTransitions: null,
    },
  };
}

export const defaultAuthentication = {
  request: false,
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjI1OTE3MDIsImV4cCI6MTU1NDEyNzcwMiwicGx1cy1vbmUiOnRydWV9._KlpRSqK7AHgYX4WybMPJlTazuoU4OY1KoEyQtkiTd4",
};

export const defaultOrder = {
  member: {
    id: 1,
    fullname: "John Snow",
    age: 19,
  },
  products: [],
};

export const defaultProducts = {
  Bier: [
    {
      id: 3,
      name: "Hertog Jan",
      price: 68,
      position: 1,
      category: "Bier",
      image: "wCwnyLXTVdPEnKRXjw9I.png",
      splash_image: "Uo6qQC4Hm8TUqyNjw2G4.jpg",
      age_restriction: 18,
    },
  ],
  Fris: [
    {
      id: 27,
      name: "Ice Tea",
      price: 60,
      position: 999,
      category: "Fris",
      image: "",
      age_restriction: null,
    },
  ],
  Eten: [
    {
      id: 243,
      name: "Kinder Bueno",
      price: 55,
      position: 999,
      category: "Eten",
      image: "utnCWM87tZclyENVrG03.jpg",
      age_restriction: null,
    },
  ],
};

export const defaultMembers = [
  {
    id: 1,
    firstName: "John",
    surname: "Snow",
    fullname: "John Snow",
    age: 18,
    latest_purchase_at: "2018-01-01 00:00:00",
    prominent: null,
    cosmetics: {
      color: null,
      image: null,
      nickname: null,
      button: {
        width: null,
        height: null,
      },
    },
  },
];

export const defaultCommitteeeMembers = [
  {
    member_id: 1,
    year: 2018,
    function: "King",
    committee: {
      id: 0,
      name: "Compucie",
    },
  },
];

export const defaultBoardMembers = [{member_id: 1, function: "King"}];
