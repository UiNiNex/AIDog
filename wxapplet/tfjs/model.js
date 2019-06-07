import * as tf from './tf.min.js'

const INCEPTIONNET_MODEL_PATH =
  // tslint:disable-next-line:max-line-length
  'https://ilego.club/ai/tfjs-models/inception_v3/1/model.json';

//let inceptionNet;
const loadInceptionModel = async () => {
  console.log('Loading model...');

  inceptionNet = await tf.loadLayersModel(INCEPTIONNET_MODEL_PATH);
}

// export { loadInceptionModel };
module.exports = {
  loadInceptionModel: loadInceptionModel
}