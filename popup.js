
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {

      let input = selection[0];
      const input_textarea = document.getElementById("input");
      input_textarea.innerHTML = input;
      const check_btn = document.getElementById("check_btn");
      const translate_btn = document.getElementById("translate_btn");
      const copy_btn = document.getElementById("copy_btn");

      check_btn.addEventListener("click", ()=>{
          
      })

      translate_btn.addEventListener("click", ()=>{
          
      })

      copy_btn.addEventListener("click", ()=>{
          
      })
      
});

