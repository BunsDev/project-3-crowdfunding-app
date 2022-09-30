const db = require('../config/connection');
const { Project, User, Asset } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json')
const assetSeeds = require('./assetSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await User.deleteMany({});
    await Asset.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < projectSeeds.length; i++) {
      const { _id, name } = await Project.create(projectSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            projects: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});