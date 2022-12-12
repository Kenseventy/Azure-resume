window.addEventListener('DOMContentLoaded', (event) =>{
    GetVisitCount();
})



const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://getresumecounterkm.azurewebsites.net/api/GetResumeCounter?code=Wo7riS55yiaMrk/uqTqTIAFvABe/awaz5fjSQvf9Bukhe8C/E00yag==';


const GetVisitCount = () => {
    // Check if the counter value exists in localStorage
    if (localStorage.getItem('counter') === null) {
      // If the counter value does not exist, initialize it to 1
      localStorage.setItem('counter', 1);
  
      // Call the functionApi URL
      let count = 30;
      fetch(functionApi).then(response => {
        return response.json()
      }).then(response =>{
        console.log("Website called function API.")
        count = response.count;
        document.getElementById('counter').innerText = count;
      }).catch(function(error){
        console.log(error)
      });
      return count;
    } else {
      // If the counter value exists, check if it was updated within the last hour
      if (new Date().getTime() - localStorage.getItem('timestamp') > 3600000) {
        // If the counter was not updated within the last hour, increment the counter value
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')) + 1);
      }
  
      // Get the current value of the counter
      const counter = localStorage.getItem('counter');
  
      // Update the HTML element with the id "counter" with the current counter value
      document.getElementById('counter').innerHTML = counter;
    }
  
    // Update the timestamp when the counter was last updated
    localStorage.setItem('timestamp', new Date().getTime());
  }
  