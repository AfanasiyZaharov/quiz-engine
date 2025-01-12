 class StorageManager {
    constructor(questionshash) {

    }
  
    setPageHash(hash){
      this.storageKey = `vbw-test-saved-${hash}`;
      // Initialize the storage if it doesn't exist
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify({}));
      }
    }

    // Write data to the local storage with sectionIndex and questionIndex
    write(sectionIndex, questionIndex, data) {
      const storageData = JSON.parse(localStorage.getItem(this.storageKey));
  
      if (!storageData[sectionIndex]) {
        storageData[sectionIndex] = {};
      }
  
      storageData[sectionIndex][questionIndex] = data;
      localStorage.setItem(this.storageKey, JSON.stringify(storageData));
    }
  
    // Read specific data from the local storage using sectionIndex and questionIndex
    read(sectionIndex, questionIndex) {
      const storageData = JSON.parse(localStorage.getItem(this.storageKey));
      if (storageData[sectionIndex] && storageData[sectionIndex][questionIndex]) {
        return storageData[sectionIndex][questionIndex];
      } else {
        return null;
      }
    }
  
    // Read all data from the local storage in a matrix format
    readAll() {
      const storageData = JSON.parse(localStorage.getItem(this.storageKey));
      return storageData;
    }
  }
  

  export const Storage = new StorageManager();