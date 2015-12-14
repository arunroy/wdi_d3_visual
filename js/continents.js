var margin = {top: 20, right: 80, bottom: 30, left: 80},
    width = 1260 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//var parseDate = d3.time.format("%Y%m%d").parse;
var margin = {top: 20, right: 80, bottom: 30, left: 80},
    width = 1260 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//var parseDate = d3.time.format("%Y%m%d").parse;
var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(d3.format("d"))
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Aggregate); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../data/continentsAggregate.json", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));



  var Continents = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {Year: d.Year, Aggregate: +d[name]};
      })
    };
  });

  x.domain(d3.extent(data, function(d) { return d.Year; }));

  y.domain([
    d3.min(Continents, function(c) { return d3.min(c.values, function(v) { return v.Aggregate; }); }),
    d3.max(Continents, function(c) { return d3.max(c.values, function(v) { return v.Aggregate; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Aggregate");

  var Continents = svg.selectAll(".Continents")
      .data(Continents)
    .enter().append("g")
      .attr("class", "Continents");

  Continents.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return color(d.name); });
      var legend = svg.selectAll(".legend")
          .data(color.domain().slice().reverse())
        .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

      legend.append("rect")
          .attr("x", width+20)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

      legend.append("text")
          .attr("x", width+18)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d; });

});
