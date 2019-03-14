import Fetcher from '../../services/Fetcher.js';

const url = `http://worldcup.sfg.io/teams/group_results`;

let Home = {
    render: async () => {
        let groups = await Fetcher(url);

        let view =
            `<section class="section">
                <div class="row">
                    ${groups.map(singleGroup => 
                        `<div class="col-5 group">
                            <h2 class="text-center m-5">Group: ${singleGroup.letter}</h2>
                            <div class="row group-labels">
                                <div class="col-2"><p>Country</p></div>
                                <div class="col-1 ml-auto"><p>GP</p></div>
                                <div class="col-1"><p>W</p></div>
                                <div class="col-1"><p>L</p></div>
                                <div class="col-1"><p>D</p></div>
                                <div class="col-1"><p>GD</p></div>
                                <div class="col-1"><p>P</p></div>
                            </div>
                            ${singleGroup.ordered_teams.map(singleTeam => 
                                `<div class="row single-country">
                                    <div class="col-2 country-flag"><img width="50" height="40" src="assets/${singleTeam.fifa_code.toLowerCase()}.png"></div>
                                    <div class="col-3"><a href="#/team/${singleTeam.fifa_code}">${singleTeam.country}</a></div>
                                    <div class="col-1 ml-auto"><p>${singleTeam.games_played}</p></div>
                                    <div class="col-1"><p>${singleTeam.wins}</p></div>
                                    <div class="col-1"><p>${singleTeam.losses}</p></div>
                                    <div class="col-1"><p>${singleTeam.draws}</p></div>
                                    <div class="col-1"><p>${singleTeam.goal_differential}</p></div>
                                    <div class="col-1"><p>${singleTeam.points}</p></div>
                                </div>`)
                            .join('\n')}
                            </div>`)
                    .join('\n')}
                </div>
            </section>`;
        return view
    }
    , after_render: async () => {
    }
};

export default Home;