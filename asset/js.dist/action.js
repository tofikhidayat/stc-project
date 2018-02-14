 	$("#pick-one").click(function()
	{
	$("#radio-action-1").css('display', 'block');
	$("#radio-action-2").css('display', 'block');
	$("#radio-action-3").css('display', 'block');
	$("#radio-action-4").css('display', 'block');
	$("#radio-action-5").css('display', 'block');
	$("#radio-action-6").css('display', 'block');

	$("#check-action-1").css('display', 'none');
	$("#check-action-2").css('display', 'none');
	$("#check-action-3").css('display', 'none');
	$("#check-action-4").css('display', 'none');
	$("#check-action-5").css('display', 'none');
	$("#check-action-6").css('display', 'none');

	$("#pick-one-action").prop('checked', true)
	$("#pick-multiple-action").prop('checked', false)
	});

	$("#pick-pultiple").click(function()
	{
	$("#radio-action-1").css('display', 'none');
	$("#radio-action-2").css('display', 'none');
	$("#radio-action-3").css('display', 'none');
	$("#radio-action-4").css('display', 'none');
	$("#radio-action-5").css('display', 'none');
	$("#radio-action-6").css('display', 'none');
	$("#check-action-1").css('display', 'block');
	$("#check-action-2").css('display', 'block');
	$("#check-action-3").css('display', 'block');
	$("#check-action-4").css('display', 'block');
	$("#check-action-5").css('display', 'block');
	$("#check-action-6").css('display', 'block');

		$("#pick-one-action").prop('checked', false)
		$("#pick-multiple-action").prop('checked', true)

	});

	$(".new-option-1").click(function()
	{
		$("#answer-5").css("display","block");
		$(this).css("display","none");
		$(".new-option-2").css("display","block");
	});

	$(".new-option-2").click(function()
	{
		$("#answer-6").css("display","block");


	});

	


