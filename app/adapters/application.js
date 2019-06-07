import DS from 'ember-data';
import EmberObject from '@ember/object';
import ENV from 'builder-of-bases/config/environment';

export default DS.JSONAPIAdapter.extend({
  headers: EmberObject.create({
    Authorization: `Bearer ${ENV.APP.COC_API_KEY}`
  })
});
