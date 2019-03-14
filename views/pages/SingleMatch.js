import Utilities from '../../services/Utilities.js';
import Fetcher from '../../services/Fetcher.js';

const url = `http://worldcup.sfg.io/matches/country?fifa_code=`;

// let getMatches = async (countryCode) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//
//     try {
//         const response = await fetch(`http://worldcup.sfg.io/matches/country?fifa_code=` + countryCode, options);
//         const json = await response.json();
//
//         return json
//     } catch (err) {
//         console.log('Error getting match info', err)
//     };
// };

let ShowMatches = {
    render: async () => {
        let request = Utilities.parseRequestURL();
        let match = await Fetcher(url + request.id)
            .then(data => data.find(singleMatch => singleMatch.fifa_id === request.optionalId));
        console.log(match);
        // const teamSortingOrder = ['Goalie', 'Defender', 'Midfield', 'Forward'];
        //
        // let homeTeamStartingEleven = match.home_team_statistics.starting_eleven
        //     .sort((playerA, playerB) => {
        //         return teamSortingOrder.indexOf(playerA.position) - teamSortingOrder.indexOf(playerB.position);
        //     });
        //
        // let awayTeamStartingEleven = match.away_team_statistics.starting_eleven
        //     .sort((playerA, playerB) => {
        //         return teamSortingOrder.indexOf(playerA.position) - teamSortingOrder.indexOf(playerB.position);
        //     });
        //
        //
        // console.log(homeTeamStartingEleven);
        // console.log(match);

        let view =
            `<section class="section">
                <div class="row">
                    <div class="col-12 single-match-detailed-info mb-5 mt-1">
                    <h3 class="text-center">Venue: ${match.venue}</h3>
                    <h4>Attendance: <span class="font-weight-normal">${match.attendance}</span></h4>
                    <h4>Weather: <span class="font-weight-normal">${match.weather.temp_celsius} - ${match.weather.description}</span></h4>
                    <h4>Match officials: ${match.officials.slice(0, 3).map(official => `
                    <span class="font-italic font-weight-normal">${official}
                    </span>`).join(', ')}</h4>
                    </div>
                    <div class="statistics col-8 m-auto">
                    <h2 class="text-center mb-3">Match statistics</h2>
                    <div class="row">
                        <div class="col-4">${match.home_team.goals}</div><div class="col-4 text-center font-weight-bold">Goals</div><div class="col-4 text-right">${match.away_team.goals}</div>
                        <div class="col-4">${match.home_team_statistics.on_target}</div><div class="col-4 text-center font-weight-bold">Shots on target</div><div class="col-4 text-right">${match.away_team_statistics.on_target}</div>
                        <div class="col-4">${match.home_team_statistics.off_target}</div><div class="col-4 text-center font-weight-bold">Shots off target</div><div class="col-4 text-right">${match.away_team_statistics.off_target}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">${match.home_team_statistics.ball_possession}</div><div class="col-4 text-center font-weight-bold">Possession (%)</div><div class="col-4 text-right">${match.away_team_statistics.ball_possession}</div>
                        <div class="col-4">${match.home_team_statistics.corners}</div><div class="col-4 text-center font-weight-bold">Corners</div><div class="col-4 text-right">${match.away_team_statistics.corners}</div>
                        <div class="col-4">${match.home_team_statistics.offsides}</div><div class="col-4 text-center font-weight-bold">Offsides</div><div class="col-4 text-right">${match.away_team_statistics.offsides}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">${match.home_team_statistics.fouls_committed}</div><div class="col-4 text-center font-weight-bold">Fouls</div><div class="col-4 text-right">${match.away_team_statistics.fouls_committed}</div>
                        <div class="col-4">${match.home_team_statistics.yellow_cards}</div><div class="col-4 text-center font-weight-bold">Yellow cards</div><div class="col-4 text-right">${match.away_team_statistics.yellow_cards}</div>
                        <div class="col-4">${match.home_team_statistics.red_cards}</div><div class="col-4 text-center font-weight-bold">Red cards</div><div class="col-4 text-right">${match.away_team_statistics.red_cards}</div>
                    </div>
                    </div>
                    <h2 class="text-center mt-3 mb-3 col-12">Line-ups </h2>
                    <div class="home-team-details col-6">
                        <div class="single-country text-center">
                            <img width="50" height="40" src="assets/${match.home_team.code.toLowerCase()}.png">
                            <span class="font-weight-bold">${match.home_team.country}</span>
                        </div>
                        <div class="starting-eleven-visualisation">
                            <div class="corners"> <div></div> <div></div> <div></div> <div></div> </div>
                            <div class="middle"></div>
                            <div class="circle"></div>
                            <div class="center"></div>
                            <div class="goal-box"> <div></div> <div></div> <div></div> </div>
                            <div class="goal-box goal-box-right"> <div></div> <div></div> <div></div> </div>
                            <div class="players-row goalkeeper">
                                ${match.home_team_statistics.starting_eleven.filter(player => player.position === 'Goalie').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                            <div class="players-row defenders">
                                ${match.home_team_statistics.starting_eleven.filter(player => player.position === 'Defender').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                            <div class="players-row midfielders">
                                ${match.home_team_statistics.starting_eleven.filter(player => player.position === 'Midfield').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                            <div class="players-row forwards">
                                ${match.home_team_statistics.starting_eleven.filter(player => player.position === 'Forward').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="away-team-details col-6">
                                <div class="single-country text-center">
                                    <img width="50" height="40" src="assets/${match.away_team.code.toLowerCase()}.png">
                            <span class="font-weight-bold">${match.away_team.country}</span>
                        </div>
                       <div class="starting-eleven-visualisation">
                            <div class="corners"> <div></div> <div></div> <div></div> <div></div> </div>
                            <div class="middle"></div>
                            <div class="circle"></div>
                            <div class="center"></div>
                            <div class="goal-box"> <div></div> <div></div> <div></div> </div>
                            <div class="goal-box goal-box-right"> <div></div> <div></div> <div></div> </div>
                            <div class="players-row goalkeeper">
                                ${match.away_team_statistics.starting_eleven.filter(player => player.position === 'Goalie').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                            <div class="players-row defenders">${match.away_team_statistics.starting_eleven.filter(player => player.position === 'Defender').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                            <div class="players-row midfielders">
                                ${match.away_team_statistics.starting_eleven.filter(player => player.position === 'Midfield').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                                </div>
                            <div class="players-row forwards">${match.away_team_statistics.starting_eleven.filter(player => player.position === 'Forward').map(player => `<div class="player"><p><span>${player.shirt_number}</span></p><p>${player.name}</p></div>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="events col-6">
                    <ul class="events-list">
                        ${match.home_team_events.map(event => `<li><span class="font-weight-bold">(${event.time}) ${event.type_of_event}: </span><span class="font-italic">${event.player}</span></li>`).join('')}
                    </ul>
                    </div>
                    <div class="events col-6">
                        <ul class="events-list">
                            ${match.away_team_events.map(event => `<li><span class="font-weight-bold">(${event.time}) ${event.type_of_event}: </span><span class="font-italic">${event.player}</span></li>`).join('')}
                        </ul>
                    </div>
                    </div>
                </section>`;

                return view;
                },

    after_render: async () => {

    }
};

export default ShowMatches;