const api_base_url = "https://sportscore.com/api/widget/matches/"
const sportsDet = document.querySelector("#sportsDet");
const contentBody = document.querySelector("#contentBody");
const spinner = document.querySelector("#spinner");
const message = document.querySelector("#message");

sportsDet.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const sport = sportsDet.sport.value;
    const count = sportsDet.num_of_sport.value;
    try{
        spinner.style.display="block";
        const res = await fetch(`${api_base_url}?sport=${sport}&limit=${count}`);
        const matches = await res.json();
        updateMatches(matches);
    }catch(error){
        console.error(error);
        message.innerHTML=error;
    }finally{
        spinner.style.display="none";
    }
})

function updateMatches(matches){
    contentBody.innerHTML="";
    matches.matches.forEach(match => {
        const card = document.createElement("div");
        card.className = "card"
        card.innerHTML = `<div class="status">
                    <p class="${match.status}">${match.status_text}</p>
                </div>
                <div class="card-head">
                    <div class="home">
                        <h4>${match.home}</h4>
                        <img src="${match.home_logo}" alt="home">
                        <p>${match.home_score}</p>
                    </div>
                    <p>vs</p>
                    <div class="away">
                        <h4>${match.away}</h4>
                        <img src="${match.away_logo}" alt="home">
                        <p>${match.away_score}</p>
                    </div>
                </div>
                <div class="card-body">
                    <p>${match.competition}</p>
                    <img src="${match.competition_logo}" alt="competition" srcset="">
                </div>`;
        contentBody.appendChild(card);
    })
}