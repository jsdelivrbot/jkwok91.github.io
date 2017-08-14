var width, height;
var chartWidth, chartHeight;
var margin, yAxisMargin;

var svg, axisLayer, chartLayer;

var legend;
var xAxis, yAxis;
var xScale = d3.scaleLinear();
var yScale = d3.scaleBand();

var priorities = Object.keys(priorityGroups);
var z = d3.scaleOrdinal()
  .domain(priorities)
  .range(["#ff0000", "#ff6d10", "#00b050"]);

function updateBarGraph(data) {
  drawAxis(data);
  drawChart(data);
  drawLegend();
}

function initBarGraph(graphElement) {
  svg = d3.select(graphElement).append("svg");
  axisLayer = svg.append("g").classed("axisLayer", true);
  chartLayer = svg.append("g").classed("chartLayer", true);

  width = document.querySelector("#graph").clientWidth * .5;
  height = document.querySelector("#graph").clientHeight * .75;

  margin = {
    top: 40,
    left: 40,
    bottom: 70,
    right: 0
  };
  yAxisMargin = 40;

  chartWidth = width - (yAxisMargin + margin.left + margin.right);
  chartHeight = height - (margin.top + margin.bottom);

  svg.attr("width", width + yAxisMargin).attr("height", height);
  axisLayer
    .attr("transform", "translate(" + [margin.left, 0] + ")");

  chartLayer
    .attr("transform", "translate(" + [yAxisMargin + margin.left, margin.top] + ")")
    .append("text")
    .attr("class", "chartTitle")
    .attr("x", chartWidth / 2)
    .attr("y", -margin.top / 2)
    .attr("dy", "0.32em")
    .attr("text-anchor", "middle")
    .text("Todo Estimate Per Group");

  initAxis();
  initLegend();
}

function drawChart(data) {
  d3.selectAll(".bar").remove();

  var bar = d3.select(".chartLayer").append("g")
    .attr("class", "bar")
    .selectAll("g")
    .data(d3.stack().keys(priorities)(data));

  bar
    .enter().append("g")
    .attr("fill", function(d) {
      return z(d.key);
    })
    .selectAll("rect")
    .data(function(d) {
      return d;
    })
    .enter().append("rect")
    .attr("x", function(d) {
      return xScale(d[0]);
    })
    .attr("y", function(d) {
      return yScale(d.data.who);
    })
    .attr("width", function(d) {
      return xScale(d[1]) - xScale(d[0]);
    })
    .attr("height", yScale.bandwidth());

}

function initAxis() {
  yAxis = d3.axisLeft(yScale);
  xAxis = d3.axisBottom(xScale);

  axisLayer
    .append("g")
    .attr("transform", "translate(" + [margin.left, margin.top] + ")")
    .attr("class", "axis y");

  axisLayer
    .append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(" + [margin.left, chartHeight + margin.top] + ")");

  axisLayer
    .append("text")
    .attr("transform", "translate(" + [-margin.left / 2, height / 2] + ")rotate(-90)")
    .text("Groups");

  axisLayer
    .append("text")
    .attr("transform", "translate(" + [chartWidth / 2 + margin.left, height - margin.bottom / 2] + ")")
    .attr("text-anchor", "middle")
    .text("Estimate Units");
}

function drawAxis(data) {
  setDomains(data);

  axisLayer.select(".axis.y")
    .call(yAxis);

  axisLayer.select(".axis.x")
    .call(xAxis);
}

function setDomains(data) {
  xScale.domain([0, 1.1 * d3.max(data, function(d) {
      return d.high + d.med + d.low;
    })])
    .range([0, chartWidth])
    .nice();

  yScale.domain(data.map(function(d) {
      return d.who
    }))
    .range([0, chartHeight])
    .padding(0.5);
}

function initLegend() {
  legend = d3.select(".chartLayer").append("g")
    .attr("class", "legend")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g");
}

function drawLegend() {
  d3.selectAll(".entry").remove();

  var entries = priorities.filter(function(r) {
    return priorityGroups[r].reduce(function(acc, p) {
      // return if represented in filterParams
      return acc || filterParams["Priority"].indexOf(p) != -1;
    }, false);
  });

  var entry = legend.data(entries)
    .enter().append("g")
    .attr("class", "entry")
    .attr("transform", function(d, i) {
      return "translate(" + -margin.left + "," + i * 20 + ")";
    })

  entry
    .append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
  entry
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return priorityGroups[d].filter(function(p) {
        // return if represented in filterParams
        return filterParams["Priority"].indexOf(p) != -1;
      });
    });
}
