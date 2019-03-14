import Utilities from '../../services/Utilities.js';
import Fetcher from '../../services/Fetcher.js';

const url = `http://worldcup.sfg.io/matches/country?fifa_code=`;

let ShowMatches = {
    render: async () => {
        let request = Utilities.parseRequestURL();
        let matches = await Fetcher(url + request.id);

        let view =
            `<section class="section">
                <div class="row">
                    ${matches.map(singleMatch => 
                        `<div class="m-auto col-8 single-match p-3">
                            <a class="match-link" href="#/team/${request.id}/match/${singleMatch.fifa_id}"></a>
                            <div class="home-team ${singleMatch.winner === singleMatch.home_team.country ? 'winner' : ''}">
                            <img width="50" height="40" src="assets/${singleMatch.home_team.code.toLowerCase()}.png">
                            <span>${singleMatch.home_team.country}</span>
                            </div>
                            <div class="result">
                                <span ${singleMatch.winner === singleMatch.home_team.country ? 'class="winner"' : ''}>${singleMatch.home_team.goals}</span> <span>-</span> <span ${singleMatch.winner === singleMatch.away_team.country ? 'class="winner"' : ''}>${singleMatch.away_team.goals}</span>    
                            </div>
                            <div class="away-team ${singleMatch.winner === singleMatch.away_team.country ? 'winner' : ''}">
                            <span>${singleMatch.away_team.country}</span>
                            <img width="50" height="40" src="assets/${singleMatch.away_team.code.toLowerCase()}.png">
                            </div>
                        </div>`
                    ).join('\n')}
                </div>
            </section>`;

        return view;
    },

    after_render: async() => {

    }
};

export default ShowMatches;