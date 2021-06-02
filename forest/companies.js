const { collection } = require('forest-express-sequelize');
const moment = require('moment');

collection('companies', {
  actions: [],
  fields: [{
    field: 'userTitle',
    type: 'String',
    get: (company) => {
      return company.user?company.user.title:null;
    },
  }, {
    field: 'userFirstName',
    type: 'String',
    get: (company) => {
      return company.user?company.user.firstName:null;
    },
  }, {
    field: 'userLastName',
    type: 'String',
    get: (company) => {
      return company.user?company.user.lastName:null;
    },
  }, {
    field: 'userEmail',
    type: 'String',
    get: (company) => {
      return company.user?company.user.email:null;
    },
  }, {
    field: 'panInfoName',
    type: 'String',
    get: (company) => {
      return company.panInfo?company.panInfo.name:null;
    },
  }, {
    field: 'panInfoNumber',
    type: 'String',
    get: (company) => {
      return company.panInfo?company.panInfo.number:null;
    },
  }, {
    field: 'panInfoDob',
    type: 'Dateonly',
    get: (company) => {
      return company.panInfo?company.panInfo.dob:null;
    },
  }, {
    field: 'panInfoStatus',
    type: 'String',
    get: (company) => {
      return company.panInfo?company.panInfo.status:null;
    },
  }, {
    field: 'panInfoRichText',
    type: 'String',
    get: (company) => {
      return `
<style>
  .horizontal-list-sortable__item.custom-value {
    flex-grow: 1.5;
  }
  .horizontal-list-sortable__item.custom-label {
    flex-grow: 0.5;
    padding-bottom: 8px;
  }
</style>
<ul class="horizontal-list-sortable">
  <li class="horizontal-list-sortable__item custom-label">
    <label class="c-beta-label c-beta-label--top ember-view">
      <span class="c-beta-label__label ">Name:</span>
    </label>
  </li>
  <li class="horizontal-list-sortable__item custom-value">
    <div class="c-beta-label__input c-beta-label__input--top ember-view">    
      <p class="c-row-value ">${company.panInfo?company.panInfo.name:null}</p>
    </div>
  </li>
</ul>
<ul class="horizontal-list-sortable">
  <li class="horizontal-list-sortable__item custom-label">
    <label class="c-beta-label c-beta-label--top ember-view">
      <span class="c-beta-label__label ">Number:</span>
    </label>
  </li>
  <li class="horizontal-list-sortable__item custom-value">
    <div class="c-beta-label__input c-beta-label__input--top ember-view">    
      <p class="c-row-value ">${company.panInfo?company.panInfo.number:null}</p>
    </div>
  </li>
</ul>
<ul class="horizontal-list-sortable">
  <li class="horizontal-list-sortable__item custom-label">
    <label class="c-beta-label c-beta-label--top ember-view">
      <span class="c-beta-label__label ">Status:</span>
    </label>
  </li>
  <li class="horizontal-list-sortable__item custom-value">
    <div class="c-beta-label__input c-beta-label__input--top ember-view">    
      <p class="c-row-value ">${company.panInfo?company.panInfo.status:null}</p>
    </div>
  </li>
</ul>
<ul class="horizontal-list-sortable">
  <li class="horizontal-list-sortable__item custom-label">
    <label class="c-beta-label c-beta-label--top ember-view">
      <span class="c-beta-label__label ">DOB:</span>
    </label>
  </li>
  <li class="horizontal-list-sortable__item custom-value">
    <div class="c-beta-label__input c-beta-label__input--top ember-view">    
      <p class="c-row-value ">${company.panInfo?moment(company.panInfo.dob).format('MMM-DD YYYY'):null}</p>
    </div>
  </li>
</ul>
    `;
    },
  }],
  segments: [],
});
