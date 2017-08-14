// current filters (show all)
var filterParams = {
  "Priority": ["P0", "P1", "P2", "P3", "P4", "P5"],
  "Resolution": ["Resolved", "Unresolved"],
  "Group": ["Group1", "Group2", "Group3"]
};

function setUpUI(allGroups, allTasks) {
  // populate UI
  var filterCategories = Object.keys(filterParams);
  filterCategories.map(function(category) {
    var filterElement = $('#select' + category);
    var dd = $('<div>').attr('id', category).attr('class', 'dropdown').hide();
    var options = filterParams[category];
    options.map(function(o) {
      var cb = $('<input>').attr('type', 'checkbox').attr('checked', true);
      cb.val(o);
      var label = $('<span>').text(o);
      var option = $('<div>').attr('class', 'option');
      option.append(cb).append(label);
      dd.append(option);
    });
    filterElement.append(dd);
  });

  // set up buttons to manipulate data
  $('#clearFilters').on('click', function() {
    $('.dropdown input:not(:checked)').trigger('click');
  });

  $('.toggleDropdown').on('click', function() {
    var category = $(this).parent();
    category.find('.dropdown').toggle();
    $(this).toggleClass("displayingDD");
  });

  $('input[type=checkbox]').on('click', function(e) {
    var value = $(this).val();

    // update filterParams
    var category = $(this).parent().parent().attr("id");
    var idx = filterParams[category].indexOf(value);
    if (idx != -1) {
      filterParams[category].splice(idx, 1);
    } else {
      filterParams[category].push(value);
    }

    var newData = organizeData(allGroups, allTasks);
    updateBarGraph(newData);
  });

  $('.option').on('click', 'span', function() {
    // toggle checkbox
    var cb = $(this).siblings('input');
    cb.trigger('click');
  });
}