
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {

      let input = selection[0];
      const input_textarea = document.getElementById("input");
      input_textarea.innerHTML = input;
      const check_btn = document.getElementById("check_btn");
      const translate_btn = document.getElementById("translate_btn");
      const copy_btn = document.getElementById("copy_btn");
      const output_textarea = document.getElementById("output");
      const copy_alert = document.getElementById("copy_alert");
      const language_detected = document.getElementById("language_detected");
      
      check_btn.addEventListener("click", ()=>{
        alert("here");

      })

      translate_btn.addEventListener("click", ()=>{
          alert("here")
      })

      copy_btn.addEventListener("click", ()=>{
          navigator.clipboard.writeText(output_textarea.value);
          copy_alert.innerHTML = "✔ copied";
          setTimeout(function(){
            copy_alert.innerHTML = "";
          }, 1500); 
      })
      
});

