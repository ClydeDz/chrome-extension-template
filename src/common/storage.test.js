import * as storageModule from "./storage";

const get = jest.fn();
const set = jest.fn();

global.chrome = {
  storage: {
    sync: {
      set,
      get
    }
  }
};

const chromeGetStorageSpy = jest.spyOn(chrome.storage.sync, 'get');
const chromeSetStorageSpy = jest.spyOn(chrome.storage.sync, 'set');

describe("storage → getStorage", () => {
  beforeEach(() => {
      jest.resetAllMocks();
  }); 

  test("chrome get storage api method called", () => {
    const getCallback = jest.fn();
    
    storageModule.getStorage("Test", getCallback);
      
    expect(chromeGetStorageSpy).toHaveBeenCalledWith(["Test"], expect.any(Function));
  });
});

describe("storage → setStorage", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    }); 

    test("chrome set storage api method called", () => {
        storageModule.setStorage("Test", "Value");
        
        expect(chromeSetStorageSpy).toHaveBeenCalledWith({["Test"]: "Value"});
    });
});
