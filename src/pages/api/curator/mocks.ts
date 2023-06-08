import {
  Curation,
  ItemData,
  ItemDataType,
  MediaType,
  Media,
} from "@/interfaces";

const mockItemData: ItemData[] = [
  {
    id: "01H1YGY1YM1EF1VZCGNS3856BC",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    item: {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
    },
    media: [
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
    ],
    location: {
      lat: 34.039375,
      lng: -118.23397,
      updatedAt: new Date(),
    },
    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  },
  {
    id: "01H1YGY1YM1EF1VZCGNS3856BD",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    item: {
      id: "",
    },
    media: [
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
    ],

    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  },
  {
    id: "01H1YGY1YM1EF1VZCGNS3856BE",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    item: {
      id: "",
    },
    media: [
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
    ],

    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  },
  {
    id: "01H1WAWKG35QES46J3DVCMZDTS",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    item: {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
    },
    media: [
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
    ],

    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  },
  {
    id: "01ARZ3NDEKTSV4RRFFQ69G5FAV",
    type: ItemDataType.STORY,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    item: {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
    },
    media: [
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
      {
        type: MediaType.IMAGE,
        srcUri:
          "https://images.unsplash.com/photo-1630440142870-4b0b8b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        alt: "alt text",
      },
    ],

    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  },
];

export function getMockCuration(): Curation {
  let curation: Curation = {
    id: "mock-curation-id",
    items: mockItemData,
  };
  return curation;
}

export function getMockItem(id: string): ItemData {
  // for (let i = 0; i < mockItemData.length; i++) {
  //   if (mockItemData[i].id === id) {
  //     return mockItemData[i];
  //   }
  // }
  return {
    id: "01H1YGY1YM1EF1VZCGNS3856BC",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    media: getMockMedia(),
    item: {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
    },
    location: {
      lat: 34.039375,
      lng: -118.23397,
      updatedAt: new Date(),
    },
    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  };
}

export function getMockMedia(): Media[] {
  return [
    {
      id: "01H1X3C8VSQ60JES458DADSBM4",
      type: MediaType.IMAGE,
      srcUri:
        "https://www.theworldwanderers.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-18-at-10.51.02-AM.jpg",
      alt: "alt text",
    },
    {
      id: "01H1X3C8VSQ60JES458DADSBM5",
      type: MediaType.IMAGE,
      srcUri:
        "https://www.traveloffpath.com/wp-content/uploads/2022/11/Bora-Bora-French-Polynesia-720x405.jpg",
      alt: "alt text",
    },
    {
      id: "01H1X3C8VSQ60JES458DADSBM6",
      type: MediaType.IMAGE,
      srcUri:
        "https://www.papercitymag.com/wp-content/uploads/2018/05/Luxury-Resorts-la-paloma-1024x683.jpg",
      alt: "alt text",
    },
    {
      id: "01H1X3C8VSQ60JES458DADSBM7",
      type: MediaType.IMAGE,
      srcUri:
        "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/3d/cc/da.jpg",
      alt: "alt text",
    },
    {
      id: "01H1X3C8VSQ60JES458DADSBM8",
      type: MediaType.IMAGE,
      srcUri: "https://pictures.escapia.com/ELDEHO/180699/2571300539.jpg",
      alt: "alt text",
    },
  ];
}

export function mockGetResource(id: string): ItemData {
  // for (let i = 0; i < mockItemData.length; i++) {
  //   if (mockItemData[i].id === id) {
  //     return mockItemData[i];
  //   }
  // }
  return {
    id: "01H1YGY1YM1EF1VZCGNS3856BC",
    type: ItemDataType.EXPERIENCE,
    title: "this is a gem",
    description: "sample description",
    createdAt: "2021-09-01T00:00:00Z",
    rate: 456.76,
    media: getMockMedia(),
    item: {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
    },
    location: {
      lat: 34.039375,
      lng: -118.23397,
      updatedAt: new Date(),
    },
    creator: {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl: "",
    },
  };
}
