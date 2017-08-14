// given ug and db, create all fns needed to parse data and put into bar graph

// formatting data

function getGroups(ug) {
  var groups = {};
  for (var i = 0; i < ug.length; i++) {
    var user = ug[i];
    var group = user.UserGroup;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(user.Name);
  }
  return groups;
}

function getTodos(list, groups) {
  return Object.keys(groups).map(function(group) {
    return {
      who: group,
      todos: list.filter(function(task) {
        return groups[group].indexOf(task["Assignee"]) != -1;
      })
    }
  });
}

var priorityGroups = {
  high: ["P0", "P1"],
  med: ["P2", "P3"],
  low: ["P4", "P5"]
};

function stackData(totalTodos) {
  return totalTodos.map(function(g) {
    // for each priority, add estimates
    var priorities = Object.keys(priorityGroups);
    var estimates = priorities.map(function(p) {
      var pp = priorityGroups[p];
      return pp.reduce(function(acc, rank) {
        var todos = filterByPriority(g.todos, rank);
        return acc + getEstimate(todos);
      }, 0);
    });
    return { who: g.who, high: estimates[0], med: estimates[1], low: estimates[2] };
  });
}
// filtering methods

function filterAgainstParams(groups, db, params) {
  return db.filter(function(task) {
    var fields = Object.keys(params);
    return fields.reduce(function(acc, f) {
      var options = params[f];
      var fulfill;
      // edge case for "Group" filter
      if (f == "Group") {
        fulfill = options.reduce(function(acc, g) {
          return acc || groups[g].indexOf(task["Assignee"]) != -1;
        }, false);
      } else {
        fulfill = options.indexOf(task[f]) != -1;
      }
      return acc && fulfill;
    }, true);
  });
}

function filterByPriority(list, priority) {
  return list.filter(function(item) {
    return item["Priority"] == priority;
  });
}

function getEstimate(list) {
  return list.reduce(function(acc, item) {
    return acc + cast(item.Estimate);
  }, 0);
}

function cast(x) {
  return +x;
}