import { getStorage } from "../../common/storage";
import { PRESET_CONFIGURATION, CHROME_SYNC_STORAGE_KEY } from "../../common/settings";

function loadConfiguration(result) {
    const savedConfiguration = result || PRESET_CONFIGURATION;  
    const storageValue = savedConfiguration["storageValue"];
    console.info("Storage value", storageValue);
}

window.onload = function() {
    console.info("New Tab script loaded");
    getStorage(CHROME_SYNC_STORAGE_KEY, loadConfiguration);
};
