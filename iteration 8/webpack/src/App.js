function App() {
    return (
      <div className="App">
      <h1>Iteration 7</h1>
      <section id="promise">
        <h2>Promise:</h2>
        <input type="text" name="user" id="user"></input>
        <button id="submit">Получить</button>
        <h3>Репозитории пользователя:</h3>
        <p id="repos"></p>
      </section>
      <hr />
      <section id="asyncawait">
        <h2>async/await:</h2>
        <input type="text" name="user" id="user1"></input>
        <button id="submit1">Получить</button>
        <h3>Репозитории пользователя:</h3>
        <p id="repos1"></p>
      </section>
      <hr />
      </div>
    );
  }
  
  window.onload= () =>{
    let button = document.getElementById("submit");
    let repos1 = document.getElementById("repos");
    let repodata;
    button.addEventListener('click', function (event){
        let username = document.getElementById("user");
        let url = `https://api.github.com/users/${username.value}/repos`;
        fetch(url)
        .then((response) =>{
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                let error = new Error(response.status + ' ' + response.statusText);
                throw error
            }
        })
        .then((data) => {
            if(data.length > 0){
                repodata = data;
                repos1.innerText = repodata.map(repodata =>repodata.name + ' Создан: ' + new Date(repodata.created_at).toLocaleDateString()
                + ' Описание: ' + repodata.description).join('\n');
            }
            else {
                let error = new Error('Репозитории отсутствуют');
                throw error;
            }
        })
        .catch((err) => alert('Error: '+ err.message));
    });
    
    let button1 = document.getElementById("submit1");
    let repos2 = document.getElementById("repos1");
    button1.addEventListener('click', async function (event){
        let username = document.getElementById("user1");
        let url = `https://api.github.com/users/${username.value}/repos`;
        try{
            let response = await fetch(url);
            if (response.status >= 200 && response.status < 300) {
                let repodata = await response.json();
                if(repodata.length > 0){
                    repos2.innerText = repodata.map(repodata =>repodata.name + ' Создан: ' + new Date(repodata.created_at).toLocaleDateString()
                    + ' Описание: ' + repodata.description).join('\n');
                }
                else {
                    let error = new Error('Репозитории отсутствуют');
                    throw error;
                }
            } else {
                let error = new Error(response.status + ' ' + response.statusText);
                throw error
            }
        } 
        catch(err){
            alert('Error: ' + err.message);
        }
    });
    
  }  
  
  export default App;
  