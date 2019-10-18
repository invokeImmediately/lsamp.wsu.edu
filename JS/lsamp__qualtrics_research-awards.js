var IntroFieldAddons = IntroFieldAddons || {};

IntroFieldAddons.getAwardDeadline = function ( curSemester ) {
	var awardDeadline = undefined;

	// TODO: Do something.

	return awardDeadline;
};

IntroFieldAddons.getCurrentSemester = function ( ) {
	var curSemester = undefined;

	// TODO: Do something.

	return curSemester;
};

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	var deadlineNotice = document.getElementById( 'research-award-deadline' );
	var curSemester = IntroFieldAddons.getCurrentSemester();
	var awardDeadline = IntroFieldAddons.getAwardDeadline( curSemester );
	if ( awardDeadline !== undefined && curSemester !== undefined ) {
		deadlineNotice.innerHTML( 'Thus, for the current ' + curSemester +
			' semester, the deadline is <strong>' + awardDeadline + '</strong>.'  );
	}
});
