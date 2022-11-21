const { mongoose } = require("mongoose");
require("dotenv").config();
const URL = process.env.URL;

const Character = require("../../api/characters/character.model");
const characters = [
  {
    name: "Naruto",
    clan: "Uzumaki",
    clanSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668936677/Naruto/Uzumaki_Symbol_km7yp3.png",
    village: "Konoha (Leaf)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668936406/Naruto/1200px-Simbolo_konoha.svg_opt4b6.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1669039399/Naruto/7bmKWV9EqZbpUmP-Naruto-Shippuden-PNG-Transparent_bikme0.png",
    jutsus: [
      {
        eng: "Rasengan",
        jap: "Rasengan",
      },
      {
        eng: "Shadow Clone Technique",
        jap: "Kage Bunshin no Jutsu",
      },
      {
        eng: "Sexy Technique",
        jap: "Oiroke no Jutsu",
      },
      {
        eng: "Summoning Technique / Toad",
        jap: "Kuchiyose no Jutsu / Toad",
      },
    ],
  },
  {
    name: "Itachi",
    clan: "Uchiha",
    clanSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937034/Naruto/1200px-Escudo_Uchiha.svg_t9o7kx.png",
    village: "Konoha (Leaf)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668936406/Naruto/1200px-Simbolo_konoha.svg_opt4b6.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937266/Naruto/Itachi_uetnee.webp",
    jutsus: [
        {
          eng: "Tsukuyomi",
          jap: "Tsukuyomi",
        },
        {
          eng: "Amaterasu",
          jap: "Amaterasu",
        },
        {
          eng: "Susanoo",
          jap: "Susanoo",
        },
        {
          eng: "Summoning Technique / Crow",
          jap: "Kuchiyose no Jutsu / Crow",
        },
      ],
  },

  {
    name: "Temari",
    clan: "Nara",
    clanSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937382/Naruto/Simbolo_Clan_Nara_qivzcs.png",
    village: "Suna (Sand)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937544/Naruto/1200px-Sunagakure_Symbol.svg_iyzhrs.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937727/Naruto/Temari_NS_dc4jlt.webp",
    jutsus: [
        {
          eng: "Great Sickle Weasel Technique",
          jap: "Daikamaitachi no Jutsu",
        },
        {
          eng: "Wind Release: Cast Net",
          jap: "Fūton: Kakeami",
        },
        {
          eng: "Wind Release: Wind Cutter Technique",
          jap: "Fūton: Kazekiri no Jutsu",
        },
        {
          eng: "Summoning Technique / Kamatari",
          jap: "Kuchiyose no Jutsu / Kamatari",
        },
      ],
  },
  {
    name: "Zabuza",
    clan: "Momochi",
    clanSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668937940/Naruto/Momochi_clan_symbol_scj7af.webp",
    village: "Kiri (Mist)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668938019/Naruto/1200px-Kirigakure_Symbol.svg_vz8kiu.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668938089/Naruto/Zabuza_sejuqe.png",
    jutsus: [
        {
          eng: "Hiding in Mist Technique",
          jap: "Kirigakure no Jutsu",
        },
        {
          eng: "Water Prison Technique",
          jap: "Suirō no Jutsu",
        },
        {
          eng: "Water Release: Water Dragon Bullet Technique",
          jap: "Suiton: Suiryūdan no Jutsu",
        },
        {
          eng: "Water Release: Great Waterfall Technique",
          jap: "Suiton: Daibakufu no Jutsu",
        },
      ],
  },
  {
    name: "Mei",
    clan: "Terumi",
    clanSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668939711/Naruto/Terumi_SymbolII_zbeuj2.webp",
    village: "Kiri (Mist)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668938019/Naruto/1200px-Kirigakure_Symbol.svg_vz8kiu.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668939788/Naruto/Mei_Terumi_owxtc8.webp",
    jutsus: [
        {
          eng: "Boil Release: Skilled Mist Technique",
          jap: "Futton: Kōmu no Jutsu",
        },
        {
          eng: "Lava Release: Melting Apparition Technique",
          jap: "Yōton: Yōkai no Jutsu",
        },
        {
          eng: "Water Release: Water Dragon Bullet Technique",
          jap: "Suiton: Suiryūdan no Jutsu",
        },
        {
          eng: "Water Release: Water Formation Pillar",
          jap: "Suiton: Suijinchū",
        },
      ],
  },
  {
    name: "Killer",
    clan: "B",
    village: "Kumo (Clouds)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668940346/Naruto/Kumogakure_Pays_de_la_Foudre.svg_sc1w1s.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1669041397/Naruto/Killer_B_personaje_tsizbu.webp",
    jutsus: [
        {
          eng: "Disturbance Taijutsu",
          jap: "Kakuran Taijutsu",
        },
        {
          eng: "Lightning Release: Lariat",
          jap: "Raiton: Rariatto",
        },
        {
          eng: "Continuous Tailed Beast Balls",
          jap: "Renzoku Bijūdama",
        },
        {
          eng: "Sealing Technique: Octopus Hold",
          jap: "Fūinjutsu: Okutopasu Hōrudo",
        },
      ],
  },
  {
    name: "Onoki",
    clan: "Kamizuru",
    clanSymbol: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668940841/Naruto/Kamizuru_Symbol_bp82p5.png",
    village: "Iwa (Rocks)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668940917/Naruto/Iwagakure_Pays_de_la_Terre.svg_rl4zqj.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1669041637/Naruto/pngegg_xk3p2i.png",
    jutsus: [
        {
          eng: "Dust Release: Detachment of the Primitive World Technique",
          jap: "Jinton: Genkai Hakuri no Jutsu",
        },
        {
          eng: "Earth Release: Golem Technique",
          jap: "Doton: Gōremu no Jutsu",
        },
        {
          eng: "Earth Release: Moving Earth Core",
          jap: "Doton: Chidōkaku",
        },
        {
          eng: "Earth Release: Ultralight-Weight Rock Technique",
          jap: "Doton: Chōkeijūgan no Jutsu",
        },
      ],
  },
  {
    name: "Kimimaro",
    clan: "Kaguya",
    clanSymbol: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668941437/Naruto/Kaguya_Symbol_emrary.png",
    village: "Oto (Sound)",
    villageSymbol:
      "https://res.cloudinary.com/drfpesgn7/image/upload/v1668941514/Naruto/800px-Otogakure_Symbol.svg_xfxhz4.png",
    img: "https://res.cloudinary.com/drfpesgn7/image/upload/v1668941567/Naruto/kimimaro_fimjsf.png",
    jutsus: [
        {
          eng: "Dance of the Larch",
          jap: "Karamatsu no Mai",
        },
        {
          eng: "Ten-Finger Drilling Bullets",
          jap: "Teshi Sendan",
        },
        {
          eng: "Dance of the Willow",
          jap: "Yanagi no Mai",
        },
        {
          eng: "Dance of the Seedling Fern",
          jap: "Sawarabi no Mai",
        },
      ],
  },

];

mongoose
  .connect(URL)
  .then(async () => {
    const allCharacters = await Character.find().lean();
    if (allCharacters) {
      await Character.collection.drop();
      console.log("Se elimino al personaje con exito");
    }
  })
  .catch((error) => console.log("No se pudo borrar los datos" + error))
  .then(async () => {
    await Character.insertMany(characters);
    console.log("Nuevos personajes añadidos");
  })
  .catch((error) => console.log("No se pudo borrar los datos" + error))
  .finally(() => mongoose.disconnect());
