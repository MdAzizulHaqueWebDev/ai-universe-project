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
          <section class="flex justify-between">
          <div>
          <h2>${tool.name} </h2>
          <h2>  ${tool.published_in}</h2>
          </div>
          <div>
          <button onclick="showModal('${tool.id}')" class="btn"> Details </button>
          </div>
          </section>

        </div>
        `;
        allAiToolsContainer.appendChild(div)
        // console.log(tool)
    });
};

const showModal =async(id) =>{
const api = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
const jsonFormat = await api.json();
const data =jsonFormat.data
const modal = document.getElementById('my_modal_4');
modal.innerHTML = `
<div class="modal-box w-11/12 max-w-5xl">

<div class="flex w-full">
  <div class="grid flex-grow card bg-yellow-300 rounded-box ">
  <h2>${data.description} </h2>
  <section class="flex justify-between p-2">
  <div>
  <h2 class="text-2xl font-bold">Features</h2>
  </div>
  <div>
  <h2 class="text-2xl font-bold"> Integrations</h2>
  </div>
  </section>
  </div>

  <div class="divider divider-horizontal">A</div>

  <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center">content 2
  <img src="${data.image_link[0]} " >
  </div>

</div>

<div class="modal-action">
  <form method="dialog">
    <button class="btn"> Close </button>
  </form>
</div>
</div>

`

console.log(data)
    my_modal_4.showModal()
}





    loadAiTools()