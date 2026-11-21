// Lazy-loaded nudity classifier (NSFW.js, MobileNetV2 only). Built into public/nsfw.js; loaded on first photo share.
import * as tf from "@tensorflow/tfjs";
import { load } from "nsfwjs/core";
import { MobileNetV2Model } from "nsfwjs/models/mobilenet_v2";
let modelP = null;
export async function classify(img){
  tf.enableProdMode();
  if(!modelP) modelP = load("MobileNetV2", { modelDefinitions: [MobileNetV2Model] });
  const m = await modelP; const r = await m.classify(img);
  return Object.fromEntries(r.map(x => [x.className, x.probability]));
}
