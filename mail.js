garoon.events.on("mail.example.create.show", function(event) {
	console.log("mail.example.create.show");
	console.log(event );
	return event;
});


garoon.events.on("mail.example.reply.show", function(event) {
	console.log("mail.example.reply.show");
	console.log(event );
	return event;
});

garoon.events.on("mail.example.replyAll.show", function(event) {
	console.log("mail.example.replyAll.show");
	console.log(event );
	return event;
});

garoon.events.on("mail.example.transfer.show", function(event) {
	console.log("mail.example.transfer.show");
	console.log(event );
	return event;
});