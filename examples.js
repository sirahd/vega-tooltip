"use strict";

(function() {

  function addVlExample(path, id, options) {
    d3.json(path, function(error, vlSpec) {
      if (error) {
        return console.warn(error);
      }
      var opt = {
        mode: "vega-lite"
      };
      vega.embed(id, vlSpec, opt, function(error, result) {
        if (error) {
          return console.error(error);
        }
        vegaTooltip.vegaLite(result.view, vlSpec, options);
      });
    });
  }

  function addVgExample(path, id, options) {
    d3.json(path, function(error, vgSpec) {
      if (error) {
        return console.error(error);
      }
      vega.embed(id, vgSpec, undefined, function(error, result) {
        if (error) {
          return console.error(error);
        }
        vegaTooltip.vega(result.view, options);
      });
    })
  }

  /* Vega-Lite Examples */
  // Scatter Plot
  var scatterOpts = {
    showAllFields: false,
    fields: [
      { field: "Name" },
      { field: "Horsepower" },
      {
        field: "Miles_per_Gallon",
        title: "Miles per Gallon"
      }
    ]
  };
  addVlExample("exampleSpecs/scatter.json", "#vis-scatter", scatterOpts);

  // Bubble Plot with Multiple Aggregations on the same field
  var bubbleOpts = {
    showAllFields: false,
    fields: [
      {
        field: "Horsepower",
        aggregate: "mean",
        formatType: "number",
        format: ".2f"
      },
      {
        field: "Horsepower",
        aggregate: "stdevp",
        formatType: "number",
        format: ".2f"
      }
    ],
  }
  addVlExample("exampleSpecs/bubble_multiple_aggregation.json", "#vis-bubble-multi-aggr", bubbleOpts);

  // Trellis Barley
  var trellisBarleyOpts = {
    showAllFields: false,
    fields: [
      {
        field: "yield",
        formatType: "number",
        format: ".2f"
      },
      {
        field: "year",
        formatType: "string"
      },
      { field: "variety" },
      { field: "site" }
    ]
  };
  addVlExample("exampleSpecs/trellis_barley.json", "#vis-trellis-barley", trellisBarleyOpts);

  // Scatter Binned
  var binMovieOpts = {
    showAllFields: false,
    fields: [
      {field: "Rotten_Tomatoes_Rating"},
      {field: "IMDB_Rating"},
      {field: "*"}
    ]
  };
  addVlExample("exampleSpecs/scatter_binned.json", "#vis-scatter-binned", binMovieOpts);

  // Simple Bar Chart
  addVlExample("exampleSpecs/bar.json", "#vis-bar");

  // Stacked Bar Chart
  addVlExample("exampleSpecs/stacked_bar_weather.json", "#vis-stacked-bar");

  // Layered Bar Chart
  addVlExample("exampleSpecs/bar_layered_transparent.json", "#vis-layered-bar");

  // Colored Line Chart
  addVlExample("exampleSpecs/line_color.json", "#vis-color-line");

  // Overlay Line Chart
  var overlayLineOpts = {
    showAllFields: false,
    fields: [
      {
        field: "date",
        formatType: "time",
        format: "%Y-%m-%d"
      }
    ]
  }
  addVlExample("exampleSpecs/overlay_line_short.json", "#vis-overlay-line", overlayLineOpts);

  // Overlay Area Chart
  var overlayAreaOpts = {
    showAllFields: false,
    fields: [
      {
        field: "date",
        formatType: "time",
        format: "%Y-%m-%d"
      }
    ]
  }
  addVlExample("exampleSpecs/overlay_area_short.json", "#vis-overlay-area", overlayAreaOpts);
  
  // Vega Examples 
  // Arc
  addVgExample("exampleSpecs/arc.json", "#vis-arc");

  // Choropleth
  var choroplethOpts = {
    showAllFields: false,
    fields: [
      {
        field: "unemp.id",
        title: "County ID",
        formatType: "string"
      },
      {
        field: "unemp.rate",
        title: "Unemployment Rate",
        formatType: "number",
        format: ".1%"
      }
    ]
  }
  addVgExample("exampleSpecs/choropleth.json", "#vis-choropleth", choroplethOpts);

  // Force
  var forceOpts = {
    showAllFields: false,
    fields: [
      { field: "name" }
    ]
  }
  addVgExample("exampleSpecs/force.json", "#vis-force", forceOpts);

  // Heatmap
  var heatmapOpts = {
    showAllFields: false,
    fields: [
      {
        field: "temp",
        title: "temp(F)"
      },
      {
        field: "date",
        formatType: "time",
        format: "%B %e"
      },
      { field: "hour" }
    ]
  }
  addVgExample("exampleSpecs/heatmap.json", "#vis-heatmap", heatmapOpts);
}());
