const loadAiTools = async() => {
      const getApi =await fetch('https://openapi.programming-hero.com/api/ai/tools')
     const data =await getApi.json()
     const tools = data.data.tools;
     displayAiTools(tools)
    };

const displayAiTools = (tools) => {
    const allAiToolsContainer = document.getElementById('ai-tools-container')
    tools.forEach(tool => {
        const div = document.createElement('div');
        div.classList = `card w-96 bg-base-100 shadow-xl`
        div.innerHTML = ` 
        <figure><img src="${tool.image} "/></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold"> Features</h2>
          <ol class="list-decimal">
          <li> ${tool.features[0]} </li>
          <li> ${tool.features[1]}</li>
          <li> ${tool.features[2]}</li>
          </ol>
          <hr>
          <div>
          <h2>${tool.name} </h2>
         <i class="fa-regular fa-calendar-days "> ${tool.published_in
         } </i>
          </div>

        </div>
        `;
        allAiToolsContainer.appendChild(div)
        console.log(tool)
        
    });
 console.log(tools)
}





    loadAiTools()