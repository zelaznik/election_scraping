var json_path = './2016_house_results.json';
var raw_data = require(json_path);

function gets(key) {
  return function(obj) {
    return obj[key];
  };
}

var Enumerable = {
  sum: function(iterable) {
    var key, value, total;

    total = 0;
    for (key in iterable) {
        value = iterable[key];
        total += value;
    }
    return total;
  },
  first: function(iterable, criteria) {
    var key, value;
    for (key in iterable) {
      value = iterable[key];
      if (criteria(value)) {
        return value;
      }
    }
  }
};


raw_data.forEach(function(state_results) {
  state_results.districts.forEach(function(district) {

  });
});

function District(args) {
  this.district_id = args.district_id;
  this.candidates  = args.candidates;
}

District.prototype = {
  constructor: District,
  total_votes: function() {
    Enumerable.sum(this.candidates.map(gets('votes')));
  },
  total_percent: function() {
    Enumerable.sum(this.candidates.map(gets('percent')));
  },
  winner: function() {
    return this.candidates.sort(gets('votes'), -1);
  },
  winning_party: function() {
    return this.winner().party();
  },
  democratic_votes: function() {

  },
  total_percent: function() {
    var pct = 0;
    this.candidates.forEach(function(candidate) {
      pct += candidate.pct;
    });
    return pct;
  }

}

function Candidate(data) {

}