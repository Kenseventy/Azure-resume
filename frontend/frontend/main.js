window.addEventListener('DOMContentLoaded', (event) =>{
    GetVisitCount();
})



const functionApi = 'https://getresumecounterkm.azurewebsites.net/api/GetResumeCounter?code=Wo7riS55yiaMrk/uqTqTIAFvABe/awaz5fjSQvf9Bukhe8C/E00yag==';



const GetVisitCount = () => {
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

}