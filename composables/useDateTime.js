export function useDateTime() {
    function getTime(date) {
      date = new Date(date);
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
  
    function getDate(date) {
      date = new Date(date);
      return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${(date.getFullYear()).toString().padStart(2, '0')}`;
    }
    
    function getDaysFromMs(date) {
      return date / 1000 / 60 / 60 / 24 ;
    }

    return {
      getTime,
      getDate,
      getDaysFromMs,
    };
  }
  