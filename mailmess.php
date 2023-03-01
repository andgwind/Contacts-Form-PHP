<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	if(!empty($email) && !empty($message)){
		if(filter_var($email, FILTER_VALIDATE_EMAIL)){
			$reciever = "_____";
			$subject = "From: $name <$email>";
			$body = "Name: $name \nEmail: $email\nmessage: $message";
			$sender = "From: $email";
			if(mail($reciever, $subject, $body, $sender)){
				echo "Message sent";

			}else{
				echo "Failed to send message";
			}

		}else{
			echo "Enter valid email";
		}

	}
	else{
		echo "Message or email empty";
	}

