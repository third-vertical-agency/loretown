const gods = [
  {
    id: "god-001",
    slug: "zeus",
    name: "Zeus",
    mythology: "Greek",
    title: "King of the Gods",
    subtitle: "God of the Sky, Thunder and Lightning",

    image: "/images/gods/zeus.jpg",

    introduction:
      "Zeus is the supreme deity of the Olympian gods in ancient Greek mythology. He rules Mount Olympus and is associated with the sky, thunder, lightning, justice and kingship.",

    origin: "Ancient Greece",
    classification: "Olympian God",
    gender: "Male",

    domains: ["Sky", "Thunder", "Lightning", "Justice"],
    symbols: ["Thunderbolt", "Eagle", "Oak Tree"],
    weapon: "Thunderbolt",

    attributes: {
      Father: "Cronus",
      Mother: "Rhea",
      Wife: "Hera",
      Brothers: "Poseidon and Hades",
      Residence: "Mount Olympus",
      RomanEquivalent: "Jupiter",
    },

    powers: [
      "Control over thunder and lightning",
      "Command over storms and the sky",
      "Divine authority",
      "Immortality",
      "Ability to transform his appearance",
    ],

    stories: [
      {
        title: "The Titanomachy",
        description:
          "The great war between the Olympian gods and the Titans, led by Zeus against his father Cronus.",
      },
      {
        title: "The Birth of Athena",
        description:
          "Athena emerged fully grown and armed from the head of Zeus.",
      },
      {
        title: "Prometheus and Fire",
        description: "Zeus punished Prometheus for giving fire to humanity.",
      },
    ],

    relationships: [
      { name: "Cronus", relation: "Father", slug: null },
      { name: "Rhea", relation: "Mother", slug: null },
      { name: "Hera", relation: "Wife", slug: null },
      { name: "Poseidon", relation: "Brother", slug: "poseidon" },
      { name: "Hades", relation: "Brother", slug: null },
      { name: "Athena", relation: "Daughter", slug: null },
    ],

    related: ["poseidon", "athena"],
  },

  {
    id: "god-002",
    slug: "poseidon",
    name: "Poseidon",
    mythology: "Greek",
    title: "God of the Sea",
    subtitle: "Ruler of Oceans, Earthquakes and Horses",

    image: "/images/gods/poseidon.jpg",

    introduction:
      "Poseidon is one of the twelve major Olympian gods in Greek mythology. He rules over the seas and is associated with earthquakes, storms and horses.",

    origin: "Ancient Greece",
    classification: "Olympian God",
    gender: "Male",

    domains: ["Sea", "Oceans", "Earthquakes", "Horses"],
    symbols: ["Trident", "Horse", "Dolphin"],
    weapon: "Trident",

    attributes: {
      Father: "Cronus",
      Mother: "Rhea",
      Wife: "Amphitrite",
      Brothers: "Zeus and Hades",
      Residence: "Underwater Palace",
      RomanEquivalent: "Neptune",
    },

    powers: [
      "Control over oceans and tides",
      "Creation of storms at sea",
      "Ability to cause earthquakes",
      "Control over sea creatures",
    ],

    stories: [
      {
        title: "The Contest for Athens",
        description:
          "Poseidon competed with Athena to become the patron deity of Athens.",
      },
      {
        title: "The Odyssey",
        description:
          "Poseidon repeatedly obstructed Odysseus during his journey home.",
      },
    ],

    relationships: [
      { name: "Cronus", relation: "Father", slug: null },
      { name: "Rhea", relation: "Mother", slug: null },
      { name: "Zeus", relation: "Brother", slug: "zeus" },
      { name: "Hades", relation: "Brother", slug: null },
      { name: "Amphitrite", relation: "Wife", slug: null },
    ],

    related: ["zeus"],
  },

  {
    id: "god-003",
    slug: "shiva",
    name: "Shiva",
    mythology: "Hindu",
    title: "The Destroyer and Transformer",
    subtitle: "One of the Principal Deities of Hinduism",

    image: "/images/gods/shiva.jpg",

    introduction:
      "Shiva is one of the principal deities of Hinduism and is worshipped as the supreme being in Shaivism. He is associated with destruction, transformation, meditation and liberation.",

    origin: "Indian Subcontinent",
    classification: "Principal Hindu Deity",
    gender: "Male",

    domains: ["Destruction", "Transformation", "Meditation", "Yoga"],
    symbols: ["Trishula", "Third Eye", "Crescent Moon", "Damaru"],
    weapon: "Trishula",

    attributes: {
      Consort: "Parvati",
      Sons: "Ganesha and Kartikeya",
      Residence: "Mount Kailash",
      Vehicle: "Nandi",
      Tradition: "Shaivism",
    },

    powers: [
      "Cosmic transformation",
      "Divine consciousness",
      "Power of the third eye",
      "Mastery of meditation and yoga",
    ],

    stories: [
      {
        title: "The Churning of the Ocean",
        description:
          "Shiva consumed the deadly Halahala poison produced during Samudra Manthan to protect the universe.",
      },
      {
        title: "The Descent of the Ganges",
        description:
          "Shiva received the powerful river Ganga in his matted hair before it descended to Earth.",
      },
      {
        title: "The Destruction of Tripura",
        description:
          "Shiva destroyed the three fortified cities of the Tripura demons.",
      },
    ],

    relationships: [
      { name: "Parvati", relation: "Consort", slug: null },
      { name: "Ganesha", relation: "Son", slug: null },
      { name: "Kartikeya", relation: "Son", slug: null },
    ],

    related: [],
  },

  {
    id: "god-004",
    slug: "vishnu",
    name: "Vishnu",
    mythology: "Hindu",
    title: "The Preserver",
    subtitle: "Protector and Preserver of the Universe",

    image: "/images/gods/vishnu.jpg",

    introduction:
      "Vishnu is one of the principal deities of Hinduism. He is regarded as the preserver of the universe and is traditionally associated with maintaining cosmic order through his various avatars.",

    origin: "Indian Subcontinent",
    classification: "Principal Hindu Deity",
    gender: "Male",

    domains: ["Preservation", "Protection", "Cosmic Order"],
    symbols: ["Conch", "Discus", "Mace", "Lotus"],
    weapon: "Sudarshana Chakra",

    attributes: {
      Consort: "Lakshmi",
      Residence: "Vaikuntha",
      Vehicle: "Garuda",
      Avatars: "Dashavatara",
      Tradition: "Vaishnavism",
    },

    powers: [
      "Preservation of cosmic order",
      "Divine protection",
      "Manifestation through avatars",
      "Restoration of dharma",
    ],

    stories: [
      {
        title: "The Dashavatara",
        description:
          "The ten principal avatars of Vishnu, traditionally described as manifestations that restore cosmic balance.",
      },
      {
        title: "The Churning of the Ocean",
        description:
          "Vishnu helped the Devas and Asuras obtain Amrita, the nectar of immortality.",
      },
    ],

    relationships: [
      { name: "Lakshmi", relation: "Consort", slug: null },
      { name: "Brahma", relation: "Associated Deity", slug: null },
    ],

    related: [],
  },

  {
    id: "god-005",
    slug: "odin",
    name: "Odin",
    mythology: "Norse",
    title: "The Allfather",
    subtitle: "God of Wisdom, War and Magic",

    image: "/images/gods/odin.jpg",

    introduction:
      "Odin is a principal deity in Norse mythology and the ruler associated with Asgard. He is connected with wisdom, poetry, magic, war and the dead.",

    origin: "Scandinavia",
    classification: "Aesir God",
    gender: "Male",

    domains: ["Wisdom", "War", "Magic", "Poetry"],
    symbols: ["Ravens", "Spear", "Eight-legged Horse"],
    weapon: "Gungnir",

    attributes: {
      Wife: "Frigg",
      Sons: "Thor and Baldr",
      Residence: "Asgard",
      Ravens: "Huginn and Muninn",
      Horse: "Sleipnir",
    },

    powers: [
      "Knowledge of runes",
      "Prophecy and wisdom",
      "Seiðr magic",
      "Command over warriors",
    ],

    stories: [
      {
        title: "The Sacrifice of Odin",
        description:
          "Odin hung upon Yggdrasil and sacrificed himself to gain knowledge of the runes.",
      },
      {
        title: "The Quest for Wisdom",
        description:
          "Odin sacrificed an eye at Mimir's well in pursuit of wisdom.",
      },
      {
        title: "Ragnarok",
        description:
          "Odin faces the wolf Fenrir during the prophesied end of the world.",
      },
    ],

    relationships: [
      { name: "Frigg", relation: "Wife", slug: null },
      { name: "Thor", relation: "Son", slug: null },
      { name: "Baldr", relation: "Son", slug: null },
    ],

    related: [],
  },
];

export default gods;
