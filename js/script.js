var svg = d3.select("#graph1"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var color = d3.scaleOrdinal(["black","#5195da", '#52c38a', 'yellow', 'purple']);
var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("padding", "14px")
    .style("background-color", "#f5f5f5")
    .style("color", "black")
    .style('width', '250px')
    .style("border-radius", "6px")
    .style("border-color", "black")
    .style("font", "12px sans-serif");
    //.text("tooltip")

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().distanceMax(90).distanceMin(23)) 
    .force("center", d3.forceCenter(width/2, height / 2));

d3.json("chart1.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.group); })
      .attr('color', '#cfd8dc');

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); })
      .on("mouseover", function(d) {
        tooltip.transition()
         .duration(200)
         .style("opacity", .9);
        tooltip.html(
         '<a target="_blank" href="https://declarations.com.ua/declaration/' + d.id + '">'+ d.name +"</a>");
        //tooltip.text(d.name);
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(3000)
        .attr("visibility", "hidden");
        });

  node.append("text")
      .text(function(d) { return d.id; })
      .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 24) + "px"; })
      .attr("dy", ".35em");

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});

var svg1 = d3.select("#graph2"),
    width1 = +svg1.attr("width"),
    height1 = +svg1.attr("height");

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var color1 = d3.scaleOrdinal(["#5195da", '#52c38a',"black", 'yellow', 'purple']);
var tooltip1 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("padding", "14px")
    .style("background-color", "#f5f5f5")
    .style("color", "black")
    .style('width', '250px')
    .style("border-radius", "6px")
    .style("border-color", "black")
    .style("font", "12px sans-serif")
    .text("tooltip");

var simulation1 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().distanceMax(85).distanceMin(35))
    .force("center", d3.forceCenter(width1/2, height1 / 2));

d3.json("chart2.json", function(error, graph) {
  if (error) throw error;

  var link1 = svg1.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.group); })
      .attr('color', '#cfd8dc');

  var node1 = svg1.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color1(d.group); })
      .on("mouseover", function(d) {
        tooltip1.text(d.name);
              tooltip1.style("visibility", "visible");
      })
      .on("mousemove", function() {
          return tooltip1.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function(){return tooltip1.style("visibility", "hidden");});

  node1.append("text")
      .text(function(d) { return d.id; })
      .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 24) + "px"; })
      .attr("dy", ".35em");

  simulation1
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation1.force("link")
      .links(graph.links);
  function ticked() {
    link1
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node1
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});
var svg2 = d3.select("#graph3"),
    width2 = +svg2.attr("width"),
    height2 = +svg2.attr("height");

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var color2 = d3.scaleOrdinal(["#5195da","black", '#ffca28', 'purple', '#52c38a']);
var tooltip2 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("padding", "14px")
    .style("background-color", "#f5f5f5")
    .style("color", "black")
    .style('width', '250px')
    .style("border-radius", "6px")
    .style("border-color", "black")
    .style("font", "12px sans-serif")
    .text("tooltip");

var simulation2 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().distanceMax(56).distanceMin(20))
    .force("center", d3.forceCenter(width2/2, height2 / 2));

d3.json("chart3.json", function(error, graph) {
  if (error) throw error;

  var link2 = svg2.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.group); })
      .attr('color', '#cfd8dc');

  var node2 = svg2.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color2(d.group); })
      .on("mouseover", function(d) {
        tooltip2.text(d.name);
              tooltip2.style("visibility", "visible");
      })
      .on("mousemove", function() {
          return tooltip2.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function(){return tooltip2.style("visibility", "hidden");});

  node2.append("text")
      .text(function(d) { return d.id; })
      .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 24) + "px"; })
      .attr("dy", ".35em");

  simulation2
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation2.force("link")
      .links(graph.links);
  function ticked() {
    link2
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node2
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});