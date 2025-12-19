let input = document.getElementById("UserInput");
let Div = document.getElementById("contentDiv");

async function fetchData() {
  try {
      let apiData = await fetch(`https://api.github.com/users/${input.value}`); 

      if(!apiData.ok){
          Div.innerHTML = `<h2 style="color:red; text-align: center; margin: 20px;">User Not Found</h2>`;
          return; 
      }

      let Data = await apiData.json();
      
      let name = Data.name || "No Name";
      let dateOnly = Data.created_at.split("T")[0];
      let repo = Data.public_repos;
      let follower = Data.followers;
      let following = Data.following;
      let bio = Data.bio || "No bio available";
      
      Div.innerHTML = `
        <div class="container w-50 mt-5">
          <div class="row">
            <div class="col-3 border-end border-1 border-secondary">
              <img class="w-100 image my-2" width="150px" src="${Data.avatar_url}" alt=""/>
            </div>
            <div class="col-9">
              <div class="d-flex justify-content-between m-2 flex-wrap">
                <div><h6 class="fw-semibold">${name}</h6></div>
                <div style="color:rgb(155, 154, 154);">${dateOnly}</div>
              </div>
              <div class="d-flex justify-content-between m-1 flex-wrap">
                <div>Repo: ${repo}</div>
                <div>Follower: ${follower}</div>
                <div>Following: ${following}</div>
              </div>
              <div class="text-center">
                <p>${bio}</p>
              </div>
            </div>
          </div>
        </div>
      `;

  } catch (error) {
      console.log(error);
  }
}
