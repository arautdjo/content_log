import { resolve } from "path";

export const MILULATE_WAIT_IN_MS = 100;
export const ROOT_DIR = process.cwd();
export const JSON_POST_SEED_PATH = resolve(ROOT_DIR,'src','db','seeds','posts.json');
export const UPIMAGE_MAX_SIZE = 900 * 1024;
export const IMAGE_UPLOAD_DIRECTORY = 'uploads'
export const IMAGE_SERVER_URL = 'http://localhost:3000/uploads'

