    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    var getExperiment = function() {
        return cxApi.chooseVariation();
    }
    
    try{
        window.experiment = getExperiment() || 1;
    }catch(err){
         window.experiment = 1    
    }
    
    console.log("Experiment: " + window.experiment);

    ga('create', 'UA-76336068-1', 'auto');
    ga('send', 'pageview');