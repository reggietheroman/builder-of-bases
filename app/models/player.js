import DS from 'ember-data';
const { attr, belongsTo, Model } = DS;

export default Model.extend({
  tag: attr('string'),
  name: attr('string'),
  expLevel: attr('number'),
  trophies: attr('number'),
  versusTrophies: attr('number'),
  attackWins: attr('number'),
  defenseWins: attr('number'),
  bestTrophies: attr('number'),
  donations: attr('number'),
  donationsReceived: attr('number'),
  warStars: attr('number'),
  role: attr('string'),
  townHallLevel: attr('number'),
  builderHallLevel: attr('number'),
  bestVersusTrophies: attr('number'),
  versusBattleWins: attr('number'),
  legendStatistics: attr(),
  achievements: attr(),
  troops: attr(),
  heroes: attr(),
  spells: attr(),

  clan: belongsTo('clan'),
  league: belongsTo('league'),
});
