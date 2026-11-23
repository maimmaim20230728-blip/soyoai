// AIは画面とは別の糸(Web Worker)で動かし、画面が固まらないようにする。
import { WebWorkerMLCEngineHandler } from "./lib/web-llm.js";

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => handler.onmessage(msg);
