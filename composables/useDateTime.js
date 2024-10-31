export function useDateTime() {
    function getTime() {
      const date = new Date();
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
  
    function getDate() {
      const date = new Date();
      return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${(date.getFullYear()).toString().padStart(2, '0')}`;
    }
  
    return {
      getTime,
      getDate,
    };
  }
  