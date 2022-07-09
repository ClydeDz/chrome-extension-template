import { getStorage,setStorage } from "../../common/storage";
import { PRESET_CONFIGURATION, CHROME_SYNC_STORAGE_KEY } from "../../common/settings";

function saveConfiguration() {
    const updatedConfiguration = {
        storageValue: document.getElementById("storageValue").value
    };
    setStorage(CHROME_SYNC_STORAGE_KEY, updatedConfiguration);
}

function loadConfiguration(result) {
    const savedConfiguration = result || PRESET_CONFIGURATION;  
    const storageValue = savedConfiguration["storageValue"];
    document.getElementById("storageValue").value = storageValue;
}

window.onload = function() {
    console.info("Options script loaded");
    document.getElementById("SaveConfiguration").addEventListener("click", saveConfiguration);
    getStorage(CHROME_SYNC_STORAGE_KEY, loadConfiguration);
};
