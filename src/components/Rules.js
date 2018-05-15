import React from 'react';

import './Rules.css';

export default () => (
  <div className="rules">
    <h1>The Rules of Secret Hitler</h1>
    <p>The year is 1932. The place is pre-WWII Germany. In Secret Hitler, players are German politicians attempting to hold a fragile Liberal government together and stem the rising tide of Fascism. Watch out though—there are secret Fascists among you, and one player is Secret Hitler.</p>
    <h2>Overview</h2>
    <p>At the beginning of the game, each player is secretly assigned one of the three roles: <em>Liberal</em>, <em>Fascist</em>, or <em>Hitler</em>. The Liberals have a majority, but they don’t know the roles of other players; Fascists must resort to secrecy and sabotage to accomplish their goals. Fascists know the identities of the other Fascists and Hitler. Hitler plays for the Fascist team, but doesn't know who the other Fascists are and must work to figure them out.</p>
    <p>Whenever a Fascist Policy is enacted, the government becomes more powerful, and the President is granted a single-use power which must be used before the next round can begin. These powers range from choosing the next President to killing one of the players.</p>
    <h2>Object</h2>
    <p>Every player has a secret identity as a member of either the Liberal team or the Fascist team. Players on the Liberal team win if either:</p>
    <ul>
      <li>Five Liberal Policies are enacted OR</li>
      <li>Hitler is assassinated.</li>
    </ul>
    <p>Players on the Fascist team win if either:</p>
    <ul>
      <li>Six Fascist Policies are enacted OR</li>
      <li>Hitler is elected Chancellor any time after the third Fascist Policy has been enacted.</li>
    </ul>
    <h2>Setup</h2>
    <p>The 11 Fascist Policy tiles and the 6 Liberal Policy tiles are shuffled into a single Policy deck. Games with 6, 7, or 9 players have the option of being "rebalanced" to make the gameplay more even for both sides. If rebalancing is enabled: 6 player games start with a Fascist Policy already enacted, 7 player games start with 10 Fascist Policies in the deck instead of 11, and 9 player games start with 9 Fascist Policies in the deck.</p>
    <p>Each player will receive a Secret Role card. The table below determines the correct distribution of roles and whether Hitler knows who the Fascists are or not.</p>
    <table>
      <thead>
        <tr>
          <td># Players</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Liberals</td>
          <td>3</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Fascists</td>
          <td>1+H</td>
          <td>1+H</td>
          <td>2+H</td>
          <td>2+H</td>
          <td>3+H</td>
          <td>3+H</td>
        </tr>
        <tr>
          <td>Fascists known by Hitler?</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
    <h2>Gameplay</h2>
    <p>Secret Hitler is played in rounds. Each round has an Election to form a government, a Legislative Session to enact a new Policy, and an Executive Action to exercise governmental power.</p>
    <h4>Election</h4>
    <p>At the beginning of a new round, the President placard moves right to the next player, who is the new Presidential Candidate.</p>
    <p>Nominate a Chancellor</p>
    <p>The Presidential Candidate chooses a Chancellor Candidate by selecting any other eligible player. The Presidential Candidate is free to discuss Chancellor options with the table to build consensus and make it more likely the Government gets elected.</p>
    <p>Eligibility:</p>
    <p>The last elected President and Chancellor are "term-limited", and ineligible to be nominated as Chancellor Candidate.</p>
    <p>Eligibility</p>
    <ul>
      <li>Term limits apply to the President and Chancellor who were last elected, not to the last pair nominated.</li>
      <li>Term limits only affect nominations to the Chancellorship; anyone can be President, even someone who was just Chancellor.</li>
      <li>If there are only five players left in the game, only the last elected Chancellor is ineligible to be Chancellor Candidate; the last President may be nominated.</li>
      <li>There are some other rules that affect eligibility in specific ways: the Veto Power and the Election Tracker. You don’t need to worry about those yet, and we’ll talk about each one in its relevant section.</li>
    </ul>
    <p>Vote on the government</p>
    <p>Once the Presidential Candidate has chosen an eligible Chancellor Candidate, players may discuss the proposed government until everyone has cast their votes. All players, including the President and Chancellor Candidate, vote on the proposed government. Once everyone has cast their vote, the Ballot cards are revealed simultaneously.</p>
    <p>If the vote is a tie, or if a majority of players votes no:</p>
    <p>The vote fails. The Presidential Candidate misses this chance to be elected, and the President placard moves to the next player. The Election Tracker is advanced by one Election.</p>
    <p>Election Tracker: If the group rejects three governments in a row, the country is thrown into chaos. The next Policy on the top of the deck is revealed and enacted. Any power granted by this Policy is ignored, but the Election Tracker resets, and any existing term-limits are forgotten. If there are fewer than three tiles remaining in the Policy deck at this point, they are shuffled with the Discard pile to create a new Policy deck.</p>
    <p>Any time a new Policy is enacted for any reason, the Election Tracker is reset.</p>
    <p>If a majority of players vote yes:</p>
    <p>The Presidential Candidate and Chancellor Candidate become the new President and Chancellor, respectively.</p>
    <p>If three or more Fascist Policies have been enacted and a majority of players vote yes:</p>
    <p>If the new Chancellor is Hitler, the game is over and the Fascists win. If the game didn't end, other players will know for sure the Chancellor is not Hitler.</p>
    <h4>Legislative Session</h4>
    <p>During the Legislative Session, the President and Chancellor work together to enact a new Policy in secret. The President draws the top three tiles from the Policy deck, looks at them in secret, and discards one tile face down into the Discard pile. The remaining two tiles go to the Chancellor, who in secret discards one Policy tile face down, and enacts the remaining Policy by placing the tile face up on the corresponding track.</p>
    <p>The chat for the President and Chancellor is disabled during the Legislative Session. Attempting to telegraph the contents of your hand using randomness or any other unusual selection procedure violates the spirit of the game. Don’t do it.</p>
    <p>Discarded Policy tiles are not revealed to the group. Players must rely on the word of the President and Chancellor, who are free to lie.</p>
    <p>ABOUT LYING: Often, some players learn things that the rest of the players don’t know, like when the President and Chancellor get to see Policy tiles, or when a President uses the Investigate power to see someone’s Party Membership card. You can always lie about hidden knowledge in Secret Hitler.</p>
    <p><em>If there are fewer than three tiles remaining in the Policy deck at the end of a Legislative Session,</em> they are shuffled with the Discard pile to create a new Policy deck. Unused Policy tiles are not revealed.</p>
    <h4>Executive Action</h4>
    <p>If the newly-enacted Fascist Policy grants a Presidential Power, the President must use it before the next round can begin. Before using a power, the President is free to discuss the issue with other players, but ultimately the President gets to decide how and when the power is used. Gameplay cannot continue until the President uses the power. Presidential Powers are used only once; they don’t stack or roll over to future turns. If the government enacted a Liberal or Fascist Policy that grants no Presidential Power, begin the next round with a new Election.</p>
    <h4>Presidential Power</h4>
    <p>Investigate Loyalty</p>
    <p>The President chooses a player to investigate. Investigated players show their Party Membership (not the secret role card that also reveals whether the player is Hitler or not, not just whether he's a Liberal or Fascist) to the President. The President may share or lie about the results of their investigation at their discretion. No player may be investigated twice in the same game.</p>
    <p>Call Special Election</p>
    <p>The President chooses any other player at the table to be the next Presidential Candidate. Any player can become President—even players that are term-limited. The new President nominates an eligible player as Chancellor Candidate and the Election proceeds as usual.</p>
    <p>A Special Election does not skip any players. After a Special Election, the President placard returns to the right of the President who enacted the Special Election.</p>
    <p>If the President passes the presidency to the next player in the rotation, that player would get to run for President twice in a row: once for the Special Election and once for their normal shift in the Presidential rotation.</p>
    <p>Policy Peek</p>
    <p>After selecting the Policy deck, the President sees the top three tiles.</p>
    <p>Execution</p>
    <p>The President executes one player by selecting them. If that player is Hitler, the game ends in a Liberal victory. If the executed player is not Hitler, the table does not learn whether a Fascist or a Liberal has been killed; players must try to work out for themselves the new table balance. Executed players are removed from the game and may not chat, vote, or run for office.</p>
    <h4>Veto Power</h4>
    <p>The Veto Power is a permanent special rule that comes into effect after five Fascist Policies have been enacted. For all Legislative Sessions after the fifth Fascist Policy is enacted, the Executive branch gains a permanent new ability to discard all three Policy tiles if both the Chancellor and President agree.</p>
    <p>The President draws three Policy tiles, discards one, and passes the remaining two to the Chancellor as usual. The Chancellor selects one, and then both the President and Chancellor vote on whether or not to veto the results of this election in secret. If so, both Policies are discarded and the President placard passes to the right as usual. If either the President or Chancellor doesn't agree to veto, the Policy passes.</p>
    <p>Each use of the Veto Power represents an inactive government and advances the Election Tracker by one.</p>
    <h2>Basic Strategy</h2>
    <ul>
      <li><em>Everyone should claim to be a Liberal.</em> Since the Liberal team has a voting majority, it can easily shut out any player claiming to be a Fascist. As a Fascist, there is no advantage to outing yourself to the majority. Additionally, Liberals should usually tell the truth. Liberals are trying to figure out the game like a puzzle, so lying can put their team at a significant disadvantage.</li>
      <li><em>If this is your first time playing Hitler, just remember: be as Liberal as possible.</em> Enact Liberal Policies. Vote for Liberal governments. Kiss babies. Trust your fellow Fascists to create opportunities for you to enact Liberal Policies and to advance Fascism on their turns. The Fascists win by subtly manipulating the table and waiting for the right cover to enact Fascist Policies, not by overtly playing as evil.</li>
      <li><em>Liberals frequently benefit from slowing play down and discussing the available information. Fascists frequently benefit from rushing votes and creating confusion.</em></li>
      <li><em>Fascists most often win by electing Hitler, not by enacting six Policies!</em> Electing Hitler isn’t an optional or secondary win condition, it’s the core of a successful Fascist strategy. Hitler should always play as a Liberal, and should generally avoid lying or getting into fights and disagreements with other players. When the time comes, Hitler needs the Liberal's trust to get elected. Even if Hitler isn’t ultimately elected, the distrust sown among Liberals is key to getting Fascists elected late in the game.</li>
      <li><em>Ask other players to explain why they took an action.</em> This is especially important with Presidential Powers—in fact, ask ahead of time whom a candidate is thinking of investigating/appointing/assassinating.</li>
      <li><em>If a Fascist Policy comes up, there are only three possible culprits: The President, the Chancellor, or the Policy Deck.</em> Try to figure out who or what put you in this position.</li>
    </ul>
    <h2>Glossary and Strategies</h2>
    <p>This part contains definitions for common acronyms/terms and also some commonly seen strategies. You may skip this part for now and come back later once you've got hang of the game.</p>
    <ul>
      <li><em>Order</em> During the first rounds of the game, Liberals should try to get as many players elected in the government as possible. In a 5-player game, the first President should pick the fourth player as his Chancellor and the second President pick the fifth player so that everyone gets in the government at least once. As another example, in a 6-player game the picks should be 14, 25, and 36 (1 picking 4, 2 picking 5, 3 picking 6). In a 7-player game, the picks should be 15, 26, 37.</li>
      <li><em>Blue/Red President (BP/RP)</em> Red Presidents (RP) are Presidents who claimed to get three Fascist cards. Blue Presidents (BP) are those who passed along Liberal Policies to the Chancellor. Blue Presidents who didn't have a choice to pass along two Fascist Policies to the Chancellor are sometimes called Semi-Blue Presidents (Semi-BP). Blue Chancellors (BC) are Chancellors who picked a Liberal Policy when they could have picked a Fascist one.</li>
      <li><em>Conflict (conf)</em> Two players can be in conflict for different reasons, like claiming that you saw different Policies during the Legislative Session or investigating somebody and claiming he's a Fascist.</li>
      <li><em>Freeze</em> Players can decide to "freeze" a particular player, meaning that they will not vote to elect that player into government. Usually, people in conflicts are frozen, and sometimes also Red Presidents depending on the circumstances.</li>
      <li><em>Hitler Zone (HZ)</em> The game enters into so-called "Hitler Zone" when 3 Fascist Policies are enacted and there is a risk of electing Hitler that would mean losing the game for Liberals.</li>
      <li><em>Force</em> When a President gets two Liberal and one Fascist Policy (shorthand: RBB) and decide to pass along two Liberal Policies giving the Chancellor no option to pick - that's called forcing. A Liberal should force, but Hitlers that don't know who the other fascists are might sometimes try passing along one Fascist and one Liberal Policy to see if the Chancellor picks the Fascist Policy, signalling the Hitler that they are a Fascist.</li>
      <li><em>Gunpoint (GP)</em> A confirmed Liberal President can pick a player that is in conflict (Hitler usually does not conflict to remain unsuspicious) when the next Presidental Power is the execution. The picked player is forced to pick a Liberal Policy in case he has a choice unless he wants to get shot.</li>
      <li><em>Powerplay (PP)</em> Powerplay is when you nominate the next President as a Chancellor, effectively letting him be in the government for two rounds in a row unless the proposal is denied. This should usually be avoided in the early game.</li>
      <li><em>Double dip</em> When a single player conflicts with two players using the investigation power. How it works is that the President gives two Fascist tiles while lying that he gave the Chancellor a choice. They both get frozen, but the President first gets to investigate another player. He investigates a Liberal and claims he investigated a Fascist. So he effectively froze two Liberals with him.</li>
      <li><em>Double ditch</em> When both the President and Chancellor are Fascists and they both ditch (discard, burn, drop etc.) a Liberal card.</li>
      <li><em>Cucu</em> Cucu is a name for an advanced strategy that comes into play when the investigation power comes into play. This strategy is only valid before Hitler Zone. When a President enacts a Fascist Policy, he should investigate the player two spots ahead of him. If the investigated player is claimed to be a Liberal, he should pick the player who investigated him once he becomes a President. If a conflict happens, everyone can be sure that the Chancellor is a Fascist because he claimed that the President was a Liberal (meaning that he couldn't lie). That forces Fascists into playing Liberal cards. There is also another strategy related to this that is named pre-cucu. That strategy suggests that the next President after the investigation should pick the investigated player.</li>
    </ul>
  </div>
);