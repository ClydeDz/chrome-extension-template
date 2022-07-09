import { getStorage } from "../common/storage";
import { CHROME_SYNC_STORAGE_KEY, PRESET_CONFIGURATION } from "../common/settings";

function loadAndDisplayStorageValue(result) {
    const savedConfiguration = result || PRESET_CONFIGURATION;
    const storageValue = savedConfiguration["storageValue"];    
    console.info("Storage value is", storageValue);
}

window.onload = function() {
    console.info("Content script loaded");
    getStorage(CHROME_SYNC_STORAGE_KEY, loadAndDisplayStorageValue); 
}
