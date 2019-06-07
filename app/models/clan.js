import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  tag: attr('string'),
  name: attr('string'),
  location: attr(),
  badgeUrls: attr(),
  clanLevel: attr('number'),
  clanPoints: attr('number'),
  clanVersusPoints: attr('number'),
  members: attr('number'),
  type: attr('string'),
  requiredTrophies: attr('number'),
  warFrequency: attr('string'),
  warWinStreak: attr('number'),
  warWins: attr('number'),
  warTies: attr('number'),
  warLosses: attr('number'),
  isWarLogPublic: attr('boolean'),
  description: attr('string'),

  memberList: hasMany('player')
});
