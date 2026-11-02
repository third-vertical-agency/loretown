const creatures = [
  {
    id: "creature-001",
    slug: "wendigo",
    name: "Wendigo",
    mythology: "Algonquian",
    title: "The Cannibal Spirit",
    subtitle: "Malevolent Spirit of Hunger, Winter and Insanity",

    image: "/creatures/wendigo/wendigo_main.png",
    images: [
      "/creatures/wendigo/wendigo-01.jpg",
      "/creatures/wendigo/wendigo-02.jpg",
      "/creatures/wendigo/wendigo-03.jpg",
    ],

    introduction:
      "The Wendigo is a terrifying malevolent spirit from the folklore of the Algonquian-speaking peoples of North America. It is associated with the cold, famine, starvation and cannibalism. The Wendigo is said to be an emaciated, unnatural creature with an insatiable hunger that grows the more it consumes, and it is often described as a warning against taboo acts and the loss of one's humanity.",

    origin: "North America (Great Lakes and Northeastern Woodlands)",
    classification: "Malevolent Spirit",
    gender: "Male",

    domains: ["Hunger", "Winter", "Cannibalism", "Insanity"],
    symbols: ["Antlers", "Emaciated Figure", "Cold Wind"],
    weapon: "Claws and unnatural strength",

    attributes: {
      Region: "Great Lakes Region",
      Habitat: "Deep forests and frozen wilderness",
      Nature: "Malevolent Spirit",
      Manifestation: "Possession or Transformation",
      Weakness: "Fire, ritual and community",
      RelatedConcept: "Windigo Psychosis",
    },

    powers: [
      "Superhuman strength and speed",
      "Immunity to cold and harsh weather",
      "Mimicry of human voices",
      "Inducement of fear and madness",
      "Insatiable hunger that grows with each feeding",
      "Ability to possess or curse those who commit taboo acts",
    ],

    stories: [
      {
        title: "The Origin of the Wendigo",
        description:
          "A man lost in the wilderness resorts to cannibalism to survive and is transformed into the first Wendigo, cursed with eternal hunger.",
      },
      {
        title: "The Endless Hunger",
        description:
          "The Wendigo's hunger can never be satisfied; the more it eats, the larger and more ravenous it becomes.",
      },
      {
        title: "Protection Against the Wendigo",
        description:
          "Communities used fire, ritual and collective vigilance to ward off the Wendigo, reflecting the belief that isolation and taboo-breaking invite the spirit.",
      },
    ],

    relationships: [
      { name: "Windigo Psychosis", relation: "Associated Concept", slug: null },
      { name: "Algonquian Peoples", relation: "Origin Culture", slug: null },
    ],

    related: ["siren"],
  },

  {
    id: "creature-002",
    slug: "siren",
    name: "Siren",
    mythology: "Greek",
    title: "The Enchanting Songstress",
    subtitle: "Creatures of the Sea Whose Song Lures Sailors to Doom",

    image: "/creatures/siren/siren_main.jpg",
    images: [
      "/creatures/siren/siren-01.jpg",
      "/creatures/siren/siren-02.jpg",
      "/creatures/siren/siren-03.jpg",
    ],

    introduction:
      "Sirens are mythical creatures from ancient Greek mythology, originally depicted as half-bird, half-woman beings and later as half-fish, half-woman. They dwell on rocky islands and use their enchanting songs to lure sailors toward shipwreck and death. The Sirens are closely tied to themes of temptation, danger and the power of music, and they appear prominently in the tales of Odysseus and the Argonauts.",

    origin: "Ancient Greece",
    classification: "Mythical Creature",
    gender: "Female",

    domains: ["Music", "Enchantment", "Sea", "Deception"],
    symbols: ["Lyre", "Feathers", "Waves"],
    weapon: "Enchanting song",

    attributes: {
      Habitat: "Rocky islands and sea cliffs",
      Form: "Half-bird (early) or half-fish (later)",
      Power: "Enchanting song",
      Weakness: "Superior music and binding",
      Notable: "Encounter with Odysseus",
      Parentage: "Achelous and a Muse",
    },

    powers: [
      "Enchanting song that lures listeners to their doom",
      "Prophecy and knowledge of the future",
      "Ability to calm or stir the winds and seas",
      "Shapeshifting between bird and fish forms",
      "Hypnotic charm that overcomes reason",
    ],

    stories: [
      {
        title: "Odysseus and the Sirens",
        description:
          "Odysseus had himself bound to the mast and his crew plug their ears with wax so they could pass the Sirens safely.",
      },
      {
        title: "Orpheus and the Argonauts",
        description:
          "Orpheus out-sang the Sirens, allowing the Argonauts to pass unharmed.",
      },
      {
        title: "The Origin of the Sirens",
        description:
          "The Sirens were said to be companions of Persephone who were transformed after her abduction by Hades.",
      },
    ],

    relationships: [
      { name: "Achelous", relation: "Father", slug: null },
      { name: "Melpomene", relation: "Mother (Muse)", slug: null },
      { name: "Persephone", relation: "Companion", slug: null },
    ],

    related: ["wendigo"],
  },
];

export default creatures;
