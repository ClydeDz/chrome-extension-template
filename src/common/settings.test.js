import * as settingsModule from "./settings";

describe("settings", () => {
  test("has a preset configuration key", () => {      
    const presetConfig = settingsModule.PRESET_CONFIGURATION;
    const keys = Object.keys(presetConfig);
    expect(keys.length).toBe(1);
    expect(presetConfig["storageValue"]).toBe("https://clydedsouza.net");
  });
});
