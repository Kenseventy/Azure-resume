window.addEventListener('DOMContentLoaded', (event) =>{
    GetVisitCount();
    NotifyDiscord();
})


const NotifyDiscord = () => {
    fetch("https://discord.com/api/webhooks/1374480160820035594/TLnGzpLYSCfFiwdC-GZoQyitZKd9glj-Jv_yFHiYlMtjJ9KFglGvRBhaVyrMqlaIEnk-", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `📥 Your website was just visited at ${new Date().toLocaleString()}`
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to send Discord message");
        console.log("✅ Discord message sent.");
    })
    .catch(error => {
        console.error("❌ Error sending to Discord:", error);
    });
}



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