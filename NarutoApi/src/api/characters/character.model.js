const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    clan: { type: String, required: true },
    clanSymbol: { type: String },
    village: {
      type: String,
      required: true,
      enum: [
        "Konoha (Leaf)",
        "Suna (Sand)",
        "Kiri (Mist)",
        "Kumo (Clouds)",
        "Iwa (Rocks)",
        "Oto (Sound)",
      ],
    },
    villageSymbol: { type: String },
    img: { type: String, required: true },
    jutsus: [{jap: String, eng: String}]
  },
  {
    timestamps: true,
  }
);
const Character = mongoose.model("characters", characterSchema);
module.exports = Character;
