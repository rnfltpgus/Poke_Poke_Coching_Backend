const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  selectMode: {
    type: [optionSchema],
  },
});

const optionSchema = new mongoose.Schema({
  mode: {
    type: String,
  },
  runTime: {
    type: String,
  },
  warnings: {
    type: String,
  },
});
