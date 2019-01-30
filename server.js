var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/migrationvalidator') {

	var SKIP = 2147483647 // int max
	var response = {
		'CampaignActivity.BounceDetails' : SKIP,
        'CampaignActivity.EmsCampaignId' : 64,
        'CampaignActivity.CampaignUrl' : 2048,
        'Campaign.EmsCampaignId' : 64,
        'Survey.EmsSurveyId' : 64,
        'SurveyResponse.EmsSurveyId' : 64,
        'SurveyResponse.AgentText' : SKIP,
        'SurveyResponse.Referrer' : SKIP,
	};
	res.write(JSON.stringify(response));
}
res.end();
});
server.listen(8080);