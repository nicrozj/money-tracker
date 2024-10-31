export function useStorage() {
    function setItem(key, value) {
      if (process.client) {
        localStorage.setItem(key, value);
      }
    }
  
    function getItem(key) {
      if (process.client) {
        return localStorage.getItem(key);
      }
      return undefined;
    }
  
    return {
      setItem,
      getItem,
    };
  }
  